"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _pagesReducer = require('./pagesReducer');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleInitialState = {
  title: 'test'
};

exports.default = (0, _redux.combineReducers)({
  pages: _pagesReducer.pagesReducer
});