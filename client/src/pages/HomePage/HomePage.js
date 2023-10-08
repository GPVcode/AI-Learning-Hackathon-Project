import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Assuming you'll have a separate CSS for HomePage

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Embark on a Learning Adventure!</h1>
      </header>

      <section className="home-intro">
        <p>
          Dive into a world where <strong>learning meets stories</strong>. Explore thrilling tales and enhance your skills along the way.
        </p>
        <div className="cta-buttons">
          <Link to="/login" className="cta-button login-btn">Login</Link>
          <span> | </span>
          <Link to="/register" className="cta-button register-btn">Register</Link>
        </div>
      </section>

      <section className="home-features">
        <h2>Discover</h2>
        <p>
          Journey through enchanted forests of knowledge, climb the mountains of skill mastery, and navigate the rivers of expert insights. Our platform is where your learning voyage transforms into an unforgettable story.
        </p>
      </section>

      <footer className="home-footer">
        <p>
          Ready to start your adventure? Join us today!
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
