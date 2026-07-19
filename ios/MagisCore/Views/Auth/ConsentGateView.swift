import SwiftUI

struct ConsentGateView: View {
    let onAccept: (ConsentInfo) -> Void
    let onLogout: () -> Void
    let onBack: (() -> Void)?

    init(onAccept: @escaping (ConsentInfo) -> Void, onLogout: @escaping () -> Void, onBack: (() -> Void)? = nil) {
        self.onAccept = onAccept
        self.onLogout = onLogout
        self.onBack = onBack
    }

    @State private var agreeInfo = false
    @State private var agreeAds = false
    @State private var toastError: String?

    var body: some View {
        ZStack {
            Color.dsBg.ignoresSafeArea()

            VStack(spacing: 24) {
                if let onBack {
                    HStack {
                        Button(action: onBack) {
                            HStack(spacing: 4) {
                                Image(systemName: "chevron.left")
                                Text("Артқа")
                            }
                            .font(.system(size: 15))
                            .foregroundColor(.dsBlue)
                        }
                        Spacer()
                    }
                    .padding(.horizontal, 16)
                    .padding(.top, 8)
                }

                Spacer()

                Image(systemName: "hand.raised.fill")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 60, height: 60)
                    .foregroundColor(.dsBlue)

                Text("Құпиялылық келісімі")
                    .font(.system(size: 22, weight: .bold))
                    .foregroundColor(.dsText)

                Text("Сіздің деректеріңіз тек тест нәтижелерін сақтау үшін қолданылады.\nМәліметтер үшінші жаққа берілмейді.")
                    .foregroundColor(.dsText2)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal, 32)

                Spacer()

                VStack(alignment: .leading, spacing: 12) {
                    consentRow(isOn: $agreeInfo, text: "Құпиялылық келісімімен таныстым және келісемін")
                    consentRow(isOn: $agreeAds, text: "Жаңалықтар мен ұсыныстарды алуға келісемін")
                }
                .padding(.horizontal, 32)

                DSPrimaryButton(title: "Келісемін", icon: nil) {
                    if agreeInfo {
                        let consent = ConsentInfo(accepted: true, acceptedAt: Date(), version: "1.0")
                        onAccept(consent)
                    } else {
                        toastError = "Құпиялылық келісімін қабылдаңыз"
                    }
                }
                .padding(.horizontal, 32)

                Button(action: onLogout) {
                    Text("Келіспеймін")
                        .foregroundColor(.dsRed)
                }

                Spacer()
            }
        }
        .overlay(alignment: .bottom) {
            if let err = toastError {
                Text(err)
                    .font(.system(size: 13))
                    .foregroundColor(.white)
                    .padding(.horizontal, 20)
                    .padding(.vertical, 12)
                    .background(Color.dsRed)
                    .clipShape(Capsule())
                    .padding(.bottom, 20)
                    .transition(.move(edge: .bottom).combined(with: .opacity))
                    .onAppear { DispatchQueue.main.asyncAfter(deadline: .now() + 3) { withAnimation { toastError = nil } } }
            }
        }
        .animation(.default, value: toastError)
    }

    private func consentRow(isOn: Binding<Bool>, text: String) -> some View {
        Button(action: { isOn.wrappedValue.toggle() }) {
            HStack(spacing: 10) {
                Image(systemName: isOn.wrappedValue ? "checkmark.square.fill" : "square")
                    .resizable()
                    .frame(width: 20, height: 20)
                    .foregroundColor(isOn.wrappedValue ? .dsBlue : .dsText3)
                Text(text)
                    .font(.system(size: 13))
                    .foregroundColor(.dsText2)
                    .multilineTextAlignment(.leading)
                Spacer()
            }
        }
        .buttonStyle(.plain)
    }
}
