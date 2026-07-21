import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from './Motion';
import { 
  History, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  Calendar, 
  Award, 
  CheckCircle2, 
  Loader2,
  ArrowLeft,
  Search,
  BookOpen,
  BrainCircuit,
  HelpCircle,
  AlertTriangle,
  Trophy,
  TrendingUp,
  ChevronLeft,
  Sparkles,
  Zap,
  Globe,
  Brain,
  Database,
  Share2,
  Check,
  X,
  Lock,
  UserPlus,
  ShieldCheck,
  Volume2,
  FileText
} from 'lucide-react';
import AudioPlayer from './AudioPlayer';
import ChartRenderer from './ChartRenderer';
import { getHistory, getHistoryItemById, HistoryItem, loginWithGoogle } from '../services/authService';
import { findQuestionsByIds } from '../data/questions';
import { Question } from '../types';
import { scoreQuestion } from '../services/scoringService';
import { getAiExplanation } from '../services/apiService';
import MarkdownRenderer from './MarkdownRenderer';
import CodeAwareText from './CodeAwareText';
import ReportModal from './modals/ReportModal';
import ConfirmModal from './modals/ConfirmModal';

interface HistoryScreenProps {
  onBack: () => void;
  isGuest?: boolean;
  onAuthSuccess?: (user: any) => void;
}

const HistoryScreen: React.FC<HistoryScreenProps> = ({ onBack, isGuest = false, onAuthSuccess }) => {
  const { historyId } = useParams<{ historyId?: string }>();
  const navigate = useNavigate();

  const [isDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCardKey, setExpandedCardKey] = useState<string | null>(null);
  
  // Share & Notification State
  const [copied, setCopied] = useState(false);

  // Guest Mode Click Tracking & Auth Modals (Persisted in localStorage so F5 refresh does not bypass!)
  const [guestClickCount, setGuestClickCount] = useState<number>(() => {
    if (!isGuest) return 0;
    const saved = localStorage.getItem('magistracy_guest_clicks');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [showSoftAuthModal, setShowSoftAuthModal] = useState<boolean>(false);
  const [showHardAuthModal, setShowHardAuthModal] = useState<boolean>(() => {
    if (!isGuest) return false;
    const saved = localStorage.getItem('magistracy_guest_clicks');
    const count = saved ? parseInt(saved, 10) : 0;
    return count >= 21;
  });
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);

  // Confirm/Alert Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    message: string;
    onConfirm: () => void;
    isAlert?: boolean;
    title?: string;
    confirmText?: string;
  } | null>(null);

  // Drill-down Detail State
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [selectedSubjectTab, setSelectedSubjectTab] = useState<'all' | 'english' | 'tgo' | 'profile1' | 'profile2'>('all');
  const [aiExplanations, setAiExplanations] = useState<Record<string, string>>({});
  const [loadingExplanations, setLoadingExplanations] = useState<Record<string, boolean>>({});
  const [reportQuestion, setReportQuestion] = useState<{ id: string; text: string } | null>(null);

  // Lazy-loaded questions for selected history item
  const [selectedItemQuestions, setSelectedItemQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (!selectedItem?.questions_data) { setSelectedItemQuestions([]); return; }
    try {
      const qIds: string[] = JSON.parse(selectedItem.questions_data || '[]');
      findQuestionsByIds(qIds).then(setSelectedItemQuestions);
    } catch { setSelectedItemQuestions([]); }
  }, [selectedItem]);

  useEffect(() => {
    fetchHistory();
  }, [historyId]);

  const fetchHistory = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      let userHistory: HistoryItem[] = [];
      if (!isGuest) {
        try {
          userHistory = await getHistory();
          setHistory(userHistory);
        } catch (e) {
          console.warn("Could not fetch user history list:", e);
        }
      }

      const cleanHistoryId = historyId ? historyId.split(/[\s%]/)[0].trim() : undefined;

      if (cleanHistoryId) {
        // 1. Check if item exists in loaded userHistory
        const found = userHistory.find(h => String(h.id) === String(cleanHistoryId));
        if (found) {
          setSelectedItem(found);
        } else {
          // 2. Fetch directly from Firestore by ID (for shared links or direct URLs)
          const directItem = await getHistoryItemById(cleanHistoryId);
          if (directItem) {
            setSelectedItem(directItem);
          } else {
            setError('Бұл тест нәтижесі табылмады немесе өшірілген.');
          }
        }
      } else {
        setSelectedItem(null);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
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

  // Handle question selection with Guest click limits (10th click soft modal, 21st click hard wall)
  const handleSelectQuestion = (newIndex: number) => {
    if (newIndex === activeQuestionIndex) return;

    if (isGuest) {
      const nextCount = guestClickCount + 1;
      setGuestClickCount(nextCount);
      localStorage.setItem('magistracy_guest_clicks', String(nextCount));

      if (nextCount === 10) {
        setShowSoftAuthModal(true);
      } else if (nextCount >= 21) {
        setShowHardAuthModal(true);
        return; // Block navigating beyond 20 clicks until logged in!
      }
    }

    setActiveQuestionIndex(newIndex);
  };

  // Google Authentication trigger from modal
  const handleGoogleAuth = async () => {
    try {
      setIsAuthLoading(true);
      await loginWithGoogle();
    } catch (e: any) {
      console.error("Auth failed:", e);
      setIsAuthLoading(false);
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

  // Status Badge Generator based on Official CT Rules (150 max points)
  const getCtStatusBadge = (score: number, maxScore: number = 150) => {
    if (score >= 75) {
      return {
        label: "🏆 Грант мүмкіндігі жоғары",
        badgeClass: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
        iconClass: "text-emerald-500 bg-emerald-500/10"
      };
    } else if (score >= 50) {
      return {
        label: "✅ Өту шегінен өтті",
        badgeClass: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
        iconClass: "text-blue-500 bg-blue-500/10"
      };
    } else {
      return {
        label: "⚠️ Шектен өтпеді",
        badgeClass: "bg-rose-500/10 text-rose-500 border border-rose-500/20",
        iconClass: "text-rose-500 bg-rose-500/10"
      };
    }
  };

  // Helper to extract subject scores for an item
  const getSubjectScoresFromItem = (item: HistoryItem) => {
    if (item.subject_scores) {
      try {
        const parsed = JSON.parse(item.subject_scores);
        if (typeof parsed === 'object' && parsed !== null && Object.keys(parsed).length > 0) {
          return parsed;
        }
      } catch (e) {}
    }
    // Reconstruct from questions & answers using lazily loaded questions
    try {
      const answers: Record<string, string[]> = JSON.parse(item.answers_data || '{}');
      const questions = selectedItemQuestions;
      
      const result: Record<string, { score: number; max: number }> = {};
      questions.forEach(q => {
        const scored = scoreQuestion(q, answers[q.id] || []);
        const sKey = q.subjectId || 'other';
        if (!result[sKey]) result[sKey] = { score: 0, max: 0 };
        result[sKey].score += scored.score;
        result[sKey].max += scored.max;
      });
      return result;
    } catch (e) {
      return null;
    }
  };

  // Share Test Link
  const handleShareTest = async () => {
    if (!selectedItem) return;
    const shareUrl = `${window.location.origin}/history/${selectedItem.id}`;
    
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      console.error("Failed to copy link:", e);
    }
  };

  // Filtered History
  const filteredHistory = history.filter(item => {
    const dateStr = formatDate(item.created_at).toLowerCase();
    return dateStr.includes(searchQuery.toLowerCase());
  });

  // Overall Student Stats
  const topScore = history.length > 0 ? Math.max(...history.map(h => h.total_score)) : 0;
  const avgScore = history.length > 0 ? Math.round(history.reduce((acc, curr) => acc + curr.total_score, 0) / history.length) : 0;

  // Reconstruct test questions and answers from IDs for detail view
  const reconstructedData = () => {
    if (!selectedItem) return null;
    
    try {
      const answers: Record<string, string[]> = JSON.parse(selectedItem.answers_data || '{}');
      return { questions: selectedItemQuestions, answers };
    } catch (e) {
      console.error("Error parsing history detailed data:", e);
      return null;
    }
  };

  const detailInfo = reconstructedData();

  // Open detail view with unique URL
  const handleOpenDetail = (item: HistoryItem) => {
    setSelectedItem(item);
    setActiveQuestionIndex(0);
    setSelectedSubjectTab('all');
    navigate(`/history/${item.id}`, { replace: false });
  };

  const handleBackFromDetail = () => {
    setSelectedItem(null);
    setAiExplanations({});
    setActiveQuestionIndex(0);
    navigate(isGuest ? '/' : '/history', { replace: false });
  };

  // Subject filter logic for questions grid
  const getFilteredQuestions = () => {
    if (!detailInfo) return [];
    if (selectedSubjectTab === 'all') return detailInfo.questions;
    
    return detailInfo.questions.filter(q => {
      const sId = q.subjectId?.toLowerCase();
      if (selectedSubjectTab === 'english') return sId === 'english';
      if (selectedSubjectTab === 'tgo') return sId === 'tgo';
      if (selectedSubjectTab === 'profile1') return sId === 'profile1' || sId === 'algo';
      if (selectedSubjectTab === 'profile2') return sId === 'profile2' || sId === 'db';
      return true;
    });
  };

  const filteredQuestions = getFilteredQuestions();

  // Theme styles
  const bg = isDarkMode ? 'bg-[#07090d]' : 'bg-slate-50';
  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textSecondary = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-400';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm';
  const subCardBg = isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200/80';
  const btnBg = isDarkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-xs';

  return (
    <div className={`min-h-screen ${bg} ${textPrimary} p-4 md:p-8 transition-colors duration-300 relative selection:bg-blue-500/30 select-text`}>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* ====== DETAIL SCREEN ====== */}
        {selectedItem ? (
          <div className="space-y-6">
            {/* Header with Share Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleBackFromDetail}
                  className={`p-2.5 rounded-xl border transition-all active:scale-95 ${btnBg}`}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h1 className={`text-xl font-black flex items-center gap-2 ${textPrimary}`}>
                    Тестті талдау
                  </h1>
                  <p className={`text-xs ${textMuted}`}>{formatDate(selectedItem.created_at)}</p>
                </div>
              </div>

              {/* Share Link Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShareTest}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-md flex items-center gap-2 transition-all active:scale-95 shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Сілтеме көшірілді!' : 'Сілтемені бөлісу'}</span>
                </button>
              </div>
            </div>

            {/* Notification Toast for Link Copy */}
            {copied && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 p-3 rounded-xl text-xs font-bold flex items-center justify-between"
              >
                <span>✨ Тест нәтижесінің тікелей сілтемесі көшірілді! Кез келген адамға жібере аласыз.</span>
                <Check className="w-4 h-4" />
              </motion.div>
            )}

            {/* Score Banner (Official CT 150 Points Scale) */}
            {(() => {
              const status = getCtStatusBadge(selectedItem.total_score, selectedItem.max_score);
              return (
                <div className={`rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border ${cardBg}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-2xl ${status.iconClass}`}>
                      <Trophy className="w-8 h-8" />
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${status.badgeClass} inline-block mb-2`}>
                        {status.label}
                      </span>
                      <h2 className={`text-3xl font-black ${textPrimary}`}>
                        {selectedItem.total_score} <span className="text-sm font-bold text-slate-400">/ {selectedItem.max_score || 150} балл</span>
                      </h2>
                      <p className={`text-xs mt-1.5 font-medium ${textSecondary}`}>
                        {selectedItem.correct_count} дұрыс жауап | {selectedItem.total_questions} сұрақ барлығы
                      </p>
                    </div>
                  </div>

                  <div className={`text-left sm:text-right rounded-2xl p-4 border ${
                    isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Грант Шегі</div>
                    <div className="text-xl font-black text-emerald-500">≥ 75 балл</div>
                    <div className={`text-[10px] font-medium mt-1 ${textMuted}`}>
                      {selectedItem.total_score >= 75 ? 'Грант конкурсына өтті' : `Тағы ${75 - selectedItem.total_score} балл қажет`}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Organised Subject Filtered Question Matrix (No Overflow!) */}
            {detailInfo && detailInfo.questions.length > 0 && (
              <div className={`rounded-3xl border p-5 text-left space-y-4 ${cardBg}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3 border-slate-700/20">
                  <h4 className={`text-xs font-black uppercase tracking-widest ${textMuted}`}>
                    Сұрақтар торшасы (пән бойынша өту):
                  </h4>

                  {/* Subject Tabs Filter */}
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: 'all', label: 'Барлығы' },
                      { id: 'english', label: 'Шет тілі' },
                      { id: 'tgo', label: 'ТГО' },
                      { id: 'profile1', label: '1-Бейіндік' },
                      { id: 'profile2', label: '2-Бейіндік' },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedSubjectTab(tab.id as any)}
                        className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                          selectedSubjectTab === tab.id
                            ? 'bg-blue-600 text-white shadow-xs'
                            : `${subCardBg} ${textMuted} hover:${textPrimary}`
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question Grid Pills */}
                <div className="flex flex-wrap gap-2">
                  {filteredQuestions.map((q) => {
                    const globalIdx = detailInfo.questions.findIndex(item => item.id === q.id);
                    const userAns = detailInfo.answers[q.id] || [];
                    const isCorrect = scoreQuestion(q, userAns).correct;
                    const isActive = activeQuestionIndex === globalIdx;

                    return (
                      <button
                        key={q.id}
                        onClick={() => handleSelectQuestion(globalIdx)}
                        className={`
                          px-3 py-1.5 rounded-xl flex items-center justify-center text-xs font-black transition-all active:scale-95 shrink-0
                          ${isActive ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-[#07090d] scale-105 shadow-md' : ''}
                          ${isCorrect 
                            ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white' 
                            : 'bg-rose-500/15 text-rose-500 border border-rose-500/30 hover:bg-rose-500 hover:text-white'}
                        `}
                        title={`Сұрақ №${globalIdx + 1}`}
                      >
                        №{globalIdx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ====== SINGLE ACTIVE QUESTION CARD ====== */}
            {detailInfo && detailInfo.questions.length > 0 && (() => {
              const q = detailInfo.questions[activeQuestionIndex];
              if (!q) return null;

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
                <div className={`rounded-3xl border p-6 space-y-5 text-left relative overflow-hidden ${cardBg}`}>
                  
                  {/* Question Header & Navigation */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-700/30">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-xl bg-blue-500/10 text-blue-500 text-xs font-black">
                        Сұрақ №{activeQuestionIndex + 1}
                      </span>
                      <span className={`px-3 py-1 rounded-xl text-xs font-bold ${
                        isCorrect ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                      }`}>
                        {isCorrect ? 'Дұрыс' : 'Қате'} ({scoreRes.score}/{scoreRes.max} балл)
                      </span>
                    </div>

                    {/* Prev / Next Pagination */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleSelectQuestion(Math.max(0, activeQuestionIndex - 1))}
                        disabled={activeQuestionIndex === 0}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-extrabold flex items-center gap-1 transition-all disabled:opacity-30 ${btnBg}`}
                      >
                        <ChevronLeft className="w-4 h-4" /> Алдыңғы
                      </button>
                      <button
                        onClick={() => handleSelectQuestion(Math.min(detailInfo.questions.length - 1, activeQuestionIndex + 1))}
                        disabled={activeQuestionIndex === detailInfo.questions.length - 1}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-extrabold flex items-center gap-1 transition-all disabled:opacity-30 ${btnBg}`}
                      >
                        Келесі <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Context Block */}
                  {q.context && (
                    <div className={`p-4 rounded-2xl border text-xs font-semibold leading-relaxed ${
                      isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-slate-200' : 'bg-blue-50 border-blue-200 text-slate-800'
                    }`}>
                      <span className="text-blue-500 font-bold mr-1">Контекст:</span>
                      <CodeAwareText text={q.context} />
                    </div>
                  )}

                  {/* Audio Player for Listening questions */}
                  {q.audioUrl && (
                    <div className={`p-4 rounded-2xl border ${
                      isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="flex items-center gap-2 text-xs font-extrabold text-blue-500 uppercase tracking-wider mb-2">
                        <Volume2 className="w-4 h-4 animate-pulse" />
                        <span>Аудио-жазбаны тыңдаңыз:</span>
                      </div>
                      <AudioPlayer src={q.audioUrl} />
                    </div>
                  )}

                  {/* TGO & Profile Chart/Infographic Renderer */}
                  {q.chartData && (
                    <div className={`p-5 rounded-2xl border overflow-hidden ${
                      isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                    }`}>
                      <ChartRenderer chartData={q.chartData} />
                    </div>
                  )}

                  {/* Dynamic CHART JSON inside readingPassage */}
                  {q.readingPassage && q.readingPassage.startsWith('CHART:') && (() => {
                    try {
                      const chartDataObj = JSON.parse(q.readingPassage.replace('CHART:', ''));
                      return (
                        <div className={`p-5 rounded-2xl border overflow-hidden ${
                          isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                        }`}>
                          <ChartRenderer chartData={chartDataObj} />
                        </div>
                      );
                    } catch (e) {
                      return null;
                    }
                  })()}

                  {/* Standard Reading Passage Block */}
                  {q.readingPassage && !q.readingPassage.startsWith('CHART:') && (
                    <div className={`p-5 rounded-2xl border space-y-2 text-sm leading-relaxed ${
                      isDarkMode ? 'bg-amber-500/5 border-amber-500/20 text-slate-200' : 'bg-amber-50 border-amber-200 text-slate-800'
                    }`}>
                      <div className="flex items-center gap-2 text-xs font-black text-amber-500 uppercase tracking-wider">
                        <FileText className="w-4 h-4" />
                        <span>Оқылым Мәтіні:</span>
                      </div>
                      <div className="whitespace-pre-line text-xs font-medium leading-relaxed">
                        {q.readingPassage}
                      </div>
                    </div>
                  )}

                  {/* Question Text */}
                  <div className={`font-bold text-base sm:text-lg leading-relaxed ${textPrimary}`}>
                    <CodeAwareText text={q.text} subjectId={q.subjectId} />
                  </div>

                  {/* Code Snippet Block */}
                  {q.codeSnippet && (
                    <pre className={`p-4 rounded-xl font-mono text-xs overflow-x-auto text-left border ${
                      isDarkMode ? 'bg-black/50 border-slate-800 text-slate-100' : 'bg-slate-100 border-slate-300 text-slate-900'
                    }`}>
                      {q.codeSnippet}
                    </pre>
                  )}

                  {/* Options List */}
                  <div className={`grid gap-2.5 pl-4 border-l-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                    {q.options.map((opt, optIdx) => {
                      const letter = String.fromCharCode(65 + optIdx);
                      const isOptSelected = userAns.includes(opt.id);
                      const isOptCorrect = q.correctOptionIds.includes(opt.id);

                      let optClass = textSecondary;
                      let wrapClass = "";
                      if (isOptCorrect) {
                        optClass = "text-emerald-500 font-bold";
                        wrapClass = isDarkMode ? "bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-xl" : "bg-emerald-50 border border-emerald-200 p-3 rounded-xl";
                      } else if (isOptSelected && !isOptCorrect) {
                        optClass = "text-rose-500 font-semibold";
                        wrapClass = isDarkMode ? "bg-rose-500/5 border border-rose-500/10 p-3 rounded-xl" : "bg-rose-50 border border-rose-200 p-3 rounded-xl";
                      } else if (isOptSelected) {
                        wrapClass = isDarkMode ? "bg-slate-800/20 border border-slate-800/50 p-3 rounded-xl" : "bg-slate-100 border border-slate-200 p-3 rounded-xl";
                      }

                      return (
                        <div key={opt.id} className={`text-sm flex items-center justify-between gap-4 ${wrapClass}`}>
                          <span className={optClass}>{letter}) <CodeAwareText text={opt.text} subjectId={q.subjectId} /></span>
                          <div className="flex gap-2 shrink-0">
                            {isOptCorrect && <span className="text-[10px] bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded-md font-bold">Дұрыс жауап</span>}
                            {isOptSelected && <span className="text-[10px] bg-blue-500/10 text-blue-500 border border-blue-500/20 px-2 py-0.5 rounded-md font-bold">Сіздің таңдауыңыз</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Actions Section */}
                  <div className={`pt-3 border-t flex flex-row flex-wrap gap-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                    <button
                      onClick={() => handleRequestExplanation(q, q.options.map(o => o.text), correctOptionTexts, userOptionTexts)}
                      disabled={loadingExplanations[q.id]}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all disabled:opacity-50"
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
                      className={`inline-flex items-center gap-2 border font-bold text-xs px-4 py-2.5 rounded-xl transition-all ${
                        isDarkMode ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/20' : 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200'
                      }`}
                    >
                      <AlertTriangle className="w-4 h-4" />
                      Қате туралы хабарлау
                    </button>

                    {aiExplanations[q.id] && (
                      <div className={`mt-3 border rounded-2xl p-5 text-sm whitespace-pre-wrap leading-relaxed shadow-inner text-left w-full ${
                        isDarkMode ? 'bg-indigo-950/20 border-indigo-500/20 text-slate-300' : 'bg-indigo-50/70 border-indigo-200 text-slate-800'
                      }`}>
                        <div className="flex items-center gap-2 text-indigo-500 font-bold mb-2.5 text-xs uppercase tracking-wider">
                          <BrainCircuit className="w-4 h-4" />
                          ИИ Мұғалім талдауы:
                        </div>
                        <MarkdownRenderer content={aiExplanations[q.id]} />
                      </div>
                    )}
                  </div>

                </div>
              );
            })()}

          </div>
        ) : (
          /* ====== LIST SCREEN ====== */
          <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={onBack}
                  className={`p-2.5 rounded-xl border transition-all active:scale-95 ${btnBg}`}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h1 className={`text-2xl font-black flex items-center gap-2 ${textPrimary}`}>
                    <History className="w-6 h-6 text-blue-500" />
                    КТ Нәтижелері Жұрналы
                  </h1>
                  <p className={`text-xs font-medium ${textMuted}`}>Тапсырылған барлық байқау тестілерінің тарихы</p>
                </div>
              </div>

              {/* Search */}
              <div className="relative flex-1 md:w-64">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${textMuted}`} />
                <input 
                  type="text"
                  placeholder="Күн бойынша іздеу..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full border rounded-xl py-2 pl-10 pr-4 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${
                    isDarkMode ? 'bg-slate-900/50 border-slate-800 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>

            {/* Student Stats Summary Cards */}
            {history.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-amber-500/5 border-amber-500/20' : 'bg-amber-50/70 border-amber-200'}`}>
                  <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block">Рекордтық Балл</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <h3 className={`text-xl font-black ${textPrimary}`}>{topScore} <span className="text-xs font-normal text-slate-400">/ 150</span></h3>
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50/70 border-blue-200'}`}>
                  <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest block">Орташа Балл</span>
                  <div className="flex items-center gap-2 mt-1">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    <h3 className={`text-xl font-black ${textPrimary}`}>{avgScore} <span className="text-xs font-normal text-slate-400">/ 150</span></h3>
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border col-span-2 sm:col-span-1 ${isDarkMode ? 'bg-purple-500/5 border-purple-500/20' : 'bg-purple-50/70 border-purple-200'}`}>
                  <span className="text-[9px] font-black text-purple-500 uppercase tracking-widest block">Барлық тесттер</span>
                  <div className="flex items-center gap-2 mt-1">
                    <Award className="w-5 h-5 text-purple-500" />
                    <h3 className={`text-xl font-black ${textPrimary}`}>{history.length} <span className="text-xs font-normal text-slate-400">тапсырылды</span></h3>
                  </div>
                </div>
              </div>
            )}

            {/* Content List */}
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                <p className={textMuted}>Тарих жүктелуде...</p>
              </div>
            ) : error ? (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-center">
                {error}
                <button onClick={fetchHistory} className="block mx-auto mt-2 text-sm underline">Қайталау</button>
              </div>
            ) : filteredHistory.length === 0 ? (
              <div className={`text-center py-20 border border-dashed rounded-2xl ${subCardBg}`}>
                <History className={`w-16 h-16 mx-auto mb-4 ${textMuted}`} />
                <h3 className={`text-lg font-bold ${textPrimary}`}>Тесттер табылмады</h3>
                <p className={`max-w-xs mx-auto mt-2 text-sm ${textMuted}`}>
                  Іздеу шартына сәйкес келетін нәтижелер табылмады.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                <AnimatePresence mode='popLayout'>
                  {filteredHistory.map((item, index) => {
                    const status = getCtStatusBadge(item.total_score, item.max_score);
                    const itemKey = `${item.id || 0}-${item.created_at || ''}-${index}`;
                    const isExpanded = expandedCardKey === itemKey;
                    const subjectScores = getSubjectScoresFromItem(item);

                    return (
                      <motion.div
                        key={itemKey}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ delay: index * 0.03 }}
                        className={`rounded-2xl border transition-all overflow-hidden ${cardBg}`}
                      >
                        {/* Main Summary Header Row (Click to Expand) */}
                        <div 
                          onClick={() => setExpandedCardKey(isExpanded ? null : itemKey)}
                          className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-500/5 transition-all"
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl shrink-0 ${status.iconClass}`}>
                              <Award className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <Calendar className={`w-3.5 h-3.5 ${textMuted}`} />
                                <span className={`text-xs font-bold ${textMuted}`}>
                                  {formatDate(item.created_at)}
                                </span>
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${status.badgeClass}`}>
                                  {status.label}
                                </span>
                              </div>

                              <h3 className={`text-xl font-black ${textPrimary}`}>
                                {item.total_score} <span className="text-xs font-bold text-slate-400">/ {item.max_score || 150} балл</span>
                              </h3>
                            </div>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-700/20">
                            <span className={`text-xs font-bold ${textSecondary}`}>
                              {item.correct_count} / {item.total_questions} сұрақ дұрыс
                            </span>
                            <div className={`p-2 rounded-xl border transition-all ${
                              isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                            }`}>
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </div>
                          </div>
                        </div>

                        {/* Accordion Expanded Details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className={`p-5 border-t space-y-4 ${subCardBg}`}
                            >
                              <h4 className={`text-xs font-black uppercase tracking-wider ${textMuted}`}>
                                Пәндер бойынша балдар таралымы:
                              </h4>

                              {/* Subject Breakdown Chips */}
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                {[
                                  { label: 'Шет тілі', key: 'english', max: 50, icon: Globe },
                                  { label: 'ТГО', key: 'tgo', max: 30, icon: Brain },
                                  { label: '1-Бейіндік', key: 'profile1', max: 30, icon: Zap },
                                  { label: '2-Бейіндік', key: 'profile2', max: 40, icon: Database },
                                ].map(s => {
                                  const sData = subjectScores?.[s.key] || subjectScores?.[s.key === 'profile1' ? 'algo' : s.key === 'profile2' ? 'db' : s.key];
                                  const scoreVal = typeof sData === 'object' ? sData.score : (typeof sData === 'number' ? sData : 0);
                                  const maxVal = typeof sData === 'object' ? sData.max : s.max;

                                  return (
                                    <div key={s.key} className={`p-3 rounded-xl border flex flex-col justify-between ${cardBg}`}>
                                      <div className="flex items-center gap-1.5 text-xs font-bold text-blue-500 mb-1">
                                        <s.icon className="w-3.5 h-3.5" />
                                        <span>{s.label}</span>
                                      </div>
                                      <span className={`text-sm font-black ${textPrimary}`}>
                                        {scoreVal} <span className="text-[10px] text-slate-400 font-normal">/ {maxVal}</span>
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* CTA Button to Full Detail View */}
                              <div className="flex justify-end pt-2">
                                <button
                                  onClick={() => handleOpenDetail(item)}
                                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-xl shadow-md transition-all flex items-center gap-2 active:scale-95"
                                >
                                  <span>Тестті талдау</span>
                                  <ChevronRight className="w-4 h-4" />
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ====== GUEST 10-CLICK SOFT REGISTRATION MODAL (HAS X CLOSE BUTTON) ====== */}
      <AnimatePresence>
        {showSoftAuthModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`max-w-md w-full rounded-3xl p-6 sm:p-8 border shadow-2xl relative space-y-6 text-center ${cardBg}`}
            >
              {/* Close X Button */}
              <button 
                onClick={() => setShowSoftAuthModal(false)}
                className={`absolute top-4 right-4 p-2 rounded-xl border transition-all ${btnBg}`}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto">
                <UserPlus className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className={`text-2xl font-black ${textPrimary}`}>Тіркелу ұсынылады!</h3>
                <p className={`text-xs ${textMuted} leading-relaxed`}>
                  Сіз 10 сұрақты қарап шықтыңыз. Профиль ашып, барлық мүмкіндіктер мен жеке нәтижелеріңізді сақтау үшін платформаға тіркеліңіз!
                </p>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={handleGoogleAuth}
                  disabled={isAuthLoading}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isAuthLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  )}
                  Google арқылы жылдам кіру
                </button>

                <button
                  onClick={() => setShowSoftAuthModal(false)}
                  className={`w-full py-2.5 border text-xs font-extrabold rounded-xl transition-all ${btnBg}`}
                >
                  Кейін тіркелу (жалғастыру)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ====== GUEST 21-CLICK MANDATORY REGISTRATION HARD WALL MODAL (NO X BUTTON) ====== */}
      <AnimatePresence>
        {showHardAuthModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`max-w-md w-full rounded-3xl p-6 sm:p-8 border border-red-500/30 shadow-2xl space-y-6 text-center ${cardBg}`}
            >
              <div className="w-16 h-16 bg-red-500/10 text-red-500 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto animate-pulse">
                <Lock className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-500/10 text-red-500 border border-red-500/20">
                  Шектеу жетті (20+ сұрақ)
                </span>
                <h3 className={`text-2xl font-black ${textPrimary}`}>Тіркелу міндетті!</h3>
                <p className={`text-xs ${textMuted} leading-relaxed`}>
                  Сұрақтарды ары қарай талдауды жалғастыру үшін жүйеге тіркелу қажет. Жүйеге кіріп, барлық шектеусіз мүмкіндіктерді ашыңыз!
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleGoogleAuth}
                  disabled={isAuthLoading}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isAuthLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  )}
                  Google арқылы жылдам тіркелу
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
