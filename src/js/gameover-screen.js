import {Color, Font, FontUnit, Label, Scene, Vector, Actor, CollisionType, vec} from "excalibur";
import {Resources, ResourceLoader } from '../js/resources.js'

export class GameOver extends Scene {
    constructor() {
        super();
    }
    engine
    score
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.button = new Actor({
            z: 100,
            x: 700,
            y: 520,
            width: Resources.retryButton.width,
            height: Resources.retryButton.height,
            collisionType: CollisionType.PreventCollision
        })
        this.button.graphics.use(Resources.retryButton.toSprite())
        this.button.actions.scaleTo(vec(3.5,3.5),vec(7,7))
        this.button.on('pointerup', () => {
            location.reload();
        })
        this.add(this.button)
    }

    onActivate(ctx) {
        const Background = new ex.Actor({
            x: 0,
            y: 0,
          });
          Background.graphics.use(Resources.Background.toSprite());
          this.add(Background);
        this.add(backgroundLoop);
        if(ctx.data) {
            this.mylabel = new Label({
                text: `Score: ${ctx.data.score}`,
                pos: new Vector(630, 330),
                font: new Font({
                    family: 'impact',
                    size: 40,
                    unit: FontUnit.Px,
                    color:Color.White
                }),
            })

            this.add(this.mylabel)


        }


    }



}