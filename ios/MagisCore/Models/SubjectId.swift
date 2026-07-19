import Foundation

struct SubjectId: RawRepresentable, Hashable, Identifiable, Codable {
    let rawValue: String
    init(rawValue: String) { self.rawValue = rawValue }
    var id: String { rawValue }

    static let english = SubjectId(rawValue: "english")
    static let tgo = SubjectId(rawValue: "tgo")
    static let algo = SubjectId(rawValue: "algo")
    static let db = SubjectId(rawValue: "db")
    static let m001Pedagogika = SubjectId(rawValue: "m001_pedagogika")
    static let m001Psychology = SubjectId(rawValue: "m001_psychology")
    static let m002Pedagogika = SubjectId(rawValue: "m002_pedagogika")
    static let m002SpeechDev = SubjectId(rawValue: "m002_speech_dev")

    static let allCases: [SubjectId] = [
        .english, .tgo, .algo, .db,
        .m001Pedagogika, .m001Psychology,
        .m002Pedagogika, .m002SpeechDev
    ]
}
