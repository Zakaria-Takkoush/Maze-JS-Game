 // window.onunload = function {}
 
// initialize event variables

 var game_start = document.getElementById("start")
 var game_end = document.getElementById("end")
 var walls = document.getElementsByClassName("boundary")
 var board = document.getElementsByClassName("boundary example")
 var game = document.getElementById("game")
 
// declare score
var score = 0

// start-game function
function start_game() {
    for (let i = 0; i < walls.length; i++) {
        walls[i].classList.remove("youlose")
    }
}

// losing function - when touching walls
function you_lost() {
    for (let i = 0; i < walls.length; i++) {
        walls[i].classList.add("youlose")
    }
    board[0].innerHTML = "YOU LOST!" + "Score:" + score 
    board[0].style.height = "auto"
    board[0].style.width = "fit-content"
    score -= 10
}

// winning function - when touching end
function you_won() {
    board[0].innerHTML = "YOU WON!" + "</br> Score:" + score
    board[0].style.height = "auto"
    board[0].style.width = "fit-content"
    score += 5
}

// Game utilities

// start game:
game_start.addEventListener("mouseover", start_game);

// win: 
game_end.addEventListener("mouseover", you_won);

// lose:
for (let i = 0; i < walls.length; i++) {
    walls[i].addEventListener("mouseover", you_lost);
}





