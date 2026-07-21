import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const YM_COUNTER_ID = 110918184;

declare global {
  interface Window {
    ym: (id: number, action: string, ...args: unknown[]) => void;
  }
}

export function useYandexMetrica() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on every route change
    if (typeof window.ym === 'function') {
      window.ym(YM_COUNTER_ID, 'hit', window.location.href);
    }
  }, [location]);
}
