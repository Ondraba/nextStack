import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from  './lib/reducers/index';

import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk, createLogger());

const exampleInitialState = {
  title: 'page1'
}
// REDUCERS

export const initStore = (initialState = []) => {
  return createStore(reducers, initialState, composeWithDevTools(middleware))
}

// ACTIONS