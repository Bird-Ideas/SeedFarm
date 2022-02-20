import { DATA_PROVIDER } from "../Engine/game.js";
import { web3, builder, receiver, item } from "./web3.js" 

window.addEventListener('fetch_data', fetchUserData); 
window.addEventListener('fetch_material', fetchUserMaterials); 

export async function fetchUserData() {
    const map = await builder.methods.getMap()
    .call({
        from:  window.userAddress
    }); 
    const houses = await builder.methods.getHouses()
    .call({
        from: window.userAddress
    });
   const staked = await builder.methods.getStaked()
   .call({
       from: window.userAddress
   }); 
   let readyArray = []; 
   var rewards = 0; 
   var currentReward = 0; 
   for(var i = 0; i < 81; ++i) {
       if(map[i] == 0) continue; 
       const isReadyForWithdraw = await builder.methods.isReadyForWithdraw(i, map[i])
        .call({
            from: window.userAddress 
       });
       if(isReadyForWithdraw){
           readyArray.push(i); 
       }
       currentReward = await builder.methods.pendingYield(i, map[i])
       .call({
           from: window.userAddress
       }); 
       rewards += Number(currentReward / 10 ** 18); 
   }
   
    DATA_PROVIDER.SetStaked(web3.utils.fromWei(staked)); 
    DATA_PROVIDER.SetBuildingCount(houses); 
    DATA_PROVIDER.SetPendingRewards(rewards); 
    dispatchUpdateMapEvent(map); 
}

export async function fetchUserMaterials() {
    const materials = []; 
    for(var i = 1; i <= 5; ++i) {
        const material = await getMaterial(i); 
        materials.push(material); 
    }
    DATA_PROVIDER.SetMaterialCount(materials);
}

async function getMaterial(id) {
    const material = await item.methods.balanceOf(window.userAddress, id)
        .call({
            from: window.userAddress
    }); 
    return material; 
}

function dispatchUpdateMapEvent(map) {
    var onUpdateMap = new CustomEvent('onUpdateMap', {
        detail: {
            'array': map 
         },
    });

    window.dispatchEvent(onUpdateMap); 
}