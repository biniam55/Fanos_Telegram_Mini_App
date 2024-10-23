// UserProfile.js
import React from 'react';
import './UserProfile.css'; // Import the CSS file for styling

const UserProfile = ({ username }) => {
  return (
    <div className="user-profile">
      <img 
        src="https://via.placeholder.com/100" // Replace with your user's photo URL
        alt="User"
        className="user-photo"
      />
      <h2 className="welcome-message">Welcome, {username}!</h2>
    </div>
  );
};

export default UserProfile;
