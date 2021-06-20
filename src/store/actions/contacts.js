import { CONTACT_ACTIONS } from './actionTypes'

const fetchAllContacts = () => {
  return {
    type: CONTACT_ACTIONS.ON_FETCHING_CONTACTS
  }
}

const fetchAllContactsSuccess = (contacts) => {
  return {
    type: CONTACT_ACTIONS.ON_FETCHING_CONTACTS_SUCCESS,
    payload: contacts
  }
}

const fetchAllContactsFailure = (error) => {
  return {
    type: CONTACT_ACTIONS.ON_FETCHING_CONTACTS_FAILURE,
    payload: error
  }
}

const createContact = (contact) => {
  return {
    type: CONTACT_ACTIONS.ON_CREATE_CONTACT,
    payload: contact
  }
}

const createContactSuccess = (contact) => {
  return {
    type: CONTACT_ACTIONS.ON_CREATE_CONTACT_SUCCESS,
    payload: contact
  }
}

const createContactFailure = (error) => {
  return {
    type: CONTACT_ACTIONS.ON_CREATE_CONTACT_FAILURE,
    payload: error
  }
}

const updateContact = (contact) => {
  return {
    type: CONTACT_ACTIONS.ON_UPDATE_CONTACT,
    payload: contact
  }
}

const updateContactSuccess = (contact) => {
  return {
    type: CONTACT_ACTIONS.ON_UPDATE_CONTACT_SUCCESS,
    payload: contact
  }
}

const deleteContact = (id) => {
  return {
    type: CONTACT_ACTIONS.ON_DELETE_CONTACT,
    payload: id
  }
}

const deleteContactSuccess = (data) => {
  return {
    type: CONTACT_ACTIONS.ON_DELETE_CONTACT_SUCCESS,
    payload: data
  }
}

const fetchSingleContact = (contactId) => {
  return {
    type: CONTACT_ACTIONS.ON_FETCH_SINGLE_CONTACT,
    payload: contactId
  }
}

const fetchSingleContactSuccess = (contact) => {
  return {
    type: CONTACT_ACTIONS.ON_FETCH_SINGLE_CONTACT_SUCCESS,
    payload: contact
  }
}

const changeContactState = (field, value) => {
  return {
    type: CONTACT_ACTIONS.ON_CHANGE_STATE,
    payload: { field, value }
  }
}

export {
  fetchAllContacts,
  fetchAllContactsSuccess,
  fetchAllContactsFailure,

  createContact,
  createContactSuccess,
  createContactFailure,

  updateContact,
  updateContactSuccess,

  deleteContact,
  deleteContactSuccess,

  fetchSingleContact,
  fetchSingleContactSuccess,

  changeContactState,
}
