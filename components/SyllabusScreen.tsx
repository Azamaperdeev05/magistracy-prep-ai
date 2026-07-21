import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, BookOpen, Search, Info, Loader2, Lock, 
  FileText, CheckCircle2, Layers, Award, Sparkles, BrainCircuit, Globe 
} from 'lucide-react';
import MarkdownRenderer from './MarkdownRenderer';
import { getSavedUser, getProfile, UserProfile } from '../services/authService';
import UpgradeModal from './modals/UpgradeModal';

interface SyllabusScreenProps {
  onBack: () => void;
}

interface SpecData {
  specialties: Record<string, {
    code: string;
    title: string;
    spec: string;
    p1: { subject: string; content: string } | null;
    p2: { subject: string; content: string } | null;
  }>;
  generalSubjects: Record<string, string>;
}

const SyllabusScreen: React.FC<SyllabusScreenProps> = ({ onBack }) => {
  const [isDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();

  const [specData, setSpecData] = useState<SpecData | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(getSavedUser());
  const [selectedCode, setSelectedCode] = useState<string>(() => {
    return currentUser?.specialty_code || 'M094';
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'spec' | 'p1' | 'p2' | 'odad'>('spec');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Load specifications dataset lazily
  useEffect(() => {
    const loadDataset = async () => {
      try {
        const mod = await import('../data/specificationsData.json');
        setSpecData(mod.default || mod);
      } catch (err) {
        console.error("Failed to load specifications data:", err);
      } finally {
        setIsLoadingData(false);
      }
    };
    loadDataset();
  }, []);

  // Fetch latest profile on mount
  useEffect(() => {
    const fetchLatestProfile = async () => {
      try {
        const profile = await getProfile();
        if (profile) {
          setCurrentUser(profile);
          if (profile.specialty_code && !selectedCode) {
            setSelectedCode(profile.specialty_code);
          }
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };
    fetchLatestProfile();
  }, []);

  // Active specialty item
  const currentSpec = useMemo(() => {
    if (!specData?.specialties) return null;
    return specData.specialties[selectedCode] || Object.values(specData.specialties)[0];
  }, [specData, selectedCode]);

  // List of specialties matching search query
  const filteredSpecialties = useMemo(() => {
    if (!specData?.specialties) return [];
    const list = Object.values(specData.specialties);
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase().trim();
    return list.filter(item => 
      item.code.toLowerCase().includes(q) || 
      (item.title && item.title.toLowerCase().includes(q))
    );
  }, [specData, searchQuery]);

  // Theme styles
  const bg = isDarkMode ? 'bg-[#07090d]' : 'bg-slate-50';
  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm';
  const btnBg = isDarkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-xs';

  return (
    <div className={`min-h-screen ${bg} ${textPrimary} flex flex-col transition-colors duration-300 select-text`}>
      {/* Top Navigation Bar */}
      <header className={`border-b sticky top-0 backdrop-blur-md z-30 ${isDarkMode ? 'bg-[#07090d]/90 border-white/5' : 'bg-white/90 border-slate-200 shadow-xs'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className={`p-2.5 rounded-xl border transition-all active:scale-95 ${btnBg}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-lg sm:text-xl font-black flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500 shrink-0" />
                Тест Спецификациясы мен Үлгілік Тапсырмалар
              </h1>
              <p className="text-xs font-medium text-slate-400 hidden sm:block">
                ҚР Ұлттық тестілеу орталығының (ҰТО) ресми дайындық құжаттамасы
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/specialties')}
              className="px-3.5 py-2 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 text-xs font-bold hover:bg-blue-500/20 transition flex items-center gap-2"
            >
              <span>Мамандықты өзгерту ({selectedCode})</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
        
        {/* Left Sidebar: Specialty Group List & Search */}
        <aside className="w-full lg:w-80 flex flex-col gap-3 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input 
              type="text"
              placeholder="Мамандық коды немесе атауы..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDarkMode ? 'bg-[#0f1219] border-slate-800 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
              }`}
            />
          </div>

          {/* Specialty List */}
          <div className={`rounded-2xl border p-2 flex flex-col gap-1 max-h-[380px] lg:max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin ${cardBg}`}>
            {isLoadingData ? (
              <div className="p-8 text-center text-xs text-slate-400 font-bold flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-500" /> Құжаттама жүктелуде...
              </div>
            ) : filteredSpecialties.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-400 font-medium">
                Мамандық табылмады
              </div>
            ) : (
              filteredSpecialties.map((item) => {
                const isSelected = selectedCode === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => {
                      setSelectedCode(item.code);
                      setActiveTab('spec');
                    }}
                    className={`text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between gap-3 ${
                      isSelected 
                        ? (isDarkMode ? 'bg-blue-600/20 border-blue-500 text-blue-400 font-extrabold' : 'bg-blue-50 border-blue-200 text-blue-700 font-extrabold') 
                        : (isDarkMode ? 'border-transparent text-slate-400 hover:bg-slate-800/50' : 'border-transparent text-slate-700 hover:bg-slate-100')
                    }`}
                  >
                    <div className="flex flex-col truncate">
                      <span className="font-mono text-[11px] font-black">{item.code}</span>
                      <span className="truncate font-medium text-[11px] opacity-90">{item.title || item.code}</span>
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />}
                  </button>
                );
              })
            )}
          </div>
        </aside>

        {/* Right Content Area: Documentation */}
        <main className={`flex-1 rounded-3xl border overflow-hidden flex flex-col min-h-[600px] ${cardBg}`}>
          {isLoadingData || !currentSpec ? (
            <div className="flex-1 flex flex-col items-center justify-center p-12 text-slate-400">
              <Loader2 className="w-10 h-10 animate-spin text-blue-500 mb-3" />
              <p className="text-sm font-bold">Құжаттама деректері дайындалуда...</p>
            </div>
          ) : (
            <>
              {/* Header Title Banner */}
              <div className={`p-6 border-b flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isDarkMode ? 'border-white/5 bg-slate-900/30' : 'border-slate-100 bg-slate-50/50'}`}>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-2">
                    КТ Ресми Спецификациясы ({currentSpec.code})
                  </span>
                  <h2 className="text-xl font-black text-slate-800 dark:text-white">
                    {currentSpec.title || `${currentSpec.code} Дайындық спецификациясы`}
                  </h2>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className={`border-b px-6 flex items-center gap-2 overflow-x-auto scrollbar-none ${isDarkMode ? 'border-white/5 bg-slate-950/40' : 'border-slate-100 bg-slate-100/50'}`}>
                <button
                  onClick={() => setActiveTab('spec')}
                  className={`py-3.5 px-4 text-xs font-black border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === 'spec'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  <FileText className="w-4 h-4" /> Тест Спецификациясы
                </button>

                <button
                  onClick={() => setActiveTab('p1')}
                  className={`py-3.5 px-4 text-xs font-black border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === 'p1'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  <BookOpen className="w-4 h-4" /> 1-Бейіндік пән
                  {currentSpec.p1 && <span className="w-2 h-2 rounded-full bg-emerald-500"></span>}
                </button>

                <button
                  onClick={() => setActiveTab('p2')}
                  className={`py-3.5 px-4 text-xs font-black border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === 'p2'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  <Layers className="w-4 h-4" /> 2-Бейіндік пән
                  {currentSpec.p2 && <span className="w-2 h-2 rounded-full bg-indigo-500"></span>}
                </button>

                <button
                  onClick={() => setActiveTab('odad')}
                  className={`py-3.5 px-4 text-xs font-black border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === 'odad'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  <Globe className="w-4 h-4" /> Шет тілі & ОДАТ
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                {activeTab === 'spec' && (
                  <div className="max-w-4xl mx-auto space-y-6">
                    {currentSpec.spec ? (
                      <MarkdownRenderer content={currentSpec.spec} />
                    ) : (
                      <div className="text-center py-12 text-slate-400 text-xs font-semibold">
                        Бұл мамандық тобы үшін спецификация мәтіні дайындалуда.
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'p1' && (
                  <div className="max-w-4xl mx-auto space-y-6">
                    {currentSpec.p1 ? (
                      <div>
                        <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                              1-Бейіндік пән: {currentSpec.p1.subject}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              ҰТО ұсынған 1-бейіндік пән бойынша үлгілік тест тапсырмалары мен нұсқалары
                            </p>
                          </div>
                        </div>
                        <MarkdownRenderer content={currentSpec.p1.content} />
                      </div>
                    ) : (
                      <div className="text-center py-16 text-slate-400 text-xs font-semibold">
                        1-бейіндік пән бойынша үлгілік тапсырмалар дайындалуда.
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'p2' && (
                  <div className="max-w-4xl mx-auto space-y-6">
                    {currentSpec.p2 ? (
                      <div>
                        <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-black text-indigo-600 dark:text-indigo-400">
                              2-Бейіндік пән: {currentSpec.p2.subject}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              ҰТО ұсынған 2-бейіндік пән бойынша үлгілік тест тапсырмалары мен нұсқалары
                            </p>
                          </div>
                        </div>
                        <MarkdownRenderer content={currentSpec.p2.content} />
                      </div>
                    ) : (
                      <div className="text-center py-16 text-slate-400 text-xs font-semibold">
                        2-бейіндік пән бойынша үлгілік тапсырмалар дайындалуда.
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'odad' && (
                  <div className="max-w-4xl mx-auto space-y-6">
                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
                      <h3 className="text-sm font-black text-blue-600 dark:text-blue-400 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" /> Шет тілдері және ОДАТ (ТҒО) үлгілік тапсырмалары
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Магистратура кешенді тестілеуінің барлық мамандықтарына ортақ міндетті пәндер
                      </p>
                    </div>

                    {Object.entries(specData?.generalSubjects || {}).map(([title, content]) => (
                      <div key={title} className="mb-10 p-6 rounded-2xl border bg-slate-50/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800">
                        <h4 className="text-base font-black text-slate-800 dark:text-white mb-4 border-b pb-2">
                          {title}
                        </h4>
                        <MarkdownRenderer content={content} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </main>
      </div>

      <UpgradeModal 
        isOpen={showUpgradeModal} 
        onClose={() => setShowUpgradeModal(false)}
        title="Спецификациялар мен үлгілік тапсырмаларды толық ашыңыз"
        description="КТ пәндері бойынша барлық 133 мамандықтың ресми спецификациялары мен құжаттамаларын ашу үшін Премиум тарифіне өтіңіз."
      />
    </div>
  );
};

export default SyllabusScreen;
