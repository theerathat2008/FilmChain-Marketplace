'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _newproduct = require('../ethereum/newproduct');

var _newproduct2 = _interopRequireDefault(_newproduct);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _marketplace = require('../ethereum/marketplace');

var _marketplace2 = _interopRequireDefault(_marketplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/theerathat2008/filmchainethereum/pages/index.js?entry';


var MarketplaceIndex = function (_Component) {
  (0, _inherits3.default)(MarketplaceIndex, _Component);

  function MarketplaceIndex() {
    (0, _classCallCheck3.default)(this, MarketplaceIndex);

    return (0, _possibleConstructorReturn3.default)(this, (MarketplaceIndex.__proto__ || (0, _getPrototypeOf2.default)(MarketplaceIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(MarketplaceIndex, [{
    key: 'renderBigSearch',
    value: function renderBigSearch() {
      return _react2.default.createElement(_semanticUiReact.Segment, { placeholder: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Start Trading Your Projects'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_semanticUiReact.Search, { placeholder: 'Search...', floated: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }))));
    }
  }, {
    key: 'renderProducts',
    value: function renderProducts() {
      var items = this.props.products.map(function (address) {
        /*const marketplace = Marketplace(address);
         const productInfo = await marketplace.methods.getProductInfo().call();
        const description = productInfo[2];
         console.log(description);*/

        return {

          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/products/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, 'View Product')),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, this.renderBigSearch(), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'List of Available Projects'), _react2.default.createElement(_routes.Link, { route: '/products/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right',
        content: 'Create New Project',
        icon: 'add circle',
        secondary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }))), this.renderProducts()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var products;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _newproduct2.default.methods.getDeployedProducts().call();

              case 2:
                products = _context.sent;
                return _context.abrupt('return', {
                  products: products
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MarketplaceIndex;
}(_react.Component);

exports.default = MarketplaceIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIlNlZ21lbnQiLCJIZWFkZXIiLCJTZWFyY2giLCJHcmlkIiwibmV3cHJvZHVjdCIsIkxheW91dCIsIkxpbmsiLCJNYXJrZXRwbGFjZSIsIk1hcmtldHBsYWNlSW5kZXgiLCJpdGVtcyIsInByb3BzIiwicHJvZHVjdHMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckJpZ1NlYXJjaCIsInJlbmRlclByb2R1Y3RzIiwibWV0aG9kcyIsImdldERlcGxveWVkUHJvZHVjdHMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVMsQUFBUSxBQUFROztBQUNoRCxBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBaUI7Ozs7Ozs7OztJLEFBRWxCOzs7Ozs7Ozs7OztzQ0FTYyxBQUNoQjs2QkFDRSxBQUFDLDBDQUFRLGFBQVQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxXQUFoQixBQUEwQjtvQkFBMUI7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHQSxnREFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx1Q0FDRSxBQUFDLHNCQUFELEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFERixBQUNFLEFBR0E7QUFIQTswQkFHQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxhQUFSLEFBQW9CLGFBQVksU0FBaEMsQUFBd0M7b0JBQXhDO3NCQVZSLEFBQ0UsQUFJRSxBQUlFLEFBQ0UsQUFNVDtBQU5TOzs7OztxQ0FVTyxBQUNmO1VBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQWEsQUFDbEQ7QUFPQTs7Ozs7OztrQkFBTyxBQUVHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyxzQkFBTixBQUEwQjt3QkFBMUI7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBTEMsQUFJSCxBQUNFLEFBR0o7aUJBUkYsQUFBTyxBQVFFLEFBRVY7QUFWUSxBQUVMO0FBVkosQUFBYyxBQW9CZCxPQXBCYzs7MkNBb0JQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUVHO0FBRkg7QUFBQSxPQUFBLE9BQUEsQUFFRyxBQUFLLEFBQ04sbUNBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLCtDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsQUFDZDtpQkFERixBQUNVLEFBQ1I7Y0FGRixBQUVPLEFBQ0w7bUJBSEY7O29CQUFBO3NCQUxOLEFBR0UsQUFDRSxBQUNFLEFBT0g7QUFQRztpQkFUVixBQUNFLEFBR0UsQUFZRyxBQUFLLEFBSWI7Ozs7Ozs7Ozs7Ozt1QkF6RXdCLHFCQUFBLEFBQVcsUUFBWCxBQUFtQixzQkFBbkIsQSxBQUF5Qzs7bUJBQTFEO0E7OzRCQUVDLEFBQ0ssQTtBQURMLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMeUIsQSxBQThFL0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RoZWVyYXRoYXQyMDA4L2ZpbG1jaGFpbmV0aGVyZXVtIn0=