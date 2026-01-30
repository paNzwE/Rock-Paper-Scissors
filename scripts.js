let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

function getComputerChoice() {
const random = Math.floor(Math.random() * 3) + 1;
let randomChoice ;
if (random === 1) {
   randomChoice = "rock" ;
} else if (random === 2){
   randomChoice = "paper";
} else {
    randomChoice =  "scissors";
}
return randomChoice;
}


function getHumanChoice() {
const personChoice = prompt("Please enter your choice!", "")
const checkPersonChoice = personChoice.toLowerCase();
return checkPersonChoice;

}


function playRound(checkPersonChoice, randomChoice){ 
if ( checkPersonChoice === randomChoice) {
    resultsDiv.textContent = "Its a draw!";
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}   else if ((checkPersonChoice === "paper" && randomChoice === "rock") ||
    (checkPersonChoice === "rock" && randomChoice === "scissors") ||
    (checkPersonChoice === "scissors" && randomChoice === "paper")){
        resultsDiv.textContent = "You won!";
        humanScore++;
        scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    } else {
        resultsDiv.textContent = "You lose! ";
        computerScore++;
        scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    }

    if (humanScore === 5){
    resultsDiv.textContent = "You won the game!";
} else if (computerScore === 5){
    resultsDiv.textContent = "Computer won the game!";
} 
} 
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.textContent = "Rock";
document.body.appendChild(rockBtn);

paperBtn.textContent = "Paper";
document.body.appendChild(paperBtn);

scissorsBtn.textContent = "Scissors";
document.body.appendChild(scissorsBtn);


rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    console.log("Human choose: rock");
    console.log("computer choose:", getComputerChoice());
});
 
paperBtn.addEventListener("click", () => {
     playRound("paper", getComputerChoice());
    console.log("Human choose: paper");
    console.log("computer choose:", getComputerChoice());
});
 
scissorsBtn.addEventListener("click", () => {
     playRound("scissors", getComputerChoice());
    console.log("Human choose: scissors");
    console.log("computer choose:", getComputerChoice());
}); 






















