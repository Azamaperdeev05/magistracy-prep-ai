import SwiftUI

struct ProfileView: View {
    let authViewModel: AuthViewModel
    @State private var showLogoutAlert = false
    @State private var showDeleteAlert = false
    @State private var showSpecialtyPicker = false
    @State private var notificationsEnabled = true
    @State private var searchText = ""

    private var filteredSpecialties: [Specialty] {
        if searchText.isEmpty { return SpecialtiesData.all }
        return SpecialtiesData.all.filter {
            $0.name.localizedCaseInsensitiveContains(searchText) ||
            $0.code.localizedCaseInsensitiveContains(searchText)
        }
    }

    var body: some View {
        ScrollView {
            VStack(spacing: 16) {
                // Avatar + name
                DSCard {
                    HStack(spacing: 14) {
                        avatarView
                        VStack(alignment: .leading, spacing: 2) {
                            Text(authViewModel.user?.fullName ?? "Пайдаланушы")
                                .font(.system(size: 16, weight: .semibold))
                                .foregroundColor(.dsText)
                            Text(authViewModel.user?.email ?? "")
                                .font(.system(size: 13))
                                .foregroundColor(.dsText2)
                        }
                        Spacer()
                    }
                }

                // Specialty
                Button(action: { showSpecialtyPicker = true }) {
                    VStack(spacing: 0) {
                        specialtyRow
                    }
                    .background(Color.dsSurface)
                    .clipShape(RoundedRectangle(cornerRadius: 16))
                    .dsCardShadow()
                }
                .buttonStyle(.plain)

                // Settings
                VStack(spacing: 0) {
                    settingsRow(icon: "trophy", title: "Рейтинг")
                    Divider().padding(.horizontal, 16)
                    settingsRow(icon: "clock.arrow.circlepath", title: "Тест тарихы")
                    Divider().padding(.horizontal, 16)
                    settingsRow(icon: "globe", title: "Тіл", value: "Қазақша")
                    Divider().padding(.horizontal, 16)
                    settingsRowToggle(icon: "bell", title: "Хабарландырулар", isOn: $notificationsEnabled)
                }
                .background(Color.dsSurface)
                .clipShape(RoundedRectangle(cornerRadius: 16))
                .dsCardShadow()

                // Logout button - Liquid Glass style
                Button(action: { showLogoutAlert = true }) {
                    HStack(spacing: 10) {
                        Image(systemName: "rectangle.portrait.and.arrow.right")
                            .font(.system(size: 16))
                        Text("Аккаунттан шығу")
                            .font(.system(size: 15, weight: .medium))
                    }
                    .foregroundColor(.dsText)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 16)
                    .background(
                        ZStack {
                            RoundedRectangle(cornerRadius: 16)
                                .fill(.ultraThinMaterial)
                            RoundedRectangle(cornerRadius: 16)
                                .fill(Color.white.opacity(0.6))
                            RoundedRectangle(cornerRadius: 16)
                                .stroke(Color.white.opacity(0.8), lineWidth: 1)
                        }
                    )
                    .shadow(color: Color.black.opacity(0.05), radius: 8, x: 0, y: 2)
                }

                // Delete account - Liquid Glass style (red)
                Button(action: { showDeleteAlert = true }) {
                    HStack(spacing: 10) {
                        Image(systemName: "trash")
                            .font(.system(size: 16))
                        Text("Аккаунтты жою")
                            .font(.system(size: 15, weight: .medium))
                    }
                    .foregroundColor(.dsRed)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 16)
                    .background(
                        ZStack {
                            RoundedRectangle(cornerRadius: 16)
                                .fill(.ultraThinMaterial)
                            RoundedRectangle(cornerRadius: 16)
                                .fill(Color.red.opacity(0.05))
                            RoundedRectangle(cornerRadius: 16)
                                .stroke(Color.red.opacity(0.3), lineWidth: 1)
                        }
                    )
                    .shadow(color: Color.red.opacity(0.05), radius: 8, x: 0, y: 2)
                }
            }
            .padding(.horizontal, 20)
            .padding(.top, 16)
            .padding(.bottom, 20)
        }
        .background(Color.dsBg)
        .navigationTitle("Профиль")
        .navigationBarTitleDisplayMode(.inline)
        .sheet(isPresented: $showSpecialtyPicker) {
            specialtySheet
        }
        .alert("Аккаунттан шығу", isPresented: $showLogoutAlert) {
            Button("Болдырмау", role: .cancel) {}
            Button("Шығу", role: .destructive) { Task { await authViewModel.logout() } }
        } message: {
            Text("Шынымен шығып кеткіңіз келе ме?")
        }
        .alert("Аккаунтты жою", isPresented: $showDeleteAlert) {
            Button("Болдырмау", role: .cancel) {}
            Button("Жою", role: .destructive) { Task { await authViewModel.deleteAccount() } }
        } message: {
            Text("Бұл әрекетті кері қайтару мүмкін емес. Барлық деректеріңіз жойылады.")
        }
    }

    // MARK: - Avatar

    private var avatarView: some View {
        ZStack {
            LinearGradient(
                colors: [.dsBlue, Color(red: 124/255, green: 58/255, blue: 237/255)],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
            Text(String((authViewModel.user?.fullName ?? "А").prefix(1)))
                .font(.system(size: 22, weight: .bold))
                .foregroundColor(.white)
        }
        .frame(width: 60, height: 60)
        .clipShape(Circle())
    }

    // MARK: - Profile Rows

    private func profileRow(icon: String, title: String, value: String) -> some View {
        HStack {
            Image(systemName: icon)
                .foregroundColor(.dsText2)
                .frame(width: 24)
            Text(title)
                .font(.system(size: 14))
                .foregroundColor(.dsText)
            Spacer()
            if !value.isEmpty {
                Text(value)
                    .font(.system(size: 13))
                    .foregroundColor(.dsText2)
            }
            Image(systemName: "chevron.right")
                .font(.system(size: 12))
                .foregroundColor(.dsText3)
        }
        .padding(.vertical, 13)
        .padding(.horizontal, 16)
    }

    private func settingsRow(icon: String, title: String, value: String? = nil) -> some View {
        HStack {
            Image(systemName: icon)
                .foregroundColor(.dsText2)
                .frame(width: 24)
            Text(title)
                .font(.system(size: 14))
                .foregroundColor(.dsText)
            Spacer()
            if let value {
                Text(value)
                    .font(.system(size: 13))
                    .foregroundColor(.dsText2)
            }
            Image(systemName: "chevron.right")
                .font(.system(size: 12))
                .foregroundColor(.dsText3)
        }
        .padding(.vertical, 13)
        .padding(.horizontal, 16)
    }

    private func settingsRowToggle(icon: String, title: String, isOn: Binding<Bool>) -> some View {
        HStack {
            Image(systemName: icon)
                .foregroundColor(.dsText2)
                .frame(width: 24)
            Text(title)
                .font(.system(size: 14))
                .foregroundColor(.dsText)
            Spacer()
            Toggle("", isOn: isOn)
                .labelsHidden()
                .tint(.dsGreen)
        }
        .padding(.vertical, 13)
        .padding(.horizontal, 16)
    }

    // MARK: - Specialty Row

    private var specialtyRow: some View {
        HStack {
            Image(systemName: "graduationcap.fill")
                .foregroundColor(.dsBlue)
                .frame(width: 24)
            VStack(alignment: .leading, spacing: 2) {
                Text("Мамандық")
                    .font(.system(size: 14))
                    .foregroundColor(.dsText)
                Text(authViewModel.user?.specialtyName ?? "Таңдалмаған")
                    .font(.system(size: 12))
                    .foregroundColor(authViewModel.user?.specialtyName != nil ? .dsBlue : .dsText3)
            }
            Spacer()
            HStack(spacing: 4) {
                Text("Ауыстыру")
                    .font(.system(size: 12))
                    .foregroundColor(.dsBlue)
                Image(systemName: "chevron.right")
                    .font(.system(size: 12))
                    .foregroundColor(.dsBlue)
            }
        }
        .padding(.vertical, 13)
        .padding(.horizontal, 16)
    }

    // MARK: - Specialty Sheet

    private var specialtySheet: some View {
        NavigationStack {
            List(filteredSpecialties) { specialty in
                Button(action: {
                    Task {
                        await updateSpecialty(specialty)
                    }
                }) {
                    HStack(spacing: 12) {
                        VStack(alignment: .leading, spacing: 4) {
                            Text(specialty.code)
                                .font(.system(size: 11, weight: .semibold))
                                .foregroundColor(.dsBlue)
                                .padding(.horizontal, 8)
                                .padding(.vertical, 2)
                                .background(Color.dsBlueLight)
                                .clipShape(Capsule())
                            Text(specialty.name)
                                .font(.system(size: 15, weight: .medium))
                                .foregroundColor(.dsText)
                                .lineLimit(2)
                        }
                        Spacer()
                        Image(systemName: "chevron.right")
                            .font(.system(size: 12))
                            .foregroundColor(.dsText3)
                    }
                    .padding(.vertical, 8)
                }
                .listRowBackground(Color.dsSurface)
            }
            .scrollContentBackground(.hidden)
            .background(Color.dsBg)
            .searchable(text: $searchText, prompt: "Іздеу...")
            .navigationTitle("Мамандық таңдау")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Болдырмау") {
                        showSpecialtyPicker = false
                        searchText = ""
                    }
                    .foregroundColor(.dsBlue)
                }
            }
        }
    }

    private func updateSpecialty(_ specialty: Specialty) async {
        await authViewModel.updateSpecialty(code: specialty.code, name: specialty.name)
        showSpecialtyPicker = false
        searchText = ""
    }
}
