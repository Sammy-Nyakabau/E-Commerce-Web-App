/* eslint-disable */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/authService";
import { getBasket } from "../services/basketService";
import { getWishlist } from "../services/wishlistService";
import { useStateValue } from "../providers/StateProvider";
import "../styles/Login.css";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [{}, dispatch] = useStateValue();

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const { data: user } = await login(username, password);
      console.log(user);

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
        let basketProducts = [];
        const { data: userBasket } = await getBasket(user._id);
        if (userBasket.length !== 0) {
          userBasket[userBasket.length - 1].basketItems.forEach((prod) => {
            basketProducts.push(prod);
          });
        }
          console.log(basketProducts);
          dispatch({
            type: "SET_BASKET",
            items: basketProducts,
          });
        let wishlistProducts = [];
        const { data: userWishlist } = await getWishlist(user._id);
        if (userWishlist.length !== 0) {
          userWishlist[userWishlist.length - 1].wishlistItems.forEach(
            (prod) => {
              wishlistProducts.push(prod);
            }
          );
        }
          console.log(wishlistProducts);
          dispatch({
            type: "SET_WISHLIST",
            items: wishlistProducts,
          });

        history.push("/");
      }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error("Invalid Username or Password!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("error");
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
        <Link to="/register">
          <button className="login__registerButton">
            Create your Aviato Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
