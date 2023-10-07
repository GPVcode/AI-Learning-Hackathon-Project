import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';

function Login() {
  const dispatch = useDispatch();

  const handleLogin = (credentials) => {
    // Make API call to login the user

    // If successful:
    dispatch(login(credentials));
  };

  return (
    <div>
      {/* Login form goes here */}
    </div>
  );
}

export default Login;
