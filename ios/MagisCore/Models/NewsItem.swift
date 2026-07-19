import Foundation
import FirebaseFirestore

struct NewsItem: Codable, Identifiable {
    @DocumentID var id: String?
    let title: String
    let body: String
    let imageUrl: String?
    let createdAt: Date
    let isActive: Bool
    
    var dateFormatted: String {
        let formatter = DateFormatter()
        formatter.dateFormat = "dd MMMM yyyy"
        formatter.locale = Locale(identifier: "kk_KZ")
        return formatter.string(from: createdAt)
    }
}
