import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// algo / Сызықтық мәліметтер құрылымы
export const algo7LinearStructuresQuestions : Question[] = [
  {
    id: "algo-t07-b01",
    subjectId: SubjectId.ALGO,
    text: "Linked List-те Head дегеніміз не?",
    options: [
      {
        id: "algo-t07-b01-op1",
        text: "Ортаңғы түйін"
      },
      {
        id: "algo-t07-b01-op2",
        text: "Бос түйін"
      },
      {
        id: "algo-t07-b01-op3",
        text: "Соңғы түйін"
      },
      {
        id: "algo-t07-b01-op4",
        text: "Бірінші түйін"
      }
    ],
    correctOptionIds: [
      "algo-t07-b01-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b02",
    subjectId: SubjectId.ALGO,
    text: "LIFO дегеніміз не?",
    options: [
      {
        id: "algo-t07-b02-op1",
        text: "Сызықтық іздеу"
      },
      {
        id: "algo-t07-b02-op2",
        text: "Бірінші кірген бірінші шығады"
      },
      {
        id: "algo-t07-b02-op3",
        text: "Соңғы кірген бірінші шығады"
      },
      {
        id: "algo-t07-b02-op4",
        text: "Кездейсоқ қатынас"
      }
    ],
    correctOptionIds: [
      "algo-t07-b02-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b03",
    subjectId: SubjectId.ALGO,
    text: "Linked List-те Tail дегеніміз не?",
    options: [
      {
        id: "algo-t07-b03-op1",
        text: "Head пен бірдей"
      },
      {
        id: "algo-t07-b03-op2",
        text: "Бірінші түйін"
      },
      {
        id: "algo-t07-b03-op3",
        text: "Соңғы түйін"
      },
      {
        id: "algo-t07-b03-op4",
        text: "Ортаңғы түйін"
      }
    ],
    correctOptionIds: [
      "algo-t07-b03-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b04",
    subjectId: SubjectId.ALGO,
    text: "Pre-order traversal қандай ретпен жүреді?",
    options: [
      {
        id: "algo-t07-b04-op1",
        text: "Сол -> Оң -> Түбір"
      },
      {
        id: "algo-t07-b04-op2",
        text: "Оң -> Сол -> Түбір"
      },
      {
        id: "algo-t07-b04-op3",
        text: "Сол -> Түбір -> Оң"
      },
      {
        id: "algo-t07-b04-op4",
        text: "Түбір -> Сол -> Оң"
      }
    ],
    correctOptionIds: [
      "algo-t07-b04-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b05",
    subjectId: SubjectId.ALGO,
    text: "Stack қай жағдайда қолданылады?",
    options: [
      {
        id: "algo-t07-b05-op1",
        text: "Функция шақыруларын бақылау (call stack)"
      },
      {
        id: "algo-t07-b05-op2",
        text: "Деректер базасы"
      },
      {
        id: "algo-t07-b05-op3",
        text: "Файлдарды сақтау"
      },
      {
        id: "algo-t07-b05-op4",
        text: "Графиктер"
      }
    ],
    correctOptionIds: [
      "algo-t07-b05-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b06",
    subjectId: SubjectId.ALGO,
    text: "Post-order traversal қандай ретпен жүреді?",
    options: [
      {
        id: "algo-t07-b06-op1",
        text: "Сол -> Оң -> Түбір"
      },
      {
        id: "algo-t07-b06-op2",
        text: "Оң -> Түбір -> Сол"
      },
      {
        id: "algo-t07-b06-op3",
        text: "Сол -> Түбір -> Оң"
      },
      {
        id: "algo-t07-b06-op4",
        text: "Түбір -> Сол -> Оң"
      }
    ],
    correctOptionIds: [
      "algo-t07-b06-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b07",
    subjectId: SubjectId.ALGO,
    text: "Queue (кезек) деректер құрылымы қандай принциппен жұмыс істейді?",
    options: [
      {
        id: "algo-t07-b07-op1",
        text: "FIFO"
      },
      {
        id: "algo-t07-b07-op2",
        text: "LIFO"
      },
      {
        id: "algo-t07-b07-op3",
        text: "Binary"
      },
      {
        id: "algo-t07-b07-op4",
        text: "Random Access"
      }
    ],
    correctOptionIds: [
      "algo-t07-b07-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b08",
    subjectId: SubjectId.ALGO,
    text: "Deque дегеніміз не?",
    options: [
      {
        id: "algo-t07-b08-op1",
        text: "Екі жақтан қолдану мүмкін кезек"
      },
      {
        id: "algo-t07-b08-op2",
        text: "Стек түрі"
      },
      {
        id: "algo-t07-b08-op3",
        text: "Бір жақты кезек"
      },
      {
        id: "algo-t07-b08-op4",
        text: "Ағаш түрі"
      }
    ],
    correctOptionIds: [
      "algo-t07-b08-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b09",
    subjectId: SubjectId.ALGO,
    text: "Linked List-тің кемшілігі не?",
    options: [
      {
        id: "algo-t07-b09-op1",
        text: "Жою оңай"
      },
      {
        id: "algo-t07-b09-op2",
        text: "Динамикалық өлшем"
      },
      {
        id: "algo-t07-b09-op3",
        text: "Индекс арқылы жылдам қатынас жоқ"
      },
      {
        id: "algo-t07-b09-op4",
        text: "Қосу оңай"
      }
    ],
    correctOptionIds: [
      "algo-t07-b09-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b10",
    subjectId: SubjectId.ALGO,
    text: "Doubly Linked List-те траверс қалай жүзеге асады?",
    options: [
      {
        id: "algo-t07-b10-op1",
        text: "Тек алға"
      },
      {
        id: "algo-t07-b10-op2",
        text: "Кездейсоқ"
      },
      {
        id: "algo-t07-b10-op3",
        text: "Тек артқа"
      },
      {
        id: "algo-t07-b10-op4",
        text: "Алға және артқа"
      }
    ],
    correctOptionIds: [
      "algo-t07-b10-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b11",
    subjectId: SubjectId.ALGO,
    text: "Queue қай жағдайда қолданылады?",
    options: [
      {
        id: "algo-t07-b11-op1",
        text: "Кезекте тұру (принтер тапсырмалары, т.б.)"
      },
      {
        id: "algo-t07-b11-op2",
        text: "Рекурсия"
      },
      {
        id: "algo-t07-b11-op3",
        text: "Функция шақырулары"
      },
      {
        id: "algo-t07-b11-op4",
        text: "Бинарлық іздеу"
      }
    ],
    correctOptionIds: [
      "algo-t07-b11-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b12",
    subjectId: SubjectId.ALGO,
    text: "Circular Linked List дегеніміз не?",
    options: [
      {
        id: "algo-t07-b12-op1",
        text: "Бос тізім"
      },
      {
        id: "algo-t07-b12-op2",
        text: "Соңғы түйін NULL-ға сілтейді"
      },
      {
        id: "algo-t07-b12-op3",
        text: "Соңғы түйін бірінші түйінге сілтейді"
      },
      {
        id: "algo-t07-b12-op4",
        text: "Екі бағытты тізім"
      }
    ],
    correctOptionIds: [
      "algo-t07-b12-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b13",
    subjectId: SubjectId.ALGO,
    text: "Stack бос болса (underflow) ne болады?",
    options: [
      {
        id: "algo-t07-b13-op1",
        text: "Элемент шығады"
      },
      {
        id: "algo-t07-b13-op2",
        text: "Stack өседі"
      },
      {
        id: "algo-t07-b13-op3",
        text: "Жаңа элемент қосылады"
      },
      {
        id: "algo-t07-b13-op4",
        text: "Қате шығады"
      }
    ],
    correctOptionIds: [
      "algo-t07-b13-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b14",
    subjectId: SubjectId.ALGO,
    text: "Екібағытты тізімде (Doubly Linked List) әр түйін нені ұстайды?",
    options: [
      {
        id: "algo-t07-b14-op1",
        text: "Тек индекс"
      },
      {
        id: "algo-t07-b14-op2",
        text: "Мәлімет пен келесі түйінге сілтеме"
      },
      {
        id: "algo-t07-b14-op3",
        text: "Мәлімет + алдыңғы және келесі түйіндерге сілтемелер"
      },
      {
        id: "algo-t07-b14-op4",
        text: "Тек мәліметті"
      }
    ],
    correctOptionIds: [
      "algo-t07-b14-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b15",
    subjectId: SubjectId.ALGO,
    text: "Stack толық болса (overflow) не болады?",
    options: [
      {
        id: "algo-t07-b15-op1",
        text: "Ештеңе болмайды"
      },
      {
        id: "algo-t07-b15-op2",
        text: "Жаңа элемент қосылады"
      },
      {
        id: "algo-t07-b15-op3",
        text: "Ескі элемент жойылады"
      },
      {
        id: "algo-t07-b15-op4",
        text: "Қате шығады"
      }
    ],
    correctOptionIds: [
      "algo-t07-b15-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b16",
    subjectId: SubjectId.ALGO,
    text: "Queue-ден элемент алу операциясы қалай аталады?",
    options: [
      {
        id: "algo-t07-b16-op1",
        text: "Dequeue"
      },
      {
        id: "algo-t07-b16-op2",
        text: "Pop"
      },
      {
        id: "algo-t07-b16-op3",
        text: "Push"
      },
      {
        id: "algo-t07-b16-op4",
        text: "Enqueue"
      }
    ],
    correctOptionIds: [
      "algo-t07-b16-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b17",
    subjectId: SubjectId.ALGO,
    text: "Linked List-тің басына элемент қосу күрделілігі қандай?",
    options: [
      {
        id: "algo-t07-b17-op1",
        text: "O(n²)"
      },
      {
        id: "algo-t07-b17-op2",
        text: "O(1)"
      },
      {
        id: "algo-t07-b17-op3",
        text: "O(n)"
      },
      {
        id: "algo-t07-b17-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t07-b17-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b18",
    subjectId: SubjectId.ALGO,
    text: "Stack-ке элемент қосу операциясы қалай аталады?",
    options: [
      {
        id: "algo-t07-b18-op1",
        text: "Push"
      },
      {
        id: "algo-t07-b18-op2",
        text: "Add"
      },
      {
        id: "algo-t07-b18-op3",
        text: "Insert"
      },
      {
        id: "algo-t07-b18-op4",
        text: "Enqueue"
      }
    ],
    correctOptionIds: [
      "algo-t07-b18-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b19",
    subjectId: SubjectId.ALGO,
    text: "Linked List-тің массивтен артықшылығы не?",
    options: [
      {
        id: "algo-t07-b19-op1",
        text: "Динамикалық өлшем және тиімді қосу/жою"
      },
      {
        id: "algo-t07-b19-op2",
        text: "Сұрыптау қажет емес"
      },
      {
        id: "algo-t07-b19-op3",
        text: "Жылдам қатынас"
      },
      {
        id: "algo-t07-b19-op4",
        text: "Аз жады қолдану"
      }
    ],
    correctOptionIds: [
      "algo-t07-b19-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b20",
    subjectId: SubjectId.ALGO,
    text: "Linked List-тің ортасынан элемент іздеу күрделілігі қандай?",
    options: [
      {
        id: "algo-t07-b20-op1",
        text: "O(1)"
      },
      {
        id: "algo-t07-b20-op2",
        text: "O(n²)"
      },
      {
        id: "algo-t07-b20-op3",
        text: "O(log n)"
      },
      {
        id: "algo-t07-b20-op4",
        text: "O(n)"
      }
    ],
    correctOptionIds: [
      "algo-t07-b20-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b21",
    subjectId: SubjectId.ALGO,
    text: "Stack-тен элемент алу операциясы қалай аталады?",
    options: [
      {
        id: "algo-t07-b21-op1",
        text: "Dequeue"
      },
      {
        id: "algo-t07-b21-op2",
        text: "Pop"
      },
      {
        id: "algo-t07-b21-op3",
        text: "Remove"
      },
      {
        id: "algo-t07-b21-op4",
        text: "Delete"
      }
    ],
    correctOptionIds: [
      "algo-t07-b21-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b22",
    subjectId: SubjectId.ALGO,
    text: "Linked List vs Array: қайсысында индекс арқылы қатынас жылдамырақ?",
    options: [
      {
        id: "algo-t07-b22-op1",
        text: "Бірдей"
      },
      {
        id: "algo-t07-b22-op2",
        text: "Салыстыруға болмайды"
      },
      {
        id: "algo-t07-b22-op3",
        text: "Linked List"
      },
      {
        id: "algo-t07-b22-op4",
        text: "Array"
      }
    ],
    correctOptionIds: [
      "algo-t07-b22-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b23",
    subjectId: SubjectId.ALGO,
    text: "Linked List-те NULL не білдіреді?",
    options: [
      {
        id: "algo-t07-b23-op1",
        text: "Қате"
      },
      {
        id: "algo-t07-b23-op2",
        text: "Бос мән"
      },
      {
        id: "algo-t07-b23-op3",
        text: "Тізімнің соңы"
      },
      {
        id: "algo-t07-b23-op4",
        text: "Келесі элемент бар"
      }
    ],
    correctOptionIds: [
      "algo-t07-b23-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b24",
    subjectId: SubjectId.ALGO,
    text: "Queue-ге элемент қосу операциясы қалай аталады?",
    options: [
      {
        id: "algo-t07-b24-op1",
        text: "Pop"
      },
      {
        id: "algo-t07-b24-op2",
        text: "Dequeue"
      },
      {
        id: "algo-t07-b24-op3",
        text: "Enqueue"
      },
      {
        id: "algo-t07-b24-op4",
        text: "Push"
      }
    ],
    correctOptionIds: [
      "algo-t07-b24-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b25",
    subjectId: SubjectId.ALGO,
    text: "Stack және Queue-дің ортақ қасиеті не?",
    options: [
      {
        id: "algo-t07-b25-op1",
        text: "Екеуі де ағаш"
      },
      {
        id: "algo-t07-b25-op2",
        text: "Екеуі де граф"
      },
      {
        id: "algo-t07-b25-op3",
        text: "Екеуі де LIFO"
      },
      {
        id: "algo-t07-b25-op4",
        text: "Екеуі де сызықтық құрылым"
      }
    ],
    correctOptionIds: [
      "algo-t07-b25-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b26",
    subjectId: SubjectId.ALGO,
    text: "Circular Queue дегеніміз не?",
    options: [
      {
        id: "algo-t07-b26-op1",
        text: "Сызықтық кезек"
      },
      {
        id: "algo-t07-b26-op2",
        text: "Стек"
      },
      {
        id: "algo-t07-b26-op3",
        text: "Ағаш"
      },
      {
        id: "algo-t07-b26-op4",
        text: "Соңы мен басы байланысқан циклдық кезек"
      }
    ],
    correctOptionIds: [
      "algo-t07-b26-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b27",
    subjectId: SubjectId.ALGO,
    text: "Priority Queue дегеніміз не?",
    options: [
      {
        id: "algo-t07-b27-op1",
        text: "Массив"
      },
      {
        id: "algo-t07-b27-op2",
        text: "Stack түрі"
      },
      {
        id: "algo-t07-b27-op3",
        text: "Қарапайым кезек"
      },
      {
        id: "algo-t07-b27-op4",
        text: "Приоритеті бойынша сұрыпталған кезек"
      }
    ],
    correctOptionIds: [
      "algo-t07-b27-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b28",
    subjectId: SubjectId.ALGO,
    text: "Stack деректер құрылымы қандай принциппен жұмыс істейді?",
    options: [
      {
        id: "algo-t07-b28-op1",
        text: "FIFO"
      },
      {
        id: "algo-t07-b28-op2",
        text: "LIFO"
      },
      {
        id: "algo-t07-b28-op3",
        text: "Random Access"
      },
      {
        id: "algo-t07-b28-op4",
        text: "Sequential"
      }
    ],
    correctOptionIds: [
      "algo-t07-b28-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b29",
    subjectId: SubjectId.ALGO,
    text: "FIFO дегеніміз не?",
    options: [
      {
        id: "algo-t07-b29-op1",
        text: "Бірінші кірген бірінші шығады"
      },
      {
        id: "algo-t07-b29-op2",
        text: "Кездейсоқ қатынас"
      },
      {
        id: "algo-t07-b29-op3",
        text: "Соңғы кірген бірінші шығады"
      },
      {
        id: "algo-t07-b29-op4",
        text: "Сызықтық іздеу"
      }
    ],
    correctOptionIds: [
      "algo-t07-b29-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b30",
    subjectId: SubjectId.ALGO,
    text: "Бірбағытты тізімде (Singly Linked List) әр түйін нені ұстайды?",
    options: [
      {
        id: "algo-t07-b30-op1",
        text: "Тек сілтемелер"
      },
      {
        id: "algo-t07-b30-op2",
        text: "Мәлімет пен алдыңғы түйінге сілтеме"
      },
      {
        id: "algo-t07-b30-op3",
        text: "Мәлімет пен келесі түйінге сілтеме"
      },
      {
        id: "algo-t07-b30-op4",
        text: "Тек мәліметті"
      }
    ],
    correctOptionIds: [
      "algo-t07-b30-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "42617286-77e1-4130-9606-9f942942aa3c",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімде (Singly Linked List) басындағы элементті өшірудің (delete head) уақыт күрделілігі қандай?",
    options: [
      {
        id: "8fdd6ab7-55bb-4a31-9c02-ef5294620293",
        text: "O(1)"
      },
      {
        id: "1d87b2b7-601e-4f6e-88bd-f78e35e39525",
        text: "O(n)"
      },
      {
        id: "e2f13814-cb80-4004-8458-467e561b3b6c",
        text: "O(log n)"
      },
      {
        id: "4cb7cad4-688c-4aaa-8084-67773401f9a0",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "8fdd6ab7-55bb-4a31-9c02-ef5294620293"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b160c1af-1929-44a8-bd40-2bb825387ab1",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімнің ең соңындағы элементті өшірудің (delete tail) уақыт күрделілігі неліктен O(n) болады?",
    options: [
      {
        id: "8be59006-b532-429e-ab98-9a57ddedf4f2",
        text: "Өйткені соңғының алдындағы түйінге (second-to-last node) жету үшін тізімді басынан бастап толық аралап шығу керек"
      },
      {
        id: "3c6d9614-f185-4dc1-a645-7ab68b5cdc9c",
        text: "Себебі жадты босату өте көп уақыт алады"
      },
      {
        id: "16812154-8705-4540-bfc3-2337b0b57d7b",
        text: "Ол үшін екі рет рекурсия шақыру қажет"
      },
      {
        id: "c3298e6d-1599-4af6-a3bc-75a8314cbb25",
        text: "Тізімнің өлшемі автоматты түрде өзгеретіндіктен"
      }
    ],
    correctOptionIds: [
      "8be59006-b532-429e-ab98-9a57ddedf4f2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f48faf44-61bc-4e8b-a2e7-96c4924e453e",
    subjectId: SubjectId.ALGO,
    text: "Екі бағытты байланысқан тізімде (Doubly Linked List) соңғы түйінге сілтеме (tail pointer) бар болғанда, соңғы элементті өшіру күрделілігі қандай?",
    options: [
      {
        id: "9786b044-2896-4790-9c93-ef4f7a1b4666",
        text: "O(1) (алдыңғы түйінге `prev` арқылы тікелей өте аламыз)"
      },
      {
        id: "7daf0d86-06d4-4342-9c3b-623fa5a224c1",
        text: "O(n)"
      },
      {
        id: "688f8127-c793-46a5-aedb-f33b0df0eb39",
        text: "O(log n)"
      },
      {
        id: "4ab6e14f-079a-47a2-a491-1aeada8d65a1",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "9786b044-2896-4790-9c93-ef4f7a1b4666"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b31",
    subjectId: SubjectId.ALGO,
    text: "Байланысқан тізімдердегі Сенсинель (Sentinel / Dummy Node) түйіні не үшін қолданылады?",
    options: [
      {
        id: "algo-t07-b31-op1",
        text: "Тізімнің басы мен соңындағы қосу/жою операцияларындағы шекаралық жағдайларды (edge cases) жеңілдету үшін қолданылатын бос (dummy) түйін"
      },
      {
        id: "algo-t07-b31-op2",
        text: "Элементтерді автоматты түрде сұрыптау үшін"
      },
      {
        id: "algo-t07-b31-op3",
        text: "Тізімді хэштеу мақсатында"
      },
      {
        id: "algo-t07-b31-op4",
        text: "Тізімді жадтан бірден өшіру үшін"
      }
    ],
    correctOptionIds: [
      "algo-t07-b31-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b32",
    subjectId: SubjectId.ALGO,
    text: "N түйіннен тұратын байланысқан тізімнің кеңістік күрделілігі (Space Complexity) қандай?",
    options: [
      {
        id: "algo-t07-b32-op1",
        text: "O(n) (әрбір элемент үшін жадтан орын бөлінеді)"
      },
      {
        id: "algo-t07-b32-op2",
        text: "O(1)"
      },
      {
        id: "algo-t07-b32-op3",
        text: "O(log n)"
      },
      {
        id: "algo-t07-b32-op4",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "algo-t07-b32-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c26a79a7-8340-4713-aca2-0fe9db548620",
    subjectId: SubjectId.ALGO,
    text: "Браузердегі \"Артқа\" (Back) және \"Алға\" (Forward) батырмаларының жұмысын модельдеу үшін қандай деректер құрылымы өте қолайлы?",
    options: [
      {
        id: "dfc58648-2331-415f-b792-d37a454c1391",
        text: "Екі стек (Two Stacks)"
      },
      {
        id: "4c3b9979-6c66-42e6-996f-ed7291698960",
        text: "Бір кезек"
      },
      {
        id: "825a9fe7-fad6-42bc-8853-8b805c9ce675",
        text: "Екіөлшемді массив"
      },
      {
        id: "08cffc9c-63f9-47d3-9ca3-9a7900920598",
        text: "Ассоциативті хэш-кесте"
      }
    ],
    correctOptionIds: [
      "dfc58648-2331-415f-b792-d37a454c1391"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "714dce8c-7d70-4c14-bdc5-d9cdb68160a0",
    subjectId: SubjectId.ALGO,
    text: "Арифметикалық постфикстік (Postfix / Reverse Polish Notation) өрнектерді есептеу үшін қай деректер құрылымы қолданылады?",
    options: [
      {
        id: "fc4feff1-d8e7-4e2d-afba-f27d045f8ea8",
        text: "Стек (Stack)"
      },
      {
        id: "aaa991c0-08a6-4a82-aa07-138b1dc0dba5",
        text: "Кезек (Queue)"
      },
      {
        id: "ab517464-6ed7-4a6f-a6ae-94d057ae8775",
        text: "Екілік іздеу ағашы"
      },
      {
        id: "034c56e8-341c-4902-8418-ecd7def636b3",
        text: "Граф"
      }
    ],
    correctOptionIds: [
      "fc4feff1-d8e7-4e2d-afba-f27d045f8ea8"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "40959b1c-ec30-4f5d-a7fe-b7e7ddcb054b",
    subjectId: SubjectId.ALGO,
    text: "Математикалық өрнектерді инфикстік түрден постфикстік түрге көшіру (Infix to Postfix conversion) үшін қай құрылым қолданылады?",
    options: [
      {
        id: "ba408267-2ef7-4499-b3a0-ef4358676859",
        text: "Стек (Stack)"
      },
      {
        id: "a2b52737-4b7c-4257-bc80-4b2d83e265e9",
        text: "Кезек (Queue)"
      },
      {
        id: "dd0a1abe-ca5f-47e8-84e6-ce45ee470730",
        text: "Сілтемелі ағаш"
      },
      {
        id: "4a8dc261-0d0e-4a34-bceb-8b073955ac2d",
        text: "Декарттық координаттар жүйесі"
      }
    ],
    correctOptionIds: [
      "ba408267-2ef7-4499-b3a0-ef4358676859"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "31c4992a-0b77-4964-bb76-c190147adf1f",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасындағы `std::vector` жиымының басына жаңа элемент қосудың (`insert`) уақыт күрделілігі қандай?",
    options: [
      {
        id: "86c250ff-22b5-4473-8e72-296f9a1a7dfb",
        text: "O(n) (қалған барлық элементтерді оңға бір орынға жылжыту қажет)"
      },
      {
        id: "9075cbe5-a4c2-4775-811e-d75c238e9efd",
        text: "O(1)"
      },
      {
        id: "18f47947-7c89-4dea-8186-fb975e25b6d5",
        text: "O(log n)"
      },
      {
        id: "008e2818-23e4-47f4-a01b-9ca6969292e2",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "86c250ff-22b5-4473-8e72-296f9a1a7dfb"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "61536390-bac6-4f89-b0e6-9af8bf13061a",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасындағы `std::list` (екі бағытты тізім) басына элемент қосудың уақыт күрделілігі қандай?",
    options: [
      {
        id: "f1ec98be-6f1e-4c8b-8037-2de7130f5116",
        text: "O(1) (элементтерді жылжытудың қажеті жоқ, тек сілтемелер өзгереді)"
      },
      {
        id: "3ba00585-a7f9-4da0-bed5-bf7bb8f9e344",
        text: "O(n)"
      },
      {
        id: "e86b433a-5dd6-4e2b-bac4-700429f5dfcd",
        text: "O(log n)"
      },
      {
        id: "6fdeca17-508c-48e7-9c73-0ec2a71b26af",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "f1ec98be-6f1e-4c8b-8037-2de7130f5116"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "073fbba5-74ea-4f1b-9d56-06d1f408376d",
    subjectId: SubjectId.ALGO,
    text: "Байланысқан тізімде (`std::list`) белгілі бір индекс бойынша элементке қол жеткізудің (access) уақыт күрделілігі қандай?",
    options: [
      {
        id: "1ab46367-0d1f-4f8b-8047-e61ecaf1a95e",
        text: "O(n) (тізім бойымен басынан бастап іздеп бару қажет)"
      },
      {
        id: "013cde62-64f3-41ea-ab23-75edbb005809",
        text: "O(1)"
      },
      {
        id: "61598705-b071-48fd-b0f4-2e5669e0ab19",
        text: "O(log n)"
      },
      {
        id: "57cd0f3b-c598-46b8-b248-1603334cf890",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "1ab46367-0d1f-4f8b-8047-e61ecaf1a95e"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c2cfc731-3b91-4ac3-baff-679176dd60ef",
    subjectId: SubjectId.ALGO,
    text: "Массив негізіндегі кезекте (Array-based Queue) орын босағанда жадтың босқа шығындалуын болдырмау үшін қандай кезек түрі қолданылады?",
    options: [
      {
        id: "c806485f-415d-49ba-b3c6-d5ee3ed3ab9f",
        text: "Циклдік кезек (Circular Queue)"
      },
      {
        id: "f3c2a514-4a05-41ae-b96d-b9aedca39695",
        text: "Приоритетті кезек"
      },
      {
        id: "4e6459e0-3c9d-49b9-8185-1e2e3cf4c320",
        text: "Қос бағытты стек"
      },
      {
        id: "47266f65-439a-464d-bbf4-74ff652333c2",
        text: "Сызықтық тізім"
      }
    ],
    correctOptionIds: [
      "c806485f-415d-49ba-b3c6-d5ee3ed3ab9f"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7c01de49-4245-4719-8d25-2c03f6f61e3a",
    subjectId: SubjectId.ALGO,
    text: "Өлшемі N-ге тең циклдік кезекте (Circular Queue) кезектің толып қалғанын (queue is full) front және rear индекстері арқылы қалай тексереді?",
    options: [
      {
        id: "28121ed3-f443-4e69-9bb4-48e6b2296089",
        text: "(rear + 1) % N == front"
      },
      {
        id: "51dec722-3787-4707-821d-3d4c651ac720",
        text: "rear == front"
      },
      {
        id: "d8db8238-986a-4aab-b3c0-60bd602ca1aa",
        text: "rear + 1 == N"
      },
      {
        id: "bb0ff527-d8fc-415a-acbf-b0b25a6484bd",
        text: "front == 0"
      }
    ],
    correctOptionIds: [
      "28121ed3-f443-4e69-9bb4-48e6b2296089"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b33",
    subjectId: SubjectId.ALGO,
    text: "Циклдік кезекте кезектің бос екенін (queue is empty) қалай анықтайды?",
    options: [
      {
        id: "algo-t07-b33-op1",
        text: "front == -1 (немесе арнайы жалауша арқылы)"
      },
      {
        id: "algo-t07-b33-op2",
        text: "front == rear + 1"
      },
      {
        id: "algo-t07-b33-op3",
        text: "rear == N"
      },
      {
        id: "algo-t07-b33-op4",
        text: "front > 0"
      }
    ],
    correctOptionIds: [
      "algo-t07-b33-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b34",
    subjectId: SubjectId.ALGO,
    text: "Приоритетті кезек (Priority Queue) дегеніміз не?",
    options: [
      {
        id: "algo-t07-b34-op1",
        text: "Әрбір элементтің басымдылығы (приоритеті) болатын және ең жоғары басымдылыққа ие элемент бірінші шығатын кезек"
      },
      {
        id: "algo-t07-b34-op2",
        text: "Тек оң сандарды ғана сақтайтын кезек"
      },
      {
        id: "algo-t07-b34-op3",
        text: "Элементтері тек стек арқылы жойылатын кезек"
      },
      {
        id: "algo-t07-b34-op4",
        text: "Динамикалық массивтің ескі атауы"
      }
    ],
    correctOptionIds: [
      "algo-t07-b34-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a546f9af-a859-4cfa-9e03-e65a46d3abad",
    subjectId: SubjectId.ALGO,
    text: "Жылдамдық тұрғысынан ең оңтайлы Приоритетті кезек көбінесе қандай деректер құрылымы арқылы жүзеге асырылады?",
    options: [
      {
        id: "3592ebd6-e788-404b-827d-b96febd4a8ac",
        text: "Екілік үйінді (Binary Heap)"
      },
      {
        id: "daec0eed-8271-473c-bd37-b66967fb82ec",
        text: "Байланысқан тізім (Linked List)"
      },
      {
        id: "2c4092cb-7666-4b8f-8a8b-4b62f54c1305",
        text: "Сызықтық массив (Array)"
      },
      {
        id: "8bc50ab7-53c1-4e70-92e6-a93f76355ab6",
        text: "Хэш-кесте (Hash Table)"
      }
    ],
    correctOptionIds: [
      "3592ebd6-e788-404b-827d-b96febd4a8ac"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db6105ae-541c-4ea2-9f74-cd22802ef72d",
    subjectId: SubjectId.ALGO,
    text: "Үйінді негізіндегі приоритетті кезекте элемент қосу (push) және алу (pop) операцияларының уақыт күрделілігі қандай?",
    options: [
      {
        id: "060da56e-ef5f-4c6e-96f4-0d77bf3a912e",
        text: "O(log n)"
      },
      {
        id: "7dfba119-cfe2-4048-aa7a-64ceb1b4a0aa",
        text: "O(1)"
      },
      {
        id: "b70db420-b35d-49d5-a2ea-8a72b401dc64",
        text: "O(n)"
      },
      {
        id: "098e8949-4cf9-47fa-b01a-cdba7a7bedd8",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "060da56e-ef5f-4c6e-96f4-0d77bf3a912e"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "4947e4b3-07fd-466b-8307-f0da57a62d79",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасында `std::stack` құрылымы үшін әдепкі бойынша (default) негіз ретінде қай контейнер қолданылады?",
    options: [
      {
        id: "9843d4f0-7583-43c8-9123-1a57810585e4",
        text: "std::deque"
      },
      {
        id: "0121fc9f-7a23-4c3f-b02d-b31b11598c13",
        text: "std::vector"
      },
      {
        id: "8ec3785e-3497-40ae-a8af-1ce7fa7716a1",
        text: "std::list"
      },
      {
        id: "bae67a70-df07-4679-bffb-e4ae84df519c",
        text: "std::array"
      }
    ],
    correctOptionIds: [
      "9843d4f0-7583-43c8-9123-1a57810585e4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b35",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасында `std::queue` құрылымы үшін әдепкі бойынша қай контейнер қолданылады?",
    options: [
      {
        id: "algo-t07-b35-op1",
        text: "std::deque"
      },
      {
        id: "algo-t07-b35-op2",
        text: "std::vector"
      },
      {
        id: "algo-t07-b35-op3",
        text: "std::list"
      },
      {
        id: "algo-t07-b35-op4",
        text: "std::array"
      }
    ],
    correctOptionIds: [
      "algo-t07-b35-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a37de3c2-f7a3-4151-acff-65678aa5845f",
    subjectId: SubjectId.ALGO,
    text: "Іздеу, кірістіру және өшіру операцияларын орташа O(log n) уақытында орындайтын, кездейсоқ көпдеңгейлі байланысқан тізім қалай аталады?",
    options: [
      {
        id: "fa996aac-bb94-48a0-a25b-bb0023c2bd6d",
        text: "Өтпелі тізім (Skip List)"
      },
      {
        id: "0cb36685-a025-47e3-a43e-95464079239a",
        text: "Екі бағытты тізім"
      },
      {
        id: "514d8dc0-b278-42d9-b646-7d91e6d98931",
        text: "Циклдік тізім"
      },
      {
        id: "9fc0af55-c60c-43b6-a37b-791d57a4a5b6",
        text: "Хэш-тізім"
      }
    ],
    correctOptionIds: [
      "fa996aac-bb94-48a0-a25b-bb0023c2bd6d"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "763715ef-bb9f-4916-b5bf-dd81000ff6ba",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімді кері бұру (reverse linked list) алгоритмінің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "7a932aef-f1de-40e9-b44f-e6566a61a4ca",
        text: "O(n)"
      },
      {
        id: "6607c042-dd6e-46a4-98b2-d4c58b59e682",
        text: "O(1)"
      },
      {
        id: "a86d00fd-eece-4c66-a6ef-6c7f3e355a41",
        text: "O(log n)"
      },
      {
        id: "52402d04-5acd-4fc1-aa77-6c3660cccf74",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "7a932aef-f1de-40e9-b44f-e6566a61a4ca"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "66674ffc-1a96-4dac-bbdb-2b11d59ee7d5",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімді орнында (in-place) кері бұрудың қосымша жад (space) күрделілігі қандай?",
    options: [
      {
        id: "fd171eaf-6b12-4b33-ab9f-bf13ceef216a",
        text: "O(1) (тек үш нұсқауышты өзгерту арқылы)"
      },
      {
        id: "33045475-4af3-4436-acd4-a933e9662b14",
        text: "O(n)"
      },
      {
        id: "6ae23453-ae11-4b54-a5a3-988024c8b8a2",
        text: "O(log n)"
      },
      {
        id: "6b36d161-da7e-4263-81f7-e16fd652656e",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "fd171eaf-6b12-4b33-ab9f-bf13ceef216a"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "15295333-2a27-4fb2-84c8-770767bc5680",
    subjectId: SubjectId.ALGO,
    text: "Байланысқан тізімде тұйықталудың (циклдің) бар-жоғын анықтауға арналған Флойдтың цикл табу алгоритмі (Floyd's Cycle-Finding / Tortoise and Hare) қалай жұмыс істейді?",
    options: [
      {
        id: "b607427d-2392-43cc-8217-99ef65cf26ed",
        text: "Тізім бойынша бірі баяу (1 қадам), екіншісі жылдам (2 қадам) қозғалатын екі нұсқауыш қолданылады"
      },
      {
        id: "31ece1d5-0401-42cc-96a2-d8e08d267379",
        text: "Барлық элементтерді хэш-кестеге сақтап тексереді"
      },
      {
        id: "1a1edc40-9c04-4ce2-bce5-0daba0ec689e",
        text: "Тізім элементтерін сұрыптайды"
      },
      {
        id: "446d8564-ca06-4250-b460-4293496c2980",
        text: "Тізімнің басы мен соңын салыстырады"
      }
    ],
    correctOptionIds: [
      "b607427d-2392-43cc-8217-99ef65cf26ed"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b36",
    subjectId: SubjectId.ALGO,
    text: "Флойдтың цикл табу алгоритмінде тізімде цикл (loop) бар болса не орын алады?",
    options: [
      {
        id: "algo-t07-b36-op1",
        text: "Жылдам нұсқауыш (hare) пен баяу нұсқауыш (tortoise) тізім ішінде бір түйінде міндетті түрде кездеседі"
      },
      {
        id: "algo-t07-b36-op2",
        text: "Жылдам нұсқауыш NULL-ге бірінші жетеді"
      },
      {
        id: "algo-t07-b36-op3",
        text: "Бағдарлама қате шығарып бірден тоқтайды"
      },
      {
        id: "algo-t07-b36-op4",
        text: "Тізім автоматты түрде екіге бөлінеді"
      }
    ],
    correctOptionIds: [
      "algo-t07-b36-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b37",
    subjectId: SubjectId.ALGO,
    text: "Флойдтың цикл табу алгоритмінің уақыттық және кеңістіктік күрделілігі қандай?",
    options: [
      {
        id: "algo-t07-b37-op1",
        text: "Уақыты - O(n), жады - O(1)"
      },
      {
        id: "algo-t07-b37-op2",
        text: "Уақыты - O(n^2), жады - O(n)"
      },
      {
        id: "algo-t07-b37-op3",
        text: "Уақыты - O(log n), жады - O(1)"
      },
      {
        id: "algo-t07-b37-op4",
        text: "Уақыты - O(n), жады - O(n)"
      }
    ],
    correctOptionIds: [
      "algo-t07-b37-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "dbe52d22-996a-4afd-a87f-2bebc74927d1",
    subjectId: SubjectId.ALGO,
    text: "Тізімнің ең басында арнайы ақпараттық немесе қызметтік деректер сақтайтын түйіні бар байланысқан тізім қалай аталады?",
    options: [
      {
        id: "1d1dc6a3-9bdb-40b3-96b0-47b94ecc820f",
        text: "Тақырыптық байланысқан тізім (Header Linked List)"
      },
      {
        id: "6f39ac08-e8f1-4f23-940f-e0ac704dd470",
        text: "Қарапайым тізім"
      },
      {
        id: "97532386-ef35-4e3e-a5e1-6565b029c126",
        text: "Циклдік тізім"
      },
      {
        id: "9389e7ec-bff1-4d2a-876f-3fb20408c23b",
        text: "Стек тізімі"
      }
    ],
    correctOptionIds: [
      "1d1dc6a3-9bdb-40b3-96b0-47b94ecc820f"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b38",
    subjectId: SubjectId.ALGO,
    text: "Екі стек (Stack) арқылы кезекті (Queue) қалай жүзеге асыруға болады?",
    options: [
      {
        id: "algo-t07-b38-op1",
        text: "Элементтерді бірінші стекке қосып, оқу кезінде оларды екінші стекке аударып, ретін төңкеру арқылы"
      },
      {
        id: "algo-t07-b38-op2",
        text: "Екі стектің де көрсеткіштерін өзара қосу арқылы"
      },
      {
        id: "algo-t07-b38-op3",
        text: "Ол мүмкін емес, стек пен кезек бір-біріне қайшы келеді"
      },
      {
        id: "algo-t07-b38-op4",
        text: "Стектерді кезекпен динамикалық жадта біріктіру арқылы"
      }
    ],
    correctOptionIds: [
      "algo-t07-b38-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e5e0519b-ba92-4da4-af9e-a4401f25e84e",
    subjectId: SubjectId.ALGO,
    text: "Екі стек арқылы жасалған кезектегі қосу (enqueue) және алу (dequeue) операцияларының амортизацияланған уақыт күрделілігі қандай?",
    options: [
      {
        id: "4318be0b-6066-40ca-b97e-056722ddd69c",
        text: "Амортизацияланған O(1)"
      },
      {
        id: "64f7d52c-3515-4b51-b283-7479401501dd",
        text: "O(n)"
      },
      {
        id: "e9fe78ed-997a-4a9e-b931-b6dc66fecf2c",
        text: "O(log n)"
      },
      {
        id: "d968a668-2e76-4e6c-8bbc-eddfb03a8dfe",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "4318be0b-6066-40ca-b97e-056722ddd69c"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b39",
    subjectId: SubjectId.ALGO,
    text: "Екі кезек (Queue) арқылы стекті (Stack) жүзеге асырудың тиімді жолы қандай?",
    options: [
      {
        id: "algo-t07-b39-op1",
        text: "Элемент қосу кезінде оны екінші кезекке салып, бірінші кезектің элементтерін оның соңына аударып, LIFO ретін сақтау"
      },
      {
        id: "algo-t07-b39-op2",
        text: "Кезектерді бір-бірімен көбейту арқылы"
      },
      {
        id: "algo-t07-b39-op3",
        text: "Бұл тек рекурсия арқылы ғана мүмкін"
      },
      {
        id: "algo-t07-b39-op4",
        text: "Кезектердің басын өзара байланыстыру"
      }
    ],
    correctOptionIds: [
      "algo-t07-b39-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b40",
    subjectId: SubjectId.ALGO,
    text: "Байланысқан тізімге қарағанда қарапайым массивтің (Array) ең басты артықшылығы неде?",
    options: [
      {
        id: "algo-t07-b40-op1",
        text: "Ол кез келген элементке индекс арқылы O(1) уақытында тікелей қол жеткізуді (random access) қамтамасыз етеді"
      },
      {
        id: "algo-t07-b40-op2",
        text: "Оның өлшемін орындалу барысында өте оңай өзгертуге болады"
      },
      {
        id: "algo-t07-b40-op3",
        text: "Ол жадты мүлдем алмайды"
      },
      {
        id: "algo-t07-b40-op4",
        text: "Оған элементті қосу әрқашан O(1) болады"
      }
    ],
    correctOptionIds: [
      "algo-t07-b40-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "460e026a-07b0-436a-b95c-39b794d394f2",
    subjectId: SubjectId.ALGO,
    text: "Массивтің элементтері жадта тізбектеле орналасатындықтан, процессор оны оқу кезінде қандай артықшылықты пайдаланады?",
    options: [
      {
        id: "c41e5e34-245a-4e48-82ad-0eb999b55c8b",
        text: "Кэштің локальділігі (Cache Locality) арқасында деректер кэш жадқа тез жүктеледі және оқу өте жылдам болады"
      },
      {
        id: "6ba94b76-d92e-419c-ab13-60f95584d1bf",
        text: "Рекурсивті оңтайландыру жасалады"
      },
      {
        id: "23c27afd-7a15-4118-a885-6811372ab618",
        text: "Биттік деңгейде қорғалады"
      },
      {
        id: "74263d55-46d2-4c2d-82b8-8463a5b66b43",
        text: "Жад сегменті автоматты түрде кішірейеді"
      }
    ],
    correctOptionIds: [
      "c41e5e34-245a-4e48-82ad-0eb999b55c8b"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b11f1ce1-da39-4ae0-b43e-734e1dbd5cc2",
    subjectId: SubjectId.ALGO,
    text: "Өлшемі динамикалық түрде өсетін массивте (мысалы, vector) жад толып қалғанда, оның сыйымдылығы әдетте қалай өседі?",
    options: [
      {
        id: "98f03c84-8d8d-4210-b046-36d5aab179ca",
        text: "Екі есеге артады (Capacity doubling)"
      },
      {
        id: "dc659754-f48f-4ff0-92cf-3aa45678051c",
        text: "Тек 1 элементке ғана артады"
      },
      {
        id: "7b23e246-44c9-47fd-a884-8ec3ca01c1f6",
        text: "Он есеге артады"
      },
      {
        id: "b13adaf1-e38d-4901-a7ed-8b2410f371fb",
        text: "Өлшемі өзгеріссіз қалады, қате шығады"
      }
    ],
    correctOptionIds: [
      "98f03c84-8d8d-4210-b046-36d5aab179ca"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c760506c-f2ba-48ce-b5e5-5724d7770605",
    subjectId: SubjectId.ALGO,
    text: "Сұрыпталған байланысқан тізімнен (Sorted Linked List) элементті Екілік іздеу (Binary Search) арқылы O(log n) уақытында іздеуге бола ма?",
    options: [
      {
        id: "dabe0447-362a-4270-afaf-ee875086ea70",
        text: "Жоқ, байланысқан тізімде кездейсоқ қатынас (random access) жоқ, сондықтан ортаңғы элементке O(1) уақытта бара алмаймыз (күрделілік бәрібір O(n) болады)"
      },
      {
        id: "167477f3-a6bb-48dd-bb6d-04701573663d",
        text: "Иә, кез келген сұрыпталған тізімде binary search толық O(log n) береді"
      },
      {
        id: "d32a7155-b7b1-4bbb-a128-7239b82877a6",
        text: "Иә, тек екі бағытты тізім болса ғана болады"
      },
      {
        id: "a16fd8fc-cff1-4f6b-bdb7-3738ccfd28a5",
        text: "Тек рекурсивті тізімдерде болады"
      }
    ],
    correctOptionIds: [
      "dabe0447-362a-4270-afaf-ee875086ea70"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "34e58188-0dfb-412a-9e88-c88bd0a06a9c",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімде басынан бастап өтпей-ақ, тек берілген түйіннің нұсқауышы арқылы оны O(1) уақытында қалай жоюға болады (егер ол соңғы түйін болмаса)?",
    options: [
      {
        id: "528633ae-ba4a-436a-861b-999048607b13",
        text: "Келесі түйіннің дерегін ағымдағы түйінге көшіріп, келесі түйінді өшіру және сілтемені аттап өту арқылы"
      },
      {
        id: "c2d5fb15-5696-475e-bce6-88c0b0656698",
        text: "Түйінді бірден NULL деп белгілеу арқылы"
      },
      {
        id: "97557d4e-f3c3-4fc5-a709-8ae18ddb1bdb",
        text: "Тізімнің басын өзгерту арқылы"
      },
      {
        id: "c3b0847b-e1dd-4a93-91be-acf86acbee0c",
        text: "Бұл тек рекурсиямен мүмкін"
      }
    ],
    correctOptionIds: [
      "528633ae-ba4a-436a-861b-999048607b13"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "dff2c739-e5a1-42a2-b6f9-1df6dc317a49",
    subjectId: SubjectId.ALGO,
    text: "Сұраныстар жиілігіне қарай өзінің элементтерін алдыға жылжытып, іздеу жылдамдығын арттыратын байланысқан тізім қалай аталады?",
    options: [
      {
        id: "294088c2-6683-4204-b791-bcf7235c491f",
        text: "Өздігінен ұйымдасатын тізім (Self-organizing List)"
      },
      {
        id: "9d7605b9-ef41-476f-bcab-6ba07031c6bc",
        text: "Сұрыпталған тізім"
      },
      {
        id: "9a395d9d-9c13-4914-bd53-8237621e6865",
        text: "Тұрақты тізім"
      },
      {
        id: "447724e6-d5f5-492f-abc0-7404d227b3a1",
        text: "Хэштелген тізім"
      }
    ],
    correctOptionIds: [
      "294088c2-6683-4204-b791-bcf7235c491f"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b41",
    subjectId: SubjectId.ALGO,
    text: "Байланысқан тізімдермен жұмыс істегенде жадтың жылыстауы (Memory Leak) неден туындайды?",
    options: [
      {
        id: "algo-t07-b41-op1",
        text: "Тізімнің түйіндерін өшіргенде олардың жадын `delete` немесе `free` арқылы босатпай, сілтемесін ғана жоғалтып алудан"
      },
      {
        id: "algo-t07-b41-op2",
        text: "Массив шекарасынан шығып кетуден"
      },
      {
        id: "algo-t07-b41-op3",
        text: "Стек жадының толып кетуінен"
      },
      {
        id: "algo-t07-b41-op4",
        text: "Тізім элементтерін сұрыптаудан"
      }
    ],
    correctOptionIds: [
      "algo-t07-b41-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "88a9895c-1fbb-489c-836a-b9e14d99f520",
    subjectId: SubjectId.ALGO,
    text: "Екі бағытты циклдік байланысқан тізімнің (Circular Doubly Linked List) соңғы түйінінің келесі (`next`) сілтемесі мен бірінші түйіннің алдыңғы (`prev`) сілтемесі сәйкесінше қайда нұсқайды?",
    options: [
      {
        id: "008d6350-4a1d-4270-9bba-3a530933d0dd",
        text: "`next` бірінші түйінге, `prev` соңғы түйінге нұсқайды"
      },
      {
        id: "35353875-5c6f-4158-b351-1c2332091191",
        text: "Екеуі де NULL-ге нұсқайды"
      },
      {
        id: "80fde503-36b8-4239-abdd-06ef5ef8d977",
        text: "Екеуі де ортаңғы түйінге нұсқайды"
      },
      {
        id: "700c0e63-ee84-4b1d-8f4c-49b542cf0eda",
        text: "Бұл тізімде мұндай сілтемелер болмайды"
      }
    ],
    correctOptionIds: [
      "008d6350-4a1d-4270-9bba-3a530933d0dd"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "fba707d8-2be2-4428-a1a3-ee6f3ec9f894",
    subjectId: SubjectId.ALGO,
    text: "Бір өтуде (single pass) байланысқан тізімнің қақ ортасындағы түйінді (middle node) табу үшін қандай алгоритм қолданылады?",
    options: [
      {
        id: "2672c7ff-77d2-4e4a-b736-262bbc93e7b2",
        text: "Баяу (1 қадам) және жылдам (2 қадам) екі нұсқауыш әдісі (жылдам соңына жеткенде, баяу ортасында тұрады)"
      },
      {
        id: "7066fd5b-0e60-40f6-95e0-9de2f534f644",
        text: "Тізімді алдымен сұрыптау әдісі"
      },
      {
        id: "cffaeb59-fcf8-451c-82bb-ba4282ae2304",
        text: "Барлық элементтерді қосып орташасын табу"
      },
      {
        id: "f4ac6dd5-8d39-44e5-b3ba-da1fbd2b3737",
        text: "Тізімді жаңа массивке көшіріп алу"
      }
    ],
    correctOptionIds: [
      "2672c7ff-77d2-4e4a-b736-262bbc93e7b2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "16f97448-2d98-41ea-8e63-abf9e94f7daa",
    subjectId: SubjectId.ALGO,
    text: "Бағдарламалаудағы \"Undo\" (әрекетті кері қайтару) функциясы қай деректер құрылымына негізделеді?",
    options: [
      {
        id: "a456da3c-a846-4d4d-862b-bc233958d6d9",
        text: "Стек (Stack / LIFO)"
      },
      {
        id: "955cc30c-b16d-47cd-ab98-82a7b286209c",
        text: "Кезек (Queue / FIFO)"
      },
      {
        id: "0ebe0add-f26f-4eb5-a94a-d99c82516b50",
        text: "Екілік іздеу ағашы"
      },
      {
        id: "f9b9eaff-b005-4683-8c57-fea7bcaff775",
        text: "Хэш-кесте"
      }
    ],
    correctOptionIds: [
      "a456da3c-a846-4d4d-862b-bc233958d6d9"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b42",
    subjectId: SubjectId.ALGO,
    text: "`a + b * c` инфикстік өрнегінің постфикстік (Postfix) баламасы қандай болады?",
    options: [
      {
        id: "algo-t07-b42-op1",
        text: "a b c * +"
      },
      {
        id: "algo-t07-b42-op2",
        text: "+ a * b c"
      },
      {
        id: "algo-t07-b42-op3",
        text: "a * b c +"
      },
      {
        id: "algo-t07-b42-op4",
        text: "a b + c *"
      }
    ],
    correctOptionIds: [
      "algo-t07-b42-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b43",
    subjectId: SubjectId.ALGO,
    text: "`a + b * c` инфикстік өрнегінің префикстік (Prefix) баламасы қандай болады?",
    options: [
      {
        id: "algo-t07-b43-op1",
        text: "+ a * b c"
      },
      {
        id: "algo-t07-b43-op2",
        text: "a b c * +"
      },
      {
        id: "algo-t07-b43-op3",
        text: "+ * a b c"
      },
      {
        id: "algo-t07-b43-op4",
        text: "a + * b c"
      }
    ],
    correctOptionIds: [
      "algo-t07-b43-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3a54b7e4-3998-45b8-8532-a6e7b6888adf",
    subjectId: SubjectId.ALGO,
    text: "Жақшалардың сәйкестігін тексеру (Parenthesis matching) алгоритмі стекке негізделіп қалай жұмыс істейді?",
    options: [
      {
        id: "dc9df1d6-7c8d-4a7b-a514-fbeb845a847c",
        text: "Ашылатын жақшаларды стекке салады, жабылатын жақша кездескенде стек төбесінен сәйкесін алып өшіреді, соңында стек бос қалуы тиіс"
      },
      {
        id: "e9732b02-1370-4410-b99e-e67530005281",
        text: "Барлық жақшаларды кезекке салып ретімен шығарады"
      },
      {
        id: "bb017b9b-bccb-4154-a5dc-e67a99fd04e3",
        text: "Жақшаларды ASCII кодтары бойынша қосып тексереді"
      },
      {
        id: "e612b8aa-7efa-450d-a164-ce58c845e673",
        text: "Ол тек рекурсия арқылы ғана тексереді"
      }
    ],
    correctOptionIds: [
      "dc9df1d6-7c8d-4a7b-a514-fbeb845a847c"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b44",
    subjectId: SubjectId.ALGO,
    text: "Жақшалардың сәйкестігін тексеретін алгоритмнің уақыттық және кеңістіктік күрделілігі қандай?",
    options: [
      {
        id: "algo-t07-b44-op1",
        text: "Уақыты - O(n), жады - O(n)"
      },
      {
        id: "algo-t07-b44-op2",
        text: "Уақыты - O(n^2), жады - O(1)"
      },
      {
        id: "algo-t07-b44-op3",
        text: "Уақыты - O(log n), жады - O(n)"
      },
      {
        id: "algo-t07-b44-op4",
        text: "Уақыты - O(n), жады - O(1)"
      }
    ],
    correctOptionIds: [
      "algo-t07-b44-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b45",
    subjectId: SubjectId.ALGO,
    text: "Стектегі элементтердің өсу немесе кему ретін әрқашан сақтайтын арнайы стек түрі қалай аталады?",
    options: [
      {
        id: "algo-t07-b45-op1",
        text: "Монотонды стек (Monotonic Stack)"
      },
      {
        id: "algo-t07-b45-op2",
        text: "Сұрыпталған стек"
      },
      {
        id: "algo-t07-b45-op3",
        text: "Екі жақты стек"
      },
      {
        id: "algo-t07-b45-op4",
        text: "Приоритетті стек"
      }
    ],
    correctOptionIds: [
      "algo-t07-b45-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "603835d2-e9f2-43e0-9511-a68ef8211ab7",
    subjectId: SubjectId.ALGO,
    text: "Адамдар шеңбер бойымен тұрып, белгілі бір қадам бойынша кезекпен шығарылатын Иосиф есебін (Josephus Problem) қай деректер құрылымымен модельдеген ең тиімді?",
    options: [
      {
        id: "dcd80182-b0e1-4142-9511-f94604723802",
        text: "Циклдік байланысқан тізім (Circular Linked List)"
      },
      {
        id: "583a4943-08f4-42d3-8dce-38a4c9e94896",
        text: "Қарапайым стек"
      },
      {
        id: "8d5eef2b-7ba1-45dd-ae80-a1724e61a83b",
        text: "Сызықтық екі өлшемді массив"
      },
      {
        id: "6fda5095-78d9-4841-aa09-352c4d35ea82",
        text: "Екілік іздеу ағашы"
      }
    ],
    correctOptionIds: [
      "dcd80182-b0e1-4142-9511-f94604723802"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7671d4c4-7e2c-4bb8-a31b-136b44035268",
    subjectId: SubjectId.ALGO,
    text: "Екі сұрыпталған байланысқан тізімді біріктіру (merge two sorted lists) алгоритмінің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "4515c5ad-fcbd-4e1b-a524-16e7957af08f",
        text: "O(N + M)"
      },
      {
        id: "d9553b1b-b7e4-4f4d-abd7-8d5ca990f2d5",
        text: "O(N * M)"
      },
      {
        id: "f215e4de-e6d9-4025-8f5e-aaa6ac8f834e",
        text: "O(log(N+M))"
      },
      {
        id: "4ccdebc3-d671-4d14-812b-e220a772733c",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "4515c5ad-fcbd-4e1b-a524-16e7957af08f"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e82c6de0-b699-419b-9e39-acea2aa5a3fa",
    subjectId: SubjectId.ALGO,
    text: "Екі сұрыпталған байланысқан тізімді жаңа түйін құрмай, тек сілтемелерін өзгерту арқылы біріктірудің кеңістік күрделілігі қандай?",
    options: [
      {
        id: "26bde906-6b82-49f6-8f06-ca12609c6c16",
        text: "O(1)"
      },
      {
        id: "194c0bdd-c7f2-4f2c-8961-5d8d15861495",
        text: "O(N + M)"
      },
      {
        id: "2e74b4f6-a0b4-45b2-bcd4-083f0e496ed0",
        text: "O(log N)"
      },
      {
        id: "3395f3ca-d60a-4d6d-a558-3f4ad5bb6b25",
        text: "O(N)"
      }
    ],
    correctOptionIds: [
      "26bde906-6b82-49f6-8f06-ca12609c6c16"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b46",
    subjectId: SubjectId.ALGO,
    text: "Екі бір бағытты байланысқан тізімнің қиылысатынын (intersection) қалай тез анықтауға болады?",
    options: [
      {
        id: "algo-t07-b46-op1",
        text: "Екі тізімнің соңғы түйіндерін салыстыру арқылы (егер олар бірдей болса, тізімдер қиылысады)"
      },
      {
        id: "algo-t07-b46-op2",
        text: "Екі тізімді де толық сұрыптау арқылы"
      },
      {
        id: "algo-t07-b46-op3",
        text: "Екі тізімнің басын салыстыру арқылы"
      },
      {
        id: "algo-t07-b46-op4",
        text: "Тізімнің ортаңғы элементтерін салыстырумен"
      }
    ],
    correctOptionIds: [
      "algo-t07-b46-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0c0f99d0-6f69-4839-b425-887fe91e8988",
    subjectId: SubjectId.ALGO,
    text: "Екі байланысқан тізімнің қиылысу нүктесін (intersection point) O(1) қосымша жадында табу үшін қандай әдіс қолданылады?",
    options: [
      {
        id: "b3296cd5-ae25-44cc-a30d-6311a7711764",
        text: "Ұзындықтар айырмасын (d) есептеп, ұзын тізімді d қадамға алға жылжытып, содан кейін екеуін қатар жүргізіп салыстыру"
      },
      {
        id: "50b1798f-4ac4-402c-95ec-08c5a742f0f6",
        text: "Тізімді толықтай стекке аудару әдісі"
      },
      {
        id: "29635ae9-ce9f-4482-81db-4cd32fae3b66",
        text: "Екілік іздеу әдісі"
      },
      {
        id: "978ed998-f20a-4609-bcff-2c30976db576",
        text: "Массивке көшіріп салыстыру"
      }
    ],
    correctOptionIds: [
      "b3296cd5-ae25-44cc-a30d-6311a7711764"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "57e7e0df-cad0-4635-bb60-fa0059887bcc",
    subjectId: SubjectId.ALGO,
    text: "Бір уақытта ең кіші және ең үлкен элементтерді тез табуды және өшіруді қолдайтын приоритетті кезек қалай аталады?",
    options: [
      {
        id: "7013fd0d-2ebf-409b-aca5-812e846d66b1",
        text: "Екі жақты приоритетті кезек (Double-ended Priority Queue)"
      },
      {
        id: "c526195d-c640-4c89-b84a-fe7db25739c7",
        text: "Монотонды кезек"
      },
      {
        id: "048c5cc7-deff-4487-895c-fc7dbcb59ebe",
        text: "Сызықтық кезек"
      },
      {
        id: "0c9714b9-7d11-49d8-806c-fe130b336c63",
        text: "Аралас кезек"
      }
    ],
    correctOptionIds: [
      "7013fd0d-2ebf-409b-aca5-812e846d66b1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b47",
    subjectId: SubjectId.ALGO,
    text: "Linked List түйіндерін жадтан бөлу C++ тілінде қай оператор арқылы орындалады?",
    options: [
      {
        id: "algo-t07-b47-op1",
        text: "new"
      },
      {
        id: "algo-t07-b47-op2",
        text: "malloc"
      },
      {
        id: "algo-t07-b47-op3",
        text: "create"
      },
      {
        id: "algo-t07-b47-op4",
        text: "alloc"
      }
    ],
    correctOptionIds: [
      "algo-t07-b47-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b48",
    subjectId: SubjectId.ALGO,
    text: "Linked List түйіндерінің жадын босату C++ тілінде қай оператор арқылы орындалады?",
    options: [
      {
        id: "algo-t07-b48-op1",
        text: "delete"
      },
      {
        id: "algo-t07-b48-op2",
        text: "free"
      },
      {
        id: "algo-t07-b48-op3",
        text: "remove"
      },
      {
        id: "algo-t07-b48-op4",
        text: "destruct"
      }
    ],
    correctOptionIds: [
      "algo-t07-b48-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e0fa89ad-c9ff-48cd-bafa-c961f2dba835",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық құрылымдардың қайсысы компьютердің жедел жадында (RAM) үзіліссіз блокты талап етпейді?",
    options: [
      {
        id: "698ac6b1-3079-4366-8387-b7934e978114",
        text: "Байланысқан тізімдер (Linked Lists)"
      },
      {
        id: "1876bf42-2e30-4a15-878b-a90917158d2f",
        text: "Статикалық массивтер"
      },
      {
        id: "9d3d1656-a8ee-4da7-8b1f-e3745bf929c1",
        text: "Динамикалық векторлар"
      },
      {
        id: "28bae117-d7e7-411c-af56-8cba2628173a",
        text: "Екіөлшемді статикалық жиымдар"
      }
    ],
    correctOptionIds: [
      "698ac6b1-3079-4366-8387-b7934e978114"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b49",
    subjectId: SubjectId.ALGO,
    text: "Стек пен кезек (Stack & Queue) деректер құрылымының негізгі айырмашылығы қандай?",
    options: [
      {
        id: "algo-t07-b49-op1",
        text: "Стек LIFO (соңғы кірген бірінші шығады) принципімен, ал кезек FIFO (бірінші кірген бірінші шығады) принципімен жұмыс істейді"
      },
      {
        id: "algo-t07-b49-op2",
        text: "Стек тек нақты сандарды, ал кезек бүтін сандарды сақтайды"
      },
      {
        id: "algo-t07-b49-op3",
        text: "Стек тек динамикалық жадты қолданады"
      },
      {
        id: "algo-t07-b49-op4",
        text: "Кезек әрқашан сұрыпталған болады"
      }
    ],
    correctOptionIds: [
      "algo-t07-b49-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b50",
    subjectId: SubjectId.ALGO,
    text: "Linked List-те кез келген түйіннің сілтемесі `nullptr` болуы нені білдіреді?",
    options: [
      {
        id: "algo-t07-b50-op1",
        text: "Тізімнің аяқталғанын немесе сол түйіннің ең соңғы элемент екенін"
      },
      {
        id: "algo-t07-b50-op2",
        text: "Тізімде қателік орын алғанын"
      },
      {
        id: "algo-t07-b50-op3",
        text: "Тізімнің ортасына жеткенді"
      },
      {
        id: "algo-t07-b50-op4",
        text: "Тізімнің бос екенін"
      }
    ],
    correctOptionIds: [
      "algo-t07-b50-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b51",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімде келесі түйіннің мекенжайын қай нұсқауыш сақтайды?",
    options: [
      {
        id: "algo-t07-b51-op1",
        text: "next нұсқауышы"
      },
      {
        id: "algo-t07-b51-op2",
        text: "prev нұсқауышы"
      },
      {
        id: "algo-t07-b51-op3",
        text: "head нұсқауышы"
      },
      {
        id: "algo-t07-b51-op4",
        text: "tail нұсқауышы"
      }
    ],
    correctOptionIds: [
      "algo-t07-b51-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b52",
    subjectId: SubjectId.ALGO,
    text: "Екі бағытты байланысқан тізімде алдыңғы түйіннің мекенжайын қай нұсқауыш сақтайды?",
    options: [
      {
        id: "algo-t07-b52-op1",
        text: "prev нұсқауышы"
      },
      {
        id: "algo-t07-b52-op2",
        text: "next нұсқауышы"
      },
      {
        id: "algo-t07-b52-op3",
        text: "parent нұсқауышы"
      },
      {
        id: "algo-t07-b52-op4",
        text: "child нұсқауышы"
      }
    ],
    correctOptionIds: [
      "algo-t07-b52-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b53",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық мәліметтер құрылымына жатпайтын деректер құрылымы қандай?",
    options: [
      {
        id: "algo-t07-b53-op1",
        text: "Ағаш (Tree) немесе Граф (Graph)"
      },
      {
        id: "algo-t07-b53-op2",
        text: "Стек (Stack)"
      },
      {
        id: "algo-t07-b53-op3",
        text: "Кезек (Queue)"
      },
      {
        id: "algo-t07-b53-op4",
        text: "Байланысқан тізім (Linked List)"
      }
    ],
    correctOptionIds: [
      "algo-t07-b53-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b54",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасындағы `std::deque` атауының толық мағынасы қандай?",
    options: [
      {
        id: "algo-t07-b54-op1",
        text: "Double-Ended Queue (екі жақты кезек)"
      },
      {
        id: "algo-t07-b54-op2",
        text: "Double Queue"
      },
      {
        id: "algo-t07-b54-op3",
        text: "Decentralized Queue"
      },
      {
        id: "algo-t07-b54-op4",
        text: "Delayed Queue"
      }
    ],
    correctOptionIds: [
      "algo-t07-b54-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "17760749-df4a-4474-89b3-d19c48d2c522",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімде ағымдағы түйіннен кейінгі екінші түйінге сілтеме жасау үшін қандай өрнек қолданылады?",
    options: [
      {
        id: "3340acd2-8b6e-43c1-a1bd-2a3b81d6791a",
        text: "current->next->next"
      },
      {
        id: "e977f813-002f-4599-a01e-a2d609ec9139",
        text: "current->next"
      },
      {
        id: "a32ea6a8-de41-44de-82cb-35e9fc79c380",
        text: "current->prev"
      },
      {
        id: "617fed59-7ce8-4b5a-90aa-c6a23e2aef7d",
        text: "current->next->prev"
      }
    ],
    correctOptionIds: [
      "3340acd2-8b6e-43c1-a1bd-2a3b81d6791a"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c36db201-e53f-494f-8de2-e8c39149c7d7",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімді баспаға шығару (print/traverse) алгоритмінің уақыттық және кеңістіктік күрделілігі қандай?",
    options: [
      {
        id: "260119c2-f5c0-48e6-87e9-8e95926f999a",
        text: "Уақыты - O(n), жады - O(1)"
      },
      {
        id: "c46d0340-c8b1-43c2-8d88-bd83829eb019",
        text: "Уақыты - O(1), жады - O(n)"
      },
      {
        id: "df5b22b6-a5a7-443e-b284-743ef4236af1",
        text: "Уақыты - O(n), жады - O(n)"
      },
      {
        id: "b076fd0f-2d45-46ef-92ab-5e04151c0d48",
        text: "Уақыты - O(n^2), жады - O(1)"
      }
    ],
    correctOptionIds: [
      "260119c2-f5c0-48e6-87e9-8e95926f999a"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1cc1ccb8-252b-46a8-8c83-17b0c7485423",
    subjectId: SubjectId.ALGO,
    text: "Стек құрылымында ең соңғы қосылған элементке қол жеткізуді қамтамасыз ететін функция қалай аталады?",
    options: [
      {
        id: "28fde08b-5d06-4893-a53b-25c97dd4f373",
        text: "top() немесе peek()"
      },
      {
        id: "75eda2fb-c883-443c-b186-fa9f2dbf7d31",
        text: "front()"
      },
      {
        id: "8e2fbdf9-bb31-4cc6-a1cf-5a9ef33a83d3",
        text: "back()"
      },
      {
        id: "b4ee676e-cd72-461d-8ea6-f7c31a7951a3",
        text: "bottom()"
      }
    ],
    correctOptionIds: [
      "28fde08b-5d06-4893-a53b-25c97dd4f373"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5d9b4d58-c9af-47d1-8c2a-787ef378778f",
    subjectId: SubjectId.ALGO,
    text: "Кезек (Queue) құрылымында ең бірінші кірген элементке қол жеткізуді қамтамасыз ететін функция қалай аталады?",
    options: [
      {
        id: "68f36b25-99df-488c-b978-100bb37e3f4b",
        text: "front()"
      },
      {
        id: "750940fb-89e1-4bab-94ce-79173a04c3fb",
        text: "top()"
      },
      {
        id: "8c04ab22-2d96-438a-9eb4-c113c1ed3f22",
        text: "peek()"
      },
      {
        id: "ef2d3824-dc02-4b5f-84ec-25393588b617",
        text: "back()"
      }
    ],
    correctOptionIds: [
      "68f36b25-99df-488c-b978-100bb37e3f4b"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b55",
    subjectId: SubjectId.ALGO,
    text: "Priority Queue-да приоритеті бірдей элементтер кездессе, олар кезекте қалай реттеледі?",
    options: [
      {
        id: "algo-t07-b55-op1",
        text: "Әдетте кезекке бірінші қосылған элемент бірінші шығады (FIFO тәртібімен)"
      },
      {
        id: "algo-t07-b55-op2",
        text: "Олардың орны кездейсоқ өзгереді"
      },
      {
        id: "algo-t07-b55-op3",
        text: "Олардың бірі жойылады"
      },
      {
        id: "algo-t07-b55-op4",
        text: "Олар стек принципі бойынша реттеледі"
      }
    ],
    correctOptionIds: [
      "algo-t07-b55-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8fbb13d5-775a-478e-87cb-76d7fdc2ac18",
    subjectId: SubjectId.ALGO,
    text: "Стек бос болған кезде `pop()` немесе `top()` операцияларын шақыру салдарынан туындайтын қателік қалай аталады?",
    options: [
      {
        id: "19b13e61-7b1a-4587-a54e-482ce6afa58e",
        text: "Stack Underflow (стектің шектен тыс босауы)"
      },
      {
        id: "1d6129c4-6421-45c8-bf02-38623d6855ab",
        text: "Stack Overflow (стектің шектен тыс толуы)"
      },
      {
        id: "aab39c28-f467-41c8-a5ae-83ef0926c868",
        text: "Null Pointer Exception"
      },
      {
        id: "35f0d546-5460-47cd-b753-6d3e4f657dc3",
        text: "Segmentation Fault"
      }
    ],
    correctOptionIds: [
      "19b13e61-7b1a-4587-a54e-482ce6afa58e"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7cfbd45e-d58d-494b-baf1-b2b53dd0d5c3",
    subjectId: SubjectId.ALGO,
    text: "Кезек бос болған кезде `dequeue()` немесе `front()` операцияларын шақыру салдарынан туындайтын қателік қалай аталады?",
    options: [
      {
        id: "07876dc3-8432-4474-a4b1-ae9f0590ef4b",
        text: "Queue Underflow (кезектің шектен тыс босауы)"
      },
      {
        id: "37241259-1249-438a-a902-d73718b1dc7e",
        text: "Queue Overflow (кезектің шектен тыс толуы)"
      },
      {
        id: "2dddf224-f04b-49c0-b99f-1a6cbe609480",
        text: "Index Out Of Bounds"
      },
      {
        id: "3249c90a-908a-41a4-8736-92d1fe687631",
        text: "Memory Leak"
      }
    ],
    correctOptionIds: [
      "07876dc3-8432-4474-a4b1-ae9f0590ef4b"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b56",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасында вектордағы элементтер санын анықтайтын функция қалай аталады?",
    options: [
      {
        id: "algo-t07-b56-op1",
        text: "size()"
      },
      {
        id: "algo-t07-b56-op2",
        text: "length()"
      },
      {
        id: "algo-t07-b56-op3",
        text: "capacity()"
      },
      {
        id: "algo-t07-b56-op4",
        text: "count()"
      }
    ],
    correctOptionIds: [
      "algo-t07-b56-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "df781fc8-f710-4c51-a12a-77782aa2eee4",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасында вектордың жадында қанша элементке орын бөлінгенін (сыйымдылығын) көрсететін функция қалай аталады?",
    options: [
      {
        id: "cdd32011-854c-4575-86fb-6587e6e0aa7d",
        text: "capacity()"
      },
      {
        id: "e8e65f3c-4af1-4066-83c2-f852569a1f2b",
        text: "size()"
      },
      {
        id: "24d3ad85-9c0d-4315-8c1a-225894bd64a0",
        text: "max_size()"
      },
      {
        id: "020064a1-b868-4afe-aee7-a49ad0e54a9a",
        text: "resize()"
      }
    ],
    correctOptionIds: [
      "cdd32011-854c-4575-86fb-6587e6e0aa7d"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t07-b57",
    subjectId: SubjectId.ALGO,
    text: "Массивтің соңына элемент қосудың ең нашар (worst-case) уақыт күрделілігі қашан орындалады?",
    options: [
      {
        id: "algo-t07-b57-op1",
        text: "Массивтің сыйымдылығы (capacity) толып, жаңа үлкен жад блогын бөліп, элементтерді көшіру қажет болғанда (O(n))"
      },
      {
        id: "algo-t07-b57-op2",
        text: "Массив бос болғанда"
      },
      {
        id: "algo-t07-b57-op3",
        text: "Массив тек теріс сандардан тұрғанда"
      },
      {
        id: "algo-t07-b57-op4",
        text: "Әрқашан O(1) болады"
      }
    ],
    correctOptionIds: [
      "algo-t07-b57-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ee430cd4-b9b8-4c02-9890-017fce6669e3",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімді `nullptr` сілтемесін қолданбай, соңғы түйінді бірінші түйінге қосу арқылы жасалған түрі қалай аталады?",
    options: [
      {
        id: "f8679219-39a6-46cb-bbdb-45488df335d7",
        text: "Бір бағытты циклдік тізім (Singly Circular Linked List)"
      },
      {
        id: "6741f4a4-9bc1-4b4c-805d-00d94dd37e4d",
        text: "Екі бағытты тізім"
      },
      {
        id: "fd128679-370c-4563-aea4-c2e0a68ab79a",
        text: "Сенсинель тізімі"
      },
      {
        id: "660c6af4-b7eb-42ff-9498-8c4378dba0d3",
        text: "Бос тізім"
      }
    ],
    correctOptionIds: [
      "f8679219-39a6-46cb-bbdb-45488df335d7"
    ],
    type: QuestionType.SINGLE,
    topic: "Сызықтық мәліметтер құрылымы",
    difficulty: Difficulty.MEDIUM
  }
];
