import Loader from "./loader.js";
import { WIDTH, HEIGHT } from "./game.js";
import { DATA_PROVIDER } from "./game.js";
export default class Renderer {
  WIDTH = 128;
  HEIGHT = 64;

  constructor(ctx, game, map) {
    this._ctx = ctx;
    this._game = game;
    this._map = map;

    this._loader = new Loader();
  }

  loadImages() {
    return [
      this._loader.loadImage("grid", "../Assets/grid.png"),
      this._loader.loadImage("tiles", "../Assets/seasons_tiles.png"),
      this._loader.loadImage("current", "../Assets/current_tile.png"),
      this._loader.loadImage("edited", "../Assets/edited_tile.png"),
    ];
  }

  init() {
    this.gridAtlas = this._loader.getImage("grid");
    this.tileAtlas = this._loader.getImage("tiles");
    this.currentTile = this._loader.getImage("current");
    this.editedTile = this._loader.getImage("edited");

    var simpleTerrain = { x: 0, y: 0 };
    var notSimpleTerrain = { x: 5, y: 8 };
    var thirdTexture = { x: 4, y: 3 };
    var zeros = { x: 6, y: 10 };

    this.terrainIndexes = [
      simpleTerrain,
      notSimpleTerrain,
      thirdTexture,
      zeros,
    ];
  }

  render() {
    this._ctx.clearRect(0, 0, 1280, 640);
    this.renderGrid();
    this.renderGround();
    this.drawCurrentTile();
    this.drawText();
  }

  renderGrid() {
    for (var i = 0; i < 20; ++i) {
      for (var j = 0; j < 20; ++j) {
        this.drawTile(this.gridAtlas, 0, 0, i, j, -5, 4);
      }
    }
  }

  drawCurrentTile() {
    this.drawTile(
      this.currentTile,
      0,
      0,
      this._game._currentTile.x,
      this._game._currentTile.y,
      2/* + this._game._currentCameraOffset.x*/,
      2/* + this._game._currentCameraOffset.y*/
    );
  }

  drawText() {
    const textUI = [
      "CurrentTileX: " + this._game._currentTile.x,
      "CurrentTileY: " + this._game._currentTile.y,
      "CurrentMousePosX: " + this._game._currentCameraOffset.x,
      "CurrentMousePosY: " + this._game._currentCameraOffset.y,
    ];
    this._ctx.font = "22px courier new, monospace";
    this._ctx.fillStyle = "#FFFFFF";
    for (let i = 0; i < textUI.length; i++) {
      this._ctx.fillText(textUI[i], 10, 30 + i * 30);
    }

    var address = DATA_PROVIDER.GetUserAddress(); 
    this._ctx.fillText(address, 1280 - 22 * 26, 30); 
  }

  renderGround() {
    for (var cellY = 0; cellY < 5 /*this._map.mapRows*/; ++cellY) {
      for (var cellX = 0; cellX < 5 /*this._map.mapCols*/; ++cellX) {
        var tileValue = this._map.getMapValue(cellY, cellX);
        var currentDraw = this.terrainIndexes[tileValue];
        this.drawTile(
          this.tileAtlas,
          currentDraw.x,
          currentDraw.y,
          cellY,
          cellX,
          2 + this._game._currentCameraOffset.x,
          2 + this._game._currentCameraOffset.y
        );

        var maskValue = this._map.getMaskValue(cellY, cellX);
        if (maskValue == 1) {
          this.drawTile(
            this.editedTile,
            0,
            0,
            cellY,
            cellX,
            2 + this._game._currentCameraOffset.x,
            2 + this._game._currentCameraOffset.y
          );
        }
      }
    }
  }

  drawTile(image, tilemapX, tilemapY, cellX, cellY, offsetX, offsetY) {
    this._ctx.drawImage(
      image,
      WIDTH * tilemapX, //tilemap index X
      HEIGHT * tilemapY, //tilemap index Y
      WIDTH, //tile width
      HEIGHT, //tile height
      offsetX * WIDTH + (cellX + cellY) * (WIDTH / 2), //screen X
      offsetY * HEIGHT + (cellX - cellY) * (HEIGHT / 2), //screen Y
      WIDTH, //tile width
      HEIGHT //tile height
    );
  }
}
