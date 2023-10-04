import React, { useState } from 'react';
import { Link } from "react-router-dom"

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link to="/" onClick={() => handleNavLinkClick('home')}>Home</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/user" onClick={() => handleNavLinkClick('profile')}>Profile</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/login" onClick={() => handleNavLinkClick('login')}>Login</Link>
        </li>
        <li className='navbar-item'>
          <Link to="/signup" onClick={() => handleNavLinkClick('signup')}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar