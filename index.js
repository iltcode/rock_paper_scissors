// computer selection of rock paper Scissor
// Single round of rock ... 
// 5 round that record and keeps score and reports who the winner is at last

function computerPlay() 
{
    var items = ["rock", "paper", "scissors"];

    var item = items[Math.floor(Math.random() * items.length)];

    return item;
}

// let computerSelection;

// let playerSelectionPrompt;
// let playerSelection;

let computerSelection = computerPlay();
// let playerSelectionPrompt = prompt("Inter your choice of rock paper or scissors");
// let playerSelection = playerSelectionPrompt.toLowerCase();


function playRound(playerSelection, computerSelection) 
{
    if(computerSelection == "rock" && playerSelection == "rock")
    {
        console.log("You make the same choice.Do it again!");
        document.querySelector(".display").textContent = "  You make the same choice.Do it again!";
        return "equal";
    }
    else if(computerSelection == "rock" && playerSelection == "paper")
    {
        console.log("You Win! Paper beats Rock");
        document.querySelector(".display").textContent ="  You Win! Paper beats Rock";
        return "win";
    }
    else if(computerSelection == "rock" && playerSelection == "scissors")
    {
        console.log("You Lose! Rock beats Scissors");
        document.querySelector(".display").textContent ="  You Lose! Rock beats Scissors";
        return "lose";
    }
    else if(computerSelection == "paper" && playerSelection == "paper")
    {
        console.log("You make the same choice.Do it again!");
        document.querySelector(".display").textContent ="  You make the same choice.Do it again!";
        return "equal";
    }
    else if(computerSelection == "paper" && playerSelection == "rock")
    {
        console.log("You Lose! Paper beats Rock");
        document.querySelector(".display").textContent ="  You Lose! Paper beats Rock";
        return "lose";
    }
    else if(computerSelection == "paper" && playerSelection == "scissors")
    {
        console.log("You Win! Scissors beats Paper");
        document.querySelector(".display").textContent ="  You Win! Scissors beats Paper";
        return "win";
    }
    else if(computerSelection == "scissors" && playerSelection == "scissors")
    {
        console.log("You make the same choice.Do it again!");
        document.querySelector(".display").textContent ="  You make the same choice.Do it again!";
        return "equal";
    }
    else if(computerSelection == "scissors" && playerSelection == "paper")
    {
        console.log("You Lose! Scissors beats Paper");
        document.querySelector(".display").textContent ="  You Lose! Scissors beats Paper";
        return "lose";
    }
    else if(computerSelection == "scissors" && playerSelection == "rock")
    {
        console.log("You Win! Rock beats Scissors");
        document.querySelector(".display").textContent ="  You Win! Rock beats Scissors";
        return "win";
    } else {
        console.log(computerSelection);
    }
  };


    let scoreComputer = 0;
    let scorePlayer = 0;
    let trucker = 0;

function game(playerSelection, computerSelection)
{
    
    if(trucker < 5)
    {
            let report;
            report = playRound(playerSelection, computerSelection);
            console.log(report);
            if(report == "win")
            {
                scorePlayer++;
                trucker++;
                document.querySelector(".score_player").textContent = "   " + scorePlayer;
                
            }else if (report == "lose")
            {
                scoreComputer++;
                trucker++;
                document.querySelector(".score_comp").textContent = "   " + scoreComputer;
            }
    } else if(trucker == 5)
    {
            if(scoreComputer > scorePlayer)
            {
                console.log("You Lose!" + scoreComputer + scorePlayer);
                document.querySelector(".winner").textContent = "You Lose!";
            }
            else if(scoreComputer < scorePlayer)
            {
                console.log("You Win!" + scoreComputer + scorePlayer);
                document.querySelector(".winner").textContent = "You Win!";
            }else{
                console.log("Play again you are equal" + scoreComputer + scorePlayer);
                document.querySelector(".winner").textContent = "Play again you are equal";
            }
    }
    
        
 }



function resit()
{
    scoreComputer = 0;
    scorePlayer = 0;
    trucker = 0;
    document.querySelector(".display").textContent ="";
    document.querySelector(".score_comp").textContent ="";
    document.querySelector(".score_player").textContent ="";
    document.querySelector(".winner").textContent ="";
}




const rockBtn = document.querySelector('#r');
// rockBtn.addEventListener('click', playRound("rock", computerSelection));
// the above playRound function is not working use the below way!!!

rockBtn.addEventListener('click', () => {
    game("rock", computerSelection);
});

const paperBtn = document.querySelector('#p');
paperBtn.addEventListener('click', () => {
    game("paper", computerSelection);
});

const scissorBtn = document.querySelector('#s');
scissorBtn.addEventListener('click', () => {
    game("scissors", computerSelection);
});

const restBtn = document.querySelector('#rest');
restBtn.addEventListener('click', () => {
    resit();
});











