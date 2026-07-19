import SwiftUI

struct RegistrationView: View {
    @State var viewModel: AuthViewModel
    @Environment(\.dismiss) private var dismiss

    @State private var regName = ""
    @State private var regPhone = ""
    @State private var regEmail = ""
    @State private var regPassword = ""
    @State private var regPassword2 = ""
    @State private var regSpecialtyCode: String?
    @State private var regSpecialtyName: String?
    @State private var agreeTerms = false
    @State private var agreeAds = false
    @State private var showPassword = false
    @State private var showPassword2 = false
    @State private var fieldErrors: [String: String] = [:]
    @State private var toastError: String?

    private let specialties = SpecialtiesData.all
    @State private var searchText = ""

    var body: some View {
        ZStack {
            Color.dsBg.ignoresSafeArea()
            VStack(spacing: 0) {
                headerView
                ScrollView {
                    VStack(spacing: 20) {
                        formTitleView
                        nameFieldView
                        specialtyFieldView
                        phoneFieldView
                        emailFieldView
                        passwordFieldView
                        password2FieldView
                        checkboxesView
                        submitButtonView
                    }
                    .padding(.horizontal, 24)
                    .padding(.top, 20)
                    .padding(.bottom, 40)
                }
            }
        }
        .navigationBarHidden(true)
        .interactiveDismissDisabled()
        .overlay(alignment: .bottom) {
            if let err = toastError ?? viewModel.error {
                toastView(err)
            }
        }
        .onChange(of: viewModel.error) { _, _ in
            if viewModel.error != nil {
                DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                    withAnimation { viewModel.error = nil }
                }
            }
        }
        .animation(.default, value: toastError)
        .animation(.default, value: viewModel.error)
        .onChange(of: viewModel.isAuthenticated) { _, newValue in
            if newValue { dismiss() }
        }
    }

    private var filteredSpecialties: [Specialty] {
        if searchText.isEmpty { return specialties }
        return specialties.filter {
            $0.name.localizedCaseInsensitiveContains(searchText) ||
            $0.code.localizedCaseInsensitiveContains(searchText)
        }
    }

    // MARK: - Header

    private var headerView: some View {
        HStack {
            Button(action: {
                viewModel.cancelRegistration()
                dismiss()
            }) {
                HStack(spacing: 4) {
                    Image(systemName: "chevron.left").font(.system(size: 14, weight: .semibold))
                    Text("Артқа").font(.system(size: 14))
                }
                .foregroundColor(.dsBlue)
            }
            Spacer()
            Button(action: {
                viewModel.cancelRegistration()
                dismiss()
            }) {
                Text("Болдырмау")
                    .font(.system(size: 14))
                    .foregroundColor(.dsText3)
            }
        }
        .padding(.horizontal, 20)
        .padding(.top, 8)
    }

    // MARK: - Title

    private var formTitleView: some View {
        VStack(spacing: 4) {
            Text("Тіркелу")
                .font(.system(size: 22, weight: .bold))
                .foregroundColor(.dsText)
            Text("Барлық өрістерді толтырыңыз")
                .font(.system(size: 14))
                .foregroundColor(.dsText3)
        }
    }

    // MARK: - Name

    private var nameFieldView: some View {
        fieldGroup(label: "Аты-жөні", error: fieldErrors["name"]) {
            TextField("Мысалы: Азамат Серікұлы", text: $regName)
                .textFieldStyle(.plain)
                .foregroundColor(.dsText2)
                .dsFieldStyle(isError: fieldErrors["name"] != nil)
                .autocorrectionDisabled()
                .onChange(of: regName) { _, _ in clearFieldError("name") }
        }
    }

    // MARK: - Specialty

    private var specialtyFieldView: some View {
        fieldGroup(label: "Мамандық", error: fieldErrors["specialty"]) {
            Menu {
                ForEach(filteredSpecialties) { spec in
                    Button(action: {
                        regSpecialtyCode = spec.code
                        regSpecialtyName = spec.name
                        searchText = ""
                        clearFieldError("specialty")
                    }) {
                        VStack(alignment: .leading) {
                            Text(spec.name).font(.system(size: 14))
                            Text(spec.code).font(.system(size: 11)).foregroundColor(.dsText3)
                        }
                    }
                }
            } label: {
                HStack {
                    Text(regSpecialtyName ?? "Мамандықты таңдаңыз")
                        .foregroundColor(regSpecialtyName != nil ? .dsText : .dsText2)
                        .font(.system(size: 15))
                    Spacer()
                    Image(systemName: "chevron.down")
                        .foregroundColor(.dsText2)
                        .font(.system(size: 12))
                }
                .padding()
                .dsFieldStyle(isError: fieldErrors["specialty"] != nil)
            }
        }
    }

    // MARK: - Phone

    private var phoneFieldView: some View {
        fieldGroup(label: "Телефон", error: fieldErrors["phone"]) {
            HStack(spacing: 0) {
                Text("+7")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.dsText2)
                    .padding(.leading, 16)
                TextField("(7XX) XXX XX XX", text: $regPhone)
                    .textFieldStyle(.plain)
                    .foregroundColor(.dsText2)
                    .font(.system(size: 15))
                    .keyboardType(.numberPad)
                    .onChange(of: regPhone) { _, newVal in
                        regPhone = Self.formatKZPhone(newVal)
                        clearFieldError("phone")
                    }
            }
            .dsFieldStyle(isError: fieldErrors["phone"] != nil)
        }
    }

    // MARK: - Email

    private var emailFieldView: some View {
        fieldGroup(label: "Email", error: fieldErrors["email"]) {
            TextField("example@mail.com", text: $regEmail)
                .textFieldStyle(.plain)
                .foregroundColor(.dsText2)
                .dsFieldStyle(isError: fieldErrors["email"] != nil)
                .keyboardType(.emailAddress)
                .autocapitalization(.none)
                .onChange(of: regEmail) { _, newVal in
                    regEmail = Self.formatEmail(newVal)
                    clearFieldError("email")
                }
        }
    }

    // MARK: - Password

    private var passwordFieldView: some View {
        fieldGroup(label: "Құпия сөз", error: fieldErrors["password"]) {
            HStack {
                if showPassword {
                    TextField("Кемінде 8 символ", text: $regPassword)
                        .textFieldStyle(.plain)
                        .foregroundColor(.dsText2)
                } else {
                    SecureField("Кемінде 8 символ", text: $regPassword)
                        .textFieldStyle(.plain)
                        .foregroundColor(.dsText2)
                }
                Button(action: { showPassword.toggle() }) {
                    Image(systemName: showPassword ? "eye.fill" : "eye.slash.fill")
                        .foregroundColor(.dsText2)
                        .font(.system(size: 16))
                }
            }
            .dsFieldStyle(isError: fieldErrors["password"] != nil)
            .onChange(of: regPassword) { _, _ in clearFieldError("password") }
        }
    }

    private var password2FieldView: some View {
        fieldGroup(label: "Құпия сөзді растау", error: fieldErrors["password2"]) {
            HStack {
                if showPassword2 {
                    TextField("Құпия сөзді қайта енгізіңіз", text: $regPassword2)
                        .textFieldStyle(.plain)
                        .foregroundColor(.dsText2)
                } else {
                    SecureField("Құпия сөзді қайта енгізіңіз", text: $regPassword2)
                        .textFieldStyle(.plain)
                        .foregroundColor(.dsText2)
                }
                Button(action: { showPassword2.toggle() }) {
                    Image(systemName: showPassword2 ? "eye.fill" : "eye.slash.fill")
                        .foregroundColor(.dsText2)
                        .font(.system(size: 16))
                }
            }
            .dsFieldStyle(isError: fieldErrors["password2"] != nil)
            .onChange(of: regPassword2) { _, _ in clearFieldError("password2") }
        }
    }

    // MARK: - Checkboxes

    private var checkboxesView: some View {
        VStack(alignment: .leading, spacing: 12) {
            checkboxRowView(
                isOn: $agreeTerms,
                text: "Құпиялылық келісімімен таныстым және келісемін",
                errorKey: "terms"
            )
            checkboxRowView(
                isOn: $agreeAds,
                text: "Жаңалықтар мен ұсыныстарды алуға келісемін",
                errorKey: nil
            )
        }
    }

    // MARK: - Submit

    private var submitButtonView: some View {
        Button {
            if validateForm() {
                Task { await submitForm() }
            }
        } label: {
            Text("Тіркелу")
                .foregroundStyle(.white)
                .frame(maxWidth: .infinity)
        }
        .buttonStyle(.dsAction)
    }

    // MARK: - Submit Action

    private func submitForm() async {
        viewModel.regName = regName
        viewModel.regPhone = "+7\(regPhone.filter(\.isNumber))"
        viewModel.regEmail = Self.formatEmail(regEmail)
        viewModel.regPassword = regPassword
        viewModel.regSpecialtyCode = regSpecialtyCode
        viewModel.regSpecialtyName = regSpecialtyName
        await viewModel.completeRegistration()
    }
}

// MARK: - Helpers

extension RegistrationView {
    fileprivate func fieldGroup<Content: View>(label: String, error: String?, @ViewBuilder content: () -> Content) -> some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(label)
                .font(.system(size: 13, weight: .semibold))
                .foregroundColor(.dsText2)
            content()
            if let err = error {
                Text(err)
                    .font(.system(size: 11))
                    .foregroundColor(.dsRed)
                    .transition(.opacity)
            }
        }
    }

    fileprivate func checkboxRowView(isOn: Binding<Bool>, text: String, errorKey: String?) -> some View {
        Button(action: { isOn.wrappedValue.toggle(); if let k = errorKey { clearFieldError(k) } }) {
            HStack(spacing: 10) {
                Image(systemName: isOn.wrappedValue ? "checkmark.square.fill" : "square")
                    .resizable()
                    .frame(width: 20, height: 20)
                    .foregroundColor(isOn.wrappedValue ? .dsBlue : .dsText3)
                Text(text)
                    .font(.system(size: 13))
                    .foregroundColor(.dsText2)
                    .multilineTextAlignment(.leading)
                Spacer()
            }
        }
        .buttonStyle(.plain)
    }

    fileprivate func validateForm() -> Bool {
        var errors: [String: String] = [:]

        if regName.trimmingCharacters(in: .whitespaces).isEmpty {
            errors["name"] = "Аты-жөніңізді енгізіңіз"
        }
        if regSpecialtyCode == nil {
            errors["specialty"] = "Мамандықты таңдаңыз"
        }
        if regPhone.filter(\.isNumber).count < 10 {
            errors["phone"] = "Толық телефон нөмірін енгізіңіз"
        }
        let emailClean = Self.formatEmail(regEmail)
        if emailClean.isEmpty || !emailClean.contains("@") {
            errors["email"] = "Жарамды email енгізіңіз"
        }
        if regPassword.count < 8 {
            errors["password"] = "Кемінде 8 символ"
        } else if !regPassword.contains(where: \.isLetter) || !regPassword.contains(where: \.isNumber) {
            errors["password"] = "Құпия сөзде әріп және сан болуы керек"
        }
        if regPassword2 != regPassword {
            errors["password2"] = "Құпия сөздер сәйкес келмейді"
        }
        if !agreeTerms {
            errors["terms"] = "Құпиялылық келісімін қабылдаңыз"
        }

        fieldErrors = errors
        if !errors.isEmpty {
            toastError = errors.values.first
        }
        return errors.isEmpty
    }

    fileprivate func clearFieldError(_ key: String) {
        fieldErrors.removeValue(forKey: key)
    }

    fileprivate func toastView(_ err: String) -> some View {
        Text(err)
            .font(.system(size: 13))
            .foregroundColor(.white)
            .padding(.horizontal, 20)
            .padding(.vertical, 12)
            .background(Color.dsRed)
            .clipShape(Capsule())
            .padding(.bottom, 20)
            .transition(.move(edge: .bottom).combined(with: .opacity))
            .onAppear { DispatchQueue.main.asyncAfter(deadline: .now() + 3) { withAnimation { toastError = nil } } }
    }

    static func formatKZPhone(_ input: String) -> String {
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

    static func formatEmail(_ input: String) -> String {
        let lower = input.lowercased()
        let noSpaces = lower.filter { $0 != " " }
        return noSpaces.filter { $0.isASCII || $0 == "@" || $0 == "." }
    }
}
