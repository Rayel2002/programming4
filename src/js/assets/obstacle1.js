import {ResourceLoader, Resources} from "../resources.js";
import {Actor, Vector,} from "excalibur";

export class Enemy1 extends Actor {
    constructor() {
        super({width:Resources.Barrier.width, height:Resources.Barrier.height})
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Barrier.toSprite())
        this.pos = new Vector(1380, 700)
        this.vel = new Vector(-180, 0)
        this.on("exitviewport", (event) => this.exitView())
    }

    exitView(event){
        this.kill()
    }
}
