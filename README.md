# rock-paper-scissors
🪨📄✂️ Rock Paper Scissors (Console Version)

A simple Rock Paper Scissors game built as part of The Odin Project – Foundations Course.
This version of the game runs entirely in the browser console, using JavaScript to handle user input, play rounds, and track scores.

📌 Project Overview

- The goal of this project is to practice:

- Writing basic JavaScript functions

- Using prompt() for user input

- Randomizing computer choices

- Using conditionals and game logic

- Keeping score over multiple rounds

- Logging results in the console

- Structuring code inside functions

- Following a simple problem-solving workflow

- This is the first JavaScript project built from scratch in the Foundations course.

🧠 How the Game Works

- The computer randomly selects rock, paper, or scissors.

- The human player enters a choice using a prompt().

- The game compares both choices, determines the winner, and updates the score.

- A total of 5 rounds are played.

- At the end, the game logs the final winner based on the score.

- Everything happens inside the browser console, with no graphical interface yet.

🗂️ Project Structure
```
index.html
script.js
README.md
```

- index.html links the external JavaScript file.

- script.js contains all game logic.

- No additional UI code is required at this stage.

🧩 Features Implemented

- getComputerChoice()
    - Returns "rock", "paper", or "scissors" at random.

- getHumanChoice()
    - Gets the player’s input using prompt().

- playRound(humanChoice, computerChoice)
    - Determines the winner of one round and updates scores.

- playGame()

    - Plays 5 rounds, logs the results of each, and announces the final winner.

📝 Notes

- This version assumes the user always enters a valid choice.

- There is no GUI yet — that will be added in a later lesson.

- Code is written with readability and step-by-step logic in mind.

- Commit early and often!