import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Brain, Clock, Database, Globe, ArrowRight, 
  Award, Zap, Target, GraduationCap, TrendingUp, Shield, 
  Menu, X, Sparkles, ChevronRight, Play, ExternalLink,
  MessageSquare, Star, Users, CheckCircle, LogOut, History, Info,
  Sun, Moon, Crown, Settings, BarChart2, Layers
} from 'lucide-react';
import { SUBJECTS } from '../constants';
import { SubjectId } from '../types';
import SEO from './SEO';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
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
  onViewAdmin
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
    return saved !== 'light';
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
    onStart(userName || 'Студент');
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
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200/80 shadow-md';

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden w-full max-w-[100vw] relative ${
      isDarkMode ? 'bg-[#07090d] text-[#f8fafc]' : 'bg-slate-50/50 text-slate-900'
    }`}>
      <SEO
        title="Басты бет"
        description="Магистратураға түсуге дайындалыңыз! 7000+ тест сұрақтары, 4 мамандық бойынша кешенді дайындық. Тегін онлайн платформа."
        canonical="https://magis-core.vercel.app/home"
      />

      {/* Background blobs */}
      <div className="absolute overflow-hidden inset-0 pointer-events-none">
        <div className={`blob w-[500px] h-[500px] top-[-100px] -right-[100px] transition-opacity duration-300 ${
          isDarkMode ? 'bg-blue-600/10' : 'bg-blue-600/[0.03]'
        }`} />
        <div className={`blob w-[400px] h-[400px] top-[40%] -left-[100px] transition-opacity duration-300 ${
          isDarkMode ? 'bg-purple-600/10' : 'bg-purple-600/[0.03]'
        }`} />
      </div>

      {/* Navigation Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? (isDarkMode ? 'py-3.5 glass-dark border-b border-white/5 shadow-2xl backdrop-blur-2xl' : 'py-3.5 bg-white/95 border-b border-slate-200/80 shadow-sm backdrop-blur-2xl') 
          : 'py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src="/logo no bg, white.svg" alt="MagisCore Logo" className={`w-full h-full object-contain ${!isDarkMode ? 'invert opacity-80' : ''}`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-base font-extrabold tracking-tight uppercase whitespace-nowrap ${textTitle}`}>
                Magis<span className="text-blue-500">Core</span>
              </span>
              <span className="text-[9px] font-bold text-slate-500 tracking-widest uppercase -mt-1">
                Student Hub
              </span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={onViewPrep} className="text-xs font-black text-blue-500 hover:text-blue-600 transition-colors tracking-widest uppercase flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Дайындық
            </button>
            <button onClick={onViewProgram} className={`text-xs font-extrabold tracking-widest uppercase transition-colors ${navBtnText}`}>Бағдарлама</button>
            <button onClick={onViewHistory} className={`text-xs font-extrabold tracking-widest uppercase transition-colors ${navBtnText}`}>Тарих & Аналитика</button>
            <button onClick={onViewSpecialties} className={`text-xs font-extrabold tracking-widest uppercase transition-colors ${navBtnText}`}>Мамандықтар</button>
            
            {userEmail === 'azamaperdeev05@gmail.com' && (
              <button 
                onClick={onViewAdmin} 
                className="text-xs font-black text-amber-500 hover:text-amber-600 transition-colors tracking-widest uppercase flex items-center gap-1.5"
              >
                <Shield className="w-4 h-4" /> Әкімші
              </button>
            )}
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl border transition-all active:scale-95 ${
                isDarkMode 
                  ? 'glass border-white/10 text-amber-400 hover:bg-white/5' 
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50'
              }`}
              title={isDarkMode ? "Жарық тақырыпқа ауысу" : "Қараңғы тақырыпқа ауысу"}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Profile trigger */}
            <div className={`flex items-center gap-3 border-l pl-6 ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
              <button
                onClick={() => setIsProfileOpen(true)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-bold text-xs transition-all active:scale-95 ${
                  isDarkMode 
                    ? 'glass border-white/10 text-slate-200 hover:text-white hover:bg-white/5' 
                    : 'bg-white border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50'
                }`}
              >
                <Users className="w-4 h-4 text-blue-500" />
                <span className="max-w-[120px] truncate">{userName || 'Профиль'}</span>
                {isPremium ? (
                  <span className="flex items-center justify-center w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                ) : null}
              </button>

              <button
                onClick={onLogout}
                className={`p-2 border text-red-500 rounded-xl hover:bg-red-500/10 transition-all active:scale-95 ${
                  isDarkMode ? 'glass border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}
                title="Жүйеден шығу"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg border ${
                isDarkMode ? 'glass border-white/10 text-amber-400' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              className={`p-2 rounded-lg border ${isDarkMode ? 'glass border-white/10' : 'bg-white border-slate-200 shadow-sm'}`} 
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden border-t ${
                isDarkMode ? 'glass-dark border-white/5' : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              <div className="flex flex-col p-6 gap-5">
                <button 
                  onClick={() => { onViewPrep(); setIsMenuOpen(false); }} 
                  className="text-left text-xs font-black text-blue-500 hover:text-blue-600 transition-colors tracking-wider uppercase flex items-center gap-3"
                >
                  <GraduationCap className="w-4 h-4" /> Дайындық Бөлімі
                </button>
                <button 
                  onClick={() => { onViewProgram(); setIsMenuOpen(false); }} 
                  className={`text-left text-xs font-bold tracking-wider uppercase flex items-center gap-3 ${navBtnText}`}
                >
                  <BookOpen className="w-4 h-4" /> Бағдарлама Спецификациясы
                </button>
                <button 
                  onClick={() => { onViewHistory(); setIsMenuOpen(false); }} 
                  className={`text-left text-xs font-bold tracking-wider uppercase flex items-center gap-3 ${navBtnText}`}
                >
                  <History className="w-4 h-4" /> Тест Тарихы & Аналитика
                </button>
                <button 
                  onClick={() => { onViewSpecialties(); setIsMenuOpen(false); }} 
                  className={`text-left text-xs font-bold tracking-wider uppercase flex items-center gap-3 ${navBtnText}`}
                >
                  <Award className="w-4 h-4" /> Мамандық Таңдау
                </button>

                {userEmail === 'azamaperdeev05@gmail.com' && (
                  <button 
                    onClick={() => { onViewAdmin?.(); setIsMenuOpen(false); }} 
                    className="text-left text-xs font-black text-amber-500 hover:text-amber-600 transition-colors tracking-wider uppercase flex items-center gap-3"
                  >
                    <Shield className="w-4 h-4" /> Әкімшілік Панель
                  </button>
                )}
                
                <div className={`pt-4 border-t flex flex-col gap-3 ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
                  <button
                    onClick={() => { setIsProfileOpen(true); setIsMenuOpen(false); }}
                    className={`text-left text-xs font-bold tracking-wider uppercase flex items-center gap-3 ${navBtnText}`}
                  >
                    <Users className="w-4 h-4 text-blue-500" /> Профиль {isPremium ? "👑 Premium" : ""}
                  </button>
                  <button
                    onClick={onLogout}
                    className="flex items-center gap-3 text-red-500 text-xs font-bold uppercase tracking-widest text-left"
                  >
                    <LogOut className="w-4 h-4" /> Жүйеден Шығу
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Student Dashboard Content */}
      <main className="pt-24 md:pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">

        {/* 1. Personalized Greeting & Specialty Banner */}
        <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Welcome User Card */}
          <div className={`lg:col-span-8 p-6 sm:p-8 rounded-3xl border relative overflow-hidden flex flex-col justify-between ${
            isDarkMode 
              ? 'bg-gradient-to-br from-[#0f172a] via-[#0f1219] to-[#07090d] border-blue-500/20 shadow-2xl' 
              : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-transparent shadow-xl'
          }`}>
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  isDarkMode 
                    ? 'bg-blue-500/15 border border-blue-500/30 text-blue-400' 
                    : 'bg-white/20 text-white backdrop-blur-md'
                }`}>
                  <Sparkles className="w-3.5 h-3.5" /> Студент дашборды
                </span>

                {isPremium && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 font-extrabold shadow-sm">
                    👑 PRO Статус
                  </span>
                )}
              </div>

              <h1 className={`text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 ${
                isDarkMode ? 'text-white' : 'text-white'
              }`}>
                Қайырлы күн, <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">{userName || 'Студент'}</span>! 👋
              </h1>

              <p className={`text-xs sm:text-sm max-w-xl leading-relaxed ${
                isDarkMode ? 'text-slate-400' : 'text-blue-100/90'
              }`}>
                КТ емтиханына кешенді дайындығыңды жалғастыр. Сұрақтар базасы үнемі жаңартылуда (800+ сұрақ).
              </p>
            </div>

            {/* Specialty Pill / Button */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl border ${
                  isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-white/20 border-white/30 text-white'
                }`}>
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-[10px] font-extrabold uppercase tracking-wider ${
                    isDarkMode ? 'text-slate-500' : 'text-blue-200'
                  }`}>Таңдалған Мамандық:</div>
                  <div className={`text-xs sm:text-sm font-black truncate max-w-[280px] sm:max-w-xs ${
                    isDarkMode ? 'text-slate-200' : 'text-white'
                  }`}>
                    {specialtyCode ? `${specialtyCode} - ${specialtyName}` : 'M094 — Ақпараттық технологиялар'}
                  </div>
                </div>
              </div>

              <button
                onClick={onViewSpecialties}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 border ${
                  isDarkMode
                    ? 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30 text-blue-400'
                    : 'bg-white text-blue-700 hover:bg-blue-50 border-white shadow-sm'
                }`}
              >
                Өзгерту
              </button>
            </div>
          </div>

          {/* Active Test Banner OR Quick Stats Box */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {hasActiveTest ? (
              <div className={`p-6 rounded-3xl border flex-1 flex flex-col justify-between ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-950/40 via-[#0f1219] to-[#07090d] border-blue-500/40 shadow-xl' 
                  : 'bg-blue-50 border-blue-200 shadow-md'
              }`}>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-blue-500 animate-pulse" />
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Белсенді Сессия</span>
                  </div>
                  <h3 className={`text-lg font-black uppercase tracking-tight mb-2 ${textTitle}`}>
                    Аяқталмаған Тест Бар
                  </h3>
                  <p className={`text-xs leading-relaxed ${textMuted}`}>
                    Тест үстінен сақталған прогресіңіз бар. Тоқтаған жеріңізден жалғастыра аласыз.
                  </p>
                </div>

                <button
                  onClick={onResume}
                  className="mt-5 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Жалғастыру <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className={`p-6 rounded-3xl border flex-1 flex flex-col justify-between ${cardBg}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl border ${
                    isDarkMode ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600'
                  }`}>
                    <BarChart2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                    Экспресс Статистика
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs border-b border-dashed border-slate-800/20 pb-2">
                    <span className="text-slate-500 font-bold">Тест Сұрақтары:</span>
                    <span className={`font-black ${textTitle}`}>150 Сұрақ</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-dashed border-slate-800/20 pb-2">
                    <span className="text-slate-500 font-bold">Ресми Емтихан Уақыты:</span>
                    <span className={`font-black ${textTitle}`}>3 Сағ 50 Мин</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-bold">Шекті Балл (Профиль):</span>
                    <span className="font-black text-emerald-500">75+ Ұпай</span>
                  </div>
                </div>

                <button
                  onClick={onViewHistory}
                  className={`mt-4 w-full py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-1.5 ${
                    isDarkMode 
                      ? 'border-slate-800 hover:bg-slate-850 text-slate-300' 
                      : 'border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  Нәтижелер Тарихы <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* 2. Primary CT Simulator Action Hero */}
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="w-full">
          <div className={`p-6 sm:p-10 rounded-3xl border relative overflow-hidden ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-900/30 via-[#0f1219] to-indigo-950/20 border-blue-500/30 shadow-2xl' 
              : 'bg-white border-blue-200 shadow-xl'
          }`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-3 text-center md:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-[10px] font-black uppercase tracking-widest">
                  <Target className="w-3.5 h-3.5" /> Басты Сессия
                </div>

                <h2 className={`text-2xl sm:text-4xl font-black uppercase tracking-tight ${textTitle}`}>
                  КТ Толық Симуляторы (Ресми Формат)
                </h2>

                <p className={`text-xs sm:text-sm leading-relaxed ${textMuted}`}>
                  Ағылшын тілі (50), ТҒО (30) және екі Профильдік пән (70) бойынша 150 сұрақтан тұратын толық симуляциялық емтихан.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-extrabold text-slate-400">
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> 150 Сұрақ</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> 150 Макс. Ұпай</span>
                  <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> 230 Минут Таймер</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={handleStartExam}
                  disabled={isLoading}
                  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl hover:shadow-blue-500/30 transition-all active:scale-95 flex items-center justify-center gap-2.5 disabled:opacity-50"
                >
                  {isLoading ? 'Жүктелуде...' : (
                    <>
                      <Play className="w-4 h-4 fill-white" /> Симуляторды Бастау
                    </>
                  )}
                </button>

                <button
                  onClick={() => onViewProgram()}
                  className={`w-full sm:w-auto px-6 py-4 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2 ${
                    isDarkMode 
                      ? 'border-slate-800 hover:bg-slate-800/50 text-slate-300' 
                      : 'border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  Спецификация <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Specialty Training Hub (Grid) */}
        <motion.div {...fadeInUp} transition={{ delay: 0.15 }} className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${textTitle}`}>
                Мамандықтар Бөлімі & Бағдарламалар
              </h2>
              <p className={`text-xs ${textMuted}`}>
                Магистратура КТ бағыттары мен профильдік пәндер спецификациясы
              </p>
            </div>

            <button
              onClick={() => onViewSpecialties()}
              className="flex items-center gap-1.5 text-xs font-black text-blue-500 hover:text-blue-600 uppercase tracking-widest"
            >
              Барлығын Көру <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* M094 - IT */}
            <motion.div
              whileHover={{ y: -4 }}
              onClick={() => onViewSpecialties()}
              className={`p-6 rounded-3xl border cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl ${cardBg}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                    isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                  }`}>
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 uppercase tracking-wider">
                    M094
                  </span>
                </div>

                <h3 className={`text-lg font-black uppercase tracking-tight mb-1 ${textTitle}`}>
                  Ақпараттық Технологиялар
                </h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>
                  Профильдер: Алгоритмдер & C++, Деректер базасы.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/10 dark:border-white/5 flex items-center justify-between text-xs font-bold text-blue-500">
                <span>Мамандық профилі</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* M095 - Cyber Security */}
            <motion.div
              whileHover={{ y: -4 }}
              onClick={() => onViewSpecialties()}
              className={`p-6 rounded-3xl border cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl ${cardBg}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                    isDarkMode ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600'
                  }`}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 uppercase tracking-wider">
                    M095
                  </span>
                </div>

                <h3 className={`text-lg font-black uppercase tracking-tight mb-1 ${textTitle}`}>
                  Ақпараттық Қауіпсіздік
                </h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>
                  Профильдер: Бағдарламалау тілдері & Қауіпсіздік.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/10 dark:border-white/5 flex items-center justify-between text-xs font-bold text-purple-500">
                <span>Мамандық профилі</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* M001 - Pedagogy */}
            <motion.div
              whileHover={{ y: -4 }}
              onClick={() => onViewSpecialties()}
              className={`p-6 rounded-3xl border cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl ${cardBg}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                    isDarkMode ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase tracking-wider">
                    M001
                  </span>
                </div>

                <h3 className={`text-lg font-black uppercase tracking-tight mb-1 ${textTitle}`}>
                  Педагогика & Психология
                </h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>
                  Профильдер: Педагогика теориясы, Психология.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/10 dark:border-white/5 flex items-center justify-between text-xs font-bold text-emerald-500">
                <span>Мамандық профилі</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

            {/* M070 - Economics */}
            <motion.div
              whileHover={{ y: -4 }}
              onClick={() => onViewSpecialties()}
              className={`p-6 rounded-3xl border cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl ${cardBg}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                    isDarkMode ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-600'
                  }`}>
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 uppercase tracking-wider">
                    M070
                  </span>
                </div>

                <h3 className={`text-lg font-black uppercase tracking-tight mb-1 ${textTitle}`}>
                  Экономика Және Бизнес
                </h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>
                  Профильдер: Кәсіпорын экономикасы, Макроэкономика.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/10 dark:border-white/5 flex items-center justify-between text-xs font-bold text-amber-500">
                <span>Мамандық профилі</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* 4. Secondary Quick Action Tools (Listening / AI / History) */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div 
            onClick={onViewPrep}
            className={`p-6 rounded-3xl border cursor-pointer hover:border-blue-500/40 transition-all ${cardBg}`}
          >
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className={`text-base font-black uppercase tracking-tight mb-1 ${textTitle}`}>
              Магистратура КТ Құрылымы
            </h4>
            <p className={`text-xs leading-relaxed ${textMuted}`}>
              КТ тест форматы, пәндер бөлінісі және баллдық шектер ережесі.
            </p>
          </div>

          <div 
            onClick={onViewHistory}
            className={`p-6 rounded-3xl border cursor-pointer hover:border-blue-500/40 transition-all ${cardBg}`}
          >
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
              <History className="w-5 h-5" />
            </div>
            <h4 className={`text-base font-black uppercase tracking-tight mb-1 ${textTitle}`}>
              Тест Нәтижелері Тарихы
            </h4>
            <p className={`text-xs leading-relaxed ${textMuted}`}>
              Барлық орындалған тесттер, қателермен жұмыс және аналитика.
            </p>
          </div>

          <div 
            onClick={() => {
              if (!isPremium && onUpgrade) onUpgrade();
            }}
            className={`p-6 rounded-3xl border cursor-pointer hover:border-amber-500/40 transition-all ${cardBg}`}
          >
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Crown className="w-5 h-5" />
            </div>
            <h4 className={`text-base font-black uppercase tracking-tight mb-1 ${textTitle}`}>
              {isPremium ? 'PRO Тьютор Белсенді' : 'PRO Мүмкіндіктер'}
            </h4>
            <p className={`text-xs leading-relaxed ${textMuted}`}>
              ИИ ассистент сұрақтарды қадамдық түсіндіреді және талдайды.
            </p>
          </div>

        </motion.div>

      </main>

      {/* Footer */}
      <footer className="py-12 border-t relative z-10" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className={`font-extrabold tracking-tight uppercase ${textTitle}`}>
              Magis<span className="text-blue-500">Core</span> Student Hub
            </span>
          </div>

          <div className="text-[10px] font-bold uppercase tracking-widest">
            © 2026 MAGISCORE. PROUDLY DEVELOPED IN KZ.
          </div>
        </div>
      </footer>

      {/* Profile Modal */}
      <AnimatePresence>
        {isProfileOpen && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[250] p-4 overflow-y-auto"
            onClick={() => setIsProfileOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`border rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative p-6 space-y-6 ${
                isDarkMode ? 'bg-[#0f1219] border-slate-800' : 'bg-white border-slate-200 text-slate-800'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsProfileOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Profile Header */}
              <div className="text-center space-y-2 pt-2">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto border ${
                  isPremium 
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                    : 'bg-blue-500/10 border-blue-500/20 text-blue-500'
                }`}>
                  {isPremium ? <Crown className="w-8 h-8 animate-bounce" style={{ animationDuration: '3s' }} /> : <Users className="w-8 h-8" />}
                </div>
                <h3 className={`text-lg font-black uppercase tracking-wider ${textTitle}`}>Қолданушы Профилі</h3>
              </div>

              {/* Profile Fields */}
              <div className={`rounded-2xl p-4 space-y-3.5 text-sm ${
                isDarkMode ? 'bg-slate-900/50 border border-slate-800/50' : 'bg-slate-50 border border-slate-200/60'
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
                      <span className="text-[9px] text-slate-500 border border-slate-800 px-1 py-0.2 rounded bg-slate-950/40">көшіру</span>
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
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-black uppercase tracking-wider rounded-full shadow-lg shadow-amber-500/5 animate-pulse">
                      👑 Premium
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-500/10 border border-slate-500/20 text-slate-400 text-[10px] font-black uppercase tracking-wider rounded-full">
                      Тегін тариф
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                {!isPremium && (
                  <button
                    onClick={() => {
                      setIsProfileOpen(false);
                      if (onUpgrade) onUpgrade();
                    }}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-extrabold rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-lg shadow-amber-950/20"
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
                    className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold border border-slate-700/60 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
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