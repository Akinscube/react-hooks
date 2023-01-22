import { useRef } from "react";

const Filter = ({ movies, setFilteredMovies }) => {
  const titleFilterRef = useRef("");
  const rateFilterRef = useRef("");

  const handleFilter = (event) => {
    const filter = {[event.currentTarget.name] : event.currentTarget.value}

    const filterMovies = movies.filter(
      (movie) => movie.title === filter.title || movie.rating === filter.rating
    );
    setFilteredMovies(filterMovies)

    console.log(filter.rating)
  };

  return (
    <div>
      <label htmlFor="title">title</label>
      <input type="text" name="title" onChange={handleFilter} />
      <label htmlFor="rating">rate</label>
      <input type="number" name="rating" onChange={handleFilter} />
      <button type="submit" onClick={handleFilter}>
        Filter
      </button>
    </div>
  );
};

export default Filter;
