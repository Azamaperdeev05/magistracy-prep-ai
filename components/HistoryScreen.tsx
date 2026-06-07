import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  History, 
  Trash2, 
  ChevronRight, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Loader2,
  ArrowLeft,
  Search,
  BookOpen,
  BrainCircuit,
  CheckCircle,
  XCircle,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';
import { getHistory, deleteHistoryItem, HistoryItem } from '../services/authService';
import { STATIC_QUESTIONS } from '../data/questions';
import { Question } from '../types';
import { scoreQuestion } from '../services/scoringService';
import { getAiExplanation } from '../services/apiService';
import MarkdownRenderer from './MarkdownRenderer';
import CodeAwareText from './CodeAwareText';
import ReportModal from './modals/ReportModal';
import ConfirmModal from './modals/ConfirmModal';

interface HistoryScreenProps {
  onBack: () => void;
}

const HistoryScreen: React.FC<HistoryScreenProps> = ({ onBack }) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Confirm/Alert Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    message: string;
    onConfirm: () => void;
    isAlert?: boolean;
    title?: string;
    confirmText?: string;
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

  const showConfirm = (message: string, onConfirm: () => void, confirmText: string = 'Иә, өшіру') => {
    setModalConfig({
      message,
      onConfirm,
      isAlert: false,
      title: 'Назар аударыңыз!',
      confirmText
    });
    setModalOpen(true);
  };
  
  // Drill-down State
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);
  const [aiExplanations, setAiExplanations] = useState<Record<string, string>>({});
  const [loadingExplanations, setLoadingExplanations] = useState<Record<string, boolean>>({});
  const [reportQuestion, setReportQuestion] = useState<{ id: string; text: string } | null>(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setIsLoading(true);
      const data = await getHistory();
      setHistory(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening detail view when clicking delete
    showConfirm('Бұл нәтижені өшіргіңіз келе ме?', async () => {
      try {
        await deleteHistoryItem(id);
        setHistory(prev => prev.filter(item => item.id !== id));
        if (selectedItem?.id === id) {
          setSelectedItem(null);
        }
      } catch (err: any) {
        showAlert(err.message || 'Деректерді өшіру кезінде қате орын алды');
      }
    }, 'Өшіру');
  };

  const handleRequestExplanation = async (
    q: Question,
    options: string[],
    correctOptions: string[],
    userAnswer?: string[]
  ) => {
    if (aiExplanations[q.id]) return;
    setLoadingExplanations(prev => ({ ...prev, [q.id]: true }));
    try {
      const explanation = await getAiExplanation(
        q.text,
        options,
        correctOptions,
        userAnswer,
        {
          subjectId: q.subjectId,
          topic: q.topic,
          questionType: q.type,
          context: q.context,
          readingPassage: q.readingPassage,
          codeSnippet: q.codeSnippet,
          chartData: q.chartData,
        }
      );
      setAiExplanations(prev => ({ ...prev, [q.id]: explanation }));
    } catch (err: any) {
      setAiExplanations(prev => ({ ...prev, [q.id]: `Қателік: ${err.message || 'AI жауап бере алмады.'}` }));
    } finally {
      setLoadingExplanations(prev => ({ ...prev, [q.id]: false }));
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('kk-KZ', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredHistory = history.filter(item => {
    const dateStr = formatDate(item.created_at).toLowerCase();
    return dateStr.includes(searchQuery.toLowerCase());
  });

  // Reconstruct test questions and answers from IDs
  const reconstructedData = () => {
    if (!selectedItem) return null;
    
    try {
      const questionIds: string[] = JSON.parse(selectedItem.questions_data || '[]');
      const answers: Record<string, string[]> = JSON.parse(selectedItem.answers_data || '{}');
      
      const questions = questionIds
        .map(id => STATIC_QUESTIONS.find(q => q.id === id))
        .filter(Boolean) as Question[];
        
      return { questions, answers };
    } catch (e) {
      console.error("Error parsing history detailed data:", e);
      return null;
    }
  };

  const detailInfo = reconstructedData();

  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* ====== DETAIL SCREEN ====== */}
        {selectedItem ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => { setSelectedItem(null); setAiExplanations({}); }}
                className="p-2 hover:bg-slate-800/50 rounded-full transition-colors border border-slate-800"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold flex items-center gap-2">
                  Тапсырылған сұрақтарды талдау
                </h1>
                <p className="text-slate-400 text-xs">{formatDate(selectedItem.created_at)}</p>
              </div>
            </div>

            {/* Score Banner */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-[50px] -top-10 -right-10" />
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-2xl bg-blue-500/10 text-blue-500`}>
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Тест Нәтижесі</h3>
                  <h2 className="text-3xl font-black text-white mt-1">
                    {selectedItem.total_score} / {selectedItem.max_score} ұпай
                  </h2>
                  <p className="text-slate-400 text-sm mt-1">
                    {selectedItem.correct_count} дұрыс жауап | {selectedItem.total_questions} жалпы сұрақ саны
                  </p>
                </div>
              </div>
              <div className="text-left md:text-right bg-slate-900/80 md:bg-transparent border border-slate-800 md:border-none rounded-2xl p-4 md:p-0">
                <div className="text-4xl font-black text-blue-400">
                  {Math.round((selectedItem.total_score / selectedItem.max_score) * 100)}%
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-1">Табыстылық көрсеткіші</div>
              </div>
            </div>

            {/* Answer Matrix */}
            {detailInfo && detailInfo.questions.length > 0 && (
              <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-6 mb-8 text-left">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Сұрақтар торшасы (өту үшін нөмірді басыңыз):</h4>
                <div className="flex flex-wrap gap-2.5">
                  {detailInfo.questions.map((q, i) => {
                    const userAns = detailInfo.answers[q.id] || [];
                    const isCorrect = scoreQuestion(q, userAns).correct;
                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          const element = document.getElementById(`q-history-review-${q.id}`);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }
                        }}
                        className={`
                          w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-sm transition-all active:scale-95 hover:scale-105 shrink-0
                          ${isCorrect 
                            ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-950/20' 
                            : 'bg-rose-500 hover:bg-rose-600 shadow-rose-950/20'}
                        `}
                        title={`Сұрақ №${i + 1}`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Questions List */}
            {(!detailInfo || detailInfo.questions.length === 0) ? (
              <div className="text-center py-16 bg-slate-900/20 border border-dashed border-slate-800 rounded-2xl">
                <HelpCircle className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-400">Егжей-тегжейлі деректер жоқ</h3>
                <p className="text-slate-500 max-w-xs mx-auto mt-2 text-sm">
                  Бұл ескі нұсқада тапсырылған тест нәтижесі. Сұрақтардың ID тізімі бұлтта сақталмаған.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {detailInfo.questions.map((q, qIdx) => {
                  const userAns = detailInfo.answers[q.id] || [];
                  const scoreRes = scoreQuestion(q, userAns);
                  const isCorrect = scoreRes.correct;
                  
                  const userOptionTexts = q.options
                    .filter(o => userAns.includes(o.id))
                    .map(o => o.text);
                    
                  const correctOptionTexts = q.options
                    .filter(o => q.correctOptionIds.includes(o.id))
                    .map(o => o.text);

                  return (
                    <div key={q.id} id={`q-history-review-${q.id}`} className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 space-y-4 text-left relative overflow-hidden scroll-mt-20">
                      <div className="flex justify-between items-start gap-4">
                        <div className="font-bold text-slate-200 text-base leading-relaxed">
                          Сұрақ №{qIdx + 1}: <CodeAwareText text={q.text} />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
                          isCorrect ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}>
                          {isCorrect ? 'Дұрыс' : 'Қате'} ({scoreRes.score}/{scoreRes.max} балл)
                        </span>
                      </div>

                      {q.codeSnippet && (
                        <pre className="bg-black/50 text-slate-100 p-4 rounded-lg font-mono text-xs overflow-x-auto text-left border border-slate-800/80">
                          {q.codeSnippet}
                        </pre>
                      )}

                      {/* Options List */}
                      <div className="grid gap-2.5 pl-4 border-l-2 border-slate-800/60">
                        {q.options.map((opt, optIdx) => {
                          const letter = String.fromCharCode(65 + optIdx);
                          const isOptSelected = userAns.includes(opt.id);
                          const isOptCorrect = q.correctOptionIds.includes(opt.id);

                          let optClass = "text-slate-400";
                          let wrapClass = "";
                          if (isOptCorrect) {
                            optClass = "text-emerald-400 font-bold";
                            wrapClass = "bg-emerald-500/5 border border-emerald-500/10 p-2.5 rounded-xl";
                          } else if (isOptSelected && !isOptCorrect) {
                            optClass = "text-rose-400 font-semibold";
                            wrapClass = "bg-rose-500/5 border border-rose-500/10 p-2.5 rounded-xl";
                          } else if (isOptSelected) {
                            wrapClass = "bg-slate-800/20 border border-slate-800/50 p-2.5 rounded-xl";
                          }

                          return (
                            <div key={opt.id} className={`text-sm flex items-center justify-between gap-4 ${wrapClass}`}>
                              <span className={optClass}>{letter}) <CodeAwareText text={opt.text} /></span>
                              <div className="flex gap-2 shrink-0">
                                {isOptCorrect && <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md font-bold">Дұрыс жауап</span>}
                                {isOptSelected && <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-md font-bold">Сіздің таңдауыңыз</span>}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Actions Section */}
                      <div className="pt-2 border-t border-slate-800 flex flex-row flex-wrap gap-2">
                        <button
                          onClick={() => handleRequestExplanation(q, q.options.map(o => o.text), correctOptionTexts, userOptionTexts)}
                          disabled={loadingExplanations[q.id]}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all disabled:opacity-50"
                        >
                          {loadingExplanations[q.id] ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <BookOpen className="w-3.5 h-3.5" />
                          )}
                          Нейрожелі түсіндірмесі (AI)
                        </button>
                        <button
                          onClick={() => setReportQuestion({ id: q.id, text: q.text })}
                          className="inline-flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all"
                        >
                          <AlertTriangle className="w-4 h-4" />
                          Қате туралы хабарлау
                        </button>

                        {aiExplanations[q.id] && (
                          <div className="mt-3 bg-indigo-500/5 border border-indigo-500/10 rounded-xl p-5 text-slate-300 text-sm whitespace-pre-wrap leading-relaxed shadow-inner text-left">
                            <div className="flex items-center gap-2 text-indigo-400 font-bold mb-2.5 text-xs uppercase tracking-wider">
                              <BrainCircuit className="w-4 h-4" />
                              ИИ Мұғалім талдауы:
                            </div>
                            <MarkdownRenderer content={aiExplanations[q.id]} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* ====== LIST SCREEN ====== */
          <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={onBack}
                  className="p-2 hover:bg-slate-800/50 rounded-full transition-colors border border-slate-800"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-2xl font-bold flex items-center gap-2">
                    <History className="w-6 h-6 text-blue-500" />
                    Менің нәтижелерім
                  </h1>
                  <p className="text-slate-400 text-sm">Барлық тапсырылған тесттер тарихы</p>
                </div>
              </div>

              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="text"
                  placeholder="Күн бойынша іздеу..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all w-full md:w-64"
                />
              </div>
            </div>

            {/* Content */}
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                <p className="text-slate-400">Тарих жүктелуде...</p>
              </div>
            ) : error ? (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-center">
                {error}
                <button onClick={fetchHistory} className="block mx-auto mt-2 text-sm underline">Қайталау</button>
              </div>
            ) : filteredHistory.length === 0 ? (
              <div className="text-center py-20 bg-slate-900/20 border border-dashed border-slate-800 rounded-2xl">
                <History className="w-16 h-16 text-slate-800 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-300">Тарих бос</h3>
                <p className="text-slate-500 max-w-xs mx-auto mt-2">
                  Сіз әлі тест тапсырмағансыз. Тест тапсырған соң нәтижелер осында көрінеді.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                <AnimatePresence mode='popLayout'>
                  {filteredHistory.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedItem(item)}
                      className="group relative bg-slate-900/40 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 md:p-6 transition-all cursor-pointer hover:bg-slate-900/60"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${
                            item.total_score / item.max_score >= 0.7 
                              ? 'bg-emerald-500/10 text-emerald-500' 
                              : 'bg-blue-500/10 text-blue-500'
                          }`}>
                            <Award className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Calendar className="w-3.5 h-3.5 text-slate-500" />
                              <span className="text-sm font-medium text-slate-300">
                                {formatDate(item.created_at)}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white">
                              Ұпай: {item.total_score} / {item.max_score}
                            </h3>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                                {item.correct_count} дұрыс жауап
                              </span>
                              <span className="text-xs text-slate-600">|</span>
                              <span className="text-xs text-slate-400">
                                {item.total_questions} сұрақ барлығы
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right hidden md:block mr-4">
                            <div className="text-2xl font-black text-blue-500/50">
                              {Math.round((item.total_score / item.max_score) * 100)}%
                            </div>
                            <div className="text-[10px] uppercase tracking-wider text-slate-600 font-bold">Табыстылық</div>
                          </div>
                          <button
                            onClick={(e) => handleDelete(item.id, e)}
                            className="p-2.5 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all border border-transparent hover:border-red-500/20"
                            title="Өшіру"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <div className="p-2.5 text-slate-500 group-hover:text-white rounded-xl transition-all border border-transparent group-hover:border-slate-700">
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Progress Bar (Decorative) */}
                      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-slate-800/50 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.total_score / item.max_score) * 100}%` }}
                          className={`h-full ${
                             item.total_score / item.max_score >= 0.7 ? 'bg-emerald-500' : 'bg-blue-500'
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}
      </div>

      <ReportModal 
        isOpen={!!reportQuestion}
        onClose={() => setReportQuestion(null)}
        questionId={reportQuestion?.id || ''}
        questionText={reportQuestion?.text || ''}
      />

      {modalConfig && (
        <ConfirmModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={modalConfig.onConfirm}
          message={modalConfig.message}
          title={modalConfig.title}
          isAlert={modalConfig.isAlert}
          confirmText={modalConfig.confirmText}
        />
      )}
    </div>
  );
};

export default HistoryScreen;
