import { UserDetail } from './UserDetail';
import './UserProfiles.css'

const UserProfiles = ({ users }) => {
  return (
    <div className="main">
      <h2>
        Users List
      </h2>
      <div className='usersList'>
        {users && users.map((user, index) => <UserDetail key={index} {...user} />)}
      </div>
    </div>
  )
}

export default UserProfiles;
