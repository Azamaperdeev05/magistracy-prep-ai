import Foundation
import Observation

@Observable
final class StatisticsViewModel {
    var totalTests = 0
    var averageScore: Double = 0
    var bestScore = 0
    var totalQuestions = 0
    var subjectStats: [SubjectStat] = []
    var recentTests: [SavedTestResult] = []
    var scoreHistory: [ScorePoint] = []
    var weakTopics: [WeakTopic] = []
    var isLoading = true

    private let historyService = HistoryService.shared

    struct SubjectStat: Identifiable {
        let id = UUID()
        let name: String
        let correct: Int
        let total: Int
        var percentage: Double {
            total > 0 ? Double(correct) / Double(total) * 100 : 0
        }
    }

    struct ScorePoint: Identifiable {
        let id = UUID()
        let date: Date
        let score: Int
        let label: String
    }

    struct WeakTopic: Identifiable {
        let id = UUID()
        let topic: String
        let errorCount: Int
    }

    func loadStatistics() async {
        isLoading = true
        do {
            let results = try await historyService.fetchHistory()
            recentTests = Array(results.prefix(20))

            totalTests = results.count
            totalQuestions = results.reduce(0) { $0 + $1.totalQuestions }

            if !results.isEmpty {
                let scores = results.map { $0.score }
                bestScore = scores.max() ?? 0
                averageScore = Double(scores.reduce(0, +)) / Double(scores.count)
            }

            var subjectMap: [String: (correct: Int, total: Int)] = [:]
            var topicErrors: [String: Int] = [:]

            for result in results {
                for (code, breakdown) in result.subjectBreakdown {
                    let existing = subjectMap[code] ?? (correct: 0, total: 0)
                    subjectMap[code] = (
                        correct: existing.correct + breakdown.correct,
                        total: existing.total + breakdown.total
                    )
                }
                for wrongId in result.wrongQuestionIds {
                    let topic = "Сұрақ \(wrongId.prefix(8))"
                    topicErrors[topic, default: 0] += 1
                }
            }

            for (code, stats) in subjectMap {
                let name = Self.subjectName(for: code)
                subjectStats.append(SubjectStat(
                    name: name,
                    correct: stats.correct,
                    total: stats.total
                ))
            }

            subjectStats.sort { $0.percentage < $1.percentage }

            weakTopics = topicErrors.map { WeakTopic(topic: $0.key, errorCount: $0.value) }
                .sorted { $0.errorCount > $1.errorCount }
                .prefix(5)
                .map { $0 }

            scoreHistory = results.prefix(10).reversed().enumerated().map { _, result in
                let formatter = DateFormatter()
                formatter.dateFormat = "dd.MM"
                return ScorePoint(
                    date: result.testDate,
                    score: result.score,
                    label: formatter.string(from: result.testDate)
                )
            }
        } catch {
            print("Stats error: \(error)")
        }
        isLoading = false
    }

    private static func subjectName(for code: String) -> String {
        let nameMap: [String: String] = [
            "english": "Шет тілі (Ағылшын)",
            "tgo": "ОДАТ",
            "algo": "Алгоритмдер",
            "db": "Дерекқор",
            "m001": "Педагогика",
            "m002": "Мектепке дейінгі"
        ]
        return nameMap[code] ?? SpecialtiesData.byCode(code)?.name ?? code
    }
}
