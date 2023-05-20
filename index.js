let player = {
     name: window.prompt("Enter your name: "),
     chips: 500
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEL = document.getElementById('card-el')
let playerEL = document.getElementById('player-el')

playerEL.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let rnd = Math.floor(Math.random()*13) + 1
    if (rnd > 10 ) {
        return 10
    } else if ( rnd === 1)
        return 11
    else {
        return rnd
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
        cardsEL.textContent= "Cards: "
        for(let i = 0; i < cards.length; i++)
        {
            cardsEL.textContent += cards[i] + " "
        }
        sumEl.textContent = "Sum : " + sum  
        if (sum <= 21) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You've got Blackjack!"
            hasBlackJack = true;
        } else {
            message = "You're out of the game!"
            isAlive = false
        }
        messageEl.textContent = message
}
 
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        dead()
    }
}
function dead() {
    if (isAlive === false) {
        let nm= "Saaralla, potte" + " " + "outaayi" + " " + player.name +"eeee"
        window.alert(nm)
    }
}


