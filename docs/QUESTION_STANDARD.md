# M-series Question Format Standard (m001, m002, ..., mXXX)

## File structure

```typescript
import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

export const m001Ped1BilimBeruRoliQuestions: Question[] = [
  {
    id: "ped001-t01-a01",                    // {subject}-t{topic}-{difficulty}{num}
    subjectId: SubjectId.M001_PEDAGOGIKA,     // Enum міндетті
    text: "Сұрақ мәтіні",
    options: [
      { id: "ped001-t01-a01-op1", text: "Жауап 1" },
      { id: "ped001-t01-a01-op2", text: "Жауап 2" },
      { id: "ped001-t01-a01-op3", text: "Жауап 3" },
      { id: "ped001-t01-a01-op4", text: "Жауап 4" }
    ],
    correctOptionIds: ["ped001-t01-a01-op2"],
    type: QuestionType.SINGLE,                // немесе MULTIPLE
    topic: "Тақырыптың толық аты",
    difficulty: Difficulty.EASY,              // EASY | MEDIUM | HARD
  },
];
```

## ID format

```
{prefix}-t{topic:02d}-{difficulty}{num:02d}
                          └─ a = EASY, b = MEDIUM, c = HARD
               └────────── topic номері (01, 02, ..., 20)
  └─────────────────────── пән префиксі
```

**Мысалдар:**
- `ped001-t01-a01` — m001/pedagogika, 1-тақырып, EASY, №1
- `ped001-t05-b15` — m001/pedagogika, 5-тақырып, MEDIUM, №15
- `ped001-t09-c03` — m001/pedagogika, 9-тақырып, HARD, №3

## Option ID format

```
{question-id}-op{номер}
```

**Мысал:** `ped001-t01-a01-op1`, `ped001-t01-a01-op2`

## SubjectId prefix mapping

| Префикс | SubjectId | Мысал ID |
|---------|-----------|----------|
| m001 | M001_PEDAGOGIKA, M001_PSYCHOLOGY | `ped001-...`, `psi001-...` |
| m002 | M002_PEDAGOGIKA, M002_SPEECH_DEV | `ped002-...`, `til002-...` |
| m094 | ALGO, DB | `algo-...`, `db-...` |

## Rules

1. `import` — 4 типті де алу керек: `Question, SubjectId, QuestionType, Difficulty`
2. `subjectId` — Enum қолдану керек (`SubjectId.M001_PEDAGOGIKA`), жол емес
3. `type` — Enum қолдану керек (`QuestionType.SINGLE`)
4. `difficulty` — Enum қолдану керек (`Difficulty.EASY`)
5. Кілттер — тырнақшасыз (`id:` деп, `"id":` емес)
6. `: Question[]` — тип анотациясы міндетті, соңында `as Question[]` ҚОЛДАНЫЛМАЙДЫ
7. Option ID — сұрақ ID-сынан басталып, `-op{номер}` жалғасуы керек
8. Әр сұрақта 4 option болады (MULTIPLE типте де)
