import React, { useContext } from 'react'
import { primaryContext } from '../../contexts/PrimaryContext'

const UserImg = () => {
    const { user } = useContext(primaryContext)
  return (
    <div>
        <img src={user.img} />
    </div>
  )
}

export default UserImg