import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown, ChevronUp, LogOut } from 'lucide-react';
import { UserConsent } from '../services/authService';

interface ConsentGateScreenProps {
  onAccept: (consent: UserConsent) => void;
  onLogout: () => void;
}

const ConsentGateScreen: React.FC<ConsentGateScreenProps> = ({ onAccept, onLogout }) => {
  // Checkbox states
  const [chkNotOfficial, setChkNotOfficial] = useState(false);
  const [chkPolicyAgreement, setChkPolicyAgreement] = useState(false);
  const [chkDataConsent, setChkDataConsent] = useState(false);
  const [chkFirebase, setChkFirebase] = useState(false);

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Accordion states
  const [openDoc, setOpenDoc] = useState<'agreement' | 'privacy' | 'consent' | null>(null);

  const allChecked = chkNotOfficial && chkPolicyAgreement && chkDataConsent && chkFirebase;

  const handleAccept = () => {
    if (!allChecked) return;
    setIsLoading(true);

    const consentData: UserConsent = {
      accepted: true,
      privacyPolicyVersion: '1.0',
      userAgreementVersion: '1.0',
      dataConsentVersion: '1.0',
      acceptedAt: new Date().toISOString()
    };

    onAccept(consentData);
  };

  const toggleDoc = (doc: 'agreement' | 'privacy' | 'consent') => {
    setOpenDoc(openDoc === doc ? null : doc);
  };

  return (
    <div className="min-h-screen bg-[#07090d] text-[#f8fafc] flex items-center justify-center px-4 py-12 relative overflow-hidden selection:bg-blue-500/30">
      {/* Background Glows */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] top-[-100px] right-[-100px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px] bottom-[-50px] left-[-50px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-400">
            <Shield className="w-8 h-8 animate-pulse" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
            Қауіпсіздік және Келісімдер
          </h1>
          <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto leading-relaxed">
            MagisCore платформасын пайдалану үшін төмендегі құжаттармен танысып, келісім беру қажет:
          </p>
        </div>

        {/* Card */}
        <div className="glass-dark rounded-3xl p-6 md:p-8 border border-white/5 shadow-2xl space-y-6">
          
          {/* Accordion Documents */}
          <div className="space-y-3">
            
            {/* 1. Пайдаланушы келісімі */}
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]">
              <button
                type="button"
                onClick={() => toggleDoc('agreement')}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-bold text-slate-200">1. Пайдаланушы келісімі</span>
                {openDoc === 'agreement' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              <AnimatePresence>
                {openDoc === 'agreement' && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="p-5 text-xs text-slate-400 leading-relaxed max-h-48 overflow-y-auto space-y-3 bg-black/35 font-medium">
                      <p className="font-bold text-slate-300">ПАЙДАЛАНУШЫ КЕЛІСІМІ</p>
                      <p>MagisCore — магистратура КТ емтиханына дайындалуға арналған тәуелсіз оқу симуляторы.</p>
                      <p>MagisCore Ұлттық тестілеу орталығының ресми сайты емес және ресми емтихан тапсыру, тіркеу немесе ресми нәтиже беру қызметін көрсетпейді.</p>
                      <p className="text-amber-400 font-bold">Пайдаланушы платформаға ЖСН (ИИН), жеке куәлік деректері, телефон нөмірі немесе басқа да артық дербес деректерді енгізбеуге міндеттенеді.</p>
                      <p>Платформа тек оқу және дайындық мақсатында қолданылады. Платформадағы нәтижелер ресми емтихан нәтижесі болып саналмайды.</p>
                      <p>Пайдаланушы платформаны пайдалану арқылы Құпиялылық саясатымен танысқанын және дербес деректерін өңдеуге келісім бергенін растайды.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Құпиялылық саясаты */}
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]">
              <button
                type="button"
                onClick={() => toggleDoc('privacy')}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-bold text-slate-200">2. Құпиялылық саясаты</span>
                {openDoc === 'privacy' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              <AnimatePresence>
                {openDoc === 'privacy' && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="p-5 text-xs text-slate-400 leading-relaxed max-h-48 overflow-y-auto space-y-3 bg-black/35 font-medium">
                      <p className="font-bold text-slate-300">ҚҰПИЯЛЫЛЫҚ САЯСАТЫ</p>
                      <p>MagisCore платформасы пайдаланушылардың дербес деректерін құрметтейді және оларды тек қызмет көрсету мақсатында өңдейді.</p>
                      <p className="font-bold text-slate-300">1. Жиналатын деректер:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>аты-жөні;</li>
                        <li>email мекенжайы;</li>
                        <li>тест нәтижелері мен тарихы;</li>
                        <li>таңдалған пәндер мен тест тілі;</li>
                        <li>техникалық деректер (логиндер мен сессиялар).</li>
                      </ul>
                      <p className="font-bold text-slate-300 text-emerald-400">2. Жиналмайтын деректер (Біз мүлдем жинамаймыз):</p>
                      <ul className="list-disc pl-5 space-y-1 text-emerald-400/90">
                        <li>ЖСН (ИИН);</li>
                        <li>телефон нөмірі;</li>
                        <li>жеке куәлік немесе құжат деректері;</li>
                        <li>банк картасының толық деректері;</li>
                        <li>тұрғылықты мекенжай.</li>
                      </ul>
                      <p className="font-bold text-slate-300">3. Деректерді өңдеу мақсаты:</p>
                      <p>Аккаунт ашу, тест нәтижелерін сақтау, оқу прогресін көрсету және техникалық қолдау көрсету.</p>
                      <p className="font-bold text-slate-300">4. Деректерді сақтау:</p>
                      <p>Платформа деректерді сақтау және авторизация үшін Google Firebase қызметін қолдануы мүмкін. Осыған байланысты деректер бұлттық серверлерде өңделуі мүмкін.</p>
                      <p className="font-bold text-slate-300">5. Деректерді жою:</p>
                      <p>Қолданушы өз деректерін кез келген уақытта аккаунт ішіндегі батырма немесе қолдау қызметі арқылы жүйеден біржола жоя алады.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Дербес деректерге келісім */}
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]">
              <button
                type="button"
                onClick={() => toggleDoc('consent')}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-bold text-slate-200">3. Дербес деректерді жинауға және өңдеуге келісім</span>
                {openDoc === 'consent' ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              <AnimatePresence>
                {openDoc === 'consent' && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="p-5 text-xs text-slate-400 leading-relaxed max-h-48 overflow-y-auto space-y-3 bg-black/35 font-medium">
                      <p className="font-bold text-slate-300">ДЕРБЕС ДЕРЕКТЕРДІ ЖИНАУҒА ЖӘНЕ ӨҢДЕУГЕ КЕЛІСІМ</p>
                      <p>Мен MagisCore платформасына аты-жөнімді, email мекенжайымды, тест нәтижелерімді, таңдалған пәндерімді және оқу прогресім туралы деректерді жинауға, сақтауға және өңдеуге келісім беремін.</p>
                      <p>Бұл деректер аккаунт ашу, нәтижелер тарихын сақтау, оқу прогресін көрсету және платформаның жұмысын қамтамасыз ету мақсатында қолданылады.</p>
                      <p>Мен MagisCore платформасының ЖСН (ИИН), телефон нөмірі және жеке куәлік деректерін жинамайтынын түсінемін.</p>
                      <p>Мен деректерімді өңдеуге берген келісімімді кез келген уақытта кері қайтарып, деректерімді жоюды сұрай алатынымды түсінемін.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Checkboxes */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            
            {/* Chk 1 */}
            <label className="flex items-start gap-3.5 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={chkNotOfficial}
                onChange={(e) => setChkNotOfficial(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/10 bg-slate-950 text-blue-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-xs md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors font-medium leading-relaxed">
                Мен MagisCore платформасының ҰТО ресми сайты емес екенін түсіндім.
              </span>
            </label>

            {/* Chk 2 */}
            <label className="flex items-start gap-3.5 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={chkPolicyAgreement}
                onChange={(e) => setChkPolicyAgreement(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/10 bg-slate-950 text-blue-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-xs md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors font-medium leading-relaxed">
                Мен Құпиялылық саясатымен және Пайдаланушы келісімімен таныстым және олармен толық келісемін.
              </span>
            </label>

            {/* Chk 3 */}
            <label className="flex items-start gap-3.5 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={chkDataConsent}
                onChange={(e) => setChkDataConsent(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/10 bg-slate-950 text-blue-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-xs md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors font-medium leading-relaxed">
                Мен аты-жөнімді, email мекенжайымды және тест нәтижелерімді MagisCore сервисін пайдалану мақсатында жинауға, сақтауға және өңдеуге келісім беремін.
              </span>
            </label>

            {/* Chk 4 */}
            <label className="flex items-start gap-3.5 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={chkFirebase}
                onChange={(e) => setChkFirebase(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-white/10 bg-slate-950 text-blue-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-xs md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors font-medium leading-relaxed">
                Мен Google Firebase сервисі қолданылуы мүмкін екенін және деректерім бұлттық инфрақұрылымда (ҚР-дан тыс серверлерде) өңделуі мүмкін екенін түсіндім.
              </span>
            </label>

          </div>

          {/* Action button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleAccept}
              disabled={!allChecked || isLoading}
              className="w-full py-4 gradient-brand text-white font-black rounded-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all active:scale-[0.98] disabled:opacity-30 disabled:pointer-events-none text-sm tracking-wide"
            >
              {isLoading ? 'Жүктелуде...' : 'Келісемін және жалғастырамын'}
            </button>
          </div>

        </div>

        {/* Exit link */}
        <div className="text-center mt-6">
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" /> Жүйеден шығу (Бас тарту)
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default ConsentGateScreen;
