import SwiftUI

// MARK: - Geonline-style Color Palette

extension Color {
    static let dsBlue = Color(red: 59/255, green: 111/255, blue: 237/255)     // #3B6FED
    static let dsBlueDark = Color(red: 43/255, green: 84/255, blue: 197/255)  // #2B54C5
    static let dsBlueLight = Color(red: 235/255, green: 240/255, blue: 255/255) // #EBF0FF
    static let dsGreen = Color(red: 34/255, green: 197/255, blue: 94/255)    // #22C55E
    static let dsGreenDark = Color(red: 22/255, green: 163/255, blue: 74/255) // #16A34A
    static let dsGreenLight = Color(red: 236/255, green: 253/255, blue: 245/255) // #ECFDF5
    static let dsGold = Color(red: 245/255, green: 158/255, blue: 11/255)    // #F59E0B
    static let dsGoldLight = Color(red: 255/255, green: 251/255, blue: 235/255) // #FFFBEB
    static let dsRed = Color(red: 239/255, green: 68/255, blue: 68/255)      // #EF4444
    static let dsRedLight = Color(red: 254/255, green: 242/255, blue: 242/255) // #FEF2F2

    static let dsBg = Color(red: 245/255, green: 247/255, blue: 250/255)     // #F5F7FA
    static let dsSurface = Color.white                                        // #FFFFFF
    static let dsBorder = Color(red: 229/255, green: 231/255, blue: 235/255) // #E5E7EB
    static let dsText = Color(red: 17/255, green: 24/255, blue: 39/255)      // #111827
    static let dsText2 = Color(red: 107/255, green: 114/255, blue: 128/255)  // #6B7280
    static let dsText3 = Color(red: 156/255, green: 163/255, blue: 175/255)  // #9CA3AF
}

// MARK: - Reusable Components

struct DSSectionTitle: View {
    let text: String
    var body: some View {
        HStack {
            Text(text)
                .dsFont(.kzAgency(.bold), size: 18)
                .foregroundColor(.dsText)
            Spacer()
        }
    }
}

struct DSBadge: View {
    let text: String
    let bg: Color
    let fg: Color

    init(_ text: String, bg: Color = .dsBlueLight, fg: Color = .dsBlue) {
        self.text = text
        self.bg = bg
        self.fg = fg
    }

    var body: some View {
        Text(text)
            .dsFont(.gilroy(.semibold), size: 11)
            .foregroundColor(fg)
            .padding(.horizontal, 10)
            .padding(.vertical, 4)
            .background(bg)
            .clipShape(Capsule())
    }
}

struct DSCard<Content: View>: View {
    let content: Content
    var padding: CGFloat = 16

    init(padding: CGFloat = 16, @ViewBuilder content: () -> Content) {
        self.padding = padding
        self.content = content()
    }

    var body: some View {
        content
            .padding(padding)
            .background(Color.dsSurface)
            .clipShape(RoundedRectangle(cornerRadius: 16))
            .dsCardShadow()
    }
}

struct DSServiceItem: View {
    let title: String
    let icon: String
    let bgColor: Color
    let iconColor: Color
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            VStack(spacing: 8) {
                Image(systemName: icon)
                    .font(.system(size: 20))
                    .foregroundColor(iconColor)
                    .frame(width: 40, height: 40)
                    .background(bgColor)
                    .clipShape(RoundedRectangle(cornerRadius: 12))
                Text(title)
                    .dsFont(.gilroy(.medium), size: 12)
                    .foregroundColor(.dsText)
                    .multilineTextAlignment(.center)
                    .lineLimit(2)
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 16)
            .background(Color.dsSurface)
            .clipShape(RoundedRectangle(cornerRadius: 16))
            .dsCardShadow()
        }
        .buttonStyle(.plain)
    }
}

struct DSPrimaryButton: View {
    let title: String
    let icon: String?
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            HStack(spacing: 8) {
                if let icon {
                    Image(systemName: icon)
                }
                Text(title)
            }
        }
        .buttonStyle(.dsAction)
    }
}

struct DSOutlineButton: View {
    let title: String
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Text(title)
                .dsFont(.gilroy(.semibold), size: 14)
                .foregroundColor(.dsText)
                .frame(maxWidth: .infinity)
                .padding(.vertical, 14)
                .background(Color.dsSurface)
                .overlay(
                    RoundedRectangle(cornerRadius: 10)
                        .stroke(Color.dsBorder, lineWidth: 2)
                )
        }
    }
}

struct DSBannerCard: View {
    let tag: String
    let title: String
    let subtitle: String

    var body: some View {
        ZStack(alignment: .leading) {
            LinearGradient(
                colors: [.dsBlue, .dsBlueDark],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )

            VStack(alignment: .leading, spacing: 6) {
                Text(tag)
                    .dsFont(.gilroy(.semibold), size: 10)
                    .foregroundColor(.white.opacity(0.8))
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(Color.white.opacity(0.2))
                    .clipShape(Capsule())

                Text(title)
                    .dsFont(.kzAgency(.bold), size: 20)
                    .foregroundColor(.white)
                    .lineLimit(2)

                Text(subtitle)
                    .dsFont(.gilroy(.regular), size: 12)
                    .foregroundColor(.white.opacity(0.85))
            }
            .padding(20)
        }
        .clipShape(RoundedRectangle(cornerRadius: 16))
    }
}

// MARK: - View Modifiers

struct DSCardShadow: ViewModifier {
    func body(content: Content) -> some View {
        content
            .shadow(color: Color.black.opacity(0.06), radius: 12, x: 0, y: 2)
    }
}

struct DSButtonShadow: ViewModifier {
    func body(content: Content) -> some View {
        content
            .shadow(color: Color.dsGreen.opacity(0.3), radius: 16, x: 0, y: 4)
    }
}

extension View {
    func dsCardShadow() -> some View {
        modifier(DSCardShadow())
    }
    func dsButtonShadow() -> some View {
        modifier(DSButtonShadow())
    }
}

// MARK: - Tab Item

struct DSTabItem: View {
    let title: String
    let icon: String
    let isSelected: Bool

    var body: some View {
        VStack(spacing: 3) {
            Image(systemName: icon)
                .font(.system(size: 22))
            Text(title)
                .dsFont(.gilroy(.medium), size: 10)
        }
        .foregroundColor(isSelected ? .dsBlue : .dsText3)
    }
}

// MARK: - Button Style

struct DSActionButtonStyle: ButtonStyle {
    var bgColor: Color = .dsGreen
    var shadowColor: Color = .dsGreenDark

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .dsFont(.gilroy(.semibold), size: 15)
            .textCase(.uppercase)
            .foregroundStyle(.white)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 15)
            .background(bgColor)
            .clipShape(RoundedRectangle(cornerRadius: 14))
            .shadow(color: shadowColor, radius: 0, y: configuration.isPressed ? 0 : 4)
            .offset(y: configuration.isPressed ? 4 : 0)
            .animation(.bouncy(duration: 0.2), value: configuration.isPressed)
            .sensoryFeedback(
                configuration.isPressed
                    ? .impact(flexibility: .soft, intensity: 0.75)
                    : .impact(flexibility: .solid),
                trigger: configuration.isPressed
            )
    }
}

extension ButtonStyle where Self == DSActionButtonStyle {
    static var dsAction: DSActionButtonStyle { DSActionButtonStyle() }
    static func dsAction(bg: Color) -> DSActionButtonStyle {
        DSActionButtonStyle(bgColor: bg, shadowColor: bg.opacity(0.6))
    }
}

// MARK: - Field Style Modifier

struct DSFieldModifier: ViewModifier {
    var isError: Bool = false
    var cornerRadius: CGFloat = 12

    func body(content: Content) -> some View {
        content
            .padding()
            .background(Color.dsSurface, in: RoundedRectangle(cornerRadius: cornerRadius))
            .overlay(
                RoundedRectangle(cornerRadius: cornerRadius)
                    .stroke(isError ? Color.dsRed : Color.dsBorder, lineWidth: 1.5)
            )
            .shadow(color: Color.black.opacity(0.08), radius: 4, x: 0, y: 2)
    }
}

extension View {
    func dsFieldStyle(isError: Bool = false, cornerRadius: CGFloat = 12) -> some View {
        modifier(DSFieldModifier(isError: isError, cornerRadius: cornerRadius))
    }
}
