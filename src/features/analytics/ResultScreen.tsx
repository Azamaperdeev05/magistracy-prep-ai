import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Question, SubjectId, UserAnswers } from '../../types';
import { SUBJECTS } from '../../constants';
import { ChevronDown, ChevronUp, CheckCircle, XCircle, Trophy, Home, RotateCcw, BookOpen, TrendingUp, Target, BarChart3, BrainCircuit, AlertTriangle, Star, MessageSquare, ArrowLeft, Sparkles, GraduationCap } from 'lucide-react';
import { saveTestResult, checkAndIncrementAiLimit, getSavedUser, getHistoryItemById } from '../../services/authService';
import { calculateTestResult, scoreQuestion } from '../../services/scoringService';
import { getAiExplanation, AiQuestionContext } from '../../services/apiService';
import MarkdownRenderer from '../test-engine/MarkdownRenderer';
import CodeAwareText from '../test-engine/CodeAwareText';
import ReportModal from '../test-engine/modals/ReportModal';
import { useTheme } from '../../app/ThemeContext';

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
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-52 h-44 flex items-center justify-center">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-6">
          <span className={`text-4xl sm:text-5xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{animatedScore}</span>
          <span className={`text-[10px] font-black uppercase tracking-widest mt-0.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>/ {max} Балл</span>
        </div>
      </div>
      <span className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${badgeClass} -mt-2 shadow-xs`}>
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
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

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
            try { setQuestions(JSON.parse(savedQ)); } catch (e) { }
          }
          if (savedA) {
            try { setAnswers(JSON.parse(savedA)); } catch (e) { }
          }
        }
      }
    }).catch(err => {
      console.error("Error fetching history item by ID:", err);
    });
  }, [resultId, propQuestions, propAnswers, propUserName]);

  const [activeTab, setActiveTab] = useState<'overview' | 'topics' | 'review'>('overview');
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'wrong'>('all');
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

    setIsSubmittingFeedback(true);
    setFeedbackError('');
    try {
      const { getDb } = await import('../../firebase');
      const { collection, addDoc } = await import('firebase/firestore');
      const db = await getDb();
      if (!db) {
        setFeedbackError('Базамен байланыс орнату мүмкін емес');
        setIsSubmittingFeedback(false);
        return;
      }
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
  const scorePct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  const wrongQuestions = useMemo(() => {
    return questions.filter(q => !scoreQuestion(q, answers[q.id] || []).correct);
  }, [questions, answers]);

  const grantChance = useMemo(() => {
    if (scorePct >= 75) {
      return { text: 'Өте жоғары', desc: 'Грантқа түсу мүмкіндігіңіз жоғары!', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' };
    } else if (scorePct >= 55) {
      return { text: 'Орташа', desc: 'Сәл шыңдасаңыз грант кепіл!', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' };
    } else {
      return { text: 'Дайындық қажет', desc: 'Қателіктермен қайта жұмыс жасаңыз', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-200' };
    }
  }, [scorePct]);

  const weakestSubject = useMemo(() => {
    if (subjectResults.length === 0) return null;
    return [...subjectResults].sort((a, b) => (a.score / (a.maxScore || 1)) - (b.score / (b.maxScore || 1)))[0];
  }, [subjectResults]);

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
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Clean Top Bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/panel')}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold text-xs sm:text-sm transition active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Панельге оралу</span>
            </button>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-400">/ Тестілеу нәтижесі</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (onRestart) onRestart();
                else navigate('/test-setup');
              }}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-extrabold text-xs sm:text-sm shadow-sm transition active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Қайта тапсыру</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-6">
        {/* Unified Hero Dashboard Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left: Speedometer Gauge */}
            <div className="md:col-span-5 flex flex-col items-center border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-6">
              <Gauge score={totalScore} max={maxScore} isDarkMode={isDarkMode} />
            </div>

            {/* Right: Core Metrics & Status */}
            <div className="md:col-span-7 space-y-4 text-left">
              <div className="flex items-center justify-between flex-wrap gap-2">

                <div className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${grantChance.bg} ${grantChance.color}`}>
                  {grantChance.text}
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Дұрыс Жауап</span>
                  <span className="text-lg font-black text-emerald-600">{testResult.correctCount}</span>
                  <span className="text-[10px] text-slate-400 font-semibold block">/ {questions.length}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Қате Жауап</span>
                  <span className="text-lg font-black text-rose-600">{wrongQuestions.length}</span>
                  <span className="text-[10px] text-slate-400 font-semibold block">сұрақ</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Игеру Пайызы</span>
                  <span className="text-lg font-black text-blue-600">{scorePct}%</span>
                  <span className="text-[10px] text-slate-400 font-semibold block">жалпы</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 font-medium">
                {grantChance.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-200 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-5 py-3 font-extrabold text-xs sm:text-sm border-b-2 transition cursor-pointer whitespace-nowrap ${activeTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Жалпы Шолу</span>
          </button>

          <button
            onClick={() => setActiveTab('topics')}
            className={`flex items-center gap-2 px-5 py-3 font-extrabold text-xs sm:text-sm border-b-2 transition cursor-pointer whitespace-nowrap ${activeTab === 'topics'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
          >
            <Target className="w-4 h-4" />
            <span>Пәндер & Тақырыптар</span>
          </button>

          <button
            onClick={() => setActiveTab('review')}
            className={`flex items-center gap-2 px-5 py-3 font-extrabold text-xs sm:text-sm border-b-2 transition cursor-pointer whitespace-nowrap ${activeTab === 'review'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Сұрақтар Талдауы ({questions.length})</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Smart AI Analysis Notice Banner */}
            {weakestSubject && (
              <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-5 shadow-lg border border-blue-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3 text-left">
                  <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-400/30 shrink-0">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-blue-300 bg-blue-500/20 px-2.5 py-0.5 rounded-md border border-blue-400/20 mb-1">
                      <Sparkles className="w-3 h-3 text-amber-400" /> Сараптамалық кеңес
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-slate-200">
                      <strong className="text-white font-extrabold">{weakestSubject.subject.name}</strong> бойынша дайындықты күшейту ұсынылады (жинаған балыңыз: {weakestSubject.score}/{weakestSubject.maxScore}).
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/prep')}
                  className="shrink-0 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-extrabold text-xs transition active:scale-95 cursor-pointer shadow-md"
                >
                  Дайындық бөліміне өту
                </button>
              </div>
            )}

            {/* Subject Results Breakdown */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-800 text-left flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                Пәндер бойынша нәтижелер:
              </h3>

              <div className="grid gap-4">
                {subjectResults.map((result) => {
                  const pct = result.maxScore > 0 ? Math.round((result.score / result.maxScore) * 100) : 0;
                  const recommendation = getSubjectRecommendation(pct);

                  return (
                    <div key={result.subject.id} className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 text-left space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h4 className="text-base font-extrabold text-slate-900">{result.subject.name}</h4>
                          <p className="text-xs text-slate-500 font-medium mt-0.5">{recommendation.text}</p>
                        </div>

                        <div className="text-right shrink-0">
                          <div className={`text-xl font-black ${pct >= 70 ? 'text-emerald-600' : pct >= 40 ? 'text-amber-600' : 'text-rose-600'}`}>
                            {result.score} <span className="text-xs font-bold text-slate-400">/{result.maxScore}</span>
                          </div>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${recommendation.badgeClass}`}>
                            {pct}%
                          </span>
                        </div>
                      </div>

                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${pct >= 70 ? 'bg-emerald-500' : pct >= 40 ? 'bg-amber-500' : 'bg-rose-500'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TOPICS */}
        {activeTab === 'topics' && (
          <div className="space-y-6">
            <h3 className="text-lg font-black text-slate-800 text-left flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              Тақырыптық игеру көрсеткіштері:
            </h3>

            <div className="grid gap-6">
              {subjectResults.map((result) => (
                <div key={result.subject.id} className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 text-left space-y-4">
                  <h4 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3">{result.subject.name}</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Object.entries(result.topicStats).map(([topic, stats]) => {
                      const topicPct = Math.round((stats.correct / stats.total) * 100);
                      return (
                        <div key={topic} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-slate-700 text-xs">{TOPIC_NAMES[topic] || topic}</span>
                            <span className={`text-xs font-black ${topicPct >= 70 ? 'text-emerald-600' : topicPct >= 40 ? 'text-amber-600' : 'text-rose-600'}`}>
                              {stats.correct}/{stats.total} ({topicPct}%)
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div
                              className={`h-full transition-all duration-1000 ${topicPct >= 70 ? 'bg-emerald-500' : topicPct >= 40 ? 'bg-amber-500' : 'bg-rose-500'}`}
                              style={{ width: `${topicPct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: QUESTION REVIEW */}
        {activeTab === 'review' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-lg font-black text-slate-800 text-left flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                Сұрақтар бойынша талдау:
              </h3>

              {/* Filters */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
                <button
                  onClick={() => setReviewFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${reviewFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Барлығы ({questions.length})
                </button>
                <button
                  onClick={() => setReviewFilter('wrong')}
                  className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${reviewFilter === 'wrong' ? 'bg-rose-500 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Қателер ({wrongQuestions.length})
                </button>
                <button
                  onClick={() => setReviewFilter('correct')}
                  className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${reviewFilter === 'correct' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}
                >
                  Дұрыстары ({questions.length - wrongQuestions.length})
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {questions
                .filter(q => {
                  const isCorrect = scoreQuestion(q, answers[q.id] || []).correct;
                  if (reviewFilter === 'wrong') return !isCorrect;
                  if (reviewFilter === 'correct') return isCorrect;
                  return true;
                })
                .map((q, idx) => {
                  const userAns = answers[q.id] || [];
                  const scoreRes = scoreQuestion(q, userAns);
                  const isCorrect = scoreRes.correct;
                  const correctOptionTexts = q.options.filter(o => q.correctOptionIds.includes(o.id)).map(o => o.text);
                  const userOptionTexts = q.options.filter(o => userAns.includes(o.id)).map(o => o.text);

                  return (
                    <div key={q.id} className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 text-left space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <div className="font-extrabold text-slate-900 text-sm sm:text-base leading-relaxed">
                          Сұрақ №{idx + 1}: <CodeAwareText text={q.text} subjectId={q.subjectId} />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-extrabold shrink-0 ${isCorrect ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
                          {isCorrect ? 'Дұрыс' : 'Қате'} ({scoreRes.score}/{scoreRes.max} балл)
                        </span>
                      </div>

                      {q.codeSnippet && (
                        <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto text-left">
                          {q.codeSnippet}
                        </pre>
                      )}

                      <div className="grid gap-2 pl-3 border-l-2 border-slate-100">
                        {q.options.map((opt, optIdx) => {
                          const letter = String.fromCharCode(65 + optIdx);
                          const isOptSelected = userAns.includes(opt.id);
                          const isOptCorrect = q.correctOptionIds.includes(opt.id);

                          let optClass = "text-slate-600";
                          if (isOptCorrect) {
                            optClass = "text-emerald-700 font-bold bg-emerald-50/60 p-2 rounded-lg border border-emerald-100";
                          } else if (isOptSelected && !isOptCorrect) {
                            optClass = "text-rose-700 font-semibold bg-rose-50/60 p-2 rounded-lg border border-rose-100";
                          }

                          return (
                            <div key={opt.id} className={`text-xs sm:text-sm flex items-center justify-between gap-2 ${optClass}`}>
                              <span><strong>{letter})</strong> <CodeAwareText text={opt.text} subjectId={q.subjectId} /></span>
                              {isOptCorrect && <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black shrink-0">Дұрыс жауап</span>}
                              {isOptSelected && !isOptCorrect && <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-black shrink-0">Сіздің жауабыңыз</span>}
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-end">
                        <button
                          onClick={() => handleRequestExplanation(q, q.options.map(o => o.text), correctOptionTexts, userOptionTexts)}
                          className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-xs transition cursor-pointer"
                        >
                          <BrainCircuit className="w-3.5 h-3.5" />
                          <span>ИИ Талдау алу</span>
                        </button>
                      </div>

                      {aiExplanations[q.id] && (
                        <div className="mt-3 p-4 bg-indigo-50/80 border border-indigo-100 rounded-xl text-xs sm:text-sm text-slate-800">
                          <MarkdownRenderer content={aiExplanations[q.id]} />
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Feedback Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-gray-100 max-w-2xl mx-auto text-left mt-12">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Кері байланыс</h3>
          </div>
          <p className="text-sm text-slate-400 mb-6 font-medium leading-relaxed">
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
          <button
            onClick={() => {
              if (onRestart) onRestart();
              else navigate('/test-setup');
            }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" /> Қайта тапсыру
          </button>

          <button
            onClick={() => navigate('/panel')}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition cursor-pointer"
          >
            <Home className="w-5 h-5" /> Басты бетке өту
          </button>
        </div>

        {/* Mobile Floating Quick Action Bar */}
        <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40 bg-slate-900/90 backdrop-blur-lg border border-slate-700/80 text-white rounded-2xl shadow-2xl p-2 flex items-center justify-around gap-2">
          <button
            onClick={() => navigate('/panel')}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-extrabold transition cursor-pointer"
          >
            <Home className="w-4 h-4 text-blue-400" />
            <span>Басты бет</span>
          </button>

          <button
            onClick={() => {
              if (onRestart) onRestart();
              else navigate('/test-setup');
            }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-extrabold transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-white" />
            <span>Қайта тапсыру</span>
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
