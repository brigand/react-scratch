import {fork} from 'redux-saga/effects';
import {makeApiSaga} from './sagaUtils';
import {updateFoo} from '../api/fooApi';

export default function* fooSaga() {
  yield fork(makeApiSaga('FOO_INCR', updateFoo));
}
