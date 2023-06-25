import * as ex from "excalibur";
import { ResourceLoader, Resources } from "../resources.js";
import { MainGame } from "../game-screen.js";
import { Enemy1 } from "../assets/enemy1.js";

function getRandomNum(min, max) {
    return Math.random() * (max - min);
}
export class Enemy2 extends Enemy1 {
  score;
  constructor() {
    super({ width: Resources.Enemy1.width, height: Resources.Enemy1.height });
  }

  onInitialize(engine) {
    this.engine = engine;
    let sprite = Resources.Enemy1.toSprite();
    sprite.tint = new ex.Color(
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255
    );

    this.graphics.use(sprite);
    this.scale = new ex.Vector(0.55, 0.55);
    this.pos = new ex.Vector(600, 200);
    this.vel = new ex.Vector(-180, 0);
    this.on("exitviewport", (event) => this.exitView());
  }
  exitView(event) {
    this.engine.currentScene.updateLives();
    this.kill();
  }
}
