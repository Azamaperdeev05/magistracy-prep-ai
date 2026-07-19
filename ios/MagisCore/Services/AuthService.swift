import Foundation
import FirebaseAuth
import FirebaseFirestore
import GoogleSignIn

actor AuthService {
    static let shared = AuthService()

    private let db = Firestore.firestore()

    private var verificationID: String?
    private var verificationSentAt: Date?
    private var verificationAttempts = 0

    private let otpTimeout: TimeInterval = 300
    private let maxOtpAttempts = 5

    private init() {}

    func signUp(email: String, password: String, fullName: String, phone: String? = nil) async throws -> UserProfile {
        let result = try await Auth.auth().createUser(withEmail: email, password: password)
        let uid = result.user.uid

        var userData: [String: Any] = [
            "email": email,
            "full_name": fullName,
            "is_premium": false,
            "ai_queries_today": 0,
            "created_at": Timestamp(date: Date())
        ]
        if let phone = phone { userData["phone"] = phone }

        try await db.collection("users").document(uid).setData(userData)

        return UserProfile(
            id: uid,
            email: email,
            fullName: fullName,
            phone: phone,
            isPremium: false,
            specialtyCode: nil,
            specialtyName: nil,
            bestScore: 0,
            consent: nil,
            aiQueriesToday: 0,
            aiQueriesDate: nil,
            createdAt: Date()
        )
    }

    func signIn(email: String, password: String) async throws -> UserProfile {
        let result = try await Auth.auth().signIn(withEmail: email, password: password)
        return try await fetchProfile(uid: result.user.uid)
    }

    func signInWithGoogle() async throws -> UserProfile {
        guard let clientID = Bundle.main.object(forInfoDictionaryKey: "GIDClientID") as? String else {
            throw AuthError.googleSignInFailed
        }
        
        let config = GIDConfiguration(clientID: clientID)
        GIDSignIn.sharedInstance.configuration = config
        
        let rootViewController: UIViewController = await MainActor.run {
            guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
                  let rootViewController = windowScene.windows.first?.rootViewController else {
                return UIViewController()
            }
            return rootViewController
        }
        
        let result = try await GIDSignIn.sharedInstance.signIn(withPresenting: rootViewController)
        
        guard let idToken = result.user.idToken?.tokenString else {
            throw AuthError.googleSignInFailed
        }
        
        let credential = GoogleAuthProvider.credential(withIDToken: idToken, accessToken: result.user.accessToken.tokenString)
        let authResult = try await Auth.auth().signIn(with: credential)
        let uid = authResult.user.uid
        
        let existing = try? await fetchProfile(uid: uid)
        if let profile = existing {
            return profile
        }
        
        let profile = UserProfile(
            id: uid,
            email: result.user.profile?.email ?? "",
            fullName: result.user.profile?.name ?? "",
            phone: nil,
            isPremium: false,
            specialtyCode: nil,
            specialtyName: nil,
            bestScore: 0,
            consent: nil,
            aiQueriesToday: 0,
            aiQueriesDate: nil,
            createdAt: Date()
        )
        
        try await db.collection("users").document(uid).setData([
            "email": result.user.profile?.email ?? "",
            "full_name": result.user.profile?.name ?? "",
            "is_premium": false,
            "ai_queries_today": 0,
            "created_at": Timestamp(date: Date())
        ])
        
        return profile
    }

    // MARK: - OTP

    func sendOTP(phoneNumber: String) async throws {
        if let sentAt = verificationSentAt, Date().timeIntervalSince(sentAt) < 60 {
            throw AuthError.otpTooSoon
        }
        let provider = PhoneAuthProvider.provider()
        let result = try await provider.verifyPhoneNumber(phoneNumber, uiDelegate: nil)
        verificationID = result
        verificationSentAt = Date()
        verificationAttempts = 0
    }

    func verifyOTP(code: String) async throws -> UserProfile {
        guard let vid = verificationID else {
            throw AuthError.invalidCredentials
        }

        if verificationAttempts >= maxOtpAttempts {
            verificationID = nil
            verificationSentAt = nil
            throw AuthError.otpBlocked
        }

        if let sentAt = verificationSentAt, Date().timeIntervalSince(sentAt) > otpTimeout {
            verificationID = nil
            verificationSentAt = nil
            throw AuthError.otpExpired
        }

        verificationAttempts += 1

        let credential = PhoneAuthProvider.provider().credential(
            withVerificationID: vid,
            verificationCode: code
        )

        if let currentUser = Auth.auth().currentUser {
            let result = try await currentUser.link(with: credential)
            let uid = result.user.uid
            verificationID = nil
            verificationSentAt = nil
            let existing = try? await fetchProfile(uid: uid)
            if let profile = existing {
                return profile
            }
            return try await createPhoneProfile(uid: uid)
        } else {
            let result = try await Auth.auth().signIn(with: credential)
            let uid = result.user.uid
            verificationID = nil
            verificationSentAt = nil
            let existing = try? await fetchProfile(uid: uid)
            if let profile = existing {
                return profile
            }
            return try await createPhoneProfile(uid: uid)
        }
    }

    private func createPhoneProfile(uid: String) async throws -> UserProfile {
        let profile = UserProfile(
            id: uid,
            email: "",
            fullName: "Пайдаланушы",
            isPremium: false,
            specialtyCode: nil,
            specialtyName: nil,
            bestScore: 0,
            consent: nil,
            aiQueriesToday: 0,
            aiQueriesDate: nil,
            createdAt: Date()
        )
        try await db.collection("users").document(uid).setData([
            "full_name": "Пайдаланушы",
            "is_premium": false,
            "ai_queries_today": 0,
            "created_at": Timestamp(date: Date())
        ])
        return profile
    }

    // MARK: - Profile

    func fetchProfile(uid: String) async throws -> UserProfile {
        let doc = try await db.collection("users").document(uid).getDocument()
        guard let data = doc.data() else {
            throw AuthError.userNotFound
        }
        return try decodeProfile(from: data, uid: uid)
    }

    func updateProfile(uid: String, fields: [String: Any]) async throws {
        try await db.collection("users").document(uid).updateData(fields)
    }

    func acceptConsent(uid: String, version: String) async throws {
        try await db.collection("users").document(uid).updateData([
            "consent_accepted": true,
            "consent_accepted_at": Timestamp(date: Date()),
            "consent_version": version
        ])
    }

    func logout() throws {
        GIDSignIn.sharedInstance.signOut()
        try Auth.auth().signOut()
    }

    func deleteAccount() async throws {
        guard let user = Auth.auth().currentUser else {
            throw AuthError.userNotFound
        }
        let uid = user.uid
        
        try await db.collection("users").document(uid).delete()
        
        try await user.delete()
        
        GIDSignIn.sharedInstance.signOut()
    }

    func resetPassword(email: String) async throws {
        try await Auth.auth().sendPasswordReset(withEmail: email)
    }

    // MARK: - Active Test

    func saveActiveTest(_ test: ActiveTest) async throws {
        guard let user = Auth.auth().currentUser else { throw AuthError.userNotFound }
        let data: [String: Any] = [
            "userId": test.userId,
            "specialtyCode": test.specialtyCode,
            "startedAt": Timestamp(date: test.startedAt),
            "expiresAt": Timestamp(date: test.expiresAt),
            "currentIndex": test.currentIndex,
            "answeredQuestions": test.answeredQuestions
        ]
        try await db.collection("active_tests").document(user.uid).setData(data)
    }

    func fetchActiveTest() async throws -> ActiveTest? {
        guard let user = Auth.auth().currentUser else { return nil }
        let doc = try await db.collection("active_tests").document(user.uid).getDocument()
        guard let data = doc.data() else { return nil }
        
        let expiresAt = (data["expiresAt"] as? Timestamp)?.dateValue() ?? Date()
        if Date() > expiresAt {
            try await deleteActiveTest()
            return nil
        }
        
        return ActiveTest(
            id: doc.documentID,
            userId: data["userId"] as? String ?? "",
            specialtyCode: data["specialtyCode"] as? String ?? "",
            startedAt: (data["startedAt"] as? Timestamp)?.dateValue() ?? Date(),
            expiresAt: expiresAt,
            currentIndex: data["currentIndex"] as? Int ?? 0,
            answeredQuestions: data["answeredQuestions"] as? [String: [String]] ?? [:],
            questionIds: data["questionIds"] as? [String] ?? []
        )
    }

    func deleteActiveTest() async throws {
        guard let user = Auth.auth().currentUser else { return }
        try await db.collection("active_tests").document(user.uid).delete()
    }

    var currentUser: User? {
        Auth.auth().currentUser
    }

    // MARK: - Decoding

    private func decodeProfile(from data: [String: Any], uid: String) throws -> UserProfile {
        let consent: ConsentInfo?
        if let accepted = data["consent_accepted"] as? Bool, accepted {
            consent = ConsentInfo(
                accepted: true,
                acceptedAt: (data["consent_accepted_at"] as? Timestamp)?.dateValue(),
                version: data["consent_version"] as? String
            )
        } else {
            consent = nil
        }

        return UserProfile(
            id: uid,
            email: data["email"] as? String ?? "",
            fullName: data["full_name"] as? String ?? "",
            phone: data["phone"] as? String,
            isPremium: data["is_premium"] as? Bool ?? false,
            specialtyCode: data["specialty_code"] as? String,
            specialtyName: data["specialty_name"] as? String,
            bestScore: data["best_score"] as? Int ?? 0,
            consent: consent,
            aiQueriesToday: data["ai_queries_today"] as? Int ?? 0,
            aiQueriesDate: data["ai_queries_date"] as? String,
            createdAt: (data["created_at"] as? Timestamp)?.dateValue()
        )
    }
}

// MARK: - Errors

enum AuthError: LocalizedError {
    case notImplemented
    case userNotFound
    case invalidCredentials
    case otpTooSoon
    case otpExpired
    case otpBlocked
    case weakPassword
    case emailAlreadyInUse
    case googleSignInFailed
    case generic

    var errorDescription: String? {
        switch self {
        case .notImplemented: return "Бұл функция әлі қосылмаған."
        case .userNotFound, .invalidCredentials: return "Email немесе құпия сөз қате."
        case .otpTooSoon: return "Код жіберу арасында 1 минут күтіңіз."
        case .otpExpired: return "Кодтың мерзімі өтті. Қайта жіберіңіз."
        case .otpBlocked: return "Тым көп әрекет. Қайтадан бастаңыз."
        case .weakPassword: return "Құпия сөз тым жеңіл."
        case .emailAlreadyInUse: return "Бұл email тіркелген."
        case .googleSignInFailed: return "Google арқылы кіру сәтсіз аяқталды."
        case .generic: return "Қате пайда болды. Қайталаңыз."
        }
    }

    static func fromFirebase(_ error: Error) -> AuthError {
        let nsError = error as NSError
        guard nsError.domain == AuthErrorDomain else { return .generic }
        switch nsError.code {
        case AuthErrorCode.userNotFound.rawValue, AuthErrorCode.wrongPassword.rawValue:
            return .invalidCredentials
        case AuthErrorCode.weakPassword.rawValue:
            return .weakPassword
        case AuthErrorCode.emailAlreadyInUse.rawValue:
            return .emailAlreadyInUse
        case AuthErrorCode.invalidEmail.rawValue:
            return .invalidCredentials
        case AuthErrorCode.tooManyRequests.rawValue:
            return .otpBlocked
        default:
            return .generic
        }
    }
}
