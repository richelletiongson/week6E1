const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
/* 
if function - guess is bigger than answer "too big"
else if function - guess is smaller than answer "too small"
else function - 

*/
  function GuessingGame(answer, guess) {
    if (guess > answer) {
        console.log("Too big!");
    } else if (guess < answer) {
        console.log("Too small!");
    } else {
        console.log("You win!");
    }
  }
  
  readline.question("What is the answer?", (userAnswer) => {
  
   
    function StartGame() {
  

      readline.question("What is your guess? ", (userGuess) => {
        
        GuessingGame();
  
        if (userGuess === "quit") {
          readline.close();
        } else {
          StartGame();
        }
      });
    }
  
    StartGame();
  });