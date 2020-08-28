var FilmChainToken = artifacts.require("./FilmChainToken.sol");

contract("FilmChainToken", function(accounts) {
  var tokenInstance;

  it('start contracts with true values', function() {
    return FilmChainToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name) {
      assert.equal(name, 'FilmChain Token', 'has the correct name');
      return tokenInstance.symbol();
    }).then(function(symbol) {
      assert.equal(symbol, 'FCT', 'has the correct symbol');
      return tokenInstance.standard();
    }).then(function(standard) {
      assert.equal(standard, 'FilmChain Token v1.0', 'has the correct standard');
    });
  });

  it('allocates the initial supply upon deployment', function() {
    return FilmChainToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.getTotalSupply();
    }).then(function(getTotalSupply) {
      assert.equal(getTotalSupply.toNumber(), 1000000, 'sets total supply to 1,000,000');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance) {
      assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin account');
    });
  });

  it('transfer ownership', function() {
    return FilmChainToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.transfer.call(accounts[1], 9999999999999);
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, 'revert in errors');
      return tokenInstance.transfer.call(accounts[1], 300000, {from: accounts[0] });
    }).then(function(success) {
      assert.equal(success, true, 'returns as expected');
      return tokenInstance.transfer(accounts[1], 300000, {from: accounts[0] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, 'an event is emitted');
      assert.equal(receipt.logs[0].event, 'Transfer', 'Transfer event is emitted');
      return tokenInstance.balanceOf(accounts[1]);
    }).then(function(balance) {
      assert.equal(balance.toNumber(), 300000, 'amount is added to acc 1');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.toNumber(), 700000, 'amount is reduced from acc 0');
    });
  });

  it('can approves for transferFrom', function() {
    return FilmChainToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.approve.call(accounts[1], 200);
    }).then(function(success) {
      assert.equal(success, true, 'function is true');
      return tokenInstance.approve(accounts[1], 200, { from: accounts[0] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, 'an event is emitted');
      assert.equal(receipt.logs[0].event, 'Approval', 'Approval event is emitted');
    });
  });

  it('can transfer from', function() {
    return FilmChainToken.deployed().then(function(instance) {
      tokenInstance = instance;
      accountFrom = accounts[3];
      accountTo = accounts[4];
      accountTransfer = accounts[5];
      return tokenInstance.transfer(accountFrom, 200, { from: accounts[0] });
    }).then(function(receipt) {
      // approve to spend 20 tokens
      return tokenInstance.approve(accountTransfer, 20, { from: accountFrom });
    }).then(function(receipt) {
      return tokenInstance.transferFrom(accountFrom, accountTo, 3000, { from: accountTransfer });
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, 'not enough token can be trnasferred');
    });
  });





});
