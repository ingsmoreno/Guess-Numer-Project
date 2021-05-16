'use stric';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.score').textContent)

// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 5;
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.score').textContent = 19;
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.typeNumber').value = 23;
// console.log(document.querySelector('.typeNumber').value);


let guessedNumber = Math.trunc(Math.random(document.querySelector('.number').textContent)*20) +1;
let currScore = 20;
let highScore = 0;

function displayMessage(selector, message){
    document.querySelector(selector).textContent = message;
}

function checkNumber() {
    let typeNumber = Number(document.querySelector('.typeNumber').value);
    if(!typeNumber){
        displayMessage('.message','No number inserted!');
        //document.querySelector('.message').textContent = 'No number inserted!';
    }else if (typeNumber == guessedNumber) {
        displayMessage('.message','Correct Number!')
        //document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('.number',`${guessedNumber}`);
        //document.querySelector('.number').textContent  = guessedNumber;
        document.querySelector('.container').style.backgroundColor = '#60b347'
        if (currScore > highScore) {
            highScore = currScore;
            displayMessage('.highScore', `${highScore}`);
           //Number(document.querySelector('.highScore').textContent = highScore);
        }

    }else if (typeNumber !== guessedNumber){
        if (currScore > 1) {
            displayMessage('.message',typeNumber > guessedNumber ? `Too high!`:`Too low`);
            //document.querySelector('.message').textContent = typeNumber > guessedNumber ? `Too high!`:`Too low`;
            currScore--;
            displayMessage('.score',`${currScore}`);
            //score = Number(document.querySelector('.score').textContent = currScore);
        }else{
            displayMessage('.message', 'You lost the game!')
            //document.querySelector('.message').textContent = `You lost the game!`;
            Number(document.querySelector('.score').textContent = 0);
        } 
    }
    
    // else if(typeNumber > guessedNumber ){
    //     if (currScore > 0) {
    //         tooHigh = document.querySelector('.message').textContent = `Too high!` ;
    //         currScore--;
    //         score = Number(document.querySelector('.score').textContent = currScore);
    //     }else{
    //         tooHigh = document.querySelector('.message').textContent = `You lost the game!`
    //     } 
          
    // }else if(typeNumber < guessedNumber ){
    //     if (currScore > 0) {
    //         tooHigh = document.querySelector('.message').textContent = `Too low!` ;
    //         currScore--;
    //         score = Number(document.querySelector('.score').textContent = currScore);
    //     }else{
    //         tooHigh = document.querySelector('.message').textContent = `You lost the game!`
    //     }     
    // }
}

function restart(){
    currScore = 20;
    guessedNumber = Math.trunc(Math.random(document.querySelector('.number').textContent)*20) +1;
    console.log(guessedNumber);
    displayMessage('.message','Start guessing...')
    //document.querySelector('.message').textContent = 'Start guessing...';
    Number(document.querySelector('.score').textContent = currScore);
    displayMessage('.number', '?')
    //document.querySelector('.number').textContent = '?';
    displayMessage('.typeNumber',' ');
    document.querySelector('.typeNumber').value = '';
    document.querySelector('.container').style.backgroundColor = '#000000e1';
}

let click = document.querySelector('.check-button').addEventListener('click',checkNumber);
let restarted = document.querySelector('.again-button').addEventListener('click', restart);


    