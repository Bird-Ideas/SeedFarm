import { STATE } from "./game.js";
import { WIDTH, HEIGHT } from "./game.js";
export default class Mouse {
    

    onMapChanged = new CustomEvent("onMapChanged", {
        bubbles: true, 
    });

    is_dragging = false; 

    constructor(canvas, game){
        this._canvas = canvas; 
        this._game = game; 

        this.mouseX = 0; 
        this.mouseY = 0; 
        this.tileX = 0; 
        this.tileY = 0; 

        this.mouseDeltaX = 0;
        this.mouseDeltaY = 0; 
        this.prevMouseX = 0; 
        this.prevMouseY = 0;  
    }

    listenForEvents(state) {
        this._canvas.addEventListener('mousemove', this.getMousePos.bind(this));
       // this._canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
       // this._canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
        //this._canvas.addEventListener('click', this.handleClick.bind(this)); 
    }

    getMousePos(e) { 
        const rect = this._canvas.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left; 
        this.mouseY = e.clientY - rect.top; 
        this.math(this.mouseX, this.mouseY); 
        if(this.is_dragging){
            this.mouseDeltaX = (this.mouseX - this.prevMouseX) / 256; 
            this.mouseDeltaY = (this.mouseY - this.prevMouseY) / 128; 
        }
    }

    onMouseDown(e) { 
        console.clear();
        this.prevMouseX = this.mouseX; 
        this.prevMouseY = this.mouseY; 
        this.is_dragging = true; 
    }

    onMouseUp(e) {
        this.is_dragging = false; 
    }


    math(mouseAbsX, mouseAbsY){
        const width = WIDTH / 2; 
        const height = HEIGHT / 2; 
        
        var determinant = 1 / (2 * width * height);
        var offGameX = this._game._currentCameraOffset.x; 
        var offGameY = this._game._currentCameraOffset.y; 

        var offX = (3 + offGameX) * width + width ; 
        var offY = (2 + offGameY) * height + height;

        //console.log(offX, offY);

        var rotA = -(offX * height) - (offY * width); 
        var rotB = (offX * height) - (offY * width); 

        //console.log(rotA, rotB); 

        
        var a = (determinant) * (mouseAbsX * height + mouseAbsY * width + rotA);
        var b = (determinant) * (mouseAbsX * (-height) + mouseAbsY * width + rotB); 
        
        this.tileX = Math.floor(a) - 1;
        this.tileY = -Math.floor(b); 
      }

      handleClick(e){
        console.log('click');
        //this._canvas.dispatchEvent(this.onMapChanged);
        //this.dispatchEvent(this.onMapChanged);
      }


}