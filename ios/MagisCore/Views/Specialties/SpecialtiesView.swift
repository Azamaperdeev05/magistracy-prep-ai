import SwiftUI

struct SpecialtiesView: View {
    @State private var searchText = ""
    @State private var selectedSpecialty: Specialty?

    var filteredSpecialties: [Specialty] {
        let all = SpecialtiesData.all
        if searchText.isEmpty { return all }
        return all.filter {
            $0.name.lowercased().contains(searchText.lowercased()) ||
            $0.code.lowercased().contains(searchText.lowercased())
        }
    }

    var body: some View {
        ScrollView {
            VStack(spacing: 12) {
                // Search bar
                HStack(spacing: 10) {
                    Image(systemName: "magnifyingglass")
                        .foregroundColor(.dsText3)
                        .font(.system(size: 16))
                    TextField("Іздеу...", text: $searchText)
                        .textFieldStyle(.plain)
                        .font(.system(size: 14))
                    Button("Фильтр") {}
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundColor(.dsBlue)
                }
                .padding(14)
                .background(Color.dsSurface)
                .clipShape(RoundedRectangle(cornerRadius: 12))
                .dsCardShadow()

                // List
                ForEach(filteredSpecialties) { specialty in
                    Button(action: { selectedSpecialty = specialty }) {
                        specialtyRow(specialty)
                    }
                    .buttonStyle(.plain)
                }
            }
            .padding(.horizontal, 20)
            .padding(.top, 16)
        }
        .background(Color.dsBg)
        .navigationTitle("Мамандықтар")
        .navigationBarTitleDisplayMode(.inline)
        .sheet(item: $selectedSpecialty) { specialty in
            NavigationStack {
                SpecialtyDetailView(specialty: specialty)
            }
        }
    }

    private func specialtyRow(_ specialty: Specialty) -> some View {
        DSCard(padding: 14) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    Text(specialty.name)
                        .font(.system(size: 14, weight: .medium))
                        .foregroundColor(.dsText)
                        .lineLimit(2)
                    Text("\(specialty.code) · \(specialty.profile1)")
                        .font(.system(size: 11))
                        .foregroundColor(.dsText3)
                }
                Spacer()
                VStack(alignment: .trailing, spacing: 4) {
                    Text("Мамандықтар: 1")
                        .font(.system(size: 11, weight: .medium))
                        .foregroundColor(.dsBlue)
                    Text("Өту")
                        .font(.system(size: 11, weight: .semibold))
                        .foregroundColor(.dsGreen)
                }
            }
        }
    }
}

struct SpecialtyDetailView: View {
    let specialty: Specialty
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                // Code badge
                Text(specialty.code)
                    .font(.system(size: 14, weight: .semibold))
                    .foregroundColor(.dsBlue)
                    .padding(.horizontal, 12)
                    .padding(.vertical, 4)
                    .background(Color.dsBlueLight)
                    .clipShape(Capsule())

                // Name
                Text(specialty.name)
                    .font(.system(size: 22, weight: .bold))
                    .foregroundColor(.dsText)
                    .multilineTextAlignment(.center)

                // Profiles
                VStack(spacing: 12) {
                    profileCard(title: "Бейіндік пән 1", content: specialty.profile1, color: .dsBlue)
                    profileCard(title: "Бейіндік пән 2", content: specialty.profile2, color: .dsGreen)
                }

                Spacer()
            }
            .padding(.horizontal, 20)
            .padding(.top, 24)
        }
        .background(Color.dsBg)
        .navigationTitle("Мамандық")
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button("Жабу") { dismiss() }
                    .foregroundColor(.dsBlue)
            }
        }
    }

    private func profileCard(title: String, content: String, color: Color) -> some View {
        DSCard {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    Text(title)
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundColor(color)
                    Text(content)
                        .font(.system(size: 15))
                        .foregroundColor(.dsText)
                }
                Spacer()
            }
        }
    }
}


