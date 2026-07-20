import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// algo / Функциялар және рекурсивті функциялар
export const algo4FunctionsAndRecursionQuestions : Question[] = [
  {
    id: "algo-t04-b01",
    subjectId: SubjectId.ALGO,
    text: "Функция не үшін қолданылады?",
    options: [
      {
        id: "algo-t04-b01-op1",
        text: "Деректерді сақтау"
      },
      {
        id: "algo-t04-b01-op2",
        text: "Циклді құру"
      },
      {
        id: "algo-t04-b01-op3",
        text: "Кодты қайта пайдалануға болатын блоктарға бөлу"
      },
      {
        id: "algo-t04-b01-op4",
        text: "Айнымалы жариялау"
      }
    ],
    correctOptionIds: [
      "algo-t04-b01-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b02",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі 'return' кілт сөзі не істейді?",
    options: [
      {
        id: "algo-t04-b02-op1",
        text: "Шарт тексереді"
      },
      {
        id: "algo-t04-b02-op2",
        text: "Функциядан мән қайтарады"
      },
      {
        id: "algo-t04-b02-op3",
        text: "Айнымалы жариялайды"
      },
      {
        id: "algo-t04-b02-op4",
        text: "Цикл тоқтатады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b02-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b03",
    subjectId: SubjectId.ALGO,
    text: "'void' функциясы не дегенді білдіреді?",
    options: [
      {
        id: "algo-t04-b03-op1",
        text: "Бүтін сан қайтарады"
      },
      {
        id: "algo-t04-b03-op2",
        text: "Мән қайтармайды"
      },
      {
        id: "algo-t04-b03-op3",
        text: "Жол қайтарады"
      },
      {
        id: "algo-t04-b03-op4",
        text: "Мән қайтарады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b03-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b04",
    subjectId: SubjectId.ALGO,
    text: "Функция рекурсиясы дегеніміз не?",
    options: [
      {
        id: "algo-t04-b04-op1",
        text: "Функцияның өз-өзін шақыруы"
      },
      {
        id: "algo-t04-b04-op2",
        text: "Функцияның басқа файлдан оқылуы"
      },
      {
        id: "algo-t04-b04-op3",
        text: "Функцияның ешқандай мән қайтармауы"
      },
      {
        id: "algo-t04-b04-op4",
        text: "Функция ішіндегі цикл"
      }
    ],
    correctOptionIds: [
      "algo-t04-b04-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b05",
    subjectId: SubjectId.ALGO,
    text: "Рекурсивті функцияның тоқтау шарты (base case) болмаса не орын алады?",
    options: [
      {
        id: "algo-t04-b05-op1",
        text: "Stack Overflow (бағдарлама стек толып қалып тоқтайды)"
      },
      {
        id: "algo-t04-b05-op2",
        text: "Бағдарлама шексіз тез жұмыс істейді"
      },
      {
        id: "algo-t04-b05-op3",
        text: "Ешқандай қате болмайды"
      },
      {
        id: "algo-t04-b05-op4",
        text: "Компьютер өшіп қалады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b05-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b06",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде функцияның параметрлерін мәні бойынша өткізу (pass by value) кезінде не болады?",
    options: [
      {
        id: "algo-t04-b06-op1",
        text: "Параметрдің көшірмесі жасалады (бастапқы мән өзгермейді)"
      },
      {
        id: "algo-t04-b06-op2",
        text: "Параметрдің сілтемесі беріледі"
      },
      {
        id: "algo-t04-b06-op3",
        text: "Бастапқы мән өзгереді"
      },
      {
        id: "algo-t04-b06-op4",
        text: "Жады үнемделеді"
      }
    ],
    correctOptionIds: [
      "algo-t04-b06-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b07",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде параметрді сілтеме бойынша өткізу (pass by reference) қалай белгіленеді?",
    options: [
      {
        id: "algo-t04-b07-op1",
        text: "Типтен кейін & белгісін қою арқылы (мысалы, int &x)"
      },
      {
        id: "algo-t04-b07-op2",
        text: "Типтен кейін * қою арқылы"
      },
      {
        id: "algo-t04-b07-op3",
        text: "const кілт сөзімен"
      },
      {
        id: "algo-t04-b07-op4",
        text: "Тек параметр атымен"
      }
    ],
    correctOptionIds: [
      "algo-t04-b07-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b08",
    subjectId: SubjectId.ALGO,
    text: "Рекурсиялық функцияның итеративті (циклдік) нұсқадан басты кемшілігі қандай?",
    options: [
      {
        id: "algo-t04-b08-op1",
        text: "Стек жадын көп тұтынады және жылдамдығы сәл төмен болуы мүмкін"
      },
      {
        id: "algo-t04-b08-op2",
        text: "Жазу өте қиын"
      },
      {
        id: "algo-t04-b08-op3",
        text: "Ешқашан жұмыс істемейді"
      },
      {
        id: "algo-t04-b08-op4",
        text: "Тек C++ тілінде ғана қолданылады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b08-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "cad88fd8-c4a5-4b7d-b058-df2f963b2a20",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде бірдей атаулы, бірақ параметрлері әртүрлі функциялардың бірнеше нұсқасын жазу қалай аталады?",
    options: [
      {
        id: "1efc3d5a-ed8e-41bd-91bd-8451585ddf44",
        text: "Функцияларды қайта жүктеу (Function Overloading)"
      },
      {
        id: "284fd02f-3709-47fd-b68a-0d9f68c4336a",
        text: "Функцияны анықтау"
      },
      {
        id: "c547cf6e-ec82-4727-9a99-3c3cdbf46aa7",
        text: "Рекурсия"
      },
      {
        id: "b3195cdb-06ec-48e0-a80b-d639a8efacec",
        text: "Полиморфизм"
      }
    ],
    correctOptionIds: [
      "1efc3d5a-ed8e-41bd-91bd-8451585ddf44"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "26117305-682e-4854-bcfc-bf9e3e743b40",
    subjectId: SubjectId.ALGO,
    text: "Функцияның кіріс параметрлері жоқ екенін білдіру үшін немесе ештеңе қайтармайтын функцияның типін көрсету үшін қолданылатын кілтсөз қандай?",
    options: [
      {
        id: "2e549e4a-455a-47ae-97a1-cf944fee04ad",
        text: "void"
      },
      {
        id: "67644aac-6cd9-417d-a405-9b19fca3ff51",
        text: "int"
      },
      {
        id: "c2eff034-0380-4d13-b97c-6ff07af7b680",
        text: "null"
      },
      {
        id: "604e5750-9081-4cba-af0f-99360810c9d3",
        text: "empty"
      }
    ],
    correctOptionIds: [
      "2e549e4a-455a-47ae-97a1-cf944fee04ad"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b09",
    subjectId: SubjectId.ALGO,
    text: "Рекурсивті функцияның \"тереңдігі\" (recursion depth) дегеніміз не?",
    options: [
      {
        id: "algo-t04-b09-op1",
        text: "Рекурсияның тоқтау шартына жеткенге дейін өзін-өзі шақырған жалпы саны"
      },
      {
        id: "algo-t04-b09-op2",
        text: "Функцияның өлшемі"
      },
      {
        id: "algo-t04-b09-op3",
        text: "Стек жадының көлемі"
      },
      {
        id: "algo-t04-b09-op4",
        text: "Функция аргументтерінің саны"
      }
    ],
    correctOptionIds: [
      "algo-t04-b09-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b10",
    subjectId: SubjectId.ALGO,
    text: "Стек жады толып қалудың (stack overflow) алдын алу үшін рекурсивті функцияда не істеу керек?",
    options: [
      {
        id: "algo-t04-b10-op1",
        text: "Тоқтау шартын (base case) дұрыс баптап, рекурсия тереңдігін бақылау"
      },
      {
        id: "algo-t04-b10-op2",
        text: "Рекурсияны мүлдем қолданбау"
      },
      {
        id: "algo-t04-b10-op3",
        text: "Глобалды айнымалыларды көбейту"
      },
      {
        id: "algo-t04-b10-op4",
        text: "Функция типін double ету"
      }
    ],
    correctOptionIds: [
      "algo-t04-b10-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b11",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде функцияның параметрін нұсқауыш (pointer) арқылы өткізу қалай жазылады?",
    options: [
      {
        id: "algo-t04-b11-op1",
        text: "Функция аргументінде жұлдызшамен белгілеп (мысалы, int *x), шақырғанда мекенжайын (&var) беру"
      },
      {
        id: "algo-t04-b11-op2",
        text: "Параметрдің алдына & қою арқылы"
      },
      {
        id: "algo-t04-b11-op3",
        text: "Параметр типін void ету арқылы"
      },
      {
        id: "algo-t04-b11-op4",
        text: "const қолдану арқылы"
      }
    ],
    correctOptionIds: [
      "algo-t04-b11-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b12",
    subjectId: SubjectId.ALGO,
    text: "Inline функциясының (inline function) мақсаты не?",
    options: [
      {
        id: "algo-t04-b12-op1",
        text: "Функцияны шақыру шығындарын азайту үшін оның кодын шақырылған жерге тікелей кірістіру"
      },
      {
        id: "algo-t04-b12-op2",
        text: "Функцияны жылдам рекурсиялау"
      },
      {
        id: "algo-t04-b12-op3",
        text: "Жадыны үнемдеу"
      },
      {
        id: "algo-t04-b12-op4",
        text: "Функцияны сыртқы файлға жазу"
      }
    ],
    correctOptionIds: [
      "algo-t04-b12-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b13",
    subjectId: SubjectId.ALGO,
    text: "Рекурсияны қолданбай-ақ кез келген рекурсивті есепті шешуге бола ма?",
    options: [
      {
        id: "algo-t04-b13-op1",
        text: "Иә, өздігінен жасалған стек құрылымын және циклдерді қолдану арқылы (итеративті түрде) шешуге болады"
      },
      {
        id: "algo-t04-b13-op2",
        text: "Жоқ, рекурсияны циклмен алмастыру мүмкін емес"
      },
      {
        id: "algo-t04-b13-op3",
        text: "Иә, тек хэш-кестелерді қолдану арқылы ғана"
      },
      {
        id: "algo-t04-b13-op4",
        text: "Жоқ, тек бинарлық ағаштар арқылы ғана шешіледі"
      }
    ],
    correctOptionIds: [
      "algo-t04-b13-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b14",
    subjectId: SubjectId.ALGO,
    text: "Функция прототипі (Function Prototype / Declaration) деген не?",
    options: [
      {
        id: "algo-t04-b14-op1",
        text: "Функцияның атын, қайтаратын типін және параметрлерін оның толық анықтамасына дейін компиляторға хабарлайтын жариялау"
      },
      {
        id: "algo-t04-b14-op2",
        text: "Функцияның ішіндегі барлық код блогы"
      },
      {
        id: "algo-t04-b14-op3",
        text: "Функцияның рекурсивті шақырылу тізімі"
      },
      {
        id: "algo-t04-b14-op4",
        text: "Функцияның жадтағы мекенжайы"
      }
    ],
    correctOptionIds: [
      "algo-t04-b14-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "437c86df-cdea-4b5b-ab97-c530a63996e0",
    subjectId: SubjectId.ALGO,
    text: "Функцияның жариялануы (declaration) мен анықталуы (definition) арасындағы басты айырмашылық қандай?",
    options: [
      {
        id: "66d3a185-4f79-42af-99a2-7ef2b0ee2f1d",
        text: "Жариялау тек функцияның интерфейсін (сигнатурасын) көрсетеді, ал анықтау оның қалай жұмыс істейтінін (код денесін) жазады"
      },
      {
        id: "3395244e-060c-46da-8bfb-f3b2dc7c5e56",
        text: "Анықтау тек айнымалыларды сақтайды"
      },
      {
        id: "0ec43c44-17d1-4731-81a4-38bd6817a505",
        text: "Жариялау әрқашан динамикалық жадта орындалады"
      },
      {
        id: "7e223424-2f60-4af2-ba67-068cf2092e39",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "66d3a185-4f79-42af-99a2-7ef2b0ee2f1d"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b15",
    subjectId: SubjectId.ALGO,
    text: "Стек фреймі (Stack Frame / Activation Record) дегеніміз не?",
    options: [
      {
        id: "algo-t04-b15-op1",
        text: "Функция шақырылғанда оның локальді айнымалыларын, параметрлерін және кері қайту мекенжайын сақтау үшін стекте бөлінетін жад аймағы"
      },
      {
        id: "algo-t04-b15-op2",
        text: "Динамикалық массивтің өлшемін өзгертетін құрылым"
      },
      {
        id: "algo-t04-b15-op3",
        text: "Кодтағы циклдердің жалпы санын есептегіш"
      },
      {
        id: "algo-t04-b15-op4",
        text: "Жаһандық айнымалылардың жиынтығы"
      }
    ],
    correctOptionIds: [
      "algo-t04-b15-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b16",
    subjectId: SubjectId.ALGO,
    text: "Рекурсияның тоқтау шарты (Base Case) деген не?",
    options: [
      {
        id: "algo-t04-b16-op1",
        text: "Рекурсивті шақыруларды тоқтатып, функцияның нақты мән қайтаруына мүмкіндік беретін қарапайым шарт"
      },
      {
        id: "algo-t04-b16-op2",
        text: "Функцияны іске қосатын бастапқы шарт"
      },
      {
        id: "algo-t04-b16-op3",
        text: "Жад толып кеткенде шығатын қателік"
      },
      {
        id: "algo-t04-b16-op4",
        text: "Циклдың қайталану санын анықтайтын айнымалы"
      }
    ],
    correctOptionIds: [
      "algo-t04-b16-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b17",
    subjectId: SubjectId.ALGO,
    text: "Құйрықты рекурсия (Tail Recursion) деген не?",
    options: [
      {
        id: "algo-t04-b17-op1",
        text: "Рекурсивті шақыру функцияның ең соңғы орындайтын амалы болатын және одан кейін ешқандай есептеулер жасалмайтын рекурсия түрі"
      },
      {
        id: "algo-t04-b17-op2",
        text: "Функцияның тек басында ғана шақырылатын рекурсия"
      },
      {
        id: "algo-t04-b17-op3",
        text: "Шексіз циклге әкелетін қате рекурсия"
      },
      {
        id: "algo-t04-b17-op4",
        text: "Екі түрлі функцияның бірін-бірі кезекпен шақыруы"
      }
    ],
    correctOptionIds: [
      "algo-t04-b17-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b18",
    subjectId: SubjectId.ALGO,
    text: "Компилятор құйрықты рекурсияны (Tail Call Optimization) қалай оңтайландыра алады?",
    options: [
      {
        id: "algo-t04-b18-op1",
        text: "Ағымдағы стек фреймін қайта пайдаланып, рекурсияны қарапайым циклге айналдыру арқылы стек толуының алдын алады"
      },
      {
        id: "algo-t04-b18-op2",
        text: "Функцияны динамикалық жадқа көшіреді"
      },
      {
        id: "algo-t04-b18-op3",
        text: "Стек фреймдерінің көлемін екі есеге үлкейтеді"
      },
      {
        id: "algo-t04-b18-op4",
        text: "Барлық рекурсивті шақыруларды өшіреді"
      }
    ],
    correctOptionIds: [
      "algo-t04-b18-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "cb70d871-c3a0-4d26-9ca9-f2679465cadb",
    subjectId: SubjectId.ALGO,
    text: "Функция ішінде жарияланған локальді айнымалыға сілтемені (reference) немесе нұсқауышты функциядан тыс жерге қайтаруға бола ма?",
    options: [
      {
        id: "bd106990-b8c6-4d71-8324-6daa9f543274",
        text: "Жоқ, функция аяқталғанда локальді айнымалы стек жадынан жойылады, сондықтан \"ілулі сілтеме\" (dangling reference) қатесі туындайды"
      },
      {
        id: "233c2b5e-6437-4946-956a-382a0cc888fc",
        text: "Иә, кез келген локальді айнымалыны сілтеме арқылы қауіпсіз қайтаруға болады"
      },
      {
        id: "c25d542e-ee91-4d17-8f00-2ad262681ad0",
        text: "Иә, тек айнымалы типі `int` немесе `float` болса болады"
      },
      {
        id: "5a8dd870-2324-47ae-9d5c-c236d94b0b10",
        text: "Иә, бұл жадты үнемдеудин ең жақсы жолы"
      }
    ],
    correctOptionIds: [
      "bd106990-b8c6-4d71-8324-6daa9f543274"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e839a014-847e-4b8c-b132-b39973d207dc",
    subjectId: SubjectId.ALGO,
    text: "Функция ішінде `static` кілтсөзімен жарияланған айнымалының өмір сүру уақыты (lifetime) қандай?",
    options: [
      {
        id: "b8a8f80e-5e1f-4b28-89a9-8e5818f48f5e",
        text: "Бағдарлама басталғаннан аяқталғанға дейін өмір сүреді және шақырулар арасында өз мәнін сақтайды"
      },
      {
        id: "7b68ab57-9aa8-4bcc-835e-a886f1ad9e3a",
        text: "Тек функция бірінші рет орындалып біткенше өмір сүреді"
      },
      {
        id: "1eea3499-eff2-4db5-997f-ab7f49838d4b",
        text: "Циклдың бір ғана қадамында өмір сүреді"
      },
      {
        id: "14e234e1-66c5-415f-a4ac-b5794e74d7cc",
        text: "Желдік жад таусылғанша ғана сақталады"
      }
    ],
    correctOptionIds: [
      "b8a8f80e-5e1f-4b28-89a9-8e5818f48f5e"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b19",
    subjectId: SubjectId.ALGO,
    text: "Рекурсивті шақырулар ағашы (Recursive Call Tree) не үшін қолданылады?",
    options: [
      {
        id: "algo-t04-b19-op1",
        text: "Рекурсияның қадамдарын және орындалатын шақырулардың иерархиясын, олардың уақыттық күрделілігін көрнекі талдау үшін"
      },
      {
        id: "algo-t04-b19-op2",
        text: "Кодты жылдам компиляциялау үшін"
      },
      {
        id: "algo-t04-b19-op3",
        text: "Жүйедеге бос жад көлемін өлшеу үшін"
      },
      {
        id: "algo-t04-b19-op4",
        text: "Массив элементтерін индекстеу үшін"
      }
    ],
    correctOptionIds: [
      "algo-t04-b19-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "53e0833f-5111-4d9b-a0f8-7c18c685ba8f",
    subjectId: SubjectId.ALGO,
    text: "Фибоначчи сандарын табудың қарапайым рекурсивті алгоритмінің тиімсіз болуының (уақыт күрделілігі O(2^N)) басты себебі неде?",
    options: [
      {
        id: "9e749834-9323-46bd-84ac-ebf7eedfd551",
        text: "Бірдей қосымша есептердің (subproblems) өте көп рет қайталанып есептелуі"
      },
      {
        id: "f2bca08c-978b-4469-81f5-87d891b8cf19",
        text: "Стек жадының жеткіліксіздігі"
      },
      {
        id: "6d2eed75-cbae-4e7a-a207-bb294f071c0e",
        text: "Бүтін сандардың шектен тыс толуы"
      },
      {
        id: "e1dc3cfc-c7d5-4435-8268-65ea0c745d35",
        text: "Рекурсияның тоқтау шартының дұрыс жазылмауы"
      }
    ],
    correctOptionIds: [
      "9e749834-9323-46bd-84ac-ebf7eedfd551"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b20",
    subjectId: SubjectId.ALGO,
    text: "Мемоизация (Memoization) деген не?",
    options: [
      {
        id: "algo-t04-b20-op1",
        text: "Рекурсивті есептеулерде бұрын есептелген нәтижелерді жадта (мысалы, массивте) сақтап, қажет болса қайта есептемей тікелей қолдану әдісі"
      },
      {
        id: "algo-t04-b20-op2",
        text: "Жадтың бос аймақтарын дефрагментациялау"
      },
      {
        id: "algo-t04-b20-op3",
        text: "Айнымалыларды автоматты түрде өшіру процесі"
      },
      {
        id: "algo-t04-b20-op4",
        text: "Бағдарламаның тек бірінші жолын тексеру"
      }
    ],
    correctOptionIds: [
      "algo-t04-b20-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b21",
    subjectId: SubjectId.ALGO,
    text: "Мемоизацияны қолданғанда Фибоначчи сандарын табудың уақыттық күрделілігі қалай өзгереді?",
    options: [
      {
        id: "algo-t04-b21-op1",
        text: "O(2^N)-нен O(N)-ге дейін қысқарады"
      },
      {
        id: "algo-t04-b21-op2",
        text: "Ешқандай өзгеріс болмайды"
      },
      {
        id: "algo-t04-b21-op3",
        text: "O(N log N) болады"
      },
      {
        id: "algo-t04-b21-op4",
        text: "O(1) болады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b21-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b22",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі функциялардың әдепкі аргументтері (Default Arguments) деген не?",
    options: [
      {
        id: "algo-t04-b22-op1",
        text: "Шақыру кезінде тиісті параметр берілмесе, автоматты түрде қолданылатын алдын ала анықталған мәндер"
      },
      {
        id: "algo-t04-b22-op2",
        text: "Тек оң сандармен шектелетін параметрлер"
      },
      {
        id: "algo-t04-b22-op3",
        text: "Компилятордың автоматты түрде беретін кездейсоқ мәндері"
      },
      {
        id: "algo-t04-b22-op4",
        text: "Жоғары басымдыққа ие айнымалылар"
      }
    ],
    correctOptionIds: [
      "algo-t04-b22-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "73e380e4-1ff3-4c06-b8d6-a06af0c8557c",
    subjectId: SubjectId.ALGO,
    text: "Функция параметрлерінің тізімінде әдепкі аргументтерді (default arguments) қай жерде жариялау қажет?",
    options: [
      {
        id: "20380feb-26ff-41ee-8672-42db3244869e",
        text: "Параметрлер тізімінің ең соңында (оң жағында)"
      },
      {
        id: "14890085-8de8-4152-a494-46a9633b9d47",
        text: "Тізімнің ең басында (сол жағында)"
      },
      {
        id: "da33fffb-a91f-4b57-8bd5-c4d098bebba7",
        text: "Параметрлер тізімінің кез келген жерінде ортасында"
      },
      {
        id: "dd57db4f-9a02-497e-880a-d48f41688e4e",
        text: "Тек функцияның ішінде ғана анықтау керек"
      }
    ],
    correctOptionIds: [
      "20380feb-26ff-41ee-8672-42db3244869e"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b23",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі функция нұсқауышы (Function Pointer) деген не?",
    options: [
      {
        id: "algo-t04-b23-op1",
        text: "Функцияның орындалатын коды жазылған жад мекенжайын сақтайтын айнымалы"
      },
      {
        id: "algo-t04-b23-op2",
        text: "Функцияны автоматты түрде өшіретін нұсқауыш"
      },
      {
        id: "algo-t04-b23-op3",
        text: "Массив элементін сілтейтін индекс"
      },
      {
        id: "algo-t04-b23-op4",
        text: "Рекурсияны басқаратын шарт"
      }
    ],
    correctOptionIds: [
      "algo-t04-b23-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b24",
    subjectId: SubjectId.ALGO,
    text: "`void (*funcPtr)(int);` жариялауы нені білдіреді?",
    options: [
      {
        id: "algo-t04-b24-op1",
        text: "Бір бүтін сандық параметр қабылдайтын және ештеңе қайтармайтын (void) функцияға нұсқауыш"
      },
      {
        id: "algo-t04-b24-op2",
        text: "Ештеңе қайтармайтын функцияның прототипі"
      },
      {
        id: "algo-t04-b24-op3",
        text: "Массив элементтеріне сілтеме жасайтын нұсқауыш"
      },
      {
        id: "algo-t04-b24-op4",
        text: "Жаңа деректер типін құру операторы"
      }
    ],
    correctOptionIds: [
      "algo-t04-b24-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b25",
    subjectId: SubjectId.ALGO,
    text: "Кері шақыру функциясы (Callback Function) деген не?",
    options: [
      {
        id: "algo-t04-b25-op1",
        text: "Басқа функцияға параметр ретінде берілетін және белгілі бір оқиға орын алғанда орындалатын функция"
      },
      {
        id: "algo-t04-b25-op2",
        text: "Өзін-өзі шексіз шақыратын функция"
      },
      {
        id: "algo-t04-b25-op3",
        text: "Бағдарламаның соңында автоматты түрде орындалатын жүйелік функция"
      },
      {
        id: "algo-t04-b25-op4",
        text: "Қателер туралы ақпарат беретін функция"
      }
    ],
    correctOptionIds: [
      "algo-t04-b25-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b26",
    subjectId: SubjectId.ALGO,
    text: "C++11 стандартындағы Лямбда-өрнек (Lambda Expression) деген не?",
    options: [
      {
        id: "algo-t04-b26-op1",
        text: "Анонимді (атаусыз) локальді функцияларды тікелей орындалатын жерде қысқаша анықтау тәсілі"
      },
      {
        id: "algo-t04-b26-op2",
        text: "Екі өлшемді массив түрі"
      },
      {
        id: "algo-t04-b26-op3",
        text: "Рекурсияның тоқтау шарты"
      },
      {
        id: "algo-t04-b26-op4",
        text: "Сыртқы файлдармен байланыс орнататын жүйелік кітапхана"
      }
    ],
    correctOptionIds: [
      "algo-t04-b26-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b27",
    subjectId: SubjectId.ALGO,
    text: "Лямбда-өрнектің `[=]` белгісі нені білдіреді?",
    options: [
      {
        id: "algo-t04-b27-op1",
        text: "Айналадағы барлық локальді айнымалыларды мәні бойынша (by value) көшіріп алуды"
      },
      {
        id: "algo-t04-b27-op2",
        text: "Барлық айнымалыларды сілтеме бойынша (by reference) алуды"
      },
      {
        id: "algo-t04-b27-op3",
        text: "Лямбда-өрнектің мән қайтармайтынын"
      },
      {
        id: "algo-t04-b27-op4",
        text: "Айнымалыларды тек оқу үшін блоктауды"
      }
    ],
    correctOptionIds: [
      "algo-t04-b27-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b28",
    subjectId: SubjectId.ALGO,
    text: "Лямбда-өрнектің `[&]` белгісі нені білдіреді?",
    options: [
      {
        id: "algo-t04-b28-op1",
        text: "Айналадағы барлық локальді айнымалыларды сілтеме бойынша (by reference) алуды"
      },
      {
        id: "algo-t04-b28-op2",
        text: "Барлық айнымалыларды мәні бойынша көшіруді"
      },
      {
        id: "algo-t04-b28-op3",
        text: "Шарттың тек оң сандармен орындалатынын"
      },
      {
        id: "algo-t04-b28-op4",
        text: "Стек фреймін өшіруді"
      }
    ],
    correctOptionIds: [
      "algo-t04-b28-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "29e447b4-1ca3-45c1-a5ad-2a6a839452d5",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде функцияларды қайта жүктеу (Function Overloading) үшін қандай талаптар сақталуы тиіс?",
    options: [
      {
        id: "1abbeb6d-1d12-4f38-81de-f98ad20f54a2",
        text: "Функциялардың параметрлерінің саны, типі немесе орналасу реті әртүрлі болуы керек"
      },
      {
        id: "e52bff53-de30-4d1d-b6ba-05b724dc3202",
        text: "Функциялардың тек қайтаратын типі ғана әртүрлі болуы жеткілікті"
      },
      {
        id: "bff2ba9e-e1c3-43c4-996d-a23d182e77a3",
        text: "Функциялардың тек атаулары әртүрлі болуы керек"
      },
      {
        id: "11c3c7d7-7bc6-4fb8-bb60-2dcad47e0069",
        text: "Функциялар әрқашан рекурсивті болуы тиіс"
      }
    ],
    correctOptionIds: [
      "1abbeb6d-1d12-4f38-81de-f98ad20f54a2"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a269f6d8-23c8-49d8-8a85-c36855aaae5d",
    subjectId: SubjectId.ALGO,
    text: "Тек қайтаратын типі ғана ерекшеленетін, бірақ атауы мен параметрлері бірдей екі функцияны C++ тілінде қайта жүктеуге бола ма?",
    options: [
      {
        id: "933f873d-b69a-4e90-823b-5e07a61686ff",
        text: "Жоқ, компиляция қатесі туындайды (қайтаратын тип қана функцияларды ажыратуға жеткіліксіз)"
      },
      {
        id: "17af71b5-a445-4d77-ad07-c62b9f70598f",
        text: "Иә, бұл қалыпты жағдай"
      },
      {
        id: "fa76e73d-4d47-4ca8-97ec-77833b91d96e",
        text: "Тек олар `static` болса ғана болады"
      },
      {
        id: "5b3781c9-15f1-4c03-96dd-defb19ad018e",
        text: "Тек олар `inline` болса ғана болады"
      }
    ],
    correctOptionIds: [
      "933f873d-b69a-4e90-823b-5e07a61686ff"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "4fc3c409-29b6-4e18-9584-4e379045d759",
    subjectId: SubjectId.ALGO,
    text: "Компилятор C++ тіліндеге жүктелген функцияларды ажырату үшін олардың атаулары мен параметрлер типтерін бірегей кодқа түрлендіру процесі қалай аталады?",
    options: [
      {
        id: "0ca31297-2268-4bcd-bbc2-eb64da759609",
        text: "Атауларды бұрмалау (Name Mangling / Decoration)"
      },
      {
        id: "ee1fc15e-4342-4f63-9d19-bed6062d37b1",
        text: "Байланыстыру (Linking)"
      },
      {
        id: "4326ad2a-7eca-4a7e-b9ab-9be1404f668b",
        text: "Оңтайландыру (Optimization)"
      },
      {
        id: "35fda8cc-b163-41fa-8829-1a6e19d19da1",
        text: "Ассемблерлеу"
      }
    ],
    correctOptionIds: [
      "0ca31297-2268-4bcd-bbc2-eb64da759609"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b29",
    subjectId: SubjectId.ALGO,
    text: "C++ бағдарламасындағы `extern \"C\"` операторы не үшін қолданылады?",
    options: [
      {
        id: "algo-t04-b29-op1",
        text: "C++ компиляторына функция атауларының бұрмалануын (name mangling) өшіріп, C стилінде байланыстыруды нұсқау үшін"
      },
      {
        id: "algo-t04-b29-op2",
        text: "Бағдарламаны С тіліне толық аудару үшін"
      },
      {
        id: "algo-t04-b29-op3",
        text: "С тілінің кітапханаларын өшіру үшін"
      },
      {
        id: "algo-t04-b29-op4",
        text: "Динамикалық жадты жылдам сұрату үшін"
      }
    ],
    correctOptionIds: [
      "algo-t04-b29-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b30",
    subjectId: SubjectId.ALGO,
    text: "Стек фреймдерін босату (Stack Unwinding) деген не?",
    options: [
      {
        id: "algo-t04-b30-op1",
        text: "Ерекше жағдайлар (exceptions) орын алғанда немесе функция аяқталғанда стектегі локальді объектілердің деструкторларын шақырып, фреймдерді тазарту процесі"
      },
      {
        id: "algo-t04-b30-op2",
        text: "Динамикалық жадты үйіндіге көшіру"
      },
      {
        id: "algo-t04-b30-op3",
        text: "Рекурсияны шексіз орындау режимі"
      },
      {
        id: "algo-t04-b30-op4",
        text: "Компилятордың қателерді тізімдеуі"
      }
    ],
    correctOptionIds: [
      "algo-t04-b30-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7cd67185-5da5-4588-9706-503b465646c5",
    subjectId: SubjectId.ALGO,
    text: "Рекурсивті Екілік Іздеу (Binary Search) алгоритмінің кеңістіктік (space) күрделілігі (шақыру стегін есептегенде) қандай?",
    options: [
      {
        id: "2999260f-9529-4294-b4ff-7fbd13b5acb9",
        text: "O(log N)"
      },
      {
        id: "04ab6a0c-0cdb-4af6-8f70-9e9941de1701",
        text: "O(1)"
      },
      {
        id: "9358a93b-0187-4902-9387-880ac4e45409",
        text: "O(N)"
      },
      {
        id: "940fe48e-04c5-4fa6-b2ae-2d4d568edd05",
        text: "O(N^2)"
      }
    ],
    correctOptionIds: [
      "2999260f-9529-4294-b4ff-7fbd13b5acb9"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b31",
    subjectId: SubjectId.ALGO,
    text: "Итеративті (циклдік) Екілік Іздеудің кеңістіктік күрделілігі қандай?",
    options: [
      {
        id: "algo-t04-b31-op1",
        text: "O(1)"
      },
      {
        id: "algo-t04-b31-op2",
        text: "O(log N)"
      },
      {
        id: "algo-t04-b31-op3",
        text: "O(N)"
      },
      {
        id: "algo-t04-b31-op4",
        text: "O(N^2)"
      }
    ],
    correctOptionIds: [
      "algo-t04-b31-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b32",
    subjectId: SubjectId.ALGO,
    text: "Санның факториалын табатын рекурсивті функцияның орташа кеңістіктік күрделілігі қандай?",
    options: [
      {
        id: "algo-t04-b32-op1",
        text: "O(N)"
      },
      {
        id: "algo-t04-b32-op2",
        text: "O(1)"
      },
      {
        id: "algo-t04-b32-op3",
        text: "O(log N)"
      },
      {
        id: "algo-t04-b32-op4",
        text: "O(N^2)"
      }
    ],
    correctOptionIds: [
      "algo-t04-b32-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b33",
    subjectId: SubjectId.ALGO,
    text: "Аккерман функциясы (Ackermann Function) алгоритмдер теориясында несімен танымал?",
    options: [
      {
        id: "algo-t04-b33-op1",
        text: "Өте қарапайым анықталғанымен, рекурсия тереңдігi мен мәні аса жылдам өсетін, қарапайым циклге айналдыру өте қиын функция"
      },
      {
        id: "algo-t04-b33-op2",
        text: "Массивтерді ең жылдам сұрыптайтын функция"
      },
      {
        id: "algo-t04-b33-op3",
        text: "Тек хэш-функцияларды құру үшін қолданылатын алгоритм"
      },
      {
        id: "algo-t04-b33-op4",
        text: "Ол мүлдем рекурсияны қолданбайды"
      }
    ],
    correctOptionIds: [
      "algo-t04-b33-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "94c9f8e0-3851-4f1f-b7d3-b6d494083275",
    subjectId: SubjectId.ALGO,
    text: "Ханой мұнаралары (Towers of Hanoi) есебін шешудің рекурсивті алгоритмінің уақыттық күрделілігі қандай?",
    options: [
      {
        id: "0fe338b0-94e7-45d1-9048-1e149cebfe3e",
        text: "O(2^N)"
      },
      {
        id: "714675f8-559a-4455-bcf6-afa0894a659f",
        text: "O(N^2)"
      },
      {
        id: "c75efffd-f91b-4174-80e0-2820503fb87c",
        text: "O(N log N)"
      },
      {
        id: "767a91e7-81b1-4cc7-9a4d-1a12365a359c",
        text: "O(N)"
      }
    ],
    correctOptionIds: [
      "0fe338b0-94e7-45d1-9048-1e149cebfe3e"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b34",
    subjectId: SubjectId.ALGO,
    text: "Жанама рекурсия (Indirect Recursion) деген не?",
    options: [
      {
        id: "algo-t04-b34-op1",
        text: "А функциясы В функциясын шақырып, ал В функциясы өз кезегінде А функциясын қайта шақыратын өзара байланыс құрылымы"
      },
      {
        id: "algo-t04-b34-op2",
        text: "Функцияның өз-өзін тікелей шақыруы"
      },
      {
        id: "algo-t04-b34-op3",
        text: "Тоқтау шарты мүлдем жоқ рекурсия"
      },
      {
        id: "algo-t04-b34-op4",
        text: "Тек бос мәндерді қайтаратын рекурсия"
      }
    ],
    correctOptionIds: [
      "algo-t04-b34-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b35",
    subjectId: SubjectId.ALGO,
    text: "Функтор (Functor / Function Object) деген не?",
    options: [
      {
        id: "algo-t04-b35-op1",
        text: "Жақшаларды ашу `operator()` операторы қайта жүктелген, сондықтан функция сияқты шақыруға болатын класс немесе құрылым объектісі"
      },
      {
        id: "algo-t04-b35-op2",
        text: "Рекурсия тереңдігін тексеретін жүйелік айнымалы"
      },
      {
        id: "algo-t04-b35-op3",
        text: "Тек логикалық амалдарды орындайтын математикалық класс"
      },
      {
        id: "algo-t04-b35-op4",
        text: "Сыртқы файлдық ағын"
      }
    ],
    correctOptionIds: [
      "algo-t04-b35-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b36",
    subjectId: SubjectId.ALGO,
    text: "Функтордың қарапайым функция көрсеткішінен (function pointer) басты артықшылығы қандай?",
    options: [
      {
        id: "algo-t04-b36-op1",
        text: "Ол өзінің ішкі күйін (айнымалыларын) сақтай алады және компилятор оны оңай inline ете алады"
      },
      {
        id: "algo-t04-b36-op2",
        text: "Ол жадтан мүлдем орын алмайды"
      },
      {
        id: "algo-t04-b36-op3",
        text: "Оны тек рекурсияда ғана қолдануға болады"
      },
      {
        id: "algo-t04-b36-op4",
        text: "Ол тек статикалық жадпен жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "algo-t04-b36-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b37",
    subjectId: SubjectId.ALGO,
    text: "Тереңдікке іздеу (DFS) алгоритмін бағдарламалауда рекурсияның рөлі қандай?",
    options: [
      {
        id: "algo-t04-b37-op1",
        text: "Рекурсия жүйелік шақыру стегін автоматты түрде пайдаланып, графтың көршілес төбелерін DFS ретімен терең оқуға өте қолайлы мүмкіндік береді"
      },
      {
        id: "algo-t04-b37-op2",
        text: "Ол тек кезек (queue) құрылымымен ғана жұмыс істейді"
      },
      {
        id: "algo-t04-b37-op3",
        text: "Рекурсия O(1) уақытында іздеуге мүмкіндік береді"
      },
      {
        id: "algo-t04-b37-op4",
        text: "Ол графтың тек басын ғана іздей алады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b37-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b38",
    subjectId: SubjectId.ALGO,
    text: "Стек көрсеткіші (Stack Pointer) мен Кадр көрсеткішінің (Frame Pointer) негізгі рөлі қандай?",
    options: [
      {
        id: "algo-t04-b38-op1",
        text: "Стек көрсеткіші стектің ағымдағы төбесін сілтейді, ал Кадр көрсеткіші локальді айнымалыларға қол жеткізу үшін тұрақты негізді (base) сақтайды"
      },
      {
        id: "algo-t04-b38-op2",
        text: "Олар тек динамикалық жадтағы бос ұяшықтарды іздейді"
      },
      {
        id: "algo-t04-b38-op3",
        text: "Олар циклдің қайталану санын бақылайды"
      },
      {
        id: "algo-t04-b38-op4",
        text: "Жүйедегі жаһандық айнымалыларды жауып тұрады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b38-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b39",
    subjectId: SubjectId.ALGO,
    text: "С++ тіліндеге шаблондық функция (Function Template) не үшін қажет?",
    options: [
      {
        id: "algo-t04-b39-op1",
        text: "Бірдей алгоритмді әртүрлі деректер типтерімен (int, float, double, т.б.) жұмыс істейтіндей етіп жалпылама жазу үшін"
      },
      {
        id: "algo-t04-b39-op2",
        text: "Тек мәтіндік файлдарды оқу үшін"
      },
      {
        id: "algo-t04-b39-op3",
        text: "Рекурсия тереңдігін шектеу үшін"
      },
      {
        id: "algo-t04-b39-op4",
        text: "Массив индекстерін автоматты түрде реттеу үшін"
      }
    ],
    correctOptionIds: [
      "algo-t04-b39-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b40",
    subjectId: SubjectId.ALGO,
    text: "Шаблондық функцияның мамандандырылуы (Template Specialization) деген не?",
    options: [
      {
        id: "algo-t04-b40-op1",
        text: "Белгілі бір нақты деректер типі үшін (мысалы, `char*`) шаблонның жалпы кодын өзгертіп, арнайы жеке алгоритм жазу"
      },
      {
        id: "algo-t04-b40-op2",
        text: "Шаблонды бағдарламадан толық өшіру"
      },
      {
        id: "algo-t04-b40-op3",
        text: "Шаблонды тек функция ішінде ғана қолдануды шектеу"
      },
      {
        id: "algo-t04-b40-op4",
        text: "Типтерді тексеруден бас тарту"
      }
    ],
    correctOptionIds: [
      "algo-t04-b40-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b0fb54dd-16b9-40ab-9ec4-420f521d78fd",
    subjectId: SubjectId.ALGO,
    text: "Қайтару типі `void` болатын рекурсивті функциядан ерте шығып кету (тоқтау шарты орындалғанда) қалай жүзеге асады?",
    options: [
      {
        id: "194ed88a-f757-4860-a437-af484ea9d24c",
        text: "`return;` операторын жазу арқылы"
      },
      {
        id: "48f54f39-dbd5-45af-9c3b-e7399424e372",
        text: "`return 0;` жазу арқылы"
      },
      {
        id: "74409966-e441-4e5f-8f36-c725098ae9e2",
        text: "`break;` операторын қолдану арқылы"
      },
      {
        id: "42b53569-902f-439b-8058-5342523cd424",
        text: "`exit(0);` шақыру арқылы"
      }
    ],
    correctOptionIds: [
      "194ed88a-f757-4860-a437-af484ea9d24c"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9ba5cfa0-6efe-48d1-b0a7-156f1c09c9f1",
    subjectId: SubjectId.ALGO,
    text: "Функцияның шақырылуы кезіндегі нақты аргументтер (actual arguments) мен ресми параметрлер (formal parameters) айырмашылығы қандай?",
    options: [
      {
        id: "07f3dc6e-e9a8-42db-b69c-3db71b111f87",
        text: "Ресми параметрлер функция анықтамасында жазылады, ал нақты аргументтер функция шақырылғанда берілетін нақты мәндер"
      },
      {
        id: "bdadec92-674e-4950-a27d-64198e03a69f",
        text: "Нақты аргументтер тек статикалық болады"
      },
      {
        id: "62650df0-3e77-4e16-aabc-9256a8e050ed",
        text: "Ресми параметрлер әрқашан сілтеме бойынша беріледі"
      },
      {
        id: "c070ee35-92c5-4d73-a08c-d4f59e6e55e0",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "07f3dc6e-e9a8-42db-b69c-3db71b111f87"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1e8bb9cc-3854-455f-bb4b-d919331fc78e",
    subjectId: SubjectId.ALGO,
    text: "Келесі рекурсивті функция шақырылғанда `foo(3)` нәтижесі неше болады?\n`int foo(int n) { if (n <= 1) return 1; return n * foo(n-1); }`",
    options: [
      {
        id: "33677ffc-a56e-459a-a543-682daefddaf9",
        text: "6 (3 * 2 * 1 = 6)"
      },
      {
        id: "18f4ff0d-98d1-4292-a492-3297df13b8d6",
        text: "3"
      },
      {
        id: "8166ebc0-e3d2-4704-a82f-a5ce1b58356f",
        text: "2"
      },
      {
        id: "26c43f1b-567e-485a-bef5-d33a16d0dedc",
        text: "24"
      }
    ],
    correctOptionIds: [
      "33677ffc-a56e-459a-a543-682daefddaf9"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "fe00204d-3f8d-43b9-807f-cb4fcb1dfebc",
    subjectId: SubjectId.ALGO,
    text: "Келесі рекурсивті функция шақырылғанда `fib(4)` нәтижесі неше болады?\n`int fib(int n) { if (n <= 1) return n; return fib(n-1) + fib(n-2); }` (Фибоначчи: 0, 1, 1, 2, 3...)",
    options: [
      {
        id: "df811bb1-78c9-4985-b77a-eb2d0651e66a",
        text: "3"
      },
      {
        id: "4c1e9e0d-5d64-466e-b166-0e7aa3c40a2f",
        text: "2"
      },
      {
        id: "5fa605b2-b960-4130-94eb-b7452d187473",
        text: "5"
      },
      {
        id: "67a897bb-e6b5-4f57-b316-223a4b48b2a3",
        text: "1"
      }
    ],
    correctOptionIds: [
      "df811bb1-78c9-4985-b77a-eb2d0651e66a"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a337ff6e-e3ae-4609-92a0-d783e23be75d",
    subjectId: SubjectId.ALGO,
    text: "Келесі рекурсивті функция `sum(3)` шақырылғанда оның нәтижесі неше болады?\n`int sum(int n) { if (n <= 0) return 0; return n + sum(n-1); }`",
    options: [
      {
        id: "f89de15a-4f6e-4f0a-b89b-d34d7bab8c49",
        text: "6 (3 + 2 + 1 = 6)"
      },
      {
        id: "422823d3-d29f-44c0-ac7f-ac1d30b285ed",
        text: "3"
      },
      {
        id: "4dbd8b51-0463-4f7d-959d-f585fc2da854",
        text: "5"
      },
      {
        id: "91d5d487-5a7b-4f97-abdb-a105c4b6fe5d",
        text: "0"
      }
    ],
    correctOptionIds: [
      "f89de15a-4f6e-4f0a-b89b-d34d7bab8c49"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5c774c5b-dcb3-4d71-b223-614b59b556a8",
    subjectId: SubjectId.ALGO,
    text: "Рекурсиялық функцияның өзін-өзі шақыруы толық аяқталған соң, нәтижені кері қарай өңдеу кезеңі қалай аталады?",
    options: [
      {
        id: "5afb619b-c700-4aa1-9d33-2a5bb0fea7de",
        text: "Кері оралу / өрлеу кезеңі (Winding / Unwinding / Backtracking)"
      },
      {
        id: "72b7f358-222f-4587-8c3c-7a7eb366dec9",
        text: "Препроцессинг кезеңі"
      },
      {
        id: "a38ac751-70e8-4352-b74c-2d41106da450",
        text: "Инициализация кезеңі"
      },
      {
        id: "368d4d2f-39e6-4a92-993c-ec1864dc8af7",
        text: "Компиляциядан кейінгі кезең"
      }
    ],
    correctOptionIds: [
      "5afb619b-c700-4aa1-9d33-2a5bb0fea7de"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9cbbf6cd-a4dd-4b98-b9bd-812697658f63",
    subjectId: SubjectId.ALGO,
    text: "Функцияның қайтаратын мәні `const` сілтеме (`const int&`) түрінде берілсе, оның басты мақсаты не?",
    options: [
      {
        id: "e8895101-7ac3-46b9-b608-b3dd1f397021",
        text: "Үлкен объектілерді көшірмесіз жылдам қайтару және оны сырттан өзгертуге жол бермеу"
      },
      {
        id: "4be43c36-324b-4cb2-80f1-225385e6eb59",
        text: "Айнымалыны автоматты түрде өшіру"
      },
      {
        id: "6cd2bbe0-b30d-47e2-acb4-47361469cf22",
        text: "Функцияны тек рекурсивті режимде іске қосу"
      },
      {
        id: "5559f2c6-6846-463b-a119-4513da00d0cd",
        text: "Жаһандық айнымалыны локализациялау"
      }
    ],
    correctOptionIds: [
      "e8895101-7ac3-46b9-b608-b3dd1f397021"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b41",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `std::function<int(int)>` класы (STL) не үшін қолданылады?",
    options: [
      {
        id: "algo-t04-b41-op1",
        text: "Бір бүтін параметр қабылдап, бүтін мән қайтаратын кез келген шақырылатын объектіні (лямбда, функтор, функция нұсқауышы) бірыңғай сақтау үшін"
      },
      {
        id: "algo-t04-b41-op2",
        text: "Тек рекурсивті функцияларды сұрыптау үшін"
      },
      {
        id: "algo-t04-b41-op3",
        text: "Массив өлшемдерін өзгерту үшін"
      },
      {
        id: "algo-t04-b41-op4",
        text: "Жүйелік қателерді тіркеу үшін"
      }
    ],
    correctOptionIds: [
      "algo-t04-b41-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "27872a45-7ef1-41cb-a300-06b8281f90b3",
    subjectId: SubjectId.ALGO,
    text: "Егер функция өзінің параметрлерін өзгертпейтініне кепілдік беру керек болса және көшірме жасау шығынын болдырмау қажет болса, оны қалай жариялау керек?",
    options: [
      {
        id: "c55b54b3-7de3-48e5-8710-d1f93782d779",
        text: "const сілтеме арқылы (const reference, мысалы: `void print(const MyStruct& obj)`)"
      },
      {
        id: "32819e7a-e216-4432-b567-560f651bf14b",
        text: "Мән бойынша (pass by value)"
      },
      {
        id: "e4ef4bbc-f4cb-4708-989a-3b9573da9352",
        text: "Нұсқауыш арқылы (pass by pointer)"
      },
      {
        id: "669ea970-0015-46da-81fc-6f73fe591ee3",
        text: "Inline кілтсөзімен"
      }
    ],
    correctOptionIds: [
      "c55b54b3-7de3-48e5-8710-d1f93782d779"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b42",
    subjectId: SubjectId.ALGO,
    text: "Қайталаулардың итерациялық түріне (циклдерге) қарағанда рекурсияның негізгі басымдылығы неде?",
    options: [
      {
        id: "algo-t04-b42-op1",
        text: "Күрделі иерархиялық немесе ағаш тәрізді құрылымдарды (мысалы, бинарлы ағаштарды, каталогтарды) аралау кодтарын әлдеқайда қысқа, оқуға жеңіл және табиғи түрде жазуға мүмкіндік береді"
      },
      {
        id: "algo-t04-b42-op2",
        text: "Жадты әрқашан үнемдейді"
      },
      {
        id: "algo-t04-b42-op3",
        text: "Бағдарламаның орындалуын әрқашан жылдамдатады"
      },
      {
        id: "algo-t04-b42-op4",
        text: "Компиляция қателерінің алдын алады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b42-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b43",
    subjectId: SubjectId.ALGO,
    text: "Төмендегілердің қайсысы рекурсиялық алгоритмдерді қолдануға өте қолайлы мысал бола алады?",
    options: [
      {
        id: "algo-t04-b43-op1",
        text: "Графтарды тереңдікке іздеу (DFS), файлдық жүйені аралау, өрнектерді парсингтеу"
      },
      {
        id: "algo-t04-b43-op2",
        text: "Массивтің барлық элементтеріне 5-ті қосу"
      },
      {
        id: "algo-t04-b43-op3",
        text: "Деректер базасынан жазбаны жаңарту"
      },
      {
        id: "algo-t04-b43-op4",
        text: "Екі санды қосу"
      }
    ],
    correctOptionIds: [
      "algo-t04-b43-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b44",
    subjectId: SubjectId.ALGO,
    text: "Функцияның қайтаратын типі `auto` (C++14) деп жазылса, ол нені білдіреді?",
    options: [
      {
        id: "algo-t04-b44-op1",
        text: "Компилятор функцияның қайтаратын типін оның `return` өрнегіне қарап автоматты түрде анықтайды"
      },
      {
        id: "algo-t04-b44-op2",
        text: "Функция кез келген типті кездейсоқ қайтарады"
      },
      {
        id: "algo-t04-b44-op3",
        text: "Функция әрқашан `void` болады"
      },
      {
        id: "algo-t04-b44-op4",
        text: "Бағдарлама орындалғанда тип автоматты өзгереді"
      }
    ],
    correctOptionIds: [
      "algo-t04-b44-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b45",
    subjectId: SubjectId.ALGO,
    text: "Рекурсия кезінде стек жадында (Stack) әр шақыру үшін не сақталады?",
    options: [
      {
        id: "algo-t04-b45-op1",
        text: "Жергілікті айнымалылар, аргументтер мәндері, кері қайту мекенжайы және регистрлер күйі"
      },
      {
        id: "algo-t04-b45-op2",
        text: "Массивтердің барлық элементтерінің көшірмелері"
      },
      {
        id: "algo-t04-b45-op3",
        text: "Орындалатын файлдың машиналық коды"
      },
      {
        id: "algo-t04-b45-op4",
        text: "Тек логикалық мәндер"
      }
    ],
    correctOptionIds: [
      "algo-t04-b45-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6cb1993b-0db5-4fd7-9306-7c06c7e57715",
    subjectId: SubjectId.ALGO,
    text: "Функцияның жарияланымында `const` кілтсөзі параметрдің алдына қойылса (мысалы, `void show(const int x)`), бұл нені білдіреді?",
    options: [
      {
        id: "8881b572-9f2d-4248-b1bf-228ad34f186a",
        text: "Функция ішінде `x` айнымалысының мәнін өзгертуге тыйым салынады (тұрақты болады)"
      },
      {
        id: "e63c15d7-9b7a-4b3f-b4de-9ac3cda89daf",
        text: "Параметрдің тек оң мәндерді қабылдайтынын"
      },
      {
        id: "1581997f-fcee-4a13-8a42-d030a1b34732",
        text: "Функцияның тек бір рет қана шақырылатынын"
      },
      {
        id: "d7e06bac-1f6a-425c-9cc7-98d04008443f",
        text: "Сілтеменің автоматты түрде нұсқауышқа айналатынын"
      }
    ],
    correctOptionIds: [
      "8881b572-9f2d-4248-b1bf-228ad34f186a"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f1fc4142-12b7-494a-9996-4a42f91e5581",
    subjectId: SubjectId.ALGO,
    text: "Рекурсивті шақырулардың өте терең кетуіне (мысалы, 10 миллион рет) әкелетін алгоритмде не болады?",
    options: [
      {
        id: "b1b7720d-89cc-406c-90e4-02b7792ebc87",
        text: "Стек жадының шектен тыс толу қатесі туындап (Stack Overflow), бағдарлама авариялық түрде тоқтайды"
      },
      {
        id: "ec1189df-1403-4edf-866a-98f5dafe8cf3",
        text: "Бағдарлама автоматты түрде циклдік орындауға ауысады"
      },
      {
        id: "d3d102d1-dc9d-40f1-9732-0d55e98778ec",
        text: "Жүйе қосымша жад бөледі"
      },
      {
        id: "b64ea8a8-af29-42d1-bba4-dfae713598e1",
        text: "Ешқандай қате орын алмайды"
      }
    ],
    correctOptionIds: [
      "b1b7720d-89cc-406c-90e4-02b7792ebc87"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a5e5e87d-d8cf-46d4-a32c-ef65667280ce",
    subjectId: SubjectId.ALGO,
    text: "С++ тіліндегі `main` функциясы параметрсіз немесе екі стандартты параметрмен жариялануы мүмкін бе?",
    options: [
      {
        id: "182b68bf-7e0a-48a8-8b43-82ddbff48963",
        text: "Иә, `int main()` немесе `int main(int argc, char* argv[])` стандартты түрлері болып табылады"
      },
      {
        id: "04c74d83-36d1-445b-985d-1231e2b6f0d4",
        text: "Жоқ, тек параметрлерімен ғана жариялануы тиіс"
      },
      {
        id: "eb01266b-7d68-4eb8-b104-3cede8dc5fd0",
        text: "Жоқ, тек параметрсіз ғана рұқсат етіледі"
      },
      {
        id: "5a18d43a-a37a-418c-b5d7-68add3cfa578",
        text: "Тек үш параметрмен жариялануы тиіс"
      }
    ],
    correctOptionIds: [
      "182b68bf-7e0a-48a8-8b43-82ddbff48963"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "120e0863-48f1-4a1a-97c2-06abb994681d",
    subjectId: SubjectId.ALGO,
    text: "Функцияның параметрлерін сілтеме арқылы өткізудің (`&`) мәні бойынша өткізуден басты өнімділік артықшылығы неде?",
    options: [
      {
        id: "08e0573b-85d4-4e8d-a55d-6fb01df24067",
        text: "Үлкен құрылымдар мен объектілерді өткізгенде олардың көшірмесін жасау шығындарын (уақыт пен жадты) болдырмайды"
      },
      {
        id: "f2972096-102a-4239-86ca-91b7f650f86a",
        text: "Функцияны автоматты түрде оңтайландырады"
      },
      {
        id: "27b9f887-07fa-46e4-abc9-d4b8be8be9bb",
        text: "Рекурсия тереңдігін азайтады"
      },
      {
        id: "e8519b39-b7d8-4335-ad48-48c011e60e59",
        text: "Стектегі жадты босатады"
      }
    ],
    correctOptionIds: [
      "08e0573b-85d4-4e8d-a55d-6fb01df24067"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e8e1b041-f93d-4031-bbf4-c0aa0e8ee2ef",
    subjectId: SubjectId.ALGO,
    text: "Төмендегілердің қайсысы рекурсивті функцияның тоқтау шартында қолданылатын дұрыс шарт болып табылады?",
    options: [
      {
        id: "841affd0-98de-45bc-bf09-d7b9561ce8eb",
        text: "Есептің ең қарапайым нұсқасын шешетін және рекурсивті емес мән қайтаратын шарт"
      },
      {
        id: "e76729e9-9b2a-4788-8ade-aeeea93c8287",
        text: "Функцияның өзін қайта шақыратын шарты"
      },
      {
        id: "eb11ebaa-c007-4be6-8cf3-9cc2404d7c14",
        text: "Жаһандық айнымалының өзгеруін күтетін шарт"
      },
      {
        id: "2bf78909-e6f4-4681-86cf-70a3eb7cc5fd",
        text: "Стек өлшемін тексеретін шарт"
      }
    ],
    correctOptionIds: [
      "841affd0-98de-45bc-bf09-d7b9561ce8eb"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b46",
    subjectId: SubjectId.ALGO,
    text: "Рекурсивті функцияны жазу кезінде ең бірінші кезекте нені анықтап алған жөн?",
    options: [
      {
        id: "algo-t04-b46-op1",
        text: "Рекурсияның тоқтау шартын (Base Case)"
      },
      {
        id: "algo-t04-b46-op2",
        text: "Функцияның атын"
      },
      {
        id: "algo-t04-b46-op3",
        text: "Локальді айнымалылардың санын"
      },
      {
        id: "algo-t04-b46-op4",
        text: "Компилятор параметрлерін"
      }
    ],
    correctOptionIds: [
      "algo-t04-b46-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "91d169d3-3d15-4995-869f-4224eb899294",
    subjectId: SubjectId.ALGO,
    text: "Kелесі функция шақырылғанда `bar(2, 3)` нәтижесі неше болады?\n`int bar(int a, int b) { if (b == 0) return 1; return a * bar(a, b - 1); }` (дәрежелеу)",
    options: [
      {
        id: "7e4b7ad3-f40c-4f33-aedb-fe44dbb277f1",
        text: "8 (2^3 = 8)"
      },
      {
        id: "39c7ab41-7043-4bca-9d56-4214f32ca2c2",
        text: "6"
      },
      {
        id: "10278cdc-2358-459e-ac80-c2f6e7a946b5",
        text: "9"
      },
      {
        id: "934f458f-9e70-45df-aa1b-797e98dcd60e",
        text: "16"
      }
    ],
    correctOptionIds: [
      "7e4b7ad3-f40c-4f33-aedb-fe44dbb277f1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "878a0a7f-cc8c-4fc3-bdd2-052de76e5883",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде бір функцияның ішінде басқа функцияны стандартты түрде тікелей анықтауға (nested functions) бола ма?",
    options: [
      {
        id: "ca3b2ab9-b0dd-43a9-8532-6f9cfa57f227",
        text: "Жоқ, C++ тілінде функция ішінде стандартты түрде функция анықтауға рұқсат етілмейді (лямбда-өрнектерді есептемегенде)"
      },
      {
        id: "51075649-4b59-4b11-b6f2-d3098813c9eb",
        text: "Иә, кез келген функцияның ішінде жаза беруге болады"
      },
      {
        id: "8b7321c7-bd42-4974-857e-df766fb6e686",
        text: "Тек олар `static` болса ғана болады"
      },
      {
        id: "92d50402-32db-44f8-b919-20b22d8ab32e",
        text: "Тек олар `inline` болса ғана болады"
      }
    ],
    correctOptionIds: [
      "ca3b2ab9-b0dd-43a9-8532-6f9cfa57f227"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b47",
    subjectId: SubjectId.ALGO,
    text: "Рекурсия кезінде стек сегментінің толып кетуінен басқа қандай негізгі кемшілік болуы мүмкін?",
    options: [
      {
        id: "algo-t04-b47-op1",
        text: "Функцияны шақыру және стек фреймдерін құру/жою кезіндегі қосымша жүйелік шығындар (CPU overhead)"
      },
      {
        id: "algo-t04-b47-op2",
        text: "Айнымалылар мәндерінің кездейсоқ жойылуы"
      },
      {
        id: "algo-t04-b47-op3",
        text: "Жүйенің толықтай бұғатталуы"
      },
      {
        id: "algo-t04-b47-op4",
        text: "Ешқандай қосымша кемшілігі жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t04-b47-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b48",
    subjectId: SubjectId.ALGO,
    text: "Функцияның қайтаратын типі `std::pair<int, int>` болса, ол нені білдіреді?",
    options: [
      {
        id: "algo-t04-b48-op1",
        text: "Функция бір уақытта екі бүтін сандық мәнді жұп түрінде біріктіріп қайтарады"
      },
      {
        id: "algo-t04-b48-op2",
        text: "Функция тек екі параметр қабылдайды"
      },
      {
        id: "algo-t04-b48-op3",
        text: "Функция рекурсивті жұмыс істейді"
      },
      {
        id: "algo-t04-b48-op4",
        text: "Функция тек сәтті немесе сәтсіз күйді қайтарады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b48-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b49",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде функцияның кіріс параметрлеріндегі `const int *ptr` нені білдіреді?",
    options: [
      {
        id: "algo-t04-b49-op1",
        text: "Нұсқауыш сілтеп тұрған мән тұрақты (оны өзгертуге болмайды), бірақ нұсқауыш мекенжайын өзгертуге болады"
      },
      {
        id: "algo-t04-b49-op2",
        text: "Нұсқауыш мекенжайы тұрақты, мәні өзгереді"
      },
      {
        id: "algo-t04-b49-op3",
        text: "Мән де, мекенжай да тұрақты"
      },
      {
        id: "algo-t04-b49-op4",
        text: "Нұсқауыш тек оң сандарды сілтейді"
      }
    ],
    correctOptionIds: [
      "algo-t04-b49-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b50",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде функцияның параметрлеріндегі `int * const ptr` нені білдіреді?",
    options: [
      {
        id: "algo-t04-b50-op1",
        text: "Нұсқауыш мекенжайы тұрақты (оны басқа айнымалыға бағыттауға болмайды), бірақ ол сілтеп тұрған мәнді өзгертуге болады"
      },
      {
        id: "algo-t04-b50-op2",
        text: "Нұсқауыш сілтеп тұрған мән тұрақты, мекенжай өзгереді"
      },
      {
        id: "algo-t04-b50-op3",
        text: "Мән де, мекенжай да тұрақты"
      },
      {
        id: "algo-t04-b50-op4",
        text: "Нұсқауыш тек нөлдік мәнді қабылдай алады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b50-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f42bfbe8-d5be-4941-9e2f-6ca79c96a6ec",
    subjectId: SubjectId.ALGO,
    text: "Бірнеше рекурсивті шақырулар бір уақытта жасалатын рекурсия түрі (мысалы, Фибоначчи немесе ағаш траверсі) қалай аталады?",
    options: [
      {
        id: "6ea2053a-e354-47cc-9f98-7f6a78e6b3b6",
        text: "Көп тармақты рекурсия (Multiple / Tree recursion)"
      },
      {
        id: "37e5cee4-f51f-4a1f-8080-782f4d0184c4",
        text: "Сызықтық рекурсия (Linear recursion)"
      },
      {
        id: "c8ccc34d-c115-439c-b51c-4cd29c6c9906",
        text: "Құйрықты рекурсия (Tail recursion)"
      },
      {
        id: "5b1e178a-5c38-4f84-9742-d1b7ed3b4f2d",
        text: "Жанама рекурсия (Indirect recursion)"
      }
    ],
    correctOptionIds: [
      "6ea2053a-e354-47cc-9f98-7f6a78e6b3b6"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "115495d4-b651-4717-9b17-3bcb790e1730",
    subjectId: SubjectId.ALGO,
    text: "Бір ғана рекурсивті шақыру жасайтын рекурсия түрі (мысалы, факториал немесе сызықтық іздеу) қалай аталады?",
    options: [
      {
        id: "ef54aa0f-e95e-4ef0-b7cc-93da5d87cbe6",
        text: "Сызықтық рекурсия (Linear recursion)"
      },
      {
        id: "6f1d358d-b64f-4c59-b19a-718bdc1700b4",
        text: "Көп тармақты рекурсия (Tree recursion)"
      },
      {
        id: "9a565366-ea38-4e82-a88c-d38583d7cdba",
        text: "Жанама рекурсия (Indirect recursion)"
      },
      {
        id: "224cac80-2f03-41ab-b48f-09ab9de34cb0",
        text: "Өзара рекурсия"
      }
    ],
    correctOptionIds: [
      "ef54aa0f-e95e-4ef0-b7cc-93da5d87cbe6"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3d392b03-05f6-45ae-bb8d-b672c71682b9",
    subjectId: SubjectId.ALGO,
    text: "Қайта жүктелген функциялардың параметрлері тек `const` кілтсөзінің бар-жоғымен ерекшеленсе (мысалы, `void f(int)` және `void f(const int)`), бұл компиляция қатесіне әкеледі ме?",
    options: [
      {
        id: "dff6696c-0e29-4be5-8225-753ed8e6725d",
        text: "Иә, әкеледі, өйткені мән бойынша өткізгенде (by value) `const` айырмашылығы сигнатураны өзгертпейді"
      },
      {
        id: "91e18b6f-02cb-4919-a7cd-bbe9dc9b8ba4",
        text: "Жоқ, бұл қалыпты сұрыптау болып табылады"
      },
      {
        id: "462466e0-aa22-48f7-84d4-7e723d6d87e8",
        text: "Тек олар рекурсивті болса ғана болады"
      },
      {
        id: "595668ea-737c-47fd-9521-1be668bba98a",
        text: "Тек олар класс мүшелері болса ғана болады"
      }
    ],
    correctOptionIds: [
      "dff6696c-0e29-4be5-8225-753ed8e6725d"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9ab562a0-bff3-409e-a9fc-bc6d967e82dd",
    subjectId: SubjectId.ALGO,
    text: "Қайта жүктелген функциялардың параметрлері сілтеменің `const` болуымен ерекшеленсе (мысалы, `void f(int&)` және `void f(const int&)`), бұларды қайта жүктеуге бола ма?",
    options: [
      {
        id: "0b216e56-bb24-4a2f-a9e0-3fa0ae50a5fb",
        text: "Иә, болады, өйткені компилятор тұрақты емес объектілер үшін біріншісін, ал тұрақты объектілер үшін екіншісін шақырады"
      },
      {
        id: "21e19b77-36a4-4cca-b3ce-00ef16517fdb",
        text: "Жоқ, компиляция қатесі болады"
      },
      {
        id: "9c6da049-0d9a-4a63-992c-32d866a2e1b0",
        text: "Тек сыртқы функциялар үшін болады"
      },
      {
        id: "1ce35ecf-9ee8-4795-9d7a-28d15fdb2664",
        text: "Тек рекурсия кезінде болады"
      }
    ],
    correctOptionIds: [
      "0b216e56-bb24-4a2f-a9e0-3fa0ae50a5fb"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b51",
    subjectId: SubjectId.ALGO,
    text: "Функцияның қайтаратын типі `std::tuple` (C++11) болса, ол нені білдіреді?",
    options: [
      {
        id: "algo-t04-b51-op1",
        text: "Функция әртүрлі типтегі бірнеше мәндерді кортеж (жиынтық) түрінде біріктіріп қайтарады"
      },
      {
        id: "algo-t04-b51-op2",
        text: "Функция тек үш бүтін санды қайтарады"
      },
      {
        id: "algo-t04-b51-op3",
        text: "Функция автоматты түрде инлайн болады"
      },
      {
        id: "algo-t04-b51-op4",
        text: "Функцияның жұмысы екі есе жылдамдайды"
      }
    ],
    correctOptionIds: [
      "algo-t04-b51-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b52",
    subjectId: SubjectId.ALGO,
    text: "Рекурсиялық алгоритмдердегі кері байланыс (Backtracking) деген не?",
    options: [
      {
        id: "algo-t04-b52-op1",
        text: "Шешімдер кеңістігін іздеу кезінде дұрыс емес бағытқа тап болғанда, рекурсивті қадамды кері қайтарып, басқа нұсқаны сынап көру әдісі"
      },
      {
        id: "algo-t04-b52-op2",
        text: "Бағдарламаның қателерін автоматты түрде түзету"
      },
      {
        id: "algo-t04-b52-op3",
        text: "Стектегі барлық фреймдерді бір уақытта өшіру"
      },
      {
        id: "algo-t04-b52-op4",
        text: "Айнымалыларды бастапқы мәніне қайтару"
      }
    ],
    correctOptionIds: [
      "algo-t04-b52-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8d25ba9e-acf5-440f-bc01-15abc2f8b6cd",
    subjectId: SubjectId.ALGO,
    text: "Компиляция кезеңінде орындалатын рекурсия (Compile-time Recursion) C++ тілінде не арқылы жүзеге асады?",
    options: [
      {
        id: "52592ffa-a797-45ae-9634-1deee04d1106",
        text: "Шаблондық метабағдарламалау (Template Metaprogramming) немесе `constexpr` функциялары арқылы"
      },
      {
        id: "837124a2-058f-4137-be40-4897f36de034",
        text: "Inline функциялары мен циклдер арқылы"
      },
      {
        id: "3f6722c9-4c01-4242-bf7a-5b864f980ee2",
        text: "Жаһандық айнымалыларды қайта анықтау арқылы"
      },
      {
        id: "417543f9-081d-4840-b6e9-4327f7b1cb8b",
        text: "Нұсқауыштарды биттік жылжыту арқылы"
      }
    ],
    correctOptionIds: [
      "52592ffa-a797-45ae-9634-1deee04d1106"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2d73a6cc-8e84-4322-9f5e-84c61a052d33",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде шаблондық метабағдарламалаумен рекурсивті факториалды есептеудің дұрыс шақырылу мысалы қандай?",
    options: [
      {
        id: "0529aac6-217f-4807-b3e4-807896e4bad0",
        text: "Factorial<5>::value"
      },
      {
        id: "07107fe7-93de-4ea3-94f3-2ff1011defb6",
        text: "Factorial(5)"
      },
      {
        id: "329be566-78fd-417a-a1f9-e5aeb261aab3",
        text: "new Factorial[5]"
      },
      {
        id: "5c38d4ef-7362-4407-9f9a-7337a18be8c6",
        text: "Factorial::get(5)"
      }
    ],
    correctOptionIds: [
      "0529aac6-217f-4807-b3e4-807896e4bad0"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b53",
    subjectId: SubjectId.ALGO,
    text: "Функция шақыру аргументтері бағдарлама жадының қай аймағында сақталады?",
    options: [
      {
        id: "algo-t04-b53-op1",
        text: "Стекте (Stack)"
      },
      {
        id: "algo-t04-b53-op2",
        text: "Үйіндіде (Heap)"
      },
      {
        id: "algo-t04-b53-op3",
        text: "Статикалық деректер сегментінде"
      },
      {
        id: "algo-t04-b53-op4",
        text: "Жүйелік файлдық регистрлерде"
      }
    ],
    correctOptionIds: [
      "algo-t04-b53-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "34d2ea5c-58f1-424d-9839-42cbd7b620ae",
    subjectId: SubjectId.ALGO,
    text: "Функцияның әдепкі аргументін (default argument) оның жарияланымында да, анықтамасында да бір уақытта қайталап анықтауға бола ма?",
    options: [
      {
        id: "a5cb7cf4-ebaf-4a88-a8b3-3a143ae3bfa0",
        text: "Жоқ, олар тек бір жерде ғана (әдетте жариялауда немесе тақырыптық файлда) көрсетілуі тиіс, әйтпесе компиляция қатесі туындайды"
      },
      {
        id: "9566844e-92d0-441e-9fdd-4258af3e6837",
        text: "Иә, екеуінде де бірдей мәнді жазу міндетті"
      },
      {
        id: "75b37d42-2b97-4268-a477-20710842f40d",
        text: "Тек олардың мәндері нөл болса болады"
      },
      {
        id: "92534322-a39c-45af-be2a-44f6e22e18e8",
        text: "Тек рекурсивті функцияларда болады"
      }
    ],
    correctOptionIds: [
      "a5cb7cf4-ebaf-4a88-a8b3-3a143ae3bfa0"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b54",
    subjectId: SubjectId.ALGO,
    text: "Функцияның кіріс параметрлерінің қолданылу аясы (scope) қандай?",
    options: [
      {
        id: "algo-t04-b54-op1",
        text: "Тек осы функцияның денесімен ғана шектеледі"
      },
      {
        id: "algo-t04-b54-op2",
        text: "Функция жарияланған бүкіл файлда қолжетімді"
      },
      {
        id: "algo-t04-b54-op3",
        text: "Жаһандық қолданылу аясына ие болады"
      },
      {
        id: "algo-t04-b54-op4",
        text: "Функция аяқталғаннан кейін де келесі функцияда сақталады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b54-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b55",
    subjectId: SubjectId.ALGO,
    text: "R-value сілтемесі бойынша параметрді өткізу (мысалы, `void f(MyClass&& obj)`) не үшін қажет?",
    options: [
      {
        id: "algo-t04-b55-op1",
        text: "Жылжыту семантикасын (Move semantics) қолданып, уақытша объектілердің ресурстарын көшірусіз тиімді иемдену үшін"
      },
      {
        id: "algo-t04-b55-op2",
        text: "Тұрақты айнымалыларды өзгерту үшін"
      },
      {
        id: "algo-t04-b55-op3",
        text: "Рекурсия тереңдігін азайту үшін"
      },
      {
        id: "algo-t04-b55-op4",
        text: "Стек жадын босатуды жылдамдату үшін"
      }
    ],
    correctOptionIds: [
      "algo-t04-b55-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b56",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `std::move(x)` функциясы не істейді?",
    options: [
      {
        id: "algo-t04-b56-op1",
        text: "Өз аргументін R-value сілтемесіне түрлендіреді, бұл жылжыту (move) семантикасын іске қосуға мүмкіндік береді"
      },
      {
        id: "algo-t04-b56-op2",
        text: "Объектіні жадтың басқа мекенжайына физикалық түрде көшіреді"
      },
      {
        id: "algo-t04-b56-op3",
        text: "Айнымалыны өшіреді"
      },
      {
        id: "algo-t04-b56-op4",
        text: "Функцияны рекурсивті шақырады"
      }
    ],
    correctOptionIds: [
      "algo-t04-b56-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "df2c79ff-576a-4b4f-8b8e-714a46f17296",
    subjectId: SubjectId.ALGO,
    text: "Неліктен рекурсия \"бөліп ал да, биле\" (divide and conquer) алгоритмдерінде (мысалы, MergeSort, QuickSort) жиі қолданылады?",
    options: [
      {
        id: "99bb9aa7-cceb-4b06-95de-f334f05d3047",
        text: "Себебі бұл алгоритмдер үлкен есепті табиғи түрде дәл сондай кішігірім тәуелсіз қосымша есептерге бөледі"
      },
      {
        id: "f390be75-6d2c-42cb-8f08-30cbf5124758",
        text: "Себебі рекурсия жадты мүлдем талап етпейді"
      },
      {
        id: "171715c3-f1e5-492a-a23c-48e4d3335fc2",
        text: "Себебі рекурсия уақыт күрделілігін әрқашан O(1) етеді"
      },
      {
        id: "3e5d355e-6748-44d0-aa01-a74888934d98",
        text: "Ол тек оң сандармен ғана жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "99bb9aa7-cceb-4b06-95de-f334f05d3047"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7ae009fc-9fb1-433a-bc74-f3abfec0480e",
    subjectId: SubjectId.ALGO,
    text: "C++11 стандартындағы параметрлер пакеті (parameter pack) және вариативті шаблондар (variadic templates) не үшін қолданылады?",
    options: [
      {
        id: "bd5c93d2-7948-4949-82c0-02c6bcb5317b",
        text: "Функцияға кез келген типтегі айнымалы санды параметрлерді қауіпсіз беру үшін"
      },
      {
        id: "ddb5f899-7e75-437b-ae9a-cbb122a1077e",
        text: "Тек екіөлшемді массивтермен жұмыс істеу үшін"
      },
      {
        id: "6694f0ef-0067-405b-82fc-171e89a00ebf",
        text: "Стек толуының алдын алу үшін"
      },
      {
        id: "79f99e1d-da6b-4099-8459-d353c4c94d50",
        text: "Функцияны тек 1 рет шақыруды шектеу үшін"
      }
    ],
    correctOptionIds: [
      "bd5c93d2-7948-4949-82c0-02c6bcb5317b"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "968545ad-9f7d-421a-95f8-54da519ecee0",
    subjectId: SubjectId.ALGO,
    text: "С-стиліндегі айнымалы санды аргументтерді (variadic arguments) өңдеу үшін қандай кітапханалық макростар жинағы қолданылады?",
    options: [
      {
        id: "3daffd0f-c46a-4e5b-9547-721123de343b",
        text: "va_list, va_start, va_arg, va_end (ортақ тақырыптық файлы <cstdarg>)"
      },
      {
        id: "1c9276b2-5727-4d7a-8c85-87d0c2551d81",
        text: "arg_list, arg_start, arg_get, arg_close"
      },
      {
        id: "c78ff9d5-f657-47a7-87e4-0937f61eb3a6",
        text: "std::vector, std::list, std::tuple"
      },
      {
        id: "80a9b6f9-2ac6-4c76-a268-3d2dd104f218",
        text: "sizeof, typeof, typeid"
      }
    ],
    correctOptionIds: [
      "3daffd0f-c46a-4e5b-9547-721123de343b"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "cd48f0d3-4dd3-4580-a02d-0b16685af731",
    subjectId: SubjectId.ALGO,
    text: "Рекурсия тереңдігі (recursion depth) мен рекурсияның стек тұтынуы (stack usage) арасындағы байланыс қандай?",
    options: [
      {
        id: "c02643f7-cf74-4e0c-b552-03be9547d945",
        text: "Стек тұтынуы рекурсия тереңдігі мен әрбір стек фреймінің өлшеміне (локальді айнымалылар өлшеміне) тура пропорционал"
      },
      {
        id: "365ddf2d-4084-4951-9626-3e6d782b95c0",
        text: "Олардың арасында ешқандай байланыс жоқ"
      },
      {
        id: "0b2335fb-3d9a-4a24-b6db-e9fcb8c7daef",
        text: "Стек тұтынуы әрқашан тұрақты болады"
      },
      {
        id: "403f91fe-29b7-42f5-b20e-58ebad742e5f",
        text: "Рекурсия тереңдігі артқан сайын стек тұтынуы азаяды"
      }
    ],
    correctOptionIds: [
      "c02643f7-cf74-4e0c-b552-03be9547d945"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "10814cc0-cc13-4325-86e1-d05b78f4b589",
    subjectId: SubjectId.ALGO,
    text: "Рекурсияны итерациямен алмастыру (recursion elimination) кезінде бағдарламашы қолдан құрастыратын жад құрылымы қалай аталады?",
    options: [
      {
        id: "6580f1dc-c246-4668-aa35-6babd7f74db2",
        text: "Айқын стек (Explicit stack / std::stack)"
      },
      {
        id: "5ed53422-b420-4989-b7c3-d8f3184639ed",
        text: "Кезек (Queue)"
      },
      {
        id: "35402d67-4126-49fe-b503-b1bbac27a377",
        text: "Хэш-кесте (Hash table)"
      },
      {
        id: "00160e8b-4d5d-4d99-901f-b2d758dce642",
        text: "Бинарлы ағаш"
      }
    ],
    correctOptionIds: [
      "6580f1dc-c246-4668-aa35-6babd7f74db2"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b57",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде лямбда-өрнектің өз-өзін рекурсивті шақыруы үшін не қажет?",
    options: [
      {
        id: "algo-t04-b57-op1",
        text: "Оны `std::function` айнымалысына тағайындап, лямбда ішіне осы айнымалыны сілтеме бойынша capture ету қажет"
      },
      {
        id: "algo-t04-b57-op2",
        text: "Оған кез келген атау беру жеткілікті"
      },
      {
        id: "algo-t04-b57-op3",
        text: "Ол мүлдем мүмкін емес"
      },
      {
        id: "algo-t04-b57-op4",
        text: "Оны тек `static` ретінде жариялау керек"
      }
    ],
    correctOptionIds: [
      "algo-t04-b57-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b58",
    subjectId: SubjectId.ALGO,
    text: "Лямбда-өрнектердегі \" capture\" (қолға түсіру / қоршау) аймағы қалай белгіленеді?",
    options: [
      {
        id: "algo-t04-b58-op1",
        text: "[ ] (тік жақшалармен)"
      },
      {
        id: "algo-t04-b58-op2",
        text: "( ) (дөңгелек жақшалармен)"
      },
      {
        id: "algo-t04-b58-op3",
        text: "{ } (фигуралы жақшалармен)"
      },
      {
        id: "algo-t04-b58-op4",
        text: "< > (бұрыштық жақшалармен)"
      }
    ],
    correctOptionIds: [
      "algo-t04-b58-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b59",
    subjectId: SubjectId.ALGO,
    text: "Кластың `const` мүше-функциялары (const member functions) нені кепілдендіреді?",
    options: [
      {
        id: "algo-t04-b59-op1",
        text: "Олар шақырылған объектінің ішкі мүше айнымалыларын (mutable белгіленгендерден басқа) өзгертпейді"
      },
      {
        id: "algo-t04-b59-op2",
        text: "Олар тек тұрақты мәндерді қайтарады"
      },
      {
        id: "algo-t04-b59-op3",
        text: "Оларды тек рекурсияда қолдануға болады"
      },
      {
        id: "algo-t04-b59-op4",
        text: "Олар жадтан орын алмайды"
      }
    ],
    correctOptionIds: [
      "algo-t04-b59-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t04-b60",
    subjectId: SubjectId.ALGO,
    text: "Функция параметрлерінің өмір сүру уақыты (lifetime) қашан басталады және аяқталады?",
    options: [
      {
        id: "algo-t04-b60-op1",
        text: "Функция шақырылып, іске қосылғанда басталады және функциядан шыққанда аяқталады"
      },
      {
        id: "algo-t04-b60-op2",
        text: "Бағдарлама басталғаннан аяқталғанға дейін сақталады"
      },
      {
        id: "algo-t04-b60-op3",
        text: "Компиляция кезінде басталып, орындалу кезінде бітеді"
      },
      {
        id: "algo-t04-b60-op4",
        text: "Олардың өмір сүру уақыты шексіз"
      }
    ],
    correctOptionIds: [
      "algo-t04-b60-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f7c65024-bfe4-4047-ae98-ad14007fce71",
    subjectId: SubjectId.ALGO,
    text: "Компилятор құйрықты рекурсияны оңтайландырған жағдайда (TCO), функцияның кеңістіктік күрделілігі қандай болады?",
    options: [
      {
        id: "630544e5-42db-402a-adc1-1b34fbabfb97",
        text: "O(1) (стек толу қаупі жойылады)"
      },
      {
        id: "f1383012-1411-4fa4-b1b9-a1eabd45205c",
        text: "O(N)"
      },
      {
        id: "e79b33eb-b04c-4fe1-9863-fe7307a0ad4a",
        text: "O(log N)"
      },
      {
        id: "19c65270-a5ad-4a1c-8afd-fb06003e61f9",
        text: "O(N^2)"
      }
    ],
    correctOptionIds: [
      "630544e5-42db-402a-adc1-1b34fbabfb97"
    ],
    type: QuestionType.SINGLE,
    topic: "Функциялар және рекурсивті функциялар",
    difficulty: Difficulty.MEDIUM
  }
];
