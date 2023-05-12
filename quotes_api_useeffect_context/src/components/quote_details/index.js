import React, { useContext } from 'react'
import { MainContext } from '../../contexts/MainContext'

const QuoteDetails = () => {
    const { currentQuote } = useContext(MainContext)
    // get the   object      of the quote
    // get the    _id      of the quote and search the quotes array for that quote
    // get the    index      of the quote and do quotes[index]
  return (
    <div  style={{backgroundColor: "darkblue", padding: "20px"}} >
        <div>{currentQuote.author}</div>
        <div>{currentQuote.content}</div>
        <div>{currentQuote.dateAdded}</div>
    </div>
  )
}

export default QuoteDetails