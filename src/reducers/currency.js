import {handleActions} from 'redux-actions';
import immutable from 'seamless-immutable';
import actionTypes from 'constants/actionTypes';
import {AsyncState, prepareStateRequest, prepareStateSuccess, prepareStateFail} from 'objects/AsyncState.js';

const initialState = immutable.from({
  async: {
    getLatestRates: new AsyncState()
  }
});

export default handleActions({
  [actionTypes.currency.async.getLatestRatesRequest]: state => immutable.merge(state, {
    async: {
      getLatestRates: prepareStateRequest(state.async.getLatestRates)
    }
  }),
  [actionTypes.currency.async.getLatestRatesSuccess]: (state, action) => immutable.merge(state, {
    async: {
      getLatestRates: prepareStateSuccess(state.async.getLatestRates, action.payload)
    }
  }),
  [actionTypes.currency.async.getLatestRatesFail]: (state, action) => immutable.merge(state, {
    async: {
      getLatestRates: prepareStateFail(state.async.getLatestRates, action.payload)
    }
  }),

}, initialState);