import { Question } from '../../../../types';

// algo / Графтар және графтар алгоритмдері
export const algo10GraphsQuestions = [
  {
    "id": "0a25bc76-aa22-441e-ae21-88554bbef05e",
    "subjectId": "algo",
    "text": "Графты adjacency list арқылы сақтау қандай жады қолданады?",
    "options": [
      {
        "id": "089bb4de-9579-4ee0-8ba4-277b3e51b303",
        "text": "O(V + E)"
      },
      {
        "id": "3f3079fe-d242-48d5-b373-c24c78c068c9",
        "text": "O(V²)"
      },
      {
        "id": "a6c94e94-64b3-498a-8443-fe7d64fc0ff4",
        "text": "O(E²)"
      },
      {
        "id": "f1860576-f2f3-4126-be4e-40648a54109d",
        "text": "O(1)"
      }
    ],
    "correctOptionIds": [
      "089bb4de-9579-4ee0-8ba4-277b3e51b303"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "1e554c94-b65e-4a74-9322-05d6dcc57562",
    "subjectId": "algo",
    "text": "Бағытталмаған граф (Undirected Graph) дегеніміз не?",
    "options": [
      {
        "id": "2b1357ff-b025-4293-a174-875db264b6bc",
        "text": "Циклі бар граф"
      },
      {
        "id": "3261c520-5944-4955-af10-0238b74076a0",
        "text": "Ағаш"
      },
      {
        "id": "5a461a4f-25c7-478b-8732-4a3dc016867f",
        "text": "Қабырғалар екі жақтан байланысқан"
      },
      {
        "id": "ed6586fe-90bb-40fb-a62a-e1361e1f069f",
        "text": "Қабырғалардың бағыты бар"
      }
    ],
    "correctOptionIds": [
      "5a461a4f-25c7-478b-8732-4a3dc016867f"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "20d630ea-472d-4236-ac66-44a24e6d85ba",
    "subjectId": "algo",
    "text": "Топологиялық сұрыптау қандай графтарда мүмкін?",
    "options": [
      {
        "id": "35be569d-f041-4241-a9a1-b2e50505eafd",
        "text": "Барлық графтар"
      },
      {
        "id": "64135c3c-0afe-4f22-be81-c1381841b746",
        "text": "Бағытталмаған графтар"
      },
      {
        "id": "8916b49b-fd5a-4822-bb1d-1b152a59feea",
        "text": "Циклі бар графтар"
      },
      {
        "id": "ea34d2f9-fd75-4cbf-ae9e-cd7cd798f254",
        "text": "DAG (циклсіз бағытталған граф)"
      }
    ],
    "correctOptionIds": [
      "ea34d2f9-fd75-4cbf-ae9e-cd7cd798f254"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "30bcb0d4-4e12-4fb3-a5b2-66f56bec64ea",
    "subjectId": "algo",
    "text": "Minimum Spanning Tree (Тірек ағаш) дегеніміз не?",
    "options": [
      {
        "id": "6c8a053f-0ab7-441a-a31b-ac28e0bf0602",
        "text": "Графтың барлық төбелерін ең аз салмақпен байланыстыратын ағаш"
      },
      {
        "id": "7eb79499-595b-4447-b69c-a6077a64e32b",
        "text": "Ең көп түйіні бар ағаш"
      },
      {
        "id": "b3a2a8e9-c5a9-40ad-9ff0-c45c31308c6f",
        "text": "Графтағы ең қысқа жол"
      },
      {
        "id": "c0273434-cefd-408c-aeb3-00db77b9b61e",
        "text": "Ең терең ағаш"
      }
    ],
    "correctOptionIds": [
      "6c8a053f-0ab7-441a-a31b-ac28e0bf0602"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "3fb7f777-8e97-4623-ad65-0c20f4ed2bbb",
    "subjectId": "algo",
    "text": "Прим және Крускал алгоритмдерінің ортақ мақсаты не?",
    "options": [
      {
        "id": "280112fe-daf3-4454-89ee-3a7d36cb6fd9",
        "text": "Ең қысқа жол табу"
      },
      {
        "id": "569f9f4c-0c51-40ab-a852-992dbe47fd54",
        "text": "Топологиялық сұрыптау"
      },
      {
        "id": "608acea4-a6d1-4171-808c-35c8d8cc29cb",
        "text": "MST (минималды қаңқа ағаш) құру"
      },
      {
        "id": "69d671e1-490e-4d7f-ad81-16c4ebc0c1af",
        "text": "Циклды анықтау"
      }
    ],
    "correctOptionIds": [
      "608acea4-a6d1-4171-808c-35c8d8cc29cb"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "58eeb74a-51f0-4a99-9a8d-c9e12a064cca",
    "subjectId": "algo",
    "text": "DFS қандай деректер құрылымын қолданады?",
    "options": [
      {
        "id": "0eb31bf3-5d30-458b-bd2a-2ee1a79b980e",
        "text": "Queue"
      },
      {
        "id": "a08d7fe3-4137-48d8-8b3f-5a12e355a87e",
        "text": "Stack (немесе рекурсия)"
      },
      {
        "id": "aced1119-204d-4280-8ce6-6e956d0cf0bf",
        "text": "Array"
      },
      {
        "id": "c71b8a7f-56c1-4fed-8126-0b583169ddf4",
        "text": "Heap"
      }
    ],
    "correctOptionIds": [
      "a08d7fe3-4137-48d8-8b3f-5a12e355a87e"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "5a7802ea-1331-4a79-be38-53230afa07c6",
    "subjectId": "algo",
    "text": "DFS (Depth-First Search) дегеніміз не?",
    "options": [
      {
        "id": "17491b3d-9624-4229-854d-4bdd7c2301d5",
        "text": "Сызықтық іздеу"
      },
      {
        "id": "20c7acbd-cb96-4e32-8865-31134eb1f005",
        "text": "Тереңдік бойынша іздеу"
      },
      {
        "id": "932d588a-1078-416e-8f68-d91445fbc8f3",
        "text": "Екілік іздеу"
      },
      {
        "id": "f8182b27-ea2d-4a86-9b10-e52b8e55e2b4",
        "text": "Ендік бойынша іздеу"
      }
    ],
    "correctOptionIds": [
      "20c7acbd-cb96-4e32-8865-31134eb1f005"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "63387d06-9cd7-4a8c-8e1e-c2d12f4314de",
    "subjectId": "algo",
    "text": "DAG дегеніміз не?",
    "options": [
      {
        "id": "33b439ca-fbad-4f11-88ce-91bba9ca8897",
        "text": "Бағытталмаған граф"
      },
      {
        "id": "5cf76f4c-d678-4f40-8950-3bc674f1e537",
        "text": "Циклсіз бағытталған граф"
      },
      {
        "id": "a35e3560-76ee-4299-bc15-7b3cf8a2c842",
        "text": "Толық граф"
      },
      {
        "id": "bef76f1c-9cfd-4b8f-a03b-d5864e150c11",
        "text": "Циклі бар бағытталған граф"
      }
    ],
    "correctOptionIds": [
      "5cf76f4c-d678-4f40-8950-3bc674f1e537"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "7b28fbf6-bf05-421a-823e-ff1d18886f25",
    "subjectId": "algo",
    "text": "Графты adjacency matrix арқылы сақтау қандай жады қолданады?",
    "options": [
      {
        "id": "4402c806-676a-4df0-9b45-716ed6a70c56",
        "text": "O(V+E)"
      },
      {
        "id": "b2ecc219-486a-4264-ae7a-03c20f3288f3",
        "text": "O(V²)"
      },
      {
        "id": "ca2037dc-383b-4510-97ce-976faabc2d5b",
        "text": "O(V)"
      },
      {
        "id": "ddf36919-acd5-4188-9e3d-23ac53dab638",
        "text": "O(E)"
      }
    ],
    "correctOptionIds": [
      "b2ecc219-486a-4264-ae7a-03c20f3288f3"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "7e61f27c-001f-4e34-bf85-e41a742827c8",
    "subjectId": "algo",
    "text": "Графтағы қосылған компоненттер (connected components) не?",
    "options": [
      {
        "id": "9f140580-91f3-4bae-bc4e-0ff2b4296d4a",
        "text": "Циклдер"
      },
      {
        "id": "a29b88a8-6060-46b7-861f-479bb7d8465e",
        "text": "Бір төбе"
      },
      {
        "id": "bd78296c-93cd-4781-aa0d-2e7aefa9d291",
        "text": "Бір-бірімен байланысқан төбелер топтары"
      },
      {
        "id": "e4ed4e9a-1930-4390-932a-696d8c31b268",
        "text": "Қабырғалар"
      }
    ],
    "correctOptionIds": [
      "bd78296c-93cd-4781-aa0d-2e7aefa9d291"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "94e3ad9d-2ebf-418a-ace9-019f533e3b9c",
    "subjectId": "algo",
    "text": "Графтың циклі (cycle) дегеніміз не?",
    "options": [
      {
        "id": "a0519190-be7d-47ff-b207-6a0b2226b107",
        "text": "Ең қысқа жол"
      },
      {
        "id": "afc3567f-47e6-47ca-81ca-87e7767305e7",
        "text": "Бастапқы төбе жоқ"
      },
      {
        "id": "dd1dc738-2a66-4420-b7d2-0018c191b773",
        "text": "Бір төбеден бастап, сол төбеге оралатын жол"
      },
      {
        "id": "ec39b37b-aead-4c2c-a547-4db57399f5c0",
        "text": "MST"
      }
    ],
    "correctOptionIds": [
      "dd1dc738-2a66-4420-b7d2-0018c191b773"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "a33c05af-a535-4c16-a77c-6c33095f2977",
    "subjectId": "algo",
    "text": "Крускал алгоритмі қалай жұмыс істейді?",
    "options": [
      {
        "id": "590b01f9-23ca-448f-86f8-e2cfd9f60495",
        "text": "Ендік бойынша іздейді"
      },
      {
        "id": "a54a1b74-c336-48b5-91ca-2847dece30cc",
        "text": "Қабырғаларды салмағы бойынша сұрыптап, MST құрады"
      },
      {
        "id": "bce081d2-29c6-4726-a758-5061cca6ac7a",
        "text": "Тереңдік бойынша іздейді"
      },
      {
        "id": "dd76e48e-19cb-4e09-a2a5-b43ba74432e1",
        "text": "Кездейсоқ қабырғаларды таңдайды"
      }
    ],
    "correctOptionIds": [
      "a54a1b74-c336-48b5-91ca-2847dece30cc"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "b4e503c8-b370-4d65-b325-f17c0b725b7b",
    "subjectId": "algo",
    "text": "Флойд-Уоршелл алгоритмі не табады?",
    "options": [
      {
        "id": "09161126-9285-462f-87a6-92cab266fd0b",
        "text": "Графтың циклін"
      },
      {
        "id": "cce25366-088a-4035-a66a-35ea5b6445b4",
        "text": "Минималды қаңқа ағаш"
      },
      {
        "id": "cfa9569d-b167-48df-b14e-12610407306c",
        "text": "Барлық төбе жұптары арасындағы ең қысқа жолдар"
      },
      {
        "id": "d624fac2-c5ec-45e8-be15-7145b7d12ff1",
        "text": "Бір төбеден ең қысқа жол"
      }
    ],
    "correctOptionIds": [
      "cfa9569d-b167-48df-b14e-12610407306c"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "c0b940f2-94ba-4500-a28b-f01a01706b1d",
    "subjectId": "algo",
    "text": "Dijkstra алгоритмі не үшін қолданылады?",
    "options": [
      {
        "id": "4a620a08-df92-483b-9dc6-980b00078869",
        "text": "Минималды қаңқа ағашы"
      },
      {
        "id": "a7ba2937-b032-4451-9f60-aeea596f66f3",
        "text": "Графты бояу"
      },
      {
        "id": "d73db4b1-6897-4540-8320-11a175239978",
        "text": "Ең қысқа жолды табу"
      },
      {
        "id": "ff8aba5e-5ba5-4e6a-bf9b-d02d053fa685",
        "text": "Сұрыптау"
      }
    ],
    "correctOptionIds": [
      "d73db4b1-6897-4540-8320-11a175239978"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "d64937e6-1136-4239-9e67-259a7631acdf",
    "subjectId": "algo",
    "text": "BFS (Breadth-First Search) дегеніміз не?",
    "options": [
      {
        "id": "34868b1f-cc09-4064-b502-3fc92bc9a50c",
        "text": "Ендік (деңгей) бойынша іздеу"
      },
      {
        "id": "7c3df1d5-499b-4a16-b7e2-7995d06802e6",
        "text": "Екілік іздеу"
      },
      {
        "id": "9b2a0699-c1bb-4e91-89b9-9456d5136461",
        "text": "Тереңдік бойынша іздеу"
      },
      {
        "id": "c1c559d1-09ce-454b-b09b-c0846d65bfee",
        "text": "Сызықтық іздеу"
      }
    ],
    "correctOptionIds": [
      "34868b1f-cc09-4064-b502-3fc92bc9a50c"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "dafdb287-aab9-4cf9-b649-77afe90e03bf",
    "subjectId": "algo",
    "text": "Беллман-Форд алгоритмі Dijkstra-дан қандай жағдайда артық?",
    "options": [
      {
        "id": "19943793-dc80-47cb-ac14-95597a990d63",
        "text": "Жылдамырақ"
      },
      {
        "id": "3e9aa66f-df89-4126-83c0-3343945dedf2",
        "text": "Аз жады қолданады"
      },
      {
        "id": "6c520d52-0fc2-445f-879c-7f1743d6cc0f",
        "text": "Теріс салмақты қабырғаларды өңдей алады"
      },
      {
        "id": "efc8acb5-f6e3-4cd8-9c0c-edea77c653a2",
        "text": "Тек ағаштарда жұмыс істейді"
      }
    ],
    "correctOptionIds": [
      "6c520d52-0fc2-445f-879c-7f1743d6cc0f"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "e06d78a2-f5b3-4cab-b3ec-96c7afb4ab18",
    "subjectId": "algo",
    "text": "BFS/DFS уақыт күрделілігі қандай?",
    "options": [
      {
        "id": "51a3a435-bf44-4af4-8586-3c6cc0444f9f",
        "text": "O(V)"
      },
      {
        "id": "7ea39020-561f-4f21-a580-e68fb2eb9ee6",
        "text": "O(E)"
      },
      {
        "id": "a00ae8ca-ae9b-4760-bf84-0fca2c09d996",
        "text": "O(V²)"
      },
      {
        "id": "dcae710c-7b1f-4aaa-abf0-a2b04e1d77e1",
        "text": "O(V + E)"
      }
    ],
    "correctOptionIds": [
      "dcae710c-7b1f-4aaa-abf0-a2b04e1d77e1"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "e189e3c9-e9c3-4650-9c21-77ea3b1f081f",
    "subjectId": "algo",
    "text": "Dijkstra алгоритмі қандай графтарда жұмыс істейді?",
    "options": [
      {
        "id": "4aac4595-4292-483d-983b-39820ee968d1",
        "text": "Тек ағаштар"
      },
      {
        "id": "7a1c329d-9ce3-4bfa-b952-046e6beb6385",
        "text": "Теріс салмақты қабырғалар болмауы керек"
      },
      {
        "id": "90371574-e91f-46ee-80e9-4459a647cf86",
        "text": "Тек бағытталған графтар"
      },
      {
        "id": "c1503c58-3b7e-416d-9566-1b5e2e909544",
        "text": "Барлық графтар"
      }
    ],
    "correctOptionIds": [
      "7a1c329d-9ce3-4bfa-b952-046e6beb6385"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "f7c38269-eabb-4ff9-8b8b-29c5c85f344e",
    "subjectId": "algo",
    "text": "Бағытталған граф (Directed Graph) дегеніміз не?",
    "options": [
      {
        "id": "15ba548a-bd93-432b-b3df-dd1cd1b35076",
        "text": "Толық граф"
      },
      {
        "id": "18443684-6aa5-4ab9-8f50-503d9e427190",
        "text": "Қабырғалардың бағыты бар"
      },
      {
        "id": "9d6e5ab3-a4fe-4416-ad19-93aef16d0f97",
        "text": "Қабырғалардың бағыты жоқ"
      },
      {
        "id": "f1e646dd-7076-4d13-9e08-ddec6667ad49",
        "text": "Циклі жоқ граф"
      }
    ],
    "correctOptionIds": [
      "18443684-6aa5-4ab9-8f50-503d9e427190"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "f8a96e80-c59a-4f8e-ab90-bdc066a5bd41",
    "subjectId": "algo",
    "text": "BFS қандай деректер құрылымын қолданады?",
    "options": [
      {
        "id": "22991878-bad9-4ab5-8e06-ba05a28152a3",
        "text": "Queue"
      },
      {
        "id": "9e87b109-99c3-498a-8f76-84c603e92e7f",
        "text": "Heap"
      },
      {
        "id": "ac852a6a-6e6c-4584-90fc-015ebbd9b8e6",
        "text": "Tree"
      },
      {
        "id": "f8161e23-2e1f-4e55-be66-8dc49d190628",
        "text": "Stack"
      }
    ],
    "correctOptionIds": [
      "22991878-bad9-4ab5-8e06-ba05a28152a3"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "fb8b017f-a034-4705-aea4-5f6ef4956039",
    "subjectId": "algo",
    "text": "Dijkstra алгоритмінің уақыт күрделілігі қандай (priority queue)?",
    "options": [
      {
        "id": "045f3f8c-f25a-405a-a38e-394ca862eab5",
        "text": "O(V)"
      },
      {
        "id": "4292e8e0-c8e7-49fd-ac5d-c791de1bf9b0",
        "text": "O((V+E) log V)"
      },
      {
        "id": "9e5dee22-2f5a-48b8-a28d-8b54a35da5b5",
        "text": "O(V²)"
      },
      {
        "id": "df94b6e3-253d-4028-884e-fc8cc6a0aea0",
        "text": "O(E)"
      }
    ],
    "correctOptionIds": [
      "4292e8e0-c8e7-49fd-ac5d-c791de1bf9b0"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "ffceb388-2f09-4171-ade0-d23665944b49",
    "subjectId": "algo",
    "text": "Прим алгоритмі не құрады?",
    "options": [
      {
        "id": "acde24b6-a102-4bce-b59a-10d438190a03",
        "text": "Топологиялық сұрыптау"
      },
      {
        "id": "b94b1f20-5ada-4165-b9d5-6828f1ad3e71",
        "text": "Минималды қаңқа ағаш (MST)"
      },
      {
        "id": "d1714710-07f9-4d77-a124-4d3ec4f07f93",
        "text": "BFS"
      },
      {
        "id": "fc7a477e-5bb1-487b-a059-8326eb1d7615",
        "text": "Ең қысқа жол"
      }
    ],
    "correctOptionIds": [
      "b94b1f20-5ada-4165-b9d5-6828f1ad3e71"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "bd04f7dd-b049-407f-8f45-6c7ebe7b09ef",
    "subjectId": "algo",
    "text": "Бағытталмаған графтың барлық төбелерінің дәрежелерінің қосындысы қабырғалар (E) санына қалай қатысты?",
    "options": [
      {
        "id": "b6687863-9c57-4652-90b6-3325b160e9ae",
        "text": "Қабырғалар санынан екі есе үлкен (2 * E) (Дәрежелер туралы лемма)"
      },
      {
        "id": "7f4c94d5-4e0c-40d7-a737-8c9ef41de00c",
        "text": "Қабырғалар санына тең (E)"
      },
      {
        "id": "10dd56e9-326f-4476-84c2-393d925d24c3",
        "text": "Қабырғалар санынан екі есе кіші (E / 2)"
      },
      {
        "id": "83f4d6c1-ea41-40fc-8913-8d005c7f0e39",
        "text": "Төбелер санына (V) тең"
      }
    ],
    "correctOptionIds": [
      "b6687863-9c57-4652-90b6-3325b160e9ae"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "65c44cc3-e357-42ac-9afc-69b1939895a8",
    "subjectId": "algo",
    "text": "Төбелер саны V-ге тең бағытталмаған толық графтың қабырғалар саны қандай болады?",
    "options": [
      {
        "id": "912fe218-7966-4fd7-8576-60c76fa55ee0",
        "text": "V * (V - 1) / 2"
      },
      {
        "id": "7e73d15c-9647-4f0a-9d08-a252ca4f3405",
        "text": "V * (V - 1)"
      },
      {
        "id": "47c83e02-5249-48b5-91e9-db6327700f05",
        "text": "V^2"
      },
      {
        "id": "bba6447c-4350-4978-938a-4906911d5109",
        "text": "2 * V"
      }
    ],
    "correctOptionIds": [
      "912fe218-7966-4fd7-8576-60c76fa55ee0"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "4ece7ba9-3326-4a74-ba5d-1f1989307673",
    "subjectId": "algo",
    "text": "Төбелер саны V-ге тең бағытталған толық графтың қабырғалар саны қандай?",
    "options": [
      {
        "id": "81536d8e-0ad9-47d8-928f-1aa15ac5497d",
        "text": "V * (V - 1)"
      },
      {
        "id": "57f82fee-9ea5-4d71-9060-1fe223bb4a2b",
        "text": "V * (V - 1) / 2"
      },
      {
        "id": "12fa2520-7b4b-4ebe-8c61-29e35895eb4f",
        "text": "V^2"
      },
      {
        "id": "79f1475e-c961-447a-b238-d15d23b0d34b",
        "text": "V + 1"
      }
    ],
    "correctOptionIds": [
      "81536d8e-0ad9-47d8-928f-1aa15ac5497d"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "1d117d76-094d-4613-8885-87f6b3cb3d16",
    "subjectId": "algo",
    "text": "Графтың екі үлесті (Bipartite) екенін қалай тексеруге болады?",
    "options": [
      {
        "id": "60a17a94-dbc0-45cc-9ec5-5b175383034f",
        "text": "BFS немесе DFS арқылы граф төбелерін 2 түске бояу арқылы (көршілес төбелердің түсі әртүрлі болуы тиіс)"
      },
      {
        "id": "13b07539-e01d-497b-bb13-0e902cf28223",
        "text": "Тек топологиялық сұрыптаумен"
      },
      {
        "id": "84de8472-f96f-4f9d-a617-736cb2de1ba9",
        "text": "Қабырғаларды салмағы бойынша сұрыптаумен"
      },
      {
        "id": "a88f870d-4d3d-452b-9e4c-4f9d0c74441e",
        "text": "Крускал алгоритмі арқылы"
      }
    ],
    "correctOptionIds": [
      "60a17a94-dbc0-45cc-9ec5-5b175383034f"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "12da989f-dc3e-461c-ada1-72ccee651385",
    "subjectId": "algo",
    "text": "Графта тақ ұзындықтағы цикл (odd cycle) бар болса, ол граф туралы не айтуға болады?",
    "options": [
      {
        "id": "e99c5751-f8ba-4496-8351-dd51373e2daa",
        "text": "Ол граф екі үлесті (bipartite) бола алмайды"
      },
      {
        "id": "8338ec3c-2847-4a91-808d-58101f531ba6",
        "text": "Ол міндетті түрде ағаш болады"
      },
      {
        "id": "e14f9e3f-20d9-4ac2-b174-c83ef0ba54d8",
        "text": "Ол бағытталған циклсіз граф (DAG) болады"
      },
      {
        "id": "41602d67-a2d5-43ec-9d2b-65b28c31a1df",
        "text": "Оған топологиялық сұрыптау жасауға болады"
      }
    ],
    "correctOptionIds": [
      "e99c5751-f8ba-4496-8351-dd51373e2daa"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "ae0e8470-120e-4c74-97ff-bbf4ae8999e3",
    "subjectId": "algo",
    "text": "Дистрибьюцияланған немесе үлестірілген жүйелердегі бағыттау протоколдарында (мысалы, RIP) қолданылатын, теріс қабырғаларды қолдайтын алгоритм қандай?",
    "options": [
      {
        "id": "f7067252-65d4-4ee5-bce8-28beff7c37af",
        "text": "Беллман-Форд (Bellman-Ford) алгоритмі"
      },
      {
        "id": "b78cd920-5ca2-40e6-a919-2edb2958524b",
        "text": "Дейкстра (Dijkstra) алгоритмі"
      },
      {
        "id": "b49bbbab-cc0b-46ae-ab2f-371c3a84787b",
        "text": "Прим (Prim) алгоритмі"
      },
      {
        "id": "bd437549-c444-4d4c-951c-93f6a78d6832",
        "text": "Крускал (Kruskal) алгоритмі"
      }
    ],
    "correctOptionIds": [
      "f7067252-65d4-4ee5-bce8-28beff7c37af"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "424c6daa-dddc-4c76-9997-e66cdf289a85",
    "subjectId": "algo",
    "text": "Дейкстра алгоритмінде басымдылық кезегі (Priority Queue) ретінде Фибоначчи үйіндісі (Fibonacci Heap) қолданылса, уақыт күрделілігі қалай оңтайландырылады?",
    "options": [
      {
        "id": "87877cd7-8221-4002-bd50-20718f41b069",
        "text": "O(E + V log V)"
      },
      {
        "id": "f8ee459d-68c8-48a0-b619-cf6e6a257a34",
        "text": "O(V^2)"
      },
      {
        "id": "cfbc609a-4254-4222-ad87-bd4adaed81c4",
        "text": "O(E log V)"
      },
      {
        "id": "2d649534-27a2-44e3-a88e-d2bca8f3e7fe",
        "text": "O(E log E)"
      }
    ],
    "correctOptionIds": [
      "87877cd7-8221-4002-bd50-20718f41b069"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "79c7bf2b-295a-44d2-8546-3be2b2520932",
    "subjectId": "algo",
    "text": "Бағытталған графтың күшті байланысқан компоненттерін (Strongly Connected Components - SCC) табуға арналған Косараю (Kosaraju) алгоритмі неше рет DFS орындайды?",
    "options": [
      {
        "id": "47523b6b-62e1-4222-b326-9f9b59a28124",
        "text": "2 рет (бірінші бастапқы графта, екінші транпонирленген графта)"
      },
      {
        "id": "8e9a1c06-ae55-4468-8325-00b1fa7726b3",
        "text": "1 рет"
      },
      {
        "id": "73089b6c-81a0-4b7a-b920-88d145f206a0",
        "text": "Әрбір төбе үшін жеке-жеке"
      },
      {
        "id": "1e01ca7c-2c05-46a1-825c-a840e65fc128",
        "text": "Ол DFS қолданбайды, BFS қолданады"
      }
    ],
    "correctOptionIds": [
      "47523b6b-62e1-4222-b326-9f9b59a28124"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "5c05f5aa-c247-402f-a47c-9aac2df30316",
    "subjectId": "algo",
    "text": "Транспонирленген граф (Transposed Graph / G^T) дегеніміз не?",
    "options": [
      {
        "id": "36d73c2f-0736-455c-9dc5-750eccceb32f",
        "text": "Бастапқы бағытталған графтың барлық қабырғаларының бағытын керісінше өзгерткенде алынатын граф"
      },
      {
        "id": "dbe1e053-7a31-4522-ad4d-e842b1c9af57",
        "text": "Барлық қабырға салмақтарын теріс қылған граф"
      },
      {
        "id": "63105a54-54f0-40c1-bd25-245586379170",
        "text": "Көршілестік матрицасы нөлге теңелген граф"
      },
      {
        "id": "35917a31-8113-4c97-baa3-d81c572d9b27",
        "text": "Бағытталмаған графқа айналған граф"
      }
    ],
    "correctOptionIds": [
      "36d73c2f-0736-455c-9dc5-750eccceb32f"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "8284749f-d449-4e3b-b8d6-a308674fb38c",
    "subjectId": "algo",
    "text": "Косараю алгоритмінен басқа, бір ғана DFS аралауымен күшті байланысқан компоненттерді (SCC) табатын тиімді алгоритм қалай аталады?",
    "options": [
      {
        "id": "726f7ef1-86b0-487d-9b8c-37077e20bb22",
        "text": "Тарьян (Tarjan) алгоритмі"
      },
      {
        "id": "485c04a8-9456-44be-a11e-640b85369bce",
        "text": "Флойд-Уоршелл алгоритмі"
      },
      {
        "id": "ef3a050a-24e4-451a-90a8-5120c10a337f",
        "text": "Диниц алгоритмі"
      },
      {
        "id": "0c933932-0d3b-41a3-9763-44ec447860f7",
        "text": "Форд-Фулкерсон алгоритмі"
      }
    ],
    "correctOptionIds": [
      "726f7ef1-86b0-487d-9b8c-37077e20bb22"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "7d608697-2d64-4ddf-a5c3-4d91573fcb8a",
    "subjectId": "algo",
    "text": "Графтың қабырғасы (u, v) көпір (Bridge / Cut Edge) деп аталады, егер:",
    "options": [
      {
        "id": "b6a5a69a-fbc7-4796-9583-ff82e1446252",
        "text": "Сол қабырғаны өшіргенде графтың байланысқан компоненттерінің саны артса"
      },
      {
        "id": "e9bafb5a-4186-4e5b-81a5-5ba41ddc1fcc",
        "text": "Қабырғаның салмағы теріс болса"
      },
      {
        "id": "165c641c-2958-4cc8-a51d-6590a60dd9c6",
        "text": "Ол екі үлкен төбені байланыстырса"
      },
      {
        "id": "a596c97f-a462-40c7-a12c-9e165a46b55b",
        "text": "Ол циклдің мүшесі болса"
      }
    ],
    "correctOptionIds": [
      "b6a5a69a-fbc7-4796-9583-ff82e1446252"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "970e1db1-9304-4e20-973e-8cbcb2b5aa37",
    "subjectId": "algo",
    "text": "Графтың төбесе v топсалы төбе (Articulation Point / Cut Vertex) деп аталады, егер:",
    "options": [
      {
        "id": "2a2b76fc-731d-421c-be69-6bcb9940e0ba",
        "text": "Сол төбені және оған жалғанған барлық қабырғаларды өшіргенде байланысқан компоненттер саны артса"
      },
      {
        "id": "7bd1a693-b485-43b0-b7c8-096e918954d8",
        "text": "Оның дәрежесі 0-ге тең болса"
      },
      {
        "id": "986bd377-0a55-4391-a5a5-1240aa739481",
        "text": "Ол тек бір қабырғамен байланысса"
      },
      {
        "id": "aa57cf5f-fec3-4159-8805-3bdb47cba707",
        "text": "Ол түбір түйіні болса"
      }
    ],
    "correctOptionIds": [
      "2a2b76fc-731d-421c-be69-6bcb9940e0ba"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "dfa2753c-7ffe-4bb2-8ff7-e5986caf15dd",
    "subjectId": "algo",
    "text": "Disjoint Set Union (DSU / Find-Union) деректер құрылымы Крускал алгоритмінде не үшін қолданылады?",
    "options": [
      {
        "id": "90ddf3ae-c38a-4a45-b560-15c6683f1424",
        "text": "Қабырғаларды қосқанда цикл (loop) пайда болатынын өте жылдам (O(α(V))) анықтау үшін"
      },
      {
        "id": "375e9cf7-872a-4791-b51a-c13d2ca1fe48",
        "text": "Төбелерді салмағы бойынша сұрыптау үшін"
      },
      {
        "id": "01e0ca9f-362d-4a5a-809f-1daf6dece07d",
        "text": "Басымдылық кезегін жүзеге асыру үшін"
      },
      {
        "id": "e2e860fc-be2f-4af4-8501-b1d09484e3da",
        "text": "Қысқа жолдарды есептеу үшін"
      }
    ],
    "correctOptionIds": [
      "90ddf3ae-c38a-4a45-b560-15c6683f1424"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "683c01ff-814b-43f7-b904-06d6b6a50fb2",
    "subjectId": "algo",
    "text": "DSU-дегі екі негізгі оңтайландыру әдісі қалай аталады?",
    "options": [
      {
        "id": "ed7338c1-a130-4b29-ba07-c4c042392c36",
        "text": "Ранг бойынша біріктіру (Union by Rank) және Жолды қысқарту (Path Compression)"
      },
      {
        "id": "f52fb642-ff57-4669-b068-fb19754556a1",
        "text": "Тереңдік бойынша іздеу және Ендік бойынша іздеу"
      },
      {
        "id": "ebbb974f-198a-4526-b310-5e25525b749e",
        "text": "Рекурсиялық сұрыптау және Айналдыру"
      },
      {
        "id": "8fe4e893-6c46-487b-b5fe-ceade08870c0",
        "text": "Сызықтық және квадраттық зондтау"
      }
    ],
    "correctOptionIds": [
      "ed7338c1-a130-4b29-ba07-c4c042392c36"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "0b89f27c-53ce-4433-97b3-ab2e53bf938b",
    "subjectId": "algo",
    "text": "Жолды қысқарту (Path Compression) оңтайландыруы Find операциясының жұмысын қалай жақсартады?",
    "options": [
      {
        "id": "3aba41e3-e355-473c-a49a-bb1bb071b8c4",
        "text": "Find іздеген барлық төбелерді тікелей жиынның түбіріне (root) жалғап, келесі жолы O(1) дерлік уақытта табуды қамтамасыз етеді"
      },
      {
        "id": "cebcb450-5257-4a8f-b4c8-edd965a2f601",
        "text": "Жиын өлшемін екі есеге азайтады"
      },
      {
        "id": "41a006b6-7f09-4032-bf3a-05a4f20e388c",
        "text": "Соқтығыстарды толығымен болдырмайды"
      },
      {
        "id": "6144d332-94c8-475a-ba61-6c267063c086",
        "text": "Рекурсия биіктігін арттырады"
      }
    ],
    "correctOptionIds": [
      "3aba41e3-e355-473c-a49a-bb1bb071b8c4"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "0033311f-f736-4192-a2d7-794e628a8417",
    "subjectId": "algo",
    "text": "Эйлер жолы (Eulerian Path) дегеніміз не?",
    "options": [
      {
        "id": "ffbda209-e186-4756-b07c-e5c0811310c8",
        "text": "Графтың әрбір қабырғасын (edge) дәл бір рет басып өтетін жол"
      },
      {
        "id": "559286ce-9858-4d23-92cb-3500d647c712",
        "text": "Әрбір төбесін (vertex) дәл бір рет басып өтетін жол"
      },
      {
        "id": "d625a847-e692-4e78-9e01-4f61217c31d3",
        "text": "Барлық қабырға салмақтары тең болатын жол"
      },
      {
        "id": "124e5f16-3714-4d25-9394-65a10d663dbe",
        "text": "Графтағы ең ұзын цикл"
      }
    ],
    "correctOptionIds": [
      "ffbda209-e186-4756-b07c-e5c0811310c8"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "fdca53e8-6e60-4fc2-beee-d408c4d78a4f",
    "subjectId": "algo",
    "text": "Гамильтон жолы (Hamiltonian Path) дегеніміз не?",
    "options": [
      {
        "id": "76a3749e-a770-4f1a-8e72-495a79a13a69",
        "text": "Графтың әрбір төбесін (vertex) дәл бір рет басып өтетін жол"
      },
      {
        "id": "4525c5a4-a52c-4924-9c61-578975691217",
        "text": "Әрбір қабырғасын (edge) дәл бір рет басып өтетін жол"
      },
      {
        "id": "a51ba9ea-bb0f-40b5-ba9b-66c5a4319461",
        "text": "Тек бағытталған графтарда ғана болатын цикл"
      },
      {
        "id": "e3615c09-2818-4cc0-8253-c4ce85a2a6a9",
        "text": "Минималды қаңқа ағашы"
      }
    ],
    "correctOptionIds": [
      "76a3749e-a770-4f1a-8e72-495a79a13a69"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "74869ee9-c16c-4dd9-a6dc-d695cd984adc",
    "subjectId": "algo",
    "text": "Бағытталмаған байланысқан графта Эйлер циклі (Eulerian Circuit) болуының қажетті және жеткілікті шарты қандай?",
    "options": [
      {
        "id": "ba122d28-0070-4c0b-9422-a2321ca83f90",
        "text": "Барлық төбелердің дәрежелері (degree) жұп болуы тиіс"
      },
      {
        "id": "2b9e782d-9adc-423b-aff1-6a38388c001f",
        "text": "Графта тақ дәрежелі төбелер саны дәл 2 болуы тиіс"
      },
      {
        "id": "afcaacaf-3730-4720-93ea-8a877c3b69d4",
        "text": "Графта ешқандай цикл болмауы тиіс"
      },
      {
        "id": "a46e3873-4f4c-47bb-9f0d-5ee03502dd57",
        "text": "Барлық қабырға салмақтары бірдей болуы тиіс"
      }
    ],
    "correctOptionIds": [
      "ba122d28-0070-4c0b-9422-a2321ca83f90"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "dc281dc1-3500-4ad1-9a4b-facaf7283592",
    "subjectId": "algo",
    "text": "Бағытталмаған байланысқан графта Эйлер жолы (бірақ цикл емес) болуының шарты қандай?",
    "options": [
      {
        "id": "5190d4f1-2da3-4f9a-be67-7767bd85a96c",
        "text": "Тақ дәрежелі төбелердің саны дәл 2 болуы тиіс (жол бірінен басталып, екіншісінен аяқталады)"
      },
      {
        "id": "a6363f5d-c77d-4fb2-ac8f-927390c7bdeb",
        "text": "Барлық төбелердің дәрежелері жұп болуы тиіс"
      },
      {
        "id": "6df310ee-a23a-4795-a00e-42e90ace76b5",
        "text": "Графта екі үлестілік сақталуы тиіс"
      },
      {
        "id": "a301f45c-d7fa-46ce-ae5e-df098a40116b",
        "text": "Төбелер саны қабырғалар санынан көп болуы тиіс"
      }
    ],
    "correctOptionIds": [
      "5190d4f1-2da3-4f9a-be67-7767bd85a96c"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "cf7ca859-6ffd-4b91-b6e5-21089ce8c277",
    "subjectId": "algo",
    "text": "Желілік ағындар теориясында (Network Flow) графтағы максималды ағынды (Maximum Flow) табу үшін қолданылатын классикалық алгоритм қандай?",
    "options": [
      {
        "id": "783c89ad-f317-487a-9bf2-751e8d231d90",
        "text": "Форд-Фулкерсон (Ford-Fulkerson) алгоритмі"
      },
      {
        "id": "e44a9fbe-6def-411b-8854-54707912a612",
        "text": "Дейкстра алгоритмі"
      },
      {
        "id": "63405c3d-0413-464c-9ce9-ebe132e190e1",
        "text": "Прим алгоритмі"
      },
      {
        "id": "0c539f22-432e-4593-8b9f-9be2db541e73",
        "text": "Флойд-Уоршелл алгоритмі"
      }
    ],
    "correctOptionIds": [
      "783c89ad-f317-487a-9bf2-751e8d231d90"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "a3d46b6a-dd21-495d-a0af-019a74e6fdfa",
    "subjectId": "algo",
    "text": "Форд-Фулкерсон алгоритмін BFS арқылы оңтайландырып, O(V * E^2) уақытында кепілдік беретін нұсқасы қалай аталады?",
    "options": [
      {
        "id": "b39394db-2bd5-4b2e-a349-587be7155474",
        "text": "Эдмондс-Карп (Edmonds-Karp) алгоритмі"
      },
      {
        "id": "d8e7e015-4809-4f52-a52e-10e212a6691c",
        "text": "Диниц алгоритмі"
      },
      {
        "id": "30a0d744-aea2-4ac4-abd0-549880628a6b",
        "text": "Косараю алгоритмі"
      },
      {
        "id": "6ebdd99a-7217-4e48-bcb2-936df0eaffc1",
        "text": "Беллман-Форд алгоритмі"
      }
    ],
    "correctOptionIds": [
      "b39394db-2bd5-4b2e-a349-587be7155474"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "b9525441-a13f-449e-a83e-dd8a13b84c39",
    "subjectId": "algo",
    "text": "Максималды ағын мен минималды қима (Max-Flow Min-Cut) теоремасы нені тұжірымдайды?",
    "options": [
      {
        "id": "d63dd3a0-5acc-4570-afc8-d879cc85e52d",
        "text": "Кез келген желідегі максималды ағын шамасы оның минималды қимасының өткізгіштік қабілетіне тең болады"
      },
      {
        "id": "9ee9846a-9953-41e3-ac9e-329db821e91b",
        "text": "Максималды ағын әрқашан төбелер санына тең"
      },
      {
        "id": "8b6738f4-a260-424a-8259-1073814b5397",
        "text": "Минималды қима әрқашан нөлге тең болады"
      },
      {
        "id": "68ef3e6d-56bc-461f-9b7e-06e0f7c481e2",
        "text": "Ағындар саны қабырғалар салмағының қосындысына тең"
      }
    ],
    "correctOptionIds": [
      "d63dd3a0-5acc-4570-afc8-d879cc85e52d"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "101c719e-7a86-47e0-88b1-51dcf68c72fe",
    "subjectId": "algo",
    "text": "Графты бояу (Graph Coloring) есебіндегі \"Хроматикалық сан\" (Chromatic Number, χ(G)) дегеніміз не?",
    "options": [
      {
        "id": "4a88fdb7-3d7b-472f-8a44-15873a6f4a6b",
        "text": "Көршілес екі төбе бірдей түске боялмайтындай етіп, графты бояуға қажетті ең аз түстер саны"
      },
      {
        "id": "c88f44a3-0ce1-4bdc-bd80-ce48d9c5fe15",
        "text": "Графта қолданылған барлық қабырғалардың түсі"
      },
      {
        "id": "b508ffd3-538e-4009-b432-5b7fee5d894d",
        "text": "Төбелер мен қабырғалардың жалпы саны"
      },
      {
        "id": "035a89c0-057d-4009-a78c-d481bca47e6b",
        "text": "Графтың ең ұзын цикліндегі төбелер саны"
      }
    ],
    "correctOptionIds": [
      "4a88fdb7-3d7b-472f-8a44-15873a6f4a6b"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "a3760ed3-b194-4564-9a6f-04a2e85b2055",
    "subjectId": "algo",
    "text": "Кез келген жазық графты (Planar Graph) көршілес төбелері бірдей түске түспейтіндей етіп бояу үшін ең көп дегенде неше түс жеткілікті (Төрт түс теоремасы)?",
    "options": [
      {
        "id": "6e4c23c4-a3db-430b-84ba-3cf2a51ab2e3",
        "text": "4 түс"
      },
      {
        "id": "d373c0ef-27a7-4b36-a6a9-ea03442f5f3b",
        "text": "5 түс"
      },
      {
        "id": "90e72d53-67c2-4948-b3cf-4cc9ac038ec1",
        "text": "3 түс"
      },
      {
        "id": "e3fc314b-a667-4791-84eb-5d925717c70d",
        "text": "6 түс"
      }
    ],
    "correctOptionIds": [
      "6e4c23c4-a3db-430b-84ba-3cf2a51ab2e3"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "5f0181f8-f46b-4c6a-90cb-ec0c66597365",
    "subjectId": "algo",
    "text": "Жазық граф (Planar Graph) дегеніміз не?",
    "options": [
      {
        "id": "bafae6cf-c92e-419d-9228-4826a0bbbbc8",
        "text": "Қабырғалары өзара қиылыспайтындай етіп жазықтықта (қағаз бетінде) кескіндеуге болатын граф"
      },
      {
        "id": "c276118a-f5e6-4e2a-be2c-18ced4254493",
        "text": "Барлық қабырғалары бір сызық бойында жатқан граф"
      },
      {
        "id": "5eab38f7-99b1-4486-b5f6-d10ea77b3f7f",
        "text": "Ешқандай циклі жоқ граф"
      },
      {
        "id": "818bdeef-0b9b-4d64-a403-1aab8d97276b",
        "text": "Тек үшбұрыштардан тұратын граф"
      }
    ],
    "correctOptionIds": [
      "bafae6cf-c92e-419d-9228-4826a0bbbbc8"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "8d498925-b612-4127-a919-b2ef54067153",
    "subjectId": "algo",
    "text": "Елйердің жазық графтарға арналған формуласы қандай (V – төбелер, E – қабырғалар, F – жақтар/беттер саны)?",
    "options": [
      {
        "id": "45147a44-f52e-4829-b209-a6b7233f922c",
        "text": "V - E + F = 2"
      },
      {
        "id": "01eb520e-a46f-4489-8cb0-585bb85f9635",
        "text": "V + E - F = 2"
      },
      {
        "id": "f236ea14-46b5-43c9-a289-ac026419fd38",
        "text": "V - E - F = 0"
      },
      {
        "id": "5707f515-9521-41d2-968a-151cca32716b",
        "text": "V * E / F = 2"
      }
    ],
    "correctOptionIds": [
      "45147a44-f52e-4829-b209-a6b7233f922c"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "b710081b-81c8-42b8-a78d-a8e1377ea612",
    "subjectId": "algo",
    "text": "Графтағы ең қысқа жолды іздеудің BFS алгоритмі қай кезде ғана дұрыс жұмыс істейді?",
    "options": [
      {
        "id": "c96ca3a3-f110-45a2-a4b1-3aba138de8ce",
        "text": "Қабырғалардың салмақтары бірдей (өлшенбеген граф) болғанда"
      },
      {
        "id": "2b651bc4-e90e-4e40-9c7f-151fe0c7d08c",
        "text": "Қабырғалардың салмақтары әртүрлі оң сандар болғанда"
      },
      {
        "id": "fc330745-f037-4c36-84c6-0c4dfe5682a4",
        "text": "Графта теріс циклдер болғанда"
      },
      {
        "id": "705e4cc4-f44d-45ab-bb5e-667c1c924b65",
        "text": "Граф трк бағытталған циклсіз граф (DAG) болғанда"
      }
    ],
    "correctOptionIds": [
      "c96ca3a3-f110-45a2-a4b1-3aba138de8ce"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "09eb63d5-035d-45f1-9a33-187040b0c6c9",
    "subjectId": "algo",
    "text": "Неліктен Дейкстра алгоритмі теріс салмақты қабырғалары бар графта дұрыс жұмыс істемеуі мүмкін?",
    "options": [
      {
        "id": "e1740c57-ad03-448b-a32b-a2478cf1fdf3",
        "text": "Өйткені ол ашкөз (greedy) алгоритм және төбені бір рет белсенді деп белгілеген соң оның қысқа жолын қайта қарастырмайды"
      },
      {
        "id": "08185497-9dcd-4121-8930-5d5a609b3a46",
        "text": "Ол тек бүтін сандармен жұмыс істейтіндіктен"
      },
      {
        "id": "fa23d1ab-70c0-49a0-9aca-17da8f8107ed",
        "text": "Рекурсия тереңдігі жеткіліксіз болғандықтан"
      },
      {
        "id": "e212dfd8-4cc4-4e8e-a69e-97535b065afa",
        "text": "Ол тек циклсіз графтарға арналғандықтан"
      }
    ],
    "correctOptionIds": [
      "e1740c57-ad03-448b-a32b-a2478cf1fdf3"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "cf508863-2cb6-46d5-9fef-0cd61094a45c",
    "subjectId": "algo",
    "text": "Графтағы теріс салмақты цикл (negative cycle) деген не?",
    "options": [
      {
        "id": "8ddba686-eddb-44ba-a6d4-da159afeb22c",
        "text": "Қабырғаларының салмақтарының қосындысы 0-ден кіші болатын цикл (онда ең қысқа жол шексіз кішірейе береді)"
      },
      {
        "id": "b76c29cf-361c-4645-9d78-d6dfcbbb131b",
        "text": "Тек теріс сандардан тұратын қабырғалар жиынтығы"
      },
      {
        "id": "be0757ac-2263-446a-929b-c631ef29668a",
        "text": "Төбелерінің нөмірлері теріс болатын цикл"
      },
      {
        "id": "a18b6545-cf64-427b-ba5f-fda8921d99dd",
        "text": "Эйлер циклінің кері бағыты"
      }
    ],
    "correctOptionIds": [
      "8ddba686-eddb-44ba-a6d4-da159afeb22c"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "8adb41cf-381b-4ab5-92ac-bc31b0674eb1",
    "subjectId": "algo",
    "text": "Форд-Фулкерсон алгоритмінің ең нашар уақыт күрделілігі неге тәуелді?",
    "options": [
      {
        "id": "7de68b0f-1c29-4df5-913d-f0e7e455dabe",
        "text": "Максималды ағынның мәніне (f) - O(E * f)"
      },
      {
        "id": "28627559-d16a-424b-a56b-3ff2728301bc",
        "text": "Тек төбелер санына - O(V^3)"
      },
      {
        "id": "8e82f231-2b50-41dc-97c5-5b7d74cef740",
        "text": "Басымдылық кезегінің түріне"
      },
      {
        "id": "5c2b1ffd-7b13-4a4c-9092-4012dd4fe5b2",
        "text": "Көршілестік матрицасының өлшеміне"
      }
    ],
    "correctOptionIds": [
      "7de68b0f-1c29-4df5-913d-f0e7e455dabe"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "3e5e4a07-4a38-42ae-8d2f-7d738dfa2c56",
    "subjectId": "algo",
    "text": "Желілік ағын есебіндегі \"Қалдық граф\" (Residual Graph) не үшін қолданылады?",
    "options": [
      {
        "id": "220d37a9-e26d-4a95-b6f9-d26becab900c",
        "text": "Ағынды кері бағытта да ағызуға мүмкіндік беретін бос өткізгіштіктер мен кері қабырғаларды сақтау үшін"
      },
      {
        "id": "906ca361-dad6-4ce3-9b95-f706dd35ab70",
        "text": "Графты жадтан өшіру үшін"
      },
      {
        "id": "814603ff-baeb-4d3f-a954-19559b2bf6a7",
        "text": "Қысқа жолдарды есептеу үшін"
      },
      {
        "id": "f66d511a-896d-4d41-b8dd-b1840d567805",
        "text": "Басымдылықтарды анықтау үшін"
      }
    ],
    "correctOptionIds": [
      "220d37a9-e26d-4a95-b6f9-d26becab900c"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "759a6fcf-3221-405c-85b3-9810c2f7b8ec",
    "subjectId": "algo",
    "text": "Dijkstra алгоритмін adjacency list және binary heap (екілік үйінді) арқылы жүзеге асырғандағы уақыт күрделілігі қандай?",
    "options": [
      {
        "id": "b8ccf31b-9a8f-4a04-a932-1dc3ebe39690",
        "text": "O((V + E) log V)"
      },
      {
        "id": "e740147d-9d53-4438-9b9d-4a7f08a73c3a",
        "text": "O(V^2)"
      },
      {
        "id": "d2b95528-6b31-48e6-a156-228444a6aa30",
        "text": "O(V * E)"
      },
      {
        "id": "42e4337b-e7b9-46ba-94a8-2081ca07b2c5",
        "text": "O(V^3)"
      }
    ],
    "correctOptionIds": [
      "b8ccf31b-9a8f-4a04-a932-1dc3ebe39690"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "6479348f-ca4c-433c-92b5-4f8d516a9040",
    "subjectId": "algo",
    "text": "Floyd-Warshall алгоритмінің кеңістік күрделілігі (Space Complexity) қандай?",
    "options": [
      {
        "id": "080ad0eb-54a3-45db-a3cd-69cd2a050678",
        "text": "O(V^2) (арақашықтықтар матрицасын сақтау үшін)"
      },
      {
        "id": "9dc581c7-b2a4-431f-8dc7-d96625674e1d",
        "text": "O(V + E)"
      },
      {
        "id": "e7e8d64d-bc36-457c-80f2-e1f5e6e9e719",
        "text": "O(1)"
      },
      {
        "id": "200e45ac-e749-4cd3-be08-29f1315f3a5f",
        "text": "O(V^3)"
      }
    ],
    "correctOptionIds": [
      "080ad0eb-54a3-45db-a3cd-69cd2a050678"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "9289d256-bccd-4913-b12b-4daee6b4c17f",
    "subjectId": "algo",
    "text": "Беллман-Форд алгоритмінің уақыт күрделілігі қандай?",
    "options": [
      {
        "id": "f68c6455-3971-4986-938d-1ba959fb6174",
        "text": "O(V * E)"
      },
      {
        "id": "aa3fce0e-4b42-4644-9260-09439c3b67a0",
        "text": "O(V^2)"
      },
      {
        "id": "965f0356-beba-4cc3-9c58-cb232a03be0a",
        "text": "O((V + E) log V)"
      },
      {
        "id": "4920342b-7e64-4c5c-8afd-baa1132a8279",
        "text": "O(V^3)"
      }
    ],
    "correctOptionIds": [
      "f68c6455-3971-4986-938d-1ba959fb6174"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "2e72cc67-3a09-4089-8526-e980050eeeae",
    "subjectId": "algo",
    "text": "Bellman-Ford алгоритмі графта теріс циклдің бар-жоғын қалай анықтайды?",
    "options": [
      {
        "id": "e48d6676-2fde-44a3-adf9-d534a61e8627",
        "text": "Барлық қабырғаларды V-1 рет релаксациялағаннан кейін тағы 1 рет релаксация жасағанда арақашықтықтар тағы да қысқарса"
      },
      {
        "id": "4afc9835-b912-496a-ac1d-936db0abf0fa",
        "text": "Төбелердің дәрежелерін тексеру арқылы"
      },
      {
        "id": "fb2468ab-c220-4afd-bff4-5cb32ad3d918",
        "text": "DFS арқылы кері қабырғаларды іздеп"
      },
      {
        "id": "57564fda-3088-47b6-99fa-d2279723e373",
        "text": "Бағдарлама қате шығарып тоқтаса"
      }
    ],
    "correctOptionIds": [
      "e48d6676-2fde-44a3-adf9-d534a61e8627"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "090c4ad6-5ddf-4952-aa4c-972ff01fec13",
    "subjectId": "algo",
    "text": "Арақашықтықты қысқартуға бағытталған `if (dist[u] + weight(u,v) < dist[v]) dist[v] = dist[u] + weight(u,v)` операциясы қалай аталады?",
    "options": [
      {
        "id": "68e6d95f-3a0b-48fb-bab1-9534b4b2921b",
        "text": "Релаксация (Relaxation)"
      },
      {
        "id": "1774b09f-eeb2-4527-a7e5-da84f7c38f99",
        "text": "Түзету (Correction)"
      },
      {
        "id": "a4e760cb-0269-4617-97e0-7648e3a90467",
        "text": "Ығыстыру (Shifting)"
      },
      {
        "id": "9845b6fc-74c0-4acd-8b26-fb7cc63aa24a",
        "text": "Бояу (Coloring)"
      }
    ],
    "correctOptionIds": [
      "68e6d95f-3a0b-48fb-bab1-9534b4b2921b"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "8739f684-7de7-4594-9b64-df04fa6b43f6",
    "subjectId": "algo",
    "text": "Ендік бойынша іздеу (BFS) алгоритмінде төбелерді қайта өңдемеу үшін қандай массив қолданылады?",
    "options": [
      {
        "id": "52711d42-a02a-4930-9c29-97e2393a505e",
        "text": "Төбелердің барып-қайтқанын белгілейтін логикалық массив (visited / boolean array)"
      },
      {
        "id": "f265f761-5448-4de2-a87e-e07cc445e6b2",
        "text": "Басымдылық кестесі"
      },
      {
        "id": "7ba2e7de-1fa8-4a62-affc-3b0121bb12ef",
        "text": "Салмақтар матрицасы"
      },
      {
        "id": "14a7e0eb-6553-4410-8ef7-5007776731f7",
        "text": "Рекурсия стегі"
      }
    ],
    "correctOptionIds": [
      "52711d42-a02a-4930-9c29-97e2393a505e"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "19958fea-a307-4fdd-8f51-8c99cf2e00f8",
    "subjectId": "algo",
    "text": "Бағытталған графтың топологиялық сұрыпталуы (Topological Sort) дегеніміз не?",
    "options": [
      {
        "id": "d1c5dd56-0666-44af-ac9d-f38095c5d909",
        "text": "Барлық бағытталған қабырғалар (u, v) үшін u төбесі v төбесінің алдында келетіндей етіп төбелерді сызықтық ретке тізу"
      },
      {
        "id": "d04f68d0-b03f-420c-9274-f71318b39dee",
        "text": "Төбелерді олардың дәрежесі бойынша өсу ретімен сұрыптау"
      },
      {
        "id": "b554c5d0-2b9e-4adb-b65f-2dcb405aedbd",
        "text": "Қабырғаларды салмақтары бойынша сұрыптау"
      },
      {
        "id": "f81b7a3d-6c52-49a1-bed3-35cdd3186a7a",
        "text": "Төбелерді кездейсоқ ретпен орналастыру"
      }
    ],
    "correctOptionIds": [
      "d1c5dd56-0666-44af-ac9d-f38095c5d909"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "44952f20-49c4-42bf-a6e7-fad5bb47fa9c",
    "subjectId": "algo",
    "text": "Topological Sort-ты жүзеге асырудың Kahn алгоритмі неге негізделген?",
    "options": [
      {
        "id": "1674d4d7-9007-433e-9a55-e6beb3d2a522",
        "text": "Кіріс дәрежесі (in-degree) 0-ге тең төбелерді кезекпен өшіріп отыруға"
      },
      {
        "id": "9b1c26e7-a112-4999-a277-44110142aaf6",
        "text": "DFS рекурсия стегінің соңына қосып отыруға"
      },
      {
        "id": "5eea5145-dfd6-4382-8648-0a60d10b3504",
        "text": "Басымдылық кезегін қолдануға"
      },
      {
        "id": "f2b6e89f-0f80-4b07-bda9-e0f0913b2f63",
        "text": "Қабырға салмақтарын салыстыруға"
      }
    ],
    "correctOptionIds": [
      "1674d4d7-9007-433e-9a55-e6beb3d2a522"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "e6196d7b-7219-4704-9aa3-7e3ebd8c09d9",
    "subjectId": "algo",
    "text": "Тереңдік бойынша іздеуде (DFS) бағытталған графта циклдің (loop) бар-жоғын қалай анықтайды?",
    "options": [
      {
        "id": "8ae094c9-f077-43b1-9fcc-eca0055e7388",
        "text": "Ағымдағы рекурсия стегінде тұрған (сұр түсті) ата-баба түйінге кері сілтеме (back edge) кездессе"
      },
      {
        "id": "8b978dc2-a2e0-43b9-82c2-941e6de27615",
        "text": "Көршілестік матрицасы симметриялы болса"
      },
      {
        "id": "256c1e48-313c-41bb-97f7-2e4f42f2e1d9",
        "text": "Барлық төбелердің кіріс дәрежесі 1-ден көп болса"
      },
      {
        "id": "00ab0912-09dd-4313-9e64-05c42d363fe9",
        "text": "DFS орындалуы шексіз циклге кетсе"
      }
    ],
    "correctOptionIds": [
      "8ae094c9-f077-43b1-9fcc-eca0055e7388"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "8d755504-3657-4ec4-b86d-015b361668ce",
    "subjectId": "algo",
    "text": "Егер графтағы кез келген төбеден басқа кез келген төбеге баратын жол бар болса, ондай бағытталмаған граф қалай аталады?",
    "options": [
      {
        "id": "a226a3ca-2f7d-4102-9e91-1efaeceec7c2",
        "text": "Байланысқан граф (Connected Graph)"
      },
      {
        "id": "d1747405-77a7-4a2d-a93e-d0ebdedd72dc",
        "text": "Толық граф (Complete Graph)"
      },
      {
        "id": "99f94a74-dd08-4f04-b74e-121b79bf175e",
        "text": "Екі үлесті граф"
      },
      {
        "id": "2af7de74-3103-48d8-9403-5e8abde8b9de",
        "text": "Тармақталған граф"
      }
    ],
    "correctOptionIds": [
      "a226a3ca-2f7d-4102-9e91-1efaeceec7c2"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "f371af02-95cf-4586-95b4-e2c37e89bf19",
    "subjectId": "algo",
    "text": "Графтағы «Төбенің дәрежесі» (Degree of a vertex, deg(v)) дегеніміз не?",
    "options": [
      {
        "id": "44052bff-1b68-472b-b65b-92ab7bf3ae57",
        "text": "Сол төбеге қосылған қабырғалардың жалпы саны"
      },
      {
        "id": "2ed7f192-a4e9-43fd-b45e-3b521a68e99b",
        "text": "Сол төбеге дейінгі ең қысқа жолдың ұзындығы"
      },
      {
        "id": "6598662e-4d01-42a9-bd6e-341a13a2e67a",
        "text": "Сол төбенің көршілестік матрицасындағы индексі"
      },
      {
        "id": "66d8cf40-abf4-4386-8ed7-91bf570af524",
        "text": "Төбенің координаталық мәні"
      }
    ],
    "correctOptionIds": [
      "44052bff-1b68-472b-b65b-92ab7bf3ae57"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "eacabbfe-0857-4910-9c61-a54ac5167539",
    "subjectId": "algo",
    "text": "Бағытталған графта төбеге кіретін қабырғалар саны қалай аталады?",
    "options": [
      {
        "id": "1a35c9ca-e5b8-45f6-8424-2077422b2fc7",
        "text": "Кіріс дәрежесі (In-degree)"
      },
      {
        "id": "8d07525a-7f3d-4767-8435-0d7ad60e1a5f",
        "text": "Шығыс дәрежесі (Out-degree)"
      },
      {
        "id": "01b7fec5-823a-4c46-bd65-74fdcac57736",
        "text": "Сорғыш дәрежесі"
      },
      {
        "id": "34876e3c-59e9-41fa-a974-2eb1428b6230",
        "text": "Ішкі қабырға дәрежесі"
      }
    ],
    "correctOptionIds": [
      "1a35c9ca-e5b8-45f6-8424-2077422b2fc7"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "27ddcefd-afbc-4d51-92a3-562c38033d5d",
    "subjectId": "algo",
    "text": "Бағытталған графта төбеден шығатын қабырғалар саны қалай аталады?",
    "options": [
      {
        "id": "539f8498-e015-481e-9dec-e9c4b881cd1e",
        "text": "Шығыс дәрежесі (Out-degree)"
      },
      {
        "id": "395ffb69-cf12-4cdc-9fa1-b0837d798ce4",
        "text": "Кіріс дәрежесі (In-degree)"
      },
      {
        "id": "ee129475-44dc-4d6f-a7db-90098a74ca9c",
        "text": "Сыртқы дәреже дәрежесі"
      },
      {
        "id": "95a98a33-ae63-4115-93ef-7f2223db6897",
        "text": "Көршілестік дәрежесі"
      }
    ],
    "correctOptionIds": [
      "539f8498-e015-481e-9dec-e9c4b881cd1e"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "2e14fac4-120a-4705-a414-e85d1915dfcd",
    "subjectId": "algo",
    "text": "Көршілестік матрицасында (Adjacency Matrix) графта (u, v) қабырғасының бар екені қалай көрсетіледі?",
    "options": [
      {
        "id": "840d40df-bf70-42ac-b218-8ac55915d1c4",
        "text": "Matrix[u][v] ұяшығының мәні 1-ге (немесе қабырға салмағына) тең болады"
      },
      {
        "id": "fa0ad541-ac32-4b72-852e-8e5d42b5fe1b",
        "text": "Matrix[u] массивіне v мәні қосылады"
      },
      {
        "id": "495209bf-dffc-4e0c-bce8-6ef991bcbbe1",
        "text": "Matrix[u][v] ұяшығы 0-ге тең болады"
      },
      {
        "id": "bbffe20b-4280-4a38-901d-2687a8915c04",
        "text": "Сілтемелер арқылы байланыстырылады"
      }
    ],
    "correctOptionIds": [
      "840d40df-bf70-42ac-b218-8ac55915d1c4"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "52cc1ac7-c3de-4886-9ed9-bfb9f741a579",
    "subjectId": "algo",
    "text": "Көршілестік тізімінде (Adjacency List) әрбір төбе үшін көршілес төбелер қай деректер құрылымында сақталады?",
    "options": [
      {
        "id": "abf143c8-de9a-4a9d-bc91-a4d8c65f8160",
        "text": "Байланысқан тізімде (Linked List) немесе динамикалық массивте (vector)"
      },
      {
        "id": "4676a13d-5334-4637-8ca0-18f9a82501e1",
        "text": "Стекте"
      },
      {
        "id": "bbe89be6-04b7-41f8-9dc3-d1409310970f",
        "text": "Хэш-кестеде"
      },
      {
        "id": "d97f6dfd-a314-4af1-aaa9-a08005099d33",
        "text": "Сегменттер ағашында"
      }
    ],
    "correctOptionIds": [
      "abf143c8-de9a-4a9d-bc91-a4d8c65f8160"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "6cd80421-80cf-4d77-a958-3d1e00ba793e",
    "subjectId": "algo",
    "text": "Графта \"Төбе\" термині халықаралық әдебиетте қалай аталады?",
    "options": [
      {
        "id": "6e57fe6b-47b2-4fc3-bb9b-b82f2d937325",
        "text": "Vertex (немесе Node)"
      },
      {
        "id": "0a126eb8-d09b-4c7b-84d4-51fa4c7e16fc",
        "text": "Edge"
      },
      {
        "id": "a18abf66-1373-4de0-a67e-5d8614cb61be",
        "text": "Path"
      },
      {
        "id": "64663772-960d-4ec9-b53c-546d5c04922f",
        "text": "Link"
      }
    ],
    "correctOptionIds": [
      "6e57fe6b-47b2-4fc3-bb9b-b82f2d937325"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "e8541b8f-ff90-45e0-9502-73cd62238ff7",
    "subjectId": "algo",
    "text": "Графта \"Қабырға\" (байланыстыратын сызық) термині халықаралық әдебиетте қалай аталады?",
    "options": [
      {
        "id": "5576e3ed-183d-4576-89d6-def90c3a8770",
        "text": "Edge (немесе Arc)"
      },
      {
        "id": "5389dfb1-1ec3-4c5a-9e0e-c692642f35ce",
        "text": "Vertex"
      },
      {
        "id": "aa32495c-6783-4058-a053-6f2a0d5873b9",
        "text": "Node"
      },
      {
        "id": "8b00d44c-a642-4da7-912d-eeac69e8452a",
        "text": "Loop"
      }
    ],
    "correctOptionIds": [
      "5576e3ed-183d-4576-89d6-def90c3a8770"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "490a4def-0a1a-4f6f-9e8c-7d571c503c31",
    "subjectId": "algo",
    "text": "Графтың екі төбесін бір-бірімен тікелей байланыстыратын қабырға болса, бұл төбелер өзара қалай аталады?",
    "options": [
      {
        "id": "0efb3a1c-dd1d-410c-b5da-7a1f2b237d13",
        "text": "Көршілес төбелер (Adjacent vertices)"
      },
      {
        "id": "762a075f-7a60-4128-b98d-ee4a1d90c321",
        "text": "Қиылысқан төбелер"
      },
      {
        "id": "5137486a-665d-4e0d-b0b7-5c3384a5f971",
        "text": "Бағытталған төбелер"
      },
      {
        "id": "a1706bb3-dd5a-4d3f-96b6-43ae9e57ffcb",
        "text": "Тәуелсіз төбелер"
      }
    ],
    "correctOptionIds": [
      "0efb3a1c-dd1d-410c-b5da-7a1f2b237d13"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "9978eb8c-3e97-4438-9b6a-b21da19d4ca0",
    "subjectId": "algo",
    "text": "Қабырғаның басы мен соңы бір ғана төбеде болса, бұл қалай аталады?",
    "options": [
      {
        "id": "edceb3c1-bf3b-4c33-86f5-05be51077d05",
        "text": "Тұзақ / Тұйықталу (Loop / Self-loop)"
      },
      {
        "id": "c4e1fd62-8efb-4281-92c7-f4d540b3ad71",
        "text": "Көпір"
      },
      {
        "id": "2a8d47a7-60aa-454e-ab16-246aca578a4a",
        "text": "Сорғыш"
      },
      {
        "id": "3b8ee98c-18fe-4740-aae0-31a2820449b6",
        "text": "Бағыттауыш"
      }
    ],
    "correctOptionIds": [
      "edceb3c1-bf3b-4c33-86f5-05be51077d05"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "7e0e32e5-3596-4cb6-9eb4-9e9603221847",
    "subjectId": "algo",
    "text": "Ешқандай циклі жоқ бағытталмаған байланысқан граф қалай аталады?",
    "options": [
      {
        "id": "62935a3d-c749-4341-b841-e3e307256534",
        "text": "Ағаш (Tree)"
      },
      {
        "id": "854c7c8f-6147-4f02-aba0-57ce0914b651",
        "text": "Тор (Grid)"
      },
      {
        "id": "db158989-b2d3-48b9-8da8-2983593de616",
        "text": "DAG"
      },
      {
        "id": "898cc506-39ab-48e4-8050-e0f4ce1c733e",
        "text": "Толық граф"
      }
    ],
    "correctOptionIds": [
      "62935a3d-c749-4341-b841-e3e307256534"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "cc8e753c-cd83-45bc-99c5-0e04bed1a985",
    "subjectId": "algo",
    "text": "Байланысқан графтағы минималды қаңқа ағаштың (MST) қабырғалар саны нешеге тең болады (V – төбелер саны)?",
    "options": [
      {
        "id": "05f5707f-e19e-4a41-b212-3fe480a73233",
        "text": "V - 1"
      },
      {
        "id": "b243e8fa-fc18-4c49-a6b4-35d6e318e68c",
        "text": "V"
      },
      {
        "id": "fbec866a-c940-498a-b892-643dbea699f2",
        "text": "V + 1"
      },
      {
        "id": "0301759b-95ed-471a-8162-84b0a0fe18b0",
        "text": "2 * V"
      }
    ],
    "correctOptionIds": [
      "05f5707f-e19e-4a41-b212-3fe480a73233"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "d5cf0494-6b33-4ffa-9ba4-abc899196f8d",
    "subjectId": "algo",
    "text": "Dijkstra алгоритмінде жаңа төбелерді таңдау үшін қандай стратегия қолданылады?",
    "options": [
      {
        "id": "d4a6be57-e62d-4147-bb93-e64c2512b00c",
        "text": "Ашкөздік стратегия (Greedy: әр қадамда арақашықтығы ең кіші белгіленбеген төбені таңдайды)"
      },
      {
        "id": "ac0bdbcc-e2f5-47d2-962a-65aea61758a0",
        "text": "Динамикалық бағдарламалау"
      },
      {
        "id": "0f18a496-f12d-4274-936e-b44297af1f77",
        "text": "Кездейсоқ таңдау"
      },
      {
        "id": "1e1067f0-6777-48a3-8c05-6fc7f64873fd",
        "text": "Брутфорс (толық іздеу)"
      }
    ],
    "correctOptionIds": [
      "d4a6be57-e62d-4147-bb93-e64c2512b00c"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "6b4a6167-6cf7-4bca-854d-c94a14f0aa65",
    "subjectId": "algo",
    "text": "Floyd-Warshall алгоритмі қандай әдістемеге (paradigm) негізделген?",
    "options": [
      {
        "id": "cfc88236-d98d-4202-bff4-e2372de97087",
        "text": "Динамикалық бағдарламалау (Dynamic Programming)"
      },
      {
        "id": "644af8a0-a14b-447c-82b9-8bc36336e04c",
        "text": "Ашкөздік әдіс (Greedy)"
      },
      {
        "id": "c2957793-756a-492f-ab09-f2bf4da2a9f7",
        "text": "Бөліп ал да, билей бер (Divide and Conquer)"
      },
      {
        "id": "66413597-3b59-4b0c-9b46-fc2575734655",
        "text": "Кездейсоқ алгоритмдер"
      }
    ],
    "correctOptionIds": [
      "cfc88236-d98d-4202-bff4-e2372de97087"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "7f3a26cd-6150-4d24-82cc-a5864b532398",
    "subjectId": "algo",
    "text": "Prim алгоритмі MST-ді қалай құра бастайды?",
    "options": [
      {
        "id": "fe162f87-dd5a-40f9-8f14-8e248702322e",
        "text": "Кез келген бір төбемен бастап, оған көршілес ең кіші салмақты қабырғаларды біртіндеп қосады"
      },
      {
        "id": "bb01bd8d-f353-48f5-bb80-308646fccf72",
        "text": "Барлық қабырғаларды бірден сұрыптайды"
      },
      {
        "id": "f3d7e9d2-7332-40de-a973-72d23944ca36",
        "text": "Ең үлкен қабырғаларды өшіреді"
      },
      {
        "id": "0dfc2bbf-0aa1-47e6-9180-e8282cc27f8b",
        "text": "Графты екіге бөледі"
      }
    ],
    "correctOptionIds": [
      "fe162f87-dd5a-40f9-8f14-8e248702322e"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "36aa3d8d-fd7a-4a14-a754-295af9244d9e",
    "subjectId": "algo",
    "text": "Kruskal алгоритмінде қабырғалар қалай өңделеді?",
    "options": [
      {
        "id": "bb3f7ec9-8a4d-4f58-ab02-bc71f9a2667b",
        "text": "Барлық қабырғаларды алдымен салмақтары бойынша өсу ретімен сұрыптап, содан кейін цикл тудырмайтындарын кезекпен қосады"
      },
      {
        "id": "6ed7f3e4-9b4b-48f9-a9c6-bf3125210552",
        "text": "Қабырғаларды кездейсоқ таңдайды"
      },
      {
        "id": "19d647b0-9a0b-43b3-9097-42ec93c95fd1",
        "text": "Тек бағытталған қабырғаларды ғана алады"
      },
      {
        "id": "9ba45ce8-db8f-452a-93c4-a09b4f9b16c2",
        "text": "Төбелердің нөмірлері бойынша алады"
      }
    ],
    "correctOptionIds": [
      "bb3f7ec9-8a4d-4f58-ab02-bc71f9a2667b"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "c7398088-826c-4c18-801d-f939c90e3d8c",
    "subjectId": "algo",
    "text": "Графта екі төбенің арасында бірнеше қабырға болса, олар қалай аталады?",
    "options": [
      {
        "id": "8cf09392-34ca-4027-9cfd-a876d689b5fc",
        "text": "Еселі / Параллель қабырғалар (Multiple / Parallel edges)"
      },
      {
        "id": "c1d768d7-0aa3-4c7f-82d7-2571098d3b8f",
        "text": "Көршілес қабырғалар"
      },
      {
        "id": "2db1385f-916e-46d9-9fa0-4567df193711",
        "text": "Салмақты қабырғалар"
      },
      {
        "id": "307676c8-a1b9-48d6-a678-646a930f1554",
        "text": "Бағытталған қабырғалар"
      }
    ],
    "correctOptionIds": [
      "8cf09392-34ca-4027-9cfd-a876d689b5fc"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "4d5a99a5-af38-4f87-b9c4-9674aed03a7f",
    "subjectId": "algo",
    "text": "Еселі қабырғалары да, тұзақтары да (loops) жоқ граф қалай аталады?",
    "options": [
      {
        "id": "56d183bf-5db8-4266-bc31-61b0a0d73785",
        "text": "Қарапайым граф (Simple Graph)"
      },
      {
        "id": "e50d9a71-5bad-4084-aca2-aabc952967bb",
        "text": "Мультиграф"
      },
      {
        "id": "edea27d1-467a-4c90-a1f2-a792faff947d",
        "text": "Псевдограф"
      },
      {
        "id": "066ce426-b581-472d-9751-800ac729ad0f",
        "text": "Гиперграф"
      }
    ],
    "correctOptionIds": [
      "56d183bf-5db8-4266-bc31-61b0a0d73785"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "e1c5fa04-587b-4a8a-bfca-f4456503629d",
    "subjectId": "algo",
    "text": "Параллель қабырғалары бар, бірақ тұзақтары болуы міндетті емес граф қалай аталады?",
    "options": [
      {
        "id": "7e6b790d-7987-4731-b667-8c61cd4bbf45",
        "text": "Мультиграф (Multigraph)"
      },
      {
        "id": "ecbca93b-8e2b-4651-aaca-fd61dc999a41",
        "text": "Қарапайым граф"
      },
      {
        "id": "add913bd-4c7f-45e2-80c5-c99f845756a6",
        "text": "Ағаш"
      },
      {
        "id": "7946c74a-52bb-42f2-9a14-1494e6155530",
        "text": "Циклдік граф"
      }
    ],
    "correctOptionIds": [
      "7e6b790d-7987-4731-b667-8c61cd4bbf45"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "c4697b92-3df8-436c-b5f9-4c63e4f73d1e",
    "subjectId": "algo",
    "text": "Төбелер саны V-ге тең қарапайым графта төбенің максималды дәрежесі (degree) қанша болуы мүмкін?",
    "options": [
      {
        "id": "e7170855-dafe-4e59-9157-1d694f00abda",
        "text": "V - 1"
      },
      {
        "id": "ef2a7404-9e79-4d53-8748-c5ac1758f7c3",
        "text": "V"
      },
      {
        "id": "668412e8-15c5-4ff0-95c6-36e198983113",
        "text": "V / 2"
      },
      {
        "id": "6e26b602-736d-4bea-8bb5-7685381a2a8d",
        "text": "Шексіз"
      }
    ],
    "correctOptionIds": [
      "e7170855-dafe-4e59-9157-1d694f00abda"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "0cc967cb-22d2-4ae2-a2a6-3f5177368099",
    "subjectId": "algo",
    "text": "Төбе дәрежесі 0-ге тең болса, ол төбе қалай аталады?",
    "options": [
      {
        "id": "7003078f-fde5-4508-abf3-abd4d2199efd",
        "text": "Оқшауланған төбе (Isolated vertex)"
      },
      {
        "id": "3f7d2b0c-3bd2-4fd2-8517-a4d8f24dcbd5",
        "text": "Аспалы төбе"
      },
      {
        "id": "1fb60304-4e97-490f-9403-9be8c49ad249",
        "text": "Бастапқы төбе"
      },
      {
        "id": "ac39cbb4-4d56-44fe-b58f-6f824b10e37e",
        "text": "Сорғыш төбе"
      }
    ],
    "correctOptionIds": [
      "7003078f-fde5-4508-abf3-abd4d2199efd"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "d4ed4568-5c0c-46ad-a3e1-04b14ca29c48",
    "subjectId": "algo",
    "text": "Төбе дәрежесі 1-ге тең болса, ол төбе қалай аталады?",
    "options": [
      {
        "id": "7e40fa45-d8ff-477d-9b34-7039b906a6ca",
        "text": "Аспалы / Жапырақ төбе (Pendant / Leaf vertex)"
      },
      {
        "id": "6994e577-b5fc-4e25-99fb-1b9427568fe7",
        "text": "Оқшауланған төбе"
      },
      {
        "id": "02918d96-41b5-4b63-87a0-6a43e2e4537b",
        "text": "Көпірлік төбе"
      },
      {
        "id": "47971e71-17d4-4b36-9f7b-e9c097b41013",
        "text": "Ішкі төбе"
      }
    ],
    "correctOptionIds": [
      "7e40fa45-d8ff-477d-9b34-7039b906a6ca"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "bb628a62-f16c-4df3-8e4e-0c1df4d6a82d",
    "subjectId": "algo",
    "text": "Графтың тығыздығы (Density) нені сипаттайды?",
    "options": [
      {
        "id": "8857c30b-53d9-4e66-9b0b-b043b5fc9385",
        "text": "Графтағы қабырғалар санының мүмкін болатын максималды қабырғалар санына қатынасын"
      },
      {
        "id": "6ec3fc29-5570-443a-a146-fb64f91f6543",
        "text": "Төбелер салмағының қосындысын"
      },
      {
        "id": "a14145b9-eae5-43f9-b3b4-75566fedb39b",
        "text": "Графтағы циклдер жиілігін"
      },
      {
        "id": "aab9d27c-d1bd-4f82-8c1c-24597efef207",
        "text": "Көршілестік матрицасының өлшемін"
      }
    ],
    "correctOptionIds": [
      "8857c30b-53d9-4e66-9b0b-b043b5fc9385"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "bad0f16f-f4d3-4a17-926c-27ad51746de5",
    "subjectId": "algo",
    "text": "Егер графта қабырғалар саны (E) төбелер санына (V) шамалас немесе аз болса, ол қандай граф деп аталады?",
    "options": [
      {
        "id": "008aeff4-7970-4850-b27e-ff757184aff9",
        "text": "Сирек граф (Sparse Graph)"
      },
      {
        "id": "f094d53c-5486-40e6-b123-8dfa35122757",
        "text": "Тығыз граф (Dense Graph)"
      },
      {
        "id": "17c20d8b-672b-43c3-b9eb-8ea7960fe43b",
        "text": "Толық граф"
      },
      {
        "id": "42c0c355-d9b8-43d6-a917-695f426c1810",
        "text": "Көп өлшемді граф"
      }
    ],
    "correctOptionIds": [
      "008aeff4-7970-4850-b27e-ff757184aff9"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "95b3e823-4b58-4150-b509-96e7cededcd2",
    "subjectId": "algo",
    "text": "Егер графта қабырғалар саны (E) мүмкін болатын максималды мәнге (V^2-қа) жуық болса, ол қандай граф деп аталады?",
    "options": [
      {
        "id": "8c8720da-1c59-4d67-aff2-9ea96168f395",
        "text": "Тығыз граф (Dense Graph)"
      },
      {
        "id": "fe70359f-d194-456a-b50e-2fd913f83a2f",
        "text": "Сирек граф (Sparse Graph)"
      },
      {
        "id": "68957f51-61a0-4b44-968d-e7bfe19cd13a",
        "text": "Екі үлесті граф"
      },
      {
        "id": "ac0bda6b-e890-4761-af25-e81223fbec22",
        "text": "Циклсіз граф"
      }
    ],
    "correctOptionIds": [
      "8c8720da-1c59-4d67-aff2-9ea96168f395"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "4afb86bf-aa9e-4b76-8cf3-e351690e6ba3",
    "subjectId": "algo",
    "text": "Тығыз графтарда (Dense Graphs) MST құру үшін Крускал мен Прим алгоритмдерінің қайсысы тиімдірек?",
    "options": [
      {
        "id": "4f285641-ced3-4d92-80a8-4ac9f876a663",
        "text": "Прим алгоритмі (Prim's Algorithm) - әсіресе көршілестік матрицасымен орындалса O(V^2)"
      },
      {
        "id": "d382166f-65d5-40c6-aedb-bf98f8941048",
        "text": "Kruskal алгоритмі"
      },
      {
        "id": "a02240ce-2250-4dd2-9a0a-c8fdd089f0c2",
        "text": "Екеуінің де тиімділігі бірдей"
      },
      {
        "id": "8ac75589-2b29-4437-8571-aa9799675c2e",
        "text": "Екеуі де тиімсіз, Bellman-Ford тиімді"
      }
    ],
    "correctOptionIds": [
      "4f285641-ced3-4d92-80a8-4ac9f876a663"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "1da94570-c0e1-4c7d-9ee9-a9d54442ddf1",
    "subjectId": "algo",
    "text": "Dijkstra алгоритмінің ең қарапайым (басымдылық кезегінсіз, сызықтық іздеумен) уақыт күрделілігі қандай?",
    "options": [
      {
        "id": "8d7b4ac5-27b8-4391-9c94-e2b7874fb4ba",
        "text": "O(V^2)"
      },
      {
        "id": "d124a099-b9bc-4e05-acd9-7a438ff7d3ee",
        "text": "O(V log V)"
      },
      {
        "id": "f947d1e4-f6a1-433b-baab-b3d3483f6eb5",
        "text": "O(E log V)"
      },
      {
        "id": "7d4f5cc7-1c50-463c-b434-81f83fd0e87a",
        "text": "O(V * E)"
      }
    ],
    "correctOptionIds": [
      "8d7b4ac5-27b8-4391-9c94-e2b7874fb4ba"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "391c3d27-757a-4eaf-8cbf-b5c8874988b8",
    "subjectId": "algo",
    "text": "A* (A-Star) іздеу алгоритмі Дейкстра алгоритмінен немен ерекшеленеді?",
    "options": [
      {
        "id": "50d5fc4c-8a16-4fd5-bbeb-b68dce4e2997",
        "text": "Ол іздеуді бағыттау үшін Эвристикалық функцияны (Heuristic function) қолданады"
      },
      {
        "id": "818cfbfc-36ab-4878-8890-16982054e41c",
        "text": "Ол тек бағытталмаған графтарда жұмыс істейді"
      },
      {
        "id": "b29f3fa1-6f92-4100-8e55-13aca4fc42d9",
        "text": "Ол теріс қабырғаларды өңдей алады"
      },
      {
        "id": "37c4c7f9-5095-4f02-aa83-01a960ccce82",
        "text": "Ол тек циклдік графтарға арналған"
      }
    ],
    "correctOptionIds": [
      "50d5fc4c-8a16-4fd5-bbeb-b68dce4e2997"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "9b59955c-89e8-43f8-b7c0-0263d21e2b79",
    "subjectId": "algo",
    "text": "А әдісінде (A* algorithm) бағалау функциясы f(n) қалай есептеледі (g(n) - басынан қашықтық, h(n) - мақсатқа дейінгі эвристикалық баға)?",
    "options": [
      {
        "id": "64b174cc-bf63-465e-a098-60e2f4d52bd1",
        "text": "f(n) = g(n) + h(n)"
      },
      {
        "id": "1df1c734-007a-4379-8678-3f1c098d774e",
        "text": "f(n) = g(n) - h(n)"
      },
      {
        "id": "6d5c9511-0569-4b14-b749-355f73735f6b",
        "text": "f(n) = g(n) * h(n)"
      },
      {
        "id": "b89da65d-6295-4991-bb52-18a4aa31a58e",
        "text": "f(n) = max(g(n), h(n))"
      }
    ],
    "correctOptionIds": [
      "64b174cc-bf63-465e-a098-60e2f4d52bd1"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "fa686d6a-f9c3-483f-a7dc-209e5b68c653",
    "subjectId": "algo",
    "text": "А* алгоритміндегі эвристиканың \"Жол бергіштігі\" (Admissibility) нені білдіреді?",
    "options": [
      {
        "id": "c91753e8-3a9f-4815-bbfd-92c00ee74e37",
        "text": "Эвристикалық баға ешқашан нақты ең қысқа жолдан асып кетпеуі тиіс (h(n) <= h*(n))"
      },
      {
        "id": "cc8271ef-7a5a-41c1-97ac-166055e29284",
        "text": "Эвристика әрқашан 0-ден үлкен болуын"
      },
      {
        "id": "241ff4a8-250e-4661-9746-0f30c396a3ec",
        "text": "Эвристиканың тек бүтін сан болуын"
      },
      {
        "id": "2cb3553f-599c-4641-819a-882fe4f31ff3",
        "text": "Іздеу жолының үзілмейтіндігін"
      }
    ],
    "correctOptionIds": [
      "c91753e8-3a9f-4815-bbfd-92c00ee74e37"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "f9a8cdf4-3e50-4b9f-a77e-93cd8bee5cc6",
    "subjectId": "algo",
    "text": "Косараю алгоритмінде графтың қабырғаларын кері бұрғанда (transpose) күшті байланысқан компоненттердің құрамы өзгере ме?",
    "options": [
      {
        "id": "8eb7a964-b4a3-466f-b0cd-5f1fbd04345e",
        "text": "Жоғары, күшті байланысқан компоненттер өзгеріссіз қалады"
      },
      {
        "id": "d34fccca-305a-49dd-8c9f-01f3ecf98e3b",
        "text": "Иә, толығымен өзгереді"
      },
      {
        "id": "89416c73-ab29-41bc-90f0-461dbaee3c83",
        "text": "Тек кейбір төбелер өшіріледі"
      },
      {
        "id": "1601d4b1-8c92-4885-8662-af86b951d2b4",
        "text": "Тек циклдер саны азаяды"
      }
    ],
    "correctOptionIds": [
      "8eb7a964-b4a3-466f-b0cd-5f1fbd04345e"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "9c9c521e-7602-411f-be40-cec77d3b0e1b",
    "subjectId": "algo",
    "text": "Эйлер циклі (Eulerian Circuit) бар граф қалай аталады?",
    "options": [
      {
        "id": "636d6295-f245-4e67-bc6f-96916411f956",
        "text": "Эйлер графы (Eulerian Graph)"
      },
      {
        "id": "46271d19-a7ff-494a-9e0b-08aa2361a410",
        "text": "Жартылай Эйлер графы"
      },
      {
        "id": "1d27febd-e1d4-4b36-9d78-697041fe6006",
        "text": "Гамильтон графы"
      },
      {
        "id": "bb047b72-b3fe-456d-b794-13da17ef4197",
        "text": "Толық граф"
      }
    ],
    "correctOptionIds": [
      "636d6295-f245-4e67-bc6f-96916411f956"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "c211a437-d98d-41c9-9c4a-4546e6ebbad2",
    "subjectId": "algo",
    "text": "Эйлер жолы бар (бірақ циклі жоқ) граф қалай аталады?",
    "options": [
      {
        "id": "9aa65af0-aa72-483f-95c9-5851ccfdb652",
        "text": "Жартылай Эйлер графы (Semi-Eulerian Graph)"
      },
      {
        "id": "01e7bfd2-41b2-4195-bf7d-45601c7d4f73",
        "text": "Эйлер графы"
      },
      {
        "id": "0d01c029-4a7d-41ef-969a-b7cd973af55e",
        "text": "Гамильтондық емес граф"
      },
      {
        "id": "90929412-1d23-4703-b4fd-97a741f19825",
        "text": "Бағытталмаған ағаш"
      }
    ],
    "correctOptionIds": [
      "9aa65af0-aa72-483f-95c9-5851ccfdb652"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "e0c8a8d4-de82-4da0-95e8-530f16d40b34",
    "subjectId": "algo",
    "text": "Бағытталған байланысқан графта Эйлер циклі болуының шарты қандай?",
    "options": [
      {
        "id": "37299945-3af6-4abe-9d71-00207729b63d",
        "text": "Әрбір төбенің кіріс дәрежесі шығыс дәрежесіне тең болуы тиіс (in-degree == out-degree)"
      },
      {
        "id": "4cfc4bde-79da-4018-a4f4-c49117fae453",
        "text": "Барлық төбелердің дәрежелері жұп болуы тиіс"
      },
      {
        "id": "6532210e-6d76-4808-a0c2-6d879e74f995",
        "text": "Графта ешқандай цикл болмауы тиіс"
      },
      {
        "id": "f6511116-f60a-463a-a560-9b59fb784e6d",
        "text": "Граф толық граф болуы тиіс"
      }
    ],
    "correctOptionIds": [
      "37299945-3af6-4abe-9d71-00207729b63d"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "9b6c7d03-5cd6-44e7-858f-f3a5f840fc2b",
    "subjectId": "algo",
    "text": "Графтағы ең қысқа жолды табудың BFS алгоритмінің кеңістік күрделілігі қандай?",
    "options": [
      {
        "id": "b340721a-16da-4436-a036-328219e19210",
        "text": "O(V) (кезек пен visited массивін сақтау үшін)"
      },
      {
        "id": "b3c5d85b-cb8a-43e8-bcc9-15e4609ff5a2",
        "text": "O(E)"
      },
      {
        "id": "14f7b9b9-abd6-4d10-8b13-33b4e8428018",
        "text": "O(1)"
      },
      {
        "id": "f4d0b92a-5c9d-4781-8406-b2ef4f925f27",
        "text": "O(V^2)"
      }
    ],
    "correctOptionIds": [
      "b340721a-16da-4436-a036-328219e19210"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "621f9885-653c-46ee-844e-f2515c587ba2",
    "subjectId": "algo",
    "text": "Dijkstra алгоритміне негізделген ең қысқа жолдар ағашы қалай аталады?",
    "options": [
      {
        "id": "6cc13b5a-f133-489e-807b-da4d3a32461d",
        "text": "Shortest Path Tree (SPT)"
      },
      {
        "id": "bce92c91-d028-4217-bd25-70e3d676afbf",
        "text": "Minimum Spanning Tree (MST)"
      },
      {
        "id": "0b8147e3-12d2-4c5b-882c-2f2b55d00524",
        "text": "Depth-First Tree"
      },
      {
        "id": "315ea17a-aaf9-4760-93bc-a06b0129848b",
        "text": "Breadth-First Tree"
      }
    ],
    "correctOptionIds": [
      "6cc13b5a-f133-489e-807b-da4d3a32461d"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "12d60056-4467-411b-935b-41d216e48b50",
    "subjectId": "algo",
    "text": "Төбелер саны V-ге тең байланысқан графтағы кез келген қаңқа ағаштың (Spanning Tree) төбелер саны нешеге тең?",
    "options": [
      {
        "id": "6fa29db7-0c93-421d-808c-f88368f31dbf",
        "text": "V"
      },
      {
        "id": "a16c7eb6-8665-4356-af77-600f6cdc760a",
        "text": "V - 1"
      },
      {
        "id": "791fe6ea-c888-47da-8f4f-d3b7d6fd35b4",
        "text": "V + 1"
      },
      {
        "id": "3c68ed69-d0f6-4e5f-a909-3e4e8eeb9496",
        "text": "2 * V"
      }
    ],
    "correctOptionIds": [
      "6fa29db7-0c93-421d-808c-f88368f31dbf"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  },
  {
    "id": "deab6b53-8c4e-4c4f-b3ab-d05ba8322341",
    "subjectId": "algo",
    "text": "Эдмондс-Карп алгоритмінде ағынды арттырушы жолды (augmenting path) табу үшін қандай алгоритм қолданылады?",
    "options": [
      {
        "id": "a9bc7120-3eb8-4f08-9a1c-ab6bb024b7f2",
        "text": "BFS (ендік бойынша іздеу - қабырғалар саны ең аз жолды табу үшін)"
      },
      {
        "id": "449c2542-8782-4752-aba8-f849f487b0f1",
        "text": "DFS"
      },
      {
        "id": "56169cc7-fcb7-4906-b222-566cc33fbaac",
        "text": "Дейкстра алгоритмі"
      },
      {
        "id": "45505f2a-ab3f-4d03-b797-f974613cdc40",
        "text": "Беллман-Форд алгоритмі"
      }
    ],
    "correctOptionIds": [
      "a9bc7120-3eb8-4f08-9a1c-ab6bb024b7f2"
    ],
    "type": "SINGLE",
    "topic": "Графтар және графтар алгоритмдері",
    "difficulty": "medium"
  }
] as Question[];
