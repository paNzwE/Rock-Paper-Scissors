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
console.log(getComputerChoice());

function getHumanChoice() {
let personChoice = prompt("Please enter your choice!", "")
return personChoice;

}
console.log(getHumanChoice());




