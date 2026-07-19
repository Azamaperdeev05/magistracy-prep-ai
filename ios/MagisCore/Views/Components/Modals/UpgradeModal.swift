import SwiftUI

struct UpgradeModal: View {
    @Binding var isPresented: Bool
    let userEmail: String

    var body: some View {
        ZStack {
            if isPresented {
                Color.black.opacity(0.6)
                    .ignoresSafeArea()
                    .onTapGesture { isPresented = false }

                VStack(spacing: 24) {
                    Image(systemName: "crown.fill")
                        .font(.system(size: 50))
                        .foregroundColor(.yellow)

                    Text("Premium жазылым")
                        .font(.title2.bold())
                        .foregroundColor(.white)

                    VStack(alignment: .leading, spacing: 12) {
                        premiumFeature("Шексіз AI сұрақтар")
                        premiumFeature("Толық аналитика")
                        premiumFeature("Сертификат жүктеу")
                        premiumFeature("Жарнамасыз")
                    }

                    Text("Бар болғаны **2 990 тг/ай**")
                        .foregroundColor(.white)

                    Button(action: { isPresented = false }) {
                        Text("Жазылу")
                            .font(.headline)
                            .foregroundColor(.white)
                            .frame(maxWidth: .infinity)
                            .padding()
                            .background(Color.yellow)
                            .cornerRadius(12)
                    }

                    Button("Кейінірек") { isPresented = false }
                        .foregroundColor(.gray)
                }
                .padding()
                .background(Color(red: 0.05, green: 0.06, blue: 0.08))
                .cornerRadius(20)
                .padding(.horizontal, 32)
            }
        }
    }

    private func premiumFeature(_ text: String) -> some View {
        HStack(spacing: 12) {
            Image(systemName: "checkmark.circle.fill")
                .foregroundColor(.yellow)
            Text(text)
                .foregroundColor(.white)
        }
    }
}
