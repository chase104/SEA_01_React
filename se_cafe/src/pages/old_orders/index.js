import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const OldOrders = () => {

    const [oldOrders, setOldOrders] = useState([])

    useEffect(() => {
  
        axios('/old_orders').then((response) => {
            console.log(response);
            setOldOrders(response.data)
        });


    }, [])

    console.log(oldOrders);


    let cartsJSX = oldOrders.map((oldCart, index) => {
        return (
            <div style={{marginBottom: "20px"}}>
                <div>Cart Number: {index+1}</div>
                <div>total items: {oldCart.totalCartPrice}</div>
                <div>total price: {oldCart.totalQuantity}</div>
            </div>
        )
    })
  return (
    <div>
        <h1>Old Orders</h1>
        <Link to="/">Go Home</Link>
        {cartsJSX}
    </div>
  )
}

export default OldOrders