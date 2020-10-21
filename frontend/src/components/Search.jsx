/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./Shop.css";
import ProductList from "./ProductList";
import { getProducts } from "../services/productService";
import "./grid.css";

function Search() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data: res } = await getProducts();
      setProducts(res);
    };
    fetchProducts();
  }, []);

  return (
    <div className="shop">
      <div id="search__banner">
        <img src="https://i.ibb.co/1vL1YBf/Sukhoi-Su-30-military-aircraft-man-black-background-1920x1080.jpg" />
      </div>
      <div className="shop_banner_heading">
        <h1>Search</h1>
      </div>


      <ProductList products={products} />
    </div>
  );
}

export default Search;
