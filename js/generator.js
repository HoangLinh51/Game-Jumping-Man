game.structures = {
  grassPlatform: [
    { tileColumn: 0, tileRow: 0, x: 0, y: 0 },
    { tileColumn: 7, tileRow: 1, x: 0, y: -1, collidable: false },
    { tileColumn: 1, tileRow: 0, x: 1, y: 0 },
    { tileColumn: 7, tileRow: 1, x: 1, y: -1, collidable: false },
    { tileColumn: 2, tileRow: 0, x: 2, y: 0 },
    { tileColumn: 7, tileRow: 1, x: 2, y: -1, collidable: false },
  ],
  blockGrass: [
    { tileColumn: 0, tileRow: 1, x: 0, y: 0 },
    { tileColumn: 1, tileRow: 1, x: 1, y: 0 },
    { tileColumn: 2, tileRow: 1, x: 2, y: 0 },
  ],
  brickGray: [
    { tileColumn: 3, tileRow: 1, x: 0, y: 0 },
    { tileColumn: 4, tileRow: 1, x: 1, y: 0 },
    { tileColumn: 5, tileRow: 1, x: 2, y: 0 },
  ],
  brickGold: [
    { tileColumn: 3, tileRow: 2, x: 0, y: 0 },
    { tileColumn: 4, tileRow: 2, x: 1, y: 0 },
    { tileColumn: 5, tileRow: 2, x: 2, y: 0 },
  ],
  vines: [
    { tileColumn: 6, tileRow: 1, x: 0, y: 0 },
    { tileColumn: 6, tileRow: 2, x: 0, y: 1 },
  ],
  cloud: [
    { tileColumn: 0, tileRow: 2, x: 0, y: 0 },
    { tileColumn: 1, tileRow: 2, x: 1, y: 0 },
    { tileColumn: 2, tileRow: 2, x: 2, y: 0 },
  ],
  flower: [{ tileColumn: 7, tileRow: 2, x: 0, y: 0, collidable: false }],
  computer: [{ tileColumn: 8, tileRow: 1, x: 0, y: 0, collidable: false }],
  pot: [{ tileColumn: 9, tileRow: 2, x: 0, y: 0, collidable: false }],
  alient: [{ tileColumn: 9, tileRow: 1, x: 0, y: 0, collidable: false }],
};

game.generateMap = function () {
  // Generate a platform for the player
  this.map.structures.push({
    name: "grassPlatform",
    x: 0,
    y: 0,
  });

  // Generate the rest of the platforms
  for (var i = 1; i < 10; i++) {
    this.map.structures.push({
      name: "grassPlatform",
      x: Math.floor(Math.random() * 8),
      y: -i * 3,
    });
  }

  for (var i = 10; i < 25; i++) {
    randomX = Math.floor(Math.random() * 8);
    this.map.structures.push({
      name: "blockGrass",
      x: randomX,
      y: -i * 3,
    });
    if (Math.floor(Math.random() * 7) == 0) {
      this.map.structures.push({
        name: "flower",
        x: randomX + Math.floor(Math.random() * 3),
        y: -i * 3 - 1,
      });
    }
  }

  for (var i = 25; i < 50; i++) {
    randomX = Math.floor(Math.random() * 8);
    this.map.structures.push({
      name: "brickGray",
      x: randomX,
      y: -i * 3,
    });
    if (Math.floor(Math.random() * 7) == 0) {
      this.map.structures.push({
        name: "computer",
        x: randomX + Math.floor(Math.random() * 3),
        y: -i * 3 - 1,
      });
    }
  }

  for (var i = 50; i < 80; i++) {
    randomX = Math.floor(Math.random() * 8);
    this.map.structures.push({
      name: "brickGold",
      x: randomX,
      y: -i * 3,
    });
    if (Math.floor(Math.random() * 7) == 0) {
      this.map.structures.push({
        name: "pot",
        x: randomX + Math.floor(Math.random() * 3),
        y: -i * 3 - 1,
      });
    }
  }

  for (var i = 80; i < 110; i++) {
    randomX = Math.floor(Math.random() * 8);
    this.map.structures.push({
      name: "vines",
      x: randomX,
      y: -i * 3,
    });
  }

  for (var i = 110; i < 150; i++) {
    randomX = Math.floor(Math.random() * 8);
    this.map.structures.push({
      name: "cloud",
      x: randomX,
      y: -i * 3,
    });
    if (Math.floor(Math.random() * 7) == 0) {
      this.map.structures.push({
        name: "alient",
        x: randomX + Math.floor(Math.random() * 3),
        y: -i * 3 - 1,
      });
    }
  }
};
