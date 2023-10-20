import React from 'react'
import MovieCard from "../../MovieCard";

function UpcomingCard({ upcoming }) {
  return (
    <div>
      <h2 className="section-title">Coming Soon</h2>
      <div className="scroll-container">
        <div className="movie-row">
          {upcoming.map((movie) => (
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

export default UpcomingCard