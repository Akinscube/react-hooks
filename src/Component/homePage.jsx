import { Routes, Route } from "react-router-dom"
import { useState, useRef } from 'react';
import '../assets/styles/homePage.css';
import Filter from './Filter';
import MovieList from './MovieList';


function HomePage(props) {

  const {setSelectedMovie} = props

  const dummyMovies = [
    {
      title : "John Wick",
      desc: "Action",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      trailerLink: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      rating: 7
    },
    {
      title: "Fast and Furious",
      desc: "Action",
      posterUrl: "https://cdn.pocket-lint.com/r/s/970x/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x-jpg.webp",
      trailerLink: "https://cdn.pocket-lint.com/r/s/970x/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x-jpg.webp",
      rating: 6
    }
  ]

  const titleRef = useRef("")
  const descRef = useRef("")
  const posterUrlRef = useRef("")
  const ratingRef = useRef("")
  const trailerLinkRef = useRef("")

  const [movies, setMovies] = useState([...dummyMovies]);
  const [filteredMovies, setFilteredMovies] = useState([])


  // setMovies(dummyMovies)

  console.log(movies)

  const handleAdd = () => {
   const title = titleRef.current.value;
   const desc = descRef.current.value;
   const posterUrl = posterUrlRef.current.value;
   const rating = ratingRef.current.value;


    setMovies([...movies, {title, desc, posterUrl, rating}])
    // setFilteredMovies([...movies, {title, desc, posterUrl, rating}])
  }

  return (
    <div className="home-page">
      <label htmlFor="Title">Movie Title</label>
      <input type="text" name='Title' ref={titleRef} required />
      <label htmlFor="Desc">Movie Description</label>
      <input type="text" name='Desc' ref={descRef}/>
      <label htmlFor="posterUrl">PosterURL</label>
      <input type="text" name='posterUrl' ref={posterUrlRef}/>
      <label htmlFor="trailerLink">Trailer Link</label>
      <input type="text" name='trailerLink' required ref={trailerLinkRef}/>
      <label htmlFor="rating">rating</label>
      <input type="number" name='rating' required ref={ratingRef}/>

      <button type='submit' onClick={handleAdd}>Add</button>


      
      <Filter movies={movies} setFilteredMovies={setFilteredMovies} />
      {filteredMovies.length === 0 ? (<MovieList setSelectedMovie={setSelectedMovie} movies = {movies} />) : (<MovieList setSelectedMovie={setSelectedMovie} movies = {filteredMovies} />) }
      
    </div>
  );
}
 
export default HomePage;
