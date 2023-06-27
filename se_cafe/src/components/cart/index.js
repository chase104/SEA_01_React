import React, { useContext } from 'react'
import { PrimaryContext } from '../../contexts/PrimaryContext'
import './index.css'

const Cart = () => {

  const { cart } = useContext(PrimaryContext)
  // only continue if cart exists.
    const cartItemsJSX = cart?.items.map((quantityItem) => {
      return <div className="cart-item">
        <div>{quantityItem.item.emoji}</div>
        <div className="quantity-price">
          <div>{quantityItem.quantity}</div>
          <div>{quantityItem.item.price}</div>
        </div>
        
        <div>{quantityItem.item.name}</div>
        <div>total: ???</div>
      </div>
    })

  return (
    <div>{cart ? cartItemsJSX : "no cart!" }</div>
  )
}

export default Cart