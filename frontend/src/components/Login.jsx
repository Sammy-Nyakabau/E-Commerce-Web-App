/* eslint-disable */
import React, { useState } from "react";
import "../styles/Login.css";
import { login } from "../services/authService";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const data = await login(username, password);
      if (data) {
        history.push("/");
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex);
      }
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Username</h5>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>By signing-in you agree to the Aviato's Conditions of Use & Sale.</p>

        <button className="login__registerButton">
          Create your Aviato Account
        </button>
      </div>
    </div>
  );
}

export default Login;
