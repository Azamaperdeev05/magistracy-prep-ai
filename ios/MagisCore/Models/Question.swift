import Foundation

struct Question: Identifiable, Codable, Equatable {
    let id: String
    let subjectId: SubjectId
    let text: String
    var codeSnippet: String?
    var audioUrl: String?
    var context: String?
    var readingPassage: String?
    var chartData: ChartData?
    var options: [Option]
    var correctOptionIds: [String]
    let type: QuestionType
    let topic: String
    var difficulty: Difficulty?
    var languageLevel: String?
    var hint: String?

    var subjectDisplayName: String? {
        Constants.subjects[subjectId]?.name
    }
}

typealias UserAnswers = [String: [String]]

struct SubjectConfig: Codable {
    let id: SubjectId
    let name: String
    let totalQuestions: Int
    let maxScore: Int
    let description: String
    let topics: [String]
    var isProfile: Bool?
}

struct SubjectDefinition: Codable {
    let id: SubjectId
    let name: String
    let promptContext: String
    let questionTypeInstruction: String
    let defaultQuestionType: QuestionType
    let subCategories: [SubCategory]
}

struct SubCategory: Codable {
    let name: String
    let description: String
    var examples: [String]?
}

struct TestResult: Codable {
    let totalScore: Int
    let maxScore: Int
    let subjectScores: [SubjectId: SubjectScore]
    let correctCount: Int
    let totalQuestions: Int
    let userName: String
    let endDate: Date?
    let wrongQuestionIds: [String]

    struct SubjectBreakdown: Identifiable {
        let id: SubjectId
        let correct: Int
        let total: Int
        let percentage: Double
    }
}

struct SubjectScore: Codable {
    let score: Int
    let max: Int
}
