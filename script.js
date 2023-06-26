const btns = document.querySelectorAll("button");
const gameResult = document.querySelector(".game-result");
const scoreBoard = document.querySelector(".scoreboard");
let playerScore = 0;
let computerScore = 0;
let nextRound = false;
btns.forEach(button => {

    button.addEventListener("click", function (e) {
        if (nextRound == true){
            gameResult.innerHTML = "";
            nextRound = false;
        }
        const displayResult = document.createElement("div");
        displayResult.textContent = round(button.textContent, getComputerChoice());
        gameResult.appendChild(displayResult);
        findWinner();
        scoreBoard.textContent = `Player score: ${playerScore} \nComputer score: ${computerScore}`;
    });
});

function findWinner() {
    if (playerScore >= 5) {
        const showWinner = document.createElement("h1");
        showWinner.textContent = "Player wins!";
        gameResult.appendChild(showWinner);
        playerScore = 0;
        computerScore = 0;
    }

    else if (computerScore >= 5) {
        const showWinner = document.createElement("h1");
        showWinner.textContent = "Computer wins!";
        gameResult.appendChild(showWinner);
        playerScore = 0;
        computerScore = 0;   
    }
    nextRound = true;
}



function getComputerChoice() {
    let randomValue = Math.ceil(Math.random() * 3);
    if (randomValue == 1) {
        return "rock";
    }
    else if (randomValue == 2) {
        return "paper";
    }
    else if (randomValue == 3) {
        return "scissors";
    }
}


function round(playerChoice, computerChoice) {

    let formattedChoice = playerChoice.toLowerCase();


    //If user wins
    if (formattedChoice == "scissors" && computerChoice == "paper" || formattedChoice == "paper" && computerChoice == "rock" || formattedChoice == "rock" && computerChoice == "scissors") {
        playerScore++;
        return ("You win! " + formattedChoice + " beats " + computerChoice);
    }
    //If user loses
    else if (formattedChoice == "paper" && computerChoice == "scissors" || formattedChoice == "rock" && computerChoice == "paper" || formattedChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return ("You lose. " + formattedChoice + " loses to " + computerChoice);
    }
    else if (formattedChoice == computerChoice) {
        return ("Draw!");
    }
    else {
        return ("Not a valid input.");
    }
}



