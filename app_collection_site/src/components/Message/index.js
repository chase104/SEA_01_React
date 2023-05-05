import React from 'react'

const Message = (props) => {
    // {
    //     dataFromParent: "asdfweqradsff",
    //     displayColors: true,
    //     newJsx: <div>asdfqwetq</div>
    // }
  return (
    <p>{props.dataFromParent}</p>
  )
}

export default Message