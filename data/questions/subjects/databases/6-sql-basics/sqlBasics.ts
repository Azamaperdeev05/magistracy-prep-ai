import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// db / Интерактивті SQL
export const db6SqlBasicsQuestions : Question[] = [
  {
    id: "db-t06-b01",
    subjectId: SubjectId.DB,
    text: "CREATE TABLE командасы не істейді?",
    options: [
      {
        id: "db-t06-b01-op1",
        text: "Деректер қосады"
      },
      {
        id: "db-t06-b01-op2",
        text: "Жаңа кесте құрады"
      },
      {
        id: "db-t06-b01-op3",
        text: "Кестені жояды"
      },
      {
        id: "db-t06-b01-op4",
        text: "Деректерді жаңартады"
      },
      {
        id: "db-t06-b01-op5",
        text: "Транзакция басталғаннан бері жасалған барлық өзгерістерді жоққа шығарады"
      },
      {
        id: "db-t06-b01-op6",
        text: "AND, OR, NOT"
      },
      {
        id: "db-t06-b01-op7",
        text: "DECREASE"
      },
      {
        id: "db-t06-b01-op8",
        text: "ROLLBACK"
      }
    ],
    correctOptionIds: [
      "db-t06-b01-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b02",
    subjectId: SubjectId.DB,
    text: "INSERT INTO командасы не істейді?",
    options: [
      {
        id: "db-t06-b02-op1",
        text: "Кесте құрады"
      },
      {
        id: "db-t06-b02-op2",
        text: "Деректі жояды"
      },
      {
        id: "db-t06-b02-op3",
        text: "Жаңа жазба қосады"
      },
      {
        id: "db-t06-b02-op4",
        text: "Деректі жаңартады"
      },
      {
        id: "db-t06-b02-op5",
        text: "RENAME COLUMN"
      },
      {
        id: "db-t06-b02-op6",
        text: "DEFAULT"
      },
      {
        id: "db-t06-b02-op7",
        text: "TRUNCATE тек сандық кестелер үшін жұмыс істейді"
      },
      {
        id: "db-t06-b02-op8",
        text: "FIRST"
      }
    ],
    correctOptionIds: [
      "db-t06-b02-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b03",
    subjectId: SubjectId.DB,
    text: "DELETE FROM командасы не істейді?",
    options: [
      {
        id: "db-t06-b03-op1",
        text: "Белгілі жазбаларды жояды"
      },
      {
        id: "db-t06-b03-op2",
        text: "Кестені толық жояды"
      },
      {
        id: "db-t06-b03-op3",
        text: "Кесте құрады"
      },
      {
        id: "db-t06-b03-op4",
        text: "Жазба қосады"
      },
      {
        id: "db-t06-b03-op5",
        text: "Сұранысты бұғаттайды"
      },
      {
        id: "db-t06-b03-op6",
        text: "LOGIC"
      },
      {
        id: "db-t06-b03-op7",
        text: "Күнді де, уақытты да бірге сақтайды"
      },
      {
        id: "db-t06-b03-op8",
        text: "UPDATE TABLE ... ADD CONSTRAINT"
      }
    ],
    correctOptionIds: [
      "db-t06-b03-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b04",
    subjectId: SubjectId.DB,
    text: "UPDATE командасы не істейді?",
    options: [
      {
        id: "db-t06-b04-op1",
        text: "Жазбаны жояды"
      },
      {
        id: "db-t06-b04-op2",
        text: "Жаңа жазба қосады"
      },
      {
        id: "db-t06-b04-op3",
        text: "Бар жазбаны жаңартады"
      },
      {
        id: "db-t06-b04-op4",
        text: "Кестені жояды"
      },
      {
        id: "db-t06-b04-op5",
        text: "Транзакцияны кері қайтарады"
      },
      {
        id: "db-t06-b04-op6",
        text: "INSERT, CREATE, SELECT"
      },
      {
        id: "db-t06-b04-op7",
        text: "SERIAL_NUMBER"
      },
      {
        id: "db-t06-b04-op8",
        text: "column_name != NULL"
      }
    ],
    correctOptionIds: [
      "db-t06-b04-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b05",
    subjectId: SubjectId.DB,
    text: "Кестеге жаңа баған қосу немесе оның типін өзгерту үшін қандай SQL командасы қолданылады?",
    options: [
      {
        id: "db-t06-b05-op1",
        text: "ALTER TABLE"
      },
      {
        id: "db-t06-b05-op2",
        text: "UPDATE TABLE"
      },
      {
        id: "db-t06-b05-op3",
        text: "MODIFY TABLE"
      },
      {
        id: "db-t06-b05-op4",
        text: "CHANGE TABLE"
      },
      {
        id: "db-t06-b05-op5",
        text: "GRANT, REVOKE"
      },
      {
        id: "db-t06-b05-op6",
        text: "Кестедегі барлық жолдарды таңдауды"
      },
      {
        id: "db-t06-b05-op7",
        text: "COMMIT TRANSACTION"
      },
      {
        id: "db-t06-b05-op8",
        text: "Кестеге жаңа бірегей баған қосу"
      }
    ],
    correctOptionIds: [
      "db-t06-b05-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b06",
    subjectId: SubjectId.DB,
    text: "Деректер қорында жаңа кесте құру үшін қандай SQL операторы қолданылады?",
    options: [
      {
        id: "db-t06-b06-op1",
        text: "CREATE TABLE"
      },
      {
        id: "db-t06-b06-op2",
        text: "MAKE TABLE"
      },
      {
        id: "db-t06-b06-op3",
        text: "ADD TABLE"
      },
      {
        id: "db-t06-b06-op4",
        text: "NEW TABLE"
      },
      {
        id: "db-t06-b06-op5",
        text: "NOT EQUAL"
      },
      {
        id: "db-t06-b06-op6",
        text: "REAL"
      },
      {
        id: "db-t06-b06-op7",
        text: "'abc'-дан басталатын мәтіндерді табады"
      },
      {
        id: "db-t06-b06-op8",
        text: "RLIKE"
      }
    ],
    correctOptionIds: [
      "db-t06-b06-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b07",
    subjectId: SubjectId.DB,
    text: "Кестедегі бұрыннан бар жазбаларды өзгерту/жаңарту үшін қандай SQL операторы қолданылады?",
    options: [
      {
        id: "db-t06-b07-op1",
        text: "UPDATE"
      },
      {
        id: "db-t06-b07-op2",
        text: "MODIFY"
      },
      {
        id: "db-t06-b07-op3",
        text: "CHANGE"
      },
      {
        id: "db-t06-b07-op4",
        text: "ALTER"
      },
      {
        id: "db-t06-b07-op5",
        text: "LIMIT"
      },
      {
        id: "db-t06-b07-op6",
        text: "DELETE кестені толық жояды, TRUNCATE тек бағанды өшіреді"
      },
      {
        id: "db-t06-b07-op7",
        text: "TRUNCATE кестені жылдам тазартады, журналға аз жазады және WHERE шарттарын қабылдамайды, ал DELETE жолдарды жеке-жеке жояды және сүзгілеуге болады"
      },
      {
        id: "db-t06-b07-op8",
        text: "CONTAINS"
      }
    ],
    correctOptionIds: [
      "db-t06-b07-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b08",
    subjectId: SubjectId.DB,
    text: "Кестеден барлық деректерді жойып, бірақ оның құрылымын сақтап қалудың ең жылдам жолы қандай?",
    options: [
      {
        id: "db-t06-b08-op1",
        text: "TRUNCATE TABLE"
      },
      {
        id: "db-t06-b08-op2",
        text: "DELETE TABLE"
      },
      {
        id: "db-t06-b08-op3",
        text: "DROP TABLE"
      },
      {
        id: "db-t06-b08-op4",
        text: "REMOVE ALL"
      },
      {
        id: "db-t06-b08-op5",
        text: "AND NOT"
      },
      {
        id: "db-t06-b08-op6",
        text: "CREATE, ALTER, DROP"
      },
      {
        id: "db-t06-b08-op7",
        text: "BIT"
      },
      {
        id: "db-t06-b08-op8",
        text: "ALIAS"
      }
    ],
    correctOptionIds: [
      "db-t06-b08-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "cc4b5b03-b96c-4f3c-8b84-418102933787",
    subjectId: SubjectId.DB,
    text: "Дерекқордан кестенің өзін де, оның ішіндегі барлық деректерді де толығымен жою үшін қандай команда орындалады?",
    options: [
      {
        id: "6cfd5617-c3db-4292-8429-58e6af0935f7",
        text: "DROP TABLE"
      },
      {
        id: "80e742a1-76b1-4918-8361-8840e916b102",
        text: "DELETE TABLE"
      },
      {
        id: "8c9bf930-5630-4b82-9ac2-02f7523bf7b9",
        text: "TRUNCATE TABLE"
      },
      {
        id: "d201e0c3-b136-43b1-a6d8-2511acbfcba2",
        text: "REMOVE TABLE"
      },
      {
        id: "b94591dd-55e4-4bcf-be73-b3bea7316381",
        text: "Тек уақытты (сағат, минут, секунд)"
      },
      {
        id: "7fc0c677-705d-4f20-9df9-91909fd36ebe",
        text: "DESCRIBE немесе DESC"
      },
      {
        id: "1221381e-b748-4434-a6f3-e225beaa4293",
        text: "ALTER TABLE table_name UPDATE column_name TO new_type"
      },
      {
        id: "e5f63954-d3c2-4dd4-b828-165728aadd64",
        text: "CREATE KEY"
      }
    ],
    correctOptionIds: [
      "6cfd5617-c3db-4292-8429-58e6af0935f7"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b09",
    subjectId: SubjectId.DB,
    text: "Кестеге бір немесе бірнеше жол қосу үшін қолданылатын SQL операторы қалай аталады?",
    options: [
      {
        id: "db-t06-b09-op1",
        text: "INSERT INTO"
      },
      {
        id: "db-t06-b09-op2",
        text: "ADD RECORD"
      },
      {
        id: "db-t06-b09-op3",
        text: "PUT INTO"
      },
      {
        id: "db-t06-b09-op4",
        text: "CREATE RECORD"
      },
      {
        id: "db-t06-b09-op5",
        text: "RLIKE"
      },
      {
        id: "db-t06-b09-op6",
        text: "MODIFY немесе ALTER COLUMN"
      },
      {
        id: "db-t06-b09-op7",
        text: "Тек секундтарды сақтайды"
      },
      {
        id: "db-t06-b09-op8",
        text: "SET DEFAULT"
      }
    ],
    correctOptionIds: [
      "db-t06-b09-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b10",
    subjectId: SubjectId.DB,
    text: "Кестедегі бағанды толығымен жою үшін ALTER TABLE командасымен бірге қандай сөйлем қолданылады?",
    options: [
      {
        id: "db-t06-b10-op1",
        text: "DROP COLUMN"
      },
      {
        id: "db-t06-b10-op2",
        text: "REMOVE COLUMN"
      },
      {
        id: "db-t06-b10-op3",
        text: "DELETE COLUMN"
      },
      {
        id: "db-t06-b10-op4",
        text: "ALTER COLUMN"
      },
      {
        id: "db-t06-b10-op5",
        text: "Басқа кестедегі бастапқы кілтпен байланыс орнатып, сілтемелік тұтастықты сақтау үшін"
      },
      {
        id: "db-t06-b10-op6",
        text: "INSERT, UPDATE, DELETE, SELECT"
      },
      {
        id: "db-t06-b10-op7",
        text: "Деректі жояды"
      },
      {
        id: "db-t06-b10-op8",
        text: "SELECT STRUCTURE"
      }
    ],
    correctOptionIds: [
      "db-t06-b10-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b11",
    subjectId: SubjectId.DB,
    text: "SQL-дегі DDL (Data Definition Language) тобына қандай командалар жатады?",
    options: [
      {
        id: "db-t06-b11-op1",
        text: "CREATE, ALTER, DROP, TRUNCATE"
      },
      {
        id: "db-t06-b11-op2",
        text: "SELECT, INSERT, UPDATE, DELETE"
      },
      {
        id: "db-t06-b11-op3",
        text: "GRANT, REVOKE"
      },
      {
        id: "db-t06-b11-op4",
        text: "COMMIT, ROLLBACK"
      },
      {
        id: "db-t06-b11-op5",
        text: "Қате (Error) туындайды"
      },
      {
        id: "db-t06-b11-op6",
        text: "Жыл мен айды ғана"
      },
      {
        id: "db-t06-b11-op7",
        text: "Жүйелік секундтарды"
      },
      {
        id: "db-t06-b11-op8",
        text: "Бірінші әрпі 'a' болатын кез келген мәтінді табады"
      }
    ],
    correctOptionIds: [
      "db-t06-b11-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b12",
    subjectId: SubjectId.DB,
    text: "SQL-дегі DML (Data Manipulation Language) тобына қандай командалар жатады?",
    options: [
      {
        id: "db-t06-b12-op1",
        text: "INSERT, UPDATE, DELETE, SELECT"
      },
      {
        id: "db-t06-b12-op2",
        text: "CREATE, ALTER, DROP"
      },
      {
        id: "db-t06-b12-op3",
        text: "GRANT, REVOKE"
      },
      {
        id: "db-t06-b12-op4",
        text: "COMMIT, ROLLBACK"
      },
      {
        id: "db-t06-b12-op5",
        text: "GROUP BY"
      },
      {
        id: "db-t06-b12-op6",
        text: "Жоюды автоматты түрде орындайды"
      },
      {
        id: "db-t06-b12-op7",
        text: "VARCHAR-да шектеу жоқ"
      },
      {
        id: "db-t06-b12-op8",
        text: "FIRST"
      }
    ],
    correctOptionIds: [
      "db-t06-b12-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b13",
    subjectId: SubjectId.DB,
    text: "SQL-де кестедегі деректерді өшіретін DELETE командасының TRUNCATE-тен айырмашылығы неде?",
    options: [
      {
        id: "db-t06-b13-op1",
        text: "DELETE шарт бойынша ішінара өшіре алады және журналға жазады, ал TRUNCATE бүкіл кестені бірден тазартады және шарт қабылдамайды"
      },
      {
        id: "db-t06-b13-op2",
        text: "DELETE кестені толық жояды, TRUNCATE тек бағанды өшіреді"
      },
      {
        id: "db-t06-b13-op3",
        text: "TRUNCATE жылдамырақ емес, тек қауіпсіз"
      },
      {
        id: "db-t06-b13-op4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "db-t06-b13-op5",
        text: "UPDATE"
      },
      {
        id: "db-t06-b13-op6",
        text: "?"
      },
      {
        id: "db-t06-b13-op7",
        text: "Нөлге тең"
      },
      {
        id: "db-t06-b13-op8",
        text: "CHECK (age >= 18)"
      }
    ],
    correctOptionIds: [
      "db-t06-b13-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b14",
    subjectId: SubjectId.DB,
    text: "Бағанға тек бірегей мәндер ғана енгізілуін қамтамасыз ететін шектеу (constraint) қалай аталады?",
    options: [
      {
        id: "db-t06-b14-op1",
        text: "UNIQUE"
      },
      {
        id: "db-t06-b14-op2",
        text: "PRIMARY KEY"
      },
      {
        id: "db-t06-b14-op3",
        text: "NOT NULL"
      },
      {
        id: "db-t06-b14-op4",
        text: "CHECK"
      },
      {
        id: "db-t06-b14-op5",
        text: "NEW SCHEMA"
      },
      {
        id: "db-t06-b14-op6",
        text: "UNION"
      },
      {
        id: "db-t06-b14-op7",
        text: "ALTER COLUMN"
      },
      {
        id: "db-t06-b14-op8",
        text: "CONTAINS"
      }
    ],
    correctOptionIds: [
      "db-t06-b14-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "b78f76f5-1224-4943-b7b9-b6af5830ca64",
    subjectId: SubjectId.DB,
    text: "SQL-де кесте құрылымынан бағанның типін немесе сипатын өзгерту үшін ALTER TABLE-мен бірге қандай сөз қолданылады?",
    options: [
      {
        id: "4723690b-32bc-4db9-8706-b4403c8f5621",
        text: "MODIFY немесе ALTER COLUMN"
      },
      {
        id: "4144bebb-bb7f-4e26-95c4-53550455a311",
        text: "DROP COLUMN"
      },
      {
        id: "c6d4dd77-81ad-4204-9e1f-2f2fb59153d7",
        text: "UPDATE COLUMN"
      },
      {
        id: "b849fb2c-2c6d-4cfe-b0fe-b230d6ffc1bc",
        text: "RENAME COLUMN"
      },
      {
        id: "41008748-1aba-45a1-92ae-c49a1de1b6bb",
        text: "column_name != NULL"
      },
      {
        id: "e31bd9f2-2d46-4a31-a1f0-ea8e102b5a85",
        text: "AND, OR, NOT"
      },
      {
        id: "4b2fa863-c0e5-411e-9a52-136f39e36a77",
        text: "'abc'-мен аяқталатын мәтіндерді табады"
      },
      {
        id: "79331bae-0d45-4c7d-a3dc-d0c0cbb6943e",
        text: "<!-- -->"
      }
    ],
    correctOptionIds: [
      "4723690b-32bc-4db9-8706-b4403c8f5621"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b15",
    subjectId: SubjectId.DB,
    text: "SQL-дегі DQL (Data Query Language) тобының негізгі өкілі қандай оператор?",
    options: [
      {
        id: "db-t06-b15-op1",
        text: "SELECT"
      },
      {
        id: "db-t06-b15-op2",
        text: "INSERT"
      },
      {
        id: "db-t06-b15-op3",
        text: "CREATE"
      },
      {
        id: "db-t06-b15-op4",
        text: "GRANT"
      },
      {
        id: "db-t06-b15-op5",
        text: "DELETE PRIMARY KEY FROM ..."
      },
      {
        id: "db-t06-b15-op6",
        text: "LIKE NULL"
      },
      {
        id: "db-t06-b15-op7",
        text: "ADD INDEX"
      },
      {
        id: "db-t06-b15-op8",
        text: "CREATE, ALTER, DROP"
      }
    ],
    correctOptionIds: [
      "db-t06-b15-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b16",
    subjectId: SubjectId.DB,
    text: "SQL-де кесте құру кезінде автоинкремент (өздігінен өсетін сан) қалай жазылады?",
    options: [
      {
        id: "db-t06-b16-op1",
        text: "AUTO_INCREMENT немесе IDENTITY"
      },
      {
        id: "db-t06-b16-op2",
        text: "SERIAL_NUMBER"
      },
      {
        id: "db-t06-b16-op3",
        text: "AUTO_NUMBER"
      },
      {
        id: "db-t06-b16-op4",
        text: "INCREMENT_BY_ONE"
      },
      {
        id: "db-t06-b16-op5",
        text: "Пайдаланушыға немесе рөлге белгілі бір құқықтарды береді"
      },
      {
        id: "db-t06-b16-op6",
        text: "NEW TABLE"
      },
      {
        id: "db-t06-b16-op7",
        text: "BIT"
      },
      {
        id: "db-t06-b16-op8",
        text: "UPDATE TABLE ... ADD CONSTRAINT"
      }
    ],
    correctOptionIds: [
      "db-t06-b16-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b17",
    subjectId: SubjectId.DB,
    text: "SQL-де NULL мәнін қандай оператор арқылы салыстырады?",
    options: [
      {
        id: "db-t06-b17-op1",
        text: "IS NULL немесе IS NOT NULL"
      },
      {
        id: "db-t06-b17-op2",
        text: "= NULL"
      },
      {
        id: "db-t06-b17-op3",
        text: "!= NULL"
      },
      {
        id: "db-t06-b17-op4",
        text: "LIKE NULL"
      },
      {
        id: "db-t06-b17-op5",
        text: "TOP"
      },
      {
        id: "db-t06-b17-op6",
        text: "REMOVE COLUMN"
      },
      {
        id: "db-t06-b17-op7",
        text: "Деректерді іздеу мен сұраныстардың орындалу жылдамдығын арттыру үшін"
      },
      {
        id: "db-t06-b17-op8",
        text: "MODIFY TABLE"
      }
    ],
    correctOptionIds: [
      "db-t06-b17-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b18",
    subjectId: SubjectId.DB,
    text: "Кесте құру кезінде баған мәні бос болмауын талап ететін шектеу қандай?",
    options: [
      {
        id: "db-t06-b18-op1",
        text: "NOT NULL"
      },
      {
        id: "db-t06-b18-op2",
        text: "UNIQUE"
      },
      {
        id: "db-t06-b18-op3",
        text: "CHECK"
      },
      {
        id: "db-t06-b18-op4",
        text: "DEFAULT NULL"
      },
      {
        id: "db-t06-b18-op5",
        text: "NEW SCHEMA"
      },
      {
        id: "db-t06-b18-op6",
        text: "Деректердің қауіпсіздігін қамтамасыз ету үшін"
      },
      {
        id: "db-t06-b18-op7",
        text: "DEFAULT"
      },
      {
        id: "db-t06-b18-op8",
        text: "Бағанды автоматты түрде бастапқы кілт қылады"
      }
    ],
    correctOptionIds: [
      "db-t06-b18-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b19",
    subjectId: SubjectId.DB,
    text: "SQL-дегі DDL (Data Definition Language) тобына жататын операторлар жиынтығын анықтаңыз:",
    options: [
      {
        id: "db-t06-b19-op1",
        text: "CREATE, ALTER, DROP, TRUNCATE"
      },
      {
        id: "db-t06-b19-op2",
        text: "SELECT, INSERT, UPDATE, DELETE"
      },
      {
        id: "db-t06-b19-op3",
        text: "GRANT, REVOKE"
      },
      {
        id: "db-t06-b19-op4",
        text: "COMMIT, ROLLBACK"
      },
      {
        id: "db-t06-b19-op5",
        text: "REMOVE TABLE"
      },
      {
        id: "db-t06-b19-op6",
        text: "Пайдаланушыдан немесе рөлден бұрын берілген құқықтарды кері қайтарады"
      },
      {
        id: "db-t06-b19-op7",
        text: "RANGE"
      },
      {
        id: "db-t06-b19-op8",
        text: "INSERT, UPDATE, DELETE"
      }
    ],
    correctOptionIds: [
      "db-t06-b19-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b20",
    subjectId: SubjectId.DB,
    text: "SQL-дегі DML (Data Manipulation Language) тобына жататын операторлар жиынтығын анықтаңыз:",
    options: [
      {
        id: "db-t06-b20-op1",
        text: "INSERT, UPDATE, DELETE"
      },
      {
        id: "db-t06-b20-op2",
        text: "CREATE, ALTER, DROP"
      },
      {
        id: "db-t06-b20-op3",
        text: "GRANT, REVOKE"
      },
      {
        id: "db-t06-b20-op4",
        text: "COMMIT, ROLLBACK, SAVEPOINT"
      },
      {
        id: "db-t06-b20-op5",
        text: "RENAME TABLE table_name TO new_table_name"
      },
      {
        id: "db-t06-b20-op6",
        text: "RENAME COLUMN old_name TO new_name IN table_name"
      },
      {
        id: "db-t06-b20-op7",
        text: "AND NOT"
      },
      {
        id: "db-t06-b20-op8",
        text: "PUT INTO"
      }
    ],
    correctOptionIds: [
      "db-t06-b20-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b21",
    subjectId: SubjectId.DB,
    text: "TRUNCATE TABLE мен DELETE FROM операторларының басты айырмашылығы қандай?",
    options: [
      {
        id: "db-t06-b21-op1",
        text: "TRUNCATE кестені жылдам тазартады, журналға аз жазады және WHERE шарттарын қабылдамайды, ал DELETE жолдарды жеке-жеке жояды және сүзгілеуге болады"
      },
      {
        id: "db-t06-b21-op2",
        text: "DELETE кестенің құрылымын жояды"
      },
      {
        id: "db-t06-b21-op3",
        text: "TRUNCATE тек сандық кестелер үшін жұмыс істейді"
      },
      {
        id: "db-t06-b21-op4",
        text: "Ешқандай айырмашылығы жоқ"
      },
      {
        id: "db-t06-b21-op5",
        text: "ALTER TABLE table_name ALTER COLUMN column_name TYPE new_type"
      },
      {
        id: "db-t06-b21-op6",
        text: "Қателерді елемеу үшін"
      },
      {
        id: "db-t06-b21-op7",
        text: "Белгілі жазбаларды жояды"
      },
      {
        id: "db-t06-b21-op8",
        text: "#"
      }
    ],
    correctOptionIds: [
      "db-t06-b21-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b22",
    subjectId: SubjectId.DB,
    text: "SQL-де кестедегі бар деректерді жаңарту (өзгерту) үшін қандай оператор қолданылады?",
    options: [
      {
        id: "db-t06-b22-op1",
        text: "UPDATE"
      },
      {
        id: "db-t06-b22-op2",
        text: "ALTER"
      },
      {
        id: "db-t06-b22-op3",
        text: "INSERT"
      },
      {
        id: "db-t06-b22-op4",
        text: "CHANGE"
      },
      {
        id: "db-t06-b22-op5",
        text: "!=="
      },
      {
        id: "db-t06-b22-op6",
        text: "Нәтижені топтастыру"
      },
      {
        id: "db-t06-b22-op7",
        text: "UNKNOWN немесе FALSE"
      },
      {
        id: "db-t06-b22-op8",
        text: "IF EXISTS"
      }
    ],
    correctOptionIds: [
      "db-t06-b22-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b23",
    subjectId: SubjectId.DB,
    text: "SQL-де кестені құрылымымен бірге дерекқордан толық жою үшін қандай команда қолданылады?",
    options: [
      {
        id: "db-t06-b23-op1",
        text: "DROP TABLE"
      },
      {
        id: "db-t06-b23-op2",
        text: "DELETE TABLE"
      },
      {
        id: "db-t06-b23-op3",
        text: "TRUNCATE TABLE"
      },
      {
        id: "db-t06-b23-op4",
        text: "REMOVE TABLE"
      },
      {
        id: "db-t06-b23-op5",
        text: "'a' әрпімен аяқталатын мәтінді табады"
      },
      {
        id: "db-t06-b23-op6",
        text: "RLIKE"
      },
      {
        id: "db-t06-b23-op7",
        text: "Жалпы саны 10 цифрдан аспайтын, оның ішінде үтірден кейін 2 цифры бар ондық санды"
      },
      {
        id: "db-t06-b23-op8",
        text: "LIKE"
      }
    ],
    correctOptionIds: [
      "db-t06-b23-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b24",
    subjectId: SubjectId.DB,
    text: "SQL-дегі DCL (Data Control Language) тобының негізгі мақсаты не?",
    options: [
      {
        id: "db-t06-b24-op1",
        text: "Пайдаланушыларға құқықтар беру және оларды кері қайтарып алу (GRANT, REVOKE)"
      },
      {
        id: "db-t06-b24-op2",
        text: "Транзакцияларды басқару"
      },
      {
        id: "db-t06-b24-op3",
        text: "Кестелер құру және өзгерту"
      },
      {
        id: "db-t06-b24-op4",
        text: "Деректерді сұрыптау"
      },
      {
        id: "db-t06-b24-op5",
        text: "FIRST"
      },
      {
        id: "db-t06-b24-op6",
        text: "Деректерді іздеу мен сұраныстардың орындалу жылдамдығын арттыру үшін"
      },
      {
        id: "db-t06-b24-op7",
        text: "Кестені жояды"
      },
      {
        id: "db-t06-b24-op8",
        text: "CHAR тек қазақ әріптерін қолдайды"
      }
    ],
    correctOptionIds: [
      "db-t06-b24-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b25",
    subjectId: SubjectId.DB,
    text: "TCL (Transaction Control Language) тобына қандай операторлар кіреді?",
    options: [
      {
        id: "db-t06-b25-op1",
        text: "COMMIT, ROLLBACK, SAVEPOINT"
      },
      {
        id: "db-t06-b25-op2",
        text: "GRANT, REVOKE"
      },
      {
        id: "db-t06-b25-op3",
        text: "INSERT, UPDATE, DELETE"
      },
      {
        id: "db-t06-b25-op4",
        text: "CREATE, DROP"
      },
      {
        id: "db-t06-b25-op5",
        text: "DECIMAL немесе NUMERIC"
      },
      {
        id: "db-t06-b25-op6",
        text: "Автоматты түрде өзгермейді"
      },
      {
        id: "db-t06-b25-op7",
        text: "DESCRIBE немесе DESC"
      },
      {
        id: "db-t06-b25-op8",
        text: "Бөлшек сандарды сақтау үшін"
      }
    ],
    correctOptionIds: [
      "db-t06-b25-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b26",
    subjectId: SubjectId.DB,
    text: "SQL-де VARCHAR деректер типінің CHAR типінен басты ерекшелігі қандай?",
    options: [
      {
        id: "db-t06-b26-op1",
        text: "VARCHAR айнымалы ұзындықтағы жолдарды сақтайды және жадыны үнемдейді, ал CHAR бекітілген ұзындықты қолданады"
      },
      {
        id: "db-t06-b26-op2",
        text: "VARCHAR тек сандарды сақтайды"
      },
      {
        id: "db-t06-b26-op3",
        text: "CHAR тек қазақ әріптерін қолдайды"
      },
      {
        id: "db-t06-b26-op4",
        text: "VARCHAR-да шектеу жоқ"
      },
      {
        id: "db-t06-b26-op5",
        text: "//"
      },
      {
        id: "db-t06-b26-op6",
        text: "ANY"
      },
      {
        id: "db-t06-b26-op7",
        text: "NOT EQUAL"
      },
      {
        id: "db-t06-b26-op8",
        text: "Бағанға автоматты түрде реттік сан беру үшін"
      }
    ],
    correctOptionIds: [
      "db-t06-b26-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b27",
    subjectId: SubjectId.DB,
    text: "SQL тілінде сұраныс нәтижесін сұрыптау үшін қандай сөйлем қолданылады?",
    options: [
      {
        id: "db-t06-b27-op1",
        text: "ORDER BY"
      },
      {
        id: "db-t06-b27-op2",
        text: "GROUP BY"
      },
      {
        id: "db-t06-b27-op3",
        text: "SORT BY"
      },
      {
        id: "db-t06-b27-op4",
        text: "ARRANGE BY"
      },
      {
        id: "db-t06-b27-op5",
        text: "FALSE"
      },
      {
        id: "db-t06-b27-op6",
        text: "HAVING"
      },
      {
        id: "db-t06-b27-op7",
        text: "CREATE INDEX"
      },
      {
        id: "db-t06-b27-op8",
        text: "Бағанның міндетті түрде бос болуын қамтамасыз ету үшін"
      }
    ],
    correctOptionIds: [
      "db-t06-b27-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b28",
    subjectId: SubjectId.DB,
    text: "ORDER BY сөйлемінде деректерді өсу ретімен сұрыптау үшін қандай кілттік сөз қолданылады?",
    options: [
      {
        id: "db-t06-b28-op1",
        text: "ASC"
      },
      {
        id: "db-t06-b28-op2",
        text: "DESC"
      },
      {
        id: "db-t06-b28-op3",
        text: "UP"
      },
      {
        id: "db-t06-b28-op4",
        text: "GROW"
      },
      {
        id: "db-t06-b28-op5",
        text: ""
      },
      {
        id: "db-t06-b28-op6",
        text: "DELETE COLUMN"
      },
      {
        id: "db-t06-b28-op7",
        text: "Тек сандық мәндерді сақтау үшін"
      },
      {
        id: "db-t06-b28-op8",
        text: "SINGLE"
      }
    ],
    correctOptionIds: [
      "db-t06-b28-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b29",
    subjectId: SubjectId.DB,
    text: "ORDER BY сөйлемінде деректерді кему ретімен сұрыптау үшін қандай кілттік сөз қолданылады?",
    options: [
      {
        id: "db-t06-b29-op1",
        text: "DESC"
      },
      {
        id: "db-t06-b29-op2",
        text: "ASC"
      },
      {
        id: "db-t06-b29-op3",
        text: "DOWN"
      },
      {
        id: "db-t06-b29-op4",
        text: "DECREASE"
      },
      {
        id: "db-t06-b29-op5",
        text: "Иә, екі шекараны да қамтиды"
      },
      {
        id: "db-t06-b29-op6",
        text: "Бастапқы кілттің мәнін анықтау үшін"
      },
      {
        id: "db-t06-b29-op7",
        text: "Тек бос кестелерді жою үшін"
      },
      {
        id: "db-t06-b29-op8",
        text: "ROLLBACK"
      }
    ],
    correctOptionIds: [
      "db-t06-b29-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "a9f9c8f9-e2c1-4c50-9e51-1ad7bcc49338",
    subjectId: SubjectId.DB,
    text: "Тек бірегей (қайталанбайтын) мәндерді таңдау үшін SELECT-пен бірге қандай кілттік сөз қолданылады?",
    options: [
      {
        id: "28ee9f44-22a1-4701-9db1-8f2dffd8d166",
        text: "DISTINCT"
      },
      {
        id: "7c307503-a303-4279-8fa1-48d323288c04",
        text: "UNIQUE"
      },
      {
        id: "d2657f71-3b10-484a-b355-39aee53491aa",
        text: "DIFFERENT"
      },
      {
        id: "20e5f167-f9d8-4ed9-b6af-0e342edfeb87",
        text: "SINGLE"
      },
      {
        id: "1510eec3-19a7-4f0d-8362-e50f12efa1d8",
        text: "CREATE, DROP"
      },
      {
        id: "7f6bdad5-446b-42ec-9d42-a7314bfc61a5",
        text: "Бағанға автоматты түрде реттік сан беру үшін"
      },
      {
        id: "61e58af4-3062-40f1-9222-e9a08c05572a",
        text: "Тек WHERE шартында сүзгілеу үшін"
      },
      {
        id: "f87e428b-dad9-4523-bdda-cf3e4c8e03ed",
        text: "CLIKE"
      }
    ],
    correctOptionIds: [
      "28ee9f44-22a1-4701-9db1-8f2dffd8d166"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b30",
    subjectId: SubjectId.DB,
    text: "SELECT DISTINCT командасының негізгі қызметі қандай?",
    options: [
      {
        id: "db-t06-b30-op1",
        text: "Нәтижелік жиыннан қайталанатын жолдарды алып тастау"
      },
      {
        id: "db-t06-b30-op2",
        text: "Деректерді өсу ретімен сұрыптау"
      },
      {
        id: "db-t06-b30-op3",
        text: "Кестеге жаңа бірегей баған қосу"
      },
      {
        id: "db-t06-b30-op4",
        text: "Нәтижені топтастыру"
      },
      {
        id: "db-t06-b30-op5",
        text: "--"
      },
      {
        id: "db-t06-b30-op6",
        text: "WHERE"
      },
      {
        id: "db-t06-b30-op7",
        text: "ALTER INDEX DROP"
      },
      {
        id: "db-t06-b30-op8",
        text: "AUTO_NUMBER"
      }
    ],
    correctOptionIds: [
      "db-t06-b30-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3ebe6f29-79c2-4dac-8d70-9301819b41d1",
    subjectId: SubjectId.DB,
    text: "SQL-де қайтарылатын жолдардың санын шектеу үшін (мысалы, PostgreSQL немесе MySQL-де) қандай оператор қолданылады?",
    options: [
      {
        id: "363a62d0-a286-425c-91e0-dffc3a8a0c4b",
        text: "LIMIT"
      },
      {
        id: "7e96a921-c800-4be3-ae28-ebaf7bb106bb",
        text: "TOP"
      },
      {
        id: "d933e514-916f-4636-b54f-3b3ebd68d7bb",
        text: "ROWNUM"
      },
      {
        id: "656f2bc3-29ea-4a39-80d4-c92735a06f15",
        text: "FIRST"
      },
      {
        id: "010eeb42-8000-420f-8980-767d6c1402e7",
        text: "ALIAS"
      },
      {
        id: "8825c917-db25-4680-846e-4f2cadbdbe7d",
        text: "AND, OR, NOT"
      },
      {
        id: "e1557fcf-1e90-40ea-9fd2-e1a8eeb45a9e",
        text: "GROW"
      },
      {
        id: "a6fe41b1-bcc5-446e-b6de-7b616457031d",
        text: "Бар жазбаны жаңартады"
      }
    ],
    correctOptionIds: [
      "363a62d0-a286-425c-91e0-dffc3a8a0c4b"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "59581e72-7518-4030-868d-1faa42e42483",
    subjectId: SubjectId.DB,
    text: "SQL Server (T-SQL) жүйесінде жолдар санын шектеу үшін SELECT-тен кейін қандай кілттік сөз жазылады?",
    options: [
      {
        id: "b7e86c38-bd55-48bc-9765-6b4424c84c3f",
        text: "TOP"
      },
      {
        id: "befa3d70-a1ca-4b3e-b5a3-deff24385c87",
        text: "LIMIT"
      },
      {
        id: "a87e7db7-65ca-4a17-b189-8293f3e27b41",
        text: "FIRST"
      },
      {
        id: "e4dc5dfa-8b1b-4700-822d-c5f86ea6fb5d",
        text: "MAX"
      },
      {
        id: "182f3bea-a409-4ac6-a61e-b8b7fddac688",
        text: "LIKE"
      },
      {
        id: "922a4f5d-d0ef-43fd-af08-2c3422ed6c8b",
        text: "CREATE SCHEMA"
      },
      {
        id: "eb776530-2861-4a07-94d7-c3f73f37861d",
        text: "NON_NEGATIVE"
      },
      {
        id: "9a934244-f7a6-4e79-b605-fd9fdafbf821",
        text: "Тек мәтін түріндегі датаны сақтайды"
      }
    ],
    correctOptionIds: [
      "b7e86c38-bd55-48bc-9765-6b4424c84c3f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f8d54c4a-2688-4639-9406-02f8609491a7",
    subjectId: SubjectId.DB,
    text: "Oracle дерекқорында қайтарылатын жолдар санын шектеу үшін дәстүрлі түрде қандай псевдо-баған қолданылады?",
    options: [
      {
        id: "87b5f271-e324-486d-b6be-b64d7d963b2f",
        text: "ROWNUM"
      },
      {
        id: "bf6047ac-c641-4273-9384-43d6985ae4e4",
        text: "LIMIT"
      },
      {
        id: "ef8eaddc-5bf2-44bd-99e1-1e43be5e7615",
        text: "ROW_NUMBER"
      },
      {
        id: "76fea224-11ac-4773-9e5c-83b2855014e0",
        text: "TOP"
      },
      {
        id: "74adf7e4-61e0-4ace-980b-bb5331782b65",
        text: "?"
      },
      {
        id: "34b048bb-fb48-4bd0-b7ea-4c1e4d98f8f1",
        text: "'abc'-дан басталатын мәтіндерді табады"
      },
      {
        id: "a5fef299-1576-4d38-b8cd-2e7515957f74",
        text: "Транзакцияларды басқару"
      },
      {
        id: "04844e82-ed42-4c83-ba98-cf5193efbca7",
        text: "Бастапқы кілттің мәнін анықтау үшін"
      }
    ],
    correctOptionIds: [
      "87b5f271-e324-486d-b6be-b64d7d963b2f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "638e3dc4-c64d-4c28-9409-7aa5924163a9",
    subjectId: SubjectId.DB,
    text: "SQL-де белгілі бір диапазон аралығындағы мәндерді тексеру үшін WHERE блогында қандай оператор қолданылады?",
    options: [
      {
        id: "11146409-bfdb-4a9e-9028-98ed6211d0f9",
        text: "BETWEEN"
      },
      {
        id: "3c0f6848-3516-4d26-84cd-56b29193c3e0",
        text: "IN"
      },
      {
        id: "e20ced9d-35b5-4be5-800e-06dd21724697",
        text: "LIKE"
      },
      {
        id: "8a749bf5-c5c4-4821-8eff-609eb1784551",
        text: "RANGE"
      },
      {
        id: "c6e23b41-1b6b-405d-a668-852d0c2b2c55",
        text: "DOUBLE"
      },
      {
        id: "c733a7eb-a5c8-4a7b-a56e-49771a847359",
        text: "TRUNCATE TABLE"
      },
      {
        id: "0545dd62-2e0b-47f4-80d8-a0b8593857b4",
        text: "Тек WHERE шартында сүзгілеу үшін"
      },
      {
        id: "cc7625ee-c561-475c-8a33-49bde7efa666",
        text: "FIRST"
      }
    ],
    correctOptionIds: [
      "11146409-bfdb-4a9e-9028-98ed6211d0f9"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b31",
    subjectId: SubjectId.DB,
    text: "BETWEEN операторы берілген шекаралық мәндерді (мысалы, BETWEEN 10 AND 20) қамтиды ма?",
    options: [
      {
        id: "db-t06-b31-op1",
        text: "Иә, екі шекараны да қамтиды"
      },
      {
        id: "db-t06-b31-op2",
        text: "Жоқ, тек ортасындағы мәндерді ғана қамтиды"
      },
      {
        id: "db-t06-b31-op3",
        text: "Тек сол жақ (кіші) шекараны қамтиды"
      },
      {
        id: "db-t06-b31-op4",
        text: "Тек оң жақ (үлкен) шекараны қамтиды"
      },
      {
        id: "db-t06-b31-op5",
        text: "DELETE COLUMN"
      },
      {
        id: "db-t06-b31-op6",
        text: "AUTO_NUMBER"
      },
      {
        id: "db-t06-b31-op7",
        text: "NEW TABLE"
      },
      {
        id: "db-t06-b31-op8",
        text: "TRUE"
      }
    ],
    correctOptionIds: [
      "db-t06-b31-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b32",
    subjectId: SubjectId.DB,
    text: "Баған мәнінің белгілі бір тізімде бар-жоғын тексеру үшін қандай оператор қолданылады?",
    options: [
      {
        id: "db-t06-b32-op1",
        text: "IN"
      },
      {
        id: "db-t06-b32-op2",
        text: "BETWEEN"
      },
      {
        id: "db-t06-b32-op3",
        text: "LIKE"
      },
      {
        id: "db-t06-b32-op4",
        text: "EXISTS"
      },
      {
        id: "db-t06-b32-op5",
        text: "SET DEFAULT"
      },
      {
        id: "db-t06-b32-op6",
        text: "AUTO_NUMBER"
      },
      {
        id: "db-t06-b32-op7",
        text: "CREATE RECORD"
      },
      {
        id: "db-t06-b32-op8",
        text: "SELECT, INSERT, UPDATE, DELETE"
      }
    ],
    correctOptionIds: [
      "db-t06-b32-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b33",
    subjectId: SubjectId.DB,
    text: "Мәтіндік үлгілер бойынша іздеу жасау үшін (шаблон арқылы) қандай оператор қолданылады?",
    options: [
      {
        id: "db-t06-b33-op1",
        text: "LIKE"
      },
      {
        id: "db-t06-b33-op2",
        text: "IN"
      },
      {
        id: "db-t06-b33-op3",
        text: "MATCH"
      },
      {
        id: "db-t06-b33-op4",
        text: "CONTAINS"
      },
      {
        id: "db-t06-b33-op5",
        text: "ALTER TABLE ... ADD CONSTRAINT"
      },
      {
        id: "db-t06-b33-op6",
        text: "ALTER COLUMN"
      },
      {
        id: "db-t06-b33-op7",
        text: "?"
      },
      {
        id: "db-t06-b33-op8",
        text: "Жыл мен айды ғана"
      }
    ],
    correctOptionIds: [
      "db-t06-b33-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "661aa444-0643-4a45-a796-c7f008ebbeed",
    subjectId: SubjectId.DB,
    text: "LIKE операторында кез келген ұзындықтағы (тіпті 0 таңбалы) кез келген таңбалар тізбегін білдіретін символ қандай?",
    options: [
      {
        id: "97c1a999-5090-453e-82af-cdc22041d591",
        text: "%"
      },
      {
        id: "60619d78-fd90-4669-b870-08b4c94dbccf",
        text: "_"
      },
      {
        id: "915fb204-12c2-426d-8564-199758ebc37a",
        text: "*"
      },
      {
        id: "a64920c9-9e57-4ae3-91e7-c313c903acb1",
        text: "?"
      },
      {
        id: "1808f264-e6e6-40be-93ff-af2577a74441",
        text: "ALIAS"
      },
      {
        id: "cdd208e0-d073-4e8b-9400-e9ca950440f5",
        text: "Жойылатын деректерді архивтейді"
      },
      {
        id: "d0e4e171-04bc-44d2-9128-8498269e0ba7",
        text: "RANGE"
      },
      {
        id: "a67d9bab-c7bc-414e-b031-129f5278052b",
        text: "TRUNCATE кестені жылдам тазартады, журналға аз жазады және WHERE шарттарын қабылдамайды, ал DELETE жолдарды жеке-жеке жояды және сүзгілеуге болады"
      }
    ],
    correctOptionIds: [
      "97c1a999-5090-453e-82af-cdc22041d591"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b34",
    subjectId: SubjectId.DB,
    text: "LIKE операторында тек қана бір кез келген таңбаны білдіретін символ қандай?",
    options: [
      {
        id: "db-t06-b34-op1",
        text: "_"
      },
      {
        id: "db-t06-b34-op2",
        text: "%"
      },
      {
        id: "db-t06-b34-op3",
        text: "?"
      },
      {
        id: "db-t06-b34-op4",
        text: "$"
      },
      {
        id: "db-t06-b34-op5",
        text: "ALTER INDEX DROP"
      },
      {
        id: "db-t06-b34-op6",
        text: "GRANT"
      },
      {
        id: "db-t06-b34-op7",
        text: "ANY"
      },
      {
        id: "db-t06-b34-op8",
        text: "Автоматты түрде өзгермейді"
      }
    ],
    correctOptionIds: [
      "db-t06-b34-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3fb65acc-0b2a-4ae7-a11b-bd379b064fa5",
    subjectId: SubjectId.DB,
    text: "Салыстыру кезінде регистрді ескермейтін мәтіндік іздеу үшін PostgreSQL-де қандай оператор қолданылады?",
    options: [
      {
        id: "6579caa6-4a7c-42b5-91d5-af2425a71369",
        text: "ILIKE"
      },
      {
        id: "12148176-cce3-4057-99e0-c01b5ad01c7c",
        text: "LIKE"
      },
      {
        id: "4b44a10c-9bc3-4628-acba-a267e8a921cc",
        text: "RLIKE"
      },
      {
        id: "fb85981f-aeec-43dd-b29f-0f1dd07ac998",
        text: "CLIKE"
      },
      {
        id: "f18ebec4-6455-402e-b8f6-9d85792750db",
        text: "NOT"
      },
      {
        id: "d0abeb63-ecee-4deb-b822-4100bb630f05",
        text: "$"
      },
      {
        id: "8b5a6e18-56d6-4178-a395-ebd17353c491",
        text: "Жою әрекетін тоқтату үшін"
      },
      {
        id: "9eea6213-d782-49e3-989b-0ade0e56bd79",
        text: "column_name IS NOT EMPTY"
      }
    ],
    correctOptionIds: [
      "6579caa6-4a7c-42b5-91d5-af2425a71369"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b35",
    subjectId: SubjectId.DB,
    text: "Шектеулерді (constraints) кесте құрылғаннан кейін қосу үшін қандай команда қолданылады?",
    options: [
      {
        id: "db-t06-b35-op1",
        text: "ALTER TABLE ... ADD CONSTRAINT"
      },
      {
        id: "db-t06-b35-op2",
        text: "UPDATE TABLE ... ADD CONSTRAINT"
      },
      {
        id: "db-t06-b35-op3",
        text: "CREATE CONSTRAINT"
      },
      {
        id: "db-t06-b35-op4",
        text: "ALTER TABLE ... ADD LIMIT"
      },
      {
        id: "db-t06-b35-op5",
        text: "Құрамында 'abc' тіркесі бар кез келген мәтінді табады"
      },
      {
        id: "db-t06-b35-op6",
        text: "Нөл (0)"
      },
      {
        id: "db-t06-b35-op7",
        text: "ALTER TABLE table_name CHANGE column_name new_type"
      },
      {
        id: "db-t06-b35-op8",
        text: "!"
      }
    ],
    correctOptionIds: [
      "db-t06-b35-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b36",
    subjectId: SubjectId.DB,
    text: "SQL-де FOREIGN KEY шектеуі не үшін қажет?",
    options: [
      {
        id: "db-t06-b36-op1",
        text: "Басқа кестедегі бастапқы кілтпен байланыс орнатып, сілтемелік тұтастықты сақтау үшін"
      },
      {
        id: "db-t06-b36-op2",
        text: "Кестедегі мәндердің бірегейлігін қамтамасыз ету үшін"
      },
      {
        id: "db-t06-b36-op3",
        text: "Жазбаларды жылдам іздеу үшін"
      },
      {
        id: "db-t06-b36-op4",
        text: "Бағанға автоматты түрде реттік сан беру үшін"
      },
      {
        id: "db-t06-b36-op5",
        text: "SET DEFAULT"
      },
      {
        id: "db-t06-b36-op6",
        text: "INSERT, UPDATE, DELETE, SELECT"
      },
      {
        id: "db-t06-b36-op7",
        text: "ALTER TABLE table_name ADD column_name datatype"
      },
      {
        id: "db-t06-b36-op8",
        text: "DOUBLE"
      }
    ],
    correctOptionIds: [
      "db-t06-b36-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7e05c168-f841-400d-b7c4-a1f270825891",
    subjectId: SubjectId.DB,
    text: "Бағанға әдепкі бойынша (егер мән көрсетілмесе) белгілі бір мән беру үшін қандай шектеу қолданылады?",
    options: [
      {
        id: "826cd84f-9d8c-4d22-b2d6-098189a4899f",
        text: "DEFAULT"
      },
      {
        id: "c44702b7-2803-428c-887d-e33ef978121b",
        text: "CHECK"
      },
      {
        id: "3854a810-4ae5-40c9-a881-7b54ee3963ad",
        text: "NOT NULL"
      },
      {
        id: "aa8d5552-4c41-4598-90a2-7859d23824c4",
        text: "SET DEFAULT"
      },
      {
        id: "5564453a-b6ab-42d6-8c73-82f972a1f60f",
        text: "DELETE кестенің құрылымын жояды"
      },
      {
        id: "466b1bbc-d5a7-481d-8dc6-65b847443256",
        text: "*"
      },
      {
        id: "c20fa848-5e6e-42a6-9c9a-24709a9d4551",
        text: "Нәтижені топтастыру"
      },
      {
        id: "870e61e4-e098-4a19-98b0-f4c6c9a6b701",
        text: "ROLLBACK TO"
      }
    ],
    correctOptionIds: [
      "826cd84f-9d8c-4d22-b2d6-098189a4899f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "c0a03c27-baf8-4a63-ab0e-3c5f772253c2",
    subjectId: SubjectId.DB,
    text: "Баған мәндерінің белгілі бір шартқа сәйкестігін тексеру үшін кесте деңгейінде қандай шектеу қолданылады?",
    options: [
      {
        id: "1400d4c9-d7cc-4a01-99fe-4aab650f7707",
        text: "CHECK"
      },
      {
        id: "52356404-762f-4456-b4b4-7e3201d24dcf",
        text: "UNIQUE"
      },
      {
        id: "7147a6ce-6515-4b92-bfd9-c284802b6992",
        text: "DEFAULT"
      },
      {
        id: "2913a02d-1c5f-4f81-96c4-ff48dc0698ed",
        text: "ASSERT"
      },
      {
        id: "56b2a99d-4ae8-41e3-a0ab-56594fed71d3",
        text: "POSITIVE"
      },
      {
        id: "4265966d-5579-46c6-b11f-9a44fdd8ad03",
        text: "ARRANGE BY"
      },
      {
        id: "43aa5e74-1912-4632-8257-7e27e8c38f80",
        text: "NEW TABLE"
      },
      {
        id: "b0e6c49e-4b9e-4054-ae61-2073203a8a7d",
        text: "UP"
      }
    ],
    correctOptionIds: [
      "1400d4c9-d7cc-4a01-99fe-4aab650f7707"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b37",
    subjectId: SubjectId.DB,
    text: "CHECK шектеуіне мысал ретінде қайсысы дұрыс жазылған?",
    options: [
      {
        id: "db-t06-b37-op1",
        text: "CHECK (age >= 18)"
      },
      {
        id: "db-t06-b37-op2",
        text: "CHECK age IS 18"
      },
      {
        id: "db-t06-b37-op3",
        text: "CHECK age VALUES (18)"
      },
      {
        id: "db-t06-b37-op4",
        text: "CHECK LIMIT age 18"
      },
      {
        id: "db-t06-b37-op5",
        text: "DESC"
      },
      {
        id: "db-t06-b37-op6",
        text: "OR REPLACE"
      },
      {
        id: "db-t06-b37-op7",
        text: "Тек 'abc' мәтінін ғана табады"
      },
      {
        id: "db-t06-b37-op8",
        text: "Автоматты түрде өзгермейді"
      }
    ],
    correctOptionIds: [
      "db-t06-b37-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b38",
    subjectId: SubjectId.DB,
    text: "Кестедегі бастапқы кілтті (Primary Key) жою үшін қандай команда қолданылады?",
    options: [
      {
        id: "db-t06-b38-op1",
        text: "ALTER TABLE ... DROP CONSTRAINT"
      },
      {
        id: "db-t06-b38-op2",
        text: "DELETE PRIMARY KEY FROM ..."
      },
      {
        id: "db-t06-b38-op3",
        text: "DROP PRIMARY KEY FROM ..."
      },
      {
        id: "db-t06-b38-op4",
        text: "ALTER TABLE ... REMOVE PRIMARY KEY"
      },
      {
        id: "db-t06-b38-op5",
        text: "NEW TABLE"
      },
      {
        id: "db-t06-b38-op6",
        text: "ALTER TABLE table_name INSERT column_name datatype"
      },
      {
        id: "db-t06-b38-op7",
        text: "%"
      },
      {
        id: "db-t06-b38-op8",
        text: "PRIMARY KEY"
      }
    ],
    correctOptionIds: [
      "db-t06-b38-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b39",
    subjectId: SubjectId.DB,
    text: "SQL-де CASCADE сөзі DROP TABLE немесе DROP CONSTRAINT операторында не үшін қолданылады?",
    options: [
      {
        id: "db-t06-b39-op1",
        text: "Осы объектіге тәуелді барлық басқа объектілерді де бірге жою үшін"
      },
      {
        id: "db-t06-b39-op2",
        text: "Жою әрекетін тоқтату үшін"
      },
      {
        id: "db-t06-b39-op3",
        text: "Қателерді елемеу үшін"
      },
      {
        id: "db-t06-b39-op4",
        text: "Тек бос кестелерді жою үшін"
      },
      {
        id: "db-t06-b39-op5",
        text: "<="
      },
      {
        id: "db-t06-b39-op6",
        text: "TRUNCATE тек сандық кестелер үшін жұмыс істейді"
      },
      {
        id: "db-t06-b39-op7",
        text: "MODIFY TABLE"
      },
      {
        id: "db-t06-b39-op8",
        text: "ALTER TABLE table_name ALTER COLUMN column_name TYPE new_type"
      }
    ],
    correctOptionIds: [
      "db-t06-b39-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b40",
    subjectId: SubjectId.DB,
    text: "RESTRICT сөзі DROP операторында не істейді?",
    options: [
      {
        id: "db-t06-b40-op1",
        text: "Егер тәуелді объектілер болса, жоюға тыйым салады"
      },
      {
        id: "db-t06-b40-op2",
        text: "Жоюды автоматты түрде орындайды"
      },
      {
        id: "db-t06-b40-op3",
        text: "Жойылатын деректерді архивтейді"
      },
      {
        id: "db-t06-b40-op4",
        text: "Транзакцияны кері қайтарады"
      },
      {
        id: "db-t06-b40-op5",
        text: "INSERT, UPDATE, DELETE, SELECT"
      },
      {
        id: "db-t06-b40-op6",
        text: "=>"
      },
      {
        id: "db-t06-b40-op7",
        text: "ARRANGE BY"
      },
      {
        id: "db-t06-b40-op8",
        text: "EITHER"
      }
    ],
    correctOptionIds: [
      "db-t06-b40-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b41",
    subjectId: SubjectId.DB,
    text: "Жаңа бағанды кестеге қосу синтаксисі қандай?",
    options: [
      {
        id: "db-t06-b41-op1",
        text: "ALTER TABLE table_name ADD column_name datatype"
      },
      {
        id: "db-t06-b41-op2",
        text: "ALTER TABLE table_name INSERT column_name datatype"
      },
      {
        id: "db-t06-b41-op3",
        text: "UPDATE TABLE table_name ADD column_name"
      },
      {
        id: "db-t06-b41-op4",
        text: "ALTER TABLE table_name CREATE column_name"
      },
      {
        id: "db-t06-b41-op5",
        text: "VARCHAR айнымалы ұзындықтағы жолдарды сақтайды және жадыны үнемдейді, ал CHAR бекітілген ұзындықты қолданады"
      },
      {
        id: "db-t06-b41-op6",
        text: "VARCHAR-да шектеу жоқ"
      },
      {
        id: "db-t06-b41-op7",
        text: "Жалпы саны 10 цифрдан аспайтын, оның ішінде үтірден кейін 2 цифры бар ондық санды"
      },
      {
        id: "db-t06-b41-op8",
        text: "DROP COLUMN"
      }
    ],
    correctOptionIds: [
      "db-t06-b41-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b42",
    subjectId: SubjectId.DB,
    text: "SQL тілінде кестедегі бағанның атын өзгерту үшін қандай команда орындалады (стандартты)?",
    options: [
      {
        id: "db-t06-b42-op1",
        text: "ALTER TABLE table_name RENAME COLUMN old_name TO new_name"
      },
      {
        id: "db-t06-b42-op2",
        text: "ALTER TABLE table_name CHANGE old_name TO new_name"
      },
      {
        id: "db-t06-b42-op3",
        text: "ALTER COLUMN old_name TO new_name"
      },
      {
        id: "db-t06-b42-op4",
        text: "RENAME COLUMN old_name TO new_name IN table_name"
      },
      {
        id: "db-t06-b42-op5",
        text: "ADD SCHEMA"
      },
      {
        id: "db-t06-b42-op6",
        text: "DROP COLUMN"
      },
      {
        id: "db-t06-b42-op7",
        text: "COMMIT POINT"
      },
      {
        id: "db-t06-b42-op8",
        text: "'a' әрпінен кейін бос орын келетін мәтінді табады"
      }
    ],
    correctOptionIds: [
      "db-t06-b42-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b43",
    subjectId: SubjectId.DB,
    text: "SQL-де логикалық терістеу операторы қалай аталады?",
    options: [
      {
        id: "db-t06-b43-op1",
        text: "NOT"
      },
      {
        id: "db-t06-b43-op2",
        text: "!"
      },
      {
        id: "db-t06-b43-op3",
        text: "AND NOT"
      },
      {
        id: "db-t06-b43-op4",
        text: "FALSE"
      },
      {
        id: "db-t06-b43-op5",
        text: "CHECK_POSITIVE"
      },
      {
        id: "db-t06-b43-op6",
        text: "TRUNCATE TABLE"
      },
      {
        id: "db-t06-b43-op7",
        text: "_"
      },
      {
        id: "db-t06-b43-op8",
        text: "ALTER TABLE table_name CREATE column_name"
      }
    ],
    correctOptionIds: [
      "db-t06-b43-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b44",
    subjectId: SubjectId.DB,
    text: "SQL-де шарттарды біріктіру кезінде екі шарт та ақиқат болуын талап ететін оператор:",
    options: [
      {
        id: "db-t06-b44-op1",
        text: "AND"
      },
      {
        id: "db-t06-b44-op2",
        text: "OR"
      },
      {
        id: "db-t06-b44-op3",
        text: "WITH"
      },
      {
        id: "db-t06-b44-op4",
        text: "UNION"
      },
      {
        id: "db-t06-b44-op5",
        text: "RANGE"
      },
      {
        id: "db-t06-b44-op6",
        text: "AUTO_NUMBER"
      },
      {
        id: "db-t06-b44-op7",
        text: "//"
      },
      {
        id: "db-t06-b44-op8",
        text: "Тек WHERE шартында сүзгілеу үшін"
      }
    ],
    correctOptionIds: [
      "db-t06-b44-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b45",
    subjectId: SubjectId.DB,
    text: "SQL-де шарттардың ең болмағанда біреуі ақиқат болса жеткілікті болатын оператор:",
    options: [
      {
        id: "db-t06-b45-op1",
        text: "OR"
      },
      {
        id: "db-t06-b45-op2",
        text: "AND"
      },
      {
        id: "db-t06-b45-op3",
        text: "ANY"
      },
      {
        id: "db-t06-b45-op4",
        text: "EITHER"
      },
      {
        id: "db-t06-b45-op5",
        text: "TRUNCATE тек сандық кестелер үшін жұмыс істейді"
      },
      {
        id: "db-t06-b45-op6",
        text: "Бастапқы кілтті анықтайды"
      },
      {
        id: "db-t06-b45-op7",
        text: "EXISTS"
      },
      {
        id: "db-t06-b45-op8",
        text: "DOUBLE"
      }
    ],
    correctOptionIds: [
      "db-t06-b45-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b46",
    subjectId: SubjectId.DB,
    text: "Бағандағы NULL емес мәндерді ғана таңдау үшін WHERE шарттында не жазылады?",
    options: [
      {
        id: "db-t06-b46-op1",
        text: "column_name IS NOT NULL"
      },
      {
        id: "db-t06-b46-op2",
        text: "column_name != NULL"
      },
      {
        id: "db-t06-b46-op3",
        text: "column_name <> NULL"
      },
      {
        id: "db-t06-b46-op4",
        text: "column_name IS NOT EMPTY"
      },
      {
        id: "db-t06-b46-op5",
        text: "BETWEEN"
      },
      {
        id: "db-t06-b46-op6",
        text: "UNIQUE"
      },
      {
        id: "db-t06-b46-op7",
        text: "TOP"
      },
      {
        id: "db-t06-b46-op8",
        text: "ARRANGE BY"
      }
    ],
    correctOptionIds: [
      "db-t06-b46-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b47",
    subjectId: SubjectId.DB,
    text: "SQL-де NULL мәніне белгілі бір санды қоссақ немесе көбейтсек нәтиже не болады?",
    options: [
      {
        id: "db-t06-b47-op1",
        text: "NULL"
      },
      {
        id: "db-t06-b47-op2",
        text: "Нөл (0)"
      },
      {
        id: "db-t06-b47-op3",
        text: "Сол санның өзі"
      },
      {
        id: "db-t06-b47-op4",
        text: "Қате (Error) туындайды"
      },
      {
        id: "db-t06-b47-op5",
        text: "Деректер қосады"
      },
      {
        id: "db-t06-b47-op6",
        text: "Баған типін автоматты түрде анықтайды"
      },
      {
        id: "db-t06-b47-op7",
        text: "Құрамында 'abc' тіркесі бар кез келген мәтінді табады"
      },
      {
        id: "db-t06-b47-op8",
        text: "GRANT"
      }
    ],
    correctOptionIds: [
      "db-t06-b47-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b48",
    subjectId: SubjectId.DB,
    text: "NULL мәнін нөлмен (0) салыстырғанда нәтиже қандай болады?",
    options: [
      {
        id: "db-t06-b48-op1",
        text: "UNKNOWN немесе FALSE"
      },
      {
        id: "db-t06-b48-op2",
        text: "TRUE"
      },
      {
        id: "db-t06-b48-op3",
        text: "NULL"
      },
      {
        id: "db-t06-b48-op4",
        text: "Нөлге тең"
      },
      {
        id: "db-t06-b48-op5",
        text: "Бағанға автоматты түрде реттік сан беру үшін"
      },
      {
        id: "db-t06-b48-op6",
        text: "~="
      },
      {
        id: "db-t06-b48-op7",
        text: "CHECK (age >= 18)"
      },
      {
        id: "db-t06-b48-op8",
        text: "SELECT, INSERT, UPDATE, DELETE"
      }
    ],
    correctOptionIds: [
      "db-t06-b48-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b49",
    subjectId: SubjectId.DB,
    text: "SQL-де пікірлер (comments) жазу үшін қандай символдар қолданылады (бір жолдық)?",
    options: [
      {
        id: "db-t06-b49-op1",
        text: "--"
      },
      {
        id: "db-t06-b49-op2",
        text: "//"
      },
      {
        id: "db-t06-b49-op3",
        text: "#"
      },
      {
        id: "db-t06-b49-op4",
        text: ""
      },
      {
        id: "db-t06-b49-op5",
        text: "<!-- -->"
      },
      {
        id: "db-t06-b49-op6",
        text: "// //"
      },
      {
        id: "db-t06-b49-op7",
        text: "''' '''"
      },
      {
        id: "db-t06-b49-op8",
        text: "DOWN"
      }
    ],
    correctOptionIds: [
      "c65e6b6a-092a-4cef-9dc9-63f54ffb1217"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b50",
    subjectId: SubjectId.DB,
    text: "Дерекқор схемасын (Schema) құру үшін қандай команда қолданылады?",
    options: [
      {
        id: "db-t06-b50-op1",
        text: "CREATE SCHEMA"
      },
      {
        id: "db-t06-b50-op2",
        text: "CREATE DATABASE"
      },
      {
        id: "db-t06-b50-op3",
        text: "NEW SCHEMA"
      },
      {
        id: "db-t06-b50-op4",
        text: "ADD SCHEMA"
      },
      {
        id: "db-t06-b50-op5",
        text: "MAKE TABLE"
      },
      {
        id: "db-t06-b50-op6",
        text: "ALTER COLUMN"
      },
      {
        id: "db-t06-b50-op7",
        text: "EITHER"
      },
      {
        id: "db-t06-b50-op8",
        text: "//"
      }
    ],
    correctOptionIds: [
      "db-t06-b50-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b51",
    subjectId: SubjectId.DB,
    text: "SQL-де индексті құру үшін қандай оператор қолданылады?",
    options: [
      {
        id: "db-t06-b51-op1",
        text: "CREATE INDEX"
      },
      {
        id: "db-t06-b51-op2",
        text: "ADD INDEX"
      },
      {
        id: "db-t06-b51-op3",
        text: "MAKE INDEX"
      },
      {
        id: "db-t06-b51-op4",
        text: "CREATE KEY"
      },
      {
        id: "db-t06-b51-op5",
        text: "POSITIVE"
      },
      {
        id: "db-t06-b51-op6",
        text: "Тек сандық мәндерді сақтау үшін"
      },
      {
        id: "db-t06-b51-op7",
        text: "DEFAULT NULL"
      },
      {
        id: "db-t06-b51-op8",
        text: "AUTO_INCREMENT немесе IDENTITY"
      }
    ],
    correctOptionIds: [
      "db-t06-b51-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b52",
    subjectId: SubjectId.DB,
    text: "Дерекқордан индексті жою командасы қандай?",
    options: [
      {
        id: "db-t06-b52-op1",
        text: "DROP INDEX"
      },
      {
        id: "db-t06-b52-op2",
        text: "DELETE INDEX"
      },
      {
        id: "db-t06-b52-op3",
        text: "REMOVE INDEX"
      },
      {
        id: "db-t06-b52-op4",
        text: "ALTER INDEX DROP"
      },
      {
        id: "db-t06-b52-op5",
        text: "ALTER TABLE table_name UPDATE column_name TO new_type"
      },
      {
        id: "db-t06-b52-op6",
        text: "CREATE, ALTER, DROP, TRUNCATE"
      },
      {
        id: "db-t06-b52-op7",
        text: "Іздеуді жылдамдату және қайталанатын мәндердің енуін болдырмау үшін"
      },
      {
        id: "db-t06-b52-op8",
        text: "BIT"
      }
    ],
    correctOptionIds: [
      "db-t06-b52-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b53",
    subjectId: SubjectId.DB,
    text: "Индекс (Index) не үшін қажет?",
    options: [
      {
        id: "db-t06-b53-op1",
        text: "Деректерді іздеу мен сұраныстардың орындалу жылдамдығын арттыру үшін"
      },
      {
        id: "db-t06-b53-op2",
        text: "Деректердің қауіпсіздігін қамтамасыз ету үшін"
      },
      {
        id: "db-t06-b53-op3",
        text: "Деректерді автоматты түрде сығымдау үшін"
      },
      {
        id: "db-t06-b53-op4",
        text: "Сілтемелік бүтіндікті орнату үшін"
      },
      {
        id: "db-t06-b53-op5",
        text: "Транзакция басталғаннан бері жасалған барлық өзгерістерді жоққа шығарады"
      },
      {
        id: "db-t06-b53-op6",
        text: "UPDATE TABLE"
      },
      {
        id: "db-t06-b53-op7",
        text: "UPDATE TABLE table_name ADD column_name"
      },
      {
        id: "db-t06-b53-op8",
        text: "UPDATE TABLE NAME"
      }
    ],
    correctOptionIds: [
      "db-t06-b53-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b54",
    subjectId: SubjectId.DB,
    text: "Кестенің белгілі бір бағанына бірегей индекс (Unique Index) қою не үшін қолданылады?",
    options: [
      {
        id: "db-t06-b54-op1",
        text: "Іздеуді жылдамдату және қайталанатын мәндердің енуін болдырмау үшін"
      },
      {
        id: "db-t06-b54-op2",
        text: "Тек сандық мәндерді сақтау үшін"
      },
      {
        id: "db-t06-b54-op3",
        text: "Кестені автоматты түрде транзакциялау үшін"
      },
      {
        id: "db-t06-b54-op4",
        text: "Бағанның деректер типін өзгерту үшін"
      },
      {
        id: "db-t06-b54-op5",
        text: "ALTER TABLE table_name UPDATE column_name TO new_type"
      },
      {
        id: "db-t06-b54-op6",
        text: "IF NOT EXISTS"
      },
      {
        id: "db-t06-b54-op7",
        text: "Деректерді іздеу мен сұраныстардың орындалу жылдамдығын арттыру үшін"
      },
      {
        id: "db-t06-b54-op8",
        text: "ALTER"
      }
    ],
    correctOptionIds: [
      "db-t06-b54-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b55",
    subjectId: SubjectId.DB,
    text: "SQL-де кесте атауын өзгерту үшін қандай оператор қолданылады?",
    options: [
      {
        id: "db-t06-b55-op1",
        text: "ALTER TABLE table_name RENAME TO new_table_name"
      },
      {
        id: "db-t06-b55-op2",
        text: "RENAME TABLE table_name TO new_table_name"
      },
      {
        id: "db-t06-b55-op3",
        text: "ALTER TABLE table_name CHANGE NAME TO new_table_name"
      },
      {
        id: "db-t06-b55-op4",
        text: "UPDATE TABLE NAME"
      },
      {
        id: "db-t06-b55-op5",
        text: "NEW SCHEMA"
      },
      {
        id: "db-t06-b55-op6",
        text: "Транзакцияларды басқару"
      },
      {
        id: "db-t06-b55-op7",
        text: "ALTER TABLE table_name CHANGE old_name TO new_name"
      },
      {
        id: "db-t06-b55-op8",
        text: "Бүтін сандарды сақтау үшін"
      }
    ],
    correctOptionIds: [
      "db-t06-b55-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b56",
    subjectId: SubjectId.DB,
    text: "SQL-де Data Control Language (DCL) құрамына кіретін GRANT операторы не істейді?",
    options: [
      {
        id: "db-t06-b56-op1",
        text: "Пайдаланушыға немесе рөлге белгілі бір құқықтарды береді"
      },
      {
        id: "db-t06-b56-op2",
        text: "Деректерді жаңартуға мүмкіндік береді"
      },
      {
        id: "db-t06-b56-op3",
        text: "Бастапқы кілтті анықтайды"
      },
      {
        id: "db-t06-b56-op4",
        text: "Жаңа пайдаланушы құрады"
      },
      {
        id: "db-t06-b56-op5",
        text: "Жаңа жазба қосады"
      },
      {
        id: "db-t06-b56-op6",
        text: "*"
      },
      {
        id: "db-t06-b56-op7",
        text: "Тек 'a' деген бір таңбаны табады"
      },
      {
        id: "db-t06-b56-op8",
        text: "BIT"
      }
    ],
    correctOptionIds: [
      "db-t06-b56-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b57",
    subjectId: SubjectId.DB,
    text: "REVOKE операторы DCL-де не істейді?",
    options: [
      {
        id: "db-t06-b57-op1",
        text: "Пайдаланушыдан немесе рөлден бұрын берілген құқықтарды кері қайтарады"
      },
      {
        id: "db-t06-b57-op2",
        text: "Пайдаланушының тіркелгісін жояды"
      },
      {
        id: "db-t06-b57-op3",
        text: "Сұранысты бұғаттайды"
      },
      {
        id: "db-t06-b57-op4",
        text: "Транзакцияны кері қайтарады"
      },
      {
        id: "db-t06-b57-op5",
        text: "INIT TRANSACTION"
      },
      {
        id: "db-t06-b57-op6",
        text: "NEW SCHEMA"
      },
      {
        id: "db-t06-b57-op7",
        text: "COMMIT, ROLLBACK, SAVEPOINT"
      },
      {
        id: "db-t06-b57-op8",
        text: "REMOVE INDEX"
      }
    ],
    correctOptionIds: [
      "db-t06-b57-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b58",
    subjectId: SubjectId.DB,
    text: "Төмендегілердің қайсысы транзакцияны аяқтап, өзгерістерді дерекқорға біржолата сақтайды?",
    options: [
      {
        id: "db-t06-b58-op1",
        text: "COMMIT"
      },
      {
        id: "db-t06-b58-op2",
        text: "ROLLBACK"
      },
      {
        id: "db-t06-b58-op3",
        text: "SAVEPOINT"
      },
      {
        id: "db-t06-b58-op4",
        text: "END"
      },
      {
        id: "db-t06-b58-op5",
        text: "ALTER"
      },
      {
        id: "db-t06-b58-op6",
        text: "<> немесе !="
      },
      {
        id: "db-t06-b58-op7",
        text: "Ағымдағы апта күнін"
      },
      {
        id: "db-t06-b58-op8",
        text: "//"
      }
    ],
    correctOptionIds: [
      "db-t06-b58-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b59",
    subjectId: SubjectId.DB,
    text: "ROLLBACK операторы не істейді?",
    options: [
      {
        id: "db-t06-b59-op1",
        text: "Транзакция басталғаннан бері жасалған барлық өзгерістерді жоққа шығарады"
      },
      {
        id: "db-t06-b59-op2",
        text: "Транзакцияны жартылай сақтайды"
      },
      {
        id: "db-t06-b59-op3",
        text: "Кестені алдыңғы қалпына келтіреді"
      },
      {
        id: "db-t06-b59-op4",
        text: "Дерекқордың резервтік көшірмесін жасайды"
      },
      {
        id: "db-t06-b59-op5",
        text: "UPDATE TABLE ... ADD CONSTRAINT"
      },
      {
        id: "db-t06-b59-op6",
        text: "ALTER TABLE ... DROP CONSTRAINT"
      },
      {
        id: "db-t06-b59-op7",
        text: "Пайдаланушыға немесе рөлге белгілі бір құқықтарды береді"
      },
      {
        id: "db-t06-b59-op8",
        text: "MAKE TABLE"
      }
    ],
    correctOptionIds: [
      "db-t06-b59-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "6a99cdd7-9e0c-4ba6-813b-972507f51fdb",
    subjectId: SubjectId.DB,
    text: "Транзакция ішінде белгілі бір аралық нүкте құру және кейін сәтсіздік болса тек сол нүктеге дейін шегіну үшін не қолданылады?",
    options: [
      {
        id: "7b5d263e-8538-4fa4-aec2-cc1222034bc0",
        text: "SAVEPOINT"
      },
      {
        id: "e8bcf7a1-8c07-4463-ade3-4afcecbf7af2",
        text: "CHECKPOINT"
      },
      {
        id: "654dc92e-3b66-4d83-81ac-742e67fda9cc",
        text: "COMMIT POINT"
      },
      {
        id: "22db4dc4-f3b8-4123-9b4e-fd8fdacdae1c",
        text: "ROLLBACK TO"
      },
      {
        id: "2dca17f3-55e9-4627-8675-d9727b5caa05",
        text: "ADD SCHEMA"
      },
      {
        id: "3a9f7584-3f8e-4203-8b5e-8d29e2dd54c0",
        text: "AND NOT"
      },
      {
        id: "50c9b0fe-3443-4ee5-b550-40cd41eb03d2",
        text: "TRUNCATE тек сандық кестелер үшін жұмыс істейді"
      },
      {
        id: "08bca57b-4ca3-4cb4-99d6-52008cd828ad",
        text: "TRUNCATE TABLE"
      }
    ],
    correctOptionIds: [
      "7b5d263e-8538-4fa4-aec2-cc1222034bc0"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b60",
    subjectId: SubjectId.DB,
    text: "SQL стандартында транзакцияны бастау үшін қандай оператор қолданылады?",
    options: [
      {
        id: "db-t06-b60-op1",
        text: "START TRANSACTION немесе BEGIN"
      },
      {
        id: "db-t06-b60-op2",
        text: "COMMIT TRANSACTION"
      },
      {
        id: "db-t06-b60-op3",
        text: "OPEN TRANSACTION"
      },
      {
        id: "db-t06-b60-op4",
        text: "INIT TRANSACTION"
      },
      {
        id: "db-t06-b60-op5",
        text: "CHAR тек қазақ әріптерін қолдайды"
      },
      {
        id: "db-t06-b60-op6",
        text: "AND NOT"
      },
      {
        id: "db-t06-b60-op7",
        text: "Кесте құрады"
      },
      {
        id: "db-t06-b60-op8",
        text: "Бар жазбаны жаңартады"
      }
    ],
    correctOptionIds: [
      "db-t06-b60-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "38d0f443-35c9-4b2e-95dc-c0d97c203914",
    subjectId: SubjectId.DB,
    text: "Деректер қорынан нақты бір кесте туралы ақпаратты немесе құрылымын көру үшін (мысалы, MySQL-де) қандай команда қолданылады?",
    options: [
      {
        id: "9a635dc5-8474-4be5-8eec-b5fa01541b9f",
        text: "DESCRIBE немесе DESC"
      },
      {
        id: "ecee61d6-eb08-48b1-bb0a-4234e7d1161e",
        text: "SHOW STRUCTURE"
      },
      {
        id: "e7ef4b6c-b45d-4958-91ae-01d970de49f6",
        text: "SELECT STRUCTURE"
      },
      {
        id: "d5c2cb28-63e8-42b0-ac7b-22f707baea6d",
        text: "INFO TABLE"
      },
      {
        id: "cec63ddd-983f-4802-ba41-665abbfe92f8",
        text: "ASSERT"
      },
      {
        id: "67ed5ccb-9ae6-4d2b-8963-d0983e22b286",
        text: "Тек уақытты (сағат, минут, секунд)"
      },
      {
        id: "11ffb411-e44a-4403-8809-62fb9e570c98",
        text: "Құрамында 'abc' тіркесі бар кез келген мәтінді табады"
      },
      {
        id: "2e6dced2-0ca9-4226-af3f-7ab2080e7b03",
        text: "ALIAS"
      }
    ],
    correctOptionIds: [
      "9a635dc5-8474-4be5-8eec-b5fa01541b9f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b61",
    subjectId: SubjectId.DB,
    text: "Бағанның деректер типін өзгерту кезінде ALTER TABLE-де қолданылатын синтаксис (PostgreSQL-де)?",
    options: [
      {
        id: "db-t06-b61-op1",
        text: "ALTER TABLE table_name ALTER COLUMN column_name TYPE new_type"
      },
      {
        id: "db-t06-b61-op2",
        text: "ALTER TABLE table_name MODIFY COLUMN column_name new_type"
      },
      {
        id: "db-t06-b61-op3",
        text: "ALTER TABLE table_name CHANGE column_name new_type"
      },
      {
        id: "db-t06-b61-op4",
        text: "ALTER TABLE table_name UPDATE column_name TO new_type"
      },
      {
        id: "db-t06-b61-op5",
        text: "Нөл (0)"
      },
      {
        id: "db-t06-b61-op6",
        text: "INSERT, UPDATE, DELETE, SELECT"
      },
      {
        id: "db-t06-b61-op7",
        text: "ALTER TABLE table_name RENAME COLUMN old_name TO new_name"
      },
      {
        id: "db-t06-b61-op8",
        text: "NOT EQUAL"
      }
    ],
    correctOptionIds: [
      "db-t06-b61-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b62",
    subjectId: SubjectId.DB,
    text: "SQL-де DATE деректер типі нені сақтайды?",
    options: [
      {
        id: "db-t06-b62-op1",
        text: "Тек күнді (жыл, ай, күн)"
      },
      {
        id: "db-t06-b62-op2",
        text: "Тек уақытты (сағат, минут, секунд)"
      },
      {
        id: "db-t06-b62-op3",
        text: "Күнді де, уақытты да бірге"
      },
      {
        id: "db-t06-b62-op4",
        text: "Ағымдағы апта күнін"
      },
      {
        id: "db-t06-b62-op5",
        text: "DELETE PRIMARY KEY FROM ..."
      },
      {
        id: "db-t06-b62-op6",
        text: "DROP INDEX"
      },
      {
        id: "db-t06-b62-op7",
        text: "Бағандарға да, кестелерге да балама атау беру үшін"
      },
      {
        id: "db-t06-b62-op8",
        text: "Күнді де, уақытты да бірге сақтайды"
      }
    ],
    correctOptionIds: [
      "db-t06-b62-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b63",
    subjectId: SubjectId.DB,
    text: "SQL-де TIME деректер типі нені сақтайды?",
    options: [
      {
        id: "db-t06-b63-op1",
        text: "Тек уақытты (сағат, минут, секунд)"
      },
      {
        id: "db-t06-b63-op2",
        text: "Тек күнді (жыл, ай, күн)"
      },
      {
        id: "db-t06-b63-op3",
        text: "Жыл мен айды ғана"
      },
      {
        id: "db-t06-b63-op4",
        text: "Жүйелік секундтарды"
      },
      {
        id: "db-t06-b63-op5",
        text: "REAL"
      },
      {
        id: "db-t06-b63-op6",
        text: "Бастапқы кілтті анықтайды"
      },
      {
        id: "db-t06-b63-op7",
        text: "CREATE, DROP"
      },
      {
        id: "db-t06-b63-op8",
        text: "<>"
      }
    ],
    correctOptionIds: [
      "db-t06-b63-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b64",
    subjectId: SubjectId.DB,
    text: "TIMESTAMP деректер типі несімен ерекшеленеді?",
    options: [
      {
        id: "db-t06-b64-op1",
        text: "Күнді де, уақытты да бірге сақтайды"
      },
      {
        id: "db-t06-b64-op2",
        text: "Тек секундтарды сақтайды"
      },
      {
        id: "db-t06-b64-op3",
        text: "Тек мәтін түріндегі датаны сақтайды"
      },
      {
        id: "db-t06-b64-op4",
        text: "Автоматты түрде өзгермейді"
      },
      {
        id: "db-t06-b64-op5",
        text: "Транзакцияларды басқару"
      },
      {
        id: "db-t06-b64-op6",
        text: "MAKE TABLE"
      },
      {
        id: "db-t06-b64-op7",
        text: "ROLLBACK"
      },
      {
        id: "db-t06-b64-op8",
        text: "column_name IS NOT NULL"
      }
    ],
    correctOptionIds: [
      "db-t06-b64-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b65",
    subjectId: SubjectId.DB,
    text: "SQL-де INT (немесе INTEGER) типі не үшін қолданылады?",
    options: [
      {
        id: "db-t06-b65-op1",
        text: "Бүтін сандарды сақтау үшін"
      },
      {
        id: "db-t06-b65-op2",
        text: "Бөлшек сандарды сақтау үшін"
      },
      {
        id: "db-t06-b65-op3",
        text: "Мәтіндік деректер үшін"
      },
      {
        id: "db-t06-b65-op4",
        text: "Логикалық мәндер үшін"
      },
      {
        id: "db-t06-b65-op5",
        text: "Деректерді сұрыптау"
      },
      {
        id: "db-t06-b65-op6",
        text: "SET DEFAULT"
      },
      {
        id: "db-t06-b65-op7",
        text: "ALTER TABLE ... REMOVE PRIMARY KEY"
      },
      {
        id: "db-t06-b65-op8",
        text: "OR REPLACE"
      }
    ],
    correctOptionIds: [
      "db-t06-b65-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "81142d13-353a-4133-b6e3-e9f65bbbe4fa",
    subjectId: SubjectId.DB,
    text: "Дәлдігі жоғары ондық сандарды (мысалы, ақша қаражатын) сақтау үшін қандай деректер типі ұсынылады?",
    options: [
      {
        id: "9bef4627-10ca-4c96-a736-f7e0e4936586",
        text: "DECIMAL немесе NUMERIC"
      },
      {
        id: "febc3374-8ce1-4363-aaee-76c04b3436f5",
        text: "FLOAT"
      },
      {
        id: "e471db7e-612a-4f9d-b1b4-8e8468991b33",
        text: "DOUBLE"
      },
      {
        id: "f07a5862-e2ae-4c25-923a-9e13d0f9fe2b",
        text: "REAL"
      },
      {
        id: "e059855e-7992-4217-b6de-b4c2503b66f1",
        text: "UPDATE TABLE ... ADD CONSTRAINT"
      },
      {
        id: "6380aa95-d0a0-4301-8a47-3cd4054d16c4",
        text: "Қателерді елемеу үшін"
      },
      {
        id: "4fb53891-c1ae-4356-a06b-e54eac177f90",
        text: "NOT"
      },
      {
        id: "bfb4e0b9-0c47-4537-a9bd-3e7092dc1f7b",
        text: "Деректердің қауіпсіздігін қамтамасыз ету үшін"
      }
    ],
    correctOptionIds: [
      "9bef4627-10ca-4c96-a736-f7e0e4936586"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b66",
    subjectId: SubjectId.DB,
    text: "DECIMAL(10, 2) жазбасы нені білдіреді?",
    options: [
      {
        id: "db-t06-b66-op1",
        text: "Жалпы саны 10 цифрдан аспайтын, оның ішінде үтірден кейін 2 цифры бар ондық санды"
      },
      {
        id: "db-t06-b66-op2",
        text: "Үтірдің алдында 10, соңында 2 цифры бар санды"
      },
      {
        id: "db-t06-b66-op3",
        text: "Жалпы ұзындығы 12 болатын бөлшек санды"
      },
      {
        id: "db-t06-b66-op4",
        text: "Тек 10 немесе 2 санын сақтай алатын бағанды"
      },
      {
        id: "db-t06-b66-op5",
        text: "AND NOT"
      },
      {
        id: "db-t06-b66-op6",
        text: "WHERE"
      },
      {
        id: "db-t06-b66-op7",
        text: "AUTO_NUMBER"
      },
      {
        id: "db-t06-b66-op8",
        text: "Құрамында 'abc' тіркесі бар кез келген мәтінді табады"
      }
    ],
    correctOptionIds: [
      "db-t06-b66-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b67",
    subjectId: SubjectId.DB,
    text: "SQL-де логикалық (ақиқат/жалған) мәндерді сақтау үшін қандай деректер типі қолданылады?",
    options: [
      {
        id: "db-t06-b67-op1",
        text: "BOOLEAN"
      },
      {
        id: "db-t06-b67-op2",
        text: "BIT"
      },
      {
        id: "db-t06-b67-op3",
        text: "LOGIC"
      },
      {
        id: "db-t06-b67-op4",
        text: "BINARY"
      },
      {
        id: "db-t06-b67-op5",
        text: "Мәтіндік деректер үшін"
      },
      {
        id: "db-t06-b67-op6",
        text: "Құрамында 'abc' тіркесі бар кез келген мәтінді табады"
      },
      {
        id: "db-t06-b67-op7",
        text: "MAX"
      },
      {
        id: "db-t06-b67-op8",
        text: "?"
      }
    ],
    correctOptionIds: [
      "db-t06-b67-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "15040937-1231-47f4-9ce5-a557b42ec9c3",
    subjectId: SubjectId.DB,
    text: "Бағанға тек қана оң сандарды енгізуге рұқсат беру үшін кейбір ДҚБЖ-да (мысалы, MySQL-де) қандай атрибут қолданылады?",
    options: [
      {
        id: "94ba6679-ff8e-485c-ba18-9402c5fd2131",
        text: "UNSIGNED"
      },
      {
        id: "3f8e560d-bf6f-47f5-aa2e-628fbafec025",
        text: "POSITIVE"
      },
      {
        id: "1379e9d0-7b17-414e-9084-267a40ab2afd",
        text: "NON_NEGATIVE"
      },
      {
        id: "cedcfeb6-0c53-402c-a42d-d5604b746a55",
        text: "CHECK_POSITIVE"
      },
      {
        id: "e8417555-28a9-4551-aade-6455d55fdfcd",
        text: "Логикалық мәндер үшін"
      },
      {
        id: "3ca01432-30aa-401e-ac8c-a927a39379e0",
        text: "OR REPLACE"
      },
      {
        id: "19ed43a2-a284-44a2-b3ca-f684f3422cab",
        text: "NEW SCHEMA"
      },
      {
        id: "5e0e24a6-ee90-46e5-a46e-b4cf5a1acf1d",
        text: "BOOLEAN"
      }
    ],
    correctOptionIds: [
      "94ba6679-ff8e-485c-ba18-9402c5fd2131"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b68",
    subjectId: SubjectId.DB,
    text: "SQL-де кесте құру кезінде DEFAULT сөйлемі не үшін қажет?",
    options: [
      {
        id: "db-t06-b68-op1",
        text: "Жаңа жол қосқанда мән көрсетілмесе, автоматты түрде қойылатын әдепкі мәнді анықтау үшін"
      },
      {
        id: "db-t06-b68-op2",
        text: "Бағанның міндетті түрде бос болуын қамтамасыз ету үшін"
      },
      {
        id: "db-t06-b68-op3",
        text: "Бағанның типін өзгерту үшін"
      },
      {
        id: "db-t06-b68-op4",
        text: "Бастапқы кілттің мәнін анықтау үшін"
      },
      {
        id: "db-t06-b68-op5",
        text: "VARCHAR тек сандарды сақтайды"
      },
      {
        id: "db-t06-b68-op6",
        text: "END"
      },
      {
        id: "db-t06-b68-op7",
        text: "'a' әрпінен басталатын кез келген мәтінді табады"
      },
      {
        id: "db-t06-b68-op8",
        text: "IF EXISTS"
      }
    ],
    correctOptionIds: [
      "db-t06-b68-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b69",
    subjectId: SubjectId.DB,
    text: "Төмендегілердің қайсысы SQL-дегі салыстыру операторы ЕМЕС?",
    options: [
      {
        id: "db-t06-b69-op1",
        text: "=>"
      },
      {
        id: "db-t06-b69-op2",
        text: "<="
      },
      {
        id: "db-t06-b69-op3",
        text: ">="
      },
      {
        id: "db-t06-b69-op4",
        text: "<>"
      },
      {
        id: "db-t06-b69-op5",
        text: "CREATE DATABASE"
      },
      {
        id: "db-t06-b69-op6",
        text: "Құрамында тек бір 'a' әрпі бар мәтінді табады"
      },
      {
        id: "db-t06-b69-op7",
        text: "~="
      },
      {
        id: "db-t06-b69-op8",
        text: "OPEN TRANSACTION"
      }
    ],
    correctOptionIds: [
      "db-t06-b69-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b70",
    subjectId: SubjectId.DB,
    text: "SQL-де 'тең емес' операторы қалай жазылады (стандартты түрде)?",
    options: [
      {
        id: "db-t06-b70-op1",
        text: "<> немесе !="
      },
      {
        id: "db-t06-b70-op2",
        text: "~="
      },
      {
        id: "db-t06-b70-op3",
        text: "!=="
      },
      {
        id: "db-t06-b70-op4",
        text: "NOT EQUAL"
      },
      {
        id: "db-t06-b70-op5",
        text: "Тек WHERE шартында сүзгілеу үшін"
      },
      {
        id: "db-t06-b70-op6",
        text: "Автоматты түрде өзгермейді"
      },
      {
        id: "db-t06-b70-op7",
        text: "Пайдаланушыға немесе рөлге белгілі бір құқықтарды береді"
      },
      {
        id: "db-t06-b70-op8",
        text: "RENAME TABLE table_name TO new_table_name"
      }
    ],
    correctOptionIds: [
      "db-t06-b70-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b71",
    subjectId: SubjectId.DB,
    text: "SQL-де LIKE операторында '%abc%' шаблоны нені білдіреді?",
    options: [
      {
        id: "db-t06-b71-op1",
        text: "Құрамында 'abc' тіркесі бар кез келген мәтінді табады"
      },
      {
        id: "db-t06-b71-op2",
        text: "Тек 'abc' мәтінін ғана табады"
      },
      {
        id: "db-t06-b71-op3",
        text: "'abc'-дан басталатын мәтіндерді табады"
      },
      {
        id: "db-t06-b71-op4",
        text: "'abc'-мен аяқталатын мәтіндерді табады"
      },
      {
        id: "db-t06-b71-op5",
        text: "ADD INDEX"
      },
      {
        id: "db-t06-b71-op6",
        text: "CHECK"
      },
      {
        id: "db-t06-b71-op7",
        text: "Тек бастапқы кілт бағанын таңдауды"
      },
      {
        id: "db-t06-b71-op8",
        text: "CHECK age VALUES (18)"
      }
    ],
    correctOptionIds: [
      "db-t06-b71-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b72",
    subjectId: SubjectId.DB,
    text: "LIKE 'a%' шаблоны нені білдіреді?",
    options: [
      {
        id: "db-t06-b72-op1",
        text: "'a' әрпінен басталатын кез келген мәтінді табады"
      },
      {
        id: "db-t06-b72-op2",
        text: "Құрамында 'a' әрпі бар мәтінді табады"
      },
      {
        id: "db-t06-b72-op3",
        text: "'a' әрпімен аяқталатын мәтінді табады"
      },
      {
        id: "db-t06-b72-op4",
        text: "Тек 'a' деген бір таңбаны табады"
      },
      {
        id: "db-t06-b72-op5",
        text: "ADD SCHEMA"
      },
      {
        id: "db-t06-b72-op6",
        text: "'a' әрпінен кейін бос орын келетін мәтінді табады"
      },
      {
        id: "db-t06-b72-op7",
        text: "Бірінші әрпі 'a' болатын кез келген мәтінді табады"
      },
      {
        id: "db-t06-b72-op8",
        text: "ALTER TABLE table_name CHANGE old_name TO new_name"
      }
    ],
    correctOptionIds: [
      "db-t06-b72-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b73",
    subjectId: SubjectId.DB,
    text: "LIKE '%a' шаблоны нені білдіреді?",
    options: [
      {
        id: "db-t06-b73-op1",
        text: "'a' әрпімен аяқталатын кез келген мәтінді табады"
      },
      {
        id: "db-t06-b73-op2",
        text: "'a' әрпінен басталатын кез келген мәтінді табады"
      },
      {
        id: "db-t06-b73-op3",
        text: "Құрамында 'a' әрпі бар мәтінді табады"
      },
      {
        id: "db-t06-b73-op4",
        text: "Тек екі таңбадан тұратын мәтінді табады"
      },
      {
        id: "db-t06-b73-op5",
        text: "ROLLBACK TO"
      },
      {
        id: "db-t06-b73-op6",
        text: "Егер тәуелді объектілер болса, жоюға тыйым салады"
      },
      {
        id: "db-t06-b73-op7",
        text: "DELETE PRIMARY KEY FROM ..."
      },
      {
        id: "db-t06-b73-op8",
        text: "IN"
      }
    ],
    correctOptionIds: [
      "db-t06-b73-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b74",
    subjectId: SubjectId.DB,
    text: "LIKE '_a%' шаблоны нені білдіреді?",
    options: [
      {
        id: "db-t06-b74-op1",
        text: "Екінші әрпі 'a' болатын кез келген мәтінді табады"
      },
      {
        id: "db-t06-b74-op2",
        text: "Бірінші әрпі 'a' болатын кез келген мәтінді табады"
      },
      {
        id: "db-t06-b74-op3",
        text: "Құрамында тек бір 'a' әрпі бар мәтінді табады"
      },
      {
        id: "db-t06-b74-op4",
        text: "'a' әрпінен кейін бос орын келетін мәтінді табады"
      },
      {
        id: "db-t06-b74-op5",
        text: "ALTER INDEX DROP"
      },
      {
        id: "db-t06-b74-op6",
        text: "Кесте құрады"
      },
      {
        id: "db-t06-b74-op7",
        text: "DESCRIBE немесе DESC"
      },
      {
        id: "db-t06-b74-op8",
        text: ">="
      }
    ],
    correctOptionIds: [
      "db-t06-b74-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b75",
    subjectId: SubjectId.DB,
    text: "SQL-де логикалық операторлардың орындалу басымдылығы (precedence) қандай?",
    options: [
      {
        id: "db-t06-b75-op1",
        text: "NOT, AND, OR"
      },
      {
        id: "db-t06-b75-op2",
        text: "OR, AND, NOT"
      },
      {
        id: "db-t06-b75-op3",
        text: "AND, OR, NOT"
      },
      {
        id: "db-t06-b75-op4",
        text: "Олардың орындалу басымдылығы бірдей"
      },
      {
        id: "db-t06-b75-op5",
        text: "IF NOT EXISTS"
      },
      {
        id: "db-t06-b75-op6",
        text: "Тек кестелерге балама атау беру үшін"
      },
      {
        id: "db-t06-b75-op7",
        text: "DROP COLUMN"
      },
      {
        id: "db-t06-b75-op8",
        text: "Дерекқордағы барлық кестелердің ішін тазартады, бірақ дерекқорды қалдырады"
      }
    ],
    correctOptionIds: [
      "db-t06-b75-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f0ede69c-481f-44cf-8281-f42d57a1736e",
    subjectId: SubjectId.DB,
    text: "Сұраныс нәтижесіндегі бағандарға уақытша балама атау (alias) передін белгілейтін кілттік сөз қандай?",
    options: [
      {
        id: "e18cf04c-a7c5-4ddc-a15f-f5f2073d3145",
        text: "AS"
      },
      {
        id: "fcbe44c2-2144-46e9-ab9b-533b168363a7",
        text: "ALIAS"
      },
      {
        id: "3a1277f6-b9e4-4b2a-a8ba-0d0681c32594",
        text: "NAME"
      },
      {
        id: "fe5ec603-e674-4c21-ae0e-f67c6f97d8b5",
        text: "TO"
      },
      {
        id: "8ce8fa2f-e77e-48e9-b0bd-fbfc5fe3106a",
        text: "Жаңа кесте құрады"
      },
      {
        id: "dd612f1c-954f-47ae-95ee-5460c015d80b",
        text: "EITHER"
      },
      {
        id: "86df49ec-051d-4776-9b08-c794dd59048f",
        text: "REMOVE ALL"
      },
      {
        id: "9c5c6022-8122-488c-95ee-36aadecd9cbe",
        text: "Тек екі таңбадан тұратын мәтінді табады"
      }
    ],
    correctOptionIds: [
      "e18cf04c-a7c5-4ddc-a15f-f5f2073d3145"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b76",
    subjectId: SubjectId.DB,
    text: "AS кілттік сөзін қай жерде қолдануға болады?",
    options: [
      {
        id: "db-t06-b76-op1",
        text: "Бағандарға да, кестелерге да балама атау беру үшін"
      },
      {
        id: "db-t06-b76-op2",
        text: "Тек бағандарға балама атау беру үшін"
      },
      {
        id: "db-t06-b76-op3",
        text: "Тек кестелерге балама атау беру үшін"
      },
      {
        id: "db-t06-b76-op4",
        text: "Тек WHERE шартында сүзгілеу үшін"
      },
      {
        id: "db-t06-b76-op5",
        text: "Кестені жояды"
      },
      {
        id: "db-t06-b76-op6",
        text: "LIMIT"
      },
      {
        id: "db-t06-b76-op7",
        text: "MODIFY TABLE"
      },
      {
        id: "db-t06-b76-op8",
        text: "Транзакцияны жартылай сақтайды"
      }
    ],
    correctOptionIds: [
      "db-t06-b76-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b77",
    subjectId: SubjectId.DB,
    text: "SELECT операторында жұлдызша (*) белгісі нені білдіреді?",
    options: [
      {
        id: "db-t06-b77-op1",
        text: "Кестедегі барлық бағандарды таңдауды"
      },
      {
        id: "db-t06-b77-op2",
        text: "Кестедегі барлық жолдарды таңдауды"
      },
      {
        id: "db-t06-b77-op3",
        text: "Тек бастапқы кілт бағанын таңдауды"
      },
      {
        id: "db-t06-b77-op4",
        text: "Кестедегі бос емес ұяшықтарды таңдауды"
      },
      {
        id: "db-t06-b77-op5",
        text: "DROP INDEX"
      },
      {
        id: "db-t06-b77-op6",
        text: "EXISTS"
      },
      {
        id: "db-t06-b77-op7",
        text: "CONTAINS"
      },
      {
        id: "db-t06-b77-op8",
        text: "Баған типін автоматты түрде анықтайды"
      }
    ],
    correctOptionIds: [
      "db-t06-b77-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b78",
    subjectId: SubjectId.DB,
    text: "Кестеден жолдарды сүзгілеу (шарт қою) үшін қандай сөйлем қолданылады?",
    options: [
      {
        id: "db-t06-b78-op1",
        text: "WHERE"
      },
      {
        id: "db-t06-b78-op2",
        text: "HAVING"
      },
      {
        id: "db-t06-b78-op3",
        text: "GROUP BY"
      },
      {
        id: "db-t06-b78-op4",
        text: "IF"
      },
      {
        id: "db-t06-b78-op5",
        text: "Тек оң жақ (үлкен) шекараны қамтиды"
      },
      {
        id: "db-t06-b78-op6",
        text: "Деректердің қауіпсіздігін қамтамасыз ету үшін"
      },
      {
        id: "db-t06-b78-op7",
        text: "VARCHAR айнымалы ұзындықтағы жолдарды сақтайды және жадыны үнемдейді, ал CHAR бекітілген ұзындықты қолданады"
      },
      {
        id: "db-t06-b78-op8",
        text: "Жалпы ұзындығы 12 болатын бөлшек санды"
      }
    ],
    correctOptionIds: [
      "db-t06-b78-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b79",
    subjectId: SubjectId.DB,
    text: "WHERE сөйлемі қай операторлардан кейін қолданылуы мүмкін?",
    options: [
      {
        id: "db-t06-b79-op1",
        text: "SELECT, UPDATE, DELETE"
      },
      {
        id: "db-t06-b79-op2",
        text: "Тек SELECT операторынан кейін"
      },
      {
        id: "db-t06-b79-op3",
        text: "CREATE, ALTER, DROP"
      },
      {
        id: "db-t06-b79-op4",
        text: "INSERT, CREATE, SELECT"
      },
      {
        id: "db-t06-b79-op5",
        text: "ALTER TABLE ... ADD LIMIT"
      },
      {
        id: "db-t06-b79-op6",
        text: "NOT NULL"
      },
      {
        id: "db-t06-b79-op7",
        text: "Нәтижені топтастыру"
      },
      {
        id: "db-t06-b79-op8",
        text: "DELETE кестенің құрылымын жояды"
      }
    ],
    correctOptionIds: [
      "db-t06-b79-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b80",
    subjectId: SubjectId.DB,
    text: "SQL-де DROP DATABASE командасы не істейді?",
    options: [
      {
        id: "db-t06-b80-op1",
        text: "Дерекқорды барлық кестелерімен және деректерімен қоса толық өшіреді"
      },
      {
        id: "db-t06-b80-op2",
        text: "Дерекқордағы барлық кестелердің ішін тазартады, бірақ дерекқорды қалдырады"
      },
      {
        id: "db-t06-b80-op3",
        text: "Дерекқордың тек атауын өшіреді"
      },
      {
        id: "db-t06-b80-op4",
        text: "Уақытша дерекқорды сөндіреді"
      },
      {
        id: "db-t06-b80-op5",
        text: "SELECT, UPDATE, DELETE"
      },
      {
        id: "db-t06-b80-op6",
        text: "ALIAS"
      },
      {
        id: "db-t06-b80-op7",
        text: "CREATE, DROP"
      },
      {
        id: "db-t06-b80-op8",
        text: "Бастапқы кілттің мәнін анықтау үшін"
      }
    ],
    correctOptionIds: [
      "db-t06-b80-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "09906e18-35aa-4d9f-8a52-69eae8cb1445",
    subjectId: SubjectId.DB,
    text: "Егер өшіргелі жатқан кесте дерекқорда жоқ болса, қате шықпауы үшін DROP TABLE-мен бірге қандай сөйлем жазылады?",
    options: [
      {
        id: "a11282b0-adb0-412d-b26b-9dbb5bcbd693",
        text: "IF EXISTS"
      },
      {
        id: "66525aa8-9c52-4893-9f70-0eaed3a96205",
        text: "IF NOT EXISTS"
      },
      {
        id: "6ba9dd7b-560e-48f8-8122-e3b3710c289b",
        text: "OR REPLACE"
      },
      {
        id: "4db7f1de-6f6d-4e0e-a93f-222466eecd12",
        text: "SAFE"
      },
      {
        id: "9a6214e2-d72a-410a-b74b-b7e23af57f43",
        text: "VARCHAR-да шектеу жоқ"
      },
      {
        id: "e92b6fd5-5e5f-4616-bc17-df36cf2bf585",
        text: "ROW_NUMBER"
      },
      {
        id: "f92096f5-99dc-49ee-acf5-268bab25bd74",
        text: "ALTER TABLE table_name CHANGE column_name new_type"
      },
      {
        id: "c7727fef-0fbd-45e1-a7f7-33c2418dbdca",
        text: "ALTER TABLE ... ADD LIMIT"
      }
    ],
    correctOptionIds: [
      "a11282b0-adb0-412d-b26b-9dbb5bcbd693"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b81",
    subjectId: SubjectId.DB,
    text: "Кесте құру кезінде, егер кесте бұрыннан бар болса қате туындамауы үшін қандай сөйлем қосылады?",
    options: [
      {
        id: "db-t06-b81-op1",
        text: "IF NOT EXISTS"
      },
      {
        id: "db-t06-b81-op2",
        text: "IF EXISTS"
      },
      {
        id: "db-t06-b81-op3",
        text: "OR REPLACE"
      },
      {
        id: "db-t06-b81-op4",
        text: "CHECK"
      },
      {
        id: "db-t06-b81-op5",
        text: "Логикалық мәндер үшін"
      },
      {
        id: "db-t06-b81-op6",
        text: "'a' әрпінен басталатын кез келген мәтінді табады"
      },
      {
        id: "db-t06-b81-op7",
        text: "CREATE INDEX"
      },
      {
        id: "db-t06-b81-op8",
        text: "TRUNCATE тек сандық кестелер үшін жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "db-t06-b81-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t06-b82",
    subjectId: SubjectId.DB,
    text: "SQL-де бағанды өзгерту кезінде SET DEFAULT не істейді?",
    options: [
      {
        id: "db-t06-b82-op1",
        text: "Бағанға жаңа әдепкі мәнді тағайындайды"
      },
      {
        id: "db-t06-b82-op2",
        text: "Бағанның әдепкі мәнін өшіреді"
      },
      {
        id: "db-t06-b82-op3",
        text: "Бағанды автоматты түрде бастапқы кілт қылады"
      },
      {
        id: "db-t06-b82-op4",
        text: "Баған типін автоматты түрде анықтайды"
      },
      {
        id: "db-t06-b82-op5",
        text: "FALSE"
      },
      {
        id: "db-t06-b82-op6",
        text: "_"
      },
      {
        id: "db-t06-b82-op7",
        text: "Деректердің қауіпсіздігін қамтамасыз ету үшін"
      },
      {
        id: "db-t06-b82-op8",
        text: "RENAME TABLE table_name TO new_table_name"
      }
    ],
    correctOptionIds: [
      "db-t06-b82-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Интерактивті SQL",
    difficulty: Difficulty.MEDIUM
  }
];
