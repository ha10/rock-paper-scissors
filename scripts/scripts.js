  // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
  var options = ["r", "p", "s"];
  var computerScore = 0;
  var userScore = 0;
  var tieScore = 0;
  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) {
    // Determines which key was pressed
    var userGuess = event.key;
    // Alerts the key the user pressed (userGuess).
    console.log(userGuess);
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = options[Math.floor(Math.random() * options.length)];
    // Alerts the Computer's guess.
    console.log(computerGuess);

    // if (userGuess === options.indexOf(-1))

    //bands.indexOf() === -1
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
      // replace the tie comparisons with indexOf()
      if (  (userGuess === "r" && computerGuess === "r") ||
            (userGuess === "s" && computerGuess === "s") ||
            (userGuess === "p" && computerGuess === "p")) {
        tieScore++;
        console.log("TIE TIE");
      } else if (userGuess === "r" && computerGuess === "s") {
        userScore++;
      } else if (userGuess === "r" && computerGuess === "p") {
        computerScore++;
      } else if (userGuess === "s" && computerGuess === "r") {
        computerScore++;
      } else if (userGuess === "s" && computerGuess === "p") {
        userScore++;
      } else if (userGuess === "p" && computerGuess === "r") {
        userScore++;
      } else if (userGuess === "p" && computerGuess === "s") {
        computerScore++;
      }
      console.log("User Score = " + userScore);
      console.log("Computer Score = " + computerScore);
      console.log("Tie Score = " + tieScore);

      var html = "<h3>You: " + userGuess +
      " Computer: " + computerGuess + "</h3>" +
      "<h3>Wins: " + userScore + "</h3>" +
      "<h3>Losses: " + computerScore + "</h3>" +
      "<h3>Ties: " + tieScore + "</h3>";
      document.querySelector("#game").innerHTML = html;
    }
  };


  var buttonPress = function(buttonValue) {
    var userGuess = buttonValue;
    console.log(userGuess);

    var computerGuess = options[Math.floor(Math.random() * options.length)];
    console.log(computerGuess);

    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
      if (  (userGuess === "r" && computerGuess === "r") ||
            (userGuess === "s" && computerGuess === "s") ||
            (userGuess === "p" && computerGuess === "p")) {
        tieScore++;

      } else if (userGuess === "r" && computerGuess === "s") {
        userScore++;
      } else if (userGuess === "r" && computerGuess === "p") {
        computerScore++;
      } else if (userGuess === "s" && computerGuess === "r") {
        computerScore++;
      } else if (userGuess === "s" && computerGuess === "p") {
        userScore++;
      } else if (userGuess === "p" && computerGuess === "r") {
        userScore++;
      } else if (userGuess === "p" && computerGuess === "s") {
        computerScore++;
      }
      console.log("User Score = " + userScore);
      console.log("Computer Score = " + computerScore);
      console.log("Tie Score = " + tieScore);

      var html = "<h3>You: " + userGuess +
      " Computer: " + computerGuess + "</h3>" +
      "<h3>Wins: " + userScore + "</h3>" +
      "<h3>Losses: " + computerScore + "</h3>" +
      "<h3>Ties: " + tieScore + "</h3>";
      document.querySelector("#game").innerHTML = html;
    }
  };

  $("#rockClick").click(function(){
    buttonPress("r");
  });
  $("#paperClick").click(function(){
    buttonPress("p");
  });
  $("#scissorClick").click(function(){
    buttonPress("s");
  });
