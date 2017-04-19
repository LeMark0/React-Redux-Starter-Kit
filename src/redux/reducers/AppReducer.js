import { handleActions } from 'redux-actions';
import immutable from 'seamless-immutable';
import ActionTypes from 'redux/constants/ActionTypes';

const initialState = immutable.from({
    test: false
});

export default handleActions({
    [ActionTypes.App.setTest]: (state, action) => immutable.set(state, 'test', action.payload),

}, initialState);