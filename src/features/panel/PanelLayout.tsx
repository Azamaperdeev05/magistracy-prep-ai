import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from '../../components/ui/Motion';
import {
  Home, GraduationCap, BookOpen, History, Award, Building2,
  PenTool, Flame, Menu, X, Sun, Moon, LogOut, Crown,
  Shield, ChevronRight
} from 'lucide-react';
import { useTheme } from '../../app/ThemeContext';
import SEO from '../../components/ui/SEO';

interface PanelLayoutProps {
  children: React.ReactNode;
  userName?: string;
  userEmail?: string;
  isPremium?: boolean;
  onLogout?: () => void;
}

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  accent?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Басты бет', icon: <Home className="w-[18px] h-[18px]" />, path: '/panel' },
  { label: 'Дайындық', icon: <GraduationCap className="w-[18px] h-[18px]" />, path: '/prep' },
  { label: 'Бағдарлама', icon: <BookOpen className="w-[18px] h-[18px]" />, path: '/program' },
  { label: 'Тарих', icon: <History className="w-[18px] h-[18px]" />, path: '/history' },
  { label: 'Мамандықтар', icon: <Award className="w-[18px] h-[18px]" />, path: '/specialties' },
  { label: 'ЖОО', icon: <Building2 className="w-[18px] h-[18px]" />, path: '/universities' },
  { label: 'Блог', icon: <PenTool className="w-[18px] h-[18px]" />, path: '/blog' },
];

const PanelLayout: React.FC<PanelLayoutProps> = ({
  children,
  userName,
  userEmail,
  isPremium,
  onLogout
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    if (path === '/panel') return location.pathname === '/panel' || location.pathname === '/home';
    return location.pathname.startsWith(path);
  };

  const sidebarBg = isDarkMode ? 'bg-[#0c0e14]' : 'bg-white';
  const sidebarBorder = isDarkMode ? 'border-r border-slate-800/60' : 'border-r border-slate-200/80';
  const contentBg = isDarkMode ? 'bg-[#07090d]' : 'bg-slate-50/50';
  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-500' : 'text-slate-400';

  return (
    <div className={`flex min-h-screen ${contentBg} transition-colors duration-300`}>
      <SEO title="Панель" description="MagisCore студент панелі" canonical="https://magis-core.vercel.app/panel" />

      {/* Desktop Sidebar */}
      <aside className={`hidden lg:flex flex-col w-[260px] shrink-0 ${sidebarBg} ${sidebarBorder} h-screen sticky top-0 overflow-y-auto`}>
        {/* Logo */}
        <div className="px-6 py-6 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[var(--brand-primary)] shrink-0">
            <img src="/logo no bg, white.svg" alt="MagisCore" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <span className={`text-sm font-extrabold tracking-tight uppercase ${textPrimary}`}>
              Magis<span className="text-[var(--brand-primary)]">Core</span>
            </span>
            <p className={`text-[9px] font-bold ${textMuted} tracking-widest uppercase -mt-0.5`}>Student Hub</p>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-2 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => { navigate(item.path); setIsMobileOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 hover:translate-x-0.5 ${
                  active
                    ? 'bg-blue-50 text-blue-700 border border-blue-200/80 shadow-sm'
                    : `${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'} border border-transparent`
                }`}
              >
                <span className={`transition-transform duration-200 ${active ? 'text-blue-600' : ''}`}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className={`px-3 py-4 border-t space-y-1 ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 hover:translate-x-0.5 ${
              isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            } border border-transparent`}
          >
            <span className="transition-transform duration-300" style={{ transform: isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              {isDarkMode ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
            </span>
            {isDarkMode ? 'Жарық тақырып' : 'Қараңғы тақырып'}
          </button>

          {/* Profile */}
          <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-black ${
              isPremium ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'
            }`}>
              {isPremium ? <Crown className="w-4 h-4" /> : <span>{userName?.charAt(0) || 'U'}</span>}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-[12px] font-bold truncate ${textPrimary}`}>{userName || 'Қолданушы'}</p>
              <p className={`text-[10px] truncate ${textMuted}`}>{userEmail}</p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold text-red-500 hover:bg-red-500/10 transition-all border border-transparent"
          >
            <LogOut className="w-[18px] h-[18px]" />
            Шығу
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`fixed left-0 top-0 bottom-0 w-[280px] z-50 lg:hidden flex flex-col ${sidebarBg} shadow-2xl`}
            >
              {/* Close + Logo */}
              <div className="px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--brand-primary)]">
                    <img src="/logo no bg, white.svg" alt="MagisCore" className="w-4 h-4 object-contain" />
                  </div>
                  <span className={`text-sm font-extrabold tracking-tight uppercase ${textPrimary}`}>
                    Magis<span className="text-[var(--brand-primary)]">Core</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className={`p-1.5 rounded-lg ${isDarkMode ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav */}
              <nav className="flex-1 px-3 py-2 space-y-1">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <button
                      key={item.path}
                      onClick={() => { navigate(item.path); setIsMobileOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                        active
                          ? 'bg-blue-50 text-blue-700 border border-blue-200/80'
                          : `${isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'} border border-transparent`
                      }`}
                    >
                      <span className={active ? 'text-blue-600' : ''}>{item.icon}</span>
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              {/* Bottom */}
              <div className={`px-3 py-4 border-t space-y-1 ${isDarkMode ? 'border-white/5' : 'border-slate-100'}`}>
                <button
                  onClick={toggleTheme}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 ${
                    isDarkMode ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  } border border-transparent`}
                >
                  <span className="transition-transform duration-300" style={{ transform: isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    {isDarkMode ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
                  </span>
                  {isDarkMode ? 'Жарық тақырып' : 'Қараңғы тақырып'}
                </button>
                <button
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold text-red-500 hover:bg-red-500/10 transition-all border border-transparent"
                >
                  <LogOut className="w-[18px] h-[18px]" />
                  Шығу
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Mobile Header */}
        <div className={`lg:hidden sticky top-0 z-40 px-4 py-3 flex items-center gap-3 ${isDarkMode ? 'bg-[#07090d]/90 border-b border-white/5' : 'bg-slate-50/90 border-b border-slate-200/60'} backdrop-blur-xl`}>
          <button
            onClick={() => setIsMobileOpen(true)}
            className={`p-2 rounded-xl ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-100'}`}
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[var(--brand-primary)]">
              <img src="/logo no bg, white.svg" alt="MagisCore" className="w-4 h-4 object-contain" />
            </div>
            <span className={`text-sm font-extrabold tracking-tight uppercase ${textPrimary}`}>
              Magis<span className="text-[var(--brand-primary)]">Core</span>
            </span>
          </div>
        </div>

        {/* Page Content */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="p-4 sm:p-6 lg:p-8"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default PanelLayout;
