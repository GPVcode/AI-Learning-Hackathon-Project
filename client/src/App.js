// src/App.js
import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reauthenticate } from './features/auth/authSlice';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import AuthForm from './components/AuthForm/AuthForm';
import HomePage from './components/HomePage/HomePage.js'; 

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log("is Auth?: ", isAuthenticated)

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
