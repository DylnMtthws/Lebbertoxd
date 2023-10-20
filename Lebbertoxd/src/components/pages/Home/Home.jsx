import React from "react";
import "../../../css/Home.css"; 
import TopRatedCard from "./TopRatedCard";
import PopularCard from "./PopularCard";
import NowPlayingCard from "./NowPlayingCard";

function Home({ popularMovies, nowPlaying, topRated }) {
  return (
    <div className="vertical-scroll-container">
      <div className="home-container">
        <NowPlayingCard nowPlaying={nowPlaying} />
        <PopularCard popularMovies={popularMovies} />
        <TopRatedCard topRated={topRated} />
      </div>
    </div>
  );
}

export default Home;
