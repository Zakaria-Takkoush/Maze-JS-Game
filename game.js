 // window.onunload = function {}
 
// initialize event variables

 var game_start = document.getElementById("start")
 var game_end = document.getElementById("end")
 var walls = document.getElementsByClassName("boundary")
 var board = document.getElementsByClassName("boundary example")
 var game = document.getElementById("game")
 
// declare score
var score

// start-game function
function start_game() {
}

// losing function - when touching walls
function you_lost() {
    for (let i = 0; i < walls.length; i++) {
        walls[i].classList.add("youlose")
    }
    score -= 10
}

// winning function - when touching end
function you_won() {
    score += 5
}

// Game utilities

// start game:

// win: 

// lose:
for (let i = 0; i < walls.length; i++) {
    walls[i].addEventListener("mouseover", you_lost);
}


