import SwiftUI

struct MainTabView: View {
    let authViewModel: AuthViewModel
    @State private var selectedTab = 0
    @State private var showTestSetup = false
    @State private var showStats = false
    @State private var showPrep = false

    var body: some View {
        TabView(selection: $selectedTab) {
            WelcomeView(
                authViewModel: authViewModel,
                onServiceTap: handleServiceTap
            )
            .tabItem {
                Label("Басты", systemImage: "house")
            }
            .tag(0)

            NavigationStack {
                TestSetupView()
            }
            .tabItem {
                Label("Тест", systemImage: "pencil.circle")
            }
            .tag(1)

            SpecialtiesView()
                .tabItem {
                    Label("Мамандықтар", systemImage: "graduationcap")
                }
                .tag(2)

            RatingView()
                .tabItem {
                    Label("Рейтинг", systemImage: "trophy")
                }
                .tag(3)

            ProfileView(authViewModel: authViewModel)
                .tabItem {
                    Label("Профиль", systemImage: "person")
                }
                .tag(4)
        }
        .tint(.dsBlue)
        .sheet(isPresented: $showTestSetup) {
            NavigationStack { TestSetupView() }
        }
        .sheet(isPresented: $showStats) {
            StatisticsView()
        }
        .sheet(isPresented: $showPrep) {
            NavigationStack { PrepView() }
        }
    }

    private func handleServiceTap(_ service: WelcomeView.ServiceType) {
        switch service {
        case .test: selectedTab = 1
        case .syllabus: showTestSetup = true
        case .specialties: selectedTab = 2
        case .stats: showStats = true
        case .profile: selectedTab = 4
        case .marathon: showPrep = true
        }
    }
}
