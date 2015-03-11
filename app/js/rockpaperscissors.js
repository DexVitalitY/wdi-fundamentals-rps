////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log(" Please choose either 'rock', 'paper', or 'scissors'. \n")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
	playerMove = getInput();
	return playerMove;
}

function getComputerMove(move) {
	computerMove = randomPlay();
	return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == "rock" && computerMove == "rock") {
    	winner = "tie";
    	return winner;
    } else if (playerMove == "rock" && computerMove == "paper") {
    	winner = "BORG";
    	return winner;
    } else if (playerMove == "rock" && computerMove == "scissors"){
    	winner = "player";
    	return winner;
    } else if (playerMove == "paper" && computerMove == "paper") {
    	winner = "tie";
    	return winner;
    } else if (playerMove == "paper" && computerMove == "scissors") {
    	winner = "BORG";
    	return winner;
    } else if (playerMove == "paper" && computerMove == "rock") {
    	winner = "player";
    	return winner;
    } else if (playerMove == "scissors" && computerMove == "paper") {
    	winner = "player"
    	return winner;
    } else if (playerMove == "scissors" && computerMove == "scissors") {
    	winner = "tie";
    	return winner; 
    } else if (playerMove == "scissors" && computerMove == "rock") { 
    	winner = "BORG";
    	return winner;
    }
    console.log(winner);
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 || computerWins < 5) {
        
  getPlayerMove();
  getComputerMove();
  getWinner(playerMove, computerMove);
  
    if (getWinner(playerMove, computerMove) == "BORG") {
    	computerWins += 1;
    	if (computerWins == 5) {
    	    return [ "BORG WINS! RESISTANCE IS FUTILE! YOU WILL BE ASSIMILATED! Player Score: " + playerWins, "Computer Score: " + computerWins]
    	} 
        } else if (getWinner(playerMove, computerMove) == "player") {
    	playerWins += 1;
    	if (playerWins == 5) {
    	    return [ "PLAYER WINS! THE BORG Have been Defeated! Player Score: " + playerWins, "Computer Score: " + computerWins];
    	} 
	} 
  console.log("Player chose " + playerMove + " while BORG chose " + computerMove + "\n");
  console.log("The score is currently Player: " + playerWins + " to  Computer: " + computerWins + "\n");        } 
    }




return [playerWins, computerWins];



	if (playerMove != "rock" || "paper" || "scissors") {
	    console.log("Please make sure to input rock, paper, or scissors in order to play! \n");
	} 













