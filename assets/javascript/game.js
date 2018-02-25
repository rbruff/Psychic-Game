// // HTML element variables
// var winsHTML = document.getElementById('wins');
// var lossesHTML = document.getElementById('losses');
// var guessesLeftHTML = document.getElementById('guesses-left');
// var guessesSfHTML = document.getElementById('guesses-sf');


// array of possible choices
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variable for wins and loses
var winScore = 0;
var lossScore = 0;

// variable for guesses left
var guessesLeft = 9;

// key pressed function
document.onkeydown = function (event) {
    // capture user guess
    var guessesSf = event.key;
    // create computer letter
    var compLetter = choices[Math.floor(Math.random() * choices.length)];
    console.log(compLetter)
    // compare user guess vs comp letter
    if (guessesSf === compLetter) {
        winScore++;
        guessesLeft = 9;
        guessesSf = ""

    } else {
        guessesLeft--;
        document.getElementById("guess-sf").innerHTML = document.getElementById("guess-sf").innerHTML + ", " + guessesSf;
        if (guessesLeft === 0) {
            lossScore++;
            guessesLeft = 9;
            guessesSf = ""
        }
    }
    // write data to html
    document.getElementById("wins").innerHTML = winScore;
    document.getElementById("losses").innerHTML = lossScore;
    document.getElementById("guesses-left").innerHTML = guessesLeft;

}