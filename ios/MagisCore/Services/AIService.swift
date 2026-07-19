import Foundation

actor AIService {
    static let shared = AIService()

    private let baseURL = "https://api.deepseek.com/v1"
    private let model = "deepseek-chat"
    private let temperature = 0.6

    private init() {}

    private var apiKey: String? {
        if let key = ProcessInfo.processInfo.environment["DEEPSEEK_API_KEY"], !key.isEmpty {
            return key
        }
        return Bundle.main.object(forInfoDictionaryKey: "DEEPSEEK_API_KEY") as? String
    }

    struct AIRequest: Codable {
        let model: String
        let messages: [Message]
        let temperature: Double
    }

    struct Message: Codable {
        let role: String
        let content: String
    }

    struct AIResponse: Codable {
        let choices: [Choice]?
    }

    struct Choice: Codable {
        let message: Message
    }

    private func callAI(systemPrompt: String, userPrompt: String, history: [ChatMessage] = []) async throws -> String {
        guard let apiKey = apiKey else {
            throw AIError.missingAPIKey
        }

        var messages: [Message] = [
            Message(role: "system", content: systemPrompt)
        ]
        for msg in history {
            messages.append(Message(role: msg.role.rawValue, content: msg.content))
        }
        messages.append(Message(role: "user", content: userPrompt))

        let requestBody = AIRequest(model: model, messages: messages, temperature: temperature)

        guard let url = URL(string: "\(baseURL)/chat/completions") else {
            throw AIError.apiError
        }
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("Bearer \(apiKey)", forHTTPHeaderField: "Authorization")
        request.httpBody = try JSONEncoder().encode(requestBody)

        let (data, response) = try await URLSession.shared.data(for: request)

        guard let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200 else {
            throw AIError.apiError
        }

        let result = try JSONDecoder().decode(AIResponse.self, from: data)
        return result.choices?.first?.message.content ?? ""
    }

    func getExplanation(
        questionText: String,
        options: [String],
        correctOptions: [String],
        userAnswer: [String]? = nil,
        context: String? = nil
    ) async throws -> String {
        let systemPrompt = "Сен Қазақстандағы магистратураға дайындық КТ пәндері бойынша жетекші оқытушы-нейрожелісің. Студентке сұрақты қазақ тілінде толық талдап бер. Сәлемдесу, өзін таныстыру, артық мотивациялық кіріспе жазба. Бірден талдауға кіріс."

        var userPrompt = ""
        if let context = context {
            userPrompt += "\(context)\n\n"
        }

        userPrompt += "Сұрақ: \(questionText)\nНұсқалар:\n"
        for (idx, opt) in options.enumerated() {
            let safeIdx = min(idx, 25)
            let letter = String(UnicodeScalar(65 + safeIdx)!)
            userPrompt += " \(letter)) \(opt)\n"
        }

        userPrompt += "\nДұрыс жауап(тар): \(correctOptions.joined(separator: ", "))\n"
        if let userAnswer = userAnswer, !userAnswer.isEmpty {
            userPrompt += "Студенттің таңдаған жауабы: \(userAnswer.joined(separator: ", "))\n"
        }

        userPrompt += """
        \nТүсіндірмеңіз келесі құрылымды сақтауы тиіс:
        1. **Сұрақтың мәні:** сұрақ нақты нені тексеріп тұрғанын түсіндіріңіз.
        2. **Дұрыс жауап логикасы:** дұрыс нұсқа(лар) неге сәйкес келетінін көрсетіңіз.
        3. **Нұсқалар талдауы:** A, B, C... деп әр нұсқаны жеке талдап, қайсысы келеді, қайсысы келмейді және неге екенін айтыңыз.
        4. **Таңдау стратегиясы:** студент ұқсас сұрақта дұрыс нұсқаны логикалық түрде қалай сүзуі керек екенін қысқа алгоритммен беріңіз.
        ҚАТАҢ ТАЛАП: raw LaTeX қолданбаңыз. Формулаларды тек Unicode және қарапайым мәтінмен жазыңыз.
        Жауапты қазақ тілінде, қысқа, нақты, құрылымды және Markdown форматында жазыңыз.
        """

        return try await callAI(systemPrompt: systemPrompt, userPrompt: userPrompt)
    }

    func askQuestion(
        questionText: String,
        options: [String],
        correctOptions: [String],
        userAnswer: [String]?,
        userQuery: String,
        chatHistory: [ChatMessage] = [],
        questionContext: String? = nil
    ) async throws -> String {
        let systemPrompt = """
        Сен студентке тест тапсыру кезінде көмектесетін білімді, сыпайы және көмекші қазақ тіліндегі оқытушы-нейрожелісің.
        Сұрақ: \(questionText)
        Нұсқалар: \(options.enumerated().map { "\(UnicodeScalar(65 + min($0.offset, 25))!)) \($0.element)" }.joined(separator: ", "))
        Дұрыс жауап: \(correctOptions.joined(separator: ", "))
        \(userAnswer.map { "Студенттің таңдаған жауабы: \($0.joined(separator: ", "))" } ?? "")
        \(questionContext.map { "Қосымша контекст: \($0)" } ?? "")

        Студенттің сұрағына қазақ тілінде, сыпайы әрі түсінікті жауап бер.
        ҚАТАҢ ТАЛАП: raw LaTeX қолданбаңыз. Формулаларды тек Unicode және қарапайым мәтінмен жазыңыз. Жауапты Markdown форматында қайтарыңыз.
        """
        return try await callAI(systemPrompt: systemPrompt, userPrompt: userQuery, history: chatHistory)
    }
}

enum AIError: LocalizedError {
    case missingAPIKey
    case apiError
    case dailyLimitExceeded

    var errorDescription: String? {
        switch self {
        case .missingAPIKey: return "DeepSeek API кілті бапталмаған."
        case .apiError: return "AI қызметінен жауап алу мүмкін болмады."
        case .dailyLimitExceeded: return "Күнделікті ИИ сұрақтар шегінен асып кеттіңіз!"
        }
    }
}
