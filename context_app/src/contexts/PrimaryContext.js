import { useState, createContext } from 'react';


export let primaryContext = createContext();


const PrimaryContextProvider = (props) => {

    let userName = "Sarah"
//  put some state
    const [user, setUser] = useState({
        name: "Mary",
        img: "https://cdn-icons-png.flaticon.com/512/666/666201.png"
    })

    const [pages, setPages] = useState(["Home", "About", "Contact"]);

    const [currentPage, setCurrentPage] = useState("Home");

// return jsx
    let contextObject = {
        user, setUser,
        pages, setPages,
        currentPage, setCurrentPage
    }

    return (
        <primaryContext.Provider value={contextObject} >
            {props.children}
        </primaryContext.Provider>
    )


}


export default PrimaryContextProvider;