import React, { useContext } from 'react'
import MovieCard from '../movie_card'
import { mainContext } from '../../contexts'
import './index.css'
import MovieDisplay from '../movieDisplay'

const PageContent = () => {

const { moviesData, movieToDisplay } = useContext(mainContext);

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
    return <MovieCard thisMovie={object} key={object.title}/>
})

  return (
    <div className="movies-container">
        {movieToDisplay ? <MovieDisplay /> : moviesJSX}
    </div>
  )
}

export default PageContent