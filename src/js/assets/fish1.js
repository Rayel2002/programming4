import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "../resources.js";
export class Fish extends Actor {

    constructor() {
        super({width:Resources.Fish.width, height:Resources.Fish.height})
    }

    onInitialize(engine) {  
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(200, 350)
        this.vel = new Vector(0, 0)
    }

    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0
        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {yspeed = -400}
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {yspeed = 150}
        this.vel = new Vector (xspeed, yspeed)
    }
}