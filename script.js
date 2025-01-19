let humanScore=0;
let computerScore=0;
function getComputerChoice(){
    let randomNumber=Math.random()
    if(randomNumber<1/3){
        return "rock";
    }
    else if(randomNumber<2/3){
        return "paper";
    }
    return "scissors";
}

function getHumanChoice(){
    let choice=prompt("enter rock paper or scissors");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice=="rock"){
        if(computerChoice=="paper"){
            computerScore++;
            console.log("You lose");
        }
        else if(computerChoice=="scissors"){
            humanScore++;
            console.log("You win");
        }
        else{
            console.log("It's a tie");
        }
    }
    else if(humanChoice=="scissors"){
        if(computerChoice=="rock"){
            computerScore++;
            console.log("You lose");
        }
        else if(computerChoice=="paper"){
            humanChoice++;
            console.log("You win");
        }
        else{
            console.log("Its a tie");
        }
    }
    else{
        if(computerChoice=="rock"){
            humanScore++;
            console.log("You win");
        }
        else if(computerChoice=="scissors"){
            computerScore++;
            console.log("You lose");
        }
        else{
            console.log("It's a tie");
        }
    }
}

const player=document.getElementById("player");
const computer=document.getElementById("computer");
function updateScoreboard(){
    console.log("updating");
    if(humanScore==5){
        humanScore=0;
        computerScore=0;
        alert("human, you have won");
    }
    if(computerScore==5){
        humanScore=0;
        computerScore=0;
        alert("human, you have lost");
    }
    player.textContent=humanScore;
    computer.textContent=computerScore;
}

const rockClick=document.getElementById("rock");
const paperClick=document.getElementById("paper");
const scissorsClick=document.getElementById("scissors");
rockClick.addEventListener("click", ()=>{
    const computerPlays=getComputerChoice();
    playRound("rock", computerPlays);
    updateScoreboard();
});
paperClick.addEventListener("click", ()=>{
    const computerPlays=getComputerChoice();
    playRound("paper", computerPlays);
    updateScoreboard();
});
scissorsClick.addEventListener("click", ()=>{
    const computerPlays=getComputerChoice();
    playRound("scissors", computerPlays);
    updateScoreboard();
});
