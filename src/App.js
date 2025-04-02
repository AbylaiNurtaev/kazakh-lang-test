import { useEffect, useState } from "react";

const questions = [
  {
    id: 3,
    question: "Ата-текті төменнен жоғары қарай ретімен орналастыр: бала, әке, ата, ...?",
    options: ["немере", "жамағайын", "немене", "туажат"],
    correct: "немере",
  },
  {
    id: 5,
    question: "Ер жігіттің бойындағы жеті қасиетінің бірі – «қаны» неде?",
    options: ["атта", "мылтықта", "қақпанда", "тазыда"],
    correct: "атта",
  },
  {
    id: 11,
    question: "«Балада рух, дене тәрбиесі және такамүлі» дегенді кім айтты?",
    options: ["Ибн Сина", "Омар Хайям", "Әл Фараби", "М.Жұмабаев"],
    correct: "Ибн Сина",
  },
  {
    id: 12,
    question: "Суреттегі мәтін мен мазмұн арасындағы сәйкессіздік нені білдіреді?",
    options: [
      "қарызын төлеу мен өсім туралы",
      "мәдени іс-шаралар туралы",
      "шығармашылық жұмыс туралы",
      "саяхат ережелері туралы",
    ],
    correct: "қарызын төлеу мен өсім туралы",
  },
  {
    id: 16,
    question: "«Бәйтерек» символының негізі қазақтың қай аңызына байланысты?",
    options: ["Самұрық құсы туралы", "Көк бөрі туралы", "Алаша хан туралы", "Ер Төстік туралы"],
    correct: "Самұрық құсы туралы",
  },
  {
    id: 17,
    question: "Қазақстан Республикасының Туы қойылған мереке және тұғыр биіктігі қандай?",
    options: [
      "Тәуелсіздік күні, 91 метр",
      "Наурыз мейрамы, 50 метр",
      "Конституция күні, 100 метр",
      "Елбасы күні, 88 метр",
    ],
    correct: "Тәуелсіздік күні, 91 метр",
  },
  {
    id: 18,
    question: "Алашорда дәуіріндегі ең сымбатты кісілердің бірі кім?",
    options: ["Сәкен Сейфуллин", "Ахмет Байтұрсынов", "Мұстафа Шоқай", "Әлихан Бөкейхан"],
    correct: "Сәкен Сейфуллин",
  },
  {
    id: 19,
    question: "Арнайы курс дегеніміз не?",
    options: ["Кәсіби біліктілікті арттыру", "Мамандық ауыстыру", "Шетелге бару", "Тіл үйрену"],
    correct: "Кәсіби біліктілікті арттыру",
  },
  {
    id: 22,
    question: "Бүкіләлемдік кітап күні неге байланысты өтеді?",
    options: [
      "Шекспирдің дүниеге келген және қайтыс болған күні",
      "Гутенбергтің баспа ойлап тапқан күні",
      "Әдебиет күнінде",
      "Шекспирдің туған күні",
    ],
    correct: "Шекспирдің дүниеге келген және қайтыс болған күні",
  },
  {
    id: 23,
    question: "У. Шекспирдің туған және қайтыс болған күні қай күн?",
    options: ["23 сәуір", "1 мамыр", "12 сәуір", "30 сәуір"],
    correct: "23 сәуір",
  },
  {
    id: 27,
    question: "Қандай жағдайда телефонмен сөйлесуде шектен тыс сыпайылық ерсі болып саналады?",
    options: [
      "Телефонистпен сөйлескенде",
      "Кеш уақытта қоңырау шалса",
      "Ұзақ сөйлесу кезінде",
      "Досына хабарласқанда",
    ],
    correct: "Телефонистпен сөйлескенде",
  },
  {
    id: 32,
    question: "БАҚ кімдердің эстетикалық сұранысын өтейді?",
    options: [
      "Би-би-cи компаниясының",
      "мемлекеттің, көрермендердің",
      "көрермендер мен тыңдармандардың",
      "журналистердің",
    ],
    correct: "көрермендер мен тыңдармандардың",
  },
  {
    id: 34,
    question: "Бұл кесенені неліктен ғажайып ғимарат деп атайды?",
    options: [
      "тарихи құндылығы бар ескерткіш",
      "биіктігі ерекше",
      "35 бөлмесі бар",
      "Сәулетшісі белгілі",
    ],
    correct: "тарихи құндылығы бар ескерткіш",
  },
  {
    id: 40,
    question: "Футбол чемпионаты өткен екі азиялық ел?",
    options: ["Корея, Жапония", "Катар, Қытай", "Иран, Үндістан", "Израиль, Жапония"],
    correct: "Корея, Жапония",
  },
  {
    id: 41,
    question: "Қай елдерде футбол чемпионаты екі рет өткен?",
    options: [
      "Мексика, Германия, Италия",
      "Аргентина, Англия, Бразилия",
      "Франция, АҚШ, Германия",
      "Жапония, Қытай, Ресей",
    ],
    correct: "Мексика, Германия, Италия",
  },
  {
    id: 46,
    question: "Құпия қалай ашылды?",
    options: [
      "ешкілердің белгісіз жемісті жеуі",
      "молданың түс көруі",
      "бақташылар байқаған",
      "адамдар дәмін татқан",
    ],
    correct: "ешкілердің белгісіз жемісті жеуі",
  },
  {
    id: 50,
    question: "Бие сүтінің уыз дәмі таралған кезде ашытылған қою қымыз қалай аталады?",
    options: ["уыз қымыз", "қорабалы қымыз", "сары қымыз", "бал қымыз"],
    correct: "уыз қымыз",
  },
  {
    id: 55,
    question: "Бұл сөздердің авторы Ы.Жақаев кім?",
    options: ["күрішші", "малшы", "жазушы", "шопан"],
    correct: "күрішші",
  },
  {
    id: 56,
    question: "Автор өзінің жастарға үндеуін не деп атайды?",
    options: ["бата", "хат", "аманат", "өсиет"],
    correct: "бата",
  },
  {
    id: 57,
    question: "Автордың негізгі ойы не туралы?",
    options: [
      "өмірдің әр мезетін бағалау",
      "табиғатты сүю",
      "спортпен айналысу",
      "шығармашылық туралы",
    ],
    correct: "өмірдің әр мезетін бағалау",
  },
  {
    id: 58,
    question: "Ы.Жақаевтың ойынша, өмірдің мәні неде?",
    options: ["сыйласуда", "еңбекте", "бақытта", "ақшада"],
    correct: "сыйласуда",
  },
  {
    id: 59,
    question: "Мәтінге сай ойды табыңыз:",
    options: [
      "Адам ақыл-ойлы, арлы, сабырлы, арманшыл, талапты болуы керек.",
      "Адам тек ақылды болуы керек.",
      "Барлығын бақытқа жеткізу керек.",
      "Армансыз өмір сүр.",
    ],
    correct: "Адам ақыл-ойлы, арлы, сабырлы, арманшыл, талапты болуы керек.",
  }
];

export default function App() {
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem("testAnswers");
    return saved ? JSON.parse(saved) : Array(questions.length).fill(null);
  });

  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem("testSubmitted") === "true";
  });

  const [started, setStarted] = useState(() => {
    return localStorage.getItem("testStarted") === "true";
  });

  useEffect(() => {
    localStorage.setItem("testAnswers", JSON.stringify(answers));
    localStorage.setItem("testSubmitted", submitted);
    localStorage.setItem("testStarted", started);
  }, [answers, submitted, started]);

  const handleAnswer = (index, option) => {
    if (submitted) return;
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
    setStarted(false);
    localStorage.clear();
  };

  const score = answers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  if (!started) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e0f2fe', padding: '20px' }}>
        <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Қазақ тілі тесті</h1>
          <p style={{ marginBottom: '30px', color: '#555' }}>Барлығы {questions.length} сұрақ. Дұрыс жауаптар саны бойынша нәтиже шығады.</p>
          <button onClick={() => setStarted(true)} style={{ background: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '8px', fontSize: '16px', border: 'none', cursor: 'pointer' }}>Тесті бастау</button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', background: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#16a34a' }}>Нәтиже</h2>
          <p style={{ fontSize: '20px', marginBottom: '24px' }}>{score} / {questions.length} дұрыс жауап</p>
          <button onClick={handleReset} style={{ background: '#374151', color: 'white', padding: '12px 24px', fontSize: '16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Қайтадан бастау</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 8px 16px rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '20px', color: '#1e3a8a', textAlign: 'center' }}>Қазақша тест</h1>

        {questions.map((q, i) => (
          <div key={q.id} style={{ marginBottom: '30px' }}>
            <p style={{ fontWeight: '500', marginBottom: '10px' }}>{i + 1}. {q.question}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {q.options.map((opt) => {
                let style = {
                  padding: '12px',
                  borderRadius: '8px',
                  border: '2px solid #d1d5db',
                  textAlign: 'left',
                  cursor: 'pointer',
                  backgroundColor: answers[i] === opt ? '#bfdbfe' : 'white'
                };
                if (submitted && opt === q.correct) {
                  style.backgroundColor = '#dcfce7';
                  style.borderColor = '#22c55e';
                } else if (submitted && answers[i] === opt && opt !== q.correct) {
                  style.backgroundColor = '#fee2e2';
                  style.borderColor = '#ef4444';
                }
                return (
                  <button key={opt} onClick={() => handleAnswer(i, opt)} style={style}>{opt}</button>
                );
              })}
            </div>
          </div>
        ))}

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            onClick={handleSubmit}
            style={{ background: '#2563eb', color: 'white', padding: '12px 24px', fontSize: '16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
          >
            Тестті аяқтау
          </button>
        </div>
      </div>
    </div>
  );
}
