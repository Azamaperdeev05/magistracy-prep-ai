import Foundation
import FirebaseFirestore

struct SavedTestResult: Codable, Identifiable {
    @DocumentID var id: String?
    let userId: String
    let testDate: Date
    let score: Int
    let totalQuestions: Int
    let specialtyCode: String?
    let subjectBreakdown: [String: SubjectBreakdown]
    let wrongQuestionIds: [String]

    struct SubjectBreakdown: Codable {
        let correct: Int
        let total: Int
        let percentage: Double
    }
}
