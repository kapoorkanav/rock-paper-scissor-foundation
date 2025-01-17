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
        else if("scissors"){
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

function playGame(){
    humanScore=0;
    computerScore=0;
    for(let i=0;i<5;i++){
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("AFTER ALL THE ROUNDS")
    if(humanScore>computerScore){
        console.log("You win");
    }
    else if(humanScore<computerScore){
        console.log("You lose");
    }
    else{
        console.log("It's a tie");
    }
}
