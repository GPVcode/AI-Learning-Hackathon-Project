import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Profile.css";

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
            <div className='first'>
                <span className='left'></span>
                
                <span className='middle'>
                    <label className='first-label'>
                    <div className="profile-container">
                        <h2>Welcome back, {user && user.username}!</h2>
                        <p>It's wonderful to see you return to the world of knowledge. The path of learning is an everlasting journey, filled with twists, turns, and surprises. Every time you dive into a new lesson, you're embarking on a new adventure. Let's continue this exciting quest together!</p>
                        <p>Username: {user && user.username}</p>
                        <p>Email: {user && user.email}</p>
                    </div>
                    </label>
                </span>
                <span className='right'></span>
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

            </div>
          </label>
        </span>
        <span className="right"></span>
      </div>

      <div className="my-courses-section">
        <h2>My Courses</h2>
        {courses &&
          courses.map((course) => (
            <div className="course-card" key={course.id}>
              <h3>
                <Link to={`/course/${course.id}/lesson/1`}>{course.title}</Link>
              </h3>
              <p>{course.description}</p>
              <span>Difficulty: {course.difficulty}</span>
            </div>
          ))}
      </div>

      <div className="my-courses-section">
        <div className="course-card">
          <div className="course-content" key="">
            <h3>Project 1</h3>
            <p>"Recreate the ancient Task Board of Tasktopia."</p>
            <span>Difficulty: easy</span>
          </div>
        </div>
        <div className="course-card">
          <div className="course-content" key="">
            <h3>Project 2</h3>
            <p>"Recreate the ancient Task Board of Tasktopia."</p>
            <span>Difficulty: easy</span>
          </div>
        </div>
        <div className="course-card">
          <div className="course-content" key="">
            <h3>Project 3</h3>
            <p>"Recreate the ancient Task Board of Tasktopia."</p>
            <span>Difficulty: easy</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
