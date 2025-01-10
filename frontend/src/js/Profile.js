import React from "react";
import "../css/Profile.css"; 

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="top-right">
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>

      <div className="center-photo">
        <img
          src="https://media.cntraveler.com/photos/56c73b9bdfe20b0a282a75e8/16:9/w_2240,c_limit/yosemite-firefall-cr-alamy.jpg" 
          alt="Center Photo"
          className="big-photo"
        />
      </div>
    </div>
  );
};

export default Profile;