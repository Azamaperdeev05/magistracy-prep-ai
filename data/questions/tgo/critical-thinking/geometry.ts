import { Question } from '../../../../types';

// tgo / Геометрия
export const tgoCriticalThinkingGeometryQuestions = [
  {
    "id": "50ec4e78-d9bc-477a-9e93-b2ae983f9504",
    "subjectId": "tgo",
    "text": "Үшбұрыштың ішкі бұрыштарының қосындысы неге тең?",
    "options": [
      {
        "id": "10d44230-c728-4815-843c-6abb7d8e0b8b",
        "text": "270°"
      },
      {
        "id": "7ce8fb74-c2a3-4a48-82d0-f6019cdcca3d",
        "text": "90°"
      },
      {
        "id": "d029f4e0-772d-4dc3-9e7a-6cb2329faf1e",
        "text": "360°"
      },
      {
        "id": "f2e7c036-726c-4311-819c-8a4afa96543d",
        "text": "180°"
      }
    ],
    "correctOptionIds": [
      "f2e7c036-726c-4311-819c-8a4afa96543d"
    ],
    "type": "SINGLE",
    "topic": "Геометрия",
    "difficulty": "medium"
  },
  {
    "id": "d919dda3-e227-4447-af53-48cc3f9dd83c",
    "subjectId": "tgo",
    "text": "Шаршының периметрі 40 см. Қабырғасы қанша?",
    "options": [
      {
        "id": "02559ac0-db98-44fb-b44c-7f1f37691007",
        "text": "8 см"
      },
      {
        "id": "0ab3c4e6-1611-49cc-9d35-c84b015a2cf7",
        "text": "20 см"
      },
      {
        "id": "b0fb494f-7d1d-4cda-8a0c-cf01f5c8c787",
        "text": "40 см"
      },
      {
        "id": "cfb44f08-2b67-426b-8338-0624c0bda8ef",
        "text": "10 см"
      }
    ],
    "correctOptionIds": [
      "cfb44f08-2b67-426b-8338-0624c0bda8ef"
    ],
    "type": "SINGLE",
    "topic": "Геометрия",
    "difficulty": "medium"
  },
  {
    "id": "tgo-geometry-step-perimeter",
    "subjectId": "tgo",
    "text": "Суреттегі барлық бұрыштар тік. Фигураның периметрін табыңыз.",
    "chartData": {
      "type": "tgo_step_perimeter",
      "widthLabel": "100",
      "heightLabel": "100"
    },
    "options": [
      {
        "id": "tgo-geometry-step-perimeter-a",
        "text": "400"
      },
      {
        "id": "tgo-geometry-step-perimeter-b",
        "text": "300"
      },
      {
        "id": "tgo-geometry-step-perimeter-c",
        "text": "500"
      },
      {
        "id": "tgo-geometry-step-perimeter-d",
        "text": "200"
      },
      {
        "id": "tgo-geometry-step-perimeter-e",
        "text": "600"
      }
    ],
    "correctOptionIds": [
      "tgo-geometry-step-perimeter-a"
    ],
    "type": "SINGLE",
    "topic": "Геометрия",
    "difficulty": "medium",
    "hint": "Мұндай сатылы фигурада көлденең бөліктердің қосындысы 2·100, тік бөліктердің қосындысы 2·100."
  },
  {
    "id": "tgo-geometry-shaded-rectangle-area",
    "subjectId": "tgo",
    "text": "Тік төртбұрыш берілген. Боялған фигураның ауданын табыңыз.",
    "chartData": {
      "type": "tgo_shaded_rectangle",
      "widthParts": [
        {
          "label": "8",
          "value": 8
        },
        {
          "label": "4",
          "value": 4
        }
      ],
      "heightParts": [
        {
          "label": "6",
          "value": 6
        },
        {
          "label": "1",
          "value": 1
        }
      ]
    },
    "options": [
      {
        "id": "tgo-geometry-shaded-rectangle-area-a",
        "text": "16"
      },
      {
        "id": "tgo-geometry-shaded-rectangle-area-b",
        "text": "17"
      },
      {
        "id": "tgo-geometry-shaded-rectangle-area-c",
        "text": "18"
      },
      {
        "id": "tgo-geometry-shaded-rectangle-area-d",
        "text": "15"
      },
      {
        "id": "tgo-geometry-shaded-rectangle-area-e",
        "text": "19"
      }
    ],
    "correctOptionIds": [
      "tgo-geometry-shaded-rectangle-area-c"
    ],
    "type": "SINGLE",
    "topic": "Геометрия",
    "difficulty": "hard",
    "hint": "Координатамен есептегенде боялған төртбұрыш ауданы 18 болады."
  },
  {
    "id": "tgo-geometry-triangle-side-possible",
    "subjectId": "tgo",
    "text": "Берілген фигурадағы x-тің бола алатын мәнін табыңыз.",
    "chartData": {
      "type": "tgo_triangle_sides",
      "leftSide": "4",
      "rightSide": "7",
      "baseLabel": "x"
    },
    "options": [
      {
        "id": "tgo-geometry-triangle-side-possible-a",
        "text": "1"
      },
      {
        "id": "tgo-geometry-triangle-side-possible-b",
        "text": "3"
      },
      {
        "id": "tgo-geometry-triangle-side-possible-c",
        "text": "4"
      },
      {
        "id": "tgo-geometry-triangle-side-possible-d",
        "text": "12"
      }
    ],
    "correctOptionIds": [
      "tgo-geometry-triangle-side-possible-c"
    ],
    "type": "SINGLE",
    "topic": "Геометрия",
    "difficulty": "medium",
    "hint": "Үшбұрыш теңсіздігі бойынша |7 - 4| < x < 7 + 4, яғни 3 < x < 11. Берілген нұсқалардан тек 4 жарайды."
  },
  {
    "id": "tgo-geometry-inscribed-square-area",
    "subjectId": "tgo",
    "text": "Радиусы 4 см шеңберге іштей сызылған шаршының ауданын табыңыз.",
    "chartData": {
      "type": "tgo_inscribed_square",
      "radiusLabel": "4 см"
    },
    "options": [
      {
        "id": "tgo-geometry-inscribed-square-area-a",
        "text": "48"
      },
      {
        "id": "tgo-geometry-inscribed-square-area-b",
        "text": "32"
      },
      {
        "id": "tgo-geometry-inscribed-square-area-c",
        "text": "25"
      },
      {
        "id": "tgo-geometry-inscribed-square-area-d",
        "text": "28"
      }
    ],
    "correctOptionIds": [
      "tgo-geometry-inscribed-square-area-b"
    ],
    "type": "SINGLE",
    "topic": "Геометрия",
    "difficulty": "medium",
    "hint": "Іштей сызылған шаршының диагоналі шеңбер диаметріне тең: d = 8. Аудан = d² / 2 = 64 / 2 = 32."
  },
  {
    "id": "tgo-geometry-square-mosaic-unshaded",
    "subjectId": "tgo",
    "text": "Суреттегі бір кіші шаршының ауданы 8 см² болса, екі фигурадағы боялмаған бөліктер аудандарының қосындысын табыңыз.",
    "chartData": {
      "type": "tgo_square_mosaic",
      "unitAreaLabel": "8 см²"
    },
    "options": [
      {
        "id": "tgo-geometry-square-mosaic-unshaded-a",
        "text": "144 см²"
      },
      {
        "id": "tgo-geometry-square-mosaic-unshaded-b",
        "text": "56 см²"
      },
      {
        "id": "tgo-geometry-square-mosaic-unshaded-c",
        "text": "64 см²"
      },
      {
        "id": "tgo-geometry-square-mosaic-unshaded-d",
        "text": "72 см²"
      }
    ],
    "correctOptionIds": [
      "tgo-geometry-square-mosaic-unshaded-b"
    ],
    "type": "SINGLE",
    "topic": "Геометрия",
    "difficulty": "medium",
    "hint": "Боялмаған кіші шаршылар саны 7. Әрқайсысы 8 см², сондықтан 7 · 8 = 56 см²."
  },
{
  "id": "tgo-geometry-generated-001",
  "subjectId": "tgo",
  "text": "Қабырғалары 4, 7, x болатын үшбұрышта x-тің мүмкін мәнін табыңыз.",
  "chartData": {
    "type": "tgo_triangle_sides",
    "leftSide": "4",
    "rightSide": "7",
    "baseLabel": "x"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-001-a",
      "text": "3"
    },
    {
      "id": "tgo-geometry-generated-001-b",
      "text": "11"
    },
    {
      "id": "tgo-geometry-generated-001-c",
      "text": "12"
    },
    {
      "id": "tgo-geometry-generated-001-d",
      "text": "1"
    },
    {
      "id": "tgo-geometry-generated-001-e",
      "text": "5"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-001-e"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium",
  "hint": "Үшбұрыш теңсіздігі: екі қабырғаның айырмасынан үлкен, қосындысынан кіші болуы керек."
},
{
  "id": "tgo-geometry-generated-002",
  "subjectId": "tgo",
  "text": "Радиусы 3 см шеңберге іштей сызылған шаршының ауданын табыңыз.",
  "chartData": {
    "type": "tgo_inscribed_square",
    "radiusLabel": "3 см"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-002-a",
      "text": "22"
    },
    {
      "id": "tgo-geometry-generated-002-b",
      "text": "36"
    },
    {
      "id": "tgo-geometry-generated-002-c",
      "text": "18"
    },
    {
      "id": "tgo-geometry-generated-002-d",
      "text": "9"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-002-c"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-003",
  "subjectId": "tgo",
  "text": "Суреттегі барлық бұрыштар тік. Фигураның периметрін табыңыз.",
  "chartData": {
    "type": "tgo_step_perimeter",
    "widthLabel": "60",
    "heightLabel": "50"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-003-a",
      "text": "160"
    },
    {
      "id": "tgo-geometry-generated-003-b",
      "text": "270"
    },
    {
      "id": "tgo-geometry-generated-003-c",
      "text": "220"
    },
    {
      "id": "tgo-geometry-generated-003-d",
      "text": "110"
    },
    {
      "id": "tgo-geometry-generated-003-e",
      "text": "170"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-003-c"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-004",
  "subjectId": "tgo",
  "text": "Радиусы 6 см дөңгелектің ауданын табыңыз.",
  "chartData": {
    "type": "circle",
    "radius": 6,
    "label": "Дөңгелек ауданы",
    "showCenter": true
  },
  "options": [
    {
      "id": "tgo-geometry-generated-004-a",
      "text": "42π"
    },
    {
      "id": "tgo-geometry-generated-004-b",
      "text": "36π"
    },
    {
      "id": "tgo-geometry-generated-004-c",
      "text": "12π"
    },
    {
      "id": "tgo-geometry-generated-004-d",
      "text": "6π"
    },
    {
      "id": "tgo-geometry-generated-004-e",
      "text": "72π"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-004-b"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-005",
  "subjectId": "tgo",
  "text": "Шаршының қабырғасы 9 см. Периметрін табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-005-a",
      "text": "36 см"
    },
    {
      "id": "tgo-geometry-generated-005-b",
      "text": "81 см"
    },
    {
      "id": "tgo-geometry-generated-005-c",
      "text": "18 см"
    },
    {
      "id": "tgo-geometry-generated-005-d",
      "text": "45 см"
    },
    {
      "id": "tgo-geometry-generated-005-e",
      "text": "27 см"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-005-a"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-006",
  "subjectId": "tgo",
  "text": "Тік төртбұрыштың қабырғалары 11 см және 5 см. Ауданын табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-006-a",
      "text": "32 см²"
    },
    {
      "id": "tgo-geometry-generated-006-b",
      "text": "16 см²"
    },
    {
      "id": "tgo-geometry-generated-006-c",
      "text": "66 см²"
    },
    {
      "id": "tgo-geometry-generated-006-d",
      "text": "50 см²"
    },
    {
      "id": "tgo-geometry-generated-006-e",
      "text": "55 см²"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-006-e"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-007",
  "subjectId": "tgo",
  "text": "Қабырғалары 10, 11, x болатын үшбұрышта x-тің мүмкін мәнін табыңыз.",
  "chartData": {
    "type": "tgo_triangle_sides",
    "leftSide": "10",
    "rightSide": "11",
    "baseLabel": "x"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-007-a",
      "text": "22"
    },
    {
      "id": "tgo-geometry-generated-007-b",
      "text": "3"
    },
    {
      "id": "tgo-geometry-generated-007-c",
      "text": "1"
    },
    {
      "id": "tgo-geometry-generated-007-d",
      "text": "21"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-007-b"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium",
  "hint": "Үшбұрыш теңсіздігі: екі қабырғаның айырмасынан үлкен, қосындысынан кіші болуы керек."
},
{
  "id": "tgo-geometry-generated-008",
  "subjectId": "tgo",
  "text": "Радиусы 2 см шеңберге іштей сызылған шаршының ауданын табыңыз.",
  "chartData": {
    "type": "tgo_inscribed_square",
    "radiusLabel": "2 см"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-008-a",
      "text": "8"
    },
    {
      "id": "tgo-geometry-generated-008-b",
      "text": "4"
    },
    {
      "id": "tgo-geometry-generated-008-c",
      "text": "12"
    },
    {
      "id": "tgo-geometry-generated-008-d",
      "text": "16"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-008-a"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-009",
  "subjectId": "tgo",
  "text": "Суреттегі барлық бұрыштар тік. Фигураның периметрін табыңыз.",
  "chartData": {
    "type": "tgo_step_perimeter",
    "widthLabel": "50",
    "heightLabel": "60"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-009-a",
      "text": "270"
    },
    {
      "id": "tgo-geometry-generated-009-b",
      "text": "220"
    },
    {
      "id": "tgo-geometry-generated-009-c",
      "text": "110"
    },
    {
      "id": "tgo-geometry-generated-009-d",
      "text": "160"
    },
    {
      "id": "tgo-geometry-generated-009-e",
      "text": "170"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-009-b"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-010",
  "subjectId": "tgo",
  "text": "Радиусы 4 см дөңгелектің ауданын табыңыз.",
  "chartData": {
    "type": "circle",
    "radius": 4,
    "label": "Дөңгелек ауданы",
    "showCenter": true
  },
  "options": [
    {
      "id": "tgo-geometry-generated-010-a",
      "text": "16π"
    },
    {
      "id": "tgo-geometry-generated-010-b",
      "text": "8π"
    },
    {
      "id": "tgo-geometry-generated-010-c",
      "text": "4π"
    },
    {
      "id": "tgo-geometry-generated-010-d",
      "text": "32π"
    },
    {
      "id": "tgo-geometry-generated-010-e",
      "text": "20π"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-010-a"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-011",
  "subjectId": "tgo",
  "text": "Шаршының қабырғасы 5 см. Периметрін табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-011-a",
      "text": "15 см"
    },
    {
      "id": "tgo-geometry-generated-011-b",
      "text": "20 см"
    },
    {
      "id": "tgo-geometry-generated-011-c",
      "text": "25 см"
    },
    {
      "id": "tgo-geometry-generated-011-d",
      "text": "10 см"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-011-b"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-012",
  "subjectId": "tgo",
  "text": "Тік төртбұрыштың қабырғалары 8 см және 9 см. Ауданын табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-012-a",
      "text": "17 см²"
    },
    {
      "id": "tgo-geometry-generated-012-b",
      "text": "80 см²"
    },
    {
      "id": "tgo-geometry-generated-012-c",
      "text": "63 см²"
    },
    {
      "id": "tgo-geometry-generated-012-d",
      "text": "72 см²"
    },
    {
      "id": "tgo-geometry-generated-012-e",
      "text": "34 см²"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-012-d"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-013",
  "subjectId": "tgo",
  "text": "Қабырғалары 7, 7, x болатын үшбұрышта x-тің мүмкін мәнін табыңыз.",
  "chartData": {
    "type": "tgo_triangle_sides",
    "leftSide": "7",
    "rightSide": "7",
    "baseLabel": "x"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-013-a",
      "text": "15"
    },
    {
      "id": "tgo-geometry-generated-013-b",
      "text": "1"
    },
    {
      "id": "tgo-geometry-generated-013-c",
      "text": "2"
    },
    {
      "id": "tgo-geometry-generated-013-d",
      "text": "0"
    },
    {
      "id": "tgo-geometry-generated-013-e",
      "text": "14"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-013-c"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium",
  "hint": "Үшбұрыш теңсіздігі: екі қабырғаның айырмасынан үлкен, қосындысынан кіші болуы керек."
},
{
  "id": "tgo-geometry-generated-014",
  "subjectId": "tgo",
  "text": "Радиусы 8 см шеңберге іштей сызылған шаршының ауданын табыңыз.",
  "chartData": {
    "type": "tgo_inscribed_square",
    "radiusLabel": "8 см"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-014-a",
      "text": "132"
    },
    {
      "id": "tgo-geometry-generated-014-b",
      "text": "256"
    },
    {
      "id": "tgo-geometry-generated-014-c",
      "text": "128"
    },
    {
      "id": "tgo-geometry-generated-014-d",
      "text": "64"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-014-c"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-015",
  "subjectId": "tgo",
  "text": "Суреттегі барлық бұрыштар тік. Фигураның периметрін табыңыз.",
  "chartData": {
    "type": "tgo_step_perimeter",
    "widthLabel": "40",
    "heightLabel": "70"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-015-a",
      "text": "220"
    },
    {
      "id": "tgo-geometry-generated-015-b",
      "text": "110"
    },
    {
      "id": "tgo-geometry-generated-015-c",
      "text": "150"
    },
    {
      "id": "tgo-geometry-generated-015-d",
      "text": "180"
    },
    {
      "id": "tgo-geometry-generated-015-e",
      "text": "270"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-015-a"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-016",
  "subjectId": "tgo",
  "text": "Радиусы 10 см дөңгелектің ауданын табыңыз.",
  "chartData": {
    "type": "circle",
    "radius": 10,
    "label": "Дөңгелек ауданы",
    "showCenter": true
  },
  "options": [
    {
      "id": "tgo-geometry-generated-016-a",
      "text": "20π"
    },
    {
      "id": "tgo-geometry-generated-016-b",
      "text": "10π"
    },
    {
      "id": "tgo-geometry-generated-016-c",
      "text": "200π"
    },
    {
      "id": "tgo-geometry-generated-016-d",
      "text": "110π"
    },
    {
      "id": "tgo-geometry-generated-016-e",
      "text": "100π"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-016-e"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-017",
  "subjectId": "tgo",
  "text": "Шаршының қабырғасы 11 см. Периметрін табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-017-a",
      "text": "22 см"
    },
    {
      "id": "tgo-geometry-generated-017-b",
      "text": "55 см"
    },
    {
      "id": "tgo-geometry-generated-017-c",
      "text": "33 см"
    },
    {
      "id": "tgo-geometry-generated-017-d",
      "text": "44 см"
    },
    {
      "id": "tgo-geometry-generated-017-e",
      "text": "121 см"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-017-d"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-018",
  "subjectId": "tgo",
  "text": "Тік төртбұрыштың қабырғалары 14 см және 6 см. Ауданын табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-018-a",
      "text": "98 см²"
    },
    {
      "id": "tgo-geometry-generated-018-b",
      "text": "78 см²"
    },
    {
      "id": "tgo-geometry-generated-018-c",
      "text": "84 см²"
    },
    {
      "id": "tgo-geometry-generated-018-d",
      "text": "40 см²"
    },
    {
      "id": "tgo-geometry-generated-018-e",
      "text": "20 см²"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-018-c"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-019",
  "subjectId": "tgo",
  "text": "Қабырғалары 4, 11, x болатын үшбұрышта x-тің мүмкін мәнін табыңыз.",
  "chartData": {
    "type": "tgo_triangle_sides",
    "leftSide": "4",
    "rightSide": "11",
    "baseLabel": "x"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-019-a",
      "text": "1"
    },
    {
      "id": "tgo-geometry-generated-019-b",
      "text": "9"
    },
    {
      "id": "tgo-geometry-generated-019-c",
      "text": "7"
    },
    {
      "id": "tgo-geometry-generated-019-d",
      "text": "15"
    },
    {
      "id": "tgo-geometry-generated-019-e",
      "text": "16"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-019-b"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium",
  "hint": "Үшбұрыш теңсіздігі: екі қабырғаның айырмасынан үлкен, қосындысынан кіші болуы керек."
},
{
  "id": "tgo-geometry-generated-020",
  "subjectId": "tgo",
  "text": "Радиусы 7 см шеңберге іштей сызылған шаршының ауданын табыңыз.",
  "chartData": {
    "type": "tgo_inscribed_square",
    "radiusLabel": "7 см"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-020-a",
      "text": "98"
    },
    {
      "id": "tgo-geometry-generated-020-b",
      "text": "49"
    },
    {
      "id": "tgo-geometry-generated-020-c",
      "text": "102"
    },
    {
      "id": "tgo-geometry-generated-020-d",
      "text": "196"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-020-a"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-021",
  "subjectId": "tgo",
  "text": "Суреттегі барлық бұрыштар тік. Фигураның периметрін табыңыз.",
  "chartData": {
    "type": "tgo_step_perimeter",
    "widthLabel": "100",
    "heightLabel": "30"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-021-a",
      "text": "130"
    },
    {
      "id": "tgo-geometry-generated-021-b",
      "text": "230"
    },
    {
      "id": "tgo-geometry-generated-021-c",
      "text": "160"
    },
    {
      "id": "tgo-geometry-generated-021-d",
      "text": "310"
    },
    {
      "id": "tgo-geometry-generated-021-e",
      "text": "260"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-021-e"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-022",
  "subjectId": "tgo",
  "text": "Радиусы 8 см дөңгелектің ауданын табыңыз.",
  "chartData": {
    "type": "circle",
    "radius": 8,
    "label": "Дөңгелек ауданы",
    "showCenter": true
  },
  "options": [
    {
      "id": "tgo-geometry-generated-022-a",
      "text": "8π"
    },
    {
      "id": "tgo-geometry-generated-022-b",
      "text": "128π"
    },
    {
      "id": "tgo-geometry-generated-022-c",
      "text": "72π"
    },
    {
      "id": "tgo-geometry-generated-022-d",
      "text": "64π"
    },
    {
      "id": "tgo-geometry-generated-022-e",
      "text": "16π"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-022-d"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-023",
  "subjectId": "tgo",
  "text": "Шаршының қабырғасы 7 см. Периметрін табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-023-a",
      "text": "35 см"
    },
    {
      "id": "tgo-geometry-generated-023-b",
      "text": "21 см"
    },
    {
      "id": "tgo-geometry-generated-023-c",
      "text": "28 см"
    },
    {
      "id": "tgo-geometry-generated-023-d",
      "text": "49 см"
    },
    {
      "id": "tgo-geometry-generated-023-e",
      "text": "14 см"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-023-c"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-024",
  "subjectId": "tgo",
  "text": "Тік төртбұрыштың қабырғалары 11 см және 10 см. Ауданын табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-024-a",
      "text": "100 см²"
    },
    {
      "id": "tgo-geometry-generated-024-b",
      "text": "110 см²"
    },
    {
      "id": "tgo-geometry-generated-024-c",
      "text": "42 см²"
    },
    {
      "id": "tgo-geometry-generated-024-d",
      "text": "21 см²"
    },
    {
      "id": "tgo-geometry-generated-024-e",
      "text": "121 см²"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-024-b"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-025",
  "subjectId": "tgo",
  "text": "Қабырғалары 10, 7, x болатын үшбұрышта x-тің мүмкін мәнін табыңыз.",
  "chartData": {
    "type": "tgo_triangle_sides",
    "leftSide": "10",
    "rightSide": "7",
    "baseLabel": "x"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-025-a",
      "text": "5"
    },
    {
      "id": "tgo-geometry-generated-025-b",
      "text": "3"
    },
    {
      "id": "tgo-geometry-generated-025-c",
      "text": "17"
    },
    {
      "id": "tgo-geometry-generated-025-d",
      "text": "18"
    },
    {
      "id": "tgo-geometry-generated-025-e",
      "text": "1"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-025-a"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium",
  "hint": "Үшбұрыш теңсіздігі: екі қабырғаның айырмасынан үлкен, қосындысынан кіші болуы керек."
},
{
  "id": "tgo-geometry-generated-026",
  "subjectId": "tgo",
  "text": "Радиусы 6 см шеңберге іштей сызылған шаршының ауданын табыңыз.",
  "chartData": {
    "type": "tgo_inscribed_square",
    "radiusLabel": "6 см"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-026-a",
      "text": "76"
    },
    {
      "id": "tgo-geometry-generated-026-b",
      "text": "144"
    },
    {
      "id": "tgo-geometry-generated-026-c",
      "text": "72"
    },
    {
      "id": "tgo-geometry-generated-026-d",
      "text": "36"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-026-c"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-027",
  "subjectId": "tgo",
  "text": "Суреттегі барлық бұрыштар тік. Фигураның периметрін табыңыз.",
  "chartData": {
    "type": "tgo_step_perimeter",
    "widthLabel": "90",
    "heightLabel": "40"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-027-a",
      "text": "220"
    },
    {
      "id": "tgo-geometry-generated-027-b",
      "text": "170"
    },
    {
      "id": "tgo-geometry-generated-027-c",
      "text": "310"
    },
    {
      "id": "tgo-geometry-generated-027-d",
      "text": "260"
    },
    {
      "id": "tgo-geometry-generated-027-e",
      "text": "130"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-027-d"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-028",
  "subjectId": "tgo",
  "text": "Радиусы 6 см дөңгелектің ауданын табыңыз.",
  "chartData": {
    "type": "circle",
    "radius": 6,
    "label": "Дөңгелек ауданы",
    "showCenter": true
  },
  "options": [
    {
      "id": "tgo-geometry-generated-028-a",
      "text": "72π"
    },
    {
      "id": "tgo-geometry-generated-028-b",
      "text": "42π"
    },
    {
      "id": "tgo-geometry-generated-028-c",
      "text": "36π"
    },
    {
      "id": "tgo-geometry-generated-028-d",
      "text": "12π"
    },
    {
      "id": "tgo-geometry-generated-028-e",
      "text": "6π"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-028-c"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-029",
  "subjectId": "tgo",
  "text": "Шаршының қабырғасы 13 см. Периметрін табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-029-a",
      "text": "39 см"
    },
    {
      "id": "tgo-geometry-generated-029-b",
      "text": "52 см"
    },
    {
      "id": "tgo-geometry-generated-029-c",
      "text": "169 см"
    },
    {
      "id": "tgo-geometry-generated-029-d",
      "text": "26 см"
    },
    {
      "id": "tgo-geometry-generated-029-e",
      "text": "65 см"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-029-b"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-030",
  "subjectId": "tgo",
  "text": "Тік төртбұрыштың қабырғалары 8 см және 7 см. Ауданын табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-030-a",
      "text": "56 см²"
    },
    {
      "id": "tgo-geometry-generated-030-b",
      "text": "30 см²"
    },
    {
      "id": "tgo-geometry-generated-030-c",
      "text": "15 см²"
    },
    {
      "id": "tgo-geometry-generated-030-d",
      "text": "64 см²"
    },
    {
      "id": "tgo-geometry-generated-030-e",
      "text": "49 см²"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-030-a"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-031",
  "subjectId": "tgo",
  "text": "Қабырғалары 7, 11, x болатын үшбұрышта x-тің мүмкін мәнін табыңыз.",
  "chartData": {
    "type": "tgo_triangle_sides",
    "leftSide": "7",
    "rightSide": "11",
    "baseLabel": "x"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-031-a",
      "text": "4"
    },
    {
      "id": "tgo-geometry-generated-031-b",
      "text": "18"
    },
    {
      "id": "tgo-geometry-generated-031-c",
      "text": "19"
    },
    {
      "id": "tgo-geometry-generated-031-d",
      "text": "1"
    },
    {
      "id": "tgo-geometry-generated-031-e",
      "text": "6"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-031-e"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium",
  "hint": "Үшбұрыш теңсіздігі: екі қабырғаның айырмасынан үлкен, қосындысынан кіші болуы керек."
},
{
  "id": "tgo-geometry-generated-032",
  "subjectId": "tgo",
  "text": "Радиусы 5 см шеңберге іштей сызылған шаршының ауданын табыңыз.",
  "chartData": {
    "type": "tgo_inscribed_square",
    "radiusLabel": "5 см"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-032-a",
      "text": "50"
    },
    {
      "id": "tgo-geometry-generated-032-b",
      "text": "25"
    },
    {
      "id": "tgo-geometry-generated-032-c",
      "text": "54"
    },
    {
      "id": "tgo-geometry-generated-032-d",
      "text": "100"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-032-a"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-033",
  "subjectId": "tgo",
  "text": "Суреттегі барлық бұрыштар тік. Фигураның периметрін табыңыз.",
  "chartData": {
    "type": "tgo_step_perimeter",
    "widthLabel": "80",
    "heightLabel": "50"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-033-a",
      "text": "180"
    },
    {
      "id": "tgo-geometry-generated-033-b",
      "text": "310"
    },
    {
      "id": "tgo-geometry-generated-033-c",
      "text": "260"
    },
    {
      "id": "tgo-geometry-generated-033-d",
      "text": "130"
    },
    {
      "id": "tgo-geometry-generated-033-e",
      "text": "210"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-033-c"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-034",
  "subjectId": "tgo",
  "text": "Радиусы 4 см дөңгелектің ауданын табыңыз.",
  "chartData": {
    "type": "circle",
    "radius": 4,
    "label": "Дөңгелек ауданы",
    "showCenter": true
  },
  "options": [
    {
      "id": "tgo-geometry-generated-034-a",
      "text": "20π"
    },
    {
      "id": "tgo-geometry-generated-034-b",
      "text": "16π"
    },
    {
      "id": "tgo-geometry-generated-034-c",
      "text": "8π"
    },
    {
      "id": "tgo-geometry-generated-034-d",
      "text": "4π"
    },
    {
      "id": "tgo-geometry-generated-034-e",
      "text": "32π"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-034-b"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-035",
  "subjectId": "tgo",
  "text": "Шаршының қабырғасы 9 см. Периметрін табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-035-a",
      "text": "36 см"
    },
    {
      "id": "tgo-geometry-generated-035-b",
      "text": "81 см"
    },
    {
      "id": "tgo-geometry-generated-035-c",
      "text": "18 см"
    },
    {
      "id": "tgo-geometry-generated-035-d",
      "text": "45 см"
    },
    {
      "id": "tgo-geometry-generated-035-e",
      "text": "27 см"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-035-a"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-036",
  "subjectId": "tgo",
  "text": "Тік төртбұрыштың қабырғалары 14 см және 4 см. Ауданын табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-036-a",
      "text": "36 см²"
    },
    {
      "id": "tgo-geometry-generated-036-b",
      "text": "18 см²"
    },
    {
      "id": "tgo-geometry-generated-036-c",
      "text": "70 см²"
    },
    {
      "id": "tgo-geometry-generated-036-d",
      "text": "52 см²"
    },
    {
      "id": "tgo-geometry-generated-036-e",
      "text": "56 см²"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-036-e"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-037",
  "subjectId": "tgo",
  "text": "Қабырғалары 4, 7, x болатын үшбұрышта x-тің мүмкін мәнін табыңыз.",
  "chartData": {
    "type": "tgo_triangle_sides",
    "leftSide": "4",
    "rightSide": "7",
    "baseLabel": "x"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-037-a",
      "text": "11"
    },
    {
      "id": "tgo-geometry-generated-037-b",
      "text": "12"
    },
    {
      "id": "tgo-geometry-generated-037-c",
      "text": "1"
    },
    {
      "id": "tgo-geometry-generated-037-d",
      "text": "5"
    },
    {
      "id": "tgo-geometry-generated-037-e",
      "text": "3"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-037-d"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium",
  "hint": "Үшбұрыш теңсіздігі: екі қабырғаның айырмасынан үлкен, қосындысынан кіші болуы керек."
},
{
  "id": "tgo-geometry-generated-038",
  "subjectId": "tgo",
  "text": "Радиусы 4 см шеңберге іштей сызылған шаршының ауданын табыңыз.",
  "chartData": {
    "type": "tgo_inscribed_square",
    "radiusLabel": "4 см"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-038-a",
      "text": "36"
    },
    {
      "id": "tgo-geometry-generated-038-b",
      "text": "64"
    },
    {
      "id": "tgo-geometry-generated-038-c",
      "text": "32"
    },
    {
      "id": "tgo-geometry-generated-038-d",
      "text": "16"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-038-c"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-039",
  "subjectId": "tgo",
  "text": "Суреттегі барлық бұрыштар тік. Фигураның периметрін табыңыз.",
  "chartData": {
    "type": "tgo_step_perimeter",
    "widthLabel": "70",
    "heightLabel": "60"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-039-a",
      "text": "310"
    },
    {
      "id": "tgo-geometry-generated-039-b",
      "text": "260"
    },
    {
      "id": "tgo-geometry-generated-039-c",
      "text": "130"
    },
    {
      "id": "tgo-geometry-generated-039-d",
      "text": "200"
    },
    {
      "id": "tgo-geometry-generated-039-e",
      "text": "190"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-039-b"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-040",
  "subjectId": "tgo",
  "text": "Радиусы 10 см дөңгелектің ауданын табыңыз.",
  "chartData": {
    "type": "circle",
    "radius": 10,
    "label": "Дөңгелек ауданы",
    "showCenter": true
  },
  "options": [
    {
      "id": "tgo-geometry-generated-040-a",
      "text": "100π"
    },
    {
      "id": "tgo-geometry-generated-040-b",
      "text": "20π"
    },
    {
      "id": "tgo-geometry-generated-040-c",
      "text": "10π"
    },
    {
      "id": "tgo-geometry-generated-040-d",
      "text": "200π"
    },
    {
      "id": "tgo-geometry-generated-040-e",
      "text": "110π"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-040-a"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-041",
  "subjectId": "tgo",
  "text": "Шаршының қабырғасы 5 см. Периметрін табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-041-a",
      "text": "25 см"
    },
    {
      "id": "tgo-geometry-generated-041-b",
      "text": "10 см"
    },
    {
      "id": "tgo-geometry-generated-041-c",
      "text": "15 см"
    },
    {
      "id": "tgo-geometry-generated-041-d",
      "text": "20 см"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-041-d"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-042",
  "subjectId": "tgo",
  "text": "Тік төртбұрыштың қабырғалары 11 см және 8 см. Ауданын табыңыз.",
  "options": [
    {
      "id": "tgo-geometry-generated-042-a",
      "text": "19 см²"
    },
    {
      "id": "tgo-geometry-generated-042-b",
      "text": "99 см²"
    },
    {
      "id": "tgo-geometry-generated-042-c",
      "text": "80 см²"
    },
    {
      "id": "tgo-geometry-generated-042-d",
      "text": "88 см²"
    },
    {
      "id": "tgo-geometry-generated-042-e",
      "text": "38 см²"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-042-d"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium"
},
{
  "id": "tgo-geometry-generated-043",
  "subjectId": "tgo",
  "text": "Қабырғалары 10, 11, x болатын үшбұрышта x-тің мүмкін мәнін табыңыз.",
  "chartData": {
    "type": "tgo_triangle_sides",
    "leftSide": "10",
    "rightSide": "11",
    "baseLabel": "x"
  },
  "options": [
    {
      "id": "tgo-geometry-generated-043-a",
      "text": "22"
    },
    {
      "id": "tgo-geometry-generated-043-b",
      "text": "3"
    },
    {
      "id": "tgo-geometry-generated-043-c",
      "text": "1"
    },
    {
      "id": "tgo-geometry-generated-043-d",
      "text": "21"
    }
  ],
  "correctOptionIds": [
    "tgo-geometry-generated-043-b"
  ],
  "type": "SINGLE",
  "topic": "Геометрия",
  "difficulty": "medium",
  "hint": "Үшбұрыш теңсіздігі: екі қабырғаның айырмасынан үлкен, қосындысынан кіші болуы керек."
}
] as Question[];
