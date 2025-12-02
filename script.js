'use strict';

// let number;
// let computerChoice = '';
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return "rock"
    } else if (number === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice () {
    let humanChoice = prompt("Choose; rock, paper, or scissors");
    return humanChoice;
}


