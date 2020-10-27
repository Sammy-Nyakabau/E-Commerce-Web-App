/* eslint-disable */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductList_jetLiners from "./ProductList_jetLiners";
import { getJetLiners } from "../services/categoriesService";
import "../styles/Shop.css";
import "../styles/grid.css";

class Shop extends Component {
  state = {
    jetLiners: [],
  };

  async componentDidMount() {
    const { data: jetLiners } = await getJetLiners();

    this.setState({
      jetLiners,
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
        <ProductList_jetLiners jetLiners={this.state.jetLiners} />
      </div>
    );
  }
}

export default Shop;
