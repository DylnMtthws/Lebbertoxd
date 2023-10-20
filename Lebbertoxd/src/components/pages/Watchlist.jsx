import React, { useState, useEffect } from 'react';
import "../../css/Home.css"; 
import MovieCard from '../MovieCard';


function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/watchlist')
    .then(r => r.json())
    .then((fetchedMovies) => setWatchlist(fetchedMovies))
  }, [])


  return (
    <div>
      <div className="home-container">
      <h2 className="section-title" style={{color: "white"}}>Want to Watch</h2>
        <div className="movie-row">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            //   handleAddWatchlist={handleAddWatchlist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
