$(document).ready(function() {
  
   //Declare global variables
    var numberWins,   // # of wins
        numberGuesses,  // # of remaining guesses
        myHints,  //Display hints
        guesses,
        guesses2,
        replay, //Clear and restart game
        word = "";   // selected word


      //Create array of the alphabet 
      var letters = ["A", "B", "C", "D", "E", "F", "G",
      "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
      "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

      var words = ["WINBLEDON", "ROLAND GARROS", "US OPEN"];

      
      //Creating a for-loop to iterate through the letters array
      for (var i = 0; i < letters.length; i++ ) {
        console.log("loop", i );
        var myLetters = $("<button>")
            .addClass('btn btn-info')
            .attr("data-letter", letters[i])
            .text(letters[i])
            .appendTo('#buttons') 
            .on('click', onClick);

      function onClick() {
            console.log(this)
          var guessedLetter = $("#word")
              .addClass("h3")
              .text($(this).attr("data-letter"))
              .appendTo("#word");
        }
    }

    result = function () {
      placeHolder = document.getElementById("myWord");
      correct = document.createElement("ul");

      for (var i = 0; i < word.length; i++){
      correct.setAttribute("id", "my-Word");
      guesses = document.createElement("li");
      guesses.setAttribute("class", "guesses");

      if (word[i] === "-"){
        guesses.innerHTML = "-";
        space = 1;
      } else {
        guesses.innerHTML = "_"
      }

      guesses2.push(guesses);
      placeHolder.appendChild(correct);
      correct.appendChild(guesses);
      }
    }
});