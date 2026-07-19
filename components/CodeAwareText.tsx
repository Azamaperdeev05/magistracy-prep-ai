import React from 'react';

interface CodeAwareTextProps {
  text: string;
  className?: string;
  codeClassName?: string;
  subjectId?: string;
  forceCode?: boolean;
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

const cleanTextArtifacts = (str: string): string => {
  if (!str) return str;
  let cleaned = str.trim();

  // Strip wrapping backticks if they enclose the whole option or text
  if (cleaned.startsWith('`') && cleaned.endsWith('`') && cleaned.length > 2) {
    cleaned = cleaned.slice(1, -1).trim();
  }

  return cleaned;
};

const isITSubject = (subjectId?: string): boolean => {
  if (!subjectId) return false;
  const s = subjectId.toLowerCase();
  return (
    s.includes('algo') ||
    s.includes('db') ||
    s.includes('code') ||
    s.includes('programming') ||
    s.includes('m002') ||
    s.includes('it')
  );
};

const isFullCodeText = (text: string): boolean => {
  const trimmed = text.trim();
  if (!trimmed) return false;

  const hasCodeSignal = FULL_CODE_PATTERN.test(trimmed);
  const hasSentenceSignal = /[а-яәіңғүұқөһ]/i.test(trimmed) && trimmed.split(/\s+/).length > 5;

  return hasCodeSignal && !hasSentenceSignal;
};

const CodeAwareText: React.FC<CodeAwareTextProps> = ({
  text,
  className = '',
  codeClassName,
  subjectId,
  forceCode = false,
}) => {
  if (!text) return null;

  const processedText = cleanTextArtifacts(text);

  // If this is not an IT / Programming subject and code is not forced,
  // do NOT apply code keyword highlighting (e.g. for "for", "if", "select" in English tests)
  if (!forceCode && !isITSubject(subjectId)) {
    return <span className={className}>{processedText}</span>;
  }

  const codeClass = codeClassName || baseCodeClass;

  if (isFullCodeText(processedText)) {
    return <code className={`${fullCodeClass} ${className}`.trim()}>{processedText}</code>;
  }

  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  let match: RegExpExecArray | null;

  CODE_TOKEN_PATTERN.lastIndex = 0;

  while ((match = CODE_TOKEN_PATTERN.exec(processedText)) !== null) {
    if (match.index > currentIndex) {
      parts.push(processedText.slice(currentIndex, match.index));
    }

    parts.push(
      <code key={`${match.index}-${match[0]}`} className={codeClass}>
        {unwrapCodeToken(match[0])}
      </code>
    );

    currentIndex = CODE_TOKEN_PATTERN.lastIndex;
  }

  if (currentIndex < processedText.length) {
    parts.push(processedText.slice(currentIndex));
  }

  return <span className={className}>{parts.length > 0 ? parts : processedText}</span>;
};

export default CodeAwareText;
