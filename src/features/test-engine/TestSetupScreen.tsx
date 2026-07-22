import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SPECIALTIES, Specialty } from '../../../data/specialties';
import { getSavedUser, getProfile, getHistory, updateUserProfileFields, UserProfile, HistoryItem } from '../../services/authService';
import { ArrowLeft, Info, ChevronDown, Loader2, Play, Sparkles } from 'lucide-react';
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
  const [countdownCount, setCountdownCount] = useState<number | null>(null);

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

  // Countdown timer effect
  useEffect(() => {
    if (countdownCount === null) return;

    if (countdownCount > 0) {
      const timer = setTimeout(() => {
        setCountdownCount(prev => (prev !== null && prev > 0 ? prev - 1 : 0));
      }, 900);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(async () => {
        const updatedFullName = `${firstName} ${lastName}`.trim() || currentUser?.full_name || 'Қолданушы';
        await onStart(updatedFullName);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [countdownCount, firstName, lastName, currentUser, onStart]);

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

      // Trigger 3-2-1 countdown animation
      setCountdownCount(3);
    } catch (err: any) {
      showAlert(err.message || 'Қате орын алды', 'Қате орын алды');
    }
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

        {/* Start Button */}
        <div className="max-w-3xl mx-auto">
          <button
            onClick={handleContinue}
            disabled={isLoading || countdownCount !== null}
            className="w-full py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-extrabold rounded-md transition-all active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-75 text-base shadow-lg hover:shadow-blue-500/10 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Сұрақтар жүктелуде... Түсінуіңізді сұраймыз</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-white" />
                <span>Тестті бастау</span>
              </>
            )}
          </button>
        </div>

        {/* Countdown Overlay Modal */}
        {countdownCount !== null && (
          <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex flex-col items-center justify-center p-4 text-white">
            <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-sm">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <Sparkles className="w-3.5 h-3.5" /> Дайындық аяқталды
                </span>
                <h3 className="text-xl font-extrabold text-white">КТ Симуляторы басталмақ</h3>
              </div>

              {/* Animated Countdown Number */}
              <div
                key={countdownCount}
                className="w-36 h-36 rounded-full bg-slate-900/90 border-2 border-blue-500/40 shadow-[0_0_50px_rgba(59,130,246,0.3)] flex items-center justify-center animate-pop-in"
              >
                {countdownCount > 0 ? (
                  <span className="text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-200 to-white drop-shadow-lg">
                    {countdownCount}
                  </span>
                ) : (
                  <span className="text-2xl font-black tracking-wider text-emerald-400 animate-bounce">
                    СӘТТІЛІК!
                  </span>
                )}
              </div>

              <div className="space-y-1 text-slate-300 text-xs font-bold">
                <p className="text-white font-extrabold text-sm">{selectedGop.code} — {selectedGop.name}</p>
                <p className="text-slate-400 font-medium">150 сұрақ · 235 минут</p>
              </div>
            </div>
          </div>
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
