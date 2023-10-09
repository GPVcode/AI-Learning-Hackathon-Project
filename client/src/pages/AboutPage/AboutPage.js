import React from 'react';
import { FaBookOpen, FaStar, FaLightbulb, FaUserAstronaut, FaPenNib } from 'react-icons/fa'; // Importing a few icons to enhance the UX

import './AboutPage.css'; // This assumes you will style the component using a CSS file

const AboutPage = () => {
    return (
        <div className="about-container">

            <h1>Welcome to the World of Story Driven Learning!</h1>
            <hr />

            <section className="intro-section">
                <FaBookOpen className="about-icon" />
                <p>Let Learning Unfold Like Never Before!</p>
            </section>

            <h2>A Journey Beyond Traditional Learning</h2>
            <p>Remember when we were kids and couldn’t wait to hear another bedtime story? The dragons, the faraway lands, the heroes, and their unforgettable adventures? What if we told you that learning could be just as thrilling?</p>
            <p><strong>Story Driven Learning</strong> takes you on a fantastical journey where lessons are not just facts and figures but tales that engage, entertain, and educate all at once.</p>

            <h2>Why Story Driven Learning?</h2>
            
            <div className="reasons-container">
                <div className="reason">
                    <FaStar className="about-icon" />
                    <p>Relatable & Memorable</p>
                </div>
                <div className="reason">
                    <FaUserAstronaut className="about-icon" />
                    <p>Engagement Boost</p>
                </div>
                <div className="reason">
                    <FaLightbulb className="about-icon" />
                    <p>Holistic Learning</p>
                </div>
            </div>

            <h2>A New Chapter in Education</h2>
            <p>Remember when we were kids and couldn’t wait to hear another bedtime story? The dragons, the faraway lands, the heroes, and their unforgettable adventures? What if we told you that learning could be just as thrilling?

Story Driven Learning takes you on a fantastical journey where lessons are not just facts and figures but tales that engage, entertain, and educate all at once.

</p>

            <h2>What Our Learners Say</h2>
            <blockquote>
                <p>"I've never been so hooked on a course..."</p>
                <footer>- Alexa M.</footer>
            </blockquote>
            <blockquote>
                <p>"Story Driven Learning not only helped me..."</p>
                <footer>- Raj K.</footer>
            </blockquote>

            <h2>Join Us on this Magical Journey</h2>
            <p>Dive deep into the oceans of knowledge, scale the mountains of challenging concepts, and embark on a learning adventure like no other. With Story Driven Learning, every lesson becomes a page-turner.</p>

            {/* <footer>
                <FaPenNib className="about-icon" />
                <p>© Story Driven Learning. Crafting unforgettable learning journeys.</p>
            </footer> */}
        </div>
    );
};

export default AboutPage;
