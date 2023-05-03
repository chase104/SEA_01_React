import React, {useState} from 'react'

const Header = () => {
    const [title, setTitle] = useState('My Collection of Apps!')
  return (
    <h2>{title}</h2>
  )
}

export default Header;