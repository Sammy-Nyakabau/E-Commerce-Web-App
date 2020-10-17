/* eslint-disable */
import React from "react";
import "../Checkout.css";
import WishlistProduct from "./WishListProduct";
import { useStateValue } from "../providers/StateProvider";

function Wishlist() {
  const [{ wishlist, basket}] = useStateValue();
    console.log(wishlist)
    console.log(basket)

  return (
    <div classname="checkout">
      <div className="checkout_banner">
        <img src="https://i.ibb.co/bW9mLsk/wp1853427-airport-wallpapers.jpg" />
        <div className="checkout_banner_heading">
          <h1 id="wishlist__header">YOUR WISHLIST</h1>
        </div>
        <div className="home">
          <div className="row">
            {wishlist.map((item) => (
              <WishlistProduct key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;