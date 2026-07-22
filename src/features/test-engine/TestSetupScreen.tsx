import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from '../../components/ui/Motion';
import { SPECIALTIES, Specialty } from '../../../data/specialties';
import { getSavedUser, getProfile, getHistory, updateUserProfileFields, UserProfile, HistoryItem } from '../../services/authService';
import { ArrowLeft, Info, ChevronDown, Loader2, Sparkles, ArrowRight, Zap, CheckCircle2, ShieldCheck, Timer } from 'lucide-react';
import ConfirmModal from './modals/ConfirmModal';
import UpgradeModal from './modals/UpgradeModal';

interface TestSetupScreenProps {
  onStart: (name: string) => Promise<void>;
  isLoading: boolean;
}

const formatNameInput = (val: string): string => {
  if (!val) return '';
  return val.charAt(0).toUpperCase() + val.slice(1);
};

const TestSetupScreen: React.FC<TestSetupScreenProps> = ({ onStart, isLoading }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(getSavedUser());
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Load the latest profile on mount to get current premium status
  useEffect(() => {
    const fetchLatestProfile = async () => {
      try {
        const profile = await getProfile();
        if (profile) {
          setCurrentUser(profile);
        }
      } catch (err) {
        console.error("Error fetching latest profile on mount:", err);
      }
    };
    fetchLatestProfile();

    const fetchHistory = async () => {
      try {
        const list = await getHistory();
        setHistory(list);
      } catch (err) {
        console.error("Failed to load history on setup mount:", err);
      }
    };
    fetchHistory();
  }, []);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    message: string;
    onConfirm: () => void;
    isAlert?: boolean;
    title?: string;
    confirmText?: string;
  } | null>(null);

  const showAlert = (message: string, title: string = 'Назар аударыңыз!') => {
    setModalConfig({
      message,
      onConfirm: () => {},
      isAlert: true,
      title
    });
    setModalOpen(true);
  };

  const showConfirm = (
    message: string, 
    onConfirm: () => void, 
    title: string = 'Назар аударыңыз!', 
    confirmText?: string
  ) => {
    setModalConfig({
      message,
      onConfirm,
      isAlert: false,
      title,
      confirmText
    });
    setModalOpen(true);
  };

  // Personal details state variables (fully editable inputs)
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const [patronymic, setPatronymic] = useState('');
  const [email, setEmail] = useState('');

  // Testing parameters state variables
  const [testLang, setTestLang] = useState(currentUser?.test_lang || 'қазақша');
  const [foreignLang, setForeignLang] = useState(currentUser?.foreign_lang || 'ағылшын');
  const [tgoLang, setTgoLang] = useState(currentUser?.tgo_lang || 'қазақша');

  const allowedGopCodes = ['M001', 'M002', 'M094', 'M095'];
  const [selectedGopCode, setSelectedGopCode] = useState(() => {
    const urlGop = searchParams.get('gop')?.toUpperCase();
    if (urlGop && allowedGopCodes.includes(urlGop)) return urlGop;
    const code = currentUser?.specialty_code;
    return code && allowedGopCodes.includes(code) ? code : 'M094';
  });

  const isLikelySurname = (str: string): boolean => {
    if (!str) return false;
    return /(ев|ева|ов|ова|ин|ина|ша|лы|қызы|ғызы)$/i.test(str.trim());
  };

  // Split name on load or whenever currentUser changes
  useEffect(() => {
    if (currentUser) {
      let fn = currentUser.first_name || '';
      let ln = currentUser.last_name || '';

      if (!fn && !ln) {
        const nameVal = currentUser.full_name || '';
        if (nameVal.trim()) {
          const parts = nameVal.trim().split(/\s+/);
          if (parts.length >= 2) {
            if (isLikelySurname(parts[0]) && !isLikelySurname(parts[1])) {
              ln = parts[0];
              fn = parts[1];
            } else {
              fn = parts[0];
              ln = parts[1];
            }
          } else {
            fn = parts[0] || '';
          }
        }
      } else {
        // If stored backwards previously (fn = Perdeev, ln = Azamat), fix order
        if (isLikelySurname(fn) && !isLikelySurname(ln) && ln.length > 0) {
          const temp = fn;
          fn = ln;
          ln = temp;
        }
      }

      setFirstName(fn);
      setLastName(ln);
      setPatronymic(currentUser.patronymic || '');
      
      setEmail(currentUser.email || '');
      if (currentUser.test_lang) setTestLang(currentUser.test_lang);
      if (currentUser.foreign_lang) setForeignLang(currentUser.foreign_lang);
      if (currentUser.tgo_lang) setTgoLang(currentUser.tgo_lang);
      
      const urlGop = searchParams.get('gop')?.toUpperCase();
      if (urlGop && allowedGopCodes.includes(urlGop)) {
        setSelectedGopCode(urlGop);
      } else if (currentUser.specialty_code) {
        const code = currentUser.specialty_code;
        setSelectedGopCode(allowedGopCodes.includes(code) ? code : 'M094');
      } else {
        setSelectedGopCode('M094');
      }
    }
  }, [currentUser, searchParams]);

  const selectedGop = SPECIALTIES.find(s => s.code === selectedGopCode) || SPECIALTIES.find(s => s.code === 'M094')!;

  // Profile question counts per specialty
  const getProfileCounts = (code: string) => {
    switch (code) {
      case 'M094': return { p1q: 30, p1m: 30, p2q: 20, p2m: 40 };
      case 'M095': return { p1q: 30, p1m: 30, p2q: 20, p2m: 40 };
      case 'M001': return { p1q: 30, p1m: 30, p2q: 20, p2m: 20 };
      case 'M002': return { p1q: 30, p1m: 30, p2q: 20, p2m: 40 };
      default: return { p1q: 30, p1m: 30, p2q: 20, p2m: 40 };
    }
  };
  const profileCounts = getProfileCounts(selectedGopCode);

  const handleGopChange = (code: string) => {
    setSelectedGopCode(code);
  };

  const [isLaunching, setIsLaunching] = useState(false);
  const [launchStep, setLaunchStep] = useState(1);

  const handleContinue = async () => {
    if (!firstName.trim()) {
      setFirstNameError(true);
      if (firstNameRef.current) {
        firstNameRef.current.focus();
      }
      return;
    }
    setFirstNameError(false);

    if (!currentUser?.is_premium && history.length >= 1) {
      setShowUpgradeModal(true);
      return;
    }

    const updatedFullName = `${firstName} ${lastName}`.trim() || currentUser?.full_name || 'Қолданушы';
    
    // Start animated fullscreen launch overlay sequence
    setIsLaunching(true);
    setLaunchStep(1);

    setTimeout(() => setLaunchStep(2), 500);
    setTimeout(() => setLaunchStep(3), 1100);

    const saveAndStart = async () => {
      try {
        updateUserProfileFields({
          last_name: lastName,
          first_name: firstName,
          patronymic: patronymic,
          full_name: updatedFullName,
          email,
          test_lang: testLang,
          foreign_lang: foreignLang,
          tgo_lang: tgoLang,
          specialty_code: selectedGop.code,
          specialty_name: selectedGop.name
        });

        // Small delay for step 3 animation before entering test
        await new Promise((res) => setTimeout(res, 700));
        await onStart(updatedFullName);
      } catch (err: any) {
        setIsLaunching(false);
        showAlert(err.message || 'Қате орын алды', 'Қате орын алды');
      }
    };

    await saveAndStart();
  };

  return (
    <div className="text-slate-800 selection:bg-blue-500/20">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/home')}
          className="mb-6 flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Басты бетке қайту
        </button>

        {/* Section: Жеке мәліметтер */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-[2px] bg-[#3b82f6] flex-1"></div>
          <h2 className="text-xl font-extrabold tracking-widest text-[#1e293b] uppercase px-4 text-center">
            ЖЕКЕ МӘЛІМЕТТЕР
          </h2>
          <div className="h-[2px] bg-[#3b82f6] flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-8 gap-y-5 max-w-3xl mx-auto mb-10 text-sm font-bold text-slate-700">
          <div className="flex items-center">
            Аты <span className="text-red-500 font-extrabold ml-1">*</span>
          </div>
          <div>
            <input 
              ref={firstNameRef}
              type="text" 
              value={firstName} 
              onChange={(e) => {
                setFirstName(e.target.value);
                if (e.target.value.trim()) setFirstNameError(false);
              }} 
              onBlur={() => setFirstName(formatNameInput(firstName))}
              placeholder="Атыңызды енгізіңіз"
              className={`w-full max-w-md px-4 py-2.5 outline-none rounded-md font-bold text-base md:text-sm transition-all ${
                firstNameError 
                  ? 'bg-red-50 border-2 border-red-500 text-red-900 ring-4 ring-red-500/20 animate-shake' 
                  : 'bg-[#e2e8f0]/60 border border-slate-300/40 text-slate-800 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]'
              }`} 
            />
            {firstNameError && (
              <p className="text-xs text-red-500 font-extrabold mt-1.5 flex items-center gap-1">
                ⚠️ Атыңызды енгізу міндетті!
              </p>
            )}
          </div>

          <div className="flex items-center">Тегі</div>
          <div>
            <input 
              type="text" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              onBlur={() => setLastName(formatNameInput(lastName))}
              placeholder="Тегіңізді енгізіңіз"
              className="w-full max-w-md px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold text-base md:text-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]" 
            />
          </div>
        </div>

        {/* Section: Тестілеу параметрлері */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-[2px] bg-[#3b82f6] flex-1"></div>
          <h2 className="text-xl font-extrabold tracking-widest text-[#1e293b] uppercase px-4 text-center">
            ТЕСТІЛЕУ ПАРАМЕТРЛЕРІ
          </h2>
          <div className="h-[2px] bg-[#3b82f6] flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-x-8 gap-y-5 max-w-3xl mx-auto mb-10 text-sm font-bold text-slate-700">
          <div className="flex items-center">Шет тілі</div>
          <div className="relative w-full max-w-md">
            <select 
              value={foreignLang} 
              onChange={(e) => setForeignLang(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold appearance-none cursor-pointer pr-10 text-base md:text-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]"
            >
              <option value="ағылшын">Ағылшын тілі</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          <div className="flex items-center">ОДАТ (ТГО) тапсыру тілі</div>
          <div className="relative w-full max-w-md">
            <select 
              value={tgoLang} 
              onChange={(e) => setTgoLang(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold appearance-none cursor-pointer pr-10 text-base md:text-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]"
            >
              <option value="қазақша">Қазақша</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          <div className="flex items-center">Мамандықтар тобы (БББТ / ГОП)</div>
          <div className="relative w-full max-w-md">
            <select 
              value={selectedGopCode} 
              onChange={(e) => handleGopChange(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#e2e8f0]/60 border border-slate-300/40 outline-none rounded-md text-slate-800 font-bold appearance-none cursor-pointer pr-10 text-base md:text-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-[#e2e8f0]"
            >
              {SPECIALTIES.filter(spec => allowedGopCodes.includes(spec.code)).map((spec) => (
                <option key={spec.code} value={spec.code}>
                  {spec.code} - {spec.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Specialty warning banner - only for unimplemented specialties */}
        {!allowedGopCodes.includes(selectedGopCode) && (
          <div className="max-w-3xl mx-auto mb-8 bg-amber-50 border border-amber-300/70 rounded-xl p-4 flex gap-3 text-amber-800 text-sm font-semibold leading-relaxed shadow-sm">
            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold">Назар аударыңыз!</span> «{selectedGop.name}» мамандығының сұрақтары әзірлену үстінде. Әзірге сіз жалпы пәндерді (Ағылшын тілі + ОДАТ) тапсыра аласыз.
            </div>
          </div>
        )}

        {/* Section: Сұрақтар саны мен балдар саны (Replica NTC layout) */}
        <div className="max-w-3xl mx-auto mb-10 overflow-x-auto border border-slate-700 rounded-sm bg-white scrollbar-thin">
          <div className="min-w-[600px]">
            <table className="w-full border-collapse text-sm text-center">
              <thead>
                <tr className="border-b border-slate-700 bg-white">
                  <th colSpan={4} className="p-3 font-extrabold text-[#1e293b] tracking-wider uppercase text-center border-b border-slate-700">
                    ТЕСТ ҚҰРЫЛЫМЫ ЖӘНЕ СҰРАҚТАР САНЫ
                  </th>
                </tr>
                <tr className="bg-white border-b border-slate-700">
                  <th className="p-2 border-r border-slate-700 font-extrabold text-slate-800 text-xs w-12">№</th>
                  <th className="p-2 border-r border-slate-700 font-extrabold text-slate-800 text-xs">ПӘН АТАУЫ</th>
                  <th className="p-2 border-r border-slate-700 font-extrabold text-slate-800 text-xs w-36">ТАПСЫРМАЛАР САНЫ</th>
                  <th className="p-2 font-extrabold text-slate-800 text-xs w-36">ЕҢ ЖОҒАРЫ БАЛЛ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700 text-slate-800 font-semibold bg-white">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 border-r border-slate-700">1</td>
                  <td className="p-3 border-r border-slate-700 text-center">Шет тілі (Ағылшын)</td>
                  <td className="p-3 border-r border-slate-700">50</td>
                  <td className="p-3">50</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 border-r border-slate-700">2</td>
                  <td className="p-3 border-r border-slate-700 text-center">Оқу дайындығын анықтайтын тест (ОДАТ)</td>
                  <td className="p-3 border-r border-slate-700">30</td>
                  <td className="p-3">30</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 border-r border-slate-700">3</td>
                  <td className="p-3 border-r border-slate-700 text-center">{selectedGop.profile1}</td>
                  <td className="p-3 border-r border-slate-700">{profileCounts.p1q}</td>
                  <td className="p-3">{profileCounts.p1m}</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 border-r border-slate-700">4</td>
                  <td className="p-3 border-r border-slate-700 text-center">{selectedGop.profile2}</td>
                  <td className="p-3 border-r border-slate-700">{profileCounts.p2q}</td>
                  <td className="p-3">{profileCounts.p2m}</td>
                </tr>
                <tr className="bg-slate-100 font-extrabold border-t border-slate-700">
                  <td className="p-3 border-r border-slate-700" colSpan={2}>Жалпы (Барлығы)</td>
                  <td className="p-3 border-r border-slate-700">{80 + profileCounts.p1q + profileCounts.p2q}</td>
                  <td className="p-3">{80 + profileCounts.p1m + profileCounts.p2m}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Start Button - Premium Animated Experience */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            {/* Ambient Glowing Neon Aura Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 rounded-2xl blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />

            <button
              onClick={handleContinue}
              disabled={isLoading || isLaunching}
              className="relative w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] text-white font-extrabold rounded-xl py-4.5 px-8 shadow-xl flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98] group overflow-hidden border border-blue-400/30"
            >
              {/* Shimmer Light Beam Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />

              {isLoading || isLaunching ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                  <span className="text-base tracking-wide uppercase">Тест иске қосылуда...</span>
                </>
              ) : (
                <>
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </div>
                  <span className="text-base sm:text-lg tracking-wider uppercase font-black">
                    КТ Тестілеуін Бастау
                  </span>
                  <ArrowRight className="w-5 h-5 text-blue-200 group-hover:translate-x-2 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Fullscreen Test Launch Animation Overlay */}
        {(isLaunching || isLoading) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 selection:bg-blue-500/20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-indigo-900/10 to-transparent pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-md w-full bg-[#0f172a]/95 border border-blue-500/30 rounded-3xl p-8 shadow-[0_0_60px_rgba(59,130,246,0.35)] text-center text-white overflow-hidden space-y-6"
            >
              {/* Glowing border top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full shadow-[0_0_15px_#3b82f6]" />

              {/* Animated Pulsing Ring & Icon */}
              <div className="relative w-24 h-24 mx-auto flex items-center justify-center my-2">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/20 animate-ping" />
                <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-indigo-500 border-b-transparent border-l-transparent animate-spin" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/40">
                  {launchStep === 3 ? (
                    <CheckCircle2 className="w-8 h-8 text-emerald-300 animate-bounce" />
                  ) : (
                    <Zap className="w-8 h-8 text-amber-300 animate-pulse" />
                  )}
                </div>
              </div>

              {/* Main Heading & Dynamic Status Step */}
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  Тест Симуляторы Жүктелуде
                </h3>
                <p className="text-sm font-semibold text-slate-300 transition-all duration-300">
                  {launchStep === 1 && '1/3 · Сұрақтар қорымен байланыс орнатылуда...'}
                  {launchStep === 2 && '2/3 · Таймер және жеке пәндер реттелуде...'}
                  {launchStep === 3 && '3/3 · Сәттілік! Тест бөлмесі ашылуда...'}
                </p>
              </div>

              {/* Live Progress Bar */}
              <div className="w-full bg-slate-800/80 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 rounded-full transition-all duration-500"
                  style={{
                    width: launchStep === 1 ? '45%' : launchStep === 2 ? '80%' : '100%'
                  }}
                />
              </div>

              {/* Key Test Stats Badges */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] font-extrabold text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center gap-1">
                  <Timer className="w-4 h-4 text-blue-400" />
                  <span>235 минут</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>150 сұрақ</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center gap-1">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="truncate max-w-full">{selectedGop.code}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic pt-1">
                🚀 Кешенді тестілеуде жоғары нәтиже көрсетуіңізге тілектеспіз!
              </p>
            </motion.div>
          </motion.div>
        )}

        {modalConfig && (
          <ConfirmModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onConfirm={modalConfig.onConfirm}
            message={modalConfig.message}
            title={modalConfig.title}
            isAlert={modalConfig.isAlert}
            confirmText={modalConfig.confirmText}
          />
        )}

        <UpgradeModal
          isOpen={showUpgradeModal}
          onClose={() => setShowUpgradeModal(false)}
          userEmail={currentUser?.email || ''}
        />
      </div>
    </div>
  );
};

export default TestSetupScreen;
