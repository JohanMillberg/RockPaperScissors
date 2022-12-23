const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

const capitalizeWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
}

const playRound = (playerInput, computerChoice) => {
    const playerScore = document.querySelector(".score-number-player");
    const computerScore = document.querySelector(".score-number-computer");
    const resultText = document.querySelector(".result-text");

    if (document.querySelector(".result-board").style['background-color'] != "white") {
        document.querySelector(".result-board").style['background-color'] = "white"
    }

    const resultString = (outcome) => {
        if (outcome === 0) {
            computerScore.textContent = String(parseInt(computerScore.textContent) + 1)
            return `You lose! ${capitalizeWord(computerChoice)} beats ${playerInput}.`;
        } else {
            playerScore.textContent = String(parseInt(playerScore.textContent) + 1)
            return `You win! ${capitalizeWord(playerInput)} beats ${computerChoice}.`;
        }
    }

    if (playerInput === computerChoice) {
        resultText.textContent = "Tie game!";
    } else if (playerInput === "rock") {
        resultText.textContent = computerChoice === "paper" ? resultString(0) : resultString(1);

    } else if (playerInput === "paper") {
        resultText.textContent = computerChoice === "scissors" ? resultString(0) : resultString(1);

    } else if (playerInput === "scissors") {
        resultText.textContent = computerChoice === "rock" ? resultString(0) : resultString(1);

    } else {
        resultText.textContent = "Invalid player input.";
    }

    winCondition(parseInt(playerScore.textContent), parseInt(computerScore.textContent))
}

const winCondition = (playerScore, computerScore) => {

    if (playerScore === 10) {
        document.querySelector(".result-board").style['background-color'] = "green";
        document.querySelector(".result-text").textContent = "You win! Congratulations!";
        initGame();
    } else if (computerScore === 10) {
        document.querySelector(".result-board").style['background-color'] = "red";
        document.querySelector(".result-text").textContent = "You lose, better luck next time!";
        initGame();
    }
}

const initGame = () => {
    let playerScore = 0;
    let computerScore = 0;

    const computerScoreTally = document.querySelector(".score-number-computer");
    computerScoreTally.textContent = String(playerScore);

    const playerScoreTally = document.querySelector(".score-number-player");
    playerScoreTally.textContent = String(computerScore);
}

const game = (roundAmount) => {
    for (let i = 0; i < roundAmount; i++) {
        const playerInput = prompt("What do you choose?").toLowerCase();
        const computerChoice = getComputerChoice();

        console.log(playRound(playerInput, computerChoice));
    }
}

const addOnClick = (actionButtonName) => {
    const button = document.querySelector(`.${actionButtonName}`);
    button.addEventListener("click", function() {playRound(actionButtonName, getComputerChoice())});
}

addOnClick("rock");
addOnClick("paper");
addOnClick("scissors");

initGame();