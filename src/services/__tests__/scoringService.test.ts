import { describe, it, expect } from 'vitest';
import { scoreQuestion, calculateTestResult } from '../scoringService';
import { Question, QuestionType, SubjectId } from '../../types';

describe('scoringService', () => {
  describe('scoreQuestion - SINGLE choice', () => {
    const singleQ: Question = {
      id: 'q1',
      subjectId: SubjectId.ENGLISH,
      type: QuestionType.SINGLE,
      text: 'Sample single question',
      options: [
        { id: 'optA', text: 'Option A' },
        { id: 'optB', text: 'Option B' },
      ],
      correctOptionIds: ['optA'],
    };

    it('returns 1 point for exact correct answer', () => {
      const res = scoreQuestion(singleQ, ['optA']);
      expect(res).toEqual({ score: 1, max: 1, correct: true });
    });

    it('returns 0 points for incorrect answer', () => {
      const res = scoreQuestion(singleQ, ['optB']);
      expect(res).toEqual({ score: 0, max: 1, correct: false });
    });

    it('returns 0 points when no answer is selected', () => {
      const res = scoreQuestion(singleQ, []);
      expect(res).toEqual({ score: 0, max: 1, correct: false });
    });
  });

  describe('scoreQuestion - MULTIPLE choice', () => {
    const multiQ: Question = {
      id: 'q2',
      subjectId: SubjectId.ALGO,
      type: QuestionType.MULTIPLE,
      text: 'Sample multiple question',
      options: [
        { id: 'optA', text: 'Option A' },
        { id: 'optB', text: 'Option B' },
        { id: 'optC', text: 'Option C' },
        { id: 'optD', text: 'Option D' },
      ],
      correctOptionIds: ['optA', 'optB', 'optC'], // 3 correct answers
    };

    it('returns 2 points and correct=true for 0 mistakes (all correct selected)', () => {
      const res = scoreQuestion(multiQ, ['optA', 'optB', 'optC']);
      expect(res).toEqual({ score: 2, max: 2, correct: true });
    });

    it('returns 1 point and correct=false for 1 mistake (1 missed option)', () => {
      const res = scoreQuestion(multiQ, ['optA', 'optB']);
      expect(res).toEqual({ score: 1, max: 2, correct: false });
    });

    it('returns 1 point and correct=false for 1 mistake (1 extra incorrect option)', () => {
      const res = scoreQuestion(multiQ, ['optA', 'optB', 'optC', 'optD']);
      expect(res).toEqual({ score: 1, max: 2, correct: false });
    });

    it('returns 0 points for 2 mistakes (2 missed options)', () => {
      const res = scoreQuestion(multiQ, ['optA']);
      expect(res).toEqual({ score: 0, max: 2, correct: false });
    });

    it('returns 0 points when empty selection', () => {
      const res = scoreQuestion(multiQ, []);
      expect(res).toEqual({ score: 0, max: 2, correct: false });
    });
  });

  describe('calculateTestResult', () => {
    const questions: Question[] = [
      {
        id: 'q1',
        subjectId: SubjectId.ENGLISH,
        type: QuestionType.SINGLE,
        text: 'Q1',
        options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }],
        correctOptionIds: ['a'],
      },
      {
        id: 'q2',
        subjectId: SubjectId.ENGLISH,
        type: QuestionType.MULTIPLE,
        text: 'Q2',
        options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }],
        correctOptionIds: ['a', 'b'],
      },
      {
        id: 'q3',
        subjectId: SubjectId.TGO,
        type: QuestionType.SINGLE,
        text: 'Q3',
        options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }],
        correctOptionIds: ['a'],
      },
    ];

    it('correctly sums scores and splits by subjectId', () => {
      const userAnswers = {
        q1: ['a'], // 1/1 correct
        q2: ['a'], // 1 missed option -> 1/2 score
        q3: ['b'], // 0/1 wrong
      };

      const result = calculateTestResult(questions, userAnswers);

      expect(result.totalQuestions).toBe(3);
      expect(result.totalScore).toBe(2); // 1 + 1 + 0
      expect(result.maxScore).toBe(4);   // 1 + 2 + 1
      expect(result.correctCount).toBe(1); // Only q1 was 100% correct

      expect(result.subjectScores[SubjectId.ENGLISH]).toEqual({ score: 2, max: 3 });
      expect(result.subjectScores[SubjectId.TGO]).toEqual({ score: 0, max: 1 });
    });
  });
});
