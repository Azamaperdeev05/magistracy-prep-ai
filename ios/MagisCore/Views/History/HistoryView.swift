import SwiftUI

struct HistoryView: View {
    @State private var results: [SavedTestResult] = []
    @State private var isLoading = true
    @State private var error: String?

    var body: some View {
        ScrollView {
            VStack(spacing: 12) {
                if isLoading {
                    ProgressView()
                        .padding(.top, 60)
                } else if results.isEmpty {
                    emptyState
                } else {
                    header
                    ForEach(results) { result in
                        historyCard(result)
                    }
                }
            }
            .padding(.horizontal, 20)
            .padding(.top, 16)
        }
        .background(Color.dsBg)
        .navigationTitle("Тест тарихы")
        .navigationBarTitleDisplayMode(.inline)
        .task { await loadHistory() }
    }

    private var header: some View {
        HStack {
            Text("Барлық өткен тесттеріңіз")
                .font(.system(size: 13))
                .foregroundColor(.dsText2)
            Spacer()
        }
    }

    private var emptyState: some View {
        VStack(spacing: 16) {
            Image(systemName: "clock.arrow.circlepath")
                .font(.system(size: 60))
                .foregroundColor(.dsText3)
            Text("Тест тарихы бос")
                .font(.system(size: 20, weight: .semibold))
                .foregroundColor(.dsText)
            Text("Тест тапсырғаннан кейін нәтижелер осында сақталады")
                .font(.system(size: 14))
                .foregroundColor(.dsText2)
                .multilineTextAlignment(.center)
        }
        .padding(.top, 60)
    }

    private func historyCard(_ result: SavedTestResult) -> some View {
        DSCard(padding: 14) {
            HStack {
                VStack(alignment: .leading, spacing: 4) {
                    if let date = (result.testDate as Date?) {
                        Text(formatDate(date))
                            .font(.system(size: 11))
                            .foregroundColor(.dsText3)
                    }
                    Text(specialtyName(for: result))
                        .font(.system(size: 14, weight: .medium))
                        .foregroundColor(.dsText)
                    Text(specialtyCode(for: result))
                        .font(.system(size: 11, weight: .semibold))
                        .foregroundColor(.dsBlue)
                        .padding(.horizontal, 8)
                        .padding(.vertical, 2)
                        .background(Color.dsBlueLight)
                        .clipShape(Capsule())
                }

                Spacer()

                VStack(alignment: .trailing, spacing: 4) {
                    Text("\(result.score)")
                        .font(.system(size: 20, weight: .bold))
                        .foregroundColor(passed(result) ? .dsGreenDark : .dsGold)
                    if passed(result) {
                        DSBadge("Өтті", bg: .dsGreenLight, fg: .dsGreenDark)
                    } else {
                        DSBadge("Өтпеді", bg: Color(red: 1, green: 243/255, blue: 224/255), fg: .dsGold)
                    }
                }
            }
        }
    }

    private func passed(_ result: SavedTestResult) -> Bool {
        result.totalQuestions > 0 && Double(result.score) / Double(result.totalQuestions) >= 0.6
    }

    private func specialtyName(for result: SavedTestResult) -> String {
        if let code = result.specialtyCode, let spec = SpecialtiesData.byCode(code) {
            return spec.name
        }
        return "Тест"
    }

    private func specialtyCode(for result: SavedTestResult) -> String {
        return result.specialtyCode ?? ""
    }

    private func formatDate(_ date: Date) -> String {
        let df = DateFormatter()
        df.dateStyle = .medium
        df.timeStyle = .short
        df.locale = Locale(identifier: "kk_KZ")
        return df.string(from: date)
    }

    private func loadHistory() async {
        isLoading = true
        error = nil
        do {
            results = try await HistoryService.shared.fetchHistory()
        } catch {
            self.error = error.localizedDescription
        }
        isLoading = false
    }
}
