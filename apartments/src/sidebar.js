import React from 'react'

const Sidebar = (props) => {
    let user = props.user;
  return (
    <div>Welcome user {user.name}</div>
  )
}

export default Sidebar