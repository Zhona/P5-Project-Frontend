import React, { useState } from "react";
import { motion } from "framer-motion";

import { NavLink, useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    console.log(username, password);
    e.preventDefault();
    fetch("http://localhost:3000/auth/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => {
      res.json().then((data) => {
        if (res.ok) {
          console.log(data, "login");
          localStorage.setItem("jwt", data.token);
          setUser(data.user);
          navigate("/profile");
        } else {
          setErrors(Object.entries(data.errors));
        }
      });
    });
  };

  return (
    <div className="login-parent">
      <div className="login">
        {/* <h1>LOGIN</h1> */}
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="ls-button" type={"submit"} value="login">
            Login
          </button>
        </form>
        {/* <NavLink to="/thankyou"><button className="pay-btn">PAY NOW</button></NavLink> */}
        <NavLink to="/Signup">
          <a>Don't have an account?</a>
        </NavLink>
      </div>
      <div className="login-img">
        <motion.img
          className="welcome"
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
          src="images/mad-hatter-mushroom.png"
          alt="image"
        />
      </div>
    </div>
  );
}

export default Login;
