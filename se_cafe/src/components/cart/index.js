import React, { useContext } from 'react'
import { PrimaryContext } from '../../contexts/PrimaryContext'
import './index.css'
import axios from 'axios'

const Cart = () => {

  const { cart, setCart } = useContext(PrimaryContext)


  const handlePlus = async (quantityItem) => {
    // want to go update the cart.
    let response = await axios({
      method: "PUT",
      url: "/update_cart",
      data: quantityItem.item
    })
    setCart(response.data)
  }
  // only continue if cart exists.
    const cartItemsJSX = cart?.items.map((quantityItem) => {
      return (
        <div key={quantityItem._id} className="one-line-grid">
          <div>{quantityItem.item.emoji}</div>
          <div>{quantityItem.item.name}</div>
          <div className="quantity">
            <div className="cart-button">-</div>
            <div>{quantityItem.quantity}</div>
            <div className="cart-button" onClick={() => handlePlus(quantityItem)}>+</div>
          </div>
          <div>{quantityItem.item.price}</div>
          <div>${quantityItem.totalPrice}</div>
        </div>
      )
   
    })

  return (
    <div>
        <div className="one-line-grid">
          <div></div>
          <div>name</div>
          <div>quantity</div>
          <div>price</div>
          <div>total price</div>
        </div>
        {cart ? cartItemsJSX : "no cart!" }
      <div style={{marginTop: "28px"}}>
        {/* only try to read .totalQuantity IF THERE IS A CART */}
        <div>Total items in cart: {cart?.totalQuantity}</div>
        <div>Total Price of EVERYTHING:  {cart?.totalCartPrice}</div>
      </div>
    </div>
  )
}

export default Cart