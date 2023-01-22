import MovieCard from "./MovieCard";
import "../assets/styles/movieList.css"



const MovieList = (props) => {

    const {movies, setSelectedMovie} = props
     
    return (
        <div className="movie-list">
            {movies.map((movie, key) => <MovieCard  key={key} setSelectedMovie={setSelectedMovie}  movie={movie}/> )}
        </div>
    )
}


export default MovieList;