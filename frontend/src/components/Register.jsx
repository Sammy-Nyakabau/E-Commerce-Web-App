/* eslint-disable */
import React, { useState } from "react";
import "../styles/Login.css";
import { register, login } from "../services/authService";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const {data: user} = await register(username, email, password);

      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      if (user) {
        history.push("/")
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
        <h1>Register</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

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
            onClick={registerUser}
            className="login__signInButton"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
