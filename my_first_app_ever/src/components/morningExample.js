import React, { useState } from 'react'

const SingleTodo = () => {

    const [todoText, setTodoText] = useState('Do the laundry')
    const [isChecked, setIsChecked] = useState(false)


    const handleClick = () => {
        setIsChecked(!isChecked);
    }
  return (
    <div className="todo-container">
        {/* checkbox */}

        <input type="checkbox" checked={isChecked} onChange={handleClick}/>
        <div>{todoText}</div>
        {/* text */}
    </div>
  )
}


export default SingleTodo;