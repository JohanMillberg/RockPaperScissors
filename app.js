const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

const capitalizeWord = (word) => {
    return word[0].toUpperCase() + word.slice(1);
}

const playRound = (playerInput, computerChoice) => {

    const resultString = (outcome) => {
        if (outcome === 0) {
            return `You lose! ${capitalizeWord(computerChoice)} beats ${playerInput}.`;
        } else {
            return `You win! ${capitalizeWord(playerInput)} beats ${computerChoice}.`;
        }
    }

    if (playerInput === computerChoice) {
        return "Tie game!";
    }

    if (playerInput === "rock") {
        return computerChoice === "paper" ? resultString(0) : resultString(1);

    } else if (playerInput === "paper") {
        return computerChoice === "scissors" ? resultString(0) : resultString(1);

    } else if (playerInput === "scissors") {
        return computerChoice === "rock" ? resultString(0) : resultString(1);

    } else {
        return "Invalid player input."
    }
}

const game = (roundAmount) => {
    for (let i = 0; i < roundAmount; i++) {
        const playerInput = prompt("What do you choose?").toLowerCase();
        const computerChoice = getComputerChoice();

        console.log(playRound(playerInput, computerChoice))
    }
}

game(5)