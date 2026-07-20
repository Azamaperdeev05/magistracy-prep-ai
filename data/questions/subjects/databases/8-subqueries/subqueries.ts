import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// db / Ішкі және байланысқан SQL
export const db8SubqueriesQuestions : Question[] = [
  {
    id: "db-t08-b01",
    subjectId: SubjectId.DB,
    text: "SQL-де ішкі сұраныс (subquery) дегеніміз не?",
    options: [
      {
        id: "db-t08-b01-op1",
        text: "Басқа SQL сұранысының ішіне кірістірілген сұраныс"
      },
      {
        id: "db-t08-b01-op2",
        text: "Дерекқордың резервтік көшірмесі"
      },
      {
        id: "db-t08-b01-op3",
        text: "Кестедегі индекс атауы"
      },
      {
        id: "db-t08-b01-op4",
        text: "Қателер журналы"
      },
      {
        id: "db-t08-b01-op5",
        text: "TRUE қайтарады, барлық жолдар сәйкес келеді"
      },
      {
        id: "db-t08-b01-op6",
        text: "Иә, әрқашан рұқсат етіледі және міндетті болып табылады"
      },
      {
        id: "db-t08-b01-op7",
        text: "Тек PostgreSQL-де ғана рұқсат етілген"
      },
      {
        id: "db-t08-b01-op8",
        text: "IN операторы тек сандармен жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "db-t08-b01-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b02",
    subjectId: SubjectId.DB,
    text: "Байланысқан ішкі сұраныс (correlated subquery) деген не?",
    options: [
      {
        id: "db-t08-b02-op1",
        text: "Сыртқы сұраныстың әрбір жолы үшін орындалатын және сыртқы сұраныс мәндеріне тәуелді ішкі сұраныс"
      },
      {
        id: "db-t08-b02-op2",
        text: "Тәуелсіз орындалатын және тек бір рет есептелетін ішкі сұраныс"
      },
      {
        id: "db-t08-b02-op3",
        text: "Басқа сервердегі кестені оқитын сұраныс"
      },
      {
        id: "db-t08-b02-op4",
        text: "Тек агрегаттық функцияларды қолданатын сұраныс"
      },
      {
        id: "db-t08-b02-op5",
        text: "Жаңартылатын жолдардың санын шектеу үшін"
      },
      {
        id: "db-t08-b02-op6",
        text: "Екі кестенің жартылай бірігуін"
      },
      {
        id: "db-t08-b02-op7",
        text: "Сыртқы сұраныстың әрбір жолы үшін жеке-жеке"
      },
      {
        id: "db-t08-b02-op8",
        text: "Ол кестенің барлық жолдарын қайтаруы тиіс"
      }
    ],
    correctOptionIds: [
      "db-t08-b02-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.HARD
  },
  {
    id: "db-t08-b03",
    subjectId: SubjectId.DB,
    text: "Ішкі сұраныста ең болмағанда бір жолдың бар екенін тексеру үшін қандай оператор қолданылады?",
    options: [
      {
        id: "db-t08-b03-op1",
        text: "EXISTS"
      },
      {
        id: "db-t08-b03-op2",
        text: "IN"
      },
      {
        id: "db-t08-b03-op3",
        text: "LIKE"
      },
      {
        id: "db-t08-b03-op4",
        text: "BETWEEN"
      },
      {
        id: "db-t08-b03-op5",
        text: "Сыртқы сұраныстың әрбір жолына тәуелді және сыртқы кестенің бағандарын сілтеме ретінде қолданатын ішкі сұраныс"
      },
      {
        id: "db-t08-b03-op6",
        text: "Уақытша кесте"
      },
      {
        id: "db-t08-b03-op7",
        text: "=, <, >"
      },
      {
        id: "db-t08-b03-op8",
        text: "NULL қайтарғанда"
      }
    ],
    correctOptionIds: [
      "db-t08-b03-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "af76aa0c-662a-4092-8793-95f270fff452",
    subjectId: SubjectId.DB,
    text: "Егер ішкі сұраныс бірнеше мәнді қайтарса, онымен салыстыру үшін сыртқы сұраныста қандай операторлар қолданылуы мүмкін?",
    options: [
      {
        id: "f83505ce-cfb6-49d6-98b7-ad127116c6da",
        text: "IN, ANY, ALL"
      },
      {
        id: "18217cbf-ded0-4fc5-a590-9468c747831c",
        text: "=, <, >"
      },
      {
        id: "844b6a10-c477-4344-9504-939c299f4901",
        text: "LIKE, BETWEEN"
      },
      {
        id: "a06d68c0-45cd-4171-ab3a-d8d4e5157b0f",
        text: "IS NULL, IS NOT NULL"
      },
      {
        id: "bc7cc776-dbe3-40b0-9e3b-f961f9e9f4ee",
        text: "Тек байланысқан ішкі сұраныстар ғана жылдамырақ"
      },
      {
        id: "64e1a5e7-0974-4e70-bcd6-e9646c90f12a",
        text: "Барлық мәндермен орындалса ғана true қайтарады"
      },
      {
        id: "17a91b55-2c60-491f-8da7-415f45e8f596",
        text: "ДҚБЖ-ның ішкі сұранысты жазық JOIN құрылымына автоматты түрде өзгерту процесі"
      },
      {
        id: "a7786bbd-5e96-41df-ac5d-de8f1dab897d",
        text: "FALSE қайтарады, ешқандай жол сәйкес келмейді"
      }
    ],
    correctOptionIds: [
      "f83505ce-cfb6-49d6-98b7-ad127116c6da"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b04",
    subjectId: SubjectId.DB,
    text: "SQL-де ішкі сұраныс қай жерлерде жазылуы мүмкін?",
    options: [
      {
        id: "db-t08-b04-op1",
        text: "SELECT, FROM, WHERE және HAVING сөйлемдерінде"
      },
      {
        id: "db-t08-b04-op2",
        text: "Тек WHERE сөйлемінде"
      },
      {
        id: "db-t08-b04-op3",
        text: "Тек FROM сөйлемінде"
      },
      {
        id: "db-t08-b04-op4",
        text: "Тек SELECT сөйлемінде"
      },
      {
        id: "db-t08-b04-op5",
        text: "Дерекқордың орын жетпеуінен қысылуы"
      },
      {
        id: "db-t08-b04-op6",
        text: "NULL қайтарғанда"
      },
      {
        id: "db-t08-b04-op7",
        text: "Әрбір студент жолының жанында барлық тесттердің ең жоғары балын қайталайды"
      },
      {
        id: "db-t08-b04-op8",
        text: "Тізімдегі мәндердің ешқайсысына тең емес (NOT IN баламасы)"
      }
    ],
    correctOptionIds: [
      "db-t08-b04-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b05",
    subjectId: SubjectId.DB,
    text: "FROM сөйлемінде қолданылатын ішкі сұраныс қалай аталады?",
    options: [
      {
        id: "db-t08-b05-op1",
        text: "Туынды кесте (Derived Table) немесе Inline View"
      },
      {
        id: "db-t08-b05-op2",
        text: "Байланысқан сұраныс"
      },
      {
        id: "db-t08-b05-op3",
        text: "Скалярлық сұраныс"
      },
      {
        id: "db-t08-b05-op4",
        text: "Екілік сұраныс"
      },
      {
        id: "db-t08-b05-op5",
        text: "Әдетте мағынасы жоқ және SQL Server сияқты кейбір жүйелерде тікелей қате береді"
      },
      {
        id: "db-t08-b05-op6",
        text: "Тек бірінші баған ғана сақталады"
      },
      {
        id: "db-t08-b05-op7",
        text: "Кірістірілген сұраныстар санын шектеу"
      },
      {
        id: "db-t08-b05-op8",
        text: "Иә, оларды тізбектей байланыстыруға болады"
      }
    ],
    correctOptionIds: [
      "db-t08-b05-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b06",
    subjectId: SubjectId.DB,
    text: "Тек бір жол және бір бағаннан тұратын жалғыз мәнді қайтаратын ішкі сұраныс қалай аталады?",
    options: [
      {
        id: "db-t08-b06-op1",
        text: "Скалярлық ішкі сұраныс (Scalar subquery)"
      },
      {
        id: "db-t08-b06-op2",
        text: "Көпмәнді сұраныс"
      },
      {
        id: "db-t08-b06-op3",
        text: "Кестелік сұраныс"
      },
      {
        id: "db-t08-b06-op4",
        text: "Кортеждік сұраныс"
      },
      {
        id: "db-t08-b06-op5",
        text: "Ішкі сұраныс әрқашан жылдамырақ"
      },
      {
        id: "db-t08-b06-op6",
        text: "Қателік (Error) шығарады"
      },
      {
        id: "db-t08-b06-op7",
        text: "Скалярлық ішкі сұранысты"
      },
      {
        id: "db-t08-b06-op8",
        text: "ANY"
      }
    ],
    correctOptionIds: [
      "db-t08-b06-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ebac782a-04c2-495a-b302-8252956ff18d",
    subjectId: SubjectId.DB,
    text: "Сыртқы сұраныс мәндерін мүлдем қолданбайтын және дербес орындала алатын ішкі сұраныс қалай аталады?",
    options: [
      {
        id: "eda04d2e-81bf-4624-9a41-3b005102bd93",
        text: "Тәуелсіз немесе қарапайым ішкі сұраныс (Non-correlated subquery)"
      },
      {
        id: "d22a0c67-8c2d-47fa-a7a9-a0ced8ebad3c",
        text: "Байланысқан сұраныс"
      },
      {
        id: "9dae8afd-de46-46dd-86c7-2ca90850001d",
        text: "Корреляцияланған сұраныс"
      },
      {
        id: "8cd00831-7824-4a97-b300-cdf627c6a376",
        text: "Ішкі кесте"
      },
      {
        id: "ec6fd57a-977d-4bf3-88e1-ecf74d19f775",
        text: "Әр санаттағы ең қымбат тауарларды табады"
      },
      {
        id: "e8eda4b2-9336-4972-a279-4b66b1bc1b93",
        text: "Көпмәнді сұраныс"
      },
      {
        id: "f6c0a373-272f-491f-a2ae-3c329283f12c",
        text: "Әрқашан TRUE қайтарады"
      },
      {
        id: "df15d4d5-a13e-4456-8d9f-19f5e5224340",
        text: "Қателер журналы"
      }
    ],
    correctOptionIds: [
      "eda04d2e-81bf-4624-9a41-3b005102bd93"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b07",
    subjectId: SubjectId.DB,
    text: "ANY операторы ішкі сұраныспен қалай жұмыс істейді?",
    options: [
      {
        id: "db-t08-b07-op1",
        text: "Ішкі сұраныс қайтарған мәндердің ең болмағанда біреуімен шарт орындалса true қайтарады"
      },
      {
        id: "db-t08-b07-op2",
        text: "Барлық мәндермен орындалса ғана true қайтарады"
      },
      {
        id: "db-t08-b07-op3",
        text: "Тек NULL мәндер болса орындалады"
      },
      {
        id: "db-t08-b07-op4",
        text: "Ешқашан орындалмайды"
      },
      {
        id: "db-t08-b07-op5",
        text: "Тек бірінші жол қайтарылады"
      },
      {
        id: "db-t08-b07-op6",
        text: "EXISTS"
      },
      {
        id: "db-t08-b07-op7",
        text: "Ішкі сұраныстан кем дегенде бір жол қайтарылса"
      },
      {
        id: "db-t08-b07-op8",
        text: "EXISTS операторының"
      }
    ],
    correctOptionIds: [
      "db-t08-b07-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b08",
    subjectId: SubjectId.DB,
    text: "ALL операторы ішкі сұраныспен қалай жұмыс істейді?",
    options: [
      {
        id: "db-t08-b08-op1",
        text: "Ішкі сұраныс қайтарған барлық мәндермен шарт орындалса ғана true қайтарады"
      },
      {
        id: "db-t08-b08-op2",
        text: "Ең болмағанда біреуімен орындалса true қайтарады"
      },
      {
        id: "db-t08-b08-op3",
        text: "Тек бірінші мәнмен салыстырады"
      },
      {
        id: "db-t08-b08-op4",
        text: "Деректерді біріктіреді"
      },
      {
        id: "db-t08-b08-op5",
        text: "IT департаментіндегі қызметкерлердің жалақысын 10%-ға өсіреді"
      },
      {
        id: "db-t08-b08-op6",
        text: "Орташа жалақы дұрыс есептелмегендіктен"
      },
      {
        id: "db-t08-b08-op7",
        text: "Ешқандай санатқа жатпайтын тауарларды табады"
      },
      {
        id: "db-t08-b08-op8",
        text: "DROP сұраныстарында"
      }
    ],
    correctOptionIds: [
      "db-t08-b08-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b09",
    subjectId: SubjectId.DB,
    text: "Ішкі сұраныста IN операторының орнына балама ретінде қандай операторды қолдануға болады?",
    options: [
      {
        id: "db-t08-b09-op1",
        text: "= ANY"
      },
      {
        id: "db-t08-b09-op2",
        text: "= ALL"
      },
      {
        id: "db-t08-b09-op3",
        text: "LIKE"
      },
      {
        id: "db-t08-b09-op4",
        text: "EXISTS"
      },
      {
        id: "db-t08-b09-op5",
        text: "Деректердің қауіпсіздік ережелерін орнату"
      },
      {
        id: "db-t08-b09-op6",
        text: "Жүйелік каталог"
      },
      {
        id: "db-t08-b09-op7",
        text: "Егер 5-ші департаментте бірден көп қызметкер жұмыс істесе, скалярлық емес салыстыру қатесін береді"
      },
      {
        id: "db-t08-b09-op8",
        text: "Бос мәтін"
      }
    ],
    correctOptionIds: [
      "db-t08-b09-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d306b1b5-7dec-400b-9e63-6088b04af89a",
    subjectId: SubjectId.DB,
    text: "Байланысқан ішкі сұраныстың өнімділігі қарапайым ішкі сұранысқа қарағанда неліктен төмен болуы мүмкін?",
    options: [
      {
        id: "15b7b245-3c82-473d-af1f-ce6c320da6c2",
        text: "Ол сыртқы сұраныстың әрбір жолы үшін қайта-қайта орындалатындықтан"
      },
      {
        id: "2f12a6d0-14dd-4d1b-8aea-7d612e589258",
        text: "Ол тек бір рет есептелетіндіктен"
      },
      {
        id: "3594186c-fb7c-42ef-98df-3df8cc30ca99",
        text: "Оған индекстер әсер етпейтіндіктен"
      },
      {
        id: "b6295ba8-58eb-4677-8284-1ae88634bd87",
        text: "Ол тек басқа серверде орындалатындықтан"
      },
      {
        id: "73f6abd9-e659-465b-bd3f-c5ae72d940e1",
        text: "Тек оң жақтағы кестенің сәйкес емес жолдарын қайтаруды"
      },
      {
        id: "3f7597a0-e036-4d12-b154-07660b6c05db",
        text: "Ең қымбат тауарды табады"
      },
      {
        id: "fd389313-c921-453e-b2fe-cf0a911abab5",
        text: "INTERSECT"
      },
      {
        id: "4bf5e742-1e5a-4391-80f0-efded368097c",
        text: "Сыртқы сұраныс мәнінің ішкі сұраныстан қайтқан жиынтықтың (тізімнің) ішінде болуын"
      }
    ],
    correctOptionIds: [
      "15b7b245-3c82-473d-af1f-ce6c320da6c2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "22f8c002-2c5a-47c1-aac9-a20fb37c23c0",
    subjectId: SubjectId.DB,
    text: "SQL-де ішкі сұраныс нәтижесінде қайтарылған мәндердің арасында белгілі бір мәннің жоқ екенін тексеру үшін қандай оператор қолданылады?",
    options: [
      {
        id: "5d99cf32-22a4-4b50-9480-8afad4bfd2b3",
        text: "NOT IN"
      },
      {
        id: "68a6fde8-21e0-40f0-8174-bfecc11aa4a1",
        text: "IN"
      },
      {
        id: "d62510c3-b323-4f57-a6f9-46ef925675ea",
        text: "EXCEPT"
      },
      {
        id: "8371a722-a8d3-4598-bb59-acc9b97f7e23",
        text: "NOT EXISTS"
      },
      {
        id: "3ecfb7bb-5d27-4cd1-8362-93081082c851",
        text: "Қызметкері жоқ департаменттерді"
      },
      {
        id: "13ed346b-106e-46b1-b373-cf316674dcfe",
        text: "Common Table Expression (Ортақ кестелік өрнек)"
      },
      {
        id: "e2a0b120-498f-42d5-9861-b4ea1a5bdf9a",
        text: "Қате тудырады"
      },
      {
        id: "d4d02473-ee59-45f2-aeb6-b933a0139fdb",
        text: "Скалярлық ішкі сұранысты"
      }
    ],
    correctOptionIds: [
      "5d99cf32-22a4-4b50-9480-8afad4bfd2b3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3fd6cb9f-d6e8-4f86-9384-c2ecf06d094d",
    subjectId: SubjectId.DB,
    text: "Егер ішкі сұраныс бос нәтиже (NULL немесе бос жиын) қайтарса, NOT IN операторы қолданылған сұраныс нәтижесі қандай болады?",
    options: [
      {
        id: "1e705cb6-87cd-4275-8f00-35152efd4636",
        text: "Сұраныс бос нәтиже қайтарады, өйткені NULL-мен салыстыру белгісіз мәнді береді"
      },
      {
        id: "e289aab2-09d9-4d8c-a195-d0ab1d349aee",
        text: "Сұраныс барлық нәтижелерді қайтарады"
      },
      {
        id: "7b428a0a-695b-477e-a76c-a9f355adf4a0",
        text: "Сұраныс қатемен тоқтайды"
      },
      {
        id: "357bb6d3-1a55-4324-9184-d27a14b37ffc",
        text: "Тек бірінші жол қайтарылады"
      },
      {
        id: "e28be525-cd79-404f-9708-d3df527c5042",
        text: "Кестедегі индекс атауы"
      },
      {
        id: "bb26ff08-13cd-4689-987b-68e2c7581379",
        text: "Тек сандар үшін рұқсат етіледі"
      },
      {
        id: "999c7c85-ce73-4998-bf85-9a327a6d0748",
        text: "Тек бірінші жол ғана көрсетіледі"
      },
      {
        id: "7ecb24f4-daea-44c3-9735-658f98ef7d80",
        text: "Әдетте мағынасы жоқ және SQL Server сияқты кейбір жүйелерде тікелей қате береді"
      }
    ],
    correctOptionIds: [
      "1e705cb6-87cd-4275-8f00-35152efd4636"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b10",
    subjectId: SubjectId.DB,
    text: "SELECT тізіміндегі скалярлық ішкі сұраныс үшін қандай ереже сақталуы тиіс?",
    options: [
      {
        id: "db-t08-b10-op1",
        text: "Ол тек бір баған және ең көп дегенде бір жол (жалғыз мән) қайтаруы керек"
      },
      {
        id: "db-t08-b10-op2",
        text: "Ол бірнеше бағанды қайтара алады"
      },
      {
        id: "db-t08-b10-op3",
        text: "Ол кестенің барлық жолдарын қайтаруы тиіс"
      },
      {
        id: "db-t08-b10-op4",
        text: "Ол ешқандай ережеге бағынбайды"
      },
      {
        id: "db-t08-b10-op5",
        text: "Ішкі сұраныстардың қателікке ұшырап тоқтауы"
      },
      {
        id: "db-t08-b10-op6",
        text: "Тек бірінші жол ғана көрсетіледі"
      },
      {
        id: "db-t08-b10-op7",
        text: "Скалярлық ішкі сұраныс (Scalar subquery)"
      },
      {
        id: "db-t08-b10-op8",
        text: "Тек скалярлық ішкі сұраныстарда болады"
      }
    ],
    correctOptionIds: [
      "db-t08-b10-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0c8eaac4-facf-4199-8df1-56b25eaf0a38",
    subjectId: SubjectId.DB,
    text: "SQL-де ішкі сұраныс нәтижесін басқа мәндермен салыстырғанда \"кем дегенде біреуінен үлкен\" шартын қалай жазады?",
    options: [
      {
        id: "2302917b-d2ba-4d7e-a807-569f088a0b21",
        text: "> ANY"
      },
      {
        id: "9f522fc8-8a3a-4f20-a8fe-c6abbf0a4849",
        text: "> ALL"
      },
      {
        id: "13c5871f-21dd-4951-bfcc-5634e939bc33",
        text: "= ANY"
      },
      {
        id: "928e8cf8-82f7-4917-b6ac-6531c6ef6dab",
        text: "> EXISTS"
      },
      {
        id: "58f1fe05-c319-4f9f-bc37-c1287b3d970b",
        text: "Жаңартылатын жолдардың санын шектеу үшін"
      },
      {
        id: "5183c0b4-14d3-410f-b58e-adca82d88330",
        text: "Ішкі сұранысты алып тастау"
      },
      {
        id: "de4d4b9b-1753-4660-83dc-b0677aaceb36",
        text: "Сыртқы кестенің Тек ішкі кестеде сәйкестігі бар жолдарын ғана қайтаратын операция (EXISTS немесе IN арқылы жасалады)"
      },
      {
        id: "ba031395-6449-4d86-9bde-ec19c36e27e7",
        text: "Қате шығады (Subquery returns more than 1 row)"
      }
    ],
    correctOptionIds: [
      "2302917b-d2ba-4d7e-a807-569f088a0b21"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a6a80dcf-71f3-4696-8f95-0ba22b14a9a9",
    subjectId: SubjectId.DB,
    text: "SQL-де ішкі сұраныс нәтижесін басқа мәндермен салыстырғанда \"барлығынан кіші\" шартын қалай жазады?",
    options: [
      {
        id: "89e64646-0608-4029-9991-14c323226b88",
        text: "< ALL"
      },
      {
        id: "d1fa9449-2b0e-4adb-a009-a8f5c7cb0ccb",
        text: "< ANY"
      },
      {
        id: "4f57b433-b2ac-4306-a168-35bd98949ee6",
        text: "<= ANY"
      },
      {
        id: "b14ef9ce-68e0-4f2b-9b79-a81b7c12512e",
        text: "= ALL"
      },
      {
        id: "346d7725-2a7b-4e4d-ac23-705689c5beff",
        text: "NOT EXISTS"
      },
      {
        id: "25d72ffc-9376-4110-a29d-149876a1689e",
        text: "Бір ішкі сұраныстың ішінде тағы бір ішкі сұраныстың орналасуы"
      },
      {
        id: "726da572-2841-4a93-be9a-1e4320cb7065",
        text: "Бір сұраныс ішіндегі бірнеше параллель сұраныстар"
      },
      {
        id: "d371a7c5-8c55-44bd-846f-3227af3b5034",
        text: "Correlated Subquery (Байланысқан сұраныс)"
      }
    ],
    correctOptionIds: [
      "89e64646-0608-4029-9991-14c323226b88"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b11",
    subjectId: SubjectId.DB,
    text: "Байланысқан ішкі сұранысты (correlated subquery) жылдамдатудың ең тиімді жолы қандай?",
    options: [
      {
        id: "db-t08-b11-op1",
        text: "Сәйкес бағандарға индекстер (indexes) құру немесе оны JOIN-мен алмастыру"
      },
      {
        id: "db-t08-b11-op2",
        text: "Кестені толық жою"
      },
      {
        id: "db-t08-b11-op3",
        text: "Ішкі сұранысты алып тастау"
      },
      {
        id: "db-t08-b11-op4",
        text: "Оны тек DDL деңгейінде орындау"
      },
      {
        id: "db-t08-b11-op5",
        text: "Ең болмағанда біреуімен орындалса true қайтарады"
      },
      {
        id: "db-t08-b11-op6",
        text: "Тек скалярлық емес сұраныстарда көрінеді"
      },
      {
        id: "db-t08-b11-op7",
        text: "Орташа жалақы есептелмегендіктен"
      },
      {
        id: "db-t08-b11-op8",
        text: "Кестеден тек бағанды өшіру"
      }
    ],
    correctOptionIds: [
      "db-t08-b11-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b12",
    subjectId: SubjectId.DB,
    text: "Сыртқы сұранысқа мүлдем тәуелсіз ішкі сұраныс орындалғанда неше рет есептеледі?",
    options: [
      {
        id: "db-t08-b12-op1",
        text: "Тек 1 рет орындалып, оның нәтижесі сыртқы сұраныста біржола қолданылады"
      },
      {
        id: "db-t08-b12-op2",
        text: "Сыртқы сұраныстың әрбір жолы үшін жеке-жеке"
      },
      {
        id: "db-t08-b12-op3",
        text: "Екі рет"
      },
      {
        id: "db-t08-b12-op4",
        text: "Жүктеме тым ауыр болғандықтан орындалмайды"
      },
      {
        id: "db-t08-b12-op5",
        text: "Тізімде тек NULL емес мәндер бар екенін білдіреді"
      },
      {
        id: "db-t08-b12-op6",
        text: "Ешқандай санатқа жатпайтын тауарларды табады"
      },
      {
        id: "db-t08-b12-op7",
        text: "Тек бірінші жол қайтарылады"
      },
      {
        id: "db-t08-b12-op8",
        text: "Көпмәнді сұраныс"
      }
    ],
    correctOptionIds: [
      "db-t08-b12-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b13",
    subjectId: SubjectId.DB,
    text: "EXISTS операторы ішкі сұраныстан не қайтарғанда true болады?",
    options: [
      {
        id: "db-t08-b13-op1",
        text: "Ішкі сұраныс ең болмағанда бір жолды қайтарған кезде"
      },
      {
        id: "db-t08-b13-op2",
        text: "Ішкі сұраныс бос нәтиже қайтарғанда"
      },
      {
        id: "db-t08-b13-op3",
        text: "Ішкі сұраныста тек оң сандар болғанда"
      },
      {
        id: "db-t08-b13-op4",
        text: "NULL қайтарғанда"
      },
      {
        id: "db-t08-b13-op5",
        text: "Бастапқы кілттерді автоматты түрде өзгерту үшін"
      },
      {
        id: "db-t08-b13-op6",
        text: "Иә, тек SELECT 1 жазылуы тиіс, әйтпесе қате шығады"
      },
      {
        id: "db-t08-b13-op7",
        text: "ДҚБЖ-ның ішкі сұранысты жазық JOIN құрылымына автоматты түрде өзгерту процесі"
      },
      {
        id: "db-t08-b13-op8",
        text: "Тек оң жағында ғана орналасуы тиіс"
      }
    ],
    correctOptionIds: [
      "db-t08-b13-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b14",
    subjectId: SubjectId.DB,
    text: "Байланысқан ішкі сұраныс (Correlated Subquery) деген не?",
    options: [
      {
        id: "db-t08-b14-op1",
        text: "Сыртқы сұраныстың әрбір жолына тәуелді және сыртқы кестенің бағандарын сілтеме ретінде қолданатын ішкі сұраныс"
      },
      {
        id: "db-t08-b14-op2",
        text: "Ешқашан орындалмайтын сұраныс"
      },
      {
        id: "db-t08-b14-op3",
        text: "Тек DDL деңгейінде жұмыс істейтін сұраныс"
      },
      {
        id: "db-t08-b14-op4",
        text: "Тек бір мән қайтаратын жай ішкі сұраныс"
      },
      {
        id: "db-t08-b14-op5",
        text: "> EXISTS"
      },
      {
        id: "db-t08-b14-op6",
        text: "Егер 5-ші департаментте бірден көп қызметкер жұмыс істесе, скалярлық емес салыстыру қатесін береді"
      },
      {
        id: "db-t08-b14-op7",
        text: "Дерекқордың файлдық өлшемін кішірейту"
      },
      {
        id: "db-t08-b14-op8",
        text: "Байланысқан сұраныс"
      }
    ],
    correctOptionIds: [
      "db-t08-b14-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b15",
    subjectId: SubjectId.DB,
    text: "SQL-де ішкі сұраныс бір ғана мәнді (жол мен баған қиылысын) қайтарса, ол қалай аталады?",
    options: [
      {
        id: "db-t08-b15-op1",
        text: "Скалярлық ішкі сұраныс (Scalar Subquery)"
      },
      {
        id: "db-t08-b15-op2",
        text: "Көпмәнді ішкі сұраныс"
      },
      {
        id: "db-t08-b15-op3",
        text: "Байланысқан сұраныс"
      },
      {
        id: "db-t08-b15-op4",
        text: "Уақытша сұраныс"
      },
      {
        id: "db-t08-b15-op5",
        text: "Кестедегі индекс атауы"
      },
      {
        id: "db-t08-b15-op6",
        text: "EXISTS сұраныс нәтижесін жадыда кэштейді"
      },
      {
        id: "db-t08-b15-op7",
        text: "NULL"
      },
      {
        id: "db-t08-b15-op8",
        text: "Кем дегенде бір қызметкері бар барлық департаменттерді"
      }
    ],
    correctOptionIds: [
      "db-t08-b15-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b16",
    subjectId: SubjectId.DB,
    text: "SQL-де IN операторы ішкі сұраныспен қолданылғанда не тексереді?",
    options: [
      {
        id: "db-t08-b16-op1",
        text: "Сыртқы сұраныс мәнінің ішкі сұраныстан қайтқан жиынтықтың (тізімнің) ішінде болуын"
      },
      {
        id: "db-t08-b16-op2",
        text: "Мәндердің бір-бірінен үлкен болуын"
      },
      {
        id: "db-t08-b16-op3",
        text: "Ішкі сұраныстың бос болуын"
      },
      {
        id: "db-t08-b16-op4",
        text: "Жолдар санының теңдігін"
      },
      {
        id: "db-t08-b16-op5",
        text: "Ішкі сұраныс және сыртқы сұраныс"
      },
      {
        id: "db-t08-b16-op6",
        text: "Дерекқордың файлдық өлшемін кішірейту"
      },
      {
        id: "db-t08-b16-op7",
        text: "Тек сандық бағандар болса ғана міндетті"
      },
      {
        id: "db-t08-b16-op8",
        text: "Көпмәнді сұраныс"
      }
    ],
    correctOptionIds: [
      "db-t08-b16-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5823fa87-b7d2-4fbf-9697-a2fdf6154bbd",
    subjectId: SubjectId.DB,
    text: "ALL операторы (мысалы, > ALL) ішкі сұраныстан оралған тізім бос болған жағдайда қандай мән қайтарады?",
    options: [
      {
        id: "88779e8b-afb0-48f3-906c-28d57f24c70e",
        text: "Әрқашан TRUE қайтарады"
      },
      {
        id: "c91a27dc-39ca-49b5-8631-dd8aea1a1f45",
        text: "Әрқашан FALSE қайтарады"
      },
      {
        id: "2acacd3f-55bf-4774-9233-6ec5b4d38b88",
        text: "NULL қайтарады"
      },
      {
        id: "e07fa91d-5af5-48ce-8105-bc25b696770e",
        text: "Қателік (Error) шығарады"
      },
      {
        id: "77b27a4f-ae60-4194-959e-0759ca862524",
        text: "Бастапқы кілті бар индексті"
      },
      {
        id: "354bf59d-66af-41c8-b8b9-0a38525192e8",
        text: "Ішкі сұраныс ең болмағанда бір жолды қайтарған кезде"
      },
      {
        id: "b57f3c16-5c5b-48a1-b092-08e3619dc091",
        text: "Сыртқы кілттерді өшіретін команданы"
      },
      {
        id: "e444290c-b3cb-4404-a282-b51bf40ad98a",
        text: "DROP сұраныстарында"
      }
    ],
    correctOptionIds: [
      "88779e8b-afb0-48f3-906c-28d57f24c70e"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b17",
    subjectId: SubjectId.DB,
    text: "Ішкі сұранысты SELECT бағандарының ішінде қолданғанда қандай шектеу қойылады?",
    options: [
      {
        id: "db-t08-b17-op1",
        text: "Ішкі сұраныс тек бір жол және бір бағаннан тұратын скалярлық мән қайтаруы тиіс"
      },
      {
        id: "db-t08-b17-op2",
        text: "Ішкі сұраныста WHERE шарттары болмауы керек"
      },
      {
        id: "db-t08-b17-op3",
        text: "Ол тек сандық мән қайтаруы тиіс"
      },
      {
        id: "db-t08-b17-op4",
        text: "Ешқандай шектеу қойылмайды"
      },
      {
        id: "db-t08-b17-op5",
        text: "Жоқ, сыртқы сұранысқа ішкі сұраныстың бағандары тікелей көрінбейді"
      },
      {
        id: "db-t08-b17-op6",
        text: "Қате шығарады, себебі скалярлық сұранысты SELECT-те қолдануға болмайды"
      },
      {
        id: "db-t08-b17-op7",
        text: "Тек оң жағында ғана орналасуы тиіс"
      },
      {
        id: "db-t08-b17-op8",
        text: "Қызметкері жоқ департаменттерді"
      }
    ],
    correctOptionIds: [
      "db-t08-b17-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b18",
    subjectId: SubjectId.DB,
    text: "FROM нұсқауының ішінде жазылған ішкі сұраныс (Subquery in FROM) SQL-де қалай аталады?",
    options: [
      {
        id: "db-t08-b18-op1",
        text: "Туынды кесте (Derived Table) немесе Inline View"
      },
      {
        id: "db-t08-b18-op2",
        text: "Байланысқан сұраныс"
      },
      {
        id: "db-t08-b18-op3",
        text: "Уақытша кесте"
      },
      {
        id: "db-t08-b18-op4",
        text: "Жүйелік каталог"
      },
      {
        id: "db-t08-b18-op5",
        text: "O(N + M)"
      },
      {
        id: "db-t08-b18-op6",
        text: "SELECT сұраныстарында"
      },
      {
        id: "db-t08-b18-op7",
        text: "Кестелік сұраныс"
      },
      {
        id: "db-t08-b18-op8",
        text: "Тек UPDATE сұраныстарында ғана рұқсат етіледі"
      }
    ],
    correctOptionIds: [
      "db-t08-b18-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b19",
    subjectId: SubjectId.DB,
    text: "ANY операторы (мысалы, = ANY) қай оператордың баламасы болып табылады?",
    options: [
      {
        id: "db-t08-b19-op1",
        text: "IN операторының"
      },
      {
        id: "db-t08-b19-op2",
        text: "NOT IN операторының"
      },
      {
        id: "db-t08-b19-op3",
        text: "EXISTS операторының"
      },
      {
        id: "db-t08-b19-op4",
        text: "BETWEEN операторының"
      },
      {
        id: "db-t08-b19-op5",
        text: "> ANY"
      },
      {
        id: "db-t08-b19-op6",
        text: "Бағанның деректер типін өзгерту керек"
      },
      {
        id: "db-t08-b19-op7",
        text: "Сыртқы сұраныстың әрбір жолы үшін жеке-жеке"
      },
      {
        id: "db-t08-b19-op8",
        text: "Қате шығарады, себебі скалярлық сұранысты SELECT-те қолдануға болмайды"
      }
    ],
    correctOptionIds: [
      "db-t08-b19-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b20",
    subjectId: SubjectId.DB,
    text: "SQL-де NOT EXISTS операторы қашан TRUE қайтарады?",
    options: [
      {
        id: "db-t08-b20-op1",
        text: "Ішкі сұраныс орындалғанда бірде-бір жол табылмаса (бос жиын болса)"
      },
      {
        id: "db-t08-b20-op2",
        text: "Ішкі сұраныста тек NULL мәндер болса"
      },
      {
        id: "db-t08-b20-op3",
        text: "Сыртқы сұраныс қатемен аяқталса"
      },
      {
        id: "db-t08-b20-op4",
        text: "Ішкі сұраныстан кем дегенде бір жол қайтарылса"
      },
      {
        id: "db-t08-b20-op5",
        text: "Қателік туындамауы үшін кестелердің бірін жою керек"
      },
      {
        id: "db-t08-b20-op6",
        text: "Деректерді жылдам өшіру үшін"
      },
      {
        id: "db-t08-b20-op7",
        text: "Тек скалярлық емес сұраныстарға ғана рұқсат етіледі"
      },
      {
        id: "db-t08-b20-op8",
        text: "Дерекқордың резервтік көшірмесін өшіру"
      }
    ],
    correctOptionIds: [
      "db-t08-b20-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e832b0de-5645-4f85-b118-7cc907d369ef",
    subjectId: SubjectId.DB,
    text: "CTE (Common Table Expressions) дегеніміз не және ол ішкі сұраныстарға қандай балама болып табылады?",
    options: [
      {
        id: "3c436988-466e-4942-b865-d9af623e864b",
        text: "WITH кілтсөзі арқылы анықталатын, сұраныс ішіндегі уақытша нәтижелік жиын"
      },
      {
        id: "dd8cf42f-b78c-40e2-808f-05900e59a29f",
        text: "Дерекқордың физикалық индексі"
      },
      {
        id: "b134afbc-5ed7-488f-8a94-09ec2ee4f8b8",
        text: "Серверде сақталатын процедура түрі"
      },
      {
        id: "ac1584fa-cea9-48ab-b93f-47676e1b75ba",
        text: "Кесте арасындағы сілтемелік шектеу"
      },
      {
        id: "acc5fb34-2ece-4e34-8949-511b2e5f83f6",
        text: "FALSE"
      },
      {
        id: "b0d8a6a8-6e7e-4356-abab-0528ef9b26b6",
        text: "Тізімдегі ешбір мәнге тең емес екенін тексереді"
      },
      {
        id: "cdfea97b-7ff4-4747-a61e-1eb62aa8d757",
        text: "Ең көп қызметкері бар департаментті"
      },
      {
        id: "65d693e2-c0c2-4635-8923-13c4f1078cd3",
        text: "Ішкі сұраныстардың қателікке ұшырап тоқтауы"
      }
    ],
    correctOptionIds: [
      "3c436988-466e-4942-b865-d9af623e864b"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b21",
    subjectId: SubjectId.DB,
    text: "CTE (Common Table Expression) құру үшін қандай кілттік сөз қолданылады?",
    options: [
      {
        id: "db-t08-b21-op1",
        text: "WITH"
      },
      {
        id: "db-t08-b21-op2",
        text: "USING"
      },
      {
        id: "db-t08-b21-op3",
        text: "CTE"
      },
      {
        id: "db-t08-b21-op4",
        text: "DECLARE"
      },
      {
        id: "db-t08-b21-op5",
        text: "Студенттерді балдары бойынша сұрыптайды"
      },
      {
        id: "db-t08-b21-op6",
        text: "Ішкі сұраныстан кем дегенде бір жол қайтарылса"
      },
      {
        id: "db-t08-b21-op7",
        text: "Кортеждік сұраныс"
      },
      {
        id: "db-t08-b21-op8",
        text: "Жүктеме тым ауыр болғандықтан орындалмайды"
      }
    ],
    correctOptionIds: [
      "db-t08-b21-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b22",
    subjectId: SubjectId.DB,
    text: "Рекурсивті CTE-ні (Recursive CTE) құру үшін қандай қосымша кілтсөз қолданылады?",
    options: [
      {
        id: "db-t08-b22-op1",
        text: "RECURSIVE"
      },
      {
        id: "db-t08-b22-op2",
        text: "LOOP"
      },
      {
        id: "db-t08-b22-op3",
        text: "REPEAT"
      },
      {
        id: "db-t08-b22-op4",
        text: "ITERATE"
      },
      {
        id: "db-t08-b22-op5",
        text: "Тек FROM сөйлемінде"
      },
      {
        id: "db-t08-b22-op6",
        text: "UNKNOWN мәнін қайтарады"
      },
      {
        id: "db-t08-b22-op7",
        text: "Ішкі сұраныста ешқандай WHERE шарты болмауы тиіс"
      },
      {
        id: "db-t08-b22-op8",
        text: "Декорреляция немесе Subquery Unnesting"
      }
    ],
    correctOptionIds: [
      "db-t08-b22-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "99664340-d859-4ca8-af98-0b69d2e520f3",
    subjectId: SubjectId.DB,
    text: "Бірнеше рет қайталанатын күрделі ішкі сұраныстарды оңайлату және оқылуын жақсарту үшін қайсысын қолданған дұрыс?",
    options: [
      {
        id: "8edc50e2-df9f-4dbf-ac33-70d6c43dc0e2",
        text: "CTE (Common Table Expression)"
      },
      {
        id: "ef11e0e8-054f-4ebb-b650-82200cc09ff7",
        text: "Derived Table (туынды кесте)"
      },
      {
        id: "ad5a07c4-a10f-43d0-90d7-d15d722dd0b3",
        text: "Correlated Subquery (байланысқан сұраныс)"
      },
      {
        id: "54af79d7-efa4-4373-8879-9fe9c9a22db3",
        text: "NATURAL JOIN"
      },
      {
        id: "fcb50d16-ca5f-4ed5-984e-aa1a2d5190bc",
        text: "Тек WHERE сөйлемінде"
      },
      {
        id: "de32a3d1-934a-4bdf-8333-0960c58e8052",
        text: "IT департаментін жабады"
      },
      {
        id: "38e37f2e-9842-414c-8aed-3b24b5d7388f",
        text: "SELECT сұраныстарында"
      },
      {
        id: "eabadf5f-cbdd-4600-bb40-74367c5703e3",
        text: "Бір сұраныс ішіндегі бірнеше параллель сұраныстар"
      }
    ],
    correctOptionIds: [
      "8edc50e2-df9f-4dbf-ac33-70d6c43dc0e2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b23",
    subjectId: SubjectId.DB,
    text: "CTE мен Derived Table (туынды кесте) арасындағы басты айырмашылық қандай?",
    options: [
      {
        id: "db-t08-b23-op1",
        text: "CTE-ні бір сұраныс ішінде бірнеше рет сілтеме жасап қолдануға болады, ал Derived Table тек анықталған FROM сөйлемінде ғана қолжетімді"
      },
      {
        id: "db-t08-b23-op2",
        text: "Derived Table өнімділігі әрқашан екі есе жоғары болады"
      },
      {
        id: "db-t08-b23-op3",
        text: "CTE-де сұрыптау жасауға болмайды"
      },
      {
        id: "db-t08-b23-op4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "db-t08-b23-op5",
        text: "Екі рет"
      },
      {
        id: "db-t08-b23-op6",
        text: "REPEAT"
      },
      {
        id: "db-t08-b23-op7",
        text: "UNKNOWN"
      },
      {
        id: "db-t08-b23-op8",
        text: "FALSE береді, себебі мәні NULL"
      }
    ],
    correctOptionIds: [
      "db-t08-b23-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b24",
    subjectId: SubjectId.DB,
    text: "SQL-де \"Inline View\" деп жиі нені атайды?",
    options: [
      {
        id: "db-t08-b24-op1",
        text: "FROM сөйлеміндегі ішкі сұранысты (Derived Table)"
      },
      {
        id: "db-t08-b24-op2",
        text: "Дерекқордағы тұрақты көріністі (View)"
      },
      {
        id: "db-t08-b24-op3",
        text: "Бастапқы кілті бар индексті"
      },
      {
        id: "db-t08-b24-op4",
        text: "Скалярлық ішкі сұранысты"
      },
      {
        id: "db-t08-b24-op5",
        text: "TRUE береді, өйткені жолдың өзі бар (бос жиын емес)"
      },
      {
        id: "db-t08-b24-op6",
        text: "FALSE береді, себебі мәні NULL"
      },
      {
        id: "db-t08-b24-op7",
        text: "Иә, міндетті, әйтпесе көптеген ДҚБЖ-да синтаксистік қате туындайды"
      },
      {
        id: "db-t08-b24-op8",
        text: "Тек бағандардың құрылымы қайтарылады"
      }
    ],
    correctOptionIds: [
      "db-t08-b24-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b25",
    subjectId: SubjectId.DB,
    text: "Ішкі сұраныс пен JOIN-ның өнімділігін салыстырғанда қайсысы көбіне тиімдірек орындалады?",
    options: [
      {
        id: "db-t08-b25-op1",
        text: "JOIN тиімдірек, себебі ДҚБЖ оны оңтайлырақ жоспарлайды"
      },
      {
        id: "db-t08-b25-op2",
        text: "Ішкі сұраныс әрқашан жылдамырақ"
      },
      {
        id: "db-t08-b25-op3",
        text: "Екеуінің орындалу жылдамдығы бірдей"
      },
      {
        id: "db-t08-b25-op4",
        text: "Тек байланысқан ішкі сұраныстар ғана жылдамырақ"
      },
      {
        id: "db-t08-b25-op5",
        text: "Иә, бұл жағдайда жолдардың белгілі бір бөлігін (мысалы, ең үлкен 5 мәнді) алу үшін қажет"
      },
      {
        id: "db-t08-b25-op6",
        text: "Дерекқордың файлдық өлшемін кішірейту"
      },
      {
        id: "db-t08-b25-op7",
        text: "Әрқашан TRUE қайтарады"
      },
      {
        id: "db-t08-b25-op8",
        text: "Оған индекстер әсер етпейтіндіктен"
      }
    ],
    correctOptionIds: [
      "db-t08-b25-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b26",
    subjectId: SubjectId.DB,
    text: "Ішкі сұранысты JOIN-мен алмастыру процесі сұранысты оңтайландыруда қалай аталады?",
    options: [
      {
        id: "db-t08-b26-op1",
        text: "Декорреляция немесе Subquery Unnesting"
      },
      {
        id: "db-t08-b26-op2",
        text: "Рекурсия"
      },
      {
        id: "db-t08-b26-op3",
        text: "Нормализация"
      },
      {
        id: "db-t08-b26-op4",
        text: "Транзакциялау"
      },
      {
        id: "db-t08-b26-op5",
        text: "Уақытша кесте"
      },
      {
        id: "db-t08-b26-op6",
        text: "Тек бастапқы кілттер ғана қайтарылады"
      },
      {
        id: "db-t08-b26-op7",
        text: "NATURAL JOIN"
      },
      {
        id: "db-t08-b26-op8",
        text: "Жоқ, бір сұраныста тек бір ғана CTE анықтауға рұқсат етілген"
      }
    ],
    correctOptionIds: [
      "db-t08-b26-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "bcba1695-e0e9-4969-bc4e-10d326a441b4",
    subjectId: SubjectId.DB,
    text: "Скалярлық ішкі сұраныс (Scalar Subquery) сыртқы шартқа сәйкес бірде-бір жол таппаса не қайтарады?",
    options: [
      {
        id: "a878c306-7293-47cb-bc0f-b4a32ee51e15",
        text: "NULL"
      },
      {
        id: "c64c7dfe-452d-4fe5-a885-6c0b80caecb6",
        text: "Нөл (0)"
      },
      {
        id: "78155e36-7d45-43aa-bcbd-517de1950b1c",
        text: "Қате (Error)"
      },
      {
        id: "08402290-7386-47bc-b449-55baf98d6527",
        text: "Бос мәтін"
      },
      {
        id: "e19cc507-a531-48c6-a5d4-34af6bf6e3f3",
        text: "Кестенің құрылымын өзгерту үшін"
      },
      {
        id: "5001b9de-4f58-4a5f-af2c-3b88f928cb09",
        text: "TRUE қайтарады, барлық жолдар сәйкес келеді"
      },
      {
        id: "70275acc-3528-4265-8622-3055a33ccef2",
        text: "ДҚБЖ оларды автоматты түрде нөмірлейді"
      },
      {
        id: "adb92854-563d-40b5-8027-148a5d36bbd7",
        text: "Тек бірінші баған ғана сақталады"
      }
    ],
    correctOptionIds: [
      "a878c306-7293-47cb-bc0f-b4a32ee51e15"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b27",
    subjectId: SubjectId.DB,
    text: "SELECT бағанында қолданылатын ішкі сұраныс бірнеше жол қайтарса, нәтижесі қандай болады?",
    options: [
      {
        id: "db-t08-b27-op1",
        text: "Қате шығады (Subquery returns more than 1 row)"
      },
      {
        id: "db-t08-b27-op2",
        text: "Тек бірінші жол ғана көрсетіледі"
      },
      {
        id: "db-t08-b27-op3",
        text: "Барлық жолдар үтір арқылы біріктіріледі"
      },
      {
        id: "db-t08-b27-op4",
        text: "NULL мәні қайтарылады"
      },
      {
        id: "db-t08-b27-op5",
        text: "Тек бастапқы кілттер ғана қайтарылады"
      },
      {
        id: "db-t08-b27-op6",
        text: "Ішкі сұраныста WHERE шарттары болмауы керек"
      },
      {
        id: "db-t08-b27-op7",
        text: "Ішкі сұранысты тиімді JOIN операциясына айналдыруға тырысады (query rewriting)"
      },
      {
        id: "db-t08-b27-op8",
        text: "Тек сандық бағандар болса ғана міндетті"
      }
    ],
    correctOptionIds: [
      "db-t08-b27-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "47871707-ce17-42f8-afd6-4c959d020251",
    subjectId: SubjectId.DB,
    text: "EXISTS операторы неліктен IN операторына қарағанда байланысқан сұраныстарда тиімдірек болуы мүмкін?",
    options: [
      {
        id: "1ccc86eb-bccb-490a-b24f-360109459eaa",
        text: "EXISTS алғашқы сәйкестікті тапқан бойда іздеуді тоқтатады (short-circuit), ал IN толық тізімді тексереді"
      },
      {
        id: "483b0a88-2bf9-45d2-97c4-605d15c582c2",
        text: "EXISTS индекстерді қолданбайды"
      },
      {
        id: "762ec7a9-b93c-4c2b-859f-02782550b8a7",
        text: "IN операторы тек сандармен жұмыс істейді"
      },
      {
        id: "69495e9a-446a-4ba5-bb35-863ca8af2ada",
        text: "EXISTS сұраныс нәтижесін жадыда кэштейді"
      },
      {
        id: "71dc0cae-7d9c-4cb6-bd63-0b5e81f98b2c",
        text: "IT департаментіндегі қызметкерлердің жалақысын 1.1 теңгеге өсіреді"
      },
      {
        id: "c6457450-f3c2-4e97-a2de-336a38ff27c1",
        text: "DECLARE"
      },
      {
        id: "c4cf7130-ce33-4fe0-ae43-b8d071b06aa9",
        text: "Хэш-кесте (Hash Table) немесе индекс арқылы іздеуге оңтайландырады"
      },
      {
        id: "fd90a605-ba92-4ab7-a2ba-b3520ff3cede",
        text: "Тек NULL мәндер болса орындалады"
      }
    ],
    correctOptionIds: [
      "1ccc86eb-bccb-490a-b24f-360109459eaa"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "96fb40b9-bfe5-48c5-bdc5-0bdb80c7081b",
    subjectId: SubjectId.DB,
    text: "EXISTS операторымен жұмыс істегенде ішкі сұраныстың SELECT тізімінде (мысалы, SELECT * немесе SELECT 1) не жазылғаны маңызды ма?",
    options: [
      {
        id: "b5be871a-3c26-4743-98cb-4402e3e6ca25",
        text: "Жоқ, маңызды емес, себебі тек жолдың бар-жоғы ғана тексеріледі"
      },
      {
        id: "a4d2f806-fd96-439e-96ec-8b4735884a2f",
        text: "Иә, тек SELECT 1 жазылуы тиіс, әйтпесе қате шығады"
      },
      {
        id: "73861694-3678-499e-84ce-e6a2ff66fcfa",
        text: "Иә, тек нақты бағандардың аттары жазылуы тиіс"
      },
      {
        id: "70735b47-8799-4398-85d0-fe48a1a38e9f",
        text: "Иә, тек SELECT * жазылуы тиіс"
      },
      {
        id: "c4a00b99-f674-45b8-803e-33708a78eb23",
        text: "Derived Table"
      },
      {
        id: "a143ac69-e24b-4965-9ead-b5c0cb8441d0",
        text: "Әр студенттің жеке ең жоғары балын табады"
      },
      {
        id: "d9d72d3a-00a8-4b18-a54c-66051fba49cf",
        text: "Иә, олар бір-бірінен кейін үтір арқылы жазыла береді"
      },
      {
        id: "01955e36-20df-422e-b771-5bf88a4961ff",
        text: "Хэш-кесте (Hash Table) немесе индекс арқылы іздеуге оңтайландырады"
      }
    ],
    correctOptionIds: [
      "b5be871a-3c26-4743-98cb-4402e3e6ca25"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b28",
    subjectId: SubjectId.DB,
    text: "SQL-де \"Semi-Join\" деп нені атайды?",
    options: [
      {
        id: "db-t08-b28-op1",
        text: "Сыртқы кестенің Тек ішкі кестеде сәйкестігі бар жолдарын ғана қайтаратын операция (EXISTS немесе IN арқылы жасалады)"
      },
      {
        id: "db-t08-b28-op2",
        text: "Екі кестенің жартылай бірігуін"
      },
      {
        id: "db-t08-b28-op3",
        text: "Тек оң жақтағы кестенің сәйкес емес жолдарын қайтаруды"
      },
      {
        id: "db-t08-b28-op4",
        text: "Кестенің өз-өзіне қосылуын"
      },
      {
        id: "db-t08-b28-op5",
        text: "Жүйелік каталог"
      },
      {
        id: "db-t08-b28-op6",
        text: "Басқа кестедегі мәндерге сүйене отырып баған мәндерін жаңарту үшін"
      },
      {
        id: "db-t08-b28-op7",
        text: "ANY"
      },
      {
        id: "db-t08-b28-op8",
        text: "Тек сандар үшін рұқсат етіледі"
      }
    ],
    correctOptionIds: [
      "db-t08-b28-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b29",
    subjectId: SubjectId.DB,
    text: "SQL-де \"Anti-Join\" деп нені атайды?",
    options: [
      {
        id: "db-t08-b29-op1",
        text: "Сыртқы кестенің ішкі кестеде сәйкестігі ЖОҚ жолдарын ғана қайтаратын операция (NOT EXISTS немесе NOT IN арқылы жасалады)"
      },
      {
        id: "db-t08-b29-op2",
        text: "Екі кестенің толық бірікпеуін"
      },
      {
        id: "db-t08-b29-op3",
        text: "Сыртқы кілттерді өшіретін команданы"
      },
      {
        id: "db-t08-b29-op4",
        text: "Транзакциядан бас тартуды"
      },
      {
        id: "db-t08-b29-op5",
        text: "Көпмәнді сұраныс"
      },
      {
        id: "db-t08-b29-op6",
        text: "Кестеден тек бағанды өшіру"
      },
      {
        id: "db-t08-b29-op7",
        text: "Анкерлік мүше (Anchor member) және рекурсивтік мүше (Recursive member)"
      },
      {
        id: "db-t08-b29-op8",
        text: "Басқа сервердегі кестені оқитын сұраныс"
      }
    ],
    correctOptionIds: [
      "db-t08-b29-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b30",
    subjectId: SubjectId.DB,
    text: "NOT EXISTS операторы мен NOT IN операторының NULL мәндері бар бағандардағы айырмашылығы қандай?",
    options: [
      {
        id: "db-t08-b30-op1",
        text: "NOT IN ішкі сұраныстан NULL қайтса ешқандай жол таппайды, ал NOT EXISTS NULL мәнін қарапайым жол ретінде қарастырып, дұрыс жұмыс істей береді"
      },
      {
        id: "db-t08-b30-op2",
        text: "NOT EXISTS NULL-ді қабылдамай қате тудырады"
      },
      {
        id: "db-t08-b30-op3",
        text: "NOT IN өнімділігі NULL мәндері бар кестелерде жоғарырақ"
      },
      {
        id: "db-t08-b30-op4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "db-t08-b30-op5",
        text: "O(1)"
      },
      {
        id: "db-t08-b30-op6",
        text: "Ішкі сұраныстардың қателікке ұшырап тоқтауы"
      },
      {
        id: "db-t08-b30-op7",
        text: "Барлық қызметкерлердің жалақысын IT департаментінің бюджетіне теңейді"
      },
      {
        id: "db-t08-b30-op8",
        text: "Әр студенттің жеке ең жоғары балын табады"
      }
    ],
    correctOptionIds: [
      "db-t08-b30-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b31",
    subjectId: SubjectId.DB,
    text: "HAVING сөйлемінің ішінде ішкі сұранысты қолдануға болады ма?",
    options: [
      {
        id: "db-t08-b31-op1",
        text: "Иә, топтық мәндерді басқа жиынтық мәндермен салыстыру үшін"
      },
      {
        id: "db-t08-b31-op2",
        text: "Жоқ, HAVING ішінде тек қарапайым шарттар ғана жазылады"
      },
      {
        id: "db-t08-b31-op3",
        text: "Тек скалярлық емес сұраныстарға ғана рұқсат етіледі"
      },
      {
        id: "db-t08-b31-op4",
        text: "Тек UPDATE сұраныстарында ғана рұқсат етіледі"
      },
      {
        id: "db-t08-b31-op5",
        text: "Иә, тек SELECT * жазылуы тиіс"
      },
      {
        id: "db-t08-b31-op6",
        text: "Тек бірінші жол қайтарылады"
      },
      {
        id: "db-t08-b31-op7",
        text: "Рекурсивті сұраныс"
      },
      {
        id: "db-t08-b31-op8",
        text: "NOT IN операторының"
      }
    ],
    correctOptionIds: [
      "db-t08-b31-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b32",
    subjectId: SubjectId.DB,
    text: "UPDATE командасында ішкі сұранысты қолдану мақсаты не?",
    options: [
      {
        id: "db-t08-b32-op1",
        text: "Басқа кестедегі мәндерге сүйене отырып баған мәндерін жаңарту үшін"
      },
      {
        id: "db-t08-b32-op2",
        text: "Кестенің құрылымын өзгерту үшін"
      },
      {
        id: "db-t08-b32-op3",
        text: "Жаңартылатын жолдардың санын шектеу үшін"
      },
      {
        id: "db-t08-b32-op4",
        text: "Жаңа кесте құру үшін"
      },
      {
        id: "db-t08-b32-op5",
        text: "Сұрыптаушы мүше және сүзгілеуші мүше"
      },
      {
        id: "db-t08-b32-op6",
        text: "Cached Transaction Engine"
      },
      {
        id: "db-t08-b32-op7",
        text: "Қате тудырады"
      },
      {
        id: "db-t08-b32-op8",
        text: "IN операторы тек сандармен жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "db-t08-b32-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b33",
    subjectId: SubjectId.DB,
    text: "DELETE командасында ішкі сұранысты қолдану мысалы қандай?",
    options: [
      {
        id: "db-t08-b33-op1",
        text: "Белгілі бір шартқа сәйкес келетін тәуелді объектілері бар жолдарды басқа кестедегі мәндер арқылы тауып өшіру"
      },
      {
        id: "db-t08-b33-op2",
        text: "Кестеден тек бағанды өшіру"
      },
      {
        id: "db-t08-b33-op3",
        text: "Кестені толығымен тазарту (TRUNCATE)"
      },
      {
        id: "db-t08-b33-op4",
        text: "Дерекқордың резервтік көшірмесін өшіру"
      },
      {
        id: "db-t08-b33-op5",
        text: "Екі кестенің жартылай бірігуін"
      },
      {
        id: "db-t08-b33-op6",
        text: "Сұрыптаушы мүше және сүзгілеуші мүше"
      },
      {
        id: "db-t08-b33-op7",
        text: "> EXISTS"
      },
      {
        id: "db-t08-b33-op8",
        text: "Сыртқы кестенің Тек ішкі кестеде сәйкестігі бар жолдарын ғана қайтаратын операция (EXISTS немесе IN арқылы жасалады)"
      }
    ],
    correctOptionIds: [
      "db-t08-b33-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b34",
    subjectId: SubjectId.DB,
    text: "INSERT INTO ... SELECT ... құрылымы не істейді?",
    options: [
      {
        id: "db-t08-b34-op1",
        text: "Ішкі сұраныс (SELECT) қайтарған нәтижелерді бірден жаңа кестеге қосады (INSERT)"
      },
      {
        id: "db-t08-b34-op2",
        text: "Деректерді тексереді және егер олар кестеде болса қате шығарады"
      },
      {
        id: "db-t08-b34-op3",
        text: "Деректерді басқа кестеге уақытша көшіреді"
      },
      {
        id: "db-t08-b34-op4",
        text: "Деректерді көрсетпейді, тек санын қайтарады"
      },
      {
        id: "db-t08-b34-op5",
        text: "Туынды кесте (Derived Table) немесе Inline View"
      },
      {
        id: "db-t08-b34-op6",
        text: "Ешқашан орындалмайтын сұраныс"
      },
      {
        id: "db-t08-b34-op7",
        text: "REPEAT"
      },
      {
        id: "db-t08-b34-op8",
        text: "Иә, ішкі сұраныстан сыртқы сұраныс бағандары көрінеді (scope visibility)"
      }
    ],
    correctOptionIds: [
      "db-t08-b34-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b35",
    subjectId: SubjectId.DB,
    text: "Ішкі сұраныстардың максималды кірістірілу тереңдігі (nesting limit) бар ма?",
    options: [
      {
        id: "db-t08-b35-op1",
        text: "ДҚБЖ түріне байланысты белгілі бір шектеулер болады (мысалы, SQL Server-де 32 деңгей)"
      },
      {
        id: "db-t08-b35-op2",
        text: "Жоқ, кез келген ДҚБЖ шексіз тереңдікті қолдайды"
      },
      {
        id: "db-t08-b35-op3",
        text: "Тек 2 деңгеймен шектеледі"
      },
      {
        id: "db-t08-b35-op4",
        text: "Тек 100 деңгеймен шектеледі"
      },
      {
        id: "db-t08-b35-op5",
        text: "Бастапқы кілттерді автоматты түрде өзгерту үшін"
      },
      {
        id: "db-t08-b35-op6",
        text: "Декорреляция немесе Subquery Unnesting"
      },
      {
        id: "db-t08-b35-op7",
        text: "NULL мәні қайтарылады"
      },
      {
        id: "db-t08-b35-op8",
        text: "Егер 5-ші департаментте бірден көп қызметкер жұмыс істесе, скалярлық емес салыстыру қатесін береді"
      }
    ],
    correctOptionIds: [
      "db-t08-b35-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8185e5fb-344c-4c8e-963c-8e2dd59e6f7a",
    subjectId: SubjectId.DB,
    text: "Байланысқан ішкі сұраныстың сыртқы сұраныстың әрбір жолы үшін орындалуына байланысты, оның орташа алгоритмдік күрделілігі қандай?",
    options: [
      {
        id: "0fd7fab5-27e9-4997-b1b1-aceb25e5dda5",
        text: "O(N * M), мұнда N - сыртқы жолдар, M - ішкі жолдар саны"
      },
      {
        id: "68785fee-053b-49e4-8de3-60487d107c42",
        text: "O(1)"
      },
      {
        id: "8e65d6ba-7bad-4ea0-8f92-85fc521f14b3",
        text: "O(log N)"
      },
      {
        id: "a3f6162f-2fdd-42b9-b0c5-eef47d3838f7",
        text: "O(N + M)"
      },
      {
        id: "603d7a67-6015-4767-87ca-7492518fbe18",
        text: "Тек олардың аттары бірдей болса ғана рұқсат"
      },
      {
        id: "166a687f-36ea-4785-a3a8-1a0a3f882566",
        text: "Ең жоғары жалақы алатын қызметкерді табады"
      },
      {
        id: "26d9b18d-55e7-4f17-9187-32ce5f70fae6",
        text: "Сыртқы кестеге алиас (атау) беріп, бағанды сол алиас арқылы нақты көрсету керек (мысалы, outer_table.column_name)"
      },
      {
        id: "d6302272-3870-4d03-9436-73445e06c0b6",
        text: "Тек INNER JOIN қолдануға рұқсат етіледі"
      }
    ],
    correctOptionIds: [
      "0fd7fab5-27e9-4997-b1b1-aceb25e5dda5"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b36",
    subjectId: SubjectId.DB,
    text: "SQL-де SOME операторы қандай оператормен толық мағыналас?",
    options: [
      {
        id: "db-t08-b36-op1",
        text: "ANY"
      },
      {
        id: "db-t08-b36-op2",
        text: "ALL"
      },
      {
        id: "db-t08-b36-op3",
        text: "EXISTS"
      },
      {
        id: "db-t08-b36-op4",
        text: "IN"
      },
      {
        id: "db-t08-b36-op5",
        text: "Дерекқордың орын жетпеуінен қысылуы"
      },
      {
        id: "db-t08-b36-op6",
        text: "Әрқашан байланысқан сұраныс ретінде орындайды"
      },
      {
        id: "db-t08-b36-op7",
        text: "Иә, кез келген уақытта қолдануға рұқсат етілген"
      },
      {
        id: "db-t08-b36-op8",
        text: "Correlated Subquery (Байланысқан сұраныс)"
      }
    ],
    correctOptionIds: [
      "db-t08-b36-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b37",
    subjectId: SubjectId.DB,
    text: "<> ANY (тең емес ANY) операторы не істейді?",
    options: [
      {
        id: "db-t08-b37-op1",
        text: "Егер мән ішкі сұраныс қайтарған тізімдегі кем дегенде бір мәнге тең болмаса, TRUE қайтарады"
      },
      {
        id: "db-t08-b37-op2",
        text: "Тізімдегі ешбір мәнге тең емес екенін тексереді"
      },
      {
        id: "db-t08-b37-op3",
        text: "Тізім бос болса ғана TRUE қайтарады"
      },
      {
        id: "db-t08-b37-op4",
        text: "Тізімдегі барлық мәнге тең емес екенін тексереді"
      },
      {
        id: "db-t08-b37-op5",
        text: "Әр санаттағы екінші ең қымбат тауардан арзан тауарларды табады"
      },
      {
        id: "db-t08-b37-op6",
        text: "Derived Table (Туынды кесте)"
      },
      {
        id: "db-t08-b37-op7",
        text: "Қателер журналы"
      },
      {
        id: "db-t08-b37-op8",
        text: "IT департаментіндегі қызметкерлердің жалақысын 1.1 теңгеге өсіреді"
      }
    ],
    correctOptionIds: [
      "db-t08-b37-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b38",
    subjectId: SubjectId.DB,
    text: "<> ALL (тең емес ALL) операторы нені білдіреді?",
    options: [
      {
        id: "db-t08-b38-op1",
        text: "Тізімдегі мәндердің ешқайсысына тең емес (NOT IN баламасы)"
      },
      {
        id: "db-t08-b38-op2",
        text: "Тізімдегі кем дегенде бір мәнге тең емес"
      },
      {
        id: "db-t08-b38-op3",
        text: "Тізімде тек NULL емес мәндер бар екенін білдіреді"
      },
      {
        id: "db-t08-b38-op4",
        text: "Тізімдегі барлық мәндерге тең"
      },
      {
        id: "db-t08-b38-op5",
        text: "Тек JOIN операторымен қолданғанда міндетті"
      },
      {
        id: "db-t08-b38-op6",
        text: "Ешқандай қате туындамайды"
      },
      {
        id: "db-t08-b38-op7",
        text: "Тек сандық бағандар болса ғана міндетті"
      },
      {
        id: "db-t08-b38-op8",
        text: "Оны тек DDL деңгейінде орындау"
      }
    ],
    correctOptionIds: [
      "db-t08-b38-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b39",
    subjectId: SubjectId.DB,
    text: "Ұялы ішкі сұраныстар (nested subqueries) деген не?",
    options: [
      {
        id: "db-t08-b39-op1",
        text: "Бір ішкі сұраныстың ішінде тағы бір ішкі сұраныстың орналасуы"
      },
      {
        id: "db-t08-b39-op2",
        text: "Бір сұраныс ішіндегі бірнеше параллель сұраныстар"
      },
      {
        id: "db-t08-b39-op3",
        text: "Бастапқы кілттерді қосатын сұраныстар"
      },
      {
        id: "db-t08-b39-op4",
        text: "Серверлер арасындағы сұраныстар"
      },
      {
        id: "db-t08-b39-op5",
        text: "Деректерді біріктіреді"
      },
      {
        id: "db-t08-b39-op6",
        text: "Тәуелсіз (Non-correlated) ішкі сұраныс"
      },
      {
        id: "db-t08-b39-op7",
        text: "Жаңа кесте құру үшін"
      },
      {
        id: "db-t08-b39-op8",
        text: "FOREIGN KEY (Сыртқы кілт) құру"
      }
    ],
    correctOptionIds: [
      "db-t08-b39-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b40",
    subjectId: SubjectId.DB,
    text: "SELECT * FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees); сұранысы не істейді?",
    options: [
      {
        id: "db-t08-b40-op1",
        text: "Жалақысы орташа жалақыдан жоғары барлық қызметкерлерді табады"
      },
      {
        id: "db-t08-b40-op2",
        text: "Ең жоғары жалақы алатын қызметкерді табады"
      },
      {
        id: "db-t08-b40-op3",
        text: "Орташа жалақының мөлшерін есептейді"
      },
      {
        id: "db-t08-b40-op4",
        text: "Қызметкерлердің жалақысын орташа шамаға теңестіреді"
      },
      {
        id: "db-t08-b40-op5",
        text: "Жолдар санының теңдігін"
      },
      {
        id: "db-t08-b40-op6",
        text: "INNER JOIN"
      },
      {
        id: "db-t08-b40-op7",
        text: "Бір сұраныс ішіндегі бірнеше параллель сұраныстар"
      },
      {
        id: "db-t08-b40-op8",
        text: "Тек рекурсивті CTE ішінде ғана рұқсат етіледі"
      }
    ],
    correctOptionIds: [
      "db-t08-b40-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b41",
    subjectId: SubjectId.DB,
    text: "Salary > (SELECT AVG(Salary) FROM Employees) ішкі сұранысы қандай сұраныс түріне жатады?",
    options: [
      {
        id: "db-t08-b41-op1",
        text: "Тәуелсіз (Non-correlated) ішкі сұраныс"
      },
      {
        id: "db-t08-b41-op2",
        text: "Байланысқан (Correlated) ішкі сұраныс"
      },
      {
        id: "db-t08-b41-op3",
        text: "Рекурсивті сұраныс"
      },
      {
        id: "db-t08-b41-op4",
        text: "Derived Table"
      },
      {
        id: "db-t08-b41-op5",
        text: "Жүктеме тым ауыр болғандықтан орындалмайды"
      },
      {
        id: "db-t08-b41-op6",
        text: "Мәндердің бір-бірінен үлкен болуын"
      },
      {
        id: "db-t08-b41-op7",
        text: "Тек JOIN операторымен қолданғанда міндетті"
      },
      {
        id: "db-t08-b41-op8",
        text: "Транзакциядан бас тартуды"
      }
    ],
    correctOptionIds: [
      "db-t08-b41-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c8fad0cc-e682-4680-b2bd-fa58877a3524",
    subjectId: SubjectId.DB,
    text: "SELECT * FROM Departments d WHERE EXISTS (SELECT 1 FROM Employees e WHERE e.DeptID = d.ID); сұранысы қандай департаменттерді табады?",
    options: [
      {
        id: "8b3c9fbc-13cb-4a4e-b186-0b0138e66955",
        text: "Кем дегенде бір қызметкері бар барлық департаменттерді"
      },
      {
        id: "fe811bc7-ae62-4d98-bbf4-c546e0016ec5",
        text: "Қызметкері жоқ департаменттерді"
      },
      {
        id: "1f3c8f99-ccdb-417b-bccc-1e8f616c2381",
        text: "Ең көп қызметкері бар департаментті"
      },
      {
        id: "1d36ad21-3c16-4107-99f8-80da85aae96e",
        text: "Жаңадан ашылған департаменттерді"
      },
      {
        id: "439926d8-1f1b-4032-aa9d-2f223860c4de",
        text: "CTE (Common Table Expression)"
      },
      {
        id: "6970e9ca-f1b5-4a68-b6df-37b2e1f69609",
        text: "REPEAT"
      },
      {
        id: "71a2db6a-37e3-4d5c-bebc-7f2fbe833fd3",
        text: "Сұранысты уақытша кестеге өзгертеді"
      },
      {
        id: "fc6c5532-cbff-4bac-afd5-4634b83df4f8",
        text: "Уақытша сұраныс"
      }
    ],
    correctOptionIds: [
      "8b3c9fbc-13cb-4a4e-b186-0b0138e66955"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "96fbef15-1a63-4cb3-b4a4-d5303c8750ed",
    subjectId: SubjectId.DB,
    text: "WHERE EXISTS (SELECT 1 FROM Employees e WHERE e.DeptID = d.ID) ішкі сұранысы қандай сұраныс түріне жатады?",
    options: [
      {
        id: "a36567d9-b57f-4221-b5bc-5bca8ac4873f",
        text: "Байланысқан (Correlated) ішкі сұраныс"
      },
      {
        id: "9cad3ff5-b6fd-47a1-8935-0c4bc6317822",
        text: "Тәуелсіз (Non-correlated) ішкі сұраныс"
      },
      {
        id: "3ca33374-1f0d-4aa0-8bb3-640f5bb99bc0",
        text: "Скалярлық сұраныс"
      },
      {
        id: "e5b36404-305f-4ee7-90fa-419dbeb2876b",
        text: "Common Table Expression"
      },
      {
        id: "045cc996-a5e4-4b18-ae7b-f3bba052bd82",
        text: "Тек мәтіндік деректер үшін рұқсат етіледі"
      },
      {
        id: "ef7be588-eb0d-462e-a0bb-9f5562e75503",
        text: "Иә, ішкі сұраныстың барлық жолдары сыртқы сұранысқа беріледі"
      },
      {
        id: "d633fa1e-e332-4c56-a0f1-e22e25fdead8",
        text: "Әдетте мағынасы жоқ және SQL Server сияқты кейбір жүйелерде тікелей қате береді"
      },
      {
        id: "cc68dad0-68b1-4cec-8637-c1e14553cea9",
        text: "Қызметкерлердің жалақысын орташа шамаға теңестіреді"
      }
    ],
    correctOptionIds: [
      "a36567d9-b57f-4221-b5bc-5bca8ac4873f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b42",
    subjectId: SubjectId.DB,
    text: "Туынды кестелерді (Derived Tables) қолданғанда оларға балама атау (alias) беру міндетті ме?",
    options: [
      {
        id: "db-t08-b42-op1",
        text: "Иә, міндетті, әйтпесе көптеген ДҚБЖ-да синтаксистік қате туындайды"
      },
      {
        id: "db-t08-b42-op2",
        text: "Жоқ, міндетті емес, тек өз еркімен беріледі"
      },
      {
        id: "db-t08-b42-op3",
        text: "Тек сандық бағандар болса ғана міндетті"
      },
      {
        id: "db-t08-b42-op4",
        text: "Тек JOIN операторымен қолданғанда міндетті"
      },
      {
        id: "db-t08-b42-op5",
        text: "IN операторының"
      },
      {
        id: "db-t08-b42-op6",
        text: "UNION немесе UNION ALL"
      },
      {
        id: "db-t08-b42-op7",
        text: "UNKNOWN"
      },
      {
        id: "db-t08-b42-op8",
        text: "ITERATE"
      }
    ],
    correctOptionIds: [
      "db-t08-b42-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b43",
    subjectId: SubjectId.DB,
    text: "Derived Table-де баған аттары қайталанса не болады?",
    options: [
      {
        id: "db-t08-b43-op1",
        text: "Қате туындайды, туынды кесте бағандарының аттары бірегей болуы керек"
      },
      {
        id: "db-t08-b43-op2",
        text: "ДҚБЖ оларды автоматты түрде нөмірлейді"
      },
      {
        id: "db-t08-b43-op3",
        text: "Тек бірінші баған ғана сақталады"
      },
      {
        id: "db-t08-b43-op4",
        text: "Соңғы баған алдыңғыларын алмастырады"
      },
      {
        id: "db-t08-b43-op5",
        text: "Тек бірінші жолды өшіреді"
      },
      {
        id: "db-t08-b43-op6",
        text: "Оны тек рекурсивті түрде орындайды"
      },
      {
        id: "db-t08-b43-op7",
        text: "Барлық тауарларды табады"
      },
      {
        id: "db-t08-b43-op8",
        text: "Екеуі де NULL мәндерді елемейді"
      }
    ],
    correctOptionIds: [
      "db-t08-b43-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e94e0ba4-654a-4609-9c87-37afee1fbae6",
    subjectId: SubjectId.DB,
    text: "SQL-де бір WITH сөйлемінде анықталған CTE ішінде одан бұрын анықталған басқа CTE-лерге сілтеме жасауға болады ма?",
    options: [
      {
        id: "037f8311-076b-479d-bd69-b73c1ceef85a",
        text: "Иә, оларды тізбектей байланыстыруға болады"
      },
      {
        id: "d662ee83-f18f-4fb2-a22c-09ce2e1f491b",
        text: "Жоқ, CTE-лер тек дербес жұмыс істеуі тиіс"
      },
      {
        id: "a8493acd-013b-4d0c-9bbf-64f348e909ba",
        text: "Тек рекурсивті CTE ішінде ғана рұқсат етіледі"
      },
      {
        id: "de7976ed-aae2-4566-8d83-6e7a1305ccc2",
        text: "Ол үшін арнайы JOIN жазылуы керек"
      },
      {
        id: "69365cff-2d13-47ff-b3e5-fdecd78a9698",
        text: "Тек байланысқан ішкі сұраныстар ғана жылдамырақ"
      },
      {
        id: "3a697c76-5fd9-402d-b56b-50daacc35f0b",
        text: "EXISTS"
      },
      {
        id: "9f0568bd-9466-46d4-95ac-f23008520051",
        text: "ANY (немесе SOME)"
      },
      {
        id: "cb4a304f-b7ab-422f-858d-ebadb7c216d8",
        text: "Бір сұраныс ішіндегі бірнеше параллель сұраныстар"
      }
    ],
    correctOptionIds: [
      "037f8311-076b-479d-bd69-b73c1ceef85a"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "79a5f0b6-46bc-4013-9162-460bc4e5045b",
    subjectId: SubjectId.DB,
    text: "Дерекқор оңтайландырғышы (Query Optimizer) ішкі сұраныстарды талдау кезінде қандай әрекет жасайды?",
    options: [
      {
        id: "21f17b59-fec8-48bc-ab80-fce5942af593",
        text: "Ішкі сұранысты тиімді JOIN операциясына айналдыруға тырысады (query rewriting)"
      },
      {
        id: "dad2f26f-4e01-418a-8d58-21b5ec900e7b",
        text: "Оларды орындамай тастап кетеді"
      },
      {
        id: "de8edd24-6f53-40f4-b359-7b5de58eeb04",
        text: "Әрқашан байланысқан сұраныс ретінде орындайды"
      },
      {
        id: "f22acde2-abc4-49d3-a2da-2b0f504b292c",
        text: "Сұранысты уақытша кестеге өзгертеді"
      },
      {
        id: "07d8a3a0-27ae-42f3-95dc-453286927ab1",
        text: "Тек бірінші жолды өшіреді"
      },
      {
        id: "8b5c8cde-b49f-49a1-af88-6db9ffdb16fe",
        text: "Екеуі де бірдей қауіпті"
      },
      {
        id: "3c11cb45-5435-4d1d-b48e-320da0128c4e",
        text: "Қате шығады (Subquery returns more than 1 row)"
      },
      {
        id: "e948f800-dc46-43e4-800e-0c0357615ece",
        text: "Орташа жалақының мөлшерін есептейді"
      }
    ],
    correctOptionIds: [
      "21f17b59-fec8-48bc-ab80-fce5942af593"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b44",
    subjectId: SubjectId.DB,
    text: "SQL-де \"Subquery Collapse\" немесе \"Subquery Flattening\" деген не?",
    options: [
      {
        id: "db-t08-b44-op1",
        text: "ДҚБЖ-ның ішкі сұранысты жазық JOIN құрылымына автоматты түрде өзгерту процесі"
      },
      {
        id: "db-t08-b44-op2",
        text: "Ішкі сұраныстардың қателікке ұшырап тоқтауы"
      },
      {
        id: "db-t08-b44-op3",
        text: "Кірістірілген сұраныстар санын шектеу"
      },
      {
        id: "db-t08-b44-op4",
        text: "Дерекқордың орын жетпеуінен қысылуы"
      },
      {
        id: "db-t08-b44-op5",
        text: "UNKNOWN"
      },
      {
        id: "db-t08-b44-op6",
        text: "Ішкі сұранысты тиімді JOIN операциясына айналдыруға тырысады (query rewriting)"
      },
      {
        id: "db-t08-b44-op7",
        text: "RECURSIVE"
      },
      {
        id: "db-t08-b44-op8",
        text: "Қате (Error)"
      }
    ],
    correctOptionIds: [
      "db-t08-b44-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6562478f-1a6d-4356-b19e-9e40d2d2dea0",
    subjectId: SubjectId.DB,
    text: "IN операторының ішінде бос жиын (мысалы, сәйкес келетін жолы жоқ ішкі сұраныс) болса, сұраныс нәтижесі қандай болады?",
    options: [
      {
        id: "c16778a2-cd3c-4bc3-83d0-940672451f98",
        text: "FALSE қайтарады, ешқандай жол таңдалмайды"
      },
      {
        id: "bff57e7c-19a9-4c01-8c37-acba72bf8241",
        text: "TRUE қайтарады, барлық жолдар таңдалады"
      },
      {
        id: "f3ce03bf-363c-4403-a0e2-c23a24592259",
        text: "NULL қайтарады"
      },
      {
        id: "1305776b-dd11-4887-a35a-256b74e8d0f2",
        text: "Қате шығады"
      },
      {
        id: "68f50f26-efdc-4498-b041-c1af9c7e254d",
        text: "Орташа жалақы дұрыс есептелмегендіктен"
      },
      {
        id: "15dabcef-d3ec-45b5-817e-c941af8eb37f",
        text: "O(log N)"
      },
      {
        id: "f3990277-7cb8-4ebc-9f63-fef964cc84f9",
        text: "Кестенің құрылымын өзгерту үшін"
      },
      {
        id: "0a52966c-336f-44e2-8745-a1b1b8d0f502",
        text: "REPEAT"
      }
    ],
    correctOptionIds: [
      "c16778a2-cd3c-4bc3-83d0-940672451f98"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b45",
    subjectId: SubjectId.DB,
    text: "NOT IN операторының ішінде бос жиын болса, ол қандай мән қайтарады?",
    options: [
      {
        id: "db-t08-b45-op1",
        text: "TRUE қайтарады, барлық жолдар сәйкес келеді"
      },
      {
        id: "db-t08-b45-op2",
        text: "FALSE қайтарады, ешқандай жол сәйкес келмейді"
      },
      {
        id: "db-t08-b45-op3",
        text: "NULL қайтарады"
      },
      {
        id: "db-t08-b45-op4",
        text: "Қате шығады"
      },
      {
        id: "db-t08-b45-op5",
        text: "Қызметкері жоқ департаменттерді"
      },
      {
        id: "db-t08-b45-op6",
        text: "Жоқ, сыртқы сұранысқа ішкі сұраныстың бағандары тікелей көрінбейді"
      },
      {
        id: "db-t08-b45-op7",
        text: "Иә, ішкі сұраныстан сыртқы сұраныс бағандары көрінеді (scope visibility)"
      },
      {
        id: "db-t08-b45-op8",
        text: "FOREIGN KEY (Сыртқы кілт) құру"
      }
    ],
    correctOptionIds: [
      "db-t08-b45-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "319d11a7-94d5-4e34-a492-d595e7db9299",
    subjectId: SubjectId.DB,
    text: "Қарапайым скалярлық немесе WHERE ішіндегі ішкі сұраныста LIMIT немесе TOP қолданылмаса, ORDER BY операторын жазуға рұқсат етіледі ме?",
    options: [
      {
        id: "e4a85228-8a6f-4f24-87cf-c1fed51c5eb7",
        text: "Әдетте мағынасы жоқ және SQL Server сияқты кейбір жүйелерде тікелей қате береді"
      },
      {
        id: "d52be9d4-e345-4c2d-9944-f97187daef41",
        text: "Иә, әрқашан рұқсат етіледі және міндетті болып табылады"
      },
      {
        id: "8a4aa683-62de-4ae8-94aa-2343dca5662f",
        text: "Тек сандар үшін рұқсат етіледі"
      },
      {
        id: "2f15d18d-dcad-4848-a8bd-287faae743f3",
        text: "Тек мәтіндік деректер үшін рұқсат етіледі"
      },
      {
        id: "a4782d25-506e-40d1-b887-91e4c9d0ea00",
        text: "Ішкі сұраныстан кем дегенде бір жол қайтарылса"
      },
      {
        id: "ca9b2edf-7ca6-442b-b884-9db9d3e8ec1f",
        text: "Декорреляция немесе Subquery Unnesting"
      },
      {
        id: "806999b2-8fdb-46cd-a97b-f723a7469924",
        text: "Барлық мәндермен орындалса ғана true қайтарады"
      },
      {
        id: "3e24ad2d-3208-47e9-aa23-9fc103614400",
        text: "Ішкі сұраныста DISTINCT қолданылмауы тиіс"
      }
    ],
    correctOptionIds: [
      "e4a85228-8a6f-4f24-87cf-c1fed51c5eb7"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b46",
    subjectId: SubjectId.DB,
    text: "SELECT Name, (SELECT Max(Score) FROM Tests) FROM Students; сұранысы қалай орындалады?",
    options: [
      {
        id: "db-t08-b46-op1",
        text: "Әрбір студент жолының жанында барлық тесттердің ең жоғары балын қайталайды"
      },
      {
        id: "db-t08-b46-op2",
        text: "Әр студенттің жеке ең жоғары балын табады"
      },
      {
        id: "db-t08-b46-op3",
        text: "Студенттерді балдары бойынша сұрыптайды"
      },
      {
        id: "db-t08-b46-op4",
        text: "Қате шығарады, себебі скалярлық сұранысты SELECT-те қолдануға болмайды"
      },
      {
        id: "db-t08-b46-op5",
        text: "Индекс"
      },
      {
        id: "db-t08-b46-op6",
        text: "Иә, әрқашан рұқсат етіледі және міндетті болып табылады"
      },
      {
        id: "db-t08-b46-op7",
        text: "Сұранысты уақытша кестеге өзгертеді"
      },
      {
        id: "db-t08-b46-op8",
        text: "Common Table Expression"
      }
    ],
    correctOptionIds: [
      "db-t08-b46-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b47",
    subjectId: SubjectId.DB,
    text: "Төмендегілердің қайсысы ішкі сұраныспен байланысты операция немесе ұғым ЕМЕС?",
    options: [
      {
        id: "db-t08-b47-op1",
        text: "FOREIGN KEY (Сыртқы кілт) құру"
      },
      {
        id: "db-t08-b47-op2",
        text: "Derived Table (Туынды кесте)"
      },
      {
        id: "db-t08-b47-op3",
        text: "Correlated Subquery (Байланысқан сұраныс)"
      },
      {
        id: "db-t08-b47-op4",
        text: "Scalar Subquery (Скалярлық сұраныс)"
      },
      {
        id: "db-t08-b47-op5",
        text: "Тек DDL деңгейінде жұмыс істейтін сұраныс"
      },
      {
        id: "db-t08-b47-op6",
        text: "Әрбір студент жолының жанында барлық тесттердің ең жоғары балын қайталайды"
      },
      {
        id: "db-t08-b47-op7",
        text: "Иә, тек SELECT * жазылуы тиіс"
      },
      {
        id: "db-t08-b47-op8",
        text: "<= ANY"
      }
    ],
    correctOptionIds: [
      "db-t08-b47-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b48",
    subjectId: SubjectId.DB,
    text: "Ішкі сұранысты сұрыптау үшін TOP немесе LIMIT қолданылса, оған ORDER BY жазуға болады ма?",
    options: [
      {
        id: "db-t08-b48-op1",
        text: "Иә, бұл жағдайда жолдардың белгілі бір бөлігін (мысалы, ең үлкен 5 мәнді) алу үшін қажет"
      },
      {
        id: "db-t08-b48-op2",
        text: "Жоқ, кез келген жағдайда ішкі сұраныста ORDER BY қолдануға тыйым салынған"
      },
      {
        id: "db-t08-b48-op3",
        text: "Тек PostgreSQL-де ғана рұқсат етілген"
      },
      {
        id: "db-t08-b48-op4",
        text: "Тек FROM ішіндегі сұраныстарда ғана рұқсат етілген"
      },
      {
        id: "db-t08-b48-op5",
        text: "Кесте құрылымын автоматты түрде өзгерту"
      },
      {
        id: "db-t08-b48-op6",
        text: "Анкерлік мүше (Anchor member) және рекурсивтік мүше (Recursive member)"
      },
      {
        id: "db-t08-b48-op7",
        text: "Жоқ, маңызды емес, себебі тек жолдың бар-жоғы ғана тексеріледі"
      },
      {
        id: "db-t08-b48-op8",
        text: "RECURSIVE"
      }
    ],
    correctOptionIds: [
      "db-t08-b48-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b49",
    subjectId: SubjectId.DB,
    text: "EXISTS операторының орнына IN операторын қолданғанда, ішкі сұранысқа қандай шектеу қойылады?",
    options: [
      {
        id: "db-t08-b49-op1",
        text: "Ішкі сұраныс тек бір бағанды қайтаруы тиіс"
      },
      {
        id: "db-t08-b49-op2",
        text: "Ішкі сұраныста ешқандай WHERE шарты болмауы тиіс"
      },
      {
        id: "db-t08-b49-op3",
        text: "Ішкі сұраныс тек бір жол қайтаруы тиіс"
      },
      {
        id: "db-t08-b49-op4",
        text: "Ішкі сұраныста DISTINCT қолданылмауы тиіс"
      },
      {
        id: "db-t08-b49-op5",
        text: "Ішкі кесте"
      },
      {
        id: "db-t08-b49-op6",
        text: "Сыртқы сұраныстың әрбір жолына тәуелді және сыртқы кестенің бағандарын сілтеме ретінде қолданатын ішкі сұраныс"
      },
      {
        id: "db-t08-b49-op7",
        text: "Тек оң жақтағы кестенің сәйкес емес жолдарын қайтаруды"
      },
      {
        id: "db-t08-b49-op8",
        text: "Индекс"
      }
    ],
    correctOptionIds: [
      "db-t08-b49-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b50",
    subjectId: SubjectId.DB,
    text: "EXISTS операторы ішкі сұраныстан NULL мәні бар жалғыз жол қайтқанда қандай нәтиже береді?",
    options: [
      {
        id: "db-t08-b50-op1",
        text: "TRUE береді, өйткені жолдың өзі бар (бос жиын емес)"
      },
      {
        id: "db-t08-b50-op2",
        text: "FALSE береді, себебі мәні NULL"
      },
      {
        id: "db-t08-b50-op3",
        text: "NULL береді"
      },
      {
        id: "db-t08-b50-op4",
        text: "UNKNOWN мәнін қайтарады"
      },
      {
        id: "db-t08-b50-op5",
        text: "Екеуі де бірдей қауіпті"
      },
      {
        id: "db-t08-b50-op6",
        text: "Анкерлік мүше (Anchor member) және рекурсивтік мүше (Recursive member)"
      },
      {
        id: "db-t08-b50-op7",
        text: "Иә, ішкі сұраныстың барлық жолдары сыртқы сұранысқа беріледі"
      },
      {
        id: "db-t08-b50-op8",
        text: "Тәуелсіз немесе қарапайым ішкі сұраныс (Non-correlated subquery)"
      }
    ],
    correctOptionIds: [
      "db-t08-b50-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b51",
    subjectId: SubjectId.DB,
    text: "WITH CTE AS (SELECT * FROM Users) SELECT * FROM CTE; сұранысындағы CTE ұғымы нені білдіреді?",
    options: [
      {
        id: "db-t08-b51-op1",
        text: "Common Table Expression (Ортақ кестелік өрнек)"
      },
      {
        id: "db-t08-b51-op2",
        text: "Correlated Table Execution"
      },
      {
        id: "db-t08-b51-op3",
        text: "Constraint Type Enforcement"
      },
      {
        id: "db-t08-b51-op4",
        text: "Cached Transaction Engine"
      },
      {
        id: "db-t08-b51-op5",
        text: "Тек PostgreSQL-де ғана рұқсат етілген"
      },
      {
        id: "db-t08-b51-op6",
        text: "Басқа SQL сұранысының ішіне кірістірілген сұраныс"
      },
      {
        id: "db-t08-b51-op7",
        text: "Correlated Subquery (Байланысқан сұраныс)"
      },
      {
        id: "db-t08-b51-op8",
        text: "Сыртқы сұраныстың әрбір жолы үшін орындалатын және сыртқы сұраныс мәндеріне тәуелді ішкі сұраныс"
      }
    ],
    correctOptionIds: [
      "db-t08-b51-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b52",
    subjectId: SubjectId.DB,
    text: "CTE-лерді бірнеше рет үтір арқылы бөліп бір WITH сөйлемінде анықтауға болады ма?",
    options: [
      {
        id: "db-t08-b52-op1",
        text: "Иә, олар бір-бірінен кейін үтір арқылы жазыла береді"
      },
      {
        id: "db-t08-b52-op2",
        text: "Жоқ, бір сұраныста тек бір ғана CTE анықтауға рұқсат етілген"
      },
      {
        id: "db-t08-b52-op3",
        text: "Тек олардың аттары бірдей болса ғана рұқсат"
      },
      {
        id: "db-t08-b52-op4",
        text: "Тек SQL Server дерекқорында ғана рұқсат етілген"
      },
      {
        id: "db-t08-b52-op5",
        text: "Тек FROM сөйлемінде"
      },
      {
        id: "db-t08-b52-op6",
        text: "Тізімде тек NULL емес мәндер бар екенін білдіреді"
      },
      {
        id: "db-t08-b52-op7",
        text: "Тек PostgreSQL-де ғана рұқсат етілген"
      },
      {
        id: "db-t08-b52-op8",
        text: "Екі кестенің жартылай бірігуін"
      }
    ],
    correctOptionIds: [
      "db-t08-b52-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b53",
    subjectId: SubjectId.DB,
    text: "Рекурсивті CTE-де (Recursive CTE) қандай екі негізгі бөлік болады?",
    options: [
      {
        id: "db-t08-b53-op1",
        text: "Анкерлік мүше (Anchor member) және рекурсивтік мүше (Recursive member)"
      },
      {
        id: "db-t08-b53-op2",
        text: "Бастапқы кесте және соңғы кесте"
      },
      {
        id: "db-t08-b53-op3",
        text: "Ішкі сұраныс және сыртқы сұраныс"
      },
      {
        id: "db-t08-b53-op4",
        text: "Сұрыптаушы мүше және сүзгілеуші мүше"
      },
      {
        id: "db-t08-b53-op5",
        text: "Тек SQL Server дерекқорында ғана рұқсат етілген"
      },
      {
        id: "db-t08-b53-op6",
        text: "Тізім бос болса ғана TRUE қайтарады"
      },
      {
        id: "db-t08-b53-op7",
        text: "Барлық жолдарды бірден өшіреді"
      },
      {
        id: "db-t08-b53-op8",
        text: "NULL мәні қайтарылады"
      }
    ],
    correctOptionIds: [
      "db-t08-b53-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b54",
    subjectId: SubjectId.DB,
    text: "Рекурсивті CTE-нің екі бөлігі бір-бірімен қандай оператор арқылы біріктіріледі?",
    options: [
      {
        id: "db-t08-b54-op1",
        text: "UNION немесе UNION ALL"
      },
      {
        id: "db-t08-b54-op2",
        text: "INNER JOIN"
      },
      {
        id: "db-t08-b54-op3",
        text: "INTERSECT"
      },
      {
        id: "db-t08-b54-op4",
        text: "EXCEPT"
      },
      {
        id: "db-t08-b54-op5",
        text: "Жаңа бастапқы кілт"
      },
      {
        id: "db-t08-b54-op6",
        text: "Орташа жалақының мөлшерін есептейді"
      },
      {
        id: "db-t08-b54-op7",
        text: "Жоқ, HAVING ішінде тек қарапайым шарттар ғана жазылады"
      },
      {
        id: "db-t08-b54-op8",
        text: "Барлық тауарларды табады"
      }
    ],
    correctOptionIds: [
      "db-t08-b54-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b55",
    subjectId: SubjectId.DB,
    text: "Рекурсивті CTE дерекқорда не үшін жиі қолданылады?",
    options: [
      {
        id: "db-t08-b55-op1",
        text: "Иерархиялық құрылымдарды (мысалы, ағаш тәрізді қызметкерлер тізімін, графтарды) өңдеу үшін"
      },
      {
        id: "db-t08-b55-op2",
        text: "Деректерді жылдам өшіру үшін"
      },
      {
        id: "db-t08-b55-op3",
        text: "Кестелердің сақтық көшірмесін жасау үшін"
      },
      {
        id: "db-t08-b55-op4",
        text: "Бастапқы кілттерді автоматты түрде өзгерту үшін"
      },
      {
        id: "db-t08-b55-op5",
        text: "Әр студенттің жеке ең жоғары балын табады"
      },
      {
        id: "db-t08-b55-op6",
        text: "NULL"
      },
      {
        id: "db-t08-b55-op7",
        text: "Байланысқан сұраныс"
      },
      {
        id: "db-t08-b55-op8",
        text: "Сұраныстың жылдамдығын төмендетеді"
      }
    ],
    correctOptionIds: [
      "db-t08-b55-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3c50caa4-810a-4be3-8801-b43977b30bfb",
    subjectId: SubjectId.DB,
    text: "SQL-де байланысқан ішкі сұраныстың әрбір қадамын сыртқы кестенің ағымдағы жолымен салыстыру үшін сыртқы кестеге не беріледі?",
    options: [
      {
        id: "a8ea6652-c0b5-48d9-8493-b4ecdcb5da1b",
        text: "Алиас (уақытша атау)"
      },
      {
        id: "2549b8c5-3cbd-405e-bf13-f206dded6e0e",
        text: "Индекс"
      },
      {
        id: "da94978f-05dd-41ac-8205-957f26e492ff",
        text: "Жаңа бастапқы кілт"
      },
      {
        id: "c442bb77-b01f-471f-b46c-b634b2233bf9",
        text: "Транзакция ID-і"
      },
      {
        id: "a852fae4-9f61-42ee-8656-8572bf6f0282",
        text: "Тек рекурсивті CTE ішінде ғана рұқсат етіледі"
      },
      {
        id: "a4161bda-6ec2-4f23-80ea-2ffbecad1344",
        text: "Деректердің қауіпсіздік ережелерін орнату"
      },
      {
        id: "d2456876-ed89-4fa4-a60b-ff5e75ff035a",
        text: "Иә, тек SELECT 1 жазылуы тиіс, әйтпесе қате шығады"
      },
      {
        id: "e0621d9c-3348-442d-bce1-eb4141ddcff7",
        text: "Қателер журналы"
      }
    ],
    correctOptionIds: [
      "a8ea6652-c0b5-48d9-8493-b4ecdcb5da1b"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "cd1905c6-883d-48e7-b9d7-e45683c0ea46",
    subjectId: SubjectId.DB,
    text: "SELECT * FROM Products p WHERE Price > (SELECT Price FROM Products WHERE Category = p.Category ORDER BY Price DESC LIMIT 1 OFFSET 1); сұранысы не істейді?",
    options: [
      {
        id: "699b2ab2-4277-4665-bdbd-2d65a32bfda8",
        text: "Әр санаттағы екінші ең қымбат тауардан арзан тауарларды табады"
      },
      {
        id: "e686f1bc-98cd-44d3-98e0-388ae4916e17",
        text: "Әр санаттағы ең қымбат тауарларды табады"
      },
      {
        id: "47199462-7ee0-44d3-b600-236113607f79",
        text: "Тауарларды бағасы бойынша өсу ретімен сұрыптайды"
      },
      {
        id: "de3fb41a-f5be-401d-8d9a-1df2c72423c9",
        text: "Ешқандай санатқа жатпайтын тауарларды табады"
      },
      {
        id: "4b2ff589-043d-4d1c-9e16-8928172631c9",
        text: "Тізімде тек NULL емес мәндер бар екенін білдіреді"
      },
      {
        id: "a658f459-0be8-4d04-88b7-ed8546ac18ef",
        text: "NOT IN"
      },
      {
        id: "a7c6be4c-93b9-40ab-aa34-0846dff7dd1e",
        text: "Бұл сұраныста JOIN қолданылуы тиіс болғандықтан"
      },
      {
        id: "069f069e-d528-4fde-9f3f-37b964daf754",
        text: "Белгілі бір шартқа сәйкес келетін тәуелді объектілері бар жолдарды басқа кестедегі мәндер арқылы тауып өшіру"
      }
    ],
    correctOptionIds: [
      "699b2ab2-4277-4665-bdbd-2d65a32bfda8"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b56",
    subjectId: SubjectId.DB,
    text: "Ішкі сұраныстар қай сұраныс түрінің ішінде ең көп қолданылады?",
    options: [
      {
        id: "db-t08-b56-op1",
        text: "SELECT сұраныстарында"
      },
      {
        id: "db-t08-b56-op2",
        text: "INSERT сұраныстарында"
      },
      {
        id: "db-t08-b56-op3",
        text: "CREATE сұраныстарында"
      },
      {
        id: "db-t08-b56-op4",
        text: "DROP сұраныстарында"
      },
      {
        id: "db-t08-b56-op5",
        text: "FALSE қайтарады, ешқандай жол сәйкес келмейді"
      },
      {
        id: "db-t08-b56-op6",
        text: "Қателік (Error) шығарады"
      },
      {
        id: "db-t08-b56-op7",
        text: "Иә, тек SELECT 1 жазылуы тиіс, әйтпесе қате шығады"
      },
      {
        id: "db-t08-b56-op8",
        text: "Сұраныс барлық нәтижелерді қайтарады"
      }
    ],
    correctOptionIds: [
      "db-t08-b56-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b57",
    subjectId: SubjectId.DB,
    text: "IN операторының ішіндегі тізімде NULL болса, мысалы: 5 IN (1, 2, NULL), нәтижесі қандай болады?",
    options: [
      {
        id: "db-t08-b57-op1",
        text: "UNKNOWN (немесе NULL)"
      },
      {
        id: "db-t08-b57-op2",
        text: "FALSE"
      },
      {
        id: "db-t08-b57-op3",
        text: "TRUE"
      },
      {
        id: "db-t08-b57-op4",
        text: "Қателік туындайды"
      },
      {
        id: "db-t08-b57-op5",
        text: "Ішкі сұраныс және сыртқы сұраныс"
      },
      {
        id: "db-t08-b57-op6",
        text: "REPEAT"
      },
      {
        id: "db-t08-b57-op7",
        text: "IN операторы қауіпсіз"
      },
      {
        id: "db-t08-b57-op8",
        text: "Кестенің өз-өзіне қосылуын"
      }
    ],
    correctOptionIds: [
      "db-t08-b57-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b58",
    subjectId: SubjectId.DB,
    text: "NOT IN операторының тізімінде NULL болса, мысалы: 5 NOT IN (1, 2, NULL), нәтижесі қандай болады?",
    options: [
      {
        id: "db-t08-b58-op1",
        text: "UNKNOWN (ешқандай жол таңдалмайды)"
      },
      {
        id: "db-t08-b58-op2",
        text: "TRUE"
      },
      {
        id: "db-t08-b58-op3",
        text: "FALSE"
      },
      {
        id: "db-t08-b58-op4",
        text: "Нәтижесі әрқашан TRUE болады"
      },
      {
        id: "db-t08-b58-op5",
        text: "EXISTS алғашқы сәйкестікті тапқан бойда іздеуді тоқтатады (short-circuit), ал IN толық тізімді тексереді"
      },
      {
        id: "db-t08-b58-op6",
        text: "Уақытша сұраныс"
      },
      {
        id: "db-t08-b58-op7",
        text: "Тек мәтіндік деректер үшін рұқсат етіледі"
      },
      {
        id: "db-t08-b58-op8",
        text: "Тек сандар үшін рұқсат етіледі"
      }
    ],
    correctOptionIds: [
      "db-t08-b58-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b59",
    subjectId: SubjectId.DB,
    text: "SQL стандарты бойынша ішкі сұраныстың ішінде ДҚБЖ сыртқы сұраныстың бағандарын көре алады ма?",
    options: [
      {
        id: "db-t08-b59-op1",
        text: "Иә, ішкі сұраныстан сыртқы сұраныс бағандары көрінеді (scope visibility)"
      },
      {
        id: "db-t08-b59-op2",
        text: "Жоқ, ішкі сұраныс сұраныстың сыртындағы бағандарды тікелей көрмейді"
      },
      {
        id: "db-t08-b59-op3",
        text: "Тек егер сыртқы кестеде индекс болса ғана көрінеді"
      },
      {
        id: "db-t08-b59-op4",
        text: "Тек скалярлық емес сұраныстарда көрінеді"
      },
      {
        id: "db-t08-b59-op5",
        text: "Тек FROM ішіндегі сұраныстарда ғана рұқсат етілген"
      },
      {
        id: "db-t08-b59-op6",
        text: "Ол бірнеше бағанды қайтара алады"
      },
      {
        id: "db-t08-b59-op7",
        text: "Тек 100 деңгеймен шектеледі"
      },
      {
        id: "db-t08-b59-op8",
        text: "Иә, кез келген уақытта қолдануға рұқсат етілген"
      }
    ],
    correctOptionIds: [
      "db-t08-b59-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b60",
    subjectId: SubjectId.DB,
    text: "Сыртқы сұраныстан ішкі сұраныстың ішіндегі бағандарды тікелей SELECT-те қолдануға болады ма?",
    options: [
      {
        id: "db-t08-b60-op1",
        text: "Жоқ, сыртқы сұранысқа ішкі сұраныстың бағандары тікелей көрінбейді"
      },
      {
        id: "db-t08-b60-op2",
        text: "Иә, кез келген уақытта қолдануға рұқсат етілген"
      },
      {
        id: "db-t08-b60-op3",
        text: "Тек ішкі сұраныс байланысқан болса ғана болады"
      },
      {
        id: "db-t08-b60-op4",
        text: "Тек скалярлық ішкі сұраныстарда болады"
      },
      {
        id: "db-t08-b60-op5",
        text: "Ешқандай қате туындамайды"
      },
      {
        id: "db-t08-b60-op6",
        text: "Common Table Expression"
      },
      {
        id: "db-t08-b60-op7",
        text: "Ол тек бір рет есептелетіндіктен"
      },
      {
        id: "db-t08-b60-op8",
        text: "NULL"
      }
    ],
    correctOptionIds: [
      "db-t08-b60-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "95522e0c-f6a0-46e5-8bad-3155e622ccc0",
    subjectId: SubjectId.DB,
    text: "SELECT * FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE DeptID = 5); сұранысы неліктен қате тудыруы мүмкін?",
    options: [
      {
        id: "8d1fd96e-efae-46eb-98f3-7b17378ba51f",
        text: "Егер 5-ші департаментте бірден көп қызметкер жұмыс істесе, скалярлық емес салыстыру қатесін береді"
      },
      {
        id: "2c21244d-e753-4658-89e9-df161fccff24",
        text: "Орташа жалақы дұрыс есептелмегендіктен"
      },
      {
        id: "a632ded1-8fba-4ad2-b1a6-8d46ee44bfb8",
        text: "Бұл сұраныста JOIN қолданылуы тиіс болғандықтан"
      },
      {
        id: "b23ff06d-874c-4538-b8a3-cac56a137676",
        text: "WHERE-ден кейін Salary-ді салыстыруға болмайтындықтан"
      },
      {
        id: "8ab8ad0f-268c-4f96-a7a2-b1922c6e162f",
        text: "Тек INNER JOIN қолдануға рұқсат етіледі"
      },
      {
        id: "7109d278-81d8-4ea9-ae61-0d5ce3b8503f",
        text: "Бағасы орташа шамаға тең тауарларды табады"
      },
      {
        id: "0bca8ef0-0ed7-4cbe-9dc2-49a4896572fd",
        text: "NULL береді"
      },
      {
        id: "010447f3-ada4-474f-b326-08c1e7c73d31",
        text: "Ішкі сұраныс қайтарған мәндердің ең болмағанда біреуімен шарт орындалса true қайтарады"
      }
    ],
    correctOptionIds: [
      "8d1fd96e-efae-46eb-98f3-7b17378ba51f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "632f6cf0-8b2c-4f58-93e0-b05aa1acb87b",
    subjectId: SubjectId.DB,
    text: "Жоғарыдағы Salary > (SELECT Salary ...) қатесін болдырмау үшін салыстыру операторынан кейін қандай сөз жазылуы керек (егер барлық қызметкерден көп болсын десек)?",
    options: [
      {
        id: "9d06304f-0036-4b5e-ab4f-af2af4f1b110",
        text: "ALL"
      },
      {
        id: "0529690b-d32e-4f70-82ae-f45e07df3f73",
        text: "ANY"
      },
      {
        id: "bb93f618-ecdd-4067-a90f-c82730a174f4",
        text: "EXISTS"
      },
      {
        id: "02f9642c-9dca-4fdc-9dcd-b1e738348ffc",
        text: "IN"
      },
      {
        id: "d3a28423-28bd-4662-a017-0b7e86e50a1e",
        text: "TRUE қайтарады, барлық жолдар таңдалады"
      },
      {
        id: "d6191c5f-f334-4409-8b24-1605a968a432",
        text: "Орташа жалақы есептелмегендіктен"
      },
      {
        id: "1795249f-a38d-4381-800a-7754838370a5",
        text: "O(log N)"
      },
      {
        id: "38077257-64e7-40e9-a00e-cc0493e8b01f",
        text: "Қателік туындамауы үшін кестелердің бірін жою керек"
      }
    ],
    correctOptionIds: [
      "9d06304f-0036-4b5e-ab4f-af2af4f1b110"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e5152910-583f-495e-ae2d-cfa0c7eb517e",
    subjectId: SubjectId.DB,
    text: "Жоғарыдағы Salary > (SELECT Salary ...) қатесін болдырмау үшін салыстыру операторынан кейін қандай сөз жазылуы керек (егер кем дегенде біреуінен көп болсын десек)?",
    options: [
      {
        id: "d261572c-1bc6-4e4b-9ee3-316f04225ad2",
        text: "ANY (немесе SOME)"
      },
      {
        id: "1ffb4ed1-72fa-4dec-a1f4-76535f404969",
        text: "ALL"
      },
      {
        id: "36569571-cc0f-415d-b826-62ba9fb4dcd4",
        text: "EXISTS"
      },
      {
        id: "6a62d5e1-0313-4168-8fa2-1feb8ade7436",
        text: "IN"
      },
      {
        id: "f727879c-a112-4ff2-b5e8-951f382d2d41",
        text: "Иә, тек нақты бағандардың аттары жазылуы тиіс"
      },
      {
        id: "a65fafdd-2ecf-476a-95de-d0bbcd7df601",
        text: "Барлық қызметкерлердің жалақысын IT департаментінің бюджетіне теңейді"
      },
      {
        id: "f70d1ec8-660c-47b1-beda-a586a903274f",
        text: "EXISTS операторы қауіпсіз, өйткені ол үш мәнді логикаға (three-valued logic) тәуелді емес"
      },
      {
        id: "d620b9e2-79dd-4754-8bb0-fdd64d3b49c5",
        text: "Тек бірінші жолды өшіреді"
      }
    ],
    correctOptionIds: [
      "d261572c-1bc6-4e4b-9ee3-316f04225ad2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b61",
    subjectId: SubjectId.DB,
    text: "Ішкі сұраныстағы бағанға балама атау (alias) беру сыртқы сұраныста қолданғанда қалай әсер етеді?",
    options: [
      {
        id: "db-t08-b61-op1",
        text: "Егер ішкі сұраныс FROM-да болса, сыртқы сұраныс сол балама атауды қолданып бағанға қол жеткізеді"
      },
      {
        id: "db-t08-b61-op2",
        text: "Сыртқы сұранысқа ешқандай әсері жоқ"
      },
      {
        id: "db-t08-b61-op3",
        text: "Сұраныстың жылдамдығын төмендетеді"
      },
      {
        id: "db-t08-b61-op4",
        text: "Қате тудырады"
      },
      {
        id: "db-t08-b61-op5",
        text: "Бос мәтін"
      },
      {
        id: "db-t08-b61-op6",
        text: "Тек бірінші жолды өшіреді"
      },
      {
        id: "db-t08-b61-op7",
        text: "Кесте құрылымын автоматты түрде өзгерту"
      },
      {
        id: "db-t08-b61-op8",
        text: "Тек олардың аттары бірдей болса ғана рұқсат"
      }
    ],
    correctOptionIds: [
      "db-t08-b61-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b62",
    subjectId: SubjectId.DB,
    text: "SQL-де EXISTS операторы орындалғанда деректердің өзі қайтарылады ма?",
    options: [
      {
        id: "db-t08-b62-op1",
        text: "Жоқ, тек логикалық TRUE немесе FALSE мәні ғана қайтарылады"
      },
      {
        id: "db-t08-b62-op2",
        text: "Иә, ішкі сұраныстың барлық жолдары сыртқы сұранысқа беріледі"
      },
      {
        id: "db-t08-b62-op3",
        text: "Тек бағандардың құрылымы қайтарылады"
      },
      {
        id: "db-t08-b62-op4",
        text: "Тек бастапқы кілттер ғана қайтарылады"
      },
      {
        id: "db-t08-b62-op5",
        text: "Тек JOIN операторымен қолданғанда міндетті"
      },
      {
        id: "db-t08-b62-op6",
        text: "DECLARE"
      },
      {
        id: "db-t08-b62-op7",
        text: "Тек ішкі сұраныс байланысқан болса ғана болады"
      },
      {
        id: "db-t08-b62-op8",
        text: "Соңғы баған алдыңғыларын алмастырады"
      }
    ],
    correctOptionIds: [
      "db-t08-b62-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b63",
    subjectId: SubjectId.DB,
    text: "NOT EXISTS операторы орындалғанда, егер ішкі сұраныстан бос жиын оралса, нәтижесі қандай болады?",
    options: [
      {
        id: "db-t08-b63-op1",
        text: "TRUE"
      },
      {
        id: "db-t08-b63-op2",
        text: "FALSE"
      },
      {
        id: "db-t08-b63-op3",
        text: "NULL"
      },
      {
        id: "db-t08-b63-op4",
        text: "UNKNOWN"
      },
      {
        id: "db-t08-b63-op5",
        text: "Сыртқы сұраныстың әрбір жолына тәуелді және сыртқы кестенің бағандарын сілтеме ретінде қолданатын ішкі сұраныс"
      },
      {
        id: "db-t08-b63-op6",
        text: "Жоқ, кез келген ДҚБЖ шексіз тереңдікті қолдайды"
      },
      {
        id: "db-t08-b63-op7",
        text: "Анкерлік мүше (Anchor member) және рекурсивтік мүше (Recursive member)"
      },
      {
        id: "db-t08-b63-op8",
        text: "Тек DDL деңгейінде жұмыс істейтін сұраныс"
      }
    ],
    correctOptionIds: [
      "db-t08-b63-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b64",
    subjectId: SubjectId.DB,
    text: "SELECT * FROM Products WHERE Price >= ALL (SELECT Price FROM Products); сұранысы не істейді?",
    options: [
      {
        id: "db-t08-b64-op1",
        text: "Ең қымбат тауарларды (немесе бірнешеу болса, солардың бәрін) табады"
      },
      {
        id: "db-t08-b64-op2",
        text: "Ең арзан тауарды табады"
      },
      {
        id: "db-t08-b64-op3",
        text: "Барлық тауарларды табады"
      },
      {
        id: "db-t08-b64-op4",
        text: "Бағасы орташа шамаға тең тауарларды табады"
      },
      {
        id: "db-t08-b64-op5",
        text: "Ішкі сұраныс қайтарған барлық мәндермен шарт орындалса ғана true қайтарады"
      },
      {
        id: "db-t08-b64-op6",
        text: "Сұраныс бос нәтиже қайтарады, өйткені NULL-мен салыстыру белгісіз мәнді береді"
      },
      {
        id: "db-t08-b64-op7",
        text: "> ANY"
      },
      {
        id: "db-t08-b64-op8",
        text: "Тек бірінші мәнмен салыстырады"
      }
    ],
    correctOptionIds: [
      "db-t08-b64-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b65",
    subjectId: SubjectId.DB,
    text: "SELECT * FROM Products WHERE Price <= ALL (SELECT Price FROM Products); сұранысы не істейді?",
    options: [
      {
        id: "db-t08-b65-op1",
        text: "Ең арзан тауарларды (немесе бірнешеу болса, солардың бәрін) табады"
      },
      {
        id: "db-t08-b65-op2",
        text: "Ең қымбат тауарды табады"
      },
      {
        id: "db-t08-b65-op3",
        text: "Тауарлардың бағасын сұрыптайды"
      },
      {
        id: "db-t08-b65-op4",
        text: "Бос нәтиже қайтарады"
      },
      {
        id: "db-t08-b65-op5",
        text: "Ол ешқандай ережеге бағынбайды"
      },
      {
        id: "db-t08-b65-op6",
        text: "Тәуелсіз (Non-correlated) ішкі сұраныс"
      },
      {
        id: "db-t08-b65-op7",
        text: "Тек 100 деңгеймен шектеледі"
      },
      {
        id: "db-t08-b65-op8",
        text: "Екеуі де бірдей қауіпті"
      }
    ],
    correctOptionIds: [
      "db-t08-b65-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f15fc980-ab5a-4f54-b779-1d5c300929f4",
    subjectId: SubjectId.DB,
    text: "IN операторын (= ANY) байланыспаған қарапайым ішкі сұраныспен орындағанда, ДҚБЖ оны ішкі сұраныстың бірегей мәндер жиыны ретінде қалай қарастырады?",
    options: [
      {
        id: "6bd33bee-da83-4fbb-b4fc-fac8150078fc",
        text: "Хэш-кесте (Hash Table) немесе индекс арқылы іздеуге оңтайландырады"
      },
      {
        id: "6f81c014-ff22-47df-ab1c-5366b1eb1433",
        text: "Әр жол үшін сызықтық іздеу жасайды"
      },
      {
        id: "8953d22b-3ee3-42d1-bcee-903293ab10c8",
        text: "Автоматты түрде транзакцияны бұғаттайды"
      },
      {
        id: "69fcfbc0-182b-450d-8fa7-1e62c604c14f",
        text: "Оны тек рекурсивті түрде орындайды"
      },
      {
        id: "4c4a5d90-cb0e-4ef9-9951-ebb6b06590a1",
        text: "NULL"
      },
      {
        id: "c3a859f6-684c-4328-8654-788a2ebc74c8",
        text: "Иә, тек SELECT * жазылуы тиіс"
      },
      {
        id: "f94dcd00-f5da-4692-9005-25734bed5e73",
        text: "ANY"
      },
      {
        id: "494465e9-1023-457b-96e4-4a3db04239d7",
        text: "Тапсырмалары жоқ жобаларды жояды"
      }
    ],
    correctOptionIds: [
      "6bd33bee-da83-4fbb-b4fc-fac8150078fc"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b66",
    subjectId: SubjectId.DB,
    text: "SQL-де ішкі сұраныстарды қолданудың негізгі мақсаты не?",
    options: [
      {
        id: "db-t08-b66-op1",
        text: "Бірнеше қадамдық логиканы бір сұраныс ішінде шешу және сұранысты икемді ету"
      },
      {
        id: "db-t08-b66-op2",
        text: "Деректердің қауіпсіздік ережелерін орнату"
      },
      {
        id: "db-t08-b66-op3",
        text: "Дерекқордың файлдық өлшемін кішірейту"
      },
      {
        id: "db-t08-b66-op4",
        text: "Кесте құрылымын автоматты түрде өзгерту"
      },
      {
        id: "db-t08-b66-op5",
        text: "Ішкі сұраныстардың қателікке ұшырап тоқтауы"
      },
      {
        id: "db-t08-b66-op6",
        text: "INSERT сұраныстарында"
      },
      {
        id: "db-t08-b66-op7",
        text: "Correlated Subquery (байланысқан сұраныс)"
      },
      {
        id: "db-t08-b66-op8",
        text: "Хэш-кесте (Hash Table) немесе индекс арқылы іздеуге оңтайландырады"
      }
    ],
    correctOptionIds: [
      "db-t08-b66-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ac116591-526a-48c0-8129-8298bb57773a",
    subjectId: SubjectId.DB,
    text: "UPDATE Employees SET Salary = Salary * 1.1 WHERE DeptID IN (SELECT ID FROM Departments WHERE Name = 'IT'); сұранысы не істейді?",
    options: [
      {
        id: "49690d44-bc1a-4993-a792-189f16e7a451",
        text: "IT департаментіндегі қызметкерлердің жалақысын 10%-ға өсіреді"
      },
      {
        id: "738ad0d6-8e70-4579-89f4-d8ceb42cad1b",
        text: "IT департаментіндегі қызметкерлердің жалақысын 1.1 теңгеге өсіреді"
      },
      {
        id: "a1d119bd-92ab-4119-85bc-ab4f5cd41cc0",
        text: "IT департаментін жабады"
      },
      {
        id: "1b8615d4-ee5b-48d9-985b-f7ac9e9e9be3",
        text: "Барлық қызметкерлердің жалақысын IT департаментінің бюджетіне теңейді"
      },
      {
        id: "8e653649-4028-4baa-9473-28395b7211d4",
        text: "Ешқашан орындалмайды"
      },
      {
        id: "498c8abf-7021-4cf7-b3b6-80dc80fa6a2e",
        text: "Транзакциялау"
      },
      {
        id: "66ad58d5-c6ec-4827-9c22-238a40feb192",
        text: "Екеуі де NULL мәндерді елемейді"
      },
      {
        id: "149aeb9e-dfd3-4d02-aa1c-75e8acd18461",
        text: "Қате тудырады"
      }
    ],
    correctOptionIds: [
      "49690d44-bc1a-4993-a792-189f16e7a451"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t08-b67",
    subjectId: SubjectId.DB,
    text: "DELETE FROM Tasks WHERE ProjectID NOT IN (SELECT ID FROM Projects); сұранысы не істейді?",
    options: [
      {
        id: "db-t08-b67-op1",
        text: "Қолданыстағы жобаларға тиесілі емес барлық тапсырмаларды жояды"
      },
      {
        id: "db-t08-b67-op2",
        text: "Барлық жобаларды жояды"
      },
      {
        id: "db-t08-b67-op3",
        text: "Тапсырмалары жоқ жобаларды жояды"
      },
      {
        id: "db-t08-b67-op4",
        text: "Жаңа тапсырмалар қосады"
      },
      {
        id: "db-t08-b67-op5",
        text: "Барлық тауарларды табады"
      },
      {
        id: "db-t08-b67-op6",
        text: "NOT IN"
      },
      {
        id: "db-t08-b67-op7",
        text: "Орташа жалақының мөлшерін есептейді"
      },
      {
        id: "db-t08-b67-op8",
        text: "UNKNOWN (немесе NULL)"
      }
    ],
    correctOptionIds: [
      "db-t08-b67-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c114f51f-aa41-4161-933b-9db4f5345fa8",
    subjectId: SubjectId.DB,
    text: "FROM сөйлеміндегі ішкі сұраныстың (Derived Table) ішінде басқа кестелермен JOIN жасауға болады ма?",
    options: [
      {
        id: "2537510b-38c5-461e-82da-2482992cda2a",
        text: "Иә, оны кез келген кәдімгі кесте сияқты қосуға және басқа кестелермен JOIN жасауға болады"
      },
      {
        id: "281a1625-a99a-48b3-99c6-233b2ac3ff7a",
        text: "Жоқ, Derived Table ішінде JOIN қолдануға мүлдем тыйым салынған"
      },
      {
        id: "81dbf5ee-6f90-4948-824a-159971d0aef7",
        text: "Тек INNER JOIN қолдануға рұқсат етіледі"
      },
      {
        id: "ff1e7d62-3dfd-4cb0-93f3-15d8ec421192",
        text: "Тек RIGHT JOIN қолдануға рұқсат етіледі"
      },
      {
        id: "62c8c70d-c021-4c83-894d-0beb642e8295",
        text: "Қате шығарады, себебі скалярлық сұранысты SELECT-те қолдануға болмайды"
      },
      {
        id: "1d6fc7b4-f47c-45d9-a0d6-86f1bef431db",
        text: "Сәйкес бағандарға индекстер (indexes) құру немесе оны JOIN-мен алмастыру"
      },
      {
        id: "8a364bf5-f323-4c37-a05b-20b02cd4f2ea",
        text: "Жобада Salary бағаны жоқ болса"
      },
      {
        id: "a0514263-d09f-44ea-a0f0-f9f39678a5b1",
        text: "Автоматты түрде транзакцияны бұғаттайды"
      }
    ],
    correctOptionIds: [
      "2537510b-38c5-461e-82da-2482992cda2a"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "58769020-ff0e-4d2e-8fd2-9f03d10c2737",
    subjectId: SubjectId.DB,
    text: "Байланысқан ішкі сұранысты жазу кезінде сыртқы және ішкі кестелердің бағандарының аттары бірдей болса не істеу керек?",
    options: [
      {
        id: "61afa854-d6d9-46b5-a55e-d58bd15cecd4",
        text: "Сыртқы кестеге алиас (атау) беріп, бағанды сол алиас арқылы нақты көрсету керек (мысалы, outer_table.column_name)"
      },
      {
        id: "2ed91874-af7c-487c-90dd-bb5265978e58",
        text: "Бағанның деректер типін өзгерту керек"
      },
      {
        id: "3c90a618-9a06-4416-893a-9b4872a67e12",
        text: "ДҚБЖ автоматты түрде реттейтіндіктен ештеңе істеу керек емес"
      },
      {
        id: "6e3dc465-1595-4a92-a65e-b2f831d1f2b3",
        text: "Қателік туындамауы үшін кестелердің бірін жою керек"
      },
      {
        id: "28777bed-ca1c-4ca0-ae91-ef27096fd517",
        text: "Екеуінің орындалу жылдамдығы бірдей"
      },
      {
        id: "8e80fbb8-4a31-4481-8a39-93c6ac2162d6",
        text: "Дерекқордың физикалық индексі"
      },
      {
        id: "44237def-4f76-4b23-b65d-e783713060ed",
        text: "NOT IN операторының"
      },
      {
        id: "09257836-0a68-4612-bba8-b634922a8675",
        text: "Жобада Salary бағаны жоқ болса"
      }
    ],
    correctOptionIds: [
      "61afa854-d6d9-46b5-a55e-d58bd15cecd4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "044b59e9-4650-4f5c-907f-21389addd9a6",
    subjectId: SubjectId.DB,
    text: "Скалярлық ішкі сұраныс (Scalar Subquery) SQL-де салыстыру операторының (например, =, <, >) қай жағында орналаса алады?",
    options: [
      {
        id: "164090af-41ad-438f-8298-d4091e000279",
        text: "Оң жағында да, сол жағында да орналаса алады"
      },
      {
        id: "81509000-c94b-4626-b5b7-b75a1d741c9d",
        text: "Тек оң жағында ғана орналасуы тиіс"
      },
      {
        id: "ffcaf1a1-a138-440e-b85d-87d36950ae7a",
        text: "Тек сол жағында ғана орналасуы тиіс"
      },
      {
        id: "ac1748a6-1de6-4e81-95bc-2169c03ac803",
        text: "Салыстыру операторларымен бірге қолданылуы мүмкен емес"
      },
      {
        id: "a60bbcea-f623-4c72-a338-9c22eb893f9d",
        text: "JOIN тиімдірек, себебі ДҚБЖ оны оңтайлырақ жоспарлайды"
      },
      {
        id: "bb55cc17-36e2-4092-bf1f-b3ed8388b44a",
        text: "Әр студенттің жеке ең жоғары балын табады"
      },
      {
        id: "a0d614a0-2454-4f33-9a38-129974be02ea",
        text: "Кестелердің сақтық көшірмесін жасау үшін"
      },
      {
        id: "3893ecd4-beb8-4f68-b429-454372c9d054",
        text: "Жоқ, кез келген ДҚБЖ шексіз тереңдікті қолдайды"
      }
    ],
    correctOptionIds: [
      "164090af-41ad-438f-8298-d4091e000279"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2ec93219-d426-4117-8cca-e5192d452144",
    subjectId: SubjectId.DB,
    text: "SELECT * FROM Employees WHERE Salary > (SELECT Salary FROM Employees WHERE Name = 'John'); сұранысында неліктен қате туындауы мүмкін?",
    options: [
      {
        id: "1606f1a9-a3b3-4f88-a7bc-ba331f0ecaf3",
        text: "Егер 'John' есімді қызметкерлер саны бірден көп болса, скалярлық салыстыру қатесін береді"
      },
      {
        id: "e837f5fa-fce5-480c-8771-5a9facd3831a",
        text: "Жобада Salary бағаны жоқ болса"
      },
      {
        id: "553f6575-334b-46d3-a1b0-d05ba66798b7",
        text: "Орташа жалақы есептелмегендіктен"
      },
      {
        id: "3f6e0637-5c78-4939-89c1-a26112dabb71",
        text: "Ешқандай қате туындамайды"
      },
      {
        id: "46df3020-e07d-4c06-8acf-9229e7f61737",
        text: "Ішкі сұраныс тек бір жол қайтаруы тиіс"
      },
      {
        id: "d652b881-e05d-41c5-abc3-88a8fb24d473",
        text: "Әрбір студент жолының жанында барлық тесттердің ең жоғары балын қайталайды"
      },
      {
        id: "408ceae8-ba6d-4b8d-8b19-69a68f284df1",
        text: "Тәуелсіз немесе қарапайым ішкі сұраныс (Non-correlated subquery)"
      },
      {
        id: "0736f284-fa97-46b6-9df0-5c6d01d9004d",
        text: "Тапсырмалары жоқ жобаларды жояды"
      }
    ],
    correctOptionIds: [
      "1606f1a9-a3b3-4f88-a7bc-ba331f0ecaf3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b7d54693-7b67-4348-9456-3ca548d7b55f",
    subjectId: SubjectId.DB,
    text: "EXISTS операторының орнына IN операторын қолданғанда, олардың қайсысы NULL мәндері бар кестелерде қауіпсіз жұмыс істейді?",
    options: [
      {
        id: "3a5d77e1-18f2-4ef9-9c40-0a8f6de32430",
        text: "EXISTS операторы қауіпсіз, өйткені ол үш мәнді логикаға (three-valued logic) тәуелді емес"
      },
      {
        id: "fa190eb4-bf27-456a-93cc-e79d12549416",
        text: "IN операторы қауіпсіз"
      },
      {
        id: "f736318d-8397-48c9-b522-fbd31ff300a9",
        text: "Екеуі де бірдей қауіпті"
      },
      {
        id: "b7a6f91d-1045-48df-a62d-851e463bff46",
        text: "Екеуі де NULL мәндерді елемейді"
      },
      {
        id: "36ab91d4-cf37-4043-ab65-db7995256da7",
        text: "CREATE сұраныстарында"
      },
      {
        id: "99ed4213-99ca-42d8-a011-395f862f54fb",
        text: "Оны тек рекурсивті түрде орындайды"
      },
      {
        id: "4d14d9b2-e0e2-415a-880f-3bc93934c68f",
        text: "Нормализация"
      },
      {
        id: "cfafdd3a-239f-4ebc-ab4a-c376785f522f",
        text: "Тек бірінші баған ғана сақталады"
      }
    ],
    correctOptionIds: [
      "3a5d77e1-18f2-4ef9-9c40-0a8f6de32430"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "bcc50ab9-a47c-41b3-99c4-bce1570f8974",
    subjectId: SubjectId.DB,
    text: "Сыртқы сұраныс жойылғанда (DELETE), ішкі сұраныс сыртқы сұраныспен байланысқан болса, өшіру әрекеті қалай жүреді?",
    options: [
      {
        id: "a46ba307-74e9-4fc8-88fe-5eb9d532d292",
        text: "ДҚБЖ әрбір өшірілетін жол үшін ішкі сұранысты қайта орындап тексереді"
      },
      {
        id: "3f5b7e45-f500-49f0-83a6-7f2c5f8f8d3d",
        text: "Барлық жолдарды бірден өшіреді"
      },
      {
        id: "9326b86b-c7f8-457f-bc85-9bfb30712809",
        text: "Ішкі сұраныс орындалмай қалады"
      },
      {
        id: "553982c7-8e16-42d5-902a-43d6894d35b0",
        text: "Тек бірінші жолды өшіреді"
      },
      {
        id: "2dc375c3-3546-4e52-adea-fc431aaa37bd",
        text: "Тек DDL деңгейінде жұмыс істейтін сұраныс"
      },
      {
        id: "04f86694-f1fb-458b-8f60-4afae34b6999",
        text: "Уақытша кесте"
      },
      {
        id: "7aa24b69-c43b-4caa-9bdd-ef880248d778",
        text: "Кортеждік сұраныс"
      },
      {
        id: "0b8d6c6c-4ca4-46e0-b4c2-7dd5627428b6",
        text: "Ол тек бір баған және ең көп дегенде бір жол (жалғыз мән) қайтаруы керек"
      }
    ],
    correctOptionIds: [
      "a46ba307-74e9-4fc8-88fe-5eb9d532d292"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Ішкі және байланысқан SQL",
    difficulty: Difficulty.MEDIUM
  }
];
