import { Question, SubjectId, QuestionType, Difficulty } from '../../../../../types';

// db / Деректердің тұтастығы
export const db2DataIntegrityQuestions : Question[] = [
  {
    id: "db-t02-b01",
    subjectId: SubjectId.DB,
    text: "CHECK constraint не істейді?",
    options: [
      {
        id: "db-t02-b01-op1",
        text: "Foreign Key орнатады"
      },
      {
        id: "db-t02-b01-op2",
        text: "Мәнге шектеу қояды (мыс: age > 0)"
      },
      {
        id: "db-t02-b01-op3",
        text: "Индекс құрады"
      },
      {
        id: "db-t02-b01-op4",
        text: "Primary Key құрады"
      },
      {
        id: "db-t02-b01-op5",
        text: "Кестелер арасындағы сілтемелерді қамтамасыз етеді"
      },
      {
        id: "db-t02-b01-op6",
        text: "Деректерді іздеу жылдамдығын арттырады"
      },
      {
        id: "db-t02-b01-op7",
        text: "Жолдардың бірегейлігін тексереді"
      },
      {
        id: "db-t02-b01-op8",
        text: "Бағанға әдепкі мәнді автоматты түрде тағайындайды"
      }
    ],
    correctOptionIds: [
      "db-t02-b01-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b02",
    subjectId: SubjectId.DB,
    text: "NOT NULL constraint не істейді?",
    options: [
      {
        id: "db-t02-b02-op1",
        text: "Мәнді автоматты толтырады"
      },
      {
        id: "db-t02-b02-op2",
        text: "Мәннің NULL болмауын талап етеді"
      },
      {
        id: "db-t02-b02-op3",
        text: "Мәннің бос болуын талап етеді"
      },
      {
        id: "db-t02-b02-op4",
        text: "Индекс құрады"
      },
      {
        id: "db-t02-b02-op5",
        text: "Бағанға енгізілетін мәндердің бірегей болуын қамтамасыз етеді"
      },
      {
        id: "db-t02-b02-op6",
        text: "Кестеге жаңа жазба қосылғанда өрісті нөлге теңейді"
      },
      {
        id: "db-t02-b02-op7",
        text: "Басқа кестелермен сыртқы кілт арқылы байланыс орнатады"
      },
      {
        id: "db-t02-b02-op8",
        text: "Мәліметтерді сақтау кезінде оларды автоматты түрде шифрлайды"
      }
    ],
    correctOptionIds: [
      "db-t02-b02-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b03",
    subjectId: SubjectId.DB,
    text: "Семантикалық тұтастық дегеніміз не?",
    options: [
      {
        id: "db-t02-b03-op1",
        text: "Деректердің бизнес логикаға сәйкестігі"
      },
      {
        id: "db-t02-b03-op2",
        text: "Типтердің дұрыстығы"
      },
      {
        id: "db-t02-b03-op3",
        text: "Байланыстардың дұрыстығы"
      },
      {
        id: "db-t02-b03-op4",
        text: "Кілттердің дұрыстығы"
      },
      {
        id: "db-t02-b03-op5",
        text: "Дерекқордағы деректердің көшірмесін жасау процесі"
      },
      {
        id: "db-t02-b03-op6",
        text: "Кестелер арасындағы физикалық байланыстардың орнатылуы"
      },
      {
        id: "db-t02-b03-op7",
        text: "Пайдаланушылардың деректерге қол жеткізу құқықтарын шектеу"
      },
      {
        id: "db-t02-b03-op8",
        text: "Деректерді сығу арқылы дискілік кеңістікті үнемдеу"
      }
    ],
    correctOptionIds: [
      "db-t02-b03-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b04",
    subjectId: SubjectId.DB,
    text: "Сілтемелік тұтастық нені қамтамасыз етеді?",
    options: [
      {
        id: "db-t02-b04-op1",
        text: "Шифрлаудың дұрыстығын"
      },
      {
        id: "db-t02-b04-op2",
        text: "Foreign Key байланысының дұрыстығын"
      },
      {
        id: "db-t02-b04-op3",
        text: "Индекстердің дұрыстығын"
      },
      {
        id: "db-t02-b04-op4",
        text: "Типтердің дұрыстығын"
      },
      {
        id: "db-t02-b04-op5",
        text: "Деректер ұяшықтарындағы мәндердің форматын"
      },
      {
        id: "db-t02-b04-op6",
        text: "Пайдаланушының дерекқорға кіру құқығын"
      },
      {
        id: "db-t02-b04-op7",
        text: "Кестедегі жолдардың бірегейлігін"
      },
      {
        id: "db-t02-b04-op8",
        text: "Сақтау кеңістігін оңтайландыруды"
      }
    ],
    correctOptionIds: [
      "db-t02-b04-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b05",
    subjectId: SubjectId.DB,
    text: "DEFAULT constraint не істейді?",
    options: [
      {
        id: "db-t02-b05-op1",
        text: "Мән берілмесе әдепкі мән қояды"
      },
      {
        id: "db-t02-b05-op2",
        text: "Индекс құрады"
      },
      {
        id: "db-t02-b05-op3",
        text: "Мәнді шифрлайды"
      },
      {
        id: "db-t02-b05-op4",
        text: "Мәнді жояды"
      },
      {
        id: "db-t02-b05-op5",
        text: "Бағанға енгізілетін мәндердің бірегейлігін тексереді"
      },
      {
        id: "db-t02-b05-op6",
        text: "Кестедегі жазбаларды автоматты түрде сұрыптайды"
      },
      {
        id: "db-t02-b05-op7",
        text: "Бос мәндерді (NULL) енгізуге тыйым салады"
      },
      {
        id: "db-t02-b05-op8",
        text: "Басқа кестемен байланысты орнатады"
      }
    ],
    correctOptionIds: [
      "db-t02-b05-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b06",
    subjectId: SubjectId.DB,
    text: "Домендік тұтастық нені қамтамасыз етеді?",
    options: [
      {
        id: "db-t02-b06-op1",
        text: "Байланыстардың дұрыстығын"
      },
      {
        id: "db-t02-b06-op2",
        text: "Индекстердің дұрыстығын"
      },
      {
        id: "db-t02-b06-op3",
        text: "Транзакциялардың дұрыстығын"
      },
      {
        id: "db-t02-b06-op4",
        text: "Типі мен диапазонның дұрыстығын"
      },
      {
        id: "db-t02-b06-op5",
        text: "Кестелер арасындағы сілтемелердің сақталуын"
      },
      {
        id: "db-t02-b06-op6",
        text: "Деректерді өзгерту операцияларының толықтығын"
      },
      {
        id: "db-t02-b06-op7",
        text: "Пайдаланушылардың рұқсат деңгейлерін"
      },
      {
        id: "db-t02-b06-op8",
        text: "Жүйенің істен шығу кезіндегі деректердің қалпына келуін"
      }
    ],
    correctOptionIds: [
      "db-t02-b06-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b07",
    subjectId: SubjectId.DB,
    text: "UNIQUE constraint не істейді?",
    options: [
      {
        id: "db-t02-b07-op1",
        text: "Бағандағы мәндердің бірегейлігін қамтамасыз етеді"
      },
      {
        id: "db-t02-b07-op2",
        text: "Primary Key орнатады"
      },
      {
        id: "db-t02-b07-op3",
        text: "Деректерді шифрлайды"
      },
      {
        id: "db-t02-b07-op4",
        text: "NULL мәнге рұқсат береді"
      },
      {
        id: "db-t02-b07-op5",
        text: "Бағандағы барлық мәндерді автоматты түрде бас әріппен жазады"
      },
      {
        id: "db-t02-b07-op6",
        text: "Кестедегі деректердің көшірмесін жасайды"
      },
      {
        id: "db-t02-b07-op7",
        text: "Бағанға тек сандық мәндерді енгізуге рұқсат береді"
      },
      {
        id: "db-t02-b07-op8",
        text: "Деректерді кестеге енгізу жылдамдығын арттырады"
      }
    ],
    correctOptionIds: [
      "db-t02-b07-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b08",
    subjectId: SubjectId.DB,
    text: "Deadlock дегеніміз не?",
    options: [
      {
        id: "db-t02-b08-op1",
        text: "Транзакция сәтті аяқталды"
      },
      {
        id: "db-t02-b08-op2",
        text: "Индекс құру"
      },
      {
        id: "db-t02-b08-op3",
        text: "Деректерді жылдам оқу"
      },
      {
        id: "db-t02-b08-op4",
        text: "Екі транзакция бір-бірінің құлпын күтіп тұрып қалу"
      },
      {
        id: "db-t02-b08-op5",
        text: "Транзакцияның орындалу уақытын қысқарту әдісі"
      },
      {
        id: "db-t02-b08-op6",
        text: "Дерекқордағы деректердің көшірмесін жасау процесі"
      },
      {
        id: "db-t02-b08-op7",
        text: "Бір транзакцияның екіншісіне тәуелді болып, тізбектей орындалуы"
      },
      {
        id: "db-t02-b08-op8",
        text: "Жүйенің жұмысын тоқтатпай, құлыптарды автоматты түрде босату механизмі"
      }
    ],
    correctOptionIds: [
      "db-t02-b08-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b09",
    subjectId: SubjectId.DB,
    text: "Isolation дегеніміз не?",
    options: [
      {
        id: "db-t02-b09-op1",
        text: "Транзакциялар бір-біріне әсер етпеуі"
      },
      {
        id: "db-t02-b09-op2",
        text: "Толық орындалу"
      },
      {
        id: "db-t02-b09-op3",
        text: "Дерекқордың дұрыс күйде қалуы"
      },
      {
        id: "db-t02-b09-op4",
        text: "Нәтиженің сақталуы"
      },
      {
        id: "db-t02-b09-op5",
        text: "Транзакцияның толық орындалуы немесе мүлдем орындалмауы"
      },
      {
        id: "db-t02-b09-op6",
        text: "Жүйе істен шыққан кезде деректердің жоғалмауы"
      },
      {
        id: "db-t02-b09-op7",
        text: "Дерекқордағы барлық шектеулердің сақталуы"
      },
      {
        id: "db-t02-b09-op8",
        text: "Транзакциялардың реттілікпен орындалуы"
      }
    ],
    correctOptionIds: [
      "db-t02-b09-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b10",
    subjectId: SubjectId.DB,
    text: "COMMIT командасы не істейді?",
    options: [
      {
        id: "db-t02-b10-op1",
        text: "Деректерді жояды"
      },
      {
        id: "db-t02-b10-op2",
        text: "Транзакциядағы өзгерістерді тұрақты сақтайды"
      },
      {
        id: "db-t02-b10-op3",
        text: "Транзакцияны болдырмайды"
      },
      {
        id: "db-t02-b10-op4",
        text: "Транзакцияны бастайды"
      },
      {
        id: "db-t02-b10-op5",
        text: "Транзакцияны уақытша тоқтатады"
      },
      {
        id: "db-t02-b10-op6",
        text: "Өзгерістерді кестеге жазбай, тек жадыда сақтайды"
      },
      {
        id: "db-t02-b10-op7",
        text: "Алдыңғы транзакцияның барлық әрекеттерін қайтарады"
      },
      {
        id: "db-t02-b10-op8",
        text: "Дерекқорға жаңа пайдаланушыны тіркейді"
      }
    ],
    correctOptionIds: [
      "db-t02-b10-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b11",
    subjectId: SubjectId.DB,
    text: "Atomicity дегеніміз не?",
    options: [
      {
        id: "db-t02-b11-op1",
        text: "Нәтиже сақталады"
      },
      {
        id: "db-t02-b11-op2",
        text: "Транзакция толық орындалады немесе орындалмайды"
      },
      {
        id: "db-t02-b11-op3",
        text: "Деректердің дұрыстығы"
      },
      {
        id: "db-t02-b11-op4",
        text: "Транзакциялар бір-біріне әсер етпейді"
      },
      {
        id: "db-t02-b11-op5",
        text: "Транзакциялардың орындалу реті маңызды емес"
      },
      {
        id: "db-t02-b11-op6",
        text: "Дерекқорға жазылған өзгерістер бірден көрінеді"
      },
      {
        id: "db-t02-b11-op7",
        text: "Жүйе істен шыққан кезде деректер автоматты түрде қалпына келеді"
      },
      {
        id: "db-t02-b11-op8",
        text: "Бір уақытта бірнеше пайдаланушы деректерге қол жеткізе алады"
      }
    ],
    correctOptionIds: [
      "db-t02-b11-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b12",
    subjectId: SubjectId.DB,
    text: "Lost Update дегеніміз не?",
    options: [
      {
        id: "db-t02-b12-op1",
        text: "Бір транзакцияның өзгертуі екіншісімен қайта жазылды"
      },
      {
        id: "db-t02-b12-op2",
        text: "Дерек жойылды"
      },
      {
        id: "db-t02-b12-op3",
        text: "Дерек табылмады"
      },
      {
        id: "db-t02-b12-op4",
        text: "Жаңа дерек қосылды"
      },
      {
        id: "db-t02-b12-op5",
        text: "Транзакция орындалмай жатып жүйе істен шықты"
      },
      {
        id: "db-t02-b12-op6",
        text: "Екі транзакция бір уақытта деректі оқуға тырысты"
      },
      {
        id: "db-t02-b12-op7",
        text: "Дерекқордағы деректер түпнұсқа күйіне қайтарылды"
      },
      {
        id: "db-t02-b12-op8",
        text: "Бір транзакция екіншісінің құлыптауын күтіп тұр"
      }
    ],
    correctOptionIds: [
      "db-t02-b12-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b13",
    subjectId: SubjectId.DB,
    text: "SAVEPOINT не істейді?",
    options: [
      {
        id: "db-t02-b13-op1",
        text: "Транзакция ішінде бақылау нүктесін құрады"
      },
      {
        id: "db-t02-b13-op2",
        text: "Транзакцияны аяқтайды"
      },
      {
        id: "db-t02-b13-op3",
        text: "Деректерді жояды"
      },
      {
        id: "db-t02-b13-op4",
        text: "Кестені құрады"
      },
      {
        id: "db-t02-b13-op5",
        text: "Транзакцияны толығымен болдырмайды (rollback)"
      },
      {
        id: "db-t02-b13-op6",
        text: "Дерекқорға тұрақты түрде сақтауды бекітеді"
      },
      {
        id: "db-t02-b13-op7",
        text: "Транзакциялар арасындағы байланысты үзеді"
      },
      {
        id: "db-t02-b13-op8",
        text: "Кесте құрылымын уақытша өзгертеді"
      }
    ],
    correctOptionIds: [
      "db-t02-b13-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b14",
    subjectId: SubjectId.DB,
    text: "Phantom Read дегеніміз не?",
    options: [
      {
        id: "db-t02-b14-op1",
        text: "Деректі жою"
      },
      {
        id: "db-t02-b14-op2",
        text: "Деректі табу мүмкін емес"
      },
      {
        id: "db-t02-b14-op3",
        text: "Екі оқу арасында басқа транзакция жаңа жазба қосқан"
      },
      {
        id: "db-t02-b14-op4",
        text: "Бір дерек екі рет өзгерген"
      },
      {
        id: "db-t02-b14-op5",
        text: "Бір транзакция ішінде деректі екі рет оқығанда мәні өзгеріп кетуі"
      },
      {
        id: "db-t02-b14-op6",
        text: "Жойылған деректердің уақытша қалпына келуі"
      },
      {
        id: "db-t02-b14-op7",
        text: "Екі транзакцияның бір уақытта бір жазбаны жаңартуға тырысуы"
      },
      {
        id: "db-t02-b14-op8",
        text: "Оқу операциясы кезінде дерекқор индексінің бұзылуы"
      }
    ],
    correctOptionIds: [
      "db-t02-b14-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b15",
    subjectId: SubjectId.DB,
    text: "READ COMMITTED изоляция деңгейі нені қамтамасыз етеді?",
    options: [
      {
        id: "db-t02-b15-op1",
        text: "Phantom Read болмайды"
      },
      {
        id: "db-t02-b15-op2",
        text: "Ешқандай қорғаныс жоқ"
      },
      {
        id: "db-t02-b15-op3",
        text: "Толық оқшаулау"
      },
      {
        id: "db-t02-b15-op4",
        text: "Dirty Read болмайды"
      },
      {
        id: "db-t02-b15-op5",
        text: "Non-Repeatable Read болмайды"
      },
      {
        id: "db-t02-b15-op6",
        text: "Барлық транзакциялар кезекпен орындалады"
      },
      {
        id: "db-t02-b15-op7",
        text: "Phantom Read толығымен жойылады"
      },
      {
        id: "db-t02-b15-op8",
        text: "Өзгерілмеген деректерді қайта оқуға тыйым салынады"
      }
    ],
    correctOptionIds: [
      "db-t02-b15-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b16",
    subjectId: SubjectId.DB,
    text: "SERIALIZABLE изоляция деңгейі нені қамтамасыз етеді?",
    options: [
      {
        id: "db-t02-b16-op1",
        text: "Ең төменгі қорғаныс"
      },
      {
        id: "db-t02-b16-op2",
        text: "Оқшаулау жоқ"
      },
      {
        id: "db-t02-b16-op3",
        text: "Dirty Read ғана алдын алады"
      },
      {
        id: "db-t02-b16-op4",
        text: "Ең жоғары изоляция, барлық проблемаларды болдырмайды"
      },
      {
        id: "db-t02-b16-op5",
        text: "Тек Phantom Read мәселесін шешеді, бірақ басқаларына әсер етпейді"
      },
      {
        id: "db-t02-b16-op6",
        text: "Орындалу жылдамдығын арттыру үшін құлыптауды толық алып тастайды"
      },
      {
        id: "db-t02-b16-op7",
        text: "READ COMMITTED деңгейімен бірдей қорғаныс деңгейін ұсынады"
      },
      {
        id: "db-t02-b16-op8",
        text: "Тек өз транзакциясының деректерін көруге рұқсат береді, басқаларын блоктамайды"
      }
    ],
    correctOptionIds: [
      "db-t02-b16-op4"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b17",
    subjectId: SubjectId.DB,
    text: "Consistency (ACID) дегеніміз не?",
    options: [
      {
        id: "db-t02-b17-op1",
        text: "Дерекқор транзакциядан кейін дұрыс күйде қалады"
      },
      {
        id: "db-t02-b17-op2",
        text: "Тұрақтылық"
      },
      {
        id: "db-t02-b17-op3",
        text: "Оқшаулау"
      },
      {
        id: "db-t02-b17-op4",
        text: "Толық орындалу"
      },
      {
        id: "db-t02-b17-op5",
        text: "Транзакцияның орындалу уақытын қысқарту"
      },
      {
        id: "db-t02-b17-op6",
        text: "Деректердің физикалық сақтаушыда мәңгілікке жазылуы"
      },
      {
        id: "db-t02-b17-op7",
        text: "Бір мезетте бірнеше пайдаланушының деректерге қол жеткізуі"
      },
      {
        id: "db-t02-b17-op8",
        text: "Жүйенің істен шығу кезінде деректерді автоматты түрде қалпына келтіру"
      }
    ],
    correctOptionIds: [
      "db-t02-b17-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b18",
    subjectId: SubjectId.DB,
    text: "Dirty Read дегеніміз не?",
    options: [
      {
        id: "db-t02-b18-op1",
        text: "Қате оқу"
      },
      {
        id: "db-t02-b18-op2",
        text: "Commit болған деректі оқу"
      },
      {
        id: "db-t02-b18-op3",
        text: "Басқа транзакцияның commit болмаған деректін оқу"
      },
      {
        id: "db-t02-b18-op4",
        text: "Тез оқу"
      },
      {
        id: "db-t02-b18-op5",
        text: "Басқа транзакцияның сәтсіз аяқталған (rollback) деректерін оқу"
      },
      {
        id: "db-t02-b18-op6",
        text: "Дерекқордың физикалық бұзылуынан пайда болған қате деректі оқу"
      },
      {
        id: "db-t02-b18-op7",
        text: "Транзакциялар параллель орындалғандағы уақытша кідірісті оқу"
      },
      {
        id: "db-t02-b18-op8",
        text: "Жүйелік кэштен жаңартылмаған ескі деректерді оқу"
      }
    ],
    correctOptionIds: [
      "db-t02-b18-op3"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b19",
    subjectId: SubjectId.DB,
    text: "ACID атауындағы A, C және I қасиеттеріне сәйкес келетін атауларды таңдаңыз. (3 жауап)",
    options: [
      {
        id: "db-t02-b19-op1",
        text: "Accuracy"
      },
      {
        id: "db-t02-b19-op2",
        text: "Isolation"
      },
      {
        id: "db-t02-b19-op3",
        text: "Durability"
      },
      {
        id: "db-t02-b19-op4",
        text: "Consistency"
      },
      {
        id: "db-t02-b19-op5",
        text: "Atomicity"
      },
      {
        id: "db-t02-b19-op6",
        text: "Тұрақтылық"
      },
      {
        id: "db-t02-b19-op7",
        text: "Дәлдік"
      },
      {
        id: "db-t02-b19-op8",
        text: "Интеграция"
      }
    ],
    correctOptionIds: [
      "db-t02-b19-op5",
      "db-t02-b19-op4",
      "db-t02-b19-op2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b20",
    subjectId: SubjectId.DB,
    text: "Durability дегеніміз не?",
    options: [
      {
        id: "db-t02-b20-op1",
        text: "Нәтиженің сақталып қалуы"
      },
      {
        id: "db-t02-b20-op2",
        text: "Толық орындалу"
      },
      {
        id: "db-t02-b20-op3",
        text: "Транзакциялардың оқшаулануы"
      },
      {
        id: "db-t02-b20-op4",
        text: "Дерекқордың дұрыстығы"
      },
      {
        id: "db-t02-b20-op5",
        text: "Транзакциялардың бір-біріне әсер етпеуі"
      },
      {
        id: "db-t02-b20-op6",
        text: "Деректердің қателіксіздігін қамтамасыз ету"
      },
      {
        id: "db-t02-b20-op7",
        text: "Жүйенің үзіліссіз жұмыс істеу уақыты"
      },
      {
        id: "db-t02-b20-op8",
        text: "Операцияның толық немесе мүлдем орындалмауы"
      }
    ],
    correctOptionIds: [
      "db-t02-b20-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b21",
    subjectId: SubjectId.DB,
    text: "ROLLBACK командасы не істейді?",
    options: [
      {
        id: "db-t02-b21-op1",
        text: "Транзакцияны болдырмайды, өзгерістерді қайтарады"
      },
      {
        id: "db-t02-b21-op2",
        text: "Деректер қосады"
      },
      {
        id: "db-t02-b21-op3",
        text: "Өзгерістерді сақтайды"
      },
      {
        id: "db-t02-b21-op4",
        text: "Транзакцияны бастайды"
      },
      {
        id: "db-t02-b21-op5",
        text: "Транзакцияны уақытша тоқтатады"
      },
      {
        id: "db-t02-b21-op6",
        text: "Өзгерістерді дерекқорға біржола бекітеді"
      },
      {
        id: "db-t02-b21-op7",
        text: "Кесте құрылымын өзгертуге мүмкіндік береді"
      },
      {
        id: "db-t02-b21-op8",
        text: "Жойылған деректерді қалпына келтіреді"
      }
    ],
    correctOptionIds: [
      "db-t02-b21-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b22",
    subjectId: SubjectId.DB,
    text: "Сілтемелік тұтастық (Referential Integrity) ережесі нені талап етеді?",
    options: [
      {
        id: "db-t02-b22-op1",
        text: "Сыртқы кілттің мәні сілтеме жасалатын кестенің бастапқы кілтінде болуын немесе NULL болуын"
      },
      {
        id: "db-t02-b22-op2",
        text: "Бастапқы кілттің ешқашан бос (NULL) болмауын"
      },
      {
        id: "db-t02-b22-op3",
        text: "Деректердің типі тек бүтін сандар болуын"
      },
      {
        id: "db-t02-b22-op4",
        text: "Сұраныстардың жылдам орындалуын"
      },
      {
        id: "db-t02-b22-op5",
        text: "Сыртқы кілттің мәні кез келген басқа кестедегі кез келген бағанға сәйкес келуін"
      },
      {
        id: "db-t02-b22-op6",
        text: "Бастапқы кілт пен сыртқы кілттің деректер типтері әртүрлі болуын"
      },
      {
        id: "db-t02-b22-op7",
        text: "Сілтеме жасалатын кестедегі барлық жазбалардың міндетті түрде өшірілуін"
      },
      {
        id: "db-t02-b22-op8",
        text: "Сыртқы кілттегі қайталанатын мәндерге тыйым салынуын"
      }
    ],
    correctOptionIds: [
      "db-t02-b22-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3a90879d-407d-4608-b775-703c1ae06e92",
    subjectId: SubjectId.DB,
    text: "Мән мәтін деңгейіндегі тұтастықты (Domain/Value Integrity) қамтамасыз ету үшін SQL-де қандай шектеу (constraint) қолданылады?",
    options: [
      {
        id: "ad2f5cca-15b8-4477-9a00-595cd77eff2b",
        text: "CHECK"
      },
      {
        id: "a38348b1-26a2-4b67-bb10-2dff028bcc54",
        text: "PRIMARY KEY"
      },
      {
        id: "8d886d6c-7ff5-4e81-9c19-68d825a124f8",
        text: "FOREIGN KEY"
      },
      {
        id: "85a3e4aa-c54a-495f-b2ed-fa3f895b3b21",
        text: "INDEX"
      },
      {
        id: "b8af7dce-ab8a-4efe-8a1a-c8939fead40f",
        text: "NOT NULL"
      },
      {
        id: "da5cc42e-ba6d-4e79-9e92-dbeb380c8792",
        text: "UNIQUE"
      },
      {
        id: "5e40c2d5-91f8-44e5-8b20-10c0e3da5f63",
        text: "DEFAULT"
      },
      {
        id: "18d0a598-c75c-4d96-a516-dd050d30a532",
        text: "CASCADE"
      }
    ],
    correctOptionIds: [
      "ad2f5cca-15b8-4477-9a00-595cd77eff2b"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b23",
    subjectId: SubjectId.DB,
    text: "Деректер қорындағы \"Мәндер тұтастығы\" (Entity Integrity) ережесі нені білдіреді?",
    options: [
      {
        id: "db-t02-b23-op1",
        text: "Бастапқы кілттің бірегей болуын және оның ешбір бөлігі NULL мәнін қабылдамауын"
      },
      {
        id: "db-t02-b23-op2",
        text: "Сыртқы кілттің дұрыс сілтеме жасауын"
      },
      {
        id: "db-t02-b23-op3",
        text: "Деректерді жою кезінде транзакцияның тоқтауын"
      },
      {
        id: "db-t02-b23-op4",
        text: "Кестелердегі жолдардың шектеусіз санын"
      },
      {
        id: "db-t02-b23-op5",
        text: "Кестедегі барлық бағандардың міндетті түрде толтырылуын қамтамасыз ету"
      },
      {
        id: "db-t02-b23-op6",
        text: "Сыртқы кілттердің тек бастапқы кестеге ғана сілтеме жасау шартын"
      },
      {
        id: "db-t02-b23-op7",
        text: "Деректерді өзгерткен кезде автоматты түрде сақтық көшірме жасауды"
      },
      {
        id: "db-t02-b23-op8",
        text: "Бір кестедегі деректердің екінші кестемен толық сәйкес келу талабын"
      }
    ],
    correctOptionIds: [
      "db-t02-b23-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b24",
    subjectId: SubjectId.DB,
    text: "Сыртқы кілтті жою немесе өзгерту кезіндегі ON DELETE CASCADE әрекеті нені білдіреді?",
    options: [
      {
        id: "db-t02-b24-op1",
        text: "Басты кестедегі жол жойылғанда, оған сілтеме жасаған бағынышты кестедегі жолдар автоматты түрде жойылады"
      },
      {
        id: "db-t02-b24-op2",
        text: "Басты кестедегі жолды жоюға тыйым салынады"
      },
      {
        id: "db-t02-b24-op3",
        text: "Бағынышты кестедегі мәндер NULL-ге теңестіріледі"
      },
      {
        id: "db-t02-b24-op4",
        text: "Тек басты кестедегі мән ғана жойылады"
      },
      {
        id: "db-t02-b24-op5",
        text: "Басты кестедегі жол жойылғанда, бағынышты кестедегі сәйкес жолдар жаңартылып, деректер көшіріледі"
      },
      {
        id: "db-t02-b24-op6",
        text: "Бағынышты кестедегі жолдар жойылмайды, бірақ оларға уақытша тыйым салынады"
      },
      {
        id: "db-t02-b24-op7",
        text: "Басты кестедегі өзгеріс тек сол жолға әсер етеді, бағынышты кестелерге ешқандай әрекет жасалмайды"
      },
      {
        id: "db-t02-b24-op8",
        text: "Бағынышты кестедегі барлық жолдар толығымен тазаланып, кесте бос қалады"
      }
    ],
    correctOptionIds: [
      "db-t02-b24-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b25",
    subjectId: SubjectId.DB,
    text: "ON UPDATE SET NULL шектеуі орындалғанда не болады?",
    options: [
      {
        id: "db-t02-b25-op1",
        text: "Басты кестедегі бастапқы кілт өзгергенде, бағынышты кестедегі сәйкес сыртқы кілт мәндері NULL-ге ауыстырылады"
      },
      {
        id: "db-t02-b25-op2",
        text: "Басты кестедегі өзгертуге тыйым салынады"
      },
      {
        id: "db-t02-b25-op3",
        text: "Сәйкес жолдар автоматты түрде жойылады"
      },
      {
        id: "db-t02-b25-op4",
        text: "Бағынышты кестеде жаңа жол пайда болады"
      },
      {
        id: "db-t02-b25-op5",
        text: "Басты кестедегі бастапқы кілт өзгергенде, бағынышты кестедегі сәйкес жолдар автоматты түрде жаңартылып, жаңа мәнмен толықтырылады"
      },
      {
        id: "db-t02-b25-op6",
        text: "Бағынышты кестедегі сыртқы кілт мәні өзгермей, ескі бастапқы кілтке сілтеме жасап қала береді"
      },
      {
        id: "db-t02-b25-op7",
        text: "Басты кестедегі өзгерту әрекеті толығынан болдырмайды және қате хабарламасы қайтарылады"
      },
      {
        id: "db-t02-b25-op8",
        text: "Бағынышты кестедегі барлық жолдар дерекқордан біржола өшіріледі"
      }
    ],
    correctOptionIds: [
      "db-t02-b25-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "179dcc67-6c7f-4000-a158-2953e00ff8b0",
    subjectId: SubjectId.DB,
    text: "Деректер қорындағы тұтастық шектеулері (Declarative Constraints) мен Триггерлердің (Triggers) негізгі айырмашылығы қандай?",
    options: [
      {
        id: "5d67447b-a3c3-4262-a418-7526159f51a5",
        text: "Шектеулер декларативті түрде кесте құрылымында анықталады және жылдам жұмыс істейді, ал триггерлер процедуралық код болып табылады"
      },
      {
        id: "d8571172-ab71-4621-8f57-13e9a5f21caa",
        text: "Триггерлер тек NULL мәндерді тексереді"
      },
      {
        id: "3eb50f56-5d8c-46c7-9d5a-69f6093d2c3c",
        text: "Шектеулерді өшіру мүмкін емес"
      },
      {
        id: "7d512fd6-f91d-4abe-a05d-fd71858ae3fb",
        text: "Айырмашылығы жоқ"
      },
      {
        id: "a752bd7b-2af4-44af-9de0-3971251e6494",
        text: "Триггерлер дерекқордың физикалық сақтау құрылымын өзгертеді, ал шектеулер тек логикалық деңгейде жұмыс істейді"
      },
      {
        id: "e6497785-ff3d-4142-a286-7299fa8c27bb",
        text: "Шектеулер тек INSERT операциясы кезінде орындалады, ал триггерлер UPDATE және DELETE кезінде ғана іске қосылады"
      },
      {
        id: "e389f4c8-be5c-45e0-ad44-0feee2178cc8",
        text: "Триггерлерді қолдану дерекқор өнімділігін әрқашан арттырады, ал шектеулер жүйені баяулатады"
      },
      {
        id: "66f4b89b-1ac4-4212-8883-c897bd40e4f9",
        text: "Шектеулер тек бір ғана кесте ішіндегі деректерді тексерсе, триггерлер басқа дерекқорлармен байланыс орната алады"
      }
    ],
    correctOptionIds: [
      "5d67447b-a3c3-4262-a418-7526159f51a5"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "09cc322f-d7e6-4d01-a4c9-043ab9751ee1",
    subjectId: SubjectId.DB,
    text: "Деректердің транзитивті тұтастығын немесе күрделі бизнес ережелерді бақылау үшін қандай нысан жиі қолданылады?",
    options: [
      {
        id: "8719b59b-fd94-43c3-b407-824ca0e15d26",
        text: "Триггер (Trigger)"
      },
      {
        id: "e2128f6c-da7d-4268-a585-c375857d9640",
        text: "Кластерленген индекс"
      },
      {
        id: "3228f063-e4a0-4ffb-a27c-e6c104f4ad1c",
        text: "Көрініс (View)"
      },
      {
        id: "bfd5efaf-c262-46b6-8190-7c95aec2732e",
        text: "Сақталған процедура"
      },
      {
        id: "a27ad213-ca50-4e26-9bff-ace4d35b5a52",
        text: "Бастапқы кілт (Primary Key)"
      },
      {
        id: "22d4b92e-946e-4f82-9e17-d618e58bca6a",
        text: "Сыртқы кілт (Foreign Key)"
      },
      {
        id: "8332b29f-df31-40de-a5c1-524d3455687c",
        text: "Домендік шектеу (Domain Constraint)"
      },
      {
        id: "39fb5b61-1c1b-4a51-9cf8-33f80bb29d4f",
        text: "Индекстелген көрініс (Indexed View)"
      }
    ],
    correctOptionIds: [
      "8719b59b-fd94-43c3-b407-824ca0e15d26"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b26",
    subjectId: SubjectId.DB,
    text: "Сыртқы кілтті орнатқанда NO ACTION опциясы қандай әрекетті білдіреді?",
    options: [
      {
        id: "db-t02-b26-op1",
        text: "Басты кестедегі жолды жоюға немесе өзгертуге әрекет жасалғанда, егер бағынышты кестеде оған сілтеме болса, қате шығарып, әрекетті болдырмайды"
      },
      {
        id: "db-t02-b26-op2",
        text: "Бағынышты кестедегі жолдарды автоматты түрде жояды"
      },
      {
        id: "db-t02-b26-op3",
        text: "Сыртқы кілт мәнін бос қалдырады"
      },
      {
        id: "db-t02-b26-op4",
        text: "Ешқандай тексеру жүргізбейді"
      },
      {
        id: "db-t02-b26-op5",
        text: "Бағынышты кестедегі сәйкес жолдарды автоматты түрде жаңартып, басты кестедегі өзгерістерге бейімдейді"
      },
      {
        id: "db-t02-b26-op6",
        text: "Әрекетті уақытша тоқтатып, дерекқор әкімшісінің қосымша растауын күтеді"
      },
      {
        id: "db-t02-b26-op7",
        text: "Басты кестедегі жолды жоюға рұқсат береді, бірақ бағынышты кестеге ескерту хабарламасын жібереді"
      },
      {
        id: "db-t02-b26-op8",
        text: "Сыртқы кілт шектеуін уақытша алып тастап, операцияны орындайды да, кейін қайта орнатады"
      }
    ],
    correctOptionIds: [
      "db-t02-b26-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b27",
    subjectId: SubjectId.DB,
    text: "SQL-де кестеге мән қосқанда CHECK шектеуі қандай шартпен орындалады?",
    options: [
      {
        id: "db-t02-b27-op1",
        text: "Шарттың нәтижесі TRUE немесе NULL болғанда (тек FALSE болса ғана қате шығарады)"
      },
      {
        id: "db-t02-b27-op2",
        text: "Шарт тек TRUE болуы тиіс, NULL болса қате шығады"
      },
      {
        id: "db-t02-b27-op3",
        text: "Тек сандық мәндер үшін ғана орындалады"
      },
      {
        id: "db-t02-b27-op4",
        text: "Шарт әрқашан FALSE болуы керек"
      },
      {
        id: "db-t02-b27-op5",
        text: "Шарттың нәтижесі міндетті түрде FALSE болуы керек, әйтпесе қате шығады"
      },
      {
        id: "db-t02-b27-op6",
        text: "CHECK шектеуі тек кестеге алғашқы жазба қосылған кезде бір рет тексеріледі"
      },
      {
        id: "db-t02-b27-op7",
        text: "Егер шарттың нәтижесі NULL болса, жүйе автоматты түрде қате хабарламасын береді"
      },
      {
        id: "db-t02-b27-op8",
        text: "Бұл шектеу тек PRIMARY KEY бағандарына қатысты жұмыс істейді"
      }
    ],
    correctOptionIds: [
      "db-t02-b27-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b28",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Жүйелік тұтастық\" (System Integrity) қай компоненттің жауапкершілігінде болады?",
    options: [
      {
        id: "db-t02-b28-op1",
        text: "ДҚБЖ (DBMS) ядросының өзінде"
      },
      {
        id: "db-t02-b28-op2",
        text: "Пайдаланушы интерфейсінде"
      },
      {
        id: "db-t02-b28-op3",
        text: "Клиенттік бағдарламаның кодында"
      },
      {
        id: "db-t02-b28-op4",
        text: "Операциялық жүйенің файлдық құрылымында"
      },
      {
        id: "db-t02-b28-op5",
        text: "Желілік қауіпсіздік брандмауэрінің конфигурациясында"
      },
      {
        id: "db-t02-b28-op6",
        text: "Дерекқор әкімшісінің қолмен жазатын скрипттерінде"
      },
      {
        id: "db-t02-b28-op7",
        text: "Аппараттық жадтың (RAM) басқару драйверінде"
      },
      {
        id: "db-t02-b28-op8",
        text: "Сақтық көшірме жасау (Backup) құралдарының алгоритмінде"
      }
    ],
    correctOptionIds: [
      "db-t02-b28-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b29",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"User-defined Integrity\" (Пайдаланушы анықтаған тұтастық) деген не?",
    options: [
      {
        id: "db-t02-b29-op1",
        text: "Кәсіпорынның немесе қолданбаның нақты бизнес-ережелерін сипаттайтын шектеулер жиынтығы"
      },
      {
        id: "db-t02-b29-op2",
        text: "Тек пайдаланушының құпия сөзін тексеру ережесі"
      },
      {
        id: "db-t02-b29-op3",
        text: "Бастапқы кілттің бірегейлік ережесі"
      },
      {
        id: "db-t02-b29-op4",
        text: "Дерекқордың резервтік көшірмесін жасау ережесі"
      },
      {
        id: "db-t02-b29-op5",
        text: "Дерекқорды физикалық зақымданудан қорғайтын аппараттық шектеулер"
      },
      {
        id: "db-t02-b29-op6",
        text: "Кестелер арасындағы сыртқы кілттердің сәйкестігін автоматты түрде тексеретін жүйелік ереже"
      },
      {
        id: "db-t02-b29-op7",
        text: "Деректерді сақтау кезінде оларды сығу және кеңістікті үнемдеу алгоритмі"
      },
      {
        id: "db-t02-b29-op8",
        text: "Пайдаланушының дерекқорға кіру құқығын басқаратын рөлдер мен рұқсаттар тізімі"
      }
    ],
    correctOptionIds: [
      "db-t02-b29-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b30",
    subjectId: SubjectId.DB,
    text: "Изоляция деңгейлерінің ішіндегі ең төменгі деңгей қайсысы?",
    options: [
      {
        id: "db-t02-b30-op1",
        text: "Read Uncommitted"
      },
      {
        id: "db-t02-b30-op2",
        text: "Read Committed"
      },
      {
        id: "db-t02-b30-op3",
        text: "Repeatable Read"
      },
      {
        id: "db-t02-b30-op4",
        text: "Serializable"
      },
      {
        id: "db-t02-b30-op5",
        text: "Write Committed"
      },
      {
        id: "db-t02-b30-op6",
        text: "Full Isolation"
      },
      {
        id: "db-t02-b30-op7",
        text: "Dirty Read Allowed"
      },
      {
        id: "db-t02-b30-op8",
        text: "Snapshot Level"
      }
    ],
    correctOptionIds: [
      "db-t02-b30-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b31",
    subjectId: SubjectId.DB,
    text: "Read Uncommitted деңгейінде қандай аномалия орын алуы мүмкін?",
    options: [
      {
        id: "db-t02-b31-op1",
        text: "Dirty Read, Non-repeatable Read және Phantom Read"
      },
      {
        id: "db-t02-b31-op2",
        text: "Тек қана Phantom Read"
      },
      {
        id: "db-t02-b31-op3",
        text: "Ешқандай аномалия болмайды"
      },
      {
        id: "db-t02-b31-op4",
        text: "Тек қана Lost Update"
      },
      {
        id: "db-t02-b31-op5",
        text: "Тек қана Non-repeatable Read және Phantom Read"
      },
      {
        id: "db-t02-b31-op6",
        text: "Dirty Read және Lost Update аномалиялары"
      },
      {
        id: "db-t02-b31-op7",
        text: "Тек қана Dirty Read аномалиясы"
      },
      {
        id: "db-t02-b31-op8",
        text: "Serializable деңгейіндегі барлық аномалиялар"
      }
    ],
    correctOptionIds: [
      "db-t02-b31-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b32",
    subjectId: SubjectId.DB,
    text: "Read Committed изоляция деңгейі қандай аномалияны болдырмайды, бірақ қайсысына жол береді?",
    options: [
      {
        id: "db-t02-b32-op1",
        text: "Dirty Read-ті болдырмайды, бірақ Non-repeatable Read пен Phantom Read-ке жол береді"
      },
      {
        id: "db-t02-b32-op2",
        text: "Phantom Read-ті болдырмайды, бірақ Dirty Read-ке жол береді"
      },
      {
        id: "db-t02-b32-op3",
        text: "Барлық аномалияларды толық жояды"
      },
      {
        id: "db-t02-b32-op4",
        text: "Lost Update-ке ғана жол береді"
      },
      {
        id: "db-t02-b32-op5",
        text: "Non-repeatable Read-ті болдырмайды, бірақ Dirty Read пен Phantom Read-ке жол береді"
      },
      {
        id: "db-t02-b32-op6",
        text: "Phantom Read-ті болдырмайды, бірақ Non-repeatable Read-ке ғана жол береді"
      },
      {
        id: "db-t02-b32-op7",
        text: "Dirty Read пен Non-repeatable Read-ті болдырмайды, бірақ Phantom Read-ке жол береді"
      },
      {
        id: "db-t02-b32-op8",
        text: "Барлық оқу аномалияларын (Dirty, Non-repeatable, Phantom) толықтай болдырмайды"
      }
    ],
    correctOptionIds: [
      "db-t02-b32-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "48e6ead2-f0c8-4498-b91a-8f47123a76a4",
    subjectId: SubjectId.DB,
    text: "Repeatable Read изоляция деңгейі қандай аномалияны болдырмайды, бірақ қайсысына әлі де жол беруі мүмкін?",
    options: [
      {
        id: "72f3ecd2-299c-4f82-8c3d-2e16cb4bc6a9",
        text: "Non-repeatable Read-ті болдырмайды, бірақ Phantom Read орын алуы мүмкін"
      },
      {
        id: "40579fa2-5776-4806-912c-90bae2dc93fb",
        text: "Dirty Read-ті болдырмайды, бірақ Lost Update орын алуы мүмкін"
      },
      {
        id: "0a2ae6f2-fe47-4dfe-96ed-7b26b7712598",
        text: "Phantom Read-ті болдырмайды, бірақ Dirty Read орын алуы мүмкін"
      },
      {
        id: "681eb56d-cf04-457b-875e-df7a7347f9e3",
        text: "Ешқандай аномалияға жол бермейді"
      },
      {
        id: "05c49619-bfef-4de9-8a75-29cca90b9030",
        text: "Dirty Read-ті болдырмайды, бірақ Non-repeatable Read орын алуы мүмкін"
      },
      {
        id: "3d92b514-e4ca-463e-89f0-7fefa756e30d",
        text: "Phantom Read-ті болдырмайды, бірақ Non-repeatable Read орын алуы мүмкін"
      },
      {
        id: "af01c0bf-cc0f-47ec-9c92-58a9d4a51a7c",
        text: "Lost Update-ті болдырмайды, бірақ Phantom Read орын алуы мүмкін"
      },
      {
        id: "beab5315-9293-44dc-bc28-60ffa18393b4",
        text: "Барлық аномалияларды болдырмайды, тек Serializability деңгейінде ғана шектеулер болады"
      }
    ],
    correctOptionIds: [
      "72f3ecd2-299c-4f82-8c3d-2e16cb4bc6a9"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b33",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Non-repeatable Read\" (Қайталанбайтын оқу) аномалиясы деген не?",
    options: [
      {
        id: "db-t02-b33-op1",
        text: "Бір транзакция ішінде бір деректі екі рет оқығанда, екінші рет басқа транзакция өзгерткен (UPDATE) жаңа мәнді оқу"
      },
      {
        id: "db-t02-b33-op2",
        text: "Деректердің мүлдем оқылмауы"
      },
      {
        id: "db-t02-b33-op3",
        text: "Жойылып кеткен деректерді оқу әрекеті"
      },
      {
        id: "db-t02-b33-op4",
        text: "Ішкі сұраныстың қате орындалуы"
      },
      {
        id: "db-t02-b33-op5",
        text: "Бір транзакция ішінде бір шарт бойынша оқылған деректер жиынына басқа транзакция жаңа жазбалар қосқанда, екінші рет оқығанда сол жаңа жазбалардың пайда болуы"
      },
      {
        id: "db-t02-b33-op6",
        text: "Екі түрлі транзакцияның бір уақытта бір деректі өзгертуге әрекеттеніп, жүйенің біреуін таңдап, екіншісін тоқтатуы"
      },
      {
        id: "db-t02-b33-op7",
        text: "Транзакция аяқталмай тұрып жүйе істен шыққан жағдайда, орындалмаған өзгерістердің дерекқордан автоматты түрде жойылуы"
      },
      {
        id: "db-t02-b33-op8",
        text: "Бір транзакция барысында деректерді оқу кезінде құлыптау (lock) механизмнің дұрыс жұмыс істемеуінен бағдарламаның қате беруі"
      }
    ],
    correctOptionIds: [
      "db-t02-b33-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b34",
    subjectId: SubjectId.DB,
    text: "ACID қасиетіндегі \"Durability\" (Тұрақтылық) немен қамтамасыз етіледі?",
    options: [
      {
        id: "db-t02-b34-op1",
        text: "Транзакциялар журналымен (Transaction Log) және деректерді дискіге тұрақты жазумен"
      },
      {
        id: "db-t02-b34-op2",
        text: "SQL сұраныстарын жылдам сұрыптаумен"
      },
      {
        id: "db-t02-b34-op3",
        text: "Жедел жадтың (RAM) көлемін үлкейтумен"
      },
      {
        id: "db-t02-b34-op4",
        text: "Индекстерді дұрыс таңдаумен"
      },
      {
        id: "db-t02-b34-op5",
        text: "Транзакцияларды параллель орындау арқылы"
      },
      {
        id: "db-t02-b34-op6",
        text: "Деректерді кэштеу механизмдерімен"
      },
      {
        id: "db-t02-b34-op7",
        text: "Қолданушы құқықтарын шектеу арқылы"
      },
      {
        id: "db-t02-b34-op8",
        text: "Атомарлық операцияларды қамтамасыз етумен"
      }
    ],
    correctOptionIds: [
      "db-t02-b34-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b35",
    subjectId: SubjectId.DB,
    text: "SQL-дегі транзакцияны қолмен басқаруды бастау үшін қай команда қолданылады?",
    options: [
      {
        id: "db-t02-b35-op1",
        text: "BEGIN TRANSACTION немесе START TRANSACTION"
      },
      {
        id: "db-t02-b35-op2",
        text: "COMMIT TRANSACTION"
      },
      {
        id: "db-t02-b35-op3",
        text: "ROLLBACK TRANSACTION"
      },
      {
        id: "db-t02-b35-op4",
        text: "SET TRANSACTION"
      },
      {
        id: "db-t02-b35-op5",
        text: "OPEN TRANSACTION"
      },
      {
        id: "db-t02-b35-op6",
        text: "INIT TRANSACTION"
      },
      {
        id: "db-t02-b35-op7",
        text: "LAUNCH TRANSACTION"
      },
      {
        id: "db-t02-b35-op8",
        text: "CREATE TRANSACTION"
      }
    ],
    correctOptionIds: [
      "db-t02-b35-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b36",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Shared Lock\" (S-lock / Бірлескен құлып) не үшін қолданылады?",
    options: [
      {
        id: "db-t02-b36-op1",
        text: "Деректерді тек оқу (Read) операциялары үшін және басқа сессиялардың да оқуына рұқсат беру үшін"
      },
      {
        id: "db-t02-b36-op2",
        text: "Деректерді өзгерту және жою үшін"
      },
      {
        id: "db-t02-b36-op3",
        text: "Кестені толық өшіру үшін"
      },
      {
        id: "db-t02-b36-op4",
        text: "Бастапқы кілтті өзгерту үшін"
      },
      {
        id: "db-t02-b36-op5",
        text: "Деректерді оқуға тыйым салып, тек бір сессияның өзгертуіне рұқсат беру үшін"
      },
      {
        id: "db-t02-b36-op6",
        text: "Транзакция аяқталғанша басқа барлық сессиялардың деректерге қол жеткізуін толық блоктау үшін"
      },
      {
        id: "db-t02-b36-op7",
        text: "Деректерді оқу және сол уақытта басқа транзакциялардың жазу операциясын жүргізуіне мүмкіндік беру үшін"
      },
      {
        id: "db-t02-b36-op8",
        text: "Кесте құрылымын (schema) өзгерту кезінде деректердің тұтастығын сақтау үшін"
      }
    ],
    correctOptionIds: [
      "db-t02-b36-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b37",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Exclusive Lock\" (X-lock / Ерекше құлып) не істейді?",
    options: [
      {
        id: "db-t02-b37-op1",
        text: "Деректі өзгерту немесе жою (Write) кезінде қойылады, басқа ешбір сессияға оқуға да, жазуға да рұқсат бермейді"
      },
      {
        id: "db-t02-b37-op2",
        text: "Тек оқу амалдарына рұқсат береді"
      },
      {
        id: "db-t02-b37-op3",
        text: "Басқа транзакциялардың жұмысын жылдамдатады"
      },
      {
        id: "db-t02-b37-op4",
        text: "Тек уақытша кестелерге қойылады"
      },
      {
        id: "db-t02-b37-op5",
        text: "Деректі оқуға рұқсат береді, бірақ өзгертуге тыйым салады"
      },
      {
        id: "db-t02-b37-op6",
        text: "Тек сол транзакция ішіндегі деректерді қорғайды, басқа сессияларға кедергі жасамайды"
      },
      {
        id: "db-t02-b37-op7",
        text: "Деректерді индекстеу процесінде автоматты түрде қойылады және оқуды шектемейді"
      },
      {
        id: "db-t02-b37-op8",
        text: "Басқа транзакцияларға тек оқуға рұқсат беріп, жазу амалдарын ғана бұғаттайды"
      }
    ],
    correctOptionIds: [
      "db-t02-b37-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b38",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Lock Granularity\" (Құлыптың бөлшектенуі) деген не?",
    options: [
      {
        id: "db-t02-b38-op1",
        text: "Құлыпталатын объектінің өлшемі (мысалы, жеке жол, бет, экстент немесе бүкіл кесте)"
      },
      {
        id: "db-t02-b38-op2",
        text: "Құлыпты ашатын кілттің ұзындығы"
      },
      {
        id: "db-t02-b38-op3",
        text: "Транзакцияның орындалу уақыты"
      },
      {
        id: "db-t02-b38-op4",
        text: "Құлыптардың жалпы саны"
      },
      {
        id: "db-t02-b38-op5",
        text: "Құлыптың сақталу ұзақтығы мен мерзімі"
      },
      {
        id: "db-t02-b38-op6",
        text: "Транзакциялардың орындалу реттілігін анықтайтын алгоритм"
      },
      {
        id: "db-t02-b38-op7",
        text: "Деректерді шифрлау үшін қолданылатын кілт өлшемі"
      },
      {
        id: "db-t02-b38-op8",
        text: "Құлып қақтығыстарын шешудегі басымдық деңгейі"
      }
    ],
    correctOptionIds: [
      "db-t02-b38-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b39",
    subjectId: SubjectId.DB,
    text: "Deadlock (Өзара бұғатталу) жағдайын шешу үшін ДҚБЖ не істейді?",
    options: [
      {
        id: "db-t02-b39-op1",
        text: "Транзакциялардың бірін (Deadlock victim) таңдап, оны автоматты түрде ROLLBACK жасайды"
      },
      {
        id: "db-t02-b39-op2",
        text: "Серверді қайта іске қосады"
      },
      {
        id: "db-t02-b39-op3",
        text: "Екі транзакцияның да өзгерістерін бір мезгілде COMMIT жасайды"
      },
      {
        id: "db-t02-b39-op4",
        text: "Пайдаланушыға шешім қабылдауды ұсынады"
      },
      {
        id: "db-t02-b39-op5",
        text: "Екі транзакцияны да уақытша тоқтатып, пайдаланушының қолмен араласуын күтеді"
      },
      {
        id: "db-t02-b39-op6",
        text: "Барлық бұғатталған ресурстарды бір мезгілде босатып, транзакцияларды жалғастырады"
      },
      {
        id: "db-t02-b39-op7",
        text: "Deadlock анықталған сәтте екі транзакцияны да бірдей COMMIT жасап, деректерді сақтайды"
      },
      {
        id: "db-t02-b39-op8",
        text: "Транзакциялардың орындалу ретін өзгертіп, екеуін де кезекпен орындауды жалғастырады"
      }
    ],
    correctOptionIds: [
      "db-t02-b39-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b40",
    subjectId: SubjectId.DB,
    text: "Транзакциялар журналының (Transaction Log) басты рөлі қандай?",
    options: [
      {
        id: "db-t02-b40-op1",
        text: "Жүйе апатты түрде тоқтағаннан кейін (system crash) дерекқорды қалпына келтіру (Redo/Undo) үшін"
      },
      {
        id: "db-t02-b40-op2",
        text: "SQL сұраныстарын оңтайлы сақтау үшін"
      },
      {
        id: "db-t02-b40-op3",
        text: "Пайдаланушылардың құпия сөздерін сақтау үшін"
      },
      {
        id: "db-t02-b40-op4",
        text: "Деректерді сұрыптауды жеделдету үшін"
      },
      {
        id: "db-t02-b40-op5",
        text: "Дерекқордағы кестелер арасындағы сыртқы кілттерді (Foreign Keys) тексеру үшін"
      },
      {
        id: "db-t02-b40-op6",
        text: "Жүйенің жұмыс істеу жылдамдығын арттыру мақсатында деректерді кэштеу үшін"
      },
      {
        id: "db-t02-b40-op7",
        text: "Пайдаланушыларға дерекқорға қол жеткізу құқықтарын басқару үшін"
      },
      {
        id: "db-t02-b40-op8",
        text: "Деректерді дискідегі физикалық орналасу ретімен сақтау үшін"
      }
    ],
    correctOptionIds: [
      "db-t02-b40-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b41",
    subjectId: SubjectId.DB,
    text: "\"Two-Phase Commit\" (2PC / Екі фазалы фиксация) хаттамасы қай жерде қолданылады?",
    options: [
      {
        id: "db-t02-b41-op1",
        text: "Таратылған дерекқорлардағы (distributed databases) транзакциялардың бірыңғай орындалуын қамтамасыз ету үшін"
      },
      {
        id: "db-t02-b41-op2",
        text: "Жеке бір кестеге индекс құру үшін"
      },
      {
        id: "db-t02-b41-op3",
        text: "Деректерді қалыпқа келтіруде"
      },
      {
        id: "db-t02-b41-op4",
        text: "SQL сервердің жадын тазарту үшін"
      },
      {
        id: "db-t02-b41-op5",
        text: "Бір дерекқор ішіндегі көптеген пайдаланушылардың бір уақытта кіруін реттеу үшін"
      },
      {
        id: "db-t02-b41-op6",
        text: "Транзакцияларды орындау жылдамдығын арттыру мақсатында кэшті басқару үшін"
      },
      {
        id: "db-t02-b41-op7",
        text: "Дерекқор серверлері арасындағы желілік кідірістерді азайту үшін"
      },
      {
        id: "db-t02-b41-op8",
        text: "Қателіктер болған жағдайда деректерді автоматты түрде резервтік көшірмеден қалпына келтіру үшін"
      }
    ],
    correctOptionIds: [
      "db-t02-b41-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b42",
    subjectId: SubjectId.DB,
    text: "2PC хаттамасының екі фазасы қалай аталады?",
    options: [
      {
        id: "db-t02-b42-op1",
        text: "Дайындық фазасы (Prepare phase) және Фиксация фазасы (Commit phase)"
      },
      {
        id: "db-t02-b42-op2",
        text: "Бастау фазасы және Аяқтау фазасы"
      },
      {
        id: "db-t02-b42-op3",
        text: "Оқу фазасы және Жазу фазасы"
      },
      {
        id: "db-t02-b42-op4",
        text: "Бұғаттау фазасы және Бұғатты ашу фазасы"
      },
      {
        id: "db-t02-b42-op5",
        text: "Бастау фазасы және Аяқтау фазасы"
      },
      {
        id: "db-t02-b42-op6",
        text: "Тексеру фазасы және Орындау фазасы"
      },
      {
        id: "db-t02-b42-op7",
        text: "Құлыптау фазасы және Босату фазасы"
      },
      {
        id: "db-t02-b42-op8",
        text: "Синхрондау фазасы және Репликация фазасы"
      }
    ],
    correctOptionIds: [
      "db-t02-b42-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b43",
    subjectId: SubjectId.DB,
    text: "Екі фазалы құлыптау хаттамасының (2PL - Two-Phase Locking) мақсаты не?",
    options: [
      {
        id: "db-t02-b43-op1",
        text: "Транзакциялардың сериалдылығын (Serializability) және оқшаулануын қамтамасыз ету"
      },
      {
        id: "db-t02-b43-op2",
        text: "Транзакциялардың жылдам орындалуын қамтамасыз ету"
      },
      {
        id: "db-t02-b43-op3",
        text: "Дискідегі файлдарды оңтайландыру"
      },
      {
        id: "db-t02-b43-op4",
        text: "Резервтік көшіруді жеңілдету"
      },
      {
        id: "db-t02-b43-op5",
        text: "Транзакциялардың орындалу уақытын қысқарту арқылы жүйе өнімділігін арттыру"
      },
      {
        id: "db-t02-b43-op6",
        text: "Дерекқордағы деректердің физикалық сақтау көлемін азайту"
      },
      {
        id: "db-t02-b43-op7",
        text: "Қолданушыларға деректерге рұқсат етілмеген қатынауды болдырмау"
      },
      {
        id: "db-t02-b43-op8",
        text: "Транзакциялардың сәтсіз аяқталған жағдайда автоматты түрде қалпына келуін қамтамасыз ету"
      }
    ],
    correctOptionIds: [
      "db-t02-b43-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b44",
    subjectId: SubjectId.DB,
    text: "2PL (Two-Phase Locking) хаттамасының екі фазасы қандай?",
    options: [
      {
        id: "db-t02-b44-op1",
        text: "Өсу фазасы (Growing phase — құлыптарды алу) және Қысқару фазасы (Shrinking phase — құлыптарды босату)"
      },
      {
        id: "db-t02-b44-op2",
        text: "Оқу фазасы және Жазу фазасы"
      },
      {
        id: "db-t02-b44-op3",
        text: "Бастау фазасы және Commit фазасы"
      },
      {
        id: "db-t02-b44-op4",
        text: "Қате фазасы және Сәтті фазасы"
      },
      {
        id: "db-t02-b44-op5",
        text: "Белсендіру фазасы (Activation) және Тоқтату фазасы (Deactivation)"
      },
      {
        id: "db-t02-b44-op6",
        text: "Тексеру фазасы (Validation) және Орындау фазасы (Execution)"
      },
      {
        id: "db-t02-b44-op7",
        text: "Құлыптау фазасы (Locking) және Ашу фазасы (Unlocking)"
      },
      {
        id: "db-t02-b44-op8",
        text: "Дайындық фазасы (Preparation) және Бекіту фазасы (Confirmation)"
      }
    ],
    correctOptionIds: [
      "db-t02-b44-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b45",
    subjectId: SubjectId.DB,
    text: "\"Cascading Rollback\" (Каскадты кері қайтару) деген не?",
    options: [
      {
        id: "db-t02-b45-op1",
        text: "Бір транзакцияның тоқтатылуы (rollback) оның commit болмаған деректерін оқыған басқа транзакциялардың да кері қайтарылуына әкелуі"
      },
      {
        id: "db-t02-b45-op2",
        text: "Кестедегі бағынышты жолдардың автоматты жойылуы"
      },
      {
        id: "db-t02-b45-op3",
        text: "Сервердегі барлық кестелердің өшірілуі"
      },
      {
        id: "db-t02-b45-op4",
        text: "Жүйенің толықтай бұзылуы"
      },
      {
        id: "db-t02-b45-op5",
        text: "Бір кестеге енгізілген деректердің автоматты түрде басқа байланысқан кестелерге көшірілу процесі"
      },
      {
        id: "db-t02-b45-op6",
        text: "Транзакция орындалмаған жағдайда жүйенің алдыңғы сақталған нүктеге (checkpoint) толық қайта жүктелуі"
      },
      {
        id: "db-t02-b45-op7",
        text: "Қате орындалған SQL сұраныстың сервер логтарынан автоматты түрде өшірілу механизмі"
      },
      {
        id: "db-t02-b45-op8",
        text: "Бағынышты кестелердегі сыртқы кілттердің (foreign key) бос мәнге ауысуы арқылы тұтастықты сақтау"
      }
    ],
    correctOptionIds: [
      "db-t02-b45-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b46",
    subjectId: SubjectId.DB,
    text: "Дерекқорда каскадты кері қайтаруды болдырмау үшін қандай хаттама қолданылады?",
    options: [
      {
        id: "db-t02-b46-op1",
        text: "Қатаң екі фазалы құлыптау хаттамасы (Strict 2PL)"
      },
      {
        id: "db-t02-b46-op2",
        text: "Жай 2PL хаттамасы"
      },
      {
        id: "db-t02-b46-op3",
        text: "2PC хаттамасы"
      },
      {
        id: "db-t02-b46-op4",
        text: "WAL принципі"
      },
      {
        id: "db-t02-b46-op5",
        text: "Оңтайландырылған уақыт белгілеу хаттамасы"
      },
      {
        id: "db-t02-b46-op6",
        text: "Көп нұсқалы басқару хаттамасы (MVCC)"
      },
      {
        id: "db-t02-b46-op7",
        text: "Ажыратылған деңгейлі құлыптау хаттамасы"
      },
      {
        id: "db-t02-b46-op8",
        text: "Транзакциялық оқшаулау хаттамасы"
      }
    ],
    correctOptionIds: [
      "db-t02-b46-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b47",
    subjectId: SubjectId.DB,
    text: "\"Intent Lock\" (Мысалы, Intent Shared, Intent Exclusive) құлыптары не үшін қажет?",
    options: [
      {
        id: "db-t02-b47-op1",
        text: "Төменгі деңгейдегі құлып бар екенін жоғарғы деңгейде көрсету арқылы кесте деңгейіндегі құлыптауды тиімді ету үшін"
      },
      {
        id: "db-t02-b47-op2",
        text: "Транзакцияларды міндетті түрде өшіру үшін"
      },
      {
        id: "db-t02-b47-op3",
        text: "Деректерді жылдам шифрлау үшін"
      },
      {
        id: "db-t02-b47-op4",
        text: "Сыртқы кілттерді бұғаттау үшін"
      },
      {
        id: "db-t02-b47-op5",
        text: "Транзакциялар арасындағы деректерді толықтай шифрлау үшін"
      },
      {
        id: "db-t02-b47-op6",
        text: "Жүйедегі барлық құлыптарды бірден босату механизмі ретінде"
      },
      {
        id: "db-t02-b47-op7",
        text: "Дерекқордағы индекстерді автоматты түрде қайта құру үшін"
      },
      {
        id: "db-t02-b47-op8",
        text: "Пайдаланушының сұранысын орындау жылдамдығын екі есе арттыру үшін"
      }
    ],
    correctOptionIds: [
      "db-t02-b47-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b48",
    subjectId: SubjectId.DB,
    text: "Изоляция деңгейлерінің ішіндегі \"Snapshot Isolation\" (С냅шоттық оқшаулау) қалай жұмыс істейді?",
    options: [
      {
        id: "db-t02-b48-op1",
        text: "Әр транзакция деректердің өз басталған сәттегі нұсқасын (snapshot) оқиды, бұл оқу және жазу транзакциядарының бір-бірін күтпей орындалуына мүмкіндік береді"
      },
      {
        id: "db-t02-b48-op2",
        text: "Деректерді тек PDF түрінде оқиды"
      },
      {
        id: "db-t02-b48-op3",
        text: "Кестені толығымен құлыптап тастайды"
      },
      {
        id: "db-t02-b48-op4",
        text: "Транзакцияларды кезекпен орындайды"
      },
      {
        id: "db-t02-b48-op5",
        text: "Транзакция аяқталғанша барлық өзгерістерді уақытша кестеге сақтап, тек содан кейін негізгі кестеге жазуды күтеді"
      },
      {
        id: "db-t02-b48-op6",
        text: "Оқу операциялары орындалып жатқан кезде жазу операцияларын толығымен бұғаттап, деректердің өзгеруіне жол бермейді"
      },
      {
        id: "db-t02-b48-op7",
        text: "Әрбір оқу сұранысы деректердің ең соңғы коммиттелген нұсқасын міндетті түрде қайта жүктеуді талап етеді"
      },
      {
        id: "db-t02-b48-op8",
        text: "Жүйе транзакцияларды орындау ретін автоматты түрде өзгертіп, қақтығыстарды болдырмау үшін кезектілікті қатаң сақтайды"
      }
    ],
    correctOptionIds: [
      "db-t02-b48-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "478cc715-0b3e-4dd9-b786-271e6eb2461f",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Optimistic Concurrency Control\" (Оптимистік параллельдікті басқару) әдісі қашан қолданылады?",
    options: [
      {
        id: "25534991-45b9-4fcb-b6be-a698f00d238f",
        text: "Транзакциялар арасында қақтығыстар (conflict) өте сирек болады деп болғанда және құлыптарды аз қолдану қажет болғанда"
      },
      {
        id: "7489bf9e-cd7e-4c8b-921c-f9bc481862fa",
        text: "Қақтығыстар тым жиі орын алатын жағдайда"
      },
      {
        id: "c86feb93-2c8d-4805-9e6a-d7b8ddfc75b1",
        text: "Тек оқу операциялары мүлдем болмағанда"
      },
      {
        id: "a4772426-2354-46cb-ab5c-6fb56098472d",
        text: "Дерекқор көлемі кішкентай болғанда"
      },
      {
        id: "eb083707-8e20-4dc2-9287-8ec4407e4341",
        text: "Транзакциялар арасындағы қақтығыстар өте жиі орын алатын және деректердің тұтастығын қатаң сақтау міндетті болған жағдайда"
      },
      {
        id: "56fab120-3a4a-443c-8b6d-289d54035926",
        text: "Дерекқорға жазу операцияларынан гөрі оқу операциялары басым болмай, тек түзетулер жүргізілетін кезде"
      },
      {
        id: "d7a157cb-a5a0-4728-8512-3d7aaf3fd48e",
        text: "Жүйе ресурстары шектеулі болғандықтан, транзакцияларды орындау алдында міндетті түрде құлыптау талап етілгенде"
      },
      {
        id: "50a617f0-00af-4e00-b6ba-d8a256d3e3a3",
        text: "Пайдаланушылардың әрекеттері алдын ала белгісіз болғандықтан, әрбір өзгеріс кезінде автоматты түрде блоктау қажет болғанда"
      }
    ],
    correctOptionIds: [
      "25534991-45b9-4fcb-b6be-a698f00d238f"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "06727cd5-d1c1-4e66-89e4-f46e30b521ec",
    subjectId: SubjectId.DB,
    text: "\"Pessimistic Concurrency Control\" (Пессимистік параллельдікті басқару) әдісі қалай жұмыс істейді?",
    options: [
      {
        id: "05deb169-5fde-4181-847a-31c5d0d75699",
        text: "Деректерді оқу немесе өзгерту алдында міндетті түрде құлыптар (locks) қойып, қақтығыстардың алдын алады"
      },
      {
        id: "a55bb095-e3a8-4332-ad45-f1cd653e9ea3",
        text: "Транзакция аяқталған соң ғана қақтығыстарды тексереді"
      },
      {
        id: "4bcc03a7-b5b1-47bf-8e87-033fefcfba1e",
        text: "Құлыптарды мүлдем қолданбайды"
      },
      {
        id: "171e0198-85ca-49db-ab20-39fe7d4cf678",
        text: "Транзакцияларды автоматты түрде өшіреді"
      },
      {
        id: "4214fe27-7590-4872-a08a-c3e49234f799",
        text: "Қақтығыс орын алған жағдайда транзакцияны автоматты түрде қайта іске қосады"
      },
      {
        id: "3a4d8a7d-b5ab-4675-8811-0edc08c9bd87",
        text: "Деректерді өзгерту кезінде құлыптарды қолданбай, тек нұсқаларды (versioning) салыстырады"
      },
      {
        id: "99db0c78-6957-4b2d-99c6-f19577562792",
        text: "Транзакциялардың басымдылығын анықтау үшін уақыт белгілерін (timestamps) ғана пайдаланады"
      },
      {
        id: "62202100-ea7b-4c07-b2df-fa7f776e02bb",
        text: "Жүйе қақтығыстарды болжамайды және олар орын алған соң ғана әрекет етеді"
      }
    ],
    correctOptionIds: [
      "05deb169-5fde-4181-847a-31c5d0d75699"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b49",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Write-Ahead Logging\" (WAL) ережесі бойынша қандай әрекет бірінші орындалады?",
    options: [
      {
        id: "db-t02-b49-op1",
        text: "Өзгертілген деректер дискідегі дерекқор файлына (.mdf) жазылмас бұрын, олардың журналы дискідегі журнал файлына (.ldf) жазылуы керек"
      },
      {
        id: "db-t02-b49-op2",
        text: "Өзгерістер бірден дерекқор файлына жазылады, ал журнал кейін толтырылады"
      },
      {
        id: "db-t02-b49-op3",
        text: "Деректер тек жедел жадта (RAM) сақталады"
      },
      {
        id: "db-t02-b49-op4",
        text: "Сервер қайта іске қосылады"
      },
      {
        id: "db-t02-b49-op5",
        text: "Журнал файлына жазу тек дерекқор файлы сәтті жаңартылғаннан кейін ғана жүзеге асырылады"
      },
      {
        id: "db-t02-b49-op6",
        text: "Өзгерістер алдымен дерекқор файлына жазылып, содан кейін ғана журналға көшіріледі"
      },
      {
        id: "db-t02-b49-op7",
        text: "WAL ережесі бойынша журнал файлдары тек жедел жадта сақталып, дискіге жазылмайды"
      },
      {
        id: "db-t02-b49-op8",
        text: "Деректер мен журнал бір уақытта синхронды түрде дискіге жазылуы шарт"
      }
    ],
    correctOptionIds: [
      "db-t02-b49-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b50",
    subjectId: SubjectId.DB,
    text: "SQL Server-де деректердің тұтастығын қолдайтын \"CHECK\" шектеуіне қайсысы мысал бола алады?",
    options: [
      {
        id: "db-t02-b50-op1",
        text: "CONSTRAINT chk_salary CHECK (salary >= 1000)"
      },
      {
        id: "db-t02-b50-op2",
        text: "CONSTRAINT chk_salary PRIMARY KEY (salary)"
      },
      {
        id: "db-t02-b50-op3",
        text: "CONSTRAINT chk_salary FOREIGN KEY REFERENCES dept(id)"
      },
      {
        id: "db-t02-b50-op4",
        text: "CONSTRAINT chk_salary DEFAULT 1000"
      },
      {
        id: "db-t02-b50-op5",
        text: "CONSTRAINT chk_salary UNIQUE (salary)"
      },
      {
        id: "db-t02-b50-op6",
        text: "CONSTRAINT chk_salary CHECK EXISTS (SELECT * FROM employees)"
      },
      {
        id: "db-t02-b50-op7",
        text: "CONSTRAINT chk_salary NOT NULL (salary)"
      },
      {
        id: "db-t02-b50-op8",
        text: "CONSTRAINT chk_salary CHECK (salary = AVG(salary))"
      }
    ],
    correctOptionIds: [
      "db-t02-b50-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "21995c26-498e-4dd3-9f13-c114d62456f5",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Сыртқы кілт\" (Foreign Key) сілтеме жасайтын кестенің жолы жойылғанда, бағынышты кестедегі сыртқы кілт мәнін өзгеріссіз қалдырып, жоюға мүлдем тыйым салатын нұсқау қандай?",
    options: [
      {
        id: "97584ac0-b513-4a06-b0c7-d41e90debd64",
        text: "RESTRICT немесе NO ACTION"
      },
      {
        id: "7bee0214-bc50-40a6-bf6d-ebe432f2009f",
        text: "CASCADE"
      },
      {
        id: "81ba8645-f854-4f1a-a310-5a3ad2c857e4",
        text: "SET NULL"
      },
      {
        id: "cd394c50-8093-4fcf-97aa-02b12a9e8b59",
        text: "SET DEFAULT"
      },
      {
        id: "14c94e0a-5359-452f-8c24-16ae09f36b7d",
        text: "IGNORE және SKIP"
      },
      {
        id: "20fd664b-d29d-4dcf-a361-67672808ed1e",
        text: "DELETE және UPDATE"
      },
      {
        id: "d404acce-369a-4e54-a0c1-89549704f5a0",
        text: "LOCK және BLOCK"
      },
      {
        id: "d0f2f4e9-7be3-443d-b5fd-680d3144d2ae",
        text: "FORCE және DENY"
      }
    ],
    correctOptionIds: [
      "97584ac0-b513-4a06-b0c7-d41e90debd64"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "68f233d1-f9e2-48f1-a701-371eb5593440",
    subjectId: SubjectId.DB,
    text: "SQL-де транзакцияны сәтті аяқтау арқылы оның барлық өзгерістерін дерекқорға біржола жазу қай командамен орындалады?",
    options: [
      {
        id: "ac61e7be-410f-45d8-986c-6e3fa8a8e544",
        text: "COMMIT"
      },
      {
        id: "6e0b6016-e94b-457f-8d2e-7e83edf6df2d",
        text: "ROLLBACK"
      },
      {
        id: "b7c3bf52-4cef-4f00-9faa-cc432c82e56d",
        text: "SAVEPOINT"
      },
      {
        id: "e5a31a4f-5c5a-4901-8940-357d0b4c1f96",
        text: "START"
      },
      {
        id: "985906dc-d47a-4e04-8ea0-108cf54d19fa",
        text: "EXECUTE"
      },
      {
        id: "de21d83f-dbcf-477c-b33f-8e216e66a265",
        text: "FINALIZE"
      },
      {
        id: "2ddaed8d-9c97-43a8-a6af-cfe51e59867f",
        text: "CONFIRM"
      },
      {
        id: "15645109-29b6-4cf8-9812-09f7eeb1ae24",
        text: "APPLY"
      }
    ],
    correctOptionIds: [
      "ac61e7be-410f-45d8-986c-6e3fa8a8e544"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "ad3258a9-8de3-4558-85b3-2b8c1e9bac8f",
    subjectId: SubjectId.DB,
    text: "SQL-де транзакцияны сәтсіз деп танып, оның басталғаннан бергі барлық өзгерістерін кері қайтару қай командамен орындалады?",
    options: [
      {
        id: "143a6ab2-889f-4695-8814-065d611b240c",
        text: "ROLLBACK"
      },
      {
        id: "b8e587a9-ee75-4a23-8780-4222c14c6d12",
        text: "COMMIT"
      },
      {
        id: "5f7939d5-da37-4ea7-a67f-a98fdaac823a",
        text: "SAVEPOINT"
      },
      {
        id: "a0a4419c-478e-439d-8d2f-b2f4925827cf",
        text: "END"
      },
      {
        id: "8bc2ba0b-59dd-4917-97cc-a49bbee04629",
        text: "UNDO"
      },
      {
        id: "38444e2a-8c1f-434c-af4d-36c37cc02d1e",
        text: "REVERT"
      },
      {
        id: "d168a638-9b66-4727-88e9-08b04a95be65",
        text: "CANCEL"
      },
      {
        id: "314aa718-e68f-4cbe-a8cf-81d98e34f85f",
        text: "ABORT"
      }
    ],
    correctOptionIds: [
      "143a6ab2-889f-4695-8814-065d611b240c"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "01d9f86b-db55-4e02-9db0-f77ec309a777",
    subjectId: SubjectId.DB,
    text: "Егер транзакция орындалу барысында жүйеде электр қуаты өшіп қалса, ДҚБЖ қайта қосылғанда бұл транзакциямен не істейді?",
    options: [
      {
        id: "0c60dcae-e17d-4483-9b58-ed5fa11df416",
        text: "Транзакция аяқталмағандықтан, оның барлық әрекеттерін толығымен кері қайтарады (ROLLBACK)"
      },
      {
        id: "8ca3ed17-5306-45e7-ade5-747cf66e7721",
        text: "Оны сол тоқтаған жерінен жалғастырады"
      },
      {
        id: "ee642393-5261-4977-816a-e917ca9975d9",
        text: "Оны автоматты түрде COMMIT жасайды"
      },
      {
        id: "465a0506-495e-4766-99d7-ff5f4480b099",
        text: "Пайдаланушыдан сұрайды"
      },
      {
        id: "86d57bb3-73f9-4d92-993a-6e63dcfefac3",
        text: "Транзакцияны уақытша тоқтатылған күйінде сақтап, пайдаланушы қайта қосқанша күтеді"
      },
      {
        id: "73d32f46-bbf9-4b95-bd1f-4b0c26c15974",
        text: "Жүйе транзакцияның орындалған бөлігін сақтап қалып, тек аяқталмаған әрекеттерін ғана кері қайтарады"
      },
      {
        id: "96a355ac-d959-4e6a-b046-7bf665770585",
        text: "ДҚБЖ транзакцияны автоматты түрде жаңадан басынан бастап қайта орындайды"
      },
      {
        id: "a9105d11-7fd6-44dd-8d46-6f80715c380a",
        text: "Транзакция деректер базасында ілулі (pending) күйінде қалады және администратордың қолмен араласуын талап етеді"
      }
    ],
    correctOptionIds: [
      "0c60dcae-e17d-4483-9b58-ed5fa11df416"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b51",
    subjectId: SubjectId.DB,
    text: "ACID бойынша \"Consistency\" (Сәйкестік/Тұтастық) қасиеті бұзылған жағдайды анықтаңыз:",
    options: [
      {
        id: "db-t02-b51-op1",
        text: "Банктік аударымда бір шоттан ақша шығып, екінші шотқа түспей қалса"
      },
      {
        id: "db-t02-b51-op2",
        text: "Екі пайдаланушы бір мезгілде бір деректі оқыса"
      },
      {
        id: "db-t02-b51-op3",
        text: "Деректер дискіге сәтті жазылса"
      },
      {
        id: "db-t02-b51-op4",
        text: "Транзакция өз уақытында аяқталса"
      },
      {
        id: "db-t02-b51-op5",
        text: "Транзакция орындалып жатқанда дерекқорға басқа пайдаланушының қосылуына тыйым салынса"
      },
      {
        id: "db-t02-b51-op6",
        text: "Жүйе істен шыққан кезде барлық өзгерістер автоматты түрде кері қайтарылса (rollback)"
      },
      {
        id: "db-t02-b51-op7",
        text: "Деректерді жаңарту операциясы дискіге толықтай жазылып үлгерсе"
      },
      {
        id: "db-t02-b51-op8",
        text: "Екі транзакция бір уақытта орындалып, нәтижесі реттілікке байланысты өзгерсе"
      }
    ],
    correctOptionIds: [
      "db-t02-b51-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b52",
    subjectId: SubjectId.DB,
    text: "ACID қасиетіндегі \"Atomicity\" (Атомарлық) принципін бұзатын жағдай қандай?",
    options: [
      {
        id: "db-t02-b52-op1",
        text: "Транзакциядағы 5 SQL командасының тек 3-еуі ғана орындалып сақталып, қалғандары орындалмай қалса"
      },
      {
        id: "db-t02-b52-op2",
        text: "Барлық командалар толық орындалса"
      },
      {
        id: "db-t02-b52-op3",
        text: "Ешқандай команда орындалмаса"
      },
      {
        id: "db-t02-b52-op4",
        text: "Сұраныс баяу орындалса"
      },
      {
        id: "db-t02-b52-op5",
        text: "Транзакция орындалып жатқанда басқа пайдаланушы деректерді өзгертсе"
      },
      {
        id: "db-t02-b52-op6",
        text: "Транзакция аяқталған соң сервер кенеттен өшіп қалса"
      },
      {
        id: "db-t02-b52-op7",
        text: "Транзакциядағы командалар дұрыс ретпен орындалмаса"
      },
      {
        id: "db-t02-b52-op8",
        text: "Транзакцияның орындалу уақыты жүйелік шектеуден асып кетсе"
      }
    ],
    correctOptionIds: [
      "db-t02-b52-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "f5f6d5d5-1eeb-45ae-8c2e-71c7f4ea4c01",
    subjectId: SubjectId.DB,
    text: "SQL-де кесте құру кезінде баған мәндерінің тек белгілі бір тізімде болуын (мысалы, 'Male', 'Female') шектеу үшін қай нұсқауды қолданған дұрыс?",
    options: [
      {
        id: "b95b1a7d-caa6-49fd-bc19-fcba34328af9",
        text: "CHECK (gender IN ('Male', 'Female'))"
      },
      {
        id: "aa4492ae-a582-4607-9239-22fa4ae93a40",
        text: "UNIQUE (gender)"
      },
      {
        id: "688b5ed0-8d09-4093-927a-83f217dbf65f",
        text: "PRIMARY KEY (gender)"
      },
      {
        id: "a1563041-cf39-47be-b5e3-800369b8430e",
        text: "DEFAULT 'Male'"
      },
      {
        id: "ad28f7b3-5a4a-456f-aabf-0b364cf9fa00",
        text: "CONSTRAINT gender_list VALUES ('Male', 'Female')"
      },
      {
        id: "7c2c2f18-c049-4ecb-ae96-f729a5de5455",
        text: "ENUM (gender) = ('Male', 'Female')"
      },
      {
        id: "618bc2a3-0a16-4bcb-900e-50aadb5f9a31",
        text: "LIMIT gender TO ('Male', 'Female')"
      },
      {
        id: "9b23fc4a-d732-4b93-9fcd-81e4f187e25e",
        text: "VALIDATE gender IN ('Male', 'Female')"
      }
    ],
    correctOptionIds: [
      "b95b1a7d-caa6-49fd-bc19-fcba34328af9"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b53",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Dirty Read\" (Лас оқу) мәселесі неліктен қауіпті?",
    options: [
      {
        id: "db-t02-b53-op1",
        text: "Өйткені оқылған деректер кейінірек кері қайтарылып (rollback), шын мәнінде дерекқорда мүлдем болмаған болып шығуы мүмкін"
      },
      {
        id: "db-t02-b53-op2",
        text: "Сұраныстың жылдамдығын төмендететіндіктен"
      },
      {
        id: "db-t02-b53-op3",
        text: "Дерекқордағы кестелерді өшіретіндіктен"
      },
      {
        id: "db-t02-b53-op4",
        text: "Жаңа пайдаланушылардың тіркелуіне кедергі жасайтындықтан"
      },
      {
        id: "db-t02-b53-op5",
        text: "Өйткені ол дерекқор серверінің жадындағы бос орынды толықтай толтырып, жүйені тоқтатады"
      },
      {
        id: "db-t02-b53-op6",
        text: "Себебі бұл кезде деректер автоматты түрде шифрланып, оқылмайтын форматқа ауысады"
      },
      {
        id: "db-t02-b53-op7",
        text: "Өйткені ол бір уақыттағы басқа транзакциялардың барлығын бірден тоқтатуға (abort) мәжбүрлейді"
      },
      {
        id: "db-t02-b53-op8",
        text: "Себебі мұндай оқу кезінде дерекқор индекстері тұрақсызданып, іздеу нәтижелері қате шығады"
      }
    ],
    correctOptionIds: [
      "db-t02-b53-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b54",
    subjectId: SubjectId.DB,
    text: "\"Dirty Write\" (Лас жазу) деген не?",
    options: [
      {
        id: "db-t02-b54-op1",
        text: "Бір транзакцияның commit болмаған өзгерістерін екінші транзакцияның үстінен жазып жіберуі (бұған барлық изоляция деңгейлерінде қатаң тыйым салынады)"
      },
      {
        id: "db-t02-b54-op2",
        text: "Деректерді қате форматта жазу"
      },
      {
        id: "db-t02-b54-op3",
        text: "Транзакция журналын дискіге жазбау"
      },
      {
        id: "db-t02-b54-op4",
        text: "Индекстерді жаңарту кезіндегі қате"
      },
      {
        id: "db-t02-b54-op5",
        text: "Транзакция аяқталғаннан кейін дерекқордағы ескі мәндерді қалпына келтіру процесі"
      },
      {
        id: "db-t02-b54-op6",
        text: "Екі транзакцияның бір уақытта бір деректі оқуы нәтижесінде сәйкессіздіктің пайда болуы"
      },
      {
        id: "db-t02-b54-op7",
        text: "Жүйе істен шыққан кезде буфердегі өзгерістердің дискіге толық жазылмауы"
      },
      {
        id: "db-t02-b54-op8",
        text: "Бір транзакцияның екінші транзакция жасаған өзгерісті көрмей, ескі дерекпен жұмыс істеуі"
      }
    ],
    correctOptionIds: [
      "db-t02-b54-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b55",
    subjectId: SubjectId.DB,
    text: "Құлыптарды басқарудағы \"Lock Escalation\" (Құлыптарды ірілендіру) деген не?",
    options: [
      {
        id: "db-t02-b55-op1",
        text: "Жеке жолдар деңгейіндегі тым көп құлыптарды жүйе ресурсын үнемдеу үшін автоматты түрде кесте деңгейіндегі бір құлыпқа айналдыруы"
      },
      {
        id: "db-t02-b55-op2",
        text: "Құлыпты біржола өшіру"
      },
      {
        id: "db-t02-b55-op3",
        text: "Бірлескен құлыпты ерекше құлыпқа ауыстыру"
      },
      {
        id: "db-t02-b55-op4",
        text: "Deadlock-ты қолмен шешу"
      },
      {
        id: "db-t02-b55-op5",
        text: "Құлыптарды уақытша босату арқылы жүйенің өнімділігін арттыру әдісі"
      },
      {
        id: "db-t02-b55-op6",
        text: "Транзакцияны тоқтатпай, құлыптау деңгейін жолдан бетке (page) дейін төмендету процесі"
      },
      {
        id: "db-t02-b55-op7",
        text: "Қате орындалған сұраныстарды болдырмау үшін құлыптарды алдын ала резервтеу механизмі"
      },
      {
        id: "db-t02-b55-op8",
        text: "Бірнеше пайдаланушының бір дерекке қол жеткізуін рұқсат ету мақсатында құлыптарды бөлу"
      }
    ],
    correctOptionIds: [
      "db-t02-b55-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b56",
    subjectId: SubjectId.DB,
    text: "Дерекқорда транзакцияның изоляция деңгейін орнату үшін SQL-де қандай команда қолданылады?",
    options: [
      {
        id: "db-t02-b56-op1",
        text: "SET TRANSACTION ISOLATION LEVEL"
      },
      {
        id: "db-t02-b56-op2",
        text: "ALTER TRANSACTION LEVEL"
      },
      {
        id: "db-t02-b56-op3",
        text: "CREATE TRANSACTION LEVEL"
      },
      {
        id: "db-t02-b56-op4",
        text: "SET LEVEL ISOLATION"
      },
      {
        id: "db-t02-b56-op5",
        text: "CONFIGURE ISOLATION LEVEL"
      },
      {
        id: "db-t02-b56-op6",
        text: "SET TRANSACTION MODE"
      },
      {
        id: "db-t02-b56-op7",
        text: "ALTER SESSION ISOLATION"
      },
      {
        id: "db-t02-b56-op8",
        text: "DEFINE TRANSACTION ISOLATION"
      }
    ],
    correctOptionIds: [
      "db-t02-b56-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b57",
    subjectId: SubjectId.DB,
    text: "SQL Server-де әдепкі бойынша қолданылатын транзакциялардың оқшаулау (isolation) деңгейі қандай?",
    options: [
      {
        id: "db-t02-b57-op1",
        text: "READ COMMITTED"
      },
      {
        id: "db-t02-b57-op2",
        text: "READ UNCOMMITTED"
      },
      {
        id: "db-t02-b57-op3",
        text: "REPEATABLE READ"
      },
      {
        id: "db-t02-b57-op4",
        text: "SERIALIZABLE"
      },
      {
        id: "db-t02-b57-op5",
        text: "SNAPSHOT"
      },
      {
        id: "db-t02-b57-op6",
        text: "READ ONLY"
      },
      {
        id: "db-t02-b57-op7",
        text: "COMMITTED READ"
      },
      {
        id: "db-t02-b57-op8",
        text: "DIRTY READ"
      }
    ],
    correctOptionIds: [
      "db-t02-b57-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b58",
    subjectId: SubjectId.DB,
    text: "PostgreSQL-де әдепкі бойынша қолданылатын транзакциялардың оқшаулау деңгейі қандай?",
    options: [
      {
        id: "db-t02-b58-op1",
        text: "READ COMMITTED"
      },
      {
        id: "db-t02-b58-op2",
        text: "READ UNCOMMITTED"
      },
      {
        id: "db-t02-b58-op3",
        text: "REPEATABLE READ"
      },
      {
        id: "db-t02-b58-op4",
        text: "SERIALIZABLE"
      },
      {
        id: "db-t02-b58-op5",
        text: "SNAPSHOT"
      },
      {
        id: "db-t02-b58-op6",
        text: "READ ONLY"
      },
      {
        id: "db-t02-b58-op7",
        text: "AUTOCOMMIT"
      },
      {
        id: "db-t02-b58-op8",
        text: "WRITE COMMITTED"
      }
    ],
    correctOptionIds: [
      "db-t02-b58-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "3a5dfc1d-f9cb-4b31-ab57-3e5e0b467fd3",
    subjectId: SubjectId.DB,
    text: "Транзакцияның \"Durability\" (Тұрақтылық) қасиетін қамтамасыз ететін ДҚБЖ-ның негізгі процесі немесе файлы қандай?",
    options: [
      {
        id: "10a73bb9-2fa0-483b-af93-39a56e27945b",
        text: "Transaction Log (Транзакциялар журналы)"
      },
      {
        id: "d345d0fc-4565-4036-bdc1-2781f7b810af",
        text: "Query Optimizer"
      },
      {
        id: "4679afe1-dc60-41e1-8da0-c76ceda96dca",
        text: "Metadata Cache"
      },
      {
        id: "38e68ac7-c33c-4ea3-a92a-2c1533709ba9",
        text: "System Catalog"
      },
      {
        id: "a560f105-3d95-492b-9189-51429d0ae62c",
        text: "Жадтағы буферлер (Buffer Pool)"
      },
      {
        id: "b0cdb2f0-3339-4d11-9172-b64c37f13005",
        text: "Өлі жазбаларды тазалаушы процесс (Vacuum)"
      },
      {
        id: "ffc219e2-3db6-4e40-bf1b-739f629e512b",
        text: "Сұраныстарды орындау жоспары (Execution Plan)"
      },
      {
        id: "26c9713b-f883-4ffc-99ec-30d54c0cfc79",
        text: "Деректерді индекстеу құрылымы (B-Tree Index)"
      }
    ],
    correctOptionIds: [
      "10a73bb9-2fa0-483b-af93-39a56e27945b"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b59",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Lock Timeout\" параметрі не үшін қажет?",
    options: [
      {
        id: "db-t02-b59-op1",
        text: "Транзакция құлыпталған ресурсты шексіз күтіп тұрмай, белгілі бір уақыттан соң қатемен тоқтауы үшін"
      },
      {
        id: "db-t02-b59-op2",
        text: "Сұраныстардың жылдамдығын шектеу үшін"
      },
      {
        id: "db-t02-b59-op3",
        text: "Бастапқы кілтті автоматты түрде жаңарту үшін"
      },
      {
        id: "db-t02-b59-op4",
        text: "Пайдаланушының сессиясын жабу үшін"
      },
      {
        id: "db-t02-b59-op5",
        text: "Құлыпталған деректерді автоматты түрде көшіру үшін"
      },
      {
        id: "db-t02-b59-op6",
        text: "Транзакцияның орындалу уақытын жоспарлау үшін"
      },
      {
        id: "db-t02-b59-op7",
        text: "Дерекқорға қосылған пайдаланушылар санын шектеу үшін"
      },
      {
        id: "db-t02-b59-op8",
        text: "Құлыптау кезіндегі деректердің көлемін азайту үшін"
      }
    ],
    correctOptionIds: [
      "db-t02-b59-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b60",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Phantom Read\" (Елес оқу) аномалиясы қашан орын алады?",
    options: [
      {
        id: "db-t02-b60-op1",
        text: "Бір транзакция белгілі бір шарт бойынша бірнеше жолды оқығаннан кейін, екінші транзакция сол шартқа сай жаңа жол қосқанда (INSERT) және бірінші транзакция қайта оқығанда жаңа жолдар пайда болғанда"
      },
      {
        id: "db-t02-b60-op2",
        text: "Оқылған жолдардың бәрі жойылып кеткенде"
      },
      {
        id: "db-t02-b60-op3",
        text: "Бағанның аты өзгергенде"
      },
      {
        id: "db-t02-b60-op4",
        text: "Транзакция ортасында сервер өшкенде"
      },
      {
        id: "db-t02-b60-op5",
        text: "Бір транзакция жолды оқыған соң, екінші транзакция сол жолдың деректерін өзгерткенде (UPDATE) және бірінші транзакция қайта оқығанда мән басқаша болғанда"
      },
      {
        id: "db-t02-b60-op6",
        text: "Екі транзакция бір уақытта бірдей жолды жаңартуға (UPDATE) тырысып, біреуінің әрекеті сәтсіз аяқталғанда"
      },
      {
        id: "db-t02-b60-op7",
        text: "Транзакция ішінде оқылған жолдардың құрылымы (схема) басқа транзакция арқылы өзгертілгенде"
      },
      {
        id: "db-t02-b60-op8",
        text: "Дерекқор сервері кенеттен өшіп, транзакция толықтай жоғалып кеткенде"
      }
    ],
    correctOptionIds: [
      "db-t02-b60-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "bec620c7-d344-4ee0-9912-c63e5534acb5",
    subjectId: SubjectId.DB,
    text: "\"Two-Phase Locking\" (2PL) принципі бойынша, егер транзакция бір құлыпты босатса (Shrinking phase басталса), ол жаңа құлып ала ала ма?",
    options: [
      {
        id: "c13ea266-8e6b-459d-95c6-c05f7d8231ba",
        text: "Жоқ, 2PL ережесі бойынша қысқару фазасы басталған соң жаңа құлып алуға мүлдем тыйым салынады"
      },
      {
        id: "7c24f681-59ae-4471-a519-b10bf52b9c23",
        text: "Иә, кез келген уақытта ала береді"
      },
      {
        id: "5f02d924-2a6a-4af0-8acf-64a60142f799",
        text: "Тек бірлескен (Shared) құлыптарды ғана ала алады"
      },
      {
        id: "600ab47b-f741-4a58-9cb5-86c03d42a5fc",
        text: "Тек басты кесте үшін ала алады"
      },
      {
        id: "3b03d8a2-5fe9-433b-a581-cf6039114aea",
        text: "Иә, егер жаңа құлып бұрыннан бар құлыпқа қайшы келмесе алуға рұқсат етіледі"
      },
      {
        id: "e571c892-d78a-47f9-a2c0-0afaf6276cdb",
        text: "Жоқ, бірақ тек оқу операциялары үшін жаңа құлып алуға болады"
      },
      {
        id: "0b55eeae-ec37-4a91-a601-a1f99212db7e",
        text: "Иә, егер транзакция әлі де COMMIT немесе ROLLBACK жасамаса, құлып ала береді"
      },
      {
        id: "a4dfd68a-a1c9-4cd1-9a33-7f37b4e11f41",
        text: "Жоқ, тек басқа транзакциялар құлыпты толық босатқаннан кейін ғана жаңа құлып алуға болады"
      }
    ],
    correctOptionIds: [
      "c13ea266-8e6b-459d-95c6-c05f7d8231ba"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b61",
    subjectId: SubjectId.DB,
    text: "ACID-тегі \"Consistency\" (Сәйкестік) қасиетін қамтамасыз етуге кім немесе не жауапты?",
    options: [
      {
        id: "db-t02-b61-op1",
        text: "ДҚБЖ (шектеулер арқылы) және қолданбалы бағдарламашы (дұрыс бизнес логика жазу арқылы)"
      },
      {
        id: "db-t02-b61-op2",
        text: "Тек операциялық жүйе"
      },
      {
        id: "db-t02-b61-op3",
        text: "Тек компьютердің жедел жады (RAM)"
      },
      {
        id: "db-t02-b61-op4",
        text: "Тек қана дерекқор әкімшісі (DBA)"
      },
      {
        id: "db-t02-b61-op5",
        text: "Тек қана желілік протоколдар мен қауіпсіздік брандмауэрлері"
      },
      {
        id: "db-t02-b61-op6",
        text: "Автоматты түрде дерекқорды көшіру (репликация) жүйесі"
      },
      {
        id: "db-t02-b61-op7",
        text: "Тек транзакциялардың атомарлылығын (Atomicity) қамтамасыз ететін механизм"
      },
      {
        id: "db-t02-b61-op8",
        text: "Дерекқор серверінің аппараттық құрылғыларының жылдамдығы"
      }
    ],
    correctOptionIds: [
      "db-t02-b61-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b62",
    subjectId: SubjectId.DB,
    text: "\"Dirty Read\" (Лас оқу) аномалиясы қай оқшаулау деңгейінде мүлдем болмайды?",
    options: [
      {
        id: "db-t02-b62-op1",
        text: "READ COMMITTED және одан жоғары барлық деңгейлерде"
      },
      {
        id: "db-t02-b62-op2",
        text: "Тек SERIALIZABLE деңгейінде ғана"
      },
      {
        id: "db-t02-b62-op3",
        text: "READ UNCOMMITTED деңгейінде"
      },
      {
        id: "db-t02-b62-op4",
        text: "Ешбір деңгейде қорғалмаған"
      },
      {
        id: "db-t02-b62-op5",
        text: "Тек REPEATABLE READ деңгейінде ғана"
      },
      {
        id: "db-t02-b62-op6",
        text: "READ COMMITTED және REPEATABLE READ деңгейлерінде, бірақ SERIALIZABLE-да жоқ"
      },
      {
        id: "db-t02-b62-op7",
        text: "Барлық оқшаулау деңгейлерінде, тіпті READ UNCOMMITTED-те де болмайды"
      },
      {
        id: "db-t02-b62-op8",
        text: "Тек SERIALIZABLE және READ UNCOMMITTED деңгейлерінде"
      }
    ],
    correctOptionIds: [
      "db-t02-b62-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "72dc0a27-5730-42f8-9bf7-4195fa2153c6",
    subjectId: SubjectId.DB,
    text: "Егер екі транзакция бір мезгілде бір деректі өзгертуге (UPDATE) әрекет жасаса, ДҚБЖ олардың қақтығысын қалай реттейді?",
    options: [
      {
        id: "15f5a9e2-68a2-4a5a-ba00-822879f99ca5",
        text: "Бірінші транзакция орындалып жатқанда дерекке Exclusive Lock қояды, ал екінші транзакция біріншісі аяқталғанша күтіп тұрады"
      },
      {
        id: "14ecccdf-e571-4006-9008-0a0e22dbca5b",
        text: "Екі өзгерісті де қабылдамай қате шығарады"
      },
      {
        id: "72874269-ee68-44da-89a5-561b6dacd1ba",
        text: "Екі өзгерісті де араластырып бірден жазады"
      },
      {
        id: "08dce274-c25f-4f3f-8e83-9cdb7a1a37ad",
        text: "Транзакциялардың бірін өшіріп тастайды"
      },
      {
        id: "cf1878e0-44cc-4085-808c-da8630fddedd",
        text: "Екі транзакция да деректі бір уақытта өзгерту үшін Shared Lock қолданады"
      },
      {
        id: "ac883907-031b-405b-8d48-3c60d9276311",
        text: "ДҚБЖ екі транзакцияны кездейсоқ таңдап, екіншісін автоматты түрде тоқтатады"
      },
      {
        id: "d3597de3-b326-405c-b599-70ae01510d2b",
        text: "Транзакциялардың орындалу реті жүйелік уақыт бойынша анықталып, екеуі де кезекпен орындалады"
      },
      {
        id: "9c7413d2-e8e9-4260-b98d-6b5b983bf9bf",
        text: "Деректердің тұтастығын сақтау үшін ДҚБЖ екі өзгерісті де жоққа шығарып, деректі бастапқы күйіне қайтарады"
      }
    ],
    correctOptionIds: [
      "15f5a9e2-68a2-4a5a-ba00-822879f99ca5"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b63",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Inconsistent Read\" (Сәйкессіз оқу) мәселесі нені білдіреді?",
    options: [
      {
        id: "db-t02-b63-op1",
        text: "Бір сұраныс барысында оқылған деректердің басқа параллель транзакциялардың әсерінен әртүрлі уақытта әртүрлі мән көрсетуі"
      },
      {
        id: "db-t02-b63-op2",
        text: "Деректердің қате форматта оқылуы"
      },
      {
        id: "db-t02-b63-op3",
        text: "Сұраныстың нәтижесі мүлдем шықпауы"
      },
      {
        id: "db-t02-b63-op4",
        text: "Транзакция журналының оқылмауы"
      },
      {
        id: "db-t02-b63-op5",
        text: "Транзакция орындалып болған соң дерекқорға жазылмаған деректердің жоғалуы"
      },
      {
        id: "db-t02-b63-op6",
        text: "Екі параллель транзакцияның бір уақытта бір деректі өзгертуге тырысуы"
      },
      {
        id: "db-t02-b63-op7",
        text: "Дерекқор серверінің жадысы толып, оқу операциясының тоқтап қалуы"
      },
      {
        id: "db-t02-b63-op8",
        text: "Бір транзакция ішіндегі есептеулердің дұрыс орындалмауынан нәтиженің қате шығуы"
      }
    ],
    correctOptionIds: [
      "db-t02-b63-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b64",
    subjectId: SubjectId.DB,
    text: "SQL-дегі \"ON DELETE SET DEFAULT\" сыртқы кілт нұсқауы не істейді?",
    options: [
      {
        id: "db-t02-b64-op1",
        text: "Басты кестедегі жол жойылғанда, бағынышты кестедегі сәйкес сыртқы кілттің мәндерін оның әдепкі (DEFAULT) мәніне теңестіреді"
      },
      {
        id: "db-t02-b64-op2",
        text: "Бағынышты кестедегі жолдарды толық жояды"
      },
      {
        id: "db-t02-b64-op3",
        text: "Сыртқы кілт мәнін NULL-ге ауыстырады"
      },
      {
        id: "db-t02-b64-op4",
        text: "Басты кестедегі жоюды болдырмайды"
      },
      {
        id: "db-t02-b64-op5",
        text: "Басты кестедегі жол жойылғанда, бағынышты кестедегі сәйкес жолдарды автоматты түрде жаңартып, деректерді көшіреді"
      },
      {
        id: "db-t02-b64-op6",
        text: "Сыртқы кілт мәнін басты кестедегі соңғы жойылған жазбаның идентификаторына ауыстырады"
      },
      {
        id: "db-t02-b64-op7",
        text: "Бағынышты кестеге жаңа жол қосып, онда әдепкі мәнмен толтырылған көшірме жасайды"
      },
      {
        id: "db-t02-b64-op8",
        text: "Жою операциясы орындалғаннан кейін бағынышты кестенің барлық индекстерін қайта құрады"
      }
    ],
    correctOptionIds: [
      "db-t02-b64-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b65",
    subjectId: SubjectId.DB,
    text: "ACID қасиетінің толық атауы қандай?",
    options: [
      {
        id: "db-t02-b65-op1",
        text: "Atomicity, Consistency, Isolation, Durability"
      },
      {
        id: "db-t02-b65-op2",
        text: "Accuracy, Consistency, Integration, Database"
      },
      {
        id: "db-t02-b65-op3",
        text: "Atomicity, Concurrency, Isolation, Distribution"
      },
      {
        id: "db-t02-b65-op4",
        text: "Access, Control, Integrity, Data"
      },
      {
        id: "db-t02-b65-op5",
        text: "Атомарлылық, Келісімділік, Оқшаулау, Тұрақтылық"
      },
      {
        id: "db-t02-b65-op6",
        text: "Дәлдік, Сәйкестік, Интеграция, Дерекқор"
      },
      {
        id: "db-t02-b65-op7",
        text: "Қолжетімділік, Бақылау, Тұтастық, Деректер"
      },
      {
        id: "db-t02-b65-op8",
        text: "Атомарлылық, Параллельдік, Оқшаулау, Бөлу"
      }
    ],
    correctOptionIds: [
      "db-t02-b65-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "35f2c6f6-bf1d-4f12-afcd-15013618409d",
    subjectId: SubjectId.DB,
    text: "Дерекқор транзакциясы сәтті аяқталып COMMIT болған соң, жүйе апатқа ұшыраса да (crash) деректердің жоғалмауы қай қасиетке жатады?",
    options: [
      {
        id: "02e14d63-abb1-4cc3-b2a6-a50f3f62b2a5",
        text: "Durability (Тұрақтылық)"
      },
      {
        id: "e9750dee-eebd-4996-80ec-5a885d05f496",
        text: "Atomicity"
      },
      {
        id: "e7e7b400-41ea-4fcb-919c-9a74514b4954",
        text: "Consistency"
      },
      {
        id: "74a2d936-847d-4630-b3da-8e3151d34074",
        text: "Isolation"
      },
      {
        id: "6cbdf64b-991a-4f4e-85ec-007436d12fe4",
        text: "Жеделдік (Performance)"
      },
      {
        id: "79098c27-362f-4a76-80c3-8be7be4a4902",
        text: "Қайтымдылық (Reversibility)"
      },
      {
        id: "95b5cca7-b3dc-4364-86cc-f809560a5f0e",
        text: "Оқшаулау (Isolation)"
      },
      {
        id: "5b935353-979c-4a3d-b7c8-a373ab602dde",
        text: "Біртектілік (Uniformity)"
      }
    ],
    correctOptionIds: [
      "02e14d63-abb1-4cc3-b2a6-a50f3f62b2a5"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "78b7c8b1-6e83-4a89-82c9-98d3a6da1f24",
    subjectId: SubjectId.DB,
    text: "Транзакциялардың параллель орындалуын басқарудағы \"Timestamp Ordering\" (Уақыт белгісі бойынша реттеу) әдісі не істейді?",
    options: [
      {
        id: "f60d364b-be92-466e-9e9a-c8bd1b3fe772",
        text: "Әр транзакцияға бірегей уақыт белгісін (timestamp) беріп, оларды осы белгінің өсу ретімен орындайды"
      },
      {
        id: "1b4c9e39-91c2-4c47-b4f1-5158f94b13bf",
        text: "Транзакцияларды тек түнде орындайды"
      },
      {
        id: "ee3af141-a8c2-431d-9511-bc01fc8ce102",
        text: "Транзакцияларды құлыптар арқылы бұғаттайды"
      },
      {
        id: "5dad1865-964a-4f95-8316-e9ba028a3ca2",
        text: "Сұраныстарды тек 5 секунд сайын орындайды"
      },
      {
        id: "411a44be-9923-46f9-b7da-1ba61ecc8b68",
        text: "Транзакцияларды орындау ретін анықтау үшін жүйе кездейсоқ сандар генераторын қолданады"
      },
      {
        id: "7b437d2a-e1e9-4703-a482-14a132e7ac67",
        text: "Әр транзакцияға басымдық деңгейі беріліп, ең жоғары басымдығы бары бірінші орындалады"
      },
      {
        id: "9c20407e-4e5d-4485-aba4-e1a6b92eff25",
        text: "Транзакциялар деректерге өзгеріс енгізген соң ғана уақыт белгісі тағайындалады"
      },
      {
        id: "159a9723-0f2e-4da7-8ed9-7045264a6ddc",
        text: "Уақыт белгісі тек оқу операциялары үшін қолданылып, жазу операциялары құлыптау арқылы реттеледі"
      }
    ],
    correctOptionIds: [
      "f60d364b-be92-466e-9e9a-c8bd1b3fe772"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b66",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Locking Protocol\" (Құлыптау хаттамасы) деген не?",
    options: [
      {
        id: "db-t02-b66-op1",
        text: "Транзакциялардың параллель жұмыс істеуі кезінде қақтығыстарды болдырмау үшін құлыптарды алу және босату ережелерінің жиынтығы"
      },
      {
        id: "db-t02-b66-op2",
        text: "Пайдаланушыларды жүйеге кіргізу хаттамасы"
      },
      {
        id: "db-t02-b66-op3",
        text: "Деректерді желі арқылы жіберу ережелері"
      },
      {
        id: "db-t02-b66-op4",
        text: "Резервтік көшіруді басқаратын программа"
      },
      {
        id: "db-t02-b66-op5",
        text: "Дерекқорға рұқсат етілмеген кіруді болдырмайтын қауіпсіздік шифрлау алгоритмі"
      },
      {
        id: "db-t02-b66-op6",
        text: "Транзакциялар орындалғаннан кейін деректерді тұрақты жадқа сақтау механизмі"
      },
      {
        id: "db-t02-b66-op7",
        text: "Дерекқор кестелерінің құрылымын өзгертпей, индекстерді автоматты түрде жаңарту әдісі"
      },
      {
        id: "db-t02-b66-op8",
        text: "Жүйе істен шыққан жағдайда транзакцияларды қайта бастау үшін журналды талдау процесі"
      }
    ],
    correctOptionIds: [
      "db-t02-b66-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b67",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Intention Lock\" (Ниет құлыптары) қандай деңгейде қойылады?",
    options: [
      {
        id: "db-t02-b67-op1",
        text: "Кесте немесе деректер парағы (Page) деңгейінде"
      },
      {
        id: "db-t02-b67-op2",
        text: "Тек жеке бағандар деңгейінде"
      },
      {
        id: "db-t02-b67-op3",
        text: "Дерекқордың бүкіл сервері деңгейінде"
      },
      {
        id: "db-t02-b67-op4",
        text: "Тек сыртқы кілттер деңгейінде"
      },
      {
        id: "db-t02-b67-op5",
        text: "Тек жеке жолдар (Row) деңгейінде"
      },
      {
        id: "db-t02-b67-op6",
        text: "Тек индекстер деңгейінде"
      },
      {
        id: "db-t02-b67-op7",
        text: "Транзакция журналы (Log) деңгейінде"
      },
      {
        id: "db-t02-b67-op8",
        text: "Пайдаланушы сессиясы деңгейінде"
      }
    ],
    correctOptionIds: [
      "db-t02-b67-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "64b50008-82ef-4e7c-8d12-f8b43747062b",
    subjectId: SubjectId.DB,
    text: "SQL-де транзакцияның орындалуы барысында SAVEPOINT құрылғаннан кейін, оған қайта оралу үшін қандай команда жазылады?",
    options: [
      {
        id: "3a7e089a-59c7-480f-a33f-9de3bc3a5ea7",
        text: "ROLLBACK TO savepoint_name"
      },
      {
        id: "f768da4c-1574-435d-b837-7bd658ef895b",
        text: "COMMIT TO savepoint_name"
      },
      {
        id: "a7b9fb00-21b3-4dce-966a-7a128652e86b",
        text: "RETURN TO savepoint_name"
      },
      {
        id: "bef56ff1-8e0a-4702-9199-ed4f8b6836f8",
        text: "RESET TO savepoint_name"
      },
      {
        id: "9745b112-2423-45a5-80c2-a99cb153b4f6",
        text: "SAVE TO savepoint_name"
      },
      {
        id: "185793da-d1fe-4566-b7c9-afda4c09a4fb",
        text: "UNDO savepoint_name"
      },
      {
        id: "d7fc92ab-9cf8-4725-97d5-55bd44c1f3e5",
        text: "BACK TO savepoint_name"
      },
      {
        id: "da885fbe-a65f-4ccc-a144-bd6a63f5bd95",
        text: "REVERT savepoint_name"
      }
    ],
    correctOptionIds: [
      "3a7e089a-59c7-480f-a33f-9de3bc3a5ea7"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b68",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Write Lock\" (Жазу құлыбы) деп қай құлыпты атайды?",
    options: [
      {
        id: "db-t02-b68-op1",
        text: "Exclusive Lock (Ерекше құлып)"
      },
      {
        id: "db-t02-b68-op2",
        text: "Shared Lock (Бірлескен құлып)"
      },
      {
        id: "db-t02-b68-op3",
        text: "Intent Lock"
      },
      {
        id: "db-t02-b68-op4",
        text: "Schema Lock"
      },
      {
        id: "db-t02-b68-op5",
        text: "Оқу құлыбы (Read Lock)"
      },
      {
        id: "db-t02-b68-op6",
        text: "Кесте құлыбы (Table Lock)"
      },
      {
        id: "db-t02-b68-op7",
        text: "Жолдық құлып (Row Lock)"
      },
      {
        id: "db-t02-b68-op8",
        text: "Өзгерту құлыбы (Update Lock)"
      }
    ],
    correctOptionIds: [
      "db-t02-b68-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b69",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Read Lock\" (Оқу құлыбы) деп қай құлыпты атайды?",
    options: [
      {
        id: "db-t02-b69-op1",
        text: "Shared Lock (Бірлескен құлып)"
      },
      {
        id: "db-t02-b69-op2",
        text: "Exclusive Lock (Ерекше құлып)"
      },
      {
        id: "db-t02-b69-op3",
        text: "Intent Lock"
      },
      {
        id: "db-t02-b69-op4",
        text: "Row Lock"
      },
      {
        id: "db-t02-b69-op5",
        text: "Жазу құлыбы (Write Lock)"
      },
      {
        id: "db-t02-b69-op6",
        text: "Толық құлып (Full Lock)"
      },
      {
        id: "db-t02-b69-op7",
        text: "Кесте құлыбы (Table Lock)"
      },
      {
        id: "db-t02-b69-op8",
        text: "Өзгерту құлыбы (Update Lock)"
      }
    ],
    correctOptionIds: [
      "db-t02-b69-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "449c241b-cba9-4280-a7f4-3f44fc95d184",
    subjectId: SubjectId.DB,
    text: "Егер транзакция тек деректерді оқумен ғана айналысса (Read-only), оған қандай изоляция деңгейі ең қауіпсіз әрі жылдам болады?",
    options: [
      {
        id: "22561635-a4f4-445f-8a7f-ee8f2d60c7c1",
        text: "READ COMMITTED немесе READ UNCOMMITTED (егер лас оқу маңызды болмаса)"
      },
      {
        id: "1631d159-3108-4617-9f55-2763af5483e0",
        text: "Міндетті түрде SERIALIZABLE"
      },
      {
        id: "b368ffca-5d4d-4bbe-8802-bb2a3c6a7332",
        text: "REPEATABLE READ"
      },
      {
        id: "0d8f9fac-3fe8-4179-bf16-352f62505664",
        text: "Оқшаулау деңгейін қолданбау керек"
      },
      {
        id: "11789aa8-5876-4036-81e8-f073031a53ed",
        text: "Тек SERIALIZABLE деңгейі деректердің толық тұтастығын кепілдендіреді"
      },
      {
        id: "df3d4e44-3b1a-4b0a-988b-231600a3a3cf",
        text: "Оқу операциялары үшін ешқандай изоляция деңгейі қажет емес, өйткені деректер өзгермейді"
      },
      {
        id: "d16074e4-82d9-41c0-8e15-6ff6310cbe3a",
        text: "READ UNCOMMITTED әрқашан қауіпсіз, себебі ол блоктауды толығымен жояды"
      },
      {
        id: "3ef7b5cf-5e66-4a00-9aa3-b7dfa1d1ff5d",
        text: "Ең жылдам нәтиже алу үшін міндетті түрде REPEATABLE READ таңдау керек"
      }
    ],
    correctOptionIds: [
      "22561635-a4f4-445f-8a7f-ee8f2d60c7c1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b70",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Deadlock Detection\" (Deadlock-ты анықтау) алгоритмі қалай жұмыс істейді?",
    options: [
      {
        id: "db-t02-b70-op1",
        text: "Транзакциялардың күту графынан (Wait-For Graph) циклдарды іздейді"
      },
      {
        id: "db-t02-b70-op2",
        text: "Сервердегі бос жад көлемін тексереді"
      },
      {
        id: "db-t02-b70-op3",
        text: "SQL сұраныстардың синтаксисін тексереді"
      },
      {
        id: "db-t02-b70-op4",
        text: "Пайдаланушылардың санын есептейді"
      },
      {
        id: "db-t02-b70-op5",
        text: "Транзакциялардың орындалу уақытына қарай ең ұзақ күткенін автоматты түрде тоқтатады"
      },
      {
        id: "db-t02-b70-op6",
        text: "Барлық белсенді транзакцияларға кезекпен құлыптау (locking) рұқсатын береді"
      },
      {
        id: "db-t02-b70-op7",
        text: "Дерекқордағы индекстердің тұтастығын тексеру арқылы қақтығыстарды шешеді"
      },
      {
        id: "db-t02-b70-op8",
        text: "Жүйелік журналдардан (logs) соңғы өзгерістерді кері қайтару (rollback) арқылы талдайды"
      }
    ],
    correctOptionIds: [
      "db-t02-b70-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b71",
    subjectId: SubjectId.DB,
    text: "Дерекқорда Deadlock-тың алдын алудың (Deadlock Prevention) қандай екі негізгі әдісі бар?",
    options: [
      {
        id: "db-t02-b71-op1",
        text: "Wait-Die және Wound-Wait әдістері"
      },
      {
        id: "db-t02-b71-op2",
        text: "Lock-Unlock және Commit-Rollback әдістері"
      },
      {
        id: "db-t02-b71-op3",
        text: "Read-Write және Share-Exclusive әдістері"
      },
      {
        id: "db-t02-b71-op4",
        text: "First-In және First-Out әдістері"
      },
      {
        id: "db-t02-b71-op5",
        text: "Timestamp-Ordering және Two-Phase Locking әдістері"
      },
      {
        id: "db-t02-b71-op6",
        text: "Resource-Holding және Resource-Releasing әдістері"
      },
      {
        id: "db-t02-b71-op7",
        text: "Priority-Inversion және Starvation-Free әдістері"
      },
      {
        id: "db-t02-b71-op8",
        text: "Serial-Schedule және Concurrent-Access әдістері"
      }
    ],
    correctOptionIds: [
      "db-t02-b71-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "1837ff98-a8c7-4996-b793-2ca712349de3",
    subjectId: SubjectId.DB,
    text: "\"Wait-Die\" Deadlock prevention схемасында ескі (жұмыс істеп тұрғанына көп болған) транзакция жаңа транзакция құлыптаған ресурсты сұрағанда не істейді?",
    options: [
      {
        id: "9d2d8b68-4dde-4c7e-82d4-1b11c0f91d0b",
        text: "Ескі транзакция күтеді (Waits)"
      },
      {
        id: "8156161a-e744-4e82-b3f4-e5cc19b1cbbf",
        text: "Ескі транзакция бірден өледі (Dies)"
      },
      {
        id: "528a7d33-d72d-4fc1-aca6-7917475912e8",
        text: "Жаңа транзакция ROLLBACK жасалады"
      },
      {
        id: "576029d9-b752-4821-9632-95689e0eab7d",
        text: "Екі транзакция да бір мезгілде аяқталады"
      },
      {
        id: "a95cb012-8bae-4d36-ad46-60d1322c944a",
        text: "Ескі транзакция жаңа транзакцияны күштеп тоқтатады (Abort)"
      },
      {
        id: "0da039fc-5a36-4e8e-ab13-34e69a237425",
        text: "Екі транзакция да құлыпты босатып, қайта іске қосылады"
      },
      {
        id: "53ddf351-5eae-4d18-a708-ee2a05508d5c",
        text: "Жүйе ескі транзакцияға басымдық беріп, ресурсты мәжбүрлеп алады"
      },
      {
        id: "8a0a3227-6ff9-4785-82a6-2702ee3122b6",
        text: "Ескі транзакция уақытша кезекке тұрып, кейін автоматты түрде өледі"
      }
    ],
    correctOptionIds: [
      "9d2d8b68-4dde-4c7e-82d4-1b11c0f91d0b"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "17d720ff-2eab-45f8-b216-fdaefecf3490",
    subjectId: SubjectId.DB,
    text: "\"Wound-Wait\" Deadlock prevention схемасында ескі транзакция жаңа транзакция құлыптаған ресурсты сұраса не істейді?",
    options: [
      {
        id: "a0085c03-653e-4ae8-b188-ce341b4234ab",
        text: "Жаңа транзакцияны тоқтатып кері қайтарады (Wounds/Aborts) немесе оның құлыбын тартып алады"
      },
      {
        id: "922ead6a-938d-40dd-a582-43c63d287267",
        text: "Ескі транзакция бірден өледі"
      },
      {
        id: "41937585-dd80-443c-89cc-d874763d4fa5",
        text: "Ескі транзакция күтеді"
      },
      {
        id: "36749290-4da5-46e6-bbd1-ad8e96cbae31",
        text: "Ешқандай әрекет орындалмайды"
      },
      {
        id: "12f83be3-51f9-4202-b985-4e6b4c586216",
        text: "Ескі транзакция ресурсты босатқанша күту режиміне ауысады"
      },
      {
        id: "9281e50b-650a-4290-85b3-82e1f6c77a75",
        text: "Жаңа транзакция ескі транзакцияның орындалуын уақытша тоқтата тұрады"
      },
      {
        id: "e6abe213-2152-49f3-a0a6-a9cc708edbb9",
        text: "Екі транзакция да бір мезетте кері қайтарылып, қайта іске қосылады"
      },
      {
        id: "10e2c94f-0df0-4c58-bfa6-f935ebdae577",
        text: "Ресурс екі транзакцияға бірдей бөлініп, параллель өңдеуге рұқсат етіледі"
      }
    ],
    correctOptionIds: [
      "a0085c03-653e-4ae8-b188-ce341b4234ab"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "7cfb322f-5021-495d-9261-be2a0c0b5aeb",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Two-Phase Commit\" (2PC) хаттамасының бірінші кезеңінде (Prepare phase) координатор барлық қатысушылардан не сұрайды?",
    options: [
      {
        id: "936ffea5-ed57-433c-9442-750923f9ebb2",
        text: "Транзакцияны commit жасауға дайын ба екендігін сұрап, дауыс беруді (Vote) талап етеді"
      },
      {
        id: "5d08ca0a-9ee1-4361-94af-41c0ccee9d5a",
        text: "Бірден транзакцияны аяқтауды сұрайды"
      },
      {
        id: "b28b4e96-9639-4421-ac37-2e2fd0396bf0",
        text: "Деректерді дискіге жазуды тоқтатуды сұрайды"
      },
      {
        id: "e1f7a62f-cd3c-4843-8803-e296b9498ac6",
        text: "Серверлерді қайта қосуды сұрайды"
      },
      {
        id: "0af9f1f4-7a51-421a-890f-4b4183cf3670",
        text: "Транзакцияны бірден орындап, нәтижені қайтаруды сұрайды"
      },
      {
        id: "478ffa83-07aa-4b16-b31a-c95e190d9327",
        text: "Барлық құлыптарды (locks) босатуды және ресурстарды азат етуді талап етеді"
      },
      {
        id: "0b06b94c-28fa-4e38-a8f6-007b3cf95763",
        text: "Жүйедегі барлық деректердің толық көшірмесін (backup) жасауды сұрайды"
      },
      {
        id: "317fc955-1aa4-4bf8-84d3-f4084f119671",
        text: "Координаторға транзакцияның орындалу уақытын хабарлауды міндеттейді"
      }
    ],
    correctOptionIds: [
      "936ffea5-ed57-433c-9442-750923f9ebb2"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "64bc6ad8-7965-4a5a-9639-77202cef4b39",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы 2PC хаттамасының екінші кезеңінде (Commit phase), егер барлық қатысушы дайын деп дауыс берсе, Координатор қандай шешім қабылдайды?",
    options: [
      {
        id: "262e008d-7d43-4e39-97d0-50405bae482b",
        text: "Барлық қатысушыға COMMIT командасын орындауды бұйырады"
      },
      {
        id: "25112a83-61cd-457b-a520-a1167032af4f",
        text: "ROLLBACK бұйрығын жібереді"
      },
      {
        id: "55e3e129-15f7-4b10-817e-1c9c2aaecfd4",
        text: "Транзакцияны уақытша тоқтатады"
      },
      {
        id: "ead276c9-a0f9-43a6-8124-f3675dce58fa",
        text: "Қатысушыларды желіден ажыратады"
      },
      {
        id: "21783e2e-6fe5-4ca4-b777-faa3f9d967d4",
        text: "Әр қатысушыға өз бетінше шешім қабылдауға рұқсат береді"
      },
      {
        id: "d4f93c40-e97c-4057-aa38-6716a1fd1fb1",
        text: "Транзакцияны жартылай орындалған күйде сақтауды талап етеді"
      },
      {
        id: "31ba735e-e3e3-47ec-bae9-f87c6885c6e0",
        text: "Барлық қатысушыдан PREPARE сұранысын қайта жіберуді сұрайды"
      },
      {
        id: "f7366862-9682-46ec-a697-e6d78f04cc82",
        text: "Координатор транзакцияны автоматты түрде бас тарту (Abort) режиміне ауыстырады"
      }
    ],
    correctOptionIds: [
      "262e008d-7d43-4e39-97d0-50405bae482b"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b72",
    subjectId: SubjectId.DB,
    text: "2PC хаттамасында кем дегенде бір қатысушы дайын емеспін (Veto/Abort) деп жауап берсе не болады?",
    options: [
      {
        id: "db-t02-b72-op1",
        text: "Координатор барлық қатысушыға ROLLBACK жасауды бұйырады"
      },
      {
        id: "db-t02-b72-op2",
        text: "Ол тек дайын серверлерде ғана COMMIT жасайды"
      },
      {
        id: "db-t02-b72-op3",
        text: "Транзакцияны күту режиміне қояды"
      },
      {
        id: "db-t02-b72-op4",
        text: "Қателікті елемей орындай береді"
      },
      {
        id: "db-t02-b72-op5",
        text: "Координатор дауыс беру нәтижесін елемей, транзакцияны күштеп COMMIT жасайды"
      },
      {
        id: "db-t02-b72-op6",
        text: "Тек дауыс бермеген қатысушыларға ROLLBACK жасалып, қалғандары COMMIT алады"
      },
      {
        id: "db-t02-b72-op7",
        text: "Жүйе автоматты түрде екінші рет дауыс беру раундын бастайды"
      },
      {
        id: "db-t02-b72-op8",
        text: "Қатысушы өз бетінше транзакцияны тоқтатып, координаторға хабарлама жібермейді"
      }
    ],
    correctOptionIds: [
      "db-t02-b72-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b73",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Lost Update\" (Жоғалған жаңарту) мәселесі қашан орын алады?",
    options: [
      {
        id: "db-t02-b73-op1",
        text: "Екі транзакция бір деректі қатар оқып, бірінен соң бірі өзгерткенде, соңғы өзгерту бірінші өзгертуді үстінен жауып (жойып) жібергенде"
      },
      {
        id: "db-t02-b73-op2",
        text: "Деректі өшіру кезінде қате кеткенде"
      },
      {
        id: "db-t02-b73-op3",
        text: "Сұраныс нәтижесі дискіге жазылмағанда"
      },
      {
        id: "db-t02-b73-op4",
        text: "Бастапқы кілт автоматты түрде өзгергенде"
      },
      {
        id: "db-t02-b73-op5",
        text: "Транзакция орындалып жатқанда дерекқор сервері кенеттен өшіп қалғанда"
      },
      {
        id: "db-t02-b73-op6",
        text: "Екі транзакция бір уақытта жаңа жазба қосуға әрекеттеніп, біреуінің кілті қайталанып кеткенде"
      },
      {
        id: "db-t02-b73-op7",
        text: "Пайдаланушы деректі өзгерткен соң, COMMIT командасын орындауды ұмытып кеткенде"
      },
      {
        id: "db-t02-b73-op8",
        text: "Бір транзакция екіншісінің әлі аяқталмаған деректерін оқып, дұрыс емес нәтиже алғанда"
      }
    ],
    correctOptionIds: [
      "db-t02-b73-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b74",
    subjectId: SubjectId.DB,
    text: "Сұраныс барысында \"Non-repeatable Read\" аномалиясы қай оқшаулау деңгейінде мүлдем болмайды?",
    options: [
      {
        id: "db-t02-b74-op1",
        text: "REPEATABLE READ және одан жоғары барлық деңгейлерде"
      },
      {
        id: "db-t02-b74-op2",
        text: "READ COMMITTED деңгейінде"
      },
      {
        id: "db-t02-b74-op3",
        text: "READ UNCOMMITTED деңгейінде"
      },
      {
        id: "db-t02-b74-op4",
        text: "Ол ешқандай деңгейде шешілмеген"
      },
      {
        id: "db-t02-b74-op5",
        text: "Тек SERIALIZABLE деңгейінде ғана"
      },
      {
        id: "db-t02-b74-op6",
        text: "READ UNCOMMITTED және READ COMMITTED деңгейлерінде"
      },
      {
        id: "db-t02-b74-op7",
        text: "Кез келген оқшаулау деңгейінде болуы мүмкін"
      },
      {
        id: "db-t02-b74-op8",
        text: "Тек транзакциясыз орындалатын сұраныстарда"
      }
    ],
    correctOptionIds: [
      "db-t02-b74-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b75",
    subjectId: SubjectId.DB,
    text: "Дерекқордағы \"Dirty Read\" мәселесін болдырмау үшін транзакциялар қалай жұмыс істеуі керек?",
    options: [
      {
        id: "db-t02-b75-op1",
        text: "Тек COMMIT болған деректерді ғана оқуы керек (READ COMMITTED изоляциясы қолданылуы тиіс)"
      },
      {
        id: "db-t02-b75-op2",
        text: "Кестелерге тек Shared Lock қойылуы керек"
      },
      {
        id: "db-t02-b75-op3",
        text: "Транзакцияларды тек кезекпен орындау керек"
      },
      {
        id: "db-t02-b75-op4",
        text: "Деректерді дискіге жазбау керек"
      },
      {
        id: "db-t02-b75-op5",
        text: "Транзакцияларды мүмкіндігінше ұзақ уақытқа созу керек"
      },
      {
        id: "db-t02-b75-op6",
        text: "Оқу операциялары үшін Exclusive Lock қолдану жеткілікті"
      },
      {
        id: "db-t02-b75-op7",
        text: "Деректерді оқу кезінде ешқандай құлыптау механизмін қолданбау керек"
      },
      {
        id: "db-t02-b75-op8",
        text: "Барлық транзакцияларды READ UNCOMMITTED деңгейінде орындау қажет"
      }
    ],
    correctOptionIds: [
      "db-t02-b75-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b76",
    subjectId: SubjectId.DB,
    text: "\"Phantom Read\" (Елес оқу) мәселесін шешу үшін қандай құлыптау түрі қолданылады?",
    options: [
      {
        id: "db-t02-b76-op1",
        text: "Диапазондық құлыптар (Range Locks) немесе SERIALIZABLE оқшаулау деңгейі"
      },
      {
        id: "db-t02-b76-op2",
        text: "Row-level (жол деңгейіндегі) жай құлыптар"
      },
      {
        id: "db-t02-b76-op3",
        text: "Кестені толық бұғаттау (Table lock)"
      },
      {
        id: "db-t02-b76-op4",
        text: "Жүйені тоқтату"
      },
      {
        id: "db-t02-b76-op5",
        text: "Жол деңгейіндегі бөлісу құлыптары (Shared Row Locks)"
      },
      {
        id: "db-t02-b76-op6",
        text: "Уақытша кестелерді қолдану (Temporary Tables)"
      },
      {
        id: "db-t02-b76-op7",
        text: "Транзакцияны автоматты түрде қайтару (Automatic Rollback)"
      },
      {
        id: "db-t02-b76-op8",
        text: "Оптимистік құлыптау әдісі (Optimistic Locking)"
      }
    ],
    correctOptionIds: [
      "db-t02-b76-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "4644c3cd-a4cd-4c5b-81ab-034ebd4910d3",
    subjectId: SubjectId.DB,
    text: "ACID қасиеттерін толық және тиімді қамтамасыз ету үшін ДҚБЖ қай екі негізгі жүйені бірге қолданады?",
    options: [
      {
        id: "70ab4879-738d-4481-9003-70bc5a4aa6e6",
        text: "Параллельдікті басқару жүйесі (Lock Manager) және Қалпына келтіру жүйесі (Log Manager)"
      },
      {
        id: "0ab314ad-29c7-4ddb-8232-901d42dd1494",
        text: "Пайдаланушы интерфейсі және SQL компиляторы"
      },
      {
        id: "04cf6171-0386-4f3a-9b5a-ce9fa4a8ba56",
        text: "Секциялау жүйесі және индекстеу жүйесі"
      },
      {
        id: "03795d15-2541-478e-a400-774a22f8d7ea",
        text: "Файлдық жүйе және желілік хаттамалар"
      },
      {
        id: "4555ded6-49ef-460c-a649-5700f9ac3b45",
        text: "Транзакциялар мониторы және Кэш басқару жүйесі"
      },
      {
        id: "bd1dca4f-3a71-4ded-abf5-b6c14aba1bdc",
        text: "Оптимизатор жүйесі және Буферлік пул менеджері"
      },
      {
        id: "ebbac2f0-9d22-4a95-bd51-65af08c08f98",
        text: "Аутентификация модулі және Рұқсат беру жүйесі"
      },
      {
        id: "d7060b7a-7a1f-49a1-8050-922b6a435502",
        text: "Деректерді қысу алгоритмі және Шифрлау қозғалтқышы"
      }
    ],
    correctOptionIds: [
      "70ab4879-738d-4481-9003-70bc5a4aa6e6"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: "db-t02-b77",
    subjectId: SubjectId.DB,
    text: "SQL-де \"ON DELETE SET NULL\" шектеуі қолданылғанда, басты кестедегі жол өшірілсе не болады?",
    options: [
      {
        id: "db-t02-b77-op1",
        text: "Бағынышты кестедегі сәйкес сыртқы кілттің мәндері NULL-ге теңестіріледі"
      },
      {
        id: "db-t02-b77-op2",
        text: "Бағынышты кестедегі жолдар толығымен өшіріледі"
      },
      {
        id: "db-t02-b77-op3",
        text: "Басты кестедегі өшіруге рұқсат берілмейді"
      },
      {
        id: "db-t02-b77-op4",
        text: "Дерекқор қатемен жұмысын тоқтатады"
      },
      {
        id: "db-t02-b77-op5",
        text: "Бағынышты кестедегі сәйкес жолдар автоматты түрде жаңартылып, басты кестеден көшіріледі"
      },
      {
        id: "db-t02-b77-op6",
        text: "Басты кестедегі өшірілген жол қалпына келтіріліп, дерекқор өзгеріссіз қалады"
      },
      {
        id: "db-t02-b77-op7",
        text: "Бағынышты кестедегі сыртқы кілт мәндері нөлге (0) теңестіріледі"
      },
      {
        id: "db-t02-b77-op8",
        text: "Бағынышты кестедегі барлық жолдар толығымен тазартылып, кесте бос қалады"
      }
    ],
    correctOptionIds: [
      "db-t02-b77-op1"
    ],
    type: QuestionType.MULTIPLE,
    topic: "Деректердің тұтастығы",
    difficulty: Difficulty.MEDIUM
  }
];
