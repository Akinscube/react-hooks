import "../assets/styles/movieCard.css"
import { useNavigate } from "react-router-dom"



const MovieCard = (props) => {

    const {movie, setSelectedMovie} = props

    const navigate = useNavigate()

    const handleMovieDesc = () => {
        setSelectedMovie(movie)
        navigate("/movie-details")
    }

    

    return(
        <div className="movie-card" onClick={handleMovieDesc} >
            <div className="poster-container" style={{backgroundImage:`url(${movie.posterUrl}) `}}>
            {/* <img className="poster" src={movie.posterUrl} alt={`${movie.title} poster`} /> */}
            </div>
            <h2 className="title">{movie.title}</h2>
            <p className="description">{movie.desc}</p>
            <p className="rating">{movie.rating}</p>
        </div>
    )
}

export default MovieCard;