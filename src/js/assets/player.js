import * as ex from "excalibur";
import {ResourceLoader, Resources} from "../resources.js";

// zorgt ervoor dat de speler kan schieten
export class Player extends ex.Actor {
    constructor() {
        super({width:Resources.Player.width, height:Resources.Player.height})
    }

    // voegt de speler toe aan de scene dmv een actor
    onInitialize(engine) {  
        this.engine = engine
        this.graphics.use(Resources.Player.toSprite())
        this.pos = new ex.Vector(200, 350)
        this.vel = new ex.Vector(0, 0)
        this.scale = new ex.Vector(0.5, 0.5)
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    
    hitSomething(event)
    {event.other.kill();
        this.engine.currentScene.updateScore()
    }

    // zorgt ervoor dat de speler kan bewegen
    onPreUpdate(engine, _delta) {
        let xspeed = 0
        let yspeed = 0
        if (engine.input.keyboard.isHeld(ex.Input.Keys.W) || engine.input.keyboard.isHeld(ex.Input.Keys.Up)) {yspeed = -150}
        if (engine.input.keyboard.isHeld(ex.Input.Keys.S) || engine.input.keyboard.isHeld(ex.Input.Keys.Down)) {yspeed = 150}
        this.vel = new ex.Vector (xspeed, yspeed)
    }

    // zorgt ervoor dat de speler niet uit het scherm kan zwemmen
    onPostUpdate(engine, _delta) {
        super.onPostUpdate(engine, _delta);
        if(this.pos.y < -50+Resources.Player.width/2) {this.pos = new ex.Vector(200,-50+Resources.Player.width/2)}
        if(this.pos.y > 650-Resources.Player.width/2) {this.pos = new ex.Vector(200,650-Resources.Player.width/2)}
    }
}