import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useUserContext } from "../Context/UserContext";// Adjust the path accordingly

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserContext();
  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(`http://localhost:8087/placement-system/api/students/login`, { username, password })
      .then((result) => {
        if (result.status === 200) {
          console.log("Login successful");
          alert("Logged in successfully!");

          // Store the username in localStorage
          localStorage.setItem("studentUsername", username); // Store the username here

          logIn(username); // Call the logIn function (if needed)

          // Navigate to the student's homepage
          nav("/Common/SHome");
        } else {
          console.log(result.status);
          console.log("Login unsuccessful: error 404");
          alert("Login unsuccessful - please check username and password");
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.status);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  return (
    <div className="login">
      <div className="login-child" />
      <b className="nsec">
        <span className="nsec-txt">
          <span>ICON</span>
          <span className="e"></span>
        </span>
      </b>
      <b className="placement">
        <span className="nsec-txt">
          <span>placement</span>
          <span className="e">.</span>
        </span>
      </b>

      <b className="home"><a href="/">Home</a></b>
      <div className="login-item">
        <div className="cont1">
          <div className="text1">Welcome Back!</div>
          <div className="text2">Ready to take the next step in your career?</div>
          <div className="text2">
            <span>Login to your account to</span>
            <span> start exploring </span>
            <div className="text2">job opportunities</div>
          </div>
        </div>

        <div className="login-inner">
          <div className="login1">Login</div>
          <div className="please-enter-your">Please enter your credentials!</div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label className="form-label">
              Username:
              <input
                className="form-input"
                type="text"
                value={username}
                placeholder="USERNAME"
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <br />
            <label className="form-label">
              Password:
              <input
                className="form-input"
                type="password"
                value={password}
                placeholder="PASSWORD"
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <button className="form-button" type="submit">Login</button>
          </form>

          <div className="not-registered-register-container">
            <span>{`Not registered? `}</span>
            <b className="register"><a href="/SignUp">Register</a></b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;









