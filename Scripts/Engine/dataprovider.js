export default class DataProvider {
    
    constructor(){
        
    }

    SetUserAddress(address){
        this._address = address; 
        this.dispatchDataProviderChanged(); 
    }

    GetUserAddress(){
        return this._address; 
    }

    SetUserStakedAmmount(staked) {
        this._staked = staked; 
        this.dispatchDataProviderChanged(); 
    }

    GetUserStakedAmmount() {
        return this._staked; 
    }

    SetUserBuildingCount(buildingCount) { 
        this._buildingCount = buildingCount; 
        this.dispatchDataProviderChanged(); 
    }

    GetUserBuildingCount() {
        return this._buildingCount;
    }

    dispatchDataProviderChanged() {
        var onDataProviderChanged = new CustomEvent('onDataProviderChanged');

        window.dispatchEvent(onDataProviderChanged); 
    }
}

