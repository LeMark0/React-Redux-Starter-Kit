import { handleActions } from 'redux-actions';
import immutable from 'seamless-immutable';
import ActionTypes from 'redux/constants/ActionTypes';
import { AsyncState, prepareStateRequest, prepareStateSuccess, prepareStateFail } from 'objects/AsyncState.js';

const initialState = immutable.from({
    async: {
        getLatestRates: new AsyncState()
    }
});

export default handleActions({
    [ActionTypes.Currency.async.getLatestRatesRequest]: state => immutable.merge(state, {
        async: {
            getLatestRates: prepareStateRequest(state.async.getLatestRates)
        }
    }),
    [ActionTypes.Currency.async.getLatestRatesSuccess]: (state, action) => immutable.merge(state, {
        async: {
            getLatestRates: prepareStateSuccess(state.async.getLatestRates, action.payload)
        }
    }),
    [ActionTypes.Currency.async.getLatestRatesFail]: (state, action) => immutable.merge(state, {
        async: {
            getLatestRates: prepareStateFail(state.async.getLatestRates, action.payload)
        }
    }),

}, initialState);