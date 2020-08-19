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