let height = 7; // number of guesses
let width = 7; // number of letters

// number denotes player's guessing position
let row = 0; // this is the row player is guessing in or attempt no.
let col = 0; //  the current letter for the row

let gameOver = false;
let gameWord = ["retinas"] //one word to test for now, export in wordlist later


window.onload = function(){
	initialize();
}

// Create game board
function initialize() {

    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
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
                col += 1;
            }
        }
    }
	else if(e.code === "Backspace"){
if (0 < col && col <= width) {
	col -= 1;
}
let currentTile = document.getElementById(row.toString() + '-' + col.toString());
currentTile.innerText = "";
	}
else if (e.code === "Enter"){
update();
row +=1; //start new row
col = 0; // start at 0 for new row
}

if (!gameOver && row === height){gameOver = true;
	document.getElementById("answer").innerText = gameWord;
	}

}
)
}

function update() {
let correct = 0;
for (let c = 0; c < width; c++) {
let currentTile = document.getElementById(row.toString() + '-' + col.toString());
let letter = currentTile.innerText;

// is the letter in the correct position?

if (gameWord[c] === letter) {
tile.classList.add("correct");
correct += 1;

} // is it in the word? 

if (gameWord.includes.letter) {tile.classList.add("present");
}

else {tile.classList.add("wrong");
}

if (correct === width){gameOver = true;}

}

}