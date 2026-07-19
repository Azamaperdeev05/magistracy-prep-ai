# MagisCore iOS — Checkpoint

## Project
- **Мақсаты:** Қазақстандағы магистратураға дайындық қосымшасы
- **iOS 17.0+**, Swift 5.9, SwiftUI + @Observable
- **Firebase:** Auth, Firestore, Core (SPM, 11.15.0)
- **XcodeGen:** `ios/project.yml` → `xcodegen generate`
- **Құрылым:** `ios/MagisCore/{App,Views,ViewModels,Services,Design,Data,Resources}`

## Build
- **BUILD SUCCEEDED** — 0 errors
- iPhone 17 Simulator (iOS 27.0)
- Clean: 25s, Incremental: 11s

## Firebase
- **Project ID:** `magistracy-prep-ai-2026`
- **iOS App ID:** `1:953919816421:ios:59f71ac63a8543fff8ca0c`
- **GoogleService-Info.plist:** ✅ нақты (Firebase CLI арқылы алынды)
- **Phone Auth:** ✅ қосылған, тест нөмірлері: `+77001112233` код `123456`
- **Email/Password Auth:** ✅ әдепкі бойынша қосылған
- **API Key:** `AIzaSyD9Ogq_QPEhRj_jHK_nKl1luoc6mcYCrKE`

## Дизайн жүйесі (`DesignSystem.swift`)
- **Түстер:** dsBlue, dsGreen, dsGold, dsRed, dsBg, dsSurface, dsBorder, dsText
- **Шрифттер:** Gilroy (5 weight), KZ Agency Gothic, adineuePROKZ-Bold
- **DSFieldModifier:** `.dsFieldStyle(isError:)` — RoundedRectangle фон + border, error state
- **DSActionButtonStyle:** `.buttonStyle(.dsAction)` — Duolingo стилі (bouncy, haptic, shadow, uppercase)
- **DSPrimaryButton:** DSActionButtonStyle қолданады
- **Тел. пішім:** `(701) 234 56 78` → E.164: `+77012345678`

## Экрандар
| Экран | Статус |
|---|---|
| OnboardingView | ✅ |
| AuthView (email/password) | ✅ |
| AuthView (phone OTP) | ✅ |
| RegistrationView | ✅ 1 беттік скролл |
| ConsentGateView | ✅ артқа батырмасымен |
| MainTabView | ⚙️ дайын |
| TestSetupView, QuestionCardView | ✅ |
| ResultView | ✅ |
| ProfileView | ✅ |
| SpecialtiesView | ✅ |
| PrepSessionView | ✅ |

## Ағымдағы мәселе: Тіркелу
- `RegistrationView.submitButtonView` — Button + .buttonStyle(.dsAction)
- `AuthViewModel.completeRegistration()` → `authService.signUp()` жібереді
- `viewModel.error` енді тост арқылы көрсетіледі
- `AuthService.signUp()` Firebase `createUser(withEmail:password:)` қолданады
- Содан кейін Firestore-ға профиль жазады

## Орнатылған скиллдар (`~/.agents/skills/`)
- firebase-basics, firebase-auth-basics, firebase-firestore
- xcode-project-setup, xcode-build-orchestrator, xcode-build-fixer
- xcode-compilation-analyzer, xcode-project-analyzer, xcode-build-benchmark

## project.yml негізгі параметрлері
```yaml
OTHER_LDFLAGS: "-ObjC"
EAGER_LINKING: YES
COMPILATION_CACHE_ENABLE_CACHING: YES
```
