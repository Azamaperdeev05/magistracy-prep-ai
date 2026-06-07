import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Square, Menu, RotateCcw, MonitorUp, Delete } from 'lucide-react';
import {
  applyCalculatorFunction,
  CalculatorFunction,
  CalculatorOperator,
  evaluateExpression,
  formatCalculatorNumber,
  replaceTrailingOperator,
} from './calculatorEngine';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalculatorModal: React.FC<CalculatorModalProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [lastInput, setLastInput] = useState<'clear' | 'number' | 'operator' | 'function' | 'equals'>('clear');
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleNumber = (num: string) => {
    if (display === 'Қате' || lastInput === 'equals' || lastInput === 'operator' || lastInput === 'function') {
      setDisplay(num);
      if (lastInput === 'equals' || display === 'Қате') {
        setEquation('');
      }
    } else if (display === '0' && num !== '.') {
      setDisplay(num);
    } else if (num === '.' && display.includes('.')) {
      return;
    } else {
      setDisplay(display + num);
    }
    setLastInput('number');
  };

  const handleOperator = (op: CalculatorOperator) => {
    if (display === 'Қате') {
      return;
    }

    if (lastInput === 'operator') {
      setEquation(prev => replaceTrailingOperator(prev, op));
    } else if (lastInput === 'equals') {
      setEquation(`${display} ${op} `);
    } else {
      setEquation(prev => `${prev}${display} ${op} `);
    }

    setDisplay('0');
    setLastInput('operator');
  };

  const handleEquals = () => {
    try {
      const fullEquation = equation + display;
      const result = evaluateExpression(fullEquation);
      setDisplay(formatCalculatorNumber(result));
      setEquation('');
      setLastInput('equals');
    } catch {
      setDisplay('Қате');
      setEquation('');
      setLastInput('equals');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setLastInput('clear');
  };

  const handleClearEntry = () => {
    setDisplay('0');
    setLastInput('clear');
  };

  const handleBackspace = () => {
    if (display === 'Қате' || lastInput === 'equals') {
      setDisplay('0');
      setEquation('');
      setLastInput('clear');
    } else if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const handleMathFunc = (type: CalculatorFunction) => {
    try {
      setDisplay(applyCalculatorFunction(display, type, equation));
      setLastInput('function');
    } catch {
      setDisplay('Қате');
      setEquation('');
      setLastInput('equals');
    }
  };

  const rows = [
    ['%', 'CE', 'C', '⌫'],
    ['1/x', 'x²', '√', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['±', '0', '.', '='],
  ];

  const handleButton = (btn: string) => {
    if (!isNaN(parseInt(btn))) handleNumber(btn);
    else {
      switch (btn) {
        case '.': handleNumber('.'); break;
        case 'C': handleClear(); break;
        case 'CE': handleClearEntry(); break;
        case '⌫': handleBackspace(); break;
        case '=': handleEquals(); break;
        case '+': case '-': case '×': case '÷': handleOperator(btn); break;
        default: handleMathFunc(btn as CalculatorFunction); break;
      }
    }
  };

  // Manual Drag Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStartPos.current.x,
        y: e.clientY - dragStartPos.current.y
      });
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <div 
        style={{ left: position.x, top: position.y }}
        className="pointer-events-auto bg-[#1f1f1f] rounded-lg shadow-2xl w-[320px] overflow-hidden border border-white/10 absolute cursor-default flex flex-col"
      >
        {/* Windows 11 Style Title Bar */}
        <div 
          onMouseDown={handleMouseDown}
          className="bg-[#1f1f1f] text-white px-3 py-2 flex items-center justify-between cursor-grab active:cursor-grabbing select-none"
        >
          <div className="flex items-center gap-2 pointer-events-none">
            <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
               <div className="w-2.5 h-0.5 bg-white mb-[1px]" />
               <div className="w-2.5 h-0.5 bg-white" />
            </div>
            <span className="text-[11px] font-medium text-gray-300">Есептегіш</span>
          </div>
          <div className="flex items-center" onMouseDown={e => e.stopPropagation()}>
             <button className="p-2 hover:bg-white/10 transition-colors"><Minus className="w-3 h-3 text-gray-400" /></button>
             <button className="p-2 hover:bg-white/10 transition-colors"><Square className="w-2.5 h-2.5 text-gray-400" /></button>
             <button onClick={onClose} className="p-2 hover:bg-[#e81123] transition-colors group">
               <X className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
             </button>
          </div>
        </div>

        {/* Standard Menu Row */}
        <div className="flex items-center justify-between px-4 py-1" onMouseDown={e => e.stopPropagation()}>
           <div className="flex items-center gap-4">
             <button className="p-2 hover:bg-white/5 rounded transition-colors"><Menu className="w-5 h-5 text-white" /></button>
             <h2 className="text-xl font-bold text-white select-none">Стандартты</h2>
             <button className="p-1 hover:bg-white/5 rounded transition-colors"><MonitorUp className="w-4 h-4 text-gray-400" /></button>
           </div>
           <button className="p-2 hover:bg-white/5 rounded transition-colors"><RotateCcw className="w-5 h-5 text-white" /></button>
        </div>

        {/* Display Area */}
        <div className="px-4 py-8 text-right select-none min-h-[120px] flex flex-col justify-end" onMouseDown={e => e.stopPropagation()}>
          <div className="text-gray-500 text-sm h-5 overflow-hidden mb-1 font-normal select-none">{equation}</div>
          <div className="text-white text-6xl font-semibold tracking-tighter overflow-hidden text-ellipsis select-none">
            {display}
          </div>
        </div>

        {/* Memory Row */}
        <div className="flex justify-around px-2 py-2 text-[11px] font-bold text-gray-400 opacity-60">
           <span>MC</span><span>MR</span><span>M+</span><span>M-</span><span>MS</span><span>Mv</span>
        </div>

        {/* Buttons Grid */}
        <div className="p-[2px] grid grid-cols-4 gap-[2px] bg-[#1f1f1f]" onMouseDown={e => e.stopPropagation()}>
          {rows.flat().map((btn, idx) => {
            const isNumber = !isNaN(parseInt(btn)) || btn === '.';
            const isEquals = btn === '=';
            
            return (
              <button
                key={idx}
                onMouseDown={e => e.stopPropagation()}
                onClick={() => handleButton(btn)}
                className={`
                  h-12 rounded-[4px] text-sm font-medium transition-colors select-none
                  ${isEquals 
                    ? 'bg-[#60cdff] text-black hover:bg-[#60cdff]/90 font-bold' 
                    : isNumber 
                      ? 'bg-[#3b3b3b] text-white hover:bg-[#404040]'
                      : 'bg-[#323232] text-white hover:bg-[#3b3b3b]'}
                `}
              >
                {btn === '⌫' ? <Delete className="w-4 h-4 mx-auto" /> : btn}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalculatorModal;
