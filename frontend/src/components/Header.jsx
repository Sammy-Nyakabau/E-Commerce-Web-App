/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStateValue } from "../providers/StateProvider";
import { addWishlist } from "../services/wishlistService";
import { addBasket } from "../services/basketService";
import "../styles/Header.css";

function Header() {
  const [header, setHeader] = useState(false);
  const [{ basket, wishlist, user }, dispatch] = useStateValue();

  const Logout = async () => {
    let items = [];
    let wishes = [];
    basket.forEach((product) => {
      items.push({
        product: product._id,
        name: product.name,
        description: product.description,
        image: product.image,
        category: product.category,
        price: product.price,
        rating: product.rating,
      });
    });
    wishlist.forEach((product) => {
      wishes.push({
        product: product._id,
        name: product.name,
        description: product.description,
        image: product.image,
        category: product.category,
        price: product.price,
        rating: product.rating,
      });
    });

    await addWishlist(user._id, wishes);
    await addBasket(user._id, items);
      

    dispatch({
      type: "SET_USER",
      user: null,
    });
    dispatch({
      type: "EMPTY_BASKET",
    });
    dispatch({
      type: "EMPTY_WISHLIST", 
    });
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
              <Link to="/">
                <span className="header__text" onClick={Logout}>
                  LOGOUT
                </span>
              </Link>
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
