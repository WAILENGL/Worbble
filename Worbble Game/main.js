let height = 7; // number of guesses
let width = 7; // number of letters

// number to identify player's guessing position
let row = 0; // this is the row player is guessing in or attempt no.
let col = 0; //  the current letter for the row

let gameOver = false;
let wordList = ["retinas", "nastier", "retains", "stainer", "antsier", "foamers"]

initialize();

let newDiv = document.createElement('div');
newDiv.id = 'new-game';
document.body.appendChild(newDiv);

// Create game board
function initialize() {
    //Pick random word from wordList array
    let gameWord = wordList[Math.floor(Math.random() * wordList.length)];
 // Create the game board
for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString(); //this assigns each tile a unique id based on their position
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }
   

//keyboard input event listener
 
document.addEventListener ("keyup", keyboardInputs)


function keyboardInputs(e){
	if (gameOver) return; //if game is already over, prevents player from typing more on the board
	if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {  
            let currentTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currentTile.innerText === "") {
                currentTile.innerText = e.code[3];
                col++; 
            }
        }
    }
	else if(e.code === "Backspace"){
		if (0 < col && col <= width) {
				col--;}
				let currentTile = document.getElementById(row.toString() + '-' + col.toString());
				currentTile.innerText = "";
	}
else if (e.code === "Enter"){
    let empty = false; // code black to prevent player from submitting guess when less than 7 letters
    let userGuess = "";

    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + '-' + c.toString());
        userGuess += currentTile.innerText.toLowerCase();

    if (currentTile.innerText === "") {
            empty = true;
            break;
        }
    }

    if (empty) {
        return; 
    }     

    else {if (!wordList.includes(userGuess)) {
          alert("Please enter a valid word.");
          // Clear the row
          for (let c = 0; c < width; c++) {
            let currentTile = document.getElementById(row.toString() + '-' + c.toString());
            currentTile.innerText = "";
          }
          // Reset the column index
          col = 0;
        } 
        
        else {

        update();
        row++; // Start new row
        col = 0; // Start at 0 for new row}
       
    }
}

if (!gameOver && row === height){gameOver = true; // loss logic - when player submits wrong guess on last row
	document.getElementById("answer").innerText = "Game Over! The Answer Is " + gameWord.toUpperCase();

    //Generate a new Game Button for player to restart
	let newGameBtn = document.createElement('button');
	newGameBtn.id = 'newGameBtn';
	newGameBtn.innerText = 'Start New Game';
    newDiv.append(newGameBtn);

    //reset game state
newGameBtn.addEventListener('click', function() {
    row = 0;
    col = 0;
    gameOver = false;

    //code to remove previous board (or new game will just add onto previous board)
    let board = document.getElementById("board");
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }

    //remove game button and text when new game button is clicked
    newDiv.removeChild(newGameBtn);
document.getElementById("answer").innerText = "";
document.removeEventListener ("keyup", keyboardInputs)       
initialize();    

})

}
}


function update() {
    
let correct = 0; // the number of correct leters in the guess word
let userLetters = [];
let gameWordLetters = gameWord.split("") //this splits the gameWord into an array with each letter being a separate string


for (let c = 0; c < width; c++) {  //iterates over the user's guess
let currentTile = document.getElementById(row.toString() + '-' + c.toString());
let letter = currentTile.innerText.toLowerCase(); 
userLetters.push(letter); //this pushes each individual letter from the user's guess into the userLetters array as a separate string for use in filter

// is the letter in the correct position?
if (gameWord[c] === letter) { //this checks if the letter = the letter in the gameWord in the same position
currentTile.classList.add("correct");
correct++;
} 

// is it in the word? 

else if (gameWord.includes(letter)) {currentTile.classList.add("present");
}

else { currentTile.classList.add("wrong");
}


// game win logic

if (correct === width){gameOver = true;
    document.getElementById("answer").innerText = "You Win!";

	let newGameBtn = document.createElement('button');
	newGameBtn.id = 'newGameBtn';
	newGameBtn.innerText = 'Start New Game';
    newDiv.appendChild(newGameBtn);
    
    //reset game state
    newGameBtn.addEventListener('click', function() {
    row = 0;
    col = 0;
    gameOver = false;

    //remove previous board
    let board = document.getElementById("board");
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }

    //removes new game button, the win message and keyboard event listener so it doesn't carry over to the next game.

    newDiv.removeChild(newGameBtn);
    document.getElementById("answer").innerText = "";
    document.removeEventListener ("keyup", keyboardInputs)       
initialize();
}
);
}
}
}
}}

//still need to work on repeating letters logic - if there are more of the same letters in guess than in the gameWord, 
/* the letter is still marked "present"
- look into filter or reduce methods */


// Example code to get letters in the user guess that exist in the gameWord, but have more instances in the user guess than the game word, marked "wrong"

/* let gameWordLetterCount = gameWordLetters.filter(letter => letter === userLetter).length;
let userLetterCount = userLetters.filter(letter => letter === userLetter).length;

if (userLetterCount > gameWordLetterCount) {
    let presentCount = 0; //the number of "present" letters
  for (let j = 0; j < userLetters.length; j++) {
    let currentTile = document.getElementById(row.toString() + '-' + j.toString());
   
        if (presentCount < gameWordLetterCount) {
          // Mark the correct number of instances as "present"
          presentCount++;
        } else {
          // Mark the extra instances as "wrong"
          currentTile.classList.remove("present");
          currentTile.classList.add("wrong");
        }
  }
} */
