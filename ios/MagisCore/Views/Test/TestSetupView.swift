import SwiftUI

struct TestSetupView: View {
    @State private var testVM = TestViewModel()
    @State private var showTest = false
    @Environment(\.dismiss) private var dismiss
    @State private var selectedSpecialty: Specialty = SpecialtiesData.byCode("M094") ?? SpecialtiesData.all[0]
    @State private var showPicker = false
    @State private var searchText = ""

    private var filteredSpecialties: [Specialty] {
        if searchText.isEmpty { return SpecialtiesData.all }
        return SpecialtiesData.all.filter {
            $0.name.localizedCaseInsensitiveContains(searchText) ||
            $0.code.localizedCaseInsensitiveContains(searchText)
        }
    }

    private var profile1Name: String {
        guard let mapping = SpecialtyProfileMapping.all[selectedSpecialty.code],
              let config = Constants.subjects[mapping.profile1]
        else { return "—" }
        return config.name
    }

    private var profile2Name: String {
        guard let mapping = SpecialtyProfileMapping.all[selectedSpecialty.code],
              let config = Constants.subjects[mapping.profile2]
        else { return "—" }
        return config.name
    }

    var body: some View {
        ScrollView {
            VStack(spacing: 16) {
                // Specialty picker
                VStack(alignment: .leading, spacing: 4) {
                    Text("Мамандықты таңдаңыз")
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundColor(.dsText)
                    Text("Тест тапсыратын мамандықты таңдаңыз")
                        .font(.system(size: 13))
                        .foregroundColor(.dsText2)
                }
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.horizontal, 20)

                Button(action: { showPicker = true }) {
                    DSCard(padding: 16) {
                        HStack {
                            VStack(alignment: .leading, spacing: 6) {
                                Text(selectedSpecialty.code)
                                    .font(.system(size: 11, weight: .semibold))
                                    .foregroundColor(.dsBlue)
                                    .padding(.horizontal, 8)
                                    .padding(.vertical, 2)
                                    .background(Color.dsBlueLight)
                                    .clipShape(Capsule())
                                Text(selectedSpecialty.name)
                                    .font(.system(size: 15, weight: .semibold))
                                    .foregroundColor(.dsText)
                                    .lineLimit(2)
                            }
                            Spacer()
                            Image(systemName: "chevron.down")
                                .foregroundColor(.dsText3)
                        }
                    }
                }
                .buttonStyle(.plain)
                .padding(.horizontal, 20)

                // Info grid
                HStack(spacing: 10) {
                    DSCard(padding: 14) {
                        VStack {
                            Text("130")
                                .font(.system(size: 22, weight: .bold))
                                .foregroundColor(.dsBlue)
                            Text("Сұрақтар")
                                .font(.system(size: 11))
                                .foregroundColor(.dsText3)
                        }
                        .frame(maxWidth: .infinity)
                    }
                    DSCard(padding: 14) {
                        VStack {
                            Text("235")
                                .font(.system(size: 22, weight: .bold))
                                .foregroundColor(.dsGold)
                            Text("Минут")
                                .font(.system(size: 11))
                                .foregroundColor(.dsText3)
                        }
                        .frame(maxWidth: .infinity)
                    }
                }
                .padding(.horizontal, 20)

                // Profile subjects
                VStack(spacing: 8) {
                    HStack {
                        Text("Профиль 1:")
                            .foregroundColor(.dsText2)
                            .font(.system(size: 13))
                        Text(profile1Name)
                            .foregroundColor(.dsText)
                            .font(.system(size: 13, weight: .semibold))
                        Spacer()
                    }
                    HStack {
                        Text("Профиль 2:")
                            .foregroundColor(.dsText2)
                            .font(.system(size: 13))
                        Text(profile2Name)
                            .foregroundColor(.dsText)
                            .font(.system(size: 13, weight: .semibold))
                        Spacer()
                    }
                }
                .padding(14)
                .background(Color.dsSurface)
                .clipShape(RoundedRectangle(cornerRadius: 12))
                .dsCardShadow()
                .padding(.horizontal, 20)

                // Test mode selection
                VStack(spacing: 12) {
                    // 1 Subject test
                    Button(action: {
                        Task {
                            await testVM.startSingleSubjectTest(for: selectedSpecialty.code)
                        }
                    }) {
                        HStack(spacing: 12) {
                            Image(systemName: "doc.text.fill")
                                .font(.system(size: 20))
                                .foregroundColor(.dsBlue)
                            VStack(alignment: .leading, spacing: 2) {
                                Text("1 пән бойынша тест")
                                    .font(.system(size: 15, weight: .semibold))
                                    .foregroundColor(.dsText)
                                Text("Бір мамандық бойынша 130 сұрақ")
                                    .font(.system(size: 12))
                                    .foregroundColor(.dsText2)
                            }
                            Spacer()
                            Image(systemName: "chevron.right")
                                .foregroundColor(.dsText3)
                        }
                        .padding(16)
                        .background(Color.dsSurface)
                        .clipShape(RoundedRectangle(cornerRadius: 12))
                        .dsCardShadow()
                    }
                    .buttonStyle(.plain)

                    // Full CT test
                    Button(action: {
                        Task {
                            await testVM.startTest(for: selectedSpecialty.code)
                        }
                    }) {
                        HStack(spacing: 12) {
                            Image(systemName: "checkmark.seal.fill")
                                .font(.system(size: 20))
                                .foregroundColor(.dsGreen)
                            VStack(alignment: .leading, spacing: 2) {
                                Text("Толық КТ тест")
                                    .font(.system(size: 15, weight: .semibold))
                                    .foregroundColor(.dsText)
                                Text("Барлық пәндер бойынша 130 сұрақ")
                                    .font(.system(size: 12))
                                    .foregroundColor(.dsText2)
                            }
                            Spacer()
                            Image(systemName: "chevron.right")
                                .foregroundColor(.dsText3)
                        }
                        .padding(16)
                        .background(Color.dsSurface)
                        .clipShape(RoundedRectangle(cornerRadius: 12))
                        .dsCardShadow()
                    }
                    .buttonStyle(.plain)
                }
                .padding(.horizontal, 20)
            }
            .padding(.top, 16)
        }
        .background(Color.dsBg)
        .navigationTitle("КТ тест")
        .navigationBarTitleDisplayMode(.inline)
        .fullScreenCover(isPresented: $showTest) {
            TestView(viewModel: testVM)
        }
        .onChange(of: testVM.questions) { _, new in
            if !new.isEmpty { showTest = true }
        }
        .sheet(isPresented: $showPicker) {
            specialtySheet
        }
    }

    private var specialtySheet: some View {
        NavigationStack {
            List(filteredSpecialties) { specialty in
                Button(action: {
                    selectedSpecialty = specialty
                    showPicker = false
                    searchText = ""
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
                        showPicker = false
                        searchText = ""
                    }
                    .foregroundColor(.dsBlue)
                }
            }
        }
    }
}
