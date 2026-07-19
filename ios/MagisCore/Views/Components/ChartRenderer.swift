import SwiftUI

struct ChartRenderer: View {
    let chartData: ChartData

    var body: some View {
        VStack {
            switch chartData {
            case .bar(let data, let labels, _, let title):
                BarChartView(data: data, labels: labels, title: title)
            case .pie(let data, let labels, _):
                PieChartView(data: data, labels: labels)
            case .line(let data, let labels, _):
                LineChartView(data: data, labels: labels)
            case .table(let headers, let rows):
                TableChartView(headers: headers, rows: rows)
            case .math(let expressions, _):
                MathChartView(expressions: expressions)
            case .comparison(let a, let b):
                ComparisonView(columnA: a, columnB: b)
            case .comparisonTable(_, let a, let b, _):
                ComparisonTableView(columnA: a, columnB: b)
            case .circle(let radius, let label, _):
                CircleView(radius: radius, label: label)
            case .tgoVenn(let ll, let rl, let lt, let rt, let i, _):
                VennView(leftLabel: ll, rightLabel: rl, leftTotal: lt, rightTotal: rt, intersection: i)
            case .tgoStepPerimeter(let w, let h):
                StepPerimeterView(widthLabel: w, heightLabel: h)
            default:
                Text("Диаграмма әлі қол жетімді емес")
                    .foregroundColor(.gray)
            }
        }
        .padding()
        .background(Color(.systemGray6).opacity(0.05))
        .cornerRadius(12)
    }
}

// MARK: - Sub-views
struct BarChartView: View {
    let data: [Double]
    let labels: [String]
    let title: String?

    var body: some View {
        VStack(spacing: 8) {
            if let title = title {
                Text(title).foregroundColor(.white).font(.headline)
            }
            HStack(alignment: .bottom, spacing: 8) {
                ForEach(Array(zip(data, labels).enumerated()), id: \.offset) { _, pair in
                    VStack {
                        Text("\(Int(pair.0))")
                            .foregroundColor(.white)
                            .font(.caption)
                        RoundedRectangle(cornerRadius: 4)
                            .fill(Color.blue)
                            .frame(width: 20, height: max(CGFloat(pair.0), 4))
                        Text(pair.1)
                            .foregroundColor(.gray)
                            .font(.caption2)
                    }
                }
            }
        }
    }
}

struct PieChartView: View {
    let data: [Double]
    let labels: [String]

    var body: some View {
        HStack(spacing: 16) {
            ZStack {
                ForEach(Array(data.enumerated()), id: \.offset) { index, value in
                    PieSlice(startAngle: startAngle(for: index),
                             endAngle: endAngle(for: index))
                        .fill(Color.blue.opacity(0.3 + Double(index) * 0.2))
                }
            }
            .frame(width: 120, height: 120)

            VStack(alignment: .leading, spacing: 4) {
                ForEach(Array(zip(labels, data).enumerated()), id: \.offset) { _, pair in
                    HStack {
                        Circle().fill(Color.blue.opacity(0.5)).frame(width: 8, height: 8)
                        Text("\(pair.0): \(Int(pair.1))")
                            .foregroundColor(.gray)
                            .font(.caption)
                    }
                }
            }
        }
    }

    private func startAngle(for index: Int) -> Angle {
        let total = data.reduce(0, +)
        let before = data.prefix(index).reduce(0, +)
        return .degrees(before / total * 360 - 90)
    }

    private func endAngle(for index: Int) -> Angle {
        let total = data.reduce(0, +)
        let until = data.prefix(index + 1).reduce(0, +)
        return .degrees(until / total * 360 - 90)
    }
}

struct PieSlice: Shape {
    let startAngle: Angle
    let endAngle: Angle

    func path(in rect: CGRect) -> Path {
        Path { path in
            let center = CGPoint(x: rect.midX, y: rect.midY)
            path.move(to: center)
            path.addArc(center: center, radius: rect.width / 2,
                       startAngle: startAngle, endAngle: endAngle, clockwise: false)
            path.closeSubpath()
        }
    }
}

struct LineChartView: View {
    let data: [Double]
    let labels: [String]

    var body: some View {
        Text("Line Chart — \(data.count) points")
            .foregroundColor(.white)
    }
}

struct TableChartView: View {
    let headers: [String]
    let rows: [[ChartData.CodableValue]]

    var body: some View {
        VStack(spacing: 0) {
            HStack {
                ForEach(headers, id: \.self) { header in
                    Text(header)
                        .foregroundColor(.blue)
                        .font(.caption.bold())
                        .frame(maxWidth: .infinity)
                }
            }
            .padding(.vertical, 8)
            .background(Color.blue.opacity(0.1))

            Divider().background(.gray)

            ForEach(Array(rows.enumerated()), id: \.offset) { _, row in
                HStack {
                    ForEach(row, id: \.self) { value in
                        Text(value.displayString)
                            .foregroundColor(.white)
                            .font(.caption)
                            .frame(maxWidth: .infinity)
                    }
                }
                .padding(.vertical, 4)
            }
        }
        .cornerRadius(8)
        .overlay(RoundedRectangle(cornerRadius: 8).stroke(Color.gray.opacity(0.3)))
    }
}

struct MathChartView: View {
    let expressions: [ChartData.MathExpression]

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            ForEach(expressions, id: \.label) { expr in
                HStack {
                    Text(expr.label + ":")
                        .foregroundColor(.blue)
                    Text(expr.value)
                        .foregroundColor(.white)
                }
                .font(.system(.body, design: .monospaced))
            }
        }
    }
}

struct ComparisonView: View {
    let columnA: String
    let columnB: String

    var body: some View {
        HStack(spacing: 16) {
            VStack { Text("A").foregroundColor(.blue); Text(columnA).foregroundColor(.white).font(.caption) }
            VStack { Text("B").foregroundColor(.blue); Text(columnB).foregroundColor(.white).font(.caption) }
        }
    }
}

struct ComparisonTableView: View {
    let columnA: ChartData.ColumnInfo
    let columnB: ChartData.ColumnInfo

    var body: some View {
        HStack(spacing: 8) {
            columnCard(columnA.header, columnA.content)
            columnCard(columnB.header, columnB.content)
        }
    }

    private func columnCard(_ header: String, _ content: String) -> some View {
        VStack(spacing: 8) {
            Text(header).foregroundColor(.blue).font(.headline)
            Text(content).foregroundColor(.white).font(.caption)
        }
        .frame(maxWidth: .infinity)
        .padding()
        .background(Color(.systemGray6).opacity(0.1))
        .cornerRadius(8)
    }
}

struct CircleView: View {
    let radius: Double
    let label: String?

    var body: some View {
        VStack(spacing: 8) {
            Circle()
                .stroke(Color.blue, lineWidth: 2)
                .frame(width: CGFloat(radius * 2), height: CGFloat(radius * 2))
            if let label = label {
                Text("R = \(label)")
                    .foregroundColor(.white)
                    .font(.caption)
            }
        }
    }
}

struct VennView: View {
    let leftLabel: String
    let rightLabel: String
    let leftTotal: Int
    let rightTotal: Int
    let intersection: Int

    var body: some View {
        HStack(spacing: 0) {
            Text("\(leftLabel): \(leftTotal)")
                .foregroundColor(.blue)
                .font(.caption)
                .frame(maxWidth: .infinity)
            Text("∩: \(intersection)")
                .foregroundColor(.green)
                .font(.caption)
                .frame(maxWidth: .infinity)
            Text("\(rightLabel): \(rightTotal)")
                .foregroundColor(.orange)
                .font(.caption)
                .frame(maxWidth: .infinity)
        }
    }
}

struct StepPerimeterView: View {
    let widthLabel: String
    let heightLabel: String

    var body: some View {
        HStack(spacing: 16) {
            Text("Ені: \(widthLabel)")
                .foregroundColor(.white)
            Text("Биіктігі: \(heightLabel)")
                .foregroundColor(.white)
        }
        .font(.caption)
    }
}

extension ChartData.CodableValue {
    var displayString: String {
        switch self {
        case .string(let s): return s
        case .number(let n): return String(format: "%.1f", n)
        }
    }
}
