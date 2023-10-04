import React, { useState } from 'react';
import { Link } from "react-router-dom"

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={() => handleNavLinkClick('home')}>Home</Link>
        </li>
        <li>
          <Link to="/user" onClick={() => handleNavLinkClick('user')}>User</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => handleNavLinkClick('login')}>Login</Link>
        </li>
        <li>
          <Link to="/register" onClick={() => handleNavLinkClick('register')}>Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar