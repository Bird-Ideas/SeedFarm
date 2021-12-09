const Web3 = require('web3'); 
const compiled = require('../build/contracts/MapArray.json');
const assert = require('assert');
//import ganache from 'ganache-cli'; 

//const web3 = new Web3(ganache.provider());
const web3 = new Web3('http://localhost:7545'); 

let accounts; 
let instance; 

let result; 

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();
    instance = await new web3.eth.Contract(compiled.abi, '0x170474B4BD695BDE6934b154A3224022E481C190');
    /*
    await instance.methods.addPlayer().send({
        from: accounts[0], 
        gas: '1000000'
    });*/ 

    await instance.methods.setPosition(10, 1).send({
        from: accounts[0], 
        gas: '1000000'
    });

    await instance.methods.setPosition(0, 1).send({
        from: accounts[0], 
        gas: '1000000'
     });

    result = await instance.methods.getMap().call({
        from: accounts[0]
    }); 

    /*
    mapArray = await new web3.eth.Contract(compiled.abi)
    .deploy({ data: compiled.bytecode })
    .send({ from: accounts[0], gas: '1000000' });
    */  
});

describe('Map', () => {
    it('deploys a map', () => {
        console.log(accounts);
        console.log(result); 
    }); 
});
