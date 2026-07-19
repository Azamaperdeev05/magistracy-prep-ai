import Foundation
import Observation

@Observable
final class TestViewModel {
    var questions: [Question] = []
    var userAnswers: UserAnswers = [:]
    var currentIndex = 0
    var isLoading = false
    var error: String?
    var timeRemaining: Int = Constants.examDurationMinutes * 60
    var isTestFinished = false
    var isBlocked = false
    var blockReason = ""
    var result: TestResult?
    var specialtyCode: String = "M094"
    var activeTest: ActiveTest?

    private let questionService = QuestionService.shared
    private let authService = AuthService.shared
    private var timer: Timer?

    var currentQuestion: Question? {
        guard currentIndex < questions.count else { return nil }
        return questions[currentIndex]
    }

    var progress: Double {
        guard !questions.isEmpty else { return 0 }
        return Double(currentIndex + 1) / Double(questions.count)
    }

    var answeredCount: Int {
        userAnswers.count
    }

    var isAllAnswered: Bool {
        answeredCount == questions.count
    }

    var hasActiveTest: Bool {
        activeTest != nil && !isTestFinished
    }

    func checkActiveTest() async {
        do {
            activeTest = try await authService.fetchActiveTest()
            if let test = activeTest, !test.isExpired {
                await resumeTest(test)
            } else {
                activeTest = nil
            }
        } catch {
            activeTest = nil
        }
    }

    private func resumeTest(_ test: ActiveTest) async {
        self.specialtyCode = test.specialtyCode
        self.currentIndex = test.currentIndex
        self.userAnswers = test.answeredQuestions
        self.timeRemaining = max(0, Int(test.expiresAt.timeIntervalSinceNow))
        
        isLoading = true
        do {
            try await questionService.loadQuestions()
            if !test.questionIds.isEmpty {
                questions = await questionService.getQuestions(byIds: test.questionIds)
            } else {
                questions = try await questionService.generateFullTest(for: test.specialtyCode)
            }
            isTestFinished = false
            if self.timeRemaining > 0 {
                startTimer()
            } else {
                finishTest()
            }
        } catch {
            self.error = error.localizedDescription
        }
        isLoading = false
    }

    func startTest(for specialtyCode: String = "M094") async {
        self.specialtyCode = specialtyCode
        isLoading = true
        error = nil
        do {
            questions = try await questionService.generateFullTest(for: specialtyCode)
            userAnswers = [:]
            currentIndex = 0
            timeRemaining = Constants.examDurationMinutes * 60
            isTestFinished = false
            
            let userId = await authService.currentUser?.uid ?? ""
            let questionIds = try await questionService.getQuestionIds(for: specialtyCode)
            let newActiveTest = ActiveTest.create(
                userId: userId,
                specialtyCode: specialtyCode,
                questionIds: questionIds
            )
            activeTest = newActiveTest
            try await authService.saveActiveTest(newActiveTest)
            
            startTimer()
        } catch {
            self.error = error.localizedDescription
        }
        isLoading = false
    }

    func startSingleSubjectTest(for specialtyCode: String = "M094") async {
        self.specialtyCode = specialtyCode
        isLoading = true
        error = nil
        do {
            questions = try await questionService.generateSingleSubjectTest(for: specialtyCode)
            userAnswers = [:]
            currentIndex = 0
            timeRemaining = 60 * 60
            isTestFinished = false
            
            let userId = await authService.currentUser?.uid ?? ""
            let questionIds = try await questionService.getSingleSubjectQuestionIds(for: specialtyCode)
            let newActiveTest = ActiveTest.create(
                userId: userId,
                specialtyCode: specialtyCode,
                questionIds: questionIds
            )
            activeTest = newActiveTest
            try await authService.saveActiveTest(newActiveTest)
            
            startTimer()
        } catch {
            self.error = error.localizedDescription
        }
        isLoading = false
    }

    func submitAnswer(questionId: String, selectedOptionIds: [String]) {
        userAnswers[questionId] = selectedOptionIds
        saveProgress()
    }

    func goToQuestion(_ index: Int) {
        guard index >= 0, index < questions.count else { return }
        currentIndex = index
        saveProgress()
    }

    func nextQuestion() {
        goToQuestion(currentIndex + 1)
    }

    func previousQuestion() {
        goToQuestion(currentIndex - 1)
    }

    func finishTest() {
        timer?.invalidate()
        timer = nil
        result = ScoringService.calculateResult(questions: questions, answers: userAnswers)
        isTestFinished = true
        Task {
            try? await authService.deleteActiveTest()
            activeTest = nil
        }
    }

    func getWrongQuestions() -> [Question] {
        questions.filter { q in
            let answer = userAnswers[q.id] ?? []
            return Set(answer) != Set(q.correctOptionIds)
        }
    }

    private func saveProgress() {
        guard var test = activeTest else { return }
        test = ActiveTest(
            id: test.id,
            userId: test.userId,
            specialtyCode: test.specialtyCode,
            startedAt: test.startedAt,
            expiresAt: test.expiresAt,
            currentIndex: currentIndex,
            answeredQuestions: userAnswers,
            questionIds: test.questionIds
        )
        activeTest = test
        Task {
            try? await authService.saveActiveTest(test)
        }
    }

    private func startTimer() {
        timer?.invalidate()
        timer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true) { [weak self] _ in
            guard let self = self else { return }
            if self.timeRemaining > 0 {
                self.timeRemaining -= 1
            } else {
                self.finishTest()
            }
        }
    }

    func blockTest(reason: String) {
        blockReason = reason
        isBlocked = true
        finishTest()
    }

    deinit {
        timer?.invalidate()
    }
}
