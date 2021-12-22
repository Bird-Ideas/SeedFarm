import { DATA_PROVIDER } from "../Engine/game.js";

import { web3, instance } from "./web3.js" 

window.userAddress = null; 

window.onload = async () => {
    if(window.ethereum.selectedAddress != null) {
        window.userAddress = window.ethereum.selectedAddress; 
        dispatchLoadGameEngine(); 
        dispatchUnlockedEvent(); 
    
        fetchUserData(); 
    }
}

const ethereumButton = document.getElementById('eth-button');
ethereumButton.addEventListener('click', () => {
    connectToMetamask(); 
    ethereumButton.textContent = window.ethereum.selectedAddress;
}); 

async function connectToMetamask() { 
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); 
    window.userAddress = accounts[0]; 
}

async function fetchUserData() {
    
    const result = await instance.methods.getMap()
    .call({
        from:  window.userAddress
    }); 

    const staked = await instance.methods.getStaked()
    .call({
        from: window.userAddress
    }); 
    /*
    const houses = await instance.methods.getHouses()
    .call({
        from: window.userAddress
    }); 
    */

    console.log(result);
    //console.log(staked, houses); 
    //DATA_PROVIDER.SetStaked(staked); 
    //DATA_PROVIDER.SetBuildingCount(houses); 
    dispatchMapLoadedEvent(result); 
}


function dispatchUnlockedEvent() {
    var onUnlocked = new CustomEvent('onUnlocked', {
        bubbles: false, 
        detail: {

         },
    });

    window.dispatchEvent(onUnlocked); 
}

function dispatchLoadGameEngine() {
    var loadGameEngine = new CustomEvent('loadGameEngine', {
        bubbles: false, 
        detail: {

         },
    });

    window.dispatchEvent(loadGameEngine); 
}

function dispatchMapLoadedEvent(result) {
    var onMapLoaded = new CustomEvent('onMapLoaded', {
        bubbles: false, 
        detail: {
            'array': result 
         },
    });

    window.dispatchEvent(onMapLoaded); 
}
