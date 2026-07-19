import SwiftUI

struct PrepSessionView: View {
    @State var viewModel: PrepViewModel
    var mode: PrepMode = .random
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            ZStack {
                Color.dsBg.ignoresSafeArea()
                if viewModel.questions.isEmpty { emptyState } else { mainContent }
            }
            .navigationBarHidden(true)
            .toolbar(.hidden, for: .navigationBar)
            .task {
                await loadQuestionsForMode()
            }
        }
    }

    private func loadQuestionsForMode() async {
        guard viewModel.questions.isEmpty else { return }
        switch mode {
        case .mistakes:
            await viewModel.loadWrongQuestions()
        case .random:
            await viewModel.loadRandomQuestions()
        case .topic, .ai:
            await viewModel.loadRandomQuestions()
        }
    }

    private var emptyState: some View {
        VStack(spacing: 16) {
            Text("Сұрақтар жоқ")
                .font(.system(size: 20, weight: .semibold))
                .foregroundColor(.dsText)
            Text(viewModel.error ?? "Басқа режимді таңдаңыз")
                .foregroundColor(.dsText2)
            Button("Артқа") { dismiss() }
                .foregroundColor(.dsBlue)
        }
    }

    private var mainContent: some View {
        VStack(spacing: 0) {
            topBar
            progressBar
            questionScroll
            bottomNav
        }
    }

    private var topBar: some View {
        HStack {
            Button("Артқа") { dismiss() }
                .foregroundColor(.dsRed)
            Spacer()
            Text("Даярлық")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.dsText)
            Spacer()
            Button("Аяқтау") { viewModel.finish(); dismiss() }
                .foregroundColor(.dsBlue)
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

    private var questionScroll: some View {
        ScrollViewReader { proxy in
            ScrollView {
                LazyVStack(spacing: 16) {
                    ForEach(Array(viewModel.questions.enumerated()), id: \.element.id) { index, question in
                        PrepQuestionCard(
                            question: question,
                            index: index,
                            selectedAnswers: Binding(
                                get: { viewModel.userAnswers[question.id] ?? [] },
                                set: { viewModel.submitAnswer(questionId: question.id, selectedOptionIds: $0) }
                            ),
                            showResult: viewModel.userAnswers[question.id] != nil,
                            correctOptionIds: question.correctOptionIds
                        )
                        .id(index)
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
        }
        .padding(.horizontal, 16)
        .padding(.bottom, 16)
    }
}

// MARK: - PrepQuestionCard (light theme)

struct PrepQuestionCard: View {
    let question: Question
    let index: Int
    @Binding var selectedAnswers: [String]
    let showResult: Bool
    let correctOptionIds: [String]

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            headerView
            questionTextView
            codeSnippetView
            readingPassageView
            optionsView
        }
        .padding(16)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 16))
        .dsCardShadow()
    }

    private var headerView: some View {
        HStack {
            Text(question.topic)
                .font(.system(size: 12, weight: .semibold))
                .foregroundColor(.dsGreen)
                .padding(.horizontal, 10)
                .padding(.vertical, 4)
                .background(Color.dsGreenLight)
                .clipShape(Capsule())
            if let diff = question.difficulty {
                Text(diff.rawValue.capitalized)
                    .font(.system(size: 11, weight: .medium))
                    .foregroundColor(diffColor(diff))
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(diffColor(diff).opacity(0.1))
                    .clipShape(Capsule())
            }
            Spacer()
            Text("\(index + 1)")
                .font(.system(size: 12, weight: .semibold))
                .foregroundColor(.dsText2)
        }
    }

    private var questionTextView: some View {
        Text(question.text)
            .font(.system(size: 15))
            .foregroundColor(.dsText)
            .lineSpacing(4)
    }

    private var codeSnippetView: some View {
        Group {
            if let code = question.codeSnippet {
                Text(code)
                    .font(.system(.caption, design: .monospaced))
                    .foregroundColor(.dsGreen)
                    .padding(12)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(Color(red: 30/255, green: 30/255, blue: 30/255))
                    .clipShape(RoundedRectangle(cornerRadius: 8))
            }
        }
    }

    private var readingPassageView: some View {
        Group {
            if let passage = question.readingPassage {
                Text(passage)
                    .font(.system(size: 13))
                    .foregroundColor(.dsText2)
                    .padding(12)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(Color.dsBg)
                    .clipShape(RoundedRectangle(cornerRadius: 8))
            }
        }
    }

    private var optionsView: some View {
        VStack(spacing: 8) {
            ForEach(question.options) { option in
                Button(action: { toggleOption(option) }) {
                    HStack(spacing: 12) {
                        Image(systemName: iconName(for: option))
                            .foregroundColor(iconColor(for: option))
                        Text(option.text)
                            .font(.system(size: 14))
                            .foregroundColor(textColor(for: option))
                            .multilineTextAlignment(.leading)
                        Spacer()
                        if showResult && correctOptionIds.contains(option.id) {
                            Image(systemName: "checkmark.circle")
                                .foregroundColor(.dsGreen)
                        }
                    }
                    .padding(14)
                    .background(bgColor(for: option))
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .stroke(borderColor(for: option), lineWidth: 1)
                    )
                }
                .buttonStyle(.plain)
                .disabled(showResult)
            }
        }
    }

    private func toggleOption(_ option: Option) {
        guard !showResult else { return }
        if question.type == .multiple {
            if selectedAnswers.contains(option.id) {
                selectedAnswers.removeAll { $0 == option.id }
            } else {
                selectedAnswers.append(option.id)
            }
        } else {
            selectedAnswers = [option.id]
        }
    }

    private func iconName(for option: Option) -> String {
        guard showResult else {
            return selectedAnswers.contains(option.id) ? "checkmark.circle.fill" : "circle"
        }
        if correctOptionIds.contains(option.id) { return "checkmark.circle.fill" }
        if selectedAnswers.contains(option.id) { return "xmark.circle.fill" }
        return "circle"
    }

    private func iconColor(for option: Option) -> Color {
        guard showResult else {
            return selectedAnswers.contains(option.id) ? .dsGreen : .dsText3
        }
        if correctOptionIds.contains(option.id) { return .dsGreen }
        if selectedAnswers.contains(option.id) { return .dsRed }
        return .dsText3
    }

    private func textColor(for option: Option) -> Color {
        guard showResult else { return .dsText }
        if correctOptionIds.contains(option.id) { return .dsGreenDark }
        if selectedAnswers.contains(option.id) { return .dsRed }
        return .dsText
    }

    private func bgColor(for option: Option) -> Color {
        guard showResult else {
            return selectedAnswers.contains(option.id) ? Color.dsGreenLight : Color.dsSurface
        }
        if correctOptionIds.contains(option.id) { return Color.dsGreenLight }
        if selectedAnswers.contains(option.id) { return Color.dsRedLight }
        return Color.dsSurface
    }

    private func borderColor(for option: Option) -> Color {
        guard showResult else {
            return selectedAnswers.contains(option.id) ? .dsGreen : .dsBorder
        }
        if correctOptionIds.contains(option.id) { return .dsGreen }
        if selectedAnswers.contains(option.id) { return .dsRed }
        return .dsBorder
    }

    private func diffColor(_ d: Difficulty) -> Color {
        switch d {
        case .easy: return .dsGreen
        case .medium: return .dsGold
        case .hard: return .dsRed
        }
    }
}
