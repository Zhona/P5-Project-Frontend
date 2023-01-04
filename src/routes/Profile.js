import React from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user, setUser }) {
  console.log(user, "from profile");
  const navigate = useNavigate();


  // console.log(user);
  return (
    <div className="profile">
      <h1>Welcome {user.username}</h1>
      <p>{user.name}</p>

      <button
        onClick={() => {
          localStorage.removeItem("jwt");
          navigate("/");
          setUser("");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
