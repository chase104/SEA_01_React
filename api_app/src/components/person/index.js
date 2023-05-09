import React from 'react'

const Person = (props) => {
    let name = props.name;
    let height = props.height
  return (
    <div>{name} is {height} tall</div>
  )
}

export default Person