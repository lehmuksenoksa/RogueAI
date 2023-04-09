export function movePlayer(dungeon, dx, dy) {
    const currentPosition = findPlayerPosition(dungeon);
    const [x, y] = currentPosition;
  
    const newX = x + dx;
    const newY = y + dy;
  
    if (dungeon[newY][newX] !== "#") {
      dungeon[y][x] = ".";
      dungeon[newY][newX] = "@";
    }
  }
  
  function findPlayerPosition(dungeon) {
    for (let y = 0; y < dungeon.length; y++) {
      for (let x = 0; x < dungeon[y].length; x++) {
        if (dungeon[y][x] === "@") {
          return [x, y];
        }
      }
    }
  }
  