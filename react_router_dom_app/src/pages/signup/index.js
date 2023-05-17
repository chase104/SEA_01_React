import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // make a user in database
        // navigate to the home screen
        navigate('/')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={email} 
            placeholder='type your email' 
            onChange={(e) => setEmail(e.target.value)}
        />
    </form>
  )
}

export default Signup