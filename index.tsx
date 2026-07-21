import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

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

// Defer non-critical work until after first paint
const onIdle = (cb: () => void) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(cb, { timeout: 5000 });
  } else {
    setTimeout(cb, 0);
  }
};

onIdle(async () => {
  // Initialize global client error logging
  const { initGlobalLogger } = await import('./services/loggerService');
  initGlobalLogger();

  // Register Service Worker for PWA with auto-update
  const { registerSW } = await import('virtual:pwa-register');
  const updateSW = registerSW({
    immediate: true,
    onRegistered(r) {
      if (r) {
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
              if (sessionStorage.getItem('magiscore_sw_updated')) {
                sessionStorage.removeItem('magiscore_sw_updated');
                window.location.reload();
              }
            }
          });
        }
      });
    });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!sessionStorage.getItem('magiscore_sw_reloading')) {
        sessionStorage.setItem('magiscore_sw_reloading', '1');
        window.location.reload();
      } else {
        sessionStorage.removeItem('magiscore_sw_reloading');
      }
    });
  }
});
