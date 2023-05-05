import React, { useState, useEffect } from 'react'
import Message from '../Message';
import userEvent from '@testing-library/user-event';

const DisplayMessage = () => {

    console.log("running code")

    const runEveryRender = () => {
        let sum = 8+2
        console.log(sum);
    }

    runEveryRender()
    const [message, setMessage] = useState("");
    const [input, setInput] = useState("");

    useEffect(()=>{
        console.log("first render ONLY");
        // getting data from outside
        // checking state
        return () => {
            console.log("I'm leaving the dom!");
        }
    }, [])
    
    useEffect(()=> {
        console.log("The input just changed!!!!");
    }, [input])

    const handleChange = (event) => {
        // event.target.value 
        // the value the input WANTS to be
        setInput(event.target.value)
    }
    const handleClick = () => {
        setMessage(input)
    }

  return (
    <div>

        <Message dataFromParent={message} />
        <input 
            type="text" 
            value={input} 
            // onChange={(e)=>{handleClick(e)}}
            // onChang={(e)=>handleClick(e)}
            // onChan={(e)=>handleClick(e, someOtherData)}
            onChange={handleChange}
            />
        <button onClick={handleClick}>Display Message</button>
    </div>
  )
}

export default DisplayMessage