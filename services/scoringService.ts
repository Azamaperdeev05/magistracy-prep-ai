import { Question, QuestionType, SubjectId, TestResult, UserAnswers } from '../types';

export function scoreQuestion(question: Question, selectedIds: string[]): { score: number; max: number; correct: boolean } {
  const correctIds = question.correctOptionIds || [];

  if (question.type === QuestionType.MULTIPLE) {
    const max = 2;
    if (selectedIds.length === 0) return { score: 0, max, correct: false };

    const correctSet = new Set(correctIds);
    const selectedSet = new Set(selectedIds);
    const missed = correctIds.filter(id => !selectedSet.has(id)).length;
    const extra = selectedIds.filter(id => !correctSet.has(id)).length;
    const mistakes = missed + extra;

    if (mistakes === 0) return { score: 2, max, correct: true };
    if (mistakes === 1) return { score: 1, max, correct: false };
    return { score: 0, max, correct: false };
  }

  const isCorrect = selectedIds.length === 1 && correctIds.includes(selectedIds[0]);
  return { score: isCorrect ? 1 : 0, max: 1, correct: isCorrect };
}

export function calculateTestResult(questions: Question[], answers: UserAnswers): TestResult {
  const subjectScores: TestResult['subjectScores'] = {
    [SubjectId.ENGLISH]: { score: 0, max: 0 },
    [SubjectId.TGO]: { score: 0, max: 0 },
    [SubjectId.ALGO]: { score: 0, max: 0 },
    [SubjectId.DB]: { score: 0, max: 0 },
    [SubjectId.M001_PEDAGOGIKA]: { score: 0, max: 0 },
    [SubjectId.M001_PSYCHOLOGY]: { score: 0, max: 0 },
    [SubjectId.M002_PEDAGOGIKA]: { score: 0, max: 0 },
    [SubjectId.M002_SPEECH_DEV]: { score: 0, max: 0 },
  };

  let totalScore = 0;
  let maxScore = 0;
  let correctCount = 0;

  questions.forEach(question => {
    const result = scoreQuestion(question, answers[question.id] || []);
    totalScore += result.score;
    maxScore += result.max;
    if (result.correct) correctCount += 1;

    if (subjectScores[question.subjectId]) {
      subjectScores[question.subjectId].score += result.score;
      subjectScores[question.subjectId].max += result.max;
    }
  });

  return {
    totalScore,
    maxScore,
    subjectScores,
    correctCount,
    totalQuestions: questions.length,
  };
}
