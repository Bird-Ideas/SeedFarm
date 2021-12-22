const Web3 = require('web3'); 
const compiled = require('../build/contracts/Builder.json');
const assert = require('assert');
//const ganache = require('ganache-cli'); 

//const web3 = new Web3(ganache.provider());
const web3 = new Web3('http://localhost:7545'); 

let accounts; 
let instance; 

let result; 
let staked; 
let houses; 

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();

    instance = await new web3.eth.Contract(compiled.abi, '0x73a4e1A141d7079DaB358b65F6652063B0ECC7f3');
/*
    instance = await new web3.eth.Contract(compiled.abi)
    .deploy({ data: compiled.bytecode })
    .send({ 
        from: accounts[0],
         gas: '1000000' 
    });  
*/
/*
    await instance.methods.addPlayer().send({
        from: accounts[0], 
        gas: '1000000'
    }); 
*/

    await instance.methods.setPosition(0, 1).send({
        from: accounts[0], 
        value: web3.utils.toWei('0.1'), 
        gas: '1000000'
    });
 
    result = await instance.methods.getMap().call({
        from: accounts[0]
    }); 

    staked = await instance.methods.getStaked().call({
        from: accounts[0]
    }); 

    houses = await instance.methods.getHouses().call({
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
        console.log(result); 
        console.log(staked); 
        console.log(houses); 
    }); 
});
