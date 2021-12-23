import builder from '../Blockchain/Builder.js'; 

let web3; 

if(typeof window !== "undefined" && typeof window.ethereum !== "underfined"){
    window.ethereum.request({ method: 'eth_requestAccounts' }); 
    web3 = new Web3(window.ethereum); 
} /*else {
    const provider  = "ws://localhost:7545"; 
    web3 = new Web3(provider); 
}*/

const instance = new web3.eth.Contract(builder.abi, '0x2C9F35c4be932C40360b4118d6Bb35c8AB98B14E'); 

export { web3, instance };