import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Brain, Clock, Database, Globe, ArrowRight, 
  Award, Zap, Target, GraduationCap, TrendingUp, Shield, 
  Menu, X, Sparkles, ChevronRight, Play, ExternalLink,
  MessageSquare, Star, Users, CheckCircle, LogOut, History, Info,
  Sun, Moon
} from 'lucide-react';
import { SUBJECTS } from '../constants';
import { SubjectId } from '../types';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
  isLoading: boolean;
  onViewProgram: () => void;
  onViewHistory: () => void;
  onViewPrep: () => void;
  onViewSpecialties: () => void;
  userName?: string;
  specialtyCode?: string;
  specialtyName?: string;
  onLogout?: () => void;
  onDeleteAccount?: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ 
  onStart, 
  isLoading, 
  onViewProgram, 
  onViewHistory, 
  onViewPrep, 
  onViewSpecialties, 
  userName, 
  specialtyCode, 
  specialtyName, 
  onLogout,
  onDeleteAccount
}) => {
  const [name, setName] = useState(userName || '');
  const [error, setError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const handleStart = () => {
    if (!name.trim()) {
      setError(true);
      return;
    }
    onStart(name.trim());
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  };

  // Simplified Theme styling variables
  const textTitle = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const navBtnText = isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200/80 shadow-md';
  const statTextVal = isDarkMode ? 'text-white' : 'text-slate-900';

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden w-full max-w-[100vw] relative ${
      isDarkMode ? 'bg-[#07090d] text-[#f8fafc]' : 'bg-slate-50/50 text-slate-900'
    }`}>
      
      {/* Background blobs (Simplified - reduced opacity to be less distracting) */}
      <div className="absolute overflow-hidden inset-0 pointer-events-none">
        <div className={`blob w-[450px] h-[450px] top-[-100px] -right-[100px] transition-opacity duration-300 ${
          isDarkMode ? 'bg-blue-600/5' : 'bg-blue-600/[0.02]'
        }`} />
        <div className={`blob w-[350px] h-[350px] bottom-[20%] -left-[100px] transition-opacity duration-300 ${
          isDarkMode ? 'bg-purple-600/5' : 'bg-purple-600/[0.02]'
        }`} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? (isDarkMode ? 'py-4 glass-dark border-b border-white/5 shadow-2xl backdrop-blur-2xl' : 'py-4 bg-white/95 border-b border-slate-200/80 shadow-sm backdrop-blur-2xl') 
          : 'py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src="/logo no bg, white.svg" alt="MagisCore Logo" className={`w-full h-full object-contain ${!isDarkMode ? 'invert opacity-80' : ''}`} />
            </div>
            <span className={`text-lg font-extrabold tracking-tight uppercase whitespace-nowrap ${textTitle}`}>
              Magis<span className="text-blue-500">Core</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={onViewPrep} className="text-sm font-black text-blue-500 hover:text-blue-600 transition-colors tracking-widest uppercase flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Дайындық
            </button>
            <button onClick={onViewProgram} className={`text-sm font-bold tracking-widest uppercase transition-colors ${navBtnText}`}>Бағдарлама</button>
            <button onClick={onViewHistory} className={`text-sm font-bold tracking-widest uppercase transition-colors ${navBtnText}`}>Тарих</button>
            <a href="#subjects" className={`text-sm font-bold tracking-widest uppercase transition-colors ${navBtnText}`}>Пәндер</a>
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl border transition-all active:scale-95 ${
                isDarkMode 
                  ? 'glass border-white/10 text-amber-400 hover:bg-white/5' 
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50'
              }`}
              title={isDarkMode ? "Жарық тақырыпқа ауысу" : "Қараңғы тақырыпқа ауысу"}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {userName && (
              <div className={`flex items-center gap-4 border-l pl-8 ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
                <div className="flex flex-col text-right">
                  <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{userName}</span>
                  {onDeleteAccount && (
                    <button 
                      onClick={onDeleteAccount}
                      className="text-[10px] text-slate-500 hover:text-red-500 font-bold uppercase tracking-wider transition-colors mt-0.5"
                    >
                      Деректерді өшіру
                    </button>
                  )}
                </div>
                <button
                  onClick={onLogout}
                  className={`p-2.5 border text-red-500 rounded-xl hover:bg-red-500/10 transition-all active:scale-95 ${
                    isDarkMode ? 'glass border-white/10' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                  title="Шығу"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Theme Switcher */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg border ${
                isDarkMode ? 'glass border-white/10 text-amber-400' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className={`p-2 rounded-lg border ${isDarkMode ? 'glass border-white/10' : 'bg-white border-slate-200 shadow-sm'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              <div className="flex flex-col p-6 gap-6">
                <button 
                  onClick={() => { onViewPrep(); setIsMenuOpen(false); }} 
                  className="text-left text-sm font-black text-blue-500 hover:text-blue-600 transition-colors tracking-wider uppercase flex items-center gap-3"
                >
                  <GraduationCap className="w-4 h-4" /> Дайындық
                </button>
                <button 
                  onClick={() => { onViewProgram(); setIsMenuOpen(false); }} 
                  className={`text-left text-sm font-bold tracking-wider uppercase flex items-center gap-3 ${navBtnText}`}
                >
                  <BookOpen className="w-4 h-4" /> Бағдарлама
                </button>
                <button 
                  onClick={() => { onViewHistory(); setIsMenuOpen(false); }} 
                  className={`text-left text-sm font-bold tracking-wider uppercase flex items-center gap-3 ${navBtnText}`}
                >
                  <History className="w-4 h-4" /> Тарих
                </button>
                <a 
                  href="#subjects" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-bold tracking-wider uppercase flex items-center gap-3 ${navBtnText}`}
                >
                  <Brain className="w-4 h-4" /> Пәндер
                </a>
                
                {userName && (
                  <div className={`pt-6 border-t flex flex-col gap-4 ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{userName}</span>
                      <div className="flex items-center gap-4">
                        {onDeleteAccount && (
                          <button
                            onClick={() => { onDeleteAccount(); setIsMenuOpen(false); }}
                            className="text-xs text-slate-500 hover:text-red-500 font-bold uppercase tracking-widest"
                          >
                            Деректерді өшіру
                          </button>
                        )}
                        <button
                          onClick={onLogout}
                          className="flex items-center gap-2 text-red-500 text-sm font-bold uppercase tracking-widest"
                        >
                          <LogOut className="w-4 h-4" /> Шығу
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div 
              {...fadeInUp}
              className={`inline-flex items-center gap-2 px-3 py-1 border rounded-full mb-8 ${
                isDarkMode ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-500">2026 ЖЫЛҒЫ БАҒДАРЛАМА</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`text-3xl sm:text-5xl md:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tight uppercase ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Болашағыңды <br />
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.1)]">Бүгін Анықта.</span>
            </motion.h1>
            
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className={`text-sm sm:text-base md:text-lg mb-10 max-w-2xl leading-relaxed ${textMuted}`}
            >
              Магистратураға дайындықтың кәсіби деңгейі. Сұрақтар базасы үнемі жаңартылып, толықтырылып отырады (қазіргі таңда 800+ сұрақ). Listening аудиолары, ИИ көмекшісі және терең аналитика.
            </motion.p>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.15 }}
              className="relative w-full max-w-md mt-4"
            >
               <div className={`p-1.5 sm:p-1 border rounded-2xl flex flex-col sm:flex-row gap-2 ${
                 isDarkMode ? 'bg-[#0f1219] border-slate-800/80 shadow-2xl' : 'bg-white border-slate-200 shadow-lg'
               }`}>
                 <input 
                   type="text" 
                   value={name}
                   onChange={(e) => { setName(e.target.value); if(error) setError(false); }}
                   placeholder="Аты-жөніңізді жазыңыз"
                   className={`flex-1 px-5 py-3 bg-transparent outline-none font-bold tracking-wide text-sm ${
                     isDarkMode ? 'text-white placeholder-slate-600' : 'text-slate-800 placeholder-slate-400'
                   } ${error ? 'bg-red-500/5 rounded-xl' : ''}`}
                 />
                 <button 
                   onClick={handleStart}
                   disabled={isLoading}
                   className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md hover:shadow-blue-500/20 disabled:opacity-50 whitespace-nowrap"
                 >
                   {isLoading ? 'Жүктелуде...' : <>Тестіні Бастау <ChevronRight className="w-4 h-4"/></>}
                 </button>
               </div>
               <AnimatePresence>
                 {error && (
                   <motion.p 
                     initial={{ opacity: 0, y: -5 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0 }}
                     className="text-red-500 text-[10px] font-bold mt-3 uppercase tracking-widest flex items-center justify-center gap-2"
                   >
                     <Shield className="w-3.5 h-3.5" /> Аты-жөніңізді жазуды ұмытпаңыз
                   </motion.p>
                 )}
               </AnimatePresence>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className={`mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-40 text-[10px] font-bold tracking-widest uppercase ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
               <span>СЕНІМДІ ДАЙЫНДЫҚ</span>
               <div className={`h-3 w-px hidden md:block ${isDarkMode ? 'bg-white/20' : 'bg-slate-300'}`}></div>
               <span>МЫҢДАҒАН СТУДЕНТТЕР</span>
               <div className={`h-3 w-px hidden md:block ${isDarkMode ? 'bg-white/20' : 'bg-slate-300'}`}></div>
               <span>СПЕЦИФИКАЦИЯ</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-16 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)' }} id="subjects">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Master Card - English */}
            <motion.div 
              whileHover={{ y: -2 }}
              className={`md:col-span-8 p-6 sm:p-8 border rounded-3xl flex flex-col justify-between min-h-[280px] ${cardBg}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                    isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                  }`}>
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider rounded-full ${
                    isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}>Аудио Мәтіндер</span>
                </div>
                <h3 className={`text-2xl md:text-3xl font-extrabold mb-3 uppercase tracking-tight ${textTitle}`}>Ағылшын Тілі</h3>
                <p className={`text-sm max-w-lg leading-relaxed ${textMuted}`}>80+ аудио мәтіндер және кешенді грамматикалық сұрақтар жинағы.</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{SUBJECTS[SubjectId.ENGLISH].totalQuestions} сұрақ</span>
                <button className={`w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all ${
                  isDarkMode ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-slate-700'
                }`}>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Small Card - TGO */}
            <motion.div 
              whileHover={{ y: -2 }}
              className={`md:col-span-4 p-6 sm:p-8 border rounded-3xl flex flex-col justify-between min-h-[280px] ${cardBg}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                    isDarkMode ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600'
                  }`}>
                    <Brain className="w-6 h-6" />
                  </div>
                </div>
                <h3 className={`text-xl font-extrabold mb-2 uppercase tracking-tight ${textTitle}`}>Оқу Сауаттылығы</h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>Сыни ойлау және мәтінмен жұмыс логикасы.</p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{SUBJECTS[SubjectId.TGO].totalQuestions} сұрақ</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </motion.div>

            {/* Small Card - Logic/Algo */}
            <motion.div 
              whileHover={{ y: -2 }}
              className={`md:col-span-4 p-6 sm:p-8 border rounded-3xl flex flex-col justify-between min-h-[280px] ${cardBg}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                    isDarkMode ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                  }`}>
                    <Zap className="w-6 h-6" />
                  </div>
                </div>
                <h3 className={`text-xl font-extrabold mb-2 uppercase tracking-tight ${textTitle}`}>Информатика</h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>C++, деректер құрылымы және алгоритмдер.</p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{SUBJECTS[SubjectId.ALGO].totalQuestions} сұрақ</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </motion.div>

            {/* Stats Card */}
            <div className={`md:col-span-4 p-6 sm:p-8 border rounded-3xl flex flex-col items-center justify-center text-center ${cardBg}`}>
              <div className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">80%</div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Грантқа түсу көрсеткіші</div>
              <p className="text-[11px] text-slate-500 mt-4 max-w-[200px] leading-relaxed">Бізбен дайындалған студенттердің басым бөлігі мемлекеттік грант иегері атанды.</p>
            </div>

            {/* Small Card - DB */}
            <motion.div 
              whileHover={{ y: -2 }}
              className={`md:col-span-4 p-6 sm:p-8 border rounded-3xl flex flex-col justify-between min-h-[280px] ${cardBg}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                    isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                  }`}>
                    <Database className="w-6 h-6" />
                  </div>
                </div>
                <h3 className={`text-xl font-extrabold mb-2 uppercase tracking-tight ${textTitle}`}>Деректер Қоры</h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>SQL, ER-модельдер және реляциялық логика.</p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{SUBJECTS[SubjectId.DB].totalQuestions} сұрақ</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 border-t" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-tight ${textTitle}`}>Неге бізді таңдайды?</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Жедел Аналитика", desc: "Тест соңында әр пән бойынша терең талдау және пайыздық көрсеткішті алыңыз." },
              { icon: Brain, title: "ИИ Көмекшісі", desc: "Әр сұрақтың шығару жолын, теориясын және логикасын түсіндіретін интеллектуалды ИИ ассистент." },
              { icon: MessageSquare, title: "Тұрақты жаңарту", desc: "Сұрақтар базасы және жаңа нұсқалар күн сайын қосылып, жаңартылып отырады." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className={`p-6 sm:p-8 rounded-3xl border transition-all ${cardBg}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${
                  isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'
                }`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold mb-3 uppercase tracking-tight ${textTitle}`}>{feature.title}</h3>
                <p className={`text-xs leading-relaxed ${textMuted}`}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 border-y" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-around gap-10 text-center">
            <div>
              <div className={`text-4xl md:text-5xl font-extrabold mb-2 tracking-tight ${statTextVal}`}>800+</div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Сұрақтар қоры (үнемі артуда)</div>
            </div>
            <div className={`h-10 w-px hidden md:block ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`}></div>
            <div>
              <div className={`text-4xl md:text-5xl font-extrabold mb-2 tracking-tight ${statTextVal}`}>80+</div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Аудио Сабақтар</div>
            </div>
            <div className={`h-10 w-px hidden md:block ${isDarkMode ? 'bg-white/10' : 'bg-slate-200'}`}></div>
            <div>
              <div className={`text-4xl md:text-5xl font-extrabold mb-2 tracking-tight ${statTextVal}`}>4.9/5</div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Пайдаланушы Рейтингі</div>
            </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 relative text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
           <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 border ${
             isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
           }`}>
              <Award className="w-8 h-8" />
           </div>
           <h2 className={`text-4xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase ${textTitle}`}>
             Грантқа бір <br/> қадам қалды.
           </h2>
           <p className="text-slate-500 text-sm md:text-base mb-10 max-w-sm font-medium">Өз мүмкіндігіңді бүгін сынап көр.</p>
           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-base shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95 uppercase tracking-wider"
           >
             Тегін бастау
           </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t relative z-10" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div>
                 <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                     <GraduationCap className="text-white w-5 h-5" />
                   </div>
                   <span className={`text-lg font-extrabold tracking-tight uppercase ${textTitle}`}>Magis<span className="text-blue-500">Core</span></span>
                 </div>
                 <p className="text-slate-500 text-xs leading-relaxed font-medium">Біз сізге армандаған оқу орныңызға түсуге көмектесеміз. Ең озық технологиялар мен тиімді дайындық методикасы.</p>
              </div>

              <div>
                 <h4 className={`font-extrabold mb-6 uppercase tracking-widest text-[9px] ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>Платформа</h4>
                 <nav className="flex flex-col gap-4 font-bold text-slate-500 text-xs">
                    <button className="text-left hover:text-blue-500 transition-colors">Ағылшын тілі</button>
                    <button className="text-left hover:text-blue-500 transition-colors">Оқу сауаттылығы</button>
                    <button className="text-left hover:text-blue-500 transition-colors">Информатика</button>
                 </nav>
              </div>

              <div>
                 <h4 className={`font-extrabold mb-6 uppercase tracking-widest text-[9px] ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>Ресурстар</h4>
                 <nav className="flex flex-col gap-4 font-bold text-slate-500 text-xs">
                    <button onClick={onViewProgram} className="text-left hover:text-blue-500 transition-colors flex items-center gap-1.5">Спецификация <ExternalLink className="w-3 h-3"/></button>
                    <button className="text-left hover:text-blue-500 transition-colors">Статистика</button>
                    <button className="text-left hover:text-blue-500 transition-colors">Сұрақ-жауап</button>
                 </nav>
              </div>

              <div>
                 <h4 className={`font-extrabold mb-6 uppercase tracking-widest text-[9px] ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>Байланыс</h4>
                 <p className={`font-bold text-sm mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>help@magiscore.kz</p>
                 <div className="flex gap-3">
                    {[1,2,3].map(i => (
                      <div key={i} className={`w-8 h-8 border rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                        isDarkMode ? 'border-slate-800 text-slate-500 hover:border-slate-700 hover:text-slate-400' : 'border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600'
                      }`}>
                        <Star className="w-3.5 h-3.5" />
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t gap-6" style={{ borderColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)' }}>
              <div className="text-[9px] uppercase font-bold tracking-widest text-slate-500">
                © 2026 MAGISCORE. PROUDLY DEVELOPED IN KZ.
              </div>
              <div className="flex gap-8">
                 <a href="#" className="text-[9px] font-bold text-slate-500 hover:text-blue-500 transition-colors uppercase tracking-wider">Privacy Policy</a>
                 <a href="#" className="text-[9px] font-bold text-slate-500 hover:text-blue-500 transition-colors uppercase tracking-wider">Terms of Use</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomeScreen;