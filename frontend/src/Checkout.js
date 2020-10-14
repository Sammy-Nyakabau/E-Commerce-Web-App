/* eslint-disable */
import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div classname="Checkout">
      <div className="checkout_banner">
        <img src="https://www.ghafari.com/uploads/photos/Turkish-LMH-1-Hero.jpg" />
        <div className="checkout_banner_heading">
          <h1>YOUR HANGER</h1>
        </div>
        <div className="checkout_product">
          <div classname="checkout_subtotal">
            <Subtotal />
          </div>

          </div>
          
        </div>
      </div>
  );
}

export default Checkout;
