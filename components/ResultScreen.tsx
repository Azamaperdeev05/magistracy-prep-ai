import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Question, SubjectId, UserAnswers } from '../types';
import { SUBJECTS } from '../constants';
import { ChevronDown, ChevronUp, CheckCircle, XCircle, Trophy, Home, RotateCcw, BookOpen, TrendingUp, Target, BarChart3, BrainCircuit, AlertTriangle, Star, MessageSquare } from 'lucide-react';
import { saveTestResult, checkAndIncrementAiLimit, getSavedUser, getHistoryItemById } from '../services/authService';
import { calculateTestResult, scoreQuestion } from '../services/scoringService';
import { getAiExplanation, AiQuestionContext } from '../services/apiService';
import MarkdownRenderer from './MarkdownRenderer';
import CodeAwareText from './CodeAwareText';
import ReportModal from './modals/ReportModal';

interface ResultScreenProps {
  questions?: Question[];
  answers?: UserAnswers;
  onRestart?: () => void;
  onPracticeWrong?: (wrongQuestions: Question[]) => void;
  userName?: string;
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

const Gauge: React.FC<{ score: number; max: number; isDarkMode?: boolean }> = ({ score, max, isDarkMode }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    setAnimatedScore(0);
    if (score <= 0) return;

    let startTimestamp: number | null = null;
    const duration = 1600; // 1.6 seconds smooth speedometer count-up

    let animId: number;
    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(easeOut * score);

      setAnimatedScore(currentVal);

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [score]);

  const percentage = max > 0 ? (animatedScore / max) * 100 : 0;
  const radius = 80;
  const circ = 2 * Math.PI * radius; // ~502.65
  const arcLength = circ * (240 / 360); // 240-degree gauge (~335.1)
  const strokeDashoffset = arcLength - (percentage / 100) * arcLength;

  // Calculate indicator dot position along the arc
  const startAngleDeg = 150; // 120deg offset from top (bottom gap)
  const currentAngleDeg = startAngleDeg + (percentage / 100) * 240;
  const currentAngleRad = (currentAngleDeg * Math.PI) / 180;
  const dotX = 100 + radius * Math.cos(currentAngleRad);
  const dotY = 100 + radius * Math.sin(currentAngleRad);

  const finalPercentage = max > 0 ? (score / max) * 100 : 0;
  let statusText = "Шектен өтпеді";
  let badgeClass = "bg-rose-500/10 text-rose-500 border border-rose-500/20";

  if (finalPercentage >= 75) {
    statusText = "Үлкен мүмкіндік (Грант)";
    badgeClass = "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20";
  } else if (finalPercentage >= 50) {
    statusText = "Шектен өтті";
    badgeClass = "bg-amber-500/10 text-amber-500 border border-amber-500/20";
  }

  return (
    <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col items-center justify-center max-w-sm mx-auto mb-10 transition-all ${
      isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-md'
    }`}>
      <div className="relative w-56 h-48 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          {/* Background Arc */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={isDarkMode ? "#1e293b" : "#f1f5f9"}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circ}`}
            transform="rotate(150 100 100)"
          />
          {/* Active Arc */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${arcLength} ${circ}`}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(150 100 100)"
            className="transition-all duration-75 ease-out"
          />
          {/* Indicator Dot */}
          {percentage > 0 && (
            <circle
              cx={dotX}
              cy={dotY}
              r="6.5"
              fill="#ffffff"
              stroke="#ef4444"
              strokeWidth="3"
              className="transition-all duration-75 ease-out"
            />
          )}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
          <span className={`text-5xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{animatedScore}</span>
          <span className={`text-[10px] font-black uppercase tracking-widest mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>/ {max} Ұпай</span>
        </div>
      </div>
      <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${badgeClass} -mt-4 shadow-sm`}>
        {statusText}
      </span>
    </div>
  );
};



const getSubjectRecommendation = (pct: number) => {
  if (pct >= 75) {
    return {
      text: "Керемет нәтиже! Дайындығыңыз өте жоғары деңгейде.",
      badge: "Жоғары дайындық",
      badgeClass: "bg-emerald-50 text-emerald-600 border border-emerald-100"
    };
  } else if (pct >= 50) {
    return {
      text: "Жақсы нәтиже. Аздаған тақырыптарды қайталап, пысықтау керек.",
      badge: "Орташа дайындық",
      badgeClass: "bg-amber-50 text-amber-600 border border-amber-100"
    };
  } else {
    return {
      text: "Бұл пәннен дайындықты күшейту қажет. Тақырыптарды оқыңыз.",
      badge: "Күшейту қажет",
      badgeClass: "bg-rose-50 text-rose-600 border border-rose-100"
    };
  }
};

const ResultScreen: React.FC<ResultScreenProps> = ({ 
  questions: propQuestions, 
  answers: propAnswers, 
  onRestart, 
  onPracticeWrong, 
  userName: propUserName 
}) => {
  const { resultId } = useParams<{ resultId?: string }>();

  const [questions, setQuestions] = useState<Question[]>(() => propQuestions || []);
  const [answers, setAnswers] = useState<UserAnswers>(() => propAnswers || {});
  const [userName, setUserName] = useState<string>(() => propUserName || 'Пердеев Азамат');

  useEffect(() => {
    if (propQuestions && propQuestions.length > 0 && propAnswers && Object.keys(propAnswers).length > 0) {
      setQuestions(propQuestions);
      setAnswers(propAnswers);
      if (propUserName) setUserName(propUserName);
      return;
    }

    const targetId = resultId || localStorage.getItem('latest_result_id');
    if (!targetId) return;

    // 1. Try LocalStorage
    const localKey = `test_result_${targetId}`;
    const stored = localStorage.getItem(localKey);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.questions && parsed.answers) {
          setQuestions(parsed.questions);
          setAnswers(parsed.answers);
          if (parsed.userName) setUserName(parsed.userName);
          return;
        }
      } catch (e) {
        console.error("Error parsing local stored result:", e);
      }
    }

    // 2. Try Firestore history by ID
    getHistoryItemById(targetId).then((item) => {
      if (item) {
        let loadedQ: Question[] = [];
        let loadedAns: UserAnswers = {};

        try {
          if (item.questions_data) loadedQ = JSON.parse(item.questions_data);
          if (item.answers_data) loadedAns = JSON.parse(item.answers_data);
        } catch (e) {
          console.error("Error parsing history item data:", e);
        }

        if (loadedQ.length > 0) {
          setQuestions(loadedQ);
          setAnswers(loadedAns);
        } else {
          const savedQ = localStorage.getItem('active_test_questions');
          const savedA = localStorage.getItem('active_test_answers');
          if (savedQ) {
            try { setQuestions(JSON.parse(savedQ)); } catch (e) {}
          }
          if (savedA) {
            try { setAnswers(JSON.parse(savedA)); } catch (e) {}
          }
        }
      }
    }).catch(err => {
      console.error("Error fetching history item by ID:", err);
    });
  }, [resultId, propQuestions, propAnswers, propUserName]);

  const [expandedSubject, setExpandedSubject] = useState<SubjectId | null>(null);
  const [selectedReviewQuestionId, setSelectedReviewQuestionId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [aiExplanations, setAiExplanations] = useState<Record<string, string>>({});
  const [reportQuestion, setReportQuestion] = useState<{ id: string; text: string } | null>(null);
  const testResult = useMemo(() => calculateTestResult(questions, answers), [questions, answers]);

  // Feedback State
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [feedbackComment, setFeedbackComment] = useState('');
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackComment.trim()) {
      setFeedbackError('Пікірді жазуды ұмытпаңыз');
      return;
    }
    const currentUser = getSavedUser();
    if (!currentUser) {
      setFeedbackError('Сессия аяқталды, жүйеге қайта кіріңіз');
      return;
    }
    if (!db) {
      setFeedbackError('Базамен байланыс орнату мүмкін емес');
      return;
    }

    setIsSubmittingFeedback(true);
    setFeedbackError('');
    try {
      await addDoc(collection(db, 'feedbacks'), {
        user_uid: currentUser.uid,
        user_name: currentUser.full_name,
        user_email: currentUser.email,
        comment: feedbackComment.trim(),
        rating: feedbackRating,
        created_at: new Date().toISOString()
      });
      setFeedbackSuccess(true);
      setFeedbackComment('');
    } catch (err: any) {
      setFeedbackError(err.message || 'Жіберу кезінде қате орын алды');
    } finally {
      setIsSubmittingFeedback(false);
    }
  };

  const handleRequestExplanation = async (
    question: Question,
    opts: string[], 
    correctOpts: string[], 
    userAns: string[]
  ) => {
    const qId = question.id;
    if (aiExplanations[qId] && !aiExplanations[qId].startsWith('Қателік')) return;
    
    // Check limit
    const check = checkAndIncrementAiLimit(10);
    if (!check.allowed) {
      setAiExplanations(prev => ({
        ...prev,
        [qId]: `🔒 Бұл мүмкіндік тек Premium жазылымы бар пайдаланушыларға қол жетімді. Premium жазылымға өтіп, ИИ түсіндірмелерін шексіз пайдаланыңыз!`
      }));
      return;
    }

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

  const subjectResults = Object.values(SUBJECTS)
    .filter(subject => questions.some(q => q.subjectId === subject.id))
    .map(subject => {
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
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <header className="py-12 text-center">
        <Trophy className="w-14 h-14 text-amber-500 mx-auto mb-3 animate-bounce" />
        <h1 className="text-3xl font-black mb-1 uppercase tracking-tighter text-slate-800">Тест нәтижесі</h1>
        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{userName}, құттықтаймыз!</p>
      </header>

      <div className="max-w-5xl mx-auto px-4">
        {/* New Gauge Arc Score Card */}
        <Gauge score={totalScore} max={maxScore} />
        
        {/* PRO Analytics: Subject & Topic Breakdown */}
        <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center justify-center gap-3">
          <BarChart3 className="w-6 h-6 text-blue-500" />
          Пәндер бойынша талдау
        </h2>

        <div className="grid gap-4 max-w-3xl mx-auto mb-8">
          {subjectResults.map((result) => {
            const pct = result.maxScore > 0 ? (result.score / result.maxScore) * 100 : 0;
            const recommendation = getSubjectRecommendation(pct);

            return (
              <div key={result.subject.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 transition-all">
                <div 
                  onClick={() => setExpandedSubject(expandedSubject === result.subject.id ? null : result.subject.id)}
                  className="p-5 cursor-pointer hover:bg-slate-50 transition"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="text-left">
                        <h3 className="text-sm font-black text-slate-850">{result.subject.name}</h3>
                        <p className="text-[11px] text-slate-400 font-bold mt-0.5">{recommendation.text}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {/* Score pill */}
                      <div className="text-right">
                        <div className={`text-lg font-black leading-none ${pct >= 70 ? 'text-green-600' : pct >= 40 ? 'text-orange-500' : 'text-red-500'}`}>
                          {result.score}
                          <span className="text-xs font-bold text-slate-400">/{result.maxScore}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-bold">{Math.round(pct)}%</div>
                      </div>
                      <span className={`hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${recommendation.badgeClass}`}>
                        {recommendation.badge}
                      </span>
                      {expandedSubject === result.subject.id ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </div>

                  {/* Mini progress bar */}
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${pct >= 70 ? 'bg-green-500' : pct >= 40 ? 'bg-orange-400' : 'bg-red-500'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                {expandedSubject === result.subject.id && (
                  <div className="p-6 bg-slate-50 border-t border-slate-100">
                    {/* Topic Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {Object.entries(result.topicStats).map(([topic, stats]) => {
                        const topicPct = Math.round((stats.correct / stats.total) * 100);
                        return (
                          <div key={topic} className="bg-white px-3 py-2.5 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-semibold text-slate-700 text-[11px] leading-tight">{TOPIC_NAMES[topic] || topic}</span>
                              <span className={`text-[10px] font-black ml-1.5 shrink-0 ${topicPct >= 70 ? 'text-green-600' : topicPct >= 40 ? 'text-orange-500' : 'text-red-500'}`}>
                                {stats.correct}/{stats.total}
                              </span>
                            </div>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                              <div className={`h-full transition-all duration-1000 ${topicPct >= 70 ? 'bg-green-500' : topicPct >= 40 ? 'bg-orange-500' : 'bg-red-500'}`}
                                style={{ width: `${topicPct}%` }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Answer Matrix */}
                    <div className="mt-8 text-left">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Сұрақтар торшасы (өту үшін нөмірді басыңыз):</h4>
                      <div className="flex flex-wrap gap-2">
                        {result.questions.map((q, i) => {
                          const isCorrect = scoreQuestion(q, answers[q.id] || []).correct;
                          const isSelected = selectedReviewQuestionId === q.id;
                          return (
                            <button
                              key={q.id}
                              onClick={() => {
                                if (selectedReviewQuestionId === q.id) {
                                  setSelectedReviewQuestionId(null);
                                } else {
                                  setSelectedReviewQuestionId(q.id);
                                  setTimeout(() => {
                                    const element = document.getElementById(`q-review-${q.id}`);
                                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                  }, 50);
                                }
                              }}
                              className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm transition-all active:scale-95 hover:scale-105 shrink-0
                                ${isSelected ? 'ring-2 ring-offset-1 ring-slate-800 scale-110' : ''}
                                ${isCorrect ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
                              title={`Сұрақ №${i + 1}`}
                            >
                              {i + 1}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Detailed Questions Review */}
                    <div className="mt-8 space-y-6">
                      <h4 className="text-lg font-black text-slate-800 mb-4 border-b pb-2 flex items-center gap-2 text-left">
                        <BrainCircuit className="w-5 h-5 text-indigo-500" />
                        Сұрақтарды талдау:
                      </h4>
                      {!selectedReviewQuestionId ? (
                        <div className="text-center py-10 text-slate-400">
                          <div className="text-3xl mb-2">☝️</div>
                          <p className="text-sm font-medium">Талдау үшін жоғарыдағы нөмірді басыңыз</p>
                        </div>
                      ) : (
                        result.questions
                          .filter(q => q.id === selectedReviewQuestionId)
                          .map((q, qIdx) => {
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
                              <div key={q.id} id={`q-review-${q.id}`} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4 text-left scroll-mt-20">
                                <div className="flex justify-between items-start gap-4">
                                  <div className="font-bold text-slate-800 text-base leading-relaxed">
                                    Сұрақ №{qIdx + 1}: <CodeAwareText text={q.text} subjectId={q.subjectId} />
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
                                        <span>{letter}) <CodeAwareText text={opt.text} subjectId={q.subjectId} /></span>
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
                          })
                      )}
                    </div>
                  </div>
                )}
            </div>
          );
        })}
      </div>

        {/* Feedback Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-gray-100 max-w-2xl mx-auto text-left">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Кері байланыс</h3>
          </div>
          <p className="text-sm text-slate-500 mb-6 font-medium leading-relaxed">
            Тест сапасын арттыру және платформаны жақсарту үшін өз пікіріңізді қалдырыңыз. Сұрақтардың сапасы немесе сайт жұмысы туралы ойыңыз бізге өте маңызды!
          </p>

          {feedbackSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center text-green-800">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg text-green-600">✓</div>
              <h4 className="font-bold text-sm">Пікіріңіз үшін рақмет!</h4>
              <p className="text-xs text-green-655 mt-1">Сіздің кері байланысыңыз жүйені жақсартуға үлкен көмек болады.</p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-5">
              {/* Stars Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Платформаға бағаңыз:</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFeedbackRating(star)}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      className="p-1 hover:scale-110 active:scale-95 transition-all text-yellow-450"
                    >
                      <Star
                        className="w-8 h-8"
                        style={{
                          fill: star <= (hoveredStar || feedbackRating) ? '#f59e0b' : 'transparent',
                          stroke: '#f59e0b',
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Comment Text */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Пікіріңіз / Ұсыныстарыңыз:</label>
                <textarea
                  value={feedbackComment}
                  onChange={(e) => setFeedbackComment(e.target.value)}
                  placeholder="Осы тест және сайт туралы өз ойыңызды жазыңыз..."
                  rows={4}
                  className="w-full bg-slate-50 border border-gray-250 focus:border-blue-500 rounded-xl px-4 py-3 outline-none text-slate-800 text-sm transition placeholder-gray-400 resize-none font-medium"
                />
              </div>

              {feedbackError && (
                <div className="text-xs text-red-500 font-bold bg-red-50 border border-red-100 p-2.5 rounded-xl">
                  {feedbackError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmittingFeedback}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
              >
                {isSubmittingFeedback ? 'Жіберілуде...' : 'Пікірді жіберу'}
              </button>
            </form>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
           <button onClick={onRestart} className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition">
             <RotateCcw /> Қайта тапсыру
           </button>
           <button onClick={onRestart} className="flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition">
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
