import React from "react";
import MovieCard from "../../MovieCard";

function TopRatedCard({ topRated }) {
  return (
    <div>
      <h2 className="section-title">Top Rated</h2>
      <div className="scroll-container">
        <div className="movie-row">
          {topRated.map((movie) => (
            <MovieCard
            key={movie.id}
            movie={movie}
          />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopRatedCard;
