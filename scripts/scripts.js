const availableChoices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return availableChoices[Math.floor(Math.random() * availableChoices.length)];
};

const getPlayerChoice = () => {
  const selectedChoice = prompt("Rock, Paper , or Scissors?").toLowerCase();

  if (availableChoices.includes(selectedChoice)) {
    return selectedChoice;
  } else {
    alert("Please enter a valid choice!");
    return getPlayerChoice();
  }
};

const playRound = () => {
  const wantsToPlay = prompt("Do you want to play a game? (Y/N)").toLowerCase();
  if (wantsToPlay === "n") return;
  if (wantsToPlay !== "y") return playRound();

  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  const message = `You chose ${playerChoice} and the computer chose ${computerChoice}.`;

  if (playerChoice === "rock" && computerChoice === "scissors") {
    alert(`You WON! \n\n ${message}`);
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    alert(`You WON! \n\n ${message}`);
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    alert(`You WON! \n\n ${message}`);
  } else if (playerChoice === computerChoice) {
    alert(`DRAW! \n\n ${message}`);
  } else {
    alert(`You LOSE! \n\n ${message}`);
  }
};

playRound();
