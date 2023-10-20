import React from "react";
import "../../../css/Home.css"; 
import TopRatedCard from "./TopRatedCard";
import PopularCard from "./PopularCard";
import NowPlayingCard from "./NowPlayingCard";
import UpcomingCard from "./UpcomingCard";

function Home({ popularMovies, nowPlaying, topRated, upcoming }) {
  return (
    <div className="vertical-scroll-container">
      <div className="home-container">
        <NowPlayingCard nowPlaying={nowPlaying} />
        <UpcomingCard upcoming={upcoming} />
        <PopularCard popularMovies={popularMovies} />
        <TopRatedCard topRated={topRated} />
      </div>
    </div>
  );
}

export default Home;
