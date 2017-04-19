import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import CurrencyReducer from './CurrencyReducer';

export default combineReducers({
    appState: AppReducer,
    currencyState: CurrencyReducer
});