import Foundation
import FirebaseFirestore

final class NewsService {
    static let shared = NewsService()
    private let db = Firestore.firestore()
    
    private var newsCollection: CollectionReference {
        db.collection("news")
    }
    
    func fetchActiveNews() async throws -> [NewsItem] {
        let snapshot = try await newsCollection
            .whereField("isActive", isEqualTo: true)
            .order(by: "createdAt", descending: true)
            .limit(to: 10)
            .getDocuments()
        
        return snapshot.documents.compactMap { try? $0.data(as: NewsItem.self) }
    }
    
    func addNews(_ news: NewsItem) async throws {
        try newsCollection.addDocument(from: news)
    }
    
    func deleteNews(_ id: String) async throws {
        try await newsCollection.document(id).delete()
    }
}
