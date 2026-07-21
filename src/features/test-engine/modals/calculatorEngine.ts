export type CalculatorOperator = '+' | '-' | '×' | '÷';
export type CalculatorFunction = '1/x' | 'x²' | '√' | '%' | '±';

type InternalOperator = '+' | '-' | '*' | '/';
type Token = number | InternalOperator;

const OPERATOR_MAP: Record<string, InternalOperator> = {
  '+': '+',
  '-': '-',
  '*': '*',
  '/': '/',
  '×': '*',
  '÷': '/',
};

export function formatCalculatorNumber(value: number): string {
  if (!Number.isFinite(value)) {
    throw new Error('Invalid calculator result');
  }

  const normalized = Math.abs(value) < 1e-10 ? 0 : value;
  if (Number.isInteger(normalized)) {
    return String(normalized);
  }

  return String(Number(normalized.toFixed(10)));
}

export function replaceTrailingOperator(expression: string, operator: CalculatorOperator): string {
  if (!expression.trim()) {
    return `0 ${operator} `;
  }

  return expression.replace(/[+\-×÷]\s*$/, `${operator} `);
}

export function evaluateExpression(expression: string): number {
  const tokens = tokenizeExpression(expression);

  if (tokens.length === 0 || typeof tokens[0] !== 'number') {
    throw new Error('Invalid expression');
  }

  const values: number[] = [];
  const additiveOperators: InternalOperator[] = [];
  let current = tokens[0];

  for (let index = 1; index < tokens.length; index += 2) {
    const operator = tokens[index];
    const next = tokens[index + 1];

    if (typeof operator !== 'string' || typeof next !== 'number') {
      throw new Error('Invalid expression');
    }

    if (operator === '*') {
      current *= next;
    } else if (operator === '/') {
      if (next === 0) {
        throw new Error('Division by zero');
      }
      current /= next;
    } else {
      values.push(current);
      additiveOperators.push(operator);
      current = next;
    }
  }

  values.push(current);
  let result = values[0];

  for (let index = 0; index < additiveOperators.length; index += 1) {
    result = additiveOperators[index] === '+'
      ? result + values[index + 1]
      : result - values[index + 1];
  }

  if (!Number.isFinite(result)) {
    throw new Error('Invalid calculator result');
  }

  return result;
}

export function applyCalculatorFunction(
  display: string,
  type: CalculatorFunction,
  expression = ''
): string {
  const value = parseDisplayValue(display);
  let result: number;

  switch (type) {
    case '1/x':
      if (value === 0) {
        throw new Error('Division by zero');
      }
      result = 1 / value;
      break;
    case 'x²':
      result = value * value;
      break;
    case '√':
      if (value < 0) {
        throw new Error('Square root of negative number');
      }
      result = Math.sqrt(value);
      break;
    case '%':
      result = resolvePercentValue(value, expression);
      break;
    case '±':
      result = -value;
      break;
    default:
      throw new Error('Unsupported calculator function');
  }

  return formatCalculatorNumber(result);
}

function tokenizeExpression(expression: string): Token[] {
  const source = expression.replace(/\s+/g, '').replace(/,/g, '.');
  const tokens: Token[] = [];
  let index = 0;

  while (index < source.length) {
    const char = source[index];
    const previous = tokens[tokens.length - 1];
    const expectsNumber = tokens.length === 0 || typeof previous === 'string';

    if ((char === '+' || char === '-') && expectsNumber) {
      const sign = char === '-' ? -1 : 1;
      const parsed = readNumber(source, index + 1);
      tokens.push(sign * parsed.value);
      index = parsed.nextIndex;
      continue;
    }

    if (isDigit(char) || char === '.') {
      const parsed = readNumber(source, index);
      tokens.push(parsed.value);
      index = parsed.nextIndex;
      continue;
    }

    if (OPERATOR_MAP[char]) {
      if (expectsNumber || index === source.length - 1) {
        throw new Error('Invalid expression');
      }
      tokens.push(OPERATOR_MAP[char]);
      index += 1;
      continue;
    }

    throw new Error('Invalid expression');
  }

  return tokens;
}

function readNumber(source: string, startIndex: number): { value: number; nextIndex: number } {
  let index = startIndex;
  let dotCount = 0;
  let digitCount = 0;

  while (index < source.length) {
    const char = source[index];

    if (char === '.') {
      dotCount += 1;
      if (dotCount > 1) {
        throw new Error('Invalid number');
      }
      index += 1;
      continue;
    }

    if (!isDigit(char)) {
      break;
    }

    digitCount += 1;
    index += 1;
  }

  if (digitCount === 0) {
    throw new Error('Invalid number');
  }

  const value = Number(source.slice(startIndex, index));
  if (!Number.isFinite(value)) {
    throw new Error('Invalid number');
  }

  return { value, nextIndex: index };
}

function parseDisplayValue(display: string): number {
  const value = Number(display.replace(',', '.'));

  if (!Number.isFinite(value)) {
    throw new Error('Invalid display value');
  }

  return value;
}

function resolvePercentValue(value: number, expression: string): number {
  const trailingOperator = expression.match(/([+\-×÷])\s*$/)?.[1] as CalculatorOperator | undefined;

  if ((trailingOperator === '+' || trailingOperator === '-') && expression.trim()) {
    const baseExpression = expression.replace(/[+\-×÷]\s*$/, '').trim();

    if (baseExpression) {
      return evaluateExpression(baseExpression) * value / 100;
    }
  }

  return value / 100;
}

function isDigit(value: string): boolean {
  return value >= '0' && value <= '9';
}
