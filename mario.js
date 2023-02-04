class Mario {
  constructor(x, y, imgR, imgL, imgSL, imgSR) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.imgSR = imgSR;
    this.imgSL = imgSL;
    this.imgR = imgR;
    this.imgL = imgL;
    this.currentImg = "MarioStoodR";
    this.xdir = 0;
  }

  show() {
    if (this.currentImg === "MarioStoodR") {
      image(this.imgSR, this.x, this.y, this.width, this.height);
    }

    if (this.currentImg === "MarioStoodL") {
      image(this.imgSL, this.x, this.y, this.width, this.height);
    }

    if (this.currentImg === "MarioRight") {
      image(this.imgR, this.x, this.y, this.width, this.height);
    }

    if (this.currentImg === "MarioLeft") {
      image(this.imgL, this.x, this.y, this.width, this.height);
    }
  }

  moveRight() {
    this.currentImg = "MarioRight";
    this.x += this.xdir * 10;

    // image animation

    console.log(this.currentImg);
  }

  moveLeft() {
    this.currentImg = "MarioLeft";
    this.x += this.xdir * 10;

    // image animation

    console.log(this.currentImg);
  }

  setDir(dir) {
    this.xdir = dir;
  }
}
