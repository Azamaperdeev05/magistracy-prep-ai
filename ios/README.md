# MagisCore iOS

MagisCore — магистратураға дайындалуға арналған iOS қосымшасы (SwiftUI).

## Орнату

### 1. Firebase орнату
1. [Firebase Console](https://console.firebase.google.com)-дан iOS қосымшасын тіркеңіз
2. `GoogleService-Info.plist` жүктеп алып, `MagisCore/` папкасына салыңыз
3. Firebase Authentication (Email/Password) қосыңыз
4. Firestore Database қосыңыз

### 2. DeepSeek API
`.env` файлына DEEPSEEK_API_KEY қосыңыз немесе Xcode схемасына environment variable ретінде қосыңыз.

### 3. Жобаны ашу
```bash
# XcodeGen арқылы .xcodeproj генерациялау
brew install xcodegen
cd ios
xcodegen generate
open MagisCore.xcodeproj
```

Немесе тікелей Xcode-та ашыңыз:
- File → Open → `ios/` папкасын таңдаңыз

## Құрылымы

```
ios/
├── MagisCore/
│   ├── App/              # App entry, SceneDelegate
│   ├── Models/           # Question, User, Subject т.б.
│   ├── Data/             # Constants, Specialties, Syllabus
│   ├── Services/         # Auth, Question, Scoring, AI
│   ├── ViewModels/       # AuthVM, TestVM, ResultVM
│   └── Views/            # SwiftUI экрандары
├── Tests/                # Unit tests
├── project.yml           # XcodeGen конфигурациясы
└── .env.example          # Орта айнымалылары
```

## Қолдау
iOS 17.0+
