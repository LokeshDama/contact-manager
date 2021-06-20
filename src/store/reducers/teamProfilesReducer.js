import { TEAM_PROFILE_ACTIONS } from "../actions/actionTypes";

const initialState = {
  profiles: []
}

const teamProfilesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TEAM_PROFILE_ACTIONS.ON_FETCHING_PROFILES_SUCCESS:
      return { ...state, profiles: payload.data }
    default:
      return state;
  }
}

export default teamProfilesReducer;
