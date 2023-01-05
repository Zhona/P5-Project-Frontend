import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user, setUser }) {
  console.log(user, "from profile");
  const navigate = useNavigate();

  // console.log(user);
  return (
    <div className="profile">
      <div className="profile-card">
        <h1>Welcome {user.username}</h1>
        <p>{user.name}</p>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("jwt");
            navigate("/");
            setUser("");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
