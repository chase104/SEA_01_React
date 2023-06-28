import React from 'react'
import './index.css'
import Items from '../../components/items'
import Cart from '../../components/cart'
import Sidebar from '../../components/sidebar'

const HomePage = () => {
  return (
    <>
     <Sidebar />
     <div className="homepage">
        <Items />
        <Cart />
      </div>
    </>

  )
}

export default HomePage