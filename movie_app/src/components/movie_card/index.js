import React, { useContext } from 'react'
import { mainContext } from '../../contexts';

const MovieCard = (props) => {
    let movieData = props.thisMovie;
    let { favoriteMovie, setFavoriteMovie } = useContext(mainContext)

    let thisMovieIsLiked = favoriteMovie === movieData.title ? true : false
  return (
    <div>
        <h1>{movieData.title}</h1>
        {/* Is movie liked? */}
        {thisMovieIsLiked ? <div>Favorite!!</div> : <></>}
        <button onClick={() => setFavoriteMovie(movieData.title)}>Make this your favorite!</button>
    </div>
  )
}

export default MovieCard