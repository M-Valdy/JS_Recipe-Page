const fortune1 = "You will be unemployed";
const fortune2 = "You will be deported";
const fortune3 = "Nothing bad will happen to you today";
const fortune4 = "You will be rich and earn a lot of money";
const fortune5 = "You will have to go back to school";

let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);
let selectedFortune;

switch (randomNumber) {
  case 1:
    selectedFortune = fortune1;
    break;
  case 2:
    selectedFortune = fortune2;
    break;
  case 3:
    selectedFortune = fortune3;
    break;
  case 4:
    selectedFortune = fortune4;
    break;
  case 5:
    selectedFortune = fortune5;
    break;
}

console.log(selectedFortune);