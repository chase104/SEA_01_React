import React, { useContext } from 'react'
import './index.css'
import { PrimaryContext } from '../../contexts/PrimaryContext'

const Items = () => {
    // what do we need from the context?
    // items, active category
    const { items, activeCategory } = useContext(PrimaryContext);
    // we need an array of divs ONLY that match the category
    // we can use the .filter method

    const matchingItems = items.filter((eachItem) => {
        // activeCategory = "sandwiches"
        // {} with .category string value
        let boolean =  eachItem.category === activeCategory
        return boolean;
    })

    
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
                    <button>Add to cart</button>
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