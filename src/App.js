import { useState, useRef } from 'react';
import './App.css';
import Filter from './Component/Filter';
import MovieList from './Component/MovieList';

function App() {

  const titleRef = useRef("")
  const descRef = useRef("")
  const posterUrlRef = useRef("")
  const ratingRef = useRef("")

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([])

  const dummyMovies = [
    {
      title : "John Wick",
      desc: "Action",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      rating: 7
    },
    {
      title: "Fast and Furious",
      desc: "Action",
      posterUrl: "https://cdn.pocket-lint.com/r/s/970x/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x-jpg.webp",
      rating: 6
    }
  ]

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

  console.log(filteredMovies)
  return (
    <div className="App">
      <label htmlFor="Title">Movie Title</label>
      <input type="text" name='Title' ref={titleRef} required />
      <label htmlFor="Desc">Movie Description</label>
      <input type="text" name='Desc' ref={descRef}/>
      <label htmlFor="posterUrl">PosterURL</label>
      <input type="text" name='posterUrl' ref={posterUrlRef}/>
      <label htmlFor="rating">rating</label>
      <input type="number" name='rating' required ref={ratingRef}/>

      <button type='submit' onClick={handleAdd}>Add</button>


      
      <Filter movies={movies} setFilteredMovies={setFilteredMovies} />
      {filteredMovies ? (<MovieList movies = {movies} />) : (<MovieList movies = {filteredMovies} />)}
    </div>
  );
}
 
export default App;
