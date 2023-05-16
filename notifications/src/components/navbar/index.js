import React, { useContext } from 'react'
import './index.css'
import { MyFirstContext } from '../../contexts'
import Btn from '../btn'

const Navbar = () => {
  const { user, pages } = useContext(MyFirstContext)

  const pagesJSX = pages.map((pageString) => {
    return <Btn pageString={pageString} />
  });

  return (
    <div className="navbar-container">
      { pagesJSX }
      <img src={user.imageUrl} />
    </div>
  )
}

export default Navbar