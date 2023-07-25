function getComputerChoice() {
  const options = ["Rock", "Seasor", "Paper"];
  return options[Math.floor(Math.random() * options.length)];
}

const playerSelection = prompt("Sellect between paper, rock ans seasors");

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return 0;
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    return 1;
  } else if (computerSelection == "rock" && playerSelection == "seasor") {
    return 2;
  } else if (computerSelection == "seasor" && playerSelection == "paper") {
    return 2;
  } else if (computerSelection == "seasor" && playerSelection == "rock") {
    return 1;
  } else if (computerSelection == "paper" && playerSelection == "seasor") {
    return 1;
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return 2;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const firstRoundResult = playRound(
    prompt("Sellect between paper, rock ans seasors"),
    getComputerChoice().toLowerCase()
  );

  if (firstRoundResult === 1) {
    playerScore++;
  } else if (firstRoundResult === 2) {
    computerScore++;
  }

  console.log({ playerScore, computerScore });

  const secondRoundResult = playRound(
    prompt("Sellect between paper, rock ans seasors"),
    getComputerChoice().toLowerCase()
  );
  if (secondRoundResult === 1) {
    playerScore++;
  } else if (secondRoundResult === 2) {
    computerScore++;
  }
  console.log({ playerScore, computerScore });

  const thirdRoundResult = playRound(
    prompt("Sellect between paper, rock ans seasors"),
    getComputerChoice().toLowerCase()
  );

  if (thirdRoundResult === 1) {
    playerScore++;
  } else if (thirdRoundResult === 2) {
    computerScore++;
  }
  console.log({ playerScore, computerScore });

  const forthRoundResult = playRound(
    prompt("Sellect between paper, rock ans seasors"),
    getComputerChoice().toLowerCase()
  );

  if (forthRoundResult === 1) {
    playerScore++;
  } else if (forthRoundResult === 2) {
    computerScore++;
  }
  console.log({ playerScore, computerScore });

  const fifthRoundResult = playRound(
    prompt("Sellect between paper, rock ans seasors"),
    getComputerChoice().toLowerCase()
  );

  if (fifthRoundResult === 1) {
    playerScore++;
  } else if (fifthRoundResult === 2) {
    computerScore++;
  }
  console.log({ playerScore, computerScore });

  if (computerScore > playerScore) {
    alert("Computer Won!");
  } else if (computerScore < playerScore) {
    alert("Player Won!");
  } else {
    alert("No one won!");
  }
}

game();
