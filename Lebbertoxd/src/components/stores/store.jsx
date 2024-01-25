import { create } from "zustand";

const initialwatchlistData = [
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

const favoritesData = [
  {
    adult: false,
    backdrop_path: "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    genre_ids: [35, 12, 14],
    id: 346698,
    original_language: "en",
    original_title: "Barbie",
    overview:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    popularity: 563.526,
    poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    video: false,
    vote_average: 7.2,
    vote_count: 5494,
  },
  {
    adult: false,
    backdrop_path: "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    genre_ids: [18],
    id: 389,
    original_language: "en",
    original_title: "12 Angry Men",
    overview:
      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    popularity: 40.878,
    poster_path: "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    release_date: "1957-04-10",
    title: "12 Angry Men",
    video: false,
    vote_average: 8.5,
    vote_count: 7713,
  },
  {
    adult: false,
    backdrop_path: "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
    genre_ids: [16, 10751, 14],
    id: 129,
    original_language: "ja",
    original_title: "千と千尋の神隠し",
    overview:
      "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    popularity: 84.067,
    poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    release_date: "2001-07-20",
    title: "Spirited Away",
    video: false,
    vote_average: 8.5,
    vote_count: 14981,
  },
  {
    adult: false,
    backdrop_path: "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
    genre_ids: [35, 53, 18],
    id: 496243,
    original_language: "ko",
    original_title: "기생충",
    overview:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    popularity: 69.231,
    poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    release_date: "2019-05-30",
    title: "Parasite",
    video: false,
    vote_average: 8.5,
    vote_count: 16521,
  },
];

const watchedData = [
  {
    adult: false,
    backdrop_path: "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    genre_ids: [28, 53],
    id: 575264,
    original_language: "en",
    original_title: "Mission: Impossible - Dead Reckoning Part One",
    overview:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
    popularity: 1984.315,
    poster_path: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    release_date: "2023-07-08",
    title: "Mission: Impossible - Dead Reckoning Part One",
    video: false,
    vote_average: 7.7,
    vote_count: 1724,
  },
  {
    adult: false,
    backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    genre_ids: [18, 80],
    id: 278,
    original_language: "en",
    original_title: "The Shawshank Redemption",
    overview:
      "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    popularity: 95.725,
    poster_path: "/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
    release_date: "1994-09-23",
    title: "The Shawshank Redemption",
    video: false,
    vote_average: 8.7,
    vote_count: 24759,
  },
  {
    adult: false,
    backdrop_path: "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
    genre_ids: [18, 80],
    id: 240,
    original_language: "en",
    original_title: "The Godfather Part II",
    overview:
      "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    popularity: 57.588,
    poster_path: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    release_date: "1974-12-20",
    title: "The Godfather Part II",
    video: false,
    vote_average: 8.6,
    vote_count: 11358,
  },
  {
    adult: false,
    backdrop_path: "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    genre_ids: [53, 80],
    id: 680,
    original_language: "en",
    original_title: "Pulp Fiction",
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    popularity: 60.877,
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    release_date: "1994-09-10",
    title: "Pulp Fiction",
    video: false,
    vote_average: 8.5,
    vote_count: 26007,
  },
  {
    adult: false,
    backdrop_path: "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
    genre_ids: [35, 18, 10749],
    id: 13,
    original_language: "en",
    original_title: "Forrest Gump",
    overview:
      "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    popularity: 59.908,
    poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    release_date: "1994-06-23",
    title: "Forrest Gump",
    video: false,
    vote_average: 8.5,
    vote_count: 25520,
  },
  {
    adult: false,
    backdrop_path: "/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg",
    genre_ids: [16, 18, 10752],
    id: 12477,
    original_language: "ja",
    original_title: "火垂るの墓",
    overview:
      "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
    popularity: 0.6,
    poster_path: "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
    release_date: "1988-04-16",
    title: "Grave of the Fireflies",
    video: false,
    vote_average: 8.5,
    vote_count: 4895,
  },
  {
    adult: false,
    backdrop_path: "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    genre_ids: [35, 12, 14],
    id: 346698,
    original_language: "en",
    original_title: "Barbie",
    overview:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    popularity: 563.526,
    poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    video: false,
    vote_average: 7.2,
    vote_count: 5494,
  },
  {
    adult: false,
    backdrop_path: "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    genre_ids: [18],
    id: 389,
    original_language: "en",
    original_title: "12 Angry Men",
    overview:
      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    popularity: 40.878,
    poster_path: "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    release_date: "1957-04-10",
    title: "12 Angry Men",
    video: false,
    vote_average: 8.5,
    vote_count: 7713,
  },
  {
    adult: false,
    backdrop_path: "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
    genre_ids: [16, 10751, 14],
    id: 129,
    original_language: "ja",
    original_title: "千と千尋の神隠し",
    overview:
      "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    popularity: 84.067,
    poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    release_date: "2001-07-20",
    title: "Spirited Away",
    video: false,
    vote_average: 8.5,
    vote_count: 14981,
  },
];

// useEffect(() => {
//   fetch('http://localhost:3000/watchlist')
//   .then(r => r.json())
//   .then((fetchedMovies) => setWatchlist(fetchedMovies))
// }, [])

// useEffect(() => {
//     fetch(' http://localhost:3000/favorites')
//     .then(r => r.json())
//     .then(data => setFavorites(data))
// }, [])

// useEffect(() => {
//     fetch(' http://localhost:3000/watched')
//     .then(r => r.json())
//     .then(data => setWatched(data))
// }, [])

const useStore = create((set) => ({
  watchlist: initialwatchlistData,
  addToWatchlist: (newFilm) =>
    set((state) => ({ watchlist: [...state.watchlist, newFilm] })),
  removeFromWatchlist: (filmId) =>
    set((state) => ({
      watchlist: state.watchlist.filter((film) => film.id !== filmId),
    })),
  favorites: favoritesData,
  addToFavorites: (newFilm) =>
    set((state) => ({ favorites: [...state.favorites, newFilm] })),
  removeFromFavorites: (filmId) =>
    set((state) => ({
      favorites: state.favorites.filter((film) => film.id !== filmId),
    })),
  watched: watchedData,
  addToWatched: (newFilm) =>
    set((state) => ({ watched: [...state.watched, newFilm] })),
  removefromWatched: (filmId) =>
    set((state) => ({
      watched: state.watched.filter((film) => film.id !== filmId),
    })),
}));

export default useStore;
