import builder from '../Blockchain/Builder.js'; 

let web3; 

if(typeof window !== "undefined" && typeof window.ethereum !== "underfined"){
    web3 = new Web3(window.ethereum); 
} /*else {
    const provider  = "ws://localhost:7545"; 
    web3 = new Web3(provider); 
}*/

const instance = new web3.eth.Contract(builder.abi, '0x3EDff3a6619f5B8612752d8013CE3A259cA19093'); 

export { web3, instance };