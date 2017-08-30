'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('./lib/reducers/index');

var _index2 = _interopRequireDefault(_index);

var _reduxLogger = require('redux-logger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger.createLogger)());

var exampleInitialState = {
  title: 'page1'
  // REDUCERS

};var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return (0, _redux.createStore)(_index2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(middleware));
};

// ACTIONS