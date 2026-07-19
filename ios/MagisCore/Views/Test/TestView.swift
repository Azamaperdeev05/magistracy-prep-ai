import SwiftUI

struct TestView: View {
    @State var viewModel: TestViewModel
    @Environment(\.dismiss) private var dismiss
    @State private var showFinishAlert = false
    @State private var showResult = false
    @State private var isBlocked = false
    @Environment(\.scenePhase) private var scenePhase

    var body: some View {
        NavigationStack {
            ZStack {
                Color.dsBg.ignoresSafeArea()

                if isBlocked {
                    blockedOverlay
                } else {
                    VStack(spacing: 0) {
                        topBar
                        progressBar
                        questionArea
                        bottomNav
                    }
                }
            }
            .navigationBarHidden(true)
            .alert("Тестті аяқтау", isPresented: $showFinishAlert) {
                Button("Болдырмау", role: .cancel) {}
                Button("Аяқтау", role: .destructive) { finish() }
            } message: {
                Text("Жауап берілмеген сұрақтар: \(viewModel.questions.count - viewModel.answeredCount)")
            }
            .fullScreenCover(isPresented: $showResult) {
                if let result = viewModel.result {
                    ResultView(
                        viewModel: ResultViewModel(),
                        questions: viewModel.questions,
                        answers: viewModel.userAnswers,
                        result: result,
                        specialtyCode: viewModel.specialtyCode,
                        onDismiss: {
                            dismiss()
                        }
                    )
                }
            }
            .onChange(of: scenePhase) { _, phase in
                if phase == .background {
                    blockTest(reason: "Тесттен шығып кеттіңіз")
                }
            }
            .onReceive(NotificationCenter.default.publisher(for: UIScreen.capturedDidChangeNotification)) { _ in
                if UIScreen.main.isCaptured {
                    blockTest(reason: "Экран түсіріліп жатыр")
                }
            }
        }
    }

    private var blockedOverlay: some View {
        VStack(spacing: 16) {
            Image(systemName: "lock.shield.fill")
                .font(.system(size: 60))
                .foregroundColor(.dsRed)
            Text(viewModel.blockReason)
                .foregroundColor(.dsText)
                .font(.title3)
                .multilineTextAlignment(.center)
            Button("Тестті аяқтау") { finish() }
                .foregroundColor(.dsBlue)
                .padding()
        }
        .padding()
    }

    private var topBar: some View {
        HStack {
            Button("Шығу") { showFinishAlert = true }
                .foregroundColor(.dsRed)
            Spacer()
            Text(viewModel.currentQuestion?.subjectDisplayName ?? "")
                .font(.system(size: 13, weight: .medium))
                .foregroundColor(.dsText2)
            Spacer()
            Text(timeString(from: viewModel.timeRemaining))
                .foregroundColor(viewModel.timeRemaining < 300 ? .dsRed : .dsText)
                .font(.system(size: 13, weight: .semibold))
                .monospacedDigit()
        }
        .padding(.horizontal, 16)
        .padding(.top, 8)
    }

    private var progressBar: some View {
        GeometryReader { geo in
            ZStack(alignment: .leading) {
                RoundedRectangle(cornerRadius: 2)
                    .fill(Color.dsBorder)
                    .frame(height: 4)
                RoundedRectangle(cornerRadius: 2)
                    .fill(
                        LinearGradient(colors: [.dsGreen, .dsBlue], startPoint: .leading, endPoint: .trailing)
                    )
                    .frame(width: geo.size.width * viewModel.progress, height: 4)
            }
        }
        .frame(height: 4)
        .padding(.horizontal, 16)
        .padding(.vertical, 8)
    }

    private var questionArea: some View {
        ScrollViewReader { proxy in
            ScrollView {
                LazyVStack(spacing: 16) {
                    ForEach(Array(viewModel.questions.enumerated()), id: \.element.id) { index, question in
                        QuestionCardView(
                            question: question,
                            index: index,
                            selectedAnswers: Binding(
                                get: { viewModel.userAnswers[question.id] ?? [] },
                                set: { viewModel.submitAnswer(questionId: question.id, selectedOptionIds: $0) }
                            )
                        )
                        .id(index)
                        .onTapGesture { viewModel.goToQuestion(index) }
                    }
                }
                .padding(16)
            }
            .onChange(of: viewModel.currentIndex) { _, new in
                withAnimation { proxy.scrollTo(new, anchor: .center) }
            }
        }
    }

    private var bottomNav: some View {
        HStack {
            Button(action: { viewModel.previousQuestion() }) {
                HStack(spacing: 4) {
                    Image(systemName: "chevron.left")
                    Text("Артқа")
                }
                .font(.system(size: 14, weight: .semibold))
                .foregroundColor(.dsText)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 14)
                .background(Color.dsSurface)
                .overlay(RoundedRectangle(cornerRadius: 10).stroke(Color.dsBorder, lineWidth: 2))
            }
            .disabled(viewModel.currentIndex == 0)
            .opacity(viewModel.currentIndex == 0 ? 0.4 : 1)

            Button(action: { viewModel.nextQuestion() }) {
                HStack(spacing: 4) {
                    Text("Келесі")
                    Image(systemName: "chevron.right")
                }
                .font(.system(size: 14, weight: .semibold))
                .foregroundColor(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 14)
                .background(
                    LinearGradient(colors: [.dsBlue, .dsBlueDark], startPoint: .leading, endPoint: .trailing)
                )
                .clipShape(RoundedRectangle(cornerRadius: 10))
            }
            .disabled(viewModel.currentIndex == viewModel.questions.count - 1)
            .opacity(viewModel.currentIndex == viewModel.questions.count - 1 ? 0.4 : 1)
        }
        .padding(.horizontal, 16)
        .padding(.bottom, 16)
    }

    private func finish() {
        viewModel.finishTest()
        showResult = true
    }

    private func blockTest(reason: String) {
        guard !viewModel.isTestFinished else { return }
        viewModel.blockTest(reason: reason)
        isBlocked = true
    }

    private func timeString(from seconds: Int) -> String {
        let h = seconds / 3600
        let m = (seconds % 3600) / 60
        let s = seconds % 60
        if h > 0 { return String(format: "%d:%02d:%02d", h, m, s) }
        return String(format: "%02d:%02d", m, s)
    }
}
