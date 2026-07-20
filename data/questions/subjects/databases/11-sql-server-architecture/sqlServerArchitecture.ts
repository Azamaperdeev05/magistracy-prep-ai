import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// db / SQL Server архитектурасы
export const db11SqlServerArchitectureQuestions : Question[] = [
  {
    id: "f3194844-ef59-430a-a3e9-04e70736d91f",
    subjectId: SubjectId.DB,
    text: "SQL Server-де деректерді сақтаудың ең кіші физикалық бірлігі қалай аталады және оның өлшемі қандай?",
    options: [
      {
        id: "49e9c9c4-e5ef-4003-af34-13c6ea81ec0c",
        text: "Page (Бет), өлшемі 8 KB"
      },
      {
        id: "3994742b-6ff5-40b1-9c5b-26a9c7a18e4f",
        text: "Row (Жол), өлшемі 1 KB"
      },
      {
        id: "74d84dd5-e34d-4f59-9ab1-bf9c988553e2",
        text: "Extent (Экстент), өлшемі 64 KB"
      },
      {
        id: "7d599a60-f3fb-4deb-859e-6163086e9e0c",
        text: "Block (Блок), өлшемі 4 KB"
      },
      {
        id: "14d4f4b1-e34d-4e28-84a7-852c93f528d7",
        text: "Индекс файлы"
      },
      {
        id: "2807e95d-e8d2-4ed0-95ac-50ac15845a7e",
        text: "Оңтайландырғыштың процедураны алғаш рет орындағандағы параметр мәніне негіздеп орындалу жоспарын құруы және кейін басқа параметрлер үшін де сол жоспарды тиімсіз қолдануы"
      },
      {
        id: "966f077f-af01-454c-b62a-65a5d9429428",
        text: "Файл түрінде дискінің басқа жерінде сақталады"
      },
      {
        id: "dba72393-b874-4872-9afe-daa3f715fb0b",
        text: "Дерекқор файлдарын қорғайтын жүйелік кілт"
      }
    ],
    correctOptionIds: [
      "49e9c9c4-e5ef-4003-af34-13c6ea81ec0c"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.HARD
  },
  {
    id: "db-t11-b01",
    subjectId: SubjectId.DB,
    text: "SQL Server физикалық сәулетіндегі 8 байланысқан Page-ден тұратын бірлік қалай аталады?",
    options: [
      {
        id: "db-t11-b01-op1",
        text: "Extent (Экстент, 64 KB)"
      },
      {
        id: "db-t11-b01-op2",
        text: "Segment (Сегмент)"
      },
      {
        id: "db-t11-b01-op3",
        text: "Filegroup (Файлдар тобы)"
      },
      {
        id: "db-t11-b01-op4",
        text: "Transaction Log (Транзакциялар журналы)"
      },
      {
        id: "db-t11-b01-op5",
        text: "Жүйелік Master дерекқорына бөлініп жазылады"
      },
      {
        id: "db-t11-b01-op6",
        text: "TempDB деректер файлдарының санын процессор ядроларының санына сәйкестендіріп тең бөлу (әдетте 8 файлға дейін)"
      },
      {
        id: "db-t11-b01-op7",
        text: "Деректер кестеден өшіп қалуы мүмкін"
      },
      {
        id: "db-t11-b01-op8",
        text: "Тек TempDB дерекқоры үшін жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "db-t11-b01-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b02",
    subjectId: SubjectId.DB,
    text: "SQL Server дерекқорының логикалық құрылымына не жатады?",
    options: [
      {
        id: "db-t11-b02-op1",
        text: "Схемалар, кестелер, көріністер (views) және индекстер"
      },
      {
        id: "db-t11-b02-op2",
        text: ".mdf және .ldf физикалық файлдары"
      },
      {
        id: "db-t11-b02-op3",
        text: "Процессор мен жедел жады буферлері"
      },
      {
        id: "db-t11-b02-op4",
        text: "Дискілік файл топтары (filegroups)"
      },
      {
        id: "db-t11-b02-op5",
        text: "Сұраныстар тек бір ғана процессорлық ағынмен (параллельдіксіз) орындалады"
      },
      {
        id: "db-t11-b02-op6",
        text: "Дерекқордың сақтық көшірмесін сақтайтын орын"
      },
      {
        id: "db-t11-b02-op7",
        text: "Жаңа Clustered Index құру"
      },
      {
        id: "db-t11-b02-op8",
        text: "Кестелер мен индекстерді әртүрлі физикалық дискілерге орналастыру арқылы кіру/шығу (I/O) өнімділігін арттыру"
      }
    ],
    correctOptionIds: [
      "db-t11-b02-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "49536ba2-4b3e-483e-a7e8-83c4890e1b66",
    subjectId: SubjectId.DB,
    text: "SQL Server-де транзакцияларды қалпына келтіру үшін қолданылатын және барлық өзгерістер жазылатын файл қалай аталады?",
    options: [
      {
        id: "22a17321-63f9-4af2-a27e-7b1e367c01d4",
        text: "Transaction Log файл (.ldf)"
      },
      {
        id: "41d115f5-9b77-414a-b704-a87ecc7222d4",
        text: "Primary Data файл (.mdf)"
      },
      {
        id: "7dc8bc17-1d1b-47e8-8a54-37593fb35fef",
        text: "Secondary Data файл (.ndf)"
      },
      {
        id: "affb0878-7171-4a53-a428-665908cc0134",
        text: "Master Database файл (.master)"
      },
      {
        id: "f3fcd400-e366-4817-9d6e-ac14e36aee32",
        text: "Кластерленбеген индекс арқылы табылған жолдың басқа бағандарын алу үшін кластерленген индекс кілті арқылы негізгі кестеге жүгінгенде"
      },
      {
        id: "bcaf61e2-1fdd-4f27-9ff0-0c80aa20f4de",
        text: "Жүйе жадын тазарту процесі"
      },
      {
        id: "c59f0302-84c7-4bae-8bac-8e93389fd11f",
        text: "temp.кесте_аты"
      },
      {
        id: "80a53e2c-ead2-417e-9cc0-9c5611dcf284",
        text: "Деректерді дискіге тікелей жазу"
      }
    ],
    correctOptionIds: [
      "22a17321-63f9-4af2-a27e-7b1e367c01d4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b03",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі MDF файлының маңызы қандай?",
    options: [
      {
        id: "db-t11-b03-op1",
        text: "Ол бастапқы деректер файлы (Primary Data File) болып табылады және жүйелік ақпаратты, кестелерді сақтайды"
      },
      {
        id: "db-t11-b03-op2",
        text: "Транзакциялар журналы"
      },
      {
        id: "db-t11-b03-op3",
        text: "Қосымша деректер файлы"
      },
      {
        id: "db-t11-b03-op4",
        text: "Индектер файлы"
      },
      {
        id: "db-t11-b03-op5",
        text: "Журнал мүлдем өзгермейді"
      },
      {
        id: "db-t11-b03-op6",
        text: "TempDB дерекқорының жедел жадында және қажет болса дискісінде"
      },
      {
        id: "db-t11-b03-op7",
        text: "Кластерленген индекс бойынша жаңа жол енгізілгенде бетте бос орын жетіспегендіктен жаңа бет құрылып, деректер көшірілгенде"
      },
      {
        id: "db-t11-b03-op8",
        text: "Row (Жол), өлшемі 1 KB"
      }
    ],
    correctOptionIds: [
      "db-t11-b03-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b04",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі LDF файлының маңызы қандай?",
    options: [
      {
        id: "db-t11-b04-op1",
        text: "Транзакциялар журналы (Transaction Log File) – деректерді қалпына келтіру үшін барлық өзгерістерді жазады"
      },
      {
        id: "db-t11-b04-op2",
        text: "Бастапқы деректер файлы"
      },
      {
        id: "db-t11-b04-op3",
        text: "Индекс файлы"
      },
      {
        id: "db-t11-b04-op4",
        text: "Уақытша файл"
      },
      {
        id: "db-t11-b04-op5",
        text: "Индекстерді алдын ала оқу әдісі"
      },
      {
        id: "db-t11-b04-op6",
        text: "Экстент (Extent), көлемі 64 КБ"
      },
      {
        id: "db-t11-b04-op7",
        text: "Резервтік бет"
      },
      {
        id: "db-t11-b04-op8",
        text: "Heap кестесінің барлық деректер беттерін басынан аяғына дейін толық оқу (индекс жоқ болғанда)"
      }
    ],
    correctOptionIds: [
      "db-t11-b04-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b05",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі қосымша деректер файлдарының кеңейтілімі қандай болады?",
    options: [
      {
        id: "db-t11-b05-op1",
        text: ".ndf"
      },
      {
        id: "db-t11-b05-op2",
        text: ".mdf"
      },
      {
        id: "db-t11-b05-op3",
        text: ".ldf"
      },
      {
        id: "db-t11-b05-op4",
        text: ".txt"
      },
      {
        id: "db-t11-b05-op5",
        text: "Индексті өшіру"
      },
      {
        id: "db-t11-b05-op6",
        text: "Олар тек қана бір файл ішінде сақталады"
      },
      {
        id: "db-t11-b05-op7",
        text: "Кестелер мен индекстерді әртүрлі физикалық дискілерге орналастыру арқылы кіру/шығу (I/O) өнімділігін арттыру"
      },
      {
        id: "db-t11-b05-op8",
        text: "Кестедегі біріншілік кілтті іздеу"
      }
    ],
    correctOptionIds: [
      "db-t11-b05-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b06",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі Extent дегеніміз не?",
    options: [
      {
        id: "db-t11-b06-op1",
        text: "Көлемі 64 KB болатын 8 байланысқан Page жиынтығы"
      },
      {
        id: "db-t11-b06-op2",
        text: "Ең кіші сақтау беті"
      },
      {
        id: "db-t11-b06-op3",
        text: "Дерекқор файлының атауы"
      },
      {
        id: "db-t11-b06-op4",
        text: "Логикалық кесте"
      },
      {
        id: "db-t11-b06-op5",
        text: "Row-Overflow Data беттеріне ауыстырады және негізгі бетте оған сілтеме қалдырады"
      },
      {
        id: "db-t11-b06-op6",
        text: "Мүлдем өзгеріссіз қалады"
      },
      {
        id: "db-t11-b06-op7",
        text: "Индекстің физикалық бүлінгенін тексеру"
      },
      {
        id: "db-t11-b06-op8",
        text: "128 байт"
      }
    ],
    correctOptionIds: [
      "db-t11-b06-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b07",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі Extents түрлері қандай болады?",
    options: [
      {
        id: "db-t11-b07-op1",
        text: "Uniform (біркелкі) және Mixed (аралас) экстенттер"
      },
      {
        id: "db-t11-b07-op2",
        text: "Физикалық және логикалық"
      },
      {
        id: "db-t11-b07-op3",
        text: "Ішкі және сыртқы"
      },
      {
        id: "db-t11-b07-op4",
        text: "Сызықтық және квадраттық"
      },
      {
        id: "db-t11-b07-op5",
        text: "Индексті қайта құру уақытын анықтау үшін"
      },
      {
        id: "db-t11-b07-op6",
        text: "Кестелердің санын азайту"
      },
      {
        id: "db-t11-b07-op7",
        text: "Index Rebuild"
      },
      {
        id: "db-t11-b07-op8",
        text: "Жүйе жадын тазарту процесі"
      }
    ],
    correctOptionIds: [
      "db-t11-b07-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "24310597-fe79-4f73-8c8d-491f21696a9e",
    subjectId: SubjectId.DB,
    text: "SQL Server-де деректерді оқу және жазу процестерін жылдамдату үшін жадта қолданылатын буфер қалай аталады?",
    options: [
      {
        id: "331c815c-67f1-40cb-9964-4fb3bb106809",
        text: "Buffer Pool (Buffer Cache)"
      },
      {
        id: "2eb3d52b-5776-411e-b360-d0bf702119be",
        text: "Call Stack"
      },
      {
        id: "b00bcf88-7f14-44da-a780-4109e3920fe1",
        text: "Session memory"
      },
      {
        id: "8216106c-0f2f-4bf3-a287-ebd56fb51458",
        text: "Disk cache"
      },
      {
        id: "4e51d73e-b03f-495f-a6d6-2d36fa07847b",
        text: "Оңтайландырғыш ұсынған орындалу жоспарын тікелей іске асырып, Storage Engine-нен деректерді сұрайды"
      },
      {
        id: "363fede7-b614-4fbb-9adf-ddd13d98f380",
        text: "Жолдың ұзындығы"
      },
      {
        id: "e21b654b-2d2c-41bc-9c11-d8f58a84604f",
        text: "Index Reorganize"
      },
      {
        id: "b29e2c1a-ed63-42b4-a269-332e4a54b164",
        text: ".mdf (Primary Data File)"
      }
    ],
    correctOptionIds: [
      "331c815c-67f1-40cb-9964-4fb3bb106809"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b08",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі Transaction Log (.ldf) файлы толса не болады?",
    options: [
      {
        id: "db-t11-b08-op1",
        text: "Дерекқорда деректерді өзгертетін (INSERT, UPDATE, DELETE) операциялар орындалмай қалады"
      },
      {
        id: "db-t11-b08-op2",
        text: "Дерекқор автоматты түрде жойылады"
      },
      {
        id: "db-t11-b08-op3",
        text: "Деректерді тек оқуға болады (Read-only)"
      },
      {
        id: "db-t11-b08-op4",
        text: "Ешқандай қателік болмайды"
      },
      {
        id: "db-t11-b08-op5",
        text: "Кластерленбеген индекс арқылы табылған жолдың басқа бағандарын алу үшін кластерленген индекс кілті арқылы негізгі кестеге жүгінгенде"
      },
      {
        id: "db-t11-b08-op6",
        text: "Деректерді дискіге тікелей жазу"
      },
      {
        id: "db-t11-b08-op7",
        text: "Оңтайландырғыш дұрыс емес (баяу) орындалу жоспарын таңдауы мүмкін (мысалы, Index Seek орнына Table Scan жасауы мүмкін)"
      },
      {
        id: "db-t11-b08-op8",
        text: "Heap кестесі тек уақытша TempDB-де сақталады"
      }
    ],
    correctOptionIds: [
      "db-t11-b08-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b09",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі \"Dirty Page\" (Лас бет) деген не?",
    options: [
      {
        id: "db-t11-b09-op1",
        text: "Жедел жадта (Buffer Pool) өзгертілген, бірақ дискіге (MDF/NDF файлына) әлі жазылмаған бет"
      },
      {
        id: "db-t11-b09-op2",
        text: "Ақаулы және оқылмайтын бет"
      },
      {
        id: "db-t11-b09-op3",
        text: "Индекстері өшірілген бет"
      },
      {
        id: "db-t11-b09-op4",
        text: "Резервтік бет"
      },
      {
        id: "db-t11-b09-op5",
        text: "Максимум 249"
      },
      {
        id: "db-t11-b09-op6",
        text: "Иә, журнал мүлдем жабылып қалады"
      },
      {
        id: "db-t11-b09-op7",
        text: "Жедел жадтағы буферді босату үшін сирек қолданылатын лас беттерді (dirty pages) белсенді түрде дискіге жазады"
      },
      {
        id: "db-t11-b09-op8",
        text: "Cost Threshold for Parallelism"
      }
    ],
    correctOptionIds: [
      "db-t11-b09-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6c14efd0-436e-4f4d-adfe-82abadf72530",
    subjectId: SubjectId.DB,
    text: "SQL Server-де лас беттерді (dirty pages) жедел жадтан дискіге белсенді түрде жазып тұратын фондық процесс қалай аталады?",
    options: [
      {
        id: "6327003c-ad39-4bf3-b187-a6d0145f1e55",
        text: "Checkpoint"
      },
      {
        id: "b51d3a39-ac42-4e3d-a1a6-59da46f41330",
        text: "Query Optimizer"
      },
      {
        id: "51644d3d-2999-493d-ae94-324bb39eae2d",
        text: "Log Writer"
      },
      {
        id: "8b85b962-dfd3-4983-a550-bc444b4cc99d",
        text: "Lazy Reader"
      },
      {
        id: "a1fb5806-d07c-4b64-a927-5e5d249a0723",
        text: "Heap кестесінде индекстер тым көп болғанда"
      },
      {
        id: "90715a4a-91e4-4000-bf03-9bbcd8a58d7d",
        text: "Кластерленген индексі жоқ, деректері ретсіз сақталған кесте"
      },
      {
        id: "6e5cc333-134e-46d8-b5f9-5521a0938f2d",
        text: ".mdf және .ldf физикалық файлдары"
      },
      {
        id: "5d29534f-b888-4e32-a871-bd9c389754bd",
        text: "Primary Data файл (.mdf)"
      }
    ],
    correctOptionIds: [
      "6327003c-ad39-4bf3-b187-a6d0145f1e55"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b10",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі кластерленген индекс (Clustered Index) кесте деректеріне қалай әсер етеді?",
    options: [
      {
        id: "db-t11-b10-op1",
        text: "Кестедегі деректерді индекстің кілті бойынша физикалық түрде сұрыптап сақтайды (әр кестеде тек біреу ғана болады)"
      },
      {
        id: "db-t11-b10-op2",
        text: "Кесте деректерінен бөлек сақталады"
      },
      {
        id: "db-t11-b10-op3",
        text: "Деректердің тек бір бөлігін сұрыптайды"
      },
      {
        id: "db-t11-b10-op4",
        text: "Кестенің өлшемін екі есе азайтады"
      },
      {
        id: "db-t11-b10-op5",
        text: "Барлық транзакциялар толық журналданады және дерекқорды кез келген уақыт сәтіне дейін қалпына келтіруге мүмкіндік береді"
      },
      {
        id: "db-t11-b10-op6",
        text: "Session memory"
      },
      {
        id: "db-t11-b10-op7",
        text: "Жедел жадтағы буферді босату үшін сирек қолданылатын лас беттерді (dirty pages) белсенді түрде дискіге жазады"
      },
      {
        id: "db-t11-b10-op8",
        text: "Index Filter"
      }
    ],
    correctOptionIds: [
      "db-t11-b10-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b11",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі кластерленбеген индекс (Non-clustered Index) құрылымы қалай сақталады?",
    options: [
      {
        id: "db-t11-b11-op1",
        text: "Кесте деректерінен бөлек, көрсеткіштері (pointers) бар дербес ағаш құрылымы ретінде сақталады"
      },
      {
        id: "db-t11-b11-op2",
        text: "Кесте ішінде тікелей сұрыпталып сақталады"
      },
      {
        id: "db-t11-b11-op3",
        text: "Файл түрінде дискінің басқа жерінде сақталады"
      },
      {
        id: "db-t11-b11-op4",
        text: "Жедел жадта ғана уақытша сақталады"
      },
      {
        id: "db-t11-b11-op5",
        text: "Кесте құрылымының нұсқаларын бақылау үшін"
      },
      {
        id: "db-t11-b11-op6",
        text: ".txt"
      },
      {
        id: "db-t11-b11-op7",
        text: "Page Header"
      },
      {
        id: "db-t11-b11-op8",
        text: "Activity Monitor"
      }
    ],
    correctOptionIds: [
      "db-t11-b11-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b12",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі \"Lazy Writer\" процесі не істейді?",
    options: [
      {
        id: "db-t11-b12-op1",
        text: "Жедел жадтағы буферді босату үшін сирек қолданылатын лас беттерді (dirty pages) белсенді түрде дискіге жазады"
      },
      {
        id: "db-t11-b12-op2",
        text: "Сұраныстар жоспарын таңдайды"
      },
      {
        id: "db-t11-b12-op3",
        text: "Транзакцияларды мүлдем жазбайды"
      },
      {
        id: "db-t11-b12-op4",
        text: "Жүйені тоқтатып тұрады"
      },
      {
        id: "db-t11-b12-op5",
        text: "Кесте ішінде тікелей сұрыпталып сақталады"
      },
      {
        id: "db-t11-b12-op6",
        text: "Boundary Constraint"
      },
      {
        id: "db-t11-b12-op7",
        text: "Ол бастапқы деректер файлы (Primary Data File) болып табылады және жүйелік ақпаратты, кестелерді сақтайды"
      },
      {
        id: "db-t11-b12-op8",
        text: "Жүйелік Master дерекқорына бөлініп жазылады"
      }
    ],
    correctOptionIds: [
      "db-t11-b12-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b13",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі \"Checkpoint\" процесі орындалғанда не болады?",
    options: [
      {
        id: "db-t11-b13-op1",
        text: "Барлық лас беттер (dirty pages) жедел жадтан дискіге міндетті түрде бірден жазылады"
      },
      {
        id: "db-t11-b13-op2",
        text: "Бағдарлама қатемен тоқтайды"
      },
      {
        id: "db-t11-b13-op3",
        text: "Индекстер қайта құрылады"
      },
      {
        id: "db-t11-b13-op4",
        text: "Транзакциялар өшіріледі"
      },
      {
        id: "db-t11-b13-op5",
        text: "Процессордың ядролары шамадан тыс жүктелгенде"
      },
      {
        id: "db-t11-b13-op6",
        text: "Сұраныстарды талдау, оңтайландыру және орындау жоспарын құру"
      },
      {
        id: "db-t11-b13-op7",
        text: "Reorganize индекстің жапырақ беттерін желіде (online) реттейді, ал Rebuild индексті толығымен өшіріп қайта құрады (offline/online)"
      },
      {
        id: "db-t11-b13-op8",
        text: "Индекстерді жарамсыз етеді"
      }
    ],
    correctOptionIds: [
      "db-t11-b13-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b14",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі кластерленбеген индекс кестедегі деректердің физикалық реттілігін өзгерте ме?",
    options: [
      {
        id: "db-t11-b14-op1",
        text: "Жоқ, ол деректерге сілтеме жасайтын жеке құрылым ретінде сақталады"
      },
      {
        id: "db-t11-b14-op2",
        text: "Иә, толығымен өзгертеді"
      },
      {
        id: "db-t11-b14-op3",
        text: "Иә, тек бірінші рет құрылғанда ғана өзгертеді"
      },
      {
        id: "db-t11-b14-op4",
        text: "Иә, тек сандық бағандарды сұрыптайды"
      },
      {
        id: "db-t11-b14-op5",
        text: "Индекстерді алдын ала оқу әдісі"
      },
      {
        id: "db-t11-b14-op6",
        text: "Thread Threshold"
      },
      {
        id: "db-t11-b14-op7",
        text: "Транзакциялардың оқшаулануын (ACID) қамтамасыз ету үшін кестелерге, беттерге немесе жолдарға бұғаттаулар (locks) қою"
      },
      {
        id: "db-t11-b14-op8",
        text: "Filegroup (Файлдар тобы)"
      }
    ],
    correctOptionIds: [
      "db-t11-b14-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b15",
    subjectId: SubjectId.DB,
    text: "SQL Server-де бірінші рет оқылған деректер қайда орналасады?",
    options: [
      {
        id: "db-t11-b15-op1",
        text: "Жедел жадтағы Buffer Pool (Buffer Cache) аймағына жүктеледі"
      },
      {
        id: "db-t11-b15-op2",
        text: "Транзакциялар журналына жазылады"
      },
      {
        id: "db-t11-b15-op3",
        text: "Дискідегі уақытша файлға көшіріледі"
      },
      {
        id: "db-t11-b15-op4",
        text: "Еш жерде орналаспайды, бірден өшіріледі"
      },
      {
        id: "db-t11-b15-op5",
        text: "JSON немесе HTML түрінде"
      },
      {
        id: "db-t11-b15-op6",
        text: "Buffer Limit"
      },
      {
        id: "db-t11-b15-op7",
        text: "Дерекқор автоматты түрде Read-only күйіне ауысады"
      },
      {
        id: "db-t11-b15-op8",
        text: "Қате шығарып, жазбаны мүлдем қоспайды"
      }
    ],
    correctOptionIds: [
      "db-t11-b15-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b16",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі сұраныстарды орындау жоспарын (Execution Plan) қай процессор таңдайды?",
    options: [
      {
        id: "db-t11-b16-op1",
        text: "Query Optimizer"
      },
      {
        id: "db-t11-b16-op2",
        text: "Query Executor"
      },
      {
        id: "db-t11-b16-op3",
        text: "Buffer Manager"
      },
      {
        id: "db-t11-b16-op4",
        text: "Transaction Log Manager"
      },
      {
        id: "db-t11-b16-op5",
        text: "Filegroup (Файлдар тобы)"
      },
      {
        id: "db-t11-b16-op6",
        text: "Ешқандай қателік болмайды"
      },
      {
        id: "db-t11-b16-op7",
        text: "Дерекқорды қалпына келтіруді өте жылдам және оңай етеді"
      },
      {
        id: "db-t11-b16-op8",
        text: "Бір уақытта көптеген желілік ағындар TempDB-дегі жүйелік беттерді (GAM, SGAM, PFS) бөлісуге тырысқанда (allocation bottleneck)"
      }
    ],
    correctOptionIds: [
      "db-t11-b16-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b17",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі WAL (Write-Ahead Logging) принципі нені білдіреді?",
    options: [
      {
        id: "db-t11-b17-op1",
        text: "Деректер бетіне жасалған кез келген өзгеріс дискідегі деректер файлына (.mdf) жазылмас бұрын, міндетті түрде транзакция журналына (.ldf) жазылуы тиіс"
      },
      {
        id: "db-t11-b17-op2",
        text: "Сұраныстар тек түнде орындалады"
      },
      {
        id: "db-t11-b17-op3",
        text: "Барлық деректер алдымен жедел жадқа жазылады, журнал мүлдем қолданылмайды"
      },
      {
        id: "db-t11-b17-op4",
        text: "Индекстерді алдын ала оқу әдісі"
      },
      {
        id: "db-t11-b17-op5",
        text: "Сақтық көшірмелердің нұсқаларын сақтау үшін"
      },
      {
        id: "db-t11-b17-op6",
        text: "Жүйелік Master дерекқорын үлкейту"
      },
      {
        id: "db-t11-b17-op7",
        text: "Транзакциялардың оқшаулануын бақылайды"
      },
      {
        id: "db-t11-b17-op8",
        text: "TempDB деректер файлдарының санын процессор ядроларының санына сәйкестендіріп тең бөлу (әдетте 8 файлға дейін)"
      }
    ],
    correctOptionIds: [
      "db-t11-b17-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b18",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі негізгі деректер файлының кеңейтілімі қандай болады?",
    options: [
      {
        id: "db-t11-b18-op1",
        text: ".mdf (Primary Data File)"
      },
      {
        id: "db-t11-b18-op2",
        text: ".ldf (Transaction Log File)"
      },
      {
        id: "db-t11-b18-op3",
        text: ".ndf (Secondary Data File)"
      },
      {
        id: "db-t11-b18-op4",
        text: ".dbf"
      },
      {
        id: "db-t11-b18-op5",
        text: "Transaction Log (Транзакциялар журналы)"
      },
      {
        id: "db-t11-b18-op6",
        text: "Индексті өшіру"
      },
      {
        id: "db-t11-b18-op7",
        text: "Жүйелік Master дерекқорына бөлініп жазылады"
      },
      {
        id: "db-t11-b18-op8",
        text: "TempDB файлдарының санын азайту"
      }
    ],
    correctOptionIds: [
      "db-t11-b18-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b19",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі транзакциялар журналы файлының кеңейтілімі қандай болады?",
    options: [
      {
        id: "db-t11-b19-op1",
        text: ".ldf (Log Data File)"
      },
      {
        id: "db-t11-b19-op2",
        text: ".mdf"
      },
      {
        id: "db-t11-b19-op3",
        text: ".ndf"
      },
      {
        id: "db-t11-b19-op4",
        text: ".log"
      },
      {
        id: "db-t11-b19-op5",
        text: "Кестенің барлық бағандарын толық қамтитын бастапқы кілт"
      },
      {
        id: "db-t11-b19-op6",
        text: "Жаңа жол TempDB-ге жазылғанда"
      },
      {
        id: "db-t11-b19-op7",
        text: "Query Executor"
      },
      {
        id: "db-t11-b19-op8",
        text: "Деректер беттерін дискіден жедел жадқа оқу және оларды жадтан дискіге жазу әрекеттерін басқарады"
      }
    ],
    correctOptionIds: [
      "db-t11-b19-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2a08616f-200a-4c85-b450-6c8d94d73c17",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі деректерді сақтаудың ең кіші физикалық өлшем бірлігі қандай және оның көлемі қанша?",
    options: [
      {
        id: "c8baf826-56de-4fa5-817a-24470e390fec",
        text: "Бет (Page), көлемі 8 КБ"
      },
      {
        id: "db4f8b21-82e2-4a74-a875-303afb242a8c",
        text: "Экстент (Extent), көлемі 64 КБ"
      },
      {
        id: "02317d6e-e1c5-463f-9db0-f5949f8685dc",
        text: "Блок (Block), көлемі 4 КБ"
      },
      {
        id: "4a30d393-26f2-4866-b274-277e668fa164",
        text: "Сектор (Sector), көлемі 512 байт"
      },
      {
        id: "c2854619-dc3e-455c-9f3b-13d66385246a",
        text: "Желілік пакеттерді шифрлау"
      },
      {
        id: "d03594e5-2e9c-4fa0-b0b3-0a750103a1a1",
        text: "Жүйелік процедураларды нұсқалау үшін"
      },
      {
        id: "3bec6bc7-1480-4080-aecc-caa52d82f655",
        text: "Транзакцияларды мүлдем жазбайды"
      },
      {
        id: "a033e12c-1108-43c7-9615-fee3cb182121",
        text: "Extent Map"
      }
    ],
    correctOptionIds: [
      "c8baf826-56de-4fa5-817a-24470e390fec"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8e0e63c0-3449-44f6-8002-f68682c1844d",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 8 қатарлас орналасқан беттердің (Pages) жиынтығы қалай аталады және оның көлемі қанша?",
    options: [
      {
        id: "819ad9f9-8aff-432b-aa17-24831598b167",
        text: "Экстент (Extent), көлемі 64 КБ"
      },
      {
        id: "0b09a626-756f-4fdb-b49d-678fdd0accd1",
        text: "Кластер (Cluster), көлемі 128 КБ"
      },
      {
        id: "12f278f9-4dec-4f27-be22-e31604ace208",
        text: "Файл топтары, көлемі 1 МБ"
      },
      {
        id: "6bd54829-51bd-4cfd-b1a0-cc87bd7026b1",
        text: "Сегмент, көлемі 32 КБ"
      },
      {
        id: "768e1e7a-e3fd-47cb-a2d9-cc8e57471a0f",
        text: "Деректердің тек бір бөлігін сұрыптайды"
      },
      {
        id: "732daf50-d479-4ac7-b683-4ad1467c4f5e",
        text: ".ldf"
      },
      {
        id: "13d9f00f-1a71-4dfe-9235-70fce40eb1a5",
        text: "Сұранысқа қажетті барлық бағандарды өзінде (немесе INCLUDE бөлімінде) сақтайтын, негізгі кестеге жүгінуді қажет етпейтін индекс"
      },
      {
        id: "ebceac5b-2b42-4066-b360-0c5a65653a12",
        text: "Checkpoint Manager"
      }
    ],
    correctOptionIds: [
      "819ad9f9-8aff-432b-aa17-24831598b167"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b20",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі кластерленген индекс (Clustered Index) кестеде нешеу болуы мүмкін?",
    options: [
      {
        id: "db-t11-b20-op1",
        text: "Тек біреу ғана (себебі ол деректердің дискідегі физикалық орналасу ретін анықтайды)"
      },
      {
        id: "db-t11-b20-op2",
        text: "Кез келген мөлшерде шектеусіз"
      },
      {
        id: "db-t11-b20-op3",
        text: "Максимум 249"
      },
      {
        id: "db-t11-b20-op4",
        text: "Мүлдем болмауы керек"
      },
      {
        id: "db-t11-b20-op5",
        text: "Pointer Offset"
      },
      {
        id: "db-t11-b20-op6",
        text: "Журнал файлы мүлдем өзгермейді"
      },
      {
        id: "db-t11-b20-op7",
        text: "Транзакция журналы толған кезде"
      },
      {
        id: "db-t11-b20-op8",
        text: "Резервтік бет"
      }
    ],
    correctOptionIds: [
      "db-t11-b20-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b21",
    subjectId: SubjectId.DB,
    text: "SQL Server жедел жадында сұраныстардың дайын орындалу жоспарын сақтайтын аймақ қалай аталады?",
    options: [
      {
        id: "db-t11-b21-op1",
        text: "Plan Cache (Procedure Cache)"
      },
      {
        id: "db-t11-b21-op2",
        text: "Buffer Pool"
      },
      {
        id: "db-t11-b21-op3",
        text: "Log Buffer"
      },
      {
        id: "db-t11-b21-op4",
        text: "TempDB"
      },
      {
        id: "db-t11-b21-op5",
        text: "Ақаулы және оқылмайтын бет"
      },
      {
        id: "db-t11-b21-op6",
        text: "Деректерді тек оқу режимінде сақтайды"
      },
      {
        id: "db-t11-b21-op7",
        text: "Heap кестесі тек уақытша TempDB-де сақталады"
      },
      {
        id: "db-t11-b21-op8",
        text: "Кестенің өлшемін екі есе азайтады"
      }
    ],
    correctOptionIds: [
      "db-t11-b21-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b22",
    subjectId: SubjectId.DB,
    text: "SQL Server архитектурасындағы \"Relational Engine\" (Query Processor) негізгі рөлі қандай?",
    options: [
      {
        id: "db-t11-b22-op1",
        text: "Сұраныстарды талдау, оңтайландыру және орындау жоспарын құру"
      },
      {
        id: "db-t11-b22-op2",
        text: "Деректерді физикалық дискіге тікелей жазу"
      },
      {
        id: "db-t11-b22-op3",
        text: "Транзакциялар журналын басқару"
      },
      {
        id: "db-t11-b22-op4",
        text: "Желілік пакеттерді шифрлау"
      },
      {
        id: "db-t11-b22-op5",
        text: "Сұраныстар тек түнде орындалады"
      },
      {
        id: "db-t11-b22-op6",
        text: "Өте жылдам оқылатын уақытша кесте"
      },
      {
        id: "db-t11-b22-op7",
        text: "Транзакциялар журналына жазылады"
      },
      {
        id: "db-t11-b22-op8",
        text: "Жедел жадтағы буферді босату үшін сирек қолданылатын лас беттерді (dirty pages) белсенді түрде дискіге жазады"
      }
    ],
    correctOptionIds: [
      "db-t11-b22-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f9183798-4507-4c0e-93b3-84d0877941d5",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі әрбір деректер бетінің (Page) басында орналасатын тақырыптық бөлігі (Page Header) неше байттан тұрады?",
    options: [
      {
        id: "7d807bad-5876-43a0-aece-271ec6aef4a4",
        text: "96 байт"
      },
      {
        id: "6566a679-974c-4797-8ce6-ed2ab411c769",
        text: "64 байт"
      },
      {
        id: "cc69cc51-0dd8-451a-90a2-604a9050858b",
        text: "128 байт"
      },
      {
        id: "daa06c7b-d00e-45ff-8c95-ab6f99e23f9c",
        text: "32 байт"
      },
      {
        id: "2685a803-4a15-45a5-9e47-7b6e63eb0fd6",
        text: "Master дерекқорының ішінде"
      },
      {
        id: "09859d2a-4e24-4e69-a472-0ab435b7e35a",
        text: "Partition Scheme (секциялау схемасы)"
      },
      {
        id: "379329bf-0978-4036-999c-aa7c0bdaf89a",
        text: "Сұранысты дискіге жазу кезінде"
      },
      {
        id: "c0a28e6a-4333-495a-973c-a06b367b012d",
        text: ".log"
      }
    ],
    correctOptionIds: [
      "7d807bad-5876-43a0-aece-271ec6aef4a4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "734de94c-9df5-485a-ae53-35f6b7e95784",
    subjectId: SubjectId.DB,
    text: "Деректер бетінің соңында орналасатын және жолдардың беттегі физикалық орнын көрсететін кесте қалай аталады?",
    options: [
      {
        id: "0fa9dc42-9767-4685-8254-3b4ea1145123",
        text: "Row Offset Table (немесе Slot Array)"
      },
      {
        id: "d3ae93f6-62e4-4e4a-80f3-309d966d20be",
        text: "Page Header"
      },
      {
        id: "3644db94-6874-469a-ab7a-b6da4680fe54",
        text: "Free Space Tracker"
      },
      {
        id: "b38c0f49-99f1-49a0-b2a7-dcc3054efcc8",
        text: "Extent Map"
      },
      {
        id: "fdf8883f-0365-4b82-9057-3e3f093eb06d",
        text: "Индекстің барлық беттерін басынан аяғына дейін толық оқып шығу (іздеу шарты тым кең немесе индекс тиімсіз болғанда)"
      },
      {
        id: "99484c22-a4e5-4687-ae5b-8db1fcd1924c",
        text: "Кез келген мөлшерде шектеусіз"
      },
      {
        id: "1ba972ec-78f5-4621-9bb9-9edcc849c7f3",
        text: "Жүйелік ақпаратты толық сақтау үшін"
      },
      {
        id: "45b9bc08-d600-4f6b-9ec5-5405c15dad72",
        text: "Кестені басқа серверге көшіру"
      }
    ],
    correctOptionIds: [
      "0fa9dc42-9767-4685-8254-3b4ea1145123"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b6991e82-78f6-4451-a1c5-491bc73120f9",
    subjectId: SubjectId.DB,
    text: "Бір кестедегі деректер жолының максималды тиімді өлшемі (LOB деректерін қоспағанда) неше байттан аспауы тиіс?",
    options: [
      {
        id: "ace76011-66d8-4962-b609-8298ea57fdc3",
        text: "8060 байт"
      },
      {
        id: "46ff565e-7d0b-45f8-a4b3-b56f1b4fe144",
        text: "8192 байт"
      },
      {
        id: "dc0c5527-78bb-46ec-94be-6386e797d851",
        text: "4096 байт"
      },
      {
        id: "d432d8d2-1ab2-4638-a68f-46f46f9b3dad",
        text: "1024 байт"
      },
      {
        id: "9b57b31a-ef3f-4cfd-be1e-bfbca6e0ee92",
        text: "MAXDOP"
      },
      {
        id: "9e1ea390-ff3b-457f-8d81-85aaf38560ba",
        text: ".ndf (Secondary Data File)"
      },
      {
        id: "b8a93716-86a1-41b6-a68f-3e7313046829",
        text: "Жүйенің қауіпсіздік ережелерін сақтау үшін"
      },
      {
        id: "90a7e5d9-cec4-4dea-a845-b76dc90b045b",
        text: "Резервтік көшірмелердің сәттілік пайызын анықтау үшін"
      }
    ],
    correctOptionIds: [
      "ace76011-66d8-4962-b609-8298ea57fdc3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b23",
    subjectId: SubjectId.DB,
    text: "Егер деректер жолының ұзындығы 8060 байттан асып кетсе, SQL Server оны қалай сақтайды?",
    options: [
      {
        id: "db-t11-b23-op1",
        text: "Row-Overflow Data беттеріне ауыстырады және негізгі бетте оған сілтеме қалдырады"
      },
      {
        id: "db-t11-b23-op2",
        text: "Жолды автоматты түрде қысқартып қиып тастайды"
      },
      {
        id: "db-t11-b23-op3",
        text: "Жаңа дерекқор файлын құрады"
      },
      {
        id: "db-t11-b23-op4",
        text: "Қате шығарып, жазбаны мүлдем қоспайды"
      },
      {
        id: "db-t11-b23-op5",
        text: "Индектер файлы"
      },
      {
        id: "db-t11-b23-op6",
        text: "Кесте деректерінен бөлек сақталады"
      },
      {
        id: "db-t11-b23-op7",
        text: "Кластерленбеген индекс арқылы табылған жолдың басқа бағандарын алу үшін кластерленген индекс кілті арқылы негізгі кестеге жүгінгенде"
      },
      {
        id: "db-t11-b23-op8",
        text: "Сыртқы кілттерді өшіру керек"
      }
    ],
    correctOptionIds: [
      "db-t11-b23-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b24",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі PFS (Page Free Space) беттерінің негізгі қызметі қандай?",
    options: [
      {
        id: "db-t11-b24-op1",
        text: "Дерекқорындағы әрбір беттің бос орын мөлшері және бөліну күйі туралы ақпаратты сақтау"
      },
      {
        id: "db-t11-b24-op2",
        text: "Транзакцияларды қалпына келтіру жылдамдығын бақылау"
      },
      {
        id: "db-t11-b24-op3",
        text: "Кестедегі біріншілік кілттерді сақтау"
      },
      {
        id: "db-t11-b24-op4",
        text: "Деректерді дискіге тікелей жазу"
      },
      {
        id: "db-t11-b24-op5",
        text: "Кластерленген индекс бойынша жаңа жол енгізілгенде бетте бос орын жетіспегендіктен жаңа бет құрылып, деректер көшірілгенде"
      },
      {
        id: "db-t11-b24-op6",
        text: "ТемпДБ-ның басқа атауы"
      },
      {
        id: "db-t11-b24-op7",
        text: "Файл топтары, көлемі 1 МБ"
      },
      {
        id: "db-t11-b24-op8",
        text: "RID (Row Identifier)"
      }
    ],
    correctOptionIds: [
      "db-t11-b24-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b25",
    subjectId: SubjectId.DB,
    text: "GAM (Global Allocation Map) беттері не үшін қолданылады?",
    options: [
      {
        id: "db-t11-b25-op1",
        text: "Қай экстенттердің бос екенін және қайсысы бөлінгенін (экстент деңгейінде) бақылау үшін"
      },
      {
        id: "db-t11-b25-op2",
        text: "Жүйелік пайдаланушылардың тізімін сақтау үшін"
      },
      {
        id: "db-t11-b25-op3",
        text: "Индекстердің құрылымын өзгерту үшін"
      },
      {
        id: "db-t11-b25-op4",
        text: "TempDB дерекқорын оңтайландыру үшін"
      },
      {
        id: "db-t11-b25-op5",
        text: "Жүйелік процедураларды нұсқалау үшін"
      },
      {
        id: "db-t11-b25-op6",
        text: "Резервтік көшірме жасау жолдарын анықтау"
      },
      {
        id: "db-t11-b25-op7",
        text: "Сервердің барлық сұраныстарын оңтайландыру"
      },
      {
        id: "db-t11-b25-op8",
        text: "Соңғы толық резервтік көшірмеден кейін өзгерген экстенттерді бақылау (дифференциалды архивтеуді жылдамдату үшін)"
      }
    ],
    correctOptionIds: [
      "db-t11-b25-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b26",
    subjectId: SubjectId.DB,
    text: "SGAM (Shared Global Allocation Map) беттері не үшін қолданылады?",
    options: [
      {
        id: "db-t11-b26-op1",
        text: "Қай экстенттер қазір аралас (Mixed) күйде екенін және оларда кем дегенде бір бос бет бар-жоғын анықтау үшін"
      },
      {
        id: "db-t11-b26-op2",
        text: "Транзакциялардың сәтті аяқталуын тексеру үшін"
      },
      {
        id: "db-t11-b26-op3",
        text: "Деректерді автоматты түрде шифрлау үшін"
      },
      {
        id: "db-t11-b26-op4",
        text: "Бастапқы файлдар тобын анықтау үшін"
      },
      {
        id: "db-t11-b26-op5",
        text: "Транзакциялар өшіріледі"
      },
      {
        id: "db-t11-b26-op6",
        text: "Дискілік файл топтары (filegroups)"
      },
      {
        id: "db-t11-b26-op7",
        text: "Көлемі 64 KB болатын 8 байланысқан Page жиынтығы"
      },
      {
        id: "db-t11-b26-op8",
        text: "Транзакция журналы толған кезде"
      }
    ],
    correctOptionIds: [
      "db-t11-b26-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b27",
    subjectId: SubjectId.DB,
    text: "IAM (Index Allocation Map) бетінің қызметі қандай?",
    options: [
      {
        id: "db-t11-b27-op1",
        text: "Кесте немесе индекс қолданатын экстенттер мен беттердің тізімін сақтау"
      },
      {
        id: "db-t11-b27-op2",
        text: "Пайдаланушылардың рұқсат құқықтарын сақтау"
      },
      {
        id: "db-t11-b27-op3",
        text: "Сұраныстардың орындалу уақытын жазу"
      },
      {
        id: "db-t11-b27-op4",
        text: "Дерекқордың резервтік көшірмелерін басқару"
      },
      {
        id: "db-t11-b27-op5",
        text: "Сыртқы кілттерді бұғаттау үшін"
      },
      {
        id: "db-t11-b27-op6",
        text: "Индекстерді жарамсыз етеді"
      },
      {
        id: "db-t11-b27-op7",
        text: "Деректерді автоматты түрде шифрлау үшін"
      },
      {
        id: "db-t11-b27-op8",
        text: "Page Size"
      }
    ],
    correctOptionIds: [
      "db-t11-b27-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b28",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі DCM (Differential Changed Map) беттері не үшін қажет?",
    options: [
      {
        id: "db-t11-b28-op1",
        text: "Соңғы толық резервтік көшірмеден кейін өзгерген экстенттерді бақылау (дифференциалды архивтеуді жылдамдату үшін)"
      },
      {
        id: "db-t11-b28-op2",
        text: "Транзакция журналының толғанын тексеру үшін"
      },
      {
        id: "db-t11-b28-op3",
        text: "Индексті қайта құру уақытын анықтау үшін"
      },
      {
        id: "db-t11-b28-op4",
        text: "Кестедегі құрама кілттерді сақтау үшін"
      },
      {
        id: "db-t11-b28-op5",
        text: "Беттің физикалық нөмірі"
      },
      {
        id: "db-t11-b28-op6",
        text: "Дерекқор файлының атауы"
      },
      {
        id: "db-t11-b28-op7",
        text: "Индекстердің құрылымын өзгерту үшін"
      },
      {
        id: "db-t11-b28-op8",
        text: "Master Database файл (.master)"
      }
    ],
    correctOptionIds: [
      "db-t11-b28-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b29",
    subjectId: SubjectId.DB,
    text: "BCM (Bulk Changed Map) беттері қандай режимде өзгерген экстенттерді бақылайды?",
    options: [
      {
        id: "db-t11-b29-op1",
        text: "Bulk-Logged режимінде жаппай операциялар жасалғанда"
      },
      {
        id: "db-t11-b29-op2",
        text: "Simple recovery режимінде ғана"
      },
      {
        id: "db-t11-b29-op3",
        text: "Тек TempDB дерекқоры орындалғанда"
      },
      {
        id: "db-t11-b29-op4",
        text: "Ешқандай режимде қолданылмайды"
      },
      {
        id: "db-t11-b29-op5",
        text: "Index Reorganize"
      },
      {
        id: "db-t11-b29-op6",
        text: "Транзакция журналындағы өзгерістер автоматты түрде тазартылып отырады, сондықтан point-in-time қалпына келтіру мүмкін емес, бірақ журнал өспейді"
      },
      {
        id: "db-t11-b29-op7",
        text: "Дерекқордың бүкіл қауіпсіздік параметрлерін сақтау"
      },
      {
        id: "db-t11-b29-op8",
        text: "Деректерді автоматты түрде шифрлау үшін"
      }
    ],
    correctOptionIds: [
      "db-t11-b29-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b30",
    subjectId: SubjectId.DB,
    text: "Heap (Үйінді) кесте деген не?",
    options: [
      {
        id: "db-t11-b30-op1",
        text: "Кластерленген индексі жоқ, деректері ретсіз сақталған кесте"
      },
      {
        id: "db-t11-b30-op2",
        text: "Өте жылдам оқылатын уақытша кесте"
      },
      {
        id: "db-t11-b30-op3",
        text: "Тек сандарды сақтайтын кесте түрі"
      },
      {
        id: "db-t11-b30-op4",
        text: "Жүйелік кестелердің жалпы жиынтығы"
      },
      {
        id: "db-t11-b30-op5",
        text: "Ешқандай журнал файлын қолданбайды"
      },
      {
        id: "db-t11-b30-op6",
        text: "TempDB дерекқоры автоматты түрде өшірілгенде"
      },
      {
        id: "db-t11-b30-op7",
        text: "Қай экстенттер қазір аралас (Mixed) күйде екенін және оларда кем дегенде бір бос бет бар-жоғын анықтау үшін"
      },
      {
        id: "db-t11-b30-op8",
        text: "Дерекқордың файлдарын жауып тастау"
      }
    ],
    correctOptionIds: [
      "db-t11-b30-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "aadfb12b-c6b3-4271-8489-07ce5fc465fa",
    subjectId: SubjectId.DB,
    text: "Heap кестесіндегі жазбаларға бағытталған кластерленбеген индекстің жапырақтық деңгейіндегі (leaf node) көрсеткіш қалай аталады?",
    options: [
      {
        id: "489806ee-8df2-4a85-b6d5-7eaa72096eec",
        text: "RID (Row Identifier – FileID:PageID:SlotID)"
      },
      {
        id: "7fce2276-efbf-44d3-bd38-9ede1a8f7611",
        text: "Clustered Key"
      },
      {
        id: "7a8bf4de-550e-41ef-81c1-0d2fad2b92c5",
        text: "Pointer Offset"
      },
      {
        id: "7d505a5e-7916-47c7-a3f8-c617ecbd8722",
        text: "B-Tree Leaf Link"
      },
      {
        id: "0f609093-e031-4888-b1bc-cddefda268fe",
        text: "Сервер процессорын өшіру"
      },
      {
        id: "9b1e858e-d8af-4032-bf9f-f9c9e3aa6488",
        text: "Boundary Constraint"
      },
      {
        id: "adea32f3-1717-47ed-b57b-27ff03470aed",
        text: "Пайдаланушылардың дерекқорға кіру құқықтарын басқару"
      },
      {
        id: "e5239228-2780-40b6-9621-a2cb79df1fdc",
        text: "Cost Threshold for Parallelism"
      }
    ],
    correctOptionIds: [
      "489806ee-8df2-4a85-b6d5-7eaa72096eec"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8fabb9dd-4100-4017-847c-fa48c0383f44",
    subjectId: SubjectId.DB,
    text: "Кластерленген кестедегі кластерленбеген индекстің жапырақтық деңгейіндегі көрсеткіш ретінде не қолданылады?",
    options: [
      {
        id: "0a2b5cd7-f318-4cb7-9d20-9fae3aa54da7",
        text: "Кластерленген индекстің кілті (Clustered Index Key)"
      },
      {
        id: "59d35d08-996b-426e-a6d3-8f62b393288c",
        text: "RID (Row Identifier)"
      },
      {
        id: "5cd07d27-ec93-4998-b08a-975a0d0b11c8",
        text: "Беттің физикалық нөмірі"
      },
      {
        id: "1e368e6c-fc27-4c08-b0e7-00da288a7f4c",
        text: "Жолдың ұзындығы"
      },
      {
        id: "283a52c0-98c9-4633-8edf-331f23d5a680",
        text: "XML пішімінде немесе графикалық схема түрінде"
      },
      {
        id: "23fe57b5-9dad-4405-b685-bd752e66f071",
        text: "Ресурсты босатқанша күту үшін процессор ядросын қысқа циклде айналдырып тұратын өте жылдам және жеңіл бұғаттау механизмі"
      },
      {
        id: "c528eb27-4ca7-492a-9245-df3dc8be8ad5",
        text: "Master Database файл (.master)"
      },
      {
        id: "d9fa185f-0747-48b5-8a54-1aa718fb441a",
        text: "Дискілік файл топтары (filegroups)"
      }
    ],
    correctOptionIds: [
      "0a2b5cd7-f318-4cb7-9d20-9fae3aa54da7"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b31",
    subjectId: SubjectId.DB,
    text: "TempDB дерекқорының негізгі қызметі не?",
    options: [
      {
        id: "db-t11-b31-op1",
        text: "Уақытша кестелерді, аралық сұраныс нәтижелерін және нұсқалар қоймасын (version store) сақтау"
      },
      {
        id: "db-t11-b31-op2",
        text: "Дерекқордың бүкіл қауіпсіздік параметрлерін сақтау"
      },
      {
        id: "db-t11-b31-op3",
        text: "Сервердің жүйелік параметрлерін конфигурациялау"
      },
      {
        id: "db-t11-b31-op4",
        text: "Сақтық көшірмелердің журналдарын жүргізу"
      },
      {
        id: "db-t11-b31-op5",
        text: "Әрбір 64 беттен кейін"
      },
      {
        id: "db-t11-b31-op6",
        text: "Ресурсты босатқанша күту үшін процессор ядросын қысқа циклде айналдырып тұратын өте жылдам және жеңіл бұғаттау механизмі"
      },
      {
        id: "db-t11-b31-op7",
        text: "Индекс ағашы арқылы нақты қажетті жолдарды өте жылдам тауып алу әдісі (оңтайлы іздеу)"
      },
      {
        id: "db-t11-b31-op8",
        text: "Әрбір 51123 беттен кейін (шамамен 4 ГБ деректерді қамтиды)"
      }
    ],
    correctOptionIds: [
      "db-t11-b31-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b32",
    subjectId: SubjectId.DB,
    text: "SQL Server іске қосылған сайын TempDB дерекқоры қалай өзгереді?",
    options: [
      {
        id: "db-t11-b32-op1",
        text: "Автоматты түрде толығымен тазартылып, модель (model) дерекқоры негізінде жаңадан құрылады"
      },
      {
        id: "db-t11-b32-op2",
        text: "Алдыңғы күйінен қалпына келтіріледі"
      },
      {
        id: "db-t11-b32-op3",
        text: "Өлшемі екі есеге ұлғаяды"
      },
      {
        id: "db-t11-b32-op4",
        text: "Мүлдем өзгеріссіз қалады"
      },
      {
        id: "db-t11-b32-op5",
        text: "Secondary Data файл (.ndf)"
      },
      {
        id: "db-t11-b32-op6",
        text: "Уақытша кестелерді жылдам оқу үшін"
      },
      {
        id: "db-t11-b32-op7",
        text: "Пайдаланушылардың парольдерін бұғаттау"
      },
      {
        id: "db-t11-b32-op8",
        text: "Сақтық көшірмелердің нұсқаларын сақтау үшін"
      }
    ],
    correctOptionIds: [
      "db-t11-b32-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b33",
    subjectId: SubjectId.DB,
    text: "Жүйелік Master дерекқорының рөлі қандай?",
    options: [
      {
        id: "db-t11-b33-op1",
        text: "Жүйелік деңгейдегі барлық ақпаратты (пайдаланушылар, файлдар орны, басқа дерекқорлар тізімі) сақтау"
      },
      {
        id: "db-t11-b33-op2",
        text: "Тек уақытша деректерді сақтау"
      },
      {
        id: "db-t11-b33-op3",
        text: "Сервердің барлық сұраныстарын оңтайландыру"
      },
      {
        id: "db-t11-b33-op4",
        text: "Дерекқордың резервтік көшірмелерін орындау"
      },
      {
        id: "db-t11-b33-op5",
        text: "Жедел жадтағы Buffer Pool (Buffer Cache) аймағына жүктеледі"
      },
      {
        id: "db-t11-b33-op6",
        text: "Кластерленген индексі жоқ, деректері ретсіз сақталған кесте"
      },
      {
        id: "db-t11-b33-op7",
        text: "Орындалу жоспарын тікелей орындау кезінде"
      },
      {
        id: "db-t11-b33-op8",
        text: ".ldf (Log Data File)"
      }
    ],
    correctOptionIds: [
      "db-t11-b33-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b34",
    subjectId: SubjectId.DB,
    text: "Жүйелік MSDB дерекқоры не үшін қолданылады?",
    options: [
      {
        id: "db-t11-b34-op1",
        text: "SQL Server Agent тапсырмаларын, ескертулерін, тарихын және резервтік көшірмелер журналдарын басқару үшін"
      },
      {
        id: "db-t11-b34-op2",
        text: "Жаңа дерекқорларға үлгі болу үшін"
      },
      {
        id: "db-t11-b34-op3",
        text: "Жүйелік ақпаратты толық сақтау үшін"
      },
      {
        id: "db-t11-b34-op4",
        text: "Уақытша кестелерді жылдам оқу үшін"
      },
      {
        id: "db-t11-b34-op5",
        text: "Мүлдем өзгеріссіз қалады"
      },
      {
        id: "db-t11-b34-op6",
        text: "Log Writer"
      },
      {
        id: "db-t11-b34-op7",
        text: "Өте жылдам оқылатын уақытша кесте"
      },
      {
        id: "db-t11-b34-op8",
        text: "Lock тек қана TempDB ішінде қолданылады"
      }
    ],
    correctOptionIds: [
      "db-t11-b34-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b35",
    subjectId: SubjectId.DB,
    text: "Жүйелік Model дерекқоры не үшін қолданылады?",
    options: [
      {
        id: "db-t11-b35-op1",
        text: "Жаңадан құрылатын кез келген дерекқор үшін шаблон (үлгі) ретінде"
      },
      {
        id: "db-t11-b35-op2",
        text: "SQL Server Agent жұмысын басқару үшін"
      },
      {
        id: "db-t11-b35-op3",
        text: "Жүйенің қауіпсіздік ережелерін сақтау үшін"
      },
      {
        id: "db-t11-b35-op4",
        text: "TempDB-ді автоматты тазарту үшін"
      },
      {
        id: "db-t11-b35-op5",
        text: "Файл түрінде дискінің басқа жерінде сақталады"
      },
      {
        id: "db-t11-b35-op6",
        text: "Олар тек қана бір файл ішінде сақталады"
      },
      {
        id: "db-t11-b35-op7",
        text: "Сұраныстардың синтаксисін тексеретін модуль"
      },
      {
        id: "db-t11-b35-op8",
        text: "Резервтік көшірме жасау толық тоқтатылғанда"
      }
    ],
    correctOptionIds: [
      "db-t11-b35-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b36",
    subjectId: SubjectId.DB,
    text: "Жүйелік Resource дерекқорының ерекшелігі қандай?",
    options: [
      {
        id: "db-t11-b36-op1",
        text: "SQL Server-дегі барлық жүйелік объектілерді (процедуралар, функциялар) сақтайтын тек оқуға арналған жасырын дерекқор"
      },
      {
        id: "db-t11-b36-op2",
        text: "Пайдаланушылар үшін ашық және өзгертпелі дерекқор"
      },
      {
        id: "db-t11-b36-op3",
        text: "ТемпДБ-ның басқа атауы"
      },
      {
        id: "db-t11-b36-op4",
        text: "Дерекқордың сақтық көшірмесін сақтайтын орын"
      },
      {
        id: "db-t11-b36-op5",
        text: "Индексті толық өшіру"
      },
      {
        id: "db-t11-b36-op6",
        text: "Partition Function (секциялау функциясы)"
      },
      {
        id: "db-t11-b36-op7",
        text: "Кестені толық тазарту керек"
      },
      {
        id: "db-t11-b36-op8",
        text: "Пайдаланушының жеке компьютерінде"
      }
    ],
    correctOptionIds: [
      "db-t11-b36-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b37",
    subjectId: SubjectId.DB,
    text: "SQL Server OS (SOS) деген не?",
    options: [
      {
        id: "db-t11-b37-op1",
        text: "SQL Server ішіндегі жадты, ағындарды және I/O әрекеттерін амалдық жүйеден тәуелсіз басқаратын ішкі жүйе"
      },
      {
        id: "db-t11-b37-op2",
        text: "Жаңа операциялық жүйе түрі"
      },
      {
        id: "db-t11-b37-op3",
        text: "Қауіпсіздікті қорғайтын антивирус"
      },
      {
        id: "db-t11-b37-op4",
        text: "Сұраныстардың синтаксисін тексеретін модуль"
      },
      {
        id: "db-t11-b37-op5",
        text: "Индекс тек 80 секунд ішінде жұмыс істейді"
      },
      {
        id: "db-t11-b37-op6",
        text: "Ешқандай пішімде сақталмайды, бірден жойылады"
      },
      {
        id: "db-t11-b37-op7",
        text: "Оңтайландырғыш ұсынған орындалу жоспарын тікелей іске асырып, Storage Engine-нен деректерді сұрайды"
      },
      {
        id: "db-t11-b37-op8",
        text: "Жаңа деректерді жылдам қосу үшін"
      }
    ],
    correctOptionIds: [
      "db-t11-b37-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b38",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі Full Recovery Model (Толық қалпына келтіру моделі) ерекшелігі қандай?",
    options: [
      {
        id: "db-t11-b38-op1",
        text: "Барлық транзакциялар толық журналданады және дерекқорды кез келген уақыт сәтіне дейін қалпына келтіруге мүмкіндік береді"
      },
      {
        id: "db-t11-b38-op2",
        text: "Журнал файлдарын мүлдем өшіріп тастайды"
      },
      {
        id: "db-t11-b38-op3",
        text: "Деректерді тек оқу режимінде сақтайды"
      },
      {
        id: "db-t11-b38-op4",
        text: "Тек TempDB дерекқоры үшін жұмыс істейді"
      },
      {
        id: "db-t11-b38-op5",
        text: ".ldf (Transaction Log File)"
      },
      {
        id: "db-t11-b38-op6",
        text: "Index Filter"
      },
      {
        id: "db-t11-b38-op7",
        text: "Extent (Экстент), өлшемі 64 KB"
      },
      {
        id: "db-t11-b38-op8",
        text: "Жүйені тоқтатып тұрады"
      }
    ],
    correctOptionIds: [
      "db-t11-b38-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b39",
    subjectId: SubjectId.DB,
    text: "Simple Recovery Model (Қарапайым қалпына келтіру моделі) ерекшелігі неде?",
    options: [
      {
        id: "db-t11-b39-op1",
        text: "Транзакция журналындағы өзгерістер автоматты түрде тазартылып отырады, сондықтан point-in-time қалпына келтіру мүмкін емес, бірақ журнал өспейді"
      },
      {
        id: "db-t11-b39-op2",
        text: "Дерекқорды қалпына келтіруді өте жылдам және оңай етеді"
      },
      {
        id: "db-t11-b39-op3",
        text: "Ешқандай журнал файлын қолданбайды"
      },
      {
        id: "db-t11-b39-op4",
        text: "Деректердің қауіпсіздігін арттырады"
      },
      {
        id: "db-t11-b39-op5",
        text: "Әрбір 8088 беттен кейін"
      },
      {
        id: "db-t11-b39-op6",
        text: "Барлық деректер алдымен жедел жадқа жазылады, журнал мүлдем қолданылмайды"
      },
      {
        id: "db-t11-b39-op7",
        text: "TempDB файлының дискідегі орны таусылғанда"
      },
      {
        id: "db-t11-b39-op8",
        text: "Барлық лас беттер (dirty pages) жедел жадтан дискіге міндетті түрде бірден жазылады"
      }
    ],
    correctOptionIds: [
      "db-t11-b39-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b40",
    subjectId: SubjectId.DB,
    text: "Bulk-Logged Recovery Model қай кезде қолданылады?",
    options: [
      {
        id: "db-t11-b40-op1",
        text: "Жаппай деректер жүктеу (bulk load) кезінде журнал файлдарының тым үлкен болып кетпеуі үшін (ішінара журналдау)"
      },
      {
        id: "db-t11-b40-op2",
        text: "Дерекқорда тек қарапайым SELECT сұраныстары орындалғанда"
      },
      {
        id: "db-t11-b40-op3",
        text: "Резервтік көшірме жасау толық тоқтатылғанда"
      },
      {
        id: "db-t11-b40-op4",
        text: "Тек TempDB дерекқоры толған кезде"
      },
      {
        id: "db-t11-b40-op5",
        text: "Уақытша кестелер тым үлкен болып кеткенде"
      },
      {
        id: "db-t11-b40-op6",
        text: "Тек қана мәтіндік файл түрінде"
      },
      {
        id: "db-t11-b40-op7",
        text: "Жаңа NDF файлын қосу керек"
      },
      {
        id: "db-t11-b40-op8",
        text: "Дерекқорда деректерді өзгертетін (INSERT, UPDATE, DELETE) операциялар орындалмай қалады"
      }
    ],
    correctOptionIds: [
      "db-t11-b40-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b41",
    subjectId: SubjectId.DB,
    text: "Дерекқор ішінде файлдар тобын (Filegroup) құрудың басты артықшылығы неде?",
    options: [
      {
        id: "db-t11-b41-op1",
        text: "Кестелер мен индекстерді әртүрлі физикалық дискілерге орналастыру арқылы кіру/шығу (I/O) өнімділігін арттыру"
      },
      {
        id: "db-t11-b41-op2",
        text: "Бастапқы кілттерді автоматты түрде шифрлау"
      },
      {
        id: "db-t11-b41-op3",
        text: "Кестелердің санын азайту"
      },
      {
        id: "db-t11-b41-op4",
        text: "Сұраныстардың синтаксисін оңтайландыру"
      },
      {
        id: "db-t11-b41-op5",
        text: "Жаңа Clustered Index құру"
      },
      {
        id: "db-t11-b41-op6",
        text: "Транзакциялар журналына жазылады"
      },
      {
        id: "db-t11-b41-op7",
        text: "Жаңа NDF файлын қосу керек"
      },
      {
        id: "db-t11-b41-op8",
        text: "Сұранысты дискіге жазу кезінде"
      }
    ],
    correctOptionIds: [
      "db-t11-b41-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b42",
    subjectId: SubjectId.DB,
    text: "Read-Only Filegroup (тек оқуға арналған файлдар тобы) не үшін қажет?",
    options: [
      {
        id: "db-t11-b42-op1",
        text: "Өзгермейтін архивтік деректерді қорғау және резервтік көшірме жасау уақытын қысқарту үшін"
      },
      {
        id: "db-t11-b42-op2",
        text: "Жаңа деректерді жылдам қосу үшін"
      },
      {
        id: "db-t11-b42-op3",
        text: "Уақытша кестелерді автоматты түрде өшіру үшін"
      },
      {
        id: "db-t11-b42-op4",
        text: "Сыртқы кілттерді бұғаттау үшін"
      },
      {
        id: "db-t11-b42-op5",
        text: "Сегмент, көлемі 32 КБ"
      },
      {
        id: "db-t11-b42-op6",
        text: "Синтаксистік талдаудан (parsing) кейін, сұраныстағы нысандар мен бағандардың бар-жоғын тексеріп, семантикалық талдау жасайды"
      },
      {
        id: "db-t11-b42-op7",
        text: "Кестедегі деректерді индекстің кілті бойынша физикалық түрде сұрыптап сақтайды (әр кестеде тек біреу ғана болады)"
      },
      {
        id: "db-t11-b42-op8",
        text: "Индекс ағашы арқылы нақты қажетті жолдарды өте жылдам тауып алу әдісі (оңтайлы іздеу)"
      }
    ],
    correctOptionIds: [
      "db-t11-b42-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b43",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі Page Split (беттің жарылуы) оқиғасы неліктен туындайды?",
    options: [
      {
        id: "db-t11-b43-op1",
        text: "Кластерленген индекс бойынша жаңа жол енгізілгенде бетте бос орын жетіспегендіктен жаңа бет құрылып, деректер көшірілгенде"
      },
      {
        id: "db-t11-b43-op2",
        text: "Дерекқор файлы дискіде жарылғанда"
      },
      {
        id: "db-t11-b43-op3",
        text: "Процессордың ядролары шамадан тыс жүктелгенде"
      },
      {
        id: "db-t11-b43-op4",
        text: "Транзакция журналы толған кезде"
      },
      {
        id: "db-t11-b43-op5",
        text: "SQL Server Agent тапсырмаларын, ескертулерін, тарихын және резервтік көшірмелер журналдарын басқару үшін"
      },
      {
        id: "db-t11-b43-op6",
        text: "Бір уақытта көптеген желілік ағындар TempDB-дегі жүйелік беттерді (GAM, SGAM, PFS) бөлісуге тырысқанда (allocation bottleneck)"
      },
      {
        id: "db-t11-b43-op7",
        text: "Процессор мен жедел жады буферлері"
      },
      {
        id: "db-t11-b43-op8",
        text: "Index Filter"
      }
    ],
    correctOptionIds: [
      "db-t11-b43-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b44",
    subjectId: SubjectId.DB,
    text: "Page Split оқиғасының негізгі кемшілігі қандай?",
    options: [
      {
        id: "db-t11-b44-op1",
        text: "Дискінің фрагментациясын арттырады және деректерді жазу жылдамдығын төмендетеді"
      },
      {
        id: "db-t11-b44-op2",
        text: "Дерекқордың толық өшіп қалуына әкеледі"
      },
      {
        id: "db-t11-b44-op3",
        text: "Индекстерді жарамсыз етеді"
      },
      {
        id: "db-t11-b44-op4",
        text: "Сұраныстардың нәтижелерін өзгертеді"
      },
      {
        id: "db-t11-b44-op5",
        text: "Extent (Экстент), өлшемі 64 KB"
      },
      {
        id: "db-t11-b44-op6",
        text: "Кесте құрылымының нұсқаларын бақылау үшін"
      },
      {
        id: "db-t11-b44-op7",
        text: "Кестедегі деректерді индекстің кілті бойынша физикалық түрде сұрыптап сақтайды (әр кестеде тек біреу ғана болады)"
      },
      {
        id: "db-t11-b44-op8",
        text: "Пайдаланушылардың парольдерін бұғаттау"
      }
    ],
    correctOptionIds: [
      "db-t11-b44-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b45",
    subjectId: SubjectId.DB,
    text: "Page Split-ті азайту үшін индексті құру кезінде қандай параметрді баптау ұсынылады?",
    options: [
      {
        id: "db-t11-b45-op1",
        text: "Fill Factor (толтыру коэффициенті – беттерде алдын ала бос орын қалдыру пайызы)"
      },
      {
        id: "db-t11-b45-op2",
        text: "MAXDOP"
      },
      {
        id: "db-t11-b45-op3",
        text: "Recovery Model"
      },
      {
        id: "db-t11-b45-op4",
        text: "Page Size"
      },
      {
        id: "db-t11-b45-op5",
        text: "Пайдаланушылардың дерекқорға кіру құқықтарын басқару"
      },
      {
        id: "db-t11-b45-op6",
        text: "Дерекқор автоматты түрде Read-only күйіне ауысады"
      },
      {
        id: "db-t11-b45-op7",
        text: "Дискілік файл топтары (filegroups)"
      },
      {
        id: "db-t11-b45-op8",
        text: "Деректердің қауіпсіздігін арттырады"
      }
    ],
    correctOptionIds: [
      "db-t11-b45-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b46",
    subjectId: SubjectId.DB,
    text: "Fill Factor = 80 мәні нені білдіреді?",
    options: [
      {
        id: "db-t11-b46-op1",
        text: "Индекс құрылған кезде әрбір парақтың 80%-ы деректермен толтырылып, 20%-ы жаңа жазбаларға бос орын ретінде қалдырылады"
      },
      {
        id: "db-t11-b46-op2",
        text: "Индекс тек 80 секунд ішінде жұмыс істейді"
      },
      {
        id: "db-t11-b46-op3",
        text: "Кестенің тек 80 жолы индекстеледі"
      },
      {
        id: "db-t11-b46-op4",
        text: "Дерекқордың өнімділігі 80%-ға артады"
      },
      {
        id: "db-t11-b46-op5",
        text: "TempDB дерекқорының жедел жадында және қажет болса дискісінде"
      },
      {
        id: "db-t11-b46-op6",
        text: "Сұранысты дискіге жазу кезінде"
      },
      {
        id: "db-t11-b46-op7",
        text: "Транзакция журналы толғанда"
      },
      {
        id: "db-t11-b46-op8",
        text: ".mdf (Primary Data File)"
      }
    ],
    correctOptionIds: [
      "db-t11-b46-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b47",
    subjectId: SubjectId.DB,
    text: "Algebrizer (немесе Binder) сұранысты өңдеудің қай кезеңінде жұмыс істейді?",
    options: [
      {
        id: "db-t11-b47-op1",
        text: "Синтаксистік талдаудан (parsing) кейін, сұраныстағы нысандар мен бағандардың бар-жоғын тексеріп, семантикалық талдау жасайды"
      },
      {
        id: "db-t11-b47-op2",
        text: "Сұранысты дискіге жазу кезінде"
      },
      {
        id: "db-t11-b47-op3",
        text: "Buffer Pool жадын босату кезінде"
      },
      {
        id: "db-t11-b47-op4",
        text: "Орындалу жоспарын тікелей орындау кезінде"
      },
      {
        id: "db-t11-b47-op5",
        text: "Индекстердің құрылымын өзгерту үшін"
      },
      {
        id: "db-t11-b47-op6",
        text: "Максимум 249"
      },
      {
        id: "db-t11-b47-op7",
        text: "Write-Ahead Logging (WAL)"
      },
      {
        id: "db-t11-b47-op8",
        text: "8060 байт"
      }
    ],
    correctOptionIds: [
      "db-t11-b47-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b48",
    subjectId: SubjectId.DB,
    text: "Query Execution Engine (Сұраныстарды орындаушы) қандай қызмет атқарады?",
    options: [
      {
        id: "db-t11-b48-op1",
        text: "Оңтайландырғыш ұсынған орындалу жоспарын тікелей іске асырып, Storage Engine-нен деректерді сұрайды"
      },
      {
        id: "db-t11-b48-op2",
        text: "SQL сұранысын тексереді және қателерді түзетеді"
      },
      {
        id: "db-t11-b48-op3",
        text: "Деректерді дискіге физикалық түрде сақтайды"
      },
      {
        id: "db-t11-b48-op4",
        text: "Индексті reorganise жасайды"
      },
      {
        id: "db-t11-b48-op5",
        text: "Дерекқорындағы әрбір беттің бос орын мөлшері және бөліну күйі туралы ақпаратты сақтау"
      },
      {
        id: "db-t11-b48-op6",
        text: "Тек оқу режимінде жұмыс істейтін жүйелік индекс"
      },
      {
        id: "db-t11-b48-op7",
        text: "Экстент (Extent), көлемі 64 КБ"
      },
      {
        id: "db-t11-b48-op8",
        text: "Ең кіші сақтау беті"
      }
    ],
    correctOptionIds: [
      "db-t11-b48-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b49",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі Access Methods (Қол жеткізу әдістері) рөлі қандай?",
    options: [
      {
        id: "db-t11-b49-op1",
        text: "Деректер мен индекстерді оқу/жазу үшін сұраныстар құру және беттерді Buffer Manager-нен сұрау"
      },
      {
        id: "db-t11-b49-op2",
        text: "Пайдаланушылардың дерекқорға кіру құқықтарын басқару"
      },
      {
        id: "db-t11-b49-op3",
        text: "Желілік қосылуларды бақылау"
      },
      {
        id: "db-t11-b49-op4",
        text: "Резервтік көшірме жасау жолдарын анықтау"
      },
      {
        id: "db-t11-b49-op5",
        text: "Кестені TRUNCATE жасау"
      },
      {
        id: "db-t11-b49-op6",
        text: ".log"
      },
      {
        id: "db-t11-b49-op7",
        text: "Транзакциялар журналына жазылады"
      },
      {
        id: "db-t11-b49-op8",
        text: "Кластерленген индекс (Clustered Index) құру керек"
      }
    ],
    correctOptionIds: [
      "db-t11-b49-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b50",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі Lock Manager (Бұғаттау реттегіші) не үшін жауапты?",
    options: [
      {
        id: "db-t11-b50-op1",
        text: "Транзакциялардың оқшаулануын (ACID) қамтамасыз ету үшін кестелерге, беттерге немесе жолдарға бұғаттаулар (locks) қою"
      },
      {
        id: "db-t11-b50-op2",
        text: "Дерекқордың файлдарын жауып тастау"
      },
      {
        id: "db-t11-b50-op3",
        text: "Сервер процессорын өшіру"
      },
      {
        id: "db-t11-b50-op4",
        text: "Пайдаланушылардың парольдерін бұғаттау"
      },
      {
        id: "db-t11-b50-op5",
        text: "Жаңадан құрылатын кез келген дерекқор үшін шаблон (үлгі) ретінде"
      },
      {
        id: "db-t11-b50-op6",
        text: "Жүйелік процедураларды нұсқалау үшін"
      },
      {
        id: "db-t11-b50-op7",
        text: "Транзакциялар өшіріледі"
      },
      {
        id: "db-t11-b50-op8",
        text: "Disk cache"
      }
    ],
    correctOptionIds: [
      "db-t11-b50-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b51",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 'Spill to TempDB' оқиғасы қашан туындайды?",
    options: [
      {
        id: "db-t11-b51-op1",
        text: "Сұранысты орындауға (мысалы, сұрыптау немесе хэш қосылу үшін) жедел жад (RAM) жетіспегендіктен, деректер уақытша TempDB-ге жазылғанда"
      },
      {
        id: "db-t11-b51-op2",
        text: "Транзакция журналы толған кезде"
      },
      {
        id: "db-t11-b51-op3",
        text: "TempDB дерекқоры автоматты түрде өшірілгенде"
      },
      {
        id: "db-t11-b51-op4",
        text: "Heap кестесінде индекстер тым көп болғанда"
      },
      {
        id: "db-t11-b51-op5",
        text: "Қосымша деректер файлы"
      },
      {
        id: "db-t11-b51-op6",
        text: "Транзакцияларды мүлдем жазбайды"
      },
      {
        id: "db-t11-b51-op7",
        text: "Өте жылдам оқылатын уақытша кесте"
      },
      {
        id: "db-t11-b51-op8",
        text: "Автоматты түрде толығымен тазартылып, модель (model) дерекқоры негізінде жаңадан құрылады"
      }
    ],
    correctOptionIds: [
      "db-t11-b51-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "8fd65afa-ec9f-4ff2-bc0b-37c3a15e2213",
    subjectId: SubjectId.DB,
    text: "Index Reorganize (Индексті қайта ұйымдастыру) мен Index Rebuild (Индексті қайта құру) арасындағы басты айырмашылық қандай?",
    options: [
      {
        id: "aa647981-6005-4615-ac63-8f73a374eaf5",
        text: "Reorganize индекстің жапырақ беттерін желіде (online) реттейді, ал Rebuild индексті толығымен өшіріп қайта құрады (offline/online)"
      },
      {
        id: "360fb7ec-c96e-4683-bffc-cdf9bbfc0a99",
        text: "Rebuild тек қана сандар үшін қолданылады"
      },
      {
        id: "5dacd606-3a67-423f-a012-961007d3f07b",
        text: "Reorganize индексті толық жояды"
      },
      {
        id: "b3d7e092-3131-4900-96e9-5fb434d57da4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "c2fd6abc-7c65-4a2f-8e47-9686f2b7b105",
        text: "Recovery Model"
      },
      {
        id: "21e48a54-a3a2-4ca0-983b-9639a0069304",
        text: "CHECK шектеуін қосу арқылы"
      },
      {
        id: "c8735753-c394-4c6a-a901-1361d9008216",
        text: "Иә, журнал мүлдем жабылып қалады"
      },
      {
        id: "1d96f03d-cc52-4c02-bcda-3f74b4d9fd6f",
        text: "Heap кестесінде индекстер тым көп болғанда"
      }
    ],
    correctOptionIds: [
      "aa647981-6005-4615-ac63-8f73a374eaf5"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b52",
    subjectId: SubjectId.DB,
    text: "Индекстің фрагментациясы 30%-дан асқанда қай әрекет ұсынылады?",
    options: [
      {
        id: "db-t11-b52-op1",
        text: "Index Rebuild"
      },
      {
        id: "db-t11-b52-op2",
        text: "Index Reorganize"
      },
      {
        id: "db-t11-b52-op3",
        text: "Индексті өшіру"
      },
      {
        id: "db-t11-b52-op4",
        text: "Кестені TRUNCATE жасау"
      },
      {
        id: "db-t11-b52-op5",
        text: "Қай экстенттер қазір аралас (Mixed) күйде екенін және оларда кем дегенде бір бос бет бар-жоғын анықтау үшін"
      },
      {
        id: "db-t11-b52-op6",
        text: "Кластерленген индекстің кілті (Clustered Index Key)"
      },
      {
        id: "db-t11-b52-op7",
        text: "Кестелердің санын азайту"
      },
      {
        id: "db-t11-b52-op8",
        text: "Кестедегі біріншілік кілттерді сақтау"
      }
    ],
    correctOptionIds: [
      "db-t11-b52-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b53",
    subjectId: SubjectId.DB,
    text: "Индекстің фрагментациясы 5% бен 30% аралығында болғанда қай әрекет ұсынылады?",
    options: [
      {
        id: "db-t11-b53-op1",
        text: "Index Reorganize"
      },
      {
        id: "db-t11-b53-op2",
        text: "Index Rebuild"
      },
      {
        id: "db-t11-b53-op3",
        text: "Индексті толық өшіру"
      },
      {
        id: "db-t11-b53-op4",
        text: "Жаңа Clustered Index құру"
      },
      {
        id: "db-t11-b53-op5",
        text: "Журнал файлы мүлдем өзгермейді"
      },
      {
        id: "db-t11-b53-op6",
        text: "Дискідегі уақытша файлға көшіріледі"
      },
      {
        id: "db-t11-b53-op7",
        text: "Оңтайландырғыштың процедураны алғаш рет орындағандағы параметр мәніне негіздеп орындалу жоспарын құруы және кейін басқа параметрлер үшін де сол жоспарды тиімсіз қолдануы"
      },
      {
        id: "db-t11-b53-op8",
        text: "Әрбір 512 беттен кейін"
      }
    ],
    correctOptionIds: [
      "db-t11-b53-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b54",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 'Statistics' (Статистика) нысаны не үшін қажет?",
    options: [
      {
        id: "db-t11-b54-op1",
        text: "Бағандардағы деректердің таралуын бағалау және Query Optimizer-ге ең оңтайлы орындалу жоспарын таңдауға көмектесу үшін"
      },
      {
        id: "db-t11-b54-op2",
        text: "Сервердегі пайдаланушылардың жалпы санын есептеу үшін"
      },
      {
        id: "db-t11-b54-op3",
        text: "Дерекқордың өлшемін бақылау үшін"
      },
      {
        id: "db-t11-b54-op4",
        text: "Резервтік көшірмелердің сәттілік пайызын анықтау үшін"
      },
      {
        id: "db-t11-b54-op5",
        text: "Дерекқордың өнімділігі 80%-ға артады"
      },
      {
        id: "db-t11-b54-op6",
        text: "Ешқандай пішімде сақталмайды, бірден жойылады"
      },
      {
        id: "db-t11-b54-op7",
        text: "Buffer Manager"
      },
      {
        id: "db-t11-b54-op8",
        text: "Жүйелік процедураларды нұсқалау үшін"
      }
    ],
    correctOptionIds: [
      "db-t11-b54-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b55",
    subjectId: SubjectId.DB,
    text: "Статистика ескірген жағдайда сұраныстарда қандай мәселе туындауы мүмкін?",
    options: [
      {
        id: "db-t11-b55-op1",
        text: "Оңтайландырғыш дұрыс емес (баяу) орындалу жоспарын таңдауы мүмкін (мысалы, Index Seek орнына Table Scan жасауы мүмкін)"
      },
      {
        id: "db-t11-b55-op2",
        text: "Деректер кестеден өшіп қалуы мүмкін"
      },
      {
        id: "db-t11-b55-op3",
        text: "Дерекқор автоматты түрде Read-only күйіне ауысады"
      },
      {
        id: "db-t11-b55-op4",
        text: "Жаңа деректер қосылмай қалады"
      },
      {
        id: "db-t11-b55-op5",
        text: "Disk cache"
      },
      {
        id: "db-t11-b55-op6",
        text: "Тек қана мәтіндік файл түрінде"
      },
      {
        id: "db-t11-b55-op7",
        text: "Query Executor"
      },
      {
        id: "db-t11-b55-op8",
        text: "Lazy Writing"
      }
    ],
    correctOptionIds: [
      "db-t11-b55-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b56",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 'Index Seek' термині нені білдіреді?",
    options: [
      {
        id: "db-t11-b56-op1",
        text: "Индекс ағашы арқылы нақты қажетті жолдарды өте жылдам тауып алу әдісі (оңтайлы іздеу)"
      },
      {
        id: "db-t11-b56-op2",
        text: "Индекстің барлық беттерін басынан аяғына дейін толық оқу"
      },
      {
        id: "db-t11-b56-op3",
        text: "Индекстегі қателерді іздеу процесі"
      },
      {
        id: "db-t11-b56-op4",
        text: "Жаңадан индекс құру командасы"
      },
      {
        id: "db-t11-b56-op5",
        text: "Индекстерді алдын ала оқу әдісі"
      },
      {
        id: "db-t11-b56-op6",
        text: "Блок (Block), көлемі 4 КБ"
      },
      {
        id: "db-t11-b56-op7",
        text: "Алдыңғы күйінен қалпына келтіріледі"
      },
      {
        id: "db-t11-b56-op8",
        text: "Page Size"
      }
    ],
    correctOptionIds: [
      "db-t11-b56-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b57",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 'Index Scan' термині нені білдіреді?",
    options: [
      {
        id: "db-t11-b57-op1",
        text: "Индекстің барлық беттерін басынан аяғына дейін толық оқып шығу (іздеу шарты тым кең немесе индекс тиімсіз болғанда)"
      },
      {
        id: "db-t11-b57-op2",
        text: "Индекс ағашы бойынша нақты қажетті жолдарды оңтайлы іздеу"
      },
      {
        id: "db-t11-b57-op3",
        text: "Индекстің физикалық бүлінгенін тексеру"
      },
      {
        id: "db-t11-b57-op4",
        text: "Индексті дискіден жою"
      },
      {
        id: "db-t11-b57-op5",
        text: "TempDB файлының дискідегі орны таусылғанда"
      },
      {
        id: "db-t11-b57-op6",
        text: "Әрбір 512 беттен кейін"
      },
      {
        id: "db-t11-b57-op7",
        text: "Индекс тек 80 секунд ішінде жұмыс істейді"
      },
      {
        id: "db-t11-b57-op8",
        text: "Segment (Сегмент)"
      }
    ],
    correctOptionIds: [
      "db-t11-b57-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b58",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 'Table Scan' термині нені білдіреді?",
    options: [
      {
        id: "db-t11-b58-op1",
        text: "Heap кестесінің барлық деректер беттерін басынан аяғына дейін толық оқу (индекс жоқ болғанда)"
      },
      {
        id: "db-t11-b58-op2",
        text: "Кестедегі біріншілік кілтті іздеу"
      },
      {
        id: "db-t11-b58-op3",
        text: "Кестенің құрылымын өзгерту"
      },
      {
        id: "db-t11-b58-op4",
        text: "Кестені басқа серверге көшіру"
      },
      {
        id: "db-t11-b58-op5",
        text: "Еш жерде орналаспайды, бірден өшіріледі"
      },
      {
        id: "db-t11-b58-op6",
        text: "Синтаксистік талдаудан (parsing) кейін, сұраныстағы нысандар мен бағандардың бар-жоғын тексеріп, семантикалық талдау жасайды"
      },
      {
        id: "db-t11-b58-op7",
        text: "Резервтік көшірме жасау жолдарын анықтау"
      },
      {
        id: "db-t11-b58-op8",
        text: "Уақытша кестелерді автоматты түрде өшіру үшін"
      }
    ],
    correctOptionIds: [
      "db-t11-b58-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b59",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі RID Lookup оқиғасы қашан орын алады?",
    options: [
      {
        id: "db-t11-b59-op1",
        text: "Кластерленбеген индекс арқылы табылған жолдың басқа бағандарын алу үшін Heap кестесіне тікелей сілтеме (RID) арқылы жүгінгенде"
      },
      {
        id: "db-t11-b59-op2",
        text: "Бастапқы кілт бұзылған кезде"
      },
      {
        id: "db-t11-b59-op3",
        text: "Жаңа жол TempDB-ге жазылғанда"
      },
      {
        id: "db-t11-b59-op4",
        text: "Транзакция журналы толғанда"
      },
      {
        id: "db-t11-b59-op5",
        text: "Индексті дискіден жою"
      },
      {
        id: "db-t11-b59-op6",
        text: "Әрбір 51123 беттен кейін (шамамен 4 ГБ деректерді қамтиды)"
      },
      {
        id: "db-t11-b59-op7",
        text: "Дерекқордың резервтік көшірмелерін орындау"
      },
      {
        id: "db-t11-b59-op8",
        text: "Жүйелік кестелердің жалпы жиынтығы"
      }
    ],
    correctOptionIds: [
      "db-t11-b59-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b60",
    subjectId: SubjectId.DB,
    text: "Key Lookup оқиғасы қашан орын алады?",
    options: [
      {
        id: "db-t11-b60-op1",
        text: "Кластерленбеген индекс арқылы табылған жолдың басқа бағандарын алу үшін кластерленген индекс кілті арқылы негізгі кестеге жүгінгенде"
      },
      {
        id: "db-t11-b60-op2",
        text: "Heap кестесінде индекстер мүлдем жоқ болғанда"
      },
      {
        id: "db-t11-b60-op3",
        text: "Дерекқор файлы өшірілгенде"
      },
      {
        id: "db-t11-b60-op4",
        text: "WAL принципі бұзылғанда"
      },
      {
        id: "db-t11-b60-op5",
        text: "RID (Row Identifier)"
      },
      {
        id: "db-t11-b60-op6",
        text: "Жүйені тоқтатып тұрады"
      },
      {
        id: "db-t11-b60-op7",
        text: "Сұраныстардың синтаксисін оңтайландырады"
      },
      {
        id: "db-t11-b60-op8",
        text: "Файл түрінде дискінің басқа жерінде сақталады"
      }
    ],
    correctOptionIds: [
      "db-t11-b60-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "4c2377d4-de79-4fc3-ae18-d2ccad41d2e7",
    subjectId: SubjectId.DB,
    text: "Key Lookup немесе RID Lookup оқиғаларын болдырмау үшін кластерленбеген индекске қосымша бағандарды қалай қосуға болады?",
    options: [
      {
        id: "5f3ff839-dc2c-4f35-94d4-e969fbe48bcb",
        text: "INCLUDE сөйлемін қолдану арқылы (Covering Index)"
      },
      {
        id: "a2d98619-7ae6-4bff-b614-953b231db8b0",
        text: "Жаңа Clustered Index құру арқылы"
      },
      {
        id: "91330f1b-1f2e-455f-93ec-4a9677d9208b",
        text: "CHECK шектеуін қосу арқылы"
      },
      {
        id: "22aecc86-50ea-430c-a156-df278b736e38",
        text: "Индексті reorganise жасау арқылы"
      },
      {
        id: "1a3bb8d5-e28e-4d52-8651-ee5ca99ee8a7",
        text: "Кестені толық тазарту керек"
      },
      {
        id: "cce7bca9-e0ba-4546-9436-1a3e7c1952fa",
        text: "TempDB файлдарының санын азайту"
      },
      {
        id: "d4c025ba-408c-494c-b792-68d33d2ce107",
        text: "Page Size"
      },
      {
        id: "6081858a-ba07-4328-928d-3b0de3638a03",
        text: "Транзакцияларды қалпына келтіру жылдамдығын бақылау"
      }
    ],
    correctOptionIds: [
      "5f3ff839-dc2c-4f35-94d4-e969fbe48bcb"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b61",
    subjectId: SubjectId.DB,
    text: "Covering Index (жабушы индекс) деген не?",
    options: [
      {
        id: "db-t11-b61-op1",
        text: "Сұранысқа қажетті барлық бағандарды өзінде (немесе INCLUDE бөлімінде) сақтайтын, негізгі кестеге жүгінуді қажет етпейтін индекс"
      },
      {
        id: "db-t11-b61-op2",
        text: "Кестенің барлық бағандарын толық қамтитын бастапқы кілт"
      },
      {
        id: "db-t11-b61-op3",
        text: "TempDB дерекқорындағы уақытша индекс"
      },
      {
        id: "db-t11-b61-op4",
        text: "Тек оқу режимінде жұмыс істейтін жүйелік индекс"
      },
      {
        id: "db-t11-b61-op5",
        text: "Page Size"
      },
      {
        id: "db-t11-b61-op6",
        text: "Транзакцияларды мүлдем жазбайды"
      },
      {
        id: "db-t11-b61-op7",
        text: "Жолды автоматты түрде қысқартып қиып тастайды"
      },
      {
        id: "db-t11-b61-op8",
        text: "64 байт"
      }
    ],
    correctOptionIds: [
      "db-t11-b61-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1bddb595-1438-45c0-a74f-840c9e394e8b",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі TempDB-де кездесетін және өнімділікті төмендететін PAGELATCH ақаулығы неден туындайды?",
    options: [
      {
        id: "272cccdd-c48c-49ed-a2cc-ef666a550adf",
        text: "Бір уақытта көптеген желілік ағындар TempDB-дегі жүйелік беттерді (GAM, SGAM, PFS) бөлісуге тырысқанда (allocation bottleneck)"
      },
      {
        id: "f9fc44f7-343a-4ff3-ab0c-7aae2ed0f4ad",
        text: "TempDB файлының дискідегі орны таусылғанда"
      },
      {
        id: "ba13db5b-ff92-47c1-bb61-6ea89287d4d3",
        text: "Уақытша кестелер тым үлкен болып кеткенде"
      },
      {
        id: "a08d2ff9-f9e3-4b58-8d5e-d737649fbb59",
        text: "Индекстер Rebuild жасалып жатқанда"
      },
      {
        id: "31659943-d103-4d34-a27e-4c8e89c4ba32",
        text: "Жүйелік ақпаратты толық сақтау үшін"
      },
      {
        id: "20c3ebc2-aacb-463f-b80d-85586c0cfceb",
        text: ".ndf (Secondary Data File)"
      },
      {
        id: "06c009bf-3e26-473b-ba44-1350091dab45",
        text: "Дерекқордың файлдарын жауып тастау"
      },
      {
        id: "8275be55-a189-4782-a514-43f2e0ca0ca4",
        text: "Жүйелік Master дерекқорына бөлініп жазылады"
      }
    ],
    correctOptionIds: [
      "272cccdd-c48c-49ed-a2cc-ef666a550adf"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b62",
    subjectId: SubjectId.DB,
    text: "TempDB allocation bottleneck ақаулығын азайту үшін қандай әкімшілік шара қолданылады?",
    options: [
      {
        id: "db-t11-b62-op1",
        text: "TempDB деректер файлдарының санын процессор ядроларының санына сәйкестендіріп тең бөлу (әдетте 8 файлға дейін)"
      },
      {
        id: "db-t11-b62-op2",
        text: "TempDB-ді толығымен өшіру"
      },
      {
        id: "db-t11-b62-op3",
        text: "Жүйелік Master дерекқорын үлкейту"
      },
      {
        id: "db-t11-b62-op4",
        text: "Параллельдікті (MAXDOP) мүлдем сөндіру"
      },
      {
        id: "db-t11-b62-op5",
        text: "Pointer Offset"
      },
      {
        id: "db-t11-b62-op6",
        text: "Индекстің физикалық бүлінгенін тексеру"
      },
      {
        id: "db-t11-b62-op7",
        text: ".txt"
      },
      {
        id: "db-t11-b62-op8",
        text: "Транзакциялар өшіріледі"
      }
    ],
    correctOptionIds: [
      "db-t11-b62-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b63",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 'Parameter Sniffing' деген не?",
    options: [
      {
        id: "db-t11-b63-op1",
        text: "Оңтайландырғыштың процедураны алғаш рет орындағандағы параметр мәніне негіздеп орындалу жоспарын құруы және кейін басқа параметрлер үшін де сол жоспарды тиімсіз қолдануы"
      },
      {
        id: "db-t11-b63-op2",
        text: "Сұраныстың қателіктерін автоматты түрде іздеп табу механизмі"
      },
      {
        id: "db-t11-b63-op3",
        text: "Пайдаланушылардың құпия сөздерін тексеру әдісі"
      },
      {
        id: "db-t11-b63-op4",
        text: "Жүйе жадын тазарту процесі"
      },
      {
        id: "db-t11-b63-op5",
        text: "Өзгермейтін архивтік деректерді қорғау және резервтік көшірме жасау уақытын қысқарту үшін"
      },
      {
        id: "db-t11-b63-op6",
        text: "Heap кестесінде индекстер мүлдем жоқ болғанда"
      },
      {
        id: "db-t11-b63-op7",
        text: "Иә, толығымен өзгертеді"
      },
      {
        id: "db-t11-b63-op8",
        text: "RID (Row Identifier)"
      }
    ],
    correctOptionIds: [
      "db-t11-b63-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b64",
    subjectId: SubjectId.DB,
    text: "Parameter Sniffing мәселесін шешудің бір жолы қандай?",
    options: [
      {
        id: "db-t11-b64-op1",
        text: "Процедура ішінде RECOMPILE немесе OPTIMIZE FOR сұраныс нұсқаулықтарын қолдану"
      },
      {
        id: "db-t11-b64-op2",
        text: "Дерекқорды Simple Recovery моделіне ауыстыру"
      },
      {
        id: "db-t11-b64-op3",
        text: "TempDB файлдарының санын азайту"
      },
      {
        id: "db-t11-b64-op4",
        text: "Кластерленген индексті өшіру"
      },
      {
        id: "db-t11-b64-op5",
        text: "Индекстерді жарамсыз етеді"
      },
      {
        id: "db-t11-b64-op6",
        text: "Өлшемі екі есеге ұлғаяды"
      },
      {
        id: "db-t11-b64-op7",
        text: "Сұранысты дискіге жазу кезінде"
      },
      {
        id: "db-t11-b64-op8",
        text: "Сектор (Sector), көлемі 512 байт"
      }
    ],
    correctOptionIds: [
      "db-t11-b64-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "30e644b4-5c99-49d4-9a78-fa13b169728b",
    subjectId: SubjectId.DB,
    text: "SQL Server-де сұраныстар тарихын және орындалу жоспарларын автоматты түрде жинап, талдап тұратын мүмкіндік қалай аталады?",
    options: [
      {
        id: "e1387e79-692c-4d7c-bf74-0c06cc79027d",
        text: "Query Store"
      },
      {
        id: "50c5191e-99ec-49e9-8598-3466c8a22bfe",
        text: "Plan Cache"
      },
      {
        id: "0b61987b-50e7-48b9-9773-c69ae4c83b0a",
        text: "Buffer Pool"
      },
      {
        id: "5ac7519e-c37e-48c7-9d45-f008eb74dcfd",
        text: "Activity Monitor"
      },
      {
        id: "c0788816-84a8-4d57-bbdc-ba68a7ad5913",
        text: "Параллельдікті (MAXDOP) мүлдем сөндіру"
      },
      {
        id: "af14b227-8860-4192-bc6a-97045334ab7f",
        text: "Уақытша файл"
      },
      {
        id: "031f1c5c-551d-4b95-871e-761cfbd12757",
        text: "Бет (Page), көлемі 8 КБ"
      },
      {
        id: "0f038cbc-d656-4656-b5b0-14953c4f5e26",
        text: ".ldf (Log Data File)"
      }
    ],
    correctOptionIds: [
      "e1387e79-692c-4d7c-bf74-0c06cc79027d"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b65",
    subjectId: SubjectId.DB,
    text: "SQL Server сәулетіндегі 'Spinlock' деген не?",
    options: [
      {
        id: "db-t11-b65-op1",
        text: "Ресурсты босатқанша күту үшін процессор ядросын қысқа циклде айналдырып тұратын өте жылдам және жеңіл бұғаттау механизмі"
      },
      {
        id: "db-t11-b65-op2",
        text: "Кестелерді толық бұғаттайтын транзакция түрі"
      },
      {
        id: "db-t11-b65-op3",
        text: "SQL Server Agent-тің уақытша тоқтауы"
      },
      {
        id: "db-t11-b65-op4",
        text: "Дерекқор файлдарын қорғайтын жүйелік кілт"
      },
      {
        id: "db-t11-b65-op5",
        text: "Индекс ағашы арқылы нақты қажетті жолдарды өте жылдам тауып алу әдісі (оңтайлы іздеу)"
      },
      {
        id: "db-t11-b65-op6",
        text: "Деректер бетіне жасалған кез келген өзгеріс дискідегі деректер файлына (.mdf) жазылмас бұрын, міндетті түрде транзакция журналына (.ldf) жазылуы тиіс"
      },
      {
        id: "db-t11-b65-op7",
        text: "Дерекқордың файлдарын жауып тастау"
      },
      {
        id: "db-t11-b65-op8",
        text: "Деректерді тек оқуға болады (Read-only)"
      }
    ],
    correctOptionIds: [
      "db-t11-b65-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b66",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 'Latch' пен 'Lock' арасындағы басты айырмашылық қандай?",
    options: [
      {
        id: "db-t11-b66-op1",
        text: "Latch – жадтағы физикалық беттерді қорғайтын ішкі жылдам бұғаттау, ал Lock – транзакция деңгейінде логикалық деректерді қорғайтын бұғаттау"
      },
      {
        id: "db-t11-b66-op2",
        text: "Lock тек қана TempDB ішінде қолданылады"
      },
      {
        id: "db-t11-b66-op3",
        text: "Latch қолданушылар тарапынан қолмен қойылады"
      },
      {
        id: "db-t11-b66-op4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "db-t11-b66-op5",
        text: "Дерекқорды қалпына келтіруді өте жылдам және оңай етеді"
      },
      {
        id: "db-t11-b66-op6",
        text: "Әрбір 51123 беттен кейін (шамамен 4 ГБ деректерді қамтиды)"
      },
      {
        id: "db-t11-b66-op7",
        text: "32 байт"
      },
      {
        id: "db-t11-b66-op8",
        text: "Уақытша кестелерді, аралық сұраныс нәтижелерін және нұсқалар қоймасын (version store) сақтау"
      }
    ],
    correctOptionIds: [
      "db-t11-b66-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b67",
    subjectId: SubjectId.DB,
    text: "Page Free Space (PFS) беттері дерекқорында әрбір нешінші беттен кейін кездеседі?",
    options: [
      {
        id: "db-t11-b67-op1",
        text: "Әрбір 8088 беттен кейін"
      },
      {
        id: "db-t11-b67-op2",
        text: "Әрбір 1000 беттен кейін"
      },
      {
        id: "db-t11-b67-op3",
        text: "Әрбір 512 беттен кейін"
      },
      {
        id: "db-t11-b67-op4",
        text: "Әрбір 64 беттен кейін"
      },
      {
        id: "db-t11-b67-op5",
        text: "1024 байт"
      },
      {
        id: "db-t11-b67-op6",
        text: "Индекс тек 80 секунд ішінде жұмыс істейді"
      },
      {
        id: "db-t11-b67-op7",
        text: "Page Header"
      },
      {
        id: "db-t11-b67-op8",
        text: "Жаңа Clustered Index құру"
      }
    ],
    correctOptionIds: [
      "db-t11-b67-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "14e7a8e1-3d1a-4a30-864a-6723d765c267",
    subjectId: SubjectId.DB,
    text: "Global Allocation Map (GAM) және SGAM беттері дерекқорында әрбір нешінші беттен кейін орналасады?",
    options: [
      {
        id: "401900c5-c2fb-45c4-9e44-efa5a99ed691",
        text: "Әрбір 51123 беттен кейін (шамамен 4 ГБ деректерді қамтиды)"
      },
      {
        id: "66f081bf-3180-4e3b-8b13-351af9a563f7",
        text: "Әрбір 10000 беттен кейін"
      },
      {
        id: "8471b9af-ddee-4213-9da3-e4a36f944940",
        text: "Әрбір 8088 беттен кейін"
      },
      {
        id: "45538f72-f516-434e-976d-946f503f5c56",
        text: "Әрбір 100 беттен кейін"
      },
      {
        id: "c561e7fd-0797-43a4-95a5-802b6fdbf606",
        text: "Segment (Сегмент)"
      },
      {
        id: "8957eae7-4cc1-4336-bc0f-ee64b107e653",
        text: "Журнал мүлдем өзгермейді"
      },
      {
        id: "697f4ce7-8994-418a-9efe-11420d6bc6d8",
        text: "Thread Threshold"
      },
      {
        id: "1b260f33-5f95-45c2-a0bf-3c3f28d40e1e",
        text: "Қате шығарып, жазбаны мүлдем қоспайды"
      }
    ],
    correctOptionIds: [
      "401900c5-c2fb-45c4-9e44-efa5a99ed691"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c0f94012-1ad4-4b8f-8cea-450d0578b953",
    subjectId: SubjectId.DB,
    text: "SQL Server-де транзакцияның ACID қасиеттерін орындау үшін өзгерістерді журналға міндетті түрде бірінші жазатын ішкі процесс қалай аталады?",
    options: [
      {
        id: "9968d29f-acc6-4dcc-bab4-8b7fb64be284",
        text: "Log Writer (Log Writer Thread)"
      },
      {
        id: "bcd1d6f2-20f0-4fa0-a3b1-e1a821d96aba",
        text: "Lazy Reader"
      },
      {
        id: "42076986-7ee0-4b21-8b62-9d4c172960a2",
        text: "Checkpoint Manager"
      },
      {
        id: "7ad0981f-83d5-4430-9e51-3f2dfffe1f3d",
        text: "Buffer Manager"
      },
      {
        id: "0fcb8612-3ee1-4fa5-b38f-0fb36dc4ce39",
        text: "Сұранысты орындауға (мысалы, сұрыптау немесе хэш қосылу үшін) жедел жад (RAM) жетіспегендіктен, деректер уақытша TempDB-ге жазылғанда"
      },
      {
        id: "e4b221dc-abc7-4c56-9110-25c2e7ceddcb",
        text: "Пайдаланушылардың құпия сөздерін тексеру әдісі"
      },
      {
        id: "0bac63d3-986d-4d3c-aba1-c174396881e8",
        text: "Ол бастапқы деректер файлы (Primary Data File) болып табылады және жүйелік ақпаратты, кестелерді сақтайды"
      },
      {
        id: "d821e703-9c06-4dea-9ed5-ddb1cd40b280",
        text: "Жаңадан индекс құру командасы"
      }
    ],
    correctOptionIds: [
      "9968d29f-acc6-4dcc-bab4-8b7fb64be284"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b68",
    subjectId: SubjectId.DB,
    text: "TempDB-дегі уақытша кестелер (#temp) қай жерде сақталады?",
    options: [
      {
        id: "db-t11-b68-op1",
        text: "TempDB дерекқорының жедел жадында және қажет болса дискісінде"
      },
      {
        id: "db-t11-b68-op2",
        text: "Master дерекқорының ішінде"
      },
      {
        id: "db-t11-b68-op3",
        text: "Пайдаланушының жеке компьютерінде"
      },
      {
        id: "db-t11-b68-op4",
        text: "Транзакциялар журналында ғана"
      },
      {
        id: "db-t11-b68-op5",
        text: "Оңтайландырғыш ұсынған орындалу жоспарын тікелей іске асырып, Storage Engine-нен деректерді сұрайды"
      },
      {
        id: "db-t11-b68-op6",
        text: "Сақтық көшірмелердің нұсқаларын сақтау үшін"
      },
      {
        id: "db-t11-b68-op7",
        text: "Сыртқы кілттерді өшіру керек"
      },
      {
        id: "db-t11-b68-op8",
        text: ".mdf"
      }
    ],
    correctOptionIds: [
      "db-t11-b68-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b69",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 'Partitioned Table' (секцияланған кесте) деректері дискіде қалай бөлінеді?",
    options: [
      {
        id: "db-t11-b69-op1",
        text: "Partition Scheme (секциялау схемасы) арқылы әртүрлі файлдар топтарына сәйкестендіріліп бөлінеді"
      },
      {
        id: "db-t11-b69-op2",
        text: "Олар тек қана бір файл ішінде сақталады"
      },
      {
        id: "db-t11-b69-op3",
        text: "Жүйелік Master дерекқорына бөлініп жазылады"
      },
      {
        id: "db-t11-b69-op4",
        text: "Индекстерді өшіру арқылы бөлінеді"
      },
      {
        id: "db-t11-b69-op5",
        text: "96 байт"
      },
      {
        id: "db-t11-b69-op6",
        text: "Дискінің фрагментациясын арттырады және деректерді жазу жылдамдығын төмендетеді"
      },
      {
        id: "db-t11-b69-op7",
        text: "Сұранысты орындауға (мысалы, сұрыптау немесе хэш қосылу үшін) жедел жад (RAM) жетіспегендіктен, деректер уақытша TempDB-ге жазылғанда"
      },
      {
        id: "db-t11-b69-op8",
        text: "MAXDOP (Maximum Degree of Parallelism)"
      }
    ],
    correctOptionIds: [
      "db-t11-b69-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b70",
    subjectId: SubjectId.DB,
    text: "Секциялау шекараларын (мысалы, дата диапазондарын) анықтайтын дерекқор нысаны қалай аталады?",
    options: [
      {
        id: "db-t11-b70-op1",
        text: "Partition Function (секциялау функциясы)"
      },
      {
        id: "db-t11-b70-op2",
        text: "Partition Scheme (секциялау схемасы)"
      },
      {
        id: "db-t11-b70-op3",
        text: "Boundary Constraint"
      },
      {
        id: "db-t11-b70-op4",
        text: "Index Filter"
      },
      {
        id: "db-t11-b70-op5",
        text: "Тек TempDB дерекқоры үшін жұмыс істейді"
      },
      {
        id: "db-t11-b70-op6",
        text: "Бастапқы кілт бұзылған кезде"
      },
      {
        id: "db-t11-b70-op7",
        text: "Әрбір 51123 беттен кейін (шамамен 4 ГБ деректерді қамтиды)"
      },
      {
        id: "db-t11-b70-op8",
        text: "Кестедегі деректерді индекстің кілті бойынша физикалық түрде сұрыптап сақтайды (әр кестеде тек біреу ғана болады)"
      }
    ],
    correctOptionIds: [
      "db-t11-b70-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ec7948df-3976-4e46-8155-840ab473bd69",
    subjectId: SubjectId.DB,
    text: "SQL Server-де параллель орындалу кезінде ағындарды үйлестіруге кететін уақытты реттейтін параметр қайсысы?",
    options: [
      {
        id: "97b3ccd0-ba4d-4355-a4a8-0843b5c86aec",
        text: "MAXDOP (Maximum Degree of Parallelism)"
      },
      {
        id: "8c6b355c-3619-415d-a819-fdd1173f6461",
        text: "Fill Factor"
      },
      {
        id: "f98a5b3d-9692-46dc-9620-5b1903dc37e0",
        text: "Cost Threshold"
      },
      {
        id: "9a0d22de-50ed-4dea-8258-eb588675ec54",
        text: "Buffer Limit"
      },
      {
        id: "4b279c92-bde6-4471-9f3a-aef3b8166b97",
        text: "1024 байт"
      },
      {
        id: "1b981486-ef84-4e6f-94e4-603716061c0d",
        text: "Журнал файлы мүлдем өзгермейді"
      },
      {
        id: "ba86ea89-1d0f-4023-85d6-03aeb1333509",
        text: ".mdf және .ldf физикалық файлдары"
      },
      {
        id: "d4b92685-c9a5-4960-9abe-b70ae70e9d14",
        text: "SQL Server Agent жұмысын басқару үшін"
      }
    ],
    correctOptionIds: [
      "97b3ccd0-ba4d-4355-a4a8-0843b5c86aec"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b71",
    subjectId: SubjectId.DB,
    text: "MAXDOP = 1 мәні нені білдіреді?",
    options: [
      {
        id: "db-t11-b71-op1",
        text: "Сұраныстар тек бір ғана процессорлық ағынмен (параллельдіксіз) орындалады"
      },
      {
        id: "db-t11-b71-op2",
        text: "Сұраныстар тек 1 секунд ішінде орындалады"
      },
      {
        id: "db-t11-b71-op3",
        text: "Кестеде тек 1 индекс қолданылады"
      },
      {
        id: "db-t11-b71-op4",
        text: "Дерекқорда тек 1 сессия жұмыс істей алады"
      },
      {
        id: "db-t11-b71-op5",
        text: "Жоқ, ол деректерге сілтеме жасайтын жеке құрылым ретінде сақталады"
      },
      {
        id: "db-t11-b71-op6",
        text: "Жүйенің қауіпсіздік ережелерін сақтау үшін"
      },
      {
        id: "db-t11-b71-op7",
        text: "SQL Server Agent жұмысын басқару үшін"
      },
      {
        id: "db-t11-b71-op8",
        text: "Сұраныстар тек түнде орындалады"
      }
    ],
    correctOptionIds: [
      "db-t11-b71-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b72",
    subjectId: SubjectId.DB,
    text: "SQL Server-де параллель орындалуды іске қосу шегін анықтайтын баптау қалай аталады?",
    options: [
      {
        id: "db-t11-b72-op1",
        text: "Cost Threshold for Parallelism"
      },
      {
        id: "db-t11-b72-op2",
        text: "MAXDOP Limit"
      },
      {
        id: "db-t11-b72-op3",
        text: "Thread Threshold"
      },
      {
        id: "db-t11-b72-op4",
        text: "Parallelism Boundary"
      },
      {
        id: "db-t11-b72-op5",
        text: "8192 байт"
      },
      {
        id: "db-t11-b72-op6",
        text: "Row-Overflow Data беттеріне ауыстырады және негізгі бетте оған сілтеме қалдырады"
      },
      {
        id: "db-t11-b72-op7",
        text: "Ақаулы және оқылмайтын бет"
      },
      {
        id: "db-t11-b72-op8",
        text: "Primary Data файл (.mdf)"
      }
    ],
    correctOptionIds: [
      "db-t11-b72-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3e82b0a4-96c9-4489-b7ca-1ef8300cc33d",
    subjectId: SubjectId.DB,
    text: "SQL Server-де деректерді жазу кезінде дискіге бірден жазбай, жадта өзгерту принципі қалай аталады?",
    options: [
      {
        id: "bcef6071-737f-4e43-8364-18e10b4b1cec",
        text: "Write-Ahead Logging (WAL)"
      },
      {
        id: "6256e7e8-c428-4790-9293-ee3f3cdb56d3",
        text: "Buffer Spilling"
      },
      {
        id: "9f0a72d2-2d78-4448-b8b5-126125ad4665",
        text: "Lazy Writing"
      },
      {
        id: "8339398f-85c0-4986-9f10-7313861f61fe",
        text: "Dirty Page Allocation"
      },
      {
        id: "90bdcb96-7a5a-4495-8445-828ab01b205f",
        text: "MAXDOP (Maximum Degree of Parallelism)"
      },
      {
        id: "83bf52f9-6177-4bf1-966f-a34736909958",
        text: "TempDB дерекқоры автоматты түрде өшірілгенде"
      },
      {
        id: "b3c2e2bd-1765-46ae-8328-e3b2f628f86d",
        text: "Резервтік көшірме жасау жолдарын анықтау"
      },
      {
        id: "12d88c2a-077f-496e-93d0-1c77da4e0524",
        text: "Bulk-Logged режимінде жаппай операциялар жасалғанда"
      }
    ],
    correctOptionIds: [
      "bcef6071-737f-4e43-8364-18e10b4b1cec"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b73",
    subjectId: SubjectId.DB,
    text: "TempDB дерекқорында 'version store' не үшін қолданылады?",
    options: [
      {
        id: "db-t11-b73-op1",
        text: "Snapshot Isolation (суреттік оқшаулау) режимінде деректердің ескі нұсқаларын оқушы транзакциялар үшін сақтап тұруға"
      },
      {
        id: "db-t11-b73-op2",
        text: "Кесте құрылымының нұсқаларын бақылау үшін"
      },
      {
        id: "db-t11-b73-op3",
        text: "Сақтық көшірмелердің нұсқаларын сақтау үшін"
      },
      {
        id: "db-t11-b73-op4",
        text: "Жүйелік процедураларды нұсқалау үшін"
      },
      {
        id: "db-t11-b73-op5",
        text: "Индекстің барлық беттерін басынан аяғына дейін толық оқу"
      },
      {
        id: "db-t11-b73-op6",
        text: "Индекс файлы"
      },
      {
        id: "db-t11-b73-op7",
        text: "Орындалу жоспарын тікелей орындау кезінде"
      },
      {
        id: "db-t11-b73-op8",
        text: "Дерекқордың өлшемін бақылау үшін"
      }
    ],
    correctOptionIds: [
      "db-t11-b73-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b74",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 'Heap' кестесінің кластерленген кестеден басты айырмашылығы қандай?",
    options: [
      {
        id: "db-t11-b74-op1",
        text: "Оның деректері ешқандай ретсіз, беттердің бос орындарына кездейсоқ жазылады (B-Tree құрылымы жоқ)"
      },
      {
        id: "db-t11-b74-op2",
        text: "Heap кестесі тек уақытша TempDB-де сақталады"
      },
      {
        id: "db-t11-b74-op3",
        text: "Heap кестесінде сыртқы кілттерді қолдануға болмайды"
      },
      {
        id: "db-t11-b74-op4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "db-t11-b74-op5",
        text: "Жоқ, бұл өте аз журналданатын жеңіл орындалатын процесс"
      },
      {
        id: "db-t11-b74-op6",
        text: "TempDB-ді автоматты тазарту үшін"
      },
      {
        id: "db-t11-b74-op7",
        text: "TempDB файлдарының санын реттейді"
      },
      {
        id: "db-t11-b74-op8",
        text: "Тек TempDB дерекқоры үшін жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "db-t11-b74-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b75",
    subjectId: SubjectId.DB,
    text: "Heap кестесінде жолдарды іздеуді жылдамдату үшін не істеу керек?",
    options: [
      {
        id: "db-t11-b75-op1",
        text: "Кластерленген индекс (Clustered Index) құру керек"
      },
      {
        id: "db-t11-b75-op2",
        text: "Кестені толық тазарту керек"
      },
      {
        id: "db-t11-b75-op3",
        text: "Сыртқы кілттерді өшіру керек"
      },
      {
        id: "db-t11-b75-op4",
        text: "Жаңа NDF файлын қосу керек"
      },
      {
        id: "db-t11-b75-op5",
        text: "# кесте_аты (бір решіткамен)"
      },
      {
        id: "db-t11-b75-op6",
        text: "Log Writer"
      },
      {
        id: "db-t11-b75-op7",
        text: "Кестелердің санын азайту"
      },
      {
        id: "db-t11-b75-op8",
        text: "Иә, тек бірінші рет құрылғанда ғана өзгертеді"
      }
    ],
    correctOptionIds: [
      "db-t11-b75-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "68c0a456-4c11-4962-9da6-5807ac92cbeb",
    subjectId: SubjectId.DB,
    text: "SQL Server-де индекстерді reorganise (қайта ұйымдастыру) жасағанда транзакциялық журнал (.ldf) қатты тола ма?",
    options: [
      {
        id: "fb35d312-1dda-4bae-832d-fd732cb0696d",
        text: "Жоқ, бұл өте аз журналданатын жеңіл орындалатын процесс"
      },
      {
        id: "3b817593-48ea-4f08-af21-19075f455c98",
        text: "Иә, Rebuild сияқты өте үлкен көлемде толады"
      },
      {
        id: "44b874ed-09e7-4d47-ae71-39e862607227",
        text: "Иә, журнал мүлдем жабылып қалады"
      },
      {
        id: "12c90f9e-6ed5-4eb9-be6d-309518cc3f45",
        text: "Журнал мүлдем өзгермейді"
      },
      {
        id: "f790d35a-9ca0-4f79-81c1-f177e996f787",
        text: "Блок (Block), көлемі 4 КБ"
      },
      {
        id: "01025c69-9487-4fa4-bf9b-598ce1b16c8e",
        text: "Файл топтары, көлемі 1 МБ"
      },
      {
        id: "a555bb8a-6702-4f06-a995-c3aaa05437e6",
        text: "Жаңа дерекқор файлын құрады"
      },
      {
        id: "6e261e08-99fd-4635-810c-f6540514bf29",
        text: "Қай экстенттердің бос екенін және қайсысы бөлінгенін (экстент деңгейінде) бақылау үшін"
      }
    ],
    correctOptionIds: [
      "fb35d312-1dda-4bae-832d-fd732cb0696d"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b76",
    subjectId: SubjectId.DB,
    text: "Index Rebuild жасағанда транзакциялық журнал қалай өзгереді?",
    options: [
      {
        id: "db-t11-b76-op1",
        text: "Көлемді деректер өзгергендіктен, журнал файлы өте жылдам үлкейіп кетуі мүмкін"
      },
      {
        id: "db-t11-b76-op2",
        text: "Журнал файлы мүлдем өзгермейді"
      },
      {
        id: "db-t11-b76-op3",
        text: "Журнал автоматты түрде өшіріледі"
      },
      {
        id: "db-t11-b76-op4",
        text: "Журналдың тек өлшемі кішірейеді"
      },
      {
        id: "db-t11-b76-op5",
        text: "Әрбір 512 беттен кейін"
      },
      {
        id: "db-t11-b76-op6",
        text: "Деректерді дискіге физикалық түрде сақтайды"
      },
      {
        id: "db-t11-b76-op7",
        text: "Dirty Page Allocation"
      },
      {
        id: "db-t11-b76-op8",
        text: "Buffer Manager"
      }
    ],
    correctOptionIds: [
      "db-t11-b76-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b77",
    subjectId: SubjectId.DB,
    text: "SQL Server-дегі 'Execution Plan' (Орындалу жоспары) қай пішімде сақталады және қарауға болады?",
    options: [
      {
        id: "db-t11-b77-op1",
        text: "XML пішімінде немесе графикалық схема түрінде"
      },
      {
        id: "db-t11-b77-op2",
        text: "Тек қана мәтіндік файл түрінде"
      },
      {
        id: "db-t11-b77-op3",
        text: "JSON немесе HTML түрінде"
      },
      {
        id: "db-t11-b77-op4",
        text: "Ешқандай пішімде сақталмайды, бірден жойылады"
      },
      {
        id: "db-t11-b77-op5",
        text: "Тек оқу режимінде жұмыс істейтін жүйелік индекс"
      },
      {
        id: "db-t11-b77-op6",
        text: "Қосымша деректер файлы"
      },
      {
        id: "db-t11-b77-op7",
        text: "Transaction Log файл (.ldf)"
      },
      {
        id: "db-t11-b77-op8",
        text: "Жедел жадтағы буферді босату үшін сирек қолданылатын лас беттерді (dirty pages) белсенді түрде дискіге жазады"
      }
    ],
    correctOptionIds: [
      "db-t11-b77-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b78",
    subjectId: SubjectId.DB,
    text: "SQL Server сәулетіндегі 'Buffer Manager' не істейді?",
    options: [
      {
        id: "db-t11-b78-op1",
        text: "Деректер беттерін дискіден жедел жадқа оқу және оларды жадтан дискіге жазу әрекеттерін басқарады"
      },
      {
        id: "db-t11-b78-op2",
        text: "Сұраныстардың синтаксисін оңтайландырады"
      },
      {
        id: "db-t11-b78-op3",
        text: "Транзакциялардың оқшаулануын бақылайды"
      },
      {
        id: "db-t11-b78-op4",
        text: "TempDB файлдарының санын реттейді"
      },
      {
        id: "db-t11-b78-op5",
        text: "Мүлдем өзгеріссіз қалады"
      },
      {
        id: "db-t11-b78-op6",
        text: "Index Rebuild"
      },
      {
        id: "db-t11-b78-op7",
        text: ".ldf"
      },
      {
        id: "db-t11-b78-op8",
        text: "96 байт"
      }
    ],
    correctOptionIds: [
      "db-t11-b78-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b79",
    subjectId: SubjectId.DB,
    text: "TempDB-дегі уақытша кестелердің жаһандық (Global) түрі қалай жазылады?",
    options: [
      {
        id: "db-t11-b79-op1",
        text: "## кесте_аты (екі решіткамен)"
      },
      {
        id: "db-t11-b79-op2",
        text: "# кесте_аты (бір решіткамен)"
      },
      {
        id: "db-t11-b79-op3",
        text: "temp_кесте_аты"
      },
      {
        id: "db-t11-b79-op4",
        text: "GLOBAL.кесте_аты"
      },
      {
        id: "db-t11-b79-op5",
        text: "Бағандардағы деректердің таралуын бағалау және Query Optimizer-ге ең оңтайлы орындалу жоспарын таңдауға көмектесу үшін"
      },
      {
        id: "db-t11-b79-op6",
        text: "Физикалық және логикалық"
      },
      {
        id: "db-t11-b79-op7",
        text: "Кластерленген индексі жоқ, деректері ретсіз сақталған кесте"
      },
      {
        id: "db-t11-b79-op8",
        text: "LOCAL.кесте_аты"
      }
    ],
    correctOptionIds: [
      "db-t11-b79-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t11-b80",
    subjectId: SubjectId.DB,
    text: "TempDB-дегі уақытша кестелердің локалды (Local) түрі қалай жазылады?",
    options: [
      {
        id: "db-t11-b80-op1",
        text: "# кесте_аты (бір решіткамен)"
      },
      {
        id: "db-t11-b80-op2",
        text: "## кесте_аты (екі решіткамен)"
      },
      {
        id: "db-t11-b80-op3",
        text: "LOCAL.кесте_аты"
      },
      {
        id: "db-t11-b80-op4",
        text: "temp.кесте_аты"
      },
      {
        id: "db-t11-b80-op5",
        text: "Кестедегі құрама кілттерді сақтау үшін"
      },
      {
        id: "db-t11-b80-op6",
        text: "Block (Блок), өлшемі 4 KB"
      },
      {
        id: "db-t11-b80-op7",
        text: "Тек TempDB дерекқоры үшін жұмыс істейді"
      },
      {
        id: "db-t11-b80-op8",
        text: "Call Stack"
      }
    ],
    correctOptionIds: [
      "db-t11-b80-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL Server архитектурасы",
    difficulty: Difficulty.MEDIUM
  }
];
