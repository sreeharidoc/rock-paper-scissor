var winner
function getComputerChoice(){
    const MAX = 3
    const choice = ["rock","paper","scissor"]
    let pick = Math.floor(Math.random() * MAX)
    return choice[pick]
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            winner = computerSelection;
            return "You Lose! " + computerSelection + " beats " + playerSelection
        }else if(computerSelection === "scissor"){
            winner = playerSelection
            return "You Win! " + playerSelection + " beats " + computerSelection
        }else{
            winner = null
            return "The game is a draw"
        }
    }else if (playerSelection === "paper"){
        if (computerSelection === "scissor"){
            winner = computerSelection
            return "You Lose! " + computerSelection + " beats " + playerSelection
        }else if(computerSelection === "rock"){
            winner = playerSelection
            return "You Win! " + playerSelection + " beats " + computerSelection
        }else{
            winner = null
            return "The game is a draw"        
        }
    }else if (playerSelection === "scissor"){
        if (computerSelection === "rock"){
            winner = computerSelection
            return "You Lose! " + computerSelection + " beats " + playerSelection
        }else if(computerSelection === "paper"){
            winner = playerSelection
            return "You Win! " + playerSelection + " beats " + computerSelection
        }else{
            winner = null
            return "The game is a draw"        
        }   
    }
}

function game(){
    let i = 0;
    let player_points = 0
    let computer_points = 0
    while (i < 5){
        let playerSelection = prompt("Enter your choice").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection))
        if (winner === playerSelection){
            player_points++
        }else if (winner === computerSelection){
            computer_points++
        }
        i++;
    }

    if (player_points > computer_points){
        return "Player Wins! " + "Player Points:" + player_points + " Computer Points:" + computer_points
    }else if (computer_points> player_points){
        return "Computer Wins " + "Computer Points:" + computer_points + " Player Points:" + player_points
    }else{
        return "The game ends in a draw " + "Player Points:" + player_points + " Computer Points:" + computer_points
    }
}
   
console.log(game())