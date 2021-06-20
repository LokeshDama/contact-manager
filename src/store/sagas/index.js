import { fork } from 'redux-saga/effects'

import contactsSaga from './contactsSaga';
import teamProfilesSaga from './teamProfilesSaga';

export default function* rootSaga() {
  yield fork(contactsSaga);
  yield fork(teamProfilesSaga);
}
