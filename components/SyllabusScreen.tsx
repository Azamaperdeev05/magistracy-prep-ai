import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Book, Globe, Brain, Database, Info, Loader2 } from 'lucide-react';
import { SubjectId } from '../types';
import { SUBJECTS } from '../constants';
import { getSyllabus } from '../services/apiService';
import MarkdownRenderer from './MarkdownRenderer';
import { DB_TEXTBOOK, ALGO_TEXTBOOK, ENGLISH_TEXTBOOK, TGO_TEXTBOOK } from '../data/textbooks';

interface SyllabusScreenProps {
  onBack: () => void;
}

const SyllabusScreen: React.FC<SyllabusScreenProps> = ({ onBack }) => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  const currentSubject = subjectId || 'english';
  
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeChapter, setActiveChapter] = useState<string>('1');

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

  const subjects = [
    { id: 'english', name: 'Ағылшын тілі', icon: Globe, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { id: 'tgo', name: 'ОДАТ (Логика)', icon: Brain, color: 'text-violet-600', bg: 'bg-violet-50' },
    { id: 'algo', name: 'Алгоритмдер', icon: Book, color: 'text-rose-600', bg: 'bg-rose-50' },
    { id: 'db', name: 'Дерекқорлар', icon: Database, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'rules', name: 'Тест ережелері', icon: Info, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'info', name: 'Жалпы ақпарат', icon: Info, color: 'text-slate-600', bg: 'bg-slate-50' },
  ];

  const hasChapters = currentSubject !== 'info' && currentSubject !== 'rules';
  const chapters = 
    currentSubject === 'db' ? DB_TEXTBOOK : 
    currentSubject === 'algo' ? ALGO_TEXTBOOK : 
    currentSubject === 'english' ? ENGLISH_TEXTBOOK : 
    currentSubject === 'tgo' ? TGO_TEXTBOOK : null;
  const currentChapter = chapters ? chapters[activeChapter] : null;

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Артқа
          </button>
          <h1 className="text-lg font-bold text-slate-900">Оқу Бағдарламасы мен Оқулықтар</h1>
          <div className="w-20"></div> {/* Spacer */}
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex-1 w-full flex flex-col lg:flex-row gap-6 p-4 sm:p-6 overflow-hidden">
        {/* Sidebar Tabs */}
        <aside className="w-full lg:w-64 flex lg:flex-col overflow-x-auto lg:overflow-x-visible py-2 lg:py-0 gap-2 lg:gap-2 shrink-0 mb-2 lg:mb-0 scrollbar-none">
          <div className="hidden lg:block text-[10px] font-black uppercase tracking-widest text-slate-400 pl-3 mb-2">Пәндер</div>
          {subjects.map((sub) => (
            <button
              key={sub.id}
              onClick={() => navigate(`/program/${sub.id}`)}
              className={`
                flex items-center p-3 rounded-xl transition-all duration-200 whitespace-nowrap shrink-0 lg:w-full
                ${currentSubject === sub.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-slate-600 hover:bg-white hover:shadow-md border border-slate-100'}
              `}
            >
              <div className={`p-2 rounded-lg mr-3 ${currentSubject === sub.id ? 'bg-white/20' : sub.bg + ' ' + sub.color}`}>
                <sub.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm">{sub.name}</span>
            </button>
          ))}
        </aside>

        {/* Sub-sidebar for Chapters (Only for DB and Algo) */}
        {hasChapters && chapters && (
          <aside className="w-full lg:w-80 flex lg:flex-col overflow-x-auto lg:overflow-x-visible py-2 lg:py-0 gap-1.5 lg:gap-1.5 shrink-0 max-h-[120px] lg:max-h-[calc(100vh-140px)] lg:overflow-y-auto pr-1 mb-2 lg:mb-0 scrollbar-none">
            <div className="hidden lg:block text-[10px] font-black uppercase tracking-widest text-slate-400 pl-3 mb-2">Тақырыптар бойынша оқулық</div>
            {Object.keys(chapters).map((key) => {
              const ch = chapters[key];
              const isActive = activeChapter === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveChapter(key)}
                  className={`
                    text-left p-3 rounded-xl border transition text-xs font-semibold whitespace-nowrap shrink-0 lg:w-full lg:whitespace-normal
                    ${isActive 
                      ? 'bg-blue-50/70 border-blue-200 text-blue-700 font-bold' 
                      : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50/50'}
                  `}
                >
                  {ch.title}
                </button>
              );
            })}
          </aside>
        )}

        {/* Content Area */}
        <main className="flex-1 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col min-h-[500px]">
          {isLoading ? (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
              <Loader2 className="w-10 h-10 animate-spin mb-4" />
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
    </div>
  );
};

export default SyllabusScreen;
