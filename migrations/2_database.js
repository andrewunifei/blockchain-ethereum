const DataBase = artifacts.require("./DataBase.sol");

module.exports = function (deployer) {
  deployer.deploy(DataBase);
};
