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
    <div>
      <div className="login">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
  
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input type={"submit"} value="login"></input>
        </form>
        {/* <NavLink to="/thankyou"><button className="pay-btn">PAY NOW</button></NavLink> */}
        <NavLink to="/Signup">
     
          
          <button>Signup</button>
        </NavLink>
      </div>
      <div className="login-img">
      <motion.img
            className="welcome"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
            src="https://s3.amazonaws.com/media.thecrimson.com/photos/2010/03/09/002059_1229422.jpg"
            alt="image"
          />
      </div>
    </div>
  );
}

export default Login;
