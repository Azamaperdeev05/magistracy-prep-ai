import SwiftUI
import AVFoundation

struct AudioPlayerView: View {
    let audioURL: URL?
    @State private var player: AVPlayer?
    @State private var isPlaying = false

    var body: some View {
        HStack(spacing: 16) {
            Image(systemName: isPlaying ? "pause.circle.fill" : "play.circle.fill")
                .font(.title)
                .foregroundColor(.blue)
                .onTapGesture { togglePlay() }

            VStack(alignment: .leading) {
                Text("Listening аудио")
                    .foregroundColor(.dsText)
                    .font(.caption)
                Text("Аудионы тыңдап, сұраққа жауап беріңіз")
                    .foregroundColor(.dsText2)
                    .font(.caption2)
            }

            Spacer()
        }
        .padding()
        .background(Color.blue.opacity(0.1))
        .cornerRadius(12)
    }

    private func togglePlay() {
        guard let url = audioURL else { return }
        if isPlaying {
            player?.pause()
        } else {
            player = AVPlayer(url: url)
            player?.play()
        }
        isPlaying.toggle()
    }
}
