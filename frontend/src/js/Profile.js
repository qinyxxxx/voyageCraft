import React from "react";
import "../css/Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img
            src="https://i.pinimg.com/736x/0f/b1/74/0fb1749fd4fe5efe880cc10665f97828.jpg"
            alt="VoyageCraft Logo"
            className="logo-image"
          />
          <span className="logo-text">VoyageCraft</span>
        </div>
        <div className="auth-buttons">
          <button className="login-button">Log in</button>
          <button className="register-button">Sign up</button>
        </div>
      </header>


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

export default Profile;