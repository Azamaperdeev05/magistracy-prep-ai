import { Question, SubjectId, QuestionType, Difficulty } from '../../../../types';

export const englishReadingEducationQuestions= [
  // ====== PASSAGE 001 - My University (A1, easy) ======
  {
    id: 'edu_001_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: 'My name is Aruzhan. I am a first-year student at Al-Farabi Kazakh National University in Almaty. I study Biology. My university is very big and beautiful. There are many buildings and a large library. I go to classes every day from Monday to Friday. My favourite subjects are Botany and Ecology. I have many friends at the university. We often study together in the library. After classes, I like to walk in the park near the university. My teachers are very kind and helpful. I want to be a good biologist in the future. I love my university very much.',
    options: [
      { id: 'edu_001_01_a', text: 'Aruzhan studies at a university and describes her student life' },
      { id: 'edu_001_01_b', text: 'Al-Farabi University is only for Biology students' },
      { id: 'edu_001_01_c', text: 'Aruzhan does not like her teachers' },
      { id: 'edu_001_01_d', text: 'The university library is very small' }
    ],
    correctOptionIds: ['edu_001_01_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_001_02',
    subjectId: "english",
    text: 'What subject does Aruzhan study at university?',
    readingPassage: 'My name is Aruzhan. I am a first-year student at Al-Farabi Kazakh National University in Almaty. I study Biology. My university is very big and beautiful. There are many buildings and a large library. I go to classes every day from Monday to Friday. My favourite subjects are Botany and Ecology. I have many friends at the university. We often study together in the library. After classes, I like to walk in the park near the university. My teachers are very kind and helpful. I want to be a good biologist in the future. I love my university very much.',
    options: [
      { id: 'edu_001_02_a', text: 'Chemistry' },
      { id: 'edu_001_02_b', text: 'Biology' },
      { id: 'edu_001_02_c', text: 'Physics' },
      { id: 'edu_001_02_d', text: 'Mathematics' }
    ],
    correctOptionIds: ['edu_001_02_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_001_03',
    subjectId: "english",
    text: 'The word "helpful" in the passage is closest in meaning to:',
    readingPassage: 'My name is Aruzhan. I am a first-year student at Al-Farabi Kazakh National University in Almaty. I study Biology. My university is very big and beautiful. There are many buildings and a large library. I go to classes every day from Monday to Friday. My favourite subjects are Botany and Ecology. I have many friends at the university. We often study together in the library. After classes, I like to walk in the park near the university. My teachers are very kind and helpful. I want to be a good biologist in the future. I love my university very much.',
    options: [
      { id: 'edu_001_03_a', text: 'Strict' },
      { id: 'edu_001_03_b', text: 'Useful and supportive' },
      { id: 'edu_001_03_c', text: 'Difficult' },
      { id: 'edu_001_03_d', text: 'Funny' }
    ],
    correctOptionIds: ['edu_001_03_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_001_04',
    subjectId: "english",
    text: 'What can we infer about Aruzhan from the passage?',
    readingPassage: 'My name is Aruzhan. I am a first-year student at Al-Farabi Kazakh National University in Almaty. I study Biology. My university is very big and beautiful. There are many buildings and a large library. I go to classes every day from Monday to Friday. My favourite subjects are Botany and Ecology. I have many friends at the university. We often study together in the library. After classes, I like to walk in the park near the university. My teachers are very kind and helpful. I want to be a good biologist in the future. I love my university very much.',
    options: [
      { id: 'edu_001_04_a', text: 'She is unhappy with her studies' },
      { id: 'edu_001_04_b', text: 'She enjoys her university experience' },
      { id: 'edu_001_04_c', text: 'She wants to change her major' },
      { id: 'edu_001_04_d', text: 'She studies only on weekends' }
    ],
    correctOptionIds: ['edu_001_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_001_05',
    subjectId: "english",
    text: 'What is the purpose of this passage?',
    readingPassage: 'My name is Aruzhan. I am a first-year student at Al-Farabi Kazakh National University in Almaty. I study Biology. My university is very big and beautiful. There are many buildings and a large library. I go to classes every day from Monday to Friday. My favourite subjects are Botany and Ecology. I have many friends at the university. We often study together in the library. After classes, I like to walk in the park near the university. My teachers are very kind and helpful. I want to be a good biologist in the future. I love my university very much.',
    options: [
      { id: 'edu_001_05_a', text: 'To give information about the city of Almaty' },
      { id: 'edu_001_05_b', text: 'To describe her personal experience as a student' },
      { id: 'edu_001_05_c', text: 'To explain how to apply to university' },
      { id: 'edu_001_05_d', text: 'To compare different universities' }
    ],
    correctOptionIds: ['edu_001_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_001_06',
    subjectId: "english",
    text: 'What does "my university" in the passage refer to?',
    readingPassage: 'My name is Aruzhan. I am a first-year student at Al-Farabi Kazakh National University in Almaty. I study Biology. My university is very big and beautiful. There are many buildings and a large library. I go to classes every day from Monday to Friday. My favourite subjects are Botany and Ecology. I have many friends at the university. We often study together in the library. After classes, I like to walk in the park near the university. My teachers are very kind and helpful. I want to be a good biologist in the future. I love my university very much.',
    options: [
      { id: 'edu_001_06_a', text: 'A school in Astana' },
      { id: 'edu_001_06_b', text: 'Al-Farabi Kazakh National University' },
      { id: 'edu_001_06_c', text: 'A biology laboratory' },
      { id: 'edu_001_06_d', text: 'The city library' }
    ],
    correctOptionIds: ['edu_001_06_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_001_07',
    subjectId: "english",
    text: 'How often does Aruzhan go to classes?',
    readingPassage: 'My name is Aruzhan. I am a first-year student at Al-Farabi Kazakh National University in Almaty. I study Biology. My university is very big and beautiful. There are many buildings and a large library. I go to classes every day from Monday to Friday. My favourite subjects are Botany and Ecology. I have many friends at the university. We often study together in the library. After classes, I like to walk in the park near the university. My teachers are very kind and helpful. I want to be a good biologist in the future. I love my university very much.',
    options: [
      { id: 'edu_001_07_a', text: 'Only on Mondays' },
      { id: 'edu_001_07_b', text: 'On weekends' },
      { id: 'edu_001_07_c', text: 'Every day from Monday to Friday' },
      { id: 'edu_001_07_d', text: 'Once a week' }
    ],
    correctOptionIds: ['edu_001_07_c'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_001_08',
    subjectId: "english",
    text: 'According to the passage, Aruzhan walks in the park after classes.',
    readingPassage: 'My name is Aruzhan. I am a first-year student at Al-Farabi Kazakh National University in Almaty. I study Biology. My university is very big and beautiful. There are many buildings and a large library. I go to classes every day from Monday to Friday. My favourite subjects are Botany and Ecology. I have many friends at the university. We often study together in the library. After classes, I like to walk in the park near the university. My teachers are very kind and helpful. I want to be a good biologist in the future. I love my university very much.',
    options: [
      { id: 'edu_001_08_a', text: 'True' },
      { id: 'edu_001_08_b', text: 'False' },
      { id: 'edu_001_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_001_08_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },

  // ====== PASSAGE 002 - Daily Study Routine (A1, easy) ======
  {
    id: 'edu_002_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: 'My daily study routine starts at seven o\'clock in the morning. I wake up, wash my face and have breakfast. Then I go to university. My classes begin at nine. I usually have three or four classes every day. Each class is one hour and a half. I always sit in the front row and listen carefully to the teacher. I take notes during the lessons. After classes, I go to the library to do my homework. I usually spend two hours there. In the evening, I review what I learned during the day. I also read textbooks and prepare for the next day. Sometimes I study with my classmates. We help each other with difficult subjects. I never skip classes because I want to get good grades. On weekends, I rest and meet with friends. I believe that a good routine helps me become a successful student.',
    options: [
      { id: 'edu_002_01_a', text: 'How to skip classes without getting caught' },
      { id: 'edu_002_01_b', text: 'A student describes her typical daily study schedule' },
      { id: 'edu_002_01_c', text: 'University classes are too long' },
      { id: 'edu_002_01_d', text: 'The library is the best place to sleep' }
    ],
    correctOptionIds: ['edu_002_01_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_002_02',
    subjectId: "english",
    text: 'What time does the student wake up?',
    readingPassage: 'My daily study routine starts at seven o\'clock in the morning. I wake up, wash my face and have breakfast. Then I go to university. My classes begin at nine. I usually have three or four classes every day. Each class is one hour and a half. I always sit in the front row and listen carefully to the teacher. I take notes during the lessons. After classes, I go to the library to do my homework. I usually spend two hours there. In the evening, I review what I learned during the day. I also read textbooks and prepare for the next day. Sometimes I study with my classmates. We help each other with difficult subjects. I never skip classes because I want to get good grades. On weekends, I rest and meet with friends. I believe that a good routine helps me become a successful student.',
    options: [
      { id: 'edu_002_02_a', text: 'At six o\'clock' },
      { id: 'edu_002_02_b', text: 'At seven o\'clock' },
      { id: 'edu_002_02_c', text: 'At eight o\'clock' },
      { id: 'edu_002_02_d', text: 'At nine o\'clock' }
    ],
    correctOptionIds: ['edu_002_02_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_002_03',
    subjectId: "english",
    text: 'The word "routine" in the passage is closest in meaning to:',
    readingPassage: 'My daily study routine starts at seven o\'clock in the morning. I wake up, wash my face and have breakfast. Then I go to university. My classes begin at nine. I usually have three or four classes every day. Each class is one hour and a half. I always sit in the front row and listen carefully to the teacher. I take notes during the lessons. After classes, I go to the library to do my homework. I usually spend two hours there. In the evening, I review what I learned during the day. I also read textbooks and prepare for the next day. Sometimes I study with my classmates. We help each other with difficult subjects. I never skip classes because I want to get good grades. On weekends, I rest and meet with friends. I believe that a good routine helps me become a successful student.',
    options: [
      { id: 'edu_002_03_a', text: 'A regular way of doing things' },
      { id: 'edu_002_03_b', text: 'A difficult problem' },
      { id: 'edu_002_03_c', text: 'A special event' },
      { id: 'edu_002_03_d', text: 'A new experience' }
    ],
    correctOptionIds: ['edu_002_03_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_002_04',
    subjectId: "english",
    text: 'What can we infer about the student from the passage?',
    readingPassage: 'My daily study routine starts at seven o\'clock in the morning. I wake up, wash my face and have breakfast. Then I go to university. My classes begin at nine. I usually have three or four classes every day. Each class is one hour and a half. I always sit in the front row and listen carefully to the teacher. I take notes during the lessons. After classes, I go to the library to do my homework. I usually spend two hours there. In the evening, I review what I learned during the day. I also read textbooks and prepare for the next day. Sometimes I study with my classmates. We help each other with difficult subjects. I never skip classes because I want to get good grades. On weekends, I rest and meet with friends. I believe that a good routine helps me become a successful student.',
    options: [
      { id: 'edu_002_04_a', text: 'She is a lazy student' },
      { id: 'edu_002_04_b', text: 'She is a hardworking and disciplined student' },
      { id: 'edu_002_04_c', text: 'She does not like studying' },
      { id: 'edu_002_04_d', text: 'She only studies on weekends' }
    ],
    correctOptionIds: ['edu_002_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_002_05',
    subjectId: "english",
    text: 'What is the author\'s purpose in writing this passage?',
    readingPassage: 'My daily study routine starts at seven o\'clock in the morning. I wake up, wash my face and have breakfast. Then I go to university. My classes begin at nine. I usually have three or four classes every day. Each class is one hour and a half. I always sit in the front row and listen carefully to the teacher. I take notes during the lessons. After classes, I go to the library to do my homework. I usually spend two hours there. In the evening, I review what I learned during the day. I also read textbooks and prepare for the next day. Sometimes I study with my classmates. We help each other with difficult subjects. I never skip classes because I want to get good grades. On weekends, I rest and meet with friends. I believe that a good routine helps me become a successful student.',
    options: [
      { id: 'edu_002_05_a', text: 'To share her daily study habits and encourage discipline' },
      { id: 'edu_002_05_b', text: 'To complain about university life' },
      { id: 'edu_002_05_c', text: 'To describe the university building' },
      { id: 'edu_002_05_d', text: 'To teach grammar rules' }
    ],
    correctOptionIds: ['edu_002_05_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_002_06',
    subjectId: "english",
    text: 'What does "there" in "I usually spend two hours there" refer to?',
    readingPassage: 'My daily study routine starts at seven o\'clock in the morning. I wake up, wash my face and have breakfast. Then I go to university. My classes begin at nine. I usually have three or four classes every day. Each class is one hour and a half. I always sit in the front row and listen carefully to the teacher. I take notes during the lessons. After classes, I go to the library to do my homework. I usually spend two hours there. In the evening, I review what I learned during the day. I also read textbooks and prepare for the next day. Sometimes I study with my classmates. We help each other with difficult subjects. I never skip classes because I want to get good grades. On weekends, I rest and meet with friends. I believe that a good routine helps me become a successful student.',
    options: [
      { id: 'edu_002_06_a', text: 'At home' },
      { id: 'edu_002_06_b', text: 'In the classroom' },
      { id: 'edu_002_06_c', text: 'In the library' },
      { id: 'edu_002_06_d', text: 'In the park' }
    ],
    correctOptionIds: ['edu_002_06_c'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_002_07',
    subjectId: "english",
    text: 'How many classes does the student usually have each day?',
    readingPassage: 'My daily study routine starts at seven o\'clock in the morning. I wake up, wash my face and have breakfast. Then I go to university. My classes begin at nine. I usually have three or four classes every day. Each class is one hour and a half. I always sit in the front row and listen carefully to the teacher. I take notes during the lessons. After classes, I go to the library to do my homework. I usually spend two hours there. In the evening, I review what I learned during the day. I also read textbooks and prepare for the next day. Sometimes I study with my classmates. We help each other with difficult subjects. I never skip classes because I want to get good grades. On weekends, I rest and meet with friends. I believe that a good routine helps me become a successful student.',
    options: [
      { id: 'edu_002_07_a', text: 'One or two' },
      { id: 'edu_002_07_b', text: 'Three or four' },
      { id: 'edu_002_07_c', text: 'Five or six' },
      { id: 'edu_002_07_d', text: 'Seven or eight' }
    ],
    correctOptionIds: ['edu_002_07_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },
  {
    id: 'edu_002_08',
    subjectId: "english",
    text: 'The student sometimes skips classes because they are boring.',
    readingPassage: 'My daily study routine starts at seven o\'clock in the morning. I wake up, wash my face and have breakfast. Then I go to university. My classes begin at nine. I usually have three or four classes every day. Each class is one hour and a half. I always sit in the front row and listen carefully to the teacher. I take notes during the lessons. After classes, I go to the library to do my homework. I usually spend two hours there. In the evening, I review what I learned during the day. I also read textbooks and prepare for the next day. Sometimes I study with my classmates. We help each other with difficult subjects. I never skip classes because I want to get good grades. On weekends, I rest and meet with friends. I believe that a good routine helps me become a successful student.',
    options: [
      { id: 'edu_002_08_a', text: 'True' },
      { id: 'edu_002_08_b', text: 'False' },
      { id: 'edu_002_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_002_08_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "easy"
  },

  // ====== PASSAGE 003 - Student Life (A2, medium) ======
  {
    id: 'edu_003_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: "Student life is an exciting and important period in a person's life. It is a time when young people gain knowledge, make new friends and prepare for their future careers. University students have many responsibilities. They must attend lectures, complete assignments and pass exams. However, student life is not only about studying. Students also take part in various extracurricular activities such as sports, music and volunteer work. Many students join clubs and student organisations. These activities help them develop leadership skills and meet people with similar interests. Living away from home for the first time is another important part of student life. Students learn to be independent \u2014 they manage their own budget, cook meals and take care of themselves. This experience prepares them for adult life. Of course, student life can be stressful sometimes, especially during exam periods. But with good time management and support from friends, most students overcome these challenges successfully.",
    options: [
      { id: 'edu_003_01_a', text: 'Student life is only about studying hard' },
      { id: 'edu_003_01_b', text: 'Student life combines studying, extracurricular activities and personal growth' },
      { id: 'edu_003_01_c', text: 'Students should not join clubs because it distracts them' },
      { id: 'edu_003_01_d', text: 'Living away from home is a negative experience' }
    ],
    correctOptionIds: ['edu_003_01_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_003_02',
    subjectId: "english",
    text: 'According to the passage, what do students learn when they live away from home?',
    readingPassage: "Student life is an exciting and important period in a person's life. It is a time when young people gain knowledge, make new friends and prepare for their future careers. University students have many responsibilities. They must attend lectures, complete assignments and pass exams. However, student life is not only about studying. Students also take part in various extracurricular activities such as sports, music and volunteer work. Many students join clubs and student organisations. These activities help them develop leadership skills and meet people with similar interests. Living away from home for the first time is another important part of student life. Students learn to be independent \u2014 they manage their own budget, cook meals and take care of themselves. This experience prepares them for adult life. Of course, student life can be stressful sometimes, especially during exam periods. But with good time management and support from friends, most students overcome these challenges successfully.",
    options: [
      { id: 'edu_003_02_a', text: 'To depend on their parents more' },
      { id: 'edu_003_02_b', text: 'To be independent and manage their own lives' },
      { id: 'edu_003_02_c', text: 'To avoid making new friends' },
      { id: 'edu_003_02_d', text: 'To focus only on studying' }
    ],
    correctOptionIds: ['edu_003_02_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_003_03',
    subjectId: "english",
    text: 'The word "extracurricular" in the passage is closest in meaning to:',
    readingPassage: "Student life is an exciting and important period in a person's life. It is a time when young people gain knowledge, make new friends and prepare for their future careers. University students have many responsibilities. They must attend lectures, complete assignments and pass exams. However, student life is not only about studying. Students also take part in various extracurricular activities such as sports, music and volunteer work. Many students join clubs and student organisations. These activities help them develop leadership skills and meet people with similar interests. Living away from home for the first time is another important part of student life. Students learn to be independent \u2014 they manage their own budget, cook meals and take care of themselves. This experience prepares them for adult life. Of course, student life can be stressful sometimes, especially during exam periods. But with good time management and support from friends, most students overcome these challenges successfully.",
    options: [
      { id: 'edu_003_03_a', text: 'Activities outside the regular academic curriculum' },
      { id: 'edu_003_03_b', text: 'Classes that are required for graduation' },
      { id: 'edu_003_03_c', text: 'Examinations at the end of the semester' },
      { id: 'edu_003_03_d', text: 'Homework assignments given by teachers' }
    ],
    correctOptionIds: ['edu_003_03_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_003_04',
    subjectId: "english",
    text: 'What can we infer about student life from the passage?',
    readingPassage: "Student life is an exciting and important period in a person's life. It is a time when young people gain knowledge, make new friends and prepare for their future careers. University students have many responsibilities. They must attend lectures, complete assignments and pass exams. However, student life is not only about studying. Students also take part in various extracurricular activities such as sports, music and volunteer work. Many students join clubs and student organisations. These activities help them develop leadership skills and meet people with similar interests. Living away from home for the first time is another important part of student life. Students learn to be independent \u2014 they manage their own budget, cook meals and take care of themselves. This experience prepares them for adult life. Of course, student life can be stressful sometimes, especially during exam periods. But with good time management and support from friends, most students overcome these challenges successfully.",
    options: [
      { id: 'edu_003_04_a', text: 'Student life has no challenges at all' },
      { id: 'edu_003_04_b', text: 'Students face challenges but can overcome them with good habits and support' },
      { id: 'edu_003_04_c', text: 'Only academic success matters in student life' },
      { id: 'edu_003_04_d', text: 'Most students drop out of university' }
    ],
    correctOptionIds: ['edu_003_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_003_05',
    subjectId: "english",
    text: "What is the author's main purpose in this passage?",
    readingPassage: "Student life is an exciting and important period in a person's life. It is a time when young people gain knowledge, make new friends and prepare for their future careers. University students have many responsibilities. They must attend lectures, complete assignments and pass exams. However, student life is not only about studying. Students also take part in various extracurricular activities such as sports, music and volunteer work. Many students join clubs and student organisations. These activities help them develop leadership skills and meet people with similar interests. Living away from home for the first time is another important part of student life. Students learn to be independent \u2014 they manage their own budget, cook meals and take care of themselves. This experience prepares them for adult life. Of course, student life can be stressful sometimes, especially during exam periods. But with good time management and support from friends, most students overcome these challenges successfully.",
    options: [
      { id: 'edu_003_05_a', text: 'To discourage young people from going to university' },
      { id: 'edu_003_05_b', text: 'To give a balanced overview of what student life involves' },
      { id: 'edu_003_05_c', text: 'To explain how to cook meals for beginners' },
      { id: 'edu_003_05_d', text: 'To compare different universities in Kazakhstan' }
    ],
    correctOptionIds: ['edu_003_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_003_06',
    subjectId: "english",
    text: 'What does "this experience" in the passage refer to?',
    readingPassage: "Student life is an exciting and important period in a person's life. It is a time when young people gain knowledge, make new friends and prepare for their future careers. University students have many responsibilities. They must attend lectures, complete assignments and pass exams. However, student life is not only about studying. Students also take part in various extracurricular activities such as sports, music and volunteer work. Many students join clubs and student organisations. These activities help them develop leadership skills and meet people with similar interests. Living away from home for the first time is another important part of student life. Students learn to be independent \u2014 they manage their own budget, cook meals and take care of themselves. This experience prepares them for adult life. Of course, student life can be stressful sometimes, especially during exam periods. But with good time management and support from friends, most students overcome these challenges successfully.",
    options: [
      { id: 'edu_003_06_a', text: 'Taking exams' },
      { id: 'edu_003_06_b', text: 'Joining a club' },
      { id: 'edu_003_06_c', text: 'Living away from home and learning independence' },
      { id: 'edu_003_06_d', text: 'Attending lectures' }
    ],
    correctOptionIds: ['edu_003_06_c'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_003_07',
    subjectId: "english",
    text: 'When is student life especially stressful according to the passage?',
    readingPassage: "Student life is an exciting and important period in a person's life. It is a time when young people gain knowledge, make new friends and prepare for their future careers. University students have many responsibilities. They must attend lectures, complete assignments and pass exams. However, student life is not only about studying. Students also take part in various extracurricular activities such as sports, music and volunteer work. Many students join clubs and student organisations. These activities help them develop leadership skills and meet people with similar interests. Living away from home for the first time is another important part of student life. Students learn to be independent \u2014 they manage their own budget, cook meals and take care of themselves. This experience prepares them for adult life. Of course, student life can be stressful sometimes, especially during exam periods. But with good time management and support from friends, most students overcome these challenges successfully.",
    options: [
      { id: 'edu_003_07_a', text: 'During holidays' },
      { id: 'edu_003_07_b', text: 'During exam periods' },
      { id: 'edu_003_07_c', text: 'During the first week of university' },
      { id: 'edu_003_07_d', text: 'During extracurricular activities' }
    ],
    correctOptionIds: ['edu_003_07_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_003_08',
    subjectId: "english",
    text: 'Students should focus only on their studies and avoid extracurricular activities.',
    readingPassage: "Student life is an exciting and important period in a person's life. It is a time when young people gain knowledge, make new friends and prepare for their future careers. University students have many responsibilities. They must attend lectures, complete assignments and pass exams. However, student life is not only about studying. Students also take part in various extracurricular activities such as sports, music and volunteer work. Many students join clubs and student organisations. These activities help them develop leadership skills and meet people with similar interests. Living away from home for the first time is another important part of student life. Students learn to be independent \u2014 they manage their own budget, cook meals and take care of themselves. This experience prepares them for adult life. Of course, student life can be stressful sometimes, especially during exam periods. But with good time management and support from friends, most students overcome these challenges successfully.",
    options: [
      { id: 'edu_003_08_a', text: 'True' },
      { id: 'edu_003_08_b', text: 'False' },
      { id: 'edu_003_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_003_08_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },

  // ====== PASSAGE 004 - Education in Kazakhstan (A2, medium) ======
  {
    id: 'edu_004_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: "The education system in Kazakhstan has undergone significant changes since the country gained independence. Today, education is one of the most important priorities for the development of the nation. The system includes primary school (grades 1-4), basic secondary school (grades 5-9) and senior secondary school (grades 10-11 or 12). In 2007, Kazakhstan joined the Bologna Process to modernise its higher education system. This reform introduced a three-level system: bachelor's, master's and doctoral degrees. The state provides free secondary education to all citizens. Many schools now teach subjects in three languages: Kazakh, Russian and English. The \"Bolashak\" international scholarship programme sends talented students to study at the world's best universities. After graduation, they return to work in Kazakhstan and contribute to the country's development. Despite progress, challenges remain. Rural schools often lack modern equipment and qualified teachers. The government continues to work on improving the quality of education across the country.",
    options: [
      { id: 'edu_004_01_a', text: "Kazakhstan's education system has developed through reforms but still faces challenges" },
      { id: 'edu_004_01_b', text: 'Only urban schools in Kazakhstan are of good quality' },
      { id: 'edu_004_01_c', text: 'The Bologna Process was a failure for Kazakhstan' },
      { id: 'edu_004_01_d', text: 'Kazakhstan does not provide free education' }
    ],
    correctOptionIds: ['edu_004_01_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_004_02',
    subjectId: "english",
    text: 'What year did Kazakhstan join the Bologna Process?',
    readingPassage: "The education system in Kazakhstan has undergone significant changes since the country gained independence. Today, education is one of the most important priorities for the development of the nation. The system includes primary school (grades 1-4), basic secondary school (grades 5-9) and senior secondary school (grades 10-11 or 12). In 2007, Kazakhstan joined the Bologna Process to modernise its higher education system. This reform introduced a three-level system: bachelor's, master's and doctoral degrees. The state provides free secondary education to all citizens. Many schools now teach subjects in three languages: Kazakh, Russian and English. The \"Bolashak\" international scholarship programme sends talented students to study at the world's best universities. After graduation, they return to work in Kazakhstan and contribute to the country's development. Despite progress, challenges remain. Rural schools often lack modern equipment and qualified teachers. The government continues to work on improving the quality of education across the country.",
    options: [
      { id: 'edu_004_02_a', text: '1991' },
      { id: 'edu_004_02_b', text: '2000' },
      { id: 'edu_004_02_c', text: '2007' },
      { id: 'edu_004_02_d', text: '2015' }
    ],
    correctOptionIds: ['edu_004_02_c'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_004_03',
    subjectId: "english",
    text: 'The word "modernise" in the passage is closest in meaning to:',
    readingPassage: "The education system in Kazakhstan has undergone significant changes since the country gained independence. Today, education is one of the most important priorities for the development of the nation. The system includes primary school (grades 1-4), basic secondary school (grades 5-9) and senior secondary school (grades 10-11 or 12). In 2007, Kazakhstan joined the Bologna Process to modernise its higher education system. This reform introduced a three-level system: bachelor's, master's and doctoral degrees. The state provides free secondary education to all citizens. Many schools now teach subjects in three languages: Kazakh, Russian and English. The \"Bolashak\" international scholarship programme sends talented students to study at the world's best universities. After graduation, they return to work in Kazakhstan and contribute to the country's development. Despite progress, challenges remain. Rural schools often lack modern equipment and qualified teachers. The government continues to work on improving the quality of education across the country.",
    options: [
      { id: 'edu_004_03_a', text: 'To make something old-fashioned' },
      { id: 'edu_004_03_b', text: 'To update and bring up to current standards' },
      { id: 'edu_004_03_c', text: 'To close down a system' },
      { id: 'edu_004_03_d', text: 'To simplify something' }
    ],
    correctOptionIds: ['edu_004_03_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_004_04',
    subjectId: "english",
    text: 'What can be inferred about the Bolashak programme from the passage?',
    readingPassage: "The education system in Kazakhstan has undergone significant changes since the country gained independence. Today, education is one of the most important priorities for the development of the nation. The system includes primary school (grades 1-4), basic secondary school (grades 5-9) and senior secondary school (grades 10-11 or 12). In 2007, Kazakhstan joined the Bologna Process to modernise its higher education system. This reform introduced a three-level system: bachelor's, master's and doctoral degrees. The state provides free secondary education to all citizens. Many schools now teach subjects in three languages: Kazakh, Russian and English. The \"Bolashak\" international scholarship programme sends talented students to study at the world's best universities. After graduation, they return to work in Kazakhstan and contribute to the country's development. Despite progress, challenges remain. Rural schools often lack modern equipment and qualified teachers. The government continues to work on improving the quality of education across the country.",
    options: [
      { id: 'edu_004_04_a', text: 'It only sends students to Kazakh universities' },
      { id: 'edu_004_04_b', text: 'It is a programme that expects students to return and serve the country' },
      { id: 'edu_004_04_c', text: 'It is available to all students regardless of grades' },
      { id: 'edu_004_04_d', text: 'It focuses only on primary education' }
    ],
    correctOptionIds: ['edu_004_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_004_05',
    subjectId: "english",
    text: "What is the author's main purpose in this passage?",
    readingPassage: "The education system in Kazakhstan has undergone significant changes since the country gained independence. Today, education is one of the most important priorities for the development of the nation. The system includes primary school (grades 1-4), basic secondary school (grades 5-9) and senior secondary school (grades 10-11 or 12). In 2007, Kazakhstan joined the Bologna Process to modernise its higher education system. This reform introduced a three-level system: bachelor's, master's and doctoral degrees. The state provides free secondary education to all citizens. Many schools now teach subjects in three languages: Kazakh, Russian and English. The \"Bolashak\" international scholarship programme sends talented students to study at the world's best universities. After graduation, they return to work in Kazakhstan and contribute to the country's development. Despite progress, challenges remain. Rural schools often lack modern equipment and qualified teachers. The government continues to work on improving the quality of education across the country.",
    options: [
      { id: 'edu_004_05_a', text: 'To criticise the Kazakh education system' },
      { id: 'edu_004_05_b', text: 'To describe the structure, reforms and challenges of education in Kazakhstan' },
      { id: 'edu_004_05_c', text: 'To promote studying abroad exclusively' },
      { id: 'edu_004_05_d', text: 'To compare Kazakhstan with other countries' }
    ],
    correctOptionIds: ['edu_004_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_004_06',
    subjectId: "english",
    text: 'What does "the country" in the passage refer to?',
    readingPassage: "The education system in Kazakhstan has undergone significant changes since the country gained independence. Today, education is one of the most important priorities for the development of the nation. The system includes primary school (grades 1-4), basic secondary school (grades 5-9) and senior secondary school (grades 10-11 or 12). In 2007, Kazakhstan joined the Bologna Process to modernise its higher education system. This reform introduced a three-level system: bachelor's, master's and doctoral degrees. The state provides free secondary education to all citizens. Many schools now teach subjects in three languages: Kazakh, Russian and English. The \"Bolashak\" international scholarship programme sends talented students to study at the world's best universities. After graduation, they return to work in Kazakhstan and contribute to the country's development. Despite progress, challenges remain. Rural schools often lack modern equipment and qualified teachers. The government continues to work on improving the quality of education across the country.",
    options: [
      { id: 'edu_004_06_a', text: 'Russia' },
      { id: 'edu_004_06_b', text: 'Kazakhstan' },
      { id: 'edu_004_06_c', text: 'The United States' },
      { id: 'edu_004_06_d', text: 'An unspecified European country' }
    ],
    correctOptionIds: ['edu_004_06_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_004_07',
    subjectId: "english",
    text: "Which school levels are part of Kazakhstan's education system?",
    readingPassage: "The education system in Kazakhstan has undergone significant changes since the country gained independence. Today, education is one of the most important priorities for the development of the nation. The system includes primary school (grades 1-4), basic secondary school (grades 5-9) and senior secondary school (grades 10-11 or 12). In 2007, Kazakhstan joined the Bologna Process to modernise its higher education system. This reform introduced a three-level system: bachelor's, master's and doctoral degrees. The state provides free secondary education to all citizens. Many schools now teach subjects in three languages: Kazakh, Russian and English. The \"Bolashak\" international scholarship programme sends talented students to study at the world's best universities. After graduation, they return to work in Kazakhstan and contribute to the country's development. Despite progress, challenges remain. Rural schools often lack modern equipment and qualified teachers. The government continues to work on improving the quality of education across the country.",
    options: [
      { id: 'edu_004_07_a', text: 'Only primary and higher education' },
      { id: 'edu_004_07_b', text: 'Primary, basic secondary and senior secondary school' },
      { id: 'edu_004_07_c', text: 'Only kindergarten and university' },
      { id: 'edu_004_07_d', text: 'Only secondary and vocational school' }
    ],
    correctOptionIds: ['edu_004_07_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_004_08',
    subjectId: "english",
    text: 'Rural schools in Kazakhstan are as well-equipped as urban schools.',
    readingPassage: "The education system in Kazakhstan has undergone significant changes since the country gained independence. Today, education is one of the most important priorities for the development of the nation. The system includes primary school (grades 1-4), basic secondary school (grades 5-9) and senior secondary school (grades 10-11 or 12). In 2007, Kazakhstan joined the Bologna Process to modernise its higher education system. This reform introduced a three-level system: bachelor's, master's and doctoral degrees. The state provides free secondary education to all citizens. Many schools now teach subjects in three languages: Kazakh, Russian and English. The \"Bolashak\" international scholarship programme sends talented students to study at the world's best universities. After graduation, they return to work in Kazakhstan and contribute to the country's development. Despite progress, challenges remain. Rural schools often lack modern equipment and qualified teachers. The government continues to work on improving the quality of education across the country.",
    options: [
      { id: 'edu_004_08_a', text: 'True' },
      { id: 'edu_004_08_b', text: 'False' },
      { id: 'edu_004_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_004_08_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },

  // ====== PASSAGE 005 - Science and Technology (A2, medium) ======
  {
    id: 'edu_005_01',
    subjectId: "english",
    text: 'What is the best title for this passage?',
    readingPassage: 'Science and technology play a crucial role in the modern world. They affect every aspect of our daily lives, from communication and transportation to healthcare and entertainment. In recent decades, technological advancements have transformed the way we live, work and learn. The internet, for example, has made information accessible to billions of people around the globe. Smartphones allow us to stay connected with others at any time and from almost anywhere. In the field of medicine, new technologies have led to better diagnosis and treatment of diseases. Scientists are now working on artificial intelligence, which could revolutionise many industries. Renewable energy technologies, such as solar and wind power, are helping to address environmental problems. However, technological progress also brings challenges. Issues like data privacy, cybersecurity and the digital divide between rich and poor countries need to be addressed. Education in science, technology, engineering and mathematics \u2014 known as STEM subjects \u2014 is becoming increasingly important for young people who want to build successful careers in the future.',
    options: [
      { id: 'edu_005_01_a', text: 'The History of the Internet' },
      { id: 'edu_005_01_b', text: 'The Role of Science and Technology in the Modern World' },
      { id: 'edu_005_01_c', text: 'How to Build a Smartphone' },
      { id: 'edu_005_01_d', text: 'Why Renewable Energy is Dangerous' }
    ],
    correctOptionIds: ['edu_005_01_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_005_02',
    subjectId: "english",
    text: 'According to the passage, what has the internet made possible?',
    readingPassage: 'Science and technology play a crucial role in the modern world. They affect every aspect of our daily lives, from communication and transportation to healthcare and entertainment. In recent decades, technological advancements have transformed the way we live, work and learn. The internet, for example, has made information accessible to billions of people around the globe. Smartphones allow us to stay connected with others at any time and from almost anywhere. In the field of medicine, new technologies have led to better diagnosis and treatment of diseases. Scientists are now working on artificial intelligence, which could revolutionise many industries. Renewable energy technologies, such as solar and wind power, are helping to address environmental problems. However, technological progress also brings challenges. Issues like data privacy, cybersecurity and the digital divide between rich and poor countries need to be addressed. Education in science, technology, engineering and mathematics \u2014 known as STEM subjects \u2014 is becoming increasingly important for young people who want to build successful careers in the future.',
    options: [
      { id: 'edu_005_02_a', text: 'Making information accessible to billions of people' },
      { id: 'edu_005_02_b', text: 'Replacing all teachers' },
      { id: 'edu_005_02_c', text: 'Eliminating all diseases' },
      { id: 'edu_005_02_d', text: 'Ending poverty worldwide' }
    ],
    correctOptionIds: ['edu_005_02_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_005_03',
    subjectId: "english",
    text: 'The word "revolutionise" in the passage is closest in meaning to:',
    readingPassage: 'Science and technology play a crucial role in the modern world. They affect every aspect of our daily lives, from communication and transportation to healthcare and entertainment. In recent decades, technological advancements have transformed the way we live, work and learn. The internet, for example, has made information accessible to billions of people around the globe. Smartphones allow us to stay connected with others at any time and from almost anywhere. In the field of medicine, new technologies have led to better diagnosis and treatment of diseases. Scientists are now working on artificial intelligence, which could revolutionise many industries. Renewable energy technologies, such as solar and wind power, are helping to address environmental problems. However, technological progress also brings challenges. Issues like data privacy, cybersecurity and the digital divide between rich and poor countries need to be addressed. Education in science, technology, engineering and mathematics \u2014 known as STEM subjects \u2014 is becoming increasingly important for young people who want to build successful careers in the future.',
    options: [
      { id: 'edu_005_03_a', text: 'To completely change something' },
      { id: 'edu_005_03_b', text: 'To slow down progress' },
      { id: 'edu_005_03_c', text: 'To return to an old system' },
      { id: 'edu_005_03_d', text: 'To ignore something' }
    ],
    correctOptionIds: ['edu_005_03_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_005_04',
    subjectId: "english",
    text: 'What can be inferred about the digital divide from the passage?',
    readingPassage: 'Science and technology play a crucial role in the modern world. They affect every aspect of our daily lives, from communication and transportation to healthcare and entertainment. In recent decades, technological advancements have transformed the way we live, work and learn. The internet, for example, has made information accessible to billions of people around the globe. Smartphones allow us to stay connected with others at any time and from almost anywhere. In the field of medicine, new technologies have led to better diagnosis and treatment of diseases. Scientists are now working on artificial intelligence, which could revolutionise many industries. Renewable energy technologies, such as solar and wind power, are helping to address environmental problems. However, technological progress also brings challenges. Issues like data privacy, cybersecurity and the digital divide between rich and poor countries need to be addressed. Education in science, technology, engineering and mathematics \u2014 known as STEM subjects \u2014 is becoming increasingly important for young people who want to build successful careers in the future.',
    options: [
      { id: 'edu_005_04_a', text: 'It is a problem that has already been solved' },
      { id: 'edu_005_04_b', text: 'It refers to the gap in technology access between different countries' },
      { id: 'edu_005_04_c', text: 'It only affects rich countries' },
      { id: 'edu_005_04_d', text: 'It is not a serious issue' }
    ],
    correctOptionIds: ['edu_005_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_005_05',
    subjectId: "english",
    text: "What is the author's purpose in mentioning STEM subjects?",
    readingPassage: 'Science and technology play a crucial role in the modern world. They affect every aspect of our daily lives, from communication and transportation to healthcare and entertainment. In recent decades, technological advancements have transformed the way we live, work and learn. The internet, for example, has made information accessible to billions of people around the globe. Smartphones allow us to stay connected with others at any time and from almost anywhere. In the field of medicine, new technologies have led to better diagnosis and treatment of diseases. Scientists are now working on artificial intelligence, which could revolutionise many industries. Renewable energy technologies, such as solar and wind power, are helping to address environmental problems. However, technological progress also brings challenges. Issues like data privacy, cybersecurity and the digital divide between rich and poor countries need to be addressed. Education in science, technology, engineering and mathematics \u2014 known as STEM subjects \u2014 is becoming increasingly important for young people who want to build successful careers in the future.',
    options: [
      { id: 'edu_005_05_a', text: 'To suggest that arts are not important' },
      { id: 'edu_005_05_b', text: 'To emphasise the growing importance of technical education for future careers' },
      { id: 'edu_005_05_c', text: 'To argue that STEM subjects are too difficult' },
      { id: 'edu_005_05_d', text: 'To list the easiest university majors' }
    ],
    correctOptionIds: ['edu_005_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_005_06',
    subjectId: "english",
    text: 'What does "they" in the first sentence refer to?',
    readingPassage: 'Science and technology play a crucial role in the modern world. They affect every aspect of our daily lives, from communication and transportation to healthcare and entertainment. In recent decades, technological advancements have transformed the way we live, work and learn. The internet, for example, has made information accessible to billions of people around the globe. Smartphones allow us to stay connected with others at any time and from almost anywhere. In the field of medicine, new technologies have led to better diagnosis and treatment of diseases. Scientists are now working on artificial intelligence, which could revolutionise many industries. Renewable energy technologies, such as solar and wind power, are helping to address environmental problems. However, technological progress also brings challenges. Issues like data privacy, cybersecurity and the digital divide between rich and poor countries need to be addressed. Education in science, technology, engineering and mathematics \u2014 known as STEM subjects \u2014 is becoming increasingly important for young people who want to build successful careers in the future.',
    options: [
      { id: 'edu_005_06_a', text: 'People and animals' },
      { id: 'edu_005_06_b', text: 'Science and technology' },
      { id: 'edu_005_06_c', text: 'Schools and universities' },
      { id: 'edu_005_06_d', text: 'Rich and poor countries' }
    ],
    correctOptionIds: ['edu_005_06_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_005_07',
    subjectId: "english",
    text: 'Which renewable energy sources are mentioned in the passage?',
    readingPassage: 'Science and technology play a crucial role in the modern world. They affect every aspect of our daily lives, from communication and transportation to healthcare and entertainment. In recent decades, technological advancements have transformed the way we live, work and learn. The internet, for example, has made information accessible to billions of people around the globe. Smartphones allow us to stay connected with others at any time and from almost anywhere. In the field of medicine, new technologies have led to better diagnosis and treatment of diseases. Scientists are now working on artificial intelligence, which could revolutionise many industries. Renewable energy technologies, such as solar and wind power, are helping to address environmental problems. However, technological progress also brings challenges. Issues like data privacy, cybersecurity and the digital divide between rich and poor countries need to be addressed. Education in science, technology, engineering and mathematics \u2014 known as STEM subjects \u2014 is becoming increasingly important for young people who want to build successful careers in the future.',
    options: [
      { id: 'edu_005_07_a', text: 'Nuclear and coal power' },
      { id: 'edu_005_07_b', text: 'Solar and wind power' },
      { id: 'edu_005_07_c', text: 'Gas and oil' },
      { id: 'edu_005_07_d', text: 'Hydroelectric and geothermal power' }
    ],
    correctOptionIds: ['edu_005_07_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_005_08',
    subjectId: "english",
    text: 'Technological progress only brings positive changes without any challenges.',
    readingPassage: 'Science and technology play a crucial role in the modern world. They affect every aspect of our daily lives, from communication and transportation to healthcare and entertainment. In recent decades, technological advancements have transformed the way we live, work and learn. The internet, for example, has made information accessible to billions of people around the globe. Smartphones allow us to stay connected with others at any time and from almost anywhere. In the field of medicine, new technologies have led to better diagnosis and treatment of diseases. Scientists are now working on artificial intelligence, which could revolutionise many industries. Renewable energy technologies, such as solar and wind power, are helping to address environmental problems. However, technological progress also brings challenges. Issues like data privacy, cybersecurity and the digital divide between rich and poor countries need to be addressed. Education in science, technology, engineering and mathematics \u2014 known as STEM subjects \u2014 is becoming increasingly important for young people who want to build successful careers in the future.',
    options: [
      { id: 'edu_005_08_a', text: 'True' },
      { id: 'edu_005_08_b', text: 'False' },
      { id: 'edu_005_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_005_08_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },

  // ====== PASSAGE 006 - Famous Scientists (B1, medium) ======
  {
    id: 'edu_006_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: "Throughout history, famous scientists have made remarkable contributions that changed the way we understand the world. One such scientist was Albert Einstein, a German-born physicist who developed the theory of relativity. His famous equation E=mc\u00b2 showed that energy and mass are related. This discovery laid the foundation for many modern technologies, including nuclear energy. Another great scientist was Marie Curie, a Polish-born physicist and chemist. She conducted pioneering research on radioactivity and became the first woman to win a Nobel Prize. She won two Nobel Prizes in different scientific fields. Isaac Newton, an English mathematician and physicist, discovered the laws of motion and universal gravitation. His work explained why objects fall to the ground and how planets move around the sun. In the field of biology, Charles Darwin developed the theory of evolution by natural selection. He showed how species change over time to adapt to their environment. These scientists, among many others, have shaped modern science. Their dedication, curiosity and hard work continue to inspire new generations of researchers around the world.",
    options: [
      { id: 'edu_006_01_a', text: 'Famous scientists and their contributions to modern science' },
      { id: 'edu_006_01_b', text: 'Only Albert Einstein was an important scientist' },
      { id: 'edu_006_01_c', text: 'Science is not useful for everyday life' },
      { id: 'edu_006_01_d', text: 'All scientists come from Europe' }
    ],
    correctOptionIds: ['edu_006_01_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_006_02',
    subjectId: "english",
    text: 'What was Marie Curie known for?',
    readingPassage: "Throughout history, famous scientists have made remarkable contributions that changed the way we understand the world. One such scientist was Albert Einstein, a German-born physicist who developed the theory of relativity. His famous equation E=mc\u00b2 showed that energy and mass are related. This discovery laid the foundation for many modern technologies, including nuclear energy. Another great scientist was Marie Curie, a Polish-born physicist and chemist. She conducted pioneering research on radioactivity and became the first woman to win a Nobel Prize. She won two Nobel Prizes in different scientific fields. Isaac Newton, an English mathematician and physicist, discovered the laws of motion and universal gravitation. His work explained why objects fall to the ground and how planets move around the sun. In the field of biology, Charles Darwin developed the theory of evolution by natural selection. He showed how species change over time to adapt to their environment. These scientists, among many others, have shaped modern science. Their dedication, curiosity and hard work continue to inspire new generations of researchers around the world.",
    options: [
      { id: 'edu_006_02_a', text: 'Her work on the theory of relativity' },
      { id: 'edu_006_02_b', text: 'Her pioneering research on radioactivity' },
      { id: 'edu_006_02_c', text: 'Her discovery of the laws of motion' },
      { id: 'edu_006_02_d', text: 'Her theory of evolution' }
    ],
    correctOptionIds: ['edu_006_02_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_006_03',
    subjectId: "english",
    text: 'The word "pioneering" in the passage is closest in meaning to:',
    readingPassage: "Throughout history, famous scientists have made remarkable contributions that changed the way we understand the world. One such scientist was Albert Einstein, a German-born physicist who developed the theory of relativity. His famous equation E=mc\u00b2 showed that energy and mass are related. This discovery laid the foundation for many modern technologies, including nuclear energy. Another great scientist was Marie Curie, a Polish-born physicist and chemist. She conducted pioneering research on radioactivity and became the first woman to win a Nobel Prize. She won two Nobel Prizes in different scientific fields. Isaac Newton, an English mathematician and physicist, discovered the laws of motion and universal gravitation. His work explained why objects fall to the ground and how planets move around the sun. In the field of biology, Charles Darwin developed the theory of evolution by natural selection. He showed how species change over time to adapt to their environment. These scientists, among many others, have shaped modern science. Their dedication, curiosity and hard work continue to inspire new generations of researchers around the world.",
    options: [
      { id: 'edu_006_03_a', text: 'Following others without originality' },
      { id: 'edu_006_03_b', text: 'Original and ground-breaking' },
      { id: 'edu_006_03_c', text: 'Old and outdated' },
      { id: 'edu_006_03_d', text: 'Simple and easy' }
    ],
    correctOptionIds: ['edu_006_03_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_006_04',
    subjectId: "english",
    text: 'What can be inferred about the scientists mentioned in the passage?',
    readingPassage: "Throughout history, famous scientists have made remarkable contributions that changed the way we understand the world. One such scientist was Albert Einstein, a German-born physicist who developed the theory of relativity. His famous equation E=mc\u00b2 showed that energy and mass are related. This discovery laid the foundation for many modern technologies, including nuclear energy. Another great scientist was Marie Curie, a Polish-born physicist and chemist. She conducted pioneering research on radioactivity and became the first woman to win a Nobel Prize. She won two Nobel Prizes in different scientific fields. Isaac Newton, an English mathematician and physicist, discovered the laws of motion and universal gravitation. His work explained why objects fall to the ground and how planets move around the sun. In the field of biology, Charles Darwin developed the theory of evolution by natural selection. He showed how species change over time to adapt to their environment. These scientists, among many others, have shaped modern science. Their dedication, curiosity and hard work continue to inspire new generations of researchers around the world.",
    options: [
      { id: 'edu_006_04_a', text: 'They worked in isolation without any impact' },
      { id: 'edu_006_04_b', text: 'They made discoveries that still influence science today' },
      { id: 'edu_006_04_c', text: 'Their work was rejected by everyone' },
      { id: 'edu_006_04_d', text: 'They only worked in one field of science' }
    ],
    correctOptionIds: ['edu_006_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_006_05',
    subjectId: "english",
    text: "What is the author's purpose in writing this passage?",
    readingPassage: "Throughout history, famous scientists have made remarkable contributions that changed the way we understand the world. One such scientist was Albert Einstein, a German-born physicist who developed the theory of relativity. His famous equation E=mc\u00b2 showed that energy and mass are related. This discovery laid the foundation for many modern technologies, including nuclear energy. Another great scientist was Marie Curie, a Polish-born physicist and chemist. She conducted pioneering research on radioactivity and became the first woman to win a Nobel Prize. She won two Nobel Prizes in different scientific fields. Isaac Newton, an English mathematician and physicist, discovered the laws of motion and universal gravitation. His work explained why objects fall to the ground and how planets move around the sun. In the field of biology, Charles Darwin developed the theory of evolution by natural selection. He showed how species change over time to adapt to their environment. These scientists, among many others, have shaped modern science. Their dedication, curiosity and hard work continue to inspire new generations of researchers around the world.",
    options: [
      { id: 'edu_006_05_a', text: 'To entertain readers with funny stories about scientists' },
      { id: 'edu_006_05_b', text: 'To inform and inspire by highlighting key scientific achievements' },
      { id: 'edu_006_05_c', text: 'To argue that science is too difficult to understand' },
      { id: 'edu_006_05_d', text: 'To compare the intelligence of different scientists' }
    ],
    correctOptionIds: ['edu_006_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_006_06',
    subjectId: "english",
    text: 'In the passage, what does "his work" refer to?',
    readingPassage: "Throughout history, famous scientists have made remarkable contributions that changed the way we understand the world. One such scientist was Albert Einstein, a German-born physicist who developed the theory of relativity. His famous equation E=mc\u00b2 showed that energy and mass are related. This discovery laid the foundation for many modern technologies, including nuclear energy. Another great scientist was Marie Curie, a Polish-born physicist and chemist. She conducted pioneering research on radioactivity and became the first woman to win a Nobel Prize. She won two Nobel Prizes in different scientific fields. Isaac Newton, an English mathematician and physicist, discovered the laws of motion and universal gravitation. His work explained why objects fall to the ground and how planets move around the sun. In the field of biology, Charles Darwin developed the theory of evolution by natural selection. He showed how species change over time to adapt to their environment. These scientists, among many others, have shaped modern science. Their dedication, curiosity and hard work continue to inspire new generations of researchers around the world.",
    options: [
      { id: 'edu_006_06_a', text: "Charles Darwin's research on evolution" },
      { id: 'edu_006_06_b', text: "Isaac Newton's discovery of the laws of motion and gravity" },
      { id: 'edu_006_06_c', text: "Marie Curie's work on radioactivity" },
      { id: 'edu_006_06_d', text: "Albert Einstein's theory of relativity" }
    ],
    correctOptionIds: ['edu_006_06_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_006_07',
    subjectId: "english",
    text: 'How many Nobel Prizes did Marie Curie win?',
    readingPassage: "Throughout history, famous scientists have made remarkable contributions that changed the way we understand the world. One such scientist was Albert Einstein, a German-born physicist who developed the theory of relativity. His famous equation E=mc\u00b2 showed that energy and mass are related. This discovery laid the foundation for many modern technologies, including nuclear energy. Another great scientist was Marie Curie, a Polish-born physicist and chemist. She conducted pioneering research on radioactivity and became the first woman to win a Nobel Prize. She won two Nobel Prizes in different scientific fields. Isaac Newton, an English mathematician and physicist, discovered the laws of motion and universal gravitation. His work explained why objects fall to the ground and how planets move around the sun. In the field of biology, Charles Darwin developed the theory of evolution by natural selection. He showed how species change over time to adapt to their environment. These scientists, among many others, have shaped modern science. Their dedication, curiosity and hard work continue to inspire new generations of researchers around the world.",
    options: [
      { id: 'edu_006_07_a', text: 'One' },
      { id: 'edu_006_07_b', text: 'Two' },
      { id: 'edu_006_07_c', text: 'Three' },
      { id: 'edu_006_07_d', text: 'Four' }
    ],
    correctOptionIds: ['edu_006_07_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_006_08',
    subjectId: "english",
    text: "Charles Darwin developed his theory of evolution alone without building on others' work.",
    readingPassage: "Throughout history, famous scientists have made remarkable contributions that changed the way we understand the world. One such scientist was Albert Einstein, a German-born physicist who developed the theory of relativity. His famous equation E=mc\u00b2 showed that energy and mass are related. This discovery laid the foundation for many modern technologies, including nuclear energy. Another great scientist was Marie Curie, a Polish-born physicist and chemist. She conducted pioneering research on radioactivity and became the first woman to win a Nobel Prize. She won two Nobel Prizes in different scientific fields. Isaac Newton, an English mathematician and physicist, discovered the laws of motion and universal gravitation. His work explained why objects fall to the ground and how planets move around the sun. In the field of biology, Charles Darwin developed the theory of evolution by natural selection. He showed how species change over time to adapt to their environment. These scientists, among many others, have shaped modern science. Their dedication, curiosity and hard work continue to inspire new generations of researchers around the world.",
    options: [
      { id: 'edu_006_08_a', text: 'True' },
      { id: 'edu_006_08_b', text: 'False' },
      { id: 'edu_006_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_006_08_c'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },

  // ====== PASSAGE 007 - Youth Policy (B1, medium) ======
  {
    id: 'edu_007_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: "Youth policy in Kazakhstan is an important part of the country's development strategy. The government recognises that young people are the future of the nation and invests in their education, health and well-being. There are several state programmes aimed at supporting the youth of Kazakhstan. One of the most well-known is the \"Youth Practice\" programme, which helps graduates gain their first work experience. Another important initiative is \"Zhasyl El\", which involves young people in environmental projects. The \"Daryn\" state scientific-practical centre works with gifted children and helps them develop their talents. Additionally, youth labour groups provide students with the opportunity to earn money during summer holidays while learning valuable skills. Youth resource centres operate in every region of the country. They offer free legal advice, psychological support and career guidance to young people aged 14 to 29. These centres also organise cultural events, sports competitions and educational seminars. Despite these efforts, some challenges remain. Unemployment among young people is still a concern, and not all rural youth have equal access to opportunities. The government continues to develop new policies to address these issues and create better conditions for the younger generation.",
    options: [
      { id: 'edu_007_01_a', text: "Kazakhstan's government supports youth through various programmes and centres" },
      { id: 'edu_007_01_b', text: 'Young people in Kazakhstan do not need any support' },
      { id: 'edu_007_01_c', text: 'Only urban youth receive support in Kazakhstan' },
      { id: 'edu_007_01_d', text: 'Youth policy is not a priority in Kazakhstan' }
    ],
    correctOptionIds: ['edu_007_01_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_007_02',
    subjectId: "english",
    text: 'What is the "Youth Practice" programme designed to do?',
    readingPassage: "Youth policy in Kazakhstan is an important part of the country's development strategy. The government recognises that young people are the future of the nation and invests in their education, health and well-being. There are several state programmes aimed at supporting the youth of Kazakhstan. One of the most well-known is the \"Youth Practice\" programme, which helps graduates gain their first work experience. Another important initiative is \"Zhasyl El\", which involves young people in environmental projects. The \"Daryn\" state scientific-practical centre works with gifted children and helps them develop their talents. Additionally, youth labour groups provide students with the opportunity to earn money during summer holidays while learning valuable skills. Youth resource centres operate in every region of the country. They offer free legal advice, psychological support and career guidance to young people aged 14 to 29. These centres also organise cultural events, sports competitions and educational seminars. Despite these efforts, some challenges remain. Unemployment among young people is still a concern, and not all rural youth have equal access to opportunities. The government continues to develop new policies to address these issues and create better conditions for the younger generation.",
    options: [
      { id: 'edu_007_02_a', text: 'To send young people abroad' },
      { id: 'edu_007_02_b', text: 'To help graduates gain their first work experience' },
      { id: 'edu_007_02_c', text: 'To provide free housing' },
      { id: 'edu_007_02_d', text: 'To organise sports events only' }
    ],
    correctOptionIds: ['edu_007_02_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_007_03',
    subjectId: "english",
    text: 'The word "initiative" in the passage is closest in meaning to:',
    readingPassage: "Youth policy in Kazakhstan is an important part of the country's development strategy. The government recognises that young people are the future of the nation and invests in their education, health and well-being. There are several state programmes aimed at supporting the youth of Kazakhstan. One of the most well-known is the \"Youth Practice\" programme, which helps graduates gain their first work experience. Another important initiative is \"Zhasyl El\", which involves young people in environmental projects. The \"Daryn\" state scientific-practical centre works with gifted children and helps them develop their talents. Additionally, youth labour groups provide students with the opportunity to earn money during summer holidays while learning valuable skills. Youth resource centres operate in every region of the country. They offer free legal advice, psychological support and career guidance to young people aged 14 to 29. These centres also organise cultural events, sports competitions and educational seminars. Despite these efforts, some challenges remain. Unemployment among young people is still a concern, and not all rural youth have equal access to opportunities. The government continues to develop new policies to address these issues and create better conditions for the younger generation.",
    options: [
      { id: 'edu_007_03_a', text: 'A problem that needs solving' },
      { id: 'edu_007_03_b', text: 'A new plan or action to address an issue' },
      { id: 'edu_007_03_c', text: 'A law passed by parliament' },
      { id: 'edu_007_03_d', text: 'A type of business' }
    ],
    correctOptionIds: ['edu_007_03_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_007_04',
    subjectId: "english",
    text: 'What can be inferred about youth resource centres from the passage?',
    readingPassage: "Youth policy in Kazakhstan is an important part of the country's development strategy. The government recognises that young people are the future of the nation and invests in their education, health and well-being. There are several state programmes aimed at supporting the youth of Kazakhstan. One of the most well-known is the \"Youth Practice\" programme, which helps graduates gain their first work experience. Another important initiative is \"Zhasyl El\", which involves young people in environmental projects. The \"Daryn\" state scientific-practical centre works with gifted children and helps them develop their talents. Additionally, youth labour groups provide students with the opportunity to earn money during summer holidays while learning valuable skills. Youth resource centres operate in every region of the country. They offer free legal advice, psychological support and career guidance to young people aged 14 to 29. These centres also organise cultural events, sports competitions and educational seminars. Despite these efforts, some challenges remain. Unemployment among young people is still a concern, and not all rural youth have equal access to opportunities. The government continues to develop new policies to address these issues and create better conditions for the younger generation.",
    options: [
      { id: 'edu_007_04_a', text: 'They only serve students from urban areas' },
      { id: 'edu_007_04_b', text: 'They are available across the country and offer a range of free services' },
      { id: 'edu_007_04_c', text: 'They charge high fees for their services' },
      { id: 'edu_007_04_d', text: 'They focus exclusively on job placement' }
    ],
    correctOptionIds: ['edu_007_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_007_05',
    subjectId: "english",
    text: "What is the author's purpose in mentioning the challenges of youth policy?",
    readingPassage: "Youth policy in Kazakhstan is an important part of the country's development strategy. The government recognises that young people are the future of the nation and invests in their education, health and well-being. There are several state programmes aimed at supporting the youth of Kazakhstan. One of the most well-known is the \"Youth Practice\" programme, which helps graduates gain their first work experience. Another important initiative is \"Zhasyl El\", which involves young people in environmental projects. The \"Daryn\" state scientific-practical centre works with gifted children and helps them develop their talents. Additionally, youth labour groups provide students with the opportunity to earn money during summer holidays while learning valuable skills. Youth resource centres operate in every region of the country. They offer free legal advice, psychological support and career guidance to young people aged 14 to 29. These centres also organise cultural events, sports competitions and educational seminars. Despite these efforts, some challenges remain. Unemployment among young people is still a concern, and not all rural youth have equal access to opportunities. The government continues to develop new policies to address these issues and create better conditions for the younger generation.",
    options: [
      { id: 'edu_007_05_a', text: 'To show that the government has completely failed' },
      { id: 'edu_007_05_b', text: 'To provide a balanced view and show there is still work to be done' },
      { id: 'edu_007_05_c', text: 'To argue for reducing support for youth programmes' },
      { id: 'edu_007_05_d', text: 'To compare Kazakhstan with other countries' }
    ],
    correctOptionIds: ['edu_007_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_007_06',
    subjectId: "english",
    text: 'What does "these centres" in the passage refer to?',
    readingPassage: "Youth policy in Kazakhstan is an important part of the country's development strategy. The government recognises that young people are the future of the nation and invests in their education, health and well-being. There are several state programmes aimed at supporting the youth of Kazakhstan. One of the most well-known is the \"Youth Practice\" programme, which helps graduates gain their first work experience. Another important initiative is \"Zhasyl El\", which involves young people in environmental projects. The \"Daryn\" state scientific-practical centre works with gifted children and helps them develop their talents. Additionally, youth labour groups provide students with the opportunity to earn money during summer holidays while learning valuable skills. Youth resource centres operate in every region of the country. They offer free legal advice, psychological support and career guidance to young people aged 14 to 29. These centres also organise cultural events, sports competitions and educational seminars. Despite these efforts, some challenges remain. Unemployment among young people is still a concern, and not all rural youth have equal access to opportunities. The government continues to develop new policies to address these issues and create better conditions for the younger generation.",
    options: [
      { id: 'edu_007_06_a', text: 'Youth labour groups' },
      { id: 'edu_007_06_b', text: 'Youth resource centres' },
      { id: 'edu_007_06_c', text: 'State scientific centres' },
      { id: 'edu_007_06_d', text: 'Summer schools' }
    ],
    correctOptionIds: ['edu_007_06_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_007_07',
    subjectId: "english",
    text: 'What age group do youth resource centres serve?',
    readingPassage: "Youth policy in Kazakhstan is an important part of the country's development strategy. The government recognises that young people are the future of the nation and invests in their education, health and well-being. There are several state programmes aimed at supporting the youth of Kazakhstan. One of the most well-known is the \"Youth Practice\" programme, which helps graduates gain their first work experience. Another important initiative is \"Zhasyl El\", which involves young people in environmental projects. The \"Daryn\" state scientific-practical centre works with gifted children and helps them develop their talents. Additionally, youth labour groups provide students with the opportunity to earn money during summer holidays while learning valuable skills. Youth resource centres operate in every region of the country. They offer free legal advice, psychological support and career guidance to young people aged 14 to 29. These centres also organise cultural events, sports competitions and educational seminars. Despite these efforts, some challenges remain. Unemployment among young people is still a concern, and not all rural youth have equal access to opportunities. The government continues to develop new policies to address these issues and create better conditions for the younger generation.",
    options: [
      { id: 'edu_007_07_a', text: 'Children aged 5 to 13' },
      { id: 'edu_007_07_b', text: 'Young people aged 14 to 29' },
      { id: 'edu_007_07_c', text: 'Adults aged 30 to 50' },
      { id: 'edu_007_07_d', text: 'Senior citizens over 60' }
    ],
    correctOptionIds: ['edu_007_07_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_007_08',
    subjectId: "english",
    text: 'All young people in Kazakhstan, including those in rural areas, have equal access to opportunities.',
    readingPassage: "Youth policy in Kazakhstan is an important part of the country's development strategy. The government recognises that young people are the future of the nation and invests in their education, health and well-being. There are several state programmes aimed at supporting the youth of Kazakhstan. One of the most well-known is the \"Youth Practice\" programme, which helps graduates gain their first work experience. Another important initiative is \"Zhasyl El\", which involves young people in environmental projects. The \"Daryn\" state scientific-practical centre works with gifted children and helps them develop their talents. Additionally, youth labour groups provide students with the opportunity to earn money during summer holidays while learning valuable skills. Youth resource centres operate in every region of the country. They offer free legal advice, psychological support and career guidance to young people aged 14 to 29. These centres also organise cultural events, sports competitions and educational seminars. Despite these efforts, some challenges remain. Unemployment among young people is still a concern, and not all rural youth have equal access to opportunities. The government continues to develop new policies to address these issues and create better conditions for the younger generation.",
    options: [
      { id: 'edu_007_08_a', text: 'True' },
      { id: 'edu_007_08_b', text: 'False' },
      { id: 'edu_007_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_007_08_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },

  // ====== PASSAGE 008 - Ecology and Environment (B1, medium) ======
  {
    id: 'edu_008_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: 'Ecology and environmental protection have become pressing global issues in the twenty-first century. Human activities such as industrial production, deforestation and the burning of fossil fuels have significantly damaged the natural environment. The consequences include air and water pollution, loss of biodiversity and climate change. Many countries, including Kazakhstan, are taking steps to address these problems. Kazakhstan has established several national parks and nature reserves to protect its unique flora and fauna. The country is also investing in renewable energy sources to reduce its carbon footprint. The Red Book of Kazakhstan lists rare and endangered species that need special protection. Environmental education is becoming more important in schools. Students learn about the importance of recycling, saving water and reducing waste. Public awareness campaigns encourage citizens to take part in clean-up events and tree-planting activities. However, individual efforts alone are not enough. Governments, businesses and international organisations must work together to create sustainable solutions. The future of our planet depends on the actions we take today to preserve the environment for generations to come.',
    options: [
      { id: 'edu_008_01_a', text: 'Environmental problems are not serious and do not need attention' },
      { id: 'edu_008_01_b', text: 'Environmental damage requires collective action from individuals, governments and organisations' },
      { id: 'edu_008_01_c', text: 'Only Kazakhstan is affected by environmental problems' },
      { id: 'edu_008_01_d', text: 'Industrial production has no effect on the environment' }
    ],
    correctOptionIds: ['edu_008_01_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_008_02',
    subjectId: "english",
    text: 'What does the Red Book of Kazakhstan contain?',
    readingPassage: 'Ecology and environmental protection have become pressing global issues in the twenty-first century. Human activities such as industrial production, deforestation and the burning of fossil fuels have significantly damaged the natural environment. The consequences include air and water pollution, loss of biodiversity and climate change. Many countries, including Kazakhstan, are taking steps to address these problems. Kazakhstan has established several national parks and nature reserves to protect its unique flora and fauna. The country is also investing in renewable energy sources to reduce its carbon footprint. The Red Book of Kazakhstan lists rare and endangered species that need special protection. Environmental education is becoming more important in schools. Students learn about the importance of recycling, saving water and reducing waste. Public awareness campaigns encourage citizens to take part in clean-up events and tree-planting activities. However, individual efforts alone are not enough. Governments, businesses and international organisations must work together to create sustainable solutions. The future of our planet depends on the actions we take today to preserve the environment for generations to come.',
    options: [
      { id: 'edu_008_02_a', text: 'A list of all animals in Kazakhstan' },
      { id: 'edu_008_02_b', text: 'A list of rare and endangered species that need protection' },
      { id: 'edu_008_02_c', text: 'A record of industrial companies' },
      { id: 'edu_008_02_d', text: 'A guide to national parks' }
    ],
    correctOptionIds: ['edu_008_02_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_008_03',
    subjectId: "english",
    text: 'The word "pressing" in the passage is closest in meaning to:',
    readingPassage: 'Ecology and environmental protection have become pressing global issues in the twenty-first century. Human activities such as industrial production, deforestation and the burning of fossil fuels have significantly damaged the natural environment. The consequences include air and water pollution, loss of biodiversity and climate change. Many countries, including Kazakhstan, are taking steps to address these problems. Kazakhstan has established several national parks and nature reserves to protect its unique flora and fauna. The country is also investing in renewable energy sources to reduce its carbon footprint. The Red Book of Kazakhstan lists rare and endangered species that need special protection. Environmental education is becoming more important in schools. Students learn about the importance of recycling, saving water and reducing waste. Public awareness campaigns encourage citizens to take part in clean-up events and tree-planting activities. However, individual efforts alone are not enough. Governments, businesses and international organisations must work together to create sustainable solutions. The future of our planet depends on the actions we take today to preserve the environment for generations to come.',
    options: [
      { id: 'edu_008_03_a', text: 'Unimportant and minor' },
      { id: 'edu_008_03_b', text: 'Urgent and requiring immediate attention' },
      { id: 'edu_008_03_c', text: 'Easy to solve' },
      { id: 'edu_008_03_d', text: 'Simple and straightforward' }
    ],
    correctOptionIds: ['edu_008_03_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_008_04',
    subjectId: "english",
    text: 'What can be inferred about environmental education in Kazakhstan?',
    readingPassage: 'Ecology and environmental protection have become pressing global issues in the twenty-first century. Human activities such as industrial production, deforestation and the burning of fossil fuels have significantly damaged the natural environment. The consequences include air and water pollution, loss of biodiversity and climate change. Many countries, including Kazakhstan, are taking steps to address these problems. Kazakhstan has established several national parks and nature reserves to protect its unique flora and fauna. The country is also investing in renewable energy sources to reduce its carbon footprint. The Red Book of Kazakhstan lists rare and endangered species that need special protection. Environmental education is becoming more important in schools. Students learn about the importance of recycling, saving water and reducing waste. Public awareness campaigns encourage citizens to take part in clean-up events and tree-planting activities. However, individual efforts alone are not enough. Governments, businesses and international organisations must work together to create sustainable solutions. The future of our planet depends on the actions we take today to preserve the environment for generations to come.',
    options: [
      { id: 'edu_008_04_a', text: 'It is not taught in Kazakh schools at all' },
      { id: 'edu_008_04_b', text: 'It is being integrated into school curricula to raise awareness' },
      { id: 'edu_008_04_c', text: 'It focuses only on theoretical knowledge' },
      { id: 'edu_008_04_d', text: 'It was more important in the past than now' }
    ],
    correctOptionIds: ['edu_008_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_008_05',
    subjectId: "english",
    text: "What is the author's main purpose in this passage?",
    readingPassage: 'Ecology and environmental protection have become pressing global issues in the twenty-first century. Human activities such as industrial production, deforestation and the burning of fossil fuels have significantly damaged the natural environment. The consequences include air and water pollution, loss of biodiversity and climate change. Many countries, including Kazakhstan, are taking steps to address these problems. Kazakhstan has established several national parks and nature reserves to protect its unique flora and fauna. The country is also investing in renewable energy sources to reduce its carbon footprint. The Red Book of Kazakhstan lists rare and endangered species that need special protection. Environmental education is becoming more important in schools. Students learn about the importance of recycling, saving water and reducing waste. Public awareness campaigns encourage citizens to take part in clean-up events and tree-planting activities. However, individual efforts alone are not enough. Governments, businesses and international organisations must work together to create sustainable solutions. The future of our planet depends on the actions we take today to preserve the environment for generations to come.',
    options: [
      { id: 'edu_008_05_a', text: 'To argue that environmental problems are exaggerated' },
      { id: 'edu_008_05_b', text: 'To raise awareness about environmental issues and promote collective action' },
      { id: 'edu_008_05_c', text: 'To describe only the problems without mentioning solutions' },
      { id: 'edu_008_05_d', text: 'To promote a specific political party' }
    ],
    correctOptionIds: ['edu_008_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_008_06',
    subjectId: "english",
    text: 'What does "its carbon footprint" in the passage refer to?',
    readingPassage: 'Ecology and environmental protection have become pressing global issues in the twenty-first century. Human activities such as industrial production, deforestation and the burning of fossil fuels have significantly damaged the natural environment. The consequences include air and water pollution, loss of biodiversity and climate change. Many countries, including Kazakhstan, are taking steps to address these problems. Kazakhstan has established several national parks and nature reserves to protect its unique flora and fauna. The country is also investing in renewable energy sources to reduce its carbon footprint. The Red Book of Kazakhstan lists rare and endangered species that need special protection. Environmental education is becoming more important in schools. Students learn about the importance of recycling, saving water and reducing waste. Public awareness campaigns encourage citizens to take part in clean-up events and tree-planting activities. However, individual efforts alone are not enough. Governments, businesses and international organisations must work together to create sustainable solutions. The future of our planet depends on the actions we take today to preserve the environment for generations to come.',
    options: [
      { id: 'edu_008_06_a', text: 'The total amount of greenhouse gases produced by Kazakhstan' },
      { id: 'edu_008_06_b', text: 'The number of cars in the country' },
      { id: 'edu_008_06_c', text: 'The size of the national parks' },
      { id: 'edu_008_06_d', text: 'The amount of waste produced by schools' }
    ],
    correctOptionIds: ['edu_008_06_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_008_07',
    subjectId: "english",
    text: 'What actions are mentioned as part of public awareness campaigns?',
    readingPassage: 'Ecology and environmental protection have become pressing global issues in the twenty-first century. Human activities such as industrial production, deforestation and the burning of fossil fuels have significantly damaged the natural environment. The consequences include air and water pollution, loss of biodiversity and climate change. Many countries, including Kazakhstan, are taking steps to address these problems. Kazakhstan has established several national parks and nature reserves to protect its unique flora and fauna. The country is also investing in renewable energy sources to reduce its carbon footprint. The Red Book of Kazakhstan lists rare and endangered species that need special protection. Environmental education is becoming more important in schools. Students learn about the importance of recycling, saving water and reducing waste. Public awareness campaigns encourage citizens to take part in clean-up events and tree-planting activities. However, individual efforts alone are not enough. Governments, businesses and international organisations must work together to create sustainable solutions. The future of our planet depends on the actions we take today to preserve the environment for generations to come.',
    options: [
      { id: 'edu_008_07_a', text: 'Building factories and roads' },
      { id: 'edu_008_07_b', text: 'Clean-up events and tree-planting activities' },
      { id: 'edu_008_07_c', text: 'Increasing industrial production' },
      { id: 'edu_008_07_d', text: 'Burning more fossil fuels' }
    ],
    correctOptionIds: ['edu_008_07_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },
  {
    id: 'edu_008_08',
    subjectId: "english",
    text: 'Individual efforts alone are sufficient to solve environmental problems.',
    readingPassage: 'Ecology and environmental protection have become pressing global issues in the twenty-first century. Human activities such as industrial production, deforestation and the burning of fossil fuels have significantly damaged the natural environment. The consequences include air and water pollution, loss of biodiversity and climate change. Many countries, including Kazakhstan, are taking steps to address these problems. Kazakhstan has established several national parks and nature reserves to protect its unique flora and fauna. The country is also investing in renewable energy sources to reduce its carbon footprint. The Red Book of Kazakhstan lists rare and endangered species that need special protection. Environmental education is becoming more important in schools. Students learn about the importance of recycling, saving water and reducing waste. Public awareness campaigns encourage citizens to take part in clean-up events and tree-planting activities. However, individual efforts alone are not enough. Governments, businesses and international organisations must work together to create sustainable solutions. The future of our planet depends on the actions we take today to preserve the environment for generations to come.',
    options: [
      { id: 'edu_008_08_a', text: 'True' },
      { id: 'edu_008_08_b', text: 'False' },
      { id: 'edu_008_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_008_08_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "medium"
  },

  // ====== PASSAGE 009 - Technical Progress (B2, hard) ======
  {
    id: 'edu_009_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: 'Technical progress in the twenty-first century is proceeding at an unprecedented pace. Innovations that seemed like science fiction just a few decades ago have become part of everyday reality. Artificial intelligence, robotics, biotechnology and quantum computing are among the most transformative technologies of our time. AI-powered systems now perform tasks that once required human intelligence, from diagnosing medical conditions to translating languages and driving vehicles. The Fourth Industrial Revolution, a term popularised by Klaus Schwab, describes the fusion of digital, biological and physical worlds. This revolution is fundamentally changing how we produce goods, deliver services and interact with each other. Automation and smart manufacturing are increasing efficiency in factories, while blockchain technology is transforming financial transactions and supply chain management. However, technical progress also raises important ethical questions. The widespread use of AI threatens jobs in certain sectors. Concerns about data privacy and surveillance are growing. There is also the risk that technological advances will benefit only a small portion of the population, widening the gap between the rich and the poor. Society must carefully manage these challenges to ensure that technical progress serves humanity as a whole.',
    options: [
      { id: 'edu_009_01_a', text: 'Technical progress is happening slowly and has little impact' },
      { id: 'edu_009_01_b', text: 'Rapid technical progress brings both transformative benefits and significant ethical challenges' },
      { id: 'edu_009_01_c', text: 'Only AI technology is important in the modern world' },
      { id: 'edu_009_01_d', text: 'Technical progress only affects the manufacturing sector' }
    ],
    correctOptionIds: ['edu_009_01_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_009_02',
    subjectId: "english",
    text: 'According to the passage, what is the Fourth Industrial Revolution?',
    readingPassage: 'Technical progress in the twenty-first century is proceeding at an unprecedented pace. Innovations that seemed like science fiction just a few decades ago have become part of everyday reality. Artificial intelligence, robotics, biotechnology and quantum computing are among the most transformative technologies of our time. AI-powered systems now perform tasks that once required human intelligence, from diagnosing medical conditions to translating languages and driving vehicles. The Fourth Industrial Revolution, a term popularised by Klaus Schwab, describes the fusion of digital, biological and physical worlds. This revolution is fundamentally changing how we produce goods, deliver services and interact with each other. Automation and smart manufacturing are increasing efficiency in factories, while blockchain technology is transforming financial transactions and supply chain management. However, technical progress also raises important ethical questions. The widespread use of AI threatens jobs in certain sectors. Concerns about data privacy and surveillance are growing. There is also the risk that technological advances will benefit only a small portion of the population, widening the gap between the rich and the poor. Society must carefully manage these challenges to ensure that technical progress serves humanity as a whole.',
    options: [
      { id: 'edu_009_02_a', text: 'A period of slow industrial decline' },
      { id: 'edu_009_02_b', text: 'The fusion of digital, biological and physical worlds' },
      { id: 'edu_009_02_c', text: 'A political movement against technology' },
      { id: 'edu_009_02_d', text: 'A return to traditional manufacturing methods' }
    ],
    correctOptionIds: ['edu_009_02_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_009_03',
    subjectId: "english",
    text: 'The word "unprecedented" in the passage is closest in meaning to:',
    readingPassage: 'Technical progress in the twenty-first century is proceeding at an unprecedented pace. Innovations that seemed like science fiction just a few decades ago have become part of everyday reality. Artificial intelligence, robotics, biotechnology and quantum computing are among the most transformative technologies of our time. AI-powered systems now perform tasks that once required human intelligence, from diagnosing medical conditions to translating languages and driving vehicles. The Fourth Industrial Revolution, a term popularised by Klaus Schwab, describes the fusion of digital, biological and physical worlds. This revolution is fundamentally changing how we produce goods, deliver services and interact with each other. Automation and smart manufacturing are increasing efficiency in factories, while blockchain technology is transforming financial transactions and supply chain management. However, technical progress also raises important ethical questions. The widespread use of AI threatens jobs in certain sectors. Concerns about data privacy and surveillance are growing. There is also the risk that technological advances will benefit only a small portion of the population, widening the gap between the rich and the poor. Society must carefully manage these challenges to ensure that technical progress serves humanity as a whole.',
    options: [
      { id: 'edu_009_03_a', text: 'Slow and expected' },
      { id: 'edu_009_03_b', text: 'Never done or known before' },
      { id: 'edu_009_03_c', text: 'Dangerous and harmful' },
      { id: 'edu_009_03_d', text: 'Temporary and short-lived' }
    ],
    correctOptionIds: ['edu_009_03_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_009_04',
    subjectId: "english",
    text: "What can be inferred about the author's attitude toward technical progress?",
    readingPassage: 'Technical progress in the twenty-first century is proceeding at an unprecedented pace. Innovations that seemed like science fiction just a few decades ago have become part of everyday reality. Artificial intelligence, robotics, biotechnology and quantum computing are among the most transformative technologies of our time. AI-powered systems now perform tasks that once required human intelligence, from diagnosing medical conditions to translating languages and driving vehicles. The Fourth Industrial Revolution, a term popularised by Klaus Schwab, describes the fusion of digital, biological and physical worlds. This revolution is fundamentally changing how we produce goods, deliver services and interact with each other. Automation and smart manufacturing are increasing efficiency in factories, while blockchain technology is transforming financial transactions and supply chain management. However, technical progress also raises important ethical questions. The widespread use of AI threatens jobs in certain sectors. Concerns about data privacy and surveillance are growing. There is also the risk that technological advances will benefit only a small portion of the population, widening the gap between the rich and the poor. Society must carefully manage these challenges to ensure that technical progress serves humanity as a whole.',
    options: [
      { id: 'edu_009_04_a', text: 'Completely negative and opposed to all technology' },
      { id: 'edu_009_04_b', text: 'Balanced - acknowledging benefits while warning about risks' },
      { id: 'edu_009_04_c', text: 'Unconditionally positive and optimistic' },
      { id: 'edu_009_04_d', text: 'Indifferent and uninterested' }
    ],
    correctOptionIds: ['edu_009_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_009_05',
    subjectId: "english",
    text: "What is the author's main purpose in discussing the risks of technical progress?",
    readingPassage: 'Technical progress in the twenty-first century is proceeding at an unprecedented pace. Innovations that seemed like science fiction just a few decades ago have become part of everyday reality. Artificial intelligence, robotics, biotechnology and quantum computing are among the most transformative technologies of our time. AI-powered systems now perform tasks that once required human intelligence, from diagnosing medical conditions to translating languages and driving vehicles. The Fourth Industrial Revolution, a term popularised by Klaus Schwab, describes the fusion of digital, biological and physical worlds. This revolution is fundamentally changing how we produce goods, deliver services and interact with each other. Automation and smart manufacturing are increasing efficiency in factories, while blockchain technology is transforming financial transactions and supply chain management. However, technical progress also raises important ethical questions. The widespread use of AI threatens jobs in certain sectors. Concerns about data privacy and surveillance are growing. There is also the risk that technological advances will benefit only a small portion of the population, widening the gap between the rich and the poor. Society must carefully manage these challenges to ensure that technical progress serves humanity as a whole.',
    options: [
      { id: 'edu_009_05_a', text: 'To argue that technology should be banned' },
      { id: 'edu_009_05_b', text: 'To encourage society to manage the challenges responsibly' },
      { id: 'edu_009_05_c', text: 'To prove that all technology is dangerous' },
      { id: 'edu_009_05_d', text: 'To entertain readers with science fiction scenarios' }
    ],
    correctOptionIds: ['edu_009_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_009_06',
    subjectId: "english",
    text: 'What does "this revolution" in the passage refer to?',
    readingPassage: 'Technical progress in the twenty-first century is proceeding at an unprecedented pace. Innovations that seemed like science fiction just a few decades ago have become part of everyday reality. Artificial intelligence, robotics, biotechnology and quantum computing are among the most transformative technologies of our time. AI-powered systems now perform tasks that once required human intelligence, from diagnosing medical conditions to translating languages and driving vehicles. The Fourth Industrial Revolution, a term popularised by Klaus Schwab, describes the fusion of digital, biological and physical worlds. This revolution is fundamentally changing how we produce goods, deliver services and interact with each other. Automation and smart manufacturing are increasing efficiency in factories, while blockchain technology is transforming financial transactions and supply chain management. However, technical progress also raises important ethical questions. The widespread use of AI threatens jobs in certain sectors. Concerns about data privacy and surveillance are growing. There is also the risk that technological advances will benefit only a small portion of the population, widening the gap between the rich and the poor. Society must carefully manage these challenges to ensure that technical progress serves humanity as a whole.',
    options: [
      { id: 'edu_009_06_a', text: 'The political revolution in Europe' },
      { id: 'edu_009_06_b', text: 'The Fourth Industrial Revolution' },
      { id: 'edu_009_06_c', text: 'The agricultural revolution' },
      { id: 'edu_009_06_d', text: 'The cultural revolution in Asia' }
    ],
    correctOptionIds: ['edu_009_06_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_009_07',
    subjectId: "english",
    text: 'Which sectors are mentioned as being transformed by blockchain technology?',
    readingPassage: 'Technical progress in the twenty-first century is proceeding at an unprecedented pace. Innovations that seemed like science fiction just a few decades ago have become part of everyday reality. Artificial intelligence, robotics, biotechnology and quantum computing are among the most transformative technologies of our time. AI-powered systems now perform tasks that once required human intelligence, from diagnosing medical conditions to translating languages and driving vehicles. The Fourth Industrial Revolution, a term popularised by Klaus Schwab, describes the fusion of digital, biological and physical worlds. This revolution is fundamentally changing how we produce goods, deliver services and interact with each other. Automation and smart manufacturing are increasing efficiency in factories, while blockchain technology is transforming financial transactions and supply chain management. However, technical progress also raises important ethical questions. The widespread use of AI threatens jobs in certain sectors. Concerns about data privacy and surveillance are growing. There is also the risk that technological advances will benefit only a small portion of the population, widening the gap between the rich and the poor. Society must carefully manage these challenges to ensure that technical progress serves humanity as a whole.',
    options: [
      { id: 'edu_009_07_a', text: 'Education and healthcare' },
      { id: 'edu_009_07_b', text: 'Financial transactions and supply chain management' },
      { id: 'edu_009_07_c', text: 'Agriculture and fishing' },
      { id: 'edu_009_07_d', text: 'Entertainment and tourism' }
    ],
    correctOptionIds: ['edu_009_07_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_009_08',
    subjectId: "english",
    text: 'The benefits of technological progress are equally distributed among all social groups.',
    readingPassage: 'Technical progress in the twenty-first century is proceeding at an unprecedented pace. Innovations that seemed like science fiction just a few decades ago have become part of everyday reality. Artificial intelligence, robotics, biotechnology and quantum computing are among the most transformative technologies of our time. AI-powered systems now perform tasks that once required human intelligence, from diagnosing medical conditions to translating languages and driving vehicles. The Fourth Industrial Revolution, a term popularised by Klaus Schwab, describes the fusion of digital, biological and physical worlds. This revolution is fundamentally changing how we produce goods, deliver services and interact with each other. Automation and smart manufacturing are increasing efficiency in factories, while blockchain technology is transforming financial transactions and supply chain management. However, technical progress also raises important ethical questions. The widespread use of AI threatens jobs in certain sectors. Concerns about data privacy and surveillance are growing. There is also the risk that technological advances will benefit only a small portion of the population, widening the gap between the rich and the poor. Society must carefully manage these challenges to ensure that technical progress serves humanity as a whole.',
    options: [
      { id: 'edu_009_08_a', text: 'True' },
      { id: 'edu_009_08_b', text: 'False' },
      { id: 'edu_009_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_009_08_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },

  // ====== PASSAGE 010 - Global Challenges (B2, hard) ======
  {
    id: 'edu_010_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: 'The modern world faces a number of complex global challenges that require coordinated international action. Among the most pressing issues are climate change, poverty, inequality, armed conflicts and public health crises. These problems are interconnected - for example, climate change can lead to food and water shortages, which in turn can cause mass migration and political instability. The United Nations has identified 17 Sustainable Development Goals to address these challenges by 2030. These goals include ending poverty, ensuring quality education for all, achieving gender equality and taking urgent action on climate change. International cooperation is essential for making progress on these goals. No single country can solve global problems alone. However, achieving international consensus is often difficult. Different countries have different priorities and economic interests. Wealthy nations may be reluctant to commit resources to help poorer countries. Political tensions between major powers can hinder cooperation. Despite these obstacles, there have been notable achievements. The Paris Agreement on climate change brought together nearly 200 countries to reduce greenhouse gas emissions. Global poverty rates have fallen significantly over the past few decades. Vaccination programmes have saved millions of lives worldwide. The path forward requires continued commitment from governments, businesses, civil society and individuals working together toward a more sustainable and equitable future.',
    options: [
      { id: 'edu_010_01_a', text: 'Global challenges are easy to solve and require no cooperation' },
      { id: 'edu_010_01_b', text: 'Complex global challenges require international cooperation, but progress faces political and economic obstacles' },
      { id: 'edu_010_01_c', text: 'Only wealthy nations are affected by global challenges' },
      { id: 'edu_010_01_d', text: 'The UN has no role in addressing global issues' }
    ],
    correctOptionIds: ['edu_010_01_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_010_02',
    subjectId: "english",
    text: 'How many Sustainable Development Goals has the United Nations identified?',
    readingPassage: 'The modern world faces a number of complex global challenges that require coordinated international action. Among the most pressing issues are climate change, poverty, inequality, armed conflicts and public health crises. These problems are interconnected - for example, climate change can lead to food and water shortages, which in turn can cause mass migration and political instability. The United Nations has identified 17 Sustainable Development Goals to address these challenges by 2030. These goals include ending poverty, ensuring quality education for all, achieving gender equality and taking urgent action on climate change. International cooperation is essential for making progress on these goals. No single country can solve global problems alone. However, achieving international consensus is often difficult. Different countries have different priorities and economic interests. Wealthy nations may be reluctant to commit resources to help poorer countries. Political tensions between major powers can hinder cooperation. Despite these obstacles, there have been notable achievements. The Paris Agreement on climate change brought together nearly 200 countries to reduce greenhouse gas emissions. Global poverty rates have fallen significantly over the past few decades. Vaccination programmes have saved millions of lives worldwide. The path forward requires continued commitment from governments, businesses, civil society and individuals working together toward a more sustainable and equitable future.',
    options: [
      { id: 'edu_010_02_a', text: '7' },
      { id: 'edu_010_02_b', text: '10' },
      { id: 'edu_010_02_c', text: '17' },
      { id: 'edu_010_02_d', text: '25' }
    ],
    correctOptionIds: ['edu_010_02_c'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_010_03',
    subjectId: "english",
    text: 'The word "interconnected" in the passage is closest in meaning to:',
    readingPassage: 'The modern world faces a number of complex global challenges that require coordinated international action. Among the most pressing issues are climate change, poverty, inequality, armed conflicts and public health crises. These problems are interconnected - for example, climate change can lead to food and water shortages, which in turn can cause mass migration and political instability. The United Nations has identified 17 Sustainable Development Goals to address these challenges by 2030. These goals include ending poverty, ensuring quality education for all, achieving gender equality and taking urgent action on climate change. International cooperation is essential for making progress on these goals. No single country can solve global problems alone. However, achieving international consensus is often difficult. Different countries have different priorities and economic interests. Wealthy nations may be reluctant to commit resources to help poorer countries. Political tensions between major powers can hinder cooperation. Despite these obstacles, there have been notable achievements. The Paris Agreement on climate change brought together nearly 200 countries to reduce greenhouse gas emissions. Global poverty rates have fallen significantly over the past few decades. Vaccination programmes have saved millions of lives worldwide. The path forward requires continued commitment from governments, businesses, civil society and individuals working together toward a more sustainable and equitable future.',
    options: [
      { id: 'edu_010_03_a', text: 'Completely separate and unrelated' },
      { id: 'edu_010_03_b', text: 'Linked or connected to each other' },
      { id: 'edu_010_03_c', text: 'Simple and easy to understand' },
      { id: 'edu_010_03_d', text: 'Permanently solved' }
    ],
    correctOptionIds: ['edu_010_03_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_010_04',
    subjectId: "english",
    text: 'What can be inferred about international cooperation from the passage?',
    readingPassage: 'The modern world faces a number of complex global challenges that require coordinated international action. Among the most pressing issues are climate change, poverty, inequality, armed conflicts and public health crises. These problems are interconnected - for example, climate change can lead to food and water shortages, which in turn can cause mass migration and political instability. The United Nations has identified 17 Sustainable Development Goals to address these challenges by 2030. These goals include ending poverty, ensuring quality education for all, achieving gender equality and taking urgent action on climate change. International cooperation is essential for making progress on these goals. No single country can solve global problems alone. However, achieving international consensus is often difficult. Different countries have different priorities and economic interests. Wealthy nations may be reluctant to commit resources to help poorer countries. Political tensions between major powers can hinder cooperation. Despite these obstacles, there have been notable achievements. The Paris Agreement on climate change brought together nearly 200 countries to reduce greenhouse gas emissions. Global poverty rates have fallen significantly over the past few decades. Vaccination programmes have saved millions of lives worldwide. The path forward requires continued commitment from governments, businesses, civil society and individuals working together toward a more sustainable and equitable future.',
    options: [
      { id: 'edu_010_04_a', text: 'It is easy to achieve because all countries agree on everything' },
      { id: 'edu_010_04_b', text: 'It is necessary but difficult due to differing national priorities and political tensions' },
      { id: 'edu_010_04_c', text: 'It is impossible and has never achieved anything' },
      { id: 'edu_010_04_d', text: 'It is only needed for environmental issues' }
    ],
    correctOptionIds: ['edu_010_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_010_05',
    subjectId: "english",
    text: "What is the author's main purpose in this passage?",
    readingPassage: 'The modern world faces a number of complex global challenges that require coordinated international action. Among the most pressing issues are climate change, poverty, inequality, armed conflicts and public health crises. These problems are interconnected - for example, climate change can lead to food and water shortages, which in turn can cause mass migration and political instability. The United Nations has identified 17 Sustainable Development Goals to address these challenges by 2030. These goals include ending poverty, ensuring quality education for all, achieving gender equality and taking urgent action on climate change. International cooperation is essential for making progress on these goals. No single country can solve global problems alone. However, achieving international consensus is often difficult. Different countries have different priorities and economic interests. Wealthy nations may be reluctant to commit resources to help poorer countries. Political tensions between major powers can hinder cooperation. Despite these obstacles, there have been notable achievements. The Paris Agreement on climate change brought together nearly 200 countries to reduce greenhouse gas emissions. Global poverty rates have fallen significantly over the past few decades. Vaccination programmes have saved millions of lives worldwide. The path forward requires continued commitment from governments, businesses, civil society and individuals working together toward a more sustainable and equitable future.',
    options: [
      { id: 'edu_010_05_a', text: 'To argue that global problems are not real' },
      { id: 'edu_010_05_b', text: 'To describe global challenges and advocate for continued international cooperation' },
      { id: 'edu_010_05_c', text: 'To blame wealthy nations for all global problems' },
      { id: 'edu_010_05_d', text: 'To suggest that individual countries should work alone' }
    ],
    correctOptionIds: ['edu_010_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_010_06',
    subjectId: "english",
    text: 'What does "these goals" in the passage refer to?',
    readingPassage: 'The modern world faces a number of complex global challenges that require coordinated international action. Among the most pressing issues are climate change, poverty, inequality, armed conflicts and public health crises. These problems are interconnected - for example, climate change can lead to food and water shortages, which in turn can cause mass migration and political instability. The United Nations has identified 17 Sustainable Development Goals to address these challenges by 2030. These goals include ending poverty, ensuring quality education for all, achieving gender equality and taking urgent action on climate change. International cooperation is essential for making progress on these goals. No single country can solve global problems alone. However, achieving international consensus is often difficult. Different countries have different priorities and economic interests. Wealthy nations may be reluctant to commit resources to help poorer countries. Political tensions between major powers can hinder cooperation. Despite these obstacles, there have been notable achievements. The Paris Agreement on climate change brought together nearly 200 countries to reduce greenhouse gas emissions. Global poverty rates have fallen significantly over the past few decades. Vaccination programmes have saved millions of lives worldwide. The path forward requires continued commitment from governments, businesses, civil society and individuals working together toward a more sustainable and equitable future.',
    options: [
      { id: 'edu_010_06_a', text: 'The political goals of wealthy nations' },
      { id: 'edu_010_06_b', text: 'The Sustainable Development Goals set by the UN' },
      { id: 'edu_010_06_c', text: 'The economic objectives of major corporations' },
      { id: 'edu_010_06_d', text: 'The military strategies of NATO' }
    ],
    correctOptionIds: ['edu_010_06_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_010_07',
    subjectId: "english",
    text: 'What achievement is mentioned regarding climate change?',
    readingPassage: 'The modern world faces a number of complex global challenges that require coordinated international action. Among the most pressing issues are climate change, poverty, inequality, armed conflicts and public health crises. These problems are interconnected - for example, climate change can lead to food and water shortages, which in turn can cause mass migration and political instability. The United Nations has identified 17 Sustainable Development Goals to address these challenges by 2030. These goals include ending poverty, ensuring quality education for all, achieving gender equality and taking urgent action on climate change. International cooperation is essential for making progress on these goals. No single country can solve global problems alone. However, achieving international consensus is often difficult. Different countries have different priorities and economic interests. Wealthy nations may be reluctant to commit resources to help poorer countries. Political tensions between major powers can hinder cooperation. Despite these obstacles, there have been notable achievements. The Paris Agreement on climate change brought together nearly 200 countries to reduce greenhouse gas emissions. Global poverty rates have fallen significantly over the past few decades. Vaccination programmes have saved millions of lives worldwide. The path forward requires continued commitment from governments, businesses, civil society and individuals working together toward a more sustainable and equitable future.',
    options: [
      { id: 'edu_010_07_a', text: 'The Kyoto Protocol' },
      { id: 'edu_010_07_b', text: 'The Paris Agreement, which brought together nearly 200 countries' },
      { id: 'edu_010_07_c', text: 'The Geneva Convention' },
      { id: 'edu_010_07_d', text: 'The Helsinki Accords' }
    ],
    correctOptionIds: ['edu_010_07_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_010_08',
    subjectId: "english",
    text: 'Global poverty rates have increased significantly over the past few decades.',
    readingPassage: 'The modern world faces a number of complex global challenges that require coordinated international action. Among the most pressing issues are climate change, poverty, inequality, armed conflicts and public health crises. These problems are interconnected - for example, climate change can lead to food and water shortages, which in turn can cause mass migration and political instability. The United Nations has identified 17 Sustainable Development Goals to address these challenges by 2030. These goals include ending poverty, ensuring quality education for all, achieving gender equality and taking urgent action on climate change. International cooperation is essential for making progress on these goals. No single country can solve global problems alone. However, achieving international consensus is often difficult. Different countries have different priorities and economic interests. Wealthy nations may be reluctant to commit resources to help poorer countries. Political tensions between major powers can hinder cooperation. Despite these obstacles, there have been notable achievements. The Paris Agreement on climate change brought together nearly 200 countries to reduce greenhouse gas emissions. Global poverty rates have fallen significantly over the past few decades. Vaccination programmes have saved millions of lives worldwide. The path forward requires continued commitment from governments, businesses, civil society and individuals working together toward a more sustainable and equitable future.',
    options: [
      { id: 'edu_010_08_a', text: 'True' },
      { id: 'edu_010_08_b', text: 'False' },
      { id: 'edu_010_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_010_08_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },

  // ====== PASSAGE 011 - New Scientific Discoveries (B2, hard) ======
  {
    id: 'edu_011_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: 'Recent years have witnessed remarkable scientific discoveries that are reshaping our understanding of the universe and ourselves. In astronomy, the James Webb Space Telescope, launched in 2021, has been sending back images of galaxies formed over 13 billion years ago. These observations are helping scientists understand how the first stars and galaxies formed after the Big Bang. In medicine, researchers have made significant progress in gene editing using CRISPR technology. This tool allows scientists to modify DNA with unprecedented precision, offering potential cures for genetic disorders such as sickle cell disease and certain types of cancer. The development of mRNA vaccines, which proved crucial during the COVID-19 pandemic, is now being adapted to fight other diseases including malaria and HIV. In physics, the discovery of gravitational waves has opened a new window onto the cosmos, allowing scientists to observe phenomena such as black hole mergers. In neuroscience, brain-computer interfaces are enabling paralysed patients to control external devices using only their thoughts. These breakthroughs demonstrate the power of human curiosity and scientific inquiry. However, new discoveries also bring new responsibilities. Ethical guidelines must keep pace with scientific progress to ensure that these powerful technologies are used for the benefit of humanity.',
    options: [
      { id: 'edu_011_01_a', text: 'Science has stopped making new discoveries in recent years' },
      { id: 'edu_011_01_b', text: 'Recent scientific discoveries are transforming multiple fields but require ethical oversight' },
      { id: 'edu_011_01_c', text: 'Only medical discoveries are important for humanity' },
      { id: 'edu_011_01_d', text: 'Scientific progress has no ethical implications' }
    ],
    correctOptionIds: ['edu_011_01_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_011_02',
    subjectId: "english",
    text: 'What is the James Webb Space Telescope helping scientists understand?',
    readingPassage: 'Recent years have witnessed remarkable scientific discoveries that are reshaping our understanding of the universe and ourselves. In astronomy, the James Webb Space Telescope, launched in 2021, has been sending back images of galaxies formed over 13 billion years ago. These observations are helping scientists understand how the first stars and galaxies formed after the Big Bang. In medicine, researchers have made significant progress in gene editing using CRISPR technology. This tool allows scientists to modify DNA with unprecedented precision, offering potential cures for genetic disorders such as sickle cell disease and certain types of cancer. The development of mRNA vaccines, which proved crucial during the COVID-19 pandemic, is now being adapted to fight other diseases including malaria and HIV. In physics, the discovery of gravitational waves has opened a new window onto the cosmos, allowing scientists to observe phenomena such as black hole mergers. In neuroscience, brain-computer interfaces are enabling paralysed patients to control external devices using only their thoughts. These breakthroughs demonstrate the power of human curiosity and scientific inquiry. However, new discoveries also bring new responsibilities. Ethical guidelines must keep pace with scientific progress to ensure that these powerful technologies are used for the benefit of humanity.',
    options: [
      { id: 'edu_011_02_a', text: 'How the solar system was formed' },
      { id: 'edu_011_02_b', text: 'How the first stars and galaxies formed after the Big Bang' },
      { id: 'edu_011_02_c', text: 'How black holes disappear' },
      { id: 'edu_011_02_d', text: 'How life began on Earth' }
    ],
    correctOptionIds: ['edu_011_02_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_011_03',
    subjectId: "english",
    text: 'The word "unprecedented" in the passage is closest in meaning to:',
    readingPassage: 'Recent years have witnessed remarkable scientific discoveries that are reshaping our understanding of the universe and ourselves. In astronomy, the James Webb Space Telescope, launched in 2021, has been sending back images of galaxies formed over 13 billion years ago. These observations are helping scientists understand how the first stars and galaxies formed after the Big Bang. In medicine, researchers have made significant progress in gene editing using CRISPR technology. This tool allows scientists to modify DNA with unprecedented precision, offering potential cures for genetic disorders such as sickle cell disease and certain types of cancer. The development of mRNA vaccines, which proved crucial during the COVID-19 pandemic, is now being adapted to fight other diseases including malaria and HIV. In physics, the discovery of gravitational waves has opened a new window onto the cosmos, allowing scientists to observe phenomena such as black hole mergers. In neuroscience, brain-computer interfaces are enabling paralysed patients to control external devices using only their thoughts. These breakthroughs demonstrate the power of human curiosity and scientific inquiry. However, new discoveries also bring new responsibilities. Ethical guidelines must keep pace with scientific progress to ensure that these powerful technologies are used for the benefit of humanity.',
    options: [
      { id: 'edu_011_03_a', text: 'Having no previous example or equivalent' },
      { id: 'edu_011_03_b', text: 'Limited and restricted' },
      { id: 'edu_011_03_c', text: 'Dangerous and risky' },
      { id: 'edu_011_03_d', text: 'Simple and ordinary' }
    ],
    correctOptionIds: ['edu_011_03_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_011_04',
    subjectId: "english",
    text: 'What can be inferred about CRISPR technology from the passage?',
    readingPassage: 'Recent years have witnessed remarkable scientific discoveries that are reshaping our understanding of the universe and ourselves. In astronomy, the James Webb Space Telescope, launched in 2021, has been sending back images of galaxies formed over 13 billion years ago. These observations are helping scientists understand how the first stars and galaxies formed after the Big Bang. In medicine, researchers have made significant progress in gene editing using CRISPR technology. This tool allows scientists to modify DNA with unprecedented precision, offering potential cures for genetic disorders such as sickle cell disease and certain types of cancer. The development of mRNA vaccines, which proved crucial during the COVID-19 pandemic, is now being adapted to fight other diseases including malaria and HIV. In physics, the discovery of gravitational waves has opened a new window onto the cosmos, allowing scientists to observe phenomena such as black hole mergers. In neuroscience, brain-computer interfaces are enabling paralysed patients to control external devices using only their thoughts. These breakthroughs demonstrate the power of human curiosity and scientific inquiry. However, new discoveries also bring new responsibilities. Ethical guidelines must keep pace with scientific progress to ensure that these powerful technologies are used for the benefit of humanity.',
    options: [
      { id: 'edu_011_04_a', text: 'It is a technology that has only theoretical applications' },
      { id: 'edu_011_04_b', text: 'It can precisely modify DNA and may lead to cures for genetic diseases' },
      { id: 'edu_011_04_c', text: 'It is no longer used in scientific research' },
      { id: 'edu_011_04_d', text: 'It only works on plants, not humans' }
    ],
    correctOptionIds: ['edu_011_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_011_05',
    subjectId: "english",
    text: "What is the author's purpose in mentioning ethical guidelines?",
    readingPassage: 'Recent years have witnessed remarkable scientific discoveries that are reshaping our understanding of the universe and ourselves. In astronomy, the James Webb Space Telescope, launched in 2021, has been sending back images of galaxies formed over 13 billion years ago. These observations are helping scientists understand how the first stars and galaxies formed after the Big Bang. In medicine, researchers have made significant progress in gene editing using CRISPR technology. This tool allows scientists to modify DNA with unprecedented precision, offering potential cures for genetic disorders such as sickle cell disease and certain types of cancer. The development of mRNA vaccines, which proved crucial during the COVID-19 pandemic, is now being adapted to fight other diseases including malaria and HIV. In physics, the discovery of gravitational waves has opened a new window onto the cosmos, allowing scientists to observe phenomena such as black hole mergers. In neuroscience, brain-computer interfaces are enabling paralysed patients to control external devices using only their thoughts. These breakthroughs demonstrate the power of human curiosity and scientific inquiry. However, new discoveries also bring new responsibilities. Ethical guidelines must keep pace with scientific progress to ensure that these powerful technologies are used for the benefit of humanity.',
    options: [
      { id: 'edu_011_05_a', text: 'To argue against scientific progress' },
      { id: 'edu_011_05_b', text: 'To stress that new technologies require responsible and ethical use' },
      { id: 'edu_011_05_c', text: 'To suggest that scientists should work without any rules' },
      { id: 'edu_011_05_d', text: 'To compare different ethical systems around the world' }
    ],
    correctOptionIds: ['edu_011_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_011_06',
    subjectId: "english",
    text: 'What does "this tool" in the passage refer to?',
    readingPassage: 'Recent years have witnessed remarkable scientific discoveries that are reshaping our understanding of the universe and ourselves. In astronomy, the James Webb Space Telescope, launched in 2021, has been sending back images of galaxies formed over 13 billion years ago. These observations are helping scientists understand how the first stars and galaxies formed after the Big Bang. In medicine, researchers have made significant progress in gene editing using CRISPR technology. This tool allows scientists to modify DNA with unprecedented precision, offering potential cures for genetic disorders such as sickle cell disease and certain types of cancer. The development of mRNA vaccines, which proved crucial during the COVID-19 pandemic, is now being adapted to fight other diseases including malaria and HIV. In physics, the discovery of gravitational waves has opened a new window onto the cosmos, allowing scientists to observe phenomena such as black hole mergers. In neuroscience, brain-computer interfaces are enabling paralysed patients to control external devices using only their thoughts. These breakthroughs demonstrate the power of human curiosity and scientific inquiry. However, new discoveries also bring new responsibilities. Ethical guidelines must keep pace with scientific progress to ensure that these powerful technologies are used for the benefit of humanity.',
    options: [
      { id: 'edu_011_06_a', text: 'The James Webb Space Telescope' },
      { id: 'edu_011_06_b', text: 'CRISPR technology for gene editing' },
      { id: 'edu_011_06_c', text: 'The mRNA vaccine platform' },
      { id: 'edu_011_06_d', text: 'The brain-computer interface' }
    ],
    correctOptionIds: ['edu_011_06_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_011_07',
    subjectId: "english",
    text: 'What are mRNA vaccines now being adapted to fight according to the passage?',
    readingPassage: 'Recent years have witnessed remarkable scientific discoveries that are reshaping our understanding of the universe and ourselves. In astronomy, the James Webb Space Telescope, launched in 2021, has been sending back images of galaxies formed over 13 billion years ago. These observations are helping scientists understand how the first stars and galaxies formed after the Big Bang. In medicine, researchers have made significant progress in gene editing using CRISPR technology. This tool allows scientists to modify DNA with unprecedented precision, offering potential cures for genetic disorders such as sickle cell disease and certain types of cancer. The development of mRNA vaccines, which proved crucial during the COVID-19 pandemic, is now being adapted to fight other diseases including malaria and HIV. In physics, the discovery of gravitational waves has opened a new window onto the cosmos, allowing scientists to observe phenomena such as black hole mergers. In neuroscience, brain-computer interfaces are enabling paralysed patients to control external devices using only their thoughts. These breakthroughs demonstrate the power of human curiosity and scientific inquiry. However, new discoveries also bring new responsibilities. Ethical guidelines must keep pace with scientific progress to ensure that these powerful technologies are used for the benefit of humanity.',
    options: [
      { id: 'edu_011_07_a', text: 'Cancer and heart disease' },
      { id: 'edu_011_07_b', text: 'Malaria and HIV' },
      { id: 'edu_011_07_c', text: 'Diabetes and asthma' },
      { id: 'edu_011_07_d', text: 'Alzheimer\'s and Parkinson\'s' }
    ],
    correctOptionIds: ['edu_011_07_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_011_08',
    subjectId: "english",
    text: 'Brain-computer interfaces can cure all neurological diseases.',
    readingPassage: 'Recent years have witnessed remarkable scientific discoveries that are reshaping our understanding of the universe and ourselves. In astronomy, the James Webb Space Telescope, launched in 2021, has been sending back images of galaxies formed over 13 billion years ago. These observations are helping scientists understand how the first stars and galaxies formed after the Big Bang. In medicine, researchers have made significant progress in gene editing using CRISPR technology. This tool allows scientists to modify DNA with unprecedented precision, offering potential cures for genetic disorders such as sickle cell disease and certain types of cancer. The development of mRNA vaccines, which proved crucial during the COVID-19 pandemic, is now being adapted to fight other diseases including malaria and HIV. In physics, the discovery of gravitational waves has opened a new window onto the cosmos, allowing scientists to observe phenomena such as black hole mergers. In neuroscience, brain-computer interfaces are enabling paralysed patients to control external devices using only their thoughts. These breakthroughs demonstrate the power of human curiosity and scientific inquiry. However, new discoveries also bring new responsibilities. Ethical guidelines must keep pace with scientific progress to ensure that these powerful technologies are used for the benefit of humanity.',
    options: [
      { id: 'edu_011_08_a', text: 'True' },
      { id: 'edu_011_08_b', text: 'False' },
      { id: 'edu_011_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_011_08_c'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },

  // ====== PASSAGE 012 - Climate Change (C, hard) ======
  {
    id: 'edu_012_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: 'Climate change is arguably the most significant environmental challenge of our time. Scientific evidence overwhelmingly indicates that the Earth\'s climate is warming at an alarming rate due to human activities, particularly the burning of fossil fuels and deforestation. The Intergovernmental Panel on Climate Change (IPCC) has warned that global temperatures could rise by more than 1.5 degrees Celsius above pre-industrial levels within the next few decades if emissions continue unchecked. The consequences of climate change are already visible. Extreme weather events such as hurricanes, droughts and heatwaves are becoming more frequent and intense. Rising sea levels threaten coastal communities and small island nations. Agricultural productivity is declining in many regions, leading to food insecurity. Ecosystems are being disrupted, with many species facing extinction due to changing habitats. Addressing climate change requires a multifaceted approach. Mitigation strategies focus on reducing greenhouse gas emissions through renewable energy adoption, energy efficiency and carbon capture technologies. Adaptation measures help communities cope with the effects of climate change that are already unavoidable. International agreements like the Paris Accord provide a framework for global cooperation, but critics argue that current commitments are insufficient. The transition to a low-carbon economy presents both challenges and opportunities. While some industries may decline, new sectors in renewable energy and sustainable technologies are emerging. Ultimately, climate action requires political will, economic investment and behavioural changes at all levels of society.',
    options: [
      { id: 'edu_012_01_a', text: 'Climate change is a natural phenomenon that requires no action' },
      { id: 'edu_012_01_b', text: 'Climate change is a serious threat driven by human activity, requiring mitigation, adaptation and global cooperation' },
      { id: 'edu_012_01_c', text: 'Only governments are responsible for climate change' },
      { id: 'edu_012_01_d', text: 'Climate change only affects polar regions' }
    ],
    correctOptionIds: ['edu_012_01_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_012_02',
    subjectId: "english",
    text: 'According to the passage, what is the primary cause of climate change?',
    readingPassage: 'Climate change is arguably the most significant environmental challenge of our time. Scientific evidence overwhelmingly indicates that the Earth\'s climate is warming at an alarming rate due to human activities, particularly the burning of fossil fuels and deforestation. The Intergovernmental Panel on Climate Change (IPCC) has warned that global temperatures could rise by more than 1.5 degrees Celsius above pre-industrial levels within the next few decades if emissions continue unchecked. The consequences of climate change are already visible. Extreme weather events such as hurricanes, droughts and heatwaves are becoming more frequent and intense. Rising sea levels threaten coastal communities and small island nations. Agricultural productivity is declining in many regions, leading to food insecurity. Ecosystems are being disrupted, with many species facing extinction due to changing habitats. Addressing climate change requires a multifaceted approach. Mitigation strategies focus on reducing greenhouse gas emissions through renewable energy adoption, energy efficiency and carbon capture technologies. Adaptation measures help communities cope with the effects of climate change that are already unavoidable. International agreements like the Paris Accord provide a framework for global cooperation, but critics argue that current commitments are insufficient. The transition to a low-carbon economy presents both challenges and opportunities. While some industries may decline, new sectors in renewable energy and sustainable technologies are emerging. Ultimately, climate action requires political will, economic investment and behavioural changes at all levels of society.',
    options: [
      { id: 'edu_012_02_a', text: 'Volcanic eruptions and earthquakes' },
      { id: 'edu_012_02_b', text: 'Human activities, especially burning fossil fuels and deforestation' },
      { id: 'edu_012_02_c', text: 'Changes in the Earth\'s orbit' },
      { id: 'edu_012_02_d', text: 'Solar flares and cosmic radiation' }
    ],
    correctOptionIds: ['edu_012_02_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_012_03',
    subjectId: "english",
    text: 'The word "mitigation" in the passage is closest in meaning to:',
    readingPassage: 'Climate change is arguably the most significant environmental challenge of our time. Scientific evidence overwhelmingly indicates that the Earth\'s climate is warming at an alarming rate due to human activities, particularly the burning of fossil fuels and deforestation. The Intergovernmental Panel on Climate Change (IPCC) has warned that global temperatures could rise by more than 1.5 degrees Celsius above pre-industrial levels within the next few decades if emissions continue unchecked. The consequences of climate change are already visible. Extreme weather events such as hurricanes, droughts and heatwaves are becoming more frequent and intense. Rising sea levels threaten coastal communities and small island nations. Agricultural productivity is declining in many regions, leading to food insecurity. Ecosystems are being disrupted, with many species facing extinction due to changing habitats. Addressing climate change requires a multifaceted approach. Mitigation strategies focus on reducing greenhouse gas emissions through renewable energy adoption, energy efficiency and carbon capture technologies. Adaptation measures help communities cope with the effects of climate change that are already unavoidable. International agreements like the Paris Accord provide a framework for global cooperation, but critics argue that current commitments are insufficient. The transition to a low-carbon economy presents both challenges and opportunities. While some industries may decline, new sectors in renewable energy and sustainable technologies are emerging. Ultimately, climate action requires political will, economic investment and behavioural changes at all levels of society.',
    options: [
      { id: 'edu_012_03_a', text: 'The act of making something worse' },
      { id: 'edu_012_03_b', text: 'The action of reducing the severity of something' },
      { id: 'edu_012_03_c', text: 'The process of ignoring a problem' },
      { id: 'edu_012_03_d', text: 'The study of climate patterns' }
    ],
    correctOptionIds: ['edu_012_03_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_012_04',
    subjectId: "english",
    text: 'What can be inferred about the Paris Accord from the passage?',
    readingPassage: 'Climate change is arguably the most significant environmental challenge of our time. Scientific evidence overwhelmingly indicates that the Earth\'s climate is warming at an alarming rate due to human activities, particularly the burning of fossil fuels and deforestation. The Intergovernmental Panel on Climate Change (IPCC) has warned that global temperatures could rise by more than 1.5 degrees Celsius above pre-industrial levels within the next few decades if emissions continue unchecked. The consequences of climate change are already visible. Extreme weather events such as hurricanes, droughts and heatwaves are becoming more frequent and intense. Rising sea levels threaten coastal communities and small island nations. Agricultural productivity is declining in many regions, leading to food insecurity. Ecosystems are being disrupted, with many species facing extinction due to changing habitats. Addressing climate change requires a multifaceted approach. Mitigation strategies focus on reducing greenhouse gas emissions through renewable energy adoption, energy efficiency and carbon capture technologies. Adaptation measures help communities cope with the effects of climate change that are already unavoidable. International agreements like the Paris Accord provide a framework for global cooperation, but critics argue that current commitments are insufficient. The transition to a low-carbon economy presents both challenges and opportunities. While some industries may decline, new sectors in renewable energy and sustainable technologies are emerging. Ultimately, climate action requires political will, economic investment and behavioural changes at all levels of society.',
    options: [
      { id: 'edu_012_04_a', text: 'It has completely solved the climate crisis' },
      { id: 'edu_012_04_b', text: 'It provides a cooperation framework but current commitments are seen as insufficient by critics' },
      { id: 'edu_012_04_c', text: 'It only involves developing countries' },
      { id: 'edu_012_04_d', text: 'It focuses only on adaptation measures' }
    ],
    correctOptionIds: ['edu_012_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_012_05',
    subjectId: "english",
    text: "What is the author's main purpose in this passage?",
    readingPassage: 'Climate change is arguably the most significant environmental challenge of our time. Scientific evidence overwhelmingly indicates that the Earth\'s climate is warming at an alarming rate due to human activities, particularly the burning of fossil fuels and deforestation. The Intergovernmental Panel on Climate Change (IPCC) has warned that global temperatures could rise by more than 1.5 degrees Celsius above pre-industrial levels within the next few decades if emissions continue unchecked. The consequences of climate change are already visible. Extreme weather events such as hurricanes, droughts and heatwaves are becoming more frequent and intense. Rising sea levels threaten coastal communities and small island nations. Agricultural productivity is declining in many regions, leading to food insecurity. Ecosystems are being disrupted, with many species facing extinction due to changing habitats. Addressing climate change requires a multifaceted approach. Mitigation strategies focus on reducing greenhouse gas emissions through renewable energy adoption, energy efficiency and carbon capture technologies. Adaptation measures help communities cope with the effects of climate change that are already unavoidable. International agreements like the Paris Accord provide a framework for global cooperation, but critics argue that current commitments are insufficient. The transition to a low-carbon economy presents both challenges and opportunities. While some industries may decline, new sectors in renewable energy and sustainable technologies are emerging. Ultimately, climate action requires political will, economic investment and behavioural changes at all levels of society.',
    options: [
      { id: 'edu_012_05_a', text: 'To deny the existence of climate change' },
      { id: 'edu_012_05_b', text: 'To inform about the seriousness of climate change and advocate for comprehensive action' },
      { id: 'edu_012_05_c', text: 'To argue that climate change is beneficial for agriculture' },
      { id: 'edu_012_05_d', text: 'To promote only technological solutions without policy changes' }
    ],
    correctOptionIds: ['edu_012_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_012_06',
    subjectId: "english",
    text: 'What does "IPCC" in the passage refer to?',
    readingPassage: 'Climate change is arguably the most significant environmental challenge of our time. Scientific evidence overwhelmingly indicates that the Earth\'s climate is warming at an alarming rate due to human activities, particularly the burning of fossil fuels and deforestation. The Intergovernmental Panel on Climate Change (IPCC) has warned that global temperatures could rise by more than 1.5 degrees Celsius above pre-industrial levels within the next few decades if emissions continue unchecked. The consequences of climate change are already visible. Extreme weather events such as hurricanes, droughts and heatwaves are becoming more frequent and intense. Rising sea levels threaten coastal communities and small island nations. Agricultural productivity is declining in many regions, leading to food insecurity. Ecosystems are being disrupted, with many species facing extinction due to changing habitats. Addressing climate change requires a multifaceted approach. Mitigation strategies focus on reducing greenhouse gas emissions through renewable energy adoption, energy efficiency and carbon capture technologies. Adaptation measures help communities cope with the effects of climate change that are already unavoidable. International agreements like the Paris Accord provide a framework for global cooperation, but critics argue that current commitments are insufficient. The transition to a low-carbon economy presents both challenges and opportunities. While some industries may decline, new sectors in renewable energy and sustainable technologies are emerging. Ultimately, climate action requires political will, economic investment and behavioural changes at all levels of society.',
    options: [
      { id: 'edu_012_06_a', text: 'International Panel for Climate Projects' },
      { id: 'edu_012_06_b', text: 'Intergovernmental Panel on Climate Change' },
      { id: 'edu_012_06_c', text: 'Independent Council for Pollution Control' },
      { id: 'edu_012_06_d', text: 'Institute for Climate and Planetary Science' }
    ],
    correctOptionIds: ['edu_012_06_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_012_07',
    subjectId: "english",
    text: 'What temperature rise does the IPCC warn about?',
    readingPassage: 'Climate change is arguably the most significant environmental challenge of our time. Scientific evidence overwhelmingly indicates that the Earth\'s climate is warming at an alarming rate due to human activities, particularly the burning of fossil fuels and deforestation. The Intergovernmental Panel on Climate Change (IPCC) has warned that global temperatures could rise by more than 1.5 degrees Celsius above pre-industrial levels within the next few decades if emissions continue unchecked. The consequences of climate change are already visible. Extreme weather events such as hurricanes, droughts and heatwaves are becoming more frequent and intense. Rising sea levels threaten coastal communities and small island nations. Agricultural productivity is declining in many regions, leading to food insecurity. Ecosystems are being disrupted, with many species facing extinction due to changing habitats. Addressing climate change requires a multifaceted approach. Mitigation strategies focus on reducing greenhouse gas emissions through renewable energy adoption, energy efficiency and carbon capture technologies. Adaptation measures help communities cope with the effects of climate change that are already unavoidable. International agreements like the Paris Accord provide a framework for global cooperation, but critics argue that current commitments are insufficient. The transition to a low-carbon economy presents both challenges and opportunities. While some industries may decline, new sectors in renewable energy and sustainable technologies are emerging. Ultimately, climate action requires political will, economic investment and behavioural changes at all levels of society.',
    options: [
      { id: 'edu_012_07_a', text: 'More than 0.5 degrees Celsius' },
      { id: 'edu_012_07_b', text: 'More than 1.0 degrees Celsius' },
      { id: 'edu_012_07_c', text: 'More than 1.5 degrees Celsius' },
      { id: 'edu_012_07_d', text: 'More than 3.0 degrees Celsius' }
    ],
    correctOptionIds: ['edu_012_07_c'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_012_08',
    subjectId: "english",
    text: 'The transition to a low-carbon economy will only create challenges without any new opportunities.',
    readingPassage: 'Climate change is arguably the most significant environmental challenge of our time. Scientific evidence overwhelmingly indicates that the Earth\'s climate is warming at an alarming rate due to human activities, particularly the burning of fossil fuels and deforestation. The Intergovernmental Panel on Climate Change (IPCC) has warned that global temperatures could rise by more than 1.5 degrees Celsius above pre-industrial levels within the next few decades if emissions continue unchecked. The consequences of climate change are already visible. Extreme weather events such as hurricanes, droughts and heatwaves are becoming more frequent and intense. Rising sea levels threaten coastal communities and small island nations. Agricultural productivity is declining in many regions, leading to food insecurity. Ecosystems are being disrupted, with many species facing extinction due to changing habitats. Addressing climate change requires a multifaceted approach. Mitigation strategies focus on reducing greenhouse gas emissions through renewable energy adoption, energy efficiency and carbon capture technologies. Adaptation measures help communities cope with the effects of climate change that are already unavoidable. International agreements like the Paris Accord provide a framework for global cooperation, but critics argue that current commitments are insufficient. The transition to a low-carbon economy presents both challenges and opportunities. While some industries may decline, new sectors in renewable energy and sustainable technologies are emerging. Ultimately, climate action requires political will, economic investment and behavioural changes at all levels of society.',
    options: [
      { id: 'edu_012_08_a', text: 'True' },
      { id: 'edu_012_08_b', text: 'False' },
      { id: 'edu_012_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_012_08_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },

  // ====== PASSAGE 013 - Digital Transformation (C, hard) ======
  {
    id: 'edu_013_01',
    subjectId: "english",
    text: 'What is the main idea of this passage?',
    readingPassage: 'Digital transformation is fundamentally reshaping economies, societies and governance structures across the globe. This process involves the integration of digital technologies into all areas of human activity, fundamentally changing how organisations operate and deliver value to stakeholders. Key drivers of digital transformation include cloud computing, big data analytics, the Internet of Things (IoT), artificial intelligence and blockchain technology. In the business sector, digital transformation enables companies to optimise operations, enhance customer experiences and create new revenue streams. E-commerce platforms have revolutionised retail, while fintech innovations are transforming banking and financial services. In education, digital learning platforms and virtual classrooms are making knowledge more accessible than ever before. Healthcare is being revolutionised through telemedicine, electronic health records and AI-assisted diagnostics. Governments are implementing e-government initiatives to deliver public services more efficiently and transparently. However, digital transformation also presents significant challenges. Cybersecurity threats are becoming more sophisticated and damaging. The digital divide risks excluding vulnerable populations from accessing essential services. Privacy concerns are escalating as more personal data is collected and analysed. Workforce displacement due to automation is a growing concern. Moreover, the rapid pace of technological change makes it difficult for regulations and legal frameworks to keep up. Successful digital transformation requires not only technological infrastructure but also digital literacy, institutional adaptation and inclusive policies that ensure no one is left behind in the digital age.',
    options: [
      { id: 'edu_013_01_a', text: 'Digital transformation affects only the business sector' },
      { id: 'edu_013_01_b', text: 'Digital transformation reshapes many sectors but poses challenges like cybersecurity and inequality that require inclusive solutions' },
      { id: 'edu_013_01_c', text: 'Technology alone is sufficient for digital transformation' },
      { id: 'edu_013_01_d', text: 'Digital transformation has no negative consequences' }
    ],
    correctOptionIds: ['edu_013_01_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_013_02',
    subjectId: "english",
    text: 'According to the passage, what are key drivers of digital transformation?',
    readingPassage: 'Digital transformation is fundamentally reshaping economies, societies and governance structures across the globe. This process involves the integration of digital technologies into all areas of human activity, fundamentally changing how organisations operate and deliver value to stakeholders. Key drivers of digital transformation include cloud computing, big data analytics, the Internet of Things (IoT), artificial intelligence and blockchain technology. In the business sector, digital transformation enables companies to optimise operations, enhance customer experiences and create new revenue streams. E-commerce platforms have revolutionised retail, while fintech innovations are transforming banking and financial services. In education, digital learning platforms and virtual classrooms are making knowledge more accessible than ever before. Healthcare is being revolutionised through telemedicine, electronic health records and AI-assisted diagnostics. Governments are implementing e-government initiatives to deliver public services more efficiently and transparently. However, digital transformation also presents significant challenges. Cybersecurity threats are becoming more sophisticated and damaging. The digital divide risks excluding vulnerable populations from accessing essential services. Privacy concerns are escalating as more personal data is collected and analysed. Workforce displacement due to automation is a growing concern. Moreover, the rapid pace of technological change makes it difficult for regulations and legal frameworks to keep up. Successful digital transformation requires not only technological infrastructure but also digital literacy, institutional adaptation and inclusive policies that ensure no one is left behind in the digital age.',
    options: [
      { id: 'edu_013_02_a', text: 'Cloud computing, big data, IoT, AI and blockchain' },
      { id: 'edu_013_02_b', text: 'Manual data entry, paper records and face-to-face meetings' },
      { id: 'edu_013_02_c', text: 'Traditional manufacturing and agriculture' },
      { id: 'edu_013_02_d', text: 'Print media and broadcast television' }
    ],
    correctOptionIds: ['edu_013_02_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_013_03',
    subjectId: "english",
    text: 'The word "optimise" in the passage is closest in meaning to:',
    readingPassage: 'Digital transformation is fundamentally reshaping economies, societies and governance structures across the globe. This process involves the integration of digital technologies into all areas of human activity, fundamentally changing how organisations operate and deliver value to stakeholders. Key drivers of digital transformation include cloud computing, big data analytics, the Internet of Things (IoT), artificial intelligence and blockchain technology. In the business sector, digital transformation enables companies to optimise operations, enhance customer experiences and create new revenue streams. E-commerce platforms have revolutionised retail, while fintech innovations are transforming banking and financial services. In education, digital learning platforms and virtual classrooms are making knowledge more accessible than ever before. Healthcare is being revolutionised through telemedicine, electronic health records and AI-assisted diagnostics. Governments are implementing e-government initiatives to deliver public services more efficiently and transparently. However, digital transformation also presents significant challenges. Cybersecurity threats are becoming more sophisticated and damaging. The digital divide risks excluding vulnerable populations from accessing essential services. Privacy concerns are escalating as more personal data is collected and analysed. Workforce displacement due to automation is a growing concern. Moreover, the rapid pace of technological change makes it difficult for regulations and legal frameworks to keep up. Successful digital transformation requires not only technological infrastructure but also digital literacy, institutional adaptation and inclusive policies that ensure no one is left behind in the digital age.',
    options: [
      { id: 'edu_013_03_a', text: 'To complicate and make less efficient' },
      { id: 'edu_013_03_b', text: 'To make the best or most effective use of something' },
      { id: 'edu_013_03_c', text: 'To reduce in size or importance' },
      { id: 'edu_013_03_d', text: 'To ignore or neglect' }
    ],
    correctOptionIds: ['edu_013_03_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_013_04',
    subjectId: "english",
    text: 'What can be inferred about the author\'s view on digital transformation?',
    readingPassage: 'Digital transformation is fundamentally reshaping economies, societies and governance structures across the globe. This process involves the integration of digital technologies into all areas of human activity, fundamentally changing how organisations operate and deliver value to stakeholders. Key drivers of digital transformation include cloud computing, big data analytics, the Internet of Things (IoT), artificial intelligence and blockchain technology. In the business sector, digital transformation enables companies to optimise operations, enhance customer experiences and create new revenue streams. E-commerce platforms have revolutionised retail, while fintech innovations are transforming banking and financial services. In education, digital learning platforms and virtual classrooms are making knowledge more accessible than ever before. Healthcare is being revolutionised through telemedicine, electronic health records and AI-assisted diagnostics. Governments are implementing e-government initiatives to deliver public services more efficiently and transparently. However, digital transformation also presents significant challenges. Cybersecurity threats are becoming more sophisticated and damaging. The digital divide risks excluding vulnerable populations from accessing essential services. Privacy concerns are escalating as more personal data is collected and analysed. Workforce displacement due to automation is a growing concern. Moreover, the rapid pace of technological change makes it difficult for regulations and legal frameworks to keep up. Successful digital transformation requires not only technological infrastructure but also digital literacy, institutional adaptation and inclusive policies that ensure no one is left behind in the digital age.',
    options: [
      { id: 'edu_013_04_a', text: 'The author is completely against digital transformation' },
      { id: 'edu_013_04_b', text: 'The author acknowledges its transformative potential but emphasises the need for inclusive and responsible implementation' },
      { id: 'edu_013_04_c', text: 'The author believes digital transformation is only for wealthy countries' },
      { id: 'edu_013_04_d', text: 'The author thinks digital transformation will solve all societal problems automatically' }
    ],
    correctOptionIds: ['edu_013_04_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_013_05',
    subjectId: "english",
    text: "What is the author's purpose in discussing the challenges of digital transformation?",
    readingPassage: 'Digital transformation is fundamentally reshaping economies, societies and governance structures across the globe. This process involves the integration of digital technologies into all areas of human activity, fundamentally changing how organisations operate and deliver value to stakeholders. Key drivers of digital transformation include cloud computing, big data analytics, the Internet of Things (IoT), artificial intelligence and blockchain technology. In the business sector, digital transformation enables companies to optimise operations, enhance customer experiences and create new revenue streams. E-commerce platforms have revolutionised retail, while fintech innovations are transforming banking and financial services. In education, digital learning platforms and virtual classrooms are making knowledge more accessible than ever before. Healthcare is being revolutionised through telemedicine, electronic health records and AI-assisted diagnostics. Governments are implementing e-government initiatives to deliver public services more efficiently and transparently. However, digital transformation also presents significant challenges. Cybersecurity threats are becoming more sophisticated and damaging. The digital divide risks excluding vulnerable populations from accessing essential services. Privacy concerns are escalating as more personal data is collected and analysed. Workforce displacement due to automation is a growing concern. Moreover, the rapid pace of technological change makes it difficult for regulations and legal frameworks to keep up. Successful digital transformation requires not only technological infrastructure but also digital literacy, institutional adaptation and inclusive policies that ensure no one is left behind in the digital age.',
    options: [
      { id: 'edu_013_05_a', text: 'To argue that digital transformation should be stopped' },
      { id: 'edu_013_05_b', text: 'To provide a balanced perspective and highlight the need for inclusive policies alongside technological progress' },
      { id: 'edu_013_05_c', text: 'To prove that technology is always harmful' },
      { id: 'edu_013_05_d', text: 'To focus only on the negative aspects without mentioning benefits' }
    ],
    correctOptionIds: ['edu_013_05_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_013_06',
    subjectId: "english",
    text: 'What does "the digital divide" in the passage refer to?',
    readingPassage: 'Digital transformation is fundamentally reshaping economies, societies and governance structures across the globe. This process involves the integration of digital technologies into all areas of human activity, fundamentally changing how organisations operate and deliver value to stakeholders. Key drivers of digital transformation include cloud computing, big data analytics, the Internet of Things (IoT), artificial intelligence and blockchain technology. In the business sector, digital transformation enables companies to optimise operations, enhance customer experiences and create new revenue streams. E-commerce platforms have revolutionised retail, while fintech innovations are transforming banking and financial services. In education, digital learning platforms and virtual classrooms are making knowledge more accessible than ever before. Healthcare is being revolutionised through telemedicine, electronic health records and AI-assisted diagnostics. Governments are implementing e-government initiatives to deliver public services more efficiently and transparently. However, digital transformation also presents significant challenges. Cybersecurity threats are becoming more sophisticated and damaging. The digital divide risks excluding vulnerable populations from accessing essential services. Privacy concerns are escalating as more personal data is collected and analysed. Workforce displacement due to automation is a growing concern. Moreover, the rapid pace of technological change makes it difficult for regulations and legal frameworks to keep up. Successful digital transformation requires not only technological infrastructure but also digital literacy, institutional adaptation and inclusive policies that ensure no one is left behind in the digital age.',
    options: [
      { id: 'edu_013_06_a', text: 'The gap between those who have access to digital technology and those who do not' },
      { id: 'edu_013_06_b', text: 'A type of computer virus' },
      { id: 'edu_013_06_c', text: 'The difference between old and new software' },
      { id: 'edu_013_06_d', text: 'A mathematical concept in computing' }
    ],
    correctOptionIds: ['edu_013_06_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_013_07',
    subjectId: "english",
    text: 'Which sector is mentioned as being revolutionised through telemedicine?',
    readingPassage: 'Digital transformation is fundamentally reshaping economies, societies and governance structures across the globe. This process involves the integration of digital technologies into all areas of human activity, fundamentally changing how organisations operate and deliver value to stakeholders. Key drivers of digital transformation include cloud computing, big data analytics, the Internet of Things (IoT), artificial intelligence and blockchain technology. In the business sector, digital transformation enables companies to optimise operations, enhance customer experiences and create new revenue streams. E-commerce platforms have revolutionised retail, while fintech innovations are transforming banking and financial services. In education, digital learning platforms and virtual classrooms are making knowledge more accessible than ever before. Healthcare is being revolutionised through telemedicine, electronic health records and AI-assisted diagnostics. Governments are implementing e-government initiatives to deliver public services more efficiently and transparently. However, digital transformation also presents significant challenges. Cybersecurity threats are becoming more sophisticated and damaging. The digital divide risks excluding vulnerable populations from accessing essential services. Privacy concerns are escalating as more personal data is collected and analysed. Workforce displacement due to automation is a growing concern. Moreover, the rapid pace of technological change makes it difficult for regulations and legal frameworks to keep up. Successful digital transformation requires not only technological infrastructure but also digital literacy, institutional adaptation and inclusive policies that ensure no one is left behind in the digital age.',
    options: [
      { id: 'edu_013_07_a', text: 'Healthcare' },
      { id: 'edu_013_07_b', text: 'Agriculture' },
      { id: 'edu_013_07_c', text: 'Construction' },
      { id: 'edu_013_07_d', text: 'Mining' }
    ],
    correctOptionIds: ['edu_013_07_a'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  },
  {
    id: 'edu_013_08',
    subjectId: "english",
    text: 'Digital transformation only requires technological infrastructure to be successful.',
    readingPassage: 'Digital transformation is fundamentally reshaping economies, societies and governance structures across the globe. This process involves the integration of digital technologies into all areas of human activity, fundamentally changing how organisations operate and deliver value to stakeholders. Key drivers of digital transformation include cloud computing, big data analytics, the Internet of Things (IoT), artificial intelligence and blockchain technology. In the business sector, digital transformation enables companies to optimise operations, enhance customer experiences and create new revenue streams. E-commerce platforms have revolutionised retail, while fintech innovations are transforming banking and financial services. In education, digital learning platforms and virtual classrooms are making knowledge more accessible than ever before. Healthcare is being revolutionised through telemedicine, electronic health records and AI-assisted diagnostics. Governments are implementing e-government initiatives to deliver public services more efficiently and transparently. However, digital transformation also presents significant challenges. Cybersecurity threats are becoming more sophisticated and damaging. The digital divide risks excluding vulnerable populations from accessing essential services. Privacy concerns are escalating as more personal data is collected and analysed. Workforce displacement due to automation is a growing concern. Moreover, the rapid pace of technological change makes it difficult for regulations and legal frameworks to keep up. Successful digital transformation requires not only technological infrastructure but also digital literacy, institutional adaptation and inclusive policies that ensure no one is left behind in the digital age.',
    options: [
      { id: 'edu_013_08_a', text: 'True' },
      { id: 'edu_013_08_b', text: 'False' },
      { id: 'edu_013_08_c', text: 'Not given' }
    ],
    correctOptionIds: ['edu_013_08_b'],
    type: "SINGLE",
    topic: 'Reading',
    difficulty: "hard"
  }
] as Question[] as Question[];
