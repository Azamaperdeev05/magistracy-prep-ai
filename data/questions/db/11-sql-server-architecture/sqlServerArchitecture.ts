import { Question } from '../../../../types';

// db / SQL Server архитектурасы
export const db11SqlServerArchitectureQuestions = [
  {
    "id": "f3194844-ef59-430a-a3e9-04e70736d91f",
    "subjectId": "db",
    "text": "SQL Server-де деректерді сақтаудың ең кіші физикалық бірлігі қалай аталады және оның өлшемі қандай?",
    "options": [
      {
        "id": "49e9c9c4-e5ef-4003-af34-13c6ea81ec0c",
        "text": "Page (Бет), өлшемі 8 KB"
      },
      {
        "id": "3994742b-6ff5-40b1-9c5b-26a9c7a18e4f",
        "text": "Row (Жол), өлшемі 1 KB"
      },
      {
        "id": "74d84dd5-e34d-4f59-9ab1-bf9c988553e2",
        "text": "Extent (Экстент), өлшемі 64 KB"
      },
      {
        "id": "7d599a60-f3fb-4deb-859e-6163086e9e0c",
        "text": "Block (Блок), өлшемі 4 KB"
      },
      {
        "id": "14d4f4b1-e34d-4e28-84a7-852c93f528d7",
        "text": "Индекс файлы"
      },
      {
        "id": "2807e95d-e8d2-4ed0-95ac-50ac15845a7e",
        "text": "Оңтайландырғыштың процедураны алғаш рет орындағандағы параметр мәніне негіздеп орындалу жоспарын құруы және кейін басқа параметрлер үшін де сол жоспарды тиімсіз қолдануы"
      },
      {
        "id": "966f077f-af01-454c-b62a-65a5d9429428",
        "text": "Файл түрінде дискінің басқа жерінде сақталады"
      },
      {
        "id": "dba72393-b874-4872-9afe-daa3f715fb0b",
        "text": "Дерекқор файлдарын қорғайтын жүйелік кілт"
      }
    ],
    "correctOptionIds": [
      "49e9c9c4-e5ef-4003-af34-13c6ea81ec0c"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "hard"
  },
  {
    "id": "a1cab078-d96f-4634-afec-8635ec481554",
    "subjectId": "db",
    "text": "SQL Server физикалық сәулетіндегі 8 байланысқан Page-ден тұратын бірлік қалай аталады?",
    "options": [
      {
        "id": "688f77aa-2b8c-459b-8863-344391dba0cd",
        "text": "Extent (Экстент, 64 KB)"
      },
      {
        "id": "37076748-d840-4b38-8d08-b4b5af6bf955",
        "text": "Segment (Сегмент)"
      },
      {
        "id": "6663517f-fa96-4ff5-8ee2-36a9dd370d81",
        "text": "Filegroup (Файлдар тобы)"
      },
      {
        "id": "00123e7a-41be-49cb-8411-750c98b68676",
        "text": "Transaction Log (Транзакциялар журналы)"
      },
      {
        "id": "43a8d550-f6c3-4a6f-bf12-d9bde458181a",
        "text": "Жүйелік Master дерекқорына бөлініп жазылады"
      },
      {
        "id": "b941e43a-f598-414f-b428-068821f344e5",
        "text": "TempDB деректер файлдарының санын процессор ядроларының санына сәйкестендіріп тең бөлу (әдетте 8 файлға дейін)"
      },
      {
        "id": "13823b78-8947-4cb2-9ab4-7c59ab18be01",
        "text": "Деректер кестеден өшіп қалуы мүмкін"
      },
      {
        "id": "14085d5d-bef1-478b-8c60-5277a8ef41bb",
        "text": "Тек TempDB дерекқоры үшін жұмыс істейді"
      }
    ],
    "correctOptionIds": [
      "688f77aa-2b8c-459b-8863-344391dba0cd"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "b1510b4c-b358-4c59-a4a4-ce7088319ee0",
    "subjectId": "db",
    "text": "SQL Server дерекқорының логикалық құрылымына не жатады?",
    "options": [
      {
        "id": "41dac601-191b-4832-9eae-f51eed35bb18",
        "text": "Схемалар, кестелер, көріністер (views) және индекстер"
      },
      {
        "id": "cf4e4ec0-54cc-42f7-8144-c1516925c6dc",
        "text": ".mdf және .ldf физикалық файлдары"
      },
      {
        "id": "478ef0bd-915d-4908-b211-3aa2e4130cbf",
        "text": "Процессор мен жедел жады буферлері"
      },
      {
        "id": "5f23bae9-4244-4bda-9de0-a2f244fc1e34",
        "text": "Дискілік файл топтары (filegroups)"
      },
      {
        "id": "2c28bf48-1238-4b0a-84d2-5b8c7edb8c2b",
        "text": "Сұраныстар тек бір ғана процессорлық ағынмен (параллельдіксіз) орындалады"
      },
      {
        "id": "f7499a4a-6c89-4744-b5c8-5e58d3259533",
        "text": "Дерекқордың сақтық көшірмесін сақтайтын орын"
      },
      {
        "id": "cb83ae60-04c0-4c90-ae93-b34ea97869f3",
        "text": "Жаңа Clustered Index құру"
      },
      {
        "id": "6fe11f9c-029b-497a-8e43-c805ac3854dc",
        "text": "Кестелер мен индекстерді әртүрлі физикалық дискілерге орналастыру арқылы кіру/шығу (I/O) өнімділігін арттыру"
      }
    ],
    "correctOptionIds": [
      "41dac601-191b-4832-9eae-f51eed35bb18"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "49536ba2-4b3e-483e-a7e8-83c4890e1b66",
    "subjectId": "db",
    "text": "SQL Server-де транзакцияларды қалпына келтіру үшін қолданылатын және барлық өзгерістер жазылатын файл қалай аталады?",
    "options": [
      {
        "id": "22a17321-63f9-4af2-a27e-7b1e367c01d4",
        "text": "Transaction Log файл (.ldf)"
      },
      {
        "id": "41d115f5-9b77-414a-b704-a87ecc7222d4",
        "text": "Primary Data файл (.mdf)"
      },
      {
        "id": "7dc8bc17-1d1b-47e8-8a54-37593fb35fef",
        "text": "Secondary Data файл (.ndf)"
      },
      {
        "id": "affb0878-7171-4a53-a428-665908cc0134",
        "text": "Master Database файл (.master)"
      },
      {
        "id": "f3fcd400-e366-4817-9d6e-ac14e36aee32",
        "text": "Кластерленбеген индекс арқылы табылған жолдың басқа бағандарын алу үшін кластерленген индекс кілті арқылы негізгі кестеге жүгінгенде"
      },
      {
        "id": "bcaf61e2-1fdd-4f27-9ff0-0c80aa20f4de",
        "text": "Жүйе жадын тазарту процесі"
      },
      {
        "id": "c59f0302-84c7-4bae-8bac-8e93389fd11f",
        "text": "temp.кесте_аты"
      },
      {
        "id": "80a53e2c-ead2-417e-9cc0-9c5611dcf284",
        "text": "Деректерді дискіге тікелей жазу"
      }
    ],
    "correctOptionIds": [
      "22a17321-63f9-4af2-a27e-7b1e367c01d4"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "158cdf49-4da5-4ce2-b24b-ff9a956aacab",
    "subjectId": "db",
    "text": "SQL Server-дегі MDF файлының маңызы қандай?",
    "options": [
      {
        "id": "94b3bc08-57a1-4581-ae70-fe6549eaeca6",
        "text": "Ол бастапқы деректер файлы (Primary Data File) болып табылады және жүйелік ақпаратты, кестелерді сақтайды"
      },
      {
        "id": "17fe7884-f1ee-4263-8abe-46e5fe04abba",
        "text": "Транзакциялар журналы"
      },
      {
        "id": "000dcecf-43ca-4356-bccf-9209b4a7c79e",
        "text": "Қосымша деректер файлы"
      },
      {
        "id": "f209d558-9a0f-4c45-a46e-669616573d98",
        "text": "Индектер файлы"
      },
      {
        "id": "a37a408e-56d6-4314-a884-6bba30f80593",
        "text": "Журнал мүлдем өзгермейді"
      },
      {
        "id": "f6a0a15e-06ef-47ad-8c8b-88158a03594c",
        "text": "TempDB дерекқорының жедел жадында және қажет болса дискісінде"
      },
      {
        "id": "bbafa1ee-c30b-412f-a9cd-3b1f3cc30cbc",
        "text": "Кластерленген индекс бойынша жаңа жол енгізілгенде бетте бос орын жетіспегендіктен жаңа бет құрылып, деректер көшірілгенде"
      },
      {
        "id": "960e8e9a-8138-41d2-87ac-7b914650e208",
        "text": "Row (Жол), өлшемі 1 KB"
      }
    ],
    "correctOptionIds": [
      "94b3bc08-57a1-4581-ae70-fe6549eaeca6"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "9dd63694-ddb1-4b1c-bc20-4cc8ec16ef68",
    "subjectId": "db",
    "text": "SQL Server-дегі LDF файлының маңызы қандай?",
    "options": [
      {
        "id": "3f4460e2-615b-4027-9ce6-7da0f5bf895a",
        "text": "Транзакциялар журналы (Transaction Log File) – деректерді қалпына келтіру үшін барлық өзгерістерді жазады"
      },
      {
        "id": "e163f16d-ea03-458e-8765-468a85fea58e",
        "text": "Бастапқы деректер файлы"
      },
      {
        "id": "1116e681-cc82-402c-99e1-9740903b7939",
        "text": "Индекс файлы"
      },
      {
        "id": "e397ef26-ae36-4ef4-9989-7510807dda3c",
        "text": "Уақытша файл"
      },
      {
        "id": "857e0756-b633-42fd-9e1d-d186840010e4",
        "text": "Индекстерді алдын ала оқу әдісі"
      },
      {
        "id": "537f0cb6-c524-416e-8728-95e09120b083",
        "text": "Экстент (Extent), көлемі 64 КБ"
      },
      {
        "id": "e9697fbf-c8f5-4272-9cb1-fe8e3b077245",
        "text": "Резервтік бет"
      },
      {
        "id": "c9c4e5e5-bac2-47c6-9109-bfc74fd2fdf4",
        "text": "Heap кестесінің барлық деректер беттерін басынан аяғына дейін толық оқу (индекс жоқ болғанда)"
      }
    ],
    "correctOptionIds": [
      "3f4460e2-615b-4027-9ce6-7da0f5bf895a"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "18dffdca-77d2-47b1-93c2-cf75ae15f0cc",
    "subjectId": "db",
    "text": "SQL Server-дегі қосымша деректер файлдарының кеңейтілімі қандай болады?",
    "options": [
      {
        "id": "66c5f1c7-56a1-4a21-bbe3-a12aaa98344d",
        "text": ".ndf"
      },
      {
        "id": "8e026cf6-1684-49c3-a2eb-4b66da4871df",
        "text": ".mdf"
      },
      {
        "id": "4ea51779-8716-4a90-91ff-0f7075638030",
        "text": ".ldf"
      },
      {
        "id": "2fecadba-a822-425a-8691-cb65190842ac",
        "text": ".txt"
      },
      {
        "id": "fe5ad9c0-92d4-4046-8fec-dc5296085dd0",
        "text": "Индексті өшіру"
      },
      {
        "id": "9a79bd7b-081f-478a-b89a-7d4fa59418f4",
        "text": "Олар тек қана бір файл ішінде сақталады"
      },
      {
        "id": "767281e6-9de2-49ec-a2a5-80ba527f5620",
        "text": "Кестелер мен индекстерді әртүрлі физикалық дискілерге орналастыру арқылы кіру/шығу (I/O) өнімділігін арттыру"
      },
      {
        "id": "ba26add8-7bf2-4b8c-a661-84ac531c63cd",
        "text": "Кестедегі біріншілік кілтті іздеу"
      }
    ],
    "correctOptionIds": [
      "66c5f1c7-56a1-4a21-bbe3-a12aaa98344d"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "13d09872-0c59-4c05-8d0e-ea1b2d483113",
    "subjectId": "db",
    "text": "SQL Server-дегі Extent дегеніміз не?",
    "options": [
      {
        "id": "2ac38062-55f5-458c-8beb-2beb81e35e79",
        "text": "Көлемі 64 KB болатын 8 байланысқан Page жиынтығы"
      },
      {
        "id": "caa733f8-5029-4be9-b5e8-ee18d04d4e84",
        "text": "Ең кіші сақтау беті"
      },
      {
        "id": "0c47e459-ebb1-4521-8793-544226f339d4",
        "text": "Дерекқор файлының атауы"
      },
      {
        "id": "2cc8b962-4aeb-48d6-83ed-e60883851850",
        "text": "Логикалық кесте"
      },
      {
        "id": "57db0a24-cdd6-40f2-ba1c-43404bf19404",
        "text": "Row-Overflow Data беттеріне ауыстырады және негізгі бетте оған сілтеме қалдырады"
      },
      {
        "id": "6e375aa9-cfea-423e-980b-de5738872ae5",
        "text": "Мүлдем өзгеріссіз қалады"
      },
      {
        "id": "0cd922e4-d9c2-41f9-af53-0b34ac28a523",
        "text": "Индекстің физикалық бүлінгенін тексеру"
      },
      {
        "id": "216772f4-3450-40eb-aa77-39a2589f7bb1",
        "text": "128 байт"
      }
    ],
    "correctOptionIds": [
      "2ac38062-55f5-458c-8beb-2beb81e35e79"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "d4c53d7c-a919-4882-9983-c2195715ddfd",
    "subjectId": "db",
    "text": "SQL Server-дегі Extents түрлері қандай болады?",
    "options": [
      {
        "id": "590b8dc8-a5f7-46c6-90d4-e299e51d07bf",
        "text": "Uniform (біркелкі) және Mixed (аралас) экстенттер"
      },
      {
        "id": "f29bb3f6-6221-4bcc-b02b-013f7907f57d",
        "text": "Физикалық және логикалық"
      },
      {
        "id": "31e8ce5e-9474-41a4-8e81-528bba8bce34",
        "text": "Ішкі және сыртқы"
      },
      {
        "id": "d7c27bf9-ae85-4525-a0c7-631269230a0a",
        "text": "Сызықтық және квадраттық"
      },
      {
        "id": "f3d712f8-526c-4dd3-a708-45ad00807d2c",
        "text": "Индексті қайта құру уақытын анықтау үшін"
      },
      {
        "id": "28e07a06-6064-4a17-8769-e9363a36321e",
        "text": "Кестелердің санын азайту"
      },
      {
        "id": "11de1950-8b6b-4fe6-b6ae-b8308117e8b1",
        "text": "Index Rebuild"
      },
      {
        "id": "9c770ed6-7902-4b58-8025-507099dd9fe1",
        "text": "Жүйе жадын тазарту процесі"
      }
    ],
    "correctOptionIds": [
      "590b8dc8-a5f7-46c6-90d4-e299e51d07bf"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "24310597-fe79-4f73-8c8d-491f21696a9e",
    "subjectId": "db",
    "text": "SQL Server-де деректерді оқу және жазу процестерін жылдамдату үшін жадта қолданылатын буфер қалай аталады?",
    "options": [
      {
        "id": "331c815c-67f1-40cb-9964-4fb3bb106809",
        "text": "Buffer Pool (Buffer Cache)"
      },
      {
        "id": "2eb3d52b-5776-411e-b360-d0bf702119be",
        "text": "Call Stack"
      },
      {
        "id": "b00bcf88-7f14-44da-a780-4109e3920fe1",
        "text": "Session memory"
      },
      {
        "id": "8216106c-0f2f-4bf3-a287-ebd56fb51458",
        "text": "Disk cache"
      },
      {
        "id": "4e51d73e-b03f-495f-a6d6-2d36fa07847b",
        "text": "Оңтайландырғыш ұсынған орындалу жоспарын тікелей іске асырып, Storage Engine-нен деректерді сұрайды"
      },
      {
        "id": "363fede7-b614-4fbb-9adf-ddd13d98f380",
        "text": "Жолдың ұзындығы"
      },
      {
        "id": "e21b654b-2d2c-41bc-9c11-d8f58a84604f",
        "text": "Index Reorganize"
      },
      {
        "id": "b29e2c1a-ed63-42b4-a269-332e4a54b164",
        "text": ".mdf (Primary Data File)"
      }
    ],
    "correctOptionIds": [
      "331c815c-67f1-40cb-9964-4fb3bb106809"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "a2129b61-58ee-4e38-952b-2ce632aca473",
    "subjectId": "db",
    "text": "SQL Server-дегі Transaction Log (.ldf) файлы толса не болады?",
    "options": [
      {
        "id": "03494292-a4e3-4f16-b2fa-10b7ced6a434",
        "text": "Дерекқорда деректерді өзгертетін (INSERT, UPDATE, DELETE) операциялар орындалмай қалады"
      },
      {
        "id": "ab8d1dc9-2fa8-4e15-937e-eaff8e6c26ed",
        "text": "Дерекқор автоматты түрде жойылады"
      },
      {
        "id": "ee8bd688-9bc5-48a8-996a-ef8205692d3a",
        "text": "Деректерді тек оқуға болады (Read-only)"
      },
      {
        "id": "63ebfc64-8cef-41ca-a22f-04ee62ed6d9d",
        "text": "Ешқандай қателік болмайды"
      },
      {
        "id": "bbc6918a-758b-4588-8022-277eaab45821",
        "text": "Кластерленбеген индекс арқылы табылған жолдың басқа бағандарын алу үшін кластерленген индекс кілті арқылы негізгі кестеге жүгінгенде"
      },
      {
        "id": "e54745f8-e7a2-4d74-91a2-c3659f3c6d1e",
        "text": "Деректерді дискіге тікелей жазу"
      },
      {
        "id": "582a2c5c-9a64-4fa9-b67d-0461fddcce5f",
        "text": "Оңтайландырғыш дұрыс емес (баяу) орындалу жоспарын таңдауы мүмкін (мысалы, Index Seek орнына Table Scan жасауы мүмкін)"
      },
      {
        "id": "0b02b6de-8a8c-4ff1-bee8-134bca0e9bcc",
        "text": "Heap кестесі тек уақытша TempDB-де сақталады"
      }
    ],
    "correctOptionIds": [
      "03494292-a4e3-4f16-b2fa-10b7ced6a434"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "6c1b7806-d716-4f11-a4a6-77e9dffbaa2b",
    "subjectId": "db",
    "text": "SQL Server-дегі \"Dirty Page\" (Лас бет) деген не?",
    "options": [
      {
        "id": "7c970844-d3d4-4589-b72c-10e824633f61",
        "text": "Жедел жадта (Buffer Pool) өзгертілген, бірақ дискіге (MDF/NDF файлына) әлі жазылмаған бет"
      },
      {
        "id": "7cb8dbd2-48ee-4ca3-b5ea-f6851a3698d4",
        "text": "Ақаулы және оқылмайтын бет"
      },
      {
        "id": "5886ab7b-23f1-4081-bc8f-9439729f7a9f",
        "text": "Индекстері өшірілген бет"
      },
      {
        "id": "a5af7fdf-ca45-4990-ade2-c56d16a112f8",
        "text": "Резервтік бет"
      },
      {
        "id": "b08db491-a697-4d8c-911a-f31d927a71f4",
        "text": "Максимум 249"
      },
      {
        "id": "ffefe39d-c467-44d8-8e44-412f7fbb043c",
        "text": "Иә, журнал мүлдем жабылып қалады"
      },
      {
        "id": "2a3fb3ca-1f3d-4307-9d00-7fe148510373",
        "text": "Жедел жадтағы буферді босату үшін сирек қолданылатын лас беттерді (dirty pages) белсенді түрде дискіге жазады"
      },
      {
        "id": "905261ce-35c6-4ad3-a9be-796d5646651d",
        "text": "Cost Threshold for Parallelism"
      }
    ],
    "correctOptionIds": [
      "7c970844-d3d4-4589-b72c-10e824633f61"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "6c14efd0-436e-4f4d-adfe-82abadf72530",
    "subjectId": "db",
    "text": "SQL Server-де лас беттерді (dirty pages) жедел жадтан дискіге белсенді түрде жазып тұратын фондық процесс қалай аталады?",
    "options": [
      {
        "id": "6327003c-ad39-4bf3-b187-a6d0145f1e55",
        "text": "Checkpoint"
      },
      {
        "id": "b51d3a39-ac42-4e3d-a1a6-59da46f41330",
        "text": "Query Optimizer"
      },
      {
        "id": "51644d3d-2999-493d-ae94-324bb39eae2d",
        "text": "Log Writer"
      },
      {
        "id": "8b85b962-dfd3-4983-a550-bc444b4cc99d",
        "text": "Lazy Reader"
      },
      {
        "id": "a1fb5806-d07c-4b64-a927-5e5d249a0723",
        "text": "Heap кестесінде индекстер тым көп болғанда"
      },
      {
        "id": "90715a4a-91e4-4000-bf03-9bbcd8a58d7d",
        "text": "Кластерленген индексі жоқ, деректері ретсіз сақталған кесте"
      },
      {
        "id": "6e5cc333-134e-46d8-b5f9-5521a0938f2d",
        "text": ".mdf және .ldf физикалық файлдары"
      },
      {
        "id": "5d29534f-b888-4e32-a871-bd9c389754bd",
        "text": "Primary Data файл (.mdf)"
      }
    ],
    "correctOptionIds": [
      "6327003c-ad39-4bf3-b187-a6d0145f1e55"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "d62dc2df-0ed1-4728-805b-7245d21db07e",
    "subjectId": "db",
    "text": "SQL Server-дегі кластерленген индекс (Clustered Index) кесте деректеріне қалай әсер етеді?",
    "options": [
      {
        "id": "57b9ef55-0a42-4edd-ad5e-64d73609897c",
        "text": "Кестедегі деректерді индекстің кілті бойынша физикалық түрде сұрыптап сақтайды (әр кестеде тек біреу ғана болады)"
      },
      {
        "id": "c4ccb57c-7f51-45df-a982-03b790de8b4a",
        "text": "Кесте деректерінен бөлек сақталады"
      },
      {
        "id": "69c310a0-f9de-4360-8474-3528509d0790",
        "text": "Деректердің тек бір бөлігін сұрыптайды"
      },
      {
        "id": "5695fcbc-0fc6-41bb-a0d6-7cbe9fde1acd",
        "text": "Кестенің өлшемін екі есе азайтады"
      },
      {
        "id": "29623e9c-7bd0-4afc-a394-8c88f7918e4f",
        "text": "Барлық транзакциялар толық журналданады және дерекқорды кез келген уақыт сәтіне дейін қалпына келтіруге мүмкіндік береді"
      },
      {
        "id": "e310cd29-e2e8-46f5-837d-68102fda4d12",
        "text": "Session memory"
      },
      {
        "id": "18bfafcd-883a-4fb0-a330-4461e657b9bc",
        "text": "Жедел жадтағы буферді босату үшін сирек қолданылатын лас беттерді (dirty pages) белсенді түрде дискіге жазады"
      },
      {
        "id": "89407047-838a-483e-a4dd-c3ad85b298af",
        "text": "Index Filter"
      }
    ],
    "correctOptionIds": [
      "57b9ef55-0a42-4edd-ad5e-64d73609897c"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "7ed3e983-b321-4268-9525-cd4834b9de5f",
    "subjectId": "db",
    "text": "SQL Server-дегі кластерленбеген индекс (Non-clustered Index) құрылымы қалай сақталады?",
    "options": [
      {
        "id": "36bf16b2-868b-4663-996f-64829563fc27",
        "text": "Кесте деректерінен бөлек, көрсеткіштері (pointers) бар дербес ағаш құрылымы ретінде сақталады"
      },
      {
        "id": "7b270eb8-86b6-4ee9-b697-6693f7a79109",
        "text": "Кесте ішінде тікелей сұрыпталып сақталады"
      },
      {
        "id": "6738f073-216c-439f-8c64-4caddbb7b2cf",
        "text": "Файл түрінде дискінің басқа жерінде сақталады"
      },
      {
        "id": "7f6f8cab-5b0f-474a-bbe7-57afd60ee8e0",
        "text": "Жедел жадта ғана уақытша сақталады"
      },
      {
        "id": "2570bfbf-eae0-4ce5-8f16-b3aaf668dfc0",
        "text": "Кесте құрылымының нұсқаларын бақылау үшін"
      },
      {
        "id": "335212c3-4d0e-46d7-b6b4-ef699dfd33fa",
        "text": ".txt"
      },
      {
        "id": "44e94845-e312-4032-8154-d566f7bf32b1",
        "text": "Page Header"
      },
      {
        "id": "174df281-5339-489f-929a-0618f283ecac",
        "text": "Activity Monitor"
      }
    ],
    "correctOptionIds": [
      "36bf16b2-868b-4663-996f-64829563fc27"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "ec838db2-6924-4c22-8596-018a67c56f22",
    "subjectId": "db",
    "text": "SQL Server-дегі \"Lazy Writer\" процесі не істейді?",
    "options": [
      {
        "id": "99c10d46-d403-445d-93d8-a88bd4dad214",
        "text": "Жедел жадтағы буферді босату үшін сирек қолданылатын лас беттерді (dirty pages) белсенді түрде дискіге жазады"
      },
      {
        "id": "df449b59-918b-4de0-b5f2-11f61afb2a0c",
        "text": "Сұраныстар жоспарын таңдайды"
      },
      {
        "id": "9d625e20-d578-4b5c-aa95-7d1d102bfdb3",
        "text": "Транзакцияларды мүлдем жазбайды"
      },
      {
        "id": "d3fe89a5-ece3-466f-bf19-b5f1ec3d4291",
        "text": "Жүйені тоқтатып тұрады"
      },
      {
        "id": "65322c88-281c-4281-a7dc-e23f05cbf934",
        "text": "Кесте ішінде тікелей сұрыпталып сақталады"
      },
      {
        "id": "94e969f1-a86b-4506-a2a8-4d64f75dddb5",
        "text": "Boundary Constraint"
      },
      {
        "id": "b3732f67-3a4e-4c73-bb93-27ad92149c70",
        "text": "Ол бастапқы деректер файлы (Primary Data File) болып табылады және жүйелік ақпаратты, кестелерді сақтайды"
      },
      {
        "id": "a1a6e2dc-0437-4eb2-a93c-432a38478684",
        "text": "Жүйелік Master дерекқорына бөлініп жазылады"
      }
    ],
    "correctOptionIds": [
      "99c10d46-d403-445d-93d8-a88bd4dad214"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "0b43e9fd-9342-4dbb-bf1d-7eeba14accf8",
    "subjectId": "db",
    "text": "SQL Server-дегі \"Checkpoint\" процесі орындалғанда не болады?",
    "options": [
      {
        "id": "cd97a136-856c-43d5-bef8-161325af0d73",
        "text": "Барлық лас беттер (dirty pages) жедел жадтан дискіге міндетті түрде бірден жазылады"
      },
      {
        "id": "e52b6c41-5465-4416-b03e-6b10eb6e6742",
        "text": "Бағдарлама қатемен тоқтайды"
      },
      {
        "id": "d66f7134-953b-49dd-afa6-533e71b61c8a",
        "text": "Индекстер қайта құрылады"
      },
      {
        "id": "91ac6ae6-8ecd-49bc-86d7-30151de36634",
        "text": "Транзакциялар өшіріледі"
      },
      {
        "id": "70d011da-af94-4dfc-9e1c-03f1a6b47a90",
        "text": "Процессордың ядролары шамадан тыс жүктелгенде"
      },
      {
        "id": "ac545249-58e2-42b5-89b8-aca7ef7555a7",
        "text": "Сұраныстарды талдау, оңтайландыру және орындау жоспарын құру"
      },
      {
        "id": "ed90b54c-a10c-4efa-902e-c122ed6e8aeb",
        "text": "Reorganize индекстің жапырақ беттерін желіде (online) реттейді, ал Rebuild индексті толығымен өшіріп қайта құрады (offline/online)"
      },
      {
        "id": "db85bca3-684b-46d0-8c22-0998ddd8ae2f",
        "text": "Индекстерді жарамсыз етеді"
      }
    ],
    "correctOptionIds": [
      "cd97a136-856c-43d5-bef8-161325af0d73"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "7f63d1e0-aca6-4532-91a2-e0694b93a9d1",
    "subjectId": "db",
    "text": "SQL Server-дегі кластерленбеген индекс кестедегі деректердің физикалық реттілігін өзгерте ме?",
    "options": [
      {
        "id": "d50ea53b-5913-4260-81d8-c825e6300239",
        "text": "Жоқ, ол деректерге сілтеме жасайтын жеке құрылым ретінде сақталады"
      },
      {
        "id": "fe817203-bd79-4886-a350-8cc38a51ab91",
        "text": "Иә, толығымен өзгертеді"
      },
      {
        "id": "fe33214f-7052-437a-b0ce-a48aafafe866",
        "text": "Иә, тек бірінші рет құрылғанда ғана өзгертеді"
      },
      {
        "id": "914dcce6-b593-4f3b-8580-49b855241935",
        "text": "Иә, тек сандық бағандарды сұрыптайды"
      },
      {
        "id": "dfb7ead1-934d-4d50-8bc7-4ff105862e44",
        "text": "Индекстерді алдын ала оқу әдісі"
      },
      {
        "id": "371ebab3-aea0-4186-91be-c6e4e8173538",
        "text": "Thread Threshold"
      },
      {
        "id": "648236b5-9912-4fee-bc9e-43c08904107f",
        "text": "Транзакциялардың оқшаулануын (ACID) қамтамасыз ету үшін кестелерге, беттерге немесе жолдарға бұғаттаулар (locks) қою"
      },
      {
        "id": "f50f81f9-460d-4ba2-81ba-cb8e0300b26d",
        "text": "Filegroup (Файлдар тобы)"
      }
    ],
    "correctOptionIds": [
      "d50ea53b-5913-4260-81d8-c825e6300239"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "38afaf7e-6a01-4bcc-a6d2-2de7fe00a1ee",
    "subjectId": "db",
    "text": "SQL Server-де бірінші рет оқылған деректер қайда орналасады?",
    "options": [
      {
        "id": "104527e4-cea3-4910-9655-8fed882c6fbe",
        "text": "Жедел жадтағы Buffer Pool (Buffer Cache) аймағына жүктеледі"
      },
      {
        "id": "579b1609-a9be-492a-9e8b-64028ee20a83",
        "text": "Транзакциялар журналына жазылады"
      },
      {
        "id": "c4595981-04ee-4525-8521-6ccaf0bfe921",
        "text": "Дискідегі уақытша файлға көшіріледі"
      },
      {
        "id": "b6713419-4aa7-42b3-a6b4-fb966de9107d",
        "text": "Еш жерде орналаспайды, бірден өшіріледі"
      },
      {
        "id": "9f78277f-7bcf-4c41-af47-4bb65bc12d95",
        "text": "JSON немесе HTML түрінде"
      },
      {
        "id": "c01097aa-b03d-4841-91b8-f3ae7560e006",
        "text": "Buffer Limit"
      },
      {
        "id": "1b634e84-408b-4af9-b60f-331be0c7798f",
        "text": "Дерекқор автоматты түрде Read-only күйіне ауысады"
      },
      {
        "id": "000c2bd3-172d-4aa2-bf96-80cb0988ee00",
        "text": "Қате шығарып, жазбаны мүлдем қоспайды"
      }
    ],
    "correctOptionIds": [
      "104527e4-cea3-4910-9655-8fed882c6fbe"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "e04c79e6-816d-4891-be4b-a2a456e8bad7",
    "subjectId": "db",
    "text": "SQL Server-дегі сұраныстарды орындау жоспарын (Execution Plan) қай процессор таңдайды?",
    "options": [
      {
        "id": "4ad2b322-a75d-474a-b0a6-5a7f1e84977b",
        "text": "Query Optimizer"
      },
      {
        "id": "fafef5af-fd13-4d9f-b24f-84ef4f40e55d",
        "text": "Query Executor"
      },
      {
        "id": "97fae1a5-88fa-4f78-98e0-1f227e35220d",
        "text": "Buffer Manager"
      },
      {
        "id": "7797b759-99ea-44fb-940e-6944069c44ab",
        "text": "Transaction Log Manager"
      },
      {
        "id": "6716a3a1-5b7b-4dc7-975c-96b78bcfac96",
        "text": "Filegroup (Файлдар тобы)"
      },
      {
        "id": "25e2d026-3fe3-4669-a293-9189dc6af782",
        "text": "Ешқандай қателік болмайды"
      },
      {
        "id": "5de761e0-484f-4db8-b86d-ea7fe2c615c3",
        "text": "Дерекқорды қалпына келтіруді өте жылдам және оңай етеді"
      },
      {
        "id": "e72c999a-3776-4da3-b572-00c4dfbb1361",
        "text": "Бір уақытта көптеген желілік ағындар TempDB-дегі жүйелік беттерді (GAM, SGAM, PFS) бөлісуге тырысқанда (allocation bottleneck)"
      }
    ],
    "correctOptionIds": [
      "4ad2b322-a75d-474a-b0a6-5a7f1e84977b"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "511d523a-33d2-4240-9845-ba22a58a7cc3",
    "subjectId": "db",
    "text": "SQL Server-дегі WAL (Write-Ahead Logging) принципі нені білдіреді?",
    "options": [
      {
        "id": "86cac4a7-33fb-41d7-a661-82e0450ad2f4",
        "text": "Деректер бетіне жасалған кез келген өзгеріс дискідегі деректер файлына (.mdf) жазылмас бұрын, міндетті түрде транзакция журналына (.ldf) жазылуы тиіс"
      },
      {
        "id": "7ed3ae20-1b99-4e4d-9daf-06739aee4707",
        "text": "Сұраныстар тек түнде орындалады"
      },
      {
        "id": "228c946d-a7c3-4c47-b403-79744f3d1924",
        "text": "Барлық деректер алдымен жедел жадқа жазылады, журнал мүлдем қолданылмайды"
      },
      {
        "id": "68121359-88e9-4983-9d30-6cfa4bd8c315",
        "text": "Индекстерді алдын ала оқу әдісі"
      },
      {
        "id": "c2b00096-1cda-4a79-8ccc-597c1d5dd526",
        "text": "Сақтық көшірмелердің нұсқаларын сақтау үшін"
      },
      {
        "id": "7898b627-a724-4fd9-8558-c4ebe63f056b",
        "text": "Жүйелік Master дерекқорын үлкейту"
      },
      {
        "id": "28e7df53-f9f7-4377-a0d2-56bfe7e23b56",
        "text": "Транзакциялардың оқшаулануын бақылайды"
      },
      {
        "id": "3bd86c25-93db-4921-84ad-64385dc64e26",
        "text": "TempDB деректер файлдарының санын процессор ядроларының санына сәйкестендіріп тең бөлу (әдетте 8 файлға дейін)"
      }
    ],
    "correctOptionIds": [
      "86cac4a7-33fb-41d7-a661-82e0450ad2f4"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "152c1c41-2f8d-4fa6-af11-b60f8512bb38",
    "subjectId": "db",
    "text": "SQL Server-дегі негізгі деректер файлының кеңейтілімі қандай болады?",
    "options": [
      {
        "id": "2d136294-a6be-4979-b1f7-c79a3169438c",
        "text": ".mdf (Primary Data File)"
      },
      {
        "id": "dae52430-3f89-491f-99ea-c06ae0f5f006",
        "text": ".ldf (Transaction Log File)"
      },
      {
        "id": "9449146d-05e2-47c2-8920-06b411d1d4db",
        "text": ".ndf (Secondary Data File)"
      },
      {
        "id": "0ca2f69f-f8e7-4219-bec6-c0b60f27169a",
        "text": ".dbf"
      },
      {
        "id": "57289c1c-9eb7-484f-b4c2-a36bb5e49c69",
        "text": "Transaction Log (Транзакциялар журналы)"
      },
      {
        "id": "12eab722-65da-4189-8d80-0bf612f0425a",
        "text": "Индексті өшіру"
      },
      {
        "id": "c49321d2-ba21-48d2-8383-fee122b442f8",
        "text": "Жүйелік Master дерекқорына бөлініп жазылады"
      },
      {
        "id": "a58deb48-52fd-4844-a449-929114cdd9d8",
        "text": "TempDB файлдарының санын азайту"
      }
    ],
    "correctOptionIds": [
      "2d136294-a6be-4979-b1f7-c79a3169438c"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "895b8814-d1f1-4705-8287-e3889a82e601",
    "subjectId": "db",
    "text": "SQL Server-дегі транзакциялар журналы файлының кеңейтілімі қандай болады?",
    "options": [
      {
        "id": "210f0e5a-65c3-457b-837e-5a88883de7ec",
        "text": ".ldf (Log Data File)"
      },
      {
        "id": "030f3937-546f-44a9-aa5d-62a97e37f453",
        "text": ".mdf"
      },
      {
        "id": "4c8ee86f-1d6e-4df4-8ab9-d9b37de6bd17",
        "text": ".ndf"
      },
      {
        "id": "94e487ed-4a6c-45fe-8cb7-682f6e950d5c",
        "text": ".log"
      },
      {
        "id": "905a0aec-82d5-4379-ad89-103ef316b7fc",
        "text": "Кестенің барлық бағандарын толық қамтитын бастапқы кілт"
      },
      {
        "id": "348b1ea7-be8e-407a-91ae-6e8695a44e6a",
        "text": "Жаңа жол TempDB-ге жазылғанда"
      },
      {
        "id": "8a15e650-c271-4304-9f9e-71893c0f12fa",
        "text": "Query Executor"
      },
      {
        "id": "49f9c605-69c8-4dba-a40b-f4b7713346de",
        "text": "Деректер беттерін дискіден жедел жадқа оқу және оларды жадтан дискіге жазу әрекеттерін басқарады"
      }
    ],
    "correctOptionIds": [
      "210f0e5a-65c3-457b-837e-5a88883de7ec"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "2a08616f-200a-4c85-b450-6c8d94d73c17",
    "subjectId": "db",
    "text": "SQL Server-дегі деректерді сақтаудың ең кіші физикалық өлшем бірлігі қандай және оның көлемі қанша?",
    "options": [
      {
        "id": "c8baf826-56de-4fa5-817a-24470e390fec",
        "text": "Бет (Page), көлемі 8 КБ"
      },
      {
        "id": "db4f8b21-82e2-4a74-a875-303afb242a8c",
        "text": "Экстент (Extent), көлемі 64 КБ"
      },
      {
        "id": "02317d6e-e1c5-463f-9db0-f5949f8685dc",
        "text": "Блок (Block), көлемі 4 КБ"
      },
      {
        "id": "4a30d393-26f2-4866-b274-277e668fa164",
        "text": "Сектор (Sector), көлемі 512 байт"
      },
      {
        "id": "c2854619-dc3e-455c-9f3b-13d66385246a",
        "text": "Желілік пакеттерді шифрлау"
      },
      {
        "id": "d03594e5-2e9c-4fa0-b0b3-0a750103a1a1",
        "text": "Жүйелік процедураларды нұсқалау үшін"
      },
      {
        "id": "3bec6bc7-1480-4080-aecc-caa52d82f655",
        "text": "Транзакцияларды мүлдем жазбайды"
      },
      {
        "id": "a033e12c-1108-43c7-9615-fee3cb182121",
        "text": "Extent Map"
      }
    ],
    "correctOptionIds": [
      "c8baf826-56de-4fa5-817a-24470e390fec"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "8e0e63c0-3449-44f6-8002-f68682c1844d",
    "subjectId": "db",
    "text": "SQL Server-дегі 8 қатарлас орналасқан беттердің (Pages) жиынтығы қалай аталады және оның көлемі қанша?",
    "options": [
      {
        "id": "819ad9f9-8aff-432b-aa17-24831598b167",
        "text": "Экстент (Extent), көлемі 64 КБ"
      },
      {
        "id": "0b09a626-756f-4fdb-b49d-678fdd0accd1",
        "text": "Кластер (Cluster), көлемі 128 КБ"
      },
      {
        "id": "12f278f9-4dec-4f27-be22-e31604ace208",
        "text": "Файл топтары, көлемі 1 МБ"
      },
      {
        "id": "6bd54829-51bd-4cfd-b1a0-cc87bd7026b1",
        "text": "Сегмент, көлемі 32 КБ"
      },
      {
        "id": "768e1e7a-e3fd-47cb-a2d9-cc8e57471a0f",
        "text": "Деректердің тек бір бөлігін сұрыптайды"
      },
      {
        "id": "732daf50-d479-4ac7-b683-4ad1467c4f5e",
        "text": ".ldf"
      },
      {
        "id": "13d9f00f-1a71-4dfe-9235-70fce40eb1a5",
        "text": "Сұранысқа қажетті барлық бағандарды өзінде (немесе INCLUDE бөлімінде) сақтайтын, негізгі кестеге жүгінуді қажет етпейтін индекс"
      },
      {
        "id": "ebceac5b-2b42-4066-b360-0c5a65653a12",
        "text": "Checkpoint Manager"
      }
    ],
    "correctOptionIds": [
      "819ad9f9-8aff-432b-aa17-24831598b167"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "c99c481d-4ee1-405f-95ec-d498ad2e738b",
    "subjectId": "db",
    "text": "SQL Server-дегі кластерленген индекс (Clustered Index) кестеде нешеу болуы мүмкін?",
    "options": [
      {
        "id": "7d9b51d5-b990-4804-b7f1-95603b61126b",
        "text": "Тек біреу ғана (себебі ол деректердің дискідегі физикалық орналасу ретін анықтайды)"
      },
      {
        "id": "1bfcd068-e8c4-4d57-9ce4-4b2c6a81ea68",
        "text": "Кез келген мөлшерде шектеусіз"
      },
      {
        "id": "75758191-4792-4f85-adbc-0e117009a592",
        "text": "Максимум 249"
      },
      {
        "id": "b5e17f24-ff71-4c16-aa6f-9e2f2eab8dca",
        "text": "Мүлдем болмауы керек"
      },
      {
        "id": "1296bfdb-8598-41ff-a8e9-ccf22950567f",
        "text": "Pointer Offset"
      },
      {
        "id": "d895b85d-5794-4b17-89f0-be1192d534c2",
        "text": "Журнал файлы мүлдем өзгермейді"
      },
      {
        "id": "2343f97c-b4b2-47b9-9855-11a0eff66409",
        "text": "Транзакция журналы толған кезде"
      },
      {
        "id": "d10e6cc3-da3d-496c-bdf5-13fad1e49555",
        "text": "Резервтік бет"
      }
    ],
    "correctOptionIds": [
      "7d9b51d5-b990-4804-b7f1-95603b61126b"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "815e8577-50a5-44ea-99e7-9a01a71b5909",
    "subjectId": "db",
    "text": "SQL Server жедел жадында сұраныстардың дайын орындалу жоспарын сақтайтын аймақ қалай аталады?",
    "options": [
      {
        "id": "98f52793-9cda-4d09-981d-8988f3822d1e",
        "text": "Plan Cache (Procedure Cache)"
      },
      {
        "id": "260df417-60b6-4a97-8c40-fdfe2a65bd7e",
        "text": "Buffer Pool"
      },
      {
        "id": "acbc6c71-2ea3-4e36-9f79-0769b3380ed2",
        "text": "Log Buffer"
      },
      {
        "id": "96eb9e39-a4da-44a5-8b3e-4d5219a6ba75",
        "text": "TempDB"
      },
      {
        "id": "de7e7b4e-9487-41e0-bfa3-7e11821d2abb",
        "text": "Ақаулы және оқылмайтын бет"
      },
      {
        "id": "b8c5f938-2220-4a2d-9477-3855ad037f45",
        "text": "Деректерді тек оқу режимінде сақтайды"
      },
      {
        "id": "bdc95164-a25d-4a67-9b00-7385ec63d425",
        "text": "Heap кестесі тек уақытша TempDB-де сақталады"
      },
      {
        "id": "d4eb4aac-086b-4a46-8b3d-20d83451215b",
        "text": "Кестенің өлшемін екі есе азайтады"
      }
    ],
    "correctOptionIds": [
      "98f52793-9cda-4d09-981d-8988f3822d1e"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "51373d51-b872-44cd-bbac-e36f16d087bb",
    "subjectId": "db",
    "text": "SQL Server архитектурасындағы \"Relational Engine\" (Query Processor) негізгі рөлі қандай?",
    "options": [
      {
        "id": "2bfe43aa-7602-42a8-a596-9c04b5df3bbe",
        "text": "Сұраныстарды талдау, оңтайландыру және орындау жоспарын құру"
      },
      {
        "id": "4729d05b-1d4c-44f5-933a-75aac1f05641",
        "text": "Деректерді физикалық дискіге тікелей жазу"
      },
      {
        "id": "d309649a-09ab-4565-886c-3b695d7bd7d7",
        "text": "Транзакциялар журналын басқару"
      },
      {
        "id": "cf2fad0b-d107-4b8b-8891-df476e06619d",
        "text": "Желілік пакеттерді шифрлау"
      },
      {
        "id": "45b6acea-d099-4c5a-bc95-6a6e610e7721",
        "text": "Сұраныстар тек түнде орындалады"
      },
      {
        "id": "c5a084c9-d6f8-4f3b-a382-2e7850952ce0",
        "text": "Өте жылдам оқылатын уақытша кесте"
      },
      {
        "id": "8bf80672-e8a4-4d60-922f-5a4036bd2899",
        "text": "Транзакциялар журналына жазылады"
      },
      {
        "id": "cb9d596c-b43b-447a-838b-b5f16aaec52a",
        "text": "Жедел жадтағы буферді босату үшін сирек қолданылатын лас беттерді (dirty pages) белсенді түрде дискіге жазады"
      }
    ],
    "correctOptionIds": [
      "2bfe43aa-7602-42a8-a596-9c04b5df3bbe"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "f9183798-4507-4c0e-93b3-84d0877941d5",
    "subjectId": "db",
    "text": "SQL Server-дегі әрбір деректер бетінің (Page) басында орналасатын тақырыптық бөлігі (Page Header) неше байттан тұрады?",
    "options": [
      {
        "id": "7d807bad-5876-43a0-aece-271ec6aef4a4",
        "text": "96 байт"
      },
      {
        "id": "6566a679-974c-4797-8ce6-ed2ab411c769",
        "text": "64 байт"
      },
      {
        "id": "cc69cc51-0dd8-451a-90a2-604a9050858b",
        "text": "128 байт"
      },
      {
        "id": "daa06c7b-d00e-45ff-8c95-ab6f99e23f9c",
        "text": "32 байт"
      },
      {
        "id": "2685a803-4a15-45a5-9e47-7b6e63eb0fd6",
        "text": "Master дерекқорының ішінде"
      },
      {
        "id": "09859d2a-4e24-4e69-a472-0ab435b7e35a",
        "text": "Partition Scheme (секциялау схемасы)"
      },
      {
        "id": "379329bf-0978-4036-999c-aa7c0bdaf89a",
        "text": "Сұранысты дискіге жазу кезінде"
      },
      {
        "id": "c0a28e6a-4333-495a-973c-a06b367b012d",
        "text": ".log"
      }
    ],
    "correctOptionIds": [
      "7d807bad-5876-43a0-aece-271ec6aef4a4"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "734de94c-9df5-485a-ae53-35f6b7e95784",
    "subjectId": "db",
    "text": "Деректер бетінің соңында орналасатын және жолдардың беттегі физикалық орнын көрсететін кесте қалай аталады?",
    "options": [
      {
        "id": "0fa9dc42-9767-4685-8254-3b4ea1145123",
        "text": "Row Offset Table (немесе Slot Array)"
      },
      {
        "id": "d3ae93f6-62e4-4e4a-80f3-309d966d20be",
        "text": "Page Header"
      },
      {
        "id": "3644db94-6874-469a-ab7a-b6da4680fe54",
        "text": "Free Space Tracker"
      },
      {
        "id": "b38c0f49-99f1-49a0-b2a7-dcc3054efcc8",
        "text": "Extent Map"
      },
      {
        "id": "fdf8883f-0365-4b82-9057-3e3f093eb06d",
        "text": "Индекстің барлық беттерін басынан аяғына дейін толық оқып шығу (іздеу шарты тым кең немесе индекс тиімсіз болғанда)"
      },
      {
        "id": "99484c22-a4e5-4687-ae5b-8db1fcd1924c",
        "text": "Кез келген мөлшерде шектеусіз"
      },
      {
        "id": "1ba972ec-78f5-4621-9bb9-9edcc849c7f3",
        "text": "Жүйелік ақпаратты толық сақтау үшін"
      },
      {
        "id": "45b9bc08-d600-4f6b-9ec5-5405c15dad72",
        "text": "Кестені басқа серверге көшіру"
      }
    ],
    "correctOptionIds": [
      "0fa9dc42-9767-4685-8254-3b4ea1145123"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "b6991e82-78f6-4451-a1c5-491bc73120f9",
    "subjectId": "db",
    "text": "Бір кестедегі деректер жолының максималды тиімді өлшемі (LOB деректерін қоспағанда) неше байттан аспауы тиіс?",
    "options": [
      {
        "id": "ace76011-66d8-4962-b609-8298ea57fdc3",
        "text": "8060 байт"
      },
      {
        "id": "46ff565e-7d0b-45f8-a4b3-b56f1b4fe144",
        "text": "8192 байт"
      },
      {
        "id": "dc0c5527-78bb-46ec-94be-6386e797d851",
        "text": "4096 байт"
      },
      {
        "id": "d432d8d2-1ab2-4638-a68f-46f46f9b3dad",
        "text": "1024 байт"
      },
      {
        "id": "9b57b31a-ef3f-4cfd-be1e-bfbca6e0ee92",
        "text": "MAXDOP"
      },
      {
        "id": "9e1ea390-ff3b-457f-8d81-85aaf38560ba",
        "text": ".ndf (Secondary Data File)"
      },
      {
        "id": "b8a93716-86a1-41b6-a68f-3e7313046829",
        "text": "Жүйенің қауіпсіздік ережелерін сақтау үшін"
      },
      {
        "id": "90a7e5d9-cec4-4dea-a845-b76dc90b045b",
        "text": "Резервтік көшірмелердің сәттілік пайызын анықтау үшін"
      }
    ],
    "correctOptionIds": [
      "ace76011-66d8-4962-b609-8298ea57fdc3"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "f54e6ec2-457a-44b6-b73f-a333792218c4",
    "subjectId": "db",
    "text": "Егер деректер жолының ұзындығы 8060 байттан асып кетсе, SQL Server оны қалай сақтайды?",
    "options": [
      {
        "id": "4fbe34bb-4cf6-4fc1-acd3-a708c59da14a",
        "text": "Row-Overflow Data беттеріне ауыстырады және негізгі бетте оған сілтеме қалдырады"
      },
      {
        "id": "21cdc74c-7e8e-4ac9-ab4d-50fb4d026fa0",
        "text": "Жолды автоматты түрде қысқартып қиып тастайды"
      },
      {
        "id": "0326ca57-8923-4113-9741-16161bcbd85e",
        "text": "Жаңа дерекқор файлын құрады"
      },
      {
        "id": "b3223cf2-d05d-4054-a655-b1b3d62623f7",
        "text": "Қате шығарып, жазбаны мүлдем қоспайды"
      },
      {
        "id": "7f1e82ea-d9d3-4906-9a78-52af4c239690",
        "text": "Индектер файлы"
      },
      {
        "id": "bc508f9b-e75f-4f3a-9d56-a782dde537ba",
        "text": "Кесте деректерінен бөлек сақталады"
      },
      {
        "id": "163b2b0b-8f5a-42c4-bc78-5f413790473e",
        "text": "Кластерленбеген индекс арқылы табылған жолдың басқа бағандарын алу үшін кластерленген индекс кілті арқылы негізгі кестеге жүгінгенде"
      },
      {
        "id": "94e0ea71-bbba-4713-93cc-f254427d40e2",
        "text": "Сыртқы кілттерді өшіру керек"
      }
    ],
    "correctOptionIds": [
      "4fbe34bb-4cf6-4fc1-acd3-a708c59da14a"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "3013eb6a-b056-4bb4-b0ba-0dd04ef2cec9",
    "subjectId": "db",
    "text": "SQL Server-дегі PFS (Page Free Space) беттерінің негізгі қызметі қандай?",
    "options": [
      {
        "id": "580f9137-dd4f-41b3-8abb-7ac8c1164c99",
        "text": "Дерекқорындағы әрбір беттің бос орын мөлшері және бөліну күйі туралы ақпаратты сақтау"
      },
      {
        "id": "48ac31d0-1a64-4e37-8b1c-475cc5f14907",
        "text": "Транзакцияларды қалпына келтіру жылдамдығын бақылау"
      },
      {
        "id": "a67b5e55-e961-4f5f-94f4-6adf291e3084",
        "text": "Кестедегі біріншілік кілттерді сақтау"
      },
      {
        "id": "9504cd0e-50c5-4a6a-95e9-df3bf23cf2ee",
        "text": "Деректерді дискіге тікелей жазу"
      },
      {
        "id": "ad7981ee-905d-42e2-af31-0064ba070438",
        "text": "Кластерленген индекс бойынша жаңа жол енгізілгенде бетте бос орын жетіспегендіктен жаңа бет құрылып, деректер көшірілгенде"
      },
      {
        "id": "669a38e7-7866-47b4-ad6c-2796fd4be782",
        "text": "ТемпДБ-ның басқа атауы"
      },
      {
        "id": "8a8b06a1-0a61-4b98-b279-e1e1a5006c31",
        "text": "Файл топтары, көлемі 1 МБ"
      },
      {
        "id": "07ceb2a4-e43e-4bfe-978d-7f8e8b2ae580",
        "text": "RID (Row Identifier)"
      }
    ],
    "correctOptionIds": [
      "580f9137-dd4f-41b3-8abb-7ac8c1164c99"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "4a97106d-ae2c-42b3-ad5c-51f4a8a455c0",
    "subjectId": "db",
    "text": "GAM (Global Allocation Map) беттері не үшін қолданылады?",
    "options": [
      {
        "id": "e11e385d-54f3-41b1-bbde-ae127f6f3815",
        "text": "Қай экстенттердің бос екенін және қайсысы бөлінгенін (экстент деңгейінде) бақылау үшін"
      },
      {
        "id": "2a5b5f8e-2544-48b6-91fa-615679a333c2",
        "text": "Жүйелік пайдаланушылардың тізімін сақтау үшін"
      },
      {
        "id": "2d0b0abc-5580-4fd5-8260-700015461c24",
        "text": "Индекстердің құрылымын өзгерту үшін"
      },
      {
        "id": "1e7c6587-aaf6-412b-a726-ff1647085221",
        "text": "TempDB дерекқорын оңтайландыру үшін"
      },
      {
        "id": "8f19b226-eff2-4eb6-be1f-e963e007ab84",
        "text": "Жүйелік процедураларды нұсқалау үшін"
      },
      {
        "id": "115f4b6f-ca1c-45d6-9cb1-c024b5b1f43c",
        "text": "Резервтік көшірме жасау жолдарын анықтау"
      },
      {
        "id": "488b3296-3a54-4169-8aa3-8f9c033ce734",
        "text": "Сервердің барлық сұраныстарын оңтайландыру"
      },
      {
        "id": "6622c2aa-8e5e-4e8d-911c-024be80c6b8c",
        "text": "Соңғы толық резервтік көшірмеден кейін өзгерген экстенттерді бақылау (дифференциалды архивтеуді жылдамдату үшін)"
      }
    ],
    "correctOptionIds": [
      "e11e385d-54f3-41b1-bbde-ae127f6f3815"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "b7d2afcb-c91a-42fb-bb9f-1b615a65d641",
    "subjectId": "db",
    "text": "SGAM (Shared Global Allocation Map) беттері не үшін қолданылады?",
    "options": [
      {
        "id": "07e6f53a-f3c2-4bab-b2ed-1d3c53316132",
        "text": "Қай экстенттер қазір аралас (Mixed) күйде екенін және оларда кем дегенде бір бос бет бар-жоғын анықтау үшін"
      },
      {
        "id": "91188c8d-e2b7-4563-a13d-c4b65b212391",
        "text": "Транзакциялардың сәтті аяқталуын тексеру үшін"
      },
      {
        "id": "2c05224d-cfdc-452d-86dc-2a850db96083",
        "text": "Деректерді автоматты түрде шифрлау үшін"
      },
      {
        "id": "0e74eadc-d817-4f3e-818c-0e8d821de589",
        "text": "Бастапқы файлдар тобын анықтау үшін"
      },
      {
        "id": "7c12f6ac-1bde-4ea9-8df5-e71c78cf17ed",
        "text": "Транзакциялар өшіріледі"
      },
      {
        "id": "cad06b58-ceab-4258-bb16-16f1f2df11d6",
        "text": "Дискілік файл топтары (filegroups)"
      },
      {
        "id": "10a710f0-09ed-444b-b51d-2d1d19300e70",
        "text": "Көлемі 64 KB болатын 8 байланысқан Page жиынтығы"
      },
      {
        "id": "cd17e848-50c3-41e0-a1a4-4149c6a8df38",
        "text": "Транзакция журналы толған кезде"
      }
    ],
    "correctOptionIds": [
      "07e6f53a-f3c2-4bab-b2ed-1d3c53316132"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "4bd725e2-a99b-480c-bc35-ad59ba85c972",
    "subjectId": "db",
    "text": "IAM (Index Allocation Map) бетінің қызметі қандай?",
    "options": [
      {
        "id": "c928ba22-0313-4155-afd0-9188eeef12b8",
        "text": "Кесте немесе индекс қолданатын экстенттер мен беттердің тізімін сақтау"
      },
      {
        "id": "0d256123-ae3e-4137-bc0a-a706dadfba1f",
        "text": "Пайдаланушылардың рұқсат құқықтарын сақтау"
      },
      {
        "id": "174f3220-e776-40bf-991a-9c0d05a63dbf",
        "text": "Сұраныстардың орындалу уақытын жазу"
      },
      {
        "id": "433a18c5-8831-4622-82c5-575b0f33aecc",
        "text": "Дерекқордың резервтік көшірмелерін басқару"
      },
      {
        "id": "4821a8d2-e40e-4e3f-92b3-357d91484b26",
        "text": "Сыртқы кілттерді бұғаттау үшін"
      },
      {
        "id": "77884156-e24e-401f-aac3-5ccdda2a39c0",
        "text": "Индекстерді жарамсыз етеді"
      },
      {
        "id": "e83d4b6a-1871-4989-ae79-216dc9a3b430",
        "text": "Деректерді автоматты түрде шифрлау үшін"
      },
      {
        "id": "8b5fd6e3-575c-470f-880a-23d0745ab35e",
        "text": "Page Size"
      }
    ],
    "correctOptionIds": [
      "c928ba22-0313-4155-afd0-9188eeef12b8"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "93035a51-83ed-4807-8b1a-2a6ef029200d",
    "subjectId": "db",
    "text": "SQL Server-дегі DCM (Differential Changed Map) беттері не үшін қажет?",
    "options": [
      {
        "id": "518c41cb-0ed4-4458-879c-f39e89dcd2ac",
        "text": "Соңғы толық резервтік көшірмеден кейін өзгерген экстенттерді бақылау (дифференциалды архивтеуді жылдамдату үшін)"
      },
      {
        "id": "3c3024c3-2bd9-4b1d-a671-cd7c281d88b8",
        "text": "Транзакция журналының толғанын тексеру үшін"
      },
      {
        "id": "b5c49528-fd06-47d6-a039-ff8ca40317ac",
        "text": "Индексті қайта құру уақытын анықтау үшін"
      },
      {
        "id": "e61b4eca-00d6-4c17-a684-7dc44990d547",
        "text": "Кестедегі құрама кілттерді сақтау үшін"
      },
      {
        "id": "39ed60fc-f4d7-4f82-b9eb-f61b5bcf9d58",
        "text": "Беттің физикалық нөмірі"
      },
      {
        "id": "d09d113f-ae27-4ad1-a8a9-bbc68c1aabd7",
        "text": "Дерекқор файлының атауы"
      },
      {
        "id": "b5fd80f9-d536-4572-bc9e-0e3623e286a3",
        "text": "Индекстердің құрылымын өзгерту үшін"
      },
      {
        "id": "dcd922b0-3e96-42f5-966e-b523575c97f3",
        "text": "Master Database файл (.master)"
      }
    ],
    "correctOptionIds": [
      "518c41cb-0ed4-4458-879c-f39e89dcd2ac"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "dec2959e-7658-4336-8557-ac2fcbefc8b3",
    "subjectId": "db",
    "text": "BCM (Bulk Changed Map) беттері қандай режимде өзгерген экстенттерді бақылайды?",
    "options": [
      {
        "id": "a001827c-b57b-49b8-98df-ebf2267d9462",
        "text": "Bulk-Logged режимінде жаппай операциялар жасалғанда"
      },
      {
        "id": "929f503c-73d6-4194-840a-d937e54a3ad3",
        "text": "Simple recovery режимінде ғана"
      },
      {
        "id": "a6e14219-3bbc-4dfa-8a77-e5b5c88f6972",
        "text": "Тек TempDB дерекқоры орындалғанда"
      },
      {
        "id": "baaf8dbe-4112-4920-a3e9-6a9542e08440",
        "text": "Ешқандай режимде қолданылмайды"
      },
      {
        "id": "071acf95-1076-410e-86c4-493fc25f6c45",
        "text": "Index Reorganize"
      },
      {
        "id": "3ba2adf7-44c8-4939-bb0d-96637eea6506",
        "text": "Транзакция журналындағы өзгерістер автоматты түрде тазартылып отырады, сондықтан point-in-time қалпына келтіру мүмкін емес, бірақ журнал өспейді"
      },
      {
        "id": "444e40a9-401d-4142-b22c-14aab162f2bb",
        "text": "Дерекқордың бүкіл қауіпсіздік параметрлерін сақтау"
      },
      {
        "id": "aac5f5d6-8308-42e4-a00d-d6dd6d30ca63",
        "text": "Деректерді автоматты түрде шифрлау үшін"
      }
    ],
    "correctOptionIds": [
      "a001827c-b57b-49b8-98df-ebf2267d9462"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "35ebc994-9954-4dbf-8cac-2008ea036791",
    "subjectId": "db",
    "text": "Heap (Үйінді) кесте деген не?",
    "options": [
      {
        "id": "dabd22c8-8e7a-4a26-90c8-371512345524",
        "text": "Кластерленген индексі жоқ, деректері ретсіз сақталған кесте"
      },
      {
        "id": "44cd550a-07b9-4f14-9e1d-3806a1b22e66",
        "text": "Өте жылдам оқылатын уақытша кесте"
      },
      {
        "id": "d3c3758c-ec5f-40a9-8570-662799a80dfb",
        "text": "Тек сандарды сақтайтын кесте түрі"
      },
      {
        "id": "38154cfa-75b9-4ecf-803c-f6bf0a3d749b",
        "text": "Жүйелік кестелердің жалпы жиынтығы"
      },
      {
        "id": "b533a99a-4904-4142-89c0-59605c164324",
        "text": "Ешқандай журнал файлын қолданбайды"
      },
      {
        "id": "df017d3a-a716-4b72-a5d0-b00d8c270213",
        "text": "TempDB дерекқоры автоматты түрде өшірілгенде"
      },
      {
        "id": "07946a1a-41b8-4d75-9bd9-b3260b9250fe",
        "text": "Қай экстенттер қазір аралас (Mixed) күйде екенін және оларда кем дегенде бір бос бет бар-жоғын анықтау үшін"
      },
      {
        "id": "a83ceafd-9864-4e4e-b263-7a7e6969865f",
        "text": "Дерекқордың файлдарын жауып тастау"
      }
    ],
    "correctOptionIds": [
      "dabd22c8-8e7a-4a26-90c8-371512345524"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "aadfb12b-c6b3-4271-8489-07ce5fc465fa",
    "subjectId": "db",
    "text": "Heap кестесіндегі жазбаларға бағытталған кластерленбеген индекстің жапырақтық деңгейіндегі (leaf node) көрсеткіш қалай аталады?",
    "options": [
      {
        "id": "489806ee-8df2-4a85-b6d5-7eaa72096eec",
        "text": "RID (Row Identifier – FileID:PageID:SlotID)"
      },
      {
        "id": "7fce2276-efbf-44d3-bd38-9ede1a8f7611",
        "text": "Clustered Key"
      },
      {
        "id": "7a8bf4de-550e-41ef-81c1-0d2fad2b92c5",
        "text": "Pointer Offset"
      },
      {
        "id": "7d505a5e-7916-47c7-a3f8-c617ecbd8722",
        "text": "B-Tree Leaf Link"
      },
      {
        "id": "0f609093-e031-4888-b1bc-cddefda268fe",
        "text": "Сервер процессорын өшіру"
      },
      {
        "id": "9b1e858e-d8af-4032-bf9f-f9c9e3aa6488",
        "text": "Boundary Constraint"
      },
      {
        "id": "adea32f3-1717-47ed-b57b-27ff03470aed",
        "text": "Пайдаланушылардың дерекқорға кіру құқықтарын басқару"
      },
      {
        "id": "e5239228-2780-40b6-9621-a2cb79df1fdc",
        "text": "Cost Threshold for Parallelism"
      }
    ],
    "correctOptionIds": [
      "489806ee-8df2-4a85-b6d5-7eaa72096eec"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "8fabb9dd-4100-4017-847c-fa48c0383f44",
    "subjectId": "db",
    "text": "Кластерленген кестедегі кластерленбеген индекстің жапырақтық деңгейіндегі көрсеткіш ретінде не қолданылады?",
    "options": [
      {
        "id": "0a2b5cd7-f318-4cb7-9d20-9fae3aa54da7",
        "text": "Кластерленген индекстің кілті (Clustered Index Key)"
      },
      {
        "id": "59d35d08-996b-426e-a6d3-8f62b393288c",
        "text": "RID (Row Identifier)"
      },
      {
        "id": "5cd07d27-ec93-4998-b08a-975a0d0b11c8",
        "text": "Беттің физикалық нөмірі"
      },
      {
        "id": "1e368e6c-fc27-4c08-b0e7-00da288a7f4c",
        "text": "Жолдың ұзындығы"
      },
      {
        "id": "283a52c0-98c9-4633-8edf-331f23d5a680",
        "text": "XML пішімінде немесе графикалық схема түрінде"
      },
      {
        "id": "23fe57b5-9dad-4405-b685-bd752e66f071",
        "text": "Ресурсты босатқанша күту үшін процессор ядросын қысқа циклде айналдырып тұратын өте жылдам және жеңіл бұғаттау механизмі"
      },
      {
        "id": "c528eb27-4ca7-492a-9245-df3dc8be8ad5",
        "text": "Master Database файл (.master)"
      },
      {
        "id": "d9fa185f-0747-48b5-8a54-1aa718fb441a",
        "text": "Дискілік файл топтары (filegroups)"
      }
    ],
    "correctOptionIds": [
      "0a2b5cd7-f318-4cb7-9d20-9fae3aa54da7"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "37e66267-b840-4ab9-b111-331fc1f2a624",
    "subjectId": "db",
    "text": "TempDB дерекқорының негізгі қызметі не?",
    "options": [
      {
        "id": "32119f68-ce17-4ae2-99eb-9b3b08e4cbe2",
        "text": "Уақытша кестелерді, аралық сұраныс нәтижелерін және нұсқалар қоймасын (version store) сақтау"
      },
      {
        "id": "0fcce003-6584-405e-85ab-01db3423895e",
        "text": "Дерекқордың бүкіл қауіпсіздік параметрлерін сақтау"
      },
      {
        "id": "eda0a363-a4a5-4b08-b9b3-6bc2121f50b9",
        "text": "Сервердің жүйелік параметрлерін конфигурациялау"
      },
      {
        "id": "e7d8d4fe-e679-40fa-95e7-8089fafe0744",
        "text": "Сақтық көшірмелердің журналдарын жүргізу"
      },
      {
        "id": "91f2a67c-e5bb-45b6-a99a-17e6769707e5",
        "text": "Әрбір 64 беттен кейін"
      },
      {
        "id": "0a024c53-b19c-4f16-bb3d-d2be693eda0a",
        "text": "Ресурсты босатқанша күту үшін процессор ядросын қысқа циклде айналдырып тұратын өте жылдам және жеңіл бұғаттау механизмі"
      },
      {
        "id": "f690e13c-6fd2-46bb-b4c2-7724f20e078d",
        "text": "Индекс ағашы арқылы нақты қажетті жолдарды өте жылдам тауып алу әдісі (оңтайлы іздеу)"
      },
      {
        "id": "e25a5f77-9305-4930-8cd2-bcbf8acacf54",
        "text": "Әрбір 51123 беттен кейін (шамамен 4 ГБ деректерді қамтиды)"
      }
    ],
    "correctOptionIds": [
      "32119f68-ce17-4ae2-99eb-9b3b08e4cbe2"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "918975f7-bb30-4156-ac0b-4e14a41dd047",
    "subjectId": "db",
    "text": "SQL Server іске қосылған сайын TempDB дерекқоры қалай өзгереді?",
    "options": [
      {
        "id": "90e0dea8-41b5-44f0-aa8a-7725c63bc940",
        "text": "Автоматты түрде толығымен тазартылып, модель (model) дерекқоры негізінде жаңадан құрылады"
      },
      {
        "id": "a92e8b6b-73fc-4856-b238-7dea2b521608",
        "text": "Алдыңғы күйінен қалпына келтіріледі"
      },
      {
        "id": "94e1c555-feb7-44a5-bccb-3efdc51c6c48",
        "text": "Өлшемі екі есеге ұлғаяды"
      },
      {
        "id": "456b3093-3cfc-464a-804b-ccc7527f13f0",
        "text": "Мүлдем өзгеріссіз қалады"
      },
      {
        "id": "b7d2750e-c6a2-42cc-b21e-5c3990da2f92",
        "text": "Secondary Data файл (.ndf)"
      },
      {
        "id": "ef5dc885-93e0-43a3-a32e-ad5ad0353551",
        "text": "Уақытша кестелерді жылдам оқу үшін"
      },
      {
        "id": "2f63dd9c-522a-4b09-8801-a85a1ce1bfdc",
        "text": "Пайдаланушылардың парольдерін бұғаттау"
      },
      {
        "id": "19f9c921-407c-4e4c-b6f2-e0098453b38d",
        "text": "Сақтық көшірмелердің нұсқаларын сақтау үшін"
      }
    ],
    "correctOptionIds": [
      "90e0dea8-41b5-44f0-aa8a-7725c63bc940"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "2731409d-5712-40b7-b649-9e7dee686503",
    "subjectId": "db",
    "text": "Жүйелік Master дерекқорының рөлі қандай?",
    "options": [
      {
        "id": "67444d2e-3074-4893-a1d8-2cac9b1b4713",
        "text": "Жүйелік деңгейдегі барлық ақпаратты (пайдаланушылар, файлдар орны, басқа дерекқорлар тізімі) сақтау"
      },
      {
        "id": "afba5054-429b-4633-a4a7-a83d96121d46",
        "text": "Тек уақытша деректерді сақтау"
      },
      {
        "id": "47d229c2-8192-446a-8b0f-5bea78b29967",
        "text": "Сервердің барлық сұраныстарын оңтайландыру"
      },
      {
        "id": "4a269732-b73d-419a-9daa-666bcffca7dd",
        "text": "Дерекқордың резервтік көшірмелерін орындау"
      },
      {
        "id": "c73dd712-5b1a-4345-81ae-632e30f7b442",
        "text": "Жедел жадтағы Buffer Pool (Buffer Cache) аймағына жүктеледі"
      },
      {
        "id": "b3edf49c-f25c-4101-992d-b556d8623fd6",
        "text": "Кластерленген индексі жоқ, деректері ретсіз сақталған кесте"
      },
      {
        "id": "ccd8aa22-6dca-4c1d-8145-8d2b38a6a154",
        "text": "Орындалу жоспарын тікелей орындау кезінде"
      },
      {
        "id": "aae6848e-46df-4785-9cc1-00ec717f551b",
        "text": ".ldf (Log Data File)"
      }
    ],
    "correctOptionIds": [
      "67444d2e-3074-4893-a1d8-2cac9b1b4713"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "f8925a01-a903-4b24-86a8-0abb671088ee",
    "subjectId": "db",
    "text": "Жүйелік MSDB дерекқоры не үшін қолданылады?",
    "options": [
      {
        "id": "7da9d8af-16d4-45d8-be76-b902e4262db3",
        "text": "SQL Server Agent тапсырмаларын, ескертулерін, тарихын және резервтік көшірмелер журналдарын басқару үшін"
      },
      {
        "id": "30e4f4b3-bc01-44c7-8f89-47d3558d64b3",
        "text": "Жаңа дерекқорларға үлгі болу үшін"
      },
      {
        "id": "81bd0f9c-4044-4ebd-b9ec-115614cf3c6c",
        "text": "Жүйелік ақпаратты толық сақтау үшін"
      },
      {
        "id": "384a0083-1f8a-4fe4-9b7b-20e07afd161b",
        "text": "Уақытша кестелерді жылдам оқу үшін"
      },
      {
        "id": "6ac9b285-253a-4a88-81bf-f1c5bdb4c6ac",
        "text": "Мүлдем өзгеріссіз қалады"
      },
      {
        "id": "34d37241-e3ee-4067-955b-bbb0186f2d0c",
        "text": "Log Writer"
      },
      {
        "id": "80c6cfd9-5224-46e9-a0cc-adff02a55a34",
        "text": "Өте жылдам оқылатын уақытша кесте"
      },
      {
        "id": "6e6b06ff-ddba-4c7e-8afb-a07bff5fc3aa",
        "text": "Lock тек қана TempDB ішінде қолданылады"
      }
    ],
    "correctOptionIds": [
      "7da9d8af-16d4-45d8-be76-b902e4262db3"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "6db2ded0-bb6b-4c4b-8358-701043ac3f01",
    "subjectId": "db",
    "text": "Жүйелік Model дерекқоры не үшін қолданылады?",
    "options": [
      {
        "id": "9397fb02-2319-4bec-a369-7661fc50997c",
        "text": "Жаңадан құрылатын кез келген дерекқор үшін шаблон (үлгі) ретінде"
      },
      {
        "id": "e9a5c9f3-ccd9-4e65-82c8-6233544797bf",
        "text": "SQL Server Agent жұмысын басқару үшін"
      },
      {
        "id": "d47b4392-474d-4167-a358-2991f87fb06f",
        "text": "Жүйенің қауіпсіздік ережелерін сақтау үшін"
      },
      {
        "id": "0e28fc22-511f-4d35-8d77-7d442bb0a503",
        "text": "TempDB-ді автоматты тазарту үшін"
      },
      {
        "id": "3a94a3e2-3f05-4fd2-ae5b-3023915972b5",
        "text": "Файл түрінде дискінің басқа жерінде сақталады"
      },
      {
        "id": "28c52c2a-5d98-4b67-88a1-51ff08cfb155",
        "text": "Олар тек қана бір файл ішінде сақталады"
      },
      {
        "id": "2051d694-f1fc-4676-994e-65baa33d8864",
        "text": "Сұраныстардың синтаксисін тексеретін модуль"
      },
      {
        "id": "7422006c-c986-4f70-b920-27fa5c778dc7",
        "text": "Резервтік көшірме жасау толық тоқтатылғанда"
      }
    ],
    "correctOptionIds": [
      "9397fb02-2319-4bec-a369-7661fc50997c"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "f4903517-66ac-4cea-832a-77a3e4a06ef3",
    "subjectId": "db",
    "text": "Жүйелік Resource дерекқорының ерекшелігі қандай?",
    "options": [
      {
        "id": "9891b8e6-bdf1-448a-8282-5476367cf047",
        "text": "SQL Server-дегі барлық жүйелік объектілерді (процедуралар, функциялар) сақтайтын тек оқуға арналған жасырын дерекқор"
      },
      {
        "id": "ca0d1514-2ffc-4b62-80ff-fc9888dcead0",
        "text": "Пайдаланушылар үшін ашық және өзгертпелі дерекқор"
      },
      {
        "id": "870faa3c-ac2d-4ea6-b4ad-d79fc5016e6c",
        "text": "ТемпДБ-ның басқа атауы"
      },
      {
        "id": "b82c4639-d8d8-4831-858b-29f81d0ad671",
        "text": "Дерекқордың сақтық көшірмесін сақтайтын орын"
      },
      {
        "id": "8dc5715f-dd14-4b9e-a5e4-e8a5ed88d747",
        "text": "Индексті толық өшіру"
      },
      {
        "id": "eeb924f4-e4e0-4248-9418-de1a277ff009",
        "text": "Partition Function (секциялау функциясы)"
      },
      {
        "id": "bab2df32-24b8-4f74-adf0-85e453fd74a2",
        "text": "Кестені толық тазарту керек"
      },
      {
        "id": "7e000399-e02c-4e4b-ab1a-07e6146b9f41",
        "text": "Пайдаланушының жеке компьютерінде"
      }
    ],
    "correctOptionIds": [
      "9891b8e6-bdf1-448a-8282-5476367cf047"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "c1a28a80-cabf-4a55-9ff5-e6766a5ebb62",
    "subjectId": "db",
    "text": "SQL Server OS (SOS) деген не?",
    "options": [
      {
        "id": "52d73e69-8c66-4eb4-91da-895c8715314c",
        "text": "SQL Server ішіндегі жадты, ағындарды және I/O әрекеттерін амалдық жүйеден тәуелсіз басқаратын ішкі жүйе"
      },
      {
        "id": "19b0449c-8aa0-4aa9-a292-af42f930dd0b",
        "text": "Жаңа операциялық жүйе түрі"
      },
      {
        "id": "8e4227d9-7e23-4f9c-8e94-e40df840f3c0",
        "text": "Қауіпсіздікті қорғайтын антивирус"
      },
      {
        "id": "2c1f4dcb-4a5d-452b-9d72-334d21f5e67a",
        "text": "Сұраныстардың синтаксисін тексеретін модуль"
      },
      {
        "id": "60db359b-851a-4c28-a0c8-dc783a0a4160",
        "text": "Индекс тек 80 секунд ішінде жұмыс істейді"
      },
      {
        "id": "7da7bb87-188a-411a-ac0e-5c67c2d16ae7",
        "text": "Ешқандай пішімде сақталмайды, бірден жойылады"
      },
      {
        "id": "9b47ac6d-79c7-4231-868b-78620aaabd3c",
        "text": "Оңтайландырғыш ұсынған орындалу жоспарын тікелей іске асырып, Storage Engine-нен деректерді сұрайды"
      },
      {
        "id": "1737af6b-1044-4b26-8fb6-9b1f1188c5bd",
        "text": "Жаңа деректерді жылдам қосу үшін"
      }
    ],
    "correctOptionIds": [
      "52d73e69-8c66-4eb4-91da-895c8715314c"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "6a48a38c-0ef4-4b8f-8487-c81e190ae730",
    "subjectId": "db",
    "text": "SQL Server-дегі Full Recovery Model (Толық қалпына келтіру моделі) ерекшелігі қандай?",
    "options": [
      {
        "id": "7e49e147-325d-4f36-9cd1-6e5815d6b97e",
        "text": "Барлық транзакциялар толық журналданады және дерекқорды кез келген уақыт сәтіне дейін қалпына келтіруге мүмкіндік береді"
      },
      {
        "id": "ccea9ec0-20c9-41d2-bc23-1d5a59545aeb",
        "text": "Журнал файлдарын мүлдем өшіріп тастайды"
      },
      {
        "id": "add52e6f-576a-4dfe-9e2f-f82805cf9258",
        "text": "Деректерді тек оқу режимінде сақтайды"
      },
      {
        "id": "d266d739-a25d-49e2-9ea4-8a7e3bf92f9e",
        "text": "Тек TempDB дерекқоры үшін жұмыс істейді"
      },
      {
        "id": "c02b0371-909a-4a76-aeca-3f95cfb9ef53",
        "text": ".ldf (Transaction Log File)"
      },
      {
        "id": "a4155a2c-f385-406f-9783-72bcddfc683c",
        "text": "Index Filter"
      },
      {
        "id": "b39fd9bb-da13-4284-a79e-1e60ec7e23b4",
        "text": "Extent (Экстент), өлшемі 64 KB"
      },
      {
        "id": "d38fe541-8775-4119-b9b9-8ebafac07bac",
        "text": "Жүйені тоқтатып тұрады"
      }
    ],
    "correctOptionIds": [
      "7e49e147-325d-4f36-9cd1-6e5815d6b97e"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "ea04340c-2753-4d42-bfc7-323b1f76017a",
    "subjectId": "db",
    "text": "Simple Recovery Model (Қарапайым қалпына келтіру моделі) ерекшелігі неде?",
    "options": [
      {
        "id": "e762606c-c933-4b88-a9e8-9a57afd94cf9",
        "text": "Транзакция журналындағы өзгерістер автоматты түрде тазартылып отырады, сондықтан point-in-time қалпына келтіру мүмкін емес, бірақ журнал өспейді"
      },
      {
        "id": "ebc99b15-f38c-4315-a207-6770f22f831e",
        "text": "Дерекқорды қалпына келтіруді өте жылдам және оңай етеді"
      },
      {
        "id": "5aeed70e-4ee1-4c29-a25c-9c64a15fe3de",
        "text": "Ешқандай журнал файлын қолданбайды"
      },
      {
        "id": "b1c36dcf-4233-41e8-820b-753bc99f4205",
        "text": "Деректердің қауіпсіздігін арттырады"
      },
      {
        "id": "19c7e6e8-ffb4-4c30-aa13-0601e06b53cf",
        "text": "Әрбір 8088 беттен кейін"
      },
      {
        "id": "4a18ae10-4fc3-4593-8e1c-0cbff00e3506",
        "text": "Барлық деректер алдымен жедел жадқа жазылады, журнал мүлдем қолданылмайды"
      },
      {
        "id": "d6cf04b1-2c88-49e2-8c22-7d1a0994d024",
        "text": "TempDB файлының дискідегі орны таусылғанда"
      },
      {
        "id": "1fc03227-0c66-4de8-8e8a-e311babf5fd0",
        "text": "Барлық лас беттер (dirty pages) жедел жадтан дискіге міндетті түрде бірден жазылады"
      }
    ],
    "correctOptionIds": [
      "e762606c-c933-4b88-a9e8-9a57afd94cf9"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "32f7754e-c575-4d0c-984e-19d2b04b9831",
    "subjectId": "db",
    "text": "Bulk-Logged Recovery Model қай кезде қолданылады?",
    "options": [
      {
        "id": "bba9fe1a-899b-420f-96d5-6cdff0f6d10d",
        "text": "Жаппай деректер жүктеу (bulk load) кезінде журнал файлдарының тым үлкен болып кетпеуі үшін (ішінара журналдау)"
      },
      {
        "id": "e1a92221-bfd5-45ff-acee-597f9dba748b",
        "text": "Дерекқорда тек қарапайым SELECT сұраныстары орындалғанда"
      },
      {
        "id": "68ebe3be-8aba-4f3e-ad6f-2dbc60f0e4fa",
        "text": "Резервтік көшірме жасау толық тоқтатылғанда"
      },
      {
        "id": "be6e3cf1-715d-4828-87df-067b42eeff4b",
        "text": "Тек TempDB дерекқоры толған кезде"
      },
      {
        "id": "00bc10c8-e0ec-4050-a499-d6aef6e31fa7",
        "text": "Уақытша кестелер тым үлкен болып кеткенде"
      },
      {
        "id": "9dd07908-3b10-4b21-b34e-53a0f4274fb3",
        "text": "Тек қана мәтіндік файл түрінде"
      },
      {
        "id": "c0e03e97-92d4-45f7-9ee8-7e7e529aa127",
        "text": "Жаңа NDF файлын қосу керек"
      },
      {
        "id": "ab246172-2e04-4946-8bc3-9b4652fbdb99",
        "text": "Дерекқорда деректерді өзгертетін (INSERT, UPDATE, DELETE) операциялар орындалмай қалады"
      }
    ],
    "correctOptionIds": [
      "bba9fe1a-899b-420f-96d5-6cdff0f6d10d"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "4ad7b2ea-acc9-46ff-81c0-aca2bc52b4bf",
    "subjectId": "db",
    "text": "Дерекқор ішінде файлдар тобын (Filegroup) құрудың басты артықшылығы неде?",
    "options": [
      {
        "id": "ea601840-6984-471a-857d-1db3ce82eab2",
        "text": "Кестелер мен индекстерді әртүрлі физикалық дискілерге орналастыру арқылы кіру/шығу (I/O) өнімділігін арттыру"
      },
      {
        "id": "048e65d8-fad2-46a5-8f93-61fd566868ad",
        "text": "Бастапқы кілттерді автоматты түрде шифрлау"
      },
      {
        "id": "8fd98d20-07c7-4adc-a8c8-b1ab386d8730",
        "text": "Кестелердің санын азайту"
      },
      {
        "id": "3994692a-b671-44eb-aa76-689de3af29ae",
        "text": "Сұраныстардың синтаксисін оңтайландыру"
      },
      {
        "id": "18bdd1ed-3998-4f3e-98b7-31f4e4efb658",
        "text": "Жаңа Clustered Index құру"
      },
      {
        "id": "4bd838b3-bf86-4748-8898-eee2d58016d8",
        "text": "Транзакциялар журналына жазылады"
      },
      {
        "id": "06ba3b9a-95c3-48c0-a770-104200fb98b5",
        "text": "Жаңа NDF файлын қосу керек"
      },
      {
        "id": "ed3e8a83-c6ba-4a70-a28e-fa14a52b0086",
        "text": "Сұранысты дискіге жазу кезінде"
      }
    ],
    "correctOptionIds": [
      "ea601840-6984-471a-857d-1db3ce82eab2"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "1baf1858-c425-4e07-8feb-864dd9b43ade",
    "subjectId": "db",
    "text": "Read-Only Filegroup (тек оқуға арналған файлдар тобы) не үшін қажет?",
    "options": [
      {
        "id": "31fc57ef-44d7-4e17-a2f1-1d5acceb50c3",
        "text": "Өзгермейтін архивтік деректерді қорғау және резервтік көшірме жасау уақытын қысқарту үшін"
      },
      {
        "id": "84a4ed08-c988-45e2-a075-91257bd8afb3",
        "text": "Жаңа деректерді жылдам қосу үшін"
      },
      {
        "id": "97aa8659-fcc8-4c9d-a47d-aacd6a317cc1",
        "text": "Уақытша кестелерді автоматты түрде өшіру үшін"
      },
      {
        "id": "af394d52-8839-4828-9b5e-4d857d303d9e",
        "text": "Сыртқы кілттерді бұғаттау үшін"
      },
      {
        "id": "c9a54053-b210-4b00-8478-563bbcae710b",
        "text": "Сегмент, көлемі 32 КБ"
      },
      {
        "id": "90ac1893-31e0-491e-bed0-71f691428a58",
        "text": "Синтаксистік талдаудан (parsing) кейін, сұраныстағы нысандар мен бағандардың бар-жоғын тексеріп, семантикалық талдау жасайды"
      },
      {
        "id": "de050663-7e17-45d1-ace8-fad974af8fee",
        "text": "Кестедегі деректерді индекстің кілті бойынша физикалық түрде сұрыптап сақтайды (әр кестеде тек біреу ғана болады)"
      },
      {
        "id": "daca67e0-675c-455e-9c9d-3c03c5bf2132",
        "text": "Индекс ағашы арқылы нақты қажетті жолдарды өте жылдам тауып алу әдісі (оңтайлы іздеу)"
      }
    ],
    "correctOptionIds": [
      "31fc57ef-44d7-4e17-a2f1-1d5acceb50c3"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "8f38fe97-18d1-49b3-8254-ce6e23f59046",
    "subjectId": "db",
    "text": "SQL Server-дегі Page Split (беттің жарылуы) оқиғасы неліктен туындайды?",
    "options": [
      {
        "id": "5ce7af25-9f97-49c3-99f3-fbf6130ca913",
        "text": "Кластерленген индекс бойынша жаңа жол енгізілгенде бетте бос орын жетіспегендіктен жаңа бет құрылып, деректер көшірілгенде"
      },
      {
        "id": "2a943131-5a3d-48c4-9d0c-0aae92167ee7",
        "text": "Дерекқор файлы дискіде жарылғанда"
      },
      {
        "id": "0a1d21ae-cd76-46ea-b6f3-de341bb5f009",
        "text": "Процессордың ядролары шамадан тыс жүктелгенде"
      },
      {
        "id": "0068060b-e47f-44cf-8af0-3f53b01a0123",
        "text": "Транзакция журналы толған кезде"
      },
      {
        "id": "86bf3ef3-22ba-448b-b9b3-a9a897cbb530",
        "text": "SQL Server Agent тапсырмаларын, ескертулерін, тарихын және резервтік көшірмелер журналдарын басқару үшін"
      },
      {
        "id": "d36cdb7e-1f1d-4f3e-9ccd-98ccba665484",
        "text": "Бір уақытта көптеген желілік ағындар TempDB-дегі жүйелік беттерді (GAM, SGAM, PFS) бөлісуге тырысқанда (allocation bottleneck)"
      },
      {
        "id": "467adf62-3253-4c1b-bb8e-98cb6af7732c",
        "text": "Процессор мен жедел жады буферлері"
      },
      {
        "id": "1cd520c3-be2a-4bc3-89d4-43fec7dd7bb0",
        "text": "Index Filter"
      }
    ],
    "correctOptionIds": [
      "5ce7af25-9f97-49c3-99f3-fbf6130ca913"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "50eca97a-510b-4c1e-8d85-e3410b7ac7b7",
    "subjectId": "db",
    "text": "Page Split оқиғасының негізгі кемшілігі қандай?",
    "options": [
      {
        "id": "513b7c28-905d-49ea-8ab6-48d8801b08f3",
        "text": "Дискінің фрагментациясын арттырады және деректерді жазу жылдамдығын төмендетеді"
      },
      {
        "id": "70a673b2-e141-49e3-815c-7e7e6de8e80b",
        "text": "Дерекқордың толық өшіп қалуына әкеледі"
      },
      {
        "id": "3ea8e3b9-92a1-46f1-804d-34369f560da0",
        "text": "Индекстерді жарамсыз етеді"
      },
      {
        "id": "26dc4fe1-1785-4846-9b90-ab511c1c84db",
        "text": "Сұраныстардың нәтижелерін өзгертеді"
      },
      {
        "id": "ff990b7a-9ecb-4e88-9737-baeca3034f25",
        "text": "Extent (Экстент), өлшемі 64 KB"
      },
      {
        "id": "fe0ddf76-cf04-4e2c-919a-bba9ff61b5c6",
        "text": "Кесте құрылымының нұсқаларын бақылау үшін"
      },
      {
        "id": "11f90b6d-2b6a-4f33-aa5a-7e7c1adc58f0",
        "text": "Кестедегі деректерді индекстің кілті бойынша физикалық түрде сұрыптап сақтайды (әр кестеде тек біреу ғана болады)"
      },
      {
        "id": "190c9ac1-c31e-482d-80cb-b88c04528a15",
        "text": "Пайдаланушылардың парольдерін бұғаттау"
      }
    ],
    "correctOptionIds": [
      "513b7c28-905d-49ea-8ab6-48d8801b08f3"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "acb3d496-b74c-4e31-9455-7603e0e131b1",
    "subjectId": "db",
    "text": "Page Split-ті азайту үшін индексті құру кезінде қандай параметрді баптау ұсынылады?",
    "options": [
      {
        "id": "7576ec6f-5ef4-422a-962e-f442fb601b17",
        "text": "Fill Factor (толтыру коэффициенті – беттерде алдын ала бос орын қалдыру пайызы)"
      },
      {
        "id": "165a96c3-293a-4046-93ec-8bf3cbc4ea71",
        "text": "MAXDOP"
      },
      {
        "id": "50aff516-58d6-4239-b935-8335c6e1dc8a",
        "text": "Recovery Model"
      },
      {
        "id": "43c8c3d0-108d-4174-97bb-ee1799dfc0e8",
        "text": "Page Size"
      },
      {
        "id": "a70bd12b-7a48-4cf9-b05f-1bf629993c2c",
        "text": "Пайдаланушылардың дерекқорға кіру құқықтарын басқару"
      },
      {
        "id": "e00f0e72-a152-4c33-8407-7c2ab79ea5af",
        "text": "Дерекқор автоматты түрде Read-only күйіне ауысады"
      },
      {
        "id": "28d20b2a-2988-4c43-b0f5-5a1434a645c1",
        "text": "Дискілік файл топтары (filegroups)"
      },
      {
        "id": "b7a295a9-ade8-4a64-97fc-a6e711efc532",
        "text": "Деректердің қауіпсіздігін арттырады"
      }
    ],
    "correctOptionIds": [
      "7576ec6f-5ef4-422a-962e-f442fb601b17"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "b81e5a95-5403-48d3-ae04-7edf08bd9037",
    "subjectId": "db",
    "text": "Fill Factor = 80 мәні нені білдіреді?",
    "options": [
      {
        "id": "f60b2cdc-400e-43cf-a6a2-077313ff74ce",
        "text": "Индекс құрылған кезде әрбір парақтың 80%-ы деректермен толтырылып, 20%-ы жаңа жазбаларға бос орын ретінде қалдырылады"
      },
      {
        "id": "a83b4a45-c249-4303-9222-00f025008cb9",
        "text": "Индекс тек 80 секунд ішінде жұмыс істейді"
      },
      {
        "id": "66f42edc-4e73-4910-bd10-97d3957c1c93",
        "text": "Кестенің тек 80 жолы индекстеледі"
      },
      {
        "id": "86eb161e-9e37-4c28-911f-badf93e51dbb",
        "text": "Дерекқордың өнімділігі 80%-ға артады"
      },
      {
        "id": "a3a6b31f-4b75-414c-b0f6-18026d715361",
        "text": "TempDB дерекқорының жедел жадында және қажет болса дискісінде"
      },
      {
        "id": "7c3c68d1-d008-41db-b911-36d6eb3b42fb",
        "text": "Сұранысты дискіге жазу кезінде"
      },
      {
        "id": "8644b20c-28bb-436a-bd6c-3a77e1677596",
        "text": "Транзакция журналы толғанда"
      },
      {
        "id": "76cc9dbd-5332-4eaa-b549-e63bc74fd9b2",
        "text": ".mdf (Primary Data File)"
      }
    ],
    "correctOptionIds": [
      "f60b2cdc-400e-43cf-a6a2-077313ff74ce"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "77dfa4db-faf8-49dc-b9e2-e9f9aeed46f8",
    "subjectId": "db",
    "text": "Algebrizer (немесе Binder) сұранысты өңдеудің қай кезеңінде жұмыс істейді?",
    "options": [
      {
        "id": "90a976f8-f0a6-4e6d-9cc1-ce92a644a3ee",
        "text": "Синтаксистік талдаудан (parsing) кейін, сұраныстағы нысандар мен бағандардың бар-жоғын тексеріп, семантикалық талдау жасайды"
      },
      {
        "id": "5b5e0bf1-0e3e-4f1f-8558-034e2e17d0bc",
        "text": "Сұранысты дискіге жазу кезінде"
      },
      {
        "id": "2223d2f3-f7d5-471c-8899-bb42a303996d",
        "text": "Buffer Pool жадын босату кезінде"
      },
      {
        "id": "b39715c1-434c-4ba6-bbb5-22c4d3f6aaeb",
        "text": "Орындалу жоспарын тікелей орындау кезінде"
      },
      {
        "id": "b961aad7-e79e-49d5-afa3-980ddd36ebf4",
        "text": "Индекстердің құрылымын өзгерту үшін"
      },
      {
        "id": "c1bf2c7b-d30f-4e7e-ae06-655a34f31b44",
        "text": "Максимум 249"
      },
      {
        "id": "1f0393f0-a10b-4033-9be2-49f1e4e7ed17",
        "text": "Write-Ahead Logging (WAL)"
      },
      {
        "id": "8dafdd0e-1c6d-4a71-9ff1-9a06cd52e5f6",
        "text": "8060 байт"
      }
    ],
    "correctOptionIds": [
      "90a976f8-f0a6-4e6d-9cc1-ce92a644a3ee"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "c01a46f2-9346-48de-89f4-c34ab0ff373d",
    "subjectId": "db",
    "text": "Query Execution Engine (Сұраныстарды орындаушы) қандай қызмет атқарады?",
    "options": [
      {
        "id": "ad111c67-dc29-4cd1-a75f-701e975d2844",
        "text": "Оңтайландырғыш ұсынған орындалу жоспарын тікелей іске асырып, Storage Engine-нен деректерді сұрайды"
      },
      {
        "id": "2c8f3cb4-07ea-401b-a485-f55d5c224758",
        "text": "SQL сұранысын тексереді және қателерді түзетеді"
      },
      {
        "id": "849d388a-b319-4fe6-963f-ad4eefdcd701",
        "text": "Деректерді дискіге физикалық түрде сақтайды"
      },
      {
        "id": "e3dd1e0d-961c-4f5e-9c37-6ade7dc04ea2",
        "text": "Индексті reorganise жасайды"
      },
      {
        "id": "18b1c886-3c27-4c4b-b83b-8d24590c2c9e",
        "text": "Дерекқорындағы әрбір беттің бос орын мөлшері және бөліну күйі туралы ақпаратты сақтау"
      },
      {
        "id": "835db9a9-8c05-45e4-b4cc-ea23b1776fc4",
        "text": "Тек оқу режимінде жұмыс істейтін жүйелік индекс"
      },
      {
        "id": "1b4ea24c-6fbb-4caf-9b8c-81414c74dc11",
        "text": "Экстент (Extent), көлемі 64 КБ"
      },
      {
        "id": "56d50893-71df-4a23-bb93-9eb0aed0aa97",
        "text": "Ең кіші сақтау беті"
      }
    ],
    "correctOptionIds": [
      "ad111c67-dc29-4cd1-a75f-701e975d2844"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "af890df4-6e18-4e34-89eb-00a21c5c067f",
    "subjectId": "db",
    "text": "SQL Server-дегі Access Methods (Қол жеткізу әдістері) рөлі қандай?",
    "options": [
      {
        "id": "65512b8e-d730-419c-90a1-1da9c1a84f0e",
        "text": "Деректер мен индекстерді оқу/жазу үшін сұраныстар құру және беттерді Buffer Manager-нен сұрау"
      },
      {
        "id": "14e041dc-767f-499a-8464-12e7da3a927b",
        "text": "Пайдаланушылардың дерекқорға кіру құқықтарын басқару"
      },
      {
        "id": "7a165aaa-7109-47c9-908d-6e2cb3e7ca72",
        "text": "Желілік қосылуларды бақылау"
      },
      {
        "id": "ddd73ea7-8557-40ee-95ac-e0deb9ad3305",
        "text": "Резервтік көшірме жасау жолдарын анықтау"
      },
      {
        "id": "2519363f-fc74-4b28-bc0b-a90725ad8dac",
        "text": "Кестені TRUNCATE жасау"
      },
      {
        "id": "64706c36-7c4d-484a-98b3-aac09917264f",
        "text": ".log"
      },
      {
        "id": "93be2780-f65a-4258-a424-7fdbc717d4f6",
        "text": "Транзакциялар журналына жазылады"
      },
      {
        "id": "cd908cbc-402d-4eba-b544-e4f40a1dee05",
        "text": "Кластерленген индекс (Clustered Index) құру керек"
      }
    ],
    "correctOptionIds": [
      "65512b8e-d730-419c-90a1-1da9c1a84f0e"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "acacd66b-cb19-4460-95af-9ba5a2ee2f72",
    "subjectId": "db",
    "text": "SQL Server-дегі Lock Manager (Бұғаттау реттегіші) не үшін жауапты?",
    "options": [
      {
        "id": "7295f224-8725-4a51-b78d-1fb3f4721b53",
        "text": "Транзакциялардың оқшаулануын (ACID) қамтамасыз ету үшін кестелерге, беттерге немесе жолдарға бұғаттаулар (locks) қою"
      },
      {
        "id": "9bceb65e-f1b6-4601-b9cf-1c53357375cb",
        "text": "Дерекқордың файлдарын жауып тастау"
      },
      {
        "id": "2a4b6420-cbbe-478d-94f6-117b4c88a0f4",
        "text": "Сервер процессорын өшіру"
      },
      {
        "id": "819e76bb-4162-4e62-a8e5-143e61932c87",
        "text": "Пайдаланушылардың парольдерін бұғаттау"
      },
      {
        "id": "d94bc581-e792-46c0-ba5d-48cbfb2ec278",
        "text": "Жаңадан құрылатын кез келген дерекқор үшін шаблон (үлгі) ретінде"
      },
      {
        "id": "44bb4b3f-1bee-43cc-8d01-6f6146ed2146",
        "text": "Жүйелік процедураларды нұсқалау үшін"
      },
      {
        "id": "731532a0-ad2c-4f99-abf2-c73370c7f2b4",
        "text": "Транзакциялар өшіріледі"
      },
      {
        "id": "bd21a9e9-1651-412d-9ed1-2520b8982bf8",
        "text": "Disk cache"
      }
    ],
    "correctOptionIds": [
      "7295f224-8725-4a51-b78d-1fb3f4721b53"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "26bc0bcc-23b8-4a09-8031-727cb575e04c",
    "subjectId": "db",
    "text": "SQL Server-дегі 'Spill to TempDB' оқиғасы қашан туындайды?",
    "options": [
      {
        "id": "a6d92654-0952-4a18-ab58-6c6e50716c90",
        "text": "Сұранысты орындауға (мысалы, сұрыптау немесе хэш қосылу үшін) жедел жад (RAM) жетіспегендіктен, деректер уақытша TempDB-ге жазылғанда"
      },
      {
        "id": "2d057e8e-2788-4ee1-9866-cefd8b6cedae",
        "text": "Транзакция журналы толған кезде"
      },
      {
        "id": "910edfef-bc5e-4dfa-94e1-69bdb6c130a3",
        "text": "TempDB дерекқоры автоматты түрде өшірілгенде"
      },
      {
        "id": "5a681933-9c27-410e-9ed5-c01da908e3e7",
        "text": "Heap кестесінде индекстер тым көп болғанда"
      },
      {
        "id": "20b75439-09de-4d44-9c7b-5e8069eaea74",
        "text": "Қосымша деректер файлы"
      },
      {
        "id": "0a43cc90-c870-41a0-b3c8-c4a248b3e424",
        "text": "Транзакцияларды мүлдем жазбайды"
      },
      {
        "id": "b04d6ca4-aae4-4207-8d81-d3c5e6427c5c",
        "text": "Өте жылдам оқылатын уақытша кесте"
      },
      {
        "id": "3a6e8352-2971-4e58-8eff-f1147378439c",
        "text": "Автоматты түрде толығымен тазартылып, модель (model) дерекқоры негізінде жаңадан құрылады"
      }
    ],
    "correctOptionIds": [
      "a6d92654-0952-4a18-ab58-6c6e50716c90"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "8fd65afa-ec9f-4ff2-bc0b-37c3a15e2213",
    "subjectId": "db",
    "text": "Index Reorganize (Индексті қайта ұйымдастыру) мен Index Rebuild (Индексті қайта құру) арасындағы басты айырмашылық қандай?",
    "options": [
      {
        "id": "aa647981-6005-4615-ac63-8f73a374eaf5",
        "text": "Reorganize индекстің жапырақ беттерін желіде (online) реттейді, ал Rebuild индексті толығымен өшіріп қайта құрады (offline/online)"
      },
      {
        "id": "360fb7ec-c96e-4683-bffc-cdf9bbfc0a99",
        "text": "Rebuild тек қана сандар үшін қолданылады"
      },
      {
        "id": "5dacd606-3a67-423f-a012-961007d3f07b",
        "text": "Reorganize индексті толық жояды"
      },
      {
        "id": "b3d7e092-3131-4900-96e9-5fb434d57da4",
        "text": "Ешқандай айырмашылығы жоқ"
      },
      {
        "id": "c2fd6abc-7c65-4a2f-8e47-9686f2b7b105",
        "text": "Recovery Model"
      },
      {
        "id": "21e48a54-a3a2-4ca0-983b-9639a0069304",
        "text": "CHECK шектеуін қосу арқылы"
      },
      {
        "id": "c8735753-c394-4c6a-a901-1361d9008216",
        "text": "Иә, журнал мүлдем жабылып қалады"
      },
      {
        "id": "1d96f03d-cc52-4c02-bcda-3f74b4d9fd6f",
        "text": "Heap кестесінде индекстер тым көп болғанда"
      }
    ],
    "correctOptionIds": [
      "aa647981-6005-4615-ac63-8f73a374eaf5"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "4a65b6bc-63b3-4cf2-b91b-fee401e3f3fc",
    "subjectId": "db",
    "text": "Индекстің фрагментациясы 30%-дан асқанда қай әрекет ұсынылады?",
    "options": [
      {
        "id": "1cebe34f-215f-47c6-87c0-2368743ff830",
        "text": "Index Rebuild"
      },
      {
        "id": "690904e0-99e5-43d2-b0af-533e9de8c098",
        "text": "Index Reorganize"
      },
      {
        "id": "9ac00481-15fc-47c4-9cb3-31983a258af4",
        "text": "Индексті өшіру"
      },
      {
        "id": "ab3cc5b8-663c-46aa-a813-8fa71e7d6a6b",
        "text": "Кестені TRUNCATE жасау"
      },
      {
        "id": "ac598595-db18-4ed5-a059-ef38865cdc99",
        "text": "Қай экстенттер қазір аралас (Mixed) күйде екенін және оларда кем дегенде бір бос бет бар-жоғын анықтау үшін"
      },
      {
        "id": "ad54d000-dece-467a-9600-0309310228e1",
        "text": "Кластерленген индекстің кілті (Clustered Index Key)"
      },
      {
        "id": "0b25af01-efb1-4f9a-b628-5faece6b02e1",
        "text": "Кестелердің санын азайту"
      },
      {
        "id": "9801a26b-3218-4268-adb7-b837f230059d",
        "text": "Кестедегі біріншілік кілттерді сақтау"
      }
    ],
    "correctOptionIds": [
      "1cebe34f-215f-47c6-87c0-2368743ff830"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "516057a9-fb15-4487-b7bd-9736583e618a",
    "subjectId": "db",
    "text": "Индекстің фрагментациясы 5% бен 30% аралығында болғанда қай әрекет ұсынылады?",
    "options": [
      {
        "id": "6f0a5ceb-40c4-4dc4-a75e-1c9ae4bdc4eb",
        "text": "Index Reorganize"
      },
      {
        "id": "32c5bfd9-f8fc-485b-b02b-411d9e64ee68",
        "text": "Index Rebuild"
      },
      {
        "id": "3d8eb861-d8fa-425c-b62b-b0cf3e704b5a",
        "text": "Индексті толық өшіру"
      },
      {
        "id": "7c8d49db-36a8-4bc3-8954-3ec791c7f549",
        "text": "Жаңа Clustered Index құру"
      },
      {
        "id": "c7864e7d-bd54-4583-90ff-0a317c80ebbe",
        "text": "Журнал файлы мүлдем өзгермейді"
      },
      {
        "id": "db84057b-607a-46b0-b3db-fa0cbe323e01",
        "text": "Дискідегі уақытша файлға көшіріледі"
      },
      {
        "id": "4003500d-17fa-4482-8f0b-de53b4d4353f",
        "text": "Оңтайландырғыштың процедураны алғаш рет орындағандағы параметр мәніне негіздеп орындалу жоспарын құруы және кейін басқа параметрлер үшін де сол жоспарды тиімсіз қолдануы"
      },
      {
        "id": "52419911-d4dd-4bb8-b8ae-1f05d79d0427",
        "text": "Әрбір 512 беттен кейін"
      }
    ],
    "correctOptionIds": [
      "6f0a5ceb-40c4-4dc4-a75e-1c9ae4bdc4eb"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "99a26f01-8b8e-4936-a5ef-0969b3b12e20",
    "subjectId": "db",
    "text": "SQL Server-дегі 'Statistics' (Статистика) нысаны не үшін қажет?",
    "options": [
      {
        "id": "b30e7180-ed8a-41d1-97c2-7e4aeaf02207",
        "text": "Бағандардағы деректердің таралуын бағалау және Query Optimizer-ге ең оңтайлы орындалу жоспарын таңдауға көмектесу үшін"
      },
      {
        "id": "103d2013-fa74-4340-8150-54ac62bf1d52",
        "text": "Сервердегі пайдаланушылардың жалпы санын есептеу үшін"
      },
      {
        "id": "8627e56a-9479-4013-9a1b-5b3c56e3db34",
        "text": "Дерекқордың өлшемін бақылау үшін"
      },
      {
        "id": "d828037f-cc91-40ed-b52b-36f1b71f297f",
        "text": "Резервтік көшірмелердің сәттілік пайызын анықтау үшін"
      },
      {
        "id": "bb19981d-357e-43d5-9dfb-2f94b0784f17",
        "text": "Дерекқордың өнімділігі 80%-ға артады"
      },
      {
        "id": "d74d5f73-6fad-4173-920b-bb14d7824013",
        "text": "Ешқандай пішімде сақталмайды, бірден жойылады"
      },
      {
        "id": "ee0912c8-11d2-4239-bca0-11b86315dd89",
        "text": "Buffer Manager"
      },
      {
        "id": "fb898a86-0289-48a7-8e31-e1638b965382",
        "text": "Жүйелік процедураларды нұсқалау үшін"
      }
    ],
    "correctOptionIds": [
      "b30e7180-ed8a-41d1-97c2-7e4aeaf02207"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "937cd92c-cc8c-41b2-a7a3-d455d73474fa",
    "subjectId": "db",
    "text": "Статистика ескірген жағдайда сұраныстарда қандай мәселе туындауы мүмкін?",
    "options": [
      {
        "id": "9a5d6e9b-85c2-4726-9919-e570c67e52a7",
        "text": "Оңтайландырғыш дұрыс емес (баяу) орындалу жоспарын таңдауы мүмкін (мысалы, Index Seek орнына Table Scan жасауы мүмкін)"
      },
      {
        "id": "3b2248af-ea66-4ad2-9de0-71297836e876",
        "text": "Деректер кестеден өшіп қалуы мүмкін"
      },
      {
        "id": "6b4aa88a-04af-45c3-9ce5-6d3782244f79",
        "text": "Дерекқор автоматты түрде Read-only күйіне ауысады"
      },
      {
        "id": "4c492e30-d871-4cd6-aa84-75fe919d1ae9",
        "text": "Жаңа деректер қосылмай қалады"
      },
      {
        "id": "6983ef86-74ad-41d3-8edb-a3ff2a07a546",
        "text": "Disk cache"
      },
      {
        "id": "519ab80f-a29f-4b56-b24b-6a21c55d8374",
        "text": "Тек қана мәтіндік файл түрінде"
      },
      {
        "id": "01f52647-3891-47d2-a8e9-621b2f7def66",
        "text": "Query Executor"
      },
      {
        "id": "1ee9dda6-31bd-4c0a-851d-c38009285299",
        "text": "Lazy Writing"
      }
    ],
    "correctOptionIds": [
      "9a5d6e9b-85c2-4726-9919-e570c67e52a7"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "91cc53f4-168e-4390-a6ce-45a2320333f0",
    "subjectId": "db",
    "text": "SQL Server-дегі 'Index Seek' термині нені білдіреді?",
    "options": [
      {
        "id": "de82fa7d-76cd-43a4-96c0-dfaf7cc77e27",
        "text": "Индекс ағашы арқылы нақты қажетті жолдарды өте жылдам тауып алу әдісі (оңтайлы іздеу)"
      },
      {
        "id": "d992fe10-b8b0-42d6-acba-4a159527676b",
        "text": "Индекстің барлық беттерін басынан аяғына дейін толық оқу"
      },
      {
        "id": "0ff40601-d83c-4a91-9236-901e7fd98469",
        "text": "Индекстегі қателерді іздеу процесі"
      },
      {
        "id": "4efe1fff-7b06-47fc-af75-823a8e975170",
        "text": "Жаңадан индекс құру командасы"
      },
      {
        "id": "1f186b5e-538b-4132-94db-25073fd83a2f",
        "text": "Индекстерді алдын ала оқу әдісі"
      },
      {
        "id": "ebf4ef5c-baa4-4792-87c0-270313398ca2",
        "text": "Блок (Block), көлемі 4 КБ"
      },
      {
        "id": "f39f076b-d9ce-4b7c-add5-92621809be7d",
        "text": "Алдыңғы күйінен қалпына келтіріледі"
      },
      {
        "id": "fd81c63d-f0ca-49ef-9c23-23f85a8ad892",
        "text": "Page Size"
      }
    ],
    "correctOptionIds": [
      "de82fa7d-76cd-43a4-96c0-dfaf7cc77e27"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "8a5bffe5-a822-484d-ae5c-eb9a7337df3f",
    "subjectId": "db",
    "text": "SQL Server-дегі 'Index Scan' термині нені білдіреді?",
    "options": [
      {
        "id": "e0de12e2-3ec9-4b02-9ad5-991424764544",
        "text": "Индекстің барлық беттерін басынан аяғына дейін толық оқып шығу (іздеу шарты тым кең немесе индекс тиімсіз болғанда)"
      },
      {
        "id": "00314cc0-1823-4c3a-b42f-2ff756cc53bd",
        "text": "Индекс ағашы бойынша нақты қажетті жолдарды оңтайлы іздеу"
      },
      {
        "id": "df7ba649-cc4e-44f3-9986-929eb132b156",
        "text": "Индекстің физикалық бүлінгенін тексеру"
      },
      {
        "id": "f9c1e3c1-b66e-4799-b668-a1907c8c286d",
        "text": "Индексті дискіден жою"
      },
      {
        "id": "27cce745-80d1-4cca-b546-fd3be8c27bec",
        "text": "TempDB файлының дискідегі орны таусылғанда"
      },
      {
        "id": "3ce9c799-47a6-4699-a075-b60d889581c3",
        "text": "Әрбір 512 беттен кейін"
      },
      {
        "id": "6d4f401c-eb84-42f5-942d-47b2e7422705",
        "text": "Индекс тек 80 секунд ішінде жұмыс істейді"
      },
      {
        "id": "fc9164a5-c12a-469a-bfb8-aebd6657d3b1",
        "text": "Segment (Сегмент)"
      }
    ],
    "correctOptionIds": [
      "e0de12e2-3ec9-4b02-9ad5-991424764544"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "87aafdad-1824-4768-83ef-b0dbd38d22d3",
    "subjectId": "db",
    "text": "SQL Server-дегі 'Table Scan' термині нені білдіреді?",
    "options": [
      {
        "id": "89845872-d8ea-44df-a9ee-4f82b4fdfe00",
        "text": "Heap кестесінің барлық деректер беттерін басынан аяғына дейін толық оқу (индекс жоқ болғанда)"
      },
      {
        "id": "de6a3064-eb70-4405-936b-3603b4f34b78",
        "text": "Кестедегі біріншілік кілтті іздеу"
      },
      {
        "id": "1b2e1389-1b8e-428a-a0ee-fa6bd7669a56",
        "text": "Кестенің құрылымын өзгерту"
      },
      {
        "id": "85560e8c-2ff6-4327-aff0-ee53c4365d1f",
        "text": "Кестені басқа серверге көшіру"
      },
      {
        "id": "55c0e497-96b2-4143-b418-0527dccefd6d",
        "text": "Еш жерде орналаспайды, бірден өшіріледі"
      },
      {
        "id": "b8240e40-386e-4c0a-af9e-4af0f3988886",
        "text": "Синтаксистік талдаудан (parsing) кейін, сұраныстағы нысандар мен бағандардың бар-жоғын тексеріп, семантикалық талдау жасайды"
      },
      {
        "id": "ed7b5b36-aecb-4345-9c29-7d7a4fbb26a7",
        "text": "Резервтік көшірме жасау жолдарын анықтау"
      },
      {
        "id": "ff8ac22e-44f9-4e9f-a1b9-5fc1488fbdf5",
        "text": "Уақытша кестелерді автоматты түрде өшіру үшін"
      }
    ],
    "correctOptionIds": [
      "89845872-d8ea-44df-a9ee-4f82b4fdfe00"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "d66f3b38-9ef6-4684-8462-d28113a496a1",
    "subjectId": "db",
    "text": "SQL Server-дегі RID Lookup оқиғасы қашан орын алады?",
    "options": [
      {
        "id": "5723521a-9621-41ca-8f88-bec8aae8f04c",
        "text": "Кластерленбеген индекс арқылы табылған жолдың басқа бағандарын алу үшін Heap кестесіне тікелей сілтеме (RID) арқылы жүгінгенде"
      },
      {
        "id": "a90af848-9ae3-42d4-bc43-4761cad95969",
        "text": "Бастапқы кілт бұзылған кезде"
      },
      {
        "id": "4850064e-03ad-4bf7-bc1d-1e85ef67ced2",
        "text": "Жаңа жол TempDB-ге жазылғанда"
      },
      {
        "id": "b66f4652-3c6d-4186-8b86-e80b05385ce2",
        "text": "Транзакция журналы толғанда"
      },
      {
        "id": "479a14d7-7693-4579-953f-06e5588df8f8",
        "text": "Индексті дискіден жою"
      },
      {
        "id": "463a18f3-a2ff-45c8-be60-7217ce3ff657",
        "text": "Әрбір 51123 беттен кейін (шамамен 4 ГБ деректерді қамтиды)"
      },
      {
        "id": "2f45533d-758d-4529-a49d-851ac032377b",
        "text": "Дерекқордың резервтік көшірмелерін орындау"
      },
      {
        "id": "83a7b9b0-c1fa-4238-bd10-9137be57f4d3",
        "text": "Жүйелік кестелердің жалпы жиынтығы"
      }
    ],
    "correctOptionIds": [
      "5723521a-9621-41ca-8f88-bec8aae8f04c"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "6fbc0b94-b5b0-437e-ab7d-3639b5e097aa",
    "subjectId": "db",
    "text": "Key Lookup оқиғасы қашан орын алады?",
    "options": [
      {
        "id": "8fa67c1f-1a88-48fd-8e0b-230299c3f0ce",
        "text": "Кластерленбеген индекс арқылы табылған жолдың басқа бағандарын алу үшін кластерленген индекс кілті арқылы негізгі кестеге жүгінгенде"
      },
      {
        "id": "ec0e083d-65d8-4037-8543-6a73be0bb8d2",
        "text": "Heap кестесінде индекстер мүлдем жоқ болғанда"
      },
      {
        "id": "c54966c0-ab73-426f-8b52-b6cadc913ab6",
        "text": "Дерекқор файлы өшірілгенде"
      },
      {
        "id": "d16faf1a-2166-4e82-a826-a0f1a8505af2",
        "text": "WAL принципі бұзылғанда"
      },
      {
        "id": "877439e5-ea3c-46cf-9a2d-3001b04761d0",
        "text": "RID (Row Identifier)"
      },
      {
        "id": "3813fd9f-4f04-488d-aeb2-8f7e855ee503",
        "text": "Жүйені тоқтатып тұрады"
      },
      {
        "id": "4a49ddb0-afd2-4bdd-874e-d5bec4838dc9",
        "text": "Сұраныстардың синтаксисін оңтайландырады"
      },
      {
        "id": "ae9a6c99-94e4-452f-92d0-9e3fe0ad5376",
        "text": "Файл түрінде дискінің басқа жерінде сақталады"
      }
    ],
    "correctOptionIds": [
      "8fa67c1f-1a88-48fd-8e0b-230299c3f0ce"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "4c2377d4-de79-4fc3-ae18-d2ccad41d2e7",
    "subjectId": "db",
    "text": "Key Lookup немесе RID Lookup оқиғаларын болдырмау үшін кластерленбеген индекске қосымша бағандарды қалай қосуға болады?",
    "options": [
      {
        "id": "5f3ff839-dc2c-4f35-94d4-e969fbe48bcb",
        "text": "INCLUDE сөйлемін қолдану арқылы (Covering Index)"
      },
      {
        "id": "a2d98619-7ae6-4bff-b614-953b231db8b0",
        "text": "Жаңа Clustered Index құру арқылы"
      },
      {
        "id": "91330f1b-1f2e-455f-93ec-4a9677d9208b",
        "text": "CHECK шектеуін қосу арқылы"
      },
      {
        "id": "22aecc86-50ea-430c-a156-df278b736e38",
        "text": "Индексті reorganise жасау арқылы"
      },
      {
        "id": "1a3bb8d5-e28e-4d52-8651-ee5ca99ee8a7",
        "text": "Кестені толық тазарту керек"
      },
      {
        "id": "cce7bca9-e0ba-4546-9436-1a3e7c1952fa",
        "text": "TempDB файлдарының санын азайту"
      },
      {
        "id": "d4c025ba-408c-494c-b792-68d33d2ce107",
        "text": "Page Size"
      },
      {
        "id": "6081858a-ba07-4328-928d-3b0de3638a03",
        "text": "Транзакцияларды қалпына келтіру жылдамдығын бақылау"
      }
    ],
    "correctOptionIds": [
      "5f3ff839-dc2c-4f35-94d4-e969fbe48bcb"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "652f74e9-4091-43f6-af64-4dc8856ad68f",
    "subjectId": "db",
    "text": "Covering Index (жабушы индекс) деген не?",
    "options": [
      {
        "id": "3a2bb507-1a1e-4af6-9e81-a210b69c69ca",
        "text": "Сұранысқа қажетті барлық бағандарды өзінде (немесе INCLUDE бөлімінде) сақтайтын, негізгі кестеге жүгінуді қажет етпейтін индекс"
      },
      {
        "id": "d43ab60a-3ef4-4089-a778-5fa9ec6a8783",
        "text": "Кестенің барлық бағандарын толық қамтитын бастапқы кілт"
      },
      {
        "id": "5e0edcc0-260b-4ad1-9a36-a809eeae258d",
        "text": "TempDB дерекқорындағы уақытша индекс"
      },
      {
        "id": "241d1d9e-199e-4da3-a184-5a17487771bc",
        "text": "Тек оқу режимінде жұмыс істейтін жүйелік индекс"
      },
      {
        "id": "25386ecc-ab91-479d-a8b5-0933cbc3cab0",
        "text": "Page Size"
      },
      {
        "id": "86f22d24-b296-4f72-aafd-0bbffeaa5acb",
        "text": "Транзакцияларды мүлдем жазбайды"
      },
      {
        "id": "d1bb8ea3-9a24-4aab-9cc2-c7e333abe2b6",
        "text": "Жолды автоматты түрде қысқартып қиып тастайды"
      },
      {
        "id": "6efd9308-9f68-4877-845c-8e345a1ed76d",
        "text": "64 байт"
      }
    ],
    "correctOptionIds": [
      "3a2bb507-1a1e-4af6-9e81-a210b69c69ca"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "1bddb595-1438-45c0-a74f-840c9e394e8b",
    "subjectId": "db",
    "text": "SQL Server-дегі TempDB-де кездесетін және өнімділікті төмендететін PAGELATCH ақаулығы неден туындайды?",
    "options": [
      {
        "id": "272cccdd-c48c-49ed-a2cc-ef666a550adf",
        "text": "Бір уақытта көптеген желілік ағындар TempDB-дегі жүйелік беттерді (GAM, SGAM, PFS) бөлісуге тырысқанда (allocation bottleneck)"
      },
      {
        "id": "f9fc44f7-343a-4ff3-ab0c-7aae2ed0f4ad",
        "text": "TempDB файлының дискідегі орны таусылғанда"
      },
      {
        "id": "ba13db5b-ff92-47c1-bb61-6ea89287d4d3",
        "text": "Уақытша кестелер тым үлкен болып кеткенде"
      },
      {
        "id": "a08d2ff9-f9e3-4b58-8d5e-d737649fbb59",
        "text": "Индекстер Rebuild жасалып жатқанда"
      },
      {
        "id": "31659943-d103-4d34-a27e-4c8e89c4ba32",
        "text": "Жүйелік ақпаратты толық сақтау үшін"
      },
      {
        "id": "20c3ebc2-aacb-463f-b80d-85586c0cfceb",
        "text": ".ndf (Secondary Data File)"
      },
      {
        "id": "06c009bf-3e26-473b-ba44-1350091dab45",
        "text": "Дерекқордың файлдарын жауып тастау"
      },
      {
        "id": "8275be55-a189-4782-a514-43f2e0ca0ca4",
        "text": "Жүйелік Master дерекқорына бөлініп жазылады"
      }
    ],
    "correctOptionIds": [
      "272cccdd-c48c-49ed-a2cc-ef666a550adf"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "134d805b-8570-49ae-a609-8782e199e26c",
    "subjectId": "db",
    "text": "TempDB allocation bottleneck ақаулығын азайту үшін қандай әкімшілік шара қолданылады?",
    "options": [
      {
        "id": "cafb32dc-e7cd-4301-a687-5723d1086fa5",
        "text": "TempDB деректер файлдарының санын процессор ядроларының санына сәйкестендіріп тең бөлу (әдетте 8 файлға дейін)"
      },
      {
        "id": "914fe161-1c55-4fd4-88d3-b59c13d7ec1d",
        "text": "TempDB-ді толығымен өшіру"
      },
      {
        "id": "26f81f2e-7351-44ce-a6e4-76807d924c4c",
        "text": "Жүйелік Master дерекқорын үлкейту"
      },
      {
        "id": "e2500d0f-d6da-4c5e-a808-17597339b5c5",
        "text": "Параллельдікті (MAXDOP) мүлдем сөндіру"
      },
      {
        "id": "f88561ca-1bdf-4d55-ae44-effde28e0d86",
        "text": "Pointer Offset"
      },
      {
        "id": "c0fbe1e6-0fb0-4a14-8ebe-c333af484aec",
        "text": "Индекстің физикалық бүлінгенін тексеру"
      },
      {
        "id": "f424512e-943f-483a-94e9-baa7b566ae98",
        "text": ".txt"
      },
      {
        "id": "b38882a9-dcf0-4afc-860e-139560f15671",
        "text": "Транзакциялар өшіріледі"
      }
    ],
    "correctOptionIds": [
      "cafb32dc-e7cd-4301-a687-5723d1086fa5"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "72b74e6d-ae76-41d2-bdf3-22263a6d47b0",
    "subjectId": "db",
    "text": "SQL Server-дегі 'Parameter Sniffing' деген не?",
    "options": [
      {
        "id": "c113fabe-7a67-471f-9aac-99132dca4975",
        "text": "Оңтайландырғыштың процедураны алғаш рет орындағандағы параметр мәніне негіздеп орындалу жоспарын құруы және кейін басқа параметрлер үшін де сол жоспарды тиімсіз қолдануы"
      },
      {
        "id": "fda803ee-c773-42d2-ad8d-29c365e16737",
        "text": "Сұраныстың қателіктерін автоматты түрде іздеп табу механизмі"
      },
      {
        "id": "1ef11335-ba9c-4844-8db3-86bf68477f2e",
        "text": "Пайдаланушылардың құпия сөздерін тексеру әдісі"
      },
      {
        "id": "17e928a4-468c-4374-b87f-0400817b317f",
        "text": "Жүйе жадын тазарту процесі"
      },
      {
        "id": "f1d9da80-2e59-48db-bdff-7c77dc2d8ca0",
        "text": "Өзгермейтін архивтік деректерді қорғау және резервтік көшірме жасау уақытын қысқарту үшін"
      },
      {
        "id": "c5e4ba67-72fb-4384-8874-0444cd7d8019",
        "text": "Heap кестесінде индекстер мүлдем жоқ болғанда"
      },
      {
        "id": "8c5b0d56-b4a2-405e-a2f7-e19b042acd07",
        "text": "Иә, толығымен өзгертеді"
      },
      {
        "id": "87c214f7-4ee0-4fd5-88f6-af36faff17ea",
        "text": "RID (Row Identifier)"
      }
    ],
    "correctOptionIds": [
      "c113fabe-7a67-471f-9aac-99132dca4975"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "f53a9ba6-d630-4e97-88ed-4fccc18bab8b",
    "subjectId": "db",
    "text": "Parameter Sniffing мәселесін шешудің бір жолы қандай?",
    "options": [
      {
        "id": "f41c9338-959a-4f58-b053-91ad243093cd",
        "text": "Процедура ішінде RECOMPILE немесе OPTIMIZE FOR сұраныс нұсқаулықтарын қолдану"
      },
      {
        "id": "b7eca561-8131-4640-ac0b-9148a055f142",
        "text": "Дерекқорды Simple Recovery моделіне ауыстыру"
      },
      {
        "id": "f0c2382f-ca93-48ba-ba3a-854d41a654d7",
        "text": "TempDB файлдарының санын азайту"
      },
      {
        "id": "25bfeaa5-0aa3-4a8a-9f31-f940a6e55f07",
        "text": "Кластерленген индексті өшіру"
      },
      {
        "id": "c965af4f-53be-47df-8918-cd7b498b06e6",
        "text": "Индекстерді жарамсыз етеді"
      },
      {
        "id": "54577c9f-7d38-4385-b5a2-8a3fbe64fcc2",
        "text": "Өлшемі екі есеге ұлғаяды"
      },
      {
        "id": "64bfa1f0-145a-4e88-9141-6f00ffdbe2ed",
        "text": "Сұранысты дискіге жазу кезінде"
      },
      {
        "id": "0e1e3d09-d806-484c-800a-eaa06b3d992d",
        "text": "Сектор (Sector), көлемі 512 байт"
      }
    ],
    "correctOptionIds": [
      "f41c9338-959a-4f58-b053-91ad243093cd"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "30e644b4-5c99-49d4-9a78-fa13b169728b",
    "subjectId": "db",
    "text": "SQL Server-де сұраныстар тарихын және орындалу жоспарларын автоматты түрде жинап, талдап тұратын мүмкіндік қалай аталады?",
    "options": [
      {
        "id": "e1387e79-692c-4d7c-bf74-0c06cc79027d",
        "text": "Query Store"
      },
      {
        "id": "50c5191e-99ec-49e9-8598-3466c8a22bfe",
        "text": "Plan Cache"
      },
      {
        "id": "0b61987b-50e7-48b9-9773-c69ae4c83b0a",
        "text": "Buffer Pool"
      },
      {
        "id": "5ac7519e-c37e-48c7-9d45-f008eb74dcfd",
        "text": "Activity Monitor"
      },
      {
        "id": "c0788816-84a8-4d57-bbdc-ba68a7ad5913",
        "text": "Параллельдікті (MAXDOP) мүлдем сөндіру"
      },
      {
        "id": "af14b227-8860-4192-bc6a-97045334ab7f",
        "text": "Уақытша файл"
      },
      {
        "id": "031f1c5c-551d-4b95-871e-761cfbd12757",
        "text": "Бет (Page), көлемі 8 КБ"
      },
      {
        "id": "0f038cbc-d656-4656-b5b0-14953c4f5e26",
        "text": ".ldf (Log Data File)"
      }
    ],
    "correctOptionIds": [
      "e1387e79-692c-4d7c-bf74-0c06cc79027d"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "d9808708-c7d1-44b5-86d5-f8468dfce334",
    "subjectId": "db",
    "text": "SQL Server сәулетіндегі 'Spinlock' деген не?",
    "options": [
      {
        "id": "bb1b069d-cf30-42af-aaeb-d27b5f572246",
        "text": "Ресурсты босатқанша күту үшін процессор ядросын қысқа циклде айналдырып тұратын өте жылдам және жеңіл бұғаттау механизмі"
      },
      {
        "id": "d2839238-539c-40af-82fc-044d1f0db9c2",
        "text": "Кестелерді толық бұғаттайтын транзакция түрі"
      },
      {
        "id": "e87eca31-7f22-49a2-8925-6b053cb8d8ce",
        "text": "SQL Server Agent-тің уақытша тоқтауы"
      },
      {
        "id": "b2f6e3c1-45ef-4dd9-89dc-824920f8a11c",
        "text": "Дерекқор файлдарын қорғайтын жүйелік кілт"
      },
      {
        "id": "be63a14f-af3d-4064-ab06-ca22a45d2ac0",
        "text": "Индекс ағашы арқылы нақты қажетті жолдарды өте жылдам тауып алу әдісі (оңтайлы іздеу)"
      },
      {
        "id": "c6373e4e-333f-415e-95bf-c2f8d9636f7e",
        "text": "Деректер бетіне жасалған кез келген өзгеріс дискідегі деректер файлына (.mdf) жазылмас бұрын, міндетті түрде транзакция журналына (.ldf) жазылуы тиіс"
      },
      {
        "id": "2c189d71-50c6-4ef2-9c56-efe6f27af97c",
        "text": "Дерекқордың файлдарын жауып тастау"
      },
      {
        "id": "c758d9be-2cb2-433e-8c03-da59c2486098",
        "text": "Деректерді тек оқуға болады (Read-only)"
      }
    ],
    "correctOptionIds": [
      "bb1b069d-cf30-42af-aaeb-d27b5f572246"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "172a524f-62e0-47bb-b173-799fb2c100bc",
    "subjectId": "db",
    "text": "SQL Server-дегі 'Latch' пен 'Lock' арасындағы басты айырмашылық қандай?",
    "options": [
      {
        "id": "bbc93a45-774d-4c5e-8b74-ba3274283b6e",
        "text": "Latch – жадтағы физикалық беттерді қорғайтын ішкі жылдам бұғаттау, ал Lock – транзакция деңгейінде логикалық деректерді қорғайтын бұғаттау"
      },
      {
        "id": "5c99fa48-3072-4d64-adc2-13e42568b0d8",
        "text": "Lock тек қана TempDB ішінде қолданылады"
      },
      {
        "id": "b1fe8e64-8063-4ebe-95cb-98906d66470b",
        "text": "Latch қолданушылар тарапынан қолмен қойылады"
      },
      {
        "id": "e8ddf246-5fe3-4e24-85d0-e0d206ad8a8a",
        "text": "Ешқандай айырмашылығы жоқ"
      },
      {
        "id": "10a880cb-e5b0-4c10-9a55-78babd1e4dd6",
        "text": "Дерекқорды қалпына келтіруді өте жылдам және оңай етеді"
      },
      {
        "id": "7656e66e-0e8d-4799-b13f-72eb19c792d5",
        "text": "Әрбір 51123 беттен кейін (шамамен 4 ГБ деректерді қамтиды)"
      },
      {
        "id": "baf806ca-5d3f-4725-874b-9d1ee7db161b",
        "text": "32 байт"
      },
      {
        "id": "a1a0d822-af9b-4b9d-bbbc-b7cfc92e4278",
        "text": "Уақытша кестелерді, аралық сұраныс нәтижелерін және нұсқалар қоймасын (version store) сақтау"
      }
    ],
    "correctOptionIds": [
      "bbc93a45-774d-4c5e-8b74-ba3274283b6e"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "a8f1fb07-ccf6-4796-b726-5d7cc88122b8",
    "subjectId": "db",
    "text": "Page Free Space (PFS) беттері дерекқорында әрбір нешінші беттен кейін кездеседі?",
    "options": [
      {
        "id": "a3478879-2ac5-4a1c-a96c-032678158bee",
        "text": "Әрбір 8088 беттен кейін"
      },
      {
        "id": "e02b427b-7d20-4b68-b0d5-fcbbbf492441",
        "text": "Әрбір 1000 беттен кейін"
      },
      {
        "id": "9092cf79-6220-4b61-b481-3df256c694df",
        "text": "Әрбір 512 беттен кейін"
      },
      {
        "id": "88e06c00-b3db-4c1e-8067-f313318fabf7",
        "text": "Әрбір 64 беттен кейін"
      },
      {
        "id": "5b663cac-4006-4478-a057-34d5cc47767d",
        "text": "1024 байт"
      },
      {
        "id": "724d07c5-f94b-4fb1-9a4e-bd67c7fab0f6",
        "text": "Индекс тек 80 секунд ішінде жұмыс істейді"
      },
      {
        "id": "84406885-c27f-46e2-91ae-02864545b55d",
        "text": "Page Header"
      },
      {
        "id": "f64e4252-5639-4bf4-897a-b0ff982f1afa",
        "text": "Жаңа Clustered Index құру"
      }
    ],
    "correctOptionIds": [
      "a3478879-2ac5-4a1c-a96c-032678158bee"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "14e7a8e1-3d1a-4a30-864a-6723d765c267",
    "subjectId": "db",
    "text": "Global Allocation Map (GAM) және SGAM беттері дерекқорында әрбір нешінші беттен кейін орналасады?",
    "options": [
      {
        "id": "401900c5-c2fb-45c4-9e44-efa5a99ed691",
        "text": "Әрбір 51123 беттен кейін (шамамен 4 ГБ деректерді қамтиды)"
      },
      {
        "id": "66f081bf-3180-4e3b-8b13-351af9a563f7",
        "text": "Әрбір 10000 беттен кейін"
      },
      {
        "id": "8471b9af-ddee-4213-9da3-e4a36f944940",
        "text": "Әрбір 8088 беттен кейін"
      },
      {
        "id": "45538f72-f516-434e-976d-946f503f5c56",
        "text": "Әрбір 100 беттен кейін"
      },
      {
        "id": "c561e7fd-0797-43a4-95a5-802b6fdbf606",
        "text": "Segment (Сегмент)"
      },
      {
        "id": "8957eae7-4cc1-4336-bc0f-ee64b107e653",
        "text": "Журнал мүлдем өзгермейді"
      },
      {
        "id": "697f4ce7-8994-418a-9efe-11420d6bc6d8",
        "text": "Thread Threshold"
      },
      {
        "id": "1b260f33-5f95-45c2-a0bf-3c3f28d40e1e",
        "text": "Қате шығарып, жазбаны мүлдем қоспайды"
      }
    ],
    "correctOptionIds": [
      "401900c5-c2fb-45c4-9e44-efa5a99ed691"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "c0f94012-1ad4-4b8f-8cea-450d0578b953",
    "subjectId": "db",
    "text": "SQL Server-де транзакцияның ACID қасиеттерін орындау үшін өзгерістерді журналға міндетті түрде бірінші жазатын ішкі процесс қалай аталады?",
    "options": [
      {
        "id": "9968d29f-acc6-4dcc-bab4-8b7fb64be284",
        "text": "Log Writer (Log Writer Thread)"
      },
      {
        "id": "bcd1d6f2-20f0-4fa0-a3b1-e1a821d96aba",
        "text": "Lazy Reader"
      },
      {
        "id": "42076986-7ee0-4b21-8b62-9d4c172960a2",
        "text": "Checkpoint Manager"
      },
      {
        "id": "7ad0981f-83d5-4430-9e51-3f2dfffe1f3d",
        "text": "Buffer Manager"
      },
      {
        "id": "0fcb8612-3ee1-4fa5-b38f-0fb36dc4ce39",
        "text": "Сұранысты орындауға (мысалы, сұрыптау немесе хэш қосылу үшін) жедел жад (RAM) жетіспегендіктен, деректер уақытша TempDB-ге жазылғанда"
      },
      {
        "id": "e4b221dc-abc7-4c56-9110-25c2e7ceddcb",
        "text": "Пайдаланушылардың құпия сөздерін тексеру әдісі"
      },
      {
        "id": "0bac63d3-986d-4d3c-aba1-c174396881e8",
        "text": "Ол бастапқы деректер файлы (Primary Data File) болып табылады және жүйелік ақпаратты, кестелерді сақтайды"
      },
      {
        "id": "d821e703-9c06-4dea-9ed5-ddb1cd40b280",
        "text": "Жаңадан индекс құру командасы"
      }
    ],
    "correctOptionIds": [
      "9968d29f-acc6-4dcc-bab4-8b7fb64be284"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "7ce19e04-d15a-4f31-8207-251cbafcf78f",
    "subjectId": "db",
    "text": "TempDB-дегі уақытша кестелер (#temp) қай жерде сақталады?",
    "options": [
      {
        "id": "edef827d-3aa6-49a9-b91d-627ac4528106",
        "text": "TempDB дерекқорының жедел жадында және қажет болса дискісінде"
      },
      {
        "id": "4ff8f149-38e3-4006-8ef8-660d493818fc",
        "text": "Master дерекқорының ішінде"
      },
      {
        "id": "8fd4c876-1750-4d99-a11a-0e714554d8d3",
        "text": "Пайдаланушының жеке компьютерінде"
      },
      {
        "id": "81f1e3dd-f9be-433e-a6d7-86449a443972",
        "text": "Транзакциялар журналында ғана"
      },
      {
        "id": "06d0e6a2-9e17-4a80-809a-702d834cd877",
        "text": "Оңтайландырғыш ұсынған орындалу жоспарын тікелей іске асырып, Storage Engine-нен деректерді сұрайды"
      },
      {
        "id": "ed7b1fd1-62fd-4b13-8889-877979ad5e97",
        "text": "Сақтық көшірмелердің нұсқаларын сақтау үшін"
      },
      {
        "id": "6bc3600d-5e75-49e9-ad77-38627c8cb6fd",
        "text": "Сыртқы кілттерді өшіру керек"
      },
      {
        "id": "0fea8855-ac96-4875-a69b-126ac7197dc9",
        "text": ".mdf"
      }
    ],
    "correctOptionIds": [
      "edef827d-3aa6-49a9-b91d-627ac4528106"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "2d9476ac-4d68-4ae1-a74a-c370d6f227d1",
    "subjectId": "db",
    "text": "SQL Server-дегі 'Partitioned Table' (секцияланған кесте) деректері дискіде қалай бөлінеді?",
    "options": [
      {
        "id": "93be19bf-6dbd-409f-a7b1-19fa10bdfc63",
        "text": "Partition Scheme (секциялау схемасы) арқылы әртүрлі файлдар топтарына сәйкестендіріліп бөлінеді"
      },
      {
        "id": "595ed4d6-8a72-4742-9c44-8057539b73fa",
        "text": "Олар тек қана бір файл ішінде сақталады"
      },
      {
        "id": "a54d8a84-33ad-47ab-89cc-45f96036ce15",
        "text": "Жүйелік Master дерекқорына бөлініп жазылады"
      },
      {
        "id": "dc938cfa-52a4-492c-b155-3c55937481d0",
        "text": "Индекстерді өшіру арқылы бөлінеді"
      },
      {
        "id": "88fb31c8-e00b-4550-97bd-ff93e4a0e542",
        "text": "96 байт"
      },
      {
        "id": "a152c7eb-d61d-4f21-a473-9bae868a202f",
        "text": "Дискінің фрагментациясын арттырады және деректерді жазу жылдамдығын төмендетеді"
      },
      {
        "id": "7646b6b0-4cfe-4d8a-8903-636163c1b458",
        "text": "Сұранысты орындауға (мысалы, сұрыптау немесе хэш қосылу үшін) жедел жад (RAM) жетіспегендіктен, деректер уақытша TempDB-ге жазылғанда"
      },
      {
        "id": "0406af43-d571-4489-8234-e829ab673653",
        "text": "MAXDOP (Maximum Degree of Parallelism)"
      }
    ],
    "correctOptionIds": [
      "93be19bf-6dbd-409f-a7b1-19fa10bdfc63"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "37de0d05-f5c0-4060-a1a6-49875ffd008e",
    "subjectId": "db",
    "text": "Секциялау шекараларын (мысалы, дата диапазондарын) анықтайтын дерекқор нысаны қалай аталады?",
    "options": [
      {
        "id": "a685dea4-d4c7-4564-a0c0-0cdd9228e095",
        "text": "Partition Function (секциялау функциясы)"
      },
      {
        "id": "8e680205-5465-40c6-a5cb-ebe125cd695c",
        "text": "Partition Scheme (секциялау схемасы)"
      },
      {
        "id": "49960e53-3a3f-4bd3-88dc-39eeb4473159",
        "text": "Boundary Constraint"
      },
      {
        "id": "d5aa886b-4b4f-4759-a953-132f646d2510",
        "text": "Index Filter"
      },
      {
        "id": "7e7a4ad9-d241-4492-887e-70f645e776ea",
        "text": "Тек TempDB дерекқоры үшін жұмыс істейді"
      },
      {
        "id": "778311bc-e260-46f0-a477-9d255938b970",
        "text": "Бастапқы кілт бұзылған кезде"
      },
      {
        "id": "99489037-d46d-4d00-93b0-ac614109842e",
        "text": "Әрбір 51123 беттен кейін (шамамен 4 ГБ деректерді қамтиды)"
      },
      {
        "id": "585a57a4-e237-461e-abac-308d3f4cc2d7",
        "text": "Кестедегі деректерді индекстің кілті бойынша физикалық түрде сұрыптап сақтайды (әр кестеде тек біреу ғана болады)"
      }
    ],
    "correctOptionIds": [
      "a685dea4-d4c7-4564-a0c0-0cdd9228e095"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "ec7948df-3976-4e46-8155-840ab473bd69",
    "subjectId": "db",
    "text": "SQL Server-де параллель орындалу кезінде ағындарды үйлестіруге кететін уақытты реттейтін параметр қайсысы?",
    "options": [
      {
        "id": "97b3ccd0-ba4d-4355-a4a8-0843b5c86aec",
        "text": "MAXDOP (Maximum Degree of Parallelism)"
      },
      {
        "id": "8c6b355c-3619-415d-a819-fdd1173f6461",
        "text": "Fill Factor"
      },
      {
        "id": "f98a5b3d-9692-46dc-9620-5b1903dc37e0",
        "text": "Cost Threshold"
      },
      {
        "id": "9a0d22de-50ed-4dea-8258-eb588675ec54",
        "text": "Buffer Limit"
      },
      {
        "id": "4b279c92-bde6-4471-9f3a-aef3b8166b97",
        "text": "1024 байт"
      },
      {
        "id": "1b981486-ef84-4e6f-94e4-603716061c0d",
        "text": "Журнал файлы мүлдем өзгермейді"
      },
      {
        "id": "ba86ea89-1d0f-4023-85d6-03aeb1333509",
        "text": ".mdf және .ldf физикалық файлдары"
      },
      {
        "id": "d4b92685-c9a5-4960-9abe-b70ae70e9d14",
        "text": "SQL Server Agent жұмысын басқару үшін"
      }
    ],
    "correctOptionIds": [
      "97b3ccd0-ba4d-4355-a4a8-0843b5c86aec"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "aadef08c-2fae-4b2c-954e-32c58a17fd40",
    "subjectId": "db",
    "text": "MAXDOP = 1 мәні нені білдіреді?",
    "options": [
      {
        "id": "c189a31b-423a-4f7c-afd2-47172e9e73de",
        "text": "Сұраныстар тек бір ғана процессорлық ағынмен (параллельдіксіз) орындалады"
      },
      {
        "id": "4e0a672c-c194-4505-95a7-707a743dcda9",
        "text": "Сұраныстар тек 1 секунд ішінде орындалады"
      },
      {
        "id": "d9589b56-3df7-4719-9eee-bce0a2960fa4",
        "text": "Кестеде тек 1 индекс қолданылады"
      },
      {
        "id": "3895459a-e398-4a6c-b3f9-2995fc7729e3",
        "text": "Дерекқорда тек 1 сессия жұмыс істей алады"
      },
      {
        "id": "7343e80f-7d0c-4c5e-adbe-e2374b7ca4fb",
        "text": "Жоқ, ол деректерге сілтеме жасайтын жеке құрылым ретінде сақталады"
      },
      {
        "id": "4b1f08da-af17-44b9-ae97-7991d40a72e6",
        "text": "Жүйенің қауіпсіздік ережелерін сақтау үшін"
      },
      {
        "id": "d8e5af5a-98e0-4025-b4e8-d83b973c9e83",
        "text": "SQL Server Agent жұмысын басқару үшін"
      },
      {
        "id": "383f9c13-5925-455c-b872-cf373e7530ae",
        "text": "Сұраныстар тек түнде орындалады"
      }
    ],
    "correctOptionIds": [
      "c189a31b-423a-4f7c-afd2-47172e9e73de"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "7599ce96-7637-449c-bfc6-08579202ff20",
    "subjectId": "db",
    "text": "SQL Server-де параллель орындалуды іске қосу шегін анықтайтын баптау қалай аталады?",
    "options": [
      {
        "id": "f7b76a6e-6c6a-4006-a61a-5d3304b81322",
        "text": "Cost Threshold for Parallelism"
      },
      {
        "id": "c4b785e0-b925-4882-a65a-ea4cf9ba0dba",
        "text": "MAXDOP Limit"
      },
      {
        "id": "e905aa95-4aeb-4cd2-bb14-238f6b2a3b9d",
        "text": "Thread Threshold"
      },
      {
        "id": "12dafa72-70ce-4348-9be1-8d026518410d",
        "text": "Parallelism Boundary"
      },
      {
        "id": "261bf5cd-d8e9-428b-a266-aa7e52f638e6",
        "text": "8192 байт"
      },
      {
        "id": "34521b6c-8a2f-45d8-a75b-5526dc145c13",
        "text": "Row-Overflow Data беттеріне ауыстырады және негізгі бетте оған сілтеме қалдырады"
      },
      {
        "id": "bd834ed4-98c3-45d8-ba52-39eb14f227ff",
        "text": "Ақаулы және оқылмайтын бет"
      },
      {
        "id": "c6be45dd-8347-4c7c-ad9c-9f9fe42d0d0d",
        "text": "Primary Data файл (.mdf)"
      }
    ],
    "correctOptionIds": [
      "f7b76a6e-6c6a-4006-a61a-5d3304b81322"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "3e82b0a4-96c9-4489-b7ca-1ef8300cc33d",
    "subjectId": "db",
    "text": "SQL Server-де деректерді жазу кезінде дискіге бірден жазбай, жадта өзгерту принципі қалай аталады?",
    "options": [
      {
        "id": "bcef6071-737f-4e43-8364-18e10b4b1cec",
        "text": "Write-Ahead Logging (WAL)"
      },
      {
        "id": "6256e7e8-c428-4790-9293-ee3f3cdb56d3",
        "text": "Buffer Spilling"
      },
      {
        "id": "9f0a72d2-2d78-4448-b8b5-126125ad4665",
        "text": "Lazy Writing"
      },
      {
        "id": "8339398f-85c0-4986-9f10-7313861f61fe",
        "text": "Dirty Page Allocation"
      },
      {
        "id": "90bdcb96-7a5a-4495-8445-828ab01b205f",
        "text": "MAXDOP (Maximum Degree of Parallelism)"
      },
      {
        "id": "83bf52f9-6177-4bf1-966f-a34736909958",
        "text": "TempDB дерекқоры автоматты түрде өшірілгенде"
      },
      {
        "id": "b3c2e2bd-1765-46ae-8328-e3b2f628f86d",
        "text": "Резервтік көшірме жасау жолдарын анықтау"
      },
      {
        "id": "12d88c2a-077f-496e-93d0-1c77da4e0524",
        "text": "Bulk-Logged режимінде жаппай операциялар жасалғанда"
      }
    ],
    "correctOptionIds": [
      "bcef6071-737f-4e43-8364-18e10b4b1cec"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "b650a8a1-b7e4-477a-97dd-a24390e032d4",
    "subjectId": "db",
    "text": "TempDB дерекқорында 'version store' не үшін қолданылады?",
    "options": [
      {
        "id": "f5055c9c-1ed3-4552-a1c3-dc721b98a465",
        "text": "Snapshot Isolation (суреттік оқшаулау) режимінде деректердің ескі нұсқаларын оқушы транзакциялар үшін сақтап тұруға"
      },
      {
        "id": "51feae08-6e89-4ca6-b3bb-a353632e1bf1",
        "text": "Кесте құрылымының нұсқаларын бақылау үшін"
      },
      {
        "id": "db2a5e1c-35e3-4ed4-908c-a84c56957ecb",
        "text": "Сақтық көшірмелердің нұсқаларын сақтау үшін"
      },
      {
        "id": "569bc72e-100e-42e1-9ae2-0f63d8909b6a",
        "text": "Жүйелік процедураларды нұсқалау үшін"
      },
      {
        "id": "40bda0a3-7216-4c55-9bab-4279cd3aec45",
        "text": "Индекстің барлық беттерін басынан аяғына дейін толық оқу"
      },
      {
        "id": "a73f4e81-4ade-44db-8c18-9a1979915625",
        "text": "Индекс файлы"
      },
      {
        "id": "8e592717-b649-4012-803d-36f9ef8e2b5d",
        "text": "Орындалу жоспарын тікелей орындау кезінде"
      },
      {
        "id": "7839cad9-ff7d-438a-90be-da775c4f7b15",
        "text": "Дерекқордың өлшемін бақылау үшін"
      }
    ],
    "correctOptionIds": [
      "f5055c9c-1ed3-4552-a1c3-dc721b98a465"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "c0b6a592-6475-4623-a994-1763e1f73cce",
    "subjectId": "db",
    "text": "SQL Server-дегі 'Heap' кестесінің кластерленген кестеден басты айырмашылығы қандай?",
    "options": [
      {
        "id": "9b50fba3-7e94-4fa0-9fd4-c259a994b1b8",
        "text": "Оның деректері ешқандай ретсіз, беттердің бос орындарына кездейсоқ жазылады (B-Tree құрылымы жоқ)"
      },
      {
        "id": "f820bc4d-c697-4b3b-85cd-4ec6573c6670",
        "text": "Heap кестесі тек уақытша TempDB-де сақталады"
      },
      {
        "id": "08dae465-f2ee-4e94-8ff2-f13715363fd6",
        "text": "Heap кестесінде сыртқы кілттерді қолдануға болмайды"
      },
      {
        "id": "6855dc28-3967-4f9d-8ee8-0df799503707",
        "text": "Ешқандай айырмашылығы жоқ"
      },
      {
        "id": "a818eb8d-3781-446a-964f-1138e5286dd7",
        "text": "Жоқ, бұл өте аз журналданатын жеңіл орындалатын процесс"
      },
      {
        "id": "0ba24013-b8ae-4e16-895c-a2d68efe3b27",
        "text": "TempDB-ді автоматты тазарту үшін"
      },
      {
        "id": "c3c20df0-3ea9-41e4-b072-db732a1eb84c",
        "text": "TempDB файлдарының санын реттейді"
      },
      {
        "id": "a6121e45-eb29-47d1-a87e-20c3973a500d",
        "text": "Тек TempDB дерекқоры үшін жұмыс істейді"
      }
    ],
    "correctOptionIds": [
      "9b50fba3-7e94-4fa0-9fd4-c259a994b1b8"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "7155daf4-494c-4766-bde1-7970f89b40bf",
    "subjectId": "db",
    "text": "Heap кестесінде жолдарды іздеуді жылдамдату үшін не істеу керек?",
    "options": [
      {
        "id": "3cbc2a0c-1282-4218-b005-3f698069026d",
        "text": "Кластерленген индекс (Clustered Index) құру керек"
      },
      {
        "id": "094dc892-f546-4242-a86e-461ce850dd17",
        "text": "Кестені толық тазарту керек"
      },
      {
        "id": "1827c54b-c42b-43a1-9008-757faa5ec636",
        "text": "Сыртқы кілттерді өшіру керек"
      },
      {
        "id": "e3c7ab4a-bd0c-4e19-ad78-318c205bc51c",
        "text": "Жаңа NDF файлын қосу керек"
      },
      {
        "id": "742cbd53-d621-4004-9ae0-c47782097eac",
        "text": "# кесте_аты (бір решіткамен)"
      },
      {
        "id": "621cf379-3143-4dd0-901e-63582c8a9b7a",
        "text": "Log Writer"
      },
      {
        "id": "49b3558f-1e7c-4c3d-a758-7f6b7d1a5c8a",
        "text": "Кестелердің санын азайту"
      },
      {
        "id": "796f8700-c7d3-4bc0-a44e-76c36a7aec43",
        "text": "Иә, тек бірінші рет құрылғанда ғана өзгертеді"
      }
    ],
    "correctOptionIds": [
      "3cbc2a0c-1282-4218-b005-3f698069026d"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "68c0a456-4c11-4962-9da6-5807ac92cbeb",
    "subjectId": "db",
    "text": "SQL Server-де индекстерді reorganise (қайта ұйымдастыру) жасағанда транзакциялық журнал (.ldf) қатты тола ма?",
    "options": [
      {
        "id": "fb35d312-1dda-4bae-832d-fd732cb0696d",
        "text": "Жоқ, бұл өте аз журналданатын жеңіл орындалатын процесс"
      },
      {
        "id": "3b817593-48ea-4f08-af21-19075f455c98",
        "text": "Иә, Rebuild сияқты өте үлкен көлемде толады"
      },
      {
        "id": "44b874ed-09e7-4d47-ae71-39e862607227",
        "text": "Иә, журнал мүлдем жабылып қалады"
      },
      {
        "id": "12c90f9e-6ed5-4eb9-be6d-309518cc3f45",
        "text": "Журнал мүлдем өзгермейді"
      },
      {
        "id": "f790d35a-9ca0-4f79-81c1-f177e996f787",
        "text": "Блок (Block), көлемі 4 КБ"
      },
      {
        "id": "01025c69-9487-4fa4-bf9b-598ce1b16c8e",
        "text": "Файл топтары, көлемі 1 МБ"
      },
      {
        "id": "a555bb8a-6702-4f06-a995-c3aaa05437e6",
        "text": "Жаңа дерекқор файлын құрады"
      },
      {
        "id": "6e261e08-99fd-4635-810c-f6540514bf29",
        "text": "Қай экстенттердің бос екенін және қайсысы бөлінгенін (экстент деңгейінде) бақылау үшін"
      }
    ],
    "correctOptionIds": [
      "fb35d312-1dda-4bae-832d-fd732cb0696d"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "31191eba-9648-4d89-bbbb-6aab52fe1825",
    "subjectId": "db",
    "text": "Index Rebuild жасағанда транзакциялық журнал қалай өзгереді?",
    "options": [
      {
        "id": "f85c6e50-29fd-425e-aa88-389b97e4e592",
        "text": "Көлемді деректер өзгергендіктен, журнал файлы өте жылдам үлкейіп кетуі мүмкін"
      },
      {
        "id": "1854336c-e7ac-4a62-a42f-0e1562365933",
        "text": "Журнал файлы мүлдем өзгермейді"
      },
      {
        "id": "6736ab31-6530-460b-88ff-ddbfd9646957",
        "text": "Журнал автоматты түрде өшіріледі"
      },
      {
        "id": "73a8c501-e1b3-4729-bcc1-b66e70d36184",
        "text": "Журналдың тек өлшемі кішірейеді"
      },
      {
        "id": "237f4318-0adb-4a50-b727-f89ba988a04d",
        "text": "Әрбір 512 беттен кейін"
      },
      {
        "id": "70c780aa-dc02-4ec9-b609-9fdcd3e5ce4f",
        "text": "Деректерді дискіге физикалық түрде сақтайды"
      },
      {
        "id": "36607a6b-d2a1-4494-8bf1-53f06a657548",
        "text": "Dirty Page Allocation"
      },
      {
        "id": "1c2a6ea8-3a4a-4039-9a27-d4b2324be84a",
        "text": "Buffer Manager"
      }
    ],
    "correctOptionIds": [
      "f85c6e50-29fd-425e-aa88-389b97e4e592"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "534715c1-4b02-45d7-bbd1-07de8cf380fc",
    "subjectId": "db",
    "text": "SQL Server-дегі 'Execution Plan' (Орындалу жоспары) қай пішімде сақталады және қарауға болады?",
    "options": [
      {
        "id": "713fb7fe-f6b4-43b0-8491-9eb0a2d47e53",
        "text": "XML пішімінде немесе графикалық схема түрінде"
      },
      {
        "id": "e65fde01-c4c5-401d-be60-06cd17332d93",
        "text": "Тек қана мәтіндік файл түрінде"
      },
      {
        "id": "c867d3ee-a437-40b1-91e8-d4293b4b97b7",
        "text": "JSON немесе HTML түрінде"
      },
      {
        "id": "0c3ce586-de30-43f7-bffa-2aa66c2c29aa",
        "text": "Ешқандай пішімде сақталмайды, бірден жойылады"
      },
      {
        "id": "f9d41cd6-1f44-4c08-9f25-4b11739f2d31",
        "text": "Тек оқу режимінде жұмыс істейтін жүйелік индекс"
      },
      {
        "id": "cbb02c8e-1118-4ad6-a6f4-5d07de3de7ab",
        "text": "Қосымша деректер файлы"
      },
      {
        "id": "0589e8bf-e07d-4141-bc9c-43103ac774b7",
        "text": "Transaction Log файл (.ldf)"
      },
      {
        "id": "ea90a6af-f0a3-4fe1-9ee3-92685ee99cb5",
        "text": "Жедел жадтағы буферді босату үшін сирек қолданылатын лас беттерді (dirty pages) белсенді түрде дискіге жазады"
      }
    ],
    "correctOptionIds": [
      "713fb7fe-f6b4-43b0-8491-9eb0a2d47e53"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "85008239-2cd5-441f-a4bb-3e3ac9d535db",
    "subjectId": "db",
    "text": "SQL Server сәулетіндегі 'Buffer Manager' не істейді?",
    "options": [
      {
        "id": "7cba2031-118d-4718-b862-07e661e0e1bc",
        "text": "Деректер беттерін дискіден жедел жадқа оқу және оларды жадтан дискіге жазу әрекеттерін басқарады"
      },
      {
        "id": "5b3accdd-3b8b-44d0-b9fe-656b757cb701",
        "text": "Сұраныстардың синтаксисін оңтайландырады"
      },
      {
        "id": "13663be6-4033-4156-8dc9-87b49c0df143",
        "text": "Транзакциялардың оқшаулануын бақылайды"
      },
      {
        "id": "ad966c30-1443-4e34-95ee-32566e1c3172",
        "text": "TempDB файлдарының санын реттейді"
      },
      {
        "id": "72f7c152-2c8e-4704-9f38-20f5ef9c8235",
        "text": "Мүлдем өзгеріссіз қалады"
      },
      {
        "id": "038179d3-1c8c-4e88-843c-158df4e9c9b8",
        "text": "Index Rebuild"
      },
      {
        "id": "68be77d2-dd50-4e70-94b2-59c01a54b03c",
        "text": ".ldf"
      },
      {
        "id": "2c784c50-f570-4c7c-b22d-5286cadddf21",
        "text": "96 байт"
      }
    ],
    "correctOptionIds": [
      "7cba2031-118d-4718-b862-07e661e0e1bc"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "8421c5e9-ad66-4ed6-8a5b-8b81047e5d3f",
    "subjectId": "db",
    "text": "TempDB-дегі уақытша кестелердің жаһандық (Global) түрі қалай жазылады?",
    "options": [
      {
        "id": "f1270718-8f90-43ba-b0b0-bab3b84abb46",
        "text": "## кесте_аты (екі решіткамен)"
      },
      {
        "id": "0a73da6e-cc66-49cb-ae58-e53e0e16959a",
        "text": "# кесте_аты (бір решіткамен)"
      },
      {
        "id": "edb9abd6-fe3a-4e48-960c-77e755cb8e55",
        "text": "temp_кесте_аты"
      },
      {
        "id": "2049a4f5-da86-462c-a44b-91d239a79fe8",
        "text": "GLOBAL.кесте_аты"
      },
      {
        "id": "348bc092-aeae-44d9-8ae3-04297db62e67",
        "text": "Бағандардағы деректердің таралуын бағалау және Query Optimizer-ге ең оңтайлы орындалу жоспарын таңдауға көмектесу үшін"
      },
      {
        "id": "e6acbadf-ee6a-4260-b2ef-1eb613585cb0",
        "text": "Физикалық және логикалық"
      },
      {
        "id": "ddf50fa7-ef85-44a1-8340-b6cfff209fbf",
        "text": "Кластерленген индексі жоқ, деректері ретсіз сақталған кесте"
      },
      {
        "id": "b8c75928-f3c2-47f9-83de-ebe6c687be1c",
        "text": "LOCAL.кесте_аты"
      }
    ],
    "correctOptionIds": [
      "f1270718-8f90-43ba-b0b0-bab3b84abb46"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  },
  {
    "id": "e11d43ed-7417-4d6b-bed7-ec1ca9c906a7",
    "subjectId": "db",
    "text": "TempDB-дегі уақытша кестелердің локалды (Local) түрі қалай жазылады?",
    "options": [
      {
        "id": "6b1238d5-f1fa-49a6-97fb-ffb9144552bb",
        "text": "# кесте_аты (бір решіткамен)"
      },
      {
        "id": "040a42a4-1e7a-47b0-bc6b-60b4e1c3d779",
        "text": "## кесте_аты (екі решіткамен)"
      },
      {
        "id": "928cb3ac-ce4b-4f58-86c7-84dd40c04120",
        "text": "LOCAL.кесте_аты"
      },
      {
        "id": "35882bc6-3390-402f-9445-ca5105dee95b",
        "text": "temp.кесте_аты"
      },
      {
        "id": "c74bb25e-1683-421d-860a-66fef139980c",
        "text": "Кестедегі құрама кілттерді сақтау үшін"
      },
      {
        "id": "68c18672-535c-43b5-aa10-90dea4717995",
        "text": "Block (Блок), өлшемі 4 KB"
      },
      {
        "id": "0750336c-b4e7-4975-bbd9-a0402cf65aaf",
        "text": "Тек TempDB дерекқоры үшін жұмыс істейді"
      },
      {
        "id": "e6e5def9-a811-4967-a35a-60063c233d23",
        "text": "Call Stack"
      }
    ],
    "correctOptionIds": [
      "6b1238d5-f1fa-49a6-97fb-ffb9144552bb"
    ],
    "type": "MULTIPLE",
    "topic": "SQL Server архитектурасы",
    "difficulty": "medium"
  }
] as Question[];
