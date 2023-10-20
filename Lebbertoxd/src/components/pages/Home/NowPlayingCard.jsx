import React from "react";
import MovieCard from "../../MovieCard";

function NowPlayingCard({ nowPlaying }) {
  return (
    <div>
      <h2 className="section-title">In Theaters</h2>
      <div className="scroll-container">
        <div className="movie-row">
          {nowPlaying.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NowPlayingCard;
