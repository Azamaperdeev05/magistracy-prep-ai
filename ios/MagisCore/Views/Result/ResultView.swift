import SwiftUI

struct ResultView: View {
    @State var viewModel: ResultViewModel
    let questions: [Question]
    let answers: UserAnswers
    let result: TestResult
    var specialtyCode: String?
    var onDismiss: (() -> Void)?

    @Environment(\.dismiss) private var dismiss
    @State private var showShareSheet = false
    @State private var certificateURL: URL?
    @State private var saveError: String?

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 20) {
                    scoreRing
                    passBadges
                    subjectBreakdown
                    recommendationCard
                    retakeButton
                }
                .padding(.horizontal, 20)
                .padding(.top, 16)
            }
            .background(Color.dsBg)
            .navigationTitle("Тест аяқталды!")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Жабу") {
                        dismiss()
                        onDismiss?()
                    }
                    .foregroundColor(.dsBlue)
                }
            }
            .onAppear { viewModel.configure(questions: questions, answers: answers) }
            .alert("Қате", isPresented: Binding(
                get: { saveError != nil },
                set: { if !$0 { saveError = nil } }
            )) {
                Button("OK") { saveError = nil }
            } message: {
                Text(saveError ?? "")
            }
            .shareSheet(item: certificateURL, isPresented: $showShareSheet)
        }
    }

    // MARK: - Score Ring

    private var scoreRing: some View {
        VStack(spacing: 12) {
            ZStack {
                Circle()
                    .fill(Color.dsGreenLight)
                    .frame(width: 140, height: 140)

                Circle()
                    .trim(from: 0, to: viewModel.percentage / 100)
                    .stroke(
                        viewModel.isPassing ? Color.dsGreen : Color.dsRed,
                        style: StrokeStyle(lineWidth: 10, lineCap: .round)
                    )
                    .frame(width: 130, height: 130)
                    .rotationEffect(.degrees(-90))

                VStack(spacing: 2) {
                    Text("\(Int(viewModel.percentage))")
                        .font(.system(size: 36, weight: .bold))
                        .foregroundColor(viewModel.isPassing ? .dsGreenDark : .dsRed)
                    Text("\(viewModel.totalScore)/\(viewModel.maxScore)")
                        .font(.system(size: 12))
                        .foregroundColor(.dsText3)
                }
            }

            HStack(spacing: 8) {
                if viewModel.isPassing {
                    DSBadge("✔ Өтті", bg: .dsGreenLight, fg: .dsGreenDark)
                } else {
                    DSBadge("✘ Өтпеді", bg: .dsRedLight, fg: .dsRed)
                }
                DSBadge("59 балл қажет", bg: Color.dsBorder, fg: .dsText2)
            }
        }
    }

    // MARK: - Pass Badges

    private var passBadges: some View {
        HStack(spacing: 12) {
            summaryMini("Дұрыс", "\(viewModel.correctCount)", .dsGreen)
            summaryMini("Қате", "\(viewModel.totalCount - viewModel.correctCount)", .dsRed)
            summaryMini("Жауапсыз", "\(viewModel.questions.count - answers.count)", .dsText3)
        }
    }

    private func summaryMini(_ title: String, _ value: String, _ color: Color) -> some View {
        VStack(spacing: 4) {
            Text(value)
                .font(.system(size: 20, weight: .bold))
                .foregroundColor(color)
            Text(title)
                .font(.system(size: 11))
                .foregroundColor(.dsText3)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 12)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .dsCardShadow()
    }

    // MARK: - Subject Breakdown

    private var subjectBreakdown: some View {
        DSCard(padding: 16) {
            VStack(alignment: .leading, spacing: 10) {
                Text("Бөлімдер бойынша")
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundColor(.dsGreenDark)

                ForEach(Array(result.subjectScores.keys.sorted { $0.rawValue < $1.rawValue }), id: \.self) { subjectId in
                    if let score = result.subjectScores[subjectId] {
                        sectionRow(
                            name: viewModel.subjectName(for: subjectId),
                            score: score.score,
                            max: score.max
                        )
                    }
                }
            }
        }
    }

    private func sectionRow(name: String, score: Int, max: Int) -> some View {
        HStack {
            Text(name)
                .font(.system(size: 13))
                .foregroundColor(.dsText2)
            Spacer()
            Text("\(score) / \(max)")
                .font(.system(size: 13, weight: .semibold))
                .foregroundColor(max > 0 && Double(score) / Double(max) >= 0.6 ? .dsGreenDark : .dsRed)
        }
        .padding(.vertical, 6)
        .overlay(
            Divider().background(Color.dsBorder),
            alignment: .bottom
        )
    }

    // MARK: - Recommendation

    private var recommendationCard: some View {
        Group {
            if !viewModel.weakSubjects.isEmpty {
                DSCard(padding: 14) {
                    VStack(alignment: .leading, spacing: 8) {
                        ForEach(viewModel.weakSubjects, id: \.0) { subjectId, pct in
                            HStack(alignment: .top, spacing: 10) {
                                Image(systemName: "lightbulb.fill")
                                    .foregroundColor(.dsGold)
                                    .font(.system(size: 16))
                                VStack(alignment: .leading, spacing: 2) {
                                    Text("\(viewModel.subjectName(for: subjectId)) — төмен нәтиже")
                                        .font(.system(size: 13, weight: .medium))
                                        .foregroundColor(.dsText)
                                    Text("Ұсыныс: \(viewModel.subjectName(for: subjectId)) тақырыптарын қайталаңыз.")
                                        .font(.system(size: 12))
                                        .foregroundColor(.dsText2)
                                }
                            }
                        }
                    }
                }
                .background(Color.dsGreenLight)
                .clipShape(RoundedRectangle(cornerRadius: 16))
                .overlay(
                    RoundedRectangle(cornerRadius: 16)
                        .stroke(Color.dsGreen.opacity(0.2), lineWidth: 1)
                )
            }
        }
    }

    // MARK: - Actions

    private var retakeButton: some View {
        VStack(spacing: 10) {
            DSPrimaryButton(title: "Тарихқа сақтау", icon: "clock.arrow.circlepath") {
                saveToHistory()
            }

            Button(action: generateCertificate) {
                Text("Сертификатты жүктеу")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.dsBlue)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 16)
                    .background(Color.dsSurface)
                    .overlay(RoundedRectangle(cornerRadius: 14).stroke(Color.dsBlue, lineWidth: 2))
            }
        }
    }

    private func saveToHistory() {
        Task {
            do {
                var subjectBreakdown: [String: SavedTestResult.SubjectBreakdown] = [:]
                for (subjectId, score) in result.subjectScores {
                    subjectBreakdown[subjectId.rawValue] = SavedTestResult.SubjectBreakdown(
                        correct: score.score,
                        total: score.max,
                        percentage: score.max > 0 ? Double(score.score) / Double(score.max) : 0
                    )
                }
                let uid = await AuthService.shared.currentUser?.uid ?? ""
                let saved = SavedTestResult(
                    userId: uid,
                    testDate: result.endDate ?? Date(),
                    score: result.totalScore,
                    totalQuestions: result.maxScore,
                    specialtyCode: specialtyCode,
                    subjectBreakdown: subjectBreakdown,
                    wrongQuestionIds: result.wrongQuestionIds
                )
                try await HistoryService.shared.saveResult(saved)
            } catch {
                saveError = error.localizedDescription
            }
        }
    }

    private func generateCertificate() {
        guard let url = CertificateGenerator.shared.generate(for: result) else {
            saveError = "Сертификат генерациясы сәтсіз аяқталды"
            return
        }
        certificateURL = url
        showShareSheet = true
    }
}

// MARK: - Share Sheet

struct ShareSheetModifier: ViewModifier {
    let item: URL?
    @Binding var isPresented: Bool

    func body(content: Content) -> some View {
        content
            .background(ShareSheetView(item: item, isPresented: $isPresented))
    }
}

struct ShareSheetView: UIViewControllerRepresentable {
    let item: URL?
    @Binding var isPresented: Bool

    func makeUIViewController(context: Context) -> UIViewController {
        UIViewController()
    }

    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {
        guard isPresented, let url = item else { return }
        let activity = UIActivityViewController(activityItems: [url], applicationActivities: nil)
        uiViewController.present(activity, animated: true) {
            isPresented = false
        }
    }
}

extension View {
    func shareSheet(item: URL?, isPresented: Binding<Bool>) -> some View {
        modifier(ShareSheetModifier(item: item, isPresented: isPresented))
    }
}
