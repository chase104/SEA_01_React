import React, { useContext } from 'react'
import { primaryContext } from '../../contexts/PrimaryContext'

const Sidebar = () => {

    let { user, currentPage } = useContext(primaryContext)

  return (
    <div>
        <div>
            Current Page: {currentPage}
        </div>
        <div>
            User is: {user.name}
        </div>
    </div>
  )
}

export default Sidebar