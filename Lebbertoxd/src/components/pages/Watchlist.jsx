import React, { useState, useEffect } from "react";
import "../../css/Home.css";
import MovieCard from "../MovieCard";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/watchlist')
  //   .then(r => r.json())
  //   .then((fetchedMovies) => setWatchlist(fetchedMovies))
  // }, [])

  const watchlistData = [
    {
      adult: false,
      backdrop_path: "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
      genre_ids: [27, 53],
      id: 1008042,
      original_language: "en",
      original_title: "Talk to Me",
      overview:
        "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
      popularity: 765.457,
      poster_path: "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
      release_date: "2023-07-26",
      title: "Talk to Me",
      video: false,
      vote_average: 7.2,
      vote_count: 1473,
    },
    {
      adult: false,
      backdrop_path: "/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
      genre_ids: [28, 53, 80],
      id: 926393,
      original_language: "en",
      original_title: "The Equalizer 3",
      overview:
        "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
      popularity: 1336.236,
      poster_path: "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
      release_date: "2023-08-30",
      title: "The Equalizer 3",
      video: false,
      vote_average: 7.2,
      vote_count: 949,
    },
  ];

  useEffect(() => {
    setWatchlist(watchlistData);
  });

  return (
    <div>
      <div className="home-container">
        <h2 className="section-title" style={{ color: "white" }}>
          Want to Watch
        </h2>
        <div className="movie-row">
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              //   handleAddWatchlist={handleAddWatchlist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
