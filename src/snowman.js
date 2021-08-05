/*
  `readline-sync` is a library that allows you to access user input from the command line. 
  The library is assigned to the variable `readline`. 
  It is used in the `run()` function below.
*/
const readline = require("readline-sync");
/*
  The `dictionary` variable will have an array of words that can be used for your game. 
  It is used in the `getRandomWord()` function.
*/
const dictionary = require("./dictionary");

/*
** Mike B {
Setting up game state
==== STATE ====
What data do we need to access or update ?
- secret word
- correct guesses
- wrong guesses
- max num of wrong guesses
 
What do we do with that data ?
=== HELPER FUNCTIONS THAT USE STATE ===
- put a random secret word into state
- check if a guess is correct
- add a correct guess to the list 
- check if the game is won
- ...

// ==== STATE ====
 //let secretWord = 'apple'; 
let secretWord = getRandomWord(); 
let correctGuesses = []; // [] -> ['p']
let wrongGuesses = [];
//let maxNumWrongGuesses = []; ??


** HELPER FUNCTIONS **
** TODO: Need a different secret word every game


function isGuessCorrect(guess) {
  //let secretWord = 'apple';//
  return secretWord.includes(guess);
}
//console.log(isGuessCorrect('a'));

** TODO: Howto keep previous guesses in memory {aka state} ?

function addCorrectGuessToList(guess) {
  //let correctGuesses = [];
  correctGuesses.push(guess);
  return correctGuesses;
}
//console.log(addCorrectGuessToList('p')); //> ['p']
//console.log(addCorrectGuessToList('l')); //> ['p', 'l']
} **

This function returns a random word from the list in `src/dictionary.js`. 
  You do not need to update or edit this function. 
  Instead, you only need to call it from the `run()` function.
*/
function getRandomWord() {
  const index = Math.floor(Math.random() * dictionary.length);
  return dictionary[index];
}

/*
  This function will run your game. 
  Everything you want to happen in your game should happen inside of here.

  You should still define other, smaller functions outside of the `run()` function 
  that have a single specific purpose, such as getting user input or checking if a guess is correct. 
  You can then call these helper functions from inside the `run()` function.

  Once you understand the code below, you may remove the comments if you like.
*/
function run() {
  // This line of code gets a random word. The `word` variable will be a string.
  const word = getRandomWord();
//TODO: Put that random word into state!
//> secretWord = word;
  /*
    The line of code below stops the execution of your program to ask for input from the user. 
    The user can enter whatever they want!

    The text that will show up to the user will be "Guess a letter: ". 
    Whatever value is entered will be assigned to the variable `userInput`.

    After a user hits the 'return' key, the rest of the code will run.
  */
  const userInput = readline.question("Guess a letter: ");
  // This line of code will print out whatever is inputted in by the user.
  console.log("THE USER INPUTTED:", userInput);
//TODO: check if the guess is correct!
// > let iscorrect = isGuessCorrect(userInput);

//TODO: If the guess is correct, add it to correct guesses


}

run();
