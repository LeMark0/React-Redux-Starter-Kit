import { createAction } from 'redux-actions';
import actionTypes from 'redux/constants/ActionTypes';
import api from 'api/api.js';

export const setTest = createAction(actionTypes.App.setTest);

export const getLatestRatesRequest = createAction(actionTypes.App.async.getLatestRatesRequest);
export const getLatestRatesSuccess = createAction(actionTypes.App.async.getLatestRatesSuccess);
export const getLatestRatesFail = createAction(actionTypes.App.async.getLatestRatesFail);


export const getLatestRates = (state, action) => {
    return (dispatch) => {
        dispatch(getLatestRatesRequest());

        api.currency
            .latest()
            .then( response => {
                dispatch(getLatestRatesSuccess());

                console.log('Response: ', response);
            })
            .catch( error => {
                dispatch(getLatestRatesFail());

                console.log('Error: ', error);
            });

    }
};

