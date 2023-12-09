var winner
let player_points = 0
let computer_points =0
function getComputerChoice(){
    const MAX = 3
    const choice = ["rock","paper","scissor"]
    let pick = Math.floor(Math.random() * MAX)
    return choice[pick]
}

var playerSelection


function playRound(playerSelection,computerSelection) {
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

const body = document.querySelector("body")

const div = document.createElement("div")
div.classList.add("first-div")

const rockButton = document.createElement("button")
rockButton.classList.add("rock-button")
rockButton.textContent = "Rock"

const paperButton = document.createElement("button")
paperButton.classList.add("paper-button")
paperButton.textContent = "Paper"

const scissorButton = document.createElement("button")
scissorButton.classList.add("scissor-button")
scissorButton.textContent = "Scissor"


rockButton.addEventListener("click", function () {
    playerSelection = "rock"
    game()
}) 
paperButton.addEventListener("click", function(){
    playerSelection = "paper"
    game()
})
scissorButton.addEventListener("click",function(){
    playerSelection = "scissor"
    game()
})

const resultDiv = document.createElement("div")
resultDiv.classList.add("result-div")

const result = document.createElement("p")
result.classList.add("result")

const playerPoints = document.createElement("p")
playerPoints.classList.add("result")

const computerPoints = document.createElement("p")
computerPoints.classList.add("result")

const final = document.createElement("p")
final.classList.add("result")

div.append(rockButton)
div.append(paperButton)
div.append(scissorButton)
resultDiv.append(result)
resultDiv.append(playerPoints)
resultDiv.append(computerPoints)
resultDiv.append(final)
body.appendChild(div)
body.appendChild(resultDiv)


function game(){
    final.textContent = ""
    const computerSelection = getComputerChoice();
    champion = playRound(playerSelection,computerSelection)
    result.textContent = champion
    if (winner === playerSelection){
    player_points++
    }else if (winner === computerSelection){
    computer_points++
    }
    playerPoints.textContent = "Player Points : " + player_points
    computerPoints.textContent = "Computer Points : " + computer_points

    if (player_points === 5 ){
        final.textContent = "You Win! Player Points :" + player_points + " Computer Points :" + computer_points
        player_points = 0 
        computer_points =0
    }else if(computer_points === 5){
        final.textContent = "Computer Wins! Computer Points :" + computer_points + " Player Points :" + player_points
        player_points = 0 
        computer_points =0       
    }
}

