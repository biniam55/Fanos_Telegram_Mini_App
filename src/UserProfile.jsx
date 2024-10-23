// UserProfile.js
import React from 'react';
import './UserProfile.css'; // Import the CSS file for styling

const UserProfile = ({ username, photoUrl }) => {
  return (
    <div className="user-profile">
      {photoUrl && <img src={photoUrl} alt={`${username}'s profile`} className="profile-picture" />} {/* Display profile picture */}
      <h2 className="welcome-message">Welcome, {username}!</h2>
    </div>
  );
};

export default UserProfile;
