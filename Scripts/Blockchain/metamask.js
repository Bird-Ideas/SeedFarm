import { DATA_PROVIDER } from "../Engine/game.js";

import web3 from './web3.js'; 
import mapArray from './mapInstance.js'; 


if(window.ethereum.selectedAddress != null) {
    DATA_PROVIDER.SetUserAddress(window.ethereum.selectedAddress);  
    getMapFromAccount(); 
}

window.ethereum.on('accountsChanged', function(accounts){
    DATA_PROVIDER.SetUserAddress(accounts[0]); 
    getMapFromAccount(); 
});

const ethereumButton = document.getElementById('eth-button');
ethereumButton.addEventListener('click', () => {
    connectToMetamask(); 
}); 

async function connectToMetamask() { 
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); 
    DATA_PROVIDER.SetUserAddress(accounts[0]);
}

async function getMapFromAccount() {
    const result = await mapArray.methods.getMap()
    .call({
        from: ethereum.selectedAddress 
    }); 
    dispatchMapLoadedEvent(result); 
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
