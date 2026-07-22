/* Hallmark · genre: modern-minimal · macrostructure: Workbench · theme: Cobalt · enrichment: none */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from '../../components/ui/Motion';
import {
  Zap, Building2, BarChart2, GraduationCap, ArrowRight,
  Play, Crown, MapPin, ExternalLink, Loader2, ChevronRight, Target,
  Trophy, Medal, TrendingUp
} from 'lucide-react';
import { useTheme } from '../../app/ThemeContext';
import { useCountUp } from '../../hooks/useCountUp';
import { getLeaderboard, LeaderboardEntry, getSavedUser } from '../../services/authService';
import { SUBJECTS } from '../../constants';
import { SubjectId } from '../../types';

interface University {
  code: string;
  title: string;
  url: string;
  description: string;
  general_info?: { city?: string; type?: string; students?: string | number; founded?: string | number };
}

interface PanelHomeProps {
  onStart: (gopCode?: string) => void;
  isLoading: boolean;
  userName?: string;
  specialtyCode?: string;
  specialtyName?: string;
  isPremium?: boolean;
  hasActiveTest?: boolean;
  onResume?: () => void;
}

const StatCard: React.FC<{ label: string; value: number; color: string; bg: string; textMuted: string }> = ({ label, value, color, bg, textMuted }) => {
  const count = useCountUp(value, 800);
  return (
    <div className={`p-4 rounded-xl border transition-all hover:scale-[1.02] hover:shadow-md ${bg}`}>
      <p className={`text-[10px] font-bold ${textMuted} mb-1`}>{label}</p>
      <p className={`text-2xl font-black ${color}`}>{count}</p>
    </div>
  );
};

const PanelHome: React.FC<PanelHomeProps> = ({
  onStart,
  isLoading,
  userName,
  specialtyCode,
  specialtyName,
  isPremium,
  hasActiveTest,
  onResume
}) => {
  const navigate = useNavigate();
  const [unis, setUnis] = useState<University[]>([]);
  const [uniLoading, setUniLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [lbLoading, setLbLoading] = useState(true);

  const { isDarkMode } = useTheme();
  const currentUid = getSavedUser()?.uid;

  useEffect(() => {
    import('../../../data/univision_universities.json')
      .then((mod: any) => {
        const data = mod.default || mod;
        setUnis(Array.isArray(data.universities) ? data.universities.slice(0, 6) : []);
      })
      .catch(console.error)
      .finally(() => setUniLoading(false));

    getLeaderboard(10)
      .then(setLeaderboard)
      .catch(() => setLeaderboard([]))
      .finally(() => setLbLoading(false));
  }, []);

  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200/80 shadow-sm';

  const handleStartExam = () => onStart(specialtyCode || 'M094');

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 space-y-8 min-w-0">
          {/* Greeting */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${textPrimary}`}>
            Қайырлы күн, <span className="text-[var(--brand-primary)]">{userName || 'Студент'}</span>
          </h1>
          {isPremium && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400/10 border border-amber-400/20 text-amber-500">
              <Crown className="w-3 h-3" /> PRO
            </span>
          )}
        </div>
        <p className={`text-sm mt-1 ${textMuted}`}>
          {specialtyCode ? `${specialtyCode} — ${specialtyName}` : 'M094 — Ақпараттық технологиялар'} бойынша дайындықты жалғастыр.
        </p>
      </motion.div>

      {/* Primary CTA */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }}>
        <div className={`rounded-2xl border p-6 sm:p-8 ${cardBg}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]' : 'bg-blue-50 text-[var(--brand-primary)]'}`}>
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h2 className={`text-lg font-black uppercase tracking-tight ${textPrimary}`}>КТ Толық Симуляторы</h2>
                  <p className={`text-[11px] ${textMuted}`}>Ресми формат · 150 сұрақ · 235 минут</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {hasActiveTest ? (
                <button onClick={onResume}
                  className="flex-1 sm:flex-none px-8 py-3 bg-[var(--brand-primary)] hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                  Жалғастыру <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleStartExam} disabled={isLoading}
                  className="flex-1 sm:flex-none px-8 py-3 bg-[var(--brand-primary)] hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50">
                  {isLoading ? 'Жүктелуде...' : <><Play className="w-4 h-4 fill-white" /> Бастау</>}
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Resources Grid */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }} className="space-y-4">
        <h2 className={`text-lg font-black uppercase tracking-tight ${textPrimary}`}>Ресурстар</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Мамандықтар', desc: '133 мамандық', icon: <Zap className="w-4 h-4" />, color: 'blue', action: () => onStart(specialtyCode || 'M094') },
            { label: 'ЖОО-лар', desc: '125 университет', icon: <Building2 className="w-4 h-4" />, color: 'rose', action: () => navigate('/universities') },
            { label: 'Нәтижелер', desc: 'Тест тарихы', icon: <BarChart2 className="w-4 h-4" />, color: 'indigo', action: () => navigate('/history') },
            { label: 'Дайындық', desc: 'Бағыттауыш', icon: <GraduationCap className="w-4 h-4" />, color: 'emerald', action: () => navigate('/prep') },
          ].map(({ label, desc, icon, color, action }) => (
            <button key={label} onClick={action}
              className={`text-left p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] flex flex-col gap-2.5 ${cardBg}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${isDarkMode ? `bg-${color}-500/10 text-${color}-400` : `bg-${color}-50 text-${color}-600`}`}>
                {icon}
              </div>
              <div>
                <p className={`text-[13px] font-black ${textPrimary}`}>{label}</p>
                <p className={`text-[10px] ${textMuted}`}>{desc}</p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Test Structure */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 }} className="space-y-4">
        <h2 className={`text-lg font-black uppercase tracking-tight ${textPrimary}`}>КТ Құрылымы</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Ағылшын', value: 50, color: isDarkMode ? 'text-blue-400' : 'text-blue-600', bg: isDarkMode ? 'bg-blue-500/5 border-blue-500/15' : 'bg-blue-50 border-blue-100' },
            { label: 'ТҒО', value: 30, color: isDarkMode ? 'text-violet-400' : 'text-violet-600', bg: isDarkMode ? 'bg-violet-500/5 border-violet-500/15' : 'bg-violet-50 border-violet-100' },
            { label: '1-Профиль', value: 35, color: isDarkMode ? 'text-emerald-400' : 'text-emerald-600', bg: isDarkMode ? 'bg-emerald-500/5 border-emerald-500/15' : 'bg-emerald-50 border-emerald-100' },
            { label: '2-Профиль', value: 35, color: isDarkMode ? 'text-amber-400' : 'text-amber-600', bg: isDarkMode ? 'bg-amber-500/5 border-amber-500/15' : 'bg-amber-50 border-amber-100' },
          ].map(({ label, value, color, bg }) => (
            <StatCard key={label} label={label} value={value} color={color} bg={bg} textMuted={textMuted} />
          ))}
        </div>
      </motion.div>

      {/* Universities Preview */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.2 }} className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className={`text-lg font-black uppercase tracking-tight ${textPrimary}`}>ЖОО-лар</h2>
          <button onClick={() => navigate('/universities')}
            className="text-[10px] font-black text-[var(--brand-primary)] hover:text-blue-400 uppercase tracking-widest flex items-center gap-1">
            Барлығы <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {uniLoading ? (
          <div className="flex items-center justify-center py-8 gap-2 text-slate-400 text-xs">
            <Loader2 className="w-4 h-4 animate-spin text-[var(--brand-primary)]" /> Жүктелуде...
          </div>
        ) : (
          <div className={`rounded-xl border overflow-hidden ${cardBg}`}>
            <div className="p-3 space-y-0.5">
              {unis.map((uni, i) => (
                <a key={i} href={uni.url} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
                    isDarkMode ? 'hover:bg-white/5 border-white/5' : 'hover:bg-slate-50 border-slate-100'
                  }`}
                  style={{ textDecoration: 'none' }}>
                  <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 text-[9px] font-black ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-bold leading-tight truncate ${textPrimary} group-hover:text-[var(--brand-primary)] transition-colors`}>
                      {uni.title}
                    </p>
                    {uni.general_info?.city && (
                      <p className={`text-[9px] ${textMuted} flex items-center gap-1 mt-0.5`}>
                        <MapPin className="w-2.5 h-2.5 shrink-0" />{uni.general_info.city}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[var(--brand-primary)] transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}
      </motion.div>
        </div>

        {/* Sidebar — Leaderboard */}
        <div className="w-full lg:w-80 shrink-0 space-y-4">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
            <div className={`rounded-2xl border overflow-hidden ${cardBg}`}>
              <div className={`px-5 py-4 flex items-center gap-2 border-b ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
                <Trophy className="w-4 h-4 text-amber-500" />
                <h3 className={`text-sm font-black uppercase tracking-tight ${textPrimary}`}>Үздіктер</h3>
              </div>

              <div className="p-3">
                {lbLoading ? (
                  <div className="flex items-center justify-center py-8 gap-2 text-slate-400 text-xs">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-500" /> Жүктелуде...
                  </div>
                ) : leaderboard.length === 0 ? (
                  <div className={`py-8 text-center text-xs font-semibold ${textMuted}`}>
                    Әлі ешкім тест тапсырмады
                  </div>
                ) : (
                  <div className="space-y-1">
                    {leaderboard.map((entry, idx) => {
                      const isSelf = !!currentUid && entry.userId === currentUid;
                      return (
                        <div key={entry.userId}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                            isSelf
                              ? (isDarkMode ? 'bg-blue-500/15 border border-blue-500/30' : 'bg-blue-50 border border-blue-200 shadow-sm')
                              : (isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-50')
                          }`}>
                          <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 text-[9px] font-black ${
                            idx === 0 ? 'bg-amber-500/15 text-amber-500' :
                            idx === 1 ? 'bg-slate-400/15 text-slate-400' :
                            idx === 2 ? 'bg-orange-500/15 text-orange-500' :
                            (isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500')
                          }`}>
                            {idx < 3 ? <Medal className="w-3 h-3" /> : idx + 1}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <p className={`text-[11px] font-bold truncate ${textPrimary}`}>
                                {entry.userName}
                              </p>
                              {isSelf && (
                                <span className="px-1.5 py-0.2 rounded text-[8px] font-black uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30 shrink-0">
                                  Сіз
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <span className={`text-[11px] font-extrabold ${
                              idx === 0 ? 'text-amber-500' :
                              idx === 1 ? 'text-slate-400' :
                              idx === 2 ? 'text-orange-500' :
                              'text-[var(--brand-primary)]'
                            }`}>
                              {entry.bestScore} балл
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PanelHome;
