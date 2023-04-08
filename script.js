const dungeonWidth = 20;
const dungeonHeight = 10;

function createEmptyDungeon(width, height) {
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

function generateDungeon() {
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

function renderDungeon(dungeon) {
  const gameElement = document.getElementById("game");
  gameElement.textContent = dungeon.map(row => row.join("")).join("\n");
}

function movePlayer(dungeon, dx, dy) {
  const currentPos = findPlayerPosition(dungeon);
  const newPos = { x: currentPos.x + dx, y: currentPos.y + dy };

  if (dungeon[newPos.y][newPos.x] !== "#") {
    dungeon[currentPos.y][currentPos.x] = " ";
    dungeon[newPos.y][newPos.x] = "@";
  }
}

function findPlayerPosition(dungeon) {
  for (let y = 0; y < dungeonHeight; y++) {
    for (let x = 0; x < dungeonWidth; x++) {
      if (dungeon[y][x] === "@") {
        return { x, y };
      }
    }
  }
  return null;
}

function handleKeyDown(event) {
  const dungeon = game.dungeon;
  switch (event.key) {
    case "ArrowUp":
      movePlayer(dungeon, 0, -1);
      break;
    case "ArrowDown":
      movePlayer(dungeon, 0, 1);
      break;
    case "ArrowLeft":
      movePlayer(dungeon, -1, 0);
      break;
    case "ArrowRight":
      movePlayer(dungeon, 1, 0);
      break;
  }
  renderDungeon(dungeon);
}

const game = {
    dungeon: null,
  };
  
  function initializeGame() {
    game.dungeon = generateDungeon();
  
    // Place the player character in the center of the dungeon
    const playerX = Math.floor(dungeonWidth / 2);
    const playerY = Math.floor(dungeonHeight / 2);
    game.dungeon[playerY][playerX] = "@";
  
    renderDungeon(game.dungeon);
    document.addEventListener("keydown", handleKeyDown);
  }
  
  initializeGame();
  