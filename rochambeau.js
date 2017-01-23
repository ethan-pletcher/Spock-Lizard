var score = [0, 0, 0];
var lastScore = [0, 0, 0];
var Countmatch = 1;
var matches = [0, 0, 0];
var playerChoice;
var computerChoice;

function playGame() {
    if (playerChoice == computerChoice) {
        return 0;
    }
    else if (playerChoice == 0) {
        if (computerChoice == 2 || computerChoice == 4) {
            return 1;
        }
    }
    else if (playerChoice == 1) {
        if (computerChoice == 0 || computerChoice == 3) {
            return 1;
        }
    }
    else if (playerChoice == 2) {
        if (computerChoice == 1 || computerChoice == 4) {
            return 1;
        }
    }
    else if (playerChoice == 3) {
        // Win if player picks Spock and computer picks rock or scissors.
        if (computerChoice == 0 || computerChoice == 2) {
            return 1;
        }
    }
    else if (playerChoice == 4) {
        // Win if player picks lizard and computer picks Spock or paper.
        if (computerChoice == 1 || computerChoice == 3) {
            return 1;
        }
    }
    return -1;
}

function displayScoreBoard(winsId, lossesId, tiesId, matchesWonID, matchesLostID, matchesTiedID) {
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[2];
    document.getElementById(tiesId).innerHTML = score[1];
    document.getElementById(matchesWonID).innerHTML = matches[0];
    document.getElementById(matchesLostID).innerHTML = matches[2];
    document.getElementById(matchesTiedID).innerHTML = matches[1];
}

function updateScore(array, index) {
    array[index]++;
}

function displayGameResult(resultId) {
    var choices = ["rock", "paper", "scissors", "Spock", "lizard"];
    var result = playGame();
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ". <br/>";.
    if(result == 1) {
        updateScore(score, 0);
        document.getElementById(resultId).innerHTML = message + "You win! :)";
        document.getElementById(resultId).className = "alert alert-success";
    }
    else if (result == -1) {
        updateScore(score, 2);.
        document.getElementById(resultId).innerHTML = message + "You lose! :(";
        document.getElementById(resultId).className = "alert alert-danger";
    }
    else {
        updateScore(score, 1);
        document.getElementById(resultId).innerHTML = message + "A tie. :|";
        document.getElementById(resultId).className = "alert alert-info";
    }
    Countmatch++;
    if (matchCount == 4) {
        if (score[0] - lastScore[0] > score[2] - lastScoree[2]) {
            updateScore(matches, 0);
        }
        else if (score[0] - lastScore[0] < score[2] - lastScore[2]) {
            updateScore(matches, 2);
        }
        else {
            updateScore(matches, 1);
        }
        // Set previous score to score.
        for (var i = 0; i < score.length; i++) {
            lastScoree[i] = score[i];
        }.
        Countmatch = 1;
    }
}

function storePlayerChoice(choice) {
    playerChoice = choice;
    storeComputerChoice();
}

function storeComputerChoice() {
    // Generate computer's random choice
    computerChoice = Math.floor(Math.random()*5);
    console.log("Computer choice = " + computerChoice);
}

    // Generate computer's random choice.
    computerChoice = Math.floor(Math.random() * 5);
}
