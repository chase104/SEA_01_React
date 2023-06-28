import React, { useContext } from 'react'
import './index.css'
import { PrimaryContext } from '../../contexts/PrimaryContext'
import axios from 'axios';

const Items = () => {
    // what do we need from the context?
    // items, active category
    const { items, activeCategory, setCart } = useContext(PrimaryContext);
    // we need an array of divs ONLY that match the category
    // we can use the .filter method

    const matchingItems = items.filter((eachItem) => {
        // activeCategory = "sandwiches"
        // {} with .category string value
    
        let boolean =  eachItem.category.name === activeCategory;

        return boolean;
    })

    const handleClick = async (clickedItem) => {
        // item ID or item

        // create or update a cart in the database
       let serverResponse = await axios({
            method: "PUT",
            url: "/update_cart",
            data: clickedItem
        })
        console.log(serverResponse);
        setCart(serverResponse.data)
        console.log("server response");

        // if we update or create a cart in DB, we want to 
        // change the cart HERE in the context
    }

    
    let itemsJSX = matchingItems.map((eachItem) => {
        // eachItem has .name, .category, .price, .emoji, .ingredients
        return (
            <div key={JSON.stringify(eachItem)} className='item-card'>
        
                <div>{eachItem.emoji}</div>
                <div>{eachItem.name}</div>
                <div className="price-button-container">
                    <div>
                        {eachItem.price}
                    </div>
                    <button onClick={() => handleClick(eachItem)}>Add to cart</button>
                </div>
            </div>
        )
    })
  
  return (
    <div className="items-container">
       {itemsJSX}
    </div>
  )
}

export default Items