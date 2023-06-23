import * as ex from "excalibur";
import { Game } from "./main.js";
import { ResourceLoader, Resources } from "./resources.js";
import { MainGame } from "./game-screen.js";

export class StartScreen extends ex.Scene {
  constructor() {
    super();
  }

  onInitialize(engine) {
    const Background = new ex.Actor({
      x: 0,
      y: 0,
    });
    Background.graphics.use(Resources.Background.toSprite());
    this.add(Background);
    console.log(Background);

    const Start = new ex.Actor({
        x: 0,
        y: 0,
      });
      Start.graphics.use(Resources.Start.toSprite());
      Start.scale = new ex.Vector(4.0, 4.0);
      this.add(Start);

    let camera = engine.currentScene.camera;
    camera.strategy.lockToActor(Background);
    this.camera.zoom = 1.5;
  }

  onPreUpdate(engine) {
    if (engine.input.keyboard.wasPressed(ex.Input.Keys.Space)) {
      console.log("input");

      const mainGame = new MainGame();
      engine.addScene("Game", mainGame);
      engine.goToScene("Game");
    }
  }
}
