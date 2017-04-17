import immutable from 'seamless-immutable';
import statusList from 'constants/statusList';

export const prepareStateRequest = function(asyncState) {
    return immutable.merge(asyncState, {
        status: statusList.PENDING,
        needShowLoader: true,
        needShowError: false,
        needShowData: false,
        hasRequested: true,
    });
};
export const prepareStateSuccess = function(asyncState, data) {
    return immutable.merge(asyncState, {
        status: statusList.SUCCESS,
        data: data,
        error: null,
        needShowLoader: false,
        needShowError: false,
        needShowData: true,
        hasRequested: true,
    });
};
export const prepareStateFail = function(asyncState, error) {
    return immutable.merge(asyncState, {
        status: statusList.FAIL,
        error: error,
        needShowLoader: false,
        needShowError: true,
        needShowData: false,
        hasRequested: true,
    });
};


export class AsyncState {
    status = null;
    data = undefined;
    error = null;

    needShowLoader = false;
    needShowError = false;
    needShowData = false;

    hasRequested = false;
}

