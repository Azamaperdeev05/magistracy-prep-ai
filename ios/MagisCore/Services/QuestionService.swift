import Foundation

actor QuestionService {
    static let shared = QuestionService()

    private init() {}

    private(set) var allQuestions: [Question] = []
    private var isLoading = false

    private let profileToBase: [SubjectId: SubjectId] = [
        .prof_algoritmder_zhane_derekter_kurylymy: .algo,
        .prof_algoritmdik_bagdarlamalau_tilderi: .algo,
        .prof_derekter_bazasy: .db,
        .prof_bagdarlamalau: .algo,
        .prof_akparattyk_kauipsizdik_negizderi: .db,
        .prof_pedagogika: .tgo,
        .prof_pedagogika_russ: .tgo,
        .prof_psikhologiia: .tgo,
        .prof_aleumettik_pedagogika: .tgo,
        .prof_arnaiy_pedagogika: .tgo,
        .prof_matematika: .algo,
        .prof_zhalpy_fizika: .tgo,
        .prof_khimiia: .tgo,
        .prof_biologiia: .tgo,
        .prof_geografiia: .tgo,
        .prof_kazakstan_tarikhy: .tgo,
        .prof_mektepke_deiingi_pedagogika: .tgo,
        .prof_mektepke_deiingi_zhastagy_balalardyn_tilin_damytu_adistemesi: .tgo,
    ]

    func getAllQuestions() -> [Question] {
        allQuestions
    }

    func getQuestions(byIds ids: [String]) -> [Question] {
        let idSet = Set(ids)
        return allQuestions.filter { idSet.contains($0.id) }
    }

    func getQuestionIds(for specialtyCode: String) async throws -> [String] {
        try await loadQuestions()
        let questions = try await generateFullTest(for: specialtyCode)
        return questions.map { $0.id }
    }

    func getSingleSubjectQuestionIds(for specialtyCode: String) async throws -> [String] {
        try await loadQuestions()
        let questions = try await generateSingleSubjectTest(for: specialtyCode)
        return questions.map { $0.id }
    }

    func loadQuestions() async throws {
        guard allQuestions.isEmpty else { return }
        isLoading = true
        defer { isLoading = false }
        let questions = try await loadQuestionsFromBundle()
        allQuestions = questions
    }

    private func loadQuestionsFromBundle() async throws -> [Question] {
        var result: [Question] = []
        let subjects = ["english", "tgo", "algo", "db", "m001", "m002"]
        for subject in subjects {
            if let url = Bundle.main.url(forResource: subject, withExtension: "json"),
               let data = try? Data(contentsOf: url) {
                let questions = try JSONDecoder().decode([Question].self, from: data)
                result.append(contentsOf: questions)
            }
        }
        return result
    }

    func generateQuestions(for subjectId: SubjectId, count: Int) -> [Question] {
        let mappedId = profileToBase[subjectId] ?? subjectId
        let pool = allQuestions.filter { $0.subjectId == mappedId }
        switch mappedId {
        case .english:
            return generateEnglishQuestions(from: pool, count: count)
        case .tgo:
            return generateTgoQuestions(from: pool, count: count)
        case .db:
            return generateDbQuestions(from: pool, count: count)
        case .algo:
            return generateAlgoQuestions(from: pool, count: count)
        default:
            return Array(pickRandom(pool, count: count))
        }
    }

    // MARK: - English
    private func generateEnglishQuestions(from pool: [Question], count: Int) -> [Question] {
        let listening = pool.filter { $0.audioUrl != nil || $0.topic.lowercased().contains("listening") }
        let grammar = pool.filter { q in
            let t = q.topic.lowercased()
            return !t.contains("listening") && !t.contains("audio") && !t.contains("reading")
        }
        let reading = pool.filter { $0.readingPassage != nil && $0.topic.lowercased().contains("reading") }

        let selectedListening = groupAndPick(listening, keyPath: \.audioUrl, minGroupSize: 8, maxGroups: 2, perGroup: 8)
        let selectedReading = groupAndPick(reading, keyPath: \.readingPassage, minGroupSize: 8, maxGroups: 2, perGroup: 8)
        let selectedGrammar = pickRandom(grammar, count: 18)

        var selectedIds = Set<String>()
        for q in selectedListening { selectedIds.insert(q.id) }
        for q in selectedReading { selectedIds.insert(q.id) }
        for q in selectedGrammar { selectedIds.insert(q.id) }

        var selected = selectedListening + selectedGrammar + selectedReading
        if selected.count < count {
            let filler = pickRandom(pool.filter { !selectedIds.contains($0.id) }, count: count - selected.count)
            selected.append(contentsOf: filler)
        }
        return Array(selected.prefix(count))
    }

    // MARK: - TGO
    private func generateTgoQuestions(from pool: [Question], count: Int) -> [Question] {
        let analytical = pool.filter { $0.topic == "Мәтінді талдау" }
        let critical = pool.filter { $0.topic != "Мәтінді талдау" }
        let analyticalCount = count / 2
        let criticalCount = count - analyticalCount

        let visual = critical.filter { $0.chartData != nil }
        let visualCount = min(5, visual.count, max(0, criticalCount / 3))
        let selectedVisual = pickRandom(visual, count: visualCount)
        var selectedCriticalIds = Set(selectedVisual.map(\.id))
        let selectedCritical = selectedVisual + pickRandom(critical.filter { !selectedCriticalIds.contains($0.id) }, count: criticalCount - selectedVisual.count)
        let selectedAnalytical = pickRandom(analytical, count: analyticalCount)

        return shuffle(selectedCritical) + shuffle(selectedAnalytical)
    }

    // MARK: - DB
    private let dbTopicDistribution: [(topics: [String], count: Int)] = [
        (["Реляциялық модель"], 2),
        (["Тұтастық"], 2),
        (["Архитектура", "Транзакциялар"], 2),
        (["ER-модельдеу"], 1),
        (["Кілттер"], 2),
        (["SQL"], 8),
        (["Нормализация"], 3),
    ]

    private func generateDbQuestions(from pool: [Question], count: Int) -> [Question] {
        var selected: [Question] = []
        var selectedIds = Set<String>()
        let slots = dbTopicDistribution.flatMap { g in Array(repeating: g, count: g.count) }

        for i in 0..<count {
            let group = slots[i % slots.count]
            let available = pool.filter { q in group.topics.contains(where: { q.topic.contains($0) }) && !selectedIds.contains(q.id) }
            if let q = pickRandom(available, count: 1).first {
                selected.append(q)
                selectedIds.insert(q.id)
            }
        }

        if selected.count < count {
            let remaining = pool.filter { !selectedIds.contains($0.id) }
            selected.append(contentsOf: pickRandom(remaining, count: count - selected.count))
        }

        return shuffle(selected)
    }

    // MARK: - ALGO
    private let algoTopicDistribution: [(topic: String, count: Int)] = [
        ("Негізгі процедуралық", 3),
        ("Алгоритмдік тіл операторлары", 3),
        ("Алгоритмдердің әртүрлі", 3),
        ("Функциялар және рекурсивті", 3),
        ("Сұрыптау және іздеу", 3),
        ("Алгоритмді бағалау", 3),
        ("Сызықтық мәліметтер", 3),
        ("Хэш кестелері", 3),
        ("Ағаш және екілік", 3),
        ("Графтар және графтар", 3),
    ]

    private func generateAlgoQuestions(from pool: [Question], count: Int) -> [Question] {
        var selected: [Question] = []
        var selectedIds = Set<String>()

        for spec in algoTopicDistribution {
            let key = String(spec.topic.prefix(15))
            let available = pool.filter { ($0.topic.contains(key)) && !selectedIds.contains($0.id) }
            let picked = pickRandom(available, count: spec.count)
            for q in picked {
                selectedIds.insert(q.id)
                selected.append(q)
            }
        }

        if selected.count < count {
            let remaining = pool.filter { !selectedIds.contains($0.id) }
            selected.append(contentsOf: pickRandom(remaining, count: count - selected.count))
        }

        return shuffle(selected)
    }

    // MARK: - Helpers
    private func shuffle<T>(_ items: [T]) -> [T] {
        items.shuffled()
    }

    private func pickRandom<T>(_ items: [T], count: Int) -> [T] {
        guard !items.isEmpty else { return [] }
        return items.shuffled().prefix(count).map { $0 }
    }

    private func groupAndPick(
        _ questions: [Question],
        keyPath: KeyPath<Question, String?>,
        minGroupSize: Int,
        maxGroups: Int,
        perGroup: Int
    ) -> [Question] {
        var groups: [String: [Question]] = [:]
        for q in questions {
            if let key = q[keyPath: keyPath] {
                groups[key, default: []].append(q)
            }
        }
        let validGroups = groups.values.filter { $0.count >= minGroupSize }
        return validGroups.shuffled().prefix(maxGroups).flatMap { group in
            group.shuffled().prefix(perGroup)
        }
    }

    func generateFullTest(for specialtyCode: String = "M094") async throws -> [Question] {
        try await loadQuestions()
        let englishCount = Constants.subjects[.english]?.totalQuestions ?? 50
        let tgoCount = Constants.subjects[.tgo]?.totalQuestions ?? 30
        let english = generateQuestions(for: .english, count: englishCount)
        let tgo = generateQuestions(for: .tgo, count: tgoCount)
        let prof1 = profileSubject(for: specialtyCode, position: 1)
        let prof2 = profileSubject(for: specialtyCode, position: 2)
        return english + tgo + prof1 + prof2
    }

    func generateSingleSubjectTest(for specialtyCode: String = "M094") async throws -> [Question] {
        try await loadQuestions()
        let prof1 = profileSubject(for: specialtyCode, position: 1)
        let prof2 = profileSubject(for: specialtyCode, position: 2)
        return prof1 + prof2
    }

    private func profileSubject(for specialtyCode: String, position: Int) -> [Question] {
        guard let mapping = SpecialtyProfileMapping.all[specialtyCode] else {
            return []
        }
        let subjectId = position == 1 ? mapping.profile1 : mapping.profile2
        guard let config = Constants.subjects[subjectId] else {
            return []
        }
        return generateQuestions(for: subjectId, count: config.totalQuestions)
    }
}
