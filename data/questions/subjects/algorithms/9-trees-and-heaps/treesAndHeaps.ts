import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// algo / Ағаш және екілік үйінділер
export const algo9TreesAndHeapsQuestions : Question[] = [
  {
    id: "algo-t09-b01",
    subjectId: SubjectId.ALGO,
    text: "Ағаштың деңгейі (level) қалай есептеледі?",
    options: [
      {
        id: "algo-t09-b01-op1",
        text: "Түбірден бастап, 0-ден"
      },
      {
        id: "algo-t09-b01-op2",
        text: "Түйіндер санымен"
      },
      {
        id: "algo-t09-b01-op3",
        text: "Биіктікпен бірдей"
      },
      {
        id: "algo-t09-b01-op4",
        text: "Жапырақтардан бастап"
      }
    ],
    correctOptionIds: [
      "algo-t09-b01-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b02",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық ағаштың биіктігі (height) дегеніміз не?",
    options: [
      {
        id: "algo-t09-b02-op1",
        text: "Тамырдан ең терең жапыраққа дейінгі қашықтық"
      },
      {
        id: "algo-t09-b02-op2",
        text: "Жапырақтар саны"
      },
      {
        id: "algo-t09-b02-op3",
        text: "Қабырғалар саны"
      },
      {
        id: "algo-t09-b02-op4",
        text: "Түйіндер саны"
      }
    ],
    correctOptionIds: [
      "algo-t09-b02-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b03",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық ағаштағы әр түйіннің максимум неше балалығы болады?",
    options: [
      {
        id: "algo-t09-b03-op1",
        text: "Шексіз"
      },
      {
        id: "algo-t09-b03-op2",
        text: "1"
      },
      {
        id: "algo-t09-b03-op3",
        text: "3"
      },
      {
        id: "algo-t09-b03-op4",
        text: "2"
      }
    ],
    correctOptionIds: [
      "algo-t09-b03-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b04",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашы дегеніміз не?",
    options: [
      {
        id: "algo-t09-b04-op1",
        text: "Толық ағаш"
      },
      {
        id: "algo-t09-b04-op2",
        text: "Өзін-өзі теңдестіретін BST"
      },
      {
        id: "algo-t09-b04-op3",
        text: "Теңдестірілмеген BST"
      },
      {
        id: "algo-t09-b04-op4",
        text: "Қарапайым ағаш"
      }
    ],
    correctOptionIds: [
      "algo-t09-b04-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b05",
    subjectId: SubjectId.ALGO,
    text: "Толық бинарлық ағаш (Complete Binary Tree) дегеніміз не?",
    options: [
      {
        id: "algo-t09-b05-op1",
        text: "Барлық жапырақтар бірдей деңгейде"
      },
      {
        id: "algo-t09-b05-op2",
        text: "Кездейсоқ толтырылған"
      },
      {
        id: "algo-t09-b05-op3",
        text: "Тек сол балалары бар"
      },
      {
        id: "algo-t09-b05-op4",
        text: "Барлық деңгейлер толық, соңғы деңгейде солдан толтырылған"
      }
    ],
    correctOptionIds: [
      "algo-t09-b05-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b06",
    subjectId: SubjectId.ALGO,
    text: "Ағаштың 'жапырақ' (leaf) түйіні дегеніміз не?",
    options: [
      {
        id: "algo-t09-b06-op1",
        text: "Ең терең түйін"
      },
      {
        id: "algo-t09-b06-op2",
        text: "Балалары жоқ түйін"
      },
      {
        id: "algo-t09-b06-op3",
        text: "Түбір"
      },
      {
        id: "algo-t09-b06-op4",
        text: "Ортаңғы түйін"
      }
    ],
    correctOptionIds: [
      "algo-t09-b06-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b07",
    subjectId: SubjectId.ALGO,
    text: "BST-де іздеу операциясының орташа күрделілігі қандай?",
    options: [
      {
        id: "algo-t09-b07-op1",
        text: "O(n)"
      },
      {
        id: "algo-t09-b07-op2",
        text: "O(n²)"
      },
      {
        id: "algo-t09-b07-op3",
        text: "O(1)"
      },
      {
        id: "algo-t09-b07-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t09-b07-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b08",
    subjectId: SubjectId.ALGO,
    text: "Heap деректер құрылымы қандай ағаш түрі?",
    options: [
      {
        id: "algo-t09-b08-op1",
        text: "BST"
      },
      {
        id: "algo-t09-b08-op2",
        text: "Red-Black Tree"
      },
      {
        id: "algo-t09-b08-op3",
        text: "AVL Tree"
      },
      {
        id: "algo-t09-b08-op4",
        text: "Complete Binary Tree"
      }
    ],
    correctOptionIds: [
      "algo-t09-b08-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b09",
    subjectId: SubjectId.ALGO,
    text: "BST (Binary Search Tree) дегеніміз не?",
    options: [
      {
        id: "algo-t09-b09-op1",
        text: "Сол жақта кіші, оң жақта үлкен элемент сақталатын ағаш"
      },
      {
        id: "algo-t09-b09-op2",
        text: "Кездейсоқ орналасқан ағаш"
      },
      {
        id: "algo-t09-b09-op3",
        text: "Сол жақта үлкен, оң жақта кіші элемент"
      },
      {
        id: "algo-t09-b09-op4",
        text: "Толық толтырылған ағаш"
      }
    ],
    correctOptionIds: [
      "algo-t09-b09-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b10",
    subjectId: SubjectId.ALGO,
    text: "BST-де 20 санын қосу: түбір=30, сол бала=15. 20 қайда орналасады?",
    options: [
      {
        id: "algo-t09-b10-op1",
        text: "15-тің оң балаларына"
      },
      {
        id: "algo-t09-b10-op2",
        text: "30-дың оң балаларына"
      },
      {
        id: "algo-t09-b10-op3",
        text: "Түбірге"
      },
      {
        id: "algo-t09-b10-op4",
        text: "15-тің сол балаларына"
      }
    ],
    correctOptionIds: [
      "algo-t09-b10-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b11",
    subjectId: SubjectId.ALGO,
    text: "In-order traversal қандай ретте элементтерді қайтарады (BST)?",
    options: [
      {
        id: "algo-t09-b11-op1",
        text: "Үлкен -> кіші"
      },
      {
        id: "algo-t09-b11-op2",
        text: "Кездейсоқ"
      },
      {
        id: "algo-t09-b11-op3",
        text: "Түбірден бастап"
      },
      {
        id: "algo-t09-b11-op4",
        text: "Кіші -> үлкен (сұрыпталған)"
      }
    ],
    correctOptionIds: [
      "algo-t09-b11-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b12",
    subjectId: SubjectId.ALGO,
    text: "n түйінді толық бинарлық ағаштың биіктігі қандай?",
    options: [
      {
        id: "algo-t09-b12-op1",
        text: "O(n²)"
      },
      {
        id: "algo-t09-b12-op2",
        text: "O(1)"
      },
      {
        id: "algo-t09-b12-op3",
        text: "O(n)"
      },
      {
        id: "algo-t09-b12-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t09-b12-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b13",
    subjectId: SubjectId.ALGO,
    text: "Max-Heap-те түбір элементі қандай?",
    options: [
      {
        id: "algo-t09-b13-op1",
        text: "Ең үлкен"
      },
      {
        id: "algo-t09-b13-op2",
        text: "Орташа"
      },
      {
        id: "algo-t09-b13-op3",
        text: "Кездейсоқ"
      },
      {
        id: "algo-t09-b13-op4",
        text: "Ең кіші"
      }
    ],
    correctOptionIds: [
      "algo-t09-b13-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b14",
    subjectId: SubjectId.ALGO,
    text: "BST-де 50 санын іздеу қай бағытта жасалады, егер түбір = 30 болса?",
    options: [
      {
        id: "algo-t09-b14-op1",
        text: "Оң жаққа"
      },
      {
        id: "algo-t09-b14-op2",
        text: "Іздеу мүмкін емес"
      },
      {
        id: "algo-t09-b14-op3",
        text: "Сол жаққа"
      },
      {
        id: "algo-t09-b14-op4",
        text: "Кез келген жаққа"
      }
    ],
    correctOptionIds: [
      "algo-t09-b14-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b15",
    subjectId: SubjectId.ALGO,
    text: "Min-Heap-те түбір элементі қандай?",
    options: [
      {
        id: "algo-t09-b15-op1",
        text: "Орташа"
      },
      {
        id: "algo-t09-b15-op2",
        text: "Ең үлкен"
      },
      {
        id: "algo-t09-b15-op3",
        text: "Кездейсоқ"
      },
      {
        id: "algo-t09-b15-op4",
        text: "Ең кіші"
      }
    ],
    correctOptionIds: [
      "algo-t09-b15-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b16",
    subjectId: SubjectId.ALGO,
    text: "Trie (Prefix Tree) не үшін қолданылады?",
    options: [
      {
        id: "algo-t09-b16-op1",
        text: "Сандарды сұрыптау"
      },
      {
        id: "algo-t09-b16-op2",
        text: "Стек операциялары"
      },
      {
        id: "algo-t09-b16-op3",
        text: "Сөздерді сақтау және іздеу"
      },
      {
        id: "algo-t09-b16-op4",
        text: "Графтарды сақтау"
      }
    ],
    correctOptionIds: [
      "algo-t09-b16-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b17",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашында (BST) ең кіші элементті табу үшін қай бағытта қозғалу керек?",
    options: [
      {
        id: "algo-t09-b17-op1",
        text: "Тек сол жақтағы сілтемелер бойымен ең соңғы жапыраққа дейін бару қажет"
      },
      {
        id: "algo-t09-b17-op2",
        text: "Оң жақтағы сілтемелер бойымен жүру керек"
      },
      {
        id: "algo-t09-b17-op3",
        text: "Түбірден бастап деңгей бойынша іздеу керек"
      },
      {
        id: "algo-t09-b17-op4",
        text: "Ағаштың кез келген жапырағына бару керек"
      }
    ],
    correctOptionIds: [
      "algo-t09-b17-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b18",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашында (BST) ең үлкен элементті табу үшін қай бағытта қозғалу керек?",
    options: [
      {
        id: "algo-t09-b18-op1",
        text: "Тек оң жақтағы сілтемелер бойымен ең соңғы түйінге дейін бару қажет"
      },
      {
        id: "algo-t09-b18-op2",
        text: "Сол жақтағы сілтемелермен бару керек"
      },
      {
        id: "algo-t09-b18-op3",
        text: "BFS алгоритмін қолдану керек"
      },
      {
        id: "algo-t09-b18-op4",
        text: "Түбір түйінін ғана тексеру керек"
      }
    ],
    correctOptionIds: [
      "algo-t09-b18-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b19",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашында түйіннің \"Теңгерімділік коэффициенті\" (Balance Factor) қалай есептеледі?",
    options: [
      {
        id: "algo-t09-b19-op1",
        text: "Сол жақ ішкі ағаш биіктігі мен оң жақ ішкі ағаш биіктігінің айырмасы (height(left) - height(right))"
      },
      {
        id: "algo-t09-b19-op2",
        text: "Ағаштың жалпы түйіндер санының биіктікке қатынасы"
      },
      {
        id: "algo-t09-b19-op3",
        text: "Сол және оң балаларының қосындысы"
      },
      {
        id: "algo-t09-b19-op4",
        text: "Түбірдің деңгейі мен жапырақ деңгейінің айырмасы"
      }
    ],
    correctOptionIds: [
      "algo-t09-b19-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7653c830-e4f0-48a8-8afa-04a4d4dc951f",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашы өзінің теңгерімділігін сақтау үшін Balance Factor мәні қай аралықта болуын талап етеді?",
    options: [
      {
        id: "b625890a-7a38-4768-8057-141ea380c782",
        text: "{-1, 0, 1}"
      },
      {
        id: "e56eddef-06f0-4116-9d8d-9c797d39d666",
        text: "{-2, -1, 0, 1, 2}"
      },
      {
        id: "77440f8f-20a0-42c9-a2c2-60f109b6deaa",
        text: "{0, 1}"
      },
      {
        id: "c3846fcc-a95f-403d-a7af-83bcf01ee301",
        text: "Кез келген бүтін сан бола береді"
      }
    ],
    correctOptionIds: [
      "b625890a-7a38-4768-8057-141ea380c782"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b20",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашына жаңа элемент қосқанда теңгерім бұзылса, оны қалпына келтіру үшін не істеледі?",
    options: [
      {
        id: "algo-t09-b20-op1",
        text: "Ағаш түйіндерін айналдыру (Rotations: LL, RR, LR, RL) орындалады"
      },
      {
        id: "algo-t09-b20-op2",
        text: "Ағаш толығымен қайта құрылады"
      },
      {
        id: "algo-t09-b20-op3",
        text: "Теңгерімсіз түйін өшіріледі"
      },
      {
        id: "algo-t09-b20-op4",
        text: "Ағаш биіктігі екі есеге артады"
      }
    ],
    correctOptionIds: [
      "algo-t09-b20-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b21",
    subjectId: SubjectId.ALGO,
    text: "Қызыл-қара ағаштың (Red-Black Tree) қасиеттеріне жатпайтын тұжырымды табыңыз:",
    options: [
      {
        id: "algo-t09-b21-op1",
        text: "Ағаштағы кез келген екі қызыл түйін көршілес (бірінің бірі баласы) бола алады"
      },
      {
        id: "algo-t09-b21-op2",
        text: "Түбір түйін әрқашан қара түсті болады"
      },
      {
        id: "algo-t09-b21-op3",
        text: "Барлық NIL жапырақтары қара болып есептеледі"
      },
      {
        id: "algo-t09-b21-op4",
        text: "Түбірден кез келген жапыраққа дейінгі жолдарда қара түйіндер саны бірдей болады"
      }
    ],
    correctOptionIds: [
      "algo-t09-b21-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b22",
    subjectId: SubjectId.ALGO,
    text: "Қызыл-қара ағашта жаңадан қосылатын түйіннің түсі әдетте бастапқыда қандай болады?",
    options: [
      {
        id: "algo-t09-b22-op1",
        text: "Қызыл"
      },
      {
        id: "algo-t09-b22-op2",
        text: "Қара"
      },
      {
        id: "algo-t09-b22-op3",
        text: "Жасыл"
      },
      {
        id: "algo-t09-b22-op4",
        text: "Көк"
      }
    ],
    correctOptionIds: [
      "algo-t09-b22-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c232d935-e6c0-45a2-8377-11f6266c594b",
    subjectId: SubjectId.ALGO,
    text: "Қызыл-қара ағаштың ең нашар жағдайдағы (worst-case) іздеу, қосу және өшіру уақыт күрделілігі қандай?",
    options: [
      {
        id: "12d2a69c-818e-4a60-92be-849183d9d044",
        text: "O(log n)"
      },
      {
        id: "68000d3b-f242-403a-b480-7f812f18f21a",
        text: "O(n)"
      },
      {
        id: "0908cd41-4724-4cc4-afff-87afd8967417",
        text: "O(1)"
      },
      {
        id: "36ce3842-306d-4165-9cbe-55afdd14c2f9",
        text: "O(n log n)"
      }
    ],
    correctOptionIds: [
      "12d2a69c-818e-4a60-92be-849183d9d044"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "fd010280-7dfa-4347-a44e-337f4fe253b6",
    subjectId: SubjectId.ALGO,
    text: "Деректер базасындағы индекстерді және файлдық жүйелерді сақтау үшін кеңінен қолданылатын, тармақталу коэффициенті жоғары теңгерімді ағаш қалай аталады?",
    options: [
      {
        id: "b3cadd46-8c1f-40fc-8c5b-558a254f348d",
        text: "B-ағаш (B-Tree) немесе B+ ағашы"
      },
      {
        id: "dcf9db05-a4ed-48d3-98d5-510edb7cdda5",
        text: "AVL ағашы"
      },
      {
        id: "00dd62c3-ab28-41b8-8c8f-c68cec987f43",
        text: "Бинарлық іздеу ағашы"
      },
      {
        id: "8a160c84-f71d-42a5-b795-424611888929",
        text: "Trie ағашы"
      }
    ],
    correctOptionIds: [
      "b3cadd46-8c1f-40fc-8c5b-558a254f348d"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b23",
    subjectId: SubjectId.ALGO,
    text: "B-ағашының (B-Tree) басты артықшылығы неде?",
    options: [
      {
        id: "algo-t09-b23-op1",
        text: "Дискіден оқу операцияларын азайту үшін бір түйінде көптеген кілттер мен сілтемелерді сақтауы"
      },
      {
        id: "algo-t09-b23-op2",
        text: "Тек рекурсивті іздеуді қолдауы"
      },
      {
        id: "algo-t09-b23-op3",
        text: "Жадыны мүлдем қажет етпейтіндігі"
      },
      {
        id: "algo-t09-b23-op4",
        text: "Биіктігінің әрқашан тұрақты 2-ге тең болуы"
      }
    ],
    correctOptionIds: [
      "algo-t09-b23-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a085c4ef-9c7c-4bd9-a567-cf930c45cc41",
    subjectId: SubjectId.ALGO,
    text: "Екілік үйіндіні (Binary Heap) жиымда (array) сақтағанда, нөлдік индекспен (0-indexed) бастасақ, i-ші түйіннің сол баласының индексі қалай табылады?",
    options: [
      {
        id: "30f9cc9d-45b4-4d05-a83f-5196f37afe4c",
        text: "2 * i + 1"
      },
      {
        id: "2a931e56-fcb6-434c-b6ee-ff2478e64dcf",
        text: "2 * i"
      },
      {
        id: "e4ce3915-06b0-440d-ae43-5ab8ed57304c",
        text: "i + 1"
      },
      {
        id: "cca25c5a-dbad-4a24-acc1-caa439468c0a",
        text: "2 * i + 2"
      }
    ],
    correctOptionIds: [
      "30f9cc9d-45b4-4d05-a83f-5196f37afe4c"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b24",
    subjectId: SubjectId.ALGO,
    text: "Екілік үйіндіні жиымда сақтағанда, i-ші түйіннің оң баласының индексі қалай табылады?",
    options: [
      {
        id: "algo-t09-b24-op1",
        text: "2 * i + 2"
      },
      {
        id: "algo-t09-b24-op2",
        text: "2 * i + 1"
      },
      {
        id: "algo-t09-b24-op3",
        text: "2 * i"
      },
      {
        id: "algo-t09-b24-op4",
        text: "i + 2"
      }
    ],
    correctOptionIds: [
      "algo-t09-b24-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c31046bd-6b88-489c-90e3-7bbc24da3648",
    subjectId: SubjectId.ALGO,
    text: "Екілік үйіндіні жиымда сақтағанда, i-ші түйіннің ата-анасының (parent) индексі қалай табылады (бүтін санды бөлу арқылы)?",
    options: [
      {
        id: "ba8e1407-ab14-4fd7-a8bc-4175f853079b",
        text: "(i - 1) // 2"
      },
      {
        id: "fe603ff9-e1ab-442f-91c6-bfd59c1a0135",
        text: "i // 2"
      },
      {
        id: "0d53f71d-d812-4c91-92a7-2b4725a98161",
        text: "(i - 2) // 2"
      },
      {
        id: "43467bcc-9484-4752-b26e-6794a6184cff",
        text: "i * 2"
      }
    ],
    correctOptionIds: [
      "ba8e1407-ab14-4fd7-a8bc-4175f853079b"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2013f62f-d5a6-4905-95db-151e51d21313",
    subjectId: SubjectId.ALGO,
    text: "Массивтен үйінді (Heap) құрастырудың \"Heapify\" (Floyd әдісі) операциясының жалпы уақыт күрделілігі қандай?",
    options: [
      {
        id: "3b182417-be28-4c18-ae27-25b47a322938",
        text: "O(n) (сызықтық уақытта үйінді құрады)"
      },
      {
        id: "737b4a1a-0644-49a2-9078-028f87d3a779",
        text: "O(n log n)"
      },
      {
        id: "eb069f35-76ad-47a0-b30d-bdcbb3d45a7b",
        text: "O(log n)"
      },
      {
        id: "a7cdfc1d-c469-4921-8324-0275eae04617",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "3b182417-be28-4c18-ae27-25b47a322938"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b25",
    subjectId: SubjectId.ALGO,
    text: "Үйінді сұрыптауының (Heap Sort) ең нашар және орташа жағдайдағы уақыт күрделілігі қандай?",
    options: [
      {
        id: "algo-t09-b25-op1",
        text: "O(n log n)"
      },
      {
        id: "algo-t09-b25-op2",
        text: "O(n^2)"
      },
      {
        id: "algo-t09-b25-op3",
        text: "O(n)"
      },
      {
        id: "algo-t09-b25-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t09-b25-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b26",
    subjectId: SubjectId.ALGO,
    text: "Heap Sort алгоритмінің қосымша жад күрделілігі (Space Complexity) қандай?",
    options: [
      {
        id: "algo-t09-b26-op1",
        text: "O(1) (орнында сұрыптауды орындайды)"
      },
      {
        id: "algo-t09-b26-op2",
        text: "O(n)"
      },
      {
        id: "algo-t09-b26-op3",
        text: "O(log n)"
      },
      {
        id: "algo-t09-b26-op4",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "algo-t09-b26-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "474475c4-2519-4431-9a9c-a839331cfb54",
    subjectId: SubjectId.ALGO,
    text: "Max-Heap-ке жаңа элемент қосқанда (insert) үйінді қасиетін қалпына келтіру үшін қай бағытта түзету жасалады?",
    options: [
      {
        id: "4f845b36-5a6f-43f2-843a-5fae0f361aa5",
        text: "Төменнен жоғары қарай (Sift-Up / Bubble-Up)"
      },
      {
        id: "f903540b-9d6c-4cac-9a9d-d44a0c37aa8e",
        text: "Жоғарыдан төмен қарай (Sift-Down / Bubble-Down)"
      },
      {
        id: "444fc6c7-d152-41be-bbbc-fb7002757483",
        text: "Тек сол жақ ішкі ағашта"
      },
      {
        id: "ac59fa82-cb70-4f3d-803f-6effc979af7c",
        text: "Ешқандай түзету қажет емес"
      }
    ],
    correctOptionIds: [
      "4f845b36-5a6f-43f2-843a-5fae0f361aa5"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e546cdc1-485c-4ab3-945c-f8f47484e622",
    subjectId: SubjectId.ALGO,
    text: "Үйіндіден ең үлкен (немесе ең кіші) элементті өшіргенде (extract) босаған түбір орнына соңғы элемент қойылып, қандай түзету орындалады?",
    options: [
      {
        id: "1a07cbfb-107f-42a1-95e0-0d73f1bb6970",
        text: "Жоғарыдан төмен қарай (Sift-Down / Heapify-Down)"
      },
      {
        id: "228554ef-b73b-4f5a-abeb-a7b6fbbe4df5",
        text: "Төменнен жоғары қарай (Sift-Up)"
      },
      {
        id: "c703e23a-b7a6-4462-91a6-74420d3b2f23",
        text: "Ағашты оңға бұру"
      },
      {
        id: "9c918e6b-8e6b-44d7-973c-54d28ecd023e",
        text: "Көршілес түйіндерді алмастыру"
      }
    ],
    correctOptionIds: [
      "1a07cbfb-107f-42a1-95e0-0d73f1bb6970"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ea518a4a-5a24-464c-80ff-b807b7b371bb",
    subjectId: SubjectId.ALGO,
    text: "Интервалдар бойынша қосындыларды немесе минимумды жылдам іздеу және өзгерту үшін қолданылатын Segment Tree (Сегменттер ағашы) құрудың уақыт күрделілігі қандай?",
    options: [
      {
        id: "e7e1f769-7bfb-4a7e-816f-5196d6d95ed5",
        text: "O(n)"
      },
      {
        id: "792679e5-0508-4876-b4ef-c191c5457f37",
        text: "O(n log n)"
      },
      {
        id: "bb7261c8-25b8-42e9-a4a1-dc5c13d40ec3",
        text: "O(log n)"
      },
      {
        id: "ad9c7008-4d17-4d2a-8440-2bb958c8b3b3",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "e7e1f769-7bfb-4a7e-816f-5196d6d95ed5"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "673b8fa1-9a22-4574-82ba-efb7cc252ac4",
    subjectId: SubjectId.ALGO,
    text: "Segment Tree-де диапазондағы сұранысқа жауап беру (range query) және бір элементті жаңарту (point update) операциялары қанша уақыт алады?",
    options: [
      {
        id: "56cb6836-20b4-4df7-9129-98d187078cf4",
        text: "O(log n)"
      },
      {
        id: "57615d64-fc4e-4b47-bc24-f5b3b103b68d",
        text: "O(1)"
      },
      {
        id: "b805ea04-77e5-4b0a-8377-815b97fd2c3d",
        text: "O(n)"
      },
      {
        id: "2d489a49-8120-4dc7-9e0d-9ddf1292a651",
        text: "O(n log n)"
      }
    ],
    correctOptionIds: [
      "56cb6836-20b4-4df7-9129-98d187078cf4"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "fd7758c8-e2ca-4062-9a1f-21bf7057c4a0",
    subjectId: SubjectId.ALGO,
    text: "Fenwick Tree (немесе Binary Indexed Tree) Segment Tree-мен салыстырғанда қандай артықшылыққа ие?",
    options: [
      {
        id: "f6f1c942-a99f-41b1-9168-139cc7aef71e",
        text: "Ол жадты аз талап етеді (массив өлшемімен бірдей жад қолданады) және кодталуы қарапайым"
      },
      {
        id: "cf2f256b-dd77-4ede-936d-3ed93c5b5588",
        text: "Ол O(1) уақытында диапазондарды табады"
      },
      {
        id: "5f10f654-957b-447d-9374-435f056501bd",
        text: "Ол тек теріс сандармен жұмыс істейді"
      },
      {
        id: "7c7fe600-262f-4f81-a97f-f0ffc3e3cdb0",
        text: "Соқтығыстарды мүлдем болдырмайды"
      }
    ],
    correctOptionIds: [
      "f6f1c942-a99f-41b1-9168-139cc7aef71e"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b27",
    subjectId: SubjectId.ALGO,
    text: "Хаффман кодтау ағашы (Huffman Coding Tree) негізінен не үшін қолданылады?",
    options: [
      {
        id: "algo-t09-b27-op1",
        text: "Деректерді жоғалтусыз сығу (data compression) алгоритмдерінде"
      },
      {
        id: "algo-t09-b27-op2",
        text: "Парольдерді шифрлауда"
      },
      {
        id: "algo-t09-b27-op3",
        text: "Диск кеңістігін сұрыптауда"
      },
      {
        id: "algo-t09-b27-op4",
        text: "Мәліметтер базасында жылдам іздеу үшін"
      }
    ],
    correctOptionIds: [
      "algo-t09-b27-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "eb9ce599-bc9d-4c5f-b17e-b1128397e419",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашында (BST) өшірілетін түйіннің екі баласы да бар болса, оның орнына келетін орынбасар (successor) қалай табылады?",
    options: [
      {
        id: "9afea36a-1526-4c01-84c7-e7c91cbbf209",
        text: "Оң жақ ішкі ағаштың ең кіші түйіні (In-order Successor)"
      },
      {
        id: "3a0281f7-3991-45bd-9732-39ef9957be8e",
        text: "Сол жақ ішкі ағаштың ең үлкен түйіні"
      },
      {
        id: "72e48093-e808-49f2-af5d-f95a9054ef64",
        text: "Оң баласының оң баласы"
      },
      {
        id: "f141b406-ab66-4ace-941a-bb2398771f68",
        text: "Тізімнің ең соңғы жапырағы"
      }
    ],
    correctOptionIds: [
      "9afea36a-1526-4c01-84c7-e7c91cbbf209"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b28",
    subjectId: SubjectId.ALGO,
    text: "Ағаштың биіктігін анықтайтын рекурсивті алгоритмнің негізгі шарттық формуласы қандай?",
    options: [
      {
        id: "algo-t09-b28-op1",
        text: "height = max(height(left), height(right)) + 1"
      },
      {
        id: "algo-t09-b28-op2",
        text: "height = height(left) + height(right)"
      },
      {
        id: "algo-t09-b28-op3",
        text: "height = height(left) * height(right) + 1"
      },
      {
        id: "algo-t09-b28-op4",
        text: "height = min(height(left), height(right))"
      }
    ],
    correctOptionIds: [
      "algo-t09-b28-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e7e833fe-8490-4bff-a056-f5e395dd861e",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашының (BST) ең нашар жағдайдағы (дегенеративті немесе сызықтық тізімге айналғанда) іздеу уақыт күрделілігі қандай?",
    options: [
      {
        id: "248fc7d8-aaa0-458a-89bb-eefba7f31044",
        text: "O(n)"
      },
      {
        id: "472a7223-7056-4c65-815c-24824fdccfe8",
        text: "O(log n)"
      },
      {
        id: "cd942e39-04ec-4865-97b5-13a8986f28fa",
        text: "O(1)"
      },
      {
        id: "64a2c296-1a33-4e60-951d-74a3ed60883d",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "248fc7d8-aaa0-458a-89bb-eefba7f31044"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5978b219-432b-47b3-acf1-129c5c4927cb",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашын (BST) сызықтық тізімге айналдыру қаупін болдырмау үшін қандай ағаш түрлері ойлап табылған?",
    options: [
      {
        id: "87d1a687-bbed-42fb-a680-2498215363f7",
        text: "Өзін-өзі теңдестіретін ағаштар (AVL, Red-Black Tree)"
      },
      {
        id: "7049e8bf-caa5-46a4-a26a-789fc9b24df2",
        text: "Тек Trie ағаштары"
      },
      {
        id: "ecbc6521-6b9a-4b7f-bc6d-5d6762ec503c",
        text: "Бинарлық үйінділер"
      },
      {
        id: "0d889850-f4fa-44df-9c80-5b0d11bef778",
        text: "Huffman ағаштары"
      }
    ],
    correctOptionIds: [
      "87d1a687-bbed-42fb-a680-2498215363f7"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b29",
    subjectId: SubjectId.ALGO,
    text: "Көршілес түйіндерінің биіктік айырмашылығы 1-ден аспайтын бинарлық ағаш қалай аталады?",
    options: [
      {
        id: "algo-t09-b29-op1",
        text: "Теңгерімді бинарлық ағаш (Balanced Binary Tree)"
      },
      {
        id: "algo-t09-b29-op2",
        text: "Толық бинарлық ағаш"
      },
      {
        id: "algo-t09-b29-op3",
        text: "Кемшіліксіз бинарлық ағаш"
      },
      {
        id: "algo-t09-b29-op4",
        text: "Сызықтық ағаш"
      }
    ],
    correctOptionIds: [
      "algo-t09-b29-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "22fd797d-44e2-4b27-b3dc-24e6b108fef1",
    subjectId: SubjectId.ALGO,
    text: "Ағашты деңгей бойынша (Level-order Traversal) аралауда қай деректер құрылымы көмекші контейнер ретінде қолданылады?",
    options: [
      {
        id: "ec8bcc70-35c2-446b-b843-2b08a1d13154",
        text: "Кезек (Queue / FIFO) - BFS принципімен"
      },
      {
        id: "63d7bea9-3e49-4ebc-9793-054e22f48fe9",
        text: "Стек (Stack / LIFO) - DFS принципімен"
      },
      {
        id: "f179b626-e8d2-4e27-b5a6-e9d9fa0e87d8",
        text: "Жиын (Set)"
      },
      {
        id: "5cd00e2e-012c-4edb-ba44-e655bbe8d06f",
        text: "Екі өлшемді жиым"
      }
    ],
    correctOptionIds: [
      "ec8bcc70-35c2-446b-b843-2b08a1d13154"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ab814f63-9f44-4843-a552-a648f827600e",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық ағашты тереңдік бойынша аралауда (DFS: Pre-order, In-order, Post-order) рекурсиясыз нұсқа үшін қай деректер құрылымы қолданылады?",
    options: [
      {
        id: "bb04b05d-3aa2-4041-9864-bde89cafb0ea",
        text: "Стек (Stack)"
      },
      {
        id: "c4375db8-08fc-4357-89ca-41f1df88376f",
        text: "Кезек (Queue)"
      },
      {
        id: "061ec4bb-5d32-41e7-aab3-b558dd06ca0b",
        text: "Хэш-кесте"
      },
      {
        id: "47994b36-d7a4-482d-bd46-ac9445daab97",
        text: "Вектор"
      }
    ],
    correctOptionIds: [
      "bb04b05d-3aa2-4041-9864-bde89cafb0ea"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b30",
    subjectId: SubjectId.ALGO,
    text: "Trie (Prefix Tree) құрылымында сөзді іздеу уақыт күрделілігі неге тәуелді?",
    options: [
      {
        id: "algo-t09-b30-op1",
        text: "Ізделетін сөздің ұзындығына (L) - O(L) уақытында ізделеді"
      },
      {
        id: "algo-t09-b30-op2",
        text: "Ағаштағы жалпы сөздер санына (N) - O(log N)"
      },
      {
        id: "algo-t09-b30-op3",
        text: "Ағаштың биіктігіне ғана"
      },
      {
        id: "algo-t09-b30-op4",
        text: "Әліпбидегі әріптер санына"
      }
    ],
    correctOptionIds: [
      "algo-t09-b30-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b31",
    subjectId: SubjectId.ALGO,
    text: "Дегенеративті (degenerate) немесе бұзылған бинарлық ағаш дегеніміз не?",
    options: [
      {
        id: "algo-t09-b31-op1",
        text: "Әрбір ата-ана түйіннің тек бір ғана баласы бар және ол байланысқан тізім сияқты сызықтық пішінге ие ағаш"
      },
      {
        id: "algo-t09-b31-op2",
        text: "Барлық деңгейлері толық толтырылған ағаш"
      },
      {
        id: "algo-t09-b31-op3",
        text: "Соқтығыстар өте көп болатын ағаш"
      },
      {
        id: "algo-t09-b31-op4",
        text: "Тек жапырақтардан тұратын ағаш"
      }
    ],
    correctOptionIds: [
      "algo-t09-b31-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "37915be5-8aa8-4370-9081-f82b13a8bc6e",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық ағаштың түйіндер саны N-ге тең болса, ондағы сілтемелер (edges / қабырғалар) саны нешеге тең болады?",
    options: [
      {
        id: "5a8915e8-e799-4a3e-845c-640926b37940",
        text: "N - 1"
      },
      {
        id: "fd309aa6-5498-4f73-83be-a156bb3bdcc8",
        text: "N"
      },
      {
        id: "e087fa63-5b04-4c76-8039-ff817f77806f",
        text: "N + 1"
      },
      {
        id: "a33b8e65-6251-415e-bdc4-990ed59d19e4",
        text: "2 * N"
      }
    ],
    correctOptionIds: [
      "5a8915e8-e799-4a3e-845c-640926b37940"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8c6d6b8f-150a-4c3f-97c4-40bee9309e2b",
    subjectId: SubjectId.ALGO,
    text: "Екілік іздеу ағашына (BST) 10, 20, 30, 40, 50 сандары осы ретпен қосылды. Бұл ағаштың түрі қандай болады?",
    options: [
      {
        id: "5f567d82-b2dc-4cf8-8ab8-2ba803b17118",
        text: "Оңға қарай қисайған дегенеративті ағаш (Right-skewed tree)"
      },
      {
        id: "b32e3ba7-d6c8-4f97-ad8e-163b019c892d",
        text: "Солға қарай қисайған дегенеративті ағаш"
      },
      {
        id: "b694ec2d-8637-403f-a253-01eb5808cf10",
        text: "Кемшіліксіз теңгерімді ағаш"
      },
      {
        id: "b3ddb769-1b0d-4308-b064-98b682010b6a",
        text: "AVL ағашы"
      }
    ],
    correctOptionIds: [
      "5f567d82-b2dc-4cf8-8ab8-2ba803b17118"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1a386f70-ee9a-4301-bc33-29023b588447",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық ағаштың \"Perfect Binary Tree\" (Кемшіліксіз бинарлық ағаш) түрінің басты қасиеті қандай?",
    options: [
      {
        id: "dd206dbc-d539-4da5-8ce7-2a1fdac4ad41",
        text: "Барлық ішкі түйіндердің екі баласы бар және барлық жапырақтары бірдей деңгейде орналасқан"
      },
      {
        id: "98767a4f-3b50-4457-8020-51e607b5b1e7",
        text: "Тек сол жақтағы түйіндер ғана толтырылған"
      },
      {
        id: "266f2285-9cca-4a2d-a55c-9ecc8e581adf",
        text: "Түбірдің мүлдем баласы жоқ"
      },
      {
        id: "cce2434c-f60d-4cc9-9d2e-f00a2482a09f",
        text: "Ағаштың биіктігі шексіз бола алады"
      }
    ],
    correctOptionIds: [
      "dd206dbc-d539-4da5-8ce7-2a1fdac4ad41"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "dbb19a1a-55ef-4f38-be43-78685801cbdf",
    subjectId: SubjectId.ALGO,
    text: "Биіктігі H-қа тең perfect binary tree-дің максималды түйіндер саны қанша болады (түбір деңгейі 0-ге тең болса)?",
    options: [
      {
        id: "604da90f-6463-4934-98e6-4e14ad3e61c8",
        text: "2^(H + 1) - 1"
      },
      {
        id: "e9f6b1fd-0f83-4eae-9a08-24a11b788494",
        text: "2^H"
      },
      {
        id: "e6b1330e-ddb8-4d56-a5a6-6782ced07c50",
        text: "2^H - 1"
      },
      {
        id: "770a03ea-0e4d-465e-8007-ccbeef354405",
        text: "H^2"
      }
    ],
    correctOptionIds: [
      "604da90f-6463-4934-98e6-4e14ad3e61c8"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b32",
    subjectId: SubjectId.ALGO,
    text: "Биіктігі H-қа тең perfect binary tree-дің жапырақтар (leaf nodes) саны қанша болады?",
    options: [
      {
        id: "algo-t09-b32-op1",
        text: "2^H"
      },
      {
        id: "algo-t09-b32-op2",
        text: "2^(H - 1)"
      },
      {
        id: "algo-t09-b32-op3",
        text: "2^(H + 1)"
      },
      {
        id: "algo-t09-b32-op4",
        text: "H"
      }
    ],
    correctOptionIds: [
      "algo-t09-b32-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b33",
    subjectId: SubjectId.ALGO,
    text: "AVL ағасын ойлап тапқан ғалымдар кімдер?",
    options: [
      {
        id: "algo-t09-b33-op1",
        text: "Адельсон-Вельский және Ландис"
      },
      {
        id: "algo-t09-b33-op2",
        text: "Кнут, Моррис және Пратт"
      },
      {
        id: "algo-t09-b33-op3",
        text: "Хоар және Дейкстра"
      },
      {
        id: "algo-t09-b33-op4",
        text: "Кормен және Ривест"
      }
    ],
    correctOptionIds: [
      "algo-t09-b33-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "54b1c4ec-87a6-4502-a9f8-4b6418716ab3",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашында оң жақ баланың сол жақ ішкі ағашына элемент қосылғанда теңгерім бұзылса, қандай қос айналдыру (double rotation) орындалады?",
    options: [
      {
        id: "13a476dd-9d20-4aa6-994a-50491f95bfaf",
        text: "RL (Right-Left) айналдыруы"
      },
      {
        id: "9c3a7f9c-13b7-478c-945a-94b1dff9a114",
        text: "LR (Left-Right) айналдыруы"
      },
      {
        id: "b811d6d8-f980-4d4c-86e2-ab3efbed426f",
        text: "LL айналдыруы"
      },
      {
        id: "bbb46685-50c0-4515-812b-90822c07adf1",
        text: "RR айналдыруы"
      }
    ],
    correctOptionIds: [
      "13a476dd-9d20-4aa6-994a-50491f95bfaf"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "047e531d-dc44-4b05-b244-a34e48b787ea",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашында сол жақ баланың оң жақ ішкі ағашына элемент қосылғанда теңгерім бұзылса, қандай қос айналдыру орындалады?",
    options: [
      {
        id: "e53e7f94-8df5-4b6e-86a4-698a1a2c6189",
        text: "LR (Left-Right) айналдыруы"
      },
      {
        id: "5e76feb8-002b-4295-b48a-28ce3363cbe7",
        text: "RL (Right-Left) айналдыруы"
      },
      {
        id: "2a434998-6420-4c5d-ad5c-0e201d0e7c1d",
        text: "LL айналдыруы"
      },
      {
        id: "3d30336a-902e-47ac-9607-f7f80d958938",
        text: "RR айналдыруы"
      }
    ],
    correctOptionIds: [
      "e53e7f94-8df5-4b6e-86a4-698a1a2c6189"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b34",
    subjectId: SubjectId.ALGO,
    text: "Қызыл-қара ағашта кез келген қара түйіннің NIL балалары қандай түске ие болады?",
    options: [
      {
        id: "algo-t09-b34-op1",
        text: "Қара (Black)"
      },
      {
        id: "algo-t09-b34-op2",
        text: "Қызыл (Red)"
      },
      {
        id: "algo-t09-b34-op3",
        text: "Олардың түсі жоқ"
      },
      {
        id: "algo-t09-b34-op4",
        text: "Кездейсоқ түсті"
      }
    ],
    correctOptionIds: [
      "algo-t09-b34-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "90d59bdf-5e35-4009-a16d-64297a8b1b05",
    subjectId: SubjectId.ALGO,
    text: "Қызыл-қара ағаш пен AVL ағашын салыстырғанда қайсысы жиі элемент қосу/өшіру операциялары үшін тиімдірек және неліктен?",
    options: [
      {
        id: "ea8f3f90-de91-4111-b99e-32f5ef991955",
        text: "Қызыл-қара ағаш, өйткені оның теңгерімдеу талабы AVL ағашына қарағанда сәл жұмсақ және айналдыру саны аз болады"
      },
      {
        id: "7e9efa5f-b88c-4ee9-82db-849568a313a8",
        text: "AVL ағашы, өйткені ол қатаң теңгерімделген"
      },
      {
        id: "ea36828b-3afb-4905-85d3-3b067ecb5dd9",
        text: "Екеуінің айырмашылығы жоқ"
      },
      {
        id: "33933b47-2696-498d-9f98-b1013e0facfe",
        text: "Қызыл-қара ағаш түрі тек сандар үшін ғана тиімді"
      }
    ],
    correctOptionIds: [
      "ea8f3f90-de91-4111-b99e-32f5ef991955"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b35",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашы қай кезде Қызыл-қара ағашқа қарағанда тиімдірек болады?",
    options: [
      {
        id: "algo-t09-b35-op1",
        text: "Егер ағашта іздеу (search) операциялары өте жиі, ағымдағы қосу/өшіру операциялары өте сирек орындалатын болса (қатаң теңгерім іздеуді жылдамдатады)"
      },
      {
        id: "algo-t09-b35-op2",
        text: "Ағаш өте үлкен болғанда"
      },
      {
        id: "algo-t09-b35-op3",
        text: "Ағаш бос болғанда"
      },
      {
        id: "algo-t09-b35-op4",
        text: "Егер тек теріс сандар сақталса"
      }
    ],
    correctOptionIds: [
      "algo-t09-b35-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "aa3d0ebc-a28b-47a3-8cf1-587c753e8f9e",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасындағы std::map және std::set контейнерлері ішкі құрылымында қандай деректер құрылымына негізделген?",
    options: [
      {
        id: "8c7b0337-64f3-4c53-b045-5376c2ec3244",
        text: "Қызыл-қара ағаш (Red-Black Tree)"
      },
      {
        id: "159485a3-1972-4d89-a612-c54d3eec7391",
        text: "AVL ағашы"
      },
      {
        id: "8a247a83-8f17-406a-bd9f-c5dc210c543a",
        text: "Бинарлық үйінді (Binary Heap)"
      },
      {
        id: "cdc667c9-c595-4911-90c5-80cda5144971",
        text: "Хэш-кесте"
      }
    ],
    correctOptionIds: [
      "8c7b0337-64f3-4c53-b045-5376c2ec3244"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b36",
    subjectId: SubjectId.ALGO,
    text: "Java-дағы TreeMap және TreeSet сыныптары іштей қандай теңгерімді ағашты қолданады?",
    options: [
      {
        id: "algo-t09-b36-op1",
        text: "Қызыл-қара ағаш (Red-Black Tree)"
      },
      {
        id: "algo-t09-b36-op2",
        text: "B-ағаш"
      },
      {
        id: "algo-t09-b36-op3",
        text: "Trie ағашы"
      },
      {
        id: "algo-t09-b36-op4",
        text: "AVL ағашы"
      }
    ],
    correctOptionIds: [
      "algo-t09-b36-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "14181b2a-3215-486d-a9cc-1a558334f7e6",
    subjectId: SubjectId.ALGO,
    text: "Түйінге келетін барлық жолдардағы қара түйіндер саны (түйіннің өзін есептемегенде) қалай аталады?",
    options: [
      {
        id: "b809dfc2-a02b-43c3-837e-bdb23f5098e5",
        text: "Қара биіктік (Black-height)"
      },
      {
        id: "0fe7ef46-db5d-403e-866e-152762418be8",
        text: "Қара тереңдік"
      },
      {
        id: "cb59197b-6504-4089-a825-c5b42fe83551",
        text: "AVL теңгерімі"
      },
      {
        id: "085aa167-ff15-4b71-972e-33685c380ab7",
        text: "Ағаш дәрежесі"
      }
    ],
    correctOptionIds: [
      "b809dfc2-a02b-43c3-837e-bdb23f5098e5"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "fd4ee07a-0592-477f-bec8-530d10328ce8",
    subjectId: SubjectId.ALGO,
    text: "Екілік үйінді (Binary Heap) құрылымы массивте сақталғанда, оның қосымша жад (Space Complexity) мөлшері қандай болады?",
    options: [
      {
        id: "e1314ad9-d84b-4079-9d0e-f6fd2aa03ddf",
        text: "O(1) (қосымша сілтемелерді қажет етпейді, тек массив орындарын қолданады)"
      },
      {
        id: "6dd3bcd0-1a5c-46b9-8b7b-13144e2cc48b",
        text: "O(n)"
      },
      {
        id: "634dd8bb-7e0f-42b3-be59-381e393b9b79",
        text: "O(log n)"
      },
      {
        id: "3600152f-b28f-4210-b544-5c04bba6cfc9",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "e1314ad9-d84b-4079-9d0e-f6fd2aa03ddf"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b37",
    subjectId: SubjectId.ALGO,
    text: "Үйіндіде (Heap) ең жоғары элементті оқудың (get min/max) уақыт күрделілігі қандай?",
    options: [
      {
        id: "algo-t09-b37-op1",
        text: "O(1) (әрқашан массивтің 0-інші индексінде тұрады)"
      },
      {
        id: "algo-t09-b37-op2",
        text: "O(log n)"
      },
      {
        id: "algo-t09-b37-op3",
        text: "O(n)"
      },
      {
        id: "algo-t09-b37-op4",
        text: "O(n log n)"
      }
    ],
    correctOptionIds: [
      "algo-t09-b37-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "aa706d6e-5a29-42a9-9aa1-53668e92b855",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық үйіндіде кез келген элементтің мәнін өзгерту (decrease/increase key) уақыт күрделілігі қандай?",
    options: [
      {
        id: "11e7943b-f26c-448d-bc91-b8114ce105c5",
        text: "O(log n) (үйінді қасиетін қалпына келтіру үшін жоғары немесе төмен жылжыту қажет)"
      },
      {
        id: "5e816b1b-1834-4164-9f31-46166241b5db",
        text: "O(1)"
      },
      {
        id: "5c1b164d-2182-40bd-ac13-2103d041837e",
        text: "O(n)"
      },
      {
        id: "388e95cf-bcac-4f8e-8b22-d78253abcdc5",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "11e7943b-f26c-448d-bc91-b8114ce105c5"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e0b5468b-5fe9-4620-b1f4-4db7ae8a14e1",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағасын (BST) Pre-order ретімен аралағанда элементтер қандай болады, егер түбір=10, сол=5, оң=15 болса?",
    options: [
      {
        id: "ad1721f6-36f8-4578-98c7-295699579197",
        text: "10, 5, 15"
      },
      {
        id: "a8595ad7-1962-4e45-9736-c44ffdfed82c",
        text: "5, 10, 15"
      },
      {
        id: "eef1d330-2891-4bec-9a82-bb5b6e275a98",
        text: "5, 15, 10"
      },
      {
        id: "9fb2bc47-c462-4b0b-8f28-f82a21401770",
        text: "15, 10, 5"
      }
    ],
    correctOptionIds: [
      "ad1721f6-36f8-4578-98c7-295699579197"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a13912b7-eb6e-4879-9766-609697d8ed25",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағасын (BST) Post-order ретімен аралағанда элементтер қандай болады, егер түбір=10, сол=5, оң=15 болса?",
    options: [
      {
        id: "dcc1be31-789c-4c89-a161-0bc69a4f04b3",
        text: "5, 15, 10"
      },
      {
        id: "0de95246-a239-4c99-864b-24f2f4ae252f",
        text: "5, 10, 15"
      },
      {
        id: "a3714b5b-1397-4677-94c1-bc4f78a65c0a",
        text: "10, 5, 15"
      },
      {
        id: "4f1b60ee-e057-492d-8b17-aad1b3a2aae4",
        text: "15, 5, 10"
      }
    ],
    correctOptionIds: [
      "dcc1be31-789c-4c89-a161-0bc69a4f04b3"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f8e61e76-d0f2-406c-b480-d4fba1219600",
    subjectId: SubjectId.ALGO,
    text: "Түбірден кез келген жапыраққа до дейінгі ең ұзын жол ең қысқа жолдан екі еседен артық ұзын болмайтын теңгерімді ағаш қалай аталады?",
    options: [
      {
        id: "9a455bb5-dfde-45b7-b80f-7b3738904101",
        text: "Қызыл-қара ағаш (Red-Black Tree)"
      },
      {
        id: "a7c68a0d-0c3a-4bcb-9351-e30e2f01a92b",
        text: "Бинарлық іздеу ағашы (BST)"
      },
      {
        id: "2d40793a-9508-4402-9137-41fae0f7cf8e",
        text: "Дегенеративті ағаш"
      },
      {
        id: "3daa7364-bcc3-4566-a2db-d800d83f5ed8",
        text: "Сызықтық ағаш"
      }
    ],
    correctOptionIds: [
      "9a455bb5-dfde-45b7-b80f-7b3738904101"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b38",
    subjectId: SubjectId.ALGO,
    text: "B+ ағасының B-ағашынан (B-Tree) негізгі айырмашылығы неде?",
    options: [
      {
        id: "algo-t09-b38-op1",
        text: "B+ ағашында барлық деректер (немесе мәндер) тек жапырақтарда сақталады және жапырақтар өзара байланысқан тізіммен жалғанған"
      },
      {
        id: "algo-t09-b38-op2",
        text: "B+ ағашы теңгерімсіз болады"
      },
      {
        id: "algo-t09-b38-op3",
        text: "B+ ағашы тек 2 баладан тұрады"
      },
      {
        id: "algo-t09-b38-op4",
        text: "B+ ағашы жадты екі есе көп алады"
      }
    ],
    correctOptionIds: [
      "algo-t09-b38-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b39",
    subjectId: SubjectId.ALGO,
    text: "Неліктен B+ ағашы мәліметтер базасының индекстерінде өте тиімді?",
    options: [
      {
        id: "algo-t09-b39-op1",
        text: "Жапырақтар байланысқан тізім құрайтындықтан, диапазондар бойынша іздеуді (range scan) өте жылдам орындайды"
      },
      {
        id: "algo-t09-b39-op2",
        text: "Онда соқтығыстар мүлдем болмайды"
      },
      {
        id: "algo-t09-b39-op3",
        text: "Ол жадты мүлдем алмайды"
      },
      {
        id: "algo-t09-b39-op4",
        text: "Ол рекурсия қолданбайды"
      }
    ],
    correctOptionIds: [
      "algo-t09-b39-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8c97f19d-8460-47d8-96c5-734cf5dccb89",
    subjectId: SubjectId.ALGO,
    text: "n элементі бар бинарлық іздеу ағашында (BST) In-order іздеудің орташа уақыт күрделілігі қандай?",
    options: [
      {
        id: "142ae9e3-d5c0-4bb6-ac59-620b5dc5e646",
        text: "O(n) (барлық элементтерді бір рет басып өту қажет)"
      },
      {
        id: "914183f5-8ae5-4a7c-bd48-504806e105b1",
        text: "O(log n)"
      },
      {
        id: "1c14a9f9-a938-4fb9-a243-f5f35bcf712e",
        text: "O(1)"
      },
      {
        id: "f9b1fc59-0bfd-4257-8675-5909c716e871",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "142ae9e3-d5c0-4bb6-ac59-620b5dc5e646"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b40",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағасынан (BST) элементті өшірудің ең қарапайым жағдайы қандай?",
    options: [
      {
        id: "algo-t09-b40-op1",
        text: "Өшірілетін түйін жапырақ (баласы жоқ) болса (оны сілтемесін NULL етіп, жадын босата саламыз)"
      },
      {
        id: "algo-t09-b40-op2",
        text: "Түйіннің бір баласы болса"
      },
      {
        id: "algo-t09-b40-op3",
        text: "Түйіннің екі баласы болса"
      },
      {
        id: "algo-t09-b40-op4",
        text: "Түйін түбір болса"
      }
    ],
    correctOptionIds: [
      "algo-t09-b40-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ded1f69a-8058-4247-b4ba-527fc8b7be03",
    subjectId: SubjectId.ALGO,
    text: "Егер бинарлық ағаштың әрбір ішкі түйінінің дәрежесі (балалар саны) дәл 0 немесе 2-ге тең болса, ол қалай аталады?",
    options: [
      {
        id: "9d1c7417-82ea-4943-a32e-6372862b994d",
        text: "Strict / Full Binary Tree (Қатаң / Толық бинарлық ағаш)"
      },
      {
        id: "1b4606a7-03ab-4488-9f6d-2a653579a31a",
        text: "Complete Binary Tree"
      },
      {
        id: "d47f4c92-4849-49d9-9951-5901cb53b509",
        text: "Perfect Binary Tree"
      },
      {
        id: "d0b4ec2d-667f-484a-934a-f38467244646",
        text: "Skewed Binary Tree"
      }
    ],
    correctOptionIds: [
      "9d1c7417-82ea-4943-a32e-6372862b994d"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "79d04246-593a-4ee1-9e03-9073c704c30e",
    subjectId: SubjectId.ALGO,
    text: "Жиымда сақталған бинарлық үйіндінің (Binary Heap) соңғы түйіні қай индексте орналасады (нөлдік индекспен бастағанда, үйінді өлшемі N)?",
    options: [
      {
        id: "89eb6ab5-ac76-4e34-9706-30f508afb211",
        text: "N - 1"
      },
      {
        id: "38855034-f07e-4983-8149-36220bbb8ff4",
        text: "N"
      },
      {
        id: "c5757f15-3cc1-4a99-aa2b-a869a6e5d6ba",
        text: "N // 2"
      },
      {
        id: "5b5db58f-be71-4a21-b6ca-9885b9d21250",
        text: "0"
      }
    ],
    correctOptionIds: [
      "89eb6ab5-ac76-4e34-9706-30f508afb211"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b41",
    subjectId: SubjectId.ALGO,
    text: "Trie (Prefix Tree) түбірі қандай мәнді сақтайды?",
    options: [
      {
        id: "algo-t09-b41-op1",
        text: "Әдетте бос мәнді (бос таңба немесе NULL)"
      },
      {
        id: "algo-t09-b41-op2",
        text: "Бірінші сөздің бірінші әрпін"
      },
      {
        id: "algo-t09-b41-op3",
        text: "Ағаштың жалпы биіктігін"
      },
      {
        id: "algo-t09-b41-op4",
        text: "Сөздердің жалпы санын"
      }
    ],
    correctOptionIds: [
      "algo-t09-b41-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b42",
    subjectId: SubjectId.ALGO,
    text: "Хаффман ағашында жиілігі ең жоғары символдар түбірге қалай орналасады?",
    options: [
      {
        id: "algo-t09-b42-op1",
        text: "Tүбірге жақын (қысқа код алу үшін)"
      },
      {
        id: "algo-t09-b42-op2",
        text: "Түбірден ең алыс"
      },
      {
        id: "algo-t09-b42-op3",
        text: "Олардың орналасуы кездейсоқ"
      },
      {
        id: "algo-t09-b42-op4",
        text: "Тек сол жақта ғана орналасады"
      }
    ],
    correctOptionIds: [
      "algo-t09-b42-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5ee38df5-0668-48f2-9665-f4582f781d47",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашына (BST) 15, 10, 20, 8, 12 сандары осы ретпен қосылды. 12 саны қай түйіннің баласы болады?",
    options: [
      {
        id: "3563a999-3761-4d2c-ad44-e0554ea100a6",
        text: "10-ның оң баласы"
      },
      {
        id: "2b910930-3440-417a-848b-59dd5798b16c",
        text: "15-тің сол баласы"
      },
      {
        id: "0119c714-a848-45ed-96d8-6aea00dd1923",
        text: "20-ның сол баласы"
      },
      {
        id: "01d9a1d9-8dcd-4518-84bf-6f18b6d6d910",
        text: "8-дің оң баласы"
      }
    ],
    correctOptionIds: [
      "3563a999-3761-4d2c-ad44-e0554ea100a6"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b43",
    subjectId: SubjectId.ALGO,
    text: "Binary Heap-тің AVL ағашынан айырмашылығы неде?",
    options: [
      {
        id: "algo-t09-b43-op1",
        text: "Үйінді сұрыпталмаған (тек ата-анасы баласынан үлкен/кіші болуы керек), ал AVL ағашы толық сұрыпталған (сол < түбір < оң)"
      },
      {
        id: "algo-t09-b43-op2",
        text: "Үйінді әрқашан теңгерімсіз болады"
      },
      {
        id: "algo-t09-b43-op3",
        text: "AVL ағашы массивпен жүзеге асырылады"
      },
      {
        id: "algo-t09-b43-op4",
        text: "Үйіндіде іздеу O(log n) уақытында орындалады"
      }
    ],
    correctOptionIds: [
      "algo-t09-b43-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b44",
    subjectId: SubjectId.ALGO,
    text: "Неліктен бинарлық үйіндіде іздеу (search) операциясы O(n) уақыт алады?",
    options: [
      {
        id: "algo-t09-b44-op1",
        text: "Өйткені үйінді сол/оң балалар арасында сұрыптау ретін сақтамайды, сондықтан іздеу үшін бүкіл ағашты аралау қажет"
      },
      {
        id: "algo-t09-b44-op2",
        text: "Үйіндіде сілтемелер болмағандықтан"
      },
      {
        id: "algo-t09-b44-op3",
        text: "Үйінді өте терең болғандықтан"
      },
      {
        id: "algo-t09-b44-op4",
        text: "Үйіндіде элементтер тек жапырақтарда сақталады"
      }
    ],
    correctOptionIds: [
      "algo-t09-b44-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "16509785-f3ad-4298-8de3-33d981ac9073",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашынан (BST) түйінді өшіргенде (екі баласы бар жағдай), In-order Successor орнына In-order Predecessor-ды қолдануға бола ма?",
    options: [
      {
        id: "889c842d-7795-461e-9ea1-1b79fca2e467",
        text: "Иә, сол жақ ішкі ағаштың ең үлкен элементін (predecessor) қолдануға толық болады"
      },
      {
        id: "525d4595-fe13-4f4b-9724-281f6ef002ff",
        text: "Жоқ, ол ағаштың сұрыпталу ретін бұзады"
      },
      {
        id: "4a099af2-e5cc-4ad9-ae44-fbf8206d346b",
        text: "Тек егер ағаш биіктігі 2-ге тең болса ғана болады"
      },
      {
        id: "6913681c-a7bb-48fa-9ab7-9468828e18ce",
        text: "Тек AVL ағаштарында болады"
      }
    ],
    correctOptionIds: [
      "889c842d-7795-461e-9ea1-1b79fca2e467"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b45",
    subjectId: SubjectId.ALGO,
    text: "Ағаштың биіктігі (height) 0-ге тең болса, ол нені білдіреді?",
    options: [
      {
        id: "algo-t09-b45-op1",
        text: "Ағашта түгел бір ғана түйін (түбір) бар екенін"
      },
      {
        id: "algo-t09-b45-op2",
        text: "Ағаштың бос екенін"
      },
      {
        id: "algo-t09-b45-op3",
        text: "Ағаштың сызықтық екенін"
      },
      {
        id: "algo-t09-b45-op4",
        text: "Ағашта шексіз түйін бар екенін"
      }
    ],
    correctOptionIds: [
      "algo-t09-b45-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b46",
    subjectId: SubjectId.ALGO,
    text: "Бос ағаштың (empty tree) биіктігі әдетте қандай санмен анықталады?",
    options: [
      {
        id: "algo-t09-b46-op1",
        text: "-1"
      },
      {
        id: "algo-t09-b46-op2",
        text: "0"
      },
      {
        id: "algo-t09-b46-op3",
        text: "1"
      },
      {
        id: "algo-t09-b46-op4",
        text: "NULL"
      }
    ],
    correctOptionIds: [
      "algo-t09-b46-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "4385f830-fb51-4d3c-855d-8418b4a0d31a",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашына (BST) 50, 30, 70 сандары қосылды. Одан 50 (түбір) санын өшіргенде оның орнына қай сан келеді (In-order Successor нұсқасы бойынша)?",
    options: [
      {
        id: "d7ab0ac2-86e9-4356-93b3-7ae9f38306e9",
        text: "70"
      },
      {
        id: "94e1210e-8f5a-4629-bce8-1c1f50ee9fd0",
        text: "30"
      },
      {
        id: "4fe6c96e-c1fc-4eff-b8f4-3b32253a0297",
        text: "Ешқандай сан келмейді, ағаш бұзылады"
      },
      {
        id: "84b11422-e960-41f1-abdf-173381c7cb9c",
        text: "30 бен 70-тің орташасы"
      }
    ],
    correctOptionIds: [
      "d7ab0ac2-86e9-4356-93b3-7ae9f38306e9"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b47",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашындағы LL (Left-Left) бұзылуы қай кезде орын алады?",
    options: [
      {
        id: "algo-t09-b47-op1",
        text: "Сол жақ баланың сол жақ ішкі ағашына элемент қосылғанда (теңгерімді қалпына келтіру үшін оңға бір рет айналдыру керек)"
      },
      {
        id: "algo-t09-b47-op2",
        text: "Оң жақ баланың оң жағына қосылғанда"
      },
      {
        id: "algo-t09-b47-op3",
        text: "Сол жақ баланың оң жағына қосылғанда"
      },
      {
        id: "algo-t09-b47-op4",
        text: "Түбірге тікелей қосылғанда"
      }
    ],
    correctOptionIds: [
      "algo-t09-b47-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b48",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашындағы RR (Right-Right) бұзылуы қай кезде орын алады?",
    options: [
      {
        id: "algo-t09-b48-op1",
        text: "Оң жақ баланың оң жақ ішкі ағашына элемент қосылғанда (теңгерім үшін солға бір рет айналдыру керек)"
      },
      {
        id: "algo-t09-b48-op2",
        text: "Сол жақ баланың сол жағына қосылғанда"
      },
      {
        id: "algo-t09-b48-op3",
        text: "Оң жақ баланың сол жағына қосылғанда"
      },
      {
        id: "algo-t09-b48-op4",
        text: "Ағаш бос болғанда"
      }
    ],
    correctOptionIds: [
      "algo-t09-b48-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b49",
    subjectId: SubjectId.ALGO,
    text: "Ағаштың екі түйінінің ата-анасы ортақ болса, олар өзара қалай аталады?",
    options: [
      {
        id: "algo-t09-b49-op1",
        text: "Бауырлар (Siblings)"
      },
      {
        id: "algo-t09-b49-op2",
        text: "Ұрпақтар"
      },
      {
        id: "algo-t09-b49-op3",
        text: "Балалар"
      },
      {
        id: "algo-t09-b49-op4",
        text: "Көршілер"
      }
    ],
    correctOptionIds: [
      "algo-t09-b49-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b50",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашында (BST) In-order Successor дегеніміз не?",
    options: [
      {
        id: "algo-t09-b50-op1",
        text: "Сұрыпталған ретпен алғанда берілген түйіннен кейін бірден тұратын ең кіші мәнді түйін"
      },
      {
        id: "algo-t09-b50-op2",
        text: "Берілген түйіннің тікелей оң баласы"
      },
      {
        id: "algo-t09-b50-op3",
        text: "Ағаштың ең соңғы жапырағы"
      },
      {
        id: "algo-t09-b50-op4",
        text: "Түбір түйіні"
      }
    ],
    correctOptionIds: [
      "algo-t09-b50-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b51",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашында (BST) In-order Predecessor дегеніміз не?",
    options: [
      {
        id: "algo-t09-b51-op1",
        text: "Сұрыпталған ретпен алғанда берілген түйіннің алдында тұратын ең үлкен мәнді түйін"
      },
      {
        id: "algo-t09-b51-op2",
        text: "Берілген түйіннің тікелей сол баласы"
      },
      {
        id: "algo-t09-b51-op3",
        text: "Түбірдің ата-анасы"
      },
      {
        id: "algo-t09-b51-op4",
        text: "Ең кіші жапырақ"
      }
    ],
    correctOptionIds: [
      "algo-t09-b51-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b52",
    subjectId: SubjectId.ALGO,
    text: "Үйіндіде (Heap) ең нашар іздеу (search) уақыт күрделілігі қандай?",
    options: [
      {
        id: "algo-t09-b52-op1",
        text: "O(n)"
      },
      {
        id: "algo-t09-b52-op2",
        text: "O(log n)"
      },
      {
        id: "algo-t09-b52-op3",
        text: "O(1)"
      },
      {
        id: "algo-t09-b52-op4",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "algo-t09-b52-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "47249caa-1102-42f7-9cfb-668f1dfd26d0",
    subjectId: SubjectId.ALGO,
    text: "Массив негізіндегі Max-Heap берілген: [90, 80, 70, 50, 60]. 100 санын қосқанда, ол қай индекске орналасады және sift-up нәтижесінде қайда барады?",
    options: [
      {
        id: "a47f8dcd-80e3-4603-9e9b-fabc6baac16a",
        text: "Массив соңына (5-индекс) қосылып, sift-up арқылы түбірге (0-индекс) шығады"
      },
      {
        id: "9aa5906a-7d7e-4300-b969-bc4032b015cd",
        text: "Тікелей түбірге (0-индекс) жазылады"
      },
      {
        id: "07c3675c-9df3-41c0-a4de-f8bd6821a62c",
        text: "1-индексте қалады"
      },
      {
        id: "71019817-edfc-4dd5-8cad-c6c50d9f9593",
        text: "Үйінді өзгеріссіз қалады"
      }
    ],
    correctOptionIds: [
      "a47f8dcd-80e3-4603-9e9b-fabc6baac16a"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b53",
    subjectId: SubjectId.ALGO,
    text: "Ағаштың белгілі бір түйінінің \"дәрежесі\" (degree) деген не?",
    options: [
      {
        id: "algo-t09-b53-op1",
        text: "Сол түйіннен тараған тікелей балаларының саны"
      },
      {
        id: "algo-t09-b53-op2",
        text: "Түбірден сол түйінге дейінгі жолдың ұзындығы"
      },
      {
        id: "algo-t09-b53-op3",
        text: "Түйінде сақталған бүтін сан мәні"
      },
      {
        id: "algo-t09-b53-op4",
        text: "Ағаштың жалпы биіктігі"
      }
    ],
    correctOptionIds: [
      "algo-t09-b53-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b54",
    subjectId: SubjectId.ALGO,
    text: "Ағаштың жалпы дәрежесі (degree of a tree) қалай анықталады?",
    options: [
      {
        id: "algo-t09-b54-op1",
        text: "Ағаштағы түйіндердің ең максималды дәрежесіне тең"
      },
      {
        id: "algo-t09-b54-op2",
        text: "Барлық түйіндер дәрежелерінің қосындысы"
      },
      {
        id: "algo-t09-b54-op3",
        text: "Ағаш биіктігінің екі еселенген мәні"
      },
      {
        id: "algo-t09-b54-op4",
        text: "Жапырақтардың жалпы саны"
      }
    ],
    correctOptionIds: [
      "algo-t09-b54-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "898bd0a4-b479-47bc-acf4-49429171c5a3",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашындағы баланс бұзылуын LL, RR, LR, RL деп бөлеміз. Осылардың ішіндегі LL және RR айналулары қандай айналуларға жатады?",
    options: [
      {
        id: "71630ea7-41a7-421b-82ad-8b508ebcb5dd",
        text: "Дара (бір реттік) айналулар (Single Rotations)"
      },
      {
        id: "9fae32ef-9f02-4523-95f8-ea1769bf2a68",
        text: "Қос (екі реттік) айналулар"
      },
      {
        id: "5bf16798-1fec-45eb-a72b-07ea197d7a48",
        text: "Рекурсивті айналулар"
      },
      {
        id: "32b0bb04-17d1-429c-922c-daf98aa85f39",
        text: "Айналу емес, тек түс өзгерту"
      }
    ],
    correctOptionIds: [
      "71630ea7-41a7-421b-82ad-8b508ebcb5dd"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b55",
    subjectId: SubjectId.ALGO,
    text: "AVL ағашындағы LR және RL айналулары қандай айналуларға жатады?",
    options: [
      {
        id: "algo-t09-b55-op1",
        text: "Қос (екі реттік) айналулар (Double Rotations)"
      },
      {
        id: "algo-t09-b55-op2",
        text: "Дара (бір реттік) айналулар"
      },
      {
        id: "algo-t09-b55-op3",
        text: "Сызықтық айналулар"
      },
      {
        id: "algo-t09-b55-op4",
        text: "Түстерді бояу әдісі"
      }
    ],
    correctOptionIds: [
      "algo-t09-b55-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5fb7a692-abb3-4abc-94c9-e35e83cdd98e",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық үйіндідегі (Binary Heap) ең кіші немесе ең үлкен элементті алудың уақыт күрделілігі неліктен O(log n) болады?",
    options: [
      {
        id: "2dccdbcd-132b-4772-a054-02b428596da5",
        text: "Себебі элементті алған соң соңғы элементті түбірге қойып, үйінді қасиетін қалпына келтіру үшін sift-down O(log n) қадам жасамыз"
      },
      {
        id: "7ace3747-14cc-4748-8d46-ce148e7e5231",
        text: "Себебі бүкіл массивті сұрыптау қажет"
      },
      {
        id: "862d1529-ecab-46de-a0ec-cb6b57091af9",
        text: "Себебі іздеу алгоритмі рекурсивті түрде орындалады"
      },
      {
        id: "f2a07040-6aed-471a-9cec-3c7cc922de56",
        text: "Себебі үйіндінің биіктігі әрқашан N-ге тең болады"
      }
    ],
    correctOptionIds: [
      "2dccdbcd-132b-4772-a054-02b428596da5"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b56",
    subjectId: SubjectId.ALGO,
    text: "Толық бинарлық ағаштың (Complete Binary Tree) биіктігі N түйін болса қандай болады?",
    options: [
      {
        id: "algo-t09-b56-op1",
        text: "⌊log2(N)⌋"
      },
      {
        id: "algo-t09-b56-op2",
        text: "N // 2"
      },
      {
        id: "algo-t09-b56-op3",
        text: "N - 1"
      },
      {
        id: "algo-t09-b56-op4",
        text: "2^N"
      }
    ],
    correctOptionIds: [
      "algo-t09-b56-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1940d8dd-255b-4958-a8a5-87f31c53f434",
    subjectId: SubjectId.ALGO,
    text: "Төмендегілердің қайсысы өзін-өзі теңдестіретін бинарлық іздеу ағашына (self-balancing BST) ЖАТПАЙДЫ?",
    options: [
      {
        id: "4b2916fb-2431-472c-93e7-ae53bdb7390e",
        text: "Қарапайым Бинарлық іздеу ағашы (Ordinary BST)"
      },
      {
        id: "ff13ca3f-c7f5-4f9e-90e6-a6cda3062f89",
        text: "AVL ағашы"
      },
      {
        id: "4700bd6f-829b-4884-b0fc-c1619176af2a",
        text: "Қызыл-қара ағаш (Red-Black Tree)"
      },
      {
        id: "1eb6560f-854e-4568-af7c-c79019cfd21b",
        text: "Splay ағашы"
      }
    ],
    correctOptionIds: [
      "4b2916fb-2431-472c-93e7-ae53bdb7390e"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t09-b57",
    subjectId: SubjectId.ALGO,
    text: "Ағаштармен жұмыс істегенде \"Тереңдік\" (Depth) термині нені білдіреді?",
    options: [
      {
        id: "algo-t09-b57-op1",
        text: "Түбірден берілген түйінге дейінгі жолдың ұзындығы (немесе қабырғалар саны)"
      },
      {
        id: "algo-t09-b57-op2",
        text: "Түйіннен ең терең жапыраққа дейінгі қашықтық"
      },
      {
        id: "algo-t09-b57-op3",
        text: "Түйіннің жалпы балаларының саны"
      },
      {
        id: "algo-t09-b57-op4",
        text: "Ағаштың жалпы деңгейлерінің саны"
      }
    ],
    correctOptionIds: [
      "algo-t09-b57-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6bffec62-fda1-45b3-9048-d61a6d07df58",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық іздеу ағашында (BST) In-order бойынша аралау (traverse) нәтижесі қандай тізбекті береді?",
    options: [
      {
        id: "814540a5-af36-45f0-a72f-04bf06a07ea5",
        text: "Өсу ретімен сұрыпталған тізбекті"
      },
      {
        id: "82d37c52-41be-4bea-87cd-69b127551bee",
        text: "Кему ретімен сұрыпталған тізбекті"
      },
      {
        id: "825d1b89-672c-49ad-bf52-91496836705f",
        text: "Кездейсоқ орналасқан элементтерді"
      },
      {
        id: "f99da35e-e9ca-42f2-be03-727bc4661107",
        text: "Тек жұп сандарды"
      }
    ],
    correctOptionIds: [
      "814540a5-af36-45f0-a72f-04bf06a07ea5"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "095b21d6-b391-4bae-8848-8b7d55578600",
    subjectId: SubjectId.ALGO,
    text: "Бинарлық ағаштың түйінін сипаттайтын құрылымда (Node struct) әдетте қандай сілтемелер сақталады?",
    options: [
      {
        id: "1babdaba-b7f1-4837-ad40-a190c7f25153",
        text: "Сол және оң балаларына сілтемелер (left, right pointers)"
      },
      {
        id: "ecfc02b4-5bc7-4a0f-8de2-94b64ffea752",
        text: "Тек ата-анасына сілтеме"
      },
      {
        id: "b4afaa85-0492-4385-b559-4d61660cf949",
        text: "Келесі және алдыңғы бауырларына сілтемелер"
      },
      {
        id: "04d9752c-6478-4cf5-afa4-a6a24c91e3d8",
        text: "Хэш-кестеге сілтеме"
      }
    ],
    correctOptionIds: [
      "1babdaba-b7f1-4837-ad40-a190c7f25153"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a8e906dd-b1e1-4596-b206-923d9690b9aa",
    subjectId: SubjectId.ALGO,
    text: "Екілік іздеу ағашында (BST) егер ізделіп жатқан кілт ағымдағы түйіннен кіші болса, іздеу қай бағытта жалғасады?",
    options: [
      {
        id: "86008a36-c1b3-4b91-8327-c4e3417b6857",
        text: "Сол жақ ішкі ағашта (left subtree)"
      },
      {
        id: "a751c6ba-e359-48a6-adc7-3d69194b9c3d",
        text: "Оң жақ ішкі ағашта (right subtree)"
      },
      {
        id: "036a1514-93a8-4492-8043-8813cfb4b20e",
        text: "Түбірдің ата-анасында"
      },
      {
        id: "e41dc565-70ea-493e-b36c-204bc307887b",
        text: "Аралау тоқтатылады"
      }
    ],
    correctOptionIds: [
      "86008a36-c1b3-4b91-8327-c4e3417b6857"
    ],
    type: QuestionType.SINGLE,
    topic: "Ағаш және екілік үйінділер",
    difficulty: Difficulty.MEDIUM
  }
];
