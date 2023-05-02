import React from 'react'

const Square = () => {
    const handleClick = (e) => {
        console.log("square was clicked");
    }
    
  return (
    <div onClick={handleClick}>Square</div>
  )
}

export default Square