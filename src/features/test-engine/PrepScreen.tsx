import React, { useState } from 'react';
import { motion, AnimatePresence } from '../../components/ui/Motion';
import {
  GraduationCap, Globe, Brain, Database, Zap, BookOpen,
  Award, Info, FileCheck, ExternalLink, Layers, ShieldCheck, Sparkles
} from 'lucide-react';
import { getSavedUser, UserProfile } from '../../services/authService';
import { SPECIALTIES } from '../../../data/specialties';
import { getSpecialtyIconByCode } from '../../utils/specialtyIcons';
import { useTheme } from '../../app/ThemeContext';
import SEO from '../../components/ui/SEO';

interface PrepScreenProps {
  onBack: () => void;
}

const PrepScreen: React.FC<PrepScreenProps> = ({ onBack }) => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<'structure' | 'topics' | 'certifications'>('structure');
  
  // User profile & specialty selection
  const currentUser: UserProfile | null = getSavedUser();
  const selectedSpec = SPECIALTIES.find(s => s.code === currentUser?.specialty_code);
  const specialtyCode = selectedSpec?.code || 'M094';
  
  const profile1Name = selectedSpec?.profile1 || '1-бейіндік пән';
  const profile2Name = selectedSpec?.profile2 || '2-бейіндік пән';

  // Subject structure with unified specialty icons
  const subjectsInfo = [
    { 
      id: 'english', 
      renderIcon: (className = 'w-5 h-5') => <Globe className={className} />, 
      name: 'Шет тілі (Ағылшын тілі)', 
      questions: 50, 
      score: 50, 
      scoringRule: '1 сұрақ = 1 балл',
      desc: 'Тыңдалым (16), Лексика-Грамматика (18), Оқылым (16)' 
    },
    { 
      id: 'tgo', 
      renderIcon: (className = 'w-5 h-5') => <Brain className={className} />, 
      name: 'Оқуға дайындығын анықтау тесті (ТГО)', 
      questions: 30, 
      score: 30, 
      scoringRule: '1 сұрақ = 1 балл',
      desc: 'Сыни ойлау (15) және Аналитикалық ойлау (15)' 
    },
    { 
      id: 'profile1', 
      renderIcon: (className = 'w-5 h-5') => getSpecialtyIconByCode(specialtyCode, className), 
      name: `1-бейіндік пән: ${profile1Name}`, 
      questions: 30, 
      score: 30, 
      scoringRule: '1 сұрақ = 1 балл',
      desc: 'Ішкі бөлімдерге бөлінбейді' 
    },
    { 
      id: 'profile2', 
      renderIcon: (className = 'w-5 h-5') => getSpecialtyIconByCode(specialtyCode, className), 
      name: `2-бейіндік пән: ${profile2Name}`, 
      questions: 20, 
      score: 40, 
      scoringRule: '1 сұрақ = 2 балл',
      desc: 'Ішкі бөлімдерге бөлінбейді' 
    }
  ];

  // Ultra-clean Sub-sections (Official ҰТО breakdown)
  const subjectSubSections: Record<string, Array<{ title: string; questions: string; score: string }>> = {
    english: [
      { title: "Тыңдалым (Listening)", questions: "16 сұрақ", score: "16 балл" },
      { title: "Лексика-Грамматика", questions: "18 сұрақ", score: "18 балл" },
      { title: "Оқылым (Reading)", questions: "16 сұрақ", score: "16 балл" }
    ],
    tgo: [
      { title: "Сыни ойлау", questions: "15 сұрақ", score: "15 балл" },
      { title: "Аналитикалық ойлау", questions: "15 сұрақ", score: "15 балл" }
    ],
    profile1: [], // Бөлімдерге бөлінбейді!
    profile2: []  // Бөлімдерге бөлінбейді!
  };

  // Language Certificates Exemption List
  const certExemptions = [
    { name: "IELTS Academic", points: "КТ-ға конвертацияланады", note: "Тек Academic форматы қабылданады." },
    { name: "TOEFL iBT", points: "КТ-ға конвертацияланады", note: "Ресми TOEFL iBT сертификаты." },
    { name: "Неміс тілі (DSH, TestDaF)", points: "Шет тілін алмастырады", note: "DSH немесе TestDaF B2." },
    { name: "Француз тілі (DELF, DALF, TCF)", points: "Шет тілін алмастырады", note: "DELF, DALF немесе TCF." },
  ];

  // Theme styles
  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textSecondary = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-400';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm';
  const subCardBg = isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200/80';

  return (
    <div className={`${textPrimary} transition-colors duration-300 relative overflow-x-hidden selection:bg-blue-500/30 select-text`}>
      <SEO
        title="Дайындық"
        description="Кешенді тестілеуге дайындық жоспары. Пәндер бойынша бағдарлама, тақырыптар және оқу материалдары."
        canonical="https://magis-core.vercel.app/prep"
      />

      {/* Main Content */}
      <div className="max-w-5xl relative z-10">
        
        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight italic ${textPrimary}`}>
            Магистратура КТ Құрылымы
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center border-b mb-8 overflow-x-auto ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
          <div className="flex gap-4 sm:gap-6 min-w-max">
            {[
              { id: 'structure', icon: Info, label: 'КТ Құрылымы' },
              { id: 'topics', icon: Layers, label: 'Пәндер & Бөлімдер' },
              { id: 'certifications', icon: FileCheck, label: 'Сертификаттар' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 pb-3 text-xs font-black uppercase tracking-wider transition relative ${
                  activeTab === tab.id ? 'text-blue-500' : `${textMuted} hover:${textSecondary}`
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="activePrepTabUnderline" className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">

          {/* ─── 1. STRUCTURE TAB ─── */}
          {activeTab === 'structure' && (
            <motion.div
              key="structure"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Барлық сұрақ", val: "130 сұрақ", desc: "Шет тілі (50), ТГО (30), 1-Бейіндік (30), 2-Бейіндік (20)", bg: isDarkMode ? "bg-blue-500/5 border-blue-500/20" : "bg-blue-50/60 border-blue-200" },
                  { label: "Макс. балл", val: "150 балл", desc: "2-бейіндік пән сұрақтары 2 баллдан", bg: isDarkMode ? "bg-purple-500/5 border-purple-500/20" : "bg-purple-50/60 border-purple-200" },
                  { label: "Тест уақыты", val: "235 минут", desc: "3 сағат 55 минут", bg: isDarkMode ? "bg-emerald-500/5 border-emerald-500/20" : "bg-emerald-50/60 border-emerald-200" },
                  { label: "Грант шегі", val: "≥ 75 балл", desc: "Шет тілі ≥ 25 балл, өзге пәндер ≥ 7 балл", bg: isDarkMode ? "bg-amber-500/5 border-amber-500/20" : "bg-amber-50/60 border-amber-200" }
                ].map((stat, i) => (
                  <div key={i} className={`p-4 rounded-2xl border ${stat.bg}`}>
                    <span className="text-[9px] uppercase font-black tracking-widest text-blue-500 block mb-0.5">{stat.label}</span>
                    <h3 className={`text-xl sm:text-2xl font-black ${textPrimary}`}>{stat.val}</h3>
                    <p className={`text-[11px] font-medium leading-tight mt-1 ${textMuted}`}>{stat.desc}</p>
                  </div>
                ))}
              </div>

              {/* Main Subjects List */}
              <div className={`rounded-3xl border p-5 md:p-6 ${cardBg}`}>
                <h3 className={`text-base font-black uppercase tracking-tight mb-4 flex items-center gap-2 ${textPrimary}`}>
                  <Award className="text-blue-500 w-5 h-5" /> Пәндер мен Балдар Құрылымы
                </h3>
                <div className="space-y-3">
                  {subjectsInfo.map((subj, idx) => (
                    <div key={idx} className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${subCardBg}`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${
                          isDarkMode ? 'bg-blue-500/10 border-blue-500/25 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                        }`}>
                          {subj.renderIcon('w-5 h-5')}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className={`font-black text-sm ${textPrimary}`}>{subj.name}</h4>
                            <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black">
                              {subj.scoringRule}
                            </span>
                          </div>
                          <p className={`text-xs mt-0.5 font-medium ${textSecondary}`}>{subj.desc}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 shrink-0 text-right self-end sm:self-center">
                        <span className={`text-xs font-extrabold ${textPrimary}`}>{subj.questions} сұрақ</span>
                        <span className="text-xs font-black text-blue-500">{subj.score} балл</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thresholds */}
              <div className={`rounded-3xl border p-5 md:p-6 ${cardBg}`}>
                <h3 className={`text-base font-black uppercase tracking-tight mb-3 flex items-center gap-2 ${textPrimary}`}>
                  <ShieldCheck className="text-emerald-500 w-5 h-5" /> Минималды өту шектері
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className={`p-3.5 rounded-xl border ${subCardBg}`}>
                    <span className="text-blue-500 font-black block">Шет тілі</span>
                    <span className={`font-bold ${textPrimary}`}>Кемінде 25 балл (50-ден)</span>
                  </div>
                  <div className={`p-3.5 rounded-xl border ${subCardBg}`}>
                    <span className="text-purple-500 font-black block">ТГО</span>
                    <span className={`font-bold ${textPrimary}`}>Кемінде 7 балл (30-дан)</span>
                  </div>
                  <div className={`p-3.5 rounded-xl border ${subCardBg}`}>
                    <span className="text-emerald-500 font-black block">Бейіндік пәндер</span>
                    <span className={`font-bold ${textPrimary}`}>Кемінде 7 балл (әрқайсысы)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── 2. TOPICS TAB ─── */}
          {activeTab === 'topics' && (
            <motion.div
              key="topics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              {subjectsInfo.map((subj, i) => {
                const subSections = subjectSubSections[subj.id] || [];
                const isProfile = subj.id === 'profile1' || subj.id === 'profile2';

                return (
                  <div key={i} className={`rounded-3xl border p-5 flex flex-col justify-between ${cardBg}`}>
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-dashed border-slate-700/40">
                        <div className="flex items-center gap-2.5">
                          {subj.renderIcon('w-5 h-5 text-blue-500 shrink-0')}
                          <h3 className={`text-sm font-black uppercase ${textPrimary}`}>{subj.name}</h3>
                        </div>
                      </div>

                      {/* Render sub-sections or single profile card */}
                      {isProfile ? (
                        <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${subCardBg}`}>
                          <div>
                            <h4 className={`font-black text-xs ${textPrimary}`}>Тұтас пән (Бөлімге бөлінбейді)</h4>
                            <p className={`text-[11px] font-medium mt-0.5 ${textMuted}`}>
                              {subj.id === 'profile1' ? '30 сұрақ • 30 балл' : '20 сұрақ • 40 балл'}
                            </p>
                          </div>
                          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black shrink-0 ${
                            subj.id === 'profile1' 
                              ? 'bg-blue-500/10 border border-blue-500/25 text-blue-500' 
                              : 'bg-purple-500/10 border border-purple-500/25 text-purple-500'
                          }`}>
                            {subj.scoringRule}
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-2.5">
                          {subSections.map((section, sIdx) => (
                            <div key={sIdx} className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${subCardBg}`}>
                              <h4 className={`font-black text-xs ${textPrimary}`}>{section.title}</h4>
                              <div className="flex items-center gap-2 text-xs font-black shrink-0">
                                <span className="text-blue-500">{section.questions}</span>
                                <span className={textMuted}>•</span>
                                <span className="text-purple-500">{section.score}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* ─── 3. CERTIFICATIONS TAB ─── */}
          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Exemption Header Banner */}
              <div className={`p-5 rounded-3xl border flex items-start gap-3.5 ${
                isDarkMode ? 'bg-emerald-950/30 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
              }`}>
                <FileCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className={`text-base font-black uppercase ${textPrimary}`}>
                    Халықаралық Сертификаттарды Конвертациялау (ҰТО)
                  </h3>
                  <p className={`text-xs leading-relaxed font-medium ${textSecondary}`}>
                    Халықаралық тіл сертификаты КТ-дағы <strong>Шет тілі блогының нәтижесін ҰТО конвертация шкаласы бойынша алмастырады</strong>. Сертификаты бар талапкер КТ күні шет тілі емтиханын тапсырмайды.
                  </p>
                </div>
              </div>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certExemptions.map((cert, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl border flex flex-col justify-between space-y-2 ${cardBg}`}>
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-black ${textPrimary}`}>{cert.name}</h4>
                      <span className="text-xs font-black text-emerald-500">{cert.points}</span>
                    </div>
                    <p className={`text-xs font-medium ${textMuted}`}>{cert.note}</p>
                  </div>
                ))}
              </div>

              {/* Rules summary */}
              <div className={`p-5 rounded-3xl border space-y-3 ${cardBg}`}>
                <h4 className={`text-xs font-black uppercase tracking-wider ${textPrimary}`}>
                  Маңызды ҰТО Талаптары:
                </h4>
                <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium ${textSecondary}`}>
                  <li className="flex items-center gap-2">✓ КТ өтінішін бергенде сертификат деректерін енгізесіз.</li>
                  <li className="flex items-center gap-2">✓ IELTS бойынша тек <strong>IELTS Academic</strong> қабылданады.</li>
                  <li className="flex items-center gap-2">✓ Қабылдау комиссиясы сертификат түпнұсқасын тексереді.</li>
                  <li className="flex items-center gap-2">✓ Магистратура грантына өту шегі — <strong>≥ 75 балл</strong>.</li>
                </ul>
                <div className="pt-1 flex justify-end">
                  <a href="https://testcenter.kz/?page_id=25198" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-500 hover:underline">
                    <span>ҰТО Ресми Конвертация Ережелері (testcenter.kz)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default PrepScreen;
