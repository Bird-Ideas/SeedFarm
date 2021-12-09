export default class DataProvider {
    
    constructor(){
        
    }

    SetUserAddress(address){
        this._address = address; 
    }

    GetUserAddress(){
        return this._address; 
    }

    async init(){
        //this.SetUserAddress("0x550AD7627790F8e963691eAC88b90E3C17276CE8");
    }
}

