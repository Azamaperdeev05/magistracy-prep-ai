import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MATH_START = '\uE000';
const MATH_END = '\uE001';

const superscriptMap: Record<string, string> = {
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
  '+': '⁺',
  '-': '⁻',
  '=': '⁼',
  'n': 'ⁿ',
};

const latexSymbolReplacements: Array<[RegExp, string]> = [
  [/\\times/g, '×'],
  [/\\cdot/g, '·'],
  [/\\div/g, '÷'],
  [/\\geq?|≥/g, '≥'],
  [/\\leq?|≤/g, '≤'],
  [/\\neq|\\ne/g, '≠'],
  [/\\approx/g, '≈'],
  [/\\pm/g, '±'],
  [/\\infty/g, '∞'],
  [/\\emptyset|\\varnothing/g, '∅'],
  [/\\in/g, '∈'],
  [/\\notin/g, '∉'],
  [/\\Rightarrow|\\implies/g, '⇒'],
  [/\\left|\\right/g, ''],
  [/\\,/g, ' '],
  [/\\;/g, ' '],
  [/\\:/g, ' '],
];

const toSuperscript = (value: string): string =>
  value
    .split('')
    .map(char => superscriptMap[char] || char)
    .join('');

const normalizeMathSyntax = (rawValue: string, compact: boolean): string => {
  let value = compact ? rawValue.trim() : rawValue;

  value = value.replace(/\\text\s*\{([^{}]*)\}/g, '$1');
  value = value.replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '($1 / $2)');
  value = value.replace(/\\sqrt\s*\{([^{}]+)\}/g, '√($1)');

  latexSymbolReplacements.forEach(([pattern, replacement]) => {
    value = value.replace(pattern, replacement);
  });

  value = value.replace(/([A-Za-zА-Яа-яӘәІіҢңҒғҮүҰұҚқӨөҺһ0-9)\]])\s*\^\s*\{?([0-9+\-=n-]+)\}?/g, (_match, base: string, power: string) => {
    return `${base}${toSuperscript(power)}`;
  });

  if (compact) {
    value = value.replace(/_/g, '');
    value = value.replace(/[{}]/g, '');
    value = value.replace(/\\+/g, '');
    value = value.replace(/\s+/g, ' ').trim();
  }

  return value;
};

const normalizeMathExpression = (rawValue: string): string => normalizeMathSyntax(rawValue, true);

const markMath = (value: string): string => {
  const normalized = normalizeMathExpression(value);
  return normalized ? `${MATH_START}${normalized}${MATH_END}` : '';
};

const normalizeMarkdownTextSegment = (value: string): string => {
  let normalized = value;

  normalized = normalized.replace(/\$\$([\s\S]*?)\$\$/g, (_match, expression: string) => markMath(expression));
  normalized = normalized.replace(/\\\[([\s\S]*?)\\\]/g, (_match, expression: string) => markMath(expression));
  normalized = normalized.replace(/\\\(([\s\S]*?)\\\)/g, (_match, expression: string) => markMath(expression));
  normalized = normalized.replace(/\$([^$\n]{1,180})\$/g, (_match, expression: string) => markMath(expression));

  normalized = normalizeMathSyntax(normalized, false);

  // Qwen sometimes leaves orphan dollar signs around variables after refusing LaTeX.
  normalized = normalized.replace(/\$(?=[A-Za-zА-Яа-яӘәІіҢңҒғҮүҰұҚқӨөҺһ0-9({<>=+\-])/g, '');
  normalized = normalized.replace(/(?<=[A-Za-zА-Яа-яӘәІіҢңҒғҮүҰұҚқӨөҺһ0-9)}>])\$/g, '');

  return normalized;
};

const normalizeMarkdownContent = (value: string): string =>
  value
    .split(/(```[\s\S]*?```)/g)
    .map(part => (part.startsWith('```') ? part : normalizeMarkdownTextSegment(part)))
    .join('');

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (!content) return null;

  const lines = normalizeMarkdownContent(content).split('\n');

  return (
    <div className="space-y-3.5 text-left text-sm text-slate-700 leading-relaxed font-normal select-none">
      {parseMarkdown(lines)}
    </div>
  );
};

// Recursive state-machine parser for Markdown block elements
const parseMarkdown = (lines: string[]): React.ReactNode[] => {
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Code Block
    if (trimmed.startsWith('```')) {
      const codeLines: string[] = [];
      const lang = trimmed.slice(3).trim();
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre 
          key={`code-${i}`} 
          className="bg-slate-900 text-slate-100 p-4 rounded-2xl font-mono text-xs my-4 overflow-x-auto border border-slate-800 shadow-sm leading-relaxed"
        >
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      continue;
    }

    // 2. Blockquote Group (Collects consecutive quote lines)
    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('>') || lines[i].trim() === '')) {
        const qLine = lines[i].trim();
        if (qLine.startsWith('>')) {
          // Remove the leading '>' and up to one space after it
          let contentPart = qLine.slice(1);
          if (contentPart.startsWith(' ')) {
            contentPart = contentPart.slice(1);
          }
          quoteLines.push(contentPart);
        } else {
          // It's an empty line inside a blockquote
          quoteLines.push('');
        }
        i++;
      }
      
      elements.push(
        <blockquote 
          key={`quote-${i}`} 
          className="border-l-4 border-blue-500 bg-slate-50/70 py-3 px-5 my-4 italic text-slate-600 rounded-r-2xl space-y-2 shadow-sm"
        >
          {parseMarkdown(quoteLines)}
        </blockquote>
      );
      continue;
    }

    // 3. Bullet List Group (UL)
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('* ') || lines[i].trim().startsWith('- '))) {
        const itemLine = lines[i].trim();
        const content = itemLine.slice(2);
        listItems.push(
          <li key={`li-ul-${i}-${listItems.length}`} className="leading-relaxed pl-1">
            {parseInline(content)}
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-1.5 my-3 text-sm text-slate-700">
          {listItems}
        </ul>
      );
      continue;
    }

    // 4. Numbered List Group (OL)
    if (trimmed.match(/^(\d+)\.\s(.*)/)) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && lines[i].trim().match(/^(\d+)\.\s(.*)/)) {
        const itemLine = lines[i].trim();
        const match = itemLine.match(/^(\d+)\.\s(.*)/)!;
        const content = match[2];
        listItems.push(
          <li key={`li-ol-${i}-${listItems.length}`} className="leading-relaxed pl-1" style={{ listStyleType: 'decimal' }}>
            {parseInline(content)}
          </li>
        );
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 space-y-1.5 my-3 text-sm text-slate-700">
          {listItems}
        </ol>
      );
      continue;
    }

    // 5. Tables (Starts and ends with |)
    if (trimmed.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      
      if (tableLines.length >= 2) {
        const headerLine = tableLines[0];
        const separatorLine = tableLines[1];
        const bodyLines = tableLines.slice(2);
        
        const parseRow = (rowText: string) => {
          const cells = rowText.split('|').slice(1, -1);
          return cells.map(c => c.trim());
        };
        
        const headers = parseRow(headerLine);
        const rows = bodyLines.map(line => parseRow(line));
        
        elements.push(
          <div key={`table-${i}`} className="my-4 overflow-x-auto shadow-sm border border-slate-200 rounded-2xl bg-white">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50/80">
                <tr>
                  {headers.map((h, hIdx) => (
                    <th 
                      key={hIdx} 
                      className="px-5 py-3 text-left font-bold text-slate-700 uppercase tracking-wider text-xs border-b border-slate-200"
                    >
                      {parseInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/55 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-5 py-2.5 text-slate-600 leading-relaxed">
                        {parseInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // 6. Horizontal Rule
    if (trimmed === '---') {
      elements.push(<hr key={`hr-${i}`} className="border-t border-slate-200 my-5" />);
      i++;
      continue;
    }

    // 7. Headings
    if (trimmed.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${i}`} className="font-bold text-xl md:text-2xl text-slate-900 pt-4 pb-2 border-b border-slate-100 mb-3 tracking-tight">
          {parseInline(trimmed.slice(2))}
        </h1>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${i}`} className="font-bold text-lg md:text-xl text-slate-800 pt-4 pb-1.5 mt-4 tracking-tight">
          {parseInline(trimmed.slice(3))}
        </h2>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${i}`} className="font-bold text-base text-slate-800 pt-3 pb-1 mt-3 tracking-tight">
          {parseInline(trimmed.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // 8. Empty line
    if (!trimmed) {
      elements.push(<div key={`empty-${i}`} className="h-2" />);
      i++;
      continue;
    }

    // 9. Regular Paragraph
    elements.push(
      <p key={`p-${i}`} className="text-sm text-slate-700 leading-relaxed py-0.5">
        {parseInline(line)}
      </p>
    );
    i++;
  }

  return elements;
};

// Parses inline elements: math, bold (**bold**), italic (*italic*), and code (`code`)
const parseInline = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  let currentIdx = 0;
  
  const regex = /(\uE000[^\uE001]*\uE001|\*\*[^*]+?\*\*|`[^`]+?`|\*[^*\s][^*]*?\*)/g;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    const matchStr = match[0];
    const matchIdx = match.index;
    
    // Add plain text before match
    if (matchIdx > currentIdx) {
      parts.push(text.slice(currentIdx, matchIdx));
    }
    
    if (matchStr.startsWith(MATH_START) && matchStr.endsWith(MATH_END)) {
      parts.push(
        <span
          key={matchIdx}
          className="inline-block align-baseline rounded-md border border-blue-100 bg-blue-50 px-1.5 py-0.5 font-mono text-[0.95em] font-semibold leading-normal text-blue-950"
        >
          {matchStr.slice(1, -1)}
        </span>
      );
    } else if (matchStr.startsWith('**') && matchStr.endsWith('**')) {
      parts.push(
        <strong key={matchIdx} className="font-bold text-slate-900">
          {parseInline(matchStr.slice(2, -2))}
        </strong>
      );
    } else if (matchStr.startsWith('*') && matchStr.endsWith('*')) {
      parts.push(
        <em key={matchIdx} className="italic text-slate-800">
          {matchStr.slice(1, -1)}
        </em>
      );
    } else if (matchStr.startsWith('`') && matchStr.endsWith('`')) {
      parts.push(
        <code 
          key={matchIdx} 
          className="bg-slate-100 text-rose-600 px-1.5 py-0.5 rounded-lg text-xs font-mono border border-slate-200"
        >
          {matchStr.slice(1, -1)}
        </code>
      );
    }
    
    currentIdx = regex.lastIndex;
  }
  
  if (currentIdx < text.length) {
    parts.push(text.slice(currentIdx));
  }
  
  return parts.length > 0 ? <>{parts}</> : text;
};

export default MarkdownRenderer;
