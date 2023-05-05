import React from 'react'
import './index.css'

const Navbar = ({functionFromAppThatWillChangeState}) => {
    // let functionFromAppThatWillChangeState = propsObject.functionFromAppThatWillChangeState
    
    const handleClick = (newString) => {
        functionFromAppThatWillChangeState(newString);
    }
  return (
    <div id="nav">
        <div  onClick={() => handleClick('timer')}>Timer App</div>
        <div onClick={() => handleClick('randomnum')}>Random Num App</div>
        <div onClick={() => handleClick('randominspiration')}>Random Inspiration</div>
        <div onClick={() => handleClick('directory')}>Directory</div>

    </div>
  )
}

export default Navbar