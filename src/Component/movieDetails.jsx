import { useNavigate } from "react-router-dom"
import "../assets/styles/movieDetails.css"


const MovieDetails = (props) => {

    const navigate = useNavigate()

    const {selectedMovie} = props

    const handleReturn = () => {
        navigate("/")
    }

    return (
        <div className="movie-details">
            <h5>Trailer Link</h5>
            <p>{selectedMovie.trailerLink}</p>
            <h6>Description</h6>
            <p>{selectedMovie.desc}</p>
            <p className="return" onClick={handleReturn}>Return to home</p>
        </div>
    )
}

export default MovieDetails;