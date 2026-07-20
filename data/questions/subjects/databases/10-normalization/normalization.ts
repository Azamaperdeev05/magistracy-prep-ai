import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// db / Нормализация
export const db10NormalizationQuestions : Question[] = [
  {
    id: "db-t10-b01",
    subjectId: SubjectId.DB,
    text: "Кандидат кілт дегеніміз не?",
    options: [
      {
        id: "db-t10-b01-op1",
        text: "Индекс"
      },
      {
        id: "db-t10-b01-op2",
        text: "Жазбаны бірегей анықтай алатын минималды атрибуттар жиыны"
      },
      {
        id: "db-t10-b01-op3",
        text: "Foreign Key"
      },
      {
        id: "db-t10-b01-op4",
        text: "Кез келген атрибут"
      },
      {
        id: "db-t10-b01-op5",
        text: "Толық тәуелділік"
      },
      {
        id: "db-t10-b01-op6",
        text: "X -> Z"
      },
      {
        id: "db-t10-b01-op7",
        text: "Кестелердің санын азайту үшін"
      },
      {
        id: "db-t10-b01-op8",
        text: "Көп мәнді атрибуттар бар"
      }
    ],
    correctOptionIds: [
      "db-t10-b01-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b02",
    subjectId: SubjectId.DB,
    text: "Транзитивті тәуелділік дегеніміз не?",
    options: [
      {
        id: "db-t10-b02-op1",
        text: "Кілтке тәуелділік"
      },
      {
        id: "db-t10-b02-op2",
        text: "Жартылай тәуелділік"
      },
      {
        id: "db-t10-b02-op3",
        text: "Тікелей тәуелділік"
      },
      {
        id: "db-t10-b02-op4",
        text: "A → B, ал B → C болса, A → C"
      },
      {
        id: "db-t10-b02-op5",
        text: "Кестенің ең бірінші бағаны"
      },
      {
        id: "db-t10-b02-op6",
        text: "Армстронг аксиомаларының көмегімен F жиынтығынан шығарылатын барлық функционалдық тәуелділіктер жиыны"
      },
      {
        id: "db-t10-b02-op7",
        text: "Кестелердің санын азайту үшін"
      },
      {
        id: "db-t10-b02-op8",
        text: "Рефлексивтілік (Reflexivity)"
      }
    ],
    correctOptionIds: [
      "db-t10-b02-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b03",
    subjectId: SubjectId.DB,
    text: "4NF қандай тәуелділікті жояды?",
    options: [
      {
        id: "db-t10-b03-op1",
        text: "Транзитивті тәуелділік"
      },
      {
        id: "db-t10-b03-op2",
        text: "Жартылай тәуелділік"
      },
      {
        id: "db-t10-b03-op3",
        text: "Функционалдық тәуелділік"
      },
      {
        id: "db-t10-b03-op4",
        text: "Көп мәнді тәуелділік"
      },
      {
        id: "db-t10-b03-op5",
        text: "Онда ешқандай бастапқы кілт болмаса"
      },
      {
        id: "db-t10-b03-op6",
        text: "Сыртқы атрибуттар"
      },
      {
        id: "db-t10-b03-op7",
        text: "Егер X -> YZ болса, онда X -> Y және X -> Z орындалады"
      },
      {
        id: "db-t10-b03-op8",
        text: "Схема (Schema)"
      }
    ],
    correctOptionIds: [
      "db-t10-b03-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b04",
    subjectId: SubjectId.DB,
    text: "Нормализация дегеніміз не?",
    options: [
      {
        id: "db-t10-b04-op1",
        text: "Артық деректерді азайту процесі"
      },
      {
        id: "db-t10-b04-op2",
        text: "Деректерді сақтау"
      },
      {
        id: "db-t10-b04-op3",
        text: "Деректерді жою"
      },
      {
        id: "db-t10-b04-op4",
        text: "Деректерді шифрлау"
      },
      {
        id: "db-t10-b04-op5",
        text: "Мәндері тек NULL болатын баған"
      },
      {
        id: "db-t10-b04-op6",
        text: "Кестедегі индекстердің жетіспеушілігі"
      },
      {
        id: "db-t10-b04-op7",
        text: "Кестелердің шексіз санын"
      },
      {
        id: "db-t10-b04-op8",
        text: "Оның барлық ұяшықтарында тек скалярлық (атомды) мәндер сақталып, массивтер немесе жиынтықтар болмаса"
      }
    ],
    correctOptionIds: [
      "db-t10-b04-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b05",
    subjectId: SubjectId.DB,
    text: "Жартылай функционалдық тәуелділік дегеніміз не?",
    options: [
      {
        id: "db-t10-b05-op1",
        text: "Атрибут құрама кілттің бір бөлігіне тәуелді"
      },
      {
        id: "db-t10-b05-op2",
        text: "Транзитивті тәуелділік"
      },
      {
        id: "db-t10-b05-op3",
        text: "Атрибут барлық кілтке тәуелді"
      },
      {
        id: "db-t10-b05-op4",
        text: "Кілтсіз тәуелділік"
      },
      {
        id: "db-t10-b05-op5",
        text: "Тегі"
      },
      {
        id: "db-t10-b05-op6",
        text: "Кесте 2NF-те болуы және кілттік емес атрибуттар арасында транзитивті тәуелділік болмауы тиіс"
      },
      {
        id: "db-t10-b05-op7",
        text: "Мүлдем сақталмауы керек"
      },
      {
        id: "db-t10-b05-op8",
        text: "Кестелердің санын азайту үшін"
      }
    ],
    correctOptionIds: [
      "db-t10-b05-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b06",
    subjectId: SubjectId.DB,
    text: "Атомарлы мән дегеніміз не?",
    options: [
      {
        id: "db-t10-b06-op1",
        text: "Көп мәнді атрибут"
      },
      {
        id: "db-t10-b06-op2",
        text: "Бөлуге болатын мән"
      },
      {
        id: "db-t10-b06-op3",
        text: "Бөлуге болмайтын ең қарапайым мән"
      },
      {
        id: "db-t10-b06-op4",
        text: "Күрделі атрибут"
      },
      {
        id: "db-t10-b06-op5",
        text: "Транзитивті тәуелділік"
      },
      {
        id: "db-t10-b06-op6",
        text: "1NF + көп мәнді атрибуттар жоқ"
      },
      {
        id: "db-t10-b06-op7",
        text: "Ең көп қолданылатын сыртқы кілт"
      },
      {
        id: "db-t10-b06-op8",
        text: "Y атрибуты X-тің кез келген бір бөлігіне тәуелді болса"
      }
    ],
    correctOptionIds: [
      "db-t10-b06-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b07",
    subjectId: SubjectId.DB,
    text: "Жаңарту аномалиясы (update anomaly) дегеніміз не?",
    options: [
      {
        id: "db-t10-b07-op1",
        text: "Дерек қосу мүмкін емес"
      },
      {
        id: "db-t10-b07-op2",
        text: "Бір деректі өзгерту үшін көп жерде өзгерту керек"
      },
      {
        id: "db-t10-b07-op3",
        text: "Іздеу баяу"
      },
      {
        id: "db-t10-b07-op4",
        text: "Дерек жою мүмкін емес"
      },
      {
        id: "db-t10-b07-op5",
        text: "Транзитивті тәуелділіктерді жеке кестеге шығару"
      },
      {
        id: "db-t10-b07-op6",
        text: "Деректерді жою"
      },
      {
        id: "db-t10-b07-op7",
        text: "Деректерді шифрлау"
      },
      {
        id: "db-t10-b07-op8",
        text: "Жазбаны бірегей анықтай алатын минималды атрибуттар жиыны"
      }
    ],
    correctOptionIds: [
      "db-t10-b07-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b08",
    subjectId: SubjectId.DB,
    text: "1NF қандай шартты талап етеді?",
    options: [
      {
        id: "db-t10-b08-op1",
        text: "Индекстер болуы керек"
      },
      {
        id: "db-t10-b08-op2",
        text: "Foreign Key болуы керек"
      },
      {
        id: "db-t10-b08-op3",
        text: "Барлық атрибуттар атомарлы болуы керек"
      },
      {
        id: "db-t10-b08-op4",
        text: "Транзакциялар болуы керек"
      },
      {
        id: "db-t10-b08-op5",
        text: "Ешқандай қасиет сақталмайды"
      },
      {
        id: "db-t10-b08-op6",
        text: "Суррогаттық кілт"
      },
      {
        id: "db-t10-b08-op7",
        text: "Деректердің тым көп қайталануын (redundancy) және сәйкессіздікті"
      },
      {
        id: "db-t10-b08-op8",
        text: "Транзитивті қалыпты форма"
      }
    ],
    correctOptionIds: [
      "db-t10-b08-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b09",
    subjectId: SubjectId.DB,
    text: "Кірістіру аномалиясы (insertion anomaly) дегеніміз не?",
    options: [
      {
        id: "db-t10-b09-op1",
        text: "Деректі жою қиын"
      },
      {
        id: "db-t10-b09-op2",
        text: "Деректі жаңарту қиын"
      },
      {
        id: "db-t10-b09-op3",
        text: "Іздеу қиын"
      },
      {
        id: "db-t10-b09-op4",
        text: "Қосымша ақпаратсыз жаңа дерек қосу мүмкін емес"
      },
      {
        id: "db-t10-b09-op5",
        text: "X ~> Y"
      },
      {
        id: "db-t10-b09-op6",
        text: "SQL сұраныстарының санын көбейту"
      },
      {
        id: "db-t10-b09-op7",
        text: "Y мәні X-ке функционалды тәуелді"
      },
      {
        id: "db-t10-b09-op8",
        text: "Кестеде сыртқы кілттің болуы"
      }
    ],
    correctOptionIds: [
      "db-t10-b09-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b10",
    subjectId: SubjectId.DB,
    text: "3NF шарты қандай?",
    options: [
      {
        id: "db-t10-b10-op1",
        text: "Атомарлы мәндер"
      },
      {
        id: "db-t10-b10-op2",
        text: "BCNF"
      },
      {
        id: "db-t10-b10-op3",
        text: "Жартылай тәуелділік жоқ"
      },
      {
        id: "db-t10-b10-op4",
        text: "2NF + транзитивті тәуелділік жоқ"
      },
      {
        id: "db-t10-b10-op5",
        text: "Біріншілік емес атрибут"
      },
      {
        id: "db-t10-b10-op6",
        text: "Әрбір детерминант кандидат кілт болуы керек"
      },
      {
        id: "db-t10-b10-op7",
        text: "Көп мәнді тәуелділік"
      },
      {
        id: "db-t10-b10-op8",
        text: "Кестелерді біріктіргенде сұраныс уақытының жоғалмауын"
      }
    ],
    correctOptionIds: [
      "db-t10-b10-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b11",
    subjectId: SubjectId.DB,
    text: "Денормализация не үшін қолданылады?",
    options: [
      {
        id: "db-t10-b11-op1",
        text: "Деректерді жою"
      },
      {
        id: "db-t10-b11-op2",
        text: "Қауіпсіздікті арттыру"
      },
      {
        id: "db-t10-b11-op3",
        text: "Кестелерді бөлу"
      },
      {
        id: "db-t10-b11-op4",
        text: "Өнімділікті арттыру үшін"
      },
      {
        id: "db-t10-b11-op5",
        text: "Кестеге бір уақытта екі жол қоса алмау қатесі"
      },
      {
        id: "db-t10-b11-op6",
        text: "Y тек бірегей мәндерді қамтыса"
      },
      {
        id: "db-t10-b11-op7",
        text: "Қатынас (Relation)"
      },
      {
        id: "db-t10-b11-op8",
        text: "X бойынша сұрыптау"
      }
    ],
    correctOptionIds: [
      "db-t10-b11-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b12",
    subjectId: SubjectId.DB,
    text: "Суперкілт дегеніміз не?",
    options: [
      {
        id: "db-t10-b12-op1",
        text: "Жазбаны бірегей анықтайтын кез келген атрибуттар жиыны"
      },
      {
        id: "db-t10-b12-op2",
        text: "Атомарлы атрибут"
      },
      {
        id: "db-t10-b12-op3",
        text: "Foreign Key"
      },
      {
        id: "db-t10-b12-op4",
        text: "Минималды кілт"
      },
      {
        id: "db-t10-b12-op5",
        text: "Егер кестеде бірнеше қиылысатын құрама кандидаттық кілттер болса"
      },
      {
        id: "db-t10-b12-op6",
        text: "Іздеу баяу"
      },
      {
        id: "db-t10-b12-op7",
        text: "1NF + көп мәнді атрибуттар жоқ"
      },
      {
        id: "db-t10-b12-op8",
        text: "Кестеден бір деректі жойған кезде оған тәуелсіз басқа да маңызды ақпараттың қоса жойылып кетуі"
      }
    ],
    correctOptionIds: [
      "db-t10-b12-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b13",
    subjectId: SubjectId.DB,
    text: "Жою аномалиясы (deletion anomaly) дегеніміз не?",
    options: [
      {
        id: "db-t10-b13-op1",
        text: "Іздеу нәтижесі қате"
      },
      {
        id: "db-t10-b13-op2",
        text: "Дерек жою кезінде қажетті ақпарат жоғалады"
      },
      {
        id: "db-t10-b13-op3",
        text: "Дерек жаңарту қиын"
      },
      {
        id: "db-t10-b13-op4",
        text: "Дерек қосу қиын"
      },
      {
        id: "db-t10-b13-op5",
        text: "Бейтривиалды тәуелділік"
      },
      {
        id: "db-t10-b13-op6",
        text: "Сыртқы кілттің мәнін өзгерте алмау"
      },
      {
        id: "db-t10-b13-op7",
        text: "Көп мәнді атрибуттар бар"
      },
      {
        id: "db-t10-b13-op8",
        text: "Функционалдық тәуелділік"
      }
    ],
    correctOptionIds: [
      "db-t10-b13-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b14",
    subjectId: SubjectId.DB,
    text: "BCNF (Бойс-Кодд) формасының ерекшелігі не?",
    options: [
      {
        id: "db-t10-b14-op1",
        text: "Көп мәнді атрибуттар бар"
      },
      {
        id: "db-t10-b14-op2",
        text: "Транзитивті тәуелділік бар"
      },
      {
        id: "db-t10-b14-op3",
        text: "Әрбір детерминант кандидат кілт болуы керек"
      },
      {
        id: "db-t10-b14-op4",
        text: "Тек атомарлы мәндер"
      },
      {
        id: "db-t10-b14-op5",
        text: "Кесте құрылымын жоюды білдіреді"
      },
      {
        id: "db-t10-b14-op6",
        text: "Кілтке тәуелділік"
      },
      {
        id: "db-t10-b14-op7",
        text: "Аты"
      },
      {
        id: "db-t10-b14-op8",
        text: "В бастапқы кілт болып табылады"
      }
    ],
    correctOptionIds: [
      "db-t10-b14-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b15",
    subjectId: SubjectId.DB,
    text: "Денормализацияның кемшілігі не?",
    options: [
      {
        id: "db-t10-b15-op1",
        text: "Кестелер азаяды"
      },
      {
        id: "db-t10-b15-op2",
        text: "Жылдамдық артады"
      },
      {
        id: "db-t10-b15-op3",
        text: "Артық деректер мен аномалиялар пайда болады"
      },
      {
        id: "db-t10-b15-op4",
        text: "Индекс қажет емес"
      },
      {
        id: "db-t10-b15-op5",
        text: "Кестелерді ыдыратуға (decomposition)"
      },
      {
        id: "db-t10-b15-op6",
        text: "Жазбаны бірегей анықтай алатын минималды атрибуттар жиыны"
      },
      {
        id: "db-t10-b15-op7",
        text: "Ішінара тәуелділік"
      },
      {
        id: "db-t10-b15-op8",
        text: "Транзитивті тәуелділіктердің болуы"
      }
    ],
    correctOptionIds: [
      "db-t10-b15-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b16",
    subjectId: SubjectId.DB,
    text: "X → Y жазуы нені білдіреді?",
    options: [
      {
        id: "db-t10-b16-op1",
        text: "X Y-ға тең емес"
      },
      {
        id: "db-t10-b16-op2",
        text: "X бойынша сұрыптау"
      },
      {
        id: "db-t10-b16-op3",
        text: "Y мәні X-ке функционалды тәуелді"
      },
      {
        id: "db-t10-b16-op4",
        text: "X пен Y тәуелсіз"
      },
      {
        id: "db-t10-b16-op5",
        text: "Кестелерді бөлу"
      },
      {
        id: "db-t10-b16-op6",
        text: "Кестеде сыртқы кілт мүлдем болмауы тиіс"
      },
      {
        id: "db-t10-b16-op7",
        text: "Кестенің ең бірінші бағаны"
      },
      {
        id: "db-t10-b16-op8",
        text: "Y атрибуты X-ке тәуелді болып, бірақ X-тің ешқандай ішкі жиынына тәуелді болмаса"
      }
    ],
    correctOptionIds: [
      "db-t10-b16-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b17",
    subjectId: SubjectId.DB,
    text: "2NF шарты қандай?",
    options: [
      {
        id: "db-t10-b17-op1",
        text: "BCNF + атомарлы мәндер"
      },
      {
        id: "db-t10-b17-op2",
        text: "1NF + жартылай функционалдық тәуелділік жоқ"
      },
      {
        id: "db-t10-b17-op3",
        text: "1NF + көп мәнді атрибуттар жоқ"
      },
      {
        id: "db-t10-b17-op4",
        text: "Транзитивті тәуелділік жоқ"
      },
      {
        id: "db-t10-b17-op5",
        text: "А-ның әрбір мәніне В-ның тек бір ғана мәні сәйкес келеді"
      },
      {
        id: "db-t10-b17-op6",
        text: "Әрбір детерминант кандидат кілт болуы керек"
      },
      {
        id: "db-t10-b17-op7",
        text: "X-тің бір мәніне Y-тің тек бір ғана мәні сәйкес келеді"
      },
      {
        id: "db-t10-b17-op8",
        text: "Сыртқы кілттің орындалуын тексеру үшін"
      }
    ],
    correctOptionIds: [
      "db-t10-b17-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b18",
    subjectId: SubjectId.DB,
    text: "Нормализацияның негізгі мақсаты не?",
    options: [
      {
        id: "db-t10-b18-op1",
        text: "Сұраныс жылдамдығын арттыру"
      },
      {
        id: "db-t10-b18-op2",
        text: "Артық деректер мен аномалияларды азайту"
      },
      {
        id: "db-t10-b18-op3",
        text: "Деректерді шифрлау"
      },
      {
        id: "db-t10-b18-op4",
        text: "Кестелерді көбейту"
      },
      {
        id: "db-t10-b18-op5",
        text: "Кестеде сыртқы кілт мүлдем болмауы тиіс"
      },
      {
        id: "db-t10-b18-op6",
        text: "Домендік-кілттік қалыпты форма (DKNF)"
      },
      {
        id: "db-t10-b18-op7",
        text: "X Y-ға тең емес"
      },
      {
        id: "db-t10-b18-op8",
        text: "Деректі жаңарту қиын"
      }
    ],
    correctOptionIds: [
      "db-t10-b18-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b19",
    subjectId: SubjectId.DB,
    text: "1NF-ті бұзатын мысал қандай?",
    options: [
      {
        id: "db-t10-b19-op1",
        text: "Foreign Key бар"
      },
      {
        id: "db-t10-b19-op2",
        text: "Әр ұяшықта бір мән"
      },
      {
        id: "db-t10-b19-op3",
        text: "Primary Key бар"
      },
      {
        id: "db-t10-b19-op4",
        text: "Бір ұяшықта бірнеше телефон нөмірі"
      },
      {
        id: "db-t10-b19-op5",
        text: "Атомарлы мәндер"
      },
      {
        id: "db-t10-b19-op6",
        text: "Рефлексивтілік (Reflexivity)"
      },
      {
        id: "db-t10-b19-op7",
        text: "Тек сандық кестелерде ғана сақталады"
      },
      {
        id: "db-t10-b19-op8",
        text: "Питер Чен"
      }
    ],
    correctOptionIds: [
      "db-t10-b19-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b20",
    subjectId: SubjectId.DB,
    text: "3NF (Үшінші қалыпты форма) шарты қандай?",
    options: [
      {
        id: "db-t10-b20-op1",
        text: "Кесте 2NF-те болуы және кілттік емес атрибуттар арасында транзитивті тәуелділік болмауы тиіс"
      },
      {
        id: "db-t10-b20-op2",
        text: "Кесте 1NF-те болуы керек"
      },
      {
        id: "db-t10-b20-op3",
        text: "Кестеде тек бір баған болуы тиіс"
      },
      {
        id: "db-t10-b20-op4",
        text: "Көпмәнді тәуелділіктердің болмауы"
      },
      {
        id: "db-t10-b20-op5",
        text: "Жаңа дерекқорды алғаш рет жобалағанда"
      },
      {
        id: "db-t10-b20-op6",
        text: "Атрибут (Attribute)"
      },
      {
        id: "db-t10-b20-op7",
        text: "X бойынша сұрыптау"
      },
      {
        id: "db-t10-b20-op8",
        text: "X ~> Y"
      }
    ],
    correctOptionIds: [
      "db-t10-b20-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b21",
    subjectId: SubjectId.DB,
    text: "Кестенің Бірінші қалыпты формада (1NF) болуының негізгі шарты қандай?",
    options: [
      {
        id: "db-t10-b21-op1",
        text: "Барлық атрибуттардың мәндері атомарлы (бөлінбейтін) болуы және қайталанатын топтардың болмауы"
      },
      {
        id: "db-t10-b21-op2",
        text: "Кестеде сыртқы кілттің болуы"
      },
      {
        id: "db-t10-b21-op3",
        text: "Транзитивті тәуелділіктердің болмауы"
      },
      {
        id: "db-t10-b21-op4",
        text: "Кестенің 2NF-те болуы"
      },
      {
        id: "db-t10-b21-op5",
        text: "XZ -> Y"
      },
      {
        id: "db-t10-b21-op6",
        text: "Ешқандай қалыпты формаға жатпайды"
      },
      {
        id: "db-t10-b21-op7",
        text: "4NF"
      },
      {
        id: "db-t10-b21-op8",
        text: "Барлық суперкілттер кандидаттық кілт болады"
      }
    ],
    correctOptionIds: [
      "db-t10-b21-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b22",
    subjectId: SubjectId.DB,
    text: "Екінші қалыпты форманың (2NF) басты шарты қандай?",
    options: [
      {
        id: "db-t10-b22-op1",
        text: "Кесте 1NF-те болуы және кез келген кілттік емес атрибут бастапқы кілтке (әсіресе құрама кілтке) толық функционалды тәуелді болуы тиіс (ішінара тәуелділік болмауы керек)"
      },
      {
        id: "db-t10-b22-op2",
        text: "Кестеде тек бірегей индекстер болуы керек"
      },
      {
        id: "db-t10-b22-op3",
        text: "Транзитивті тәуелділіктердің болуы"
      },
      {
        id: "db-t10-b22-op4",
        text: "Атрибуттардың тек сандық болуы"
      },
      {
        id: "db-t10-b22-op5",
        text: "Егер X -> Y болса, онда Y -> X орындалады"
      },
      {
        id: "db-t10-b22-op6",
        text: "Физикалық жобалау кезеңінде"
      },
      {
        id: "db-t10-b22-op7",
        text: "Сыртқы кілт (Foreign Key)"
      },
      {
        id: "db-t10-b22-op8",
        text: "Индекстерді жылдам оқу үшін"
      }
    ],
    correctOptionIds: [
      "db-t10-b22-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b23",
    subjectId: SubjectId.DB,
    text: "Бойс-Кодд қалыпты формасы (BCNF) үшін қандай шарт орындалуы керек?",
    options: [
      {
        id: "db-t10-b23-op1",
        text: "Кесте 3NF-те болуы және кез келген функционалды тәуелділікте (X -> Y) X анықтаушысы суперкілт болуы тиіс"
      },
      {
        id: "db-t10-b23-op2",
        text: "Кестеде сыртқы кілт мүлдем болмауы тиіс"
      },
      {
        id: "db-t10-b23-op3",
        text: "Кесте 4NF-те болуы керек"
      },
      {
        id: "db-t10-b23-op4",
        text: "Тек скалярлық мәндер сақталуы тиіс"
      },
      {
        id: "db-t10-b23-op5",
        text: "Атрибут құрама кілттің бір бөлігіне тәуелді"
      },
      {
        id: "db-t10-b23-op6",
        text: "Шексіз көп"
      },
      {
        id: "db-t10-b23-op7",
        text: "Функционалдық тәуелділіктердің санын көбейту үшін"
      },
      {
        id: "db-t10-b23-op8",
        text: "Деректерді сақтау"
      }
    ],
    correctOptionIds: [
      "db-t10-b23-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f39ab5e6-dde1-4519-ba3c-a8b1ce7fbd2d",
    subjectId: SubjectId.DB,
    text: "Кестеде кілттік емес Y атрибуты кілттік емес X атрибутына тәуелді, ал X өз кезегінде бастапқы кілтке тәуелді болса, бұл қандай тәуелділік?",
    options: [
      {
        id: "09cf8690-4e12-4ae8-8d0f-1a51a4b1bb91",
        text: "Транзитивті тәуелділік (Transitive Dependency)"
      },
      {
        id: "50428135-1307-4e67-9326-dcc18ce15251",
        text: "Толық функционалды тәуелділік"
      },
      {
        id: "0c55f010-652e-435b-854d-91c7f8285660",
        text: "Ішінара тәуелділік"
      },
      {
        id: "4a58f643-b6a3-41df-958b-b6630e94ef02",
        text: "Көпмәнді тәуелділік"
      },
      {
        id: "c5d67851-ab79-4b95-80aa-6748777b1802",
        text: "Барлық атрибуттардың мәндері атомарлы (бөлінбейтін) болуы және қайталанатын топтардың болмауы"
      },
      {
        id: "3056c25b-389f-4f4a-8f2a-3b4698ae5c91",
        text: "Транзитивті тәуелділіктердің болмауы"
      },
      {
        id: "88ca5c21-2994-4f79-9acf-22b32507d2cf",
        text: "Деректерді шифрлау"
      },
      {
        id: "0da2fdfd-871b-4098-906d-35958ee022a5",
        text: "Ыдырату (Decomposition)"
      }
    ],
    correctOptionIds: [
      "09cf8690-4e12-4ae8-8d0f-1a51a4b1bb91"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b24",
    subjectId: SubjectId.DB,
    text: "Төртінші қалыпты формада (4NF) қандай тәуелділік түрі жойылады?",
    options: [
      {
        id: "db-t10-b24-op1",
        text: "Көпмәнді тәуелділіктер (Multivalued Dependencies)"
      },
      {
        id: "db-t10-b24-op2",
        text: "Транзитивті тәуелділіктер"
      },
      {
        id: "db-t10-b24-op3",
        text: "Ішінара функционалды тәуелділіктер"
      },
      {
        id: "db-t10-b24-op4",
        text: "Қосылу тәуелділіктері"
      },
      {
        id: "db-t10-b24-op5",
        text: "Декарт ережелеріне"
      },
      {
        id: "db-t10-b24-op6",
        text: "Кестедеге жазбаны бірегей анықтай алатын атрибут немесе атрибуттар жиынтығы (бірақ минималды болуы міндетті емес)"
      },
      {
        id: "db-t10-b24-op7",
        text: "Армстронг аксиомаларының көмегімен F жиынтығынан шығарылатын барлық функционалдық тәуелділіктер жиыны"
      },
      {
        id: "db-t10-b24-op8",
        text: "Көпмәнді тәуелділіктерді (multivalued dependencies) жою"
      }
    ],
    correctOptionIds: [
      "db-t10-b24-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b25",
    subjectId: SubjectId.DB,
    text: "Бесінші қалыпты форманың (5NF / PJNF) негізгі мақсаты не?",
    options: [
      {
        id: "db-t10-b25-op1",
        text: "Деректерді жоғалтпай біріктіру (Join Dependency) тәуелділіктерін реттеу және артықшылықтарды жою"
      },
      {
        id: "db-t10-b25-op2",
        text: "Транзитивті тәуелділікті жою"
      },
      {
        id: "db-t10-b25-op3",
        text: "Көпмәнді атрибуттарды атомарлы ету"
      },
      {
        id: "db-t10-b25-op4",
        text: "Кестедегі индекстерді азайту"
      },
      {
        id: "db-t10-b25-op5",
        text: "Жоқ, BCNF-те кейде функционалдық тәуелділікті сақтау мүмкін болмайды (trade-off)"
      },
      {
        id: "db-t10-b25-op6",
        text: "Деректердің физикалық өлшемінің тым үлкен болып кетуі"
      },
      {
        id: "db-t10-b25-op7",
        text: "Бастапқы кілттің бөлігіне ғана тәуелді атрибуттарды (жартылай тәуелділіктерді) жеке кестеге шығару"
      },
      {
        id: "db-t10-b25-op8",
        text: "Проекциялық-біріктіру қалыпты формасы (PJNF), біріктіру тәуелділігіне (join dependency) негізделген"
      }
    ],
    correctOptionIds: [
      "db-t10-b25-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b26",
    subjectId: SubjectId.DB,
    text: "Нормализациялау процесінің негізгі кемшілігі қандай болуы мүмкін?",
    options: [
      {
        id: "db-t10-b26-op1",
        text: "Кестелер санының көбеюіне байланысты JOIN амалдары жиілеп, кейбір оқу сұраныстарының баяулауы"
      },
      {
        id: "db-t10-b26-op2",
        text: "Дерекқордағы қателердің жиілеуі"
      },
      {
        id: "db-t10-b26-op3",
        text: "Деректердің тұтастығын бақылаудың қиындауы"
      },
      {
        id: "db-t10-b26-op4",
        text: "Деректердің физикалық өлшемінің тым үлкен болып кетуі"
      },
      {
        id: "db-t10-b26-op5",
        text: "Артық деректер мен аномалияларды азайту"
      },
      {
        id: "db-t10-b26-op6",
        text: "Әрбір детерминант кандидат кілт болуы керек"
      },
      {
        id: "db-t10-b26-op7",
        text: "Деректерді сақтау"
      },
      {
        id: "db-t10-b26-op8",
        text: "BCNF + атомарлы мәндер"
      }
    ],
    correctOptionIds: [
      "db-t10-b26-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d3151285-9623-48be-ba9b-5f9fad240805",
    subjectId: SubjectId.DB,
    text: "Егер кестеде бастапқы кілт жай (бір ғана бағаннан тұратын) кілт болса, онда 1NF-тегі бұл кесте автоматты түрде қай қалыпты формаға сәйкес келеді?",
    options: [
      {
        id: "b2cabc1c-8fa8-4d1a-afde-8e41200c3bbc",
        text: "2NF-ке (себебі ішінара тәуелділік болуы мүмкін емес)"
      },
      {
        id: "9bbe4bdc-5ba6-4dc6-af7f-d99ee380d2fd",
        text: "3NF-ке"
      },
      {
        id: "67ebfdb7-5104-4d89-96a1-722e3a358a8a",
        text: "BCNF-ке"
      },
      {
        id: "5fed8b6a-4a70-43f0-9eb8-c7eb67e22dae",
        text: "Ешқандай қалыпты формаға жатпайды"
      },
      {
        id: "d096fc3d-4664-440a-afb3-4c9035fa7e07",
        text: "Дерекқордың оңтайлы жұмыс істейтінін"
      },
      {
        id: "c8cc9467-7af4-4b48-b92a-acf5f90dd1d1",
        text: "Кестеде тек INNER JOIN қолданылса"
      },
      {
        id: "b1e796d0-2147-47c1-81d0-dcc2ea5cd1b9",
        text: "Дерек қосу мүмкін емес"
      },
      {
        id: "4ceb3650-81ae-4e4d-b835-1816ccbc2e1c",
        text: "Бастапқы кілтке сілтеме жасайтын атрибут"
      }
    ],
    correctOptionIds: [
      "b2cabc1c-8fa8-4d1a-afde-8e41200c3bbc"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b27",
    subjectId: SubjectId.DB,
    text: "1NF-тің басты талабы қандай?",
    options: [
      {
        id: "db-t10-b27-op1",
        text: "Барлық атрибуттардың мәндері атомды (бөлінбейтін) болуы тиіс"
      },
      {
        id: "db-t10-b27-op2",
        text: "Кестеде сыртқы кілттер (FK) болмауы тиіс"
      },
      {
        id: "db-t10-b27-op3",
        text: "Транзитивті тәуелділіктер болмауы тиіс"
      },
      {
        id: "db-t10-b27-op4",
        text: "Кестеде тек бірегей индекстер болуы тиіс"
      },
      {
        id: "db-t10-b27-op5",
        text: "Тек скалярлық мәндер сақталуы тиіс"
      },
      {
        id: "db-t10-b27-op6",
        text: "Индексі бар кез келген кесте"
      },
      {
        id: "db-t10-b27-op7",
        text: "Деректерді жоғалтпай біріктіру (Join Dependency) тәуелділіктерін реттеу және артықшылықтарды жою"
      },
      {
        id: "db-t10-b27-op8",
        text: "Аксиомалардың қатесіз жазылуын"
      }
    ],
    correctOptionIds: [
      "db-t10-b27-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b28",
    subjectId: SubjectId.DB,
    text: "2NF-тің басты ережесі қандай?",
    options: [
      {
        id: "db-t10-b28-op1",
        text: "Кесте 1NF-те болуы және кез келген кілттік емес атрибут бастапқы немесе кандидаттық кілтке толықтай тәуелді болуы тиіс (жартылай тәуелділікті жою)"
      },
      {
        id: "db-t10-b28-op2",
        text: "Транзитивті тәуелділіктерді толығымен жою"
      },
      {
        id: "db-t10-b28-op3",
        text: "Көпмәнді тәуелділіктерді жою"
      },
      {
        id: "db-t10-b28-op4",
        text: "Кестеде тек бір ғана баған болуы"
      },
      {
        id: "db-t10-b28-op5",
        text: "SQL сұраныстарының санын көбейту"
      },
      {
        id: "db-t10-b28-op6",
        text: "Минималды кілт"
      },
      {
        id: "db-t10-b28-op7",
        text: "Жазбаны бірегей анықтай алатын минималды атрибуттар жиыны"
      },
      {
        id: "db-t10-b28-op8",
        text: "X-тің бір мәніне Y-тің бірнеше тәуелсіз мәндер жиыны сәйкес келеді және олар үшінші Z атрибутына тәуелсіз сақталады"
      }
    ],
    correctOptionIds: [
      "db-t10-b28-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b29",
    subjectId: SubjectId.DB,
    text: "3NF-тің анықтамасына сәйкес келетін шарт қандай?",
    options: [
      {
        id: "db-t10-b29-op1",
        text: "Кесте 2NF-те болуы және кілттік емес атрибуттардың арасында транзитивті тәуелділік болмауы тиіс"
      },
      {
        id: "db-t10-b29-op2",
        text: "Кесте тек 1NF-те болуы тиіс"
      },
      {
        id: "db-t10-b29-op3",
        text: "Көпмәнді тәуелділіктер жойылуы тиіс"
      },
      {
        id: "db-t10-b29-op4",
        text: "Кандидаттық кілттер мүлдем болмауы тиіс"
      },
      {
        id: "db-t10-b29-op5",
        text: "Иә, бірақ бастапқы кілт тек біреу ғана болады"
      },
      {
        id: "db-t10-b29-op6",
        text: "Сызықтық ыдырату"
      },
      {
        id: "db-t10-b29-op7",
        text: "Кесте 1NF-те болуы және кез келген кілттік емес атрибут бастапқы немесе кандидаттық кілтке толықтай тәуелді болуы тиіс (жартылай тәуелділікті жою)"
      },
      {
        id: "db-t10-b29-op8",
        text: "Қосымша ақпаратсыз жаңа дерек қосу мүмкін емес"
      }
    ],
    correctOptionIds: [
      "db-t10-b29-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b30",
    subjectId: SubjectId.DB,
    text: "Boyce-Codd қалыпты формасы (BCNF) үшін қандай шарт орындалуы керек?",
    options: [
      {
        id: "db-t10-b30-op1",
        text: "Кез келген бейтривиалды X -> Y функционалдық тәуелділігі үшін X міндетті түрде суперкілт (superkey) болуы тиіс"
      },
      {
        id: "db-t10-b30-op2",
        text: "Бастапқы кілт тек суррогаттық кілт болуы керек"
      },
      {
        id: "db-t10-b30-op3",
        text: "Кестеде тек 1:1 байланыстары болуы тиіс"
      },
      {
        id: "db-t10-b30-op4",
        text: "Транзитивті тәуелділіктер ғана рұқсат етіледі"
      },
      {
        id: "db-t10-b30-op5",
        text: "Егер кестеде транзитивті тәуелділік болса"
      },
      {
        id: "db-t10-b30-op6",
        text: "Домендік-кілттік қалыпты форма (DKNF)"
      },
      {
        id: "db-t10-b30-op7",
        text: "Күрделі атрибут"
      },
      {
        id: "db-t10-b30-op8",
        text: "Бастапқы кілт болып табылатын ең кіші баған"
      }
    ],
    correctOptionIds: [
      "db-t10-b30-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b31",
    subjectId: SubjectId.DB,
    text: "4NF-тің негізгі мақсаты қандай?",
    options: [
      {
        id: "db-t10-b31-op1",
        text: "Көпмәнді тәуелділіктерді (multivalued dependencies) жою"
      },
      {
        id: "db-t10-b31-op2",
        text: "Транзитивті тәуелділіктерді жою"
      },
      {
        id: "db-t10-b31-op3",
        text: "Жартылай тәуелділіктерді жою"
      },
      {
        id: "db-t10-b31-op4",
        text: "Біріктіру тәуелділіктерін (join dependency) шешу"
      },
      {
        id: "db-t10-b31-op5",
        text: "Тікелей тәуелділік"
      },
      {
        id: "db-t10-b31-op6",
        text: "Дерекқордың физикалық қауіпсіздігінің нашарлауы"
      },
      {
        id: "db-t10-b31-op7",
        text: "Транзитивті қалыпты форма"
      },
      {
        id: "db-t10-b31-op8",
        text: "Кестелер санының көбеюіне байланысты JOIN амалдары жиілеп, кейбір оқу сұраныстарының баяулауы"
      }
    ],
    correctOptionIds: [
      "db-t10-b31-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b32",
    subjectId: SubjectId.DB,
    text: "5NF-тің басқаша атауы қандай және ол неге негізделген?",
    options: [
      {
        id: "db-t10-b32-op1",
        text: "Проекциялық-біріктіру қалыпты формасы (PJNF), біріктіру тәуелділігіне (join dependency) негізделген"
      },
      {
        id: "db-t10-b32-op2",
        text: "Бойс-Кодд қалыпты формасы, суперкілтке негізделген"
      },
      {
        id: "db-t10-b32-op3",
        text: "Домендік-кілттік қалыпты форма (DKNF)"
      },
      {
        id: "db-t10-b32-op4",
        text: "Транзитивті қалыпты форма"
      },
      {
        id: "db-t10-b32-op5",
        text: "X пен Y жиындарының ортақ элементі мүлдем болмаса (X ∩ Y = ∅)"
      },
      {
        id: "db-t10-b32-op6",
        text: "JOIN операторларының көбеюіне байланысты күрделі оқу сұраныстарының баяулауы"
      },
      {
        id: "db-t10-b32-op7",
        text: "Транзитивті тәуелділіктер болмауы тиіс"
      },
      {
        id: "db-t10-b32-op8",
        text: "Әрбір детерминант кандидат кілт болуы керек"
      }
    ],
    correctOptionIds: [
      "db-t10-b32-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b33",
    subjectId: SubjectId.DB,
    text: "Армстронг аксиомаларындағы Рефлексивтілік (Reflexivity) ережесі нені білдіреді?",
    options: [
      {
        id: "db-t10-b33-op1",
        text: "Егер Y жиыны X жиынының ішкі жиыны болса, онда X -> Y орындалады"
      },
      {
        id: "db-t10-b33-op2",
        text: "Егер X -> Y болса, онда XZ -> YZ орындалады"
      },
      {
        id: "db-t10-b33-op3",
        text: "Егер X -> Y және Y -> Z болса, онда X -> Z орындалады"
      },
      {
        id: "db-t10-b33-op4",
        text: "Егер X -> Y болса, онда Y -> X орындалады"
      },
      {
        id: "db-t10-b33-op5",
        text: "Алан Тьюринг"
      },
      {
        id: "db-t10-b33-op6",
        text: "А-ның әрбір мәніне В-ның тек бір ғана мәні сәйкес келеді"
      },
      {
        id: "db-t10-b33-op7",
        text: "Кортеж (Tuple)"
      },
      {
        id: "db-t10-b33-op8",
        text: "Foreign Key болуы керек"
      }
    ],
    correctOptionIds: [
      "db-t10-b33-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b34",
    subjectId: SubjectId.DB,
    text: "Армстронг аксиомаларындағы Өсіру (Augmentation) ережесі нені білдіреді?",
    options: [
      {
        id: "db-t10-b34-op1",
        text: "Егер X -> Y болса, онда кез келген Z үшін XZ -> YZ орындалады"
      },
      {
        id: "db-t10-b34-op2",
        text: "Егер Y ⊆ X болса, онда X -> Y орындалады"
      },
      {
        id: "db-t10-b34-op3",
        text: "Егер X -> Y және Y -> Z болса, онда X -> Z орындалады"
      },
      {
        id: "db-t10-b34-op4",
        text: "Баған мәндерінің автоматты түрде өсуі"
      },
      {
        id: "db-t10-b34-op5",
        text: "Егер кестеде бірнеше қиылысатын құрама кандидаттық кілттер болса"
      },
      {
        id: "db-t10-b34-op6",
        text: "Көпмәнді тәуелділіктер (Multivalued Dependencies)"
      },
      {
        id: "db-t10-b34-op7",
        text: "Ешқандай қасиет сақталмайды"
      },
      {
        id: "db-t10-b34-op8",
        text: "1NF + жартылай функционалдық тәуелділік жоқ"
      }
    ],
    correctOptionIds: [
      "db-t10-b34-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b35",
    subjectId: SubjectId.DB,
    text: "Армстронг аксиомаларындағы Транзитивтілік (Transitivity) ережесі нені білдіреді?",
    options: [
      {
        id: "db-t10-b35-op1",
        text: "Егер X -> Y және Y -> Z болса, онда X -> Z орындалады"
      },
      {
        id: "db-t10-b35-op2",
        text: "Егер Y ⊆ X болса, онда X -> Y орындалады"
      },
      {
        id: "db-t10-b35-op3",
        text: "Егер X -> Y болса, онда XZ -> YZ орындалады"
      },
      {
        id: "db-t10-b35-op4",
        text: "Көпмәнді тәуелділіктің орындалуын білдіреді"
      },
      {
        id: "db-t10-b35-op5",
        text: "Кестеде тек бірегей индекстер болуы керек"
      },
      {
        id: "db-t10-b35-op6",
        text: "Суррогаттық кілт"
      },
      {
        id: "db-t10-b35-op7",
        text: "Күрделі атрибут"
      },
      {
        id: "db-t10-b35-op8",
        text: "Индексті өшіру кезіндегі сәтсіздік"
      }
    ],
    correctOptionIds: [
      "db-t10-b35-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b36",
    subjectId: SubjectId.DB,
    text: "Армстронг ережелерінен туындайтын Біріктіру (Union) ережесі қандай?",
    options: [
      {
        id: "db-t10-b36-op1",
        text: "Егер X -> Y және X -> Z болса, онда X -> YZ орындалады"
      },
      {
        id: "db-t10-b36-op2",
        text: "Егер X -> YZ болса, онда X -> Y және X -> Z орындалады"
      },
      {
        id: "db-t10-b36-op3",
        text: "Егер X -> Y және WY -> Z болса, онда WX -> Z орындалады"
      },
      {
        id: "db-t10-b36-op4",
        text: "Екі кестенің жолдарын біріктіруді білдіреді"
      },
      {
        id: "db-t10-b36-op5",
        text: "Кілтке тәуелділік"
      },
      {
        id: "db-t10-b36-op6",
        text: "Көпмәнді тәуелділік"
      },
      {
        id: "db-t10-b36-op7",
        text: "Кесте 1NF-те болуы және кез келген кілттік емес атрибут бастапқы кілтке (әсіресе құрама кілтке) толық функционалды тәуелді болуы тиіс (ішінара тәуелділік болмауы керек)"
      },
      {
        id: "db-t10-b36-op8",
        text: "A → B, ал B → C болса, A → C"
      }
    ],
    correctOptionIds: [
      "db-t10-b36-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b37",
    subjectId: SubjectId.DB,
    text: "Армстронг ережелерінен туындайтын Ыдырату (Decomposition) ережесі қандай?",
    options: [
      {
        id: "db-t10-b37-op1",
        text: "Егер X -> YZ болса, онда X -> Y және X -> Z орындалады"
      },
      {
        id: "db-t10-b37-op2",
        text: "Егер X -> Y және X -> Z болса, онда X -> YZ орындалады"
      },
      {
        id: "db-t10-b37-op3",
        text: "Егер Y ⊆ X болса, онда X -> Y орындалады"
      },
      {
        id: "db-t10-b37-op4",
        text: "Кесте құрылымын жоюды білдіреді"
      },
      {
        id: "db-t10-b37-op5",
        text: "Ешқандай қасиет сақталмайды"
      },
      {
        id: "db-t10-b37-op6",
        text: "А және В мәндері әрқашан тең болады"
      },
      {
        id: "db-t10-b37-op7",
        text: "(A, B) және (B, C) кестелеріне бөлу арқылы"
      },
      {
        id: "db-t10-b37-op8",
        text: "Бөлуге болатын мән"
      }
    ],
    correctOptionIds: [
      "db-t10-b37-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b38",
    subjectId: SubjectId.DB,
    text: "Армстронг ережелерінен туындайтын Псевдотранзитивтілік (Pseudotransitivity) ережесі қандай?",
    options: [
      {
        id: "db-t10-b38-op1",
        text: "Егер X -> Y және WY -> Z болса, онда WX -> Z орындалады"
      },
      {
        id: "db-t10-b38-op2",
        text: "Егер X -> Y және Y -> Z болса, онда X -> Z орындалады"
      },
      {
        id: "db-t10-b38-op3",
        text: "Егер X -> YZ болса, онда X -> Y орындалады"
      },
      {
        id: "db-t10-b38-op4",
        text: "Транзитивті тәуелділікті толық терістеу"
      },
      {
        id: "db-t10-b38-op5",
        text: "Олардың бірі бастапқы кілт болса"
      },
      {
        id: "db-t10-b38-op6",
        text: "Топ_ID"
      },
      {
        id: "db-t10-b38-op7",
        text: "Y мәні X-ке функционалды тәуелді"
      },
      {
        id: "db-t10-b38-op8",
        text: "Деректерді шифрлау"
      }
    ],
    correctOptionIds: [
      "db-t10-b38-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b39",
    subjectId: SubjectId.DB,
    text: "Функционалдық тәуелділіктің тұйықталуы (Closure of FD set - F+) деген не?",
    options: [
      {
        id: "db-t10-b39-op1",
        text: "Армстронг аксиомаларының көмегімен F жиынтығынан шығарылатын барлық функционалдық тәуелділіктер жиыны"
      },
      {
        id: "db-t10-b39-op2",
        text: "Кестедегі бастапқы кілттердің жалпы саны"
      },
      {
        id: "db-t10-b39-op3",
        text: "Транзакцияның сәтті аяқталу сәті"
      },
      {
        id: "db-t10-b39-op4",
        text: "Индекстелген бағандардың жиынтығы"
      },
      {
        id: "db-t10-b39-op5",
        text: "Кестелерді біріктіру"
      },
      {
        id: "db-t10-b39-op6",
        text: "Primary Key бар"
      },
      {
        id: "db-t10-b39-op7",
        text: "Көп мәнді атрибуттар бар"
      },
      {
        id: "db-t10-b39-op8",
        text: "Транзакциялар болуы керек"
      }
    ],
    correctOptionIds: [
      "db-t10-b39-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b40",
    subjectId: SubjectId.DB,
    text: "Атрибуттар жиынының тұйықталуы (Attribute Closure - X+) не үшін қолданылады?",
    options: [
      {
        id: "db-t10-b40-op1",
        text: "Берілген атрибуттар жиынтығының суперкілт немесе кандидаттық кілт екенін тексеру үшін"
      },
      {
        id: "db-t10-b40-op2",
        text: "Кестедегі NULL мәндерді табу үшін"
      },
      {
        id: "db-t10-b40-op3",
        text: "Кестені физикалық файлдарға бөлу үшін"
      },
      {
        id: "db-t10-b40-op4",
        text: "Сыртқы кілттің орындалуын тексеру үшін"
      },
      {
        id: "db-t10-b40-op5",
        text: "Сыртқы кілт (Foreign Key)"
      },
      {
        id: "db-t10-b40-op6",
        text: "2NF + транзитивті тәуелділік жоқ"
      },
      {
        id: "db-t10-b40-op7",
        text: "Бөлуге болмайтын ең қарапайым мән"
      },
      {
        id: "db-t10-b40-op8",
        text: "Егер X -> Y болса, онда кез келген Z үшін XZ -> YZ орындалады"
      }
    ],
    correctOptionIds: [
      "db-t10-b40-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b41",
    subjectId: SubjectId.DB,
    text: "Егер X+ тұйықталуы кестенің барлық атрибуттарын қамтыса, X атрибуттар жиыны не болып табылады?",
    options: [
      {
        id: "db-t10-b41-op1",
        text: "Сыртқы кілт (Foreign Key)"
      },
      {
        id: "db-t10-b41-op2",
        text: "Бос жиын"
      },
      {
        id: "db-t10-b41-op3",
        text: "Біріншілік емес атрибут"
      },
      {
        id: "db-t10-b41-op4",
        text: "X бастапқы кілт болса"
      },
      {
        id: "db-t10-b41-op5",
        text: "Кестенің 2NF-те болуы"
      },
      {
        id: "db-t10-b41-op6",
        text: "Кестедегі барлық индекстерді жою"
      },
      {
        id: "db-t10-b41-op7",
        text: "А-ның әрбір мәніне В-ның тек бір ғана мәні сәйкес келеді"
      },
      {
        id: "db-t10-b41-op8",
        text: "Толық тәуелділік"
      }
    ],
    correctOptionIds: [
      "c4afe032-1b5d-493a-b4da-2664de024176"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b42",
    subjectId: SubjectId.DB,
    text: "Минималды жабын (Minimal Cover / Canonical Cover) деген не?",
    options: [
      {
        id: "db-t10-b42-op1",
        text: "Ф-ға баламалы, бірақ ешқандай артық функционалдық тәуелділігі немесе артық атрибуты жоқ минималды FD жиыны"
      },
      {
        id: "db-t10-b42-op2",
        text: "Бастапқы кілт болып табылатын ең кіші баған"
      },
      {
        id: "db-t10-b42-op3",
        text: "Дерекқордың ең аз орын алатын кестесі"
      },
      {
        id: "db-t10-b42-op4",
        text: "Ең аз жазбасы бар кесте"
      },
      {
        id: "db-t10-b42-op5",
        text: "Кестеге жаңа дерек енгізу үшін оған қатысы жоқ басқа да мәліметтерді міндетті түрде енгізуге мәжбүр болу"
      },
      {
        id: "db-t10-b42-op6",
        text: "Жазбаны бірегей анықтайтын кез келген атрибуттар жиыны"
      },
      {
        id: "db-t10-b42-op7",
        text: "Проекциялық-біріктіру қалыпты формасы (PJNF), біріктіру тәуелділігіне (join dependency) негізделген"
      },
      {
        id: "db-t10-b42-op8",
        text: "X пен Y тәуелсіз"
      }
    ],
    correctOptionIds: [
      "db-t10-b42-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "085164c8-9134-4f4f-8a9b-a0291a0981c7",
    subjectId: SubjectId.DB,
    text: "Кестелерді ыдыратудағы (Decomposition) 'Lossless Join' (жоғалтусыз біріктіру) қасиеті нені білдіреді?",
    options: [
      {
        id: "dd5d462d-e4e1-4442-b32a-b0f9f91db62a",
        text: "Ыдыратылған кестелерді қайтадан JOIN арқылы қосқанда алғашқы кестедегі деректер ешбір артық жолсыз дәл қалпына келуін"
      },
      {
        id: "69a3b97c-db92-4b4a-b42f-238ac7b719bc",
        text: "Ыдырату кезінде деректердің ешқайсысы өшпейтіндігін"
      },
      {
        id: "76be23cc-89e4-440c-92f4-1bb0317a0ec7",
        text: "Кестелерді біріктіргенде сұраныс уақытының жоғалмауын"
      },
      {
        id: "7aedfe3c-b6ca-4bf5-92e7-f969c0687fde",
        text: "Сыртқы кілттердің жойылмайтындығын"
      },
      {
        id: "051832de-c5be-4d03-b67b-9fc583ba2eda",
        text: "ЖСН"
      },
      {
        id: "1fdb15fb-51b4-486e-a2dc-4dc314a6796d",
        text: "Алан Тьюринг"
      },
      {
        id: "3fab7752-8e1a-4dbb-b759-0f882dbf64d0",
        text: "Бастапқы кілттің автоматты өшіп қалуын"
      },
      {
        id: "6550e349-48a4-402a-ace1-e9118eb4e865",
        text: "Бейтривиалды тәуелділік"
      }
    ],
    correctOptionIds: [
      "dd5d462d-e4e1-4442-b32a-b0f9f91db62a"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b43",
    subjectId: SubjectId.DB,
    text: "Кестені оның функционалдық тәуелділіктерін жоғалтпай ыдырату процесі қалай аталады?",
    options: [
      {
        id: "db-t10-b43-op1",
        text: "Тәуелділікті сақтаушы ыдырату (Dependency Preserving Decomposition)"
      },
      {
        id: "db-t10-b43-op2",
        text: "Логикалық ыдырату"
      },
      {
        id: "db-t10-b43-op3",
        text: "Денормализациялық ыдырату"
      },
      {
        id: "db-t10-b43-op4",
        text: "Сызықтық ыдырату"
      },
      {
        id: "db-t10-b43-op5",
        text: "Суррогаттық кілт"
      },
      {
        id: "db-t10-b43-op6",
        text: "Бастапқы кілт болып табылатын ең кіші баған"
      },
      {
        id: "db-t10-b43-op7",
        text: "Деректерді жою"
      },
      {
        id: "db-t10-b43-op8",
        text: "Деректер типін өзгерту кезіндегі қателік"
      }
    ],
    correctOptionIds: [
      "db-t10-b43-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b44",
    subjectId: SubjectId.DB,
    text: "Ыдырату кезінде жалжал (артық) жолдардың (Spurious Tuples) пайда болу себебі не?",
    options: [
      {
        id: "db-t10-b44-op1",
        text: "Сәйкес келмейтін, бастапқы кілт емес бағандар бойынша кестелерді дұрыс емес қосу (JOIN) жасау"
      },
      {
        id: "db-t10-b44-op2",
        text: "Кестедегі индекстердің жетіспеушілігі"
      },
      {
        id: "db-t10-b44-op3",
        text: "Кестеде NULL мәндердің тым көп болуы"
      },
      {
        id: "db-t10-b44-op4",
        text: "Транзакциялардың сәтсіз орындалуы"
      },
      {
        id: "db-t10-b44-op5",
        text: "Кестелердің шексіз санын"
      },
      {
        id: "db-t10-b44-op6",
        text: "2NF + транзитивті тәуелділік жоқ"
      },
      {
        id: "db-t10-b44-op7",
        text: "X Y-ға тең емес"
      },
      {
        id: "db-t10-b44-op8",
        text: "Дерекқордың физикалық өлшемін шексіз үлкейту"
      }
    ],
    correctOptionIds: [
      "db-t10-b44-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b45",
    subjectId: SubjectId.DB,
    text: "Біріншілік атрибут (Prime Attribute) деген не?",
    options: [
      {
        id: "db-t10-b45-op1",
        text: "Кез келген кандидаттық кілттің құрамына кіретін атрибут"
      },
      {
        id: "db-t10-b45-op2",
        text: "Тек бүтін сандық типті атрибут"
      },
      {
        id: "db-t10-b45-op3",
        text: "Кестенің ең бірінші бағаны"
      },
      {
        id: "db-t10-b45-op4",
        text: "Ешқандай кілтке кірмейтін атрибут"
      },
      {
        id: "db-t10-b45-op5",
        text: "X-тің бір мәніне Y-тің бірнеше тәуелсіз мәндер жиыны сәйкес келеді және олар үшінші Z атрибутына тәуелсіз сақталады"
      },
      {
        id: "db-t10-b45-op6",
        text: "Кестеде тек бір ғана баған болуы"
      },
      {
        id: "db-t10-b45-op7",
        text: "Y мәні X-ке функционалды тәуелді"
      },
      {
        id: "db-t10-b45-op8",
        text: "Бастапқы кілтке сілтеме жасайтын атрибут"
      }
    ],
    correctOptionIds: [
      "db-t10-b45-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b46",
    subjectId: SubjectId.DB,
    text: "Біріншілік емес атрибут (Non-prime Attribute) деген не?",
    options: [
      {
        id: "db-t10-b46-op1",
        text: "Ешқандай кандидаттық кілттің құрамына кірмейтін атрибут"
      },
      {
        id: "db-t10-b46-op2",
        text: "Бастапқы кілтке сілтеме жасайтын атрибут"
      },
      {
        id: "db-t10-b46-op3",
        text: "Кестедегі екінші баған"
      },
      {
        id: "db-t10-b46-op4",
        text: "Мәндері тек NULL болатын баған"
      },
      {
        id: "db-t10-b46-op5",
        text: "Y сыртқы кілт болса"
      },
      {
        id: "db-t10-b46-op6",
        text: "Транзакциялар болуы керек"
      },
      {
        id: "db-t10-b46-op7",
        text: "X пен Y жиындарының ортақ элементі мүлдем болмаса (X ∩ Y = ∅)"
      },
      {
        id: "db-t10-b46-op8",
        text: "Транзитивті тәуелділік тудыратын (кілттік емес атрибутқа тәуелді) атрибуттарды жеке кестеге шығару"
      }
    ],
    correctOptionIds: [
      "db-t10-b46-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b47",
    subjectId: SubjectId.DB,
    text: "Функционалдық тәуелділік X -> Y тривиалды деп аталады, егер:",
    options: [
      {
        id: "db-t10-b47-op1",
        text: "Y жиыны X жиынының ішкі жиыны болса (Y ⊆ X)"
      },
      {
        id: "db-t10-b47-op2",
        text: "Y жиыны мен X жиыны қиылыспаса"
      },
      {
        id: "db-t10-b47-op3",
        text: "X және Y бос жиын болса"
      },
      {
        id: "db-t10-b47-op4",
        text: "X бастапқы кілт болса"
      },
      {
        id: "db-t10-b47-op5",
        text: "Кестені толығымен өшіре алмау қатесі"
      },
      {
        id: "db-t10-b47-op6",
        text: "Дерек жаңарту қиын"
      },
      {
        id: "db-t10-b47-op7",
        text: "X пен Y-тің ортақ элементі тек біреу ғана болса"
      },
      {
        id: "db-t10-b47-op8",
        text: "Бастапқы кілтпен бірге ең көп дегенде екеу болады"
      }
    ],
    correctOptionIds: [
      "db-t10-b47-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b48",
    subjectId: SubjectId.DB,
    text: "Функционалдық тәуелділік X -> Y тривиалды емес (non-trivial) деп аталады, егер:",
    options: [
      {
        id: "db-t10-b48-op1",
        text: "Y жиыны X жиынының ішкі жиыны болмаса (Y ⊈ X)"
      },
      {
        id: "db-t10-b48-op2",
        text: "Y ⊆ X орындалса"
      },
      {
        id: "db-t10-b48-op3",
        text: "X пен Y-тің ортақ элементтері болса"
      },
      {
        id: "db-t10-b48-op4",
        text: "Y тек бірегей мәндерді қамтыса"
      },
      {
        id: "db-t10-b48-op5",
        text: "Толық тәуелділік"
      },
      {
        id: "db-t10-b48-op6",
        text: "XZ -> Y"
      },
      {
        id: "db-t10-b48-op7",
        text: "Кестенің ең бірінші бағаны"
      },
      {
        id: "db-t10-b48-op8",
        text: "Кестедегі екінші баған"
      }
    ],
    correctOptionIds: [
      "db-t10-b48-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b49",
    subjectId: SubjectId.DB,
    text: "Функционалдық тәуелділік X -> Y толық тривиалды емес (completely non-trivial) деп аталады, егер:",
    options: [
      {
        id: "db-t10-b49-op1",
        text: "X пен Y жиындарының ортақ элементі мүлдем болмаса (X ∩ Y = ∅)"
      },
      {
        id: "db-t10-b49-op2",
        text: "Y ⊆ X орындалса"
      },
      {
        id: "db-t10-b49-op3",
        text: "X пен Y-тің ортақ элементі тек біреу ғана болса"
      },
      {
        id: "db-t10-b49-op4",
        text: "Олардың бірі бастапқы кілт болса"
      },
      {
        id: "db-t10-b49-op5",
        text: "Бастапқы кілті жалғыз қарапайым атрибуттан тұратын 1NF кестесі"
      },
      {
        id: "db-t10-b49-op6",
        text: "Ыдырату кезінде деректердің ешқайсысы өшпейтіндігін"
      },
      {
        id: "db-t10-b49-op7",
        text: "Кандидаттық кілт — минималды суперкілт, яғни оның құрамынан бірде-бір атрибутты алып тастауға болмайды"
      },
      {
        id: "db-t10-b49-op8",
        text: "Кестеде тек бірегей индекстер болуы керек"
      }
    ],
    correctOptionIds: [
      "db-t10-b49-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b50",
    subjectId: SubjectId.DB,
    text: "Кестені 2NF-ке келтіру үшін қандай әрекет жасалады?",
    options: [
      {
        id: "db-t10-b50-op1",
        text: "Бастапқы кілттің бөлігіне ғана тәуелді атрибуттарды (жартылай тәуелділіктерді) жеке кестеге шығару"
      },
      {
        id: "db-t10-b50-op2",
        text: "Кестедегі барлық индекстерді жою"
      },
      {
        id: "db-t10-b50-op3",
        text: "Барлық мәтіндік бағандарды сандық бағанға ауыстыру"
      },
      {
        id: "db-t10-b50-op4",
        text: "Транзитивті тәуелділіктерді жеке кестеге шығару"
      },
      {
        id: "db-t10-b50-op5",
        text: "Транзитивті тәуелділікті жою"
      },
      {
        id: "db-t10-b50-op6",
        text: "Primary Key бар"
      },
      {
        id: "db-t10-b50-op7",
        text: "Армстронг аксиомаларына"
      },
      {
        id: "db-t10-b50-op8",
        text: "2NF-ке (себебі ішінара тәуелділік болуы мүмкін емес)"
      }
    ],
    correctOptionIds: [
      "db-t10-b50-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b51",
    subjectId: SubjectId.DB,
    text: "Кестені 3NF-ке келтіру үшін қандай әрекет жасалады?",
    options: [
      {
        id: "db-t10-b51-op1",
        text: "Транзитивті тәуелділік тудыратын (кілттік емес атрибутқа тәуелді) атрибуттарды жеке кестеге шығару"
      },
      {
        id: "db-t10-b51-op2",
        text: "Жартылай тәуелділікті жою"
      },
      {
        id: "db-t10-b51-op3",
        text: "Көпмәнді тәуелділіктерді жеке кестеге шығару"
      },
      {
        id: "db-t10-b51-op4",
        text: "Кестелерді біріктіру"
      },
      {
        id: "db-t10-b51-op5",
        text: "Схема (Schema)"
      },
      {
        id: "db-t10-b51-op6",
        text: "Кестелердің шексіз санын"
      },
      {
        id: "db-t10-b51-op7",
        text: "Бастапқы кілт тек суррогаттық кілт болуы керек"
      },
      {
        id: "db-t10-b51-op8",
        text: "Толық тәуелділік"
      }
    ],
    correctOptionIds: [
      "db-t10-b51-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b52",
    subjectId: SubjectId.DB,
    text: "Төмендегі кестелердің қайсысы әрқашан 2NF және 3NF талаптарына автоматты түрде сай болады?",
    options: [
      {
        id: "db-t10-b52-op1",
        text: "Бастапқы кілті жалғыз қарапайым атрибуттан тұратын 1NF кестесі"
      },
      {
        id: "db-t10-b52-op2",
        text: "Құрама бастапқы кілті бар кез келген кесте"
      },
      {
        id: "db-t10-b52-op3",
        text: "Индексі бар кез келген кесте"
      },
      {
        id: "db-t10-b52-op4",
        text: "Тек сыртқы кілттері бар кесте"
      },
      {
        id: "db-t10-b52-op5",
        text: "Ешқандай қалыпты формаға жатпайды"
      },
      {
        id: "db-t10-b52-op6",
        text: "Кестелер санының көбеюіне байланысты JOIN амалдары жиілеп, кейбір оқу сұраныстарының баяулауы"
      },
      {
        id: "db-t10-b52-op7",
        text: "Оның барлық бағандары тек сандық типті болса"
      },
      {
        id: "db-t10-b52-op8",
        text: "Домендік-кілттік қалыпты форма (DKNF)"
      }
    ],
    correctOptionIds: [
      "db-t10-b52-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b53",
    subjectId: SubjectId.DB,
    text: "Кесте 3NF-те болып, бірақ BCNF талабын бұзатын жағдай қашан туындайды?",
    options: [
      {
        id: "db-t10-b53-op1",
        text: "Егер кестеде бірнеше қиылысатын құрама кандидаттық кілттер болса"
      },
      {
        id: "db-t10-b53-op2",
        text: "Егер кестеде тек бір кандидаттық кілт болса"
      },
      {
        id: "db-t10-b53-op3",
        text: "Егер кестеде сыртқы кілттер мүлдем болмаса"
      },
      {
        id: "db-t10-b53-op4",
        text: "Егер кестеде транзитивті тәуелділік болса"
      },
      {
        id: "db-t10-b53-op5",
        text: "Ньютон заңдарына"
      },
      {
        id: "db-t10-b53-op6",
        text: "X тек бір бағаннан тұрса"
      },
      {
        id: "db-t10-b53-op7",
        text: "Концептуалды жобалау кезеңінде"
      },
      {
        id: "db-t10-b53-op8",
        text: "1NF"
      }
    ],
    correctOptionIds: [
      "db-t10-b53-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b54",
    subjectId: SubjectId.DB,
    text: "3NF пен BCNF арасындағы басты айырмашылық қандай?",
    options: [
      {
        id: "db-t10-b54-op1",
        text: "3NF-те X -> A тәуелділігі үшін А біріншілік (prime) атрибут болса рұқсат етіледі, ал BCNF-те А-ның қандай атрибут екеніне қарамастан X міндетті түрде суперкілт болуы тиіс"
      },
      {
        id: "db-t10-b54-op2",
        text: "BCNF-те транзитивті тәуелділіктерге рұқсат беріледі"
      },
      {
        id: "db-t10-b54-op3",
        text: "3NF тек құрама кілттермен жұмыс істейді"
      },
      {
        id: "db-t10-b54-op4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "db-t10-b54-op5",
        text: "Ыдырату кезінде деректердің ешқайсысы өшпейтіндігін"
      },
      {
        id: "db-t10-b54-op6",
        text: "Индекстелген бағандардың жиынтығы"
      },
      {
        id: "db-t10-b54-op7",
        text: "Кестеде тек INNER JOIN қолданылса"
      },
      {
        id: "db-t10-b54-op8",
        text: "Иә, BCNF әрқашан екі қасиетті де толық сақтайды"
      }
    ],
    correctOptionIds: [
      "db-t10-b54-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b55",
    subjectId: SubjectId.DB,
    text: "Көпмәнді тәуелділік (Multivalued Dependency - MVD) қалай белгіленеді?",
    options: [
      {
        id: "db-t10-b55-op1",
        text: "X ->-> Y"
      },
      {
        id: "db-t10-b55-op2",
        text: "X -> Y"
      },
      {
        id: "db-t10-b55-op3",
        text: "X => Y"
      },
      {
        id: "db-t10-b55-op4",
        text: "X ~> Y"
      },
      {
        id: "db-t10-b55-op5",
        text: "Ыдыратылған кестелерді қайтадан JOIN арқылы қосқанда алғашқы кестедегі деректер ешбір артық жолсыз дәл қалпына келуін"
      },
      {
        id: "db-t10-b55-op6",
        text: "Кестелерді біріктіру"
      },
      {
        id: "db-t10-b55-op7",
        text: "Кестелерді ыдыратуға (decomposition)"
      },
      {
        id: "db-t10-b55-op8",
        text: "Функционалдық тәуелділіктердің санын көбейту үшін"
      }
    ],
    correctOptionIds: [
      "db-t10-b55-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b56",
    subjectId: SubjectId.DB,
    text: "X ->-> Y көпмәнді тәуелділігі нені білдіреді?",
    options: [
      {
        id: "db-t10-b56-op1",
        text: "X-тің бір мәніне Y-тің бірнеше тәуелсіз мәндер жиыны сәйкес келеді және олар үшінші Z атрибутына тәуелсіз сақталады"
      },
      {
        id: "db-t10-b56-op2",
        text: "X-тің бір мәніне Y-тің тек бір ғана мәні сәйкес келеді"
      },
      {
        id: "db-t10-b56-op3",
        text: "X пен Y арасындағы 1:1 байланысты"
      },
      {
        id: "db-t10-b56-op4",
        text: "Y атрибуты X-тің бастапқы кілті екенін"
      },
      {
        id: "db-t10-b56-op5",
        text: "Біріншілік (Prime) атрибуттар"
      },
      {
        id: "db-t10-b56-op6",
        text: "Y сыртқы кілт болса"
      },
      {
        id: "db-t10-b56-op7",
        text: "Кестедеге жазбаны бірегей анықтай алатын атрибут немесе атрибуттар жиынтығы (бірақ минималды болуы міндетті емес)"
      },
      {
        id: "db-t10-b56-op8",
        text: "Артық деректерді азайту процесі"
      }
    ],
    correctOptionIds: [
      "db-t10-b56-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b57",
    subjectId: SubjectId.DB,
    text: "4NF-тегі кестеде неше тәуелсіз көпмәнді тәуелділік сақталуы мүмкін?",
    options: [
      {
        id: "db-t10-b57-op1",
        text: "Тек бір ғана (егер олар көп болса, оларды жеке кестелерге бөлу керек)"
      },
      {
        id: "db-t10-b57-op2",
        text: "Шексіз көп"
      },
      {
        id: "db-t10-b57-op3",
        text: "Екі"
      },
      {
        id: "db-t10-b57-op4",
        text: "Мүлдем сақталмауы керек"
      },
      {
        id: "db-t10-b57-op5",
        text: "Кестелерді бөлу"
      },
      {
        id: "db-t10-b57-op6",
        text: "ЖСН"
      },
      {
        id: "db-t10-b57-op7",
        text: "Сыртқы атрибуттар"
      },
      {
        id: "db-t10-b57-op8",
        text: "Индекс"
      }
    ],
    correctOptionIds: [
      "db-t10-b57-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b58",
    subjectId: SubjectId.DB,
    text: "Кестеде Join Dependency (JD) бар деп аталады, егер:",
    options: [
      {
        id: "db-t10-b58-op1",
        text: "Кестені оның проекцияларына ыдыратқаннан кейін оларды қайта қосқанда алғашқы кесте дәл қалпына келсе (lossless join орындалса)"
      },
      {
        id: "db-t10-b58-op2",
        text: "Кестеде екі немесе одан да көп сыртқы кілттер болса"
      },
      {
        id: "db-t10-b58-op3",
        text: "Кестеде тек INNER JOIN қолданылса"
      },
      {
        id: "db-t10-b58-op4",
        text: "Кестеде денормализация орын алса"
      },
      {
        id: "db-t10-b58-op5",
        text: "(A, C) және (B, C) кестелеріне бөлу арқылы"
      },
      {
        id: "db-t10-b58-op6",
        text: "X-тің бір мәніне Y-тің тек бір ғана мәні сәйкес келеді"
      },
      {
        id: "db-t10-b58-op7",
        text: "X ->-> Y"
      },
      {
        id: "db-t10-b58-op8",
        text: "X ~> Y"
      }
    ],
    correctOptionIds: [
      "db-t10-b58-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b59",
    subjectId: SubjectId.DB,
    text: "Біріктіру тәуелділігін (Join Dependency) зерттейтін және оны шешетін қалыпты форма қайсысы?",
    options: [
      {
        id: "db-t10-b59-op1",
        text: "5NF"
      },
      {
        id: "db-t10-b59-op2",
        text: "4NF"
      },
      {
        id: "db-t10-b59-op3",
        text: "3NF"
      },
      {
        id: "db-t10-b59-op4",
        text: "BCNF"
      },
      {
        id: "db-t10-b59-op5",
        text: "Кесте 1NF-те болуы және кез келген кілттік емес атрибут бастапқы кілтке (әсіресе құрама кілтке) толық функционалды тәуелді болуы тиіс (ішінара тәуелділік болмауы керек)"
      },
      {
        id: "db-t10-b59-op6",
        text: "Егер кестеде бірнеше қиылысатын құрама кандидаттық кілттер болса"
      },
      {
        id: "db-t10-b59-op7",
        text: "Іздеу нәтижесі қате"
      },
      {
        id: "db-t10-b59-op8",
        text: "Y атрибуты X-тің бастапқы кілті екенін"
      }
    ],
    correctOptionIds: [
      "db-t10-b59-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b60",
    subjectId: SubjectId.DB,
    text: "Деректер қорын нормализациялаудың басты мақсаты не?",
    options: [
      {
        id: "db-t10-b60-op1",
        text: "Деректердің артықшылығын жою және жаңарту, қосу, өшіру аномалияларын болдырмау"
      },
      {
        id: "db-t10-b60-op2",
        text: "Дерекқордың физикалық өлшемін шексіз үлкейту"
      },
      {
        id: "db-t10-b60-op3",
        text: "SQL сұраныстарының санын көбейту"
      },
      {
        id: "db-t10-b60-op4",
        text: "Кестелерге деректерді тез енгізу"
      },
      {
        id: "db-t10-b60-op5",
        text: "Кестелерді ыдыратуға (decomposition)"
      },
      {
        id: "db-t10-b60-op6",
        text: "Тегі"
      },
      {
        id: "db-t10-b60-op7",
        text: "Кестедеге жазбаны бірегей анықтай алатын атрибут немесе атрибуттар жиынтығы (бірақ минималды болуы міндетті емес)"
      },
      {
        id: "db-t10-b60-op8",
        text: "Y атрибуты X-тің бастапқы кілті екенін"
      }
    ],
    correctOptionIds: [
      "db-t10-b60-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b61",
    subjectId: SubjectId.DB,
    text: "Қосу аномалиясы (Insertion Anomaly) деген не?",
    options: [
      {
        id: "db-t10-b61-op1",
        text: "Кестеге жаңа дерек енгізу үшін оған қатысы жоқ басқа да мәліметтерді міндетті түрде енгізуге мәжбүр болу"
      },
      {
        id: "db-t10-b61-op2",
        text: "Кестеге бір уақытта екі жол қоса алмау қатесі"
      },
      {
        id: "db-t10-b61-op3",
        text: "Жаңа бастапқы кілт қосу кезіндегі қателік"
      },
      {
        id: "db-t10-b61-op4",
        text: "Сыртқы кілттің мәнін өзгерте алмау"
      },
      {
        id: "db-t10-b61-op5",
        text: "Көпмәнді тәуелділіктерді (multivalued dependencies) жою"
      },
      {
        id: "db-t10-b61-op6",
        text: "Ешқандай жаңа функционалдық тәуелділік құру мүмкін еместігін"
      },
      {
        id: "db-t10-b61-op7",
        text: "X пен Y тәуелсіз"
      },
      {
        id: "db-t10-b61-op8",
        text: "Көпмәнді тәуелділіктер (Multivalued Dependencies)"
      }
    ],
    correctOptionIds: [
      "db-t10-b61-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b62",
    subjectId: SubjectId.DB,
    text: "Өшіру аномалиясы (Deletion Anomaly) деген не?",
    options: [
      {
        id: "db-t10-b62-op1",
        text: "Кестеден бір деректі жойған кезде оған тәуелсіз басқа да маңызды ақпараттың қоса жойылып кетуі"
      },
      {
        id: "db-t10-b62-op2",
        text: "Кестені толығымен өшіре алмау қатесі"
      },
      {
        id: "db-t10-b62-op3",
        text: "Сыртқы кілттің байланысын жоя алмау"
      },
      {
        id: "db-t10-b62-op4",
        text: "Индексті өшіру кезіндегі сәтсіздік"
      },
      {
        id: "db-t10-b62-op5",
        text: "Сызықтық ыдырату"
      },
      {
        id: "db-t10-b62-op6",
        text: "Индекстерді жылдам оқу үшін"
      },
      {
        id: "db-t10-b62-op7",
        text: "Егер Y ⊆ X болса, онда X -> Y орындалады"
      },
      {
        id: "db-t10-b62-op8",
        text: "Индекстелген бағандардың жиынтығы"
      }
    ],
    correctOptionIds: [
      "db-t10-b62-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b63",
    subjectId: SubjectId.DB,
    text: "Жаңарту аномалиясы (Update Anomaly) деген не?",
    options: [
      {
        id: "db-t10-b63-op1",
        text: "Бір дерек бірнеше жерде қайталанғандықтан, оны өзгерткен кезде барлық жолдарда бірдей жаңартпаса, деректердің қайшылыққа (inconsistency) ұшырауы"
      },
      {
        id: "db-t10-b63-op2",
        text: "UPDATE сұранысының өте баяу орындалуы"
      },
      {
        id: "db-t10-b63-op3",
        text: "Бастапқы кілттің автоматты түрде өзгермеуі"
      },
      {
        id: "db-t10-b63-op4",
        text: "Деректер типін өзгерту кезіндегі қателік"
      },
      {
        id: "db-t10-b63-op5",
        text: "Егер кестеде тек бір кандидаттық кілт болса"
      },
      {
        id: "db-t10-b63-op6",
        text: "Y жиыны X жиынының ішкі жиыны болмаса (Y ⊈ X)"
      },
      {
        id: "db-t10-b63-op7",
        text: "1NF"
      },
      {
        id: "db-t10-b63-op8",
        text: "Егер Y ⊆ X болса, онда X -> Y орындалады"
      }
    ],
    correctOptionIds: [
      "db-t10-b63-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b64",
    subjectId: SubjectId.DB,
    text: "Нормализациялау процесі неге негізделген?",
    options: [
      {
        id: "db-t10-b64-op1",
        text: "Кестелерді ыдыратуға (decomposition)"
      },
      {
        id: "db-t10-b64-op2",
        text: "Кестелерді біріктіруге (merge)"
      },
      {
        id: "db-t10-b64-op3",
        text: "Жаңа бағандар қосуға (alter table)"
      },
      {
        id: "db-t10-b64-op4",
        text: "Дерекқор файлдарын шифрлауға"
      },
      {
        id: "db-t10-b64-op5",
        text: "Кестеде тек INNER JOIN қолданылса"
      },
      {
        id: "db-t10-b64-op6",
        text: "Тікелей тәуелділік"
      },
      {
        id: "db-t10-b64-op7",
        text: "Оның барлық бағандары тек сандық типті болса"
      },
      {
        id: "db-t10-b64-op8",
        text: "Кестенің толық нормализацияланғанын"
      }
    ],
    correctOptionIds: [
      "db-t10-b64-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b65",
    subjectId: SubjectId.DB,
    text: "Денормализация қашан қолданылады?",
    options: [
      {
        id: "db-t10-b65-op1",
        text: "OLAP жүйелерінде немесе оқу сұраныстары тым көп және олардың жылдамдығы маңызды болған жағдайда"
      },
      {
        id: "db-t10-b65-op2",
        text: "Жаңа дерекқорды алғаш рет жобалағанда"
      },
      {
        id: "db-t10-b65-op3",
        text: "Деректердің қауіпсіздігін арттыру қажет болғанда"
      },
      {
        id: "db-t10-b65-op4",
        text: "Транзитивті тәуелділіктерді көбейту үшін"
      },
      {
        id: "db-t10-b65-op5",
        text: "Бастапқы кілттің автоматты өшіп қалуын"
      },
      {
        id: "db-t10-b65-op6",
        text: "Кестелерді біріктіргенде сұраныс уақытының жоғалмауын"
      },
      {
        id: "db-t10-b65-op7",
        text: "Иә, 3NF-те екі қасиет те әрқашан сақталады"
      },
      {
        id: "db-t10-b65-op8",
        text: "Индекстерді жылдам оқу үшін"
      }
    ],
    correctOptionIds: [
      "db-t10-b65-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b66",
    subjectId: SubjectId.DB,
    text: "Төмендегілердің қайсысы нормализациялаудың кемшілігі (жанама әсері) болып табылады?",
    options: [
      {
        id: "db-t10-b66-op1",
        text: "JOIN операторларының көбеюіне байланысты күрделі оқу сұраныстарының баяулауы"
      },
      {
        id: "db-t10-b66-op2",
        text: "Деректердің қайталауының (redundancy) көбеюі"
      },
      {
        id: "db-t10-b66-op3",
        text: "Жаңарту аномалияларының пайда болуы"
      },
      {
        id: "db-t10-b66-op4",
        text: "Дерекқордың физикалық қауіпсіздігінің нашарлауы"
      },
      {
        id: "db-t10-b66-op5",
        text: "Жаңа дерекқорды алғаш рет жобалағанда"
      },
      {
        id: "db-t10-b66-op6",
        text: "Тек BCNF-ке өткенде ғана сақталады"
      },
      {
        id: "db-t10-b66-op7",
        text: "Бейтривиалды тәуелділік"
      },
      {
        id: "db-t10-b66-op8",
        text: "Сұраныс жылдамдығын арттыру"
      }
    ],
    correctOptionIds: [
      "db-t10-b66-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b67",
    subjectId: SubjectId.DB,
    text: "Кестенің барлық кандидаттық кілттерінің ішінен таңдап алынған жалғыз негізгі кілт қалай аталады?",
    options: [
      {
        id: "db-t10-b67-op1",
        text: "Бастапқы кілт (Primary Key)"
      },
      {
        id: "db-t10-b67-op2",
        text: "Суррогаттық кілт"
      },
      {
        id: "db-t10-b67-op3",
        text: "Сыртқы кілт"
      },
      {
        id: "db-t10-b67-op4",
        text: "Суперкілт"
      },
      {
        id: "db-t10-b67-op5",
        text: "Баған мәндерінің автоматты түрде өсуі"
      },
      {
        id: "db-t10-b67-op6",
        text: "Кестеде бос ұяшықтардың көбеюін"
      },
      {
        id: "db-t10-b67-op7",
        text: "Көпмәнді тәуелділіктің орындалуын білдіреді"
      },
      {
        id: "db-t10-b67-op8",
        text: "Кесте 1NF-те болуы және кез келген кілттік емес атрибут бастапқы кілтке (әсіресе құрама кілтке) толық функционалды тәуелді болуы тиіс (ішінара тәуелділік болмауы керек)"
      }
    ],
    correctOptionIds: [
      "db-t10-b67-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b68",
    subjectId: SubjectId.DB,
    text: "Суперкілт (Superkey) деген не?",
    options: [
      {
        id: "db-t10-b68-op1",
        text: "Кестедеге жазбаны бірегей анықтай алатын атрибут немесе атрибуттар жиынтығы (бірақ минималды болуы міндетті емес)"
      },
      {
        id: "db-t10-b68-op2",
        text: "Тек бір бағаннан тұратын бастапқы кілт"
      },
      {
        id: "db-t10-b68-op3",
        text: "Ең көп қолданылатын сыртқы кілт"
      },
      {
        id: "db-t10-b68-op4",
        text: "Дерекқордағы ең үлкен кесте"
      },
      {
        id: "db-t10-b68-op5",
        text: "Тегі"
      },
      {
        id: "db-t10-b68-op6",
        text: "Күрделі атрибут"
      },
      {
        id: "db-t10-b68-op7",
        text: "Индекстерді жылдам оқу үшін"
      },
      {
        id: "db-t10-b68-op8",
        text: "Сыртқы кілттің мәнін өзгерте алмау"
      }
    ],
    correctOptionIds: [
      "db-t10-b68-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b69",
    subjectId: SubjectId.DB,
    text: "Кандидаттық кілттің суперкілттен айырмашылығы неде?",
    options: [
      {
        id: "db-t10-b69-op1",
        text: "Кандидаттық кілт — минималды суперкілт, яғни оның құрамынан бірде-бір атрибутты алып тастауға болмайды"
      },
      {
        id: "db-t10-b69-op2",
        text: "Кандидаттық кілт әрқашан суррогаттық кілт болады"
      },
      {
        id: "db-t10-b69-op3",
        text: "Суперкілт тек бір ғана бағаннан тұрады"
      },
      {
        id: "db-t10-b69-op4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "db-t10-b69-op5",
        text: "Онда ешқандай бастапқы кілт болмаса"
      },
      {
        id: "db-t10-b69-op6",
        text: "Көпмәнді тәуелділіктерді жеке кестеге шығару"
      },
      {
        id: "db-t10-b69-op7",
        text: "Алан Тьюринг"
      },
      {
        id: "db-t10-b69-op8",
        text: "Кестеде тек 1:1 байланыстары болуы тиіс"
      }
    ],
    correctOptionIds: [
      "db-t10-b69-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b70",
    subjectId: SubjectId.DB,
    text: "Функционалдық тәуелділік X -> Y толық (Full Functional Dependency) деп аталады, егер:",
    options: [
      {
        id: "db-t10-b70-op1",
        text: "Y атрибуты X-ке тәуелді болып, бірақ X-тің ешқандай ішкі жиынына тәуелді болмаса"
      },
      {
        id: "db-t10-b70-op2",
        text: "Y атрибуты X-тің кез келген бір бөлігіне тәуелді болса"
      },
      {
        id: "db-t10-b70-op3",
        text: "X пен Y бірдей бағандар болса"
      },
      {
        id: "db-t10-b70-op4",
        text: "X пен Y бастапқы кілт болса"
      },
      {
        id: "db-t10-b70-op5",
        text: "Транзитивті тәуелділіктерді толығымен жою"
      },
      {
        id: "db-t10-b70-op6",
        text: "Транзитивті тәуелділіктер болмауы тиіс"
      },
      {
        id: "db-t10-b70-op7",
        text: "Кесте құрылымының өзгермейтінін"
      },
      {
        id: "db-t10-b70-op8",
        text: "Кестеде NULL мәндердің тым көп болуы"
      }
    ],
    correctOptionIds: [
      "db-t10-b70-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b71",
    subjectId: SubjectId.DB,
    text: "Функционалдық тәуелділік X -> Y жартылай (Partial Dependency) деп аталады, егер:",
    options: [
      {
        id: "db-t10-b71-op1",
        text: "Y атрибуты құрама X кілтінің тек бір бөлігіне ғана тәуелді болса"
      },
      {
        id: "db-t10-b71-op2",
        text: "Y атрибуты X-ке толық тәуелді болса"
      },
      {
        id: "db-t10-b71-op3",
        text: "X тек бір бағаннан тұрса"
      },
      {
        id: "db-t10-b71-op4",
        text: "Y сыртқы кілт болса"
      },
      {
        id: "db-t10-b71-op5",
        text: "Мүлдем сақталмауы керек"
      },
      {
        id: "db-t10-b71-op6",
        text: "X бастапқы кілт болса"
      },
      {
        id: "db-t10-b71-op7",
        text: "Индекстерді жылдам оқу үшін"
      },
      {
        id: "db-t10-b71-op8",
        text: "Тек сыртқы кілттері бар кесте"
      }
    ],
    correctOptionIds: [
      "db-t10-b71-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5fbc9592-2b54-4909-a12c-9fa02376718f",
    subjectId: SubjectId.DB,
    text: "Егер A -> B және B -> C болса (мұнда B -> A орындалмайды), онда A -> C қандай тәуелділік деп аталады?",
    options: [
      {
        id: "ae4e88e7-56d1-4b46-8dd3-a067b159b071",
        text: "Транзитивті тәуелділік"
      },
      {
        id: "afaa9ed2-cd81-481d-bf9d-b69167fa29ff",
        text: "Жартылай тәуелділік"
      },
      {
        id: "d7a2fa7e-ced0-4592-b438-e2d12a297535",
        text: "Толық тәуелділік"
      },
      {
        id: "dd010b12-6b50-496d-bc38-266484258e0d",
        text: "Көпмәнді тәуелділік"
      },
      {
        id: "ed7ac029-0af0-4e43-9031-876cd5231f24",
        text: "Мүлдем сақталмауы керек"
      },
      {
        id: "3482392b-5928-4d89-a386-cb4a2b843639",
        text: "X ->-> Y"
      },
      {
        id: "bfcdf55e-4212-4295-b121-48eb49ee9c00",
        text: "JOIN операторларының көбеюіне байланысты күрделі оқу сұраныстарының баяулауы"
      },
      {
        id: "fe8a881d-aa8a-48ea-abc1-338b0d4b76bc",
        text: "X пен Y жиындарының ортақ элементі мүлдем болмаса (X ∩ Y = ∅)"
      }
    ],
    correctOptionIds: [
      "ae4e88e7-56d1-4b46-8dd3-a067b159b071"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b72",
    subjectId: SubjectId.DB,
    text: "Кесте 1NF-те деп саналады, егер:",
    options: [
      {
        id: "db-t10-b72-op1",
        text: "Оның барлық ұяшықтарында тек скалярлық (атомды) мәндер сақталып, массивтер немесе жиынтықтар болмаса"
      },
      {
        id: "db-t10-b72-op2",
        text: "Онда екі немесе одан да көп кесте біріктірілсе"
      },
      {
        id: "db-t10-b72-op3",
        text: "Онда ешқандай бастапқы кілт болмаса"
      },
      {
        id: "db-t10-b72-op4",
        text: "Оның барлық бағандары тек сандық типті болса"
      },
      {
        id: "db-t10-b72-op5",
        text: "Бойс-Кодд қалыпты формасы, суперкілтке негізделген"
      },
      {
        id: "db-t10-b72-op6",
        text: "Қосымша ақпаратсыз жаңа дерек қосу мүмкін емес"
      },
      {
        id: "db-t10-b72-op7",
        text: "Ешқандай кілтке кірмейтін атрибут"
      },
      {
        id: "db-t10-b72-op8",
        text: "Көп мәнді атрибут"
      }
    ],
    correctOptionIds: [
      "db-t10-b72-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ce22e353-ae4f-453f-86c3-1fce2238f136",
    subjectId: SubjectId.DB,
    text: "Келесі функционалдық тәуелділіктер берілген: A -> B, B -> C. Бұл кесте қай қалыпты формада (бастапқы кілт - А)?",
    options: [
      {
        id: "2523a104-9a14-4426-948d-dd4ed506d3da",
        text: "2NF"
      },
      {
        id: "61027043-ada3-4ea6-a80f-ca6ae5e72640",
        text: "3NF"
      },
      {
        id: "000e5b7a-814b-4255-b7c8-87779efa2d26",
        text: "BCNF"
      },
      {
        id: "5690035b-c49e-44c3-bcd0-77aae9637c1f",
        text: "1NF"
      },
      {
        id: "dace1029-1e5d-49e4-84a4-684d2951e567",
        text: "4NF"
      },
      {
        id: "959a0fcf-1cea-4fba-9849-f6df881e394d",
        text: "Онда ешқандай бастапқы кілт болмаса"
      },
      {
        id: "b91781b9-0b85-4783-8c00-a53553ae19ec",
        text: "Кестеде тек бірегей индекстер болуы тиіс"
      },
      {
        id: "e4c5de2c-5ad2-408b-bd4e-451cbc20ea2c",
        text: "Y атрибуты X-тің бастапқы кілті екенін"
      }
    ],
    correctOptionIds: [
      "2523a104-9a14-4426-948d-dd4ed506d3da"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b73",
    subjectId: SubjectId.DB,
    text: "Жоғарыдағы A -> B, B -> C кестесін 3NF-ке келтіру үшін қалай ыдыратады?",
    options: [
      {
        id: "db-t10-b73-op1",
        text: "(A, B) және (B, C) кестелеріне бөлу арқылы"
      },
      {
        id: "db-t10-b73-op2",
        text: "(A, C) және (B, C) кестелеріне бөлу арқылы"
      },
      {
        id: "db-t10-b73-op3",
        text: "Оларды бір кестеге біріктіру арқылы"
      },
      {
        id: "db-t10-b73-op4",
        text: "Жаңа С бағанын өшіру арқылы"
      },
      {
        id: "db-t10-b73-op5",
        text: "Кез келген кандидаттық кілттің құрамына кіретін атрибут"
      },
      {
        id: "db-t10-b73-op6",
        text: "Бөлуге болатын мән"
      },
      {
        id: "db-t10-b73-op7",
        text: "Индексті өшіру кезіндегі сәтсіздік"
      },
      {
        id: "db-t10-b73-op8",
        text: "Бастапқы кілттің бөлігіне ғана тәуелді атрибуттарды (жартылай тәуелділіктерді) жеке кестеге шығару"
      }
    ],
    correctOptionIds: [
      "db-t10-b73-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6016d45a-106c-474e-a49a-ed69385d0e09",
    subjectId: SubjectId.DB,
    text: "Берілген F функционалдық тәуелділіктер жиыны үшін оның closure (тұйықталуын) есептеу алгоритмі қандай аксиомаларға негізделген?",
    options: [
      {
        id: "d4f58643-a38e-4dd6-ab93-4051fb9081ce",
        text: "Армстронг аксиомаларына"
      },
      {
        id: "0219383c-9213-4f89-b8e0-187ba40f1ba0",
        text: "Кодд ережелеріне"
      },
      {
        id: "e304558b-2e0b-4a1a-a126-dfe21323a510",
        text: "Ньютон заңдарына"
      },
      {
        id: "6cf9b584-17b0-4853-9c2b-54e027215f0f",
        text: "Декарт ережелеріне"
      },
      {
        id: "4947ca7c-c7b8-4646-9ffa-618f616dcafd",
        text: "Онда екі немесе одан да көп кесте біріктірілсе"
      },
      {
        id: "2f970e64-fa04-4842-8fcf-7dae3b832325",
        text: "X-тің бір мәніне Y-тің бірнеше тәуелсіз мәндер жиыны сәйкес келеді және олар үшінші Z атрибутына тәуелсіз сақталады"
      },
      {
        id: "f82b7b79-df12-490c-8d2a-0959374e3aa0",
        text: "Жартылай тәуелділік"
      },
      {
        id: "a12748f4-85e3-4d59-a8ec-9ef781afc95b",
        text: "Транзитивті тәуелділіктердің болуы"
      }
    ],
    correctOptionIds: [
      "d4f58643-a38e-4dd6-ab93-4051fb9081ce"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "45b00ca5-133e-493b-9b03-ba0dcc5d1f67",
    subjectId: SubjectId.DB,
    text: "Егер X -> Y және Y -> Z болса, Армстронг аксиомасы бойынша қандай функционалдық тәуелділік шығады?",
    options: [
      {
        id: "b230661c-005c-44a9-9ef4-a0e97081aa59",
        text: "X -> Z"
      },
      {
        id: "03b11e3c-5364-435f-8ea9-f5dc519593de",
        text: "Z -> X"
      },
      {
        id: "6d2140c9-0086-4f57-a116-370398ec7341",
        text: "Y -> X"
      },
      {
        id: "b5761e98-5273-4c1b-a7f5-8441422d2d1d",
        text: "XZ -> Y"
      },
      {
        id: "d105ab5f-b914-4464-b85f-f62e170201be",
        text: "Егер кестеде сыртқы кілттер мүлдем болмаса"
      },
      {
        id: "9d82e415-e873-46ff-9c9f-ab7b1921fa1f",
        text: "Артық деректер мен аномалияларды азайту"
      },
      {
        id: "4db95e2d-4d10-44a8-a4c4-ee5e22f2fb41",
        text: "Транзакциялардың сәтсіз орындалуы"
      },
      {
        id: "42a08099-9460-4477-ad93-1b33a731d4ec",
        text: "Кандидаттық кілттер мүлдем болмауы тиіс"
      }
    ],
    correctOptionIds: [
      "b230661c-005c-44a9-9ef4-a0e97081aa59"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b74",
    subjectId: SubjectId.DB,
    text: "Егер X -> Y болса, Армстронг бойынша XZ -> YZ ережесі қалай аталады?",
    options: [
      {
        id: "db-t10-b74-op1",
        text: "Аугментация (Augmentation)"
      },
      {
        id: "db-t10-b74-op2",
        text: "Рефлексивтілік (Reflexivity)"
      },
      {
        id: "db-t10-b74-op3",
        text: "Транзитивтілік (Transitivity)"
      },
      {
        id: "db-t10-b74-op4",
        text: "Ыдырату (Decomposition)"
      },
      {
        id: "db-t10-b74-op5",
        text: "X Y-ға тең емес"
      },
      {
        id: "db-t10-b74-op6",
        text: "Деректердің артықшылығын жою және жаңарту, қосу, өшіру аномалияларын болдырмау"
      },
      {
        id: "db-t10-b74-op7",
        text: "Ең аз жазбасы бар кесте"
      },
      {
        id: "db-t10-b74-op8",
        text: "Транзитивті тәуелділік"
      }
    ],
    correctOptionIds: [
      "db-t10-b74-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b75",
    subjectId: SubjectId.DB,
    text: "Егер X -> Y болса және Y ⊆ X болса, бұл қандай функционалдық тәуелділік?",
    options: [
      {
        id: "db-t10-b75-op1",
        text: "Тривиалды тәуелділік"
      },
      {
        id: "db-t10-b75-op2",
        text: "Бейтривиалды тәуелділік"
      },
      {
        id: "db-t10-b75-op3",
        text: "Жартылай тәуелділік"
      },
      {
        id: "db-t10-b75-op4",
        text: "Транзитивті тәуелділік"
      },
      {
        id: "db-t10-b75-op5",
        text: "Жаңа С бағанын өшіру арқылы"
      },
      {
        id: "db-t10-b75-op6",
        text: "Бір дерек бірнеше жерде қайталанғандықтан, оны өзгерткен кезде барлық жолдарда бірдей жаңартпаса, деректердің қайшылыққа (inconsistency) ұшырауы"
      },
      {
        id: "db-t10-b75-op7",
        text: "BCNF"
      },
      {
        id: "db-t10-b75-op8",
        text: "Суперкілт"
      }
    ],
    correctOptionIds: [
      "db-t10-b75-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b76",
    subjectId: SubjectId.DB,
    text: "Нормализациялау теориясындағы Chase алгоритмі не үшін қолданылады?",
    options: [
      {
        id: "db-t10-b76-op1",
        text: "Ыдыратудың lossless join (жоғалтусыз біріктіру) қасиетін тексеру үшін"
      },
      {
        id: "db-t10-b76-op2",
        text: "Функционалдық тәуелділіктердің санын көбейту үшін"
      },
      {
        id: "db-t10-b76-op3",
        text: "Кестедегі индекстерді оңтайландыру үшін"
      },
      {
        id: "db-t10-b76-op4",
        text: "Транзакцияларды бұғаттау үшін"
      },
      {
        id: "db-t10-b76-op5",
        text: "Егер X -> Y және Y -> Z болса, онда X -> Z орындалады"
      },
      {
        id: "db-t10-b76-op6",
        text: "Сыртқы кілттің байланысын жоя алмау"
      },
      {
        id: "db-t10-b76-op7",
        text: "Егер X -> Y болса, онда Y -> X орындалады"
      },
      {
        id: "db-t10-b76-op8",
        text: "Онда екі немесе одан да көп кесте біріктірілсе"
      }
    ],
    correctOptionIds: [
      "db-t10-b76-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7d23cbbb-2c3a-4be6-80c4-025988a07a51",
    subjectId: SubjectId.DB,
    text: "3NF-ке келтіру кезінде әрқашан lossless join және dependency preservation қасиеттеріне бірдей қол жеткізуге болады ма?",
    options: [
      {
        id: "6e0b0614-57a8-4b02-a419-40a02ee43803",
        text: "Иә, 3NF-те екі қасиет те әрқашан сақталады"
      },
      {
        id: "49421709-3a8b-47f3-9a88-27d72b3a67b8",
        text: "Жоқ, ешқашан сақталмайды"
      },
      {
        id: "dea2b1a2-117e-4357-adf5-a9e143900d0a",
        text: "Тек сандық кестелерде ғана сақталады"
      },
      {
        id: "f6a91e94-376b-4a82-968b-0053bcdb8255",
        text: "Тек BCNF-ке өткенде ғана сақталады"
      },
      {
        id: "13fa5b5a-1d69-49c3-b647-249ed3ef38f0",
        text: "Атрибут барлық кілтке тәуелді"
      },
      {
        id: "18e6f7d4-91b7-4764-8951-8f9fe87f8856",
        text: "Тек сыртқы кілттері бар кесте"
      },
      {
        id: "b883ccf9-5b99-4a8b-9504-d0a5d60dad95",
        text: "Қосымша ақпаратсыз жаңа дерек қосу мүмкін емес"
      },
      {
        id: "0d060325-3d97-474a-829d-222b741f0b0f",
        text: "Суррогаттық кілт"
      }
    ],
    correctOptionIds: [
      "6e0b0614-57a8-4b02-a419-40a02ee43803"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "be33c451-5c10-4945-a12a-7f3bf8bf073e",
    subjectId: SubjectId.DB,
    text: "BCNF-ке келтіру кезінде әрқашан lossless join және dependency preservation қасиеттеріне бірдей қол жеткізуге болады ма?",
    options: [
      {
        id: "761fc55a-091a-4eb1-9956-6ec8ab4112d7",
        text: "Жоқ, BCNF-те кейде функционалдық тәуелділікті сақтау мүмкін болмайды (trade-off)"
      },
      {
        id: "7f5d22c3-b09f-4488-869b-2ac2143cf670",
        text: "Иә, BCNF әрқашан екі қасиетті де толық сақтайды"
      },
      {
        id: "54ee4990-646a-44ff-8c90-e5211a8683cf",
        text: "BCNF-те тек қана dependency preservation орындалады"
      },
      {
        id: "76382dac-b14c-44fd-b7e9-0385299918fa",
        text: "Ешқандай қасиет сақталмайды"
      },
      {
        id: "41c34f98-56ec-4d1a-9a3f-12aa0a8c4ab0",
        text: "Деректердің артықшылығын жою және жаңарту, қосу, өшіру аномалияларын болдырмау"
      },
      {
        id: "b65faccc-19e6-4d8e-86be-34b964d2d35e",
        text: "Оларды бір кестеге біріктіру арқылы"
      },
      {
        id: "f494aa09-f24a-4587-88a3-d5b8f201cb8a",
        text: "Транзитивті тәуелділіктер"
      },
      {
        id: "237679e9-a51f-4d14-bebb-3c56e6c89909",
        text: "2NF + транзитивті тәуелділік жоқ"
      }
    ],
    correctOptionIds: [
      "761fc55a-091a-4eb1-9956-6ec8ab4112d7"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b77",
    subjectId: SubjectId.DB,
    text: "Функционалдық тәуелділікті сақтау (Dependency Preservation) неліктен маңызды?",
    options: [
      {
        id: "db-t10-b77-op1",
        text: "Деректерді қосқанда немесе өзгерткенде кестелерді JOIN жасамай-ақ, тұтастық шектеулерін тез тексеру үшін"
      },
      {
        id: "db-t10-b77-op2",
        text: "Индекстерді жылдам оқу үшін"
      },
      {
        id: "db-t10-b77-op3",
        text: "Кестелердің санын азайту үшін"
      },
      {
        id: "db-t10-b77-op4",
        text: "Орын үнемдеу үшін"
      },
      {
        id: "db-t10-b77-op5",
        text: "Транзитивті қалыпты форма"
      },
      {
        id: "db-t10-b77-op6",
        text: "Барлық атрибуттардың мәндері атомарлы (бөлінбейтін) болуы және қайталанатын топтардың болмауы"
      },
      {
        id: "db-t10-b77-op7",
        text: "Деректерді шифрлау"
      },
      {
        id: "db-t10-b77-op8",
        text: "Бос жиын"
      }
    ],
    correctOptionIds: [
      "db-t10-b77-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b78",
    subjectId: SubjectId.DB,
    text: "Көпмәнді тәуелділіктің (MVD) болуы кестеде қандай негізгі аномалия туғызады?",
    options: [
      {
        id: "db-t10-b78-op1",
        text: "Деректердің тым көп қайталануын (redundancy) және сәйкессіздікті"
      },
      {
        id: "db-t10-b78-op2",
        text: "Сұраныстардың мүлдем орындалмай қалуын"
      },
      {
        id: "db-t10-b78-op3",
        text: "Бастапқы кілттің автоматты өшіп қалуын"
      },
      {
        id: "db-t10-b78-op4",
        text: "Кестеде бос ұяшықтардың көбеюін"
      },
      {
        id: "db-t10-b78-op5",
        text: "Кесте 2NF-те болуы және кілттік емес атрибуттардың арасында транзитивті тәуелділік болмауы тиіс"
      },
      {
        id: "db-t10-b78-op6",
        text: "Бір дерек бірнеше жерде қайталанғандықтан, оны өзгерткен кезде барлық жолдарда бірдей жаңартпаса, деректердің қайшылыққа (inconsistency) ұшырауы"
      },
      {
        id: "db-t10-b78-op7",
        text: "Кесте құрылымын жоюды білдіреді"
      },
      {
        id: "db-t10-b78-op8",
        text: "Логикалық жобалау кезеңінде"
      }
    ],
    correctOptionIds: [
      "db-t10-b78-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b79",
    subjectId: SubjectId.DB,
    text: "4NF-ке келтіру үшін қандай әрекет орындалады?",
    options: [
      {
        id: "db-t10-b79-op1",
        text: "Тәуелсіз көпмәнді тәуелділіктерді бөлек кестелерге ыдырату"
      },
      {
        id: "db-t10-b79-op2",
        text: "Транзитивті тәуелділікті жою"
      },
      {
        id: "db-t10-b79-op3",
        text: "Кестелерді біріктіру"
      },
      {
        id: "db-t10-b79-op4",
        text: "Кестеге жаңа бірегей индекс қосу"
      },
      {
        id: "db-t10-b79-op5",
        text: "Артық деректерді азайту процесі"
      },
      {
        id: "db-t10-b79-op6",
        text: "Кестедегі NULL мәндерді табу үшін"
      },
      {
        id: "db-t10-b79-op7",
        text: "Дерек жою мүмкін емес"
      },
      {
        id: "db-t10-b79-op8",
        text: "X Y-ға тең емес"
      }
    ],
    correctOptionIds: [
      "db-t10-b79-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b80",
    subjectId: SubjectId.DB,
    text: "Кандидаттық кілттердің саны кестеде бірнешеу болуы мүмкін бе?",
    options: [
      {
        id: "db-t10-b80-op1",
        text: "Иә, бірақ бастапқы кілт тек біреу ғана болады"
      },
      {
        id: "db-t10-b80-op2",
        text: "Жоқ, тек біреу ғана болуы тиіс"
      },
      {
        id: "db-t10-b80-op3",
        text: "Тек сандық кестелерде ғана бірнешеу болады"
      },
      {
        id: "db-t10-b80-op4",
        text: "Бастапқы кілтпен бірге ең көп дегенде екеу болады"
      },
      {
        id: "db-t10-b80-op5",
        text: "Егер X -> Y және Y -> Z болса, онда X -> Z орындалады"
      },
      {
        id: "db-t10-b80-op6",
        text: "Кілтсіз тәуелділік"
      },
      {
        id: "db-t10-b80-op7",
        text: "Суперкілт"
      },
      {
        id: "db-t10-b80-op8",
        text: "Транзитивті тәуелділік тудыратын (кілттік емес атрибутқа тәуелді) атрибуттарды жеке кестеге шығару"
      }
    ],
    correctOptionIds: [
      "db-t10-b80-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b81",
    subjectId: SubjectId.DB,
    text: "Superkey мен Candidate Key арасындағы қатынасты қалай сипаттауға болады?",
    options: [
      {
        id: "db-t10-b81-op1",
        text: "Барлық кандидаттық кілттер суперкілт болып табылады, бірақ барлық суперкілттер кандидаттық кілт емес"
      },
      {
        id: "db-t10-b81-op2",
        text: "Барлық суперкілттер кандидаттық кілт болады"
      },
      {
        id: "db-t10-b81-op3",
        text: "Олардың арасында ешқандай байланыс жоқ"
      },
      {
        id: "db-t10-b81-op4",
        text: "Кандидаттық кілт әрқашан суперкілттен үлкен болады"
      },
      {
        id: "db-t10-b81-op5",
        text: "Сыртқы атрибуттар"
      },
      {
        id: "db-t10-b81-op6",
        text: "Кестеде тек INNER JOIN қолданылса"
      },
      {
        id: "db-t10-b81-op7",
        text: "Кез келген атрибут"
      },
      {
        id: "db-t10-b81-op8",
        text: "Егер X -> Y және X -> Z болса, онда X -> YZ орындалады"
      }
    ],
    correctOptionIds: [
      "db-t10-b81-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b82",
    subjectId: SubjectId.DB,
    text: "Реляциялық модельде кестенің әрбір жолы (Row) қалай аталады?",
    options: [
      {
        id: "db-t10-b82-op1",
        text: "Кортеж (Tuple)"
      },
      {
        id: "db-t10-b82-op2",
        text: "Атрибут (Attribute)"
      },
      {
        id: "db-t10-b82-op3",
        text: "Домен (Domain)"
      },
      {
        id: "db-t10-b82-op4",
        text: "Қатынас (Relation)"
      },
      {
        id: "db-t10-b82-op5",
        text: "X пен Y бірдей бағандар болса"
      },
      {
        id: "db-t10-b82-op6",
        text: "Y атрибуты құрама X кілтінің тек бір бөлігіне ғана тәуелді болса"
      },
      {
        id: "db-t10-b82-op7",
        text: "Транзитивті тәуелділік"
      },
      {
        id: "db-t10-b82-op8",
        text: "Транзитивті тәуелділіктерді жою"
      }
    ],
    correctOptionIds: [
      "db-t10-b82-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b83",
    subjectId: SubjectId.DB,
    text: "Реляциялық модельде кестенің бағаны (Column) қалай аталады?",
    options: [
      {
        id: "db-t10-b83-op1",
        text: "Атрибут (Attribute)"
      },
      {
        id: "db-t10-b83-op2",
        text: "Кортеж (Tuple)"
      },
      {
        id: "db-t10-b83-op3",
        text: "Домен (Domain)"
      },
      {
        id: "db-t10-b83-op4",
        text: "Схема (Schema)"
      },
      {
        id: "db-t10-b83-op5",
        text: "Егер кестеде бірнеше қиылысатын құрама кандидаттық кілттер болса"
      },
      {
        id: "db-t10-b83-op6",
        text: "Минималды кілт"
      },
      {
        id: "db-t10-b83-op7",
        text: "Тек бір бағаннан тұратын бастапқы кілт"
      },
      {
        id: "db-t10-b83-op8",
        text: "Кестенің ең бірінші бағаны"
      }
    ],
    correctOptionIds: [
      "db-t10-b83-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b84",
    subjectId: SubjectId.DB,
    text: "Нормализация процесін жобалаудың қай кезеңінде орындаған дұрыс?",
    options: [
      {
        id: "db-t10-b84-op1",
        text: "Логикалық жобалау кезеңінде"
      },
      {
        id: "db-t10-b84-op2",
        text: "Концептуалды жобалау кезеңінде"
      },
      {
        id: "db-t10-b84-op3",
        text: "Физикалық жобалау кезеңінде"
      },
      {
        id: "db-t10-b84-op4",
        text: "Талаптарды жинау кезеңінде"
      },
      {
        id: "db-t10-b84-op5",
        text: "Иә, бірақ бастапқы кілт тек біреу ғана болады"
      },
      {
        id: "db-t10-b84-op6",
        text: "Егер кестеде бірнеше қиылысатын құрама кандидаттық кілттер болса"
      },
      {
        id: "db-t10-b84-op7",
        text: "Y мәні X-ке функционалды тәуелді"
      },
      {
        id: "db-t10-b84-op8",
        text: "Ыдырату (Decomposition)"
      }
    ],
    correctOptionIds: [
      "db-t10-b84-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "df8f8088-aa54-4092-a257-4ee77954e4ab",
    subjectId: SubjectId.DB,
    text: "Егер кестеде кандидаттық кілттер құрамына кіретін атрибуттар ғана болса, мұндай атрибуттар қалай аталады?",
    options: [
      {
        id: "48f03d0f-6fce-412c-a6d4-f921c7fa7fb9",
        text: "Біріншілік (Prime) атрибуттар"
      },
      {
        id: "3099daaf-c99c-4d6f-bcd3-cac4c324987a",
        text: "Екіншілік атрибуттар"
      },
      {
        id: "c957250d-b6c5-46ff-a9db-f78bf7c9019d",
        text: "Сыртқы атрибуттар"
      },
      {
        id: "e4b6eafa-f40e-452d-88e3-1aa988c5ae3a",
        text: "Туынды атрибуттар"
      },
      {
        id: "604c649d-fc92-4cf6-ba7e-fb5946e3d422",
        text: "Жаңа бағандар қосуға (alter table)"
      },
      {
        id: "56bece5d-cd7c-4ccc-9ce3-6febce43fe17",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "8d18ce75-3e82-47db-a037-b37045e19527",
        text: "Армстронг аксиомаларының көмегімен F жиынтығынан шығарылатын барлық функционалдық тәуелділіктер жиыны"
      },
      {
        id: "5dff8bbd-c3cf-47c0-b3cf-87d1646b7d25",
        text: "Y сыртқы кілт болса"
      }
    ],
    correctOptionIds: [
      "48f03d0f-6fce-412c-a6d4-f921c7fa7fb9"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b85",
    subjectId: SubjectId.DB,
    text: "Студенттер кестесінде (ЖСН, Тегі, Аты, Топ_ID) кандидаттық кілт қайсысы?",
    options: [
      {
        id: "db-t10-b85-op1",
        text: "ЖСН"
      },
      {
        id: "db-t10-b85-op2",
        text: "Тегі"
      },
      {
        id: "db-t10-b85-op3",
        text: "Топ_ID"
      },
      {
        id: "db-t10-b85-op4",
        text: "Аты"
      },
      {
        id: "db-t10-b85-op5",
        text: "Кестенің ең бірінші бағаны"
      },
      {
        id: "db-t10-b85-op6",
        text: "Кестеде сыртқы кілттер (FK) болмауы тиіс"
      },
      {
        id: "db-t10-b85-op7",
        text: "Кестені физикалық файлдарға бөлу үшін"
      },
      {
        id: "db-t10-b85-op8",
        text: "Тек бір ғана (егер олар көп болса, оларды жеке кестелерге бөлу керек)"
      }
    ],
    correctOptionIds: [
      "db-t10-b85-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b86",
    subjectId: SubjectId.DB,
    text: "Егер A -> B функционалдық тәуелділігі орындалса, бұл нені білдіреді?",
    options: [
      {
        id: "db-t10-b86-op1",
        text: "А-ның әрбір мәніне В-ның тек бір ғана мәні сәйкес келеді"
      },
      {
        id: "db-t10-b86-op2",
        text: "А және В мәндері әрқашан тең болады"
      },
      {
        id: "db-t10-b86-op3",
        text: "В бастапқы кілт болып табылады"
      },
      {
        id: "db-t10-b86-op4",
        text: "А мәні өзгергенде В өзгермейді"
      },
      {
        id: "db-t10-b86-op5",
        text: "BCNF-те транзитивті тәуелділіктерге рұқсат беріледі"
      },
      {
        id: "db-t10-b86-op6",
        text: "Барлық суперкілттер кандидаттық кілт болады"
      },
      {
        id: "db-t10-b86-op7",
        text: "Егер Y ⊆ X болса, онда X -> Y орындалады"
      },
      {
        id: "db-t10-b86-op8",
        text: "Кестелерді бөлу"
      }
    ],
    correctOptionIds: [
      "db-t10-b86-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b87",
    subjectId: SubjectId.DB,
    text: "Армстронг аксиомаларының толықтығы (Completeness of Armstrong's Axioms) нені білдіреді?",
    options: [
      {
        id: "db-t10-b87-op1",
        text: "F жиынтығынан логикалық түрде шығатын кез келген FD-ны осы аксиомалар арқылы дәлелдеуге болатындығын"
      },
      {
        id: "db-t10-b87-op2",
        text: "Аксиомалардың тек сандар үшін орындалатынын"
      },
      {
        id: "db-t10-b87-op3",
        text: "Ешқандай жаңа функционалдық тәуелділік құру мүмкін еместігін"
      },
      {
        id: "db-t10-b87-op4",
        text: "Кестенің толық нормализацияланғанын"
      },
      {
        id: "db-t10-b87-op5",
        text: "JOIN операторларының көбеюіне байланысты күрделі оқу сұраныстарының баяулауы"
      },
      {
        id: "db-t10-b87-op6",
        text: "А мәні өзгергенде В өзгермейді"
      },
      {
        id: "db-t10-b87-op7",
        text: "Бөлуге болатын мән"
      },
      {
        id: "db-t10-b87-op8",
        text: "Сыртқы кілттің орындалуын тексеру үшін"
      }
    ],
    correctOptionIds: [
      "db-t10-b87-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b88",
    subjectId: SubjectId.DB,
    text: "Армстронг аксиомаларының дұрыстығы (Soundness of Armstrong's Axioms) нені білдіреді?",
    options: [
      {
        id: "db-t10-b88-op1",
        text: "Осы аксиомалар арқылы шығарылған кез келген FD-ның ақиқат болатындығын"
      },
      {
        id: "db-t10-b88-op2",
        text: "Аксиомалардың қатесіз жазылуын"
      },
      {
        id: "db-t10-b88-op3",
        text: "Дерекқордың оңтайлы жұмыс істейтінін"
      },
      {
        id: "db-t10-b88-op4",
        text: "Кесте құрылымының өзгермейтінін"
      },
      {
        id: "db-t10-b88-op5",
        text: "Физикалық жобалау кезеңінде"
      },
      {
        id: "db-t10-b88-op6",
        text: "Кестедегі индекстерді азайту"
      },
      {
        id: "db-t10-b88-op7",
        text: "Функционалдық тәуелділіктердің санын көбейту үшін"
      },
      {
        id: "db-t10-b88-op8",
        text: "Тек бір бағаннан тұратын бастапқы кілт"
      }
    ],
    correctOptionIds: [
      "db-t10-b88-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b89",
    subjectId: SubjectId.DB,
    text: "BCNF анықтамасын алғаш рет кім ұсынды?",
    options: [
      {
        id: "db-t10-b89-op1",
        text: "Рэймонд Бойс және Эдгар Кодд (Raymond F. Boyce and Edgar F. Codd)"
      },
      {
        id: "db-t10-b89-op2",
        text: "Питер Чен"
      },
      {
        id: "db-t10-b89-op3",
        text: "Алан Тьюринг"
      },
      {
        id: "db-t10-b89-op4",
        text: "Дональд Кнут"
      },
      {
        id: "db-t10-b89-op5",
        text: "Транзитивті тәуелділіктердің болмауы"
      },
      {
        id: "db-t10-b89-op6",
        text: "Оның барлық бағандары тек сандық типті болса"
      },
      {
        id: "db-t10-b89-op7",
        text: "Тек сандық кестелерде ғана бірнешеу болады"
      },
      {
        id: "db-t10-b89-op8",
        text: "Кестелерді біріктіру"
      }
    ],
    correctOptionIds: [
      "db-t10-b89-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t10-b90",
    subjectId: SubjectId.DB,
    text: "5NF нормализациясында Join Dependency неше кестені біріктіруді қарастырады?",
    options: [
      {
        id: "db-t10-b90-op1",
        text: "Үш немесе одан да көп кестелерді"
      },
      {
        id: "db-t10-b90-op2",
        text: "Тек екі кестені ғана"
      },
      {
        id: "db-t10-b90-op3",
        text: "Кестелердің шексіз санын"
      },
      {
        id: "db-t10-b90-op4",
        text: "Бір кестенің өз-өзімен бірігуін"
      },
      {
        id: "db-t10-b90-op5",
        text: "Транзитивті тәуелділіктерді толығымен жою"
      },
      {
        id: "db-t10-b90-op6",
        text: "Бастапқы кілт (Primary Key)"
      },
      {
        id: "db-t10-b90-op7",
        text: "Кестедегі барлық индекстерді жою"
      },
      {
        id: "db-t10-b90-op8",
        text: "Жоқ, BCNF-те кейде функционалдық тәуелділікті сақтау мүмкін болмайды (trade-off)"
      }
    ],
    correctOptionIds: [
      "db-t10-b90-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Нормализация",
    difficulty: Difficulty.MEDIUM
  }
];
