import SwiftUI

struct NewsCardView: View {
    let news: NewsItem
    
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            if let imageUrl = news.imageUrl, let url = URL(string: imageUrl) {
                AsyncImage(url: url) { phase in
                    switch phase {
                    case .success(let image):
                        image
                            .resizable()
                            .scaledToFill()
                            .frame(height: 180)
                            .clipped()
                            .clipShape(RoundedRectangle(cornerRadius: 12))
                    case .failure:
                        placeholderImage
                    case .empty:
                        ProgressView()
                            .frame(height: 180)
                            .frame(maxWidth: .infinity)
                            .background(Color.dsSurface)
                            .clipShape(RoundedRectangle(cornerRadius: 12))
                    @unknown default:
                        placeholderImage
                    }
                }
            }
            
            VStack(alignment: .leading, spacing: 6) {
                Text(news.title)
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundColor(.dsText)
                    .lineLimit(2)
                
                Text(news.body)
                    .font(.system(size: 14))
                    .foregroundColor(.dsText2)
                    .lineLimit(3)
                
                Text(news.dateFormatted)
                    .font(.system(size: 12))
                    .foregroundColor(.dsText3)
            }
        }
        .padding(14)
        .background(Color.dsSurface)
        .clipShape(RoundedRectangle(cornerRadius: 14))
        .shadow(color: Color.black.opacity(0.05), radius: 6, x: 0, y: 2)
    }
    
    private var placeholderImage: some View {
        ZStack {
            Color.dsSurface
            Image(systemName: "newspaper")
                .font(.system(size: 30))
                .foregroundColor(.dsText3)
        }
        .frame(height: 180)
        .clipShape(RoundedRectangle(cornerRadius: 12))
    }
}
