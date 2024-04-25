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
  ]; //A list of all the questions and answers. The characters are in a specific order to correspond with the answer they align to

//constants for the reduction of code size
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

//sets the current question and totals for all the characters to 0, to start fresh
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
    questionElement.innerText = question.question; //Gets the current question and displays it to the user
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);                //Creates a button for each answer
      button.addEventListener("click", selectAnswer);    //Listens for the answer buttons being pressed
    });
  }
  
function selectAnswer(e) {
    const selectedButton = e.target;                        //Stores the selected button
    let optionsArray = quizData[currentQuestion].options    //Creates an array of the selectable answers
    let selectedAnswer = selectedButton.innerText           //Stores the selected answers
    let answerIndex = optionsArray.indexOf(selectedAnswer)  //Retrieves the index of the selected answer
    let incrementedCharacter = quizData[currentQuestion].characters[answerIndex]    //Retrieves the name of the character based on the index
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
    }                                                //Adds one to the total score of the selected character
    
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {        //Quits the loop if all questions have been answered
      showQuestion();
    } else {
      showResult();
    }
  }
  
function showResult() {
    const scoresArray = [Dscore, Ascore, Jscore, Mscore, Sscore, Pscore, Tscore];    //Creates an array of all of the scores of the characters
    scoresArray.sort(function(a,b){return b-a})                                      //Sorts the array in reverse numerical order (highest-lowest)
    if (scoresArray[0] === Dscore){                                                  //Compares the highest score to the character scores, redirects page to highest
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
  }        //NOTE: If there is more than one character score that shares the highest number, the first character with that number in this if statement is where the user is redirected
  
showQuestion();    //Starts the script
