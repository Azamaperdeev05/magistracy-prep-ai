/* Hallmark · genre: modern-minimal · macrostructure: Workbench · theme: Cobalt · enrichment: none · nav: N5 · footer: Ft2 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from '../../components/ui/Motion';
import {
  BookOpen, Brain, Clock, Database, Globe, ArrowRight,
  Award, Zap, Target, GraduationCap, TrendingUp, Shield,
  Menu, X, Sparkles, ChevronRight, Play, ExternalLink,
  MessageSquare, Star, Users, CheckCircle, LogOut, History, Info,
  Sun, Moon, Crown, Settings, BarChart2, Layers, Search,
  MapPin, Building2, Loader2, FileText
} from 'lucide-react';
import { SUBJECTS } from '../../constants';
import { SubjectId } from '../../types';
import SEO from '../../components/ui/SEO';

// ─── Universities Section ─────────────────────────────────────────────────────

interface University {
  code: string;
  title: string;
  url: string;
  description: string;
  general_info?: { city?: string; type?: string; students?: string | number; founded?: string | number };
  students?: string | number;
  teachers?: string | number;
}

const UniversitiesSection: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    import('../../../data/univision_universities.json')
      .then((mod: any) => {
        const data = mod.default || mod;
        setUniversities(Array.isArray(data.universities) ? data.universities : []);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return universities;
    const q = search.toLowerCase();
    return universities.filter(u =>
      u.title?.toLowerCase().includes(q) ||
      u.general_info?.city?.toLowerCase().includes(q)
    );
  }, [universities, search]);

  const shown = filtered.slice(0, visibleCount);

  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="space-y-5 mt-2"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${textPrimary}`}>
            Қазақстан ЖОО-лары
          </h2>
          <p className={`text-xs ${textMuted}`}>
            Магистратура бағдарламалары бар {universities.length}+ университет
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={e => { setSearch(e.target.value); setVisibleCount(9); }}
            placeholder="ЖОО іздеу..."
            className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] transition ${isDarkMode
                ? 'bg-[#0f1219] border-slate-800 text-white placeholder-slate-500'
                : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
              }`}
          />
        </div>
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16 gap-2 text-slate-400 text-xs font-bold">
          <Loader2 className="w-5 h-5 animate-spin text-[var(--brand-primary)]" /> Жүктелуде...
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-12 text-center text-slate-400 text-xs font-semibold">
          ЖОО табылмады
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shown.map((uni, idx) => {
              const city = uni.general_info?.city || '';

              return (
                <a
                  key={uni.url || idx}
                  href={uni.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative rounded-xl border p-5 flex flex-col gap-3 cursor-pointer no-underline
                    transition-all duration-200 hover:-translate-y-0.5 ${isDarkMode
                      ? 'bg-[#0f1219] border-slate-800/80 hover:border-slate-600'
                      : 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                    }`}
                  style={{ textDecoration: 'none' }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                      }`}>
                      <Building2 className="w-4 h-4" />
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[var(--brand-primary)] transition-colors shrink-0 mt-1" />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className={`text-sm font-black leading-tight line-clamp-2 group-hover:text-[var(--brand-primary)] transition-colors ${textPrimary}`}>
                      {uni.title}
                    </h3>
                  </div>

                  {/* Description */}
                  {uni.description && (
                    <p className={`text-[11px] leading-relaxed line-clamp-2 ${textMuted}`}>
                      {uni.description}
                    </p>
                  )}

                  {/* Footer stats */}
                  <div className="mt-auto flex items-center gap-3 text-[10px] font-bold">
                    {city && (
                      <span className={`flex items-center gap-1 ${textMuted}`}>
                        <MapPin className="w-3 h-3" /> {city}
                      </span>
                    )}
                    {uni.general_info?.students && (
                      <span className={`flex items-center gap-1 ${textMuted}`}>
                        <Users className="w-3 h-3" /> {uni.general_info.students}
                      </span>
                    )}
                    {uni.general_info?.founded && (
                      <span className={`flex items-center gap-1 ${textMuted}`}>
                        <Star className="w-3 h-3" /> {uni.general_info.founded}
                      </span>
                    )}
                  </div>
                </a>
              );
            })}
          </div>

          {/* Load More */}
          {visibleCount < filtered.length && (
            <div className="flex justify-center pt-2">
              <button
                onClick={() => setVisibleCount(v => v + 9)}
                className={`px-8 py-3 rounded-xl border text-xs font-black uppercase tracking-wider transition-all active:scale-95 flex items-center gap-2 ${isDarkMode
                    ? 'border-slate-800 text-slate-300 hover:bg-slate-800'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
              >
                Тағы {Math.min(9, filtered.length - visibleCount)} ЖОО көру
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

// ─── University Preview List (for Q2 quadrant) ───────────────────────────────

const UniversityPreviewList: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [unis, setUnis] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import('../../../data/univision_universities.json')
      .then((mod: any) => {
        const data = mod.default || mod;
        setUnis(Array.isArray(data.universities) ? data.universities.slice(0, 8) : []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-800';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-500';
  const rowBase = isDarkMode
    ? 'hover:bg-white/5 border-white/5'
    : 'hover:bg-slate-50 border-slate-100';

  if (loading) return (
    <div className="flex items-center justify-center py-8 gap-2 text-slate-400 text-xs">
      <Loader2 className="w-4 h-4 animate-spin text-[var(--brand-primary)]" /> Жүктелуде...
    </div>
  );

  return (
    <div className="flex flex-col gap-1">
      {unis.map((uni, i) => (
        <a
          key={i}
          href={uni.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all group ${rowBase}`}
          style={{ textDecoration: 'none' }}
        >
          <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 text-[10px] font-black ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
            {i + 1}
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-[11px] font-black leading-tight truncate ${textPrimary} group-hover:text-[var(--brand-primary)] transition-colors`}>
              {uni.title}
            </p>
            {uni.general_info?.city && (
              <p className={`text-[10px] ${textMuted} flex items-center gap-1 mt-0.5`}>
                <MapPin className="w-2.5 h-2.5 shrink-0" />{uni.general_info.city}
              </p>
            )}
          </div>
          <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[var(--brand-primary)] transition-colors shrink-0" />
        </a>
      ))}
      <a
        href="https://univision.kz"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-center text-[10px] font-black text-[var(--brand-primary)] hover:text-blue-400 uppercase tracking-widest flex items-center justify-center gap-1"
        style={{ textDecoration: 'none' }}
      >
        Барлық 125 ЖОО <ChevronRight className="w-3 h-3" />
      </a>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────

interface WelcomeScreenProps {
  onStart: (gopCode?: string) => void;
  isLoading: boolean;
  onViewProgram: (subjectId?: string) => void;
  onViewHistory: () => void;
  onViewPrep: () => void;
  onViewSpecialties: () => void;
  userName?: string;
  userEmail?: string;
  isPremium?: boolean;
  onUpgrade?: () => void;
  specialtyCode?: string;
  specialtyName?: string;
  onLogout?: () => void;
  hasActiveTest?: boolean;
  onResume?: () => void;
  onViewAdmin?: () => void;
  onViewUniversities?: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStart,
  isLoading,
  onViewProgram,
  onViewHistory,
  onViewPrep,
  onViewSpecialties,
  userName,
  userEmail,
  isPremium,
  onUpgrade,
  specialtyCode,
  specialtyName,
  onLogout,
  hasActiveTest,
  onResume,
  onViewAdmin,
  onViewUniversities
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    if (userEmail) {
      navigator.clipboard.writeText(userEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  // Theme State: defaults to dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.body.classList.remove('light-theme');
      document.body.style.backgroundColor = '#07090d';
      document.body.style.color = '#f8fafc';
    } else {
      document.body.classList.add('light-theme');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartExam = () => {
    onStart(specialtyCode || 'M094');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  };

  // Theme styling variables
  const textTitle = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const navBtnText = isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200/80 shadow-sm';

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden w-full max-w-[100vw] relative ${isDarkMode ? 'bg-[#07090d] text-[#f8fafc]' : 'bg-slate-50/50 text-slate-900'
      }`}>
      <SEO
        title="Басты бет"
        description="Магистратураға түсуге дайындалыңыз! 7000+ тест сұрақтары, 4 мамандық бойынша кешенді дайындық. Тегін онлайн платформа."
        canonical="https://magis-core.vercel.app/home"
      />

      {/* Navigation — N5 Floating Pill */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`mx-auto max-w-3xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${scrolled
              ? (isDarkMode
                ? 'bg-[#0f1219]/90 border border-slate-800/80 shadow-2xl backdrop-blur-xl'
                : 'bg-white/90 border border-slate-200 shadow-lg backdrop-blur-xl')
              : (isDarkMode
                ? 'bg-[#0f1219]/60 border border-slate-800/50 backdrop-blur-md'
                : 'bg-white/60 border border-slate-200/50 backdrop-blur-md')
            }`}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--brand-primary)]">
                <img src="/logo no bg, white.svg" alt="MagisCore Logo" className="w-5 h-5 object-contain" />
              </div>
              <span className={`text-sm font-extrabold tracking-tight uppercase ${textTitle}`}>
                Magis<span className="text-[var(--brand-primary)]">Core</span>
              </span>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              <button onClick={onViewPrep} className="px-3 py-1.5 text-[11px] font-bold text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10 rounded-lg transition-colors uppercase tracking-wider">
                Дайындық
              </button>
              <button onClick={onViewProgram} className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-colors uppercase tracking-wider ${navBtnText} hover:bg-slate-100 dark:hover:bg-white/5`}>
                Бағдарлама
              </button>
              <button onClick={onViewHistory} className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-colors uppercase tracking-wider ${navBtnText} hover:bg-slate-100 dark:hover:bg-white/5`}>
                Тарих
              </button>
              <button onClick={onViewSpecialties} className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-colors uppercase tracking-wider ${navBtnText} hover:bg-slate-100 dark:hover:bg-white/5`}>
                Мамандықтар
              </button>

              {userEmail === 'azamaperdeev05@gmail.com' && (
                <button onClick={onViewAdmin} className="px-3 py-1.5 text-[11px] font-bold text-amber-500 hover:bg-amber-500/10 rounded-lg transition-colors uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 inline mr-1" /> Әкімші
                </button>
              )}
            </div>

            {/* Right side: theme + profile + mobile menu */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'text-amber-400 hover:bg-white/5' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                title={isDarkMode ? "Жарық тақырыпқа ауысу" : "Қараңғы тақырыпқа ауысу"}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Desktop Profile */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setIsProfileOpen(true)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  <Users className="w-3.5 h-3.5 text-[var(--brand-primary)]" />
                  <span className="max-w-[100px] truncate">{userName || 'Профиль'}</span>
                  {isPremium && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                </button>
                <button
                  onClick={onLogout}
                  className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  title="Жүйеден шығу"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className={`p-2 rounded-lg md:hidden transition-colors ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-100'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className={`md:hidden overflow-hidden rounded-2xl mt-2 ${isDarkMode ? 'bg-[#0f1219] border border-slate-800/80' : 'bg-white border border-slate-200 shadow-lg'
                  }`}
              >
                <div className="flex flex-col p-4 gap-1">
                  <button onClick={() => { onViewPrep(); setIsMenuOpen(false); }}
                    className="text-left px-3 py-2.5 text-[11px] font-bold text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/10 rounded-lg transition-colors uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Дайындық
                  </button>
                  <button onClick={() => { onViewProgram(); setIsMenuOpen(false); }}
                    className={`text-left px-3 py-2.5 text-[11px] font-bold rounded-lg transition-colors uppercase tracking-wider flex items-center gap-2 ${navBtnText} hover:bg-slate-100 dark:hover:bg-white/5`}>
                    <BookOpen className="w-4 h-4" /> Бағдарлама
                  </button>
                  <button onClick={() => { onViewHistory(); setIsMenuOpen(false); }}
                    className={`text-left px-3 py-2.5 text-[11px] font-bold rounded-lg transition-colors uppercase tracking-wider flex items-center gap-2 ${navBtnText} hover:bg-slate-100 dark:hover:bg-white/5`}>
                    <History className="w-4 h-4" /> Тарих
                  </button>
                  <button onClick={() => { onViewSpecialties(); setIsMenuOpen(false); }}
                    className={`text-left px-3 py-2.5 text-[11px] font-bold rounded-lg transition-colors uppercase tracking-wider flex items-center gap-2 ${navBtnText} hover:bg-slate-100 dark:hover:bg-white/5`}>
                    <Award className="w-4 h-4" /> Мамандықтар
                  </button>

                  {userEmail === 'azamaperdeev05@gmail.com' && (
                    <button onClick={() => { onViewAdmin?.(); setIsMenuOpen(false); }}
                      className="text-left px-3 py-2.5 text-[11px] font-bold text-amber-500 hover:bg-amber-500/10 rounded-lg transition-colors uppercase tracking-wider flex items-center gap-2">
                      <Shield className="w-4 h-4" /> Әкімшілік
                    </button>
                  )}

                  <div className={`pt-2 mt-2 border-t flex flex-col gap-1 ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
                    <button onClick={() => { setIsProfileOpen(true); setIsMenuOpen(false); }}
                      className={`text-left px-3 py-2.5 text-[11px] font-bold rounded-lg transition-colors uppercase tracking-wider flex items-center gap-2 ${navBtnText}`}>
                      <Users className="w-4 h-4 text-[var(--brand-primary)]" /> Профиль
                    </button>
                    <button onClick={onLogout}
                      className="flex items-center gap-2 px-3 py-2.5 text-red-500 text-[11px] font-bold uppercase tracking-wider text-left hover:bg-red-500/10 rounded-lg transition-colors">
                      <LogOut className="w-4 h-4" /> Шығу
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28 md:pt-36 pb-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-10">

        {/* 1. Greeting + Primary Action — Workbench Hero */}
        <motion.div {...fadeInUp} className="space-y-6">
          {/* Greeting */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${textTitle}`}>
                Қайырлы күн, <span className="text-[var(--brand-primary)]">{userName || 'Студент'}</span>
              </h1>
              {isPremium && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400/10 border border-amber-400/20 text-amber-400">
                  <Crown className="w-3 h-3" /> PRO
                </span>
              )}
            </div>
            <p className={`text-sm max-w-xl ${textMuted}`}>
              КТ емтиханына дайындығыңды жалғастыр. {specialtyCode ? `${specialtyCode} — ${specialtyName}` : 'M094 — Ақпараттық технологиялар'} бойынша.
            </p>
          </div>

          {/* Primary CTA Card — Clean, focused */}
          <div className={`rounded-2xl border p-6 sm:p-8 ${isDarkMode
              ? 'bg-[#0f1219] border-slate-800/80'
              : 'bg-white border-slate-200 shadow-sm'
            }`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]' : 'bg-blue-50 text-[var(--brand-primary)]'
                    }`}>
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className={`text-lg font-black uppercase tracking-tight ${textTitle}`}>
                      Кешенді Тестілеу
                    </h2>
                    <p className={`text-[11px] ${textMuted}`}>Ресми формат · 150 сұрақ · 235 минут</p>
                  </div>
                </div>


              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {hasActiveTest ? (
                  <button
                    onClick={onResume}
                    className="flex-1 sm:flex-none px-8 py-3.5 bg-[var(--brand-primary)] hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Жалғастыру <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleStartExam}
                    disabled={isLoading}
                    className="flex-1 sm:flex-none px-8 py-3.5 bg-[var(--brand-primary)] hover:bg-blue-600 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? 'Жүктелуде...' : (
                      <>
                        <Play className="w-4 h-4 fill-white" /> Бастау
                      </>
                    )}
                  </button>
                )}
                <button
                  onClick={() => onViewProgram()}
                  className={`px-5 py-3.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-1.5 ${isDarkMode
                      ? 'border-slate-800 hover:bg-slate-800/50 text-slate-300'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                >
                  Спецификация
                </button>
              </div>
            </div>

            {/* Specialty Pill */}
            <div className={`mt-5 pt-5 border-t flex flex-wrap items-center justify-between gap-3 ${isDarkMode ? 'border-white/5' : 'border-slate-100'
              }`}>
              <div className="flex items-center gap-2.5">
                <Award className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} />
                <span className={`text-xs font-bold ${textMuted}`}>
                  Мамандық: <span className={textTitle}>{specialtyCode || 'M094'} — {specialtyName || 'Ақпараттық технологиялар'}</span>
                </span>
              </div>
              <button onClick={onViewSpecialties}
                className={`text-[10px] font-black uppercase tracking-widest text-[var(--brand-primary)] hover:text-blue-400 transition-colors`}>
                Өзгерту
              </button>
            </div>
          </div>
        </motion.div>

        {/* 2. Quick Actions — 4 equal cards */}
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-5">
          <div>
            <h2 className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${textTitle}`}>
              Ресурстар
            </h2>
            <p className={`text-xs ${textMuted}`}>
              Дайындыққа қажетті барлық ақпарат
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Мамандықтар */}
            <button onClick={() => onStart(specialtyCode || 'M094')}
              className={`text-left p-5 rounded-2xl border transition-all hover:-translate-y-0.5 active:scale-[0.98] flex flex-col gap-3 ${isDarkMode ? 'bg-[#0f1219] border-slate-800/80 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className={`text-sm font-black ${textTitle}`}>Мамандықтар</p>
                <p className={`text-[10px] mt-0.5 ${textMuted}`}>133 мамандық тобы · Тест тапсыру</p>
              </div>
            </button>

            {/* ЖОО-лар */}
            <button onClick={() => onViewUniversities?.()}
              className={`text-left p-5 rounded-2xl border transition-all hover:-translate-y-0.5 active:scale-[0.98] flex flex-col gap-3 ${isDarkMode ? 'bg-[#0f1219] border-slate-800/80 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-50 text-rose-600'
                }`}>
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <p className={`text-sm font-black ${textTitle}`}>ЖОО-лар</p>
                <p className={`text-[10px] mt-0.5 ${textMuted}`}>125 университет · Магистратура</p>
              </div>
            </button>

            {/* Тест тарихы */}
            <button onClick={onViewHistory}
              className={`text-left p-5 rounded-2xl border transition-all hover:-translate-y-0.5 active:scale-[0.98] flex flex-col gap-3 ${isDarkMode ? 'bg-[#0f1219] border-slate-800/80 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
                }`}>
                <BarChart2 className="w-4 h-4" />
              </div>
              <div>
                <p className={`text-sm font-black ${textTitle}`}>Нәтижелер</p>
                <p className={`text-[10px] mt-0.5 ${textMuted}`}>Тест тарихы · Аналитика</p>
              </div>
            </button>

            {/* Дайындық */}
            <button onClick={onViewPrep}
              className={`text-left p-5 rounded-2xl border transition-all hover:-translate-y-0.5 active:scale-[0.98] flex flex-col gap-3 ${isDarkMode ? 'bg-[#0f1219] border-slate-800/80 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
                }`}>
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <p className={`text-sm font-black ${textTitle}`}>Дайындық</p>
                <p className={`text-[10px] mt-0.5 ${textMuted}`}>Бағыттауыш · Кеңестер</p>
              </div>
            </button>
          </div>
        </motion.div>

        {/* 3. Test Structure Info — Clean data display */}
        <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="space-y-5">
          <div>
            <h2 className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${textTitle}`}>
              КТ Құрылымы
            </h2>
            <p className={`text-xs ${textMuted}`}>
              Тест форматы және баллдық шектер
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Ағылшын тілі', value: '50', unit: 'сұрақ', color: isDarkMode ? 'text-blue-400' : 'text-blue-600', bg: isDarkMode ? 'bg-blue-500/5 border-blue-500/15' : 'bg-blue-50 border-blue-100' },
              { label: 'ТГО (ОДАТ)', value: '30', unit: 'сұрақ', color: isDarkMode ? 'text-violet-400' : 'text-violet-600', bg: isDarkMode ? 'bg-violet-500/5 border-violet-500/15' : 'bg-violet-50 border-violet-100' },
              { label: '1-Профиль', value: '30', unit: 'сұрақ', color: isDarkMode ? 'text-emerald-400' : 'text-emerald-600', bg: isDarkMode ? 'bg-emerald-500/5 border-emerald-500/15' : 'bg-emerald-50 border-emerald-100' },
              { label: '2-Профиль', value: '20', unit: 'сұрақ', color: isDarkMode ? 'text-amber-400' : 'text-amber-600', bg: isDarkMode ? 'bg-amber-500/5 border-amber-500/15' : 'bg-amber-50 border-amber-100' },
            ].map(({ label, value, unit, color, bg }) => (
              <div key={label} className={`p-4 rounded-xl border ${bg}`}>
                <p className={`text-[10px] font-bold ${textMuted} mb-1`}>{label}</p>
                <p className={`text-2xl font-black ${color}`}>{value}</p>
                <p className={`text-[10px] font-bold ${textMuted}`}>{unit}</p>
              </div>
            ))}
          </div>

          {/* PRO upsell — minimal */}
          {!isPremium && (
            <button onClick={() => onUpgrade?.()}
              className={`w-full p-4 rounded-xl border text-left flex items-center gap-4 transition-all hover:-translate-y-0.5 ${isDarkMode
                  ? 'bg-[#0f1219] border-slate-800/80 hover:border-amber-500/40'
                  : 'bg-white border-slate-200 hover:border-amber-300 shadow-sm'
                }`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isDarkMode ? 'bg-amber-500/10 text-amber-400' : 'bg-amber-50 text-amber-600'
                }`}>
                <Crown className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-black ${textTitle}`}>PRO Тьютор</p>
                <p className={`text-[10px] ${textMuted}`}>ИИ ассистент сұрақтарды қадамдық түсіндіреді</p>
              </div>
              <ArrowRight className={`w-4 h-4 shrink-0 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`} />
            </button>
          )}
        </motion.div>

        {/* 4. University Preview — compact */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${textTitle}`}>
                ЖОО-лар
              </h2>
              <p className={`text-xs ${textMuted}`}>
                Магистратура бағдарламалары бар университеттер
              </p>
            </div>
            <a href="https://univision.kz" target="_blank" rel="noopener noreferrer"
              className="text-[10px] font-black text-[var(--brand-primary)] hover:text-blue-400 uppercase tracking-widest flex items-center gap-1"
              style={{ textDecoration: 'none' }}>
              Барлығы <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          <div className={`rounded-2xl border overflow-hidden ${isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
            <div className="p-4">
              <UniversityPreviewList isDarkMode={isDarkMode} />
            </div>
          </div>
        </motion.div>

      </main>

      {/* Footer — Ft2 Inline */}
      <footer className={`py-8 border-t ${isDarkMode ? 'border-white/5' : 'border-slate-200/60'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[var(--brand-primary)] flex items-center justify-center">
              <GraduationCap className="w-3 h-3 text-white" />
            </div>
            <span className={textTitle}>Magis<span className="text-[var(--brand-primary)]">Core</span></span>
          </div>
          <span>© 2026 MAGISCORE · DEVELOPED IN KZ</span>
        </div>
      </footer>

      {/* Profile Modal */}
      <AnimatePresence>
        {isProfileOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[250] p-4 overflow-y-auto"
            onClick={() => setIsProfileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`border rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative p-6 space-y-5 ${isDarkMode ? 'bg-[#0f1219] border-slate-800' : 'bg-white border-slate-200 text-slate-800'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsProfileOpen(false)}
                className={`absolute top-4 right-4 p-1.5 rounded-lg transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                  }`}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Profile Header */}
              <div className="text-center space-y-2 pt-2">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto border ${isPremium
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                    : 'bg-[var(--brand-primary)]/10 border-[var(--brand-primary)]/20 text-[var(--brand-primary)]'
                  }`}>
                  {isPremium ? <Crown className="w-7 h-7" /> : <Users className="w-7 h-7" />}
                </div>
                <h3 className={`text-lg font-black uppercase tracking-wider ${textTitle}`}>Қолданушы Профилі</h3>
              </div>

              {/* Profile Fields */}
              <div className={`rounded-xl p-4 space-y-3 text-sm ${isDarkMode ? 'bg-slate-900/50 border border-slate-800/50' : 'bg-slate-50 border border-slate-200/60'
                }`}>
                <div className="flex justify-between items-center py-0.5 border-b border-dashed border-slate-800/20">
                  <span className="text-slate-400 font-semibold text-xs">Аты-жөні:</span>
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{userName || 'Қолданушы'}</span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-dashed border-slate-800/20">
                  <span className="text-slate-400 font-semibold text-xs">Email:</span>
                  <div
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 cursor-pointer hover:bg-slate-800/20 px-2 py-0.5 rounded-md transition-all select-all"
                    title="Көшіру үшін басыңыз"
                  >
                    <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{userEmail || '-'}</span>
                    {emailCopied ? (
                      <span className="text-[10px] text-green-400 font-bold bg-green-500/10 px-1.5 py-0.5 rounded animate-pulse">Көшірілді!</span>
                    ) : (
                      <span className="text-[9px] text-slate-400 border border-slate-800 px-1 py-0.2 rounded bg-slate-950/40">көшіру</span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-dashed border-slate-800/20">
                  <span className="text-slate-400 font-semibold text-xs">Мамандық:</span>
                  <span className={`font-bold truncate max-w-[200px] ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {specialtyCode ? `${specialtyCode} - ${specialtyName}` : '-'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-400 font-semibold text-xs">Жазылым түрі:</span>
                  {isPremium ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-black uppercase tracking-wider rounded-full">
                      <Crown className="w-3 h-3" /> Premium
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-500/10 border border-slate-500/20 text-slate-400 text-[10px] font-black uppercase tracking-wider rounded-full">
                      Тегін тариф
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                {!isPremium && (
                  <button
                    onClick={() => {
                      setIsProfileOpen(false);
                      if (onUpgrade) onUpgrade();
                    }}
                    className="w-full py-3 bg-[var(--brand-primary)] hover:bg-blue-600 text-white font-extrabold rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                  >
                    <Crown className="w-4 h-4" /> Premium-ге өту
                  </button>
                )}
                {userEmail === 'azamaperdeev05@gmail.com' && (
                  <button
                    onClick={() => {
                      setIsProfileOpen(false);
                      if (onViewAdmin) onViewAdmin();
                    }}
                    className={`w-full py-2.5 rounded-xl border font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-xs uppercase tracking-wider ${isDarkMode ? 'border-slate-800 text-amber-400 hover:bg-slate-800/50' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                  >
                    <Shield className="w-4 h-4" /> Әкімшілік панель
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WelcomeScreen;
