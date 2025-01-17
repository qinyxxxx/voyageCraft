import React from "react";
import "../css/Profile.css";

function Profile() {

  console.log("Profile component rendered");
  // Temporary hardcoded data for testing
  const profileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    intro: "Welcome to my profile!"
  };

  return (
    <div className="profile">
      <h1>{profileData.name}</h1>
      <p>Email: {profileData.email}</p>
      <p>Intro: {profileData.intro}</p>
    </div>
  );
}

export default Profile;