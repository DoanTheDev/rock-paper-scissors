function getComputerChoice() {
    const choice = ['rock','paper','scissors'];
   return choice[Math.floor(Math.random() * choice.length)];
};

const playerSelection = "rock";
const computerSelection = getComputerChoice()
console.log(computerSelection)