import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Question, SubjectId, UserAnswers } from './types';
import { EXAM_DURATION_MINUTES, SUBJECTS } from './constants';
import { generateQuestionsForSubject } from './services/apiService';
import { isAuthenticated, getSavedUser, logout, getProfile, UserProfile, updateUserProfileFields, deleteUserAccountAndHistory } from './services/authService';
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
import ConfirmModal from './components/modals/ConfirmModal';

const RootApp: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(getSavedUser());
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
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
    navigate('/result');
  };

  const handleRestart = () => {
    setQuestions([]);
    setUserAnswers({});
    navigate('/home');
  };

  const handlePracticeWrong = (wrongQuestions: Question[]) => {
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
              onViewProgram={() => navigate('/program')}
              onViewHistory={() => navigate('/history')}
              onViewPrep={() => navigate('/prep')}
              onViewSpecialties={() => navigate('/specialties')}
              userName={user.full_name}
              specialtyCode={user.specialty_code}
              specialtyName={user.specialty_name}
              onLogout={handleLogout}
              onDeleteAccount={() => {
                triggerConfirm(
                  "Аккаунтыңызды және барлық тест нәтижелеріңізді деректер базасынан біржола өшіруді қалайсыз ба?\nБұл әрекетті кері қайтару мүмкін емес.",
                  async () => {
                    try {
                      await deleteUserAccountAndHistory();
                      setUser(null);
                      navigate('/');
                    } catch (error: any) {
                      triggerAlert(error.message || "Деректерді өшіру кезінде қате орын алды", () => {}, "Қате орын алды");
                    }
                  },
                  true,
                  "Өшіру"
                );
              }}
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
          path="/test/:subjectId/q/:qIndex" 
          element={
            questions.length > 0 ? (
              <TestScreen 
                questions={questions} 
                durationMinutes={EXAM_DURATION_MINUTES} 
                onFinish={handleFinishTest}
                userName={user.full_name}
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
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <RootApp />
  </Router>
);

export default App;
