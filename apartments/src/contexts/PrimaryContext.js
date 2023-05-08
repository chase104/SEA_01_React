import { useState, createContext } from 'react';


export const PrimaryContext = createContext();

const PrimaryContextProvider = (props) => {

    const [allApartments, setAllApartments] = useState([]);
    const [matchedApartments, setMatchedApartments] = useState([]);

    return (
        <PrimaryContext.Provider value={{
            allApartments, 
            setAllApartments,
            matchedApartments, 
            setMatchedApartments
        }}>
            {props.children}
        </PrimaryContext.Provider>
    )
}

export default PrimaryContextProvider;