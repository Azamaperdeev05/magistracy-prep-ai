import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// algo / Графтар және графтар алгоритмдері
export const algo10GraphsQuestions : Question[] = [
  {
    id: "algo-t10-b01",
    subjectId: SubjectId.ALGO,
    text: "Графты adjacency list арқылы сақтау қандай жады қолданады?",
    options: [
      {
        id: "algo-t10-b01-op1",
        text: "O(V + E)"
      },
      {
        id: "algo-t10-b01-op2",
        text: "O(V²)"
      },
      {
        id: "algo-t10-b01-op3",
        text: "O(E²)"
      },
      {
        id: "algo-t10-b01-op4",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "algo-t10-b01-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b02",
    subjectId: SubjectId.ALGO,
    text: "Бағытталмаған граф (Undirected Graph) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b02-op1",
        text: "Циклі бар граф"
      },
      {
        id: "algo-t10-b02-op2",
        text: "Ағаш"
      },
      {
        id: "algo-t10-b02-op3",
        text: "Қабырғалар екі жақтан байланысқан"
      },
      {
        id: "algo-t10-b02-op4",
        text: "Қабырғалардың бағыты бар"
      }
    ],
    correctOptionIds: [
      "algo-t10-b02-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b03",
    subjectId: SubjectId.ALGO,
    text: "Топологиялық сұрыптау қандай графтарда мүмкін?",
    options: [
      {
        id: "algo-t10-b03-op1",
        text: "Барлық графтар"
      },
      {
        id: "algo-t10-b03-op2",
        text: "Бағытталмаған графтар"
      },
      {
        id: "algo-t10-b03-op3",
        text: "Циклі бар графтар"
      },
      {
        id: "algo-t10-b03-op4",
        text: "DAG (циклсіз бағытталған граф)"
      }
    ],
    correctOptionIds: [
      "algo-t10-b03-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b04",
    subjectId: SubjectId.ALGO,
    text: "Minimum Spanning Tree (Тірек ағаш) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b04-op1",
        text: "Графтың барлық төбелерін ең аз салмақпен байланыстыратын ағаш"
      },
      {
        id: "algo-t10-b04-op2",
        text: "Ең көп түйіні бар ағаш"
      },
      {
        id: "algo-t10-b04-op3",
        text: "Графтағы ең қысқа жол"
      },
      {
        id: "algo-t10-b04-op4",
        text: "Ең терең ағаш"
      }
    ],
    correctOptionIds: [
      "algo-t10-b04-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b05",
    subjectId: SubjectId.ALGO,
    text: "Прим және Крускал алгоритмдерінің ортақ мақсаты не?",
    options: [
      {
        id: "algo-t10-b05-op1",
        text: "Ең қысқа жол табу"
      },
      {
        id: "algo-t10-b05-op2",
        text: "Топологиялық сұрыптау"
      },
      {
        id: "algo-t10-b05-op3",
        text: "MST (минималды қаңқа ағаш) құру"
      },
      {
        id: "algo-t10-b05-op4",
        text: "Циклды анықтау"
      }
    ],
    correctOptionIds: [
      "algo-t10-b05-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b06",
    subjectId: SubjectId.ALGO,
    text: "DFS қандай деректер құрылымын қолданады?",
    options: [
      {
        id: "algo-t10-b06-op1",
        text: "Queue"
      },
      {
        id: "algo-t10-b06-op2",
        text: "Stack (немесе рекурсия)"
      },
      {
        id: "algo-t10-b06-op3",
        text: "Array"
      },
      {
        id: "algo-t10-b06-op4",
        text: "Heap"
      }
    ],
    correctOptionIds: [
      "algo-t10-b06-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b07",
    subjectId: SubjectId.ALGO,
    text: "DFS (Depth-First Search) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b07-op1",
        text: "Сызықтық іздеу"
      },
      {
        id: "algo-t10-b07-op2",
        text: "Тереңдік бойынша іздеу"
      },
      {
        id: "algo-t10-b07-op3",
        text: "Екілік іздеу"
      },
      {
        id: "algo-t10-b07-op4",
        text: "Ендік бойынша іздеу"
      }
    ],
    correctOptionIds: [
      "algo-t10-b07-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b08",
    subjectId: SubjectId.ALGO,
    text: "DAG дегеніміз не?",
    options: [
      {
        id: "algo-t10-b08-op1",
        text: "Бағытталмаған граф"
      },
      {
        id: "algo-t10-b08-op2",
        text: "Циклсіз бағытталған граф"
      },
      {
        id: "algo-t10-b08-op3",
        text: "Толық граф"
      },
      {
        id: "algo-t10-b08-op4",
        text: "Циклі бар бағытталған граф"
      }
    ],
    correctOptionIds: [
      "algo-t10-b08-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b09",
    subjectId: SubjectId.ALGO,
    text: "Графты adjacency matrix арқылы сақтау қандай жады қолданады?",
    options: [
      {
        id: "algo-t10-b09-op1",
        text: "O(V+E)"
      },
      {
        id: "algo-t10-b09-op2",
        text: "O(V²)"
      },
      {
        id: "algo-t10-b09-op3",
        text: "O(V)"
      },
      {
        id: "algo-t10-b09-op4",
        text: "O(E)"
      }
    ],
    correctOptionIds: [
      "algo-t10-b09-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b10",
    subjectId: SubjectId.ALGO,
    text: "Графтағы қосылған компоненттер (connected components) не?",
    options: [
      {
        id: "algo-t10-b10-op1",
        text: "Циклдер"
      },
      {
        id: "algo-t10-b10-op2",
        text: "Бір төбе"
      },
      {
        id: "algo-t10-b10-op3",
        text: "Бір-бірімен байланысқан төбелер топтары"
      },
      {
        id: "algo-t10-b10-op4",
        text: "Қабырғалар"
      }
    ],
    correctOptionIds: [
      "algo-t10-b10-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b11",
    subjectId: SubjectId.ALGO,
    text: "Графтың циклі (cycle) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b11-op1",
        text: "Ең қысқа жол"
      },
      {
        id: "algo-t10-b11-op2",
        text: "Бастапқы төбе жоқ"
      },
      {
        id: "algo-t10-b11-op3",
        text: "Бір төбеден бастап, сол төбеге оралатын жол"
      },
      {
        id: "algo-t10-b11-op4",
        text: "MST"
      }
    ],
    correctOptionIds: [
      "algo-t10-b11-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b12",
    subjectId: SubjectId.ALGO,
    text: "Крускал алгоритмі қалай жұмыс істейді?",
    options: [
      {
        id: "algo-t10-b12-op1",
        text: "Ендік бойынша іздейді"
      },
      {
        id: "algo-t10-b12-op2",
        text: "Қабырғаларды салмағы бойынша сұрыптап, MST құрады"
      },
      {
        id: "algo-t10-b12-op3",
        text: "Тереңдік бойынша іздейді"
      },
      {
        id: "algo-t10-b12-op4",
        text: "Кездейсоқ қабырғаларды таңдайды"
      }
    ],
    correctOptionIds: [
      "algo-t10-b12-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b13",
    subjectId: SubjectId.ALGO,
    text: "Флойд-Уоршелл алгоритмі не табады?",
    options: [
      {
        id: "algo-t10-b13-op1",
        text: "Графтың циклін"
      },
      {
        id: "algo-t10-b13-op2",
        text: "Минималды қаңқа ағаш"
      },
      {
        id: "algo-t10-b13-op3",
        text: "Барлық төбе жұптары арасындағы ең қысқа жолдар"
      },
      {
        id: "algo-t10-b13-op4",
        text: "Бір төбеден ең қысқа жол"
      }
    ],
    correctOptionIds: [
      "algo-t10-b13-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b14",
    subjectId: SubjectId.ALGO,
    text: "Dijkstra алгоритмі не үшін қолданылады?",
    options: [
      {
        id: "algo-t10-b14-op1",
        text: "Минималды қаңқа ағашы"
      },
      {
        id: "algo-t10-b14-op2",
        text: "Графты бояу"
      },
      {
        id: "algo-t10-b14-op3",
        text: "Ең қысқа жолды табу"
      },
      {
        id: "algo-t10-b14-op4",
        text: "Сұрыптау"
      }
    ],
    correctOptionIds: [
      "algo-t10-b14-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b15",
    subjectId: SubjectId.ALGO,
    text: "BFS (Breadth-First Search) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b15-op1",
        text: "Ендік (деңгей) бойынша іздеу"
      },
      {
        id: "algo-t10-b15-op2",
        text: "Екілік іздеу"
      },
      {
        id: "algo-t10-b15-op3",
        text: "Тереңдік бойынша іздеу"
      },
      {
        id: "algo-t10-b15-op4",
        text: "Сызықтық іздеу"
      }
    ],
    correctOptionIds: [
      "algo-t10-b15-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b16",
    subjectId: SubjectId.ALGO,
    text: "Беллман-Форд алгоритмі Dijkstra-дан қандай жағдайда артық?",
    options: [
      {
        id: "algo-t10-b16-op1",
        text: "Жылдамырақ"
      },
      {
        id: "algo-t10-b16-op2",
        text: "Аз жады қолданады"
      },
      {
        id: "algo-t10-b16-op3",
        text: "Теріс салмақты қабырғаларды өңдей алады"
      },
      {
        id: "algo-t10-b16-op4",
        text: "Тек ағаштарда жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "algo-t10-b16-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b17",
    subjectId: SubjectId.ALGO,
    text: "BFS/DFS уақыт күрделілігі қандай?",
    options: [
      {
        id: "algo-t10-b17-op1",
        text: "O(V)"
      },
      {
        id: "algo-t10-b17-op2",
        text: "O(E)"
      },
      {
        id: "algo-t10-b17-op3",
        text: "O(V²)"
      },
      {
        id: "algo-t10-b17-op4",
        text: "O(V + E)"
      }
    ],
    correctOptionIds: [
      "algo-t10-b17-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b18",
    subjectId: SubjectId.ALGO,
    text: "Dijkstra алгоритмі қандай графтарда жұмыс істейді?",
    options: [
      {
        id: "algo-t10-b18-op1",
        text: "Тек ағаштар"
      },
      {
        id: "algo-t10-b18-op2",
        text: "Теріс салмақты қабырғалар болмауы керек"
      },
      {
        id: "algo-t10-b18-op3",
        text: "Тек бағытталған графтар"
      },
      {
        id: "algo-t10-b18-op4",
        text: "Барлық графтар"
      }
    ],
    correctOptionIds: [
      "algo-t10-b18-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b19",
    subjectId: SubjectId.ALGO,
    text: "Бағытталған граф (Directed Graph) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b19-op1",
        text: "Толық граф"
      },
      {
        id: "algo-t10-b19-op2",
        text: "Қабырғалардың бағыты бар"
      },
      {
        id: "algo-t10-b19-op3",
        text: "Қабырғалардың бағыты жоқ"
      },
      {
        id: "algo-t10-b19-op4",
        text: "Циклі жоқ граф"
      }
    ],
    correctOptionIds: [
      "algo-t10-b19-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b20",
    subjectId: SubjectId.ALGO,
    text: "BFS қандай деректер құрылымын қолданады?",
    options: [
      {
        id: "algo-t10-b20-op1",
        text: "Queue"
      },
      {
        id: "algo-t10-b20-op2",
        text: "Heap"
      },
      {
        id: "algo-t10-b20-op3",
        text: "Tree"
      },
      {
        id: "algo-t10-b20-op4",
        text: "Stack"
      }
    ],
    correctOptionIds: [
      "algo-t10-b20-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b21",
    subjectId: SubjectId.ALGO,
    text: "Dijkstra алгоритмінің уақыт күрделілігі қандай (priority queue)?",
    options: [
      {
        id: "algo-t10-b21-op1",
        text: "O(V)"
      },
      {
        id: "algo-t10-b21-op2",
        text: "O((V+E) log V)"
      },
      {
        id: "algo-t10-b21-op3",
        text: "O(V²)"
      },
      {
        id: "algo-t10-b21-op4",
        text: "O(E)"
      }
    ],
    correctOptionIds: [
      "algo-t10-b21-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b22",
    subjectId: SubjectId.ALGO,
    text: "Прим алгоритмі не құрады?",
    options: [
      {
        id: "algo-t10-b22-op1",
        text: "Топологиялық сұрыптау"
      },
      {
        id: "algo-t10-b22-op2",
        text: "Минималды қаңқа ағаш (MST)"
      },
      {
        id: "algo-t10-b22-op3",
        text: "BFS"
      },
      {
        id: "algo-t10-b22-op4",
        text: "Ең қысқа жол"
      }
    ],
    correctOptionIds: [
      "algo-t10-b22-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "bd04f7dd-b049-407f-8f45-6c7ebe7b09ef",
    subjectId: SubjectId.ALGO,
    text: "Бағытталмаған графтың барлық төбелерінің дәрежелерінің қосындысы қабырғалар (E) санына қалай қатысты?",
    options: [
      {
        id: "b6687863-9c57-4652-90b6-3325b160e9ae",
        text: "Қабырғалар санынан екі есе үлкен (2 * E) (Дәрежелер туралы лемма)"
      },
      {
        id: "7f4c94d5-4e0c-40d7-a737-8c9ef41de00c",
        text: "Қабырғалар санына тең (E)"
      },
      {
        id: "10dd56e9-326f-4476-84c2-393d925d24c3",
        text: "Қабырғалар санынан екі есе кіші (E / 2)"
      },
      {
        id: "83f4d6c1-ea41-40fc-8913-8d005c7f0e39",
        text: "Төбелер санына (V) тең"
      }
    ],
    correctOptionIds: [
      "b6687863-9c57-4652-90b6-3325b160e9ae"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b23",
    subjectId: SubjectId.ALGO,
    text: "Төбелер саны V-ге тең бағытталмаған толық графтың қабырғалар саны қандай болады?",
    options: [
      {
        id: "algo-t10-b23-op1",
        text: "V * (V - 1) / 2"
      },
      {
        id: "algo-t10-b23-op2",
        text: "V * (V - 1)"
      },
      {
        id: "algo-t10-b23-op3",
        text: "V^2"
      },
      {
        id: "algo-t10-b23-op4",
        text: "2 * V"
      }
    ],
    correctOptionIds: [
      "algo-t10-b23-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b24",
    subjectId: SubjectId.ALGO,
    text: "Төбелер саны V-ге тең бағытталған толық графтың қабырғалар саны қандай?",
    options: [
      {
        id: "algo-t10-b24-op1",
        text: "V * (V - 1)"
      },
      {
        id: "algo-t10-b24-op2",
        text: "V * (V - 1) / 2"
      },
      {
        id: "algo-t10-b24-op3",
        text: "V^2"
      },
      {
        id: "algo-t10-b24-op4",
        text: "V + 1"
      }
    ],
    correctOptionIds: [
      "algo-t10-b24-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b25",
    subjectId: SubjectId.ALGO,
    text: "Графтың екі үлесті (Bipartite) екенін қалай тексеруге болады?",
    options: [
      {
        id: "algo-t10-b25-op1",
        text: "BFS немесе DFS арқылы граф төбелерін 2 түске бояу арқылы (көршілес төбелердің түсі әртүрлі болуы тиіс)"
      },
      {
        id: "algo-t10-b25-op2",
        text: "Тек топологиялық сұрыптаумен"
      },
      {
        id: "algo-t10-b25-op3",
        text: "Қабырғаларды салмағы бойынша сұрыптаумен"
      },
      {
        id: "algo-t10-b25-op4",
        text: "Крускал алгоритмі арқылы"
      }
    ],
    correctOptionIds: [
      "algo-t10-b25-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b26",
    subjectId: SubjectId.ALGO,
    text: "Графта тақ ұзындықтағы цикл (odd cycle) бар болса, ол граф туралы не айтуға болады?",
    options: [
      {
        id: "algo-t10-b26-op1",
        text: "Ол граф екі үлесті (bipartite) бола алмайды"
      },
      {
        id: "algo-t10-b26-op2",
        text: "Ол міндетті түрде ағаш болады"
      },
      {
        id: "algo-t10-b26-op3",
        text: "Ол бағытталған циклсіз граф (DAG) болады"
      },
      {
        id: "algo-t10-b26-op4",
        text: "Оған топологиялық сұрыптау жасауға болады"
      }
    ],
    correctOptionIds: [
      "algo-t10-b26-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ae0e8470-120e-4c74-97ff-bbf4ae8999e3",
    subjectId: SubjectId.ALGO,
    text: "Дистрибьюцияланған немесе үлестірілген жүйелердегі бағыттау протоколдарында (мысалы, RIP) қолданылатын, теріс қабырғаларды қолдайтын алгоритм қандай?",
    options: [
      {
        id: "f7067252-65d4-4ee5-bce8-28beff7c37af",
        text: "Беллман-Форд (Bellman-Ford) алгоритмі"
      },
      {
        id: "b78cd920-5ca2-40e6-a919-2edb2958524b",
        text: "Дейкстра (Dijkstra) алгоритмі"
      },
      {
        id: "b49bbbab-cc0b-46ae-ab2f-371c3a84787b",
        text: "Прим (Prim) алгоритмі"
      },
      {
        id: "bd437549-c444-4d4c-951c-93f6a78d6832",
        text: "Крускал (Kruskal) алгоритмі"
      }
    ],
    correctOptionIds: [
      "f7067252-65d4-4ee5-bce8-28beff7c37af"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "424c6daa-dddc-4c76-9997-e66cdf289a85",
    subjectId: SubjectId.ALGO,
    text: "Дейкстра алгоритмінде басымдылық кезегі (Priority Queue) ретінде Фибоначчи үйіндісі (Fibonacci Heap) қолданылса, уақыт күрделілігі қалай оңтайландырылады?",
    options: [
      {
        id: "87877cd7-8221-4002-bd50-20718f41b069",
        text: "O(E + V log V)"
      },
      {
        id: "f8ee459d-68c8-48a0-b619-cf6e6a257a34",
        text: "O(V^2)"
      },
      {
        id: "cfbc609a-4254-4222-ad87-bd4adaed81c4",
        text: "O(E log V)"
      },
      {
        id: "2d649534-27a2-44e3-a88e-d2bca8f3e7fe",
        text: "O(E log E)"
      }
    ],
    correctOptionIds: [
      "87877cd7-8221-4002-bd50-20718f41b069"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "79c7bf2b-295a-44d2-8546-3be2b2520932",
    subjectId: SubjectId.ALGO,
    text: "Бағытталған графтың күшті байланысқан компоненттерін (Strongly Connected Components - SCC) табуға арналған Косараю (Kosaraju) алгоритмі неше рет DFS орындайды?",
    options: [
      {
        id: "47523b6b-62e1-4222-b326-9f9b59a28124",
        text: "2 рет (бірінші бастапқы графта, екінші транпонирленген графта)"
      },
      {
        id: "8e9a1c06-ae55-4468-8325-00b1fa7726b3",
        text: "1 рет"
      },
      {
        id: "73089b6c-81a0-4b7a-b920-88d145f206a0",
        text: "Әрбір төбе үшін жеке-жеке"
      },
      {
        id: "1e01ca7c-2c05-46a1-825c-a840e65fc128",
        text: "Ол DFS қолданбайды, BFS қолданады"
      }
    ],
    correctOptionIds: [
      "47523b6b-62e1-4222-b326-9f9b59a28124"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b27",
    subjectId: SubjectId.ALGO,
    text: "Транспонирленген граф (Transposed Graph / G^T) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b27-op1",
        text: "Бастапқы бағытталған графтың барлық қабырғаларының бағытын керісінше өзгерткенде алынатын граф"
      },
      {
        id: "algo-t10-b27-op2",
        text: "Барлық қабырға салмақтарын теріс қылған граф"
      },
      {
        id: "algo-t10-b27-op3",
        text: "Көршілестік матрицасы нөлге теңелген граф"
      },
      {
        id: "algo-t10-b27-op4",
        text: "Бағытталмаған графқа айналған граф"
      }
    ],
    correctOptionIds: [
      "algo-t10-b27-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8284749f-d449-4e3b-b8d6-a308674fb38c",
    subjectId: SubjectId.ALGO,
    text: "Косараю алгоритмінен басқа, бір ғана DFS аралауымен күшті байланысқан компоненттерді (SCC) табатын тиімді алгоритм қалай аталады?",
    options: [
      {
        id: "726f7ef1-86b0-487d-9b8c-37077e20bb22",
        text: "Тарьян (Tarjan) алгоритмі"
      },
      {
        id: "485c04a8-9456-44be-a11e-640b85369bce",
        text: "Флойд-Уоршелл алгоритмі"
      },
      {
        id: "ef3a050a-24e4-451a-90a8-5120c10a337f",
        text: "Диниц алгоритмі"
      },
      {
        id: "0c933932-0d3b-41a3-9763-44ec447860f7",
        text: "Форд-Фулкерсон алгоритмі"
      }
    ],
    correctOptionIds: [
      "726f7ef1-86b0-487d-9b8c-37077e20bb22"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b28",
    subjectId: SubjectId.ALGO,
    text: "Графтың қабырғасы (u, v) көпір (Bridge / Cut Edge) деп аталады, егер:",
    options: [
      {
        id: "algo-t10-b28-op1",
        text: "Сол қабырғаны өшіргенде графтың байланысқан компоненттерінің саны артса"
      },
      {
        id: "algo-t10-b28-op2",
        text: "Қабырғаның салмағы теріс болса"
      },
      {
        id: "algo-t10-b28-op3",
        text: "Ол екі үлкен төбені байланыстырса"
      },
      {
        id: "algo-t10-b28-op4",
        text: "Ол циклдің мүшесі болса"
      }
    ],
    correctOptionIds: [
      "algo-t10-b28-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b29",
    subjectId: SubjectId.ALGO,
    text: "Графтың төбесе v топсалы төбе (Articulation Point / Cut Vertex) деп аталады, егер:",
    options: [
      {
        id: "algo-t10-b29-op1",
        text: "Сол төбені және оған жалғанған барлық қабырғаларды өшіргенде байланысқан компоненттер саны артса"
      },
      {
        id: "algo-t10-b29-op2",
        text: "Оның дәрежесі 0-ге тең болса"
      },
      {
        id: "algo-t10-b29-op3",
        text: "Ол тек бір қабырғамен байланысса"
      },
      {
        id: "algo-t10-b29-op4",
        text: "Ол түбір түйіні болса"
      }
    ],
    correctOptionIds: [
      "algo-t10-b29-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "dfa2753c-7ffe-4bb2-8ff7-e5986caf15dd",
    subjectId: SubjectId.ALGO,
    text: "Disjoint Set Union (DSU / Find-Union) деректер құрылымы Крускал алгоритмінде не үшін қолданылады?",
    options: [
      {
        id: "90ddf3ae-c38a-4a45-b560-15c6683f1424",
        text: "Қабырғаларды қосқанда цикл (loop) пайда болатынын өте жылдам (O(α(V))) анықтау үшін"
      },
      {
        id: "375e9cf7-872a-4791-b51a-c13d2ca1fe48",
        text: "Төбелерді салмағы бойынша сұрыптау үшін"
      },
      {
        id: "01e0ca9f-362d-4a5a-809f-1daf6dece07d",
        text: "Басымдылық кезегін жүзеге асыру үшін"
      },
      {
        id: "e2e860fc-be2f-4af4-8501-b1d09484e3da",
        text: "Қысқа жолдарды есептеу үшін"
      }
    ],
    correctOptionIds: [
      "90ddf3ae-c38a-4a45-b560-15c6683f1424"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b30",
    subjectId: SubjectId.ALGO,
    text: "DSU-дегі екі негізгі оңтайландыру әдісі қалай аталады?",
    options: [
      {
        id: "algo-t10-b30-op1",
        text: "Ранг бойынша біріктіру (Union by Rank) және Жолды қысқарту (Path Compression)"
      },
      {
        id: "algo-t10-b30-op2",
        text: "Тереңдік бойынша іздеу және Ендік бойынша іздеу"
      },
      {
        id: "algo-t10-b30-op3",
        text: "Рекурсиялық сұрыптау және Айналдыру"
      },
      {
        id: "algo-t10-b30-op4",
        text: "Сызықтық және квадраттық зондтау"
      }
    ],
    correctOptionIds: [
      "algo-t10-b30-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b31",
    subjectId: SubjectId.ALGO,
    text: "Жолды қысқарту (Path Compression) оңтайландыруы Find операциясының жұмысын қалай жақсартады?",
    options: [
      {
        id: "algo-t10-b31-op1",
        text: "Find іздеген барлық төбелерді тікелей жиынның түбіріне (root) жалғап, келесі жолы O(1) дерлік уақытта табуды қамтамасыз етеді"
      },
      {
        id: "algo-t10-b31-op2",
        text: "Жиын өлшемін екі есеге азайтады"
      },
      {
        id: "algo-t10-b31-op3",
        text: "Соқтығыстарды толығымен болдырмайды"
      },
      {
        id: "algo-t10-b31-op4",
        text: "Рекурсия биіктігін арттырады"
      }
    ],
    correctOptionIds: [
      "algo-t10-b31-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b32",
    subjectId: SubjectId.ALGO,
    text: "Эйлер жолы (Eulerian Path) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b32-op1",
        text: "Графтың әрбір қабырғасын (edge) дәл бір рет басып өтетін жол"
      },
      {
        id: "algo-t10-b32-op2",
        text: "Әрбір төбесін (vertex) дәл бір рет басып өтетін жол"
      },
      {
        id: "algo-t10-b32-op3",
        text: "Барлық қабырға салмақтары тең болатын жол"
      },
      {
        id: "algo-t10-b32-op4",
        text: "Графтағы ең ұзын цикл"
      }
    ],
    correctOptionIds: [
      "algo-t10-b32-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b33",
    subjectId: SubjectId.ALGO,
    text: "Гамильтон жолы (Hamiltonian Path) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b33-op1",
        text: "Графтың әрбір төбесін (vertex) дәл бір рет басып өтетін жол"
      },
      {
        id: "algo-t10-b33-op2",
        text: "Әрбір қабырғасын (edge) дәл бір рет басып өтетін жол"
      },
      {
        id: "algo-t10-b33-op3",
        text: "Тек бағытталған графтарда ғана болатын цикл"
      },
      {
        id: "algo-t10-b33-op4",
        text: "Минималды қаңқа ағашы"
      }
    ],
    correctOptionIds: [
      "algo-t10-b33-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "74869ee9-c16c-4dd9-a6dc-d695cd984adc",
    subjectId: SubjectId.ALGO,
    text: "Бағытталмаған байланысқан графта Эйлер циклі (Eulerian Circuit) болуының қажетті және жеткілікті шарты қандай?",
    options: [
      {
        id: "ba122d28-0070-4c0b-9422-a2321ca83f90",
        text: "Барлық төбелердің дәрежелері (degree) жұп болуы тиіс"
      },
      {
        id: "2b9e782d-9adc-423b-aff1-6a38388c001f",
        text: "Графта тақ дәрежелі төбелер саны дәл 2 болуы тиіс"
      },
      {
        id: "afcaacaf-3730-4720-93ea-8a877c3b69d4",
        text: "Графта ешқандай цикл болмауы тиіс"
      },
      {
        id: "a46e3873-4f4c-47bb-9f0d-5ee03502dd57",
        text: "Барлық қабырға салмақтары бірдей болуы тиіс"
      }
    ],
    correctOptionIds: [
      "ba122d28-0070-4c0b-9422-a2321ca83f90"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b34",
    subjectId: SubjectId.ALGO,
    text: "Бағытталмаған байланысқан графта Эйлер жолы (бірақ цикл емес) болуының шарты қандай?",
    options: [
      {
        id: "algo-t10-b34-op1",
        text: "Тақ дәрежелі төбелердің саны дәл 2 болуы тиіс (жол бірінен басталып, екіншісінен аяқталады)"
      },
      {
        id: "algo-t10-b34-op2",
        text: "Барлық төбелердің дәрежелері жұп болуы тиіс"
      },
      {
        id: "algo-t10-b34-op3",
        text: "Графта екі үлестілік сақталуы тиіс"
      },
      {
        id: "algo-t10-b34-op4",
        text: "Төбелер саны қабырғалар санынан көп болуы тиіс"
      }
    ],
    correctOptionIds: [
      "algo-t10-b34-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "cf7ca859-6ffd-4b91-b6e5-21089ce8c277",
    subjectId: SubjectId.ALGO,
    text: "Желілік ағындар теориясында (Network Flow) графтағы максималды ағынды (Maximum Flow) табу үшін қолданылатын классикалық алгоритм қандай?",
    options: [
      {
        id: "783c89ad-f317-487a-9bf2-751e8d231d90",
        text: "Форд-Фулкерсон (Ford-Fulkerson) алгоритмі"
      },
      {
        id: "e44a9fbe-6def-411b-8854-54707912a612",
        text: "Дейкстра алгоритмі"
      },
      {
        id: "63405c3d-0413-464c-9ce9-ebe132e190e1",
        text: "Прим алгоритмі"
      },
      {
        id: "0c539f22-432e-4593-8b9f-9be2db541e73",
        text: "Флойд-Уоршелл алгоритмі"
      }
    ],
    correctOptionIds: [
      "783c89ad-f317-487a-9bf2-751e8d231d90"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a3d46b6a-dd21-495d-a0af-019a74e6fdfa",
    subjectId: SubjectId.ALGO,
    text: "Форд-Фулкерсон алгоритмін BFS арқылы оңтайландырып, O(V * E^2) уақытында кепілдік беретін нұсқасы қалай аталады?",
    options: [
      {
        id: "b39394db-2bd5-4b2e-a349-587be7155474",
        text: "Эдмондс-Карп (Edmonds-Karp) алгоритмі"
      },
      {
        id: "d8e7e015-4809-4f52-a52e-10e212a6691c",
        text: "Диниц алгоритмі"
      },
      {
        id: "30a0d744-aea2-4ac4-abd0-549880628a6b",
        text: "Косараю алгоритмі"
      },
      {
        id: "6ebdd99a-7217-4e48-bcb2-936df0eaffc1",
        text: "Беллман-Форд алгоритмі"
      }
    ],
    correctOptionIds: [
      "b39394db-2bd5-4b2e-a349-587be7155474"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b35",
    subjectId: SubjectId.ALGO,
    text: "Максималды ағын мен минималды қима (Max-Flow Min-Cut) теоремасы нені тұжірымдайды?",
    options: [
      {
        id: "algo-t10-b35-op1",
        text: "Кез келген желідегі максималды ағын шамасы оның минималды қимасының өткізгіштік қабілетіне тең болады"
      },
      {
        id: "algo-t10-b35-op2",
        text: "Максималды ағын әрқашан төбелер санына тең"
      },
      {
        id: "algo-t10-b35-op3",
        text: "Минималды қима әрқашан нөлге тең болады"
      },
      {
        id: "algo-t10-b35-op4",
        text: "Ағындар саны қабырғалар салмағының қосындысына тең"
      }
    ],
    correctOptionIds: [
      "algo-t10-b35-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "101c719e-7a86-47e0-88b1-51dcf68c72fe",
    subjectId: SubjectId.ALGO,
    text: "Графты бояу (Graph Coloring) есебіндегі \"Хроматикалық сан\" (Chromatic Number, χ(G)) дегеніміз не?",
    options: [
      {
        id: "4a88fdb7-3d7b-472f-8a44-15873a6f4a6b",
        text: "Көршілес екі төбе бірдей түске боялмайтындай етіп, графты бояуға қажетті ең аз түстер саны"
      },
      {
        id: "c88f44a3-0ce1-4bdc-bd80-ce48d9c5fe15",
        text: "Графта қолданылған барлық қабырғалардың түсі"
      },
      {
        id: "b508ffd3-538e-4009-b432-5b7fee5d894d",
        text: "Төбелер мен қабырғалардың жалпы саны"
      },
      {
        id: "035a89c0-057d-4009-a78c-d481bca47e6b",
        text: "Графтың ең ұзын цикліндегі төбелер саны"
      }
    ],
    correctOptionIds: [
      "4a88fdb7-3d7b-472f-8a44-15873a6f4a6b"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a3760ed3-b194-4564-9a6f-04a2e85b2055",
    subjectId: SubjectId.ALGO,
    text: "Кез келген жазық графты (Planar Graph) көршілес төбелері бірдей түске түспейтіндей етіп бояу үшін ең көп дегенде неше түс жеткілікті (Төрт түс теоремасы)?",
    options: [
      {
        id: "6e4c23c4-a3db-430b-84ba-3cf2a51ab2e3",
        text: "4 түс"
      },
      {
        id: "d373c0ef-27a7-4b36-a6a9-ea03442f5f3b",
        text: "5 түс"
      },
      {
        id: "90e72d53-67c2-4948-b3cf-4cc9ac038ec1",
        text: "3 түс"
      },
      {
        id: "e3fc314b-a667-4791-84eb-5d925717c70d",
        text: "6 түс"
      }
    ],
    correctOptionIds: [
      "6e4c23c4-a3db-430b-84ba-3cf2a51ab2e3"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b36",
    subjectId: SubjectId.ALGO,
    text: "Жазық граф (Planar Graph) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b36-op1",
        text: "Қабырғалары өзара қиылыспайтындай етіп жазықтықта (қағаз бетінде) кескіндеуге болатын граф"
      },
      {
        id: "algo-t10-b36-op2",
        text: "Барлық қабырғалары бір сызық бойында жатқан граф"
      },
      {
        id: "algo-t10-b36-op3",
        text: "Ешқандай циклі жоқ граф"
      },
      {
        id: "algo-t10-b36-op4",
        text: "Тек үшбұрыштардан тұратын граф"
      }
    ],
    correctOptionIds: [
      "algo-t10-b36-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8d498925-b612-4127-a919-b2ef54067153",
    subjectId: SubjectId.ALGO,
    text: "Елйердің жазық графтарға арналған формуласы қандай (V – төбелер, E – қабырғалар, F – жақтар/беттер саны)?",
    options: [
      {
        id: "45147a44-f52e-4829-b209-a6b7233f922c",
        text: "V - E + F = 2"
      },
      {
        id: "01eb520e-a46f-4489-8cb0-585bb85f9635",
        text: "V + E - F = 2"
      },
      {
        id: "f236ea14-46b5-43c9-a289-ac026419fd38",
        text: "V - E - F = 0"
      },
      {
        id: "5707f515-9521-41d2-968a-151cca32716b",
        text: "V * E / F = 2"
      }
    ],
    correctOptionIds: [
      "45147a44-f52e-4829-b209-a6b7233f922c"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b37",
    subjectId: SubjectId.ALGO,
    text: "Графтағы ең қысқа жолды іздеудің BFS алгоритмі қай кезде ғана дұрыс жұмыс істейді?",
    options: [
      {
        id: "algo-t10-b37-op1",
        text: "Қабырғалардың салмақтары бірдей (өлшенбеген граф) болғанда"
      },
      {
        id: "algo-t10-b37-op2",
        text: "Қабырғалардың салмақтары әртүрлі оң сандар болғанда"
      },
      {
        id: "algo-t10-b37-op3",
        text: "Графта теріс циклдер болғанда"
      },
      {
        id: "algo-t10-b37-op4",
        text: "Граф трк бағытталған циклсіз граф (DAG) болғанда"
      }
    ],
    correctOptionIds: [
      "algo-t10-b37-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b38",
    subjectId: SubjectId.ALGO,
    text: "Неліктен Дейкстра алгоритмі теріс салмақты қабырғалары бар графта дұрыс жұмыс істемеуі мүмкін?",
    options: [
      {
        id: "algo-t10-b38-op1",
        text: "Өйткені ол ашкөз (greedy) алгоритм және төбені бір рет белсенді деп белгілеген соң оның қысқа жолын қайта қарастырмайды"
      },
      {
        id: "algo-t10-b38-op2",
        text: "Ол тек бүтін сандармен жұмыс істейтіндіктен"
      },
      {
        id: "algo-t10-b38-op3",
        text: "Рекурсия тереңдігі жеткіліксіз болғандықтан"
      },
      {
        id: "algo-t10-b38-op4",
        text: "Ол тек циклсіз графтарға арналғандықтан"
      }
    ],
    correctOptionIds: [
      "algo-t10-b38-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b39",
    subjectId: SubjectId.ALGO,
    text: "Графтағы теріс салмақты цикл (negative cycle) деген не?",
    options: [
      {
        id: "algo-t10-b39-op1",
        text: "Қабырғаларының салмақтарының қосындысы 0-ден кіші болатын цикл (онда ең қысқа жол шексіз кішірейе береді)"
      },
      {
        id: "algo-t10-b39-op2",
        text: "Тек теріс сандардан тұратын қабырғалар жиынтығы"
      },
      {
        id: "algo-t10-b39-op3",
        text: "Төбелерінің нөмірлері теріс болатын цикл"
      },
      {
        id: "algo-t10-b39-op4",
        text: "Эйлер циклінің кері бағыты"
      }
    ],
    correctOptionIds: [
      "algo-t10-b39-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b40",
    subjectId: SubjectId.ALGO,
    text: "Форд-Фулкерсон алгоритмінің ең нашар уақыт күрделілігі неге тәуелді?",
    options: [
      {
        id: "algo-t10-b40-op1",
        text: "Максималды ағынның мәніне (f) - O(E * f)"
      },
      {
        id: "algo-t10-b40-op2",
        text: "Тек төбелер санына - O(V^3)"
      },
      {
        id: "algo-t10-b40-op3",
        text: "Басымдылық кезегінің түріне"
      },
      {
        id: "algo-t10-b40-op4",
        text: "Көршілестік матрицасының өлшеміне"
      }
    ],
    correctOptionIds: [
      "algo-t10-b40-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b41",
    subjectId: SubjectId.ALGO,
    text: "Желілік ағын есебіндегі \"Қалдық граф\" (Residual Graph) не үшін қолданылады?",
    options: [
      {
        id: "algo-t10-b41-op1",
        text: "Ағынды кері бағытта да ағызуға мүмкіндік беретін бос өткізгіштіктер мен кері қабырғаларды сақтау үшін"
      },
      {
        id: "algo-t10-b41-op2",
        text: "Графты жадтан өшіру үшін"
      },
      {
        id: "algo-t10-b41-op3",
        text: "Қысқа жолдарды есептеу үшін"
      },
      {
        id: "algo-t10-b41-op4",
        text: "Басымдылықтарды анықтау үшін"
      }
    ],
    correctOptionIds: [
      "algo-t10-b41-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "759a6fcf-3221-405c-85b3-9810c2f7b8ec",
    subjectId: SubjectId.ALGO,
    text: "Dijkstra алгоритмін adjacency list және binary heap (екілік үйінді) арқылы жүзеге асырғандағы уақыт күрделілігі қандай?",
    options: [
      {
        id: "b8ccf31b-9a8f-4a04-a932-1dc3ebe39690",
        text: "O((V + E) log V)"
      },
      {
        id: "e740147d-9d53-4438-9b9d-4a7f08a73c3a",
        text: "O(V^2)"
      },
      {
        id: "d2b95528-6b31-48e6-a156-228444a6aa30",
        text: "O(V * E)"
      },
      {
        id: "42e4337b-e7b9-46ba-94a8-2081ca07b2c5",
        text: "O(V^3)"
      }
    ],
    correctOptionIds: [
      "b8ccf31b-9a8f-4a04-a932-1dc3ebe39690"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b42",
    subjectId: SubjectId.ALGO,
    text: "Floyd-Warshall алгоритмінің кеңістік күрделілігі (Space Complexity) қандай?",
    options: [
      {
        id: "algo-t10-b42-op1",
        text: "O(V^2) (арақашықтықтар матрицасын сақтау үшін)"
      },
      {
        id: "algo-t10-b42-op2",
        text: "O(V + E)"
      },
      {
        id: "algo-t10-b42-op3",
        text: "O(1)"
      },
      {
        id: "algo-t10-b42-op4",
        text: "O(V^3)"
      }
    ],
    correctOptionIds: [
      "algo-t10-b42-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b43",
    subjectId: SubjectId.ALGO,
    text: "Беллман-Форд алгоритмінің уақыт күрделілігі қандай?",
    options: [
      {
        id: "algo-t10-b43-op1",
        text: "O(V * E)"
      },
      {
        id: "algo-t10-b43-op2",
        text: "O(V^2)"
      },
      {
        id: "algo-t10-b43-op3",
        text: "O((V + E) log V)"
      },
      {
        id: "algo-t10-b43-op4",
        text: "O(V^3)"
      }
    ],
    correctOptionIds: [
      "algo-t10-b43-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b44",
    subjectId: SubjectId.ALGO,
    text: "Bellman-Ford алгоритмі графта теріс циклдің бар-жоғын қалай анықтайды?",
    options: [
      {
        id: "algo-t10-b44-op1",
        text: "Барлық қабырғаларды V-1 рет релаксациялағаннан кейін тағы 1 рет релаксация жасағанда арақашықтықтар тағы да қысқарса"
      },
      {
        id: "algo-t10-b44-op2",
        text: "Төбелердің дәрежелерін тексеру арқылы"
      },
      {
        id: "algo-t10-b44-op3",
        text: "DFS арқылы кері қабырғаларды іздеп"
      },
      {
        id: "algo-t10-b44-op4",
        text: "Бағдарлама қате шығарып тоқтаса"
      }
    ],
    correctOptionIds: [
      "algo-t10-b44-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "090c4ad6-5ddf-4952-aa4c-972ff01fec13",
    subjectId: SubjectId.ALGO,
    text: "Арақашықтықты қысқартуға бағытталған `if (dist[u] + weight(u,v) < dist[v]) dist[v] = dist[u] + weight(u,v)` операциясы қалай аталады?",
    options: [
      {
        id: "68e6d95f-3a0b-48fb-bab1-9534b4b2921b",
        text: "Релаксация (Relaxation)"
      },
      {
        id: "1774b09f-eeb2-4527-a7e5-da84f7c38f99",
        text: "Түзету (Correction)"
      },
      {
        id: "a4e760cb-0269-4617-97e0-7648e3a90467",
        text: "Ығыстыру (Shifting)"
      },
      {
        id: "9845b6fc-74c0-4acd-8b26-fb7cc63aa24a",
        text: "Бояу (Coloring)"
      }
    ],
    correctOptionIds: [
      "68e6d95f-3a0b-48fb-bab1-9534b4b2921b"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b45",
    subjectId: SubjectId.ALGO,
    text: "Ендік бойынша іздеу (BFS) алгоритмінде төбелерді қайта өңдемеу үшін қандай массив қолданылады?",
    options: [
      {
        id: "algo-t10-b45-op1",
        text: "Төбелердің барып-қайтқанын белгілейтін логикалық массив (visited / boolean array)"
      },
      {
        id: "algo-t10-b45-op2",
        text: "Басымдылық кестесі"
      },
      {
        id: "algo-t10-b45-op3",
        text: "Салмақтар матрицасы"
      },
      {
        id: "algo-t10-b45-op4",
        text: "Рекурсия стегі"
      }
    ],
    correctOptionIds: [
      "algo-t10-b45-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b46",
    subjectId: SubjectId.ALGO,
    text: "Бағытталған графтың топологиялық сұрыпталуы (Topological Sort) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b46-op1",
        text: "Барлық бағытталған қабырғалар (u, v) үшін u төбесі v төбесінің алдында келетіндей етіп төбелерді сызықтық ретке тізу"
      },
      {
        id: "algo-t10-b46-op2",
        text: "Төбелерді олардың дәрежесі бойынша өсу ретімен сұрыптау"
      },
      {
        id: "algo-t10-b46-op3",
        text: "Қабырғаларды салмақтары бойынша сұрыптау"
      },
      {
        id: "algo-t10-b46-op4",
        text: "Төбелерді кездейсоқ ретпен орналастыру"
      }
    ],
    correctOptionIds: [
      "algo-t10-b46-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b47",
    subjectId: SubjectId.ALGO,
    text: "Topological Sort-ты жүзеге асырудың Kahn алгоритмі неге негізделген?",
    options: [
      {
        id: "algo-t10-b47-op1",
        text: "Кіріс дәрежесі (in-degree) 0-ге тең төбелерді кезекпен өшіріп отыруға"
      },
      {
        id: "algo-t10-b47-op2",
        text: "DFS рекурсия стегінің соңына қосып отыруға"
      },
      {
        id: "algo-t10-b47-op3",
        text: "Басымдылық кезегін қолдануға"
      },
      {
        id: "algo-t10-b47-op4",
        text: "Қабырға салмақтарын салыстыруға"
      }
    ],
    correctOptionIds: [
      "algo-t10-b47-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b48",
    subjectId: SubjectId.ALGO,
    text: "Тереңдік бойынша іздеуде (DFS) бағытталған графта циклдің (loop) бар-жоғын қалай анықтайды?",
    options: [
      {
        id: "algo-t10-b48-op1",
        text: "Ағымдағы рекурсия стегінде тұрған (сұр түсті) ата-баба түйінге кері сілтеме (back edge) кездессе"
      },
      {
        id: "algo-t10-b48-op2",
        text: "Көршілестік матрицасы симметриялы болса"
      },
      {
        id: "algo-t10-b48-op3",
        text: "Барлық төбелердің кіріс дәрежесі 1-ден көп болса"
      },
      {
        id: "algo-t10-b48-op4",
        text: "DFS орындалуы шексіз циклге кетсе"
      }
    ],
    correctOptionIds: [
      "algo-t10-b48-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8d755504-3657-4ec4-b86d-015b361668ce",
    subjectId: SubjectId.ALGO,
    text: "Егер графтағы кез келген төбеден басқа кез келген төбеге баратын жол бар болса, ондай бағытталмаған граф қалай аталады?",
    options: [
      {
        id: "a226a3ca-2f7d-4102-9e91-1efaeceec7c2",
        text: "Байланысқан граф (Connected Graph)"
      },
      {
        id: "d1747405-77a7-4a2d-a93e-d0ebdedd72dc",
        text: "Толық граф (Complete Graph)"
      },
      {
        id: "99f94a74-dd08-4f04-b74e-121b79bf175e",
        text: "Екі үлесті граф"
      },
      {
        id: "2af7de74-3103-48d8-9403-5e8abde8b9de",
        text: "Тармақталған граф"
      }
    ],
    correctOptionIds: [
      "a226a3ca-2f7d-4102-9e91-1efaeceec7c2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b49",
    subjectId: SubjectId.ALGO,
    text: "Графтағы «Төбенің дәрежесі» (Degree of a vertex, deg(v)) дегеніміз не?",
    options: [
      {
        id: "algo-t10-b49-op1",
        text: "Сол төбеге қосылған қабырғалардың жалпы саны"
      },
      {
        id: "algo-t10-b49-op2",
        text: "Сол төбеге дейінгі ең қысқа жолдың ұзындығы"
      },
      {
        id: "algo-t10-b49-op3",
        text: "Сол төбенің көршілестік матрицасындағы индексі"
      },
      {
        id: "algo-t10-b49-op4",
        text: "Төбенің координаталық мәні"
      }
    ],
    correctOptionIds: [
      "algo-t10-b49-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b50",
    subjectId: SubjectId.ALGO,
    text: "Бағытталған графта төбеге кіретін қабырғалар саны қалай аталады?",
    options: [
      {
        id: "algo-t10-b50-op1",
        text: "Кіріс дәрежесі (In-degree)"
      },
      {
        id: "algo-t10-b50-op2",
        text: "Шығыс дәрежесі (Out-degree)"
      },
      {
        id: "algo-t10-b50-op3",
        text: "Сорғыш дәрежесі"
      },
      {
        id: "algo-t10-b50-op4",
        text: "Ішкі қабырға дәрежесі"
      }
    ],
    correctOptionIds: [
      "algo-t10-b50-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b51",
    subjectId: SubjectId.ALGO,
    text: "Бағытталған графта төбеден шығатын қабырғалар саны қалай аталады?",
    options: [
      {
        id: "algo-t10-b51-op1",
        text: "Шығыс дәрежесі (Out-degree)"
      },
      {
        id: "algo-t10-b51-op2",
        text: "Кіріс дәрежесі (In-degree)"
      },
      {
        id: "algo-t10-b51-op3",
        text: "Сыртқы дәреже дәрежесі"
      },
      {
        id: "algo-t10-b51-op4",
        text: "Көршілестік дәрежесі"
      }
    ],
    correctOptionIds: [
      "algo-t10-b51-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2e14fac4-120a-4705-a414-e85d1915dfcd",
    subjectId: SubjectId.ALGO,
    text: "Көршілестік матрицасында (Adjacency Matrix) графта (u, v) қабырғасының бар екені қалай көрсетіледі?",
    options: [
      {
        id: "840d40df-bf70-42ac-b218-8ac55915d1c4",
        text: "Matrix[u][v] ұяшығының мәні 1-ге (немесе қабырға салмағына) тең болады"
      },
      {
        id: "fa0ad541-ac32-4b72-852e-8e5d42b5fe1b",
        text: "Matrix[u] массивіне v мәні қосылады"
      },
      {
        id: "495209bf-dffc-4e0c-bce8-6ef991bcbbe1",
        text: "Matrix[u][v] ұяшығы 0-ге тең болады"
      },
      {
        id: "bbffe20b-4280-4a38-901d-2687a8915c04",
        text: "Сілтемелер арқылы байланыстырылады"
      }
    ],
    correctOptionIds: [
      "840d40df-bf70-42ac-b218-8ac55915d1c4"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "52cc1ac7-c3de-4886-9ed9-bfb9f741a579",
    subjectId: SubjectId.ALGO,
    text: "Көршілестік тізімінде (Adjacency List) әрбір төбе үшін көршілес төбелер қай деректер құрылымында сақталады?",
    options: [
      {
        id: "abf143c8-de9a-4a9d-bc91-a4d8c65f8160",
        text: "Байланысқан тізімде (Linked List) немесе динамикалық массивте (vector)"
      },
      {
        id: "4676a13d-5334-4637-8ca0-18f9a82501e1",
        text: "Стекте"
      },
      {
        id: "bbe89be6-04b7-41f8-9dc3-d1409310970f",
        text: "Хэш-кестеде"
      },
      {
        id: "d97f6dfd-a314-4af1-aaa9-a08005099d33",
        text: "Сегменттер ағашында"
      }
    ],
    correctOptionIds: [
      "abf143c8-de9a-4a9d-bc91-a4d8c65f8160"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b52",
    subjectId: SubjectId.ALGO,
    text: "Графта \"Төбе\" термині халықаралық әдебиетте қалай аталады?",
    options: [
      {
        id: "algo-t10-b52-op1",
        text: "Vertex (немесе Node)"
      },
      {
        id: "algo-t10-b52-op2",
        text: "Edge"
      },
      {
        id: "algo-t10-b52-op3",
        text: "Path"
      },
      {
        id: "algo-t10-b52-op4",
        text: "Link"
      }
    ],
    correctOptionIds: [
      "algo-t10-b52-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b53",
    subjectId: SubjectId.ALGO,
    text: "Графта \"Қабырға\" (байланыстыратын сызық) термині халықаралық әдебиетте қалай аталады?",
    options: [
      {
        id: "algo-t10-b53-op1",
        text: "Edge (немесе Arc)"
      },
      {
        id: "algo-t10-b53-op2",
        text: "Vertex"
      },
      {
        id: "algo-t10-b53-op3",
        text: "Node"
      },
      {
        id: "algo-t10-b53-op4",
        text: "Loop"
      }
    ],
    correctOptionIds: [
      "algo-t10-b53-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "490a4def-0a1a-4f6f-9e8c-7d571c503c31",
    subjectId: SubjectId.ALGO,
    text: "Графтың екі төбесін бір-бірімен тікелей байланыстыратын қабырға болса, бұл төбелер өзара қалай аталады?",
    options: [
      {
        id: "0efb3a1c-dd1d-410c-b5da-7a1f2b237d13",
        text: "Көршілес төбелер (Adjacent vertices)"
      },
      {
        id: "762a075f-7a60-4128-b98d-ee4a1d90c321",
        text: "Қиылысқан төбелер"
      },
      {
        id: "5137486a-665d-4e0d-b0b7-5c3384a5f971",
        text: "Бағытталған төбелер"
      },
      {
        id: "a1706bb3-dd5a-4d3f-96b6-43ae9e57ffcb",
        text: "Тәуелсіз төбелер"
      }
    ],
    correctOptionIds: [
      "0efb3a1c-dd1d-410c-b5da-7a1f2b237d13"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b54",
    subjectId: SubjectId.ALGO,
    text: "Қабырғаның басы мен соңы бір ғана төбеде болса, бұл қалай аталады?",
    options: [
      {
        id: "algo-t10-b54-op1",
        text: "Тұзақ / Тұйықталу (Loop / Self-loop)"
      },
      {
        id: "algo-t10-b54-op2",
        text: "Көпір"
      },
      {
        id: "algo-t10-b54-op3",
        text: "Сорғыш"
      },
      {
        id: "algo-t10-b54-op4",
        text: "Бағыттауыш"
      }
    ],
    correctOptionIds: [
      "algo-t10-b54-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b55",
    subjectId: SubjectId.ALGO,
    text: "Ешқандай циклі жоқ бағытталмаған байланысқан граф қалай аталады?",
    options: [
      {
        id: "algo-t10-b55-op1",
        text: "Ағаш (Tree)"
      },
      {
        id: "algo-t10-b55-op2",
        text: "Тор (Grid)"
      },
      {
        id: "algo-t10-b55-op3",
        text: "DAG"
      },
      {
        id: "algo-t10-b55-op4",
        text: "Толық граф"
      }
    ],
    correctOptionIds: [
      "algo-t10-b55-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "cc8e753c-cd83-45bc-99c5-0e04bed1a985",
    subjectId: SubjectId.ALGO,
    text: "Байланысқан графтағы минималды қаңқа ағаштың (MST) қабырғалар саны нешеге тең болады (V – төбелер саны)?",
    options: [
      {
        id: "05f5707f-e19e-4a41-b212-3fe480a73233",
        text: "V - 1"
      },
      {
        id: "b243e8fa-fc18-4c49-a6b4-35d6e318e68c",
        text: "V"
      },
      {
        id: "fbec866a-c940-498a-b892-643dbea699f2",
        text: "V + 1"
      },
      {
        id: "0301759b-95ed-471a-8162-84b0a0fe18b0",
        text: "2 * V"
      }
    ],
    correctOptionIds: [
      "05f5707f-e19e-4a41-b212-3fe480a73233"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b56",
    subjectId: SubjectId.ALGO,
    text: "Dijkstra алгоритмінде жаңа төбелерді таңдау үшін қандай стратегия қолданылады?",
    options: [
      {
        id: "algo-t10-b56-op1",
        text: "Ашкөздік стратегия (Greedy: әр қадамда арақашықтығы ең кіші белгіленбеген төбені таңдайды)"
      },
      {
        id: "algo-t10-b56-op2",
        text: "Динамикалық бағдарламалау"
      },
      {
        id: "algo-t10-b56-op3",
        text: "Кездейсоқ таңдау"
      },
      {
        id: "algo-t10-b56-op4",
        text: "Брутфорс (толық іздеу)"
      }
    ],
    correctOptionIds: [
      "algo-t10-b56-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b57",
    subjectId: SubjectId.ALGO,
    text: "Floyd-Warshall алгоритмі қандай әдістемеге (paradigm) негізделген?",
    options: [
      {
        id: "algo-t10-b57-op1",
        text: "Динамикалық бағдарламалау (Dynamic Programming)"
      },
      {
        id: "algo-t10-b57-op2",
        text: "Ашкөздік әдіс (Greedy)"
      },
      {
        id: "algo-t10-b57-op3",
        text: "Бөліп ал да, билей бер (Divide and Conquer)"
      },
      {
        id: "algo-t10-b57-op4",
        text: "Кездейсоқ алгоритмдер"
      }
    ],
    correctOptionIds: [
      "algo-t10-b57-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b58",
    subjectId: SubjectId.ALGO,
    text: "Prim алгоритмі MST-ді қалай құра бастайды?",
    options: [
      {
        id: "algo-t10-b58-op1",
        text: "Кез келген бір төбемен бастап, оған көршілес ең кіші салмақты қабырғаларды біртіндеп қосады"
      },
      {
        id: "algo-t10-b58-op2",
        text: "Барлық қабырғаларды бірден сұрыптайды"
      },
      {
        id: "algo-t10-b58-op3",
        text: "Ең үлкен қабырғаларды өшіреді"
      },
      {
        id: "algo-t10-b58-op4",
        text: "Графты екіге бөледі"
      }
    ],
    correctOptionIds: [
      "algo-t10-b58-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b59",
    subjectId: SubjectId.ALGO,
    text: "Kruskal алгоритмінде қабырғалар қалай өңделеді?",
    options: [
      {
        id: "algo-t10-b59-op1",
        text: "Барлық қабырғаларды алдымен салмақтары бойынша өсу ретімен сұрыптап, содан кейін цикл тудырмайтындарын кезекпен қосады"
      },
      {
        id: "algo-t10-b59-op2",
        text: "Қабырғаларды кездейсоқ таңдайды"
      },
      {
        id: "algo-t10-b59-op3",
        text: "Тек бағытталған қабырғаларды ғана алады"
      },
      {
        id: "algo-t10-b59-op4",
        text: "Төбелердің нөмірлері бойынша алады"
      }
    ],
    correctOptionIds: [
      "algo-t10-b59-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b60",
    subjectId: SubjectId.ALGO,
    text: "Графта екі төбенің арасында бірнеше қабырға болса, олар қалай аталады?",
    options: [
      {
        id: "algo-t10-b60-op1",
        text: "Еселі / Параллель қабырғалар (Multiple / Parallel edges)"
      },
      {
        id: "algo-t10-b60-op2",
        text: "Көршілес қабырғалар"
      },
      {
        id: "algo-t10-b60-op3",
        text: "Салмақты қабырғалар"
      },
      {
        id: "algo-t10-b60-op4",
        text: "Бағытталған қабырғалар"
      }
    ],
    correctOptionIds: [
      "algo-t10-b60-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b61",
    subjectId: SubjectId.ALGO,
    text: "Еселі қабырғалары да, тұзақтары да (loops) жоқ граф қалай аталады?",
    options: [
      {
        id: "algo-t10-b61-op1",
        text: "Қарапайым граф (Simple Graph)"
      },
      {
        id: "algo-t10-b61-op2",
        text: "Мультиграф"
      },
      {
        id: "algo-t10-b61-op3",
        text: "Псевдограф"
      },
      {
        id: "algo-t10-b61-op4",
        text: "Гиперграф"
      }
    ],
    correctOptionIds: [
      "algo-t10-b61-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b62",
    subjectId: SubjectId.ALGO,
    text: "Параллель қабырғалары бар, бірақ тұзақтары болуы міндетті емес граф қалай аталады?",
    options: [
      {
        id: "algo-t10-b62-op1",
        text: "Мультиграф (Multigraph)"
      },
      {
        id: "algo-t10-b62-op2",
        text: "Қарапайым граф"
      },
      {
        id: "algo-t10-b62-op3",
        text: "Ағаш"
      },
      {
        id: "algo-t10-b62-op4",
        text: "Циклдік граф"
      }
    ],
    correctOptionIds: [
      "algo-t10-b62-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c4697b92-3df8-436c-b5f9-4c63e4f73d1e",
    subjectId: SubjectId.ALGO,
    text: "Төбелер саны V-ге тең қарапайым графта төбенің максималды дәрежесі (degree) қанша болуы мүмкін?",
    options: [
      {
        id: "e7170855-dafe-4e59-9157-1d694f00abda",
        text: "V - 1"
      },
      {
        id: "ef2a7404-9e79-4d53-8748-c5ac1758f7c3",
        text: "V"
      },
      {
        id: "668412e8-15c5-4ff0-95c6-36e198983113",
        text: "V / 2"
      },
      {
        id: "6e26b602-736d-4bea-8bb5-7685381a2a8d",
        text: "Шексіз"
      }
    ],
    correctOptionIds: [
      "e7170855-dafe-4e59-9157-1d694f00abda"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b63",
    subjectId: SubjectId.ALGO,
    text: "Төбе дәрежесі 0-ге тең болса, ол төбе қалай аталады?",
    options: [
      {
        id: "algo-t10-b63-op1",
        text: "Оқшауланған төбе (Isolated vertex)"
      },
      {
        id: "algo-t10-b63-op2",
        text: "Аспалы төбе"
      },
      {
        id: "algo-t10-b63-op3",
        text: "Бастапқы төбе"
      },
      {
        id: "algo-t10-b63-op4",
        text: "Сорғыш төбе"
      }
    ],
    correctOptionIds: [
      "algo-t10-b63-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b64",
    subjectId: SubjectId.ALGO,
    text: "Төбе дәрежесі 1-ге тең болса, ол төбе қалай аталады?",
    options: [
      {
        id: "algo-t10-b64-op1",
        text: "Аспалы / Жапырақ төбе (Pendant / Leaf vertex)"
      },
      {
        id: "algo-t10-b64-op2",
        text: "Оқшауланған төбе"
      },
      {
        id: "algo-t10-b64-op3",
        text: "Көпірлік төбе"
      },
      {
        id: "algo-t10-b64-op4",
        text: "Ішкі төбе"
      }
    ],
    correctOptionIds: [
      "algo-t10-b64-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b65",
    subjectId: SubjectId.ALGO,
    text: "Графтың тығыздығы (Density) нені сипаттайды?",
    options: [
      {
        id: "algo-t10-b65-op1",
        text: "Графтағы қабырғалар санының мүмкін болатын максималды қабырғалар санына қатынасын"
      },
      {
        id: "algo-t10-b65-op2",
        text: "Төбелер салмағының қосындысын"
      },
      {
        id: "algo-t10-b65-op3",
        text: "Графтағы циклдер жиілігін"
      },
      {
        id: "algo-t10-b65-op4",
        text: "Көршілестік матрицасының өлшемін"
      }
    ],
    correctOptionIds: [
      "algo-t10-b65-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "bad0f16f-f4d3-4a17-926c-27ad51746de5",
    subjectId: SubjectId.ALGO,
    text: "Егер графта қабырғалар саны (E) төбелер санына (V) шамалас немесе аз болса, ол қандай граф деп аталады?",
    options: [
      {
        id: "008aeff4-7970-4850-b27e-ff757184aff9",
        text: "Сирек граф (Sparse Graph)"
      },
      {
        id: "f094d53c-5486-40e6-b123-8dfa35122757",
        text: "Тығыз граф (Dense Graph)"
      },
      {
        id: "17c20d8b-672b-43c3-b9eb-8ea7960fe43b",
        text: "Толық граф"
      },
      {
        id: "42c0c355-d9b8-43d6-a917-695f426c1810",
        text: "Көп өлшемді граф"
      }
    ],
    correctOptionIds: [
      "008aeff4-7970-4850-b27e-ff757184aff9"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "95b3e823-4b58-4150-b509-96e7cededcd2",
    subjectId: SubjectId.ALGO,
    text: "Егер графта қабырғалар саны (E) мүмкін болатын максималды мәнге (V^2-қа) жуық болса, ол қандай граф деп аталады?",
    options: [
      {
        id: "8c8720da-1c59-4d67-aff2-9ea96168f395",
        text: "Тығыз граф (Dense Graph)"
      },
      {
        id: "fe70359f-d194-456a-b50e-2fd913f83a2f",
        text: "Сирек граф (Sparse Graph)"
      },
      {
        id: "68957f51-61a0-4b44-968d-e7bfe19cd13a",
        text: "Екі үлесті граф"
      },
      {
        id: "ac0bda6b-e890-4761-af25-e81223fbec22",
        text: "Циклсіз граф"
      }
    ],
    correctOptionIds: [
      "8c8720da-1c59-4d67-aff2-9ea96168f395"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "4afb86bf-aa9e-4b76-8cf3-e351690e6ba3",
    subjectId: SubjectId.ALGO,
    text: "Тығыз графтарда (Dense Graphs) MST құру үшін Крускал мен Прим алгоритмдерінің қайсысы тиімдірек?",
    options: [
      {
        id: "4f285641-ced3-4d92-80a8-4ac9f876a663",
        text: "Прим алгоритмі (Prim's Algorithm) - әсіресе көршілестік матрицасымен орындалса O(V^2)"
      },
      {
        id: "d382166f-65d5-40c6-aedb-bf98f8941048",
        text: "Kruskal алгоритмі"
      },
      {
        id: "a02240ce-2250-4dd2-9a0a-c8fdd089f0c2",
        text: "Екеуінің де тиімділігі бірдей"
      },
      {
        id: "8ac75589-2b29-4437-8571-aa9799675c2e",
        text: "Екеуі де тиімсіз, Bellman-Ford тиімді"
      }
    ],
    correctOptionIds: [
      "4f285641-ced3-4d92-80a8-4ac9f876a663"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1da94570-c0e1-4c7d-9ee9-a9d54442ddf1",
    subjectId: SubjectId.ALGO,
    text: "Dijkstra алгоритмінің ең қарапайым (басымдылық кезегінсіз, сызықтық іздеумен) уақыт күрделілігі қандай?",
    options: [
      {
        id: "8d7b4ac5-27b8-4391-9c94-e2b7874fb4ba",
        text: "O(V^2)"
      },
      {
        id: "d124a099-b9bc-4e05-acd9-7a438ff7d3ee",
        text: "O(V log V)"
      },
      {
        id: "f947d1e4-f6a1-433b-baab-b3d3483f6eb5",
        text: "O(E log V)"
      },
      {
        id: "7d4f5cc7-1c50-463c-b434-81f83fd0e87a",
        text: "O(V * E)"
      }
    ],
    correctOptionIds: [
      "8d7b4ac5-27b8-4391-9c94-e2b7874fb4ba"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b66",
    subjectId: SubjectId.ALGO,
    text: "A* (A-Star) іздеу алгоритмі Дейкстра алгоритмінен немен ерекшеленеді?",
    options: [
      {
        id: "algo-t10-b66-op1",
        text: "Ол іздеуді бағыттау үшін Эвристикалық функцияны (Heuristic function) қолданады"
      },
      {
        id: "algo-t10-b66-op2",
        text: "Ол тек бағытталмаған графтарда жұмыс істейді"
      },
      {
        id: "algo-t10-b66-op3",
        text: "Ол теріс қабырғаларды өңдей алады"
      },
      {
        id: "algo-t10-b66-op4",
        text: "Ол тек циклдік графтарға арналған"
      }
    ],
    correctOptionIds: [
      "algo-t10-b66-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9b59955c-89e8-43f8-b7c0-0263d21e2b79",
    subjectId: SubjectId.ALGO,
    text: "А әдісінде (A* algorithm) бағалау функциясы f(n) қалай есептеледі (g(n) - басынан қашықтық, h(n) - мақсатқа дейінгі эвристикалық баға)?",
    options: [
      {
        id: "64b174cc-bf63-465e-a098-60e2f4d52bd1",
        text: "f(n) = g(n) + h(n)"
      },
      {
        id: "1df1c734-007a-4379-8678-3f1c098d774e",
        text: "f(n) = g(n) - h(n)"
      },
      {
        id: "6d5c9511-0569-4b14-b749-355f73735f6b",
        text: "f(n) = g(n) * h(n)"
      },
      {
        id: "b89da65d-6295-4991-bb52-18a4aa31a58e",
        text: "f(n) = max(g(n), h(n))"
      }
    ],
    correctOptionIds: [
      "64b174cc-bf63-465e-a098-60e2f4d52bd1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b67",
    subjectId: SubjectId.ALGO,
    text: "А* алгоритміндегі эвристиканың \"Жол бергіштігі\" (Admissibility) нені білдіреді?",
    options: [
      {
        id: "algo-t10-b67-op1",
        text: "Эвристикалық баға ешқашан нақты ең қысқа жолдан асып кетпеуі тиіс (h(n) <= h*(n))"
      },
      {
        id: "algo-t10-b67-op2",
        text: "Эвристика әрқашан 0-ден үлкен болуын"
      },
      {
        id: "algo-t10-b67-op3",
        text: "Эвристиканың тек бүтін сан болуын"
      },
      {
        id: "algo-t10-b67-op4",
        text: "Іздеу жолының үзілмейтіндігін"
      }
    ],
    correctOptionIds: [
      "algo-t10-b67-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f9a8cdf4-3e50-4b9f-a77e-93cd8bee5cc6",
    subjectId: SubjectId.ALGO,
    text: "Косараю алгоритмінде графтың қабырғаларын кері бұрғанда (transpose) күшті байланысқан компоненттердің құрамы өзгере ме?",
    options: [
      {
        id: "8eb7a964-b4a3-466f-b0cd-5f1fbd04345e",
        text: "Жоғары, күшті байланысқан компоненттер өзгеріссіз қалады"
      },
      {
        id: "d34fccca-305a-49dd-8c9f-01f3ecf98e3b",
        text: "Иә, толығымен өзгереді"
      },
      {
        id: "89416c73-ab29-41bc-90f0-461dbaee3c83",
        text: "Тек кейбір төбелер өшіріледі"
      },
      {
        id: "1601d4b1-8c92-4885-8662-af86b951d2b4",
        text: "Тек циклдер саны азаяды"
      }
    ],
    correctOptionIds: [
      "8eb7a964-b4a3-466f-b0cd-5f1fbd04345e"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b68",
    subjectId: SubjectId.ALGO,
    text: "Эйлер циклі (Eulerian Circuit) бар граф қалай аталады?",
    options: [
      {
        id: "algo-t10-b68-op1",
        text: "Эйлер графы (Eulerian Graph)"
      },
      {
        id: "algo-t10-b68-op2",
        text: "Жартылай Эйлер графы"
      },
      {
        id: "algo-t10-b68-op3",
        text: "Гамильтон графы"
      },
      {
        id: "algo-t10-b68-op4",
        text: "Толық граф"
      }
    ],
    correctOptionIds: [
      "algo-t10-b68-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b69",
    subjectId: SubjectId.ALGO,
    text: "Эйлер жолы бар (бірақ циклі жоқ) граф қалай аталады?",
    options: [
      {
        id: "algo-t10-b69-op1",
        text: "Жартылай Эйлер графы (Semi-Eulerian Graph)"
      },
      {
        id: "algo-t10-b69-op2",
        text: "Эйлер графы"
      },
      {
        id: "algo-t10-b69-op3",
        text: "Гамильтондық емес граф"
      },
      {
        id: "algo-t10-b69-op4",
        text: "Бағытталмаған ағаш"
      }
    ],
    correctOptionIds: [
      "algo-t10-b69-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b70",
    subjectId: SubjectId.ALGO,
    text: "Бағытталған байланысқан графта Эйлер циклі болуының шарты қандай?",
    options: [
      {
        id: "algo-t10-b70-op1",
        text: "Әрбір төбенің кіріс дәрежесі шығыс дәрежесіне тең болуы тиіс (in-degree == out-degree)"
      },
      {
        id: "algo-t10-b70-op2",
        text: "Барлық төбелердің дәрежелері жұп болуы тиіс"
      },
      {
        id: "algo-t10-b70-op3",
        text: "Графта ешқандай цикл болмауы тиіс"
      },
      {
        id: "algo-t10-b70-op4",
        text: "Граф толық граф болуы тиіс"
      }
    ],
    correctOptionIds: [
      "algo-t10-b70-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b71",
    subjectId: SubjectId.ALGO,
    text: "Графтағы ең қысқа жолды табудың BFS алгоритмінің кеңістік күрделілігі қандай?",
    options: [
      {
        id: "algo-t10-b71-op1",
        text: "O(V) (кезек пен visited массивін сақтау үшін)"
      },
      {
        id: "algo-t10-b71-op2",
        text: "O(E)"
      },
      {
        id: "algo-t10-b71-op3",
        text: "O(1)"
      },
      {
        id: "algo-t10-b71-op4",
        text: "O(V^2)"
      }
    ],
    correctOptionIds: [
      "algo-t10-b71-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t10-b72",
    subjectId: SubjectId.ALGO,
    text: "Dijkstra алгоритміне негізделген ең қысқа жолдар ағашы қалай аталады?",
    options: [
      {
        id: "algo-t10-b72-op1",
        text: "Shortest Path Tree (SPT)"
      },
      {
        id: "algo-t10-b72-op2",
        text: "Minimum Spanning Tree (MST)"
      },
      {
        id: "algo-t10-b72-op3",
        text: "Depth-First Tree"
      },
      {
        id: "algo-t10-b72-op4",
        text: "Breadth-First Tree"
      }
    ],
    correctOptionIds: [
      "algo-t10-b72-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "12d60056-4467-411b-935b-41d216e48b50",
    subjectId: SubjectId.ALGO,
    text: "Төбелер саны V-ге тең байланысқан графтағы кез келген қаңқа ағаштың (Spanning Tree) төбелер саны нешеге тең?",
    options: [
      {
        id: "6fa29db7-0c93-421d-808c-f88368f31dbf",
        text: "V"
      },
      {
        id: "a16c7eb6-8665-4356-af77-600f6cdc760a",
        text: "V - 1"
      },
      {
        id: "791fe6ea-c888-47da-8f4f-d3b7d6fd35b4",
        text: "V + 1"
      },
      {
        id: "3c68ed69-d0f6-4e5f-a909-3e4e8eeb9496",
        text: "2 * V"
      }
    ],
    correctOptionIds: [
      "6fa29db7-0c93-421d-808c-f88368f31dbf"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "deab6b53-8c4e-4c4f-b3ab-d05ba8322341",
    subjectId: SubjectId.ALGO,
    text: "Эдмондс-Карп алгоритмінде ағынды арттырушы жолды (augmenting path) табу үшін қандай алгоритм қолданылады?",
    options: [
      {
        id: "a9bc7120-3eb8-4f08-9a1c-ab6bb024b7f2",
        text: "BFS (ендік бойынша іздеу - қабырғалар саны ең аз жолды табу үшін)"
      },
      {
        id: "449c2542-8782-4752-aba8-f849f487b0f1",
        text: "DFS"
      },
      {
        id: "56169cc7-fcb7-4906-b222-566cc33fbaac",
        text: "Дейкстра алгоритмі"
      },
      {
        id: "45505f2a-ab3f-4d03-b797-f974613cdc40",
        text: "Беллман-Форд алгоритмі"
      }
    ],
    correctOptionIds: [
      "a9bc7120-3eb8-4f08-9a1c-ab6bb024b7f2"
    ],
    type: QuestionType.SINGLE,
    topic: "Графтар және графтар алгоритмдері",
    difficulty: Difficulty.MEDIUM
  }
];
