# Questions data

Static question bank split by exam subject and specification topic.

- `english/`: listening, grammar, vocabulary, reading
- `tgo/`: critical-thinking and analytical-thinking topics from the ODAT specification
- `algo/`: programming basics, algorithms, complexity, data structures, graphs
- `db/`: modeling, SQL, normalization, integrity, architecture

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
