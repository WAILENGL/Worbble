const wordList = ['aarrghh','abalone','abandon','abasers','abashed','abashes'];
let gameWord = '';
let currentRow = 0;

/* // New Game Button
let navDiv = document.getElementById('nav')
let newGameBtn = document.createElement('button');
newGameBtn.id = 'newGameBtn';
newGameBtn.innerText = 'New Game';
newGameBtn.addEventListener("click", function gameClick() {
  startGame();
});
navDiv.append(newGameBtn); */

function startGame() {

	// randomizes word chosen from wordlist
	let randWord = Math.floor(Math.random() * wordList.length);
	gameWord = wordList[randWord];

    console.log(gameWord)

}

startGame();