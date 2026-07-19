import Foundation
import Observation

@Observable
final class ResultViewModel {
    var questions: [Question] = []
    var userAnswers: UserAnswers = [:]
    var result: TestResult?

    func configure(questions: [Question], answers: UserAnswers) {
        self.questions = questions
        self.userAnswers = answers
        self.result = ScoringService.calculateResult(questions: questions, answers: answers)
    }

    var isPassing: Bool {
        guard let result = result else { return false }
        return ScoringService.isPassing(result)
    }

    var percentage: Double {
        guard let result = result else { return 0 }
        return ScoringService.percentage(result)
    }

    var weakSubjects: [(SubjectId, Double)] {
        guard let result = result else { return [] }
        return ScoringService.getWeakSubjects(result)
    }

    var correctCount: Int {
        result?.correctCount ?? 0
    }

    var totalCount: Int {
        questions.count
    }

    var totalScore: Int {
        result?.totalScore ?? 0
    }

    var maxScore: Int {
        result?.maxScore ?? 0
    }

    func subjectName(for id: SubjectId) -> String {
        Constants.subjects[id]?.name ?? id.rawValue
    }

    func answerStatus(for question: Question) -> AnswerStatus {
        let userAns = userAnswers[question.id] ?? []
        let correct = Set(question.correctOptionIds)
        let selected = Set(userAns)

        if selected == correct { return .correct }
        if selected.isEmpty { return .unanswered }
        return .incorrect
    }
}

enum AnswerStatus {
    case correct, incorrect, unanswered
}
