import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// db / ER-модельдеу
export const db4ErModelingQuestions : Question[] = [
  {
    id: "db-t04-b01",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада байланыс (relationship) қандай фигурамен белгіленеді?",
    options: [
      {
        id: "db-t04-b01-op1",
        text: "Ромб"
      },
      {
        id: "db-t04-b01-op2",
        text: "Төртбұрыш"
      },
      {
        id: "db-t04-b01-op3",
        text: "Шеңбер"
      },
      {
        id: "db-t04-b01-op4",
        text: "Эллипс"
      },
      {
        id: "db-t04-b01-op5",
        text: "Үшбұрыш"
      },
      {
        id: "db-t04-b01-op6",
        text: "Шаршы"
      },
      {
        id: "db-t04-b01-op7",
        text: "Тіктөртбұрыш"
      },
      {
        id: "db-t04-b01-op8",
        text: "Алтыбұрыш"
      }
    ],
    correctOptionIds: [
      "db-t04-b01-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b02",
    subjectId: SubjectId.DB,
    text: "Cardinality (кардиналдылық) нені көрсетеді?",
    options: [
      {
        id: "db-t04-b02-op1",
        text: "Кестелер санын"
      },
      {
        id: "db-t04-b02-op2",
        text: "Атрибуттар санын"
      },
      {
        id: "db-t04-b02-op3",
        text: "Бағандар санын"
      },
      {
        id: "db-t04-b02-op4",
        text: "Байланыстағы субъект даналарының арақатынасын"
      },
      {
        id: "db-t04-b02-op5",
        text: "Кестедегі жолдардың жалпы санын"
      },
      {
        id: "db-t04-b02-op6",
        text: "Біріншілік кілттің бірегейлігін"
      },
      {
        id: "db-t04-b02-op7",
        text: "Сыртқы кілттердің санын"
      },
      {
        id: "db-t04-b02-op8",
        text: "Атрибуттардың деректер типін"
      }
    ],
    correctOptionIds: [
      "db-t04-b02-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b03",
    subjectId: SubjectId.DB,
    text: "Әлсіз субъект (weak entity) дегеніміз не?",
    options: [
      {
        id: "db-t04-b03-op1",
        text: "Атрибутсыз субъект"
      },
      {
        id: "db-t04-b03-op2",
        text: "Басқа субъектке тәуелді, жеке кілті жоқ субъект"
      },
      {
        id: "db-t04-b03-op3",
        text: "Өз кілті бар субъект"
      },
      {
        id: "db-t04-b03-op4",
        text: "Байланыссыз субъект"
      },
      {
        id: "db-t04-b03-op5",
        text: "Уақытша сақталатын және жойылатын субъект"
      },
      {
        id: "db-t04-b03-op6",
        text: "Тек бір ғана атрибуттан тұратын субъект"
      },
      {
        id: "db-t04-b03-op7",
        text: "Басқа кестелермен байланысы жоқ дербес субъект"
      },
      {
        id: "db-t04-b03-op8",
        text: "Кілттік мәндері үнемі өзгеріп отыратын субъект"
      }
    ],
    correctOptionIds: [
      "db-t04-b03-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b04",
    subjectId: SubjectId.DB,
    text: "Толық қатысу (total participation) дегеніміз не?",
    options: [
      {
        id: "db-t04-b04-op1",
        text: "Байланыс жоқ"
      },
      {
        id: "db-t04-b04-op2",
        text: "Субъектінің барлық даналары байланысқа қатысуы керек"
      },
      {
        id: "db-t04-b04-op3",
        text: "Субъектінің бір бөлігі қатысады"
      },
      {
        id: "db-t04-b04-op4",
        text: "Байланыс міндетті емес"
      },
      {
        id: "db-t04-b04-op5",
        text: "Байланысқа қатысу тек бір дана үшін міндетті"
      },
      {
        id: "db-t04-b04-op6",
        text: "Субъектінің кем дегенде жартысы байланысқа қатысуы тиіс"
      },
      {
        id: "db-t04-b04-op7",
        text: "Байланыс тек негізгі кілттері бар даналарға қатысты"
      },
      {
        id: "db-t04-b04-op8",
        text: "Субъектінің барлық даналары байланысқа ерікті түрде қосыла алады"
      }
    ],
    correctOptionIds: [
      "db-t04-b04-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b05",
    subjectId: SubjectId.DB,
    text: "Рекурсивті байланыс дегеніміз не?",
    options: [
      {
        id: "db-t04-b05-op1",
        text: "Үш субъект арасындағы байланыс"
      },
      {
        id: "db-t04-b05-op2",
        text: "Субъект өзімен-өзі байланысады"
      },
      {
        id: "db-t04-b05-op3",
        text: "Кілтсіз байланыс"
      },
      {
        id: "db-t04-b05-op4",
        text: "Екі кесте арасындағы байланыс"
      },
      {
        id: "db-t04-b05-op5",
        text: "Бірнеше кестенің бір кілт арқылы бірігуі"
      },
      {
        id: "db-t04-b05-op6",
        text: "Уақыт бойынша деректердің өзгеру циклі"
      },
      {
        id: "db-t04-b05-op7",
        text: "Ата-ана және бала кестелері арасындағы сыртқы кілттік байланыс"
      },
      {
        id: "db-t04-b05-op8",
        text: "Екі түрлі субъект арасындағы көпке-көп қатынасы"
      }
    ],
    correctOptionIds: [
      "db-t04-b05-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b06",
    subjectId: SubjectId.DB,
    text: "Күрделі (composite) атрибут дегеніміз не?",
    options: [
      {
        id: "db-t04-b06-op1",
        text: "Бірнеше бөлікке бөлінетін атрибут"
      },
      {
        id: "db-t04-b06-op2",
        text: "Бірнеше мәні бар атрибут"
      },
      {
        id: "db-t04-b06-op3",
        text: "Есептелетін атрибут"
      },
      {
        id: "db-t04-b06-op4",
        text: "Бөлінбейтін мән"
      },
      {
        id: "db-t04-b06-op5",
        text: "Бірнеше объектілер арасындағы байланысты сипаттайтын атрибут"
      },
      {
        id: "db-t04-b06-op6",
        text: "Уақыт өте келе өзгеретін динамикалық атрибут"
      },
      {
        id: "db-t04-b06-op7",
        text: "Кестедегі жазбаларды бірегей анықтайтын кілттік атрибут"
      },
      {
        id: "db-t04-b06-op8",
        text: "Тек сандық мәндерді қабылдайтын шектелген атрибут"
      }
    ],
    correctOptionIds: [
      "db-t04-b06-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b07",
    subjectId: SubjectId.DB,
    text: "Туынды (derived) атрибут дегеніміз не?",
    options: [
      {
        id: "db-t04-b07-op1",
        text: "Көп мәнді атрибут"
      },
      {
        id: "db-t04-b07-op2",
        text: "Тікелей сақталатын мән"
      },
      {
        id: "db-t04-b07-op3",
        text: "Басқа атрибуттардан есептелетін мән"
      },
      {
        id: "db-t04-b07-op4",
        text: "Кілттік атрибут"
      },
      {
        id: "db-t04-b07-op5",
        text: "Кестеде физикалық түрде сақталмайтын, бірақ міндетті толтырылатын өріс"
      },
      {
        id: "db-t04-b07-op6",
        text: "Басқа кестелермен байланыс орнату үшін қолданылатын арнайы атрибут"
      },
      {
        id: "db-t04-b07-op7",
        text: "Уақыт өте келе өзгермейтін тұрақты мәнге ие атрибут"
      },
      {
        id: "db-t04-b07-op8",
        text: "Пайдаланушы енгізген деректерге негізделген құпиялы ақпарат"
      }
    ],
    correctOptionIds: [
      "db-t04-b07-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b08",
    subjectId: SubjectId.DB,
    text: "ER-диаграммасындағы 'E' әрпі нені білдіреді?",
    options: [
      {
        id: "db-t04-b08-op1",
        text: "Entity"
      },
      {
        id: "db-t04-b08-op2",
        text: "Edge"
      },
      {
        id: "db-t04-b08-op3",
        text: "Error"
      },
      {
        id: "db-t04-b08-op4",
        text: "Element"
      },
      {
        id: "db-t04-b08-op5",
        text: "Ереже"
      },
      {
        id: "db-t04-b08-op6",
        text: "Байланыс"
      },
      {
        id: "db-t04-b08-op7",
        text: "Атрибут"
      },
      {
        id: "db-t04-b08-op8",
        text: "Кесте"
      }
    ],
    correctOptionIds: [
      "db-t04-b08-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b09",
    subjectId: SubjectId.DB,
    text: "Бір адам — бір паспорт байланысы қандай түрге жатады?",
    options: [
      {
        id: "db-t04-b09-op1",
        text: "1:M"
      },
      {
        id: "db-t04-b09-op2",
        text: "1:1"
      },
      {
        id: "db-t04-b09-op3",
        text: "M:N"
      },
      {
        id: "db-t04-b09-op4",
        text: "M:1"
      },
      {
        id: "db-t04-b09-op5",
        text: "0:1"
      },
      {
        id: "db-t04-b09-op6",
        text: "1:0"
      },
      {
        id: "db-t04-b09-op7",
        text: "N:N"
      },
      {
        id: "db-t04-b09-op8",
        text: "1:N"
      }
    ],
    correctOptionIds: [
      "db-t04-b09-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b10",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада атрибут қандай фигурамен белгіленеді?",
    options: [
      {
        id: "db-t04-b10-op1",
        text: "Үшбұрыш"
      },
      {
        id: "db-t04-b10-op2",
        text: "Эллипс (овал)"
      },
      {
        id: "db-t04-b10-op3",
        text: "Ромб"
      },
      {
        id: "db-t04-b10-op4",
        text: "Төртбұрыш"
      },
      {
        id: "db-t04-b10-op5",
        text: "Шеңбер"
      },
      {
        id: "db-t04-b10-op6",
        text: "Тіктөртбұрыш"
      },
      {
        id: "db-t04-b10-op7",
        text: "Алтыбұрыш"
      },
      {
        id: "db-t04-b10-op8",
        text: "Жартылай шеңбер"
      }
    ],
    correctOptionIds: [
      "db-t04-b10-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b11",
    subjectId: SubjectId.DB,
    text: "Көп студент — көп пән байланысы қандай түрге жатады?",
    options: [
      {
        id: "db-t04-b11-op1",
        text: "N:1"
      },
      {
        id: "db-t04-b11-op2",
        text: "1:M"
      },
      {
        id: "db-t04-b11-op3",
        text: "M:N"
      },
      {
        id: "db-t04-b11-op4",
        text: "1:1"
      },
      {
        id: "db-t04-b11-op5",
        text: "N:0"
      },
      {
        id: "db-t04-b11-op6",
        text: "M:1"
      },
      {
        id: "db-t04-b11-op7",
        text: "1:N"
      },
      {
        id: "db-t04-b11-op8",
        text: "0:0"
      }
    ],
    correctOptionIds: [
      "db-t04-b11-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b12",
    subjectId: SubjectId.DB,
    text: "Көп мәнді (multivalued) атрибутқа мысал келтіріңіз:",
    options: [
      {
        id: "db-t04-b12-op1",
        text: "Телефон нөмірлері (бірнеше болуы мүмкін)"
      },
      {
        id: "db-t04-b12-op2",
        text: "ИИН"
      },
      {
        id: "db-t04-b12-op3",
        text: "Туған күні"
      },
      {
        id: "db-t04-b12-op4",
        text: "Жынысы"
      },
      {
        id: "db-t04-b12-op5",
        text: "Паспорт сериясы мен нөмірі"
      },
      {
        id: "db-t04-b12-op6",
        text: "Электрондық пошта мекенжайы (негізгі)"
      },
      {
        id: "db-t04-b12-op7",
        text: "Қызметкердің лауазымы"
      },
      {
        id: "db-t04-b12-op8",
        text: "Банк шотының валютасы"
      }
    ],
    correctOptionIds: [
      "db-t04-b12-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b13",
    subjectId: SubjectId.DB,
    text: "Жартылай қатысу (partial participation) дегеніміз не?",
    options: [
      {
        id: "db-t04-b13-op1",
        text: "Байланыс жоқ"
      },
      {
        id: "db-t04-b13-op2",
        text: "Барлық даналар қатысады"
      },
      {
        id: "db-t04-b13-op3",
        text: "Субъект жоқ"
      },
      {
        id: "db-t04-b13-op4",
        text: "Субъектінің бір бөлігі ғана байланысқа қатысады"
      },
      {
        id: "db-t04-b13-op5",
        text: "Байланыс тек бір данамен шектеледі"
      },
      {
        id: "db-t04-b13-op6",
        text: "Субъектінің барлық атрибуттары міндетті түрде толтырылады"
      },
      {
        id: "db-t04-b13-op7",
        text: "Байланыс уақытша ғана орнатылады"
      },
      {
        id: "db-t04-b13-op8",
        text: "Субъектілер арасындағы байланыс ерікті сипатта болады"
      }
    ],
    correctOptionIds: [
      "db-t04-b13-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b14",
    subjectId: SubjectId.DB,
    text: "Бір мұғалім — көп студент байланысы қандай түрге жатады?",
    options: [
      {
        id: "db-t04-b14-op1",
        text: "M:N"
      },
      {
        id: "db-t04-b14-op2",
        text: "1:M"
      },
      {
        id: "db-t04-b14-op3",
        text: "M:1"
      },
      {
        id: "db-t04-b14-op4",
        text: "1:1"
      },
      {
        id: "db-t04-b14-op5",
        text: "N:1"
      },
      {
        id: "db-t04-b14-op6",
        text: "0:1"
      },
      {
        id: "db-t04-b14-op7",
        text: "M:N (көпке-көп)"
      },
      {
        id: "db-t04-b14-op8",
        text: "1:0"
      }
    ],
    correctOptionIds: [
      "db-t04-b14-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b15",
    subjectId: SubjectId.DB,
    text: "Рекурсивті байланысқа мысал:",
    options: [
      {
        id: "db-t04-b15-op1",
        text: "Студент — Пән"
      },
      {
        id: "db-t04-b15-op2",
        text: "Кітап — Автор"
      },
      {
        id: "db-t04-b15-op3",
        text: "Тапсырыс — Клиент"
      },
      {
        id: "db-t04-b15-op4",
        text: "Қызметкер — Басшысы (өзі де қызметкер)"
      },
      {
        id: "db-t04-b15-op5",
        text: "Мұғалім — Оқушы"
      },
      {
        id: "db-t04-b15-op6",
        text: "Тапсырыс — Тауар"
      },
      {
        id: "db-t04-b15-op7",
        text: "Филиал — Қала"
      },
      {
        id: "db-t04-b15-op8",
        text: "Төлем — Шот"
      }
    ],
    correctOptionIds: [
      "db-t04-b15-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b16",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада субъект (entity) қандай фигурамен белгіленеді?",
    options: [
      {
        id: "db-t04-b16-op1",
        text: "Төртбұрыш"
      },
      {
        id: "db-t04-b16-op2",
        text: "Ромб"
      },
      {
        id: "db-t04-b16-op3",
        text: "Үшбұрыш"
      },
      {
        id: "db-t04-b16-op4",
        text: "Шеңбер"
      },
      {
        id: "db-t04-b16-op5",
        text: "Тіктөртбұрыш"
      },
      {
        id: "db-t04-b16-op6",
        text: "Эллипс"
      },
      {
        id: "db-t04-b16-op7",
        text: "Алтыбұрыш"
      },
      {
        id: "db-t04-b16-op8",
        text: "Сызық"
      }
    ],
    correctOptionIds: [
      "db-t04-b16-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b17",
    subjectId: SubjectId.DB,
    text: "Мысал: Бөлме (Room) → Ғимарат (Building). Бөлме қандай субъект?",
    options: [
      {
        id: "db-t04-b17-op1",
        text: "Әлсіз субъект"
      },
      {
        id: "db-t04-b17-op2",
        text: "Атрибут"
      },
      {
        id: "db-t04-b17-op3",
        text: "Байланыс"
      },
      {
        id: "db-t04-b17-op4",
        text: "Күшті субъект"
      },
      {
        id: "db-t04-b17-op5",
        text: "Тәуелсіз субъект"
      },
      {
        id: "db-t04-b17-op6",
        text: "Қосымша атрибут"
      },
      {
        id: "db-t04-b17-op7",
        text: "Рекурсивті байланыс"
      },
      {
        id: "db-t04-b17-op8",
        text: "Иерархиялық түбір"
      }
    ],
    correctOptionIds: [
      "db-t04-b17-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b18",
    subjectId: SubjectId.DB,
    text: "Жай атрибут дегеніміз не?",
    options: [
      {
        id: "db-t04-b18-op1",
        text: "Бөлінбейтін, атомарлы мән"
      },
      {
        id: "db-t04-b18-op2",
        text: "Бірнеше мәні бар"
      },
      {
        id: "db-t04-b18-op3",
        text: "Туынды атрибут"
      },
      {
        id: "db-t04-b18-op4",
        text: "Бірнеше бөлікке бөлінетін"
      },
      {
        id: "db-t04-b18-op5",
        text: "Күрделі құрылымды және ішкі өрістерден тұратын мән"
      },
      {
        id: "db-t04-b18-op6",
        text: "Уақыт өте келе өзгермейтін тұрақты деректер"
      },
      {
        id: "db-t04-b18-op7",
        text: "Басқа атрибуттардан есептеліп шығатын мәндер жиыны"
      },
      {
        id: "db-t04-b18-op8",
        text: "Бірнеше объектіге бір уақытта қатысты болатын ортақ мән"
      }
    ],
    correctOptionIds: [
      "db-t04-b18-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b19",
    subjectId: SubjectId.DB,
    text: "Туынды атрибутқа мысал:",
    options: [
      {
        id: "db-t04-b19-op1",
        text: "ИИН"
      },
      {
        id: "db-t04-b19-op2",
        text: "Жасы (туған күннен есептеледі)"
      },
      {
        id: "db-t04-b19-op3",
        text: "Туған күні"
      },
      {
        id: "db-t04-b19-op4",
        text: "Аты"
      },
      {
        id: "db-t04-b19-op5",
        text: "Толық аты-жөні"
      },
      {
        id: "db-t04-b19-op6",
        text: "Тіркеу нөмірі"
      },
      {
        id: "db-t04-b19-op7",
        text: "Электронды пошта мекенжайы"
      },
      {
        id: "db-t04-b19-op8",
        text: "Қызметтік лауазымы"
      }
    ],
    correctOptionIds: [
      "db-t04-b19-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b20",
    subjectId: SubjectId.DB,
    text: "Кілттік атрибуттың қызметі не?",
    options: [
      {
        id: "db-t04-b20-op1",
        text: "Типті анықтау"
      },
      {
        id: "db-t04-b20-op2",
        text: "Деректерді сұрыптау"
      },
      {
        id: "db-t04-b20-op3",
        text: "Объектіні бірегей анықтау"
      },
      {
        id: "db-t04-b20-op4",
        text: "Байланыс орнату"
      },
      {
        id: "db-t04-b20-op5",
        text: "Атрибуттардың мәнін тексеру"
      },
      {
        id: "db-t04-b20-op6",
        text: "Кестедегі жолдар санын азайту"
      },
      {
        id: "db-t04-b20-op7",
        text: "Деректерді сыртқы жадыға сақтау"
      },
      {
        id: "db-t04-b20-op8",
        text: "Объектілер арасындағы иерархияны құру"
      }
    ],
    correctOptionIds: [
      "db-t04-b20-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b21",
    subjectId: SubjectId.DB,
    text: "ER-диаграммасындағы 'R' әрпі нені білдіреді?",
    options: [
      {
        id: "db-t04-b21-op1",
        text: "Record"
      },
      {
        id: "db-t04-b21-op2",
        text: "Reference"
      },
      {
        id: "db-t04-b21-op3",
        text: "Relationship"
      },
      {
        id: "db-t04-b21-op4",
        text: "Row"
      },
      {
        id: "db-t04-b21-op5",
        text: "Реляция"
      },
      {
        id: "db-t04-b21-op6",
        text: "Ресурс"
      },
      {
        id: "db-t04-b21-op7",
        text: "Реестр"
      },
      {
        id: "db-t04-b21-op8",
        text: "Реттеу"
      }
    ],
    correctOptionIds: [
      "db-t04-b21-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b22",
    subjectId: SubjectId.DB,
    text: "Нысан-байланыс (ER) моделіндегі \"нысан типі\" (Entity Type) дегеніміз не?",
    options: [
      {
        id: "db-t04-b22-op1",
        text: "Ортақ қасиеттері бар ұқсас нысандардың (объектілердің) жиынтығы немесе класы"
      },
      {
        id: "db-t04-b22-op2",
        text: "Бастапқы кілттің басқаша атауы"
      },
      {
        id: "db-t04-b22-op3",
        text: "Кестедегі бір ғана жол"
      },
      {
        id: "db-t04-b22-op4",
        text: "Байланыс түрі"
      },
      {
        id: "db-t04-b22-op5",
        text: "Екі немесе одан да көп нысан типтері арасындағы логикалық өзара әрекеттесу"
      },
      {
        id: "db-t04-b22-op6",
        text: "Нақты бір объектіні сипаттайтын деректер базасындағы жеке жазба"
      },
      {
        id: "db-t04-b22-op7",
        text: "Нысанның қасиеттерін сипаттайтын атрибуттардың тізімі"
      },
      {
        id: "db-t04-b22-op8",
        text: "Дерекқор кестелері арасындағы сыртқы кілттік байланыс ережесі"
      }
    ],
    correctOptionIds: [
      "db-t04-b22-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "34101782-6ff0-4f12-9fa7-650a91f081ed",
    subjectId: SubjectId.DB,
    text: "ER-диаграммасындағы нысандар арасындағы \"байланыс кардиналдығы\" (Cardinality Ratio) нені көрсетеді?",
    options: [
      {
        id: "e6e907a9-2c0a-4589-b32d-6c435ff45155",
        text: "Бір нысанның екінші нысанның қанша данасымен байланыса алатын шегін (мысалы, 1:1, 1:M, M:N)"
      },
      {
        id: "d6cb54a2-a1a8-4b73-af5f-8a44ad95b9db",
        text: "Кестедегі бағандардың максималды санын"
      },
      {
        id: "dec63923-9a0b-4e62-b557-4e611a34c306",
        text: "Бастапқы кілттің ұзындығын"
      },
      {
        id: "bcd06848-ae9a-4c53-a7bb-da08760de91a",
        text: "Деректердің типтерін"
      },
      {
        id: "9cdd5544-850e-49d8-aad5-a564323b5a57",
        text: "Нысандар арасындағы байланыстың атауын немесе сипаттамалық мәтінін"
      },
      {
        id: "0c5ceac2-2c94-4431-ad28-a47eb11e643e",
        text: "Дерекқорда сақталатын жазбалардың жалпы көлемін (байтпен)"
      },
      {
        id: "1b166426-f601-4964-91bd-0721317a0c42",
        text: "Байланысқан кестелердегі индекстердің жылдамдығын"
      },
      {
        id: "a23a4532-31cc-4644-9f14-95254bfeeb46",
        text: "Нысан атрибуттарының міндетті немесе ерікті болу шартын"
      }
    ],
    correctOptionIds: [
      "e6e907a9-2c0a-4589-b32d-6c435ff45155"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b23",
    subjectId: SubjectId.DB,
    text: "ER-модельдегі \"әлсіз нысан\" (Weak Entity) деген не?",
    options: [
      {
        id: "db-t04-b23-op1",
        text: "Өзінің бірегей кілті жоқ және оның өмір сүруі басқа (күшті) нысанға толық тәуелді болатын нысан"
      },
      {
        id: "db-t04-b23-op2",
        text: "Ешқандай атрибуты жоқ нысан"
      },
      {
        id: "db-t04-b23-op3",
        text: "Тек уақытша деректер сақтайтын кесте"
      },
      {
        id: "db-t04-b23-op4",
        text: "Сыртқы кілті жоқ нысан"
      },
      {
        id: "db-t04-b23-op5",
        text: "Өзінің бірегей кілті бар, бірақ деректер базасында уақытша сақталатын нысан"
      },
      {
        id: "db-t04-b23-op6",
        text: "Басқа нысандармен ешқандай байланысы жоқ және толық тәуелсіз нысан"
      },
      {
        id: "db-t04-b23-op7",
        text: "Тек көптік қатынас (many-to-many) түрінде ғана кездесетін аралық нысан"
      },
      {
        id: "db-t04-b23-op8",
        text: "Атрибуттарының мәні үнемі өзгеріп отыратын динамикалық нысан"
      }
    ],
    correctOptionIds: [
      "db-t04-b23-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b24",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада атрибуттың қай түрі қос сопақшамен (double oval) бейнеленеді?",
    options: [
      {
        id: "db-t04-b24-op1",
        text: "Құрама атрибут (Composite attribute)"
      },
      {
        id: "db-t04-b24-op2",
        text: "Кілттік атрибут"
      },
      {
        id: "db-t04-b24-op3",
        text: "Міндетті атрибут (Mandatory attribute)"
      },
      {
        id: "db-t04-b24-op4",
        text: "Бастапқы кілт атрибуты (Primary key attribute)"
      },
      {
        id: "db-t04-b24-op5",
        text: "Сыртқы кілт атрибуты (Foreign key attribute)"
      },
      {
        id: "db-t04-b24-op6",
        text: "Жасырын атрибут (Hidden attribute)"
      },
      {
        id: "db-t04-b24-op7",
        text: "Артықшылықты жою мақсатында барлық сандық мәндерді мәтіндік форматқа ауыстыру"
      },
      {
        id: "db-t04-b24-op8",
        text: "Екі нысанның біреуінің кестесіне екіншісінің кілтін қосып, оны көп мәнді атрибут ретінде сақтау арқылы"
      }
    ],
    correctOptionIds: [
      "eac27161-f767-4c12-b947-a8902363543f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b25",
    subjectId: SubjectId.DB,
    text: "ER-модельдегі \"туынды атрибут\" (Derived Attribute) деген не?",
    options: [
      {
        id: "db-t04-b25-op1",
        text: "Мәні басқа атрибуттар негізінде есептелетін атрибут (мысалы, туған жылы арқылы жасты есептеу)"
      },
      {
        id: "db-t04-b25-op2",
        text: "Бірнеше кіші атрибуттардан тұратын атрибут"
      },
      {
        id: "db-t04-b25-op3",
        text: "Көптеген мәндерді сақтай алатын баған"
      },
      {
        id: "db-t04-b25-op4",
        text: "Сыртқы кілт ретінде қолданылатын атрибут"
      },
      {
        id: "db-t04-b25-op5",
        text: "Дерекқорда физикалық түрде сақталмайтын, тек сұраныс кезінде есептелетін уақытша атрибут"
      },
      {
        id: "db-t04-b25-op6",
        text: "Кестедегі жазбалардың бірегейлігін қамтамасыз ететін негізгі кілт атрибуты"
      },
      {
        id: "db-t04-b25-op7",
        text: "Басқа кестемен байланыс орнату үшін арнайы белгіленген сілтеме атрибуты"
      },
      {
        id: "db-t04-b25-op8",
        text: "Мәні алдын ала анықталған және өзгертуге тыйым салынған тұрақты атрибут"
      }
    ],
    correctOptionIds: [
      "db-t04-b25-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b26",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада әлсіз нысанды анықтайтын байланыс қалай аталады?",
    options: [
      {
        id: "db-t04-b26-op1",
        text: "Анықтаушы байланыс (Identifying Relationship)"
      },
      {
        id: "db-t04-b26-op2",
        text: "Рекурсивті байланыс"
      },
      {
        id: "db-t04-b26-op3",
        text: "Көп мәнді байланыс"
      },
      {
        id: "db-t04-b26-op4",
        text: "Екі жақты байланыс"
      },
      {
        id: "db-t04-b26-op5",
        text: "Тәуелді байланыс"
      },
      {
        id: "db-t04-b26-op6",
        text: "Құрамдас байланыс"
      },
      {
        id: "db-t04-b26-op7",
        text: "Негізгі байланыс"
      },
      {
        id: "db-t04-b26-op8",
        text: "Агрегаттық байланыс"
      }
    ],
    correctOptionIds: [
      "db-t04-b26-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b27",
    subjectId: SubjectId.DB,
    text: "ER-модельді реляциялық схемаға көшіргенде көптен-көпке (M:N) байланысы қалай жүзеге асырылады?",
    options: [
      {
        id: "db-t04-b27-op1",
        text: "Жаңа аралық байланыстырушы кесте құру және оған екі нысанның да бастапқы кілттерін сыртқы кілт ретінде қосу арқылы"
      },
      {
        id: "db-t04-b27-op2",
        text: "Әлсіз нысанды жою арқылы"
      },
      {
        id: "db-t04-b27-op3",
        text: "Бір кестеге екінші кестенің бастапқы кілтін тікелей қосу арқылы"
      },
      {
        id: "db-t04-b27-op4",
        text: "Екі кестені бір кестеге біріктіру арқылы"
      },
      {
        id: "db-t04-b27-op5",
        text: "Екі нысанның біреуінің кестесіне екіншісінің кілтін қосып, оны көп мәнді атрибут ретінде сақтау арқылы"
      },
      {
        id: "db-t04-b27-op6",
        text: "Байланыстың өзін жеке кесте емес, екі нысан арасындағы логикалық шарт ретінде қалдыру арқылы"
      },
      {
        id: "db-t04-b27-op7",
        text: "Екі нысанның бастапқы кілттерін біріктіріп, жаңа құрама кілт жасау және оны сол кестелердің біріне қосу арқылы"
      },
      {
        id: "db-t04-b27-op8",
        text: "Көптен-көп байланысты автоматты түрде бірден-көп (1:N) байланысына айналдырып, сыртқы кілтті бір жаққа ғана қою арқылы"
      }
    ],
    correctOptionIds: [
      "db-t04-b27-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b28",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада тікбұрышпен (Rectangle) не бейнеленеді?",
    options: [
      {
        id: "db-t04-b28-op1",
        text: "Нысан жиыны (Entity Set)"
      },
      {
        id: "db-t04-b28-op2",
        text: "Атрибут (Attribute)"
      },
      {
        id: "db-t04-b28-op3",
        text: "Байланыс (Relationship)"
      },
      {
        id: "db-t04-b28-op4",
        text: "Кілт (Key)"
      },
      {
        id: "db-t04-b28-op5",
        text: "Деректер ағыны"
      },
      {
        id: "db-t04-b28-op6",
        text: "Процесс немесе әрекет"
      },
      {
        id: "db-t04-b28-op7",
        text: "Сақтаушы құрылғы"
      },
      {
        id: "db-t04-b28-op8",
        text: "Сыртқы кілт"
      }
    ],
    correctOptionIds: [
      "db-t04-b28-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b29",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада тікбұрышпен (Rectangle) не бейнеленеді?",
    options: [
      {
        id: "db-t04-b29-op1",
        text: "Нысан жиыны (Entity Set)"
      },
      {
        id: "db-t04-b29-op2",
        text: "Атрибут (Attribute)"
      },
      {
        id: "db-t04-b29-op3",
        text: "Байланыс (Relationship)"
      },
      {
        id: "db-t04-b29-op4",
        text: "Кілт (Key)"
      },
      {
        id: "db-t04-b29-op5",
        text: "Деректер ағыны"
      },
      {
        id: "db-t04-b29-op6",
        text: "Процесс немесе әрекет"
      },
      {
        id: "db-t04-b29-op7",
        text: "Сақтаушы құрылғы"
      },
      {
        id: "db-t04-b29-op8",
        text: "Сыртқы кілт"
      }
    ],
    correctOptionIds: [
      "db-t04-b29-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5aa1b72b-12ee-4620-8c05-c980eb4f4c7f",
    subjectId: SubjectId.DB,
    text: "ER-модельдегі \"әлсіз нысанның\" (Weak Entity) ішінара кілті (Partial Key / Discriminator) диаграммада қалай көрсетіледі?",
    options: [
      {
        id: "6228e4fe-eae3-4e3e-b522-8b40404b4843",
        text: "Үзік сызықпен асты сызылған мәтін түрінде (dashed underline)"
      },
      {
        id: "55acc87e-8202-49be-9483-a465396f810f",
        text: "Қалың сызықпен асты сызылған мәтінмен"
      },
      {
        id: "4d3bd925-56b1-4619-b06c-cbb514462c15",
        text: "Қос сопақша ішінде"
      },
      {
        id: "9a515a04-b102-4cb4-9d6b-a82e7a403122",
        text: "Ромб ішінде"
      },
      {
        id: "7541ccd0-5870-4086-8dfc-718c7ccaee19",
        text: "Қиғаш сызықпен асты сызылған мәтін түрінде"
      },
      {
        id: "54296d7b-b528-44b2-8f14-67d579313bcd",
        text: "Тік бұрышты жақша ішінде жазылған мәтін ретінде"
      },
      {
        id: "221dc889-5eae-4493-bbd0-879ed9d2d2a2",
        text: "Нүктелі сызықпен қоршалған ромб ішінде"
      },
      {
        id: "b7886f66-324d-4f56-9735-f79b0c4e85d2",
        text: "Жартылай толтырылған сопақша ішінде"
      }
    ],
    correctOptionIds: [
      "6228e4fe-eae3-4e3e-b522-8b40404b4843"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b30",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада әлсіз нысан жиыны (Weak Entity Set) қандай фигурамен белгіленеді?",
    options: [
      {
        id: "db-t04-b30-op1",
        text: "Қос тікбұрышпен (double rectangle)"
      },
      {
        id: "db-t04-b30-op2",
        text: "Қос ромбпен"
      },
      {
        id: "db-t04-b30-op3",
        text: "Қос эллипспен"
      },
      {
        id: "db-t04-b30-op4",
        text: "Үшбұрышпен"
      },
      {
        id: "db-t04-b30-op5",
        text: "Жіңішке тікбұрышпен"
      },
      {
        id: "db-t04-b30-op6",
        text: "Қос сызықты ромбпен"
      },
      {
        id: "db-t04-b30-op7",
        text: "Үзік сызықты эллипспен"
      },
      {
        id: "db-t04-b30-op8",
        text: "Толық боялған шеңбермен"
      }
    ],
    correctOptionIds: [
      "db-t04-b30-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "21508881-b81b-4c54-8f40-5955c453034e",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада әлсіз нысанды анықтайтын байланыс (Identifying Relationship) қандай фигурамен бейнеленеді?",
    options: [
      {
        id: "8d942e25-8484-47bd-acb0-d10dc1b3ff57",
        text: "Қос ромбпен (double diamond)"
      },
      {
        id: "c20db81f-6810-4b6d-aae8-3256ea4d62ff",
        text: "Қос тікбұрышпен"
      },
      {
        id: "083ffc0b-3056-46c0-b871-1986f2e05748",
        text: "Қос овалмен"
      },
      {
        id: "77765741-3c14-44d5-bf0b-57d8378ab7f9",
        text: "Үшбұрышпен"
      },
      {
        id: "edca38f2-5509-46d4-951f-aacbbc04e6a5",
        text: "Қос сызықты тікбұрышпен"
      },
      {
        id: "188e6893-8e2b-4241-8ec7-c76fbdcbc9ed",
        text: "Үзік сызықты ромбпен"
      },
      {
        id: "6133afd3-b20a-4216-9d46-eb9fe2dff0df",
        text: "Толық боялған шеңбермен"
      },
      {
        id: "8f30c427-6269-4674-969c-abc8b7626954",
        text: "Қос сызықты үшбұрышпен"
      }
    ],
    correctOptionIds: [
      "8d942e25-8484-47bd-acb0-d10dc1b3ff57"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5df22191-c2c1-414e-bf66-892201020863",
    subjectId: SubjectId.DB,
    text: "Екі нысан арасындағы байланыстың қатысу шектеуі (Participation constraint) минималды кардиналдық ретінде қалай сипатталады?",
    options: [
      {
        id: "9f2dc7d6-d347-47ec-9f61-63b2d7957a5f",
        text: "Міндетті (min=1, толық қатысу) немесе міндетті емес (min=0, жартылай қатысу)"
      },
      {
        id: "a76bc520-fad8-4373-b093-8de2d700e896",
        text: "Тек сандық форматта 1-ден 10-ға дейін"
      },
      {
        id: "df366b50-962c-439d-8811-5bd3e0f7c17b",
        text: "Тек қана рекурсивті байланыстарда"
      },
      {
        id: "3037a9b6-53fb-4949-ac82-a67a00d5d078",
        text: "Ол тек мамандықтар үшін анықталады"
      },
      {
        id: "a92739d8-e523-4278-aa1a-dd30b7f9d409",
        text: "Байланыстың максималды кардиналдығы ретінде (max=1 немесе max=N)"
      },
      {
        id: "02d27f47-86b5-476a-9c96-63a627d37690",
        text: "Тек атрибуттардың деректер типіне тәуелді болады"
      },
      {
        id: "070a919b-075d-4172-8728-48c742a97afb",
        text: "Байланыс атауының ұзындығына негізделеді"
      },
      {
        id: "64037910-bb4c-4f5b-903e-bbbd1e7f30ab",
        text: "Әрқашан тұрақты мәнге тең және өзгермейді (min=2)"
      }
    ],
    correctOptionIds: [
      "9f2dc7d6-d347-47ec-9f61-63b2d7957a5f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b31",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі (Enhanced ER) \"Жалпылау\" (Generalization) деген не?",
    options: [
      {
        id: "db-t04-b31-op1",
        text: "Төменгі деңгейдегі бірнеше нысандарды ортақ қасиеттері бойынша біріктіріп, жоғары деңгейлі нысан құру процесі (bottom-up)"
      },
      {
        id: "db-t04-b31-op2",
        text: "Бір нысанды бірнеше кестеге бөлу"
      },
      {
        id: "db-t04-b31-op3",
        text: "Атрибутты есептеу әдісі"
      },
      {
        id: "db-t04-b31-op4",
        text: "Байланысты өшіру"
      },
      {
        id: "db-t04-b31-op5",
        text: "Жоғары деңгейлі нысанды ерекше қасиеттеріне қарай бірнеше төменгі деңгейлі нысанға бөлу процесі (top-down)"
      },
      {
        id: "db-t04-b31-op6",
        text: "Екі түрлі нысан арасындағы байланысты күшейту үшін жаңа атрибуттар қосу әдісі"
      },
      {
        id: "db-t04-b31-op7",
        text: "Дерекқордағы барлық кестелерді бір үлкен кестеге біріктіру арқылы деректерді тығыздау"
      },
      {
        id: "db-t04-b31-op8",
        text: "Нысанның негізгі кілтін өзгерту арқылы оның иерархиялық орнын ауыстыру операциясы"
      }
    ],
    correctOptionIds: [
      "db-t04-b31-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b32",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі \"Мамандандыру\" (Specialization) процесі қандай әдіс болып табылады?",
    options: [
      {
        id: "db-t04-b32-op1",
        text: "Жоғары деңгейлі нысанды оның ерекшеліктеріне байланысты төменгі деңгейлі ішкі топтарға бөлу процесі (top-down)"
      },
      {
        id: "db-t04-b32-op2",
        text: "Нысандарды біріктіру (bottom-up)"
      },
      {
        id: "db-t04-b32-op3",
        text: "Индекстерді құру жоспары"
      },
      {
        id: "db-t04-b32-op4",
        text: "Сұранысты оңтайландыру"
      },
      {
        id: "db-t04-b32-op5",
        text: "Төменгі деңгейлі ішкі нысандарды жалпылама жоғары деңгейлі топқа біріктіру процесі (bottom-up)"
      },
      {
        id: "db-t04-b32-op6",
        text: "Нысандар арасындағы қатынастарды физикалық кестелерге айналдыру әдісі"
      },
      {
        id: "db-t04-b32-op7",
        text: "Дерекқордағы деректердің тұтастығын тексеру үшін шарттарды белгілеу тәсілі"
      },
      {
        id: "db-t04-b32-op8",
        text: "Жоғары деңгейлі нысанның барлық атрибуттарын ішкі топтарға толық көшіру операциясы"
      }
    ],
    correctOptionIds: [
      "db-t04-b32-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b33",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі \"Мұрагерлік\" (Attribute Inheritance) ережесі нені білдіреді?",
    options: [
      {
        id: "db-t04-b33-op1",
        text: "Ішкі класс (subclass) өзінің суперкласының (superclass) барлық атрибуттары мен байланыстарын автоматты түрде иеленуі"
      },
      {
        id: "db-t04-b33-op2",
        text: "Бастапқы кілттің сыртқы кестеге автоматты көшуі"
      },
      {
        id: "db-t04-b33-op3",
        text: "Деректердің дискіде өздігінен жаңартылуы"
      },
      {
        id: "db-t04-b33-op4",
        text: "Триггерлердің бір-біріне әсер етуі"
      },
      {
        id: "db-t04-b33-op5",
        text: "Суперклас тек ішкі класстың бірегей атрибуттарын ғана сақтайды"
      },
      {
        id: "db-t04-b33-op6",
        text: "Ішкі класс суперкластың атрибуттарын қайта анықтау арқылы ғана қабылдайды"
      },
      {
        id: "db-t04-b33-op7",
        text: "Мұрагерлік тек бір-бірімен байланысқан кестелер арасындағы сыртқы кілттерге қатысты"
      },
      {
        id: "db-t04-b33-op8",
        text: "Атрибуттардың мұрагерленуі дерекқорда физикалық көшірме жасауды талап етеді"
      }
    ],
    correctOptionIds: [
      "db-t04-b33-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b34",
    subjectId: SubjectId.DB,
    text: "ER жобалаудағы \"Fan Trap\" (Желдеткіш қақпан) байланыс қатесі қашан орын алады?",
    options: [
      {
        id: "db-t04-b34-op1",
        text: "Бір нысаннан екі түрлі бағытта 1:M байланысы шығып, оған байланысқан екі нысан арасындағы қатынасты дұрыс анықтау мүмкін болмағанда"
      },
      {
        id: "db-t04-b34-op2",
        text: "Кестеде сыртқы кілттер мүлдем болмағанда"
      },
      {
        id: "db-t04-b34-op3",
        text: "Транзакциялар бұғатталғанда"
      },
      {
        id: "db-t04-b34-op4",
        text: "Деректерде дубликаттар тым көп болғанда"
      },
      {
        id: "db-t04-b34-op5",
        text: "Екі нысан арасында M:N байланысы орнатылып, аралық кесте құрылмаған жағдайда"
      },
      {
        id: "db-t04-b34-op6",
        text: "Бір нысанға бірнеше рет қайталанатын деректер енгізіліп, циклдік сілтеме пайда болғанда"
      },
      {
        id: "db-t04-b34-op7",
        text: "Атрибуттардың мәндері NULL болып, сыртқы кілттің тұтастығы бұзылғанда"
      },
      {
        id: "db-t04-b34-op8",
        text: "Нысандар арасында 1:1 байланысы дұрыс емес жерде қолданылғанда"
      }
    ],
    correctOptionIds: [
      "db-t04-b34-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b35",
    subjectId: SubjectId.DB,
    text: "ER жобалаудағы \"Chasm Trap\" (Шыңырау қақпан) қатесі нені білдіреді?",
    options: [
      {
        id: "db-t04-b35-op1",
        text: "Нысандар арасында байланыс жолы бар сияқты көрінгенімен, кейбір даналар (instances) арасындағы байланыстың жоқтығынан деректерді табу мүмкін болмауы"
      },
      {
        id: "db-t04-b35-op2",
        text: "Кестенің толық жойылуы"
      },
      {
        id: "db-t04-b35-op3",
        text: "Индекстің қате оқылуы"
      },
      {
        id: "db-t04-b35-op4",
        text: "Бастапқы кілттің NULL болуы"
      },
      {
        id: "db-t04-b35-op5",
        text: "Бір нысан екінші нысанмен бірнеше рет байланысқанда деректердің қайталанып көбеюі"
      },
      {
        id: "db-t04-b35-op6",
        text: "Екі нысан арасындағы байланыстың түрі дұрыс анықталмағандықтан модельдің синтаксистік қате беруі"
      },
      {
        id: "db-t04-b35-op7",
        text: "Үш немесе одан да көп нысандарды біріктіргенде пайда болатын циклдік тәуелділік"
      },
      {
        id: "db-t04-b35-op8",
        text: "Қатынас кестесіндегі бөгде кілттердің мәндері сәйкес келмегендіктен деректердің жоғалуы"
      }
    ],
    correctOptionIds: [
      "db-t04-b35-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "87197654-4e32-478b-84de-924ceefbde5a",
    subjectId: SubjectId.DB,
    text: "EER-модельде ішкі кластардың қиылыспайтындығын білдіретін \"Disjoint constraint\" (d) шектеуі нені білдіреді?",
    options: [
      {
        id: "845d912b-5c18-4bcb-be02-ad7a4d620834",
        text: "Суперкластың кез келген данасы ең көбі бір ғана ішкі класқа жата алады (мысалы, Қызметкер не тек Мұғалім, не тек Хатшы бола алады)"
      },
      {
        id: "10fcdce6-960a-4b6e-8ebb-bd5aa0107c06",
        text: "Суперкластың данасы барлық ішкі кластарға бір мезгілде жата алады"
      },
      {
        id: "e34dfd60-c0a5-4e3d-9a7e-6cebdbbb76cb",
        text: "Ішкі кластардың мүлдем атрибуты болмайды"
      },
      {
        id: "3856e105-32a3-4506-bd24-a2d7c275de73",
        text: "Байланыс Тек 1:1 болуы керек"
      },
      {
        id: "c79b12d0-56ae-4b6e-a686-a3ba3b58c2eb",
        text: "Суперкластың әрбір данасы міндетті түрде барлық ішкі кластарға бір уақытта тиесілі болуы керек"
      },
      {
        id: "28f5f454-7e2a-4c61-8523-fbb0d57df500",
        text: "Ішкі кластардың арасындағы қиылысу тек атрибуттардың мәндеріне ғана байланысты болады"
      },
      {
        id: "a5ac00b1-f59b-48f9-8a1d-0b5b0a65c64c",
        text: "Бұл шектеу суперкластағы даналардың санын екі ішкі класқа дейін шектейді дегенді білдіреді"
      },
      {
        id: "7964a7c3-195a-4d72-ac1b-904f5b2c31de",
        text: "Disjoint шектеуі ішкі кластардың дерекқорда бөлек кестелер ретінде сақталуын талап етеді"
      }
    ],
    correctOptionIds: [
      "845d912b-5c18-4bcb-be02-ad7a4d620834"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "262ecd6a-914d-4da8-a190-b1281dd906cf",
    subjectId: SubjectId.DB,
    text: "EER-модельде ішкі кластардың қиылыса алатындығын білдіретін \"Overlapping constraint\" (o) шектеуі нені білдіреді?",
    options: [
      {
        id: "4f8bf9c0-0c56-46df-bc54-f4bb465a6e9f",
        text: "Суперкластың данасы бір мезгілде бірнеше ішкі класқа жата алады (мысалы, Адам әрі Студент, әрі Қызметкер бола алады)"
      },
      {
        id: "be36f962-e9e5-4801-aa83-158b8a8dae27",
        text: "Ішкі кластардың бір-бірімен ешқандай ортақ бағаны болмауы"
      },
      {
        id: "6874fcc9-1e05-4660-9034-aeb4a9f49255",
        text: "Тек бір ғана ішкі класс өмір сүре алуы"
      },
      {
        id: "bfad0f69-6721-4fd6-a07d-1d2fcc24a0d1",
        text: "Деректердің қате жазылуы"
      },
      {
        id: "eca5e324-09a2-4260-be03-594971b265db",
        text: "Суперкластың әрбір данасы міндетті түрде кем дегенде бір ішкі класқа тиесілі болуы шарт"
      },
      {
        id: "573e5787-fbe4-46cc-9f47-e3995ef2a713",
        text: "Ішкі кластар арасындағы қатынас тек уақытша сипатта болады және дерекқорда сақталмайды"
      },
      {
        id: "081f612c-b0e9-40c0-9ef2-34d4f7304bdb",
        text: "Бұл шектеу ішкі кластардың атрибуттарының атаулары бірдей болмауын талап етеді"
      },
      {
        id: "9713b4eb-02b4-42be-b81e-e47965714dc7",
        text: "Суперклас данасы бір уақытта тек ең жоғары басымдықтағы ішкі класқа ғана жата алады"
      }
    ],
    correctOptionIds: [
      "4f8bf9c0-0c56-46df-bc54-f4bb465a6e9f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b36",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада құрама (Composite) атрибут қалай бейнеленеді?",
    options: [
      {
        id: "db-t04-b36-op1",
        text: "Негізгі атрибут сопақшасынан тармақталып шыққан басқа сопақшалар арқылы"
      },
      {
        id: "db-t04-b36-op2",
        text: "Қос сопақшамен"
      },
      {
        id: "db-t04-b36-op3",
        text: "Тікбұрыш ішінде"
      },
      {
        id: "db-t04-b36-op4",
        text: "Үзік сызықты сопақшамен"
      },
      {
        id: "db-t04-b36-op5",
        text: "Атрибут атауының астын сызу арқылы"
      },
      {
        id: "db-t04-b36-op6",
        text: "Сопақша ішіндегі қос тік сызықпен"
      },
      {
        id: "db-t04-b36-op7",
        text: "Ромб пішіні арқылы байланысқа жалғаумен"
      },
      {
        id: "db-t04-b36-op8",
        text: "Тікбұрыштан шығатын үшбұрышты бағытпен"
      }
    ],
    correctOptionIds: [
      "db-t04-b36-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b37",
    subjectId: SubjectId.DB,
    text: "ER-модельді реляциялық схемаға көшіргенде, көпмәнді (multivalued) атрибут қалай шешіледі?",
    options: [
      {
        id: "db-t04-b37-op1",
        text: "Осы атрибут үшін жеке жаңа кесте құрылады және оған басты кестенің бастапқы кілті сыртқы кілт ретінде қосылады"
      },
      {
        id: "db-t04-b37-op2",
        text: "Ол басты кестедегі бір ұяшықта массив ретінде сақталады"
      },
      {
        id: "db-t04-b37-op3",
        text: "Ол басты кестеден мүлдем өшіріледі"
      },
      {
        id: "db-t04-b37-op4",
        text: "Ол үшін тек UNIQUE шектеуі қойылады"
      },
      {
        id: "db-t04-b37-op5",
        text: "Ол басты кестеге қосымша баған ретінде қосылып, мәндері үтірмен бөлініп жазылады"
      },
      {
        id: "db-t04-b37-op6",
        text: "Көпмәнді атрибуттар автоматты түрде бірінші нормальды формаға (1NF) сәйкес келетіндіктен өзгеріссіз қалады"
      },
      {
        id: "db-t04-b37-op7",
        text: "Осы атрибут үшін басты кестеде арнайы JSON немесе XML типті баған құрылады"
      },
      {
        id: "db-t04-b37-op8",
        text: "Көпмәнді атрибуттың әрбір мәні басты кестеде жеке жол (record) ретінде қайталанып сақталады"
      }
    ],
    correctOptionIds: [
      "db-t04-b37-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b38",
    subjectId: SubjectId.DB,
    text: "Crow's Foot (Қарға аяғы) нотациясында көптік (Many) байланысы қалай бейнеленеді?",
    options: [
      {
        id: "db-t04-b38-op1",
        text: "Үш тармақты айыр (қарға аяғы) сызығымен"
      },
      {
        id: "db-t04-b38-op2",
        text: "Жай ғана 1 санымен"
      },
      {
        id: "db-t04-b38-op3",
        text: "Жұлдызшамен (*)"
      },
      {
        id: "db-t04-b38-op4",
        text: "Сызықшамен және дөңгелекпен"
      },
      {
        id: "db-t04-b38-op5",
        text: "Екі тік сызықпен (||)"
      },
      {
        id: "db-t04-b38-op6",
        text: "Бір ғана тік сызықпен (|)"
      },
      {
        id: "db-t04-b38-op7",
        text: "Шеңбер мен үш тармақты айырдың қосындысымен"
      },
      {
        id: "db-t04-b38-op8",
        text: "Ромб пішінімен"
      }
    ],
    correctOptionIds: [
      "db-t04-b38-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b39",
    subjectId: SubjectId.DB,
    text: "Crow's Foot нотациясында \"міндетті емес\" (Optional) қатысу қалай белгіленеді?",
    options: [
      {
        id: "db-t04-b39-op1",
        text: "Сызықтағы кішкентай дөңгелекше (O - zero/optional) арқылы"
      },
      {
        id: "db-t04-b39-op2",
        text: "Тік сызықшамен"
      },
      {
        id: "db-t04-b39-op3",
        text: "Қос тік сызықшамен"
      },
      {
        id: "db-t04-b39-op4",
        text: "Қарға аяғымен"
      },
      {
        id: "db-t04-b39-op5",
        text: "Үшбұрышты белгіше арқылы"
      },
      {
        id: "db-t04-b39-op6",
        text: "Қиғаш сызықшамен (/)"
      },
      {
        id: "db-t04-b39-op7",
        text: "Толық толтырылған шеңбермен (●)"
      },
      {
        id: "db-t04-b39-op8",
        text: "Жұлдызша белгісімен (*)"
      }
    ],
    correctOptionIds: [
      "db-t04-b39-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b40",
    subjectId: SubjectId.DB,
    text: "Crow's Foot нотациясында \"міндетті\" (Mandatory) қатысу қалай көрсетіледі?",
    options: [
      {
        id: "db-t04-b40-op1",
        text: "Сызықтағы тік сызықша (мысалы, | немесе ||) арқылы"
      },
      {
        id: "db-t04-b40-op2",
        text: "Дөңгелекшемен"
      },
      {
        id: "db-t04-b40-op3",
        text: "Бос орынмен"
      },
      {
        id: "db-t04-b40-op4",
        text: "Жұлдызшамен"
      },
      {
        id: "db-t04-b40-op5",
        text: "Қара толтырылған шеңбер арқылы"
      },
      {
        id: "db-t04-b40-op6",
        text: "Үшбұрыш белгісімен"
      },
      {
        id: "db-t04-b40-op7",
        text: "Сызықтың соңындағы қос сызықша (||) арқылы"
      },
      {
        id: "db-t04-b40-op8",
        text: "Тік бұрышты төртбұрышпен"
      }
    ],
    correctOptionIds: [
      "db-t04-b40-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "18d1ded0-4ece-4b16-9be2-9e463c5a14b8",
    subjectId: SubjectId.DB,
    text: "ER-модельді реляциялық схемаға көшіру кезінде 1:M (бірден-көпке) байланысы қалай жүзеге асырылады?",
    options: [
      {
        id: "7cdfeaf0-c429-4339-93bc-7e0f1a41d09e",
        text: "\"Көп\" жағындағы кестеге \"бір\" жағындағы кестенің бастапқы кілті сыртқы кілт (Foreign Key) ретінде қосылады"
      },
      {
        id: "47afebc6-2936-410a-959d-9bc7d7d7f5c1",
        text: "Жаңа аралық кесте құрылады"
      },
      {
        id: "bdb52192-39d7-4d87-a9b2-e442fae82f25",
        text: "\"Бір\" жағына сыртқы кілт қосылады"
      },
      {
        id: "d323eb3f-2718-4643-a1c7-37920df82dcb",
        text: "Екі кесте міндетті түрде бір кестеге біріктіріледі"
      },
      {
        id: "2b22380c-ca93-415e-9c5c-926e37d3dba8",
        text: "Екі кестенің де бастапқы кілттері біріктіріліп, құрама бастапқы кілт жасалады"
      },
      {
        id: "108a5c3b-b02d-451b-98f9-84e3ef68fc51",
        text: "\"Бір\" жағындағы кестеге \"көп\" жағындағы кестенің бастапқы кілті сыртқы кілт ретінде қосылады"
      },
      {
        id: "0c7da7a5-4ac9-4a5e-9b98-588c2ef5137d",
        text: "Байланыс атрибуттары жеке үшінші кестеге шығарылып, екі жақтың да кілттері сол жерге жазылады"
      },
      {
        id: "a199bd20-c019-4ab3-adcf-a523eb137819",
        text: "Сыртқы кілттердің орнына байланыс түрін сипаттайтын арнайы кодтық өріс енгізіледі"
      }
    ],
    correctOptionIds: [
      "7cdfeaf0-c429-4339-93bc-7e0f1a41d09e"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b41",
    subjectId: SubjectId.DB,
    text: "ER-модельдегі \"атрибут\" пен \"субъект\" (Entity) арасындағы басты айырмашылық қандай?",
    options: [
      {
        id: "db-t04-b41-op1",
        text: "Субъект дербес өмір сүре алады және атрибуттар жиынтығынан тұрады, ал атрибут субъектінің жеке қасиеті болып табылады"
      },
      {
        id: "db-t04-b41-op2",
        text: "Атрибут жеке кесте бола алады"
      },
      {
        id: "db-t04-b41-op3",
        text: "Субъект тек сандық мән сақтайды"
      },
      {
        id: "db-t04-b41-op4",
        text: "Айырмашылығы жоқ"
      },
      {
        id: "db-t04-b41-op5",
        text: "Атрибут дербес өмір сүре алады, ал субъект тек атрибуттың қосымша сипаттамасы болып табылады"
      },
      {
        id: "db-t04-b41-op6",
        text: "Субъект пен атрибут арасындағы айырмашылық тек олардың кестедегі орналасу ретінде ғана көрінеді"
      },
      {
        id: "db-t04-b41-op7",
        text: "Атрибут бірнеше субъектіні біріктіретін байланыс түрі болса, субъект жеке мәнді білдіреді"
      },
      {
        id: "db-t04-b41-op8",
        text: "Субъект әрқашан уақытша сақталады, ал атрибут тұрақты және өзгермейтін құрылым болып саналады"
      }
    ],
    correctOptionIds: [
      "db-t04-b41-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b42",
    subjectId: SubjectId.DB,
    text: "Екі нысан арасындағы байланыстың өзінде атрибуттар болуы мүмкін бе?",
    options: [
      {
        id: "db-t04-b42-op1",
        text: "Иә, әсіресе көптен-көпке (M:N) байланыстарында байланыс барысында туындайтын қасиеттерді сақтау үшін атрибуттар болуы мүмкін"
      },
      {
        id: "db-t04-b42-op2",
        text: "Жоқ, байланыста ешқашан атрибут болмайды"
      },
      {
        id: "db-t04-b42-op3",
        text: "Тек 1:1 байланыстарында ғана болады"
      },
      {
        id: "db-t04-b42-op4",
        text: "Тек әлсіз нысандарда болады"
      },
      {
        id: "db-t04-b42-op5",
        text: "Жоқ, атрибуттар тек нысандарға (entity) ғана тән, байланыстар тек бағытты көрсетеді"
      },
      {
        id: "db-t04-b42-op6",
        text: "Иә, бірақ тек бірден-көпке (1:N) байланыстарында ғана рұқсат етіледі"
      },
      {
        id: "db-t04-b42-op7",
        text: "Жоқ, байланыстың кез келген қасиеті міндетті түрде негізгі нысанға ауыстырылуы керек"
      },
      {
        id: "db-t04-b42-op8",
        text: "Иә, бірақ бұл атрибуттар виртуалды болуы тиіс және дерекқорда сақталмайды"
      }
    ],
    correctOptionIds: [
      "db-t04-b42-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b43",
    subjectId: SubjectId.DB,
    text: "ER-модельдегі \"Ternary Relationship\" (Үштік байланыс) деген не?",
    options: [
      {
        id: "db-t04-b43-op1",
        text: "Бір мезгілде үш түрлі нысан жиыны қатысатын байланыс түрі"
      },
      {
        id: "db-t04-b43-op2",
        text: "Үш бағаннан тұратын кесте"
      },
      {
        id: "db-t04-b43-op3",
        text: "Үш рет қайталанатын рекурсивті байланыс"
      },
      {
        id: "db-t04-b43-op4",
        text: "Үш деңгейлі сәулет"
      },
      {
        id: "db-t04-b43-op5",
        text: "Үш түрлі атрибутты біріктіретін күрделі кілт"
      },
      {
        id: "db-t04-b43-op6",
        text: "Бір нысан жиынының ішіндегі үш тәуелді байланыс"
      },
      {
        id: "db-t04-b43-op7",
        text: "Үш кестенің арасындағы сыртқы кілт арқылы жүзеге асатын қосымша байланыс"
      },
      {
        id: "db-t04-b43-op8",
        text: "Дерекқордағы үш негізгі сұранысты орындайтын логикалық құрылым"
      }
    ],
    correctOptionIds: [
      "db-t04-b43-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b44",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі \"Aggregation\" (Агрегация) концепциясы не үшін қажет?",
    options: [
      {
        id: "db-t04-b44-op1",
        text: "Байланыстың өзін бір нысан ретінде қарастырып, оны басқа нысанмен байланыстыру үшін"
      },
      {
        id: "db-t04-b44-op2",
        text: "Деректерді дискіге топтап жазу үшін"
      },
      {
        id: "db-t04-b44-op3",
        text: "Бастапқы кілттерді автоматты түрде біріктіру үшін"
      },
      {
        id: "db-t04-b44-op4",
        text: "Индекстерді жылдам өшіру үшін"
      },
      {
        id: "db-t04-b44-op5",
        text: "Нысандар арасындағы көптік байланысты екілік байланысқа айналдыру үшін"
      },
      {
        id: "db-t04-b44-op6",
        text: "Атрибуттардың мәндерін математикалық тұрғыдан қосу немесе орташалау үшін"
      },
      {
        id: "db-t04-b44-op7",
        text: "Мұрагерлік (Generalization) қатынасын автоматты түрде құру үшін"
      },
      {
        id: "db-t04-b44-op8",
        text: "Дерекқордағы артық деректерді жою және нормализациялау үшін"
      }
    ],
    correctOptionIds: [
      "db-t04-b44-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b45",
    subjectId: SubjectId.DB,
    text: "ER-модельді реляциялық схемаға аударғанда әлсіз нысан (Weak Entity) қалай кестеге айналады?",
    options: [
      {
        id: "db-t04-b45-op1",
        text: "Әлсіз нысан үшін жеке кесте құрылады, оның бастапқы кілті күшті нысанның бастапқы кілті мен әлсіз нысанның ішінара кілтінің (partial key) қосындысынан тұрады"
      },
      {
        id: "db-t04-b45-op2",
        text: "Ол күшті нысанның ішіне баған болып қосылады"
      },
      {
        id: "db-t04-b45-op3",
        text: "Ол мүлдем жойылады"
      },
      {
        id: "db-t04-b45-op4",
        text: "Ол үшін тек бірегей UNIQUE индекс жасалады"
      },
      {
        id: "db-t04-b45-op5",
        text: "Әлсіз нысан жеке кесте ретінде құрылады, бірақ оның бастапқы кілті тек ішінара кілттен (partial key) тұрады"
      },
      {
        id: "db-t04-b45-op6",
        text: "Әлсіз нысан күшті нысанмен біріктіріліп, бір ғана кесте жасалады және екі нысанның атрибуттары қосылады"
      },
      {
        id: "db-t04-b45-op7",
        text: "Әлсіз нысан үшін жеке кесте құрылмайды, ол тек күшті нысан кестесінде сыртқы кілт (foreign key) ретінде сақталады"
      },
      {
        id: "db-t04-b45-op8",
        text: "Әлсіз нысан жеке кестеге айналады, ал оның бастапқы кілті жүйе тарапынан автоматты түрде генерацияланатын суррогаттық кілтпен ауыстырылады"
      }
    ],
    correctOptionIds: [
      "db-t04-b45-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b46",
    subjectId: SubjectId.DB,
    text: "ER-модельде \"атрибут домені\" (Attribute Domain) нені анықтайды?",
    options: [
      {
        id: "db-t04-b46-op1",
        text: "Атрибуттың қабылдай алатын деректер типін, пішімін және рұқсат етілген мәндер жиынын"
      },
      {
        id: "db-t04-b46-op2",
        text: "Бағанның дискідегі физикалық орнын"
      },
      {
        id: "db-t04-b46-op3",
        text: "Сұраныстың орындалу уақытын"
      },
      {
        id: "db-t04-b46-op4",
        text: "Кестенің атауын"
      },
      {
        id: "db-t04-b46-op5",
        text: "Атрибуттың кестедегі бірегей идентификаторын"
      },
      {
        id: "db-t04-b46-op6",
        text: "Екі кестенің арасындағы байланыс түрін"
      },
      {
        id: "db-t04-b46-op7",
        text: "Деректерді сақтау үшін бөлінген жады көлемін"
      },
      {
        id: "db-t04-b46-op8",
        text: "Кестеге жазылған жолдардың жалпы санын"
      }
    ],
    correctOptionIds: [
      "db-t04-b46-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b47",
    subjectId: SubjectId.DB,
    text: "\"Recursive Relationship\" (Рекурсивті байланыс) реляциялық кестеде қалай жүзеге асырылады?",
    options: [
      {
        id: "db-t04-b47-op1",
        text: "Кестеге өз-өзінің бастапқы кілтіне сілтеме жасайтын сыртқы кілт (Foreign Key) бағанын қосу арқылы"
      },
      {
        id: "db-t04-b47-op2",
        text: "Жаңа аралық кесте құру арқылы"
      },
      {
        id: "db-t04-b47-op3",
        text: "Ешқандай сыртқы кілтсіз"
      },
      {
        id: "db-t04-b47-op4",
        text: "Кестені екіге бөлу арқылы"
      },
      {
        id: "db-t04-b47-op5",
        text: "Кестеге арнайы рекурсиялық индексті қосу арқылы"
      },
      {
        id: "db-t04-b47-op6",
        text: "Екі түрлі кестенің бастапқы кілттерін біріктіру арқылы"
      },
      {
        id: "db-t04-b47-op7",
        text: "Кесте ішіндегі деректерді триггер көмегімен автоматты түрде көшіру арқылы"
      },
      {
        id: "db-t04-b47-op8",
        text: "Бастапқы кілтті құрама кілтке (Composite Key) өзгерту арқылы"
      }
    ],
    correctOptionIds: [
      "db-t04-b47-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b48",
    subjectId: SubjectId.DB,
    text: "Питер Чен нотациясында атрибуттың кілттік (Key attribute / Primary key) екені қалай көрсетіледі?",
    options: [
      {
        id: "db-t04-b48-op1",
        text: "Сопақша ішіндегі мәтіннің асты сызылады (underline)"
      },
      {
        id: "db-t04-b48-op2",
        text: "Сопақшаның сырты қалыңдатылады"
      },
      {
        id: "db-t04-b48-op3",
        text: "Мәтін үтірмен бөлінеді"
      },
      {
        id: "db-t04-b48-op4",
        text: "Мәтін үзік сызықпен жазылады"
      },
      {
        id: "db-t04-b48-op5",
        text: "Атрибут атауы тік бұрыштың ішіне жазылады"
      },
      {
        id: "db-t04-b48-op6",
        text: "Сопақшаның ішіндегі мәтін курсивпен (қиғаш) жазылады"
      },
      {
        id: "db-t04-b48-op7",
        text: "Атрибуттан шығатын сызық үшбұрышпен аяқталады"
      },
      {
        id: "db-t04-b48-op8",
        text: "Мәтіннің асты нүктелі сызықпен сызылады"
      }
    ],
    correctOptionIds: [
      "db-t04-b48-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b49",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада құрама атрибутқа (Composite Attribute) қайсысы жақсы мысал бола алады?",
    options: [
      {
        id: "db-t04-b49-op1",
        text: "Мекенжай ( Address: Қала, Көше, Үй нөмірі болып бөлінеді)"
      },
      {
        id: "db-t04-b49-op2",
        text: "Жасы"
      },
      {
        id: "db-t04-b49-op3",
        text: "Телефон нөмірі"
      },
      {
        id: "db-t04-b49-op4",
        text: "Жұмыс өтілі"
      },
      {
        id: "db-t04-b49-op5",
        text: "Туған күні (Күні, Айы, Жылы бөлек сақталса да)"
      },
      {
        id: "db-t04-b49-op6",
        text: "Студенттік билет нөмірі"
      },
      {
        id: "db-t04-b49-op7",
        text: "Электрондық пошта мекенжайы"
      },
      {
        id: "db-t04-b49-op8",
        text: "Қызметтік лауазым атауы"
      }
    ],
    correctOptionIds: [
      "db-t04-b49-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b50",
    subjectId: SubjectId.DB,
    text: "ER жобалауында нысан жиынына (Entity Set) қайсысы мысал бола алады?",
    options: [
      {
        id: "db-t04-b50-op1",
        text: "Студенттер жиынтығы (мысалы, 'Student' кестесі)"
      },
      {
        id: "db-t04-b50-op2",
        text: "Студенттің аты"
      },
      {
        id: "db-t04-b50-op3",
        text: "Студенттің ИИН-і"
      },
      {
        id: "db-t04-b50-op4",
        text: "Студент пен Мұғалімнің байланысы"
      },
      {
        id: "db-t04-b50-op5",
        text: "Студенттің туған жылы"
      },
      {
        id: "db-t04-b50-op6",
        text: "Студент пен Пән арасындағы тіркелу фактісі"
      },
      {
        id: "db-t04-b50-op7",
        text: "Нақты бір студенттің жеке деректері"
      },
      {
        id: "db-t04-b50-op8",
        text: "Студенттер кестесіндегі бос жолдар саны"
      }
    ],
    correctOptionIds: [
      "db-t04-b50-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b51",
    subjectId: SubjectId.DB,
    text: "ER-модельдегі \"Multivalued Attribute\" (Көпмәнді атрибут) диаграммада қалай бейнеленеді?",
    options: [
      {
        id: "db-t04-b51-op1",
        text: "Қос сопақшамен (double oval)"
      },
      {
        id: "db-t04-b51-op2",
        text: "Қос тікбұрышпен"
      },
      {
        id: "db-t04-b51-op3",
        text: "Үзік сызықты сопақшамен"
      },
      {
        id: "db-t04-b51-op4",
        text: "Ромб ішінде"
      },
      {
        id: "db-t04-b51-op5",
        text: "Қос сызықты тікбұрышпен"
      },
      {
        id: "db-t04-b51-op6",
        text: "Үзік сызықты ромбпен"
      },
      {
        id: "db-t04-b51-op7",
        text: "Ішінде 'M' әрпі бар сопақшамен"
      },
      {
        id: "db-t04-b51-op8",
        text: "Толық боялған қара сопақшамен"
      }
    ],
    correctOptionIds: [
      "db-t04-b51-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b52",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада туынды атрибут (Derived Attribute) қалай бейнеленеді?",
    options: [
      {
        id: "db-t04-b52-op1",
        text: "Үзік сызықты сопақшамен (dashed oval)"
      },
      {
        id: "db-t04-b52-op2",
        text: "Қос сопақшамен"
      },
      {
        id: "db-t04-b52-op3",
        text: "Қалың сызықты сопақшамен"
      },
      {
        id: "db-t04-b52-op4",
        text: "Тікбұрышпен"
      },
      {
        id: "db-t04-b52-op5",
        text: "Толық сызықты сопақшамен"
      },
      {
        id: "db-t04-b52-op6",
        text: "Ромб пішінімен"
      },
      {
        id: "db-t04-b52-op7",
        text: "Үшбұрышпен"
      },
      {
        id: "db-t04-b52-op8",
        text: "Қос шекаралы тікбұрышпен"
      }
    ],
    correctOptionIds: [
      "db-t04-b52-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "2e472fa7-37bf-4585-8f6b-08df088c7a2a",
    subjectId: SubjectId.DB,
    text: "Екі нысан арасындағы байланыстың қатысуы \"міндетті емес\" (Optional/Partial participation) болса, Чен нотациясында сызық қалай бейнеленеді?",
    options: [
      {
        id: "94091d0d-ea59-4b8c-9ade-5b8c442e2299",
        text: "Нысан мен байланыс (ромб) арасы жалғыз қарапайым сызықпен қосылады"
      },
      {
        id: "030a7a34-5d87-41fc-aa3c-61526f008ff1",
        text: "Қос сызықпен қосылады"
      },
      {
        id: "f49a0e36-7019-442c-9bca-8c277f73fa6f",
        text: "Үзік сызықпен қосылады"
      },
      {
        id: "1f379f1e-6339-42f4-807d-094658abf3c4",
        text: "Сызық мүлдем жүргізілмейді"
      },
      {
        id: "8a1b0272-cbd5-4c32-bd2d-d69e104afad3",
        text: "Нысан мен байланыс арасы қосарланған үзік сызықпен жалғанады"
      },
      {
        id: "870f536e-4a12-41c0-854e-e593ed531ab2",
        text: "Нысан мен байланыс арасы бағытталған жебемен (стрелка) қосылады"
      },
      {
        id: "64c946be-892f-46f8-ad7e-c18905b1a796",
        text: "Нысан мен байланыс арасы қалыңдығы екі есе артық сызықпен бейнеленеді"
      },
      {
        id: "b2b56c2b-c6ee-46c0-9477-b8cacb5ea3d3",
        text: "Нысан мен байланыс арасы нүктелі сызықпен жалғанады"
      }
    ],
    correctOptionIds: [
      "94091d0d-ea59-4b8c-9ade-5b8c442e2299"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "feccc8ea-76b3-440d-96f4-f093a81eac7e",
    subjectId: SubjectId.DB,
    text: "Нысанның байланысқа қатысуы \"міндетті\" (Mandatory/Total participation) болса, Чен нотациясында сызық қалай бейнеленеді?",
    options: [
      {
        id: "bb3992d8-8dde-45e2-bec7-ce55551e5f16",
        text: "Нысан мен байланыс (ромб) арасы қос сызықпен (double line) қосылады"
      },
      {
        id: "7cd79728-552b-456b-a6be-60942707bf3b",
        text: "Жалғыз сызықпен қосылады"
      },
      {
        id: "957dfe78-2108-4d06-a2b5-f40c39bd6ceb",
        text: "Сызық үзік-үзік болады"
      },
      {
        id: "41278db6-275d-4208-b9f1-100b6897d248",
        text: "Сызық ортасында нүкте болады"
      },
      {
        id: "c988e66c-195c-4a15-99c2-19178f0ed299",
        text: "Нысан мен байланыс арасы үшбұрыш белгісімен қосылады"
      },
      {
        id: "648d8a3e-58df-4a33-89ae-5af5a0f608de",
        text: "Сызықтың соңында толтырылған шеңбер (нүкте) орналасады"
      },
      {
        id: "3fd11056-513a-421c-a6ca-5a089531bd8f",
        text: "Нысан мен байланыс арасы қалың сызықпен (bold line) жалғанады"
      },
      {
        id: "2d58e23b-60a1-4817-884d-66d4a3f4c996",
        text: "Сызықтың бойымен бағытталған көрсеткі (стрелка) салынады"
      }
    ],
    correctOptionIds: [
      "bb3992d8-8dde-45e2-bec7-ce55551e5f16"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b53",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі \"Categorization\" (Категориялау / Union type) ұғымы нені сипаттайды?",
    options: [
      {
        id: "db-t04-b53-op1",
        text: "Бірнеше әртүрлі нысан типтерінің жиынтығынан тұратын және бір ғана ішкі класс болатын құрылым (мысалы, Иегер нысаны Жеке тұлға немесе Заңды тұлға болуы мүмкін)"
      },
      {
        id: "db-t04-b53-op2",
        text: "Барлық нысандарды жою"
      },
      {
        id: "db-t04-b53-op3",
        text: "Тек бір кестені оңтайландыру"
      },
      {
        id: "db-t04-b53-op4",
        text: "Сұранысты өңдеу"
      },
      {
        id: "db-t04-b53-op5",
        text: "Бір нысан типінің ішіндегі атрибуттарды бірнеше санатқа бөлу процесі"
      },
      {
        id: "db-t04-b53-op6",
        text: "Екі немесе одан да көп әртүрлі суперкласс арасындағы ортақ қасиеттерді біріктіру"
      },
      {
        id: "db-t04-b53-op7",
        text: "Нысандардың уақыт өте келе бір категориядан екінші категорияға автоматты түрде ауысуы"
      },
      {
        id: "db-t04-b53-op8",
        text: "Дерекқордағы барлық кестелерді логикалық тұрғыдан топтастырып, оларды бір файлға біріктіру"
      }
    ],
    correctOptionIds: [
      "db-t04-b53-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3d34f9db-60c1-4d3c-8595-2ec8234c7515",
    subjectId: SubjectId.DB,
    text: "Жобалау барысында нысандар мен байланыстардың шамадан тыс көбейіп, схеманың оқылуын қиындатпауы үшін қолданылатын тәсіл қандай?",
    options: [
      {
        id: "4a839306-1d18-4ebc-a3cc-06f31c1c8d70",
        text: "Схемаларды модульдерге бөлу немесе жоғары деңгейлі концептуалды ER-модельдерді қолдану"
      },
      {
        id: "2fae3a6e-b1b0-48c6-8871-9a0d3ca64f08",
        text: "Барлық атрибуттарды жою"
      },
      {
        id: "14ecb58d-b7e6-4a84-ab86-1fb173d7e1d8",
        text: "SQL сұраныстарын азайту"
      },
      {
        id: "3855b95b-8eac-4f9c-b20a-c649663e2fa4",
        text: "Индекстерді алып тастау"
      },
      {
        id: "ff2959dd-831f-4490-bd47-61c32be1892c",
        text: "Барлық нысандарды бір үлкен кестеге біріктіру"
      },
      {
        id: "f451f81e-0ad4-4dcc-8356-64aff16b3edd",
        text: "ER-диаграммадағы барлық байланыс сызықтарын алып тастау"
      },
      {
        id: "7f17a7ad-cc13-4f7a-885f-d311ab05a747",
        text: "Атрибуттардың деректер типін өзгерту арқылы схеманы жеңілдету"
      },
      {
        id: "fae97293-d315-4ec8-adcf-3eecd98e2f1b",
        text: "Нысандар санын шектеу үшін қайталанатын деректерді сақтау"
      }
    ],
    correctOptionIds: [
      "4a839306-1d18-4ebc-a3cc-06f31c1c8d70"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b54",
    subjectId: SubjectId.DB,
    text: "Дерекқорды жобалау кезеңінде ER-модель қай модельден кейін құрылады?",
    options: [
      {
        id: "db-t04-b54-op1",
        text: "Талаптарды талдау мен анықтау (Requirements analysis) кезеңінен кейін"
      },
      {
        id: "db-t04-b54-op2",
        text: "Логикалық жобалаудан кейін"
      },
      {
        id: "db-t04-b54-op3",
        text: "Физикалық файлдарды құрғаннан кейін"
      },
      {
        id: "db-t04-b54-op4",
        text: "Дерекқорды тексергеннен кейін"
      },
      {
        id: "db-t04-b54-op5",
        text: "Концептуалды модельді реляциялық кестелерге айналдырғаннан кейін"
      },
      {
        id: "db-t04-b54-op6",
        text: "Дерекқорды физикалық деңгейде оңтайландырғаннан кейін"
      },
      {
        id: "db-t04-b54-op7",
        text: "SQL сұраныстарын жазып, деректерді енгізгеннен кейін"
      },
      {
        id: "db-t04-b54-op8",
        text: "Пайдаланушы интерфейсін толық жобалап болғаннан кейін"
      }
    ],
    correctOptionIds: [
      "db-t04-b54-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d4ad7166-2a07-439b-8527-8353441ef433",
    subjectId: SubjectId.DB,
    text: "ER-диаграммадағы байланыс (Relationship) реляциялық модельге аударылғанда әрдайым жеке кестеге айнала ма?",
    options: [
      {
        id: "5e6215f5-35d7-46e8-9f6e-1884b723452e",
        text: "Жоқ, тек көптен-көпке (M:N) байланысы болғанда немесе байланыстың өз атрибуттары болғанда ғана жеке кестеге айналады"
      },
      {
        id: "dd0ab454-a21c-46d7-b4b8-cf73ca2ae0d6",
        text: "Иә, кез келген байланыс міндетті түрде жеке кестеге айналады"
      },
      {
        id: "c1dc9a98-b3e3-440a-9c39-9ffecbdea920",
        text: "Тек 1:1 байланысы болғанда ғана"
      },
      {
        id: "94bcbc2f-9dcf-4503-bd08-f4f765c8df9c",
        text: "Тек әлсіз нысандар үшін ғана"
      },
      {
        id: "52943832-5c89-4a23-a657-d7cec134fe4a",
        text: "Иә, егер байланыс міндетті (mandatory) қатысушылардан тұрса, ол әрдайым жеке кестеге айналады"
      },
      {
        id: "6449dc14-f555-44c0-913c-c4df5f2898ae",
        text: "Жоқ, барлық байланыстар тек негізгі кестелерге сыртқы кілт ретінде қосылады және ешқашан жеке кесте жасалмайды"
      },
      {
        id: "6fe58886-d203-4232-822d-4eacdbf4cc13",
        text: "Тек бірден-көпке (1:N) байланысы болғанда ғана жеке кестеге айналады"
      },
      {
        id: "076bb7b9-4a4e-4676-be4d-6bbf5b057711",
        text: "Иә, егер байланыс транзитивті болса, ол міндетті түрде жеке кестеге бөлінеді"
      }
    ],
    correctOptionIds: [
      "5e6215f5-35d7-46e8-9f6e-1884b723452e"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b55",
    subjectId: SubjectId.DB,
    text: "ER-модельдегі \"N-ary Relationship\" (N-тік байланыс) реляциялық модельге қалай аударылады?",
    options: [
      {
        id: "db-t04-b55-op1",
        text: "Ол үшін жеке кесте құрылып, оған қатысушы барлық N нысандардың бастапқы кілттері сыртқы кілт ретінде қосылады"
      },
      {
        id: "db-t04-b55-op2",
        text: "Ол ең үлкен нысанның ішіне баған болып қосылады"
      },
      {
        id: "db-t04-b55-op3",
        text: "Ол мүлдем жойылады"
      },
      {
        id: "db-t04-b55-op4",
        text: "Ол тек бірнеше 1:1 байланыстарына бөлінеді"
      },
      {
        id: "db-t04-b55-op5",
        text: "Барлық қатысушы нысандардың атрибуттары бір ғана кестеге біріктіріліп, N-тік байланыс жеке кестесіз жүзеге асырылады"
      },
      {
        id: "db-t04-b55-op6",
        text: "N-тік байланыс екі нысан арасындағы көпті-көп (M:N) байланыс ретінде қарастырылып, тек екі сыртқы кілттен тұратын кестеге айналады"
      },
      {
        id: "db-t04-b55-op7",
        text: "Байланыс түрін сақтау үшін әрбір қатысушы нысанға жаңа баған қосылып, онда басқа барлық нысандардың ID мәндері тізім ретінде жазылады"
      },
      {
        id: "db-t04-b55-op8",
        text: "N-тік байланыс автоматты түрде жоғары деңгейдегі иерархиялық құрылымға ауыстырылып, басты нысан ғана сақталады"
      }
    ],
    correctOptionIds: [
      "db-t04-b55-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b56",
    subjectId: SubjectId.DB,
    text: "ER жобалауында \"субъект данасы\" (Entity Instance) деген не?",
    options: [
      {
        id: "db-t04-b56-op1",
        text: "Нысан жиынындағы нақты бір нақты объект (мысалы, 'Азамат' есімді нақты студент)"
      },
      {
        id: "db-t04-b56-op2",
        text: "Кестенің барлық бағандарының атауы"
      },
      {
        id: "db-t04-b56-op3",
        text: "Деректердің типі"
      },
      {
        id: "db-t04-b56-op4",
        text: "Бастапқы кілттің форматы"
      },
      {
        id: "db-t04-b56-op5",
        text: "Нысан түрінің (Entity Type) жалпы сипаттамасы немесе анықтамасы"
      },
      {
        id: "db-t04-b56-op6",
        text: "Екі нысан жиынының арасындағы байланыс схемасы"
      },
      {
        id: "db-t04-b56-op7",
        text: "Деректер қорындағы барлық жазбалардың жиынтық кестесі"
      },
      {
        id: "db-t04-b56-op8",
        text: "Нысан атрибуттарының рұқсат етілген мәндер ауқымы"
      }
    ],
    correctOptionIds: [
      "db-t04-b56-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b57",
    subjectId: SubjectId.DB,
    text: "ER-модельдегі \"Weak Entity\" (Әлсіз нысан) өзін анықтайтын күшті нысансыз өмір сүре ала ма?",
    options: [
      {
        id: "db-t04-b57-op1",
        text: "Жоқ, күшті нысандағы сәйкес жол жойылса, әлсіз нысандағы сәйкес жолдар да өмір сүруін тоқтатады (CASCADE жойылады)"
      },
      {
        id: "db-t04-b57-op2",
        text: "Иә, дербес жұмыс істей береді"
      },
      {
        id: "db-t04-b57-op3",
        text: "Тек сандық деректер болса ғана өмір сүреді"
      },
      {
        id: "db-t04-b57-op4",
        text: "Пайдаланушы рұқсат берсе өмір сүреді"
      },
      {
        id: "db-t04-b57-op5",
        text: "Иә, егер әлсіз нысанның өзіндік бастапқы кілті (Primary Key) болса, ол тәуелсіз өмір сүре алады"
      },
      {
        id: "db-t04-b57-op6",
        text: "Жоқ, бірақ тек дерекқор ішіндегі көшірме (backup) жасалған жағдайда ғана сақталады"
      },
      {
        id: "db-t04-b57-op7",
        text: "Иә, егер әлсіз нысанға арнайы триггер орнатылса, ол күшті нысансыз да жұмыс істей береді"
      },
      {
        id: "db-t04-b57-op8",
        text: "Жоқ, тек уақытша кесте ретінде құрылса ғана күшті нысансыз өмір сүре алады"
      }
    ],
    correctOptionIds: [
      "db-t04-b57-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b58",
    subjectId: SubjectId.DB,
    text: "Crow's Foot нотациясында \"бір немесе көп\" (One or More) байланысы қалай белгіленеді?",
    options: [
      {
        id: "db-t04-b58-op1",
        text: "Тік сызықша мен қарға аяғының комбинациясы арқылы"
      },
      {
        id: "db-t04-b58-op2",
        text: "Тек дөңгелекшемен"
      },
      {
        id: "db-t04-b58-op3",
        text: "Қос тік сызықшамен"
      },
      {
        id: "db-t04-b58-op4",
        text: "Жұлдызшамен"
      },
      {
        id: "db-t04-b58-op5",
        text: "Тек қарға аяғының белгісі арқылы"
      },
      {
        id: "db-t04-b58-op6",
        text: "Дөңгелекше мен қарға аяғының комбинациясы арқылы"
      },
      {
        id: "db-t04-b58-op7",
        text: "Үшбұрыштық белгі мен тік сызықша арқылы"
      },
      {
        id: "db-t04-b58-op8",
        text: "Қос дөңгелекше мен жұлдызшаның үйлесімі арқылы"
      }
    ],
    correctOptionIds: [
      "db-t04-b58-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b59",
    subjectId: SubjectId.DB,
    text: "Crow's Foot нотациясында \"нөл немесе көп\" (Zero or More) байланысы қалай көрсетіледі?",
    options: [
      {
        id: "db-t04-b59-op1",
        text: "Дөңгелекше мен қарға аяғының комбинациясы арқылы"
      },
      {
        id: "db-t04-b59-op2",
        text: "Тек тік сызықшамен"
      },
      {
        id: "db-t04-b59-op3",
        text: "Сызықсыз бос қалдырылады"
      },
      {
        id: "db-t04-b59-op4",
        text: "Сұрақ белгісімен"
      },
      {
        id: "db-t04-b59-op5",
        text: "Тек қарға аяғы белгісі арқылы"
      },
      {
        id: "db-t04-b59-op6",
        text: "Тік сызықша мен қарға аяғының комбинациясы арқылы"
      },
      {
        id: "db-t04-b59-op7",
        text: "Дөңгелекше мен тік сызықшаның қосындысы арқылы"
      },
      {
        id: "db-t04-b59-op8",
        text: "Үшбұрышты белгі мен дөңгелекшенің үйлесімі арқылы"
      }
    ],
    correctOptionIds: [
      "db-t04-b59-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b60",
    subjectId: SubjectId.DB,
    text: "Питер Чен ұсынған ER-модель концепциясы қай жылы жарияланды?",
    options: [
      {
        id: "db-t04-b60-op1",
        text: "1976 жылы"
      },
      {
        id: "db-t04-b60-op2",
        text: "1980 жылы"
      },
      {
        id: "db-t04-b60-op3",
        text: "1970 жылы"
      },
      {
        id: "db-t04-b60-op4",
        text: "1985 жылы"
      },
      {
        id: "db-t04-b60-op5",
        text: "1974 жылы"
      },
      {
        id: "db-t04-b60-op6",
        text: "1978 жылы"
      },
      {
        id: "db-t04-b60-op7",
        text: "1975 жылы"
      },
      {
        id: "db-t04-b60-op8",
        text: "1977 жылы"
      }
    ],
    correctOptionIds: [
      "db-t04-b60-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0edc0acf-60c0-4016-8267-9a36766aa52a",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі \"Specialization\" (Мамандандыру) кезінде қолданылатын \"Total Specialization\" (қос сызықпен белгіленеді) шектеуі нені білдіреді?",
    options: [
      {
        id: "9e6a95fe-42b2-4441-a6e9-3f255f11cb1e",
        text: "Суперкластың әрбір данасы міндетті түрде кем дегенде бір ішкі класқа жатуы тиіс"
      },
      {
        id: "886fa323-4444-45d8-9f49-c606bb6b12df",
        text: "Ішкі кластардың мүлдем болмауын талап етеді"
      },
      {
        id: "7665b9dc-6c78-463a-80a1-d289fba8f97e",
        text: "Бастапқы кілттің бірегей болмауын білдіреді"
      },
      {
        id: "fdad875e-c90b-465a-ae2f-b9bd9d280b98",
        text: "Тек уақытша деректерге рұқсат береді"
      },
      {
        id: "4bccaaeb-255a-495b-b134-15b9ddf4950b",
        text: "Суперкластың кейбір даналары ешқандай ішкі класқа жатпауы мүмкін"
      },
      {
        id: "0f2b2fcf-984c-46f6-b7dc-ce562a27c995",
        text: "Ішкі кластар бір-бірімен қиылысуы міндетті түрде тыйым салынады"
      },
      {
        id: "3a2e6408-4e8b-4577-b15b-764b099232f3",
        text: "Суперклас тек бір ғана ішкі класқа мамандандырылуы керек"
      },
      {
        id: "fccd92cc-e6cd-475f-88c6-40f834e9f14b",
        text: "Бұл шектеу деректердің уақыт бойынша өзгеруін бақылайды"
      }
    ],
    correctOptionIds: [
      "9e6a95fe-42b2-4441-a6e9-3f255f11cb1e"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b61",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі \"Partial Specialization\" (жалғыз сызықпен белгіленеді) шектеуі нені білдіреді?",
    options: [
      {
        id: "db-t04-b61-op1",
        text: "Суперкластың данасы ішкі кластардың ешқайсысына жатпауы да мүмкін"
      },
      {
        id: "db-t04-b61-op2",
        text: "Суперкластың данасы міндетті түрде барлық ішкі кластарға жатуы керек"
      },
      {
        id: "db-t04-b61-op3",
        text: "Бастапқы кілттің міндетті түрде NULL болуын талап етеді"
      },
      {
        id: "db-t04-b61-op4",
        text: "Деректердің қате жазылуына жол береді"
      },
      {
        id: "db-t04-b61-op5",
        text: "Суперкластың әрбір данасы міндетті түрде кем дегенде бір ішкі класқа жатуы тиіс"
      },
      {
        id: "db-t04-b61-op6",
        text: "Ішкі кластардың арасында қиылысуға (overlap) тыйым салынады"
      },
      {
        id: "db-t04-b61-op7",
        text: "Бұл шектеу тек бір ғана ішкі класстың болуына рұқсат береді"
      },
      {
        id: "db-t04-b61-op8",
        text: "Суперклас пен ішкі кластар арасындағы байланыс уақытша болып табылады"
      }
    ],
    correctOptionIds: [
      "db-t04-b61-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b86298ef-0295-44c1-b81b-ddcbcf2d47d8",
    subjectId: SubjectId.DB,
    text: "ER жобалауында \"атрибуттардың артықшылығын\" (attribute redundancy) болдырмау үшін не істеу керек?",
    options: [
      {
        id: "aa072341-dcc6-4ef3-81a8-04735651031f",
        text: "Бір қасиетті бірнеше нысанда қайталап сақтамай, тиісті байланыстар арқылы ғана сілтеу"
      },
      {
        id: "11e9b490-3622-4055-8c46-c1a9ef7cc472",
        text: "Барлық бағандарды бір кестеге жинау"
      },
      {
        id: "feffc666-1e5f-4bc4-a177-bfd0af560790",
        text: "Индекстерді көбейту"
      },
      {
        id: "dc713fc5-fba5-498e-a740-b84104449907",
        text: "Деректердің типін тек VARCHAR ету"
      },
      {
        id: "f6bedd7f-8487-4ca5-933d-a7ffb6275487",
        text: "Әрбір атрибутты дерекқорда кемінде екі рет қайталап сақтау арқылы сенімділікті арттыру"
      },
      {
        id: "5dce81c7-a95e-426e-abbe-e195d4565b6b",
        text: "Атрибуттардың қайталануын болдырмау үшін барлық кестелерге бірдей бірегей кілттерді (Primary Key) қосу"
      },
      {
        id: "d9371d94-0e99-4023-bfa5-c52d63602c56",
        text: "Артықшылықты жою мақсатында барлық сандық мәндерді мәтіндік форматқа ауыстыру"
      },
      {
        id: "d7efd03d-2b7a-4358-98bc-b9689252c7f9",
        text: "ER диаграммасындағы барлық байланыстарды алып тастап, тек жеке нысандарды қалдыру"
      }
    ],
    correctOptionIds: [
      "aa072341-dcc6-4ef3-81a8-04735651031f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b62",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада әлсіз нысанның (Weak Entity) ішінара кілті қалай аталады?",
    options: [
      {
        id: "db-t04-b62-op1",
        text: "Дискриминатор (Discriminator)"
      },
      {
        id: "db-t04-b62-op2",
        text: "Сыртқы кілт (Foreign Key)"
      },
      {
        id: "db-t04-b62-op3",
        text: "Жасанды кілт (Surrogate Key)"
      },
      {
        id: "db-t04-b62-op4",
        text: "Ішкі кілт (Internal Key)"
      },
      {
        id: "db-t04-b62-op5",
        text: "Бастапқы кілт (Primary Key)"
      },
      {
        id: "db-t04-b62-op6",
        text: "Кандидаттық кілт (Candidate Key)"
      },
      {
        id: "db-t04-b62-op7",
        text: "Композиттік кілт (Composite Key)"
      },
      {
        id: "db-t04-b62-op8",
        text: "Кітап — Автор"
      }
    ],
    correctOptionIds: [
      "db-t04-b62-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "821e6889-a229-4253-8888-7ece830462eb",
    subjectId: SubjectId.DB,
    text: "ER-модельдегі екі нысан арасындағы байланыстың қатысу дәрежесі (degree of relationship) деген не?",
    options: [
      {
        id: "b029a784-69ae-408e-8c67-477e74112d56",
        text: "Байланысқа қатысатын нысан жиындарының саны (мысалы, екілік, үштік)"
      },
      {
        id: "b84cb1ae-e67b-4881-bba5-dcce2a8f35c5",
        text: "Кестедегі жолдардың саны"
      },
      {
        id: "f51159f7-a62c-4072-8287-b8f1406afc80",
        text: "Бастапқы кілттің ұзындығы"
      },
      {
        id: "5ab536fd-8752-4adc-b234-78f609a7fb2f",
        text: "Сұраныстың орындалу жылдамдығы"
      },
      {
        id: "de1bdfdf-3081-48e8-8749-3774a7c6ffcc",
        text: "Нысандар арасындағы кардиналдылық қатынасы (1:1, 1:N, M:N)"
      },
      {
        id: "912ae50a-8bd3-4682-9bd9-d9f15e4715b3",
        text: "Байланысқа тән атрибуттардың жалпы саны"
      },
      {
        id: "41776fc5-db65-4077-9af4-44999a9f980f",
        text: "Нысан жиынының кілттік өрістерінің деректер типі"
      },
      {
        id: "aafc8499-3e5e-4249-b5ac-5a404211a0f5",
        text: "Байланыстың минималды және максималды қатысу шектері"
      }
    ],
    correctOptionIds: [
      "b029a784-69ae-408e-8c67-477e74112d56"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1135e465-8e4e-4eb5-8138-d8db5919dd9f",
    subjectId: SubjectId.DB,
    text: "ER-модельде \"Composite Attribute\" (Құрама атрибут) қабылдайтын мәндер реляциялық модельге аударылғанда не болады?",
    options: [
      {
        id: "09429030-c47a-4e1f-9834-e049a8461946",
        text: "Оның құрамдас бөліктері жеке-жеке бағандар (Field) болып кестеге қосылады"
      },
      {
        id: "1c9d854f-74a6-42ee-b43c-18a0b409e5da",
        text: "Ол тек бір мәтіндік баған болып қалады"
      },
      {
        id: "70e68837-a2fc-4ec3-83d0-63eb1eabbc37",
        text: "Кестеде ешқандай өзгеріс болмайды"
      },
      {
        id: "ba335e59-daa5-4fed-b1db-cb30a6ca66b1",
        text: "Ол баған мүлдем өшіріледі"
      },
      {
        id: "210ce720-0818-44a3-9358-683d95ffa34c",
        text: "Ол кестеге қосымша жана кесте ретінде бөлек шығарылады"
      },
      {
        id: "bd4b55b2-936d-452a-8487-2239417fba46",
        text: "Оның құрамдас бөліктері бір баған ішінде үтірмен бөлінген мәтін түрінде сақталады"
      },
      {
        id: "d509718b-575d-4ff9-a9ce-83c643549ada",
        text: "Ол автоматты түрде негізгі кілт (Primary Key) атрибутына айналады"
      },
      {
        id: "fc76795a-5159-48f7-be44-77d3fd9b5b3e",
        text: "Оның тек бірінші құрамдас бөлігі ғана кестеге көшіріледі, қалғаны жоғалады"
      }
    ],
    correctOptionIds: [
      "09429030-c47a-4e1f-9834-e049a8461946"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "4f7cb120-bb38-41ba-9362-fb19511ec287",
    subjectId: SubjectId.DB,
    text: "ER-модельді реляциялық модельге көшіргенде 1:1 (бірден-бірге) байланысы қалай дұрыс іске асырылады?",
    options: [
      {
        id: "2b4c66fd-4f87-46c2-8e1b-71c3aa5209f2",
        text: "Бір нысанның бастапқы кілті екінші нысанның кестесіне сыртқы кілт әрі бірегей (UNIQUE) баған ретінде қосылады"
      },
      {
        id: "09ed238e-6974-48ac-83ee-40efcc1c313f",
        text: "Міндетті түрде үшінші байланыстырушы кесте құрылады"
      },
      {
        id: "5c284297-9f64-447a-a41a-1543075870af",
        text: "Екі кестеге де бірдей AUTO_INCREMENT мәні беріледі"
      },
      {
        id: "80019664-b0b1-4049-99ce-7d1ec830dd3d",
        text: "Байланыс мүлдем ескерілмейді"
      },
      {
        id: "0273c946-18a1-4591-9fd9-f921622d5b88",
        text: "Екі кестенің де бастапқы кілттері біріктіріліп, құрама кілт (composite key) жасалады"
      },
      {
        id: "6167ce4f-84b8-429b-bf76-ebaa41023388",
        text: "Байланысқан екі кестеге де бірдей атаулы сыртқы кілт қосылып, UNIQUE шектеусіз сақталады"
      },
      {
        id: "227c7a29-f5c4-4d3e-95c8-1f532bfb3a0e",
        text: "1:1 байланысы үшін міндетті түрде екі бағытта да сыртқы кілттер орнатылады"
      },
      {
        id: "1d347aba-4bab-4095-972b-4765a5daae04",
        text: "Бір нысанның деректері екінші кестеге толығымен көшіріліп, екі кестенің біреуі жойылады"
      }
    ],
    correctOptionIds: [
      "2b4c66fd-4f87-46c2-8e1b-71c3aa5209f2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b63",
    subjectId: SubjectId.DB,
    text: "\"Strong Entity\" (Күшті нысан) анықтамасы қандай?",
    options: [
      {
        id: "db-t04-b63-op1",
        text: "Басқа нысандарға тәуелсіз, өзінің бірегей бастапқы кілті бар дербес нысан"
      },
      {
        id: "db-t04-b63-op2",
        text: "Ең үлкен кесте"
      },
      {
        id: "db-t04-b63-op3",
        text: "Тек сандық деректерді сақтайтын кесте"
      },
      {
        id: "db-t04-b63-op4",
        text: "Индекстері тым көп кесте"
      },
      {
        id: "db-t04-b63-op5",
        text: "Басқа нысанға тәуелді болғандықтан, өз бастапқы кілті жоқ нысан"
      },
      {
        id: "db-t04-b63-op6",
        text: "Тек басқа нысандармен қарым-қатынас орнату үшін ғана қолданылатын аралық кесте"
      },
      {
        id: "db-t04-b63-op7",
        text: "Уақытша деректерді сақтауға арналған және тұрақты кілті жоқ нысан"
      },
      {
        id: "db-t04-b63-op8",
        text: "Өз кілті болмағандықтан, ата-нысанның кілтін міндетті түрде қайталайтын нысан"
      }
    ],
    correctOptionIds: [
      "db-t04-b63-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b64",
    subjectId: SubjectId.DB,
    text: "ER жобалауда екі нысан арасындағы байланыс (Relationship) қай фигураның ішіне жазылады?",
    options: [
      {
        id: "db-t04-b64-op1",
        text: "Ромб (Diamond)"
      },
      {
        id: "db-t04-b64-op2",
        text: "Тікбұрыш (Rectangle)"
      },
      {
        id: "db-t04-b64-op3",
        text: "Сопақша (Oval)"
      },
      {
        id: "db-t04-b64-op4",
        text: "Шеңбер (Circle)"
      },
      {
        id: "db-t04-b64-op5",
        text: "Үшбұрыш (Triangle)"
      },
      {
        id: "db-t04-b64-op6",
        text: "Алтыбұрыш (Hexagon)"
      },
      {
        id: "db-t04-b64-op7",
        text: "Параллелограмм (Parallelogram)"
      },
      {
        id: "db-t04-b64-op8",
        text: "Трапеция (Trapezoid)"
      }
    ],
    correctOptionIds: [
      "db-t04-b64-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b65",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада әлсіз нысанның аты қай фигураның ішіне жазылады?",
    options: [
      {
        id: "db-t04-b65-op1",
        text: "Қос тікбұрыш (Double Rectangle)"
      },
      {
        id: "db-t04-b65-op2",
        text: "Қос ромб"
      },
      {
        id: "db-t04-b65-op3",
        text: "Қос сопақша"
      },
      {
        id: "db-t04-b65-op4",
        text: "Үшбұрыш"
      },
      {
        id: "db-t04-b65-op5",
        text: "Жай тікбұрыш"
      },
      {
        id: "db-t04-b65-op6",
        text: "Қос сызықты ромб"
      },
      {
        id: "db-t04-b65-op7",
        text: "Штрихталған сопақша"
      },
      {
        id: "db-t04-b65-op8",
        text: "Үштік тікбұрыш"
      }
    ],
    correctOptionIds: [
      "db-t04-b65-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b66",
    subjectId: SubjectId.DB,
    text: "ER-модельді құрудың басты мақсаты қандай?",
    options: [
      {
        id: "db-t04-b66-op1",
        text: "Дерекқордың концептуалды құрылымын нақты ДҚБЖ бағдарламасынан тәуелсіз, көрнекі түрде сипаттау"
      },
      {
        id: "db-t04-b66-op2",
        text: "SQL кестелерін автоматты түрде дискіге жазу"
      },
      {
        id: "db-t04-b66-op3",
        text: "Пайдаланушы интерфейсін безендіру"
      },
      {
        id: "db-t04-b66-op4",
        text: "Транзакциялардың жылдамдығын арттыру"
      },
      {
        id: "db-t04-b66-op5",
        text: "Дерекқордағы деректерді физикалық тұрғыдан оңтайландыру және индекстеу"
      },
      {
        id: "db-t04-b66-op6",
        text: "SQL сұраныстарын орындау жылдамдығын тікелей арттыру"
      },
      {
        id: "db-t04-b66-op7",
        text: "Қолданбаның графикалық интерфейсін жобалау және құрастыру"
      },
      {
        id: "db-t04-b66-op8",
        text: "Дерекқорды басқару жүйесінің (ДҚБЖ) лицензиясын таңдау"
      }
    ],
    correctOptionIds: [
      "db-t04-b66-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "d61d1d3e-4994-4d7f-ac14-b11927003919",
    subjectId: SubjectId.DB,
    text: "ER-диаграммадағы байланыс сызықтарының үстіне жазылатын \"1\" және \"M\" белгілері нені білдіреді?",
    options: [
      {
        id: "5184eb22-9abc-47aa-827e-98802021b96d",
        text: "Байланыстың кардиналдық қатынасын (бірден-көпке)"
      },
      {
        id: "04b9ef17-0316-40b6-b86e-920d978ad03c",
        text: "Бастапқы кілттердин санын"
      },
      {
        id: "cfed6438-cc95-4a61-9726-a293f46bddcb",
        text: "Кестедегі индекстердің деңгейін"
      },
      {
        id: "e56eae8f-5da0-4d1d-a25d-fb0607d9b077",
        text: "Деректердің оқылу ретін"
      },
      {
        id: "40940294-691e-4761-a42d-88bdaac8c84a",
        text: "Атрибуттардың деректер типін"
      },
      {
        id: "211877ae-72f6-48eb-a3ec-48003da2595d",
        text: "Кестелер арасындағы физикалық қашықтықты"
      },
      {
        id: "0386a5f2-1fd8-4d2e-81f5-cac3bc8a41cd",
        text: "Байланыстың міндетті немесе ерікті екендігін"
      },
      {
        id: "47cc069d-1dfe-4abc-9104-a7b300a1cfbd",
        text: "Дерекқордағы жазбалардың жалпы санын"
      }
    ],
    correctOptionIds: [
      "5184eb22-9abc-47aa-827e-98802021b96d"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b67",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі \"Subclass\" (Ішкі класс) деген не?",
    options: [
      {
        id: "db-t04-b67-op1",
        text: "Суперкласс нысанының ортақ қасиеттерінен тыс қосымша ерекше атрибуттары бар ішкі топ нысаны"
      },
      {
        id: "db-t04-b67-op2",
        text: "Бастапқы кестенің көшірмесі"
      },
      {
        id: "db-t04-b67-op3",
        text: "Кестенің бірінші бағаны"
      },
      {
        id: "db-t04-b67-op4",
        text: "Уақытша сақталатын деректер жиыны"
      },
      {
        id: "db-t04-b67-op5",
        text: "Суперкласспен ешқандай байланысы жоқ, дербес жасалған толық жаңа нысан түрі"
      },
      {
        id: "db-t04-b67-op6",
        text: "Дерекқордағы барлық кестелерді біріктіретін жалпылама логикалық қабықша"
      },
      {
        id: "db-t04-b67-op7",
        text: "Суперкласстың барлық атрибуттарын толығымен алып тастап, тек идентификаторды қалдыратын нұсқа"
      },
      {
        id: "db-t04-b67-op8",
        text: "Уақыт өте келе жойылатын және тұрақты сақталмайтын деректер құрылымы"
      }
    ],
    correctOptionIds: [
      "db-t04-b67-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b68",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі \"Superclass\" (Суперкласс) деген не?",
    options: [
      {
        id: "db-t04-b68-op1",
        text: "Ішкі кластарға тән барлық ортақ атрибуттар мен байланыстарды сақтайтын жоғары деңгейлі нысан"
      },
      {
        id: "db-t04-b68-op2",
        text: "Дерекқордың ең үлкен файл тобы"
      },
      {
        id: "db-t04-b68-op3",
        text: "Сервердегі ең басты кесте"
      },
      {
        id: "db-t04-b68-op4",
        text: "SQL сұраныстарын басқаратын процесс"
      },
      {
        id: "db-t04-b68-op5",
        text: "Тек бір ғана ішкі класқа арналған жеке атрибуттар жиынтығы"
      },
      {
        id: "db-t04-b68-op6",
        text: "Дерекқордағы барлық кестелер арасындағы физикалық байланыс жолы"
      },
      {
        id: "db-t04-b68-op7",
        text: "Суперкласс пен ішкі класстар арасындағы деректерді көшіру алгоритмі"
      },
      {
        id: "db-t04-b68-op8",
        text: "ER-диаграммада тек қана сыртқы кілттерді сақтайтын арнайы кесте"
      }
    ],
    correctOptionIds: [
      "db-t04-b68-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "77ef280b-83f2-46f3-8a0d-eeaa65df305f",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі жалпылау (Generalization) және мамандандыру (Specialization) арасындағы байланыс қандай?",
    options: [
      {
        id: "2084ee94-3d7f-4ec3-a67b-597f9729d82c",
        text: "Олар бір-біріне қарама-қарсы процестер (бірі төменнен жоғарыға, екіншісі жоғарыдан төменге бағытталған)"
      },
      {
        id: "836db58a-d56e-44ef-8ade-29c4aee76eea",
        text: "Олар бірдей мағынаны білдіреді"
      },
      {
        id: "bb268306-1f58-443a-befc-49977806d3d3",
        text: "Олар тек NoSQL-де қолданылады"
      },
      {
        id: "ac537ddb-6363-4654-a7e6-8bc801b2e7aa",
        text: "Олар тек транзакцияларды журналдайды"
      },
      {
        id: "a73a512f-2817-4447-945a-bd20d5d11567",
        text: "Жалпылау тек атрибуттарды біріктіреді, ал мамандандыру тек қатынастарды ажыратады"
      },
      {
        id: "8853c60b-ff04-46af-a4a8-83db4661eca8",
        text: "Бұл процестер дерекқордың физикалық сақтау құрылымын өзгерту үшін ғана қолданылады"
      },
      {
        id: "6740d1db-2ccc-4282-97ef-442d2e660874",
        text: "Жалпылау жоғарыдан төменге, ал мамандандыру төменнен жоғарыға бағытталған процестер"
      },
      {
        id: "47461982-dcc6-4de8-9826-a80b6ecb0716",
        text: "Мамандандыру кезінде деректер көшіріледі, ал жалпылау кезінде деректер жойылады"
      }
    ],
    correctOptionIds: [
      "2084ee94-3d7f-4ec3-a67b-597f9729d82c"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "34879252-7a97-4385-9896-ccf06aae7b97",
    subjectId: SubjectId.DB,
    text: "ER жобалауында \"көпмәнді атрибут\" (мысалы, жұмысшының біліктілік сертификаттары) реляциялық кестеде жай баған болып қалса не болады?",
    options: [
      {
        id: "17657da7-c19b-40c1-84f3-7902384fae35",
        text: "Бірінші қалыпты форма (1NF) шарты бұзылып, мәндердің атомарлығы жойылады"
      },
      {
        id: "a3787734-b77f-4839-af54-dcf9afb0f073",
        text: "Кесте жылдам жұмыс істейді"
      },
      {
        id: "f8a26841-5537-41a6-8234-825f48f19e02",
        text: "Ешқандай қателік болмайды"
      },
      {
        id: "daa63ca6-66bd-41be-bac8-830171b62f1b",
        text: "Индектер автоматты түрде өшеді"
      },
      {
        id: "0d6c6fcc-14a8-4947-b977-d6d48cd5cd78",
        text: "Кесте автоматты түрде Екінші қалыпты формаға (2NF) ауысады"
      },
      {
        id: "eaab86e5-75cd-4390-a867-1565f31bdf39",
        text: "Деректердің тұтастығы сақталып, тек сақтау көлемі ұлғаяды"
      },
      {
        id: "7d8c221c-d071-4764-a619-3d2885aa4d99",
        text: "Атрибуттар тізімі JSON форматына автоматты түрде конвертацияланады"
      },
      {
        id: "b0301691-02d8-4523-95f4-f155e7a1341f",
        text: "Бұл әдіс дерекқордың икемділігін арттырып, нормализациялаудың қажеті жоқ деп саналады"
      }
    ],
    correctOptionIds: [
      "17657da7-c19b-40c1-84f3-7902384fae35"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b69",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада \"үйлесімді байланыс\" (Consistent Relationship) қалай қамтамасыз етіледі?",
    options: [
      {
        id: "db-t04-b69-op1",
        text: "Байланысатын нысандардың атрибуттары мен домендерінің үйлесімді болуы арқылы"
      },
      {
        id: "db-t04-b69-op2",
        text: "Желілік байланысты жақсарту арқылы"
      },
      {
        id: "db-t04-b69-op3",
        text: "Барлық кестелерді өшіру арқылы"
      },
      {
        id: "db-t04-b69-op4",
        text: "SQL-ді қолданбау арқылы"
      },
      {
        id: "db-t04-b69-op5",
        text: "Барлық байланыстарды бір ғана кестеге біріктіру арқылы"
      },
      {
        id: "db-t04-b69-op6",
        text: "Деректер түрлерін автоматты түрде өзгерту (implicit casting) мүмкіндігін қосу арқылы"
      },
      {
        id: "db-t04-b69-op7",
        text: "Байланыс сызықтарына міндетті түрде бағыт көрсеткіштерін қою арқылы"
      },
      {
        id: "db-t04-b69-op8",
        text: "Нысандар арасындағы кардиналдықты шектеусіз ету арқылы"
      }
    ],
    correctOptionIds: [
      "db-t04-b69-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b70",
    subjectId: SubjectId.DB,
    text: "ER-модельдегі \"Relationship Set\" (Байланыстар жиыны) деген не?",
    options: [
      {
        id: "db-t04-b70-op1",
        text: "Ұқсас типтегі жекелеген байланыстардың (мысалы, барлық студенттердің пәндерге жазылуы) математикалық жиынтығы"
      },
      {
        id: "db-t04-b70-op2",
        text: "Кестедегі индекстер жиынтығы"
      },
      {
        id: "db-t04-b70-op3",
        text: "Транзакциялардың орындалу реті"
      },
      {
        id: "db-t04-b70-op4",
        text: "Пайдаланушы рұқсаттарының тізімі"
      },
      {
        id: "db-t04-b70-op5",
        text: "Бір немесе бірнеше атрибуттардан тұратын деректер түрінің сипаттамасы"
      },
      {
        id: "db-t04-b70-op6",
        text: "Екі кестенің арасындағы сыртқы кілттік байланысты физикалық жүзеге асыру әдісі"
      },
      {
        id: "db-t04-b70-op7",
        text: "Нақты бір уақыт мезетіндегі дерекқорда сақталған барлық жазбалардың көшірмесі"
      },
      {
        id: "db-t04-b70-op8",
        text: "Энтитилер жиынының ішіндегі бірегей идентификаторлардың тізімі"
      }
    ],
    correctOptionIds: [
      "db-t04-b70-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b71",
    subjectId: SubjectId.DB,
    text: "Питер Чен нотациясында байланыс атауы әдетте қандай сөз табымен жазылады?",
    options: [
      {
        id: "db-t04-b71-op1",
        text: "Етістікпен (мысалы, 'Оқиды', 'Жұмыс істейді')"
      },
      {
        id: "db-t04-b71-op2",
        text: "Зат есіммен"
      },
      {
        id: "db-t04-b71-op3",
        text: "Сан есіммен"
      },
      {
        id: "db-t04-b71-op4",
        text: "Ешқандай сөз жазылмайды"
      },
      {
        id: "db-t04-b71-op5",
        text: "Сын есіммен (мысалы, 'Белсенді', 'Жаңа')"
      },
      {
        id: "db-t04-b71-op6",
        text: "Үстеумен (мысалы, 'Жылдам', 'Тұрақты')"
      },
      {
        id: "db-t04-b71-op7",
        text: "Еліктеу сөзбен (мысалы, 'Дыбыс', 'Шу')"
      },
      {
        id: "db-t04-b71-op8",
        text: "Одағаймен (мысалы, 'Әй', 'Ой')"
      }
    ],
    correctOptionIds: [
      "db-t04-b71-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b72",
    subjectId: SubjectId.DB,
    text: "Питер Чен нотациясында нысан (Entity) атауы әдетте қандай сөз табымен жазылады?",
    options: [
      {
        id: "db-t04-b72-op1",
        text: "Зат есіммен (мысалы, 'Student', 'Employee')"
      },
      {
        id: "db-t04-b72-op2",
        text: "Етістікпен"
      },
      {
        id: "db-t04-b72-op3",
        text: "Сын есіммен"
      },
      {
        id: "db-t04-b72-op4",
        text: "Қысқартылған әріптермен"
      },
      {
        id: "db-t04-b72-op5",
        text: "Етістікпен (мысалы, 'Оқу', 'Жұмыс істеу')"
      },
      {
        id: "db-t04-b72-op6",
        text: "Сын есіммен (мысалы, 'Белсенді', 'Жаңа')"
      },
      {
        id: "db-t04-b72-op7",
        text: "Үстеу сөзбен (мысалы, 'Жылдам', 'Дәл қазір')"
      },
      {
        id: "db-t04-b72-op8",
        text: "Сан есіммен (мысалы, 'Бірінші', 'Екі')"
      }
    ],
    correctOptionIds: [
      "db-t04-b72-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b73",
    subjectId: SubjectId.DB,
    text: "ER-диаграммадағы байланыс сызығындағы \"M\" және \"N\" әріптері нені білдіреді?",
    options: [
      {
        id: "db-t04-b73-op1",
        text: "Көптен-көпке (M:N) кардиналдық қатынасын"
      },
      {
        id: "db-t04-b73-op2",
        text: "Минималды және максималды сандарды"
      },
      {
        id: "db-t04-b73-op3",
        text: "Мәндердің NULL болатынын"
      },
      {
        id: "db-t04-b73-op4",
        text: "Бастапқы кілттерді"
      },
      {
        id: "db-t04-b73-op5",
        text: "Бірден-көпке (1:N) қатынасының түрін"
      },
      {
        id: "db-t04-b73-op6",
        text: "Атрибуттардың деректер типін"
      },
      {
        id: "db-t04-b73-op7",
        text: "Кестелер арасындағы сыртқы кілттің атауын"
      },
      {
        id: "db-t04-b73-op8",
        text: "Қатынас кардиналдығының минималды мәнін"
      }
    ],
    correctOptionIds: [
      "db-t04-b73-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b74",
    subjectId: SubjectId.DB,
    text: "EER-модельдегі ішкі кластың (subclass) өз бетінше бастапқы кілті (Primary Key) бола ма?",
    options: [
      {
        id: "db-t04-b74-op1",
        text: "Жоқ, ол өзінің суперкласының бастапқы кілтін иеленіп, оны бастапқы кілт әрі сыртқы кілт ретінде қолданады"
      },
      {
        id: "db-t04-b74-op2",
        text: "Иә, ол өз бетінше мүлдем басқа кілт жасайды"
      },
      {
        id: "db-t04-b74-op3",
        text: "Тек сандық форматта болса ғана болады"
      },
      {
        id: "db-t04-b74-op4",
        text: "Оның мүлдем кілті болмайды"
      },
      {
        id: "db-t04-b74-op5",
        text: "Иә, егер ішкі класта қосымша атрибуттар болса, ол дербес бастапқы кілт талап етеді"
      },
      {
        id: "db-t04-b74-op6",
        text: "Жоқ, ішкі кластың кілті суперкласпен байланыссыз жүйелік түрде автоматты генерацияланады"
      },
      {
        id: "db-t04-b74-op7",
        text: "Иә, бірақ тек ішкі кластағы барлық жазбалар міндетті түрде толтырылған жағдайда ғана"
      },
      {
        id: "db-t04-b74-op8",
        text: "Жоқ, ішкі кластар бастапқы кілтсіз жұмыс істейді және олардың орнына сыртқы кілттер қолданылады"
      }
    ],
    correctOptionIds: [
      "db-t04-b74-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "67375089-ca4f-4a29-a08e-7366b5003373",
    subjectId: SubjectId.DB,
    text: "ER жобалауында екі нысан арасындағы байланыс міндетті емес (Optional) болса, сыртқы кілт (Foreign Key) қандай мәнді қабылдай алады?",
    options: [
      {
        id: "ab75e8c5-2305-4429-b8e3-356dda6d74eb",
        text: "NULL (бос) мәнін қабылдай алады"
      },
      {
        id: "de9d24e9-a68c-41d4-b62e-7a97f87fe213",
        text: "Тек 0 мәнін қабылдайды"
      },
      {
        id: "e5fae4e2-4573-47a3-867d-e57640cd2f39",
        text: "Міндетті түрде бос емес сан болуы керек"
      },
      {
        id: "b7207935-4c0c-4c7a-94ea-9e9ff1f35123",
        text: "Ешқандай мән қабылдамайды"
      },
      {
        id: "ed591c7f-7bcc-4805-b665-541b3e6eaa48",
        text: "Тек DEFAULT мәнін қабылдайды"
      },
      {
        id: "8e52e007-12c2-4c2f-bd40-26118c25410f",
        text: "Байланысқан кестенің бірінші жазбасының ID-сын міндетті түрде алады"
      },
      {
        id: "b5b5319a-3b1d-4fc3-a517-10299de9265b",
        text: "Өздігінен генерацияланатын UNIQUE мәнін сақтайды"
      },
      {
        id: "73978cda-e67d-4717-a14f-dea7028e5523",
        text: "Бос жол (Empty String) мәнін қабылдайды"
      }
    ],
    correctOptionIds: [
      "ab75e8c5-2305-4429-b8e3-356dda6d74eb"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b75",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада әлсіз нысанды (Weak Entity) анықтайтын күшті нысан қалай аталады?",
    options: [
      {
        id: "db-t04-b75-op1",
        text: "Аанықтаушы нысан (Identifying/Owner Entity)"
      },
      {
        id: "db-t04-b75-op2",
        text: "Бағынышты нысан"
      },
      {
        id: "db-t04-b75-op3",
        text: "Әлсіз нысан"
      },
      {
        id: "db-t04-b75-op4",
        text: "Көмекші нысан"
      },
      {
        id: "db-t04-b75-op5",
        text: "Тәуелсіз нысан"
      },
      {
        id: "db-t04-b75-op6",
        text: "Басты қатынас нысаны"
      },
      {
        id: "db-t04-b75-op7",
        text: "Қосымша атрибуттық нысан"
      },
      {
        id: "db-t04-b75-op8",
        text: "Иерархиялық түпкі нысан"
      }
    ],
    correctOptionIds: [
      "db-t04-b75-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b76",
    subjectId: SubjectId.DB,
    text: "ER жобалауында \"аттрибуттардың атомарлылығы\" принципі нені білдіреді?",
    options: [
      {
        id: "db-t04-b76-op1",
        text: "Әр атрибутта тек бір ғана қарапайым (бөлінбейтін) мәннің сақталуын"
      },
      {
        id: "db-t04-b76-op2",
        text: "Мәндердің тек бүтін сандар болуын"
      },
      {
        id: "db-t04-b76-op3",
        text: "Мәндердің міндетті түрде шифрлануын"
      },
      {
        id: "db-t04-b76-op4",
        text: "Тек бір әріптен тұратын мәндерді"
      },
      {
        id: "db-t04-b76-op5",
        text: "Әр атрибуттың мәні тек бір кестеде ғана қайталануы керектігін"
      },
      {
        id: "db-t04-b76-op6",
        text: "Атрибуттардың тек сандық деректерден тұруын талап ететінін"
      },
      {
        id: "db-t04-b76-op7",
        text: "Бір жазбадағы барлық атрибуттардың міндетті түрде толтырылуын"
      },
      {
        id: "db-t04-b76-op8",
        text: "Атрибуттардың атаулары әріптік ретпен орналасуы тиіс екенін"
      }
    ],
    correctOptionIds: [
      "db-t04-b76-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "5bba130f-1841-43e6-977e-2edfa148a363",
    subjectId: SubjectId.DB,
    text: "Crow's Foot нотациясында \"бір және тек біреу ғана\" (One and Only One) байланысы қалай белгіленеді?",
    options: [
      {
        id: "58bd6b3f-55de-4da3-a414-0af053a49c4e",
        text: "Сызықтағы екі тік сызықша (||) арқылы"
      },
      {
        id: "da38f1d0-731e-458a-b381-8a6e780c40bc",
        text: "Тек дөңгелекшемен"
      },
      {
        id: "ba289f08-e71e-44ac-82d9-8aa34b60f402",
        text: "Қарға аяғымен"
      },
      {
        id: "e614f333-a2f1-480e-b61b-930844945922",
        text: "Жұлдызшамен"
      },
      {
        id: "90f9ffc3-64d2-4648-a97e-a6d7f7d5b6b0",
        text: "Бір тік сызықша мен қарға аяғы арқылы"
      },
      {
        id: "de214a29-bf82-4c9e-8c94-d8c235cc204a",
        text: "Дөңгелекше мен қарға аяғының комбинациясымен"
      },
      {
        id: "2e1c0824-550e-4da8-81ea-fd63cfbf9421",
        text: "Екі дөңгелекше (OO) арқылы"
      },
      {
        id: "b51de3b2-370e-4c2f-b9d0-70a2b01b3059",
        text: "Үшбұрыш белгісі арқылы"
      }
    ],
    correctOptionIds: [
      "58bd6b3f-55de-4da3-a414-0af053a49c4e"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "4ff08be2-83e4-4947-9bad-6aedbf538ff9",
    subjectId: SubjectId.DB,
    text: "\"Enhanced ER\" (EER) моделі стандартты ER моделіне қарағанда қандай қосымша концепцияларды енгізді?",
    options: [
      {
        id: "637534ec-c03e-4ec9-8be9-8c4e3f65f5df",
        text: "Суперкластар, ішкі кластар, мұрагерлік, жалпылау және мамандандыру"
      },
      {
        id: "555e31c1-c5c9-412b-8dad-1786c81d18dd",
        text: "Тек сандық индекстерді"
      },
      {
        id: "458e3cdc-d8f0-4c65-94a4-a1219dce865f",
        text: "Тек SQL сұраныстарын оңтайландыруды"
      },
      {
        id: "806640cf-0f5a-4927-a99e-1cd741694b87",
        text: "Дерекқордың физикалық файлдарын басқаруды"
      },
      {
        id: "7df28dae-3d05-4134-b11a-0049fa20f808",
        text: "Транзакцияларды басқару және блоктау механизмдері"
      },
      {
        id: "c900fbf2-652e-4565-96d7-1af5fe98f0fa",
        text: "Деректерді қалыпқа келтіру нормалары (1NF, 2NF, 3NF)"
      },
      {
        id: "4d328e90-8150-470c-ba3a-119f7e6b8296",
        text: "Кестелер арасындағы сыртқы кілттер мен сілтемелік тұтастық"
      },
      {
        id: "d9e081cc-58c6-42ef-9f0b-32abe7e864e4",
        text: "Дерекқорды физикалық деңгейде индекстеу әдістері"
      }
    ],
    correctOptionIds: [
      "637534ec-c03e-4ec9-8be9-8c4e3f65f5df"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t04-b77",
    subjectId: SubjectId.DB,
    text: "ER-модельді жобалауда ең маңызды бірінші қадам қандай?",
    options: [
      {
        id: "db-t04-b77-op1",
        text: "Пайдаланушы талаптары мен бизнес ережелерін нақты анықтау және нысандарды (Entities) табу"
      },
      {
        id: "db-t04-b77-op2",
        text: "Кестелердің индекстерін құру"
      },
      {
        id: "db-t04-b77-op3",
        text: "SQL сервердің жадын баптау"
      },
      {
        id: "db-t04-b77-op4",
        text: "Пайдаланушыларға рұқсат беру"
      },
      {
        id: "db-t04-b77-op5",
        text: "Барлық кестелер үшін бастапқы кілттерді (Primary Key) таңдау"
      },
      {
        id: "db-t04-b77-op6",
        text: "Нысандар арасындағы байланыс түрлерін (бір-көп, көп-көп) белгілеу"
      },
      {
        id: "db-t04-b77-op7",
        text: "Дерекқорды физикалық тұрғыдан серверге орнату және конфигурациялау"
      },
      {
        id: "db-t04-b77-op8",
        text: "Әрбір нысанға арналған атрибуттардың деректер типтерін нақтылау"
      }
    ],
    correctOptionIds: [
      "db-t04-b77-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a90bf6df-2e41-44d4-b0e2-550fa5edcd02",
    subjectId: SubjectId.DB,
    text: "ER-диаграммада байланыстың кардиналдық шегін (1:1, 1:M, M:N) дұрыс анықтамау қандай мәселеге әкеледі?",
    options: [
      {
        id: "31875f21-59bc-4a6e-ae1d-93c7bfcffa5b",
        text: "Дерекқор құрылымының дұрыс емес жобалануына және деректердің тұтастығының бұзылуына"
      },
      {
        id: "645a3f53-da9b-46c2-b3bd-ddcca7079b75",
        text: "Желілік байланыстың үзілуіне"
      },
      {
        id: "d4c2c89e-efef-4282-a92d-7f42a0787cd6",
        text: "Сервердегі жедел жадтың таусылуына"
      },
      {
        id: "a88e0100-9991-4888-b2ad-5d61b0c242fb",
        text: "Пайдаланушы құпия сөзінің қате тексерілуіне"
      },
      {
        id: "6743bbf1-4fb1-4a20-aadb-9ad0f41361d6",
        text: "SQL сұраныстарының орындалу жылдамдығының автоматты түрде артуына"
      },
      {
        id: "9cb78807-8851-4043-95e6-f786a69e2fa6",
        text: "Дерекқорды басқару жүйесінің (DBMS) лицензиялық келісімінің бұзылуына"
      },
      {
        id: "bf552206-faea-40db-b7b3-e85b35d02ea3",
        text: "Кестелер арасындағы индекстердің қате құрылуына және олардың жұмыс істемеуіне"
      },
      {
        id: "4a4efcfe-9f1f-483f-a795-239cbe3779c5",
        text: "Пайдаланушы интерфейсіндегі түстер мен қаріптердің дұрыс көрсетілмеуіне"
      }
    ],
    correctOptionIds: [
      "31875f21-59bc-4a6e-ae1d-93c7bfcffa5b"
    ],
    type: QuestionType.MULTIPLE,
    topic: "ER-модельдеу",
    difficulty: Difficulty.MEDIUM
  }
];
