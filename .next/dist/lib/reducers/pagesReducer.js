"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pagesReducer = pagesReducer;

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleInitialState = {
    title: 'test2'
};

function pagesReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pages: exampleInitialState
    };
    var action = arguments[1];

    switch (action.type) {

        case "GET_PAGES":
            return (0, _extends3.default)({}, state, { pages: [].concat((0, _toConsumableArray3.default)(action.payload)) });
            break;
    }

    return state;
}