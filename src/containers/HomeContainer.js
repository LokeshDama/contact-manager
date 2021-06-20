import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllProfiles } from '../store/actions/teamProfiles';
import UserProfiles from '../components/home/UserProfiles';

const HomeContainer = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.teamProfilesReducer.profiles)

  useEffect(() => {
    dispatch(fetchAllProfiles());
  }, []);

  return (
    <UserProfiles
      users={users} />
  )
}

// const mapStateToProps = (state) => {
//   const { teamProfilesReducer } = state;
//   return {
//     users: teamProfilesReducer.profiles
//   }
// }

// const mapDispatchToProps = {
//   fetchAllProfiles
// }

//export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default HomeContainer;
