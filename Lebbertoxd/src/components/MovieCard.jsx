import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
  } from "mdb-react-ui-kit";
  import { FaStar, FaPlus, FaEye, FaPencilAlt, FaDashcube, FaMinus } from "react-icons/fa";

function MovieCard({ movie, handleAddWatchlist }) {
  function handlePlusClick(movie) {
    fetch('http://localhost:3000/watchlist', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    })
  }

  function handleWatched(movie) {
    fetch(`http://localhost:3000/watchlist/${movie.id}`, {
      method: "DELETE"
    })
    fetch('http://localhost:3000/watched/', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(movie)
    })
  }

  function handleAddFavorites(movie) {
    fetch('http://localhost:3000/favorites/', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(movie)
    })
  }

  function handleWatchlistRemove(movie) {
    fetch(`http://localhost:3000/watchlist/${movie.id}`, {
      method: "DELETE"
    })
  }

  return (
    <MDBCard key={movie.id} className="movie-card mx-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top"
        alt={movie.title}
      />
      <MDBCardBody>
        {/* <MDBCardTitle>{movie.title}</MDBCardTitle> */}
        <FaStar className="card-icon" onClick={() => handleAddFavorites(movie)}/>
        <FaPlus className="card-icon" onClick={() => handlePlusClick(movie)}/>
        <FaMinus className="card-icon" onClick={() => handleWatchlistRemove(movie)} />
        <FaEye className="card-icon" onClick={() => handleWatched(movie)}/>
      </MDBCardBody>
    </MDBCard>
  );
}

export default MovieCard;
