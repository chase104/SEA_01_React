import {useState, createContext} from 'react'



export const PrimaryContext = createContext();


const PrimaryContextProvider = (props) => {

    // state here
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState("")
    const [items, setItems] = useState([])

    console.log(items);

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