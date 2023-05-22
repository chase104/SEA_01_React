import React, { useContext } from 'react';
import './index.css';
import { PrimaryContext } from '../../contexts/PrimaryContext';


const Sidebar = () => {

    const { categories, activeCategory, setActiveCategory } = useContext(PrimaryContext);
    // array of objects
    console.log(categories);

    const categoryJSX = categories.map((singleCat) => {
        if (activeCategory.toLowerCase() === singleCat.name.toLowerCase()) {
            return <div id="active-cat">{singleCat.name}</div>
        }
        return <div onClick={() => setActiveCategory(singleCat.name)}>{singleCat.name}</div>
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