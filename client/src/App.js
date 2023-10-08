// src/App.js
import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reauthenticate } from './features/auth/authSlice';
import Navbar from './components/Navbar/Navbar.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import AuthForm from './components/AuthForm/AuthForm';
import HomePage from './pages/HomePage/HomePage.js';
import Profile from './pages/Profile/Profile.js';
import CourseDetail from './components/CourseDetail/CourseDetail.js'; // assuming you've created this component as described earlier
import LessonPage from './pages/LessonPage/LessonPage';
const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(reauthenticate());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="app-container"> 
        <Routes>

          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <HomePage />} />
          <Route path="/login" element={<AuthForm mode="login" />} />
          <Route path="/register" element={<AuthForm mode="register" />} />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />}
          />
          <Route path="/profile" element={<Profile />} />

          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
