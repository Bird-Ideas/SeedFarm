import { WIDTH, HEIGHT, 
  CWIDTH, CHEIGHT, 
  MAP_SIZE, SCALE } from "./game.js";
export default class Renderer { 

  isCurrentTileEnabled = true; 
  isCurrentBuildingEnabled = false; 

  constructor(ctx, map, loader) {
    this._ctx = ctx;
    this._map = map;

    this._loader = loader; 
  }

  init(game) {
    this._game = game; 

    this.gridAtlas = this._loader.getImage("grid");
    this.tileAtlas = this._loader.getImage("tiles");
    this.currentTile = this._loader.getImage("current");
    this.editedTile = this._loader.getImage("edited");

    var simpleTerrain = { x: 0, y: 0 };

    this.terrainIndexes = [
      simpleTerrain
    ];

    this.listenForEvents(); 
  }

  listenForEvents() {
    window.addEventListener('enableCurrentTile', function() {
      this.isCurrentTileEnabled = true; 
    }.bind(this));
    window.addEventListener('disableCurrentTile', function() {
      this.isCurrentTileEnabled = false; 
    }.bind(this));
    window.addEventListener('enableCurrentBuilding', function(e){
      console.log(e); 
      this.isCurrentBuildingEnabled = true; 
      //this.currentBuilding = e.detail. 
    })
  }

  render() {
    this._ctx.clearRect(0, 0, CWIDTH, CHEIGHT);
    this.renderGrid();
    this.renderGround();
    this.drawCurrentTile();
    this.drawCurrentBuilding(); 
  }

  renderGrid() {
    for (var i = 0; i < 20; ++i) {
      for (var j = 0; j < 20; ++j) {
        this.drawTile(this.gridAtlas, 0, 0, i, j, -5, 4);
      }
    }
  }

  drawCurrentTile() {
    if(this.isCurrentTileEnabled == false) return; 
    this.drawTile(
      this.currentTile,
      this._game._currentTile.x,
      this._game._currentTile.y,
      0.5,
      4.5
    );
  }

  drawCurrentBuilding() {
    if(this.isCurrentBuildingEnabled == false) return; 
    this.drawTile(
      
    ); 
  }

  renderGround() {
    for (var cellY = 0; cellY < MAP_SIZE ; ++cellY) {
      for (var cellX = 0; cellX < MAP_SIZE; ++cellX) {
        this.drawTile(
          this.tileAtlas,
          cellY,
          cellX,
          0.5,
          4.5
        );

        var maskValue = this._map.getMaskValue(cellY, cellX);
        if (maskValue == 1) {
          this.drawTile(
            this.editedTile,
            cellY,
            cellX,
            0.5,
            4.5
          );
        }
      }
    }
  }

  renderReady() {

  }

  drawTile(image, cellX, cellY, offsetX, offsetY) {
    var screenX = offsetX * WIDTH + (cellX + cellY) * (WIDTH / 2); 
    var screenY = offsetY * HEIGHT + (cellX - cellY) * (HEIGHT / 2); 
    this._ctx.drawImage(
      image,
      0, 
      0,
      WIDTH, //tile width
      HEIGHT, //tile height
      screenX * SCALE, //screen X
      screenY * SCALE, //screen Y
      WIDTH * SCALE, //tile width
      HEIGHT * SCALE //tile height
    );
  }
}
