

// array of possible choices
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variable for wins and loses
var winScore = 0;
var lossScore = 0;

// variable for guesses left
var guessesLeft = 9;

  // create computer letter
  var compLetter = choices[Math.floor(Math.random() * choices.length)];

  var alreadyGuessed = document.querySelector('#guesses-sf');



// key pressed function
document.onkeydown = function (event) {
    // capture user guess
    var guessesSf = event.key;
    console.log("user letter = " + guessesSf)
    console.log("comp letter = " + compLetter)

    // compare user guess vs comp letter
    if (guessesSf === compLetter) {
        winScore++;
        guessesLeft = 9;
        document.querySelector('#guesses-sf').innerHTML = "";
        compLetter = choices[Math.floor(Math.random() * choices.length)];

    } else {
        guessesLeft--;

        // append to the element's content
        alreadyGuessed.innerHTML +=  guessesSf + ", ";

          // console.log("users guesses prior to latest guess = " + alreadyGuessed.innerHTML)

        if (guessesLeft === 0) {
            lossScore++;
            guessesLeft = 9;
            guessesSf = ""
            document.querySelector('#guesses-sf').innerHTML = "";
            compLetter = choices[Math.floor(Math.random() * choices.length)];
        
        }
    }
    // write data to html
    document.getElementById("wins").innerHTML = winScore;
    document.getElementById("losses").innerHTML = lossScore;
    document.getElementById("guesses-left").innerHTML = guessesLeft;

}