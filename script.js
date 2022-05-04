//Declare variables
let counter = 0;
let humanScore = 0;
let computerScore = 0;
let victor = '';
const divPlayerScore = document.querySelector('.div-player-score');
const divCompScore = document.querySelector('.div-cpu-score');
const divRound = document.querySelector('.div-round-counter');
const win = document.querySelector('#win');
const loss = document.querySelector('#loss');
const tie = document.querySelector('#tie');
const container = document.querySelector('.container');
const restartButton = document.querySelector('#restart-button');
const divWinner = document.querySelector('#div-winner');
const divLoser = document.querySelector('#div-loser');
const divTie = document.querySelector('#div-tie');

//Returns a random integer between two numbers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//Returns random string of either 'rock', 'paper', or 'scissors'
function computerPlay(){
    const computerChoice = getRandomInt(1,4);
    if(computerChoice === 1) {
        return 'rock';
    }
    else if(computerChoice === 2){
        return 'paper';
    }
    else if(computerChoice === 3){
        return 'scissors';
    }
}
//Plays a single round of RPS
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'Tie';
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'Win';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'Lose';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'Win';
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'Lose';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'Win';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'Lose';
    }
}
//Sets all score variables to 0
function resetScore(){
    counter = 0;
    humanScore = 0;
    computerScore = 0;
    divPlayerScore.textContent = 0;
    divCompScore.textContent = 0;
    divRound.textContent = 0;
}
//Increments the score
function tallyScore(){
    if(victor === 'Win'){
        win.classList.remove('invisible');
        loss.classList.add('invisible');
        tie.classList.add('invisible')
        humanScore++;
        divPlayerScore.textContent = humanScore;
        }
    else if(victor === 'Lose'){
        loss.classList.remove('invisible');
        win.classList.add('invisible');
        tie.classList.add('invisible')
        computerScore++;
        divCompScore.textContent = computerScore;
            }
    else if(victor === 'Tie'){
        tie.classList.remove('invisible')
        win.classList.add('invisible');
        loss.classList.add('invisible');
    }
}
//Resets score and returns results of game
function gameOver(){
    if (counter === 5){
        container.classList.toggle('invisible');
        restartButton.classList.toggle('invisible');
        if(humanScore === computerScore){
            divTie.classList.toggle('invisible');
            return console.log('Game is a tie!');
        }
        else if(humanScore > computerScore){
            divWinner.classList.toggle('invisible');
            return console.log('You won the game!');
        }
        else if(humanScore < computerScore){
            divLoser.classList.toggle('invisible');
            return console.log('You lost the game!');
        }
    }
}
//Play the game through clicking buttons
const rockButton = document.querySelector('#rock-button');
rockButton.addEventListener('click', () => {
    victor = playRound('rock', computerPlay());
    tallyScore();
    counter++;
    divRound.textContent = counter;
    gameOver();
});
const paperButton = document.querySelector('#paper-button');
paperButton.addEventListener('click', () => {
    victor = playRound('paper', computerPlay());
    tallyScore();
    counter++;
    divRound.textContent = counter;
    gameOver();
});
const scissorsButton = document.querySelector('#scissors-button');
scissorsButton.addEventListener('click', () => {
    victor = playRound('scissors', computerPlay());
    tallyScore();
    counter++;
    divRound.textContent = counter;
    gameOver();
});
//Starts over
restartButton.addEventListener('click', () => {
    container.classList.toggle('invisible');
    restartButton.classList.toggle('invisible');
    divWinner.classList.add('invisible')
    divLoser.classList.add('invisible')
    divTie.classList.add('invisible')
    win.classList.add('invisible');
    loss.classList.add('invisible');
    tie.classList.add('invisible');
    resetScore();
});