import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./providers/StateProvider";
import { logout } from "./services/authService";

function Header() {
  const [header, setHeader] = useState(false);
  const [{ basket, user }] = useStateValue();

  const Logout = async () => {
    await logout();
  };

  const changeBackground = () => {
    console.log(window.ScrollY);
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={header ? "header active" : "header"}>
      <Link to="/">
        <div className="header__logo">
          <p>AVIATO</p>
        </div>
      </Link>
      <div className="header__navbar">
        <ul>
          <Link to="/search">
            <li className="header__text">
              <SearchIcon />
            </li>
          </Link>
          <li>
            <Link to="/shop">
              <span className="header__text">SHOP</span>
            </Link>
          </li>
          {user && (
            <li>
              <Link to="/Order_page">
                <span className="header__text">ORDERS</span>
              </Link>
            </li>
          )}
          {user && (
            <Link to="/user_page">
              <li className="header__text">
                <PersonIcon />
              </li>
            </Link>
          )}
          <Link to="/wishlist">
            <li className="header__text">
              <FavoriteIcon />
            </li>
          </Link>
          <li>
            <Link to="/checkout">
              <div className="basket header__text">
                <ShoppingBasketIcon />
                <span className="basketCount">{basket.length}</span>
              </div>
            </Link>
          </li>
          <li>
            {user ? (
              <a href="/">
                <span className="header__text" onClick={Logout}>
                  LOGOUT
                </span>
              </a>
            ) : (
              <Link to="/login">
                <span className="header__text">LOGIN</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
