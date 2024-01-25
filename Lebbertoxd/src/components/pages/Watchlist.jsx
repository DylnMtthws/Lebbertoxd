import React, { useState, useEffect } from "react";
import "../../css/Home.css";
import MovieCard from "../MovieCard";
import useStore from "../stores/store.jsx";

function Watchlist() {
  const { watchlist } = useStore();
  useEffect(() => {}, [watchlist]);

  return (
    <div>
      <div className="home-container">
        <h2 className="section-title" style={{ color: "white" }}>
          Want to Watch
        </h2>
        <div className="movie-row">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
