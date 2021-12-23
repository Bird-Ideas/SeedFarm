import { DATA_PROVIDER } from "../Engine/game.js";

import { web3, instance } from "./web3.js" 

window.userAddress = null; 

window.addEventListener('fetch_data', fetchUserData); 

window.onload = async () => {
    dispatchLoadGameEngine(); 
    if(window.ethereum.selectedAddress != null) {
        window.userAddress = window.ethereum.selectedAddress; 
        await fetchUserData(); 

        dispatchUnlockedEvent(); 
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
    console.log('fetching user data');
    const result = await instance.methods.getMap()
    .call({
        from:  window.userAddress
    }); 
    console.log(result); 

    const staked = await instance.methods.getStaked()
    .call({
        from: window.userAddress
    }); 
    const houses = await instance.methods.getHouses()
    .call({
        from: window.userAddress
    });

    DATA_PROVIDER.SetStaked(web3.utils.fromWei(staked)); 
    DATA_PROVIDER.SetBuildingCount(houses); 
    dispatchUpdateMapEvent(result); 
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

function dispatchUpdateMapEvent(result) {
    var onUpdateMap = new CustomEvent('onUpdateMap', {
        bubbles: false, 
        detail: {
            'array': result 
         },
    });

    window.dispatchEvent(onUpdateMap); 
}
