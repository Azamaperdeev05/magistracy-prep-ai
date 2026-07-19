import Foundation
import Observation

@Observable
final class PrepViewModel {
    var questions: [Question] = []
    var userAnswers: UserAnswers = [:]
    var currentIndex = 0
    var isLoading = false
    var error: String?
    var isFinished = false
    var selectedMode: PrepMode = .random
    var selectedSubject: SubjectId?
    var selectedTopics: Set<String> = []

    var currentQuestion: Question? {
        guard currentIndex < questions.count else { return nil }
        return questions[currentIndex]
    }

    var answeredCount: Int {
        userAnswers.count
    }

    var progress: Double {
        guard !questions.isEmpty else { return 0 }
        return Double(currentIndex + 1) / Double(questions.count)
    }

    var showAiExplanation: Bool {
        guard let q = currentQuestion else { return false }
        return userAnswers[q.id] != nil
    }

    func loadWrongQuestions() async {
        isLoading = true
        error = nil
        do {
            let questionService = QuestionService.shared
            try await questionService.loadQuestions()
            let wrongIds = try await HistoryService.shared.fetchWrongQuestionIds()
            let allQuestions = await questionService.getAllQuestions()
            questions = allQuestions.filter { wrongIds.contains($0.id) }.shuffled()
            if questions.isEmpty {
                error = "Қате сұрақтар жоқ. Алдымен тест тапсырыңыз."
            }
            resetState()
        } catch {
            self.error = error.localizedDescription
        }
        isLoading = false
    }

    func loadRandomQuestions(count: Int = 20) async {
        isLoading = true
        error = nil
        do {
            let questionService = QuestionService.shared
            try await questionService.loadQuestions()
            let allQuestions = await questionService.getAllQuestions()
            questions = allQuestions.shuffled().prefix(count).map { $0 }
            resetState()
        } catch {
            self.error = error.localizedDescription
        }
        isLoading = false
    }

    func loadTopicQuestions(subjectId: SubjectId, topic: String) async {
        isLoading = true
        error = nil
        do {
            let questionService = QuestionService.shared
            try await questionService.loadQuestions()
            let allQuestions = await questionService.getAllQuestions()
            questions = allQuestions.filter { $0.subjectId == subjectId && $0.topic == topic }.shuffled()
            if questions.isEmpty {
                error = "Бұл тақырып бойынша сұрақтар табылмады."
            }
            resetState()
        } catch {
            self.error = error.localizedDescription
        }
        isLoading = false
    }

    private func resetState() {
        userAnswers = [:]
        currentIndex = 0
        isFinished = false
    }

    func submitAnswer(questionId: String, selectedOptionIds: [String]) {
        userAnswers[questionId] = selectedOptionIds
    }

    func goToQuestion(_ index: Int) {
        guard index >= 0, index < questions.count else { return }
        currentIndex = index
    }

    func nextQuestion() {
        goToQuestion(currentIndex + 1)
    }

    func previousQuestion() {
        goToQuestion(currentIndex - 1)
    }

    func finish() {
        isFinished = true
    }

    func isCorrect(_ questionId: String) -> Bool? {
        guard let q = questions.first(where: { $0.id == questionId }),
              let answer = userAnswers[questionId] else { return nil }
        return Set(answer) == Set(q.correctOptionIds)
    }
}
