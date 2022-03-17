const { assert } = require('chai');

const Item = artifacts.require("MockItem"); 
const Builder = artifacts.require("MockBuilder"); 
const Receiver = artifacts.require("SeedItemReceiver");

contract('Receiver', ([minter, alice]) => {

    this.id = 1; 
    this.amount = 5; 
    this.ids = [2, 3]; 
    this.amounts = [10, 15]; 

    beforeEach(async() => {
        this.item = await Item.new(alice, {from: minter}); 
        this.receiver = await Receiver.new({from: minter});
        this.builder = await Builder.new(this.receiver.address, {from: minter}); 

        await this.receiver.setItem(this.item.address); 
        await this.receiver.setBuilder(this.builder.address); 
    });

    it('ERC1155 Received', async () => {
        await this.item.safeTransferFrom(alice, this.receiver.address, this.id, this.amount, "0x00", {from: alice}); 
        const result = await this.receiver.funds(alice, 1, {from: alice});
        assert.equal(result, 5, "Different amount of tokens received");  
    }); 

    it('ERC1155 Batch Received', async () => {
        await this.item.safeBatchTransferFrom(alice, this.receiver.address, this.ids, this.amounts, "0x00", {from: alice}); 
        const first = await this.receiver.funds(alice, this.ids[0], {from: alice});
        const second = await this.receiver.funds(alice, this.ids[1], {from: alice}); 
        assert.equal(first, this.amounts[0], "Different amount of first token received");
        assert.equal(second, this.amounts[1], "Different amount of second token received");  
    }); 

    it('Collects special', async () => {
        await this.item.safeTransferFrom(alice, this.receiver.address, this.id, this.amount, "0x00", {from: alice}); 
        await this.receiver.collectSpecial(alice, 10); 
        const isSpecial = await this.receiver.isSpecialCollected(alice, {from: alice}); 
        const map = await this.builder.map(alice, 10, {from: alice});
        assert.equal(isSpecial, true, "Special wasn't built"); 
        assert.equal(map, 200, "Diffent value mapped"); 
    }); 

    it('Does not collect special (not enough nfts)', async () => {
        try {
            await this.receiver.collectSpecial(alice, 10); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    });

    it('Does not collect special (already collected)', async () => {
        await this.item.safeTransferFrom(alice, this.receiver.address, this.id, this.amount, "0x00", {from: alice}); 
        await this.receiver.collectSpecial(alice, 10); 
        try {
            await this.receiver.collectSpecial(alice, 10); 
            assert(false); 
        } catch (error) {
            assert(error); 
        }
    });
}); 