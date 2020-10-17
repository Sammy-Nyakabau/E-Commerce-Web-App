/* eslint-disable */
import React, { Component } from "react";
import "./Shop.css";
import ProductList from "./ProductList";
import { getProducts } from "../services/productService";
import "./grid.css";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class Shop extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data: products } = await getProducts();

    this.setState({
      products,
    });
    console.log(this.state.products);
  }

  render() {
    console.log(this.state);

    return (
      <div className="shop">
        <div id="search__banner">
          <img src="https://i.ibb.co/1vL1YBf/Sukhoi-Su-30-military-aircraft-man-black-background-1920x1080.jpg" />
        </div>

        <div className="shop_banner_heading">
          <h1>Search</h1>
        </div>
        
        {/* <div className="shop_bar">
        </div> */}
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default Shop;
