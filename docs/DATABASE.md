# Деректер базасының құрылымы (Database Architecture & Schema)

MagisCore платформасында деректер **Cloud Firestore (Firebase NoSQL)** және **Жергілікті TypeScript/JSON деректер форматында** сақталады.

---

## ☁️ Cloud Firestore Коллекциялары (Cloud Collections)

### 1. `users` (Пайдаланушы профильдері)
Документ ID-сі: `user.uid` (Firebase Auth UID).
- `uid` (String): Пайдаланушының қайталанбас ИД-сі.
- `email` (String): Электрондық поштасы.
- `displayName` (String): Аты-жөні.
- `photoURL` (String): Профиль суреті.
- `selectedSpecialtyCode` (String): Таңдалған мамандық коды (мысалы, `M094`).
- `selectedSpecialtyName` (String): Таңдалған мамандық атауы.
- `aiRequestsToday` (Number): Бүгінгі күнде пайдаланылған AI сұраулар саны.
- `lastAiResetDate` (String): AI лимиті соңғы рет жаңартылған күн (`YYYY-MM-DD`).
- `consent` (Object):
  - `accepted` (Boolean): Шарттарды қабылдау мәртебесі.
  - `acceptedAt` (Timestamp): Қабылданған уақыт.
- `createdAt` (Timestamp): Тіркелген уақыты.
- `updatedAt` (Timestamp): Соңғы жаңартылған уақыт.

---

### 2. `test_results` (Тестілеу нәтижелері)
Документ ID-сі: Авто-генерацияланатын Firestore Document ID.
- `userId` (String): Пайдаланушының UID-сі.
- `userEmail` (String): Пайдаланушының э-поштасы.
- `userName` (String): Пайдаланушының аты.
- `specialtyCode` (String): Тест тапсырылған мамандық коды.
- `totalScore` (Number): Жиналған жалпы ұпай (0 - 150).
- `maxScore` (Number): Мүмкін болған ең жоғары ұпай.
- `percentage` (Number): Пайыздық көрсеткіші.
- `correctCount` (Number): Дұрыс жауап берілген сұрақтар саны.
- `totalQuestions` (Number): Жалпы сұрақтар саны.
- `subjectScores` (Array / Object): Әр пән бойынша жеке бөлінген ұпайлар (Шет тілі, ТҒО/ОДАТ, Беске қатысты пәндер).
- `userAnswers` (Object): Пайдаланушының әр сұраққа берген жауаптар картасы (`questionId -> answerId[]`).
- `timestamp` (Number / Timestamp): Тест аяқталған уақыт белгісі (Epoch ms).

---

### 3. `feedback` / `reports` (Сұрақтарға қатысты шағымдар мен пікірлер)
- `userId` (String): Шағым түсірген пайдаланушы.
- `questionId` (String): Шағым жасалған сұрақ ИД-сі.
- `reason` (String): Шағым себебі (мысалы, "Сұрақта қате бар", "Тайпо").
- `details` (String): Қосымша түсіндірме.
- `createdAt` (Timestamp): Шағым түскен уақыт.

---

## 📁 Жергілікті Сұрақтар Базасы (Local Static Datasets)

Сұрақтар мен силлабустар өнімділікті арттыру үшін `data/questions/` папкасында модульдік TypeScript файлдары ретінде сақталады:

- **`Question` интерфейсі**:
  - `id` (String): Сұрақ коды.
  - `subjectId` (SubjectId): `english` | `tgo` | `algo` | `db` | `pedagogy` | `psychology`
  - `text` (String): Сұрақ мәтіні.
  - `type` (QuestionType): `single` (1 дұрыс жауап) | `multiple` (көп дұрыс жауап).
  - `options` (Option[]): Жауап нұсқалары (`id`, `text`).
  - `correctAnswers` (String[]): Дұрыс жауаптардың ИД тізімі.
  - `explanation` (String, қосымша): Түсіндірме мәтін.
  - `readingPassage` (String, қосымша): Оқылым мәтіні немесе аудио сілтемесі.
