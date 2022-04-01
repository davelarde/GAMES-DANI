"use strict";

var readyToPlay = window.confirm("Do you want to play?"), wins = 0, losses = 0, ties = 0; 

function compareAnswer(userAnswer) {
    var computerAnswer = Math.floor(Math.random() * 3);

    if (userAnswer == 'r' && computerAnswer == 0 || userAnswer == 'p' && computerAnswer == 1 || userAnswer == 's' && computerAnswer == 2) {
        ties += 1;
        return "tie";
    } else if (userAnswer == 'r' && computerAnswer == 1 || userAnswer == 'p' && computerAnswer == 2 || userAnswer == 's' && computerAnswer == 0) {
        losses += 1;
        return "loss";
    } else {
        wins += 1;
        return "win";
    }
}

while(1) {
    if (readyToPlay) {
        var result = window.prompt("Please choose rock(R), paper(P) or scissors(S)", "R");
        if (result !== null) {
            result = result.trim().toLowerCase();
        }
        if (result == "r" || result == "p" || result == "s") {
            var gameResult = compareAnswer(result);
            if (gameResult == "tie") {
                readyToPlay = window.confirm(`You tied, your record is: wins: ${wins} losses: ${losses} ties: ${ties} Please click okay when you are ready to play again`);
            } else if (gameResult == "win") {
                readyToPlay = window.confirm(`Congratulations, you win, your record is: wins: ${wins} losses: ${losses} ties: ${ties} Please click okay when you are ready to play again`);
            } else {
                readyToPlay = window.confirm(`Better luck next time, you lost, your record is: wins: ${wins} losses: ${losses} ties: ${ties} Please click okay when you are ready to play again`);
            }

        } else {
            result = window.prompt("Your choice was invalid please choose rock(R), paper(P) or scissors(S)", "R");
        }
        console.log("result ", result);
    } else {
        readyToPlay = window.confirm("Please click okay when you are ready to play");
    }
}