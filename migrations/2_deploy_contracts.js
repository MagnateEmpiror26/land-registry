const LandRegistry = artifacts.require("LandRegistry");
const CityCouncil = artifacts.require("CityCouncil");

module.exports = async function (deployer) {
  await deployer.deploy(LandRegistry);
  const landRegistryInstance = await LandRegistry.deployed();
  await deployer.deploy(CityCouncil, landRegistryInstance.address);
};
