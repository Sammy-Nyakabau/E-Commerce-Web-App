/* eslint-disable */
import React, { Component } from "react";
import "./Shop.css"
import ProductList from './ProductList';
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
            <Link to="/shop_jetliners">
            <li>
              <a href="#Jet Liners">Jet Liners</a>
            </li>
            </Link>
            </ul>
        </div>
          <ProductList
            products={this.state.products} />
      </div>
    );
  }
}


export default Shop;
