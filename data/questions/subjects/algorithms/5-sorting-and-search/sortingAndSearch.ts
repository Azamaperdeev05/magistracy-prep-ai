import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// algo / Сұрыптау және іздеу алгоритмдері
export const algo5SortingAndSearchQuestions : Question[] = [
  {
    id: "algo-t05-b01",
    subjectId: SubjectId.ALGO,
    text: "Bubble Sort қалай жұмыс істейді?",
    options: [
      {
        id: "algo-t05-b01-op1",
        text: "Элементтерді қосады"
      },
      {
        id: "algo-t05-b01-op2",
        text: "Көрші элементтерді салыстырып, орнын ауыстырады"
      },
      {
        id: "algo-t05-b01-op3",
        text: "Бөліп алгоритмін қолданады"
      },
      {
        id: "algo-t05-b01-op4",
        text: "Кездейсоқ сұрыптайды"
      }
    ],
    correctOptionIds: [
      "algo-t05-b01-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b02",
    subjectId: SubjectId.ALGO,
    text: "Selection Sort қалай жұмыс істейді?",
    options: [
      {
        id: "algo-t05-b02-op1",
        text: "Рекурсияны қолданады"
      },
      {
        id: "algo-t05-b02-op2",
        text: "Ең кіші элементті тауып, алдыға қояды"
      },
      {
        id: "algo-t05-b02-op3",
        text: "Көрші элементтерді салыстырады"
      },
      {
        id: "algo-t05-b02-op4",
        text: "Бөліп алу принципі"
      }
    ],
    correctOptionIds: [
      "algo-t05-b02-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b03",
    subjectId: SubjectId.ALGO,
    text: "In-place сұрыптау дегеніміз не?",
    options: [
      {
        id: "algo-t05-b03-op1",
        text: "O(1) қосымша жадымен сұрыптау"
      },
      {
        id: "algo-t05-b03-op2",
        text: "Сырттан сұрыптау"
      },
      {
        id: "algo-t05-b03-op3",
        text: "Параллель сұрыптау"
      },
      {
        id: "algo-t05-b03-op4",
        text: "Қосымша жадыны көп қолданатын"
      }
    ],
    correctOptionIds: [
      "algo-t05-b03-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b04",
    subjectId: SubjectId.ALGO,
    text: "Counting Sort қандай деректерде тиімді?",
    options: [
      {
        id: "algo-t05-b04-op1",
        text: "Жолдар"
      },
      {
        id: "algo-t05-b04-op2",
        text: "Нақты сандар"
      },
      {
        id: "algo-t05-b04-op3",
        text: "Кез келген деректер"
      },
      {
        id: "algo-t05-b04-op4",
        text: "Шектеулі диапазондағы бүтін сандар"
      }
    ],
    correctOptionIds: [
      "algo-t05-b04-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b05",
    subjectId: SubjectId.ALGO,
    text: "Merge Sort қандай стратегияны қолданады?",
    options: [
      {
        id: "algo-t05-b05-op1",
        text: "Dynamic Programming"
      },
      {
        id: "algo-t05-b05-op2",
        text: "Divide and Conquer"
      },
      {
        id: "algo-t05-b05-op3",
        text: "Greedy"
      },
      {
        id: "algo-t05-b05-op4",
        text: "Backtracking"
      }
    ],
    correctOptionIds: [
      "algo-t05-b05-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b06",
    subjectId: SubjectId.ALGO,
    text: "Қай сұрыптау алгоритмі O(n) күрделілікке ие бола алады?",
    options: [
      {
        id: "algo-t05-b06-op1",
        text: "Bubble Sort"
      },
      {
        id: "algo-t05-b06-op2",
        text: "Counting Sort (арнайы шарттарда)"
      },
      {
        id: "algo-t05-b06-op3",
        text: "Merge Sort"
      },
      {
        id: "algo-t05-b06-op4",
        text: "Quick Sort"
      }
    ],
    correctOptionIds: [
      "algo-t05-b06-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b07",
    subjectId: SubjectId.ALGO,
    text: "Radix Sort қандай принципті қолданады?",
    options: [
      {
        id: "algo-t05-b07-op1",
        text: "Салыстыру"
      },
      {
        id: "algo-t05-b07-op2",
        text: "Рекурсия"
      },
      {
        id: "algo-t05-b07-op3",
        text: "Разрядтар бойынша сұрыптау"
      },
      {
        id: "algo-t05-b07-op4",
        text: "Бөліп алу"
      }
    ],
    correctOptionIds: [
      "algo-t05-b07-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b08",
    subjectId: SubjectId.ALGO,
    text: "Quick Sort-та pivot дегеніміз не?",
    options: [
      {
        id: "algo-t05-b08-op1",
        text: "Соңғы элемент"
      },
      {
        id: "algo-t05-b08-op2",
        text: "Сұрыптау үшін таңдалған салыстыру элементі"
      },
      {
        id: "algo-t05-b08-op3",
        text: "Бірінші элемент"
      },
      {
        id: "algo-t05-b08-op4",
        text: "Ортаңғы мән"
      }
    ],
    correctOptionIds: [
      "algo-t05-b08-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b09",
    subjectId: SubjectId.ALGO,
    text: "Quick Sort қандай стратегияны қолданады?",
    options: [
      {
        id: "algo-t05-b09-op1",
        text: "Dynamic Programming"
      },
      {
        id: "algo-t05-b09-op2",
        text: "Greedy"
      },
      {
        id: "algo-t05-b09-op3",
        text: "Divide and Conquer"
      },
      {
        id: "algo-t05-b09-op4",
        text: "Brute Force"
      }
    ],
    correctOptionIds: [
      "algo-t05-b09-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b10",
    subjectId: SubjectId.ALGO,
    text: "Merge Sort тұрақты (stable) сұрыптау ма?",
    options: [
      {
        id: "algo-t05-b10-op1",
        text: "Иә"
      },
      {
        id: "algo-t05-b10-op2",
        text: "Белгісіз"
      },
      {
        id: "algo-t05-b10-op3",
        text: "Жоқ"
      },
      {
        id: "algo-t05-b10-op4",
        text: "Кейде"
      }
    ],
    correctOptionIds: [
      "algo-t05-b10-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b11",
    subjectId: SubjectId.ALGO,
    text: "Binary Search (екілік іздеу) алгоритмінің дұрыс жұмыс істеуінің басты шарты қандай?",
    options: [
      {
        id: "algo-t05-b11-op1",
        text: "Массивтің міндетті түрде сұрыпталған (ordered) болуы"
      },
      {
        id: "algo-t05-b11-op2",
        text: "Массивтің бос болуы"
      },
      {
        id: "algo-t05-b11-op3",
        text: "Массив өлшемі 100-ден кем болуы"
      },
      {
        id: "algo-t05-b11-op4",
        text: "Массивте тек оң сандар болуы"
      }
    ],
    correctOptionIds: [
      "algo-t05-b11-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b12",
    subjectId: SubjectId.ALGO,
    text: "Quick Sort сұрыптауының ең нашар күрделілігі (worst-case) қандай және ол қай кезде кездеседі?",
    options: [
      {
        id: "algo-t05-b12-op1",
        text: "O(n^2), pivot ретінде әрқашан ең кіші немесе ең үлкен элемент таңдалса"
      },
      {
        id: "algo-t05-b12-op2",
        text: "O(n log n), массив сұрыпталмаған болса"
      },
      {
        id: "algo-t05-b12-op3",
        text: "O(n), массив бос болса"
      },
      {
        id: "algo-t05-b12-op4",
        text: "O(1), барлық элементтер бірдей болса"
      }
    ],
    correctOptionIds: [
      "algo-t05-b12-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b13",
    subjectId: SubjectId.ALGO,
    text: "Қай сұрыптау алгоритмі салыстыруға негізделмеген (non-comparison based)?",
    options: [
      {
        id: "algo-t05-b13-op1",
        text: "Counting Sort немесе Radix Sort"
      },
      {
        id: "algo-t05-b13-op2",
        text: "Merge Sort"
      },
      {
        id: "algo-t05-b13-op3",
        text: "Quick Sort"
      },
      {
        id: "algo-t05-b13-op4",
        text: "Bubble Sort"
      }
    ],
    correctOptionIds: [
      "algo-t05-b13-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b14",
    subjectId: SubjectId.ALGO,
    text: "Сұрыптау алгоритмінің \"тұрақтылығы\" (stability) нені білдіреді?",
    options: [
      {
        id: "algo-t05-b14-op1",
        text: "Бірдей мәнді элементтердің сұрыпталғаннан кейін бастапқы өзара реттілігінің сақталуы"
      },
      {
        id: "algo-t05-b14-op2",
        text: "Алгоритмнің орындалу уақыты өзгермейтіндігін"
      },
      {
        id: "algo-t05-b14-op3",
        text: "Жадыны мүлдем қолданбайтынын"
      },
      {
        id: "algo-t05-b14-op4",
        text: "Сұрыптаудың сәтті аяқталуын"
      }
    ],
    correctOptionIds: [
      "algo-t05-b14-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b15",
    subjectId: SubjectId.ALGO,
    text: "Көпіршікті сұрыптау (Bubble Sort) алгоритмінің орташа уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t05-b15-op1",
        text: "O(n^2)"
      },
      {
        id: "algo-t05-b15-op2",
        text: "O(n log n)"
      },
      {
        id: "algo-t05-b15-op3",
        text: "O(log n)"
      },
      {
        id: "algo-t05-b15-op4",
        text: "O(n)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b15-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b16",
    subjectId: SubjectId.ALGO,
    text: "Кірістіру арқылы сұрыптау (Insertion Sort) алгоритмі қалай жұмыс істейді?",
    options: [
      {
        id: "algo-t05-b16-op1",
        text: "Массив элементтерін кезекпен алып, оны бұрын сұрыпталған бөліктің тиісті орнына кірістіреді"
      },
      {
        id: "algo-t05-b16-op2",
        text: "Барлық элементтерді бір уақытта жаңа массивке көшіріп сұрыптайды"
      },
      {
        id: "algo-t05-b16-op3",
        text: "Массивті екіге бөліп, рекурсивті біріктіреді"
      },
      {
        id: "algo-t05-b16-op4",
        text: "Ең үлкен элементті тауып соңына қояды"
      }
    ],
    correctOptionIds: [
      "algo-t05-b16-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9dc1ff0a-48f5-41a3-8d0a-3101634f06a9",
    subjectId: SubjectId.ALGO,
    text: "Insertion Sort-тың ең жақсы жағдайдағы (best-case) уақыттық күрделілігі қандай және ол қашан болады?",
    options: [
      {
        id: "2df9970a-f145-42d6-af50-10c4f2a03c4b",
        text: "O(n), массив алдын ала толық сұрыпталған болса"
      },
      {
        id: "b02a2ccf-30d3-4f17-860a-c2b54fdc7a38",
        text: "O(n log n), массив кері ретпен сұрыпталған болса"
      },
      {
        id: "cff045b5-a2d6-47f3-8be9-6e1847002852",
        text: "O(1), массив бос болса"
      },
      {
        id: "cc89b491-91ca-4a77-abc7-ce8596792a52",
        text: "O(n^2), барлық элементтер бірдей болса"
      }
    ],
    correctOptionIds: [
      "2df9970a-f145-42d6-af50-10c4f2a03c4b"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "707b28ce-80be-4b74-9220-a83f1de99e78",
    subjectId: SubjectId.ALGO,
    text: "Insertion Sort-тың ең нашар жағдайдағы (worst-case) уақыттық күрделілігі қандай және ол қашан болады?",
    options: [
      {
        id: "29bf6976-778d-4e5d-aa65-fcfe5904981f",
        text: "O(n^2), массив кері ретпен сұрыпталған болса"
      },
      {
        id: "37ad4be2-1bdf-45aa-b7f5-d71ab9485fa0",
        text: "O(n log n), массив кездейсоқ реттелген болса"
      },
      {
        id: "e6ed4ec5-d3f9-4c6f-a8f5-082301214e68",
        text: "O(n), барлық элементтер өсу ретімен болса"
      },
      {
        id: "d31f06c5-c223-4ec5-896e-fd74fa081fa4",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "29bf6976-778d-4e5d-aa65-fcfe5904981f"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8f068bc6-1240-4cfa-b37c-1af34d4499d3",
    subjectId: SubjectId.ALGO,
    text: "Төмендегілердің қайсысы сұрыпталған және кішігірім деректер жиыны үшін ең тиімді сұрыптау алгоритмі болып табылады?",
    options: [
      {
        id: "d92c3f27-1069-4fc8-ac66-80db5547fac8",
        text: "Insertion Sort (Кірістіру арқылы сұрыптау)"
      },
      {
        id: "95dc25d4-e88b-4dcf-8f23-642d49faa49e",
        text: "Merge Sort (Біріктіру арқылы сұрыптау)"
      },
      {
        id: "2552642c-1260-4b24-814e-5abc4f90d5d9",
        text: "Quick Sort (Жылдам сұрыптау)"
      },
      {
        id: "d58151ef-996c-4795-b35a-2fea35e50ac3",
        text: "Heap Sort (Үйінді арқылы сұрыптау)"
      }
    ],
    correctOptionIds: [
      "d92c3f27-1069-4fc8-ac66-80db5547fac8"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b17",
    subjectId: SubjectId.ALGO,
    text: "Үйінді арқылы сұрыптау (Heap Sort) алгоритмінің негізгі идеясы қандай?",
    options: [
      {
        id: "algo-t05-b17-op1",
        text: "Массив элементтерінен екілік үйінді (binary heap) құрып, ең үлкен/кіші элементті кезекпен шығарып алу"
      },
      {
        id: "algo-t05-b17-op2",
        text: "Массивті pivot арқылы екі бөлшекке бөліп сұрыптау"
      },
      {
        id: "algo-t05-b17-op3",
        text: "Элементтерді себеттерге (buckets) тарату"
      },
      {
        id: "algo-t05-b17-op4",
        text: "Көршілес элементтерді өзара алмастыру"
      }
    ],
    correctOptionIds: [
      "algo-t05-b17-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b18",
    subjectId: SubjectId.ALGO,
    text: "Heap Sort алгоритмінің ең нашар және орташа жағдайдағы уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t05-b18-op1",
        text: "O(n log n)"
      },
      {
        id: "algo-t05-b18-op2",
        text: "O(n^2)"
      },
      {
        id: "algo-t05-b18-op3",
        text: "O(n)"
      },
      {
        id: "algo-t05-b18-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b18-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b19",
    subjectId: SubjectId.ALGO,
    text: "Heap Sort тұрақты (stable) сұрыптау алгоритмі болып табылады ма?",
    options: [
      {
        id: "algo-t05-b19-op1",
        text: "Жоқ, ол тұрақсыз (unstable) алгоритм, өйткені үйінді құру кезінде элементтердің бастапқы реті бұзылуы мүмкін"
      },
      {
        id: "algo-t05-b19-op2",
        text: "Иә, ол толықтай тұрақты алгоритм"
      },
      {
        id: "algo-t05-b19-op3",
        text: "Тек оң сандар үшін ғана тұрақты"
      },
      {
        id: "algo-t05-b19-op4",
        text: "Тек кішігірім массивтер үшін тұрақты"
      }
    ],
    correctOptionIds: [
      "algo-t05-b19-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b20",
    subjectId: SubjectId.ALGO,
    text: "Шелл сұрыптауы (Shell Sort) қандай алгоритмнің жетілдірілген, қадамдық нұсқасы болып табылады?",
    options: [
      {
        id: "algo-t05-b20-op1",
        text: "Insertion Sort (Кірістіру арқылы сұрыптау)"
      },
      {
        id: "algo-t05-b20-op2",
        text: "Selection Sort (Таңдау арқылы сұрыптау)"
      },
      {
        id: "algo-t05-b20-op3",
        text: "Bubble Sort (Көпіршікті сұрыптау)"
      },
      {
        id: "algo-t05-b20-op4",
        text: "Quick Sort (Жылдам сұрыптау)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b20-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "fc41c172-554c-413a-b7fc-7bb7d7e4ec59",
    subjectId: SubjectId.ALGO,
    text: "Жылдам сұрыптау (Quick Sort) алгоритмінде Lomuto және Hoare бөлімдеу (partition) схемаларының айырмашылығы неде?",
    options: [
      {
        id: "acee3340-aa6d-4847-906c-feb1a5f42f65",
        text: "Lomuto әдетте соңғы элементті pivot етеді және бір бағытта жүреді, ал Hoare екі шетінен екі нұсқауышпен ортаға қарай жылжиды"
      },
      {
        id: "6a930228-4110-4138-a70c-6a613cc64633",
        text: "Lomuto тек рекурсиясыз жұмыс істейді"
      },
      {
        id: "445c499e-0238-4636-9a0c-a994e33de7fd",
        text: "Hoare схемасы O(N^2) қосымша жадты талап етеді"
      },
      {
        id: "2c53827b-897f-42a7-aa2a-44cff9e792d1",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "acee3340-aa6d-4847-906c-feb1a5f42f65"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b21",
    subjectId: SubjectId.ALGO,
    text: "Рандомизацияланған Жылдам сұрыптау (Randomized Quick Sort) не үшін қолданылады?",
    options: [
      {
        id: "algo-t05-b21-op1",
        text: "Ең нашар жағдайдағы O(n^2) уақыт күрделілігін болдырмау үшін pivot-ты кездейсоқ таңдау арқылы орташа O(n log n) уақытты қамтамасыз ету үшін"
      },
      {
        id: "algo-t05-b21-op2",
        text: "Жадыны үнемдеу мақсатында"
      },
      {
        id: "algo-t05-b21-op3",
        text: "Сұрыптауды тұрақты ету үшін"
      },
      {
        id: "algo-t05-b21-op4",
        text: "Рекурсия тереңдігін нөлге теңестіру үшін"
      }
    ],
    correctOptionIds: [
      "algo-t05-b21-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b22",
    subjectId: SubjectId.ALGO,
    text: "Санау арқылы сұрыптау (Counting Sort) алгоритмінің орындалу уақыты қандай?",
    options: [
      {
        id: "algo-t05-b22-op1",
        text: "O(n + k), мұндағы k - элементтердің максималды диапазоны"
      },
      {
        id: "algo-t05-b22-op2",
        text: "O(n log n)"
      },
      {
        id: "algo-t05-b22-op3",
        text: "O(n^2)"
      },
      {
        id: "algo-t05-b22-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b22-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b23",
    subjectId: SubjectId.ALGO,
    text: "Counting Sort алгоритмі неліктен салыстырусыз сұрыптау алгоритмі деп аталады?",
    options: [
      {
        id: "algo-t05-b23-op1",
        text: "Элементтерді өзара бір-бірімен салыстырмайды, тек әрбір элементтің жиілігін (санын) есептеп, орнын анықтайды"
      },
      {
        id: "algo-t05-b23-op2",
        text: "Ол тек бір элементті ғана сұрыптайды"
      },
      {
        id: "algo-t05-b23-op3",
        text: "Сұрыптау компиляция кезеңінде толық бітеді"
      },
      {
        id: "algo-t05-b23-op4",
        text: "Ол тек мәтіндермен жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "algo-t05-b23-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7ab02e8b-199e-4191-88ee-6575b89bd658",
    subjectId: SubjectId.ALGO,
    text: "Төмендегілердің қайсысы Radix Sort (разрядтық сұрыптау) алгоритмінің жұмыс принципін сипаттайды?",
    options: [
      {
        id: "b1a624f6-e316-4525-bc16-ef9b5a552d78",
        text: "Сандарды кіші разрядтан (немесе үлкен разрядтан) бастап кезекпен Counting Sort сияқты тұрақты алгоритммен сұрыптау"
      },
      {
        id: "82f0c00d-758d-4522-a50a-c72b2e6f5e6e",
        text: "Сандарды екілік ағашқа салып сұрыптау"
      },
      {
        id: "546d09f9-0bcf-4a38-a8fd-e89c102aa547",
        text: "Pivot-ты тауып, одан кіші сандарды солға жылжыту"
      },
      {
        id: "311fb7d0-77ee-4bf7-ac26-1099040f194a",
        text: "Барлық элементтерді қосып орташа мән бойынша бөлу"
      }
    ],
    correctOptionIds: [
      "b1a624f6-e316-4525-bc16-ef9b5a552d78"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9f9aba19-3c37-43c3-8cdb-aba0e2c6c319",
    subjectId: SubjectId.ALGO,
    text: "Себеттік сұрыптау (Bucket Sort) алгоритмі қандай жағдайда ең жоғары O(n) уақыт тиімділігін көрсетеді?",
    options: [
      {
        id: "35c49018-b05d-4fad-8a31-c93a01d96b7f",
        text: "Кіріс деректер белгілі бір аралықта біркелкі (uniformly distributed) таралған жағдайда"
      },
      {
        id: "7cbea2cb-18cd-4df0-903b-8bbbaeb8e3e2",
        text: "Барлық элементтер бірдей болғанда"
      },
      {
        id: "089a69d4-1b0c-4920-8186-dc31415cac63",
        text: "Элементтер тек теріс сандар болғанда"
      },
      {
        id: "0a5c339b-9043-4b07-a92a-c019220a6694",
        text: "Массив толығымен кері сұрыпталғанда"
      }
    ],
    correctOptionIds: [
      "35c49018-b05d-4fad-8a31-c93a01d96b7f"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d81ba829-325c-40a7-8fb4-de9e517e47a1",
    subjectId: SubjectId.ALGO,
    text: "TimSort сұрыптау алгоритмі (Python және Java тілдерінде әдепкі бойынша қолданылатын) қандай екі сұрыптаудың гибриді болып табылады?",
    options: [
      {
        id: "5b4135bd-92a7-4b99-a781-b0d1cca80b82",
        text: "Merge Sort және Insertion Sort"
      },
      {
        id: "87a40dd2-1689-4b2d-9530-d97c8ffeccae",
        text: "Quick Sort және Bubble Sort"
      },
      {
        id: "4e832b7b-b9c8-4baa-a3f1-984862d60959",
        text: "Heap Sort және Selection Sort"
      },
      {
        id: "037b1f19-7075-42f0-8eb5-4487f75bae06",
        text: "Radix Sort және Counting Sort"
      }
    ],
    correctOptionIds: [
      "5b4135bd-92a7-4b99-a781-b0d1cca80b82"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b24",
    subjectId: SubjectId.ALGO,
    text: "TimSort сұрыптауының ең жақсы жағдайдағы (best-case) уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t05-b24-op1",
        text: "O(n)"
      },
      {
        id: "algo-t05-b24-op2",
        text: "O(n log n)"
      },
      {
        id: "algo-t05-b24-op3",
        text: "O(1)"
      },
      {
        id: "algo-t05-b24-op4",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b24-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "19b60f87-f977-454c-8af7-7c1f2477ef2e",
    subjectId: SubjectId.ALGO,
    text: "Салыстыруға негізделген кез келген сұрыптау алгоритмінің теориялық ең төменгі уақыт күрделілігі шегі (lower bound) қандай?",
    options: [
      {
        id: "979af23f-6b54-492d-99b9-fc427ecf9465",
        text: "Omega(n log n)"
      },
      {
        id: "cb36f6c9-450f-446b-b8b7-7191ef9fac9a",
        text: "Omega(n)"
      },
      {
        id: "1f2dab74-ebaf-4945-b98a-482dbace239d",
        text: "Omega(log n)"
      },
      {
        id: "513d4747-e748-467b-b727-a251a964e10c",
        text: "Omega(n^2)"
      }
    ],
    correctOptionIds: [
      "979af23f-6b54-492d-99b9-fc427ecf9465"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "af16b4e4-a057-4406-adfd-715bb19827ac",
    subjectId: SubjectId.ALGO,
    text: "Неліктен салыстыруға негізделген сұрыптау алгоритмдері O(n log n) шегінен жылдам жұмыс істей алмайды (теориялық тұрғыдан)?",
    options: [
      {
        id: "65589eb1-0322-4c55-af50-7b5bb67788d4",
        text: "Шешімдер ағашының (decision tree) жапырақтарының саны кем дегенде n! болады, ал оның биіктігі log(n!) = Theta(n log n) құрайды"
      },
      {
        id: "d5c646e2-26d8-4a86-b50c-85dc06f86472",
        text: "Стек фреймдерінің шектелуіне байланысты"
      },
      {
        id: "e0c1f084-d039-4a8c-816f-ee116c627848",
        text: "Процессордың тактілік жиілігінің жетіспеушілігінен"
      },
      {
        id: "926b754e-b154-40e1-9473-8c7089ddf534",
        text: "Массив элементтерінің индекстері шектеулі болғандықтан"
      }
    ],
    correctOptionIds: [
      "65589eb1-0322-4c55-af50-7b5bb67788d4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ca6cc10c-0837-46a5-8d8b-d4f70f63dd65",
    subjectId: SubjectId.ALGO,
    text: "Массивтен k-шы ең кіші элементті табуға арналған QuickSelect алгоритмінің орташа уақыттық күрделілігі қандай?",
    options: [
      {
        id: "ac683a18-8330-469d-9c76-5c6e141620e2",
        text: "O(n)"
      },
      {
        id: "51ace011-47ce-4572-b0ca-7475e23cc7f7",
        text: "O(n log n)"
      },
      {
        id: "f6630f36-b368-4f11-a8fc-80cd4698e078",
        text: "O(n^2)"
      },
      {
        id: "d4ff14e5-f8e5-4dab-81f8-f16d68e8cef4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "ac683a18-8330-469d-9c76-5c6e141620e2"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b25",
    subjectId: SubjectId.ALGO,
    text: "QuickSelect алгоритмінің Quick Sort-тан басты айырмашылығы неде?",
    options: [
      {
        id: "algo-t05-b25-op1",
        text: "Ол pivot-ты тапқаннан кейін рекурсияны тек қажетті бір бөлікте ғана жалғастырады (бөлудің екі жағына бірдей өтпейді)"
      },
      {
        id: "algo-t05-b25-op2",
        text: "Ол рекурсияны мүлдем қолданбайды"
      },
      {
        id: "algo-t05-b25-op3",
        text: "Ол тек хэш-кестелерді қолданады"
      },
      {
        id: "algo-t05-b25-op4",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t05-b25-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3ec75e62-a723-48c0-809e-d10f9a4c91f9",
    subjectId: SubjectId.ALGO,
    text: "Шығыс буфері мен дискілерді қолданып, жедел жадқа сыймайтын өте үлкен файлдарды сұрыптау әдісі қалай аталады?",
    options: [
      {
        id: "6f4cf72a-1e9b-4948-ac36-ed06e96715da",
        text: "Сыртқы сұрыптау (External sorting / External Merge Sort)"
      },
      {
        id: "76e82670-78ef-4d72-b17b-b67a111b22e1",
        text: "Ішкі сұрыптау (Internal sorting)"
      },
      {
        id: "ec8b8be6-1802-4d43-9966-c6591ab8080b",
        text: "Жедел сұрыптау"
      },
      {
        id: "e57b4d2e-f0da-4d8b-868a-4d8576bfbcb0",
        text: "Динамикалық сұрыптау"
      }
    ],
    correctOptionIds: [
      "6f4cf72a-1e9b-4948-ac36-ed06e96715da"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b26",
    subjectId: SubjectId.ALGO,
    text: "Екілік іздеу (Binary Search) алгоритмінің орташа және ең нашар уақыт күрделілігі қандай?",
    options: [
      {
        id: "algo-t05-b26-op1",
        text: "O(log n)"
      },
      {
        id: "algo-t05-b26-op2",
        text: "O(n)"
      },
      {
        id: "algo-t05-b26-op3",
        text: "O(n log n)"
      },
      {
        id: "algo-t05-b26-op4",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b26-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ace6dadc-51d4-4428-8ac7-5db5d4682319",
    subjectId: SubjectId.ALGO,
    text: "Сұрыпталған массивті белгілі бір қадамдармен секіру арқылы жылдам іздейтін Jump Search алгоритмінің оңтайлы қадамы (step size) нешеге тең болуы тиіс?",
    options: [
      {
        id: "13e59288-2eb4-494c-8eb1-e252cb6790b1",
        text: "sqrt(n) (квадрат түбір n)"
      },
      {
        id: "a146e210-5c8b-42a4-aa0e-13ad677e3c6e",
        text: "log n"
      },
      {
        id: "3017f7e4-eecd-416e-9bcb-1b5a3eb3f03a",
        text: "n / 2"
      },
      {
        id: "e1f5f3e5-4667-4d83-b1a6-94ee3ec96643",
        text: "2"
      }
    ],
    correctOptionIds: [
      "13e59288-2eb4-494c-8eb1-e252cb6790b1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b27",
    subjectId: SubjectId.ALGO,
    text: "Jump Search алгоритмінің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t05-b27-op1",
        text: "O(sqrt(n))"
      },
      {
        id: "algo-t05-b27-op2",
        text: "O(log n)"
      },
      {
        id: "algo-t05-b27-op3",
        text: "O(n)"
      },
      {
        id: "algo-t05-b27-op4",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b27-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "af2956fe-2f3d-4d0a-91d0-e189c7a83c62",
    subjectId: SubjectId.ALGO,
    text: "Ізделетін кілттің мәніне қарай оның массивтегі орнын пропорционалды болжайтын (мысалы, телефон кітапшасынан іздегендей) алгоритм қалай аталады?",
    options: [
      {
        id: "517e74e1-964c-473e-b867-b93d0b9c7fa7",
        text: "Интерполяциялық іздеу (Interpolation Search)"
      },
      {
        id: "d40e0441-dff2-408b-8056-2be083d84b7e",
        text: "Екілік іздеу (Binary Search)"
      },
      {
        id: "8b7a0191-46e8-4636-98d2-fa6cea165c95",
        text: "Экспоненциалды іздеу"
      },
      {
        id: "03ab3db7-5893-4efc-8c35-d6ddc05d7fe6",
        text: "Сызықтық іздеу"
      }
    ],
    correctOptionIds: [
      "517e74e1-964c-473e-b867-b93d0b9c7fa7"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "de27e00d-c93c-4b86-bb80-89d9e26c4ce9",
    subjectId: SubjectId.ALGO,
    text: "Интерполяциялық іздеу (Interpolation Search) элементтері біркелкі таралған массивте қандай уақыт күрделілігін көрсетеді?",
    options: [
      {
        id: "342245bf-adc8-449c-bb00-470639651e8d",
        text: "O(log(log n))"
      },
      {
        id: "80de3fbf-9263-4aad-b73a-ac92db346fb0",
        text: "O(log n)"
      },
      {
        id: "04dbb581-5f97-4639-a204-cd22bedbce66",
        text: "O(n)"
      },
      {
        id: "f783c022-3fd5-4f45-a4ae-1652c68836b0",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "342245bf-adc8-449c-bb00-470639651e8d"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b28",
    subjectId: SubjectId.ALGO,
    text: "Интерполяциялық іздеудегі орынды есептейтін негізгі формула неге негізделген?",
    options: [
      {
        id: "algo-t05-b28-op1",
        text: "Сызықтық интерполяция формуласына (кілттің шеткі мәндер арасындағы орнының қатынасы)"
      },
      {
        id: "algo-t05-b28-op2",
        text: "Кездейсоқ сандар генераторына"
      },
      {
        id: "algo-t05-b28-op3",
        text: "Фибоначчи сандарына"
      },
      {
        id: "algo-t05-b28-op4",
        text: "Стек өлшеміне"
      }
    ],
    correctOptionIds: [
      "algo-t05-b28-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b29",
    subjectId: SubjectId.ALGO,
    text: "Экспоненциалды іздеу (Exponential Search) алгоритмі қалай жұмыс істейді?",
    options: [
      {
        id: "algo-t05-b29-op1",
        text: "Іздеу ауқымын 1, 2, 4, 8, 16... сияқты экспоненциалды арттырып, кілттен асатын шекараны тапқан соң сол аралықта Binary Search орындайды"
      },
      {
        id: "algo-t05-b29-op2",
        text: "Іздеуді әрқашан массивтің соңынан бастайды"
      },
      {
        id: "algo-t05-b29-op3",
        text: "Массивті үш тең бөлікке бөліп іздейді"
      },
      {
        id: "algo-t05-b29-op4",
        text: "Ол тек хэштерді іздеу үшін қолданылады"
      }
    ],
    correctOptionIds: [
      "algo-t05-b29-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b30",
    subjectId: SubjectId.ALGO,
    text: "Экспоненциалды іздеу қай кезде өте тиімді болып табылады?",
    options: [
      {
        id: "algo-t05-b30-op1",
        text: "Массив өлшемі шексіз немесе өте үлкен болып, ізделетін элемент массивтің басына жақын орналасқан жағдайда"
      },
      {
        id: "algo-t05-b30-op2",
        text: "Массив толық сұрыпталмағанда"
      },
      {
        id: "algo-t05-b30-op3",
        text: "Элемент массивтің қақ ортасында орналасса"
      },
      {
        id: "algo-t05-b30-op4",
        text: "Tек теріс сандарды іздегенде"
      }
    ],
    correctOptionIds: [
      "algo-t05-b30-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d06834e8-ae6f-4ff7-9c29-aaecd4e94784",
    subjectId: SubjectId.ALGO,
    text: "Массивті екі емес, үш тең бөлікке бөліп іздейтін Үштік іздеу (Ternary Search) алгоритмінің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "c49475f4-5c3f-46a5-ba6f-b687f5f753e5",
        text: "O(log_3 n)"
      },
      {
        id: "96b7cc48-85c0-4f89-976c-b9647fc392d7",
        text: "O(log_2 n)"
      },
      {
        id: "ceddf275-2a6f-41cf-a440-658129663fed",
        text: "O(n)"
      },
      {
        id: "b683628d-7625-435b-b184-65dace5c99f9",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "c49475f4-5c3f-46a5-ba6f-b687f5f753e5"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b31",
    subjectId: SubjectId.ALGO,
    text: "Неліктен бағдарламалауда Ternary Search-ке қарағанда Binary Search жиі қолданылады?",
    options: [
      {
        id: "algo-t05-b31-op1",
        text: "Ternary Search әр қадамда көбірек салыстыру орындайды (әр итерацияда 2 шарт тексеріледі), сондықтан оның орташа уақыты сәл ұзағырақ болады"
      },
      {
        id: "algo-t05-b31-op2",
        text: "Ternary Search тек 3 элементтен тұратын массивтерде ғана жұмыс істейді"
      },
      {
        id: "algo-t05-b31-op3",
        text: "Ternary Search өте көп қосымша жадты талап етеді"
      },
      {
        id: "algo-t05-b31-op4",
        text: "Ternary Search тек рекурсивті жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "algo-t05-b31-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b32",
    subjectId: SubjectId.ALGO,
    text: "Fibonacci Search (Фибоначчи іздеуі) алгоритмінің Binary Search-тен басты ерекшелігі неде?",
    options: [
      {
        id: "algo-t05-b32-op1",
        text: "Ол бөлу үшін көбейту мен бөлу амалдарын қолданбайды, тек қосу мен азайтуды (Фибоначчи сандарын) қолданады, бұл төмен деңгейде тиімді"
      },
      {
        id: "algo-t05-b32-op2",
        text: "Ол сұрыпталмаған массивтерде де жұмыс істейді"
      },
      {
        id: "algo-t05-b32-op3",
        text: "Ол тек Фибоначчи сандарының өзін іздейді"
      },
      {
        id: "algo-t05-b32-op4",
        text: "Ол жадты мүлдем қолданбайды"
      }
    ],
    correctOptionIds: [
      "algo-t05-b32-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b33",
    subjectId: SubjectId.ALGO,
    text: "Біріктіру арқылы сұрыптау (Merge Sort) алгоритмінің кеңістіктік (space) күрделілігі қандай?",
    options: [
      {
        id: "algo-t05-b33-op1",
        text: "O(n) (уақытша қосымша массив қажет болғандықтан)"
      },
      {
        id: "algo-t05-b33-op2",
        text: "O(1)"
      },
      {
        id: "algo-t05-b33-op3",
        text: "O(log n)"
      },
      {
        id: "algo-t05-b33-op4",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b33-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b34",
    subjectId: SubjectId.ALGO,
    text: "Сұрыптау алгоритмдеріндегі \"In-place\" (орнында) қасиеті нені білдіреді?",
    options: [
      {
        id: "algo-t05-b34-op1",
        text: "Сұрыптау үшін қосымша жад көлемі O(1) немесе O(log n) сияқты өте аз тұрақты шамадан аспайды"
      },
      {
        id: "algo-t05-b34-op2",
        text: "Сұрыпталған элементтер жадтағы орнын өзгертпейді"
      },
      {
        id: "algo-t05-b34-op3",
        text: "Сұрыптау бағдарлама жұмысын тоқтатпай орындалады"
      },
      {
        id: "algo-t05-b34-op4",
        text: "Сұрыптау тек стекте ғана жасалады"
      }
    ],
    correctOptionIds: [
      "algo-t05-b34-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b35",
    subjectId: SubjectId.ALGO,
    text: "Төмендегілердің қайсысы \"In-place\" (орнында) сұрыптау алгоритмі болып табылады?",
    options: [
      {
        id: "algo-t05-b35-op1",
        text: "Quick Sort, Heap Sort, Bubble Sort"
      },
      {
        id: "algo-t05-b35-op2",
        text: "Merge Sort, Radix Sort"
      },
      {
        id: "algo-t05-b35-op3",
        text: "Counting Sort, Bucket Sort"
      },
      {
        id: "algo-t05-b35-op4",
        text: "Сыртқы біріктіру сұрыптауы"
      }
    ],
    correctOptionIds: [
      "algo-t05-b35-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "34db90a9-c6ae-4d31-9384-21d704d6ad03",
    subjectId: SubjectId.ALGO,
    text: "Сұрыпталмаған массивтегі белгілі бір элементті сызықтық іздеудің (Linear Search) ең үздік (best-case) күрделілігі қандай?",
    options: [
      {
        id: "a6a0c417-9464-4b7e-b9aa-b7549f6adb4c",
        text: "O(1) (ізделетін элемент массивтің ең бірінші орнында тұрса)"
      },
      {
        id: "28755251-4349-4227-91e6-316ccfdcedd4",
        text: "O(n)"
      },
      {
        id: "4e88c388-b2b4-48ac-9bb1-a6594e971b05",
        text: "O(log n)"
      },
      {
        id: "08b92fe3-7681-4a3e-972c-04fc5c3d4aff",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "a6a0c417-9464-4b7e-b9aa-b7549f6adb4c"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "359c1426-3b3d-46e7-87ed-3f1fcb06a3b7",
    subjectId: SubjectId.ALGO,
    text: "Көпіршікті сұрыптауда (Bubble Sort) массивтің алдын ала сұрыпталғанын анықтап, O(n) уақытында жұмысты ерте аяқтау үшін не істеу керек?",
    options: [
      {
        id: "3ee1e599-e802-4713-8c07-5b87a83b81d8",
        text: "Ағымдағы айналымда ешқандай элементтің орны ауыспағанын анықтайтын логикалық жалаушаны (flag / swapped) енгізу"
      },
      {
        id: "0159dd61-a0c9-4770-9404-0b710463b497",
        text: "Рекурсивті шақыруды өшіру"
      },
      {
        id: "b6fb5994-7750-4dcc-8b1d-e32793385b4e",
        text: "Массивті екіге бөлу"
      },
      {
        id: "b9133ea1-0cf0-42d3-9af7-094428bead2d",
        text: "Сұрыптауды соңынан бастау"
      }
    ],
    correctOptionIds: [
      "3ee1e599-e802-4713-8c07-5b87a83b81d8"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f83fca1c-e3d0-4ca8-b1f5-036a061639f2",
    subjectId: SubjectId.ALGO,
    text: "Таңдау арқылы сұрыптаудың (Selection Sort) орташа, ең нашар және ең жақсы жағдайдағы уақыттық күрделілігі әрқашан бірдей O(n^2) болуының себебі неде?",
    options: [
      {
        id: "5ca8d337-b727-4106-9625-7209bbfbb8b4",
        text: "Ол массивтің бастапқы күйіне қарамастан әрқашан ең кіші элементті іздеу үшін толық айналым жасап салыстырады"
      },
      {
        id: "4ecee218-a65d-4ba5-a458-0d44095794b9",
        text: "Ол рекурсияны тым терең қолданады"
      },
      {
        id: "51836271-87a2-4ba9-8b27-e8913e1d0ba1",
        text: "Ол әрқашан қосымша массив жасайды"
      },
      {
        id: "91beb2cb-e650-498d-9628-afc8e49ec3e7",
        text: "Ол тек екіөлшемді массивтермен жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "5ca8d337-b727-4106-9625-7209bbfbb8b4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b36",
    subjectId: SubjectId.ALGO,
    text: "Selection Sort алгоритмі тұрақты ма?",
    options: [
      {
        id: "algo-t05-b36-op1",
        text: "Жоқ, ол әдетте тұрақсыз (unstable), өйткені алыстағы элементтерді алмастыру ортадағы бірдей элементтердің ретін бұзуы мүмкін"
      },
      {
        id: "algo-t05-b36-op2",
        text: "Иә, ол толықтай тұрақты"
      },
      {
        id: "algo-t05-b36-op3",
        text: "Тек бүтін сандар үшін тұрақты"
      },
      {
        id: "algo-t05-b36-op4",
        text: "Тек теріс емес сандар үшін тұрақты"
      }
    ],
    correctOptionIds: [
      "algo-t05-b36-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b37",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі алгоритмдердің қайсысы әдетте тұрақты (stable) сұрыптауға жатады?",
    options: [
      {
        id: "algo-t05-b37-op1",
        text: "Merge Sort, Insertion Sort, Bubble Sort"
      },
      {
        id: "algo-t05-b37-op2",
        text: "Quick Sort, Heap Sort, Selection Sort"
      },
      {
        id: "algo-t05-b37-op3",
        text: "Shell Sort, Selection Sort"
      },
      {
        id: "algo-t05-b37-op4",
        text: "Тұрақты сұрыптау алгоритмдері болмайды"
      }
    ],
    correctOptionIds: [
      "algo-t05-b37-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3780a030-4846-45c3-8e5e-b80ee0bc8181",
    subjectId: SubjectId.ALGO,
    text: "Екі сұрыпталған массивті біріктіру (merging two sorted arrays) алгоритмінің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "44787292-68c0-474d-b192-0d693f4fd0b5",
        text: "O(N + M), мұндағы N және M - массивтердің өлшемдері"
      },
      {
        id: "56e72c96-65bb-40f6-85b0-9f119c6a9795",
        text: "O(N * M)"
      },
      {
        id: "07f94861-413e-4d8a-a489-c65daf69d24c",
        text: "O(N log N)"
      },
      {
        id: "abba6f9d-bd73-448a-a40e-ea28142d84d5",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "44787292-68c0-474d-b192-0d693f4fd0b5"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b38",
    subjectId: SubjectId.ALGO,
    text: "Массивтің \"инверсиясы\" (inversion) деген не?",
    options: [
      {
        id: "algo-t05-b38-op1",
        text: "i < j бола тұра arr[i] > arr[j] шарты орындалатын элементтер жұбы (массивтің ретсіздік дәрежесін көрсетеді)"
      },
      {
        id: "algo-t05-b38-op2",
        text: "Массив элементтерінің кері ретпен жазылуы"
      },
      {
        id: "algo-t05-b38-op3",
        text: "Массивтегі теріс сандардың жиынтығы"
      },
      {
        id: "algo-t05-b38-op4",
        text: "Массив элементтерінің нөлге тең болуы"
      }
    ],
    correctOptionIds: [
      "algo-t05-b38-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b39",
    subjectId: SubjectId.ALGO,
    text: "Массивтегі инверсиялар саны 0-ге тең болса, бұл нені білдіреді?",
    options: [
      {
        id: "algo-t05-b39-op1",
        text: "Массив толығымен өсу ретімен сұрыпталған"
      },
      {
        id: "algo-t05-b39-op2",
        text: "Массив толығымен кері сұрыпталған"
      },
      {
        id: "algo-t05-b39-op3",
        text: "Массивте ешқандай элемент жоқ"
      },
      {
        id: "algo-t05-b39-op4",
        text: "Массивте тек нөлдер ғана бар"
      }
    ],
    correctOptionIds: [
      "algo-t05-b39-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1b657508-c52c-4fed-820c-fe13dab97228",
    subjectId: SubjectId.ALGO,
    text: "Bubble Sort немесе Insertion Sort алгоритмдерінде көршілес екі элементті алмастырғанда (swap) инверсиялар саны қалай өзгереді?",
    options: [
      {
        id: "2b3a6331-ba95-4d91-8798-485795f6f304",
        text: "Дәл 1-ге азаяды"
      },
      {
        id: "eacca0e2-6230-40a3-bf9f-8fc776b02534",
        text: "Екі есеге азаяды"
      },
      {
        id: "1069191e-e309-4b0f-8e1c-21fb7e7310e0",
        text: "Өзгеріссіз қалады"
      },
      {
        id: "7119d8cf-3f95-4932-a78c-be61cb233182",
        text: "2-ге артады"
      }
    ],
    correctOptionIds: [
      "2b3a6331-ba95-4d91-8798-485795f6f304"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9d46d8d2-5cb6-456c-b4dc-24053119c9a3",
    subjectId: SubjectId.ALGO,
    text: "Көршілес элементтерді ғана алмастыратын кез келген сұрыптау алгоритмінің орташа уақыт күрделілігі қандай шамадан төмен бола алмайды?",
    options: [
      {
        id: "bb130438-1984-428b-8e4b-aa2fa259c32f",
        text: "Omega(n^2) (себебі орташа инверсиялар саны n(n-1)/4-ке тең)"
      },
      {
        id: "e47aaf24-b32f-4026-94e2-9c288cc68a88",
        text: "Omega(n log n)"
      },
      {
        id: "97b1a556-b413-4ab6-b028-dc46336fe54c",
        text: "Omega(n)"
      },
      {
        id: "6bee5488-096b-441b-b2bf-ba81bf06909c",
        text: "Omega(1)"
      }
    ],
    correctOptionIds: [
      "bb130438-1984-428b-8e4b-aa2fa259c32f"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3c7a5e2f-00ac-4b58-973d-68e445b9febd",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі алгоритмдердің қайсысы көршілес емес элементтерді алмастыру арқылы O(n log n) жылдамдығына жетеді?",
    options: [
      {
        id: "4af589a1-a770-440b-be5e-aaadc8b98196",
        text: "Quick Sort, Heap Sort, Shell Sort"
      },
      {
        id: "6205d098-f053-4996-baac-ff3604792775",
        text: "Bubble Sort, Insertion Sort"
      },
      {
        id: "f0089189-b2db-4577-ae70-1339a58dddc9",
        text: "Selection Sort, Bubble Sort"
      },
      {
        id: "fb24b353-999a-445a-b61b-057367d1092a",
        text: "Ешқайсысы"
      }
    ],
    correctOptionIds: [
      "4af589a1-a770-440b-be5e-aaadc8b98196"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b40",
    subjectId: SubjectId.ALGO,
    text: "Quick Sort алгоритміндегі орташа жағдайдағы рекурсивті шақырулар стегінің тереңдігі қандай?",
    options: [
      {
        id: "algo-t05-b40-op1",
        text: "O(log n)"
      },
      {
        id: "algo-t05-b40-op2",
        text: "O(n)"
      },
      {
        id: "algo-t05-b40-op3",
        text: "O(1)"
      },
      {
        id: "algo-t05-b40-op4",
        text: "O(n log n)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b40-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b41",
    subjectId: SubjectId.ALGO,
    text: "Quick Sort-та стек толуынан (Stack Overflow) сақтану үшін қандай тәсіл қолданылады?",
    options: [
      {
        id: "algo-t05-b41-op1",
        text: "Әрқашан екі бөлшектің кішісін бірінші рекурсивті сұрыптап, үлкен бөлшекті құйрықты рекурсиямен (tail call) өңдеу"
      },
      {
        id: "algo-t05-b41-op2",
        text: "Рекурсия тереңдігін тек 5-пен шектеу"
      },
      {
        id: "algo-t05-b41-op3",
        text: "Массивті тек 10 элементке дейін сұрыптау"
      },
      {
        id: "algo-t05-b41-op4",
        text: "Жаһандық массивтерді қолдану"
      }
    ],
    correctOptionIds: [
      "algo-t05-b41-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b41a4bfd-47d7-4a29-b8ac-9d1aeceb1ddf",
    subjectId: SubjectId.ALGO,
    text: "Сұрыптау алгоритмінің \"ішкі\" (internal) және \"сыртқы\" (external) деп бөлінуі неге байланысты?",
    options: [
      {
        id: "83b44e39-69d3-4093-9031-442b79113d33",
        text: "Сұрыпталатын деректердің жедел жадқа (RAM) толық сыятындығына немесе сыртқы дискілерді қажет ететіндігіне байланысты"
      },
      {
        id: "1662f4c1-c16b-48f7-8f5e-8ca86dc3e3d7",
        text: "Бағдарламаның интерфейсіне байланысты"
      },
      {
        id: "6eb68164-b251-4310-8895-95ea644277dd",
        text: "Қолданылатын айнымалылардың типіне"
      },
      {
        id: "232dbced-5931-41d6-8ac0-101cef30a2f2",
        text: "Рекурсияның қолданылуына"
      }
    ],
    correctOptionIds: [
      "83b44e39-69d3-4093-9031-442b79113d33"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "43c34832-476c-47e6-a476-2e8ef0a4e8a6",
    subjectId: SubjectId.ALGO,
    text: "Екілік іздеу (Binary Search) алгоритмінде ортаңғы индексті `mid = (low + high) / 2` деп есептеуде қандай ықтимал қателік (bug) туындауы мүмкін?",
    options: [
      {
        id: "42cb741f-593b-4675-8851-017f073929b4",
        text: "`low + high` қосындысы бүтін санның максималды шегінен асып кетіп (integer overflow), теріс санға айналуы мүмкін"
      },
      {
        id: "2091555f-6e22-4f26-b545-a6e238b274e8",
        text: "Бөлу әрқашан нақты санды қайтарады"
      },
      {
        id: "a5198038-edb3-4ace-8000-9fdd07764e84",
        text: "Индекс әрқашан 0 болады"
      },
      {
        id: "6bec6e69-d21e-4645-bbcf-4c477e50a958",
        text: "Компилятор бұл өрнекті мүлдем өткізбейді"
      }
    ],
    correctOptionIds: [
      "42cb741f-593b-4675-8851-017f073929b4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6c0f91c0-4253-4cb5-a3bc-24f5d0f65680",
    subjectId: SubjectId.ALGO,
    text: "Бүтін сандардың толу қатесін (integer overflow) болдырмау үшін Binary Search ортаңғы индексін қалай дұрыс есептеген жөн?",
    options: [
      {
        id: "8c97a4d1-a20c-4495-b996-8ad2887cb57e",
        text: "mid = low + (high - low) / 2"
      },
      {
        id: "be2f8dd3-9408-4a35-85c2-9a5ab8b4a47e",
        text: "mid = (low - high) / 2"
      },
      {
        id: "a652bb1e-8eb7-41a9-b12a-3fde005557dd",
        text: "mid = high - (low + high) / 2"
      },
      {
        id: "c8c000ee-c838-45bc-bdf2-227c02229e41",
        text: "mid = low * 2 + high"
      }
    ],
    correctOptionIds: [
      "8c97a4d1-a20c-4495-b996-8ad2887cb57e"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b42",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық іздеудің Binary Search-тен жалғыз практикалық артықшылығы неде?",
    options: [
      {
        id: "algo-t05-b42-op1",
        text: "Ол массив элементтерінің сұрыпталуын талап етпейді және кез келген деректе жұмыс істей береді"
      },
      {
        id: "algo-t05-b42-op2",
        text: "Оның орындалу уақыты әрқашан O(1) болады"
      },
      {
        id: "algo-t05-b42-op3",
        text: "Ол ешқандай жад алмайды"
      },
      {
        id: "algo-t05-b42-op4",
        text: "Оны тек рекурсиямен жазуға болады"
      }
    ],
    correctOptionIds: [
      "algo-t05-b42-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9e30cd73-8baf-4970-90b5-9afb3d2a1aa4",
    subjectId: SubjectId.ALGO,
    text: "Сұрыпталған массивте бірдей элементтер кездессе, Binary Search олардың ең біріншісін (first occurrence) табу үшін қалай өзгертіледі?",
    options: [
      {
        id: "4888d7e1-e0a8-4f2a-895e-ef2c676f916f",
        text: "Элемент табылғанда бірден тоқтамай, іздеу ауқымын солға қарай (`high = mid - 1`) қысып, біріншісін іздеуді жалғастырады"
      },
      {
        id: "058b305f-d630-4849-a990-374ee103f0ed",
        text: "Элемент табылғанда оңға қарай жылжиды"
      },
      {
        id: "a99615f1-c39d-4cad-bdf4-bc022bbead7a",
        text: "Массивті кері сұрыптайды"
      },
      {
        id: "14322c4d-bcc5-4ac1-a9d0-0d8ca30f737b",
        text: "Ол автоматты түрде біріншісін қайтарады"
      }
    ],
    correctOptionIds: [
      "4888d7e1-e0a8-4f2a-895e-ef2c676f916f"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "233e226d-196a-4950-ad26-8529f5abdf7d",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасында сұрыпталған массивтен кілттен кіші емес (>=) ең бірінші элементтің нұсқауышын қайтаратын функция қалай аталады?",
    options: [
      {
        id: "fa9cec6b-d0df-488c-ae40-95871527e7cf",
        text: "std::lower_bound()"
      },
      {
        id: "62e9d629-a334-4967-aacc-e0e24fd35220",
        text: "std::upper_bound()"
      },
      {
        id: "91698d20-06c6-4fa4-b5d9-1cd85329cea5",
        text: "std::binary_search()"
      },
      {
        id: "d56ac7be-a7aa-4dba-b2db-2b27253866ec",
        text: "std::equal_range()"
      }
    ],
    correctOptionIds: [
      "fa9cec6b-d0df-488c-ae40-95871527e7cf"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "78e4c5c1-64b5-42ec-8e14-f1e278899abf",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасында сұрыпталған массивтен кілттен үлкен (>) ең бірінші элементтің нұсқауышын қайтаратын функция қалай аталады?",
    options: [
      {
        id: "3d725455-bf4c-4351-86d8-975d85e180fb",
        text: "std::upper_bound()"
      },
      {
        id: "8a18b2fe-404d-446e-b415-bd55e2a160a6",
        text: "std::lower_bound()"
      },
      {
        id: "e5adad3b-aef1-4a41-90f8-6c49e1a9a482",
        text: "std::find_if()"
      },
      {
        id: "94d4f83a-570b-45d6-9538-ec64ed3ed4c0",
        text: "std::binary_search()"
      }
    ],
    correctOptionIds: [
      "3d725455-bf4c-4351-86d8-975d85e180fb"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2636b667-e2d7-46ae-ab87-f69a5df18ad1",
    subjectId: SubjectId.ALGO,
    text: "Екілік іздеу алгоритмінде әр қадам сайын іздеу ауқымы (search space) қанша есеге қысқарып отырады?",
    options: [
      {
        id: "c68acfca-071f-44ee-b496-5d65d91aa869",
        text: "2 есеге"
      },
      {
        id: "64ce68aa-612c-4a38-b27d-cfe6572b3899",
        text: "3 есеге"
      },
      {
        id: "70bfeb0a-4ef5-4327-b994-1dfd5846ed1d",
        text: "10 есеге"
      },
      {
        id: "e8b7e49f-fd24-42fd-8bfd-3c669701b370",
        text: "Қысқармайды"
      }
    ],
    correctOptionIds: [
      "c68acfca-071f-44ee-b496-5d65d91aa869"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b43",
    subjectId: SubjectId.ALGO,
    text: "Сұрыптау алгоритмдеріндегі \"Adaptive\" (бейімделгіш) қасиеті нені білдіреді?",
    options: [
      {
        id: "algo-t05-b43-op1",
        text: "Деректердің алдын ала ішінара сұрыпталғанын ескеріп, орындалу уақытын автоматты түрде азайтатын алгоритм"
      },
      {
        id: "algo-t05-b43-op2",
        text: "Кез келген деректер типіне автоматты бейімделетін"
      },
      {
        id: "algo-t05-b43-op3",
        text: "Сыртқы жад ресурстарына бейімделетін"
      },
      {
        id: "algo-t05-b43-op4",
        text: "Tек оң сандармен жұмыс істейтін"
      }
    ],
    correctOptionIds: [
      "algo-t05-b43-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b44",
    subjectId: SubjectId.ALGO,
    text: "Tөmenдегілердің қайсысы \"Adaptive\" (бейімделгіш) сұрыптау алгоритміне жатады?",
    options: [
      {
        id: "algo-t05-b44-op1",
        text: "Insertion Sort (Кірістіру арқылы сұрыптау)"
      },
      {
        id: "algo-t05-b44-op2",
        text: "Selection Sort (Таңдау арқылы сұрыптау)"
      },
      {
        id: "algo-t05-b44-op3",
        text: "Heap Sort (Үйінді сұрыптау)"
      },
      {
        id: "algo-t05-b44-op4",
        text: "Radix Sort (Разрядтық сұрыптау)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b44-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c85404f5-1773-408b-877b-d4c8e7c43dc5",
    subjectId: SubjectId.ALGO,
    text: "Көпіршікті сұрыптауды (Bubble Sort) әр айналымда ең үлкен элемент оңға, ал ең кіші элемент солға қатар жылжитындай екі бағытты етіп оңтайландыру қалай аталады?",
    options: [
      {
        id: "a192a05e-73a3-455a-9991-7d881f2fddb6",
        text: "Шейкерлік сұрыптау (Shaker / Cocktail Sort)"
      },
      {
        id: "30589132-7470-48a9-adae-ce8eb03d0faa",
        text: "Таңдау арқылы сұрыптау"
      },
      {
        id: "f229c504-d8e3-4a99-9379-72efeb0fad92",
        text: "Қабықша сұрыптауы"
      },
      {
        id: "be67d1b6-ad33-4f0c-bf93-abbf4d436d40",
        text: "Жылдам сұрыптау"
      }
    ],
    correctOptionIds: [
      "a192a05e-73a3-455a-9991-7d881f2fddb6"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0b7929df-6dff-480d-b35a-62ce84c5fd6e",
    subjectId: SubjectId.ALGO,
    text: "Массивтің белгілі бір аралығын `std::lower_bound` және `std::upper_bound` арқылы іздеудің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "f3e937b5-81d3-4e64-b1fb-1c52b84079df",
        text: "O(log N)"
      },
      {
        id: "b610599f-ae8b-49a4-9fe2-640f15ccbd07",
        text: "O(N)"
      },
      {
        id: "07d8fe44-0205-43ea-94b4-5e579ab9c54b",
        text: "O(N log N)"
      },
      {
        id: "7b3d2f4f-4a22-4078-9906-4afd05b180f3",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "f3e937b5-81d3-4e64-b1fb-1c52b84079df"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "73477cf4-5f78-49c1-9230-dc6bf9f14d74",
    subjectId: SubjectId.ALGO,
    text: "Массивтен екі бірдей элементті салыстырғанда олардың орындарын алмастыру орындалатын сұрыптау алгоритмдері қалай аталады?",
    options: [
      {
        id: "1f5b365c-a6ee-415e-a0ff-e22f532a795c",
        text: "Салыстыру арқылы сұрыптау алгоритмдері (Comparison-based sorting)"
      },
      {
        id: "71067dd0-6e1b-4d85-b418-5c29b33c2c28",
        text: "Салыстырусыз сұрыптаулар"
      },
      {
        id: "28462440-dfc8-49ff-91cd-495d0f67e840",
        text: "Биттік сұрыптаулар"
      },
      {
        id: "f6b3b19c-4e3b-42d6-a4e9-e89bcbfc0320",
        text: "Логикалық сұрыптаулар"
      }
    ],
    correctOptionIds: [
      "1f5b365c-a6ee-415e-a0ff-e22f532a795c"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b45",
    subjectId: SubjectId.ALGO,
    text: "Counting Sort алгоритмінің ең үлкен кемшілігі қандай?",
    options: [
      {
        id: "algo-t05-b45-op1",
        text: "Егер элементтер диапазоны (k) тым үлкен болса, O(k) қосымша жады қажет болып, жадты өте көп шығындайды"
      },
      {
        id: "algo-t05-b45-op2",
        text: "Ол тек теріс сандарда жұмыс істейді"
      },
      {
        id: "algo-t05-b45-op3",
        text: "Оның уақыт күрделілігі O(N^2) болады"
      },
      {
        id: "algo-t05-b45-op4",
        text: "Оны рекурсивті жазу мүмкін емес"
      }
    ],
    correctOptionIds: [
      "algo-t05-b45-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "75494946-bc91-4a21-a0c5-5a49b534ad4d",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасындағы `std::stable_sort` алгоритмі қай сұрыптауды қолданады және оның кеңістік күрделілігі қандай?",
    options: [
      {
        id: "58d4a899-b8ed-4982-8f92-57e1d85530e4",
        text: "Тұрақты Merge Sort алгоритмін қолданады, кеңістік күрделілігі O(N)"
      },
      {
        id: "b0407a71-e933-412a-b061-bc9937e08647",
        text: "Quick Sort алгоритмін қолданады, кеңістік күрделілігі O(1)"
      },
      {
        id: "7e2febc3-4308-4abb-bc5c-f8721a005114",
        text: "Heap Sort алгоритмін қолданады, кеңістік күрделілігі O(N log N)"
      },
      {
        id: "e20da877-390b-4dee-91f8-e40bc12f57ec",
        text: "Bubble Sort қолданады, кеңістік күрделілігі O(N^2)"
      }
    ],
    correctOptionIds: [
      "58d4a899-b8ed-4982-8f92-57e1d85530e4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b46",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасындағы `std::sort` әдетте қандай сұрыптау алгоритмін қолданады?",
    options: [
      {
        id: "algo-t05-b46-op1",
        text: "Introsort (Қуатты гибрид: Quick Sort, Heap Sort және Insertion Sort бірігуі)"
      },
      {
        id: "algo-t05-b46-op2",
        text: "Tек таза Quick Sort"
      },
      {
        id: "algo-t05-b46-op3",
        text: "Tек таза Merge Sort"
      },
      {
        id: "algo-t05-b46-op4",
        text: "Bubble Sort"
      }
    ],
    correctOptionIds: [
      "algo-t05-b46-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b47",
    subjectId: SubjectId.ALGO,
    text: "Introsort алгоритмі (C++ `std::sort`-та қолданылатын) несімен ерекшеленеді?",
    options: [
      {
        id: "algo-t05-b47-op1",
        text: "Ол Quick Sort-тан бастайды, егер рекурсия тереңдігі тым ұзарып кетсе (worst-case қаупі), автоматты түрде Heap Sort-қа ауысады"
      },
      {
        id: "algo-t05-b47-op2",
        text: "Ол тек кіші сандарды сұрыптайды"
      },
      {
        id: "algo-t05-b47-op3",
        text: "Ол жадты мүлдем қолданбайды"
      },
      {
        id: "algo-t05-b47-op4",
        text: "Ол тек орындалу уақытында анықталады"
      }
    ],
    correctOptionIds: [
      "algo-t05-b47-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b3ede097-045a-4fde-ad81-d89968c79e7c",
    subjectId: SubjectId.ALGO,
    text: "Жартылай сұрыпталған массивте (мысалы, тек 1-2 элементі ғана қате орында тұрған) ең жылдам жұмыс істейтін алгоритм қандай?",
    options: [
      {
        id: "cbd6cf73-c001-4295-a638-69670a81c540",
        text: "Insertion Sort (Кірістіру арқылы сұрыптау)"
      },
      {
        id: "77be61c4-86a8-4e4d-8900-e6dbcfc1d0e2",
        text: "Selection Sort (Таңдау арқылы сұрыптау)"
      },
      {
        id: "3d4dbe7d-8abe-4cf6-b1e0-22fa420b961f",
        text: "Heap Sort (Үйінді сұрыптау)"
      },
      {
        id: "1744e108-8de4-4fe7-a815-88ad1f98ad6e",
        text: "Radix Sort"
      }
    ],
    correctOptionIds: [
      "cbd6cf73-c001-4295-a638-69670a81c540"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b48",
    subjectId: SubjectId.ALGO,
    text: "Radix Sort-тың ең нашар және орташа жағдайдағы уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t05-b48-op1",
        text: "O(d * (n + k)), мұндағы d - сандардың разряд саны, k - санау базасы (мысалы, 10)"
      },
      {
        id: "algo-t05-b48-op2",
        text: "O(n log n)"
      },
      {
        id: "algo-t05-b48-op3",
        text: "O(n^2)"
      },
      {
        id: "algo-t05-b48-op4",
        text: "O(n)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b48-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1e99e3cd-2c6f-40fa-a60e-280900f76b34",
    subjectId: SubjectId.ALGO,
    text: "Сұрыптау алгоритмдеріндегі \"Run-time\" және \"Compile-time\" сұрыптауының айырмашылығы қандай?",
    options: [
      {
        id: "fcb7f39c-2db3-47a1-9b19-ee490a6dbda4",
        text: "Compile-time сұрыптауы шаблондар арқылы компиляция кезеңінде толық есептеліп бітеді, ал Run-time бағдарлама орындалғанда сұрыптайды"
      },
      {
        id: "638150a8-2e09-44b7-8110-f92034f0340f",
        text: "Run-time сұрыптауы әрқашан O(1) болады"
      },
      {
        id: "e789025e-7c66-41bb-9a6e-14b63895cd6d",
        text: "Compile-time тек жаһандық массивтермен ғана орындалады"
      },
      {
        id: "162425b6-a045-4170-8603-b74156c33656",
        text: "Олардың арасында айырмашылық жоқ"
      }
    ],
    correctOptionIds: [
      "fcb7f39c-2db3-47a1-9b19-ee490a6dbda4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6cd14671-025f-4f7c-8433-8f8b1513813d",
    subjectId: SubjectId.ALGO,
    text: "Екілік іздеу алгоритмінде ізделетін элемент массивте жоқ болса, оның соңғы итерациясынан кейін қандай шарт орындалады?",
    options: [
      {
        id: "b3072ec2-4166-4c54-91c9-0a820d8c3569",
        text: "low > high (төменгі шек жоғарғы шектен асып кетеді)"
      },
      {
        id: "3bdafbf9-cf22-4211-a9be-f251a3457ee8",
        text: "low == high"
      },
      {
        id: "61fdc658-b177-44ab-8f8f-f7b3ed375a07",
        text: "low == 0"
      },
      {
        id: "03ccbec3-4227-4740-a814-5df8c618ccad",
        text: "high == 0"
      }
    ],
    correctOptionIds: [
      "b3072ec2-4166-4c54-91c9-0a820d8c3569"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9505b960-09bd-4656-8b5e-34d95fedeef4",
    subjectId: SubjectId.ALGO,
    text: "Массив элементтерін кездейсоқ араластыруға (shuffle) арналған Fisher-Yates алгоритмінің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "52a2d200-f208-4639-9860-a1d9d8421eba",
        text: "O(n)"
      },
      {
        id: "2f725eed-026b-4a94-97f9-8aafa4631150",
        text: "O(n log n)"
      },
      {
        id: "3e92101b-f772-4322-bea0-0a53afd454b4",
        text: "O(n^2)"
      },
      {
        id: "d9343940-9c4f-4e67-8370-446d2c244333",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "52a2d200-f208-4639-9860-a1d9d8421eba"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ea6ad705-fa23-4c2a-a2f9-3afe0a34923c",
    subjectId: SubjectId.ALGO,
    text: "Екілік іздеу (Binary Search) алгоритмінде әр қадамда ортаңғы элемент ізделетін кілттен кіші болса, келесі іздеу шекарасы қалай өзгереді?",
    options: [
      {
        id: "cd01b2ec-b489-4c05-b719-5364ca9b2343",
        text: "low = mid + 1 (іздеу ауқымы оң жақ жартыға ауысады)"
      },
      {
        id: "6fed1156-9f6c-4821-bcd5-3c05951d68c0",
        text: "high = mid - 1"
      },
      {
        id: "6313eb2f-da1c-4ee6-b68a-4bda313fe154",
        text: "low = mid"
      },
      {
        id: "dc0a1a4c-3784-4b81-ab0e-e46e7edd9f28",
        text: "high = mid"
      }
    ],
    correctOptionIds: [
      "cd01b2ec-b489-4c05-b719-5364ca9b2343"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "aaeda456-59e3-47b8-b48e-0b2ba97a1a17",
    subjectId: SubjectId.ALGO,
    text: "Екілік іздеу (Binary Search) алгоритмінде әр қадамда ортаңғы элемент ізделетін кілттен үлкен болса, келесі іздеу шекарасы қалай өзгереді?",
    options: [
      {
        id: "9a0ee212-05bc-483e-ab12-878cdcc415d4",
        text: "high = mid - 1 (іздеу ауқымы сол жақ жартыға ауысады)"
      },
      {
        id: "641de56e-c5fb-4c8f-bd19-66f834ddb416",
        text: "low = mid + 1"
      },
      {
        id: "dea6756b-d71c-46c8-8d1f-eb8a75b36833",
        text: "high = mid"
      },
      {
        id: "6f817922-8e05-4add-818d-0bd97750a720",
        text: "low = mid"
      }
    ],
    correctOptionIds: [
      "9a0ee212-05bc-483e-ab12-878cdcc415d4"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b49",
    subjectId: SubjectId.ALGO,
    text: "Сұрыптау алгоритмдеріндегі \"Pass\" (айналым / өту) түсінігі нені білдіреді?",
    options: [
      {
        id: "algo-t05-b49-op1",
        text: "Алгоритмнің массив элементтерін басынан аяғына дейін (немесе белгілі бір бөлігін) бір рет толық қарап шығуы"
      },
      {
        id: "algo-t05-b49-op2",
        text: "Жадты босату әрекетін"
      },
      {
        id: "algo-t05-b49-op3",
        text: "Функциядан қайтатын мәнді"
      },
      {
        id: "algo-t05-b49-op4",
        text: "Циклдың тоқтау шартын"
      }
    ],
    correctOptionIds: [
      "algo-t05-b49-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9b5dead1-3e31-4426-8149-55f726302361",
    subjectId: SubjectId.ALGO,
    text: "Bubble Sort алгоритмінде N элементтен тұратын массивті толық сұрыптау үшін ең көп дегенде неше өту (pass) қажет?",
    options: [
      {
        id: "8f195e4a-b6f4-411f-a3a1-556e5f193b4b",
        text: "N - 1"
      },
      {
        id: "754984cd-ad77-4bdb-9b60-cc36ceed2b45",
        text: "N / 2"
      },
      {
        id: "e99f10df-190c-4ebf-b4de-cc1e00c66d75",
        text: "log N"
      },
      {
        id: "b5a03441-126e-401e-bc83-55f5f8ea8aae",
        text: "N^2"
      }
    ],
    correctOptionIds: [
      "8f195e4a-b6f4-411f-a3a1-556e5f193b4b"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b50",
    subjectId: SubjectId.ALGO,
    text: "Сұрыптау алгоритмдерінде \"Pivot\" (тірек элемент) термині қай алгоритмге тән?",
    options: [
      {
        id: "algo-t05-b50-op1",
        text: "Quick Sort"
      },
      {
        id: "algo-t05-b50-op2",
        text: "Merge Sort"
      },
      {
        id: "algo-t05-b50-op3",
        text: "Heap Sort"
      },
      {
        id: "algo-t05-b50-op4",
        text: "Insertion Sort"
      }
    ],
    correctOptionIds: [
      "algo-t05-b50-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ec99fb4c-4b4d-4196-87b4-47e0e56d2726",
    subjectId: SubjectId.ALGO,
    text: "Bubble Sort алгоритмінде ең нашар элементтің (мысалы, ең кіші элемент массивтің ең соңында тұрса) өз орнына жетуі өте баяу жүретіндіктен, мұндай элементтерді не деп атайды?",
    options: [
      {
        id: "a7090db6-9926-4459-b849-fa9e0ca39a40",
        text: "Тасбақалар (Turtles)"
      },
      {
        id: "24f9c739-c12c-4361-a90d-b2938e9ee79f",
        text: "Қояндар (Rabbits)"
      },
      {
        id: "a6dd7ba3-d54d-4157-9c19-f48fb86e2a84",
        text: "Тастар (Rocks)"
      },
      {
        id: "1fbb2599-25af-4153-be36-a67b4e209bc5",
        text: "Жалаушалар (Flags)"
      }
    ],
    correctOptionIds: [
      "a7090db6-9926-4459-b849-fa9e0ca39a40"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a655012d-6bf1-42c3-a6bc-8af7529ad33d",
    subjectId: SubjectId.ALGO,
    text: "Bubble Sort алгоритмінде ең үлкен элементтің массив соңына өте жылдам бір айналымда-ақ жетуін не деп атайды?",
    options: [
      {
        id: "c96dea04-d5fd-4733-b781-37d4eb094bfe",
        text: "Қояндар (Rabbits)"
      },
      {
        id: "cb5fec0c-0839-48cd-a9d3-7b5ba24a3ab1",
        text: "Тасбақалар (Turtles)"
      },
      {
        id: "8882df68-e3ea-4d18-a94f-eee577762a76",
        text: "Жұлдыздар"
      },
      {
        id: "f7e62061-b6eb-4c48-ab9f-f2df427f6894",
        text: "Ұяшықтар"
      }
    ],
    correctOptionIds: [
      "c96dea04-d5fd-4733-b781-37d4eb094bfe"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "de828f01-f0ea-4ac1-aea2-2844bb02dc5e",
    subjectId: SubjectId.ALGO,
    text: "Массивті екіге бөлгеннен кейін әрбір бөлікті өсу ретімен сұрыптап, соңында екі нұсқауыш арқылы оларды біріктіретін алгоритм қандай?",
    options: [
      {
        id: "c571ae54-a3f6-49ed-932b-ff4b88371415",
        text: "Merge Sort"
      },
      {
        id: "5c5829e1-33e1-4807-9897-e45b377eebc4",
        text: "Quick Sort"
      },
      {
        id: "b0f25b34-1ca3-4555-b121-27353f85f68a",
        text: "Selection Sort"
      },
      {
        id: "c8a3bc46-b1d9-4324-8603-85a4f01ee561",
        text: "Shell Sort"
      }
    ],
    correctOptionIds: [
      "c571ae54-a3f6-49ed-932b-ff4b88371415"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3e960a22-c0a9-4b31-a64b-3d3281a41702",
    subjectId: SubjectId.ALGO,
    text: "Жадтың шектелуіне байланысты In-place сұрыптау маңызды болып табылатын үлкен жүйелерде Merge Sort-тың орнына көбіне қай алгоритм қолданылады?",
    options: [
      {
        id: "21c0c971-0474-4a5a-aa89-d3cd6f7dcc38",
        text: "Heap Sort (ол O(n log n) уақытын және O(1) қосымша жадын қажет етеді)"
      },
      {
        id: "f111bb2f-2b63-451e-bcb9-621be6412f19",
        text: "Bubble Sort"
      },
      {
        id: "1c3f7835-87d6-4bae-8cd8-860d49c999bb",
        text: "Counting Sort"
      },
      {
        id: "ba6f403a-a11a-4f20-baae-7537b8c7b0a2",
        text: "Radix Sort"
      }
    ],
    correctOptionIds: [
      "21c0c971-0474-4a5a-aa89-d3cd6f7dcc38"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0fccee63-4ab8-4e26-bd3c-37f52c851331",
    subjectId: SubjectId.ALGO,
    text: "Counting Sort алгоритмінде массив элементтерінің саны (N) диапазонынан (K) айтарлықтай үлкен болғанда (мысалы, N = 1000000, K = 10), оның тиімділігі қандай болады?",
    options: [
      {
        id: "ef7e53b5-d57f-43d5-8f1a-ec500c1dd106",
        text: "Өте жоғары болады (O(N) сызықтық уақытта жылдам бітеді)"
      },
      {
        id: "a24eb01c-0c64-4cf2-baaa-3a87f3b55826",
        text: "Өте баяу болады"
      },
      {
        id: "aefc34b5-d5be-4799-91c4-4d4304cbcf26",
        text: "Жүйеде жад таусылады"
      },
      {
        id: "ecb5c2a0-d762-4ee2-a701-b7e26f348d85",
        text: "Компиляция қатесі болады"
      }
    ],
    correctOptionIds: [
      "ef7e53b5-d57f-43d5-8f1a-ec500c1dd106"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b51",
    subjectId: SubjectId.ALGO,
    text: "Radix Sort-тың сұрыптау тұрақтылығын (stability) сақтауы маңызды ма?",
    options: [
      {
        id: "algo-t05-b51-op1",
        text: "Иә, өте маңызды, себебі разрядтар бойынша сұрыптағанда алдыңғы разрядтардың реті бұзылмауы тиіс"
      },
      {
        id: "algo-t05-b51-op2",
        text: "Жоқ, тұрақтылық Radix Sort үшін мүлдем маңызды емес"
      },
      {
        id: "algo-t05-b51-op3",
        text: "Tек соңғы қадамда ғана маңызды"
      },
      {
        id: "algo-t05-b51-op4",
        text: "Tек теріс сандарда маңызды"
      }
    ],
    correctOptionIds: [
      "algo-t05-b51-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b52",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі іздеу алгоритмдерінің қайсысы сұрыпталмаған массивтерде де жұмыс істей береді?",
    options: [
      {
        id: "algo-t05-b52-op1",
        text: "Linear Search (Сызықтық іздеу)"
      },
      {
        id: "algo-t05-b52-op2",
        text: "Binary Search (Екілік іздеу)"
      },
      {
        id: "algo-t05-b52-op3",
        text: "Jump Search (Секіру арқылы іздеу)"
      },
      {
        id: "algo-t05-b52-op4",
        text: "Interpolation Search"
      }
    ],
    correctOptionIds: [
      "algo-t05-b52-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e9a63a89-dbd4-4f14-81e4-641d118f5bad",
    subjectId: SubjectId.ALGO,
    text: "Сұрыпталған массивтен кілтті іздегенде ең нашар жағдайда (worst-case) ең аз салыстыру орындайтын іздеу алгоритмі қандай?",
    options: [
      {
        id: "bcd7db86-2c67-4248-9823-e7954ffde849",
        text: "Binary Search (Екілік іздеу)"
      },
      {
        id: "3cc5526e-a215-42c9-afca-95f775c240c8",
        text: "Linear Search (Сызықтық іздеу)"
      },
      {
        id: "14a44a41-b40d-47f3-a334-a1e0da28fec1",
        text: "Jump Search"
      },
      {
        id: "2dbf5229-4630-43f1-944f-2b5673332cee",
        text: "Exponential Search"
      }
    ],
    correctOptionIds: [
      "bcd7db86-2c67-4248-9823-e7954ffde849"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t05-b53",
    subjectId: SubjectId.ALGO,
    text: "C++ STL кітапханасындағы `std::binary_search` функциясы нені қайтарады?",
    options: [
      {
        id: "algo-t05-b53-op1",
        text: "bool мәнін (ізделетін элемент табылса true, табылмаса false)"
      },
      {
        id: "algo-t05-b53-op2",
        text: "Tабылған элементтің индексін (int)"
      },
      {
        id: "algo-t05-b53-op3",
        text: "Tабылған элементтің нұсқауышын (iterator)"
      },
      {
        id: "algo-t05-b53-op4",
        text: "Ештеңе қайтармайды (void)"
      }
    ],
    correctOptionIds: [
      "algo-t05-b53-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9db86594-2ab5-4e80-9c8c-11fde52a978e",
    subjectId: SubjectId.ALGO,
    text: "Сұрыптау алгоритмінің \"салыстыруға негізделген\" (comparison-based) деп аталуы нені білдіреді?",
    options: [
      {
        id: "9d731e70-5863-4619-b2c8-8a6ddca41c95",
        text: "Элементтерді орналастыру үшін тек салыстыру операторларын (`<`, `>`, `==`) қолдануы"
      },
      {
        id: "edd7b942-3daf-48e8-a00d-e1bdd82fcc25",
        text: "Элементтердің мәндерін разрядтарға бөліп талдауы"
      },
      {
        id: "8d46c42a-eb1f-4e8f-9a9b-85cce7d47188",
        text: "Элементтерді тек сұрыпталған массивтермен ғана салыстыруы"
      },
      {
        id: "c2df611c-7770-4afe-8141-c21e5907537a",
        text: "Ешқандай шарттарды қолданбауы"
      }
    ],
    correctOptionIds: [
      "9d731e70-5863-4619-b2c8-8a6ddca41c95"
    ],
    type: QuestionType.SINGLE,
    topic: "Сұрыптау және іздеу алгоритмдері",
    difficulty: Difficulty.MEDIUM
  }
];
