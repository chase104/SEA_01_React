import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const About = () => {
  return (
    <div>
        <h1>ABOUT Page</h1>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/contact" className="goose-link">
            <img src="https://cdn-icons-png.flaticon.com/512/2826/2826187.png" />
        </Link>
    </div>
  )
}

export default About