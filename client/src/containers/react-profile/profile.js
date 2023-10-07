import React, { useState } from "react";
import { useNavigate } from "react-router";
import ErrorAlert from "../../layout/ErrorAlert";
import { cancelRegistration } from "../../utils/api";
import RegistrationCard from "./RegistrationCard";

export default function Profile({ user, handleCancel }) {
  const [error, setError] = useState(null);
  const history = useNavigate();

  async function handleCancel(registrationId) {
    if (
      window.confirm(
        "Do you want to delete your profile. This cannot be undone."
      )
    ) {
      try {
        await cancelRegistration(registrationId);
        history.go();
      } catch (error) {
        setError(error);
      }
    }
  }
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center flex-wrap">
      <ErrorAlert error={error} />
      {user.map((registration) => (
        <div key={registration.id}>
          <RegistrationCard user={registration} handleCancel={handleCancel} />
        </div>
      ))}
    </div>
  );
}
