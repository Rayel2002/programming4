import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import background from '../images/backgroundimage.jpg'
import start from '../images/Press-Start.png'
import fish from '../images/miniplayerShark.png'
import gamebackground from '../images/background-3.gif'

const Resources = {
    Background: new ImageSource(background),
    Start: new ImageSource(start),
    Fish: new ImageSource(fish),
    GameBackground: new ImageSource(gamebackground),
}

// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}


const ResourceLoader = new Loader(resourceArray);
ResourceLoader.suppressPlayButton = true 
export { Resources, ResourceLoader };
