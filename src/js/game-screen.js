import { Resources, ResourceLoader } from "./resources.js";
import * as ex from "excalibur";
import { StartScreen } from "./start-screen.js";
import { Fish } from "./assets/fish1.js";
import { GameBackground } from "./assets/gamebackground.js";
import { Enemy1 } from "./assets/obstacle1.js";

export class MainGame extends ex.Scene {
    constructor() {
        super();
    }


    onInitialize(engine) {
        console.log("start de game!");
    }

    onActivate() {
        console.log("activate");
    const background = new GameBackground;
    this.add(background);

    const fish = new Fish();
    this.add(fish);

    const barrier = new Enemy1();
    this.add(barrier);
    }
}