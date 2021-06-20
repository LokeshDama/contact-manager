import { TEAM_PROFILE_ACTIONS } from './actionTypes'

const fetchAllProfiles = () => {
  return {
    type: TEAM_PROFILE_ACTIONS.ON_FETCHING_PROFILES
  }
}

const fetchAllProfilesSuccess = (profiles) => {
  return {
    type: TEAM_PROFILE_ACTIONS.ON_FETCHING_PROFILES_SUCCESS,
    payload: profiles
  }
}

export {
  fetchAllProfiles,
  fetchAllProfilesSuccess
}
