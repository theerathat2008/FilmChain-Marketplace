const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
require('events').EventEmitter.defaultMaxListeners = 50;

const compiledCreateProduct = require('../ethereum/build/CreateProduct.json');
const compiledMarketplace = require('../ethereum/build/Marketplace.json');

let accounts;
let createProduct;
let marketplaceAddress;
let marketplace;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  createProduct = await new web3.eth.Contract(JSON.parse(compiledCreateProduct.interface))
    .deploy({ data: '0x' + compiledCreateProduct.bytecode })
    .send({ from: accounts[0], gas: '5000000'});

  await createProduct.methods.createUser('hi@hotmail.com', 'P1name', 'P1lastname', 'hi')
  .send({
    from: accounts[0],
    gas: '5000000'
  });

  await createProduct.methods.login(accounts[0], 'hi').send({
    from: accounts[0],
    gas: '5000000'
  });
  await createProduct.methods.newProduct('Stranger Things', '5', '1')
  .send({
      from: accounts[0],
      gas:  '5000000'
    });

  [marketplaceAddress] = await createProduct.methods.getDeployedProducts().call();
  marketplace = await new web3.eth.Contract(
    JSON.parse(compiledMarketplace.interface),
    marketplaceAddress
  );
});

describe('Marketplace', () => {
  it('deploys create product and marketplace', () => {
    assert.ok(createProduct.options.address);
    assert.ok(marketplace.options.address);
  });

  it('caller of the product is marked correctly', async () => {
    const manager = await marketplace.methods.manager().call();

    assert.equal(accounts[0], manager);
  });

  it('list product for sales', async () => {
    await marketplace.methods.
  });

  it('allows people to buy product', async () => {
    await marketplace.methods.buyEquity().send({
      value: '5',
      from: accounts[1]
    });
    const manager = await marketplace.methods.manager().call();
    assert.equal(accounts[1], manager);

  });

  it('allows people to make offer', async () => {
    await marketplace.methods.makeOffer('Please').send({
      value: '1',
      from: accounts[1]
    });

    const highestOfferPrice = await marketplace.methods.highestOfferPrice().call();
    assert.equal(highestOfferPrice, 1);

  });

  it('if multiple offer then only the highest appear top', async () => {
    await marketplace.methods.makeOffer('Account 1').send({
      value: '1',
      from: accounts[1]
    });

    await marketplace.methods.makeOffer('Account 2').send({
      value: '2',
      from: accounts[2]
    });

    const highestOfferPrice = await marketplace.methods.highestOfferPrice().call();
    assert.equal(highestOfferPrice, 2);

  });

  it('if someone bid higher then refund to the previously highest bidder', async () => {
    await marketplace.methods.makeOffer('Account 1').send({
      value: '1',
      from: accounts[1]
    });

    await marketplace.methods.makeOffer('Account 2').send({
      value: '2',
      from: accounts[2]
    });

    const refund = await marketplace.methods.getRefundAmount(accounts[1]).call();
    assert.equal(refund, 1);

  });

  it('allows to withdraw', async () => {
    await marketplace.methods.makeOffer('Account 1').send({
      value: '1',
      from: accounts[1]
    });

    await marketplace.methods.makeOffer('Account 2').send({
      value: '2',
      from: accounts[2]
    });

    await marketplace.methods.withdraw().send({
      from: accounts[1]
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);

    assert(balance > 99.5);
  });
});
