import { getSavedUser } from './authService';
import { getDb } from '../firebase';

const safeStringify = (arg: any): string => {
  if (arg === null || arg === undefined) return String(arg);
  if (arg instanceof Error) return `${arg.name}: ${arg.message}\n${arg.stack || ''}`;
  if (typeof arg === 'string') return arg;
  if (typeof arg !== 'object') return String(arg);
  try {
    return JSON.stringify(arg, (_key, value) => {
      if (value instanceof Error) return `${value.name}: ${value.message}`;
      return value;
    });
  } catch (e) {
    return String(arg);
  }
};

export function initGlobalLogger() {
  if (typeof window === 'undefined') return;

  // Track if we are currently logging an error to prevent infinite recursion
  let isLogging = false;

  // Print initialization badge in DevTools Console
  console.log(
    '%c[MagisCore Logger Active]%c Барлық сайт қателіктері сақталуда.',
    'color: #3b82f6; font-weight: bold; background: #e0f2fe; padding: 2px 6px; rounded: 4px;',
    'color: #64748b;'
  );

  // 1. Capture Uncaught JS Runtime Errors
  window.addEventListener('error', async (event) => {
    console.warn('[MAGISCORE ERROR CAPTURED]', event.message, event.error);
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

      const db = await getDb();
      const { collection, addDoc } = await import('firebase/firestore');
      await addDoc(collection(db, "client_errors"), errorData);
    } catch (e) {
      // Fail silently to prevent infinite loops
    } finally {
      isLogging = false;
    }
  });

  // 2. Capture Unhandled Promise Rejections
  window.addEventListener('unhandledrejection', async (event) => {
    console.warn('[MAGISCORE REJECTION CAPTURED]', event.reason);
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

      const db = await getDb();
      const { collection, addDoc } = await import('firebase/firestore');
      await addDoc(collection(db, "client_errors"), errorData);
    } catch (e) {
      // Fail silently to prevent infinite loops
    } finally {
      isLogging = false;
    }
  });

  // 3. Capture Console Errors
  const originalConsoleError = console.error;
  console.error = function (...args) {
    try {
      originalConsoleError.apply(console, args);
    } catch (e) {
      // fallback
    }

    if (isLogging) return;

    try {
      const message = args.map(safeStringify).join(' ');

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
        message: message.substring(0, 2000), // Cap length
        url: window.location.href,
        userAgent: navigator.userAgent,
        user_uid: user?.uid || null,
        user_email: user?.email || null,
        user_name: user?.full_name || null,
        timestamp: new Date().toISOString(),
      };

      getDb().then(async db => {
        const { collection, addDoc } = await import('firebase/firestore');
        addDoc(collection(db, "client_errors"), errorData);
      }).catch(() => {});
    } catch (e) {
      // Fail silently to prevent infinite loops
    } finally {
      isLogging = false;
    }
  };
}

