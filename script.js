//Returns a random integer between two numbers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
//Returns string of 'rock', 'paper', or 'scissors'
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
    else {console.log('This should not happen!');}
}
//Plays a single round of RPS
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log('You tied this round.')
        return 'Tie';
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('You won this round! Rock beats Scissors.');
        return 'Win';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You lose this round! Rock beats Scissors.');
        return 'Lose';
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You won this round! Paper covers rock.');
        return 'Win';
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lose this round! Paper covers rock.');
        return 'Lose';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('You won this round! Scissors cut paper.');
        return 'Win';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose this round! Scissors cut paper.');
        return 'Lose';
    }
    else {
        console.log('Invalid input, restart game!');
        return;
    }
}
//Calls playRound 5 times with a for loop, keeps count, declares winner
function game() {
    //Score counter variables declared
    let playerHuman = 0;
    let playerComputer = 0;
    //Loops for 5 rounds, getting user/computer choices and adding scores based on winner
    //Cancels execution if input is not Rock, Paper or Scissors
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('Throw Rock, Paper or Scissors?', 'rock').toLowerCase();
        const computerSelection = computerPlay();
        let victor = playRound(playerSelection, computerSelection);

        if(victor === 'Tie'){
            playerHuman++;
            playerComputer++;
        }
        else if(victor === 'Win'){
            playerHuman++;
        }
        else if(victor === 'Lose'){
            playerComputer++;
        }
        else{
            return;
        }

    }
    //Calculates overall winner based on score and ends the function 
    if(playerHuman === playerComputer){
        return console.log('Game is a tie!');
    }
    else if(playerHuman > playerComputer){
        return console.log('You won the game!');
    }
    else if(playerHuman < playerComputer){
        return console.log('You lost the game!');
    }
    else{
        return;
    }
}