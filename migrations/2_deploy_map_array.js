const erc20 = artifacts.require("ERC20"); 
const seed = artifacts.require("SeedToken");
const builder = artifacts.require("Builder");


module.exports = async function (deployer) {
  await deployer.deploy(erc20, "ONE", "ONE"); 
  const erc20instance = await erc20.deployed(); 
  await deployer.deploy(seed) 
  const seedInstance = await seed.deployed();

  await deployer.deploy(
    builder, 
    erc20instance.address, 
    seedInstance.address
    );
};
