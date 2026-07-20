# Questions data

Static question bank split by exam subject and specification topic. **7 375 questions** across 10 subjects.

## Subjects

| Subject | Directory | Questions | Format |
|---------|-----------|-----------|--------|
| English — Grammar | `english/grammar/` | 624 | SINGLE/MULTIPLE |
| English — Listening | `english/listening/` | 256 | SINGLE/MULTIPLE |
| English — Reading | `english/reading/` | 352 | MULTIPLE (8 per passage) |
| English — Vocabulary | `english/vocabulary/` | 60 | SINGLE |
| ОДАТ (ТГО) | `tgo/` | 754 | SINGLE/MULTIPLE |
| Педагогика (M001) | `subjects/general-pedagogy/` | 1 000 | SINGLE |
| Психология (M001) | `subjects/general-psychology/` | 450 | SINGLE |
| Мектепке дейінгі педагогика (M002) | `subjects/preschool-pedagogy/` | 550 | SINGLE |
| Тіл дамыту (M002) | `subjects/speech-development/` | 600 | MULTIPLE (8 opt) |
| Алгоритмдер (M094) | `subjects/algorithms/` | 1 000 | SINGLE |
| Дерекқорлар SQL (M094) | `subjects/databases/` | 1 099 | MULTIPLE |
| Алгоритмдік бағдарламалау (M095) | `subjects/algorithmic-programming/` | 330 | SINGLE (5 opt) |
| Ақпараттық қауіпсіздік (M095) | `subjects/information-security/` | 300 | MULTIPLE (8 opt) |

## Structure

```
data/questions/
├── index.ts                              ← All subjects registered into STATIC_QUESTIONS
├── english/                              ← English language
│   ├── grammar/     (13 files)
│   ├── listening/   (4 files)
│   ├── reading/     (5 files)
│   └── vocabulary/  (6 files)
├── tgo/                                  ← ОДАТ (logic)
└── subjects/
    ├── general-pedagogy/                 ← M001 Pedagogy
    ├── general-psychology/               ← M001 Psychology
    ├── preschool-pedagogy/               ← M002 Preschool Pedagogy
    ├── speech-development/               ← M002 Speech Development
    ├── algorithms/                       ← M094 Algorithms (10 topics)
    ├── databases/                        ← M094 SQL Databases (11 topics)
    ├── algorithmic-programming/          ← M095 Algorithmic Programming (11 topics)
    └── information-security/             ← M095 Information Security (6 topics)
        ├── 01-cryptography/
        ├── 02-identification-auth/
        ├── 03-network-security/
        ├── 04-malware/
        ├── 05-security-technologies/
        └── 06-attacker-types/
```

## Question format standard

All subjects follow a uniform format (see `docs/QUESTION_STANDARD.md`):

- M-series subjects use `SubjectId` enum for `subjectId`
- Algorithmic programming and information security use string `"m095_algo"` / `"m095_infosec"` with `as any` cast
- Reading: 8 questions per passage, stored as `readingPassage` field
- Listening (speech-development): MULTIPLE, 8 options, 2/1/0 scoring
- Information security: MULTIPLE, 8 options, 2/1/0 scoring, 50 questions per topic
