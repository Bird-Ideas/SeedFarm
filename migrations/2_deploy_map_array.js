const builder = artifacts.require("Builder");

module.exports = async function (deployer) {
  await deployer.deploy(builder);
};
