/* eslint-disable */

import React, { useState,useEffect } from "react";
import "./Search.css";
import ProductList from "./ProductList";
import { getProducts } from "../services/productService";
import "./grid.css";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


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
        <div id="shop_banner">
        <img src="https://coolbackgrounds.io/images/backgrounds/black/black-contour-f41038db.svg"/>
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
        <ProductList products={products} />
        </div>
      </div>
    );

      }

export default Search;
