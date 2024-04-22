const quizData = [
    {
      question: "Where could you be found at a party?",
      options: ["Shame eating at the buffet table", "Telling everyone stories about your past", "Regaling people with stories about your past businesses", "Surrounded with people asking about your fashion sense", "Outside avoiding everyone", "Playing the live music", "Standing awkwardly in the corner"],
      characters: ["David", "Alexis", "Johnny", "Moira", "Stevie", "Patrick", "Ted"]
    },
    {
        question: "In a dream world, what would you do for work?",
        options: ["Actress", "Vet", "Singer", "Run a small business", "Motel Clerk", "PR Consultant", "Run a chain of businesses"],
        characters: ["Moira", "Ted", "Patrick", "David", "Stevie", "Alexis", "Johnny"]
    },
    {
        question: "What is your dream destination?",
        options: ["The Galapogos", "New York", "Paris", "The Alps", "Anywhere with a resort", "Anywhere, I just want to travel", "Anywhere with my spouse"],
        characters: ["Ted", "David", "Moira", "Patrick", "Alexis", "Stevie", "Johnny"]
    },
    {
        question: "Pick your favourite quote",
        options: ["Hashtag, is that two words?", "This wine is awful, get me another", "In my defence, they were serving cookies", "I'm only doing this because you called me rude and I take that as a compliment", "I think you already know I would climb a thousand mountains for you", "I'm starting to feel like I'm trapped in an Avril Lavigne lyric here", "I don’t skate through life. I walk through life…in really nice shoes."],
        characters: ["Johnny", "Moira", "Ted", "Stevie", "Patrick", "David", "Alexis"]
    },
    {
        question: "Pick a word others would describe you as",
        options: ["Kind", "Unique", "Hardworking", "Loyal", "Confident", "Unapologetic", "Goofy"],
        characters: ["Patrick", "Moira", "Johnny", "David", "Alexis", "Stevie", "Ted"]
    },
    {
        question: "What do you do during your free time?",
        options: ["Workout", "Hard to have free time when you're always grifting", "Go for a jog", "Go to the bar", "Vegitate in bed", "Go for a hike", "Singing with the local choir"],
        characters: ["Ted", "Johnny", "Alexis", "Stevie", "David", "Patrick", "Moira"]
    },
    {
        question: "What is your greatest accomplishment",
        options: ["Personal growth", "Being my true self", "My travels", "My reinvention", "My business", "Saving lives", "My marriage"],
        characters: ["Stevie", "Patrick", "Alexis", "Moira", "Johnny", "Ted", "David"]
    },
    {
        question: "How do you deal with failure?",
        options: ["Have a breakdown in the wardrobe", "Question my life choices", "I hide from it in my bed", "I learn from it and apply it", "Sulk, then move on", "What is failure?", "Write a song about it"],
        characters: ["Moira", "Stevie", "David", "Johnny", "Ted", "Alexis", "Patrick"]
    }
  ];
  
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
  
let currentQuestion = 0;
let Dscore = 0;
let Ascore = 0;
let Jscore = 0;
let Mscore = 0;
let Sscore = 0;
let Pscore = 0;
let Tscore = 0;
  
function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
function selectAnswer(e) {
    const selectedButton = e.target;
    let optionsArray = quizData[currentQuestion].options
    let selectedAnswer = selectedButton.innerText
    let answerIndex = optionsArray.indexOf(selectedAnswer)
    let incrementedCharacter = quizData[currentQuestion].characters[answerIndex]
    if (incrementedCharacter === "David"){
        Dscore++
    }
    else if (incrementedCharacter === "Alexis"){
        Ascore++
    }
    else if (incrementedCharacter === "Johnny"){
        Jscore++
    }
    else if (incrementedCharacter === "Moira"){
        Mscore++
    }
    else if (incrementedCharacter === "Stevie"){
        Sscore++
    }
    else if (incrementedCharacter === "Patrick"){
        Pscore++
    }
    else if (incrementedCharacter === "Ted"){
        Tscore++
    }
    
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
function showResult() {
    const scoresArray = [Dscore, Ascore, Jscore, Mscore, Sscore, Pscore, Tscore];
    scoresArray.sort(function(a,b){return b-a})
    if (scoresArray[0] === Dscore){
        window.open("https://alistairferguson.github.io/set08101/Quiz/Results_Pages/David.html", "_self");
    }
    else if (scoresArray[0] === Ascore){
        window.open("https://alistairferguson.github.io/set08101/Quiz/Results_Pages/Alexis.html", "_self");
    }
    else if (scoresArray[0] === Jscore){
        window.open("https://alistairferguson.github.io/set08101/Quiz/Results_Pages/Johnny.html", "_self");
    }
    else if (scoresArray[0] === Mscore){
        window.open("https://alistairferguson.github.io/set08101/Quiz/Results_Pages/Moira.html", "_self");
    }
    else if (scoresArray[0] === Sscore){
        window.open("https://alistairferguson.github.io/set08101/Quiz/Results_Pages/Stevie.html", "_self");
    }
    else if (scoresArray[0] === Pscore){
        window.open("https://alistairferguson.github.io/set08101/Quiz/Results_Pages/Patrick.html", "_self");
    }
    else if (scoresArray[0] === Tscore){
        window.open("https://alistairferguson.github.io/set08101/Quiz/Results_Pages/Ted.html", "_self");
    }
  }
  
showQuestion();
