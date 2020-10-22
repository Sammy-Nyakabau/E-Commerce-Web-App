/* eslint-disable */
import React from "react";
import "./Checkout.css";
import { toast } from "react-toastify";   
import Subtotal from "./Subtotal";
import CheckoutProduct from "./components/CheckoutProduct";
import { useStateValue } from "./providers/StateProvider";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="Checkout">
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
