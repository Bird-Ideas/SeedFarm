import Builder from './Builder.js'; 
import Receiver from './Receiver.js'; 
import Item from './Item.js'; 

let web3; 

if(typeof window !== "undefined" && typeof window.ethereum !== "underfined"){
    web3 = new Web3(window.ethereum); 
} /*else {
    const provider  = "ws://localhost:7545"; 
    web3 = new Web3(provider); 
}*/

const builder = new web3.eth.Contract(Builder.abi, '0x627231cDEeF31871bD163d75f479eA6ad3d42D4a'); 
const receiver = new web3.eth.Contract(Receiver.abi, '0xa6916a4c47342C65d54fDe8F78841b9F1A3b919C'); 
const item = new web3.eth.Contract(Item.abi, '0x12d7ccAdc86cC48b3433e32090DCe0FD02C46eec');

export { web3, builder, receiver, item };