export default class Map {

  constructor() {
    /*this.map = [
      [45, 45, 44, 45, 44, 45, 44, 45],
      [8, 72, 44, 0, 44, 0, 72, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [32, 32, 32, 32, 0, 0, 0, 0],
      [34, 34, 34, 34, 34, 95, 44, 0],
      [0, 0, 23, 23, 0, 20, 0, 0],
      [0, 72, 23, 23, 0, 0, 72, 0],
      [0, 0, 0, 0, 0, 0, 0, 2],
    ];*/
    this.map = [
      [0, 2, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 2, 0, 2, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 0, 2, 0, 2, 0, 1],
      [0, 2, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 2, 0, 2, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 0, 2, 0, 2, 0, 1],
    ];

    this.mask = [
      [1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
    ]; 

    this.mapRows = 8;
    this.mapCols = 8;
  }

  getMapValue(row, col) {
    return this.map[row][col];
  }

  getMaskValue(row, col) {
    return this.mask[row][col]; 
  }
  setMaskValue(row, col) {
    if(this.mask[row][col] == 0){
      this.mask[row][col] = 1; 
    }
    else {
      this.mask[row][col] = 0; 
    }
  }

}
