/* eslint-disable */
import React, { useState } from "react";
import "../styles/Login.css";
import { toast } from "react-toastify";   
import { register} from "../services/authService";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../providers/StateProvider";


function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [{}, dispatch] = useStateValue();

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const {data: user} = await register(username, email, password);

      if (user) {
        // the user just logged in / the user was logged in
        toast.info(`Hello ${user.username}, you are logged in`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      if (user) {
        history.push("/");
      }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error('Oops, check your username, email or password and try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
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
