/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import Categories from "./Categories";
import "aos/dist/aos.css";
import "../styles/Home.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="homepage">
      <div className="home__container">
        <div className="banner">
          <img src="https://i.ibb.co/cr1MryD/Banner-Aria-1440x760.jpg" />
          <div
            data-aos="fade-up"
            data-aos-once="false"
            className="banner__words"
          >
            <h2>Air: flying solutions for multiple missions</h2>
            <Link to="/shop">
              <button>
                <p>All Products</p>
              </button>
            </Link>
          </div>
        </div>

        <div className="home__row">
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default Home;
