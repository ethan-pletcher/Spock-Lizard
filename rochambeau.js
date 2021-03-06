// This is the varaible that stores the score.
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0, 0, 0];
// The variables store the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors
var playerChoice;
var computerChoice;
var match = [0, 0];

function playGame() {
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        console.log("tie");
        return 0;
    }
    else if (playerChoice == 0 && computerChoice == 2) {
        // Rock beats scissors - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 0 && computerChoice == 4) {
        // Rock beats Lizard - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 1 && computerChoice == 1) {
        // Paper beats Rock - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 1 && computerChoice == 3) {
        // Paper beats Spock - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 2 && computerChoice == 1) {
        // Scissors beats paper - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 2 && computerChoice == 4) {
        // Scissors beats lizard - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 3 && computerChoice == 2) {
        // Spock beats scissors - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 3 && computerChoice == 0) {
        // Spock beats rock - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 4 && computerChoice == 3) {
        // Lizard beats Spock - a win!
        console.log("win");
        return 1;
    }
    else if (playerChoice == 4 && computerChoice == 1) {
        // Lizard beats paper - a win!
        console.log("win");
        return 1;
    }
    else {
        // All other combinations are losses
        console.log("lose");
        return -1;
    }
}

function displayScoreBoard(winsId, lossesId, tiesId) {
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[1];
    document.getElementById(tiesId).innerHTML = score[2];
}

function displayMatchBoard(winsId, lossesId) {
    document.getElementById(winsId).innerHTML = match[0];
    document.getElementById(lossesId).innerHTML = match[1];
}

function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
    if (score[0] == 2 || score[1] == 2) {
        updateMatch(val);
    }
}

function updateMatch(val) {
    score = [0, 0, 0];
    ++match[val];
    console.log("The match tally is now " + match);
}

function displayGameResult(resultId) {
    // Define an array of text labels for the choices 0, 1, 2, 3, 4;
    var choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    if (result == 1) {
        // Display that it was a win
        updateScore(0);
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    }
    else if (result == -1) {
        updateScore(1);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    }
    else {
        // Display that it was a tie
        updateScore(2);
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}

function openPage() {
    window.open("/rochambeau.html", "_blank", "width=1000,height=1200");
}

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function storeComputerChoice() {
    // Generate computer's random choice
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}
