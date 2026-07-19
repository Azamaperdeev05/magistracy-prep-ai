import Foundation
import Observation
import FirebaseAuth

@Observable
final class AuthViewModel {
    var user: UserProfile?
    var isLoading = false
    var error: String?
    var isAuthenticated = false

    var isRegistering = false
    var regStep = 1
    var regName = ""
    var regPhone = ""
    var regOTP = ""
    var regOTPSent = false
    var regEmail = ""
    var regPassword = ""
    var regSpecialtyCode: String?
    var regSpecialtyName: String?

    private let authService = AuthService.shared

    // MARK: - Session Check

    @MainActor
    func checkExistingSession() {
        if let firebaseUser = Auth.auth().currentUser {
            Task {
                do {
                    user = try await authService.fetchProfile(uid: firebaseUser.uid)
                    isAuthenticated = true
                } catch {
                    self.user = UserProfile(
                        id: firebaseUser.uid,
                        email: firebaseUser.email ?? "",
                        fullName: firebaseUser.displayName ?? "",
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
                    isAuthenticated = true
                }
            }
        }
    }

    // MARK: - Sign In

    @MainActor
    func signIn(email: String, password: String) async {
        isLoading = true
        error = nil
        do {
            guard !email.isEmpty, !password.isEmpty else {
                throw AuthError.invalidCredentials
            }
            user = try await authService.signIn(email: email, password: password)
            isAuthenticated = true
        } catch {
            self.error = localizedError(error)
        }
        isLoading = false
    }

    @MainActor
    func signInWithGoogle() async {
        isLoading = true
        error = nil
        do {
            user = try await authService.signInWithGoogle()
            isAuthenticated = true
        } catch {
            self.error = localizedError(error)
        }
        isLoading = false
    }

    // MARK: - OTP

    @MainActor
    func sendOTP(phoneNumber: String) async {
        isLoading = true
        error = nil
        do {
            try await authService.sendOTP(phoneNumber: phoneNumber)
            regOTPSent = true
        } catch {
            self.error = localizedError(error)
        }
        isLoading = false
    }

    @MainActor
    func verifyLoginOTP(code: String) async {
        isLoading = true
        error = nil
        do {
            user = try await authService.verifyOTP(code: code)
            isAuthenticated = true
        } catch {
            self.error = localizedError(error)
        }
        isLoading = false
    }

    // MARK: - Registration

    @MainActor
    func completeRegistration() async {
        isLoading = true
        error = nil
        do {
            let phone = regPhone.isEmpty ? nil : regPhone
            let result = try await authService.signUp(email: regEmail, password: regPassword, fullName: regName, phone: phone)
            var updates: [String: Any] = [:]
            if let code = regSpecialtyCode { updates["specialty_code"] = code }
            if let name = regSpecialtyName { updates["specialty_name"] = name }
            if !updates.isEmpty {
                try await authService.updateProfile(uid: result.id, fields: updates)
            }
            user = UserProfile(
                id: result.id,
                email: regEmail,
                fullName: regName,
                phone: phone,
                isPremium: false,
                specialtyCode: regSpecialtyCode,
                specialtyName: regSpecialtyName,
                bestScore: 0,
                consent: nil,
                aiQueriesToday: 0,
                aiQueriesDate: nil,
                createdAt: Date()
            )
            regPassword = ""
            isRegistering = false
            isAuthenticated = true
        } catch {
            self.error = localizedError(error)
        }
        isLoading = false
    }

    @MainActor
    func startRegistration() {
        isRegistering = true
        regStep = 1
        regName = ""
        regPhone = ""
        regOTP = ""
        regOTPSent = false
        regEmail = ""
        regPassword = ""
        regSpecialtyCode = nil
        regSpecialtyName = nil
        error = nil
    }

    @MainActor
    func cancelRegistration() {
        isRegistering = false
        regStep = 1
        regPassword = ""
        error = nil
    }

    // MARK: - Step Navigation (legacy)

    @MainActor
    func nextStep() {
        error = nil
        if regStep == 1, regName.trimmingCharacters(in: .whitespaces).isEmpty {
            error = "Аты-жөніңізді енгізіңіз"
            return
        }
        if regStep == 2, regPhone.trimmingCharacters(in: .whitespaces).isEmpty {
            error = "Телефон нөміріңізді енгізіңіз"
            return
        }
        if regStep == 3, regEmail.trimmingCharacters(in: .whitespaces).isEmpty {
            error = "Email енгізіңіз"
            return
        }
        if regStep == 3, regPassword.count < 8 {
            error = "Құпия сөз кемінде 8 символ"
            return
        }
        if regStep < 4 { regStep += 1 }
    }

    @MainActor
    func prevStep() {
        error = nil
        if regStep > 1 { regStep -= 1 }
    }

    @MainActor
    func loginWithOTP() async {
        isLoading = true
        error = nil
        do {
            try await authService.sendOTP(phoneNumber: regPhone)
            regOTPSent = true
        } catch {
            self.error = localizedError(error)
        }
        isLoading = false
    }

    // MARK: - Consent

    @MainActor
    func acceptConsent(_ consent: ConsentInfo) async {
        user?.consent = consent
        guard let uid = user?.id else { return }
        do {
            try await authService.acceptConsent(uid: uid, version: consent.version ?? "1.0")
        } catch {
            self.error = localizedError(error)
        }
    }

    // MARK: - Reset Password

    @MainActor
    func resetPassword(email: String) async {
        isLoading = true
        error = nil
        do {
            try await authService.resetPassword(email: email)
            self.error = "Құпия сөзді қалпына келтіру сілтемесі жіберілді"
        } catch {
            self.error = localizedError(error)
        }
        isLoading = false
    }

    // MARK: - Logout

    @MainActor
    func logout() async {
        do {
            try await authService.logout()
        } catch {
            self.error = localizedError(error)
        }
        user = nil
        isAuthenticated = false
        isRegistering = false
        regStep = 1
        regPassword = ""
    }

    // MARK: - Delete Account

    @MainActor
    func deleteAccount() async {
        isLoading = true
        error = nil
        do {
            try await authService.deleteAccount()
        } catch {
            self.error = localizedError(error)
        }
        user = nil
        isAuthenticated = false
        isRegistering = false
        regStep = 1
        regPassword = ""
        isLoading = false
    }

    // MARK: - Update Specialty

    @MainActor
    func updateSpecialty(code: String, name: String) async {
        guard let uid = user?.id else { return }
        do {
            try await authService.updateProfile(uid: uid, fields: [
                "specialty_code": code,
                "specialty_name": name
            ])
            user?.specialtyCode = code
            user?.specialtyName = name
        } catch {
            self.error = localizedError(error)
        }
    }

    // MARK: - Error Mapping

    @MainActor
    private func localizedError(_ error: Error) -> String {
        if let authErr = error as? AuthError {
            return authErr.errorDescription ?? "Қате пайда болды"
        }
        return AuthError.fromFirebase(error).errorDescription ?? "Қате пайда болды"
    }
}
