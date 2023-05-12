import { useState, createContext} from 'react'



export const MainContext = createContext();


const MainContextProvider = (props) => {

    //  make state
    const [quotes, setQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState({});
    console.log("currentQuote: ", currentQuote);
    // return provider tag

    return (
        <MainContext.Provider value={
            {
            quotes: quotes,
            setQuotes: setQuotes,
            currentQuote: currentQuote, 
            setCurrentQuote: setCurrentQuote
            }
        }>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;