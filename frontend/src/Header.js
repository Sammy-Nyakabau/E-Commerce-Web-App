import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./providers/StateProvider";
import { logout } from "./services/authService";

function Header() {
  const [{ basket, user }] = useStateValue();

  const Logout = async () => {
    await logout();
  };
  return (
    <div className="header">
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
            <Link to="/user_page">
            <li>
              <PersonIcon />
            </li>
            </Link>
          )}
          <Link to="/wishlist">
            <li className="header__text">
              <BookmarksIcon />
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
