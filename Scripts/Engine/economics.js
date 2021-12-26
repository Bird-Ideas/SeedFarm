import { DATA_PROVIDER } from "./game.js";
import { web3, instance } from "../Blockchain/web3.js"; 

export default class Economics {

    priceDict = {}; 

    constructor(){

        this.priceDict[1] = '0.1'; 
        this.listenForEvents(); 
    }

    listenForEvents() { 
        window.addEventListener('onBuildingPlaced', this.buildingPlaced.bind(this)); 
    }
 
    buildingPlaced(e){
        const _pos = e.detail.tile; 
        const _bId = e.detail.building;

        instance.methods.setPosition(_pos, _bId)
        .send({
            from: window.userAddress, 
            value: web3.utils.toWei(this.priceDict[_bId]),
            gas: '100000'
        }, function(error, result) {
            if(error){
                console.log(error); 
                return; 
            } 
            else {
                console.log(result);
                this.dispatchFetchDataEvent(); 
            }
        }.bind(this)); 
    }

    dispatchFetchDataEvent() {
        var fetch_data = new CustomEvent('fetch_data');
        window.dispatchEvent(fetch_data);
    }
}