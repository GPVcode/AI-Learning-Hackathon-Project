import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import { createRegistration } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import "./style.css";
function Registration() {
  const initialFormState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const history = useNavigate();
  const [formData, setFormData] = useState({ ...initialFormState });
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
      history.push(`/dashboard?date=${formData.reservation_date}`);
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
          formData={formData}
          history={history}
        />
      </div>
    </div>
  );
}
export default Registration;
