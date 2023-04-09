export const dungeonWidth = 20;
export const dungeonHeight = 10;

export function createEmptyDungeon(width, height) {
  const dungeon = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      row.push(" ");
    }
    dungeon.push(row);
  }
  return dungeon;
}

export function generateDungeon() {
  const dungeon = createEmptyDungeon(dungeonWidth, dungeonHeight);

  // Add walls around the dungeon
  for (let y = 0; y < dungeonHeight; y++) {
    for (let x = 0; x < dungeonWidth; x++) {
      if (x === 0 || x === dungeonWidth - 1 || y === 0 || y === dungeonHeight - 1) {
        dungeon[y][x] = "#";
      }
    }
  }

  return dungeon;
}

export function renderDungeon(dungeon) {
  const gameElement = document.getElementById("game");
  gameElement.textContent = dungeon.map(row => row.join("")).join("\n");
}