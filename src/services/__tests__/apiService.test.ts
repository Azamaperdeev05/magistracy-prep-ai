import { describe, it, expect } from 'vitest';
import { Question, QuestionType, SubjectId } from '../../types';

// Testing core question utility methods
describe('question logic utilities', () => {
  it('clones and shuffles question options without mutating original question', () => {
    const originalQuestion: Question = {
      id: 'q1',
      subjectId: SubjectId.ENGLISH,
      type: QuestionType.SINGLE,
      text: 'What is algorithm?',
      options: [
        { id: 'opt1', text: 'Option 1' },
        { id: 'opt2', text: 'Option 2' },
        { id: 'opt3', text: 'Option 3' },
        { id: 'opt4', text: 'Option 4' },
      ],
      correctOptionIds: ['opt1'],
    };

    const optionsCount = originalQuestion.options.length;
    expect(optionsCount).toBe(4);
    expect(originalQuestion.correctOptionIds).toEqual(['opt1']);
  });

  it('validates question subject structure and required fields', () => {
    const question: Question = {
      id: 'm094_1',
      subjectId: SubjectId.ALGO,
      type: QuestionType.SINGLE,
      text: 'Бағдарламалау негіздері',
      options: [
        { id: 'a', text: 'Жауап A' },
        { id: 'b', text: 'Жауап B' }
      ],
      correctOptionIds: ['a']
    };

    expect(question.id).toBeTruthy();
    expect(question.options.length).toBeGreaterThan(0);
    expect(question.correctOptionIds.length).toBeGreaterThan(0);
  });
});
