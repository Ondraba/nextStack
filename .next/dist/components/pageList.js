
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _pagesActions = require("../lib/actions/pagesActions");

var _reactBootstrap = require("react-bootstrap");

var _nextReduxWrapper = require("next-redux-wrapper");

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _pageItem = require("./pageItem");

var _pageItem2 = _interopRequireDefault(_pageItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\datart\\Desktop\\nextProject\\components\\pageList.js";
exports.default = (0, _reactRedux.connect)(function (state) {
  return state.pages.pages;
})(function (_ref) {
  var title = _ref.title;

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, title), _react2.default.createElement(_pageItem2.default, { title: title, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
});