import SwiftUI
import CoreText

enum DSFont {
    case gilroy(GilroyWeight)
    case kzAgency(AgencyWeight)
    case brand

    enum GilroyWeight: String {
        case regular = "Gilroy-Regular"
        case medium = "Gilroy-Medium"
        case semibold = "Gilroy-Semibold"
        case bold = "Gilroy-Bold"
        case extrabold = "Gilroy-Extrabold"
    }

    enum AgencyWeight: String {
        case medium = "KZAgencyGothic-Medium"
        case bold = "KZAgencyGothic-Bold"
    }

    var name: String {
        switch self {
        case .gilroy(let w): return w.rawValue
        case .kzAgency(let w): return w.rawValue
        case .brand: return "adineuePROKZ-Bold"
        }
    }
}

struct DSFontModifier: ViewModifier {
    let font: DSFont
    let size: CGFloat

    func body(content: Content) -> some View {
        content.font(.custom(font.name, size: size))
    }
}

extension View {
    func dsFont(_ font: DSFont, size: CGFloat) -> some View {
        modifier(DSFontModifier(font: font, size: size))
    }
}

struct FontLoader {
    static func register() {
        let fonts = [
            "Gilroy-Regular", "Gilroy-Medium", "Gilroy-Semibold",
            "Gilroy-Bold", "Gilroy-Extrabold",
            "KZAgencyGothic-Medium", "KZAgencyGothic-Bold",
            "adineuePROKZ-Bold"
        ]
        for font in fonts {
            guard let url = Bundle.main.url(forResource: font, withExtension: "ttf") else {
                print("Font not found: \(font)")
                continue
            }
            CTFontManagerRegisterFontsForURL(url as CFURL, .process, nil)
        }
    }
}
