'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('../styles/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\datart\\Desktop\\nextProject\\components\\footer.js';

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('footer', { className: _styles.footerStyles, __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, 'Footer Test: ', children));
};