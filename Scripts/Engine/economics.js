import { DATA_PROVIDER } from "./game.js";

export default class Economics {

    priceDict = {}; 

    constructor(){

        this.priceDict[1] = 0.1; 
        this.listenForEvents(); 
    }

    listenForEvents() { 
        window.addEventListener("onMapLoaded", this.processMap.bind(this));
        window.addEventListener('onBuildingPlaced', this.buildingPlaced.bind(this)); 
    }

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
    }

    buildingPlaced(e){
        const newBuilding = e.detail.building; 
        let currentBld = DATA_PROVIDER.GetBuildingCount(); 
        console.log(currentBld); 
        let currentStk = DATA_PROVIDER.GetStaked(); 
        console.log(currentStk); 
        DATA_PROVIDER.SetBuildingCount(); 
        DATA_PROVIDER.SetStaked(DATA_PROVIDER.GetStaked += this.priceDict[newBuilding]); 
    }


}