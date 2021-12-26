export default class GameMap {
  currentBuilding = 1;

  constructor(canvas) {
    this._canvas = canvas;

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

  listenForEvents() {
    window.addEventListener('onUpdateMap', this.updateMap.bind(this));
    this._canvas.addEventListener('onMapChanged', this.setMaskValue.bind(this));

    window.addEventListener('onBuildingState', this.setCurrentBuilding.bind(this));
  }

  updateMap(e) {
    const array = e.detail.array;
    let count = 0;
    for (let i = 0; i < 9; ++i) {
      for (let j = 0; j < 9; ++j) {
        this._mask[i][j] = array[count++];
      }
    }
  }

  setMaskValue(e) {
    const row = e.detail.tileX;
    const col = e.detail.tileY;
    if (row < 0 || row > 9 || col < 0 || col > 9) return;
    if (this._mask[row][col] == 0) {
      this._mask[row][col] = this.currentBuilding;
      var tileId = row * 9 + col; 
      this.dispatchBuildingPlacedEvent(tileId); 
    }
  }

  getMaskValue(row, col) {
    return this._mask[row][col];
  }

  setCurrentBuilding(e) {
    const building = e.detail.building;
    if (this.currentBuilding != building) {
      this.currentBuilding = building;
    }
  }

  dispatchBuildingPlacedEvent(tileId) {
    var onBuildingPlaced = new CustomEvent('onBuildingPlaced', {
      detail: {
        building: this.currentBuilding,
        tile: tileId
      },
    });
    window.dispatchEvent(onBuildingPlaced);
  }
}
