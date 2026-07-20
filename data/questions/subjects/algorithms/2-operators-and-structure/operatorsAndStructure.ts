import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// algo / Алгоритмдік тіл операторлары. Бағдарлама құрылымы
export const algo2OperatorsAndStructureQuestions : Question[] = [
  {
    id: "algo-t02-b01",
    subjectId: SubjectId.ALGO,
    text: "Берілген код нәтижесі неге тең? int x = 5; x++; cout << x;",
    options: [
      {
        id: "algo-t02-b01-op1",
        text: "6"
      },
      {
        id: "algo-t02-b01-op2",
        text: "4"
      },
      {
        id: "algo-t02-b01-op3",
        text: "5"
      },
      {
        id: "algo-t02-b01-op4",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "algo-t02-b01-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b02",
    subjectId: SubjectId.ALGO,
    text: "Берілген код нәтижесі неге тең? int a = 10, b = 3; cout << a % b;",
    options: [
      {
        id: "algo-t02-b02-op1",
        text: "10"
      },
      {
        id: "algo-t02-b02-op2",
        text: "1"
      },
      {
        id: "algo-t02-b02-op3",
        text: "3"
      },
      {
        id: "algo-t02-b02-op4",
        text: "0"
      }
    ],
    correctOptionIds: [
      "algo-t02-b02-op2"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b03",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі '==' операторы не істейді?",
    options: [
      {
        id: "algo-t02-b03-op1",
        text: "Мән меншіктейді"
      },
      {
        id: "algo-t02-b03-op2",
        text: "Қосады"
      },
      {
        id: "algo-t02-b03-op3",
        text: "Теңдікті салыстырады"
      },
      {
        id: "algo-t02-b03-op4",
        text: "Алады"
      }
    ],
    correctOptionIds: [
      "algo-t02-b03-op3"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b04",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі логикалық \"ЖӘНЕ\" (AND) операторы қалай белгіленеді?",
    options: [
      {
        id: "algo-t02-b04-op1",
        text: "&&"
      },
      {
        id: "algo-t02-b04-op2",
        text: "||"
      },
      {
        id: "algo-t02-b04-op3",
        text: "!"
      },
      {
        id: "algo-t02-b04-op4",
        text: "&"
      }
    ],
    correctOptionIds: [
      "algo-t02-b04-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b05",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі логикалық \"НЕМЕСЕ\" (OR) операторы қалай белгіленеді?",
    options: [
      {
        id: "algo-t02-b05-op1",
        text: "||"
      },
      {
        id: "algo-t02-b05-op2",
        text: "&&"
      },
      {
        id: "algo-t02-b05-op3",
        text: "!"
      },
      {
        id: "algo-t02-b05-op4",
        text: "|"
      }
    ],
    correctOptionIds: [
      "algo-t02-b05-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b06",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде қалдықты табу операторы (%) қандай сандармен ғана жұмыс істейді?",
    options: [
      {
        id: "algo-t02-b06-op1",
        text: "Бүтін сандармен (integer)"
      },
      {
        id: "algo-t02-b06-op2",
        text: "Нақты сандармен (float/double)"
      },
      {
        id: "algo-t02-b06-op3",
        text: "Тек оң сандармен"
      },
      {
        id: "algo-t02-b06-op4",
        text: "Кез келген сандармен"
      }
    ],
    correctOptionIds: [
      "algo-t02-b06-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b07",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі қысқартылған меншіктеу операторы x += 5 нені білдіреді?",
    options: [
      {
        id: "algo-t02-b07-op1",
        text: "x = x + 5"
      },
      {
        id: "algo-t02-b07-op2",
        text: "x = 5"
      },
      {
        id: "algo-t02-b07-op3",
        text: "x + 5 = x"
      },
      {
        id: "algo-t02-b07-op4",
        text: "x++ 5"
      }
    ],
    correctOptionIds: [
      "algo-t02-b07-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b08",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі логикалық теріске шығару (NOT) операторы қалай жазылады?",
    options: [
      {
        id: "algo-t02-b08-op1",
        text: "!"
      },
      {
        id: "algo-t02-b08-op2",
        text: "~"
      },
      {
        id: "algo-t02-b08-op3",
        text: "NOT"
      },
      {
        id: "algo-t02-b08-op4",
        text: "!="
      }
    ],
    correctOptionIds: [
      "algo-t02-b08-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b09",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде x = 10; y = ++x; орындалғаннан кейін y-тің мәні неге тең болады?",
    options: [
      {
        id: "algo-t02-b09-op1",
        text: "11"
      },
      {
        id: "algo-t02-b09-op2",
        text: "10"
      },
      {
        id: "algo-t02-b09-op3",
        text: "12"
      },
      {
        id: "algo-t02-b09-op4",
        text: "9"
      }
    ],
    correctOptionIds: [
      "algo-t02-b09-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b10",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде x = 10; y = x++; орындалғаннан кейін y-тің мәні неге тең болады?",
    options: [
      {
        id: "algo-t02-b10-op1",
        text: "10"
      },
      {
        id: "algo-t02-b10-op2",
        text: "11"
      },
      {
        id: "algo-t02-b10-op3",
        text: "12"
      },
      {
        id: "algo-t02-b10-op4",
        text: "9"
      }
    ],
    correctOptionIds: [
      "algo-t02-b10-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b11",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі қысқартылған шартты оператор (тернарлық оператор) қалай жазылады?",
    options: [
      {
        id: "algo-t02-b11-op1",
        text: "шарт ? мән1 : мән2"
      },
      {
        id: "algo-t02-b11-op2",
        text: "шарт : мән1 ? мән2"
      },
      {
        id: "algo-t02-b11-op3",
        text: "шарт ? мән1 ? мән2"
      },
      {
        id: "algo-t02-b11-op4",
        text: "if(шарт) ? мән1"
      }
    ],
    correctOptionIds: [
      "algo-t02-b11-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b12",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі разрядтық (bitwise) ЖӘНЕ операторы қалай белгіленеді?",
    options: [
      {
        id: "algo-t02-b12-op1",
        text: "& (жалғыз амперсанд)"
      },
      {
        id: "algo-t02-b12-op2",
        text: "&&"
      },
      {
        id: "algo-t02-b12-op3",
        text: "|"
      },
      {
        id: "algo-t02-b12-op4",
        text: "||"
      }
    ],
    correctOptionIds: [
      "algo-t02-b12-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b13",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі разрядтық (bitwise) НЕМЕСЕ операторы қалай белгіленеді?",
    options: [
      {
        id: "algo-t02-b13-op1",
        text: "| (жалғыз тік сызықша)"
      },
      {
        id: "algo-t02-b13-op2",
        text: "||"
      },
      {
        id: "algo-t02-b13-op3",
        text: "&"
      },
      {
        id: "algo-t02-b13-op4",
        text: "&&"
      }
    ],
    correctOptionIds: [
      "algo-t02-b13-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b14",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде солға ығысу операторы (<<) бүтін санды нешеге көбейткенмен тең?",
    options: [
      {
        id: "algo-t02-b14-op1",
        text: "2^n (ығысу қадамы санына сәйкес дәрежесіне)"
      },
      {
        id: "algo-t02-b14-op2",
        text: "2-ге ғана"
      },
      {
        id: "algo-t02-b14-op3",
        text: "n-ге ғана"
      },
      {
        id: "algo-t02-b14-op4",
        text: "10^n-ге"
      }
    ],
    correctOptionIds: [
      "algo-t02-b14-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b15",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде оңға ығысу операторы (>>) бүтін санды нешеге бөлгенмен тең?",
    options: [
      {
        id: "algo-t02-b15-op1",
        text: "2^n (ығысу қадамы санына сәйкес дәрежесіне бүтін санмен бөлу)"
      },
      {
        id: "algo-t02-b15-op2",
        text: "2-ге"
      },
      {
        id: "algo-t02-b15-op3",
        text: "n-ге"
      },
      {
        id: "algo-t02-b15-op4",
        text: "10^n-ге"
      }
    ],
    correctOptionIds: [
      "algo-t02-b15-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "24f8d696-8a43-4c1f-b160-76eb591817a7",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `switch` операторының жақша ішіндегі өрнегі (expression) қандай типте болуы тиіс?",
    options: [
      {
        id: "b6a69de1-0f6e-4dfb-8443-8f62d5288d9e",
        text: "Бүтін сандық немесе ауқымды (integral or enum) тип"
      },
      {
        id: "1fa5dd64-f2c6-424d-b0d9-b5a1dfff480b",
        text: "Кез келген жылжымалы үтірлі (float/double) тип"
      },
      {
        id: "58ed7136-44de-4e57-8dae-dce8ec2ac3c3",
        text: "Мәтіндік жол (std::string)"
      },
      {
        id: "e2c9c87a-e5a5-4289-9edc-37dd3af9b018",
        text: "Логикалық (bool) қана"
      }
    ],
    correctOptionIds: [
      "b6a69de1-0f6e-4dfb-8443-8f62d5288d9e"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b16",
    subjectId: SubjectId.ALGO,
    text: "`switch-case` құрылымында `break` операторы қойылмаса не орын алады?",
    options: [
      {
        id: "algo-t02-b16-op1",
        text: "Бағдарлама келесі `case` блоктарындағы кодтарды `break` кездескенше немесе switch аяқталғанша ретімен орындайды (fall-through)"
      },
      {
        id: "algo-t02-b16-op2",
        text: "Компиляция қатесі туындайды"
      },
      {
        id: "algo-t02-b16-op3",
        text: "Бағдарлама тек `default` блогына өтеді"
      },
      {
        id: "algo-t02-b16-op4",
        text: "Бағдарлама шексіз циклге түседі"
      }
    ],
    correctOptionIds: [
      "algo-t02-b16-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "63054086-ad45-45a7-b5e2-95cbc3e8bbf3",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі циклдердің қайсысы шарттың ақиқат немесе жалғандығына қарамастан кем дегенде бір рет орындалады?",
    options: [
      {
        id: "a1247f87-dcb2-4cf2-a18c-ec5276214ff7",
        text: "do-while циклі"
      },
      {
        id: "d93e8e42-79ae-4614-b6b8-86152e34d264",
        text: "while циклі"
      },
      {
        id: "ed5bb457-be21-435a-b469-d543b446f7d7",
        text: "for циклі"
      },
      {
        id: "996ea3d1-9f67-4cea-9a28-02157563e888",
        text: "foreach циклі"
      }
    ],
    correctOptionIds: [
      "a1247f87-dcb2-4cf2-a18c-ec5276214ff7"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b17",
    subjectId: SubjectId.ALGO,
    text: "Цикл денесіндегі `continue` операторының негізгі қызметі қандай?",
    options: [
      {
        id: "algo-t02-b17-op1",
        text: "Циклдың ағымдағы итерациясын бірден тоқтатып, келесі итерацияға (шартты тексеруге) көшу"
      },
      {
        id: "algo-t02-b17-op2",
        text: "Циклдың жұмысын толық тоқтатып, одан шығу"
      },
      {
        id: "algo-t02-b17-op3",
        text: "Бағдарламаны басынан бастап іске қосу"
      },
      {
        id: "algo-t02-b17-op4",
        text: "Айнымалының мәнін нөлге теңестіру"
      }
    ],
    correctOptionIds: [
      "algo-t02-b17-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b18",
    subjectId: SubjectId.ALGO,
    text: "Цикл денесіндегі `break` операторының негізгі қызметі қандай?",
    options: [
      {
        id: "algo-t02-b18-op1",
        text: "Циклдың жұмысын толық тоқтатып, цикл блоктарынан бірден шығу"
      },
      {
        id: "algo-t02-b18-op2",
        text: "Келесі итерацияға өту"
      },
      {
        id: "algo-t02-b18-op3",
        text: "Функциядан мән қайтару"
      },
      {
        id: "algo-t02-b18-op4",
        text: "Бағдарламада қателік тудыру"
      }
    ],
    correctOptionIds: [
      "algo-t02-b18-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f0d79e7a-e761-4edd-ba1d-098b270ece43",
    subjectId: SubjectId.ALGO,
    text: "Логикалық ЖӘНЕ (`&&`) операторымен жұмыс істегенде \"қысқа тұйықталу\" (short-circuit evaluation) ережесі қалай жүзеге асады?",
    options: [
      {
        id: "58690ff2-479d-4181-89c5-16cc43736a23",
        text: "Егер бірінші өрнек жалған (false) болса, екінші өрнек мүлдем есептелмейді, өйткені жалпы нәтиже бәрібір false болады"
      },
      {
        id: "f930fd93-748c-4567-8c0f-8ea177fa44ba",
        text: "Бірінші өрнекке қарамастан екі өрнек те әрқашан есептеледі"
      },
      {
        id: "e3fc53d6-dcac-4420-94f9-6a638112e658",
        text: "Егер бірінші өрнек ақиқат (true) болса, екінші өрнек есептелмейді"
      },
      {
        id: "890d7480-f668-4fc2-be4f-3fd7b625dd40",
        text: "Екі өрнектің де орындалу уақыты бірдей болады"
      }
    ],
    correctOptionIds: [
      "58690ff2-479d-4181-89c5-16cc43736a23"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "4e10307e-875d-416e-acd9-9af8beeebd50",
    subjectId: SubjectId.ALGO,
    text: "Логикалық НЕМЕСЕ (`||`) операторымен жұмыс істегенде \"қысқа тұйықталу\" (short-circuit evaluation) ережесі қалай жүзеге асады?",
    options: [
      {
        id: "da3b0709-460d-44c9-9b97-41ea19f1ba8d",
        text: "Егер бірінші өрнек ақиқат (true) болса, екінші өрнек есептелмейді, өйткені жалпы нәтиже бәрібір true болады"
      },
      {
        id: "b3c4671e-0056-454c-b80d-9285249e8a2d",
        text: "Бірінші өрнек жалған (false) болса, екінші өрнек есептелмейді"
      },
      {
        id: "a9c4614b-de2f-4ebe-accf-53e214cde0c0",
        text: "Екі өрнек те кез келген жағдайда толық есептеледі"
      },
      {
        id: "bf01d684-6bdb-4f5e-85fb-fe0b420428a9",
        text: "Жүйеде қателік туындауына әкеледі"
      }
    ],
    correctOptionIds: [
      "da3b0709-460d-44c9-9b97-41ea19f1ba8d"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a6810dcc-4658-4bd5-a46c-17a6d2bc9425",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде белгіленген орынға (label) бағдарламаның орындалу ағынын бірден көшіру үшін қандай оператор қолданылады?",
    options: [
      {
        id: "cfb5b783-c8a8-4b40-b4ac-087efad85716",
        text: "goto"
      },
      {
        id: "b54facb4-a030-4122-9638-269e1e8c1919",
        text: "jump"
      },
      {
        id: "41b551b3-b736-45a6-b130-0e670f7d4da0",
        text: "switch"
      },
      {
        id: "bb32ab7e-d267-43ac-9b11-4304e93d8306",
        text: "return"
      }
    ],
    correctOptionIds: [
      "cfb5b783-c8a8-4b40-b4ac-087efad85716"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9979d6af-43a4-4f17-9592-67534c84aaf7",
    subjectId: SubjectId.ALGO,
    text: "Блок ішінде жарияланған айнымалы сыртқы блоктардағы дәл сондай атауы бар айнымалыны уақытша жауып тұрса, бұл құбылыс қалай аталады?",
    options: [
      {
        id: "c3219d9c-eb48-4c22-9ed9-2daa6081f3ed",
        text: "Айнымалының көлеңкеленуі (variable shadowing)"
      },
      {
        id: "4199b497-088f-40b4-a16c-76904188f621",
        text: "Айнымалының қайта анықталуы (overriding)"
      },
      {
        id: "f9d80298-1fb0-496a-a7b4-371578c98323",
        text: "Айнымалының шамадан тыс жүктелуі (overloading)"
      },
      {
        id: "4f9166db-7895-4553-baa9-d09b97482045",
        text: "Айнымалының жаһандануы"
      }
    ],
    correctOptionIds: [
      "c3219d9c-eb48-4c22-9ed9-2daa6081f3ed"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b19",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндеге блок (`{ }`) нені анықтайды?",
    options: [
      {
        id: "algo-t02-b19-op1",
        text: "Локальді айнымалылардың қолданылу аясын (scope) және өмір сүру уақытын"
      },
      {
        id: "algo-t02-b19-op2",
        text: "Жаңа деректер типін"
      },
      {
        id: "algo-t02-b19-op3",
        text: "Функцияның қайтаратын мәнін"
      },
      {
        id: "algo-t02-b19-op4",
        text: "Динамикалық жадтың өлшемін"
      }
    ],
    correctOptionIds: [
      "algo-t02-b19-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b20",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін экранға не шығады?\n`int x = 10; { int x = 5; } cout << x;`",
    options: [
      {
        id: "algo-t02-b20-op1",
        text: "10"
      },
      {
        id: "algo-t02-b20-op2",
        text: "5"
      },
      {
        id: "algo-t02-b20-op3",
        text: "15"
      },
      {
        id: "algo-t02-b20-op4",
        text: "Компиляция қатесі"
      }
    ],
    correctOptionIds: [
      "algo-t02-b20-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "77dcacdf-23e9-45ce-a2ef-e796567edd91",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін экранға не шығады?\n`int i = 0; for (; i < 3; i++) {} cout << i;`",
    options: [
      {
        id: "3466988e-782f-4c5b-9402-2d6aae4f23af",
        text: "3"
      },
      {
        id: "cd053a98-43bf-484d-8b87-51977f658599",
        text: "2"
      },
      {
        id: "963fcea0-5f3e-488e-af82-98cb37d63d88",
        text: "0"
      },
      {
        id: "596928a0-4267-48db-bc68-3938b2283cc1",
        text: "4"
      }
    ],
    correctOptionIds: [
      "3466988e-782f-4c5b-9402-2d6aae4f23af"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b21",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `main` функциясынан `return 0;` мәнін қайтару операциялық жүйеге нені білдіреді?",
    options: [
      {
        id: "algo-t02-b21-op1",
        text: "Бағдарламаның сәтті, қатесіз аяқталғанын (success status)"
      },
      {
        id: "algo-t02-b21-op2",
        text: "Бағдарламаның қатемен аяқталғанын"
      },
      {
        id: "algo-t02-b21-op3",
        text: "Бағдарламаның жадыдан толық өшірілмегенін"
      },
      {
        id: "algo-t02-b21-op4",
        text: "Бағдарламаның қайта іске қосылуын"
      }
    ],
    correctOptionIds: [
      "algo-t02-b21-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b22",
    subjectId: SubjectId.ALGO,
    text: "`main` функциясының параметрлеріндегі `int argc` нені білдіреді?",
    options: [
      {
        id: "algo-t02-b22-op1",
        text: "Командалық жолдан бағдарламаға берілген аргументтердің жалпы санын (argument count)"
      },
      {
        id: "algo-t02-b22-op2",
        text: "Сілтемелердің санын"
      },
      {
        id: "algo-t02-b22-op3",
        text: "Компилятор баптауларының санын"
      },
      {
        id: "algo-t02-b22-op4",
        text: "Бағдарламаның орындалу уақытын секундпен"
      }
    ],
    correctOptionIds: [
      "algo-t02-b22-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b23",
    subjectId: SubjectId.ALGO,
    text: "`main` функциясының параметрлеріндегі `char* argv[]` нені білдіреді?",
    options: [
      {
        id: "algo-t02-b23-op1",
        text: "Командалық жол аргументтерінің мәтіндік жолдарына нұсқауыштар массивін (argument vector)"
      },
      {
        id: "algo-t02-b23-op2",
        text: "Жүйелік файлдардың тізімін"
      },
      {
        id: "algo-t02-b23-op3",
        text: "Айнымалылар атауларының жиынтығын"
      },
      {
        id: "algo-t02-b23-op4",
        text: "Логикалық массивті"
      }
    ],
    correctOptionIds: [
      "algo-t02-b23-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b24",
    subjectId: SubjectId.ALGO,
    text: "`argv[0]` элементінде әдетте қандай ақпарат сақталады?",
    options: [
      {
        id: "algo-t02-b24-op1",
        text: "Іске қосылған орындалатын бағдарлама файлының атауы немесе оған баратын жол"
      },
      {
        id: "algo-t02-b24-op2",
        text: "Бірінші пайдаланушы енгізген параметр"
      },
      {
        id: "algo-t02-b24-op3",
        text: "Жүйенің ағымдағы уақыты"
      },
      {
        id: "algo-t02-b24-op4",
        text: "Орындалу кезіндегі қателіктер коды"
      }
    ],
    correctOptionIds: [
      "algo-t02-b24-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b25",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі меншіктеу операторларының ассоциативтілігі (орындалу бағыты) қандай?",
    options: [
      {
        id: "algo-t02-b25-op1",
        text: "Оңнан солға қарай (Right-to-Left)"
      },
      {
        id: "algo-t02-b25-op2",
        text: "Солдан оңға қарай (Left-to-Right)"
      },
      {
        id: "algo-t02-b25-op3",
        text: "Тек ортасынан бастап орындалады"
      },
      {
        id: "algo-t02-b25-op4",
        text: "Ассоциативтілігі жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t02-b25-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b26",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі арифметикалық амалдардың (+, -, *, /) орындалу бағыты (ассоциативтілігі) қандай?",
    options: [
      {
        id: "algo-t02-b26-op1",
        text: "Солдан оңға қарай (Left-to-Right)"
      },
      {
        id: "algo-t02-b26-op2",
        text: "Оңнан солға қарай (Right-to-Left)"
      },
      {
        id: "algo-t02-b26-op3",
        text: "Орындалу бағыты компиляторға тәуелді"
      },
      {
        id: "algo-t02-b26-op4",
        text: "Ешқандай бағыты жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t02-b26-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a999c968-1cd3-4bd8-be01-31f5cc6f9d8a",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін `a` мен `b` мәндері нешеге тең болады?\n`int a, b; a = b = 5;`",
    options: [
      {
        id: "073c8633-4735-4fe9-bfb9-a5ce2d263c44",
        text: "a = 5, b = 5"
      },
      {
        id: "982c0038-fbf7-452f-9cfe-a440595b7615",
        text: "a = 0, b = 5"
      },
      {
        id: "e4c879fd-64f7-40e9-80d1-2b214360178d",
        text: "Компиляция қатесі"
      },
      {
        id: "9f65e86e-8c84-4bc3-bd78-07f4e629b84a",
        text: "Мәндері белгісіз болып қалады"
      }
    ],
    correctOptionIds: [
      "073c8633-4735-4fe9-bfb9-a5ce2d263c44"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b27",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `if (x = 0)` шарты орындалғанда не болады?",
    options: [
      {
        id: "algo-t02-b27-op1",
        text: "Шарт әрқашан жалған (false) деп бағаланады, өйткені меншіктеу нәтижесі 0 болады"
      },
      {
        id: "algo-t02-b27-op2",
        text: "Компиляция қатесі шығады"
      },
      {
        id: "algo-t02-b27-op3",
        text: "Шарт әрқашан ақиқат (true) болады"
      },
      {
        id: "algo-t02-b27-op4",
        text: "x-ке кездейсоқ мән меншіктеледі"
      }
    ],
    correctOptionIds: [
      "algo-t02-b27-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b28",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `if (x = 5)` шарты орындалғанда не болады?",
    options: [
      {
        id: "algo-t02-b28-op1",
        text: "Шарт әрқашан ақиқат (true) деп бағаланады, өйткені меншіктеу нәтижесі 5 (нөлге тең емес)"
      },
      {
        id: "algo-t02-b28-op2",
        text: "Компиляция қатесі шығады"
      },
      {
        id: "algo-t02-b28-op3",
        text: "Шарт әрқашан жалған болады"
      },
      {
        id: "algo-t02-b28-op4",
        text: "Шарт тексерілмей өтіп кетеді"
      }
    ],
    correctOptionIds: [
      "algo-t02-b28-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b29",
    subjectId: SubjectId.ALGO,
    text: "L-value (сол жақ мән) және R-value (оң жақ мән) арасындағы басты айырмашылық қандай?",
    options: [
      {
        id: "algo-t02-b29-op1",
        text: "L-value жадта нақты анықталған мекенжайға ие объектіні білдіреді, ал R-value уақытша мәнді білдіреді"
      },
      {
        id: "algo-t02-b29-op2",
        text: "R-value әрқашан тұрақты (const) болады"
      },
      {
        id: "algo-t02-b29-op3",
        text: "L-value тек функция ішінде қолданылады"
      },
      {
        id: "algo-t02-b29-op4",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t02-b29-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b30",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі өрнектердың қайсысы C++ тілінде дұрыс L-value болып табылады?",
    options: [
      {
        id: "algo-t02-b30-op1",
        text: "Айнымалы атауы (мысалы, `x`)"
      },
      {
        id: "algo-t02-b30-op2",
        text: "Сандық литерал (мысалы, `10`)"
      },
      {
        id: "algo-t02-b30-op3",
        text: "Екі санның қосындысы (`a + b`)"
      },
      {
        id: "algo-t02-b30-op4",
        text: "Функцияның мән бойынша қайтарған уақытша нәтижесі"
      }
    ],
    correctOptionIds: [
      "algo-t02-b30-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "4bd0dc2d-7b2e-421d-b2e0-963628b49133",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде үтір операторымен біріктірілген `x = (a = 3, b = 4, a + b);` өрнегі орындалғаннан кейін `x` мәні нешеге тең болады?",
    options: [
      {
        id: "8cb551f8-0f36-466d-b9b1-86234b8f7eac",
        text: "7"
      },
      {
        id: "00720686-e7f1-42a7-ac06-e1cb24abb28c",
        text: "3"
      },
      {
        id: "7f8240e0-c3e0-4061-8de8-8f20cda0bab2",
        text: "4"
      },
      {
        id: "00ce04d5-c8e0-4fa2-aa1c-d66215b50c62",
        text: "1"
      }
    ],
    correctOptionIds: [
      "8cb551f8-0f36-466d-b9b1-86234b8f7eac"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b31",
    subjectId: SubjectId.ALGO,
    text: "`switch` операторының ішіндегі `default` блогы міндетті ме?",
    options: [
      {
        id: "algo-t02-b31-op1",
        text: "Міндетті емес, бірақ ешбір case шартқа сәйкес келмеген жағдайды өңдеу үшін жазылуы ұсынылады"
      },
      {
        id: "algo-t02-b31-op2",
        text: "Әрқашан міндетті, онсыз компиляция қатесі болады"
      },
      {
        id: "algo-t02-b31-op3",
        text: "Тек цикл ішінде қолданғанда ғана міндетті"
      },
      {
        id: "algo-t02-b31-op4",
        text: "Тек оң сандармен жұмыс істегенде міндетті"
      }
    ],
    correctOptionIds: [
      "algo-t02-b31-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d657af09-0be7-4b0a-8067-441df040781f",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде `for` циклінің `for (инициализация; шарт; итерация)` құрылымында кез келген бөлігін бос қалдыруға бола ма?",
    options: [
      {
        id: "476ba868-c573-4063-927b-0b5219ec5012",
        text: "Иә, кез келген бөлігін немесе тіпті барлық бөлігін бос қалдыруға болады (мысалы, `for(;;)` шексіз циклі)"
      },
      {
        id: "d3c56b34-a436-47d0-ad21-b0245a01b266",
        text: "Жоқ, барлық үш бөлік те міндетті түрде жазылуы тиіс"
      },
      {
        id: "3b35b00f-1534-4a4f-90f1-12e11fa378a3",
        text: "Тек шарт бөлігін ғана қалдыруға болады"
      },
      {
        id: "6b6dbc8d-446f-4ef0-873f-670cf14e1cbd",
        text: "Тек итерация бөлігін ғана бос қалдыруға болады"
      }
    ],
    correctOptionIds: [
      "476ba868-c573-4063-927b-0b5219ec5012"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "792ee04b-e24a-4a15-8de3-bb01301996f6",
    subjectId: SubjectId.ALGO,
    text: "C++11 стандартында енгізілген Range-based `for` циклі (мысалы, `for (int x : arr)`) не үшін қолданылады?",
    options: [
      {
        id: "77f061ac-e32f-4a4f-865b-4f539db844be",
        text: "Контейнер немесе массив элементтерін басынан аяғына дейін жеңіл әрі қауіпсіз түрде толық аралап шығу үшін"
      },
      {
        id: "456597f8-d5bd-4399-9486-a2b2a6a47e35",
        text: "Шексіз цикл құру үшін"
      },
      {
        id: "6f53fd69-de79-4a7c-a515-50b15914ef4e",
        text: "Екіөлшемді массивтің тек диагональдарын оқу үшін"
      },
      {
        id: "7873bc6d-3f47-4ec9-bb23-e46236b4c097",
        text: "Тек динамикалық жадты тазарту үшін"
      }
    ],
    correctOptionIds: [
      "77f061ac-e32f-4a4f-865b-4f539db844be"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "01388e79-5aad-4c22-a1f4-04e533c986bc",
    subjectId: SubjectId.ALGO,
    text: "Range-based `for` циклінде элементтерді көшірмей, тікелей өзгерту үшін элемент айнымалысын қалай жариялау керек?",
    options: [
      {
        id: "aab90a0d-4330-45dd-9b59-a39bbcd53bac",
        text: "Сілтеме ретінде (мысалы, `for (auto &x : arr)`)"
      },
      {
        id: "b0387525-59f0-42b9-8329-cdcab8df5406",
        text: "Тұрақты ретінде (мысалы, `for (const auto x : arr)`)"
      },
      {
        id: "71e7df7d-1372-46e9-ae03-a0d564bd6aaf",
        text: "Нұсқауыш ретінде (мысалы, `for (auto *x : arr)`)"
      },
      {
        id: "56e61d16-3c82-4fc1-987a-6d015882ae93",
        text: "Қалыпты айнымалы ретінде (`for (auto x : arr)`)"
      }
    ],
    correctOptionIds: [
      "aab90a0d-4330-45dd-9b59-a39bbcd53bac"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b32",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `goto` операторының ең үлкен кемшілігі қандай?",
    options: [
      {
        id: "algo-t02-b32-op1",
        text: "Бағдарламаның құрылымы мен қисынын бұзып, кодты оқуды қиындатады (\"кеспе код\" немесе spaghetti code)"
      },
      {
        id: "algo-t02-b32-op2",
        text: "Бағдарламаның жадын тез толтырады"
      },
      {
        id: "algo-t02-b32-op3",
        text: "Тек 32-биттік жүйелерде жұмыс істейді"
      },
      {
        id: "algo-t02-b32-op4",
        text: "Тек шағын циклдерде ғана жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "algo-t02-b32-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6fff96c5-3de0-44b2-a6df-ff0f645e2873",
    subjectId: SubjectId.ALGO,
    text: "Берілген кодтың нәтижесі қандай болады?\n`int x = 5; if (x > 3) cout << \"A\"; else if (x > 4) cout << \"B\";`",
    options: [
      {
        id: "ddd9d360-2440-4e43-bcd4-f12c8f0d8e6c",
        text: "A"
      },
      {
        id: "48d4b4cf-04b1-449b-a6a9-ffb643fc9bed",
        text: "AB"
      },
      {
        id: "8d648ce7-b876-459b-9a52-cca0483d1677",
        text: "B"
      },
      {
        id: "a520186c-cf93-4d5d-94aa-704123ff3778",
        text: "Ештеңе шықпайды"
      }
    ],
    correctOptionIds: [
      "ddd9d360-2440-4e43-bcd4-f12c8f0d8e6c"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b33",
    subjectId: SubjectId.ALGO,
    text: "Бағдарламаның сызықтық орындалу бағытын өзгертетін операторлар қалай аталады?",
    options: [
      {
        id: "algo-t02-b33-op1",
        text: "Басқару операторлары (Control flow statements / Selection / Iteration)"
      },
      {
        id: "algo-t02-b33-op2",
        text: "Сызықтық операторлар"
      },
      {
        id: "algo-t02-b33-op3",
        text: "Арифметикалық операторлар"
      },
      {
        id: "algo-t02-b33-op4",
        text: "Препроцессорлық директивалар"
      }
    ],
    correctOptionIds: [
      "algo-t02-b33-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6fc3256e-4244-4b3e-8c24-88173c3be05b",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `switch` құрылымында ешбір `case` мәні сәйкес келмеген жағдайда орындалатын блок қалай аталады?",
    options: [
      {
        id: "0acf3b0e-b39e-4f30-bbed-33815bb31f28",
        text: "default"
      },
      {
        id: "ea37169c-14c2-40c0-9937-e63424ea0926",
        text: "else"
      },
      {
        id: "b845c6d2-8b2f-4d40-8731-e1406ff99a77",
        text: "otherwise"
      },
      {
        id: "c01180c5-fbf3-4806-98a8-609acb0d30ac",
        text: "except"
      }
    ],
    correctOptionIds: [
      "0acf3b0e-b39e-4f30-bbed-33815bb31f28"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b34",
    subjectId: SubjectId.ALGO,
    text: "Берілген цикл неше рет орындалады?\n`int x = 5; while (x < 5) { x++; }`",
    options: [
      {
        id: "algo-t02-b34-op1",
        text: "0 рет (мүлдем орындалмайды)"
      },
      {
        id: "algo-t02-b34-op2",
        text: "1 рет"
      },
      {
        id: "algo-t02-b34-op3",
        text: "5 рет"
      },
      {
        id: "algo-t02-b34-op4",
        text: "Шексіз рет"
      }
    ],
    correctOptionIds: [
      "algo-t02-b34-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b35",
    subjectId: SubjectId.ALGO,
    text: "Берілген цикл неше рет орындалады?\n`int x = 5; do { x++; } while (x < 5);`",
    options: [
      {
        id: "algo-t02-b35-op1",
        text: "1 рет"
      },
      {
        id: "algo-t02-b35-op2",
        text: "0 рет"
      },
      {
        id: "algo-t02-b35-op3",
        text: "5 рет"
      },
      {
        id: "algo-t02-b35-op4",
        text: "Шексіз рет"
      }
    ],
    correctOptionIds: [
      "algo-t02-b35-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b36",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі операторлардың қайсысы шартты таңдау операторына жатады?",
    options: [
      {
        id: "algo-t02-b36-op1",
        text: "if және switch"
      },
      {
        id: "algo-t02-b36-op2",
        text: "for және while"
      },
      {
        id: "algo-t02-b36-op3",
        text: "break және continue"
      },
      {
        id: "algo-t02-b36-op4",
        text: "new және delete"
      }
    ],
    correctOptionIds: [
      "algo-t02-b36-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b37",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі бос оператор (null statement) қалай жазылады?",
    options: [
      {
        id: "algo-t02-b37-op1",
        text: "; (тек үтірлі нүкте)"
      },
      {
        id: "algo-t02-b37-op2",
        text: "{}"
      },
      {
        id: "algo-t02-b37-op3",
        text: "void;"
      },
      {
        id: "algo-t02-b37-op4",
        text: "空"
      }
    ],
    correctOptionIds: [
      "algo-t02-b37-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "455bfba6-ab6e-43d1-9adb-90a13c76e81c",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі кодтың нәтижесі қандай?\n`int x = 1; switch(x) { case 1: cout << \"1\"; case 2: cout << \"2\"; break; }`",
    options: [
      {
        id: "ac8656d2-1fe8-477c-8684-b82b7121a5ea",
        text: "12"
      },
      {
        id: "3865beea-3229-4730-9080-b24f6570751d",
        text: "1"
      },
      {
        id: "727b7fb2-70b1-46e2-96d5-2bf5727305de",
        text: "2"
      },
      {
        id: "79fd0567-d1ef-4d47-a651-a61f3daad434",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "ac8656d2-1fe8-477c-8684-b82b7121a5ea"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b38",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі айнымалының қолданылу аясы (scope) немен шектеледі?",
    options: [
      {
        id: "algo-t02-b38-op1",
        text: "Ол жарияланған блокпен `{ }` және оның ішкі блоктарымен"
      },
      {
        id: "algo-t02-b38-op2",
        text: "Бағдарламаның бүкіл файлымен ғана"
      },
      {
        id: "algo-t02-b38-op3",
        text: "Тек функцияның аяқталуымен"
      },
      {
        id: "algo-t02-b38-op4",
        text: "Операциялық жүйе параметрлерімен"
      }
    ],
    correctOptionIds: [
      "algo-t02-b38-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b5763fbd-52e3-4990-9d81-bbccf49cb565",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін экранға не шығады?\n`int x = 10; if (true) { int x = 20; } cout << x;`",
    options: [
      {
        id: "c5e2f2f9-019d-49d2-9e5a-449c5351b97d",
        text: "10"
      },
      {
        id: "54f5c243-d784-4bfa-aaf8-f4e48ab80da1",
        text: "20"
      },
      {
        id: "2254c850-cd66-458c-bcbf-67e77bbc97f4",
        text: "30"
      },
      {
        id: "9382ebb9-35cf-4852-a07e-e5784f6810f2",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "c5e2f2f9-019d-49d2-9e5a-449c5351b97d"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b39",
    subjectId: SubjectId.ALGO,
    text: "Егер `while` циклінің шарты ретінде `1` немесе `true` берілсе, ол қандай цикл болады?",
    options: [
      {
        id: "algo-t02-b39-op1",
        text: "Шексіз цикл (infinite loop)"
      },
      {
        id: "algo-t02-b39-op2",
        text: "Мүлдем орындалмайтын цикл"
      },
      {
        id: "algo-t02-b39-op3",
        text: "Қателік тудыратын цикл"
      },
      {
        id: "algo-t02-b39-op4",
        text: "Тек 1 рет қана орындалатын цикл"
      }
    ],
    correctOptionIds: [
      "algo-t02-b39-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b40",
    subjectId: SubjectId.ALGO,
    text: "Жиі қолданылатын `int main(int argc, char** argv)` жазуындағы `char**` нені білдіреді?",
    options: [
      {
        id: "algo-t02-b40-op1",
        text: "Символдарға нұсқауышқа нұсқауыш (нұсқауыштар массивімен бірдей)"
      },
      {
        id: "algo-t02-b40-op2",
        text: "Екі өлшемді символдар жиыны"
      },
      {
        id: "algo-t02-b40-op3",
        text: "Тұрақты сөздер тіркесі"
      },
      {
        id: "algo-t02-b40-op4",
        text: "Қате жазылған синтаксис"
      }
    ],
    correctOptionIds: [
      "algo-t02-b40-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5bf197ed-5a7e-4691-91de-633bdc2ea563",
    subjectId: SubjectId.ALGO,
    text: "Бағдарлама орындалып жатқанда оның орындалуын бірден тоқтатып, операциялық жүйеге басқаруды қайтаратын стандартты функция қандай?",
    options: [
      {
        id: "b2059e69-fffa-44a3-9fa5-131f171e5b8f",
        text: "exit()"
      },
      {
        id: "8d9aa2ea-1d9a-4bcd-a468-ecc865e876eb",
        text: "return"
      },
      {
        id: "0c82e913-7737-430b-a2e7-211bd15fcdd9",
        text: "abort()"
      },
      {
        id: "54f41737-e384-434d-aae5-b12192621364",
        text: "terminate()"
      }
    ],
    correctOptionIds: [
      "b2059e69-fffa-44a3-9fa5-131f171e5b8f"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "96dd44b7-e54a-490b-ad6d-4728b656a4de",
    subjectId: SubjectId.ALGO,
    text: "`exit()` функциясын бағдарламаның кез келген жерінде қолдану үшін қандай кітапхананы қосу қажет?",
    options: [
      {
        id: "4bec6ba2-5e4c-4e53-a17f-b01d4b74f9cf",
        text: "<cstdlib>"
      },
      {
        id: "20401f37-3fc3-4dbc-97f3-842772efa078",
        text: "<iostream>"
      },
      {
        id: "66187c3e-be72-408b-bed4-1392444ce48d",
        text: "<cmath>"
      },
      {
        id: "b101208c-4f91-476c-9500-7ee1a8820d67",
        text: "<string>"
      }
    ],
    correctOptionIds: [
      "4bec6ba2-5e4c-4e53-a17f-b01d4b74f9cf"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e7075524-6945-4393-97d8-0c858f82163e",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `switch-case` құрылымында бірнеше `case` белгілеріне бірдей орындалатын код блогын сәйкестендіруге бола ма?",
    options: [
      {
        id: "4982386e-55de-4100-95eb-c1bb1d72147d",
        text: "Иә, оларды ретімен үтірсіз жазып, ең соңында код блогын және break жазу арқылы"
      },
      {
        id: "1cc0a1eb-aac1-48d8-8b0d-03ba26744128",
        text: "Жоқ, әрбір `case` үшін бөлек код блогы болуы міндетті"
      },
      {
        id: "f71c8d2f-d441-433e-a448-24b732e0ad13",
        text: "Тек `default` арқылы ғана болады"
      },
      {
        id: "fec98b43-466f-4d0f-8d40-563b7ba1acf2",
        text: "Тек логикалық типтер үшін болады"
      }
    ],
    correctOptionIds: [
      "4982386e-55de-4100-95eb-c1bb1d72147d"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2c4e2a44-eac2-4deb-b5e1-191fba03b0ac",
    subjectId: SubjectId.ALGO,
    text: "Берілген кодтың нәтижесі неше болады?\n`int x = 2; switch(x) { case 1: case 2: case 3: cout << \"A\"; break; default: cout << \"B\"; }`",
    options: [
      {
        id: "66f4d779-b725-4698-bde2-d4ffce6f62cc",
        text: "A"
      },
      {
        id: "97e89c69-8fb9-4717-9662-ab5a4ac79056",
        text: "B"
      },
      {
        id: "94e4b222-d870-4e08-8329-5a467d1bf49f",
        text: "AB"
      },
      {
        id: "b89d2d37-47e4-45c8-a701-ba056d4c632c",
        text: "Ештеңе шықпайды"
      }
    ],
    correctOptionIds: [
      "66f4d779-b725-4698-bde2-d4ffce6f62cc"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "134e8f3f-a21a-4c6e-beac-4f0168761d0e",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі арифметикалық өрнектерді бағалауда амалдардың басымдылығы (precedence) қалай реттеледі?",
    options: [
      {
        id: "362ac10a-8ed7-4184-afbb-fa9e760ad8d5",
        text: "Математика ережелеріне сәйкес (жақшалар, сосын көбейту/бөлу, сосын қосу/азайту)"
      },
      {
        id: "c5878c6c-4779-4352-bf99-b9b0bbd76f85",
        text: "Тек жазылу ретімен солдан оңға қарай"
      },
      {
        id: "7f699e73-6d7f-4d01-a202-4cad0049263d",
        text: "Оңнан солға қарай кезекпен"
      },
      {
        id: "959611cd-c819-4abe-b44e-d35e96d37bc7",
        text: "Басымдық кездейсоқ анықталады"
      }
    ],
    correctOptionIds: [
      "362ac10a-8ed7-4184-afbb-fa9e760ad8d5"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b41",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін `x` мәні нешеге тең болады?\n`int x = 2 + 3 * 4;`",
    options: [
      {
        id: "algo-t02-b41-op1",
        text: "14"
      },
      {
        id: "algo-t02-b41-op2",
        text: "20"
      },
      {
        id: "algo-t02-b41-op3",
        text: "18"
      },
      {
        id: "algo-t02-b41-op4",
        text: "9"
      }
    ],
    correctOptionIds: [
      "algo-t02-b41-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "fa681dba-6569-4d6d-80b5-3bf51ad76ddd",
    subjectId: SubjectId.ALGO,
    text: "Бағдарламаның орындалу барысында белгілі бір шарт орындалмаса, оны қате ретінде тексеретін, әзірлеу кезеңінде қолданылатын макрос қалай аталады?",
    options: [
      {
        id: "1687fe8b-227f-4d3b-9ff1-ffebf07790ca",
        text: "assert()"
      },
      {
        id: "856701ce-3cd5-4116-9281-7c699c535f84",
        text: "error()"
      },
      {
        id: "aa59bcc6-d2cb-443a-9f8f-5eb17c8565fe",
        text: "throw"
      },
      {
        id: "5a7fcf22-f2ab-478b-bea4-5d5a1b08c830",
        text: "catch"
      }
    ],
    correctOptionIds: [
      "1687fe8b-227f-4d3b-9ff1-ffebf07790ca"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b42",
    subjectId: SubjectId.ALGO,
    text: "`assert()` макросын қолдану үшін қандай тақырыптық файл қажет?",
    options: [
      {
        id: "algo-t02-b42-op1",
        text: "<cassert>"
      },
      {
        id: "algo-t02-b42-op2",
        text: "<cstddef>"
      },
      {
        id: "algo-t02-b42-op3",
        text: "<exception>"
      },
      {
        id: "algo-t02-b42-op4",
        text: "<iostream>"
      }
    ],
    correctOptionIds: [
      "algo-t02-b42-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b43",
    subjectId: SubjectId.ALGO,
    text: "`assert(шарт)` макросында берілген шарт жалған (false) болса не орын алады?",
    options: [
      {
        id: "algo-t02-b43-op1",
        text: "Бағдарлама қате туралы хабарлама шығарып, `abort()` арқылы жұмысын бірден тоқтатады"
      },
      {
        id: "algo-t02-b43-op2",
        text: "Бағдарлама жұмысын жалғастыра береді, тек ескерту шығады"
      },
      {
        id: "algo-t02-b43-op3",
        text: "Жүйе циклды қайта іске қосады"
      },
      {
        id: "algo-t02-b43-op4",
        text: "Айнымалының мәні өзгереді"
      }
    ],
    correctOptionIds: [
      "algo-t02-b43-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "63edc2b2-4ead-4fd6-987c-cf3ac1a0a8e1",
    subjectId: SubjectId.ALGO,
    text: "Шығарылым (release) нұсқасын жасағанда барлық `assert()` тексерулерін өшіру үшін қандай макросты анықтау керек?",
    options: [
      {
        id: "f3b1c382-19a4-4092-b7b5-39aef637f60e",
        text: "NDEBUG"
      },
      {
        id: "2920ac8d-93cc-4048-9c90-abd85d57911f",
        text: "DEBUG"
      },
      {
        id: "c8cd2b0c-078e-41a9-9567-c6d25cefa0e3",
        text: "NO_ASSERT"
      },
      {
        id: "39c6936e-f7c5-4bd4-b7c0-80ac948a3b40",
        text: "RELEASE"
      }
    ],
    correctOptionIds: [
      "f3b1c382-19a4-4092-b7b5-39aef637f60e"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b44",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі кодтың нәтижесі қандай болады?\n`int x = 5; int y = (x > 5) ? 10 : 20; cout << y;`",
    options: [
      {
        id: "algo-t02-b44-op1",
        text: "20"
      },
      {
        id: "algo-t02-b44-op2",
        text: "10"
      },
      {
        id: "algo-t02-b44-op3",
        text: "5"
      },
      {
        id: "algo-t02-b44-op4",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "algo-t02-b44-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b45",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі кодтан кейін экранға не шығады?\n`int a = 1, b = 2; cout << (a > b ? a : b);`",
    options: [
      {
        id: "algo-t02-b45-op1",
        text: "2"
      },
      {
        id: "algo-t02-b45-op2",
        text: "1"
      },
      {
        id: "algo-t02-b45-op3",
        text: "true"
      },
      {
        id: "algo-t02-b45-op4",
        text: "false"
      }
    ],
    correctOptionIds: [
      "algo-t02-b45-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e982a5f2-5081-4904-a01c-15ba3d002c6a",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде бірнеше операторларды біріктіріп, оларды бір оператор ретінде қарастыру үшін қандай жақшалар қолданылады?",
    options: [
      {
        id: "5db0a36f-c3df-44c0-8c41-311d77d1bda4",
        text: "Фигуралы жақшалар `{ }` (блок құру)"
      },
      {
        id: "c646998f-eb64-489c-a074-a085db7c0987",
        text: "Дөңгелек жақшалар `( )`"
      },
      {
        id: "1814c824-396e-44e0-bded-26a494230ee1",
        text: "Тік жақшалар `[ ]`"
      },
      {
        id: "3348ce88-0311-497e-b2c6-7b0db291fa60",
        text: "Бұрыштық жақшалар `< >`"
      }
    ],
    correctOptionIds: [
      "5db0a36f-c3df-44c0-8c41-311d77d1bda4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b46",
    subjectId: SubjectId.ALGO,
    text: "Циклдің ішіндегі тағы бір цикл қалай аталады?",
    options: [
      {
        id: "algo-t02-b46-op1",
        text: "Кірістірілген цикл (nested loop)"
      },
      {
        id: "algo-t02-b46-op2",
        text: "Сыртқы цикл"
      },
      {
        id: "algo-t02-b46-op3",
        text: "Жүйелі цикл"
      },
      {
        id: "algo-t02-b46-op4",
        text: "Қайталама цикл"
      }
    ],
    correctOptionIds: [
      "algo-t02-b46-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b47",
    subjectId: SubjectId.ALGO,
    text: "Кірістірілген циклде орындалған `break` операторы қай циклдің жұмысын тоқтатады?",
    options: [
      {
        id: "algo-t02-b47-op1",
        text: "Тек өзі орналасқан ең ішкі циклді (innermost loop)"
      },
      {
        id: "algo-t02-b47-op2",
        text: "Барлық сыртқы және ішкі циклдерді бірдей"
      },
      {
        id: "algo-t02-b47-op3",
        text: "Тек ең сыртқы циклді"
      },
      {
        id: "algo-t02-b47-op4",
        text: "Ешқандай циклді тоқтатпайды"
      }
    ],
    correctOptionIds: [
      "algo-t02-b47-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ee2612ed-da2b-496f-b2e8-2cef7acabd47",
    subjectId: SubjectId.ALGO,
    text: "Кірістірілген циклден сыртқы циклге де бірден шығу үшін C++ тілінде көбінесе не қолданылады немесе ұсынылады?",
    options: [
      {
        id: "9759b5f3-71d4-4d52-90e0-bd124711d674",
        text: "Шарттық флагтар (boolean flags) немесе функциядан `return` жасау (кейде `goto` қолданылады)"
      },
      {
        id: "5a2ab3e4-dde5-473f-9b21-7ba372a9115b",
        text: "Бірнеше `break` операторын қатар жазу (`break break;`)"
      },
      {
        id: "6a729e3b-957a-4678-a63d-f4a406b46475",
        text: "`continue` операторын қолдану"
      },
      {
        id: "a57e7083-4b97-40ba-b938-8a175ab0fdc6",
        text: "Жадты тазарту"
      }
    ],
    correctOptionIds: [
      "9759b5f3-71d4-4d52-90e0-bd124711d674"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "050db397-9a1e-4860-9a50-9bbccfc10f63",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі математикалық функциялар (мысалы, `sqrt()`, `pow()`, `abs()`) қай кітапханада жинақталған?",
    options: [
      {
        id: "56a12ea8-e7b7-4f59-9311-7a9c73efb843",
        text: "<cmath>"
      },
      {
        id: "12e51ac5-5179-4360-b412-fcb26fb6cd4c",
        text: "<iostream>"
      },
      {
        id: "79c13985-eae4-413c-a333-e3a0ce445bee",
        text: "<cstdlib>"
      },
      {
        id: "442f57d6-4026-4f8b-8302-7fe2f2073750",
        text: "<algorithm>"
      }
    ],
    correctOptionIds: [
      "56a12ea8-e7b7-4f59-9311-7a9c73efb843"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b7037763-1676-4483-b323-9897f8f74ff1",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі кодтың нәтижесі қандай?\n`int x = 10; while(x > 0); { x--; }` (назар аударыңыз: while-дан кейін үтірлі нүкте бар)",
    options: [
      {
        id: "bd6b38d0-db28-4954-85ca-808986bdd0f9",
        text: "Шексіз цикл (себебі бос цикл орындалып тұр)"
      },
      {
        id: "24e06ebd-7ce2-441a-a2ae-9154f2f5577f",
        text: "Экранға 0 шығады"
      },
      {
        id: "e3ac67e4-6c89-441e-9cc1-3738f0d53a5c",
        text: "Компиляция қатесі туындайды"
      },
      {
        id: "413635e8-3a94-46eb-816a-e1e7d4759633",
        text: "Цикл мүлдем орындалмай, бағдарлама тоқтайды"
      }
    ],
    correctOptionIds: [
      "bd6b38d0-db28-4954-85ca-808986bdd0f9"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b48",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `switch-case` өрнегінде `case` мәндері қандай болуы тиіс?",
    options: [
      {
        id: "algo-t02-b48-op1",
        text: "Компиляция кезеңінде белгілі болатын тұрақты өрне (constant expression)"
      },
      {
        id: "algo-t02-b48-op2",
        text: "Кез келген өзгермелі айнымалы"
      },
      {
        id: "algo-t02-b48-op3",
        text: "Ауқымды логикалық өрнектер (мысалы, `x > 5`)"
      },
      {
        id: "algo-t02-b48-op4",
        text: "Функцияның кез келген қайтаратын мәні"
      }
    ],
    correctOptionIds: [
      "algo-t02-b48-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b49",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі `switch` құрылымдарының қайсысы C++ тілінде компиляция қатесін тудырады?",
    options: [
      {
        id: "algo-t02-b49-op1",
        text: "`int x = 5; switch(x) { case x: cout << 1; }` (case мәні тұрақты емес)"
      },
      {
        id: "algo-t02-b49-op2",
        text: "`int x = 5; switch(x) { case 1: cout << 1; }`"
      },
      {
        id: "algo-t02-b49-op3",
        text: "`char c = 'a'; switch(c) { case 'a': cout << 2; }`"
      },
      {
        id: "algo-t02-b49-op4",
        text: "`enum Color {RED}; Color r = RED; switch(r) { case RED: cout << 3; }`"
      }
    ],
    correctOptionIds: [
      "algo-t02-b49-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b50",
    subjectId: SubjectId.ALGO,
    text: "Бағдарлама құрылымындағы жаһандық (global) айнымалылар қай жерде сақталады?",
    options: [
      {
        id: "algo-t02-b50-op1",
        text: "Статикалық жад сегментінде (data segment / BSS segment)"
      },
      {
        id: "algo-t02-b50-op2",
        text: "Стекте (Stack)"
      },
      {
        id: "algo-t02-b50-op3",
        text: "Үйіндіде (Heap)"
      },
      {
        id: "algo-t02-b50-op4",
        text: "Процессор регистрлерінде"
      }
    ],
    correctOptionIds: [
      "algo-t02-b50-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b51",
    subjectId: SubjectId.ALGO,
    text: "Жаһандық айнымалылар автоматты түрде қандай мәнмен инициализацияланады?",
    options: [
      {
        id: "algo-t02-b51-op1",
        text: "Нөлмен (0 немесе сәйкес типтің нөлдік мәнімен)"
      },
      {
        id: "algo-t02-b51-op2",
        text: "Кездейсоқ қоқыс (garbage) мәнмен"
      },
      {
        id: "algo-t02-b51-op3",
        text: "Инициализацияланбайды, компиляция қатесі болады"
      },
      {
        id: "algo-t02-b51-op4",
        text: "1 мәнімен"
      }
    ],
    correctOptionIds: [
      "algo-t02-b51-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b52",
    subjectId: SubjectId.ALGO,
    text: "Локальді (жергілікті) айнымалылар автоматты түрде қандай мәнмен инициализацияланады?",
    options: [
      {
        id: "algo-t02-b52-op1",
        text: "Анықталмаған кездейсоқ (қоқыс) мәнмен (garbage value)"
      },
      {
        id: "algo-t02-b52-op2",
        text: "Әрқашан нөлмен"
      },
      {
        id: "algo-t02-b52-op3",
        text: "Әрқашан 1 мәнімен"
      },
      {
        id: "algo-t02-b52-op4",
        text: "Тек оң сандармен"
      }
    ],
    correctOptionIds: [
      "algo-t02-b52-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "73107f91-d0db-4aba-8262-9e18613170fd",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі кодтың нәтижесі қандай?\n`int x = 10; int y = 20; if (x > 5 || (y = 30) > 20) { cout << y; }`",
    options: [
      {
        id: "030ec9b4-f69a-4379-81f0-e6cd2b5fc4c8",
        text: "20 (қысқа тұйықталу салдарынан екінші шарт орындалмады)"
      },
      {
        id: "e9f81b42-8f85-45e0-b6b1-53f371812cbc",
        text: "30"
      },
      {
        id: "b284fb2c-a347-48a6-8437-f9db424464c4",
        text: "0"
      },
      {
        id: "df7e7696-2cbc-480c-8c57-3bd04d0724ec",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "030ec9b4-f69a-4379-81f0-e6cd2b5fc4c8"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d88a7850-909a-4692-a1ad-e004e32fb305",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі кодтың нәтижесі қандай?\n`int x = 10; int y = 20; if (x < 5 && (y = 30) > 20) {} else { cout << y; }`",
    options: [
      {
        id: "eeb37efb-7237-4cb3-a454-43c44fbab9b2",
        text: "20 (қысқа тұйықталу салдарынан екінші шарт орындалмады)"
      },
      {
        id: "f90676cc-ac41-40e0-baae-3facb07fbdbc",
        text: "30"
      },
      {
        id: "df9255b2-303f-4b51-b3fa-03d1e081b6cf",
        text: "0"
      },
      {
        id: "ce76500d-b45f-4607-ada5-97da8fb88c16",
        text: "10"
      }
    ],
    correctOptionIds: [
      "eeb37efb-7237-4cb3-a454-43c44fbab9b2"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b53",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `return` операторы функциядан тыс (жаһандық деңгейде) қолданылса не орын алады?",
    options: [
      {
        id: "algo-t02-b53-op1",
        text: "Компиляция қатесі туындайды (return тек функция денесінде қолданылады)"
      },
      {
        id: "algo-t02-b53-op2",
        text: "Бағдарлама бірден сәтті аяқталады"
      },
      {
        id: "algo-t02-b53-op3",
        text: "Операциялық жүйе тоқтап қалады"
      },
      {
        id: "algo-t02-b53-op4",
        text: "Ешқандай әсері болмайды"
      }
    ],
    correctOptionIds: [
      "algo-t02-b53-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "24770d66-a1d8-47fb-a235-ed8bab826624",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `do-while` циклінің соңындағы `while(шарт)` бөлігінен кейін үтірлі нүкте (`;`) қою міндетті ме?",
    options: [
      {
        id: "2b63d5ad-3ea8-43f0-abff-4ea05de49e42",
        text: "Иә, міндетті түрде қойылуы керек, онсыз синтаксистік қате болады"
      },
      {
        id: "548bf3f1-24c9-4e92-9bbb-a72e3afbd58a",
        text: "Жоқ, қойылмаса да компилятор өткізе береді"
      },
      {
        id: "e9d77196-000b-4ac1-bd84-29bedac4c510",
        text: "Тек шарт теріс болғанда ғана міндетті"
      },
      {
        id: "a9d60d90-046e-499f-82f0-4d2e0ce11dd4",
        text: "Тек бүтін сандар қолданылғанда міндетті"
      }
    ],
    correctOptionIds: [
      "2b63d5ad-3ea8-43f0-abff-4ea05de49e42"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3c2a25fa-873f-43f8-a233-050ddcec78e2",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін `x` мәні неше болады?\n`int x = 1; for (int i = 0; i < 3; i++) { x *= 2; }`",
    options: [
      {
        id: "b15f1c6b-ac20-4a4f-b9ab-44b66dce7dd8",
        text: "8"
      },
      {
        id: "7838d5b3-38b7-4a9f-b053-3773d2aee1b8",
        text: "6"
      },
      {
        id: "5a11fa6b-8be2-4b73-b911-133a2a7b730a",
        text: "4"
      },
      {
        id: "9970f7a4-463a-49b0-964a-22b8e839bba7",
        text: "16"
      }
    ],
    correctOptionIds: [
      "b15f1c6b-ac20-4a4f-b9ab-44b66dce7dd8"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b54",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі өрнек (expression) деген не?",
    options: [
      {
        id: "algo-t02-b54-op1",
        text: "Мәнді есептейтін операторлар, айнымалылар мен литералдардың жиынтығы"
      },
      {
        id: "algo-t02-b54-op2",
        text: "Тек функциялардың анықтамасы"
      },
      {
        id: "algo-t02-b54-op3",
        text: "Компилятордың баптаулар жинағы"
      },
      {
        id: "algo-t02-b54-op4",
        text: "Бағдарламаның тек бірінші жолы"
      }
    ],
    correctOptionIds: [
      "algo-t02-b54-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b55",
    subjectId: SubjectId.ALGO,
    text: "Оператор (statement) мен өрнек (expression) арасындағы айырмашылық қандай?",
    options: [
      {
        id: "algo-t02-b55-op1",
        text: "Өрнек белгілі бір мәнді есептейді, ал оператор бағдарламаның орындалу әрекетін білдіреді (мысалы, үтірлі нүктемен аяқталады)"
      },
      {
        id: "algo-t02-b55-op2",
        text: "Оператор әрқашан жақша ішінде жазылады"
      },
      {
        id: "algo-t02-b55-op3",
        text: "Өрнек ешқашан мән қайтармайды"
      },
      {
        id: "algo-t02-b55-op4",
        text: "Айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "algo-t02-b55-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b56",
    subjectId: SubjectId.ALGO,
    text: "Төмендегілердің қайсысы C++ тіліндегі өрнекке жатады?",
    options: [
      {
        id: "algo-t02-b56-op1",
        text: "a + b"
      },
      {
        id: "algo-t02-b56-op2",
        text: "int a = 5;"
      },
      {
        id: "algo-t02-b56-op3",
        text: "return 0;"
      },
      {
        id: "algo-t02-b56-op4",
        text: "class MyClass {};"
      }
    ],
    correctOptionIds: [
      "algo-t02-b56-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "29504ab4-a901-42a1-a4be-039698ed0b97",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі кодтың нәтижесі қандай?\n`int x = 0; int y = 0; switch(x) { default: y = 5; } cout << y;`",
    options: [
      {
        id: "84b60495-b8e7-4994-8677-e33601d95b3f",
        text: "5"
      },
      {
        id: "e7740018-ca87-429d-8883-d02ed9bbb344",
        text: "0"
      },
      {
        id: "d6e67dfc-a008-46cd-92e0-b1550207e4c2",
        text: "Қате"
      },
      {
        id: "68d6a186-ec44-4b3f-8ba6-4d4fb7b082ee",
        text: "Белгісіз мән"
      }
    ],
    correctOptionIds: [
      "84b60495-b8e7-4994-8677-e33601d95b3f"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b57",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі құрамды (compound) оператор деген не?",
    options: [
      {
        id: "algo-t02-b57-op1",
        text: "Фигуралы жақшамен қоршалған бірнеше операторлар блогы"
      },
      {
        id: "algo-t02-b57-op2",
        text: "Тек бірнеше математикалық белгілері бар оператор"
      },
      {
        id: "algo-t02-b57-op3",
        text: "Функцияның ішіндегі шартты оператор"
      },
      {
        id: "algo-t02-b57-op4",
        text: "Жаһандық деңгейдегі айнымалы"
      }
    ],
    correctOptionIds: [
      "algo-t02-b57-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c2f19ba5-2997-4efc-bb1d-4809fb8a8bf0",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі шартты өрнектегі `if` блогынан кейін жақшасыз тек бір оператор жазылса, ол шартқа қай бөлік жатады?",
    options: [
      {
        id: "c5197bda-b326-4761-8cda-ae09e1aca025",
        text: "Тек тікелей бірінші орындалатын оператор (келесі үтірлі нүктеге дейінгі код)"
      },
      {
        id: "5655b90d-c605-4ff7-8fb6-554105eee36b",
        text: "Kелесі екі оператор"
      },
      {
        id: "ad04b548-f7d3-4c55-9afd-0049b4f95ac6",
        text: "Функцияның соңына дейінгі барлық код"
      },
      {
        id: "fbc34484-5b7b-43ba-9f13-ab628c965cc2",
        text: "Ештеңе жатпайды"
      }
    ],
    correctOptionIds: [
      "c5197bda-b326-4761-8cda-ae09e1aca025"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "59ab4a83-7416-434b-80a3-5996110346ea",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі код орындалғаннан кейін экранға не шығады?\n`int x = 10; if (x > 20) cout << \"A\"; cout << \"B\";`",
    options: [
      {
        id: "fe6d9e1d-740d-4190-82d5-4323ccc99626",
        text: "B"
      },
      {
        id: "72dd6cba-37f6-4246-b0dd-376add9ddb33",
        text: "A"
      },
      {
        id: "3588d38d-8af5-465e-a6a6-04a798074625",
        text: "AB"
      },
      {
        id: "23ee001a-95ce-4887-9ed4-34452c1c071d",
        text: "Ештеңе шықпайды"
      }
    ],
    correctOptionIds: [
      "fe6d9e1d-740d-4190-82d5-4323ccc99626"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2af827fa-007e-4c1b-b198-9431255d70bb",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі `switch` блогында `case` мәндері қайталануы (мысалы, екі рет `case 1:` жазылуы) мүмкін бе?",
    options: [
      {
        id: "56c7b09b-a5c1-4963-b2a0-8348bc0936a4",
        text: "Жоқ, әрбір `case` мәні бірегей (unique) болуы тиіс, әйтпесе компиляция қатесі шығады"
      },
      {
        id: "2d141f2a-e1f4-4b05-8b24-bc58bfd55c91",
        text: "Иә, мүмкін, бұл кезде ең біріншісі орындалады"
      },
      {
        id: "2abd9d16-7383-4476-97d4-c961c1836bbc",
        text: "Иә, мүмкін, бірақ екіншісі ғана орындалады"
      },
      {
        id: "6064121f-e631-4a44-8ed6-c0656689b20b",
        text: "Тек логикалық мәндермен жұмыс істегенде мүмкін"
      }
    ],
    correctOptionIds: [
      "56c7b09b-a5c1-4963-b2a0-8348bc0936a4"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b58",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі өрнек нәтижесі неге тең болады?\n`bool result = (5 > 3) && (2 < 1);`",
    options: [
      {
        id: "algo-t02-b58-op1",
        text: "false"
      },
      {
        id: "algo-t02-b58-op2",
        text: "true"
      },
      {
        id: "algo-t02-b58-op3",
        text: "1"
      },
      {
        id: "algo-t02-b58-op4",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "algo-t02-b58-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b59",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі өрнек нәтижесі неге тең болады?\n`bool result = (5 > 3) || (2 < 1);`",
    options: [
      {
        id: "algo-t02-b59-op1",
        text: "true"
      },
      {
        id: "algo-t02-b59-op2",
        text: "false"
      },
      {
        id: "algo-t02-b59-op3",
        text: "0"
      },
      {
        id: "algo-t02-b59-op4",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "algo-t02-b59-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "820ee505-3cbe-4218-accf-836464ed7d2b",
    subjectId: SubjectId.ALGO,
    text: "Жүйедегі жадты үнемдеу және орындалу жылдамдығын арттыру мақсатында компилятор шағын циклдерді ашып жіберсе (loop unrolling), бұл не деп аталады?",
    options: [
      {
        id: "a72f5a20-aff4-42bb-b177-2cd3603e6cad",
        text: "Циклді оңтайландыру (Loop optimization)"
      },
      {
        id: "191f6b4b-a65f-4694-93e7-9ad2a6e60ff8",
        text: "Циклді қысқарту"
      },
      {
        id: "ce60edb3-4ee4-4de4-82ea-77eb29495bfa",
        text: "Стек толуы"
      },
      {
        id: "367d446f-341b-4d9d-ac83-17e70a5eed43",
        text: "Динамикалық орындау"
      }
    ],
    correctOptionIds: [
      "a72f5a20-aff4-42bb-b177-2cd3603e6cad"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "faac86fa-d7e2-4eae-8a7e-3b1cb1199953",
    subjectId: SubjectId.ALGO,
    text: "C++ тілінде цикл шартының орындалуын сыртқы факторларға немесе оқиғаларға байланысты күтуге арналған бос цикл қалай аталады?",
    options: [
      {
        id: "6857d4b7-dc95-499e-b28b-84f41b3b4825",
        text: "Күту циклі (Busy-waiting loop немесе spin lock)"
      },
      {
        id: "204b7d0a-c413-43f0-ad7c-e92e414f32cf",
        text: "Рекурсивті цикл"
      },
      {
        id: "34c696fa-7956-431b-8218-99c8e531bee6",
        text: "Бақылау циклі"
      },
      {
        id: "dca1ddb8-0cef-4848-bf19-2ac51f710c83",
        text: "Логикалық цикл"
      }
    ],
    correctOptionIds: [
      "6857d4b7-dc95-499e-b28b-84f41b3b4825"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b13fe9b9-bce9-4f6f-aca8-dbbef7a27c34",
    subjectId: SubjectId.ALGO,
    text: "Бағдарлама құрылымындағы `const` модификаторымен жарияланған айнымалыны кейінірек өзгертуге әрекет жасалса не болады?",
    options: [
      {
        id: "8ab87e85-92b7-4023-92d2-06a4cf413cb5",
        text: "Компиляция кезеңінде қате шығады (read-only variable assignment error)"
      },
      {
        id: "d6c01c39-4a65-4dcd-8213-ffd9b03867a9",
        text: "Айнымалының мәні өзгереді, бірақ ескерту шығады"
      },
      {
        id: "7d1a35f7-6d6b-42e9-8d93-e25d9aa632bc",
        text: "Бағдарлама орындалып жатқанда авариялық тоқтайды"
      },
      {
        id: "ead85ca8-020c-40c8-9c06-2f301bffe42f",
        text: "Айнымалы автоматты түрде нөл болады"
      }
    ],
    correctOptionIds: [
      "8ab87e85-92b7-4023-92d2-06a4cf413cb5"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b60",
    subjectId: SubjectId.ALGO,
    text: "Төмендегі кодтан кейін `x` мәні қандай болады?\n`int x = 5; { x = 10; }`",
    options: [
      {
        id: "algo-t02-b60-op1",
        text: "10"
      },
      {
        id: "algo-t02-b60-op2",
        text: "5"
      },
      {
        id: "algo-t02-b60-op3",
        text: "0"
      },
      {
        id: "algo-t02-b60-op4",
        text: "Қате"
      }
    ],
    correctOptionIds: [
      "algo-t02-b60-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "algo-t02-b61",
    subjectId: SubjectId.ALGO,
    text: "C++ тіліндегі preprocessor директивалары қай таңбадан басталады?",
    options: [
      {
        id: "algo-t02-b61-op1",
        text: "# (тор белгісі)"
      },
      {
        id: "algo-t02-b61-op2",
        text: "//"
      },
      {
        id: "algo-t02-b61-op3",
        text: "$"
      },
      {
        id: "algo-t02-b61-op4",
        text: "@"
      }
    ],
    correctOptionIds: [
      "algo-t02-b61-op1"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "e511ee05-01f3-4c52-accb-d235313ab237",
    subjectId: SubjectId.ALGO,
    text: "Препроцессордың `#include <filename>` және `#include \"filename\"` жазуларының айырмашылығы қандай?",
    options: [
      {
        id: "1e61e72e-833e-4222-8d84-93061552a53f",
        text: "`< >` жүйелік кітапханаларды іздейді, ал `\" \"` алдымен пайдаланушының ағымдағы жобалық директориясынан іздейді"
      },
      {
        id: "70f0f414-cace-4f8a-bc7d-735fe4d2d75d",
        text: "`\" \"` тек С тілінің файлдарына арналған"
      },
      {
        id: "fd1231a2-dc85-4def-9d70-94e4d9d855a1",
        text: "`< >` тек Linux жүйесінде жұмыс істейді"
      },
      {
        id: "975c9d88-811d-4586-b716-9999370a3886",
        text: "Ешқандай айырмашылығы жоқ"
      }
    ],
    correctOptionIds: [
      "1e61e72e-833e-4222-8d84-93061552a53f"
    ],
    type: QuestionType.SINGLE,
    topic: "Алгоритмдік тіл операторлары. Бағдарлама құрылымы",
    difficulty: Difficulty.MEDIUM
  }
];
