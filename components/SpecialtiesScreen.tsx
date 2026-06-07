import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowLeft, Check, Info, Sparkles, GraduationCap } from 'lucide-react';
import { SPECIALTIES, Specialty } from '../data/specialties';
import { getSavedUser, updateUserSpecialty, UserProfile } from '../services/authService';
import ConfirmModal from './modals/ConfirmModal';

interface SpecialtiesScreenProps {
  onBack: () => void;
  onSpecialtyChange?: (updatedUser: UserProfile) => void;
}

const SpecialtiesScreen: React.FC<SpecialtiesScreenProps> = ({ onBack, onSpecialtyChange }) => {
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
    if (!['M094'].includes(spec.code)) return false;

    const query = searchQuery.toLowerCase();
    return (
      spec.code.toLowerCase().includes(query) ||
      spec.name.toLowerCase().includes(query) ||
      spec.profile1.toLowerCase().includes(query) ||
      spec.profile2.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[#07090d] text-[#f8fafc] p-4 md:p-8 relative selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background blobs */}
      <div className="absolute overflow-hidden inset-0 pointer-events-none">
        <div className="blob w-[500px] h-[500px] bg-blue-600/5 top-[-100px] -right-[100px]" />
        <div className="blob w-[400px] h-[400px] bg-purple-600/5 bottom-[20%] -left-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-white/10 rounded-full transition-colors border border-white/5 active:scale-95"
            >
              <ArrowLeft className="w-5 h-5 text-slate-300" />
            </button>
            <div>
              <h1 className="text-2xl font-black flex items-center gap-2 uppercase tracking-tight italic">
                <GraduationCap className="w-6 h-6 text-blue-500" />
                Мамандықтар тізімі
              </h1>
              <p className="text-slate-400 text-xs mt-0.5">КТ (Магистратура) мамандықтары мен пәндерін таңдау</p>
            </div>
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text"
              placeholder="Мамандық атауы немесе коды бойынша іздеу..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-900/60 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all w-full text-white placeholder-slate-600 font-medium"
            />
          </div>
        </div>

        {/* Selected Specialty Banner */}
        {currentUser?.specialty_code ? (
          <div className="bg-gradient-to-r from-blue-950/20 to-indigo-950/20 border border-blue-500/25 rounded-3xl p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase">Таңдалған мамандығыңыз</span>
                <h2 className="text-lg font-extrabold text-white mt-0.5">
                  <span className="text-blue-500 font-black mr-2">{currentUser.specialty_code}</span> 
                  {currentUser.specialty_name}
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2.5 py-0.5 bg-slate-800/80 border border-slate-700 text-slate-300 rounded-md text-[10px] font-bold">
                    1-профиль: {SPECIALTIES.find(s => s.code === currentUser.specialty_code)?.profile1 || 'Анықталмаған'}
                  </span>
                  <span className="px-2.5 py-0.5 bg-slate-800/80 border border-slate-700 text-slate-300 rounded-md text-[10px] font-bold">
                    2-профиль: {SPECIALTIES.find(s => s.code === currentUser.specialty_code)?.profile2 || 'Анықталмаған'}
                  </span>
                </div>
              </div>
            </div>
            {!['M094'].includes(currentUser.specialty_code || '') && (
              <div className="flex items-start gap-2.5 bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4 max-w-md">
                <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 animate-bounce" />
                <p className="text-xs text-amber-400/90 leading-relaxed font-semibold">
                  Бұл мамандықтың сұрақтары әзірлену үстінде. Әзірге сіз жалпы пәндерді (Ағылшын тілі + ОДАТ) немесе дайындық үшін IT бағытының (M094) сұрақтарын тапсыра аласыз.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-slate-900/30 border border-white/5 rounded-3xl p-6 mb-8 text-center backdrop-blur-md">
            <h3 className="text-base font-bold text-slate-400">Сіз әлі мамандық таңдамадыңыз</h3>
            <p className="text-xs text-slate-500 mt-1">Төмендегі тізімнен өз бағытыңызды тауып, «Таңдау» батырмасын басыңыз.</p>
          </div>
        )}

        {/* Specialties Table Container */}
        <div className="bg-slate-900/20 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-slate-950/40 text-[10px] uppercase tracking-wider text-slate-500 font-black">
                  <th className="py-4 px-6 w-24">Код</th>
                  <th className="py-4 px-6">Мамандық</th>
                  <th className="py-4 px-6">1-профиль</th>
                  <th className="py-4 px-6">2-профиль</th>
                  <th className="py-4 px-6 text-center w-32">Әрекет</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-medium">
                {filteredSpecialties.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-16 text-center text-slate-500 font-bold">
                      Мамандық табылмады. Басқаша іздеп көріңіз.
                    </td>
                  </tr>
                ) : (
                  filteredSpecialties.map((spec) => {
                    const isSelected = currentUser?.specialty_code === spec.code;
                    const isReady = ['M094'].includes(spec.code);

                    return (
                      <tr 
                        key={spec.code} 
                        className={`hover:bg-white/[0.02] transition-colors ${isSelected ? 'bg-blue-500/[0.03]' : ''}`}
                      >
                        <td className="py-4.5 px-6">
                          <span className={`px-2 py-1 rounded-md text-[10px] font-black tracking-wider ${
                            isSelected 
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                              : isReady 
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                : 'bg-slate-800 text-slate-400 border border-slate-700/60'
                          }`}>
                            {spec.code}
                          </span>
                        </td>
                        <td className="py-4.5 px-6 font-bold text-slate-200">
                          <div className="flex flex-col gap-0.5">
                            <span>{spec.name}</span>
                            {isReady && (
                              <span className="text-[9px] text-emerald-400 uppercase font-black tracking-widest mt-1 flex items-center gap-1">
                                ✓ Сұрақтары толық дайын
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4.5 px-6 text-slate-400 text-xs">{spec.profile1}</td>
                        <td className="py-4.5 px-6 text-slate-400 text-xs">{spec.profile2}</td>
                        <td className="py-4.5 px-6 text-center">
                          {isSelected ? (
                            <span className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-xl">
                              <Check className="w-3.5 h-3.5" /> Таңдалды
                            </span>
                          ) : (
                            <button
                              onClick={() => handleSelectSpecialty(spec)}
                              className="px-4 py-1.5 bg-slate-800/80 hover:bg-blue-600 hover:text-white border border-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-all active:scale-95"
                            >
                              Таңдау
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#0f1219] border border-blue-500/30 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">
              ✓
            </div>
            <p className="text-sm font-bold text-slate-200">{showToast}</p>
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
