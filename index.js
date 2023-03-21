let firstCard = Math.floor((Math.random() * 10) + 2);
let secondCard = Math.floor((Math.random() * 10) + 2);
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame() {
    game()
}

function game() {
    cardEl.textContent = "Cards: " + cards.reduce((previousValue, curretValue) => {
        return previousValue + " " + curretValue
    })
    sumEL.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw another card"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }

    messageEL.textContent = message

}

function newCard() {
    let thirdCard = Math.floor((Math.random() * 10) + 2);
    cards.push(thirdCard);
    sum += thirdCard;

    game()

}


