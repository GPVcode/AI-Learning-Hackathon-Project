import React, { useState } from "react";
import { useHistory } from "react-router";
import ErrorAlert from "../layout/ErrorAlert";
import { cancelRegistration } from "../utils/api";
import Profile from "../react-profile/profile";

export default function Registrations({ registrations }) {
  const [error, setError] = useState(null);
  const history = useHistory();

  async function handleCancel(registrationId) {
    if (
      window.confirm(
        "Do you want to delete this profile? This cannot be undone."
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
    <div>
      <ErrorAlert error={error} />
      {registrations.map((reservation) => (
        <div key={reservation.reservation_id}>
          <Profile reservation={registrations} handleCancel={handleCancel} />
        </div>
      ))}
    </div>
  );
}
