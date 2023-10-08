import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LessonPage.css';

function LessonPage() {
  const { courseId, lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the lesson details based on the courseId and lessonId
    axios.get(`/api/courses/${courseId}/lessons/${lessonId}`)
      .then(response => {
        if (response.data.success) {
          setLesson(response.data.data);
        }
      })
      .catch(error => {
        console.error("Error fetching lesson details: ", error);
        setError("Failed to fetch lesson details. Please try again.");
      });
  }, [courseId, lessonId]);

  const handleCompletion = () => {
    // Logic to mark lesson as completed
    // For simplicity, we'll navigate to the next lesson
    navigate(`/course/${courseId}/lesson/${parseInt(lessonId, 10) + 1}`);
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!lesson) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lesson-container">
      <h2>{lesson.title}</h2>
      <p>{lesson.content}</p>
      
      <div className="lesson-navigation">
        {lessonId > 1 && 
          <Link to={`/course/${courseId}/lesson/${parseInt(lessonId, 10) - 1}`} className="prev-lesson">Previous Lesson</Link>
        }
        <button onClick={handleCompletion} className="complete-lesson">Mark as Completed</button>
        <Link to={`/course/${courseId}/lesson/${parseInt(lessonId, 10) + 1}`} className="next-lesson">Next Lesson</Link>
      </div>
    </div>
  );
}

export default LessonPage;
