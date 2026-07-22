/**
 * Auth Service using Firebase Authentication and Cloud Firestore.
 * Connects directly to Firebase Auth and saves test results securely in Firestore.
 * Firebase SDK is loaded lazily via dynamic imports for optimal bundle size.
 */

import { TestResult } from "../types";

const TOKEN_KEY = 'magistracy_access_token';
const USER_KEY = 'magistracy_user';

export interface UserConsent {
  accepted: boolean;
  privacyPolicyVersion: string;
  userAgreementVersion: string;
  dataConsentVersion: string;
  acceptedAt: string;
}

export interface UserProfile {
  id: number;
  uid: string;
  email: string;
  full_name: string;
  is_active: boolean;
  specialty_code?: string;
  specialty_name?: string;
  last_name?: string;
  first_name?: string;
  patronymic?: string;
  test_lang?: string;
  foreign_lang?: string;
  tgo_lang?: string;
  consent?: UserConsent;
  is_premium?: boolean;
  ai_queries_today?: number;
  ai_queries_date?: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: UserProfile;
}

export interface HistoryItem {
  id: number;
  total_score: number;
  max_score: number;
  subject_scores: string;
  correct_count: number;
  total_questions: number;
  created_at: string;
  questions_data?: string; // JSON string of question IDs (e.g. '["q1", "q2"]')
  answers_data?: string;   // JSON string of selected option IDs (e.g. '{"q1": ["optA"]}')
}

// Helpers for localStorage
function readJson<T>(key: string, fallback: T): T {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

// Maps alphanumeric Firebase UIDs to numeric IDs deterministically via string hashing
function getOrCreateNumericId(uid: string): number {
  let hash = 0;
  for (let i = 0; i < uid.length; i++) {
    const char = uid.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}


// Lazy firebase imports — only loaded when firebase functions are called
let _auth: any = null;
let _db: any = null;
let _googleProvider: any = null;

async function getFirebaseAuth() {
  if (!_auth) {
    const { getAuthInstance } = await import('../firebase');
    _auth = await getAuthInstance();
  }
  return _auth;
}

async function getFirebaseDb() {
  if (!_db) {
    const { getDb } = await import('../firebase');
    _db = await getDb();
  }
  return _db;
}

async function getFirebaseGoogleProvider() {
  if (!_googleProvider) {
    const { getGoogleProvider } = await import('../firebase');
    _googleProvider = await getGoogleProvider();
  }
  return _googleProvider;
}

// Check if Firebase is ready
function ensureFirebaseReady() {
  // Will be lazy-loaded on first firebase call
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getSavedUser(): UserProfile | null {
  return readJson<UserProfile | null>(USER_KEY, null);
}

export function saveUser(user: UserProfile): void {
  writeJson(USER_KEY, user);
}

export function isAuthenticated(): boolean {
  return !!getToken() && !!getSavedUser();
}

export function authHeaders(): Record<string, string> {
  const token = getToken();
  return token
    ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    : { 'Content-Type': 'application/json' };
}

/** Email/Password Тіркелу */
export async function register(email: string, full_name: string, password: string): Promise<AuthResponse> {
  const cleanEmail = email.toLowerCase().trim();
  const cleanName = full_name.trim();

  if (password.length < 6) throw new Error('Құпия сөз кемінде 6 таңбадан тұруы керек');
  if (!cleanEmail || !cleanEmail.includes('@')) throw new Error('Жарамсыз email мекенжайы');
  if (!cleanName) throw new Error('Аты-жөніңізді жазыңыз');

  const authInstance = await getFirebaseAuth();
  const { createUserWithEmailAndPassword, updateProfile } = await import('firebase/auth');
  const userCredential = await createUserWithEmailAndPassword(authInstance, cleanEmail, password);
  const fbUser = userCredential.user;

  await updateProfile(fbUser, { displayName: cleanName });

  const numericId = getOrCreateNumericId(fbUser.uid);
  const profile: UserProfile = {
    id: numericId,
    uid: fbUser.uid,
    email: cleanEmail,
    full_name: cleanName,
    is_active: true
  };

  const idToken = await fbUser.getIdToken();
  setToken(idToken);
  saveUser(profile);

  return { access_token: idToken, token_type: 'bearer', user: profile };
}

/** Email/Password Кіру */
export async function login(email: string, password: string): Promise<AuthResponse> {
  const cleanEmail = email.toLowerCase().trim();

  const authInstance = await getFirebaseAuth();
  const { signInWithEmailAndPassword } = await import('firebase/auth');
  const userCredential = await signInWithEmailAndPassword(authInstance, cleanEmail, password);
  const fbUser = userCredential.user;

  const numericId = getOrCreateNumericId(fbUser.uid);
  const profile: UserProfile = {
    id: numericId,
    uid: fbUser.uid,
    email: fbUser.email || cleanEmail,
    full_name: fbUser.displayName || 'Қолданушы',
    is_active: true
  };

  // Load consent from Firestore so it persists across sessions
  try {
    const dbInstance = await getFirebaseDb();
    const { doc, getDoc } = await import('firebase/firestore');
    const userDocRef = doc(dbInstance, "users", fbUser.uid);
    const userSnap = await getDoc(userDocRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      if (data.consent) {
        profile.consent = data.consent as UserConsent;
      }
      profile.is_premium = !!data.is_premium;
    }
  } catch (e) {
    console.warn("Firestore consent fetch on login failed:", e);
  }

  const idToken = await fbUser.getIdToken();
  setToken(idToken);
  saveUser(profile);

  return { access_token: idToken, token_type: 'bearer', user: profile };
}

/** Google Sign-In — автоматты таңдау: popup немесе redirect */
export async function loginWithGoogle(): Promise<AuthResponse | void> {
  const authInstance = await getFirebaseAuth();
  const provider = await getFirebaseGoogleProvider();
  const { signInWithPopup, signInWithRedirect } = await import('firebase/auth');

  try {
    // Popup-ты бірінші сынап көру (desktop жұмыс істейді)
    const userCredential = await signInWithPopup(authInstance, provider);
    const fbUser = userCredential.user;

    const numericId = getOrCreateNumericId(fbUser.uid);
    const profile: UserProfile = {
      id: numericId,
      uid: fbUser.uid,
      email: fbUser.email || "",
      full_name: fbUser.displayName || 'Google Пайдаланушысы',
      is_active: true
    };

    try {
      const dbInstance = await getFirebaseDb();
      const { doc, getDoc } = await import('firebase/firestore');
      const userDocRef = doc(dbInstance, "users", fbUser.uid);
      const userSnap = await getDoc(userDocRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        if (data.consent) profile.consent = data.consent as UserConsent;
        profile.is_premium = !!data.is_premium;
      }
    } catch (e) {
      console.warn("Firestore consent fetch on Google login failed:", e);
    }

    const idToken = await fbUser.getIdToken();
    setToken(idToken);
    saveUser(profile);
    return { access_token: idToken, token_type: 'bearer', user: profile };

  } catch (popupError: any) {
    console.warn('[AUTH] Popup failed, trying redirect:', popupError.code);

    // Popup blocked/shut down → redirect-ке ауысу
    if (
      popupError.code === 'auth/popup-blocked' ||
      popupError.code === 'auth/popup-closed-by-user' ||
      popupError.code === 'auth/cancelled-popup-request' ||
      popupError.code === 'auth/operation-not-allowed'
    ) {
      await signInWithRedirect(authInstance, provider);
      return;
    }

    // Басқа қателер — redirect-ке ауысу
    await signInWithRedirect(authInstance, provider);
    return;
  }
}

/** Redirect-тен кейінгі нәтижені өңдеу */
export async function handleGoogleRedirectResult(): Promise<AuthResponse | null> {
  try {
    const authInstance = await getFirebaseAuth();
    const { getRedirectResult } = await import('firebase/auth');
    const result = await getRedirectResult(authInstance);
    if (!result || !result.user) return null;

    const fbUser = result.user;
    const numericId = getOrCreateNumericId(fbUser.uid);
    const profile: UserProfile = {
      id: numericId,
      uid: fbUser.uid,
      email: fbUser.email || "",
      full_name: fbUser.displayName || 'Google Пайдаланушысы',
      is_active: true
    };

    // Load consent from Firestore
    try {
      const dbInstance = await getFirebaseDb();
      const { doc, getDoc } = await import('firebase/firestore');
      const userDocRef = doc(dbInstance, "users", fbUser.uid);
      const userSnap = await getDoc(userDocRef);
      if (userSnap.exists()) {
        const data = userSnap.data();
        if (data.consent) {
          profile.consent = data.consent as UserConsent;
        }
        profile.is_premium = !!data.is_premium;
      }
    } catch (e) {
      console.warn("Firestore consent fetch on redirect login failed:", e);
    }

    const idToken = await fbUser.getIdToken();
    setToken(idToken);
    saveUser(profile);

    return { access_token: idToken, token_type: 'bearer', user: profile };
  } catch (error: any) {
    // user cancelled the redirect
    if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
      return null;
    }
    throw error;
  }
}

/** Шығу */
export async function logout(): Promise<void> {
  try {
    const authInstance = await getFirebaseAuth();
    const { signOut } = await import('firebase/auth');
    await signOut(authInstance);
  } catch (e) {
    console.warn("Firebase signOut failed:", e);
  }
  removeToken();
}

/** Профиль алу */
export async function getProfile(): Promise<UserProfile> {
  const authInstance = await getFirebaseAuth();
  const currentUser = authInstance.currentUser;
  if (!currentUser) {
    removeToken();
    throw new Error('Сессия аяқталды');
  }

  const numericId = getOrCreateNumericId(currentUser.uid);
  const savedUser = getSavedUser();

  let isPremium = false;
  let aiQueriesToday = 0;
  let aiQueriesDate = "";

  // Track consent from Firestore
  let firestoreConsent: UserConsent | undefined = savedUser?.consent;

  // Synchronize with Firestore database if online/db is ready
  try {
    const dbInstance = await getFirebaseDb();
    const { doc, getDoc, setDoc } = await import('firebase/firestore');
    const userDocRef = doc(dbInstance, "users", currentUser.uid);
    const userSnap = await getDoc(userDocRef);
    if (userSnap.exists()) {
      const data = userSnap.data();
      isPremium = !!data.is_premium;
      aiQueriesToday = data.ai_queries_today || 0;
      aiQueriesDate = data.ai_queries_date || "";

      // Read consent from Firestore (source of truth)
      if (data.consent) {
        firestoreConsent = data.consent as UserConsent;
      }
    } else {
      // Create initial document
      await setDoc(userDocRef, {
        email: currentUser.email || "",
        full_name: currentUser.displayName || savedUser?.full_name || 'Қолданушы',
        is_premium: false,
        created_at: new Date().toISOString()
      });
    }
  } catch (e) {
    console.warn("Firestore user sync failed, falling back to local storage:", e);
    isPremium = !!savedUser?.is_premium;
    aiQueriesToday = savedUser?.ai_queries_today || 0;
    aiQueriesDate = savedUser?.ai_queries_date || "";
  }

  const profile: UserProfile = {
    id: numericId,
    uid: currentUser.uid,
    email: currentUser.email || "",
    full_name: currentUser.displayName || savedUser?.full_name || 'Қолданушы',
    is_active: true,
    specialty_code: savedUser?.specialty_code,
    specialty_name: savedUser?.specialty_name,
    last_name: savedUser?.last_name,
    first_name: savedUser?.first_name,
    patronymic: savedUser?.patronymic,
    test_lang: savedUser?.test_lang,
    foreign_lang: savedUser?.foreign_lang,
    tgo_lang: savedUser?.tgo_lang,
    consent: firestoreConsent,
    is_premium: isPremium,
    ai_queries_today: aiQueriesToday,
    ai_queries_date: aiQueriesDate
  };
  saveUser(profile);
  return profile;
}

/** Парольді ұмыту — Сілтеме жіберу */
export async function forgotPassword(email: string): Promise<string> {
  const cleanEmail = email.toLowerCase().trim();
  const authInstance = await getFirebaseAuth();
  const { sendPasswordResetEmail } = await import('firebase/auth');
  await sendPasswordResetEmail(authInstance, cleanEmail);
  return 'Құпия сөзді өзгерту сілтемесі email-ге жіберілді. Поштаңызды тексеріңіз.';
}


// ==================== Cloud Firestore Test History ====================

export async function getHistory(): Promise<HistoryItem[]> {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  try {
    const dbInstance = await getFirebaseDb();
    const { collection, query, where, getDocs } = await import('firebase/firestore');
    const q = query(collection(dbInstance, "history"), where("user_uid", "==", user.uid));
    const snap = await getDocs(q);
    const list: HistoryItem[] = [];
    
    snap.forEach(docSnap => {
      const data = docSnap.data();
      list.push({
        id: data.id,
        total_score: data.total_score,
        max_score: data.max_score,
        subject_scores: data.subject_scores,
        correct_count: data.correct_count,
        total_questions: data.total_questions,
        created_at: data.created_at,
        questions_data: data.questions_data,
        answers_data: data.answers_data
      });
    });
    
    return list.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  } catch (err) {
    console.error("Firestore history fetch failed, falling back to empty:", err);
  }
  return [];
}

export async function getHistoryItemById(id: string | number): Promise<HistoryItem | null> {
  try {
    const dbInstance = await getFirebaseDb();
    const { collection, query, where, getDocs, doc, getDoc } = await import('firebase/firestore');
    const numId = Number(id);
    const targetId = isNaN(numId) ? id : numId;

    // 1. Query by numeric or string id field
    const q1 = query(collection(dbInstance, "history"), where("id", "==", targetId));
    let snap = await getDocs(q1);

    // 2. Query by string id field if numeric query returned empty
    if (snap.empty && typeof targetId === 'number') {
      const q2 = query(collection(dbInstance, "history"), where("id", "==", String(targetId)));
      snap = await getDocs(q2);
    }

    if (!snap.empty) {
      const data = snap.docs[0].data();
      return {
        id: data.id || snap.docs[0].id,
        total_score: data.total_score,
        max_score: data.max_score,
        subject_scores: data.subject_scores,
        correct_count: data.correct_count,
        total_questions: data.total_questions,
        created_at: data.created_at,
        questions_data: data.questions_data,
        answers_data: data.answers_data
      };
    }

    // 3. Fallback: try fetching by Firestore doc ID directly
    try {
      const docRef = doc(dbInstance, "history", String(id));
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: data.id || docSnap.id,
          total_score: data.total_score,
          max_score: data.max_score,
          subject_scores: data.subject_scores,
          correct_count: data.correct_count,
          total_questions: data.total_questions,
          created_at: data.created_at,
          questions_data: data.questions_data,
          answers_data: data.answers_data
        };
      }
    } catch (e) {}
  } catch (err) {
    console.error("Fetch history by ID failed:", err);
  }
  return null;
}

export async function deleteHistoryItem(id: number): Promise<void> {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  try {
    const dbInstance = await getFirebaseDb();
    const { collection, query, where, getDocs, doc, deleteDoc } = await import('firebase/firestore');
    const q = query(
      collection(dbInstance, "history"), 
      where("user_uid", "==", user.uid),
      where("id", "==", id)
    );
    const snap = await getDocs(q);
    const promises: Promise<void>[] = [];
    snap.forEach(docSnap => {
      promises.push(deleteDoc(doc(dbInstance, "history", docSnap.id)));
    });
    await Promise.all(promises);
  } catch (err) {
    console.error("Delete history item failed:", err);
  }
}

export async function saveTestResult(
  result: TestResult,
  questionIds?: string[],
  answers?: Record<string, string[]>
): Promise<HistoryItem> {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  const subjectScores = JSON.stringify(result.subjectScores);

  const item: HistoryItem = {
    id: Date.now(),
    total_score: result.totalScore,
    max_score: result.maxScore,
    subject_scores: subjectScores,
    correct_count: result.correctCount,
    total_questions: result.totalQuestions,
    created_at: new Date().toISOString(),
    questions_data: questionIds ? JSON.stringify(questionIds) : undefined,
    answers_data: answers ? JSON.stringify(answers) : undefined
  };

  try {
    const dbInstance = await getFirebaseDb();
    const { collection, addDoc } = await import('firebase/firestore');
    const userName = user.full_name || (user.first_name ? `${user.first_name} ${user.last_name || ''}`.trim() : '') || (user.email ? user.email.split('@')[0] : 'Қолданушы');
    await addDoc(collection(dbInstance, "history"), {
      ...item,
      user_uid: user.uid,
      user_id: user.id,
      user_name: userName,
      user_email: user.email || ''
    });
  } catch (err) {
    console.warn("Failed to save test result to Firestore:", err);
  }

  return item;
}

export async function sendQuestionReport(
  questionId: string,
  questionText: string,
  comment: string
): Promise<void> {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  try {
    const dbInstance = await getFirebaseDb();
    const { collection, addDoc } = await import('firebase/firestore');
    await addDoc(collection(dbInstance, "reports"), {
      question_id: questionId,
      question_text: questionText,
      user_uid: user.uid,
      user_email: user.email,
      user_name: user.full_name,
      comment: comment.trim(),
      created_at: new Date().toISOString()
    });
  } catch (err) {
    throw new Error('Деректер базасымен байланысу мүмкін емес');
  }
}

export function updateUserSpecialty(code: string, name: string): UserProfile {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  const updatedProfile: UserProfile = {
    ...user,
    specialty_code: code,
    specialty_name: name
  };

  saveUser(updatedProfile);
  return updatedProfile;
}

export function updateUserProfileFields(fields: Partial<UserProfile>): UserProfile {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  const updatedProfile: UserProfile = {
    ...user,
    ...fields
  };

  saveUser(updatedProfile);

  // Sync to Firestore asynchronously
  if (user.uid) {
    (async () => {
      try {
        const dbInstance = await getFirebaseDb();
        const { doc, updateDoc } = await import('firebase/firestore');
        const userDocRef = doc(dbInstance, "users", user.uid);
        const firestoreUpdate: any = {};
        if (fields.specialty_code !== undefined) firestoreUpdate.specialty_code = fields.specialty_code;
        if (fields.specialty_name !== undefined) firestoreUpdate.specialty_name = fields.specialty_name;
        if (fields.last_name !== undefined) firestoreUpdate.last_name = fields.last_name;
        if (fields.first_name !== undefined) firestoreUpdate.first_name = fields.first_name;
        if (fields.patronymic !== undefined) firestoreUpdate.patronymic = fields.patronymic;
        if (fields.test_lang !== undefined) firestoreUpdate.test_lang = fields.test_lang;
        if (fields.foreign_lang !== undefined) firestoreUpdate.foreign_lang = fields.foreign_lang;
        if (fields.tgo_lang !== undefined) firestoreUpdate.tgo_lang = fields.tgo_lang;
        if (fields.is_premium !== undefined) firestoreUpdate.is_premium = fields.is_premium;
        if (fields.ai_queries_today !== undefined) firestoreUpdate.ai_queries_today = fields.ai_queries_today;
        if (fields.ai_queries_date !== undefined) firestoreUpdate.ai_queries_date = fields.ai_queries_date;
        if (fields.consent !== undefined) firestoreUpdate.consent = fields.consent;

        if (Object.keys(firestoreUpdate).length > 0) {
          await updateDoc(userDocRef, firestoreUpdate);
        }
      } catch (err) {
        console.warn("Async Firestore user update failed:", err);
      }
    })();
  }

  return updatedProfile;
}

export function checkAndIncrementAiLimit(maxDailyLimit: number = 10): { allowed: boolean; remaining: number } {
  const user = getSavedUser();
  if (!user) return { allowed: false, remaining: 0 };

  // AI is strictly premium-only
  if (!user.is_premium) {
    return { allowed: false, remaining: 0 };
  }

  return { allowed: true, remaining: 9999 };
}

export async function deleteUserAccountAndHistory(): Promise<void> {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  try {
    const dbInstance = await getFirebaseDb();
    const { collection, query, where, getDocs, doc, deleteDoc } = await import('firebase/firestore');
    
    // 1. Delete history from Firestore
    const q = query(collection(dbInstance, "history"), where("user_uid", "==", user.uid));
    const snap = await getDocs(q);
    const promises: Promise<void>[] = [];
    snap.forEach(docSnap => {
      promises.push(deleteDoc(doc(dbInstance, "history", docSnap.id)));
    });
    await Promise.all(promises);

    // 2. Delete reports if any
    const q2 = query(collection(dbInstance, "reports"), where("user_uid", "==", user.uid));
    const snap2 = await getDocs(q2);
    const promises2: Promise<void>[] = [];
    snap2.forEach(docSnap => {
      promises2.push(deleteDoc(doc(dbInstance, "reports", docSnap.id)));
    });
    await Promise.all(promises2);
  } catch (err) {
    console.warn("Firestore delete failed:", err);
  }

  // 3. Delete auth account in Firebase
  try {
    const authInstance = await getFirebaseAuth();
    const currentUser = authInstance.currentUser;
    if (currentUser) {
      await currentUser.delete();
    }
  } catch (e) {
    console.warn("Could not delete auth user directly (might need reauth):", e);
  }

  // 4. Log out and clear localStorage
  removeToken();
}

export interface LeaderboardEntry {
  userId: string;
  userName: string;
  bestScore: number;
  maxScore: number;
  percentage: number;
  totalTests: number;
}

export async function getLeaderboard(limit: number = 10): Promise<LeaderboardEntry[]> {
  try {
    const dbInstance = await getFirebaseDb();
    const { collection, query, orderBy, getDocs, doc, getDoc, limit: firestoreLimit } = await import('firebase/firestore');
    const currentUser = getSavedUser();

    // Get all test results, ordered by score descending
    const q = query(
      collection(dbInstance, "history"),
      orderBy("total_score", "desc"),
      firestoreLimit(100)
    );
    const snap = await getDocs(q);

    // Aggregate by user: keep best score per user
    const userBest = new Map<string, LeaderboardEntry>();

    snap.forEach(docSnap => {
      const data = docSnap.data();
      const uid = data.user_uid || data.userId || data.user_id;
      if (!uid) return;

      const score = Number(data.total_score || data.totalScore || 0);
      const maxScore = Number(data.max_score || data.maxScore || 150);
      const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

      let nameCandidate = data.user_name || data.userName || data.full_name || '';
      if (!nameCandidate && data.user_email) {
        nameCandidate = data.user_email.split('@')[0];
      }
      if (currentUser && currentUser.uid === uid && currentUser.full_name) {
        nameCandidate = currentUser.full_name;
      }

      const existing = userBest.get(uid);
      if (!existing || score > existing.bestScore) {
        userBest.set(uid, {
          userId: uid,
          userName: nameCandidate || existing?.userName || 'Қолданушы',
          bestScore: score,
          maxScore,
          percentage,
          totalTests: (existing?.totalTests || 0) + 1,
        });
      } else {
        existing.totalTests += 1;
      }
    });

    const sortedEntries = Array.from(userBest.values())
      .sort((a, b) => b.bestScore - a.bestScore)
      .slice(0, limit);

    // Fetch user full name from "users" collection if name is generic or missing
    await Promise.all(
      sortedEntries.map(async (entry) => {
        if (!entry.userName || entry.userName === 'Қолданушы' || entry.userName === 'Google Пайдаланушысы') {
          try {
            const userDocSnap = await getDoc(doc(dbInstance, "users", entry.userId));
            if (userDocSnap.exists()) {
              const uData = userDocSnap.data();
              const realName = uData.full_name || uData.displayName || (uData.first_name ? `${uData.first_name} ${uData.last_name || ''}`.trim() : '') || (uData.email ? uData.email.split('@')[0] : '');
              if (realName) {
                entry.userName = realName;
              }
            }
          } catch (e) {
            // Silence permission errors for anonymous lookups
          }
        }
      })
    );

    return sortedEntries;
  } catch (err) {
    console.error("Leaderboard fetch failed:", err);
    return [];
  }
}


