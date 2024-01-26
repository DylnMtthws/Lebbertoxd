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
    addToWatchlist(movie);
  }

  function handleWatchlistRemove(movie) {
    removeFromWatchlist(movie.id);
  }

  function handleWatched(movie) {
    addToWatched(movie);
  }

  function handleWatchedRemove(movie) {
    removefromWatched(movie.id);
  }

  function handleAddFavorites(movie) {
    addToFavorites(movie);
  }

  function handleFavoriteRemove(movie) {
    removeFromFavorites(movie.id);
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
            onClick={() => handleWatchedRemove(movie)}
            className="card-icon"
            style={{ color: "#17B169" }}
          />
        ) : (
          <FaEye className="card-icon" onClick={() => handleWatched(movie)} />
        )}
      </MDBCardBody>
    </MDBCard>
  );
}

export default MovieCard;
