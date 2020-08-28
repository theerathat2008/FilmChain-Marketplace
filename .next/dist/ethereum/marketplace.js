'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Marketplace = require('./build/Marketplace.json');

var _Marketplace2 = _interopRequireDefault(_Marketplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Marketplace2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL21hcmtldHBsYWNlLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJNYXJrZXRwbGFjZSIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXdCLEFBQXhCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUMxQjtTQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNMLEtBQUssQUFBTCxNQUFXLHNCQUFZLEFBQXZCLEFBREssWUFFTCxBQUZLLEFBQVAsQUFJRDtBQUxEIiwiZmlsZSI6Im1hcmtldHBsYWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aGVlcmF0aGF0MjAwOC9maWxtY2hhaW5ldGhlcmV1bSJ9