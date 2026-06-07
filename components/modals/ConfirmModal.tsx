import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, HelpCircle } from 'lucide-react';

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
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[250] p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="bg-[#0f1219] border border-slate-800/80 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative Top Line */}
          <div className={`h-1.5 w-full ${isDanger ? 'bg-red-500' : 'bg-blue-500'}`} />

          <div className="p-6 text-center space-y-4">
            {/* Icon */}
            <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center ${
              isDanger 
                ? 'bg-red-500/10 border border-red-500/20 text-red-500' 
                : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
            }`}>
              {isDanger ? (
                <AlertTriangle className="w-7 h-7" />
              ) : (
                <HelpCircle className="w-7 h-7" />
              )}
            </div>

            {/* Title */}
            <h2 className="text-lg font-black text-white uppercase tracking-wider">
              {title}
            </h2>

            {/* Message */}
            <p className="text-slate-400 text-sm font-semibold leading-relaxed whitespace-pre-line px-2">
              {message}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-3">
              {!isAlert && (
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs font-bold rounded-xl text-slate-300 transition-all active:scale-[0.97]"
                >
                  {cancelText}
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className={`py-3 text-xs font-bold rounded-xl text-white transition-all active:scale-[0.97] shadow-lg ${
                  isAlert ? 'w-full' : 'flex-1'
                } ${
                  isDanger 
                    ? 'bg-red-600 hover:bg-red-700 hover:shadow-red-950/20' 
                    : 'bg-[#3b82f6] hover:bg-[#2563eb] hover:shadow-blue-950/20'
                }`}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ConfirmModal;

