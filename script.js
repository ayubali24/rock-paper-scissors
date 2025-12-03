'use strict';

// let number;
// let computerChoice = '';

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const humanChoiceLowerCase = humanChoice.toLowerCase();

        if (humanChoiceLowerCase === computerChoice) {
            return "It's a draw!";
        } else if (humanChoiceLowerCase === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1;
                return `You lose! ${computerChoice} beats ${humanChoiceLowerCase}!`
            }
            humanScore += 1;
            return `You win! ${humanChoiceLowerCase} beats ${computerChoice}!`

        } else if (humanChoiceLowerCase === 'paper') {
            if (computerChoice === 'scissors') {
                computerScore += 1;
                return `You lose! ${computerChoice} beats ${humanChoiceLowerCase}!`
            }
            humanScore += 1;
            return `You win! ${humanChoiceLowerCase} beats ${computerChoice}!`
        } else if (humanChoiceLowerCase === 'scissors') {
            if (computerChoice === 'rock') {
                computerScore += 1;
                return `You lose! ${computerChoice} beats ${humanChoiceLowerCase}!`
            }
            humanScore += 1;
            return `You win! ${humanChoiceLowerCase} beats ${computerChoice}!`
        }
    }

    for (let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Human score: ${humanScore}, Computer Score: ${computerScore}`);
    }

    console.log((humanScore > computerScore) ? `You win with a score of: ${humanScore}!!` : `Computer wins with a score of: ${computerScore}!!`)
}


function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice () {
    let humanChoiceInput = prompt("Choose; rock, paper, or scissors");
    return humanChoiceInput;
}

playGame();