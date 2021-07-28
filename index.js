const objectBtn = document.querySelectorAll('.objectbtn');
const results = document.querySelector('.results');

const resetBtn = document.querySelector('.playagain')

const objects = ["Rock", "Paper", "Scissors"]




// Player Choice
const rock = document.getElementById("Rock")
const paper = document.getElementById("Paper")
const scissors = document.getElementById("Scissors")


// click and play

    const playerSelection0 = rock.addEventListener('click', () => {
    game('Rock', computerSelection);
});

    const playerSelection1 = paper.addEventListener('click', () => {
    game('Paper', computerSelection);
});

    const playerSelection2 = scissors.addEventListener('click', () => {
    game('Scissors', computerSelection)
});


//Computer Choice
function computerPlay() {
    const compObject = objects[Math.floor(Math.random() * objects.length)]
    return compObject
}
const computerSelection = computerPlay()

let playerScore = 0;
let computerScore = 0;
results.textContent = playerScore;
results.textContent = computerScore;


    

function game(playerSelection, computerSelection) {
    //for (let i = 0; i < 5; i++) {
        //const playerSelection = prompt('Rock, Paper, or Scissors?')
        
        console.log(playerSelection)
        console.log(computerSelection)

        if (playerSelection === computerSelection) {
            results.textContent = `Tie - ${playerSelection} and ${computerSelection}, Player: ${playerScore} - Computer: ${computerScore}`
        } else if (playerSelection === 'Rock' && computerSelection === "Scissors") {
            playerScore++
            results.textContent = `Player Wins! ${playerSelection} beats ${computerSelection}, Player: ${playerScore} - Computer: ${computerScore}`
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore++
            results.textContent = `Player Wins! ${playerSelection} beats ${computerSelection}, Player: ${playerScore} - Computer: ${computerScore}`  
        }  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore++
            results.textContent = `Player Wins! ${playerSelection} beats ${computerSelection}, Player: ${playerScore} - Computer: ${computerScore}`
        } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
            computerScore++
            results.textContent =`Computer Wins! ${computerSelection} beats ${playerSelection}, Player: ${playerScore} - Computer: ${computerScore}`
        } else if (computerSelection === "Paper" && playerSelection === 'Rock') {
            computerScore++
            results.textContent= `Computer Wins! ${computerSelection} beats ${playerSelection}, Player: ${playerScore} - Computer: ${computerScore}`
        } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
            computerScore++
            results.textContent = `Computer Wins! ${computerSelection} beats ${playerSelection}, Player: ${playerScore} - Computer: ${computerScore}`
        }
        /* if (playerSelection === "Rock" && computerSelection === "Rock") {
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
        } */
    




        console.log(`Player's Score is ${playerScore}`)
        console.log(`Computer's Score is ${computerScore}`)
    }
    
    // Play Again
    resetBtn.addEventListener('click', () => location.reload());



