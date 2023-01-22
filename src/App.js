import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from "./Component/homePage";
import MovieDetails from "./Component/movieDetails";



function App() {

  const [selectedMovie, setSelectedMovie] = useState()
 

  return (
    <Routes>
      <Route path="/" element={<HomePage setSelectedMovie={setSelectedMovie}/>}></Route>
      <Route path="/movie-details" element={<MovieDetails selectedMovie={selectedMovie} />} ></Route>
    </Routes>
  )
}
 
export default App;
