// Global

// Game Control
let stage = 0; // keeps track of which functions should be run

// Player
let mario;
let posX = 200; // p1 for player 1
let posY = 560;

// Gravity
let isJumping = false;
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
  } // on ground.
  else {
    mario.y = mario.y + direction * velocity;
  } // fall.

  if (isJumping == true) {
    velocity = -jumpPower;
  } else {
    velocity = fallingSpeed;
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    mario.currentImg = "MarioRight";
    mario.setDir(1);
  }

  if (keyCode === LEFT_ARROW) {
    mario.currentImg = "MarioLeft";
    mario.setDir(-1);
  }

  if (keyCode === UP_ARROW) {
    isJumping = true;
    console.log("mario jumping");
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
