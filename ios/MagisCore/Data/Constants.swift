import Foundation

enum Constants {
    static let examDurationMinutes = 235
    static let appName = "MagisCore"
    static let appVersion = "1.0.0"
    static let freeAiQueriesPerDay = 10
    static let premiumMonthlyPrice = 2990
    static let passingThreshold: Double = 0.6
    static let defaultSpecialtyCode = "M094"

    static var subjects: [SubjectId: SubjectConfig] {
        baseSubjects.merging(profileSubjects) { _, new in new }
    }

    private static let baseSubjects: [SubjectId: SubjectConfig] = [
        .english: SubjectConfig(
            id: .english,
            name: "Шет тілі (Ағылшын)",
            totalQuestions: 50,
            maxScore: 50,
            description: "Listening, Grammar (Conditionals), Reading (Academic). 1 баллдан.",
            topics: ["Listening (Тыңдалым)", "Grammar & Vocabulary (Лексика-грамматика)", "Reading (Оқылым)"]
        ),
        .tgo: SubjectConfig(
            id: .tgo,
            name: "Оқу дайындығын анықтау (ОДАТ)",
            totalQuestions: 30,
            maxScore: 30,
            description: "15 сұрақ — Сыни ойлау, 15 сұрақ — Аналитикалық ойлау.",
            topics: ["Сыни ойлау (математикалық, графикалық, статистикалық есептер)", "Аналитикалық ойлау (мәтінді талдау, қорытынды жасау)"]
        ),
        .algo: SubjectConfig(
            id: .algo,
            name: "Алгоритмдер және деректер құрылымы",
            totalQuestions: 30,
            maxScore: 30,
            description: "A(жеңіл)=9, B(орташа)=12, C(қиын)=9. Бір дұрыс жауап. (1 балл)",
            topics: ["Программалау негіздері (C++)", "Деректер құрылымы (Stack, Queue, Tree)", "Графтар алгоритмі (Dijkstra, MST)", "Алгоритм күрделілігі (Big O)"],
            isProfile: true
        ),
        .db: SubjectConfig(
            id: .db,
            name: "Дерекқор базасы (SQL)",
            totalQuestions: 20,
            maxScore: 40,
            description: "Бір немесе бірнеше дұрыс жауап. (2 балл)",
            topics: ["ER-модельдеу және жобалау", "Реляциялық модель және нормализация", "SQL (Практикалық сұраныстар)", "Архитектура және ACID"],
            isProfile: true
        ),
        .m001Pedagogika: SubjectConfig(
            id: .m001Pedagogika,
            name: "Педагогика (М001)",
            totalQuestions: 30,
            maxScore: 30,
            description: "М001 мамандығы бойынша «Педагогика» пәні. 1 баллдан.",
            topics: ["Педагогика ғылым ретінде", "Педагогикалық процесс және оқыту", "Тәрбие және даму"],
            isProfile: true
        ),
        .m001Psychology: SubjectConfig(
            id: .m001Psychology,
            name: "Психология (М001)",
            totalQuestions: 20,
            maxScore: 40,
            description: "М001 мамандығы бойынша «Психология» пәні. Бір немесе бірнеше дұрыс жауап. (2 балл)",
            topics: ["Психологияның пәні, міндеттері және зерттеу әдістері", "Психика туралы ұғым", "Психологияда тұлға мәселесі", "Эмоция, сезім және ерік", "Зейін және ес"],
            isProfile: true
        ),
        .m002Pedagogika: SubjectConfig(
            id: .m002Pedagogika,
            name: "Мектепке дейінгі педагогика (М002)",
            totalQuestions: 5,
            maxScore: 5,
            description: "Мектепке дейінгі педагогика (М002).",
            topics: ["Мектепке дейінгі тәрбиелеу мен оқытудың жүйесі", "Бала - зерттеу объектісі және тәрбиелеу субъектісі", "Мектепке дейінгі білім беруді қамтамасыз ететін нормативтік-құқықтық құжаттар"],
            isProfile: true
        ),
        .m002SpeechDev: SubjectConfig(
            id: .m002SpeechDev,
            name: "Тіл дамыту әдістемесі (М002)",
            totalQuestions: 20,
            maxScore: 40,
            description: "Мектепке дейінгі балалардың тілін дамыту әдістемесі (М002). Бір немесе бірнеше дұрыс жауап. (2 балл)",
            topics: ["Тіл дамыту әдістемесі пәні", "Тіл дамыту әдістемесінің ғылыми негіздері және қалыптасуы", "Мектепке дейінгі ұйымда тіл дамыту бойынша жұмыс жүйесі"],
            isProfile: true
        )
    ]

    static var profileSubjects: [SubjectId: SubjectConfig] = [:]
}
