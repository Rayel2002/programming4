import { Resources, ResourceLoader } from "./resources.js";
import {Actor, Engine, Random, Timer, Vector, Label, Color, Font, FontUnit, Scene, Class, } from "excalibur";
import { StartScreen } from "./start-screen.js";
import { Player } from "./assets/player.js";
import { GameBackground } from "../js/assets/game-background.js";
import { Enemy1 } from "./assets/enemy1.js";
import { Enemy2 } from "./assets/enemy2.js";

export class MainGame extends Scene {
    constructor() {
        super();
    }
    i
    game
    engine
    score
    lives
    mylabel
    mylabel2

    onInitialize(Engine) {
        this.game = Engine
        this.timer = new Timer({
            fcn: () => this.spawn(Engine),
            interval: 1000,
            repeats: true
        })
        Engine.currentScene.add(this.timer)
        this.timer.start()

    }


    onActivate(ctx) {

        const background = new GameBackground();
        this.add(background);
        const player = new Player();
        this.add(player);
        this.score = 0
        this.i = 0
        this.lives = 3
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            }),
        })
        this.add(this.mylabel)

        this.mylabel2 = new Label({
            text: `Lives: ${this.lives}`,
            pos: new Vector(100, 150),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            }),
        })
        this.add(this.mylabel2)
    }
    updateLives(){
        this.lives--
        this.mylabel2.text = `Lives: ${this.lives}`
        if (this.lives <= 0){
            this.mylabel.kill()
            this.mylabel2.text = `You died`
            this.engine.goToScene("GameOver", { score: this.score })
        }
    }
    updateScore(){
        this.score++
        this.mylabel.text = `Score: ${this.score}`
    }

    spawn(engine) {

        const enemy1 = new Enemy1(
            engine.random.integer(0, 700),
            engine.random.integer(0, 1399),
            this.i++,
        )
        this.add(enemy1)
        if (this.engine.currentScene.i === 5){
            const enemy2 = new Enemy2(
                engine.random.integer(0, 700),
                engine.random.integer(0, 1399),
            )
            this.add(enemy2)
            this.i = 0
        }

    }
}