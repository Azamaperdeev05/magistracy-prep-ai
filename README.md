# 🎓 MagisCore (КТ Симулятор)

<div align="center">

<img src="public/logo no bg, white.svg" alt="MagisCore Logo" width="120">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-11.15-FFCA28?logo=firebase)
![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?logo=vite)
![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8?logo=pwa)

**Қазақстан магистратурасына түсуге дайындалуға арналған MagisCore интерактивті AI тест платформасы**

[Демо](#-демо) • [Мүмкіндіктер](#-мүмкіндіктер) • [Технологиялар](#-технологиялар) • [Іске Қосу](#-іске-қосу) • [Сәулет](#-жоба-сәулеті-fsd)

</div>

---

## ✨ Мүмкіндіктер

### 📚 Толық КТ Симуляциясы
- **Ресми спецификацияға сай пәндер базасы**:
  - 🌐 Шет тілі (Ағылшын) — Listening аудио мәтіндерімен (1-30 нұсқалар) — **міндетті**
  - 🧠 Оқу дайындығын анықтау (ТГО/ОДАТ) — Сын тұрғысынан ойлау, аналитика, логика — **міндетті**
  - 💻 Компьютерлік ғылымдар & IT (М094/М095/М096) — Алгоритмдер, Деректер құрылымы, SQL
  - 🏫 Педагогика & Психология (М001/М002/М003) — Тәрбие теориясы, әдістеме
  - ⚖️ Заңтану, Экономика, Инженерия және т.б. 80+ мамандық спецификациялары

### 🤖 ИИ Ассистент & AI Жауап Түсіндірмесі
- Сұрақ бойынша AI арқылы жеке түсіндірме алу (Gemini AI API)
- AI интерактивті сұрақ-жауап чаты және кеңес беру
- AI лимитін интеллектуалды бақылау

### 🛡️ Анти-чит & Тестілеу Жүйесі
- Мәтінді көшіруді бұғаттау (Ctrl+C / Right click)
- Ресми таймер, Интерактивті Калькулятор, Менделеев кестесі
- Тест картасы (Answer Map) мен бөлімдер арасында жылдам өту

### 📊 Аналитика және Тарих
- Бұрын тапсырған тесттердің толық тарихы (Firestore да сақталады)
- Пәндер және тақырыптар бойынша нәтиже графиктері мен аналитика
- 60%+ нәтижеде ресми Сертификат дайындау

### 📱 PWA және Аналитика
- PWA қолдауы: Офлайн режимде жұмыс жасау және ұялы телефонға оңай орнату
- Vercel Analytics және Yandex Metrica интеграциясы

---

## 🛠️ Технологиялар

### Frontend & Core
| Технология | Қызметі |
|------------|---------|
| **React 19** | UI кітапханасы |
| **TypeScript 5.8** | Строго типтелген тіл |
| **Vite 6** | Өнімділігі жоғары құрастырушы |
| **TailwindCSS** | Дизайн жүйесі мен стильдер |
| **Lucide React** | Заманауи UI иконкалар топтамасы |
| **React Router v6** | Клиенттік маршрутизация |

### Backend & Cloud Services
| Сервис | Қызметі |
|--------|---------|
| **Firebase Auth** | Google OAuth, Email/Password, Phone OTP тіркелу |
| **Cloud Firestore** | Реал-тайм NoSQL дерекқор және тарих сақтау |
| **Vercel Analytics** | Веб-сайтқа келушілер мен бет қаралымдарын талдау |
| **Vite PWA Plugin** | Service Worker, manifest және авто-жаңарту |

---

## 🚀 Іске Қосу

### 1. Репозиторийді клондау
```bash
git clone https://github.com/Azamaperdeev05/magistracy-prep-ai.git
cd magistracy-prep-ai
```

### 2. Тәуелділіктерді орнату
```bash
npm install
```

### 3. Әзірлеу серверін іске қосу
```bash
npm run dev
```
Сервер `http://localhost:3000` (немесе Vite белгілеген портта) ашылады.

### 4. Продакшн жинау (Build)
```bash
npm run build
```

---

## 📁 Жоба Сәулеті (FSD - Feature-Sliced Design)

Жоба модульдік **Feature-Sliced Design** стандарты бойынша реттелген:

```
magistracy-prep-ai/
├── 📂 src/
│   ├── 📂 features/             # Домендік фичалар мен экрандар
│   │   ├── 📂 admin/            # Админ панель (AdminScreen)
│   │   ├── 📂 analytics/        # Аналитика мен нәтиже (ResultScreen, HistoryScreen)
│   │   ├── 📂 auth/             # Тіркелу мен кіру (AuthScreen, WelcomeScreen, ConsentGate)
│   │   ├── 📂 blog/             # Блог мақалалары (BlogScreen, BlogPostScreen)
│   │   ├── 📂 specialties/     # Мамандықтар мен силлабус (SpecialtiesScreen, SpecialtyDetail)
│   │   └── 📂 test-engine/      # Тест тапсыру модулі (TestScreen, PrepScreen, Modals)
│   │
│   ├── 📂 components/ui/        # Жалпы UI компоненттер (SEO, Motion, Sidebar, InstallBanner)
│   ├── 📂 services/             # Firebase SDK, API, Scoring, Logging сервистері
│   ├── 📂 hooks/                # PWA install және Metrica hook-тары
│   ├── 📂 utils/                # Көмекші функциялар мен иконкалар
│   ├── 📂 types/                # TypeScript глобалды типтер
│   ├── App.tsx                  # Негізгі маршрутизатор компонент
│   ├── firebase.ts              # Firebase конфигурациясы мен баптаулары
│   ├── index.css                # Глобалды CSS стильдер
│   └── index.tsx                # React қолданбасын жүктеу нүктесі
│
├── 📂 data/                     # Сұрақтар базасы, силлабустар мен ЖОО деректері
│   ├── 📂 questions/            # Пәндер бойынша сұрақтар файлы
│   ├── specialties.ts           # Мамандықтар тізімі
│   └── univision_*.json         # Университеттер мен магистратура бағдарламалары
│
├── 📂 docs/                     # Жоба спецификациялары, файлдар мен құжаттар
├── 📂 ios/                      # iOS Swift/SwiftUI мобильді қосымша коды
├── index.html                   # HTML негізгі шаблоны
├── vite.config.ts               # Vite & PWA баптаулары
└── package.json                 # Жоба тәуелділіктері
```

---

## 📄 Лицензия

MIT Лицензиясы бойынша таратылады.

---

## 👨‍💻 Автор

**Пердеев Азамат** — [GitHub Profile](https://github.com/Azamaperdeev05)
