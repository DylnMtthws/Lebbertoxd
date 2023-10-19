import React, { useEffect, useState } from "react";
import "/src/css/App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./NavBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [inTheaters, setInTheaters] = useState([]);
  const [streaming, setStreaming] = useState([]);
  const [watched, setWatched] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=e4b7f1c8348eee9b996ec30766c68e19"
    )
      .then((r) => r.json())
      .then((fetchedMovies) => setMovies(fetchedMovies.results));
  }, []);

  const routes = createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home movies={movies} />} />
      {/* <Route path="search" element={<Search />} />
      <Route
        path="add-movie"
        element={<AddMovie  />}
      />
      <Route
        path="profile"
        element={<Profile  />}
      /> */}
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
