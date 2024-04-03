/* import {wordlist} from "./words.js"; //to use words in another file to keep this file manageable - doesn't work now, will work it out later, using small wordlist in the meantime */
let words = ['aarrghh', 'abalone', 'abandon', 'abasers', 'abashed', 'abashes']; // test word array
let row = 0;
let currentRow = 0;
let score = 0;
let gameEnd = 0;
let restart;
const letterCount = // function to count number of times letter appears in a game



function startGame(){

// this resets the container whenever new game is started
	container.innerHTML = '';
	gameEnd = 0;
	row = 0;
	currentRow = 0;
	score = 0;
	
	// randomizes word chosen from wordlist
	let randWord = Math.floor(Math.random() * words.length);
	gameWord = words[randWord];
}

	// New Game Button
	let navDiv = document.getElementById('nav')
	let newGameBtn = document.createElement('button');
	newGameBtn.id = 'newGameBtn';
	newGameBtn.innerText = 'New Game';
	newGameBtn.addEventListener("click", function gameClick() {startGame();
		});
	navDiv.append(newGameBtn);

//Generate board area divs

let gameArea = document.createElement('div');
gameArea.className = 'game_area';
for(i = 0; i < 7; i++){
	let row = document.createElement('div');
	row.className = 'row';
	for(j = 0; j < 7; j++){
		let letterBlock = document.createElement('div');
		letterBlock.className = 'letter_block';
		letterBlock.classList.add('unfilled');
		row.append(letterBlock);
	}
	gameArea.append(row);
}
container.append(gameArea);

	// Keyboard input event listener
/* 	Must input in order in the rows - done
	Backspace deletes letter + removes .filled class
	Enter key submits word -> Must check if the previous word was correct (game over because won) 
	Else, Enter allows player to fill in next guess in next row 
		*/
document.addEventListener('keyup', (event) => { if (event.key.length === 1 && event.key.match(/^[a-z]$/)) {
const letterBlock = document.querySelector(`.unfilled`);

if (letterBlock) {
	if (currentRow < 7) {
	  letterBlock.innerText = event.key.toUpperCase();
	  letterBlock.classList.replace('unfilled', 'filled');
	 currentRow++
	}
	
if (event.key === 'Backspace') {
	const filledBlock = document.querySelector(`.row:nth-child(${currentRow}) .filled`);
	if (filledBlock) {
	  filledBlock.classList.replace('filled', 'unfilled');
	  filledBlock.innerText = '';
	  currentRow--;
	
		}
	  }
	} 
	
	

    }
  }



); 




// function to end game after win or losing last guess
function gameOver(){gameEnd = 1; 

}