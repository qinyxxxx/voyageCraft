import React from "react";
import "../css/Home.css";

const Header = () => {
  return (
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
  );
};

export default Header;