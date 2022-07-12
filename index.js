// computer selection of rock paper Scissor
// Single round of rock ... 
// 5 round that record and keeps score and reports who the winner is at last

function computerPlay() 
{
    var items = ["rock", "paper", "scissors"];

    var item = items[Math.floor(Math.random() * items.length)];

    return item;
}

let computerSelection = computerPlay();

let playerSelectionPrompt = prompt("Inter your choice of rock paper or scissors");
let playerSelection = playerSelectionPrompt.toLocaleLowerCase();
function playRound(playerSelection, computerSelection) 
{
    if(computerSelection == "rock" && playerSelection == "rock")
    {
        console.log("You make the same choice.Do it again!");
        computerSelection = computerPlay();
        playerSelectionPrompt = prompt("Inter your choice of rock paper or scissors");
        playRound(playerSelection, computerSelection);
    }
    else if(computerSelection == "rock" && playerSelection == "paper")
    {
        console.log("You Win! Paper beats Rock");
    }
    else if(computerSelection == "rock" && playerSelection == "scissors")
    {
        console.log("You Lose! Rock beats Scissors");
    }
    else if(computerSelection == "paper" && playerSelection == "paper")
    {
        console.log("You make the same choice.Do it again!");
        computerSelection = computerPlay();
        playerSelectionPrompt = prompt("Inter your choice of rock paper or scissors");
        playRound(playerSelection, computerSelection);
    }
    else if(computerSelection == "paper" && playerSelection == "rock")
    {
        console.log("You Lose! Paper beats Rock");
    }
    else if(computerSelection == "paper" && playerSelection == "scissors")
    {
        console.log("You Win! Scissors beats Paper");
    }
    else if(computerSelection == "scissors" && playerSelection == "scissors")
    {
        console.log("You make the same choice.Do it again!");
        computerSelection = computerPlay();
        playerSelectionPrompt = prompt("Inter your choice of rock paper or scissors");
        playRound(playerSelection, computerSelection);
    }
    else if(computerSelection == "scissors" && playerSelection == "paper")
    {
        console.log("You Lose! Scissors beats Paper");
    }
    else if(computerSelection == "scissors" && playerSelection == "rock")
    {
        console.log("You Win! Rock beats Scissors");
    } else {
        console.log(computerSelection);
    }
  }

//   playRound(playerSelection, computerSelection);

for (let i = 0; i < 5; i++) 
{
    let report;
    computerSelection = computerPlay();
    playerSelectionPrompt = prompt("Inter your choice of rock paper or scissors");
    report += playRound(playerSelection, computerSelection);
    console.log(report);
}
























