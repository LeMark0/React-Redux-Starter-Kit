import { handleActions } from 'redux-actions';
import ActionTypes from 'redux/constants/ActionTypes';

const initialState = {
    test: false
};

export default handleActions({
    [ActionTypes.App.setTest]: (state, action) => {
        return {...state, test: action.payload}
    }
}, initialState);