# Worbble - Worddle with Scrabble wordlists

## Project Brief
**MVP - Minimum Viable Product** 
- Built with HTML, CSS and JavaScript
- Use Javascript for DOM manipulation
- Fundamental Wordle functionality -> Ability to randomize a wordlist, allow multiple guesses via keyboard input, win/loss conditions, restart game
- A README.md file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.
- Be deployed and playable on browser


**Stretch Goals (Not Mandatory)**
-  Onscreen keyboard
- Scorekeeping

## Timeframe
1 week

## Technologies & Tools Used
- HTML
- CSS
- JavaScript
- Git & GitHub

<br>

## Description
This is a Wordle clone utilizing the Scrabble dictionary to generate 7 letter words. The game was designed and implemented using HTML, CSS, and Javascript while attending the Software Engineering Immersive course at General Assembly.

I've always been a fan of word games and played Scrabble competitively while in university. As the official Scrabble dictionary allows words not in the English language, part of the preparation involved memorizing word lists and permutations of certain combinations of letters. For example, the letters in "retinas" can be rearranged into 8 different 7-letter words.

I chose a 7-letter Wordle because forming words with all the tiles in your hand results in a "bingo", which awards an extra 50 points. So I wanted to make a Wordle that might be a fun way to learn or recall different 7 letter words in Scrabble. 

For me, programming is a way to create things that makes life better in some way, be it something that brings happiness, solves a pain point or makes something better. The satisfaction of building something that brings joy or is useful for people makes the effort worth it.      

<br>

## High Concept

Players try to guess a random 7 letter word from the Scrabble dictionary on a gameboard made up of 7 x 7 squares. Each square takes a single letter. If they have the letters from the word in their guess in the correct position, the square lights up green. If the letter exists in the word but is not in the correct position, it lights up yellow. If the letter does not exist, the square turns grey. 

The player wins if they guess all 7 letters correctly. 

<br>

## Deployment
The game is deployed on GitHub pages, and you can play the game here: https://worbble.vercel.app/

<br>

## How To Play

Simply start typing in a 7 letter word to start guessing. Use the lit up squares as a guide on which letters you should incorporate or remove from your next guess. You win if you manage to guess the word.

<br>

## Ideation and Game Architecture
I grabbed a version of Worddle similar to what I envisioned and from there identified what I might need to code in html and css, and figure out was needed to interact with the different elements of the page in JS. 

I played a few different versions of Wordle to observe how the game flowed, what were the essential components, and what elements would be the most efficient to implement for an MVP.


![Visualization Sketch](https://github.com/WAILENGL/worbble/blob/main/Wireframe/wordle-visualization.png) 

<br>

## Approach to Development
The project was broken down into the following steps:
- [x] **Step 1:** Generate the Game Board
- [x] **Step 2:** Create Event Listeners for keyboard inputs in the game board
- [x] **Step 3:** Create the Game Logic that happens when input is submitted for checking
- [ ] **Step 4:** (Stretch Goal): Create an onscreen keyboard
- [ ] **Step 5:** (Stretch Goal): Create a scoring system

When coding, I would make comments for 2 reasons: 
1. To reinforce and remind myself what a certain code block or variable does  
2. To remind myself what else still needs doing in the code

As I was still learning, I had to do a lot of searching and video watching to figure out the methods by which I could code what I had written out in pseudocode. I had to leave comments on the codes to reinforce my memory of what the code or method did. 

AI was used to help break down and explain parts of the code that I didn't fully understand, or to help find errors in my code if I couldn't figure out why it wasn't working even though it looked correct. 

<br>

## Key Learnings
1. I learned how to use loops better. Figuring out how it could be used to create any number of html elements and automatically assign ids was a lifesaver.

2. Pre-planning is extremely important. I didn't realise how generalized my idea of how the game should work was going in since I thought Wordle was "simple" and there were so many clones out there. This led to several do-overs as I started coding without thinking through the implementation. When I finally sat down and wrote out proper pseudocode, things got much easier. 

3. Related to point 2, I learnt that I have to to organize my code better and pay better attention to function scopes. For example, I realised I had to remove the key input event listener after every game, but it didn't seem to register. I realised it was because I had defined the event listener within the "initialize" function scope and it was not accessible globally. I had also randomized the game word from the word list outside of the initialize function at the top, and this caused the same word to be re-used for every game until I moved it. 

4. After researching the game logic/flow and how different developers coded their Wordle game, I gained more insight into how to approach planning and structuring of code. This project also reinforced other concepts I learned in class.

<br>

## Breakdown & Analysis of the Codes
Below is a breakdown and analysis of some of the codes which I have categorised according to the concepts we have covered in class.

### Loops, Conditionals, Booleans, 

Booleans are used in programming to control the flow of logic. A number of operators are used to determine whether a condition is true or false. They are commonly used in conditional statements and loops.

![Example-main.js file](https://github.com/WAILENGL/worbble/blob/main/Wireframe/loops-boolean-conditionals.png)

The above function uses a loop to iterate over the user's guess, looping through each letter in the width of the board. 

Conditional statements if, else if and else are used to determine whether the guessed letter is correct, present or in the wrong position, and the tile id is updated accordingly.

The variable gameOver is a boolean variable that controls the state of the game. It is set to true when the game is over (player wins in this example) and false otherwise.

### Arrays 
An array is a data structure used to store collections of data types like a numbers or strings. You can assign an array to a variable. All array list items go between square brackets.

![Array-example-main.js file](https://github.com/WAILENGL/worbble/blob/main/Wireframe/array-example.png)

For Worbble, arrays were used to store data for both the game and from the user. The above example array stores the wordlist for the game which allows the Math methods to be used on it to randomize the gameWord from the list.

![user-example-main.js file](https://github.com/WAILENGL/worbble/blob/main/Wireframe/array-push-example.png)
![console-main.js file](https://github.com/WAILENGL/worbble/blob/main/Wireframe/user-guess-array.png)

An empty array was also created for the letters in a user's guess word. In the above example, the gameWord is split into a new array where each letter in the array is turned into a separate string. Each individual letter in the user guess is pushed into the userLetters array as a separate string. They can then be used in an array iterator method to count and check the instances of each individual letter. 

### Functions & Scope
With a function, you can store code that can be used conveniently as many times as you wish, without having to rewrite the code each time. 

![Functions/Scope-main.js file](https://github.com/WAILENGL/worbble/blob/main/Wireframe/Update-Function.png)

Scope is the restriction of where in your code your variables can be accessed. If you try to access a variable outside of its scope, it will not be defined. In general, you want scope to be restricted. You only want your variables accessible to specific safe zones. 

The above function example handles keyboard inputs from the player, allowing them to fill in letters on the game board, erase letters, and submit their guesses when they're ready.

### Pseudocode
Pseudo code is the process of taking a larger solution and breaking it down into the programmable steps without actually writing any code.

![Pseudocode](https://github.com/WAILENGL/worbble/blob/main/Wireframe/pseudocode.png)


## Future Developments / Improvements
While this was created for a project submission, I am interested in continuing to develop the game and seeing it through to the original vision I had for it if I have the time. These are some future developments/Improvements I might make:

- Learn to import a full wordlist from another js file
- Add an onscreen keyboard
- "Beautify" the UI and colors
- Keep track of the user's score
- provide a definition of the game words.

<br>

## Summary
As my first project, I had underestimated the complexity of coding a "simple" game like Wordle. This project expanded my knowledge of Javascript and reinforced concepts I'd learned in class. It also illustrated my shortcomings in planning and structuring code.

However, in doing it and researching how others do it, I gained a newfound appreciation for how there is no real "standard" way to code. Every guide and video I looked at had a different way to code Wordle. The key was understanding the logic flow and how the HTML, CSS and JS interacted with each other. The coding comes much easier from there.

Referencing others' work and understanding how they did it allowed me to then change it to create a variation of Wordle. It also let me figure out ways to improve on the game. 

<br>

## References
As a novice who didn't have the strongest base in coding, I had to reference several sources to get an idea for the structure and logic of a wordle game before modifying to make them mine. These are the main sources I referenced:

- [A Wordle type game using Javascript](https://discuss.codecademy.com/t/a-wordle-type-game-using-javascript/646680)
- [Build a Wordle Clone in JavaScript HTML CSS](https://www.youtube.com/watch?v=ckjRsPaWHX8)
- [Breaking down wordle in vanilla JS](https://gaurav-techgeek.medium.com/breaking-down-wordle-in-vanilla-js-a4e9c51c65e4)
- [Wordle in JavaScript in 20 minutes](https://www.youtube.com/watch?app=desktop&v=oKM2nQdQkIU)

## Game Asset Atrributions
As Wordle is a word game, there were no graphics or sound used in this iteration of the game. This section may change in the future should I add animations or sounds in future versions.
