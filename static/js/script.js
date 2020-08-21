// challenge 1: your age in days
function ageInDays(){
var birthYear = prompt('what year were you born... Good friend?')
var ageInDays = (2018 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('you are ' + ageInDays + ' days old..');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "static/images/cat.jpg";
    div.appendChild(image);
}

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice =  numberToChoice(randToRpsInt());
    console.log('computer choice:', botChoice);
    // alert(botChoice);
    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost
    console.log(results);

    message = finalMessage(results); // { 'message': youwon", "color": 'green' }
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'papper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'papper': 0},
        'papper': {'rock': 1, 'papper': 0.5, 'scissors': 0},
        'scissors': {'papper': 1, 'scissors': 0.5, 'rock': 0},
    };

    var yourScore = rpsDatabase[yourChoice] [computerChoice];
    var computerScore = rpsDatabase[computerChoice] [yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'you lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'you tied', 'color': 'yellow'};
    } else {
        return {'message': 'you win', 'color': 'blue'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'papper': document.getElementById('papper').src,
        'scissors': document.getElementById('scissors').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('papper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=100 width=100 style='box-shadow: 0px 10px 50px rgba(37, 50, 200, 0.7)'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=100 width=100 style='box-shadow: 0px 10px 50px rgba(37, 50, 200, 0.7)'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//challenge4 : cahnge the color of all buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value == 'red') {
        buttonRed();
    } else if (buttonThingy.value == 'green') {
        buttonGreen();
    } else if (buttonThingy.value == 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value == 'random') {
        randomColor();
    }
}

function buttonRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColor() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i=0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

// blackjack continue
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4' ,'5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,'8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11]}
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    let card = randomCard();
    console.log(card);
    showCard(card, YOU);
    updatesScore(card, YOU);
    showScore(YOU);
    console.log(YOU['score']);
}

function randomCard() {
    let randomIndexs = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndexs];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (i=0; i < yourImages.length; i++) { 
        yourImages[i].remove();
    }

    for (i=0; i < dealerImages.length; i++) { 
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;

    document.querySelector('#your-blackjack-result').style.color = '#fff';
    document.querySelector('#your-blackjack-result').style.color = '#fff';
}

function updatesScore(card, activePlayer) {
    if (card === 'A') {
        // if adding 11 keeps me below 21, add 11. Ohterwise, add 1
        if (activePlayer['score'] + blackjackGame['cardsMap'][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else { 
        activePlayer['score'] += blackjackGame['cardsMap'][card]
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!' ;
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }  
}