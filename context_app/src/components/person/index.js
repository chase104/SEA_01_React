import React from 'react'

const Person = () => {
    const Arthur = {
        name: "Arthur Bernier",
        age: "35",
        email: "ceo@arthurbernierjr.com",
      }

    const allArthurProperties = Object.keys(Arthur)
    // ["name", "age", "email"]
    let JSX = allArthurProperties.map((propertyString) => {
        return <div>{Arthur[propertyString]}</div>
            
    })
    // [<div>Arthur Bernier</div>,<div>35</div>, <div>ceo@arthurbernierjr.com</div> ]
  return (
    <div>
       {JSX}
    </div>
  )
}

export default Person