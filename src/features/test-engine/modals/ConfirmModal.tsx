import React from 'react';
import { AlertTriangle, HelpCircle } from 'lucide-react';
import { useTheme } from '../../../app/ThemeContext';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDanger?: boolean;
  isAlert?: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Назар аударыңыз!',
  message,
  confirmText = 'Иә, растаймын',
  cancelText = 'Бас тарту',
  isDanger = false,
  isAlert = false,
}) => {
  const { isDarkMode } = useTheme();
  if (!isOpen) return null;

  const modalBg = isDarkMode ? 'bg-[#0f1219] border-slate-800/80' : 'bg-white border-slate-200 shadow-2xl';
  const textPrimary = isDarkMode ? 'text-white' : 'text-slate-900';
  const textMuted = isDarkMode ? 'text-slate-400' : 'text-slate-500';
  const cancelBg = isDarkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-600';

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[250] p-4 modal-overlay-enter"
      onClick={onClose}
    >
      <div
        className={`${modalBg} border rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative modal-content-enter`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-1.5 w-full ${isDanger ? 'bg-red-500' : 'bg-blue-500'}`} />

        <div className="p-6 text-center space-y-4">
          <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center ${
            isDanger
              ? 'bg-red-500/10 border border-red-500/20 text-red-500'
              : `bg-blue-500/10 border ${isDarkMode ? 'border-blue-500/20 text-blue-400' : 'border-blue-200 text-blue-600'}`
          }`}>
            {isDanger ? <AlertTriangle className="w-7 h-7" /> : <HelpCircle className="w-7 h-7" />}
          </div>

          <h2 className={`text-lg font-black uppercase tracking-wider ${textPrimary}`}>{title}</h2>
          <p className={`text-sm font-semibold leading-relaxed whitespace-pre-line px-2 ${textMuted}`}>{message}</p>

          <div className="flex gap-3 pt-3">
            {!isAlert && (
              <button
                type="button"
                onClick={onClose}
                className={`flex-1 py-3 border text-xs font-bold rounded-xl transition-all active:scale-[0.97] ${cancelBg}`}
              >
                {cancelText}
              </button>
            )}
            <button
              type="button"
              onClick={() => { onConfirm(); onClose(); }}
              className={`py-3 text-xs font-bold rounded-xl text-white transition-all active:scale-[0.97] shadow-lg ${
                isAlert ? 'w-full' : 'flex-1'
              } ${isDanger ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
