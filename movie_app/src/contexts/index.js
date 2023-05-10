import { useState, createContext } from 'react';


export const mainContext = createContext();


const MainContextProvider = (props) => {


    // MAKE STATE HERE
    const [moviesData, setMoviesData] = useState(
        [
            {
              title: "The Godfather",
              director: "Francis Ford Coppola",
              year: 1972,
              genre: "Crime, Drama",
              rating: 9.2
            },
            {
              title: "The Shawshank Redemption",
              director: "Frank Darabont",
              year: 1994,
              genre: "Drama",
              rating: 9.3
            },
            {
              title: "The Dark Knight",
              director: "Christopher Nolan",
              year: 2008,
              genre: "Action, Crime, Drama",
              rating: 9.0
            }
          ]
    )
    const [favoriteMovie, setFavoriteMovie] = useState("");
    const [movieToDisplay, setMovieToDisplay] = useState(null)


    return (
        <mainContext.Provider value={{
            moviesData, setMoviesData,
            favoriteMovie, setFavoriteMovie,
            movieToDisplay, setMovieToDisplay
        }}>
            {props.children}
        </mainContext.Provider>
    )
}

export default MainContextProvider;