const seed = artifacts.require("SeedToken");
const item = artifacts.require("SeedItem"); 
const receiver = artifacts.require("SeedItemReceiver"); 
const builder = artifacts.require("Builder");

module.exports = async function (deployer) {
  await deployer.deploy(seed) 
  await deployer.deploy(item); 
  await deployer.deploy(receiver); 
  const seedInstance = await seed.deployed();
  const itemInstance = await item.deployed(); 
  const receiverInstance = await receiver.deployed(); 

  await deployer.deploy(
    builder, 
    seedInstance.address, 
    itemInstance.address, 
    receiverInstance.address, 
    "0x0000000000000000000000000000000000000001"
  );
  const builderInstance = await builder.deployed(); 
  await seedInstance.transferOwnership(builderInstance.address); 
  await receiverInstance.setBuilder(builderInstance.address); 
};
