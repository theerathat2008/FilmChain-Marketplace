const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledCreateProduct = require('./build/CreateProduct.json');

const provider = new HDWalletProvider(
  'genre jacket still pill vocal yellow surround rubber discover cash artist traffic',
  'https://rinkeby.infura.io/v3/8586865a669c410592a233683a10ddbf'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledCreateProduct.interface))
    .deploy({ data: '0x' + compiledCreateProduct.bytecode })
    .send({from: accounts[0], gas: '5000000' });


  console.log('Contract deployed to', result.options.address);
};
deploy();
