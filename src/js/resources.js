import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import background from '../images/backgroundimage.jpg'
import start from '../images/Press-Start.png'
import player from '../images/playersprite.png'
import gamebackground from '../images/background-3.webp'
import villain from '../images/TyT86e.png'
import reloadButton from "../images/realoadbutton.png";

const Resources = {
    Background: new ImageSource(background),
    Start: new ImageSource(start),
    Player: new ImageSource(player),
    GameBackground: new ImageSource(gamebackground),
    Enemy1 : new ImageSource(villain),
    reloadButton: new ImageSource(reloadButton),
}

// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}


const ResourceLoader = new Loader(resourceArray);
ResourceLoader.suppressPlayButton = true 
export { Resources, ResourceLoader };
