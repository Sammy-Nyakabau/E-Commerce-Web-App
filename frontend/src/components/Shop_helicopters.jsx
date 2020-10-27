/* eslint-disable */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductList_helicopters from "./ProductList_helicopters";
import { getHelicopters } from "../services/categoriesService";
import "../styles/Shop.css";
import "../styles/grid.css";

class Shop extends Component {
  state = {
    helicopters: [],
  };

  async componentDidMount() {
    const { data: helicopters } = await getHelicopters();

    this.setState({
      helicopters,
    });
  }

  render() {
    return (
      <div className="shop">
        <div className="shop_banner">
          <img src="https://i.ibb.co/1vL1YBf/Sukhoi-Su-30-military-aircraft-man-black-background-1920x1080.jpg" />
        </div>
        <div className="shop_banner_heading">
          <h1>SHOP</h1>
        </div>
        <div className="shop_bar">
          <ul>
            <Link to="/shop_helicopters">
              <li>
                <a href="#Helicpters">Helicopters</a>
              </li>
            </Link>
            <Link to="/shop_aircrafts">
              <li>
                <a href="#Aircraft">Aircraft</a>
              </li>
            </Link>
            <Link to="/shop_unmannedAerialSystems">
              <li>
                <a href="#Unmanned Aerial Systems">Unmanned Aerial Systems</a>
              </li>
            </Link>
            <Link to="/shop_jetLiners">
              <li>
                <a href="#Jet Liners">Jet Liners</a>
              </li>
            </Link>
          </ul>
        </div>
        <ProductList_helicopters helicopters={this.state.helicopters} />
      </div>
    );
  }
}

export default Shop;
