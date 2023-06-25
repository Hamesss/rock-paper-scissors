function getComputerChoice(){
    let randomValue = Math.ceil(Math.random() * 3); 
    if (randomValue == 1){
        return "rock";
    }
    else if (randomValue == 2){
        return "paper";
    }
    else if (randomValue == 3){
        return "scissors";
    }
}
//Scissors beats paper, paper beats scissors, rock 
function game(){
    for (let i = 0; i < 5; i++){
        console.log(round(prompt("Enter your choice."), getComputerChoice()));
    }
    function round(playerChoice, computerChoice){
        
        let formattedChoice = playerChoice.toLowerCase();
        
        console.log("You played: " + formattedChoice);
        console.log("Computer played: " + computerChoice);
        //If user wins
        if (playerChoice == "scissors" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "rock" && computerChoice == "scissors"){
            return ("You win! " + playerChoice + " beats " + computerChoice);
        }
        //If user loses
        else if (playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "rock" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "rock"){
            return ("You lose. " + playerChoice + " loses to " + computerChoice);
        }
        else if (formattedChoice == computerChoice){
         return ("Draw!");   
        }
        else{
            return ("Not a valid input.");
        }
    }
}

game();
