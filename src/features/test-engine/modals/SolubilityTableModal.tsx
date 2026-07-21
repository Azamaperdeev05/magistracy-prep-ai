import React, { useState } from 'react';
import { X, Grid3X3 } from 'lucide-react';

interface SolubilityTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Solubility data: 'Р' = растворимое (soluble), 'М' = мало растворимое, 'Н' = не растворимое, '-' = не существует
const anions = ['OH⁻', 'F⁻', 'Cl⁻', 'Br⁻', 'I⁻', 'S²⁻', 'SO₄²⁻', 'NO₃⁻', 'CO₃²⁻', 'PO₄³⁻', 'SiO₃²⁻'];
const cations = ['H⁺', 'Li⁺', 'Na⁺', 'K⁺', 'NH₄⁺', 'Ba²⁺', 'Ca²⁺', 'Mg²⁺', 'Fe²⁺', 'Fe³⁺', 'Cu²⁺', 'Zn²⁺', 'Ag⁺', 'Pb²⁺', 'Al³⁺'];

// Solubility matrix [cation index][anion index]
const solubilityData: string[][] = [
  // H⁺
  ['Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Н'],
  // Li⁺
  ['Р', 'М', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'М', 'Р'],
  // Na⁺
  ['Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р'],
  // K⁺
  ['Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р'],
  // NH₄⁺
  ['Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', 'Р', '-'],
  // Ba²⁺
  ['Р', 'М', 'Р', 'Р', 'Р', 'Р', 'Н', 'Р', 'Н', 'Н', 'Н'],
  // Ca²⁺
  ['М', 'Н', 'Р', 'Р', 'Р', 'Р', 'М', 'Р', 'Н', 'Н', 'Н'],
  // Mg²⁺
  ['Н', 'Н', 'Р', 'Р', 'Р', '-', 'Р', 'Р', 'Н', 'Н', 'Н'],
  // Fe²⁺
  ['Н', 'М', 'Р', 'Р', 'Р', 'Н', 'Р', 'Р', 'Н', 'Н', 'Н'],
  // Fe³⁺
  ['Н', 'Н', 'Р', 'Р', '-', 'Н', 'Р', 'Р', '-', 'Н', 'Н'],
  // Cu²⁺
  ['Н', 'Р', 'Р', 'Р', '-', 'Н', 'Р', 'Р', '-', 'Н', '-'],
  // Zn²⁺
  ['Н', 'Р', 'Р', 'Р', 'Р', 'Н', 'Р', 'Р', 'Н', 'Н', 'Н'],
  // Ag⁺
  ['-', 'Р', 'Н', 'Н', 'Н', 'Н', 'М', 'Р', 'Н', 'Н', '-'],
  // Pb²⁺
  ['Н', 'Н', 'М', 'М', 'Н', 'Н', 'Н', 'Р', 'Н', 'Н', 'Н'],
  // Al³⁺
  ['Н', 'М', 'Р', 'Р', 'Р', '-', 'Р', 'Р', '-', 'Н', 'Н'],
];

const getCellColor = (value: string) => {
  switch (value) {
    case 'Р': return 'bg-green-100 text-green-700';
    case 'М': return 'bg-yellow-100 text-yellow-700';
    case 'Н': return 'bg-red-100 text-red-700';
    case '-': return 'bg-gray-200 text-gray-400';
    default: return 'bg-white';
  }
};

const SolubilityTableModal: React.FC<SolubilityTableModalProps> = ({ isOpen, onClose }) => {
  const [lang, setLang] = useState<'kk' | 'ru'>('kk');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-[100] p-0 sm:p-4" onClick={onClose}>
      <div 
        className="bg-white w-full h-full sm:h-auto sm:max-h-[92vh] sm:w-[95%] sm:max-w-5xl sm:rounded-2xl rounded-none shadow-2xl overflow-hidden animate-fade-in flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#2c3240] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <Grid3X3 className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 shrink-0" />
            <h2 className="text-base sm:text-lg font-bold leading-tight">
              {lang === 'kk' ? 'Ерігіштік кестесі' : 'Таблица растворимости'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs font-bold">
              <button
                onClick={() => setLang('kk')}
                className={`px-2.5 py-1 rounded transition ${
                  lang === 'kk' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                ҚАЗ
              </button>
              <button
                onClick={() => setLang('ru')}
                className={`px-2.5 py-1 rounded transition ${
                  lang === 'ru' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                РУС
              </button>
            </div>

            <button onClick={onClose} className="hover:bg-white/20 p-1.5 rounded-lg transition text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="px-4 sm:px-6 py-2.5 bg-gray-50 border-b flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 text-green-700 rounded flex items-center justify-center font-bold text-xs">Р</div>
              <span className="font-semibold">{lang === 'kk' ? 'Ериді (Р)' : 'Растворимо (Р)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-yellow-100 text-yellow-700 rounded flex items-center justify-center font-bold text-xs">М</div>
              <span className="font-semibold">{lang === 'kk' ? 'Аз ериді (М)' : 'Малорастворимо (М)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-red-100 text-red-700 rounded flex items-center justify-center font-bold text-xs">Н</div>
              <span className="font-semibold">{lang === 'kk' ? 'Ерімейді (Н)' : 'Нерастворимо (Н)'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-200 text-gray-400 rounded flex items-center justify-center font-bold text-xs">−</div>
              <span className="font-semibold">{lang === 'kk' ? 'Ыдырайды (-)' : 'Разлагается (-)'}</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="p-3 sm:p-4 overflow-auto touch-pan-x flex-1 max-h-[65vh] scrollbar-thin">
          <table className="w-full border-collapse text-sm select-none min-w-[600px]">
            <thead>
              <tr>
                <th className="sticky left-0 top-0 z-20 bg-[#2c3240] text-white p-2.5 border border-slate-700 min-w-[70px] text-center font-bold text-xs">
                  {lang === 'kk' ? 'Катион / Анион' : 'Катион / Анион'}
                </th>
                {anions.map((anion, idx) => (
                  <th key={idx} className="sticky top-0 z-10 bg-[#2c3240] text-white p-2 border border-slate-700 min-w-[50px] text-center text-xs font-extrabold">
                    {anion}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cations.map((cation, cIdx) => (
                <tr key={cIdx}>
                  <td className="sticky left-0 bg-[#2c3240] text-white p-2 border border-slate-700 font-black text-center text-xs">
                    {cation}
                  </td>
                  {anions.map((_, aIdx) => {
                    const value = solubilityData[cIdx]?.[aIdx] || '-';
                    return (
                      <td 
                        key={aIdx} 
                        className={`p-2 border border-slate-300 text-center font-bold text-sm ${getCellColor(value)}`}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-2.5 bg-gray-50 border-t text-center text-xs text-gray-500 shrink-0 font-medium">
          {lang === 'kk' 
            ? 'Тұздардың, қышқылдардың және негіздердің судағы ерігіштігі (25°C)'
            : 'Растворимость солей, кислот и оснований в воде (25°C)'
          }
        </div>
      </div>
    </div>
  );
};

export default SolubilityTableModal;
