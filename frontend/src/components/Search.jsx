/* eslint-disable */
import React, { Component } from "react";
import "./Search.css";
import ProductList from "./ProductList";
import { getProducts } from "../services/productService";
import "./grid.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


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
        <div id="shop_banner">
        </div>

        <div className="shop_banner_heading">
          <h1>Search</h1>
        </div>
        <form>
          <label for="fname">Search</label>
          <input className="inputbox" type="text" id="fname" name="fname" />
        </form>

        {/* <div className="shop_bar">
        </div> */}
        <div className="search_content">
        <ProductList products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default Shop;
