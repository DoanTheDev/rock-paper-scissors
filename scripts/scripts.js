const arr1 = ['rock','paper','scissors'];

function getComputerChoice() {return arr1[Math.floor(Math.random() * arr1.length)]};


const computerSelection = getComputerChoice();

function getPlayerChoice(){return prompt('Rock, Paper, or Scissors?') };

const playerSelection = getPlayerChoice();

function playRound(playerSelection,computerSelection) { 
    if (playerSelection === 'rock', computerSelection ===[2] || playerSelection === 'scissors', computerSelection ===[1] || playerSelection === 'paper', computerSelection ===[0] ) { alert('Win!')}
    else if( playerSelection === 'rock', computerSelection ===[1] || playerSelection ==='scissors', computerSelection===[0] || playerSelection === 'paper', computerSelection===[2] ) {return alert('Lose!')}
    else{playerSelection === computerSelection} {return alert('DRAW!')}
};
        
 console.log(playRound(playerSelection,computerSelection));
