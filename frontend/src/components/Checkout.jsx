/* eslint-disable */
import React from "react";
import { useStateValue } from "../providers/StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import "../styles/Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="Checkout">
      <div className="checkout_banner">
        <img src="https://i.ibb.co/3s4Jk6Z/Checkout-Banner.jpg" />
        <div className="checkout_banner_heading">
          <h1>YOUR HANGER</h1>
        </div>
        <div className="checkout_product">
          <div classname="checkout_subtotal">
            <Subtotal />
          </div>
        </div>
        <div className="checkout_home">
          <div className="row">
            {basket.map((item) => (
              <CheckoutProduct key={item.id} product={item} />
            ))}
          </div>
        </div>
        <div class="scrollbox">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
