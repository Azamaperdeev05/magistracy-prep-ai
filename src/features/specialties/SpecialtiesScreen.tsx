import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from '../../components/ui/Motion';
import {
  Search, ArrowLeft, Check, Info, Sparkles, GraduationCap, ChevronRight,
  Zap, ShieldCheck, Brain, TrendingUp, Scale, FlaskConical,
  Dna, Calculator, Globe, Bot, BookOpen, Briefcase, Cpu,
  Music, Palette, Wrench, Atom, Code, History, BookMarked,
  FileText, Languages, Users, HeartHandshake, Lightbulb, Compass,
  Moon, Scroll, Sun, MessageSquare, Feather, Landmark, Flag, MapPin,
  Newspaper, Megaphone, Library, Building2, Receipt, DollarSign,
  BarChart3, Sliders, Target, Gavel, Microscope, Leaf, Map, Droplets,
  CloudRain, TreePine, Mountain, Orbit, Activity, Binary, Cog, Radio,
  Flame, Thermometer, Power, Layers, Hammer, Truck, Plane, Navigation,
  Rocket, Fuel, Anchor, Utensils, Scissors, Droplet, Factory,
  Pill, PenTool, HardHat, Boxes, Network, Waves, CheckSquare, Sprout,
  Fish, Stethoscope, HeartPulse, Syringe, Coffee, Car, Package, X, ExternalLink
} from 'lucide-react';
import { getSpecialtyIconByCode } from '../../utils/specialtyIcons';
import { SPECIALTIES, Specialty } from '../../../data/specialties';
import { getSavedUser, updateUserSpecialty, UserProfile } from '../../services/authService';
import ConfirmModal from '../test-engine/modals/ConfirmModal';
import { useTheme } from '../../app/ThemeContext';
import SEO from '../../components/ui/SEO';

interface SpecialtiesScreenProps {
  onBack: () => void;
  onSpecialtyChange?: (updatedUser: UserProfile) => void;
}

const SpecialtiesScreen: React.FC<SpecialtiesScreenProps> = ({ onBack, onSpecialtyChange }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(getSavedUser());
  const [searchQuery, setSearchQuery] = useState('');
  const [showToast, setShowToast] = useState<string | null>(null);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    message: string;
    onConfirm: () => void;
    isAlert?: boolean;
    title?: string;
  } | null>(null);

  const showAlert = (message: string, title: string = 'Қате орын алды') => {
    setModalConfig({
      message,
      onConfirm: () => {},
      isAlert: true,
      title
    });
    setModalOpen(true);
  };

  const handleSelectSpecialty = (spec: Specialty) => {
    try {
      const updatedUser = updateUserSpecialty(spec.code, spec.name);
      setCurrentUser(updatedUser);
      if (onSpecialtyChange) {
        onSpecialtyChange(updatedUser);
      }
      setShowToast(`«${spec.name}» мамандығы сәтті таңдалды!`);
      setTimeout(() => setShowToast(null), 3000);
    } catch (err: any) {
      showAlert(err.message || 'Қате орын алды');
    }
  };

  const filteredSpecialties = SPECIALTIES.filter(spec => {
    const query = searchQuery.toLowerCase();
    return (
      spec.code.toLowerCase().includes(query) ||
      spec.name.toLowerCase().includes(query) ||
      spec.profile1.toLowerCase().includes(query) ||
      spec.profile2.toLowerCase().includes(query)
    );
  });

  return (
    <div className={`relative selection:bg-blue-500/30 overflow-x-hidden transition-colors duration-300 ${
      isDarkMode ? 'text-[#f8fafc]' : 'text-slate-900'
    }`}>
      <SEO
        title="Мамандықтар"
        description="153 мамандық бойынша магистратураға дайындық. M001, M002, M094, M095 — өз мамандығыңызды таңдап, кешенді тестілеуге дайындалыңыз."
        canonical="https://magis-core.vercel.app/specialties"
      />

      <div className="max-w-5xl relative z-10 space-y-6">

        {/* Title + Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className={`text-2xl font-black flex items-center gap-2 uppercase tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <GraduationCap className="w-6 h-6 text-blue-500" />
              Мамандықтар тізімі
            </h1>
            <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              КТ (Магистратура) мамандықтары мен пәндерін таңдау
            </p>
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Мамандық атауы немесе коды бойынша іздеу..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all w-full font-medium rounded-xl border ${
                isDarkMode
                  ? 'bg-slate-900/60 border-white/5 text-white placeholder-slate-600'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm'
              }`}
            />
          </div>
        </div>

        {/* Selected Specialty Banner */}
        {currentUser?.specialty_code ? (
          <div className={`border rounded-3xl p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 backdrop-blur-md transition-all ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-950/20 to-indigo-950/20 border-blue-500/25 shadow-xl text-white' 
              : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-md text-slate-900'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                isDarkMode ? 'bg-blue-500/10 border border-blue-500/20 text-blue-400' : 'bg-blue-500 text-white shadow-md'
              }`}>
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-blue-500 uppercase">Таңдалған мамандығыңыз</span>
                <h2 className={`text-lg font-extrabold mt-0.5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  <span className="text-blue-500 font-black mr-2">{currentUser.specialty_code}</span> 
                  {currentUser.specialty_name}
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${
                    isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                  }`}>
                    1-профиль: {SPECIALTIES.find(s => s.code === currentUser.specialty_code)?.profile1 || 'Анықталмаған'}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${
                    isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                  }`}>
                    2-профиль: {SPECIALTIES.find(s => s.code === currentUser.specialty_code)?.profile2 || 'Анықталмаған'}
                  </span>
                </div>
              </div>
            </div>
            {!['M001', 'M002', 'M094', 'M095'].includes(currentUser.specialty_code || '') && (
              <div className="flex items-start gap-2.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 max-w-md">
                <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 animate-bounce" />
                <p className="text-xs text-amber-600 dark:text-amber-400 leading-relaxed font-semibold">
                  Бұл мамандықтың сұрақтары әзірлену үстінде. Әзірге сіз жалпы пәндерді (Ағылшын тілі + ОДАТ) тапсыра аласыз.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className={`border rounded-3xl p-6 mb-8 text-center backdrop-blur-md ${
            isDarkMode ? 'bg-slate-900/30 border-white/5' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h3 className={`text-base font-bold ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>Сіз әлі мамандық таңдамадыңыз</h3>
            <p className="text-xs text-slate-400 mt-1">Төмендегі тізімнен өз бағытыңызды тауып, «Таңдау» батырмасын басыңыз.</p>
          </div>
        )}

        {/* Specialties List Container (Тізім форматы) */}
        {filteredSpecialties.length === 0 ? (
          <div className={`border rounded-3xl p-16 text-center font-bold ${
            isDarkMode ? 'bg-[#0f1219] border-white/5 text-slate-400' : 'bg-white border-slate-200 text-slate-400 shadow-sm'
          }`}>
            Мамандық табылмады. Басқаша іздеп көріңіз.
          </div>
        ) : (
          <div className="space-y-3">
            {filteredSpecialties.map((spec, index) => {
              const isSelected = currentUser?.specialty_code === spec.code;
              const isReady = ['M094'].includes(spec.code);

              return (
                <motion.div 
                  key={spec.code}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: Math.min(index * 0.02, 0.3) }}
                  className={`rounded-2xl border p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-200 ${
                    isDarkMode 
                      ? (isSelected ? 'bg-blue-950/30 border-blue-500/50 shadow-md ring-1 ring-blue-500/30' : 'bg-[#0f1219] border-slate-800/80 hover:border-slate-700 hover:shadow-md')
                      : (isSelected ? 'bg-blue-50/80 border-blue-400 shadow-md ring-1 ring-blue-500/20' : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md')
                  }`}
                >
                  {/* Left Side: Icon, Code Badge, Title & Profiles */}
                  <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                    {/* Icon Box */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 text-base font-black ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : (isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600')
                    }`}>
                      {getSpecialtyIconByCode(spec.code, spec.name)}
                    </div>

                    {/* Details */}
                    <div className="space-y-1 min-w-0 flex-1 text-left">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[11px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider border ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600'
                            : (isDarkMode ? 'bg-slate-800 text-blue-400 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-200')
                        }`}>
                          {spec.code}
                        </span>

                        {isReady && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-wider">
                            ✓ Сұрақтар дайын
                          </span>
                        )}

                        {isSelected && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-wider">
                            <Check className="w-3 h-3" /> Таңдалған
                          </span>
                        )}
                      </div>

                      <h3 className={`text-base font-black leading-snug truncate ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                        {spec.name}
                      </h3>

                      <p className={`text-xs font-medium truncate ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        1-профиль: <strong className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{spec.profile1}</strong> • 2-профиль: <strong className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{spec.profile2}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Actions (Толығырақ & Таңдау) */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => navigate(`/specialties/${spec.code}`)}
                      className={`px-3.5 py-2 border text-xs font-extrabold rounded-xl transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer ${
                        isDarkMode
                          ? 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                          : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <Info className="w-3.5 h-3.5 text-blue-500" />
                      <span>Толығырақ</span>
                    </button>

                    {isSelected ? (
                      <div className="flex items-center gap-2">
                        <span className="px-3.5 py-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs rounded-xl flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Белсенді
                        </span>
                        {isReady && (
                          <button
                            onClick={() => navigate(`/test-setup?gop=${spec.code}`)}
                            className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-all active:scale-95 flex items-center gap-1 cursor-pointer"
                          >
                            Тест тапсыру <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleSelectSpecialty(spec)}
                          className={`px-4 py-2 border text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all active:scale-95 cursor-pointer ${
                            isDarkMode
                              ? 'bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border-blue-500/30'
                              : 'bg-blue-600 hover:bg-blue-700 border-blue-600 text-white shadow-xs'
                          }`}
                        >
                          Таңдау
                        </button>
                        {isReady && (
                          <button
                            onClick={() => {
                              handleSelectSpecialty(spec);
                              navigate(`/test-setup?gop=${spec.code}`);
                            }}
                            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition-all active:scale-95 flex items-center gap-1 cursor-pointer"
                          >
                            Тест <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <div className={`fixed bottom-6 right-6 z-50 border px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 ${
            isDarkMode ? 'bg-[#0f1219] border-blue-500/30 text-slate-200' : 'bg-white border-blue-200 text-slate-800 shadow-2xl'
          }`}>
            <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-sm">
              ✓
            </div>
            <p className="text-sm font-bold">{showToast}</p>
          </div>
        )}
      </AnimatePresence>

      {modalConfig && (
        <ConfirmModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={modalConfig.onConfirm}
          message={modalConfig.message}
          title={modalConfig.title}
          isAlert={modalConfig.isAlert}
        />
      )}

    </div>
  );
};

export default SpecialtiesScreen;

