import { Dungeon } from "./dungeon.js";
import { Player } from "./player.js";
import { handleKeyDown } from "./input.js";

const dungeonWidth = 50;
const dungeonHeight = 25;

export const game = {
  dungeon: null,
  player: null,
};

function initializeGame() {
    game.dungeon = new Dungeon(dungeonWidth, dungeonHeight);
    game.dungeon.generateDungeon();
  
    game.player = new Player();
    game.player.initializePlayer(game.dungeon);
  
    game.dungeon.render(game.player);
    document.addEventListener("keydown", handleKeyDown);
}

initializeGame();
