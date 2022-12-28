import MovieCard from "./MovieCard";



const MovieList = ({movies}) => {
    
    return (
        <div>
            {movies.map((movie, key) => <MovieCard  key={key}  movie={movie}/> )}
        </div>
    )
}


export default MovieList;