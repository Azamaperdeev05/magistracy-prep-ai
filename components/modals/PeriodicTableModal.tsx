import React, { useMemo, useState } from 'react';
import { X, Atom, Search, Sparkles } from 'lucide-react';

interface PeriodicTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Periodic table data (simplified for exam reference tools)
const elements = [
  // Period 1
  { symbol: 'H', name: 'Сутегі', number: 1, mass: 1.008, category: 'nonmetal', row: 1, col: 1 },
  { symbol: 'He', name: 'Гелий', number: 2, mass: 4.003, category: 'noble', row: 1, col: 18 },
  // Period 2
  { symbol: 'Li', name: 'Литий', number: 3, mass: 6.94, category: 'alkali', row: 2, col: 1 },
  { symbol: 'Be', name: 'Берилий', number: 4, mass: 9.012, category: 'alkaline', row: 2, col: 2 },
  { symbol: 'B', name: 'Бор', number: 5, mass: 10.81, category: 'metalloid', row: 2, col: 13 },
  { symbol: 'C', name: 'Көміртек', number: 6, mass: 12.01, category: 'nonmetal', row: 2, col: 14 },
  { symbol: 'N', name: 'Азот', number: 7, mass: 14.01, category: 'nonmetal', row: 2, col: 15 },
  { symbol: 'O', name: 'Оттегі', number: 8, mass: 16.00, category: 'nonmetal', row: 2, col: 16 },
  { symbol: 'F', name: 'Фтор', number: 9, mass: 19.00, category: 'halogen', row: 2, col: 17 },
  { symbol: 'Ne', name: 'Неон', number: 10, mass: 20.18, category: 'noble', row: 2, col: 18 },
  // Period 3
  { symbol: 'Na', name: 'Натрий', number: 11, mass: 22.99, category: 'alkali', row: 3, col: 1 },
  { symbol: 'Mg', name: 'Магний', number: 12, mass: 24.31, category: 'alkaline', row: 3, col: 2 },
  { symbol: 'Al', name: 'Алюминий', number: 13, mass: 26.98, category: 'post-transition', row: 3, col: 13 },
  { symbol: 'Si', name: 'Кремний', number: 14, mass: 28.09, category: 'metalloid', row: 3, col: 14 },
  { symbol: 'P', name: 'Фосфор', number: 15, mass: 30.97, category: 'nonmetal', row: 3, col: 15 },
  { symbol: 'S', name: 'Күкірт', number: 16, mass: 32.07, category: 'nonmetal', row: 3, col: 16 },
  { symbol: 'Cl', name: 'Хлор', number: 17, mass: 35.45, category: 'halogen', row: 3, col: 17 },
  { symbol: 'Ar', name: 'Аргон', number: 18, mass: 39.95, category: 'noble', row: 3, col: 18 },
  // Period 4
  { symbol: 'K', name: 'Калий', number: 19, mass: 39.10, category: 'alkali', row: 4, col: 1 },
  { symbol: 'Ca', name: 'Кальций', number: 20, mass: 40.08, category: 'alkaline', row: 4, col: 2 },
  { symbol: 'Fe', name: 'Темір', number: 26, mass: 55.85, category: 'transition', row: 4, col: 8 },
  { symbol: 'Cu', name: 'Мыс', number: 29, mass: 63.55, category: 'transition', row: 4, col: 11 },
  { symbol: 'Zn', name: 'Мырыш', number: 30, mass: 65.38, category: 'transition', row: 4, col: 12 },
  { symbol: 'Br', name: 'Бром', number: 35, mass: 79.90, category: 'halogen', row: 4, col: 17 },
  { symbol: 'Kr', name: 'Криптон', number: 36, mass: 83.80, category: 'noble', row: 4, col: 18 },
  // Period 5
  { symbol: 'Ag', name: 'Күміс', number: 47, mass: 107.87, category: 'transition', row: 5, col: 11 },
  { symbol: 'I', name: 'Йод', number: 53, mass: 126.90, category: 'halogen', row: 5, col: 17 },
  // Period 6
  { symbol: 'Au', name: 'Алтын', number: 79, mass: 196.97, category: 'transition', row: 6, col: 11 },
  { symbol: 'Hg', name: 'Сынап', number: 80, mass: 200.59, category: 'transition', row: 6, col: 12 },
  { symbol: 'Pb', name: 'Қорғасын', number: 82, mass: 207.2, category: 'post-transition', row: 6, col: 14 },
];

const categoryMeta: Record<string, { label: string; dot: string; tile: string; selected: string; text: string }> = {
  'alkali': {
    label: 'Сілтілік металдар',
    dot: 'bg-rose-500',
    tile: 'bg-rose-50 border-rose-200 text-rose-700 hover:border-rose-400',
    selected: 'bg-gradient-to-br from-rose-500 to-red-500 text-white',
    text: 'text-rose-700',
  },
  'alkaline': {
    label: 'Сілтілік-жер',
    dot: 'bg-orange-500',
    tile: 'bg-orange-50 border-orange-200 text-orange-700 hover:border-orange-400',
    selected: 'bg-gradient-to-br from-orange-500 to-amber-500 text-white',
    text: 'text-orange-700',
  },
  'transition': {
    label: 'Өтпелі металдар',
    dot: 'bg-amber-400',
    tile: 'bg-amber-50 border-amber-200 text-amber-700 hover:border-amber-400',
    selected: 'bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950',
    text: 'text-amber-700',
  },
  'post-transition': {
    label: 'Пост-өтпелі',
    dot: 'bg-emerald-500',
    tile: 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:border-emerald-400',
    selected: 'bg-gradient-to-br from-emerald-500 to-green-500 text-white',
    text: 'text-emerald-700',
  },
  'metalloid': {
    label: 'Металлоидтар',
    dot: 'bg-teal-500',
    tile: 'bg-teal-50 border-teal-200 text-teal-700 hover:border-teal-400',
    selected: 'bg-gradient-to-br from-teal-500 to-cyan-500 text-white',
    text: 'text-teal-700',
  },
  'nonmetal': {
    label: 'Бейметалдар',
    dot: 'bg-sky-500',
    tile: 'bg-sky-50 border-sky-200 text-sky-700 hover:border-sky-400',
    selected: 'bg-gradient-to-br from-sky-500 to-blue-500 text-white',
    text: 'text-sky-700',
  },
  'halogen': {
    label: 'Галогендер',
    dot: 'bg-violet-500',
    tile: 'bg-violet-50 border-violet-200 text-violet-700 hover:border-violet-400',
    selected: 'bg-gradient-to-br from-violet-500 to-indigo-500 text-white',
    text: 'text-violet-700',
  },
  'noble': {
    label: 'Инертті газдар',
    dot: 'bg-fuchsia-500',
    tile: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700 hover:border-fuchsia-400',
    selected: 'bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white',
    text: 'text-fuchsia-700',
  },
};

const PeriodicTableModal: React.FC<PeriodicTableModalProps> = ({ isOpen, onClose }) => {
  const [selectedElement, setSelectedElement] = useState<typeof elements[0] | null>(elements[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredElements = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return elements;
    }

    return elements.filter(el =>
      el.symbol.toLowerCase().includes(normalizedSearch) ||
      el.name.toLowerCase().includes(normalizedSearch) ||
      el.number.toString().includes(normalizedSearch)
    );
  }, [searchTerm]);

  if (!isOpen) return null;

  const renderElementTile = (el: typeof elements[0], positioned = false) => {
    const meta = categoryMeta[el.category];
    const isSelected = selectedElement?.symbol === el.symbol;

    return (
      <button
        key={el.symbol}
        type="button"
        onClick={() => setSelectedElement(el)}
        style={positioned ? { gridColumn: String(el.col), gridRow: String(el.row) } : undefined}
        className={`
          group relative min-h-[74px] rounded-2xl border p-2 text-left shadow-sm transition-all duration-200
          hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900/15
          ${isSelected ? 'ring-2 ring-slate-950 ring-offset-2 ring-offset-white shadow-xl' : ''}
          ${meta.tile}
        `}
        aria-pressed={isSelected}
      >
        <span className="absolute right-2 top-1.5 text-[10px] font-bold opacity-60">{el.number}</span>
        <span className="block pt-3 text-2xl font-black leading-none tracking-normal text-slate-950 group-hover:scale-[1.02] transition-transform">
          {el.symbol}
        </span>
        <span className={`mt-1 block truncate text-[10px] font-bold ${meta.text}`}>{el.name}</span>
        <span className="mt-0.5 block text-[10px] font-semibold text-slate-500">{el.mass}</span>
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-3 backdrop-blur-sm md:p-6" onClick={onClose}>
      <div 
        className="flex max-h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.35)] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative overflow-hidden border-b border-slate-200 bg-slate-950 px-5 py-5 text-white md:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(45,212,191,0.25),transparent_32%),radial-gradient(circle_at_85%_0%,rgba(99,102,241,0.28),transparent_34%)]" />
          <div className="relative flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-inner">
                <Atom className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight md:text-2xl">Менделеев кестесі</h2>
                <p className="mt-0.5 text-xs font-semibold text-slate-300">Элементтерді тез табу және атомдық массасын көру</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-white/10 bg-white/10 p-2.5 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Жабу"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col bg-gradient-to-b from-slate-50 to-white">
          {/* Search and Legend */}
          <div className="border-b border-slate-200 bg-white/90 px-5 py-4 md:px-8">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="relative w-full xl:max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Элементті атауы, символы немесе нөмірі бойынша іздеу..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-600">
                {Object.entries(categoryMeta).map(([key, meta]) => (
                  <div key={key} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                    <span className={`h-2.5 w-2.5 rounded-full ${meta.dot}`} />
                    {meta.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="min-h-0 flex-1 overflow-auto px-5 py-5 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                <Sparkles className="h-4 w-4 text-cyan-500" />
                {searchTerm.trim() ? `${filteredElements.length} нәтиже` : 'Негізгі элементтер'}
              </div>
              {searchTerm.trim() && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-500 shadow-sm transition hover:text-slate-900"
                >
                  Іздеуді тазалау
                </button>
              )}
            </div>

            {searchTerm.trim() ? (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
                {filteredElements.map(el => renderElementTile(el))}
              </div>
            ) : (
              <>
                <div className="hidden min-w-[1120px] grid-cols-[repeat(18,minmax(52px,1fr))] grid-rows-[repeat(6,minmax(74px,auto))] gap-2 lg:grid">
                  {elements.map(el => renderElementTile(el, true))}
                </div>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:hidden">
                  {elements.map(el => renderElementTile(el))}
                </div>
              </>
            )}

            {filteredElements.length === 0 && (
              <div className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white text-center">
                <Search className="mb-3 h-8 w-8 text-slate-300" />
                <p className="text-sm font-bold text-slate-700">Мұндай элемент табылмады</p>
                <p className="mt-1 text-xs font-medium text-slate-400">Символын, атауын немесе реттік нөмірін тексеріңіз.</p>
              </div>
            )}
          </div>

          {/* Selected Element Info */}
          {selectedElement && (
            <div className="border-t border-slate-200 bg-white px-5 py-4 md:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className={`${categoryMeta[selectedElement.category].selected} flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-3xl shadow-lg`}>
                    <span className="text-xs font-black opacity-80">{selectedElement.number}</span>
                    <span className="text-4xl font-black leading-none">{selectedElement.symbol}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-2xl font-black tracking-tight text-slate-900">{selectedElement.name}</h3>
                      <span className={`rounded-full px-3 py-1 text-[11px] font-black ${categoryMeta[selectedElement.category].tile}`}>
                        {categoryMeta[selectedElement.category].label}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-slate-500">Атомдық масса: {selectedElement.mass}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-right sm:min-w-[210px]">
                  <div className="rounded-2xl bg-slate-50 px-4 py-3">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Реттік нөмір</div>
                    <div className="mt-1 text-xl font-black text-slate-900">{selectedElement.number}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Символ</div>
                    <div className="mt-1 text-xl font-black text-slate-900">{selectedElement.symbol}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeriodicTableModal;
