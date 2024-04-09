// Your code here

// event listeners:take two parameters:event to listen for ,and whats to do once it's hears.

// select the bottom element ,grab the document

const dodger = document.getElementById("dodger");

dodger.style.background = "#FF69B4";
dodger.style.bottom = "100px";


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");// current position of the dodger in px
    // distance between the dodger and the width to the left
    const left = parseInt(leftNumbers, 10); // we want to change the integer into a string (10 represents base 10)
  
    if (left > 0) {
        //make sure there is space to be moved in the firts place 
      dodger.style.left = `${left - 1}px`;// if there is space ,move it by 1 px the higher the pixel number the faster it is
    }
  }
// move the dodger to left using the keydown event
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


// Move the dodger to the right

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    const dodgerWidth = 40;//width of the dodger element

    const gameFieldWidth = 400; // width of the game field

    if (left + dodgerWidth < gameFieldWidth) {
        dodger.style.left = `${left + 5}px`;
      }
    
}
document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
