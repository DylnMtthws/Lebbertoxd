import React, { useEffect, useState } from "react";
import "/src/css/App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./NavBar";
import Search from "./pages/Search";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile/Profile";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e4b7f1c8348eee9b996ec30766c68e19"
    )
      .then((r) => r.json())
      .then((fetchedMovies) => setPopularMovies(fetchedMovies.results));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e4b7f1c8348eee9b996ec30766c68e19"
    )
      .then((r) => r.json())
      .then((fetchedMovies) => setTopRated(fetchedMovies.results));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=e4b7f1c8348eee9b996ec30766c68e19"
    )
      .then((r) => r.json())
      .then((fetchedMovies) => setNowPlaying(fetchedMovies.results));
  }, []);

  const routes = createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route
        index
        element={
          <Home
            popularMovies={popularMovies}
            nowPlaying={nowPlaying}
            topRated={topRated}
          />
        }
      />
      <Route path="search" element={<Search />} />
      <Route path="watchlist" element={<Watchlist />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  );

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
