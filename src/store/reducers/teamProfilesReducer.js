const initialState = {
  profiles: [],
}

const teamProfilesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}

export default teamProfilesReducer;
