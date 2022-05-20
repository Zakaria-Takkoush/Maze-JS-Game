 // window.onunload = function {}
 
// initialize event variables

 var game_start = document.getElementById("start")
 var game_end = document.getElementById("end")
 var walls = document.getElementById("boundary1")
 var board = document.getElementsByClassName("boundary example")
 
// declare score
var score

// losing function - when touching walls
function you_lost() {
   // for(var i = 0; i < walls.length; i++) {
        walls.classList.add("youlose")
   // }
}

// start-game function


walls.addEventListener("mouseover", you_lost );

