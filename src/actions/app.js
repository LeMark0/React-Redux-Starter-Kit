import { createAction } from 'redux-actions';
import actionTypes from 'constants/actionTypes';

export const setTest = createAction(actionTypes.app.setTest);
export default setTest;
