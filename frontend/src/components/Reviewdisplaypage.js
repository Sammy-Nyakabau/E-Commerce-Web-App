import React, { useState, useEffect } from "react";
import "./Reviewdisplaypage.css";
import { useStateValue } from "../providers/StateProvider";
import { getMyOrders } from "../services/ordersService";
import Review_component from "./Review_component";
import Product_component from "./Product_component";

function Reviewdisplaypage() {
  
  return (
    <div className="reviewdisplay">
      <div className="reviewdisplay_banner">
        <img alt="" src="https://wallpapercave.com/wp/rE73Sms.jpg" />
        <div className="reviewdisplay_heading">
          <h1>PRODUCT REVIEWS</h1>
        </div>
        <div className="reviewdisplay_product">
          <div class="scrollboxreview">
            <span />
            <span />
            <span />
          </div>
          {/* <div className="productdisplay_home">
            <div className="row">
              {products.map((product) => (
                <Product_component key={product.id} product={product} />
              ))}
            </div>
          </div> */}
        </div>
        {/* <div className="reviewdisplay_home">
            <div className="row">
              {products.map((product) => (
                <Review_component key={product.id} product={product} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    
  );
}

export default Reviewdisplaypage;
