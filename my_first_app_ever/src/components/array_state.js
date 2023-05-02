import React, { useState } from 'react'

const Cars = () => {

    const [cars, setCars] = useState(["Ford", "Hyundai", "Toyota"]);
    const [inputValue, setInputValue] = useState('');

    // [<div>"Ford"</div>, <div>"Hyundai"</div>, <div>"Toyota"</div>,  <div>"Honda"</div>,  <div>"Honda"</div>]
    let carsJSX = cars.map((carString, index) => {
        return <div key={carString+index}>{carString}</div>
    })

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleClick = () => {
        console.log(cars);
        console.log(inputValue);
        let newArray = [...cars, inputValue];
        setCars(newArray);
        setInputValue('')
    }
  return (
    <div>
        {carsJSX}
        <input type="text" value={inputValue} onChange={handleChange}/>
        <button onClick={handleClick}>Add A Car</button>
    </div>
  )
}

export default Cars