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
  // Initialize Yandex Metrica — non-critical analytics, after first paint
  initYandexMetrica();

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

/**
 * Lazy-initialize Yandex Metrica after first paint.
 * Uses requestIdleCallback so it never blocks the critical path.
 * Only loads when the browser is idle AND user has interacted.
 */
function initYandexMetrica() {
  const YM_COUNTER_ID = 110918184;

  // Don't load in SSR/SSG environments
  if (typeof window === 'undefined') return;

  // Wait for first user interaction OR idle callback
  const loadMetrica = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://mc.yandex.ru/metrika/tag.js?id=${YM_COUNTER_ID}`;
    script.onload = () => {
      if (typeof window.ym === 'function') {
        window.ym(YM_COUNTER_ID, 'init', {
          ssr: true,
          webvisor: true,
          clickmap: true,
          ecommerce: 'dataLayer',
          referrer: document.referrer,
          url: location.href,
          accurateTrackBounce: true,
          trackLinks: true
        });
      }
    };
    document.head.appendChild(script);

    // Add noscript fallback for users without JavaScript
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.src = `https://mc.yandex.ru/watch/${YM_COUNTER_ID}`;
    img.style.position = 'absolute';
    img.style.left = '-9999px';
    img.alt = '';
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  };

  // Try loading during idle time first
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadMetrica, { timeout: 5000 });
  } else {
    // Fallback: load after first user interaction
    const events = ['click', 'touchstart', 'scroll', 'keydown'] as const;
    const onInteraction = () => {
      events.forEach(e => window.removeEventListener(e, onInteraction, { once: true } as any));
      loadMetrica();
    };
    events.forEach(e => window.addEventListener(e, onInteraction, { once: true }));
    // Also try after 5s timeout as last resort
    setTimeout(loadMetrica, 5000);
  }
}

