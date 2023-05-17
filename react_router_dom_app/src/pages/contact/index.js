import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h1>CONTACT Page</h1>
        <Link to="/">Go to HOME Page</Link>
        <br/>

        <Link to="/about">Go to ABOUT Page</Link>
    </div>
  )
}

export default Contact