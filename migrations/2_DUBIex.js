/* global artifacts */

const Deploy = require("solidity-utils/helpers/Deployer");

const DUBIex = artifacts.require("./DUBIex.sol");

module.exports = async (deployer, network) => {
  if (network === "develop") return;

  const deploy = Deploy(deployer, network);

  // --> dubiex
  await deploy(DUBIex);
};
