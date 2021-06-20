import { call, put, takeLatest } from 'redux-saga/effects'

import { api } from '../../api/contacts'
import { CONTACTS_URL } from '../../constants/navigation'
import { CONTACT_ACTIONS } from '../actions/actionTypes'
import { fetchAllContactsSuccess, fetchAllContactsFailure, createContactSuccess, createContactFailure, deleteContact, deleteContactSuccess, updateContact, updateContactSuccess, fetchSingleContactSuccess } from '../actions/contacts'
import history from '../../history'

function* fetchAllContactsSaga() {
  try {
    const response = yield call(api.fetchAllContacts)
    yield put(fetchAllContactsSuccess(response.data))
  } catch (err) {
    yield put(fetchAllContactsFailure(err))
  }
}

function* createContactSaga(action) {
  try {
    const response = yield call(api.createContact, action.payload)
    yield put(createContactSuccess(response.data));
    history.push(CONTACTS_URL);
  } catch (err) {
    yield put(createContactFailure(err))
  }
}

function* deleteContactSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.deleteContact, id)
    yield put(deleteContactSuccess(id));
  } catch (err) {
    yield put({})
  }
}

function* updateContactSaga(action) {
  try {
    const { id, ...restProps } = action.payload;
    const response = yield call(api.updateContact, id, restProps)
    yield put(updateContactSuccess(response.data));
    history.push(CONTACTS_URL);
  } catch (err) {

  }
}

function* fetchSingleContactSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.fetchSingleContact, id)
    yield put(fetchSingleContactSuccess(response.data));
  } catch (err) {
    yield put({})
  }
}

export default function* contactsSaga() {
  yield takeLatest(CONTACT_ACTIONS.ON_FETCHING_CONTACTS, fetchAllContactsSaga);
  yield takeLatest(CONTACT_ACTIONS.ON_CREATE_CONTACT, createContactSaga);
  yield takeLatest(CONTACT_ACTIONS.ON_DELETE_CONTACT, deleteContactSaga);
  yield takeLatest(CONTACT_ACTIONS.ON_UPDATE_CONTACT, updateContactSaga);
  yield takeLatest(CONTACT_ACTIONS.ON_FETCH_SINGLE_CONTACT, fetchSingleContactSaga);
}
