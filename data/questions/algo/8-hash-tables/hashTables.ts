import { Question } from '../../../../types';

// algo / Хэш кестелері және хэш функциялары
export const algo8HashTablesQuestions = [
  {
    "id": "8ae9dc50-f2c7-48b9-ac62-d8b02789e7fe",
    "subjectId": "algo",
    "text": "Хэш-кестеде соқтығысуды (collision) шешудің \"бөлек тізбектер\" (separate chaining) әдісі дегеніміз не?",
    "options": [
      {
        "id": "bf15bfc2-c5b7-4580-9fb5-b87e5b29f03a",
        "text": "Әрбір хэш ұяшығына байланысқан тізімді (linked list) бекіту"
      },
      {
        "id": "ac985dce-7fe8-4ba7-8c5d-2b05abd68fa1",
        "text": "Басқа бос ұяшыққа сызықтық түрде ауысу"
      },
      {
        "id": "fec55872-3401-4a2b-b777-e6653d3c8a40",
        "text": "Кестенің өлшемін екі есеге үлкейту"
      },
      {
        "id": "0fdbf2bd-3a67-400d-8cd2-d220785548c0",
        "text": "Екінші реттік хэш функциясын қолдану"
      }
    ],
    "correctOptionIds": [
      "bf15bfc2-c5b7-4580-9fb5-b87e5b29f03a"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "0f950e80-c2c0-4ba4-a739-576c6ddf8749",
    "subjectId": "algo",
    "text": "Хэш-кестелерде ашық адрестеу (open addressing) кезінде қолданылатын сызықтық зондтау (linear probing) қалай жұмыс істейді?",
    "options": [
      {
        "id": "3ca2db4b-2613-4e4a-8a71-db6fc9f3cf17",
        "text": "Соқтығыс болған кезде келесі бос ұяшықты тізбектей іздейді (i+1, i+2...)"
      },
      {
        "id": "d497fc3d-5e71-4d92-9f34-41d17d13800e",
        "text": "Соқтығыс болған кезде квадраттық қадаммен іздейді (i+1^2, i+2^2...)"
      },
      {
        "id": "b68e8d9e-5551-4ff9-940a-a1edcc7347ff",
        "text": "Элементті тізімнің басына қосады"
      },
      {
        "id": "4f82a6a0-dc9c-469a-9b10-b58e11ff7fd6",
        "text": "Жаңа хэш-кесте жасайды"
      }
    ],
    "correctOptionIds": [
      "3ca2db4b-2613-4e4a-8a71-db6fc9f3cf17"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "dbddcd02-d568-42e7-a0b4-ec6f49bb8bc9",
    "subjectId": "algo",
    "text": "Хэш функциясының басты мақсаты не?",
    "options": [
      {
        "id": "0b2e40b1-1ac4-4de0-a13f-a0a255d3be0b",
        "text": "Кілттерді кесте индекстеріне біркелкі таратып сәйкестендіру"
      },
      {
        "id": "48e18773-a6da-4684-be07-1655036e4a2b",
        "text": "Деректерді шифрлау және жасыру"
      },
      {
        "id": "225a4203-3b04-4c66-889c-4b10efc894d3",
        "text": "Элементтерді өсу ретімен сұрыптау"
      },
      {
        "id": "4e3246eb-1f9b-48d2-a118-558daf39a913",
        "text": "Жадыны үнемдеу үшін деректерді сығу"
      }
    ],
    "correctOptionIds": [
      "0b2e40b1-1ac4-4de0-a13f-a0a255d3be0b"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "c1c822ea-05b5-4672-8e1e-829be087caf8",
    "subjectId": "algo",
    "text": "Хэш-кестедегі \"жүктеме коэффициенті\" (load factor, α) қалай есептеледі?",
    "options": [
      {
        "id": "08dc0f1f-8c1d-47c3-845e-174a63fc0711",
        "text": "α = n / m (мұндағы n – элементтер саны, m – ұяшықтар саны)"
      },
      {
        "id": "a369e148-64ed-417e-9ad8-8647c6ddd0a7",
        "text": "α = m / n"
      },
      {
        "id": "fb4cb05c-2ab0-4720-93ac-e190c704932d",
        "text": "α = n * m"
      },
      {
        "id": "a1522d61-6c70-4d84-9bfb-3d71df0cfe62",
        "text": "α = log(n) / m"
      }
    ],
    "correctOptionIds": [
      "08dc0f1f-8c1d-47c3-845e-174a63fc0711"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "dfa5de30-3685-475c-9f51-b4825ce29d2c",
    "subjectId": "algo",
    "text": "Тізбек әдісіне негізделген хэш-кестеде DELETE (T[0..m - 1], key) операциясының орташа күрделілігі қандай?",
    "options": [
      {
        "id": "a9ac64c6-49de-4ac8-9103-f6c335bb89be",
        "text": "O(1 + n/m)"
      },
      {
        "id": "d30af45c-cc35-4760-9fa6-1219b02d249c",
        "text": "O(n)"
      },
      {
        "id": "f987a7e7-18bc-43c5-ba70-18bf539cb76e",
        "text": "O(m)"
      },
      {
        "id": "d55a25b3-8009-4e12-9a42-47ab0d3ff0be",
        "text": "O(log n)"
      }
    ],
    "correctOptionIds": [
      "a9ac64c6-49de-4ac8-9103-f6c335bb89be"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "hard"
  },
  {
    "id": "ff115b6f-c5cf-4a13-a31d-a2d4e684f3ae",
    "subjectId": "algo",
    "text": "Қос хэштеу (double hashing) әдісінде соқтығысты шешу үшін қандай формула қолданылады?",
    "options": [
      {
        "id": "336c6c20-d35b-461d-b32a-9fed6cb396ed",
        "text": "h(k, i) = (h1(k) + i * h2(k)) % m"
      },
      {
        "id": "4319700a-a637-423f-af1e-c250656c9e9f",
        "text": "h(k, i) = (h1(k) + i^2) % m"
      },
      {
        "id": "7189a1f0-303a-4394-a7cd-9d817fc30adc",
        "text": "h(k, i) = (h1(k) + i) % m"
      },
      {
        "id": "94742849-05a4-40ab-bb37-e2b6801c2fe3",
        "text": "h(k, i) = (h1(k) * h2(k)) % m"
      }
    ],
    "correctOptionIds": [
      "336c6c20-d35b-461d-b32a-9fed6cb396ed"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "hard"
  },
  {
    "id": "b9df0800-3169-49f3-babc-cbcfea2cec56",
    "subjectId": "algo",
    "text": "Хэш-кестелерде соқтығысуды шешудің \"ашық адрестеу\" (open addressing) тобына жататын әдістер қандай?",
    "options": [
      {
        "id": "110fc6bd-c475-4857-a547-c1edb9e18a7c",
        "text": "Сызықтық зондтау, квадраттық зондтау және қос хэштеу"
      },
      {
        "id": "00ea7e52-9407-46b8-8c5d-5506906e8b7f",
        "text": "Тізбектеу әдісі"
      },
      {
        "id": "034a129b-a237-4919-8d5d-42f3112b6761",
        "text": "Бинарлық іздеу"
      },
      {
        "id": "53c0e35a-186a-4faf-942a-4dac32d60cbc",
        "text": "Тікелей таңдау әдісі"
      }
    ],
    "correctOptionIds": [
      "110fc6bd-c475-4857-a547-c1edb9e18a7c"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "0e891d89-805b-42ab-a508-19fbb8120dab",
    "subjectId": "algo",
    "text": "Хэш-кестелердегі \"біріншілік кластерлену\" (primary clustering) проблемасы қай әдісте жиі кездеседі?",
    "options": [
      {
        "id": "84b6c835-64b5-4ca6-9818-b75bb9d63377",
        "text": "Сызықтық зондтау (linear probing)"
      },
      {
        "id": "cc7649ca-b698-480f-b770-f0c2c5e65cc3",
        "text": "Бөлек тізбектер (separate chaining)"
      },
      {
        "id": "0d7195f7-168e-4d98-8446-f4bf55167c78",
        "text": "Қос хэштеу (double hashing)"
      },
      {
        "id": "8f8ee963-838e-488b-94af-c9a17e4152cb",
        "text": "Кездейсоқ іздеу"
      }
    ],
    "correctOptionIds": [
      "84b6c835-64b5-4ca6-9818-b75bb9d63377"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "067f545b-e8d9-4121-9906-ffcec56ead4a",
    "subjectId": "algo",
    "text": "Керемет хэш функциясы (perfect hash function) дегеніміз не?",
    "options": [
      {
        "id": "aa963e75-b151-40c7-a18e-91975e2ee970",
        "text": "Ешқандай соқтығыс тудырмайтын хэш функциясы"
      },
      {
        "id": "27981d7c-14bd-480f-9627-b1e56ce38e18",
        "text": "Тек сандарды хэштейтін функция"
      },
      {
        "id": "932b6011-78f1-47d5-b9bf-b71a49472938",
        "text": "Ең ұзын хэш шығаратын функция"
      },
      {
        "id": "b3ad2451-5241-4f9c-af5a-4f724bad58b2",
        "text": "Өте тез жұмыс істейтін функция"
      }
    ],
    "correctOptionIds": [
      "aa963e75-b151-40c7-a18e-91975e2ee970"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "ba0719d7-8b0f-4f3e-a79c-cb6d1aaf9a25",
    "subjectId": "algo",
    "text": "Хэш-кестеде соқтығыс (collision) дегеніміз не?",
    "options": [
      {
        "id": "ddb80692-caf6-4b58-9cbf-d4a015001286",
        "text": "Екі түрлі кілттің бірдей хэш мәніне ие болуы"
      },
      {
        "id": "619deae2-8dc0-44b3-ad5d-0ea5d0e9c9b6",
        "text": "Кестенің толып қалуы"
      },
      {
        "id": "ef528afb-beff-49c0-8bea-20765f7e44df",
        "text": "Кестеден элементтің жоғалып кетуі"
      },
      {
        "id": "77c0329b-7aa1-4202-9a3c-c39bfa28e76b",
        "text": "Хэш функциясының қате орындалуы"
      }
    ],
    "correctOptionIds": [
      "ddb80692-caf6-4b58-9cbf-d4a015001286"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "3a728940-bb04-4331-afd9-4fd0c6777f96",
    "subjectId": "algo",
    "text": "Хэш-кестелерде соқтығысты шешудің \"ашық адрестеу\" әдісіндегі квадраттық зондтау (quadratic probing) қадамы қалай есептеледі?",
    "options": [
      {
        "id": "80167588-6f37-4213-aafc-8a668186c54c",
        "text": "h(k, i) = (h'(k) + c1 * i + c2 * i^2) % m"
      },
      {
        "id": "ee8b13da-1f1c-46cd-bc4b-8069644f3435",
        "text": "h(k, i) = (h'(k) + i) % m"
      },
      {
        "id": "7f950af3-e24b-414a-b9cc-a1a56f388ece",
        "text": "h(k, i) = (h1(k) + i * h2(k)) % m"
      },
      {
        "id": "8c83ac8c-3307-4448-9500-dd8c05b336f0",
        "text": "h(k, i) = (h1(k) * i) % m"
      }
    ],
    "correctOptionIds": [
      "80167588-6f37-4213-aafc-8a668186c54c"
    ],
    "type": "SINGLE",
    "topic": "Хэш-кестелер және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "50aaceb9-0efa-43cd-9d5a-29695744071e",
    "subjectId": "algo",
    "text": "Хэш-кестенің жүктеме коэффициенті (load factor) 1-ден үлкен бола ала ма?",
    "options": [
      {
        "id": "9161efce-77a9-4a7b-b3e9-458fa329e392",
        "text": "Иә, тек бөлек тізбектер (separate chaining) әдісінде ғана бола алады"
      },
      {
        "id": "a99516eb-0140-43f4-9d7e-3f82c78d09ec",
        "text": "Жоқ, ешқандай хэш-кестеде мүмкін емес"
      },
      {
        "id": "ebe2701b-57f5-47ca-8db5-ef9f7c804ed5",
        "text": "Иә, тек сызықтық зондтауда ғана мүмкін"
      },
      {
        "id": "ae62704d-2db9-4878-b5f9-8131f17f1368",
        "text": "Жоқ, жүктеме коэффициенті тек 0 мен 1 арасында болады"
      }
    ],
    "correctOptionIds": [
      "9161efce-77a9-4a7b-b3e9-458fa329e392"
    ],
    "type": "SINGLE",
    "topic": "Хэш-кестелер және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "569ea9be-525a-4fed-a0c1-8fb9b8b18b43",
    "subjectId": "algo",
    "text": "Хэш-кестенің өлшемін өзгерту (rehashing) дегеніміз не?",
    "options": [
      {
        "id": "ba53748c-6f45-4edb-a1f9-8456d4e366e3",
        "text": "Кесте толып бара жатқанда жаңа үлкен кесте құрып, барлық кілттерді жаңадан хэштеп көшіру"
      },
      {
        "id": "af05724b-8a80-47bd-b2f2-a037bc6eb801",
        "text": "Хэш функциясын математикалық ауыстыру"
      },
      {
        "id": "faba25ee-daa8-437c-861e-e075da520187",
        "text": "Кестедегі соқтығыстарды жою"
      },
      {
        "id": "7eb9ca16-8746-447a-9400-b68bcca49c16",
        "text": "Кестені толық өшіру"
      }
    ],
    "correctOptionIds": [
      "ba53748c-6f45-4edb-a1f9-8456d4e366e3"
    ],
    "type": "SINGLE",
    "topic": "Хэш-кестелер және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "01e4367e-9428-4a17-aeac-f7a59bb52fb3",
    "subjectId": "algo",
    "text": "Хэш-кестелердің негізгі артықшылығы неде?",
    "options": [
      {
        "id": "1502f378-1f20-46af-8c72-4e4cb158eaad",
        "text": "Іздеу, қосу және жою операцияларының орташа уақыты тұрақты O(1) болуы"
      },
      {
        "id": "3a075b74-3d27-4396-a5a9-931a036d1a92",
        "text": "Элементтерді әрқашан реттелген күйде сақтауы"
      },
      {
        "id": "ff1d6c8e-7640-488d-be54-4549f571be5c",
        "text": "Жадты мүлдем қолданбайтыны"
      },
      {
        "id": "c78c2abe-0e4c-4393-90a9-6e6420bf562b",
        "text": "Бағдарламалаудың қарапайымдылығы"
      }
    ],
    "correctOptionIds": [
      "1502f378-1f20-46af-8c72-4e4cb158eaad"
    ],
    "type": "SINGLE",
    "topic": "Хэш-кестелер және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "dae1c54a-9847-4004-b523-ede509c8bce9",
    "subjectId": "algo",
    "text": "Криптографиялық хэш функцияларының басты қасиетінің бірі — \"бір бағыттылық\" (one-way property) нені білдіреді?",
    "options": [
      {
        "id": "6b6f680b-b3ed-48d1-be40-3505c6dc2aaf",
        "text": "Хэш мәні бойынша бастапқы кілтті кері есептеп табудың іс жүзінде мүмкін еместігін"
      },
      {
        "id": "1a019cac-824c-4a27-be30-41b4d6c57bb3",
        "text": "Хэш мәнінің тек оң сандардан тұратынын"
      },
      {
        "id": "6e583087-485b-4255-ac94-b10b2f2179c0",
        "text": "Хэш функциясының тек бір бағытта сұрыптайтынын"
      },
      {
        "id": "23e74aaa-4a3d-4d22-8226-9900af1a60bb",
        "text": "Функцияның тек бір кіріс мән қабылдайтынын"
      }
    ],
    "correctOptionIds": [
      "6b6f680b-b3ed-48d1-be40-3505c6dc2aaf"
    ],
    "type": "SINGLE",
    "topic": "Хэш-кестелер және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "0ac51a0b-7c9a-4005-94b9-5392ea0b8a2b",
    "subjectId": "algo",
    "text": "Хэш-кестенің ең нашар жағдайдағы (worst-case) іздеу уақыт күрделілігі қандай?",
    "options": [
      {
        "id": "63f6cc2c-0b87-4609-a821-5681f3f30b5b",
        "text": "O(n) (барлық элементтер бір ұяшыққа түсіп, соқтығыс туындағанда)"
      },
      {
        "id": "a9bc27cb-e48f-41b7-8e04-7fb90e0e27eb",
        "text": "O(1)"
      },
      {
        "id": "0fb0fd15-a2e1-43b1-acf2-7cbe616951aa",
        "text": "O(log n)"
      },
      {
        "id": "c9a42985-0c0c-47c7-a203-2e647050c70d",
        "text": "O(n log n)"
      }
    ],
    "correctOptionIds": [
      "63f6cc2c-0b87-4609-a821-5681f3f30b5b"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "da42649d-7150-482f-8368-391da0b4823b",
    "subjectId": "algo",
    "text": "Тұрақты хэштеу (Consistent Hashing) негізінен қай жерде қолданылады?",
    "options": [
      {
        "id": "df211b5f-0756-4c9c-9467-2c1b834a7e33",
        "text": "Үлестірілген жүйелерде (Distributed Systems) және жүктемені теңгергіштерде (Load Balancer)"
      },
      {
        "id": "b810eef3-f624-4870-a838-a530f111c549",
        "text": "Мәліметтерді шифрлауда"
      },
      {
        "id": "bebccd5a-cebb-45a4-8ec1-a07d36f2faf8",
        "text": "Компиляторлардың синтаксистік талдауында"
      },
      {
        "id": "bb1e86f6-b99d-4d38-b04e-9099d3782d37",
        "text": "Жедел жадты тазартуда"
      }
    ],
    "correctOptionIds": [
      "df211b5f-0756-4c9c-9467-2c1b834a7e33"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "2f8da019-ceab-4c60-b718-9f8906a0c90c",
    "subjectId": "algo",
    "text": "Блум фильтрінде (Bloom Filter) қандай қателік түрі орын алуы мүмкін?",
    "options": [
      {
        "id": "e668a5fb-c1f5-4706-b8da-6f187008c27d",
        "text": "False Positive (элемент жоқ болса да, бар деп айтуы мүмкін)"
      },
      {
        "id": "e4e84b49-41dc-4a40-ac6d-42960490dda2",
        "text": "False Negative (элемент бар болса да, жоқ деп айтуы мүмкін)"
      },
      {
        "id": "96595303-e3ce-4756-bd0d-02f259131a74",
        "text": "Stack Overflow"
      },
      {
        "id": "41729bea-4e15-4990-a874-40e2eb881a5d",
        "text": "Хэш функциясының бұзылуы"
      }
    ],
    "correctOptionIds": [
      "e668a5fb-c1f5-4706-b8da-6f187008c27d"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "cf9f4aa4-c2a5-4ce1-a20e-905bbeca4540",
    "subjectId": "algo",
    "text": "Блум фильтрінде (Bloom Filter) элементті жою (delete) операциясын орындауға бола ма?",
    "options": [
      {
        "id": "7db9353d-a0bf-4d25-b6e5-a449cd0653eb",
        "text": "Әдетте болмайды, өйткені бір битті бірнеше хэш функциясы өзгертуі мүмкін (Counting Bloom Filter нұсқасын қоспағанда)"
      },
      {
        "id": "1d9aec6a-839e-4d0f-a0f8-47731786b333",
        "text": "Иә, кез келген уақытта O(1) уақытында болады"
      },
      {
        "id": "188f7bfc-6167-4c47-8ba4-431a5639af17",
        "text": "Тек рекурсивті түрде болады"
      },
      {
        "id": "4510a0d2-721f-4447-8a2d-ef8990d23832",
        "text": "Иә, бірақ одан кейін фильтр нөлге теңеледі"
      }
    ],
    "correctOptionIds": [
      "7db9353d-a0bf-4d25-b6e5-a449cd0653eb"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "f3aebcaa-b0b1-439d-8064-dc90ae64c67c",
    "subjectId": "algo",
    "text": "Универсалды хэштеу (Universal Hashing) дегеніміз не?",
    "options": [
      {
        "id": "f84b54f6-914d-41cc-b00c-e1f109b64194",
        "text": "Хэш функцияларының арнайы жиынтығынан кездейсоқ функцияны таңдау арқылы ең нашар жағдайдағы соқтығыстарды азайту әдісі"
      },
      {
        "id": "6264f34f-2453-4dc4-9c6a-d4f213bae359",
        "text": "Кез келген деректі хэштей алатын бір ғана функция"
      },
      {
        "id": "b871491a-6af9-4d73-a004-2aa50c04faf1",
        "text": "Хэш мәнін 64-биттік санға айналдыру"
      },
      {
        "id": "4c21dc60-2d2a-4674-931d-f1aca50d20c7",
        "text": "Шифрлаудың ең күшті алгоритмі"
      }
    ],
    "correctOptionIds": [
      "f84b54f6-914d-41cc-b00c-e1f109b64194"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "ecae5d07-50bc-49ff-8aa7-e39cad8c7986",
    "subjectId": "algo",
    "text": "Хэш-кестелерде \"екіншілік кластерлену\" (secondary clustering) проблемасы қай әдіске тән?",
    "options": [
      {
        "id": "4cb927d4-1f6c-4610-a032-121d04a27c00",
        "text": "Квадраттық зондтау (quadratic probing)"
      },
      {
        "id": "c454423a-f5eb-4a37-871d-4010bc64d20e",
        "text": "Сызықтық зондтау"
      },
      {
        "id": "f36cfcba-b4db-452d-9d19-ebd63ad4b250",
        "text": "Бөлек тізбектер (separate chaining)"
      },
      {
        "id": "a7c49fc6-5d8c-4475-a95d-bbae5df795d9",
        "text": "Қос хэштеу"
      }
    ],
    "correctOptionIds": [
      "4cb927d4-1f6c-4610-a032-121d04a27c00"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "7c47439b-bf95-46de-9f3a-066fb6b62496",
    "subjectId": "algo",
    "text": "Бөлек тізбектер (separate chaining) әдісінде байланысқан тізімнің орнына қандай құрылымды қолдану іздеу уақытын O(log n) деңгейіне дейін жақсартады?",
    "options": [
      {
        "id": "f2858cdc-52d0-4c17-bdd0-bb1001212808",
        "text": "Бинарлық іздеу ағашы (немесе қызыл-қара ағаш)"
      },
      {
        "id": "dd269d8b-5c0d-46a1-955d-a78f222bfe3b",
        "text": "Стек"
      },
      {
        "id": "cc584024-12fe-4e53-8643-fd7fbf98f414",
        "text": "Циклдік кезек"
      },
      {
        "id": "86ddcefb-e505-4410-81a7-32f19954d87d",
        "text": "Хэштелген массив"
      }
    ],
    "correctOptionIds": [
      "f2858cdc-52d0-4c17-bdd0-bb1001212808"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "346b5bea-e9a4-49bc-bcba-83b52efc4ea1",
    "subjectId": "algo",
    "text": "Жақсы хэш функциясының маңызды қасиеті — Детерминистік (Deterministic) болуы нені білдіреді?",
    "options": [
      {
        "id": "c1b2cd3e-62a0-48e5-9ebc-fa2aad8f0f3b",
        "text": "Бірдей кілт үшін әрқашан бірдей хэш мәнін қайтару тиіс"
      },
      {
        "id": "b9b7b271-157b-4999-b52c-2eb2ab0fb1de",
        "text": "Хэш мәндерінің кездейсоқ өзгеруін"
      },
      {
        "id": "589eb5d3-5dcb-4a2c-b0c6-a05594510bef",
        "text": "Хэш мәнінің тек оң сандар болуын"
      },
      {
        "id": "b016b9ba-7abf-4f97-b4e1-11f184c7b376",
        "text": "Функцияның тек орындалу уақыты қысқа болуын"
      }
    ],
    "correctOptionIds": [
      "c1b2cd3e-62a0-48e5-9ebc-fa2aad8f0f3b"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "5156a1b7-94b8-455a-8470-16ec42b1b0a8",
    "subjectId": "algo",
    "text": "Java тіліндегі `HashMap` соқтығыстар өте көп болғанда (бір себетте 8-ден көп элемент) тізбекті байланысқан тізімнен қандай құрылымға автоматты түрде көшіреді?",
    "options": [
      {
        "id": "e53046e9-6d0e-4264-998b-8de47385a6bc",
        "text": "Қызыл-қара ағашқа (Red-Black Tree)"
      },
      {
        "id": "237315a2-12e9-49f8-a1f3-701a7412217a",
        "text": "Динамикалық массивке"
      },
      {
        "id": "a1946ed6-8d49-4c56-be7a-29a922b4d9f9",
        "text": "Стекке"
      },
      {
        "id": "12ac9aa4-91e0-4a8e-b843-60b071fa5be2",
        "text": "Хэш-кестеге"
      }
    ],
    "correctOptionIds": [
      "e53046e9-6d0e-4264-998b-8de47385a6bc"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "501ef948-4f99-4556-a5df-09014ea9691e",
    "subjectId": "algo",
    "text": "Ашық адрестеу әдісінде элементті өшіргенде ұяшықты бос деп белгілемей, неліктен арнайы белгі («Deleted» немесе «Tombstone») қойылады?",
    "options": [
      {
        "id": "bacf62c0-e510-4520-a252-f361bbfea79d",
        "text": "Іздеу алгоритмі бос ұяшықты көргенде тоқтап қалмай, тізбекті әрі қарай жалғастыруы үшін"
      },
      {
        "id": "f97299a6-00b3-467d-b82a-56dc6f241040",
        "text": "Жадты босатпау үшін"
      },
      {
        "id": "91ae98cd-a326-4330-a6c9-75beacd8e9c6",
        "text": "Басқа элементтерді сонда автоматты түрде жылжыту үшін"
      },
      {
        "id": "13b22a51-b77a-434e-bf1f-b01b04b16581",
        "text": "Хэш функциясын қайта есептеу үшін"
      }
    ],
    "correctOptionIds": [
      "bacf62c0-e510-4520-a252-f361bbfea79d"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "14341c90-3a20-4d0b-bf96-58193484184f",
    "subjectId": "algo",
    "text": "Бөлек тізбектер (separate chaining) әдісінің басты артықшылығы неде?",
    "options": [
      {
        "id": "7b1c5e1d-7660-403c-b42b-61e77d48ab28",
        "text": "Кесте өлшемінен көп элементтерді сыйғыза алады"
      },
      {
        "id": "e3e96fdf-8238-4c89-9851-c1f0fcc7c365",
        "text": "Жадты мүлдем көп қажет етпейді"
      },
      {
        "id": "71160e8b-4b2e-463b-b93c-845f5ea85c93",
        "text": "Іздеу жылдамдығы әрқашан O(1) болады"
      },
      {
        "id": "1d7f836e-c327-4b1d-98d0-134b79f63bb1",
        "text": "Соқтығыстарды толығымен болдырмайды"
      }
    ],
    "correctOptionIds": [
      "7b1c5e1d-7660-403c-b42b-61e77d48ab28"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "87ea26e7-d871-4668-ba70-96ffae78595f",
    "subjectId": "algo",
    "text": "Сызықтық зондтау (linear probing) әдісінде өшіру (delete) операциясының негізгі кемшілігі не?",
    "options": [
      {
        "id": "5e36e43b-ac12-4e2c-b18c-2218f93b7a3e",
        "text": "Өшірілген ұяшықтан кейінгі элементтерді іздеуді бұзбау үшін оларды жылжыту немесе арнайы таңба қою керек"
      },
      {
        "id": "30801d98-00f9-440a-b894-3d81c2081db5",
        "text": "Жадты мүлдем босату мүмкін емес"
      },
      {
        "id": "eab75fbb-f181-47d1-8624-a871ccfc7631",
        "text": "Ол үшін жаңа хэш-кесте құру қажет"
      },
      {
        "id": "9be5e68c-1009-4ad5-a58f-eb0a8fc1f34e",
        "text": "Уақыт күрделілігі әрқашан O(n^2) болады"
      }
    ],
    "correctOptionIds": [
      "5e36e43b-ac12-4e2c-b18c-2218f93b7a3e"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "861b8ce1-4ee0-4a08-9c79-dc05a37538e5",
    "subjectId": "algo",
    "text": "Криптографиялық хэш функцияларының басты мақсаты не?",
    "options": [
      {
        "id": "71b9ea0e-3515-4068-a1b8-8ea23d879cb1",
        "text": "Деректердің тұтастығы мен қауіпсіздігін қамтамасыз ету"
      },
      {
        "id": "6044b707-2358-466b-a292-9872f97ca5ce",
        "text": "Хэш-кестелердегі іздеу жылдамдығын арттыру"
      },
      {
        "id": "c44dcc9d-31da-4b46-84b6-74998ba37e3b",
        "text": "Файл өлшемін кішірейту"
      },
      {
        "id": "6a475f0a-a74a-4e7c-b553-7f0f83be8c21",
        "text": "Жедел жадты оңтайландыру"
      }
    ],
    "correctOptionIds": [
      "71b9ea0e-3515-4068-a1b8-8ea23d879cb1"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "8eedad48-f465-41ac-bbae-8b224dad60b9",
    "subjectId": "algo",
    "text": "SHA-256 хэш функциясының шығыс өлшемі қанша бит құрайды?",
    "options": [
      {
        "id": "f61540a8-8a2d-44dd-9bc7-3748f64b84e1",
        "text": "256 бит"
      },
      {
        "id": "94b1a726-1bbd-4a9d-8eb8-2d739e9a1fcc",
        "text": "128 бит"
      },
      {
        "id": "4387cca5-ef5c-4ceb-bb15-659e6297e07a",
        "text": "512 бит"
      },
      {
        "id": "0fee70c8-d4df-47ca-8422-3677cff70750",
        "text": "64 бит"
      }
    ],
    "correctOptionIds": [
      "f61540a8-8a2d-44dd-9bc7-3748f64b84e1"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "48c3b20f-9b87-4dbd-b52c-602d7cdc61ea",
    "subjectId": "algo",
    "text": "MD5 хэш функциясының шығыс өлшемі қанша бит?",
    "options": [
      {
        "id": "89b6bf89-01f8-4890-8f28-9763d1f8ce10",
        "text": "128 бит"
      },
      {
        "id": "3012bd5c-80e3-49e0-be72-a9cd5edc63b1",
        "text": "256 бит"
      },
      {
        "id": "1f3922a4-1b93-4786-b18a-f0047656d1b7",
        "text": "160 бит"
      },
      {
        "id": "39a17e6d-4b7b-4a50-b8ac-de4785c603b2",
        "text": "64 бит"
      }
    ],
    "correctOptionIds": [
      "89b6bf89-01f8-4890-8f28-9763d1f8ce10"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "3bce2f54-8e8c-4c4e-951d-bd0d06c4e287",
    "subjectId": "algo",
    "text": "SHA-1 алгоритмінің шығыс өлшемі қанша бит?",
    "options": [
      {
        "id": "5605167a-a6bd-4eec-9808-91156439752c",
        "text": "160 бит"
      },
      {
        "id": "1ad3bb71-c17e-4cfa-a831-9e14b2dbc98e",
        "text": "128 бит"
      },
      {
        "id": "1d6dfd64-008b-4c13-8a06-cf9277ced5d3",
        "text": "256 бит"
      },
      {
        "id": "2aed943c-72a5-4881-8641-8a9f2567ddf0",
        "text": "512 бит"
      }
    ],
    "correctOptionIds": [
      "5605167a-a6bd-4eec-9808-91156439752c"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "ffcdc3c6-f823-4d09-9905-9c4e0624a4c4",
    "subjectId": "algo",
    "text": "MurmurHash немесе FNV-1a функциялары қай жерде жиі қолданылады?",
    "options": [
      {
        "id": "c2a293a7-c4b4-4bdc-8313-be72c6eab39d",
        "text": "Криптографиялық емес хэш-кестелерде жылдам хэштеу үшін"
      },
      {
        "id": "66002510-4534-40e5-9438-8ace370e0cef",
        "text": "Парольдерді қорғау үшін"
      },
      {
        "id": "86269fa4-096e-4d17-94e4-c50a70060903",
        "text": "Мәліметтерді шифрлау үшін"
      },
      {
        "id": "86ca6e99-8de7-4da1-a176-e6de334401a9",
        "text": "Электрондық қолтаңбада"
      }
    ],
    "correctOptionIds": [
      "c2a293a7-c4b4-4bdc-8313-be72c6eab39d"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "a9063f80-83eb-4f27-8039-fa8e05480b5c",
    "subjectId": "algo",
    "text": "Хэш-кестеде соқтығыс орын алғанда жаңа элемент үшін бос ұяшық іздеу процесі қалай аталады?",
    "options": [
      {
        "id": "9c95c976-8dcc-4566-a327-52e034e878af",
        "text": "Зондтау (Probing)"
      },
      {
        "id": "6717cde3-bd5f-495c-b904-6f23b8f482a8",
        "text": "Хэштеу (Hashing)"
      },
      {
        "id": "42ec7cf7-c759-4523-991a-e317551b1e84",
        "text": "Сұрыптау (Sorting)"
      },
      {
        "id": "dfe2a590-fe74-4a2f-907b-e233c55595cc",
        "text": "Бөлу (Chaining)"
      }
    ],
    "correctOptionIds": [
      "9c95c976-8dcc-4566-a327-52e034e878af"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "2abba756-987a-41d7-b1a1-f5acccdcc976",
    "subjectId": "algo",
    "text": "Rehashing (қайта хэштеу) кезінде жаңа хэш-кестенің өлшемі әдетте қалай таңдалады?",
    "options": [
      {
        "id": "ac36a87d-be98-4c2c-bd39-a07f1247271e",
        "text": "Бұрынғы өлшемнен шамамен екі есе үлкен жай сан (prime number) ретінде"
      },
      {
        "id": "fb79a80a-5c15-4b00-b2e8-5cb2f1d13e0f",
        "text": "Бұрынғы өлшемнен дәл екі есе үлкен сан"
      },
      {
        "id": "19ed3b19-ddd8-4a99-a961-992b969d1c1b",
        "text": "Бұрынғы өлшемнен 10-ға үлкен сан"
      },
      {
        "id": "8636f3dd-730f-4aba-bd5d-e3703a12648a",
        "text": "Тұрақты 1000 саны ретінде"
      }
    ],
    "correctOptionIds": [
      "ac36a87d-be98-4c2c-bd39-a07f1247271e"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "a3a683d9-997a-4bf7-8908-66d5740817e5",
    "subjectId": "algo",
    "text": "Неліктен хэш-кестенің ұяшықтар саны (m) ретінде жай сандар (prime numbers) таңдалады?",
    "options": [
      {
        "id": "40cb67b0-b783-45cb-b7e8-2fb8b8e8da1b",
        "text": "Қалдықпен бөлу әдісінде (division method) кілттерді біркелкі тарату және циклдік заңдылықтарды азайту үшін"
      },
      {
        "id": "70ab004f-b490-44ac-b602-79feda769343",
        "text": "Тек жай сандар ғана хэштеуге ыңғайлы"
      },
      {
        "id": "347d2158-ee26-449f-bb28-9013850f06d2",
        "text": "Жадты үнемдеу үшін"
      },
      {
        "id": "08a70118-cc26-4e3e-b74f-a25b7f164f16",
        "text": "Бағдарламаның жылдамдығын арттыру үшін"
      }
    ],
    "correctOptionIds": [
      "40cb67b0-b783-45cb-b7e8-2fb8b8e8da1b"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "c132d10c-defb-4712-81ae-23367d645e13",
    "subjectId": "algo",
    "text": "Ашық адрестеу әдісінде соқтығыс шешудің тиімділігі жүктеме коэффициентіне (α) қалай тәуелді?",
    "options": [
      {
        "id": "35189573-d39f-4de2-be36-e754c8017c59",
        "text": "α мәні 1-ге жақындаған сайын бос ұяшықты табу қиындап, өнімділік күрт төмендейді"
      },
      {
        "id": "1530fa13-1ad7-4ae3-828b-f623e239ebc5",
        "text": "α мәніне мүлдем тәуелді емес"
      },
      {
        "id": "f2bc1414-4bd4-41fb-8c2e-6af7917f2f79",
        "text": "α неғұрлым үлкен болса, өнімділік соғұрлым артады"
      },
      {
        "id": "55e6e338-7c3c-4630-a615-1f75593d1836",
        "text": "α мәні тек 0.5-тен асқанда ғана өнімділік жақсарады"
      }
    ],
    "correctOptionIds": [
      "35189573-d39f-4de2-be36-e754c8017c59"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "d1d1d0f3-8919-42de-9ff4-63acf2a49cee",
    "subjectId": "algo",
    "text": "Бөлек тізбектер (separate chaining) әдісінде жүктеме коэффициенті (α) қандай мәннен асуы мүмкін?",
    "options": [
      {
        "id": "f28765a7-b508-4346-824d-e77c2db0e6c4",
        "text": "α 1-ден үлкен бола алады (себебі тізімдер шексіз өсе алады)"
      },
      {
        "id": "da3ac93e-fa95-4a72-869c-9d28c2c68cfe",
        "text": "Тек 0.5-ке до дейін бара алады"
      },
      {
        "id": "9b51f13e-2003-4a2b-84ef-7014b3258ab1",
        "text": "Тек 1-ге дейін бара алады"
      },
      {
        "id": "8a45c306-2d38-40f5-ab54-367893ef9ae2",
        "text": "Әрқашан 0-ге тең болады"
      }
    ],
    "correctOptionIds": [
      "f28765a7-b508-4346-824d-e77c2db0e6c4"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "5c3da2d9-3f8c-482e-8a7b-ff62298f422e",
    "subjectId": "algo",
    "text": "Хэш-кестелерде қолданылатын «Коллизияға төзімділік» (Collision Resistance) қасиеті нені білдіреді?",
    "options": [
      {
        "id": "116a5b36-2a8c-43a0-a705-3e580ce85931",
        "text": "Бірдей хэш беретін екі түрлі кіріс деректі табудың қиындығын"
      },
      {
        "id": "17101312-8705-400a-aa06-57cf1231a98b",
        "text": "Хэш кестесінің жады толғанда қате шығармай жұмыс істеуін"
      },
      {
        "id": "c232d8a1-cb7c-42e5-96bc-5cfbe868cfb3",
        "text": "Компьютердің вирустарға қарсы тұруын"
      },
      {
        "id": "6995e69a-bdf1-41aa-9a29-470868728186",
        "text": "Хэш функциясының өте жылдам орындалуын"
      }
    ],
    "correctOptionIds": [
      "116a5b36-2a8c-43a0-a705-3e580ce85931"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "6ead9840-1dcc-41e0-8c45-dc14bb15efd9",
    "subjectId": "algo",
    "text": "Хэш функциясын құрастырудың «Бөлу әдісі» (Division method) қандай формуламен сипатталады?",
    "options": [
      {
        "id": "1e009440-c142-48f7-ba06-47b6505b291c",
        "text": "h(k) = k % m (мұндағы m – кесте өлшемі)"
      },
      {
        "id": "bcdf0e3f-0b9e-43b9-9cf4-5efdf5ade166",
        "text": "h(k) = k * m"
      },
      {
        "id": "8848c33e-6627-4d38-ac24-1f9b2ea55798",
        "text": "h(k) = (k + m) * 2"
      },
      {
        "id": "d88e4658-4abc-4200-b1b0-c165c1ae5250",
        "text": "h(k) = k ^ m"
      }
    ],
    "correctOptionIds": [
      "1e009440-c142-48f7-ba06-47b6505b291c"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "2c1d8ffb-0e9f-400f-ad99-5498c3e82e46",
    "subjectId": "algo",
    "text": "Хэш функциясын құрастырудың «Көбейту әдісі» (Multiplication method) қандай формуламен сипатталады (A – 0 мен 1 арасындағы тұрақты сан)?",
    "options": [
      {
        "id": "0180419f-2852-45f2-bdd1-6c93e0558afc",
        "text": "h(k) = ⌊m * (k * A % 1)⌋"
      },
      {
        "id": "88944159-42f6-43a5-981d-ffa43a12913c",
        "text": "h(k) = (k * A) % m"
      },
      {
        "id": "e115f1f2-1b73-4aeb-98fd-3b261897c5d7",
        "text": "h(k) = ⌊k / A⌋ % m"
      },
      {
        "id": "4aade957-8418-49bb-be7b-1e748b0646ee",
        "text": "h(k) = (k + A) * m"
      }
    ],
    "correctOptionIds": [
      "0180419f-2852-45f2-bdd1-6c93e0558afc"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "955fab06-d658-401c-8bf6-61f68081d6bb",
    "subjectId": "algo",
    "text": "Сызықтық зондтау (linear probing) әдісінде кестедегі кластерлер (элементтердің тығыз орналасқан блоктары) қалай аталады?",
    "options": [
      {
        "id": "0bb9aa90-b558-4a9b-9d7e-5fd19c216feb",
        "text": "Біріншілік кластерлену (Primary clustering)"
      },
      {
        "id": "f39454c4-1244-46cd-a7ca-7cfbcff9ae64",
        "text": "Екіншілік кластерлену (Secondary clustering)"
      },
      {
        "id": "3f53df49-649c-44bf-9c66-6c976bca0fd4",
        "text": "Үшіншілік кластерлену"
      },
      {
        "id": "23fa7b0f-a1f4-49b1-ad04-a215f3de5fce",
        "text": "Сызықтық блокталу"
      }
    ],
    "correctOptionIds": [
      "0bb9aa90-b558-4a9b-9d7e-5fd19c216feb"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "c2820860-9fe6-4bf3-a87f-f5409dac01ef",
    "subjectId": "algo",
    "text": "Квадраттық зондтаудағы (quadratic probing) соқтығыс салдарынан туындайтын кластерлену түрі қалай аталады?",
    "options": [
      {
        "id": "7c802362-9d10-48fd-a17c-359c61ba630b",
        "text": "Екіншілік кластерлену (Secondary clustering)"
      },
      {
        "id": "5894f4fb-98ef-4507-b97b-a7839eac09de",
        "text": "Біріншілік кластерлену (Primary clustering)"
      },
      {
        "id": "3329916d-b593-41de-b1bd-de642f4ba8e6",
        "text": "Квадраттық блокталу"
      },
      {
        "id": "b12d7ea3-c074-44e0-94a8-87db15f2bb44",
        "text": "Тізбекті кластерлену"
      }
    ],
    "correctOptionIds": [
      "7c802362-9d10-48fd-a17c-359c61ba630b"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "3a5f438b-fb5b-467b-b608-c940b8fa3b89",
    "subjectId": "algo",
    "text": "Ашық адрестеудің қай әдісі біріншілік және екіншілік кластерлену проблемаларын толығымен дерлік шешеді?",
    "options": [
      {
        "id": "de5b6d80-50b2-404e-8131-281f33fe30c2",
        "text": "Қос хэштеу (double hashing)"
      },
      {
        "id": "936b62c0-090e-4df1-b8f1-48bf75435551",
        "text": "Сызықтық зондтау (linear probing)"
      },
      {
        "id": "a2d9003d-5ca5-4eee-8150-df98a5d11402",
        "text": "Квадраттық зондтау (quadratic probing)"
      },
      {
        "id": "5bb696c1-66d1-4783-bd73-9f0782da0385",
        "text": "Бөлек тізбектер әдісі"
      }
    ],
    "correctOptionIds": [
      "de5b6d80-50b2-404e-8131-281f33fe30c2"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "ca914ca6-4e54-4207-b1f8-688b8637f7de",
    "subjectId": "algo",
    "text": "Қос хэштеу әдісінде екінші хэш функциясына (h2(k)) қойылатын басты шектеу қандай?",
    "options": [
      {
        "id": "5ab5a455-c37a-4f02-9aeb-74fad53873c0",
        "text": "h2(k) мәні ешқашан 0-ге тең болмауы тиіс және кесте өлшемі m-мен өзара жай сан болуы керек"
      },
      {
        "id": "f818102c-9dda-4e8a-ad57-3519f945053f",
        "text": "h2(k) мәні тек жұп сан болуы керек"
      },
      {
        "id": "4fb09de9-d1b4-4d01-9835-b06992cda975",
        "text": "h2(k) мәні әрқашан 1-ге тең болуы керек"
      },
      {
        "id": "2ebc5a1f-4696-4dd9-b64f-c9e7eba820bb",
        "text": "h2(k) мәні бірінші хэш мәнінен үлкен болуы керек"
      }
    ],
    "correctOptionIds": [
      "5ab5a455-c37a-4f02-9aeb-74fad53873c0"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "5eb4bbbc-6d55-46ff-a639-e6cfc85d6e92",
    "subjectId": "algo",
    "text": "Consistent Hashing (тұрақты хэштеу) әдісінде серверлер мен кілттер қандай виртуалды геометриялық пішінге орналастырылады?",
    "options": [
      {
        "id": "81214e55-95dc-4dd7-bee6-9142b323b724",
        "text": "Хэш сақинасы (Hash Ring / Circle)"
      },
      {
        "id": "4a6b31c7-da08-4c7a-84c8-eeed446d1988",
        "text": "Хэш ағашы (Hash Tree)"
      },
      {
        "id": "6ccae749-0a0e-4e37-b204-64286180be4d",
        "text": "Хэш массиві (Hash Array)"
      },
      {
        "id": "2c2a977a-fbf7-499f-8fce-df802bdb92c0",
        "text": "Хэш кубы (Hash Cube)"
      }
    ],
    "correctOptionIds": [
      "81214e55-95dc-4dd7-bee6-9142b323b724"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "05495831-487b-478e-8adb-3a55ba53c728",
    "subjectId": "algo",
    "text": "Consistent Hashing-те жаңа сервер қосқанда немесе ескі серверді өшіргенде кілттердің қанша пайызы қайта таратылады?",
    "options": [
      {
        "id": "c3272f6a-9d97-43e9-b0ce-cacf7ce74ef7",
        "text": "Кілттердің тек аз ғана бөлігі (орташа есеппен K/N)"
      },
      {
        "id": "a88181a4-a5db-44dd-a0e8-a57dc551388e",
        "text": "Барлық кілттер қайта таратылады"
      },
      {
        "id": "849d99f5-7d6f-4484-a633-696e1439c8df",
        "text": "Кілттердің 50%-ы қайта таратылады"
      },
      {
        "id": "684eeb8a-1d41-412c-a1f2-22b597a42c08",
        "text": "Ешбір кілт орнынан қозғалмайды"
      }
    ],
    "correctOptionIds": [
      "c3272f6a-9d97-43e9-b0ce-cacf7ce74ef7"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "3898d587-d716-4da5-9c61-3d4ac151c85d",
    "subjectId": "algo",
    "text": "Distributed Hash Table (DHT) жүйелерінің негізгі мысалы ретінде нені атауға болады?",
    "options": [
      {
        "id": "1f41213e-d802-4c78-8bcf-aa49e2319e80",
        "text": "BitTorrent (Kademlia) желілері"
      },
      {
        "id": "dc359727-880b-4043-807e-076eaabe8c43",
        "text": "Google іздеу жүйесі"
      },
      {
        "id": "c285ec73-574b-45b0-b23e-1506cf419473",
        "text": "Локалды файлдық жүй"
      },
      {
        "id": "435ab883-8738-44da-a250-656f8aa7f156",
        "text": "С++ тіліндегі std::unordered_map"
      }
    ],
    "correctOptionIds": [
      "1f41213e-d802-4c78-8bcf-aa49e2319e80"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "2fbb9e34-dc7b-4f70-bf2d-54a8afd89d64",
    "subjectId": "algo",
    "text": "Блум фильтрі (Bloom Filter) жадыны үнемдеу үшін мәндерді тікелей сақтаудың орнына нені қолданады?",
    "options": [
      {
        "id": "e4b2a0d6-6d5f-442d-9b13-496f377c08f1",
        "text": "Биттік массивті (Bit array)"
      },
      {
        "id": "802fb63d-e4dc-48f2-a826-ae217dbde693",
        "text": "Сілтемелер тізімін"
      },
      {
        "id": "0da73051-92eb-4e6b-8abb-c83b09486d12",
        "text": "Екілік іздеу ағашын"
      },
      {
        "id": "bad08814-d86a-47c7-9190-a977bacd2f69",
        "text": "Мәтіндік файлды"
      }
    ],
    "correctOptionIds": [
      "e4b2a0d6-6d5f-442d-9b13-496f377c08f1"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "0d4c9a54-9367-4340-abf3-7335caaa2475",
    "subjectId": "algo",
    "text": "Блум фильтрінде элементті іздеу (membership query) нәтижесі \"жоқ\" (false) деп жауап берсе, бұл нені білдіреді?",
    "options": [
      {
        "id": "f652c85d-4b6e-488e-8734-7ab97a7f94e2",
        "text": "Элементтің жиынтықта нақты жоқ екенін 100% кепілдікпен білдіреді (no false negatives)"
      },
      {
        "id": "b5b42c3d-b9ea-4c82-9f73-7feb61a88f20",
        "text": "Элементтің болуы мүмкін екенін білдіреді"
      },
      {
        "id": "cb1f58ee-cca0-46b5-8949-aa27bdf661cd",
        "text": "Фильтрдің бұзылғанын білдіреді"
      },
      {
        "id": "6f49ff44-c112-4637-90bc-7df74a911034",
        "text": "Іздеу нәтижесі белгісіз екенін"
      }
    ],
    "correctOptionIds": [
      "f652c85d-4b6e-488e-8734-7ab97a7f94e2"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "097b056c-b0a2-4f42-919a-d0ec82528182",
    "subjectId": "algo",
    "text": "Блум фильтрінде элементті іздеу нәтижесі \"bar\" (true) деп жауап берсе, бұл нені білдіреді?",
    "options": [
      {
        "id": "045a7a1e-b1f1-4109-b434-08bab936932c",
        "text": "Элемент жиынтықта болуы мүмкін немесе қате оң жауап (false positive) болуы мүмкін"
      },
      {
        "id": "fc06bd83-3b02-489d-b17b-dfb0c623be95",
        "text": "Элемент жиынтықта 100% бар екенін білдіреді"
      },
      {
        "id": "6961b978-c545-4ee4-b628-f241f12c02b3",
        "text": "Элементтің жоқ екенін білдіреді"
      },
      {
        "id": "89affc77-21ee-4d5f-a8a3-be4cd41827aa",
        "text": "Фильтрде соқтығыс мүлдем жоқ екенін"
      }
    ],
    "correctOptionIds": [
      "045a7a1e-b1f1-4109-b434-08bab936932c"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "7091cef4-5341-4614-9754-09e0948735c7",
    "subjectId": "algo",
    "text": "Universal Hashing-те соқтығысудың математикалық ықтималдығы қандай болады?",
    "options": [
      {
        "id": "ddabfddb-41d5-4ecd-b515-193a9dfc970a",
        "text": "1/m (мұндағы m – кесте өлшемі)"
      },
      {
        "id": "4567b6c5-e2b4-4a75-a5c3-aee93b985c64",
        "text": "1/n"
      },
      {
        "id": "b0d12c25-b660-45b9-94f4-d3c502e2c7eb",
        "text": "log(n)/m"
      },
      {
        "id": "8fb8b71d-48e4-4ab7-81b2-54b9944c1718",
        "text": "0 (ықтималдық нөлге тең)"
      }
    ],
    "correctOptionIds": [
      "ddabfddb-41d5-4ecd-b515-193a9dfc970a"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "0958e42e-3ced-4f27-a1f1-18e7e3cca907",
    "subjectId": "algo",
    "text": "C++ STL кітапханасында хэш-кестеге негізделген контейнер қалай аталады?",
    "options": [
      {
        "id": "fccf6fe3-1eb4-434a-bf22-b60fe9a7b4db",
        "text": "std::unordered_map"
      },
      {
        "id": "0d2fcfba-63d1-463b-ab91-4058f59f5d18",
        "text": "std::map"
      },
      {
        "id": "774bf78b-8424-44b1-9f66-36376a8ebaf4",
        "text": "std::vector"
      },
      {
        "id": "743b18e0-40c7-40b5-a1f9-96d6410a3cb9",
        "text": "std::list"
      }
    ],
    "correctOptionIds": [
      "fccf6fe3-1eb4-434a-bf22-b60fe9a7b4db"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "ef5a106a-86a7-4623-b0df-11f04caa405b",
    "subjectId": "algo",
    "text": "Java кітапханасында хэш-кестеге негізделген, бірақ ағындарға қауіпсіз (thread-safe) емес сынып қалай аталады?",
    "options": [
      {
        "id": "2df4cad0-dee7-4223-9b7a-eba21d127140",
        "text": "HashMap"
      },
      {
        "id": "c6aa882d-bd8b-4d87-b5ba-efafa4376df3",
        "text": "Hashtable"
      },
      {
        "id": "dbb9824b-b8f2-40c2-b5a5-04c9a04b9542",
        "text": "TreeMap"
      },
      {
        "id": "1874a8f3-d2fd-4434-9d59-69ccaaa68289",
        "text": "LinkedHashMap"
      }
    ],
    "correctOptionIds": [
      "2df4cad0-dee7-4223-9b7a-eba21d127140"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "e8482371-590e-4204-a98f-1a5352700ddf",
    "subjectId": "algo",
    "text": "Python тіліндегі сөздіктер (dict) мен жиындар (set) ішкі құрылымында қай деректер құрылымына негізделген?",
    "options": [
      {
        "id": "ee2e308b-2658-489a-9da5-a5785619c3ac",
        "text": "Хэш-кесте (Hash Table)"
      },
      {
        "id": "75550410-fc7c-44cd-a048-62b684c64d59",
        "text": "Қызыл-қара ағаш"
      },
      {
        "id": "ef355e0f-8f23-47f5-ab54-5e356e9bed3c",
        "text": "Сызықтық массив"
      },
      {
        "id": "4bc28848-6042-47a4-ab6e-a6cbfb7c197e",
        "text": "Стек"
      }
    ],
    "correctOptionIds": [
      "ee2e308b-2658-489a-9da5-a5785619c3ac"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "0a86f175-ed15-4fff-aa8c-f5280e973d14",
    "subjectId": "algo",
    "text": "Хэш-кестелердегі \"амортизацияланған уақыт\" (amortized time) ұғымы нені білдіреді?",
    "options": [
      {
        "id": "5fa4641d-62d3-4e18-aed2-7ef3ec2815ba",
        "text": "Операциялардың басым бөлігі O(1) уақыт алғанымен, кейде кестенің өлшемін өзгерту (rehashing) сияқты қымбат операциялардың орындалуын ескеретін орташаланған уақыт"
      },
      {
        "id": "34b89ada-b464-44d7-a304-8e9bc5d0e0ce",
        "text": "Операциялардың тек түнде орындалу уақыты"
      },
      {
        "id": "9bbcfdc1-9210-4e5a-8b6d-6b89b347a312",
        "text": "Ең нашар уақыттың математикалық шегі"
      },
      {
        "id": "da77b93a-5898-451e-b841-6a01f8d6a813",
        "text": "Операцияның ең жылдам орындалатын уақыты"
      }
    ],
    "correctOptionIds": [
      "5fa4641d-62d3-4e18-aed2-7ef3ec2815ba"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "36e3b197-73e2-4248-8241-20e33aeca7b7",
    "subjectId": "algo",
    "text": "Парольдерді сақтау үшін хэш-функция қолданылғанда, хэштерді бұзуды (Rainbow tables арқылы) қиындату үшін бастапқы парольге қосылатын кездейсоқ дерек қалай аталады?",
    "options": [
      {
        "id": "9b258dec-1899-4689-aa0a-9dad28b0dd4c",
        "text": "Тұз (Salt)"
      },
      {
        "id": "a813b0a2-53af-4296-b1be-37604f36d8e3",
        "text": "Бұрыш (Pepper)"
      },
      {
        "id": "d26f3f21-b413-44ff-85b5-9d4a6119117a",
        "text": "Кілт (Key)"
      },
      {
        "id": "74121cf1-c2ca-4aa0-8702-64378b0f4e06",
        "text": "Хэш-вектор"
      }
    ],
    "correctOptionIds": [
      "9b258dec-1899-4689-aa0a-9dad28b0dd4c"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "0d829b18-f502-4ed0-bda1-994aae5f9db3",
    "subjectId": "algo",
    "text": "Cryptographic Hash Function-ге тән «Көшкін әсері» (Avalanche effect) қасиеті нені білдіреді?",
    "options": [
      {
        "id": "8e9d9db2-2fe7-4dea-98a9-ad788e29f658",
        "text": "Бастапқы деректің бір ғана биті өзгерсе, хэш мәнінің жартысынан көбі айтарлықтай өзгеруі тиіс"
      },
      {
        "id": "983cce22-5b3e-41bd-a60e-64b0c72d033f",
        "text": "Хэш функциясының жадының тез толуын"
      },
      {
        "id": "9a4c2c57-157a-4fb9-8b63-79c6ce944d04",
        "text": "Соқтығыстардың қар көшкіні сияқты өсуін"
      },
      {
        "id": "ff4f14cc-7c3a-476f-abe4-550601de34a9",
        "text": "Хэш-кестенің өлшемі екі есеге артуын"
      }
    ],
    "correctOptionIds": [
      "8e9d9db2-2fe7-4dea-98a9-ad788e29f658"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "43a68286-25fc-4933-8c83-86868e8a80ee",
    "subjectId": "algo",
    "text": "Хэш-кестенің жүктеме коэффициенті (load factor) шамамен қандай мәннен асқанда оны қайта хэштеу (rehashing) ұсынылады (ашық адрестеу үшін)?",
    "options": [
      {
        "id": "fc2175da-1d5f-4bc5-bef3-c6566dd08c4a",
        "text": "0.7 - 0.75"
      },
      {
        "id": "eae83fe0-8ace-44d4-b9cb-9e139c772000",
        "text": "0.99 - 1.0"
      },
      {
        "id": "1eabb641-9ccf-4594-824f-957319ab13dd",
        "text": "0.1 - 0.2"
      },
      {
        "id": "3096bbc6-1a35-412b-8451-e6e914781e5a",
        "text": "1.5 - 2.0"
      }
    ],
    "correctOptionIds": [
      "fc2175da-1d5f-4bc5-bef3-c6566dd08c4a"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "b20e5afa-4443-4a9b-9e91-1f513f6d22ee",
    "subjectId": "algo",
    "text": "Екі деңгейлі керемет хэштеуде (FKS scheme) бірінші деңгей соқтығыстарды шешу үшін m ұяшықты қолданса, екінші деңгейдегі әрбір ұяшық ішінде соқтығысты болдырмау үшін қанша орын бөлінеді (ni – сол ұяшыққа түскен кілттер саны)?",
    "options": [
      {
        "id": "f7c91491-f281-4196-b7ea-d3d91f1162d5",
        "text": "ni^2 орын (квадраттық өлшем соқтығысты мүлдем болдырмайды)"
      },
      {
        "id": "f7ed6946-e37d-4463-9d4c-dfe229fd56cb",
        "text": "ni орын"
      },
      {
        "id": "499ccdab-b74a-4262-8b14-39975688db98",
        "text": "2 * ni орын"
      },
      {
        "id": "e3c1de3d-decb-4afc-a8a0-3947c268f315",
        "text": "log(ni) орын"
      }
    ],
    "correctOptionIds": [
      "f7c91491-f281-4196-b7ea-d3d91f1162d5"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "1f738996-4c0a-47cd-a612-5e03e7ac230b",
    "subjectId": "algo",
    "text": "Екі деңгейлі керемет хэштеудің (perfect hashing) жалпы кеңістік күрделілігі (Space Complexity) қандай болады?",
    "options": [
      {
        "id": "c275f3c6-c8e3-4eca-870b-3120e117a75f",
        "text": "O(n) (кілттер санына пропорционал сызықтық жад)"
      },
      {
        "id": "546d1ad4-512b-4b1d-88a8-888cadde01f1",
        "text": "O(n^2)"
      },
      {
        "id": "e970d3ec-0eb9-4b7a-adf7-0f875fc94f53",
        "text": "O(n log n)"
      },
      {
        "id": "661c2745-d266-4a3d-b843-ee60df972503",
        "text": "O(1)"
      }
    ],
    "correctOptionIds": [
      "c275f3c6-c8e3-4eca-870b-3120e117a75f"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "cd0e620c-70cd-4c49-8321-04f6e7d794bb",
    "subjectId": "algo",
    "text": "Парольдерді хэштеуге арналған арнайы баяу жұмыс істейтін және жадты көп қажет ететін заманауи алгоритм қандай?",
    "options": [
      {
        "id": "6f52eeb1-81df-4af2-96c9-698f605f4ca5",
        "text": "Argon2 (немесе bcrypt, scrypt)"
      },
      {
        "id": "f3c09077-ef20-4cf9-a741-7a4340a744e2",
        "text": "SHA-256"
      },
      {
        "id": "e2ff7f3e-2ee4-4436-b2c4-f873f0cd4b2d",
        "text": "MD5"
      },
      {
        "id": "d3e1301e-b37b-459c-a677-9e8b9c216617",
        "text": "CRC32"
      }
    ],
    "correctOptionIds": [
      "6f52eeb1-81df-4af2-96c9-698f605f4ca5"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "4345e4e0-fe95-4d27-a4e8-cf872d7c82b3",
    "subjectId": "algo",
    "text": "Ашық адрестеудегі сызықтық зондтау (linear probing) әдісінің процессордың кэш жадын қолданудағы басты артықшылығы қандай?",
    "options": [
      {
        "id": "fca4ee80-45e8-445a-8c51-f4ce5b5fe3cc",
        "text": "Кэштің локальділігі (Cache Locality) арқасында элементтер жадта көршілес орналасып, оқу өте тез орындалады"
      },
      {
        "id": "1205c30c-04ed-4f8c-9aaf-d89d5f80ce61",
        "text": "Ол жадты мүлдем алмайды"
      },
      {
        "id": "b30c75dc-2005-4515-956f-4a2be588dba4",
        "text": "Соқтығыстарды толығымен жояды"
      },
      {
        "id": "9af4587a-8bc4-4857-be6a-d25864d4056e",
        "text": "Рекурсивті шақыруларды азайтады"
      }
    ],
    "correctOptionIds": [
      "fca4ee80-45e8-445a-8c51-f4ce5b5fe3cc"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "215142fb-a5c0-4a49-890d-d5f8ef6de4af",
    "subjectId": "algo",
    "text": "Сызықтық зондтауда элементтерді өшіру кезіндегі «Трамплин» әсерін (іздеу үзіліп қалмауы үшін) шешу үшін қолданылатын арнайы таңба қалай аталады?",
    "options": [
      {
        "id": "c85fff12-3df7-48d4-b7d8-d9b93ca6e40a",
        "text": "Tombstone (мола тасы / Deleted белгісі)"
      },
      {
        "id": "b08066a0-bea7-4e18-8324-bf84ee19594e",
        "text": "Sentinel"
      },
      {
        "id": "e8a74ea1-1c39-44b8-9754-b31a551bef2c",
        "text": "Dummy"
      },
      {
        "id": "a9ddfbe8-4669-4abc-86d8-8bc10a8ef395",
        "text": "NullPointer"
      }
    ],
    "correctOptionIds": [
      "c85fff12-3df7-48d4-b7d8-d9b93ca6e40a"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "cab3b33b-6d51-483b-bcf4-17a7795c7040",
    "subjectId": "algo",
    "text": "Хэш-кестелердегі «Birthday Paradox» (Туған күн парадоксы) нені түсіндіру үшін қолданылады?",
    "options": [
      {
        "id": "84c4c435-3913-45f2-849d-9dee70746f1a",
        "text": "Кілттер саны кесте өлшемінен әлдеқайда аз болса да, соқтығыстардың туындау ықтималдығы өте жоғары екенін"
      },
      {
        "id": "a26bbfa9-5a73-4e64-b8d1-3ad2e5afd7e2",
        "text": "Парольдерді бұзу оңай екенін"
      },
      {
        "id": "97bf6ff9-01f2-4973-8e55-c4ac3862ea68",
        "text": "Жақсы хэш функциясын табудың қиындығын"
      },
      {
        "id": "340b1c47-7663-45ce-affc-8b44f381bd87",
        "text": "Хэш-кестенің өлшемі әрқашан жай сан болуы керектігін"
      }
    ],
    "correctOptionIds": [
      "84c4c435-3913-45f2-849d-9dee70746f1a"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "bd089a92-f525-460c-bf9a-02788696a943",
    "subjectId": "algo",
    "text": "Хэш функцияларындағы «Preimage Resistance» (Бірінші мекенжайға төзімділік) қасиеті нені білдіреді?",
    "options": [
      {
        "id": "fedc698c-1a25-4262-9a23-b99a4333213c",
        "text": "Берілген хэш мәні бойынша оның бастапқы кілтін есептеп табу мүмкін еместігін"
      },
      {
        "id": "207e9a23-791c-4647-92f5-4c85e42c0fd8",
        "text": "Хэштің ұзындығын өзгертудің қиындығын"
      },
      {
        "id": "e10b0402-1374-432a-999f-00dd430c3d13",
        "text": "Екі түрлі кілттің бірдей хэш беруін"
      },
      {
        "id": "38a7049c-1593-4522-8871-2dbc60cfc096",
        "text": "Функцияның тек оң сандармен жұмыс істейтінін"
      }
    ],
    "correctOptionIds": [
      "fedc698c-1a25-4262-9a23-b99a4333213c"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "bc679b08-57b4-4c5b-a7bd-c85cc18e117c",
    "subjectId": "algo",
    "text": "Блум фильтрінде (Bloom Filter) қолданылатын биттік массивтің өлшемі мен хэш функцияларының саны неге негізделіп таңдалады?",
    "options": [
      {
        "id": "afdfdcd5-5624-4b54-bb80-627a557854bb",
        "text": "Фильтрге енгізілетін элементтердің жоспарланған саны мен рұқсат етілген false positive ықтималдығына қарай"
      },
      {
        "id": "0b78dd00-14df-475f-af5b-e5f9187f9686",
        "text": "Процессордың ядролар санына қарай"
      },
      {
        "id": "5e0ee5b1-c7e3-4848-acae-9ae7e95c033b",
        "text": "Жедел жадтың (RAM) максималды көлеміне қарай"
      },
      {
        "id": "dc941059-9a7d-4198-a87c-5d469547052a",
        "text": "Мәліметтердің форматына байланысты"
      }
    ],
    "correctOptionIds": [
      "afdfdcd5-5624-4b54-bb80-627a557854bb"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "cae45518-3f81-4c20-a002-0959fa4beab5",
    "subjectId": "algo",
    "text": "Distributed Hash Table (DHT) құрылымында мәліметтер қалай сақталады?",
    "options": [
      {
        "id": "7721eddd-aa30-482e-b771-1b071cc632dd",
        "text": "Кілт-мән жұптары желідегі көптеген дербес түйіндер (серверлер) арасында бөлініп сақталады"
      },
      {
        "id": "66ed1ba0-f122-450b-b16e-605cf5b6f19c",
        "text": "Мәліметтерді тек бір орталық серверде сақтаумен"
      },
      {
        "id": "12f8abe4-833f-45bd-b4f4-cc79f4aa311f",
        "text": "Барлық мәліметтер әрбір серверде толық қайталанады"
      },
      {
        "id": "98d41874-4a91-4275-9652-910a1e597868",
        "text": "Мәліметтер тек браузер кэшінде сақталады"
      }
    ],
    "correctOptionIds": [
      "7721eddd-aa30-482e-b771-1b071cc632dd"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "0a15dbc4-3220-400e-9b13-5434cb32fbc6",
    "subjectId": "algo",
    "text": "Consistent Hashing-те серверлерді хэш сақинасында біркелкі тарату үшін қолданылатын виртуалды нысандар қалай аталады?",
    "options": [
      {
        "id": "e7aeafd8-07bb-4456-a042-dbf4ca272f2c",
        "text": "Виртуалды түйіндер (Virtual Nodes / Vnodes)"
      },
      {
        "id": "d4d75376-cec2-4315-9db4-6a3ec3fbd318",
        "text": "Виртуалды серверлер"
      },
      {
        "id": "40203670-ef05-4675-b36a-9f993511b49a",
        "text": "Жалған кілттер"
      },
      {
        "id": "aeef7f1c-8c7d-49ba-9888-0e71ef3825a9",
        "text": "Сенсинельдер"
      }
    ],
    "correctOptionIds": [
      "e7aeafd8-07bb-4456-a042-dbf4ca272f2c"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "d170e0a8-b91e-4ff5-8092-f1e7e3f74513",
    "subjectId": "algo",
    "text": "Хэш-кестенің «worst-case» жағдайында орындалатын іздеу уақытын O(1) деңгейінде сақтауға кепілдік беретін әдіс қандай?",
    "options": [
      {
        "id": "dea0011e-d7f8-4bf2-b881-cd5f3b9bbe6e",
        "text": "Статикалық керемет хэштеу (Static Perfect Hashing)"
      },
      {
        "id": "744b914d-dc45-4b29-8085-e883648b8b44",
        "text": "Бөлек тізбектер әдісі"
      },
      {
        "id": "30c2edbf-9f2a-4d7e-9379-3ed3608d0161",
        "text": "Сызықтық зондтау"
      },
      {
        "id": "f21c2f50-9181-4d04-b4af-9653d305240f",
        "text": "Қос хэштеу"
      }
    ],
    "correctOptionIds": [
      "dea0011e-d7f8-4bf2-b881-cd5f3b9bbe6e"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "eeda9f2a-f960-4be7-88c2-102f349c0e43",
    "subjectId": "algo",
    "text": "Бөлек тізбектер (separate chaining) әдісінде элементті іздеудің орташа уақыт күрделілігі қандай?",
    "options": [
      {
        "id": "6c265d6a-0732-4e2e-a487-7c33bf594ef9",
        "text": "O(1 + α) (мұндағы α – жүктеме коэффициенті)"
      },
      {
        "id": "58cc6b4a-be30-49ac-856a-718eb473c9e6",
        "text": "O(log n)"
      },
      {
        "id": "78b5d762-1843-48a1-8615-2d79ba68feab",
        "text": "O(n)"
      },
      {
        "id": "42a32dcf-fbf7-471b-aba4-f04fa879c623",
        "text": "O(n log n)"
      }
    ],
    "correctOptionIds": [
      "6c265d6a-0732-4e2e-a487-7c33bf594ef9"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "88783542-9167-4a9e-9ccb-8bdcac44bfab",
    "subjectId": "algo",
    "text": "Желілік пакеттерді жіберудегі қателерді тексеру үшін қолданылатын қарапайым хэш-код алгоритмі қалай аталады?",
    "options": [
      {
        "id": "500a899a-83c7-4b6d-9b9a-8d8ee48644c2",
        "text": "CRC32 (Cyclic Redundancy Check)"
      },
      {
        "id": "9d33f5b9-2b19-47d1-9a79-fa29ce61754d",
        "text": "SHA-512"
      },
      {
        "id": "155255ca-d88b-4454-ac2f-b798d6a5783e",
        "text": "Argon2"
      },
      {
        "id": "fc4fefd8-3fbd-44d3-ae10-0fc73ae14339",
        "text": "MurmurHash"
      }
    ],
    "correctOptionIds": [
      "500a899a-83c7-4b6d-9b9a-8d8ee48644c2"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "b8b32e58-0c5c-4090-a52f-e09738f5ee63",
    "subjectId": "algo",
    "text": "Хэш-кестенің ұяшықтар саны 10-ға тең (m=10) және соқтығысты шешу үшін сызықтық зондтау қолданылады. Егер хэш функциясы h(key) = key % 10 болса, 12, 22 және 32 кілттері қай ұяшықтарға орналасады?",
    "options": [
      {
        "id": "a86e8a02-1238-4dfd-8eb9-f3327d4724c2",
        "text": "12 -> 2-ұяшыққа, 22 -> 3-ұяшыққа, 32 -> 4-ұяшыққа"
      },
      {
        "id": "e254daaa-755b-4c40-a52a-ba6f2db60aab",
        "text": "Үшеуі де 2-ұяшыққа орналасады"
      },
      {
        "id": "474b4bc4-d8fd-4436-a221-8bef8105cbdb",
        "text": "12 -> 2-ұяшыққа, 22 -> 2-ұяшыққа, 32 -> 2-ұяшыққа"
      },
      {
        "id": "0130e2dd-3a40-466b-8392-33864a0e3498",
        "text": "12 -> 2-ұяшыққа, 22 -> 4-ұяшыққа, 32 -> 6-ұяшыққа"
      }
    ],
    "correctOptionIds": [
      "a86e8a02-1238-4dfd-8eb9-f3327d4724c2"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "b3fb270c-1f01-4346-9153-79b6542291d1",
    "subjectId": "algo",
    "text": "Квадраттық зондтау кезінде (quadratic probing) егер кесте өлшемі m екінің дәрежесі (power of 2) болса және c1=0.5, c2=0.5 тұрақтылары таңдалса, іздеу кезегі туралы не айтуға болады?",
    "options": [
      {
        "id": "a1c53370-157d-42b4-bffe-718024146f49",
        "text": "Ол кестенің барлық ұяшықтарын толық аралап шығуға кепілдік береді"
      },
      {
        "id": "fea8cb7b-a9a4-40f9-9c42-2c5f31818835",
        "text": "Ұяшықтардың тек 10%-ын ғана тексереді"
      },
      {
        "id": "93873255-8a47-445c-bebd-0abfa0bdf5f4",
        "text": "Ешқандай бос орын таба алмайды"
      },
      {
        "id": "0386c7e2-dc80-4a1f-96d6-8e135545a802",
        "text": "Тек жұп ұяшықтарды тексереді"
      }
    ],
    "correctOptionIds": [
      "a1c53370-157d-42b4-bffe-718024146f49"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "0d9e940f-8639-42c3-986d-bd9322ab0b79",
    "subjectId": "algo",
    "text": "Ашық адрестеу әдісінде INSERT операциясының орташа жағдайдағы зондтау саны (probes) қандай формуламен бағаланады?",
    "options": [
      {
        "id": "1dc6abe2-4488-4e9d-8971-0553ca72702e",
        "text": "1 / (1 - α)"
      },
      {
        "id": "10798704-2114-4ff8-9e6f-0201718b925d",
        "text": "1 / (1 + α)"
      },
      {
        "id": "25e2ea48-2367-48f9-8b34-30c2f9a809b2",
        "text": "1 + α"
      },
      {
        "id": "44a4e505-2069-4e23-a0bf-e500f1faca36",
        "text": "log(1 - α)"
      }
    ],
    "correctOptionIds": [
      "1dc6abe2-4488-4e9d-8971-0553ca72702e"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "1d122411-5e62-47b6-91b8-39fd0e1f80f0",
    "subjectId": "algo",
    "text": "Ашық адрестеу әдісінде іздеудің (search) сәтсіз аяқталуының (unsuccessful search) орташа зондтау саны қандай формуламен бағаланады?",
    "options": [
      {
        "id": "0e5c368e-33f5-4f8f-95e4-970c978a2698",
        "text": "1 / (1 - α)"
      },
      {
        "id": "2dd5d41e-5902-4f01-bc23-84faf0b60aef",
        "text": "1 / (1 + α)"
      },
      {
        "id": "500acc56-8616-4839-a6d6-b877e4f4d3cd",
        "text": "1 + α"
      },
      {
        "id": "c6f2c8b5-4229-47a1-9d8b-468ef24b47b5",
        "text": "α"
      }
    ],
    "correctOptionIds": [
      "0e5c368e-33f5-4f8f-95e4-970c978a2698"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "86320bca-6c76-46bb-a1f9-38592949a05f",
    "subjectId": "algo",
    "text": "Бөлек тізбектер (separate chaining) әдісінде жаңа элемент әдетте байланысқан тізімнің қай жеріне қосылады және неліктен?",
    "options": [
      {
        "id": "caa31615-b35a-4ecf-8ec7-76358a207060",
        "text": "Тізімнің басына (O(1) уақытында жылдам қосу үшін)"
      },
      {
        "id": "6900046c-0f63-4c29-8c77-cb1936d8e972",
        "text": "Тізімнің соңына"
      },
      {
        "id": "b74caf23-d360-4499-be60-612e801d0825",
        "text": "Тізімнің ортасына"
      },
      {
        "id": "8de8eb9d-3fe8-488b-a4f5-598ca66d4a54",
        "text": "Кездейсоқ жеріне"
      }
    ],
    "correctOptionIds": [
      "caa31615-b35a-4ecf-8ec7-76358a207060"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "6db3f106-308e-494e-90ee-932180f1cace",
    "subjectId": "algo",
    "text": "Сызықтық зондтауда элементтерді өшіргеннен кейін кестеде бос орындар қалып, іздеу жолын үзіп тастамауы үшін жасалатын тағы бір балама әдіс қандай?",
    "options": [
      {
        "id": "daa9d149-e5b5-41ca-8859-006da25b05b0",
        "text": "Өшірілген элементтен кейінгі тізбекте тұрған элементтерді босаған орынға жылжыту (Reclustering/Shifting)"
      },
      {
        "id": "441898c6-b90d-4d4f-bb0f-1905cdea1ec2",
        "text": "Кестені бірден өшіру"
      },
      {
        "id": "a86b42c1-0312-47dd-a533-2824a2813110",
        "text": "Жадты форматтау"
      },
      {
        "id": "12a5b385-a06f-431a-af8a-fd92f904e958",
        "text": "Хэш функциясын өзгерту"
      }
    ],
    "correctOptionIds": [
      "daa9d149-e5b5-41ca-8859-006da25b05b0"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "cbb88969-dae1-4335-809b-9f8590b60412",
    "subjectId": "algo",
    "text": "Сызықтық зондтаудың квадраттық зондтаудан басты айырмашылығы қандай?",
    "options": [
      {
        "id": "dccf6658-8a50-4436-b57d-3803eed1984e",
        "text": "Сызықтық зондтауда қадам тұрақты 1-ге тең, ал квадраттық зондтауда қадам квадраттық функция бойынша өседі"
      },
      {
        "id": "3aa0e24e-fae2-4b21-8afb-7aea584e88cf",
        "text": "Сызықтық зондтау тек оң сандарды хэштейді"
      },
      {
        "id": "f63f46c8-51f7-4be5-a642-02cb68149695",
        "text": "Квадраттық зондтауда соқтығыс мүлдем болмайды"
      },
      {
        "id": "f85f89ac-7e55-4eff-8da1-ad7e49f6f679",
        "text": "Сызықтық зондтау жадыны екі есе көп алады"
      }
    ],
    "correctOptionIds": [
      "dccf6658-8a50-4436-b57d-3803eed1984e"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "43cb4b48-5d55-413f-833a-a810453f5d39",
    "subjectId": "algo",
    "text": "Хэш-кестелерде соқтығыстарды шешудің \"Cuckoo Hashing\" (Көкек хэштеуі) әдісі дегеніміз не?",
    "options": [
      {
        "id": "7aa7a99e-5378-413c-a38b-bc92e0484f40",
        "text": "Екі дербес хэш-кестені қолданып, жаңа элемент бұрынғы элементті өз орнынан ығыстырып шығаратын (ығыстырылған элемент екінші кестеден орын іздейді) әдіс"
      },
      {
        "id": "f9f0d6f1-7b38-4e6e-a5a3-18782065ecaf",
        "text": "Кестені тек түнде өңдейтін алгоритм"
      },
      {
        "id": "8cc13b09-e489-4a78-b640-c9d2a9cf0251",
        "text": "Соқтығыстарды мүлдем елемейтін әдіс"
      },
      {
        "id": "d43bb43e-2aca-40b8-8114-f231697a0381",
        "text": "Кілттерді тек алфавит бойынша сұрыптайтын әдіс"
      }
    ],
    "correctOptionIds": [
      "7aa7a99e-5378-413c-a38b-bc92e0484f40"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "7d2f55d5-d2f5-479d-8128-ba64123ccf76",
    "subjectId": "algo",
    "text": "Cuckoo Hashing әдісінде іздеудің (worst-case search) ең нашар жағдайдағы уақыт күрделілігі қандай?",
    "options": [
      {
        "id": "b62a9de9-c2b1-4144-890e-020e8068f724",
        "text": "O(1) (іздеу тек екі хэш-кестенің тиісті ұяшығын ғана тексереді)"
      },
      {
        "id": "5d72a715-f974-4708-afc3-81ed5849e380",
        "text": "O(n)"
      },
      {
        "id": "a86f5420-ac06-4c26-b370-88adfd13830a",
        "text": "O(log n)"
      },
      {
        "id": "ab6af00a-6c6d-44f1-9a2c-c13fd4b37eeb",
        "text": "O(n^2)"
      }
    ],
    "correctOptionIds": [
      "b62a9de9-c2b1-4144-890e-020e8068f724"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "24b0c9b4-a6d0-4106-90bc-a201a001df46",
    "subjectId": "algo",
    "text": "Cuckoo Hashing-те шексіз цикл (бір элементтердің бірін-бірі шексіз ығыстыруы) туындаса не істеледі?",
    "options": [
      {
        "id": "be61ef3d-86d2-4ee1-bf54-82aa3121cf21",
        "text": "Жаңа хэш функцияларын таңдап, бүкіл кестені қайта хэштейді (rehashing)"
      },
      {
        "id": "a800bd82-cad2-47eb-9344-49dc8e277339",
        "text": "Бағдарлама қате шығарып тоқтайды"
      },
      {
        "id": "bd6152dc-213f-4348-be3b-da117cf7ad99",
        "text": "Элементтердің бірі өшіріледі"
      },
      {
        "id": "d9a77942-09c2-4808-a3f8-6e3e902e0e72",
        "text": "Ығыстыру тоқтатылады"
      }
    ],
    "correctOptionIds": [
      "be61ef3d-86d2-4ee1-bf54-82aa3121cf21"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "195f1ae6-11b8-46c9-ae43-e9aec82341be",
    "subjectId": "algo",
    "text": "Бөлек тізбектер (separate chaining) әдісінің ашық адрестеуден басты кемшілігі неде?",
    "options": [
      {
        "id": "ecbfd338-463a-443c-8885-5695d04d3e3b",
        "text": "Байланысқан тізімнің нұсқауыштары (pointers) үшін қосымша жад жұмсалады және процессор кэшінің тиімділігі төмендейді"
      },
      {
        "id": "26e774fd-6775-4cb4-a29e-d5b809be579e",
        "text": "Кестенің өлшемін өзгерту мүмкін емес"
      },
      {
        "id": "a318b8f9-15c0-4f79-87d5-771c4665619d",
        "text": "Соқтығыстар өте көп болады"
      },
      {
        "id": "fcf0b795-8af3-4452-a5f5-3350475a00a6",
        "text": "Элементтерді жою өте қиын"
      }
    ],
    "correctOptionIds": [
      "ecbfd338-463a-443c-8885-5695d04d3e3b"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "551b4e63-df5c-455a-a330-ec2f824b2f22",
    "subjectId": "algo",
    "text": "Хэш-кестеде «екіншілік мекенжайға төзімділік» (Second Preimage Resistance) нені білдіреді?",
    "options": [
      {
        "id": "fb74d220-8797-4f17-8a62-85f7d947a573",
        "text": "Берілген x кірісі үшін h(x) = h(y) болатындай басқа y кірісін табудың іс жүзінде мүмкін еместігін"
      },
      {
        "id": "f9643d50-7432-4ac3-bc10-7557f44a0e60",
        "text": "Хэштің екінші рет өзгеруіне қарсылық"
      },
      {
        "id": "f54a56d0-cc5b-498d-a4fb-b7deb6f5f2d7",
        "text": "Екі деңгейлі хэштеуді қорғау"
      },
      {
        "id": "591cce11-f978-4cbf-add7-0f5afddfc7db",
        "text": "Хэш кестесінің жүктемесін азайту"
      }
    ],
    "correctOptionIds": [
      "fb74d220-8797-4f17-8a62-85f7d947a573"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "5122aa7a-3997-4ce7-aaeb-6281dc00d848",
    "subjectId": "algo",
    "text": "Хэш-кодтардың «Детерминизм» қасиеті бұзылса не орын алады?",
    "options": [
      {
        "id": "2b3fdbda-87d3-4997-bd37-317c3adfed28",
        "text": "Бір кілтті екінші рет іздегенде ол табылмауы мүмкін, себебі оның хэш индексі басқа болып өзгереді"
      },
      {
        "id": "8bf22271-d8a4-426d-a5b1-74deb06f1d86",
        "text": "Кесте автоматты түрде тазартылады"
      },
      {
        "id": "d8d7033b-b3e5-4b1e-b699-574d4e848c9b",
        "text": "Ештеңе өзгермейді"
      },
      {
        "id": "e4e40a6f-82f8-4f6d-a2ad-9df371f47a14",
        "text": "Компьютер істен шығады"
      }
    ],
    "correctOptionIds": [
      "2b3fdbda-87d3-4997-bd37-317c3adfed28"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "c37289a1-b68d-4427-9eb8-f8477d6ec18c",
    "subjectId": "algo",
    "text": "Хэш-кестелер қай деректер құрылымына жатады?",
    "options": [
      {
        "id": "39606439-88b9-4f4a-9dbb-8c1440253d40",
        "text": "Ассоциативті жиым (Associative Array / Map)"
      },
      {
        "id": "343caadd-a2a3-4693-95f1-d6f6b0e815ad",
        "text": "Сызықтық тізім"
      },
      {
        "id": "2546fd06-77fe-4acb-a027-3e8135232db7",
        "text": "Иерархиялық құрылым"
      },
      {
        "id": "48329dfd-3b62-409f-9fde-f890f52c001a",
        "text": "Графтық модель"
      }
    ],
    "correctOptionIds": [
      "39606439-88b9-4f4a-9dbb-8c1440253d40"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "b6627b75-0f50-41f1-ac48-6aa181c08a23",
    "subjectId": "algo",
    "text": "Хэштеудегі «Double Hashing» әдісінің «Quadratic Probing» әдісінен артықшылығы неде?",
    "options": [
      {
        "id": "ec9df2da-92e8-43f3-96f6-aa2fc241aa29",
        "text": "Double Hashing-те іздеу тізбегі кілттің өзіне де тәуелді, сондықтан екіншілік кластерлену болмайды"
      },
      {
        "id": "af8592ef-f4b8-4e68-955d-f7caaeab7d39",
        "text": "Ол екі есе жылдам жұмыс істейді"
      },
      {
        "id": "ba103c75-ad7b-4c98-82ad-80ce253e80ec",
        "text": "Ол жадты екі есе үнемдейді"
      },
      {
        "id": "9adb58e4-576f-4ca8-821a-abe23bc2594d",
        "text": "Ол тек криптографиялық хэштерді қолданады"
      }
    ],
    "correctOptionIds": [
      "ec9df2da-92e8-43f3-96f6-aa2fc241aa29"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "c69ad934-78d1-4aa3-b806-fc94b8c82b2f",
    "subjectId": "algo",
    "text": "Жүктеме коэффициенті α болғанда, ашық адрестеу кестесінде орын бар екеніне кепілдік болуы үшін α қандай аралықта болуы тиіс?",
    "options": [
      {
        "id": "ed6f6fd7-b115-4010-b9a0-2b86f81beeec",
        "text": "0 <= α < 1"
      },
      {
        "id": "df70f63e-faf9-4f3a-a9c7-51a3c7fc6978",
        "text": "0 <= α <= 10"
      },
      {
        "id": "bb6811c4-a509-4a8e-bf5d-d6c07d5d7a82",
        "text": "α > 1"
      },
      {
        "id": "ed9d7fad-4c93-410a-9bb3-8e40d4e321f9",
        "text": "α әрқашан 0.5-тен кіші болуы керек"
      }
    ],
    "correctOptionIds": [
      "ed6f6fd7-b115-4010-b9a0-2b86f81beeec"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "88ee4f50-a79e-4dd8-85d5-4fbc65ab3d75",
    "subjectId": "algo",
    "text": "Bloom Filter құрылымында «False Positive» ықтималдығын азайту үшін не істеу керек?",
    "options": [
      {
        "id": "6fd182d8-5544-46fb-b4ca-a512bae9dd78",
        "text": "Биттік массив өлшемін (m) үлкейту және хэш функцияларының санын (k) оңтайландыру"
      },
      {
        "id": "733fc6ef-d6d5-4e21-a731-cc128e18969f",
        "text": "Элементтерді жиі өшіріп тұру"
      },
      {
        "id": "88306b97-0caf-4197-9543-13a3aa53f83d",
        "text": "Хэш функцияларының санын азайту"
      },
      {
        "id": "223b62cb-0c01-4eb8-8822-39521bd123a9",
        "text": "Тек бір ғана хэш функциясын қолдану"
      }
    ],
    "correctOptionIds": [
      "6fd182d8-5544-46fb-b4ca-a512bae9dd78"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "8f25422f-d5e4-4ec0-a294-b9d5b15e3d4c",
    "subjectId": "algo",
    "text": "Distributed Hash Table (DHT) жүйелеріндегі «Chord» немесе «Kademlia» алгоритмдерінде іздеу күрделілігі қандай болады?",
    "options": [
      {
        "id": "fa45888a-b647-4d37-adba-c2cebb3d4dbf",
        "text": "O(log N) (мұндағы N – жүйедегі түйіндер саны)"
      },
      {
        "id": "e5bdc12e-a5ac-4f04-bdcc-81f1505edf18",
        "text": "O(1)"
      },
      {
        "id": "66111982-23b3-4e21-8e05-ec9dc37049e2",
        "text": "O(N)"
      },
      {
        "id": "59bce8f6-8ea9-460f-97f3-56ae1c6f2c86",
        "text": "O(N log N)"
      }
    ],
    "correctOptionIds": [
      "fa45888a-b647-4d37-adba-c2cebb3d4dbf"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "9ba7d7d6-56e0-4458-bb37-eca333ede592",
    "subjectId": "algo",
    "text": "Екілік іздеу ағашына (BST) қарағанда хэш-кестенің басты кемшілігі неде?",
    "options": [
      {
        "id": "697f50b7-bcda-4449-ad4b-b0e644eb54f1",
        "text": "Хэш-кестеде элементтерді реттелген күйде алу (мысалы, белгілі бір диапазонда іздеу) өте қиын және тиімсіз (O(N log N) немесе O(N))"
      },
      {
        "id": "489e5b48-1245-43ef-979e-59744f4773fb",
        "text": "Іздеу орташа есеппен баяу орындалады"
      },
      {
        "id": "e874fa15-0b6a-4a0a-9e34-7f2cad86268f",
        "text": "Ол тек мәтіндік кілттермен жұмыс істейді"
      },
      {
        "id": "d985eda6-eabd-48f3-bfaf-4c23bf0c316d",
        "text": "Оған жаңа элемент қосу мүмкін емес"
      }
    ],
    "correctOptionIds": [
      "697f50b7-bcda-4449-ad4b-b0e644eb54f1"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "e9461ac6-0d83-4098-bb9d-f7339332b941",
    "subjectId": "algo",
    "text": "Неліктен std::unordered_map (хэш-кесте) іздеу операциясы үшін std::map-тан (қызыл-қара ағаш) орташа жағдайда жылдамырақ?",
    "options": [
      {
        "id": "06f73d69-0dcc-4fbd-8606-d92d99db0145",
        "text": "Өйткені std::unordered_map іздеуді O(1) уақытында, ал std::map O(log n) уақытында орындайды"
      },
      {
        "id": "77dad160-e51d-42d9-9a4d-543ac8cda09c",
        "text": "std::unordered_map жадты аз қолданады"
      },
      {
        "id": "6ada7a8a-ff02-4a26-b22a-256ac8222f6f",
        "text": "std::unordered_map reкурсия қолданбайды"
      },
      {
        "id": "60ac23bd-ce27-4282-bda7-c7e937f15abd",
        "text": "std::unordered_map элементтерді автоматты түрде сұрыптайды"
      }
    ],
    "correctOptionIds": [
      "06f73d69-0dcc-4fbd-8606-d92d99db0145"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "908d53e1-f2b5-426c-8d03-6a43ca5841e4",
    "subjectId": "algo",
    "text": "Хэш кестесінде соқтығыстарды шешудің \"Robin Hood Hashing\" (Робин Гуд хэштеуі) әдісінің негізгі идеясы қандай?",
    "options": [
      {
        "id": "55920613-7f50-40aa-ab61-f8ddeeb39305",
        "text": "Жаңа элементті қосқанда, оның бастапқы хэш ұяшығынан қашықтығы (зондтау саны) қазіргі орналасқан элементтің қашықтығынан көп болса, онымен орын алмастырады (байдан алып, кедейге береді)"
      },
      {
        "id": "f8ea5363-9abe-433d-874e-1b78bcc02178",
        "text": "Кестедегі ең үлкен элементтерді өшіреді"
      },
      {
        "id": "787b88be-4565-4cbf-8634-295c615fbf48",
        "text": "Жүктеме коэффициентін әрқашан 0.5-тен төмен ұстайды"
      },
      {
        "id": "e657d14f-036a-49f5-94a7-827ebe1d5005",
        "text": "Тек криптографиялық парольдер үшін қолданылады"
      }
    ],
    "correctOptionIds": [
      "55920613-7f50-40aa-ab61-f8ddeeb39305"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "8b44c20d-39c0-4c59-9348-d5bfbf65cb72",
    "subjectId": "algo",
    "text": "Robin Hood Hashing әдісі хэш-кестенің өнімділігін қалай жақсартады?",
    "options": [
      {
        "id": "2d06c457-bfef-4deb-b0e8-976ac09ccf36",
        "text": "Oл іздеу қадамдарының максималды санын азайтып, зондтау ұзындықтарының дисперсиясын (variance) төмендетеді"
      },
      {
        "id": "e67d1768-a8e8-4869-9ae2-3dd0a3076947",
        "text": "Жад шығынын екі есе азайтады"
      },
      {
        "id": "737aea51-6279-4090-b8c6-203b790faa1c",
        "text": "Соқтығыстарды мүлдем болдырмайды"
      },
      {
        "id": "7a905f13-fc69-4d1c-9136-3f55377c2653",
        "text": "Хэш функциясының есептелу уақытын қысқартады"
      }
    ],
    "correctOptionIds": [
      "2d06c457-bfef-4deb-b0e8-976ac09ccf36"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "5f7d7538-4928-46d3-89e3-fb07bde2b50d",
    "subjectId": "algo",
    "text": "Java-дағы Object класының барлық объектілер үшін бүтін сандық хэш-код қайтаратын стандартты әдісі қалай аталады?",
    "options": [
      {
        "id": "cbe0ee67-ea9f-4543-859a-a32762308209",
        "text": "hashCode()"
      },
      {
        "id": "086a9fe1-9cf8-4bec-bff6-5eff1d447f65",
        "text": "getHash()"
      },
      {
        "id": "8282aee4-5f7d-45d2-85ca-d0983fbbb302",
        "text": "hash()"
      },
      {
        "id": "b1f3aede-ee95-4304-92ab-2e16a217551e",
        "text": "toInteger()"
      }
    ],
    "correctOptionIds": [
      "cbe0ee67-ea9f-4543-859a-a32762308209"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "609183c1-7acc-4ada-8c9f-b26f2921f7ce",
    "subjectId": "algo",
    "text": "Python тілінде объектінің хэш-мәнін алу үшін қолданылатын кірістірілген функция қалай аталады?",
    "options": [
      {
        "id": "f54858cd-69d8-4f43-9807-7600c389d917",
        "text": "hash()"
      },
      {
        "id": "5cda7c63-c1ee-486b-a7f8-700422317a15",
        "text": "hashCode()"
      },
      {
        "id": "90c228ff-0180-4e70-a48d-4ef6f30926c0",
        "text": "md5()"
      },
      {
        "id": "123f8308-cc2d-4b41-9f60-4be39e5c9bf0",
        "text": "id()"
      }
    ],
    "correctOptionIds": [
      "f54858cd-69d8-4f43-9807-7600c389d917"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "136af242-201b-4f1b-ae7c-47336ba5942d",
    "subjectId": "algo",
    "text": "Хэш-кестелерде соқтығыс жиілігін барынша азайту үшін хэш функциясына қойылатын ең басты талап қандай?",
    "options": [
      {
        "id": "96545310-5c52-4558-b241-bb6f4dc2f208",
        "text": "Кілттерді бүкіл хэш-кесте бойынша барынша біркелкі тарату (Uniform distribution)"
      },
      {
        "id": "f3c76238-2860-400b-ba16-8ae2e1307e9e",
        "text": "Хэш мәндерін тек жұп сандар етіп шығару"
      },
      {
        "id": "e4741ad9-d194-42ac-acb8-4dc341656fb7",
        "text": "Хэш мәндерін өсу ретімен реттеу"
      },
      {
        "id": "683b1e2e-9bbe-46b9-9d6c-27fe90d30629",
        "text": "Тек 32-биттік сандарды қолдану"
      }
    ],
    "correctOptionIds": [
      "96545310-5c52-4558-b241-bb6f4dc2f208"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "9fc2a04e-253c-4b11-b009-64fdeaf11712",
    "subjectId": "algo",
    "text": "Consistent Hashing-те серверлерді өшірген кезде оның кілттері қайда көшіріледі?",
    "options": [
      {
        "id": "6c228631-3d1f-4123-8cea-f83695676658",
        "text": "Хэш сақинасы бойымен келесі тұрған белсенді серверге"
      },
      {
        "id": "3a1e12ec-cba0-46b6-827b-6ad7de720342",
        "text": "Желідегі ең үлкен серверге"
      },
      {
        "id": "0fdcad82-09a0-49c0-9035-10dcb574844f",
        "text": "Бірінші серверге"
      },
      {
        "id": "c4e14104-7fe1-42bb-8f6a-3218a27c4f4f",
        "text": "Ешқайда көшірілмейді, жойылады"
      }
    ],
    "correctOptionIds": [
      "6c228631-3d1f-4123-8cea-f83695676658"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "6c2143e3-f0dc-453d-b331-fc2e1ce55999",
    "subjectId": "algo",
    "text": "Хэш-кестелердегі \"ашық адрестеу\" (open addressing) мен \"бөлек тізбектер\" (separate chaining) әдістерінің негізгі айырмашылығы неде?",
    "options": [
      {
        "id": "23fa142c-2283-4d68-ab53-c5b535e98d33",
        "text": "Ашық адрестеуде барлық элементтер кестенің өз ұяшықтарында сақталады, ал тізбектеуде кесте сыртындағы байланысқан тізімдер қолданылады"
      },
      {
        "id": "2f0f1163-8026-444a-b5bc-e8b4e847571b",
        "text": "Ашық адрестеу тек сандарды, тізбектеу тек мәтіндерді сақтайды"
      },
      {
        "id": "7c8840d9-5615-475b-a047-0a3b40e10281",
        "text": "Тізбектеу әдісінде соқтығыс болмайды"
      },
      {
        "id": "0822440f-04f7-401e-866f-ab55304822cf",
        "text": "Ашық адрестеу әрқашан баяу жұмыс істейді"
      }
    ],
    "correctOptionIds": [
      "23fa142c-2283-4d68-ab53-c5b535e98d33"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "86b38184-709a-4dda-95c1-38fb4181cdda",
    "subjectId": "algo",
    "text": "Хэш кестесінің сыйымдылығы m=8 және h(k) = k % 8 функциясы қолданылады. Сызықтық зондтау әдісімен 5, 13, 21 кілттерін кезекпен қосқанда 21 кілті қай ұяшыққа түседі?",
    "options": [
      {
        "id": "6368f760-bdbb-44a0-a080-76f8242ab9c1",
        "text": "7-ұяшыққа (5 -> 5-ке, 13 -> 6-ға, 21 -> 7-ге орналасады)"
      },
      {
        "id": "236b6e32-5577-47d8-818f-8245522edb9f",
        "text": "5-ұяшыққа"
      },
      {
        "id": "fedfefe0-17cc-4809-9a28-1e3424ffeab1",
        "text": "6-ұяшыққа"
      },
      {
        "id": "0b620472-f64c-433d-a26d-9b69c08d3e99",
        "text": "0-ұяшыққа"
      }
    ],
    "correctOptionIds": [
      "6368f760-bdbb-44a0-a080-76f8242ab9c1"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  },
  {
    "id": "55726f42-9770-4201-9765-21dde602753c",
    "subjectId": "algo",
    "text": "Бөлек тізбектер әдісінде ең нашар іздеу уақытын O(n)-нен O(log n)-ге азайту үшін Java 8-ден бастап HashMap-та қандай шарт орындалуы керек?",
    "options": [
      {
        "id": "801b7877-8216-4e64-bf53-31c26098a647",
        "text": "Бір ұяшықтағы элементтер саны белгілі бір шектен (TREEIFY_THRESHOLD = 8) асқанда байланысқан тізім бинарлық іздеу ағашына ауыстырылады"
      },
      {
        "id": "570126ac-cdaf-4533-945b-0c8c45bca738",
        "text": "Жүктеме коэффициенті 1-ден асуы керек"
      },
      {
        "id": "0a109301-e2f2-4001-8a03-3292fe2c4321",
        "text": "Хэш функциясы SHA-256-ға ауысуы керек"
      },
      {
        "id": "599753bc-b15d-4a28-b15a-28efabfd8c6a",
        "text": "Кесте өлшемі екі есе азаюы керек"
      }
    ],
    "correctOptionIds": [
      "801b7877-8216-4e64-bf53-31c26098a647"
    ],
    "type": "SINGLE",
    "topic": "Хэш кестелері және хэш функциялары",
    "difficulty": "medium"
  }
] as Question[];
