import React, { useState, useEffect, useRef } from 'react';

export interface SubjectSummary {
  id: string;
  name: string;
  total: number;
  answered: number;
  unanswered: number;
}

interface FinishTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  subjectSummaries: SubjectSummary[];
}

const SIMPLE_MATH_PROBLEMS = [
  { question: '2 + 2 = ?', answer: 4 },
  { question: '3 + 5 = ?', answer: 8 },
  { question: '7 + 3 = ?', answer: 10 },
  { question: '10 - 4 = ?', answer: 6 },
  { question: '5 + 4 = ?', answer: 9 },
  { question: '6 + 6 = ?', answer: 12 },
  { question: '15 - 5 = ?', answer: 10 },
  { question: '4 * 2 = ?', answer: 8 },
  { question: '9 - 3 = ?', answer: 6 },
  { question: '8 + 2 = ?', answer: 10 },
  { question: '12 - 7 = ?', answer: 5 },
  { question: '7 + 7 = ?', answer: 14 },
];

const FinishTestModal: React.FC<FinishTestModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  subjectSummaries,
}) => {
  const [step, setStep] = useState<'summary' | 'captcha'>('summary');
  const [currentProblem, setCurrentProblem] = useState(SIMPLE_MATH_PROBLEMS[0]);
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStep('summary');
      setUserAnswer('');
      setError('');
      // Pick random problem
      const randomIndex = Math.floor(Math.random() * SIMPLE_MATH_PROBLEMS.length);
      setCurrentProblem(SIMPLE_MATH_PROBLEMS[randomIndex]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (step === 'captcha') {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [step]);

  if (!isOpen) return null;

  const totalQuestions = subjectSummaries.reduce((sum, s) => sum + s.total, 0);
  const totalAnswered = subjectSummaries.reduce((sum, s) => sum + s.answered, 0);
  const totalUnanswered = subjectSummaries.reduce((sum, s) => sum + s.unanswered, 0);

  const handleCaptchaSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userAnswer.trim()) {
      setError('Есептің жауабын енгізіңіз!');
      return;
    }

    if (parseInt(userAnswer.trim(), 10) === currentProblem.answer) {
      onConfirm();
    } else {
      setError('Жауап дұрыс емес, қайта тексеріңіз!');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-[120] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-200 animate-fade-in p-5 sm:p-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* STEP 1: SUMMARY TABLE */}
        {step === 'summary' && (
          <>
            {/* Title */}
            <div className="text-left mb-3">
              <h3 className="text-sm sm:text-base font-bold text-slate-800">
                Жауап берілген сұрақтар саны:
              </h3>
            </div>

            {/* ҰТО CT Style Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 text-xs sm:text-sm text-center">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold">
                    <th className="border border-slate-300 p-2.5 text-center font-bold">
                      Предмет / Пән
                    </th>
                    <th className="border border-slate-300 p-2.5 text-center font-bold min-w-[90px]">
                      Барлық сұрақ
                    </th>
                    <th className="border border-slate-300 p-2.5 text-center font-bold min-w-[90px]">
                      Жауап берілді
                    </th>
                    <th className="border border-slate-300 p-2.5 text-center font-bold min-w-[100px]">
                      Жауап берілмеді
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subjectSummaries.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                      <td className="border border-slate-300 p-2.5 text-left font-semibold text-slate-800">
                        {s.name}
                      </td>
                      <td className="border border-slate-300 p-2.5 font-bold text-slate-700">
                        {s.total}
                      </td>
                      <td className="border border-slate-300 p-2.5 font-bold text-slate-700">
                        {s.answered}
                      </td>
                      <td 
                        className={`border border-slate-300 p-2.5 font-bold ${
                          s.unanswered > 0 
                            ? 'bg-rose-200/90 text-rose-800' 
                            : 'bg-emerald-100/80 text-emerald-800'
                        }`}
                      >
                        {s.unanswered}
                      </td>
                    </tr>
                  ))}

                  {/* Total Summary Row */}
                  <tr className="bg-slate-100 font-bold text-slate-900 border-t-2 border-slate-400">
                    <td className="border border-slate-300 p-2.5 text-left font-black">
                      Жиынтық (Барлығы):
                    </td>
                    <td className="border border-slate-300 p-2.5 font-black">
                      {totalQuestions}
                    </td>
                    <td className="border border-slate-300 p-2.5 font-black text-emerald-700">
                      {totalAnswered}
                    </td>
                    <td className={`border border-slate-300 p-2.5 font-black ${
                      totalUnanswered > 0 ? 'bg-rose-300/90 text-rose-900' : 'bg-emerald-200 text-emerald-900'
                    }`}>
                      {totalUnanswered}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-6 sm:px-10 py-2.5 rounded-md text-xs sm:text-sm font-bold shadow-md transition active:scale-95 cursor-pointer"
              >
                Бас тарту
              </button>
              <button
                type="button"
                onClick={() => setStep('captcha')}
                className="bg-[#348FE2] hover:bg-[#2980B9] text-white px-6 sm:px-10 py-2.5 rounded-md text-xs sm:text-sm font-bold shadow-md transition active:scale-95 cursor-pointer"
              >
                Растау
              </button>
            </div>
          </>
        )}

        {/* STEP 2: MATH VERIFICATION CAPTCHA (Matching Screenshot) */}
        {step === 'captcha' && (
          <form onSubmit={handleCaptchaSubmit} className="flex flex-col items-center py-3 text-center">
            <h3 className="text-sm sm:text-base font-semibold text-slate-700 mb-2">
              Тестілеуді аяқтауды растаңыз:
            </h3>
            
            <p className="text-sm sm:text-base font-bold text-slate-900 mb-4">
              Қарапайым есепті шешіңіз: <span className="text-blue-600 font-extrabold">{currentProblem.question}</span>
            </p>

            <div className="w-full mb-5">
              <input
                ref={inputRef}
                type="number"
                value={userAnswer}
                onChange={(e) => {
                  setUserAnswer(e.target.value);
                  setError('');
                }}
                placeholder="Жауабын енгізіңіз..."
                className="w-full border-2 border-slate-900 rounded-md py-2 px-3 text-base sm:text-lg font-mono text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
              />
              {error && (
                <p className="text-rose-600 text-xs sm:text-sm font-bold mt-2 animate-shake">
                  {error}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between w-full gap-4 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-6 sm:px-10 py-2 rounded-md text-xs sm:text-sm font-bold shadow-md transition active:scale-95 cursor-pointer"
              >
                Жабу
              </button>
              <button
                type="submit"
                className="bg-[#348FE2] hover:bg-[#2980B9] text-white px-6 sm:px-10 py-2 rounded-md text-xs sm:text-sm font-bold shadow-md transition active:scale-95 cursor-pointer"
              >
                Тестті аяқтау!
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FinishTestModal;
