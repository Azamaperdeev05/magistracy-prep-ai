import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// db / SQL сұраныстары
export const db7SqlQueriesQuestions : Question[] = [
  {
    id: "db-t07-b01",
    subjectId: SubjectId.DB,
    text: "AVG() функциясы не істейді?",
    options: [
      {
        id: "db-t07-b01-op1",
        text: "Жазбалар санын есептейді"
      },
      {
        id: "db-t07-b01-op2",
        text: "Максимумды табады"
      },
      {
        id: "db-t07-b01-op3",
        text: "Қосындыны табады"
      },
      {
        id: "db-t07-b01-op4",
        text: "Орташа мәнді табады"
      },
      {
        id: "db-t07-b01-op5",
        text: "WHOAMI"
      },
      {
        id: "db-t07-b01-op6",
        text: "UNION ALL тек оң жақ кестенің деректерін сақтайды"
      },
      {
        id: "db-t07-b01-op7",
        text: "Мәннің диапазонда екенін тексереді"
      },
      {
        id: "db-t07-b01-op8",
        text: "STRIP()"
      }
    ],
    correctOptionIds: [
      "db-t07-b01-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b02",
    subjectId: SubjectId.DB,
    text: "UNION операторының қызметі не?",
    options: [
      {
        id: "db-t07-b02-op1",
        text: "Индекс құру"
      },
      {
        id: "db-t07-b02-op2",
        text: "Нәтижелерді біріктіру"
      },
      {
        id: "db-t07-b02-op3",
        text: "Деректерді жою"
      },
      {
        id: "db-t07-b02-op4",
        text: "Кестелерді біріктіру"
      },
      {
        id: "db-t07-b02-op5",
        text: "5-тен 10-ға дейінгі жолдарды қайтарады"
      },
      {
        id: "db-t07-b02-op6",
        text: "NULL (немесе UNKNOWN)"
      },
      {
        id: "db-t07-b02-op7",
        text: "BETWEEN"
      },
      {
        id: "db-t07-b02-op8",
        text: "NULL мәндерді"
      }
    ],
    correctOptionIds: [
      "db-t07-b02-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b03",
    subjectId: SubjectId.DB,
    text: "DISTINCT кілтсөзі не істейді?",
    options: [
      {
        id: "db-t07-b03-op1",
        text: "Қайталанатын мәндерді жояды (бірегейлерін қайтарады)"
      },
      {
        id: "db-t07-b03-op2",
        text: "Барлық жазбаларды қайтарады"
      },
      {
        id: "db-t07-b03-op3",
        text: "Сұрыптайды"
      },
      {
        id: "db-t07-b03-op4",
        text: "Топтайды"
      },
      {
        id: "db-t07-b03-op5",
        text: "Сол жақ кестенің барлық бағандарын біріктіреді"
      },
      {
        id: "db-t07-b03-op6",
        text: "Кестенің құрылымын жояды"
      },
      {
        id: "db-t07-b03-op7",
        text: "UNION функциясы немесе ADD операторы"
      },
      {
        id: "db-t07-b03-op8",
        text: "Деректер жояды"
      }
    ],
    correctOptionIds: [
      "db-t07-b03-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b04",
    subjectId: SubjectId.DB,
    text: "TRUNCATE TABLE командасы не істейді?",
    options: [
      {
        id: "db-t07-b04-op1",
        text: "Жазба қосады"
      },
      {
        id: "db-t07-b04-op2",
        text: "Кестедегі барлық жазбаларды тез жояды"
      },
      {
        id: "db-t07-b04-op3",
        text: "Кестенің құрылымын жояды"
      },
      {
        id: "db-t07-b04-op4",
        text: "Бір жазбаны жояды"
      },
      {
        id: "db-t07-b04-op5",
        text: "Мәннің бос жол екенін тексереді"
      },
      {
        id: "db-t07-b04-op6",
        text: "LENGTH() немесе LEN()"
      },
      {
        id: "db-t07-b04-op7",
        text: "Барлық қайталанатын мәндердің қосындысын табады"
      },
      {
        id: "db-t07-b04-op8",
        text: "COUNT(*) тек бірінші бағанды есептейді"
      }
    ],
    correctOptionIds: [
      "db-t07-b04-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b05",
    subjectId: SubjectId.DB,
    text: "EXCEPT операторы не қайтарады?",
    options: [
      {
        id: "db-t07-b05-op1",
        text: "Барлық нәтижелерді біріктіреді"
      },
      {
        id: "db-t07-b05-op2",
        text: "Ортақ бөлікті қайтарады"
      },
      {
        id: "db-t07-b05-op3",
        text: "Бірінші жиыннан екіншісін алып тастағандағы айырмашылықты"
      },
      {
        id: "db-t07-b05-op4",
        text: "NULL мәндерді"
      },
      {
        id: "db-t07-b05-op5",
        text: "IN"
      },
      {
        id: "db-t07-b05-op6",
        text: "Тек сәйкес келетін жазбалар"
      },
      {
        id: "db-t07-b05-op7",
        text: "SORT BY"
      },
      {
        id: "db-t07-b05-op8",
        text: "GET_RAND()"
      }
    ],
    correctOptionIds: [
      "db-t07-b05-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b06",
    subjectId: SubjectId.DB,
    text: "SQL-де деректерді топтастыру үшін қандай оператор қолданылады?",
    options: [
      {
        id: "db-t07-b06-op1",
        text: "GROUP BY"
      },
      {
        id: "db-t07-b06-op2",
        text: "ORDER BY"
      },
      {
        id: "db-t07-b06-op3",
        text: "SORT BY"
      },
      {
        id: "db-t07-b06-op4",
        text: "AGGREGATE BY"
      },
      {
        id: "db-t07-b06-op5",
        text: "'Hello||||World'"
      },
      {
        id: "db-t07-b06-op6",
        text: "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        id: "db-t07-b06-op7",
        text: "BOTTOM NULLS"
      },
      {
        id: "db-t07-b06-op8",
        text: "Сол жақтың барлығы"
      }
    ],
    correctOptionIds: [
      "db-t07-b06-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b07",
    subjectId: SubjectId.DB,
    text: "INNER JOIN қандай жазбаларды қайтарады?",
    options: [
      {
        id: "db-t07-b07-op1",
        text: "Тек сол жақ кестенің жазбалары"
      },
      {
        id: "db-t07-b07-op2",
        text: "Тек оң жақ кестенің жазбалары"
      },
      {
        id: "db-t07-b07-op3",
        text: "Тек сәйкес келетін жазбалар"
      },
      {
        id: "db-t07-b07-op4",
        text: "Барлық жазбалар"
      },
      {
        id: "db-t07-b07-op5",
        text: "NULL (немесе UNKNOWN)"
      },
      {
        id: "db-t07-b07-op6",
        text: "Алғашқы 10 жолды өткізіп жіберіп, келесі 5 жолды қайтарады"
      },
      {
        id: "db-t07-b07-op7",
        text: "GET_PART()"
      },
      {
        id: "db-t07-b07-op8",
        text: "Сыртқы кілттің бастапқы кілтке автоматты сілтеме жасауы"
      }
    ],
    correctOptionIds: [
      "db-t07-b07-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b08",
    subjectId: SubjectId.DB,
    text: "LIKE операторындағы '%' символы не білдіреді?",
    options: [
      {
        id: "db-t07-b08-op1",
        text: "Бос мән"
      },
      {
        id: "db-t07-b08-op2",
        text: "Сан"
      },
      {
        id: "db-t07-b08-op3",
        text: "Кез келген саны символдар"
      },
      {
        id: "db-t07-b08-op4",
        text: "Нақты бір символ"
      },
      {
        id: "db-t07-b08-op5",
        text: "Кему ретімен сұрыптау"
      },
      {
        id: "db-t07-b08-op6",
        text: "Әрқашан екінші мәнді қайтарады"
      },
      {
        id: "db-t07-b08-op7",
        text: "Минимумды табады"
      },
      {
        id: "db-t07-b08-op8",
        text: "SMALL()"
      }
    ],
    correctOptionIds: [
      "db-t07-b08-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b09",
    subjectId: SubjectId.DB,
    text: "LIKE операторындағы '_' символы не білдіреді?",
    options: [
      {
        id: "db-t07-b09-op1",
        text: "Тек бір символ"
      },
      {
        id: "db-t07-b09-op2",
        text: "Кез келген сан"
      },
      {
        id: "db-t07-b09-op3",
        text: "Кез келген саны символдар"
      },
      {
        id: "db-t07-b09-op4",
        text: "Бос мән"
      },
      {
        id: "db-t07-b09-op5",
        text: "Сұраныс ішінде шарттық логиканы (if-then-else) іске асыру үшін"
      },
      {
        id: "db-t07-b09-op6",
        text: "WHERE column_name IS NOT NULL"
      },
      {
        id: "db-t07-b09-op7",
        text: "Қатесі бар жолдарды жасыру"
      },
      {
        id: "db-t07-b09-op8",
        text: "Екі мәннің бірі NULL болса, қате шығарады"
      }
    ],
    correctOptionIds: [
      "db-t07-b09-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b10",
    subjectId: SubjectId.DB,
    text: "IS NULL операторы не істейді?",
    options: [
      {
        id: "db-t07-b10-op1",
        text: "Мәннің бос жол екенін тексереді"
      },
      {
        id: "db-t07-b10-op2",
        text: "Мәннің нөлге тең екенін тексереді"
      },
      {
        id: "db-t07-b10-op3",
        text: "Мәннің NULL екенін тексереді"
      },
      {
        id: "db-t07-b10-op4",
        text: "Сандарды салыстырады"
      },
      {
        id: "db-t07-b10-op5",
        text: "'Hello World'"
      },
      {
        id: "db-t07-b10-op6",
        text: "Кесте құрылымын өзгертеді (баған қосу, жою)"
      },
      {
        id: "db-t07-b10-op7",
        text: "Нақты бір символ"
      },
      {
        id: "db-t07-b10-op8",
        text: "Бір жазбаны жояды"
      }
    ],
    correctOptionIds: [
      "db-t07-b10-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b11",
    subjectId: SubjectId.DB,
    text: "CROSS JOIN не қайтарады?",
    options: [
      {
        id: "db-t07-b11-op1",
        text: "Бос нәтиже"
      },
      {
        id: "db-t07-b11-op2",
        text: "Бір жазба"
      },
      {
        id: "db-t07-b11-op3",
        text: "Тек сәйкестер"
      },
      {
        id: "db-t07-b11-op4",
        text: "Декарт көбейтіндісі (барлық мүмкін жұптар)"
      },
      {
        id: "db-t07-b11-op5",
        text: "LTRIM()"
      },
      {
        id: "db-t07-b11-op6",
        text: "Мәннің тізімде бар-жоғын тексереді"
      },
      {
        id: "db-t07-b11-op7",
        text: "Деректерді сұрыптау"
      },
      {
        id: "db-t07-b11-op8",
        text: "Орташасын табады"
      }
    ],
    correctOptionIds: [
      "db-t07-b11-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b12",
    subjectId: SubjectId.DB,
    text: "HAVING шарты WHERE-ден немен ерекшеленеді?",
    options: [
      {
        id: "db-t07-b12-op1",
        text: "WHERE жылдамырақ"
      },
      {
        id: "db-t07-b12-op2",
        text: "Айырмашылық жоқ"
      },
      {
        id: "db-t07-b12-op3",
        text: "HAVING агрегаттық функциялармен қолданылады, WHERE жоқ"
      },
      {
        id: "db-t07-b12-op4",
        text: "HAVING барлық жазбаларды қайтарады"
      },
      {
        id: "db-t07-b12-op5",
        text: "REVERSE"
      },
      {
        id: "db-t07-b12-op6",
        text: "SHOW PATH"
      },
      {
        id: "db-t07-b12-op7",
        text: "Кез келген сан"
      },
      {
        id: "db-t07-b12-op8",
        text: "Барлық жазбалар"
      }
    ],
    correctOptionIds: [
      "db-t07-b12-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b13",
    subjectId: SubjectId.DB,
    text: "LIKE операторы не үшін қолданылады?",
    options: [
      {
        id: "db-t07-b13-op1",
        text: "Үлгі бойынша жолды іздеу"
      },
      {
        id: "db-t07-b13-op2",
        text: "Деректерді топтау"
      },
      {
        id: "db-t07-b13-op3",
        text: "Деректерді сұрыптау"
      },
      {
        id: "db-t07-b13-op4",
        text: "Сандарды салыстыру"
      },
      {
        id: "db-t07-b13-op5",
        text: "GPA бойынша ең төменгі 3 студент"
      },
      {
        id: "db-t07-b13-op6",
        text: "Тек қана HAVING орындалады"
      },
      {
        id: "db-t07-b13-op7",
        text: "Өсу ретімен (ASC)"
      },
      {
        id: "db-t07-b13-op8",
        text: "DIFF_DATE()"
      }
    ],
    correctOptionIds: [
      "db-t07-b13-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b14",
    subjectId: SubjectId.DB,
    text: "COUNT() функциясы не істейді?",
    options: [
      {
        id: "db-t07-b14-op1",
        text: "Максимумды табады"
      },
      {
        id: "db-t07-b14-op2",
        text: "Жазбалар санын есептейді"
      },
      {
        id: "db-t07-b14-op3",
        text: "Қосынды есептейді"
      },
      {
        id: "db-t07-b14-op4",
        text: "Орташа мәнді табады"
      },
      {
        id: "db-t07-b14-op5",
        text: "Кему ретімен сұрыптау"
      },
      {
        id: "db-t07-b14-op6",
        text: "LIKE NOT"
      },
      {
        id: "db-t07-b14-op7",
        text: "RIGHT_STRIP()"
      },
      {
        id: "db-t07-b14-op8",
        text: "NOT LIKE"
      }
    ],
    correctOptionIds: [
      "db-t07-b14-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b15",
    subjectId: SubjectId.DB,
    text: "SELECT ID FROM Students ORDER BY GPA DESC LIMIT 3; — бұл сұраныс не қайтарады?",
    options: [
      {
        id: "db-t07-b15-op1",
        text: "Студенттер саны"
      },
      {
        id: "db-t07-b15-op2",
        text: "GPA бойынша ең жоғары 3 студент"
      },
      {
        id: "db-t07-b15-op3",
        text: "GPA бойынша ең төменгі 3 студент"
      },
      {
        id: "db-t07-b15-op4",
        text: "Барлық студенттер"
      },
      {
        id: "db-t07-b15-op5",
        text: "Деректерді жою"
      },
      {
        id: "db-t07-b15-op6",
        text: "Екі кесте де бір дерекқорда орналасуы тиіс"
      },
      {
        id: "db-t07-b15-op7",
        text: "Кестенің өзін толық жояды"
      },
      {
        id: "db-t07-b15-op8",
        text: "Бастапқы кілттер сәйкес келуі керек"
      }
    ],
    correctOptionIds: [
      "db-t07-b15-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b16",
    subjectId: SubjectId.DB,
    text: "INTERSECT операторы не қайтарады?",
    options: [
      {
        id: "db-t07-b16-op1",
        text: "Айырмашылықты"
      },
      {
        id: "db-t07-b16-op2",
        text: "Бірінші кестені"
      },
      {
        id: "db-t07-b16-op3",
        text: "Ортақ бөлікті"
      },
      {
        id: "db-t07-b16-op4",
        text: "Барлық нәтижелер"
      },
      {
        id: "db-t07-b16-op5",
        text: "Сұрыптайды"
      },
      {
        id: "db-t07-b16-op6",
        text: "LEFT JOIN сол жақтағы кестенің барлық жоларын және оң жақтан сәйкес келетін жолдарды қайтарады (сәйкестік болмаса NULL), ал INNER JOIN тек екі кестеде де ортақ сәйкестігі бар жолдарды қайтарады"
      },
      {
        id: "db-t07-b16-op7",
        text: "GROUP_CONCAT() немесе STRING_AGG()"
      },
      {
        id: "db-t07-b16-op8",
        text: "RIGHT_STRIP()"
      }
    ],
    correctOptionIds: [
      "db-t07-b16-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b17",
    subjectId: SubjectId.DB,
    text: "BETWEEN операторы не істейді?",
    options: [
      {
        id: "db-t07-b17-op1",
        text: "Мәннің диапазонда екенін тексереді"
      },
      {
        id: "db-t07-b17-op2",
        text: "NULL тексереді"
      },
      {
        id: "db-t07-b17-op3",
        text: "Тізімде бар-жоғын тексереді"
      },
      {
        id: "db-t07-b17-op4",
        text: "Деректерді біріктіреді"
      },
      {
        id: "db-t07-b17-op5",
        text: "SMALL()"
      },
      {
        id: "db-t07-b17-op6",
        text: "LEFT_STRIP()"
      },
      {
        id: "db-t07-b17-op7",
        text: "Тек бастапқы кілт бағанын ғана"
      },
      {
        id: "db-t07-b17-op8",
        text: "'atab'"
      }
    ],
    correctOptionIds: [
      "db-t07-b17-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b18",
    subjectId: SubjectId.DB,
    text: "SELECT * FROM students; — бұл сұраныс не істейді?",
    options: [
      {
        id: "db-t07-b18-op1",
        text: "Барлық бағандарды қайтарады"
      },
      {
        id: "db-t07-b18-op2",
        text: "Кесте құрады"
      },
      {
        id: "db-t07-b18-op3",
        text: "Студенттерді жояды"
      },
      {
        id: "db-t07-b18-op4",
        text: "Бір бағанды қайтарады"
      },
      {
        id: "db-t07-b18-op5",
        text: "Деректерді топтастыру"
      },
      {
        id: "db-t07-b18-op6",
        text: "Бір жазбаны жояды"
      },
      {
        id: "db-t07-b18-op7",
        text: "HAVING"
      },
      {
        id: "db-t07-b18-op8",
        text: "Кестелердегі жолдар саны бірдей болуы тиіс"
      }
    ],
    correctOptionIds: [
      "db-t07-b18-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b19",
    subjectId: SubjectId.DB,
    text: "DROP TABLE командасы не істейді?",
    options: [
      {
        id: "db-t07-b19-op1",
        text: "Деректерді жояды"
      },
      {
        id: "db-t07-b19-op2",
        text: "Кестенің өзін толық жояды"
      },
      {
        id: "db-t07-b19-op3",
        text: "Деректерді жаңартады"
      },
      {
        id: "db-t07-b19-op4",
        text: "Кесте құрады"
      },
      {
        id: "db-t07-b19-op5",
        text: "Деректерді жаңа кестеге көшіру"
      },
      {
        id: "db-t07-b19-op6",
        text: "LIKE"
      },
      {
        id: "db-t07-b19-op7",
        text: "Деректерді топтастыру"
      },
      {
        id: "db-t07-b19-op8",
        text: "FALSE"
      }
    ],
    correctOptionIds: [
      "db-t07-b19-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b20",
    subjectId: SubjectId.DB,
    text: "FULL OUTER JOIN қандай жазбаларды қайтарады?",
    options: [
      {
        id: "db-t07-b20-op1",
        text: "Оң жақтың барлығы"
      },
      {
        id: "db-t07-b20-op2",
        text: "Екі кестенің барлық жазбалары + сәйкестіктер"
      },
      {
        id: "db-t07-b20-op3",
        text: "Тек сәйкестер"
      },
      {
        id: "db-t07-b20-op4",
        text: "Сол жақтың барлығы"
      },
      {
        id: "db-t07-b20-op5",
        text: "ORDER BY"
      },
      {
        id: "db-t07-b20-op6",
        text: "Егер барлығы NULL болса, қате шығарады"
      },
      {
        id: "db-t07-b20-op7",
        text: "'base'"
      },
      {
        id: "db-t07-b20-op8",
        text: "SYSTEM_USER()"
      }
    ],
    correctOptionIds: [
      "db-t07-b20-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b21",
    subjectId: SubjectId.DB,
    text: "MAX() функциясы не істейді?",
    options: [
      {
        id: "db-t07-b21-op1",
        text: "Қосындысын табады"
      },
      {
        id: "db-t07-b21-op2",
        text: "Орташаны табады"
      },
      {
        id: "db-t07-b21-op3",
        text: "Минимумды табады"
      },
      {
        id: "db-t07-b21-op4",
        text: "Максималды мәнді табады"
      },
      {
        id: "db-t07-b21-op5",
        text: "CLEAN()"
      },
      {
        id: "db-t07-b21-op6",
        text: "Әрқашан екінші мәнді қайтарады"
      },
      {
        id: "db-t07-b21-op7",
        text: "SYSTEM_USER()"
      },
      {
        id: "db-t07-b21-op8",
        text: "Аргументтерінің ішінен алғашқы NULL емес мәнді қайтарады"
      }
    ],
    correctOptionIds: [
      "db-t07-b21-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b22",
    subjectId: SubjectId.DB,
    text: "RIGHT JOIN қандай жазбаларды қайтарады?",
    options: [
      {
        id: "db-t07-b22-op1",
        text: "Барлық жазбалар"
      },
      {
        id: "db-t07-b22-op2",
        text: "Оң жақтың барлығы + сәйкестіктер"
      },
      {
        id: "db-t07-b22-op3",
        text: "Сол жақтың барлығы + сәйкестіктер"
      },
      {
        id: "db-t07-b22-op4",
        text: "Тек сәйкестіктер"
      },
      {
        id: "db-t07-b22-op5",
        text: "Егер val1 мен val2 тең болса, NULL қайтарады, әйтпесе val1-ді қайтарады"
      },
      {
        id: "db-t07-b22-op6",
        text: "Деректерді жаңартады"
      },
      {
        id: "db-t07-b22-op7",
        text: "Кестенің өзін толық жояды"
      },
      {
        id: "db-t07-b22-op8",
        text: "Бос жол"
      }
    ],
    correctOptionIds: [
      "db-t07-b22-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b23",
    subjectId: SubjectId.DB,
    text: "LEFT JOIN қандай жазбаларды қайтарады?",
    options: [
      {
        id: "db-t07-b23-op1",
        text: "Барлық жазбалар"
      },
      {
        id: "db-t07-b23-op2",
        text: "Тек сәйкес келетін жазбалар"
      },
      {
        id: "db-t07-b23-op3",
        text: "Тек оң жақ кестенің жазбалары"
      },
      {
        id: "db-t07-b23-op4",
        text: "Сол жақ кестенің барлық жазбалары + сәйкестіктер"
      },
      {
        id: "db-t07-b23-op5",
        text: "START FROM"
      },
      {
        id: "db-t07-b23-op6",
        text: "LEFT JOIN өте баяу жұмыс істейді"
      },
      {
        id: "db-t07-b23-op7",
        text: "SUBTRACT немесе REMOVE"
      },
      {
        id: "db-t07-b23-op8",
        text: "Cross-Join"
      }
    ],
    correctOptionIds: [
      "db-t07-b23-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b24",
    subjectId: SubjectId.DB,
    text: "IN операторы не істейді?",
    options: [
      {
        id: "db-t07-b24-op1",
        text: "Мәннің тізімде бар-жоғын тексереді"
      },
      {
        id: "db-t07-b24-op2",
        text: "NULL тексереді"
      },
      {
        id: "db-t07-b24-op3",
        text: "Диапазонды тексереді"
      },
      {
        id: "db-t07-b24-op4",
        text: "Деректерді біріктіреді"
      },
      {
        id: "db-t07-b24-op5",
        text: "WHERE column_name != NULL"
      },
      {
        id: "db-t07-b24-op6",
        text: "Кему ретімен (DESC)"
      },
      {
        id: "db-t07-b24-op7",
        text: "Шарттардың ешқайсысы орындалмаса орындалады"
      },
      {
        id: "db-t07-b24-op8",
        text: "Бірінші жиыннан екіншісін алып тастағандағы айырмашылықты"
      }
    ],
    correctOptionIds: [
      "db-t07-b24-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b25",
    subjectId: SubjectId.DB,
    text: "SUM() функциясы не істейді?",
    options: [
      {
        id: "db-t07-b25-op1",
        text: "Санын есептейді"
      },
      {
        id: "db-t07-b25-op2",
        text: "Максимумды табады"
      },
      {
        id: "db-t07-b25-op3",
        text: "Қосындысын табады"
      },
      {
        id: "db-t07-b25-op4",
        text: "Орташасын табады"
      },
      {
        id: "db-t07-b25-op5",
        text: "Бос нәтиже"
      },
      {
        id: "db-t07-b25-op6",
        text: "ADD_DATE(date_column, 5)"
      },
      {
        id: "db-t07-b25-op7",
        text: "Дубликаттарды іздеп, сұрыптау және жою кезеңі болмағандықтан тезірек орындалады"
      },
      {
        id: "db-t07-b25-op8",
        text: "MAX_CASE()"
      }
    ],
    correctOptionIds: [
      "db-t07-b25-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b26",
    subjectId: SubjectId.DB,
    text: "ORDER BY ... ASC нені білдіреді?",
    options: [
      {
        id: "db-t07-b26-op1",
        text: "Өсу ретімен сұрыптау"
      },
      {
        id: "db-t07-b26-op2",
        text: "Кездейсоқ реттеу"
      },
      {
        id: "db-t07-b26-op3",
        text: "Топтастыру"
      },
      {
        id: "db-t07-b26-op4",
        text: "Кему ретімен сұрыптау"
      },
      {
        id: "db-t07-b26-op5",
        text: "Декарт көбейтіндісі (барлық мүмкін жұптар)"
      },
      {
        id: "db-t07-b26-op6",
        text: "ABS()"
      },
      {
        id: "db-t07-b26-op7",
        text: "LTRIM()"
      },
      {
        id: "db-t07-b26-op8",
        text: "Алдымен HAVING орындалады"
      }
    ],
    correctOptionIds: [
      "db-t07-b26-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b27",
    subjectId: SubjectId.DB,
    text: "ALTER TABLE командасы не істейді?",
    options: [
      {
        id: "db-t07-b27-op1",
        text: "Деректер жояды"
      },
      {
        id: "db-t07-b27-op2",
        text: "Кесте құрылымын өзгертеді (баған қосу, жою)"
      },
      {
        id: "db-t07-b27-op3",
        text: "Кесте жояды"
      },
      {
        id: "db-t07-b27-op4",
        text: "Деректер қосады"
      },
      {
        id: "db-t07-b27-op5",
        text: "BEGIN AT"
      },
      {
        id: "db-t07-b27-op6",
        text: "WIDTH()"
      },
      {
        id: "db-t07-b27-op7",
        text: "Кез келген саны символдар"
      },
      {
        id: "db-t07-b27-op8",
        text: "MERGE функциясы немесе + операторы"
      }
    ],
    correctOptionIds: [
      "db-t07-b27-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b28",
    subjectId: SubjectId.DB,
    text: "MIN() функциясы не істейді?",
    options: [
      {
        id: "db-t07-b28-op1",
        text: "Санын табады"
      },
      {
        id: "db-t07-b28-op2",
        text: "Қосындысын табады"
      },
      {
        id: "db-t07-b28-op3",
        text: "Ең кіші мәнді табады"
      },
      {
        id: "db-t07-b28-op4",
        text: "Максималды мәнді табады"
      },
      {
        id: "db-t07-b28-op5",
        text: "Деректерді біріктіру"
      },
      {
        id: "db-t07-b28-op6",
        text: "Шарттардың ешқайсысы орындалмаса орындалады"
      },
      {
        id: "db-t07-b28-op7",
        text: "Бір жазба"
      },
      {
        id: "db-t07-b28-op8",
        text: "Алғашқы 5 жолды өткізіп жіберіп, келесі 10 жолды қайтарады"
      }
    ],
    correctOptionIds: [
      "db-t07-b28-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b29",
    subjectId: SubjectId.DB,
    text: "WHERE шарты не үшін қолданылады?",
    options: [
      {
        id: "db-t07-b29-op1",
        text: "Деректерді топтастыру"
      },
      {
        id: "db-t07-b29-op2",
        text: "Деректерді сұрыптау"
      },
      {
        id: "db-t07-b29-op3",
        text: "Деректерді біріктіру"
      },
      {
        id: "db-t07-b29-op4",
        text: "Деректерді фильтрлеу"
      },
      {
        id: "db-t07-b29-op5",
        text: "DATEDIFF()"
      },
      {
        id: "db-t07-b29-op6",
        text: "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        id: "db-t07-b29-op7",
        text: "'Databasebase'"
      },
      {
        id: "db-t07-b29-op8",
        text: "Шарттардың кем дегенде біреуі TRUE болса, жол таңдалады"
      }
    ],
    correctOptionIds: [
      "db-t07-b29-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b30",
    subjectId: SubjectId.DB,
    text: "SQL-де деректерді кему ретімен сұрыптау қандай кілтсөзбен жасалады?",
    options: [
      {
        id: "db-t07-b30-op1",
        text: "REVERSE"
      },
      {
        id: "db-t07-b30-op2",
        text: "DOWN"
      },
      {
        id: "db-t07-b30-op3",
        text: "ASC"
      },
      {
        id: "db-t07-b30-op4",
        text: "DESC"
      },
      {
        id: "db-t07-b30-op5",
        text: "UPPER()"
      },
      {
        id: "db-t07-b30-op6",
        text: "Деректерді жою"
      },
      {
        id: "db-t07-b30-op7",
        text: "DATE_INTERVAL()"
      },
      {
        id: "db-t07-b30-op8",
        text: "ARRAY_AGG()"
      }
    ],
    correctOptionIds: [
      "db-t07-b30-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0c3e9cec-8342-4d50-bf8d-3aa2b2880dec",
    subjectId: SubjectId.DB,
    text: "SQL-де деректерді топтастырудан кейін сүзгілеу жүргізу үшін (агрегаттық функцияларға шарт қою) қай оператор қолданылады?",
    options: [
      {
        id: "47c24421-d302-4432-9a48-1598668c63ca",
        text: "HAVING"
      },
      {
        id: "cc3b6723-9d2c-4d6e-8cb0-63d02fe6074b",
        text: "WHERE"
      },
      {
        id: "39672d83-b4e7-4b65-afd9-da91a2eaa6e2",
        text: "GROUP BY"
      },
      {
        id: "4dad6652-3f43-446b-9bca-10d7d4d26e07",
        text: "ORDER BY"
      },
      {
        id: "8ba10d7b-9ad1-4818-b8fc-556eca4f5c53",
        text: "Бір жазба"
      },
      {
        id: "de8ede1c-fc89-4193-b17f-48b485ad1d03",
        text: "Мәннің тізімде бар-жоғын тексереді"
      },
      {
        id: "503fbf67-09a1-45b4-81e4-ab34142be5fd",
        text: "Деректерді жояды"
      },
      {
        id: "a28bcc66-8982-4a71-b94d-0fad0c8e0ae0",
        text: "ABSOLUTE()"
      }
    ],
    correctOptionIds: [
      "47c24421-d302-4432-9a48-1598668c63ca"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1608260e-ef69-4f94-a3f1-ce004a611280",
    subjectId: SubjectId.DB,
    text: "SELECT сұранысында WHERE және HAVING операторлары бірге қолданылғанда орындалу реттілігі қандай болады?",
    options: [
      {
        id: "b012d902-3bb6-40be-9afa-e97228e005f0",
        text: "Алдымен WHERE орындалып жолдарды сүзеді, содан соң GROUP BY топтайды, кейін HAVING топтау нәтижесін сүзеді"
      },
      {
        id: "601d2394-a1bc-4c10-9e71-905b3a2d0a9f",
        text: "Алдымен HAVING орындалады"
      },
      {
        id: "092d9da5-4bd6-48c2-868a-0683de2f4061",
        text: "Олар кезекпен параллель орындалады"
      },
      {
        id: "0d269391-ab74-4e48-ab2a-0984e614f774",
        text: "Тек қана HAVING орындалады"
      },
      {
        id: "764d1041-b028-47a9-96d3-aa05adc465fa",
        text: "123.46"
      },
      {
        id: "e1ad1d7d-f664-47a1-aa47-1256a9a43edf",
        text: "DIFFERENCE"
      },
      {
        id: "2da35588-4877-4b5a-9ebd-efc2ae7d641d",
        text: "TRIM()"
      },
      {
        id: "4bca099d-bf8c-4aa4-9d86-3a6fa415748f",
        text: "GETUSER()"
      }
    ],
    correctOptionIds: [
      "b012d902-3bb6-40be-9afa-e97228e005f0"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b31",
    subjectId: SubjectId.DB,
    text: "SQL-де SELECT DISTINCT операторының қызметі қандай?",
    options: [
      {
        id: "db-t07-b31-op1",
        text: "Сұраныс нәтижесінен қайталанатын (дубликат) жолдарды алып тастап, тек бірегей мәндерді қайтару"
      },
      {
        id: "db-t07-b31-op2",
        text: "Деректерді өсу ретімен сұрыптау"
      },
      {
        id: "db-t07-b31-op3",
        text: "Қатесі бар жолдарды жасыру"
      },
      {
        id: "db-t07-b31-op4",
        text: "Деректерді жаңа кестеге көшіру"
      },
      {
        id: "db-t07-b31-op5",
        text: "TITLE()"
      },
      {
        id: "db-t07-b31-op6",
        text: "Нәтижені автоматты түрде индекспен қамтамасыз етеді"
      },
      {
        id: "db-t07-b31-op7",
        text: "5-тен 10-ға дейінгі жолдарды қайтарады"
      },
      {
        id: "db-t07-b31-op8",
        text: "Тек қана қателерді тексереді"
      }
    ],
    correctOptionIds: [
      "db-t07-b31-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b32",
    subjectId: SubjectId.DB,
    text: "SQL-де мәндерді белгілі бір диапазон (аралық) бойынша сүзу үшін қай оператор тиімді қолданылады?",
    options: [
      {
        id: "db-t07-b32-op1",
        text: "BETWEEN"
      },
      {
        id: "db-t07-b32-op2",
        text: "IN"
      },
      {
        id: "db-t07-b32-op3",
        text: "LIKE"
      },
      {
        id: "db-t07-b32-op4",
        text: "EXISTS"
      },
      {
        id: "db-t07-b32-op5",
        text: "SQ()"
      },
      {
        id: "db-t07-b32-op6",
        text: "Екі шарт та бірдей TRUE болғанда ғана жол таңдалады"
      },
      {
        id: "db-t07-b32-op7",
        text: "Сұрыптау шартын көрсету үшін"
      },
      {
        id: "db-t07-b32-op8",
        text: "Екі шарт та міндетті түрде TRUE болуы керек"
      }
    ],
    correctOptionIds: [
      "db-t07-b32-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b33",
    subjectId: SubjectId.DB,
    text: "SQL-де мәтіндік шаблон бойынша іздеу (wildcards: %, _) жүргізу үшін қандай оператор керек?",
    options: [
      {
        id: "db-t07-b33-op1",
        text: "LIKE"
      },
      {
        id: "db-t07-b33-op2",
        text: "IN"
      },
      {
        id: "db-t07-b33-op3",
        text: "BETWEEN"
      },
      {
        id: "db-t07-b33-op4",
        text: "MATCH"
      },
      {
        id: "db-t07-b33-op5",
        text: "'Databasebase'"
      },
      {
        id: "db-t07-b33-op6",
        text: "123.45"
      },
      {
        id: "db-t07-b33-op7",
        text: "'Database' (өзгермейді, себебі ізделетін шаблон регистрге сезімтал)"
      },
      {
        id: "db-t07-b33-op8",
        text: "Барлық мәндердің қосындысын қайтарады"
      }
    ],
    correctOptionIds: [
      "db-t07-b33-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b34",
    subjectId: SubjectId.DB,
    text: "SQL-дегі COUNT(*) және COUNT(баған_аты) айырмашылығы неде?",
    options: [
      {
        id: "db-t07-b34-op1",
        text: "COUNT(*) барлық жолдарды (NULL қоса) есептейді, ал COUNT(баған_аты) тек NULL емес мәндерді есептейді"
      },
      {
        id: "db-t07-b34-op2",
        text: "COUNT(*) тек бірінші бағанды есептейді"
      },
      {
        id: "db-t07-b34-op3",
        text: "COUNT(баған_аты) өте жылдам жұмыс істейді"
      },
      {
        id: "db-t07-b34-op4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "db-t07-b34-op5",
        text: "Санды ең жақын бүтін санға дейін дөңгелектейді"
      },
      {
        id: "db-t07-b34-op6",
        text: "Өсу ретімен сұрыптау"
      },
      {
        id: "db-t07-b34-op7",
        text: "Нәтижелерді біріктіру"
      },
      {
        id: "db-t07-b34-op8",
        text: "GROUP BY"
      }
    ],
    correctOptionIds: [
      "db-t07-b34-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f36fa52e-759e-4191-bdb7-735f3ade4aa6",
    subjectId: SubjectId.DB,
    text: "SQL-де деректерді кему ретімен (үлкеннен кішіге) сұрыптау үшін ORDER BY операторынан кейін қандай кілттік сөз жазылады?",
    options: [
      {
        id: "ab0dfa6c-767f-415c-b933-b109e49e5aa3",
        text: "DESC"
      },
      {
        id: "f900c299-d178-49b3-87dc-0c5b1d7e893f",
        text: "ASC"
      },
      {
        id: "ca79809d-2fd5-4449-9c46-dda3815423fc",
        text: "REVERSE"
      },
      {
        id: "7fd5f551-bdbf-4dbe-9bfb-8eb900f07112",
        text: "DOWN"
      },
      {
        id: "252fc5e1-9351-4b00-8539-98640abf0705",
        text: "Егер барлығы NULL болса, қате шығарады"
      },
      {
        id: "13ee0903-d6f6-46b2-b596-15ee69602149",
        text: "Минимумды табады"
      },
      {
        id: "f8f2acfe-2aed-479e-97ff-78c9fa995951",
        text: "CLEAN()"
      },
      {
        id: "c7a06d9a-554b-462c-801b-b09221d2776d",
        text: "Оң жақтың барлығы + сәйкестіктер"
      }
    ],
    correctOptionIds: [
      "ab0dfa6c-767f-415c-b933-b109e49e5aa3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b35",
    subjectId: SubjectId.DB,
    text: "LEFT JOIN мен INNER JOIN операторларының басты айырмашылығы неде?",
    options: [
      {
        id: "db-t07-b35-op1",
        text: "LEFT JOIN сол жақтағы кестенің барлық жоларын және оң жақтан сәйкес келетін жолдарды қайтарады (сәйкестік болмаса NULL), ал INNER JOIN тек екі кестеде де ортақ сәйкестігі бар жолдарды қайтарады"
      },
      {
        id: "db-t07-b35-op2",
        text: "INNER JOIN  тек сол жақтағыны қайтарады"
      },
      {
        id: "db-t07-b35-op3",
        text: "LEFT JOIN өте баяу жұмыс істейді"
      },
      {
        id: "db-t07-b35-op4",
        text: "Олар бірдей нәтиже береді"
      },
      {
        id: "db-t07-b35-op5",
        text: "DATE_INTERVAL()"
      },
      {
        id: "db-t07-b35-op6",
        text: "NULL мәндерді"
      },
      {
        id: "db-t07-b35-op7",
        text: "SUM_STRINGS()"
      },
      {
        id: "db-t07-b35-op8",
        text: "date_column.addDays(5)"
      }
    ],
    correctOptionIds: [
      "db-t07-b35-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b36",
    subjectId: SubjectId.DB,
    text: "SQL-де NATURAL JOIN қалай жұмыс істейді?",
    options: [
      {
        id: "db-t07-b36-op1",
        text: "Екі кестедегі аттары мен типтері бірдей барлық бағандар бойынша автоматты түрде қосылу жасайды"
      },
      {
        id: "db-t07-b36-op2",
        text: "Сол жақ кестенің барлық бағандарын біріктіреді"
      },
      {
        id: "db-t07-b36-op3",
        text: "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        id: "db-t07-b36-op4",
        text: "Тек сандық бағандарды сәйкестендіреді"
      },
      {
        id: "db-t07-b36-op5",
        text: "123.457"
      },
      {
        id: "db-t07-b36-op6",
        text: "Айырмашылық жоқ"
      },
      {
        id: "db-t07-b36-op7",
        text: "Санын есептейді"
      },
      {
        id: "db-t07-b36-op8",
        text: "Деректер жояды"
      }
    ],
    correctOptionIds: [
      "db-t07-b36-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b37",
    subjectId: SubjectId.DB,
    text: "SELF JOIN дегеніміз не?",
    options: [
      {
        id: "db-t07-b37-op1",
        text: "Кестенің өз-өзіне қосылуы (мысалы, қызметкерлер мен олардың жетекшілерін бір кестеден табу үшін)"
      },
      {
        id: "db-t07-b37-op2",
        text: "Дерекқордың автоматты түрде қосылуы"
      },
      {
        id: "db-t07-b37-op3",
        text: "Сыртқы кілттің бастапқы кілтке автоматты сілтеме жасауы"
      },
      {
        id: "db-t07-b37-op4",
        text: "Бос мәндердің орнына автоматты жазба қосу"
      },
      {
        id: "db-t07-b37-op5",
        text: "SQ()"
      },
      {
        id: "db-t07-b37-op6",
        text: "Нәтижені файлға жазады"
      },
      {
        id: "db-t07-b37-op7",
        text: "Кез келген саны символдар"
      },
      {
        id: "db-t07-b37-op8",
        text: "Кестенің өзін толық жояды"
      }
    ],
    correctOptionIds: [
      "db-t07-b37-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b38",
    subjectId: SubjectId.DB,
    text: "UNION мен UNION ALL операторларының айырмашылығы неде?",
    options: [
      {
        id: "db-t07-b38-op1",
        text: "UNION біріктіру кезінде дубликаттарды алып тастайды, ал UNION ALL барлық жолдарды сақтайды"
      },
      {
        id: "db-t07-b38-op2",
        text: "UNION тек сандарды біріктіреді, ал UNION ALL мәтіндерді де біріктіреді"
      },
      {
        id: "db-t07-b38-op3",
        text: "UNION ALL тек оң жақ кестенің деректерін сақтайды"
      },
      {
        id: "db-t07-b38-op4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "db-t07-b38-op5",
        text: "ASC"
      },
      {
        id: "db-t07-b38-op6",
        text: "Тек бастапқы кілт бағанын ғана"
      },
      {
        id: "db-t07-b38-op7",
        text: "Деректер жояды"
      },
      {
        id: "db-t07-b38-op8",
        text: "Нәтижелерді біріктіру"
      }
    ],
    correctOptionIds: [
      "db-t07-b38-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b39",
    subjectId: SubjectId.DB,
    text: "UNION ALL операторының UNION операторына қарағанда жылдамдық жағынан негізгі артықшылығы неде?",
    options: [
      {
        id: "db-t07-b39-op1",
        text: "Дубликаттарды іздеп, сұрыптау және жою кезеңі болмағандықтан тезірек орындалады"
      },
      {
        id: "db-t07-b39-op2",
        text: "Нәтижені автоматты түрде индекспен қамтамасыз етеді"
      },
      {
        id: "db-t07-b39-op3",
        text: "Көбірек жады үнемдейді"
      },
      {
        id: "db-t07-b39-op4",
        text: "Орындалу жоспарын оңтайландырады"
      },
      {
        id: "db-t07-b39-op5",
        text: "Деректерді жаңартады"
      },
      {
        id: "db-t07-b39-op6",
        text: "Айырмашылықты"
      },
      {
        id: "db-t07-b39-op7",
        text: "DATEADD()"
      },
      {
        id: "db-t07-b39-op8",
        text: "FALSE"
      }
    ],
    correctOptionIds: [
      "db-t07-b39-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "0460c1ca-1c6b-48cc-9d52-8cf379fe5397",
    subjectId: SubjectId.DB,
    text: "Екі SELECT сұранысының нәтижелерін жиынтық операторлармен (UNION, EXCEPT, INTERSECT) біріктіру үшін қандай басты шарт орындалуы тиіс?",
    options: [
      {
        id: "30db14dc-c347-4d3b-8bcb-d31fb910d94e",
        text: "Сұраныстардағы бағандар саны мен олардың сәйкес деректер типтері бірдей болуы керек"
      },
      {
        id: "264fbe36-524e-4f53-9f6d-c871702bbffa",
        text: "Кестелердегі жолдар саны бірдей болуы тиіс"
      },
      {
        id: "c05b59d0-df2d-4137-9721-d0ed1ed20595",
        text: "Бастапқы кілттер сәйкес келуі керек"
      },
      {
        id: "da38fee0-2c96-49c2-a02c-c45b2c68e9df",
        text: "Екі кесте де бір дерекқорда орналасуы тиіс"
      },
      {
        id: "4d02efe5-9454-4bf8-93ac-a0bb3c6ad015",
        text: "BOTTOM NULLS"
      },
      {
        id: "0f5fe5f7-18a1-42a8-b9b1-4df54cb4ffdb",
        text: "Нөл (0)"
      },
      {
        id: "98fb75bc-eeba-41d6-a961-8ec74f3daf02",
        text: "Оң жақтың барлығы"
      },
      {
        id: "9b8b759b-19ed-4f2f-88ef-17e7c51095b5",
        text: "Кестенің өзін толық жояды"
      }
    ],
    correctOptionIds: [
      "30db14dc-c347-4d3b-8bcb-d31fb910d94e"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b40",
    subjectId: SubjectId.DB,
    text: "CASE операторы SQL-де не үшін қолданылады?",
    options: [
      {
        id: "db-t07-b40-op1",
        text: "Сұраныс ішінде шарттық логиканы (if-then-else) іске асыру үшін"
      },
      {
        id: "db-t07-b40-op2",
        text: "Кестелерді автоматты түрде сұрыптау үшін"
      },
      {
        id: "db-t07-b40-op3",
        text: "Транзакцияны жабу үшін"
      },
      {
        id: "db-t07-b40-op4",
        text: "Жаңа деректер типін құру үшін"
      },
      {
        id: "db-t07-b40-op5",
        text: "GETUSER()"
      },
      {
        id: "db-t07-b40-op6",
        text: "Санды дөңгелектемей, үтірден кейінгі 2 цифрдан артығын қиып тастайды (123.45)"
      },
      {
        id: "db-t07-b40-op7",
        text: "Сыртқы кілттің бастапқы кілтке автоматты сілтеме жасауы"
      },
      {
        id: "db-t07-b40-op8",
        text: "Нақты бір символ"
      }
    ],
    correctOptionIds: [
      "db-t07-b40-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b41",
    subjectId: SubjectId.DB,
    text: "CASE операторының дұрыс синтаксистік аяқталуы қандай?",
    options: [
      {
        id: "db-t07-b41-op1",
        text: "END кілтсөзімен аяқталады"
      },
      {
        id: "db-t07-b41-op2",
        text: "CLOSE сөзімен аяқталады"
      },
      {
        id: "db-t07-b41-op3",
        text: "EXIT сөзімен аяқталады"
      },
      {
        id: "db-t07-b41-op4",
        text: "FINISH сөзімен аяқталады"
      },
      {
        id: "db-t07-b41-op5",
        text: "123.46"
      },
      {
        id: "db-t07-b41-op6",
        text: "START FROM"
      },
      {
        id: "db-t07-b41-op7",
        text: "LTRIM()"
      },
      {
        id: "db-t07-b41-op8",
        text: "WHERE column_name NOT NULL"
      }
    ],
    correctOptionIds: [
      "db-t07-b41-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b42",
    subjectId: SubjectId.DB,
    text: "COALESCE(val1, val2, val3) функциясы не істейді?",
    options: [
      {
        id: "db-t07-b42-op1",
        text: "Аргументтерінің ішінен алғашқы NULL емес мәнді қайтарады"
      },
      {
        id: "db-t07-b42-op2",
        text: "Барлық мәндердің қосындысын қайтарады"
      },
      {
        id: "db-t07-b42-op3",
        text: "Егер барлығы NULL болса, қате шығарады"
      },
      {
        id: "db-t07-b42-op4",
        text: "Мәндердің орташа шамасын есептейді"
      },
      {
        id: "db-t07-b42-op5",
        text: "MERGE функциясы немесе + операторы"
      },
      {
        id: "db-t07-b42-op6",
        text: "ARR_MERGE()"
      },
      {
        id: "db-t07-b42-op7",
        text: "Максималды мәнді табады"
      },
      {
        id: "db-t07-b42-op8",
        text: "LEFT_STRIP()"
      }
    ],
    correctOptionIds: [
      "db-t07-b42-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b43",
    subjectId: SubjectId.DB,
    text: "NULLIF(val1, val2) функциясының қызметі қандай?",
    options: [
      {
        id: "db-t07-b43-op1",
        text: "Егер val1 мен val2 тең болса, NULL қайтарады, әйтпесе val1-ді қайтарады"
      },
      {
        id: "db-t07-b43-op2",
        text: "Екі мәннің бірі NULL болса, қате шығарады"
      },
      {
        id: "db-t07-b43-op3",
        text: "Екі мән тең болғанда TRUE қайтарады"
      },
      {
        id: "db-t07-b43-op4",
        text: "Әрқашан екінші мәнді қайтарады"
      },
      {
        id: "db-t07-b43-op5",
        text: "SYSDATE"
      },
      {
        id: "db-t07-b43-op6",
        text: "Айырмашылықты"
      },
      {
        id: "db-t07-b43-op7",
        text: "Ешқандай мән қайтармайды"
      },
      {
        id: "db-t07-b43-op8",
        text: "Барлық бағандарды қайтарады"
      }
    ],
    correctOptionIds: [
      "db-t07-b43-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b44",
    subjectId: SubjectId.DB,
    text: "Мәтіндерді біріктіру үшін SQL-де қандай функция немесе оператор қолданылады?",
    options: [
      {
        id: "db-t07-b44-op1",
        text: "CONCAT функциясы немесе || операторы"
      },
      {
        id: "db-t07-b44-op2",
        text: "MERGE функциясы немесе + операторы"
      },
      {
        id: "db-t07-b44-op3",
        text: "JOIN функциясы немесе & операторы"
      },
      {
        id: "db-t07-b44-op4",
        text: "UNION функциясы немесе ADD операторы"
      },
      {
        id: "db-t07-b44-op5",
        text: "Нәтижені файлға жазады"
      },
      {
        id: "db-t07-b44-op6",
        text: "NOT IN"
      },
      {
        id: "db-t07-b44-op7",
        text: "TITLE()"
      },
      {
        id: "db-t07-b44-op8",
        text: "Тек сандық бағандарды ғана"
      }
    ],
    correctOptionIds: [
      "db-t07-b44-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b45",
    subjectId: SubjectId.DB,
    text: "Мәтіннің ұзындығын (таңбалар санын) анықтау үшін қандай функция қолданылады?",
    options: [
      {
        id: "db-t07-b45-op1",
        text: "LENGTH() немесе LEN()"
      },
      {
        id: "db-t07-b45-op2",
        text: "SIZE() немесе COUNT()"
      },
      {
        id: "db-t07-b45-op3",
        text: "CHAR_COUNT()"
      },
      {
        id: "db-t07-b45-op4",
        text: "WIDTH()"
      },
      {
        id: "db-t07-b45-op5",
        text: "DESC"
      },
      {
        id: "db-t07-b45-op6",
        text: "Кестелерді біріктіру"
      },
      {
        id: "db-t07-b45-op7",
        text: "BETWEEN NOT"
      },
      {
        id: "db-t07-b45-op8",
        text: "Тек бастапқы кілттер бойынша қосылғанда"
      }
    ],
    correctOptionIds: [
      "db-t07-b45-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b46",
    subjectId: SubjectId.DB,
    text: "Жолды толықтай кіші әріптерге айналдыру үшін қандай функция қолданылады?",
    options: [
      {
        id: "db-t07-b46-op1",
        text: "LOWER()"
      },
      {
        id: "db-t07-b46-op2",
        text: "UPPER()"
      },
      {
        id: "db-t07-b46-op3",
        text: "SMALL()"
      },
      {
        id: "db-t07-b46-op4",
        text: "MIN_CASE()"
      },
      {
        id: "db-t07-b46-op5",
        text: "Орташаны табады"
      },
      {
        id: "db-t07-b46-op6",
        text: "DATE_INTERVAL()"
      },
      {
        id: "db-t07-b46-op7",
        text: "SQRT()"
      },
      {
        id: "db-t07-b46-op8",
        text: "Natural-Join"
      }
    ],
    correctOptionIds: [
      "db-t07-b46-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b47",
    subjectId: SubjectId.DB,
    text: "Жолды толықтай бас әріптерге айналдыру үшін қандай функция қолданылады?",
    options: [
      {
        id: "db-t07-b47-op1",
        text: "UPPER()"
      },
      {
        id: "db-t07-b47-op2",
        text: "LOWER()"
      },
      {
        id: "db-t07-b47-op3",
        text: "CAPITAL()"
      },
      {
        id: "db-t07-b47-op4",
        text: "MAX_CASE()"
      },
      {
        id: "db-t07-b47-op5",
        text: "Барлық нәтижелерді біріктіреді"
      },
      {
        id: "db-t07-b47-op6",
        text: "NULLS TOP"
      },
      {
        id: "db-t07-b47-op7",
        text: "NULL"
      },
      {
        id: "db-t07-b47-op8",
        text: "Кесте жояды"
      }
    ],
    correctOptionIds: [
      "db-t07-b47-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b48",
    subjectId: SubjectId.DB,
    text: "Жолдың басындағы және соңындағы бос орындарды алып тастау үшін қолданылатын функция:",
    options: [
      {
        id: "db-t07-b48-op1",
        text: "TRIM()"
      },
      {
        id: "db-t07-b48-op2",
        text: "STRIP()"
      },
      {
        id: "db-t07-b48-op3",
        text: "CLEAN()"
      },
      {
        id: "db-t07-b48-op4",
        text: "REMOVE_SPACES()"
      },
      {
        id: "db-t07-b48-op5",
        text: "Нақты бір символ"
      },
      {
        id: "db-t07-b48-op6",
        text: "Кему ретімен сұрыптау"
      },
      {
        id: "db-t07-b48-op7",
        text: "OUTSIDE"
      },
      {
        id: "db-t07-b48-op8",
        text: "Бастапқы кілттер сәйкес келуі керек"
      }
    ],
    correctOptionIds: [
      "db-t07-b48-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b49",
    subjectId: SubjectId.DB,
    text: "Жолдың тек оң жағындағы бос орындарды өшіру үшін қолданылатын функция:",
    options: [
      {
        id: "db-t07-b49-op1",
        text: "RTRIM()"
      },
      {
        id: "db-t07-b49-op2",
        text: "LTRIM()"
      },
      {
        id: "db-t07-b49-op3",
        text: "TRIM()"
      },
      {
        id: "db-t07-b49-op4",
        text: "RIGHT_STRIP()"
      },
      {
        id: "db-t07-b49-op5",
        text: "Олар кезекпен параллель орындалады"
      },
      {
        id: "db-t07-b49-op6",
        text: "Нақты бір символ"
      },
      {
        id: "db-t07-b49-op7",
        text: "Кесте құрады"
      },
      {
        id: "db-t07-b49-op8",
        text: "Бос мәндердің орнына автоматты жазба қосу"
      }
    ],
    correctOptionIds: [
      "db-t07-b49-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b50",
    subjectId: SubjectId.DB,
    text: "Жолдың тек сол жағындағы бос орындарды өшіру үшін қолданылатын функция:",
    options: [
      {
        id: "db-t07-b50-op1",
        text: "LTRIM()"
      },
      {
        id: "db-t07-b50-op2",
        text: "RTRIM()"
      },
      {
        id: "db-t07-b50-op3",
        text: "TRIM()"
      },
      {
        id: "db-t07-b50-op4",
        text: "LEFT_STRIP()"
      },
      {
        id: "db-t07-b50-op5",
        text: "Тізімде бар-жоғын тексереді"
      },
      {
        id: "db-t07-b50-op6",
        text: "POWER()"
      },
      {
        id: "db-t07-b50-op7",
        text: "Кестелерді байланыстыру шарттарын (мысалы, PK = FK) көрсету үшін"
      },
      {
        id: "db-t07-b50-op8",
        text: "Деректер қосады"
      }
    ],
    correctOptionIds: [
      "db-t07-b50-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "bcb9f623-a53e-44d2-9af7-d5cba927ee5e",
    subjectId: SubjectId.DB,
    text: "SUBSTRING('Database', 1, 4) өрнегінің нәтижесі не болады (1-ден басталатын SQL стандарты бойынша)?",
    options: [
      {
        id: "1fad37e4-4cab-4dcc-a33b-e524ce3ccf6e",
        text: "'Data'"
      },
      {
        id: "8ab94cd7-3c16-4709-be40-b7a468fa07c0",
        text: "'Dat'"
      },
      {
        id: "6c347776-62b5-4727-8cad-1d722bbb17e5",
        text: "'atab'"
      },
      {
        id: "1bba6aa9-5d11-46f5-8f1b-1a4cd86a383b",
        text: "'base'"
      },
      {
        id: "89380611-f79a-40fe-ba18-b2251fa8b138",
        text: "Деректерді топтау"
      },
      {
        id: "b8c9e739-30c7-45e2-b653-7fcff4045160",
        text: "Максималды мәнді табады"
      },
      {
        id: "d4b911c6-5c71-4201-9f55-5a24e9326bb2",
        text: "Тізімде бар-жоғын тексереді"
      },
      {
        id: "f7b7e213-63cb-47d3-9173-aca931fbe5d6",
        text: "SORT BY"
      }
    ],
    correctOptionIds: [
      "1fad37e4-4cab-4dcc-a33b-e524ce3ccf6e"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b51",
    subjectId: SubjectId.DB,
    text: "PostgreSQL-де ағымдағы күн мен уақытты алу үшін қандай функция қолданылады?",
    options: [
      {
        id: "db-t07-b51-op1",
        text: "NOW() немесе CURRENT_TIMESTAMP"
      },
      {
        id: "db-t07-b51-op2",
        text: "GETDATE()"
      },
      {
        id: "db-t07-b51-op3",
        text: "SYSDATE"
      },
      {
        id: "db-t07-b51-op4",
        text: "TODAY()"
      },
      {
        id: "db-t07-b51-op5",
        text: "SYS_GUID()"
      },
      {
        id: "db-t07-b51-op6",
        text: "GET_PART()"
      },
      {
        id: "db-t07-b51-op7",
        text: "Шарттардың екеуі де FALSE болғанда орындалады"
      },
      {
        id: "db-t07-b51-op8",
        text: "GPA бойынша ең жоғары 3 студент"
      }
    ],
    correctOptionIds: [
      "db-t07-b51-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "03134590-3e07-4e2e-a8dc-33869373c36a",
    subjectId: SubjectId.DB,
    text: "Күн/уақыт мәнінен нақты бір бөлікті (мысалы, тек жылды немесе айды) бөліп алу үшін қолданылатын оператор:",
    options: [
      {
        id: "54f23e57-1213-4fc9-bb21-6df8e37106fb",
        text: "EXTRACT() немесе DATE_PART()"
      },
      {
        id: "0f1f5f8f-ea05-4112-8aa6-532116729071",
        text: "GET_PART()"
      },
      {
        id: "c001f822-acfe-472c-9c77-dffd4f2d9809",
        text: "SPLIT_DATE()"
      },
      {
        id: "2594ba68-d5dc-42a4-9d0f-dcfce6992731",
        text: "SUBDATE()"
      },
      {
        id: "08025731-6a31-4377-8b70-db8ac473f2d1",
        text: "Сол жақтың барлығы"
      },
      {
        id: "52e5db12-c0ce-47d7-902c-32955b2298be",
        text: "Деректерді өсу ретімен сұрыптау"
      },
      {
        id: "6277f59e-43da-4419-9301-11f910ef8c4f",
        text: "Егер барлығы NULL болса, қате шығарады"
      },
      {
        id: "6eadc396-4e22-4938-9c54-c4892d0c4622",
        text: "TRIM()"
      }
    ],
    correctOptionIds: [
      "54f23e57-1213-4fc9-bb21-6df8e37106fb"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b52",
    subjectId: SubjectId.DB,
    text: "EXTRACT(YEAR FROM DATE '2026-06-05') сұранысының нәтижесі нешеге тең?",
    options: [
      {
        id: "db-t07-b52-op1",
        text: "2026"
      },
      {
        id: "db-t07-b52-op2",
        text: "6"
      },
      {
        id: "db-t07-b52-op3",
        text: "5"
      },
      {
        id: "db-t07-b52-op4",
        text: "2026.06"
      },
      {
        id: "db-t07-b52-op5",
        text: "UNION ALL тек оң жақ кестенің деректерін сақтайды"
      },
      {
        id: "db-t07-b52-op6",
        text: "Көбірек жады үнемдейді"
      },
      {
        id: "db-t07-b52-op7",
        text: "LTRIM()"
      },
      {
        id: "db-t07-b52-op8",
        text: "Әрқашан екінші мәнді қайтарады"
      }
    ],
    correctOptionIds: [
      "db-t07-b52-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b53",
    subjectId: SubjectId.DB,
    text: "SQL-де шартты сүзгілеуде AND операторымен біріктірілген шарттар қалай орындалады?",
    options: [
      {
        id: "db-t07-b53-op1",
        text: "Екі шарт та бірдей TRUE болғанда ғана жол таңдалады"
      },
      {
        id: "db-t07-b53-op2",
        text: "Шарттардың кем дегенде біреуі TRUE болса, жол таңдалады"
      },
      {
        id: "db-t07-b53-op3",
        text: "Шарттардың екеуі де FALSE болғанда орындалады"
      },
      {
        id: "db-t07-b53-op4",
        text: "Тек бірінші шарт қана тексеріледі"
      },
      {
        id: "db-t07-b53-op5",
        text: "Санды ең жақын бүтін санға дейін дөңгелектейді"
      },
      {
        id: "db-t07-b53-op6",
        text: "Қате (Error)"
      },
      {
        id: "db-t07-b53-op7",
        text: "Тек сәйкестер"
      },
      {
        id: "db-t07-b53-op8",
        text: "Мәннің бос жол екенін тексереді"
      }
    ],
    correctOptionIds: [
      "db-t07-b53-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b54",
    subjectId: SubjectId.DB,
    text: "SQL-де OR операторымен біріктірілген шарттар қалай орындалады?",
    options: [
      {
        id: "db-t07-b54-op1",
        text: "Шарттардың кем дегенде біреуі TRUE болса, жол таңдалады"
      },
      {
        id: "db-t07-b54-op2",
        text: "Екі шарт та міндетті түрде TRUE болуы керек"
      },
      {
        id: "db-t07-b54-op3",
        text: "Шарттардың ешқайсысы орындалмаса орындалады"
      },
      {
        id: "db-t07-b54-op4",
        text: "Шарттардың тек біреуі ғана TRUE болуын талап етеді"
      },
      {
        id: "db-t07-b54-op5",
        text: "Мәннің NULL екенін тексереді"
      },
      {
        id: "db-t07-b54-op6",
        text: "MERGE функциясы немесе + операторы"
      },
      {
        id: "db-t07-b54-op7",
        text: "Екі мәннің бірі NULL болса, қате шығарады"
      },
      {
        id: "db-t07-b54-op8",
        text: "Нәтижені бүтін санға айналдырады"
      }
    ],
    correctOptionIds: [
      "db-t07-b54-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b55",
    subjectId: SubjectId.DB,
    text: "Ақиқаттық кестесінде TRUE AND NULL нәтижесі қандай болады?",
    options: [
      {
        id: "db-t07-b55-op1",
        text: "NULL (немесе UNKNOWN)"
      },
      {
        id: "db-t07-b55-op2",
        text: "TRUE"
      },
      {
        id: "db-t07-b55-op3",
        text: "FALSE"
      },
      {
        id: "db-t07-b55-op4",
        text: "Қате (Error)"
      },
      {
        id: "db-t07-b55-op5",
        text: "Олардың орташа мәні бойынша сұрыпталады"
      },
      {
        id: "db-t07-b55-op6",
        text: "Егер барлығы NULL болса, қате шығарады"
      },
      {
        id: "db-t07-b55-op7",
        text: "Сыртқы кілттің бастапқы кілтке автоматты сілтеме жасауы"
      },
      {
        id: "db-t07-b55-op8",
        text: "ANALYZE PLAN"
      }
    ],
    correctOptionIds: [
      "db-t07-b55-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b56",
    subjectId: SubjectId.DB,
    text: "Ақиқаттық кестесінде FALSE AND NULL нәтижесі қандай болады?",
    options: [
      {
        id: "db-t07-b56-op1",
        text: "FALSE"
      },
      {
        id: "db-t07-b56-op2",
        text: "TRUE"
      },
      {
        id: "db-t07-b56-op3",
        text: "NULL"
      },
      {
        id: "db-t07-b56-op4",
        text: "UNKNOWN"
      },
      {
        id: "db-t07-b56-op5",
        text: "MOD()"
      },
      {
        id: "db-t07-b56-op6",
        text: "MAX_CASE()"
      },
      {
        id: "db-t07-b56-op7",
        text: "'Database' (өзгермейді, себебі ізделетін шаблон регистрге сезімтал)"
      },
      {
        id: "db-t07-b56-op8",
        text: "'Dat'"
      }
    ],
    correctOptionIds: [
      "db-t07-b56-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b57",
    subjectId: SubjectId.DB,
    text: "Ақиқаттық кестесінде TRUE OR NULL нәтижесі қандай болады?",
    options: [
      {
        id: "db-t07-b57-op1",
        text: "TRUE"
      },
      {
        id: "db-t07-b57-op2",
        text: "FALSE"
      },
      {
        id: "db-t07-b57-op3",
        text: "NULL"
      },
      {
        id: "db-t07-b57-op4",
        text: "UNKNOWN"
      },
      {
        id: "db-t07-b57-op5",
        text: "LEFT_STRIP()"
      },
      {
        id: "db-t07-b57-op6",
        text: "Екі кестеде де қосылатын бағанның аты бірдей болған жағдайда"
      },
      {
        id: "db-t07-b57-op7",
        text: "DATABASE() немесе CURRENT_DATABASE()"
      },
      {
        id: "db-t07-b57-op8",
        text: "UNION функциясы немесе ADD операторы"
      }
    ],
    correctOptionIds: [
      "db-t07-b57-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b58",
    subjectId: SubjectId.DB,
    text: "Ақиқаттық кестесінде FALSE OR NULL нәтижесі қандай болады?",
    options: [
      {
        id: "db-t07-b58-op1",
        text: "NULL (немесе UNKNOWN)"
      },
      {
        id: "db-t07-b58-op2",
        text: "TRUE"
      },
      {
        id: "db-t07-b58-op3",
        text: "FALSE"
      },
      {
        id: "db-t07-b58-op4",
        text: "Ешқандай мән қайтармайды"
      },
      {
        id: "db-t07-b58-op5",
        text: "SQRT()"
      },
      {
        id: "db-t07-b58-op6",
        text: "Кез келген сан"
      },
      {
        id: "db-t07-b58-op7",
        text: "'Data'"
      },
      {
        id: "db-t07-b58-op8",
        text: "Бірінші кестені"
      }
    ],
    correctOptionIds: [
      "db-t07-b58-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b59",
    subjectId: SubjectId.DB,
    text: "NOT NULL шартын WHERE-де қалай дұрыс жазу керек?",
    options: [
      {
        id: "db-t07-b59-op1",
        text: "WHERE column_name IS NOT NULL"
      },
      {
        id: "db-t07-b59-op2",
        text: "WHERE column_name != NULL"
      },
      {
        id: "db-t07-b59-op3",
        text: "WHERE column_name NOT NULL"
      },
      {
        id: "db-t07-b59-op4",
        text: "WHERE column_name IS NOT EMPTY"
      },
      {
        id: "db-t07-b59-op5",
        text: "Кестелерді біріктіру"
      },
      {
        id: "db-t07-b59-op6",
        text: "Декарт көбейтіндісі (барлық мүмкін жұптар)"
      },
      {
        id: "db-t07-b59-op7",
        text: "Кез келген бағанды шектеусіз жазуға болады"
      },
      {
        id: "db-t07-b59-op8",
        text: "'basebase'"
      }
    ],
    correctOptionIds: [
      "db-t07-b59-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b60",
    subjectId: SubjectId.DB,
    text: "Сұраныста ORDER BY сөйлемінде NULL мәндерін ең соңында көрсету үшін PostgreSQL-де не жазылады?",
    options: [
      {
        id: "db-t07-b60-op1",
        text: "NULLS LAST"
      },
      {
        id: "db-t07-b60-op2",
        text: "NULLS FIRST"
      },
      {
        id: "db-t07-b60-op3",
        text: "NULLS END"
      },
      {
        id: "db-t07-b60-op4",
        text: "BOTTOM NULLS"
      },
      {
        id: "db-t07-b60-op5",
        text: "Қосындысын табады"
      },
      {
        id: "db-t07-b60-op6",
        text: "Қиылысу (Intersection)"
      },
      {
        id: "db-t07-b60-op7",
        text: "Шарттардың кем дегенде біреуі TRUE болса, жол таңдалады"
      },
      {
        id: "db-t07-b60-op8",
        text: "RAND() немесе RANDOM()"
      }
    ],
    correctOptionIds: [
      "db-t07-b60-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b61",
    subjectId: SubjectId.DB,
    text: "Сұраныста ORDER BY сөйлемінде NULL мәндерін ең басында көрсету үшін не жазылады?",
    options: [
      {
        id: "db-t07-b61-op1",
        text: "NULLS FIRST"
      },
      {
        id: "db-t07-b61-op2",
        text: "NULLS LAST"
      },
      {
        id: "db-t07-b61-op3",
        text: "NULLS TOP"
      },
      {
        id: "db-t07-b61-op4",
        text: "HEAD NULLS"
      },
      {
        id: "db-t07-b61-op5",
        text: "Сұраныстардағы бағандар саны мен олардың сәйкес деректер типтері бірдей болуы керек"
      },
      {
        id: "db-t07-b61-op6",
        text: "Орташа мәнді табады"
      },
      {
        id: "db-t07-b61-op7",
        text: "Деректерді жояды"
      },
      {
        id: "db-t07-b61-op8",
        text: "Олар кезекпен параллель орындалады"
      }
    ],
    correctOptionIds: [
      "db-t07-b61-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b62",
    subjectId: SubjectId.DB,
    text: "Бірнеше баған бойынша сұрыптау қалай жүзеге асады (мысалы, ORDER BY Lastname, Firstname)?",
    options: [
      {
        id: "db-t07-b62-op1",
        text: "Алдымен Lastname бойынша сұрыпталады, егер олар тең болса, Firstname бойынша сұрыпталады"
      },
      {
        id: "db-t07-b62-op2",
        text: "Бағандардың алфавиттік реті бойынша сұрыпталады"
      },
      {
        id: "db-t07-b62-op3",
        text: "Олардың орташа мәні бойынша сұрыпталады"
      },
      {
        id: "db-t07-b62-op4",
        text: "Тек Lastname бойынша ғана сұрыпталады, Firstname еленбейді"
      },
      {
        id: "db-t07-b62-op5",
        text: "CLEAN()"
      },
      {
        id: "db-t07-b62-op6",
        text: "Тек сәйкестер"
      },
      {
        id: "db-t07-b62-op7",
        text: "Дубликаттарды іздеп, сұрыптау және жою кезеңі болмағандықтан тезірек орындалады"
      },
      {
        id: "db-t07-b62-op8",
        text: "UNION ALL тек оң жақ кестенің деректерін сақтайды"
      }
    ],
    correctOptionIds: [
      "db-t07-b62-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b63",
    subjectId: SubjectId.DB,
    text: "GROUP BY қолданылғанда SELECT тізімінде қандай бағандарды ғана жазуға рұқсат етіледі?",
    options: [
      {
        id: "db-t07-b63-op1",
        text: "Тек топтастырылған бағандарды немесе агрегаттық функциялардың ішіндегі бағандарды"
      },
      {
        id: "db-t07-b63-op2",
        text: "Кез келген бағанды шектеусіз жазуға болады"
      },
      {
        id: "db-t07-b63-op3",
        text: "Тек сандық бағандарды ғана"
      },
      {
        id: "db-t07-b63-op4",
        text: "Тек бастапқы кілт бағанын ғана"
      },
      {
        id: "db-t07-b63-op5",
        text: "Бос мәндердің орнына автоматты жазба қосу"
      },
      {
        id: "db-t07-b63-op6",
        text: "Тек бірінші шарт қана тексеріледі"
      },
      {
        id: "db-t07-b63-op7",
        text: "DIFF_DATE()"
      },
      {
        id: "db-t07-b63-op8",
        text: "Барлық бағандарды қайтарады"
      }
    ],
    correctOptionIds: [
      "db-t07-b63-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "643961e0-e1b7-4699-945e-1d3ae6875e57",
    subjectId: SubjectId.DB,
    text: "Сұраныс нәтижесін белгілі бір санға ығыстыру (алғашқы N жолды өткізіп жіберу) үшін LIMIT операторымен бірге не қолданылады?",
    options: [
      {
        id: "154c2b29-25ef-471c-8e0f-2b9ac543f496",
        text: "OFFSET"
      },
      {
        id: "d077fc77-9cdd-4535-94fb-92ab8046f1ca",
        text: "SKIP"
      },
      {
        id: "2404dd2c-6232-4584-8c73-d15977598a6b",
        text: "START FROM"
      },
      {
        id: "726c0936-7ee7-4d5d-8c86-65aef1e4b1c5",
        text: "BEGIN AT"
      },
      {
        id: "51170090-7dd2-400e-93b9-ecbfe3a9ae5c",
        text: "Оң жақтың барлығы"
      },
      {
        id: "496966b8-c527-436f-ab23-23712273a960",
        text: "Кесте құрады"
      },
      {
        id: "ee391d59-1c4b-48ec-ac71-19d6541cac81",
        text: "Сол жақтың барлығы"
      },
      {
        id: "5ba63570-1592-46ac-bc69-f530b93c3d8b",
        text: "DOWN"
      }
    ],
    correctOptionIds: [
      "154c2b29-25ef-471c-8e0f-2b9ac543f496"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b64",
    subjectId: SubjectId.DB,
    text: "LIMIT 5 OFFSET 10 сұранысы не істейді?",
    options: [
      {
        id: "db-t07-b64-op1",
        text: "Алғашқы 10 жолды өткізіп жіберіп, келесі 5 жолды қайтарады"
      },
      {
        id: "db-t07-b64-op2",
        text: "Алғашқы 5 жолды өткізіп жіберіп, келесі 10 жолды қайтарады"
      },
      {
        id: "db-t07-b64-op3",
        text: "5-тен 10-ға дейінгі жолдарды қайтарады"
      },
      {
        id: "db-t07-b64-op4",
        text: "Жалпы саны 15 жолды қайтарады"
      },
      {
        id: "db-t07-b64-op5",
        text: "Деректерді біріктіру"
      },
      {
        id: "db-t07-b64-op6",
        text: "Сол жақтың барлығы"
      },
      {
        id: "db-t07-b64-op7",
        text: "LEFT_STRIP()"
      },
      {
        id: "db-t07-b64-op8",
        text: "Деректерді біріктіреді"
      }
    ],
    correctOptionIds: [
      "db-t07-b64-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b65",
    subjectId: SubjectId.DB,
    text: "COUNT(DISTINCT column_name) өрнегі не істейді?",
    options: [
      {
        id: "db-t07-b65-op1",
        text: "Бағандағы тек бірегей және NULL емес мәндердің санын есептейді"
      },
      {
        id: "db-t07-b65-op2",
        text: "Барлық қайталанатын мәндердің қосындысын табады"
      },
      {
        id: "db-t07-b65-op3",
        text: "Бос мәндердің жалпы санын қайтарады"
      },
      {
        id: "db-t07-b65-op4",
        text: "Кестедегі барлық жолдардың санын қайтарады"
      },
      {
        id: "db-t07-b65-op5",
        text: "GET_PART()"
      },
      {
        id: "db-t07-b65-op6",
        text: "GROUP_ARRAY()"
      },
      {
        id: "db-t07-b65-op7",
        text: "Мәннің бос жол екенін тексереді"
      },
      {
        id: "db-t07-b65-op8",
        text: "WHERE column_name IS NOT NULL"
      }
    ],
    correctOptionIds: [
      "db-t07-b65-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "070ed2ce-8f8d-4bcf-8d16-e5c8b134aa68",
    subjectId: SubjectId.DB,
    text: "Сұраныс нәтижелерінің жиынынан екінші бір сұраныс нәтижелерін алып тастау операторы қалай аталады (Oracle немесе SQL Server тиісінше)?",
    options: [
      {
        id: "e80cdebc-07ab-4b8d-a0b3-f82dc0fa5397",
        text: "MINUS немесе EXCEPT"
      },
      {
        id: "69d517bc-4c61-497e-a4a1-59c0c44e9326",
        text: "SUBTRACT немесе REMOVE"
      },
      {
        id: "9ae14807-ce8e-4690-b739-268cde79d522",
        text: "DIFFERENCE"
      },
      {
        id: "a086f0b1-ea99-4a60-b950-3984bd214231",
        text: "EXCLUDE"
      },
      {
        id: "b1ea94b2-47ce-4c9c-bfd9-f0933cdd6de3",
        text: "Бағандағы тек бірегей және NULL емес мәндердің санын есептейді"
      },
      {
        id: "99769a19-6e36-4390-b7e9-379d7971ec36",
        text: "START FROM"
      },
      {
        id: "38797c1c-cfd6-43a1-abbe-a33b4f3504a7",
        text: "Нақты бір символ"
      },
      {
        id: "312c385f-7cc1-4fde-a4f9-b52415ca7178",
        text: "Жазба қосады"
      }
    ],
    correctOptionIds: [
      "e80cdebc-07ab-4b8d-a0b3-f82dc0fa5397"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b66",
    subjectId: SubjectId.DB,
    text: "INTERSECT операторы жиындар теориясының қай амалына сәйкес келеді?",
    options: [
      {
        id: "db-t07-b66-op1",
        text: "Қиылысу (Intersection)"
      },
      {
        id: "db-t07-b66-op2",
        text: "Бірігу (Union)"
      },
      {
        id: "db-t07-b66-op3",
        text: "Айырма (Difference)"
      },
      {
        id: "db-t07-b66-op4",
        text: "Декарттық көбейтінді"
      },
      {
        id: "db-t07-b66-op5",
        text: "LIKE"
      },
      {
        id: "db-t07-b66-op6",
        text: "MERGE функциясы немесе + операторы"
      },
      {
        id: "db-t07-b66-op7",
        text: "NULLS FIRST"
      },
      {
        id: "db-t07-b66-op8",
        text: "Сұраныс нәтижесінен қайталанатын (дубликат) жолдарды алып тастап, тек бірегей мәндерді қайтару"
      }
    ],
    correctOptionIds: [
      "db-t07-b66-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b67",
    subjectId: SubjectId.DB,
    text: "Екі кестені қосу кезінде USING(column_name) синтаксисін қай кезде қолдануға болады?",
    options: [
      {
        id: "db-t07-b67-op1",
        text: "Екі кестеде де қосылатын бағанның аты бірдей болған жағдайда"
      },
      {
        id: "db-t07-b67-op2",
        text: "Екі кесте де бос болмағанда"
      },
      {
        id: "db-t07-b67-op3",
        text: "Тек бастапқы кілттер бойынша қосылғанда"
      },
      {
        id: "db-t07-b67-op4",
        text: "Баған типтері әртүрлі болғанда"
      },
      {
        id: "db-t07-b67-op5",
        text: "NULL"
      },
      {
        id: "db-t07-b67-op6",
        text: "INITCAP()"
      },
      {
        id: "db-t07-b67-op7",
        text: "DATE_ADD()"
      },
      {
        id: "db-t07-b67-op8",
        text: "EXTRACT() немесе DATE_PART()"
      }
    ],
    correctOptionIds: [
      "db-t07-b67-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b68",
    subjectId: SubjectId.DB,
    text: "ON сөйлемі JOIN операторында не үшін қажет?",
    options: [
      {
        id: "db-t07-b68-op1",
        text: "Кестелерді байланыстыру шарттарын (мысалы, PK = FK) көрсету үшін"
      },
      {
        id: "db-t07-b68-op2",
        text: "Кестенің атын өзгерту үшін"
      },
      {
        id: "db-t07-b68-op3",
        text: "Сұрыптау шартын көрсету үшін"
      },
      {
        id: "db-t07-b68-op4",
        text: "Жаңа деректерді кестеге қосу үшін"
      },
      {
        id: "db-t07-b68-op5",
        text: "Барлық бағандарды қайтарады"
      },
      {
        id: "db-t07-b68-op6",
        text: "RAND() немесе RANDOM()"
      },
      {
        id: "db-t07-b68-op7",
        text: "Екі шарт та бірдей TRUE болғанда ғана жол таңдалады"
      },
      {
        id: "db-t07-b68-op8",
        text: "DATEADD()"
      }
    ],
    correctOptionIds: [
      "db-t07-b68-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b69",
    subjectId: SubjectId.DB,
    text: "SQL-де жолдарды сұрыптау әдепкі бойынша (кілтсөз жазылмаса) қалай орындалады?",
    options: [
      {
        id: "db-t07-b69-op1",
        text: "Өсу ретімен (ASC)"
      },
      {
        id: "db-t07-b69-op2",
        text: "Кему ретімен (DESC)"
      },
      {
        id: "db-t07-b69-op3",
        text: "Бастапқы қосылған ретімен"
      },
      {
        id: "db-t07-b69-op4",
        text: "Кездейсоқ ретпен"
      },
      {
        id: "db-t07-b69-op5",
        text: "date_column.addDays(5)"
      },
      {
        id: "db-t07-b69-op6",
        text: "COUNT(*) тек бірінші бағанды есептейді"
      },
      {
        id: "db-t07-b69-op7",
        text: "BEGIN AT"
      },
      {
        id: "db-t07-b69-op8",
        text: "SHOW DATABASE"
      }
    ],
    correctOptionIds: [
      "db-t07-b69-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b70",
    subjectId: SubjectId.DB,
    text: "SQL-де сұраныстың орындалу жоспарын (Execution Plan) көру үшін қандай команда қолданылады?",
    options: [
      {
        id: "db-t07-b70-op1",
        text: "EXPLAIN"
      },
      {
        id: "db-t07-b70-op2",
        text: "PLAN"
      },
      {
        id: "db-t07-b70-op3",
        text: "SHOW PATH"
      },
      {
        id: "db-t07-b70-op4",
        text: "ANALYZE PLAN"
      },
      {
        id: "db-t07-b70-op5",
        text: "Кестедегі барлық жазбаларды тез жояды"
      },
      {
        id: "db-t07-b70-op6",
        text: "Жаңа деректер типін құру үшін"
      },
      {
        id: "db-t07-b70-op7",
        text: "Нәтижелерді біріктіру"
      },
      {
        id: "db-t07-b70-op8",
        text: "NOT BETWEEN"
      }
    ],
    correctOptionIds: [
      "db-t07-b70-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b71",
    subjectId: SubjectId.DB,
    text: "EXPLAIN ANALYZE командасы (PostgreSQL-де) EXPLAIN-нен немен ерекшеленеді?",
    options: [
      {
        id: "db-t07-b71-op1",
        text: "Сұранысты іс жүзінде орындап, нақты уақыт көрсеткіштерін де қоса көрсетеді"
      },
      {
        id: "db-t07-b71-op2",
        text: "Тек қана қателерді тексереді"
      },
      {
        id: "db-t07-b71-op3",
        text: "Нәтижені файлға жазады"
      },
      {
        id: "db-t07-b71-op4",
        text: "Сұраныстың жылдамдығын екі есеге оңтайландырады"
      },
      {
        id: "db-t07-b71-op5",
        text: "SYSTEM_USER()"
      },
      {
        id: "db-t07-b71-op6",
        text: "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        id: "db-t07-b71-op7",
        text: "Барлық нәтижелер"
      },
      {
        id: "db-t07-b71-op8",
        text: "Кесте құрылымын өзгертеді (баған қосу, жою)"
      }
    ],
    correctOptionIds: [
      "db-t07-b71-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b72",
    subjectId: SubjectId.DB,
    text: "SQL-де SELECT 'Hello' || ' ' || 'World'; сұранысының нәтижесі не болады?",
    options: [
      {
        id: "db-t07-b72-op1",
        text: "'Hello World'"
      },
      {
        id: "db-t07-b72-op2",
        text: "TRUE"
      },
      {
        id: "db-t07-b72-op3",
        text: "Қате (Syntax Error)"
      },
      {
        id: "db-t07-b72-op4",
        text: "'Hello||||World'"
      },
      {
        id: "db-t07-b72-op5",
        text: "SUM_STRINGS()"
      },
      {
        id: "db-t07-b72-op6",
        text: "Барлық жазбаларды қайтарады"
      },
      {
        id: "db-t07-b72-op7",
        text: "'Data'"
      },
      {
        id: "db-t07-b72-op8",
        text: "ADD_DATE(date_column, 5)"
      }
    ],
    correctOptionIds: [
      "db-t07-b72-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b73",
    subjectId: SubjectId.DB,
    text: "REPLACE('Database', 'data', 'base') функциясы не істейді (регистрді ескерсек)?",
    options: [
      {
        id: "db-t07-b73-op1",
        text: "'Database' (өзгермейді, себебі ізделетін шаблон регистрге сезімтал)"
      },
      {
        id: "db-t07-b73-op2",
        text: "'basebase'"
      },
      {
        id: "db-t07-b73-op3",
        text: "'base'"
      },
      {
        id: "db-t07-b73-op4",
        text: "'Databasebase'"
      },
      {
        id: "db-t07-b73-op5",
        text: "Тек қана HAVING орындалады"
      },
      {
        id: "db-t07-b73-op6",
        text: "MINUS немесе EXCEPT"
      },
      {
        id: "db-t07-b73-op7",
        text: "Деректерді топтау"
      },
      {
        id: "db-t07-b73-op8",
        text: "NOT_RANGE"
      }
    ],
    correctOptionIds: [
      "db-t07-b73-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b74",
    subjectId: SubjectId.DB,
    text: "ROUND(123.4567, 2) функциясының нәтижесі қандай болады?",
    options: [
      {
        id: "db-t07-b74-op1",
        text: "123.46"
      },
      {
        id: "db-t07-b74-op2",
        text: "123.45"
      },
      {
        id: "db-t07-b74-op3",
        text: "123"
      },
      {
        id: "db-t07-b74-op4",
        text: "123.457"
      },
      {
        id: "db-t07-b74-op5",
        text: "Екі мәннің бірі NULL болса, қате шығарады"
      },
      {
        id: "db-t07-b74-op6",
        text: "ABS()"
      },
      {
        id: "db-t07-b74-op7",
        text: "Топтайды"
      },
      {
        id: "db-t07-b74-op8",
        text: "CHAR_COUNT()"
      }
    ],
    correctOptionIds: [
      "db-t07-b74-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b75",
    subjectId: SubjectId.DB,
    text: "TRUNC(123.4567, 2) немесе TRUNCATE(123.4567, 2) функциясы не істейді?",
    options: [
      {
        id: "db-t07-b75-op1",
        text: "Санды дөңгелектемей, үтірден кейінгі 2 цифрдан артығын қиып тастайды (123.45)"
      },
      {
        id: "db-t07-b75-op2",
        text: "Санды ең жақын бүтін санға дейін дөңгелектейді"
      },
      {
        id: "db-t07-b75-op3",
        text: "Нәтижені бүтін санға айналдырады"
      },
      {
        id: "db-t07-b75-op4",
        text: "Қате тудырады"
      },
      {
        id: "db-t07-b75-op5",
        text: "Сұраныстың жылдамдығын екі есеге оңтайландырады"
      },
      {
        id: "db-t07-b75-op6",
        text: "Олар бірдей нәтиже береді"
      },
      {
        id: "db-t07-b75-op7",
        text: "WIDTH()"
      },
      {
        id: "db-t07-b75-op8",
        text: "Шарттардың ешқайсысы орындалмаса орындалады"
      }
    ],
    correctOptionIds: [
      "db-t07-b75-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b76",
    subjectId: SubjectId.DB,
    text: "SQL-де математикалық абсолют мәнді (модуль) табу функциясы қандай?",
    options: [
      {
        id: "db-t07-b76-op1",
        text: "ABS()"
      },
      {
        id: "db-t07-b76-op2",
        text: "MOD()"
      },
      {
        id: "db-t07-b76-op3",
        text: "ABSVAL()"
      },
      {
        id: "db-t07-b76-op4",
        text: "ABSOLUTE()"
      },
      {
        id: "db-t07-b76-op5",
        text: "Деректер жояды"
      },
      {
        id: "db-t07-b76-op6",
        text: "Екі шарт та бірдей TRUE болғанда ғана жол таңдалады"
      },
      {
        id: "db-t07-b76-op7",
        text: "Сұраныстың жылдамдығын екі есеге оңтайландырады"
      },
      {
        id: "db-t07-b76-op8",
        text: "Деректерді топтастыру"
      }
    ],
    correctOptionIds: [
      "db-t07-b76-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b77",
    subjectId: SubjectId.DB,
    text: "Санның квадрат түбірін табу үшін қандай математикалық функция қолданылады?",
    options: [
      {
        id: "db-t07-b77-op1",
        text: "SQRT()"
      },
      {
        id: "db-t07-b77-op2",
        text: "SQ()"
      },
      {
        id: "db-t07-b77-op3",
        text: "ROOT()"
      },
      {
        id: "db-t07-b77-op4",
        text: "POWER()"
      },
      {
        id: "db-t07-b77-op5",
        text: "ASC"
      },
      {
        id: "db-t07-b77-op6",
        text: "LTRIM()"
      },
      {
        id: "db-t07-b77-op7",
        text: "EXTRACT() немесе DATE_PART()"
      },
      {
        id: "db-t07-b77-op8",
        text: "Өсу ретімен сұрыптау"
      }
    ],
    correctOptionIds: [
      "db-t07-b77-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b78",
    subjectId: SubjectId.DB,
    text: "Мәтіннің әрбір сөзінің алғашқы әріптерін ғана бас әріппен жазатын функция қандай?",
    options: [
      {
        id: "db-t07-b78-op1",
        text: "INITCAP()"
      },
      {
        id: "db-t07-b78-op2",
        text: "UPPER()"
      },
      {
        id: "db-t07-b78-op3",
        text: "CAPITALIZE()"
      },
      {
        id: "db-t07-b78-op4",
        text: "TITLE()"
      },
      {
        id: "db-t07-b78-op5",
        text: "LIKE NOT"
      },
      {
        id: "db-t07-b78-op6",
        text: "Айырмашылық жоқ"
      },
      {
        id: "db-t07-b78-op7",
        text: "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        id: "db-t07-b78-op8",
        text: "Нәтижелерді біріктіру"
      }
    ],
    correctOptionIds: [
      "db-t07-b78-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b79",
    subjectId: SubjectId.DB,
    text: "SQL-де қазіргі жүйелік пайдаланушының атын білу үшін қандай функция қолданылады?",
    options: [
      {
        id: "db-t07-b79-op1",
        text: "USER немесе CURRENT_USER"
      },
      {
        id: "db-t07-b79-op2",
        text: "WHOAMI"
      },
      {
        id: "db-t07-b79-op3",
        text: "GETUSER()"
      },
      {
        id: "db-t07-b79-op4",
        text: "SYSTEM_USER()"
      },
      {
        id: "db-t07-b79-op5",
        text: "SMALL()"
      },
      {
        id: "db-t07-b79-op6",
        text: "Жалпы саны 15 жолды қайтарады"
      },
      {
        id: "db-t07-b79-op7",
        text: "Екі кестеде де қосылатын бағанның аты бірдей болған жағдайда"
      },
      {
        id: "db-t07-b79-op8",
        text: "Шарттардың ешқайсысы орындалмаса орындалады"
      }
    ],
    correctOptionIds: [
      "db-t07-b79-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b80",
    subjectId: SubjectId.DB,
    text: "Дерекқордың атын алу үшін қандай функция қолданылады?",
    options: [
      {
        id: "db-t07-b80-op1",
        text: "DATABASE() немесе CURRENT_DATABASE()"
      },
      {
        id: "db-t07-b80-op2",
        text: "DBNAME()"
      },
      {
        id: "db-t07-b80-op3",
        text: "SHOW DATABASE"
      },
      {
        id: "db-t07-b80-op4",
        text: "GET_DB()"
      },
      {
        id: "db-t07-b80-op5",
        text: "GROUP BY"
      },
      {
        id: "db-t07-b80-op6",
        text: "DIFFERENCE"
      },
      {
        id: "db-t07-b80-op7",
        text: "Бос мәндердің орнына автоматты жазба қосу"
      },
      {
        id: "db-t07-b80-op8",
        text: "Кестенің атын өзгерту үшін"
      }
    ],
    correctOptionIds: [
      "db-t07-b80-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b81",
    subjectId: SubjectId.DB,
    text: "PostgreSQL-де жолдарды массивке біріктіретін агрегаттық функция қандай?",
    options: [
      {
        id: "db-t07-b81-op1",
        text: "ARRAY_AGG()"
      },
      {
        id: "db-t07-b81-op2",
        text: "TO_ARRAY()"
      },
      {
        id: "db-t07-b81-op3",
        text: "ARR_MERGE()"
      },
      {
        id: "db-t07-b81-op4",
        text: "GROUP_ARRAY()"
      },
      {
        id: "db-t07-b81-op5",
        text: "'Hello World'"
      },
      {
        id: "db-t07-b81-op6",
        text: "'base'"
      },
      {
        id: "db-t07-b81-op7",
        text: "'Database' (өзгермейді, себебі ізделетін шаблон регистрге сезімтал)"
      },
      {
        id: "db-t07-b81-op8",
        text: "Non-Equi-Join"
      }
    ],
    correctOptionIds: [
      "db-t07-b81-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ab4f6629-0268-4001-a715-3a89f91eb8ab",
    subjectId: SubjectId.DB,
    text: "Баған мәндерін үтір арқылы бір жолға біріктіретін агрегаттық функция қандай (standard немесе MySQL)?",
    options: [
      {
        id: "ce0ef6d8-51e3-4666-8ccc-961e9f0c9e8a",
        text: "GROUP_CONCAT() немесе STRING_AGG()"
      },
      {
        id: "744c0ab9-f612-48a8-9786-aca3bf94af57",
        text: "CONCAT_WS()"
      },
      {
        id: "e3cc03c4-dfd4-44d4-a1d7-84bcc69d2c07",
        text: "JOIN_STRINGS()"
      },
      {
        id: "c13a3b65-ea60-4bb7-b46d-31ad9bcdc0bf",
        text: "SUM_STRINGS()"
      },
      {
        id: "b8d92827-0ae9-4a3f-aadf-60b5f53cf68e",
        text: "OUTSIDE"
      },
      {
        id: "1ecf1b19-c5b0-4c04-8e87-47b9bd4d804e",
        text: "'Hello||||World'"
      },
      {
        id: "6b74e09d-b6a9-40e2-861f-7226e741ad88",
        text: "Кему ретімен сұрыптау"
      },
      {
        id: "df248bb4-c108-4917-ba2d-eee0151515a3",
        text: "Алдымен Lastname бойынша сұрыпталады, егер олар тең болса, Firstname бойынша сұрыпталады"
      }
    ],
    correctOptionIds: [
      "ce0ef6d8-51e3-4666-8ccc-961e9f0c9e8a"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b82",
    subjectId: SubjectId.DB,
    text: "SQL-де LIKE операторында теріске шығару қалай жазылады?",
    options: [
      {
        id: "db-t07-b82-op1",
        text: "NOT LIKE"
      },
      {
        id: "db-t07-b82-op2",
        text: "LIKE NOT"
      },
      {
        id: "db-t07-b82-op3",
        text: "UNLIKE"
      },
      {
        id: "db-t07-b82-op4",
        text: "NOT_LIKE()"
      },
      {
        id: "db-t07-b82-op5",
        text: "SYSTEM_USER()"
      },
      {
        id: "db-t07-b82-op6",
        text: "Кез келген бағанды шектеусіз жазуға болады"
      },
      {
        id: "db-t07-b82-op7",
        text: "'basebase'"
      },
      {
        id: "db-t07-b82-op8",
        text: "Кестелердегі жолдар саны бірдей болуы тиіс"
      }
    ],
    correctOptionIds: [
      "db-t07-b82-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b83",
    subjectId: SubjectId.DB,
    text: "Тізімде жоқ мәндерді іздеу үшін IN операторының терістеуі қалай жазылады?",
    options: [
      {
        id: "db-t07-b83-op1",
        text: "NOT IN"
      },
      {
        id: "db-t07-b83-op2",
        text: "IN NOT"
      },
      {
        id: "db-t07-b83-op3",
        text: "OUT OF"
      },
      {
        id: "db-t07-b83-op4",
        text: "EXCLUDE"
      },
      {
        id: "db-t07-b83-op5",
        text: "UNION тек сандарды біріктіреді, ал UNION ALL мәтіндерді де біріктіреді"
      },
      {
        id: "db-t07-b83-op6",
        text: "Ортақ бөлікті"
      },
      {
        id: "db-t07-b83-op7",
        text: "Сұраныстың жылдамдығын екі есеге оңтайландырады"
      },
      {
        id: "db-t07-b83-op8",
        text: "Сол жақтың барлығы + сәйкестіктер"
      }
    ],
    correctOptionIds: [
      "db-t07-b83-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b84",
    subjectId: SubjectId.DB,
    text: "Диапазоннан тыс мәндерді табу үшін BETWEEN операторының терістеуі қалай жазылады?",
    options: [
      {
        id: "db-t07-b84-op1",
        text: "NOT BETWEEN"
      },
      {
        id: "db-t07-b84-op2",
        text: "BETWEEN NOT"
      },
      {
        id: "db-t07-b84-op3",
        text: "OUTSIDE"
      },
      {
        id: "db-t07-b84-op4",
        text: "NOT_RANGE"
      },
      {
        id: "db-t07-b84-op5",
        text: "Non-Equi-Join"
      },
      {
        id: "db-t07-b84-op6",
        text: "Санды ең жақын бүтін санға дейін дөңгелектейді"
      },
      {
        id: "db-t07-b84-op7",
        text: "Ортақ кілті жоқ кестелерді біріктіреді"
      },
      {
        id: "db-t07-b84-op8",
        text: "Кесте құрылымын өзгертеді (баған қосу, жою)"
      }
    ],
    correctOptionIds: [
      "db-t07-b84-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f4d7cce5-9ae6-4493-8896-44ce955704a0",
    subjectId: SubjectId.DB,
    text: "Екі кестені қосу барысында сәйкестік шартына тек '=' операторы ғана қолданылса, мұндай қосылу қалай аталады?",
    options: [
      {
        id: "d18832e3-1283-4cba-96c4-d5b9f3864be7",
        text: "Equi-Join"
      },
      {
        id: "10a76ab8-20ff-44f5-8bbd-f03721a2ac7d",
        text: "Non-Equi-Join"
      },
      {
        id: "3e3b00f7-fc91-48fb-ab4e-c9951eff52ea",
        text: "Cross-Join"
      },
      {
        id: "028e1f9d-6524-4724-81b8-8a53561ec3c8",
        text: "Theta-Join"
      },
      {
        id: "4e68bf79-8af2-4d7f-9c06-14957d546895",
        text: "NOT_LIKE()"
      },
      {
        id: "4bd7628c-169a-4c39-8f3a-821c7645ffc1",
        text: "FALSE"
      },
      {
        id: "972ed7e6-8486-4269-aa15-c2775ceff955",
        text: "Деректерді жаңартады"
      },
      {
        id: "7f1fbea2-da56-4a65-8946-9cfe0cb202ec",
        text: "Алғашқы 10 жолды өткізіп жіберіп, келесі 5 жолды қайтарады"
      }
    ],
    correctOptionIds: [
      "d18832e3-1283-4cba-96c4-d5b9f3864be7"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b85",
    subjectId: SubjectId.DB,
    text: "Сәйкестік шартында '=', '>', '<' операторлары қолданылатын жалпы қосылу түрі қалай аталады?",
    options: [
      {
        id: "db-t07-b85-op1",
        text: "Theta-Join"
      },
      {
        id: "db-t07-b85-op2",
        text: "Equi-Join"
      },
      {
        id: "db-t07-b85-op3",
        text: "Natural-Join"
      },
      {
        id: "db-t07-b85-op4",
        text: "Self-Join"
      },
      {
        id: "db-t07-b85-op5",
        text: "CONCAT функциясы немесе || операторы"
      },
      {
        id: "db-t07-b85-op6",
        text: "SYSTEM_USER()"
      },
      {
        id: "db-t07-b85-op7",
        text: "NULL тексереді"
      },
      {
        id: "db-t07-b85-op8",
        text: "Алдымен HAVING орындалады"
      }
    ],
    correctOptionIds: [
      "db-t07-b85-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b86",
    subjectId: SubjectId.DB,
    text: "COALESCE функциясы аргументтерінің барлығы NULL болса не қайтарады?",
    options: [
      {
        id: "db-t07-b86-op1",
        text: "NULL"
      },
      {
        id: "db-t07-b86-op2",
        text: "Нөл (0)"
      },
      {
        id: "db-t07-b86-op3",
        text: "Бос жол"
      },
      {
        id: "db-t07-b86-op4",
        text: "Қате (Error)"
      },
      {
        id: "db-t07-b86-op5",
        text: "Олардың орташа мәні бойынша сұрыпталады"
      },
      {
        id: "db-t07-b86-op6",
        text: "ORDER BY"
      },
      {
        id: "db-t07-b86-op7",
        text: "Деректерді біріктіру"
      },
      {
        id: "db-t07-b86-op8",
        text: "GETDATE()"
      }
    ],
    correctOptionIds: [
      "db-t07-b86-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b87",
    subjectId: SubjectId.DB,
    text: "MySQL-де уақытқа немесе күнге белгілі бір мерзімді қосу үшін қандай функция қолданылады?",
    options: [
      {
        id: "db-t07-b87-op1",
        text: "DATE_ADD()"
      },
      {
        id: "db-t07-b87-op2",
        text: "ADD_DAYS()"
      },
      {
        id: "db-t07-b87-op3",
        text: "DATEADD()"
      },
      {
        id: "db-t07-b87-op4",
        text: "PLUS_DATE()"
      },
      {
        id: "db-t07-b87-op5",
        text: "Тек Lastname бойынша ғана сұрыпталады, Firstname еленбейді"
      },
      {
        id: "db-t07-b87-op6",
        text: "Жаңа деректерді кестеге қосу үшін"
      },
      {
        id: "db-t07-b87-op7",
        text: "TRUE"
      },
      {
        id: "db-t07-b87-op8",
        text: "LIKE NOT"
      }
    ],
    correctOptionIds: [
      "db-t07-b87-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b88",
    subjectId: SubjectId.DB,
    text: "PostgreSQL-де датаға 5 күн қосу үшін қандай синтаксис жиі қолданылады?",
    options: [
      {
        id: "db-t07-b88-op1",
        text: "date_column + INTERVAL '5 days'"
      },
      {
        id: "db-t07-b88-op2",
        text: "ADD_DATE(date_column, 5)"
      },
      {
        id: "db-t07-b88-op3",
        text: "date_column.addDays(5)"
      },
      {
        id: "db-t07-b88-op4",
        text: "date_column + 5"
      },
      {
        id: "db-t07-b88-op5",
        text: "WHERE column_name NOT NULL"
      },
      {
        id: "db-t07-b88-op6",
        text: "OUT OF"
      },
      {
        id: "db-t07-b88-op7",
        text: "SUM_STRINGS()"
      },
      {
        id: "db-t07-b88-op8",
        text: "Барлық нәтижелер"
      }
    ],
    correctOptionIds: [
      "db-t07-b88-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "9204feeb-1406-4e35-b408-0d2e1569c629",
    subjectId: SubjectId.DB,
    text: "Екі күннің айырмашылығын (күн санын) есептеу үшін қандай функция қолданылады (мысалы, SQL Server-де)?",
    options: [
      {
        id: "3c16381a-9e78-4fcc-b2c1-9aa1faf62b22",
        text: "DATEDIFF()"
      },
      {
        id: "efb4f144-7ffd-4fcc-bc89-d0e98ddc4df9",
        text: "DATESUB()"
      },
      {
        id: "d63c0ca9-4066-4fd6-bb58-068d19d3f5da",
        text: "DIFF_DATE()"
      },
      {
        id: "07f7069a-a24a-439e-9946-cc1440a03b16",
        text: "DATE_INTERVAL()"
      },
      {
        id: "d7c20f76-7ab1-41a6-b6ae-20be75030404",
        text: "Кездейсоқ реттеу"
      },
      {
        id: "36227e4b-91c3-41eb-8ad9-2716e5f23304",
        text: "Мәннің нөлге тең екенін тексереді"
      },
      {
        id: "f6e1f934-7efd-42a0-adcb-1688f04c7777",
        text: "'Dat'"
      },
      {
        id: "10d3c5f2-2b2c-462b-add0-63c4fb332e17",
        text: "Жазбалар санын есептейді"
      }
    ],
    correctOptionIds: [
      "3c16381a-9e78-4fcc-b2c1-9aa1faf62b22"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t07-b89",
    subjectId: SubjectId.DB,
    text: "SQL-де кездейсоқ сан алу үшін қандай функция қолданылады?",
    options: [
      {
        id: "db-t07-b89-op1",
        text: "RAND() немесе RANDOM()"
      },
      {
        id: "db-t07-b89-op2",
        text: "RANDOMIZE()"
      },
      {
        id: "db-t07-b89-op3",
        text: "GET_RAND()"
      },
      {
        id: "db-t07-b89-op4",
        text: "SYS_GUID()"
      },
      {
        id: "db-t07-b89-op5",
        text: "Олардың орташа мәні бойынша сұрыпталады"
      },
      {
        id: "db-t07-b89-op6",
        text: "Equi-Join"
      },
      {
        id: "db-t07-b89-op7",
        text: "Деректерді топтастыру"
      },
      {
        id: "db-t07-b89-op8",
        text: "Ең кіші мәнді табады"
      }
    ],
    correctOptionIds: [
      "db-t07-b89-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "SQL сұраныстары",
    difficulty: Difficulty.MEDIUM
  }
];
