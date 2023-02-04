// Global

// Game Control
let stage = 0; // keeps track of which functions should be run

// Player
let posX = 500; // p1 for player 1
let posY = 600;
let playerWidth = 30;
let playerHeight = 70;

// boxes (platforms)
let boxX = 200;
let boxY = 300;
let boxWidth = 200;
let boxHeight = 40;

// --------- SETUP ---------

function setup() {
  createCanvas(1000, 700);
  rectMode(CENTER);
  textAlign(CENTER);
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
} // Close Game
