var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var numberTarget = 0;
var colorButton = $('.colorButton');

function startGame() {
    currentScore = 0;
    $('#score').text(currentScore);
    console.log("score: " + currentScore); 

    $('#wins').text(winCounter);
    console.log("wins: " + winCounter); 

    $('#losses').text(lossCounter);
	console.log("losses: " + lossCounter); 

    numberTarget = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log("AIM FOR THIS NUMBER ", numberTarget);
    $('#numberTarget').text(numberTarget);

    var buttonValues = [];
    for (var i = 0; i < 4; i++) {
        buttonValues.push(Math.round(Math.random() * 12))
        console.log(buttonValues);
    }
    $('#gem1').attr('value', buttonValues[0]);
    console.log("gem1: " + buttonValues); 

    $('#gem2').attr('value', buttonValues[1]);
    console.log("lossgem2es: " + buttonValues); 

    $('#gem3').attr('value', buttonValues[2]);
    console.log("gem3: " + buttonValues); 

    $('#gem4').attr('value', buttonValues[3]);
    console.log("gem4: " + buttonValues); 
}
startGame();

// function reset () {
//     numberTarget = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//         console.log("numberTarget: " + numberTarget); 
//     $(".randomNumber").onc(numberTarget); 
// Can't freaking figure out how to automatically reset game or create a function that will reset once
// the score has been match or lost the game once it been past.

var playGame = function () {
    currentScore = currentScore + (Number($(this).attr('value')));
    $('#score').text(currentScore);
    if (currentScore === numberTarget) {
        $('#score').text(currentScore)
        winCounter++;
        $('#wins').text(winCounter);
        console.log("wins: " + winCounter); 
        reset();
    }
    else if (currentScore > numberTarget) {
        $('#score').text(currentScore);
        lossCounter++;
        $('#losses').text(lossCounter);
        console.log("losses: " + lossCounter); 
        reset();
    }
    else {
    }
}
$('.colorButton').on('click', playGame);
console.log("colorButton: " + playGame); 
