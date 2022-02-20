import { fetchUserData, fetchUserMaterials } from "./fetch_data.js"; 

window.userAddress = null; 

window.onload = async () => {
    try {
        //await ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x6357D2E0'}] });
    }
    catch(switchError) {
        if(switchError.code === 4902) {
            await ethereum.request({ 
                method: 'wallet_addEthereumChain', 
                params: [{
                chainId: '0x6357D2E0', 
                chainName: 'Harmony Testnet', 
                nativeCurrency: {
                    name: 'ONE',
                    symbol: 'ONE',
                    decimals: '18'
                }, 
                rpcUrls: ['https://api.s0.b.hmny.io']
                }]
            });
        } 
    }
    dispatchLoadGameEngine(); 
    await connectToMetamask(); 
    window.userAddress = window.ethereum.selectedAddress; 
    await fetchUserData(); 
    await fetchUserMaterials();
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

function dispatchLoadGameEngine() {
    var loadGameEngine = new CustomEvent('loadGameEngine');
    window.dispatchEvent(loadGameEngine); 
}

function dispatchUnlockedEvent() {
    var onUnlocked = new CustomEvent('onUnlocked');
    window.dispatchEvent(onUnlocked); 
}