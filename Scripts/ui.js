import { STATE } from "./game.js";
import { WIDTH, HEIGHT } from "./game.js";

export class Label { 
    constructor(text, x, y) {
        this.text = text; 
        this.x = x; 
        this.y = y; 
    }
}

export class Button {

    constructor(text, x, y, width, height, onButtonClicked){
        this.x = x; 
        this.y = y; 
        this.w = width; 
        this.h = height; 
        this.label = new Label(text, x+width/2, y+height/2)
        this.isHovered = false;   
        this.isEnabled  = true;

        this.onButtonClicked = onButtonClicked; 
    }

    updateButton(mouse) { 
        const isIntersectedX = mouse.x > this.x && mouse.x < this.x + this.w; 
        const isIntersectedY = mouse.y > this.y && mouse.y < this.y + this.h; 
        if(isIntersectedX && isIntersectedY){
            this.isHovered = true; 
        } else { 
            this.isHovered = false; 
        }
    }

}

export class Panel { 
    constructor(){
        this.isEnabled  = false;
    }
    
    object = new Array(0); 


}

export class UI { 

    objects = new Array(0); 

    constructor(canvas, ctx, mouse) {
        this._canvas = canvas; 
        this._ctx = ctx; 
        this._mouse = mouse; 
    }

    init(game) { 
        this._game = game; 
        this.objects.push(new Button("SHOP", 100, 500, 200, 80, this.shopButtonClicked.bind(this))); 
        this.listenForEvents();
    }

    listenForEvents() {
        this._canvas.addEventListener('onUIClicked', this.onUIClicked.bind(this)); 
    }

    onUIClicked() {
        if(this._lastElementSelected == null) return; 
        if(typeof(this._lastElementSelected.onButtonClicked) == "function") {
            this._lastElementSelected.onButtonClicked(); 
        }
    }

    renderUI() {
        this.objects.forEach(function(item){
        var currentButton = item;    
        currentButton.updateButton(this._mouse); 
        
       if(currentButton.isHovered) {
           this._ctx.fillStyle = 'yellow'; 
           this._lastElementSelected = currentButton; 
       } else {
            this._ctx.fillStyle = 'white';
            this._lastElementSelected = null; 
       }
        this._ctx.fillRect(currentButton.x, currentButton.y, 
          currentButton.w, currentButton.h); 
        this._ctx.font = "30px courier new, monospace";
        this._ctx.fillStyle = 'black';
        var textSize = this._ctx.measureText(currentButton.label.text);
        var textX = currentButton.label.x - (textSize.width / 2);
        var textY = currentButton.label.y + 15/2;
    
        this._ctx.fillText(currentButton.label.text, textX, textY);
        }.bind(this));
    }

    shopButtonClicked() {
        if(this._game.CURRENT_STATE == STATE.CAMERA) {
            this._game.CURRENT_STATE = STATE.BUILDING; 
        } else {
            this._game.CURRENT_STATE = STATE.CAMERA;
        }
        console.log(this._game.CURRENT_STATE); 
    }
}