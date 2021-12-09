const MapArray = artifacts.require("MapArray");

module.exports = async function (deployer) {
  await deployer.deploy(MapArray);
};
