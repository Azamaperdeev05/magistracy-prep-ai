# Questions data

Static question bank split by exam subject and specification topic. **5 062 questions** across 6 subjects.

See [MANIFEST.md](./MANIFEST.md) for the full list with counts and specialty mapping.

## Subjects

| Subject | Directory | Questions | Specialty |
|---------|-----------|-----------|-----------|
| English (Ағылшын) | `english/` | 159 | Міндетті |
| ОДАТ (ТГО) | `tgo/` | 754 | Міндетті |
| Педагогика (М001) | `m001/pedagogika/` | 1 000 | M001 |
| Психология (М001) | `m001/psychology/` | 450 | M001 |
| Мектепке дейінгі педагогика (М002) | `m002/pedagogika/` | 550 | M002 |
| Тіл дамыту әдістемесі (М002) | `m002/speech-dev/` | 50 | M002 |
| Алгоритмдер | `algo/` | 1 000 | M094 |
| Дерекқорлар (SQL) | `db/` | 1 099 | M094 |

The app imports only `data/questions/index.ts`; topic files stay small enough to edit and extend manually.

## TGO visual question types

TGO follows the ODAT specification in `тест спец/Оқуға-дайындығын-анықтау-тесті.docx`.
Visual/statistical/math prompts are stored as structured `chartData`, then rendered as React/SVG in `components/ChartRenderer.tsx`.
`services/apiService.ts` samples TGO as 15 critical-thinking questions and 15 analytical-thinking questions for the 30-question ODAT section.

Current visual families:

- `tgo_comparison_grid`: quantity A/B comparison tables.
- `tgo_grouped_bar`: table/diagram data interpretation.
- `tgo_step_perimeter`: right-angle perimeter geometry.
- `tgo_venn`: set/survey diagrams.
- `tgo_shaded_rectangle`: shaded-area geometry.
- `tgo_triangle_sides`: triangle side-inequality prompts.
- `tgo_inscribed_square`: square inscribed in a circle.
- `tgo_square_mosaic`: shaded/unshaded square-area mosaics.

## DB question format

DB follows `тест спец/М094_Ақпараттық-технологиялар/Дерекқор базасы.doc` and the sample in `Деректер-базасы үлгі.pdf`.

- One DB variant has 20 questions and a 40-point maximum.
- Every DB question is stored as `MULTIPLE`, because the official format allows one or more correct answers.
- The UI caps DB selections at 3 options.
- Scoring is 2 points for an exact answer, 1 point for one mistake, and 0 for two or more mistakes.
- `services/apiService.ts` samples DB questions by broad spec distribution: relational model 2, integrity 2, architecture/transactions 2, ER 1, keys/relationships 2, SQL 8, normalization/design 3.
