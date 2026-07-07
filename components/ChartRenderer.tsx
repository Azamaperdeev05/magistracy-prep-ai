import React from 'react';
import { ChartData, TgoVisualData } from '../types';

interface BarChartProps {
  data: number[];
  labels: string[];
  colors?: string[];
  title?: string;
}

interface PieChartProps {
  data: number[];
  labels: string[];
  colors?: string[];
}

interface LineChartProps {
  data: number[];
  labels: string[];
  color?: string;
}

interface TableChartProps {
  headers: string[];
  rows: (string | number)[][];
}

interface ComparisonTableProps {
  title?: string;
  columnA: { header: string; content: string };
  columnB: { header: string; content: string };
  question?: string;
}

interface CircleProps {
  radius: number;
  label?: string;
  showCenter?: boolean;
}

interface MathExpressionProps {
  expressions: { label: string; value: string }[];
  question?: string;
}

interface ChartRendererProps {
  chartData: ChartData;
}

const DEFAULT_COLORS = [
  '#3b82f6', // blue
  '#ef4444', // red
  '#f59e0b', // amber
  '#10b981', // green
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#f97316', // orange
];

// Bar Chart Component
const BarChart: React.FC<BarChartProps> = ({ data, labels, colors = DEFAULT_COLORS, title }) => {
  const maxValue = Math.max(...data);
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      {title && <h4 className="text-sm font-semibold text-slate-600 mb-4 text-center">{title}</h4>}
      <div className="flex items-end justify-center gap-4 h-48">
        {data.map((value, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <span className="text-sm font-bold text-slate-700">{value}</span>
            <div 
              className="w-12 md:w-16 rounded-t-lg transition-all duration-500"
              style={{ 
                height: `${(value / maxValue) * 150}px`,
                backgroundColor: colors[index % colors.length]
              }}
            />
            <span className="text-xs font-medium text-slate-600 text-center max-w-16 truncate">
              {labels[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Pie Chart Component
const PieChart: React.FC<PieChartProps> = ({ data, labels, colors = DEFAULT_COLORS }) => {
  const total = data.reduce((a, b) => a + b, 0);
  let cumulativePercent = 0;
  
  const slices = data.map((value, index) => {
    const percent = (value / total) * 100;
    const startAngle = cumulativePercent * 3.6;
    cumulativePercent += percent;
    return { value, percent, startAngle, color: colors[index % colors.length], label: labels[index] };
  });

  // Create conic gradient
  let gradientStops = '';
  let currentDeg = 0;
  slices.forEach((slice, i) => {
    const endDeg = currentDeg + (slice.percent * 3.6);
    gradientStops += `${slice.color} ${currentDeg}deg ${endDeg}deg${i < slices.length - 1 ? ', ' : ''}`;
    currentDeg = endDeg;
  });

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div 
          className="w-32 h-32 rounded-full shadow-inner"
          style={{ background: `conic-gradient(${gradientStops})` }}
        />
        <div className="flex flex-col gap-2">
          {slices.map((slice, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: slice.color }}
              />
              <span className="text-sm text-slate-700">
                <strong>{slice.label}:</strong> {slice.percent.toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Line Chart Component
const LineChart: React.FC<LineChartProps> = ({ data, labels, color = '#3b82f6' }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue || 1;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 280 + 20;
    const y = 130 - ((value - minValue) / range) * 110;
    return { x, y, value };
  });

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <svg viewBox="0 0 320 160" className="w-full h-40">
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <line key={i} x1="20" y1={20 + i * 27.5} x2="300" y2={20 + i * 27.5} stroke="#e2e8f0" strokeWidth="1" />
        ))}
        
        {/* Line */}
        <path d={pathD} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="5" fill={color} />
            <text x={p.x} y={p.y - 10} textAnchor="middle" className="text-xs fill-slate-600 font-medium">{p.value}</text>
            <text x={p.x} y="155" textAnchor="middle" className="text-xs fill-slate-500">{labels[i]}</text>
          </g>
        ))}
      </svg>
    </div>
  );
};

// Table Chart Component
const TableChart: React.FC<TableChartProps> = ({ headers, rows }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-100">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold text-slate-700 border-b border-slate-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-600 border-b border-slate-100">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Simple Comparison Box Component
const ComparisonBox: React.FC<{ columnA: string; columnB: string }> = ({ columnA, columnB }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="p-4 bg-blue-50 border-r border-slate-200">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">А шамасы</div>
          <div className="text-sm text-slate-700 font-medium">{columnA}</div>
        </div>
        <div className="p-4 bg-amber-50">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">В шамасы</div>
          <div className="text-sm text-slate-700 font-medium">{columnB}</div>
        </div>
      </div>
    </div>
  );
};

// NEW: Advanced Comparison Table (like HPV example)
const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, columnA, columnB, question }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {title && (
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
          <p className="text-sm text-slate-700 leading-relaxed">{title}</p>
        </div>
      )}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-100">
            <th className="px-4 py-3 text-center font-bold text-blue-700 border-b border-r border-slate-200 w-1/2">
              {columnA.header}
            </th>
            <th className="px-4 py-3 text-center font-bold text-amber-700 border-b border-slate-200 w-1/2">
              {columnB.header}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-4 text-slate-700 border-r border-slate-200 align-top">
              <div className="whitespace-pre-line leading-relaxed">{columnA.content}</div>
            </td>
            <td className="px-4 py-4 text-slate-700 align-top">
              <div className="whitespace-pre-line leading-relaxed">{columnB.content}</div>
            </td>
          </tr>
        </tbody>
      </table>
      {question && (
        <div className="bg-blue-50 px-4 py-3 border-t border-slate-200">
          <p className="text-sm font-semibold text-blue-800">{question}</p>
        </div>
      )}
    </div>
  );
};

// NEW: Circle/Geometry Component
const CircleDiagram: React.FC<CircleProps> = ({ radius, label, showCenter = true }) => {
  const size = 180;
  const cx = size / 2;
  const cy = size / 2;
  const r = 70;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-48 h-48 mx-auto">
        {/* Circle */}
        <circle 
          cx={cx} 
          cy={cy} 
          r={r} 
          fill="none" 
          stroke="#3b82f6" 
          strokeWidth="2"
        />
        
        {/* Center point */}
        {showCenter && (
          <>
            <circle cx={cx} cy={cy} r="3" fill="#3b82f6" />
            <text x={cx - 8} y={cy + 4} className="text-xs fill-slate-600 font-medium">O</text>
          </>
        )}
        
        {/* Radius line */}
        <line 
          x1={cx} 
          y1={cy} 
          x2={cx + r} 
          y2={cy} 
          stroke="#3b82f6" 
          strokeWidth="2"
        />
        
        {/* Radius label */}
        <text 
          x={cx + r/2} 
          y={cy - 8} 
          textAnchor="middle" 
          className="text-sm fill-slate-700 font-semibold"
        >
          R = {radius} см
        </text>
        
        {/* Optional label */}
        {label && (
          <text 
            x={cx} 
            y={size - 10} 
            textAnchor="middle" 
            className="text-xs fill-slate-500"
          >
            {label}
          </text>
        )}
      </svg>
    </div>
  );
};

// NEW: Math Expression Component
const MathExpression: React.FC<MathExpressionProps> = ({ expressions, question }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {question && (
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
          <p className="text-sm text-slate-700 font-medium">{question}</p>
        </div>
      )}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-100">
            {expressions.map((expr, i) => (
              <th key={i} className={`px-4 py-3 text-center font-bold border-b border-slate-200 ${i === 0 ? 'text-blue-700 border-r' : 'text-amber-700'}`}>
                {expr.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {expressions.map((expr, i) => (
              <td key={i} className={`px-4 py-6 text-center align-middle ${i === 0 ? 'border-r border-slate-200' : ''}`}>
                <span className="text-xl font-serif text-slate-800 font-medium italic">
                  {expr.value}
                </span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ExamFigureFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white border border-slate-400 text-slate-950 shadow-sm ${className}`}>
    {children}
  </div>
);

const parseDimensionLabel = (label: string): number | null => {
  const match = label.replace(',', '.').match(/\d+(?:\.\d+)?/);
  if (!match) return null;

  const value = Number(match[0]);
  return Number.isFinite(value) && value > 0 ? value : null;
};

const getProportionalBox = (
  widthLabel: string,
  heightLabel: string,
  maxWidth: number,
  maxHeight: number
) => {
  const widthValue = parseDimensionLabel(widthLabel) ?? maxWidth;
  const heightValue = parseDimensionLabel(heightLabel) ?? maxHeight;
  const scale = Math.min(maxWidth / widthValue, maxHeight / heightValue);

  return {
    width: widthValue * scale,
    height: heightValue * scale,
  };
};

const buildStepPath = (x: number, y: number, width: number, height: number): string => {
  const x1 = x + width * 0.22;
  const x2 = x + width * 0.65;
  const x3 = x + width;
  const y1 = y + height * 0.45;
  const y2 = y + height * 0.72;
  const y3 = y + height;

  return [
    `M ${x} ${y}`,
    `L ${x1} ${y}`,
    `L ${x1} ${y1}`,
    `L ${x2} ${y1}`,
    `L ${x2} ${y2}`,
    `L ${x3} ${y2}`,
    `L ${x3} ${y3}`,
    `L ${x} ${y3}`,
    'Z',
  ].join(' ');
};

const renderTgoVisual = (visual: TgoVisualData) => {
  if (visual.type === 'triangle_bc') {
    return (
      <svg viewBox="0 0 380 250" className="w-full max-w-md mx-auto">
        <line x1="50" y1="165" x2="310" y2="165" stroke="black" strokeWidth="3" />
        <line x1="50" y1="165" x2="50" y2="65" stroke="black" strokeWidth="3" />
        <line x1="50" y1="65" x2="130" y2="165" stroke="black" strokeWidth="3" />
        <line x1="130" y1="165" x2="310" y2="45" stroke="black" strokeWidth="3" />
        <line x1="310" y1="45" x2="310" y2="165" stroke="black" strokeWidth="3" />
        <path d="M50 145 L70 145 L70 165" fill="none" stroke="black" strokeWidth="3" />
        <rect x="126" y="151" width="18" height="18" fill="white" stroke="black" strokeWidth="3" transform="rotate(-39 135 160)" />
        <line x1="50" y1="205" x2="310" y2="205" stroke="black" strokeWidth="2" />
        <path d="M50 205 l12 -8 M50 205 l12 8 M310 205 l-12 -8 M310 205 l-12 8" stroke="black" strokeWidth="2" fill="none" />
        <text x="180" y="232" textAnchor="middle" fontSize="20" fontWeight="700">{visual.totalBase}</text>
        <text x="220" y="190" textAnchor="middle" fontSize="20" fontWeight="700">{visual.rightBase}</text>
        <text x="30" y="115" textAnchor="middle" fontSize="20" fontWeight="700">{visual.leftHeight}</text>
        <text x="33" y="174" fontSize="20" fontWeight="700">A</text>
        <text x="28" y="65" fontSize="20" fontWeight="700">B</text>
        <text x="122" y="186" fontSize="20" fontWeight="700">C</text>
        <text x="316" y="45" fontSize="20" fontWeight="700">D</text>
        <text x="316" y="174" fontSize="20" fontWeight="700">E</text>
      </svg>
    );
  }

  if (visual.type === 'mini_step') {
    const box = getProportionalBox(visual.widthLabel, visual.heightLabel, 190, 145);
    const x = (260 - box.width) / 2;
    const y = 22 + (145 - box.height) / 2;
    const pathD = buildStepPath(x, y, box.width, box.height);

    return (
      <svg viewBox="0 0 260 190" className="w-full max-w-xs mx-auto">
        <path d={pathD} fill="none" stroke="black" strokeWidth="4" strokeLinejoin="miter" />
        <text x={Math.max(18, x - 25)} y={y + box.height / 2 + 7} fontSize="20" fontWeight="700">{visual.heightLabel}</text>
        <text x={x + box.width / 2} y={y + box.height + 28} textAnchor="middle" fontSize="20" fontWeight="700">{visual.widthLabel}</text>
      </svg>
    );
  }

  return (
    <div className="flex min-h-32 items-center justify-center text-center font-serif text-2xl italic leading-relaxed">
      <div>{visual.lines.map((line, index) => <div key={index}>{line}</div>)}</div>
    </div>
  );
};

const TgoComparisonGrid: React.FC<Extract<ChartData, { type: 'tgo_comparison_grid' }>> = ({ title, columns, footer }) => (
  <ExamFigureFrame className="overflow-hidden">
    {title && <div className="px-4 py-3 text-center font-serif text-xl font-bold border-b border-slate-400">{title}</div>}
    <div className={`grid ${columns.length === 2 ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
      {columns.map((column, index) => (
        <div key={column.header} className={index > 0 ? 'border-l border-slate-400' : ''}>
          <div className="border-b border-slate-400 px-4 py-2 text-center font-serif text-2xl font-bold">{column.header}</div>
          <div className="min-h-56 p-4">
            {column.lines && (
              <div className="mb-3 whitespace-pre-line font-serif text-2xl leading-relaxed">
                {column.lines.map((line, lineIndex) => <div key={lineIndex}>{line}</div>)}
              </div>
            )}
            {column.visual && renderTgoVisual(column.visual)}
          </div>
        </div>
      ))}
    </div>
    {footer && <div className="border-t border-slate-400 px-4 py-2 font-serif text-xl">{footer}</div>}
  </ExamFigureFrame>
);

const TgoGroupedBar: React.FC<Extract<ChartData, { type: 'tgo_grouped_bar' }>> = ({ title, categories, series, yMin, yMax }) => {
  const allValues = series.flatMap(item => item.values);
  const min = yMin ?? Math.min(0, ...allValues);
  const max = yMax ?? Math.max(...allValues);
  const chartHeight = 220;
  const chartWidth = 560;
  const plotLeft = 55;
  const plotTop = 20;
  const plotWidth = 390;
  const plotHeight = 170;
  const ticks = Array.from({ length: max - min + 1 }, (_, index) => min + index);

  return (
    <ExamFigureFrame className="p-4">
      {title && <div className="mb-3 text-center font-serif text-xl font-bold">{title}</div>}
      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full max-w-3xl mx-auto">
        {ticks.map(tick => {
          const y = plotTop + plotHeight - ((tick - min) / (max - min)) * plotHeight;
          return (
            <g key={tick}>
              <line x1={plotLeft} y1={y} x2={plotLeft + plotWidth} y2={y} stroke="#cbd5e1" strokeWidth="1" />
              <text x={plotLeft - 14} y={y + 5} textAnchor="end" fontSize="14">{tick}</text>
            </g>
          );
        })}
        <line x1={plotLeft} y1={plotTop} x2={plotLeft} y2={plotTop + plotHeight} stroke="#64748b" strokeWidth="1.5" />
        <line x1={plotLeft} y1={plotTop + plotHeight} x2={plotLeft + plotWidth} y2={plotTop + plotHeight} stroke="#64748b" strokeWidth="1.5" />
        {categories.map((category, categoryIndex) => {
          const groupWidth = plotWidth / categories.length;
          const barWidth = 22;
          const groupX = plotLeft + categoryIndex * groupWidth + 32;
          return (
            <g key={category}>
              {series.map((item, seriesIndex) => {
                const value = item.values[categoryIndex];
                const height = ((value - min) / (max - min)) * plotHeight;
                const x = groupX + seriesIndex * (barWidth + 5);
                const y = plotTop + plotHeight - height;
                return <rect key={item.name} x={x} y={y} width={barWidth} height={height} fill={item.color} />;
              })}
              <text x={groupX + 36} y={plotTop + plotHeight + 28} textAnchor="middle" fontSize="15">{category}</text>
            </g>
          );
        })}
        {series.map((item, index) => (
          <g key={item.name} transform={`translate(470 ${60 + index * 26})`}>
            <rect width="14" height="14" fill={item.color} />
            <text x="22" y="13" fontSize="15">{item.name}</text>
          </g>
        ))}
      </svg>
    </ExamFigureFrame>
  );
};

const TgoStepPerimeter: React.FC<Extract<ChartData, { type: 'tgo_step_perimeter' }>> = ({ widthLabel, heightLabel }) => {
  const box = getProportionalBox(widthLabel, heightLabel, 290, 175);
  const x = (420 - box.width) / 2;
  const y = 28 + (175 - box.height) / 2;
  const pathD = buildStepPath(x, y, box.width, box.height);

  return (
    <ExamFigureFrame className="p-5">
      <svg viewBox="0 0 420 245" className="w-full max-w-md mx-auto">
        <path d={pathD} fill="none" stroke="black" strokeWidth="5" strokeLinejoin="miter" />
        <text x={Math.max(22, x - 38)} y={y + box.height / 2 + 8} fontSize="24" fontWeight="700">{heightLabel}</text>
        <text x={x + box.width / 2} y={y + box.height + 38} textAnchor="middle" fontSize="24" fontWeight="700">{widthLabel}</text>
      </svg>
    </ExamFigureFrame>
  );
};

const TgoVenn: React.FC<Extract<ChartData, { type: 'tgo_venn' }>> = ({ leftLabel, rightLabel, leftTotal, rightTotal, intersection, outside }) => (
  <ExamFigureFrame className="p-5">
    <svg viewBox="0 0 620 360" className="w-full max-w-2xl mx-auto">
      <rect x="45" y="35" width="530" height="290" fill="white" stroke="black" strokeWidth="2.5" />
      <circle cx="275" cy="205" r="100" fill="none" stroke="black" strokeWidth="2.5" />
      <circle cx="395" cy="205" r="100" fill="none" stroke="black" strokeWidth="2.5" />
      <text x="82" y="86" fontSize="30" fontFamily="serif">{leftLabel}</text>
      <text x="250" y="78" fontSize="24" fontFamily="serif">{leftTotal}</text>
      <text x="382" y="82" fontSize="30" fontFamily="serif">{rightLabel}</text>
      <text x="532" y="78" textAnchor="end" fontSize="24" fontFamily="serif">{rightTotal}</text>
      <text x="335" y="220" textAnchor="middle" fontSize="30" fontFamily="serif">{intersection}</text>
      {typeof outside === 'number' && <text x="520" y="275" fontSize="30" fontFamily="serif">{outside}</text>}
    </svg>
  </ExamFigureFrame>
);

const TgoVennExclusive: React.FC<Extract<ChartData, { type: 'tgo_venn_exclusive' }>> = ({ leftLabel, rightLabel, leftExclusive, rightExclusive, intersection, outside }) => (
  <ExamFigureFrame className="p-5">
    <svg viewBox="0 0 620 360" className="w-full max-w-2xl mx-auto">
      <rect x="45" y="35" width="530" height="290" fill="white" stroke="black" strokeWidth="2.5" />
      <circle cx="275" cy="205" r="100" fill="none" stroke="black" strokeWidth="2.5" />
      <circle cx="395" cy="205" r="100" fill="none" stroke="black" strokeWidth="2.5" />
      <text x="175" y="70" fontSize="30" fontFamily="serif" fontStyle="italic" textAnchor="middle">{leftLabel}</text>
      <text x="445" y="70" fontSize="30" fontFamily="serif" fontStyle="italic" textAnchor="middle">{rightLabel}</text>
      <text x="210" y="215" textAnchor="middle" fontSize="30" fontFamily="serif">{leftExclusive}</text>
      <text x="335" y="215" textAnchor="middle" fontSize="30" fontFamily="serif">{intersection}</text>
      <text x="460" y="215" textAnchor="middle" fontSize="30" fontFamily="serif">{rightExclusive}</text>
      {typeof outside === 'number' && <text x="520" y="275" fontSize="30" fontFamily="serif">{outside}</text>}
    </svg>
  </ExamFigureFrame>
);

const TgoCircleRectangleDiagonal: React.FC<Extract<ChartData, { type: 'tgo_circle_rectangle_diagonal' }>> = ({ radius }) => (
  <ExamFigureFrame className="p-5">
    <svg viewBox="0 0 360 360" className="w-full max-w-sm mx-auto">
      <circle cx="180" cy="180" r="140" fill="none" stroke="black" strokeWidth="2.5" />
      <line x1="40" y1="180" x2="320" y2="180" stroke="black" strokeWidth="2" />
      <circle cx="180" cy="180" r="3" fill="black" />
      <rect x="180" y="94" width="110" height="86" fill="none" stroke="black" strokeWidth="2.5" />
      <line x1="180" y1="94" x2="290" y2="180" stroke="black" strokeWidth="2.5" />
      <text x="170" y="200" fontSize="20" fontFamily="serif">O</text>
      <text x="290" y="200" fontSize="20" fontFamily="serif">P</text>
      <text x="300" y="90" fontSize="20" fontFamily="serif">R</text>
      <text x="160" y="94" fontSize="20" fontFamily="serif">S</text>
    </svg>
  </ExamFigureFrame>
);


const TgoShadedRectangle: React.FC<Extract<ChartData, { type: 'tgo_shaded_rectangle' }>> = ({ widthParts, heightParts }) => (
  <ExamFigureFrame className="p-5">
    <svg viewBox="0 0 520 300" className="w-full max-w-2xl mx-auto">
      <defs>
        <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 8 L8 0 M-2 2 L2 -2 M6 10 L10 6" stroke="#475569" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="70" y="55" width="360" height="190" fill="white" stroke="black" strokeWidth="2.5" />
      <polygon points="70,245 70,218 310,55 430,55" fill="url(#hatch)" stroke="black" strokeWidth="2.5" />
      <line x1="70" y1="245" x2="430" y2="55" stroke="black" strokeWidth="2.5" />
      <text x="50" y="52" fontSize="20" fontFamily="serif" fontStyle="italic">A</text>
      <text x="436" y="52" fontSize="20" fontFamily="serif" fontStyle="italic">B</text>
      <text x="436" y="266" fontSize="20" fontFamily="serif" fontStyle="italic">C</text>
      <text x="50" y="266" fontSize="20" fontFamily="serif" fontStyle="italic">D</text>
      <text x="52" y="224" fontSize="20" fontFamily="serif" fontStyle="italic">E</text>
      <text x="305" y="52" fontSize="20" fontFamily="serif" fontStyle="italic">F</text>
      <text x="190" y="42" fontSize="20" fontFamily="serif">{widthParts[0]?.label}</text>
      <text x="365" y="42" fontSize="20" fontFamily="serif">{widthParts[1]?.label}</text>
      <text x="43" y="150" fontSize="20" fontFamily="serif">{heightParts[0]?.label}</text>
      <text x="45" y="235" fontSize="20" fontFamily="serif">{heightParts[1]?.label}</text>
    </svg>
  </ExamFigureFrame>
);

const TgoTriangleSides: React.FC<Extract<ChartData, { type: 'tgo_triangle_sides' }>> = ({ leftSide, rightSide, baseLabel }) => (
  <ExamFigureFrame className="p-5">
    <svg viewBox="0 0 360 260" className="w-full max-w-md mx-auto">
      <path d="M70 205 L180 38 L305 205 Z" fill="none" stroke="black" strokeWidth="3" strokeLinejoin="round" />
      <text x="98" y="128" fontSize="24" fontFamily="serif" fontWeight="700">{leftSide}</text>
      <text x="252" y="128" fontSize="24" fontFamily="serif" fontWeight="700">{rightSide}</text>
      <text x="180" y="238" textAnchor="middle" fontSize="24" fontFamily="serif" fontWeight="700" fontStyle="italic">{baseLabel}</text>
    </svg>
  </ExamFigureFrame>
);

const TgoInscribedSquare: React.FC<Extract<ChartData, { type: 'tgo_inscribed_square' }>> = ({ radiusLabel }) => (
  <ExamFigureFrame className="p-5">
    <svg viewBox="0 0 360 300" className="w-full max-w-md mx-auto">
      <circle cx="180" cy="150" r="95" fill="none" stroke="black" strokeWidth="3" />
      <polygon points="180,55 275,150 180,245 85,150" fill="none" stroke="black" strokeWidth="3" />
      <circle cx="180" cy="150" r="4" fill="black" />
      <line x1="180" y1="150" x2="180" y2="55" stroke="black" strokeWidth="2.5" />
      <text x="192" y="102" fontSize="22" fontFamily="serif" fontWeight="700">{radiusLabel}</text>
      <text x="168" y="174" fontSize="20" fontFamily="serif" fontStyle="italic">O</text>
    </svg>
  </ExamFigureFrame>
);

const TgoSquareMosaic: React.FC<Extract<ChartData, { type: 'tgo_square_mosaic' }>> = ({ unitAreaLabel }) => {
  const cell = 46;
  const leftCells = [
    { x: 0, y: 0, shaded: true },
    { x: 1, y: 0, shaded: true },
    { x: 2, y: 0, shaded: true },
    { x: 0, y: 1, shaded: false },
    { x: 1, y: 1, shaded: false },
  ];
  const rightCells = [
    { x: 0, y: 0, shaded: false },
    { x: 1, y: 0, shaded: false },
    { x: 0, y: 1, shaded: false },
    { x: 1, y: 1, shaded: false },
    { x: 2, y: 0, shaded: true },
    { x: 2, y: 1, shaded: false },
  ];

  const drawCells = (cells: typeof leftCells, offsetX: number, offsetY: number) => (
    <g transform={`translate(${offsetX} ${offsetY})`}>
      {cells.map((item, index) => (
        <rect
          key={`${item.x}-${item.y}-${index}`}
          x={item.x * cell}
          y={item.y * cell}
          width={cell}
          height={cell}
          fill={item.shaded ? '#8f8f8f' : 'white'}
          stroke="black"
          strokeWidth="2.5"
        />
      ))}
    </g>
  );

  return (
    <ExamFigureFrame className="p-5">
      <svg viewBox="0 0 560 230" className="w-full max-w-2xl mx-auto">
        <text x="280" y="28" textAnchor="middle" fontSize="20" fontFamily="serif">
          Бір кіші шаршының ауданы: {unitAreaLabel}
        </text>
        {drawCells(leftCells, 90, 70)}
        {drawCells(rightCells, 330, 70)}
      </svg>
    </ExamFigureFrame>
  );
};

const TgoCoordinateLine: React.FC = () => {
  const size = 320;
  const center = 160;
  const unit = 22;

  // Grid lines
  const gridLines = [];
  for (let i = -5; i <= 5; i++) {
    if (i === 0) continue;
    const pos = center + i * unit;
    // vertical grid line
    gridLines.push(
      <line key={`v-${i}`} x1={pos} y1={25} x2={pos} y2={295} stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2,2" />
    );
    // horizontal grid line
    gridLines.push(
      <line key={`h-${i}`} x1={25} y1={pos} x2={295} y2={pos} stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="2,2" />
    );
  }

  // Axis labels
  const labels = [];
  for (let i = -5; i <= 5; i++) {
    if (i === 0) continue;
    const pos = center + i * unit;
    // X-axis label
    labels.push(
      <text key={`x-lbl-${i}`} x={pos} y={center + 14} fontSize="10" fontFamily="serif" textAnchor="middle" fill="#475569" fontWeight="bold">
        {i}
      </text>
    );
    // Y-axis label
    labels.push(
      <text key={`y-lbl-${i}`} x={center - 8} y={pos + 3.5} fontSize="10" fontFamily="serif" textAnchor="end" fill="#475569" fontWeight="bold">
        {i}
      </text>
    );
  }

  // Line y = x: from x = -5.2 to x = 5.2
  const x1 = center - 5.2 * unit;
  const y1 = center + 5.2 * unit;
  const x2 = center + 5.2 * unit;
  const y2 = center - 5.2 * unit;

  return (
    <ExamFigureFrame className="p-4 bg-white">
      <svg viewBox="0 0 320 320" className="w-full max-w-sm mx-auto select-none">
        {/* Draw Grid */}
        {gridLines}

        {/* X Axis */}
        <line x1="20" y1={center} x2="300" y2={center} stroke="#0f172a" strokeWidth="1.5" />
        <polygon points="300,156 308,160 300,164" fill="#0f172a" />
        <text x="312" y={center + 4} fontSize="12" fontFamily="serif" fontStyle="italic" fontWeight="bold" fill="#0f172a">x</text>

        {/* Y Axis */}
        <line x1={center} y1="300" x2={center} y2="20" stroke="#0f172a" strokeWidth="1.5" />
        <polygon points="156,20 160,12 164,20" fill="#0f172a" />
        <text x={center - 12} y="15" fontSize="12" fontFamily="serif" fontStyle="italic" fontWeight="bold" fill="#0f172a">y</text>

        {/* Origin 0 */}
        <text x={center + 5} y={center + 12} fontSize="11" fontFamily="serif" fill="#0f172a" fontWeight="bold">0</text>

        {/* Axis Ticks Labels */}
        {labels}

        {/* The straight line y = x */}
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </ExamFigureFrame>
  );
};

const TgoThreeQuantities: React.FC<Extract<ChartData, { type: 'tgo_three_quantities' }>> = ({ colA, colB, colC }) => {
  const renderFractionValue = (val: { whole?: string; num: string; den: string }) => (
    <div className="inline-flex items-center font-serif text-3xl font-bold select-none text-[#1e293b]">
      {val.whole && <span className="mr-1.5">{val.whole}</span>}
      <div className="inline-flex flex-col items-center justify-center text-xl align-middle leading-none border-l border-transparent px-1">
        <span className="border-b border-slate-900 pb-0.5 px-0.5">{val.num}</span>
        <span className="pt-0.5 px-0.5">{val.den}</span>
      </div>
    </div>
  );

  return (
    <ExamFigureFrame className="overflow-hidden p-4 bg-white border border-slate-200">
      <div className="max-w-md mx-auto border border-slate-400 rounded-lg overflow-hidden bg-slate-50/50 shadow-sm">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-400">
              <th className="py-2.5 px-4 font-serif text-base font-bold text-slate-800 border-r border-slate-400 w-1/3">
                {colA.header}
              </th>
              <th className="py-2.5 px-4 font-serif text-base font-bold text-slate-800 border-r border-slate-400 w-1/3">
                {colB.header}
              </th>
              <th className="py-2.5 px-4 font-serif text-base font-bold text-slate-800 w-1/3">
                {colC.header}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-6 px-4 border-r border-slate-400 bg-white">
                {renderFractionValue(colA)}
              </td>
              <td className="py-6 px-4 border-r border-slate-400 bg-white">
                {renderFractionValue(colB)}
              </td>
              <td className="py-6 px-4 bg-white">
                {renderFractionValue(colC)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ExamFigureFrame>
  );
};

const TgoAngleBisector: React.FC = () => {
  return (
    <ExamFigureFrame className="p-4 bg-white border border-slate-200">
      <svg viewBox="0 0 240 180" className="w-full max-w-xs mx-auto select-none">
        {/* Draw Rays */}
        {/* Ray BC */}
        <line x1="20" y1="150" x2="41" y2="32" stroke="black" strokeWidth="2.5" />
        <polygon points="38,36 41,32 44,37" fill="black" />
        
        {/* Ray BD */}
        <line x1="20" y1="150" x2="123" y2="55" stroke="black" strokeWidth="2.5" />
        <polygon points="119,59 123,55 120,53" fill="black" />
        
        {/* Ray BA */}
        <line x1="20" y1="150" x2="169" y2="137" stroke="black" strokeWidth="2.5" />
        <polygon points="165,134 169,137 165,140" fill="black" />

        {/* Labels for Vertices */}
        <text x="10" y="160" fontSize="16" fontFamily="serif" fontWeight="bold">B</text>
        <text x="32" y="24" fontSize="16" fontFamily="serif" fontWeight="bold">C</text>
        <text x="131" y="52" fontSize="16" fontFamily="serif" fontWeight="bold">D</text>
        <text x="175" y="145" fontSize="16" fontFamily="serif" fontWeight="bold">A</text>

        {/* Arc for Angle ABD */}
        <path d="M 69.8 145.7 A 50 50 0 0 0 56.8 116.2" fill="none" stroke="black" strokeWidth="1.2" />
        
        {/* 40° Label */}
        <text x="76" y="128" fontSize="14" fontFamily="serif" fontWeight="bold">40°</text>
      </svg>
    </ExamFigureFrame>
  );
};

const TgoInequalityFraction: React.FC = () => {
  return (
    <ExamFigureFrame className="p-6 bg-white border border-slate-200">
      <div className="flex items-center justify-center font-serif text-3xl font-bold select-none text-[#1e293b] gap-3">
        {/* Fraction */}
        <div className="flex flex-col items-center justify-center">
          <span className="pb-1 px-2 border-b-2 border-slate-900 leading-none">3 · (6 + 4x)</span>
          <span className="pt-1 px-2 leading-none">2</span>
        </div>
        
        {/* Operator */}
        <span className="text-4xl leading-none">≤</span>
        
        {/* Right side */}
        <span className="leading-none">-2x + 5</span>
      </div>
    </ExamFigureFrame>
  );
};

const TgoEquationSystem: React.FC<Extract<ChartData, { type: 'tgo_equation_system' }>> = ({ eq1, eq2 }) => {
  return (
    <ExamFigureFrame className="p-6 bg-white border border-slate-200">
      <div className="flex items-center justify-center font-serif text-3xl font-bold select-none text-[#1e293b]">
        {/* Large curly brace */}
        <span className="text-6xl font-extralight mr-2 align-middle text-slate-800" style={{ transform: 'translateY(-2px)' }}>{'{'}</span>
        {/* Equations stack */}
        <div className="flex flex-col gap-2.5 text-left leading-none py-1">
          <span>{eq1}</span>
          <span>{eq2}</span>
        </div>
      </div>
    </ExamFigureFrame>
  );
};

const TgoComparisonEquations: React.FC<Extract<ChartData, { type: 'tgo_comparison_equations' }>> = ({
  eq1Num, eq1Den, eq1Val,
  eq2Num, eq2Den, eq2Val,
  colAExpr, colBExpr
}) => {
  return (
    <ExamFigureFrame className="p-6 bg-white border border-slate-200 space-y-6">
      {/* Equations */}
      <div className="flex flex-wrap items-center justify-center gap-10 font-serif text-2xl font-bold select-none text-[#1e293b]">
        {/* Equation 1 */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center justify-center">
            <span className="pb-0.5 px-1 border-b-2 border-slate-900 leading-none">{eq1Num}</span>
            <span className="pt-0.5 px-1 leading-none">{eq1Den}</span>
          </div>
          <span>=</span>
          <div className="flex flex-col items-center justify-center">
            <span className="pb-0.5 px-1 border-b-2 border-slate-900 leading-none">a</span>
            <span className="pt-0.5 px-1 leading-none">{eq1Val}</span>
          </div>
        </div>
        
        {/* AND / және */}
        <span className="text-slate-500 font-semibold text-lg">және</span>

        {/* Equation 2 */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center justify-center">
            <span className="pb-0.5 px-1 border-b-2 border-slate-900 leading-none">b</span>
            <span className="pt-0.5 px-1 leading-none">{eq2Val}</span>
          </div>
          <span>=</span>
          <div className="flex flex-col items-center justify-center">
            <span className="pb-0.5 px-1 border-b-2 border-slate-900 leading-none">{eq2Num}</span>
            <span className="pt-0.5 px-1 leading-none">{eq2Den}</span>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-md mx-auto border border-slate-400 rounded-lg overflow-hidden bg-slate-50/50 shadow-sm">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-400">
              <th className="py-2.5 px-4 font-serif text-base font-bold text-slate-800 border-r border-slate-400 w-1/2">
                А шамасы
              </th>
              <th className="py-2.5 px-4 font-serif text-base font-bold text-slate-800 w-1/2">
                В шамасы
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-5 px-4 border-r border-slate-400 bg-white font-serif text-2xl font-bold text-slate-700">
                {colAExpr}
              </td>
              <td className="py-5 px-4 bg-white font-serif text-2xl font-bold text-slate-700">
                {colBExpr}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ExamFigureFrame>
  );
};

const TgoStraightLineAngles: React.FC = () => {
  return (
    <ExamFigureFrame className="p-4 bg-white border border-slate-200">
      <svg viewBox="0 0 280 140" className="w-full max-w-xs mx-auto select-none">
        {/* Straight line AOB */}
        <line x1="20" y1="100" x2="260" y2="100" stroke="black" strokeWidth="2" />
        
        {/* Point O */}
        <circle cx="140" cy="100" r="3" fill="black" />
        
        {/* Ray OD */}
        <line x1="140" y1="100" x2="60" y2="40" stroke="black" strokeWidth="2" />
        
        {/* Ray OC */}
        <line x1="140" y1="100" x2="230" y2="60" stroke="black" strokeWidth="2" />
        
        {/* Labels for points */}
        <text x="20" y="125" fontSize="16" fontFamily="serif" fontWeight="bold">A</text>
        <text x="135" y="125" fontSize="16" fontFamily="serif" fontWeight="bold">O</text>
        <text x="250" y="125" fontSize="16" fontFamily="serif" fontWeight="bold">B</text>
        <text x="45" y="30" fontSize="16" fontFamily="serif" fontWeight="bold">D</text>
        <text x="235" y="55" fontSize="16" fontFamily="serif" fontWeight="bold">C</text>
        
        {/* Arcs for angles */}
        {/* Arc AOD (2x) */}
        <path d="M 110 100 A 30 30 0 0 1 117 81" fill="none" stroke="black" strokeWidth="1" />
        {/* Arc DOC (6x) */}
        <path d="M 121 84 A 25 25 0 0 1 163.5 91.5" fill="none" stroke="black" strokeWidth="1" />
        {/* Arc COB (x) */}
        <path d="M 170 100 A 30 30 0 0 0 168 90" fill="none" stroke="black" strokeWidth="1" />
        
        {/* Labels for angles */}
        <text x="85" y="80" fontSize="14" fontFamily="serif" fontStyle="italic">2x</text>
        <text x="130" y="50" fontSize="14" fontFamily="serif" fontStyle="italic">6x</text>
        <text x="185" y="88" fontSize="14" fontFamily="serif" fontStyle="italic">x</text>
      </svg>
    </ExamFigureFrame>
  );
};

// Main ChartRenderer Component
const ChartRenderer: React.FC<ChartRendererProps> = ({ chartData }) => {
  switch (chartData.type) {
    case 'bar':
      return <BarChart data={chartData.data} labels={chartData.labels} colors={chartData.colors} title={chartData.title} />;
    case 'pie':
      return <PieChart data={chartData.data} labels={chartData.labels} colors={chartData.colors} />;
    case 'line':
      return <LineChart data={chartData.data} labels={chartData.labels} color={chartData.color} />;
    case 'table':
      return <TableChart headers={chartData.headers} rows={chartData.rows} />;
    case 'comparison':
      return <ComparisonBox columnA={chartData.columnA} columnB={chartData.columnB} />;
    case 'comparison_table':
      return <ComparisonTable title={chartData.title} columnA={chartData.columnA} columnB={chartData.columnB} question={chartData.question} />;
    case 'circle':
      return <CircleDiagram radius={chartData.radius} label={chartData.label} showCenter={chartData.showCenter} />;
    case 'math':
      return <MathExpression expressions={chartData.expressions} question={chartData.question} />;
    case 'tgo_comparison_grid':
      return <TgoComparisonGrid title={chartData.title} columns={chartData.columns} footer={chartData.footer} type={chartData.type} />;
    case 'tgo_grouped_bar':
      return <TgoGroupedBar {...chartData} />;
    case 'tgo_step_perimeter':
      return <TgoStepPerimeter {...chartData} />;
    case 'tgo_venn':
      return <TgoVenn {...chartData} />;
    case 'tgo_venn_exclusive':
      return <TgoVennExclusive {...chartData} />;
    case 'tgo_circle_rectangle_diagonal':
      return <TgoCircleRectangleDiagonal {...chartData} />;
    case 'tgo_shaded_rectangle':
      return <TgoShadedRectangle {...chartData} />;
    case 'tgo_triangle_sides':
      return <TgoTriangleSides {...chartData} />;
    case 'tgo_inscribed_square':
      return <TgoInscribedSquare {...chartData} />;
    case 'tgo_square_mosaic':
      return <TgoSquareMosaic {...chartData} />;
    case 'tgo_coordinate_line':
      return <TgoCoordinateLine />;
    case 'tgo_three_quantities':
      return <TgoThreeQuantities {...chartData} />;
    case 'tgo_angle_bisector':
      return <TgoAngleBisector />;
    case 'tgo_inequality_fraction':
      return <TgoInequalityFraction />;
    case 'tgo_equation_system':
      return <TgoEquationSystem {...chartData} />;
    case 'tgo_comparison_equations':
      return <TgoComparisonEquations {...chartData} />;
    case 'tgo_straight_line_angles':
      return <TgoStraightLineAngles />;
    default:
      return null;
  }
};

export default ChartRenderer;
