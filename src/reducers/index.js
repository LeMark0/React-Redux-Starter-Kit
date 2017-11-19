import { combineReducers } from 'redux';

import app from './app';
import currency from './currency';

export default combineReducers({
  app,
  currency,
});
