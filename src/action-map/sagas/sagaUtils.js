import {fork, call, take, put} from 'redux-saga/effects';

export const makeApiSaga = (actionType, fn) => {
  function* run(action) {
    try {
      const payload = yield call(fn, action);
      yield put({type: `${actionType}_SUCCESS`, payload});
    } catch (e) {
      yield put({type: `${actionType}_FAIL`, payload: {...e}});
    }
  }

  function* apiSaga() {
    while (true) {
      const action = yield take(actionType);
      yield fork(run, action);
    }
  }

  Object.defaultProperty(apiSaga, 'name', {
    value: `apiSaga__${actionType}`,
  });

  return apiSaga;
}
