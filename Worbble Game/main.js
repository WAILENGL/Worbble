let height = 7; // number of guesses
let width = 7; // number of letters

// number denotes player's guessing position
let row = 0; // this is the row player is guessing in or attempt no.
let col = 0; //  the current letter for the row

let gameOver = false;
let wordList = ["retinas", "nastier", "retains", "stainer", "antsier"]

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
    let anyEmpty = false;
    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + '-' + c.toString());
        if (currentTile.innerText === "") {
            anyEmpty = true;
            break;
        }
    }
    if (anyEmpty) {
        return; 
    } else {
        update();
        row++; // Start new row
        col = 0; // Start at 0 for new row
    }
}

if (!gameOver && row === height){gameOver = true;
	document.getElementById("answer").innerText = "Game Over! The Answer Is " + gameWord.toUpperCase();
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
    }
    newDiv.removeChild(newGameBtn);
document.getElementById("answer").innerText = "";
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
}

//still need to work on repeat letters logic
