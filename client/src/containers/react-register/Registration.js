import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../layout/ErrorAlert";
import { cancelRegistration } from "../utils/api";
import RegistrationCard from "../react-profile/RegistrationCard";

export default function Registrations({ registrations }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleCancel(registrationId) {
    if (
      window.confirm(
        "Do you want to delete this profile? This cannot be undone."
      )
    ) {
      try {
        await cancelRegistration(registrationId);
        navigate.go();
      } catch (error) {
        setError(error);
      }
    }
  }
  return (
    <div>
      <ErrorAlert error={error} />
      {registrations.map((reservation) => (
        <div key={reservation.reservation_id}>
          <RegistrationCard user={reservation} handleCancel={handleCancel} />
        </div>
      ))}
    </div>
  );
}
