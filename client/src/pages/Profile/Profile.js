import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Profile.css";
import adventureImg from '../../assets/banner.png';

function Profile() {
  const [courses, setCourses] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    axios
      .get("/api/users/projects", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          setCourses(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching courses: ", error);
      });
  }, []);


    return (
        <>
        <div className='first' style={{ backgroundImage: `url(${adventureImg})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px 0' }}>
    <div className='middle' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '15px', padding: '15px' }}>
        <div className="profile-container">
            <h2 style={{ color: 'aliceblue' }}>Welcome back, {user && user.username}!</h2>
            <p style={{ color: 'aliceblue' }}>It's wonderful to see you return to the world of knowledge. The path of learning is an everlasting journey, filled with twists, turns, and surprises. Every time you dive into a new lesson, you're embarking on a new adventure. Let's continue this exciting quest together!</p>
            <p style={{ color: 'aliceblue' }}>Username: {user && user.username}</p>
            <p style={{ color: 'aliceblue' }}>Email: {user && user.email}</p>
        </div>
    </div>
</div>

            <div className="my-courses-section">
                <h2>My Courses</h2>
                {courses && courses.map(course => (
                    <div className="course-card" key={course.id}>
                        <h3>
                            <Link to={`/projects/${course.id}`}>
                                {course.title}
                            </Link>
                        </h3>
                        <p>{course.description}</p>
                        <span>Difficulty: {course.difficulty}</span>
                    </div>
                ))}

        <span className="right"></span>
      </div>

      <div className="my-courses-section">
        <h2>Other Projects</h2>
        <div className="course-card">
            <div className="course-content">
                <h3>Adventures in AlgoLand</h3>
                <p>"Embark on an epic journey through the mystical land of AlgoLand, where algorithms come to life. Witness firsthand the battles of 'Sortonia', get lost in the 'Maze of Recursion', and sail the 'Graph Seas'. Each chapter unravels a new algorithmic concept, teaching you its essence through captivating tales."</p>
                <span>Difficulty: medium</span>
            </div>
        </div>
        <div className="course-card">
            <div className="course-content">
                <h3>The Chronicles of Python</h3>
                <p>"Journey through the cryptic labyrinths of Pythonic challenges."</p>
                <span>Difficulty: hard</span>
            </div>
        </div>
        <div className="course-card">
            <div className="course-content">
                <h3>CSS Kingdoms: The Quest for Flexbox</h3>
                <p>"Venture forth and conquer the enigmatic realms of Flexbox!"</p>
                <span>Difficulty: easy</span>
            </div>
        </div>
    </div>
    </>
  );
}

export default Profile;

      