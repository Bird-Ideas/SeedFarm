import { DATA_PROVIDER } from "../Engine/game.js";

import { web3, instance } from "./web3.js" 

window.userAddress = null; 

window.addEventListener('fetch_data', fetchUserData); 

window.onload = async () => {
    //await ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x4'}] });
    dispatchLoadGameEngine(); 
    await connectToMetamask(); 
    window.userAddress = window.ethereum.selectedAddress; 
    await fetchUserData(); 
    dispatchUnlockedEvent(); 
}

const ethereumButton = document.getElementById('eth-button');
ethereumButton.addEventListener('click', async () => {
    await connectToMetamask(); 
    ethereumButton.textContent = "Log out";
    window.userAddress = window.ethereum.selectedAddress; 
    await fetchUserData(); 
    dispatchUnlockedEvent(); 
}); 

async function connectToMetamask() { 
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); 
    window.userAddress = accounts[0]; 
}

async function fetchUserData() {
    const map = await instance.methods.getMap()
    .call({
        from:  window.userAddress
    }); 
    const houses = await instance.methods.getHouses()
    .call({
        from: window.userAddress
    });
   const staked = await instance.methods.getStaked()
   .call({
       from: window.userAddress
   }); 
   const getCurrentTime = await web3.eth.getBlock("latest"); 
   console.log(getCurrentTime.timestamp);
   let readyArray = []; 
   var rewards = 0; 
   for(var i = 0; i < 81; ++i) {
       if(map[i] == 0) continue; 
       console.log("Pos: ", i); 
       const stakedTime = await instance.methods.getStakedTime(i)
        .call({
            from: window.userAddress 
       });
       console.log(stakedTime); 
       const isReadyForWithdraw = await instance.methods.isReadyForWithdraw(i)
        .call({
            from: window.userAddress 
       });
       if(isReadyForWithdraw){
           readyArray.push(i); 
       }
       console.log(isReadyForWithdraw); 
   }

    DATA_PROVIDER.SetStaked(web3.utils.fromWei(staked)); 
    DATA_PROVIDER.SetBuildingCount(houses); 
    DATA_PROVIDER.SetPendingRewards(rewards); 
    dispatchUpdateMapEvent(map); 
}

function dispatchLoadGameEngine() {
    var loadGameEngine = new CustomEvent('loadGameEngine');
    window.dispatchEvent(loadGameEngine); 
}

function dispatchUnlockedEvent() {
    var onUnlocked = new CustomEvent('onUnlocked');
    window.dispatchEvent(onUnlocked); 
}

function dispatchUpdateMapEvent(map) {
    var onUpdateMap = new CustomEvent('onUpdateMap', {
        detail: {
            'array': map 
         },
    });

    window.dispatchEvent(onUpdateMap); 
}
