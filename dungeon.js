export class Dungeon {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.map = this.createEmptyDungeon(width, height);
    }
  
    createEmptyDungeon(width, height) {
      const dungeon = [];
      for (let y = 0; y < height; y++) {
        const row = [];
        for (let x = 0; x < width; x++) {
          row.push("#");
        }
        dungeon.push(row);
      }
      return dungeon;
    }
  
    generateDungeon() {
            // Add walls around the dungeon
    for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          if (x === 0 || x === this.width - 1 || y === 0 || y === this.height - 1) {
            this.map[y][x] = "#";
          }
        }
      }
  
      // Number of rooms to generate
      const roomCount = 8;
      const rooms = [];
  
      for (let i = 0; i < roomCount; i++) {
        // Generate random room dimensions and positions
        const roomWidth = Math.floor(Math.random() * 4) + 4; // Width between 4 and 7
        const roomHeight = Math.floor(Math.random() * 4) + 4; // Height between 4 and 7
        const roomX = Math.floor(Math.random() * (this.width - roomWidth - 2)) + 1;
        const roomY = Math.floor(Math.random() * (this.height - roomHeight - 2)) + 1;
  
        const newRoom = {
          x: roomX,
          y: roomY,
          width: roomWidth,
          height: roomHeight,
        };
  
        let overlap = false;
        for (const existingRoom of rooms) {
          if (
            newRoom.x < existingRoom.x + existingRoom.width &&
            newRoom.x + newRoom.width > existingRoom.x &&
            newRoom.y < existingRoom.y + existingRoom.height &&
            newRoom.y + newRoom.height > existingRoom.y
          ) {
            overlap = true;
            break;
          }
        }
  
        if (!overlap) {
          rooms.push(newRoom);
        }
      }
  
      // Create rooms
      for (const room of rooms) {
        for (let y = room.y; y < room.y + room.height; y++) {
          for (let x = room.x; x < room.x + room.width; x++) {
            this.map[y][x] = ".";
          }
        }
      }
  
      // Connect rooms with corridors
      for (let i = 0; i < rooms.length - 1; i++) {
        const roomA = rooms[i];
        const roomB = rooms[i + 1];
  
        const pointA = {
          x: Math.floor(roomA.x + roomA.width / 2),
          y: Math.floor(roomA.y + roomA.height / 2),
        };
  
        const pointB = {
          x: Math.floor(roomB.x + roomB.width / 2),
          y: Math.floor(roomB.y + roomB.height / 2),
        };
  
        // Generate a horizontal corridor
        for (let x = Math.min(pointA.x, pointB.x); x <= Math.max(pointA.x, pointB.x); x++) {
          this.map[pointA.y][x] = ".";
        }
  
        // Generate a vertical corridor
        for (let y = Math.min(pointA.y, pointB.y); y <= Math.max(pointA.y, pointB.y); y++) {
          this.map[y][pointB.x] = ".";
        }
      }
    }
  
    render(player) {
        const gameElement = document.getElementById("game");
        const renderMap = this.map.map((row, y) => row.map((cell, x) => {
          if (player.x === x && player.y === y) {
            return "@";
          }
          return cell;
        }));
        gameElement.textContent = renderMap.map(row => row.join("")).join("\n");
      }
  }
  