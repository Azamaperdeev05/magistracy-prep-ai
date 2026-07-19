import Foundation
import FirebaseAuth
import FirebaseFirestore

struct TopUser: Identifiable {
    let id: String
    let name: String
    let score: Int
    let avatar: String
}

final class HistoryService {
    static let shared = HistoryService()
    private let db = Firestore.firestore()

    private var userId: String? {
        Auth.auth().currentUser?.uid
    }

    private var resultsCollection: CollectionReference? {
        guard let uid = userId else { return nil }
        return db.collection("users").document(uid).collection("test_results")
    }

    func saveResult(_ result: SavedTestResult) async throws {
        guard let collection = resultsCollection else {
            throw NSError(domain: "HistoryService", code: 401, userInfo: [NSLocalizedDescriptionKey: "User not logged in"])
        }
        try collection.addDocument(from: result)

        guard let uid = userId else { return }
        let userDoc = try await db.collection("users").document(uid).getDocument()
        let currentBest = userDoc.data()?["best_score"] as? Int ?? 0
        if result.score > currentBest {
            try await db.collection("users").document(uid).updateData([
                "best_score": result.score
            ])
        }
    }

    func fetchHistory() async throws -> [SavedTestResult] {
        guard let collection = resultsCollection else { return [] }
        let snapshot = try await collection
            .order(by: "testDate", descending: true)
            .limit(to: 50)
            .getDocuments()
        return snapshot.documents.compactMap { try? $0.data(as: SavedTestResult.self) }
    }

    func fetchWrongQuestionIds() async throws -> [String] {
        guard let collection = resultsCollection else { return [] }
        let snapshot = try await collection
            .order(by: "testDate", descending: true)
            .limit(to: 10)
            .getDocuments()
        let results = snapshot.documents.compactMap { try? $0.data(as: SavedTestResult.self) }
        return Array(Set(results.flatMap { $0.wrongQuestionIds }))
    }

    func deleteResult(_ id: String) async throws {
        guard let collection = resultsCollection else { return }
        try await collection.document(id).delete()
    }

    func fetchTopUsers() async throws -> [TopUser] {
        let snapshot = try await db.collection("users")
            .whereField("best_score", isGreaterThan: 0)
            .order(by: "best_score", descending: true)
            .limit(to: 20)
            .getDocuments()

        return snapshot.documents.compactMap { doc in
            let data = doc.data()
            let name = data["full_name"] as? String ?? ""
            let score = data["best_score"] as? Int ?? 0
            guard !name.isEmpty, score > 0 else { return nil }
            return TopUser(id: doc.documentID, name: name, score: score, avatar: String(name.prefix(1)))
        }
    }
}
