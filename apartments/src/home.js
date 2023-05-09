import React from 'react'

const Home = (props) => {
    let users = props.user;
  return (
    <div>
        <Sidebar user={user}/>
    </div>
  )
}

export default Home