var FilmChainToken = artifacts.require("./FilmChainToken.sol");
var FilmChainTokenSales = artifacts.require("./FilmChainTokenSales.sol");

module.exports = function(deployer) {
  deployer.deploy(FilmChainToken, 1000000).then(function() {
    var tokenPrice = 100000000000000; //0.0001 ether
    return deployer.deploy(FilmChainTokenSales, FilmChainToken.address, tokenPrice);
  });

};
