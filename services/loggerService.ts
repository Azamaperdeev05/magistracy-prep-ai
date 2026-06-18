import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getSavedUser } from './authService';

export function initGlobalLogger() {
  if (typeof window === 'undefined') return;

  // Track if we are currently logging an error to prevent infinite recursion
  let isLogging = false;

  // 1. Capture Uncaught JS Runtime Errors
  window.addEventListener('error', async (event) => {
    if (isLogging) return;
    try {
      isLogging = true;
      const user = getSavedUser();
      const errorData = {
        type: 'uncaught_error',
        message: event.message || 'Unknown runtime error',
        filename: event.filename || '',
        lineno: event.lineno || 0,
        colno: event.colno || 0,
        stack: event.error?.stack || '',
        url: window.location.href,
        userAgent: navigator.userAgent,
        user_uid: user?.uid || null,
        user_email: user?.email || null,
        user_name: user?.full_name || null,
        timestamp: new Date().toISOString(),
      };

      if (db) {
        await addDoc(collection(db, "client_errors"), errorData);
      }
    } catch (e) {
      // Fail silently to prevent infinite loops
    } finally {
      isLogging = false;
    }
  });

  // 2. Capture Unhandled Promise Rejections
  window.addEventListener('unhandledrejection', async (event) => {
    if (isLogging) return;
    try {
      isLogging = true;
      const user = getSavedUser();
      const reason = event.reason;
      const errorData = {
        type: 'unhandled_rejection',
        message: reason?.message || String(reason || 'Unhandled Promise Rejection'),
        stack: reason?.stack || '',
        url: window.location.href,
        userAgent: navigator.userAgent,
        user_uid: user?.uid || null,
        user_email: user?.email || null,
        user_name: user?.full_name || null,
        timestamp: new Date().toISOString(),
      };

      if (db) {
        await addDoc(collection(db, "client_errors"), errorData);
      }
    } catch (e) {
      // Fail silently to prevent infinite loops
    } finally {
      isLogging = false;
    }
  });

  // 3. Capture Console Errors
  const originalConsoleError = console.error;
  console.error = function (...args) {
    // Always call original console.error so developer can see it in DevTools
    originalConsoleError.apply(console, args);

    if (isLogging) return;

    try {
      const message = args
        .map(arg => (typeof arg === 'object' && arg !== null ? JSON.stringify(arg) : String(arg)))
        .join(' ');

      // Block recursion: do not log errors related to Firestore writes or logger failures
      if (
        message.includes('client_errors') || 
        message.includes('Firestore') || 
        message.includes('firebase')
      ) {
        return;
      }

      isLogging = true;
      const user = getSavedUser();
      const errorData = {
        type: 'console_error',
        message: message.substring(0, 1500), // Cap length
        url: window.location.href,
        userAgent: navigator.userAgent,
        user_uid: user?.uid || null,
        user_email: user?.email || null,
        user_name: user?.full_name || null,
        timestamp: new Date().toISOString(),
      };

      if (db) {
        addDoc(collection(db, "client_errors"), errorData);
      }
    } catch (e) {
      // Fail silently to prevent infinite loops
    } finally {
      isLogging = false;
    }
  };
}
