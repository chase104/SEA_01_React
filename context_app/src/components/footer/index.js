import React, { useContext } from 'react'
import { primaryContext } from '../../contexts/PrimaryContext'

const Footer = () => {

    let { pages } = useContext(primaryContext);
    
    // map through pages and display them

  return (
    <div>
        buttons? How many? Names?
    </div>
  )
}

export default Footer