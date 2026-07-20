import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// algo / Негізгі процедуралық-бағытталған алгоритмдік тіл
export const algo1ProcedureLanguageQuestions : Question[] = [
  {
    id: "algo-t01-b01",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі int типі нені сақтайды?",
    options: [
      {
        id: "algo-t01-b01-op1",
        text: "Символдар"
      },
      {
        id: "algo-t01-b01-op2",
        text: "Бүтін сандар"
      },
      {
        id: "algo-t01-b01-op3",
        text: "Ондық сандар"
      },
      {
        id: "algo-t01-b01-op4",
        text: "Мәтіндер"
      }
    ],
    correctOptionIds: [
      "algo-t01-b01-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b02",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі double типі нені сақтайды?",
    options: [
      {
        id: "algo-t01-b02-op1",
        text: "Бүтін сандар"
      },
      {
        id: "algo-t01-b02-op2",
        text: "Логикалық мәндер"
      },
      {
        id: "algo-t01-b02-op3",
        text: "Символдар"
      },
      {
        id: "algo-t01-b02-op4",
        text: "Ондық (нақты) сандар"
      }
    ],
    correctOptionIds: [
      "algo-t01-b02-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b03",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі 'bool' типі қандай мәндерді қабылдайды?",
    options: [
      {
        id: "algo-t01-b03-op1",
        text: "Кез келген сан"
      },
      {
        id: "algo-t01-b03-op2",
        text: "0-255"
      },
      {
        id: "algo-t01-b03-op3",
        text: "Символдар"
      },
      {
        id: "algo-t01-b03-op4",
        text: "true/false"
      }
    ],
    correctOptionIds: [
      "algo-t01-b03-op4"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b04",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі struct дегеніміз не?",
    options: [
      {
        id: "algo-t01-b04-op1",
        text: "Массив"
      },
      {
        id: "algo-t01-b04-op2",
        text: "Әртүрлі типтегі деректерді бір объект ретінде сипаттау"
      },
      {
        id: "algo-t01-b04-op3",
        text: "Цикл түрі"
      },
      {
        id: "algo-t01-b04-op4",
        text: "Функция"
      }
    ],
    correctOptionIds: [
      "algo-t01-b04-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b05",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде 'char' типі нені сақтайды?",
    options: [
      {
        id: "algo-t01-b05-op1",
        text: "Бүтін санды"
      },
      {
        id: "algo-t01-b05-op2",
        text: "Символды"
      },
      {
        id: "algo-t01-b05-op3",
        text: "Логикалық мәнді"
      },
      {
        id: "algo-t01-b05-op4",
        text: "Жолды"
      }
    ],
    correctOptionIds: [
      "algo-t01-b05-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b06",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде айнымалыны жариялағанда жадтан орын бөлінуі қалай аталады?",
    options: [
      {
        id: "algo-t01-b06-op1",
        text: "Инициализация немесе анықтау (Definition)"
      },
      {
        id: "algo-t01-b06-op2",
        text: "Компиляция"
      },
      {
        id: "algo-t01-b06-op3",
        text: "Трансляция"
      },
      {
        id: "algo-t01-b06-op4",
        text: "Декларация (тек хабарлау)"
      }
    ],
    correctOptionIds: [
      "algo-t01-b06-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b07",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде const кілт сөзі не үшін қолданылады?",
    options: [
      {
        id: "algo-t01-b07-op1",
        text: "Айнымалы мәнін өзгермейтін тұрақты (constant) ету үшін"
      },
      {
        id: "algo-t01-b07-op2",
        text: "Жаңа класс құру үшін"
      },
      {
        id: "algo-t01-b07-op3",
        text: "Функцияны тез орындау үшін"
      },
      {
        id: "algo-t01-b07-op4",
        text: "Айнымалыны өшіру үшін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b07-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b08",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі float пен double деректер типтерінің басты айырмашылығы қандай?",
    options: [
      {
        id: "algo-t01-b08-op1",
        text: "Дәлдігінде (float - 32 бит, double - 64 бит)"
      },
      {
        id: "algo-t01-b08-op2",
        text: "Тек float оң сандарды сақтайды"
      },
      {
        id: "algo-t01-b08-op3",
        text: "float бүтін сандарды сақтайды"
      },
      {
        id: "algo-t01-b08-op4",
        text: "Айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t01-b08-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b09",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде айнымалының атауы (идентификатор) қандай таңбадан басталмауы керек?",
    options: [
      {
        id: "algo-t01-b09-op1",
        text: "Саннан"
      },
      {
        id: "algo-t01-b09-op2",
        text: "Латын әрпінен"
      },
      {
        id: "algo-t01-b09-op3",
        text: "Төменгі сызықшадан (_)"
      },
      {
        id: "algo-t01-b09-op4",
        text: "Бас әріптен"
      }
    ],
    correctOptionIds: [
      "algo-t01-b09-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b10",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі bool типі орындалу кезінде жадтан әдетте қанша орын алады?",
    options: [
      {
        id: "algo-t01-b10-op1",
        text: "1 байт"
      },
      {
        id: "algo-t01-b10-op2",
        text: "4 байт"
      },
      {
        id: "algo-t01-b10-op3",
        text: "8 бит (бірақ жадты адрес бойынша оқу үшін 1 байт бөлінеді)"
      },
      {
        id: "algo-t01-b10-op4",
        text: "2 байт"
      }
    ],
    correctOptionIds: [
      "algo-t01-b10-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b11",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі wchar_t деректер типі не үшін қолданылады?",
    options: [
      {
        id: "algo-t01-b11-op1",
        text: "Күрделірек/кеңейтілген символдарды (Unicode) сақтау үшін"
      },
      {
        id: "algo-t01-b11-op2",
        text: "Бүтін сандарды сақтау үшін"
      },
      {
        id: "algo-t01-b11-op3",
        text: "Жолдарды біріктіру үшін"
      },
      {
        id: "algo-t01-b11-op4",
        text: "Жадты босату үшін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b11-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b12",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі айнымалының көлемін байтпен анықтайтын оператор қандай?",
    options: [
      {
        id: "algo-t01-b12-op1",
        text: "sizeof"
      },
      {
        id: "algo-t01-b12-op2",
        text: "length"
      },
      {
        id: "algo-t01-b12-op3",
        text: "size"
      },
      {
        id: "algo-t01-b12-op4",
        text: "count"
      }
    ],
    correctOptionIds: [
      "algo-t01-b12-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b13",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде static_cast операторы не үшін қолданылады?",
    options: [
      {
        id: "algo-t01-b13-op1",
        text: "Деректер типін қауіпсіз түрде басқа типке түрлендіру үшін"
      },
      {
        id: "algo-t01-b13-op2",
        text: "Айнымалыны тұрақты ету үшін"
      },
      {
        id: "algo-t01-b13-op3",
        text: "Жадты автоматты түрде тазарту үшін"
      },
      {
        id: "algo-t01-b13-op4",
        text: "Функцияны жеделдету үшін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b13-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b14",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі unsigned int типіне теріс мән меншіктелсе не болады?",
    options: [
      {
        id: "algo-t01-b14-op1",
        text: "Мән типінің ең үлкен мүмкін оң мәніне айналады (underflow)"
      },
      {
        id: "algo-t01-b14-op2",
        text: "Бағдарлама қатемен тоқтайды"
      },
      {
        id: "algo-t01-b14-op3",
        text: "Мән нөлге тең болады"
      },
      {
        id: "algo-t01-b14-op4",
        text: "Теріс мән сол күйінде сақталады"
      }
    ],
    correctOptionIds: [
      "algo-t01-b14-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b15",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі локалды және глобалды айнымалылардың айырмашылығы неде?",
    options: [
      {
        id: "algo-t01-b15-op1",
        text: "Локалды айнымалы тек өзі жарияланған блок ішінде, ал глобалды айнымалы бүкіл файлда қолжетімді"
      },
      {
        id: "algo-t01-b15-op2",
        text: "Глобалды айнымалылар жадты аз тұтынады"
      },
      {
        id: "algo-t01-b15-op3",
        text: "Локалды айнымалылар тек функциядан тыс жерде жұмыс істейді"
      },
      {
        id: "algo-t01-b15-op4",
        text: "Айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t01-b15-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b16",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі pointer (нұсқауыш) дегеніміз не?",
    options: [
      {
        id: "algo-t01-b16-op1",
        text: "Басқа айнымалының жадтағы мекенжайын (address) сақтайтын айнымалы"
      },
      {
        id: "algo-t01-b16-op2",
        text: "Жаңа деректер типінің атауы"
      },
      {
        id: "algo-t01-b16-op3",
        text: "Айнымалының тұрақты мәні"
      },
      {
        id: "algo-t01-b16-op4",
        text: "Массив элементтерінің индексі"
      }
    ],
    correctOptionIds: [
      "algo-t01-b16-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b17",
    subjectId: SubjectId.ALGO,
    text: "`&` операторы айнымалының алдында жазылғанда (мысалы, `&x`) не мағына береді?",
    options: [
      {
        id: "algo-t01-b17-op1",
        text: "Айнымалының жадтағы мекенжайын алу (address-of operator)"
      },
      {
        id: "algo-t01-b17-op2",
        text: "Логикалық ЖӘНЕ операциясы"
      },
      {
        id: "algo-t01-b17-op3",
        text: "Айнымалыны сілтеме ретінде жариялау"
      },
      {
        id: "algo-t01-b17-op4",
        text: "Айнымалының мәнін көбейту"
      }
    ],
    correctOptionIds: [
      "algo-t01-b17-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b18",
    subjectId: SubjectId.ALGO,
    text: "Нұсқауыш айнымалының алдында `*` белгісі жазылғанда (мысалы, `*ptr`) не мағына береді?",
    options: [
      {
        id: "algo-t01-b18-op1",
        text: "Нұсқауыш сілтеп тұрған мекенжайдағы мәнді алу (dereferencing)"
      },
      {
        id: "algo-t01-b18-op2",
        text: "Мекенжайдың өзін көбейту"
      },
      {
        id: "algo-t01-b18-op3",
        text: "Жаңа нұсқауыш құру"
      },
      {
        id: "algo-t01-b18-op4",
        text: "Нұсқауыштың өлшемін анықтау"
      }
    ],
    correctOptionIds: [
      "algo-t01-b18-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1bb23e99-8abb-4819-8233-bc52b06f1afa",
    subjectId: SubjectId.ALGO,
    text: "C++11 стандартындағы `nullptr` кілтсөзінің ескі `NULL` немесе `0` мәндерінен басты артықшылығы қандай?",
    options: [
      {
        id: "ce428124-fa86-4a9f-9aa1-e33c73f4c3cb",
        text: "Ол типтік қауіпсіздікті қамтамасыз ететін арнайы нұсқауыш типі болып табылады (бүтін сан емес)"
      },
      {
        id: "ad870eae-5271-4ddc-92c1-9a9848fd1294",
        text: "Ол жадыдан аз орын алады"
      },
      {
        id: "3b76af3c-09e2-4927-86f8-45c9ff6eda43",
        text: "Оны кез келген бүтін санмен тікелей салыстыруға болады"
      },
      {
        id: "cb649171-844c-4ff4-976f-10ba46424a75",
        text: "Ол компиляция жылдамдығын арттырады"
      }
    ],
    correctOptionIds: [
      "ce428124-fa86-4a9f-9aa1-e33c73f4c3cb"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b19",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде сілтеме (Reference, мысалы `int &ref = x;`) деген не?",
    options: [
      {
        id: "algo-t01-b19-op1",
        text: "Бұрыннан бар айнымалының синонимі немесе лақап аты (alias)"
      },
      {
        id: "algo-t01-b19-op2",
        text: "Басқа функцияның атауы"
      },
      {
        id: "algo-t01-b19-op3",
        text: "Динамикалық жадтағы мекенжай"
      },
      {
        id: "algo-t01-b19-op4",
        text: "Тұрақты мән"
      }
    ],
    correctOptionIds: [
      "algo-t01-b19-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b20",
    subjectId: SubjectId.ALGO,
    text: "Сілтеме (reference) мен нұсқауыштың (pointer) басты айырмашылығы қандай?",
    options: [
      {
        id: "algo-t01-b20-op1",
        text: "Сілтеме жарияланғанда инициализациялануы тиіс және оны қайта бағыттау мүмкін емес, ал нұсқауышты өзгертуге және nullptr меншіктеуге болады"
      },
      {
        id: "algo-t01-b20-op2",
        text: "Сілтеме жадтан көбірек орын алады"
      },
      {
        id: "algo-t01-b20-op3",
        text: "Нұсқауыш тек бүтін сандарды сілтей алады"
      },
      {
        id: "algo-t01-b20-op4",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t01-b20-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b21",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде динамикалық жадпен (Heap) жұмыс істеу үшін қандай операторлар қолданылады?",
    options: [
      {
        id: "algo-t01-b21-op1",
        text: "new және delete"
      },
      {
        id: "algo-t01-b21-op2",
        text: "malloc және free"
      },
      {
        id: "algo-t01-b21-op3",
        text: "alloc және dealloc"
      },
      {
        id: "algo-t01-b21-op4",
        text: "create және destroy"
      }
    ],
    correctOptionIds: [
      "algo-t01-b21-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b22",
    subjectId: SubjectId.ALGO,
    text: "C тілінде динамикалық жад бөлу және босату үшін қандай функциялар қолданылады?",
    options: [
      {
        id: "algo-t01-b22-op1",
        text: "malloc() және free()"
      },
      {
        id: "algo-t01-b22-op2",
        text: "new және delete"
      },
      {
        id: "algo-t01-b22-op3",
        text: "alloc() және release()"
      },
      {
        id: "algo-t01-b22-op4",
        text: "getmem() және closemem()"
      }
    ],
    correctOptionIds: [
      "algo-t01-b22-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b23",
    subjectId: SubjectId.ALGO,
    text: "`int *arr = new int[10];` арқылы бөлінген жадты қалай дұрыс босату керек?",
    options: [
      {
        id: "algo-t01-b23-op1",
        text: "delete[] arr;"
      },
      {
        id: "algo-t01-b23-op2",
        text: "delete arr;"
      },
      {
        id: "algo-t01-b23-op3",
        text: "free(arr);"
      },
      {
        id: "algo-t01-b23-op4",
        text: "delete arr[10];"
      }
    ],
    correctOptionIds: [
      "algo-t01-b23-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b24",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі struct пен class арасындағы басты айырмашылық қандай?",
    options: [
      {
        id: "algo-t01-b24-op1",
        text: "struct мүшелері әдепкі бойынша public, ал class мүшелері әдепкі бойынша private болады"
      },
      {
        id: "algo-t01-b24-op2",
        text: "struct мұрагерлікті (inheritance) қолдамайды"
      },
      {
        id: "algo-t01-b24-op3",
        text: "class жадыдан әрқашан көп орын алады"
      },
      {
        id: "algo-t01-b24-op4",
        text: "struct құрамында функциялар жазуға болмайды"
      }
    ],
    correctOptionIds: [
      "algo-t01-b24-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "fab6edd0-2c85-43a8-b46f-677b9a73fe9c",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі union (біріктіру) деректер типінің struct-тан жадты бөлудегі басты ерекшелігі қандай?",
    options: [
      {
        id: "2a3bbcde-1fdc-4fe6-9f6d-9207e98f4a67",
        text: "union-ның барлық мүшелері бір ғана жад аймағын бөлісіп пайдаланады, ал оның жалпы өлшемі ең үлкен мүшесінің өлшеміне тең болады"
      },
      {
        id: "c920d60b-2545-4824-948d-d484c33f0663",
        text: "union тек логикалық мәндерді сақтай алады"
      },
      {
        id: "c92792ef-1e8c-4e8a-b99c-165d576830a4",
        text: "union жадыдан мүлдем орын алмайды"
      },
      {
        id: "5b388ac4-263e-4457-9aec-ba0881617b0a",
        text: "union мүшелерінің барлығы тек public болады"
      }
    ],
    correctOptionIds: [
      "2a3bbcde-1fdc-4fe6-9f6d-9207e98f4a67"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b25",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `sizeof(char)` мәні нешеге тең?",
    options: [
      {
        id: "algo-t01-b25-op1",
        text: "Әрқашан 1-ге тең (1 байт)"
      },
      {
        id: "algo-t01-b25-op2",
        text: "Сервер архитектурасына байланысты 2 немесе 4 байт"
      },
      {
        id: "algo-t01-b25-op3",
        text: "Компилятор баптауларына тәуелді"
      },
      {
        id: "algo-t01-b25-op4",
        text: "0-ге тең"
      }
    ],
    correctOptionIds: [
      "algo-t01-b25-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b26",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде препроцессор (Preprocessor) кезеңінде қандай әрекеттер орындалады?",
    options: [
      {
        id: "algo-t01-b26-op1",
        text: "`#include`, `#define` сияқты директивалар өңделіп, кодқа мәтіндік алмастырулар жасалады"
      },
      {
        id: "algo-t01-b26-op2",
        text: "Код машиналық нұсқауларға түрленеді"
      },
      {
        id: "algo-t01-b26-op3",
        text: "Объектілік файлдар біріктіріледі"
      },
      {
        id: "algo-t01-b26-op4",
        text: "Қателерді табу үшін код синтаксисі тексеріледі"
      }
    ],
    correctOptionIds: [
      "algo-t01-b26-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d9b4d9e9-6437-4d09-90ee-e2bc80d90070",
    subjectId: SubjectId.ALGO,
    text: "Компиляция процесінің қандай кезеңінде объектілік файлдар (.obj/.o) және кітапханалар біріктіріліп, дайын орындалатын файл (.exe) жасалады?",
    options: [
      {
        id: "7f492785-5cf8-44e2-b884-af0266e495f2",
        text: "Байланыстыру (Linking) кезеңінде"
      },
      {
        id: "9facbcbd-aa68-4ae8-9988-fd47828a6ec0",
        text: "Препроцессинг кезеңінде"
      },
      {
        id: "242da5b7-04ab-4706-be68-764f1097acd7",
        text: "Ассемблерлеу кезеңінде"
      },
      {
        id: "524c7e2e-7d75-4d50-8c04-f29f99867ad4",
        text: "Оңтайландыру кезеңінде"
      }
    ],
    correctOptionIds: [
      "7f492785-5cf8-44e2-b884-af0266e495f2"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0a6e260f-4f71-4170-8339-3fb6e223e838",
    subjectId: SubjectId.ALGO,
    text: "Статикалық байланыстыру (Static Linking) мен динамикалық байланыстырудың (Dynamic Linking) басты айырмашылығы қандай?",
    options: [
      {
        id: "b2b83c9b-3fff-424a-ad94-636b8f1e8883",
        text: "Статикалық байланыстыруда кітапхана коды орындалатын файлдың ішіне толық көшіріледі, ал динамикалықта код тек орындалу кезінде жүктеледі"
      },
      {
        id: "9d46af30-7ab6-4af3-979d-b0906c4e2606",
        text: "Динамикалық байланыстыруда статикалыққа қарағанда файл өлшемі үлкенірек болады"
      },
      {
        id: "f029102b-ae99-46e1-8eb0-e65394201e1e",
        text: "Статикалық байланыстыру тек Linux жүйесінде қолданылады"
      },
      {
        id: "f231d9ca-8d51-489e-909d-ddc1c406e0bc",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "b2b83c9b-3fff-424a-ad94-636b8f1e8883"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b27",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `volatile` кілтсөзі не үшін қолданылады?",
    options: [
      {
        id: "algo-t01-b27-op1",
        text: "Компиляторға бұл айнымалының мәні сыртқы факторлардан өзгеруі мүмкін екенін ескертіп, оны оңтайландырудан қорғау үшін"
      },
      {
        id: "algo-t01-b27-op2",
        text: "Айнымалыны өте жылдам оқитын ету үшін"
      },
      {
        id: "algo-t01-b27-op3",
        text: "Айнымалыны тұрақты (const) қылу үшін"
      },
      {
        id: "algo-t01-b27-op4",
        text: "Айнымалыны жадтан автоматты өшіру үшін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b27-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b28",
    subjectId: SubjectId.ALGO,
    text: "С++ тіліндегі `namespace` (аттар кеңістігі) не үшін қажет?",
    options: [
      {
        id: "algo-t01-b28-op1",
        text: "Ұқсас атаулары бар айнымалылар мен функциялардың арасындағы атаулар қайшылығын (naming conflicts) болдырмау үшін"
      },
      {
        id: "algo-t01-b28-op2",
        text: "Жадты үнемдеу үшін"
      },
      {
        id: "algo-t01-b28-op3",
        text: "Бағдарламаның орындалу уақытын қысқарту үшін"
      },
      {
        id: "algo-t01-b28-op4",
        text: "Файлдарды топтастыру үшін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b28-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b29",
    subjectId: SubjectId.ALGO,
    text: "`std` аттар кеңістігін толық қосу үшін кодтың басында не жазылады?",
    options: [
      {
        id: "algo-t01-b29-op1",
        text: "using namespace std;"
      },
      {
        id: "algo-t01-b29-op2",
        text: "import std;"
      },
      {
        id: "algo-t01-b29-op3",
        text: "#include <std>"
      },
      {
        id: "algo-t01-b29-op4",
        text: "using std.all;"
      }
    ],
    correctOptionIds: [
      "algo-t01-b29-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b30",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі стандартты қателерді шығару ағыны қалай аталады?",
    options: [
      {
        id: "algo-t01-b30-op1",
        text: "cerr"
      },
      {
        id: "algo-t01-b30-op2",
        text: "cout"
      },
      {
        id: "algo-t01-b30-op3",
        text: "cin"
      },
      {
        id: "algo-t01-b30-op4",
        text: "clog"
      }
    ],
    correctOptionIds: [
      "algo-t01-b30-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "59ac14b0-4991-443c-a3d6-2b5a3d5aa109",
    subjectId: SubjectId.ALGO,
    text: "`cout` ағынында шығарылатын ондық сандардың дәлдігін (үтірден кейінгі таңбалар санын) орнату үшін `iomanip` кітапханасынан қандай манипулятор қолданылады?",
    options: [
      {
        id: "d125b4ff-e287-4f36-857d-d5746c7183e3",
        text: "setprecision()"
      },
      {
        id: "08fa8c4c-d585-4225-815c-571950217156",
        text: "setw()"
      },
      {
        id: "76112e1f-03ff-4162-a300-76ec79e7d861",
        text: "fixed()"
      },
      {
        id: "26c3cd00-1bd9-4445-9589-63d5f9af9d76",
        text: "precision()"
      }
    ],
    correctOptionIds: [
      "d125b4ff-e287-4f36-857d-d5746c7183e3"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "fc322981-e0ba-493b-be94-01a6101fc54f",
    subjectId: SubjectId.ALGO,
    text: "Жолдардың шығарылу енін теңестіру (бос орындармен толтыру) үшін қолданылатын манипулятор қандай?",
    options: [
      {
        id: "c783d84a-5152-454a-b7e0-029f97072e7f",
        text: "setw()"
      },
      {
        id: "1d3c6d2c-5be7-43ec-b23a-a407569f9f4a",
        text: "setprecision()"
      },
      {
        id: "8d8fe022-4738-4d7e-a9ff-d570dbd3ef0e",
        text: "fixed()"
      },
      {
        id: "12df9c09-537c-493b-91ca-06c5caafc109",
        text: "flush()"
      }
    ],
    correctOptionIds: [
      "c783d84a-5152-454a-b7e0-029f97072e7f"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b31",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде `int x = 5 / 2;` амалы орындалғаннан кейін `x` мәні нешеге тең болады?",
    options: [
      {
        id: "algo-t01-b31-op1",
        text: "2"
      },
      {
        id: "algo-t01-b31-op2",
        text: "2.5"
      },
      {
        id: "algo-t01-b31-op3",
        text: "3"
      },
      {
        id: "algo-t01-b31-op4",
        text: "Қате шығады"
      }
    ],
    correctOptionIds: [
      "algo-t01-b31-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b32",
    subjectId: SubjectId.ALGO,
    text: "`double x = 5.0 / 2;` амалы орындалғаннан кейін `x` мәні нешеге тең болады?",
    options: [
      {
        id: "algo-t01-b32-op1",
        text: "2.5"
      },
      {
        id: "algo-t01-b32-op2",
        text: "2"
      },
      {
        id: "algo-t01-b32-op3",
        text: "3"
      },
      {
        id: "algo-t01-b32-op4",
        text: "2.0"
      }
    ],
    correctOptionIds: [
      "algo-t01-b32-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b33",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі қалдықты табу операторы қандай символмен белгіленеді?",
    options: [
      {
        id: "algo-t01-b33-op1",
        text: "%"
      },
      {
        id: "algo-t01-b33-op2",
        text: "/"
      },
      {
        id: "algo-t01-b33-op3",
        text: "div"
      },
      {
        id: "algo-t01-b33-op4",
        text: "mod"
      }
    ],
    correctOptionIds: [
      "algo-t01-b33-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b34",
    subjectId: SubjectId.ALGO,
    text: "`x % y` амалында `y` мәні 0-ге тең болса не орын алады?",
    options: [
      {
        id: "algo-t01-b34-op1",
        text: "Бағдарлама нөлге бөлу қатесімен (division by zero) авариялық түрде тоқтайды"
      },
      {
        id: "algo-t01-b34-op2",
        text: "Нәтижесі нөлге тең болады"
      },
      {
        id: "algo-t01-b34-op3",
        text: "Нәтижесі шексіздік болады"
      },
      {
        id: "algo-t01-b34-op4",
        text: "Мән өзгеріссіз қалады"
      }
    ],
    correctOptionIds: [
      "algo-t01-b34-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b35",
    subjectId: SubjectId.ALGO,
    text: "Постфикс оқиғасы (x++) мен префикс оқиғасының (++x) айырмашылығы қандай?",
    options: [
      {
        id: "algo-t01-b35-op1",
        text: "++x алдымен мәнді 1-ге арттырып, сосын нәтижені қайтарады, ал x++ алдымен ағымдағы мәнді қайтарып, содан кейін ғана оны 1-ге арттырады"
      },
      {
        id: "algo-t01-b35-op2",
        text: "x++ мәнді жылдамырақ арттырады"
      },
      {
        id: "algo-t01-b35-op3",
        text: "++x тек оң сандар үшін орындалады"
      },
      {
        id: "algo-t01-b35-op4",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t01-b35-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b36",
    subjectId: SubjectId.ALGO,
    text: "`int a = 5; int b = a++;` орындалғаннан кейін `a` мен `b` мәндері қандай болады?",
    options: [
      {
        id: "algo-t01-b36-op1",
        text: "a = 6, b = 5"
      },
      {
        id: "algo-t01-b36-op2",
        text: "a = 6, b = 6"
      },
      {
        id: "algo-t01-b36-op3",
        text: "a = 5, b = 5"
      },
      {
        id: "algo-t01-b36-op4",
        text: "a = 5, b = 6"
      }
    ],
    correctOptionIds: [
      "algo-t01-b36-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b37",
    subjectId: SubjectId.ALGO,
    text: "`int a = 5; int b = ++a;` орындалғаннан кейін `a` мен `b` мәндері қандай болады?",
    options: [
      {
        id: "algo-t01-b37-op1",
        text: "a = 6, b = 6"
      },
      {
        id: "algo-t01-b37-op2",
        text: "a = 6, b = 5"
      },
      {
        id: "algo-t01-b37-op3",
        text: "a = 5, b = 6"
      },
      {
        id: "algo-t01-b37-op4",
        text: "a = 5, b = 5"
      }
    ],
    correctOptionIds: [
      "algo-t01-b37-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b38",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде үштік оператор (Ternary Operator) қалай жазылады?",
    options: [
      {
        id: "algo-t01-b38-op1",
        text: "шарт ? мән1 : мән2"
      },
      {
        id: "algo-t01-b38-op2",
        text: "шарт : мән1 ? мән2"
      },
      {
        id: "algo-t01-b38-op3",
        text: "шарт ? мән1 ? мән2"
      },
      {
        id: "algo-t01-b38-op4",
        text: "if шарт ? мән1 : мән2"
      }
    ],
    correctOptionIds: [
      "algo-t01-b38-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b39",
    subjectId: SubjectId.ALGO,
    text: "Логикалық ЖӘНЕ (AND) операторы C++ тілінде қалай жазылады?",
    options: [
      {
        id: "algo-t01-b39-op1",
        text: "&&"
      },
      {
        id: "algo-t01-b39-op2",
        text: "||"
      },
      {
        id: "algo-t01-b39-op3",
        text: "&"
      },
      {
        id: "algo-t01-b39-op4",
        text: "AND"
      }
    ],
    correctOptionIds: [
      "algo-t01-b39-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b40",
    subjectId: SubjectId.ALGO,
    text: "Логикалық НЕМЕСЕ (OR) операторы C++ тілінде қалай жазылады?",
    options: [
      {
        id: "algo-t01-b40-op1",
        text: "||"
      },
      {
        id: "algo-t01-b40-op2",
        text: "&&"
      },
      {
        id: "algo-t01-b40-op3",
        text: "|"
      },
      {
        id: "algo-t01-b40-op4",
        text: "OR"
      }
    ],
    correctOptionIds: [
      "algo-t01-b40-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b41",
    subjectId: SubjectId.ALGO,
    text: "Логикалық терістеу (NOT) операторы C++ тілінде қалай жазылады?",
    options: [
      {
        id: "algo-t01-b41-op1",
        text: "!"
      },
      {
        id: "algo-t01-b41-op2",
        text: "~"
      },
      {
        id: "algo-t01-b41-op3",
        text: "not"
      },
      {
        id: "algo-t01-b41-op4",
        text: "!="
      }
    ],
    correctOptionIds: [
      "algo-t01-b41-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b42",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі биттік ЖӘНЕ (Bitwise AND) операторы қандай символмен жазылады?",
    options: [
      {
        id: "algo-t01-b42-op1",
        text: "&"
      },
      {
        id: "algo-t01-b42-op2",
        text: "&&"
      },
      {
        id: "algo-t01-b42-op3",
        text: "|"
      },
      {
        id: "algo-t01-b42-op4",
        text: "^"
      }
    ],
    correctOptionIds: [
      "algo-t01-b42-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b43",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі биттік НЕМЕСЕ (Bitwise OR) операторы қандай символмен жазылады?",
    options: [
      {
        id: "algo-t01-b43-op1",
        text: "|"
      },
      {
        id: "algo-t01-b43-op2",
        text: "||"
      },
      {
        id: "algo-t01-b43-op3",
        text: "&"
      },
      {
        id: "algo-t01-b43-op4",
        text: "~"
      }
    ],
    correctOptionIds: [
      "algo-t01-b43-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b44",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі биттік ЕРЕКШЕ НЕМЕСЕ (Bitwise XOR) операторы қандай символмен жазылады?",
    options: [
      {
        id: "algo-t01-b44-op1",
        text: "^"
      },
      {
        id: "algo-t01-b44-op2",
        text: "~"
      },
      {
        id: "algo-t01-b44-op3",
        text: "&"
      },
      {
        id: "algo-t01-b44-op4",
        text: "|"
      }
    ],
    correctOptionIds: [
      "algo-t01-b44-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b45",
    subjectId: SubjectId.ALGO,
    text: "`x << 1` биттік солға жылжыту амалы сандық тұрғыдан неге тең?",
    options: [
      {
        id: "algo-t01-b45-op1",
        text: "Санды 2-ге көбейткенмен бірдей"
      },
      {
        id: "algo-t01-b45-op2",
        text: "Санды 2-ге бөлгенмен бірдей"
      },
      {
        id: "algo-t01-b45-op3",
        text: "Санның квадраты болады"
      },
      {
        id: "algo-t01-b45-op4",
        text: "Санға 1 қосқанмен бірдей"
      }
    ],
    correctOptionIds: [
      "algo-t01-b45-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b46",
    subjectId: SubjectId.ALGO,
    text: "`x >> 1` биттік оңға жылжыту амалы сандық тұрғыдан неге тең?",
    options: [
      {
        id: "algo-t01-b46-op1",
        text: "Санды 2-ге бүтіндей бөлгенмен бірдей"
      },
      {
        id: "algo-t01-b46-op2",
        text: "Санды 2-ге көбейткенмен бірдей"
      },
      {
        id: "algo-t01-b46-op3",
        text: "Санды өз-өзіне қосқанмен бірдей"
      },
      {
        id: "algo-t01-b46-op4",
        text: "Саннан 1 азайтқанмен бірдей"
      }
    ],
    correctOptionIds: [
      "algo-t01-b46-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c288db60-917c-4b40-bd4f-1629883bcd11",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі көрсеткіштерді автоматты түрде басқаратын және жадтың жылыстауын (memory leak) болдырмайтын ақылды нұсқауыштардың (Smart Pointers) қандай түрлері бар?",
    options: [
      {
        id: "2492d6a5-3694-4ff7-bb18-59d1e4b245ce",
        text: "unique_ptr, shared_ptr, weak_ptr"
      },
      {
        id: "590fd1e5-27f8-4c94-aec9-b34d39d9e0a6",
        text: "auto_ptr, static_ptr, global_ptr"
      },
      {
        id: "ad00d25f-de20-476b-83cf-39c2e68591cd",
        text: "int_ptr, char_ptr, void_ptr"
      },
      {
        id: "f22f7674-0c03-417f-8fb2-e4c4fd8c7e19",
        text: "safe_ptr, unsafe_ptr, null_ptr"
      }
    ],
    correctOptionIds: [
      "2492d6a5-3694-4ff7-bb18-59d1e4b245ce"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b47",
    subjectId: SubjectId.ALGO,
    text: "`std::unique_ptr` ақылды нұсқауышының басты ерекшелігі қандай?",
    options: [
      {
        id: "algo-t01-b47-op1",
        text: "Ол динамикалық объектіге иелік етуді тек бір нұсқауышпен шектейді, оны көшіруге болмайды, тек жылжытуға болады"
      },
      {
        id: "algo-t01-b47-op2",
        text: "Ол объектіге бірнеше нұсқауыштың бір уақытта иеленуіне мүмкіндік береді"
      },
      {
        id: "algo-t01-b47-op3",
        text: "Ол жадты автоматты түрде дефрагментациялайды"
      },
      {
        id: "algo-t01-b47-op4",
        text: "Ол тек класс мүшелерімен жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "algo-t01-b47-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b48",
    subjectId: SubjectId.ALGO,
    text: "`std::shared_ptr` ақылды нұсқауышының негізгі ерекшелігі неде?",
    options: [
      {
        id: "algo-t01-b48-op1",
        text: "Ол объектіге бірнеше нұсқауыштың бір уақытта иелік етуіне мүмкіндік береді және сілтемелер саны нөлге жеткенде объектіні автоматты түрде өшіреді"
      },
      {
        id: "algo-t01-b48-op2",
        text: "Оны мүлдем өзгертуге болмайды"
      },
      {
        id: "algo-t01-b48-op3",
        text: "Ол тек статикалық айнымалылар үшін қолданылады"
      },
      {
        id: "algo-t01-b48-op4",
        text: "Ол жадты ең қысқа жолмен оқуды қамтамасыз етеді"
      }
    ],
    correctOptionIds: [
      "algo-t01-b48-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "430d3b3b-233b-4dcd-a3cb-7a5add667e47",
    subjectId: SubjectId.ALGO,
    text: "Циклдік сілтемелерді (circular references) болдырмау үшін `shared_ptr` серіктесі ретінде қандай ақылды нұсқауыш қолданылады?",
    options: [
      {
        id: "fd942ddc-3864-4934-b744-ef969d9d9768",
        text: "weak_ptr"
      },
      {
        id: "c8c31717-42fb-4477-b2cd-f0f12c1d1582",
        text: "unique_ptr"
      },
      {
        id: "e1ad3c82-9085-46e8-ac19-8491083b227e",
        text: "static_ptr"
      },
      {
        id: "50975220-4000-4b4e-b4ce-be91b26877bd",
        text: "auto_ptr"
      }
    ],
    correctOptionIds: [
      "fd942ddc-3864-4934-b744-ef969d9d9768"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b49",
    subjectId: SubjectId.ALGO,
    text: "`const int *ptr;` жариялауы нені білдіреді?",
    options: [
      {
        id: "algo-t01-b49-op1",
        text: "Нұсқауыш сілтеп тұрған мән тұрақты (өзгермейді), бірақ нұсқауыштың өзін басқа мекенжайға бағыттауға болады"
      },
      {
        id: "algo-t01-b49-op2",
        text: "Нұсқауыштың мекенжайы тұрақты, бірақ мәнді өзгертуге болады"
      },
      {
        id: "algo-t01-b49-op3",
        text: "Мән де, нұсқауыш та тұрақты, ешқайсысы өзгермейді"
      },
      {
        id: "algo-t01-b49-op4",
        text: "Нұсқауыш тек оң сандарды ғана сақтай алады"
      }
    ],
    correctOptionIds: [
      "algo-t01-b49-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b50",
    subjectId: SubjectId.ALGO,
    text: "`int * const ptr;` жариялауы нені білдіреді?",
    options: [
      {
        id: "algo-t01-b50-op1",
        text: "Нұсқауыштың өзі тұрақты (басқа жерге бағытталмайды), бірақ ол сілтеп тұрған мәнді өзгертуге болады"
      },
      {
        id: "algo-t01-b50-op2",
        text: "Нұсқауыш сілтеп тұрған мән тұрақты, ал мекенжай өзгере береді"
      },
      {
        id: "algo-t01-b50-op3",
        text: "Нұсқауыш тек бос орындарды сілтей алады"
      },
      {
        id: "algo-t01-b50-op4",
        text: "Нұсқауыш жадтан орын алмайды"
      }
    ],
    correctOptionIds: [
      "algo-t01-b50-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b51",
    subjectId: SubjectId.ALGO,
    text: "`const int * const ptr;` жариялауы нені білдіреді?",
    options: [
      {
        id: "algo-t01-b51-op1",
        text: "Мән де, нұсқауыш мекенжайы да тұрақты, ешқайсысын өзгертуге болмайды"
      },
      {
        id: "algo-t01-b51-op2",
        text: "Мән де, нұсқауыш та кез келген уақытта өзгереді"
      },
      {
        id: "algo-t01-b51-op3",
        text: "Нұсқауыш тек жаһандық айнымалыларды сілтейді"
      },
      {
        id: "algo-t01-b51-op4",
        text: "Жүйелік қателік тудырады"
      }
    ],
    correctOptionIds: [
      "algo-t01-b51-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b52",
    subjectId: SubjectId.ALGO,
    text: "Нұсқауыштармен арифметикалық амалдарда `ptr + 1` нені білдіреді?",
    options: [
      {
        id: "algo-t01-b52-op1",
        text: "Нұсқауыштың келесі элементке өтуін (мекенжай айнымалы типінің өлшеміне қарай өседі)"
      },
      {
        id: "algo-t01-b52-op2",
        text: "Мекенжайға 1 байтты қосуды"
      },
      {
        id: "algo-t01-b52-op3",
        text: "Айнымалының мәніне 1 қосуды"
      },
      {
        id: "algo-t01-b52-op4",
        text: "Нұсқауышты өшіруді"
      }
    ],
    correctOptionIds: [
      "algo-t01-b52-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b53",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `void` типі нені білдіреді?",
    options: [
      {
        id: "algo-t01-b53-op1",
        text: "Мәннің немесе типтің жоқтығын (мысалы, ештеңе қайтармайтын функциялар үшін)"
      },
      {
        id: "algo-t01-b53-op2",
        text: "Үлкен бүтін сандарды сақтауды"
      },
      {
        id: "algo-t01-b53-op3",
        text: "Мәтіндік жолдың аяқталуын"
      },
      {
        id: "algo-t01-b53-op4",
        text: "Логикалық ақиқат мәнін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b53-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b54",
    subjectId: SubjectId.ALGO,
    text: "`void*` нұсқауышының (generic pointer) ерекшелігі неде?",
    options: [
      {
        id: "algo-t01-b54-op1",
        text: "Ол кез келген типтегі деректің мекенжайын сақтай алады, бірақ оны деструкциялау үшін алдымен белгілі бір типке түрлендіру керек"
      },
      {
        id: "algo-t01-b54-op2",
        text: "Ол тек бос мәндерді сілтейді және оның мәні әрқашан нөл болады"
      },
      {
        id: "algo-t01-b54-op3",
        text: "Оны ешқашан басқа типке түрлендіру мүмкін емес"
      },
      {
        id: "algo-t01-b54-op4",
        text: "Ол жадты автоматты түрде тазартады"
      }
    ],
    correctOptionIds: [
      "algo-t01-b54-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b55",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `reinterpret_cast` операторы не үшін қолданылады?",
    options: [
      {
        id: "algo-t01-b55-op1",
        text: "Бір типтегі нұсқауышты мүлдем басқа типке төменгі деңгейде (бит деңгейінде) түрлендіру үшін"
      },
      {
        id: "algo-t01-b55-op2",
        text: "Тұрақтылық қасиетін алып тастау үшін"
      },
      {
        id: "algo-t01-b55-op3",
        text: "Полиморфты кластарды қауіпсіз түрлендіру үшін"
      },
      {
        id: "algo-t01-b55-op4",
        text: "Сандық мәнді мәтінге айналдыру үшін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b55-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b56",
    subjectId: SubjectId.ALGO,
    text: "`dynamic_cast` операторы не үшін қажет?",
    options: [
      {
        id: "algo-t01-b56-op1",
        text: "Полиморфизмді кластар иерархиясында қауіпсіз төмен бағытталған (downcasting) түрлендіру жасау үшін"
      },
      {
        id: "algo-t01-b56-op2",
        text: "Санды символға түрлендіру үшін"
      },
      {
        id: "algo-t01-b56-op3",
        text: "Тұрақты айнымалының мәнін өзгерту үшін"
      },
      {
        id: "algo-t01-b56-op4",
        text: "Сұранысты препроцессорда орындау үшін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b56-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b57",
    subjectId: SubjectId.ALGO,
    text: "`const_cast` операторының негізгі рөлі қандай?",
    options: [
      {
        id: "algo-t01-b57-op1",
        text: "Айнымалының тұрақтылық (const) қасиетін алып тастау немесе қосу үшін"
      },
      {
        id: "algo-t01-b57-op2",
        text: "Айнымалыны өшіру үшін"
      },
      {
        id: "algo-t01-b57-op3",
        text: "Жаңа тұрақты құру үшін"
      },
      {
        id: "algo-t01-b57-op4",
        text: "Деректер типін қауіпсіз оқу үшін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b57-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "94c2566d-54dd-48e2-a49e-111cb0547dff",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде айнымалының жариялану аймағынан тыс жерде оның өмір сүруін сақтайтын, бірақ тек сол блокта қолжетімді ететін класс модификаторы қандай?",
    options: [
      {
        id: "faff6f27-b797-4942-be93-dbc9852ce842",
        text: "static"
      },
      {
        id: "be895a47-ac44-4a38-ae64-22290498de9e",
        text: "extern"
      },
      {
        id: "7357b9e1-b509-4a51-9975-96aa69955123",
        text: "volatile"
      },
      {
        id: "df3edec1-9891-45f5-b0eb-f2069b77e68e",
        text: "register"
      }
    ],
    correctOptionIds: [
      "faff6f27-b797-4942-be93-dbc9852ce842"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b58",
    subjectId: SubjectId.ALGO,
    text: "`static` локалды айнымалылары қашан инициализацияланады және жадта қанша уақыт сақталады?",
    options: [
      {
        id: "algo-t01-b58-op1",
        text: "Бағдарлама іске қосылғанда тек бір рет қана инициализацияланады және бағдарлама аяқталғанша жадта сақталады"
      },
      {
        id: "algo-t01-b58-op2",
        text: "Функция әр шақырылған сайын қайта құрылады"
      },
      {
        id: "algo-t01-b58-op3",
        text: "Тек 10 секунд ішінде сақталады"
      },
      {
        id: "algo-t01-b58-op4",
        text: "Компиляция кезеңінде жойылады"
      }
    ],
    correctOptionIds: [
      "algo-t01-b58-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b59",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `typedef` немесе `using` (типтерге синоним беру) не үшін қажет?",
    options: [
      {
        id: "algo-t01-b59-op1",
        text: "Күрделі және ұзын деректер типтеріне қысқа, оқуға қолайлы балама атау беру үшін"
      },
      {
        id: "algo-t01-b59-op2",
        text: "Айнымалының мәнін жылдам өзгерту үшін"
      },
      {
        id: "algo-t01-b59-op3",
        text: "Жаңа деректер типін нөлден бастап құру үшін"
      },
      {
        id: "algo-t01-b59-op4",
        text: "Жадтан орын босату үшін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b59-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b60",
    subjectId: SubjectId.ALGO,
    text: "Деректерді жазу ағынындағы `endl` мен `\\n` айырмашылығы қандай?",
    options: [
      {
        id: "algo-t01-b60-op1",
        text: "`endl` жолды келесі жолға көшіріп қана қоймай, шығыс буферін (flush) тазартады, ал `\\n` тек жолды ауыстырады"
      },
      {
        id: "algo-t01-b60-op2",
        text: "`\\n` жадты тазартады, ал `endl` жылдамырақ"
      },
      {
        id: "algo-t01-b60-op3",
        text: "`endl` тек мәтінмен ғана орындалады"
      },
      {
        id: "algo-t01-b60-op4",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t01-b60-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b61",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `#define PI 3.14` сияқты макростар компиляцияның қай кезеңінде жойылады?",
    options: [
      {
        id: "algo-t01-b61-op1",
        text: "Препроцессор кезеңінде"
      },
      {
        id: "algo-t01-b61-op2",
        text: "Синтаксистік талдау кезеңінде"
      },
      {
        id: "algo-t01-b61-op3",
        text: "Байланыстыру (Linking) кезеңінде"
      },
      {
        id: "algo-t01-b61-op4",
        text: "Ассемблерлеу кезеңінде"
      }
    ],
    correctOptionIds: [
      "algo-t01-b61-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b62",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі бір жолдық пікірлер (comments) қалай жазылады?",
    options: [
      {
        id: "algo-t01-b62-op1",
        text: "//"
      },
      {
        id: "algo-t01-b62-op2",
        text: "/*"
      },
      {
        id: "algo-t01-b62-op3",
        text: "#"
      },
      {
        id: "algo-t01-b62-op4",
        text: "<!--"
      }
    ],
    correctOptionIds: [
      "algo-t01-b62-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b63",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі көп жолдық пікірлер (comments) қалай жазылады?",
    options: [
      {
        id: "algo-t01-b63-op1",
        text: "/* */"
      },
      {
        id: "algo-t01-b63-op2",
        text: "// //"
      },
      {
        id: "algo-t01-b63-op3",
        text: "''' '''"
      },
      {
        id: "algo-t01-b63-op4",
        text: "<!-- -->"
      }
    ],
    correctOptionIds: [
      "algo-t01-b63-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b64",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `extern` кілтсөзі не үшін қолданылады?",
    options: [
      {
        id: "algo-t01-b64-op1",
        text: "Айнымалының немесе функцияның басқа файлда (сыртта) анықталғанын компиляторға хабарлау үшін"
      },
      {
        id: "algo-t01-b64-op2",
        text: "Жаңа сыртқы функция құру үшін"
      },
      {
        id: "algo-t01-b64-op3",
        text: "Айнымалының өмір сүру аймағын шектеу үшін"
      },
      {
        id: "algo-t01-b64-op4",
        text: "Сұраныстарды жылдамдату үшін"
      }
    ],
    correctOptionIds: [
      "algo-t01-b64-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ff2134ea-d05b-43e8-83b6-7e79511943a9",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі ағындарды басқаратын `cin` операторымен бірге жолды бос орындарымен қоса толық оқу үшін қандай функция қолданылады?",
    options: [
      {
        id: "0e5c373b-02d7-4a89-8a1f-38fdfd0ca57a",
        text: "getline()"
      },
      {
        id: "45c942e2-3a9c-4179-be6c-14a0f7a8dbbe",
        text: "read()"
      },
      {
        id: "538d9c5c-83b8-436e-b825-1757c2224f32",
        text: "get()"
      },
      {
        id: "1a813a56-ec08-4c7d-af23-1b824469edf3",
        text: "scanf()"
      }
    ],
    correctOptionIds: [
      "0e5c373b-02d7-4a89-8a1f-38fdfd0ca57a"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b65",
    subjectId: SubjectId.ALGO,
    text: "Бүтін сандық типтердің арасында ең кіші орын алатын тип қандай?",
    options: [
      {
        id: "algo-t01-b65-op1",
        text: "short (немесе signed char)"
      },
      {
        id: "algo-t01-b65-op2",
        text: "int"
      },
      {
        id: "algo-t01-b65-op3",
        text: "long"
      },
      {
        id: "algo-t01-b65-op4",
        text: "bool"
      }
    ],
    correctOptionIds: [
      "algo-t01-b65-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b66",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `long long` типі жадтан әдетте қанша орын алады?",
    options: [
      {
        id: "algo-t01-b66-op1",
        text: "8 байт (64 бит)"
      },
      {
        id: "algo-t01-b66-op2",
        text: "4 байт"
      },
      {
        id: "algo-t01-b66-op3",
        text: "2 байт"
      },
      {
        id: "algo-t01-b66-op4",
        text: "16 байт"
      }
    ],
    correctOptionIds: [
      "algo-t01-b66-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b67",
    subjectId: SubjectId.ALGO,
    text: "`signed` және `unsigned` модификаторларының басты айырмашылығы неде?",
    options: [
      {
        id: "algo-t01-b67-op1",
        text: "`signed` оң және теріс сандарды сақтайды, ал `unsigned` тек теріс емес сандарды сақтайды"
      },
      {
        id: "algo-t01-b67-op2",
        text: "`unsigned` тек бүтін сандарды сақтай алады"
      },
      {
        id: "algo-t01-b67-op3",
        text: "`signed` тек жадта сақталады, ал `unsigned` тікелей дискіге жазылады"
      },
      {
        id: "algo-t01-b67-op4",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t01-b67-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b68",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде бүтін сан оның максималды мүмкін мәнінен асқанда не орын алады (overflow)?",
    options: [
      {
        id: "algo-t01-b68-op1",
        text: "Сан оның ең кіші мүмкін мәніне айналады (дөңгелектенеді)"
      },
      {
        id: "algo-t01-b68-op2",
        text: "Бағдарлама қатемен бірден тоқтайды"
      },
      {
        id: "algo-t01-b68-op3",
        text: "Сан нөлге тең болады"
      },
      {
        id: "algo-t01-b68-op4",
        text: "Мән өзгеріссіз сақталады"
      }
    ],
    correctOptionIds: [
      "algo-t01-b68-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b69",
    subjectId: SubjectId.ALGO,
    text: "Бағдарламаның стек жадында (Stack) сақталатын деректер қалай басқарылады?",
    options: [
      {
        id: "algo-t01-b69-op1",
        text: "Автоматты түрде басқарылады (функцияға кіргенде бөлініп, шыққанда жойылады)"
      },
      {
        id: "algo-t01-b69-op2",
        text: "Бағдарламашы тарапынан қолмен басқарылады"
      },
      {
        id: "algo-t01-b69-op3",
        text: "Сервер әкімшісі тарапынан реттеледі"
      },
      {
        id: "algo-t01-b69-op4",
        text: "Мүлдем өшірілмейді"
      }
    ],
    correctOptionIds: [
      "algo-t01-b69-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b70",
    subjectId: SubjectId.ALGO,
    text: "Бағдарламаның үйінді жадында (Heap) сақталатын деректер қалай басқарылады?",
    options: [
      {
        id: "algo-t01-b70-op1",
        text: "Бағдарламашы тарапынан қолмен бақыланады (new/delete немесе malloc/free арқылы)"
      },
      {
        id: "algo-t01-b70-op2",
        text: "Автоматты түрде компилятормен өшіріледі"
      },
      {
        id: "algo-t01-b70-op3",
        text: "Тек операциялық жүйе өшіреді"
      },
      {
        id: "algo-t01-b70-op4",
        text: "Ол мүлдем босатылмайды"
      }
    ],
    correctOptionIds: [
      "algo-t01-b70-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b71",
    subjectId: SubjectId.ALGO,
    text: "Стек жадының шектен тыс толуы (Stack Overflow) неден туындайды?",
    options: [
      {
        id: "algo-t01-b71-op1",
        text: "Шексіз рекурсия немесе стекте тым үлкен локалды массивтерді жариялау салдарынан"
      },
      {
        id: "algo-t01-b71-op2",
        text: "Жадтың жетіспеушілігінен"
      },
      {
        id: "algo-t01-b71-op3",
        text: "Индекстердің тым көп болуынан"
      },
      {
        id: "algo-t01-b71-op4",
        text: "Транзакциялардың бұғатталуынан"
      }
    ],
    correctOptionIds: [
      "algo-t01-b71-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b72",
    subjectId: SubjectId.ALGO,
    text: "Жадтың жылыстауы (Memory Leak) деген не?",
    options: [
      {
        id: "algo-t01-b72-op1",
        text: "Динамикалық бөлінген жадты қолмен босатпай, оған сілтеме жасайтын нұсқауышты жоғалтып алу салдарынан жадтың босқа бос емес болып қалуы"
      },
      {
        id: "algo-t01-b72-op2",
        text: "Бағдарламаның стек жадының бұзылуы"
      },
      {
        id: "algo-t01-b72-op3",
        text: "Айнымалылар типінің өзгеруі"
      },
      {
        id: "algo-t01-b72-op4",
        text: "Жадтан деректердің ұрлануы"
      }
    ],
    correctOptionIds: [
      "algo-t01-b72-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b73",
    subjectId: SubjectId.ALGO,
    text: "Нұсқауышты босатқаннан (delete) кейін оған nullptr меншіктемеу қандай қауіпті тудырады?",
    options: [
      {
        id: "algo-t01-b73-op1",
        text: "Босаған жадқа сілтеп тұрған \"ілулі нұсқауыш\" (dangling pointer) қалады, онымен жұмыс істеу қателікке әкеледі"
      },
      {
        id: "algo-t01-b73-op2",
        text: "Сілтеме автоматты түрде жаңа объектіге ауысады"
      },
      {
        id: "algo-t01-b73-op3",
        text: "Компиляция қатесін тудырады"
      },
      {
        id: "algo-t01-b73-op4",
        text: "Ешқандай қауіп тудырмайды"
      }
    ],
    correctOptionIds: [
      "algo-t01-b73-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b74",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде `int *ptr = new int(5);` жазуы нені білдіреді?",
    options: [
      {
        id: "algo-t01-b74-op1",
        text: "Үйінді жадынан бір бүтін сандық орын бөліп, оған 5 мәнін инициализациялау"
      },
      {
        id: "algo-t01-b74-op2",
        text: "5 элементтен тұратын бүтін сандар массивін құру"
      },
      {
        id: "algo-t01-b74-op3",
        text: "Нұсқауыштың мәнін 5-ке көбейту"
      },
      {
        id: "algo-t01-b74-op4",
        text: "Сілтеме құру"
      }
    ],
    correctOptionIds: [
      "algo-t01-b74-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b75",
    subjectId: SubjectId.ALGO,
    text: "`int *ptr = new int[5];` жазуы нені білдіреді?",
    options: [
      {
        id: "algo-t01-b75-op1",
        text: "Үйінді жадынан 5 элементтен тұратын бүтін сандар массивін құру"
      },
      {
        id: "algo-t01-b75-op2",
        text: "Бір бүтін санды 5 мәнімен инициализациялау"
      },
      {
        id: "algo-t01-b75-op3",
        text: "Жүйелік қате тудыратын сұраныс"
      },
      {
        id: "algo-t01-b75-op4",
        text: "Стекте жиынтық құру"
      }
    ],
    correctOptionIds: [
      "algo-t01-b75-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b76",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `nullptr` мәнінің деректер типі қандай?",
    options: [
      {
        id: "algo-t01-b76-op1",
        text: "std::nullptr_t"
      },
      {
        id: "algo-t01-b76-op2",
        text: "void*"
      },
      {
        id: "algo-t01-b76-op3",
        text: "int*"
      },
      {
        id: "algo-t01-b76-op4",
        text: "std::null_t"
      }
    ],
    correctOptionIds: [
      "algo-t01-b76-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b77",
    subjectId: SubjectId.ALGO,
    text: "Төмендегілердің қайсысы C++ тіліндегі дұрыс логикалық өрнек ЕМЕС?",
    options: [
      {
        id: "algo-t01-b77-op1",
        text: "a => b"
      },
      {
        id: "algo-t01-b77-op2",
        text: "a >= b"
      },
      {
        id: "algo-t01-b77-op3",
        text: "a <= b"
      },
      {
        id: "algo-t01-b77-op4",
        text: "a != b"
      }
    ],
    correctOptionIds: [
      "algo-t01-b77-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b78",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `x = a + b, c = d + e;` өрнегінде үтір (comma) операторының негізгі рөлі қандай?",
    options: [
      {
        id: "algo-t01-b78-op1",
        text: "Солдан оңға қарай барлық өрнектерді орындайды және ең соңғы өрнектің нәтижесін бүкіл өрнектің мәні ретінде қайтарады"
      },
      {
        id: "algo-t01-b78-op2",
        text: "Сұранысты бірден тоқтатады"
      },
      {
        id: "algo-t01-b78-op3",
        text: "Массивтерді біріктіру үшін қолданылады"
      },
      {
        id: "algo-t01-b78-op4",
        text: "Айнымалыларды оқшаулайды"
      }
    ],
    correctOptionIds: [
      "algo-t01-b78-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b79",
    subjectId: SubjectId.ALGO,
    text: "`int a = (5, 10);` орындалғаннан кейін `a` мәні нешеге тең болады?",
    options: [
      {
        id: "algo-t01-b79-op1",
        text: "10"
      },
      {
        id: "algo-t01-b79-op2",
        text: "5"
      },
      {
        id: "algo-t01-b79-op3",
        text: "15"
      },
      {
        id: "algo-t01-b79-op4",
        text: "Қате шығады"
      }
    ],
    correctOptionIds: [
      "algo-t01-b79-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b80",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде препроцессордың шартты компиляция директивасы қалай жазылады?",
    options: [
      {
        id: "algo-t01-b80-op1",
        text: "#ifdef, #ifndef, #endif, #else"
      },
      {
        id: "algo-t01-b80-op2",
        text: "if, else, endif"
      },
      {
        id: "algo-t01-b80-op3",
        text: "#if, #else, #then"
      },
      {
        id: "algo-t01-b80-op4",
        text: "PREPROCESSOR_IF"
      }
    ],
    correctOptionIds: [
      "algo-t01-b80-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "345f3d8e-539d-406d-adf8-002ae4b42c8b",
    subjectId: SubjectId.ALGO,
    text: "Шаблондық компиляциялық ескертулерді тексеретін `#pragma once` директивасының негізгі рөлі қандай?",
    options: [
      {
        id: "048538d5-c4fe-4430-9beb-4794380291fb",
        text: "Файлды компиляция кезінде тек бір рет қана қосуды қамтамасыз етеді (header guard баламасы)"
      },
      {
        id: "86f7aded-b587-4948-8d81-d06de936a359",
        text: "Бағдарламаны ең жылдам режимде орындайды"
      },
      {
        id: "a2b40498-06da-4878-82ca-0844117f7f69",
        text: "Жүйенің қауіпсіздік параметрлерін тексереді"
      },
      {
        id: "2d0eda69-189d-4d7e-a600-1e55fed44df3",
        text: "Барлық айнымалыларды өшіреді"
      }
    ],
    correctOptionIds: [
      "048538d5-c4fe-4430-9beb-4794380291fb"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b81",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `wchar_t` типіндегі символдық тұрақты (literal) қалай жазылады?",
    options: [
      {
        id: "algo-t01-b81-op1",
        text: "L'a'"
      },
      {
        id: "algo-t01-b81-op2",
        text: "u'a'"
      },
      {
        id: "algo-t01-b81-op3",
        text: "w'a'"
      },
      {
        id: "algo-t01-b81-op4",
        text: "'a'"
      }
    ],
    correctOptionIds: [
      "algo-t01-b81-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b82",
    subjectId: SubjectId.ALGO,
    text: "Биттік терістеу (Bitwise NOT) операторы қандай символмен жазылады?",
    options: [
      {
        id: "algo-t01-b82-op1",
        text: "~"
      },
      {
        id: "algo-t01-b82-op2",
        text: "!"
      },
      {
        id: "algo-t01-b82-op3",
        text: "^"
      },
      {
        id: "algo-t01-b82-op4",
        text: "&"
      }
    ],
    correctOptionIds: [
      "algo-t01-b82-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b83",
    subjectId: SubjectId.ALGO,
    text: "`~0` (барлық биттері нөлге тең санды биттік терістеу) нәтижесі signed int-те неге тең болады?",
    options: [
      {
        id: "algo-t01-b83-op1",
        text: "-1"
      },
      {
        id: "algo-t01-b83-op2",
        text: "0"
      },
      {
        id: "algo-t01-b83-op3",
        text: "1"
      },
      {
        id: "algo-t01-b83-op4",
        text: "Шексіздік"
      }
    ],
    correctOptionIds: [
      "algo-t01-b83-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b84",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `static_cast<float>(5) / 2` амалының нәтижесі нешеге тең?",
    options: [
      {
        id: "algo-t01-b84-op1",
        text: "2.5"
      },
      {
        id: "algo-t01-b84-op2",
        text: "2"
      },
      {
        id: "algo-t01-b84-op3",
        text: "2.0"
      },
      {
        id: "algo-t01-b84-op4",
        text: "3"
      }
    ],
    correctOptionIds: [
      "algo-t01-b84-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b85",
    subjectId: SubjectId.ALGO,
    text: "`sizeof` операторының нәтижелік типі қандай болады?",
    options: [
      {
        id: "algo-t01-b85-op1",
        text: "size_t (жүйеге байланысты unsigned int немесе unsigned long long)"
      },
      {
        id: "algo-t01-b85-op2",
        text: "int"
      },
      {
        id: "algo-t01-b85-op3",
        text: "double"
      },
      {
        id: "algo-t01-b85-op4",
        text: "void"
      }
    ],
    correctOptionIds: [
      "algo-t01-b85-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b86",
    subjectId: SubjectId.ALGO,
    text: "С++ тіліндегі `volatile` кілтсөзінің негізгі қолданылу аясы қандай?",
    options: [
      {
        id: "algo-t01-b86-op1",
        text: "Драйверлерді, аппараттық порттарды немесе көп ағынды бағдарламаларда ортақ айнымалыларды жариялау кезінде"
      },
      {
        id: "algo-t01-b86-op2",
        text: "Жылдамдықты арттыру үшін тек сандарға қолданылады"
      },
      {
        id: "algo-t01-b86-op3",
        text: "Индекстеуді автоматты реттеу үшін"
      },
      {
        id: "algo-t01-b86-op4",
        text: "Кесте құру кезінде"
      }
    ],
    correctOptionIds: [
      "algo-t01-b86-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t01-b87",
    subjectId: SubjectId.ALGO,
    text: "`std::cout << (5 > 3);` сұранысы экранға не шығарады?",
    options: [
      {
        id: "algo-t01-b87-op1",
        text: "1"
      },
      {
        id: "algo-t01-b87-op2",
        text: "true"
      },
      {
        id: "algo-t01-b87-op3",
        text: "0"
      },
      {
        id: "algo-t01-b87-op4",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "algo-t01-b87-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6aeb7b53-58c2-4939-a92b-21d7a3094b4d",
    subjectId: SubjectId.ALGO,
    text: "Экранға логикалық мәндерді true/false сөздері түрінде шығару үшін қандай манипулятор қолданылады?",
    options: [
      {
        id: "66e26d87-81f5-42f9-acee-da83d5a9d0c5",
        text: "std::boolalpha"
      },
      {
        id: "58df487b-b938-4583-93f9-af907b6e5d80",
        text: "std::fixed"
      },
      {
        id: "b71acd0b-8ecb-4542-ba80-e63146168aa3",
        text: "std::setprecision"
      },
      {
        id: "ad90c9be-62e3-4d72-b4c2-6eff1d9b2260",
        text: "std::bool_text"
      }
    ],
    correctOptionIds: [
      "66e26d87-81f5-42f9-acee-da83d5a9d0c5"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e688cde6-9efd-4e41-a93a-8dc44fd6e8d5",
    subjectId: SubjectId.ALGO,
    text: "`std::cin >> x;` орындалу барысында пайдаланушы енгізген деректің типі айнымалы типіне сәйкес келмесе не орын алады?",
    options: [
      {
        id: "2029cebe-f88c-4ff9-9466-78e1ae23fc83",
        text: "cin ағыны қателік күйіне (fail state) түседі және кейінгі оқу әрекеттері жұмысын тоқтатады"
      },
      {
        id: "45a2b10a-4882-44c5-8ffc-ef664ea4b29f",
        text: "Жүйе автоматты түрде дерек типін түрлендіреді"
      },
      {
        id: "29b76fcf-5439-4d3d-a47b-81b0f612f563",
        text: "Бағдарлама қате шығарып бірден өшеді"
      },
      {
        id: "538118f0-73c1-4cf4-a5c8-42591c6ceb30",
        text: "Элемент автоматты түрде нөл болады"
      }
    ],
    correctOptionIds: [
      "2029cebe-f88c-4ff9-9466-78e1ae23fc83"
    ],
    type: QuestionType.SINGLE,
    topic: "Негізгі процедуралық-бағытталған алгоритмдік тіл",
    difficulty: Difficulty.MEDIUM
  }
];
