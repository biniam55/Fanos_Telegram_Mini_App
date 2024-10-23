import React from "react";
import "./UserProfile.css"; // Import the CSS file for styling

const UserProfile = ({ username, photoUrl }) => {
  // Get the first letter of the username for the fallback avatar
  const firstLetter = username ? username.charAt(0).toUpperCase() : "U"; // Default to "U" if username is empty

  return (
    <div className="user-profile">
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={`${username}'s profile`}
          className="profile-picture"
        />
      ) : (
        // Fallback if no photoUrl: Display a div with the first letter
        <div className="fallback-avatar">
          {firstLetter}
        </div>
      )}
      <h2 className="welcome-message">Welcome, {username}!</h2>
    </div>
  );
};

export default UserProfile;
