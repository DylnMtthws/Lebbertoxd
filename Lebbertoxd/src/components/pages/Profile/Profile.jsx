import React from 'react'
import "../../../css/Home.css"; 
import Watched from './Watched';
import Favorites from './Favorites';


function Profile() {
  return (
    <div className="vertical-scroll-container">
      <div className="home-container">
        <Favorites />
        <Watched />
      </div>
    </div>
  )
}

export default Profile