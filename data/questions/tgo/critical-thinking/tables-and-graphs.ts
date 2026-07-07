import { Question } from '../../../../types';

// tgo / Кестелер мен графиктер
export const tgoCriticalThinkingTablesAndGraphsQuestions = [
  {
    "id": "898295d8-84f6-4230-823d-0989217c7cd1",
    "subjectId": "tgo",
    "text": "Графиктегі деректерді талдау кезінде бірінші не істеу керек?",
    "options": [
      {
        "id": "1f36ffa3-b5c4-453c-8cb2-6c12d1e22ca7",
        "text": "Түстерге қарау"
      },
      {
        "id": "22341820-e1b0-4ca6-b1d2-44608fea873d",
        "text": "Графиктің өлшемін бағалау"
      },
      {
        "id": "704b5ad6-d910-4e84-96b1-e90c7883a4b6",
        "text": "Бірден қорытынды жасау"
      },
      {
        "id": "cdae4572-a6ad-44d3-91a3-9215b61efc07",
        "text": "Осьтердегі белгілерді түсіну"
      }
    ],
    "correctOptionIds": [
      "cdae4572-a6ad-44d3-91a3-9215b61efc07"
    ],
    "type": "SINGLE",
    "topic": "Кестелер мен графиктер",
    "difficulty": "medium"
  },
  {
    "id": "b96f9eb4-69e4-43d6-8595-7f9a0a27fe1e",
    "subjectId": "tgo",
    "text": "Кестедегі деректерді салыстыру кезінде қандай операция қолданылады?",
    "options": [
      {
        "id": "1b70c04c-9625-4eb7-9dd2-a0f545c6a1c9",
        "text": "Салыстыру, анализ, тренд табу"
      },
      {
        "id": "7db1b9bf-a766-438c-a0c9-9fd6c150619f",
        "text": "Тек бөлу"
      },
      {
        "id": "950c5f43-bbe9-41a8-900b-e5e21849225d",
        "text": "Санамау"
      },
      {
        "id": "e18881d1-538c-4b2f-983d-70eb281fae3b",
        "text": "Тек қосу"
      }
    ],
    "correctOptionIds": [
      "1b70c04c-9625-4eb7-9dd2-a0f545c6a1c9"
    ],
    "type": "SINGLE",
    "topic": "Кестелер мен графиктер",
    "difficulty": "medium"
  },
  {
    "id": "d4b6dd40-06b1-4cba-8296-bb69ab35b925",
    "subjectId": "tgo",
    "text": "Графикте көрсетілген өсу трендін қалай анықтауға болады?",
    "options": [
      {
        "id": "24c0ccf6-bac4-42e9-a0b9-40cd4f867340",
        "text": "Сызық тұрақты"
      },
      {
        "id": "3612c605-1298-497c-b829-61ec9164e445",
        "text": "Сызық жоқ"
      },
      {
        "id": "4cd58698-ba2d-442a-98f7-3e7a4ec7d247",
        "text": "Сызық төмен түседі"
      },
      {
        "id": "f4dc03c2-2d3f-4281-8128-221515119f1f",
        "text": "Сызық жоғары көтеріледі"
      }
    ],
    "correctOptionIds": [
      "f4dc03c2-2d3f-4281-8128-221515119f1f"
    ],
    "type": "SINGLE",
    "topic": "Кестелер мен графиктер",
    "difficulty": "medium"
  },
  {
    "id": "e988ed16-5b2d-471b-bac6-bcfca903674e",
    "subjectId": "tgo",
    "text": "Кестедегі деректерді талдау кезінде не маңызды?",
    "options": [
      {
        "id": "3a505604-c9a9-4ce6-8970-7c968430589d",
        "text": "Трендті табу және салыстыру"
      },
      {
        "id": "aa5eec1f-b2a2-432e-a7c5-9ab8df19d341",
        "text": "Түстер"
      },
      {
        "id": "bf6802b1-e1ad-4b84-9ace-d5b8b6fa410e",
        "text": "Қаріп түрі"
      },
      {
        "id": "eef8b963-04e0-4cf4-9838-52a898606645",
        "text": "Кесте өлшемі"
      }
    ],
    "correctOptionIds": [
      "3a505604-c9a9-4ce6-8970-7c968430589d"
    ],
    "type": "SINGLE",
    "topic": "Кестелер мен графиктер",
    "difficulty": "medium"
  },
  {
    "id": "tgo-chart-fruits-three-stores",
    "subjectId": "tgo",
    "text": "Диаграммада үш дүкендегі жемістер саны көрсетілген. Қай дүкенде жемістердің жалпы саны ең көп?",
    "chartData": {
      "type": "tgo_grouped_bar",
      "title": "Үш дүкендегі жемістер саны",
      "yMin": 18,
      "yMax": 25,
      "categories": [
        "1-дүкен",
        "2-дүкен",
        "3-дүкен"
      ],
      "series": [
        {
          "name": "Алма",
          "color": "#5B9BD5",
          "values": [
            22,
            22,
            24
          ]
        },
        {
          "name": "Алмұрт",
          "color": "#ED7D31",
          "values": [
            23,
            20,
            23
          ]
        },
        {
          "name": "Шие",
          "color": "#A5A5A5",
          "values": [
            20,
            24,
            24
          ]
        }
      ]
    },
    "options": [
      {
        "id": "tgo-chart-fruits-three-stores-a",
        "text": "2-дүкен"
      },
      {
        "id": "tgo-chart-fruits-three-stores-b",
        "text": "3-дүкен"
      },
      {
        "id": "tgo-chart-fruits-three-stores-c",
        "text": "1-дүкен"
      },
      {
        "id": "tgo-chart-fruits-three-stores-d",
        "text": "1 және 2-дүкендер"
      },
      {
        "id": "tgo-chart-fruits-three-stores-e",
        "text": "1 және 3-дүкендер"
      }
    ],
    "correctOptionIds": [
      "tgo-chart-fruits-three-stores-b"
    ],
    "type": "SINGLE",
    "topic": "Кестелер мен графиктер",
    "difficulty": "medium",
    "hint": "1-дүкен: 65, 2-дүкен: 66, 3-дүкен: 71."
  },
  {
    "id": "tgo-chart-venn-laptop-computer",
    "subjectId": "tgo",
    "text": "100 адамнан сауалнама алынды. 68 адамда ноутбук, 55 адамда компьютер бар, 28 адамда екеуі де бар. Тек ноутбугы бар адамдар санын табыңыз.",
    "chartData": {
      "type": "tgo_venn",
      "leftLabel": "Ноутбук",
      "rightLabel": "Компьютер",
      "leftTotal": 68,
      "rightTotal": 55,
      "intersection": 28,
      "outside": 5
    },
    "options": [
      {
        "id": "tgo-chart-venn-laptop-computer-a",
        "text": "13"
      },
      {
        "id": "tgo-chart-venn-laptop-computer-b",
        "text": "27"
      },
      {
        "id": "tgo-chart-venn-laptop-computer-c",
        "text": "17"
      },
      {
        "id": "tgo-chart-venn-laptop-computer-d",
        "text": "55"
      },
      {
        "id": "tgo-chart-venn-laptop-computer-e",
        "text": "40"
      }
    ],
    "correctOptionIds": [
      "tgo-chart-venn-laptop-computer-e"
    ],
    "type": "SINGLE",
    "topic": "Кестелер мен графиктер",
    "difficulty": "medium",
    "hint": "Тек ноутбук = 68 - 28 = 40."
  },
{
  "id": "tgo-tables-and-graphs-generated-001",
  "subjectId": "tgo",
  "text": "Диаграмма бойынша жемістердің жалпы саны ең көп дүкенді анықтаңыз.",
  "chartData": {
    "type": "tgo_grouped_bar",
    "title": "Үш дүкендегі жемістер саны",
    "yMin": 18,
    "yMax": 26,
    "categories": [
      "1-дүкен",
      "2-дүкен",
      "3-дүкен"
    ],
    "series": [
      {
        "name": "Алма",
        "color": "#5b9bd5",
        "values": [
          22,
          21,
          25
        ]
      },
      {
        "name": "Алмұрт",
        "color": "#ed7d31",
        "values": [
          23,
          22,
          21
        ]
      },
      {
        "name": "Шие",
        "color": "#a5a5a5",
        "values": [
          20,
          24,
          24
        ]
      }
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-001-a",
      "text": "1-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-001-b",
      "text": "2-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-001-c",
      "text": "Барлығы тең"
    },
    {
      "id": "tgo-tables-and-graphs-generated-001-d",
      "text": "3-дүкен"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-001-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-002",
  "subjectId": "tgo",
  "text": "Бағанды диаграммадағы барлық мәндердің қосындысын табыңыз.",
  "chartData": {
    "type": "bar",
    "title": "Күндер бойынша тапсырма саны",
    "labels": [
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі"
    ],
    "data": [
      13,
      16,
      12,
      19
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-002-a",
      "text": "63"
    },
    {
      "id": "tgo-tables-and-graphs-generated-002-b",
      "text": "19"
    },
    {
      "id": "tgo-tables-and-graphs-generated-002-c",
      "text": "12"
    },
    {
      "id": "tgo-tables-and-graphs-generated-002-d",
      "text": "60"
    },
    {
      "id": "tgo-tables-and-graphs-generated-002-e",
      "text": "56"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-002-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-003",
  "subjectId": "tgo",
  "text": "Сызықтық график бойынша I кезеңнен IV кезеңге дейінгі өсімді табыңыз.",
  "chartData": {
    "type": "line",
    "labels": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "data": [
      32,
      36,
      35,
      41
    ],
    "color": "#2563eb"
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-003-a",
      "text": "41"
    },
    {
      "id": "tgo-tables-and-graphs-generated-003-b",
      "text": "32"
    },
    {
      "id": "tgo-tables-and-graphs-generated-003-c",
      "text": "9"
    },
    {
      "id": "tgo-tables-and-graphs-generated-003-d",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-003-e",
      "text": "7"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-003-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-004",
  "subjectId": "tgo",
  "text": "Кесте бойынша B тобының жалпы қатысушылар санын табыңыз.",
  "chartData": {
    "type": "table",
    "headers": [
      "Топ",
      "Ұл",
      "Қыз"
    ],
    "rows": [
      [
        "A тобы",
        15,
        8
      ],
      [
        "B тобы",
        13,
        12
      ],
      [
        "C тобы",
        11,
        10
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-004-a",
      "text": "25"
    },
    {
      "id": "tgo-tables-and-graphs-generated-004-b",
      "text": "27"
    },
    {
      "id": "tgo-tables-and-graphs-generated-004-c",
      "text": "23"
    },
    {
      "id": "tgo-tables-and-graphs-generated-004-d",
      "text": "21"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-004-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-005",
  "subjectId": "tgo",
  "text": "Дөңгелек диаграммада 200 оқушының қызығушылығы пайызбен берілген. Музыкаға қызығатын оқушылар санын табыңыз.",
  "chartData": {
    "type": "pie",
    "labels": [
      "Кітап",
      "Спорт",
      "Музыка",
      "Сурет"
    ],
    "data": [
      25,
      35,
      20,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-005-a",
      "text": "70"
    },
    {
      "id": "tgo-tables-and-graphs-generated-005-b",
      "text": "50"
    },
    {
      "id": "tgo-tables-and-graphs-generated-005-c",
      "text": "60"
    },
    {
      "id": "tgo-tables-and-graphs-generated-005-d",
      "text": "80"
    },
    {
      "id": "tgo-tables-and-graphs-generated-005-e",
      "text": "40"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-005-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-006",
  "subjectId": "tgo",
  "text": "Диаграмма бойынша жемістердің жалпы саны ең көп дүкенді анықтаңыз.",
  "chartData": {
    "type": "tgo_grouped_bar",
    "title": "Үш дүкендегі жемістер саны",
    "yMin": 18,
    "yMax": 26,
    "categories": [
      "1-дүкен",
      "2-дүкен",
      "3-дүкен"
    ],
    "series": [
      {
        "name": "Алма",
        "color": "#5b9bd5",
        "values": [
          24,
          21,
          26
        ]
      },
      {
        "name": "Алмұрт",
        "color": "#ed7d31",
        "values": [
          24,
          24,
          21
        ]
      },
      {
        "name": "Шие",
        "color": "#a5a5a5",
        "values": [
          20,
          22,
          21
        ]
      }
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-006-a",
      "text": "3-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-006-b",
      "text": "Барлығы тең"
    },
    {
      "id": "tgo-tables-and-graphs-generated-006-c",
      "text": "1-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-006-d",
      "text": "2-дүкен"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-006-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-007",
  "subjectId": "tgo",
  "text": "Бағанды диаграммадағы барлық мәндердің қосындысын табыңыз.",
  "chartData": {
    "type": "bar",
    "title": "Күндер бойынша тапсырма саны",
    "labels": [
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі"
    ],
    "data": [
      13,
      17,
      11,
      18
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-007-a",
      "text": "62"
    },
    {
      "id": "tgo-tables-and-graphs-generated-007-b",
      "text": "18"
    },
    {
      "id": "tgo-tables-and-graphs-generated-007-c",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-007-d",
      "text": "59"
    },
    {
      "id": "tgo-tables-and-graphs-generated-007-e",
      "text": "55"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-007-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-008",
  "subjectId": "tgo",
  "text": "Сызықтық график бойынша I кезеңнен IV кезеңге дейінгі өсімді табыңыз.",
  "chartData": {
    "type": "line",
    "labels": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "data": [
      37,
      41,
      40,
      46
    ],
    "color": "#2563eb"
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-008-a",
      "text": "46"
    },
    {
      "id": "tgo-tables-and-graphs-generated-008-b",
      "text": "37"
    },
    {
      "id": "tgo-tables-and-graphs-generated-008-c",
      "text": "9"
    },
    {
      "id": "tgo-tables-and-graphs-generated-008-d",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-008-e",
      "text": "7"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-008-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-009",
  "subjectId": "tgo",
  "text": "Кесте бойынша B тобының жалпы қатысушылар санын табыңыз.",
  "chartData": {
    "type": "table",
    "headers": [
      "Топ",
      "Ұл",
      "Қыз"
    ],
    "rows": [
      [
        "A тобы",
        12,
        10
      ],
      [
        "B тобы",
        13,
        9
      ],
      [
        "C тобы",
        13,
        10
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-009-a",
      "text": "24"
    },
    {
      "id": "tgo-tables-and-graphs-generated-009-b",
      "text": "20"
    },
    {
      "id": "tgo-tables-and-graphs-generated-009-c",
      "text": "23"
    },
    {
      "id": "tgo-tables-and-graphs-generated-009-d",
      "text": "22"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-009-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-010",
  "subjectId": "tgo",
  "text": "Дөңгелек диаграммада 200 оқушының қызығушылығы пайызбен берілген. Музыкаға қызығатын оқушылар санын табыңыз.",
  "chartData": {
    "type": "pie",
    "labels": [
      "Кітап",
      "Спорт",
      "Музыка",
      "Сурет"
    ],
    "data": [
      25,
      35,
      20,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-010-a",
      "text": "70"
    },
    {
      "id": "tgo-tables-and-graphs-generated-010-b",
      "text": "50"
    },
    {
      "id": "tgo-tables-and-graphs-generated-010-c",
      "text": "60"
    },
    {
      "id": "tgo-tables-and-graphs-generated-010-d",
      "text": "80"
    },
    {
      "id": "tgo-tables-and-graphs-generated-010-e",
      "text": "40"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-010-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-011",
  "subjectId": "tgo",
  "text": "Диаграмма бойынша жемістердің жалпы саны ең көп дүкенді анықтаңыз.",
  "chartData": {
    "type": "tgo_grouped_bar",
    "title": "Үш дүкендегі жемістер саны",
    "yMin": 18,
    "yMax": 26,
    "categories": [
      "1-дүкен",
      "2-дүкен",
      "3-дүкен"
    ],
    "series": [
      {
        "name": "Алма",
        "color": "#5b9bd5",
        "values": [
          23,
          21,
          23
        ]
      },
      {
        "name": "Алмұрт",
        "color": "#ed7d31",
        "values": [
          21,
          23,
          21
        ]
      },
      {
        "name": "Шие",
        "color": "#a5a5a5",
        "values": [
          20,
          23,
          22
        ]
      }
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-011-a",
      "text": "Барлығы тең"
    },
    {
      "id": "tgo-tables-and-graphs-generated-011-b",
      "text": "2-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-011-c",
      "text": "1-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-011-d",
      "text": "3-дүкен"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-011-b"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-012",
  "subjectId": "tgo",
  "text": "Бағанды диаграммадағы барлық мәндердің қосындысын табыңыз.",
  "chartData": {
    "type": "bar",
    "title": "Күндер бойынша тапсырма саны",
    "labels": [
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі"
    ],
    "data": [
      13,
      18,
      16,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-012-a",
      "text": "70"
    },
    {
      "id": "tgo-tables-and-graphs-generated-012-b",
      "text": "20"
    },
    {
      "id": "tgo-tables-and-graphs-generated-012-c",
      "text": "13"
    },
    {
      "id": "tgo-tables-and-graphs-generated-012-d",
      "text": "67"
    },
    {
      "id": "tgo-tables-and-graphs-generated-012-e",
      "text": "63"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-012-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-013",
  "subjectId": "tgo",
  "text": "Сызықтық график бойынша I кезеңнен IV кезеңге дейінгі өсімді табыңыз.",
  "chartData": {
    "type": "line",
    "labels": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "data": [
      42,
      46,
      45,
      51
    ],
    "color": "#2563eb"
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-013-a",
      "text": "51"
    },
    {
      "id": "tgo-tables-and-graphs-generated-013-b",
      "text": "42"
    },
    {
      "id": "tgo-tables-and-graphs-generated-013-c",
      "text": "9"
    },
    {
      "id": "tgo-tables-and-graphs-generated-013-d",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-013-e",
      "text": "7"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-013-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-014",
  "subjectId": "tgo",
  "text": "Кесте бойынша B тобының жалпы қатысушылар санын табыңыз.",
  "chartData": {
    "type": "table",
    "headers": [
      "Топ",
      "Ұл",
      "Қыз"
    ],
    "rows": [
      [
        "A тобы",
        13,
        9
      ],
      [
        "B тобы",
        13,
        10
      ],
      [
        "C тобы",
        12,
        10
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-014-a",
      "text": "21"
    },
    {
      "id": "tgo-tables-and-graphs-generated-014-b",
      "text": "22"
    },
    {
      "id": "tgo-tables-and-graphs-generated-014-c",
      "text": "23"
    },
    {
      "id": "tgo-tables-and-graphs-generated-014-d",
      "text": "25"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-014-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-015",
  "subjectId": "tgo",
  "text": "Дөңгелек диаграммада 200 оқушының қызығушылығы пайызбен берілген. Музыкаға қызығатын оқушылар санын табыңыз.",
  "chartData": {
    "type": "pie",
    "labels": [
      "Кітап",
      "Спорт",
      "Музыка",
      "Сурет"
    ],
    "data": [
      25,
      35,
      20,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-015-a",
      "text": "70"
    },
    {
      "id": "tgo-tables-and-graphs-generated-015-b",
      "text": "50"
    },
    {
      "id": "tgo-tables-and-graphs-generated-015-c",
      "text": "60"
    },
    {
      "id": "tgo-tables-and-graphs-generated-015-d",
      "text": "80"
    },
    {
      "id": "tgo-tables-and-graphs-generated-015-e",
      "text": "40"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-015-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-016",
  "subjectId": "tgo",
  "text": "Диаграмма бойынша жемістердің жалпы саны ең көп дүкенді анықтаңыз.",
  "chartData": {
    "type": "tgo_grouped_bar",
    "title": "Үш дүкендегі жемістер саны",
    "yMin": 18,
    "yMax": 26,
    "categories": [
      "1-дүкен",
      "2-дүкен",
      "3-дүкен"
    ],
    "series": [
      {
        "name": "Алма",
        "color": "#5b9bd5",
        "values": [
          22,
          21,
          24
        ]
      },
      {
        "name": "Алмұрт",
        "color": "#ed7d31",
        "values": [
          22,
          22,
          21
        ]
      },
      {
        "name": "Шие",
        "color": "#a5a5a5",
        "values": [
          20,
          24,
          23
        ]
      }
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-016-a",
      "text": "3-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-016-b",
      "text": "1-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-016-c",
      "text": "2-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-016-d",
      "text": "Барлығы тең"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-016-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-017",
  "subjectId": "tgo",
  "text": "Бағанды диаграммадағы барлық мәндердің қосындысын табыңыз.",
  "chartData": {
    "type": "bar",
    "title": "Күндер бойынша тапсырма саны",
    "labels": [
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі"
    ],
    "data": [
      13,
      15,
      15,
      19
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-017-a",
      "text": "65"
    },
    {
      "id": "tgo-tables-and-graphs-generated-017-b",
      "text": "19"
    },
    {
      "id": "tgo-tables-and-graphs-generated-017-c",
      "text": "13"
    },
    {
      "id": "tgo-tables-and-graphs-generated-017-d",
      "text": "62"
    },
    {
      "id": "tgo-tables-and-graphs-generated-017-e",
      "text": "58"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-017-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-018",
  "subjectId": "tgo",
  "text": "Сызықтық график бойынша I кезеңнен IV кезеңге дейінгі өсімді табыңыз.",
  "chartData": {
    "type": "line",
    "labels": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "data": [
      47,
      51,
      50,
      56
    ],
    "color": "#2563eb"
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-018-a",
      "text": "56"
    },
    {
      "id": "tgo-tables-and-graphs-generated-018-b",
      "text": "47"
    },
    {
      "id": "tgo-tables-and-graphs-generated-018-c",
      "text": "9"
    },
    {
      "id": "tgo-tables-and-graphs-generated-018-d",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-018-e",
      "text": "7"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-018-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-019",
  "subjectId": "tgo",
  "text": "Кесте бойынша B тобының жалпы қатысушылар санын табыңыз.",
  "chartData": {
    "type": "table",
    "headers": [
      "Топ",
      "Ұл",
      "Қыз"
    ],
    "rows": [
      [
        "A тобы",
        14,
        8
      ],
      [
        "B тобы",
        13,
        11
      ],
      [
        "C тобы",
        11,
        10
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-019-a",
      "text": "21"
    },
    {
      "id": "tgo-tables-and-graphs-generated-019-b",
      "text": "24"
    },
    {
      "id": "tgo-tables-and-graphs-generated-019-c",
      "text": "26"
    },
    {
      "id": "tgo-tables-and-graphs-generated-019-d",
      "text": "22"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-019-b"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-020",
  "subjectId": "tgo",
  "text": "Дөңгелек диаграммада 200 оқушының қызығушылығы пайызбен берілген. Музыкаға қызығатын оқушылар санын табыңыз.",
  "chartData": {
    "type": "pie",
    "labels": [
      "Кітап",
      "Спорт",
      "Музыка",
      "Сурет"
    ],
    "data": [
      25,
      35,
      20,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-020-a",
      "text": "70"
    },
    {
      "id": "tgo-tables-and-graphs-generated-020-b",
      "text": "50"
    },
    {
      "id": "tgo-tables-and-graphs-generated-020-c",
      "text": "60"
    },
    {
      "id": "tgo-tables-and-graphs-generated-020-d",
      "text": "80"
    },
    {
      "id": "tgo-tables-and-graphs-generated-020-e",
      "text": "40"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-020-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-021",
  "subjectId": "tgo",
  "text": "Диаграмма бойынша жемістердің жалпы саны ең көп дүкенді анықтаңыз.",
  "chartData": {
    "type": "tgo_grouped_bar",
    "title": "Үш дүкендегі жемістер саны",
    "yMin": 18,
    "yMax": 26,
    "categories": [
      "1-дүкен",
      "2-дүкен",
      "3-дүкен"
    ],
    "series": [
      {
        "name": "Алма",
        "color": "#5b9bd5",
        "values": [
          24,
          21,
          25
        ]
      },
      {
        "name": "Алмұрт",
        "color": "#ed7d31",
        "values": [
          23,
          24,
          21
        ]
      },
      {
        "name": "Шие",
        "color": "#a5a5a5",
        "values": [
          20,
          22,
          24
        ]
      }
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-021-a",
      "text": "1-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-021-b",
      "text": "2-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-021-c",
      "text": "Барлығы тең"
    },
    {
      "id": "tgo-tables-and-graphs-generated-021-d",
      "text": "3-дүкен"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-021-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-022",
  "subjectId": "tgo",
  "text": "Бағанды диаграммадағы барлық мәндердің қосындысын табыңыз.",
  "chartData": {
    "type": "bar",
    "title": "Күндер бойынша тапсырма саны",
    "labels": [
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі"
    ],
    "data": [
      13,
      16,
      14,
      18
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-022-a",
      "text": "64"
    },
    {
      "id": "tgo-tables-and-graphs-generated-022-b",
      "text": "18"
    },
    {
      "id": "tgo-tables-and-graphs-generated-022-c",
      "text": "13"
    },
    {
      "id": "tgo-tables-and-graphs-generated-022-d",
      "text": "61"
    },
    {
      "id": "tgo-tables-and-graphs-generated-022-e",
      "text": "57"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-022-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-023",
  "subjectId": "tgo",
  "text": "Сызықтық график бойынша I кезеңнен IV кезеңге дейінгі өсімді табыңыз.",
  "chartData": {
    "type": "line",
    "labels": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "data": [
      52,
      56,
      55,
      61
    ],
    "color": "#2563eb"
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-023-a",
      "text": "61"
    },
    {
      "id": "tgo-tables-and-graphs-generated-023-b",
      "text": "52"
    },
    {
      "id": "tgo-tables-and-graphs-generated-023-c",
      "text": "9"
    },
    {
      "id": "tgo-tables-and-graphs-generated-023-d",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-023-e",
      "text": "7"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-023-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-024",
  "subjectId": "tgo",
  "text": "Кесте бойынша B тобының жалпы қатысушылар санын табыңыз.",
  "chartData": {
    "type": "table",
    "headers": [
      "Топ",
      "Ұл",
      "Қыз"
    ],
    "rows": [
      [
        "A тобы",
        15,
        10
      ],
      [
        "B тобы",
        13,
        12
      ],
      [
        "C тобы",
        13,
        10
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-024-a",
      "text": "25"
    },
    {
      "id": "tgo-tables-and-graphs-generated-024-b",
      "text": "27"
    },
    {
      "id": "tgo-tables-and-graphs-generated-024-c",
      "text": "23"
    },
    {
      "id": "tgo-tables-and-graphs-generated-024-d",
      "text": "26"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-024-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-025",
  "subjectId": "tgo",
  "text": "Дөңгелек диаграммада 200 оқушының қызығушылығы пайызбен берілген. Музыкаға қызығатын оқушылар санын табыңыз.",
  "chartData": {
    "type": "pie",
    "labels": [
      "Кітап",
      "Спорт",
      "Музыка",
      "Сурет"
    ],
    "data": [
      25,
      35,
      20,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-025-a",
      "text": "70"
    },
    {
      "id": "tgo-tables-and-graphs-generated-025-b",
      "text": "50"
    },
    {
      "id": "tgo-tables-and-graphs-generated-025-c",
      "text": "60"
    },
    {
      "id": "tgo-tables-and-graphs-generated-025-d",
      "text": "80"
    },
    {
      "id": "tgo-tables-and-graphs-generated-025-e",
      "text": "40"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-025-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-026",
  "subjectId": "tgo",
  "text": "Диаграмма бойынша жемістердің жалпы саны ең көп дүкенді анықтаңыз.",
  "chartData": {
    "type": "tgo_grouped_bar",
    "title": "Үш дүкендегі жемістер саны",
    "yMin": 18,
    "yMax": 26,
    "categories": [
      "1-дүкен",
      "2-дүкен",
      "3-дүкен"
    ],
    "series": [
      {
        "name": "Алма",
        "color": "#5b9bd5",
        "values": [
          23,
          21,
          26
        ]
      },
      {
        "name": "Алмұрт",
        "color": "#ed7d31",
        "values": [
          24,
          23,
          21
        ]
      },
      {
        "name": "Шие",
        "color": "#a5a5a5",
        "values": [
          20,
          23,
          21
        ]
      }
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-026-a",
      "text": "2-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-026-b",
      "text": "Барлығы тең"
    },
    {
      "id": "tgo-tables-and-graphs-generated-026-c",
      "text": "3-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-026-d",
      "text": "1-дүкен"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-026-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-027",
  "subjectId": "tgo",
  "text": "Бағанды диаграммадағы барлық мәндердің қосындысын табыңыз.",
  "chartData": {
    "type": "bar",
    "title": "Күндер бойынша тапсырма саны",
    "labels": [
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі"
    ],
    "data": [
      13,
      17,
      13,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-027-a",
      "text": "66"
    },
    {
      "id": "tgo-tables-and-graphs-generated-027-b",
      "text": "20"
    },
    {
      "id": "tgo-tables-and-graphs-generated-027-c",
      "text": "13"
    },
    {
      "id": "tgo-tables-and-graphs-generated-027-d",
      "text": "63"
    },
    {
      "id": "tgo-tables-and-graphs-generated-027-e",
      "text": "59"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-027-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-028",
  "subjectId": "tgo",
  "text": "Сызықтық график бойынша I кезеңнен IV кезеңге дейінгі өсімді табыңыз.",
  "chartData": {
    "type": "line",
    "labels": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "data": [
      57,
      61,
      60,
      66
    ],
    "color": "#2563eb"
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-028-a",
      "text": "66"
    },
    {
      "id": "tgo-tables-and-graphs-generated-028-b",
      "text": "57"
    },
    {
      "id": "tgo-tables-and-graphs-generated-028-c",
      "text": "9"
    },
    {
      "id": "tgo-tables-and-graphs-generated-028-d",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-028-e",
      "text": "7"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-028-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-029",
  "subjectId": "tgo",
  "text": "Кесте бойынша B тобының жалпы қатысушылар санын табыңыз.",
  "chartData": {
    "type": "table",
    "headers": [
      "Топ",
      "Ұл",
      "Қыз"
    ],
    "rows": [
      [
        "A тобы",
        12,
        9
      ],
      [
        "B тобы",
        13,
        9
      ],
      [
        "C тобы",
        12,
        10
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-029-a",
      "text": "24"
    },
    {
      "id": "tgo-tables-and-graphs-generated-029-b",
      "text": "20"
    },
    {
      "id": "tgo-tables-and-graphs-generated-029-c",
      "text": "21"
    },
    {
      "id": "tgo-tables-and-graphs-generated-029-d",
      "text": "22"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-029-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-030",
  "subjectId": "tgo",
  "text": "Дөңгелек диаграммада 200 оқушының қызығушылығы пайызбен берілген. Музыкаға қызығатын оқушылар санын табыңыз.",
  "chartData": {
    "type": "pie",
    "labels": [
      "Кітап",
      "Спорт",
      "Музыка",
      "Сурет"
    ],
    "data": [
      25,
      35,
      20,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-030-a",
      "text": "70"
    },
    {
      "id": "tgo-tables-and-graphs-generated-030-b",
      "text": "50"
    },
    {
      "id": "tgo-tables-and-graphs-generated-030-c",
      "text": "60"
    },
    {
      "id": "tgo-tables-and-graphs-generated-030-d",
      "text": "80"
    },
    {
      "id": "tgo-tables-and-graphs-generated-030-e",
      "text": "40"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-030-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-031",
  "subjectId": "tgo",
  "text": "Диаграмма бойынша жемістердің жалпы саны ең көп дүкенді анықтаңыз.",
  "chartData": {
    "type": "tgo_grouped_bar",
    "title": "Үш дүкендегі жемістер саны",
    "yMin": 18,
    "yMax": 26,
    "categories": [
      "1-дүкен",
      "2-дүкен",
      "3-дүкен"
    ],
    "series": [
      {
        "name": "Алма",
        "color": "#5b9bd5",
        "values": [
          22,
          21,
          23
        ]
      },
      {
        "name": "Алмұрт",
        "color": "#ed7d31",
        "values": [
          21,
          22,
          21
        ]
      },
      {
        "name": "Шие",
        "color": "#a5a5a5",
        "values": [
          20,
          24,
          22
        ]
      }
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-031-a",
      "text": "Барлығы тең"
    },
    {
      "id": "tgo-tables-and-graphs-generated-031-b",
      "text": "2-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-031-c",
      "text": "1-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-031-d",
      "text": "3-дүкен"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-031-b"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-032",
  "subjectId": "tgo",
  "text": "Бағанды диаграммадағы барлық мәндердің қосындысын табыңыз.",
  "chartData": {
    "type": "bar",
    "title": "Күндер бойынша тапсырма саны",
    "labels": [
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі"
    ],
    "data": [
      13,
      18,
      12,
      19
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-032-a",
      "text": "65"
    },
    {
      "id": "tgo-tables-and-graphs-generated-032-b",
      "text": "19"
    },
    {
      "id": "tgo-tables-and-graphs-generated-032-c",
      "text": "12"
    },
    {
      "id": "tgo-tables-and-graphs-generated-032-d",
      "text": "62"
    },
    {
      "id": "tgo-tables-and-graphs-generated-032-e",
      "text": "58"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-032-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-033",
  "subjectId": "tgo",
  "text": "Сызықтық график бойынша I кезеңнен IV кезеңге дейінгі өсімді табыңыз.",
  "chartData": {
    "type": "line",
    "labels": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "data": [
      62,
      66,
      65,
      71
    ],
    "color": "#2563eb"
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-033-a",
      "text": "71"
    },
    {
      "id": "tgo-tables-and-graphs-generated-033-b",
      "text": "62"
    },
    {
      "id": "tgo-tables-and-graphs-generated-033-c",
      "text": "9"
    },
    {
      "id": "tgo-tables-and-graphs-generated-033-d",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-033-e",
      "text": "7"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-033-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-034",
  "subjectId": "tgo",
  "text": "Кесте бойынша B тобының жалпы қатысушылар санын табыңыз.",
  "chartData": {
    "type": "table",
    "headers": [
      "Топ",
      "Ұл",
      "Қыз"
    ],
    "rows": [
      [
        "A тобы",
        13,
        8
      ],
      [
        "B тобы",
        13,
        10
      ],
      [
        "C тобы",
        11,
        10
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-034-a",
      "text": "21"
    },
    {
      "id": "tgo-tables-and-graphs-generated-034-b",
      "text": "24"
    },
    {
      "id": "tgo-tables-and-graphs-generated-034-c",
      "text": "23"
    },
    {
      "id": "tgo-tables-and-graphs-generated-034-d",
      "text": "25"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-034-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-035",
  "subjectId": "tgo",
  "text": "Дөңгелек диаграммада 200 оқушының қызығушылығы пайызбен берілген. Музыкаға қызығатын оқушылар санын табыңыз.",
  "chartData": {
    "type": "pie",
    "labels": [
      "Кітап",
      "Спорт",
      "Музыка",
      "Сурет"
    ],
    "data": [
      25,
      35,
      20,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-035-a",
      "text": "70"
    },
    {
      "id": "tgo-tables-and-graphs-generated-035-b",
      "text": "50"
    },
    {
      "id": "tgo-tables-and-graphs-generated-035-c",
      "text": "60"
    },
    {
      "id": "tgo-tables-and-graphs-generated-035-d",
      "text": "80"
    },
    {
      "id": "tgo-tables-and-graphs-generated-035-e",
      "text": "40"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-035-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-036",
  "subjectId": "tgo",
  "text": "Диаграмма бойынша жемістердің жалпы саны ең көп дүкенді анықтаңыз.",
  "chartData": {
    "type": "tgo_grouped_bar",
    "title": "Үш дүкендегі жемістер саны",
    "yMin": 18,
    "yMax": 26,
    "categories": [
      "1-дүкен",
      "2-дүкен",
      "3-дүкен"
    ],
    "series": [
      {
        "name": "Алма",
        "color": "#5b9bd5",
        "values": [
          24,
          21,
          24
        ]
      },
      {
        "name": "Алмұрт",
        "color": "#ed7d31",
        "values": [
          22,
          24,
          21
        ]
      },
      {
        "name": "Шие",
        "color": "#a5a5a5",
        "values": [
          20,
          22,
          23
        ]
      }
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-036-a",
      "text": "3-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-036-b",
      "text": "1-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-036-c",
      "text": "2-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-036-d",
      "text": "Барлығы тең"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-036-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-037",
  "subjectId": "tgo",
  "text": "Бағанды диаграммадағы барлық мәндердің қосындысын табыңыз.",
  "chartData": {
    "type": "bar",
    "title": "Күндер бойынша тапсырма саны",
    "labels": [
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі"
    ],
    "data": [
      13,
      15,
      11,
      18
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-037-a",
      "text": "60"
    },
    {
      "id": "tgo-tables-and-graphs-generated-037-b",
      "text": "18"
    },
    {
      "id": "tgo-tables-and-graphs-generated-037-c",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-037-d",
      "text": "57"
    },
    {
      "id": "tgo-tables-and-graphs-generated-037-e",
      "text": "53"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-037-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-038",
  "subjectId": "tgo",
  "text": "Сызықтық график бойынша I кезеңнен IV кезеңге дейінгі өсімді табыңыз.",
  "chartData": {
    "type": "line",
    "labels": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "data": [
      67,
      71,
      70,
      76
    ],
    "color": "#2563eb"
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-038-a",
      "text": "76"
    },
    {
      "id": "tgo-tables-and-graphs-generated-038-b",
      "text": "67"
    },
    {
      "id": "tgo-tables-and-graphs-generated-038-c",
      "text": "9"
    },
    {
      "id": "tgo-tables-and-graphs-generated-038-d",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-038-e",
      "text": "7"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-038-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-039",
  "subjectId": "tgo",
  "text": "Кесте бойынша B тобының жалпы қатысушылар санын табыңыз.",
  "chartData": {
    "type": "table",
    "headers": [
      "Топ",
      "Ұл",
      "Қыз"
    ],
    "rows": [
      [
        "A тобы",
        14,
        10
      ],
      [
        "B тобы",
        13,
        11
      ],
      [
        "C тобы",
        13,
        10
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-039-a",
      "text": "23"
    },
    {
      "id": "tgo-tables-and-graphs-generated-039-b",
      "text": "24"
    },
    {
      "id": "tgo-tables-and-graphs-generated-039-c",
      "text": "26"
    },
    {
      "id": "tgo-tables-and-graphs-generated-039-d",
      "text": "22"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-039-b"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-040",
  "subjectId": "tgo",
  "text": "Дөңгелек диаграммада 200 оқушының қызығушылығы пайызбен берілген. Музыкаға қызығатын оқушылар санын табыңыз.",
  "chartData": {
    "type": "pie",
    "labels": [
      "Кітап",
      "Спорт",
      "Музыка",
      "Сурет"
    ],
    "data": [
      25,
      35,
      20,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-040-a",
      "text": "70"
    },
    {
      "id": "tgo-tables-and-graphs-generated-040-b",
      "text": "50"
    },
    {
      "id": "tgo-tables-and-graphs-generated-040-c",
      "text": "60"
    },
    {
      "id": "tgo-tables-and-graphs-generated-040-d",
      "text": "80"
    },
    {
      "id": "tgo-tables-and-graphs-generated-040-e",
      "text": "40"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-040-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-041",
  "subjectId": "tgo",
  "text": "Диаграмма бойынша жемістердің жалпы саны ең көп дүкенді анықтаңыз.",
  "chartData": {
    "type": "tgo_grouped_bar",
    "title": "Үш дүкендегі жемістер саны",
    "yMin": 18,
    "yMax": 26,
    "categories": [
      "1-дүкен",
      "2-дүкен",
      "3-дүкен"
    ],
    "series": [
      {
        "name": "Алма",
        "color": "#5b9bd5",
        "values": [
          23,
          21,
          25
        ]
      },
      {
        "name": "Алмұрт",
        "color": "#ed7d31",
        "values": [
          23,
          23,
          21
        ]
      },
      {
        "name": "Шие",
        "color": "#a5a5a5",
        "values": [
          20,
          23,
          24
        ]
      }
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-041-a",
      "text": "1-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-041-b",
      "text": "2-дүкен"
    },
    {
      "id": "tgo-tables-and-graphs-generated-041-c",
      "text": "Барлығы тең"
    },
    {
      "id": "tgo-tables-and-graphs-generated-041-d",
      "text": "3-дүкен"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-041-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-042",
  "subjectId": "tgo",
  "text": "Бағанды диаграммадағы барлық мәндердің қосындысын табыңыз.",
  "chartData": {
    "type": "bar",
    "title": "Күндер бойынша тапсырма саны",
    "labels": [
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі"
    ],
    "data": [
      13,
      16,
      16,
      20
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-042-a",
      "text": "68"
    },
    {
      "id": "tgo-tables-and-graphs-generated-042-b",
      "text": "20"
    },
    {
      "id": "tgo-tables-and-graphs-generated-042-c",
      "text": "13"
    },
    {
      "id": "tgo-tables-and-graphs-generated-042-d",
      "text": "65"
    },
    {
      "id": "tgo-tables-and-graphs-generated-042-e",
      "text": "61"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-042-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-043",
  "subjectId": "tgo",
  "text": "Сызықтық график бойынша I кезеңнен IV кезеңге дейінгі өсімді табыңыз.",
  "chartData": {
    "type": "line",
    "labels": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "data": [
      72,
      76,
      75,
      81
    ],
    "color": "#2563eb"
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-043-a",
      "text": "81"
    },
    {
      "id": "tgo-tables-and-graphs-generated-043-b",
      "text": "72"
    },
    {
      "id": "tgo-tables-and-graphs-generated-043-c",
      "text": "9"
    },
    {
      "id": "tgo-tables-and-graphs-generated-043-d",
      "text": "11"
    },
    {
      "id": "tgo-tables-and-graphs-generated-043-e",
      "text": "7"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-043-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-generated-044",
  "subjectId": "tgo",
  "text": "Кесте бойынша B тобының жалпы қатысушылар санын табыңыз.",
  "chartData": {
    "type": "table",
    "headers": [
      "Топ",
      "Ұл",
      "Қыз"
    ],
    "rows": [
      [
        "A тобы",
        15,
        9
      ],
      [
        "B тобы",
        13,
        12
      ],
      [
        "C тобы",
        12,
        10
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-generated-044-a",
      "text": "22"
    },
    {
      "id": "tgo-tables-and-graphs-generated-044-b",
      "text": "25"
    },
    {
      "id": "tgo-tables-and-graphs-generated-044-c",
      "text": "27"
    },
    {
      "id": "tgo-tables-and-graphs-generated-044-d",
      "text": "23"
    },
    {
      "id": "tgo-tables-and-graphs-generated-044-e",
      "text": "24"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-generated-044-b"
  ],
  "difficulty": "medium"
},
{
  "id": "tgo-tables-and-graphs-crime-seasons",
  "subjectId": "tgo",
  "text": "Жоғарыдағы кестеде бір жылда болған қылмыс саны, мезгілмен көрсетілген. Қыс және көктем мезгілінде болған қылмыстар санының айырымы?",
  "chartData": {
    "type": "table",
    "headers": [
      "Мезгіл",
      "Қыс",
      "Көктем",
      "Жаз",
      "Күз"
    ],
    "rows": [
      [
        "Қылмыс саны",
        602,
        785,
        690,
        594
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-crime-seasons-a",
      "text": "181"
    },
    {
      "id": "tgo-tables-and-graphs-crime-seasons-b",
      "text": "184"
    },
    {
      "id": "tgo-tables-and-graphs-crime-seasons-c",
      "text": "185"
    },
    {
      "id": "tgo-tables-and-graphs-crime-seasons-d",
      "text": "183"
    },
    {
      "id": "tgo-tables-and-graphs-crime-seasons-e",
      "text": "182"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-crime-seasons-d"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "easy",
  "hint": "Есептің шешімі:\n1. Көктем мезгіліндегі қылмыс саны: 785.\n2. Қыс мезгіліндегі қылмыс саны: 602.\n3. Олардың айырымы: 785 - 602 = 183."
},
{
  "id": "tgo-tables-and-graphs-runners-time",
  "subjectId": "tgo",
  "text": "Жоғарыдағы кестеде, белгілі бір қашықтықты жүгіру уақыты көрсетілген. Ең аз уақыт жүгірген адамда, барлығының орта шамасынан жуықтай алғанда неше секундқа айырмашылық бар?",
  "chartData": {
    "type": "table",
    "headers": [
      "Аты",
      "Назерке",
      "Қарлығаш",
      "Сауле",
      "Баян",
      "Марал"
    ],
    "rows": [
      [
        "Жүгіру уақыты (секунд)",
        14.1,
        18.2,
        15.5,
        16.2,
        22.4
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-runners-time-a",
      "text": "6,54"
    },
    {
      "id": "tgo-tables-and-graphs-runners-time-b",
      "text": "7,4"
    },
    {
      "id": "tgo-tables-and-graphs-runners-time-c",
      "text": "9,16"
    },
    {
      "id": "tgo-tables-and-graphs-runners-time-d",
      "text": "5,42"
    },
    {
      "id": "tgo-tables-and-graphs-runners-time-e",
      "text": "3,18"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-runners-time-e"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium",
  "hint": "Шешуі:\n1. Барлық адамдардың орташа жүгіру уақытын табамыз:\n   Орташа мән = (14,1 + 18,2 + 15,5 + 16,2 + 22,4) / 5 = 86,4 / 5 = 17,28 секунд.\n2. Ең аз уақыт жүгірген адамды анықтаймыз:\n   Назерке = 14,1 секунд.\n3. Орташа мән мен ең аз уақыттың айырмасын табамыз:\n   17,28 - 14,1 = 3,18 секунд."
},
{
  "id": "tgo-tables-and-graphs-mean-table-missing",
  "subjectId": "tgo",
  "text": "Бағанды салыстырыңыз:",
  "chartData": {
    "type": "table",
    "headers": [
      "Бірінші сан",
      "Екінші сан",
      "Үшінші сан",
      "Арифметикалық орта"
    ],
    "rows": [
      [
        "?",
        4,
        3,
        3
      ],
      [
        21,
        15,
        33,
        "?"
      ],
      [
        "?",
        6,
        9,
        9
      ]
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-mean-table-missing-a",
      "text": "4; 22; 12"
    },
    {
      "id": "tgo-tables-and-graphs-mean-table-missing-b",
      "text": "2; 22; 15"
    },
    {
      "id": "tgo-tables-and-graphs-mean-table-missing-c",
      "text": "2; 25; 12"
    },
    {
      "id": "tgo-tables-and-graphs-mean-table-missing-d",
      "text": "2; 22; 12"
    },
    {
      "id": "tgo-tables-and-graphs-mean-table-missing-e",
      "text": "2; 23; 12"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-mean-table-missing-e"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium",
  "hint": "Шешуі:\n1. 1-ші жолдағы жетіспейтін бірінші санды (x₁) табамыз:\n   (x₁ + 4 + 3) / 3 = 3 => x₁ + 7 = 9 => x₁ = 2.\n2. 2-ші жолдағы орташа мәнді (m₂) есептейміз:\n   m₂ = (21 + 15 + 33) / 3 = 69 / 3 = 23.\n3. 3-ші жолдағы жетіспейтін бірінші санды (x₃) табамыз:\n   (x₃ + 6 + 9) / 3 = 9 => x₃ + 15 = 27 => x₃ = 12.\n\nСонымен, жетіспейтін мәндер сәйкесінше: 2; 23; 12."
},
{
  "id": "tgo-tables-and-graphs-students-pie-chart",
  "subjectId": "tgo",
  "text": "Диаграммада 10-сынып оқушыларының сандық құрамы көрсетілген. Мектептегі барлық 10-сынып оқушыларының саны 200 болса, 10 «Б» және 10 «В» сыныптарында барлығы неше оқушы бар екенін табыңыз.",
  "chartData": {
    "type": "pie",
    "data": [
      30,
      25,
      20,
      25
    ],
    "labels": [
      "10 «А» (30%)",
      "10 «Ә» (25%)",
      "10 «В» (20%)",
      "10 «Б» (25%)"
    ],
    "colors": [
      "#3b82f6",
      "#ef4444",
      "#10b981",
      "#8b5cf6"
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-students-pie-chart-a",
      "text": "100"
    },
    {
      "id": "tgo-tables-and-graphs-students-pie-chart-b",
      "text": "90"
    },
    {
      "id": "tgo-tables-and-graphs-students-pie-chart-c",
      "text": "80"
    },
    {
      "id": "tgo-tables-and-graphs-students-pie-chart-d",
      "text": "70"
    },
    {
      "id": "tgo-tables-and-graphs-students-pie-chart-e",
      "text": "110"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-students-pie-chart-b"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium",
  "hint": "Шешуі:\n1. 10 «В» сыныбының пайызын табамыз (секторлардың қосындысы 100% болуы тиіс):\n   100% - (30% + 25% + 25%) = 100% - 80% = 20%.\n2. 10 «Б» және 10 «В» сыныптарындағы оқушылардың жалпы үлесі:\n   25% (10 Б) + 20% (10 В) = 45%.\n3. Жалпы 200 оқушының 45%-ын есептейміз:\n   200 · 0,45 = 90 оқушы."
},
{
  "id": "tgo-tables-and-graphs-median-diagram",
  "subjectId": "tgo",
  "text": "Диаграмма көрсеткішінен мәліметтер медианасы.",
  "chartData": {
    "type": "bar",
    "data": [
      100,
      200,
      300,
      400,
      500
    ],
    "labels": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-median-diagram-a",
      "text": "100"
    },
    {
      "id": "tgo-tables-and-graphs-median-diagram-b",
      "text": "200"
    },
    {
      "id": "tgo-tables-and-graphs-median-diagram-c",
      "text": "300"
    },
    {
      "id": "tgo-tables-and-graphs-median-diagram-d",
      "text": "400"
    },
    {
      "id": "tgo-tables-and-graphs-median-diagram-e",
      "text": "500"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-median-diagram-c"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium",
  "hint": "Шешуі:\n1. Диаграммадан сәйкес мәліметтер жиынын анықтаймыз:\n   {100, 200, 300, 400, 500}.\n2. Жиын өсу ретімен орналасқандықтан, медианасы ортасында орналасқан үшінші сан болады:\n   Медиана = 300."
},
{
  "id": "tgo-tables-and-graphs-exam-scores-mean",
  "subjectId": "tgo",
  "text": "Төмендегі бір сыныптың физика пәні бойынша емтихан нәтижелері (ұпай) көрсетілген болса, бұл ұпайлардың арифметикалық ортасын табыңыз.",
  "chartData": {
    "type": "bar",
    "data": [
      50,
      20,
      70,
      50,
      30
    ],
    "labels": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-exam-scores-mean-a",
      "text": "54"
    },
    {
      "id": "tgo-tables-and-graphs-exam-scores-mean-b",
      "text": "64"
    },
    {
      "id": "tgo-tables-and-graphs-exam-scores-mean-c",
      "text": "36"
    },
    {
      "id": "tgo-tables-and-graphs-exam-scores-mean-d",
      "text": "25"
    },
    {
      "id": "tgo-tables-and-graphs-exam-scores-mean-e",
      "text": "44"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-exam-scores-mean-e"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "medium",
  "hint": "Шешуі:\n1. Диаграммадан емтихан ұпайларын анықтаймыз:\n   50, 20, 70, 50, 30.\n2. Бұл ұпайлардың арифметикалық ортасын есептейміз:\n   Орташа мән = (50 + 20 + 70 + 50 + 30) / 5 = 220 / 5 = 44."
},
{
  "id": "tgo-tables-and-graphs-park-trees-pie-chart",
  "subjectId": "tgo",
  "text": "Диаграммада барлығы 500 түп ағаш отырғызылған саябақ көрсетілген. Қарағай ағашының санын табыңыз.",
  "chartData": {
    "type": "pie",
    "data": [23, 25, 27, 25],
    "labels": [
      "Қарағай (23%)",
      "Қайың (25%)",
      "Емен (27%)",
      "Басқа ағаштар (25%)"
    ]
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-park-trees-pie-chart-a",
      "text": "105"
    },
    {
      "id": "tgo-tables-and-graphs-park-trees-pie-chart-b",
      "text": "115"
    },
    {
      "id": "tgo-tables-and-graphs-park-trees-pie-chart-c",
      "text": "95"
    },
    {
      "id": "tgo-tables-and-graphs-park-trees-pie-chart-d",
      "text": "125"
    },
    {
      "id": "tgo-tables-and-graphs-park-trees-pie-chart-e",
      "text": "135"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-park-trees-pie-chart-b"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "easy",
  "hint": "Шешуі:\n1. Қарағай ағашының үлесі диаграмма бойынша 23% құрайды.\n2. Барлық ағаш саны — 500.\n3. Қарағай ағаштарының санын табамыз:\n   500 · 23% = 500 · 0,23 = 115 ағаш."
},
{
  "id": "tgo-tables-and-graphs-music-venn",
  "subjectId": "tgo",
  "text": "50 адамнан сауалнама жүргізгенде 15 адам тек қана классикалық музыканы, 11 адам тек қана рэп және 10 адам рэпті де, классикалық музыканы да тыңдайтындарын айтты. Музыканы тыңдамайтын адам санын табыңыз.",
  "chartData": {
    "type": "tgo_venn_exclusive",
    "leftLabel": "C",
    "rightLabel": "R",
    "leftExclusive": 15,
    "rightExclusive": 11,
    "intersection": 10,
    "outside": 14
  },
  "options": [
    {
      "id": "tgo-tables-and-graphs-music-venn-a",
      "text": "14"
    },
    {
      "id": "tgo-tables-and-graphs-music-venn-b",
      "text": "15"
    },
    {
      "id": "tgo-tables-and-graphs-music-venn-c",
      "text": "16"
    },
    {
      "id": "tgo-tables-and-graphs-music-venn-d",
      "text": "12"
    },
    {
      "id": "tgo-tables-and-graphs-music-venn-e",
      "text": "13"
    }
  ],
  "correctOptionIds": [
    "tgo-tables-and-graphs-music-venn-a"
  ],
  "type": "SINGLE",
  "topic": "Кестелер мен графиктер",
  "difficulty": "easy",
  "hint": "Шешуі:\n1. Тек қана классикалық музыка тыңдайтындар: 15 адам.\n2. Тек қана рэп тыңдайтындар: 11 адам.\n3. Екеуін де тыңдайтындар (қиылысуы): 10 адам.\n4. Музыка тыңдайтын жалпы адам саны: 15 + 11 + 10 = 36 адам.\n5. Сауалнамаға қатысқан жалпы адам саны: 50 адам.\n6. Музыканы мүлдем тыңдамайтын адам саны: 50 - 36 = 14 адам."
}
] as Question[];
