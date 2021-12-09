export default class GameMap {
  constructor(canvas) {

    this._canvas = canvas; 
    
    this._map = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this._mask = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]; 

    this.listenForEvents(); 
  }

  listenForEvents () { 
    window.addEventListener('onMapLoaded', this.mapLoaded.bind(this)); 
    this._canvas.addEventListener('onMapChanged', this.setMaskValue.bind(this)); 
  }

  getMapValue(row, col) {
    return this._map[row][col];
  }

  mapLoaded(e) {
    const array = e.detail.array;  
    let count = 0; 
    for(let i = 0; i < 9; ++i){
      for(let j = 0; j < 9; ++j){
         this._mask[i][j] = array[count++]; 
      }
    }
  }

  getMaskValue(row, col) {
    return this._mask[row][col]; 
  }

  setMaskValue(e) { 
    const row = e.detail.tileX; 
    const col = e.detail.tileY;
    if(row < 0 || row > 9 || col < 0 || col > 9) return; 
    if(this._mask[row][col] == 0) {
      this._mask[row][col] = 1; 
    }

  }


}
