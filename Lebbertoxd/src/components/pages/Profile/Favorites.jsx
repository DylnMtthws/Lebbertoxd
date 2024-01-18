import React, { useState, useEffect } from "react";
import MovieCard from "../../MovieCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //     fetch(' http://localhost:3000/favorites')
  //     .then(r => r.json())
  //     .then(data => setFavorites(data))
  // }, [])

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
    {
      adult: false,
      backdrop_path: "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
      genre_ids: [10749, 16, 18],
      id: 372058,
      original_language: "ja",
      original_title: "君の名は。",
      overview:
        "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
      popularity: 81.077,
      poster_path: "/q719jXXEzOoYaps6babgKnONONX.jpg",
      release_date: "2016-08-26",
      title: "Your Name.",
      video: false,
      vote_average: 8.5,
      vote_count: 10366,
    },
    {
      adult: false,
      backdrop_path: "/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg",
      genre_ids: [18, 10749],
      id: 11216,
      original_language: "it",
      original_title: "Nuovo Cinema Paradiso",
      overview:
        "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
      popularity: 29.594,
      poster_path: "/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
      release_date: "1988-11-17",
      title: "Cinema Paradiso",
      video: false,
      vote_average: 8.4,
      vote_count: 3985,
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
      backdrop_path: "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
      genre_ids: [28, 18],
      id: 346,
      original_language: "ja",
      original_title: "七人の侍",
      overview:
        "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
      popularity: 35.41,
      poster_path: "/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
      release_date: "1954-04-26",
      title: "Seven Samurai",
      video: false,
      vote_average: 8.5,
      vote_count: 3255,
    },
    {
      adult: false,
      backdrop_path: "/lqWyKvx3qZhZAkxOXyYbOjVKuv5.jpg",
      genre_ids: [16],
      id: 430844,
      original_language: "en",
      original_title: "PAW Patrol: Pups Save Christmas",
      overview:
        "Join the PAW Patrol for 7 snowy saves, including a special double-length Christmas episode! The pups gear up to fix Santa's sleigh and save Christmas, plus return penguins to their frozen home, help Everest on some snowy rescues, and more!",
      popularity: 3.947,
      poster_path: "/ehW6PdDALFp1zXmprMDJCUM4Anc.jpg",
      release_date: "2016-11-01",
      title: "PAW Patrol: Pups Save Christmas",
      video: false,
      vote_average: 8.6,
      vote_count: 5,
    },
    {
      adult: false,
      backdrop_path: "/jqFjgNnxpXIXWuPsyfqmcLXRo9p.jpg",
      genre_ids: [80, 53],
      id: 500,
      original_language: "en",
      original_title: "Reservoir Dogs",
      overview:
        "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
      popularity: 40.544,
      poster_path: "/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
      release_date: "1992-09-02",
      title: "Reservoir Dogs",
      video: false,
      vote_average: 8.132,
      vote_count: 13421,
    },
  ];

  useEffect(() => {
    setFavorites(favoritesData);
  }, []);

  return (
    <div>
      <h2 className="section-title">Favorites</h2>
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
