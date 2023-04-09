export class Player {
    constructor() {
      this.x = null;
      this.y = null;
    }
  
    getPosition() {
      return [this.x, this.y];
    }
  
    setPosition(x, y) {
      this.x = x;
      this.y = y;
    }
  
    initializePlayer(dungeon) {
      while (true) {
        const x = Math.floor(Math.random() * dungeon.width);
        const y = Math.floor(Math.random() * dungeon.height);
  
        if (dungeon.map[y][x] !== "#") {
          this.setPosition(x, y);
          break;
        }
      }
    }
  }
  