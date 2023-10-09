import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h1>Learning Loom</h1> 
                <div className='footer-quote'>
                <p>Story Driven Learning.</p>
                </div>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2023 Learning Loom. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
