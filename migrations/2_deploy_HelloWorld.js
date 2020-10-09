const HelloWorld = artifacts.require("HelloWorld"); // contract name, not file name

module.exports = function (deployer) { // this is the magic part of truffle
  deployer.deploy(HelloWorld);
};
