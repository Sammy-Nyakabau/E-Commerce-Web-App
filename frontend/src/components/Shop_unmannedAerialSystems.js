/* eslint-disable */
import React, { Component } from "react";
import "./Shop.css";
import ProductList_unmannedAerialSystems from "./ProductList_unmannedAerialSystems";
import { getProducts } from "../services/productService";
import {Link} from 'react-router-dom';
// import "./../materialize.css";
import "./grid.css";
import {
  getAircraft,
  getHelicopters,
  getJetLiners,
  getUnmannedAerialSystems,
} from "../services/categoriesService";

class Shop extends Component {
  state = {
    products: [],
    helicopters: [],
    aircrafts: [],
    jetLiners: [],
    unmannedAerialSystems: [],
  };

  async componentDidMount() {
    const { data: products } = await getProducts();
    const { data: helicopters } = await getHelicopters();
    const { data: aircrafts } = await getAircraft();
    const { data: jetLiners } = await getJetLiners();
    const { data: unmannedAerialSystems } = await getUnmannedAerialSystems();

    this.setState({
      products,
      helicopters,
      aircrafts,
      jetLiners,
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
        <ProductList_unmannedAerialSystems unmannedAerialSystems={this.state.unmannedAerialSystems} />
      </div>
    );
  }
}

export default Shop;
