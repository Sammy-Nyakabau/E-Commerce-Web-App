import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <p>AVIATO</p>
      </div>
      <div className="header__navbar">
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>
            <span>SHOP</span>
          </li>
          <li>
            <PersonIcon />
          </li>
          <li>
            <BookmarksIcon />
          </li>
          <li>
            <div className="basket">
              <ShoppingBasketIcon />
              <span className="basketCount">0</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
