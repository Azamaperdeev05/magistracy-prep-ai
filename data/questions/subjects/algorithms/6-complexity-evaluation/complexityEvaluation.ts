import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// algo / Алгоритмді бағалау
export const algo6ComplexityEvaluationQuestions : Question[] = [
  {
    id: "algo-t06-b01",
    subjectId: SubjectId.ALGO,
    text: "Best Case, Average Case, Worst Case дегеніміз не?",
    options: [
      {
        id: "algo-t06-b01-op1",
        text: "Деректер типтері"
      },
      {
        id: "algo-t06-b01-op2",
        text: "Код түрлері"
      },
      {
        id: "algo-t06-b01-op3",
        text: "Циклдер түрлері"
      },
      {
        id: "algo-t06-b01-op4",
        text: "Алгоритмнің әртүрлі жағдайлардағы күрделілігі"
      }
    ],
    correctOptionIds: [
      "algo-t06-b01-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b02",
    subjectId: SubjectId.ALGO,
    text: "O(n) күрделілігі нені білдіреді?",
    options: [
      {
        id: "algo-t06-b02-op1",
        text: "Квадраттық уақыт"
      },
      {
        id: "algo-t06-b02-op2",
        text: "Тұрақты уақыт"
      },
      {
        id: "algo-t06-b02-op3",
        text: "Логарифмдік уақыт"
      },
      {
        id: "algo-t06-b02-op4",
        text: "Сызықтық уақыт"
      }
    ],
    correctOptionIds: [
      "algo-t06-b02-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b03",
    subjectId: SubjectId.ALGO,
    text: "O(n³) күрделілігі қандай алгоритмде кездеседі?",
    options: [
      {
        id: "algo-t06-b03-op1",
        text: "Binary Search"
      },
      {
        id: "algo-t06-b03-op2",
        text: "Queue операциялары"
      },
      {
        id: "algo-t06-b03-op3",
        text: "3 қабаттасқан цикл"
      },
      {
        id: "algo-t06-b03-op4",
        text: "Merge Sort"
      }
    ],
    correctOptionIds: [
      "algo-t06-b03-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b04",
    subjectId: SubjectId.ALGO,
    text: "Массивке элемент қосу (соңына) күрделілігі?",
    options: [
      {
        id: "algo-t06-b04-op1",
        text: "O(1) амортизацияланған"
      },
      {
        id: "algo-t06-b04-op2",
        text: "O(n)"
      },
      {
        id: "algo-t06-b04-op3",
        text: "O(n²)"
      },
      {
        id: "algo-t06-b04-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b04-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b05",
    subjectId: SubjectId.ALGO,
    text: "Heap Sort күрделілігі қандай?",
    options: [
      {
        id: "algo-t06-b05-op1",
        text: "O(n²)"
      },
      {
        id: "algo-t06-b05-op2",
        text: "O(n)"
      },
      {
        id: "algo-t06-b05-op3",
        text: "O(n log n)"
      },
      {
        id: "algo-t06-b05-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b05-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b06",
    subjectId: SubjectId.ALGO,
    text: "Time Complexity дегеніміз не?",
    options: [
      {
        id: "algo-t06-b06-op1",
        text: "Алгоритмнің орындалу уақыты"
      },
      {
        id: "algo-t06-b06-op2",
        text: "Код жолдар саны"
      },
      {
        id: "algo-t06-b06-op3",
        text: "Алгоритм қолданатын жады"
      },
      {
        id: "algo-t06-b06-op4",
        text: "Айнымалылар саны"
      }
    ],
    correctOptionIds: [
      "algo-t06-b06-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b07",
    subjectId: SubjectId.ALGO,
    text: "O(2^n) күрделілігі қандай алгоритмге тән?",
    options: [
      {
        id: "algo-t06-b07-op1",
        text: "Binary Search"
      },
      {
        id: "algo-t06-b07-op2",
        text: "Сызықтық іздеу"
      },
      {
        id: "algo-t06-b07-op3",
        text: "Bubble Sort"
      },
      {
        id: "algo-t06-b07-op4",
        text: "Фибоначчи рекурсиясы"
      }
    ],
    correctOptionIds: [
      "algo-t06-b07-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b08",
    subjectId: SubjectId.ALGO,
    text: "Амортизацияланған талдау (amortized analysis) нені көрсетеді?",
    options: [
      {
        id: "algo-t06-b08-op1",
        text: "Жады қолдануы"
      },
      {
        id: "algo-t06-b08-op2",
        text: "Ең жақсы жағдай"
      },
      {
        id: "algo-t06-b08-op3",
        text: "Ең нашар жағдай"
      },
      {
        id: "algo-t06-b08-op4",
        text: "Көптеген операциялардың орташа құнын"
      }
    ],
    correctOptionIds: [
      "algo-t06-b08-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b09",
    subjectId: SubjectId.ALGO,
    text: "Hash Table-дегі іздеу операциясының орташа күрделілігі?",
    options: [
      {
        id: "algo-t06-b09-op1",
        text: "O(1)"
      },
      {
        id: "algo-t06-b09-op2",
        text: "O(log n)"
      },
      {
        id: "algo-t06-b09-op3",
        text: "O(n²)"
      },
      {
        id: "algo-t06-b09-op4",
        text: "O(n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b09-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b10",
    subjectId: SubjectId.ALGO,
    text: "Қай жылдамдық ең тиімді?",
    options: [
      {
        id: "algo-t06-b10-op1",
        text: "O(n²)"
      },
      {
        id: "algo-t06-b10-op2",
        text: "O(log n)"
      },
      {
        id: "algo-t06-b10-op3",
        text: "O(n log n)"
      },
      {
        id: "algo-t06-b10-op4",
        text: "O(n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b10-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b11",
    subjectId: SubjectId.ALGO,
    text: "O(n²) күрделілігі қандай алгоритмге тән?",
    options: [
      {
        id: "algo-t06-b11-op1",
        text: "Bubble Sort"
      },
      {
        id: "algo-t06-b11-op2",
        text: "Quick Sort (орташа)"
      },
      {
        id: "algo-t06-b11-op3",
        text: "Merge Sort"
      },
      {
        id: "algo-t06-b11-op4",
        text: "Binary Search"
      }
    ],
    correctOptionIds: [
      "algo-t06-b11-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b12",
    subjectId: SubjectId.ALGO,
    text: "Binary Search алгоритмінің күрделілігі қандай?",
    options: [
      {
        id: "algo-t06-b12-op1",
        text: "O(log n)"
      },
      {
        id: "algo-t06-b12-op2",
        text: "O(n²)"
      },
      {
        id: "algo-t06-b12-op3",
        text: "O(n)"
      },
      {
        id: "algo-t06-b12-op4",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b12-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b13",
    subjectId: SubjectId.ALGO,
    text: "Space Complexity дегеніміз не?",
    options: [
      {
        id: "algo-t06-b13-op1",
        text: "Циклдер саны"
      },
      {
        id: "algo-t06-b13-op2",
        text: "Алгоритм қолданатын жады"
      },
      {
        id: "algo-t06-b13-op3",
        text: "Алгоритм жылдамдығы"
      },
      {
        id: "algo-t06-b13-op4",
        text: "Код ұзындығы"
      }
    ],
    correctOptionIds: [
      "algo-t06-b13-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b14",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық іздеу (Linear Search) күрделілігі?",
    options: [
      {
        id: "algo-t06-b14-op1",
        text: "O(n²)"
      },
      {
        id: "algo-t06-b14-op2",
        text: "O(n)"
      },
      {
        id: "algo-t06-b14-op3",
        text: "O(1)"
      },
      {
        id: "algo-t06-b14-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b14-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b15",
    subjectId: SubjectId.ALGO,
    text: "O(n!) күрделілігі қандай есептерде кездеседі?",
    options: [
      {
        id: "algo-t06-b15-op1",
        text: "Қосу"
      },
      {
        id: "algo-t06-b15-op2",
        text: "Сұрыптау"
      },
      {
        id: "algo-t06-b15-op3",
        text: "Іздеу"
      },
      {
        id: "algo-t06-b15-op4",
        text: "Permutation (орынауыстыру)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b15-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b16",
    subjectId: SubjectId.ALGO,
    text: "O(log n) күрделілігі нені білдіреді?",
    options: [
      {
        id: "algo-t06-b16-op1",
        text: "Квадраттық уақыт"
      },
      {
        id: "algo-t06-b16-op2",
        text: "Сызықтық уақыт"
      },
      {
        id: "algo-t06-b16-op3",
        text: "Логарифмдік уақыт"
      },
      {
        id: "algo-t06-b16-op4",
        text: "Тұрақты уақыт"
      }
    ],
    correctOptionIds: [
      "algo-t06-b16-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b17",
    subjectId: SubjectId.ALGO,
    text: "Insertion Sort-тың ең жақсы күрделілігі қандай?",
    options: [
      {
        id: "algo-t06-b17-op1",
        text: "O(n)"
      },
      {
        id: "algo-t06-b17-op2",
        text: "O(1)"
      },
      {
        id: "algo-t06-b17-op3",
        text: "O(n²)"
      },
      {
        id: "algo-t06-b17-op4",
        text: "O(n log n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b17-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b18",
    subjectId: SubjectId.ALGO,
    text: "Рекурсивті алгоритмдер көбінесе қандай қосымша жады қолданады?",
    options: [
      {
        id: "algo-t06-b18-op1",
        text: "Heap"
      },
      {
        id: "algo-t06-b18-op2",
        text: "Array"
      },
      {
        id: "algo-t06-b18-op3",
        text: "Queue"
      },
      {
        id: "algo-t06-b18-op4",
        text: "Call Stack"
      }
    ],
    correctOptionIds: [
      "algo-t06-b18-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b19",
    subjectId: SubjectId.ALGO,
    text: "Quick Sort-тың орташа күрделілігі қандай?",
    options: [
      {
        id: "algo-t06-b19-op1",
        text: "O(n²)"
      },
      {
        id: "algo-t06-b19-op2",
        text: "O(n)"
      },
      {
        id: "algo-t06-b19-op3",
        text: "O(n log n)"
      },
      {
        id: "algo-t06-b19-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b19-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b20",
    subjectId: SubjectId.ALGO,
    text: "Quick Sort-тың ең нашар күрделілігі қандай?",
    options: [
      {
        id: "algo-t06-b20-op1",
        text: "O(n)"
      },
      {
        id: "algo-t06-b20-op2",
        text: "O(n log n)"
      },
      {
        id: "algo-t06-b20-op3",
        text: "O(n²)"
      },
      {
        id: "algo-t06-b20-op4",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b20-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b21",
    subjectId: SubjectId.ALGO,
    text: "Егер алгоритмде екі қабаттасқан цикл болса, күрделілігі қандай болады?",
    options: [
      {
        id: "algo-t06-b21-op1",
        text: "O(log n)"
      },
      {
        id: "algo-t06-b21-op2",
        text: "O(1)"
      },
      {
        id: "algo-t06-b21-op3",
        text: "O(n²)"
      },
      {
        id: "algo-t06-b21-op4",
        text: "O(n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b21-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b22",
    subjectId: SubjectId.ALGO,
    text: "O(n log n) күрделілігі қандай алгоритмге тән?",
    options: [
      {
        id: "algo-t06-b22-op1",
        text: "Bubble Sort"
      },
      {
        id: "algo-t06-b22-op2",
        text: "Selection Sort"
      },
      {
        id: "algo-t06-b22-op3",
        text: "Linear Search"
      },
      {
        id: "algo-t06-b22-op4",
        text: "Merge Sort"
      }
    ],
    correctOptionIds: [
      "algo-t06-b22-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b23",
    subjectId: SubjectId.ALGO,
    text: "O(1) күрделілігі нені білдіреді?",
    options: [
      {
        id: "algo-t06-b23-op1",
        text: "Тұрақты уақыт"
      },
      {
        id: "algo-t06-b23-op2",
        text: "Квадраттық уақыт"
      },
      {
        id: "algo-t06-b23-op3",
        text: "Логарифмдік уақыт"
      },
      {
        id: "algo-t06-b23-op4",
        text: "Сызықтық уақыт"
      }
    ],
    correctOptionIds: [
      "algo-t06-b23-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b24",
    subjectId: SubjectId.ALGO,
    text: "Асимптотикалық талдаудағы Big O (Үлкен O) белгілеуі нені сипаттайды?",
    options: [
      {
        id: "algo-t06-b24-op1",
        text: "Алгоритмнің ең нашар жағдайдағы орындалу уақытының жоғарғы шекарасын (asymptotic upper bound)"
      },
      {
        id: "algo-t06-b24-op2",
        text: "Алгоритмнің ең жақсы жағдайдағы төменгі шекарасын"
      },
      {
        id: "algo-t06-b24-op3",
        text: "Алгоритмнің нақты орындалу уақытын секундпен"
      },
      {
        id: "algo-t06-b24-op4",
        text: "Алгоритмнің тек жадты қолдану көлемін"
      }
    ],
    correctOptionIds: [
      "algo-t06-b24-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b25",
    subjectId: SubjectId.ALGO,
    text: "Асимптотикалық талдаудағы Big Omega (Үлкен Омега) белгілеуі нені сипаттайды?",
    options: [
      {
        id: "algo-t06-b25-op1",
        text: "Алгоритмнің ең жақсы жағдайдағы орындалу уақытының төменгі шекарасын (asymptotic lower bound)"
      },
      {
        id: "algo-t06-b25-op2",
        text: "Алгоритмнің орташа уақыт шекарасын"
      },
      {
        id: "algo-t06-b25-op3",
        text: "Алгоритмнің ең нашар жағдайдағы жоғарғы шегін"
      },
      {
        id: "algo-t06-b25-op4",
        text: "Стек жадының максималды өлшемін"
      }
    ],
    correctOptionIds: [
      "algo-t06-b25-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b26",
    subjectId: SubjectId.ALGO,
    text: "Асимптотикалық талдаудағы Big Theta (Үлкен Тета) белгілеуі нені сипаттайды?",
    options: [
      {
        id: "algo-t06-b26-op1",
        text: "Алгоритмнің жоғарғы және төменгі асимптотикалық шекарасы бірдей болғандағы қысылған шегін (asymptotic tight bound)"
      },
      {
        id: "algo-t06-b26-op2",
        text: "Tек алгоритмнің рекурсивті тереңдігін"
      },
      {
        id: "algo-t06-b26-op3",
        text: "Tек уақытша бос тұрып қалу аралығын"
      },
      {
        id: "algo-t06-b26-op4",
        text: "Айнымалылардың жалпы санын"
      }
    ],
    correctOptionIds: [
      "algo-t06-b26-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d36342d1-dd5a-49f0-802d-ec6f8c48d468",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі функциялардың өсу қарқыны (order of growth) бойынша ең баяу өсетіні (ең тиімдісі) қайсысы?",
    options: [
      {
        id: "e58d3c71-b689-4d21-85c0-8b437b08ea77",
        text: "O(log n)"
      },
      {
        id: "316ae9a1-2fd1-41ee-84c0-fcc666b87a57",
        text: "O(n)"
      },
      {
        id: "246897b0-9dc6-4bea-9dcc-fc606764e866",
        text: "O(n log n)"
      },
      {
        id: "07bb875d-df67-4527-ba5a-e71094c24638",
        text: "O(sqrt(n))"
      }
    ],
    correctOptionIds: [
      "e58d3c71-b689-4d21-85c0-8b437b08ea77"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b27",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі функциялардың өсу қарқыны бойынша ең жылдам өсетіні (ең тиімсізі) қайсысы?",
    options: [
      {
        id: "algo-t06-b27-op1",
        text: "O(n!)"
      },
      {
        id: "algo-t06-b27-op2",
        text: "O(2^n)"
      },
      {
        id: "algo-t06-b27-op3",
        text: "O(n^3)"
      },
      {
        id: "algo-t06-b27-op4",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b27-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a85af64d-869c-4393-a544-1bf395c08118",
    subjectId: SubjectId.ALGO,
    text: "Келесі циклдің уақыттық күрделілігі қандай?\n`for (int i = 1; i < n; i *= 2) { // O(1) әрекеттер }`",
    options: [
      {
        id: "93fde194-10ca-4f7e-bff2-9cbc07a6de8f",
        text: "O(log n)"
      },
      {
        id: "4987cc47-a01e-4be7-ba7a-46099097bcd8",
        text: "O(n)"
      },
      {
        id: "053ead9c-ab92-4a4e-985d-f3e464d4930f",
        text: "O(sqrt(n))"
      },
      {
        id: "dc3e576a-6038-4e37-89b8-67c196e72b92",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "93fde194-10ca-4f7e-bff2-9cbc07a6de8f"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e1e26cdb-b062-4711-bf22-8d04fc8302b7",
    subjectId: SubjectId.ALGO,
    text: "Келесі циклдің уақыттық күрделілігі қандай?\n`for (int i = 0; i * i < n; i++) { // O(1) әрекеттер }`",
    options: [
      {
        id: "c9beadc7-9743-465a-bddb-2df55c9f4d59",
        text: "O(sqrt(n)) (квадрат түбір n)"
      },
      {
        id: "80005a34-02e1-48dc-9c9d-0cb7cb7adf8c",
        text: "O(log n)"
      },
      {
        id: "9809f780-4702-4997-911a-982d70175a90",
        text: "O(n)"
      },
      {
        id: "4b88d825-800f-4475-a055-89d1df693afa",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "c9beadc7-9743-465a-bddb-2df55c9f4d59"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f34b62d1-8900-40f9-a3c5-e388c2e8055c",
    subjectId: SubjectId.ALGO,
    text: "Рекурренттік қатынастарды шешуге арналған Мастер теоремасы (Master Theorem) қандай формулаға қолданылады?",
    options: [
      {
        id: "dfb775c7-a3c7-412d-b72a-a2ce3c92eb94",
        text: "T(n) = aT(n/b) + f(n)"
      },
      {
        id: "32cf89b8-1565-498d-9db1-76b15fe6dc97",
        text: "T(n) = T(n-1) + T(n-2)"
      },
      {
        id: "22239a23-a89e-42b1-9072-233bcd1bdf9f",
        text: "T(n) = aT(n-b) + f(n)"
      },
      {
        id: "c360ed38-d7e6-4119-8512-8cc596c72baa",
        text: "T(n) = T(n!) + O(1)"
      }
    ],
    correctOptionIds: [
      "dfb775c7-a3c7-412d-b72a-a2ce3c92eb94"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b28",
    subjectId: SubjectId.ALGO,
    text: "Мастер теоремасының формуласындағы `a` және `b` параметрлеріне қандай шарттар қойылады?",
    options: [
      {
        id: "algo-t06-b28-op1",
        text: "a >= 1 және b > 1"
      },
      {
        id: "algo-t06-b28-op2",
        text: "a > 0 және b = 1"
      },
      {
        id: "algo-t06-b28-op3",
        text: "a = 0 және b > 0"
      },
      {
        id: "algo-t06-b28-op4",
        text: "Параметрлер кез келген теріс сандар бола алады"
      }
    ],
    correctOptionIds: [
      "algo-t06-b28-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b29",
    subjectId: SubjectId.ALGO,
    text: "Merge Sort алгоритмінің рекурренттік теңдеуі қандай?",
    options: [
      {
        id: "algo-t06-b29-op1",
        text: "T(n) = 2T(n/2) + O(n)"
      },
      {
        id: "algo-t06-b29-op2",
        text: "T(n) = T(n/2) + O(1)"
      },
      {
        id: "algo-t06-b29-op3",
        text: "T(n) = T(n-1) + O(n)"
      },
      {
        id: "algo-t06-b29-op4",
        text: "T(n) = 2T(n/2) + O(n^2)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b29-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b30",
    subjectId: SubjectId.ALGO,
    text: "Binary Search алгоритмінің рекурренттік теңдеуі қандай?",
    options: [
      {
        id: "algo-t06-b30-op1",
        text: "T(n) = T(n/2) + O(1)"
      },
      {
        id: "algo-t06-b30-op2",
        text: "T(n) = 2T(n/2) + O(n)"
      },
      {
        id: "algo-t06-b30-op3",
        text: "T(n) = T(n-1) + O(1)"
      },
      {
        id: "algo-t06-b30-op4",
        text: "T(n) = T(n/2) + O(n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b30-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b31",
    subjectId: SubjectId.ALGO,
    text: "Quick Sort-тың ең нашар жағдайдағы (worst-case) рекурренттік теңдеуі қандай?",
    options: [
      {
        id: "algo-t06-b31-op1",
        text: "T(n) = T(n-1) + O(n)"
      },
      {
        id: "algo-t06-b31-op2",
        text: "T(n) = 2T(n/2) + O(n)"
      },
      {
        id: "algo-t06-b31-op3",
        text: "T(n) = T(n/2) + O(1)"
      },
      {
        id: "algo-t06-b31-op4",
        text: "T(n) = T(n-1) + O(1)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b31-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b32",
    subjectId: SubjectId.ALGO,
    text: "Көмекші жады (Auxiliary Space) деген не?",
    options: [
      {
        id: "algo-t06-b32-op1",
        text: "Алгоритм орындалуы үшін кіріс деректерден (input size) тыс қажет ететін уақытша қосымша жады"
      },
      {
        id: "algo-t06-b32-op2",
        text: "Кіріс деректердің өзі жататын жад көлемі"
      },
      {
        id: "algo-t06-b32-op3",
        text: "Дискідегі файлдардың жалпы өлшемі"
      },
      {
        id: "algo-t06-b32-op4",
        text: "Процессордың кэш жадының көлемі"
      }
    ],
    correctOptionIds: [
      "algo-t06-b32-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b33",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық іздеудің (Linear Search) кеңістік күрделілігі (Space Complexity) қандай?",
    options: [
      {
        id: "algo-t06-b33-op1",
        text: "O(1) (тұрақты қосымша жад)"
      },
      {
        id: "algo-t06-b33-op2",
        text: "O(n)"
      },
      {
        id: "algo-t06-b33-op3",
        text: "O(log n)"
      },
      {
        id: "algo-t06-b33-op4",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b33-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "af040ab3-3aac-4a0c-b14b-1128af02fc8e",
    subjectId: SubjectId.ALGO,
    text: "Динамикалық массивтің соңына элемент қосудың (мысалы, vector::push_back) амортизацияланған уақыт күрделілігі неліктен O(1) болады?",
    options: [
      {
        id: "c30dab55-9a47-4731-a7ff-a2773205e53e",
        text: "Жиі орындалатын O(1) операциялардың көптігі жадты қайта бөлетін сирек O(n) операцияларының шығынын ақтайды"
      },
      {
        id: "f4c10645-1eae-4825-ab6a-bad78e9894d0",
        text: "Себебі компилятор жадты әрқашан тез тауып береді"
      },
      {
        id: "9e4e6b86-781e-4535-bd1f-c953ad93575b",
        text: "Ол мүлдем жадты өзгертпейді"
      },
      {
        id: "1785be1f-894b-41a4-b11f-47337edd0cee",
        text: "Динамикалық массив өлшемі шексіз болғандықтан"
      }
    ],
    correctOptionIds: [
      "c30dab55-9a47-4731-a7ff-a2773205e53e"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b34",
    subjectId: SubjectId.ALGO,
    text: "Екі N x N өлшемді матрицаны стандартты көбейту алгоритмінің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t06-b34-op1",
        text: "O(N^3)"
      },
      {
        id: "algo-t06-b34-op2",
        text: "O(N^2)"
      },
      {
        id: "algo-t06-b34-op3",
        text: "O(N log N)"
      },
      {
        id: "algo-t06-b34-op4",
        text: "O(2^N)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b34-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b35",
    subjectId: SubjectId.ALGO,
    text: "Штрассен (Strassen) матрицаларды көбейту алгоритмінің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t06-b35-op1",
        text: "O(N^2.81)"
      },
      {
        id: "algo-t06-b35-op2",
        text: "O(N^3)"
      },
      {
        id: "algo-t06-b35-op3",
        text: "O(N log N)"
      },
      {
        id: "algo-t06-b35-op4",
        text: "O(N^2)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b35-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f26251f1-1b71-4d9f-8f0c-17fa0565f0af",
    subjectId: SubjectId.ALGO,
    text: "Балансталған іздеу ағаштарында (мысалы, AVL немесе Қызыл-Қара ағаш) іздеу, кірістіру және өшіру операцияларының ең нашар уақыт күрделілігі қандай?",
    options: [
      {
        id: "65331690-d07a-4d04-a5d1-5e9d9df5f018",
        text: "O(log n)"
      },
      {
        id: "394e3d64-2909-4a0c-ae3b-26177a32582d",
        text: "O(n)"
      },
      {
        id: "5167361a-f3db-424e-9c65-2d40cfb2db3c",
        text: "O(n log n)"
      },
      {
        id: "7ce3b8d8-b76d-48e2-8ae1-31e03bd925fb",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "65331690-d07a-4d04-a5d1-5e9d9df5f018"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c40b069b-4481-4a6a-bacd-f300e7179aeb",
    subjectId: SubjectId.ALGO,
    text: "Балансталмаған кәдімгі екілік іздеу ағашында (BST) іздеудің ең нашар (worst-case) уақыт күрделілігі қандай және ол қашан болады?",
    options: [
      {
        id: "961c3d7c-8ce1-4707-92f0-fac2d8938f05",
        text: "O(n), ағаш сызықты тізбекке (бамбукке) айналып кеткен жағдайда"
      },
      {
        id: "9e1d0b32-f249-432f-9912-709895d5a899",
        text: "O(log n), ағаш толық балансталғанда"
      },
      {
        id: "8fc7d423-3c53-462d-84cb-dce3520a121b",
        text: "O(1)"
      },
      {
        id: "f7f10c9d-d4d5-442f-97af-659265459687",
        text: "O(n log n)"
      }
    ],
    correctOptionIds: [
      "961c3d7c-8ce1-4707-92f0-fac2d8938f05"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b36",
    subjectId: SubjectId.ALGO,
    text: "Алгоритмдердің уақыттық күрделілігіне ең үлкен әсер ететін фактор қандай?",
    options: [
      {
        id: "algo-t06-b36-op1",
        text: "Кіріс деректер өлшемінің (N) өсуіне байланысты базалық операциялар санының өсу қарқыны"
      },
      {
        id: "algo-t06-b36-op2",
        text: "Бағдарлама жазылған бағдарламалау тілінің түрі"
      },
      {
        id: "algo-t06-b36-op3",
        text: "Процессордың тактілік жиілігі мен ядролар саны"
      },
      {
        id: "algo-t06-b36-op4",
        text: "Кодтағы бос орындар мен комменттер саны"
      }
    ],
    correctOptionIds: [
      "algo-t06-b36-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d8147c51-3115-49bc-bde3-c37dc9251622",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімнің (Singly Linked List) басына жаңа элемент қосу операциясының уақыт күрделілігі қандай?",
    options: [
      {
        id: "a7152386-0526-429c-a62c-722cd5dc841b",
        text: "O(1)"
      },
      {
        id: "078804a3-edf4-41fa-b2d3-280ffa3fca4d",
        text: "O(n)"
      },
      {
        id: "76821b93-5ef0-4599-b900-42788ef94f3d",
        text: "O(log n)"
      },
      {
        id: "daad58c6-8cd0-4c36-8055-5e47340c5bd7",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "a7152386-0526-429c-a62c-722cd5dc841b"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d581c0e3-fad1-40be-99e1-70a8c8643bab",
    subjectId: SubjectId.ALGO,
    text: "Бір бағытты байланысқан тізімнің ең соңына (соңғы элементке сілтеме болмағанда) жаңа элемент қосудың уақыт күрделілігі қандай?",
    options: [
      {
        id: "028902ac-18f7-470c-a610-4369f5d10282",
        text: "O(n) (тізімнің соңына дейін толық өту қажет)"
      },
      {
        id: "f1d4352e-3700-4643-a613-14dd11e2d8c7",
        text: "O(1)"
      },
      {
        id: "f363c39f-adce-4955-b8c3-91ef9f5007ad",
        text: "O(log n)"
      },
      {
        id: "405d6b28-310b-423d-9414-60615e488649",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "028902ac-18f7-470c-a610-4369f5d10282"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "94adff3e-dc74-40aa-a752-e7eb330c2968",
    subjectId: SubjectId.ALGO,
    text: "Екі бағытты байланысқан тізімде (Doubly Linked List) соңғы элементке нұсқауыш (tail pointer) бар болғанда, соңына элемент қосу күрделілігі қандай?",
    options: [
      {
        id: "10d4c21b-27a8-47e8-9ff9-014abb457113",
        text: "O(1)"
      },
      {
        id: "49535def-4454-4d64-a747-703b798a8115",
        text: "O(n)"
      },
      {
        id: "39862eab-9953-48e6-a44b-47e4f87b814b",
        text: "O(log n)"
      },
      {
        id: "d8186d63-24d6-4b31-908c-9a501e27fa81",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "10d4c21b-27a8-47e8-9ff9-014abb457113"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b37",
    subjectId: SubjectId.ALGO,
    text: "Стектегі (Stack) `push` және `pop` операцияларының уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t06-b37-op1",
        text: "O(1)"
      },
      {
        id: "algo-t06-b37-op2",
        text: "O(n)"
      },
      {
        id: "algo-t06-b37-op3",
        text: "O(log n)"
      },
      {
        id: "algo-t06-b37-op4",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b37-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "33c0bfe2-a3ab-4187-b68e-ca18eeea725c",
    subjectId: SubjectId.ALGO,
    text: "Кезектегі (Queue) `enqueue` (қосу) және `dequeue` (өшіру) операцияларының уақыттық күрделілігі қандай?",
    options: [
      {
        id: "205dc427-d40e-4d70-9ca5-6eeedb734947",
        text: "O(1)"
      },
      {
        id: "15223c93-44c3-4148-b393-489e6546df61",
        text: "O(n)"
      },
      {
        id: "ccefc820-4e5c-458b-9ed3-464aa2a9211d",
        text: "O(log n)"
      },
      {
        id: "85f91a1c-bb3a-4b10-b5d3-c9617f8c20e9",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "205dc427-d40e-4d70-9ca5-6eeedb734947"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b38",
    subjectId: SubjectId.ALGO,
    text: "Р есептер класы (P class) дегеніміз не?",
    options: [
      {
        id: "algo-t06-b38-op1",
        text: "Детерминирленген Тьюринг машинасында полиномиалды уақытта O(N^k) шешілетін есептер жиынтығы"
      },
      {
        id: "algo-t06-b38-op2",
        text: "Шешімі мүлдем жоқ есептер класы"
      },
      {
        id: "algo-t06-b38-op3",
        text: "Tек экспоненциалды уақытта шешілетін есептер"
      },
      {
        id: "algo-t06-b38-op4",
        text: "Оңай тексерілетін, бірақ шешілмейтін есептер"
      }
    ],
    correctOptionIds: [
      "algo-t06-b38-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b39",
    subjectId: SubjectId.ALGO,
    text: "NP есептер класы (NP class) дегеніміз не?",
    options: [
      {
        id: "algo-t06-b39-op1",
        text: "Шешімі детерминирленбеген полиномиалды уақытта табылатын немесе берілген шешімді полиномиалды уақытта тексеруге (verification) болатын есептер"
      },
      {
        id: "algo-t06-b39-op2",
        text: "Полиномиалды уақытта шешілмейтіні дәлелденген есептер"
      },
      {
        id: "algo-t06-b39-op3",
        text: "Tек сызықтық уақытта шешілетін есептер"
      },
      {
        id: "algo-t06-b39-op4",
        text: "Ешқандай компьютер шеше алмайтын есептер"
      }
    ],
    correctOptionIds: [
      "algo-t06-b39-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b40",
    subjectId: SubjectId.ALGO,
    text: "NP-толық (NP-complete) есептер дегеніміз не?",
    options: [
      {
        id: "algo-t06-b40-op1",
        text: "NP класына жататын және кез келген басқа NP есепті оған полиномиалды уақытта келтіруге болатын ең қиын есептер жиыны"
      },
      {
        id: "algo-t06-b40-op2",
        text: "Полиномиалды уақытта оңай шешілетін қарапайым есептер"
      },
      {
        id: "algo-t06-b40-op3",
        text: "Шешімі мүлдем жоқ математикалық дилеммалар"
      },
      {
        id: "algo-t06-b40-op4",
        text: "Tек хэштеу арқылы шешілетін есептер"
      }
    ],
    correctOptionIds: [
      "algo-t06-b40-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b41",
    subjectId: SubjectId.ALGO,
    text: "P vs NP мәселесі компьютерлік ғылымдарда нені білдіреді?",
    options: [
      {
        id: "algo-t06-b41-op1",
        text: "Полиномиалды уақытта тез тексерілетін кез келген есептің полиномиалды уақытта табылатын жылдам шешімі бар ма деген сұрақ"
      },
      {
        id: "algo-t06-b41-op2",
        text: "Компьютерлердің физикалық жылдамдығын арттыру мәселесі"
      },
      {
        id: "algo-t06-b41-op3",
        text: "Сұрыптау алгоритмдерінің ең тиімдісін таңдау қиындығы"
      },
      {
        id: "algo-t06-b41-op4",
        text: "Жад көлемі мен процессор ядроларының қатынасы"
      }
    ],
    correctOptionIds: [
      "algo-t06-b41-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b42",
    subjectId: SubjectId.ALGO,
    text: "Төмендегілердің қайсысы NP-толық есептерге жатады?",
    options: [
      {
        id: "algo-t06-b42-op1",
        text: "Коммивояжер есебі (TSP), Жинақ сөмкесі есебі (Knapsack problem), SAT есебі"
      },
      {
        id: "algo-t06-b42-op2",
        text: "Массивті сұрыптау, Бинарлық іздеу"
      },
      {
        id: "algo-t06-b42-op3",
        text: "Екі санның ЕҮОБ табу, Квадрат теңдеуді шешу"
      },
      {
        id: "algo-t06-b42-op4",
        text: "Графтың ең қысқа жолын Дейкстра алгоритмімен табу"
      }
    ],
    correctOptionIds: [
      "algo-t06-b42-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b43",
    subjectId: SubjectId.ALGO,
    text: "Little o (кіші o) белгілеуі нені білдіреді?",
    options: [
      {
        id: "algo-t06-b43-op1",
        text: "Бір функцияның екінші функциядан асимптотикалық тұрғыдан қатаң баяу өсетінін (strictly lower rate of growth)"
      },
      {
        id: "algo-t06-b43-op2",
        text: "Функциялардың өсу жылдамдығы тең екенін"
      },
      {
        id: "algo-t06-b43-op3",
        text: "Функцияның төменгі шекарасын"
      },
      {
        id: "algo-t06-b43-op4",
        text: "Tұрақты уақыт күрделілігін"
      }
    ],
    correctOptionIds: [
      "algo-t06-b43-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b44",
    subjectId: SubjectId.ALGO,
    text: "Келесі функциялардың қайсысы `o(n^2)` шартын қанағаттандырады?",
    options: [
      {
        id: "algo-t06-b44-op1",
        text: "n log n"
      },
      {
        id: "algo-t06-b44-op2",
        text: "n^2"
      },
      {
        id: "algo-t06-b44-op3",
        text: "n^3"
      },
      {
        id: "algo-t06-b44-op4",
        text: "2^n"
      }
    ],
    correctOptionIds: [
      "algo-t06-b44-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0cb15c1c-8b08-453c-a6f0-6c7e0b8023d3",
    subjectId: SubjectId.ALGO,
    text: "Хэш-кестеде барлық кілттер бір ұяшыққа түсіп, коллизия (collision) туындағанда іздеудің ең нашар уақыт күрделілігі қандай болады?",
    options: [
      {
        id: "c645f2ce-9794-4362-970d-0e1ed466316c",
        text: "O(n)"
      },
      {
        id: "f8b71998-de7a-4045-8e0a-98e14c529a31",
        text: "O(1)"
      },
      {
        id: "c4c7ffe2-0ef7-411e-9a9b-c4589bccf41e",
        text: "O(log n)"
      },
      {
        id: "ad57385b-8fd5-476f-81e1-2bf0f09c345c",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "c645f2ce-9794-4362-970d-0e1ed466316c"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "65394495-262b-412d-8943-972777cf6353",
    subjectId: SubjectId.ALGO,
    text: "Келесі рекурсивті функцияның уақыттық күрделілігі қандай?\n`void fun(int n) { if (n <= 1) return; fun(n-1); }`",
    options: [
      {
        id: "ad646cc1-ff36-4bba-ae95-e85304a8fbbc",
        text: "O(n)"
      },
      {
        id: "7434ecf4-17c3-44bc-aba2-b6c890113b60",
        text: "O(log n)"
      },
      {
        id: "6cff4a16-13ff-4eb2-b901-e962e0dc3170",
        text: "O(2^n)"
      },
      {
        id: "3383938a-eec7-41dd-9f11-0607e8aa79ad",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "ad646cc1-ff36-4bba-ae95-e85304a8fbbc"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "339b7c41-cbab-4bb3-b4d3-35e98f8f066a",
    subjectId: SubjectId.ALGO,
    text: "Келесі рекурсивті функцияның уақыттық күрделілігі қандай?\n`void fun(int n) { if (n <= 1) return; fun(n/2); }`",
    options: [
      {
        id: "63978b3d-0f5d-4c5f-a40c-9a78e18e3773",
        text: "O(log n)"
      },
      {
        id: "52209ae8-29f7-4617-bb32-7f7fe08b8e0b",
        text: "O(n)"
      },
      {
        id: "6cd4d60b-296e-4ef0-8e19-db48b6f8aba1",
        text: "O(n log n)"
      },
      {
        id: "d1c25e7f-30fd-4d21-a360-c77e40834d94",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "63978b3d-0f5d-4c5f-a40c-9a78e18e3773"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "dfee5e48-e49f-4421-8f32-75534852e5ed",
    subjectId: SubjectId.ALGO,
    text: "Фибоначчи сандарын табудың қарапайым рекурсивті алгоритмінің кеңістіктік күрделілігі (stack space) қандай?",
    options: [
      {
        id: "871de935-2cfd-4f4c-8e2f-faa4d7324259",
        text: "O(n) (рекурсия ағашының максималды биіктігіне сәйкес)"
      },
      {
        id: "fafc3d85-bcab-4da1-a0ee-a71e68c7b3e4",
        text: "O(2^n)"
      },
      {
        id: "ca5f2d9a-22df-4d68-a105-fcff66c6f91c",
        text: "O(1)"
      },
      {
        id: "cfdf7d7e-f868-472c-abbe-1b1bc8432508",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "871de935-2cfd-4f4c-8e2f-faa4d7324259"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d758ef8a-a590-483c-a660-238568925795",
    subjectId: SubjectId.ALGO,
    text: "Асимптотикалық талдауда тұрақты көбейткіштер мен төменгі дәрежелі мүшелер (constant factors and lower order terms) неліктен ескерілмейді?",
    options: [
      {
        id: "e0c52627-a6d0-4050-b1ce-115c95c78c65",
        text: "Деректер өлшемі шексіздікке ұмтылғанда (N өте үлкен болғанда) олардың жалпы өсу қарқынына әсері өте аз болады"
      },
      {
        id: "0aa8ebcb-eccd-4a30-97d9-be5e6c87fb3f",
        text: "Себебі олар компиляция жылдамдығына әсер етпейді"
      },
      {
        id: "3e26f001-8ac6-4387-baae-2f218e2abc14",
        text: "Математикалық есептеулерді жеңілдету үшін оларды компилятор автоматты түрде өшіреді"
      },
      {
        id: "845a3add-f7b3-4e17-b0d6-7889bc74bf96",
        text: "Олардың мәні әрқашан теріс болады"
      }
    ],
    correctOptionIds: [
      "e0c52627-a6d0-4050-b1ce-115c95c78c65"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e4283621-a458-489b-83a3-2005830864ef",
    subjectId: SubjectId.ALGO,
    text: "Егер алгоритм орындалу үшін N-ге тәуелсіз, әрқашан бірдей 500 МБ жады қажет етсе, оның кеңістік күрделілігі қандай болады?",
    options: [
      {
        id: "fe1fe203-22ce-4fab-a52a-01e115ce0468",
        text: "O(1) (тұрақты кеңістік)"
      },
      {
        id: "9386edb5-63ca-4d51-bbd2-bc1206b217e2",
        text: "O(N)"
      },
      {
        id: "d9efba4f-1aa4-40ca-aa84-e015ef500d2b",
        text: "O(log N)"
      },
      {
        id: "25054892-81f4-4908-8a3b-b8766b7e43ea",
        text: "O(500)"
      }
    ],
    correctOptionIds: [
      "fe1fe203-22ce-4fab-a52a-01e115ce0468"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ca3dffa5-b523-4c91-8029-83d47f0308bf",
    subjectId: SubjectId.ALGO,
    text: "Келесі кодтың уақыттық күрделілігі неге тең?\n`for (int i=0; i<n; i++) { for (int j=0; j<100; j++) { // O(1) әрекет } }`",
    options: [
      {
        id: "8b8ccb80-f15f-4343-b98e-ccc96fea8c79",
        text: "O(n) (ішкі цикл 100 рет қана орындалады, бұл тұрақты шама)"
      },
      {
        id: "28956061-f4e2-4452-8b4b-d39a594991a7",
        text: "O(n^2)"
      },
      {
        id: "bda3f6b7-6f2a-4c72-87ef-0d59d94faf1e",
        text: "O(100n)"
      },
      {
        id: "77367215-d3de-45a9-89bf-c4b99bcfea74",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "8b8ccb80-f15f-4343-b98e-ccc96fea8c79"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8cae0ec2-4192-460f-9610-4e80896279eb",
    subjectId: SubjectId.ALGO,
    text: "Келесі кодтың уақыттық күрделілігі неге тең?\n`for (int i=0; i<n; i++) { for (int j=0; j<i; j++) { // O(1) әрекет } }`",
    options: [
      {
        id: "f363d7fb-9bc7-4921-8ad0-0ff24a1e4109",
        text: "O(n^2) (әр қадам сайын n*(n-1)/2 салыстыру жасалады)"
      },
      {
        id: "cb3b2fc2-b198-4a67-9412-f47df1afa69c",
        text: "O(n)"
      },
      {
        id: "bd67004f-49aa-4d33-8c16-97cd99613fdb",
        text: "O(n log n)"
      },
      {
        id: "9eee7c43-916c-423c-a467-18064f8a78ba",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "f363d7fb-9bc7-4921-8ad0-0ff24a1e4109"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "25f8509b-5dce-4bae-8a48-348a3b261e94",
    subjectId: SubjectId.ALGO,
    text: "Ақпараттық іздеу жүйелеріндегі O(log n) іздеу жылдамдығын қамтамасыз ететін негізгі деректер құрылымы қандай?",
    options: [
      {
        id: "f1e4c272-14f7-4629-a843-a21149f56e7c",
        text: "Балансталған іздеу ағаштары (B-Tree, AVL Tree)"
      },
      {
        id: "97716caa-3b29-4926-9e10-f240041f62aa",
        text: "Сызықтық байланысқан тізімдер"
      },
      {
        id: "23a6f209-7eea-44da-820b-9b66ec7dd40d",
        text: "Қарапайым ретсіз массивтер"
      },
      {
        id: "246b20a3-7a89-42ab-a018-2b5310eebb33",
        text: "Кезектер мен стектер"
      }
    ],
    correctOptionIds: [
      "f1e4c272-14f7-4629-a843-a21149f56e7c"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "dc26752f-a784-43b5-b202-bbb786ffc579",
    subjectId: SubjectId.ALGO,
    text: "Келесі код орындалғанда `sum` мәні өскен сайын цикл неше рет орындалады?\n`int sum = 0; for (int i = 1; sum < n; i++) { sum += i; }`",
    options: [
      {
        id: "9c3fba19-3584-4fa0-aaf7-ac1bdd1f9deb",
        text: "O(sqrt(n)) (себебі i сандардың қосындысы k*(k+1)/2 жуықтап n-ге тең болады)"
      },
      {
        id: "a19e5d2e-238f-43c8-acf5-43b3b9a5e51d",
        text: "O(n)"
      },
      {
        id: "0aee95d9-b727-4910-a604-46b5a37f3357",
        text: "O(log n)"
      },
      {
        id: "f201d828-0587-4ebc-89d1-cb282d943037",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "9c3fba19-3584-4fa0-aaf7-ac1bdd1f9deb"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e5ba30d9-4764-4533-8604-e03fd205be2f",
    subjectId: SubjectId.ALGO,
    text: "Көршілес емес элементтерді салыстыру арқылы орындалатын Shell Sort алгоритмінің ең жақсы таңдалған қадамдар тізбегіндегі ең төменгі уақыт күрделілігі қандай болады?",
    options: [
      {
        id: "3d6d3667-1c8c-49cc-a5a0-ec28a6febad9",
        text: "O(n log^2 n) немесе O(n^{7/6})"
      },
      {
        id: "0f6aae02-7342-4030-b2b3-0d0081fb2e0d",
        text: "O(n log n)"
      },
      {
        id: "4a9206f3-0154-4ad3-beeb-f8e0434b57bd",
        text: "O(n)"
      },
      {
        id: "65f4456a-006b-4280-b5ce-fc92d842376a",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "3d6d3667-1c8c-49cc-a5a0-ec28a6febad9"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "936f58a0-2d59-4025-bc4b-b9df8e7d441c",
    subjectId: SubjectId.ALGO,
    text: "Қатаң түрде өсетін `T(n) = 8T(n/2) + n^2` рекурренттік теңдеуінің шешімі Мастер теоремасы бойынша қандай болады?",
    options: [
      {
        id: "b4be3515-b25d-4150-9040-265f088ae258",
        text: "O(n^3) (себебі log_2(8) = 3 > 2)"
      },
      {
        id: "19acb706-4c37-4452-848d-7700cfd93db1",
        text: "O(n^2 log n)"
      },
      {
        id: "c49e6ffc-e681-4820-8314-1df199007f40",
        text: "O(n^2)"
      },
      {
        id: "ec1816c9-4c02-4030-97da-0d1e6d8e93e1",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "b4be3515-b25d-4150-9040-265f088ae258"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "000f881f-cd62-4d29-88e3-af4f591b91e1",
    subjectId: SubjectId.ALGO,
    text: "Қатаң түрде өсетін `T(n) = 4T(n/2) + n^2` рекурренттік теңдеуінің шешімі Мастер теоремасы бойынша қандай болады?",
    options: [
      {
        id: "4b50c9af-0d1c-4f83-83c4-f5b3fd87ec4a",
        text: "O(n^2 log n) (себебі log_2(4) = 2, f(n) = n^2)"
      },
      {
        id: "07320272-9176-4ce3-9ad9-2e9be9a50a72",
        text: "O(n^2)"
      },
      {
        id: "9f26573b-2efe-4517-9c8a-b6f601447e60",
        text: "O(n^3)"
      },
      {
        id: "2695b106-af6a-4d5d-8ff3-08ad659034af",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "4b50c9af-0d1c-4f83-83c4-f5b3fd87ec4a"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b45",
    subjectId: SubjectId.ALGO,
    text: "Асимптотикалық талдауда `f(n) = O(g(n))` жазылуы математикалық түрде нені білдіреді?",
    options: [
      {
        id: "algo-t06-b45-op1",
        text: "n >= n0 болатын барлық мәндерде f(n) <= c * g(n) шарты орындалатын оң c және n0 тұрақтылары табылады"
      },
      {
        id: "algo-t06-b45-op2",
        text: "f(n) әрқашан g(n)-ге тең"
      },
      {
        id: "algo-t06-b45-op3",
        text: "f(n) функциясы g(n)-нен жылдам өседі"
      },
      {
        id: "algo-t06-b45-op4",
        text: "g(n) функциясының мәні әрқашан 0 болады"
      }
    ],
    correctOptionIds: [
      "algo-t06-b45-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "101ff7b8-01fd-4cd2-8c0b-977b3625beea",
    subjectId: SubjectId.ALGO,
    text: "Егер графты өңдеуде оның төбелерінің саны V, ал қабырғаларының саны E болса, DFS алгоритмінің уақыт күрделілігі қалай жазылады?",
    options: [
      {
        id: "60295982-255b-4f61-ac82-a70ba4a2bfbb",
        text: "O(V + E)"
      },
      {
        id: "92da4d36-3a20-49b8-a7b2-6e37a46b6491",
        text: "O(V * E)"
      },
      {
        id: "8d958d55-9343-4653-b8c8-1ea198d92b1f",
        text: "O(V^2)"
      },
      {
        id: "10398914-6789-4ba1-b798-90942619fb6e",
        text: "O(E^2)"
      }
    ],
    correctOptionIds: [
      "60295982-255b-4f61-ac82-a70ba4a2bfbb"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "18565292-c4d1-4eb0-a5a0-e4762e83c16a",
    subjectId: SubjectId.ALGO,
    text: "Дейкстра (Dijkstra) ең қысқа жолды іздеу алгоритмінің Фибоначчи үйіндісін (Fibonacci Heap) қолданғандағы уақыт күрделілігі қандай?",
    options: [
      {
        id: "7b9a5317-4133-4c11-890b-d04f0afc3586",
        text: "O(E + V log V)"
      },
      {
        id: "77057cb9-9ff4-4db0-9bd8-c2bdf3c42721",
        text: "O(V^2)"
      },
      {
        id: "faab0847-7253-478a-a21b-4e7991433bba",
        text: "O(E log V)"
      },
      {
        id: "6a5f79a3-f166-4a06-999a-0d8539d75705",
        text: "O(V + E)"
      }
    ],
    correctOptionIds: [
      "7b9a5317-4133-4c11-890b-d04f0afc3586"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d5bf3e19-9bc7-4576-95d8-d30fd761c30f",
    subjectId: SubjectId.ALGO,
    text: "Қарапайым екілік үйіндіні (binary heap) қолданғанда Дейкстра алгоритмінің уақыт күрделілігі қандай болады?",
    options: [
      {
        id: "3cd7c5ac-2eb4-4056-afab-aad908136c8a",
        text: "O((E + V) log V)"
      },
      {
        id: "3bf1e47c-9ebe-4da0-ad14-a8e864d28d37",
        text: "O(V^2)"
      },
      {
        id: "15e90d07-a847-47e4-9ca0-446a136c566f",
        text: "O(E * V)"
      },
      {
        id: "f337f0e4-15fb-482d-b25e-95f4d3c1471f",
        text: "O(V^3)"
      }
    ],
    correctOptionIds: [
      "3cd7c5ac-2eb4-4056-afab-aad908136c8a"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "edd31b6f-5b4d-4ed1-94b9-b31c90df97b2",
    subjectId: SubjectId.ALGO,
    text: "Графтағы барлық төбелер жұбының арасындағы ең қысқа жолды табатын Флойд-Уоршелл (Floyd-Warshall) алгоритмінің уақыт күрделілігі қандай?",
    options: [
      {
        id: "d1558959-c8d8-4503-a267-2d9fbf83a6ab",
        text: "O(V^3)"
      },
      {
        id: "7fab72ce-7e54-4130-8805-49c116308917",
        text: "O(V^2)"
      },
      {
        id: "da64d0c6-ead9-4eb0-b6f4-eb4f0c0cab7f",
        text: "O(V log V)"
      },
      {
        id: "956c6df8-6986-4c8e-95fa-c1d2170e5a9c",
        text: "O(V^2 * log V)"
      }
    ],
    correctOptionIds: [
      "d1558959-c8d8-4503-a267-2d9fbf83a6ab"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b3b96a54-3d89-42b1-a4b8-6c1554e5b823",
    subjectId: SubjectId.ALGO,
    text: "Ағашты ені бойынша аралау (BFS) алгоритмінің кезек құрылымын қолданғандағы уақыт күрделілігі қандай?",
    options: [
      {
        id: "201b19b1-0f43-4359-9407-e7cd436b781a",
        text: "O(V + E)"
      },
      {
        id: "acded6ba-b6b0-4c99-bf56-407edc275a11",
        text: "O(V * E)"
      },
      {
        id: "20dc8ca6-ede6-4e5c-89ec-b81bb62ff709",
        text: "O(V^2)"
      },
      {
        id: "491e0ceb-be00-4a6d-bcfc-2a3e1b765c85",
        text: "O(log V)"
      }
    ],
    correctOptionIds: [
      "201b19b1-0f43-4359-9407-e7cd436b781a"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b46",
    subjectId: SubjectId.ALGO,
    text: "Екілік іздеу ағашын симметриялық (in-order) аралаудың уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t06-b46-op1",
        text: "O(n) (барлық элементтерді бір рет аралап шығады)"
      },
      {
        id: "algo-t06-b46-op2",
        text: "O(log n)"
      },
      {
        id: "algo-t06-b46-op3",
        text: "O(n log n)"
      },
      {
        id: "algo-t06-b46-op4",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b46-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "86119660-94b5-4d2f-8206-44fb21e0064d",
    subjectId: SubjectId.ALGO,
    text: "Асимптотикалық талдауда `o(g(n))` (кіші о) және `O(g(n))` (үлкен O) арасындағы қатаң айырмашылық қандай?",
    options: [
      {
        id: "9b224f9d-abf1-4d86-a243-4c605f40817a",
        text: "`o(g(n))` өсу қарқынының қатаң төмен екенін білдіреді (limit f(n)/g(n) = 0), ал `O(g(n))` тең болуына да рұқсат береді"
      },
      {
        id: "69667589-1975-4bc3-8f46-0a337e896a80",
        text: "`O(g(n))` тек рекурсивті функцияларға қолданылады"
      },
      {
        id: "c3ce781f-d2b3-439c-b975-c222315bbe2e",
        text: "Олардың арасында ешқандай математикалық айырмашылық жоқ"
      },
      {
        id: "7802ef21-13c0-4c7f-ad03-2baf1da3fa58",
        text: "`o(g(n))` тек жадты сипаттайды"
      }
    ],
    correctOptionIds: [
      "9b224f9d-abf1-4d86-a243-4c605f40817a"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e7a57732-4b5b-44c4-a273-3096d2ccaed0",
    subjectId: SubjectId.ALGO,
    text: "Келесі кодтың уақыттық күрделілігін табыңыз:\n`for (int i=0; i<n; i++) { for (int j=1; j<n; j*=2) { // O(1) әрекет } }`",
    options: [
      {
        id: "3cbf7cd4-55ba-4c9f-833d-c26eac2d67cc",
        text: "O(n log n)"
      },
      {
        id: "b997c320-0b8f-4bc7-a6b2-748409a94717",
        text: "O(n^2)"
      },
      {
        id: "9a983001-6d39-4e1b-b227-9456c7377d42",
        text: "O(n)"
      },
      {
        id: "0b9df206-f65d-4842-8c42-1cab56b2ca89",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "3cbf7cd4-55ba-4c9f-833d-c26eac2d67cc"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "588c9346-3286-49f5-94a1-2d225fd9c6fe",
    subjectId: SubjectId.ALGO,
    text: "Келесі кодтың уақыттық күрделілігі қандай?\n`for (int i=1; i<=n; i*=2) { for (int j=1; j<=i; j++) { // O(1) әрекет } }`",
    options: [
      {
        id: "ff26be28-b033-46f4-981f-a55635dcbea5",
        text: "O(n) (сыртқы цикл өскен сайын ішкі цикл қадамдары 1 + 2 + 4 + ... + n = 2n-1 геометриялық прогрессия құрайды)"
      },
      {
        id: "493b9c6d-0658-41b2-aa27-e04e2c5e567e",
        text: "O(n log n)"
      },
      {
        id: "ed2d5574-ed1a-451b-bc30-f3b4a4288571",
        text: "O(n^2)"
      },
      {
        id: "09795c4d-6213-4cbd-ba62-ae46adc87f8c",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "ff26be28-b033-46f4-981f-a55635dcbea5"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b47",
    subjectId: SubjectId.ALGO,
    text: "NP-қиын (NP-hard) есептер дегеніміз не?",
    options: [
      {
        id: "algo-t06-b47-op1",
        text: "Шешімі кез келген NP есептен жеңіл емес, бірақ өзі NP класына жатуы міндетті емес есептер (мысалы, тоқтау мәселесі - halting problem)"
      },
      {
        id: "algo-t06-b47-op2",
        text: "Полиномиалды уақытта жылдам шешілетін есептер"
      },
      {
        id: "algo-t06-b47-op3",
        text: "Тек бүтін сандық массивтерді сұрыптайтын алгоритмдер"
      },
      {
        id: "algo-t06-b47-op4",
        text: "Стек толуы кезінде шығатын жүйелік қателер"
      }
    ],
    correctOptionIds: [
      "algo-t06-b47-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6883bfbe-a602-4402-aa51-c62351e6213d",
    subjectId: SubjectId.ALGO,
    text: "Алгоритмді өзгерту арқылы оның уақыт күрделілігін азайту үшін қосымша жадты қолдану (мысалы, хэштеу, динамикалық бағдарламалау) не деп аталады?",
    options: [
      {
        id: "47b1ebe4-8541-4a68-8d08-3cd5a17b3de1",
        text: "Уақыт пен кеңістік арасындағы ымыра (Time-Space Tradeoff)"
      },
      {
        id: "3d6ba41c-ec9d-43ef-9949-372922fc9689",
        text: "Кодты сығу"
      },
      {
        id: "ecab39a0-ae70-4e06-8cf7-c0e14b782ff6",
        text: "Жадты тазарту"
      },
      {
        id: "a92fafe6-4f58-42a5-99a0-8e6baa8bc346",
        text: "Рекурсияны жою"
      }
    ],
    correctOptionIds: [
      "47b1ebe4-8541-4a68-8d08-3cd5a17b3de1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2e3ad94a-72fb-48fb-8c59-c7deca462b82",
    subjectId: SubjectId.ALGO,
    text: "Келесі рекурсивті функцияның уақыттық күрделілігі қандай?\n`int fun(int n) { if (n <= 1) return 1; return fun(n-1) + fun(n-1); }`",
    options: [
      {
        id: "aca6d061-9374-49ce-9031-35f9d90b5c47",
        text: "O(2^n) (әр қадамда 2 жаңа шақыру жасалады, шақырулар саны экспоненциалды өседі)"
      },
      {
        id: "f2f43e51-f2c1-4e2b-8799-7e32f962a292",
        text: "O(n)"
      },
      {
        id: "03a6776e-d669-48ff-81c8-87138143a465",
        text: "O(n^2)"
      },
      {
        id: "f8876dd4-322a-4030-a40d-572b99e87f61",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "aca6d061-9374-49ce-9031-35f9d90b5c47"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2a5374ca-c9aa-480a-afbd-6bf47ecef91a",
    subjectId: SubjectId.ALGO,
    text: "Евклид алгоритмінің (GCD табу) ең нашар жағдайдағы уақыттық күрделілігі қандай сандар үшін орындалады?",
    options: [
      {
        id: "563997bd-83f3-4adb-8873-2f00468fd81c",
        text: "Көршілес Фибоначчи сандары үшін (алгоритм ең көп қадам жасайды)"
      },
      {
        id: "deb988a9-1153-44f3-84cd-6cb400f69a5f",
        text: "Жұп сандар үшін"
      },
      {
        id: "c520ce28-e8e7-4155-a982-2165b467a1f5",
        text: "Жай сандар үшін"
      },
      {
        id: "51e58463-6500-4261-8bdc-343d812fe1bc",
        text: "Нөл мәндері үшін"
      }
    ],
    correctOptionIds: [
      "563997bd-83f3-4adb-8873-2f00468fd81c"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b48",
    subjectId: SubjectId.ALGO,
    text: "Келесі өрнектің Big O бағасы қандай болады?\n`f(n) = 5n^3 + 100n^2 log n + 5000`",
    options: [
      {
        id: "algo-t06-b48-op1",
        text: "O(n^3) (ең жоғары өсу қарқынына ие мүше)"
      },
      {
        id: "algo-t06-b48-op2",
        text: "O(n^2 log n)"
      },
      {
        id: "algo-t06-b48-op3",
        text: "O(n^2)"
      },
      {
        id: "algo-t06-b48-op4",
        text: "O(n^4)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b48-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b49",
    subjectId: SubjectId.ALGO,
    text: "Келесі өрнектің Big O бағасы қандай болады?\n`f(n) = 3^n + 2^n * n^5`",
    options: [
      {
        id: "algo-t06-b49-op1",
        text: "O(3^n) (экспоненциалды мүше 3^n өрнегі 2^n * n^5 өрнегінен жылдам өседі)"
      },
      {
        id: "algo-t06-b49-op2",
        text: "O(2^n * n^5)"
      },
      {
        id: "algo-t06-b49-op3",
        text: "O(n^5)"
      },
      {
        id: "algo-t06-b49-op4",
        text: "O(2^n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b49-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b50",
    subjectId: SubjectId.ALGO,
    text: "Бір өлшемді статикалық массивтің өлшемін екі есеге арттырудың уақыт күрделілігі қандай?",
    options: [
      {
        id: "algo-t06-b50-op1",
        text: "O(n) (жаңа массив құрып, ескі элементтерді көшіру қажет)"
      },
      {
        id: "algo-t06-b50-op2",
        text: "O(1)"
      },
      {
        id: "algo-t06-b50-op3",
        text: "O(log n)"
      },
      {
        id: "algo-t06-b50-op4",
        text: "O(n^2)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b50-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "95ffb825-81de-4c88-8eb2-aeb4c4cd016f",
    subjectId: SubjectId.ALGO,
    text: "Хэш-кестеде коллизияларды шешудің \"тізбектеу\" (chaining / linked list) әдісінде іздеудің орташа уақыты неге тәуелді?",
    options: [
      {
        id: "728a0bce-1191-4160-90b8-0ef97d49f486",
        text: "Толу факторына (load factor alpha = N/M)"
      },
      {
        id: "94954ae3-11c7-45d8-b6b4-65c191fa5d0d",
        text: "Массив элементтерінің өлшеміне"
      },
      {
        id: "4da22013-91b5-49df-9136-4fdb8aab1681",
        text: "Стек жадының тереңдігіне"
      },
      {
        id: "6a340a7e-86eb-465c-bd9d-bc4ebb5fc72b",
        text: "Қолданылатын хэш-функцияның атауына"
      }
    ],
    correctOptionIds: [
      "728a0bce-1191-4160-90b8-0ef97d49f486"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "61eec132-e7f8-4bb5-a637-20d9402b9f0b",
    subjectId: SubjectId.ALGO,
    text: "Келесі кодтың уақыт күрделілігі қандай?\n`for (int i=1; i<=n; i++) { for (int j=1; j<=n; j+=i) { // O(1) әрекет } }`",
    options: [
      {
        id: "e7207720-dd91-4e3c-a97c-d4d48a25ec98",
        text: "O(n log n) (ішкі цикл қадамдары n/1 + n/2 + n/3 + ... + n/n = n * H_n құрайды, мұндағы H_n - гармоникалық қатар)"
      },
      {
        id: "6bea87ea-8f8c-4bdc-bbae-e26c28d5880e",
        text: "O(n^2)"
      },
      {
        id: "f6cbe8d6-ebe3-48de-a17a-3d5814727cc4",
        text: "O(n)"
      },
      {
        id: "74f04189-bad2-4056-bbaa-1914bac9872d",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "e7207720-dd91-4e3c-a97c-d4d48a25ec98"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9aa3c999-ec9b-4af8-bbf4-045f8c76a4cc",
    subjectId: SubjectId.ALGO,
    text: "Жадтың қосымша элементтерін қолданбай, тек кіріс айнымалыларына қажетті жад шегінде O(1) орындалатын сұрыптау қалай аталады?",
    options: [
      {
        id: "d2475c6a-0ec6-43ee-8510-c13fc26d524d",
        text: "In-place (орнында) сұрыптау"
      },
      {
        id: "880765b8-a919-4cc0-aff0-6b3c5a65364a",
        text: "Out-of-place сұрыптау"
      },
      {
        id: "40849270-88c0-483a-bf0d-ec9d38d31234",
        text: "Динамикалық сұрыптау"
      },
      {
        id: "ab77e21f-1659-4753-a835-2a9fc6a01591",
        text: "Виртуалды сұрыптау"
      }
    ],
    correctOptionIds: [
      "d2475c6a-0ec6-43ee-8510-c13fc26d524d"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "adc71b3c-42e8-4b89-b868-256c499ea6c1",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық іздеудің (Linear Search) орташа жағдайдағы (average case) салыстырулар саны нешеге тең?",
    options: [
      {
        id: "1269f296-df27-4338-8a0b-13054e79b3e1",
        text: "(n + 1) / 2"
      },
      {
        id: "98fff7ee-58c0-4a9a-9283-40c535529089",
        text: "n"
      },
      {
        id: "ee3332e8-9a22-471d-9a3e-2b882fc79d15",
        text: "log n"
      },
      {
        id: "02a9b702-fad1-467c-9751-f59b8e6c56a7",
        text: "n / 2"
      }
    ],
    correctOptionIds: [
      "1269f296-df27-4338-8a0b-13054e79b3e1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8997aa5e-a19b-4389-a562-504c44373f33",
    subjectId: SubjectId.ALGO,
    text: "Quick Sort-та pivot ретінде бірінші немесе соңғы элемент таңдалса және массив алдын ала толық сұрыпталған болса, оның уақыт күрделілігі қандай болады?",
    options: [
      {
        id: "8b644441-f0a4-4ce6-a299-e20d3171c9eb",
        text: "O(n^2) (себебі бөлімдеу әрқашан 0 және n-1 өлшемді болып біржақты ығысады)"
      },
      {
        id: "da1229bb-b463-41ab-b7f2-8f1ddcd6d534",
        text: "O(n log n)"
      },
      {
        id: "e4a4cc62-9d83-4341-9a48-88ff97eeb6c5",
        text: "O(n)"
      },
      {
        id: "e6f2891e-6d8b-4b0b-9c34-29dd96d0fd0c",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "8b644441-f0a4-4ce6-a299-e20d3171c9eb"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b51",
    subjectId: SubjectId.ALGO,
    text: "Динамикалық бағдарламалау (Dynamic Programming) алгоритмдерінің негізгі уақыт тиімділігі неде?",
    options: [
      {
        id: "algo-t06-b51-op1",
        text: "Бірдей қосымша есептерді қайта есептемей, нәтижелерін сақтап O(1) уақытында қолдану арқылы экспоненциалды уақытты полиномиалды уақытқа азайтады"
      },
      {
        id: "algo-t06-b51-op2",
        text: "Олар жадты мүлдем қолданбайды"
      },
      {
        id: "algo-t06-b51-op3",
        text: "Олар тек рекурсиясыз жұмыс істейді"
      },
      {
        id: "algo-t06-b51-op4",
        text: "Олар тек массивтерді сұрыптайды"
      }
    ],
    correctOptionIds: [
      "algo-t06-b51-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b52",
    subjectId: SubjectId.ALGO,
    text: "Төмендегілердің қайсысы O(n log n) уақыт күрделілігіне ие?",
    options: [
      {
        id: "algo-t06-b52-op1",
        text: "Merge Sort-тың ең нашар және орташа жағдайдағы күрделілігі"
      },
      {
        id: "algo-t06-b52-op2",
        text: "Binary Search-тың уақыт күрделілігі"
      },
      {
        id: "algo-t06-b52-op3",
        text: "Bubble Sort-тың орташа күрделілігі"
      },
      {
        id: "algo-t06-b52-op4",
        text: "Linear Search-тың ең нашар күрделілігі"
      }
    ],
    correctOptionIds: [
      "algo-t06-b52-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b53",
    subjectId: SubjectId.ALGO,
    text: "Келесі рекурсивті қатынастың шешімі қандай?\n`T(n) = T(n-1) + O(1)` және `T(1) = O(1)`",
    options: [
      {
        id: "algo-t06-b53-op1",
        text: "O(n)"
      },
      {
        id: "algo-t06-b53-op2",
        text: "O(log n)"
      },
      {
        id: "algo-t06-b53-op3",
        text: "O(2^n)"
      },
      {
        id: "algo-t06-b53-op4",
        text: "O(n log n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b53-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t06-b54",
    subjectId: SubjectId.ALGO,
    text: "Келесі рекурсивті қатынастың шешімі қандай?\n`T(n) = T(n-1) + O(n)` және `T(1) = O(1)`",
    options: [
      {
        id: "algo-t06-b54-op1",
        text: "O(n^2)"
      },
      {
        id: "algo-t06-b54-op2",
        text: "O(n)"
      },
      {
        id: "algo-t06-b54-op3",
        text: "O(n log n)"
      },
      {
        id: "algo-t06-b54-op4",
        text: "O(2^n)"
      }
    ],
    correctOptionIds: [
      "algo-t06-b54-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "805fcfe8-4176-46a6-8518-4854729b8b33",
    subjectId: SubjectId.ALGO,
    text: "Үйіндіден (Heap) ең үлкен/кіші элементті өшіру (delete min/max) операциясының уақыт күрделілігі қандай?",
    options: [
      {
        id: "da151dff-ec0e-46e0-ba98-ae4bb6de97c3",
        text: "O(log n)"
      },
      {
        id: "1c3b41e9-e2a1-4a87-8ed5-ec772721d9d6",
        text: "O(1)"
      },
      {
        id: "e1b1c13e-17d8-4255-af9b-3748bcb03b34",
        text: "O(n)"
      },
      {
        id: "6899aed0-5c69-440b-b4a1-f544e2f10a0f",
        text: "O(n log n)"
      }
    ],
    correctOptionIds: [
      "da151dff-ec0e-46e0-ba98-ae4bb6de97c3"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0102b329-4846-4742-b7fb-d95448931436",
    subjectId: SubjectId.ALGO,
    text: "Үйіндідегі (Heap) ең үлкен/кіші элементті өшірмей тек оқу (get min/max) операциясының уақыт күрделілігі қандай?",
    options: [
      {
        id: "05533e68-5265-4b23-9295-d9fc090d05b1",
        text: "O(1) (төбесінде орналасқандықтан)"
      },
      {
        id: "77bcd8dc-01e2-4a38-bf61-c144688a62c1",
        text: "O(log n)"
      },
      {
        id: "8755100f-d10b-4553-b7f4-90b8069f7311",
        text: "O(n)"
      },
      {
        id: "fa274eac-b800-4aaa-a933-614b14c7a4a2",
        text: "O(n log n)"
      }
    ],
    correctOptionIds: [
      "05533e68-5265-4b23-9295-d9fc090d05b1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e0fbdf12-bc75-4ab0-af7c-2169836cf9b8",
    subjectId: SubjectId.ALGO,
    text: "Қай деректер құрылымында элемент іздеудің ең нашар (worst-case) уақыт күрделілігі әрқашан O(1) болады?",
    options: [
      {
        id: "a38e16cc-6b3f-4731-9ca8-a3f4d516f674",
        text: "Direct Address Table (тікелей мекенжай кестесі)"
      },
      {
        id: "edcf74a9-f88e-4586-97bb-fe0f7f02065d",
        text: "Хэш-кесте коллизиялармен"
      },
      {
        id: "36bb3a65-ec85-4545-97a0-1b7a336eb71f",
        text: "Балансталған іздеу ағашы"
      },
      {
        id: "4028bd66-7cdc-4067-be42-c21aab8c78af",
        text: "Екі бағытты тізім"
      }
    ],
    correctOptionIds: [
      "a38e16cc-6b3f-4731-9ca8-a3f4d516f674"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "69b89a66-e010-4b59-b9ef-043ccf518222",
    subjectId: SubjectId.ALGO,
    text: "Келесі кодтың уақыттық күрделілігі қандай?\n`for(int i=0; i<n; i++) { for(int j=1; j<n; j*=3) { // O(1) әрекет } }`",
    options: [
      {
        id: "9902ebf5-d25d-4503-bfcb-216d0f05aadb",
        text: "O(n log_3 n)"
      },
      {
        id: "0b08948a-28d4-40e6-b8ab-7206c6b081e5",
        text: "O(n^2)"
      },
      {
        id: "dc40a989-1d88-4169-be10-6cd954c27893",
        text: "O(n)"
      },
      {
        id: "a49184ef-964c-48e6-9aa1-035ecf8d59dd",
        text: "O(log n)"
      }
    ],
    correctOptionIds: [
      "9902ebf5-d25d-4503-bfcb-216d0f05aadb"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "51c0f6f5-242d-46b7-959c-6aabdb7a577f",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық іздеудің (Linear Search) ең нашар жағдайдағы (worst-case) салыстырулар саны нешеге тең?",
    options: [
      {
        id: "6920ba10-5e49-4ac9-a29f-a71fd4f46097",
        text: "n"
      },
      {
        id: "ab64ea5f-18af-49b2-b19e-1a0c0a21ba89",
        text: "n - 1"
      },
      {
        id: "1ebd5849-316d-447c-8c72-673932d77d8d",
        text: "log n"
      },
      {
        id: "5924601e-abe5-447d-a6f6-0022dc371063",
        text: "n / 2"
      }
    ],
    correctOptionIds: [
      "6920ba10-5e49-4ac9-a29f-a71fd4f46097"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2a7085ea-6d89-479c-bfac-11fd67f6c8c8",
    subjectId: SubjectId.ALGO,
    text: "Сұрыпталған массивтен элемент ізгенде ең нашар жағдайда O(log n) салыстыру орындайтын іздеу қалай аталады?",
    options: [
      {
        id: "2b3a0483-dcfc-477b-b590-2945626f5159",
        text: "Екілік іздеу (Binary Search)"
      },
      {
        id: "a32b1480-119c-46a7-a599-b3bde769733d",
        text: "Сызықтық іздеу"
      },
      {
        id: "f2f59c87-b98f-49e0-8cde-1635c32e6503",
        text: "Jump Search"
      },
      {
        id: "58b7192a-d819-41d1-9632-67718702fe91",
        text: "Интерполяциялық іздеу"
      }
    ],
    correctOptionIds: [
      "2b3a0483-dcfc-477b-b590-2945626f5159"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмді бағалау",
    difficulty: Difficulty.MEDIUM
  }
];
