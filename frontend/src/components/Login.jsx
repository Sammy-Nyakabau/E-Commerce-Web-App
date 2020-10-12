/* eslint-disable */
import React, { useState } from "react";
import "../styles/Login.css";
import auth from "../services/authService";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.login(username, password)

  }


  return (
    <div className="login">
      <Link to="/">
        <p>AVIATO</p>
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/jet_fighter/jet_fighter_PNG34.png"
        />
      </Link>

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

        <p>
          By signing-in you agree to the Aviato's Conditions of Use &
          Sale. 
        </p>

        <button onClick={} className="login__registerButton">
          Create your Aviato Account
        </button>
      </div>
    </div>
  );
}

export default Login;
