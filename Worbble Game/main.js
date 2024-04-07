let height = 7; // number of guesses
let width = 7; // number of letters

// number denotes player's guessing position
let row = 0; // this is the row player is guessing in or attempt no.
let col = 0; //  the current letter for the row

let gameOver = false;
let wordList = ["retinas", "nastier", "retains", "stainer", "antsier"]
let gameWord = wordList[Math.floor(Math.random() * wordList.length)]


initialize();

// Create game board
function initialize() {
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
}

let newDiv = document.createElement('div');
newDiv.id = 'new-game';
document.body.appendChild(newDiv);

//keyboard input event listener
document.removeEventListener ("keyup", keyboardInputs)     
document.addEventListener ("keyup", keyboardInputs)

function keyboardInputs(e){
	if (gameOver) return;
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
	update();
	row ++; //start new row
	col = 0; // start at 0 for new row
}

if (!gameOver && row === height){gameOver = true;
	document.getElementById("answer").innerText = "Game Over! The Answer Is " + gameWord.toUpperCase();
    let newDiv = document.getElementById('new-game');
	let newGameBtn = document.createElement('button');
	newGameBtn.id = 'newGameBtn';
	newGameBtn.innerText = 'Start New Game';
    newDiv.append(newGameBtn);
    document.getElementById('newGameBtn').addEventListener('click', function() {
    row = 0;
    col = 0;
    gameOver = false;

    let board = document.getElementById("board");
    while (board.firstChild) {
      board.removeChild(board.firstChild);
newDiv.remove(newGameBtn);
document.getElementById("answer").innerText = "";
    }
initialize();    
})

}
}


function update() {
let correct = 0;
let userLetters = [];
let gameWordLetters = gameWord.split("")

for (let c = 0; c < width; c++) {
let currentTile = document.getElementById(row.toString() + '-' + c.toString());
let letter = currentTile.innerText.toLowerCase();
userLetters.push(letter);

// is the letter in the correct position?

if (gameWord[c] === letter) {
currentTile.classList.add("correct");
correct++;

} // is it in the word? 

else if (gameWord.includes(letter)) {currentTile.classList.add("present");

}

else { currentTile.classList.add("wrong");
}

for (let i = 0; i < userLetters.length; i++) {
    let userLetter = userLetters[i];  
    let gameWordLetterCount = gameWordLetters.filter(letter => letter === userLetter).length;
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
    }
  }

if (correct === width){gameOver = true;
    document.getElementById("answer").innerText = "You Win!";
	let newGameBtn = document.createElement('button');
	newGameBtn.id = 'newGameBtn';
	newGameBtn.innerText = 'Start New Game';
    newDiv.appendChild(newGameBtn);
    document.getElementById('newGameBtn').addEventListener('click', function() {
    row = 0;
    col = 0;
    gameOver = false;

    let board = document.getElementById("board");
    while (board.firstChild) {
      board.removeChild(board.firstChild);
      // Remove Start New Game Button when game restarts

newDiv.remove(newGameBtn);
document.getElementById("answer").innerText = "";
    }
initialize();

}
);
}
}
}
