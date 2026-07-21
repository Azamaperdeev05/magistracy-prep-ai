import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Question, SubjectId, UserAnswers } from './types';
import { EXAM_DURATION_MINUTES, SUBJECTS } from './constants';
import { SPECIALTIES } from './data/specialties';
import { generateQuestionsForSubject } from './services/apiService';
import { isAuthenticated, getSavedUser, logout, getProfile, UserProfile, updateUserProfileFields, saveTestResult } from './services/authService';
import { calculateTestResult } from './services/scoringService';
import ConfirmModal from './components/modals/ConfirmModal';
import { useYandexMetrica } from './hooks/useYandexMetrica';

// Lazy loaded screens for code splitting
const AuthScreen = lazy(() => import('./components/AuthScreen'));
const WelcomeScreen = lazy(() => import('./components/WelcomeScreen'));
const TestScreen = lazy(() => import('./components/TestScreen'));
const ResultScreen = lazy(() => import('./components/ResultScreen'));
const SyllabusScreen = lazy(() => import('./components/SyllabusScreen'));
const HistoryScreen = lazy(() => import('./components/HistoryScreen'));
const PrepScreen = lazy(() => import('./components/PrepScreen'));
const SpecialtiesScreen = lazy(() => import('./components/SpecialtiesScreen'));
const SpecialtyDetailScreen = lazy(() => import('./components/SpecialtyDetailScreen'));
const TestSetupScreen = lazy(() => import('./components/TestSetupScreen'));
const ConsentGateScreen = lazy(() => import('./components/ConsentGateScreen'));
const AdminScreen = lazy(() => import('./components/AdminScreen'));
const BlogScreen = lazy(() => import('./components/BlogScreen'));
const BlogPostScreen = lazy(() => import('./components/BlogPostScreen'));
const UpgradeModal = lazy(() => import('./components/modals/UpgradeModal'));
const InstallBanner = lazy(() => import('./components/InstallBanner'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#07090d] flex items-center justify-center">
    <div className="text-slate-400 font-bold animate-pulse">Жүктелуде...</div>
  </div>
);

const RootApp: React.FC = () => {
  useYandexMetrica();
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
  const [isInProgress, setIsInProgress] = useState<boolean>(
    () => localStorage.getItem('active_test_in_progress') === 'true'
  );
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
  const cleanupRef = useRef<(() => void) | null>(null);

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

  // Handle Google redirect result + listen to auth state
  // Optimization: Firebase is only loaded if user is already signed in (saved in localStorage)
  // or if redirect URL might contain auth result (e.g., Google redirect back)
  useEffect(() => {
    let cancelled = false;
    const savedUser = getSavedUser();

    // If no saved user and not a redirect back from Google, skip Firebase entirely
    const isAuthRedirect = window.location.search.includes('code=') || window.location.search.includes('state=');
    if (!savedUser && !isAuthRedirect) {
      setIsCheckingAuth(false);
      return;
    }

    const initAuth = async () => {
      const { getAuthInstance } = await import('./firebase');
      const { onAuthStateChanged, getRedirectResult } = await import('firebase/auth');

      let auth;
      try {
        auth = await getAuthInstance();
      } catch (e) {
        console.error('[AUTH] Firebase init failed:', e);
        setIsCheckingAuth(false);
        return;
      }

      if (cancelled || !auth) {
        console.error('[AUTH] Firebase auth is null');
        setIsCheckingAuth(false);
        return;
      }

      console.log('[AUTH] Starting auth flow, auth.currentUser:', auth.currentUser?.email);

      const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
        console.log('[AUTH] onAuthStateChanged fired, user:', fbUser?.email || 'null');
        if (fbUser) {
          try {
            const profile = await getProfile();
            console.log('[AUTH] Profile loaded:', profile.email);
            setUser(profile);
          } catch (error: any) {
            console.error('[AUTH] getProfile error:', error.message);
            setUser(null);
          }
        } else {
          setUser(null);
        }
        setIsCheckingAuth(false);
      });

      getRedirectResult(auth as any)
        .then((result: any) => {
          if (result?.user) {
            console.log('[AUTH] Redirect consumed:', result.user.email);
          }
        })
        .catch((error) => {
          console.error('[AUTH] getRedirectResult error:', error.code, error.message);
        });

      return unsubscribe;
    };

    let unsubscribePromise = initAuth();

    return () => {
      cancelled = true;
      unsubscribePromise.then(unsub => unsub?.());
    };
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

      // Determine profile subjects based on specialty
      const specCode = updatedUser?.specialty_code || 'M094';
      const spec = SPECIALTIES.find(s => s.code === specCode);
      const subjectMap: Record<string, { p3: SubjectId; p4: SubjectId }> = {
        'M094': { p3: SubjectId.ALGO, p4: SubjectId.DB },
        'M095': { p3: SubjectId.M095_ALGO, p4: SubjectId.M095_INFOSEC },
        'M001': { p3: SubjectId.M001_PEDAGOGIKA, p4: SubjectId.M001_PSYCHOLOGY },
        'M002': { p3: SubjectId.M002_PEDAGOGIKA, p4: SubjectId.M002_SPEECH_DEV },
      };
      const subjects = subjectMap[specCode] || subjectMap['M094'];
      const p3Subject = subjects.p3;
      const p4Subject = subjects.p4;

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
      localStorage.setItem('active_test_in_progress', 'true');
      setIsInProgress(true);
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

  const handleFinishTest = async (answers: UserAnswers) => {
    setUserAnswers(answers);
    localStorage.removeItem('active_test_in_progress');
    localStorage.removeItem('active_test_start_time');
    setIsInProgress(false);

    const resultId = `res_${Date.now()}`;
    const resultPayload = {
      resultId,
      questions,
      answers,
      userName: user.full_name,
      timestamp: new Date().toISOString()
    };

    try {
      localStorage.setItem(`test_result_${resultId}`, JSON.stringify(resultPayload));
      localStorage.setItem('latest_result_id', resultId);
      localStorage.setItem('active_test_answers', JSON.stringify(answers));

      if (questions.length > 0) {
        const resObj = calculateTestResult(questions, answers);
        saveTestResult(resObj, questions.map(q => q.id), answers).catch(e => {
          console.error("Firestore history save error:", e);
        });
      }
    } catch (e) {
      console.error("Error saving result payload on finish:", e);
    }

    navigate(`/result/${resultId}`);
  };

  const handleRestart = () => {
    setQuestions([]);
    setUserAnswers({});
    setIsInProgress(false);
    localStorage.removeItem('active_test_questions');
    localStorage.removeItem('active_test_answers');
    localStorage.removeItem('active_test_in_progress');
    localStorage.removeItem('active_test_start_time');
    navigate('/home');
  };

  const handlePracticeWrong = (wrongQuestions: Question[]) => {
    localStorage.removeItem('active_test_answers');
    localStorage.setItem('active_test_in_progress', 'true');
    setIsInProgress(true);
    setQuestions(wrongQuestions);
    setUserAnswers({});
    navigate('/test');
  };

  // Show loading during auth check
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-[#07090d] flex items-center justify-center">
        <div className="text-slate-400 font-bold animate-pulse">Жүктелуде...</div>
      </div>
    );
  }

  // If not authenticated, allow public shared history viewing and blog in guest mode!
  if (!user) {
    const isPublicHistory = window.location.pathname.startsWith('/history');
    const isPublicBlog = window.location.pathname.startsWith('/blog');
    
    if (isPublicBlog) {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/blog" element={<BlogScreen />} />
            <Route path="/blog/:postId" element={<BlogPostScreen />} />
            <Route path="*" element={<AuthScreen onAuthSuccess={handleAuthSuccess} />} />
          </Routes>
        </Suspense>
      );
    }
    
    if (isPublicHistory) {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route 
              path="/history/:historyId?" 
              element={
                <HistoryScreen 
                  onBack={() => navigate('/')} 
                  isGuest={true}
                  onAuthSuccess={handleAuthSuccess}
                />
              } 
            />
            <Route path="*" element={<AuthScreen onAuthSuccess={handleAuthSuccess} />} />
          </Routes>
        </Suspense>
      );
    }
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
      <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route 
          path="/home" 
          element={
            <WelcomeScreen 
              onStart={(gopCode?: string) => navigate(gopCode ? `/test-setup?gop=${gopCode}` : '/test-setup')} 
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
              hasActiveTest={questions.length > 0 && isInProgress}
              onResume={() => navigate('/test')}
              onViewAdmin={() => navigate('/admin')}
            />
          } 
        />
        <Route path="/blog" element={<BlogScreen onBack={() => navigate('/home')} />} />
        <Route path="/blog/:postId" element={<BlogPostScreen onBack={() => navigate('/blog')} />} />
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
          path="/history/:historyId?" 
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
          path="/specialties/:code" 
          element={<SpecialtyDetailScreen />} 
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
            (() => {
              const latestId = localStorage.getItem('latest_result_id');
              if (latestId) {
                return <Navigate to={`/result/${latestId}`} replace />;
              }
              if (questions.length > 0) {
                return (
                  <ResultScreen 
                    questions={questions}
                    answers={userAnswers}
                    onRestart={handleRestart}
                    onPracticeWrong={handlePracticeWrong}
                    userName={user.full_name}
                  />
                );
              }
              return <Navigate to="/home" replace />;
            })()
          } 
        />
        <Route 
          path="/result/:resultId" 
          element={
            <ResultScreen 
              questions={questions}
              answers={userAnswers}
              onRestart={handleRestart}
              onPracticeWrong={handlePracticeWrong}
              userName={user.full_name}
            />
          } 
        />
      </Routes>
      </Suspense>
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
      <InstallBanner />
    </div>
  );
};

const App: React.FC = () => (
  <HelmetProvider>
    <Router>
      <RootApp />
    </Router>
  </HelmetProvider>
);

export default App;
