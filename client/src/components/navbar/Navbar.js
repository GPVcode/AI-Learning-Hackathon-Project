import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { FaUser, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'; // Importing icons
import "./Navbar.css";
import logo from "../../assets/Quest Teach.svg";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "60px", width: "80px" }}
          />
          
        </Link>
        <p>Story Driven Learning.</p>
      </div>
      <div className="nav-items">
        <Link className="nav-link" to="/about">About</Link>
        {isAuthenticated && (
          <Link className="nav-link" to="/profile">
            <FaUser /> Profile
          </Link>
        )}
        {isAuthenticated ? (
          <button className="nav-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <Link className="nav-link" to="/login">
            <FaSignInAlt /> Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
