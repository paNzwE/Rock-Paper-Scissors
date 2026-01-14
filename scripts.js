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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Human:", humanSelection);
console.log("Computer:", computerSelection);

playRound(humanSelection, computerSelection);




