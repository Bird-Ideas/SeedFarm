const erc20 = artifacts.require("ERC20"); 
const seed = artifacts.require("SeedToken");
const builder = artifacts.require("Builder");


let eInstance, sInstance, bInstance; 

beforeEach(async() => {    
    eInstance = await erc20.deployed(); 
    sInstance = await seed.deployed(); 
    bInstance = await builder.deployed(); 
});

contract('Builder', accounts => {

const acc = accounts[0];

    it('Has constructor set up', async () => {
        const owner = await bInstance.owner.call({from: acc}); 
        const oneAddress = await bInstance.ONE.call({from: acc}); 
        const seedAddress = await bInstance.SEED.call({from: acc}); 

        assert.equal(owner, accounts[0], "Owner address is different"); 
        assert.equal(oneAddress, eInstance.address, "ERC20 address is different");
        assert.equal(seedAddress, sInstance.address, "SEED address is different");
    });
/*
    it('Should place building', async () => {
        const result = await bInstance.placeStu
    }); 
*/

    //it('should ')
});