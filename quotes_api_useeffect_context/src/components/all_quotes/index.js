import React, { useContext } from 'react'
import { MainContext } from '../../contexts/MainContext'

const AllQuotes = (props) => {

    const {quotes, setCurrentQuote} = useContext(MainContext);
    // dynamically make an array of these divs!
    // the index of the quotes needs to be variable

    const handleClick = (object, id, index) => {
        // what is easiest?

        // object
        // _id
        // index
        setCurrentQuote(object)
        // id of current quote
    }

    let quotesJSX
    if (quotes.length) {
        quotesJSX = [];
        for (let i=0; i<quotes.length; i++) {
            let divForThisQuote = (
                <div 
                key={quotes[i]._id}
                onClick={() => handleClick(quotes[i], quotes[i]._id, i)}
                // object, id, index
                >
                    {quotes[i].content}
                </div>
                )
            quotesJSX.push(divForThisQuote);
        }
    }

    // if (quotes.length) {
    //     quotesJSX = quotes.map((quoteObject) => {
    //         return <div key={quoteObject._id}>{quoteObject.content}</div>
    //     })
    // }

  return (
    <div   style={{backgroundColor: "darkblue", padding: "20px"}}   >
        {quotesJSX}
    </div>
  )
}

export default AllQuotes