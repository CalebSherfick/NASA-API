import Planet from "../models/planet.js";

//PRIVATE

// @ts-ignore
let _nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=HqPCY6IMCreCBMvqdF7iNpXog4eRl2YPIeDxnjrJ'
})

let _state = {
  photos: {}
}

let _subscribers = {
  photos: []
}

function setState(prop, value) {
  _state[prop] = value
  _subscribers[prop].forEach(fn => fn());
}


//PUBLIC
export default class NasaService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Photos() {
    //Breaks Refrences of each object in state
    return _state.photos
  }

  getAllApiPhotos() {
    _nasaApi.get()
      //Happens after data comes back
      .then(res => {
        //all axios requests return 'data' in the response
        let photos = new Planet(res.data)
        setState('photos', photos)
      })
      .catch(err => {
        console.error(err)
      })
  }
}