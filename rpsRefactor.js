let playGame = confirm("Shall we play RPS?");
let wins = 0;
let losses = 0;
let ties = 0;

if (playGame) {

  while (playGame) {
    const playerChoice = prompt("Enter your choice:");

    if (playerChoice) {
      const playerOne = playerChoice.trim().toLowerCase();
      const rpsArray = ["rock", "paper", "scissors"];

      if (rpsArray.includes(playerOne)) {
        let computerChoice = Math.floor(Math.random() * 3);
        let computer = rpsArray[computerChoice];

        let result =
          playerOne === computer
            ? "Tie Game"
            : (playerOne === "rock" && computer === "paper") ||
              (playerOne === "paper" && computer === "scissors") ||
              (playerOne === "scissors" && computer === "rock")
            ? "Computer wins. :("
            : "Player wins!";

        result.includes("Player") ? (wins++) : result.includes("Computer") ? (losses++) : (ties++);
        

        alert(
          `Computer chose ${computer}, player chose ${playerOne}.\n${result}`
        );
        playGame = confirm("Play again?");
        continue;
      } else {
        alert("enter rock paper or scissors");
        continue;
      }
    } else {
      alert("I guess you changed your mind. Maybe next time.");
      break;
    }
  }
} else {
  alert("Ok, bye.");
}

alert(`\nYour record was ${wins}-${losses}-${ties}`);