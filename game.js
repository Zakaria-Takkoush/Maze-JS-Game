 // window.onunload = function {}
 
// initialize event variables

 var game_start = document.getElementById("start")
 var game_end = document.getElementById("end")
 var game = document.getElementById("game")
 var walls = game.getElementsByClassName("boundary")
 var board = document.getElementsByClassName("boundary example")
 var instructions = document.getElementById("status")
 
// declare score
var score = 0

// Add intrusctions
instructions.innerHTML = '<h2>Begin by moving your mouse over the "S".<br> Reach the end without touching the walls or you will lose!<br> Click on S to reset</h2>'

// start-game function
function start_game() {
    for (let i = 0; i < walls.length; i++) {
        walls[i].classList.remove("youlose")
    }
    game_end.addEventListener("mouseover", you_won);
    for (let i = 0; i < walls.length; i++) {
        walls[i].addEventListener("mouseover", you_lost);
    }
}

// reset-game function (click on S)
function reset_game() {
    score = 0
    board[0].innerHTML = "Score reset!" + "</br> Score:" + score 
    board[0].style.height = "auto"
    board[0].style.width = "fit-content"
    // Call the game start function
    start_game()
}

// losing function - when touching walls
function you_lost() {
    for (let i = 0; i < walls.length; i++) {
        walls[i].classList.add("youlose")
    }
    score -= 10
    board[0].innerHTML = "YOU LOST!" + "</br> Score:" + score 
    board[0].style.height = "auto"
    board[0].style.width = "fit-content"
    // Disable winning
    game_end.removeEventListener("mouseover", you_won);
    // disable losing again
    for (let i = 0; i < walls.length; i++) {
        walls[i].removeEventListener("mouseover", you_lost);
    }    
    // enable the abilty to start again
    game_start.addEventListener("mouseover", start_game);
}

// winning function - when touching end
function you_won() {
    score += 5
    board[0].innerHTML = "YOU WON!" + "</br> Score:" + score
    board[0].style.height = "auto"
    board[0].style.width = "fit-content"
    // Disable winning again
    game_end.removeEventListener("mouseover", you_won);
    // Disable losing
    for (let i = 0; i < walls.length; i++) {
        walls[i].removeEventListener("mouseover", you_lost);
    }    
    // Enable the abilty to start again
    game_start.addEventListener("mouseover", start_game);
}

// Game utilities

// start game - Game Initializer:
game_start.addEventListener("mouseover", start_game);

// reset game:
// game_start.addEventListener("click", reset_game);

// win: 
// game_end.addEventListener("mouseover", you_won);

// lose:
/* 
for (let i = 0; i < walls.length; i++) {
    walls[i].addEventListener("mouseover", you_lost);
}
*/

/* sequence of the game:
When move over S:
enable win adn lose

lose:
disable win 
enable start

when win:
disable win and lose
enable start*/
