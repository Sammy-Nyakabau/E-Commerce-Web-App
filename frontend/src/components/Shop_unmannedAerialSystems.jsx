/* eslint-disable */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductList_unmannedAerialSystems from "./ProductList_unmannedAerialSystems";
import { getUnmannedAerialSystems } from "../services/categoriesService";
import "../styles/grid.css";
import "../styles/Shop.css";

class Shop extends Component {
  state = {
    unmannedAerialSystems: [],
  };

  async componentDidMount() {
    const { data: unmannedAerialSystems } = await getUnmannedAerialSystems();

    this.setState({
      unmannedAerialSystems,
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
                <a href="#unmannedAerialSystems">Unmanned Aerial Systems</a>
              </li>
            </Link>
            <Link to="/shop_jetLiners">
              <li>
                <a href="#Jet Liners">Jet Liners</a>
              </li>
            </Link>
          </ul>
        </div>
        <ProductList_unmannedAerialSystems
          unmannedAerialSystems={this.state.unmannedAerialSystems}
        />
      </div>
    );
  }
}

export default Shop;
