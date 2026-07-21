import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Book, Globe, Brain, Database, Info, Loader2, Lock } from 'lucide-react';
import { SubjectId } from '../types';
import { SUBJECTS } from '../constants';
import { getSyllabus } from '../services/apiService';
import MarkdownRenderer from './MarkdownRenderer';
import { DB_TEXTBOOK, ALGO_TEXTBOOK, ENGLISH_TEXTBOOK, TGO_TEXTBOOK } from '../data/textbooks';
import { getSavedUser, getProfile, UserProfile } from '../services/authService';
import UpgradeModal from './modals/UpgradeModal';

interface SyllabusScreenProps {
  onBack: () => void;
}

const SyllabusScreen: React.FC<SyllabusScreenProps> = ({ onBack }) => {
  const [isDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const currentSubject = subjectId || 'english';
  
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeChapter, setActiveChapter] = useState<string>('1');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(getSavedUser());
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Fetch the latest profile on mount to get premium status
  useEffect(() => {
    const fetchLatestProfile = async () => {
      try {
        const profile = await getProfile();
        if (profile) {
          setCurrentUser(profile);
        }
      } catch (err) {
        console.error("Error fetching latest profile on mount:", err);
      }
    };
    fetchLatestProfile();
  }, []);

  useEffect(() => {
    setActiveChapter('1');
    const fetchSyllabus = async () => {
      setIsLoading(true);
      const data = await getSyllabus(currentSubject);
      setContent(data);
      setIsLoading(false);
    };
    fetchSyllabus();
  }, [currentSubject]);

  const subjectIcons: Record<string, React.ReactNode> = {
    english: <Globe className="w-5 h-5" />,
    tgo: <Brain className="w-5 h-5" />,
    db: <Database className="w-5 h-5" />,
    algo: <Book className="w-5 h-5" />
  };

  const getChapterData = () => {
    if (currentSubject === 'db') return DB_TEXTBOOK;
    if (currentSubject === 'algo') return ALGO_TEXTBOOK;
    if (currentSubject === 'english') return ENGLISH_TEXTBOOK;
    if (currentSubject === 'tgo') return TGO_TEXTBOOK;
    return null;
  };

  const chapterData = getChapterData();
  const hasChapters = !!chapterData;
  const chapters = chapterData?.chapters;
  const currentChapter = chapters && chapters[activeChapter];

  // Theme styles
  const bg = isDarkMode ? 'bg-[#07090d]' : 'bg-slate-50';
  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textSecondary = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-400';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm';
  const subCardBg = isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200/80';
  const btnBg = isDarkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-xs';

  return (
    <div className={`min-h-screen ${bg} ${textPrimary} flex flex-col transition-colors duration-300 select-text`}>
      {/* Top Header */}
      <header className={`border-b sticky top-0 backdrop-blur-md z-30 ${isDarkMode ? 'bg-[#07090d]/80 border-white/5' : 'bg-white/90 border-slate-200 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className={`p-2 rounded-xl border transition-all active:scale-95 ${btnBg}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">{subjectIcons[currentSubject]}</span>
              <h1 className={`text-lg sm:text-xl font-black ${textPrimary}`}>
                {SUBJECTS[currentSubject as SubjectId]?.name || 'Конспект'}
              </h1>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-400">
            <Info className="w-4 h-4 text-blue-500" />
            <span>Магистратура КТ бағдарламасы бойынша</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
        
        {/* Sub-sidebar for Chapters */}
        {hasChapters && chapters && (
          <aside className="w-full lg:w-80 flex lg:flex-col overflow-x-auto lg:overflow-x-visible py-2 lg:py-0 gap-1.5 shrink-0 max-h-[120px] lg:max-h-[calc(100vh-140px)] lg:overflow-y-auto pr-1 mb-2 lg:mb-0 scrollbar-none">
            <div className={`hidden lg:block text-[10px] font-black uppercase tracking-widest pl-3 mb-2 ${textMuted}`}>
              Тақырыптар бойынша оқулық
            </div>
            {Object.keys(chapters).map((key) => {
              const ch = chapters[key];
              const isActive = activeChapter === key;
              const isFreeChapter = key === '1' || key === '2';
              const isLocked = !isFreeChapter && !currentUser?.is_premium;

              return (
                <button
                  key={key}
                  onClick={() => {
                    if (isLocked) {
                      setShowUpgradeModal(true);
                    } else {
                      setActiveChapter(key);
                    }
                  }}
                  className={`
                    text-left p-3 rounded-xl border transition text-xs font-semibold whitespace-nowrap shrink-0 lg:w-full lg:whitespace-normal
                    ${isActive 
                      ? (isDarkMode ? 'bg-blue-950/40 border-blue-500/40 text-blue-400 font-bold' : 'bg-blue-50/80 border-blue-200 text-blue-700 font-bold') 
                      : (isDarkMode ? 'bg-[#0f1219] border-slate-800 text-slate-400 hover:bg-slate-900' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100')}
                  `}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <span className="truncate lg:whitespace-normal">{ch.title}</span>
                    {isLocked && <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
                  </div>
                </button>
              );
            })}
          </aside>
        )}

        {/* Content Area */}
        <main className={`flex-1 rounded-3xl border overflow-hidden flex flex-col min-h-[500px] ${cardBg}`}>
          {isLoading ? (
            <div className={`flex-1 flex flex-col items-center justify-center ${textMuted}`}>
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-500" />
              <p>Жүктелуде...</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10 scrollbar-hide">
              <div className="max-w-3xl mx-auto">
                {hasChapters && currentChapter ? (
                  <MarkdownRenderer content={currentChapter.content} />
                ) : (
                  <MarkdownRenderer content={content} />
                )}
              </div>
            </div>
          )}
        </main>

      </div>

      <UpgradeModal 
        isOpen={showUpgradeModal} 
        onClose={() => setShowUpgradeModal(false)}
        title="Оқулықтың толық нұсқасын ашыңыз"
        description="Кешенді тестілеудің барлық пәндері бойынша толық оқулықтар мен шексіз ИИ-мұғалім түсіндірмелерін алу үшін Премиум тарифіне өтіңіз."
      />
    </div>
  );
};

export default SyllabusScreen;
