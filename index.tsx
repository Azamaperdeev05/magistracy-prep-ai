import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';
import { initGlobalLogger } from './services/loggerService';

// Initialize global client error logging
initGlobalLogger();

// Register Service Worker for PWA with auto-update
const updateSW = registerSW({
  immediate: true,
  onRegistered(r) {
    if (r) {
      // Check for updates every 60 minutes
      setInterval(() => {
        r.update();
      }, 60 * 60 * 1000);
    }
  },
  onOfflineReady() {
    console.log('MagisCore офлайн режимде дайын');
  },
});

// Force SW update on page load if new version exists
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'activated') {
            // New SW activated — reload to use fresh assets
            if (sessionStorage.getItem('magiscore_sw_updated')) {
              sessionStorage.removeItem('magiscore_sw_updated');
              window.location.reload();
            }
          }
        });
      }
    });
  });

  // Listen for controlling SW change
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    // SW took control — reload to ensure fresh content
    if (!sessionStorage.getItem('magiscore_sw_reloading')) {
      sessionStorage.setItem('magiscore_sw_reloading', '1');
      window.location.reload();
    } else {
      sessionStorage.removeItem('magiscore_sw_reloading');
    }
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);