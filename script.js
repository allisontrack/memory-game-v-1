const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let card1 = null;
let card2 = null;

// TODO: Implement this function!

function handleCardClick(event) {
  card = event.target;
  // this will handle a click on an already revealed card
  if (card === card1) {
    return;
  }
  setCards();
}

// Clicking a card should change the background color to be the color of the class it has:
//changing the card background color using a class
// set card one and card two

function setCards() {
  if (!card1) {
    card1 = card;
    card1.classList.add(`faceup${card.className}`);
  }
  else if (!card2) {
    card2 = card;
    card2.classList.add(`faceup${card.className}`);
    checkCards();
  }
}


// When clicking two cards that are not a match, they should stay turned over for 
// at least 1 second before they hide the color again. You should make sure to use a 
// setTimeout so that you can execute code after one second.

function checkCards() {
  if (card1.className !== card2.className) {
    setTimeout(function() {
      //to remove the background color on card1
      let currentClasses1 = card1.getAttribute('class');
      let currentClassesArray1 = currentClasses1.split(' ');
      card1.classList.remove(currentClassesArray1[1]);
      //to remove the background color on card2
      let currentClasses2 = card2.getAttribute('class');
      let currentClassesArray2 = currentClasses2.split(' ');
      card2.classList.remove(currentClassesArray2[1]);
      resetCards();
    }, 1000);
  }
  // Clicking on two matching cards should be a “match” — those cards should stay face up.
  else {
    resetCards();
  }
}

function resetCards() {
  card1 = null;
  card2 = null;
}

// when the DOM loads
createDivsForColors(shuffledColors);
