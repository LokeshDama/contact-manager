import { fork } from 'redux-saga/effects'

import contactsSaga from './contactsSaga';

export default function* rootSaga() {
  yield fork(contactsSaga);
}
