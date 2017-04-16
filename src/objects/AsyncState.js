import immutable from 'seamless-immutable';
import statusList from 'constants/statusList';

export const prepareStateRequest = function(asyncState) {
    return immutable.merge(asyncState, {
        status: statusList.PENDING
    });
};
export const prepareStateSuccess = function(asyncState, data) {
    return immutable.merge(asyncState, {
        status: statusList.SUCCESS,
        data: data,
        error: null,
    });
};
export const prepareStateFail = function(asyncState, error) {
    return immutable.merge(asyncState, {
        status: statusList.FAIL,
        error: error,
    });
};


export class AsyncState {
    constructor() {
        this.status = null;
        this.data = null;
        this.error = null;
    }
}

