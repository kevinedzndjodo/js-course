var playing = false;
var score;
//if we clickk on the start/reset

document.getElementById("start").onclick = function () {
  // if we are playing
  if (playing == true) {
    location.reload(); //reload page
  } else {
    //if we are not playing
    score = 0;
    playing = true;
    //set score to 0
    document.getElementById("scoreValue").innerHTML = score;

    //show countdown box
    document.getElementById("timeLaps").style.display = "block";

    //change button to reset
    document.getElementById("start").innerHTML = "Reset";

    //countdown
    startCountdown();
  }
};

//reduce timeby 1sec in loops
//time left?
//yes -> continue
//no -> gameover
//generate new questions

function startCountdown() {}
