
function getComputerChoice() {
    const computerChoice = ['rock','paper','scissors']
   return computerChoice[Math.floor(Math.random() * computerChoice.length)];
    

};
function getPlayerChoice() {
    return prompt('Rock, Paper , or Scissors?').toLowerCase(); 
}

    
 
function playRound(playerSelection,computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {alert('You WON! Rock beats Scissors!')}
    else if (playerSelection === 'paper' && computerSelection === 'rock') {alert('You WON! Paper beats Rock!')}
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {alert('You WON! Scissors beats Paper!')}
    else if (playerSelection === computerSelection) {alert('DRAW!')}  
    else  {alert('You LOSE!')} }


const playerSelection = getPlayerChoice()
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection));



















    