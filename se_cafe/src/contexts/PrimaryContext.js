import {useState, createContext} from 'react'



export const PrimaryContext = createContext();


const PrimaryContextProvider = (props) => {

    // state here
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Sandwiches");
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState(null);
    // everytime we make a DB cart change, we need to setCart HERE

    console.log(items);

    return (
        <PrimaryContext.Provider value={
            {
                categories, setCategories,
                activeCategory, setActiveCategory,
                items, setItems,
                cart, setCart
            }
        }>
            {props.children}
        </PrimaryContext.Provider>
    )
}
export default PrimaryContextProvider;