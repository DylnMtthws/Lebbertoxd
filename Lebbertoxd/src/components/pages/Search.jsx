import React, { useState } from 'react';
import MovieCard from '../MovieCard';
import '../../css/Search.css';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e4b7f1c8348eee9b996ec30766c68e19&query=${searchInput}`)
      .then(response => response.json())
      .then(data => setSearchResults(data.results));
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    handleSearch();
  };

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={handleChange}
        className='search-input'
      />
      {searchInput ? (
        searchResults && searchResults.length > 0 ? (
          <div className="movie-grid">
            {searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No search results found.</p>
        )
      ) : null}
    </div>
  );
}

export default Search;