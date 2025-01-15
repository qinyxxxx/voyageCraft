import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"; 
import Profile from "./js/Profile";
import Login from "./js/Login";
import Signup from "./js/Signup";
import MainPage from "./js/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;