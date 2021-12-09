import { STATE } from "./game.js";
import { WIDTH, HEIGHT } from "./game.js";
import { DATA_PROVIDER } from "./game.js";

 class Label { 
    constructor(text, x, y) {
        this.text = text; 
        this.x = x; 
        this.y = y; 
    }
}

 class Button {

    constructor(text, x, y, width, height, onButtonClicked){
        this.x = x; 
        this.y = y; 
        this.w = width; 
        this.h = height; 
        this.label = new Label(text, x+width/2, y+height/2)
        this.isHovered = false;   

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
 class Panel { 
    constructor(...args){
        this.isEnabled  = false;
        this.objects = args; 
    }
    
    setEnabled() {
        this.objects.forEach(function(item){
            item.isEnabled = false; 
        }.bind(this)); 
    }
}

class Background { 
    constructor(x, y, width, height, alpha){
        this.x = x; 
        this.y = y; 
        this.w = width; 
        this.h = height; 
        this.a = alpha; 
        this.color = 'white'; 
    }
}

export class UI { 

    objects = {}; 


    constructor(canvas, ctx, mouse) {
        this._canvas = canvas; 
        this._ctx = ctx; 
        this._mouse = mouse; 
    }

    init(game) { 
        this._game = game; 

        const shopBtn = new Button("SHOP", 100, 500, 200, 80, this.shopButtonClicked.bind(this)); 
        var address = DATA_PROVIDER.GetUserAddress(); 
        const addressLbl = new Label(address, 1280 - 22 * 26, 30); 
        this.objects["general"] = new Panel(shopBtn, addressLbl); 


        const shopBgrnd = new Background(0, 0, 1280, 640, 0.7); 
        const backBtn = new Button("Back", 100, 50, 80, 40, this.escapeButtonClicked.bind(this)); 
        const buildBtn = new Button("BUILD", 140, 320, 200, 80, this.buildBtnClicked.bind(this));
        this.objects["shop"] = new Panel(shopBgrnd, backBtn, buildBtn); 
        this.currentPanel = this.objects["general"]; 
        
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
        this.currentPanel.objects.forEach(function(item){
            if(item instanceof Background) {
                this.drawBackground(item); 
            }
            else if(item instanceof Label){
                this.drawText(item); 
            }
            else if(item instanceof Button){
                this.drawButton(item); 
            }
        }.bind(this)); 
    }

    drawBackground(background) {
        this._ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; 
        this._ctx.fillRect(background.x, background.y, 
            background.w, background.h); 
    }

    drawText(text) {
        this._ctx.font = "22px courier new, monospace"; 
        this._ctx.fillStyle = 'black'; 
        this._ctx.fillText(text.text, text.x, text.y); 
    }

    drawButton(button) { 
        button.updateButton(this._mouse); 
        if(button.isHovered) {
            this._ctx.fillStyle = 'yellow'; 
            this._lastElementSelected = button; 
        } else {
             this._ctx.fillStyle = 'white';
             if(this._ctx._lastElementSelected == this) {
                 this._ctx._lastElementSelected = null; 
             }
        }
         this._ctx.fillRect(button.x, button.y, 
           button.w, button.h); 
         this._ctx.font = "30px courier new, monospace";
         this._ctx.fillStyle = 'black';
         var textSize = this._ctx.measureText(button.label.text);
         var textX = button.label.x - (textSize.width / 2);
         var textY = button.label.y + 15/2;
     
         this._ctx.fillText(button.label.text, textX, textY);
    }

    shopButtonClicked() {
        this._game.CURRENT_STATE = STATE.SHOP; 
        this.currentPanel = this.objects["shop"]; 
    }

    escapeButtonClicked() {
        this._game.CURRENT_STATE = STATE.CAMERA; 
        this.currentPanel = this.objects["general"];
    }

    buildBtnClicked() { 
        this._game.CURRENT_STATE = STATE.BUILDING; 
        this.currentPanel = this.objects["general"];
    }
}