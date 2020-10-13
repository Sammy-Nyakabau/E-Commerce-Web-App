import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
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
            <span className="explore">EXPLORE</span>
          </li>
          <li>
            <span className="shop">SHOP</span>
          </li>
          <li>
            <ShoppingBasketIcon/>
          </li>
          <li>
            <PersonIcon/>
          </li>
          <li>
              <SearchIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;