"use strict";
import {combineReducers} from 'redux';

import {pagesReducer} from './pagesReducer';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  title: 'test'
}

export default combineReducers({
  pages: pagesReducer
})


