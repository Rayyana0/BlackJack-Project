'use strict'

// Elements of the page
const cardItem = document.querySelector("#card");
const startGameButton = document.querySelector("#game");
const drawCardButton = document.querySelector("#draw");
const foldHandButton = document.querySelector("#fold");
const restartGameButton = document.querySelector("#restart");

// Additional Variables
let cardList = [];
let initialCard1;
let initialCard2;

// Functions
function randomCardNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}


// Add initial card valules to table method
let addInitialCards = () => {
    initialCard1 = randomCardNumber();
    initialCard2 = randomCardNumber();
    
    cardItem.innerHTML+=initialCard1+"<br>";
    cardItem.innerHTML+=initialCard2+"<br>";

    cardList = [initialCard1, initialCard2];
}

// Sum of numbers
let sumOfNumbers = () => {
    addInitialCards()
    console.log(initialCard1 + initialCard2)
}

// Flush the table of cards
let restartGame = () => {
    window.location.reload();
}

// Start game function
startGameButton.addEventListener("click", addInitialCards);

// Restart game
restartGameButton.addEventListener("click", restartGame);
