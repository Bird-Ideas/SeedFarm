import DataProvider from "./dataprovider.js";

export const STATE = Object.freeze({"DEFAULT":1, "BUILDING": 2, "SHOP":3});
export const WIDTH = 128; 
export const HEIGHT = 64; 
export const MAP_SIZE = 9; 
export const CWIDTH = WIDTH * MAP_SIZE; 
export const CHEIGHT = HEIGHT * MAP_SIZE; 
export const DATA_PROVIDER = new DataProvider(); 

export default class Game {

  CURRENT_STATE = STATE.BUILDING; 

  constructor(canvas, context, renderer, ui, map, mouse) {

    this._canvas = canvas; 
    this._currentTile = {x: 0, y: 0}; 
    this._currentCameraOffset = {x: 0, y: 0}; 

    this._renderer = renderer;
    this._ui = ui;
    this._map = map; 
    this._mouse = mouse;

    this._previousElapsed = 0;
  }

  init() {
    
    this._renderer.init(this);
    this._mouse.init(this); 
    this._ui.init(this); 
    

    window.requestAnimationFrame(this.tick.bind(this))
  }
 


  moveCamera(e) {
    this._currentCameraOffset.x += 0.1; 
    this._currentCameraOffset.y += 0.1;
  }

  onMapChanged(e) {
    
  }

  tick(elapsed) {

    this._currentTile.x = this._mouse.tileX; 
    this._currentTile.y = this._mouse.tileY;
    this._currentCameraOffset.x = this._mouse.mouseDeltaX; 
    this._currentCameraOffset.y = this._mouse.mouseDeltaY; 
    this._renderer.render(); 
    this._ui.renderUI(); 
    
    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    //this.update(delta);
    window.requestAnimationFrame(this.tick.bind(this));
  }  
}