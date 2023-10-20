import React, { useState, useEffect } from 'react'
import MovieCard from '../../MovieCard'

function Watched() {
    const [watched, setWatched] = useState([])

    useEffect(() => {
        fetch(' http://localhost:3000/watched')
        .then(r => r.json())
        .then(data => setWatched(data))
    }, [])

  return (
    <div>
      <h2 className="section-title">Watched</h2>
      <div className="scroll-container">
        <div className="movie-row">
          {watched.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Watched