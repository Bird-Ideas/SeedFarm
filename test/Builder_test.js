const { assert } = require('chai');
const timeMachine = require('ganache-time-traveler'); 

const Seed = artifacts.require("SeedToken");
const Item = artifacts.require("SeedItem"); 
const Receiver = artifacts.require("MockReceiver");
const Builder = artifacts.require("Builder");


contract('Builder', ([minter, alice, treasury]) => {
    
    this.build_pos = 0; 
    this.spec_pos = 1; 
    this.def_build_id = 1; 

    beforeEach(async() => {    
        let snapshot = await timeMachine.takeSnapshot();  
        snapshotId = snapshot['result']; 
    
        this.seed = await Seed.new({ from: minter }); 
        this.item = await Item.new({ from: minter}); 
        this.receiver = await Receiver.new({ from: minter}); 
        this.builder = await Builder.new(this.seed.address, this.item.address, 
            this.receiver.address, treasury, { from: minter}); 
        await this.seed.transferOwnership(this.builder.address, {from: minter}); 
        await this.receiver.setBuilder(this.builder.address, {from: minter}); 
    });
    
    afterEach(async () => {
        await timeMachine.revertToSnapshot(snapshotId); 
    });

    it('Places building', async () => {
        const result = await this.builder.placeStructure(
            this.build_pos, 
            this.def_build_id, {
            from: alice, 
            value: web3.utils.toWei("0.1", "ether")
        });

        const isStaking = await this.builder.getIsStaking.call({from: alice}); 
        const map = await this.builder.getMap.call({from: alice}); 
        const houses = await this.builder.getHouses.call({from: alice}); 
        const staked = await this.builder.getStaked.call({from: alice}); 
        const time = await this.builder.getStakedTime.call(
            this.build_pos, {from: alice}); 
        const contractBalance = await web3.eth.getBalance(this.builder.address); 

        const tokens = await this.item.balanceOfBatch(
            [alice, alice, alice, alice, alice], 
            [0, 1, 2, 3, 4], {from: alice}); 
        var nftMinted = 0;
        for(var i = 0; i < tokens.length; ++i) {
            nftMinted += tokens[i].toNumber(); 
        }

        assert.equal(result.receipt.status, true, "Transaction unsuccessful"); 
        assert.equal(isStaking, true, "Not staking");
        assert.equal(map[this.build_pos], this.def_build_id, "Tile is empty");
        assert.equal(houses, 1, "Different houses counts"); 
        assert.equal(web3.utils.fromWei(staked), '0.1', "Different value staked"); 
        assert.notEqual(time, null, "Time is not set"); 
        assert.equal(contractBalance.toString(), web3.utils.toWei('0.1'), "contractBalance has different value");  
        assert.equal(nftMinted, 1, "Different amount of NFTs minted"); 
    }); 
 
    it('Does not place building (wrong price)', async () => {
        try {
            await this.builder.placeStructure(
                this.build_pos, 
                this.def_build_id, {
                from: alice, 
                value: web3.utils.toWei("1", "ether")
            });
            assert(false); 
        }
        catch (error) {
            assert(error); 
        }
    }); 
    
    it('Does not place building (non unique)', async () => {
        await this.builder.placeStructure(
            this.build_pos, 
            this.def_build_id, {
            from: alice, 
            value: web3.utils.toWei("0.1", "ether")
        });
        try {
            await this.builder.placeStructure(
                this.build_pos, 
                this.def_build_id, {
                from: alice, 
                value: web3.utils.toWei("0.1", "ether")
            });
            assert(false); 
        }
        catch (error) {
            assert(error); 
        }
    }); 

    it('Removes structure', async() => {
        const expectedBalance = await web3.eth.getBalance(this.builder.address);
        
        await this.builder.placeStructure(
            this.build_pos, 
            this.def_build_id, {
            from: alice, 
            value: web3.utils.toWei("0.1", "ether")
        });
        
        const result = await this.builder.removeStructure(this.build_pos, { from: alice }); 
        
        const isStaking = await this.builder.getIsStaking.call({from: alice}); 
        const map = await this.builder.getMap.call({from: alice}); 
        const houses = await this.builder.getHouses.call({from: alice}); 
        const time = await this.builder.getStakedTime.call(this.build_pos, { from: alice }); 

        const contractBalance = await web3.eth.getBalance(this.builder.address);
        const blockNumber = await web3.eth.getBlockNumber(); 
        const blockInfo = await web3.eth.getBlock(blockNumber); 

        assert.equal(result.receipt.status, true, "Transaction unsuccessful"); 
        assert.equal(isStaking, false, "Staking");
        assert.equal(map[this.build_pos], 0, "Tile is not empty");
        assert.equal(houses, 0, "Different houses count"); 
        assert.equal(time, blockInfo.timestamp, "Time is set"); 
        assert.equal(contractBalance, expectedBalance, "contractBalance has different value");  
    }); 

    it('Does not remove structure (not staking)', async() => {
        try {
            await this.builder.removeStructure(this.build_pos, { from: alice }); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    }); 
    it('Does not remove structure (empty tile)', async() => {
        const emptyPos = 4; 

        await this.builder.placeStructure(
            this.build_pos, 
            this.def_build_id, {
            from: alice, 
            value: web3.utils.toWei("0.1", "ether")
        });

        const isStaking = await this.builder.getIsStaking.call({from: alice}); 
        assert(isStaking, true, "Not staking"); 
        
        try {
            await this.builder.removeStructure(emptyPos, {from: alice }); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    }); 

    it('Does not remove structure (special tile)', async() => {
        await this.receiver.collectSpecial(alice, this.spec_pos, {from: alice});
        
        try {
            await this.builder.removeStructure(this.spec_pos, {from: alice }); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    }); 
 
    it('Withdraws yield', async() => {
        await this.builder.placeStructure(
            this.build_pos, 
            this.def_build_id, {
            from: alice, 
            value: web3.utils.toWei("0.1", "ether")
        });

        await timeMachine.advanceTime(3600); 

        const result = await this.builder.withdrawTileYield(this.build_pos, this.def_build_id, {from: alice}); 
        const blockNumber = await web3.eth.getBlockNumber(); 
        const blockInfo = await web3.eth.getBlock(blockNumber); 

        const currentBalance = await this.seed.balanceOf.call(alice, {from: alice});
        const treasuryBalance = await this.seed.balanceOf.call(treasury, {from: alice}); 
        const time = await this.builder.getStakedTime.call(this.build_pos, {from: alice}); 
        const pendingYield = await this.builder.pendingYield.call(this.build_pos, this.def_build_id, {from: alice}); 
        const sum = web3.utils.fromWei(currentBalance.add(treasuryBalance)); 
        assert.equal(pendingYield, 0, "Pending yield is not zero"); 
        assert.equal(result.receipt.status, true, "Transaction unsuccessful"); 
        assert.isTrue(sum == 3600 || sum == 3601, "Different amount of tokens minted");
        assert.equal(time.toString(), blockInfo.timestamp.toString(), "Staked time did not udpate"); 
    }); 
    it('Withdraws yield (5 hours)', async() => {
        const fivehour = 3600 * 5; 

        await this.builder.placeStructure(
            this.build_pos, 
            this.def_build_id, {
            from: alice, 
            value: web3.utils.toWei("0.1", "ether")
        });
      
        await timeMachine.advanceTime(fivehour); 
       
        const result = await this.builder.withdrawTileYield(this.build_pos, this.def_build_id, {from: alice}); 
        const currentBalance = await this.seed.balanceOf.call(alice, {from: alice});
        const treasuryBalance = await this.seed.balanceOf.call(treasury, {from: alice}); 
        const sum = web3.utils.fromWei(currentBalance.add(treasuryBalance)); 
        assert.equal(result.receipt.status, true, "Transaction unsuccessful"); 
        assert.equal(sum, 14400, "Different amount of tokens minted"); 
    }); 
    it('Withdraws yield with special', async() => {
        await this.receiver.collectSpecial(alice, this.spec_pos, {from: alice});
        await this.builder.placeStructure(
            this.build_pos, 
            this.def_build_id, {
            from: alice, 
            value: web3.utils.toWei("0.1", "ether")
        });

        await timeMachine.advanceTime(3600); 

        const result = await this.builder.withdrawTileYield(this.build_pos, this.def_build_id, {from: alice}); 
        const currentBalance = await this.seed.balanceOf.call(alice, {from: alice});
        const treasuryBalance = await this.seed.balanceOf.call(treasury, {from: alice}); 
        const pendingYield = await this.builder.pendingYield.call(this.build_pos, this.def_build_id, {from: alice}); 
        const sum = web3.utils.fromWei(currentBalance.add(treasuryBalance)); 
        assert.equal(pendingYield < 10, true); 
        assert.equal(result.receipt.status, true, "Transaction unsuccessful"); 
        assert.isTrue(sum > 3960 && sum < 3962, "Different amount of tokens minted");
    }); 

    it('Does not withdraw yield (not staking)', async () => {
        try {
            await this.builder.withdrawTileYield(
                this.build_pos, 
                this.def_build_id, {
                    from: accounts[2] 
                }
            ); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    }); 

    it('Does not withdraw yield (empty tile)', async () => {
        const emptyPos = 7; 

        await this.builder.placeStructure(
            this.build_pos, 
            this.def_build_id, {
            from: alice, 
            value: web3.utils.toWei("0.1", "ether")
        });

        const isStaking = await this.builder.getIsStaking.call({from: alice}); 
        assert(isStaking, true, "Not staking"); 
        
        try {
            await this.builder.removeStructure(emptyPos, {from: alice}); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    }); 

    it('Does not withdraw yield (not special)', async () => {
        await this.receiver.collectSpecial(alice, this.spec_pos, {from: alice});
        await this.builder.placeStructure(
            this.build_pos, 
            this.def_build_id, {
            from: alice, 
            value: web3.utils.toWei("0.1", "ether")
        });

        const isStaking = await this.builder.getIsStaking.call({from: alice}); 
        assert(isStaking, true, "Not staking"); 
        
        try {
            await this.builder.removeStructure(this.spec_pos, {from: alice}); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    }); 
});