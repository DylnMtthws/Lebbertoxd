import React, { useState, useEffect } from 'react'
import MovieCard from '../../MovieCard'

function Favorites() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch(' http://localhost:3000/favorites')
        .then(r => r.json())
        .then(data => setFavorites(data))
    }, [])

  return (
    <div>
      <h2 className="section-title">Favorites</h2>
      <div className="scroll-container">
        <div className="movie-row">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favorites