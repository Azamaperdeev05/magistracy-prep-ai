import { Question, SubjectId } from "../types";
import { STATIC_QUESTIONS } from "../data/questions";
import { SYLLABUS_CONTENT } from "../data/syllabus";

const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const cloneQuestion = (question: Question): Question => ({
  ...question,
  options: shuffle(question.options),
});

const pickRandom = (questions: Question[], count: number): Question[] =>
  shuffle(questions).slice(0, count).map(cloneQuestion);

const generateEnglishQuestions = (count: number): Question[] => {
  const englishQuestions = STATIC_QUESTIONS.filter(q => q.subjectId === SubjectId.ENGLISH);
  const listening = englishQuestions.filter(q => q.audioUrl || q.topic?.toLowerCase().includes('listening'));
  const grammar = englishQuestions.filter(q => {
    const topic = q.topic?.toLowerCase() || '';
    return !topic.includes('listening') && !topic.includes('audio') && !topic.includes('reading');
  });
  const reading = englishQuestions.filter(q => q.readingPassage && q.topic?.toLowerCase().includes('reading'));

  const byAudio = new Map<string, Question[]>();
  listening.forEach(q => {
    const key = q.audioUrl || q.readingPassage || q.topic || 'listening';
    byAudio.set(key, [...(byAudio.get(key) || []), q]);
  });

  const byPassage = new Map<string, Question[]>();
  reading.forEach(q => {
    const key = q.readingPassage || q.topic || 'reading';
    byPassage.set(key, [...(byPassage.get(key) || []), q]);
  });

  const selectedListening = shuffle([...byAudio.values()].filter(group => group.length >= 8))
    .slice(0, 2)
    .flatMap(group => shuffle(group).slice(0, 8));

  const selectedReading = shuffle([...byPassage.values()].filter(group => group.length >= 8))
    .slice(0, 2)
    .flatMap(group => shuffle(group).slice(0, 8));

  const selectedGrammar = pickRandom(grammar, 18);
  const selectedIds = new Set([...selectedListening, ...selectedGrammar, ...selectedReading].map(q => q.id));
  const selected = [...selectedListening, ...selectedGrammar, ...selectedReading].map(cloneQuestion);

  if (selected.length < count) {
    const filler = pickRandom(
      englishQuestions.filter(q => !selectedIds.has(q.id)),
      count - selected.length
    );
    selected.push(...filler);
  }

  return selected.slice(0, count);
};

const generateTgoQuestions = (count: number): Question[] => {
  const tgoQuestions = STATIC_QUESTIONS.filter(q => q.subjectId === SubjectId.TGO);
  const analyticalQuestions = tgoQuestions.filter(q => q.topic === 'Мәтінді талдау');
  const criticalQuestions = tgoQuestions.filter(q => q.topic !== 'Мәтінді талдау');
  const analyticalCount = Math.floor(count / 2);
  const criticalCount = count - analyticalCount;
  const visualQuestions = criticalQuestions.filter(q => q.chartData);
  const visualCount = Math.min(5, visualQuestions.length, Math.max(0, Math.floor(criticalCount / 3)));
  const selectedVisual = pickRandom(visualQuestions, visualCount);
  const selectedCriticalIds = new Set(selectedVisual.map(q => q.id));
  const selectedCritical = [
    ...selectedVisual,
    ...pickRandom(
      criticalQuestions.filter(q => !selectedCriticalIds.has(q.id)),
      criticalCount - selectedVisual.length
    )
  ];
  const selectedAnalytical = pickRandom(analyticalQuestions, analyticalCount);
  // Shuffle critical and analytical separately to prevent mixing them
  const shuffledCritical = shuffle(selectedCritical);
  const shuffledAnalytical = shuffle(selectedAnalytical);

  return [...shuffledCritical, ...shuffledAnalytical].slice(0, count);
};

const DB_TOPIC_DISTRIBUTION = [
  { topics: ['Реляциялық модель'], count: 2 },
  { topics: ['Тұтастық'], count: 2 },
  { topics: ['Архитектура', 'Транзакциялар'], count: 2 },
  { topics: ['ER-модельдеу'], count: 1 },
  { topics: ['Кілттер'], count: 2 },
  { topics: ['SQL'], count: 8 },
  { topics: ['Нормализация'], count: 3 },
];

const generateDbQuestions = (count: number): Question[] => {
  const dbQuestions = STATIC_QUESTIONS.filter(q => q.subjectId === SubjectId.DB);
  const slots = DB_TOPIC_DISTRIBUTION.flatMap(group => Array(group.count).fill(group));
  const selected: Question[] = [];
  const selectedIds = new Set<string>();

  Array.from({ length: count }, (_, index) => slots[index % slots.length]).forEach(group => {
    const pool = dbQuestions.filter(q => group.topics.includes(q.topic) && !selectedIds.has(q.id));
    const [question] = pickRandom(pool, 1);
    if (question) {
      selected.push(question);
      selectedIds.add(question.id);
    }
  });

  if (selected.length < count) {
    selected.push(
      ...pickRandom(
        dbQuestions.filter(q => !selectedIds.has(q.id)),
        count - selected.length
      )
    );
  }

  return shuffle(selected).slice(0, count);
};

export const generateQuestionsForSubject = async (
  subjectId: SubjectId, 
  count: number = 5 
): Promise<Question[]> => {
  if (subjectId === SubjectId.ENGLISH) {
    return generateEnglishQuestions(count);
  }

  if (subjectId === SubjectId.TGO) {
    return generateTgoQuestions(count);
  }

  if (subjectId === SubjectId.DB) {
    return generateDbQuestions(count);
  }

  const subjectQuestions = STATIC_QUESTIONS.filter(q => q.subjectId === subjectId);
  return pickRandom(subjectQuestions, count);
};

export const getSyllabus = async (subjectId: string): Promise<string> => {
  return SYLLABUS_CONTENT[subjectId] || "Мәлімет табылмады.";
};

export interface AiQuestionContext {
  subjectId?: string;
  topic?: string;
  questionType?: string;
  context?: string;
  readingPassage?: string;
  codeSnippet?: string;
  chartData?: Question['chartData'];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// LaTeX and Math Syntax normalizer logic ported from backend
const SUPERSCRIPT_MAP: Record<string, string> = {
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  "+": "⁺", "-": "⁻", "=": "⁼", "n": "ⁿ"
};

function normalizeMathSyntax(value: string, compact: boolean): string {
  if (compact) {
    value = value.trim();
  }
  value = value.replace(/\\text\s*\{([^{}]*)\}/g, "$1");
  value = value.replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, "($1 / $2)");
  value = value.replace(/\\sqrt\s*\{([^{}]+)\}/g, "√($1)");

  const replacements: Record<string, string> = {
    "\\\\times": "×",
    "\\\\cdot": "·",
    "\\\\div": "÷",
    "\\\\geq": "≥",
    "\\\\ge": "≥",
    "\\\\leq": "≤",
    "\\\\le": "≤",
    "\\\\neq": "≠",
    "\\\\ne": "≠",
    "\\\\approx": "≈",
    "\\\\pm": "±",
    "\\\\infty": "∞",
    "\\\\emptyset": "∅",
    "\\\\varnothing": "∅",
    "\\\\notin": "∉",
    "\\\\in": "∈",
    "\\\\Rightarrow": "⇒",
    "\\\\implies": "⇒",
    "\\\\left": "",
    "\\\\right": "",
    "\\\\,": " ",
    "\\\\;": " ",
    "\\\\:": " "
  };

  for (const [source, target] of Object.entries(replacements)) {
    const regex = new RegExp(source, "g");
    value = value.replace(regex, target);
  }

  value = value.replace(/([A-Za-zА-Яа-яӘәІіҢңҒғҮүҰұҚқӨөҺһ0-9)\]])\s*\^\s*\{?([0-9+\-=n-]+)\}?/g, (_, base, exponent) => {
    const translated = exponent.split("").map((char: string) => SUPERSCRIPT_MAP[char] || char).join("");
    return `${base}${translated}`;
  });

  if (compact) {
    value = value.replace(/_/g, "");
    value = value.replace(/[{}]/g, "");
    value = value.replace(/\\+/g, "");
    value = value.replace(/\s+/g, " ").trim();
  }

  return value;
}

function normalizeMathExpression(value: string): string {
  return normalizeMathSyntax(value, true);
}

function normalizeAiResponseSegment(value: string): string {
  value = value.replace(/\$\$([\s\S]*?)\$\$/g, (_, match) => normalizeMathExpression(match));
  value = value.replace(/\\\[([\s\S]*?)\\\]/g, (_, match) => normalizeMathExpression(match));
  value = value.replace(/\\\(([\s\S]*?)\\\)/g, (_, match) => normalizeMathExpression(match));
  value = value.replace(/\$([^$\n]{1,180})\$/g, (_, match) => normalizeMathExpression(match));
  value = normalizeMathSyntax(value, false);
  value = value.replace(/\$(?=[A-Za-zА-Яа-яӘәІіҢңҒғҮүҰұҚқӨөҺһ0-9({<>=+\-])/g, "");
  value = value.replace(/(?<=[A-Za-zА-Яа-яӘәІіҢңҒғҮүҰұҚқӨөҺһ0-9)}>])\$/g, "");
  return value;
}

function normalizeAiResponseText(value: string): string {
  if (!value) return value;
  const parts = value.split(/(```[\s\S]*?```)/g);
  return parts.map(part => part.startsWith("```") ? part : normalizeAiResponseSegment(part)).join("");
}

function buildQuestionContextForAi(ctx: AiQuestionContext): string {
  const parts: string[] = [];
  if (ctx.subjectId) parts.push(`Пән: ${ctx.subjectId}`);
  if (ctx.topic) parts.push(`Тақырып: ${ctx.topic}`);
  if (ctx.questionType) parts.push(`Сұрақ түрі: ${ctx.questionType}`);
  if (ctx.context) parts.push(`Қосымша шарт/контекст: ${ctx.context}`);
  if (ctx.readingPassage) parts.push(`Мәтін немесе оқу үзіндісі:\n${ctx.readingPassage}`);
  if (ctx.codeSnippet) parts.push(`Код/SQL үзіндісі:\n${ctx.codeSnippet}`);
  if (ctx.chartData) {
    parts.push(`График/кесте дерегі:\n${JSON.stringify(ctx.chartData, null, 2)}`);
  }
  return parts.join("\n\n");
}

async function callAiCompletions(systemPrompt: string, userPrompt: string, history: ChatMessage[] = []): Promise<string> {
  const dashscopeKey = process.env.DASHSCOPE_API_KEY || "";
  const dashscopeUrl = process.env.DASHSCOPE_API_URL || "";
  const geminiKey = process.env.GEMINI_API_KEY || "";

  // 1. Try DashScope (Qwen) first
  if (dashscopeKey) {
    const url = `${dashscopeUrl.replace(/\/$/, "")}/chat/completions`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${dashscopeKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "qwen3.5-omni-plus-2026-03-15",
        messages: [
          { role: "system", content: systemPrompt },
          ...history.map(h => ({ role: h.role, content: h.content })),
          { role: "user", content: userPrompt }
        ]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`AI Service error: ${err}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "";
  }

  // 2. Fallback to Google Gemini
  if (geminiKey) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`;
    
    // Map history to Gemini's user/model alternating format
    const contents: any[] = [];
    contents.push({
      role: "user",
      parts: [{ text: `${systemPrompt}\n\nБастапқы шарттар түсінікті болса, сұхбатты бастайық.` }]
    });
    contents.push({
      role: "model",
      parts: [{ text: "Түсінікті. Сұрақтарыңызды қойыңыз, мен оларға қазақ тілінде нақты жауап беремін." }]
    });

    history.forEach(h => {
      contents.push({
        role: h.role === "assistant" ? "model" : "user",
        parts: [{ text: h.content }]
      });
    });

    contents.push({
      role: "user",
      parts: [{ text: userPrompt }]
    });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ contents })
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`Gemini Service error: ${err}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  }

  throw new Error("AI API кілті бапталмаған. Жүйе әкімшісіне хабарласыңыз немесе баптауларды тексеріңіз.");
}

export async function getAiExplanation(
  questionText: string,
  options: string[],
  correctOptions: string[],
  userAnswer?: string[],
  questionContext: AiQuestionContext = {}
): Promise<string> {
  const extraContext = buildQuestionContextForAi(questionContext);

  const systemPrompt = "Сен Қазақстандағы магистратураға дайындық КТ пәндері бойынша жетекші оқытушы-нейрожелісің. Студентке сұрақты қазақ тілінде толық талдап бер. Сәлемдесу, өзін таныстыру, артық мотивациялық кіріспе жазба. Бірден талдауға кіріс.";
  
  let userPrompt = "";
  if (extraContext) {
    userPrompt += `${extraContext}\n\n`;
  }

  userPrompt += `Сұрақ: ${questionText}\nНұсқалар:\n`;
  options.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx);
    userPrompt += ` ${letter}) ${opt}\n`;
  });
  
  userPrompt += `\nДұрыс жауап(тар): ${correctOptions.join(", ")}\n`;
  if (userAnswer && userAnswer.length > 0) {
    userPrompt += `Студенттің таңдаған жауабы: ${userAnswer.join(", ")}\n`;
  }

  userPrompt += `
Түсіндірмеңіз келесі құрылымды сақтауы тиіс:
1. **Сұрақтың мәні:** сұрақ нақты нені тексеріп тұрғанын түсіндіріңіз.
2. **Дұрыс жауап логикасы:** дұрыс нұсқа(лар) неге сәйкес келетінін көрсетіңіз.
3. **Нұсқалар талдауы:** A, B, C... деп әр нұсқаны жеке талдап, қайсысы келеді, қайсысы келмейді және неге екенін айтыңыз.
4. **Таңдау стратегиясы:** студент ұқсас сұрақта дұрыс нұсқаны логикалық түрде қалай сүзуі керек екенін қысқа алгоритммен беріңіз.
ҚАТАҢ ТАЛАП: raw LaTeX қолданбаңыз. $x$, $$...$$, \\(x\\), \\frac, \\times, \\leq сияқты белгілерді мүлдем жазбаңыз.
Формулаларды тек Unicode және қарапайым мәтінмен жазыңыз: x, x², 0 < x < 1, A > B, ×, ÷, ≥, ≤, a / b.
Жауапты қазақ тілінде, қысқа, нақты, құрылымды және Markdown форматында жазыңыз.`;

  const responseText = await callAiCompletions(systemPrompt, userPrompt);
  return normalizeAiResponseText(responseText);
}

export async function askAiQuestion(
  questionText: string,
  options: string[],
  correctOptions: string[],
  userAnswer: string[] | undefined,
  userQuery: string,
  chatHistory: ChatMessage[] = [],
  questionContext: AiQuestionContext = {}
): Promise<string> {
  const extraContext = buildQuestionContextForAi(questionContext);

  const systemPrompt = `Сен студентке тест тапсыру (емтихан) кезінде көмектесетін білімді, сыпайы және көмекші қазақ тіліндегі оқытушы-нейрожелісің. Студент қазір тест тапсырып жатыр. Саған оның алдында тұрған сұрақ пен нұсқалар берілген.
Сұрақ: ${questionText}
Нұсқалар: ${options.map((o, i) => `${String.fromCharCode(65 + i)}) ${o}`).join(", ")}
Дұрыс жауап: ${correctOptions.join(", ")}
${userAnswer ? `Студенттің таңдаған жауабы: ${userAnswer.join(", ")}` : ""}
${extraContext ? `Қосымша контекст: ${extraContext}` : ""}

Студенттің сұрағына қазақ тілінде, сыпайы әрі түсінікті жауап бер.
ҚАТАҢ ТАЛАП: raw LaTeX қолданбаңыз ($x$, $$...$$, \\frac, \\geq т.б. белгілерді қолдануға тыйым салынады). Формулаларды тек Unicode және қарапайым мәтінмен жазыңыз. Жауапты Markdown форматында қайтарыңыз.`;

  const responseText = await callAiCompletions(systemPrompt, userQuery, chatHistory);
  return normalizeAiResponseText(responseText);
}
