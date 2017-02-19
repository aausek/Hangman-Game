$(document).ready(function() {
	
 	 //Declare global variables
    var numberWins,   // # of wins
        numberGuesses,  // # of remaining guesses
        myHints,  //Display hints
        replay,	//Clear and restart game
        word = "";   // selected word


      //Create array of the alphabet 
      var letters = ["A", "B", "C", "D", "E", "F", "G",
      "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
      "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

      
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
	            .text($(this).attr("data-letter"));
		    }
		}

		for (var i = 0; i < word.length; i++){
			correct.attr('id', 'myWord');
			numberGuesses.attr('class', 'numberGuesses');
		}

});



