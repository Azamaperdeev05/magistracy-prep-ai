import SwiftUI

struct AuthView: View {
    @State var viewModel: AuthViewModel
    @State private var email = ""
    @State private var password = ""
    @State private var phoneNumber = ""
    @State private var otpCode = ""
    @State private var isOTPMode = false
    @State private var otpSent = false
    @State private var showPassword = false
    @State private var showForgotPassword = false

    var body: some View {
        ZStack {
            Color.dsBg.ignoresSafeArea()

            if showForgotPassword {
                forgotPasswordView
            } else {
                loginView
            }
        }
    }

    // MARK: - Login View

    private var loginView: some View {
        VStack(spacing: 24) {
            Spacer()

            Image("Logo")
                .resizable()
                .scaledToFit()
                .frame(width: 100)

            HStack(spacing: 2) {
                Text("Magis")
                    .dsFont(.brand, size: 32)
                    .foregroundColor(.dsBlue)
                Text("Core")
                    .dsFont(.brand, size: 32)
                    .foregroundColor(.dsGreen)
            }

            Text("Магистратураға дайындық")
                .foregroundColor(.dsText2)

            Spacer()

            if isOTPMode { otpFields } else { emailFields }

            if let error = viewModel.error {
                Text(error)
                    .foregroundColor(.dsRed)
                    .font(.caption)
            }

            if isOTPMode {
                if otpSent {
                    DSPrimaryButton(title: "Кіру", icon: nil) {
                        Task { await viewModel.verifyLoginOTP(code: otpCode) }
                    }
                    .padding(.horizontal, 32)
                    .disabled(viewModel.isLoading || otpCode.count < 6)
                } else {
                    DSPrimaryButton(title: "Код жіберу", icon: nil) {
                        Task { await viewModel.sendOTP(phoneNumber: "+7\(phoneNumber.filter(\.isNumber))"); otpSent = true }
                    }
                    .padding(.horizontal, 32)
                    .disabled(viewModel.isLoading || phoneNumber.filter(\.isNumber).count < 10)
                }
            } else {
                DSPrimaryButton(title: "Кіру", icon: nil) {
                    Task { await viewModel.signIn(email: formatEmail(email), password: password) }
                }
                .padding(.horizontal, 32)
                .disabled(viewModel.isLoading)

                Button(action: { showForgotPassword = true }) {
                    Text("Құпия сөзді ұмыттым")
                        .font(.system(size: 13))
                        .foregroundColor(.dsText3)
                }
            }

            // Google Sign-In
            Button(action: { Task { await viewModel.signInWithGoogle() } }) {
                HStack(spacing: 12) {
                    Image(systemName: "g.circle.fill")
                        .font(.system(size: 20))
                    Text("Google арқылы кіру")
                        .font(.system(size: 15, weight: .medium))
                }
                .foregroundColor(.dsText)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 14)
                .background(Color.dsSurface)
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.dsBorder, lineWidth: 1)
                )
            }
            .disabled(viewModel.isLoading)
            .padding(.horizontal, 32)

            // Divider
            HStack(spacing: 16) {
                Rectangle().fill(Color.dsBorder).frame(height: 1)
                Text("немесе")
                    .font(.system(size: 12))
                    .foregroundColor(.dsText3)
                Rectangle().fill(Color.dsBorder).frame(height: 1)
            }
            .padding(.horizontal, 32)

            HStack(spacing: 16) {
                Button(action: { isOTPMode.toggle(); otpSent = false }) {
                    Text(isOTPMode ? "Email арқылы" : "Телефон арқылы")
                        .foregroundColor(.dsBlue)
                }
                Button(action: { viewModel.startRegistration() }) {
                    Text("Тіркелу")
                        .foregroundColor(.dsBlue)
                }
            }

            Spacer()
        }
    }

    // MARK: - Email Fields

    private var emailFields: some View {
        VStack(spacing: 16) {
            TextField("Email", text: $email)
                .textFieldStyle(.plain)
                .foregroundColor(.dsText2)
                .dsFieldStyle()
                .keyboardType(.emailAddress)
                .autocapitalization(.none)
                .onChange(of: email) { _, newVal in
                    email = formatEmail(newVal)
                }

            passwordField
        }
        .padding(.horizontal, 32)
    }

    private var passwordField: some View {
        HStack {
            if showPassword {
                TextField("Құпия сөз", text: $password)
                    .textFieldStyle(.plain)
                    .foregroundColor(.dsText2)
            } else {
                SecureField("Құпия сөз", text: $password)
                    .textFieldStyle(.plain)
                    .foregroundColor(.dsText2)
            }
            Button(action: { showPassword.toggle() }) {
                Image(systemName: showPassword ? "eye.fill" : "eye.slash.fill")
                    .foregroundColor(.dsText2)
                    .font(.system(size: 16))
            }
        }
        .dsFieldStyle()
    }

    // MARK: - OTP Fields

    private var otpFields: some View {
        VStack(spacing: 16) {
            HStack(spacing: 0) {
                Text("+7")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.dsText2)
                    .padding(.leading, 16)
                TextField("(7XX) XXX XX XX", text: $phoneNumber)
                    .textFieldStyle(.plain)
                    .foregroundColor(.dsText2)
                    .font(.system(size: 15))
                    .keyboardType(.numberPad)
                    .disabled(otpSent)
                    .onChange(of: phoneNumber) { _, newVal in
                        phoneNumber = formatKZPhone(newVal)
                    }
            }
            .dsFieldStyle()

            if otpSent {
                TextField("SMS код", text: $otpCode)
                    .textFieldStyle(.plain)
                    .foregroundColor(.dsText2)
                    .dsFieldStyle()
                    .keyboardType(.numberPad)
            }
        }
        .padding(.horizontal, 32)
    }

    // MARK: - Forgot Password

    private var forgotPasswordView: some View {
        VStack(spacing: 24) {
            Spacer()

            Image(systemName: "lock.fill")
                .resizable()
                .scaledToFit()
                .frame(width: 60, height: 60)
                .foregroundColor(.dsBlue)

            Text("Құпия сөзді ұмыттыңыз ба?")
                .font(.system(size: 22, weight: .bold))
                .foregroundColor(.dsText)

            Text("Email мекенжайыңызды енгізіңіз, біз сілтеме жібереміз")
                .font(.system(size: 14))
                .foregroundColor(.dsText2)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 40)

            TextField("Email", text: $email)
                .textFieldStyle(.plain)
                .foregroundColor(.dsText2)
                .dsFieldStyle()
                .keyboardType(.emailAddress)
                .autocapitalization(.none)
                .onChange(of: email) { _, newVal in
                    email = formatEmail(newVal)
                }
                .padding(.horizontal, 32)

            if let error = viewModel.error {
                Text(error)
                    .foregroundColor(.dsRed)
                    .font(.caption)
            }

            DSPrimaryButton(title: "Сілтеме жіберу", icon: "paperplane") {
                Task { await viewModel.resetPassword(email: formatEmail(email)) }
            }
            .padding(.horizontal, 32)
            .disabled(viewModel.isLoading || email.isEmpty)

            Button(action: { showForgotPassword = false; viewModel.error = nil }) {
                Text("Кіру бетіне оралу")
                    .font(.system(size: 14))
                    .foregroundColor(.dsBlue)
            }

            Spacer()
        }
    }

    // MARK: - Helpers

    private func formatEmail(_ input: String) -> String {
        let lower = input.lowercased()
        let noSpaces = lower.filter { $0 != " " }
        return noSpaces.filter { $0.isASCII || $0 == "@" || $0 == "." }
    }

    private func formatKZPhone(_ input: String) -> String {
        let digits = input.filter(\.isNumber)
        let limited = String(digits.prefix(10))
        if limited.isEmpty { return "" }
        var result = ""
        for (i, ch) in limited.enumerated() {
            if i == 1 { result = "(\(result)" }
            if i == 3 { result += ") " }
            if i == 6 { result += " " }
            if i == 8 { result += " " }
            result.append(ch)
        }
        return result
    }
}
