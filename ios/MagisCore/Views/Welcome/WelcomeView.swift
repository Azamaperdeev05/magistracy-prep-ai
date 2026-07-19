import SwiftUI

struct WelcomeView: View {
    let authViewModel: AuthViewModel
    let onServiceTap: (ServiceType) -> Void

    @State private var currentBanner = 0
    @State private var testViewModel = TestViewModel()
    @State private var newsItems: [NewsItem] = []

    enum ServiceType: Hashable {
        case test, syllabus, specialties, stats, profile, marathon
    }

    private let banners: [(tag: String, title: String, sub: String)] = [
        ("MagisCore", "Магистратураға\nдайындық басталды!", "127 мамандық бойынша тест тапсырыңыз"),
        ("Жаңалық", "КТ форматындағы\nтестілеу", "130 сұрақ • 235 минут • 150 балл"),
        ("Дайындық", "AI көмегімен\nтүсіндірме", "Әр сұраққа толық түсініктеме")
    ]

    private let popularSpecialties: [(code: String, name: String, icon: String)] = [
        ("M094", "Ақпараттық технологиялар", "laptopcomputer"),
        ("M001", "Педагогика және психология", "brain.head.profile"),
        ("M095", "Ақпараттық қауіпсіздік", "lock.shield")
    ]

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 20) {
                    header
                    bannerCarousel
                    serviceGrid
                    if testViewModel.hasActiveTest {
                        activeTestButton
                    } else {
                        newTestButton
                    }
                    popularSection
                    if !newsItems.isEmpty {
                        newsSection
                    }
                }
                .padding(.vertical, 16)
            }
            .background(Color.dsBg)
            .task {
                await testViewModel.checkActiveTest()
                await loadNews()
            }
        }
    }

    // MARK: - Header

    private var header: some View {
        HStack {
            HStack(spacing: 2) {
                Text("Magis")
                    .font(.system(size: 20, weight: .heavy))
                    .foregroundColor(.dsBlue)
                Text("Core")
                    .font(.system(size: 20, weight: .heavy))
                    .foregroundColor(.dsGreen)
            }
            Spacer()
            Image(systemName: "bell")
                .font(.system(size: 20))
                .foregroundColor(.dsText2)
        }
        .padding(.horizontal, 20)
    }

    // MARK: - Banner Carousel

    private var bannerCarousel: some View {
        VStack(spacing: 8) {
            TabView(selection: $currentBanner) {
                ForEach(Array(banners.enumerated()), id: \.offset) { index, banner in
                    DSBannerCard(
                        tag: banner.tag,
                        title: banner.title,
                        subtitle: banner.sub
                    )
                    .tag(index)
                }
            }
            .tabViewStyle(.page(indexDisplayMode: .never))
            .frame(height: 140)
            .padding(.horizontal, 20)

            HStack(spacing: 6) {
                ForEach(0..<banners.count, id: \.self) { index in
                    Capsule()
                        .fill(index == currentBanner ? Color.dsBlue : Color.dsBorder)
                        .frame(width: index == currentBanner ? 20 : 8, height: 8)
                }
            }
        }
    }

    // MARK: - Service Grid

    private var serviceGrid: some View {
        VStack(spacing: 12) {
            DSSectionTitle(text: "Қызметтер")
                .padding(.horizontal, 20)

            LazyVGrid(columns: [
                GridItem(.flexible(), spacing: 12),
                GridItem(.flexible(), spacing: 12),
                GridItem(.flexible(), spacing: 12)
            ], spacing: 12) {
                DSServiceItem(
                    title: "Тест",
                    icon: "pencil.circle.fill",
                    bgColor: .dsBlueLight,
                    iconColor: .dsBlue
                ) { onServiceTap(.test) }

                DSServiceItem(
                    title: "Бағдарлама",
                    icon: "book.fill",
                    bgColor: Color(red: 1, green: 243/255, blue: 224/255),
                    iconColor: Color(red: 249/255, green: 115/255, blue: 22/255)
                ) { onServiceTap(.syllabus) }

                DSServiceItem(
                    title: "Мамандықтар",
                    icon: "graduationcap.fill",
                    bgColor: Color(red: 232/255, green: 245/255, blue: 233/255),
                    iconColor: .dsGreen
                ) { onServiceTap(.specialties) }

                DSServiceItem(
                    title: "Статистика",
                    icon: "chart.bar.fill",
                    bgColor: Color(red: 243/255, green: 229/255, blue: 245/255),
                    iconColor: Color(red: 168/255, green: 85/255, blue: 247/255)
                ) { onServiceTap(.stats) }

                DSServiceItem(
                    title: "Профиль",
                    icon: "person.fill",
                    bgColor: Color(red: 227/255, green: 242/255, blue: 253/255),
                    iconColor: Color(red: 59/255, green: 130/255, blue: 246/255)
                ) { onServiceTap(.profile) }

                DSServiceItem(
                    title: "Марафон",
                    icon: "target",
                    bgColor: Color(red: 255/255, green: 248/255, blue: 225/255),
                    iconColor: Color(red: 234/255, green: 179/255, blue: 8/255)
                ) { onServiceTap(.marathon) }
            }
            .padding(.horizontal, 20)
        }
    }

    // MARK: - Active Test Button

    private var activeTestButton: some View {
        Button(action: { onServiceTap(.test) }) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    HStack(spacing: 6) {
                        Image(systemName: "clock.badge.exclamationmark")
                            .foregroundColor(.white)
                        Text("ЖАЛҒАСТЫРУ")
                            .font(.system(size: 10, weight: .semibold))
                            .foregroundColor(.white.opacity(0.9))
                    }
                    Text(testViewModel.activeTest?.specialtyCode ?? "Тест")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundColor(.white)
                    Text("Қалған уақыт: \(formatTime(testViewModel.activeTest?.remainingSeconds ?? 0))")
                        .font(.system(size: 12))
                        .foregroundColor(.white.opacity(0.8))
                }
                Spacer()
                Image(systemName: "chevron.right")
                    .foregroundColor(.white)
            }
            .padding(16)
            .background(
                ZStack {
                    LinearGradient(
                        colors: [.dsBlue, .dsBlueDark],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.white.opacity(0.2), lineWidth: 1)
                }
            )
            .clipShape(RoundedRectangle(cornerRadius: 12))
            .shadow(color: Color.dsBlue.opacity(0.3), radius: 12, x: 0, y: 4)
        }
        .buttonStyle(.plain)
        .padding(.horizontal, 20)
    }

    private func formatTime(_ seconds: Int) -> String {
        let hours = seconds / 3600
        let minutes = (seconds % 3600) / 60
        let secs = seconds % 60
        return String(format: "%02d:%02d:%02d", hours, minutes, secs)
    }

    // MARK: - New Test Button

    private var newTestButton: some View {
        Button(action: { onServiceTap(.test) }) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    HStack(spacing: 6) {
                        Image(systemName: "plus.circle.fill")
                            .foregroundColor(.white)
                        Text("ЖАҢА ТЕСТ")
                            .font(.system(size: 10, weight: .semibold))
                            .foregroundColor(.white.opacity(0.9))
                    }
                    Text("КТ тест тапсыру")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundColor(.white)
                    Text("130 сұрақ • 235 минут")
                        .font(.system(size: 12))
                        .foregroundColor(.white.opacity(0.8))
                }
                Spacer()
                Image(systemName: "chevron.right")
                    .foregroundColor(.white)
            }
            .padding(16)
            .background(
                ZStack {
                    LinearGradient(
                        colors: [.dsGreen, .dsGreenDark],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.white.opacity(0.2), lineWidth: 1)
                }
            )
            .clipShape(RoundedRectangle(cornerRadius: 12))
            .shadow(color: Color.dsGreen.opacity(0.3), radius: 12, x: 0, y: 4)
        }
        .buttonStyle(.plain)
        .padding(.horizontal, 20)
    }

    // MARK: - Popular Specialties

    private var popularSection: some View {
        VStack(spacing: 12) {
            HStack {
                DSSectionTitle(text: "Танымал мамандықтар")
                Spacer()
                Button("Барлығын көру") {}
                    .font(.system(size: 13, weight: .medium))
                    .foregroundColor(.dsBlue)
            }
            .padding(.horizontal, 20)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 10) {
                    ForEach(popularSpecialties, id: \.code) { spec in
                        popularCard(spec)
                    }
                }
                .padding(.horizontal, 20)
            }
        }
    }

    private func popularCard(_ spec: (code: String, name: String, icon: String)) -> some View {
        VStack(alignment: .leading, spacing: 6) {
            Image(systemName: spec.icon)
                .font(.system(size: 24))
                .foregroundColor(.dsBlue)
            Text(spec.code)
                .font(.system(size: 13, weight: .semibold))
                .foregroundColor(.dsText)
            Text(spec.name)
                .font(.system(size: 11))
                .foregroundColor(.dsText2)
                .lineLimit(2)
        }
        .frame(width: 160, alignment: .leading)
        .padding(14)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 16))
        .dsCardShadow()
    }

    // MARK: - News Section

    private var newsSection: some View {
        VStack(spacing: 12) {
            HStack {
                DSSectionTitle(text: "Жаңалықтар")
                Spacer()
            }
            .padding(.horizontal, 20)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 12) {
                    ForEach(newsItems) { news in
                        NewsCardView(news: news)
                            .frame(width: 280)
                    }
                }
                .padding(.horizontal, 20)
            }
        }
    }

    private func loadNews() async {
        do {
            newsItems = try await NewsService.shared.fetchActiveNews()
        } catch {
            newsItems = []
        }
    }
}

// MARK: - StatCard (legacy compat)

struct StatCard: View {
    let title: String
    let value: String
    let icon: String

    var body: some View {
        VStack(spacing: 8) {
            Image(systemName: icon)
                .foregroundColor(.dsBlue)
            Text(value)
                .font(.headline)
                .foregroundColor(.dsText)
            Text(title)
                .font(.caption)
                .foregroundColor(.dsText2)
        }
        .frame(maxWidth: .infinity)
        .padding()
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .dsCardShadow()
    }
}
