import * as ex from "excalibur";
import {ResourceLoader, Resources } from "../resources.js";

// genereerd een random nummer voor de spawner
function getRandomNum(min, max) {
    return Math.random() * (max - min);
}

export class Enemy1 extends ex.Actor {
    score;
  constructor() {
    // geeft de hitbox van de enemy aan
    super({ width: Resources.Enemy1.width, height: Resources.Enemy1.height });
  }

  // plaatst de enemy op het canvas
  onInitialize(engine) {
    this.engine = engine
    this.graphics.use(Resources.Enemy1.toSprite())
    this.pos = new ex.Vector(600, 300)
    this.vel = new ex.Vector(-180, 0)
    this.scale = new ex.Vector(0.5, 0.5)
    this.on("exitviewport", (event) => this.exitView())
  }

  // update score als de enemy uit het scherm gaat
  exitView(event){
    this.engine.currentScene.updateScore();
    this.kill()
}
}