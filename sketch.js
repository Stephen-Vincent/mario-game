// Global

// p5.play must be enabled for this program to run.

// Game Control
let stage = 0; // keeps track of which functions should be run

// Player
let mario;
let posX = 200; // p1 for player 1
let posY = 560;

// Gravity
let isJumping = false;
let isFalling = false;
let direction = 1;
let velocity = 2;
let minHeight = 560;
let jumpPower = 20;
let fallingSpeed = 5;

// boxes (platforms)
let boxX = 200;
let boxY = 300;
let boxWidth = 200;
let boxHeight = 40;

// --------- PRELOAD -------

function preload() {
  MarioLeft = loadImage("images/MarioWalkingLeft.gif");
  MarioRight = loadImage("images/MarioWalkingRight.gif");
  MarioStoodL = loadImage("images/MarioStoodL.png");
  MarioStoodR = loadImage("images/MarioStoodR.png");
}

// --------- SETUP ---------

function setup() {
  createCanvas(1000, 700);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
  frameRate(30);

  mario = new Mario(
    posX,
    posY,
    MarioRight,
    MarioLeft,
    MarioStoodL,
    MarioStoodR
  );
} // Close Setup

// --------- DRAW ----------

function draw() {
  //Call functions

  if (stage == 0) {
    game();
    keyPressed();
  }
} // Close Draw

// -------- GAME ----------

function game() {
  // appearance of game
  background(150, 230, 240); //sky blue

  // ground
  noStroke();
  fill(100, 200, 75); //green
  rect(width / 2, 650, width, 100);

  // window frame
  noFill();
  stroke(0);
  strokeWeight(15);
  rect(width / 2, height / 2, width, height);

  // draw box
  stroke(0);
  strokeWeight(5);
  fill(255, 120, 0); //dark orange
  rect(boxX, boxY, boxWidth, boxHeight);

  // draw player
  mario.show();

  // Player interactions
  mario.move();
  gravity();
} // Close Game

function gravity() {
  if (mario.y >= minHeight && isJumping == false) {
    mario.y = mario.y;
    isFalling = false; //resets the value.
  } // on ground.
  else {
    mario.y = mario.y + direction * velocity;
    isFalling = true; //stops gif when falling
  } // fall.

  if (isJumping == true) {
    velocity = -jumpPower;
  } else {
    velocity = fallingSpeed;
  }
}

function keyPressed() {
  if (kb.pressing("right")) {
    // console.log("Right arrow pressed");
    mario.currentImg = "MarioRight";
    mario.setDir(1);
    if (isJumping || isFalling) {
      MarioRight.pause(); // stops gif whilst in the air.
    } else {
      MarioRight.play();
    }
  }

  if (kb.pressing("left")) {
    // console.log("left arrow pressed");
    mario.currentImg = "MarioLeft";
    mario.setDir(-1);
    if (isJumping || isFalling) {
      MarioLeft.pause(); // stops gif whilst in the air.
    } else {
      MarioLeft.play();
    }
  }

  if (kb.pressing("space") && mario.y >= minHeight) {
    //stops double jumping
    isJumping = true;
  }

  if (kb.space >= 24) {
    //controls the jumping height of mario
    isJumping = false;
  }
}

function keyReleased() {
  mario.setDir(0);
  isJumping = false;

  if (mario.currentImg === "MarioLeft") {
    mario.currentImg = "MarioStoodL";
  }

  if (mario.currentImg === "MarioRight") {
    mario.currentImg = "MarioStoodR";
  }
}
