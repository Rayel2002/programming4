import * as ex from "excalibur";
import {ResourceLoader, Resources } from "../resources.js";


export class Enemy1 extends ex.Actor {
  constructor() {
    super({ width: Resources.Enemy1.width, height: Resources.Enemy1.height });
  }

  onInitialize(engine) {
    this.engine = engine
    this.graphics.use(Resources.Enemy1.toSprite())
    this.pos = new ex.Vector(600, 300)
    this.vel = new ex.Vector(-180, 0)
    this.scale = new ex.Vector(0.5, 0.5)
  }

  score;
}