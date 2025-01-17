import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab, Button, Box } from "@mui/material";
import "../css/Header.css";

const Header = () => {
  const tabPaths = ["/", "/posts", "/signup", "/profile"]; 
  const location = useLocation();
  const navigate = useNavigate();

  const getIndex = (path) => {
    const idx = tabPaths.indexOf(path);
    return idx === -1 ? 0 : idx;
  };

  const [value, setValue] = useState(getIndex(location.pathname));

  useEffect(() => {
    setValue(getIndex(location.pathname));
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(tabPaths[newValue]);
  };

  return (
    <AppBar position="sticky" className="header-bar">
      <Toolbar className="toolbar">
        {/* Logo */}
        <Box className="logo-container" onClick={() => navigate("/")}>
          <img
            src="https://i.pinimg.com/736x/0f/b1/74/0fb1749fd4fe5efe880cc10665f97828.jpg"
            alt="VoyageCraft Logo"
            className="logo-image"
          />
          <span className="logo-text">VoyageCraft</span>
        </Box>

        {/* Navigation Tabs */}
        <Tabs
          value={value}
          onChange={handleChange}
          className="tabs"
          textColor="inherit"
          indicatorColor="primary"
        >
          <Tab label="Home" />
          <Tab label="Posts" />
          <Tab label="Sign Up" />
          <Tab label="Profile" />
        </Tabs>

        {/* Buttons */}
        <Box className="auth-buttons">
          <Button
            variant="outlined"
            className="login-button"
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            className="register-button"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;