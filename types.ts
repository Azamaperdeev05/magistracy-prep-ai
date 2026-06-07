export enum SubjectId {
  ENGLISH = 'english',
  TGO = 'tgo',
  ALGO = 'algo',
  DB = 'db',
  M001_PEDAGOGIKA = 'm001_pedagogika',
  M001_PSYCHOLOGY = 'm001_psychology',
  M002_PEDAGOGIKA = 'm002_pedagogika',
  M002_SPEECH_DEV = 'm002_speech_dev'
}

export enum QuestionType {
  SINGLE = 'SINGLE',
  MULTIPLE = 'MULTIPLE',
  AUDIO = 'AUDIO'
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  subjectId: SubjectId;
  text: string;
  codeSnippet?: string; // For C++ or SQL code blocks
  audioUrl?: string;    // URL to audio file for listening questions
  context?: string;     // Additional context (e.g. "Listen to the dialogue...")
  readingPassage?: string; // Reading passage text for comprehension questions
  chartData?: ChartData; // Infographic data for visual questions
  options: Option[];
  correctOptionIds: string[]; // Array for multiple answers
  type: QuestionType;
  topic: string;
  difficulty?: Difficulty;
  languageLevel?: string; // A1/A2/B1/B2/C for CEFR levels
  hint?: string; // Explanation for wrong answers
}

// Chart Data Types for Infographics
export type ChartData = 
  | { type: 'bar'; data: number[]; labels: string[]; colors?: string[]; title?: string }
  | { type: 'pie'; data: number[]; labels: string[]; colors?: string[] }
  | { type: 'line'; data: number[]; labels: string[]; color?: string }
  | { type: 'table'; headers: string[]; rows: (string | number)[][] }
  | { type: 'comparison'; columnA: string; columnB: string }
  | { type: 'comparison_table'; title?: string; columnA: { header: string; content: string }; columnB: { header: string; content: string }; question?: string }
  | { type: 'circle'; radius: number; label?: string; showCenter?: boolean }
  | { type: 'math'; expressions: { label: string; value: string }[]; question?: string }
  | {
      type: 'tgo_comparison_grid';
      title?: string;
      columns: {
        header: string;
        lines?: string[];
        visual?: TgoVisualData;
      }[];
      footer?: string;
    }
  | { type: 'tgo_grouped_bar'; title?: string; yMin?: number; yMax?: number; categories: string[]; series: { name: string; color: string; values: number[] }[] }
  | { type: 'tgo_step_perimeter'; widthLabel: string; heightLabel: string }
  | { type: 'tgo_venn'; leftLabel: string; rightLabel: string; leftTotal: number; rightTotal: number; intersection: number; outside?: number }
  | { type: 'tgo_shaded_rectangle'; widthParts: { label: string; value: number }[]; heightParts: { label: string; value: number }[] }
  | { type: 'tgo_triangle_sides'; leftSide: string; rightSide: string; baseLabel: string }
  | { type: 'tgo_inscribed_square'; radiusLabel: string }
  | { type: 'tgo_square_mosaic'; unitAreaLabel: string };

export type TgoVisualData =
  | { type: 'triangle_bc'; totalBase: number; rightBase: number; leftHeight: number }
  | { type: 'mini_step'; widthLabel: string; heightLabel: string }
  | { type: 'mini_expression'; lines: string[] };


export interface SubjectConfig {
  id: SubjectId;
  name: string;
  totalQuestions: number;
  maxScore: number;
  topics: string[];
  description: string;
  isProfile?: boolean;
}

// New Interface for Database Definitions
export interface SubjectDefinition {
  id: SubjectId;
  name: string;
  promptContext: string;
  questionTypeInstruction: string;
  defaultQuestionType: QuestionType;
  subCategories: {
    name: string;
    description: string;
    examples?: string[];
  }[];
}

export interface UserAnswers {
  [questionId: string]: string[]; // Array of selected option IDs
}

export interface TestResult {
  totalScore: number;
  maxScore: number;
  subjectScores: Record<SubjectId, { score: number; max: number }>;
  correctCount: number;
  totalQuestions: number;
}
