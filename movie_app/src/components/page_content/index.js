import React, { useContext } from 'react'
import MovieCard from '../movie_card'
import { mainContext } from '../../contexts'
import './index.css'

const PageContent = () => {

const { moviesData } = useContext(mainContext);

// [
//     {
//       title: "The Godfather",
//       director: "Francis Ford Coppola",
//       year: 1972,
//       genre: "Crime, Drama",
//       rating: 9.2
//     },
//     {
//       title: "The Shawshank Redemption",
//       director: "Frank Darabont",
//       year: 1994,
//       genre: "Drama",
//       rating: 9.3
//     },
//     {
//       title: "The Dark Knight",
//       director: "Christopher Nolan",
//       year: 2008,
//       genre: "Action, Crime, Drama",
//       rating: 9.0
//     }
//   ]

// [<MovieCard thisMovie={object} />,<MovieCard thisMovie={object} />, <MovieCard thisMovie={object} />  ]
let moviesJSX = moviesData.map((object) => {
    return <MovieCard thisMovie={object} />
})
  return (
    <div className="movies-container">
        {/* 3 movie cards */}
        {moviesJSX}
        {/* movie display component */}
    </div>
  )
}

export default PageContent