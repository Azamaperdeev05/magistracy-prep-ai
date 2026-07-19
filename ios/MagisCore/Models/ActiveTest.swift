import Foundation
import FirebaseFirestore

struct ActiveTest: Codable, Identifiable {
    @DocumentID var id: String?
    let userId: String
    let specialtyCode: String
    let startedAt: Date
    let expiresAt: Date
    var currentIndex: Int
    var answeredQuestions: [String: [String]]
    var questionIds: [String]
    
    var isExpired: Bool {
        Date() > expiresAt
    }
    
    var remainingSeconds: Int {
        let remaining = Int(expiresAt.timeIntervalSinceNow)
        return max(0, remaining)
    }
    
    static func create(userId: String, specialtyCode: String, questionIds: [String]) -> ActiveTest {
        let now = Date()
        return ActiveTest(
            userId: userId,
            specialtyCode: specialtyCode,
            startedAt: now,
            expiresAt: now.addingTimeInterval(TimeInterval(Constants.examDurationMinutes * 60)),
            currentIndex: 0,
            answeredQuestions: [:],
            questionIds: questionIds
        )
    }
}
