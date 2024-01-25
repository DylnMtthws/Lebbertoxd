import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import {
  FaStar,
  FaPlus,
  FaEye,
  FaPencilAlt,
  FaDashcube,
  FaMinus,
  FaEyeSlash,
} from "react-icons/fa";
import useStore from "./stores/store.jsx";

function MovieCard({ movie }) {
  const {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    favorites,
    addToFavorites,
    removeFromFavorites,
    watched,
    addToWatched,
    removefromWatched,
  } = useStore();

  function handlePlusClick() {
    // fetch('http://localhost:3000/watchlist', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(movie)
    // })
    addToWatchlist(movie);
  }

  function handleWatchlistRemove(movie) {
    // fetch(`http://localhost:3000/watchlist/${movie.id}`, {
    //   method: "DELETE",
    // });
    removeFromWatchlist(movie.id);
  }

  function handleWatched(movie) {
    // fetch(`http://localhost:3000/watchlist/${movie.id}`, {
    //   method: "DELETE",
    // });
    // fetch("http://localhost:3000/watched/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(movie),
    // });
    addToWatched(movie);
  }

  function handleWatchedRemove(movie) {
    removefromWatched(movie);
  }

  function handleAddFavorites(movie) {
    // fetch("http://localhost:3000/favorites/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(movie),
    // });
    addToFavorites(movie);
  }

  function handleFavoriteRemove(movie) {
    removeFromFavorites(movie);
  }

  const isInWatchlist = watchlist.some(
    (watchlistMovie) => watchlistMovie.id === movie.id
  );

  const isInFavorites = favorites.some(
    (favoriteMovie) => favoriteMovie.id === movie.id
  );

  const isInWatched = watched.some(
    (watchedMovie) => watchedMovie.id === movie.id
  );

  return (
    <MDBCard key={movie.id} className="movie-card mx-2">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top"
        alt={movie.title}
      />
      <MDBCardBody>
        {/* <MDBCardTitle>{movie.title}</MDBCardTitle> */}
        {isInFavorites ? (
          <FaStar
            className="card-icon"
            onClick={() => handleFavoriteRemove(movie)}
            style={{ color: "gold" }}
          />
        ) : (
          <FaStar
            className="card-icon"
            onClick={() => handleAddFavorites(movie)}
          />
        )}
        {!isInWatchlist ? (
          <FaPlus
            className="card-icon"
            onClick={() => handlePlusClick(movie)}
          />
        ) : (
          <FaMinus
            className="card-icon"
            onClick={() => handleWatchlistRemove(movie)}
          />
        )}
        {isInWatched ? (
          <FaEye
            className="card-icon"
            onClick={() => handleWatched(movie)}
            style={{ color: "##17B169" }}
          />
        ) : (
          <FaEye className="card-icon" onClick={() => handleWatched(movie)} />
        )}
      </MDBCardBody>
    </MDBCard>
  );
}

export default MovieCard;
