import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// db / Кілттер мен байланыстар
export const db5KeysAndRelationshipsQuestions : Question[] = [
  {
    id: "db-t05-b01",
    subjectId: SubjectId.DB,
    text: "ON DELETE SET NULL не істейді?",
    options: [
      {
        id: "db-t05-b01-op1",
        text: "Жазбаларды жояды"
      },
      {
        id: "db-t05-b01-op2",
        text: "Қатені қайтарады"
      },
      {
        id: "db-t05-b01-op3",
        text: "Ештеңе істемейді"
      },
      {
        id: "db-t05-b01-op4",
        text: "Ата-аналық жазба жойылғанда FK-ға NULL қояды"
      },
      {
        id: "db-t05-b01-op5",
        text: "Ата-аналық жазба жойылғанда бала жазбаны автоматты түрде өшіреді"
      },
      {
        id: "db-t05-b01-op6",
        text: "Ата-аналық жазба жойылғанда бала жазбаның мәнін әдепкі (DEFAULT) мәнге ауыстырады"
      },
      {
        id: "db-t05-b01-op7",
        text: "Ата-аналық жазбаны жоюға тыйым салып, қате шығарады"
      },
      {
        id: "db-t05-b01-op8",
        text: "Бала жазбаны жаңартып, ата-аналық кестеге сілтеме жасайтын басқа жазбаны іздейді"
      }
    ],
    correctOptionIds: [
      "db-t05-b01-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b02",
    subjectId: SubjectId.DB,
    text: "Natural Key дегеніміз не?",
    options: [
      {
        id: "db-t05-b02-op1",
        text: "Жүйе құратын кілт"
      },
      {
        id: "db-t05-b02-op2",
        text: "Индекс"
      },
      {
        id: "db-t05-b02-op3",
        text: "Foreign Key"
      },
      {
        id: "db-t05-b02-op4",
        text: "Нақты мәні бар, бизнес логикадан алынған кілт"
      },
      {
        id: "db-t05-b02-op5",
        text: "Кестеге жүйелі түрде автоматты қосылатын бірегей идентификатор"
      },
      {
        id: "db-t05-b02-op6",
        text: "Басқа кестемен байланыс орнату үшін қолданылатын сыртқы сілтеме"
      },
      {
        id: "db-t05-b02-op7",
        text: "Деректерді іздеу жылдамдығын арттыру мақсатында құрылған құрылым"
      },
      {
        id: "db-t05-b02-op8",
        text: "Ешқандай бизнес мәні жоқ, тек техникалық қажеттілік үшін жасалған кілт"
      }
    ],
    correctOptionIds: [
      "db-t05-b02-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b03",
    subjectId: SubjectId.DB,
    text: "Composite Key (құрама кілт) дегеніміз не?",
    options: [
      {
        id: "db-t05-b03-op1",
        text: "Foreign Key"
      },
      {
        id: "db-t05-b03-op2",
        text: "Бір атрибуттан тұратын кілт"
      },
      {
        id: "db-t05-b03-op3",
        text: "Индекс"
      },
      {
        id: "db-t05-b03-op4",
        text: "Екі немесе одан көп атрибуттан тұратын кілт"
      },
      {
        id: "db-t05-b03-op5",
        text: "Кестедегі барлық жазбаларды бірегей анықтайтын кез келген бір баған"
      },
      {
        id: "db-t05-b03-op6",
        text: "Басқа кестемен байланыс орнату үшін қолданылатын арнайы атрибут"
      },
      {
        id: "db-t05-b03-op7",
        text: "Деректерді іздеу жылдамдығын арттыру мақсатында құрылатын құрылым"
      },
      {
        id: "db-t05-b03-op8",
        text: "Жүйе тарапынан автоматты түрде генерацияланатын реттік нөмір"
      }
    ],
    correctOptionIds: [
      "db-t05-b03-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b04",
    subjectId: SubjectId.DB,
    text: "Unique Key мен Primary Key айырмашылығы не?",
    options: [
      {
        id: "db-t05-b04-op1",
        text: "PK NULL болуы мүмкін"
      },
      {
        id: "db-t05-b04-op2",
        text: "Айырмашылық жоқ"
      },
      {
        id: "db-t05-b04-op3",
        text: "Unique Key бірегей емес"
      },
      {
        id: "db-t05-b04-op4",
        text: "Unique Key NULL болуы мүмкін, бірақ PK мүмкін емес"
      },
      {
        id: "db-t05-b04-op5",
        text: "Primary Key бірнеше бағаннан тұруы мүмкін, ал Unique Key тек бір бағаннан тұрады"
      },
      {
        id: "db-t05-b04-op6",
        text: "Unique Key дерекқорда автоматты түрде индекстеледі, ал Primary Key индекстелмейді"
      },
      {
        id: "db-t05-b04-op7",
        text: "Бір кестеде бірнеше Primary Key болуы мүмкін, бірақ Unique Key тек біреу ғана болады"
      },
      {
        id: "db-t05-b04-op8",
        text: "Primary Key сыртқы кілт (Foreign Key) ретінде қолданыла алмайды, ал Unique Key қолданыла алады"
      }
    ],
    correctOptionIds: [
      "db-t05-b04-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b05",
    subjectId: SubjectId.DB,
    text: "Foreign Key NULL бола ала ма?",
    options: [
      {
        id: "db-t05-b05-op1",
        text: "Иә, егер байланыс міндетті болмаса"
      },
      {
        id: "db-t05-b05-op2",
        text: "Ешқашан жоқ"
      },
      {
        id: "db-t05-b05-op3",
        text: "Әрқашан NULL"
      },
      {
        id: "db-t05-b05-op4",
        text: "Белгісіз"
      },
      {
        id: "db-t05-b05-op5",
        text: "Жоқ, тек Primary Key NULL болуы мүмкін"
      },
      {
        id: "db-t05-b05-op6",
        text: "Иә, бірақ тек бір жазбада ғана рұқсат етіледі"
      },
      {
        id: "db-t05-b05-op7",
        text: "Жоқ, егер кестеде басқа да кілттер болса"
      },
      {
        id: "db-t05-b05-op8",
        text: "Иә, бірақ дерекқорды қайта іске қосу керек"
      }
    ],
    correctOptionIds: [
      "db-t05-b05-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b06",
    subjectId: SubjectId.DB,
    text: "ON DELETE CASCADE не істейді?",
    options: [
      {
        id: "db-t05-b06-op1",
        text: "NULL қояды"
      },
      {
        id: "db-t05-b06-op2",
        text: "Ата-аналық жазба жойылғанда байланысты жазбаларды да жояды"
      },
      {
        id: "db-t05-b06-op3",
        text: "Ештеңе істемейді"
      },
      {
        id: "db-t05-b06-op4",
        text: "Жоюды болдырмайды"
      },
      {
        id: "db-t05-b06-op5",
        text: "Ата-аналық жазба жойылғанда байланысты жазбаларды автоматты түрде жаңартады"
      },
      {
        id: "db-t05-b06-op6",
        text: "Байланысты жазбаларды уақытша архивке көшіреді"
      },
      {
        id: "db-t05-b06-op7",
        text: "Ата-аналық жазбаны жоймай, тек байланысты жазбаларды ғана өшіреді"
      },
      {
        id: "db-t05-b06-op8",
        text: "Жою операциясын орындамас бұрын пайдаланушыдан қосымша растау сұрайды"
      }
    ],
    correctOptionIds: [
      "db-t05-b06-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b07",
    subjectId: SubjectId.DB,
    text: "Primary Key қандай қызмет атқарады?",
    options: [
      {
        id: "db-t05-b07-op1",
        text: "Деректерді шифрлау"
      },
      {
        id: "db-t05-b07-op2",
        text: "Кестедегі жазбаны бірегей анықтау"
      },
      {
        id: "db-t05-b07-op3",
        text: "Сұраныс жылдамдығын арттыру"
      },
      {
        id: "db-t05-b07-op4",
        text: "Деректерді жою"
      },
      {
        id: "db-t05-b07-op5",
        text: "Кестелер арасындағы сыртқы байланысты құру"
      },
      {
        id: "db-t05-b07-op6",
        text: "Деректерді сұрыптау тәртібін автоматты түрде орнату"
      },
      {
        id: "db-t05-b07-op7",
        text: "Кестедегі бос жолдарды (NULL) толтыру"
      },
      {
        id: "db-t05-b07-op8",
        text: "Бағандардағы деректердің типін тексеру"
      }
    ],
    correctOptionIds: [
      "db-t05-b07-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b08",
    subjectId: SubjectId.DB,
    text: "Primary Key NULL бола ала ма?",
    options: [
      {
        id: "db-t05-b08-op1",
        text: "Кейде"
      },
      {
        id: "db-t05-b08-op2",
        text: "Жоқ, әрқашан NOT NULL"
      },
      {
        id: "db-t05-b08-op3",
        text: "Иә"
      },
      {
        id: "db-t05-b08-op4",
        text: "Белгісіз"
      },
      {
        id: "db-t05-b08-op5",
        text: "Иә, егер кестеде басқа кілт болса"
      },
      {
        id: "db-t05-b08-op6",
        text: "Тек бір жол үшін ғана рұқсат етіледі"
      },
      {
        id: "db-t05-b08-op7",
        text: "Иә, бірақ тек сандық бағандарда"
      },
      {
        id: "db-t05-b08-op8",
        text: "Жоқ, тек Foreign Key үшін ғана тыйым салынған"
      }
    ],
    correctOptionIds: [
      "db-t05-b08-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b09",
    subjectId: SubjectId.DB,
    text: "Alternate Key дегеніміз не?",
    options: [
      {
        id: "db-t05-b09-op1",
        text: "Composite Key"
      },
      {
        id: "db-t05-b09-op2",
        text: "Primary Key болып таңдалмаған кандидат кілт"
      },
      {
        id: "db-t05-b09-op3",
        text: "Foreign Key"
      },
      {
        id: "db-t05-b09-op4",
        text: "Суперкілт"
      },
      {
        id: "db-t05-b09-op5",
        text: "Кестедегі жазбаларды бір-бірімен байланыстыратын сыртқы кілт"
      },
      {
        id: "db-t05-b09-op6",
        text: "Бірнеше бағаннан тұратын және бірегейлікті қамтамасыз ететін құрама кілт"
      },
      {
        id: "db-t05-b09-op7",
        text: "Деректерді сұрыптау үшін қолданылатын индекстелген өріс"
      },
      {
        id: "db-t05-b09-op8",
        text: "NULL мәндерін қабылдай алатын кез келген кандидат кілт"
      }
    ],
    correctOptionIds: [
      "db-t05-b09-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b10",
    subjectId: SubjectId.DB,
    text: "Foreign Key қандай қызмет атқарады?",
    options: [
      {
        id: "db-t05-b10-op1",
        text: "Индекс құру"
      },
      {
        id: "db-t05-b10-op2",
        text: "Басқа кестемен байланыс орнату"
      },
      {
        id: "db-t05-b10-op3",
        text: "Кестедегі жазбаны анықтау"
      },
      {
        id: "db-t05-b10-op4",
        text: "Деректерді шифрлау"
      },
      {
        id: "db-t05-b10-op5",
        text: "Кестедегі жазбалардың бірегейлігін қамтамасыз ету"
      },
      {
        id: "db-t05-b10-op6",
        text: "Деректерді сақтау көлемін азайту"
      },
      {
        id: "db-t05-b10-op7",
        text: "Кестеге жаңа баған қосу"
      },
      {
        id: "db-t05-b10-op8",
        text: "Сұраныс орындау жылдамдығын арттыру"
      }
    ],
    correctOptionIds: [
      "db-t05-b10-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b11",
    subjectId: SubjectId.DB,
    text: "Natural Key мысалы:",
    options: [
      {
        id: "db-t05-b11-op1",
        text: "Auto-increment ID"
      },
      {
        id: "db-t05-b11-op2",
        text: "ИИН"
      },
      {
        id: "db-t05-b11-op3",
        text: "UUID"
      },
      {
        id: "db-t05-b11-op4",
        text: "Sequence"
      },
      {
        id: "db-t05-b11-op5",
        text: "Жүйелік реттік нөмір"
      },
      {
        id: "db-t05-b11-op6",
        text: "Кестедегі жолдың физикалық мекенжайы"
      },
      {
        id: "db-t05-b11-op7",
        text: "MD5 хэш мәні"
      },
      {
        id: "db-t05-b11-op8",
        text: "Қолданушы таңдаған логин"
      }
    ],
    correctOptionIds: [
      "db-t05-b11-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b12",
    subjectId: SubjectId.DB,
    text: "Surrogate Key дегеніміз не?",
    options: [
      {
        id: "db-t05-b12-op1",
        text: "Жүйе автоматты құратын мәнсіз бірегей кілт"
      },
      {
        id: "db-t05-b12-op2",
        text: "Composite Key"
      },
      {
        id: "db-t05-b12-op3",
        text: "Бизнес мәні бар кілт"
      },
      {
        id: "db-t05-b12-op4",
        text: "Foreign Key"
      },
      {
        id: "db-t05-b12-op5",
        text: "Бірнеше бағаннан тұратын құрама кілт"
      },
      {
        id: "db-t05-b12-op6",
        text: "Кестелер арасындағы байланысты орнататын сыртқы кілт"
      },
      {
        id: "db-t05-b12-op7",
        text: "Пайдаланушы қолмен енгізетін бизнес-логикаға негізделген табиғи кілт"
      },
      {
        id: "db-t05-b12-op8",
        text: "Деректерді іздеуді жылдамдату үшін құрылатын индекстік кілт"
      }
    ],
    correctOptionIds: [
      "db-t05-b12-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b13",
    subjectId: SubjectId.DB,
    text: "Сыртқы кілт (Foreign Key) реляциялық модельде қандай тұтастықты қамтамасыз етеді?",
    options: [
      {
        id: "db-t05-b13-op1",
        text: "Сілтемелік тұтастықты (Referential Integrity)"
      },
      {
        id: "db-t05-b13-op2",
        text: "Домендік тұтастықты"
      },
      {
        id: "db-t05-b13-op3",
        text: "Семантикалық тұтастықты"
      },
      {
        id: "db-t05-b13-op4",
        text: "Атрибуттық бірегейлікті"
      },
      {
        id: "db-t05-b13-op5",
        text: "Кестелік тұтастықты"
      },
      {
        id: "db-t05-b13-op6",
        text: "Транзакциялық тұтастықты"
      },
      {
        id: "db-t05-b13-op7",
        text: "Первичтік кілттің бірегейлігін"
      },
      {
        id: "db-t05-b13-op8",
        text: "Деректер типінің сәйкестігін"
      }
    ],
    correctOptionIds: [
      "db-t05-b13-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b14",
    subjectId: SubjectId.DB,
    text: "Реляциялық модельдегі \"суперкілт\" (Superkey) деген не?",
    options: [
      {
        id: "db-t05-b14-op1",
        text: "Қатынас кортеждерін бірегей түрде анықтай алатын атрибут немесе атрибуттар жиынтығы"
      },
      {
        id: "db-t05-b14-op2",
        text: "Ең үлкен бастапқы кілт"
      },
      {
        id: "db-t05-b14-op3",
        text: "Кестелерді байланыстыратын сыртқы кілт"
      },
      {
        id: "db-t05-b14-op4",
        text: "Тек NULL мәндері бар кілт"
      },
      {
        id: "db-t05-b14-op5",
        text: "Кестедегі жолдар санын ең азайтатын атрибуттар жиынтығы"
      },
      {
        id: "db-t05-b14-op6",
        text: "Басқа кестелермен байланыс орнатуды қамтамасыз ететін минималды кілт"
      },
      {
        id: "db-t05-b14-op7",
        text: "Тек бір ғана кортежді анықтайтын, бірақ қайталанатын мәндерге рұқсат беретін кілт"
      },
      {
        id: "db-t05-b14-op8",
        text: "Қатынастағы барлық атрибуттардың қосындысынан тұратын міндетті түрде бос орынсыз кілт"
      }
    ],
    correctOptionIds: [
      "db-t05-b14-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b15",
    subjectId: SubjectId.DB,
    text: "Бірнеше атрибуттан (бағаннан) құралған бастапқы кілт қалай аталады?",
    options: [
      {
        id: "db-t05-b15-op1",
        text: "Құрама бастапқы кілт (Composite Primary Key)"
      },
      {
        id: "db-t05-b15-op2",
        text: "Қарапайым кілт"
      },
      {
        id: "db-t05-b15-op3",
        text: "Сыртқы құрама кілт"
      },
      {
        id: "db-t05-b15-op4",
        text: "Суперкілт"
      },
      {
        id: "db-t05-b15-op5",
        text: "Көптік бастапқы кілт"
      },
      {
        id: "db-t05-b15-op6",
        text: "Біріктірілген сыртқы кілт"
      },
      {
        id: "db-t05-b15-op7",
        text: "Қосымша атрибуттық кілт"
      },
      {
        id: "db-t05-b15-op8",
        text: "Жинақталған суперкілт"
      }
    ],
    correctOptionIds: [
      "db-t05-b15-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b16",
    subjectId: SubjectId.DB,
    text: "Сыртқы кілтке қойылатын басты шектеу қандай?",
    options: [
      {
        id: "db-t05-b16-op1",
        text: "Оның мәндері сілтеме жасалған кестенің бастапқы кілтінде болуы тиіс немесе NULL болуы керек"
      },
      {
        id: "db-t05-b16-op2",
        text: "Ол міндетті түрде автоинкремент болуы тиіс"
      },
      {
        id: "db-t05-b16-op3",
        text: "Ол тек мәтіндік баған бола алады"
      },
      {
        id: "db-t05-b16-op4",
        text: "Ол NULL мәнін мүлдем қабылдамауы керек"
      },
      {
        id: "db-t05-b16-op5",
        text: "Оның мәндері сілтеме жасалған кестедегі кез келген бағанда кездесуі тиіс"
      },
      {
        id: "db-t05-b16-op6",
        text: "Ол міндетті түрде бірегей (unique) болуы шарт және қайталанбауы керек"
      },
      {
        id: "db-t05-b16-op7",
        text: "Оның мәндері тек сандық деректер типінде ғана бола алады"
      },
      {
        id: "db-t05-b16-op8",
        text: "Ол әрқашан бастапқы кестенің бастапқы кілтімен бірдей мәнге ие болуы тиіс"
      }
    ],
    correctOptionIds: [
      "db-t05-b16-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b17",
    subjectId: SubjectId.DB,
    text: "Реляциялық модельдегі \"потенциалды кілт\" (Candidate Key) деген не?",
    options: [
      {
        id: "db-t05-b17-op1",
        text: "Бастапқы кілт болуға лайықты, ең аз атрибуттардан тұратын бірегей суперкілт"
      },
      {
        id: "db-t05-b17-op2",
        text: "Сыртқы кілттер жиынтығы"
      },
      {
        id: "db-t05-b17-op3",
        text: "Тек бос мәндер сақтайтын кілт"
      },
      {
        id: "db-t05-b17-op4",
        text: "Кез келген екінші деңгейлі кілт"
      },
      {
        id: "db-t05-b17-op5",
        text: "Кестедегі кез келген атрибуттардың жиынтығы, егер олар бірегей болса"
      },
      {
        id: "db-t05-b17-op6",
        text: "Басқа кестелермен байланыс орнату үшін қолданылатын арнайы кілт"
      },
      {
        id: "db-t05-b17-op7",
        text: "Деректерді сұрыптау және іздеуді жылдамдататын индекстелген өріс"
      },
      {
        id: "db-t05-b17-op8",
        text: "Кестедегі барлық жазбаларды бір-бірінен ажырататын кез келген суперкілт"
      }
    ],
    correctOptionIds: [
      "db-t05-b17-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b18",
    subjectId: SubjectId.DB,
    text: "Бастапқы кілтке енетін атрибуттар мәні NULL бола ала ма?",
    options: [
      {
        id: "db-t05-b18-op1",
        text: "Жоқ, бастапқы кілттің ешбір бөлігі бос (NULL) болмауы тиіс"
      },
      {
        id: "db-t05-b18-op2",
        text: "Иә, егер ол жалғыз кілт болмаса"
      },
      {
        id: "db-t05-b18-op3",
        text: "Иә, кез келген уақытта"
      },
      {
        id: "db-t05-b18-op4",
        text: "Тек сыртқы кілт болған кезде ғана"
      },
      {
        id: "db-t05-b18-op5",
        text: "Иә, егер кестеде басқа бірегей кілт болса"
      },
      {
        id: "db-t05-b18-op6",
        text: "Жоқ, тек бірінші атрибут ғана NULL болмауы керек"
      },
      {
        id: "db-t05-b18-op7",
        text: "Иә, дерекқор жүйесінің баптауларына байланысты рұқсат етілуі мүмкін"
      },
      {
        id: "db-t05-b18-op8",
        text: "Жоқ, бірақ тек құрама кілттерге ғана қатысты"
      }
    ],
    correctOptionIds: [
      "db-t05-b18-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3e7e0edf-c3c6-433c-b306-105403f05374",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"бірегей шектеу\" (UNIQUE) мен Бастапқы кілттің (PRIMARY KEY) басты айырмашылығы қандай?",
    options: [
      {
        id: "22e49648-9f0a-41af-8fc4-f72dd956aa71",
        text: "UNIQUE шектеуі NULL мәндерін қабылдай алады, ал Бастапқы кілт мүлдем NULL қабылдамайды және кестеде тек біреу болады"
      },
      {
        id: "daf3f164-52f0-49c9-a3c0-0377cec32b93",
        text: "Бастапқы кілт бірнешеу бола алады"
      },
      {
        id: "57e8cbec-c8aa-42e4-b7b1-eee89b3240dd",
        text: "UNIQUE шектеуі кестеде тек бір рет жазылады"
      },
      {
        id: "24e5012e-39f4-414f-8cf5-4f712b8376e2",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "6603d2e8-ce3e-408b-9fd6-0d6c2a3b9fe4",
        text: "Бастапқы кілт бірнеше бағаннан тұруы мүмкін емес, ал UNIQUE шектеуі тек бір бағанға ғана қолданылады"
      },
      {
        id: "cce26791-4a19-4c53-b61d-3f6b9c71401d",
        text: "UNIQUE шектеуі деректерді автоматты түрде индекстейді, ал Бастапқы кілт индекстеуді талап етпейді"
      },
      {
        id: "2a15af6c-ba1c-41fe-a53e-14490bc9cb96",
        text: "Бастапқы кілт мәндері өзгеруі мүмкін, ал UNIQUE шектеуінің мәндерін өзгертуге тыйым салынған"
      },
      {
        id: "c342d891-31a2-4514-9754-ae19b95b30ae",
        text: "UNIQUE шектеуі кестедегі барлық жазбалардың бірегейлігін қамтамасыз етеді, ал Бастапқы кілт тек бірінші жазба үшін қажет"
      }
    ],
    correctOptionIds: [
      "22e49648-9f0a-41af-8fc4-f72dd956aa71"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b19",
    subjectId: SubjectId.DB,
    text: "Екі кесте арасындағы \"көптің-бірге\" (M:1) байланысы логикалық деңгейде қалай құрылады?",
    options: [
      {
        id: "db-t05-b19-op1",
        text: "\"Көп\" жағындағы кестеге \"бір\" жағындағы кестенің бастапқы кілтін сыртқы кілт (Foreign Key) ретінде қосу арқылы"
      },
      {
        id: "db-t05-b19-op2",
        text: "\"Бір\" жағына сыртқы кілт қосу арқылы"
      },
      {
        id: "db-t05-b19-op3",
        text: "Аралық байланыстырушы кесте арқылы"
      },
      {
        id: "db-t05-b19-op4",
        text: "Екі кестенің бастапқы кілттерін теңестіру арқылы"
      },
      {
        id: "db-t05-b19-op5",
        text: "Екі кестеге де бірдей арнайы байланыс кілтін қосу арқылы"
      },
      {
        id: "db-t05-b19-op6",
        text: "\"Бір\" жағындағы кестеге \"көп\" жағының бастапқы кілтін сыртқы кілт ретінде енгізу арқылы"
      },
      {
        id: "db-t05-b19-op7",
        text: "Екі кестенің арасына көпірлік кесте құрып, оған екеуінің де кілттерін жазу арқылы"
      },
      {
        id: "db-t05-b19-op8",
        text: "Кестелердің аттарын сәйкестендіру және оларды физикалық тұрғыда біріктіру арқылы"
      }
    ],
    correctOptionIds: [
      "db-t05-b19-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b20",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"суперкілт\" (Superkey) анықтамасы қандай?",
    options: [
      {
        id: "db-t05-b20-op1",
        text: "Қатынастағы кез келген кортежді бірегей түрде анықтай алатын атрибуттардың кез келген жиынтығы"
      },
      {
        id: "db-t05-b20-op2",
        text: "Кестедегі ең үлкен сандық баған"
      },
      {
        id: "db-t05-b20-op3",
        text: "Сыртқы кілттердің жиынтығы"
      },
      {
        id: "db-t05-b20-op4",
        text: "Тек басқа кестемен байланыстыратын кілт"
      },
      {
        id: "db-t05-b20-op5",
        text: "Кестедегі деректерді сүзгілеу үшін қолданылатын ең қысқа атрибуттар жиынтығы"
      },
      {
        id: "db-t05-b20-op6",
        text: "Бір ғана кортежді анықтайтын және құрамынан ешбір атрибутты алып тастауға болмайтын минималды жиын"
      },
      {
        id: "db-t05-b20-op7",
        text: "Дерекқордағы барлық кестелерді бір-бірімен байланыстыратын арнайы индекстік өріс"
      },
      {
        id: "db-t05-b20-op8",
        text: "Тек сандық мәндерден тұратын және автоматты түрде өсетін бірегей идентификатор"
      }
    ],
    correctOptionIds: [
      "db-t05-b20-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b21",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"альтернативті кілт\" (Alternate Key) деген не?",
    options: [
      {
        id: "db-t05-b21-op1",
        text: "Бастапқы кілт ретінде таңдалмаған, бірақ бірегей болып табылатын потенциалды кілт"
      },
      {
        id: "db-t05-b21-op2",
        text: "Ешқандай мәні жоқ кілт"
      },
      {
        id: "db-t05-b21-op3",
        text: "Кестенің сыртқы кілті"
      },
      {
        id: "db-t05-b21-op4",
        text: "Жоюға болатын уақытша кілт"
      },
      {
        id: "db-t05-b21-op5",
        text: "Бастапқы кілтпен бірге деректерді байланыстыру үшін қолданылатын сыртқы сілтеме"
      },
      {
        id: "db-t05-b21-op6",
        text: "Кестедегі бірнеше жазбаның қайталануына рұқсат беретін индекстелген өріс"
      },
      {
        id: "db-t05-b21-op7",
        text: "Дерекқорды құру кезінде уақытша тағайындалатын және кейін жойылатын кілт"
      },
      {
        id: "db-t05-b21-op8",
        text: "Тек сандық мәндерден тұратын және автоматты түрде генерацияланатын бастапқы кілт"
      }
    ],
    correctOptionIds: [
      "db-t05-b21-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b22",
    subjectId: SubjectId.DB,
    text: "Реляциялық қатынаста бастапқы кілт ретінде бірнеше бағанды біріктіріп қолдану қалай аталады?",
    options: [
      {
        id: "db-t05-b22-op1",
        text: "Құрама кілт (Composite Key)"
      },
      {
        id: "db-t05-b22-op2",
        text: "Жай кілт (Simple Key)"
      },
      {
        id: "db-t05-b22-op3",
        text: "Сыртқы кілт (Foreign Key)"
      },
      {
        id: "db-t05-b22-op4",
        text: "Біріккен кілт (Joined Key)"
      },
      {
        id: "db-t05-b22-op5",
        text: "Көптік кілт (Multiple Key)"
      },
      {
        id: "db-t05-b22-op6",
        text: "Топтық кілт (Group Key)"
      },
      {
        id: "db-t05-b22-op7",
        text: "Жиынтық кілт (Aggregate Key)"
      },
      {
        id: "db-t05-b22-op8",
        text: "Себебі ақылды кілттер дерекқордың жұмыс жылдамдығын айтарлықтай төмендетеді"
      }
    ],
    correctOptionIds: [
      "db-t05-b22-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7e94506a-be96-4cfa-81b1-defc6cb82322",
    subjectId: SubjectId.DB,
    text: "Кестелер арасындағы \"бірден-бірге\" (1:1) байланысы логикалық деңгейде қалай дұрыс іске асырылады?",
    options: [
      {
        id: "9561f9db-ee1b-4bad-a340-1e38989d9501",
        text: "Бір кестенің бастапқы кілтін екінші кестеге сыртқы кілт әрі бірегей (UNIQUE) шектеу ретінде қосу арқылы"
      },
      {
        id: "47faf7a4-738e-41f2-91c3-f5af4433ecd0",
        text: "Екі кестенің арасында міндетті түрде үшінші кесте құру арқылы"
      },
      {
        id: "49545387-7a0c-4108-a6eb-1fc05b963b73",
        text: "Екі кестеге де AUTO_INCREMENT мәнін беру арқылы"
      },
      {
        id: "4983d5da-e9f3-41a7-a700-06d7430674a7",
        text: "Байланысты мүлдем қолданбау арқылы"
      },
      {
        id: "c6ea72cc-5273-446f-acb5-5fe2eccec8ab",
        text: "Екі кестенің де бастапқы кілттерін бірдей мәндерге мәжбүрлеп өзгерту арқылы"
      },
      {
        id: "090cfdde-989c-4236-8cf3-ce090db1843f",
        text: "Бір кестенің бастапқы кілтін екінші кестеге тек сыртқы кілт ретінде, UNIQUE шектеусіз қосу арқылы"
      },
      {
        id: "90add1f9-032a-4600-9152-44826c761110",
        text: "Екі кестені физикалық тұрғыдан біріктіріп, бір үлкен кесте жасау арқылы"
      },
      {
        id: "9af3b2f1-93c3-4e92-9c83-dc41ec3b6e8c",
        text: "Әрбір жазба үшін арнайы байланыс кестесін (junction table) құру арқылы"
      }
    ],
    correctOptionIds: [
      "9561f9db-ee1b-4bad-a340-1e38989d9501"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b23",
    subjectId: SubjectId.DB,
    text: "Сыртқы кілт (Foreign Key) сілтеме жасайтын баған міндетті түрде PRIMARY KEY болуы шарт па?",
    options: [
      {
        id: "db-t05-b23-op1",
        text: "Жоқ, ол PRIMARY KEY немесе UNIQUE шектеуі бар бірегей баған болуы тиіс"
      },
      {
        id: "db-t05-b23-op2",
        text: "Иә, міндетті түрде тек қана PRIMARY KEY болуы керек"
      },
      {
        id: "db-t05-b23-op3",
        text: "Жоқ, кез келген бағанға сілтеме жасай беруге болады"
      },
      {
        id: "db-t05-b23-op4",
        text: "Тек сандық баған болса болғаны"
      },
      {
        id: "db-t05-b23-op5",
        text: "Жоқ, сыртқы кілт кез келген деректер типіндегі бағанға сілтеме жасай алады"
      },
      {
        id: "db-t05-b23-op6",
        text: "Иә, тек бірінші реттік кілт (PRIMARY KEY) болуы шарт, UNIQUE жарамайды"
      },
      {
        id: "db-t05-b23-op7",
        text: "Жоқ, егер бағанда NULL мәндері болса да, оған сыртқы кілтпен сілтеме жасауға болады"
      },
      {
        id: "db-t05-b23-op8",
        text: "Иә, бірақ тек екі кесте бірдей дерекқорда орналасса ғана міндетті"
      }
    ],
    correctOptionIds: [
      "db-t05-b23-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b24",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"жасанды (суррогатты) кілт\" (Surrogate Key) дегеніміз не?",
    options: [
      {
        id: "db-t05-b24-op1",
        text: "Деректердің өзінен туындамайтын, жүйе тарапынан автоматты түрде жасалатын бірегей сан (мысалы, Auto-increment ID)"
      },
      {
        id: "db-t05-b24-op2",
        text: "Пайдаланушы енгізетін электрондық пошта немесе ЖСН"
      },
      {
        id: "db-t05-b24-op3",
        text: "Тек уақытша сақталатын мән"
      },
      {
        id: "db-t05-b24-op4",
        text: "Сыртқы кілттің синонимі"
      },
      {
        id: "db-t05-b24-op5",
        text: "Кестедегі бірнеше бағандардың бірігуінен құралған табиғи кілт"
      },
      {
        id: "db-t05-b24-op6",
        text: "Деректерді іздеу жылдамдығын арттыру үшін қосымша құрылатын индекстік өріс"
      },
      {
        id: "db-t05-b24-op7",
        text: "Екі кестенің арасындағы байланысты орнататын сыртқы кілттің баламасы"
      },
      {
        id: "db-t05-b24-op8",
        text: "Пайдаланушы тарапынан енгізілетін және өзгеруі мүмкін бизнес-мағыналы код"
      }
    ],
    correctOptionIds: [
      "db-t05-b24-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b25",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"табиғи кілт\" (Natural Key) деген не?",
    options: [
      {
        id: "db-t05-b25-op1",
        text: "Нысанның нақты өмірдегі бірегей қасиетінен алынған кілт (мысалы, ЖСН немесе паспорт нөмірі)"
      },
      {
        id: "db-t05-b25-op2",
        text: "ДҚБЖ автоматты түрде жасайтын бүтін сан"
      },
      {
        id: "db-t05-b25-op3",
        text: "Кестенің атауы"
      },
      {
        id: "db-t05-b25-op4",
        text: "NULL мәнін қабылдайтын баған"
      },
      {
        id: "db-t05-b25-op5",
        text: "Дерекқор жүйесі кестеге жаңа жазба қосқан кезде автоматты түрде генерациялайтын реттік нөмір"
      },
      {
        id: "db-t05-b25-op6",
        text: "Екі немесе одан да көп бағандардың бірігуінен құралған құрама кілт"
      },
      {
        id: "db-t05-b25-op7",
        text: "Басқа кестемен байланыс орнату үшін арнайы жасалған сыртқы кілт"
      },
      {
        id: "db-t05-b25-op8",
        text: "Деректерді іздеу жылдамдығын арттыру мақсатында индекстеу үшін қолданылатын уақытша мәні"
      }
    ],
    correctOptionIds: [
      "db-t05-b25-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b26",
    subjectId: SubjectId.DB,
    text: "Рекурсивті байланыс (Recursive Relationship) деген не?",
    options: [
      {
        id: "db-t05-b26-op1",
        text: "Кестенің өз-өзімен (өз бағандары арасында) сыртқы кілт арқылы байланысуы (мысалы, қызметкер мен оның жетекшісі)"
      },
      {
        id: "db-t05-b26-op2",
        text: "Екі түрлі дерекқор серверінің байланысы"
      },
      {
        id: "db-t05-b26-op3",
        text: "Жою цикліне әкелетін қате байланыс"
      },
      {
        id: "db-t05-b26-op4",
        text: "Тек M:N байланысында болатын жағдай"
      },
      {
        id: "db-t05-b26-op5",
        text: "Бір кестеден екінші кестеге деректерді көшіру процесі"
      },
      {
        id: "db-t05-b26-op6",
        text: "Екі түрлі кестенің бірдей атаулы сыртқы кілттері арқылы байланысуы"
      },
      {
        id: "db-t05-b26-op7",
        text: "Кесте ішіндегі деректердің уақыт бойынша өзгеру тарихын сақтау әдісі"
      },
      {
        id: "db-t05-b26-op8",
        text: "Тек біріншілік кілт пен сыртқы кілт сәйкес келгенде ғана орындалатын операция"
      }
    ],
    correctOptionIds: [
      "db-t05-b26-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0ba08735-7b93-40ed-8690-452618d2f1f7",
    subjectId: SubjectId.DB,
    text: "Реляциялық модельдегі \"суперкілттің\" (superkey) ең қысқартылған, минималды нұсқасы қалай аталады?",
    options: [
      {
        id: "0ef7071f-fa0b-426c-a1f5-524f4f7d22cc",
        text: "Потенциалды кілт (Candidate Key)"
      },
      {
        id: "acbdcbfb-4419-4fbe-9934-bc5c42c05837",
        text: "Бастапқы кілт (Primary Key)"
      },
      {
        id: "c96ec941-0c37-42f2-982a-3f853527027b",
        text: "Баламалы кілт (Alternate Key)"
      },
      {
        id: "b78bb1eb-4ec6-4877-a2ae-2688e0e63c69",
        text: "Сыртқы кілт (Foreign Key)"
      },
      {
        id: "1ff5ebec-4550-4627-8307-db62eb7f7400",
        text: "Қосымша кілт (Composite Key)"
      },
      {
        id: "25de6ec4-7fef-4bc4-9fc1-11136a48b34b",
        text: "Жалпы кілт (General Key)"
      },
      {
        id: "ad0d6eb1-4bba-4e1f-a592-8124ab43bf4a",
        text: "Негізгі атрибут (Main Attribute)"
      },
      {
        id: "5ae1305e-c2a4-4aec-ba40-71dbab3c4a42",
        text: "Толық кілт (Full Key)"
      }
    ],
    correctOptionIds: [
      "0ef7071f-fa0b-426c-a1f5-524f4f7d22cc"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b27",
    subjectId: SubjectId.DB,
    text: "Кестедегі бастапқы кілт (PRIMARY KEY) ретінде таңдалмаған потенциалды кілт қалай аталады?",
    options: [
      {
        id: "db-t05-b27-op1",
        text: "Баламалы кілт (Alternate Key)"
      },
      {
        id: "db-t05-b27-op2",
        text: "Сыртқы кілт (Foreign Key)"
      },
      {
        id: "db-t05-b27-op3",
        text: "Жасанды кілт (Surrogate Key)"
      },
      {
        id: "db-t05-b27-op4",
        text: "Қосымша кілт (Secondary Key)"
      },
      {
        id: "db-t05-b27-op5",
        text: "Кандидаттық кілт (Candidate Key)"
      },
      {
        id: "db-t05-b27-op6",
        text: "Композиттік кілт (Composite Key)"
      },
      {
        id: "db-t05-b27-op7",
        text: "Уникалды кілт (Unique Key)"
      },
      {
        id: "db-t05-b27-op8",
        text: "Кестедегі деректерді автоматты түрде өшіру үшін"
      }
    ],
    correctOptionIds: [
      "db-t05-b27-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b28",
    subjectId: SubjectId.DB,
    text: "Кестеде PRIMARY KEY немесе UNIQUE шектеуі орнатылғанда ДҚБЖ автоматты түрде не істейді?",
    options: [
      {
        id: "db-t05-b28-op1",
        text: "Осы бағандар үшін бірегей индекс (Unique Index) құрады"
      },
      {
        id: "db-t05-b28-op2",
        text: "Деректерді дискіде автоматты түрде өшіреді"
      },
      {
        id: "db-t05-b28-op3",
        text: "Сыртқы кілтті автоматты түрде жояды"
      },
      {
        id: "db-t05-b28-op4",
        text: "Тек уақытша файл жасайды"
      },
      {
        id: "db-t05-b28-op5",
        text: "Бағанға автоматты түрде DEFAULT мәнін тағайындайды"
      },
      {
        id: "db-t05-b28-op6",
        text: "Кестенің барлық деректерін кері ретпен сұрыптайды"
      },
      {
        id: "db-t05-b28-op7",
        text: "Осы бағанға NULL мәндерін енгізуге рұқсат береді"
      },
      {
        id: "db-t05-b28-op8",
        text: "Кестеге жаңа жасырын баған қосып, оны ID деп атайды"
      }
    ],
    correctOptionIds: [
      "db-t05-b28-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b29",
    subjectId: SubjectId.DB,
    text: "Сыртқы кілттің (Foreign Key) негізгі қызметі қандай?",
    options: [
      {
        id: "db-t05-b29-op1",
        text: "Кестелер арасындағы сілтемелік байланыстарды қорғау және деректердің тұтастығын сақтау"
      },
      {
        id: "db-t05-b29-op2",
        text: "Кестедеге деректерді жылдам сұрыптау"
      },
      {
        id: "db-t05-b29-op3",
        text: "Мәндердің ешқашан NULL болмауын талап ету"
      },
      {
        id: "db-t05-b29-op4",
        text: "Пайдаланушыларды авторизациялау"
      },
      {
        id: "db-t05-b29-op5",
        text: "Кестедегі жолдардың бірегейлігін қамтамасыз ету"
      },
      {
        id: "db-t05-b29-op6",
        text: "Деректерді сақтау кезінде автоматты түрде шифрлау"
      },
      {
        id: "db-t05-b29-op7",
        text: "Кестенің физикалық өлшемін азайту арқылы орын үнемдеу"
      },
      {
        id: "db-t05-b29-op8",
        text: "Сұраныстарды орындау жылдамдығын арттыру үшін индекстік құрылым құру"
      }
    ],
    correctOptionIds: [
      "db-t05-b29-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "96dea1cb-ce9a-4be8-a81a-202a97272316",
    subjectId: SubjectId.DB,
    text: "Егер кестеде \"ИИН\" және \"Паспорт нөмірі\" сияқты бірегей бағандар болса, олар кілттер теориясында қалай аталады?",
    options: [
      {
        id: "4bfe99a1-e0b4-4deb-aa03-f600ee3bc39b",
        text: "Потенциалды кілттер (Candidate Keys)"
      },
      {
        id: "cd16669a-15db-4c65-acbb-2a8ddf7d0b23",
        text: "Сыртқы кілттер (Foreign Keys)"
      },
      {
        id: "f0257c54-e228-4590-8051-725973ac5c22",
        text: "Жасанды кілттер"
      },
      {
        id: "84e8f825-1016-4df7-8e2e-a28975569aba",
        text: "Қарапайым суперкілттер"
      },
      {
        id: "8e14de64-c947-4f72-8ad3-fb7adf1a3fe8",
        text: "Бастапқы кілттер (Primary Keys)"
      },
      {
        id: "114ec095-8087-47ae-a0c5-72d5cf349be4",
        text: "Қосалқы кілттер (Secondary Keys)"
      },
      {
        id: "83bbd89a-9345-4420-b71f-2518538335a3",
        text: "Композиттік кілттер"
      },
      {
        id: "e58fc98d-50ff-4b83-8a61-b74a07abb492",
        text: "Альтернативті суперкілттер"
      }
    ],
    correctOptionIds: [
      "4bfe99a1-e0b4-4deb-aa03-f600ee3bc39b"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c60c2a35-316b-49f0-8356-7d96311cbedd",
    subjectId: SubjectId.DB,
    text: "Кестедегі \"суррогатты кілттің\" (Surrogate Key) табиғи кілттен (Natural Key) басты айырмашылығы қандай?",
    options: [
      {
        id: "154551b7-d9d8-4a63-9d17-8ad0fc0a4df1",
        text: "Суррогатты кілттің бизнес-мәні жоқ, ол тек бірегейлікті сақтау үшін автоматты түрде жасалады, ал табиғи кілт нақты деректен алынады"
      },
      {
        id: "881b112c-e5cc-4a6a-9a1d-c1bb48f4184f",
        text: "Суррогатты кілт NULL мәнін қабылдай алады"
      },
      {
        id: "c5fabf8f-6848-4854-9c39-931741ea9224",
        text: "Табиғи кілт кестеде тек бір рет жазылады"
      },
      {
        id: "cb935518-1856-4cdf-a666-92e4f0832a13",
        text: "Суррогатты кілт тек мәтіндік болады"
      },
      {
        id: "92bb8e2a-4a51-41cc-b32e-db4071ad1f76",
        text: "Суррогатты кілт әрқашан пайдаланушы енгізетін табиғи деректерден (мысалы, туған күн немесе ЖСН) тұрады"
      },
      {
        id: "f33efe8e-d25e-421c-9487-e2da83b21aeb",
        text: "Табиғи кілт жүйе тарапынан автоматты түрде генерацияланады, ал суррогатты кілт қолмен енгізіледі"
      },
      {
        id: "16228e01-5e24-41e6-aad8-b03fe2378c87",
        text: "Суррогатты кілт кестедегі деректердің өзгеруіне байланысты жиі өзгеріп отыруы керек"
      },
      {
        id: "fbad6c98-f1b3-4f15-a179-884c39151508",
        text: "Табиғи кілт тек бір ғана бағаннан тұруы мүмкін, ал суррогатты кілт міндетті түрде бірнеше бағанның жиынтығы болуы тиіс"
      }
    ],
    correctOptionIds: [
      "154551b7-d9d8-4a63-9d17-8ad0fc0a4df1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b30",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Self-referencing Relationship\" (Өзіндік сілтеме байланысы) деген не?",
    options: [
      {
        id: "db-t05-b30-op1",
        text: "Кестедегі сыртқы кілттің (Foreign Key) сол кестенің өз бастапқы кілтіне (Primary Key) сілтеме жасауы"
      },
      {
        id: "db-t05-b30-op2",
        text: "Екі түрлі сервердегі кестелердің байланысы"
      },
      {
        id: "db-t05-b30-op3",
        text: "Ешқандай кілті жоқ кестенің жұмыс істеуі"
      },
      {
        id: "db-t05-b30-op4",
        text: "Бір кестенің екіншісін автоматты түрде жоюы"
      },
      {
        id: "db-t05-b30-op5",
        text: "Бір кестенің екінші кестеге сілтеме жасауы арқылы деректердің көшірілуі"
      },
      {
        id: "db-t05-b30-op6",
        text: "Кесте ішіндегі барлық жазбалардың автоматты түрде бірегей болуын қамтамасыз ететін индекстеу әдісі"
      },
      {
        id: "db-t05-b30-op7",
        text: "Екі түрлі кесте арасындағы сыртқы кілттердің өзара алмасу процесі"
      },
      {
        id: "db-t05-b30-op8",
        text: "Дерекқордағы бір кестенің басқа кестенің бастапқы кілтіне тәуелді болуы"
      }
    ],
    correctOptionIds: [
      "db-t05-b30-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b31",
    subjectId: SubjectId.DB,
    text: "Сыртқы кілт (Foreign Key) үшін төмендегі тұжырымдардың қайсысы дұрыс?",
    options: [
      {
        id: "db-t05-b31-op1",
        text: "Сыртқы кілт мәндері қайталана (дубликат) алады және NULL бола алады (егер NOT NULL талабы қойылмаса)"
      },
      {
        id: "db-t05-b31-op2",
        text: "Сыртқы кілт әрқашан бірегей (UNIQUE) болуы тиіс"
      },
      {
        id: "db-t05-b31-op3",
        text: "Сыртқы кілт ешқашан NULL бола алмайды"
      },
      {
        id: "db-t05-b31-op4",
        text: "Сыртқы кілт тек бүтін сандар болуы тиіс"
      },
      {
        id: "db-t05-b31-op5",
        text: "Сыртқы кілт міндетті түрде сәйкес кестедегі бастапқы кілтпен (Primary Key) толық сәйкес келуі керек"
      },
      {
        id: "db-t05-b31-op6",
        text: "Сыртқы кілт тек бір ғана рет қайталана алады, одан артық дубликатқа жол берілмейді"
      },
      {
        id: "db-t05-b31-op7",
        text: "Сыртқы кілт мәні ешқашан өзгертілмейді және тұрақты болуы шарт"
      },
      {
        id: "db-t05-b31-op8",
        text: "Сыртқы кілт тек сол кестедегі деректерге ғана сілтеме жасай алады"
      }
    ],
    correctOptionIds: [
      "db-t05-b31-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "425c59c7-5078-4033-b3fc-3f699a858606",
    subjectId: SubjectId.DB,
    text: "Бастапқы кілтті (Primary Key) өзгерту немесе жою кезінде ON DELETE CASCADE әрекеті қалай жұмыс істейді?",
    options: [
      {
        id: "1c8d2279-c779-4712-879b-ec554683352c",
        text: "Басты кестедегі жол жойылғанда, оған сілтеме жасаған бағынышты кестедегі барлық жолдар автоматты түрде жойылады"
      },
      {
        id: "3034c48a-d35a-493b-83d6-83fe3a903bcd",
        text: "Бағынышты кестедегі мәндер 0-ге теңестіріледі"
      },
      {
        id: "e0d5f050-8a41-4f69-9725-483609fd0766",
        text: "Жою әрекетіне мүлдем тыйым салынады"
      },
      {
        id: "9d5ac88d-ec80-4a4c-9b07-a9e45530198e",
        text: "Тек басты кестедегі жол жойылады, сыртқы кілттер өзгеріссіз қалады"
      },
      {
        id: "29e953db-e6a8-49b9-b8cc-95506f7474c4",
        text: "Басты кестедегі жол жойылғанда, бағынышты кестедегі сәйкес жолдар NULL мәніне ауыстырылады"
      },
      {
        id: "7b61b360-e973-41e6-b15f-3da7ae4a4bb9",
        text: "Бағынышты кестедегі жолдар автоматты түрде жаңа бастапқы кілтпен жаңартылып, сақталады"
      },
      {
        id: "650e0088-0907-49ac-a8e8-4391e34eefcf",
        text: "Жою әрекеті тек басты кестеге әсер етеді, ал бағынышты кестедегі деректер уақытша блокталады"
      },
      {
        id: "35dc0633-682d-49f9-8c2c-3076fcfec08b",
        text: "Бағынышты кестедегі барлық жолдар бір арнайы 'жойылған' деп белгіленген жолға біріктіріледі"
      }
    ],
    correctOptionIds: [
      "1c8d2279-c779-4712-879b-ec554683352c"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b32",
    subjectId: SubjectId.DB,
    text: "ON DELETE RESTRICT шектеуі орнатылғанда ДҚБЖ не істейді?",
    options: [
      {
        id: "db-t05-b32-op1",
        text: "Бағынышты кестеде сілтеме бар болса, басты кестедегі жолды жоюға мүлдем рұқсат бермейді (қате шығарады)"
      },
      {
        id: "db-t05-b32-op2",
        text: "Бағынышты кестедегі жолдарды автоматты түрде жояды"
      },
      {
        id: "db-t05-b32-op3",
        text: "Сыртқы кілттің мәнін NULL қылады"
      },
      {
        id: "db-t05-b32-op4",
        text: "Жоюды елемей орындай береді"
      },
      {
        id: "db-t05-b32-op5",
        text: "Басты кестедегі жолды жоюды кейінге қалдырып, транзакция аяқталғанша күтеді"
      },
      {
        id: "db-t05-b32-op6",
        text: "Бағынышты кестедегі сәйкес жолдарды автоматты түрде жаңартып, басты кестедегі ID-ны өзгертеді"
      },
      {
        id: "db-t05-b32-op7",
        text: "Жою операциясын орындайды, бірақ бағынышты кестеге ескерту жазбасын (лог) қосады"
      },
      {
        id: "db-t05-b32-op8",
        text: "Сыртқы кілттің мәнін әдепкі (default) мәнге ауыстырып, жолды сақтап қалады"
      }
    ],
    correctOptionIds: [
      "db-t05-b32-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b33",
    subjectId: SubjectId.DB,
    text: "\"Composite Foreign Key\" (Құрама сыртқы кілт) деген не?",
    options: [
      {
        id: "db-t05-b33-op1",
        text: "Сілтеме жасау үшін қолданылатын және екі немесе одан да көп бағаннан тұратын сыртқы кілт"
      },
      {
        id: "db-t05-b33-op2",
        text: "Тек бір ғана бағаннан тұратын бірегей кілт"
      },
      {
        id: "db-t05-b33-op3",
        text: "Бастапқы кілт ретінде қолданылатын кез келген баған"
      },
      {
        id: "db-t05-b33-op4",
        text: "NULL қабылдамайтын кілттер жиынтығы"
      },
      {
        id: "db-t05-b33-op5",
        text: "Бірнесте кестені біріктіру үшін қолданылатын арнайы индекстік құрылым"
      },
      {
        id: "db-t05-b33-op6",
        text: "Екі немесе одан да көп кестедегі бастапқы кілттердің қосындысы ретінде анықталатын өріс"
      },
      {
        id: "db-t05-b33-op7",
        text: "Деректер тұтастығын сақтау үшін автоматты түрде жасалатын жасырын баған"
      },
      {
        id: "db-t05-b33-op8",
        text: "Тек екіншілік кілтпен байланыс орнататын және бір ғана мәнге ие болатын сыртқы сілтеме"
      }
    ],
    correctOptionIds: [
      "db-t05-b33-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b34",
    subjectId: SubjectId.DB,
    text: "Кестелер арасындағы 1:M (бірден-көпке) байланысында сыртқы кілт қай кестеде орналасуы керек?",
    options: [
      {
        id: "db-t05-b34-op1",
        text: "\"Көп\" (Many) жағындағы кестеде"
      },
      {
        id: "db-t05-b34-op2",
        text: "\"Бір\" (One) жағындағы кестеде"
      },
      {
        id: "db-t05-b34-op3",
        text: "Жеке үшінші байланыстырушы кестеде"
      },
      {
        id: "db-t05-b34-op4",
        text: "Екі кестеде де орналасуы тиіс"
      },
      {
        id: "db-t05-b34-op5",
        text: "Байланыс түріне қарамастан, сыртқы кілт әрқашан негізгі кестеде болады"
      },
      {
        id: "db-t05-b34-op6",
        text: "Сыртқы кілт екі кестенің де бірігу нүктесінде виртуалды түрде сақталады"
      },
      {
        id: "db-t05-b34-op7",
        text: "1:M байланысында сыртқы кілт міндетті түрде индекстелген арнайы жүйелік кестеге жазылады"
      },
      {
        id: "db-t05-b34-op8",
        text: "Сыртқы кілт деректердің көлемі аз болған кестеде орналасуы тиіс"
      }
    ],
    correctOptionIds: [
      "db-t05-b34-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b35",
    subjectId: SubjectId.DB,
    text: "Дерекқорда \"Candidate Key\" (Потенциалды кілт) болу үшін қандай екі қасиет орындалуы керек?",
    options: [
      {
        id: "db-t05-b35-op1",
        text: "Бірегейлік (Uniqueness) және Ирредуцирлену (Жойылмайтын минималдылық)"
      },
      {
        id: "db-t05-b35-op2",
        text: "Сандық формат және автоинкремент болуы"
      },
      {
        id: "db-t05-b35-op3",
        text: "Тек мәтіндік болуы және NULL қабылдамауы"
      },
      {
        id: "db-t05-b35-op4",
        text: "Сыртқы кілтпен байланысты болуы"
      },
      {
        id: "db-t05-b35-op5",
        text: "NULL мәндерін қабылдау және қайталанатын деректерге рұқсат беру"
      },
      {
        id: "db-t05-b35-op6",
        text: "Кестедегі барлық бағандарды қамту және сұрыптау тәртібін сақтау"
      },
      {
        id: "db-t05-b35-op7",
        text: "Тек бір ғана бағаннан тұру және сыртқы кілт болу"
      },
      {
        id: "db-t05-b35-op8",
        text: "Индексациялану және автоматты түрде өсу (автоинкремент)"
      }
    ],
    correctOptionIds: [
      "db-t05-b35-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b36",
    subjectId: SubjectId.DB,
    text: "\"Superkey\" (Суперкілт) ұғымының негізгі қасиеті қандай?",
    options: [
      {
        id: "db-t05-b36-op1",
        text: "Ол кестедегі кез келген жолды бірегей анықтайды, бірақ минималды болуы міндетті емес"
      },
      {
        id: "db-t05-b36-op2",
        text: "Ол тек бір атрибуттан тұруы керек"
      },
      {
        id: "db-t05-b36-op3",
        text: "Ол міндетті түрде NULL мәнді сақтайды"
      },
      {
        id: "db-t05-b36-op4",
        text: "Ол тек екінші деңгейлі кілт болып табылады"
      },
      {
        id: "db-t05-b36-op5",
        text: "Ол кестедегі жолдарды бірегей анықтау үшін міндетті түрде минималды атрибуттар жиыны болуы керек"
      },
      {
        id: "db-t05-b36-op6",
        text: "Ол тек сыртқы кілттермен (Foreign Key) байланыс орнату үшін қолданылады"
      },
      {
        id: "db-t05-b36-op7",
        text: "Ол құрамында кем дегенде бір NULL мәні бар атрибутты міндетті түрде қамтуы тиіс"
      },
      {
        id: "db-t05-b36-op8",
        text: "Ол әрқашан кестенің бірінші бағаны ретінде автоматты түрде жасалады"
      }
    ],
    correctOptionIds: [
      "db-t05-b36-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b37",
    subjectId: SubjectId.DB,
    text: "Реляциялық дерекқор жобасында \"Суррогатты кілт\" (Surrogate Key) ретінде ең жиі не қолданылады?",
    options: [
      {
        id: "db-t05-b37-op1",
        text: "Автоматты түрде өсетін бүтін сандар (Identity/Sequence) немесе бірегей UUID"
      },
      {
        id: "db-t05-b37-op2",
        text: "Пайдаланушының электрондық поштасы"
      },
      {
        id: "db-t05-b37-op3",
        text: "Жұмысшының туған күні"
      },
      {
        id: "db-t05-b37-op4",
        text: "Кестенің атауы"
      },
      {
        id: "db-t05-b37-op5",
        text: "Кестедегі ең ұзын мәтіндік жол (VARCHAR)"
      },
      {
        id: "db-t05-b37-op6",
        text: "Бизнес-логикаға негізделген табиғи кілт (мысалы, тапсырыс нөмірі)"
      },
      {
        id: "db-t05-b37-op7",
        text: "Екі немесе одан да көп бағандардың қосындысынан тұратын құрама кілт"
      },
      {
        id: "db-t05-b37-op8",
        text: "Деректерді сақтау кезіндегі физикалық дискідегі орналасу адресі"
      }
    ],
    correctOptionIds: [
      "db-t05-b37-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "eaa0c957-ee6a-4c37-90fb-caf60ad06cef",
    subjectId: SubjectId.DB,
    text: "\"Foreign Key Constraint\" (Сыртқы кілт шектеуі) дерекқорға жаңа жол қосу (INSERT) кезінде нені тексереді?",
    options: [
      {
        id: "291252f5-a084-4846-8e30-3a77a74978a8",
        text: "Енгізіліп жатқан сыртқы кілт мәнінің сілтеме жасалатын басты кестеде бар-жоғын"
      },
      {
        id: "9a958a36-2f52-4cca-86fb-c4626f10beb0",
        text: "Оның тек оң сан екенін"
      },
      {
        id: "4feed041-8473-42ed-95d9-b5672fefd0de",
        text: "Оның NULL емес екенін"
      },
      {
        id: "4bdacd09-a437-4bde-bc68-4b6395c9ac52",
        text: "Кестедегі жолдардың жалпы санын"
      },
      {
        id: "67bec31a-bef5-4e9a-8df5-d9516c089522",
        text: "Енгізіліп жатқан мәнің кестедегі басқа жолдармен қайталанбауын"
      },
      {
        id: "900b881b-af39-4c98-b5ce-93ae942ecac1",
        text: "Сыртқы кілт бағанының деректер типі бүтін сан (integer) екенін"
      },
      {
        id: "9521b0e6-1e11-4e07-aee7-f0b3f1b7b277",
        text: "Басты кестедегі сәйкес жолдың жаңартылмағанын"
      },
      {
        id: "0b181d17-a210-4e07-8fb0-b1d2030a9227",
        text: "Енгізілген жолдың барлық басқа шектеулерге (CHECK) сәйкес келетінін"
      }
    ],
    correctOptionIds: [
      "291252f5-a084-4846-8e30-3a77a74978a8"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3eea43dc-1f0a-4114-830f-f129d79d7b00",
    subjectId: SubjectId.DB,
    text: "Егер басты кестедегі жолды өшіргенде, бағынышты кестедегі сәйкес жолдардың сыртқы кілт мәнін өзгеріссіз қалдырып, түк істемей, тек қате шығарғымыз келсе, қандай шектеу орнату керек?",
    options: [
      {
        id: "5dfe89d8-9b2e-4527-875e-f3e30ad6693e",
        text: "NO ACTION немесе RESTRICT"
      },
      {
        id: "0012622b-4ee7-4d9e-8189-02a4019250d2",
        text: "CASCADE"
      },
      {
        id: "0525492e-c7f8-4862-9b60-bbe65b43ed48",
        text: "SET NULL"
      },
      {
        id: "58bb233f-3f0a-4b1a-8019-b75aeb01c1a8",
        text: "SET DEFAULT"
      },
      {
        id: "aa12efe6-1c67-4faf-b13f-a5155e033600",
        text: "IGNORE ERROR"
      },
      {
        id: "37b0bcc4-9994-47c3-b601-09539bbd6e18",
        text: "DELETE PARENT"
      },
      {
        id: "28a8c9dc-dd3f-4a90-9798-4508b8ff45c8",
        text: "ALLOW ORPHAN"
      },
      {
        id: "38078405-5cd5-4ca9-afc0-051711b32a0c",
        text: "SKIP CONSTRAINT"
      }
    ],
    correctOptionIds: [
      "5dfe89d8-9b2e-4527-875e-f3e30ad6693e"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b4694f79-1680-4ac9-896e-fbf26460be65",
    subjectId: SubjectId.DB,
    text: "\"Composite Primary Key\" (Құрама бастапқы кілт) құрамына кіретін кез келген атрибут NULL мәнін қабылдай ала ма?",
    options: [
      {
        id: "7162baaa-5bea-459e-8b76-cd092b375ff7",
        text: "Жоқ, бастапқы кілттің ешбір атрибуты (тіпті құрама болса да) NULL бола алмайды"
      },
      {
        id: "862a5029-e71c-448a-8687-221269cd2dfc",
        text: "Иә, егер ол бірінші баған болмаса"
      },
      {
        id: "68e2f55e-c9c4-41d5-a9e2-1d6c70fd0229",
        text: "Иә, кез келген уақытта қабылдай береді"
      },
      {
        id: "53a16aba-d213-4c21-88f2-537b4ddfb0a4",
        text: "Тек сыртқы кілт болған кезде ғана рұқсат етіледі"
      },
      {
        id: "6813cb3d-2673-4944-9e05-ef6620c16930",
        text: "Иә, егер құрама кілттің басқа бағандары толық толтырылған болса"
      },
      {
        id: "150c0892-e25a-4e4d-9bb4-69c881a826a2",
        text: "Жоқ, тек бірінші атрибут NULL бола алмайды, қалғандары рұқсат етіледі"
      },
      {
        id: "e9c165cd-a78e-4ebc-8a8a-b7152d3c7af0",
        text: "Иә, бірақ тек дерекқор жүйесі арнайы конфигурацияланған жағдайда ғана"
      },
      {
        id: "49ef9b55-34c2-487c-b15b-3f5221114a2d",
        text: "Жоқ, бірақ бұл ереже тек бір бағаннан тұратын бастапқы кілтке ғана қатысты"
      }
    ],
    correctOptionIds: [
      "7162baaa-5bea-459e-8b76-cd092b375ff7"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b38",
    subjectId: SubjectId.DB,
    text: "Кестелер арасындағы M:N (көптен-көпке) байланысын жүзеге асырудың жалғыз дұрыс жолы қандай?",
    options: [
      {
        id: "db-t05-b38-op1",
        text: "Аралық байланыстырушы кесте (Junction/Bridge table) құру және оған екі кестенің бастапқы кілттерін сыртқы кілт ретінде қосу"
      },
      {
        id: "db-t05-b38-op2",
        text: "Бір кестеге екінші кестенің ID-лерін үтір арқылы жазып қою"
      },
      {
        id: "db-t05-b38-op3",
        text: "Бастапқы кілттерді өшіріп тастау"
      },
      {
        id: "db-t05-b38-op4",
        text: "Сыртқы кілттерді екі кестеге де тікелей жазу"
      },
      {
        id: "db-t05-b38-op5",
        text: "Екі кестенің де бастапқы кілттерін біріктіріп, құрама кілт ретінде бір кестеде қалдыру"
      },
      {
        id: "db-t05-b38-op6",
        text: "Байланыс орнату үшін екі кестеге де бірдей атауы бар жаңа баған қосып, оларға мәнсіз нөлдік ID жазу"
      },
      {
        id: "db-t05-b38-op7",
        text: "Кестелер арасындағы байланысты тек көрініс (View) арқылы логикалық түрде жүзеге асыру"
      },
      {
        id: "db-t05-b38-op8",
        text: "Бір кестенің бастапқы кілтін екінші кестеге сыртқы кілт ретінде қосу және керісінше қайталау"
      }
    ],
    correctOptionIds: [
      "db-t05-b38-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b39",
    subjectId: SubjectId.DB,
    text: "\"Alternate Key\" (Баламалы кілт) кестеде нешеу болуы мүмкін?",
    options: [
      {
        id: "db-t05-b39-op1",
        text: "Кестедегі потенициалды кілттердің санына байланысты бірнешеу немесе мүлдем болмауы мүмкін"
      },
      {
        id: "db-t05-b39-op2",
        text: "Әрқашан тек біреу ғана"
      },
      {
        id: "db-t05-b39-op3",
        text: "Әрқашан тек екеу"
      },
      {
        id: "db-t05-b39-op4",
        text: "Шексіз көп болуы тиіс"
      },
      {
        id: "db-t05-b39-op5",
        text: "Тек бірінші таңдалған баламалы кілт қана сақталады, қалғаны жойылады"
      },
      {
        id: "db-t05-b39-op6",
        text: "Баламалы кілттердің саны әрқашан негізгі кілттің баған санына тең болуы керек"
      },
      {
        id: "db-t05-b39-op7",
        text: "Кестеде кем дегенде екі баламалы кілт болуы міндетті түрде талап етіледі"
      },
      {
        id: "db-t05-b39-op8",
        text: "Баламалы кілт тек сыртқы кілтпен (Foreign Key) бірге ғана құрыла алады"
      }
    ],
    correctOptionIds: [
      "db-t05-b39-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b40",
    subjectId: SubjectId.DB,
    text: "Дерекқорда \"Identified by\" немесе \"Weak Entity Key\" байланысы қалай аталады?",
    options: [
      {
        id: "db-t05-b40-op1",
        text: "Әлсіз нысанның бастапқы кілті күшті нысанның кілтіне сыртқы кілт арқылы тәуелді болуы"
      },
      {
        id: "db-t05-b40-op2",
        text: "Жасанды кілт арқылы байланысу"
      },
      {
        id: "db-t05-b40-op3",
        text: "Сыртқы кілттің бірегей болуы"
      },
      {
        id: "db-t05-b40-op4",
        text: "Тек уақытша байланыс орнату"
      },
      {
        id: "db-t05-b40-op5",
        text: "Әлсіз нысанның өзіндік бірегей кілті болуы және күшті нысанға тәуелді болмауы"
      },
      {
        id: "db-t05-b40-op6",
        text: "Екі нысан арасындағы көпке-көп (Many-to-Many) қатынасын орнату әдісі"
      },
      {
        id: "db-t05-b40-op7",
        text: "Дерекқордағы деректердің уақытша сақталуын қамтамасыз ететін механизм"
      },
      {
        id: "db-t05-b40-op8",
        text: "Күшті нысанның атрибуттарының әлсіз нысанға автоматты түрде көшірілуі"
      }
    ],
    correctOptionIds: [
      "db-t05-b40-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b41",
    subjectId: SubjectId.DB,
    text: "Екі кесте арасындағы 1:1 (бірден-бірге) байланысында сыртқы кілт қай кестеде тұруы керек?",
    options: [
      {
        id: "db-t05-b41-op1",
        text: "Кез келгенінде, бірақ оған міндетті түрде UNIQUE (бірегейлік) шектеуі қойылуы тиіс"
      },
      {
        id: "db-t05-b41-op2",
        text: "Екі кестеде де бір мезгілде тұруы тиіс"
      },
      {
        id: "db-t05-b41-op3",
        text: "Тек оң жақтағы кестеде ғана"
      },
      {
        id: "db-t05-b41-op4",
        text: "Тек сол жақтағы кестеде ғана"
      },
      {
        id: "db-t05-b41-op5",
        text: "Сыртқы кілт екі кестеде де міндетті түрде PRIMARY KEY болуы керек"
      },
      {
        id: "db-t05-b41-op6",
        text: "1:1 байланысында сыртқы кілт қолданылмайды, тек аралық кесте жасалады"
      },
      {
        id: "db-t05-b41-op7",
        text: "Сыртқы кілт деректері көп жағында (Many) орналасуы шарт"
      },
      {
        id: "db-t05-b41-op8",
        text: "Екі кестенің де негізгі кілттері автоматты түрде сыртқы кілт рөлін атқарады"
      }
    ],
    correctOptionIds: [
      "db-t05-b41-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b42",
    subjectId: SubjectId.DB,
    text: "ДҚБЖ-да \"Surrogate Key\" қолданудың басты артықшылығы қандай?",
    options: [
      {
        id: "db-t05-b42-op1",
        text: "Бизнес-талаптар өзгерсе де кілт мәні өзгермейді және JOIN операциялары бүтін сандар арқылы өте жылдам орындалады"
      },
      {
        id: "db-t05-b42-op2",
        text: "Ол жадыдан мүлдем орын алмайды"
      },
      {
        id: "db-t05-b42-op3",
        text: "Ол кестені автоматты түрде нормализациялайды"
      },
      {
        id: "db-t05-b42-op4",
        text: "Ол тек оқу сұраныстарын ғана жылдамдатады"
      },
      {
        id: "db-t05-b42-op5",
        text: "Ол деректердің семантикалық мағынасын сақтауға және бизнес-ережелерді тікелей кодтауға мүмкіндік береді"
      },
      {
        id: "db-t05-b42-op6",
        text: "Ол қосымша индекстер құрудың қажеттілігін толығымен жояды және дискілік кеңістікті үнемдейді"
      },
      {
        id: "db-t05-b42-op7",
        text: "Ол пайдаланушыға түсінікті болуы үшін әрқашан адам оқи алатын мәтіндік форматта сақталады"
      },
      {
        id: "db-t05-b42-op8",
        text: "Ол кестелер арасындағы сыртқы кілттердің (Foreign Key) шектеулерін автоматты түрде алып тастайды"
      }
    ],
    correctOptionIds: [
      "db-t05-b42-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b43",
    subjectId: SubjectId.DB,
    text: "\"Natural Key\" қолданудың кемшілігі қандай болуы мүмкін?",
    options: [
      {
        id: "db-t05-b43-op1",
        text: "Егер бизнес-ережелер өзгерсе (мысалы, ЖСН форматы өзгерсе), барлық байланысқан кестелердегі кілттерді өзгерту өте қиын әрі қымбатқа түседі"
      },
      {
        id: "db-t05-b43-op2",
        text: "Ол тек сандарды сақтай алады"
      },
      {
        id: "db-t05-b43-op3",
        text: "Ол автоматты түрде өшіріледі"
      },
      {
        id: "db-t05-b43-op4",
        text: "Оны SQL сұраныстарында қолдану мүмкін емес"
      },
      {
        id: "db-t05-b43-op5",
        text: "Natural Key қолдану кестедегі деректер көлемін автоматты түрде шектейді"
      },
      {
        id: "db-t05-b43-op6",
        text: "Natural Key тек бір ғана бағаннан тұруы мүмкін, сондықтан күрделі деректер үшін жарамсыз"
      },
      {
        id: "db-t05-b43-op7",
        text: "Natural Key қолданғанда индекстер құруға тыйым салынған"
      },
      {
        id: "db-t05-b43-op8",
        text: "Natural Key әрқашан уақыт өте келе бірегейлігін жоғалтады және қайталана бастайды"
      }
    ],
    correctOptionIds: [
      "db-t05-b43-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b44",
    subjectId: SubjectId.DB,
    text: "\"Candidate Key\" (Потенциалды кілт) кестеде нешеу болуы мүмкін?",
    options: [
      {
        id: "db-t05-b44-op1",
        text: "Кесте құрылымына байланысты бірнешеу болуы мүмкін (бірақ бастапқы кілт ретінде тек біреуі ғана таңдалады)"
      },
      {
        id: "db-t05-b44-op2",
        text: "Әрқашан тек біреу ғана"
      },
      {
        id: "db-t05-b44-op3",
        text: "Міндетті түрде екеу"
      },
      {
        id: "db-t05-b44-op4",
        text: "Мүлдем болмауы тиіс"
      },
      {
        id: "db-t05-b44-op5",
        text: "Кестедегі бағандар санына тең болуы міндетті"
      },
      {
        id: "db-t05-b44-op6",
        text: "Тек сыртқы кілттер (Foreign Keys) бар кезде ғана пайда болады"
      },
      {
        id: "db-t05-b44-op7",
        text: "Әрқашан кемінде үшеу болуы шарт"
      },
      {
        id: "db-t05-b44-op8",
        text: "Деректер өзгерген сайын автоматты түрде жоғалып отырады"
      }
    ],
    correctOptionIds: [
      "db-t05-b44-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b45",
    subjectId: SubjectId.DB,
    text: "Дерекқорда \"Foreign Key\" (Сыртқы кілт) бағанына UNIQUE шектеуін қойсақ не болады?",
    options: [
      {
        id: "db-t05-b45-op1",
        text: "Екі кесте арасындағы байланыс 1:M-нен 1:1 (бірден-бірге) байланысына ауысады"
      },
      {
        id: "db-t05-b45-op2",
        text: "Байланыс көптен-көпке (M:N) ауысады"
      },
      {
        id: "db-t05-b45-op3",
        text: "Бастапқы кілт автоматты түрде өшеді"
      },
      {
        id: "db-t05-b45-op4",
        text: "Кестеге дерек қосуға тыйым салынады"
      },
      {
        id: "db-t05-b45-op5",
        text: "Сыртқы кілт бағанында NULL мәндерін енгізуге тыйым салынады"
      },
      {
        id: "db-t05-b45-op6",
        text: "Дерекқордың жұмыс істеу жылдамдығы күрт төмендейді"
      },
      {
        id: "db-t05-b45-op7",
        text: "Байланысқан кестелер арасындағы деректер автоматты түрде жойылады"
      },
      {
        id: "db-t05-b45-op8",
        text: "Кесте құрылымы өзгеріп, ол материалданған көрініске (materialized view) айналады"
      }
    ],
    correctOptionIds: [
      "db-t05-b45-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b46",
    subjectId: SubjectId.DB,
    text: "\"Referential Action\" (Сілтемелік әрекеттер) деген не?",
    options: [
      {
        id: "db-t05-b46-op1",
        text: "Басты кестедегі жол жойылғанда немесе өзгергенде бағынышты кестедегі сыртқы кілт мәндерімен орындалатын әрекеттер (CASCADE, SET NULL, т.б.)"
      },
      {
        id: "db-t05-b46-op2",
        text: "Бастапқы кілтті өзгерту ережелері"
      },
      {
        id: "db-t05-b46-op3",
        text: "SQL сұранысын оңтайландыру әрекеті"
      },
      {
        id: "db-t05-b46-op4",
        text: "Деректерді шифрлау әдістері"
      },
      {
        id: "db-t05-b46-op5",
        text: "Кестелер арасындағы деректерді көшіру жылдамдығын арттыратын индекстеу әдісі"
      },
      {
        id: "db-t05-b46-op6",
        text: "Пайдаланушының кестеге қол жеткізу құқығын шектейтін қауіпсіздік протоколы"
      },
      {
        id: "db-t05-b46-op7",
        text: "Бір кестеден екінші кестеге деректерді автоматты түрде синхрондаудың физикалық процесі"
      },
      {
        id: "db-t05-b46-op8",
        text: "SQL сұраныстарында қателерді болдырмау үшін қолданылатын транзакциялық блоктау механизмі"
      }
    ],
    correctOptionIds: [
      "db-t05-b46-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9bdf0777-f68a-4296-8ac7-cba7c78be0f7",
    subjectId: SubjectId.DB,
    text: "Дерекқорда \"Self-referencing Foreign Key\" қандай иерархиялық құрылымдарды сақтау үшін жиі қолданылады?",
    options: [
      {
        id: "3ef61bd2-ece3-4209-8056-d85e7e80ba90",
        text: "Ағаш құрылымдарын (мысалы, Қызметкерлер мен олардың басшылары, Тауар санаттары мен олардың ішкі санаттары)"
      },
      {
        id: "c4540dc2-1c82-4d78-850e-b9254a27f28e",
        text: "Тек сызықтық тізімдерді"
      },
      {
        id: "eb3055a2-ed4e-49ca-86be-f9fd5ebfbb7c",
        text: "Ешқандай байланысы жоқ файлдарды"
      },
      {
        id: "978f9535-7dae-4207-94aa-8e13c3ee29fb",
        text: "Тек NoSQL дерекқорларын"
      },
      {
        id: "3f05b643-bb3c-4d5d-aba5-116067ee5488",
        text: "Тек бір-бірімен байланысы жоқ тәуелсіз кестелерді"
      },
      {
        id: "0fda71a3-1209-4e95-85d3-d6f609f17c42",
        text: "Көптеген дереккөздерден алынған уақытша деректерді"
      },
      {
        id: "94c11222-e5e1-41b1-8d25-743de1db6168",
        text: "Тек екі кесте арасындағы сызықтық қатынастарды"
      },
      {
        id: "eb3af129-2456-4932-8ac5-b06cb062b173",
        text: "Дерекқордағы индекстер мен көшірмелерді"
      }
    ],
    correctOptionIds: [
      "3ef61bd2-ece3-4209-8056-d85e7e80ba90"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "78b41cb8-9756-466c-8abe-f24ca700cc3b",
    subjectId: SubjectId.DB,
    text: "\"Foreign Key\" сілтеме жасайтын баған бастапқы кестеде міндетті түрде бірегей (UNIQUE немесе PRIMARY KEY) болуы шарт па?",
    options: [
      {
        id: "e4370015-9bb3-4834-a02b-cd11cf07f747",
        text: "Иә, әйтпесе сілтеменің қай жолға бағытталғанын бір мәнді анықтау мүмкін болмайды (ДҚБЖ қате шығарады)"
      },
      {
        id: "c5425c91-f7c1-467d-904a-f3d8269b6cbd",
        text: "Жоқ, кез келген қайталанатын бағанға сілтеме жасай беруге болады"
      },
      {
        id: "a64fcbdd-5651-427c-8fe3-0e512a980db9",
        text: "Тек сандық баған болса болғаны"
      },
      {
        id: "7abee8bc-6fee-4c87-b865-200f614e03fb",
        text: "Бұл міндетті емес"
      },
      {
        id: "727e4eba-c8ec-4f11-b084-dede7a4cb0c3",
        text: "Жоқ, бастапқы кестедегі баған тек индекстелген болса жеткілікті"
      },
      {
        id: "fa38e966-4961-4882-9f60-3d811d4a9a32",
        text: "Иә, бірақ тек егер екі кесте де бір схемада орналасса ғана"
      },
      {
        id: "261667c4-0a65-4996-b388-76db1ae300ea",
        text: "Жоқ, Foreign Key сілтеме жасайтын баған бастапқы кестеде NULL мәндеріне рұқсат етілсе болғаны"
      },
      {
        id: "ec2beb4f-2fa0-4dbe-8ea7-0a81d7330cc3",
        text: "Иә, бірақ бұл шарт тек INSERT операциясы кезінде ғана тексеріледі"
      }
    ],
    correctOptionIds: [
      "e4370015-9bb3-4834-a02b-cd11cf07f747"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5fc7f25b-ca27-4207-a697-0601346bfbd0",
    subjectId: SubjectId.DB,
    text: "\"Superkey\" жиынтығынан кез келген атрибутты алып тастағанда ол әлі де бірегейлікті сақтаса, бұл суперкілт туралы не айтуға болады?",
    options: [
      {
        id: "0b6df52c-d77f-423b-b0ef-ce0e5ea10701",
        text: "Ол минималды емес (яғни потенциалды кілт бола алмайды)"
      },
      {
        id: "7e56537c-9ec3-43ee-9af2-79b547983294",
        text: "Ол бастапқы кілт болып табылады"
      },
      {
        id: "dd855283-6106-491d-9dbc-cecdefeeac2f",
        text: "Ол сыртқы кілт болып табылады"
      },
      {
        id: "6e4fd874-8614-43da-bab0-4784839ad46c",
        text: "Ол бос жиын болып табылады"
      },
      {
        id: "0df82e37-4f23-4055-8ff6-93fe4f4d49ab",
        text: "Ол кандидаттық кілт (potential key) болып саналады"
      },
      {
        id: "87734ee1-7968-40cd-b7cd-3e71148cba65",
        text: "Бұл жағдайда суперкілт автоматты түрде бастапқы кілтке айналады"
      },
      {
        id: "836d697f-6958-4f9c-868c-93d117872ccb",
        text: "Атрибутты алып тастау деректердің тұтастығын бұзбайды, сондықтан ол әлі де толық суперкілт"
      },
      {
        id: "f904865a-cd1a-4741-b877-dbeb931a9952",
        text: "Мұндай суперкілт сыртқы кілт ретінде қызмет ете алады"
      }
    ],
    correctOptionIds: [
      "0b6df52c-d77f-423b-b0ef-ce0e5ea10701"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "344a57fd-5009-45e9-bebe-eec27bbba090",
    subjectId: SubjectId.DB,
    text: "Егер \"Студенттер\" және \"Үйірмелер\" кестелері арасында көптен-көпке (M:N) байланыс орнатқымыз келсе, аралық кестенің бастапқы кілті әдетте қалай құрылады?",
    options: [
      {
        id: "0a161ec4-4a0d-4b8a-8d40-925226e03d5f",
        text: "Екі сыртқы кілттің бірігуінен құралған құрама бастапқы кілт ретінде (Composite Primary Key)"
      },
      {
        id: "54ef312b-7107-4288-b338-6f7933378fda",
        text: "Тек студенттің ID-і арқылы"
      },
      {
        id: "95b31ed1-9d75-4ea3-b0a3-5190604ca0c0",
        text: "Тек үйірменің ID-і арқылы"
      },
      {
        id: "9e1ecb21-f16a-4912-b6e6-4f221cd32786",
        text: "Жүйе автоматты түрде жаңа ID жасайды"
      },
      {
        id: "0ee1ed38-53a1-4c47-8d3b-80cdbf747976",
        text: "Екі кестенің барлық қалған бағандарының бірігуінен"
      },
      {
        id: "7122f21f-f7ac-4138-ad5b-8bbce3c923c4",
        text: "Студенттер кестесінің бастапқы кілтін көшіру арқылы"
      },
      {
        id: "4c4c6c85-6a7d-4f01-8db9-5f401684623d",
        text: "Үйірмелер кестесіне қосымша жасанды тізімдік өріс қосу арқылы"
      },
      {
        id: "16a2e11a-5869-4d4d-a185-2de62b292caf",
        text: "Кез келген бір сыртқы кілтті таңдап, оны бірегей ету үшін индекстеу арқылы"
      }
    ],
    correctOptionIds: [
      "0a161ec4-4a0d-4b8a-8d40-925226e03d5f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "13c146d9-8503-4a3a-89f4-bc0954a667e0",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Foreign Key\" (Сыртқы кілт) өз кестесіндегі Бастапқы кілттің (Primary Key) құрамына кіре ала ма?",
    options: [
      {
        id: "16f92955-152d-492b-b8d7-48d1bf326c18",
        text: "Иә, әсіресе әлсіз нысандарды (Weak Entities) жобалау кезінде немесе аралық байланыстырушы кестелерде"
      },
      {
        id: "337a0673-f312-431e-94ac-4819837300aa",
        text: "Жоқ, сыртқы кілт ешқашан бастапқы кілт бола алмайды"
      },
      {
        id: "0e0f0f7f-4b93-46b2-8436-917b46393309",
        text: "Тек уақытша кестелерде ғана кіре алады"
      },
      {
        id: "f3619942-61ac-4c44-9f40-e46eb5012ec2",
        text: "Тек сандық форматта болса ғана рұқсат етіледі"
      },
      {
        id: "cbf59ae8-3c88-4c10-a863-f19e297d27cf",
        text: "Жоқ, сыртқы кілт тек деректерді сақтау үшін қолданылады және ешқашан кілттік қасиетке ие бола алмайды"
      },
      {
        id: "16929bd8-562f-40ce-b3c2-1a5d8d2bae66",
        text: "Иә, бірақ тек егер сыртқы кілт NULL мәнін қабылдайтын болса ғана рұқсат етіледі"
      },
      {
        id: "eaada729-4cc0-49eb-bed7-971713834af6",
        text: "Жоқ, бастапқы кілт міндетті түрде авто-инкрементті болуы керек, ал сыртқы кілт ондай бола алмайды"
      },
      {
        id: "896a01c0-70a1-43ea-adb8-d16992c44183",
        text: "Иә, бірақ тек бір кесте ішіндегі өздік байланыс (self-reference) жағдайында ғана мүмкін"
      }
    ],
    correctOptionIds: [
      "16f92955-152d-492b-b8d7-48d1bf326c18"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b47",
    subjectId: SubjectId.DB,
    text: "\"ON UPDATE CASCADE\" шектеуі орындалғанда не болады?",
    options: [
      {
        id: "db-t05-b47-op1",
        text: "Басты кестедегі бастапқы кілт өзгерген кезде, бағынышты кестедегі сәйкес сыртқы кілттің мәндері де автоматты түрде жаңа мәнге өзгереді"
      },
      {
        id: "db-t05-b47-op2",
        text: "Бағынышты кестедегі сәйкес жолдар жойылады"
      },
      {
        id: "db-t05-b47-op3",
        text: "Басты кестедегі өзгертуге тыйым салынады"
      },
      {
        id: "db-t05-b47-op4",
        text: "Бағынышты кестедегі мәндер NULL болады"
      },
      {
        id: "db-t05-b47-op5",
        text: "Басты кестедегі жол өзгергенде, бағынышты кестеге жаңа көшірме жол автоматты түрде қосылады"
      },
      {
        id: "db-t05-b47-op6",
        text: "Бағынышты кестедегі сәйкес жолдар уақытша бұғатталып, өзгерту аяқталғанша қолжетімсіз болады"
      },
      {
        id: "db-t05-b47-op7",
        text: "Басты кестедегі кілт өзгерген кезде, бағынышты кестедегі ескі мәндер сақталып, тек ескерту хабарламасы шығады"
      },
      {
        id: "db-t05-b47-op8",
        text: "Өзгерту операциясы орындалмас бұрын бағынышты кестедегі барлық деректер толығымен тазартылады"
      }
    ],
    correctOptionIds: [
      "db-t05-b47-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b48",
    subjectId: SubjectId.DB,
    text: "Дерекқорда \"Foreign Key\" (Сыртқы кілт) арқылы байланыс орнатудың басты мақсаты не?",
    options: [
      {
        id: "db-t05-b48-op1",
        text: "Кестелер арасындағы dereктердің қайшылықсыздығын (data consistency) және бүтіндігін жүйелік деңгейде бақылау"
      },
      {
        id: "db-t05-b48-op2",
        text: "Кестенің көлемін кішірейту"
      },
      {
        id: "db-t05-b48-op3",
        text: "Деректерді дискіде сұрыптау"
      },
      {
        id: "db-t05-b48-op4",
        text: "Пайдаланушы интерфейсін құру"
      },
      {
        id: "db-t05-b48-op5",
        text: "Кестедегі жолдарды физикалық тұрғыдан жылдам іздеу үшін индекстік құрылым құру"
      },
      {
        id: "db-t05-b48-op6",
        text: "Деректерді сақтау кезінде дискілік кеңістікті сығу арқылы үнемдеу"
      },
      {
        id: "db-t05-b48-op7",
        text: "Кестелер арасындағы деректерді автоматты түрде көшіріп, дубликаттау"
      },
      {
        id: "db-t05-b48-op8",
        text: "Пайдаланушының сұраныстарын орындау жылдамдығын арттыру үшін кэш жасау"
      }
    ],
    correctOptionIds: [
      "db-t05-b48-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b49",
    subjectId: SubjectId.DB,
    text: "\"Surrogate Key\" (Жасанды кілт) қолданудың маңызды талабы қандай?",
    options: [
      {
        id: "db-t05-b49-op1",
        text: "Оның мәні кестедегі әрбір жол үшін міндетті түрде бірегей (UNIQUE) және өзгермейтін (immutability) болуы керек"
      },
      {
        id: "db-t05-b49-op2",
        text: "Ол тек қазақ әріптерінен тұруы керек"
      },
      {
        id: "db-t05-b49-op3",
        text: "Оның ұзындығы 5 символды құрауы тиіс"
      },
      {
        id: "db-t05-b49-op4",
        text: "Ол әрқашан теріс сан болуы керек"
      },
      {
        id: "db-t05-b49-op5",
        text: "Ол міндетті түрде бизнес-логикаға негізделген табиғи деректерден (мысалы, ТЖН немесе телефон нөмірі) тұруы керек"
      },
      {
        id: "db-t05-b49-op6",
        text: "Оның мәні уақыт өте келе жүйелік қажеттілікке байланысты өзгеріп отыруы тиіс"
      },
      {
        id: "db-t05-b49-op7",
        text: "Ол тек сыртқы кілт (Foreign Key) ретінде ғана қолданылуы мүмкін және бастапқы кестеде болмауы керек"
      },
      {
        id: "db-t05-b49-op8",
        text: "Оның бірегейлігі кепілдендірілмейді, себебі ол жай ғана жолдарды реттеу үшін қызмет етеді"
      }
    ],
    correctOptionIds: [
      "db-t05-b49-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b50",
    subjectId: SubjectId.DB,
    text: "Бастапқы кілт (Primary Key) үшін \"Immutability\" (өзгермейтіндік) қасиеті неліктен маңызды?",
    options: [
      {
        id: "db-t05-b50-op1",
        text: "Себебі оның мәні өзгерсе, оған сілтеме жасаған барлық сыртқы кілттерді де жаңарту қажет болады, бұл жүйеге үлкен салмақ түсіреді"
      },
      {
        id: "db-t05-b50-op2",
        text: "Жүйенің толықтай өшуіне жол бермеу үшін"
      },
      {
        id: "db-t05-b50-op3",
        text: "Индекстердің жұмысын жеңілдету үшін"
      },
      {
        id: "db-t05-b50-op4",
        text: "SQL сұраныстарының синтаксисін сақтау үшін"
      },
      {
        id: "db-t05-b50-op5",
        text: "Бастапқы кілттің мәні өзгергенде дерекқор автоматты түрде жаңа кесте құрады"
      },
      {
        id: "db-t05-b50-op6",
        text: "Өзгермейтіндік қасиеті деректерді сығу (compression) алгоритмін жақсарту үшін қажет"
      },
      {
        id: "db-t05-b50-op7",
        text: "Бұл қасиет пайдаланушыға кестеге жаңа жазбалар қосуға тыйым салады"
      },
      {
        id: "db-t05-b50-op8",
        text: "Егер кілт өзгерсе, жүйе барлық бұрынғы транзакцияларды өшіріп тастайды"
      }
    ],
    correctOptionIds: [
      "db-t05-b50-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b51",
    subjectId: SubjectId.DB,
    text: "\"Intelligent Key\" (Ақылды кілт) деген не?",
    options: [
      {
        id: "db-t05-b51-op1",
        text: "Өз құрамында қандай да бір бизнес-ақпаратты сақтайтын кілт (мысалы, алғашқы екі әрпі қаланы білдіретін код)"
      },
      {
        id: "db-t05-b51-op2",
        text: "Автоинкрементті ID"
      },
      {
        id: "db-t05-b51-op3",
        text: "Тек уақытша қолданылатын кілт"
      },
      {
        id: "db-t05-b51-op4",
        text: "ДҚБЖ автоматты түрде таңдайтын кілт"
      },
      {
        id: "db-t05-b51-op5",
        text: "Жасанды интеллект алгоритмі арқылы деректерді талдап, ең оңтайлы кілтті автоматты түрде ұсынатын механизм"
      },
      {
        id: "db-t05-b51-op6",
        text: "Кестедегі барлық жазбалардың бірегейлігін қамтамасыз ету үшін жүйе генерациялайтын кездейсоқ сандық код"
      },
      {
        id: "db-t05-b51-op7",
        text: "Бірнеше кестені байланыстыру үшін қолданылатын және мәні өзгермейтін тұрақты сыртқы кілт"
      },
      {
        id: "db-t05-b51-op8",
        text: "Дерекқорды қауіпсіздендіру мақсатында шифрлау кілті ретінде қызмет ететін арнайы өріс"
      }
    ],
    correctOptionIds: [
      "db-t05-b51-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b52",
    subjectId: SubjectId.DB,
    text: "Дерекқор жобасында \"Intelligent Key\" (Ақылды кілт) қолдану неліктен ұсынылмайды?",
    options: [
      {
        id: "db-t05-b52-op1",
        text: "Себебі оның құрамындағы ақпарат өзгерсе (мысалы, адамның қаласы өзгерсе), кілтті өзгерту қажет болады, бұл тұтастықты бұзады"
      },
      {
        id: "db-t05-b52-op2",
        text: "Ол тым ұзын болғандықтан"
      },
      {
        id: "db-t05-b52-op3",
        text: "Оны SQL сұранысында іздеу қиын болғандықтан"
      },
      {
        id: "db-t05-b52-op4",
        text: "Ол тек NoSQL дерекқорларында ғана жұмыс істейтіндіктен"
      },
      {
        id: "db-t05-b52-op5",
        text: "Себебі ақылды кілттер дерекқордың жұмыс жылдамдығын айтарлықтай төмендетеді"
      },
      {
        id: "db-t05-b52-op6",
        text: "Себебі олар тек бір ғана кестеде қолданылуы мүмкін және байланыс орната алмайды"
      },
      {
        id: "db-t05-b52-op7",
        text: "Себебі ақылды кілттерді қолдану SQL стандартына сәйкес келмейді және тыйым салынған"
      },
      {
        id: "db-t05-b52-op8",
        text: "Себебі олар автоматты түрде генерацияланбайды және әрқашан қолмен енгізуді талап етеді"
      }
    ],
    correctOptionIds: [
      "db-t05-b52-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "bd91503f-20e5-4901-bbe4-02c837047aef",
    subjectId: SubjectId.DB,
    text: "\"Candidate Key\" (Потенциалды кілт) мен \"Alternate Key\" (Баламалы кілт) арасындағы байланысты анықтаңыз:",
    options: [
      {
        id: "2bb977e9-a5ea-489f-a16c-7c37e4d3904c",
        text: "Candidate Keys = Primary Key + Alternate Keys"
      },
      {
        id: "4526f139-da89-45bf-9f71-1c797f10c710",
        text: "Alternate Keys = Primary Key - Candidate Keys"
      },
      {
        id: "60827368-b73e-4841-b5d0-5e46ca9c0495",
        text: "Candidate Keys = Alternate Keys - Primary Key"
      },
      {
        id: "a15c347e-de22-4d39-8282-0cfbac7735e3",
        text: "Олардың ешқандай байланысы жоқ"
      },
      {
        id: "b5e247ef-9fcb-46d5-9d7f-695db7e6da8b",
        text: "Alternate Key — бұл Candidate Key-дің ішінен таңдалған жалғыз кілт"
      },
      {
        id: "1fa25e5b-2d61-4258-bdf6-9a55e28e3b68",
        text: "Candidate Key — бұл тек Primary Key және Foreign Key жиынтығы"
      },
      {
        id: "c17d29a7-99f8-4c06-91ef-fffca3a1f866",
        text: "Alternate Key — бұл кестедегі барлық мүмкін емес кілттердің қосындысы"
      },
      {
        id: "1d17d71d-db4a-4b28-843b-97ecd888521d",
        text: "Candidate Key мен Alternate Key бір-біріне толығымен тәуелсіз ұғымдар"
      }
    ],
    correctOptionIds: [
      "2bb977e9-a5ea-489f-a16c-7c37e4d3904c"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b53",
    subjectId: SubjectId.DB,
    text: "\"Composite Key\" (Құрама кілт) құрамына кіретін атрибуттар санының шегі бар ма?",
    options: [
      {
        id: "db-t05-b53-op1",
        text: "Теориялық тұрғыдан шектелмеген, бірақ өнімділік пен қарапайымдылық үшін атрибуттар санын мүмкіндігінше аз (2-3 атрибут) еткен дұрыс"
      },
      {
        id: "db-t05-b53-op2",
        text: "Максимум 2 атрибут болуы керек"
      },
      {
        id: "db-t05-b53-op3",
        text: "Міндетті түрде 5-тен көп болуы тиіс"
      },
      {
        id: "db-t05-b53-op4",
        text: "Тек 1 атрибут болуы мүмкін"
      },
      {
        id: "db-t05-b53-op5",
        text: "Құрама кілт міндетті түрде кемінде 4 атрибуттан тұруы керек"
      },
      {
        id: "db-t05-b53-op6",
        text: "Әрбір қосымша атрибут үшін дерекқор жүйесі арнайы лицензия талап етеді, сондықтан шектеулі"
      },
      {
        id: "db-t05-b53-op7",
        text: "Құрама кілт тек сандық деректерден (integer) тұратын 2 атрибутпен шектеледі"
      },
      {
        id: "db-t05-b53-op8",
        text: "Атрибуттар саны кестедегі жолдар санының квадрат түбірінен аспауы тиіс"
      }
    ],
    correctOptionIds: [
      "db-t05-b53-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b54",
    subjectId: SubjectId.DB,
    text: "\"ON DELETE SET DEFAULT\" сілтемелік әрекеті қалай жұмыс істейді?",
    options: [
      {
        id: "db-t05-b54-op1",
        text: "Басты кестедегі жол жойылғанда бағынышты кестедегі сыртқы кілт мәні әдепкі (DEFAULT) деп көрсетілген мәнге ауысады"
      },
      {
        id: "db-t05-b54-op2",
        text: "Бағынышты кестедегі жолдар толығымен өшіріледі"
      },
      {
        id: "db-t05-b54-op3",
        text: "Бастапқы кілттің мәні өзгеріссіз қалады"
      },
      {
        id: "db-t05-b54-op4",
        text: "Сыртқы кілттің мәні автоматты түрде NULL болады"
      },
      {
        id: "db-t05-b54-op5",
        text: "Басты кестедегі жол жойылғанда бағынышты кестедегі сәйкес жолдар автоматты түрде жаңартылып, соңғы енгізілген мәнмен толтырылады"
      },
      {
        id: "db-t05-b54-op6",
        text: "Сыртқы кілт мәні басты кестедегі жойылған жолдың идентификаторына тең болатын жаңа жолды автоматты түрде құрады"
      },
      {
        id: "db-t05-b54-op7",
        text: "Бағынышты кестедегі сыртқы кілт өрісіне рұқсат етілмеген операция болғандықтан, жойу әрекеті толығымен тоқтатылады және қате шығарылады"
      },
      {
        id: "db-t05-b54-op8",
        text: "Басты кестедегі жол жойылғанда бағынышты кестедегі барлық жазбалар уақытша блокталып, қолмен тексеруден кейін ғана өшіріледі"
      }
    ],
    correctOptionIds: [
      "db-t05-b54-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b55",
    subjectId: SubjectId.DB,
    text: "\"Non-prime Attribute\" (Бастапқы емес атрибут) дегеніміз не?",
    options: [
      {
        id: "db-t05-b55-op1",
        text: "Кестедегі ешбір потенциалды кілттің (Candidate Key) құрамына кірмейтін атрибут"
      },
      {
        id: "db-t05-b55-op2",
        text: "Бастапқы кілттің бірінші бағаны"
      },
      {
        id: "db-t05-b55-op3",
        text: "Сыртқы кілт болып табылатын баған"
      },
      {
        id: "db-t05-b55-op4",
        text: "NULL мәнін қабылдамайтын атрибут"
      },
      {
        id: "db-t05-b55-op5",
        text: "Кестедегі кез келген кілттің (Primary немесе Candidate) құрамына міндетті түрде кіретін атрибут"
      },
      {
        id: "db-t05-b55-op6",
        text: "Тек сыртқы кілттермен байланыс орнататын және басқа кестеге сілтеме жасайтын баған"
      },
      {
        id: "db-t05-b55-op7",
        text: "Кестедегі барлық жазбалар үшін бірегей мәнге ие болуы шарт емес кез келген баған"
      },
      {
        id: "db-t05-b55-op8",
        text: "Нормализация процесінде екінші қалыпты формаға (2NF) өту кезінде алынып тасталатын артық атрибут"
      }
    ],
    correctOptionIds: [
      "db-t05-b55-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b56",
    subjectId: SubjectId.DB,
    text: "\"Prime Attribute\" (Бастапқы атрибут) дегеніміз не?",
    options: [
      {
        id: "db-t05-b56-op1",
        text: "Кестедегі кез келген потенциалды кілттің (Candidate Key) құрамына кіретін атрибут"
      },
      {
        id: "db-t05-b56-op2",
        text: "Тек сандық форматтағы баған"
      },
      {
        id: "db-t05-b56-op3",
        text: "Сыртқы кілтке сілтеме жасайтын атрибут"
      },
      {
        id: "db-t05-b56-op4",
        text: "Кестенің ең соңғы бағаны"
      },
      {
        id: "db-t05-b56-op5",
        text: "Кестедегі мәндері қайталанбайтын кез келген атрибут"
      },
      {
        id: "db-t05-b56-op6",
        text: "Бастапқы кілт (Primary Key) ретінде таңдалған жалғыз атрибут"
      },
      {
        id: "db-t05-b56-op7",
        text: "NULL мәнін қабылдамайтын кез келген баған"
      },
      {
        id: "db-t05-b56-op8",
        text: "Кестенің бірінші жазбасындағы мән бірегей болатын атрибут"
      }
    ],
    correctOptionIds: [
      "db-t05-b56-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b57",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Foreign Key\" (Сыртқы кілт) бағанына индекс (Index) құру неліктен маңызды?",
    options: [
      {
        id: "db-t05-b57-op1",
        text: "JOIN операцияларының орындалуын және сілтемелік тұтастықты тексеруді айтарлықтай жылдамдату үшін"
      },
      {
        id: "db-t05-b57-op2",
        text: "Кестедегі деректерді автоматты түрде өшіру үшін"
      },
      {
        id: "db-t05-b57-op3",
        text: "Жаңа пайдаланушыларды авторизациялау үшін"
      },
      {
        id: "db-t05-b57-op4",
        text: "Кестенің өлшемін кішірейту үшін"
      },
      {
        id: "db-t05-b57-op5",
        text: "Сыртқы кілт бағанындағы деректердің қайталануын болдырмау үшін"
      },
      {
        id: "db-t05-b57-op6",
        text: "Кестеге жаңа жазбаларды енгізу кезінде деректерді автоматты түрде шифрлау үшін"
      },
      {
        id: "db-t05-b57-op7",
        text: "Бастапқы кілт (Primary Key) мәндерін сыртқы кілт арқылы өзгертуге рұқсат беру үшін"
      },
      {
        id: "db-t05-b57-op8",
        text: "Дерекқордың физикалық сақтау көлемін азайтып, диск кеңістігін үнемдеу үшін"
      }
    ],
    correctOptionIds: [
      "db-t05-b57-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "573ec839-93d7-4ece-8997-42fadcf1448c",
    subjectId: SubjectId.DB,
    text: "\"Primary Key\" (Бастапқы кілт) мәні ретінде мәтіндік (VARCHAR) бағандарды таңдаудың тиімсіздігі неде?",
    options: [
      {
        id: "8c7fd37c-9351-4281-8027-b8eaa69ae73a",
        text: "Мәтіндерді салыстыру бүтін сандарға (INT) қарағанда баяу жүреді және индекстер дискіде көп орын алады"
      },
      {
        id: "a6a0acc9-dafc-41f3-bde0-b3fb053b1ce0",
        text: "Мәтіндік бағандарда бірегейлікті сақтау мүмкін емес"
      },
      {
        id: "d1bb4903-7997-4073-89a4-4c63be051994",
        text: "Олар NULL қабылдай алмайды"
      },
      {
        id: "3e3a2148-f183-4594-9301-abb97dabe635",
        text: "Олар тек сыртқы кілт үшін жарамды"
      },
      {
        id: "36da7505-d2c9-4e87-bc4d-48e43ac1dc37",
        text: "Мәтіндік кілттер қолданылса, дерекқор автоматты түрде кесте құрылымын өзгертіп, оны NoSQL форматына ауыстырады"
      },
      {
        id: "30b44bff-033e-45f7-8e78-6a4a2f9b14b6",
        text: "VARCHAR типіндегі бастапқы кілттер тек бір ғана жазбаға рұқсат береді, яғни кестеде бір ғана қатар болуы мүмкін"
      },
      {
        id: "ece53342-45a0-4589-94e2-36650a1591f3",
        text: "Мәтіндік бағандарды бастапқы кілт ету SQL стандарты бойынша тыйым салынған және синтаксистік қате туғызады"
      },
      {
        id: "eeb7d9f3-28f3-473a-89cc-9bf568c47140",
        text: "Мәтіндік кілттер индекстелмейді, сондықтан іздеу операциялары әрқашан толық кестені сканерлеуді талап етеді"
      }
    ],
    correctOptionIds: [
      "8c7fd37c-9351-4281-8027-b8eaa69ae73a"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b58",
    subjectId: SubjectId.DB,
    text: "\"Weak Entity\" (Әлсіз нысан) кестесінде оның өзіндік дербес бірегей бастапқы кілті бола ма?",
    options: [
      {
        id: "db-t05-b58-op1",
        text: "Жоқ, оның бастапқы кілті күшті нысанның кілті (сыртқы кілт ретінде) мен өз дискриминаторының бірігуінен құралады"
      },
      {
        id: "db-t05-b58-op2",
        text: "Иә, ол өз бетінше мүлдем бөлек бастапқы кілт жасайды"
      },
      {
        id: "db-t05-b58-op3",
        text: "Оның мүлдем бастапқы кілті болмайды"
      },
      {
        id: "db-t05-b58-op4",
        text: "Тек автоинкрементті ID болады"
      },
      {
        id: "db-t05-b58-op5",
        text: "Иә, бірақ ол тек әлсіз нысанға тән арнайы дискриминатор өрісінен ғана тұрады"
      },
      {
        id: "db-t05-b58-op6",
        text: "Жоқ, ол күшті нысанның сыртқы кілтін толығымен көшіріп алады және өзгеріссіз пайдаланады"
      },
      {
        id: "db-t05-b58-op7",
        text: "Иә, егер әлсіз нысан кемінде бір қосымша атрибутқа ие болса, ол дербес бастапқы кілт құра алады"
      },
      {
        id: "db-t05-b58-op8",
        text: "Жоқ, әлсіз нысандарда бастапқы кілт орнына тек индекстелген қарапайым өрістер жиынтығы қолданылады"
      }
    ],
    correctOptionIds: [
      "db-t05-b58-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "866479cb-421b-4e34-add5-b6eb25ae191d",
    subjectId: SubjectId.DB,
    text: "\"Foreign Key\" (Сыртқы кілт) сілтеме жасайтын басты кестедегі жол өзгергенде (UPDATE) орындалатын \"NO ACTION\" әрекеті қалай жұмыс істейді?",
    options: [
      {
        id: "69f1ae44-3a29-4548-82e0-dea472e75189",
        text: "Бағынышты кестеде сілтеме бар болса, басты кестедегі өзгертуді орындатпайды (транзакция тоқтатылады)"
      },
      {
        id: "3a811974-c6d1-4858-ade0-893a2eb9737a",
        text: "Бағынышты кестедегі мәндерді де бірге өзгертеді"
      },
      {
        id: "5ae7be33-7809-47fc-b05a-0b8a9ea6c1cc",
        text: "Мәндерді автоматты түрде NULL қылады"
      },
      {
        id: "ee94794a-fadf-4bcf-b6a3-71d15afd83e0",
        text: "Ешқандай тексерусіз өзгерте береді"
      },
      {
        id: "e7789c2a-bcf8-4b19-b3b8-b0d005d00c24",
        text: "Өзгерту орындалады, бірақ бағынышты кестеге ескерту хабарламасы (warning) жіберіледі"
      },
      {
        id: "6ad4de9f-81ab-4bc8-990e-aa959cd98782",
        text: "Басты кестедегі жол автоматты түрде жойылады, ал бағынышты кестедегі деректер сақталады"
      },
      {
        id: "8491c53b-f89f-4bae-a13c-d9882b0061d0",
        text: "Бағынышты кестедегі сәйкес жолдар уақытша бұғатталады және өзгерту кейінге қалдырылады"
      },
      {
        id: "516fad39-c67d-4068-b030-0455eac58abc",
        text: "Сыртқы кілт шектеуі уақытша алынып тасталып, өзгерту орындалады да, кейін қайта қосылады"
      }
    ],
    correctOptionIds: [
      "69f1ae44-3a29-4548-82e0-dea472e75189"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b59",
    subjectId: SubjectId.DB,
    text: "Реляциялық модельде \"потенциалды кілттің\" (Candidate Key) бірегейлік қасиеті нені талап етеді?",
    options: [
      {
        id: "db-t05-b59-op1",
        text: "Кестедегі кез келген екі жолдың осы кілт бойынша мәндері бірдей болмауын"
      },
      {
        id: "db-t05-b59-op2",
        text: "Оның тек сандардан тұруын"
      },
      {
        id: "db-t05-b59-op3",
        text: "Оның міндетті түрде NULL болуын"
      },
      {
        id: "db-t05-b59-op4",
        text: "Оның тек бірінші жолда орналасуын"
      },
      {
        id: "db-t05-b59-op5",
        text: "Кестедегі кемінде екі жолдың осы кілт бойынша мәндері сәйкес келуін"
      },
      {
        id: "db-t05-b59-op6",
        text: "Оның құрамында міндетті түрде бос (NULL) мәндер болуын"
      },
      {
        id: "db-t05-b59-op7",
        text: "Кілттің тек сыртқы кестелермен байланыс орнату үшін ғана қызмет етуін"
      },
      {
        id: "db-t05-b59-op8",
        text: "Осы кілттің мәндері уақыт өте келе автоматты түрде өзгеріп отыруын"
      }
    ],
    correctOptionIds: [
      "db-t05-b59-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b60",
    subjectId: SubjectId.DB,
    text: "\"Intention Key\" немесе \"Partial Key\" әлсіз нысанда қалай аталады?",
    options: [
      {
        id: "db-t05-b60-op1",
        text: "Дискриминатор (Discriminator)"
      },
      {
        id: "db-t05-b60-op2",
        text: "Сыртқы кілт (Foreign Key)"
      },
      {
        id: "db-t05-b60-op3",
        text: "Жасанды кілт (Surrogate Key)"
      },
      {
        id: "db-t05-b60-op4",
        text: "Бастапқы кілт (Primary Key)"
      },
      {
        id: "db-t05-b60-op5",
        text: "Кандидат кілті (Candidate Key)"
      },
      {
        id: "db-t05-b60-op6",
        text: "Құрама кілт (Composite Key)"
      },
      {
        id: "db-t05-b60-op7",
        text: "Балама кілт (Alternate Key)"
      },
      {
        id: "db-t05-b60-op8",
        text: "Сыртқы кілттің мәнін әдепкі (default) мәнге ауыстырып, жолды сақтап қалады"
      }
    ],
    correctOptionIds: [
      "db-t05-b60-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "84fc11a5-0d21-4e4d-a7c1-98d8a5ed2e98",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Foreign Key\" байланысының бұзылуы (Referential Integrity violation) қашан орын алады?",
    options: [
      {
        id: "a746502f-50f6-429a-9256-5f7ad3839589",
        text: "Бағынышты кестеге басты кестеде мүлдем жоқ мәнді сыртқы кілт ретінде қосуға әрекет жасағанда"
      },
      {
        id: "6e901b80-7146-442d-8ab4-4da2a879b489",
        text: "Бастапқы кілтте бірегейлік бұзылғанда"
      },
      {
        id: "a9127f0e-459f-4aed-a308-ba5908c2d292",
        text: "Кестеге NULL мәні қосылғанда"
      },
      {
        id: "c7ffddad-a116-477d-b4d1-dc86abdbb58c",
        text: "Жаңа баған қосылғанда"
      },
      {
        id: "dbe61bb4-7a32-4594-8fd4-ed912629a28a",
        text: "Басты кестедегі деректерді өзгерткенде, бағынышты кестеде сәйкес мәндер автоматты түрде жойылғанда"
      },
      {
        id: "07423a9f-1c22-480d-a56c-397ca5fbcd39",
        text: "Сыртқы кілт өрісіне NULL мәнін енгізуге рұқсат берілген жағдайда"
      },
      {
        id: "bf9dc6d7-9e4c-41a6-b4e4-c7fcd8167846",
        text: "Екі кесте арасындағы байланыс орнатылмаған кезде деректерді сәтті қосуға әрекет жасағанда"
      },
      {
        id: "a585a7d3-ad29-40f0-8d4b-8ff512037f41",
        text: "Басты кестедегі бірегей кілт мәнін өзгерткенде, бағынышты кестедегі сәйкес мәндер жаңартылғанда"
      }
    ],
    correctOptionIds: [
      "a746502f-50f6-429a-9256-5f7ad3839589"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b61",
    subjectId: SubjectId.DB,
    text: "Егер кестеде тек бір ғана потенциалды кілт болса, ол автоматты түрде қандай кілт болады?",
    options: [
      {
        id: "db-t05-b61-op1",
        text: "Бастапқы кілт (Primary Key)"
      },
      {
        id: "db-t05-b61-op2",
        text: "Баламалы кілт (Alternate Key)"
      },
      {
        id: "db-t05-b61-op3",
        text: "Сыртқы кілт (Foreign Key)"
      },
      {
        id: "db-t05-b61-op4",
        text: "Жасанды кілт (Surrogate Key)"
      },
      {
        id: "db-t05-b61-op5",
        text: "Композиттік кілт"
      },
      {
        id: "db-t05-b61-op6",
        text: "Уникалды кілт"
      },
      {
        id: "db-t05-b61-op7",
        text: "Кандидаттық кілт"
      },
      {
        id: "db-t05-b61-op8",
        text: "Индекстік кілт"
      }
    ],
    correctOptionIds: [
      "db-t05-b61-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "10bec3c3-de84-4415-8fef-13e6c5920968",
    subjectId: SubjectId.DB,
    text: "\"Composite Primary Key\" (Құрама бастапқы кілт) қолданылғанда, оның құрамындағы барлық бағандардың жиынтығы қалай аталады?",
    options: [
      {
        id: "e7d65011-47b5-477f-bce5-54b1ae0f65d9",
        text: "Бірегей суперкілт"
      },
      {
        id: "309d280a-2b4b-4d02-8254-4bac855730bb",
        text: "Сыртқы кілттер жиынтығы"
      },
      {
        id: "b6825737-285a-4122-874f-a97d244ec95e",
        text: "Көмекші баламалы кілт"
      },
      {
        id: "a70909b5-64e0-47c8-ba95-d14f147f1d8a",
        text: "Жүйелік индекс"
      },
      {
        id: "3069b97b-3fd6-4e5f-a8ec-755481a0d4bf",
        text: "Құрама сыртқы кілт"
      },
      {
        id: "e9fa8a50-8e8a-4df7-942d-f82b9a0d870c",
        text: "Көптік баламалы кілт"
      },
      {
        id: "b5895d37-ee70-40c5-9dea-2c1ad72528d2",
        text: "Жинақталған индекстік кілт"
      },
      {
        id: "a71afec4-2a68-49a7-b28e-098b3e1251ea",
        text: "Біріктірілген атрибуттық кілт"
      }
    ],
    correctOptionIds: [
      "e7d65011-47b5-477f-bce5-54b1ae0f65d9"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b62",
    subjectId: SubjectId.DB,
    text: "Дерекқорды нормализациялау (Normalization) процесінде кілттердің рөлі қандай?",
    options: [
      {
        id: "db-t05-b62-op1",
        text: "Кестелердің арасындағы функционалдық тәуелділіктерді анықтау және оларды кілттер бойынша бөлу"
      },
      {
        id: "db-t05-b62-op2",
        text: "Кестелердің санын шектеу"
      },
      {
        id: "db-t05-b62-op3",
        text: "Барлық сыртқы кілттерді өшіру"
      },
      {
        id: "db-t05-b62-op4",
        text: "Деректерді дискіде сығып сақтау"
      },
      {
        id: "db-t05-b62-op5",
        text: "Дерекқордың жұмыс жылдамдығын арттыру үшін индекстерді автоматты түрде құру"
      },
      {
        id: "db-t05-b62-op6",
        text: "Кестелердегі артық деректерді жою мақсатында барлық жазбаларды қайталау"
      },
      {
        id: "db-t05-b62-op7",
        text: "Сыртқы кілттерді пайдаланбай, барлық кестелерді бір үлкен кестеге біріктіру"
      },
      {
        id: "db-t05-b62-op8",
        text: "Нормализациялау процесінде кілттерді тек сұрыптау (sorting) үшін қолдану"
      }
    ],
    correctOptionIds: [
      "db-t05-b62-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b63",
    subjectId: SubjectId.DB,
    text: "SQL-де сыртқы кілтті анықтау үшін қандай кілттік сөздер қолданылады?",
    options: [
      {
        id: "db-t05-b63-op1",
        text: "FOREIGN KEY ... REFERENCES"
      },
      {
        id: "db-t05-b63-op2",
        text: "PRIMARY KEY ... UNIQUE"
      },
      {
        id: "db-t05-b63-op3",
        text: "CHECK ... DEFAULT"
      },
      {
        id: "db-t05-b63-op4",
        text: "INDEX ... KEY"
      },
      {
        id: "db-t05-b63-op5",
        text: "EXTERNAL KEY ... LINK"
      },
      {
        id: "db-t05-b63-op6",
        text: "RELATION KEY ... CONNECT"
      },
      {
        id: "db-t05-b63-op7",
        text: "LINK KEY ... TO"
      },
      {
        id: "db-t05-b63-op8",
        text: "REF KEY ... ASSOCIATE"
      }
    ],
    correctOptionIds: [
      "db-t05-b63-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b64",
    subjectId: SubjectId.DB,
    text: "\"Alternate Key\" (Баламалы кілт) мәні реляциялық кестеде NULL бола ала ма?",
    options: [
      {
        id: "db-t05-b64-op1",
        text: "Иә, егер оған NOT NULL шектеуі қойылмаса (бірақ бірегейлік сақталуы тиіс)"
      },
      {
        id: "db-t05-b64-op2",
        text: "Жоқ, баламалы кілт ешқашан NULL бола алмайды"
      },
      {
        id: "db-t05-b64-op3",
        text: "Тек бірінші жолда ғана рұқсат етіледі"
      },
      {
        id: "db-t05-b64-op4",
        text: "Тек сандық форматта болса ғана болады"
      },
      {
        id: "db-t05-b64-op5",
        text: "Жоқ, баламалы кілт әрқашан Primary Key сияқты NULL мәнін қабылдамайды"
      },
      {
        id: "db-t05-b64-op6",
        text: "Иә, бірақ тек егер кестеде бір ғана жол болса"
      },
      {
        id: "db-t05-b64-op7",
        text: "Жоқ, себебі баламалы кілт деректердің бірегейлігін қамтамасыз ету үшін міндетті түрде толтырылуы керек"
      },
      {
        id: "db-t05-b64-op8",
        text: "Иә, егер кестеде басқа да баламалы кілттер болмаса ғана рұқсат етіледі"
      }
    ],
    correctOptionIds: [
      "db-t05-b64-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "cd1d15d6-546b-4996-957a-6b6475a4e8cd",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Foreign Key\" (Сыртқы кілт) сілтеме жасаған басты кестедегі жол жойылғанда, бағынышты кестедегі жолдарға ешқандай әсер етпейтін, бірақ жоюды бұғаттамайтын нұсқау қандай?",
    options: [
      {
        id: "4cd06714-9c55-47e9-b0a0-0c5517082571",
        text: "Мұндай нұсқау жоқ, себебі сілтемелік тұтастық үшін не жоюды бұғаттау (RESTRICT), неCASCADE/SET NULL әрекеттері міндетті"
      },
      {
        id: "b20ccc1e-3509-43d8-ae3f-ebf6a95367b9",
        text: "CASCADE"
      },
      {
        id: "2be9fe8b-acc4-471c-ac0f-3d6fc240e742",
        text: "SET NULL"
      },
      {
        id: "3d780b19-eb81-4a0f-af3e-8fa85dfe2988",
        text: "NO ACTION"
      },
      {
        id: "f276a749-8ef7-4ddd-ba0f-6ec39b51c9b5",
        text: "IGNORE - сыртқы кілтті тексеруді уақытша өшіреді және жоюды рұқсат етеді"
      },
      {
        id: "dcadcd18-abb8-4d2d-8f59-ddff6d9d3d43",
        text: "ALLOW DELETE - бағынышты жолдарды автоматты түрде көшірмей, негізгі жолды жоюға мүмкіндік береді"
      },
      {
        id: "bc376569-25e0-45ef-91ba-35fe0d6c791b",
        text: "SKIP CHECK - сілтемелік тұтастықты сақтамай-ақ операцияны орындайтын арнайы режим"
      },
      {
        id: "dc4eb347-21b6-4df3-8eb3-b5d54b0908c7",
        text: "FREEZE - бағынышты кестені уақытша қатынассыз етіп, негізгі жолды жоюға рұқсат береді"
      }
    ],
    correctOptionIds: [
      "4cd06714-9c55-47e9-b0a0-0c5517082571"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b65",
    subjectId: SubjectId.DB,
    text: "\"Surrogate Key\" (Жасанды кілт) қолданудың маңызды ережесі қандай?",
    options: [
      {
        id: "db-t05-b65-op1",
        text: "Ол ешқашан пайдаланушыға көрсетілмеуі және бизнес-логикада мағыналық рөл атқармауы тиіс"
      },
      {
        id: "db-t05-b65-op2",
        text: "Ол тек пайдаланушы енгізетін мән болуы керек"
      },
      {
        id: "db-t05-b65-op3",
        text: "Ол міндетті түрде 10 таңбалы сан болуы тиіс"
      },
      {
        id: "db-t05-b65-op4",
        text: "Ол тек оқу құқығын шектеуі керек"
      },
      {
        id: "db-t05-b65-op5",
        text: "Ол міндетті түрде табиғи кілтпен (мысалы, ЖСН немесе email) сәйкес келуі керек"
      },
      {
        id: "db-t05-b65-op6",
        text: "Оның мәні дерекқордан тыс сыртқы жүйелерде бірегей болуы шарт"
      },
      {
        id: "db-t05-b65-op7",
        text: "Ол әрқашан пайдаланушыға түсінікті ақпаратты (аты, күні) қамтуы тиіс"
      },
      {
        id: "db-t05-b65-op8",
        text: "Ол тек уақытша деректер үшін қолданылады және тұрақты сақталмауы керек"
      }
    ],
    correctOptionIds: [
      "db-t05-b65-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b66",
    subjectId: SubjectId.DB,
    text: "Дерекқорда \"Surrogate Key\" мен \"Natural Key\" бір мезгілде бір кестеде қолданыла ала ма?",
    options: [
      {
        id: "db-t05-b66-op1",
        text: "Иә, суррогатты кілт PRIMARY KEY ретінде, ал табиғи кілт UNIQUE шектеуімен сақталуы мүмкін"
      },
      {
        id: "db-t05-b66-op2",
        text: "Жоқ, олар бір-бірін жоққа шығарады"
      },
      {
        id: "db-t05-b66-op3",
        text: "Тек NoSQL дерекқорларында ғана болады"
      },
      {
        id: "db-t05-b66-op4",
        text: "Тек уақытша кестелерде болады"
      },
      {
        id: "db-t05-b66-op5",
        text: "Иә, бірақ екеуі де міндетті түрде PRIMARY KEY болуы керек"
      },
      {
        id: "db-t05-b66-op6",
        text: "Жоқ, табиғи кілт бар кезде суррогатты кілт құруға тыйым салынған"
      },
      {
        id: "db-t05-b66-op7",
        text: "Иә, тек егер табиғи кілт сан түрінде болса ғана рұқсат етіледі"
      },
      {
        id: "db-t05-b66-op8",
        text: "Жоқ, бұл дерекқордың қалыпты жұмысын баяулатады және қолданылмайды"
      }
    ],
    correctOptionIds: [
      "db-t05-b66-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b67",
    subjectId: SubjectId.DB,
    text: "Дерекқорда \"Primary Key\" (Бастапқы кілт) бағанын өзгерту (UPDATE) неліктен өте сирек жасалады?",
    options: [
      {
        id: "db-t05-b67-op1",
        text: "Себебі бұл әрекет барлық байланысқан кестелердегі сыртқы кілттерді де өзгертуді (CASCADE) талап етеді, бұл өнімділікті айтарлықтай төмендетеді"
      },
      {
        id: "db-t05-b67-op2",
        text: "Себебі ДҚБЖ бұл әрекетке мүлдем рұқсат бермейді"
      },
      {
        id: "db-t05-b67-op3",
        text: "Себебі бастапқы кілт өзгергенде деректер толық жойылады"
      },
      {
        id: "db-t05-b67-op4",
        text: "Себебі бұл тек қолданба деңгейінде ғана орындалады"
      },
      {
        id: "db-t05-b67-op5",
        text: "Себебі бастапқы кілт бағанына мәлімет жазылғаннан кейін оны техникалық тұрғыдан өзгерту мүмкін емес"
      },
      {
        id: "db-t05-b67-op6",
        text: "Себебі бұл әрекет дерекқордың физикалық құрылымын қайта құруды және кестені толық көшіруді талап етеді"
      },
      {
        id: "db-t05-b67-op7",
        text: "Себебі бастапқы кілтті өзгерту автоматты түрде бүкіл дерекқорды блоктап, басқа пайдаланушыларға кіруге тыйым салады"
      },
      {
        id: "db-t05-b67-op8",
        text: "Себебі SQL стандарты бойынша бастапқы кілт тек сандық типте болуы керек, сондықтан оның мәнін өзгертуге болмайды"
      }
    ],
    correctOptionIds: [
      "db-t05-b67-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c05a22ba-f669-47be-9392-727da6190de8",
    subjectId: SubjectId.DB,
    text: "Реляциялық модельде \"потенциалды кілттің\" (Candidate Key) минималдылық (minimality) қасиеті нені білдіреді?",
    options: [
      {
        id: "973f05b4-efb8-4a75-8310-07857b846d51",
        text: "Оның құрамынан кез келген бір атрибутты алып тастасақ, ол бірегейлік қасиетін жоғалтады"
      },
      {
        id: "57b22aed-095a-4862-9ed8-b50fbcbaeaa7",
        text: "Оның тек бір символдан тұратынын"
      },
      {
        id: "dd0dfec4-5d71-49cc-8ca5-503547c3bd61",
        text: "Ондағы мәндердің 0-ге жақын болуын"
      },
      {
        id: "d3f225fa-9ed2-42f3-8cfc-fbf05259a941",
        text: "Оның тек уақытша сақталатынын"
      },
      {
        id: "4f2b0fed-ce72-4e10-afa9-7cd6034d2a74",
        text: "Ол кестедегі барлық басқа кілттерден ұзындығы бойынша қысқа болуы керек"
      },
      {
        id: "08070446-0fec-4585-ae72-08864c7bb31f",
        text: "Оның құрамына міндетті түрде бірінші атрибут кіруі шарт"
      },
      {
        id: "f1d9e823-8e46-49cd-bf9d-d6e517b3a95f",
        text: "Ол тек сандық мәндерден тұратын атрибуттар жиыны болуы тиіс"
      },
      {
        id: "04cad6c2-9f94-4d49-a581-5e1c9397b5fc",
        text: "Оның ішінде NULL мәндеріне рұқсат етіледі, бірақ қайталанбауы керек"
      }
    ],
    correctOptionIds: [
      "973f05b4-efb8-4a75-8310-07857b846d51"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b68",
    subjectId: SubjectId.DB,
    text: "Екі кесте арасындағы \"көптен-бірге\" (M:1) байланысында сыртқы кілт қай кестеде орналасады?",
    options: [
      {
        id: "db-t05-b68-op1",
        text: "\"Көп\" (Many) жағындағы кестеде"
      },
      {
        id: "db-t05-b68-op2",
        text: "\"Бір\" (One) жағындағы кестеде"
      },
      {
        id: "db-t05-b68-op3",
        text: "Аралық байланыстырушы кестеде"
      },
      {
        id: "db-t05-b68-op4",
        text: "Екі кестеде де орналасуы тиіс"
      },
      {
        id: "db-t05-b68-op5",
        text: "Байланыс түріне қарамастан, сыртқы кілт әрқашан басты кестеде болады"
      },
      {
        id: "db-t05-b68-op6",
        text: "Сыртқы кілт екі кестенің де бірігу нүктесінде жеке кесте ретінде сақталады"
      },
      {
        id: "db-t05-b68-op7",
        text: "Кілт деректерді жоғалтпау үшін 'Бір' жағындағы кестеге көшірілуі керек"
      },
      {
        id: "db-t05-b68-op8",
        text: "M:1 байланысында сыртқы кілт орнына екі кестеде де балама кілттер қолданылады"
      }
    ],
    correctOptionIds: [
      "db-t05-b68-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b69",
    subjectId: SubjectId.DB,
    text: "Рекурсивті сыртқы кілтке (Self-referencing Foreign Key) мысал табыңыз:",
    options: [
      {
        id: "db-t05-b69-op1",
        text: "CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id)"
      },
      {
        id: "db-t05-b69-op2",
        text: "CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES departments(id)"
      },
      {
        id: "db-t05-b69-op3",
        text: "CONSTRAINT fk_student PRIMARY KEY (student_id)"
      },
      {
        id: "db-t05-b69-op4",
        text: "CONSTRAINT fk_course UNIQUE (course_code)"
      },
      {
        id: "db-t05-b69-op5",
        text: "CONSTRAINT fk_parent FOREIGN KEY (parent_id) REFERENCES parents(id)"
      },
      {
        id: "db-t05-b69-op6",
        text: "CONSTRAINT fk_self FOREIGN KEY (employee_id) REFERENCES managers(id)"
      },
      {
        id: "db-t05-b69-op7",
        text: "CONSTRAINT fk_loop FOREIGN KEY (supervisor_id) REFERENCES supervisors(emp_id)"
      },
      {
        id: "db-t05-b69-op8",
        text: "CONSTRAINT fk_ref FOREIGN KEY (boss_id) REFERENCES staff(worker_id)"
      }
    ],
    correctOptionIds: [
      "db-t05-b69-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b70",
    subjectId: SubjectId.DB,
    text: "Бастапқы кілтке (Primary Key) \"UNIQUE\" шектеуін қосу қажет пе?",
    options: [
      {
        id: "db-t05-b70-op1",
        text: "Жоқ, себебі Бастапқы кілт өздігінен бірегейлікті және NOT NULL болуын қамтамасыз етеді"
      },
      {
        id: "db-t05-b70-op2",
        text: "Иә, міндетті түрде синтаксис талап етеді"
      },
      {
        id: "db-t05-b70-op3",
        text: "Тек сандық емес бағандар үшін қажет"
      },
      {
        id: "db-t05-b70-op4",
        text: "Тек сыртқы кілт болса ғана қажет"
      },
      {
        id: "db-t05-b70-op5",
        text: "Иә, өйткені UNIQUE шектеуінсіз Бастапқы кілт қайталанатын мәндерді қабылдай алады"
      },
      {
        id: "db-t05-b70-op6",
        text: "Жоқ, бірақ тек дерекқор жүйесінің ескі нұсқаларында ғана міндетті емес"
      },
      {
        id: "db-t05-b70-op7",
        text: "Иә, себебі UNIQUE индекстің жылдамдығын арттыру үшін қосымша қажет"
      },
      {
        id: "db-t05-b70-op8",
        text: "Жоқ, бірақ NOT NULL шектеуін бөлек көрсету міндетті болып табылады"
      }
    ],
    correctOptionIds: [
      "db-t05-b70-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9f9ff241-1be2-4f9c-ba35-d60d2c537f13",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Composite Foreign Key\" (Құрама сыртқы кілт) сілтеме жасайтын басты кестедегі кілт қандай болуы керек?",
    options: [
      {
        id: "b46b3c67-0126-4727-b124-22d74e1e9b2f",
        text: "Сәйкес құрама бастапқы кілт (Composite Primary Key) немесе құрама бірегей кілт орындалуы тиіс"
      },
      {
        id: "23774c24-de10-499b-9f39-f8bff6dca443",
        text: "Жай жалғыз бағанды кілт бола береді"
      },
      {
        id: "550f304d-4812-4853-98d6-9e2d97d09a2b",
        text: "Ол міндетті түрде автоинкремент болуы тиіс"
      },
      {
        id: "25e764f2-9c09-4695-9440-c7607b0b85f0",
        text: "Ол ешқандай шектеусіз жай баған болуы мүмкін"
      },
      {
        id: "db768f5c-da0c-463d-bb07-0632bf8b9d7d",
        text: "Кез келген реттелмеген бағандар жиынтығы жеткілікті"
      },
      {
        id: "ab7b61ef-8c63-4b6d-81c4-3be3d02a6083",
        text: "Тек бірінші бағаны бастапқы кілт болса, қалғаны маңызды емес"
      },
      {
        id: "95ae590a-a9a8-4f14-96e7-c3be6995524c",
        text: "Ол міндетті түрде индекстелмеген жай баған болуы керек"
      },
      {
        id: "1346bb25-400b-4964-8591-203a22952d7a",
        text: "Басты кестедегі кез келген UNIQUE шектеуі бар жалғыз баған"
      }
    ],
    correctOptionIds: [
      "b46b3c67-0126-4727-b124-22d74e1e9b2f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b71",
    subjectId: SubjectId.DB,
    text: "\"Junction Table\" (аралық байланыстырушы кесте) не үшін қолданылады?",
    options: [
      {
        id: "db-t05-b71-op1",
        text: "M:N (көптен-көпке) байланысын екі 1:M байланысына бөлшектеу үшін"
      },
      {
        id: "db-t05-b71-op2",
        text: "Деректердің сақтық көшірмесін жасау үшін"
      },
      {
        id: "db-t05-b71-op3",
        text: "Индектерді автоматты түрде өшіру үшін"
      },
      {
        id: "db-t05-b71-op4",
        text: "SQL сұранысын оңтайландыру үшін"
      },
      {
        id: "db-t05-b71-op5",
        text: "Бір кестедегі деректерді екінші кестеге толық көшіру үшін"
      },
      {
        id: "db-t05-b71-op6",
        text: "Кестелер арасындағы транзакцияларды автоматты түрде растау үшін"
      },
      {
        id: "db-t05-b71-op7",
        text: "Негізгі кілтті (Primary Key) шеткі кілтке (Foreign Key) айналдыру үшін"
      },
      {
        id: "db-t05-b71-op8",
        text: "Екі кестенің бағандарын біріктіріп, виртуалды кесте жасау үшін"
      }
    ],
    correctOptionIds: [
      "db-t05-b71-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b72",
    subjectId: SubjectId.DB,
    text: "\"Natural Key\" (Табиғи кілт) ретінде адамның \"Аты-жөнін\" таңдау неліктен дұрыс емес?",
    options: [
      {
        id: "db-t05-b72-op1",
        text: "Себебі адамдардың аты-жөні қайталануы мүмкін (бірегей емес) және уақыт өте келе өзгеруі мүмкін"
      },
      {
        id: "db-t05-b72-op2",
        text: "Себебі оның деректер типі тек VARCHAR болады"
      },
      {
        id: "db-t05-b72-op3",
        text: "Себебі оны сыртқы кілтпен байланыстыру мүмкін емес"
      },
      {
        id: "db-t05-b72-op4",
        text: "Себебі ол NULL мәнін қабылдай алмайды"
      },
      {
        id: "db-t05-b72-op5",
        text: "Себебі аты-жөнді сақтау үшін арнайы индекстеу әдістері қолданылмайды"
      },
      {
        id: "db-t05-b72-op6",
        text: "Себебі табиғи кілттер тек сандық деректерден тұруы шарт"
      },
      {
        id: "db-t05-b72-op7",
        text: "Себебі аты-жөні бар өрістерге автоматты түрде UNIQUE шектеуін қоюға болмайды"
      },
      {
        id: "db-t05-b72-op8",
        text: "Себебі аты-жөнін пайдалану дерекқордың жұмыс жылдамдығын екі есе арттырады"
      }
    ],
    correctOptionIds: [
      "db-t05-b72-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "af0ddd6d-5cd3-410b-b931-af6fb39767ff",
    subjectId: SubjectId.DB,
    text: "Бағынышты кестеге жаңа жол қосқанда, егер оның сыртқы кілт (Foreign Key) мәні NULL болса, ДҚБЖ оны қабылдай ма?",
    options: [
      {
        id: "c3fc2cd3-2e2c-4e6f-aa6f-eac2192bc286",
        text: "Иә, егер сыртқы кілт бағанына NOT NULL шектеуі қойылмаған болса"
      },
      {
        id: "28740e55-6560-4efe-be44-fb3552e58cad",
        text: "Жоқ, сыртқы кілт мәні әрдайым толтырылуы тиіс"
      },
      {
        id: "665ddc98-1563-4c48-af73-f995bb0a41ed",
        text: "Тек басты кесте бос болған жағдайда ғана қабылдайды"
      },
      {
        id: "3b355067-1d52-4b85-870a-3c7726cade83",
        text: "Тек бірінші жолда ғана рұқсат етіледі"
      },
      {
        id: "6cb764a0-d195-4ca3-9e4f-58b2508c2964",
        text: "Жоқ, сыртқы кілт әрқашан басты кестедегі жарамды мәнге сәйкес келуі шарт"
      },
      {
        id: "ee14079d-a877-4ee7-915f-e7340d7b36d2",
        text: "Иә, бірақ тек егер бағынышты кестеде басқа да кілттер болмаса"
      },
      {
        id: "53f2ff89-d901-48c5-a5fe-60a1a9e3ca49",
        text: "Жоқ, NULL мәні сыртқы кілт үшін рұқсат етілмейді, себебі ол байланысты бұзады"
      },
      {
        id: "5f318ccf-11c8-4341-ae9a-599cb29689dd",
        text: "Иә, егер басты кестеде кемінде бір жол бар болса ғана"
      }
    ],
    correctOptionIds: [
      "c3fc2cd3-2e2c-4e6f-aa6f-eac2192bc286"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "bb9cf7ea-6d74-4829-b0cf-c35da181fe50",
    subjectId: SubjectId.DB,
    text: "\"Surrogate Key\" ретінде қолданылатын UUID (Universally Unique Identifier) форматының INT (бүтін сан) типінен кемшілігі қандай?",
    options: [
      {
        id: "dd2fe8f4-0631-4566-b39e-5631bebdb4c2",
        text: "UUID 128 бит орын алады, бұл индекстердің өлшемін үлкейтеді және іздеуді INT-ке қарағанда баяулатады"
      },
      {
        id: "4827c6c5-14e0-4319-aaca-9b02a5b4f0b3",
        text: "UUID бірегей бола алмайды"
      },
      {
        id: "94feb271-5648-4299-b43e-fc652a88eaba",
        text: "UUID-ті сыртқы кілт ретінде қолдану мүмкін емес"
      },
      {
        id: "670962dd-60d5-4443-9d1c-1940cf5cc333",
        text: "UUID-те тек оң сандар ғана сақталады"
      },
      {
        id: "9490bcd8-404c-480e-8780-b8ac35b10030",
        text: "UUID дерекқорда автоматты түрде өспейді, сондықтан оны қолмен енгізу керек"
      },
      {
        id: "b282f93b-48ad-4a79-ab6a-a420cecce580",
        text: "UUID тек бір серверде ғана бірегей болады, ал INT глобалды деңгейде бірегей"
      },
      {
        id: "a4341a2a-3f70-4b51-a75a-ac0e0446bd06",
        text: "UUID мәндерін сыртқы кілт ретінде пайдалану кезінде дерекқордың тұтастығы бұзылады"
      },
      {
        id: "e9041b95-de92-4d0a-b594-0ac7cb5348b9",
        text: "UUID форматы уақыт өте келе қайталанып шығуы мүмкін, ал INT әрқашан бірегей"
      }
    ],
    correctOptionIds: [
      "dd2fe8f4-0631-4566-b39e-5631bebdb4c2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b73",
    subjectId: SubjectId.DB,
    text: "\"Composite Primary Key\" (Құрама бастапқы кілт) құрамына кіретін атрибуттардың реті маңызды ма?",
    options: [
      {
        id: "db-t05-b73-op1",
        text: "Иә, себебі ДҚБЖ құратын индекстің құрылымы мен сұраныстардың жылдамдығы осы атрибуттардың жазылу ретіне байланысты болады"
      },
      {
        id: "db-t05-b73-op2",
        text: "Жоқ, кез келген ретпен жазыла береді"
      },
      {
        id: "db-t05-b73-op3",
        text: "Тек сандық бағандар үшін ғана маңызды"
      },
      {
        id: "db-t05-b73-op4",
        text: "Бұл тек жобалау кезеңінде ғана маңызды"
      },
      {
        id: "db-t05-b73-op5",
        text: "Жоқ, себебі құрама кілттегі барлық бағандар ішкі түрде алфавиттік ретпен автоматты сұрыпталады"
      },
      {
        id: "db-t05-b73-op6",
        text: "Иә, бірақ тек бірінші атрибуттың реті маңызды, қалғандары кез келген тізбекте болуы мүмкін"
      },
      {
        id: "db-t05-b73-op7",
        text: "Жоқ, реттілік тек сыртқы кілттер (Foreign Key) үшін ғана шешуші рөл атқарады"
      },
      {
        id: "db-t05-b73-op8",
        text: "Иә, себебі дерекқор жүйесі мәліметтерді сақтау үшін осы реттілік бойынша физикалық дискілерге бөледі"
      }
    ],
    correctOptionIds: [
      "db-t05-b73-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b74",
    subjectId: SubjectId.DB,
    text: "Бастапқы және сыртқы кілттерді дұрыс қолданбау дерекқорда қандай басты мәселеге әкеледі?",
    options: [
      {
        id: "db-t05-b74-op1",
        text: "Деректердің сәйкессіздігіне (inconsistency), артық сақталуына (redundancy) және жетім жазбалардың (orphan records) пайда болуына"
      },
      {
        id: "db-t05-b74-op2",
        text: "Желілік қосылудың үзілуіне"
      },
      {
        id: "db-t05-b74-op3",
        text: "SQL Server-дің мүлдем қосылмай қалуына"
      },
      {
        id: "db-t05-b74-op4",
        text: "Пайдаланушы интерфейсінің дизайнының бұзылуына"
      },
      {
        id: "db-t05-b74-op5",
        text: "Дерекқордың физикалық сақтау көлемінің автоматты түрде азайып кетуіне"
      },
      {
        id: "db-t05-b74-op6",
        text: "SQL сұраныстарын орындау жылдамдығының шексіз артуына"
      },
      {
        id: "db-t05-b74-op7",
        text: "Кестелер арасындағы байланыстың толығымен жойылып, дерекқордың бос күйге оралуына"
      },
      {
        id: "db-t05-b74-op8",
        text: "Пайдаланушыларға деректерді өзгерту құқығының уақытша тыйым салынуына"
      }
    ],
    correctOptionIds: [
      "db-t05-b74-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t05-b75",
    subjectId: SubjectId.DB,
    text: "\"Orphan Record\" (Жетім жазба) деген не?",
    options: [
      {
        id: "db-t05-b75-op1",
        text: "Бағынышты кестедегі сыртқы кілт мәні сілтеме жасалатын басты кестедегі жолдың жойылып кетуінен пайда болған байланыссыз қалған жазба"
      },
      {
        id: "db-t05-b75-op2",
        text: "Бастапқы кілті жоқ жазба"
      },
      {
        id: "db-t05-b75-op3",
        text: "Тек уақытша сақталған жазба"
      },
      {
        id: "db-t05-b75-op4",
        text: "Бірінші бағандағы бос жол"
      },
      {
        id: "db-t05-b75-op5",
        text: "Басты кестедегі жазба әлі жасалмаған, бірақ бағынышты кестеге дерек енгізілген жағдай"
      },
      {
        id: "db-t05-b75-op6",
        text: "Екі кесте арасындағы байланыс үзілген кезде автоматты түрде жойылатын уақытша жазба"
      },
      {
        id: "db-t05-b75-op7",
        text: "Сыртқы кілт мәні бос (NULL) болғандықтан, ешқандай кестеге сілтеме жасамайтын жазба"
      },
      {
        id: "db-t05-b75-op8",
        text: "Кесте құрылымы өзгерген кезде индекстелмей қалған және іздеу жүргізуге болмайтын жазба"
      }
    ],
    correctOptionIds: [
      "db-t05-b75-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7059552f-baa0-40b9-a121-b79d6f461cad",
    subjectId: SubjectId.DB,
    text: "Бағынышты кестедегі сыртқы кілт мәнін өзгерту кезінде ON UPDATE RESTRICT әрекеті қалай орындалады?",
    options: [
      {
        id: "2e5421f3-9bab-461c-b929-b4ec0eb7bb72",
        text: "Бағынышты кестеде сілтемелік байланыс бар болғандықтан, басты кестедегі бастапқы кілтті өзгертуге тыйым салады"
      },
      {
        id: "4fc67b00-4572-4777-9a50-554163b53892",
        text: "Ата-аналық кестедегі өзгерісті автоматты түрде жояды"
      },
      {
        id: "5d9020b1-c72f-4a52-9078-ad97a44a31b4",
        text: "Сыртқы кілт мәнін NULL-ге ауыстырады"
      },
      {
        id: "b930bc61-a7d5-476f-b198-5d4c43467283",
        text: "Ешқандай тексеру орындалмайды"
      },
      {
        id: "6a54c640-03a7-4f4e-bb46-519c4e462d12",
        text: "Бағынышты кестедегі барлық сәйкес жазбаларды автоматты түрде жаңартылған мәнмен өзгертеді"
      },
      {
        id: "8e69fe19-fd98-4dd2-abd3-03d6e2977d37",
        text: "Өзгеріс орындалады, бірақ бағынышты кестеге ескерту хабарламасы жіберіледі"
      },
      {
        id: "8064bf59-73d4-4c18-8e61-9cf891b81efe",
        text: "Басты кестедегі жазба жойылады, ал бағынышты кестедегі деректер сақталады"
      },
      {
        id: "bf22ec6f-4d23-4e1b-af17-0dce3bcc431b",
        text: "Сыртқы кілт мәні уақытша бұғатталып, кейінгі транзакцияда ғана өзгереді"
      }
    ],
    correctOptionIds: [
      "2e5421f3-9bab-461c-b929-b4ec0eb7bb72"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Кілттер мен байланыстар",
    difficulty: Difficulty.MEDIUM
  }
];
