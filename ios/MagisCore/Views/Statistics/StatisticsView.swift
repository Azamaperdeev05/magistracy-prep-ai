import SwiftUI
import Charts

struct StatisticsView: View {
    @State private var viewModel = StatisticsViewModel()

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 16) {
                    if viewModel.isLoading {
                        ProgressView()
                            .padding(.top, 80)
                    } else if viewModel.totalTests == 0 {
                        emptyState
                    } else {
                        summaryCards
                        scoreChart
                        subjectBreakdown
                        weakTopicsSection
                        recentTestsSection
                    }
                }
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
            }
            .background(Color.dsBg)
            .navigationTitle("Статистика")
            .navigationBarTitleDisplayMode(.large)
            .task { await viewModel.loadStatistics() }
        }
    }

    // MARK: - Empty State

    private var emptyState: some View {
        VStack(spacing: 16) {
            Spacer(minLength: 60)
            Image(systemName: "chart.bar.xaxis.ascending")
                .font(.system(size: 60))
                .foregroundColor(.dsText3)
            Text("Әлі статистика жоқ")
                .font(.system(size: 20, weight: .semibold))
                .foregroundColor(.dsText)
            Text("Тест тапсырып, нәтижелеріңізді\nосында көре аласыз")
                .font(.system(size: 14))
                .foregroundColor(.dsText2)
                .multilineTextAlignment(.center)
                .lineSpacing(4)
            Spacer(minLength: 60)
        }
        .frame(maxWidth: .infinity)
    }

    // MARK: - Summary Cards

    private var summaryCards: some View {
        VStack(spacing: 10) {
            HStack(spacing: 10) {
                statCard(
                    title: "Өткен тесттер",
                    value: "\(viewModel.totalTests)",
                    icon: "checkmark.circle.fill",
                    color: .dsGreen
                )
                statCard(
                    title: "Орташа балл",
                    value: String(format: "%.0f", viewModel.averageScore),
                    icon: "chart.line.uptrend.xyaxis",
                    color: .dsBlue
                )
            }
            HStack(spacing: 10) {
                statCard(
                    title: "Ең жоғары",
                    value: "\(viewModel.bestScore)",
                    icon: "trophy.fill",
                    color: .dsGold
                )
                statCard(
                    title: "Барлық сұрақ",
                    value: "\(viewModel.totalQuestions)",
                    icon: "list.number",
                    color: Color(red: 168/255, green: 85/255, blue: 247/255)
                )
            }
        }
    }

    private func statCard(title: String, value: String, icon: String, color: Color) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack(spacing: 6) {
                Image(systemName: icon)
                    .font(.system(size: 14))
                    .foregroundColor(color)
                Text(title)
                    .font(.system(size: 12))
                    .foregroundColor(.dsText2)
            }
            Text(value)
                .font(.system(size: 24, weight: .bold))
                .foregroundColor(.dsText)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(14)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .shadow(color: Color.black.opacity(0.04), radius: 4, x: 0, y: 1)
    }

    // MARK: - Score Chart

    private var scoreChart: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Балл dinamiкасы")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.dsText)

            if viewModel.scoreHistory.count > 1 {
                Chart(viewModel.scoreHistory) { point in
                    LineMark(
                        x: .value("Күн", point.date),
                        y: .value("Балл", point.score)
                    )
                    .foregroundStyle(Color(red: 59/255, green: 111/255, blue: 237/255))
                    .lineStyle(StrokeStyle(lineWidth: 2.5))

                    AreaMark(
                        x: .value("Күн", point.date),
                        y: .value("Балл", point.score)
                    )
                    .foregroundStyle(
                        LinearGradient(
                            colors: [Color(red: 59/255, green: 111/255, blue: 237/255).opacity(0.2), Color(red: 59/255, green: 111/255, blue: 237/255).opacity(0.02)],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )
                }
                .chartXAxis {
                    AxisMarks { value in
                        AxisGridLine()
                    }
                }
                .chartYAxis {
                    AxisMarks { value in
                        AxisGridLine(stroke: StrokeStyle(lineWidth: 0.5, dash: [4]))
                    }
                }
                .frame(height: 180)
            } else {
                VStack(spacing: 8) {
                    Image(systemName: "chart.xyaxis.line")
                        .font(.system(size: 30))
                        .foregroundColor(.dsText3)
                    Text("Кемінде 2 тест тапсыру керек")
                        .font(.system(size: 13))
                        .foregroundColor(.dsText3)
                }
                .frame(maxWidth: .infinity)
                .frame(height: 140)
            }
        }
        .padding(14)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .shadow(color: Color.black.opacity(0.04), radius: 4, x: 0, y: 1)
    }

    // MARK: - Subject Breakdown

    private var subjectBreakdown: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("Пәндер бойынша")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.dsText)

            ForEach(viewModel.subjectStats.prefix(6)) { stat in
                HStack(spacing: 10) {
                    Text(stat.name)
                        .font(.system(size: 13))
                        .foregroundColor(.dsText)
                        .lineLimit(1)
                        .frame(width: 100, alignment: .leading)

                    GeometryReader { geo in
                        ZStack(alignment: .leading) {
                            RoundedRectangle(cornerRadius: 4)
                                .fill(Color.dsBorder)
                                .frame(height: 8)
                            RoundedRectangle(cornerRadius: 4)
                                .fill(stat.percentage >= 60 ? Color.dsGreen : Color.dsRed)
                                .frame(width: geo.size.width * min(stat.percentage / 100, 1), height: 8)
                        }
                    }
                    .frame(height: 8)

                    Text("\(Int(stat.percentage))%")
                        .font(.system(size: 12, weight: .semibold))
                        .foregroundColor(stat.percentage >= 60 ? .dsGreenDark : .dsRed)
                        .frame(width: 36, alignment: .trailing)
                }
            }
        }
        .padding(14)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .shadow(color: Color.black.opacity(0.04), radius: 4, x: 0, y: 1)
    }

    // MARK: - Weak Topics

    private var weakTopicsSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                Image(systemName: "lightbulb.fill")
                    .foregroundColor(.dsGold)
                Text("Әлсіз тақырыптар")
                    .font(.system(size: 15, weight: .semibold))
                    .foregroundColor(.dsText)
            }

            if viewModel.weakTopics.isEmpty {
                Text("Әлсіз тақырыптар табылмады")
                    .font(.system(size: 13))
                    .foregroundColor(.dsText3)
                    .padding(.vertical, 8)
            } else {
                ForEach(viewModel.weakTopics) { topic in
                    HStack(spacing: 8) {
                        Circle()
                            .fill(Color.dsRed.opacity(0.15))
                            .frame(width: 8, height: 8)
                        Text(topic.topic)
                            .font(.system(size: 13))
                            .foregroundColor(.dsText)
                        Spacer()
                        Text("\(topic.errorCount) қате")
                            .font(.system(size: 12))
                            .foregroundColor(.dsRed)
                    }
                    .padding(.vertical, 4)
                }
            }
        }
        .padding(14)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .shadow(color: Color.black.opacity(0.04), radius: 4, x: 0, y: 1)
    }

    // MARK: - Recent Tests

    private var recentTestsSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text("Соңғы тесттер")
                .font(.system(size: 15, weight: .semibold))
                .foregroundColor(.dsText)

            ForEach(viewModel.recentTests.prefix(5)) { result in
                HStack(spacing: 12) {
                    VStack(alignment: .leading, spacing: 2) {
                        Text(formatDate(result.testDate))
                            .font(.system(size: 11))
                            .foregroundColor(.dsText3)
                        Text(result.specialtyCode ?? "Тест")
                            .font(.system(size: 13, weight: .medium))
                            .foregroundColor(.dsText)
                    }
                    Spacer()
                    VStack(alignment: .trailing, spacing: 2) {
                        Text("\(result.score)")
                            .font(.system(size: 18, weight: .bold))
                            .foregroundColor(resultScoreColor(result))
                        Text("/ \(result.totalQuestions)")
                            .font(.system(size: 11))
                            .foregroundColor(.dsText3)
                    }
                }
                .padding(.vertical, 6)
                .overlay(
                    Divider().background(Color.dsBorder),
                    alignment: .bottom
                )
            }
        }
        .padding(14)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .shadow(color: Color.black.opacity(0.04), radius: 4, x: 0, y: 1)
    }

    // MARK: - Helpers

    private func resultScoreColor(_ result: SavedTestResult) -> Color {
        let pct = result.totalQuestions > 0 ? Double(result.score) / Double(result.totalQuestions) : 0
        return pct >= 0.6 ? .dsGreenDark : .dsRed
    }

    private func formatDate(_ date: Date) -> String {
        let df = DateFormatter()
        df.dateStyle = .medium
        df.timeStyle = .short
        df.locale = Locale(identifier: "kk_KZ")
        return df.string(from: date)
    }
}
