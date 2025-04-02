// Your code here
"use strict"

const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movementSound");
const gameoverSound = document.getElementById("gameoverSound");




  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
    if (e.key === "ArrowUp") {
        moveDodgerUp();
      }
    if (e.key === "ArrowDown") {
        moveDodgerDown();
      }
  });

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
      playSoundOnMovement();
    }
    if (left === 0) {
        playGameOverSound();
    }
  }


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
        playSoundOnMovement();
    }

    if (left === 360) {
        playGameOverSound();
    }
  }

function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 1}px`;
        playSoundOnMovement();
        
    }
    if (bottom === 340) {
        playGameOverSound();
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`;
        playSoundOnMovement();
        
    }

    if (bottom === 0) {
        playGameOverSound();
    }
}



function playSoundOnMovement() {
    movementSound.currentTime = 0;
    movementSound.play ();
}

function playGameOverSound() {
    movementSound.currentTime = 0;
    gameoverSound.play ();
}