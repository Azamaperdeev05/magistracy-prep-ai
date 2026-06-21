import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, Check, ArrowRight, Phone } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose, userEmail }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('77478501822');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsapp = () => {
    const managerPhone = '77478501822'; // Support/Manager WhatsApp Number
    const message = encodeURIComponent(
      `Сәлеметсіз бе! Мен MagisCore-дан Premium жазылым сатып алдым.\n\nТөлем чегін осы хатқа тіркеймін.\nМенің жүйедегі электрондық поштам: ${userEmail}`
    );
    window.open(`https://wa.me/${managerPhone}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[300] p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="bg-[#0f1219] border border-slate-800/80 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative Top Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 animate-pulse" />

          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 md:p-8 space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-gradient-to-tr from-amber-500/20 to-yellow-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto text-amber-400 shadow-lg shadow-amber-500/5">
                <Crown className="w-8 h-8" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider pt-2">
                Premium-ді іске қосыңыз
              </h2>
              <p className="text-slate-400 text-sm font-semibold max-w-sm mx-auto leading-relaxed">
                Сынақтар мен дайындық материалдарына толық және шексіз рұқсат алыңыз!
              </p>
            </div>

            {/* Benefits list */}
            <div className="bg-slate-900/50 border border-slate-800/40 rounded-2xl p-4 md:p-5 space-y-3.5 text-left text-sm">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Бейіндік пәндерге толық рұқсат</h4>
                  <p className="text-slate-400 text-xs mt-0.5">IT бағытындағы «Алгоритмдер» және «Дерекқорлар» сынақтарын шексіз тапсыру.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Шексіз ИИ (AI) Көмекшісі</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Күрделі есептер мен сұрақтардың толық шешімін кез келген уақытта AI-дан сұрау.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Толық оқулықтар мен дәрістер базасы</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Пәндер силлабусы бойынша барлық теориялық бөлімдер мен тақырыптарды ашу.</p>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 text-center space-y-4">
              <div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-wider">Premium бағасы</span>
                <div className="text-4xl font-black text-amber-400 mt-1.5">
                  2 990 тг <span className="text-sm font-normal text-slate-400">/ айына</span>
                </div>
              </div>

              <div className="h-px bg-slate-800/50 w-2/3 mx-auto" />

              <div 
                className="space-y-1 cursor-pointer hover:bg-slate-800/30 p-2 rounded-xl transition-all select-all"
                onClick={handleCopyPhone}
                title="Көшіру үшін басыңыз"
              >
                <div className="text-xs font-bold text-slate-400">Каспи аударымы (Көшіру үшін басыңыз):</div>
                <div className="text-lg font-black text-white flex items-center justify-center gap-2">
                  <span>+7 747 850 1822</span>
                  {copied ? (
                    <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-md animate-pulse">Көшірілді!</span>
                  ) : (
                    <span className="text-[9px] text-slate-500 border border-slate-800 px-1.5 py-0.5 rounded bg-slate-950/40 font-normal">көшіру</span>
                  )}
                </div>
                <div className="text-xs text-slate-500 font-semibold">(Азамат П.)</div>
              </div>

              <div className="bg-slate-950/40 rounded-xl p-4 border border-slate-800/30 text-left max-w-sm mx-auto">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Нұсқаулық:</div>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                  Төлем жасаған соң, чекті төмендегі батырманы басып бізге жіберіңіз. 5 минут ішінде жазылым белсендіріледі.
                </p>
              </div>

              <div className="h-px bg-slate-800/50 w-2/3 mx-auto" />

              <div className="text-xs text-slate-500 font-semibold">
                Жүйедегі поштаңыз: <span className="font-bold text-slate-400 select-all">{userEmail}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleSendWhatsapp}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-extrabold rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-sm shadow-lg shadow-green-950/20"
              >
                <Phone className="w-4 h-4 shrink-0" />
                Чекті WhatsApp-қа жіберу
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-slate-900 border border-slate-800 hover:bg-slate-800/80 text-slate-400 hover:text-white font-bold rounded-2xl transition-colors text-xs"
              >
                Кейінірек сатып аламын
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default UpgradeModal;
