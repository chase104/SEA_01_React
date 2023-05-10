import React, { useContext } from 'react'
import './index.css'
import { mainContext } from '../../contexts'

const Nav = () => {

    let { moviesData, setMovieToDisplay } = useContext(mainContext)

  return (
    <nav>
        <div className="nav-button" onClick={() => setMovieToDisplay(null)}>Home</div>
        <div className="nav-button" onClick={() => setMovieToDisplay(moviesData[0])}>Movie 1</div>
        <div className="nav-button" onClick={() => setMovieToDisplay(moviesData[1])}>Movie 2</div>
        <div className="nav-button" onClick={() => setMovieToDisplay(moviesData[2])}>Movie 3</div>
      
    </nav>
  )
}

export default Nav