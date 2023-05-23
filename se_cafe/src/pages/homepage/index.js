import React from 'react'
import './index.css'
import Items from '../../components/items'
import Cart from '../../components/cart'

const HomePage = () => {
  return (
    <div className="homepage">
      {/* display items */}
      <Items />
      {/* cart */}
      <Cart />
    </div>
  )
}

export default HomePage