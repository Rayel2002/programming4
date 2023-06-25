import * as ex from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { StartScreen } from "./start-screen.js";


export class Game extends ex.Engine {
  constructor() {
    super({ width: 800, height: 600 });
    this.start(ResourceLoader).then(() => this.startGame());
  }
  
// stuurt je vanaf het begin naar de startscene
  startGame() {
    console.log("start de game!");
    const startScreen = new StartScreen();
    this.addScene("StartScreen", startScreen);
    this.goToScene("StartScreen");
  }
}
new Game();
