import SwiftUI
import FirebaseCore
import FirebaseAuth
import GoogleSignIn

class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
        FontLoader.register()
        FirebaseApp.configure()
        Constants.setupProfileSubjects()
        return true
    }
    
    func application(_ app: UIApplication,
                     open url: URL,
                     options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        return GIDSignIn.sharedInstance.handle(url)
    }
}

@main
struct MagisCoreApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var delegate
    @AppStorage("hasSeenOnboarding") private var hasSeenOnboarding = false
    @State private var authViewModel = AuthViewModel()
    @State private var isCheckingAuth = true

    var body: some Scene {
        WindowGroup {
            Group {
                if isCheckingAuth {
                    splashScreen
                } else if !hasSeenOnboarding {
                    OnboardingView(onFinish: { hasSeenOnboarding = true })
                } else if authViewModel.isAuthenticated, let user = authViewModel.user {
                    if user.consent?.accepted != true {
                        ConsentGateView(onAccept: { consent in Task { await authViewModel.acceptConsent(consent) } }, onLogout: { Task { await authViewModel.logout() } }, onBack: { Task { await authViewModel.logout() } })
                    } else {
                        MainTabView(authViewModel: authViewModel)
                    }
                } else if authViewModel.isRegistering {
                    RegistrationView(viewModel: authViewModel)
                } else {
                    AuthView(viewModel: authViewModel)
                }
            }
            .environment(\.font, Font.custom("Gilroy-Regular", size: 17))
            .onAppear {
                checkAuth()
            }
        }
    }

    private var splashScreen: some View {
        ZStack {
            Color.dsBg.ignoresSafeArea()
            VStack(spacing: 16) {
                Image("Logo")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 80)
                HStack(spacing: 2) {
                    Text("Magis")
                        .font(.system(size: 28, weight: .heavy))
                        .foregroundColor(.dsBlue)
                    Text("Core")
                        .font(.system(size: 28, weight: .heavy))
                        .foregroundColor(.dsGreen)
                }
            }
        }
    }

    private func checkAuth() {
        if Auth.auth().currentUser != nil {
            Task {
                await authViewModel.checkExistingSession()
                withAnimation { isCheckingAuth = false }
            }
        } else {
            withAnimation { isCheckingAuth = false }
        }
    }
}
