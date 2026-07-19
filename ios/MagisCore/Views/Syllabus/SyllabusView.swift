import SwiftUI

struct SyllabusView: View {
    @State private var selectedSubject: SubjectId = .english

    private let baseSubjects: [(id: SubjectId, icon: String, color: Color)] = [
        (.english, "textbook", .dsBlue),
        (.tgo, "brain", .dsGreen),
        (.algo, "function", Color(red: 168/255, green: 85/255, blue: 247/255)),
        (.db, "externaldrive", .dsGold)
    ]

    var body: some View {
        ScrollView {
            VStack(spacing: 12) {
                HStack {
                    Text("Тест тапсырмаларының мазмұны")
                        .font(.system(size: 13))
                        .foregroundColor(.dsText2)
                    Spacer()
                }

                ForEach(baseSubjects, id: \.id) { subject in
                    subjectRow(subject)
                }
            }
            .padding(.horizontal, 20)
            .padding(.top, 16)
        }
        .background(Color.dsBg)
        .navigationTitle("Бағдарлама")
        .navigationBarTitleDisplayMode(.inline)
    }

    private func subjectRow(_ subject: (id: SubjectId, icon: String, color: Color)) -> some View {
        DSCard(padding: 14) {
            HStack {
                Image(systemName: subject.icon)
                    .font(.system(size: 18))
                    .foregroundColor(subject.color)
                    .frame(width: 36, height: 36)
                    .background(subject.color.opacity(0.1))
                    .clipShape(RoundedRectangle(cornerRadius: 10))

                VStack(alignment: .leading, spacing: 2) {
                    Text(Constants.subjects[subject.id]?.name ?? "")
                        .font(.system(size: 14, weight: .medium))
                        .foregroundColor(.dsText)
                    Text("\(Constants.subjects[subject.id]?.totalQuestions ?? 0) сұрақ")
                        .font(.system(size: 12))
                        .foregroundColor(.dsText3)
                }

                Spacer()

                Image(systemName: "chevron.right")
                    .font(.system(size: 14))
                    .foregroundColor(.dsText3)
            }
        }
    }
}
