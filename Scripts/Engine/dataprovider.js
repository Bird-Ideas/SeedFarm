export default class DataProvider {
    
    updateDataTick(staked, pending) {
        this._staked = staked; 
        this._pending = pending; 
        this.dispatchDataProviderChanged(); 
    }

    GetStaked() {
        return this._staked; 
    }

    GetPending() {
        return this._pending; 
    }

    SetBalance(balance) {
        this._balance = balance; 
        this.dispatchDataProviderChanged(); 
    }

    GetBalance() {
        return this._balance; 
    }

    SetMaterialCount(materialCount) {
        this._materialCount = materialCount; 
    }

    GetMaterialCount() {
        return this._materialCount; 
    }

    dispatchDataProviderChanged() {
        var onDataProviderChanged = new CustomEvent('onDataProviderChanged');
        window.dispatchEvent(onDataProviderChanged); 
    }
}

