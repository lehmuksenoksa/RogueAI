import { dungeonWidth, dungeonHeight, generateDungeon, renderDungeon } from "./dungeon.js";
import { movePlayer } from "./player.js";

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
  window.addEventListener("keydown", handleKeyDown);
}

document.addEventListener("DOMContentLoaded", () => {
  initializeGame();
});

function handleKeyDown(event) {
  const dungeon = game.dungeon;
  event.preventDefault();
  switch (event.key) {
    case "ArrowUp":
    case "w":
    case "W":
      movePlayer(dungeon, 0, -1);
      break;
    case "ArrowDown":
    case "s":
    case "S":
      movePlayer(dungeon, 0, 1);
      break;
    case "ArrowLeft":
    case "a":
    case "A":
      movePlayer(dungeon, -1, 0);
      break;
    case "ArrowRight":
    case "d":
    case "D":
      movePlayer(dungeon, 1, 0);
      break;
  }
  renderDungeon(dungeon);
}
