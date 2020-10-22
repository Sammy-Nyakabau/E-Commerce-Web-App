/* eslint-disable */

import React, { Component } from "react";
import "./Search.css";
import ProductList from "./ProductList";
import { getProducts } from "../services/productService";
import "./grid.css";

class Search extends Component {
  state = {
    products: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const { data: products } = await getProducts();

    this.setState({
      products,
    });
    console.log(this.state.products);
  }

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  render() {
    const { searchQuery, products: allProducts } = this.state;
    let filtered = allProducts;
    if (searchQuery)
      filtered = allProducts.filter((p) =>
        p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    console.log(filtered)

    return (
      <div className="shop">
        <div id="shop_banner">
        <img src="https://coolbackgrounds.io/images/backgrounds/black/black-contour-f41038db.svg"/>
        </div>

        <div className="shop_banner_heading">
          
          <h1>Search</h1>
        </div>
        <form>
          <label for="fname">Search</label>
          <input
            className="inputbox"
            type="text"
            id="fname"
            name="fname"
            value={searchQuery}
            onChange={e => this.handleSearch(e.currentTarget.value)}
          />
        </form>

        {/* <div className="shop_bar">
        </div> */}
        
        <div className="search_content">
        <div className="shop_bar">
          <ul>
              <li>
                <a href="#Helicpters">Price<span><ArrowDropUpIcon/></span></a>
              </li>
              <li>
                <a href="#Aircraft">Popularity<span><ArrowDropUpIcon/></span></a>
              </li>
              <li>
                <a href="#Unmanned Aerial Systems">Rating<span><ArrowDropUpIcon/></span></a>
              </li>
              <li>
                <a href="#Jet Liners">Reviews<span><ArrowDropUpIcon/></span></a>
              </li>
          </ul>
        </div>
        <ProductList products={filtered} />
        </div>
      </div>
    );
  }
}

export default Search;
