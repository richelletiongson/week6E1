const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function CheckDrinkingAge(age){
    if (age <13) {
      console.log("Leave!");
    } else if (age >= 13 && age < 19) {
      console.log("Grow up to be 19.")
    } else if (age >= 19 && age <= 50) {
      console.log("Drink away!")
    } else if (age > 50 && age <=70) {
      console.log("Watch your health.")
    } else if (age > 70) {
      console.log("Watch you health and life.")
    } else {
      console.log ("Invalid age.")
    }
  }

  readline.question('How old are you? ', userAge => {
  
    CheckDrinkingAge ();
    
      readline.close();
    });
