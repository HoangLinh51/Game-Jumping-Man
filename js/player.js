game.player = {
  x: 54,
  y: 0,
  height: 24,
  highestY: 0,
  direction: "left",
  isInAir: false,
  startedJump: false,
  jumpCourt: 0,
  timeout: 0,
  moveInterval: null,
  fallTimeout: function (startingY, time, maxHeight) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(
      function () {
        if (this.isInAir) {
          this.y = startingY - maxHeight + Math.pow(-time / 3 + 11, 2);
          if (this.y < this.highestY) {
            this.highestY = this.y;
          }
          if (time > 37) {
            this.startedJump = false;
            game.checkCollisions();
          }
          if (time < 150) {
            time++;
            this.fallTimeout(startingY, time, maxHeight);
          } else {
            game.isOver = true;
          }
          if (this.y > 40) {
            game.isOver = true;
          }
          game.requestRedraw();
        }
      }.bind(this, startingY, time, maxHeight),
      12
    );
  },

  animationFrameNumber: 0,
  collidesWithGround: true,
  animations: {
    // Describe coordinates of consecutive animation frames of objects in textures
    left: [
      { tileColumn: 4, tileRow: 0 },
      { tileColumn: 5, tileRow: 0 },
      { tileColumn: 7, tileRow: 0 },
      { tileColumn: 5, tileRow: 0 },
    ],
    right: [
      { tileColumn: 9, tileRow: 0 },
      { tileColumn: 8, tileRow: 0 },
      { tileColumn: 6, tileRow: 0 },
      { tileColumn: 8, tileRow: 0 },
    ],
  },
  jump: function (type) {
    if (this.jumpCount >= 2) return;

    if (!this.isInAir) {
      this.isInAir = true;
      this.jumpCount = 1;
    } else {
      this.jumpCount++;
    }

    clearInterval(this.fallInterval);
    game.sounds.jump.play();

    let startingY = this.y;
    console.log("startingY", this.y);
    let time = 1;
    let maxHeight = 121;
    if (type === "fall") {
      console.log("type = fall");
      time = 30;
      maxHeight = 0;
    }
    this.fallTimeout(startingY, time, maxHeight);
  },

  resetJump: function () {
    this.jumpCount = 0;
    this.isInAir = false;
  },
};
