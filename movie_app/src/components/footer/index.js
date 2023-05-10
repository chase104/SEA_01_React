import React, { useContext } from 'react'
import { mainContext } from '../../contexts'


const Footer = () => {

    const { favoriteMovie } = useContext(mainContext)
  return (
    <div>
        {favoriteMovie ? `Your favorite Movie is ${favoriteMovie}` : "Please pick a movie!"}
        
    </div>
  )
}

export default Footer