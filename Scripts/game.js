import Mouse from "./mouse.js";
import Renderer from "./renderer.js";
import Map from "./gamemap.js";
import DataProvider from "./dataprovider.js";

export const STATE = Object.freeze({"CAMERA":1, "BUILDING": 2, "SHOP":3});
export const WIDTH = 128; 
export const HEIGHT = 64; 
export const MAP_SIZE = 9; 
export const DATA_PROVIDER = new DataProvider(); 

export var CURRENT_STATE = STATE.CAMERA;

export default class Game {

  constructor(canvas, context, renderer, map, mouse) {

    this._canvas = canvas; 
    this._currentTile = {x: 0, y: 0}; 
    this._currentCameraOffset = {x: 0, y: 0}; 

    this._mouse = new Mouse(canvas, this); 
    this._map = map; 
    this._renderer = renderer;
    this._mouse = mouse;

    this._previousElapsed = 0;
   
  }

  static async asyncInit(canvas, context, renderer, map, mouse) {
    //const loaded = await renderer.loadImages(); 
    //console.log(loaded); 
    const game = new Game(canvas, context, renderer, map, mouse); 
    game.init(); 
  }

  init() {
    
    this._renderer.init(this);
    this._mouse.init(this); 

    this._mouse.listenForEvents(STATE.CAMERA); 
    this._canvas.addEventListener('click', this.handleClick.bind(this));
    window.requestAnimationFrame(this.tick.bind(this))
  }
 
  handleClick(e) {
    console.log('Click'); 
    this.onMapChanged(e); 
    /* 
    if(this.CURRENT_STATE == STATE.CAMERA){
      this.moveCamera(e); 
    }
    else if(this.CURRENT_STATE == STATE.BUILDING){
      this.onMapChanged(e)
    }
    */
  }

  moveCamera(e) {
    this._currentCameraOffset.x += 0.1; 
    this._currentCameraOffset.y += 0.1;
  }

  onMapChanged(e) {
    console.log("On map changed"); 
    this._map.setMaskValue(this._currentTile.x, this._currentTile.y);
  }

  tick(elapsed) {

    this._currentTile.x = this._mouse.tileX; 
    this._currentTile.y = this._mouse.tileY;
    this._currentCameraOffset.x = this._mouse.mouseDeltaX; 
    this._currentCameraOffset.y = this._mouse.mouseDeltaY; 
    this._renderer.render(); 
    
    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    //this.update(delta);
    window.requestAnimationFrame(this.tick.bind(this));
  }  
}
