import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Question, SubjectId, UserAnswers } from './types';
import { EXAM_DURATION_MINUTES, SUBJECTS } from './constants';
import { generateQuestionsForSubject } from './services/apiService';
import { isAuthenticated, getSavedUser, logout, getProfile, UserProfile, updateUserProfileFields } from './services/authService';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AuthScreen from './components/AuthScreen';
import WelcomeScreen from './components/WelcomeScreen';
import TestScreen from './components/TestScreen';
import ResultScreen from './components/ResultScreen';
import SyllabusScreen from './components/SyllabusScreen';
import HistoryScreen from './components/HistoryScreen';
import PrepScreen from './components/PrepScreen';
import SpecialtiesScreen from './components/SpecialtiesScreen';
import TestSetupScreen from './components/TestSetupScreen';
import ConsentGateScreen from './components/ConsentGateScreen';
import AdminScreen from './components/AdminScreen';
import { Shield } from 'lucide-react';
import ConfirmModal from './components/modals/ConfirmModal';
import UpgradeModal from './components/modals/UpgradeModal';

const RootApp: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(getSavedUser());
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [questions, setQuestions] = useState<Question[]>(() => {
    const saved = localStorage.getItem('active_test_questions');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error parsing saved active_test_questions:", e);
      return [];
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>(() => {
    const saved = localStorage.getItem('active_test_answers');
    try {
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Error parsing saved active_test_answers:", e);
      return {};
    }
  });
  const [showGlobalUpgradeModal, setShowGlobalUpgradeModal] = useState(false);
  const navigate = useNavigate();

  // Confirm Modal state
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmConfig, setConfirmConfig] = useState<{
    message: string;
    onConfirm: () => void;
    isDanger?: boolean;
    confirmText?: string;
    cancelText?: string;
    isAlert?: boolean;
    title?: string;
  } | null>(null);

  const triggerConfirm = (
    message: string, 
    onConfirm: () => void, 
    isDanger: boolean = false,
    confirmText?: string
  ) => {
    setConfirmConfig({ message, onConfirm, isDanger, confirmText, isAlert: false });
    setIsConfirmOpen(true);
  };

  const triggerAlert = (
    message: string,
    onConfirm: () => void = () => {},
    title?: string,
    confirmText: string = 'Түсінікті'
  ) => {
    setConfirmConfig({ 
      message, 
      onConfirm, 
      isDanger: false, 
      confirmText, 
      isAlert: true,
      title
    });
    setIsConfirmOpen(true);
  };

  // Listen to Firebase Auth state reactively
  useEffect(() => {
    if (!auth) {
      setIsCheckingAuth(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        try {
          const profile = await getProfile();
          setUser(profile);
        } catch (error) {
          console.error("Error setting user profile on auth change:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setIsCheckingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    try {
      if (questions && questions.length > 0) {
        localStorage.setItem('active_test_questions', JSON.stringify(questions));
      } else {
        localStorage.removeItem('active_test_questions');
      }
    } catch (e) {
      console.error("Error setting active_test_questions to localStorage:", e);
    }
  }, [questions]);

  const handleAuthSuccess = (userData: { id: number; email: string; full_name: string }) => {
    setUser(userData as UserProfile);
    navigate('/home');
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate('/');
  };

  const startTest = async (name: string) => {
    setIsLoading(true);
    try {
      const updatedUser = getSavedUser();
      if (updatedUser) {
        setUser(updatedUser);
      }
      const p1 = generateQuestionsForSubject(SubjectId.ENGLISH, SUBJECTS[SubjectId.ENGLISH].totalQuestions);
      const p2 = generateQuestionsForSubject(SubjectId.TGO, SUBJECTS[SubjectId.TGO].totalQuestions);

      const p3Subject = SubjectId.ALGO;
      const p4Subject = SubjectId.DB;

      const p3 = generateQuestionsForSubject(p3Subject, SUBJECTS[p3Subject].totalQuestions);
      const p4 = generateQuestionsForSubject(p4Subject, SUBJECTS[p4Subject].totalQuestions);

      const results = await Promise.all([p1, p2, p3, p4]);
      const allQuestions = results.flat();

      if (allQuestions.length === 0) {
        triggerAlert("Сұрақтарды жүктеу кезінде қате орын алды. Қайта көріңіз.");
        setIsLoading(false);
        return;
      }

      localStorage.removeItem('active_test_answers');
      setQuestions(allQuestions);
      setUserAnswers({});
      navigate('/test');
    } catch (error) {
      console.error(error);
      triggerAlert("Тестті бастау кезінде қате орын алды.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinishTest = (answers: UserAnswers) => {
    setUserAnswers(answers);
    try {
      localStorage.setItem('active_test_answers', JSON.stringify(answers));
    } catch (e) {
      console.error("Error saving active_test_answers on finish:", e);
    }
    navigate('/result');
  };

  const handleRestart = () => {
    setQuestions([]);
    setUserAnswers({});
    localStorage.removeItem('active_test_questions');
    localStorage.removeItem('active_test_answers');
    navigate('/home');
  };

  const handlePracticeWrong = (wrongQuestions: Question[]) => {
    localStorage.removeItem('active_test_answers');
    setQuestions(wrongQuestions);
    setUserAnswers({});
    navigate('/test');
  };

  // Show loading during auth check
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-[#07090d] flex items-center justify-center">
        <div className="text-slate-500 font-bold animate-pulse">Жүктелуде...</div>
      </div>
    );
  }

  // If not authenticated, show auth screen
  if (!user) {
    return <AuthScreen onAuthSuccess={handleAuthSuccess} />;
  }

  // If authenticated but has not accepted consent, show the Consent Gate!
  if (!user.consent?.accepted) {
    return (
      <ConsentGateScreen 
        onAccept={(consentData) => {
          const updatedUser = updateUserProfileFields({ consent: consentData });
          setUser(updatedUser);
        }} 
        onLogout={handleLogout} 
      />
    );
  }

  // If device limit exceeded, show the Device Lock page!
  if (user.is_device_limit_exceeded) {
    return (
      <div className="min-h-screen bg-[#07090d] flex items-center justify-center p-6 text-center select-none text-slate-200">
        <div className="bg-[#0f1219] border border-red-500/25 rounded-3xl max-w-md w-full p-8 shadow-2xl space-y-6">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto animate-pulse">
            <Shield className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white tracking-tight uppercase">Құрылғы саны шектеулі</h2>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Қауіпсіздік жүйесі</p>
          </div>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">
            Сливки және аккаунтты таратуды қорғау мақсатында бір профильге ең көбі **2 құрылғы** байлауға рұқсат етілген. 
            Сіз бұл шектеуден асып кеттіңіз.
          </p>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 text-xs text-left text-slate-500 font-semibold space-y-1">
            <div>• Құрылғыңыз өзгерді ме?</div>
            <div>• Басқа браузер немесе режиммен кірдіңіз бе?</div>
            <div>• Ескі құрылғыларды нөлдету үшін әкімшімен хабарласыңыз.</div>
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <a 
              href="mailto:azamaperdeev05@gmail.com" 
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-[0.98] block text-center"
            >
              Әкімшіге хабарласу
            </a>
            <button 
              onClick={handleLogout}
              className="w-full py-3 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all active:scale-[0.98]"
            >
              Аккаунттан шығу
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated: show main app
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route 
          path="/home" 
          element={
            <WelcomeScreen 
              onStart={() => navigate('/test-setup')} 
              isLoading={isLoading} 
              onViewProgram={(subId) => navigate(subId ? `/program/${subId}` : '/program')}
              onViewHistory={() => navigate('/history')}
              onViewPrep={() => navigate('/prep')}
              onViewSpecialties={() => navigate('/specialties')}
              userName={user.full_name}
              userEmail={user.email}
              isPremium={user.is_premium}
              onUpgrade={() => setShowGlobalUpgradeModal(true)}
              specialtyCode={user.specialty_code}
              specialtyName={user.specialty_name}
              onLogout={handleLogout}
              hasActiveTest={questions.length > 0}
              onResume={() => navigate('/test')}
              onViewAdmin={() => navigate('/admin')}
            />
          } 
        />
        <Route 
          path="/test-setup" 
          element={
            <TestSetupScreen 
              onStart={startTest} 
              isLoading={isLoading} 
            />
          } 
        />
        <Route 
          path="/prep" 
          element={<PrepScreen onBack={() => navigate('/home')} />} 
        />
        <Route 
          path="/program/:subjectId?" 
          element={<SyllabusScreen onBack={() => navigate('/home')} />} 
        />
        <Route 
          path="/history" 
          element={<HistoryScreen onBack={() => navigate('/home')} />} 
        />
        <Route 
          path="/specialties" 
          element={
            <SpecialtiesScreen 
              onBack={() => navigate('/home')} 
              onSpecialtyChange={(updatedUser) => setUser(updatedUser)}
            />
          } 
        />
        <Route 
          path="/admin" 
          element={
            user.email === 'azamaperdeev05@gmail.com' ? (
              <AdminScreen onBack={() => navigate('/home')} />
            ) : (
              <Navigate to="/home" replace />
            )
          } 
        />
        <Route 
          path="/test/:subjectId/q/:qIndex" 
          element={
            questions.length > 0 ? (
              <TestScreen 
                questions={questions} 
                durationMinutes={EXAM_DURATION_MINUTES} 
                onFinish={handleFinishTest}
                user={user}
              />
            ) : (
              <Navigate to="/home" replace />
            )
          } 
        />
        <Route path="/test" element={<Navigate to={`/test/${SubjectId.ENGLISH}/q/1`} replace />} />
        <Route 
          path="/result" 
          element={
            questions.length > 0 ? (
              <ResultScreen 
                questions={questions}
                answers={userAnswers}
                onRestart={handleRestart}
                onPracticeWrong={handlePracticeWrong}
                userName={user.full_name}
              />
            ) : (
              <Navigate to="/home" replace />
            )
          } 
        />
      </Routes>
      <ConfirmModal 
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={confirmConfig?.onConfirm || (() => {})}
        message={confirmConfig?.message || ''}
        isDanger={confirmConfig?.isDanger}
        confirmText={confirmConfig?.confirmText}
        cancelText={confirmConfig?.cancelText}
        isAlert={confirmConfig?.isAlert}
        title={confirmConfig?.title}
      />
      <UpgradeModal
        isOpen={showGlobalUpgradeModal}
        onClose={() => setShowGlobalUpgradeModal(false)}
        userEmail={user?.email || ''}
      />
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <RootApp />
  </Router>
);

export default App;
