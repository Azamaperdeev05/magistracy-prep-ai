import { initializeApp, type FirebaseApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider,
  type Auth
} from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

// Lazy-initialized Firebase singletons
let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;
let _googleProvider: GoogleAuthProvider | null = null;

function getApp(): FirebaseApp {
  if (!_app) {
    _app = initializeApp(firebaseConfig);
  }
  return _app;
}

function getAuthInstance(): Auth {
  if (!_auth) {
    _auth = getAuth(getApp());
  }
  return _auth;
}

function getFirestoreInstance(): Firestore {
  if (!_db) {
    _db = getFirestore(getApp());
  }
  return _db;
}

function getGoogleProviderInstance(): GoogleAuthProvider {
  if (!_googleProvider) {
    _googleProvider = new GoogleAuthProvider();
    _googleProvider.setCustomParameters({
      prompt: 'select_account'
    });
  }
  return _googleProvider;
}

// Export lazy getters — Firebase is only initialized on first access
export const auth = new Proxy({} as Auth, {
  get(_, prop) {
    return (getAuthInstance() as any)[prop];
  }
});

export const db = new Proxy({} as Firestore, {
  get(_, prop) {
    return (getFirestoreInstance() as any)[prop];
  }
});

export const googleProvider = new Proxy({} as GoogleAuthProvider, {
  get(_, prop) {
    return (getGoogleProviderInstance() as any)[prop];
  }
});
