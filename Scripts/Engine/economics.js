import { DATA_PROVIDER } from "./game.js";
import { web3, instance } from "../Blockchain/web3.js"; 

export default class Economics {

    priceDict = {}; 

    constructor(){

        this.priceDict[1] = 0.1; 
        this.listenForEvents(); 
    }

    listenForEvents() { 
        //window.addEventListener("onMapLoaded", this.processMap.bind(this));
        window.addEventListener('onBuildingPlaced', this.buildingPlaced.bind(this)); 
    }
    /*
    processMap(e){ 
        const array = e.detail.array; 

        let buildingCount = 0; 
        let staked = 0; 


        for(let i = 0; i < 81; ++i) {
            if(array[i] > 0 ) {
                buildingCount++;
                staked += this.priceDict[array[i]]; 
                
            }
        } 
        DATA_PROVIDER.SetBuildingCount(buildingCount); 
        DATA_PROVIDER.SetStaked(staked);  
        console.log(buildingCount, staked); 
    }*/ 

    buildingPlaced(e){
        console.log(e.detail.tile); 
        const _pos = e.detail.tile; 
        //const _bId = e.detail.building;
        const _bId = 1;
        instance.methods.setPosition(_pos, _bId)
        .send({
            from: window.userAddress, 
            value: web3.utils.toWei('0.1'),
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
/*
        console.log(typeof DATA_PROVIDER.GetBuildingCount());
        let currentBld = parseFloat(DATA_PROVIDER.GetBuildingCount()); 
        console.log(currentBld); 
        let currentStk = parseFloat(DATA_PROVIDER.GetStaked()); 
        console.log(currentStk); 
        DATA_PROVIDER.SetBuildingCount(currentBld++); 

        DATA_PROVIDER.SetStaked(currentStk += this.priceDict[newBuilding]); 
*/
    }

    dispatchFetchDataEvent() {
        var fetch_data = new CustomEvent('fetch_data', {
          detail: {
            
          },
        });
        window.dispatchEvent(fetch_data);
    }
}