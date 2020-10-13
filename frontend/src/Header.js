import React from "react";
import SearchIcon from '@material-ui/icons/Search';
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
            <span className="login">LOGIN</span>
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
