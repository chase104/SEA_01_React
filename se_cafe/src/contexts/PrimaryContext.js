import {useState, createContext} from 'react'



export const PrimaryContext = createContext();


const PrimaryContextProvider = (props) => {

    // state here
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState("sandwiches")
    const [items, setItems] = useState([])

    return (
        <PrimaryContext.Provider value={
            {
                categories, setCategories,
                activeCategory, setActiveCategory,
                items, setItems
            }
        }>
            {props.children}
        </PrimaryContext.Provider>
    )
}
export default PrimaryContextProvider;