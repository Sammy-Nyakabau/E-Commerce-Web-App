/* eslint-disable */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import { getProducts } from "../services/productService";
import "../styles/Shop.css";
import "../styles/grid.css";

class Shop extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data: products } = await getProducts();

    this.setState({
      products,
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
            <Link to="/shop_jetliners">
              <li>
                <a href="#Jet Liners">Jet Liners</a>
              </li>
            </Link>
          </ul>
        </div>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default Shop;
