'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/theerathat2008/filmchainethereum/components/Header.js';

exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_semanticUiReact.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'FilmChain Marketplace'))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_semanticUiReact.Input, { className: 'icon', icon: 'search', placeholder: 'Search...', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Home')), _react2.default.createElement('a', { href: 'https://www.imdb.com/news/movie', target: '_blank', className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'News'), _react2.default.createElement(_semanticUiReact.Dropdown, { item: true, text: 'About', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_routes.Link, { route: '/how-it-works', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'How it works?')), _react2.default.createElement(_routes.Link, { route: '/reviews', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'Reviews')), _react2.default.createElement(_routes.Link, { route: '/articles', __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, 'FAQ')))), _react2.default.createElement(_semanticUiReact.Dropdown, { item: true, text: 'Contact Us', __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Item, { color: 'facebook', __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'medium', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), _react2.default.createElement('a', { href: 'https://medium.com/@BigCouch', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, 'Medium')), _react2.default.createElement(_semanticUiReact.Dropdown.Item, { color: 'twitter', __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'twitter', __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }), _react2.default.createElement('a', { href: 'https://twitter.com/bigcouchfilms', target: '_blank', __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, 'Twitter')), _react2.default.createElement(_semanticUiReact.Dropdown.Item, { color: 'mail', __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'mail', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), _react2.default.createElement(_routes.Link, { route: '/contact-us', __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, 'E-mail')))), _react2.default.createElement(_semanticUiReact.Dropdown, { item: true, text: 'Account', __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement(_semanticUiReact.Dropdown.Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement(_routes.Link, { route: '/user/show', __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, 'View Your Account')), _react2.default.createElement(_routes.Link, { route: '/reviews', __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, 'Settings')), _react2.default.createElement(_routes.Link, { route: '/user/signup', __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, 'Sign Up')), _react2.default.createElement(_routes.Link, { route: '/user/login', __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, 'Login')), _react2.default.createElement(_semanticUiReact.Dropdown.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, 'Logout'))), _react2.default.createElement(_routes.Link, { route: '/products/new', __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, _react2.default.createElement('a', { className: 'item', color: 'red', __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, 'Sell'))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkRyb3Bkb3duIiwiSW5wdXQiLCJJY29uIiwiQnV0dG9uIiwiSGVhZGVyIiwiTGluayIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFVLEFBQU8sQUFBTSxBQUFROztBQUM5QyxBQUFTLEFBQVksQUFFckI7Ozs7OztrQkFBZSxZQUFNLEFBQ25CO3lCQUNFLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFhO2dCQUExQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBLEtBSE4sQUFDRSxBQUNFLEFBQ0UsQUFHSiw0Q0FBQyxjQUFELHNCQUFBLEFBQU07O2dCQUFOO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsd0NBQU0sV0FBUCxBQUFpQixRQUFPLE1BQXhCLEFBQTZCLFVBQVMsYUFBdEMsQUFBa0Q7Z0JBQWxEO2tCQVBKLEFBTUUsQUFDRSxBQUdGO0FBSEU7dUJBR0QsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFLQSwwQkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLG1DQUFrQyxRQUExQyxBQUFpRCxVQUFTLFdBQTFELEFBQW9FO2dCQUFwRTtrQkFBQTtBQUFBO0tBUEosQUFPSSxBQUtGLHlCQUFBLEFBQUMsMkNBQVMsTUFBVixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRyxjQUFELDBCQUFBLEFBQVU7O2dCQUFWO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFJRixtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQTtBQUFBO0tBUEosQUFNRSxBQUNFLEFBSUYsNkJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQXpCUixBQVlFLEFBQ0UsQUFXRSxBQUNFLEFBT04sMkJBQUEsQUFBQywyQ0FBUyxNQUFWLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQsMEJBQUEsQUFBVTs7Z0JBQVY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRCwwQkFBQSxBQUFVLFFBQUssT0FBZixBQUFxQjtnQkFBckI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO2dCQUFYO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUEsT0FBRyxNQUFILEFBQVEsZ0NBQStCLFFBQXZDLEFBQThDO2dCQUE5QztrQkFBQTtBQUFBO0tBSEosQUFDRSxBQUVFLEFBSUYsNEJBQUMsY0FBRCwwQkFBQSxBQUFVLFFBQUssT0FBZixBQUFxQjtnQkFBckI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO2dCQUFYO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUEsT0FBRyxNQUFILEFBQVEscUNBQW9DLFFBQTVDLEFBQW1EO2dCQUFuRDtrQkFBQTtBQUFBO0tBVEosQUFPRSxBQUVFLEFBRUYsNkJBQUMsY0FBRCwwQkFBQSxBQUFVLFFBQUssT0FBZixBQUFxQjtnQkFBckI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXO2dCQUFYO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBO0FBQUE7S0E5Q1IsQUFnQ0UsQUFDRSxBQVdFLEFBRUUsQUFPTiw4QkFBQSxBQUFDLDJDQUFTLE1BQVYsTUFBZSxNQUFmLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0csY0FBRCwwQkFBQSxBQUFVOztnQkFBVjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBSUYsdUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQVBKLEFBTUUsQUFDRSxBQUlGLDhCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FaSixBQVdFLEFBQ0UsQUFJRiw2QkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQTtBQUFBO0tBakJKLEFBZ0JFLEFBQ0UsQUFJRiwyQkFBQyxjQUFELDBCQUFBLEFBQVU7O2dCQUFWO2tCQUFBO0FBQUE7QUFBQSxLQTNFTixBQXFERSxBQUNFLEFBcUJFLEFBS0osNkJBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxPQUFwQixBQUEwQjtnQkFBMUI7a0JBQUE7QUFBQTtLQTVGUixBQUNFLEFBVUUsQUFnRkUsQUFDRSxBQU9UO0FBcEdEIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdGhlZXJhdGhhdDIwMDgvZmlsbWNoYWluZXRoZXJldW0ifQ==