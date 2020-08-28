var FilmChainToken = artifacts.require("./FilmChainToken.sol");
var FilmChainTokenSales = artifacts.require("./FilmChainTokenSales.sol");

contract('FilmChainTokenSales', function(accounts) {
  var tokenInstance;
  var tokenSalesInstance;
  var tokenPrice = 100000000000000; //0.0001 ether
  var manager = accounts[0];
  var beneficiary = accounts[1];
  var tokensInTokenContract = 800000;
  var numTokens;

  it('initiates contract', function() {
    return FilmChainTokenSales.deployed().then(function(instance) {
      tokenSalesInstance = instance;
      return tokenSalesInstance.address;
    }).then(function(address) {
      assert.notEqual(address, 0x0, 'has contract address');
      return tokenSalesInstance.tokenAddress();
    }).then(function(address) {
      assert.notEqual(address, 0x0, 'token contract address exists');
      return tokenSalesInstance.tokenAddress();
    }).then(function(address) {
      assert.notEqual(address, 0x0, 'token contract address exists');
      return tokenSalesInstance.tokenPrice();
    }).then(function(price) {
      assert.equal(price, tokenPrice, 'token price is correct');
    });
  });

  it('can buy tokens', function() {
    return FilmChainToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return FilmChainTokenSales.deployed();
    }).then(function(instance) {
      tokenSaleInstance = instance;
      // add 800000 tokens tok token contract
      return tokenInstance.transfer(tokenSaleInstance.address, tokensInTokenContract, { from: manager })
    }).then(function(receipt) {
      numberOfTokens = 25;
      return tokenSaleInstance.buyTokens(numberOfTokens, { from: beneficiary, value: numberOfTokens * tokenPrice })
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, 'event emitted');
      assert.equal(receipt.logs[0].event, 'TokensSell', 'TokensSell event emitted');
      return tokenSaleInstance.numSoldTokens();
    }).then(function(amount) {
      assert.equal(amount.toNumber(), numberOfTokens, 'itoken soldes number added');
      return tokenInstance.balanceOf(beneficiary);
    }).then(function(balance) {
      assert.equal(balance.toNumber(), numberOfTokens);
      return tokenInstance.balanceOf(tokenSaleInstance.address);
    }).then(function(balance) {
      assert.equal(balance.toNumber(), tokensInTokenContract - numberOfTokens);
      return tokenSaleInstance.buyTokens(numberOfTokens, { from: beneficiary, value: 1 });
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, 'tokens mismatch');
      return tokenSaleInstance.buyTokens(900000, { from: beneficiary, value: numberOfTokens * tokenPrice })
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, 'number exceeds available tokens');
    });
  });

  it('exit sales', function() {
    return FilmChainToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return FilmChainTokenSales.deployed();
    }).then(function(instance) {
      tokenSaleInstance = instance;
      // add 800000 tokens tok token contract
      return tokenSalesInstance.exitSales({ from: beneficiary });
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert' >= 0, 'must be manager to exit'));
      return tokenSalesInstance.exitSales({ from: manager });
    }).then(function(receipt) {
      return tokenInstance.balanceOf(manager);
    }).then(function(balance) {
      assert.equal(balance.toNumber(), 999975, 'returns available tokens back');
      // reset the value after sales is exit
      
    });
  });
})
