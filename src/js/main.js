import { Actor, Engine, Input, Random, Vector, } from "excalibur"
import { Resources, ResourceLoader } from "./resources.js";
import { StartScreen } from "./start-screen.js";
import { MainGame } from "./game-screen.js";
import { GameOver } from "./gameover-screen.js";


export class Game extends Engine {
  constructor() {
    super({ width: 800, height: 600 });
    this.start(ResourceLoader).then(() => this.startGame());
    this.random = new Random(1337);
  }
  
// stuurt je vanaf het begin naar de startscene
  startGame() {
    this.add("MainGame", new MainGame(this.engine))
    this.add("GameOver", new GameOver(this.engine))
    this.addScene("StartScreen", new StartScreen(this.engine))
    this.goToScene("StartScreen");
  }
}
new Game();
