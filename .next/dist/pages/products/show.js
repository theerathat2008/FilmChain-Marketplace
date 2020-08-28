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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _marketplace = require('../../ethereum/marketplace');

var _marketplace2 = _interopRequireDefault(_marketplace);

var _OfferForm = require('../../components/OfferForm');

var _OfferForm2 = _interopRequireDefault(_OfferForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/theerathat2008/filmchainethereum/pages/products/show.js?entry';


var ProductShow = function (_Component) {
  (0, _inherits3.default)(ProductShow, _Component);

  function ProductShow() {
    (0, _classCallCheck3.default)(this, ProductShow);

    return (0, _possibleConstructorReturn3.default)(this, (ProductShow.__proto__ || (0, _getPrototypeOf2.default)(ProductShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProductShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          manager = _props.manager,
          listedPrice = _props.listedPrice,
          productDescription = _props.productDescription,
          productCondition = _props.productCondition,
          stakeholderType = _props.stakeholderType,
          fixedAmountToRecoup = _props.fixedAmountToRecoup,
          amountRecouped = _props.amountRecouped;

      var productCond = void 0;

      if (productCondition == '0') {
        productCond = 'Available';
      } else {
        productCond = 'Not Available';
      }

      var items = [{
        header: productDescription,
        meta: 'Product Description',
        description: 'The details of the product',
        style: { overflowWrap: 'break-word' }
      }, {
        header: productCond,
        meta: 'Product Condition',
        description: 'Indicates the availability of this stakeholder for sales',
        style: { overflowWrap: 'break-word' }
      }, {
        header: stakeholderType,
        meta: 'Stakeholder Type',
        description: 'The type listed of the stakeholder type of this product',
        style: { overflowWrap: 'break-word' }
      }, {
        header: fixedAmountToRecoup,
        meta: 'Fixed Amount to Recoup ($)',
        description: 'The amount of money you will receive in the future if you own this stakeholder',
        style: { overflowWrap: 'break-word' }
      }, {
        header: amountRecouped,
        meta: 'Amount Recouped ($)',
        description: 'The amount of money the owner of this stakeholder already recouped from this equity',
        style: { overflowWrap: 'break-word' }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      });
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var productDescription = this.props.productDescription;

      return _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'plug', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, productDescription));
    }
  }, {
    key: 'renderDescription',
    value: function renderDescription() {
      var _props2 = this.props,
          productDescription = _props2.productDescription,
          productCondition = _props2.productCondition,
          stakeholderType = _props2.stakeholderType,
          fixedAmountToRecoup = _props2.fixedAmountToRecoup,
          amountRecouped = _props2.amountRecouped,
          percentage = _props2.percentage,
          movieAddress = _props2.movieAddress,
          groupAddress = _props2.groupAddress;

      var productCond = void 0;

      if (productCondition == '0') {
        productCond = 'Available';
      } else {
        productCond = 'Not Available';
      }

      var typeStakeholder = void 0;

      if (stakeholderType == '0') {
        typeStakeholder = 'Gross Percentage';
      } else if (stakeholderType == '1') {
        typeStakeholder = 'Net Percentage';
      } else if (stakeholderType == '2') {
        typeStakeholder = 'Capped Gross Percentage';
      } else if (stakeholderType == '3') {
        typeStakeholder = 'Capped Net Percentage';
      } else if (stakeholderType == '4') {
        typeStakeholder = 'Profit Participation';
      } else {
        typeStakeholder = 'Expense';
      }

      return _react2.default.createElement(_react2.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_semanticUiReact.Divider, { horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'tag', __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), 'Description')), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.'), _react2.default.createElement(_semanticUiReact.Divider, { horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'bar chart', __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), 'Specifications')), _react2.default.createElement(_semanticUiReact.Table, { definition: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, 'Product Condition'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, productCond)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, 'Stakeholder Type'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, typeStakeholder)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, 'Fixed Amount To Recoup ($)'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, fixedAmountToRecoup)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, 'Amount Recouped ($)'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, amountRecouped)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, 'Percentage'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, percentage)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, 'Group Address'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, groupAddress)), _react2.default.createElement(_semanticUiReact.Table.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, 'Movie Address'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, movieAddress)))));
    }
  }, {
    key: 'renderPrice',
    value: function renderPrice() {
      var _props3 = this.props,
          listedPrice = _props3.listedPrice,
          productCondition = _props3.productCondition;

      var items = [{
        header: listedPrice,
        meta: 'Product Price (ether)',
        description: 'To buy this product you can buy now from the listed price or make an offer to the product owner',
        style: { overflowWrap: 'break-word' }

      }];

      if (productCondition == '0') {
        return _react2.default.createElement(_semanticUiReact.Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }, listedPrice, ' ether'), _react2.default.createElement(_semanticUiReact.Card.Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, 'Product Price (ether)'), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          }
        }, 'To buy this product you can buy now from the listed price or make an offer to the product owner')), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        }, _react2.default.createElement(_routes.Link, { route: '/products/' + this.props.address + '/checkout/buytermconds', __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { fluid: 'true', primary: true, style: { marginTop: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          }
        }, 'Buy Now')))));
      } else {
        return _react2.default.createElement(_semanticUiReact.Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          }
        }, 'Unavailable'), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          }
        }, 'This stakeholder is currently unavailable for sales')));
      }
    }
  }, {
    key: 'renderOffer',
    value: function renderOffer() {
      var productCondition = this.props.productCondition;

      if (productCondition == '0') {
        return _react2.default.createElement(_semanticUiReact.Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        }, 'Best Offer:')), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          }
        }, _react2.default.createElement(_routes.Link, { route: '/products/' + this.props.address + '/offers/new', __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { fluid: 'true', primary: true, style: { marginTop: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          }
        }, 'Make an Offer'))), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          }
        }), _react2.default.createElement(_routes.Link, { route: '/products/' + this.props.address + '/offers', __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { fluid: 'true', primary: true, style: { marginTop: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }, 'View Offers')))));
      } else {
        return _react2.default.createElement(_semanticUiReact.Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          }
        }, 'Unavailable'), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          }
        }, 'This stakeholder is currently not available to make offers')));
      }
    }
  }, {
    key: 'renderSellerInfo',
    value: function renderSellerInfo() {
      var manager = this.props.manager;

      return _react2.default.createElement(_semanticUiReact.Card, { style: { overflowWrap: 'break-word' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, 'Seller Information'), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }, 'Address of seller'), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, manager)));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', block: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, 'Project Details'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, this.renderHeader(), this.renderDescription()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, this.renderPrice(), this.renderOffer(), this.renderSellerInfo())));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var marketplace, productInfo;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                marketplace = (0, _marketplace2.default)(props.query.address);
                _context.next = 3;
                return marketplace.methods.getProductInfo().call();

              case 3:
                productInfo = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  manager: productInfo[0],
                  listedPrice: productInfo[1],
                  productDescription: productInfo[2],
                  productCondition: productInfo[3],
                  purchased: productInfo[4],
                  newProductOwner: productInfo[5],
                  stakeholderType: productInfo[6],
                  fixedAmountToRecoup: productInfo[7],
                  amountRecouped: productInfo[8],
                  percentage: productInfo[9],
                  movieAddress: productInfo[10],
                  groupAddress: productInfo[11]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ProductShow;
}(_react.Component);

exports.default = ProductShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RzL3Nob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkRpdmlkZXIiLCJIZWFkZXIiLCJJY29uIiwiVGFibGUiLCJMYXlvdXQiLCJNYXJrZXRwbGFjZSIsIk9mZmVyRm9ybSIsIkxpbmsiLCJQcm9kdWN0U2hvdyIsInByb3BzIiwibWFuYWdlciIsImxpc3RlZFByaWNlIiwicHJvZHVjdERlc2NyaXB0aW9uIiwicHJvZHVjdENvbmRpdGlvbiIsInN0YWtlaG9sZGVyVHlwZSIsImZpeGVkQW1vdW50VG9SZWNvdXAiLCJhbW91bnRSZWNvdXBlZCIsInByb2R1Y3RDb25kIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInBlcmNlbnRhZ2UiLCJtb3ZpZUFkZHJlc3MiLCJncm91cEFkZHJlc3MiLCJ0eXBlU3Rha2Vob2xkZXIiLCJhZGRyZXNzIiwibWFyZ2luVG9wIiwicmVuZGVySGVhZGVyIiwicmVuZGVyRGVzY3JpcHRpb24iLCJyZW5kZXJQcmljZSIsInJlbmRlck9mZmVyIiwicmVuZGVyU2VsbGVySW5mbyIsIm1hcmtldHBsYWNlIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0UHJvZHVjdEluZm8iLCJjYWxsIiwicHJvZHVjdEluZm8iLCJwdXJjaGFzZWQiLCJuZXdQcm9kdWN0T3duZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBUSxBQUFTLEFBQVEsQUFBTTs7QUFDcEQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7O2tDQXlCVTttQkFXUixLQVhRLEFBV0g7VUFYRyxBQUlWLGlC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QUFJRyxBQUFLLEFBQ0wsb0JBaEJULEFBQ0UsQUFJRSxBQU1FLEFBS0csQUFBSyxBQVFmOzs7OzsyR0FqVTRCLEE7Ozs7O21CQUNyQjtBLDhCQUFjLDJCQUFZLE1BQUEsQUFBTSxNQUFsQixBQUF3QixBOzt1QkFFbEIsWUFBQSxBQUFZLFFBQVosQUFBb0IsaUJBQXBCLEFBQXFDLEE7O21CQUF6RDtBOzsyQkFLSyxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjsyQkFBUyxZQUZKLEFBRUksQUFBWSxBQUNyQjsrQkFBYSxZQUhSLEFBR1EsQUFBWSxBQUN6QjtzQ0FBb0IsWUFKZixBQUllLEFBQVksQUFDaEM7b0NBQWtCLFlBTGIsQUFLYSxBQUFZLEFBQzlCOzZCQUFXLFlBTk4sQUFNTSxBQUFZLEFBQ3ZCO21DQUFpQixZQVBaLEFBT1ksQUFBWSxBQUM3QjttQ0FBaUIsWUFSWixBQVFZLEFBQVksQUFDN0I7dUNBQXFCLFlBVGhCLEFBU2dCLEFBQVksQUFDakM7a0NBQWdCLFlBVlgsQUFVVyxBQUFZLEFBQzVCOzhCQUFZLFlBWFAsQUFXTyxBQUFZLEFBQ3hCO2dDQUFjLFlBWlQsQUFZUyxBQUFZLEFBQzFCO2dDQUFjLFlBYlQsQUFhUyxBQUFZLEE7QUFickIsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVRvQixBLEFBcVUxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aGVlcmF0aGF0MjAwOC9maWxtY2hhaW5ldGhlcmV1bSJ9