import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Users, Star, ExternalLink, Building2, Loader2, ChevronDown, Check } from 'lucide-react';
import { useTheme } from '../../app/ThemeContext';
import SEO from '../../components/ui/SEO';

interface University {
  code: string;
  title: string;
  url: string;
  description: string;
  logo?: string;
  general_info?: { city?: string; type?: string; students?: string | number; founded?: string | number };
  students?: string | number;
  teachers?: string | number;
}

const UniversitiesScreen: React.FC = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [universities, setUniversities] = useState<University[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('../../../data/univision_universities.json')
      .then((mod: any) => {
        const data = mod.default || mod;
        setUniversities(Array.isArray(data.universities) ? data.universities : []);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Extract unique cities
  const cities = useMemo(() => {
    const cityMap = new Map<string, number>();
    universities.forEach(u => {
      const city = u.general_info?.city;
      if (city) cityMap.set(city, (cityMap.get(city) || 0) + 1);
    });
    return Array.from(cityMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [universities]);

  // Filter by search + city
  const filtered = useMemo(() => {
    let result = universities;

    if (selectedCity !== 'all') {
      result = result.filter(u => u.general_info?.city === selectedCity);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(u =>
        u.title?.toLowerCase().includes(q) ||
        u.general_info?.city?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [universities, search, selectedCity]);

  const selectedCityLabel = selectedCity === 'all'
    ? `Барлық қала (${universities.length})`
    : `${selectedCity} (${cities.find(c => c[0] === selectedCity)?.[1] || 0})`;

  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md';
  const inputBg = isDarkMode ? 'bg-[#0f1219] border-slate-800 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400';
  const dropdownBg = isDarkMode ? 'bg-[#0f1219] border-slate-800' : 'bg-white border-slate-200 shadow-lg';

  return (
    <div className={textPrimary}>
      <SEO
        title="Қазақстан ЖОО-лары"
        description="Магистратура бағдарламалары бар 125+ қазақстандық университет тізімі."
        canonical="https://magis-core.vercel.app/universities"
      />

      <div className="max-w-5xl space-y-5">
        {/* Title */}
        <div>
          <h1 className={`text-2xl font-black uppercase tracking-tight ${textPrimary}`}>Қазақстан ЖОО-лары</h1>
          <p className={`text-xs mt-1 ${textMuted}`}>Магистратура бағдарламалары бар {universities.length} университет</p>
        </div>

        {/* Search + City Filter Row */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Университет іздеу..."
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${inputBg}`}
            />
          </div>

          {/* City Dropdown */}
          {!isLoading && cities.length > 0 && (
            <div ref={dropdownRef} className="relative sm:w-64">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl border text-sm font-bold transition-all duration-200 ${
                  isDropdownOpen
                    ? (isDarkMode ? 'bg-[#0f1219] border-blue-500/50 text-white' : 'bg-white border-blue-300 text-slate-900')
                    : (isDarkMode ? 'bg-[#0f1219] border-slate-800 text-slate-300 hover:border-slate-600' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300')
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                  {selectedCityLabel}
                </span>
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''} ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
              </button>

              {isDropdownOpen && (
                <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl border overflow-hidden z-50 max-h-64 overflow-y-auto ${dropdownBg}`}>
                  {/* All cities option */}
                  <button
                    onClick={() => { setSelectedCity('all'); setIsDropdownOpen(false); }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold transition-colors ${
                      selectedCity === 'all'
                        ? (isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-700')
                        : (isDarkMode ? 'text-slate-300 hover:bg-white/5' : 'text-slate-700 hover:bg-slate-50')
                    }`}
                  >
                    <span>Барлық қала</span>
                    <span className={`text-xs ${textMuted}`}>{universities.length}</span>
                  </button>

                  <div className={`border-t ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`} />

                  {/* City options */}
                  {cities.map(([city, count]) => (
                    <button
                      key={city}
                      onClick={() => { setSelectedCity(city); setIsDropdownOpen(false); }}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold transition-colors ${
                        selectedCity === city
                          ? (isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-700')
                          : (isDarkMode ? 'text-slate-300 hover:bg-white/5' : 'text-slate-700 hover:bg-slate-50')
                      }`}
                    >
                      <span>{city}</span>
                      <span className={`text-xs ${textMuted}`}>{count}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results count */}
        <p className={`text-xs font-bold ${textMuted}`}>
          Көрсетілуде: {filtered.length} университет
        </p>

        {/* Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20 gap-2 text-slate-400 text-sm font-bold">
            <Loader2 className="w-6 h-6 animate-spin text-blue-500" /> Жүктелуде...
          </div>
        ) : filtered.length === 0 ? (
          <div className={`py-20 text-center text-sm font-semibold ${textMuted}`}>
            ЖОО табылмады
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((uni, idx) => {
              const city = uni.general_info?.city || '';
              const uniId = uni.code || String(idx);
              return (
                <div
                  key={uni.code || idx}
                  onClick={() => navigate(`/universities/${uniId}`)}
                  className={`group relative rounded-2xl border p-5 flex flex-col gap-3 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 ${cardBg}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden ${isDarkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'}`}>
                      {uni.logo ? (
                        <img
                          src={uni.logo}
                          alt={uni.title}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <span className={`text-sm font-black ${uni.logo ? 'hidden' : ''} ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {uni.title?.charAt(0)?.toUpperCase()}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-colors ${isDarkMode ? 'text-slate-500 group-hover:text-blue-400' : 'text-slate-400 group-hover:text-blue-500'}`} />
                  </div>

                  <h3 className={`text-sm font-black leading-tight line-clamp-2 transition-colors ${isDarkMode ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-500'}`}>
                    {uni.title}
                  </h3>

                  {uni.description && (
                    <p className={`text-[11px] leading-relaxed line-clamp-2 ${textMuted}`}>
                      {uni.description}
                    </p>
                  )}

                  <div className={`mt-auto flex items-center gap-3 text-[10px] font-bold ${textMuted}`}>
                    {city && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {city}
                      </span>
                    )}
                    {uni.general_info?.students && (
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" /> {uni.general_info.students}
                      </span>
                    )}
                    {uni.general_info?.founded && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" /> {uni.general_info.founded}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversitiesScreen;
