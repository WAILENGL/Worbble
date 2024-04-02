/* import {wordlist} from "./words.js"; //to use words in another file to keep this file manageable - doesn't work now, will work it out later, using small wordlist in the meantime */
let words = ['aarrghh', 'abalone', 'abandon', 'abasers', 'abashed', 'abashes']; // test word array
let row = 0;
let nextRow = 0;
let score = 0;
let gameFin = 0;
let restart;
let enterWord;
let deleteWord;
let objArray = []
const letterCount = // function to count number of times letter appears in a game

function startGame(){

// this resets the container whenever new game is started
	container.innerHTML = '';
	gameFin = 0;
	row = 0;
	nextRow = 0;
	score = 0;
	
	// randomizes word chosen from wordlist
	let randWord = Math.floor(Math.random() * words.length);
	gameWord = words[randWord];
}

//Generate board area divs

let gameArea = document.createElement('div');
gameArea.className = 'game_area';
for(i = 0; i < 7; i++){
	let row = document.createElement('div');
	row.className = 'row';
	for(j = 0; j < 7; j++){
		let rowBlock = document.createElement('div');
		rowBlock.className = 'row_block';
		row.append(rowBlock);
	}
	gameArea.append(row);
}
container.append(gameArea);


//New Game Button
let navDiv = document.getElementById('nav')
let newGameBtn = document.createElement('button');
newGameBtn.id = 'newGameBtn';
newGameBtn.innerText = 'New Game';
newGameBtn.addEventListener("click", function gameClick(event) {
	
	});
navDiv.append(newGameBtn);