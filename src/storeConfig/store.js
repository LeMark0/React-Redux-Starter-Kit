import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from './middleware';
import rootReducer from '../reducers/index';

export default createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);
