import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, BookOpen, Search, FileText, Loader2,
  CheckCircle2, Layers, Globe, ChevronDown, ChevronUp
} from 'lucide-react';
import MarkdownRenderer from '../test-engine/MarkdownRenderer';
import { getSavedUser, getProfile, UserProfile } from '../../../services/authService';

interface SyllabusScreenProps {
  onBack: () => void;
}

interface DocItem {
  title: string;
  content: string;
}

interface SpecialtyItem {
  code: string;
  title: string;
  docs: DocItem[];
}

interface SpecData {
  specialties: Record<string, SpecialtyItem>;
  generalSubjects: Record<string, string>;
  disciplineDocs: Record<string, string>;
}

const SyllabusScreen: React.FC<SyllabusScreenProps> = ({ onBack }) => {
  const [isDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const navigate = useNavigate();

  const [specData, setSpecData] = useState<SpecData | null>(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(getSavedUser());
  const [selectedCode, setSelectedCode] = useState<string>(() => {
    return getSavedUser()?.specialty_code || 'М001';
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'docs' | 'odad'>('docs');
  const [expandedDocs, setExpandedDocs] = useState<Record<string, boolean>>({});

  // Load specifications dataset lazily
  useEffect(() => {
    const loadDataset = async () => {
      try {
        const mod = await import('../../../data/specificationsData.json');
        setSpecData(mod.default as unknown as SpecData);
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
          if (profile.specialty_code) {
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
    // Try exact match first
    if (specData.specialties[selectedCode]) return specData.specialties[selectedCode];
    // Try case-insensitive / latin-cyrillic M match
    const normalized = selectedCode.replace(/^M/i, 'М');
    if (specData.specialties[normalized]) return specData.specialties[normalized];
    // Fallback to first
    return Object.values(specData.specialties)[0] || null;
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

  const toggleDoc = (docTitle: string) => {
    setExpandedDocs(prev => ({ ...prev, [docTitle]: !prev[docTitle] }));
  };

  // Theme styles
  const bg = isDarkMode ? 'bg-[#07090d]' : 'bg-slate-50';
  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm';
  const btnBg = isDarkMode 
    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white' 
    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-xs';

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
                Тест Спецификациясы
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
                <Loader2 className="w-4 h-4 animate-spin text-blue-500" /> Жүктелуде...
              </div>
            ) : filteredSpecialties.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-400 font-medium">
                Мамандық табылмады
              </div>
            ) : (
              filteredSpecialties.map((item) => {
                const isSelected = currentSpec?.code === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => {
                      setSelectedCode(item.code);
                      setActiveTab('docs');
                      setExpandedDocs({});
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
              <p className="text-sm font-bold">Құжаттама дайындалуда...</p>
            </div>
          ) : (
            <>
              {/* Header Title Banner */}
              <div className={`p-6 border-b flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isDarkMode ? 'border-white/5 bg-slate-900/30' : 'border-slate-100 bg-slate-50/50'}`}>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-2">
                    КТ Ресми Спецификациясы ({currentSpec.code})
                  </span>
                  <h2 className="text-xl font-black">
                    {currentSpec.title || `${currentSpec.code} Дайындық спецификациясы`}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {currentSpec.docs.length} пән бойынша спецификация
                  </p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className={`border-b px-6 flex items-center gap-2 overflow-x-auto scrollbar-none ${isDarkMode ? 'border-white/5 bg-slate-950/40' : 'border-slate-100 bg-slate-100/50'}`}>
                <button
                  onClick={() => setActiveTab('docs')}
                  className={`py-3.5 px-4 text-xs font-black border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === 'docs'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  <Layers className="w-4 h-4" /> Бейіндік пәндер
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'}`}>
                    {currentSpec.docs.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('odad')}
                  className={`py-3.5 px-4 text-xs font-black border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
                    activeTab === 'odad'
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  <Globe className="w-4 h-4" /> Жалпы пәндер
                  {specData?.generalSubjects && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'}`}>
                      {Object.keys(specData.generalSubjects).length}
                    </span>
                  )}
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                
                {/* Profile Subjects Tab */}
                {activeTab === 'docs' && (
                  <div className="max-w-4xl mx-auto space-y-4">
                    {currentSpec.docs.length === 0 ? (
                      <div className="text-center py-16 text-slate-400 text-xs font-semibold">
                        Бұл мамандық тобы үшін спецификация мәтіні жоқ.
                      </div>
                    ) : (
                      currentSpec.docs.map((doc, idx) => {
                        const isExpanded = expandedDocs[doc.title] ?? (idx === 0);
                        return (
                          <div 
                            key={doc.title} 
                            className={`rounded-2xl border overflow-hidden transition-all ${isDarkMode ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-white'}`}
                          >
                            {/* Doc Header - Accordion Toggle */}
                            <button
                              onClick={() => toggleDoc(doc.title)}
                              className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                                isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                                  idx === 0 
                                    ? 'bg-blue-500/20 text-blue-500' 
                                    : 'bg-indigo-500/20 text-indigo-500'
                                }`}>
                                  {idx + 1}
                                </div>
                                <div>
                                  <span className={`text-[10px] font-black uppercase tracking-widest ${
                                    idx === 0 ? 'text-blue-500' : 'text-indigo-500'
                                  }`}>
                                    {idx === 0 ? '1-Бейіндік пән' : '2-Бейіндік пән'}
                                  </span>
                                  <h3 className={`text-sm font-black ${textPrimary}`}>{doc.title}</h3>
                                </div>
                              </div>
                              <div className="shrink-0 ml-2">
                                {isExpanded 
                                  ? <ChevronUp className="w-5 h-5 text-slate-400" />
                                  : <ChevronDown className="w-5 h-5 text-slate-400" />
                                }
                              </div>
                            </button>

                            {/* Doc Content */}
                            {isExpanded && (
                              <div className={`px-5 pb-6 pt-2 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                                <MarkdownRenderer content={doc.content} />
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                )}

                {/* General Subjects Tab (ODAD, English) */}
                {activeTab === 'odad' && (
                  <div className="max-w-4xl mx-auto space-y-4">
                    <div className={`p-4 rounded-2xl border mb-6 ${isDarkMode ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
                      <h3 className="text-sm font-black text-blue-600 dark:text-blue-400 flex items-center gap-2">
                        <Globe className="w-4 h-4" /> Барлық мамандыққа ортақ пәндер (Шет тілі & ОДАТ/ТҒО)
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Магистратура кешенді тестілеуінің барлық мамандықтарына ортақ міндетті пәндер
                      </p>
                    </div>

                    {Object.entries(specData?.generalSubjects || {}).map(([title, content]) => {
                      const isExpanded = expandedDocs[`general_${title}`] ?? false;
                      return (
                        <div 
                          key={title} 
                          className={`rounded-2xl border overflow-hidden ${isDarkMode ? 'border-slate-800 bg-slate-900/30' : 'border-slate-200 bg-white'}`}
                        >
                          <button
                            onClick={() => toggleDoc(`general_${title}`)}
                            className={`w-full flex items-center justify-between p-5 text-left transition-colors ${isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'}`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                                <BookOpen className="w-4 h-4" />
                              </div>
                              <h4 className={`text-sm font-black ${textPrimary}`}>{title}</h4>
                            </div>
                            {isExpanded 
                              ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                              : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                            }
                          </button>
                          {isExpanded && (
                            <div className={`px-5 pb-6 pt-2 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                              <MarkdownRenderer content={content} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default SyllabusScreen;
