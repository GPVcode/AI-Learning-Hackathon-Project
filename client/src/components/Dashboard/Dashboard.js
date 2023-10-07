import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  if(!user) {
        return <p>Loading...</p>;
  }

  console.log("user: ", user)

  return (
    <div>
      <h1>Welcome to the Dashboard, {user.username}!</h1>
      {/* Other dashboard content goes here */}
    </div>
  );
};

export default Dashboard;
