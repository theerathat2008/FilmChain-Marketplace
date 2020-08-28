'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CreateProduct = require('./build/CreateProduct.json');

var _CreateProduct2 = _interopRequireDefault(_CreateProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CreateProduct2.default.interface), '0x13cf4f41d7A0Fe06C4D8cC92dC5Ef6087C8Ec955');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL25ld3Byb2R1Y3QuanMiXSwibmFtZXMiOlsid2ViMyIsIkNyZWF0ZVByb2R1Y3QiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFFQSxBQUFPLEFBQVAsQUFBMEIsQUFBMUI7Ozs7OztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDZixLQUFLLEFBQUwsTUFBVyx3QkFBYyxBQUF6QixBQURlLFlBRWYsQUFGZSxBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6Im5ld3Byb2R1Y3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RoZWVyYXRoYXQyMDA4L2ZpbG1jaGFpbmV0aGVyZXVtIn0=