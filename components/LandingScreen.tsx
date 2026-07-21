import React, { useState, useEffect } from 'react';
import {
  GraduationCap, Zap, BarChart2, Target, ArrowRight,
  CheckCircle, BookOpen, Brain, Shield, Award, ChevronRight,
  Moon, Sun, TrendingUp
} from 'lucide-react';

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
  { num: '1', icon: <Zap className="w-5 h-5" />, title: 'Симулятор тест', desc: 'НАФЫС МКТ форматына сай 150 сұрақтан тұратын толық симуляциялық емтихан.' },
  { num: '2', icon: <BarChart2 className="w-5 h-5" />, title: 'Терең талдау', desc: 'Қате жіберген тақырыптар мен пәндерді автоматты анықтайды.' },
  { num: '3', icon: <Brain className="w-5 h-5" />, title: 'ИИ Тьютор', desc: 'Жауаптарды қадамдық түсіндіреді, мысалдар мен ережені дәлелдейді.' },
  { num: '4', icon: <Award className="w-5 h-5" />, title: 'Жоғары балл', desc: 'Жүйелі дайындық арқылы грантқа түсуге ең жоғары мүмкіндік.' },
];

const FEATURES = [
  { icon: <CheckCircle className="w-4 h-4" />, title: 'Барлық мамандықтар', desc: '133 мамандық тобы бойынша спецификациялар' },
  { icon: <CheckCircle className="w-4 h-4" />, title: 'ҰТО спецификациясына сай', desc: 'Ресми нұсқаулықпен толық сәйкес' },
  { icon: <CheckCircle className="w-4 h-4" />, title: '125+ ЖОО деректері', desc: 'Univision.kz-дан алынған актуал ақпарат' },
  { icon: <CheckCircle className="w-4 h-4" />, title: 'Нәтиже аналитикасы', desc: 'Тарих, диаграммалар, қате талдауы' },
];

const SPECIALTIES_PREVIEW = [
  { code: 'M094', label: 'Ақпараттық Технологиялар', color: 'blue',    icon: <Zap className="w-4 h-4" /> },
  { code: 'M095', label: 'Ақпараттық Қауіпсіздік',  color: 'purple',  icon: <Shield className="w-4 h-4" /> },
  { code: 'M001', label: 'Педагогика & Психология',  color: 'emerald', icon: <GraduationCap className="w-4 h-4" /> },
  { code: 'M070', label: 'Экономика & Бизнес',       color: 'amber',   icon: <TrendingUp className="w-4 h-4" /> },
  { code: 'M021', label: 'Медицина & Фармакология',  color: 'rose',    icon: <Target className="w-4 h-4" /> },
  { code: 'M030', label: 'Заң Ғылымдары',            color: 'indigo',  icon: <BookOpen className="w-4 h-4" /> },
];

const iconBg: Record<string, string> = {
  blue:    'bg-blue-500/10 text-blue-400',
  purple:  'bg-purple-500/10 text-purple-400',
  emerald: 'bg-emerald-500/10 text-emerald-400',
  amber:   'bg-amber-500/10 text-amber-400',
  rose:    'bg-rose-500/10 text-rose-400',
  indigo:  'bg-indigo-500/10 text-indigo-400',
};

const pillColor: Record<string, string> = {
  blue:    'bg-blue-500/10 text-blue-500 border-blue-500/20',
  purple:  'bg-purple-500/10 text-purple-500 border-purple-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  amber:   'bg-amber-500/10 text-amber-500 border-amber-500/20',
  rose:    'bg-rose-500/10 text-rose-500 border-rose-500/20',
  indigo:  'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
};

const LandingScreen: React.FC<LandingScreenProps> = ({ onLogin, onRegister }) => {
  const [isDark, setIsDark] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCount(c => c < 133 ? c + 3 : 133), 20);
    return () => clearInterval(t);
  }, []);

  const bg      = isDark ? 'bg-[#07090d]' : 'bg-gray-50';
  const cardBg  = isDark ? 'bg-[#0f1219] border-slate-800' : 'bg-white border-slate-200 shadow-sm';
  const text    = isDark ? 'text-white'   : 'text-slate-900';
  const muted   = isDark ? 'text-slate-400' : 'text-slate-500';
  const navBg   = isDark ? 'bg-[#07090d]/90 border-slate-800' : 'bg-white/90 border-slate-200';
  const altBg   = isDark ? 'bg-[#0a0c12] border-slate-800' : 'bg-white border-slate-200';

  return (
    <div className={`min-h-screen ${bg} font-sans transition-colors duration-300`}>

      {/* ── Navbar ── */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b ${navBg} transition-colors`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className={`font-black text-base tracking-tight ${text}`}>
              Magis<span className="text-blue-500">Core</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#how" className={`${muted} hover:text-blue-500 transition-colors`}>Қалай жұмыс істейді</a>
            <a href="#features" className={`${muted} hover:text-blue-500 transition-colors`}>Мүмкіндіктер</a>
            <a href="#specialties" className={`${muted} hover:text-blue-500 transition-colors`}>Мамандықтар</a>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setIsDark(d => !d)}
              className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all ${isDark ? 'border-slate-700 text-slate-400 hover:text-white' : 'border-slate-200 text-slate-500 hover:text-slate-800'}`}>
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <button onClick={onLogin}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-all ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-100'}`}>
              Кіру
            </button>
            <button onClick={onRegister}
              className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-500 transition-all active:scale-95">
              Тіркелу
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-[11px] font-black uppercase tracking-wider border-blue-500/30 bg-blue-500/10 text-blue-400">
            <Zap className="w-3 h-3" /> Магистратура дайындығының ең тиімді платформасы
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-5 ${text}`}>
            МКТ-ға дайындалудың{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">ең тиімді</span>{' '}
            платформасы
          </h1>

          <p className={`text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 ${muted}`}>
            Магистратура КТ форматына сай симулятор тесттер, ИИ тьютор және
            133 мамандықтың ресми спецификациялары. Грантқа бірге түсейік.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-10">
            <button onClick={onRegister}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-wider hover:bg-blue-500 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
              Тегін бастау <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onLogin}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl border font-black text-sm uppercase tracking-wider transition-all active:scale-95 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-100'}`}>
              Платформаға кіру
            </button>
          </div>

          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="flex -space-x-2">
              {['🎓','📚','🏆','⚡'].map((e,i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 border-2 border-[#07090d] flex items-center justify-center text-xs">{e}</div>
              ))}
            </div>
            <p className={`text-xs font-bold ${muted}`}><span className="text-blue-400 font-black">1 000+</span> студент бізді таңдады</p>
          </div>
        </div>

        {/* Hero Smartphone Mockup */}
        <div className="flex-1 w-full max-w-md lg:max-w-xl flex items-center justify-center relative">
          <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
          <img
            src="/smartphone-mockup.png"
            alt="MagisCore Smartphone App Mockup"
            className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_20px_50px_rgba(37,99,235,0.25)] hover:scale-[1.02] transition-transform duration-500"
          />
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
            <div key={label}>
              <p className={`text-3xl font-black mb-1 ${text}`}>{value}</p>
              <p className={`text-xs font-bold uppercase tracking-widest ${muted}`}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-black uppercase tracking-tight mb-2 ${text}`}>Платформа қалай жұмыс істейді?</h2>
          <p className={`text-sm ${muted}`}>4 қадамда грантқа дайындалу жолы</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOW_IT_WORKS.map(({ num, icon, title, desc }) => (
            <div key={num} className={`p-6 rounded-3xl border relative overflow-hidden transition-all hover:-translate-y-1 ${cardBg}`}>
              <span className={`absolute top-3 right-4 text-7xl font-black select-none ${isDark ? 'text-white/[0.03]' : 'text-slate-900/[0.04]'}`}>{num}</span>
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border mb-5 relative z-10 ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'}`}>{icon}</div>
              <h3 className={`text-sm font-black uppercase tracking-tight mb-2 relative z-10 ${text}`}>{title}</h3>
              <p className={`text-xs leading-relaxed relative z-10 ${muted}`}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className={`border-y ${altBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`text-3xl font-black uppercase tracking-tight mb-3 ${text}`}>Неге бізді таңдайды?</h2>
            <p className={`text-sm leading-relaxed mb-8 ${muted}`}>МКТ-ға сапалы дайындық үшін барлық жағдай жасалған. Біз тек тест қана емес, білім беру экожүйесіміз.</p>
            <div className="space-y-4">
              {FEATURES.map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <p className={`text-sm font-black ${text}`}>{title}</p>
                    <p className={`text-xs ${muted} mt-0.5`}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KT Format Card */}
          <div className={`rounded-3xl border p-6 ${cardBg}`}>
            <h3 className={`text-xs font-black uppercase tracking-widest mb-4 ${muted}`}>Магистратура КТ Форматы</h3>
            <div className="space-y-3">
              {[
                { label: 'Ағылшын тілі',   pct: 33, count: '50 сұрақ', color: 'bg-blue-500' },
                { label: 'ТҒО (ОДАТ)',       pct: 20, count: '30 сұрақ', color: 'bg-violet-500' },
                { label: '1-Бейіндік пән',   pct: 23, count: '35 сұрақ', color: 'bg-emerald-500' },
                { label: '2-Бейіндік пән',   pct: 23, count: '35 сұрақ', color: 'bg-amber-500' },
              ].map(({ label, pct, count: c, color }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold ${text}`}>{label}</span>
                    <span className={`text-xs font-black ${muted}`}>{c}</span>
                  </div>
                  <div className={`h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct * 2}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className={`mt-5 pt-4 border-t flex items-center justify-between ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
              <div><p className={`text-2xl font-black ${text}`}>150</p><p className={`text-[10px] font-bold uppercase ${muted}`}>Барлық сұрақ</p></div>
              <div><p className={`text-2xl font-black ${text}`}>230</p><p className={`text-[10px] font-bold uppercase ${muted}`}>Минут таймер</p></div>
              <button onClick={onRegister} className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-black uppercase hover:bg-blue-500 transition-all active:scale-95">Бастау</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialties ── */}
      <section id="specialties" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-10">
          <h2 className={`text-3xl font-black uppercase tracking-tight mb-2 ${text}`}>133 Мамандық тобы</h2>
          <p className={`text-sm ${muted}`}>Барлық мамандықтар бойынша ресми ҰТО спецификациялары</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {SPECIALTIES_PREVIEW.map(({ code, label, color, icon }) => (
            <div key={code} className={`p-5 rounded-2xl border flex items-center gap-4 transition-all hover:-translate-y-0.5 ${cardBg}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg[color]}`}>{icon}</div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-black ${text}`}>{label}</p>
                <p className={`text-[10px] ${muted}`}>{code} · Толық спецификация</p>
              </div>
              <ChevronRight className={`w-4 h-4 ${muted} shrink-0`} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={onRegister}
            className={`px-8 py-3 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all active:scale-95 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-700 hover:bg-slate-100'}`}>
            Барлық 133 мамандықты көру →
          </button>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-violet-700 p-10 sm:p-14 text-center">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-widest text-blue-200 mb-3">Магистратура дайындығы</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">Грантқа бірге түсейік!</h2>
            <p className="text-sm text-blue-100 mb-8 max-w-md mx-auto">Тіркелу тегін. Симулятор тестті бүгін-ақ тапсырып, өз деңгейіңізді анықтаңыз.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={onRegister} className="px-10 py-4 rounded-2xl bg-white text-blue-600 font-black text-sm uppercase tracking-wider hover:bg-blue-50 transition-all active:scale-95 shadow-xl">Тегін тіркелу</button>
              <button onClick={onLogin} className="px-10 py-4 rounded-2xl border border-white/30 text-white font-black text-sm uppercase tracking-wider hover:bg-white/10 transition-all active:scale-95">Кіру</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={`border-t py-8 ${bg} ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-3 h-3 text-white" />
            </div>
            <span className={`font-black uppercase ${text}`}>Magis<span className="text-blue-500">Core</span> Student Hub</span>
          </div>
          <p className="font-bold uppercase tracking-widest">© 2026 MAGISCORE. PROUDLY DEVELOPED IN KZ.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingScreen;
