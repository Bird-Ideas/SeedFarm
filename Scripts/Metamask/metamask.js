import { DATA_PROVIDER } from "../game.js";

if(typeof window.ethereum !== 'undefined') {
    console.log('Metamask is installed'); 
}

const ethereumButton = document.getElementById('eth-button');
ethereumButton.addEventListener('click', () => {
    connectToMetamask(); 
}); 

async function connectToMetamask() { 
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); 
    DATA_PROVIDER.SetUserAddress(accounts[0]);
}
