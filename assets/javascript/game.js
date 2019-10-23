var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var numberTarget = 0;
var colorButton = $('.colorButton');

function startGame() {
    currentScore = 0;
    $('#score').text(currentScore);
    $('#wins').text(winCounter);
    $('#losses').text(lossCounter);


    numberTarget = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log("AIM FOR THIS NUMBER ", numberTarget);
    $('#numberTarget').text(numberTarget);

    var buttonValues = [];
    for (var i = 0; i < 4; i++) {
        buttonValues.push(Math.round(Math.random() * 12))
        console.log(buttonValues);
    }
    $('#gem1').attr('value', buttonValues[0]);

    $('#gem2').attr('value', buttonValues[1]);

    $('#gem3').attr('value', buttonValues[2]);

    $('#gem4').attr('value', buttonValues[3]);
}
startGame();

var playGame = function () {
    currentScore = currentScore + (Number($(this).attr('value')));
    $('#score').text(currentScore);
    if (currentScore === numberTarget) {
        $('#score').text(currentScore)
        winCounter++;
        $('#wins').text(winCounter);
        reset();
    }
    else if (currentScore > numberTarget) {
        $('#score').text(currentScore);
        lossCounter++;
        $('#losses').text(lossCounter);
        reset();
    }
    else {
    }
}
$('.colorButton').on('click', playGame);
