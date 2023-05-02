import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [previousCount, setPreviousCount] = useState("no previous count")
    const [currentCount, setCurrentCount] = useState(0);

    const [person, setPerson] = useState({
        name: "Chase",
        lastName: "Van Halen",
        home: "Holland"
    })


    // const handleAdd = () => {
    //     setPreviousCount(currentCount);
    //     setCurrentCount(currentCount+1);
    // }
    // const handleSubtract = () => {
    //     setPreviousCount(currentCount);
    //     setCurrentCount(currentCount-1);
    // }

    const handleClick = (isAdd) => {
        let number = isAdd ? 1 : -1
        // setPreviousCount(currentCount);
        setCurrentCount(currentCount+number);
    }

  let showSubtractButton = currentCount > 1;
  return (
    <>
        {/* <h2>{previousCount}</h2> */}
        <h2>{currentCount}</h2>
        <button onClick={() => handleClick(true)}>ADD ONE</button>
        {
        showSubtractButton ? 
        <button onClick={() => handleClick(false)}>SUBTRACT ONE</button> 
        : <></>
        }
        
    </>
  )
}

export default Counter