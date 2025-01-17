import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css"; 
import Profile from "./js/Profile";
import Login from "./js/Login";
import Signup from "./js/Signup";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;