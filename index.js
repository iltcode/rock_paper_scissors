// computer selection of rock paper Scissor
// Single round of rock ... 
// 5 round that record and keeps score and reports who the winner is at last

function computerPlay() 
{
    var items = ["rock", "paper", "scissors"];

    var item = items[Math.floor(Math.random() * items.length)];

    return item;
}

let computerSelection;

let playerSelectionPrompt;
let playerSelection;


function playRound(playerSelection, computerSelection) 
{
    if(computerSelection == "rock" && playerSelection == "rock")
    {
        console.log("You make the same choice.Do it again!");
        return "equal";
    }
    else if(computerSelection == "rock" && playerSelection == "paper")
    {
        console.log("You Win! Paper beats Rock");
        return "win";
    }
    else if(computerSelection == "rock" && playerSelection == "scissors")
    {
        console.log("You Lose! Rock beats Scissors");
        return "lose";
    }
    else if(computerSelection == "paper" && playerSelection == "paper")
    {
        console.log("You make the same choice.Do it again!");
        return "equal";
    }
    else if(computerSelection == "paper" && playerSelection == "rock")
    {
        console.log("You Lose! Paper beats Rock");
        return "lose";
    }
    else if(computerSelection == "paper" && playerSelection == "scissors")
    {
        console.log("You Win! Scissors beats Paper");
        return "win";
    }
    else if(computerSelection == "scissors" && playerSelection == "scissors")
    {
        console.log("You make the same choice.Do it again!");
        return "equal";
    }
    else if(computerSelection == "scissors" && playerSelection == "paper")
    {
        console.log("You Lose! Scissors beats Paper");
        return "lose";
    }
    else if(computerSelection == "scissors" && playerSelection == "rock")
    {
        console.log("You Win! Rock beats Scissors");
        return "win";
    } else {
        console.log(computerSelection);
    }
  }




function game()
{
    
    let scoreComputer = 0;
    let scorePlayer = 0;
    
    for (let i = 0; i < 5; i++) 
    {
        let report;
        
        computerSelection = computerPlay();
        playerSelectionPrompt = prompt("Inter your choice of rock paper or scissors");
        playerSelection = playerSelectionPrompt.toLowerCase();
        report = playRound(playerSelection, computerSelection);
        console.log(report);
        if(report == "win")
        {
            scorePlayer++;
            
        }else if (report == "lose")
        {
            scoreComputer++;
        }
    }

    if(scoreComputer > scorePlayer)
    {
        console.log("You Lose!" + scoreComputer + scorePlayer);
    }
    else if(scoreComputer < scorePlayer)
    {
        console.log("You Win!" + scoreComputer + scorePlayer);
    }else{
        console.log("Play again you are equal" + scoreComputer + scorePlayer);
    }
}



game();



















