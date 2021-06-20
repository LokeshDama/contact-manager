import { combineReducers } from 'redux';

import contactsReducer from './contactsReducer';
import teamProfilesReducer from './teamProfilesReducer';

const rootReducer = combineReducers({
  contactsReducer,
  teamProfilesReducer
})

export default rootReducer;
