import type { FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";
import type { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;
let _googleProvider: any = null;

export function isFirebaseConfigured(): boolean {
  return !!firebaseConfig.apiKey && !!firebaseConfig.projectId;
}

export async function getApp(): Promise<FirebaseApp> {
  if (!_app) {
    const { initializeApp } = await import('firebase/app');
    _app = initializeApp(firebaseConfig);
  }
  return _app;
}

export async function getAuthInstance(): Promise<Auth> {
  if (!_auth) {
    const { getAuth } = await import('firebase/auth');
    const app = await getApp();
    _auth = getAuth(app);
  }
  return _auth;
}

export async function getDb(): Promise<Firestore> {
  if (!_db) {
    const { getFirestore } = await import('firebase/firestore');
    const app = await getApp();
    _db = getFirestore(app);
  }
  return _db;
}

export async function getGoogleProvider() {
  if (!_googleProvider) {
    const { GoogleAuthProvider } = await import('firebase/auth');
    _googleProvider = new GoogleAuthProvider();
    _googleProvider.setCustomParameters({ prompt: 'select_account' });
  }
  return _googleProvider;
}
