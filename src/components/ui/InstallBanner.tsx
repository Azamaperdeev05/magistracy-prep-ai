import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { usePwaInstall } from '../../hooks/usePwaInstall';
 
const DISMISS_KEY = 'magiscore_pwa_install_dismissed';
 
const InstallBanner: React.FC = () => {
  const { canInstall, isInstalled, promptInstall, isIOS } = usePwaInstall();
  const [dismissed, setDismissed] = useState(false);
 
  useEffect(() => {
    const wasDismissed = localStorage.getItem(DISMISS_KEY);
    if (wasDismissed) setDismissed(true);
  }, []);
 
  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem(DISMISS_KEY, Date.now().toString());
  };
 
  const handleInstall = async () => {
    await promptInstall();
  };
 
  if (isInstalled || dismissed || (!canInstall && !isIOS)) return null;
 
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="max-w-lg mx-auto pointer-events-auto">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 shadow-2xl border border-blue-500/30">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm">MagisCore орнатыңыз</p>
              <p className="text-blue-100 text-xs mt-0.5 leading-relaxed">
                Үй экранына орнатып, жылдам қол жеткізіңіз және офлайн режимде пайдаланыңыз
              </p>
              <div className="flex items-center gap-2 mt-3">
                {isIOS ? (
                  <p className="text-blue-200 text-[11px] font-medium">
                    Safari → "Бөлісу" → "Үй экранына қосу"
                  </p>
                ) : (
                  <button
                    onClick={handleInstall}
                    className="flex items-center gap-1.5 bg-white text-blue-600 text-xs font-bold px-4 py-2 rounded-xl hover:bg-blue-50 active:scale-95 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Орнату
                  </button>
                )}
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default InstallBanner;
