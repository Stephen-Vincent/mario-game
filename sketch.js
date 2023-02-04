// Global

// Game Control
let stage = 0; // keeps track of which functions should be run

// Player
let mario;
let posX = 500; // p1 for player 1
let posY = 600;
let playerWidth = 30;
let playerHeight = 70;

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
    posY - 40,
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
} // Close Game

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    mario.setDir(2);
    mario.moveRight();
  }
  if (keyCode === LEFT_ARROW) {
    mario.setDir(-2);
    mario.moveLeft();
  }
}

function keyReleased() {
  mario.setDir(0);

  if (mario.currentImg === "MarioLeft") {
    mario.currentImg = "MarioStoodL";
  }

  if (mario.currentImg === "MarioRight") {
    mario.currentImg = "MarioStoodR";
  }
}
