import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { login } from './authSlice.js';
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm.js";
import { createRegistration } from "../../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import "./style.css";

function Registration() {
    const dispatch = useDispatch();


    const handleRegister = (userData) => {
        // Make API call to register the user
    
        // If successful:
        dispatch(login(userData));
      };

  const history = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const abortController = new AbortController();
    async function getData() {
      try {
        setFormData({ ...initialFormState });
      } catch (error) {
        setError(error);
      }
    }
    getData();
    return () => abortController.abort();
    // eslint-disable-next-line
  }, []);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const controller = new AbortController();
    try {
      await createRegistration(formData, controller.signal);

      setFormData({ ...initialFormState });
    } catch (error) {
      setError(error);
    }
    return () => controller.abort();
  };

  return (
    <div className="form">
      <div className="form-body">
        <ErrorAlert error={error} />
        <RegistrationForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        //   formData={formData}
          history={history}
        />
      </div>
    </div>
  );
}
export default Registration;
