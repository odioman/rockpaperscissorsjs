function computerPlay() {
    const objects = ["Rock", "Paper", "Scissors"]
    const compObject = objects[Math.floor(Math.random() * objects.length)]
    console.log(compObject);
    return compObject
}

let playerScore = 0;
let computerScore = 0;



    

function game(playerSelection, computerSelection) {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?')
        console.log(playerSelection)
        
        const computerSelection = computerPlay();

        
        if (playerSelection === "Rock" && computerSelection === "Rock") {
            console.log("Tied")
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            console.log("Tied")
        } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            console.log("Tied")
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            playerScore++
            console.log(`Player Wins! ${playerSelection} beats ${computerSelection}`)
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore++
            console.log(`Player Wins! ${playerSelection} beats ${computerSelection}`)
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore++
            console.log(`Player Wins! ${playerSelection} beats ${computerSelection}`)
        } else {
            computerScore++
            console.log(`Computer Wins! ${computerSelection} beats ${playerSelection}`)
        }
    




        console.log(`Player's Score is ${playerScore}`)
        console.log(`Computer's Score is ${computerScore}`)
    }
}

game();