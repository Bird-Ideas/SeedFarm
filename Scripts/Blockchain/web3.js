let web3; 

if(typeof window !== "undefined" && typeof window.ethereum !== "underfined"){
    window.ethereum.request({ method: 'eth_requestAccounts' }); 
    web3 = new Web3(window.ethereum); 
} /*else {
    const provider  = "ws://localhost:7545"; 
    web3 = new Web3(provider); 
}*/

export default web3;