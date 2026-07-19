import SwiftUI

struct OnboardingView: View {
    let onFinish: () -> Void

    @State private var currentPage = 0

    private let pages: [(icon: String, title: String, desc: String)] = [
        ("graduationcap.fill",
         "MagisCore",
         "Магистратураға дайындыққа арналған интеллектуалды платформа. 127 мамандық бойынша тест тапсырып, біліміңізді сынаңыз."),
        ("pencil.line",
         "Ресми тест форматы",
         "130 сұрақ • 235 минут • КТ құрылымына толық сәйкес. Нақты емтихан жағдайында дайындалыңыз."),
        ("brain.head.profile",
         "AI көмегімен даярлық",
         "Қателеріңізбен жеке жұмыс. Жасанды интеллект әр сұраққа түсініктеме береді және әлсіз тұстарыңызды анықтайды."),
        ("magnifyingglass.circle",
         "Мамандық таңдау",
         "Өзіңіздің болашақ мамандығыңызды таңдап, арнайы тест профиліңізді құрыңыз. Барлығы 127 мамандық қолжетімді."),
    ]

    var body: some View {
        ZStack {
            Color.dsBg.ignoresSafeArea()

            VStack(spacing: 0) {
                TabView(selection: $currentPage) {
                    ForEach(Array(pages.enumerated()), id: \.offset) { index, page in
                        pageContent(icon: page.icon, title: page.title, desc: page.desc)
                            .tag(index)
                    }
                }
                .tabViewStyle(.page(indexDisplayMode: .never))
                .animation(.easeInOut, value: currentPage)

                Spacer()

                HStack(spacing: 8) {
                    ForEach(0..<pages.count, id: \.self) { index in
                        Capsule()
                            .fill(index == currentPage ? Color.dsBlue : Color.dsBorder)
                            .frame(width: index == currentPage ? 24 : 8, height: 8)
                            .animation(.spring, value: currentPage)
                    }
                }
                .padding(.bottom, 24)

                if currentPage == pages.count - 1 {
                    DSPrimaryButton(title: "Бастау", icon: "arrow.right") {
                        onFinish()
                    }
                    .padding(.horizontal, 48)
                    .padding(.bottom, 40)
                } else {
                    Button(action: { withAnimation { currentPage += 1 } }) {
                        Text("Келесі")
                            .dsFont(.gilroy(.semibold), size: 17)
                            .foregroundColor(.white)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 16)
                            .background(
                                LinearGradient(colors: [.dsBlue, .dsBlueDark], startPoint: .leading, endPoint: .trailing)
                            )
                            .clipShape(RoundedRectangle(cornerRadius: 14))
                    }
                    .padding(.horizontal, 48)
                    .padding(.bottom, 16)

                    Button(action: onFinish) {
                        Text("Өткізіп жіберу")
                            .dsFont(.gilroy(.regular), size: 14)
                            .foregroundColor(.dsText3)
                    }
                    .padding(.bottom, 40)
                }
            }
        }
    }

    private func pageContent(icon: String, title: String, desc: String) -> some View {
        VStack(spacing: 24) {
            Spacer()

            if title == "MagisCore" {
                Image("Logo")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 50)
            } else {
                Image(systemName: icon)
                    .resizable()
                    .scaledToFit()
                    .frame(width: 90, height: 90)
                    .foregroundStyle(
                        LinearGradient(colors: [.dsBlue, .dsGreen], startPoint: .topLeading, endPoint: .bottomTrailing)
                    )
            }

            if title == "MagisCore" {
                HStack(spacing: 2) {
                    Text("Magis")
                        .dsFont(.brand, size: 34)
                        .foregroundColor(.dsBlue)
                    Text("Core")
                        .dsFont(.brand, size: 34)
                        .foregroundColor(.dsGreen)
                }
            } else {
                Text(title)
                    .dsFont(.kzAgency(.bold), size: 28)
                    .foregroundColor(.dsText)
            }

            Text(desc)
                .dsFont(.gilroy(.regular), size: 16)
                .foregroundColor(.dsText2)
                .multilineTextAlignment(.center)
                .padding(.horizontal, 40)
                .lineSpacing(4)

            Spacer()
            Spacer()
        }
    }
}
