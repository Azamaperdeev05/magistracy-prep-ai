import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ExternalLink, Building2, Check, Info,
  GraduationCap, MapPin, Globe, Users, ChevronDown,
  BookOpen, Award, Layers, Search
} from 'lucide-react';
import { SPECIALTIES } from '../data/specialties';
import { fetchLiveSpecialtyDetail, LiveProgramData } from '../services/univisionService';
import SEO from './SEO';

// Lazy load large JSON data
const loadMasterProgramsData = () => import('../univision_master_programs.json');
const loadUniversitiesData = () => import('../univision_universities.json');

const SpecialtyDetailScreen: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  const [isDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved !== 'light';
  });

  const [activeTab, setActiveTab] = useState<'info' | 'universities' | 'programs'>('info');
  const [expandedUniversity, setExpandedUniversity] = useState<string | null>(null);
  const [uniSearch, setUniSearch] = useState('');
  const [progSearch, setProgSearch] = useState('');

  // Find specialty metadata
  const specialty = SPECIALTIES.find(s => s.code === code);

  // State for lazy loaded data
  const [masterProgramsData, setMasterProgramsData] = useState<any>(null);
  const [universitiesData, setUniversitiesData] = useState<any>(null);
  const [isLoadingData, setIsLoadingData] = useState(true);

  // Load JSON data lazily
  useEffect(() => {
    const loadData = async () => {
      try {
        const [programs, universities] = await Promise.all([
          loadMasterProgramsData(),
          loadUniversitiesData()
        ]);
        setMasterProgramsData(programs.default || programs);
        setUniversitiesData(universities.default || universities);
      } catch (e) {
        console.error('Error loading data:', e);
      } finally {
        setIsLoadingData(false);
      }
    };
    loadData();
  }, []);

  // Initial cached data from JSON
  const initialCached = masterProgramsData 
    ? (masterProgramsData.groups as any[]).find((g: any) => g.code === code) || {
        code: code || '',
        title: `${code} ${specialty?.name || ''}`,
        url: null,
        general_info: {
          "Академиялық дәреже": "Магистратура",
          "Білім беру саласы": "Анықталмаған",
          "Дайындық бағыты": "Анықталмаған"
        },
        grants: [],
        programs: [],
        universities: []
      }
    : {
        code: code || '',
        title: `${code} ${specialty?.name || ''}`,
        url: null,
        general_info: {},
        grants: [],
        programs: [],
        universities: []
      };

  // Reactive state for program data (starts instant with cached, updates with real-time)
  const [programData, setProgramData] = useState<LiveProgramData>(initialCached);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);

  // Real-time sync function
  const handleSyncLive = useCallback(async () => {
    if (!code) return;
    setIsSyncing(true);
    try {
      const liveData = await fetchLiveSpecialtyDetail(code);
      if (liveData) {
        setProgramData(prev => ({
          ...prev,
          ...liveData,
          general_info: liveData.general_info || prev.general_info,
          grants: (liveData.grants && liveData.grants.length > 0) ? liveData.grants : prev.grants,
          programs: (liveData.programs && liveData.programs.length > 0) ? liveData.programs : prev.programs,
          universities: (liveData.universities && liveData.universities.length > 0) ? liveData.universities : prev.universities
        }));
        setIsLive(true);
        setLastSyncTime(liveData.lastFetchedAt || new Date().toLocaleTimeString());
      }
    } catch (err) {
      console.error('Live sync error:', err);
    } finally {
      setIsSyncing(false);
    }
  }, [code]);

  // Initial mount: scroll top & trigger background live sync
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleSyncLive();
  }, [handleSyncLive]);

  const cleanStr = (s: string) => s.toLowerCase().replace(/[^a-zа-яәғқңөұүһі]/g, '');

  const getUniversityDetails = (uniName: string) => {
    if (!universitiesData?.universities) return null;
    const cleanUni = cleanStr(uniName);
    return (universitiesData.universities as any[]).find((u: any) => {
      const cleanTitle = cleanStr(u.title);
      return cleanTitle.includes(cleanUni) || cleanUni.includes(cleanTitle);
    }) || null;
  };

  const filteredUniversities = (programData.universities || []).filter((u: string) =>
    u.toLowerCase().includes(uniSearch.toLowerCase())
  );

  const filteredPrograms = (programData.programs || []).filter((p: any) =>
    p.name?.toLowerCase().includes(progSearch.toLowerCase()) ||
    p.university?.toLowerCase().includes(progSearch.toLowerCase()) ||
    p.code?.toLowerCase().includes(progSearch.toLowerCase())
  );

  const tabs = [
    { id: 'info', label: 'Ақпарат', icon: <Info className="w-4 h-4" /> },
    { id: 'universities', label: `ЖОО (${(programData.universities || []).length})`, icon: <Building2 className="w-4 h-4" /> },
    { id: 'programs', label: `Бағдарламалар (${(programData.programs || []).length})`, icon: <BookOpen className="w-4 h-4" /> },
  ];

  const bg = isDarkMode ? 'bg-[#07090d]' : 'bg-slate-50';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm';
  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textSecondary = isDarkMode ? 'text-slate-400' : 'text-slate-600';
  const textMuted = isDarkMode ? 'text-slate-500' : 'text-slate-400';
  const inputBg = isDarkMode
    ? 'bg-slate-900/60 border-white/5 text-white placeholder-slate-600'
    : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm';

  // Loading state for lazy data
  if (isLoadingData) {
    return (
      <div className={`min-h-screen ${bg} flex items-center justify-center`}>
        <div className={`text-lg font-medium ${textSecondary} animate-pulse`}>Жүктелуде...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bg} transition-colors duration-300`}>
      <SEO
        title={specialty ? `${specialty.code} — ${specialty.name}` : 'Мамандық'}
        description={specialty ? `${specialty.name} мамандығы бойынша магистратураға дайындық. Білім беру бағдарламалары және университеттер.` : 'Мамандық туралы ақпарат'}
        canonical={`https://magis-core.vercel.app/specialties/${code}`}
      />
      {/* Fixed Header */}
      <div className={`sticky top-0 z-30 backdrop-blur-xl border-b ${
        isDarkMode ? 'bg-[#07090d]/90 border-white/5' : 'bg-white/90 border-slate-200'
      }`}>
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className={`p-2 rounded-full border transition-all active:scale-95 ${
                isDarkMode
                  ? 'border-white/5 hover:bg-white/10 text-slate-300'
                  : 'border-slate-200 hover:bg-slate-100 text-slate-600 shadow-sm bg-white'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block">
                {programData.code}
              </span>
              <h1 className={`text-base sm:text-lg font-black uppercase tracking-tight leading-tight mt-0.5 ${textPrimary}`}>
                {specialty?.name || (programData.title ? programData.title.replace(/^[A-Z0-9]+\s+/, '') : programData.code)}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {programData.url && (
              <a
                href={programData.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all active:scale-95 ${
                  isDarkMode
                    ? 'border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                    : 'border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Univision</span>
              </a>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className={`max-w-5xl mx-auto px-4 md:px-8 flex border-t ${
          isDarkMode ? 'border-white/5' : 'border-slate-100'
        }`}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 px-4 py-3 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-500'
                  : `border-transparent ${textMuted} hover:${textSecondary}`
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <AnimatePresence mode="wait">

          {/* ─── INFO TAB ─── */}
          {activeTab === 'info' && (
            <motion.div
              key="info"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Specialty profile pills */}
              {specialty && (
                <div className={`rounded-3xl border p-6 space-y-4 ${cardBg}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-blue-500" />
                    <h2 className={`text-sm font-black uppercase tracking-widest ${textSecondary}`}>
                      Мамандық профильдері
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className={`p-4 rounded-2xl border ${
                      isDarkMode ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-100'
                    }`}>
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-1">
                        1-профиль
                      </span>
                      <span className={`text-sm font-bold ${textPrimary}`}>{specialty.profile1}</span>
                    </div>
                    <div className={`p-4 rounded-2xl border ${
                      isDarkMode ? 'bg-purple-500/5 border-purple-500/20' : 'bg-purple-50 border-purple-100'
                    }`}>
                      <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest block mb-1">
                        2-профиль
                      </span>
                      <span className={`text-sm font-bold ${textPrimary}`}>{specialty.profile2}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* General Info */}
              <div className={`rounded-3xl border p-6 space-y-4 ${cardBg}`}>
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-500" />
                  <h2 className={`text-sm font-black uppercase tracking-widest ${textSecondary}`}>
                    Жалпы мәліметтер
                  </h2>
                </div>
                <div className="space-y-3">
                  {Object.entries(programData.general_info || {}).map(([key, val]: any) => (
                    <div
                      key={key}
                      className={`flex justify-between items-start gap-4 py-3 border-b last:border-0 ${
                        isDarkMode ? 'border-white/5' : 'border-slate-100'
                      }`}
                    >
                      <span className={`text-xs font-semibold ${textMuted} shrink-0`}>{key}</span>
                      <span className={`text-sm font-bold text-right ${textPrimary}`}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grants */}
              <div className={`rounded-3xl border p-6 space-y-4 ${cardBg}`}>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <h2 className={`text-sm font-black uppercase tracking-widest ${textSecondary}`}>
                    Мемлекеттік гранттар
                  </h2>
                </div>
                {(programData.grants || []).length > 0 ? (
                  <div className="grid gap-3">
                    {(programData.grants as any[]).map((grant: any, idx: number) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${
                          isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center justify-center shrink-0">
                            <Check className="w-5 h-5" />
                          </div>
                          <span className={`text-sm font-bold ${textPrimary}`}>
                            {grant["Оқыту нысаны"]}
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          {grant["2025"] && (
                            <div className="text-sm font-black text-emerald-500">
                              2025: <span>{grant["2025"]}</span> грант
                            </div>
                          )}
                          {grant["2024"] && (
                            <div className={`text-xs font-bold ${textMuted}`}>
                              2024: {grant["2024"]} грант
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={`p-8 rounded-2xl border text-center text-sm font-semibold ${
                    isDarkMode ? 'bg-slate-900/20 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-400'
                  }`}>
                    Бұл бағыт бойынша мемлекеттік грант деректері табылмады.
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ─── UNIVERSITIES TAB ─── */}
          {activeTab === 'universities' && (
            <motion.div
              key="universities"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="ЖОО атауы бойынша іздеу..."
                  value={uniSearch}
                  onChange={e => setUniSearch(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputBg}`}
                />
              </div>

              <div className={`text-xs font-semibold ${textMuted}`}>
                {filteredUniversities.length} университет табылды
              </div>

              {filteredUniversities.length > 0 ? (
                <div className="space-y-3">
                  {filteredUniversities.map((uni: string, idx: number) => {
                    const details = getUniversityDetails(uni);
                    const isExpanded = expandedUniversity === uni;

                    return (
                      <motion.div
                        key={idx}
                        layout
                        className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                          isDarkMode
                            ? 'bg-[#0f1219] border-slate-800/80 hover:border-slate-700/60'
                            : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                        }`}
                      >
                        {/* Header Row */}
                        <div
                          onClick={() => setExpandedUniversity(isExpanded ? null : uni)}
                          className={`p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none ${
                            isDarkMode ? 'hover:bg-slate-800/20' : 'hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${
                              isDarkMode
                                ? 'bg-blue-500/10 border border-blue-500/25 text-blue-400'
                                : 'bg-blue-50 border border-blue-200 text-blue-600'
                            }`}>
                              {idx + 1}
                            </span>
                            <div>
                              <span className={`text-sm font-bold leading-tight ${textPrimary}`}>
                                {uni}
                              </span>
                              {details?.general_info?.location && (
                                <div className={`flex items-center gap-1 mt-0.5 text-[11px] font-semibold ${textMuted}`}>
                                  <MapPin className="w-3 h-3" />
                                  {details.general_info.location.split('|')[0].trim()}
                                </div>
                              )}
                            </div>
                          </div>
                          <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${textMuted} ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>

                        {/* Expanded Details */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className={`border-t overflow-hidden ${
                                isDarkMode ? 'border-white/5 bg-slate-950/30' : 'border-slate-100 bg-slate-50/60'
                              }`}
                            >
                              <div className="p-5 space-y-5">
                                {details ? (
                                  <>
                                    {/* Info grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                      {details.general_info?.location && (
                                        <div className={`p-3 rounded-xl border ${
                                          isDarkMode ? 'bg-slate-900/60 border-slate-800/85' : 'bg-white border-slate-200'
                                        }`}>
                                          <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${textMuted}`}>
                                            Орналасқан жері
                                          </span>
                                          <span className={`font-bold ${textPrimary}`}>
                                            {details.general_info.location}
                                          </span>
                                        </div>
                                      )}
                                      {details.general_info?.category && (
                                        <div className={`p-3 rounded-xl border ${
                                          isDarkMode ? 'bg-slate-900/60 border-slate-800/85' : 'bg-white border-slate-200'
                                        }`}>
                                          <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${textMuted}`}>
                                            Мәртебесі & Санаты
                                          </span>
                                          <span className={`font-bold ${textPrimary}`}>
                                            {details.general_info.category} {details.general_info.type || ''}
                                          </span>
                                        </div>
                                      )}
                                      {details.students?.total && (
                                        <div className={`p-3 rounded-xl border ${
                                          isDarkMode ? 'bg-slate-900/60 border-slate-800/85' : 'bg-white border-slate-200'
                                        }`}>
                                          <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${textMuted}`}>
                                            Студенттер саны
                                          </span>
                                          <div className={`flex items-center gap-1.5 font-bold ${textPrimary}`}>
                                            <Users className="w-3.5 h-3.5 text-blue-500" />
                                            {details.students.total}
                                          </div>
                                        </div>
                                      )}
                                      {(details.general_info?.website_url || details.general_info?.website) && (
                                        <div className={`p-3 rounded-xl border ${
                                          isDarkMode ? 'bg-slate-900/60 border-slate-800/85' : 'bg-white border-slate-200'
                                        }`}>
                                          <span className={`text-[10px] font-black uppercase tracking-widest block mb-1 ${textMuted}`}>
                                            Ресми сайты
                                          </span>
                                          <a
                                            href={details.general_info.website_url || details.general_info.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            className="text-blue-500 font-bold hover:underline flex items-center gap-1 text-xs overflow-hidden"
                                          >
                                            <Globe className="w-3 h-3 shrink-0" />
                                            <span className="truncate">
                                              {details.general_info.website_url || details.general_info.website}
                                            </span>
                                            <ExternalLink className="w-3 h-3 shrink-0" />
                                          </a>
                                        </div>
                                      )}
                                    </div>

                                    {/* Description */}
                                    {(details.description_full || details.description) && (
                                      <div className="space-y-1.5">
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${textMuted}`}>
                                          ЖОО туралы
                                        </span>
                                        <p className={`text-sm leading-relaxed ${textSecondary}`}>
                                          {details.description_full || details.description}
                                        </p>
                                      </div>
                                    )}

                                    {/* Contacts */}
                                    {details.contacts && details.contacts.length > 0 && (
                                      <div className="space-y-2">
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${textMuted}`}>
                                          Мекенжай & Байланыс
                                        </span>
                                        {(details.contacts as any[]).map((contact: any, cIdx: number) => (
                                          <div
                                            key={cIdx}
                                            className={`p-3 rounded-xl text-xs space-y-1 ${
                                              isDarkMode
                                                ? 'bg-slate-900/40 text-slate-300'
                                                : 'bg-white border border-slate-100 text-slate-700'
                                            }`}
                                          >
                                            <div className={`font-semibold ${textSecondary}`}>
                                              📍 {contact.address}
                                            </div>
                                            {contact.phones && contact.phones.length > 0 && (
                                              <div className={`flex flex-wrap gap-2 font-medium ${textMuted}`}>
                                                📞 {contact.phones.join(', ')}
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <div className={`text-center text-sm font-semibold py-4 ${textMuted}`}>
                                    ЖОО туралы егжей-тегжейлі мәлімет табылмады.
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className={`p-16 rounded-3xl border text-center text-sm font-semibold ${
                  isDarkMode ? 'bg-[#0f1219] border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-400 shadow-sm'
                }`}>
                  {uniSearch ? 'Іздеу нәтижесі табылмады.' : 'ЖОО тізімі анықталмады.'}
                </div>
              )}
            </motion.div>
          )}

          {/* ─── PROGRAMS TAB ─── */}
          {activeTab === 'programs' && (
            <motion.div
              key="programs"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Бағдарлама атауы немесе университет бойынша іздеу..."
                  value={progSearch}
                  onChange={e => setProgSearch(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${inputBg}`}
                />
              </div>

              <div className={`text-xs font-semibold ${textMuted}`}>
                {filteredPrograms.length} бағдарлама табылды
              </div>

              {filteredPrograms.length > 0 ? (
                <div className="grid gap-3">
                  {filteredPrograms.map((prog: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      className={`p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isDarkMode
                          ? 'bg-[#0f1219] border-slate-800/80 hover:border-slate-700'
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                      }`}
                    >
                      <div className="space-y-2 flex-1">
                        {prog.code && (
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                            isDarkMode ? 'bg-slate-800 border border-slate-700 text-slate-300' : 'bg-slate-100 border border-slate-200 text-slate-600'
                          }`}>
                            {prog.code}
                          </span>
                        )}
                        <h3 className={`text-sm font-black leading-tight ${textPrimary}`}>
                          {prog.name}
                        </h3>
                        {prog.university && (
                          <div className={`flex items-center gap-1.5 text-xs font-semibold ${textMuted}`}>
                            <Building2 className="w-3.5 h-3.5 shrink-0" />
                            {prog.university}
                          </div>
                        )}
                      </div>
                      {prog.url && (
                        <a
                          href={prog.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`self-start sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all active:scale-95 shrink-0 ${
                            isDarkMode
                              ? 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300'
                              : 'border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Ашу
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className={`p-16 rounded-3xl border text-center text-sm font-semibold ${
                  isDarkMode ? 'bg-[#0f1219] border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-400 shadow-sm'
                }`}>
                  {progSearch ? 'Іздеу нәтижесі табылмады.' : 'Бағдарламалар тізімі анықталмады.'}
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpecialtyDetailScreen;
