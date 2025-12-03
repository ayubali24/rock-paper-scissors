'use strict';

// let number;
// let computerChoice = '';

let humanScore = 0;
let computerScore = 0;

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

function playRound (humanChoice, computerChoice) {
    const humanChoiceInsenstive = humanChoice.toLowerCase();

    if (humanChoiceInsenstive === computerChoice) {
        return "It's a draw!";
    } else if (humanChoiceInsenstive === "rock") {
        if (computerChoice === "paper") {
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${humanChoiceInsenstive}!`
        }
        humanScore += 1;
        return `You win! ${humanChoiceInsenstive} beats ${computerChoice}!`
        
    } else if (humanChoiceInsenstive === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${humanChoiceInsenstive}!`
        }
        humanScore += 1;
        return `You win! ${humanChoiceInsenstive} beats ${computerChoice}!`
    } else if (humanChoiceInsenstive === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${humanChoiceInsenstive}!`
        }
        humanScore += 1;
        return `You win! ${humanChoiceInsenstive} beats ${computerChoice}!`
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));