var SiriuxToken = artifacts.require("./SiriuxToken.sol");
var SiriuxTokenSale = artifacts.require("./SiriuxTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(SiriuxToken,1000000).then(function() {
    //token price is 0.001 ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(SiriuxTokenSale, SiriuxToken.address, tokenPrice);
  });
};
