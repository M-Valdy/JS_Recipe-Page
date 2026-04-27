let lunches = [];

function showLunchMenu(arr) {
  if (arr.length == 0) {
    console.log("The menu is empty.");
    return arr;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
  return arr;
}

function addLunchToEnd(arr,str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr,str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length == 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  console.log(`${arr.pop()} removed from the end of the lunch menu.`);
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length == 0) {
    console.log("No lunches to remove.");
    return arr;
  }
  console.log(`${arr.shift()} removed from the start of the lunch menu.`);
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length == 0) {
    console.log("No lunches available.");
    return arr;
  }
  let randomIndex = Math.floor(Math.random() * arr.length);
  console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
}


// A bunch of test cases
showLunchMenu(lunches);
addLunchToEnd(lunches, "cake");

showLunchMenu(lunches);
addLunchToStart(lunches, "croissant");

showLunchMenu(lunches);
addLunchToEnd(lunches, "beer");
showLunchMenu(lunches);

removeLastLunch(lunches);
showLunchMenu(lunches);

addLunchToStart(lunches, "salad");
showLunchMenu(lunches);

addLunchToStart(lunches, "coke");
showLunchMenu(lunches);

removeFirstLunch(lunches);
showLunchMenu(lunches);
getRandomLunch(lunches);