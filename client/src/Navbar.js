import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <ul
        className="navbar-list"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <li className="navbar-item">
          <Link to="/" onClick={() => handleNavLinkClick("home")}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/user" onClick={() => handleNavLinkClick("profile")}>
            Profile
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" onClick={() => handleNavLinkClick("login")}>
            Login
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" onClick={() => handleNavLinkClick("signup")}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
