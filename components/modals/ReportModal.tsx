import React, { useState } from 'react';
import { X, AlertTriangle, Send, Loader2 } from 'lucide-react';
import { sendQuestionReport } from '../../services/authService';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  questionId: string;
  questionText: string;
}

const ReportModal: React.FC<ReportModalProps> = ({
  isOpen,
  onClose,
  questionId,
  questionText,
}) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      setError('Мәселені толығырақ сипаттаңыз');
      return;
    }

    setIsSubmitting(true);
    setError('');
    try {
      await sendQuestionReport(questionId, questionText, comment);
      setSuccess(true);
      setComment('');
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Жіберу кезінде қате орын алды');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[200] p-4" onClick={onClose}>
      <div 
        className="bg-[#0f1219] border border-slate-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-500">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="text-base font-black text-white uppercase tracking-wider">Қате туралы хабарлау</h2>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white p-1 rounded-lg hover:bg-slate-800/50 transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left">
          {success ? (
            <div className="text-center py-6 space-y-2">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3 text-emerald-400 font-bold">
                ✓
              </div>
              <h3 className="text-emerald-400 font-bold text-sm">Шағым сәтті жіберілді!</h3>
              <p className="text-slate-400 text-xs">Біз бұл сұрақты жақын арада тексеріп, түзетеміз.</p>
            </div>
          ) : (
            <>
              <div className="bg-slate-900/50 border border-slate-800/60 p-4 rounded-2xl text-xs text-slate-400 max-h-24 overflow-y-auto leading-relaxed">
                <span className="font-bold text-slate-300">Сұрақ ID:</span> {questionId}
                <div className="mt-1 font-medium text-slate-200">
                  {questionText}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Мәселені сипаттаңыз:</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Қандай қате кетті? Дұрыс жауап қандай болуы керек? (мысалы: Аудармасы қате немесе дұрыс жауап жауаптар арасында жоқ)"
                  rows={4}
                  className="w-full bg-[#161a23] border border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 text-slate-200 text-sm transition placeholder-slate-600 resize-none font-medium"
                />
              </div>

              {error && (
                <div className="text-xs text-red-400 font-bold bg-red-500/10 border border-red-500/20 p-2.5 rounded-xl">
                  {error}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs font-bold rounded-xl text-slate-300 transition"
                >
                  Бас тарту
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-xs font-bold rounded-xl text-white flex items-center justify-center gap-2 transition disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Жіберу</span>
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ReportModal;
