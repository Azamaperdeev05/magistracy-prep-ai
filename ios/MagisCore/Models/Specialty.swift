import Foundation

struct Specialty: Codable, Identifiable {
    let code: String
    let name: String
    let profile1: String
    let profile2: String

    var id: String { code }
}
