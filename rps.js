let playGame = confirm("Shall we play RPS?");

if (playGame) {
  let playerChoice = prompt("Enter your choice:");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "Tie Game"
          : (playerOne === "rock" && computer === "paper") ||
            (playerOne === "paper" && computer === "scissors") ||
            (playerOne === "scissors" && computer === "rock")
          ? "Computer wins. :("
          : "Player wins!";

      alert(
        `Computer chose ${computer}, player chose ${playerOne}.\n${result}`
      );
    } else {
      alert("enter rock paper or scissors");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, bye.");
}
