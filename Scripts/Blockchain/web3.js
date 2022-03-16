import Builder from './Builder.js'; 
import Receiver from './Receiver.js'; 
import Item from './Item.js'; 

const env = 'testnet'; 

let web3, builder, receiver, item; 

if(typeof window !== "undefined" && typeof window.ethereum !== "underfined"){
    web3 = new Web3(window.ethereum); 
} 

if(env === 'testnet') {
    builder = new web3.eth.Contract(Builder.abi, '0xcbbE92efC0d57f8C560992bf7DC3Ff4422218CDa'); 
    receiver = new web3.eth.Contract(Receiver.abi, '0x8a266Ad8541d372051442D224FfF4C603219D905'); 
    item = new web3.eth.Contract(Item.abi, '0x305b5c3481B2bC997364a69e93c3eF9cF0b2c419');
} else if (env === 'ganache') {
    builder = new web3.eth.Contract(Builder.abi, '0x627231cDEeF31871bD163d75f479eA6ad3d42D4a'); 
    receiver = new web3.eth.Contract(Receiver.abi, '0xa6916a4c47342C65d54fDe8F78841b9F1A3b919C'); 
    item = new web3.eth.Contract(Item.abi, '0x12d7ccAdc86cC48b3433e32090DCe0FD02C46eec');
}

export { web3, builder, receiver, item };