function getComputerChoice() {
    const computerChoice = ['rock','paper','scissors'];
   return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}
function getPlayerChoice() {
    let playerChoice = prompt('Rock, Paper , or Scissors?') 
     
}
 

function playRound(playerSelection,computerSelection) { if (playerSelection == 'rock', computerSelection === [2] || playerSelection == 'paper', computerSelection === [0] || playerSelection == 'scissors', computerSelection === [1]) {alert('W!')}
 else if(playerSelection == 'rock', computerSelection === [1] || playerSelection == 'paper', computerSelection === [2] || playerSelection == 'scissors', computerSelection === [0]) {alert('L!')}
  else(playerSelection === computerSelection) {alert('D!')};

}



const playerSelection = getPlayerChoice()
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection,computerSelection))