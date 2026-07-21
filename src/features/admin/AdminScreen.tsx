import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from '../../../components/Motion';
import { 
  Shield, Users, History, AlertTriangle, Award, Search, 
  Loader2, CheckCircle2, Calendar, ChevronRight, ArrowLeft, 
  Crown, MessageSquare, Trash2, RefreshCw, Terminal, Info, Check, X, Star
} from 'lucide-react';
import { isFirebaseConfigured, getDb } from '../../../firebase';
import { findQuestionsByIds } from '../../../data/questions';
import { Question } from '../../../types';
import { scoreQuestion } from '../../../services/scoringService';
import CodeAwareText from '../test-engine/CodeAwareText';

interface AdminScreenProps {
  onBack: () => void;
}

interface UserFeedback {
  id: string;
  user_uid: string;
  user_email: string;
  user_name: string;
  comment: string;
  rating: number;
  created_at: string;
}

interface FirestoreUser {
  uid: string;
  email: string;
  full_name: string;
  is_premium: boolean;
  specialty_code?: string;
  specialty_name?: string;
  created_at?: string;
}

interface AdminHistoryItem {
  id: number;
  user_uid: string;
  total_score: number;
  max_score: number;
  subject_scores: string;
  correct_count: number;
  total_questions: number;
  created_at: string;
  questions_data?: string;
  answers_data?: string;
}

interface UserReport {
  id: string;
  question_id: string;
  question_text: string;
  user_uid: string;
  user_email: string;
  user_name: string;
  comment: string;
  created_at: string;
}

interface ClientErrorLog {
  id: string;
  message: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  userEmail?: string;
  userName?: string;
  created_at: string;
}

const AdminScreen: React.FC<AdminScreenProps> = ({ onBack }) => {
  const [users, setUsers] = useState<FirestoreUser[]>([]);
  const [historyItems, setHistoryItems] = useState<AdminHistoryItem[]>([]);
  const [reports, setReports] = useState<UserReport[]>([]);
  const [errorLogs, setErrorLogs] = useState<ClientErrorLog[]>([]);
  const [feedbacks, setFeedbacks] = useState<UserFeedback[]>([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'users' | 'history' | 'reports' | 'logs' | 'feedbacks'>('users');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Drill-down states
  const [selectedUser, setSelectedUser] = useState<FirestoreUser | null>(null);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<AdminHistoryItem | null>(null);

  // Stats
  const [stats, setStats] = useState({
    totalUsers: 0,
    premiumUsers: 0,
    totalTests: 0,
    activeReports: 0,
    totalFeedbacks: 0
  });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const database = await getDb();
      const { collection, getDocs, doc, updateDoc, deleteDoc, query, orderBy } = await import('firebase/firestore');
      if (!database) {
        console.error("Firestore database instance not found");
        setIsLoading(false);
        return;
      }

      // Fetch all users
      const usersSnap = await getDocs(collection(database, "users"));
      const fetchedUsers: FirestoreUser[] = [];
      usersSnap.forEach(docSnap => {
        const data = docSnap.data();
        fetchedUsers.push({
          uid: docSnap.id,
          email: data.email || '',
          full_name: data.full_name || 'Қолданушы',
          is_premium: !!data.is_premium,
          specialty_code: data.specialty_code,
          specialty_name: data.specialty_name,
          created_at: data.created_at
        });
      });

      // Fetch all history logs
      const historySnap = await getDocs(collection(database, "history"));
      const fetchedHistory: AdminHistoryItem[] = [];
      historySnap.forEach(docSnap => {
        const data = docSnap.data();
        fetchedHistory.push({
          id: data.id || 0,
          user_uid: data.user_uid || '',
          total_score: data.total_score || 0,
          max_score: data.max_score || 0,
          subject_scores: data.subject_scores || '{}',
          correct_count: data.correct_count || 0,
          total_questions: data.total_questions || 0,
          created_at: data.created_at || new Date().toISOString(),
          questions_data: data.questions_data,
          answers_data: data.answers_data
        });
      });
      // Sort history by date desc
      fetchedHistory.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      // Fetch all reports
      const reportsSnap = await getDocs(collection(database, "reports"));
      const fetchedReports: UserReport[] = [];
      reportsSnap.forEach(docSnap => {
        const data = docSnap.data();
        fetchedReports.push({
          id: docSnap.id,
          question_id: data.question_id || '',
          question_text: data.question_text || '',
          user_uid: data.user_uid || '',
          user_email: data.user_email || '',
          user_name: data.user_name || '',
          comment: data.comment || '',
          created_at: data.created_at || new Date().toISOString()
        });
      });
      fetchedReports.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      // Fetch all client errors
      const logsSnap = await getDocs(collection(database, "client_errors"));
      const fetchedLogs: ClientErrorLog[] = [];
      logsSnap.forEach(docSnap => {
        const data = docSnap.data();
        fetchedLogs.push({
          id: docSnap.id,
          message: data.message || '',
          stack: data.stack,
          url: data.url,
          userAgent: data.userAgent,
          userEmail: data.userEmail,
          userName: data.userName,
          created_at: data.created_at || new Date().toISOString()
        });
      });
      fetchedLogs.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      // Fetch all feedbacks
      const feedbacksSnap = await getDocs(collection(database, "feedbacks"));
      const fetchedFeedbacks: UserFeedback[] = [];
      feedbacksSnap.forEach(docSnap => {
        const data = docSnap.data();
        fetchedFeedbacks.push({
          id: docSnap.id,
          user_uid: data.user_uid || '',
          user_email: data.user_email || '',
          user_name: data.user_name || '',
          comment: data.comment || '',
          rating: Number(data.rating || 5),
          created_at: data.created_at || new Date().toISOString()
        });
      });
      fetchedFeedbacks.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      setUsers(fetchedUsers);
      setHistoryItems(fetchedHistory);
      setReports(fetchedReports);
      setErrorLogs(fetchedLogs);
      setFeedbacks(fetchedFeedbacks);

      // Set stats
      setStats({
        totalUsers: fetchedUsers.length,
        premiumUsers: fetchedUsers.filter(u => u.is_premium).length,
        totalTests: fetchedHistory.length,
        activeReports: fetchedReports.length,
        totalFeedbacks: fetchedFeedbacks.length
      });

    } catch (err) {
      console.error("Error fetching admin data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Map of users for easy name/email resolution
  const userMap = React.useMemo(() => {
    const map = new Map<string, FirestoreUser>();
    users.forEach(u => map.set(u.uid, u));
    return map;
  }, [users]);

  // Toggle user premium
  const handleTogglePremium = async (targetUser: FirestoreUser) => {
    const database = await getDb();
    const { doc, updateDoc } = await import('firebase/firestore');
    if (!database) return;
    const newStatus = !targetUser.is_premium;
    setActionLoading(targetUser.uid);
    try {
      const userRef = doc(database, "users", targetUser.uid);
      await updateDoc(userRef, { is_premium: newStatus });
      
      // Update local state
      setUsers(prev => prev.map(u => u.uid === targetUser.uid ? { ...u, is_premium: newStatus } : u));
      setStats(prev => ({
        ...prev,
        premiumUsers: prev.premiumUsers + (newStatus ? 1 : -1)
      }));
    } catch (err) {
      console.error("Error updating premium status:", err);
      alert("Жазылымды өзгерту сәтсіз аяқталды");
    } finally {
      setActionLoading(null);
    }
  };

  // Delete history item
  const handleDeleteHistory = async (itemId: number) => {
    const database = await getDb();
    const { collection, getDocs, doc, deleteDoc } = await import('firebase/firestore');
    if (!database) return;
    if (!window.confirm("Бұл тест нәтижесін өшіруді растайсыз ба?")) return;
    
    setActionLoading(`history-${itemId}`);
    try {
      // Find document in firestore
      const qSnap = await getDocs(collection(database, "history"));
      let docIdToDelete = '';
      qSnap.forEach(d => {
        if (d.data().id === itemId) {
          docIdToDelete = d.id;
        }
      });

      if (docIdToDelete) {
        await deleteDoc(doc(database, "history", docIdToDelete));
        setHistoryItems(prev => prev.filter(item => item.id !== itemId));
        setStats(prev => ({ ...prev, totalTests: Math.max(0, prev.totalTests - 1) }));
      }
    } catch (err) {
      console.error("Error deleting history item:", err);
    } finally {
      setActionLoading(null);
    }
  };

  // Delete report
  const handleDeleteReport = async (reportId: string) => {
    const database = await getDb();
    const { doc, deleteDoc } = await import('firebase/firestore');
    if (!database) return;
    if (!window.confirm("Бұл есепті өшіруді растайсыз ба?")) return;

    setActionLoading(`report-${reportId}`);
    try {
      await deleteDoc(doc(database, "reports", reportId));
      setReports(prev => prev.filter(r => r.id !== reportId));
      setStats(prev => ({ ...prev, activeReports: Math.max(0, prev.activeReports - 1) }));
    } catch (err) {
      console.error("Error deleting report:", err);
    } finally {
      setActionLoading(null);
    }
  };

  // Delete feedback
  const handleDeleteFeedback = async (feedbackId: string) => {
    const database = await getDb();
    const { doc, deleteDoc } = await import('firebase/firestore');
    if (!database) return;
    if (!window.confirm("Бұл кері байланысты өшіруді растайсыз ба?")) return;

    setActionLoading(`feedback-${feedbackId}`);
    try {
      await deleteDoc(doc(database, "feedbacks", feedbackId));
      setFeedbacks(prev => prev.filter(f => f.id !== feedbackId));
      setStats(prev => ({ ...prev, totalFeedbacks: Math.max(0, prev.totalFeedbacks - 1) }));
    } catch (err) {
      console.error("Error deleting feedback:", err);
    } finally {
      setActionLoading(null);
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString('kk-KZ', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Filters
  const filteredUsers = users.filter(u => {
    const term = searchQuery.toLowerCase();
    return u.full_name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term);
  });

  const filteredHistory = historyItems.filter(h => {
    const testUser = userMap.get(h.user_uid);
    const term = searchQuery.toLowerCase();
    if (!term) return true;
    if (testUser) {
      return testUser.full_name.toLowerCase().includes(term) || testUser.email.toLowerCase().includes(term);
    }
    return h.user_uid.toLowerCase().includes(term);
  });

  const filteredReports = reports.filter(r => {
    const term = searchQuery.toLowerCase();
    return r.user_name.toLowerCase().includes(term) || r.user_email.toLowerCase().includes(term) || r.comment.toLowerCase().includes(term);
  });

  const filteredLogs = errorLogs.filter(l => {
    const term = searchQuery.toLowerCase();
    return l.message.toLowerCase().includes(term) || (l.userEmail && l.userEmail.toLowerCase().includes(term));
  });

  const filteredFeedbacks = feedbacks.filter(f => {
    const term = searchQuery.toLowerCase();
    return f.user_name.toLowerCase().includes(term) || f.user_email.toLowerCase().includes(term) || f.comment.toLowerCase().includes(term);
  });

  const [isDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  // Theme styles
  const bg = isDarkMode ? 'bg-[#07090d]' : 'bg-slate-50';
  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textSecondary = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-400';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm';
  const subCardBg = isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200/80';
  const btnBg = isDarkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-xs';

  // Lazy-load questions for history detail view
  const [detailQuestions, setDetailQuestions] = useState<Question[]>([]);
  useEffect(() => {
    if (!selectedHistoryItem) { setDetailQuestions([]); return; }
    try {
      const qIds: string[] = JSON.parse(selectedHistoryItem.questions_data || '[]');
      findQuestionsByIds(qIds).then(setDetailQuestions);
    } catch { setDetailQuestions([]); }
  }, [selectedHistoryItem]);

  const detailInfo = (() => {
    if (!selectedHistoryItem) return null;
    try {
      const answers: Record<string, string[]> = JSON.parse(selectedHistoryItem.answers_data || '{}');
      return { questions: detailQuestions, answers };
    } catch { return null; }
  })();

  return (
    <div className={`min-h-screen ${bg} ${textPrimary} p-4 md:p-8 transition-colors duration-300 select-text`}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className={`p-2.5 rounded-xl border transition-all active:scale-95 ${btnBg}`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className={`text-2xl font-black flex items-center gap-2 ${textPrimary}`}>
                <Shield className="w-6 h-6 text-amber-500" />
                ӘКІМШІЛІК ПАНЕЛЬ
              </h1>
              <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${textMuted}`}>Басқару және мониторинг жүйесі</p>
            </div>
          </div>
          <button
            onClick={fetchData}
            disabled={isLoading}
            className={`px-4 py-2 border font-bold text-xs rounded-xl flex items-center gap-2 active:scale-95 transition-all disabled:opacity-50 ${btnBg}`}
          >
            {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
            Жаңарту
          </button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "Жалпы қолданушылар", value: stats.totalUsers, icon: Users, color: "text-blue-500 bg-blue-500/10" },
            { label: "Premium қолданушылар", value: stats.premiumUsers, icon: Crown, color: "text-amber-500 bg-amber-500/10" },
            { label: "Тапсырылған тесттер", value: stats.totalTests, icon: History, color: "text-purple-500 bg-purple-500/10" },
            { label: "Сұрақ есептері", value: stats.activeReports, icon: AlertTriangle, color: "text-rose-500 bg-rose-500/10" },
            { label: "Кері байланыстар", value: stats.totalFeedbacks, icon: MessageSquare, color: "text-emerald-500 bg-emerald-500/10" }
          ].map((item, i) => (
            <div key={i} className={`rounded-2xl border p-5 flex items-center justify-between shadow-sm ${cardBg}`}>
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${textMuted}`}>{item.label}</p>
                <h3 className={`text-3xl font-black mt-1.5 ${textPrimary}`}>{isLoading ? '...' : item.value}</h3>
              </div>
              <div className={`p-3.5 rounded-xl ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Tab Controls and Search */}
        <div className={`flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b pb-5 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'users', label: 'Қолданушылар', icon: Users },
              { id: 'history', label: 'Тесттер тарихы', icon: History },
              { id: 'reports', label: 'Сұрақ есептері', icon: AlertTriangle },
              { id: 'feedbacks', label: 'Кері байланыс', icon: MessageSquare },
              { id: 'logs', label: 'Қате журналдары', icon: Terminal }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id as any); setSelectedUser(null); setSelectedHistoryItem(null); }}
                className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 uppercase tracking-wider transition-all border ${
                  activeTab === tab.id
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/30'
                    : (isDarkMode ? 'bg-[#0f1219] border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white' : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 shadow-xs')
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative flex-1 max-w-md">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${textMuted}`} />
            <input 
              type="text"
              placeholder={`${
                activeTab === 'users' ? 'Аты немесе пошта бойынша іздеу...' :
                activeTab === 'history' ? 'Пошта бойынша іздеу...' :
                activeTab === 'reports' ? 'Есеп немесе пошта бойынша іздеу...' :
                activeTab === 'feedbacks' ? 'Пікір немесе пошта бойынша іздеу...' : 'Қате бойынша іздеу...'
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`border focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none transition-all w-full font-bold ${
                isDarkMode ? 'bg-[#0f1219] border-slate-800 text-white placeholder-slate-600' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-xs'
              }`}
            />
          </div>
        </div>

        {/* Dynamic Screens */}
        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
              <p className="text-slate-400 font-bold uppercase tracking-wider text-xs">Деректер жүктелуде...</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              
              {/* TAB 1: USERS */}
              {activeTab === 'users' && !selectedUser && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#0f1219] border border-slate-800 rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 bg-slate-900/30 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                          <th className="py-4 px-6">Қолданушы</th>
                          <th className="py-4 px-6">Мамандық</th>
                          <th className="py-4 px-6">Тіркелген күні</th>
                          <th className="py-4 px-6">Жазылым</th>
                          <th className="py-4 px-6 text-right">Әрекеттер</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-xs font-semibold">
                        {filteredUsers.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="py-12 text-center text-slate-400 font-medium">Ешқандай қолданушы табылмады.</td>
                          </tr>
                        ) : (
                          filteredUsers.map(u => (
                            <tr key={u.uid} className="hover:bg-slate-900/10 transition-colors">
                              <td className="py-4 px-6">
                                <div className="font-bold text-white text-sm">{u.full_name}</div>
                                <div className="text-slate-400 font-mono text-[10px] mt-0.5">{u.email}</div>
                              </td>
                              <td className="py-4 px-6 text-slate-400">
                                {u.specialty_code ? (
                                  <span className="font-bold">{u.specialty_code} - {u.specialty_name}</span>
                                ) : (
                                  <span className="text-slate-600">-</span>
                                )}
                              </td>
                              <td className="py-4 px-6 text-slate-400">
                                {formatDate(u.created_at)}
                              </td>
                              <td className="py-4 px-6">
                                {u.is_premium ? (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-black uppercase tracking-wider rounded-full">
                                    👑 Premium
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-wider rounded-full border border-slate-700/50">
                                    Тегін
                                  </span>
                                )}
                              </td>
                              <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                                <button
                                  onClick={() => setSelectedUser(u)}
                                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-750 text-slate-300 hover:text-white rounded-lg transition-all"
                                >
                                  Тарихты көру
                                </button>
                                <button
                                  onClick={() => handleTogglePremium(u)}
                                  disabled={actionLoading === u.uid}
                                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                                    u.is_premium
                                      ? 'bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white'
                                      : 'bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-white'
                                  }`}
                                >
                                  {actionLoading === u.uid ? (
                                    <Loader2 className="w-3 animate-spin" />
                                  ) : u.is_premium ? (
                                    'Жазылымды алу'
                                  ) : (
                                    'Жазылым қосу'
                                  )}
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* USER DRILL DOWN (History lists for a selected user) */}
              {activeTab === 'users' && selectedUser && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setSelectedUser(null)}
                      className="p-2 hover:bg-slate-800 rounded-xl transition-all border border-slate-800"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <h2 className="text-xl font-bold text-white">{selectedUser.full_name} — Нәтижелер тарихы</h2>
                      <p className="text-slate-400 text-xs">{selectedUser.email}</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {historyItems.filter(h => h.user_uid === selectedUser.uid).length === 0 ? (
                      <div className="bg-[#0f1219] border border-dashed border-slate-800 p-12 text-center rounded-2xl text-slate-400 font-medium">
                        Қолданушы әлі бірде-бір тест тапсырмаған.
                      </div>
                    ) : (
                      historyItems.filter(h => h.user_uid === selectedUser.uid).map(h => (
                        <div
                          key={h.id}
                          onClick={() => setSelectedHistoryItem(h)}
                          className="bg-[#0f1219] border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                              <Award className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-xs text-slate-400 font-bold mb-1 flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" /> {formatDate(h.created_at)}
                              </div>
                              <h4 className="text-lg font-black text-white">Ұпай: {h.total_score} / {h.max_score}</h4>
                              <p className="text-xs text-slate-400 mt-0.5">{h.correct_count} дұрыс жауап | {h.total_questions} сұрақ барлығы</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <div className="text-xl font-black text-blue-400">
                                {Math.round((h.total_score / h.max_score) * 100)}%
                              </div>
                              <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Табыстылық</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-600" />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}

              {/* TAB 2: HISTORY LOGS */}
              {activeTab === 'history' && !selectedHistoryItem && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#0f1219] border border-slate-800 rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 bg-slate-900/30 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                          <th className="py-4 px-6">Қолданушы</th>
                          <th className="py-4 px-6">Ұпай</th>
                          <th className="py-4 px-6">Уақыты</th>
                          <th className="py-4 px-6 text-right">Әрекеттер</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-xs font-semibold">
                        {filteredHistory.length === 0 ? (
                          <tr>
                            <td colSpan={4} className="py-12 text-center text-slate-400 font-medium">Ешқандай тест тарихы табылмады.</td>
                          </tr>
                        ) : (
                          filteredHistory.map(h => {
                            const testUser = userMap.get(h.user_uid);
                            return (
                              <tr key={h.id} className="hover:bg-slate-900/10 transition-colors">
                                <td className="py-4 px-6">
                                  <div className="font-bold text-white text-sm">
                                    {testUser ? testUser.full_name : 'Жойылған қолданушы'}
                                  </div>
                                  <div className="text-slate-400 font-mono text-[10px] mt-0.5">
                                    {testUser ? testUser.email : h.user_uid}
                                  </div>
                                </td>
                                <td className="py-4 px-6">
                                  <div className="font-extrabold text-sm text-blue-400">{h.total_score} / {h.max_score}</div>
                                  <div className="text-[10px] text-slate-400 mt-0.5">{Math.round((h.total_score / h.max_score) * 100)}% табыстылық</div>
                                </td>
                                <td className="py-4 px-6 text-slate-400">
                                  {formatDate(h.created_at)}
                                </td>
                                <td className="py-4 px-6 text-right space-x-2">
                                  <button
                                    onClick={() => setSelectedHistoryItem(h)}
                                    className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:border-slate-750 text-slate-350 hover:text-white rounded-lg transition-all"
                                  >
                                    Толық талдау
                                  </button>
                                  <button
                                    onClick={() => handleDeleteHistory(h.id)}
                                    disabled={actionLoading === `history-${h.id}`}
                                    className="p-2 bg-rose-500/10 hover:bg-rose-500 border border-rose-500/20 hover:border-rose-500 text-rose-400 hover:text-white rounded-lg transition-all"
                                    title="Тестіні өшіру"
                                  >
                                    {actionLoading === `history-${h.id}` ? (
                                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                    ) : (
                                      <Trash2 className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* DETAILED DRILL DOWN: SINGLE TEST RESULTS REVIEW */}
              {selectedHistoryItem && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedHistoryItem(null)}
                      className="p-2 hover:bg-slate-850 rounded-xl transition-all border border-slate-800"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <h2 className="text-xl font-bold text-white">Тест нәтижесін талдау</h2>
                      <p className="text-slate-400 text-xs">
                        Қолданушы: {userMap.get(selectedHistoryItem.user_uid)?.full_name || 'Белгісіз'} ({userMap.get(selectedHistoryItem.user_uid)?.email || selectedHistoryItem.user_uid})
                      </p>
                    </div>
                  </div>

                  {/* Banner */}
                  <div className="bg-[#0f1219] border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Тест нәтижесі</span>
                      <h3 className="text-2xl font-black text-white mt-1">
                        {selectedHistoryItem.total_score} / {selectedHistoryItem.max_score} ұпай
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {selectedHistoryItem.correct_count} дұрыс жауап | {selectedHistoryItem.total_questions} сұрақ барлығы
                      </p>
                    </div>
                    <div className="text-right">
                      <h2 className="text-4xl font-black text-blue-400">
                        {Math.round((selectedHistoryItem.total_score / selectedHistoryItem.max_score) * 100)}%
                      </h2>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Табыстылық көрсеткіші</span>
                    </div>
                  </div>

                  {/* Question Cards */}
                  {(!detailInfo || detailInfo.questions.length === 0) ? (
                    <div className="text-center py-16 bg-[#0f1219] border border-slate-800 rounded-2xl text-slate-400">
                      Егжей-тегжейлі деректер жүктелмеді немесе бұл ескі тест нұсқасы.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {detailInfo.questions.map((q, idx) => {
                        const userAns = detailInfo.answers[q.id] || [];
                        const scoreRes = scoreQuestion(q, userAns);
                        const isCorrect = scoreRes.correct;

                        return (
                          <div key={q.id} className="bg-[#0f1219] border border-slate-800 rounded-xl p-5 space-y-3">
                            <div className="flex justify-between items-start gap-4">
                              <h4 className="font-bold text-white text-sm">
                                Сұрақ №{idx + 1}: <CodeAwareText text={q.text} subjectId={q.subjectId} />
                              </h4>
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                                isCorrect ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                              }`}>
                                {isCorrect ? 'Дұрыс' : 'Қате'} ({scoreRes.score}/{scoreRes.max} балл)
                              </span>
                            </div>

                            {q.codeSnippet && (
                              <pre className="bg-black/50 p-3 rounded-lg font-mono text-[10px] overflow-x-auto border border-slate-800 text-slate-300">
                                {q.codeSnippet}
                              </pre>
                            )}

                            {/* Options */}
                            <div className="grid gap-2 pl-4 border-l border-slate-800">
                              {q.options.map((opt, optIdx) => {
                                const letter = String.fromCharCode(65 + optIdx);
                                const isOptSelected = userAns.includes(opt.id);
                                const isOptCorrect = q.correctOptionIds.includes(opt.id);

                                let optClass = "text-slate-400";
                                let wrapClass = "";
                                if (isOptCorrect) {
                                  optClass = "text-emerald-400 font-bold";
                                  wrapClass = "bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/10";
                                } else if (isOptSelected && !isOptCorrect) {
                                  optClass = "text-rose-400 font-semibold";
                                  wrapClass = "bg-rose-500/5 p-2 rounded-lg border border-rose-500/10";
                                } else if (isOptSelected) {
                                  wrapClass = "bg-slate-800/40 p-2 rounded-lg";
                                }

                                return (
                                  <div key={opt.id} className={`text-xs flex items-center justify-between gap-4 ${wrapClass}`}>
                                    <span className={optClass}>{letter}) <CodeAwareText text={opt.text} subjectId={q.subjectId} /></span>
                                    <div className="flex gap-1.5 shrink-0 text-[9px] font-bold uppercase tracking-wider">
                                      {isOptCorrect && <span className="bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/10">Дұрыс жауап</span>}
                                      {isOptSelected && <span className="bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/10">Таңдады</span>}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}

              {/* TAB 3: REPORTS */}
              {activeTab === 'reports' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 text-left"
                >
                  {filteredReports.length === 0 ? (
                    <div className="bg-[#0f1219] border border-dashed border-slate-800 p-12 text-center rounded-2xl text-slate-400 font-medium">
                      Қазіргі уақытта ешқандай қате туралы есеп жоқ.
                    </div>
                  ) : (
                    filteredReports.map(r => (
                      <div key={r.id} className="bg-[#0f1219] border border-slate-800 rounded-2xl p-5 space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <div className="text-xs text-slate-400 font-bold mb-1 flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" /> {formatDate(r.created_at)}
                            </div>
                            <h4 className="font-extrabold text-sm text-slate-350">
                              Қате жіберуші: <span className="text-white">{r.user_name}</span> ({r.user_email})
                            </h4>
                          </div>
                          <button
                            onClick={() => handleDeleteReport(r.id)}
                            disabled={actionLoading === `report-${r.id}`}
                            className="p-2 bg-rose-500/10 hover:bg-rose-500 border border-rose-500/20 hover:border-rose-500 text-rose-400 hover:text-white rounded-lg transition-all"
                            title="Есепті жою"
                          >
                            {actionLoading === `report-${r.id}` ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs font-semibold text-slate-400">
                          <span className="text-[10px] font-black uppercase text-rose-400 tracking-wider block mb-1">Сұрақ ID: {r.question_id}</span>
                          <span className="text-slate-300">{r.question_text}</span>
                        </div>

                        <div className="p-3 bg-amber-500/5 rounded-xl border border-amber-500/15 text-xs text-amber-300 font-semibold leading-relaxed">
                          <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider block mb-1">Қолданушы пікірі:</span>
                          "{r.comment}"
                        </div>
                      </div>
                    ))
                  )}
                </motion.div>
              )}

              {/* TAB 4: CLIENT LOGS */}
              {activeTab === 'logs' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 text-left"
                >
                  {filteredLogs.length === 0 ? (
                    <div className="bg-[#0f1219] border border-dashed border-slate-800 p-12 text-center rounded-2xl text-slate-400 font-medium">
                      Қате журналдары бос. Керемет, ешқандай crash жоқ!
                    </div>
                  ) : (
                    filteredLogs.map(log => (
                      <div key={log.id} className="bg-[#0f1219] border border-slate-800 rounded-2xl p-5 space-y-3 font-mono text-xs">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <div className="text-[10px] text-slate-400 font-bold mb-1 flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" /> {formatDate(log.created_at)}
                            </div>
                            <h4 className="text-rose-400 font-bold text-sm leading-relaxed">{log.message}</h4>
                          </div>
                          <span className="text-[10px] bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded font-black">CRASH</span>
                        </div>

                        <div className="space-y-1.5 text-slate-400 text-[11px] font-semibold border-t border-slate-800 pt-2.5">
                          {log.url && <div><span className="text-slate-600 font-bold">URL:</span> {log.url}</div>}
                          {(log.userName || log.userEmail) && (
                            <div>
                              <span className="text-slate-600 font-bold">Қолданушы:</span> {log.userName || 'Аты жоқ'} ({log.userEmail || 'Пошта жоқ'})
                            </div>
                          )}
                          {log.userAgent && <div><span className="text-slate-600 font-bold">Агент:</span> {log.userAgent}</div>}
                        </div>

                        {log.stack && (
                          <pre className="bg-black/50 p-4 rounded-xl overflow-x-auto text-[10px] border border-slate-800 text-slate-450 leading-normal max-h-48 overflow-y-auto">
                            {log.stack}
                          </pre>
                        )}
                      </div>
                    ))
                  )}
                </motion.div>
              )}

              {/* TAB 5: FEEDBACKS */}
              {activeTab === 'feedbacks' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 text-left"
                >
                  {filteredFeedbacks.length === 0 ? (
                    <div className="bg-[#0f1219] border border-dashed border-slate-800 p-12 text-center rounded-2xl text-slate-400 font-medium">
                      Кері байланыс әлі қалдырылмады.
                    </div>
                  ) : (
                    filteredFeedbacks.map(f => (
                      <div key={f.id} className="bg-[#0f1219] border border-slate-800 rounded-2xl p-5 space-y-4">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <div className="text-xs text-slate-400 font-bold mb-1 flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" /> {formatDate(f.created_at)}
                            </div>
                            <h4 className="font-extrabold text-sm text-slate-350">
                              Қолданушы: <span className="text-white">{f.user_name}</span> ({f.user_email})
                            </h4>
                            {/* Render rating stars */}
                            <div className="flex gap-1 mt-1.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="w-4 h-4"
                                  style={{
                                    fill: star <= f.rating ? '#f59e0b' : 'transparent',
                                    stroke: '#f59e0b',
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          <button
                            onClick={() => handleDeleteFeedback(f.id)}
                            disabled={actionLoading === `feedback-${f.id}`}
                            className="p-2 bg-rose-500/10 hover:bg-rose-500 border border-rose-500/20 hover:border-rose-500 text-rose-400 hover:text-white rounded-lg transition-all"
                            title="Пікірді өшіру"
                          >
                            {actionLoading === `feedback-${f.id}` ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800 text-xs text-slate-300 font-semibold leading-relaxed">
                          "{f.comment}"
                        </div>
                      </div>
                    ))
                  )}
                </motion.div>
              )}

            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
