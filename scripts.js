let humanScore = 0;
let computerScore = 0;

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
    console.log("Its a draw!")
}   else if ((checkPersonChoice === "paper" && randomChoice === "rock") ||
    (checkPersonChoice === "rock" && randomChoice === "scissors") ||
    (checkPersonChoice === "scissors" && randomChoice === "paper")){
        console.log("You won!");
        humanScore++;
    } else {
        console.log("You lose! ");
        computerScore++;
    }
} 
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.addEventListener("click", () => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)});
 
paperBtn.addEventListener("click", () => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
     playRound(humanSelection, computerSelection)});
 
scissorsBtn.addEventListener("click", () => {
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();
     playRound(humanSelection, computerSelection)}); 

     
 console.log ("FINAL SCORE IS:")
 console.log("Human score is:", humanScore);
 console.log("Computer score is:", computerScore);


playGame();




