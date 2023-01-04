import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ user, setUser, setIsSignedIn }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState("");

  function handleFirstname(e) {
    setFirstName(e.target.value);
  }

  function handleLastname(e) {
    setLastName(e.target.value);
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }


  function handleSubmit(e) {
    console.log("handle submit function");
    e.preventDefault();
    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password,
        email: email,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          localStorage.setItem("jwt", data.jwt);
          navigate("/profile")
          setUser(data.user)
        });
      } else {
        console.log("error");
      }
    });
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="email"
            onChange={handleEmail}
          />
          <div className="form-group">
            <input
              className="form-control"
              type="text"
  
              placeholder="Username"
              onChange={handleUsername}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Password"
              onChange={handlePassword}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
              onChange={handleLastname}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
              onChange={handleFirstname}
            />
          </div>
        </div>
      </form>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Sign Up
      </button>
    </div>
  );
}
export default Signup;
