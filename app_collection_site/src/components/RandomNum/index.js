import React, {useState} from 'react';

const RandomNum = () => {
    // produce a random num
    // change that num on button click
    const [num, setNum] = useState(Math.floor(Math.random()*100))

    const handleClick = () => {
        setNum(Math.floor(Math.random()*100))
    }
  return (
    <div>
        <h3>Random Num App</h3>
        <div>
            {num}
        </div>
        <button onClick={handleClick}>Radomize!</button>
    </div>
  )
}

export default RandomNum