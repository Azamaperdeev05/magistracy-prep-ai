import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// algo / Алгоритмдердің әртүрлі құрылымдарын бағдарламалау
export const algo3ProgrammingStructuresQuestions : Question[] = [
  {
    id: "algo-t03-b01",
    subjectId: SubjectId.ALGO,
    text: "Екі өлшемді массив дегеніміз не?",
    options: [
      {
        id: "algo-t03-b01-op1",
        text: "Цикл"
      },
      {
        id: "algo-t03-b01-op2",
        text: "Кесте тәрізді массив"
      },
      {
        id: "algo-t03-b01-op3",
        text: "Функция"
      },
      {
        id: "algo-t03-b01-op4",
        text: "Бір жолдық массив"
      }
    ],
    correctOptionIds: [
      "algo-t03-b01-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b02",
    subjectId: SubjectId.ALGO,
    text: "switch-case операторы не үшін қолданылады?",
    options: [
      {
        id: "algo-t03-b02-op1",
        text: "Бірнеше мән бойынша таңдау"
      },
      {
        id: "algo-t03-b02-op2",
        text: "Функция анықтау"
      },
      {
        id: "algo-t03-b02-op3",
        text: "Массив құру"
      },
      {
        id: "algo-t03-b02-op4",
        text: "Цикл құру"
      }
    ],
    correctOptionIds: [
      "algo-t03-b02-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b03",
    subjectId: SubjectId.ALGO,
    text: "while циклі қашан тоқтайды?",
    options: [
      {
        id: "algo-t03-b03-op1",
        text: "Әрқашан"
      },
      {
        id: "algo-t03-b03-op2",
        text: "Шарт true болғанда"
      },
      {
        id: "algo-t03-b03-op3",
        text: "5 қайталаудан кейін"
      },
      {
        id: "algo-t03-b03-op4",
        text: "Шарт false болғанда"
      }
    ],
    correctOptionIds: [
      "algo-t03-b03-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b04",
    subjectId: SubjectId.ALGO,
    text: "Массив дегеніміз не?",
    options: [
      {
        id: "algo-t03-b04-op1",
        text: "Цикл түрі"
      },
      {
        id: "algo-t03-b04-op2",
        text: "Функция"
      },
      {
        id: "algo-t03-b04-op3",
        text: "Бір типті элементтер жиыны"
      },
      {
        id: "algo-t03-b04-op4",
        text: "Бір айнымалы"
      }
    ],
    correctOptionIds: [
      "algo-t03-b04-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b05",
    subjectId: SubjectId.ALGO,
    text: "for циклінің құрылымы қандай?",
    options: [
      {
        id: "algo-t03-b05-op1",
        text: "for(шарт)"
      },
      {
        id: "algo-t03-b05-op2",
        text: "for(инициализация; шарт; өзгерту)"
      },
      {
        id: "algo-t03-b05-op3",
        text: "for(санау)"
      },
      {
        id: "algo-t03-b05-op4",
        text: "for(әрекет)"
      }
    ],
    correctOptionIds: [
      "algo-t03-b05-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b06",
    subjectId: SubjectId.ALGO,
    text: "if-else операторы не үшін қолданылады?",
    options: [
      {
        id: "algo-t03-b06-op1",
        text: "Шарт бойынша таңдау жасау"
      },
      {
        id: "algo-t03-b06-op2",
        text: "Массивті сұрыптау"
      },
      {
        id: "algo-t03-b06-op3",
        text: "Функция құру"
      },
      {
        id: "algo-t03-b06-op4",
        text: "Цикл құру"
      }
    ],
    correctOptionIds: [
      "algo-t03-b06-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b07",
    subjectId: SubjectId.ALGO,
    text: "Nested loops (қабаттасқан циклдер) дегеніміз не?",
    options: [
      {
        id: "algo-t03-b07-op1",
        text: "Шартты оператор"
      },
      {
        id: "algo-t03-b07-op2",
        text: "Функция"
      },
      {
        id: "algo-t03-b07-op3",
        text: "Цикл ішінде тағы бір цикл"
      },
      {
        id: "algo-t03-b07-op4",
        text: "Бір цикл"
      }
    ],
    correctOptionIds: [
      "algo-t03-b07-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b08",
    subjectId: SubjectId.ALGO,
    text: "Массивтің индексі қай саннан басталады (C++)?",
    options: [
      {
        id: "algo-t03-b08-op1",
        text: "-1"
      },
      {
        id: "algo-t03-b08-op2",
        text: "0"
      },
      {
        id: "algo-t03-b08-op3",
        text: "1"
      },
      {
        id: "algo-t03-b08-op4",
        text: "10"
      }
    ],
    correctOptionIds: [
      "algo-t03-b08-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b09",
    subjectId: SubjectId.ALGO,
    text: "for, while, do-while — бұлар қандай құрылымдар?",
    options: [
      {
        id: "algo-t03-b09-op1",
        text: "Циклдік құрылымдар"
      },
      {
        id: "algo-t03-b09-op2",
        text: "Массивтер"
      },
      {
        id: "algo-t03-b09-op3",
        text: "Шартты операторлар"
      },
      {
        id: "algo-t03-b09-op4",
        text: "Функциялар"
      }
    ],
    correctOptionIds: [
      "algo-t03-b09-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b10",
    subjectId: SubjectId.ALGO,
    text: "do-while циклі while-дан немен айырмашылығы?",
    options: [
      {
        id: "algo-t03-b10-op1",
        text: "Кем дегенде 1 рет орындалады"
      },
      {
        id: "algo-t03-b10-op2",
        text: "Айырмашылық жоқ"
      },
      {
        id: "algo-t03-b10-op3",
        text: "Ешқашан орындалмайды"
      },
      {
        id: "algo-t03-b10-op4",
        text: "Жылдамырақ"
      }
    ],
    correctOptionIds: [
      "algo-t03-b10-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b11",
    subjectId: SubjectId.ALGO,
    text: "Цикл ішіндегі break операторының қызметі қандай?",
    options: [
      {
        id: "algo-t03-b11-op1",
        text: "Циклдің жұмысын бірден тоқтатып, одан шығып кету"
      },
      {
        id: "algo-t03-b11-op2",
        text: "Келесі қадамға бірден өту"
      },
      {
        id: "algo-t03-b11-op3",
        text: "Бағдарламаны толық өшіру"
      },
      {
        id: "algo-t03-b11-op4",
        text: "Функциядан мән қайтару"
      }
    ],
    correctOptionIds: [
      "algo-t03-b11-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b12",
    subjectId: SubjectId.ALGO,
    text: "Цикл ішіндегі continue операторының қызметі қандай?",
    options: [
      {
        id: "algo-t03-b12-op1",
        text: "Циклдің ағымдағы қадамын өткізіп жіберіп, келесі итерацияға бірден көшу"
      },
      {
        id: "algo-t03-b12-op2",
        text: "Циклді мүлдем тоқтату"
      },
      {
        id: "algo-t03-b12-op3",
        text: "Жаңа айнымалы құру"
      },
      {
        id: "algo-t03-b12-op4",
        text: "Рекурсияны іске қосу"
      }
    ],
    correctOptionIds: [
      "algo-t03-b12-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b13",
    subjectId: SubjectId.ALGO,
    text: "do-while циклінің while циклінен басты ерекшелігі неде?",
    options: [
      {
        id: "algo-t03-b13-op1",
        text: "Шарт соңында тексерілетіндіктен, цикл денесі кем дегенде 1 рет орындалады"
      },
      {
        id: "algo-t03-b13-op2",
        text: "Шарт басында тексеріледі"
      },
      {
        id: "algo-t03-b13-op3",
        text: "Тек нақты сандармен жұмыс істейді"
      },
      {
        id: "algo-t03-b13-op4",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t03-b13-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b14",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі бір өлшемді массив элементтері жадта қалай орналасады?",
    options: [
      {
        id: "algo-t03-b14-op1",
        text: "Бір-бірінен кейін тізбектей, үзіліссіз жад ұяшықтарында"
      },
      {
        id: "algo-t03-b14-op2",
        text: "Жадтың кез келген бос жерлерінде шашырап"
      },
      {
        id: "algo-t03-b14-op3",
        text: "Тек динамикалық үйіндіде"
      },
      {
        id: "algo-t03-b14-op4",
        text: "Кесте түрінде"
      }
    ],
    correctOptionIds: [
      "algo-t03-b14-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3074d2f7-1521-4ad9-bbdb-e33b52c26cfa",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде жиымның (массивтің) шекарасынан шығып кету (out of bounds) кезінде компилятор қандай қате шығарады?",
    options: [
      {
        id: "9ae42891-8151-4b3b-8776-e3c90ce9fbd5",
        text: "Әдетте компиляция кезеңінде қате шықпайды, бірақ бағдарлама орындалғанда runtime error болуы мүмкін"
      },
      {
        id: "74177a55-6403-40f0-a3b3-d69b7b0405d0",
        text: "Компиляция кезеңінде міндетті түрде қате шығады"
      },
      {
        id: "34f3414a-8849-4f17-b33f-e1372a9d4b13",
        text: "Ешқандай қателік болмайды"
      },
      {
        id: "581de9ee-0252-4bbf-925d-d491c04982a9",
        text: "Тек ескерту шығады"
      }
    ],
    correctOptionIds: [
      "9ae42891-8151-4b3b-8776-e3c90ce9fbd5"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b15",
    subjectId: SubjectId.ALGO,
    text: "Алгоритмдердің қандай негізгі үш базалық құрылымы бар?",
    options: [
      {
        id: "algo-t03-b15-op1",
        text: "Сызықтық, тармақталу, циклдік"
      },
      {
        id: "algo-t03-b15-op2",
        text: "Рекурсивті, итеративті, модульдік"
      },
      {
        id: "algo-t03-b15-op3",
        text: "Арифметикалық, логикалық, функционалдық"
      },
      {
        id: "algo-t03-b15-op4",
        text: "Массивтік, тізімдік, ағаштық"
      }
    ],
    correctOptionIds: [
      "algo-t03-b15-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b16",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық алгоритмдік құрылым дегеніміз не?",
    options: [
      {
        id: "algo-t03-b16-op1",
        text: "Әрекеттердің ешқандай шартсыз, жазылу ретімен бірінен кейін бірі тізбектеле орындалуы"
      },
      {
        id: "algo-t03-b16-op2",
        text: "Әрекеттердің белгілі бір шартқа байланысты таңдалып орындалуы"
      },
      {
        id: "algo-t03-b16-op3",
        text: "Әрекеттердің бірнеше рет қайталанып орындалуы"
      },
      {
        id: "algo-t03-b16-op4",
        text: "Функцияның өзін-өзі шақыруы"
      }
    ],
    correctOptionIds: [
      "algo-t03-b16-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b17",
    subjectId: SubjectId.ALGO,
    text: "Тармақталу құрылымының сызықтық құрылымнан басты айырмашылығы қандай?",
    options: [
      {
        id: "algo-t03-b17-op1",
        text: "Орындалу бағыты логикалық шарттың тексерілу нәтижесіне байланысты өзгереді"
      },
      {
        id: "algo-t03-b17-op2",
        text: "Ол жадтан мүлдем орын алмайды"
      },
      {
        id: "algo-t03-b17-op3",
        text: "Онда ешқандай айнымалы қолданылмайды"
      },
      {
        id: "algo-t03-b17-op4",
        text: "Әрекеттер тек бір рет қана орындалады"
      }
    ],
    correctOptionIds: [
      "algo-t03-b17-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b18",
    subjectId: SubjectId.ALGO,
    text: "Циклдік алгоритмдік құрылым дегеніміз не?",
    options: [
      {
        id: "algo-t03-b18-op1",
        text: "Белгілі бір шарт орындалғанша бірнеше рет қайталанып орындалатын әрекеттер тізбегі"
      },
      {
        id: "algo-t03-b18-op2",
        text: "Бағдарламаның тек басында ғана орындалатын код"
      },
      {
        id: "algo-t03-b18-op3",
        text: "Бағдарламаның тек соңында ғана орындалатын код"
      },
      {
        id: "algo-t03-b18-op4",
        text: "Қателіктерді тексеретін арнайы құрылым"
      }
    ],
    correctOptionIds: [
      "algo-t03-b18-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b19",
    subjectId: SubjectId.ALGO,
    text: "Counter-controlled (есептегішпен басқарылатын) цикл деген не?",
    options: [
      {
        id: "algo-t03-b19-op1",
        text: "Қайталанулар саны алдын ала белгілі болатын және есептегіш айнымалы арқылы басқарылатын цикл (мысалы, `for`)"
      },
      {
        id: "algo-t03-b19-op2",
        text: "Белгілі бір оқиға болғанша орындалатын цикл"
      },
      {
        id: "algo-t03-b19-op3",
        text: "Шексіз орындалатын цикл"
      },
      {
        id: "algo-t03-b19-op4",
        text: "Тұтынушы енгізгенше күтетін цикл"
      }
    ],
    correctOptionIds: [
      "algo-t03-b19-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b20",
    subjectId: SubjectId.ALGO,
    text: "Sentinel-controlled (белгі-анықтауышпен басқарылатын) цикл деген не?",
    options: [
      {
        id: "algo-t03-b20-op1",
        text: "Қайталану саны белгісіз, бірақ арнайы бір белгілік мән (мысалы, -1 немесе 0) енгізілгенде тоқтайтын цикл"
      },
      {
        id: "algo-t03-b20-op2",
        text: "Тек 10 рет қана орындалатын цикл"
      },
      {
        id: "algo-t03-b20-op3",
        text: "Тек оң сандармен жұмыс істейтін цикл"
      },
      {
        id: "algo-t03-b20-op4",
        text: "Жүйенің жадын тазартатын цикл"
      }
    ],
    correctOptionIds: [
      "algo-t03-b20-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3e2e4959-21e8-4837-a96d-f06de83596d8",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде статикалық массив өлшемін айнымалы арқылы жариялауға бола ма (мысалы, `int n; cin >> n; int arr[n];`) (стандартты C++ бойынша)?",
    options: [
      {
        id: "a3afaafa-81fa-4198-89b5-57a52ef4b291",
        text: "Жоқ, статикалық массив өлшемі компиляция кезеңінде белгілі тұрақты (const/constexpr) мән болуы тиіс"
      },
      {
        id: "592a6ef6-91c6-464f-a30b-cc53cc4195a5",
        text: "Иә, кез келген айнымалыны қолдануға болады"
      },
      {
        id: "a52a2363-20a9-4e30-877b-4d92f18dd6c0",
        text: "Иә, тек айнымалы теріс емес болса ғана болады"
      },
      {
        id: "9616d53f-0013-43e2-93c7-1d1fb8512d0a",
        text: "Тек Linux компиляторларында ғана рұқсат етілген, басқа компиляторларда рұқсат етілмейді"
      }
    ],
    correctOptionIds: [
      "a3afaafa-81fa-4198-89b5-57a52ef4b291"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b21",
    subjectId: SubjectId.ALGO,
    text: "Динамикалық массивтің статикалық массивтен басты артықшылығы қандай?",
    options: [
      {
        id: "algo-t03-b21-op1",
        text: "Оның өлшемін бағдарлама орындалып жатқанда (runtime) пайдаланушы енгізген санға байланысты анықтауға болады"
      },
      {
        id: "algo-t03-b21-op2",
        text: "Ол автоматты түрде сұрыпталады"
      },
      {
        id: "algo-t03-b21-op3",
        text: "Оған кез келген типтегі элементтерді бір уақытта араластырып сақтауға болады"
      },
      {
        id: "algo-t03-b21-op4",
        text: "Ол жадтан мүлдем орын алмайды"
      }
    ],
    correctOptionIds: [
      "algo-t03-b21-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "69dfea71-5860-4166-9cc5-d5c4a8ec9631",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде 5 элементтен тұратын `int arr[5] = {1, 2};` массиві жарияланса, қалған 3 элементтің мәндері неше болады?",
    options: [
      {
        id: "ef47f63d-5322-4144-aaa5-625a0eda7750",
        text: "0 болады (автоматты түрде нөлмен толтырылады)"
      },
      {
        id: "aa41029e-d71e-4cbb-b693-24cebb703a81",
        text: "Қоқыс (кездейсоқ) мәндер болады"
      },
      {
        id: "51c39636-a5e4-4679-a1d8-4d957a1c109d",
        text: "Компиляция қатесі туындайды"
      },
      {
        id: "206e1bf8-33f5-4c35-b026-dda268b544d8",
        text: "1 және 2 мәндері қайталанады"
      }
    ],
    correctOptionIds: [
      "ef47f63d-5322-4144-aaa5-625a0eda7750"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b22",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді `int arr[3][4];` массивінде барлығы неше элемент бар?",
    options: [
      {
        id: "algo-t03-b22-op1",
        text: "12"
      },
      {
        id: "algo-t03-b22-op2",
        text: "7"
      },
      {
        id: "algo-t03-b22-op3",
        text: "3"
      },
      {
        id: "algo-t03-b22-op4",
        text: "4"
      }
    ],
    correctOptionIds: [
      "algo-t03-b22-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "eb90b0b2-edcc-462e-814c-a2001294cec4",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді `arr[i][j]` массивінің бас диагоналінде орналасқан элементтердің индекстеріне қандай шарт сәйкес келеді?",
    options: [
      {
        id: "75a3ad9e-f9c1-4d85-a937-9014e21cc730",
        text: "i == j"
      },
      {
        id: "bbc4f8ae-7e51-4506-879d-c412243e7023",
        text: "i > j"
      },
      {
        id: "43309c52-d8ab-4054-b6ac-492feb41b753",
        text: "i < j"
      },
      {
        id: "f22c3f57-9373-4511-a8a6-a18991e3e07e",
        text: "i + j == N"
      }
    ],
    correctOptionIds: [
      "75a3ad9e-f9c1-4d85-a937-9014e21cc730"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f9dda30b-ac3b-4d39-b8ba-402e4c0b60a8",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді квадраттық `arr[N][N]` массивінің қосалқы диагоналінде (secondary diagonal) орналасқан элементтердің индекстеріне қандай шарт сәйкес келеді?",
    options: [
      {
        id: "b8d5080d-ebae-467b-ba83-a51da0200123",
        text: "i + j == N - 1"
      },
      {
        id: "27b7b62e-4472-49c8-8d20-ae64942a26be",
        text: "i == j"
      },
      {
        id: "69f24de4-6bf6-4f4c-b610-8bfb6f3370bb",
        text: "i > j"
      },
      {
        id: "0383b338-dfaf-4c8c-914f-6ecc09d77699",
        text: "i - j == 1"
      }
    ],
    correctOptionIds: [
      "b8d5080d-ebae-467b-ba83-a51da0200123"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c6ebe989-85d0-40ca-a88e-9b74907d7520",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді квадраттық `arr[N][N]` массивінің бас диагоналінен жоғары орналасқан элементтерге қандай шарт сәйкес келеді?",
    options: [
      {
        id: "0629be48-4745-47e1-acb8-6cfeeeb39338",
        text: "i < j"
      },
      {
        id: "47d78981-e125-4ec6-9fb4-d80fb1de113a",
        text: "i > j"
      },
      {
        id: "78153606-4a14-4879-9440-723585ff8b13",
        text: "i == j"
      },
      {
        id: "d6e6ea4f-cd22-46c0-9493-5c87f0cf4a8a",
        text: "i + j < N"
      }
    ],
    correctOptionIds: [
      "0629be48-4745-47e1-acb8-6cfeeeb39338"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "06d298b4-2643-452d-8a26-6069e4012e9b",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді квадраттық `arr[N][N]` массивінің бас диагоналінен төмен орналасқан элементтерге қандай шарт сәйкес келеді?",
    options: [
      {
        id: "e37f1e2f-33ed-4172-9dd2-afd8851fd559",
        text: "i > j"
      },
      {
        id: "d9b5bbc6-eb85-4574-b784-c170b9ee0348",
        text: "i < j"
      },
      {
        id: "9871e67c-5911-4561-bef0-9d7faaae0a80",
        text: "i == j"
      },
      {
        id: "9cc3feba-26c1-4c49-a270-cbf3f5fb78e4",
        text: "i + j > N"
      }
    ],
    correctOptionIds: [
      "e37f1e2f-33ed-4172-9dd2-afd8851fd559"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ae0720d1-970f-481e-aa5f-32c7f8bfceae",
    subjectId: SubjectId.ALGO,
    text: "Массив элементтерін кері ретпен орналастыру (reverse/invert array) үшін қандай алгоритм оңтайлы?",
    options: [
      {
        id: "6f09ead1-e369-4f26-a03f-e553b416dd75",
        text: "Массивтің басынан және соңынан бастап элементтерді ортасына жеткенше өзара алмастыру (swap)"
      },
      {
        id: "194e2814-a508-4700-b988-d520b6fb4168",
        text: "Массивті жаңа массивке екі рет көшіру"
      },
      {
        id: "e3eb88dd-5b6a-4691-b4a8-e7d38d7ef52e",
        text: "Элементтерді сұрыптау функциясын шақыру"
      },
      {
        id: "a045888e-9fe6-4994-a07f-12b5b1bccd13",
        text: "Массив элементтерін оңға бір қадамға жылжыту"
      }
    ],
    correctOptionIds: [
      "6f09ead1-e369-4f26-a03f-e553b416dd75"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b23",
    subjectId: SubjectId.ALGO,
    text: "Массивті цикл ішінде оңға қарай циклдік жылжыту (cyclic shift right by 1) деген не?",
    options: [
      {
        id: "algo-t03-b23-op1",
        text: "Массивтің соңғы элементін уақытша сақтап, қалған элементтерді оңға жылжытып, бірінші орынға соңғы элементті қою"
      },
      {
        id: "algo-t03-b23-op2",
        text: "Массив элементтерінің барлығына 1-ді қосу"
      },
      {
        id: "algo-t03-b23-op3",
        text: "Массивтің бірінші және соңғы элементтерін өшіру"
      },
      {
        id: "algo-t03-b23-op4",
        text: "Массивтің барлық элементтерін сұрыптау"
      }
    ],
    correctOptionIds: [
      "algo-t03-b23-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b24",
    subjectId: SubjectId.ALGO,
    text: "Массив элементтерінің ең үлкен мәнін (maximum) табу алгоритмі қалай жұмыс істейді?",
    options: [
      {
        id: "algo-t03-b24-op1",
        text: "Бірінші элементті максимум деп алып, қалған элементтермен кезекпен салыстыра отырып, үлкен мән кездессе оны жаңарту"
      },
      {
        id: "algo-t03-b24-op2",
        text: "Барлық элементтерді қосып, элементтер санына бөлу"
      },
      {
        id: "algo-t03-b24-op3",
        text: "Массивтің тек соңғы элементін тексеру"
      },
      {
        id: "algo-t03-b24-op4",
        text: "Массив элементтерін биттік түрлендіру"
      }
    ],
    correctOptionIds: [
      "algo-t03-b24-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b25",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық іздеу (linear search) алгоритмінің орташа уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t03-b25-op1",
        text: "O(N)"
      },
      {
        id: "algo-t03-b25-op2",
        text: "O(log N)"
      },
      {
        id: "algo-t03-b25-op3",
        text: "O(N^2)"
      },
      {
        id: "algo-t03-b25-op4",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "algo-t03-b25-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b26",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді массив элементтерін жолдар бойынша жадта сақтау тәртібі (Row-major order) деген не?",
    options: [
      {
        id: "algo-t03-b26-op1",
        text: "Жадта алдымен бірінші жолдың барлық элементтері, сосын екінші жол, т.с.с. тізбектеліп орналасуы"
      },
      {
        id: "algo-t03-b26-op2",
        text: "Жадта алдымен бірінші бағанның барлық элементтері, сосын екінші баған орналасуы"
      },
      {
        id: "algo-t03-b26-op3",
        text: "Элементтердің кездейсоқ ретпен орналасуы"
      },
      {
        id: "algo-t03-b26-op4",
        text: "Тек квадраттық матрицалар үшін ғана қолданылатын тәртіп"
      }
    ],
    correctOptionIds: [
      "algo-t03-b26-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "91ed8862-32e8-4be6-a8d1-7d13a5564e7e",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді массив элементтерін бағандар бойынша жадта сақтау тәртібі (Column-major order) қандай бағдарламалау тілдеріне тән?",
    options: [
      {
        id: "9881c915-1947-4222-bbda-aad5082a32b7",
        text: "Fortran, MATLAB"
      },
      {
        id: "efeeb00e-a688-414d-86ec-d34b90832851",
        text: "C, C++"
      },
      {
        id: "dc9f331f-e208-417f-a558-6e7bbcac7498",
        text: "Python, Java"
      },
      {
        id: "04394825-e03d-4c00-9167-9993d6dd3423",
        text: "Pascal, C#"
      }
    ],
    correctOptionIds: [
      "9881c915-1947-4222-bbda-aad5082a32b7"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "dd3701ac-8368-414a-953a-5ecdedc0bac6",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `std::vector` контейнері мен қарапайым статикалық массивтің негізгі айырмашылығы неде?",
    options: [
      {
        id: "8cb97a5f-a6e0-4a40-8cce-4d465a96b549",
        text: "`std::vector` - өлшемін автоматты түрде өзгерте алатын динамикалық массив"
      },
      {
        id: "ca4ffe4c-be77-4481-adf0-da28039e4bd2",
        text: "`std::vector` жадтың стек сегментін ғана қолданады"
      },
      {
        id: "9c958584-335c-49f5-bec8-ce0bb9a43891",
        text: "Қарапайым массив тек сандарды, ал вектор тек мәтінді сақтайды"
      },
      {
        id: "c6fcb48b-d6a0-485b-964a-ff0b83f9d630",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "8cb97a5f-a6e0-4a40-8cce-4d465a96b549"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b27",
    subjectId: SubjectId.ALGO,
    text: "Тармақталған алгоритмдердегі `nested if` (кірістірілген шарттар) не үшін қажет?",
    options: [
      {
        id: "algo-t03-b27-op1",
        text: "Бірнеше шарттардың бір уақытта немесе ретімен орындалуын тереңірек тексеру үшін"
      },
      {
        id: "algo-t03-b27-op2",
        text: "Кодты жылдам компиляциялау үшін"
      },
      {
        id: "algo-t03-b27-op3",
        text: "Жаһандық айнымалыларды локализациялау үшін"
      },
      {
        id: "algo-t03-b27-op4",
        text: "Тек цикл жұмысын жеделдету үшін"
      }
    ],
    correctOptionIds: [
      "algo-t03-b27-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b28",
    subjectId: SubjectId.ALGO,
    text: "Циклдің шексіз орындалуының (infinite loop) негізгі себебі қандай?",
    options: [
      {
        id: "algo-t03-b28-op1",
        text: "Циклдың тоқтау шартының ешқашан жалған (false) мәнге ие болмауы"
      },
      {
        id: "algo-t03-b28-op2",
        text: "Цикл ішінде `break` қолданылуы"
      },
      {
        id: "algo-t03-b28-op3",
        text: "Массив өлшемінің тым үлкен болуы"
      },
      {
        id: "algo-t03-b28-op4",
        text: "Компьютер жадының аз болуы"
      }
    ],
    correctOptionIds: [
      "algo-t03-b28-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b29",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық алгоритм құрылымында бағдарламаның орындалу бағытында айрықтар (branching) бола ма?",
    options: [
      {
        id: "algo-t03-b29-op1",
        text: "Жоқ, ешқандай айрықтар мен таңдаулар болмайды, код басынан соңына қарай бір бағытпен өтеді"
      },
      {
        id: "algo-t03-b29-op2",
        text: "Иә, шарт бойынша бөлініп отырады"
      },
      {
        id: "algo-t03-b29-op3",
        text: "Тек қателік болғанда ғана бөлінеді"
      },
      {
        id: "algo-t03-b29-op4",
        text: "Иә, циклдер арқылы кері қайтады"
      }
    ],
    correctOptionIds: [
      "algo-t03-b29-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b30",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі алгоритмдік құрылымдардың қайсысы циклге жатпайды?",
    options: [
      {
        id: "algo-t03-b30-op1",
        text: "Selection (if-else)"
      },
      {
        id: "algo-t03-b30-op2",
        text: "Iteration (while)"
      },
      {
        id: "algo-t03-b30-op3",
        text: "For-loop"
      },
      {
        id: "algo-t03-b30-op4",
        text: "Do-while"
      }
    ],
    correctOptionIds: [
      "algo-t03-b30-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b31",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді матрицаны транспонирлеу (transpose) дегеніміз не?",
    options: [
      {
        id: "algo-t03-b31-op1",
        text: "Матрицаның жолдары мен бағандарының орындарын өзара алмастыру"
      },
      {
        id: "algo-t03-b31-op2",
        text: "Матрица элементтерін нөлге теңестіру"
      },
      {
        id: "algo-t03-b31-op3",
        text: "Матрицаның тек оң элементтерін табу"
      },
      {
        id: "algo-t03-b31-op4",
        text: "Матрицаны бірінші жолы бойынша сұрыптау"
      }
    ],
    correctOptionIds: [
      "algo-t03-b31-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ba01e892-2bd3-45d5-99a6-db1f3e58851c",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі өрнек орындалғаннан кейін `x` мәні неше болады?\n`int x = 0; for (int i = 0; i < 5; i += 2) { x += i; }`",
    options: [
      {
        id: "d1143f90-13b6-461e-9569-065362b7daac",
        text: "6 (i = 0, 2, 4 мәндері үшін 0 + 2 + 4 = 6)"
      },
      {
        id: "ef2dfd07-0d7d-446c-9f72-3840ada7f5ed",
        text: "10"
      },
      {
        id: "98da6321-802d-4675-8250-3f2ec08f1677",
        text: "8"
      },
      {
        id: "8a2a62f3-858e-4b95-b859-217f98d282ae",
        text: "4"
      }
    ],
    correctOptionIds: [
      "d1143f90-13b6-461e-9569-065362b7daac"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e53474f9-6591-4362-a597-4938b0d7df9e",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін `count` мәні нешеге тең болады?\n`int count = 0; for(int i=0; i<3; i++) { for(int j=0; j<2; j++) { count++; } }`",
    options: [
      {
        id: "2b3f8073-38c2-4cd5-8dfc-1ab8f39a509b",
        text: "6"
      },
      {
        id: "0a903ce1-021a-4acf-a4da-c9407f3ecb7a",
        text: "5"
      },
      {
        id: "9b824e6f-32e0-4fed-ab99-e2692ed19fdb",
        text: "3"
      },
      {
        id: "50ce11fa-6068-485c-8016-77b4d76a5b03",
        text: "2"
      }
    ],
    correctOptionIds: [
      "2b3f8073-38c2-4cd5-8dfc-1ab8f39a509b"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "29296f10-f4d5-4600-88ef-b141e1738458",
    subjectId: SubjectId.ALGO,
    text: "Қабаттасқан (кірістірілген) циклдердің уақыттық күрделілігі (ішкі және сыртқы цикл өлшемдері N болса) әдетте қандай болады?",
    options: [
      {
        id: "502706c7-69d0-4179-9ce1-4ce74d4200f4",
        text: "O(N^2)"
      },
      {
        id: "9258bd0f-4c40-4b1d-821d-a67bdf136dbb",
        text: "O(N)"
      },
      {
        id: "d0c9eeec-3106-407c-a3f0-42aa3528faee",
        text: "O(log N)"
      },
      {
        id: "a097e235-3314-4ef6-be70-d6a9376990f7",
        text: "O(N log N)"
      }
    ],
    correctOptionIds: [
      "502706c7-69d0-4179-9ce1-4ce74d4200f4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c09fc4b9-c9c9-43d0-b27f-3f35e7e864f3",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде массив элементтерін қолмен көшірмей, жылдам көшіру үшін қай стандартты функция қолданылады?",
    options: [
      {
        id: "115e2bc4-5eb4-452c-ad2d-887716c8078c",
        text: "std::copy() немесе memcpy()"
      },
      {
        id: "8c7db1fa-e83b-4ed1-9bc4-ed8703d7aad7",
        text: "std::move()"
      },
      {
        id: "b6dcd90a-c618-4c6e-bcb6-6c73b15e7c2a",
        text: "std::clone()"
      },
      {
        id: "03825879-30a7-43fd-803b-8df0797e7619",
        text: "std::duplicate()"
      }
    ],
    correctOptionIds: [
      "115e2bc4-5eb4-452c-ad2d-887716c8078c"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b32",
    subjectId: SubjectId.ALGO,
    text: "Массив элементтерін өсу ретімен реттеу қалай аталады?",
    options: [
      {
        id: "algo-t03-b32-op1",
        text: "Сұрыптау (Sorting)"
      },
      {
        id: "algo-t03-b32-op2",
        text: "Іздеу (Searching)"
      },
      {
        id: "algo-t03-b32-op3",
        text: "Фильтрлеу (Filtering)"
      },
      {
        id: "algo-t03-b32-op4",
        text: "Сығу (Compression)"
      }
    ],
    correctOptionIds: [
      "algo-t03-b32-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b33",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `std::fill()` функциясы не істейді?",
    options: [
      {
        id: "algo-t03-b33-op1",
        text: "Массивтің берілген аралығын белгілі бір мәнмен толтырады"
      },
      {
        id: "algo-t03-b33-op2",
        text: "Массивтен бос орындарды іздейді"
      },
      {
        id: "algo-t03-b33-op3",
        text: "Массив элементтерін жадтан өшіреді"
      },
      {
        id: "algo-t03-b33-op4",
        text: "Массивтің өлшемін автоматты түрде кеңейтеді"
      }
    ],
    correctOptionIds: [
      "algo-t03-b33-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b34",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді массив динамикалық түрде нұсқауыштарға нұсқауыш (`int**`) арқылы қалай құрылады?",
    options: [
      {
        id: "algo-t03-b34-op1",
        text: "Жолдарға нұсқауыштар массивін құрып, содан кейін әр жолға бөлек динамикалық жад бөлу арқылы"
      },
      {
        id: "algo-t03-b34-op2",
        text: "Бір ғана `new int[N][M]` операторы арқылы тікелей"
      },
      {
        id: "algo-t03-b34-op3",
        text: "Стек сегментінен автоматты түрде бөлінеді"
      },
      {
        id: "algo-t03-b34-op4",
        text: "Ол үшін тек статикалық массив қолданылады"
      }
    ],
    correctOptionIds: [
      "algo-t03-b34-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b35",
    subjectId: SubjectId.ALGO,
    text: "`int** arr` арқылы бөлінген динамикалық екіөлшемді массив жадын дұрыс босату реті қандай?",
    options: [
      {
        id: "algo-t03-b35-op1",
        text: "Алдымен әр жолды (`delete[] arr[i]`) өшіріп, соңында нұсқауыштар массивінің өзін (`delete[] arr`) өшіру"
      },
      {
        id: "algo-t03-b35-op2",
        text: "Тек `delete[] arr` деп жазу жеткілікті"
      },
      {
        id: "algo-t03-b35-op3",
        text: "Жад автоматты түрде босатылады"
      },
      {
        id: "algo-t03-b35-op4",
        text: "Оларды кері ретпен, яғни алдымен `delete[] arr` өшіру керек"
      }
    ],
    correctOptionIds: [
      "algo-t03-b35-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b36",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі цикл неше рет орындалады?\n`int i = 10; while(i > 0) { i /= 2; }`",
    options: [
      {
        id: "algo-t03-b36-op1",
        text: "4 рет (i мәндері: 5, 2, 1, 0 болады)"
      },
      {
        id: "algo-t03-b36-op2",
        text: "10 рет"
      },
      {
        id: "algo-t03-b36-op3",
        text: "Шексіз рет"
      },
      {
        id: "algo-t03-b36-op4",
        text: "0 рет"
      }
    ],
    correctOptionIds: [
      "algo-t03-b36-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b37",
    subjectId: SubjectId.ALGO,
    text: "Алгоритмді өрнектеудің көрнекі графикалық түрі қалай аталады?",
    options: [
      {
        id: "algo-t03-b37-op1",
        text: "Блок-схема (Flowchart)"
      },
      {
        id: "algo-t03-b37-op2",
        text: "Псевдокод"
      },
      {
        id: "algo-t03-b37-op3",
        text: "Мәтіндік сипаттама"
      },
      {
        id: "algo-t03-b37-op4",
        text: "Бағдарлама коды"
      }
    ],
    correctOptionIds: [
      "algo-t03-b37-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b38",
    subjectId: SubjectId.ALGO,
    text: "Блок-схемадағы ромб (diamond) геометриялық фигурасы нені білдіреді?",
    options: [
      {
        id: "algo-t03-b38-op1",
        text: "Шартты тексеруді және тармақталуды (Decision)"
      },
      {
        id: "algo-t03-b38-op2",
        text: "Әрекетті немесе есептеуді (Process)"
      },
      {
        id: "algo-t03-b38-op3",
        text: "Алгоритмнің басы немесе соңын (Terminator)"
      },
      {
        id: "algo-t03-b38-op4",
        text: "Деректерді енгізу/шығаруды (Input/Output)"
      }
    ],
    correctOptionIds: [
      "algo-t03-b38-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b39",
    subjectId: SubjectId.ALGO,
    text: "Блок-схемадағы тік төртбұрыш (rectangle) фигурасы нені білдіреді?",
    options: [
      {
        id: "algo-t03-b39-op1",
        text: "Әрекетті немесе есептеу процесін (Process)"
      },
      {
        id: "algo-t03-b39-op2",
        text: "Шартты тексеруді"
      },
      {
        id: "algo-t03-b39-op3",
        text: "Деректерді енгізуді"
      },
      {
        id: "algo-t03-b39-op4",
        text: "Алгоритмнің соңын"
      }
    ],
    correctOptionIds: [
      "algo-t03-b39-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b40",
    subjectId: SubjectId.ALGO,
    text: "Блок-схемадағы параллелограмм (parallelogram) фигурасы нені білдіреді?",
    options: [
      {
        id: "algo-t03-b40-op1",
        text: "Деректерді енгізу немесе шығаруды (Input/Output)"
      },
      {
        id: "algo-t03-b40-op2",
        text: "Есептеулерді"
      },
      {
        id: "algo-t03-b40-op3",
        text: "Тармақталу шарттарын"
      },
      {
        id: "algo-t03-b40-op4",
        text: "Ішкі бағдарламаны шақыруды"
      }
    ],
    correctOptionIds: [
      "algo-t03-b40-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b41",
    subjectId: SubjectId.ALGO,
    text: "Блок-схемадағы сопақша (oval / capsule) фигурасы нені білдіреді?",
    options: [
      {
        id: "algo-t03-b41-op1",
        text: "Алгоритмнің басталуын немесе аяқталуын (Start/End)"
      },
      {
        id: "algo-t03-b41-op2",
        text: "Шартты тексеруді"
      },
      {
        id: "algo-t03-b41-op3",
        text: "Есептеу процесін"
      },
      {
        id: "algo-t03-b41-op4",
        text: "Деректерді басып шығаруды"
      }
    ],
    correctOptionIds: [
      "algo-t03-b41-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "21f1a484-73a3-4591-9878-f8d116ab7ab8",
    subjectId: SubjectId.ALGO,
    text: "Бағдарламалау тілінің синтаксистік ережелеріне бағынбайтын, бірақ алгоритм қадамдарын сипаттайтын бейресми тіл қалай аталады?",
    options: [
      {
        id: "f49d3d41-e9da-45b9-be96-17ce6d6e956c",
        text: "Псевдокод (Pseudocode)"
      },
      {
        id: "35c5c198-6d8d-413f-a338-5cc0eb4eb51b",
        text: "Машиналық код"
      },
      {
        id: "1fd4b34f-664b-4eea-a952-b0bcb85fe65b",
        text: "Ассемблер тілі"
      },
      {
        id: "3b8a43d2-be68-4de2-828f-1caf2c86655c",
        text: "Компилятор тілі"
      }
    ],
    correctOptionIds: [
      "f49d3d41-e9da-45b9-be96-17ce6d6e956c"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b42",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі алгоритмдердің қайсысы сызықтық құрылымға жатады?",
    options: [
      {
        id: "algo-t03-b42-op1",
        text: "Екі санның қосындысын табу және нәтижесін шығару"
      },
      {
        id: "algo-t03-b42-op2",
        text: "Екі санның үлкенін табу"
      },
      {
        id: "algo-t03-b42-op3",
        text: "1-ден N-ге дейінгі сандардың қосындысын табу"
      },
      {
        id: "algo-t03-b42-op4",
        text: "Квадрат теңдеуді шешу"
      }
    ],
    correctOptionIds: [
      "algo-t03-b42-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b43",
    subjectId: SubjectId.ALGO,
    text: "Тармақталудың қандай негізгі екі түрі бар?",
    options: [
      {
        id: "algo-t03-b43-op1",
        text: "Толық (if-else) және toлық емес (тек if)"
      },
      {
        id: "algo-t03-b43-op2",
        text: "Сызықтық және циклдік"
      },
      {
        id: "algo-t03-b43-op3",
        text: "Рекурсивті және итеративті"
      },
      {
        id: "algo-t03-b43-op4",
        text: "Қарапайым және күрделі"
      }
    ],
    correctOptionIds: [
      "algo-t03-b43-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "23a1fff0-6552-46ee-a041-18267fe67948",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `std::vector` жиымында соңғы элементті қосу және өшіру операцияларының уақыттық күрделілігі қандай?",
    options: [
      {
        id: "9e01d43a-3853-4a76-9069-55e8bb93664a",
        text: "Амортизацияланған O(1)"
      },
      {
        id: "adadcf72-4ce4-410c-957e-218d6cd8509c",
        text: "O(N)"
      },
      {
        id: "a09c7486-c706-4945-86ae-4a305fced05d",
        text: "O(log N)"
      },
      {
        id: "6f37c1a3-eff2-497f-8411-fa156ffff3e4",
        text: "O(N^2)"
      }
    ],
    correctOptionIds: [
      "9e01d43a-3853-4a76-9069-55e8bb93664a"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "840eacaf-be2c-4134-8080-618c79bfd84b",
    subjectId: SubjectId.ALGO,
    text: "Массивтің белгілі бір индексіндегі элементке қол жеткізудің (access) уақыттық күрделілігі қандай?",
    options: [
      {
        id: "78190e56-cfa2-4647-8511-3a6362b61aa0",
        text: "O(1) (тұрақты уақыт)"
      },
      {
        id: "a5208d24-4ea1-4e73-b15c-a193552669d1",
        text: "O(N)"
      },
      {
        id: "3fbb512e-2469-4430-8825-0dd2544cf2a5",
        text: "O(log N)"
      },
      {
        id: "a4c98935-9e30-4c43-8e23-37153826e1ca",
        text: "O(N^2)"
      }
    ],
    correctOptionIds: [
      "78190e56-cfa2-4647-8511-3a6362b61aa0"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c8cdbdee-4fba-4dcf-a8c3-0331f925aca7",
    subjectId: SubjectId.ALGO,
    text: "Массивтен белгілі бір мәнді іздегенде ең нашар жағдайда (worst-case) неше салыстыру орындалады?",
    options: [
      {
        id: "4224a864-4116-4847-8d5c-b909f8cdbe22",
        text: "N (элементтер санына тең)"
      },
      {
        id: "94095f8d-ff05-415c-9d6f-0a83b372e93f",
        text: "log N"
      },
      {
        id: "ce4b9c7c-98a9-4de8-9525-001a6c97379d",
        text: "1"
      },
      {
        id: "a8990c83-c26a-4d72-bf1e-354b8a638a07",
        text: "N^2"
      }
    ],
    correctOptionIds: [
      "4224a864-4116-4847-8d5c-b909f8cdbe22"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b44",
    subjectId: SubjectId.ALGO,
    text: "Массив элементтерінің арифметикалық орташа мәнін табу үшін алдымен нені есептеу керек?",
    options: [
      {
        id: "algo-t03-b44-op1",
        text: "Барлық элементтердің қосындысын"
      },
      {
        id: "algo-t03-b44-op2",
        text: "Массивтің ең үлкен элементін"
      },
      {
        id: "algo-t03-b44-op3",
        text: "Массив элементтерінің көбейтіндісін"
      },
      {
        id: "algo-t03-b44-op4",
        text: "Массивтің бірінші элементін"
      }
    ],
    correctOptionIds: [
      "algo-t03-b44-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b45",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық іздеу алгоритмі үшін массив элементтерінің реттелген (сұрыпталған) болуы міндетті ме?",
    options: [
      {
        id: "algo-t03-b45-op1",
        text: "Жоқ, сұрыпталмаған кез келген массивте жұмыс істей береді"
      },
      {
        id: "algo-t03-b45-op2",
        text: "Иә, міндетті түрде өсу ретімен сұрыпталуы керек"
      },
      {
        id: "algo-t03-b45-op3",
        text: "Иә, кему ретімен сұрыпталуы керек"
      },
      {
        id: "algo-t03-b45-op4",
        text: "Тек оң сандар бойынша реттелуі тиіс"
      }
    ],
    correctOptionIds: [
      "algo-t03-b45-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7dc44247-5e96-41fd-be8c-6ba5a511656f",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі кодтың нәтижесі қандай болады?\n`int a[3] = {1, 2, 3}; int *p = a; cout << *(p + 1);`",
    options: [
      {
        id: "3efd615a-5174-4440-9b11-3444d2f581ef",
        text: "2"
      },
      {
        id: "56b06ab8-4854-4430-9739-8ee433bc876b",
        text: "1"
      },
      {
        id: "56dae9e0-23f8-49f8-8703-9e0de6393eda",
        text: "3"
      },
      {
        id: "933d0066-19d6-4d74-b683-472ec5698e5a",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "3efd615a-5174-4440-9b11-3444d2f581ef"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b46",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде массивті функцияға параметр ретінде бергенде не өтеді?",
    options: [
      {
        id: "algo-t03-b46-op1",
        text: "Массивтің бірінші элементіне сілтейтін нұсқауыш (pointer) өтеді"
      },
      {
        id: "algo-t03-b46-op2",
        text: "Массивтің толық көшірмесі жасалып өтеді"
      },
      {
        id: "algo-t03-b46-op3",
        text: "Тек массивтің өлшемі өтеді"
      },
      {
        id: "algo-t03-b46-op4",
        text: "Массив автоматты түрде динамикалық болады"
      }
    ],
    correctOptionIds: [
      "algo-t03-b46-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5da04b27-28f1-4be5-ad97-4241f597cda7",
    subjectId: SubjectId.ALGO,
    text: "Сұрыпталмаған массивтен ең кіші екінші элементті (second minimum) табу алгоритмінің тиімді уақыт күрделілігі қандай?",
    options: [
      {
        id: "5790b06d-61ea-4d18-91b8-6645a35f1129",
        text: "O(N) (бір немесе екі өту арқылы ең кіші екі айнымалыны сақтау)"
      },
      {
        id: "416f3823-e3b1-4e22-859a-b753af5ea948",
        text: "O(N log N)"
      },
      {
        id: "67d41807-913b-4a2f-83df-ed32f9d231ce",
        text: "O(N^2)"
      },
      {
        id: "265e766b-8bd9-4ad5-94e8-65ecd565e696",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "5790b06d-61ea-4d18-91b8-6645a35f1129"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b47",
    subjectId: SubjectId.ALGO,
    text: "Массив элементтерін оңға бір орынға циклдік жылжытқанда, соңғы элемент қай орынға барады?",
    options: [
      {
        id: "algo-t03-b47-op1",
        text: "Бірінші орынға (индексі 0)"
      },
      {
        id: "algo-t03-b47-op2",
        text: "Екінші орынға"
      },
      {
        id: "algo-t03-b47-op3",
        text: "Массивтен шығып кетеді (жойылады)"
      },
      {
        id: "algo-t03-b47-op4",
        text: "Орнында қалады"
      }
    ],
    correctOptionIds: [
      "algo-t03-b47-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b7f04382-7a07-4af3-8bc2-7265252d6061",
    subjectId: SubjectId.ALGO,
    text: "Массив элементтерін солға бір орынға циклдік жылжытқанда (shift left by 1), бірінші элемент қай орынға барады?",
    options: [
      {
        id: "96cd264d-110a-4bd1-a43a-283401806350",
        text: "Соңғы орынға (индексі N-1)"
      },
      {
        id: "04c1224d-2bd4-41b2-a6c1-59cb3a986369",
        text: "Екінші орынға"
      },
      {
        id: "e82d33f7-2ea7-48b2-a0e0-3488ff6ef125",
        text: "Өшіріледі"
      },
      {
        id: "60b8ef87-98ff-4ce7-a730-c5ba59eb864d",
        text: "Бірінші орында қалады"
      }
    ],
    correctOptionIds: [
      "96cd264d-110a-4bd1-a43a-283401806350"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1987d71f-8fee-49bd-a3ac-ecb2a1c5410d",
    subjectId: SubjectId.ALGO,
    text: "Үш өлшемді `int arr[2][3][4];` массиві жадта барлығы неше байт орын алады (егер sizeof(int) = 4 байт болса)?",
    options: [
      {
        id: "dc89f614-7104-41a5-87e7-03f9bea3217f",
        text: "96 байт (2 * 3 * 4 * 4 = 96)"
      },
      {
        id: "1df4ceaf-4f03-4ea5-a832-630d8655a16d",
        text: "24 байт"
      },
      {
        id: "fe05850e-8920-495b-806e-34c49b184be7",
        text: "48 байт"
      },
      {
        id: "6af5f7b3-be06-47b1-9041-793f7878fe9e",
        text: "192 байт"
      }
    ],
    correctOptionIds: [
      "dc89f614-7104-41a5-87e7-03f9bea3217f"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "eb3a041b-257e-4799-b1d6-d0b261de2da1",
    subjectId: SubjectId.ALGO,
    text: "Массивтің барлық элементтерінің көбейтіндісін табу алгоритмінде жинақтауыш айнымалының (product) бастапқы мәні неше болуы тиіс?",
    options: [
      {
        id: "f673bed8-fce8-4bde-bacf-c1cd1b405917",
        text: "1"
      },
      {
        id: "6ffefe91-0ded-4bac-bd8c-6d2cab789ae3",
        text: "0"
      },
      {
        id: "9ba23be5-6ae0-411c-896b-1791f6388d17",
        text: "-1"
      },
      {
        id: "c787b46d-bbdc-4df6-830d-da667ffa60e3",
        text: "Массивтің бірінші элементі"
      }
    ],
    correctOptionIds: [
      "f673bed8-fce8-4bde-bacf-c1cd1b405917"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "954db3af-2f30-4515-a4a9-b93b2b43cb0d",
    subjectId: SubjectId.ALGO,
    text: "Массивтің барлық элементтерінің қосындысын табу алгоритмінде жинақтауыш айнымалының (sum) бастапқы мәні неше болуы тиіс?",
    options: [
      {
        id: "c25939c0-2a67-4c67-963e-91071acbf155",
        text: "0"
      },
      {
        id: "70b9e02b-09cb-44bb-98f1-dc5fa41a9368",
        text: "1"
      },
      {
        id: "c8439a63-3bcd-4180-920d-4dc6a3ee589c",
        text: "Массивтің бірінші элементі"
      },
      {
        id: "9f711a8a-7eed-4980-a07e-1a44cd34d80f",
        text: "Kездейсоқ мән"
      }
    ],
    correctOptionIds: [
      "c25939c0-2a67-4c67-963e-91071acbf155"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "24c9dbe6-0084-4ace-b6dd-072a512655fb",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін `x` мәні қандай болады?\n`int x = 10; for (int i = 0; i < 5; i++) { if (i == 3) break; x++; }`",
    options: [
      {
        id: "4b24c3b9-4140-4728-8c4e-9067fd97b237",
        text: "13 (i = 0, 1, 2 үшін орындалып өседі, i = 3-те цикл тоқтайды)"
      },
      {
        id: "4e3d92e6-7c58-410f-a0c5-acaf62ca0ef4",
        text: "15"
      },
      {
        id: "b9845910-7e73-4213-8d0a-2ed2bfbea6d1",
        text: "14"
      },
      {
        id: "e2198823-0608-4f01-a314-f6ca8ae9a887",
        text: "10"
      }
    ],
    correctOptionIds: [
      "4b24c3b9-4140-4728-8c4e-9067fd97b237"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f2c644e6-6c64-471b-b432-d45d2dcfb21d",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін `x` мәні қандай болады?\n`int x = 10; for (int i = 0; i < 5; i++) { if (i == 3) continue; x++; }`",
    options: [
      {
        id: "6eee364b-8651-420a-910b-d39d0cdb8e5c",
        text: "14 (i = 3-тен басқа барлық қадамда өседі, яғни 4 рет)"
      },
      {
        id: "58a63056-d0e6-45d6-b937-a10112f0b4f8",
        text: "15"
      },
      {
        id: "7ea80c02-2e52-42b3-8788-b30c72e3c640",
        text: "13"
      },
      {
        id: "5772dca4-9bff-4572-8926-d52cf586f1f0",
        text: "10"
      }
    ],
    correctOptionIds: [
      "6eee364b-8651-420a-910b-d39d0cdb8e5c"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6c1c2adc-bf2f-4382-9ff1-5c30523f13ba",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді `arr[i][j]` квадраттық матрицасында `i + j > N - 1` шарты қандай элементтерге тән (N - матрица өлшемі)?",
    options: [
      {
        id: "996dc715-a20b-42b9-ad43-fa6d328c98d7",
        text: "Қосалқы диагональдан төмен орналасқан элементтерге"
      },
      {
        id: "a960521b-afeb-4a4a-aea5-cfad6921e9e0",
        text: "Қосалқы диагональдан жоғары орналасқан элементтерге"
      },
      {
        id: "ee9b1e08-c60f-43ca-bc17-c5f2e6921065",
        text: "Бас диагональдан жоғары элементтерге"
      },
      {
        id: "81a97b06-e203-4203-ad62-ce8f79fffe53",
        text: "Тек қосалқы диагональ бойындағы элементтерге"
      }
    ],
    correctOptionIds: [
      "996dc715-a20b-42b9-ad43-fa6d328c98d7"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e5373307-f477-4cb5-8cee-60a0cd07174a",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді `arr[i][j]` квадраттық матрицасында `i + j < N - 1` шарты қандай элементтерге тән (N - матрица өлшемі)?",
    options: [
      {
        id: "1b1e3a99-b320-4900-a5f3-db15212f99f9",
        text: "Қосалқы диагональдан жоғары орналасқан элементтерге"
      },
      {
        id: "add32f95-bd99-4e7d-af87-7406a75ce1d4",
        text: "Қосалқы диагональдан төмен орналасқан элементтерге"
      },
      {
        id: "c664e4f6-1757-4d88-a54c-a189cfb27a6c",
        text: "Бас диагональ бойындағы элементтерге"
      },
      {
        id: "2a7f1183-50ff-4b2c-8ae7-fbde1a2e6167",
        text: "Тек бұрыштағы элементтерге"
      }
    ],
    correctOptionIds: [
      "1b1e3a99-b320-4900-a5f3-db15212f99f9"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b48",
    subjectId: SubjectId.ALGO,
    text: "Массивтің элементтеріне көрсеткіштер (нұсқауыштар) арқылы қол жеткізу тәсілі қалай аталады?",
    options: [
      {
        id: "algo-t03-b48-op1",
        text: "Нұсқауыштар арифметикасы (Pointer arithmetic)"
      },
      {
        id: "algo-t03-b48-op2",
        text: "Индекстеу арифметикасы"
      },
      {
        id: "algo-t03-b48-op3",
        text: "Динамикалық сұраныс"
      },
      {
        id: "algo-t03-b48-op4",
        text: "Жадты реттеу"
      }
    ],
    correctOptionIds: [
      "algo-t03-b48-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b49",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код нәтижесі нешеге тең?\n`int a[] = {10, 20, 30}; cout << *a + 5;`",
    options: [
      {
        id: "algo-t03-b49-op1",
        text: "15 (*a бірінші элементті сілтейді, яғни 10, оған 5 қосылады)"
      },
      {
        id: "algo-t03-b49-op2",
        text: "35"
      },
      {
        id: "algo-t03-b49-op3",
        text: "10"
      },
      {
        id: "algo-t03-b49-op4",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "algo-t03-b49-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b50",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код нәтижесі нешеге тең?\n`int a[] = {10, 20, 30}; int *p = a; cout << *(p + 2);`",
    options: [
      {
        id: "algo-t03-b50-op1",
        text: "30 (үшінші элементтің мәні)"
      },
      {
        id: "algo-t03-b50-op2",
        text: "10"
      },
      {
        id: "algo-t03-b50-op3",
        text: "20"
      },
      {
        id: "algo-t03-b50-op4",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "algo-t03-b50-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b51",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `std::array` (C++11) қарапайым массивке қарағанда қандай артықшылық береді?",
    options: [
      {
        id: "algo-t03-b51-op1",
        text: "Ол массив өлшемін қадағалайды, элементтерге қауіпсіз қол жеткізуді (`at()`) және STL алгоритмдерін қолдауды қамтамасыз етеді"
      },
      {
        id: "algo-t03-b51-op2",
        text: "Оның өлшемін орындалу уақытында автоматты түрде кеңейтуге болады"
      },
      {
        id: "algo-t03-b51-op3",
        text: "Ол жадты мүлдем алмайды"
      },
      {
        id: "algo-t03-b51-op4",
        text: "Оған кез келген типті араластырып жазуға болады"
      }
    ],
    correctOptionIds: [
      "algo-t03-b51-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "799caf19-f949-4f32-82ba-45e1646050d5",
    subjectId: SubjectId.ALGO,
    text: "Бір типті элементтерді басы мен соңынан кезекпен өңдеуге мүмкіндік беретін циклдік алгоритмдер қалай аталады?",
    options: [
      {
        id: "35f03b4e-85f3-49b8-90eb-23cd05b6fbbf",
        text: "Екі нұсқауыш әдісімен жұмыс істейтін алгоритмдер (Two pointers approach)"
      },
      {
        id: "4e98472c-c2d0-492e-9921-71063f6be057",
        text: "Сызықтық алгоритмдер"
      },
      {
        id: "5196d41a-039f-491e-bfdb-675436c93cef",
        text: "Тармақталған жүйелер"
      },
      {
        id: "17e20928-9bb7-417a-9bdf-2cb619396034",
        text: "Биттік өңдеулер"
      }
    ],
    correctOptionIds: [
      "35f03b4e-85f3-49b8-90eb-23cd05b6fbbf"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3853bf6c-2f2a-4583-abe6-29811fb80ea3",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде массивті `const` модификаторымен жариялау (`const int arr[5] = {1, 2, 3};`) нені білдіреді?",
    options: [
      {
        id: "9f1a38e5-e72a-4164-9e1c-8cc41cd9ed07",
        text: "Массивтің кез келген элементін бағдарлама барысында өзгертуге тыйым салынады (тек оқуға болады)"
      },
      {
        id: "f783b29e-0164-4915-885d-13b4380fbd12",
        text: "Массив тек стекте сақталады"
      },
      {
        id: "dd70eb17-2072-46a8-a9f9-f6b1072c6027",
        text: "Массивтің элементтерін тек нөлге теңестіруге болады"
      },
      {
        id: "6d20c3e5-2459-4035-9de5-61a8765a7e8f",
        text: "Массив автоматты түрде өшіріледі"
      }
    ],
    correctOptionIds: [
      "9f1a38e5-e72a-4164-9e1c-8cc41cd9ed07"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3ab0eaae-cf78-4e44-9de7-098613ad4d1f",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін `x` мәні қандай болады?\n`int x = 0; for (int i = 0; i < 3; i++) { for (int j = 0; j < 3; j++) { if (j == 1) break; x++; } }`",
    options: [
      {
        id: "9b9c38a6-8264-4550-8c14-356cbdde1baf",
        text: "3 (әрбір ішкі цикл j = 1 болғанда тоқтайды, яғни тек j = 0 болғанда ғана x артады, 3 * 1 = 3)"
      },
      {
        id: "67843562-2f67-4542-8f53-a12b6702891c",
        text: "9"
      },
      {
        id: "963b2093-9231-4eab-85c9-f1a00c858607",
        text: "6"
      },
      {
        id: "6e8874c8-98bb-4e02-82fb-0193faddedc5",
        text: "0"
      }
    ],
    correctOptionIds: [
      "9b9c38a6-8264-4550-8c14-356cbdde1baf"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8632afd2-cafa-4bd9-959f-e65935967e6a",
    subjectId: SubjectId.ALGO,
    text: "Қайталау саны алдын ала белгісіз, бірақ белгілі бір логикалық шарт сақталғанша орындалатын циклдер қалай аталады?",
    options: [
      {
        id: "bca163ba-65f1-4100-9b5a-41b5aefd1a79",
        text: "Итерациялық (iterative) немесе шартты циклдер (while/do-while)"
      },
      {
        id: "a5f72f66-8781-4066-8e97-07972b400ec5",
        text: "Параметрлі циклдер (for)"
      },
      {
        id: "a44a0390-f4f0-4abb-a165-87b7c6922da8",
        text: "Сызықтық циклдер"
      },
      {
        id: "d7483f31-b37a-4d0f-b2eb-6133a9b1385e",
        text: "Тұрақты циклдер"
      }
    ],
    correctOptionIds: [
      "bca163ba-65f1-4100-9b5a-41b5aefd1a79"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9eae6d04-2761-45ed-99d1-88e78ae9bab8",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде массив элементтерін жылдам өсу ретімен сұрыптау үшін қай стандартты функция қолданылады?",
    options: [
      {
        id: "d8d057db-f926-4a29-b6e3-9e733a27d75a",
        text: "std::sort(arr, arr + size)"
      },
      {
        id: "1c070610-06ff-488f-8e81-561f324b4774",
        text: "std::arrange(arr)"
      },
      {
        id: "9568b9cd-5170-4f99-82d7-ef4d25e08b86",
        text: "std::filter(arr)"
      },
      {
        id: "f4c0890d-a1b2-4fba-8a6b-f9d5c4f0b3b8",
        text: "std::order(arr)"
      }
    ],
    correctOptionIds: [
      "d8d057db-f926-4a29-b6e3-9e733a27d75a"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b52",
    subjectId: SubjectId.ALGO,
    text: "`std::sort` функциясы қай тақырыптық файлда (library) орналасқан?",
    options: [
      {
        id: "algo-t03-b52-op1",
        text: "<algorithm>"
      },
      {
        id: "algo-t03-b52-op2",
        text: "<iostream>"
      },
      {
        id: "algo-t03-b52-op3",
        text: "<cmath>"
      },
      {
        id: "algo-t03-b52-op4",
        text: "<vector>"
      }
    ],
    correctOptionIds: [
      "algo-t03-b52-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b0bdddd3-1782-4584-9632-cee79cb6d5de",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде массивтегі белгілі бір элементтің бар-жоғын тексеруге арналған екілік іздеу (binary search) қай жағдайда жұмыс істейді?",
    options: [
      {
        id: "fa910f89-7682-44d7-9765-f2e2180cc4e6",
        text: "Тек массив элементтері алдын ала сұрыпталған (ordered) болса ғана"
      },
      {
        id: "655c504e-01e2-471e-b259-0aefda0fd878",
        text: "Массив элементтері сұрыпталмаған болса да жұмыс істейді"
      },
      {
        id: "3d3d7c12-be10-48c4-b0af-6eb5711c39e0",
        text: "Тек массив өлшемі 10-нан кіші болса"
      },
      {
        id: "daca1ccd-7e07-46f1-bc32-c1ff5a48ce42",
        text: "Тек екіөлшемді массивтер үшін жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "fa910f89-7682-44d7-9765-f2e2180cc4e6"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b53",
    subjectId: SubjectId.ALGO,
    text: "Екілік іздеу (binary search) алгоритмінің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "algo-t03-b53-op1",
        text: "O(log N)"
      },
      {
        id: "algo-t03-b53-op2",
        text: "O(N)"
      },
      {
        id: "algo-t03-b53-op3",
        text: "O(N^2)"
      },
      {
        id: "algo-t03-b53-op4",
        text: "O(1)"
      }
    ],
    correctOptionIds: [
      "algo-t03-b53-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b54",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде екілік іздеуді жүзеге асыратын стандартты функция қалай аталады?",
    options: [
      {
        id: "algo-t03-b54-op1",
        text: "std::binary_search()"
      },
      {
        id: "algo-t03-b54-op2",
        text: "std::bin_find()"
      },
      {
        id: "algo-t03-b54-op3",
        text: "std::search_binary()"
      },
      {
        id: "algo-t03-b54-op4",
        text: "std::quick_search()"
      }
    ],
    correctOptionIds: [
      "algo-t03-b54-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e88bbd80-339b-40ba-993d-84eedf91f545",
    subjectId: SubjectId.ALGO,
    text: "Сызықтық алгоритмді орындау барысында бағдарлама ағыны кері бағытқа немесе жоғары жолдарға қайта оралуы мүмкін бе?",
    options: [
      {
        id: "f075b651-e8b5-4277-9c8e-a615177b75b1",
        text: "Жоқ, сызықтық алгоритмде орындалу бағыты тек қана алға қарай сызықты өтеді"
      },
      {
        id: "7b7ac98b-1199-4336-bc31-8a080d7b59b8",
        text: "Иә, мүмкін"
      },
      {
        id: "0e13119a-af3c-47fe-a7a2-10bd959ec7d3",
        text: "Тек функция шақырылғанда ғана болады"
      },
      {
        id: "e3e04ad8-e7b6-413a-bf01-7cd704d05efd",
        text: "Қателіктерді өңдеуде ғана қайтады"
      }
    ],
    correctOptionIds: [
      "f075b651-e8b5-4277-9c8e-a615177b75b1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "bc5a7c4a-c689-40ca-a900-5f96b9fd967f",
    subjectId: SubjectId.ALGO,
    text: "Екіөлшемді квадраттық матрицаның бас диагональ бойындағы элементтерінің қосындысы қалай аталады?",
    options: [
      {
        id: "dd97c66c-7ee7-4994-8287-3170a9f8155f",
        text: "Матрицаның ізі (Trace of matrix)"
      },
      {
        id: "8764ed2f-22e1-4acb-9a83-bab9cdb75e13",
        text: "Матрицаның анықтауышы (Determinant)"
      },
      {
        id: "15bad127-895a-4507-9989-fcb8ca793205",
        text: "Матрицаның нормасы"
      },
      {
        id: "2b4a30ed-faa8-459e-831c-c2ae88b5690d",
        text: "Матрицаның рангі"
      }
    ],
    correctOptionIds: [
      "dd97c66c-7ee7-4994-8287-3170a9f8155f"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b55",
    subjectId: SubjectId.ALGO,
    text: "`switch` құрылымындағы `break` пен цикл ішіндегі `break`-тің басты айырмашылығы неде?",
    options: [
      {
        id: "algo-t03-b55-op1",
        text: "`switch`-тегі `break` тек switch-тен шығарады, ал цикл ішіндегі `break` бүкіл циклді тоқтатады"
      },
      {
        id: "algo-t03-b55-op2",
        text: "Олардың арасында ешқандай айырмашылық жоқ"
      },
      {
        id: "algo-t03-b55-op3",
        text: "Switch ішіндегі `break` бағдарламаны толық өшіреді"
      },
      {
        id: "algo-t03-b55-op4",
        text: "Цикл ішіндегі `break` тек келесі қадамды өткізіп жібереді"
      }
    ],
    correctOptionIds: [
      "algo-t03-b55-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b56",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде цикл шарты міндетті түрде тек `bool` типін қайтаруы керек пе?",
    options: [
      {
        id: "algo-t03-b56-op1",
        text: "Жоқ, логикалық мәнге түрлендірілетін кез келген скалярлық типті (мысалы, нөлге тең емес сан true, ал нөл false) қайтара алады"
      },
      {
        id: "algo-t03-b56-op2",
        text: "Иә, тек қана `bool` типін қайтаруы тиіс"
      },
      {
        id: "algo-t03-b56-op3",
        text: "Тек бүтін оң сандарды қайтаруы керек"
      },
      {
        id: "algo-t03-b56-op4",
        text: "Тек нұсқауыштарды қайтаруы тиіс"
      }
    ],
    correctOptionIds: [
      "algo-t03-b56-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6d6f7c53-4f49-4824-a98f-cb730702586a",
    subjectId: SubjectId.ALGO,
    text: "Массивті жаһандық (global) немесе локальді (local) етіп жариялаудың оның мүмкін болатын максималды өлшеміне әсері қандай?",
    options: [
      {
        id: "6c884c38-3c8b-41de-830d-b9e1d2b3fa1c",
        text: "Жаһандық массив статикалық жадта орналасқандықтан әлдеқайда үлкен болуы мүмкін, ал локальді массив шектеулі Стек (Stack) өлшемімен шектеледі"
      },
      {
        id: "06e1a617-ded5-4554-a0b8-b99b39675e7f",
        text: "Локальді массив әлдеқайда үлкен болуы мүмкін"
      },
      {
        id: "33f27d11-a526-4618-8437-b5e61922f9f4",
        text: "Жаһандық немесе локальді болуы оның өлшеміне мүлдем әсер етпейді"
      },
      {
        id: "70f2aab1-f003-4d86-9925-daaed07757b6",
        text: "Локальді массив үйінді жадында құрылады"
      }
    ],
    correctOptionIds: [
      "6c884c38-3c8b-41de-830d-b9e1d2b3fa1c"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8f4d479d-7935-424b-8fcc-a02256add8fa",
    subjectId: SubjectId.ALGO,
    text: "Массив атауының оның бірінші элементіне сілтейтін нұсқауышқа автоматты түрде айналу құбылысы қалай аталады?",
    options: [
      {
        id: "426f506c-c738-43d4-bb23-3a1cba00296a",
        text: "Массивтің ыдырауы (Array decay)"
      },
      {
        id: "6529fe76-d225-4818-898d-0c0b8e65ac81",
        text: "Массивтің жойылуы"
      },
      {
        id: "ed49adaf-2d25-45f1-9e96-beb259ad766d",
        text: "Массивтің кеңеюі"
      },
      {
        id: "08879ef6-aba2-4505-bb3e-9112822fdc3e",
        text: "Массивтің сұрыпталуы"
      }
    ],
    correctOptionIds: [
      "426f506c-c738-43d4-bb23-3a1cba00296a"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "daab7c8c-8c6b-4c2b-9063-1105ad12c591",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде 5 элементтен тұратын `int arr[5] = {0};` массивінің `arr[5]` элементіне қол жеткізсек не орын алады?",
    options: [
      {
        id: "c2ea6519-7f73-4379-9ab2-1e97f0182436",
        text: "Массив шекарасынан шығып кету (Out of bounds) қатесі / Анықталмаған әрекет (Undefined behavior)"
      },
      {
        id: "744ec61f-1b20-48f4-9a24-4671ad1f55ac",
        text: "Массивтің соңғы элементі (0) қайтарылады"
      },
      {
        id: "66195b84-3ac9-41cd-99c4-f5a2ec21973d",
        text: "Автоматты түрде жаңа элемент қосылып, оның мәні 0 болады"
      },
      {
        id: "e4e7f700-818b-45c4-8c1a-bda995682bfb",
        text: "Бағдарлама қалыпты түрде сәтті аяқталады"
      }
    ],
    correctOptionIds: [
      "c2ea6519-7f73-4379-9ab2-1e97f0182436"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "582c5524-bf2d-436f-8448-4c6e3e8e0a65",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде статикалық жарияланған массивтің өлшемін (элементтер санын) есептейтін дұрыс өрнек қандай?",
    options: [
      {
        id: "7ab884cc-dd72-41f0-a422-60a28cbfb020",
        text: "sizeof(arr) / sizeof(arr[0])"
      },
      {
        id: "cf94fdaf-243b-40d4-b4dc-5cd40f8dc3e1",
        text: "sizeof(arr)"
      },
      {
        id: "840ade8d-84c7-4571-abf8-74d15c654504",
        text: "arr.length()"
      },
      {
        id: "4cf3cf64-06da-4179-a162-3282f82bd0d9",
        text: "arr.size()"
      }
    ],
    correctOptionIds: [
      "7ab884cc-dd72-41f0-a422-60a28cbfb020"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b57",
    subjectId: SubjectId.ALGO,
    text: "Неліктен өте үлкен деректер жиынында сызықтық іздеудің орнына екілік іздеу қолданылады?",
    options: [
      {
        id: "algo-t03-b57-op1",
        text: "Екілік іздеу O(log N) уақытында жұмыс істейді, бұл O(N) сызықтық іздеуге қарағанда әлдеқайда жылдам"
      },
      {
        id: "algo-t03-b57-op2",
        text: "Екілік іздеу жадты мүлдем талап етпейді"
      },
      {
        id: "algo-t03-b57-op3",
        text: "Екілік іздеу сұрыпталмаған массивтерде де тез жұмыс істейді"
      },
      {
        id: "algo-t03-b57-op4",
        text: "Сызықтық іздеу тек мәтіндер үшін қолданылады"
      }
    ],
    correctOptionIds: [
      "algo-t03-b57-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b58",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `std::vector::push_back(val)` әдісі қандай әрекет орындайды?",
    options: [
      {
        id: "algo-t03-b58-op1",
        text: "Вектордың соңына жаңа элемент қосады және қажет болса жадты қайта бөледі"
      },
      {
        id: "algo-t03-b58-op2",
        text: "Вектордың басына жаңа элемент қосады"
      },
      {
        id: "algo-t03-b58-op3",
        text: "Вектордың ең соңғы элементін өшіреді"
      },
      {
        id: "algo-t03-b58-op4",
        text: "Векторды өсу ретімен сұрыптайды"
      }
    ],
    correctOptionIds: [
      "algo-t03-b58-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t03-b59",
    subjectId: SubjectId.ALGO,
    text: "Статикалық массив жарияланғаннан кейін оның өлшемін (сыйымдылығын) өзгертуге бола ма?",
    options: [
      {
        id: "algo-t03-b59-op1",
        text: "Жоқ, статикалық массивтің өлшемі жарияланғаннан кейін өзгермейтін тұрақты болып қалады"
      },
      {
        id: "algo-t03-b59-op2",
        text: "Иә, `resize()` әдісі арқылы болады"
      },
      {
        id: "algo-t03-b59-op3",
        text: "Иә, оған жаңа элементтерді қосу арқылы автоматты түрде кеңейеді"
      },
      {
        id: "algo-t03-b59-op4",
        text: "Тек оның элементтерін өшіргенде ғана өлшемі кішірейеді"
      }
    ],
    correctOptionIds: [
      "algo-t03-b59-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f5581b3c-0f99-4eed-92d8-e5224af715f0",
    subjectId: SubjectId.ALGO,
    text: "Элементтерінің басым көпшілігі нөлге (немесе әдепкі мәнге) тең болатын матрицалар қалай аталады?",
    options: [
      {
        id: "3596d607-84b0-41a9-98f6-38a016970a6f",
        text: "Сирек матрицалар (Sparse matrix)"
      },
      {
        id: "cf739837-4873-4ae0-9536-da503fc64660",
        text: "Тығыз матрицалар"
      },
      {
        id: "1bf34b35-b3a2-41a9-8653-65697417d70f",
        text: "Бірлік матрицалар"
      },
      {
        id: "22753f37-6d0f-4abb-aa62-dcd73cc806ae",
        text: "Нөлдік матрицалар"
      }
    ],
    correctOptionIds: [
      "3596d607-84b0-41a9-98f6-38a016970a6f"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдердің әртүрлі құрылымдарын бағдарламалау",
    difficulty: Difficulty.MEDIUM
  }
];
