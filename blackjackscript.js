'use strict'

// Elements of the page
const cardItem = document.querySelector("#card");
const startGameButton = document.querySelector("#game");
const drawCardButton = document.querySelector("#draw");
const foldHandButton = document.querySelector("#fold");
const restartGameButton = document.querySelector("#restart");
const sum = document.querySelector("#message");

// Random number generator
function randomCardNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

// Additional Variables
let cardList = [];
let initialCard1 = randomCardNumber();
let initialCard2 = randomCardNumber();


// Add initial card valules to table method
let addInitialCards = () => {
    cardList = [initialCard1, initialCard2];
    cardItem.innerHTML+=initialCard1+"<br>";
    cardItem.innerHTML+=initialCard2+"<br>";
    console.log(cardList);
}

// Add a card
let addACard = () => {
    cardList.push(randomCardNumber());
    cardItem.innerHTML+=randomCardNumber()+"<br>";
    console.log(cardList);
}

// Sum of cardList
let sumOfCards = () => {
    let result = 0;
    for (let i = 0; i < cardList.length; i++) {
        result += cardList[i];
    }
    console.log(result)
    sum.textContent=result;
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

// Fold (repurposed to show sum of cards at the moment)
foldHandButton.addEventListener("click", sumOfCards)
