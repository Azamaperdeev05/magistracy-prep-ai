/**
 * Auth Service using Firebase Authentication and Cloud Firestore.
 * Connects directly to Firebase Auth and saves test results securely in Firestore.
 */

import { auth, googleProvider, db } from '../firebase';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  deleteDoc, 
  doc 
} from 'firebase/firestore';
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


// Check if Firebase is ready
function ensureFirebaseReady() {
  if (!auth) {
    throw new Error('Firebase Auth жүйесі бапталмаған. .env файлындағы баптауларды тексеріңіз.');
  }
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
  ensureFirebaseReady();
  const cleanEmail = email.toLowerCase().trim();
  const cleanName = full_name.trim();

  if (password.length < 6) throw new Error('Құпия сөз кемінде 6 таңбадан тұруы керек');
  if (!cleanEmail || !cleanEmail.includes('@')) throw new Error('Жарамсыз email мекенжайы');
  if (!cleanName) throw new Error('Аты-жөніңізді жазыңыз');

  const userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, password);
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
  ensureFirebaseReady();
  const cleanEmail = email.toLowerCase().trim();

  const userCredential = await signInWithEmailAndPassword(auth, cleanEmail, password);
  const fbUser = userCredential.user;

  const numericId = getOrCreateNumericId(fbUser.uid);
  const profile: UserProfile = {
    id: numericId,
    uid: fbUser.uid,
    email: fbUser.email || cleanEmail,
    full_name: fbUser.displayName || 'Қолданушы',
    is_active: true
  };

  const idToken = await fbUser.getIdToken();
  setToken(idToken);
  saveUser(profile);

  return { access_token: idToken, token_type: 'bearer', user: profile };
}

/** Google Sign-In */
export async function loginWithGoogle(): Promise<AuthResponse> {
  ensureFirebaseReady();
  
  const userCredential = await signInWithPopup(auth, googleProvider);
  const fbUser = userCredential.user;

  const numericId = getOrCreateNumericId(fbUser.uid);
  const profile: UserProfile = {
    id: numericId,
    uid: fbUser.uid,
    email: fbUser.email || "",
    full_name: fbUser.displayName || 'Google Пайдаланушысы',
    is_active: true
  };

  const idToken = await fbUser.getIdToken();
  setToken(idToken);
  saveUser(profile);

  return { access_token: idToken, token_type: 'bearer', user: profile };
}

/** Шығу */
export async function logout(): Promise<void> {
  if (auth) {
    await signOut(auth);
  }
  removeToken();
}

/** Профиль алу */
export async function getProfile(): Promise<UserProfile> {
  ensureFirebaseReady();
  const currentUser = auth.currentUser;
  if (!currentUser) {
    removeToken();
    throw new Error('Сессия аяқталды');
  }

  const numericId = getOrCreateNumericId(currentUser.uid);
  const savedUser = getSavedUser();
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
    consent: savedUser?.consent
  };
  saveUser(profile);
  return profile;
}

/** Парольді ұмыту — Сілтеме жіберу */
export async function forgotPassword(email: string): Promise<string> {
  ensureFirebaseReady();
  const cleanEmail = email.toLowerCase().trim();
  await sendPasswordResetEmail(auth, cleanEmail);
  return 'Құпия сөзді өзгерту сілтемесі email-ге жіберілді. Поштаңызды тексеріңіз.';
}


// ==================== Cloud Firestore Test History ====================

export async function getHistory(): Promise<HistoryItem[]> {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  ensureFirebaseReady();
  if (db) {
    try {
      const q = query(collection(db, "history"), where("user_uid", "==", user.uid));
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
  }
  return [];
}

export async function deleteHistoryItem(id: number): Promise<void> {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  ensureFirebaseReady();
  if (db) {
    const q = query(
      collection(db, "history"), 
      where("user_uid", "==", user.uid),
      where("id", "==", id)
    );
    const snap = await getDocs(q);
    const promises: Promise<void>[] = [];
    snap.forEach(docSnap => {
      promises.push(deleteDoc(doc(db, "history", docSnap.id)));
    });
    await Promise.all(promises);
  }
}

export async function saveTestResult(
  result: TestResult,
  questionIds?: string[],
  answers?: Record<string, string[]>
): Promise<HistoryItem> {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  ensureFirebaseReady();
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

  if (db) {
    await addDoc(collection(db, "history"), {
      ...item,
      user_uid: user.uid,
      user_id: user.id
    });
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

  ensureFirebaseReady();
  if (db) {
    await addDoc(collection(db, "reports"), {
      question_id: questionId,
      question_text: questionText,
      user_uid: user.uid,
      user_email: user.email,
      user_name: user.full_name,
      comment: comment.trim(),
      created_at: new Date().toISOString()
    });
  } else {
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
  return updatedProfile;
}

export async function deleteUserAccountAndHistory(): Promise<void> {
  const user = getSavedUser();
  if (!user) throw new Error('Сессия аяқталды');

  ensureFirebaseReady();
  
  // 1. Delete history from Firestore
  if (db) {
    const q = query(collection(db, "history"), where("user_uid", "==", user.uid));
    const snap = await getDocs(q);
    const promises: Promise<void>[] = [];
    snap.forEach(docSnap => {
      promises.push(deleteDoc(doc(db, "history", docSnap.id)));
    });
    await Promise.all(promises);
  }

  // 2. Delete reports if any
  if (db) {
    const q = query(collection(db, "reports"), where("user_uid", "==", user.uid));
    const snap = await getDocs(q);
    const promises: Promise<void>[] = [];
    snap.forEach(docSnap => {
      promises.push(deleteDoc(doc(db, "reports", docSnap.id)));
    });
    await Promise.all(promises);
  }

  // 3. Delete auth account in Firebase
  const currentUser = auth.currentUser;
  if (currentUser) {
    try {
      await currentUser.delete();
    } catch (e) {
      console.warn("Could not delete auth user directly (might need reauth):", e);
    }
  }

  // 4. Log out and clear localStorage
  removeToken();
}


