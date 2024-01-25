import React, { useState, useEffect } from "react";
import MovieCard from "../../MovieCard";
import { FaStar } from "react-icons/fa";
import useStore from "../../stores/store.jsx";

function Favorites() {
  const { favorites } = useStore();
  useEffect(() => {}, [favorites]);

  // useEffect(() => {
  //     fetch(' http://localhost:3000/favorites')
  //     .then(r => r.json())
  //     .then(data => setFavorites(data))
  // }, [])

  return (
    <div>
      <h2 className="section-title" style={{ display: "flex" }}>
        <FaStar style={{ marginTop: "0.1em", marginRight: ".5em" }} />
        Favorites
      </h2>
      <div className="scroll-container">
        <div className="movie-row">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
