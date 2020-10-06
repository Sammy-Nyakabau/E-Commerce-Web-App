/* eslint-disable */
import React from "react";
import "./Home.css";
import Categories from "./Categories";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="banner">
          <img src="https://www.leonardocompany.com/o/adaptive-media/image/10059482/h_703/Banner%20Aria%201440x760.jpg?t=1583315858025" />
          <div className="banner__words">
            <h2>Air: flying solutions for multiple missions</h2>
            <button>
              <p>All Products</p>
            </button>
          </div>
        </div>
        <div className="heading">
          <ul>
            <li>Helicopters</li>
            <li>Aircraft</li>
            <li>Unmanned Aerial Systems</li>
            <li>Jet planes</li>
          </ul>
        </div>
        <div className="home__row">
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default Home;
