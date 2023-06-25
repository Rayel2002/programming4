import * as ex from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";

export class GameBackground extends ex.Actor {
        offset
        constructor() {
            super({width:Resources.GameBackground.width, height:Resources.GameBackground.height})
        }

        // voegt de Background toe aan de scene dmv een actor
        onInitialize(engine){
            const spaceImage = Resources.GameBackground.toSprite()
            this.offset = spaceImage.width
    
            const group = new ex.GraphicsGroup({
                members: [
                    {
                        graphic: spaceImage,
                        pos: new ex.Vector(0, 0),
                    },
                    {
                        graphic: spaceImage,
                        pos: new ex.Vector(spaceImage.width, 0),
                    }
                ]
            })
    
            // zorgt ervoor dat de achtergrond beweegt
            this.graphics.anchor = new ex.Vector(0,0)
            this.graphics.add(group)       
            this.pos = new ex.Vector(0, 0)
            this.vel = new ex.Vector(-110, 0)
        }
        // zorgt ervoor dat de achtergrond oneindig doorloopt door hem terug te zetten naar 0 als hij uit het scherm gaat
        onPostUpdate(engine, delta) {
            if (this.pos.x < -this.offset) {
                this.pos = new Vector(0, 0)
            }
        }
    }
