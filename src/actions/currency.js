import { createAction } from 'redux-actions';
import actionTypes from 'constants/actionTypes';
import api from 'api/api';

export const getLatestRatesRequest = createAction(actionTypes.currency.async.getLatestRatesRequest);
export const getLatestRatesSuccess = createAction(actionTypes.currency.async.getLatestRatesSuccess);
export const getLatestRatesFail = createAction(actionTypes.currency.async.getLatestRatesFail);

export const getLatestRates = (params) => async (dispatch) => {
  dispatch(getLatestRatesRequest());

  try {
    const response = await api('currency.latest', params);
    dispatch(getLatestRatesSuccess(response.data));
  } catch (error) {
    dispatch(getLatestRatesFail(error));
  }
};
