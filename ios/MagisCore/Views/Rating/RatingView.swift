import SwiftUI

struct RatingView: View {
    @State private var topUsers: [TopUser] = []
    @State private var isLoading = true

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 24) {
                    header

                    if isLoading {
                        loadingView
                    } else if topUsers.isEmpty {
                        emptyState
                    } else {
                        topSection
                        listSection
                    }
                }
                .padding(.horizontal, 20)
                .padding(.vertical, 16)
            }
            .background(Color.dsBg)
            .navigationTitle("Рейтинг")
            .navigationBarTitleDisplayMode(.large)
            .toolbarBackground(.automatic, for: .tabBar)
            .task { await loadTopUsers() }
        }
    }

    // MARK: - Header

    private var header: some View {
        VStack(spacing: 10) {
            ZStack {
                Circle()
                    .fill(
                        LinearGradient(colors: [.dsGold, Color(red: 217/255, green: 119/255, blue: 6/255)], startPoint: .topLeading, endPoint: .bottomTrailing)
                    )
                    .frame(width: 80, height: 80)
                    .shadow(color: Color.dsGold.opacity(0.3), radius: 12, x: 0, y: 4)
                Image(systemName: "trophy.fill")
                    .font(.system(size: 36))
                    .foregroundColor(.white)
            }
            Text("Көшбасшылар Тақтасы")
                .font(.system(size: 22, weight: .bold))
                .foregroundColor(.dsText)
            Text("130 сұрақ • 150 балл максимум")
                .font(.system(size: 14))
                .foregroundColor(.dsText2)
        }
    }

    // MARK: - Loading

    private var loadingView: some View {
        VStack(spacing: 12) {
            ProgressView()
                .scaleEffect(1.2)
            Text("Жүктелуде...")
                .font(.system(size: 14))
                .foregroundColor(.dsText3)
        }
        .frame(maxWidth: .infinity)
        .padding(.top, 80)
    }

    // MARK: - Empty State

    private var emptyState: some View {
        VStack(spacing: 20) {
            Spacer(minLength: 40)

            ZStack {
                Circle()
                    .fill(Color.dsSurface)
                    .frame(width: 110, height: 110)
                    .shadow(color: Color.black.opacity(0.04), radius: 8, x: 0, y: 2)
                Image(systemName: "trophy")
                    .font(.system(size: 48))
                    .foregroundColor(.dsText3)
            }

            VStack(spacing: 8) {
                Text("Әлі ешкім тест тапсырмады")
                    .font(.system(size: 18, weight: .semibold))
                    .foregroundColor(.dsText)
                Text("Тест тапсырып, көшбасшылар\nтақтасына шығыңыз!")
                    .font(.system(size: 14))
                    .foregroundColor(.dsText2)
                    .multilineTextAlignment(.center)
                    .lineSpacing(4)
            }

            Spacer(minLength: 40)
        }
        .frame(maxWidth: .infinity)
    }

    // MARK: - Top Section

    private var topSection: some View {
        HStack(spacing: 10) {
            if topUsers.count > 1 {
                rankCard(user: topUsers[1], medal: "🥈", size: .small)
            }
            if topUsers.count > 0 {
                rankCard(user: topUsers[0], medal: "🥇", size: .large)
            }
            if topUsers.count > 2 {
                rankCard(user: topUsers[2], medal: "🥉", size: .small)
            }
        }
    }

    private func rankCard(user: TopUser, medal: String, size: RankSize) -> some View {
        let isLarge = size == .large
        let avatarSize: CGFloat = isLarge ? 60 : 46

        return VStack(spacing: 8) {
            ZStack {
                Circle()
                    .fill(
                        LinearGradient(
                            colors: isLarge ?
                                [.dsGold, Color(red: 217/255, green: 119/255, blue: 6/255)] :
                                [Color(red: 200/255, green: 200/255, blue: 200/255), Color(red: 170/255, green: 170/255, blue: 170/255)],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(width: avatarSize, height: avatarSize)
                    .shadow(color: isLarge ? Color.dsGold.opacity(0.2) : Color.black.opacity(0.08), radius: 6, x: 0, y: 2)
                Text(user.avatar)
                    .font(.system(size: isLarge ? 22 : 16, weight: .bold))
                    .foregroundColor(.white)
            }
            Text(medal)
                .font(isLarge ? .title2 : .body)
            Text(user.name)
                .font(.system(size: isLarge ? 12 : 10, weight: .semibold))
                .foregroundColor(.dsText)
                .lineLimit(1)
            Text("\(user.score) балл")
                .font(.system(size: isLarge ? 15 : 12, weight: .bold))
                .foregroundColor(isLarge ? .dsGold : .dsText2)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, isLarge ? 16 : 10)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 16))
        .shadow(color: Color.black.opacity(0.06), radius: 8, x: 0, y: 2)
    }

    // MARK: - List Section

    private var listSection: some View {
        VStack(spacing: 6) {
            ForEach(Array(topUsers.dropFirst(3).enumerated()), id: \.element.id) { index, user in
                listRow(position: index + 4, user: user)
            }
        }
    }

    private func listRow(position: Int, user: TopUser) -> some View {
        HStack(spacing: 12) {
            Text("\(position)")
                .font(.system(size: 14, weight: .bold))
                .foregroundColor(.dsText3)
                .frame(width: 24)

            ZStack {
                LinearGradient(
                    colors: [.dsBlue, Color(red: 124/255, green: 58/255, blue: 237/255)],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
                Text(user.avatar)
                    .font(.system(size: 13, weight: .bold))
                    .foregroundColor(.white)
            }
            .frame(width: 34, height: 34)
            .clipShape(Circle())

            Text(user.name)
                .font(.system(size: 14, weight: .medium))
                .foregroundColor(.dsText)
                .lineLimit(1)

            Spacer()

            Text("\(user.score) балл")
                .font(.system(size: 14, weight: .semibold))
                .foregroundColor(.dsBlue)
        }
        .padding(.vertical, 10)
        .padding(.horizontal, 14)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .shadow(color: Color.black.opacity(0.03), radius: 3, x: 0, y: 1)
    }

    // MARK: - Load

    private func loadTopUsers() async {
        isLoading = true
        do {
            topUsers = try await HistoryService.shared.fetchTopUsers()
        } catch {
            topUsers = []
        }
        isLoading = false
    }
}

// MARK: - Rank Size

private enum RankSize {
    case small, large
}
