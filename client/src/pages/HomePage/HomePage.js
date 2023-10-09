import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import WebsiteBackground from "../../assets/banner.png";
import { FaBook, FaStar, FaMountain } from 'react-icons/fa';  // Adding some icons for aesthetic purposes

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <header className="home-header">
          <h1>Embark on a Learning Adventure!</h1>
        </header>

        <section className="home-intro">
          <div className="intro-content">
            <p>
              Dive into a world where <strong>learning meets stories</strong>. Explore thrilling tales and enhance your skills along the way.
            </p>
            <div className="cta-buttons">
              <Link to="/login" className="cta-button login-btn">Login</Link>
              <Link to="/register" className="cta-button register-btn">Register</Link>
            </div>
          </div>
          <img src={WebsiteBackground} alt="Story Driven Learning" className="intro-image" />
        </section>

        <section className="home-features">
          <div className="feature-item">
            <FaBook size={48} color="#37678C" />
            <h2>Read & Learn</h2>
            <p>Journey through enchanted forests of knowledge.</p>
          </div>
          <div className="feature-item">
            <FaMountain size={48} color="#37678C" />
            <h2>Climb & Master</h2>
            <p>Climb the mountains of skill mastery.</p>
          </div>
          <div className="feature-item">
            <FaStar size={48} color="#37678C" />
            <h2>Expert Insights</h2>
            <p>Navigate the rivers of expert insights.</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomePage;
