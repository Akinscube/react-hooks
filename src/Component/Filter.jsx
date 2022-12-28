import { useRef } from "react";

const Filter = ({ movies, setFilteredMovies }) => {
  const titleFilterRef = useRef("");
  const rateFilterRef = useRef("");

  const handleFilter = () => {
    const titleFilter = titleFilterRef.current.value;
    const rateFilter = rateFilterRef.current.value;

    const filterMovies = movies.filter(
      (movie) => movie.title === titleFilter || movie.rating === rateFilter
    );
    setFilteredMovies(filterMovies)
  };

  return (
    <div>
      <label htmlFor="title">title</label>
      <input type="text" name="title" ref={titleFilterRef} />
      <label htmlFor="rating">rate</label>
      <input type="text" name="rating" ref={rateFilterRef} />
      <button type="submit" onClick={handleFilter}>
        Filter
      </button>
    </div>
  );
};

export default Filter;
