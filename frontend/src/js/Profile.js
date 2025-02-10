import React, { useState, useRef, useEffect } from "react";
import "../css/Profile.css";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaComment, FaBookmark } from 'react-icons/fa';
import { LoremIpsum } from "lorem-ipsum";

function Profile() {
  const navigate = useNavigate();
  
  // Default placeholder profile picture
  const placeholderImg = "https://pbs.twimg.com/media/GhPIeVTbAAAfSZn.png";

  // State for profile picture, active tab, and selected post for modal
  const [profilePic, setProfilePic] = useState(placeholderImg);
  const [activeTab, setActiveTab] = useState("trips");
  const [selectedPost, setSelectedPost] = useState(null);
  const modalRef = useRef(); 

  const lorem = new LoremIpsum({
    sentencesPerParagraph: { max: 8, min: 4 },
    wordsPerSentence: { max: 16, min: 4 }
  });


  const comments = ["Great post!", "I love this place!", "Amazing photography!"];

  // Handle profile picture upload
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfilePic(imageURL);
    }
  };

  // Profile Data
  const profileData = {
    name: "momo",
    intro: "Exploring the world, one journey at a time!",
    followers: 3827,
    following: 7,
    likes: 1505,
    trips: [
      { id: 1, title: "Hidden Gems in Kyoto", img: "https://storage.googleapis.com/ikidane/upload/spot_gallery_484_01_ac76ae1bec/spot_gallery_484_01_ac76ae1bec.jpg" },
      { id: 2, title: "Backpacking Through Europe", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/20190503_Hungarian_Parliament_Building_1814_2263_DxO.jpg/640px-20190503_Hungarian_Parliament_Building_1814_2263_DxO.jpg" },
    ],
    saved: []
  };

  const openModal = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden"; 
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = "auto"; 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div className="profile-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo" onClick={() => navigate("/")}>VoyageCraft</div>
        <nav>
          <ul>
            <li onClick={() => navigate("/discover")}>Discover</li>
            <li onClick={() => navigate("/plan")}>Plan</li>
            <li className="my-profile" onClick={() => navigate("/profile")}>
              <img src={profilePic} alt="Profile" />
              <span>My Profile</span>
            </li>
            <li onClick={() => navigate("/settings")}>Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Profile Content */}
      <main className="profile-content">
        <header className="profile-header">
          <label htmlFor="profile-pic-input">
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </label>
          <input
            type="file"
            id="profile-pic-input"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{ display: "none" }}
          />

          <div className="profile-info">
            <h1>{profileData.name}</h1>
            <p>{profileData.intro}</p>
            <div className="stats">
              <span>{profileData.following} Following</span>
              <span>{profileData.followers} Followers</span>
              <span>{profileData.likes} Likes & Saves</span>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="tabs">
          <button className={activeTab === "trips" ? "active" : ""} onClick={() => setActiveTab("trips")}>My Posts</button>
          <button className={activeTab === "saved" ? "active" : ""} onClick={() => setActiveTab("saved")}>Saved</button>
        </div>

        {/* Post Grid */}
        <section className="profile-grid">
          {activeTab === "trips" && profileData.trips.length > 0 ? (
            profileData.trips.map((trip) => (
              <div className="post-card" key={trip.id} onClick={() => openModal(trip)}>
                <img src={trip.img} alt={trip.title} className="post-img" />
                <p>{trip.title}</p>
                <div className="post-actions">
                  <div className="icon-container">
                    <FaHeart className="icon" />
                    <span className="icon-number">123</span>
                  </div>
                  <div className="icon-container">
                    <FaComment className="icon" />
                    <span className="icon-number">45</span>
                  </div>
                  <div className="icon-container">
                    <FaBookmark className="icon" />
                    <span className="icon-number">67</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="empty-message">It's still empty now, browse more!</p>
          )}
        </section>

        {/* Modal for Enlarged Post */}
        {selectedPost && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <img src={selectedPost.img} alt={selectedPost.title} className="modal-img" />
              <h2>{selectedPost.title}</h2>
              <p>{lorem.generateSentences(1)}</p>
              <div className="modal-icons">
                <div className="icon-container">
                  <FaHeart className="icon" />
                  <span className="icon-number">123</span>
                </div>
                <div className="icon-container">
                  <FaComment className="icon" />
                  <span className="icon-number">45</span>
                </div>
                <div className="icon-container">
                  <FaBookmark className="icon" />
                  <span className="icon-number">67</span>
                </div>
              </div>
              <div className="comments-section">
                <h3>Comments</h3>
                {comments.length === 0 ? (
                  <p>No comments for now.</p>
                ) : (
                  comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Profile;