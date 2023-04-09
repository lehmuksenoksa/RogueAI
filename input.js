import { game } from "./script.js";

export function handleKeyDown(event) {
  event.preventDefault();
  const dungeon = game.dungeon;
  const player = game.player;
 
  let [x, y] = player.getPosition();
  let newX = x;
  let newY = y;

  switch (event.key) {
    case "ArrowUp":
    case "w":
    case "W":
      newY -= 1;
      break;
    case "ArrowDown":
    case "s":
    case "S":
      newY += 1;
      break;
    case "ArrowLeft":
    case "a":
    case "A":
      newX -= 1;
      break;
    case "ArrowRight":
    case "d":
    case "D":
      newX += 1;
      break;
  }

  if (dungeon.map[newY][newX] !== "#") {
    player.setPosition(newX, newY);
  }

  dungeon.render(player);
}
