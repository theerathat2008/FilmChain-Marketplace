import web3 from './web3';

import CreateProduct from './build/CreateProduct.json';

const instance = new web3.eth.Contract(
  JSON.parse(CreateProduct.interface),
  '0xF4d7CC060db884D89dc388ee0F6D4585ED5348F5'
);

export default instance;
