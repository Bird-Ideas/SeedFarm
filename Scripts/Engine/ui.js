import { STATE } from "./game.js";
import { CWIDTH, CHEIGHT } from "./game.js";
import { DATA_PROVIDER } from "./game.js";

const scale = 1.5; 
 class Label { 
    constructor(text, x, y, color = 'white') {
        this.text = text; 
        this.x = x * scale; 
        this.y = y * scale; 
        this.color = color; 
    }
}

 class Button { 

    constructor(text, x, y, width, height, onButtonClicked, image = undefined){
        this.x = x * scale; 
        this.y = y * scale; 
        this.w = width * scale; 
        this.h = height * scale;
        if(text != undefined) {
            this.label = new Label(text, x+width/2, y+height/2)
        }
        this.isHovered = false;   
        this.image = image; 

        this.onButtonClicked = onButtonClicked; 
    }

    updateButton(mouse) { 
        const isIntersectedX = mouse.x * scale > this.x && mouse.x * scale < this.x + this.w; 
        const isIntersectedY = mouse.y * scale > this.y && mouse.y * scale < this.y + this.h; 
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
        const lockedLbl = new Label("Connect to Metamask.", 500, 300, 'black');
        this.objects["locked"] = new Panel(lockedBgrnd, lockedLbl);

        const shopBtnW = 80; 
        const shopBtnH = 80; 
        const shopBtnPosX =  CWIDTH - shopBtnW - CWIDTH / 100 * 3; 
        const shopBtnPosY = CHEIGHT - shopBtnH - CHEIGHT/100 * 5; 
        const shopBtnImage = this._loader.getImage("build"); 
        const shopBtn = new Button(undefined, shopBtnPosX, shopBtnPosY, 
            shopBtnW, shopBtnH, this.shopButtonClicked.bind(this), shopBtnImage);

        const unstkBtnW = 80; 
        const unstkBtnH = 80; 
        const unstkBtnPosX =  CWIDTH - shopBtnW - CWIDTH / 100 * 3; 
        const unstkBtnPosY = shopBtnPosY - unstkBtnH - 10; 
        const unstkBtnImage = this._loader.getImage("unstake"); 
        const unstakeBtn = new Button(undefined, unstkBtnPosX, unstkBtnPosY,
            unstkBtnW, unstkBtnH, this.unstakeButtonCliked.bind(this), unstkBtnImage);
        
        const invntBtnW = 80; 
        const invntBtnH = 80; 
        const invntBtnPosX = 30; 
        const invntBtnPosY = CHEIGHT - invntBtnH - CHEIGHT/100 * 5; 
        const invntBtnImage = this._loader.getImage("inventory"); 
        const invntBtn = new Button(undefined, invntBtnPosX, invntBtnPosY, 
            invntBtnW, invntBtnH, this.inventoryButtonClicked.bind(this), invntBtnImage); 
        
        this.addressLbl = new Label("Address: ", CWIDTH/2 + 70, 30); 
        const totalStkLbl = new Label("Total staked:", 30, 30);
        this.totalStkDataLbl = new Label("Data: ", 170, 30);  
        const pendRewLbl = new Label("Pending:", 30, 60); 
        this.pendRewDataLbl = new Label("Data: ", 130, 60); 

        this.objects["general"] = new Panel(shopBtn, this.addressLbl, unstakeBtn,
            totalStkLbl, this.totalStkDataLbl, pendRewLbl, this.pendRewDataLbl, 
            invntBtn); 

        const shopBgrnd = new Background(0, 0, CWIDTH, CHEIGHT, 0.7); 

        const backBtnW = 100; 
        const backBtnH = 40; 
        const backBtnPosX = CWIDTH - backBtnW - CWIDTH / 100 * 5; 
        const backBtnPosY = CHEIGHT / 100 * 3;  
        const backBtn = new Button("Back", backBtnPosX, backBtnPosY, 
            backBtnW, backBtnH, this.escapeButtonClicked.bind(this)); 

        const buildBtnW = 200; 
        const buildBtnH = 80;
        const buildHousePosX = CWIDTH / 10;
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
        
        const woodLbl = new Label("Wood", 60, 80, 'black'); 
        this.woodDataLbl = new Label("Pending: ", 150, 80, 'black'); 
        const nailLbl = new Label("Nails", 60, 110, 'black'); 
        this.nailDataLbl = new Label("Pending: ", 150, 110, 'black'); 
        const ropeLbl = new Label("Rope", 60, 140, 'black'); 
        this.ropeDataLbl = new Label("Pending: ", 150, 140, 'black');
        const glassLbl = new Label("Glass", 60, 170, 'black'); 
        this.glassDataLbl = new Label("Pending: ", 150, 170, 'black');  
        const hayLbl = new Label("Hay", 60, 200, 'black'); 
        this.hayDataLbl = new Label("Pending: ", 150, 200, 'black');  
        this.objects["inventory"] = new Panel(shopBgrnd, backBtn, woodLbl, this.woodDataLbl, 
            nailLbl, this.nailDataLbl, ropeLbl, this.ropeDataLbl, glassLbl, this.glassDataLbl,
            hayLbl, this.hayDataLbl); 

        this.currentPanel = this.objects["locked"]; 

        
        this.listenForEvents();
    }

    listenForEvents() {
        this._canvas.addEventListener('onUIClicked', this.onUIClicked.bind(this)); 
        window.addEventListener('onUnlocked', this.onUnlocked.bind(this)); 
        window.addEventListener('onDataProviderChanged', this.getDataFromProvider.bind(this)); 
    }

    getDataFromProvider() {
        this.addressLbl.text = window.userAddress; 
        this.totalStkDataLbl.text = DATA_PROVIDER.GetStaked(); 
        this.pendRewDataLbl.text = DATA_PROVIDER.GetPending(); 
    }

    onUnlocked() {
        this.currentPanel = this.objects["general"]; 
        window.CURRENT_STATE = STATE.DEFAULT; 
        window.removeEventListener('onUnlocked', this.onUnlocked);
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
        this._ctx.fillRect(background.x, background.y, 
            background.w * scale, background.h * scale); 
    }

    drawText(text) {
        this._ctx.font = "40px garamond, serif"; 
        this._ctx.fillStyle = text.color; 
        this._ctx.fillText(text.text, text.x, text.y); 

    }

    drawButton(button) { 
        button.updateButton(this._mouse); 
        this._ctx.fillRect(button.x, button.y, 
            button.w, button.h); 
        if(button.isHovered) {
            this._ctx.strokeStyle = 'red'; 
            this._ctx.lineWidth = 3; 
            this._ctx.strokeRect(button.x, button.y, button.w, button.h);
            this._lastElementSelected = button; 
        } else {
             //this._ctx.fillStyle = 'white';
             if(this._ctx._lastElementSelected == this) {
                 this._ctx._lastElementSelected = null; 
             }
        }
        if(button.image != undefined) {
            this._ctx.drawImage(button.image, 0, 0, 280, 280, button.x, button.y, button.w, button.h); 

        }
        //this._ctx.fillRect(button.x, button.y, button.w, button.h); 
        if(button.label != undefined) {
            this._ctx.font = "30px garamond, serif";
            this._ctx.fillStyle = 'black';
            var textSize = this._ctx.measureText(button.label.text);
            var textX = (button.label.x - (textSize.width / 2));
            var textY = (button.label.y + 15/2);
        
            this._ctx.fillText(button.label.text, textX, textY);
        }
    }

    drawUIImage(image) {
        this._ctx.drawImage(
            image.source, 
            0,
            0, 
            128, 
            64, 
            image.x * 1.5, 
            image.y * 1.5, 
            128 * 2 * 1.5, 
            64 * 2 * 1.5 
        );
    }

    shopButtonClicked() {
        window.CURRENT_STATE = STATE.SHOP; 
        this.currentPanel = this.objects["shop"]; 
        this.dispatchCurrentTileDisableEvent(); 
    }

    unstakeButtonCliked() {
        window.CURRENT_STATE = STATE.DESTROYING; 
        this.dispatchCurrentTileEnableEvent(); 
    }
     
    inventoryButtonClicked() {
        window.CURRENT_STATE = STATE.SHOP; 
        const material = DATA_PROVIDER.GetMaterialCount(); 
        this.woodDataLbl.text = material[0]; 
        this.nailDataLbl.text = material[1]; 
        this.ropeDataLbl.text = material[2]; 
        this.glassDataLbl.text = material[3]; 
        this.hayDataLbl.text = material[4]; 
        this.currentPanel = this.objects["inventory"]; 
        this.dispatchCurrentTileDisableEvent(); 
    }

    escapeButtonClicked() {
        window.CURRENT_STATE = STATE.DEFAULT; 
        this.currentPanel = this.objects["general"];
        this.dispatchCurrentTileEnableEvent(); 
    }

    buildBtnClicked(value) { 
        window.CURRENT_STATE = STATE.BUILDING; 
        this.currentPanel = this.objects["general"];
        this.dispatchCurrentTileEnableEvent(); 
        this.dispatchBuildingStateEvent(value); 
    }

    dispatchBuildingStateEvent(value) {
        var onBuildingState = new CustomEvent('onBuildingState', {
            detail: {
                'building' : value
             },
        });
        window.dispatchEvent(onBuildingState); 
      }
    
    dispatchFetchMaterialsDataEvent() {
        var fetchMaterialsData = new CustomEvent('fetch_material'); 
        window.dispatchEvent(fetchMaterialsData);
    }
    
    dispatchCurrentTileEnableEvent() {
        var currentTileEnable = new CustomEvent('enableCurrentTile');
        window.dispatchEvent(currentTileEnable); 
    }
    dispatchCurrentTileDisableEvent() {
        var currentTileDisable = new CustomEvent('disableCurrentTile');
        window.dispatchEvent(currentTileDisable); 
    }
}