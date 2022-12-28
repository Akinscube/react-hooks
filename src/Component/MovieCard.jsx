


const MovieCard = ({movie}) => {

    return(
        <div style={{display:"inline-block", width:"400px", height:"600px"}}>
            <img src={movie.postUrl} alt={`${movie.title} poster`} />
            <h2>{movie.title}</h2>
            <p>{movie.desc}</p>
            <p>{movie.rating}</p>
        </div>
    )
}

export default MovieCard;