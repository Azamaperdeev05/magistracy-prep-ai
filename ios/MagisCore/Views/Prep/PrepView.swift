import SwiftUI

struct PrepView: View {
    @State private var selectedMode: PrepMode?
    @State private var showSession = false

    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                // Header
                VStack(spacing: 8) {
                    Image(systemName: "brain.head.profile")
                        .font(.system(size: 50))
                        .foregroundColor(.dsGreen)
                    Text("Өздік даярлық")
                        .font(.system(size: 22, weight: .bold))
                        .foregroundColor(.dsText)
                    Text("Сіз әлсіз тақырыптарыңызды қайталап, біліміңізді нығайта аласыз")
                        .font(.system(size: 14))
                        .foregroundColor(.dsText2)
                        .multilineTextAlignment(.center)
                }
                .padding(.top, 16)

                // Prep cards
                prepCard(
                    title: "Қателермен жұмыс",
                    description: "Соңғы тестте қате жіберген сұрақтарыңызды қайта орындаңыз",
                    icon: "xmark.circle.fill",
                    color: .dsRed
                ) { selectMode(.mistakes) }

                prepCard(
                    title: "Тақырыптық тест",
                    description: "Тақырып бойынша сүзгілеп, белгілі бір бөлімді пысықтаңыз",
                    icon: "folder.fill",
                    color: .dsBlue
                ) { selectMode(.topic) }

                prepCard(
                    title: "Кездейсоқ сұрақтар",
                    description: "Барлық пәннен кездейсоқ 20 сұрақ",
                    icon: "shuffle",
                    color: Color(red: 168/255, green: 85/255, blue: 247/255)
                ) { selectMode(.random) }

                prepCard(
                    title: "AI көмекші",
                    description: "Кез келген сұрақты AI көмегімен түсіндіртіңіз",
                    icon: "sparkles",
                    color: .dsGold
                ) { selectMode(.ai) }
            }
            .padding(.horizontal, 20)
        }
        .background(Color.dsBg)
        .navigationTitle("Даярлық")
        .navigationBarTitleDisplayMode(.inline)
        .sheet(isPresented: $showSession) {
            if let mode = selectedMode {
                PrepSessionView(viewModel: PrepViewModel(), mode: mode)
            }
        }
    }

    private func selectMode(_ mode: PrepMode) {
        selectedMode = mode
        showSession = true
    }

    private func prepCard(title: String, description: String, icon: String, color: Color, action: @escaping () -> Void) -> some View {
        Button(action: action) {
            DSCard(padding: 16) {
                HStack(spacing: 16) {
                    Image(systemName: icon)
                        .font(.system(size: 22))
                        .foregroundColor(color)
                        .frame(width: 40, height: 40)
                        .background(color.opacity(0.1))
                        .clipShape(RoundedRectangle(cornerRadius: 10))
                    VStack(alignment: .leading, spacing: 4) {
                        Text(title)
                            .font(.system(size: 15, weight: .semibold))
                            .foregroundColor(.dsText)
                        Text(description)
                            .font(.system(size: 12))
                            .foregroundColor(.dsText2)
                            .lineLimit(2)
                    }
                    Spacer()
                    Image(systemName: "chevron.right")
                        .foregroundColor(.dsText3)
                }
            }
        }
        .buttonStyle(.plain)
    }
}
