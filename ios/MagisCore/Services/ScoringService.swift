import Foundation

enum ScoringService {
    static func calculateResult(questions: [Question], answers: UserAnswers, userName: String = "Пайдаланушы") -> TestResult {
        var totalScore = 0
        var maxScore = 0
        var correctCount = 0
        var subjectScores: [SubjectId: SubjectScore] = [:]

        let grouped = Dictionary(grouping: questions, by: { $0.subjectId })

        for (subjectId, subjectQuestions) in grouped {
            var subjectScore = 0
            var subjectMax = 0

            for question in subjectQuestions {
                let qMax = question.type == .multiple ? 2 : 1
                subjectMax += qMax

                let userAnswer = answers[question.id] ?? []
                let correct = Set(question.correctOptionIds)
                let selected = Set(userAnswer)

                if question.type == .multiple {
                    if selected == correct {
                        subjectScore += 2
                    } else if selected.isSubset(of: correct) && !selected.isEmpty {
                        subjectScore += 1
                    }
                } else {
                    if selected == correct {
                        subjectScore += 1
                    }
                }
            }

            totalScore += subjectScore
            maxScore += subjectMax
            if subjectScore == subjectMax { correctCount += subjectQuestions.count }
            else {
                let fullyCorrect = subjectQuestions.filter { q in
                    let userAnswer = answers[q.id] ?? []
                    return Set(userAnswer) == Set(q.correctOptionIds)
                }.count
                correctCount += fullyCorrect
            }

            subjectScores[subjectId] = SubjectScore(score: subjectScore, max: subjectMax)
        }

        let wrongIds = questions
            .filter { q in
                let userAnswer = answers[q.id] ?? []
                return Set(userAnswer) != Set(q.correctOptionIds)
            }
            .map(\.id)

        return TestResult(
            totalScore: totalScore,
            maxScore: maxScore,
            subjectScores: subjectScores,
            correctCount: correctCount,
            totalQuestions: questions.count,
            userName: userName,
            endDate: Date(),
            wrongQuestionIds: wrongIds
        )
    }

    static func isPassing(_ result: TestResult) -> Bool {
        Double(result.totalScore) / Double(result.maxScore) >= Constants.passingThreshold
    }

    static func percentage(_ result: TestResult) -> Double {
        guard result.maxScore > 0 else { return 0 }
        return Double(result.totalScore) / Double(result.maxScore) * 100
    }

    static func getWeakSubjects(_ result: TestResult) -> [(SubjectId, Double)] {
        result.subjectScores
            .map { (id, score) in
                let pct = score.max > 0 ? Double(score.score) / Double(score.max) : 0
                return (id, pct)
            }
            .filter { $0.1 < 0.5 }
            .sorted { $0.1 < $1.1 }
    }
}
