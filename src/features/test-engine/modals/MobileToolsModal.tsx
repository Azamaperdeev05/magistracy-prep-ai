import React from 'react';
import { Calculator, Table, FlaskConical, X, Wrench } from 'lucide-react';

interface MobileToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalculator: () => void;
  onOpenPeriodicTable: () => void;
  onOpenSolubilityTable: () => void;
}

const MobileToolsModal: React.FC<MobileToolsModalProps> = ({
  isOpen,
  onClose,
  onOpenCalculator,
  onOpenPeriodicTable,
  onOpenSolubilityTable,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center z-[110] p-0 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden animate-slide-up border border-slate-200 p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <Wrench className="w-5 h-5 text-[#348FE2]" />
            <span className="text-base">Оқу құралдары</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tools List */}
        <div className="flex flex-col gap-3">
          {/* Calculator */}
          <button
            onClick={() => {
              onClose();
              onOpenCalculator();
            }}
            className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-200 hover:border-sky-400 bg-sky-50/50 hover:bg-sky-50 transition text-left active:scale-[0.98]"
          >
            <div className="p-2.5 bg-sky-500 text-white rounded-lg shadow-sm shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Калькулятор</h4>
              <p className="text-xs text-slate-500 mt-0.5">Математикалық есептеулер жүргізу</p>
            </div>
          </button>

          {/* Periodic Table */}
          <button
            onClick={() => {
              onClose();
              onOpenPeriodicTable();
            }}
            className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-200 hover:border-purple-400 bg-purple-50/50 hover:bg-purple-50 transition text-left active:scale-[0.98]"
          >
            <div className="p-2.5 bg-purple-600 text-white rounded-lg shadow-sm shrink-0">
              <Table className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Менделеев кестесі</h4>
              <p className="text-xs text-slate-500 mt-0.5">Химиялық элементтер жүйесі (ҚАЗ / РУС)</p>
            </div>
          </button>

          {/* Solubility Table */}
          <button
            onClick={() => {
              onClose();
              onOpenSolubilityTable();
            }}
            className="flex items-center gap-4 p-3.5 rounded-xl border border-slate-200 hover:border-teal-400 bg-teal-50/50 hover:bg-teal-50 transition text-left active:scale-[0.98]"
          >
            <div className="p-2.5 bg-teal-600 text-white rounded-lg shadow-sm shrink-0">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Ерігіштік кестесі</h4>
              <p className="text-xs text-slate-500 mt-0.5">Қышқыл, негіз және тұздар ерігіштігі (ҚАЗ / РУС)</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileToolsModal;
