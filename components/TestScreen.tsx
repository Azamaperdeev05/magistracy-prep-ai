import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { Question, SubjectId, UserAnswers, QuestionType } from '../types';
import { SUBJECTS } from '../constants';
import { Menu, User, FileText, Map, Calculator, Table, FlaskConical, LogOut, BrainCircuit, X, Send, AlertTriangle } from 'lucide-react';
import { askAiQuestion, ChatMessage, getAiExplanation, AiQuestionContext } from '../services/apiService';
import MarkdownRenderer from './MarkdownRenderer';
import { getTheoryForQuestion } from '../data/textbooks';

// Import Modals
import SectionsModal from './modals/SectionsModal';
import AnswerMapModal from './modals/AnswerMapModal';
import CalculatorModal from './modals/CalculatorModal';
import PeriodicTableModal from './modals/PeriodicTableModal';
import SolubilityTableModal from './modals/SolubilityTableModal';
import ReportModal from './modals/ReportModal';
import AudioPlayer from './AudioPlayer';
import ChartRenderer from './ChartRenderer';
import CodeAwareText from './CodeAwareText';
import ConfirmModal from './modals/ConfirmModal';

interface TestScreenProps {
  questions: Question[];
  durationMinutes: number;
  onFinish: (answers: UserAnswers) => void;
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

const TestScreen: React.FC<TestScreenProps> = ({ questions, durationMinutes, onFinish, userName }) => {
  const { subjectId, qIndex } = useParams<{ subjectId: string; qIndex: string }>();
  const navigate = useNavigate();

  // State
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [chatHistories, setChatHistories] = useState<Record<string, ChatMessage[]>>({});
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [analysisResponses, setAnalysisResponses] = useState<Record<string, string>>({});
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [drawerTab, setDrawerTab] = useState<'ai' | 'analysis' | 'theory'>('ai');

  // Confirm Modal state
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmConfig, setConfirmConfig] = useState<{
    message: string;
    onConfirm: () => void;
    confirmText?: string;
  } | null>(null);

  const triggerConfirm = (message: string, onConfirm: () => void, confirmText?: string) => {
    setConfirmConfig({ message, onConfirm, confirmText });
    setIsConfirmOpen(true);
  };

  const handleSendAiQuery = async (customQuery?: string) => {
    const queryToSend = customQuery || aiQuery;
    if (!queryToSend.trim() && !customQuery) return;
    if (!currentQuestion) return;

    const questionId = currentQuestion.id;
    const existingHistory = chatHistories[questionId] || [];

    const studentMsg: ChatMessage = { role: 'user', content: queryToSend };
    const updatedHistory = [...existingHistory, studentMsg];
    setChatHistories(prev => ({ ...prev, [questionId]: updatedHistory }));
    
    if (!customQuery) {
      setAiQuery('');
    }
    
    setAiLoading(true);
    try {
      const optionTexts = currentQuestion.options.map(o => o.text);
      const correctOptionTexts = currentQuestion.options
        .filter(o => currentQuestion.correctOptionIds.includes(o.id))
        .map(o => o.text);
      const selectedOptionTexts = currentQuestion.options
        .filter(o => (answers[questionId] || []).includes(o.id))
        .map(o => o.text);

      const response = await askAiQuestion(
        currentQuestion.text,
        optionTexts,
        correctOptionTexts,
        selectedOptionTexts,
        queryToSend,
        existingHistory,
        buildAiQuestionContext(currentQuestion)
      );

      const aiMsg: ChatMessage = { role: 'assistant', content: response };
      setChatHistories(prev => ({
        ...prev,
        [questionId]: [...(prev[questionId] || []), aiMsg]
      }));
    } catch (err: any) {
      const errMsg: ChatMessage = { role: 'assistant', content: `Қателік: ${err.message || 'AI жауап бере алмады.'}` };
      setChatHistories(prev => ({
        ...prev,
        [questionId]: [...(prev[questionId] || []), errMsg]
      }));
    } finally {
      setAiLoading(false);
    }
  };

  const handleGenerateAnalysis = async () => {
    if (!currentQuestion || !currentQuestionId) return;
    if (analysisResponses[currentQuestionId] && !analysisResponses[currentQuestionId].startsWith('Қателік')) return;

    setAnalysisLoading(true);
    try {
      const optionTexts = currentQuestion.options.map(o => o.text);
      const correctOptionTexts = currentQuestion.options
        .filter(o => currentQuestion.correctOptionIds.includes(o.id))
        .map(o => o.text);
      const selectedOptionTexts = currentQuestion.options
        .filter(o => (answers[currentQuestionId] || []).includes(o.id))
        .map(o => o.text);

      const analysis = await getAiExplanation(
        currentQuestion.text,
        optionTexts,
        correctOptionTexts,
        selectedOptionTexts,
        buildAiQuestionContext(currentQuestion)
      );

      setAnalysisResponses(prev => ({ ...prev, [currentQuestionId]: analysis }));
    } catch (err: any) {
      setAnalysisResponses(prev => ({
        ...prev,
        [currentQuestionId]: `Қателік: ${err.message || 'AI талдау жасай алмады.'}`,
      }));
    } finally {
      setAnalysisLoading(false);
    }
  };

  const handleOpenAnalysisTab = () => {
    setDrawerTab('analysis');
    void handleGenerateAnalysis();
  };
  
  // Resolve current state from URL
  const currentSubjectId = (subjectId as SubjectId) || SubjectId.ENGLISH;
  const currentQuestionIndex = qIndex ? parseInt(qIndex) - 1 : 0;

  const currentSubjectQuestions = questions.filter(q => q.subjectId === currentSubjectId);
  const currentQuestion = currentSubjectQuestions[currentQuestionIndex];

  // If URL is invalid, redirect to first question of current subject
  if (!currentQuestion && currentSubjectQuestions.length > 0) {
    return <Navigate to={`/test/${currentSubjectId}/q/1`} replace />;
  }

  const currentIndex = currentQuestionIndex;
  const currentQuestionId = currentQuestion?.id;
  const activeTheory = currentQuestion
    ? getTheoryForQuestion(currentQuestion.subjectId, currentQuestion.topic, currentQuestion.text)
    : "";

  // Modal States
  const [showSections, setShowSections] = useState(false);
  const [showAnswerMap, setShowAnswerMap] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showPeriodicTable, setShowPeriodicTable] = useState(false);
  const [showSolubilityTable, setShowSolubilityTable] = useState(false);
  const [reportQuestion, setReportQuestion] = useState<{ id: string; text: string } | null>(null);

  // Refresh and copy prevention
  useEffect(() => {
    // 1. Prevent refresh
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    // 2. Prevent copy, right click, selection, and drag
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleCopy = (e: ClipboardEvent) => e.preventDefault();
    const handleSelect = (e: Event) => e.preventDefault();
    const handleDragStart = (e: DragEvent) => e.preventDefault();

    const handleKeydown = (e: KeyboardEvent) => {
      // Block Ctrl+C, Ctrl+V, Ctrl+U (source), F12 (inspect), PrtSc
      if ((e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 'p')) || 
          e.key === 'F12' || e.key === 'PrintScreen') {
        e.preventDefault();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('copy', handleCopy);
    window.addEventListener('selectstart', handleSelect);
    window.addEventListener('dragstart', handleDragStart);
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('copy', handleCopy);
      window.removeEventListener('selectstart', handleSelect);
      window.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  // Helpers
  const handleAnswer = (optionId: string) => {
    if (!currentQuestion) return; // Use the derived currentQuestion

    setAnswers(prev => {
      const currentSelection = prev[currentQuestionId] || [];
      if (currentQuestion.type === QuestionType.SINGLE) {
        return { ...prev, [currentQuestionId]: [optionId] };
      } else {
        if (currentSelection.includes(optionId)) {
          return { ...prev, [currentQuestionId]: currentSelection.filter(id => id !== optionId) };
        }

        const maxSelections = [SubjectId.DB, SubjectId.M002_SPEECH_DEV].includes(currentQuestion.subjectId) ? 3 : Number.POSITIVE_INFINITY;
        if (currentSelection.length >= maxSelections) {
          return prev;
        }

        return { ...prev, [currentQuestionId]: [...currentSelection, optionId] };
      }
    });
  };

  const handleSelectQuestion = (questionId: string) => {
    const q = questions.find(q => q.id === questionId);
    if (q) {
      const sQuestions = questions.filter(sq => sq.subjectId === q.subjectId);
      const idx = sQuestions.findIndex(sq => sq.id === questionId);
      navigate(`/test/${q.subjectId}/q/${idx + 1}`);
    }
  };



  const handleNext = () => {
    if (currentIndex < currentSubjectQuestions.length - 1) {
      navigate(`/test/${currentSubjectId}/q/${currentIndex + 2}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(`/test/${currentSubjectId}/q/${currentIndex}`);
    }
  };

  const handleNextSubject = () => {
    const activeSubjectIds = Array.from(new Set(questions.map(q => q.subjectId)));
    const currIdx = activeSubjectIds.indexOf(currentSubjectId);
    if (currIdx < activeSubjectIds.length - 1) {
      navigate(`/test/${activeSubjectIds[currIdx + 1]}/q/1`);
    } else {
      triggerConfirm(
        "Бұл соңғы пән. Тестті аяқтауға сенімдісіз бе?",
        () => onFinish(answers),
        "Аяқтау"
      );
    }
  };

  const handleFinish = () => {
    triggerConfirm(
      "Тестті аяқтауға сенімдісіз бе?",
      () => onFinish(answers),
      "Аяқтау"
    );
  };

  // Sidebar Tools
  const tools = [
    { icon: <User className="w-6 h-6" />, label: userName.split(' ')[0] || "Жасұлан", onClick: () => {} },
    { icon: <FileText className="w-6 h-6" />, label: "Бөлімдер", onClick: () => setShowSections(true) },
    { icon: <Map className="w-6 h-6" />, label: "Жауап картасы", onClick: () => setShowAnswerMap(true) },
    { icon: <BrainCircuit className="w-6 h-6 text-indigo-500" />, label: "ИИ Көмекші", onClick: () => setShowAiAssistant(true) },
    { icon: <Calculator className="w-6 h-6" />, label: "Калькулятор", onClick: () => setShowCalculator(true) },
    { icon: <Table className="w-6 h-6" />, label: "Менделеев кестесі", onClick: () => setShowPeriodicTable(true) },
    { icon: <FlaskConical className="w-6 h-6" />, label: "Ерігіштік кестесі", onClick: () => setShowSolubilityTable(true) },
  ];

  if (!currentQuestion) return <div>Loading...</div>;

  const isEnglishListening =
    currentSubjectId === SubjectId.ENGLISH &&
    (currentQuestion.audioUrl || currentQuestion.topic?.toLowerCase().includes('listening'));
  const showListeningTranscript =
    isEnglishListening && !currentQuestion.audioUrl && !!currentQuestion.codeSnippet;

  return (
    <div className="flex flex-col h-screen bg-[#F8F9FB] font-sans overflow-hidden">
      {/* 1. Full Width Top Header (Dark Blue) - Mobile Responsive */}
      <header className="bg-[#348FE2] h-[48px] md:h-[48px] flex items-center justify-between px-2 md:px-4 text-white shadow-md z-50 shrink-0">
          <div className="flex items-center gap-2 md:gap-4">
              <Menu className="w-5 h-5 md:w-6 md:h-6 cursor-pointer opacity-90 hover:opacity-100" />
              <div className="font-semibold text-xs md:text-base tracking-wide flex items-center gap-2 truncate max-w-[120px] md:max-w-none">
                 <span>{userName || 'Пердеев Азамат'}</span>
              </div>
          </div>
          <button 
              onClick={handleNextSubject}
              className="bg-white text-[#348FE2] px-2 md:px-4 py-1 rounded-[3px] text-[10px] md:text-xs font-bold hover:bg-slate-50 transition shadow-sm uppercase tracking-tight whitespace-nowrap"
          >
              Келесі пән &gt;
          </button>
      </header>

      {/* 2. Main Layout (Sidebar + Content) */}
      <div className="flex flex-1 overflow-hidden">
          
          {/* Sidebar (Left, Fixed Width) - Hidden on Mobile */}
          <div className="hidden md:flex w-[100px] bg-[#56CCF2] flex-col items-center py-4 text-white border-r border-[#4DBBE0] z-40">
              {/* Tools */}
              <div className="flex flex-col gap-4 w-full">
                  {tools.map((tool, index) => (
                      <div 
                          key={index}
                          onClick={tool.onClick}
                          className="flex flex-col items-center gap-1 cursor-pointer hover:bg-white/20 w-full py-2 transition rounded-md"
                      >
                          <div className="p-1">{tool.icon}</div>
                          <span className="text-[10px] font-medium leading-tight px-1 text-center">{tool.label}</span>
                      </div>
                  ))}
              </div>

              {/* Finish Button */}
              <div className="mt-auto mb-4 w-full">
                   <button 
                      onClick={handleFinish}
                      className="flex flex-col items-center gap-1 cursor-pointer hover:bg-red-500/20 w-full py-2 transition text-red-100"
                   >
                      <LogOut className="w-6 h-6" />
                      <span className="text-[10px]">Аяқтау</span>
                   </button>
              </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
              
              {/* Question Strip (Gray Background per screenshot) */}
              <div className="bg-[#EAEAEA] border-b border-gray-300 py-2 px-2 overflow-x-auto custom-scrollbar shrink-0 shadow-inner">
                  <div className="flex items-center gap-1.5 min-w-max px-2">
                  {currentSubjectQuestions.map((q, idx) => {
                      const isAnswered = answers[q.id] && answers[q.id].length > 0;
                      const isCurrent = idx === currentQuestionIndex;
                      
                      return (
                          <div 
                              key={q.id}
                              onClick={() => navigate(`/test/${currentSubjectId}/q/${idx + 1}`)}
                              className={`
                                  w-8 h-8 flex items-center justify-center rounded-[3px] cursor-pointer text-sm font-bold transition-all select-none border shadow-sm
                                  ${isCurrent 
                                      ? 'bg-[#3498DB] text-white border-[#2980B9] ring-2 ring-blue-300 z-10' 
                                      : isAnswered 
                                          ? 'bg-[#2ECC71] text-white border-[#27AE60]' 
                                          : 'bg-gradient-to-b from-white to-gray-50 text-blue-400 border-gray-300 hover:border-blue-400 hover:text-blue-500'}
                              `}
                          >
                              {idx + 1}
                          </div>
                      );
                  })}
                  </div>
              </div>

              {/* Main Question Card Area */}
              <div className="flex-1 overflow-y-auto bg-white p-4 pb-24 md:px-8 md:py-6 md:pb-6">
                  <div className="max-w-6xl mx-auto h-full flex flex-col">
                      
                      {/* Nav Bar - Mobile Responsive */}
                      <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b-2 border-slate-200 mb-4 md:mb-6 gap-3 md:gap-0 w-full">
                          <div className="text-center w-full sm:w-auto">
                             <div className="text-base sm:text-lg font-extrabold text-slate-800 uppercase tracking-tight">
                                {SUBJECTS[currentSubjectId].name}
                             </div>
                             <span className="text-slate-500 font-semibold text-xs sm:hidden">Сұрақ {currentIndex + 1}/{currentSubjectQuestions.length}</span>
                          </div>

                          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                              <button 
                                  onClick={handlePrev}
                                  disabled={currentIndex === 0}
                                  className="flex-1 sm:flex-none bg-[#3498DB] text-white px-4 py-2 rounded-[4px] text-sm font-bold shadow hover:bg-[#2980B9] disabled:opacity-50 disabled:shadow-none transition-colors"
                              >
                                  &lt; Алдыңғы
                              </button>
                              <span className="hidden sm:inline text-slate-500 font-semibold text-sm whitespace-nowrap">Сұрақ {currentIndex + 1}/{currentSubjectQuestions.length}</span>
                              <button 
                                  onClick={handleNext}
                                  disabled={currentIndex === currentSubjectQuestions.length - 1}
                                  className="flex-1 sm:flex-none bg-[#3498DB] text-white px-4 py-2 rounded-[4px] text-sm font-bold shadow hover:bg-[#2980B9] disabled:opacity-50 disabled:shadow-none transition-colors"
                              >
                                  Келесі &gt;
                              </button>
                          </div>
                      </div>

                      {/* Question Content */}
                      <div className="flex-1">
                          {/* English Listening (temporary transcript until TTS/audio is enabled) */}
                          {isEnglishListening && (
                              <div className="mb-6 space-y-3">
                                  <div className="text-sm font-semibold text-slate-600">
                                      <span className="mr-2 inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700 border border-blue-100">
                                          Тыңдалым
                                      </span>
                                      {currentQuestion.audioUrl ? (
                                          <span>{currentQuestion.context || 'Аудионы тыңдап, сұраққа жауап беріңіз.'}</span>
                                      ) : (
                                          <span>TTS әлі қосылмаған. Төмендегі мәтінді оқып, сұрақтарға жауап беріңіз.</span>
                                      )}
                                      {!currentQuestion.audioUrl && currentQuestion.context && (
                                          <div className="mt-1 text-xs font-medium text-slate-500">
                                              {currentQuestion.context.replace(/^Listen\b/i, 'Read')}
                                          </div>
                                      )}
                                  </div>

                                  {currentQuestion.audioUrl ? (
                                      <AudioPlayer src={currentQuestion.audioUrl} />
                                  ) : (
                                      showListeningTranscript && (
                                          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 shadow-sm">
                                              <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed">
                                                  <p className="whitespace-pre-line">{currentQuestion.codeSnippet}</p>
                                              </div>
                                          </div>
                                      )
                                  )}
                              </div>
                          )}



                           <div className="flex justify-between items-start gap-4 mb-6">
                             <div className="text-2xl font-serif text-slate-900 leading-relaxed font-medium">
                                 <CodeAwareText text={currentQuestion.text} />
                             </div>
                             <button
                               onClick={() => setReportQuestion({ id: currentQuestion.id, text: currentQuestion.text })}
                               className="shrink-0 p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-bold border border-transparent hover:border-amber-200"
                               title="Сұрақта қате бар ма? Хабарлау"
                             >
                               <AlertTriangle className="w-4 h-4 animate-pulse" />
                               <span className="hidden sm:inline">Қате туралы хабарлау</span>
                             </button>
                           </div>

                          {[SubjectId.DB, SubjectId.M002_SPEECH_DEV].includes(currentQuestion.subjectId) && currentQuestion.type === QuestionType.MULTIPLE && (
                            <div className="mb-5 inline-flex rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-800">
                              1-3 жауапты белгілеңіз. Толық дұрыс жауап - 2 балл, бір қате - 1 балл.
                            </div>
                          )}

                          {currentQuestion.chartData && (
                            <div className="mb-6">
                              <ChartRenderer chartData={currentQuestion.chartData} />
                            </div>
                          )}

                          {/* Reading Passage for Comprehension Questions */}
                          {currentQuestion.readingPassage && (
                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 mb-6 shadow-sm">
                                {currentQuestion.readingPassage.startsWith('CHART:') ? (
                                    (() => {
                                        try {
                                            const chartData = JSON.parse(currentQuestion.readingPassage.replace('CHART:', ''));
                                            return <ChartRenderer chartData={chartData} />;
                                        } catch {
                                            return <p className="text-red-500">Chart parse error</p>;
                                        }
                                    })()
                                ) : currentQuestion.readingPassage.startsWith('IMAGE:') ? (
                                    <div className="flex justify-center">
                                        <img 
                                            src={currentQuestion.readingPassage.replace('IMAGE:', '')} 
                                            alt="Question Diagram" 
                                            className="max-w-full h-auto rounded-lg shadow-sm border border-amber-100"
                                        />
                                    </div>
                                ) : (
                                    <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed">
                                        <p className="whitespace-pre-line">{currentQuestion.readingPassage}</p>
                                    </div>
                                )}
                            </div>
                          )}

                          {currentQuestion.codeSnippet && !showListeningTranscript && (
                            <div className="bg-[#1E1E1E] text-white p-5 rounded-md shadow-inner font-mono text-sm mb-8 overflow-x-auto border border-gray-700">
                                <pre>{currentQuestion.codeSnippet}</pre>
                            </div>
                          )}

                          <div className="grid gap-3 max-w-4xl">
                              {currentQuestion.options.map((option, idx) => {
                                  const isSelected = (answers[currentQuestionId] || []).includes(option.id);
                                  const letter = String.fromCharCode(65 + idx);
                                  
                                  return (
                                      <div 
                                          key={option.id}
                                          onClick={() => handleAnswer(option.id)}
                                          className={`
                                              flex items-start gap-4 p-4 rounded-xl cursor-pointer select-none transition-all duration-200 border-2 text-left
                                              ${isSelected 
                                                  ? 'border-[#3498DB] bg-blue-50/40 shadow-sm' 
                                                  : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}
                                          `}
                                      >
                                          {/* Checkbox Square Style for ALL Types */}
                                          <div className={`
                                              w-5 h-5 border-2 flex items-center justify-center bg-white rounded-[3px] shadow-sm mt-0.5 shrink-0 transition-colors
                                              ${isSelected ? 'border-[#3498DB] bg-blue-50' : 'border-slate-300'}
                                          `}>
                                              {isSelected && <div className="w-2.5 h-2.5 bg-[#3498DB] rounded-[1px]"></div>}
                                          </div>

                                          <div className="text-base sm:text-lg text-slate-800 font-serif leading-snug pt-0.5">
                                              <span className="font-bold mr-2 uppercase">{letter})</span>
                                              <CodeAwareText text={option.text} />
                                          </div>
                                      </div>
                                  );
                              })}
                          </div>
                      </div>

                  </div>
              </div>

          </div>
      </div>

      {/* MODALS */}
      <SectionsModal 
        isOpen={showSections}
        onClose={() => setShowSections(false)}
        questions={questions}
        answers={answers}
        currentSubjectId={currentSubjectId}
        onSelectSubject={(id) => navigate(`/test/${id}/q/1`)}
      />

      <AnswerMapModal 
        isOpen={showAnswerMap}
        onClose={() => setShowAnswerMap(false)}
        questions={questions}
        answers={answers}
        currentQuestionId={currentQuestionId}
        onSelectQuestion={handleSelectQuestion}
      />

      <CalculatorModal 
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />

      <PeriodicTableModal 
        isOpen={showPeriodicTable}
        onClose={() => setShowPeriodicTable(false)}
      />

      <SolubilityTableModal 
        isOpen={showSolubilityTable}
        onClose={() => setShowSolubilityTable(false)}
      />

      <ReportModal 
        isOpen={!!reportQuestion}
        onClose={() => setReportQuestion(null)}
        questionId={reportQuestion?.id || ''}
        questionText={reportQuestion?.text || ''}
      />

      {confirmConfig && (
        <ConfirmModal
          isOpen={isConfirmOpen}
          onClose={() => setIsConfirmOpen(false)}
          onConfirm={confirmConfig.onConfirm}
          message={confirmConfig.message}
          confirmText={confirmConfig.confirmText}
        />
      )}

      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#56CCF2] border-t border-[#4DBBE0] flex justify-around items-center py-2 px-1 z-50 safe-area-bottom">
        <button onClick={() => setShowSections(true)} className="flex flex-col items-center text-white p-1">
          <FileText className="w-5 h-5" />
          <span className="text-[9px] mt-0.5">Бөлімдер</span>
        </button>
        <button onClick={() => setShowAnswerMap(true)} className="flex flex-col items-center text-white p-1">
          <Map className="w-5 h-5" />
          <span className="text-[9px] mt-0.5">Карта</span>
        </button>
        <button onClick={() => setShowAiAssistant(true)} className="flex flex-col items-center text-white p-1">
          <BrainCircuit className="w-5 h-5" />
          <span className="text-[9px] mt-0.5">ИИ Көмекші</span>
        </button>
        <button onClick={() => setShowCalculator(true)} className="flex flex-col items-center text-white p-1">
          <Calculator className="w-5 h-5" />
          <span className="text-[9px] mt-0.5">Есептеу</span>
        </button>
        <button onClick={handleFinish} className="flex flex-col items-center text-red-100 p-1">
          <LogOut className="w-5 h-5" />
          <span className="text-[9px] mt-0.5">Аяқтау</span>
        </button>
      </div>

      {/* AI ASSISTANT DRAWER */}
      <div className={`
        fixed top-0 h-full w-full sm:w-[450px] bg-white border-l border-slate-200 shadow-2xl z-[100]
        flex flex-col transition-all duration-300 ease-in-out
      `}
        style={{
          right: showAiAssistant ? 0 : '-100%',
          transform: 'none',
          translate: 'none',
        }}
      >
        {/* Drawer Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center justify-between shadow-md shrink-0">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 animate-pulse" />
            <div>
              <h3 className="font-bold text-sm">ИИ Мұғалім Көмекшісі</h3>
              <p className="text-[10px] text-blue-100">Сұрақ бойынша көмек сұрау</p>
            </div>
          </div>
          <button 
            onClick={() => setShowAiAssistant(false)} 
            className="p-1 hover:bg-white/20 rounded transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Tabs */}
        <div className="flex border-b border-slate-200 shrink-0 bg-slate-50">
          <button 
            onClick={() => setDrawerTab('ai')}
            className={`flex-1 py-3 text-xs font-bold border-b-2 transition-all ${drawerTab === 'ai' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            🤖 ИИ Көмекші
          </button>
          <button 
            onClick={handleOpenAnalysisTab}
            className={`flex-1 py-3 text-xs font-bold border-b-2 transition-all ${drawerTab === 'analysis' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            🧠 Талдау
          </button>
          <button 
            onClick={() => setDrawerTab('theory')}
            className={`flex-1 py-3 text-xs font-bold border-b-2 transition-all ${drawerTab === 'theory' ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
          >
            📖 Тақырып теориясы
          </button>
        </div>

        {/* Drawer Active Question Context banner */}
        <div className="bg-slate-50 border-b border-slate-200 p-3 text-xs text-slate-600 font-medium shrink-0 flex flex-col gap-0.5">
          <div className="text-slate-400 font-bold uppercase text-[9px] tracking-wider">Сұрақ №{currentIndex + 1} ({currentQuestion?.topic})</div>
          <div className="truncate text-slate-700 font-semibold">
            <CodeAwareText text={currentQuestion.text} />
          </div>
        </div>

        {drawerTab === 'theory' ? (
          /* Theory View */
          <div className="flex-1 overflow-y-auto p-5 bg-white select-none">
            {activeTheory ? (
              <MarkdownRenderer content={activeTheory} />
            ) : (
              <div className="text-slate-400 text-center py-10">Бұл тақырыпқа сәйкес теория табылмады.</div>
            )}
          </div>
        ) : drawerTab === 'analysis' ? (
          /* Current Question Analysis View */
          <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50">
            {analysisResponses[currentQuestionId] ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-relaxed shadow-sm">
                <MarkdownRenderer content={analysisResponses[currentQuestionId]} />
              </div>
            ) : analysisLoading ? (
              <div className="h-full flex items-center justify-center">
                <div className="bg-white text-slate-500 border border-slate-100 rounded-2xl px-4 py-3 text-xs shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  <span className="font-semibold text-slate-400">Сұрақ талданып жатыр...</span>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Осы сұраққа толық талдау</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    ИИ сұрақтың шартын, барлық нұсқаны және дұрыс жауапқа апаратын логиканы бөлек түсіндіреді.
                  </p>
                </div>
                <button
                  onClick={handleGenerateAnalysis}
                  disabled={analysisLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm disabled:opacity-50 transition"
                >
                  Талдауды бастау
                </button>
              </div>
            )}
          </div>
        ) : (
          /* AI Chat View */
          <>
            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {(!chatHistories[currentQuestionId] || chatHistories[currentQuestionId].length === 0) && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">ИИ-ден сұрақ бойынша көмек сұраңыз</h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs">
                      Сұрақтың теориясын, терминдерін немесе шығару логикасын сұраңыз. Толық нұсқа талдауы үшін "Талдау" бөлімін ашыңыз.
                    </p>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid gap-2 w-full max-w-xs pt-4">
                    <button 
                      onClick={handleOpenAnalysisTab}
                      className="bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 shadow-sm transition"
                    >
                      🧠 Толық талдау
                    </button>
                    <button 
                      onClick={() => handleSendAiQuery("Осы сұрақтың жалпы логикасын түсіндіріп берші.")}
                      className="bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 shadow-sm transition"
                    >
                      💡 Сұрақтың логикасын түсіндір
                    </button>
                    <button 
                      onClick={() => handleSendAiQuery("Сұрақтағы негізгі терминдер мен анықтамаларды айтып берші.")}
                      className="bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 shadow-sm transition"
                    >
                      📖 Терминдерді түсіндір
                    </button>
                    <button 
                      onClick={() => handleSendAiQuery("Маған бұл сұрақты шешуге бағыт беретін бір мысал келтірші.")}
                      className="bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 shadow-sm transition"
                    >
                      🎯 Ұқсас мысал келтір
                    </button>
                  </div>
                </div>
              )}

              {chatHistories[currentQuestionId]?.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`
                    max-w-[85%] rounded-2xl px-4 py-2.5 text-xs shadow-sm leading-relaxed whitespace-pre-wrap
                    ${msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-800 border border-slate-100 rounded-bl-none'}
                  `}>
                    {msg.role === 'user' ? (
                      msg.content
                    ) : (
                      <MarkdownRenderer content={msg.content} />
                    )}
                  </div>
                </div>
              ))}

              {aiLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-slate-500 border border-slate-100 rounded-2xl rounded-bl-none px-4 py-3 text-xs shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    <span className="font-semibold text-slate-400">ИИ жауап дайындап жатыр...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-200 bg-white flex items-center gap-2 shrink-0">
              <input 
                type="text" 
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !aiLoading) {
                    handleSendAiQuery();
                  }
                }}
                disabled={aiLoading}
                placeholder="Сұрақ бойынша көмек сұраңыз..."
                className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50"
              />
              <button 
                onClick={() => handleSendAiQuery()}
                disabled={aiLoading || !aiQuery.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl disabled:opacity-50 transition shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>

    </div>
  );
};

export default TestScreen;
