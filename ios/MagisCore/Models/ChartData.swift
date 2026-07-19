import Foundation

enum ChartData: Codable, Equatable {
    case bar(data: [Double], labels: [String], colors: [String]?, title: String?)
    case pie(data: [Double], labels: [String], colors: [String]?)
    case line(data: [Double], labels: [String], color: String?)
    case table(headers: [String], rows: [[CodableValue]])
    case comparison(columnA: String, columnB: String)
    case comparisonTable(title: String?, columnA: ColumnInfo, columnB: ColumnInfo, question: String?)
    case circle(radius: Double, label: String?, showCenter: Bool?)
    case math(expressions: [MathExpression], question: String?)
    case tgoComparisonGrid(title: String?, columns: [TgoColumn], footer: String?)
    case tgoGroupedBar(title: String?, yMin: Double?, yMax: Double?, categories: [String], series: [SeriesInfo])
    case tgoStepPerimeter(widthLabel: String, heightLabel: String)
    case tgoVenn(leftLabel: String, rightLabel: String, leftTotal: Int, rightTotal: Int, intersection: Int, outside: Int?)
    case tgoShadedRectangle(widthParts: [PartInfo], heightParts: [PartInfo])
    case tgoTriangleSides(leftSide: String, rightSide: String, baseLabel: String)
    case tgoInscribedSquare(radiusLabel: String)
    case tgoSquareMosaic(unitAreaLabel: String)

    struct ColumnInfo: Codable, Equatable {
        let header: String
        let content: String
    }

    struct MathExpression: Codable, Equatable {
        let label: String
        let value: String
    }

    struct TgoColumn: Codable, Equatable {
        let header: String
        let lines: [String]?
        let visual: TgoVisualData?
    }

    struct SeriesInfo: Codable, Equatable {
        let name: String
        let color: String
        let values: [Double]
    }

    struct PartInfo: Codable, Equatable {
        let label: String
        let value: Double
    }

    enum TgoVisualData: Codable, Equatable {
        case triangleBc(totalBase: Double, rightBase: Double, leftHeight: Double)
        case miniStep(widthLabel: String, heightLabel: String)
        case miniExpression(lines: [String])

        enum CodingKeys: String, CodingKey {
            case type, totalBase, rightBase, leftHeight, widthLabel, heightLabel, lines
        }

        init(from decoder: Decoder) throws {
            let container = try decoder.container(keyedBy: CodingKeys.self)
            let type = try container.decode(String.self, forKey: .type)
            switch type {
            case "triangle_bc":
                self = .triangleBc(
                    totalBase: try container.decode(Double.self, forKey: .totalBase),
                    rightBase: try container.decode(Double.self, forKey: .rightBase),
                    leftHeight: try container.decode(Double.self, forKey: .leftHeight)
                )
            case "mini_step":
                self = .miniStep(
                    widthLabel: try container.decode(String.self, forKey: .widthLabel),
                    heightLabel: try container.decode(String.self, forKey: .heightLabel)
                )
            case "mini_expression":
                self = .miniExpression(
                    lines: try container.decode([String].self, forKey: .lines)
                )
            default:
                throw DecodingError.dataCorrupted(.init(
                    codingPath: decoder.codingPath,
                    debugDescription: "Unknown TgoVisualData type: \(type)")
                )
            }
        }

        func encode(to encoder: Encoder) throws {
            var container = encoder.container(keyedBy: CodingKeys.self)
            switch self {
            case .triangleBc(let tb, let rb, let lh):
                try container.encode("triangle_bc", forKey: .type)
                try container.encode(tb, forKey: .totalBase)
                try container.encode(rb, forKey: .rightBase)
                try container.encode(lh, forKey: .leftHeight)
            case .miniStep(let w, let h):
                try container.encode("mini_step", forKey: .type)
                try container.encode(w, forKey: .widthLabel)
                try container.encode(h, forKey: .heightLabel)
            case .miniExpression(let lines):
                try container.encode("mini_expression", forKey: .type)
                try container.encode(lines, forKey: .lines)
            }
        }
    }

    enum CodableValue: Codable, Equatable, Hashable {
        case string(String)
        case number(Double)

        init(from decoder: Decoder) throws {
            let container = try decoder.singleValueContainer()
            if let str = try? container.decode(String.self) {
                self = .string(str)
            } else if let num = try? container.decode(Double.self) {
                self = .number(num)
            } else {
                throw DecodingError.typeMismatch(CodableValue.self, DecodingError.Context(codingPath: decoder.codingPath, debugDescription: "Expected String or Number"))
            }
        }

        func encode(to encoder: Encoder) throws {
            var container = encoder.singleValueContainer()
            switch self {
            case .string(let str): try container.encode(str)
            case .number(let num): try container.encode(num)
            }
        }
    }

    enum CodingKeys: String, CodingKey {
        case type, data, labels, colors, title, headers, rows
        case columnA, columnB, color, question, columns, footer
        case yMin, yMax, categories, series
        case widthLabel, heightLabel, radius, label, showCenter
        case expressions, leftLabel, rightLabel, leftTotal, rightTotal, intersection, outside
        case widthParts, heightParts, leftSide, rightSide, baseLabel, radiusLabel, unitAreaLabel
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let type = try container.decode(String.self, forKey: .type)
        switch type {
        case "bar":
            let data = try container.decode([Double].self, forKey: .data)
            let labels = try container.decode([String].self, forKey: .labels)
            let colors = try container.decodeIfPresent([String].self, forKey: .colors)
            let title = try container.decodeIfPresent(String.self, forKey: .title)
            self = .bar(data: data, labels: labels, colors: colors, title: title)
        case "pie":
            let data = try container.decode([Double].self, forKey: .data)
            let labels = try container.decode([String].self, forKey: .labels)
            let colors = try container.decodeIfPresent([String].self, forKey: .colors)
            self = .pie(data: data, labels: labels, colors: colors)
        case "line":
            let data = try container.decode([Double].self, forKey: .data)
            let labels = try container.decode([String].self, forKey: .labels)
            let color = try container.decodeIfPresent(String.self, forKey: .color)
            self = .line(data: data, labels: labels, color: color)
        case "table":
            let headers = try container.decode([String].self, forKey: .headers)
            let rows = try container.decode([[CodableValue]].self, forKey: .rows)
            self = .table(headers: headers, rows: rows)
        case "comparison":
            let a = try container.decode(String.self, forKey: .columnA)
            let b = try container.decode(String.self, forKey: .columnB)
            self = .comparison(columnA: a, columnB: b)
        case "comparison_table":
            let title = try container.decodeIfPresent(String.self, forKey: .title)
            let a = try container.decode(ColumnInfo.self, forKey: .columnA)
            let b = try container.decode(ColumnInfo.self, forKey: .columnB)
            let q = try container.decodeIfPresent(String.self, forKey: .question)
            self = .comparisonTable(title: title, columnA: a, columnB: b, question: q)
        case "circle":
            let r = try container.decode(Double.self, forKey: .radius)
            let l = try container.decodeIfPresent(String.self, forKey: .label)
            let s = try container.decodeIfPresent(Bool.self, forKey: .showCenter)
            self = .circle(radius: r, label: l, showCenter: s)
        case "math":
            let e = try container.decode([MathExpression].self, forKey: .expressions)
            let q = try container.decodeIfPresent(String.self, forKey: .question)
            self = .math(expressions: e, question: q)
        case "tgo_comparison_grid":
            let t = try container.decodeIfPresent(String.self, forKey: .title)
            let c = try container.decode([TgoColumn].self, forKey: .columns)
            let f = try container.decodeIfPresent(String.self, forKey: .footer)
            self = .tgoComparisonGrid(title: t, columns: c, footer: f)
        case "tgo_grouped_bar":
            let t = try container.decodeIfPresent(String.self, forKey: .title)
            let yMin = try container.decodeIfPresent(Double.self, forKey: .yMin)
            let yMax = try container.decodeIfPresent(Double.self, forKey: .yMax)
            let cats = try container.decode([String].self, forKey: .categories)
            let s = try container.decode([SeriesInfo].self, forKey: .series)
            self = .tgoGroupedBar(title: t, yMin: yMin, yMax: yMax, categories: cats, series: s)
        case "tgo_step_perimeter":
            let w = try container.decode(String.self, forKey: .widthLabel)
            let h = try container.decode(String.self, forKey: .heightLabel)
            self = .tgoStepPerimeter(widthLabel: w, heightLabel: h)
        case "tgo_venn":
            self = .tgoVenn(
                leftLabel: try container.decode(String.self, forKey: .leftLabel),
                rightLabel: try container.decode(String.self, forKey: .rightLabel),
                leftTotal: try container.decode(Int.self, forKey: .leftTotal),
                rightTotal: try container.decode(Int.self, forKey: .rightTotal),
                intersection: try container.decode(Int.self, forKey: .intersection),
                outside: try container.decodeIfPresent(Int.self, forKey: .outside)
            )
        case "tgo_shaded_rectangle":
            self = .tgoShadedRectangle(
                widthParts: try container.decode([PartInfo].self, forKey: .widthParts),
                heightParts: try container.decode([PartInfo].self, forKey: .heightParts)
            )
        case "tgo_triangle_sides":
            self = .tgoTriangleSides(
                leftSide: try container.decode(String.self, forKey: .leftSide),
                rightSide: try container.decode(String.self, forKey: .rightSide),
                baseLabel: try container.decode(String.self, forKey: .baseLabel)
            )
        case "tgo_inscribed_square":
            self = .tgoInscribedSquare(radiusLabel: try container.decode(String.self, forKey: .radiusLabel))
        case "tgo_square_mosaic":
            self = .tgoSquareMosaic(unitAreaLabel: try container.decode(String.self, forKey: .unitAreaLabel))
        default:
            throw DecodingError.dataCorrupted(.init(codingPath: decoder.codingPath, debugDescription: "Unknown chart type: \(type)"))
        }
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        switch self {
        case .bar(let data, let labels, let colors, let title):
            try container.encode("bar", forKey: .type)
            try container.encode(data, forKey: .data)
            try container.encode(labels, forKey: .labels)
            try container.encodeIfPresent(colors, forKey: .colors)
            try container.encodeIfPresent(title, forKey: .title)
        case .pie(let data, let labels, let colors):
            try container.encode("pie", forKey: .type)
            try container.encode(data, forKey: .data)
            try container.encode(labels, forKey: .labels)
            try container.encodeIfPresent(colors, forKey: .colors)
        case .line(let data, let labels, let color):
            try container.encode("line", forKey: .type)
            try container.encode(data, forKey: .data)
            try container.encode(labels, forKey: .labels)
            try container.encodeIfPresent(color, forKey: .color)
        case .table(let headers, let rows):
            try container.encode("table", forKey: .type)
            try container.encode(headers, forKey: .headers)
            try container.encode(rows, forKey: .rows)
        case .comparison(let a, let b):
            try container.encode("comparison", forKey: .type)
            try container.encode(a, forKey: .columnA)
            try container.encode(b, forKey: .columnB)
        case .comparisonTable(let title, let a, let b, let q):
            try container.encode("comparison_table", forKey: .type)
            try container.encodeIfPresent(title, forKey: .title)
            try container.encode(a, forKey: .columnA)
            try container.encode(b, forKey: .columnB)
            try container.encodeIfPresent(q, forKey: .question)
        case .circle(let r, let l, let s):
            try container.encode("circle", forKey: .type)
            try container.encode(r, forKey: .radius)
            try container.encodeIfPresent(l, forKey: .label)
            try container.encodeIfPresent(s, forKey: .showCenter)
        case .math(let e, let q):
            try container.encode("math", forKey: .type)
            try container.encode(e, forKey: .expressions)
            try container.encodeIfPresent(q, forKey: .question)
        case .tgoComparisonGrid(let t, let c, let f):
            try container.encode("tgo_comparison_grid", forKey: .type)
            try container.encodeIfPresent(t, forKey: .title)
            try container.encode(c, forKey: .columns)
            try container.encodeIfPresent(f, forKey: .footer)
        case .tgoGroupedBar(let t, let yMin, let yMax, let cats, let s):
            try container.encode("tgo_grouped_bar", forKey: .type)
            try container.encodeIfPresent(t, forKey: .title)
            try container.encodeIfPresent(yMin, forKey: .yMin)
            try container.encodeIfPresent(yMax, forKey: .yMax)
            try container.encode(cats, forKey: .categories)
            try container.encode(s, forKey: .series)
        case .tgoStepPerimeter(let w, let h):
            try container.encode("tgo_step_perimeter", forKey: .type)
            try container.encode(w, forKey: .widthLabel)
            try container.encode(h, forKey: .heightLabel)
        case .tgoVenn(let ll, let rl, let lt, let rt, let i, let o):
            try container.encode("tgo_venn", forKey: .type)
            try container.encode(ll, forKey: .leftLabel)
            try container.encode(rl, forKey: .rightLabel)
            try container.encode(lt, forKey: .leftTotal)
            try container.encode(rt, forKey: .rightTotal)
            try container.encode(i, forKey: .intersection)
            try container.encodeIfPresent(o, forKey: .outside)
        case .tgoShadedRectangle(let w, let h):
            try container.encode("tgo_shaded_rectangle", forKey: .type)
            try container.encode(w, forKey: .widthParts)
            try container.encode(h, forKey: .heightParts)
        case .tgoTriangleSides(let ls, let rs, let bl):
            try container.encode("tgo_triangle_sides", forKey: .type)
            try container.encode(ls, forKey: .leftSide)
            try container.encode(rs, forKey: .rightSide)
            try container.encode(bl, forKey: .baseLabel)
        case .tgoInscribedSquare(let r):
            try container.encode("tgo_inscribed_square", forKey: .type)
            try container.encode(r, forKey: .radiusLabel)
        case .tgoSquareMosaic(let u):
            try container.encode("tgo_square_mosaic", forKey: .type)
            try container.encode(u, forKey: .unitAreaLabel)
        }
    }
}
