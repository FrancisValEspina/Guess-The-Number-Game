'use strict';

let secretNumber = Number(Math.trunc(Math.random()*20) + 1);

const messageDisplay = function (message) {document.querySelector('.message').textContent = message};

/* let scoreStatus = document.querySelector('.score').textContent */

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener("click", function(){
    const guessNumber = Number(document.querySelector('.guess').value);

    // no input
    if (!guessNumber) {
        messageDisplay("No number! Please put a number inside the box.");
        score--;
        document.querySelector('.score').textContent = score;
        if (score === 0) {messageDisplay("Game Over!")};
    // correct answer
    } else if (guessNumber === secretNumber) {
        messageDisplay("Correct!");
        
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '35rem'

        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // wrong answer
    } else if (guessNumber !== secretNumber){
        if (score > 1) {
            messageDisplay(guessNumber > secretNumber ? "Too high" : "Too low");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
             messageDisplay("Game over.");
            document.querySelector('.score').textContent = 0;
        }
    } 
});


document.querySelector('.again').addEventListener("click", function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Number(Math.trunc(Math.random()*20) + 1);
    document.querySelector('.guess').value = "";
    messageDisplay("Start guessing...");
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem'
});