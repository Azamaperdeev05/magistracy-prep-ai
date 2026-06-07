import { Question } from '../../../../types';

// db / SQL сұраныстары
export const db7SqlQueriesQuestions = [
  {
    "id": "00d7c090-d510-4174-a64e-4ec942d592d4",
    "subjectId": "db",
    "text": "AVG() функциясы не істейді?",
    "options": [
      {
        "id": "2ddf3d0a-cd12-4fae-bd35-4a9c55fef44f",
        "text": "Жазбалар санын есептейді"
      },
      {
        "id": "6756d9d3-40c0-4274-89fe-5b0e54504f12",
        "text": "Максимумды табады"
      },
      {
        "id": "9c1f1a2e-84a3-4b33-a238-1bd3c5de0ead",
        "text": "Қосындыны табады"
      },
      {
        "id": "cf6a2af7-ab02-4f6d-ae1e-9497b91bd620",
        "text": "Орташа мәнді табады"
      },
      {
        "id": "b4d75e2e-8015-4740-adb3-af80c4499761",
        "text": "WHOAMI"
      },
      {
        "id": "d50bee4d-f950-4b23-812d-c6b9a867f956",
        "text": "UNION ALL тек оң жақ кестенің деректерін сақтайды"
      },
      {
        "id": "ef824425-09f9-4d74-a5dd-af2da5dd75b5",
        "text": "Мәннің диапазонда екенін тексереді"
      },
      {
        "id": "9ff51487-bae4-4427-b230-cf11ea636e72",
        "text": "STRIP()"
      }
    ],
    "correctOptionIds": [
      "cf6a2af7-ab02-4f6d-ae1e-9497b91bd620"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "0935aa65-d896-4eb1-aa29-396e9df39563",
    "subjectId": "db",
    "text": "UNION операторының қызметі не?",
    "options": [
      {
        "id": "2fe81226-89ae-444e-ae34-a02eca2103bf",
        "text": "Индекс құру"
      },
      {
        "id": "7f6f6641-0685-4a89-a4b3-8dc39e85d028",
        "text": "Нәтижелерді біріктіру"
      },
      {
        "id": "b9cba682-41e0-428b-a3f7-2479559afdea",
        "text": "Деректерді жою"
      },
      {
        "id": "cf4508b5-d04a-48d0-87b0-a4ffc9534db5",
        "text": "Кестелерді біріктіру"
      },
      {
        "id": "45d721cc-61ae-4001-adc9-3eb887732078",
        "text": "5-тен 10-ға дейінгі жолдарды қайтарады"
      },
      {
        "id": "fd589997-112c-4a5d-bbf1-a411586c180e",
        "text": "NULL (немесе UNKNOWN)"
      },
      {
        "id": "44220285-7d0d-4373-b39e-3366a2b2124b",
        "text": "BETWEEN"
      },
      {
        "id": "c250274a-6518-48bb-9963-935702ec0cd7",
        "text": "NULL мәндерді"
      }
    ],
    "correctOptionIds": [
      "7f6f6641-0685-4a89-a4b3-8dc39e85d028"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "0c0e30f3-bb11-4d16-b067-dd807ad868dc",
    "subjectId": "db",
    "text": "DISTINCT кілтсөзі не істейді?",
    "options": [
      {
        "id": "92f4173d-369a-4cd4-a604-42f06e6150c9",
        "text": "Қайталанатын мәндерді жояды (бірегейлерін қайтарады)"
      },
      {
        "id": "c6e23edf-bbbc-464f-aea0-3790b37c985c",
        "text": "Барлық жазбаларды қайтарады"
      },
      {
        "id": "f41a4314-c271-4264-854a-3c9e9f934d81",
        "text": "Сұрыптайды"
      },
      {
        "id": "fd0b4ed0-ac47-4887-aa6e-9eb4788392c9",
        "text": "Топтайды"
      },
      {
        "id": "44ab1040-e3ad-4dd7-8486-81704fa94f25",
        "text": "Сол жақ кестенің барлық бағандарын біріктіреді"
      },
      {
        "id": "3cdb8b60-7843-4f36-ac6c-a490fbd92054",
        "text": "Кестенің құрылымын жояды"
      },
      {
        "id": "913d07a7-e0d4-49b7-bf60-a5c56d33e838",
        "text": "UNION функциясы немесе ADD операторы"
      },
      {
        "id": "8fb046ec-9a0b-48d0-b3b4-8785ab38a750",
        "text": "Деректер жояды"
      }
    ],
    "correctOptionIds": [
      "92f4173d-369a-4cd4-a604-42f06e6150c9"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "18cb4f57-324d-4aac-b77f-78ccf511ae55",
    "subjectId": "db",
    "text": "TRUNCATE TABLE командасы не істейді?",
    "options": [
      {
        "id": "26625e85-b019-4cc3-8074-47c8a3750a19",
        "text": "Жазба қосады"
      },
      {
        "id": "335a7145-c86c-4370-b344-736ec431e1d8",
        "text": "Кестедегі барлық жазбаларды тез жояды"
      },
      {
        "id": "c2479920-e84a-4706-8f57-2f524d6992b7",
        "text": "Кестенің құрылымын жояды"
      },
      {
        "id": "c9366d35-4eaf-4c12-855f-4e23fdf8a88c",
        "text": "Бір жазбаны жояды"
      },
      {
        "id": "5482d62e-9465-453c-bec7-fc8626bf4c92",
        "text": "Мәннің бос жол екенін тексереді"
      },
      {
        "id": "af7f65e6-0320-482e-bd8f-f5a128a603f7",
        "text": "LENGTH() немесе LEN()"
      },
      {
        "id": "fc38f9cd-0d04-409c-b616-cb3c305425b7",
        "text": "Барлық қайталанатын мәндердің қосындысын табады"
      },
      {
        "id": "cbb4ff5d-d652-4ac0-bdfe-adbb0cb2651a",
        "text": "COUNT(*) тек бірінші бағанды есептейді"
      }
    ],
    "correctOptionIds": [
      "335a7145-c86c-4370-b344-736ec431e1d8"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "1a0e61e3-bb4b-42fe-8fd4-05ddda933df9",
    "subjectId": "db",
    "text": "EXCEPT операторы не қайтарады?",
    "options": [
      {
        "id": "3957c6b1-be12-405e-a7fe-0803e4e9ccbf",
        "text": "Барлық нәтижелерді біріктіреді"
      },
      {
        "id": "5dbbe191-8839-451e-a731-6c4f6001ee1a",
        "text": "Ортақ бөлікті қайтарады"
      },
      {
        "id": "84facc5c-b136-4d35-a89d-a6c8c874e596",
        "text": "Бірінші жиыннан екіншісін алып тастағандағы айырмашылықты"
      },
      {
        "id": "b1a213e6-22ea-4c44-91d1-9f29d7f3e0d4",
        "text": "NULL мәндерді"
      },
      {
        "id": "d019de81-43d2-48de-9d1e-f41acb80816d",
        "text": "IN"
      },
      {
        "id": "a2d42b48-a8a6-47d3-bd0d-1d501b3b62e8",
        "text": "Тек сәйкес келетін жазбалар"
      },
      {
        "id": "d17f34ad-b7f4-463e-b9d0-392c53e39b69",
        "text": "SORT BY"
      },
      {
        "id": "e1256e3f-98bd-4eb6-87c9-f0be5dd04214",
        "text": "GET_RAND()"
      }
    ],
    "correctOptionIds": [
      "84facc5c-b136-4d35-a89d-a6c8c874e596"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "1d36af1a-b495-48a8-bfd6-056edd5bdaf5",
    "subjectId": "db",
    "text": "SQL-де деректерді топтастыру үшін қандай оператор қолданылады?",
    "options": [
      {
        "id": "021a4533-b7bb-4972-9957-5bbd5a00c7b3",
        "text": "GROUP BY"
      },
      {
        "id": "1b722598-3ef0-480c-b216-7642eaa4a081",
        "text": "ORDER BY"
      },
      {
        "id": "cf8fae95-dd5f-407c-85da-241be068e7cb",
        "text": "SORT BY"
      },
      {
        "id": "d149a151-a8cc-4a68-a01b-53aab81d2e3f",
        "text": "AGGREGATE BY"
      },
      {
        "id": "99e811c5-2578-4aaa-b08b-0fdb313392e3",
        "text": "'Hello||||World'"
      },
      {
        "id": "83a169d7-84a3-426f-bf62-cbf2485a232e",
        "text": "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        "id": "023bc40e-1971-49fd-83b8-b38f775661d5",
        "text": "BOTTOM NULLS"
      },
      {
        "id": "445d9317-0bea-4ed9-9a66-c5704e9d6ba8",
        "text": "Сол жақтың барлығы"
      }
    ],
    "correctOptionIds": [
      "021a4533-b7bb-4972-9957-5bbd5a00c7b3"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "1ecdc410-1743-4a44-aeeb-148de06d6105",
    "subjectId": "db",
    "text": "INNER JOIN қандай жазбаларды қайтарады?",
    "options": [
      {
        "id": "0007b1b4-41fa-42dd-99aa-3550466d5008",
        "text": "Тек сол жақ кестенің жазбалары"
      },
      {
        "id": "1d67344e-a429-4259-9ad0-451e45b73b57",
        "text": "Тек оң жақ кестенің жазбалары"
      },
      {
        "id": "b7785ee1-f4f9-4fb5-9913-cf1e52e93e07",
        "text": "Тек сәйкес келетін жазбалар"
      },
      {
        "id": "ecc27b03-45b5-4806-b91d-bcca3416caae",
        "text": "Барлық жазбалар"
      },
      {
        "id": "699beaeb-7f4b-4978-814f-02908ef3f26c",
        "text": "NULL (немесе UNKNOWN)"
      },
      {
        "id": "9924a3d1-fa31-4c3d-a805-4b186c934290",
        "text": "Алғашқы 10 жолды өткізіп жіберіп, келесі 5 жолды қайтарады"
      },
      {
        "id": "2df519f2-47fa-429e-ba30-9792a6ca0eb1",
        "text": "GET_PART()"
      },
      {
        "id": "47ab03ff-437e-413f-be14-e557128e66e9",
        "text": "Сыртқы кілттің бастапқы кілтке автоматты сілтеме жасауы"
      }
    ],
    "correctOptionIds": [
      "b7785ee1-f4f9-4fb5-9913-cf1e52e93e07"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "20ef39a6-9544-4f99-9869-53a862205ace",
    "subjectId": "db",
    "text": "LIKE операторындағы '%' символы не білдіреді?",
    "options": [
      {
        "id": "89733def-0ea2-430f-860f-ebc28d31682e",
        "text": "Бос мән"
      },
      {
        "id": "9e332ac4-b4b3-44cb-aad3-4a680bc79726",
        "text": "Сан"
      },
      {
        "id": "b86b5637-9201-41df-bbfc-3b0937ccc9c9",
        "text": "Кез келген саны символдар"
      },
      {
        "id": "ccd5760c-5dda-49d4-8670-4c0179182d7c",
        "text": "Нақты бір символ"
      },
      {
        "id": "989e41a7-f526-43d5-ae05-16bfd829dfd1",
        "text": "Кему ретімен сұрыптау"
      },
      {
        "id": "03c82e3f-aecb-42bc-bd63-5b9d016acdb6",
        "text": "Әрқашан екінші мәнді қайтарады"
      },
      {
        "id": "b773abd9-350b-43fa-877e-00263a26d33f",
        "text": "Минимумды табады"
      },
      {
        "id": "4e3dcfbf-5679-430c-bba0-e6fb030aa754",
        "text": "SMALL()"
      }
    ],
    "correctOptionIds": [
      "b86b5637-9201-41df-bbfc-3b0937ccc9c9"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "264e333a-d349-4ff7-8544-af37963e6160",
    "subjectId": "db",
    "text": "LIKE операторындағы '_' символы не білдіреді?",
    "options": [
      {
        "id": "11336996-33ac-4426-acba-85df465e4567",
        "text": "Тек бір символ"
      },
      {
        "id": "a390e5b7-a3dd-4760-8867-b9ea4f648fcc",
        "text": "Кез келген сан"
      },
      {
        "id": "c2f7dc3f-57c1-4cb4-bd55-a618bf0878e2",
        "text": "Кез келген саны символдар"
      },
      {
        "id": "fa178fa8-9ae2-42ba-9aaf-08b4febd91f9",
        "text": "Бос мән"
      },
      {
        "id": "a332e8b2-6f97-4d58-ba8b-9297a4e017a3",
        "text": "Сұраныс ішінде шарттық логиканы (if-then-else) іске асыру үшін"
      },
      {
        "id": "3bec8cf6-34e1-4979-8a1f-240a2395f842",
        "text": "WHERE column_name IS NOT NULL"
      },
      {
        "id": "9904abb8-3521-46ec-8a58-31ad4e4df758",
        "text": "Қатесі бар жолдарды жасыру"
      },
      {
        "id": "fde80c93-1c2e-4632-a668-ec2f719b8b8d",
        "text": "Екі мәннің бірі NULL болса, қате шығарады"
      }
    ],
    "correctOptionIds": [
      "11336996-33ac-4426-acba-85df465e4567"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "2bfd7777-c876-4e54-a48a-ef17236a54af",
    "subjectId": "db",
    "text": "IS NULL операторы не істейді?",
    "options": [
      {
        "id": "34a6c200-cf96-470e-80c6-128fdb72f6f2",
        "text": "Мәннің бос жол екенін тексереді"
      },
      {
        "id": "5c53eb0d-c3ef-487f-af89-f89366199f29",
        "text": "Мәннің нөлге тең екенін тексереді"
      },
      {
        "id": "94f1a596-0582-4e8f-8311-676e1541d87f",
        "text": "Мәннің NULL екенін тексереді"
      },
      {
        "id": "df662561-466f-4060-acc4-9d422dde0aad",
        "text": "Сандарды салыстырады"
      },
      {
        "id": "78c6234c-0432-45ce-8914-a1f46ef0e21a",
        "text": "'Hello World'"
      },
      {
        "id": "491a22ef-26b4-4ba1-b549-1bdceb8b2273",
        "text": "Кесте құрылымын өзгертеді (баған қосу, жою)"
      },
      {
        "id": "c1460ba9-68c0-4f2e-9b18-ff0e4cf79022",
        "text": "Нақты бір символ"
      },
      {
        "id": "5681238e-b564-4bb3-bd06-19a5a0948c18",
        "text": "Бір жазбаны жояды"
      }
    ],
    "correctOptionIds": [
      "94f1a596-0582-4e8f-8311-676e1541d87f"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "3e94d696-5ab7-4bf1-8a3c-7782b5a16f15",
    "subjectId": "db",
    "text": "CROSS JOIN не қайтарады?",
    "options": [
      {
        "id": "9e8daabf-f29c-4a66-966c-1142e8c040df",
        "text": "Бос нәтиже"
      },
      {
        "id": "ba1f5c7a-9de3-4bd7-8975-61d7ac73c063",
        "text": "Бір жазба"
      },
      {
        "id": "f8daf39c-6d73-4509-a5b6-f1f8b57e67fd",
        "text": "Тек сәйкестер"
      },
      {
        "id": "f9930b54-9257-47f8-b053-5fa426f7975c",
        "text": "Декарт көбейтіндісі (барлық мүмкін жұптар)"
      },
      {
        "id": "7ebee856-3c34-4767-ad89-e2ff1a689a90",
        "text": "LTRIM()"
      },
      {
        "id": "49e05a08-2338-403b-b4eb-7869df36eafb",
        "text": "Мәннің тізімде бар-жоғын тексереді"
      },
      {
        "id": "51b625a3-bff6-46bb-b9f6-ea3c0e82be86",
        "text": "Деректерді сұрыптау"
      },
      {
        "id": "350ff2d7-2702-4ee1-8271-817de498c7cf",
        "text": "Орташасын табады"
      }
    ],
    "correctOptionIds": [
      "f9930b54-9257-47f8-b053-5fa426f7975c"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "44a008f8-1086-4a10-ac3e-fae4d5e2ad8a",
    "subjectId": "db",
    "text": "HAVING шарты WHERE-ден немен ерекшеленеді?",
    "options": [
      {
        "id": "1b3b937a-b722-4d30-9d7e-f786901906b3",
        "text": "WHERE жылдамырақ"
      },
      {
        "id": "1d5ab437-38b0-4f32-b5e5-b1b77288defd",
        "text": "Айырмашылық жоқ"
      },
      {
        "id": "5f4b8b39-84e2-4486-b54a-4f71e685afe1",
        "text": "HAVING агрегаттық функциялармен қолданылады, WHERE жоқ"
      },
      {
        "id": "5fb97922-dcb7-4d0e-9215-bdc369b3b538",
        "text": "HAVING барлық жазбаларды қайтарады"
      },
      {
        "id": "3d61975a-f28a-403c-93d4-97596c25fbb1",
        "text": "REVERSE"
      },
      {
        "id": "330a39f5-7ca8-4ea5-a192-88b6deb99f13",
        "text": "SHOW PATH"
      },
      {
        "id": "aa933c0b-72bf-4dfc-a1b0-a2673c91ea67",
        "text": "Кез келген сан"
      },
      {
        "id": "4d36059d-5881-4a3e-88dd-ce44725f4aa2",
        "text": "Барлық жазбалар"
      }
    ],
    "correctOptionIds": [
      "5f4b8b39-84e2-4486-b54a-4f71e685afe1"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "56e8e5fe-c6fa-4d9e-832e-78d0e0481520",
    "subjectId": "db",
    "text": "LIKE операторы не үшін қолданылады?",
    "options": [
      {
        "id": "7b6c80b1-75dc-4732-a6c3-095681a01d69",
        "text": "Үлгі бойынша жолды іздеу"
      },
      {
        "id": "a2e245a4-1124-4911-8fdf-07293ecff1a4",
        "text": "Деректерді топтау"
      },
      {
        "id": "a44911c0-9d36-455d-abab-dfc786e79431",
        "text": "Деректерді сұрыптау"
      },
      {
        "id": "a917d4be-b9da-4af8-8183-cace9ea8c68e",
        "text": "Сандарды салыстыру"
      },
      {
        "id": "0c71c094-968d-42e7-962f-43cb433bc392",
        "text": "GPA бойынша ең төменгі 3 студент"
      },
      {
        "id": "98f8ab28-1e08-49fe-b235-7b35595c7c89",
        "text": "Тек қана HAVING орындалады"
      },
      {
        "id": "d6a1ea45-7be4-47ff-b41a-1169ca9701de",
        "text": "Өсу ретімен (ASC)"
      },
      {
        "id": "06043bc6-9635-482a-b59f-ddf316b7aa79",
        "text": "DIFF_DATE()"
      }
    ],
    "correctOptionIds": [
      "7b6c80b1-75dc-4732-a6c3-095681a01d69"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "579d5aa8-79d3-4fed-a35c-4dec065f398e",
    "subjectId": "db",
    "text": "COUNT() функциясы не істейді?",
    "options": [
      {
        "id": "40071af9-7b52-4855-8321-c2b19c2ae276",
        "text": "Максимумды табады"
      },
      {
        "id": "68297082-a435-447d-8e89-62f13ab62f63",
        "text": "Жазбалар санын есептейді"
      },
      {
        "id": "9a088a7f-19a6-4136-89a5-f85e5f93618c",
        "text": "Қосынды есептейді"
      },
      {
        "id": "faaaf2f9-d51e-4842-b5b9-26b4229ba619",
        "text": "Орташа мәнді табады"
      },
      {
        "id": "fb062dd6-692e-49fa-b1d0-1ea9bd100b9a",
        "text": "Кему ретімен сұрыптау"
      },
      {
        "id": "431cf55b-1b37-4206-87bb-8c98f29137d2",
        "text": "LIKE NOT"
      },
      {
        "id": "3050dea9-8179-40c2-b5d3-d6e87dcad94d",
        "text": "RIGHT_STRIP()"
      },
      {
        "id": "9ae43a60-8adf-46fc-adbb-18b6d7004b13",
        "text": "NOT LIKE"
      }
    ],
    "correctOptionIds": [
      "68297082-a435-447d-8e89-62f13ab62f63"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "7305d277-fe5b-42dc-84a5-bd2a809b2526",
    "subjectId": "db",
    "text": "SELECT ID FROM Students ORDER BY GPA DESC LIMIT 3; — бұл сұраныс не қайтарады?",
    "options": [
      {
        "id": "3583ae15-0c07-40b5-87fd-5749c12cc882",
        "text": "Студенттер саны"
      },
      {
        "id": "6902adde-22e2-4f2e-85c3-acd940471295",
        "text": "GPA бойынша ең жоғары 3 студент"
      },
      {
        "id": "af276340-da90-464f-98b8-c1469d66ef38",
        "text": "GPA бойынша ең төменгі 3 студент"
      },
      {
        "id": "f7e0d293-8dc3-4a3f-a8ab-57b053dd730b",
        "text": "Барлық студенттер"
      },
      {
        "id": "503b0993-339d-4a65-895a-0b2743d64021",
        "text": "Деректерді жою"
      },
      {
        "id": "854bfe4c-c9b4-48e9-aaea-37ad596258ed",
        "text": "Екі кесте де бір дерекқорда орналасуы тиіс"
      },
      {
        "id": "dfbef099-85fc-457b-b815-86abac2f3b71",
        "text": "Кестенің өзін толық жояды"
      },
      {
        "id": "fbf2a126-abb3-4d2d-abbe-2812f826c0e5",
        "text": "Бастапқы кілттер сәйкес келуі керек"
      }
    ],
    "correctOptionIds": [
      "6902adde-22e2-4f2e-85c3-acd940471295"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "738d9856-4473-4f98-844f-a3e2e49a0d21",
    "subjectId": "db",
    "text": "INTERSECT операторы не қайтарады?",
    "options": [
      {
        "id": "132f5b9e-296f-4df0-8ae9-08430f00b140",
        "text": "Айырмашылықты"
      },
      {
        "id": "b1aa2e44-5117-4fbf-a84f-815a2c2c56c6",
        "text": "Бірінші кестені"
      },
      {
        "id": "b38885c9-76d8-45a6-8a3e-c24648b3b72f",
        "text": "Ортақ бөлікті"
      },
      {
        "id": "ffe53825-ad04-4a83-b437-5fca76c985eb",
        "text": "Барлық нәтижелер"
      },
      {
        "id": "88f60208-b580-4a24-b0e5-2b8faab4dfe8",
        "text": "Сұрыптайды"
      },
      {
        "id": "ee2f5242-e062-48ee-9def-2631e9866134",
        "text": "LEFT JOIN сол жақтағы кестенің барлық жоларын және оң жақтан сәйкес келетін жолдарды қайтарады (сәйкестік болмаса NULL), ал INNER JOIN тек екі кестеде де ортақ сәйкестігі бар жолдарды қайтарады"
      },
      {
        "id": "114f9659-28c1-469d-af2a-c6b865df5422",
        "text": "GROUP_CONCAT() немесе STRING_AGG()"
      },
      {
        "id": "28618aae-2756-4eac-9b93-792032f5ced7",
        "text": "RIGHT_STRIP()"
      }
    ],
    "correctOptionIds": [
      "b38885c9-76d8-45a6-8a3e-c24648b3b72f"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "85509f78-03dd-447f-afec-e0e9d8b29d3d",
    "subjectId": "db",
    "text": "BETWEEN операторы не істейді?",
    "options": [
      {
        "id": "006fe2c7-9206-40dd-860c-d9421174d561",
        "text": "Мәннің диапазонда екенін тексереді"
      },
      {
        "id": "4cbe912c-8582-4546-9e81-532f7203a523",
        "text": "NULL тексереді"
      },
      {
        "id": "698d17ea-aab3-4eb5-afbb-a15764dc8860",
        "text": "Тізімде бар-жоғын тексереді"
      },
      {
        "id": "fd85866c-5d0e-439b-a29b-35df819dc980",
        "text": "Деректерді біріктіреді"
      },
      {
        "id": "aa30fbd2-c9fd-4b22-9e95-cfd42e8be33b",
        "text": "SMALL()"
      },
      {
        "id": "e9b484c6-7f10-4361-b098-e58d55b8edf8",
        "text": "LEFT_STRIP()"
      },
      {
        "id": "086a7ed0-7906-4bc9-8ef3-b0f882fac299",
        "text": "Тек бастапқы кілт бағанын ғана"
      },
      {
        "id": "5ad77709-3c4f-43f4-adc5-60bfb2d011d1",
        "text": "'atab'"
      }
    ],
    "correctOptionIds": [
      "006fe2c7-9206-40dd-860c-d9421174d561"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "88b3db13-d623-4668-a062-3bec4eb61429",
    "subjectId": "db",
    "text": "SELECT * FROM students; — бұл сұраныс не істейді?",
    "options": [
      {
        "id": "4dab4534-d2c2-4566-a2a9-089ae21652ef",
        "text": "Барлық бағандарды қайтарады"
      },
      {
        "id": "5540a175-b707-4456-9ed8-01539008df3b",
        "text": "Кесте құрады"
      },
      {
        "id": "8ac85e06-2cee-4758-b30a-24fb6929245c",
        "text": "Студенттерді жояды"
      },
      {
        "id": "aecfbbe3-2705-457a-8f1a-7353d8bec7fe",
        "text": "Бір бағанды қайтарады"
      },
      {
        "id": "a0b2c23d-b77f-46ee-a3fa-c1f570163904",
        "text": "Деректерді топтастыру"
      },
      {
        "id": "7b5be408-8ece-4bb9-bb33-93d6f0196e9e",
        "text": "Бір жазбаны жояды"
      },
      {
        "id": "91fbfa14-a2ff-48a7-b1e5-88ec88d057b0",
        "text": "HAVING"
      },
      {
        "id": "29ff3210-4afb-4240-95df-37490849c16c",
        "text": "Кестелердегі жолдар саны бірдей болуы тиіс"
      }
    ],
    "correctOptionIds": [
      "4dab4534-d2c2-4566-a2a9-089ae21652ef"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "9337b756-31af-4a11-b985-2b1a3dc4b91b",
    "subjectId": "db",
    "text": "DROP TABLE командасы не істейді?",
    "options": [
      {
        "id": "212bc92e-a85e-4a53-8064-036a1956226d",
        "text": "Деректерді жояды"
      },
      {
        "id": "3b01696c-a673-4094-a54e-ec65c9fded83",
        "text": "Кестенің өзін толық жояды"
      },
      {
        "id": "3b5e7702-0173-47b1-95fa-92b3e3ef9f29",
        "text": "Деректерді жаңартады"
      },
      {
        "id": "dbbfe46c-8b6e-4192-b090-13d0b3e5f830",
        "text": "Кесте құрады"
      },
      {
        "id": "f21c723f-6f35-4030-9d62-69e3f7386e76",
        "text": "Деректерді жаңа кестеге көшіру"
      },
      {
        "id": "78b1a2a1-0dc9-4659-bc76-b72c5449ecb9",
        "text": "LIKE"
      },
      {
        "id": "24ec1d7c-0a9b-4311-bfce-8caf930cb3ab",
        "text": "Деректерді топтастыру"
      },
      {
        "id": "aaf520cf-9861-427d-8b98-b0143f2e8f25",
        "text": "FALSE"
      }
    ],
    "correctOptionIds": [
      "3b01696c-a673-4094-a54e-ec65c9fded83"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "9f5e7cce-320a-4b46-89f4-5dc987f2e24a",
    "subjectId": "db",
    "text": "FULL OUTER JOIN қандай жазбаларды қайтарады?",
    "options": [
      {
        "id": "2bf5e9af-a2bb-4750-89fb-a1dff568c048",
        "text": "Оң жақтың барлығы"
      },
      {
        "id": "9ae1cecc-2214-4af5-91cc-2530515bc717",
        "text": "Екі кестенің барлық жазбалары + сәйкестіктер"
      },
      {
        "id": "d812b2cb-1abe-4a6e-a273-42a8a2f7cb08",
        "text": "Тек сәйкестер"
      },
      {
        "id": "f9103ddb-f852-4665-b94a-b0589f7999b6",
        "text": "Сол жақтың барлығы"
      },
      {
        "id": "2dcefd0a-205e-4217-9cd0-5fc4e27f2ed1",
        "text": "ORDER BY"
      },
      {
        "id": "bde72a54-9c9c-4a8a-b9c1-4afed4bb2530",
        "text": "Егер барлығы NULL болса, қате шығарады"
      },
      {
        "id": "36bf5a39-68f6-4af1-8969-4880d6545554",
        "text": "'base'"
      },
      {
        "id": "36f57bbf-17a2-4e43-9fb4-07ac15a88d54",
        "text": "SYSTEM_USER()"
      }
    ],
    "correctOptionIds": [
      "9ae1cecc-2214-4af5-91cc-2530515bc717"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "aa6c7da5-ca93-4169-9db0-6de03aabf143",
    "subjectId": "db",
    "text": "MAX() функциясы не істейді?",
    "options": [
      {
        "id": "5241be24-fd9c-49a1-b45a-71c74f632104",
        "text": "Қосындысын табады"
      },
      {
        "id": "73d55b68-9091-4425-92bb-89a9344d6341",
        "text": "Орташаны табады"
      },
      {
        "id": "8079ae55-df11-405a-99f2-73e2bc4aba39",
        "text": "Минимумды табады"
      },
      {
        "id": "814639a3-d203-472b-a6e8-3d166bc32a73",
        "text": "Максималды мәнді табады"
      },
      {
        "id": "b289ce9e-2f3c-4673-a4ab-3cdcd18f9033",
        "text": "CLEAN()"
      },
      {
        "id": "1c1ec11d-f245-4433-be0d-1a58037b70b0",
        "text": "Әрқашан екінші мәнді қайтарады"
      },
      {
        "id": "e8f149c2-a05e-41cd-aff1-d9bcc05a5d73",
        "text": "SYSTEM_USER()"
      },
      {
        "id": "48221fe4-b611-452b-828c-be6551beb1fb",
        "text": "Аргументтерінің ішінен алғашқы NULL емес мәнді қайтарады"
      }
    ],
    "correctOptionIds": [
      "814639a3-d203-472b-a6e8-3d166bc32a73"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "ad15d5e1-68d1-4f6f-811e-ec87764f7ffa",
    "subjectId": "db",
    "text": "RIGHT JOIN қандай жазбаларды қайтарады?",
    "options": [
      {
        "id": "772ab804-2bbc-4e35-9324-39a987beba9a",
        "text": "Барлық жазбалар"
      },
      {
        "id": "8128483d-c940-4929-a1a2-079c8737f800",
        "text": "Оң жақтың барлығы + сәйкестіктер"
      },
      {
        "id": "cb1e81c4-b8ed-4123-bbab-263e7f6d7c04",
        "text": "Сол жақтың барлығы + сәйкестіктер"
      },
      {
        "id": "fe1a49b4-33c7-40a4-a5be-51e0baf8e83e",
        "text": "Тек сәйкестіктер"
      },
      {
        "id": "8549d9d7-77ec-4b4a-ab6b-29a5816490de",
        "text": "Егер val1 мен val2 тең болса, NULL қайтарады, әйтпесе val1-ді қайтарады"
      },
      {
        "id": "e35f018b-ac57-4241-8256-50343dc98d5c",
        "text": "Деректерді жаңартады"
      },
      {
        "id": "aa56d84c-132b-4c6c-a5f8-d246583ecc3c",
        "text": "Кестенің өзін толық жояды"
      },
      {
        "id": "2db38d8a-002e-45a5-8a21-48a2470e0bb9",
        "text": "Бос жол"
      }
    ],
    "correctOptionIds": [
      "8128483d-c940-4929-a1a2-079c8737f800"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "c786fcb5-2e79-4026-9b61-73b22f1afa56",
    "subjectId": "db",
    "text": "LEFT JOIN қандай жазбаларды қайтарады?",
    "options": [
      {
        "id": "4f6f3053-1275-425f-837e-73ec22c09136",
        "text": "Барлық жазбалар"
      },
      {
        "id": "cceafad3-0243-4b73-8602-5233624544fc",
        "text": "Тек сәйкес келетін жазбалар"
      },
      {
        "id": "d386be0a-2d5a-4323-ad62-e96c24887f0c",
        "text": "Тек оң жақ кестенің жазбалары"
      },
      {
        "id": "e406daf9-6d06-432e-87eb-518ce4962ffb",
        "text": "Сол жақ кестенің барлық жазбалары + сәйкестіктер"
      },
      {
        "id": "31096856-8a8f-4c8d-9435-21ca52a79e72",
        "text": "START FROM"
      },
      {
        "id": "451cf849-4c89-4f38-8f01-f1fbe7bd1e03",
        "text": "LEFT JOIN өте баяу жұмыс істейді"
      },
      {
        "id": "bde127f8-e20a-4e1d-a16f-116fb1e7ccea",
        "text": "SUBTRACT немесе REMOVE"
      },
      {
        "id": "577a181e-8a3d-4b36-9e8e-71e3d850962c",
        "text": "Cross-Join"
      }
    ],
    "correctOptionIds": [
      "e406daf9-6d06-432e-87eb-518ce4962ffb"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "ce4e0429-3007-41c1-aa74-501ae6e8a9f5",
    "subjectId": "db",
    "text": "IN операторы не істейді?",
    "options": [
      {
        "id": "1e4bd558-720c-4c45-a746-dc696ade0205",
        "text": "Мәннің тізімде бар-жоғын тексереді"
      },
      {
        "id": "60297050-5a4d-4dc5-9da4-92c222801691",
        "text": "NULL тексереді"
      },
      {
        "id": "88aaabb9-e76a-4588-b106-8d754e2e2358",
        "text": "Диапазонды тексереді"
      },
      {
        "id": "93473859-89d1-4be2-9162-5b78d2205e51",
        "text": "Деректерді біріктіреді"
      },
      {
        "id": "6baf7471-5090-4341-a7f8-c960192faeef",
        "text": "WHERE column_name != NULL"
      },
      {
        "id": "ffc83dde-c8f0-4508-b8f4-adf1153a4853",
        "text": "Кему ретімен (DESC)"
      },
      {
        "id": "64a05396-d5ae-4c12-b8ae-d81ccfad136a",
        "text": "Шарттардың ешқайсысы орындалмаса орындалады"
      },
      {
        "id": "2d2a83be-8e26-40b1-b37d-57e11004b852",
        "text": "Бірінші жиыннан екіншісін алып тастағандағы айырмашылықты"
      }
    ],
    "correctOptionIds": [
      "1e4bd558-720c-4c45-a746-dc696ade0205"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "d310144a-cfcc-44fd-b08b-dfb361748769",
    "subjectId": "db",
    "text": "SUM() функциясы не істейді?",
    "options": [
      {
        "id": "07dd42a8-1c32-435b-b4d8-580022c6ffda",
        "text": "Санын есептейді"
      },
      {
        "id": "8954e28c-613a-488f-bf0b-6f628f3724b3",
        "text": "Максимумды табады"
      },
      {
        "id": "a333c8c0-2f0a-4158-9f19-17ee76aed0ed",
        "text": "Қосындысын табады"
      },
      {
        "id": "fa61012e-3b96-4593-96ee-dd63664804e0",
        "text": "Орташасын табады"
      },
      {
        "id": "9da7457c-d471-42d2-a6a1-608e344ca7f5",
        "text": "Бос нәтиже"
      },
      {
        "id": "1b8e4e75-a6b0-4ac2-a39b-08ea76e08483",
        "text": "ADD_DATE(date_column, 5)"
      },
      {
        "id": "cbad8523-eddd-459c-a3ad-21621fbdcc11",
        "text": "Дубликаттарды іздеп, сұрыптау және жою кезеңі болмағандықтан тезірек орындалады"
      },
      {
        "id": "7b9cafe6-995b-4a92-8271-b93c059693b8",
        "text": "MAX_CASE()"
      }
    ],
    "correctOptionIds": [
      "a333c8c0-2f0a-4158-9f19-17ee76aed0ed"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "d55a3bf3-1a9d-49ef-adcf-2dccd34d54ac",
    "subjectId": "db",
    "text": "ORDER BY ... ASC нені білдіреді?",
    "options": [
      {
        "id": "61c25610-39c9-4a41-8720-42344b737553",
        "text": "Өсу ретімен сұрыптау"
      },
      {
        "id": "64a02f80-2c85-4433-825a-6a5ecf930ba0",
        "text": "Кездейсоқ реттеу"
      },
      {
        "id": "723e677b-8929-4248-9cb9-25c9307e34db",
        "text": "Топтастыру"
      },
      {
        "id": "9484bff1-e192-4bfa-a25a-67c3c8f8c566",
        "text": "Кему ретімен сұрыптау"
      },
      {
        "id": "3ba36221-6e83-4c9b-98b2-7167bfd09d5c",
        "text": "Декарт көбейтіндісі (барлық мүмкін жұптар)"
      },
      {
        "id": "7198a02f-684f-44da-8175-be88c4fa70ae",
        "text": "ABS()"
      },
      {
        "id": "84ba17d2-916b-4e43-8199-85dad2715b65",
        "text": "LTRIM()"
      },
      {
        "id": "1a9dd432-1482-4c1e-b892-8ab66a312982",
        "text": "Алдымен HAVING орындалады"
      }
    ],
    "correctOptionIds": [
      "61c25610-39c9-4a41-8720-42344b737553"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "d77aab19-0164-439e-b413-3476747e1ffd",
    "subjectId": "db",
    "text": "ALTER TABLE командасы не істейді?",
    "options": [
      {
        "id": "19c732a9-be22-4fd4-8d02-6820f918d130",
        "text": "Деректер жояды"
      },
      {
        "id": "3c10ec5b-c02b-436d-8e28-95107a0852f7",
        "text": "Кесте құрылымын өзгертеді (баған қосу, жою)"
      },
      {
        "id": "b9ac8d35-e63b-4e43-be80-9adf5265a485",
        "text": "Кесте жояды"
      },
      {
        "id": "f0bbb633-7ef6-446c-9a98-1b372137bef4",
        "text": "Деректер қосады"
      },
      {
        "id": "4c9ba5e9-4ae2-4ffd-8602-5891895429e1",
        "text": "BEGIN AT"
      },
      {
        "id": "332371d8-1f40-4e4f-b920-9b3bb8d19445",
        "text": "WIDTH()"
      },
      {
        "id": "8b0e3970-46e7-421c-aa7e-2d60a0d0e513",
        "text": "Кез келген саны символдар"
      },
      {
        "id": "d7c0207e-d0e3-4521-a3e8-943704e73c75",
        "text": "MERGE функциясы немесе + операторы"
      }
    ],
    "correctOptionIds": [
      "3c10ec5b-c02b-436d-8e28-95107a0852f7"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "eae14019-ab32-4f49-86b8-efb16f9d03bc",
    "subjectId": "db",
    "text": "MIN() функциясы не істейді?",
    "options": [
      {
        "id": "07a94e00-7c85-49b9-ab1c-3a385f9a8b72",
        "text": "Санын табады"
      },
      {
        "id": "163d0406-2925-4051-a5a2-215c2b1d4776",
        "text": "Қосындысын табады"
      },
      {
        "id": "4bb2a933-15cb-48ef-a3e6-91e8fe377495",
        "text": "Ең кіші мәнді табады"
      },
      {
        "id": "bb5d59fe-69de-408a-bddb-dd71b7daf573",
        "text": "Максималды мәнді табады"
      },
      {
        "id": "d332bb55-3789-4807-ac39-c9c6606c8467",
        "text": "Деректерді біріктіру"
      },
      {
        "id": "891c8f6c-a357-4b13-b84e-ee1d97b99b3f",
        "text": "Шарттардың ешқайсысы орындалмаса орындалады"
      },
      {
        "id": "5aa5eeba-1172-4e0f-9622-ecaa2cf6462e",
        "text": "Бір жазба"
      },
      {
        "id": "b3d3d392-1379-4299-ad73-5a84ac1d0e89",
        "text": "Алғашқы 5 жолды өткізіп жіберіп, келесі 10 жолды қайтарады"
      }
    ],
    "correctOptionIds": [
      "4bb2a933-15cb-48ef-a3e6-91e8fe377495"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "f1cba4b5-933b-4d91-9de2-370966db004b",
    "subjectId": "db",
    "text": "WHERE шарты не үшін қолданылады?",
    "options": [
      {
        "id": "5d4e8307-25be-4e39-9de1-0071c713b4e5",
        "text": "Деректерді топтастыру"
      },
      {
        "id": "a1fbda1d-aa61-4457-9046-487782e77c06",
        "text": "Деректерді сұрыптау"
      },
      {
        "id": "adbc079e-f3de-4b00-b500-2f99d23d6bfa",
        "text": "Деректерді біріктіру"
      },
      {
        "id": "f6fe3751-20bf-406a-bd41-5d5aa9f400fc",
        "text": "Деректерді фильтрлеу"
      },
      {
        "id": "301c945b-6085-4ec2-92ae-b4a3a1b00981",
        "text": "DATEDIFF()"
      },
      {
        "id": "0fdb8cae-88f0-4d9e-af10-5b76adab3d26",
        "text": "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        "id": "51cde8fa-c98b-41e0-8d81-1a3b09d86703",
        "text": "'Databasebase'"
      },
      {
        "id": "1d527fc8-3205-4a3b-96cd-a276f1355714",
        "text": "Шарттардың кем дегенде біреуі TRUE болса, жол таңдалады"
      }
    ],
    "correctOptionIds": [
      "f6fe3751-20bf-406a-bd41-5d5aa9f400fc"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "f5a3cbf3-945b-45e2-986e-def9578bb014",
    "subjectId": "db",
    "text": "SQL-де деректерді кему ретімен сұрыптау қандай кілтсөзбен жасалады?",
    "options": [
      {
        "id": "3a40b2fb-0c57-494b-b5d0-17c3f597cc56",
        "text": "REVERSE"
      },
      {
        "id": "96848caa-d3e1-48d2-a528-cac18f4c46ec",
        "text": "DOWN"
      },
      {
        "id": "c8290a03-fe1f-49f6-8e43-44230135b9dd",
        "text": "ASC"
      },
      {
        "id": "d0598a14-2e05-486a-8880-d80d145f2a5f",
        "text": "DESC"
      },
      {
        "id": "779d2113-d82f-47e4-9186-7ab546dabe78",
        "text": "UPPER()"
      },
      {
        "id": "bafb6288-8ec1-4af2-b16d-6b0e34a27d15",
        "text": "Деректерді жою"
      },
      {
        "id": "0142e753-5620-4ff5-9f55-7e02dbb18f88",
        "text": "DATE_INTERVAL()"
      },
      {
        "id": "fa85131d-146c-48f8-a41f-df42538ca915",
        "text": "ARRAY_AGG()"
      }
    ],
    "correctOptionIds": [
      "d0598a14-2e05-486a-8880-d80d145f2a5f"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "0c3e9cec-8342-4d50-bf8d-3aa2b2880dec",
    "subjectId": "db",
    "text": "SQL-де деректерді топтастырудан кейін сүзгілеу жүргізу үшін (агрегаттық функцияларға шарт қою) қай оператор қолданылады?",
    "options": [
      {
        "id": "47c24421-d302-4432-9a48-1598668c63ca",
        "text": "HAVING"
      },
      {
        "id": "cc3b6723-9d2c-4d6e-8cb0-63d02fe6074b",
        "text": "WHERE"
      },
      {
        "id": "39672d83-b4e7-4b65-afd9-da91a2eaa6e2",
        "text": "GROUP BY"
      },
      {
        "id": "4dad6652-3f43-446b-9bca-10d7d4d26e07",
        "text": "ORDER BY"
      },
      {
        "id": "8ba10d7b-9ad1-4818-b8fc-556eca4f5c53",
        "text": "Бір жазба"
      },
      {
        "id": "de8ede1c-fc89-4193-b17f-48b485ad1d03",
        "text": "Мәннің тізімде бар-жоғын тексереді"
      },
      {
        "id": "503fbf67-09a1-45b4-81e4-ab34142be5fd",
        "text": "Деректерді жояды"
      },
      {
        "id": "a28bcc66-8982-4a71-b94d-0fad0c8e0ae0",
        "text": "ABSOLUTE()"
      }
    ],
    "correctOptionIds": [
      "47c24421-d302-4432-9a48-1598668c63ca"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "1608260e-ef69-4f94-a3f1-ce004a611280",
    "subjectId": "db",
    "text": "SELECT сұранысында WHERE және HAVING операторлары бірге қолданылғанда орындалу реттілігі қандай болады?",
    "options": [
      {
        "id": "b012d902-3bb6-40be-9afa-e97228e005f0",
        "text": "Алдымен WHERE орындалып жолдарды сүзеді, содан соң GROUP BY топтайды, кейін HAVING топтау нәтижесін сүзеді"
      },
      {
        "id": "601d2394-a1bc-4c10-9e71-905b3a2d0a9f",
        "text": "Алдымен HAVING орындалады"
      },
      {
        "id": "092d9da5-4bd6-48c2-868a-0683de2f4061",
        "text": "Олар кезекпен параллель орындалады"
      },
      {
        "id": "0d269391-ab74-4e48-ab2a-0984e614f774",
        "text": "Тек қана HAVING орындалады"
      },
      {
        "id": "764d1041-b028-47a9-96d3-aa05adc465fa",
        "text": "123.46"
      },
      {
        "id": "e1ad1d7d-f664-47a1-aa47-1256a9a43edf",
        "text": "DIFFERENCE"
      },
      {
        "id": "2da35588-4877-4b5a-9ebd-efc2ae7d641d",
        "text": "TRIM()"
      },
      {
        "id": "4bca099d-bf8c-4aa4-9d86-3a6fa415748f",
        "text": "GETUSER()"
      }
    ],
    "correctOptionIds": [
      "b012d902-3bb6-40be-9afa-e97228e005f0"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "5e17e542-b13a-473c-94fa-0e9a7e535210",
    "subjectId": "db",
    "text": "SQL-де SELECT DISTINCT операторының қызметі қандай?",
    "options": [
      {
        "id": "27ec8dc5-2489-4a91-87eb-50620156bb27",
        "text": "Сұраныс нәтижесінен қайталанатын (дубликат) жолдарды алып тастап, тек бірегей мәндерді қайтару"
      },
      {
        "id": "7ecb9382-3c8b-4476-a2ba-eaf74f6cbbe2",
        "text": "Деректерді өсу ретімен сұрыптау"
      },
      {
        "id": "c8c3d15b-0b1e-4b11-abc2-e86ba1a66aeb",
        "text": "Қатесі бар жолдарды жасыру"
      },
      {
        "id": "69cd10c2-03d8-4d18-a158-382a56bf7aad",
        "text": "Деректерді жаңа кестеге көшіру"
      },
      {
        "id": "e4b01791-029b-44d5-a24a-65ccb7ea0141",
        "text": "TITLE()"
      },
      {
        "id": "eb65709b-d5e6-4044-aeae-4c27d6a15979",
        "text": "Нәтижені автоматты түрде индекспен қамтамасыз етеді"
      },
      {
        "id": "e994b9d0-2d44-4919-8940-3e443b1f7305",
        "text": "5-тен 10-ға дейінгі жолдарды қайтарады"
      },
      {
        "id": "55f2c633-872c-4785-8a8c-6e4f88416db4",
        "text": "Тек қана қателерді тексереді"
      }
    ],
    "correctOptionIds": [
      "27ec8dc5-2489-4a91-87eb-50620156bb27"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "cca362a4-1d94-4132-b756-e2ecb9c2ae97",
    "subjectId": "db",
    "text": "SQL-де мәндерді белгілі бір диапазон (аралық) бойынша сүзу үшін қай оператор тиімді қолданылады?",
    "options": [
      {
        "id": "aee35ba4-be29-48ab-a96c-561ea1ab7990",
        "text": "BETWEEN"
      },
      {
        "id": "40552ef4-c7fa-4c12-8f73-f70485c464ab",
        "text": "IN"
      },
      {
        "id": "1bbc7aaa-ecb6-4a40-9a5c-74ffa832b850",
        "text": "LIKE"
      },
      {
        "id": "b7b4d1a1-6f68-4037-868b-f679f6dade75",
        "text": "EXISTS"
      },
      {
        "id": "2f4711ed-c876-4bff-ac24-f537fbe16b24",
        "text": "SQ()"
      },
      {
        "id": "7a11b03e-5769-419c-ad57-942c10f1d7ed",
        "text": "Екі шарт та бірдей TRUE болғанда ғана жол таңдалады"
      },
      {
        "id": "d3abe155-d8e8-4844-ac86-9c597246713f",
        "text": "Сұрыптау шартын көрсету үшін"
      },
      {
        "id": "159b8565-ddd1-4e80-bdc7-0a58b3f1464c",
        "text": "Екі шарт та міндетті түрде TRUE болуы керек"
      }
    ],
    "correctOptionIds": [
      "aee35ba4-be29-48ab-a96c-561ea1ab7990"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "b4ee1065-cc24-4269-90c2-ad3475a14a47",
    "subjectId": "db",
    "text": "SQL-де мәтіндік шаблон бойынша іздеу (wildcards: %, _) жүргізу үшін қандай оператор керек?",
    "options": [
      {
        "id": "95a2f141-66be-4bb4-a665-6eb29ecfca9b",
        "text": "LIKE"
      },
      {
        "id": "31cdff45-c6d7-46b7-a5c4-1317e99762d7",
        "text": "IN"
      },
      {
        "id": "60ea42cc-6b8f-4c03-b3f2-7692f5bbc2fb",
        "text": "BETWEEN"
      },
      {
        "id": "bc81e58e-1d4e-4343-b987-3bb47d039f7a",
        "text": "MATCH"
      },
      {
        "id": "2a34fe7a-1aa6-4ad5-83ca-b19197d34916",
        "text": "'Databasebase'"
      },
      {
        "id": "a64bdcf5-90db-45b4-ae5d-5a83ace363ed",
        "text": "123.45"
      },
      {
        "id": "08832ede-5e52-42ee-a73f-6b673ec7efd7",
        "text": "'Database' (өзгермейді, себебі ізделетін шаблон регистрге сезімтал)"
      },
      {
        "id": "a9d12d8d-f868-4cdf-9df5-3b957104fc97",
        "text": "Барлық мәндердің қосындысын қайтарады"
      }
    ],
    "correctOptionIds": [
      "95a2f141-66be-4bb4-a665-6eb29ecfca9b"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "041228d5-eb74-46dd-a20f-c30b3adc6aa3",
    "subjectId": "db",
    "text": "SQL-дегі COUNT(*) және COUNT(баған_аты) айырмашылығы неде?",
    "options": [
      {
        "id": "f206efac-697d-4eee-920b-f77db50c856f",
        "text": "COUNT(*) барлық жолдарды (NULL қоса) есептейді, ал COUNT(баған_аты) тек NULL емес мәндерді есептейді"
      },
      {
        "id": "6f415a4a-5a42-4460-ab33-871e3da1cde0",
        "text": "COUNT(*) тек бірінші бағанды есептейді"
      },
      {
        "id": "a135c285-c020-4672-8689-45a6e88f0f31",
        "text": "COUNT(баған_аты) өте жылдам жұмыс істейді"
      },
      {
        "id": "b3403130-df12-47cd-bc26-b167594995a7",
        "text": "Ешқандай айырмашылығы жоқ"
      },
      {
        "id": "cd322609-6389-4b39-b603-6da4f71e7f25",
        "text": "Санды ең жақын бүтін санға дейін дөңгелектейді"
      },
      {
        "id": "9e441be4-8443-45f4-9245-dbbee67f16f6",
        "text": "Өсу ретімен сұрыптау"
      },
      {
        "id": "4d4b4c0f-f714-44f0-a52e-9c2e5e14ded6",
        "text": "Нәтижелерді біріктіру"
      },
      {
        "id": "83824037-8717-414e-8dfc-f194b946906d",
        "text": "GROUP BY"
      }
    ],
    "correctOptionIds": [
      "f206efac-697d-4eee-920b-f77db50c856f"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "f36fa52e-759e-4191-bdb7-735f3ade4aa6",
    "subjectId": "db",
    "text": "SQL-де деректерді кему ретімен (үлкеннен кішіге) сұрыптау үшін ORDER BY операторынан кейін қандай кілттік сөз жазылады?",
    "options": [
      {
        "id": "ab0dfa6c-767f-415c-b933-b109e49e5aa3",
        "text": "DESC"
      },
      {
        "id": "f900c299-d178-49b3-87dc-0c5b1d7e893f",
        "text": "ASC"
      },
      {
        "id": "ca79809d-2fd5-4449-9c46-dda3815423fc",
        "text": "REVERSE"
      },
      {
        "id": "7fd5f551-bdbf-4dbe-9bfb-8eb900f07112",
        "text": "DOWN"
      },
      {
        "id": "252fc5e1-9351-4b00-8539-98640abf0705",
        "text": "Егер барлығы NULL болса, қате шығарады"
      },
      {
        "id": "13ee0903-d6f6-46b2-b596-15ee69602149",
        "text": "Минимумды табады"
      },
      {
        "id": "f8f2acfe-2aed-479e-97ff-78c9fa995951",
        "text": "CLEAN()"
      },
      {
        "id": "c7a06d9a-554b-462c-801b-b09221d2776d",
        "text": "Оң жақтың барлығы + сәйкестіктер"
      }
    ],
    "correctOptionIds": [
      "ab0dfa6c-767f-415c-b933-b109e49e5aa3"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "28a73e56-e69c-483a-9ffd-8e8cf29b7be0",
    "subjectId": "db",
    "text": "LEFT JOIN мен INNER JOIN операторларының басты айырмашылығы неде?",
    "options": [
      {
        "id": "ae4c7f79-c60c-4bf0-8043-83bd8d035793",
        "text": "LEFT JOIN сол жақтағы кестенің барлық жоларын және оң жақтан сәйкес келетін жолдарды қайтарады (сәйкестік болмаса NULL), ал INNER JOIN тек екі кестеде де ортақ сәйкестігі бар жолдарды қайтарады"
      },
      {
        "id": "889e587b-2f32-4696-9f22-84b495adc193",
        "text": "INNER JOIN  тек сол жақтағыны қайтарады"
      },
      {
        "id": "f55c7e4d-d1fa-4564-8fc0-5496174ef58b",
        "text": "LEFT JOIN өте баяу жұмыс істейді"
      },
      {
        "id": "ce2acf20-58cc-4f55-88ff-8e0377395cc0",
        "text": "Олар бірдей нәтиже береді"
      },
      {
        "id": "43b928d3-1a91-41ac-ae4b-5bec2cf0a560",
        "text": "DATE_INTERVAL()"
      },
      {
        "id": "0885d9cc-af5b-4dcd-861d-404933f308d2",
        "text": "NULL мәндерді"
      },
      {
        "id": "e5fa2858-a0b0-497a-ae9e-ba3f67850f97",
        "text": "SUM_STRINGS()"
      },
      {
        "id": "5c2b6d97-9b1d-40fb-a1de-a885fa151507",
        "text": "date_column.addDays(5)"
      }
    ],
    "correctOptionIds": [
      "ae4c7f79-c60c-4bf0-8043-83bd8d035793"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "803046d3-960f-42ff-9994-2892f550a2ce",
    "subjectId": "db",
    "text": "SQL-де NATURAL JOIN қалай жұмыс істейді?",
    "options": [
      {
        "id": "176479d8-445d-400e-9112-493af93647cd",
        "text": "Екі кестедегі аттары мен типтері бірдей барлық бағандар бойынша автоматты түрде қосылу жасайды"
      },
      {
        "id": "c95f4d56-9943-42f5-9830-a53b348b5710",
        "text": "Сол жақ кестенің барлық бағандарын біріктіреді"
      },
      {
        "id": "28ef9033-f05a-41e9-a764-f01510b08869",
        "text": "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        "id": "56a72761-5011-4984-965f-6aa22f662a96",
        "text": "Тек сандық бағандарды сәйкестендіреді"
      },
      {
        "id": "c25fc27f-a912-463d-9d2b-4d9ce428c2fd",
        "text": "123.457"
      },
      {
        "id": "49572f30-a920-4ed0-b1f3-36fe40b155a1",
        "text": "Айырмашылық жоқ"
      },
      {
        "id": "4eb7c2bb-681f-43dc-8ae3-22f53069a48e",
        "text": "Санын есептейді"
      },
      {
        "id": "93cf1515-6c2c-4473-b938-7f29b6ccc6f3",
        "text": "Деректер жояды"
      }
    ],
    "correctOptionIds": [
      "176479d8-445d-400e-9112-493af93647cd"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "0bcf8fce-b013-4123-8c84-6fe9ae8e75e2",
    "subjectId": "db",
    "text": "SELF JOIN дегеніміз не?",
    "options": [
      {
        "id": "1ed8bd72-c16a-4563-917a-594c041bda82",
        "text": "Кестенің өз-өзіне қосылуы (мысалы, қызметкерлер мен олардың жетекшілерін бір кестеден табу үшін)"
      },
      {
        "id": "cfb4bd61-a0e7-42a7-879f-c5705c4ab072",
        "text": "Дерекқордың автоматты түрде қосылуы"
      },
      {
        "id": "b94ce2ae-612d-4515-a91b-4167f0277669",
        "text": "Сыртқы кілттің бастапқы кілтке автоматты сілтеме жасауы"
      },
      {
        "id": "7318938c-3b8d-4279-a7b9-074a57ef1d5f",
        "text": "Бос мәндердің орнына автоматты жазба қосу"
      },
      {
        "id": "7e372f01-124e-4b3c-a7b4-d42157d2a567",
        "text": "SQ()"
      },
      {
        "id": "12a29f72-8a7c-4be5-b2c3-d96078565ca2",
        "text": "Нәтижені файлға жазады"
      },
      {
        "id": "b09843fc-4629-4056-8644-ea8ab1903dbf",
        "text": "Кез келген саны символдар"
      },
      {
        "id": "d1e4583a-e69c-409d-b7a6-063ef7bc5a12",
        "text": "Кестенің өзін толық жояды"
      }
    ],
    "correctOptionIds": [
      "1ed8bd72-c16a-4563-917a-594c041bda82"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "dc4548e5-e438-4d75-a982-22b164fcdae4",
    "subjectId": "db",
    "text": "UNION мен UNION ALL операторларының айырмашылығы неде?",
    "options": [
      {
        "id": "1451aea4-8c16-4d19-8c11-f5ef44ff695a",
        "text": "UNION біріктіру кезінде дубликаттарды алып тастайды, ал UNION ALL барлық жолдарды сақтайды"
      },
      {
        "id": "0ec0b948-2799-4f18-b54f-6bc2c9138847",
        "text": "UNION тек сандарды біріктіреді, ал UNION ALL мәтіндерді де біріктіреді"
      },
      {
        "id": "945f53a9-ff58-414a-a7e7-c694d334ea23",
        "text": "UNION ALL тек оң жақ кестенің деректерін сақтайды"
      },
      {
        "id": "8b28a2b1-2456-4b41-96a0-d0c127113167",
        "text": "Ешқандай айырмашылығы жоқ"
      },
      {
        "id": "9eeb2ca9-e0fe-455e-9d49-affd65e9bfa8",
        "text": "ASC"
      },
      {
        "id": "cfc40a07-c89f-4105-b934-d203431ba235",
        "text": "Тек бастапқы кілт бағанын ғана"
      },
      {
        "id": "c9b4a0a9-4090-46e0-bdb8-96fb3eb7de03",
        "text": "Деректер жояды"
      },
      {
        "id": "5adea4b3-3a9c-437a-9684-3ea41bece907",
        "text": "Нәтижелерді біріктіру"
      }
    ],
    "correctOptionIds": [
      "1451aea4-8c16-4d19-8c11-f5ef44ff695a"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "c0569a6e-16c3-4243-87ee-7c3205dc76ea",
    "subjectId": "db",
    "text": "UNION ALL операторының UNION операторына қарағанда жылдамдық жағынан негізгі артықшылығы неде?",
    "options": [
      {
        "id": "049af5c9-7ab4-46fd-b089-2c05c49c6eca",
        "text": "Дубликаттарды іздеп, сұрыптау және жою кезеңі болмағандықтан тезірек орындалады"
      },
      {
        "id": "5ff1f48f-1703-4885-82d2-2aeb6f8316f8",
        "text": "Нәтижені автоматты түрде индекспен қамтамасыз етеді"
      },
      {
        "id": "579fa1f0-8699-4b8a-bd2a-340920c76a3e",
        "text": "Көбірек жады үнемдейді"
      },
      {
        "id": "99c8327c-8b5b-4112-99ab-3357ba04f711",
        "text": "Орындалу жоспарын оңтайландырады"
      },
      {
        "id": "8a39b525-11b7-4c37-bc4f-03baed82509b",
        "text": "Деректерді жаңартады"
      },
      {
        "id": "6da640c2-8fc4-4ea3-8a0e-bba1bdebf0e2",
        "text": "Айырмашылықты"
      },
      {
        "id": "6a1d85ec-1288-4f07-bd9f-ae097dec8dff",
        "text": "DATEADD()"
      },
      {
        "id": "8def08b6-0ce1-4a76-93c3-b6d23888b327",
        "text": "FALSE"
      }
    ],
    "correctOptionIds": [
      "049af5c9-7ab4-46fd-b089-2c05c49c6eca"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "0460c1ca-1c6b-48cc-9d52-8cf379fe5397",
    "subjectId": "db",
    "text": "Екі SELECT сұранысының нәтижелерін жиынтық операторлармен (UNION, EXCEPT, INTERSECT) біріктіру үшін қандай басты шарт орындалуы тиіс?",
    "options": [
      {
        "id": "30db14dc-c347-4d3b-8bcb-d31fb910d94e",
        "text": "Сұраныстардағы бағандар саны мен олардың сәйкес деректер типтері бірдей болуы керек"
      },
      {
        "id": "264fbe36-524e-4f53-9f6d-c871702bbffa",
        "text": "Кестелердегі жолдар саны бірдей болуы тиіс"
      },
      {
        "id": "c05b59d0-df2d-4137-9721-d0ed1ed20595",
        "text": "Бастапқы кілттер сәйкес келуі керек"
      },
      {
        "id": "da38fee0-2c96-49c2-a02c-c45b2c68e9df",
        "text": "Екі кесте де бір дерекқорда орналасуы тиіс"
      },
      {
        "id": "4d02efe5-9454-4bf8-93ac-a0bb3c6ad015",
        "text": "BOTTOM NULLS"
      },
      {
        "id": "0f5fe5f7-18a1-42a8-b9b1-4df54cb4ffdb",
        "text": "Нөл (0)"
      },
      {
        "id": "98fb75bc-eeba-41d6-a961-8ec74f3daf02",
        "text": "Оң жақтың барлығы"
      },
      {
        "id": "9b8b759b-19ed-4f2f-88ef-17e7c51095b5",
        "text": "Кестенің өзін толық жояды"
      }
    ],
    "correctOptionIds": [
      "30db14dc-c347-4d3b-8bcb-d31fb910d94e"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "24526a3d-be19-4257-8479-3b436d33dcc3",
    "subjectId": "db",
    "text": "CASE операторы SQL-де не үшін қолданылады?",
    "options": [
      {
        "id": "0cfdd4fe-1b15-44ce-9acd-6e1d2b841465",
        "text": "Сұраныс ішінде шарттық логиканы (if-then-else) іске асыру үшін"
      },
      {
        "id": "2ed99e97-c83f-49ca-8d95-8957a1a378d1",
        "text": "Кестелерді автоматты түрде сұрыптау үшін"
      },
      {
        "id": "8e0f2739-be51-4fbc-bd79-2791e50f138a",
        "text": "Транзакцияны жабу үшін"
      },
      {
        "id": "747615d6-95a4-427a-a02b-044f5f061b30",
        "text": "Жаңа деректер типін құру үшін"
      },
      {
        "id": "8850975e-a0a2-4ec9-bcdc-ee6d025b7d1a",
        "text": "GETUSER()"
      },
      {
        "id": "c2276c4f-c55c-486c-a019-aed933428433",
        "text": "Санды дөңгелектемей, үтірден кейінгі 2 цифрдан артығын қиып тастайды (123.45)"
      },
      {
        "id": "13ea2a67-833e-4d81-b09a-2e894e4ee33b",
        "text": "Сыртқы кілттің бастапқы кілтке автоматты сілтеме жасауы"
      },
      {
        "id": "5f907028-d316-4bd2-8f0d-8da74c9300c4",
        "text": "Нақты бір символ"
      }
    ],
    "correctOptionIds": [
      "0cfdd4fe-1b15-44ce-9acd-6e1d2b841465"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "e26a0ed0-6572-4590-9271-26b3f27e4de1",
    "subjectId": "db",
    "text": "CASE операторының дұрыс синтаксистік аяқталуы қандай?",
    "options": [
      {
        "id": "11b77b30-9167-42b6-821f-2fc5adc15b20",
        "text": "END кілтсөзімен аяқталады"
      },
      {
        "id": "cca8bc01-e97d-433b-917b-1ddaf346d638",
        "text": "CLOSE сөзімен аяқталады"
      },
      {
        "id": "b700d23b-abd6-475e-8425-64ef1ba178b2",
        "text": "EXIT сөзімен аяқталады"
      },
      {
        "id": "3293ffd2-6f32-4100-bdcd-a266c416cac2",
        "text": "FINISH сөзімен аяқталады"
      },
      {
        "id": "5da122fc-29ae-4581-9f11-419c9b09a53e",
        "text": "123.46"
      },
      {
        "id": "1c1ee8ee-b2c3-4a2f-b962-6cac881db5e2",
        "text": "START FROM"
      },
      {
        "id": "81995d09-ddb8-45d1-8c89-9ecc7ef67188",
        "text": "LTRIM()"
      },
      {
        "id": "a36b0ba0-5782-4eab-af1d-ab4455a57fce",
        "text": "WHERE column_name NOT NULL"
      }
    ],
    "correctOptionIds": [
      "11b77b30-9167-42b6-821f-2fc5adc15b20"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "f621fb67-43ef-4302-a36e-a8e0dcb02ec0",
    "subjectId": "db",
    "text": "COALESCE(val1, val2, val3) функциясы не істейді?",
    "options": [
      {
        "id": "966d6f8a-8f98-4a7c-bbc7-7d4e3d9c1a6e",
        "text": "Аргументтерінің ішінен алғашқы NULL емес мәнді қайтарады"
      },
      {
        "id": "14224190-01cc-40b1-96ea-711f847bf098",
        "text": "Барлық мәндердің қосындысын қайтарады"
      },
      {
        "id": "815cb4a3-9655-44e7-8d77-c2eb5eefe6dc",
        "text": "Егер барлығы NULL болса, қате шығарады"
      },
      {
        "id": "4126b84d-5f91-44b3-b37b-0d1df02d677a",
        "text": "Мәндердің орташа шамасын есептейді"
      },
      {
        "id": "8713c88f-425e-48c0-875d-78580db57c4d",
        "text": "MERGE функциясы немесе + операторы"
      },
      {
        "id": "a078dd73-810f-45ff-8d9d-1a9b98225919",
        "text": "ARR_MERGE()"
      },
      {
        "id": "31bc90dc-5de0-4783-ae5f-96c97d0c6850",
        "text": "Максималды мәнді табады"
      },
      {
        "id": "d532302d-6cd4-4089-acd9-4ae788568446",
        "text": "LEFT_STRIP()"
      }
    ],
    "correctOptionIds": [
      "966d6f8a-8f98-4a7c-bbc7-7d4e3d9c1a6e"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "2bba7e36-88ce-443a-9fc2-f3508ff54c5d",
    "subjectId": "db",
    "text": "NULLIF(val1, val2) функциясының қызметі қандай?",
    "options": [
      {
        "id": "f32bfb5a-8e3b-46c1-9bce-815ad4a9178b",
        "text": "Егер val1 мен val2 тең болса, NULL қайтарады, әйтпесе val1-ді қайтарады"
      },
      {
        "id": "a85a11f7-b184-4d9a-a38c-4624f83b99fc",
        "text": "Екі мәннің бірі NULL болса, қате шығарады"
      },
      {
        "id": "26f898b0-a3d7-4f86-bd6a-0ed8f8aafcda",
        "text": "Екі мән тең болғанда TRUE қайтарады"
      },
      {
        "id": "d765687f-c316-4089-b567-dc8d4d2ec6f5",
        "text": "Әрқашан екінші мәнді қайтарады"
      },
      {
        "id": "1e290fd6-eda6-440c-8897-86b683d94660",
        "text": "SYSDATE"
      },
      {
        "id": "e7701359-2371-41ce-aaa4-dedff5c9d689",
        "text": "Айырмашылықты"
      },
      {
        "id": "1191f43b-eaab-4838-a6ae-072122d5ee94",
        "text": "Ешқандай мән қайтармайды"
      },
      {
        "id": "0175e516-fa32-4840-bd70-2bf1c1c89e24",
        "text": "Барлық бағандарды қайтарады"
      }
    ],
    "correctOptionIds": [
      "f32bfb5a-8e3b-46c1-9bce-815ad4a9178b"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "f69ebd0e-a183-41c7-85ae-373258fadebc",
    "subjectId": "db",
    "text": "Мәтіндерді біріктіру үшін SQL-де қандай функция немесе оператор қолданылады?",
    "options": [
      {
        "id": "f6f05197-43c7-4db1-a02d-53c80df524ed",
        "text": "CONCAT функциясы немесе || операторы"
      },
      {
        "id": "233e220e-7974-4dae-8054-cc51b6164baf",
        "text": "MERGE функциясы немесе + операторы"
      },
      {
        "id": "ca97838d-04e5-43e9-8317-5aff4fd0e23b",
        "text": "JOIN функциясы немесе & операторы"
      },
      {
        "id": "4b4dd1d4-ca8a-4306-933f-9801b61f2d8c",
        "text": "UNION функциясы немесе ADD операторы"
      },
      {
        "id": "7af9bb82-b7cc-462d-a383-7e3b68c64ec1",
        "text": "Нәтижені файлға жазады"
      },
      {
        "id": "5b744827-5c6e-4a8a-979e-28dcc9b4bb0d",
        "text": "NOT IN"
      },
      {
        "id": "a17c4a5f-1c04-47a7-913e-3031f4772fbe",
        "text": "TITLE()"
      },
      {
        "id": "f4761588-9353-46ee-a58f-7096767f5a97",
        "text": "Тек сандық бағандарды ғана"
      }
    ],
    "correctOptionIds": [
      "f6f05197-43c7-4db1-a02d-53c80df524ed"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "3f559616-637d-41e9-ab0f-6f6bc2979643",
    "subjectId": "db",
    "text": "Мәтіннің ұзындығын (таңбалар санын) анықтау үшін қандай функция қолданылады?",
    "options": [
      {
        "id": "f7368e66-c613-477c-9907-8a171bfd538f",
        "text": "LENGTH() немесе LEN()"
      },
      {
        "id": "f6c3e1bd-8913-45d7-930c-d17688fec341",
        "text": "SIZE() немесе COUNT()"
      },
      {
        "id": "f829e6e6-ce88-4fac-a301-bdf8d3293b5b",
        "text": "CHAR_COUNT()"
      },
      {
        "id": "76eb95ff-bdc8-4070-97fe-3a94a8b3ae87",
        "text": "WIDTH()"
      },
      {
        "id": "5339d3d0-f2e5-4463-a0ca-61e9a556a242",
        "text": "DESC"
      },
      {
        "id": "b7464877-ea1b-40ad-85cd-f38cbdf85d5d",
        "text": "Кестелерді біріктіру"
      },
      {
        "id": "f09686c8-4f42-484f-bca5-9665b53c932a",
        "text": "BETWEEN NOT"
      },
      {
        "id": "cca198fe-3f34-4083-923a-3a5fe6529a36",
        "text": "Тек бастапқы кілттер бойынша қосылғанда"
      }
    ],
    "correctOptionIds": [
      "f7368e66-c613-477c-9907-8a171bfd538f"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "c917db50-c03e-4e31-a36f-27385bc72120",
    "subjectId": "db",
    "text": "Жолды толықтай кіші әріптерге айналдыру үшін қандай функция қолданылады?",
    "options": [
      {
        "id": "9ca91949-28e7-48fa-8772-1d74400734b0",
        "text": "LOWER()"
      },
      {
        "id": "c52b05f4-fe41-432b-8ed1-467f9a2b53ef",
        "text": "UPPER()"
      },
      {
        "id": "566b4030-1578-4662-969c-8e8f3632317f",
        "text": "SMALL()"
      },
      {
        "id": "d03e5e9a-650e-46b2-b9ba-8b180710ab69",
        "text": "MIN_CASE()"
      },
      {
        "id": "48505f2a-afff-4829-8b56-83b8027b6ab2",
        "text": "Орташаны табады"
      },
      {
        "id": "9fa99dea-b189-431f-bc73-26b0689ecc9a",
        "text": "DATE_INTERVAL()"
      },
      {
        "id": "b544a511-d46a-4073-bf08-e2de7ffad2a2",
        "text": "SQRT()"
      },
      {
        "id": "923d3764-4f9f-46b7-830d-50ae52a3257c",
        "text": "Natural-Join"
      }
    ],
    "correctOptionIds": [
      "9ca91949-28e7-48fa-8772-1d74400734b0"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "2a1afc80-36c7-4701-a400-f7d496effda5",
    "subjectId": "db",
    "text": "Жолды толықтай бас әріптерге айналдыру үшін қандай функция қолданылады?",
    "options": [
      {
        "id": "5558945d-7e5a-44dc-8e8a-b971a78f7f6a",
        "text": "UPPER()"
      },
      {
        "id": "77a19970-1ff6-4ef1-ad22-791ea2420954",
        "text": "LOWER()"
      },
      {
        "id": "345972d0-2562-4576-99ec-996764f2082f",
        "text": "CAPITAL()"
      },
      {
        "id": "289d64c1-2ff3-47ae-9501-50f66e485c51",
        "text": "MAX_CASE()"
      },
      {
        "id": "f0d4df0f-939c-451e-948e-ee991a3b1d06",
        "text": "Барлық нәтижелерді біріктіреді"
      },
      {
        "id": "138151fb-7c44-4832-b968-fc1d675119d5",
        "text": "NULLS TOP"
      },
      {
        "id": "fb08bddf-2cf5-464e-b035-8e5dd7b89b09",
        "text": "NULL"
      },
      {
        "id": "4c8f92cb-5475-457e-a84a-3b24f2353f13",
        "text": "Кесте жояды"
      }
    ],
    "correctOptionIds": [
      "5558945d-7e5a-44dc-8e8a-b971a78f7f6a"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "3b22986f-55a2-42a8-b88a-d5aa2e3d2560",
    "subjectId": "db",
    "text": "Жолдың басындағы және соңындағы бос орындарды алып тастау үшін қолданылатын функция:",
    "options": [
      {
        "id": "68ee4544-790a-4287-b387-3e5fe8b7c753",
        "text": "TRIM()"
      },
      {
        "id": "bfa65899-09e9-43cc-b9c4-0ce0c51945d5",
        "text": "STRIP()"
      },
      {
        "id": "ea76c901-7dfb-4a46-b537-a1ebfd6b37f3",
        "text": "CLEAN()"
      },
      {
        "id": "b9c04d86-303d-434b-8475-7a411480bfb9",
        "text": "REMOVE_SPACES()"
      },
      {
        "id": "7b72a4d6-f9a4-4c2e-8b2e-0c1e6b72d5cc",
        "text": "Нақты бір символ"
      },
      {
        "id": "9431671b-e1c3-42a4-ba82-a63fea9428ce",
        "text": "Кему ретімен сұрыптау"
      },
      {
        "id": "b2377a80-49da-40d5-96bb-266351161b1d",
        "text": "OUTSIDE"
      },
      {
        "id": "c9959aca-681f-418a-afa1-0b922a4e203f",
        "text": "Бастапқы кілттер сәйкес келуі керек"
      }
    ],
    "correctOptionIds": [
      "68ee4544-790a-4287-b387-3e5fe8b7c753"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "8dc58e57-c5d2-4ef2-959d-897efb34e14f",
    "subjectId": "db",
    "text": "Жолдың тек оң жағындағы бос орындарды өшіру үшін қолданылатын функция:",
    "options": [
      {
        "id": "bd09ee79-a255-4bc2-bd41-ded2fb68f225",
        "text": "RTRIM()"
      },
      {
        "id": "38b09df1-9722-4262-946e-8bc192ac9caf",
        "text": "LTRIM()"
      },
      {
        "id": "c2e41282-ab29-4f83-bbbd-528016bd80b4",
        "text": "TRIM()"
      },
      {
        "id": "c00fa0ce-c512-40dc-8425-dfb81dae9cfa",
        "text": "RIGHT_STRIP()"
      },
      {
        "id": "6a19c668-f17a-4fe5-bc2d-9f7671c36aca",
        "text": "Олар кезекпен параллель орындалады"
      },
      {
        "id": "bd0e8468-7632-4de4-b9b0-39fc630e873f",
        "text": "Нақты бір символ"
      },
      {
        "id": "58dc511b-f22a-43f5-a5ae-78af6feac787",
        "text": "Кесте құрады"
      },
      {
        "id": "bf5ca489-393c-4e21-b943-182377c12647",
        "text": "Бос мәндердің орнына автоматты жазба қосу"
      }
    ],
    "correctOptionIds": [
      "bd09ee79-a255-4bc2-bd41-ded2fb68f225"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "8a2c697b-c29a-4971-8af6-a14cdf7b9b24",
    "subjectId": "db",
    "text": "Жолдың тек сол жағындағы бос орындарды өшіру үшін қолданылатын функция:",
    "options": [
      {
        "id": "00de4b9a-0abd-49a3-97e9-ef99835809a1",
        "text": "LTRIM()"
      },
      {
        "id": "11ec0305-5256-4574-91eb-3844f04eed5f",
        "text": "RTRIM()"
      },
      {
        "id": "d5f7d794-a5e3-433f-afdb-e230278eb022",
        "text": "TRIM()"
      },
      {
        "id": "705a9542-3068-4d60-aaeb-53390ef716f8",
        "text": "LEFT_STRIP()"
      },
      {
        "id": "a3095d07-8868-49d5-983b-e9c4e51f89bd",
        "text": "Тізімде бар-жоғын тексереді"
      },
      {
        "id": "f4b5f8bc-c1b7-4e1a-b841-9d3866b91b69",
        "text": "POWER()"
      },
      {
        "id": "5d86debb-638f-4dca-99d1-7c4fe97100b1",
        "text": "Кестелерді байланыстыру шарттарын (мысалы, PK = FK) көрсету үшін"
      },
      {
        "id": "8a744cc8-ca19-4708-b8a1-ab7601c8d16d",
        "text": "Деректер қосады"
      }
    ],
    "correctOptionIds": [
      "00de4b9a-0abd-49a3-97e9-ef99835809a1"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "bcb9f623-a53e-44d2-9af7-d5cba927ee5e",
    "subjectId": "db",
    "text": "SUBSTRING('Database', 1, 4) өрнегінің нәтижесі не болады (1-ден басталатын SQL стандарты бойынша)?",
    "options": [
      {
        "id": "1fad37e4-4cab-4dcc-a33b-e524ce3ccf6e",
        "text": "'Data'"
      },
      {
        "id": "8ab94cd7-3c16-4709-be40-b7a468fa07c0",
        "text": "'Dat'"
      },
      {
        "id": "6c347776-62b5-4727-8cad-1d722bbb17e5",
        "text": "'atab'"
      },
      {
        "id": "1bba6aa9-5d11-46f5-8f1b-1a4cd86a383b",
        "text": "'base'"
      },
      {
        "id": "89380611-f79a-40fe-ba18-b2251fa8b138",
        "text": "Деректерді топтау"
      },
      {
        "id": "b8c9e739-30c7-45e2-b653-7fcff4045160",
        "text": "Максималды мәнді табады"
      },
      {
        "id": "d4b911c6-5c71-4201-9f55-5a24e9326bb2",
        "text": "Тізімде бар-жоғын тексереді"
      },
      {
        "id": "f7b7e213-63cb-47d3-9173-aca931fbe5d6",
        "text": "SORT BY"
      }
    ],
    "correctOptionIds": [
      "1fad37e4-4cab-4dcc-a33b-e524ce3ccf6e"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "341f5b5b-85c5-4c6c-8340-d40a6e181ff5",
    "subjectId": "db",
    "text": "PostgreSQL-де ағымдағы күн мен уақытты алу үшін қандай функция қолданылады?",
    "options": [
      {
        "id": "ac47f786-bcc8-43ba-bf3e-851cec09bd24",
        "text": "NOW() немесе CURRENT_TIMESTAMP"
      },
      {
        "id": "a8b119cb-81ee-4ea3-867c-be919c36ad8a",
        "text": "GETDATE()"
      },
      {
        "id": "2c1086fa-39fa-4031-b493-8084c5ddd625",
        "text": "SYSDATE"
      },
      {
        "id": "69a10a8f-4bda-4d3e-b0b6-a9814de87e32",
        "text": "TODAY()"
      },
      {
        "id": "34e8594e-cdf2-4ec9-a06b-7f87f3422f44",
        "text": "SYS_GUID()"
      },
      {
        "id": "6357488e-67c1-4392-9dee-9d9734c5bc14",
        "text": "GET_PART()"
      },
      {
        "id": "0bfd2a6e-00fc-4ddd-be4b-271092478b03",
        "text": "Шарттардың екеуі де FALSE болғанда орындалады"
      },
      {
        "id": "bedfd321-2338-4cf9-85f3-a7a9c61828be",
        "text": "GPA бойынша ең жоғары 3 студент"
      }
    ],
    "correctOptionIds": [
      "ac47f786-bcc8-43ba-bf3e-851cec09bd24"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "03134590-3e07-4e2e-a8dc-33869373c36a",
    "subjectId": "db",
    "text": "Күн/уақыт мәнінен нақты бір бөлікті (мысалы, тек жылды немесе айды) бөліп алу үшін қолданылатын оператор:",
    "options": [
      {
        "id": "54f23e57-1213-4fc9-bb21-6df8e37106fb",
        "text": "EXTRACT() немесе DATE_PART()"
      },
      {
        "id": "0f1f5f8f-ea05-4112-8aa6-532116729071",
        "text": "GET_PART()"
      },
      {
        "id": "c001f822-acfe-472c-9c77-dffd4f2d9809",
        "text": "SPLIT_DATE()"
      },
      {
        "id": "2594ba68-d5dc-42a4-9d0f-dcfce6992731",
        "text": "SUBDATE()"
      },
      {
        "id": "08025731-6a31-4377-8b70-db8ac473f2d1",
        "text": "Сол жақтың барлығы"
      },
      {
        "id": "52e5db12-c0ce-47d7-902c-32955b2298be",
        "text": "Деректерді өсу ретімен сұрыптау"
      },
      {
        "id": "6277f59e-43da-4419-9301-11f910ef8c4f",
        "text": "Егер барлығы NULL болса, қате шығарады"
      },
      {
        "id": "6eadc396-4e22-4938-9c54-c4892d0c4622",
        "text": "TRIM()"
      }
    ],
    "correctOptionIds": [
      "54f23e57-1213-4fc9-bb21-6df8e37106fb"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "ec3d5638-8cda-42ee-a8c5-73a5dab0894b",
    "subjectId": "db",
    "text": "EXTRACT(YEAR FROM DATE '2026-06-05') сұранысының нәтижесі нешеге тең?",
    "options": [
      {
        "id": "c7a1c604-a172-4b4a-996c-a7789f87601a",
        "text": "2026"
      },
      {
        "id": "8094163c-90e3-40f3-a46a-b0d819152818",
        "text": "6"
      },
      {
        "id": "82cce98f-29ef-412c-926b-17a40dbc18ae",
        "text": "5"
      },
      {
        "id": "5c6695df-43fc-43aa-947d-e7b870e10d85",
        "text": "2026.06"
      },
      {
        "id": "c28345ad-4262-44db-af33-f7b28e69dfe3",
        "text": "UNION ALL тек оң жақ кестенің деректерін сақтайды"
      },
      {
        "id": "4478cdc7-40f9-41f5-a305-7b2f9fc32c84",
        "text": "Көбірек жады үнемдейді"
      },
      {
        "id": "37161d61-c3f5-4b11-9ae3-9ac78045f2b2",
        "text": "LTRIM()"
      },
      {
        "id": "c0753f49-6a1b-4247-b1e3-50386fd916f0",
        "text": "Әрқашан екінші мәнді қайтарады"
      }
    ],
    "correctOptionIds": [
      "c7a1c604-a172-4b4a-996c-a7789f87601a"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "60f5f25b-9a2e-47de-87a1-18f6a25aabed",
    "subjectId": "db",
    "text": "SQL-де шартты сүзгілеуде AND операторымен біріктірілген шарттар қалай орындалады?",
    "options": [
      {
        "id": "64515c88-d855-417b-9956-969c403dde6f",
        "text": "Екі шарт та бірдей TRUE болғанда ғана жол таңдалады"
      },
      {
        "id": "239f087b-ee4e-4174-81c2-c9e18a17cbfc",
        "text": "Шарттардың кем дегенде біреуі TRUE болса, жол таңдалады"
      },
      {
        "id": "5ea0df86-f7c9-4f53-905b-f8056c5e8ec9",
        "text": "Шарттардың екеуі де FALSE болғанда орындалады"
      },
      {
        "id": "38e084ff-9b7a-4bd0-8b8e-13e66321a5fb",
        "text": "Тек бірінші шарт қана тексеріледі"
      },
      {
        "id": "128b773a-ba3f-490b-b7a7-3284c9da4954",
        "text": "Санды ең жақын бүтін санға дейін дөңгелектейді"
      },
      {
        "id": "688a1666-e567-4b42-a8d1-b703af26a665",
        "text": "Қате (Error)"
      },
      {
        "id": "6e9b897d-cbe3-4e4a-a76f-9f7d112bffdf",
        "text": "Тек сәйкестер"
      },
      {
        "id": "45fee8de-fc56-4863-85a2-bcb07351a030",
        "text": "Мәннің бос жол екенін тексереді"
      }
    ],
    "correctOptionIds": [
      "64515c88-d855-417b-9956-969c403dde6f"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "282d57b1-c129-4018-889d-bca63c397252",
    "subjectId": "db",
    "text": "SQL-де OR операторымен біріктірілген шарттар қалай орындалады?",
    "options": [
      {
        "id": "72f2f439-4e7f-447d-85df-8b52d388386d",
        "text": "Шарттардың кем дегенде біреуі TRUE болса, жол таңдалады"
      },
      {
        "id": "d68d3d0a-e1d8-46d5-aa3a-a34343f5de7f",
        "text": "Екі шарт та міндетті түрде TRUE болуы керек"
      },
      {
        "id": "06ca82c6-e823-4b44-ab1c-7f8c10805835",
        "text": "Шарттардың ешқайсысы орындалмаса орындалады"
      },
      {
        "id": "a2575b4a-0270-4071-aa16-c6a340e135b5",
        "text": "Шарттардың тек біреуі ғана TRUE болуын талап етеді"
      },
      {
        "id": "0da892ca-c7d1-481a-bd86-3bc3a941b7a1",
        "text": "Мәннің NULL екенін тексереді"
      },
      {
        "id": "af2eb4d0-9a2c-49c0-a59d-89962fefaeba",
        "text": "MERGE функциясы немесе + операторы"
      },
      {
        "id": "2fa58041-184c-447d-b1d4-1d88e04c64a4",
        "text": "Екі мәннің бірі NULL болса, қате шығарады"
      },
      {
        "id": "569ef820-7489-4ffe-aa47-71a193685771",
        "text": "Нәтижені бүтін санға айналдырады"
      }
    ],
    "correctOptionIds": [
      "72f2f439-4e7f-447d-85df-8b52d388386d"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "d18d1e83-eb0b-405e-8266-8bad73517793",
    "subjectId": "db",
    "text": "Ақиқаттық кестесінде TRUE AND NULL нәтижесі қандай болады?",
    "options": [
      {
        "id": "88d05850-2436-4c81-9d0f-729a6f0b85d5",
        "text": "NULL (немесе UNKNOWN)"
      },
      {
        "id": "83e29e2d-1c7b-48b2-87ca-7d81d94dd24b",
        "text": "TRUE"
      },
      {
        "id": "7f086c0d-3360-4810-9fd4-527a0447e7c4",
        "text": "FALSE"
      },
      {
        "id": "b2ed4d41-2631-4a07-8d4f-db5f5f1786fc",
        "text": "Қате (Error)"
      },
      {
        "id": "c2814cb8-24c5-4624-ab83-a53a6ae8e669",
        "text": "Олардың орташа мәні бойынша сұрыпталады"
      },
      {
        "id": "8f8a5e08-42d2-4b94-98fe-4bdc0500b707",
        "text": "Егер барлығы NULL болса, қате шығарады"
      },
      {
        "id": "760e08a1-7641-4bbc-84e2-72083595f5d2",
        "text": "Сыртқы кілттің бастапқы кілтке автоматты сілтеме жасауы"
      },
      {
        "id": "ca41aa5a-d783-4b71-9648-6e976c4ecc83",
        "text": "ANALYZE PLAN"
      }
    ],
    "correctOptionIds": [
      "88d05850-2436-4c81-9d0f-729a6f0b85d5"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "bb8143ae-125e-408f-bfa1-cc8347c7e451",
    "subjectId": "db",
    "text": "Ақиқаттық кестесінде FALSE AND NULL нәтижесі қандай болады?",
    "options": [
      {
        "id": "45a33ed6-a3ea-4600-83f9-06107fc091b5",
        "text": "FALSE"
      },
      {
        "id": "08dbe8a0-ade1-4a1c-ba0f-3e95474e38bf",
        "text": "TRUE"
      },
      {
        "id": "d3b7b7bd-8b1a-46c0-a0a0-fe8f67f44fa8",
        "text": "NULL"
      },
      {
        "id": "a91bb949-b447-4aa3-8d42-0a03dc0fb4b7",
        "text": "UNKNOWN"
      },
      {
        "id": "adc14ffd-b08e-4e2e-ae99-d23af18fecf7",
        "text": "MOD()"
      },
      {
        "id": "947826d0-fccd-4c1b-970c-36fbd68e0ad2",
        "text": "MAX_CASE()"
      },
      {
        "id": "a05ced11-e0af-4232-912a-c4c48ca9efe5",
        "text": "'Database' (өзгермейді, себебі ізделетін шаблон регистрге сезімтал)"
      },
      {
        "id": "f274b678-9ac9-4892-8f5c-c402e1628222",
        "text": "'Dat'"
      }
    ],
    "correctOptionIds": [
      "45a33ed6-a3ea-4600-83f9-06107fc091b5"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "a970b12e-d1ee-407e-b755-74e208168afb",
    "subjectId": "db",
    "text": "Ақиқаттық кестесінде TRUE OR NULL нәтижесі қандай болады?",
    "options": [
      {
        "id": "cec47179-d1da-4799-9c3f-cb7705315c91",
        "text": "TRUE"
      },
      {
        "id": "7fc9919f-ea81-4c49-8b19-085322e094ee",
        "text": "FALSE"
      },
      {
        "id": "6f261463-a29b-4d31-8c20-cea68eb682cd",
        "text": "NULL"
      },
      {
        "id": "f7e09c19-978d-4a6b-afae-bed4dc152089",
        "text": "UNKNOWN"
      },
      {
        "id": "a98617f1-c354-4a49-8fb0-63a0d2932a37",
        "text": "LEFT_STRIP()"
      },
      {
        "id": "5b0aa44c-1c73-46c5-8f06-928f40a127d2",
        "text": "Екі кестеде де қосылатын бағанның аты бірдей болған жағдайда"
      },
      {
        "id": "68ac017b-4b53-486f-874a-b22a927f32d0",
        "text": "DATABASE() немесе CURRENT_DATABASE()"
      },
      {
        "id": "8b8737ee-2a4a-4ff6-a38e-3a5ba79ef6f9",
        "text": "UNION функциясы немесе ADD операторы"
      }
    ],
    "correctOptionIds": [
      "cec47179-d1da-4799-9c3f-cb7705315c91"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "1c6149dd-4d6b-403f-8e91-24867882b5b8",
    "subjectId": "db",
    "text": "Ақиқаттық кестесінде FALSE OR NULL нәтижесі қандай болады?",
    "options": [
      {
        "id": "573fcbb9-6d1f-4bd2-a1c9-aa0bdd8b30ed",
        "text": "NULL (немесе UNKNOWN)"
      },
      {
        "id": "7e1bbc05-0566-4dad-bfd9-c5c547b04578",
        "text": "TRUE"
      },
      {
        "id": "17dbf382-12a4-437e-aceb-ded122a918b5",
        "text": "FALSE"
      },
      {
        "id": "22a579f4-6931-446a-b3aa-128a473db881",
        "text": "Ешқандай мән қайтармайды"
      },
      {
        "id": "41668cb8-211c-4fa3-9994-9dae13712260",
        "text": "SQRT()"
      },
      {
        "id": "098cc149-b54f-4dac-9f6c-efdc2b867db9",
        "text": "Кез келген сан"
      },
      {
        "id": "682d7e92-6a5f-46a0-9541-a34b78a75939",
        "text": "'Data'"
      },
      {
        "id": "0c945751-030f-4f78-8c37-0ddf1a5d724d",
        "text": "Бірінші кестені"
      }
    ],
    "correctOptionIds": [
      "573fcbb9-6d1f-4bd2-a1c9-aa0bdd8b30ed"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "6f51689e-477c-4b1e-a6d0-b4100e2749de",
    "subjectId": "db",
    "text": "NOT NULL шартын WHERE-де қалай дұрыс жазу керек?",
    "options": [
      {
        "id": "fa9e22ba-d70b-4ede-8a98-da0ffc89f573",
        "text": "WHERE column_name IS NOT NULL"
      },
      {
        "id": "f61cf095-838b-481d-9c4f-254c07f45fd5",
        "text": "WHERE column_name != NULL"
      },
      {
        "id": "12421250-274d-4f15-9d24-7236074f80c4",
        "text": "WHERE column_name NOT NULL"
      },
      {
        "id": "25f983b1-e375-4f8d-b720-a1b9d171e767",
        "text": "WHERE column_name IS NOT EMPTY"
      },
      {
        "id": "66effa64-4005-405a-9693-4ec6f601ea2d",
        "text": "Кестелерді біріктіру"
      },
      {
        "id": "5b470a1b-5ac8-4e26-a5fd-7b0cb788a6bb",
        "text": "Декарт көбейтіндісі (барлық мүмкін жұптар)"
      },
      {
        "id": "bbf3645e-469d-4460-9e6d-46a06e404d82",
        "text": "Кез келген бағанды шектеусіз жазуға болады"
      },
      {
        "id": "763c9708-8f51-4dcb-88a3-54ee1c3978c4",
        "text": "'basebase'"
      }
    ],
    "correctOptionIds": [
      "fa9e22ba-d70b-4ede-8a98-da0ffc89f573"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "0d562f29-5596-4ef1-b885-afc3ca22890f",
    "subjectId": "db",
    "text": "Сұраныста ORDER BY сөйлемінде NULL мәндерін ең соңында көрсету үшін PostgreSQL-де не жазылады?",
    "options": [
      {
        "id": "4e2823c1-bbe9-49b5-b6fe-17467784413b",
        "text": "NULLS LAST"
      },
      {
        "id": "29c3873f-907c-4e8e-b531-57e5ef39a03f",
        "text": "NULLS FIRST"
      },
      {
        "id": "63460252-99e6-4ff9-810f-456998fd52c5",
        "text": "NULLS END"
      },
      {
        "id": "1c70d4e5-c496-4a26-8c85-82a5e5da509e",
        "text": "BOTTOM NULLS"
      },
      {
        "id": "9f6c5636-a582-4382-8e5f-7eaf19c74a10",
        "text": "Қосындысын табады"
      },
      {
        "id": "9165229f-1e00-4333-bb90-0d49276df247",
        "text": "Қиылысу (Intersection)"
      },
      {
        "id": "20e37c4b-3633-4c51-91d5-478ade8dfee9",
        "text": "Шарттардың кем дегенде біреуі TRUE болса, жол таңдалады"
      },
      {
        "id": "3072f1b7-6f39-4c10-b535-34c7d2996483",
        "text": "RAND() немесе RANDOM()"
      }
    ],
    "correctOptionIds": [
      "4e2823c1-bbe9-49b5-b6fe-17467784413b"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "138b6c4d-e549-44bc-944d-2108c69a6b36",
    "subjectId": "db",
    "text": "Сұраныста ORDER BY сөйлемінде NULL мәндерін ең басында көрсету үшін не жазылады?",
    "options": [
      {
        "id": "1911d754-a60f-4ebf-8730-c05ec7156524",
        "text": "NULLS FIRST"
      },
      {
        "id": "5486ae36-2134-4e4e-a667-1fee0e7bc133",
        "text": "NULLS LAST"
      },
      {
        "id": "07035266-92ed-4988-8aa5-81689142c122",
        "text": "NULLS TOP"
      },
      {
        "id": "aef906dd-70ef-43ef-aa83-50d94e3c8eee",
        "text": "HEAD NULLS"
      },
      {
        "id": "8a322782-2fe0-41fc-ae95-8781c64af5cd",
        "text": "Сұраныстардағы бағандар саны мен олардың сәйкес деректер типтері бірдей болуы керек"
      },
      {
        "id": "fc37dc30-b958-4fc0-9044-cf6289dc3db0",
        "text": "Орташа мәнді табады"
      },
      {
        "id": "c84354cc-4d7a-4024-9e52-be453c4b33f9",
        "text": "Деректерді жояды"
      },
      {
        "id": "d7dc7320-1fc4-4c3e-a103-495e4546ba97",
        "text": "Олар кезекпен параллель орындалады"
      }
    ],
    "correctOptionIds": [
      "1911d754-a60f-4ebf-8730-c05ec7156524"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "1f1e6547-7705-4aad-a051-5c48165b996f",
    "subjectId": "db",
    "text": "Бірнеше баған бойынша сұрыптау қалай жүзеге асады (мысалы, ORDER BY Lastname, Firstname)?",
    "options": [
      {
        "id": "d5e61536-61e4-4a63-8290-203551fb177d",
        "text": "Алдымен Lastname бойынша сұрыпталады, егер олар тең болса, Firstname бойынша сұрыпталады"
      },
      {
        "id": "be13084e-ee3e-455d-be08-d0f8f00f08c8",
        "text": "Бағандардың алфавиттік реті бойынша сұрыпталады"
      },
      {
        "id": "adf0ba7b-e506-4905-a901-c5cb7834c9b3",
        "text": "Олардың орташа мәні бойынша сұрыпталады"
      },
      {
        "id": "b587fe42-64ae-437a-b1d0-bf93e89912e0",
        "text": "Тек Lastname бойынша ғана сұрыпталады, Firstname еленбейді"
      },
      {
        "id": "f376a93e-e355-4737-a2ff-a6666f577c23",
        "text": "CLEAN()"
      },
      {
        "id": "0889b96a-c6aa-44fc-a555-14e34a4ada54",
        "text": "Тек сәйкестер"
      },
      {
        "id": "c15b6b9d-8605-4898-a48c-0c61d0f9afc4",
        "text": "Дубликаттарды іздеп, сұрыптау және жою кезеңі болмағандықтан тезірек орындалады"
      },
      {
        "id": "221ccb56-620b-43db-a862-386cb6227f17",
        "text": "UNION ALL тек оң жақ кестенің деректерін сақтайды"
      }
    ],
    "correctOptionIds": [
      "d5e61536-61e4-4a63-8290-203551fb177d"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "a84c82d5-19a1-44d9-839e-501271e07eb9",
    "subjectId": "db",
    "text": "GROUP BY қолданылғанда SELECT тізімінде қандай бағандарды ғана жазуға рұқсат етіледі?",
    "options": [
      {
        "id": "2c6ce695-6d56-49bb-9fe0-25ec2ec2896e",
        "text": "Тек топтастырылған бағандарды немесе агрегаттық функциялардың ішіндегі бағандарды"
      },
      {
        "id": "c312a817-e667-4b7d-98f7-f1e56b2da8f6",
        "text": "Кез келген бағанды шектеусіз жазуға болады"
      },
      {
        "id": "d03d88ad-b65d-4d7a-87b5-9393928c273a",
        "text": "Тек сандық бағандарды ғана"
      },
      {
        "id": "41e104e0-1fb0-4188-9bcf-84f2ac760078",
        "text": "Тек бастапқы кілт бағанын ғана"
      },
      {
        "id": "9e8dd340-1936-49b0-9796-b4f5338eb808",
        "text": "Бос мәндердің орнына автоматты жазба қосу"
      },
      {
        "id": "9ac15b82-5d2c-4b12-8fee-910cdee01555",
        "text": "Тек бірінші шарт қана тексеріледі"
      },
      {
        "id": "538cc8cc-a51b-443c-be94-688e3151fe79",
        "text": "DIFF_DATE()"
      },
      {
        "id": "89c60a03-abab-46cf-aae2-3308e83bf2ce",
        "text": "Барлық бағандарды қайтарады"
      }
    ],
    "correctOptionIds": [
      "2c6ce695-6d56-49bb-9fe0-25ec2ec2896e"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "643961e0-e1b7-4699-945e-1d3ae6875e57",
    "subjectId": "db",
    "text": "Сұраныс нәтижесін белгілі бір санға ығыстыру (алғашқы N жолды өткізіп жіберу) үшін LIMIT операторымен бірге не қолданылады?",
    "options": [
      {
        "id": "154c2b29-25ef-471c-8e0f-2b9ac543f496",
        "text": "OFFSET"
      },
      {
        "id": "d077fc77-9cdd-4535-94fb-92ab8046f1ca",
        "text": "SKIP"
      },
      {
        "id": "2404dd2c-6232-4584-8c73-d15977598a6b",
        "text": "START FROM"
      },
      {
        "id": "726c0936-7ee7-4d5d-8c86-65aef1e4b1c5",
        "text": "BEGIN AT"
      },
      {
        "id": "51170090-7dd2-400e-93b9-ecbfe3a9ae5c",
        "text": "Оң жақтың барлығы"
      },
      {
        "id": "496966b8-c527-436f-ab23-23712273a960",
        "text": "Кесте құрады"
      },
      {
        "id": "ee391d59-1c4b-48ec-ac71-19d6541cac81",
        "text": "Сол жақтың барлығы"
      },
      {
        "id": "5ba63570-1592-46ac-bc69-f530b93c3d8b",
        "text": "DOWN"
      }
    ],
    "correctOptionIds": [
      "154c2b29-25ef-471c-8e0f-2b9ac543f496"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "ac4b1fe5-cbc6-4285-8c5e-077865def985",
    "subjectId": "db",
    "text": "LIMIT 5 OFFSET 10 сұранысы не істейді?",
    "options": [
      {
        "id": "dc943021-fe0b-4840-921b-4b7e2ed7bc54",
        "text": "Алғашқы 10 жолды өткізіп жіберіп, келесі 5 жолды қайтарады"
      },
      {
        "id": "9abdd4fd-0d3f-416f-be05-9dea905874d1",
        "text": "Алғашқы 5 жолды өткізіп жіберіп, келесі 10 жолды қайтарады"
      },
      {
        "id": "f032e7d9-249d-44c9-9ab1-83577ceb134e",
        "text": "5-тен 10-ға дейінгі жолдарды қайтарады"
      },
      {
        "id": "29e4454c-3419-4b2d-aaff-b01c0c1ddb85",
        "text": "Жалпы саны 15 жолды қайтарады"
      },
      {
        "id": "3211cb88-6a77-4659-95c2-ac4eefe08560",
        "text": "Деректерді біріктіру"
      },
      {
        "id": "be6e79b7-0130-4d4b-a2dc-e479ba33fb7d",
        "text": "Сол жақтың барлығы"
      },
      {
        "id": "41d97377-0200-4a26-a031-0b00704482bd",
        "text": "LEFT_STRIP()"
      },
      {
        "id": "ea405c0a-ff71-45f3-b305-ca12eaca6cff",
        "text": "Деректерді біріктіреді"
      }
    ],
    "correctOptionIds": [
      "dc943021-fe0b-4840-921b-4b7e2ed7bc54"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "73004119-526b-46e1-a89f-2ba0d5bb1d5e",
    "subjectId": "db",
    "text": "COUNT(DISTINCT column_name) өрнегі не істейді?",
    "options": [
      {
        "id": "94d2b922-f9ed-46b8-9e31-a59c6ba252f8",
        "text": "Бағандағы тек бірегей және NULL емес мәндердің санын есептейді"
      },
      {
        "id": "b0096746-a113-4af8-a3ff-2cfc866a7b14",
        "text": "Барлық қайталанатын мәндердің қосындысын табады"
      },
      {
        "id": "c3417bfd-652e-4982-9374-18d8629b1de0",
        "text": "Бос мәндердің жалпы санын қайтарады"
      },
      {
        "id": "241ab8a4-6530-4a8b-b550-7a36009db2cd",
        "text": "Кестедегі барлық жолдардың санын қайтарады"
      },
      {
        "id": "eea9747b-893f-4186-a05a-36fd3d0593f7",
        "text": "GET_PART()"
      },
      {
        "id": "1aedda95-870c-49f3-aee8-d598e1a6f0e7",
        "text": "GROUP_ARRAY()"
      },
      {
        "id": "8a82ccfe-58af-4ed3-a714-dd2ad29a270d",
        "text": "Мәннің бос жол екенін тексереді"
      },
      {
        "id": "f887a3e6-1c5e-41ba-8563-bf5f8a3b7bed",
        "text": "WHERE column_name IS NOT NULL"
      }
    ],
    "correctOptionIds": [
      "94d2b922-f9ed-46b8-9e31-a59c6ba252f8"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "070ed2ce-8f8d-4bcf-8d16-e5c8b134aa68",
    "subjectId": "db",
    "text": "Сұраныс нәтижелерінің жиынынан екінші бір сұраныс нәтижелерін алып тастау операторы қалай аталады (Oracle немесе SQL Server тиісінше)?",
    "options": [
      {
        "id": "e80cdebc-07ab-4b8d-a0b3-f82dc0fa5397",
        "text": "MINUS немесе EXCEPT"
      },
      {
        "id": "69d517bc-4c61-497e-a4a1-59c0c44e9326",
        "text": "SUBTRACT немесе REMOVE"
      },
      {
        "id": "9ae14807-ce8e-4690-b739-268cde79d522",
        "text": "DIFFERENCE"
      },
      {
        "id": "a086f0b1-ea99-4a60-b950-3984bd214231",
        "text": "EXCLUDE"
      },
      {
        "id": "b1ea94b2-47ce-4c9c-bfd9-f0933cdd6de3",
        "text": "Бағандағы тек бірегей және NULL емес мәндердің санын есептейді"
      },
      {
        "id": "99769a19-6e36-4390-b7e9-379d7971ec36",
        "text": "START FROM"
      },
      {
        "id": "38797c1c-cfd6-43a1-abbe-a33b4f3504a7",
        "text": "Нақты бір символ"
      },
      {
        "id": "312c385f-7cc1-4fde-a4f9-b52415ca7178",
        "text": "Жазба қосады"
      }
    ],
    "correctOptionIds": [
      "e80cdebc-07ab-4b8d-a0b3-f82dc0fa5397"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "349354de-17f0-4797-a03f-196b8c1ffa73",
    "subjectId": "db",
    "text": "INTERSECT операторы жиындар теориясының қай амалына сәйкес келеді?",
    "options": [
      {
        "id": "87ce3631-8452-4edc-9a58-079759694c13",
        "text": "Қиылысу (Intersection)"
      },
      {
        "id": "108b76ae-b9be-4063-9b0f-635db03d9be6",
        "text": "Бірігу (Union)"
      },
      {
        "id": "556ddfbe-4040-4ee1-aded-9e0735618e23",
        "text": "Айырма (Difference)"
      },
      {
        "id": "e85cf8b3-7b22-47d7-9c63-b558f8302047",
        "text": "Декарттық көбейтінді"
      },
      {
        "id": "28f9d710-2cf2-4da7-8e4f-5812f22fae2a",
        "text": "LIKE"
      },
      {
        "id": "f6993658-0153-4f08-ada1-10e674bd4328",
        "text": "MERGE функциясы немесе + операторы"
      },
      {
        "id": "d70fe39e-4834-462b-92b8-a7cc278697aa",
        "text": "NULLS FIRST"
      },
      {
        "id": "6ac6557d-de3f-4d5f-adb3-6f5c775d4ac7",
        "text": "Сұраныс нәтижесінен қайталанатын (дубликат) жолдарды алып тастап, тек бірегей мәндерді қайтару"
      }
    ],
    "correctOptionIds": [
      "87ce3631-8452-4edc-9a58-079759694c13"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "723eacd8-b9ba-448d-bd3f-d97c25693421",
    "subjectId": "db",
    "text": "Екі кестені қосу кезінде USING(column_name) синтаксисін қай кезде қолдануға болады?",
    "options": [
      {
        "id": "6f77b5a0-a057-40af-80c2-e343a6b0c684",
        "text": "Екі кестеде де қосылатын бағанның аты бірдей болған жағдайда"
      },
      {
        "id": "5f56076f-431f-4263-8b9f-c91fd70f0626",
        "text": "Екі кесте де бос болмағанда"
      },
      {
        "id": "f5930079-4454-4a94-b805-2bc9b174e825",
        "text": "Тек бастапқы кілттер бойынша қосылғанда"
      },
      {
        "id": "8c3b3742-f8b7-4bec-8d3a-e311c1a20d6d",
        "text": "Баған типтері әртүрлі болғанда"
      },
      {
        "id": "4d780a38-ecf7-4d85-ac13-b29b7f0ce397",
        "text": "NULL"
      },
      {
        "id": "8848ede1-a7f7-43cb-9e8e-fc36822cfb0f",
        "text": "INITCAP()"
      },
      {
        "id": "d0155dcf-0c5e-450b-9884-8eaf93ad7e91",
        "text": "DATE_ADD()"
      },
      {
        "id": "9a4512db-389a-42eb-a46c-677f592ce4c1",
        "text": "EXTRACT() немесе DATE_PART()"
      }
    ],
    "correctOptionIds": [
      "6f77b5a0-a057-40af-80c2-e343a6b0c684"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "533f0b32-ee74-4309-a3c1-faf8e7bbcf9b",
    "subjectId": "db",
    "text": "ON сөйлемі JOIN операторында не үшін қажет?",
    "options": [
      {
        "id": "0db95794-b8c8-4dac-a7f6-4794649f0336",
        "text": "Кестелерді байланыстыру шарттарын (мысалы, PK = FK) көрсету үшін"
      },
      {
        "id": "788dbb89-da97-4a39-8a53-15ebbec459a6",
        "text": "Кестенің атын өзгерту үшін"
      },
      {
        "id": "6fd36b00-c44d-4c9a-8e9a-b2b932eb6bda",
        "text": "Сұрыптау шартын көрсету үшін"
      },
      {
        "id": "c896c957-ff93-4372-ad15-da5ea81601d6",
        "text": "Жаңа деректерді кестеге қосу үшін"
      },
      {
        "id": "fc5d3b2f-d138-4a60-8fbb-c2427e238ba9",
        "text": "Барлық бағандарды қайтарады"
      },
      {
        "id": "1cf08bfc-fbe3-4008-b13e-cda3f9d7c62b",
        "text": "RAND() немесе RANDOM()"
      },
      {
        "id": "e0b738e8-1437-48ad-82f3-7af904264bdb",
        "text": "Екі шарт та бірдей TRUE болғанда ғана жол таңдалады"
      },
      {
        "id": "51af58ec-0827-47b4-8a58-763120a2aee2",
        "text": "DATEADD()"
      }
    ],
    "correctOptionIds": [
      "0db95794-b8c8-4dac-a7f6-4794649f0336"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "27363415-e9f4-429b-ac09-d92a8e608524",
    "subjectId": "db",
    "text": "SQL-де жолдарды сұрыптау әдепкі бойынша (кілтсөз жазылмаса) қалай орындалады?",
    "options": [
      {
        "id": "352e25d2-c8f8-4714-9b8e-f08624e630ab",
        "text": "Өсу ретімен (ASC)"
      },
      {
        "id": "90916b81-691c-4130-9745-7f0a29a40df4",
        "text": "Кему ретімен (DESC)"
      },
      {
        "id": "2b395333-dd35-486b-8c15-1e9b4a66a5c2",
        "text": "Бастапқы қосылған ретімен"
      },
      {
        "id": "adc78636-5069-42fe-a8fd-7efa3fe61754",
        "text": "Кездейсоқ ретпен"
      },
      {
        "id": "7211b3c4-9863-4b9b-b76d-d52c0ef18778",
        "text": "date_column.addDays(5)"
      },
      {
        "id": "cc1e4393-4c54-4d05-b1b2-5e8ebb97cbeb",
        "text": "COUNT(*) тек бірінші бағанды есептейді"
      },
      {
        "id": "6e833ab1-5305-428e-98d4-c8daa7a267c1",
        "text": "BEGIN AT"
      },
      {
        "id": "be681bae-97d1-4533-8897-94480b7d2f1e",
        "text": "SHOW DATABASE"
      }
    ],
    "correctOptionIds": [
      "352e25d2-c8f8-4714-9b8e-f08624e630ab"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "99b1159f-b8a6-4b2d-98b3-09fdf166057a",
    "subjectId": "db",
    "text": "SQL-де сұраныстың орындалу жоспарын (Execution Plan) көру үшін қандай команда қолданылады?",
    "options": [
      {
        "id": "2b2270fd-8ba8-40f8-870d-a71cbe91f6aa",
        "text": "EXPLAIN"
      },
      {
        "id": "bc9f0542-ce8d-4417-a11c-e26c0707b750",
        "text": "PLAN"
      },
      {
        "id": "139b10cf-ecd3-4b7d-a0c7-d106f27aaba4",
        "text": "SHOW PATH"
      },
      {
        "id": "f6136cc9-bc4f-4557-8063-1eb4c0169bdf",
        "text": "ANALYZE PLAN"
      },
      {
        "id": "f5202ec1-aa92-4871-97ea-01f859152ccd",
        "text": "Кестедегі барлық жазбаларды тез жояды"
      },
      {
        "id": "e5d7f920-c9df-4eb2-b7f3-509f981dc1be",
        "text": "Жаңа деректер типін құру үшін"
      },
      {
        "id": "5098fc82-79b3-4ea4-94fc-fd8317d5271c",
        "text": "Нәтижелерді біріктіру"
      },
      {
        "id": "83c5485c-8f34-41ff-a34f-7c20343f7290",
        "text": "NOT BETWEEN"
      }
    ],
    "correctOptionIds": [
      "2b2270fd-8ba8-40f8-870d-a71cbe91f6aa"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "70f14443-496a-4018-9a0d-5e03a25c5175",
    "subjectId": "db",
    "text": "EXPLAIN ANALYZE командасы (PostgreSQL-де) EXPLAIN-нен немен ерекшеленеді?",
    "options": [
      {
        "id": "fc4cd0f1-4f22-4da1-8c68-f855fe85df83",
        "text": "Сұранысты іс жүзінде орындап, нақты уақыт көрсеткіштерін де қоса көрсетеді"
      },
      {
        "id": "1247aad0-14d2-4a1d-8cb6-24d9cf5e4bf3",
        "text": "Тек қана қателерді тексереді"
      },
      {
        "id": "23069092-b185-4474-b08a-dfe6c524b5fd",
        "text": "Нәтижені файлға жазады"
      },
      {
        "id": "dc5a46f8-5b29-49aa-a617-eb9193d385a1",
        "text": "Сұраныстың жылдамдығын екі есеге оңтайландырады"
      },
      {
        "id": "792be6df-36f5-4aa4-ab7e-cbc8d89b1e7e",
        "text": "SYSTEM_USER()"
      },
      {
        "id": "75d0429f-fcb3-4ecb-a884-44515aef1298",
        "text": "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        "id": "24e151d2-30ef-4fc0-b6e8-dece52d200fd",
        "text": "Барлық нәтижелер"
      },
      {
        "id": "3153ba67-9762-4337-bf9c-7491bb5b5fca",
        "text": "Кесте құрылымын өзгертеді (баған қосу, жою)"
      }
    ],
    "correctOptionIds": [
      "fc4cd0f1-4f22-4da1-8c68-f855fe85df83"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "d93215d2-3fd0-4607-9bf7-bbad39f48bb0",
    "subjectId": "db",
    "text": "SQL-де SELECT 'Hello' || ' ' || 'World'; сұранысының нәтижесі не болады?",
    "options": [
      {
        "id": "53dc993b-1e59-450c-aa08-2fcba6c7c6fc",
        "text": "'Hello World'"
      },
      {
        "id": "cf7413be-27b4-4254-84b6-a8c468025dd2",
        "text": "TRUE"
      },
      {
        "id": "4ea33de2-6813-4e8c-a6f9-3503f6184d2a",
        "text": "Қате (Syntax Error)"
      },
      {
        "id": "183b01fc-2411-47d2-aadb-0c59504994f9",
        "text": "'Hello||||World'"
      },
      {
        "id": "52b96be7-8c57-41b8-bd62-25c9088b075f",
        "text": "SUM_STRINGS()"
      },
      {
        "id": "f95b0c13-1e1c-49ce-92b9-f66bea3d1357",
        "text": "Барлық жазбаларды қайтарады"
      },
      {
        "id": "b88298c8-83f6-4786-9243-f320ec1cabda",
        "text": "'Data'"
      },
      {
        "id": "20a90c00-a8b3-48e6-bcfc-b491c8f2e35c",
        "text": "ADD_DATE(date_column, 5)"
      }
    ],
    "correctOptionIds": [
      "53dc993b-1e59-450c-aa08-2fcba6c7c6fc"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "2eda0c9c-95d2-4d70-9844-3d18ec64f320",
    "subjectId": "db",
    "text": "REPLACE('Database', 'data', 'base') функциясы не істейді (регистрді ескерсек)?",
    "options": [
      {
        "id": "ca46143d-2a75-4938-a79b-dee60521d309",
        "text": "'Database' (өзгермейді, себебі ізделетін шаблон регистрге сезімтал)"
      },
      {
        "id": "786c226b-7609-4f12-8034-ddca1d60e9b1",
        "text": "'basebase'"
      },
      {
        "id": "c85c2eae-6bac-4552-b17f-795f5a935cca",
        "text": "'base'"
      },
      {
        "id": "33553126-7001-42cc-88e1-fc5b8c7b3f67",
        "text": "'Databasebase'"
      },
      {
        "id": "218dc92c-c845-410a-850b-15ce82e941d6",
        "text": "Тек қана HAVING орындалады"
      },
      {
        "id": "588df40c-386d-4ce5-b5ac-acdffd810754",
        "text": "MINUS немесе EXCEPT"
      },
      {
        "id": "f362e66d-ba6a-4c8a-bd38-af2fe26f0ce0",
        "text": "Деректерді топтау"
      },
      {
        "id": "e9cc78a3-e40a-48aa-83c4-03643b75e53b",
        "text": "NOT_RANGE"
      }
    ],
    "correctOptionIds": [
      "ca46143d-2a75-4938-a79b-dee60521d309"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "33ff375a-1d2b-4af7-94d8-8957125bb2ef",
    "subjectId": "db",
    "text": "ROUND(123.4567, 2) функциясының нәтижесі қандай болады?",
    "options": [
      {
        "id": "3ec2a973-d34b-4808-8679-2b40ffcad763",
        "text": "123.46"
      },
      {
        "id": "01d32cc1-caa4-4d2e-910f-a5eb10345588",
        "text": "123.45"
      },
      {
        "id": "62dbc45f-cba5-498a-869a-786d55fcd5d0",
        "text": "123"
      },
      {
        "id": "f4c120e5-6187-4390-b5d0-352dec864105",
        "text": "123.457"
      },
      {
        "id": "fb95bcdc-6386-463f-b312-b2e3a481aefa",
        "text": "Екі мәннің бірі NULL болса, қате шығарады"
      },
      {
        "id": "08564e7e-be6d-460a-8812-580de28e9d88",
        "text": "ABS()"
      },
      {
        "id": "4e5ae283-99a8-4a07-be3f-65e9c82e7caa",
        "text": "Топтайды"
      },
      {
        "id": "4d884e95-cf70-4b5a-8195-447d9788f2e4",
        "text": "CHAR_COUNT()"
      }
    ],
    "correctOptionIds": [
      "3ec2a973-d34b-4808-8679-2b40ffcad763"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "25cb17c8-beb7-4e4f-b300-8d2a7513cc8b",
    "subjectId": "db",
    "text": "TRUNC(123.4567, 2) немесе TRUNCATE(123.4567, 2) функциясы не істейді?",
    "options": [
      {
        "id": "fcc231f4-3b4b-4165-91fe-27612b1928ac",
        "text": "Санды дөңгелектемей, үтірден кейінгі 2 цифрдан артығын қиып тастайды (123.45)"
      },
      {
        "id": "b4ea9b1a-5f27-4166-9e79-15f289d2f956",
        "text": "Санды ең жақын бүтін санға дейін дөңгелектейді"
      },
      {
        "id": "703de1d0-fd8a-49e0-adc9-a3a7793b67aa",
        "text": "Нәтижені бүтін санға айналдырады"
      },
      {
        "id": "bfa32d56-b1b1-4abb-a1ae-8790d86a8b53",
        "text": "Қате тудырады"
      },
      {
        "id": "6796d389-dbd8-4b8a-9ef7-06f0c7e2b1ac",
        "text": "Сұраныстың жылдамдығын екі есеге оңтайландырады"
      },
      {
        "id": "b84e7c7f-e5d7-48ae-a8cd-dea46881ebab",
        "text": "Олар бірдей нәтиже береді"
      },
      {
        "id": "f1500fbd-db59-4185-b8a9-68179874561b",
        "text": "WIDTH()"
      },
      {
        "id": "694a53b4-f822-432b-9216-f31d033496c2",
        "text": "Шарттардың ешқайсысы орындалмаса орындалады"
      }
    ],
    "correctOptionIds": [
      "fcc231f4-3b4b-4165-91fe-27612b1928ac"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "b165588b-bcb7-46a4-86d6-5e318531f9c5",
    "subjectId": "db",
    "text": "SQL-де математикалық абсолют мәнді (модуль) табу функциясы қандай?",
    "options": [
      {
        "id": "40c3572e-cdee-458c-8bf3-589a8d67018b",
        "text": "ABS()"
      },
      {
        "id": "d4d2dd4b-1c60-4132-a5aa-6073b78b229c",
        "text": "MOD()"
      },
      {
        "id": "873cf168-b462-4910-a103-c2d8dd93ce53",
        "text": "ABSVAL()"
      },
      {
        "id": "361e959e-7e27-4cbd-af25-2b68a6aff338",
        "text": "ABSOLUTE()"
      },
      {
        "id": "7509f91e-5193-45ff-8bd8-06b9734d012f",
        "text": "Деректер жояды"
      },
      {
        "id": "c0dc1402-df5d-468a-91dc-7fd31742ad4b",
        "text": "Екі шарт та бірдей TRUE болғанда ғана жол таңдалады"
      },
      {
        "id": "6859ad5b-b5a5-443e-894c-4efcc4c20e34",
        "text": "Сұраныстың жылдамдығын екі есеге оңтайландырады"
      },
      {
        "id": "71be9dae-4240-4cbd-9aba-6e507d3ef031",
        "text": "Деректерді топтастыру"
      }
    ],
    "correctOptionIds": [
      "40c3572e-cdee-458c-8bf3-589a8d67018b"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "d362aa37-7e65-4968-bde7-33c0a1d9ab0d",
    "subjectId": "db",
    "text": "Санның квадрат түбірін табу үшін қандай математикалық функция қолданылады?",
    "options": [
      {
        "id": "b0854743-5eda-4310-8c62-f6144aaa79fc",
        "text": "SQRT()"
      },
      {
        "id": "f9a5a6d1-deda-44f8-81ea-6b8e0df99597",
        "text": "SQ()"
      },
      {
        "id": "39420836-6d1d-4b98-b7e9-8253da6beb37",
        "text": "ROOT()"
      },
      {
        "id": "759ce798-68b6-44e6-a6a8-b251b00e2e30",
        "text": "POWER()"
      },
      {
        "id": "0a028c95-9cc3-44e4-b645-d0cb1a88be27",
        "text": "ASC"
      },
      {
        "id": "2746128a-1b1a-4b90-b500-d310da1045f0",
        "text": "LTRIM()"
      },
      {
        "id": "30708905-b9b5-4291-8e5f-ef4a20b437d5",
        "text": "EXTRACT() немесе DATE_PART()"
      },
      {
        "id": "14da5f0d-4cda-48a3-ae11-18c008000533",
        "text": "Өсу ретімен сұрыптау"
      }
    ],
    "correctOptionIds": [
      "b0854743-5eda-4310-8c62-f6144aaa79fc"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "c3e7b5fb-7f1b-4f73-b57a-b35e5ede5349",
    "subjectId": "db",
    "text": "Мәтіннің әрбір сөзінің алғашқы әріптерін ғана бас әріппен жазатын функция қандай?",
    "options": [
      {
        "id": "3349929e-4f4d-474f-90c1-f6975fc8fef5",
        "text": "INITCAP()"
      },
      {
        "id": "d78cfe74-dd15-4a86-ae45-5757d7b85ee9",
        "text": "UPPER()"
      },
      {
        "id": "989276b5-bc73-45ec-a59c-a80ed7932046",
        "text": "CAPITALIZE()"
      },
      {
        "id": "023343d1-fc3e-43cc-82ae-0ab8d236601c",
        "text": "TITLE()"
      },
      {
        "id": "472b3124-b410-4f36-a42c-8193ded89b47",
        "text": "LIKE NOT"
      },
      {
        "id": "a53800e2-6434-4360-98b7-8f6a9f7f4b86",
        "text": "Айырмашылық жоқ"
      },
      {
        "id": "db400a15-ef17-4c04-97c4-abd00aa7e3e6",
        "text": "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        "id": "cce5e987-e694-4721-94e7-e09116f89eaa",
        "text": "Нәтижелерді біріктіру"
      }
    ],
    "correctOptionIds": [
      "3349929e-4f4d-474f-90c1-f6975fc8fef5"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "bd1b5182-40e1-4a5a-9f85-933c54c2aaeb",
    "subjectId": "db",
    "text": "SQL-де қазіргі жүйелік пайдаланушының атын білу үшін қандай функция қолданылады?",
    "options": [
      {
        "id": "53bbb996-f9b7-48c1-b0e9-d493f4568391",
        "text": "USER немесе CURRENT_USER"
      },
      {
        "id": "791c4738-2f27-4afa-8959-9bf75c374453",
        "text": "WHOAMI"
      },
      {
        "id": "94a8e7f9-f419-480f-bdd3-3a64ccd7f9d0",
        "text": "GETUSER()"
      },
      {
        "id": "d137968b-2603-43e7-a432-628a147bc5fc",
        "text": "SYSTEM_USER()"
      },
      {
        "id": "fd1b6a00-84e8-492c-80e4-a24dbf30b2bf",
        "text": "SMALL()"
      },
      {
        "id": "b572328e-f488-4464-94e7-b28e41071334",
        "text": "Жалпы саны 15 жолды қайтарады"
      },
      {
        "id": "9949b37a-baea-4ad4-9e4a-9fb02d433ffb",
        "text": "Екі кестеде де қосылатын бағанның аты бірдей болған жағдайда"
      },
      {
        "id": "a0982ec2-7025-4aeb-9dbb-7b050ecd6202",
        "text": "Шарттардың ешқайсысы орындалмаса орындалады"
      }
    ],
    "correctOptionIds": [
      "53bbb996-f9b7-48c1-b0e9-d493f4568391"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "171ae03a-f301-491e-bd27-57ecb32b6915",
    "subjectId": "db",
    "text": "Дерекқордың атын алу үшін қандай функция қолданылады?",
    "options": [
      {
        "id": "7dfccc48-0a1b-43cb-8d57-a7461ea4402e",
        "text": "DATABASE() немесе CURRENT_DATABASE()"
      },
      {
        "id": "e17a5672-1704-45d6-899c-ca05586a05e8",
        "text": "DBNAME()"
      },
      {
        "id": "748bc1d6-8c2d-499b-8a86-8ed9bfee976f",
        "text": "SHOW DATABASE"
      },
      {
        "id": "2b2a6224-bc3c-4e60-ad89-307c3419fc6d",
        "text": "GET_DB()"
      },
      {
        "id": "cb2e3214-4666-4c72-90cf-5b3a91be0d51",
        "text": "GROUP BY"
      },
      {
        "id": "45873a14-c786-4b70-b46b-d94233a32f8d",
        "text": "DIFFERENCE"
      },
      {
        "id": "349dbbf3-6647-4aed-af4c-2addd79fbe38",
        "text": "Бос мәндердің орнына автоматты жазба қосу"
      },
      {
        "id": "55765628-be71-4d88-b958-7fbb6f592e27",
        "text": "Кестенің атын өзгерту үшін"
      }
    ],
    "correctOptionIds": [
      "7dfccc48-0a1b-43cb-8d57-a7461ea4402e"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "96100c42-7ba1-47fd-b974-f49b4f45d18e",
    "subjectId": "db",
    "text": "PostgreSQL-де жолдарды массивке біріктіретін агрегаттық функция қандай?",
    "options": [
      {
        "id": "04b66af9-a402-4607-9cdc-adaeaa323605",
        "text": "ARRAY_AGG()"
      },
      {
        "id": "455f298b-66f2-4fc3-82c6-22fa76ea35ed",
        "text": "TO_ARRAY()"
      },
      {
        "id": "e6a8fa2f-7db7-4c0f-b572-963cb3b3a8f1",
        "text": "ARR_MERGE()"
      },
      {
        "id": "9165dd3f-d41e-4281-8bb3-bb647afc1038",
        "text": "GROUP_ARRAY()"
      },
      {
        "id": "240929e5-3724-401c-b1fc-0fea5374da06",
        "text": "'Hello World'"
      },
      {
        "id": "06abef6f-d4b7-49bd-8f92-e3869670b759",
        "text": "'base'"
      },
      {
        "id": "330a0751-e5fe-469f-9207-66393e534b40",
        "text": "'Database' (өзгермейді, себебі ізделетін шаблон регистрге сезімтал)"
      },
      {
        "id": "b09330b9-cb7e-46b2-ba15-d2a05fcd3b24",
        "text": "Non-Equi-Join"
      }
    ],
    "correctOptionIds": [
      "04b66af9-a402-4607-9cdc-adaeaa323605"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "ab4f6629-0268-4001-a715-3a89f91eb8ab",
    "subjectId": "db",
    "text": "Баған мәндерін үтір арқылы бір жолға біріктіретін агрегаттық функция қандай (standard немесе MySQL)?",
    "options": [
      {
        "id": "ce0ef6d8-51e3-4666-8ccc-961e9f0c9e8a",
        "text": "GROUP_CONCAT() немесе STRING_AGG()"
      },
      {
        "id": "744c0ab9-f612-48a8-9786-aca3bf94af57",
        "text": "CONCAT_WS()"
      },
      {
        "id": "e3cc03c4-dfd4-44d4-a1d7-84bcc69d2c07",
        "text": "JOIN_STRINGS()"
      },
      {
        "id": "c13a3b65-ea60-4bb7-b46d-31ad9bcdc0bf",
        "text": "SUM_STRINGS()"
      },
      {
        "id": "b8d92827-0ae9-4a3f-aadf-60b5f53cf68e",
        "text": "OUTSIDE"
      },
      {
        "id": "1ecf1b19-c5b0-4c04-8e87-47b9bd4d804e",
        "text": "'Hello||||World'"
      },
      {
        "id": "6b74e09d-b6a9-40e2-861f-7226e741ad88",
        "text": "Кему ретімен сұрыптау"
      },
      {
        "id": "df248bb4-c108-4917-ba2d-eee0151515a3",
        "text": "Алдымен Lastname бойынша сұрыпталады, егер олар тең болса, Firstname бойынша сұрыпталады"
      }
    ],
    "correctOptionIds": [
      "ce0ef6d8-51e3-4666-8ccc-961e9f0c9e8a"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "4dcc7282-5c0a-4aad-a6bd-7d96e01670ed",
    "subjectId": "db",
    "text": "SQL-де LIKE операторында теріске шығару қалай жазылады?",
    "options": [
      {
        "id": "2e7d9257-d97a-42f6-877b-0c805047911e",
        "text": "NOT LIKE"
      },
      {
        "id": "51825c3b-3fe3-4452-ab8b-0f1a584646e7",
        "text": "LIKE NOT"
      },
      {
        "id": "985555b8-1448-4a2c-b571-f4e4baab7634",
        "text": "UNLIKE"
      },
      {
        "id": "e39d13e2-4d9a-43d2-bf24-f89f4ae5e3fd",
        "text": "NOT_LIKE()"
      },
      {
        "id": "5da5825c-6dbb-41f9-a5c4-d0c10bf0aa47",
        "text": "SYSTEM_USER()"
      },
      {
        "id": "775b6b8d-5cb3-4ce1-97c4-3854815d88c8",
        "text": "Кез келген бағанды шектеусіз жазуға болады"
      },
      {
        "id": "079fb73b-353c-4351-b583-92b37ed171b6",
        "text": "'basebase'"
      },
      {
        "id": "69b1304f-8d25-4574-8e0e-741c883b8620",
        "text": "Кестелердегі жолдар саны бірдей болуы тиіс"
      }
    ],
    "correctOptionIds": [
      "2e7d9257-d97a-42f6-877b-0c805047911e"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "76ce9e74-af59-406f-af5f-5e60b19a1256",
    "subjectId": "db",
    "text": "Тізімде жоқ мәндерді іздеу үшін IN операторының терістеуі қалай жазылады?",
    "options": [
      {
        "id": "2fe1be8e-80b0-489b-8d89-863d01f6eee3",
        "text": "NOT IN"
      },
      {
        "id": "d3007b60-edab-4bdb-a43e-0bf9f576fd0e",
        "text": "IN NOT"
      },
      {
        "id": "7227cb9d-fff8-4023-9b38-9cfe754609c2",
        "text": "OUT OF"
      },
      {
        "id": "8f7e4743-9da7-43c8-9221-f5ed0f084b3b",
        "text": "EXCLUDE"
      },
      {
        "id": "f0907d3e-22a3-494d-9478-4f358de4f604",
        "text": "UNION тек сандарды біріктіреді, ал UNION ALL мәтіндерді де біріктіреді"
      },
      {
        "id": "44c836b5-44df-46ad-873f-4bf6d0918690",
        "text": "Ортақ бөлікті"
      },
      {
        "id": "4f597f28-7ff8-4064-b167-864de7802b00",
        "text": "Сұраныстың жылдамдығын екі есеге оңтайландырады"
      },
      {
        "id": "d8f69bb6-8b85-4de8-894b-2d8ec019115c",
        "text": "Сол жақтың барлығы + сәйкестіктер"
      }
    ],
    "correctOptionIds": [
      "2fe1be8e-80b0-489b-8d89-863d01f6eee3"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "53c236cf-7116-425e-ace8-b78db5168df6",
    "subjectId": "db",
    "text": "Диапазоннан тыс мәндерді табу үшін BETWEEN операторының терістеуі қалай жазылады?",
    "options": [
      {
        "id": "0f1118f1-cc62-4986-bd2c-5fe001dc87f6",
        "text": "NOT BETWEEN"
      },
      {
        "id": "52e4c458-e3e7-4d12-849f-34b481a1e66b",
        "text": "BETWEEN NOT"
      },
      {
        "id": "da7f8724-34cf-45f9-afa2-ce71ac1511f4",
        "text": "OUTSIDE"
      },
      {
        "id": "0a4b94de-c3e7-401e-a014-cff534410a2e",
        "text": "NOT_RANGE"
      },
      {
        "id": "504950e1-c658-4ebb-a797-5a0cc8fd72c4",
        "text": "Non-Equi-Join"
      },
      {
        "id": "53ec116c-09eb-49f3-b7aa-a84972fbdc59",
        "text": "Санды ең жақын бүтін санға дейін дөңгелектейді"
      },
      {
        "id": "0355ef44-25b0-4901-8471-a820e510992f",
        "text": "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        "id": "e793f4ad-a574-4a1b-847e-f472e31ee817",
        "text": "Кесте құрылымын өзгертеді (баған қосу, жою)"
      }
    ],
    "correctOptionIds": [
      "0f1118f1-cc62-4986-bd2c-5fe001dc87f6"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "f4d7cce5-9ae6-4493-8896-44ce955704a0",
    "subjectId": "db",
    "text": "Екі кестені қосу барысында сәйкестік шартына тек '=' операторы ғана қолданылса, мұндай қосылу қалай аталады?",
    "options": [
      {
        "id": "d18832e3-1283-4cba-96c4-d5b9f3864be7",
        "text": "Equi-Join"
      },
      {
        "id": "10a76ab8-20ff-44f5-8bbd-f03721a2ac7d",
        "text": "Non-Equi-Join"
      },
      {
        "id": "3e3b00f7-fc91-48fb-ab4e-c9951eff52ea",
        "text": "Cross-Join"
      },
      {
        "id": "028e1f9d-6524-4724-81b8-8a53561ec3c8",
        "text": "Theta-Join"
      },
      {
        "id": "4e68bf79-8af2-4d7f-9c06-14957d546895",
        "text": "NOT_LIKE()"
      },
      {
        "id": "4bd7628c-169a-4c39-8f3a-821c7645ffc1",
        "text": "FALSE"
      },
      {
        "id": "972ed7e6-8486-4269-aa15-c2775ceff955",
        "text": "Деректерді жаңартады"
      },
      {
        "id": "7f1fbea2-da56-4a65-8946-9cfe0cb202ec",
        "text": "Алғашқы 10 жолды өткізіп жіберіп, келесі 5 жолды қайтарады"
      }
    ],
    "correctOptionIds": [
      "d18832e3-1283-4cba-96c4-d5b9f3864be7"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "17bdf129-8d2b-4a1e-b2ed-b509c3b4c8bb",
    "subjectId": "db",
    "text": "Сәйкестік шартында '=', '>', '<' операторлары қолданылатын жалпы қосылу түрі қалай аталады?",
    "options": [
      {
        "id": "843793cd-220f-433c-a265-59bfe3fec752",
        "text": "Theta-Join"
      },
      {
        "id": "8abc717c-9fa8-4f0b-bd58-f36b71aa8058",
        "text": "Equi-Join"
      },
      {
        "id": "5daf0902-06cb-46be-88a6-0d7dc15409f3",
        "text": "Natural-Join"
      },
      {
        "id": "969b65d8-fe47-46bd-aba4-ff4aaa41b24d",
        "text": "Self-Join"
      },
      {
        "id": "628a6f72-8a7f-4be6-96f3-341156385a06",
        "text": "CONCAT функциясы немесе || операторы"
      },
      {
        "id": "84b5b5c7-a0a4-416d-a620-2416486cd107",
        "text": "SYSTEM_USER()"
      },
      {
        "id": "c0ce3d9b-a46d-4b63-adf4-4c3d41c82466",
        "text": "NULL тексереді"
      },
      {
        "id": "5c0a7b9b-4c92-4dec-8bf8-d3cad3165947",
        "text": "Алдымен HAVING орындалады"
      }
    ],
    "correctOptionIds": [
      "843793cd-220f-433c-a265-59bfe3fec752"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "ec9f7383-1154-4030-8b9c-f1a5351f27fc",
    "subjectId": "db",
    "text": "COALESCE функциясы аргументтерінің барлығы NULL болса не қайтарады?",
    "options": [
      {
        "id": "85b6bac1-c9dc-46c8-9133-7e7531ad49e3",
        "text": "NULL"
      },
      {
        "id": "8c2b4c57-1ab0-40e1-9804-196b3e46ed61",
        "text": "Нөл (0)"
      },
      {
        "id": "f557bf4b-3883-4da5-8fe8-dc361718c7bf",
        "text": "Бос жол"
      },
      {
        "id": "9b53ecb5-ddd7-42c1-a955-f09211bd0c89",
        "text": "Қате (Error)"
      },
      {
        "id": "cc030d9d-e3d1-4a76-b7c7-ad104d6c6f0c",
        "text": "Олардың орташа мәні бойынша сұрыпталады"
      },
      {
        "id": "e7f8e289-4055-462f-8437-7c59379260d2",
        "text": "ORDER BY"
      },
      {
        "id": "c077c1b8-9236-4715-a3dd-1ef42874a09b",
        "text": "Деректерді біріктіру"
      },
      {
        "id": "2009a8e1-777a-4cfc-861f-0e3ddb2c93b3",
        "text": "GETDATE()"
      }
    ],
    "correctOptionIds": [
      "85b6bac1-c9dc-46c8-9133-7e7531ad49e3"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "e4dcc76a-b06d-4e80-9cd6-9515bbe13aea",
    "subjectId": "db",
    "text": "MySQL-де уақытқа немесе күнге белгілі бір мерзімді қосу үшін қандай функция қолданылады?",
    "options": [
      {
        "id": "87b53af1-4585-4f28-974f-18880e23c5a9",
        "text": "DATE_ADD()"
      },
      {
        "id": "2d34a11e-8864-4c42-afb5-25a2bd130662",
        "text": "ADD_DAYS()"
      },
      {
        "id": "30808c4e-0fbd-494e-a101-e412e053e204",
        "text": "DATEADD()"
      },
      {
        "id": "caa1a9e0-654f-41bc-8354-35320017a40b",
        "text": "PLUS_DATE()"
      },
      {
        "id": "eb921615-0392-4e4d-b56c-498688cb8c8b",
        "text": "Тек Lastname бойынша ғана сұрыпталады, Firstname еленбейді"
      },
      {
        "id": "9ea03ca9-4418-4f38-8ecc-8dfd74877384",
        "text": "Жаңа деректерді кестеге қосу үшін"
      },
      {
        "id": "a940beeb-fe37-4878-8006-2c21a516ff77",
        "text": "TRUE"
      },
      {
        "id": "f8a7dda8-5462-49fc-8854-76798a463c55",
        "text": "LIKE NOT"
      }
    ],
    "correctOptionIds": [
      "87b53af1-4585-4f28-974f-18880e23c5a9"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "b6e6147c-d04c-477e-a538-3167e8d4065e",
    "subjectId": "db",
    "text": "PostgreSQL-де датаға 5 күн қосу үшін қандай синтаксис жиі қолданылады?",
    "options": [
      {
        "id": "0870590c-69b2-47e6-b94e-99e4a7d9c95a",
        "text": "date_column + INTERVAL '5 days'"
      },
      {
        "id": "6aae4648-29b6-4cb8-a4a5-a015b541c151",
        "text": "ADD_DATE(date_column, 5)"
      },
      {
        "id": "6d7ef133-1357-4cdb-b17b-52dd82433304",
        "text": "date_column.addDays(5)"
      },
      {
        "id": "8292a7b6-e689-453e-9468-eb18b429c056",
        "text": "date_column + 5"
      },
      {
        "id": "ffc26b99-1163-4759-a67c-d38ae5044837",
        "text": "WHERE column_name NOT NULL"
      },
      {
        "id": "81145740-42d9-4536-aec3-719ed6e2d6c1",
        "text": "OUT OF"
      },
      {
        "id": "14d3f65a-ed66-41fb-b5a2-ad70bbdb4172",
        "text": "SUM_STRINGS()"
      },
      {
        "id": "2b36dde6-deb2-4a6b-a7de-f3c27b33bb62",
        "text": "Барлық нәтижелер"
      }
    ],
    "correctOptionIds": [
      "0870590c-69b2-47e6-b94e-99e4a7d9c95a"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "9204feeb-1406-4e35-b408-0d2e1569c629",
    "subjectId": "db",
    "text": "Екі күннің айырмашылығын (күн санын) есептеу үшін қандай функция қолданылады (мысалы, SQL Server-де)?",
    "options": [
      {
        "id": "3c16381a-9e78-4fcc-b2c1-9aa1faf62b22",
        "text": "DATEDIFF()"
      },
      {
        "id": "efb4f144-7ffd-4fcc-bc89-d0e98ddc4df9",
        "text": "DATESUB()"
      },
      {
        "id": "d63c0ca9-4066-4fd6-bb58-068d19d3f5da",
        "text": "DIFF_DATE()"
      },
      {
        "id": "07f7069a-a24a-439e-9946-cc1440a03b16",
        "text": "DATE_INTERVAL()"
      },
      {
        "id": "d7c20f76-7ab1-41a6-b6ae-20be75030404",
        "text": "Кездейсоқ реттеу"
      },
      {
        "id": "36227e4b-91c3-41eb-8ad9-2716e5f23304",
        "text": "Мәннің нөлге тең екенін тексереді"
      },
      {
        "id": "f6e1f934-7efd-42a0-adcb-1688f04c7777",
        "text": "'Dat'"
      },
      {
        "id": "10d3c5f2-2b2c-462b-add0-63c4fb332e17",
        "text": "Жазбалар санын есептейді"
      }
    ],
    "correctOptionIds": [
      "3c16381a-9e78-4fcc-b2c1-9aa1faf62b22"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  },
  {
    "id": "f827c797-003d-4aeb-b194-e63effb1a672",
    "subjectId": "db",
    "text": "SQL-де кездейсоқ сан алу үшін қандай функция қолданылады?",
    "options": [
      {
        "id": "eec26e2f-599e-4024-b1ab-06b2e09ecb99",
        "text": "RAND() немесе RANDOM()"
      },
      {
        "id": "bcfda776-d41a-4cc2-bb86-204316b42bc2",
        "text": "RANDOMIZE()"
      },
      {
        "id": "9069e4ff-9c91-496c-8e5d-36ea96bfc279",
        "text": "GET_RAND()"
      },
      {
        "id": "50aae804-2817-4958-a518-e3fb2a4089cf",
        "text": "SYS_GUID()"
      },
      {
        "id": "fe3c8d4f-3320-4efc-87d6-a8d72675df59",
        "text": "Олардың орташа мәні бойынша сұрыпталады"
      },
      {
        "id": "63cd58db-f297-4407-87b5-ba3d2745ea60",
        "text": "Equi-Join"
      },
      {
        "id": "aacff2de-658e-4f68-8d86-8c7c383a6f3f",
        "text": "Деректерді топтастыру"
      },
      {
        "id": "c2131759-dc13-4e92-a1e1-a77fec41e65e",
        "text": "Ең кіші мәнді табады"
      }
    ],
    "correctOptionIds": [
      "eec26e2f-599e-4024-b1ab-06b2e09ecb99"
    ],
    "type": "MULTIPLE",
    "topic": "SQL сұраныстары",
    "difficulty": "medium"
  }
] as Question[];
