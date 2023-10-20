import React from "react";
import MovieCard from "../../MovieCard";

function PopularCard({popularMovies}) {
  return (
    <div>
          <h2 className="section-title">Popular</h2>
          <div className="scroll-container">
            <div className="movie-row">
              {popularMovies.map((movie) => (
                <MovieCard
                key={movie.id}
                movie={movie}
              />
              ))}
            </div>
          </div>
        </div>
  )
}

export default PopularCard