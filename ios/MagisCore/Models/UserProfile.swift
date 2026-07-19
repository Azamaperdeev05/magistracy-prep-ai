import Foundation

struct UserProfile: Codable, Identifiable {
    let id: String
    var email: String
    var fullName: String
    var phone: String?
    var isPremium: Bool
    var specialtyCode: String?
    var specialtyName: String?
    var bestScore: Int
    var consent: ConsentInfo?
    var aiQueriesToday: Int
    var aiQueriesDate: String?
    var createdAt: Date?
}

struct ConsentInfo: Codable {
    let accepted: Bool
    let acceptedAt: Date?
    let version: String?
}
