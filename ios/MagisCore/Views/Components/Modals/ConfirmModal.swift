import SwiftUI

struct ConfirmModal: ViewModifier {
    @Binding var isPresented: Bool
    let title: String
    let message: String
    let confirmText: String
    let cancelText: String
    let isDanger: Bool
    let onConfirm: () -> Void

    func body(content: Content) -> some View {
        content
            .alert(title, isPresented: $isPresented) {
                Button(cancelText, role: .cancel) {}
                Button(confirmText, role: isDanger ? .destructive : nil, action: onConfirm)
            } message: {
                Text(message)
            }
    }
}

struct AlertToast: View {
    let message: String
    let isSuccess: Bool

    var body: some View {
        HStack(spacing: 12) {
            Image(systemName: isSuccess ? "checkmark.circle.fill" : "xmark.circle.fill")
                .foregroundColor(isSuccess ? .green : .red)
            Text(message)
                .foregroundColor(.white)
                .font(.subheadline)
        }
        .padding()
        .background(Color(.systemGray6).opacity(0.9))
        .cornerRadius(12)
        .shadow(radius: 10)
    }
}
