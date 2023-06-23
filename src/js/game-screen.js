import { Resources, ResourceLoader } from "./resources.js";
import * as ex from "excalibur";
import { StartScreen } from "./start-screen.js";

export class MainGame extends ex.Scene {
    constructor() {
        super();
    }

    onInitialize(engine) {
        console.log("start de game!");
    }
}