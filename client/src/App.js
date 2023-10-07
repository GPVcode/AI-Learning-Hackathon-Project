<<<<<<< HEAD
// src/App.js
import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reauthenticate } from './features/auth/authSlice';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import AuthForm from './components/AuthForm/AuthForm';
import HomePage from './components/HomePage/HomePage.js';
import Profile from './components/Profile/Profile';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Registration from "./react-register/register";
import NotFound from "./NotFound";
import Login from "./react-login/login";
import RegistrationCard from "./react-profile/RegistrationCard";
import "./App.css";
import { useEffect, useState } from "react";
>>>>>>> 3c2a0d5cc2638487063caccfbc3fb826447c802c

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
<<<<<<< HEAD
          <Route path="/profile" element={<Profile />} />

=======
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}
          />
          <Route path="/register" element={<Registration />} />
          <Route path="/user" element={<RegistrationCard />} />
          <Route element={<NotFound />} />
>>>>>>> 3c2a0d5cc2638487063caccfbc3fb826447c802c
        </Routes>
      </div>
    </Router>
  );
};

export default App;
