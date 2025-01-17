import React from "react";
import "../css/Home.css";
import Header from "./Header";

const Home = () => {
  return (
    <div className="MainPage">
      
      <Header />

      {/* Intro Section */}
      <div className="intro-section">
        <h1 className="intro-title">Plan your dream trips effortlessly</h1>
        <p className="intro-description">
          Discover itineraries, share travel guides, and keep all your bookings organized in one simple app.
        </p>
      </div>

      {/* Center Image */}
      <div className="center-photo">
        <img
          src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/494000/494175-olympia-and-vicinity.jpg"
          alt="Center Photo"
          className="big-photo"
        />
      </div>
    </div>
  );
};

export default Home;