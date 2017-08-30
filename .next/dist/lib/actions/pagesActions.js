"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPages = getPages;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPages() {
    return function (dispatch) {
        _axios2.default.get("/pages").then(function (response) {
            dispatch({ type: "GET_PAGES", payload: response.data });
        }).catch(function (err) {
            dispatch({ type: "GET_PAGES_REJECTED_ACTION", payload: err });
        });
    };
}