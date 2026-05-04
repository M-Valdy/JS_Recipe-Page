const question1 = {
  category: "Science",
  question: "Do roosters have penises?",
  choices: ["Yes", "No", "Maybe"],
  answer: "No"
};
const question2 = {
  category: "Mathematics",
  question: "What base is the Mayan numeral system based of?",
  choices: ["10","60","20"],
  answer: "20"
};
const question3 = {
  category: "History",
  question: "What language was spoken by the people who built Machu Pichu?",
  choices: ["Quechua", "Aymara", "Spanish"],
  answer: "Quechua"
};

const question4 = {
  category: "Geography",
  question: "Which of these countries can you see the tectonic plates in?",
  choices: ["Philippines","Iceland", "Russia"],
  answer: "Iceland"
};

const question5 = {
  category: "Literature",
  question: "Which character of Shakespeare's play said the following: \"Frailty, thy name is woman\"?",
  choices: ["Macbeth","Hamlet","Romeo"],
  answer: "Hamlet"
};

let questions = [question1,question2,question3,question4,question5];

function getRandomQuestion(questionArr) {
  let randomQuestion = Math.floor(Math.random() * questionArr.length);
  return questionArr[randomQuestion];
}

function getRandomComputerChoice(choices) {
  let randomQuestion = Math.floor(Math.random() * choices.length);
  return choices[randomQuestion];
}

function getResults(question, choice) {
  return (choice == question.answer) 
  ? "The computer's choice is correct!" 
  : `The computer's choice is wrong. The correct answer is: ${question.answer}`
}

let questionee = getRandomQuestion(questions);
console.log(questionee);
let choice = getRandomComputerChoice(questionee.choices);
console.log(choice);
console.log(getResults(questionee,choice))
