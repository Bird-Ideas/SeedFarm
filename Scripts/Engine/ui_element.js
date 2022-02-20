const scale = 1.5; 

export class Label { 
    constructor(text, x, y, color = 'white') {
        this.text = text; 
        this.x = x * scale; 
        this.y = y * scale; 
        this.color = color; 
    }
}

export class Button { 

    constructor(x, y, width, height, onButtonClicked, image, imageX, imageY){
        this.x = x * scale; 
        this.y = y * scale; 
        this.w = width * scale; 
        this.h = height * scale;
       
        this.isHovered = false;   
        this.image = image; 
        this.ix = imageX;  
        this.iy = imageY; 

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

export class UIImage {
    constructor(source, x, y) {
        this.source = source;
        this.x = x;
        this.y = y;  
    }
}


export class Panel { 
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

export class Background { 
    constructor(x, y, width, height, alpha){
        this.x = x; 
        this.y = y; 
        this.w = width * scale; 
        this.h = height * scale; 
        this.a = alpha; 
        this.color = 'white'; 
    }
}