import React, { Component } from "react";
import "./Shop.css";
import ProductList_jetLiners from "./ProductList_jetLiners";
import { getProducts } from "../services/productService";
import {Link} from 'react-router-dom';
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
    console.log(this.state.products);
  }

  render() {
    console.log(this.state);

    return (
      <div className="shop">
        <div className="shop_banner">
          <img src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1804/Sukhoi-Su-30-military-aircraft-man-black-background_1920x1080.jpg" />
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
            <Link to="/shop_unmanned Aerial Systems">
            <li>
              <a href="#Unmanned Aerial Systems">Unmanned Aerial Systems</a>
            </li>
            </Link>
            <Link to="/shop_jetliners">
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
