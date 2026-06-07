import React, { useState, useEffect, useMemo } from 'react';
import { Question, SubjectId, UserAnswers } from '../types';
import { SUBJECTS } from '../constants';
import { ChevronDown, ChevronUp, CheckCircle, XCircle, Trophy, Home, RotateCcw, BookOpen, TrendingUp, Target, BarChart3, BrainCircuit, AlertTriangle } from 'lucide-react';
import { saveTestResult } from '../services/authService';
import { calculateTestResult, scoreQuestion } from '../services/scoringService';
import { getAiExplanation, AiQuestionContext } from '../services/apiService';
import MarkdownRenderer from './MarkdownRenderer';
import CodeAwareText from './CodeAwareText';
import ReportModal from './modals/ReportModal';

interface ResultScreenProps {
  questions: Question[];
  answers: UserAnswers;
  onRestart: () => void;
  onPracticeWrong?: (wrongQuestions: Question[]) => void;
  userName: string;
}

const buildAiQuestionContext = (question: Question): AiQuestionContext => ({
  subjectId: question.subjectId,
  topic: question.topic,
  questionType: question.type,
  context: question.context,
  readingPassage: question.readingPassage,
  codeSnippet: question.codeSnippet,
  chartData: question.chartData,
});

const TOPIC_NAMES: Record<string, string> = {
  'critical_thinking': 'Сыни ойлау',
  'analytical_thinking': 'Аналитикалық ойлау',
  'listening': 'Тыңдалым',
  'reading': 'Оқылым',
  'grammar': 'Грамматика / Лексика',
  'db_er': 'ER-модельдеу',
  'db_sql': 'SQL сұраныстары',
  'db_theory': 'Мәліметтер базасының теориясы',
  'algo_cpp': 'C++ негіздері',
  'algo_ds': 'Мәліметтер құрылымы',
  'algo_graphs': 'Графтар алгоритмі',
  'algo_complexity': 'Алгоритмдік күрделілік'
};

const calculateCEFRLevel = (levelStats: Record<string, { correct: number; total: number }>): string => {
  const getPercentage = (level: string) => {
    const stats = levelStats[level];
    if (!stats || stats.total === 0) return 100;
    return (stats.correct / stats.total) * 100;
  };
  const a1Pct = getPercentage('A1');
  const a2Pct = getPercentage('A2');
  const b1Pct = getPercentage('B1');
  const b2Pct = getPercentage('B2');
  const cPct = getPercentage('C');

  if (a1Pct >= 90 && a2Pct >= 80 && b1Pct >= 70 && b2Pct >= 60 && cPct >= 50) return 'C1';
  if (a1Pct >= 80 && a2Pct >= 70 && b1Pct >= 60 && b2Pct >= 50) return 'B2';
  if (a1Pct >= 70 && a2Pct >= 60 && b1Pct >= 50) return 'B1';
  if (a1Pct >= 50 && a2Pct >= 50) return 'A2';
  if (a1Pct >= 50) return 'A1';
  return 'Pre-A1';
};

const ResultScreen: React.FC<ResultScreenProps> = ({ questions, answers, onRestart, onPracticeWrong, userName }) => {
  const [expandedSubject, setExpandedSubject] = useState<SubjectId | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [aiExplanations, setAiExplanations] = useState<Record<string, string>>({});
  const [reportQuestion, setReportQuestion] = useState<{ id: string; text: string } | null>(null);
  const testResult = useMemo(() => calculateTestResult(questions, answers), [questions, answers]);

  const handleRequestExplanation = async (
    question: Question,
    opts: string[], 
    correctOpts: string[], 
    userAns: string[]
  ) => {
    const qId = question.id;
    if (aiExplanations[qId] && !aiExplanations[qId].startsWith('Қателік')) return;
    
    setAiExplanations(prev => ({ ...prev, [qId]: 'Жүктелуде... (ИИ жауап дайындап жатыр)' }));
    try {
      const expl = await getAiExplanation(
        question.text,
        opts,
        correctOpts,
        userAns,
        buildAiQuestionContext(question)
      );
      setAiExplanations(prev => ({ ...prev, [qId]: expl }));
    } catch (err: any) {
      setAiExplanations(prev => ({ ...prev, [qId]: `Қателік: ${err.message || 'AI жауап бере алмады.'}` }));
    }
  };

  const subjectResults = Object.values(SUBJECTS).map(subject => {
    const subjectQuestions = questions.filter(q => q.subjectId === subject.id);
    let correctCount = 0;
    let score = 0;
    let maxScore = 0;
    const topicStats: Record<string, { correct: number; total: number }> = {};
    
    subjectQuestions.forEach(q => {
      const scored = scoreQuestion(q, answers[q.id] || []);
      const isCorrect = scored.correct;
      
      if (isCorrect) correctCount++;
      score += scored.score;
      maxScore += scored.max;
      
      if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, total: 0 };
      topicStats[q.topic].total++;
      if (isCorrect) topicStats[q.topic].correct++;
    });

    return { subject, total: subjectQuestions.length, correct: correctCount, score, maxScore, questions: subjectQuestions, topicStats };
  });

  const totalScore = testResult.totalScore;
  const maxScore = testResult.maxScore;

  useEffect(() => {
    const saveResults = async () => {
      try {
        setIsSaving(true);
        const qIds = questions.map(q => q.id);
        await saveTestResult(testResult, qIds, answers);
      } catch (error) {
        console.error("Failed to save results:", error);
      } finally {
        setIsSaving(false);
      }
    };
    saveResults();
  }, [testResult, questions, answers]);

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-20">
      <header className="bg-[#348FE2] text-white py-10 shadow-lg text-center">
        <Trophy className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
        <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">Тест нәтижесі</h1>
        <p className="text-xl text-blue-100 font-light">{userName}, құттықтаймыз!</p>
      </header>

      <div className="max-w-5xl mx-auto px-4 -mt-8">
        {/* Total Score Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white">
          <div className="text-center md:text-left">
            <div className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-2">Жалпы нәтиже</div>
            <div className="text-7xl font-black text-slate-900 leading-none">
              {totalScore} <span className="text-3xl text-gray-300 font-normal">/ {maxScore}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold shadow-sm">
                Ұпай: {totalScore}
              </span>
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-bold shadow-sm">
                Жоғалтқан: {maxScore - totalScore}
              </span>
            </div>
          </div>
          
          <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-100" strokeWidth="4" />
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-blue-500" strokeWidth="4" 
                strokeDasharray={`${(totalScore/maxScore)*100}, 100`} strokeLinecap="round" transform="rotate(-90 18 18)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-black text-blue-600">
              {Math.round((totalScore/maxScore)*100)}%
            </div>
          </div>
        </div>
        
        {/* PRO Analytics: Subject & Topic Breakdown */}
        <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-blue-500" />
          Тереңдетілген аналитика
        </h2>

        <div className="grid gap-6">
          {subjectResults.map((result) => (
            <div key={result.subject.id} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 group">
              <div 
                onClick={() => setExpandedSubject(expandedSubject === result.subject.id ? null : result.subject.id)}
                className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-800 mb-2">{result.subject.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(result.topicStats).map(([topic, stats]) => (
                      <div key={topic} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold border border-blue-100">
                        {TOPIC_NAMES[topic] || topic}: {stats.correct}/{stats.total}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600">
                      {result.score} <span className="text-sm text-gray-300">/ {result.maxScore}</span>
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ұпай</div>
                  </div>
                  {expandedSubject === result.subject.id ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>

              {expandedSubject === result.subject.id && (
                <div className="p-6 bg-slate-50 border-t border-gray-100">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {Object.entries(result.topicStats).map(([topic, stats]) => {
                       const pct = Math.round((stats.correct / stats.total) * 100);
                       return (
                         <div key={topic} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                           <div className="flex justify-between items-center mb-3">
                             <span className="font-bold text-slate-700">{TOPIC_NAMES[topic] || topic}</span>
                             <span className={`text-sm font-black ${pct >= 70 ? 'text-green-600' : pct >= 40 ? 'text-orange-500' : 'text-red-500'}`}>
                               {stats.correct} / {stats.total}
                             </span>
                           </div>
                           <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                             <div className={`h-full transition-all duration-1000 ${pct >= 70 ? 'bg-green-500' : pct >= 40 ? 'bg-orange-500' : 'bg-red-500'}`}
                               style={{ width: `${pct}%` }} />
                           </div>
                         </div>
                       );
                     })}
                   </div>

                   {/* Answer Matrix */}
                   <div className="mt-8 overflow-x-auto">
                     <table className="w-full text-xs font-bold">
                        <thead>
                          <tr className="text-gray-400 uppercase tracking-widest border-b border-gray-200">
                            <th className="py-3 text-left">Сұрақ:</th>
                            {result.questions.map((_, i) => <th key={i} className="px-2 text-center">{i+1}</th>)}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-4 text-slate-500">Нәтиже:</td>
                            {result.questions.map((q, i) => {
                              const isCorrect = scoreQuestion(q, answers[q.id] || []).correct;
                              return (
                                <td key={i} className="px-2 text-center">
                                  {isCorrect ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-400 mx-auto" />}
                                </td>
                              );
                            })}
                          </tr>
                        </tbody>
                     </table>
                   </div>

                   {/* Detailed Questions Review */}
                   <div className="mt-8 space-y-6">
                     <h4 className="text-lg font-black text-slate-800 mb-4 border-b pb-2 flex items-center gap-2">
                       <BrainCircuit className="w-5 h-5 text-indigo-500" />
                       Сұрақтарды талдау:
                     </h4>
                     {result.questions.map((q, qIdx) => {
                       const userAns = answers[q.id] || [];
                       const scoreRes = scoreQuestion(q, userAns);
                       const isCorrect = scoreRes.correct;
                       
                       const userOptionTexts = q.options
                         .filter(o => userAns.includes(o.id))
                         .map(o => o.text);
                         
                       const correctOptionTexts = q.options
                         .filter(o => q.correctOptionIds.includes(o.id))
                         .map(o => o.text);

                       return (
                         <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4 text-left">
                           <div className="flex justify-between items-start gap-4">
                             <div className="font-bold text-slate-800 text-base leading-relaxed">
                               Сұрақ №{qIdx + 1}: <CodeAwareText text={q.text} />
                             </div>
                             <span className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                               {isCorrect ? 'Дұрыс' : 'Қате'} ({scoreRes.score}/{scoreRes.max} балл)
                             </span>
                           </div>

                           {q.codeSnippet && (
                             <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto text-left">
                               {q.codeSnippet}
                             </pre>
                           )}

                           <div className="grid gap-2 pl-4 border-l-2 border-slate-100">
                             {q.options.map((opt, optIdx) => {
                               const letter = String.fromCharCode(65 + optIdx);
                               const isOptSelected = userAns.includes(opt.id);
                               const isOptCorrect = q.correctOptionIds.includes(opt.id);

                               let optClass = "text-slate-600";
                               if (isOptCorrect) {
                                 optClass = "text-green-600 font-bold";
                               } else if (isOptSelected && !isOptCorrect) {
                                 optClass = "text-red-500 font-semibold";
                               }

                               return (
                                 <div key={opt.id} className={`text-sm flex items-start gap-2 ${optClass}`}>
                                   <span>{letter}) <CodeAwareText text={opt.text} /></span>
                                   {isOptCorrect && <span className="text-xs text-green-500 font-bold">(Дұрыс жауап)</span>}
                                   {isOptSelected && <span className="text-xs text-blue-500 font-bold">(Сіздің жауабыңыз)</span>}
                                 </div>
                               );
                             })}
                           </div>

                           {/* Actions Section */}
                           <div className="pt-2 border-t border-slate-100 flex flex-row flex-wrap gap-2">
                             <button
                               onClick={() => handleRequestExplanation(q, q.options.map(o => o.text), correctOptionTexts, userOptionTexts)}
                               className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all"
                             >
                               <BookOpen className="w-4 h-4" />
                               Нейрожелі түсіндірмесі (AI)
                             </button>
                             <button
                               onClick={() => setReportQuestion({ id: q.id, text: q.text })}
                               className="inline-flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all"
                             >
                               <AlertTriangle className="w-4 h-4" />
                               Қате туралы хабарлау
                             </button>
                           </div>

                           {aiExplanations[q.id] && (
                             <div className="mt-3 bg-indigo-50/50 border border-indigo-100/80 rounded-xl p-5 text-slate-800 text-sm whitespace-pre-wrap leading-relaxed shadow-inner text-left">
                               <div className="flex items-center gap-2 text-indigo-700 font-bold mb-2 text-xs uppercase tracking-wider">
                                 <BrainCircuit className="w-4 h-4" />
                                 ИИ Мұғалім жауабы:
                               </div>
                               <MarkdownRenderer content={aiExplanations[q.id]} />
                             </div>
                           )}
                         </div>
                       );
                     })}
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
           <button onClick={onRestart} className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition">
             <RotateCcw /> Қайта тапсыру
           </button>
           <button onClick={() => window.location.reload()} className="flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition">
             <Home /> Басты бет
           </button>
        </div>

        <ReportModal 
          isOpen={!!reportQuestion}
          onClose={() => setReportQuestion(null)}
          questionId={reportQuestion?.id || ''}
          questionText={reportQuestion?.text || ''}
        />
      </div>
    </div>
  );
};

export default ResultScreen;
