import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser or metamask has already injected web3
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server or use is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/8586865a669c410592a233683a10ddbf'
  );
  web3 = new Web3(provider);
}

export default web3;
