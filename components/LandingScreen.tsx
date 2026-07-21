import React, { useState, useEffect } from 'react';
import {
  Zap, BarChart2, Target, ArrowRight,
  CheckCircle, BookOpen, Brain, Shield, Award, ChevronRight,
  Moon, Sun, TrendingUp, GraduationCap, Building2, Monitor, Sparkles,
  Send, Instagram, Youtube, Menu, X
} from 'lucide-react';
import { InfoModals, ModalType } from './InfoModals';

interface LandingScreenProps {
  onLogin: () => void;
  onRegister: () => void;
}

const STATS = [
  { value: '133+', label: 'Мамандық тобы' },
  { value: '125+', label: 'Қазақстан ЖОО' },
  { value: '10 000+', label: 'Сұрақ банкі' },
  { value: '98%', label: 'Тиімділік' },
];

const HOW_IT_WORKS = [
  {
    num: '01',
    icon: <BookOpen className="w-5 h-5" />,
    title: '133 Мамандық Спецификациясы',
    desc: 'ҰТО бекіткен 133 мамандық тобының ресми бейіндік пәндері мен тақырыптар тізімі.',
    color: 'blue',
  },
  {
    num: '02',
    icon: <Target className="w-5 h-5" />,
    title: '150 сұрақты КТ Симуляторы',
    desc: 'НАҒЫЗ КТ емтиханының құрылымы: 230 минуттық таймер, ресми сұрақтар саны.',
    color: 'indigo',
  },
  {
    num: '03',
    icon: <Brain className="w-5 h-5" />,
    title: 'MagisCore AI Тьютор',
    desc: 'Күрделі сұрақтарды қадамдап түсіндіріп, грамматика мен ережелерді ИИ ассистент талдап береді.',
    color: 'violet',
  },
  {
    num: '04',
    icon: <Building2 className="w-5 h-5" />,
    title: '125+ ЖОО & Грант Базасы',
    desc: 'Univision.kz интеграциясы: Қазақстан ЖОО-лары, мамандықтар және грант мүмкіндіктері.',
    color: 'emerald',
  },
  {
    num: '05',
    icon: <BarChart2 className="w-5 h-5" />,
    title: 'Аналитика & Қатемен жұмыс',
    desc: 'Әлсіз тақырыптарды анықтайтын аналитика, орындалған тесттер тарихы мен прогресс.',
    color: 'amber',
  },
];

const FEATURES = [
  { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, title: 'Ресми бейіндік бағдарламалар', desc: '133 мамандық тобы бойынша ҰТО бекіткен пәндер мен тақырыптар' },
  { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, title: 'ИИ ассистент арқылы қате талдау', desc: 'Әр сұрақтың дұрыс жауабын қадамдап түсіндіретін интеллектік жүйе' },
  { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, title: 'Университеттер мен гранттар базасы', desc: 'Қазақстанның 125 ЖОО-сы бойынша актуал оқу бағдарламалары' },
  { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, title: 'Персоналды оқу статистикасы', desc: 'Ұпайлар тарихы, уақытты бақылау және әлсіз тақырыптарды бағалау' },
];

const SPECIALTIES_PREVIEW = [
  { code: 'M094', label: 'Ақпараттық Технологиялар', color: 'blue', icon: <Zap className="w-4 h-4" /> },
  { code: 'M095', label: 'Ақпараттық Қауіпсіздік', color: 'purple', icon: <Shield className="w-4 h-4" /> },
  { code: 'M001', label: 'Педагогика & Психология', color: 'emerald', icon: <GraduationCap className="w-4 h-4" /> },
  { code: 'M070', label: 'Экономика & Бизнес', color: 'amber', icon: <TrendingUp className="w-4 h-4" /> },
  { code: 'M021', label: 'Медицина & Фармакология', color: 'rose', icon: <Target className="w-4 h-4" /> },
  { code: 'M030', label: 'Заң Ғылымдары', color: 'indigo', icon: <BookOpen className="w-4 h-4" /> },
];

const iconBg: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-600 border border-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-600 border border-purple-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-600 border border-amber-500/20',
  rose: 'bg-rose-500/10 text-rose-600 border border-rose-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-600 border border-indigo-500/20',
};

const pillColor: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20',
  purple: 'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20',
  emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20',
  amber: 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
  rose: 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20',
  indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20',
};

const stepCardThemes: Record<string, { iconBg: string; border: string }> = {
  blue: { iconBg: 'bg-blue-600 text-white', border: 'hover:border-blue-300 dark:hover:border-blue-500/50' },
  indigo: { iconBg: 'bg-indigo-600 text-white', border: 'hover:border-indigo-300 dark:hover:border-indigo-500/50' },
  violet: { iconBg: 'bg-purple-600 text-white', border: 'hover:border-purple-300 dark:hover:border-purple-500/50' },
  emerald: { iconBg: 'bg-emerald-600 text-white', border: 'hover:border-emerald-300 dark:hover:border-emerald-500/50' },
  amber: { iconBg: 'bg-amber-500 text-white', border: 'hover:border-amber-300 dark:hover:border-amber-500/50' },
};

const LandingScreen: React.FC<LandingScreenProps> = ({ onLogin, onRegister }) => {
  const [isDark, setIsDark] = useState(false);
  const [count, setCount] = useState(0);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setCount(c => c < 133 ? c + 3 : 133), 20);
    return () => clearInterval(t);
  }, []);

  const bg = isDark ? 'bg-[#07090d]' : 'bg-[#FAFCFF]';
  const cardBg = isDark ? 'bg-[#0f1219] border-slate-800' : 'bg-white border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.06)] hover:border-blue-200 transition-all duration-300';
  const text = isDark ? 'text-white' : 'text-slate-900';
  const muted = isDark ? 'text-slate-400' : 'text-slate-500';
  const navBg = isDark ? 'bg-[#07090d]/90 border-slate-800' : 'bg-white/90 border-slate-200/80';
  const altBg = isDark ? 'bg-[#0a0c12] border-slate-800' : 'bg-slate-50 border-slate-200/60';

  return (
    <div className={`min-h-screen ${bg} font-sans transition-colors duration-300 overflow-x-hidden`}>

      {/* ── Navbar ── */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b ${navBg} transition-colors`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img
              src={isDark ? "/logo no bg, white.svg" : "/logo no bg, blue.svg"}
              alt="MagisCore"
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <span className={`font-black text-base sm:text-lg tracking-tight ${text}`}>
              Magis<span className="text-blue-600">Core</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest">
            <a href="#how" className={`${muted} hover:text-blue-600 transition-colors`}>Қалай жұмыс істейді</a>
            <a href="#features" className={`${muted} hover:text-blue-600 transition-colors`}>Мүмкіндіктер</a>
            <a href="#specialties" className={`${muted} hover:text-blue-600 transition-colors`}>Мамандықтар</a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsDark(d => !d)}
              aria-label="Toggle Theme"
              className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${isDark ? 'border-slate-700 text-slate-400 hover:text-white bg-slate-800/50' : 'border-slate-200 text-slate-600 hover:text-slate-900 bg-white shadow-sm'}`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={onLogin}
              className={`hidden sm:inline-flex px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-100 bg-white shadow-sm'}`}
            >
              Кіру
            </button>
            <button
              onClick={onRegister}
              className="px-3.5 py-2.5 sm:px-5 sm:py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all active:scale-95 shrink-0"
            >
              Тіркелу
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Mobile Menu"
              className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center border ${isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700 bg-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-b px-4 py-5 space-y-4 ${navBg} animate-in slide-in-from-top-2 duration-200`}>
            <div className="flex flex-col space-y-2 text-xs font-black uppercase tracking-wider">
              <a
                href="#how"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2.5 px-3 rounded-xl transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
              >
                Қалай жұмыс істейді
              </a>
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2.5 px-3 rounded-xl transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
              >
                Мүмкіндіктер
              </a>
              <a
                href="#specialties"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2.5 px-3 rounded-xl transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
              >
                Мамандықтар
              </a>
            </div>

            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => { setIsMobileMenuOpen(false); onLogin(); }}
                className={`w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider border ${isDark ? 'border-slate-700 text-slate-300 bg-slate-900' : 'border-slate-200 text-slate-700 bg-white'}`}
              >
                Кіру
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative w-full pt-12 lg:pt-16 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center lg:items-end justify-between min-h-[460px] lg:min-h-[540px]">
          <div className="flex-1 text-center lg:text-left py-4 lg:py-12 lg:max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-6 text-[11px] font-black uppercase tracking-wider border-blue-500/20 bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <Zap className="w-3.5 h-3.5 fill-current" /> Магистратура дайындығының ең тиімді платформасы
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-5 ${text}`}>
              Кешенді тестілеуге дайындалудың{' '}
              <span className="text-blue-600">
                ең тиімді
              </span>{' '}
              платформасы
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 ${muted}`}>
              Магистратура КТ форматына сай симулятор тесттер, ИИ тьютор және
              133 мамандықтың ресми спецификациялары. Грантқа бірге түсейік.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <button onClick={onRegister}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-wider hover:bg-blue-500 transition-all active:scale-95 flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/20">
                Тегін бастау <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onLogin}
                className={`w-full sm:w-auto px-8 py-4 rounded-2xl border font-black text-sm uppercase tracking-wider transition-all active:scale-95 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-100 bg-white shadow-sm'}`}>
                Платформаға кіру
              </button>
            </div>
          </div>

          {/* Hero Smartphone Mockup - Touches absolute right edge of SCREEN */}
          <div className="w-full lg:w-[54%] xl:w-[50%] lg:absolute lg:right-0 lg:bottom-0 flex items-end justify-center lg:justify-end self-end pointer-events-none z-0 mt-8 lg:mt-0">
            <img
              src="/smartphone-mockup.png"
              alt="MagisCore Smartphone App Mockup"
              className="w-full h-auto max-h-[360px] sm:max-h-[580px] lg:max-h-[760px] xl:max-h-[840px] scale-100 lg:scale-110 origin-bottom-right object-contain object-bottom object-center lg:object-right drop-shadow-[0_25px_60px_rgba(37,99,235,0.15)] pointer-events-auto block leading-none translate-y-1"
            />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className={`border-y ${altBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: `${count}+`, label: 'Мамандық тобы' },
            { value: '125+', label: 'Қазақстан ЖОО' },
            { value: '10K+', label: 'Сұрақ банкі' },
            { value: '150', label: 'Сұрақ симулятор' },
          ].map(({ value, label }) => (
            <div key={label} className="p-2">
              <p className="text-3xl sm:text-4xl font-black mb-1 text-blue-600 dark:text-blue-400">
                {value}
              </p>
              <p className={`text-xs font-black uppercase tracking-widest ${muted}`}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works / Platform Features ── */}
      <section id="how" className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 block">Платформа Мүмкіндіктері</span>
          <h2 className={`text-3xl sm:text-4xl font-black uppercase tracking-tight mb-3 ${text}`}>MagisCore негізгі 5 артықшылығы</h2>
          <p className={`text-sm max-w-md mx-auto ${muted}`}>Кешенді тестілеуге сапалы дайындалуға арналған толық онлайн экожүйе</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {HOW_IT_WORKS.map(({ num, icon, title, desc, color }) => {
            const theme = stepCardThemes[color];
            return (
              <div
                key={num}
                className={`p-7 rounded-3xl border relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${cardBg} ${theme.border}`}
              >
                <span className={`absolute top-2 right-4 text-6xl font-black select-none opacity-10 ${text}`}>
                  {num}
                </span>

                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 relative z-10 ${theme.iconBg}`}>
                  {icon}
                </div>
                <h3 className={`text-base font-black uppercase tracking-tight mb-2.5 relative z-10 ${text}`}>{title}</h3>
                <p className={`text-xs leading-relaxed relative z-10 ${muted}`}>{desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Features Section (KT Format) ── */}
      <section id="features" className={`border-y ${altBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 block">Нәтижелі Дайындық</span>
            <h2 className={`text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4 ${text}`}>Дайындықты жеңілдететін мүмкіндіктер</h2>
            <p className={`text-sm leading-relaxed mb-8 ${muted}`}>
              Магистратураға грант иегері атану үшін әр студентке қажетті заманауи құралдар мен деректер қоры.
            </p>

            <div className="space-y-4">
              {FEATURES.map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-blue-50/50 dark:hover:bg-slate-800/50">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    {icon}
                  </div>
                  <div>
                    <p className={`text-sm font-black ${text}`}>{title}</p>
                    <p className={`text-xs ${muted} mt-0.5`}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KT Format Card */}
          <div className={`rounded-3xl border p-7 ${cardBg}`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xs font-black uppercase tracking-widest ${muted}`}>Магистратура КТ Форматы</h3>
              <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">Ресми нұсқаулық</span>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Ағылшын тілі', pct: 33, count: '50 сұрақ', color: 'bg-blue-600' },
                { label: 'ТҒО (ОДАТ)', pct: 20, count: '30 сұрақ', color: 'bg-indigo-600' },
                { label: '1-Бейіндік пән', pct: 23, count: '35 сұрақ', color: 'bg-emerald-600' },
                { label: '2-Бейіндік пән', pct: 23, count: '35 сұрақ', color: 'bg-amber-500' },
              ].map(({ label, pct, count: c, color }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-extrabold ${text}`}>{label}</span>
                    <span className={`text-xs font-black ${muted}`}>{c}</span>
                  </div>
                  <div className={`h-2.5 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <div className={`h-2.5 rounded-full ${color}`} style={{ width: `${pct * 2}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-7 pt-5 border-t flex items-center justify-between ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
              <div>
                <p className={`text-2xl font-black ${text}`}>150</p>
                <p className={`text-[10px] font-bold uppercase ${muted}`}>Барлық сұрақ</p>
              </div>
              <div>
                <p className={`text-2xl font-black ${text}`}>230</p>
                <p className={`text-[10px] font-bold uppercase ${muted}`}>Минут таймер</p>
              </div>
              <button onClick={onRegister} className="px-6 py-3 rounded-xl bg-blue-600 text-white text-xs font-black uppercase hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all active:scale-95">
                Бастау
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Test Interface Showcase Section ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className={`rounded-3xl border p-8 sm:p-12 lg:p-14 relative overflow-hidden transition-all duration-300 ${
          isDark
            ? 'bg-[#0a0c12] border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.5)]'
            : 'bg-white border-slate-200/90 shadow-[0_20px_60px_rgba(37,99,235,0.06)]'
        }`}>
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-0" />

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 relative z-10">
            {/* Left: Text & Checklist */}
            <div className="w-full lg:w-[48%] text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200/60 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 text-xs font-black uppercase tracking-wider mb-4">
                <Monitor className="w-3.5 h-3.5" /> ШЫНАЙЫ ЕМТИХАН РЕЖИМІ
              </span>

              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight ${text}`}>
                Ыңғайлы тест <span className="text-blue-600 dark:text-blue-400">интерфейсі</span>
              </h2>

              <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-lg ${muted}`}>
                Максималды түрде НАҒЫЗ КТ емтиханына жақындатылған. Емтихан кезінде өзіңізді ҰТО КТ-дағыдай сезінесіз.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Барлық пәндер қамтылған',
                    desc: 'Ағылшын тілі, ТҒО және 133 мамандық бойынша бейіндік пәндер',
                  },
                  {
                    title: 'ҰТО тест спецификациясына сай',
                    desc: '230 минуттық нақты таймер мен 150 сұрақтан тұратын емтихан форматы',
                  },
                  {
                    title: 'Әрдайым қолжетімді қатемен жұмыс',
                    desc: 'ИИ тьютордың сұрақтар бойынша қадамдық түсіндірмелері мен ережелері',
                  },
                ].map(({ title, desc }) => (
                  <div
                    key={title}
                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 hover:translate-x-1 ${
                      isDark
                        ? 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-800/50'
                        : 'bg-slate-50/80 border-slate-200/60 hover:bg-white hover:shadow-md hover:shadow-blue-500/5 hover:border-blue-200'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-black ${text}`}>{title}</h4>
                      <p className={`text-xs ${muted} mt-0.5 font-medium leading-relaxed`}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Macbook Mockup Display */}
            <div className="w-full lg:w-[52%] flex items-center justify-center lg:justify-end relative py-4">
              {/* Floating Feature Badges */}
              <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-900/5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className={`text-xs font-black ${text}`}>150 Сұрақ Симуляторы</span>
              </div>

              <div className="absolute bottom-6 right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-900/5">
                <Brain className="w-4 h-4 text-violet-500" />
                <span className={`text-xs font-black ${text}`}>MagisCore AI Тьютор</span>
              </div>

              <img
                src="/macbook-mockup.png"
                alt="MagisCore Ыңғайлы Тест Интерфейсі"
                className="w-full h-auto max-h-[520px] sm:max-h-[580px] object-contain drop-shadow-[0_25px_50px_rgba(37,99,235,0.14)] hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialties Section ── */}
      <section id="specialties" className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2.5 block">Ресми Бағдарламалар</span>
          <h2 className={`text-3xl sm:text-4xl font-black uppercase tracking-tight mb-3 ${text}`}>133 Мамандық Тобы</h2>
          <p className={`text-sm max-w-md mx-auto ${muted}`}>Барлық мамандықтар бойынша ҰТО бекіткен бейіндік пәндер мен ресми спецификациялар</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SPECIALTIES_PREVIEW.map(({ code, label, color, icon }) => (
            <div
              key={code}
              onClick={onRegister}
              className={`p-6 rounded-3xl border flex items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group relative overflow-hidden ${
                isDark
                  ? 'bg-[#0f1219] border-slate-800 hover:border-blue-500/40 hover:bg-[#131722]'
                  : 'bg-white border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_35px_rgba(37,99,235,0.08)] hover:border-blue-300'
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${iconBg[color]}`}>
                  {icon}
                </div>
                <div className="min-w-0">
                  <h4 className={`text-sm font-black truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${text}`}>{label}</h4>
                  <p className={`text-[11px] font-semibold ${muted} mt-0.5 flex items-center gap-1.5`}>
                    <span>{code}</span>
                    <span>·</span>
                    <span>Ресми спецификация</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border transition-colors ${pillColor[color]}`}>
                  {code}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onRegister}
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5 mx-auto group"
          >
            <span>Барлық 133 мамандықты көру</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden bg-blue-600 p-10 sm:p-16 text-center shadow-2xl shadow-blue-500/20">
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-black uppercase tracking-widest mb-4 border border-white/20">
              Магистратура КТ Дайындығы
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Грантқа бірге түсейік!
            </h2>
            <p className="text-sm sm:text-base text-blue-100 mb-8 max-w-md mx-auto font-medium">
              Тіркелу тегін. Симулятор тестті бүгін-ақ тапсырып, өз деңгейіңізді анықтаңыз.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onRegister}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white text-blue-600 font-black text-sm uppercase tracking-wider hover:bg-blue-50 transition-all active:scale-95 shadow-xl"
              >
                Тегін бастау
              </button>
              <button
                onClick={onLogin}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl border border-white/30 text-white font-black text-sm uppercase tracking-wider hover:bg-white/10 transition-all active:scale-95"
              >
                Кіру
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={`border-t py-16 ${altBg} ${isDark ? 'border-slate-800' : 'border-slate-200/80'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80 dark:border-slate-800">
            {/* Col 1: Logo, Description & Socials */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src={isDark ? "/logo no bg, white.svg" : "/logo no bg, blue.svg"}
                  alt="MagisCore"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed max-w-sm ${muted} font-medium`}>
                Магистратураға дайындықтың заманауи және ең тиімді тәсілі. Бізбен бірге болашағыңа сенімді қадам жаса.
              </p>
              {/* Social Buttons */}
              <div className="flex items-center gap-3 pt-1">
                {[
                  { name: 'Telegram', icon: <Send className="w-4 h-4 text-blue-500" />, href: 'https://t.me' },
                  { name: 'Instagram', icon: <Instagram className="w-4 h-4 text-rose-500" />, href: 'https://instagram.com' },
                  { name: 'YouTube', icon: <Youtube className="w-4 h-4 text-red-500" />, href: 'https://youtube.com' },
                ].map(({ name, icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
                        : 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300'
                    }`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: ПЛАТФОРМА */}
            <div className="space-y-4">
              <h4 className={`text-xs font-black uppercase tracking-widest ${text}`}>Платформа</h4>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <li><button onClick={onRegister} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Спецификациялар</button></li>
                <li><button onClick={onRegister} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">КТ Симуляторы</button></li>
                <li><button onClick={onRegister} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ИИ Тьютор</button></li>
                <li><button onClick={onRegister} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Нәтиже аналитикасы</button></li>
                <li><button onClick={onRegister} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">125+ ЖОО Базасы</button></li>
              </ul>
            </div>

            {/* Col 3: БАҒДАРЛАМАЛАР */}
            <div className="space-y-4">
              <h4 className={`text-xs font-black uppercase tracking-widest ${text}`}>Бағдарламалар</h4>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <li><button onClick={onRegister} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">M094 Ақпараттық Технологиялар</button></li>
                <li><button onClick={onRegister} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">M095 Ақпараттық Қауіпсіздік</button></li>
                <li><button onClick={onRegister} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">M001 Педагогика & Психология</button></li>
                <li><button onClick={onRegister} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">M070 Экономика & Бизнес</button></li>
                <li><button onClick={onRegister} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Барлық 133 мамандық</button></li>
              </ul>
            </div>

            {/* Col 4: КӨМЕК */}
            <div className="space-y-4">
              <h4 className={`text-xs font-black uppercase tracking-widest ${text}`}>Көмек</h4>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <li><button onClick={() => setActiveModal('faq')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Сұрақ-жауап (FAQ)</button></li>
                <li><button onClick={() => setActiveModal('support')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Қолдау көрсету</button></li>
                <li><button onClick={() => setActiveModal('privacy')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Құпиялылық саясаты</button></li>
                <li><button onClick={() => setActiveModal('terms')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Пайдалану ережелері</button></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
            <p>© MagisCore 2026. Барлық құқықтар қорғалған.</p>
            <div className="flex items-center gap-4">
              <button onClick={() => setActiveModal('terms')} className="hover:underline hover:text-blue-600 transition-colors cursor-pointer">Ережелер</button>
              <span>·</span>
              <button onClick={() => setActiveModal('cookies')} className="hover:underline hover:text-blue-600 transition-colors cursor-pointer">Cookies</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Info Modals */}
      <InfoModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        isDark={isDark}
      />
    </div>
  );
};

export default LandingScreen;
