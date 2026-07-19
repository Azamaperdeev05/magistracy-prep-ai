import SwiftUI

struct QuestionCardView: View {
    let question: Question
    let index: Int
    @Binding var selectedAnswers: [String]

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
            Text(question.subjectDisplayName ?? "")
                .font(.system(size: 12, weight: .semibold))
                .foregroundColor(.dsBlue)
                .padding(.horizontal, 10)
                .padding(.vertical, 4)
                .background(Color.dsBlueLight)
                .clipShape(Capsule())

            if let difficulty = question.difficulty {
                Text(difficulty.rawValue.capitalized)
                    .font(.system(size: 11, weight: .medium))
                    .foregroundColor(difficultyColor(difficulty))
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(difficultyColor(difficulty).opacity(0.1))
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
                    .foregroundColor(Color(red: 34/255, green: 197/255, blue: 94/255))
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
                        optionDot(isSelected: isSelected(option.id))
                        Text(option.text)
                            .font(.system(size: 14))
                            .foregroundColor(isSelected(option.id) ? .dsText : .dsText)
                            .multilineTextAlignment(.leading)
                        Spacer()
                    }
                    .padding(14)
                    .background(isSelected(option.id) ? Color.dsGreenLight : Color.dsSurface)
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .stroke(
                                isSelected(option.id) ? Color.dsGreen : Color.dsBorder,
                                lineWidth: isSelected(option.id) ? 2 : 1
                            )
                    )
                }
                .buttonStyle(.plain)
            }
        }
    }

    private func optionDot(isSelected: Bool) -> some View {
        ZStack {
            Circle()
                .stroke(isSelected ? Color.dsGreen : Color.dsBorder, lineWidth: 2)
                .frame(width: 20, height: 20)
            if isSelected {
                Circle()
                    .fill(Color.dsGreen)
                    .frame(width: 10, height: 10)
            }
        }
    }

    private func toggleOption(_ option: Option) {
        if question.type == .multiple {
            if isSelected(option.id) {
                selectedAnswers.removeAll { $0 == option.id }
            } else {
                selectedAnswers.append(option.id)
            }
        } else {
            selectedAnswers = [option.id]
        }
    }

    private func isSelected(_ id: String) -> Bool {
        selectedAnswers.contains(id)
    }

    private func difficultyColor(_ difficulty: Difficulty) -> Color {
        switch difficulty {
        case .easy: return .dsGreen
        case .medium: return .dsGold
        case .hard: return .dsRed
        }
    }
}
