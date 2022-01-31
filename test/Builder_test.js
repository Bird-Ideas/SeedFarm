const timeMachine = require('ganache-time-traveler'); 

const seed = artifacts.require("SeedToken");
const item = artifacts.require("SeedItem"); 
const receiver = artifacts.require("SeedItemReceiver");
const builder = artifacts.require("Builder");

beforeEach(async() => {    
    let snapshot = await timeMachine.takeSnapshot();  
    snapshotId = snapshot['result']; 

    
});

afterEach(async () => {
    await timeMachine.revertToSnapshot(snapshotId); 
});
contract('Builder', accounts => {

const acc = accounts[0];
  
    it('Places building', async () => {
        const bInstance = await builder.deployed(); 
        const iInstance = await item.deployed(); 
        const buildingPos = 0; 
        const buildingId = 1; 
        const housesCount = 1; 

        const result = await bInstance.placeStructure(
            buildingPos, 
            buildingId, {
            from: acc, 
            value: web3.utils.toWei("0.1", "ether")
        });

        const isStaking = await bInstance.getIsStaking.call({from: acc}); 
        const map = await bInstance.getMap.call({from: acc}); 
        const houses = await bInstance.getHouses.call({from: acc}); 
        const time = await bInstance.getStakedTime.call(
            buildingPos, {
                from: acc
        }); 
        const contractBalance = await web3.eth.getBalance(bInstance.address); 
        const tokens = await iInstance.balanceOfBatch([acc, acc, acc, acc, acc], [0, 1, 2, 3, 4], {from: acc}); 
        var nftMinted = 0;
        for(var i = 0; i < tokens.length; ++i) {
            nftMinted += tokens[i].toNumber(); 
        }

        assert.equal(result.receipt.status, true, "Transaction unsuccessful"); 
        assert.equal(isStaking, true, "Not staking");
        assert.equal(map[buildingPos], buildingId, "Tile is empty");
        assert.equal(houses, housesCount, "Different houses counts"); 
        assert.notEqual(time, null, "Time is not set"); 
        assert.equal(contractBalance, web3.utils.toWei("0.1"), "contractBalance has different value");  
        assert.equal(nftMinted, 1, "Different amount of NFTs minted"); 
    }); 
 
    it('Does not place building (wrong price)', async () => {
        const bInstance = await builder.deployed(); 
        const buildingPos = 1; 
        const buildingId = 1; 
        try {
            await bInstance.placeStructure(
                buildingPos, 
                buildingId, {
                from: acc, 
                value: web3.utils.toWei("1", "ether")
            });
            assert(false); 
        }
        catch (error) {
            assert(error); 
        }
    }); 
    
    it('Does not place building (non unique)', async () => {
        const bInstance = await builder.deployed(); 
        const buildingPos = 2; 
        const buildingId = 1; 
        await bInstance.placeStructure(
            buildingPos, 
            buildingId, {
            from: acc, 
            value: web3.utils.toWei("0.1", "ether")
        });
        try {
            await bInstance.placeStructure(
                buildingPos, 
                buildingId, {
                from: acc, 
                value: web3.utils.toWei("0.1", "ether")
            });
            assert(false); 
        }
        catch (error) {
            assert(error); 
        }
    }); 

    it('Removes structure', async() => {
        const bInstance = await builder.deployed(); 
        const buildingPos = 3; 
        const buildingId = 1; 
        const expectedBalance = await web3.eth.getBalance(bInstance.address);
        

        await bInstance.placeStructure(
            buildingPos, 
            buildingId, {
            from: accounts[1], 
            value: web3.utils.toWei("0.1", "ether")
        });
        
        const result = await bInstance.removeStructure(
            buildingPos, {
                from: accounts[1]
        }); 
        
        const isStaking = await bInstance.getIsStaking.call({from: accounts[1]}); 
        const map = await bInstance.getMap.call({from: accounts[1]}); 
        const houses = await bInstance.getHouses.call({from: accounts[1]}); 
        const time = await bInstance.getStakedTime.call(
            buildingPos, {
                from: accounts[1]
        }); 

        const contractBalance = await web3.eth.getBalance(bInstance.address);
        const blockNumber = await web3.eth.getBlockNumber(); 
        const blockInfo = await web3.eth.getBlock(blockNumber); 

        assert.equal(result.receipt.status, true, "Transaction unsuccessful"); 
        assert.equal(isStaking, false, "Staking");
        assert.equal(map[buildingPos], 0, "Tile is not empty");
        assert.equal(houses, 0, "Different houses count"); 
        assert.equal(time, blockInfo.timestamp, "Time is set"); 
        assert.equal(contractBalance, expectedBalance, "contractBalance has different value");  
    }); 

    it('Does not remove structure (not staking)', async() => {
        const bInstance = await builder.deployed(); 
        const buildingPos = 3; 

        try {
            const result = await bInstance.removeStructure(
                buildingPos, {
                    from: acc
            }); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    }); 
    it('Does not remove structure (empty tile)', async() => {
        const bInstance = await builder.deployed(); 
        const buildingPos = 3; 
        const buildingId = 1; 
        const emptyPos = 4; 

        await bInstance.placeStructure(
            buildingPos, 
            buildingId, {
            from: acc, 
            value: web3.utils.toWei("0.1", "ether")
        });

        const isStaking = await bInstance.getIsStaking.call({from: acc}); 
        assert(isStaking, true, "Not staking"); 
        
        try {
            const result = await bInstance.removeStructure(
                emptyPos , {
                    from: acc
            }); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    }); 
 
    it('Withdraws yield', async() => {
        const bInstance = await builder.deployed(); 
        const sInstance = await seed.deployed(); 
        const buildingPos = 5; 
        const buildingId = 1; 
        const hour = 3600; 
        

        const accBalance = await sInstance.balanceOf.call(acc, {from: acc});

        await bInstance.placeStructure(
            buildingPos, 
            buildingId, {
            from: acc, 
            value: web3.utils.toWei("0.1", "ether")
        });

        await timeMachine.advanceTime(hour); 

        const result = await bInstance.withdrawTileYield(
            buildingPos, 
            buildingId, {
                from: acc 
            }
        ); 
        const blockNumber = await web3.eth.getBlockNumber(); 
        const blockInfo = await web3.eth.getBlock(blockNumber); 

        const currentBalance = await sInstance.balanceOf.call(acc, {from: acc});
        const diff = web3.utils.fromWei((currentBalance.sub(accBalance)).toString()); 
        const time = await bInstance.getStakedTime.call(buildingPos, {from: acc}); 
        const pendingYield = await bInstance.pendingYield.call(buildingPos, buildingId, {from: acc}); 

        assert.equal(pendingYield < 10, true); 
        assert.equal(result.receipt.status, true, "Transaction unsuccessful"); 
        assert.equal(diff, hour, "Different amount of tokens minted"); 
        assert.equal(time.toString(), blockInfo.timestamp.toString(), "Staked time did not udpate"); 
    }); 

    it('Withdraws yield (5 hours)', async() => {
        const bInstance = await builder.deployed(); 
        const sInstance = await seed.deployed(); 
        const buildingPos = 5; 
        const buildingId = 1; 
        const fourhour = 3600 * 4; 
        const fivehour = 3600 * 5; 
        const blockNumber = await web3.eth.getBlockNumber(); 
        const blockInfo = await web3.eth.getBlock(blockNumber); 
        
        const accBalance = await sInstance.balanceOf.call(acc, {from: acc});

        await bInstance.placeStructure(
            buildingPos, 
            buildingId, {
            from: acc, 
            value: web3.utils.toWei("0.1", "ether")
        });
      
        await timeMachine.advanceTime(fivehour); 
       
        const result = await bInstance.withdrawTileYield(
            buildingPos, 
            buildingId, {
                from: acc 
            }
        ); 

        const currentBalance = await sInstance.balanceOf.call(acc, {from: acc});
        const diff = web3.utils.fromWei((currentBalance.sub(accBalance)).toString()); 
        const stakedTime = await bInstance.getStakedTime.call(buildingPos, {from: acc}); 
        assert.equal(result.receipt.status, true, "Transaction unsuccessful"); 
        assert.equal(diff, fourhour, "Different amount of tokens minted"); 
        assert.notEqual(stakedTime, blockInfo.timestamp, "Staked time did not update"); 
    }); 

    it('Withdraws yield (30 days)', async() => {
        const bInstance = await builder.deployed(); 
        const sInstance = await seed.deployed(); 
        const buildingPos = 5; 
        const buildingId = 1; 
        const hour = 3600; 
        const day = 3600 * 24; 
        const month = day * 30; 
        const blockNumber = await web3.eth.getBlockNumber(); 
        const blockInfo = await web3.eth.getBlock(blockNumber); 
        
        const accBalance = await sInstance.balanceOf.call(acc, {from: acc});

        await timeMachine.advanceTime(month); 

        await bInstance.placeStructure(
            buildingPos, 
            buildingId, {
            from: acc, 
            value: web3.utils.toWei("0.1", "ether")
        });
      
        await timeMachine.advanceTime(hour); 
       
        const result = await bInstance.withdrawTileYield(
            buildingPos, 
            buildingId, {
                from: acc 
            }
        ); 

        const currentBalance = await sInstance.balanceOf.call(acc, {from: acc});
        const diff = web3.utils.fromWei((currentBalance.sub(accBalance)).toString()); 
        const stakedTime = await bInstance.getStakedTime.call(buildingPos, {from: acc}); 
        assert.equal(result.receipt.status, true, "Transaction unsuccessful"); 
        assert.equal(diff, hour, "Different amount of tokens minted"); 
        assert.notEqual(stakedTime, blockInfo.timestamp, "Staked time did not update"); 
    });



    it('Does not withdraw yield (not staking)', async () => {
        const bInstance = await builder.deployed(); 
        const buildingPos = 6; 
        const buildingId = 1; 

        try {
            const result = await bInstance.withdrawTileYield(
                buildingPos, 
                buildingId, {
                    from: accounts[2] 
                }
            ); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    }); 

    it('Does not withdraw yield (empty tile)', async () => {
        const bInstance = await builder.deployed(); 
        const buildingPos = 6; 
        const buildingId = 1; 
        const emptyPos = 7; 

        await bInstance.placeStructure(
            buildingPos, 
            buildingId, {
            from: acc, 
            value: web3.utils.toWei("0.1", "ether")
        });

        const isStaking = await bInstance.getIsStaking.call({from: acc}); 
        assert(isStaking, true, "Not staking"); 
        
        try {
            const result = await bInstance.removeStructure(
                emptyPos , {
                    from: acc
            }); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    }); 
});

