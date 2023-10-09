import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaFlask, FaBook, FaTools, FaCalculator } from 'react-icons/fa';
import './Dashboard.css';
import StoryLearning from '../../assets/banner.png';



const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  if(!user) {
        return <p>Loading...</p>;
  }

  const handleProfileNavigation = () => {
    navigate("/profile");
  };

  const categories = [
    { name: "Programming", icon: <FaCode /> },
    { name: "Science", icon: <FaFlask /> },
    { name: "History", icon: <FaBook /> },
    { name: "Math", icon: <FaCalculator /> },
  ];
  
  const CategoryBlock = ({ name, icon }) => (
    <div className="category-block">
      {icon}
      <h3>{name}</h3>
    </div>
  );
  
  return (
    <div className="dashboard-container">
      <h1>Welcome, {user && user.username}!</h1>
      <p>Your AI powered learning journey is just one click away. Dive in!</p>

      <section className="cta-banner" onClick={handleProfileNavigation}>
        <img src={StoryLearning} alt="Story Driven Learning" />
        <div className="cta-text">
          <h2>Story Driven Learning</h2>
          <p>Embark on an AI-powered learning journey with us. Dive into smart, personalized experiences tailored just for you.</p>
          <button className='dive-in'>Dive in!</button>
        </div>
      </section>

      <section className="browse-categories">
        <h2>Browse Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryBlock key={category.name} {...category} />
          ))}
        </div>
      </section>

      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <FaTools className="coming-soon-icon" />
          <h3>Under Construction</h3>
          <p>We're working hard to bring you the best courses. Stay tuned!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
