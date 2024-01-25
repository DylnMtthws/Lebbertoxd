import React, { useState, useEffect } from "react";
import MovieCard from "../../MovieCard";
import { FaEye } from "react-icons/fa";
import useStore from "../../stores/store.jsx";

function Watched() {
  const { watched } = useStore();
  useEffect(() => {}, [watched]);
  return (
    <div>
      <h2 className="section-title" style={{ display: "flex" }}>
        <FaEye style={{ marginTop: "0.1em", marginRight: ".5em" }} />
        Watched
      </h2>
      <div className="scroll-container">
        <div className="movie-row">
          {watched.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watched;
