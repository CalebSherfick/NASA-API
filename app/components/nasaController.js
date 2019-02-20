//PRIVATE
import NasaService from "./nasaService.js";


let _ns = new NasaService()


function drawPhotos() {
  let photos = _ns.Photos
  let template = ''
  template = photos.getTemplate()
  //handles photo list
  document.getElementById('nasa-photos').innerHTML = template
}




//PUBLIC
export default class NasaController {
  constructor() {
    _ns.addSubscriber('photos', drawPhotos)

    _ns.getAllApiPhotos()
  }
}