import DataProvider from "./dataprovider.js";

export const STATE = Object.freeze({"LOCKED": 0, "DEFAULT":1, "BUILDING": 2, 
  "DESTROYING": 3, "YIELDING":4, "SHOP": 5});
export const WIDTH = 128; 
export const HEIGHT = 64; 
export const MAP_SIZE = 9; 
export const CWIDTH = 1280; 
export const CHEIGHT = 640;  
export const SCALE = 1.5; 
export const DATA_PROVIDER = new DataProvider(); 

window.CURRENT_STATE = STATE.LOCKED; 

export default class Game {

  constructor(canvas, renderer, ui, map, mouse) {

    this._canvas = canvas; 
    this._currentTile = {x: 0, y: 0}; 
    this._currentCameraOffset = {x: 0, y: 0}; 

    this._renderer = renderer;
    this._ui = ui;
    this._map = map; 
    this._mouse = mouse;

    this._previousElapsed = 0;
    this._lastFetchTime = 0; 
  }

  init() {
    this._renderer.init(this);
    this._mouse.init(this); 
    
    window.requestAnimationFrame(this.tick.bind(this))
  }
 
  tick(elapsed) {
    this._currentTile.x = this._mouse.tileX; 
    this._currentTile.y = this._mouse.tileY;

    this._renderer.render(); 
    this._ui.renderUI(); 
    
    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    if(elapsed - this._lastFetchTime > 5000) {
      this._lastFetchTime = elapsed; 
      this.dispatchFetchDataEvent();  
    }
    this._previousElapsed = elapsed;
    
    //this.update(delta);
    window.requestAnimationFrame(this.tick.bind(this));
  } 

  dispatchFetchDataEvent() {
    var fetch_data = new CustomEvent('fetch_data');
    window.dispatchEvent(fetch_data);
  } 
}
