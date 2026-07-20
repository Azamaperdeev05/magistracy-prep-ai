# Question Bank Manifest

Updated: July 2026. **7 375 questions** across 10 subjects.

## Summary

| Subject ID | Name | Questions | Format |
|------------|------|-----------|--------|
| `english` | Шет тілі (Ағылшын) | 1 292 | SINGLE/MULTIPLE |
| `tgo` | ОДАТ | 754 | SINGLE/MULTIPLE |
| `m001_pedagogika` | Педагогика (M001) | 1 000 | SINGLE |
| `m001_psychology` | Психология (M001) | 450 | SINGLE |
| `m002_pedagogika` | Мектепке дейінгі педагогика (M002) | 550 | SINGLE |
| `m002_speech_dev` | Тіл дамыту (M002) | 600 | MULTIPLE (8 opt) |
| `algo` | Алгоритмдер (M094) | 1 000 | SINGLE |
| `db` | Дерекқор SQL (M094) | 1 099 | MULTIPLE |
| `m095_algo` | Алгоритмдік бағдарламалау (M095) | 330 | SINGLE (5 opt) |
| `m095_infosec` | Ақпараттық қауіпсіздік (M095) | 300 | MULTIPLE (8 opt) |
| | **Барлығы** | **7 375** | |

## Specialty → Subject Mapping

| Code | Specialty | Subjects |
|------|-----------|----------|
| M001 | Педагогика және психология | `general-pedagogy` (1 000) + `general-psychology` (450) |
| M002 | Мектепке дейінгі оқыту | `preschool-pedagogy` (550) + `speech-development` (600) |
| M094 | Ақпараттық технологиялар | `algorithms` (1 000) + `databases` (1 099) |
| M095 | Бағдарлама және қауіпсіздік | `algorithmic-programming` (330) + `information-security` (300) |

## Folder structure

```
questions/
├── index.ts
├── english/                                  → 1 292 questions
├── tgo/                                      → 754 questions
└── subjects/
    ├── general-pedagogy/                     → 1 000 questions
    ├── general-psychology/                   → 450 questions
    ├── preschool-pedagogy/                   → 550 questions
    ├── speech-development/                   → 600 questions
    ├── algorithms/                           → 1 000 questions (10 topics)
    ├── databases/                            → 1 099 questions (11 topics)
    ├── algorithmic-programming/              → 330 questions (11 topics)
    └── information-security/                 → 300 questions (6 topics)
        ├── 01-cryptography/                  → 50 questions
        ├── 02-identification-auth/           → 50 questions
        ├── 03-network-security/              → 50 questions
        ├── 04-malware/                       → 50 questions
        ├── 05-security-technologies/         → 50 questions
        └── 06-attacker-types/                → 50 questions
```

## information-security — Ақпараттық қауіпсіздік (M095) — 300 questions

| # | File | Topic | Questions |
|---|------|-------|:---------:|
| 1 | `01-cryptography/01Cryptography.ts` | Криптография | 50 |
| 2 | `02-identification-auth/02IdentificationAuth.ts` | Идентификация, Аутентификация, Авторизация | 50 |
| 3 | `03-network-security/03NetworkSecurity.ts` | Желінің қауіпсіздігі | 50 |
| 4 | `04-malware/04Malware.ts` | Зиянды бағдарлама | 50 |
| 5 | `05-security-technologies/05SecurityTechnologies.ts` | Ақпараттық қауіпсіздік технологиялары | 50 |
| 6 | `06-attacker-types/06AttackerTypes.ts` | Зиянкестердің түрлері | 50 |

Difficulty distribution per topic: Easy 15, Medium 20, Hard 15.
Format: MULTIPLE, 8 options, 1–3 correct answers (2/1/0 scoring).

## Question format

All subjects follow the unified standard (`docs/QUESTION_STANDARD.md`):

```typescript
import { Question, SubjectId, QuestionType, Difficulty } from '...';

export const Name: Question[] = [
  {
    id: "ped001-t01-a01",
    subjectId: SubjectId.M001_PEDAGOGIKA,
    text: "...",
    options: [
      { id: "ped001-t01-a01-op1", text: "..." },
    ],
    correctOptionIds: ["ped001-t01-a01-op1"],
    type: QuestionType.SINGLE,
    topic: "...",
    difficulty: Difficulty.EASY,
  },
];
```
