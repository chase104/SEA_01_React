import React, { useContext } from 'react'
import { mainContext } from '../../contexts'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import './index.css'
const MovieDisplay = () => {
    const { movieToDisplay, favoriteMovie } = useContext(mainContext)
  return (
    <div className="single-movie-container">
        <div>{movieToDisplay.title}</div>
        {favoriteMovie === movieToDisplay.title ?  <FavoriteIcon /> : <HeartBrokenIcon />}
       
        <div>{movieToDisplay.director}</div>
        <div>{movieToDisplay.year}</div>
    </div>
  )
}

export default MovieDisplay