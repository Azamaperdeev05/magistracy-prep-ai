import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, GraduationCap, Globe, Brain, Database, Zap, BookOpen, 
  Target, Calculator, Award, Info, FileText, CheckCircle2, ChevronRight, HelpCircle
} from 'lucide-react';

interface PrepScreenProps {
  onBack: () => void;
}

const PrepScreen: React.FC<PrepScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'structure' | 'topics' | 'tools'>('structure');
  
  // Calculator states
  const [calcEng, setCalcEng] = useState(35);
  const [calcTgo, setCalcTgo] = useState(20);
  const [calcAlgo, setCalcAlgo] = useState(20);
  const [calcDb, setCalcDb] = useState(15);
  
  // Projected score calculation
  const totalScore = calcEng + calcTgo + calcAlgo + calcDb;
  
  const getFeedback = (score: number) => {
    if (score >= 120) return { text: "🔥 Грантқа 100% мүмкіндік! Өте жоғары көрсеткіш.", color: "text-emerald-400" };
    if (score >= 100) return { text: "✨ Грант алу мүмкіндігі өте жоғары. Дайындықты босатпаңыз!", color: "text-blue-400" };
    if (score >= 75) return { text: "👍 Шекті баллдан өттіңіз (Ақылы бөлімге мүмкіндік бар). Грант үшін тағы 15-20 балл қажет.", color: "text-yellow-400" };
    return { text: "⚠️ Назар аударыңыз! Шекті баллға (75 балл) жету үшін дайындықты күшейту қажет.", color: "text-red-400" };
  };

  const feedback = getFeedback(totalScore);

  const subjectsInfo = [
    { id: 'english', icon: Globe, name: 'Шет тілі (Ағылшын)', questions: 50, score: 50, desc: 'Listening (Аудирование), Reading (Мәтінді оқу және талдау), Lexis & Grammar (Лексика-грамматикалық тест).' },
    { id: 'tgo', icon: Brain, name: 'Оқу сауаттылығы (ТГО)', questions: 30, score: 30, desc: 'Мәтіндік ақпаратты талдау, логикалық қорытынды жасау, сыни тұрғыдан ойлау.' },
    { id: 'algo', icon: Zap, name: 'Алгоритмдер және құрылымдар', questions: 30, score: 30, desc: 'Бағдарламалау тілдері, сызықтық құрылымдар, ағаштар, графтар, сұрыптаулар.' },
    { id: 'db', icon: Database, name: 'Деректер базасы (SQL)', questions: 20, score: 40, desc: 'Реляциялық модель, SQL сұраныстары, қалыпқа келтіру (1NF-3NF), транзакциялар.' }
  ];

  const syllabusTopics = {
    english: [
      { title: "Listening (Тыңдалым)", desc: "Күнделікті және академиялық тақырыптардағы аудио мәтіндерді түсіну, негізгі идеяны анықтау." },
      { title: "Reading (Оқылым)", desc: "Академиялық мақалалар мен мәтіндерді жылдам оқу, сұрақтарға жауап беру, контекстік сөздерді табу." },
      { title: "Grammar & Vocabulary", desc: "Tenses (Шақтар), Passives, Conditionals, Modals, Academic vocabulary, Prefixes & Suffixes." }
    ],
    tgo: [
      { title: "Мәтіндік талдау", desc: "Мәтіннің негізгі мазмұнын, автордың мақсатын және жанама ақпаратты анықтау." },
      { title: "Логикалық есептер", desc: "Сандар мен фигуралар арасындағы заңдылықтар, комбинаторика, ықтималдықтар теориясы." },
      { title: "Теңсіздіктер мен теңдеулер", desc: "Пропорциялар, пайыздық есептер, қозғалыс пен жұмысқа қатысты математикалық есептер." }
    ],
    algo: [
      { title: "Бағдарламалау негіздері", desc: "Бағдарламалау тілінің синтаксисі, айнымалылар, шарттар мен циклдер, рекурсия." },
      { title: "Деректер құрылымы", desc: "Сызықтық құрылымдар (стэк, кезек, байланысқан тізім), Хеш-кестелер, Ағаштар мен Үйінділер." },
      { title: "Графтар және Алгоритмдер", desc: "Графтар теориясы, тереңдікке/еніне қарай іздеу, ең қысқа жолды табу (Dijkstra), сұрыптаулар." }
    ],
    db: [
      { title: "Реляциялық модель", desc: "Қатынастар (Relations), атрибуттар мен кортеждер, тұтастық шектеулері." },
      { title: "SQL негіздері", desc: "SELECT сұраныстары, сүзу (WHERE), топтастыру (GROUP BY), JOIN біріктіру түрлері." },
      { title: "Базаны жобалау және қалыпқа келтіру", desc: "ER-диаграммалары, 1NF, 2NF, 3NF және BCNF нормальды формалары, транзакциялар және оқшаулану." }
    ]
  };

  return (
    <div className="min-h-screen bg-[#07090d] text-[#f8fafc] overflow-x-hidden relative">
      {/* Background decoration */}
      <div className="absolute overflow-hidden inset-0 pointer-events-none z-0">
        <div className="blob w-[600px] h-[600px] bg-blue-600/5 top-[-100px] -left-[100px]" />
        <div className="blob w-[500px] h-[500px] bg-purple-600/5 bottom-[10%] -right-[100px]" />
      </div>

      {/* Header */}
      <header className="border-b border-white/5 py-6 sticky top-0 bg-[#07090d]/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-400 hover:text-white glass border-white/5 rounded-xl transition"
          >
            <ArrowLeft className="w-4 h-4" /> Артқа
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src="/logo no bg, white.svg" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-md font-extrabold tracking-tight uppercase">Magis<span className="text-blue-500">Core</span></span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/25 rounded-full mb-6">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-wider text-blue-400">КТ Дайындық орталығы</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase italic">Магистратураға Кәсіби Дайындық</h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Кешенді Тестілеу (КТ) құрылымы, маңызды тақырыптар, сұрақтар картасы және емтихан ұпайын алдын ала есептеуге арналған ақылды құралдар жиынтығы.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center border-b border-white/5 mb-12">
          <div className="flex gap-8">
            {[
              { id: 'structure', icon: Info, label: 'КТ Құрылымы' },
              { id: 'topics', icon: FileText, label: 'Сұрақтар мен Тақырыптар' },
              { id: 'tools', icon: Calculator, label: 'Ақылды Құралдар' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 pb-4 font-bold text-sm tracking-wide transition relative ${
                  activeTab === tab.id ? 'text-blue-500' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === 'structure' && (
            <motion.div
              key="structure"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Exam Info Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Жалпы сұрақ саны", val: "130 сұрақ", desc: "Ағылшын тілі, ТГО және бейіндік пәндер", bg: "bg-blue-600/5 border-blue-500/20" },
                  { label: "Максималды балл", val: "150 балл", desc: "Деректер базасы сұрақтары 2 баллдан", bg: "bg-purple-600/5 border-purple-500/20" },
                  { label: "Тест уақыты", val: "240 минут", desc: "4 сағат үздіксіз емтихан уақыты", bg: "bg-emerald-500/5 border-emerald-500/20" },
                  { label: "Шекті балл (Грант)", val: "75 балл", desc: "Әр пән бойынша ең кемі 7 балл", bg: "bg-yellow-500/5 border-yellow-500/20" }
                ].map((stat, i) => (
                  <div key={i} className={`p-6 rounded-2xl border ${stat.bg}`}>
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">{stat.label}</span>
                    <h3 className="text-3xl font-black my-2">{stat.val}</h3>
                    <p className="text-xs text-slate-400">{stat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Subject Structure Table */}
              <div className="glass border-white/5 rounded-3xl p-6 md:p-8">
                <h3 className="text-2xl font-black mb-6 uppercase flex items-center gap-3">
                  <Award className="text-blue-500 w-6 h-6" /> Пәндер және балдар құрылымы
                </h3>
                <div className="space-y-6">
                  {subjectsInfo.map((subj, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 rounded-2xl hover:bg-white/5 transition border border-transparent hover:border-white/5 gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                          <subj.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-md">{subj.name}</h4>
                          <p className="text-xs text-slate-400 mt-1 max-w-xl">{subj.desc}</p>
                        </div>
                      </div>
                      <div className="flex gap-8 text-right shrink-0 pr-4 w-full md:w-auto justify-end border-t md:border-0 border-white/5 pt-4 md:pt-0">
                        <div>
                          <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Сұрақ саны</span>
                          <div className="text-md font-bold text-white mt-0.5">{subj.questions} сұрақ</div>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Макс. балл</span>
                          <div className="text-md font-bold text-blue-400 mt-0.5">{subj.score} балл</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'topics' && (
            <motion.div
              key="topics"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {subjectsInfo.map((subj, i) => (
                <div key={i} className="glass border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                        <subj.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold uppercase">{subj.name}</h3>
                    </div>
                    
                    <div className="space-y-5">
                      {syllabusTopics[subj.id as keyof typeof syllabusTopics]?.map((topic, tIdx) => (
                        <div key={tIdx} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-sm text-slate-200">{topic.title}</h4>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{topic.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'tools' && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Interactive Score Calculator */}
              <div className="lg:col-span-7 glass border-white/5 rounded-3xl p-6 md:p-8">
                <h3 className="text-2xl font-black mb-2 uppercase flex items-center gap-3">
                  <Calculator className="text-blue-500 w-6 h-6" /> Ұпай болжау калькуляторы
                </h3>
                <p className="text-slate-500 text-xs mb-8">
                  Әр пән бойынша қанша сұраққа дұрыс жауап бере алатыныңызды енгізіп, КТ грант мүмкіндігін тексеріңіз.
                </p>

                <div className="space-y-6">
                  {/* English Input */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold mb-2">
                      <span className="text-slate-300">Ағылшын тілі (макс. 50 сұрақ/балл)</span>
                      <span className="text-blue-400">{calcEng} балл</span>
                    </div>
                    <input 
                      type="range" min="0" max="50" value={calcEng} 
                      onChange={(e) => setCalcEng(parseInt(e.target.value))}
                      className="w-full accent-blue-500 bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
                    />
                  </div>

                  {/* TGO Input */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold mb-2">
                      <span className="text-slate-300">Оқу сауаттылығы / ТГО (макс. 30 сұрақ/балл)</span>
                      <span className="text-blue-400">{calcTgo} балл</span>
                    </div>
                    <input 
                      type="range" min="0" max="30" value={calcTgo} 
                      onChange={(e) => setCalcTgo(parseInt(e.target.value))}
                      className="w-full accent-blue-500 bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
                    />
                  </div>

                  {/* Algo Input */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold mb-2">
                      <span className="text-slate-300">Алгоритмдер мен құрылымдар (макс. 30 сұрақ/балл)</span>
                      <span className="text-blue-400">{calcAlgo} балл</span>
                    </div>
                    <input 
                      type="range" min="0" max="30" value={calcAlgo} 
                      onChange={(e) => setCalcAlgo(parseInt(e.target.value))}
                      className="w-full accent-blue-500 bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
                    />
                  </div>

                  {/* DB Input */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold mb-2">
                      <span className="text-slate-300">Деректер базасы (макс. 20 сұрақ / 40 балл - әрқайсысы 2 балл)</span>
                      <span className="text-blue-400">{calcDb} сұрақ ({calcDb * 2} балл)</span>
                    </div>
                    <input 
                      type="range" min="0" max="20" value={calcDb} 
                      onChange={(e) => setCalcDb(parseInt(e.target.value))}
                      className="w-full accent-blue-500 bg-white/10 rounded-lg appearance-none h-1.5 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Score Summary Box */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Болжалды ұпай</span>
                    <div className="text-4xl font-black text-white mt-1">
                      {totalScore} <span className="text-sm font-semibold text-slate-500">/ 150 балл</span>
                    </div>
                  </div>
                  <div className="flex-1 text-left sm:text-right">
                    <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Грант статусы</span>
                    <div className={`text-xs font-bold mt-1.5 ${feedback.color}`}>{feedback.text}</div>
                  </div>
                </div>
              </div>

              {/* Prep Tools Sidebar */}
              <div className="lg:col-span-5 space-y-6">
                <div className="glass border-white/5 rounded-3xl p-6 md:p-8">
                  <h3 className="text-lg font-bold uppercase mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-indigo-400" /> Талдау және Кеңестер
                  </h3>
                  <ul className="space-y-4 text-xs text-slate-400 font-medium">
                    <li className="flex gap-2">
                      <span className="text-blue-500 font-bold select-none">•</span>
                      <span><strong>Деректер базасының маңызы:</strong> Деректер базасы сұрақтарының саны 20 болғанымен, әр сұраққа <strong>2 балл</strong> беріледі! Бұл емтихан балының 27%-ын құрайды.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500 font-bold select-none">•</span>
                      <span><strong>Ағылшын шегі:</strong> Ағылшын тілінен өту үшін ең кемі 7 балл жинау міндетті, бірақ оның балы жалпы грант ұпайына толық қосылады.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500 font-bold select-none">•</span>
                      <span><strong>Уақытты үнемдеу:</strong> Алдымен оқу сауаттылығы мен ағылшын тілін жылдам орындап, қалған уақытты қиын алгоритмдік кодтар мен SQL сұрақтарына қалдыру ұсынылады.</span>
                    </li>
                  </ul>
                </div>

                <div className="glass border-white/5 rounded-3xl p-6 md:p-8 bg-blue-600/5 border-blue-500/20">
                  <h3 className="text-lg font-bold uppercase mb-3 text-blue-400 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" /> Дайындық Құралдары
                  </h3>
                  <p className="text-slate-400 text-xs mb-6">
                    Емтихан тапсырмаларын талдауға және жылдам қайталауға арналған көмекші интерактивті парақтар:
                  </p>
                  
                  <div className="space-y-3">
                    <a 
                      href="/program/db" 
                      className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-slate-200 transition group"
                    >
                      <span>💾 Деректер базасы тақырыптары мен анықтамалары</span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition" />
                    </a>
                    <a 
                      href="/program/algo" 
                      className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-slate-200 transition group"
                    >
                      <span>💻 Алгоритмдік терминдер мен код мысалдары</span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition" />
                    </a>
                    <a 
                      href="/history" 
                      className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-slate-200 transition group"
                    >
                      <span>📊 Нұсқа талдау және бұрынғы қателермен жұмыс</span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default PrepScreen;
