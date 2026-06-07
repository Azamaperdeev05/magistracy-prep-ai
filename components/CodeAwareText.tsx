import React from 'react';

interface CodeAwareTextProps {
  text: string;
  className?: string;
  codeClassName?: string;
}

const CODE_TOKEN_PATTERN =
  /(`[^`]+`|"(?=[A-Z_][A-Z0-9_]*(?:\s+[A-Z_][A-Z0-9_]*)*")[^"]+"|\b(?:FOREIGN KEY|PRIMARY KEY|NOT NULL|GROUP BY|ORDER BY|CHECK|UNIQUE|DEFAULT|CONSTRAINT|REFERENCES|SELECT|FROM|WHERE|HAVING|JOIN|CREATE|ALTER|DROP|INSERT|UPDATE|DELETE|EXISTS|AVG|COUNT|SUM|MIN|MAX|NULL|TRUE|FALSE|int|double|float|char|bool|string|void|return|for|while|if|else)\b)/g;

const FULL_CODE_PATTERN =
  /\b(?:CONSTRAINT|SELECT|CREATE|ALTER|DROP|INSERT|UPDATE|DELETE|PRIMARY KEY|FOREIGN KEY|CHECK|UNIQUE|DEFAULT|REFERENCES|EXISTS|AVG|COUNT|SUM|MIN|MAX|int|double|float|char|bool|string|void|return|for|while|if|else)\b|[{};]|(?:==|!=|>=|<=|=>|->)/;

const baseCodeClass =
  'font-mono text-[0.94em] leading-relaxed text-slate-900 bg-slate-50 border border-slate-200 rounded-md px-1.5 py-0.5';

const fullCodeClass =
  'inline-block max-w-full whitespace-pre-wrap break-words font-mono text-[0.95em] leading-relaxed text-slate-900 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 shadow-sm';

const unwrapCodeToken = (value: string): string => {
  if ((value.startsWith('`') && value.endsWith('`')) || (value.startsWith('"') && value.endsWith('"'))) {
    return value.slice(1, -1);
  }

  return value;
};

const isFullCodeText = (text: string): boolean => {
  const trimmed = text.trim();
  if (!trimmed) return false;

  const hasCodeSignal = FULL_CODE_PATTERN.test(trimmed);
  const hasSentenceSignal = /[а-яәіңғүұқөһ]/i.test(trimmed) && trimmed.split(/\s+/).length > 5;

  return hasCodeSignal && !hasSentenceSignal;
};

const CodeAwareText: React.FC<CodeAwareTextProps> = ({ text, className = '', codeClassName }) => {
  if (!text) return null;

  const codeClass = codeClassName || baseCodeClass;

  if (isFullCodeText(text)) {
    return <code className={`${fullCodeClass} ${className}`.trim()}>{text}</code>;
  }

  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  let match: RegExpExecArray | null;

  CODE_TOKEN_PATTERN.lastIndex = 0;

  while ((match = CODE_TOKEN_PATTERN.exec(text)) !== null) {
    if (match.index > currentIndex) {
      parts.push(text.slice(currentIndex, match.index));
    }

    parts.push(
      <code key={`${match.index}-${match[0]}`} className={codeClass}>
        {unwrapCodeToken(match[0])}
      </code>
    );

    currentIndex = CODE_TOKEN_PATTERN.lastIndex;
  }

  if (currentIndex < text.length) {
    parts.push(text.slice(currentIndex));
  }

  return <span className={className}>{parts.length > 0 ? parts : text}</span>;
};

export default CodeAwareText;
