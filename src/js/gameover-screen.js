import {
  Color,
  Font,
  FontUnit,
  Label,
  Scene,
  Vector,
  Actor,
  CollisionType,
  vec,
} from "excalibur";
import { Resources, ResourceLoader } from "../js/resources.js";

export class GameOver extends Scene {
  constructor() {
    super();
  }
  engine;
  score;
  onInitialize(_engine) {
    super.onInitialize(_engine);

    // voegt de opnieuw knop toe aan de eindscene
    this.button = new Actor({
      z: 100,
      x: 400,
      y: 300,
      width: Resources.reloadButton.width,
      height: Resources.reloadButton.height,
      collisionType: CollisionType.PreventCollision,
    });
    this.button.graphics.use(Resources.reloadButton.toSprite());
    this.button.actions.scaleTo(vec(0, 1));
    this.button.on("pointerup", () => {
      location.reload();
    });
    this.add(this.button);
  }

  onActivate(ctx) {
    // voegt de achtergrond toe aan de eindscene
    const Background = new Actor({
      x: 0,
      y: 0,
    });
    Background.graphics.use(Resources.Background.toSprite());
    this.add(Background);
    Background.scale = new Vector(4, 4);

    // geeft de eindscore aan
    if (ctx.data) {
      this.mylabel = new Label({
        text: `Score: ${ctx.data.score}`,
        pos: new Vector(100, 100),
        font: new Font({
          family: "Invasion2000",
          size: 40,
          color: Color.Black,
        }),
      });

      this.add(this.mylabel);
    }
  }
}
