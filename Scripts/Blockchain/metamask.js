import { DATA_PROVIDER } from "../Engine/game.js";

import { web3, instance } from "./web3.js" 

window.userAddress = null; 

window.addEventListener('fetch_data', fetchUserData); 

window.onload = async () => {
    await ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x4'}] });
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
    const result = await instance.methods.getMap()
    .call({
        from:  window.userAddress
    }); 
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

function dispatchLoadGameEngine() {
    var loadGameEngine = new CustomEvent('loadGameEngine');
    window.dispatchEvent(loadGameEngine); 
}

function dispatchUnlockedEvent() {
    var onUnlocked = new CustomEvent('onUnlocked');
    window.dispatchEvent(onUnlocked); 
}

function dispatchUpdateMapEvent(result) {
    var onUpdateMap = new CustomEvent('onUpdateMap', {
        detail: {
            'array': result 
         },
    });

    window.dispatchEvent(onUpdateMap); 
}
