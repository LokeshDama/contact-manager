import { call, put, takeLatest } from 'redux-saga/effects'

import { api } from '../../api/contacts'
import { TEAM_PROFILE_ACTIONS } from '../actions/actionTypes'
import { fetchAllProfilesSuccess } from '../actions/teamProfiles'

function* fetchAllTeamProfilesSaga() {
  try {
    const response = yield call(api.fetchAllProfiles)
    yield put(fetchAllProfilesSuccess(response.data))
  } catch (err) {

  }
}

export default function* teamProfilesSaga() {
  yield takeLatest(TEAM_PROFILE_ACTIONS.ON_FETCHING_PROFILES, fetchAllTeamProfilesSaga);
}
