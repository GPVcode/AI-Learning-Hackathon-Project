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
import ProjectDetail from './components/ProjectDetail/ProjectDetail.js'; 
import ProjectLesson from './components/ProjectLesson/ProjectLesson.js';
import Step from './components/ProjectLesson/Step.js';  
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer'

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(reauthenticate());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <HomePage />
              )
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<AuthForm mode="login" />} />
          <Route path="/register" element={<AuthForm mode="register" />} />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/projects/:projectId/lessons/:lessonId" element={<ProjectLesson />} />
          <Route path="/projects/:projectId/lessons/:lessonId/steps/:stepId" element={<Step />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
