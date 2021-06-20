import React from 'react'
import './UserDetail.css';

const UserDetail = ({ first_name, last_name, email, avatar }) => {
  return (
    <div className="userDetail">
      <p><strong>{first_name} {last_name}</strong></p>
      <p>{email}</p>
      <img src={avatar} />
    </div>
  )
}

export {
  UserDetail
}
