let height = 7; // number of guesses
let width = 7; // number of letters

// number denotes player's guessing position
let row = 0; // this is the row player is guessing in or attempt no.
let col = 0; //  the current letter for the row

let gameOver = false;
let gameWord = "retinas" //one word to test for now, export in wordlist later


window.onload = function(){
	initialize();
}

// Create game board
function initialize() {

    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

	//keyboard input event listener
document.addEventListener ("keyup", (e) => {
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
}
}
)
}

function update() {
let correct = 0;
let letterCount = new set(gameWord.split(''));
for (let c = 0; c < width; c++) {
let currentTile = document.getElementById(row.toString() + '-' + c.toString());
let letter = currentTile.innerText.toLowerCase();

// is the letter in the correct position?

if (gameWord[c] === letter) {
currentTile.classList.add("correct");
correct++;

} // is it in the word? 

else if (gameWord.includes(letter)) {currentTile.classList.add("present");
if (!letterCount.has(letter) && gameWord.indexOf(letter)!== c) {
	currentTile.classList.add("also-wrong");
  }
}

else {currentTile.classList.add("wrong");
}

if (correct === width){gameOver = true;}

}
}
//code in wrong if letter is not repeated
//code in game winning message
//code in restart button