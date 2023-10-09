import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./CourseDetail.css"; // Assuming you create a CSS file for styling
import computer from "./computer.png";

function CourseDetail() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the course details based on the courseId
    axios
      .get(`/api/courses/${courseId}`)
      .then((response) => {
        if (response.data.success) {
          setCourse(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching course details: ", error);
        setError("Failed to fetch course details. Please try again.");
      });

    // Fetch lessons associated with the course
    axios
      .get(`/api/courses/${courseId}/lessons`)
      .then((response) => {
        if (response.data.success) {
          setLessons(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching lessons: ", error);
        setError("Failed to fetch lessons. Please try again.");
      });
  }, [courseId]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!course) {
    return <div>Loading...</div>;
  }

  // Determine if the user has started the course
  const hasStarted = false; // Replace with actual logic, e.g. checking user progress

  return (
    <div
      className="course-detail-container"
      style={{ backgroundImage: `url(${computer})` }}
    >
      <h2 style={{ backgroundColor: "#F6AE2D" }}>{course.title}</h2>
      <p>{course.description}</p>
      <span>Difficulty: {course.difficulty}</span>
      <Link to={`/course/${courseId}/lesson/1`}>
        <button>{hasStarted ? "Continue Course" : "Start Course"}</button>
      </Link>
      <div className="lesson-overview">
        <h3>Lessons:</h3>
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link to={`/course/${courseId}/lesson/${lesson.id}`}>
                {lesson.title} - {lesson.description}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseDetail;
