import React, { useState } from 'react'
import './index.css'
const RandomInspiration = () => {



    const [quotes, setQuotes] = useState([
        "you can do it!", 
        "do more!", 
        "It's something you can do!"
    ])

    
    const [quote, setQuote] = useState(quotes[0]);
    const [inputValue, setInputValue] = useState('')
    // diplay a random inpirational quote
    // AND add new quotes to the list of quotes
    const handleClick = () => {
        let newQuote = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(newQuote)
    }
    const handleQuoteClick = () => {
        setQuotes([...quotes, inputValue])
        setInputValue('')
    }
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
  return (
    <div id="inspiration-container">
        <h3>Inspiration App</h3>
        <div>
            {quote}
        </div>
        <button onClick={handleClick}>Change Quote</button>
        <label for="add-name-quote">Add a new quote!</label>
        <input type="text" name="add-new-quote" value={inputValue} onChange={handleChange}/>
        <button onClick={handleQuoteClick}>Submit</button>
    </div>
  )
}

export default RandomInspiration