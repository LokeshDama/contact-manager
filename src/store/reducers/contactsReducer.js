import { CONTACT_ACTIONS } from "../actions/actionTypes";

const initialState = {
  loading: false,
  contacts: [],
  error: null,
  success: null,
  singleContact: null
}

const contactsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONTACT_ACTIONS.ON_FETCHING_CONTACTS:
      return { ...state, loading: true };

    case CONTACT_ACTIONS.ON_FETCHING_CONTACTS_SUCCESS:
      return { ...state, loading: false, contacts: payload };

    case CONTACT_ACTIONS.ON_FETCHING_CONTACTS_FAILURE:
      return { ...state, loading: false, error: 'Failed to fetch contacts.' };

    case CONTACT_ACTIONS.ON_CREATE_CONTACT:
      return { ...state, success: null, error: null }

    case CONTACT_ACTIONS.ON_CREATE_CONTACT_SUCCESS:
      return { ...state, success: 'Successfully added new contact.' }

    case CONTACT_ACTIONS.ON_CREATE_CONTACT_FAILURE:
    case CONTACT_ACTIONS.ON_UPDATE_CONTACT_FAILURE:
      return { ...state, error: 'Failed to save contact.' };

    case CONTACT_ACTIONS.ON_DELETE_CONTACT_SUCCESS:
      return { ...state, contacts: state.contacts.filter((contact) => contact.id !== payload) };

    case CONTACT_ACTIONS.ON_CHANGE_STATE:
      const { field, value } = payload;
      return { ...state, [field]: value };

    case CONTACT_ACTIONS.ON_UPDATE_CONTACT_SUCCESS:
      return { ...state, success: 'Successfully updated contact.' }

    case CONTACT_ACTIONS.ON_FETCH_SINGLE_CONTACT:
      return { ...state, singleContact: null };

    case CONTACT_ACTIONS.ON_FETCH_SINGLE_CONTACT_SUCCESS:
      return { ...state, singleContact: payload };

    default:
      return state;
  }
}

export default contactsReducer;
