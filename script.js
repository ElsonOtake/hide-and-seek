let playerCount = 0;
let computerCount = 0;
let result;
let playerSelection;
let state = document.getElementById("state");
let score = document.getElementById("score");
let selection = document.getElementById("btn-rps");
selection.addEventListener('click', function(e) {
    playerSelection = e.target.textContent;
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    state.innerText = result;
    if (result.slice(0, 2) === "Yo") {
        playerCount += 1;
        score.firstElementChild.textContent = playerCount;
    } else if (result.slice(0, 2) === "I") {
        computerCount += 1;
        score.lastElementChild.textContent = computerCount;
    }
    if (playerCount > 4 || computerCount > 4) {
        if (playerCount > computerCount) {
            state.innerText = "You win the game.";
        } else {
            state.innerText = "I win the game.";
        }
        for (let i = 0; i < selection.childElementCount; i++) {
            selection.children[i].disabled = true;
        }
    }
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tied. Play again.";
  }
  if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Scissors" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Rock")) {
    return "You win. " + playerSelection + " beats " + computerSelection;
  }
  else {
    return "I win. " + computerSelection + " beats " + playerSelection;
  }
}
function computerPlay() {
  const num = Math.floor(Math.random() * 3);
  switch(num) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scisors";
  }
}