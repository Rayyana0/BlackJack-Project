'use strict'

// Elements of the page
const cardItem = document.querySelector("#card");
const startGameButton = document.querySelector("#game");
const drawCardButton = document.querySelector("#draw");
const foldHandButton = document.querySelector("#fold");
const restartGameButton = document.querySelector("#restart");
const message = document.querySelector("#message");

// Random number generator
function randomCardNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

// Additional Variables
let cardList = [];
let initialCard1 = 0;
let initialCard2 = 0;


// Add initial card valules to table method
let addInitialCards = () => {
    initialCard1 = randomCardNumber();
    initialCard2 = randomCardNumber();
    cardList = [initialCard1, initialCard2];
    cardItem.innerHTML+=cardList+"<br>";
    console.log(cardList);
    sumOfCards();
}

// Add a card
let addACard = () => {
    cardList.push(randomCardNumber());
    cardItem.innerHTML+=cardList+"<br>";
    console.log(cardList);
    sumOfCards();
}

// Sum of cardList
let sumOfCards = () => {
    let result = 0;
    for (let i = 0; i < cardList.length; i++) {
        result += cardList[i];
    }
    console.log(result)
    message.value=result;
}


// Flush the table of cards
let restartGame = () => {
    window.location.reload();
}

// Start game function
startGameButton.addEventListener("click", addInitialCards);

// Restart game
restartGameButton.addEventListener("click", restartGame);

// Draw a card
drawCardButton.addEventListener("click", addACard) 

// Fold hand

