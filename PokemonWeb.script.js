class PokemonQuiz {
  constructor(questions, characters) {
    this.questions = questions;
    this.characters = characters;
    this.currentQuestionIndex = 0;
    this.scores = { bulbasaur: 0, charmander: 0, squirtle: 0 };
    
    this.initElements();
    this.bindEvents();
  }

  initElements() {
    this.homeScreen = document.getElementById('home');
    this.quizScreen = document.getElementById('quiz');
    this.resultScreen = document.getElementById('result');
    this.questionText = document.getElementById('question-text');
    this.answersContainer = document.getElementById('answers');
    this.btnStart = document.getElementById('btn-start');
    this.btnRestart = document.getElementById('btn-restart');
  }

  bindEvents() {
    this.btnStart.onclick = () => this.start();
    this.btnRestart.onclick = () => this.restart();
  }

  start() {
    this.homeScreen.classList.add('hidden');
    this.quizScreen.classList.remove('hidden');
    this.renderQuestion();
  }

  renderQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    this.questionText.innerText = question.text;
    this.answersContainer.innerHTML = '';

    question.options.forEach(option => {
      const btn = document.createElement('button');
      btn.innerText = option.text;
      btn.onclick = () => this.handleAnswer(option.scores);
      this.answersContainer.appendChild(btn);
    });
  }

  handleAnswer(optionScores) {
    for (let char in optionScores) {
      this.scores[char] += optionScores[char];
    }

    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.questions.length) {
      this.renderQuestion();
    } else {
      this.showResult();
    }
  }

  showResult() {
    this.quizScreen.classList.add('hidden');
    this.resultScreen.classList.remove('hidden');

    let winner = 'bulbasaur';
    if (this.scores.charmander > this.scores[winner]) winner = 'charmander';
    if (this.scores.squirtle > this.scores[winner]) winner = 'squirtle';

    const charData = this.characters[winner];
    document.getElementById('result-img').src = charData.img;
    document.getElementById('result-name').innerText = `Você é o ${charData.name}!`;
    document.getElementById('result-desc').innerText = charData.desc;
  }

  restart() {
    this.currentQuestionIndex = 0;
    this.scores = { bulbasaur: 0, charmander: 0, squirtle: 0 };
    this.resultScreen.classList.add('hidden');
    this.homeScreen.classList.remove('hidden');
  }
}

const questionsData = [
  {
    text: "O que você prefere fazer no tempo livre?",
    options: [
      { text: "Ler ou ficar na natureza", scores: { bulbasaur: 3, charmander: 1, squirtle: 2 } },
      { text: "Sair e viver emoções", scores: { bulbasaur: 1, charmander: 3, squirtle: 2 } },
      { text: "Relaxar com amigos", scores: { bulbasaur: 2, charmander: 1, squirtle: 3 } }
    ]
  },
  {
    text: "Como você reage a desafios?",
    options: [
      { text: "Planejo tudo", scores: { bulbasaur: 3, charmander: 1, squirtle: 2 } },
      { text: "Vou pra cima", scores: { bulbasaur: 1, charmander: 3, squirtle: 1 } },
      { text: "Me adapto", scores: { bulbasaur: 2, charmander: 1, squirtle: 3 } }
    ]
  },
  { text: "Qual ambiente prefere?", options: [{ text: "Floresta", scores: { bulbasaur: 3, charmander: 1, squirtle: 1 } }, { text: "Vulcão", scores: { bulbasaur: 1, charmander: 3, squirtle: 1 } }, { text: "Oceano", scores: { bulbasaur: 1, charmander: 1, squirtle: 3 } }] },
  { text: "Qual seu maior medo?", options: [{ text: "Perder o foco", scores: { bulbasaur: 3, charmander: 1, squirtle: 1 } }, { text: "Ficar parado", scores: { bulbasaur: 1, charmander: 3, squirtle: 1 } }, { text: "Confrontos diretos", scores: { bulbasaur: 1, charmander: 1, squirtle: 3 } }] },
  { text: "Como você ajuda um amigo?", options: [{ text: "Dando conselhos", scores: { bulbasaur: 3, charmander: 1, squirtle: 1 } }, { text: "Protegendo-o", scores: { bulbasaur: 1, charmander: 3, squirtle: 1 } }, { text: "Ouvindo-o", scores: { bulbasaur: 1, charmander: 1, squirtle: 3 } }] },
  { text: "Qual estação prefere?", options: [{ text: "Primavera", scores: { bulbasaur: 3, charmander: 1, squirtle: 1 } }, { text: "Verão", scores: { bulbasaur: 1, charmander: 3, squirtle: 1 } }, { text: "Outono", scores: { bulbasaur: 1, charmander: 1, squirtle: 3 } }] },
  { text: "Qual sua cor favorita?", options: [{ text: "Verde", scores: { bulbasaur: 3, charmander: 1, squirtle: 1 } }, { text: "Vermelho", scores: { bulbasaur: 1, charmander: 3, squirtle: 1 } }, { text: "Azul", scores: { bulbasaur: 1, charmander: 1, squirtle: 3 } }] },
  { text: "O que é sucesso?", options: [{ text: "Conhecimento", scores: { bulbasaur: 3, charmander: 1, squirtle: 1 } }, { text: "Poder", scores: { bulbasaur: 1, charmander: 3, squirtle: 1 } }, { text: "Paz", scores: { bulbasaur: 1, charmander: 1, squirtle: 3 } }] },
  { text: "Qual estilo de luta?", options: [{ text: "Estratégico", scores: { bulbasaur: 3, charmander: 1, squirtle: 1 } }, { text: "Agressivo", scores: { bulbasaur: 1, charmander: 3, squirtle: 1 } }, { text: "Defensivo", scores: { bulbasaur: 1, charmander: 1, squirtle: 3 } }] },
  { text: "Seja honesto, você é:", options: [{ text: "Calmo", scores: { bulbasaur: 3, charmander: 1, squirtle: 1 } }, { text: "Impulsivo", scores: { bulbasaur: 1, charmander: 3, squirtle: 1 } }, { text: "Flexível", scores: { bulbasaur: 1, charmander: 1, squirtle: 3 } }] }
];

const charactersData = {
  bulbasaur: { name: "Bulbasaur", desc: "Você é focado, estratégico e ama a natureza.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  charmander: { name: "Charmander", desc: "Você é corajoso, intenso e cheio de energia.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  squirtle: { name: "Squirtle", desc: "Você é tranquilo, adaptável e ótimo amigo.", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" }
};

new PokemonQuiz(questionsData, charactersData);
