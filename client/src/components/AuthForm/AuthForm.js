/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/AuthForm/AuthForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../../features/auth/authSlice';
import './AuthForm.css'


const AuthForm = ({ mode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const registrationSuccess = useSelector(state => state.auth.registrationSuccess);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const { username, email, password } = formData;

  useEffect(() => {
      if (registrationSuccess) {
          alert("Registration successful! Please log in.");
          navigate("/login");
      }
  }, [registrationSuccess, navigate]);
  
  useEffect(() => {
    if (isAuthenticated) {
        navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (mode === 'register') {
        dispatch(register({ username, email, password }));
    } else if (mode === 'login') {
        dispatch(login({ email, password }));
    }
  };
 

  return (
    <div className="auth-form-container">
      <div className="auth-form-card">
        <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        {mode === 'register' && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
          {mode === 'login' ? (
            <>
              <button type="submit" disabled={isLoading}>
                Login
              </button>
              <p>
                Not yet registered?{" "}
                <a href="" onClick={() => navigate("/register")}>
                  Register Now
                </a>
              </p>
            </>
          ) : (
            <>
              <button type="submit" disabled={isLoading}>
                Sign Up
              </button>
              <p>
                Already have an account?{" "}
                <a href="" onClick={() => navigate("/login")}>
                  Login
                </a>
              </p>
            </>
          )}
          {error && <span>{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
