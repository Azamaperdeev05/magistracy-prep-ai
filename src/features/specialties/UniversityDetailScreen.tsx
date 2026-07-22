import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from '../../components/ui/Motion';
import {
  ArrowLeft, ExternalLink, Building2, MapPin, Globe, Users,
  ChevronDown, ChevronUp, BookOpen, Award, Layers, Search,
  Loader2, GraduationCap, Phone, Mail, Info, Star, BarChart2
} from 'lucide-react';
import { useTheme } from '../../app/ThemeContext';
import SEO from '../../components/ui/SEO';

interface University {
  code: string;
  title: string;
  url: string;
  description?: string;
  description_full?: string;
  logo?: string;
  general_info?: {
    location?: string;
    code?: string;
    category?: string;
    type?: string;
    website?: string;
    website_url?: string;
    city?: string;
    oblast?: string;
  };
  edu_programs?: Record<string, number>;
  students?: {
    total?: string;
    degrees?: Record<string, number>;
  };
  teachers?: {
    total?: string;
    degrees?: Record<string, number>;
  };
  contacts?: Array<{ address: string; phones: string[] }>;
}

interface MasterGroup {
  code: string;
  title: string;
  general_info?: Record<string, string>;
  programs?: Array<{
    code: string;
    name: string;
    url: string;
    university: string;
  }>;
  programs_count?: number;
  universities_count?: number;
}

const UniversityDetailScreen: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const [activeTab, setActiveTab] = useState<'info' | 'magistracy' | 'stats'>('info');
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [universities, setUniversities] = useState<University[]>([]);
  const [masterData, setMasterData] = useState<{ groups: MasterGroup[] }>({ groups: [] });
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  useEffect(() => {
    setIsLoadingData(true);
    Promise.all([
      import('../../../data/univision_universities.json').then((m: any) => m.default || m),
      import('../../../data/univision_master_programs.json').then((m: any) => m.default || m),
    ])
      .then(([uniData, masterData]) => {
        setUniversities(uniData.universities || []);
        setMasterData(masterData || { groups: [] });
      })
      .catch(console.error)
      .finally(() => setIsLoadingData(false));
  }, []);

  // Find university by code or index
  const university = useMemo(() => {
    if (!code) return null;
    // First try to find by code
    const byCode = universities.find(u => u.code === code);
    if (byCode) return byCode;
    // Fallback: try to find by index (for universities with empty codes)
    const idx = parseInt(code, 10);
    if (!isNaN(idx) && idx >= 0 && idx < universities.length) {
      return universities[idx];
    }
    return null;
  }, [universities, code]);

  // Find magistracy programs for this university
  const magistracyPrograms = useMemo(() => {
    if (!university) return [];
    const results: Array<{ groupCode: string; groupTitle: string; programCode: string; programName: string; direction?: string }> = [];

    // Normalize name for matching: remove abbreviations, special chars, trim
    const normalize = (name: string) => name
      .replace(/\s*\(.*?\)\s*/g, '') // Remove parenthesized content
      .replace(/[«»""''„""]/g, '') // Remove quote variants
      .replace(/[^a-zа-яәғқңөұүһіıįųė0-9]/g, '') // Keep only alphanumeric + Kazakh
      .trim()
      .toLowerCase();

    const uniNameNormalized = normalize(university.title);

    masterData.groups.forEach(group => {
      // Only M-prefixed groups are magistracy
      if (!group.code.startsWith('M')) return;

      group.programs?.forEach(prog => {
        const progUniNormalized = normalize(prog.university || '');
        // Match if normalized names are equal, or one contains the other
        if (progUniNormalized === uniNameNormalized ||
            progUniNormalized.includes(uniNameNormalized) ||
            uniNameNormalized.includes(progUniNormalized)) {
          results.push({
            groupCode: group.code,
            groupTitle: group.title,
            programCode: prog.code,
            programName: prog.name,
            direction: group.general_info?.['Дайындық бағыты'],
          });
        }
      });
    });

    return results;
  }, [university, masterData]);

  // Filter programs by search
  const filteredPrograms = useMemo(() => {
    if (!searchQuery.trim()) return magistracyPrograms;
    const q = searchQuery.toLowerCase();
    return magistracyPrograms.filter(p =>
      p.programName.toLowerCase().includes(q) ||
      p.groupTitle.toLowerCase().includes(q) ||
      p.groupCode.toLowerCase().includes(q)
    );
  }, [magistracyPrograms, searchQuery]);

  // Group programs by group code
  const groupedPrograms = useMemo(() => {
    const map = new Map<string, { title: string; programs: typeof filteredPrograms }>();
    filteredPrograms.forEach(p => {
      if (!map.has(p.groupCode)) {
        map.set(p.groupCode, { title: p.groupTitle, programs: [] });
      }
      map.get(p.groupCode)!.programs.push(p);
    });
    return Array.from(map.entries());
  }, [filteredPrograms]);

  // Theme variables
  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-sm';
  const inputBg = isDarkMode ? 'bg-[#0f1219] border-slate-800 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400';
  const tabActive = isDarkMode ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600';
  const tabInactive = isDarkMode ? 'text-slate-400 border-transparent hover:text-white' : 'text-slate-500 border-transparent hover:text-slate-900';

  if (isLoadingData) {
    return (
      <div className="flex items-center justify-center py-20 gap-2 text-slate-400 text-sm font-bold">
        <Loader2 className="w-6 h-6 animate-spin text-blue-500" /> Жүктелуде...
      </div>
    );
  }

  if (!university) {
    return (
      <div className={`text-center py-20 ${textPrimary}`}>
        <h2 className="text-xl font-bold mb-4">Университет табылмады</h2>
        <button onClick={() => navigate('/universities')}
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 text-white text-sm font-bold transition-colors">
          ЖОО тізіміне оралу
        </button>
      </div>
    );
  }

  const gi = university.general_info || {};
  const city = gi.location || gi.city || gi.oblast || '';
  const studentsTotal = university.students?.total || '0';
  const teachersTotal = university.teachers?.total || '—';

  return (
    <div className={textPrimary}>
      <SEO
        title={university.title}
        description={university.description?.substring(0, 160) || `${university.title} — магистратура бағдарламалары`}
        canonical={`https://magis-core.vercel.app/universities/${university.code}`}
      />

      {/* Hero Section */}
      <div className={`relative rounded-2xl overflow-hidden mb-6 ${cardBg}`}>
        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-blue-600/20 to-indigo-600/10">
          {/* Back button */}
          <button onClick={() => navigate('/universities')}
            className="absolute top-4 left-4 z-10 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-xl text-white text-sm font-bold flex items-center gap-2 hover:bg-black/50 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Артқа
          </button>

          {/* Logo */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
            <div className={`w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden border-4 shadow-lg ${
              isDarkMode ? 'bg-[#0f1219] border-[#0f1219]' : 'bg-white border-white'
            }`}>
              {university.logo ? (
                <img src={university.logo} alt={university.title} className="w-full h-full object-contain p-1" />
              ) : (
                <span className={`text-3xl font-black ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {university.title?.charAt(0)?.toUpperCase()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Title area */}
        <div className="pt-16 pb-6 px-6 text-center">
          <h1 className={`text-xl sm:text-2xl font-black uppercase tracking-tight ${textPrimary}`}>
            {university.title}
          </h1>

          {/* Badges */}
          <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
            {city && (
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold ${
                isDarkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-200'
              }`}>
                <MapPin className="w-3 h-3" /> {city}
              </span>
            )}
            {gi.code && (
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold ${
                isDarkMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-600 border border-slate-200'
              }`}>
                Код: {gi.code}
              </span>
            )}
            {gi.type && (
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold ${
                isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
              }`}>
                {gi.type}
              </span>
            )}
            {gi.category && (
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold ${
                isDarkMode ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-amber-50 text-amber-600 border border-amber-200'
              }`}>
                {gi.category}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className={`flex border-b mb-6 overflow-x-auto ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
        {[
          { id: 'info' as const, icon: Info, label: 'ЖОО туралы' },
          { id: 'magistracy' as const, icon: GraduationCap, label: `Магистратура (${magistracyPrograms.length})` },
          { id: 'stats' as const, icon: BarChart2, label: 'Статистика' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-3 text-xs font-black uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab.id ? tabActive : tabInactive
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {/* ─── INFO TAB ─── */}
        {activeTab === 'info' && (
          <motion.div key="info" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            <div className="space-y-4">
              {/* Description */}
              {university.description && (
                <div className={`rounded-2xl border p-5 ${cardBg}`}>
                  <h3 className={`text-sm font-black uppercase tracking-tight mb-3 ${textPrimary}`}>ЖОО туралы</h3>
                  <p className={`text-sm leading-relaxed ${textMuted}`}>{university.description}</p>
                  {university.description_full && (
                    <p className={`text-sm leading-relaxed mt-3 ${textMuted}`}>{university.description_full}</p>
                  )}
                </div>
              )}

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Website */}
                {(gi.website || gi.website_url) && (
                  <div className={`rounded-2xl border p-4 ${cardBg}`}>
                    <div className={`flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest ${textMuted}`}>
                      <Globe className="w-3.5 h-3.5" /> Сайты
                    </div>
                    <a href={gi.website || gi.website_url} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-bold text-blue-500 hover:text-blue-400 break-all flex items-center gap-1">
                      {(gi.website || gi.website_url)?.replace(/^https?:\/\//, '')}
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                )}

                {/* Location */}
                {city && (
                  <div className={`rounded-2xl border p-4 ${cardBg}`}>
                    <div className={`flex items-center gap-2 mb-2 text-[10px] font-bold uppercase tracking-widest ${textMuted}`}>
                      <MapPin className="w-3.5 h-3.5" /> Мекен-жайы
                    </div>
                    <p className={`text-sm font-bold ${textPrimary}`}>{city}</p>
                    {university.contacts?.[0]?.address && (
                      <p className={`text-xs mt-1 ${textMuted}`}>{university.contacts[0].address}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Contacts */}
              {university.contacts && university.contacts.length > 0 && (
                <div className={`rounded-2xl border p-5 ${cardBg}`}>
                  <h3 className={`text-sm font-black uppercase tracking-tight mb-3 ${textPrimary}`}>Байланыстар</h3>
                  <div className="space-y-3">
                    {university.contacts.map((contact, idx) => (
                      <div key={idx} className={`flex flex-col sm:flex-row sm:items-center gap-2 py-2 border-b last:border-0 ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
                        <div className={`flex items-center gap-2 text-xs ${textMuted}`}>
                          <MapPin className="w-3 h-3 shrink-0" />
                          {contact.address}
                        </div>
                        {contact.phones.length > 0 && (
                          <div className="flex items-center gap-2">
                            {contact.phones.map((phone, pi) => (
                              <a key={pi} href={`tel:${phone}`}
                                className="text-xs font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1">
                                <Phone className="w-3 h-3" /> {phone}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* External Link */}
              {university.url && (
                <a href={university.url} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-bold transition-all hover:-translate-y-0.5 ${
                    isDarkMode ? 'border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' : 'border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}>
                  <ExternalLink className="w-4 h-4" />
                  Univision.kz-де көру
                </a>
              )}
            </div>
          </motion.div>
        )}

        {/* ─── MAGISTRACY TAB ─── */}
        {activeTab === 'magistracy' && (
          <motion.div key="magistracy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Бағдарлама іздеу..."
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${inputBg}`}
                />
              </div>

              <p className={`text-xs font-bold ${textMuted}`}>
                Магистратура бағдарламалары: {filteredPrograms.length}
              </p>

              {groupedPrograms.length === 0 ? (
                <div className={`py-12 text-center text-sm font-semibold ${textMuted}`}>
                  {searchQuery ? 'Бағдарлама табылмады' : 'Магистратура бағдарламалары табылмады'}
                </div>
              ) : (
                <div className="space-y-3">
                  {groupedPrograms.map(([groupCode, { title, programs }]) => (
                    <div key={groupCode} className={`rounded-2xl border overflow-hidden ${cardBg}`}>
                      <div className={`w-full px-5 py-4 flex items-center justify-between gap-3`}>
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <button
                            onClick={() => setExpandedGroup(expandedGroup === groupCode ? null : groupCode)}
                            className="flex items-center gap-3 min-w-0 flex-1 text-left"
                          >
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black shrink-0 ${
                              isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                            }`}>
                              {groupCode}
                            </span>
                            <span className={`text-sm font-bold truncate ${textPrimary}`}>{title}</span>
                            <span className={`text-[10px] font-bold shrink-0 ${textMuted}`}>{programs.length} бағдарлама</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => navigate(`/specialties/${groupCode}`)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                              isDarkMode ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                            }`}
                          >
                            Толығырақ
                          </button>
                          <button
                            onClick={() => setExpandedGroup(expandedGroup === groupCode ? null : groupCode)}
                            className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
                          >
                            {expandedGroup === groupCode ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedGroup === groupCode && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className={`border-t px-5 py-3 space-y-2 ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
                              {programs.map((prog, idx) => (
                                <div key={idx} className={`flex items-start gap-3 py-2 border-b last:border-0 ${isDarkMode ? 'border-white/5' : 'border-slate-50'}`}>
                                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold shrink-0 mt-0.5 ${
                                    isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                                  }`}>
                                    {prog.programCode}
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    <p className={`text-xs font-bold ${textPrimary}`}>{prog.programName}</p>
                                    {prog.direction && (
                                      <p className={`text-[10px] mt-0.5 ${textMuted}`}>{prog.direction}</p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ─── STATS TAB ─── */}
        {activeTab === 'stats' && (
          <motion.div key="stats" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            <div className="space-y-4">
              {/* Edu Programs */}
              {university.edu_programs && Object.keys(university.edu_programs).length > 0 && (
                <div className={`rounded-2xl border p-5 ${cardBg}`}>
                  <h3 className={`text-sm font-black uppercase tracking-tight mb-4 ${textPrimary}`}>Білім беру бағдарламалары</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(university.edu_programs).map(([key, count]) => (
                      <div key={key} className={`p-3 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                        <p className={`text-[10px] font-bold ${textMuted} mb-1`}>{key}</p>
                        <p className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{count}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Students */}
              {university.students && (
                <div className={`rounded-2xl border p-5 ${cardBg}`}>
                  <h3 className={`text-sm font-black uppercase tracking-tight mb-4 ${textPrimary}`}>Студенттер</h3>
                  <div className="mb-4">
                    <span className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{studentsTotal}</span>
                    <span className={`text-xs font-bold ml-2 ${textMuted}`}>студент</span>
                  </div>
                  {university.students.degrees && Object.keys(university.students.degrees).length > 0 && (
                    <div className="space-y-2">
                      {Object.entries(university.students.degrees).map(([degree, count]) => (
                        Number(count) > 0 && (
                          <div key={degree} className="flex items-center justify-between text-xs">
                            <span className={textMuted}>{degree}</span>
                            <span className={`font-bold ${textPrimary}`}>{String(count)}</span>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Teachers */}
              {university.teachers && (university.teachers.total || Object.keys(university.teachers.degrees || {}).length > 0) && (
                <div className={`rounded-2xl border p-5 ${cardBg}`}>
                  <h3 className={`text-sm font-black uppercase tracking-tight mb-4 ${textPrimary}`}>Оқытушылар</h3>
                  {teachersTotal && teachersTotal !== '—' && (
                    <div className="mb-4">
                      <span className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{teachersTotal}</span>
                      <span className={`text-xs font-bold ml-2 ${textMuted}`}>оқытушы</span>
                    </div>
                  )}
                  {university.teachers.degrees && Object.keys(university.teachers.degrees).length > 0 && (
                    <div className="space-y-2">
                      {Object.entries(university.teachers.degrees).map(([degree, count]) => (
                        Number(count) > 0 && (
                          <div key={degree} className="flex items-center justify-between text-xs">
                            <span className={textMuted}>{degree}</span>
                            <span className={`font-bold ${textPrimary}`}>{String(count)}</span>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UniversityDetailScreen;
