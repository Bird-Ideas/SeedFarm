import { web3, builder } from "./web3.js"

const priceDict = ['0', '0.1', ];

listenForEvents(); 

function listenForEvents() { 
    window.addEventListener('sendBuildingPlaced', buildingPlaced);
    window.addEventListener('sendSpecialPlaced', specialPlaced); 
    window.addEventListener('sendBuildingDestroyed', buildingDestroyed); 
    window.addEventListener('sendCollectYield', collectYield);
}

async function buildingPlaced(e) {
    const _pos = e.detail.tile; 
    const _sId = e.detail.building;
    builder.methods.placeStructure(_pos, _sId)
    .send({
        from: window.userAddress, 
        value: web3.utils.toWei(priceDict[_sId]),
        gas: '200000'
    }, function(error, result) {
        if(error){
            console.log(error); 
        } 
        else {
            console.log(result);
        }
    }); 
}

async function specialPlaced(e) {
    // const _pos = e.detail.tile;  
}

async function buildingDestroyed(e) {
    const _pos = e.detail.tile; 
  
    builder.methods.removeStructure(_pos)
    .send({
        from: window.userAddress, 
        gas: '200000'
    }, function(error, result) {
        if(error){
            console.log(error); 
        } 
        else {
            console.log(result);
        }
    }); 
}

async function collectYield(e) {
    const _pos = e.detail.tile; 
    const _sId = e.detail.building; 

    builder.methods.withdrawTileYield(_pos, _sId)
    .send({
        from: window.userAddress, 
        gas: '200000'
    }, function(error, result) {
        if(error){
            console.log(error); 
        } 
        else {
            console.log(result);
        }
    });
    console.log("collecting yield", _pos); 
}