import {handleActions} from 'redux-actions';
import immutable from 'seamless-immutable';
import actionTypes from 'constants/actionTypes';

const initialState = immutable.from({
  test: false
});

export default handleActions({
  [actionTypes.app.setTest]: (state, action) => immutable.set(state, 'test', action.payload),

}, initialState);