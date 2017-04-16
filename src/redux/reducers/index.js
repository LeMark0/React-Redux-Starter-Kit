import { combineReducers } from 'redux';

import AppReducer from './AppReducer';

export default combineReducers({
    appState: AppReducer
});