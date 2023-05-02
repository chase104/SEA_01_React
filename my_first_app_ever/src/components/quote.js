import React, { useState } from 'react'

const Quote = () => {
    
    let quotes = [
        "an ounce of prevention is worth a pound of cure", 
        "fine, I'll do it myself", 
        "Learn react once, then write everywhere",
        "Do more"
    ]
    let colors = [
        "blue",
        "green",
        "red"
    ]


    const [quote, setQuote] = useState(quotes[0]);
    const [currentColor, setCurrentColor] = useState(colors[0]);
    // display a quote.
    // on button click, display a random quote, with a random color
    const handleColorChange = () => {
        //1.get random number 0-colors.length
        let randomNum = Math.floor(Math.random()*colors.length);
        let randomColor = colors[randomNum];
        console.log(randomColor);
        //2. get random color
        //3. setCurrentColor(randomColor)
        setCurrentColor(randomColor)
    }
    const handleQuoteChange = () => {
        let randomNum = Math.floor(Math.random()*quotes.length);
        let randomQuote = quotes[randomNum];
        console.log(randomQuote);
        //2. get random color
        //3. setCurrentColor(randomColor)
        setQuote(randomQuote)
    }

    const handleChange = (settingColor) => {
        let arrayOfElements = settingColor ? colors : quotes;
        let randomNum = Math.floor(Math.random()*arrayOfElements.length);
        let randomElement = arrayOfElements[randomNum];
        settingColor ?  setCurrentColor(randomElement) : setQuote(randomElement)
    }
  return (
    <div>
        <p style={{color: currentColor}}>{quote}</p>
        <button onClick={() => handleChange(true)}>change color</button>
        <button onClick={() => handleChange(false)}>change quote</button>
        {/* <button onClick={handleColorChange}>change color</button>
        <button onClick={handleQuoteChange}>change quote</button> */}
    </div>
  )
}

export default Quote