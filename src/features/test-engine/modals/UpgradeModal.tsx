import React from 'react';
import { motion, AnimatePresence } from '../../../components/ui/Motion';
import { X, Crown, Check, ArrowRight, Phone } from 'lucide-react';
import { useTheme } from '../../../app/ThemeContext';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose, userEmail }) => {
  const [copied, setCopied] = React.useState(false);
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-500';
  const modalBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-2xl';
  const cardBg = isDarkMode ? 'bg-slate-900/50 border-slate-800/40' : 'bg-slate-50 border-slate-200';
  const priceBg = isDarkMode ? 'bg-slate-900/60 border-slate-800/80' : 'bg-blue-50 border-blue-200';

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('77478501822');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsapp = () => {
    const managerPhone = '77478501822';
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
          className={`${modalBg} border rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative my-8`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 animate-pulse" />

          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-1 rounded-lg transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-slate-800/50' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'}`}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 md:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-gradient-to-tr from-amber-500/20 to-yellow-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto text-amber-400 shadow-lg shadow-amber-500/5">
                <Crown className="w-8 h-8" />
              </div>
              <h2 className={`text-xl md:text-2xl font-black uppercase tracking-wider pt-2 ${textPrimary}`}>
                Premium-ді іске қосыңыз
              </h2>
              <p className={`text-sm font-semibold max-w-sm mx-auto leading-relaxed ${textMuted}`}>
                Сынақтар мен дайындық материалдарына толық және шексіз рұқсат алыңыз!
              </p>
            </div>

            <div className={`rounded-2xl p-4 md:p-5 space-y-3.5 text-left text-sm border ${cardBg}`}>
              {[
                { title: 'Бейіндік пәндерге толық рұқсат', desc: 'IT бағытындағы «Алгоритмдер» және «Дерекқорлар» сынақтарын шексіз тапсыру.' },
                { title: 'Шексіз ИИ (AI) Көмекшісі', desc: 'Күрделі есептер мен сұрақтардың толық шешімін кез келген уақытта AI-дан сұрау.' },
                { title: 'Толық оқулықтар мен дәрістер базасы', desc: 'Пәндер силлабусы бойынша барлық теориялық бөлімдер мен тақырыптарды ашу.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${textPrimary}`}>{item.title}</h4>
                    <p className={`text-xs mt-0.5 ${textMuted}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl p-6 text-center space-y-4 border ${priceBg}`}>
              <div>
                <span className={`text-xs font-black uppercase tracking-wider ${textMuted}`}>Premium бағасы</span>
                <div className="text-4xl font-black text-amber-400 mt-1.5">
                  2 990 тг <span className={`text-sm font-normal ${textMuted}`}>/ айына</span>
                </div>
              </div>

              <div className={`h-px w-2/3 mx-auto ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-200'}`} />

              <div
                className={`space-y-1 cursor-pointer p-2 rounded-xl transition-all select-all ${isDarkMode ? 'hover:bg-slate-800/30' : 'hover:bg-slate-100'}`}
                onClick={handleCopyPhone}
                title="Көшіру үшін басыңыз"
              >
                <div className={`text-xs font-bold ${textMuted}`}>Каспи аударымы (Көшіру үшін басыңыз):</div>
                <div className={`text-lg font-black flex items-center justify-center gap-2 ${textPrimary}`}>
                  <span>+7 747 850 1822</span>
                  {copied ? (
                    <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-md animate-pulse">Көшірілді!</span>
                  ) : (
                    <span className={`text-[9px] border px-1.5 py-0.5 rounded font-normal ${isDarkMode ? 'text-slate-400 border-slate-800 bg-slate-950/40' : 'text-slate-500 border-slate-200 bg-slate-100'}`}>көшіру</span>
                  )}
                </div>
                <div className={`text-xs font-semibold ${textMuted}`}>(Азамат П.)</div>
              </div>

              <div className={`rounded-xl p-4 border text-left max-w-sm mx-auto ${isDarkMode ? 'bg-slate-950/40 border-slate-800/30' : 'bg-slate-50 border-slate-200'}`}>
                <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${textMuted}`}>Нұсқаулық:</div>
                <p className={`text-xs font-semibold leading-relaxed ${textMuted}`}>
                  Төлем жасаған соң, чекті төмендегі батырманы басып бізге жіберіңіз. 5 минут ішінде жазылым белсендіріледі.
                </p>
              </div>

              <div className={`text-xs font-semibold ${textMuted}`}>
                Жүйедегі поштаңыз: <span className={`font-bold select-all ${textMuted}`}>{userEmail}</span>
              </div>
            </div>

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
                className={`w-full py-3 border font-bold rounded-2xl transition-colors text-xs ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800/80 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-500 hover:text-slate-700'}`}
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
