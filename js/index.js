    	var words = [
			["T", "R", "E", "E", "H", "O", "U", "S", "E"],
			  ["J","A","V","A","S","C","R","I","P","T"],
			  ["W","E","B","D","E","S","I","G","N"],
			  ["E","D","U","C","A","T","I","O","N"],
			  ["C","H","O","C","O","L","A","T","E"],
			  ["G","E","R","M","A","N","Y"]
			]
			var random = Math.floor((Math.random()*(words.length-1))); 

			var choseWord = words[random]; 
			// the word to guess will be chosen from the array above
			var gameWord = new Array(choseWord.length);
			var error = 0;

			// every letter in the word is symbolized by an underscore in the guessfield
			for (var i = 0; i < gameWord.length; i++){
				gameWord[i] = "_ ";
			}

			// prints the guessfield
			function printgameWord(){
				for (var i = 0; i < gameWord.length; i++){
				var field = document.getElementById("field");
				var letter = document.createTextNode(gameWord[i]);
				field.appendChild(letter);
				}
			}

			//checks if the the letter provided by the user matches one or more of the letters in the word
			var testChar = function(){
				var f = document.gameForm; 
				var b = f.elements["gameChar"]; 
				var character = b.value; // the letter provided by the user
				character = character.toUpperCase();
				for (var i = 0; i < choseWord.length; i++){
					if(choseWord[i] === character){
						gameWord[i] = character + " ";
						var hit = true;
					}
				b.value = "";
				}
				
				//deletes the guessfield and replaces it with the new one
				var field = document.getElementById("field");
				field.innerHTML=""; 
				printgameWord();
				
				// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list
				if(!hit){
					var generateLetters = document.getElementById("generateLetters");
					var letter = document.createTextNode(" " + character);
					generateLetters.appendChild(letter); 
					error++;
					var hangman = document.getElementById("hangman");
				}
				
				//checks if all letters have been found
				var complete = true;
				for (var i = 0; i < gameWord.length; i++){
					if(gameWord[i] === "_ "){
						complete = false;
					}
				}
				if(complete){
					window.alert("You win! Go for more!");
				}
				
				//once you got six wrong letters, you lose
				if(error === 6){
					window.alert("You lose. Try again!");
				}
			}

			function init(){
				printgameWord();
			}

			window.onload = init;