import React, { useContext } from 'react';
import './index.css';
import { PrimaryContext } from '../../contexts/PrimaryContext';


const Sidebar = () => {

    const { categories, activeCategory, setActiveCategory } = useContext(PrimaryContext);

//        [<div onClick></div>, <div onClick></div>, <div id="the-current-cat"></div>, <div onClick></div>, <div onClick></div>, <div onClick></div>, <div onClick>Drinks</div>]
    const categoryJSX = categories.map((singleCat) => {
        if (activeCategory.toLowerCase() === singleCat.name.toLowerCase()) {
            return <div id="the-current-cat" key={singleCat.name}>{singleCat.name}</div>
        } 
            return <div 
                        onClick={() => setActiveCategory(singleCat.name)}
                        key={singleCat.name}
                    >
                        {singleCat.name}
                    </div>
    })

  return (
    <div className="sidebar">
        <div>Logo here</div>
        <div className="category-container">
            {categoryJSX}
        </div>
    </div>
  )
}

export default Sidebar