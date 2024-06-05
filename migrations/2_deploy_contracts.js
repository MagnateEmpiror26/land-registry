const LandRegistry = artifacts.require("LandRegistry");
const CityCouncil = artifacts.require("CityCouncil");
const DeedOfGrant = artifacts.require("DeedOfGrant");
const DeedOfTransfer = artifacts.require("DeedOfTransfer");

module.exports = async function (deployer, network, accounts) {
  // Deploy LandRegistry contract
  await deployer.deploy(LandRegistry);
  const landRegistryInstance = await LandRegistry.deployed();

  // Deploy CityCouncil contract with LandRegistry address
  await deployer.deploy(CityCouncil, landRegistryInstance.address);
  
  // Use the first account as grantor and currentOwner
  const grantor = accounts[0];
  const currentOwner = accounts[0];
  
  // For demonstration, set grantee and newOwner as the second account and a sample landId
  const grantee = accounts[1];
  const newOwner = accounts[1];
  const sampleLandId = 1; // Ensure a land with this ID exists in LandRegistry for real scenarios

  // Deploy DeedOfGrant contract
  await deployer.deploy(DeedOfGrant, grantor, grantee, sampleLandId);
  
  // Deploy DeedOfTransfer contract
  await deployer.deploy(DeedOfTransfer, currentOwner, newOwner, sampleLandId);
};
