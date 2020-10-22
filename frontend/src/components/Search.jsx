/* eslint-disable */
import React, { Component } from "react";
import _ from "lodash";
import "./Search.css";
import ProductList from "./ProductList";
import { getProducts } from "../services/productService";
import "./grid.css";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

class Search extends Component {
  state = {
    products: [],
    searchQuery: "",
    sortColumn: { path: "name", order: "asc" },
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

  sortByPrice = () => {
    let sortColumn = { ...this.state.sortColumn };
    sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    this.setState({
      sortColumn: {
        path: "price",
        order: sortColumn.order,
      },
    });

    console.log(this.state.sortColumn);
  };
  sortByRating = () => {
    let sortColumn = { ...this.state.sortColumn };
    sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    this.setState({
      sortColumn: {
        path: "rating",
        order: sortColumn.order,
      },
    });

    console.log(this.state.sortColumn);
  };
  sortByPopularity = () => {
    let sortColumn = { ...this.state.sortColumn };
    sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    this.setState({
      sortColumn: {
        path: "admirers.length",
        order: sortColumn.order,
      },
    });

    console.log(this.state.sortColumn);
  };
  sortByReviews = () => {
    let sortColumn = { ...this.state.sortColumn };
    sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    this.setState({
      sortColumn: {
        path: "number of reviews",
        order: sortColumn.order,
      },
    });

    console.log(this.state.sortColumn);
  };

  render() {
    const { sortColumn, searchQuery, products: allProducts } = this.state;
    let filtered = allProducts;
    if (searchQuery)
      filtered = allProducts.filter((p) =>
        p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    filtered = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    return (
      <div className="shop">
        <div id="shop_banner">
          <img src="https://coolbackgrounds.io/images/backgrounds/black/black-contour-f41038db.svg" />
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
            autocomplete="off"
            placeholder="Type to search"
            value={searchQuery}
            onChange={(e) => this.handleSearch(e.currentTarget.value)}
          />
          {filtered.length < 50 && (
            <p className="search__results">{filtered.length} results found</p>
          )}
        </form>

        {/* <div className="shop_bar">
        </div> */}

        <div className="search_content">
          <div className="shop_bar">
            <ul>
              <li onClick={this.sortByPrice}>
                {this.state.sortColumn.path === "price" ? (
                  <a>
                    Price
                    {this.state.sortColumn.order === "asc" ? (
                      <span>
                        <ArrowDropUpIcon />
                      </span>
                    ) : (
                      <span>
                        <ArrowDropDownIcon />
                      </span>
                    )}
                  </a>
                ) : (
                  <a>Price</a>
                )}
              </li>
              <li onClick={this.sortByPopularity}>
                {this.state.sortColumn.path === "admirers.length" ? (
                  <a>
                    Popularity
                    {this.state.sortColumn.order === "asc" ? (
                      <span>
                        <ArrowDropUpIcon />
                      </span>
                    ) : (
                      <span>
                        <ArrowDropDownIcon />
                      </span>
                    )}
                  </a>
                ) : (
                  <a>Popularity</a>
                )}
              </li>
              <li onClick={this.sortByRating}>
                {this.state.sortColumn.path === "rating" ? (
                  <a>
                    Rating
                    {this.state.sortColumn.order === "asc" ? (
                      <span>
                        <ArrowDropUpIcon />
                      </span>
                    ) : (
                      <span>
                        <ArrowDropDownIcon />
                      </span>
                    )}
                  </a>
                ) : (
                  <a>Rating</a>
                )}
              </li>
              <li onClick={this.sortByReviews}>
                {this.state.sortColumn.path === "number of reviews" ? (
                  <a>
                    Reviews
                    {this.state.sortColumn.order === "asc" ? (
                      <span>
                        <ArrowDropUpIcon />
                      </span>
                    ) : (
                      <span>
                        <ArrowDropDownIcon />
                      </span>
                    )}
                  </a>
                ) : (
                  <a>Reviews</a>
                )}
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
