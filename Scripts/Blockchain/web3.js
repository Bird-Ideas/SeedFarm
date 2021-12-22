import builder from '../Blockchain/Builder.js'; 

let web3; 

if(typeof window !== "undefined" && typeof window.ethereum !== "underfined"){
    window.ethereum.request({ method: 'eth_requestAccounts' }); 
    web3 = new Web3(window.ethereum); 
} /*else {
    const provider  = "ws://localhost:7545"; 
    web3 = new Web3(provider); 
}*/

const instance = new web3.eth.Contract(builder.abi, '0x73a4e1A141d7079DaB358b65F6652063B0ECC7f3'); 

export { web3, instance };