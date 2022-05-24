 window.onload = function () {
 
// initialize event variables

 var game = document.getElementById("game")
 var game_start = document.getElementById("start")
 var game_end = document.getElementById("end")
 var walls = game.getElementsByClassName("boundary")
 var board = document.getElementsByClassName("boundary example")
 var instructions = document.getElementById("status")

 // Create the timer bar
 // var timer_bar = document.createElement("div")

 var live_time = secs + ":" + tens
 var last_time = secs + ":" + tens
 var best_time = secs + ":" + tens
 var timer_list = []

 var tens = 00
 var secs = 00
 var append_tens = document.getElementById("tens")
 var append_secs = document.getElementById("secs")
 var last_tens = document.getElementById("last_tens")
 var last_secs = document.getElementById("last_secs")
 var best_tens = document.getElementById("best_tens")
 var best_secs = document.getElementById("best_secs")
 var interval;

// declare score
var score = 0

// Add intrusctions
instructions.innerHTML = '<h2>Begin by moving your mouse over the "S".<br> Reach the end without touching the walls or you will lose!<br> Click on S to reset</h2>'

// start-game function
function start_game() {
    instructions.innerHTML = "<h2><br><br>Game Started!</h2>"
    for (let i = 0; i < walls.length; i++) {
        walls[i].classList.remove("youlose")
    }
    game_end.addEventListener("mouseover", you_won);
    for (let i = 0; i < walls.length; i++) {
        walls[i].addEventListener("mouseover", you_lost);
    }
    // Reset game on click
    game_start.addEventListener("click", reset_game);

    // When the user leaves the game box
    game.addEventListener("mouseleave", box_leave);

    // Start timer
    interval = setInterval(startTimer)
}

// leave the game box
function box_leave() {
    instructions.innerHTML = "<h2><br>Don't get out of the box!!<br> Start again!</h2>"
    // Disable winning
    game_end.removeEventListener("mouseover", you_won);
    // Disable losing again
    for (let i = 0; i < walls.length; i++) {
        walls[i].removeEventListener("mouseover", you_lost);
    }    
    // Enable the abilty to start again
    game_start.addEventListener("mouseover", start_game);
}

// reset-game function (click on S)
function reset_game() {
    instructions.innerHTML = "<h2><br>Game Reset!<br>Start Over Again!</h2>"
    // Resest Score
    score = 0
    board[0].innerHTML = "Score reset!" + "</br> Score: " + score 
    board[0].style.height = "auto"
    board[0].style.width = "fit-content"
    // Call the game start function
    start_game()

    // Reset timer
    clearInterval(interval)
    tens = "00"
    secs = "00"
    append_secs.innerHTML = secs
    append_tens.innerHTML = tens
    last_secs.innerHTML = secs
    last_tens.innerHTML = tens
    best_secs.innerHTML = secs
    best_tens.innerHTML = tens
}

// losing function - when touching walls
function you_lost() {
    instructions.innerHTML = "<h2><br>YOU LOST!<br>Start Over Again!</h2>"
    for (let i = 0; i < walls.length; i++) {
        walls[i].classList.add("youlose")
    }
    // CHange score
    score -= 10
    board[0].innerHTML = "Score: " + score 
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
    // Remove out of box listener
    game.removeEventListener("mouseleave", box_leave);
}

// winning function - when touching end
function you_won() {
    instructions.innerHTML = "<h2><br>YOU WON!!<br>Start Over Again!</h2>"
    // CHange score
    score += 5
    board[0].innerHTML = "Score: " + score
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
    // Remove out of box listener
    game.removeEventListener("mouseleave", box_leave);

    // End timer
    last_secs.innerHTML = secs
    last_tens.innerHTML = tens
    append_secs.innerHTML = 00
    append_tens.innerHTML = 00
    clearInterval(interval)
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

// leave the game box
// game.addEventListener("mouseleave", you_lost);

/* sequence of the game:
When move over S:
enable win and lose

lose:
disable win 
enable start

when win:
disable win and lose
enable start*/

function startTimer() {
    tens++
    if (tens<9){                                // 0 to 9 1/100 secs
        append_tens.innerHTML = "0" + tens
    }
    if (tens>9){                                // 9 to 99 1/100 secs
        append_tens.innerHTML = tens
    }
    if (tens>99){                               // after 1 second cycle
        secs++
        append_secs.innerHTML = "0" + secs
        tens = 0
        append_tens.innerHTML = "0" + 0
    }
    if (secs>9){                                // after 10 second cycle
        append_secs.innerHTML = secs
    }
}

console.log(tens);
console.log(secs);
console.log(interval);

}