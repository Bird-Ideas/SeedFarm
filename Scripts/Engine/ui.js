import { STATE } from "./game.js";
import { CWIDTH, CHEIGHT } from "./game.js";
import { DATA_PROVIDER } from "./game.js";

 class Label { 
    constructor(text, x, y, color = 'white') {
        this.text = text; 
        this.x = x; 
        this.y = y; 
        this.color = color; 
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

class UIImage {
    constructor(source, x, y) {
        this.source = source;
        this.x = x;
        this.y = y;  
    }
}

export class UI { 

    objects = {}; 


    constructor(canvas, ctx, loader, mouse) {
        this._canvas = canvas; 
        this._ctx = ctx; 
        this._loader = loader; 
        this._mouse = mouse; 
    }

    init(game) { 
        this._game = game; 

        const lockedBgrnd = new Background(0, 0, CWIDTH, CHEIGHT, 1);
        const lockedLbl = new Label("Connect to Metamask.", 440, 228, 'black');
        this.objects["locked"] = new Panel(lockedBgrnd, lockedLbl);

        const shopBtnW = 200; 
        const shopBtnH = 80; 
        const shopBtnPosX =  CWIDTH - shopBtnW - CWIDTH / 100 * 5; 
        const shopBtnPosY = CHEIGHT - shopBtnH - CHEIGHT/100 * 5; 
        const shopBtn = new Button("SHOP", shopBtnPosX, shopBtnPosY, 
            shopBtnW, shopBtnH, this.shopButtonClicked.bind(this));

        var address = window.userAddress; 
        const addressLbl = new Label(address, CWIDTH/2, 30); 

        var DBG_USER_BLD = DATA_PROVIDER.GetBuildingCount(); 
        const DBG_BLD_LBL = new Label(DBG_USER_BLD, 30, 30); 
        var DBG_USER_STK = DATA_PROVIDER.GetStaked(); 
        const DBG_STK_LBL = new Label(DBG_USER_STK, 30, 60); 
        this.objects["general"] = new Panel(shopBtn, addressLbl, DBG_BLD_LBL, DBG_STK_LBL); 


        const shopBgrnd = new Background(0, 0, CWIDTH, CHEIGHT, 0.7); 

        const backBtnW = 100; 
        const backBtnH = 40; 
        const backBtnPosX = CWIDTH - backBtnW - CWIDTH / 100 * 5; 
        const backBtnPosY = CHEIGHT / 100 * 3;  
        const backBtn = new Button("Back", backBtnPosX, backBtnPosY, 
            backBtnW, backBtnH, this.escapeButtonClicked.bind(this)); 

        const buildBtnW = 200; 
        const buildBtnH = 80;
        const buildHousePosX = CWIDTH / 100 * 10;
        const buildHousePosY = buildBtnH + CHEIGHT / 2; 
        const buildBtn = new Button("BUILD", buildHousePosX, buildHousePosY, 
            buildBtnW, buildBtnH, this.buildBtnClicked.bind(this, 1));

        const houseImgSrc = this._loader.getImage("edited"); 
        const houseImgPosX = buildHousePosX - 20;
        const houseImgPosY = buildHousePosY - 200; 
        const houseImg = new UIImage(houseImgSrc, houseImgPosX, houseImgPosY); 

        const housePriceLblX = buildHousePosX; 
        const housePriceLblY = buildHousePosY - 15; 
        const housePriceLbl = new Label("Price: 0.1 ETH", housePriceLblX, housePriceLblY, 'black'); 

        this.objects["shop"] = new Panel(shopBgrnd, backBtn, buildBtn, houseImg, housePriceLbl); 
        this.currentPanel = this.objects["locked"]; 
        
        this.listenForEvents();
    }

    listenForEvents() {
        this._canvas.addEventListener('onUIClicked', this.onUIClicked.bind(this)); 
        window.addEventListener('onUnlocked', this.onUnlocked.bind(this)); 

        window.addEventListener('dispatchDataProviderChanged', this.getDataFromProvider.bind(this)); 
    }

    getDataFromProvider() {
        this.address = DATA_PROVIDER.GetAddress(); 
        this.DBG_USER_BLD = DATA_PROVIDER.GetBuildingCount(); 
        this.DBG_USER_STK = DATA_PROVIDER.GetStaked(); 
    }

    onUnlocked() {
        console.log(this.currentPanel); 
        this.currentPanel = this.objects["general"]; 
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
            else if(item instanceof UIImage){
                this.drawUIImage(item); 
            }
        }.bind(this)); 
    }

    drawBackground(background) {
        this._ctx.fillStyle = `rgba(255, 255, 255, ${background.a}`
        //._ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; 
        this._ctx.fillRect(background.x, background.y, 
            background.w, background.h); 
    }

    drawText(text) {
        this._ctx.font = "22px courier new, monospace"; 
        this._ctx.fillStyle = text.color; 
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

    drawUIImage(image) {
        this._ctx.drawImage(
            image.source, 
            0,
            0, 
            128, 
            64, 
            image.x, 
            image.y, 
            128 * 2, 
            64 * 2
        );
    }

    shopButtonClicked() {
        this._game.CURRENT_STATE = STATE.SHOP; 
        this.currentPanel = this.objects["shop"]; 
        this.dispatchShopStateEvent(); 
    }

    escapeButtonClicked() {
        this._game.CURRENT_STATE = STATE.DEFAULT; 
        this.currentPanel = this.objects["general"];
    }

    buildBtnClicked(value) { 
        console.log(value)
        this._game.CURRENT_STATE = STATE.BUILDING; 
        this.currentPanel = this.objects["general"];
        this.dispatchBuildingStateEvent(value); 
    }

    dispatchDefaultStateEvent() {
        var onShopState = new CustomEvent('onDefaultState', {
            detail: {
                
             },
        });

        window.dispatchEvent(onShopState); 
    }


    dispatchShopStateEvent() {
        var onShopState = new CustomEvent('onShopState', {
            detail: {
                
             },
        });

        window.dispatchEvent(onShopState); 
      }

    dispatchBuildingStateEvent(value) {
        var onBuildingState = new CustomEvent('onBuildingState', {
            detail: {
                'building' : value
             },
        });
        window.dispatchEvent(onBuildingState); 
      }
}