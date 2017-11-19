import immutable from 'seamless-immutable';
import statusList from 'constants/statusList';

export function prepareStateRequest(asyncState) {
  return immutable.merge(asyncState, {
    status: statusList.PENDING,
    needShowLoader: true,
    needShowError: false,
    needShowData: false,
    hasRequested: true,
  });
}

export function prepareStateSuccess(asyncState, data) {
  return immutable.merge(asyncState, {
    status: statusList.SUCCESS,
    data,
    error: null,
    needShowLoader: false,
    needShowError: false,
    needShowData: true,
    hasRequested: true,
  });
}

export function prepareStateFail(asyncState, error) {
  return immutable.merge(asyncState, {
    status: statusList.FAIL,
    error,
    needShowLoader: false,
    needShowError: true,
    needShowData: false,
    hasRequested: true,
  });
}

export class AsyncState {
  status = null;
  data = undefined;
  error = null;

  needShowLoader = false;
  needShowError = false;
  needShowData = false;

  hasRequested = false;
}

