'use strict'

// Elements of the page
const cardItem = document.querySelector("#card");
const startGameButton = document.querySelector("#game");
const drawCardButton = document.querySelector("#draw");
const foldHandButton = document.querySelector("#fold");
const restartGameButton = document.querySelector("#restart");

// Additional Variables
let cardList = [];

// Functions
function randomCardNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}


// Add initial card valules to table method
let addInitialCards = () => {
    let initialCard1 = randomCardNumber();
    let initialCard2 = randomCardNumber();
    cardList = [initialCard1, initialCard2]
    cardItem.append(cardList);
}

// Start game function
startGameButton.addEventListener("click", addInitialCards);