import { Actor, Vector, GraphicsGroup } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";

export class GameBackground extends Actor {
  constructor() {
    super({ z: 0 });
  }

  offset;

  onInitialize(engine) {
    // voegt de achtergrond toe aan de scene dmv een actor
    this.graphics.use(Resources.GameBackground.toSprite());
    this.graphics.anchor = new Vector(0, 0);
    this.pos = new Vector(0, 0);
    this.scale = new Vector(1.7, 1.7);
  }
}
