import Foundation
import PDFKit
import UIKit

final class CertificateGenerator {
    static let shared = CertificateGenerator()

    func generate(for result: TestResult) -> URL? {
        let pdf = PDFDocument()
        guard let page = certificatePage(for: result) else { return nil }
        pdf.insert(page, at: 0)

        let tempURL = FileManager.default.temporaryDirectory
            .appendingPathComponent("Certificate_\(UUID().uuidString.prefix(8)).pdf")

        guard pdf.write(to: tempURL) else { return nil }
        return tempURL
    }

    private func certificatePage(for result: TestResult) -> PDFPage? {
        let pageRect = CGRect(x: 0, y: 0, width: 612, height: 792)
        let renderer = UIGraphicsImageRenderer(size: pageRect.size)

        let image = renderer.image { ctx in
            drawBackground(in: pageRect, context: ctx)
            drawContent(for: result, in: pageRect, context: ctx)
        }

        guard let cgImage = image.cgImage else { return nil }
        return PDFPage(image: UIImage(cgImage: cgImage))
    }

    private func drawBackground(in rect: CGRect, context: UIGraphicsImageRendererContext) {
        UIColor(red: 245/255, green: 247/255, blue: 250/255, alpha: 1).setFill()
        context.fill(rect)

        let borderPath = UIBezierPath(rect: rect.insetBy(dx: 20, dy: 20))
        UIColor(red: 229/255, green: 231/255, blue: 235/255, alpha: 1).setStroke()
        borderPath.lineWidth = 2
        borderPath.stroke()
    }

    private func drawContent(for result: TestResult, in rect: CGRect, context: UIGraphicsImageRendererContext) {
        let centerX = rect.width / 2

        drawText("MAGIS", at: CGPoint(x: centerX, y: 100),
                 font: .boldSystemFont(ofSize: 36),
                 color: UIColor(red: 59/255, green: 111/255, blue: 237/255, alpha: 1),
                 alignment: .center)

        drawText("СЕРТИФИКАТ", at: CGPoint(x: centerX, y: 160),
                 font: .boldSystemFont(ofSize: 28),
                 color: UIColor(red: 245/255, green: 158/255, blue: 11/255, alpha: 1),
                 alignment: .center)

        drawText("Бұл сертификат растайды", at: CGPoint(x: centerX, y: 220),
                 font: .systemFont(ofSize: 16),
                 color: UIColor(red: 107/255, green: 114/255, blue: 128/255, alpha: 1),
                 alignment: .center)

        drawText(result.userName, at: CGPoint(x: centerX, y: 260),
                 font: .boldSystemFont(ofSize: 22),
                 color: .black,
                 alignment: .center)

        drawText("тестілеуден сәтті өтті", at: CGPoint(x: centerX, y: 300),
                 font: .systemFont(ofSize: 16),
                 color: UIColor(red: 107/255, green: 114/255, blue: 128/255, alpha: 1),
                 alignment: .center)

        let scoreText = "\(result.totalScore) / \(result.maxScore)"
        drawText(scoreText, at: CGPoint(x: centerX, y: 350),
                 font: .boldSystemFont(ofSize: 48),
                 color: UIColor(red: 34/255, green: 197/255, blue: 94/255, alpha: 1),
                 alignment: .center)

        let percentage = result.maxScore > 0 ? Int((Double(result.totalScore) / Double(result.maxScore)) * 100) : 0
        drawText("\(percentage)%", at: CGPoint(x: centerX, y: 400),
                 font: .systemFont(ofSize: 20),
                 color: UIColor(red: 107/255, green: 114/255, blue: 128/255, alpha: 1),
                 alignment: .center)

        let date = result.endDate ?? Date()
        let df = DateFormatter()
        df.dateStyle = .medium
        df.locale = Locale(identifier: "kk_KZ")
        drawText(df.string(from: date), at: CGPoint(x: centerX, y: 460),
                 font: .systemFont(ofSize: 14),
                 color: UIColor(red: 107/255, green: 114/255, blue: 128/255, alpha: 1),
                 alignment: .center)

        drawSeparator(at: centerX, y: 500, context: context)

        var yOffset: CGFloat = 530
        for subjectId in result.subjectScores.keys.sorted(by: { $0.rawValue < $1.rawValue }) {
            guard let score = result.subjectScores[subjectId] else { continue }
            let name = Constants.subjects[subjectId]?.name ?? subjectId.rawValue
            let subjText = "\(name): \(score.score)/\(score.max)"
            drawText(subjText, at: CGPoint(x: centerX, y: yOffset),
                     font: .systemFont(ofSize: 14),
                     color: UIColor(red: 107/255, green: 114/255, blue: 128/255, alpha: 1),
                     alignment: .center)
            yOffset += 24
        }
    }

    private func drawText(_ text: String, at point: CGPoint, font: UIFont, color: UIColor, alignment: NSTextAlignment) {
        let attrs: [NSAttributedString.Key: Any] = [
            .font: font,
            .foregroundColor: color
        ]
        let size = text.size(withAttributes: attrs)
        let x: CGFloat
        switch alignment {
        case .center: x = point.x - size.width / 2
        case .right: x = point.x - size.width
        default: x = point.x
        }
        text.draw(at: CGPoint(x: x, y: point.y - size.height / 2), withAttributes: attrs)
    }

    private func drawSeparator(at x: CGFloat, y: CGFloat, context: UIGraphicsImageRendererContext) {
        let path = UIBezierPath()
        path.move(to: CGPoint(x: x - 100, y: y))
        path.addLine(to: CGPoint(x: x + 100, y: y))
        UIColor(red: 229/255, green: 231/255, blue: 235/255, alpha: 0.5).setStroke()
        path.lineWidth = 1
        path.stroke()
    }
}
